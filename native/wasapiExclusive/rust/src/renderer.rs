use crate::{
    devices::{self, Apartment},
    gain::{self, PcmFormat},
    options::{self, Options},
    ring_buffer::{align_down, RingBuffer},
    track_store::{PcmState, PcmStore, YaspTrackStore},
};
use napi::{bindgen_prelude::*, Env, ValueType};
use napi_derive::napi;
use serde_json::{json, Value};
use std::{
    sync::{
        atomic::{AtomicBool, AtomicU64, Ordering},
        mpsc::{self, Receiver, Sender, SyncSender},
        Arc, Mutex,
    },
    thread::{self, JoinHandle},
    time::Instant,
};
use windows::{
    core::{w, HRESULT},
    Win32::{
        Foundation::*,
        Media::Audio::*,
        System::{Com::CLSCTX_ALL, Threading::*},
    },
};

#[derive(Clone)]
struct Config {
    rate: u32,
    format: PcmFormat,
    buffer_ms: u32,
    max_queued_ms: u32,
    timer: bool,
    poll_ms: u32,
    period_ms: u32,
    buffer_periods: u32,
    defer: bool,
    extensible: bool,
    device_id: String,
}
impl Config {
    fn parse(env: Env, value: Option<Unknown>) -> Result<Self> {
        let value = Options::new(value)?;
        let float = value.boolean("float", false)?;
        let bits = if float {
            32
        } else {
            value.size("bitsPerSample", 16, 16, 32)? as u32
        };
        let container = if float {
            32
        } else {
            value.size("containerBitsPerSample", bits as usize, 16, 32)? as u32
        };
        if !float && ![16, 24, 32].contains(&bits) {
            return Err(options::range_error(
                env,
                "bitsPerSample must be 16, 24, or 32 for integer PCM",
            ));
        }
        if !float && container != bits && !(bits == 24 && container == 32) {
            return Err(options::range_error(env,"containerBitsPerSample must match bitsPerSample, except 24-bit PCM may use a 32-bit container"));
        }
        let poll_ms = value.size("timerPollMs", 5, 1, 50)? as u32;
        Ok(Self {
            rate: value.size("sampleRate", 48000, 8000, 384000)? as u32,
            format: PcmFormat {
                channels: value.size("channels", 2, 1, 2)? as u32,
                bits,
                container,
                float,
            },
            buffer_ms: value.size("bufferMs", 50, 0, 500)? as u32,
            max_queued_ms: value.size("maxQueuedMs", 1000, 50, 60000)? as u32,
            timer: value.string("renderMode")? == "timer",
            poll_ms,
            period_ms: value.size("timerPeriodMs", (poll_ms * 2).max(2) as usize, 2, 100)? as u32,
            buffer_periods: value.size("timerBufferPeriods", 4, 2, 16)? as u32,
            defer: value.boolean("deferStart", false)?,
            extensible: container != bits || value.boolean("waveFormatExtensible", true)?,
            device_id: value.string("deviceId")?,
        })
    }
}

// Kernel event handles may be signalled from the JS thread and waited on by the audio thread.
// This owner keeps the OS handle alive until both Arc owners have released it; COM is never stored here.
struct Handle(usize);
impl Handle {
    fn raw(&self) -> HANDLE {
        HANDLE(self.0 as _)
    }
    fn event() -> windows::core::Result<Self> {
        // SAFETY: unnamed auto-reset event with no borrowed security descriptor/name.
        unsafe { CreateEventW(None, false, false, None).map(|handle| Self(handle.0 as usize)) }
    }
    fn signal(&self) -> windows::core::Result<()> {
        // SAFETY: this owner retains the live kernel event handle during SetEvent.
        unsafe { SetEvent(self.raw()) }
    }
}
impl Drop for Handle {
    fn drop(&mut self) {
        // SAFETY: the last owner closes this handle once, after the wait loop has joined.
        unsafe {
            let _ = CloseHandle(self.raw());
        }
    }
}

struct Mmcss(HANDLE);
impl Drop for Mmcss {
    fn drop(&mut self) {
        // SAFETY: MMCSS registration and revert occur on the same owning audio thread.
        unsafe {
            let _ = AvRevertMmThreadCharacteristics(self.0);
        }
    }
}

struct Shared {
    queue: Mutex<RingBuffer>,
    started: AtomicBool,
    closed: AtomicBool,
    written: AtomicU64,
    gain: AtomicU64,
    target_gain: AtomicU64,
}

struct Info {
    config: Config,
    frames: u32,
    period_frames: u32,
    id: String,
    name: String,
    requested_duration: i64,
    requested_period: i64,
    duration: i64,
    period: i64,
    default_period: i64,
    minimum_period: i64,
    adjusted: bool,
}

#[derive(Default, Clone)]
struct Metrics {
    played: u64,
    rendered: u64,
    primed: u64,
    source_read: u64,
    padding: u32,
    wakeups: u64,
    interval_samples: u64,
    total_us: u64,
    last_us: u64,
    min_us: u64,
    max_us: u64,
    late: u64,
    timeouts: u64,
    partial_buffers: u64,
    packets: u64,
    incomplete_periods: u64,
    incomplete_events: u64,
    underruns: u64,
    underrun_frames: u64,
    flushes: u64,
    clock_frequency: u64,
    clock_start: u64,
    clock_position: u64,
    clock_qpc: u64,
    clock_valid: bool,
    last_hr: i32,
}

#[derive(Clone)]
struct State {
    info: Arc<Info>,
    metrics: Metrics,
    attached: bool,
    source: PcmState,
    offset: usize,
    start_offset: usize,
    clock_available: bool,
}
impl State {
    fn value(&self, shared: &Shared) -> Value {
        let config = &self.info.config;
        let info = &self.info;
        let metrics = &self.metrics;
        let queue = shared.queue.lock().unwrap();
        let available = if self.attached {
            self.source.bytes.saturating_sub(self.offset)
        } else {
            0
        };
        let queued = if self.attached {
            available
        } else {
            queue.length
        };
        let capacity = if self.attached {
            self.source.max_bytes
        } else {
            queue.capacity()
        };
        let alignment = config.format.alignment();
        let expected = if config.timer {
            config.poll_ms as f64
        } else {
            info.frames as f64 * 1000.0 / config.rate as f64
        };
        let average = if metrics.interval_samples > 0 {
            metrics.total_us as f64 / metrics.interval_samples as f64 / 1000.0
        } else {
            0.0
        };
        let gain = f64::from_bits(shared.gain.load(Ordering::Relaxed));
        let target = f64::from_bits(shared.target_gain.load(Ordering::Relaxed));
        let elapsed = if metrics.clock_valid && metrics.clock_frequency > 0 {
            metrics.clock_position.saturating_sub(metrics.clock_start) as f64 * config.rate as f64
                / metrics.clock_frequency as f64
        } else {
            0.0
        };
        json!({"sampleRate":config.rate,"channels":config.format.channels,"bitsPerSample":config.format.bits,"validBitsPerSample":config.format.bits,
            "containerBitsPerSample":config.format.container,"sampleFormat":config.format.name(),"float":config.format.float,"waveFormatExtensible":config.extensible,
            "renderMode":if config.timer {"timer"}else{"event"},"timerPollMs":config.poll_ms,"timerPeriodMs":config.period_ms,"timerBufferPeriods":config.buffer_periods,
            "bufferMs":config.buffer_ms,"bufferPeriodMode":if config.buffer_ms==0 {"device-default"}else{"explicit"},
            "requestedBufferDurationMs":info.requested_duration as f64/10000.0,"initializedBufferDurationMs":info.duration as f64/10000.0,
            "requestedPeriodicityMs":info.requested_period as f64/10000.0,"initializedPeriodicityMs":info.period as f64/10000.0,
            "defaultDevicePeriodMs":info.default_period as f64/10000.0,"minimumDevicePeriodMs":info.minimum_period as f64/10000.0,
            "actualBufferMs":info.frames as f64*1000.0/config.rate as f64,"bufferAlignmentAdjusted":info.adjusted,"maxQueuedMs":config.max_queued_ms,
            "deviceId":info.id,"deviceName":info.name,"blockAlign":alignment,"bufferFrames":info.frames,"periodFrames":info.period_frames,"paddingFrames":metrics.padding,
            "queuedBytes":queued,"queuedFrames":queued/alignment,"queueCapacityBytes":capacity,"queueCapacityFrames":capacity/alignment,
            "droppedBytes":0,"rejectedBytes":queue.rejected,"partialWrites":queue.partial,
            "writtenFrames":if self.attached {self.source.received/alignment as u64}else{shared.written.load(Ordering::Relaxed)},
            "playedFrames":metrics.played,"renderedFrames":metrics.rendered,"primedFrames":metrics.primed,"eventWakeups":metrics.wakeups,"renderWakeups":metrics.wakeups,
            "eventIntervalSamples":metrics.interval_samples,"expectedEventIntervalMs":expected,"lastEventIntervalMs":metrics.last_us as f64/1000.0,
            "averageEventIntervalMs":average,"minimumEventIntervalMs":if metrics.interval_samples>0 {metrics.min_us as f64/1000.0}else{0.0},
            "maximumEventIntervalMs":metrics.max_us as f64/1000.0,"eventCadenceRatio":if expected>0.0 {average/expected}else{0.0},"lateEventWakeups":metrics.late,
            "waitTimeouts":metrics.timeouts,"partialBufferWrites":metrics.partial_buffers,"periodPacketWrites":metrics.packets,"incompletePeriodWakeups":metrics.incomplete_periods,
            "incompleteEventBufferWakeups":metrics.incomplete_events,"underruns":metrics.underruns,"underrunFrames":metrics.underrun_frames,"flushes":metrics.flushes,
            "lastHRESULT":devices::hr_text(HRESULT(metrics.last_hr)),"lastHRESULTCode":metrics.last_hr,"lastRenderHr":devices::hr_text(HRESULT(metrics.last_hr)),
            "pcmSourceAttached":self.attached,"pcmSourceBytes":self.source.bytes,"pcmSourceStartByteOffset":self.start_offset,"pcmSourceByteOffset":self.offset,
            "pcmSourceAvailableBytes":available,"pcmSourceAvailableFrames":available/alignment,"pcmSourceReadFrames":metrics.source_read,
            "audioClockAvailable":self.clock_available,"audioClockValid":metrics.clock_valid,"audioClockFrequency":metrics.clock_frequency,"audioClockStartPosition":metrics.clock_start,
            "audioClockPosition":metrics.clock_position,"audioClockQpcPosition":metrics.clock_qpc,"audioClockElapsedFrames":elapsed,
            "volumeGain":gain,"targetVolumeGain":target,"volumeProcessingActive":gain<1.0||target<1.0,"started":shared.started.load(Ordering::Acquire),
            "deferStart":config.defer,"closed":shared.closed.load(Ordering::Acquire)})
    }
}

enum Failure {
    Error(String),
    Range(&'static str),
}
impl Failure {
    fn napi(self, env: Env) -> Error {
        match self {
            Self::Error(message) => options::runtime_error(env, &message),
            Self::Range(message) => options::range_error(env, message),
        }
    }
}
type AudioResult<T> = std::result::Result<T, Failure>;

enum Command {
    Start(SyncSender<AudioResult<bool>>),
    Attach(Arc<PcmStore>, usize, SyncSender<AudioResult<bool>>),
    Seek(usize, SyncSender<AudioResult<bool>>),
    Flush(SyncSender<AudioResult<f64>>),
    State(SyncSender<State>),
    Close(SyncSender<State>),
}

struct Worker {
    device: Option<IMMDevice>,
    client: Option<IAudioClient>,
    render: Option<IAudioRenderClient>,
    clock: Option<IAudioClock>,
    render_signal: Handle,
    command_signal: Arc<Handle>,
    shared: Arc<Shared>,
    info: Arc<Info>,
    metrics: Metrics,
    source: Option<Arc<PcmStore>>,
    offset: usize,
    start_offset: usize,
    active: bool,
    previous_wakeup: Option<Instant>,
    last_render_wakeup: Instant,
}

impl Worker {
    fn open(
        config: Config,
        shared: Arc<Shared>,
        command_signal: Arc<Handle>,
    ) -> windows::core::Result<Self> {
        let enumerator = devices::enumerator()?;
        let device = devices::select_device(&enumerator, &config.device_id)?;
        let id = devices::device_id(&device);
        let name = devices::device_name(&device);
        let wave = devices::wave_format(config.rate, config.format, config.extensible);
        // SAFETY: all Core Audio interfaces are created and used on this dedicated COM thread.
        unsafe {
            let mut client: IAudioClient = device.Activate(CLSCTX_ALL, None)?;
            let format_hr =
                client.IsFormatSupported(AUDCLNT_SHAREMODE_EXCLUSIVE, &wave.Format, None);
            if format_hr != S_OK {
                return Err(if format_hr.is_err() {
                    format_hr
                } else {
                    AUDCLNT_E_UNSUPPORTED_FORMAT
                }
                .into());
            }
            let (mut default_period, mut minimum_period) = (0, 0);
            client.GetDevicePeriod(Some(&mut default_period), Some(&mut minimum_period))?;
            let mut period = if config.timer {
                (config.period_ms as i64 * 10000).max(minimum_period)
            } else {
                0
            };
            let mut duration = if config.timer {
                period * config.buffer_periods as i64
            } else if config.buffer_ms == 0 {
                default_period.max(minimum_period)
            } else {
                (config.buffer_ms as i64 * 10000).max(minimum_period)
            };
            if !config.timer {
                period = duration;
            }
            let (requested_duration, requested_period) = (duration, period);
            let flags = AUDCLNT_STREAMFLAGS_NOPERSIST
                | if config.timer {
                    0
                } else {
                    AUDCLNT_STREAMFLAGS_EVENTCALLBACK
                };
            let mut initialized = client.Initialize(
                AUDCLNT_SHAREMODE_EXCLUSIVE,
                flags,
                duration,
                period,
                &wave.Format,
                None,
            );
            let mut adjusted = false;
            if initialized
                .as_ref()
                .err()
                .is_some_and(|error| error.code() == AUDCLNT_E_BUFFER_SIZE_NOT_ALIGNED)
            {
                let aligned = match client.GetBufferSize() {
                    Ok(frames) if frames > 0 => frames,
                    _ => return Err(AUDCLNT_E_BUFFER_SIZE_NOT_ALIGNED.into()),
                };
                drop(client);
                client = device.Activate(CLSCTX_ALL, None)?;
                duration = (10000000.0 * aligned as f64 / config.rate as f64 + 0.5) as i64;
                period = if config.timer {
                    (duration / config.buffer_periods as i64).max(minimum_period)
                } else {
                    duration
                };
                adjusted = true;
                initialized = client.Initialize(
                    AUDCLNT_SHAREMODE_EXCLUSIVE,
                    flags,
                    duration,
                    period,
                    &wave.Format,
                    None,
                );
            }
            initialized?;
            let render_signal = if config.timer {
                Handle(
                    CreateWaitableTimerExW(
                        None,
                        None,
                        CREATE_WAITABLE_TIMER_HIGH_RESOLUTION,
                        TIMER_ALL_ACCESS.0,
                    )
                    .or_else(|_| CreateWaitableTimerW(None, false, None))?
                    .0 as usize,
                )
            } else {
                let event = Handle::event()?;
                client.SetEventHandle(event.raw())?;
                event
            };
            let render: IAudioRenderClient = client.GetService()?;
            let mut clock = client.GetService::<IAudioClock>().ok();
            let frequency = clock
                .as_ref()
                .and_then(|clock| clock.GetFrequency().ok())
                .unwrap_or(0);
            if frequency == 0 {
                clock = None;
            }
            let frames = client.GetBufferSize()?;
            let period_frames = if config.timer {
                (frames / config.buffer_periods).max(1)
            } else {
                frames
            };
            let alignment = config.format.alignment();
            *shared.queue.lock().unwrap() = RingBuffer::new(
                config.rate as usize * alignment * config.max_queued_ms as usize / 1000,
                alignment,
            );
            let info = Arc::new(Info {
                config,
                frames,
                period_frames,
                id,
                name,
                requested_duration,
                requested_period,
                duration,
                period,
                default_period,
                minimum_period,
                adjusted,
            });
            let mut worker = Self {
                device: Some(device),
                client: Some(client),
                render: Some(render),
                clock,
                render_signal,
                command_signal,
                shared,
                info,
                metrics: Metrics {
                    clock_frequency: frequency,
                    ..Default::default()
                },
                source: None,
                offset: 0,
                start_offset: 0,
                active: false,
                previous_wakeup: None,
                last_render_wakeup: Instant::now(),
            };
            if !worker.info.config.defer {
                worker.start()?;
            }
            Ok(worker)
        }
    }

    fn client(&self) -> &IAudioClient {
        self.client.as_ref().unwrap()
    }
    fn reset_timing(&mut self) {
        self.metrics.interval_samples = 0;
        self.metrics.total_us = 0;
        self.metrics.last_us = 0;
        self.metrics.min_us = 0;
        self.metrics.max_us = 0;
        self.metrics.late = 0;
        self.previous_wakeup = None;
    }
    fn reset_playback(&mut self) {
        let m = &mut self.metrics;
        m.played = 0;
        m.rendered = 0;
        m.primed = 0;
        m.source_read = 0;
        m.padding = 0;
        m.underruns = 0;
        m.underrun_frames = 0;
        m.packets = 0;
        m.incomplete_periods = 0;
        m.incomplete_events = 0;
        m.clock_valid = false;
        self.reset_timing();
    }
    fn clock_baseline(&mut self) {
        let Some(clock) = &self.clock else {
            self.metrics.clock_valid = false;
            return;
        };
        let (mut position, mut qpc) = (0, 0);
        // SAFETY: this audio clock belongs to this thread; both output pointers are valid.
        match unsafe { clock.GetPosition(&mut position, Some(&mut qpc)) } {
            Ok(()) => {
                self.metrics.clock_start = position;
                self.metrics.clock_position = position;
                self.metrics.clock_qpc = qpc;
                self.metrics.clock_valid = true;
            }
            Err(error) => {
                self.metrics.last_hr = error.code().0;
                self.metrics.clock_valid = false;
            }
        }
    }
    fn fill(&mut self, frames: u32, silence: bool) -> windows::core::Result<usize> {
        let render = self.render.as_ref().unwrap();
        // SAFETY: GetBuffer owns frames of writable endpoint memory until ReleaseBuffer on this thread.
        // Its checked length is frames * the initialized block alignment; no pointer escapes this call.
        unsafe {
            let pointer = render.GetBuffer(frames)?;
            let length = frames as usize * self.info.config.format.alignment();
            if pointer.is_null() {
                let _ = render.ReleaseBuffer(frames, AUDCLNT_BUFFERFLAGS_SILENT.0 as u32);
                return Err(E_POINTER.into());
            }
            let output = std::slice::from_raw_parts_mut(pointer, length);
            let read = if silence {
                0
            } else if let Some(source) = &self.source {
                let read = source.read(self.offset, output);
                self.offset += read;
                self.metrics.source_read +=
                    read as u64 / self.info.config.format.alignment() as u64;
                read
            } else {
                self.shared
                    .queue
                    .lock()
                    .unwrap()
                    .read(output, self.info.config.format.alignment())
            };
            output[read..].fill(0);
            if read > 0 {
                let start = f64::from_bits(self.shared.gain.load(Ordering::Relaxed));
                let end = f64::from_bits(self.shared.target_gain.load(Ordering::Relaxed));
                gain::apply(output, frames as usize, self.info.config.format, start, end);
                self.shared.gain.store(end.to_bits(), Ordering::Relaxed);
            }
            render.ReleaseBuffer(
                frames,
                if read == 0 {
                    AUDCLNT_BUFFERFLAGS_SILENT.0 as u32
                } else {
                    0
                },
            )?;
            Ok(read)
        }
    }
    fn prime(&mut self) -> windows::core::Result<()> {
        let read = self.fill(self.info.frames, false)?;
        let frames = read as u64 / self.info.config.format.alignment() as u64;
        self.metrics.played += frames;
        self.metrics.rendered += self.info.frames as u64;
        self.metrics.primed += frames;
        self.metrics.padding = self.info.frames;
        Ok(())
    }
    fn start(&mut self) -> windows::core::Result<()> {
        if self.shared.started.load(Ordering::Acquire) {
            return Ok(());
        }
        if self.shared.closed.load(Ordering::Acquire) || self.client.is_none() {
            return Err(E_UNEXPECTED.into());
        }
        self.prime()?;
        // SAFETY: the timer and audio client are live and used only on their owning thread.
        unsafe {
            if self.info.config.timer {
                let due = -(self.info.config.poll_ms as i64) * 10000;
                SetWaitableTimer(
                    self.render_signal.raw(),
                    &due,
                    self.info.config.poll_ms as i32,
                    None,
                    None,
                    false,
                )?;
            }
            if let Err(error) = self.client().Start() {
                if self.info.config.timer {
                    let _ = CancelWaitableTimer(self.render_signal.raw());
                }
                self.shared.closed.store(true, Ordering::Release);
                return Err(error);
            }
        }
        self.shared.started.store(true, Ordering::Release);
        self.active = true;
        self.last_render_wakeup = Instant::now();
        self.clock_baseline();
        self.metrics.last_hr = 0;
        Ok(())
    }
    fn render_available(&mut self) -> windows::core::Result<()> {
        // SAFETY: GetCurrentPadding is called on the same thread that owns the initialized client.
        let padding = unsafe { self.client().GetCurrentPadding()? };
        self.metrics.padding = padding;
        if padding >= self.info.frames {
            self.metrics.last_hr = 0;
            return Ok(());
        }
        let available = self.info.frames - padding;
        let frames = if self.info.config.timer {
            available / self.info.period_frames * self.info.period_frames
        } else {
            available
        };
        if self.info.config.timer && frames == 0 {
            self.metrics.incomplete_periods += 1;
            self.metrics.last_hr = 0;
            return Ok(());
        }
        if !self.info.config.timer && frames != self.info.frames {
            self.metrics.incomplete_events += 1;
            self.metrics.last_hr = 0;
            return Ok(());
        }
        if frames != self.info.frames {
            self.metrics.partial_buffers += 1;
        }
        let read = self.fill(frames, false)?;
        let read_frames = read as u64 / self.info.config.format.alignment() as u64;
        if read < frames as usize * self.info.config.format.alignment() {
            self.metrics.underruns += 1;
            self.metrics.underrun_frames += frames as u64 - read_frames;
        }
        self.metrics.played += read_frames;
        self.metrics.rendered += frames as u64;
        self.metrics.packets += if self.info.config.timer {
            frames / self.info.period_frames
        } else {
            1
        } as u64;
        self.metrics.padding = (padding + frames).min(self.info.frames);
        self.metrics.last_hr = 0;
        Ok(())
    }
    fn track_wakeup(&mut self) {
        let now = Instant::now();
        if let Some(previous) = self.previous_wakeup {
            let us = now.duration_since(previous).as_micros() as u64;
            if us > 0 {
                let m = &mut self.metrics;
                m.interval_samples += 1;
                m.total_us += us;
                m.last_us = us;
                m.min_us = if m.interval_samples == 1 {
                    us
                } else {
                    m.min_us.min(us)
                };
                m.max_us = m.max_us.max(us);
                let expected = if self.info.config.timer {
                    self.info.config.poll_ms as f64
                } else {
                    self.info.frames as f64 * 1000.0 / self.info.config.rate as f64
                };
                if us as f64 > expected * 1250.0 {
                    m.late += 1;
                }
            }
        }
        self.previous_wakeup = Some(now);
        self.last_render_wakeup = now;
        self.metrics.wakeups += 1;
    }
    fn snapshot(&mut self) -> State {
        if self.shared.started.load(Ordering::Acquire)
            && !self.shared.closed.load(Ordering::Acquire)
        {
            // SAFETY: all COM queries remain on the owning audio thread; no interface crosses the channel.
            unsafe {
                match self.client().GetCurrentPadding() {
                    Ok(padding) => self.metrics.padding = padding,
                    Err(error) => self.metrics.last_hr = error.code().0,
                }
                if let Some(clock) = &self.clock {
                    let (mut position, mut qpc) = (0, 0);
                    match clock.GetPosition(&mut position, Some(&mut qpc)) {
                        Ok(()) => {
                            self.metrics.clock_position = position;
                            self.metrics.clock_qpc = qpc;
                        }
                        Err(error) => self.metrics.last_hr = error.code().0,
                    }
                }
            }
        }
        State {
            info: self.info.clone(),
            metrics: self.metrics.clone(),
            attached: self.source.is_some(),
            source: self
                .source
                .as_ref()
                .map(|source| source.state())
                .unwrap_or_default(),
            offset: self.offset,
            start_offset: self.start_offset,
            clock_available: self.clock.is_some() && self.metrics.clock_frequency > 0,
        }
    }
    fn attach(&mut self, source: Arc<PcmStore>, offset: usize) -> AudioResult<bool> {
        if self.shared.started.load(Ordering::Acquire) {
            return Err(Failure::Error(
                "Cannot attach a PCM source after the WASAPI renderer has started".into(),
            ));
        }
        if offset > source.state().bytes {
            return Err(Failure::Range(
                "PCM source byte offset is beyond decoded audio",
            ));
        }
        self.source = Some(source);
        self.start_offset = offset;
        self.offset = offset;
        self.reset_playback();
        Ok(true)
    }
    fn seek(&mut self, offset: usize) -> AudioResult<bool> {
        let Some(source) = &self.source else {
            return Ok(false);
        };
        if source.state().bytes.saturating_sub(offset)
            < self.info.frames as usize * self.info.config.format.alignment()
        {
            return Ok(false);
        }
        let started = self.shared.started.load(Ordering::Acquire);
        // SAFETY: stop/reset/prime/start are serialized with all rendering on this thread.
        let reset = unsafe {
            if started {
                self.client().Stop().and_then(|_| self.client().Reset())
            } else {
                Ok(())
            }
        };
        if let Err(error) = reset {
            self.metrics.last_hr = error.code().0;
            return Err(Failure::Error(format!(
                "Failed to reset WASAPI renderer for PCM seek: {}",
                devices::hr_text(error.code())
            )));
        }
        self.offset = offset;
        self.start_offset = offset;
        self.reset_playback();
        let restart = self.prime().and_then(|_| {
            // SAFETY: the same initialized client was stopped/reset above on this thread.
            unsafe {
                if started {
                    self.client().Start()
                } else {
                    Ok(())
                }
            }
        });
        if let Err(error) = restart {
            self.metrics.last_hr = error.code().0;
            return Err(Failure::Error(format!(
                "Failed to restart WASAPI renderer after PCM seek: {}",
                devices::hr_text(error.code())
            )));
        }
        if started {
            self.clock_baseline();
        }
        self.metrics.flushes += 1;
        self.metrics.last_hr = 0;
        Ok(true)
    }
    fn flush(&mut self) -> AudioResult<f64> {
        let cleared = self.shared.queue.lock().unwrap().clear();
        self.metrics.flushes += 1;
        if !self.shared.started.load(Ordering::Acquire) {
            return Ok(cleared as f64);
        }
        // SAFETY: the stop/reset pair is serialized with rendering on this owning thread.
        let stopped = unsafe { self.client().Stop() };
        if let Err(error) = stopped {
            self.metrics.last_hr = error.code().0;
            return Err(Failure::Error(format!(
                "Failed to flush WASAPI exclusive renderer: {}",
                devices::hr_text(error.code())
            )));
        }
        // SAFETY: the same initialized client has just stopped on this thread.
        let reset = unsafe { self.client().Reset() };
        if let Err(error) = reset {
            self.metrics.last_hr = error.code().0;
            // SAFETY: preserve the previous client's best-effort restart on a reset failure.
            if let Err(restart) = unsafe { self.client().Start() } {
                self.metrics.last_hr = restart.code().0;
            }
            return Err(Failure::Error(format!(
                "Failed to flush WASAPI exclusive renderer: {}",
                devices::hr_text(error.code())
            )));
        }
        let restart = self.fill(self.info.frames, true).and_then(|_| {
            self.metrics.padding = self.info.frames;
            self.reset_timing();
            // SAFETY: the live same-thread client has been primed with endpoint silence.
            unsafe { self.client().Start() }
        });
        if let Err(error) = restart {
            self.metrics.last_hr = error.code().0;
            return Err(Failure::Error(format!(
                "Failed to flush WASAPI exclusive renderer: {}",
                devices::hr_text(error.code())
            )));
        }
        self.metrics.last_hr = 0;
        Ok(cleared as f64)
    }
    fn shutdown(&mut self) {
        self.active = false;
        // SAFETY: the owning audio thread stops the endpoint/timer before releasing its interfaces.
        unsafe {
            if self.shared.started.swap(false, Ordering::AcqRel) {
                if let Some(client) = &self.client {
                    let _ = client.Stop();
                }
            }
            if self.info.config.timer {
                let _ = CancelWaitableTimer(self.render_signal.raw());
            }
        }
        self.render = None;
        self.clock = None;
        self.client = None;
        self.device = None;
        self.source = None;
        self.shared.closed.store(true, Ordering::Release);
    }
    fn run(mut self, receiver: Receiver<Command>) {
        let mut task_index = 0;
        // SAFETY: MMCSS lifetime is local to this audio thread, and is reverted before it exits.
        let _mmcss = unsafe { AvSetMmThreadCharacteristicsW(w!("Pro Audio"), &mut task_index) }
            .ok()
            .map(Mmcss);
        loop {
            if self.active && self.last_render_wakeup.elapsed().as_millis() >= 2000 {
                self.metrics.timeouts += 1;
                self.metrics.last_hr = HRESULT::from_win32(WAIT_TIMEOUT.0).0;
                self.active = false;
            }
            let active = self.active;
            let handles = [self.render_signal.raw(), self.command_signal.raw()];
            // SAFETY: both owned handles outlive this wait; command_event is signalled after enqueue.
            let wake = unsafe {
                WaitForMultipleObjects(
                    if active { &handles } else { &handles[1..] },
                    false,
                    if active {
                        (2000 - self.last_render_wakeup.elapsed().as_millis().min(2000)) as u32
                    } else {
                        INFINITE
                    },
                )
            };
            if (!active && wake == WAIT_OBJECT_0) || (active && wake.0 == WAIT_OBJECT_0.0 + 1) {
                match receiver.try_recv() {
                    Ok(Command::Start(reply)) => {
                        let result = self.start().map(|_| true).map_err(|error| {
                            self.metrics.last_hr = error.code().0;
                            Failure::Error(format!(
                                "Failed to start WASAPI exclusive renderer: {}",
                                devices::hr_text(error.code())
                            ))
                        });
                        let _ = reply.send(result);
                    }
                    Ok(Command::Attach(source, offset, reply)) => {
                        let result = self.attach(source, offset);
                        let _ = reply.send(result);
                    }
                    Ok(Command::Seek(offset, reply)) => {
                        let result = self.seek(offset);
                        let _ = reply.send(result);
                    }
                    Ok(Command::Flush(reply)) => {
                        let result = self.flush();
                        let _ = reply.send(result);
                    }
                    Ok(Command::State(reply)) => {
                        let state = self.snapshot();
                        let _ = reply.send(state);
                    }
                    Ok(Command::Close(reply)) => {
                        self.shutdown();
                        let state = self.snapshot();
                        let _ = reply.send(state);
                        break;
                    }
                    Err(mpsc::TryRecvError::Disconnected) => break,
                    Err(mpsc::TryRecvError::Empty) => {}
                }
            } else if wake == WAIT_OBJECT_0 {
                self.track_wakeup();
                if let Err(error) = self.render_available() {
                    self.metrics.last_hr = error.code().0;
                    self.active = false;
                }
            } else if wake == WAIT_TIMEOUT {
                self.metrics.timeouts += 1;
                self.metrics.last_hr = HRESULT::from_win32(WAIT_TIMEOUT.0).0;
                self.active = false;
            } else if wake == WAIT_FAILED {
                self.metrics.last_hr = windows::core::Error::from_thread().code().0;
                self.active = false;
                if !active {
                    break;
                }
            }
        }
        self.shutdown();
    }
}
impl Drop for Worker {
    fn drop(&mut self) {
        self.shutdown();
    }
}

#[napi]
pub struct WasapiExclusiveRenderer {
    sender: Option<Sender<Command>>,
    signal: Arc<Handle>,
    thread: Option<JoinHandle<()>>,
    shared: Arc<Shared>,
    info: Arc<Info>,
    final_state: Option<State>,
}

impl WasapiExclusiveRenderer {
    fn request<T>(
        &self,
        command: impl FnOnce(SyncSender<T>) -> Command,
    ) -> std::result::Result<T, String> {
        let (reply, receiver) = mpsc::sync_channel(1);
        self.sender
            .as_ref()
            .ok_or("WASAPI renderer is closed")?
            .send(command(reply))
            .map_err(|_| "WASAPI audio thread is unavailable")?;
        self.signal.signal().map_err(|error| {
            format!(
                "Failed to signal WASAPI audio thread: {}",
                devices::hr_text(error.code())
            )
        })?;
        receiver
            .recv()
            .map_err(|_| "WASAPI audio thread closed without a response".into())
    }
    fn close_internal(&mut self) {
        if self.sender.is_some() {
            if let Ok(state) = self.request(Command::Close) {
                self.final_state = Some(state);
            }
            self.sender = None;
        }
        if let Some(thread) = self.thread.take() {
            let _ = thread.join();
        }
    }
}

#[napi]
impl WasapiExclusiveRenderer {
    #[napi(constructor)]
    pub fn new(env: Env, options: Option<Unknown>) -> Result<Self> {
        let config = Config::parse(env, options)?;
        let alignment = config.format.alignment();
        let shared = Arc::new(Shared {
            queue: Mutex::new(RingBuffer::new(0, alignment)),
            started: AtomicBool::new(false),
            closed: AtomicBool::new(false),
            written: AtomicU64::new(0),
            gain: AtomicU64::new(1.0f64.to_bits()),
            target_gain: AtomicU64::new(1.0f64.to_bits()),
        });
        let signal = Arc::new(Handle::event().map_err(|error| {
            options::runtime_error(
                env,
                &format!(
                    "Failed to initialize WASAPI exclusive renderer: {}",
                    devices::hr_text(error.code())
                ),
            )
        })?);
        let (sender, receiver) = mpsc::channel();
        let (ready, opened) = mpsc::sync_channel(1);
        let worker_shared = shared.clone();
        let worker_signal = signal.clone();
        let thread = thread::Builder::new()
            .name("pulsesync-wasapi".into())
            .spawn(move || {
                let apartment = Apartment::new();
                match apartment {
                    Err(error) => {
                        let _ = ready.send(Err(error.code()));
                    }
                    Ok(_apartment) => match Worker::open(config, worker_shared, worker_signal) {
                        Err(error) => {
                            let _ = ready.send(Err(error.code()));
                        }
                        Ok(worker) => {
                            if ready.send(Ok(worker.info.clone())).is_ok() {
                                worker.run(receiver);
                            }
                        }
                    },
                }
            })
            .map_err(|error| {
                options::runtime_error(
                    env,
                    &format!("Failed to create WASAPI audio thread: {error}"),
                )
            })?;
        match opened.recv() {
            Ok(Ok(info)) => Ok(Self {
                sender: Some(sender),
                signal,
                thread: Some(thread),
                shared,
                info,
                final_state: None,
            }),
            result => {
                let _ = thread.join();
                let hr = result
                    .ok()
                    .and_then(|value| value.err())
                    .unwrap_or(E_UNEXPECTED);
                Err(options::runtime_error(
                    env,
                    &format!(
                        "Failed to initialize WASAPI exclusive renderer: {}",
                        devices::hr_text(hr)
                    ),
                ))
            }
        }
    }
    #[napi]
    pub fn write(&self, env: Env, data: Unknown) -> Result<f64> {
        if self.shared.closed.load(Ordering::Acquire) {
            return Ok(0.0);
        }
        let data = options::buffer(env, data, "Expected write(buffer: Buffer)")?;
        let length = self
            .shared
            .queue
            .lock()
            .unwrap()
            .write(&data, self.info.config.format.alignment());
        self.shared.written.fetch_add(
            (length / self.info.config.format.alignment()) as u64,
            Ordering::Relaxed,
        );
        Ok(length as f64)
    }
    #[napi(js_name = "attachPcmSource")]
    pub fn attach_pcm_source(
        &self,
        env: Env,
        source: Unknown,
        offset: Option<Unknown>,
    ) -> Result<bool> {
        let source = ClassInstance::<YaspTrackStore>::from_unknown(source)
            .map_err(|_| options::type_error(env, "Expected a native YaspTrackStore PCM source"))?;
        let offset = match offset {
            Some(offset) if offset.get_type()? == ValueType::Number => f64::from_unknown(offset)?,
            _ => 0.0,
        };
        if !offset.is_finite() || offset < 0.0 {
            return Err(options::range_error(
                env,
                "PCM source byte offset must be a non-negative finite number",
            ));
        }
        let offset = align_down(offset as usize, self.info.config.format.alignment());
        let source = source.pcm.clone();
        self.request(|reply| Command::Attach(source, offset, reply))
            .map_err(|message| options::runtime_error(env, &message))?
            .map_err(|error| error.napi(env))
    }
    #[napi(js_name = "seekPcmSource")]
    pub fn seek_pcm_source(&self, env: Env, offset: Unknown) -> Result<bool> {
        if self.shared.closed.load(Ordering::Acquire) || offset.get_type()? != ValueType::Number {
            return Ok(false);
        }
        let offset = f64::from_unknown(offset)?;
        if !offset.is_finite() || offset < 0.0 {
            return Ok(false);
        }
        let offset = align_down(offset as usize, self.info.config.format.alignment());
        self.request(|reply| Command::Seek(offset, reply))
            .map_err(|message| options::runtime_error(env, &message))?
            .map_err(|error| error.napi(env))
    }
    #[napi]
    pub fn start(&self, env: Env) -> Result<bool> {
        if self.sender.is_none() {
            return Err(options::runtime_error(
                env,
                &format!(
                    "Failed to start WASAPI exclusive renderer: {}",
                    devices::hr_text(E_UNEXPECTED)
                ),
            ));
        }
        self.request(Command::Start)
            .map_err(|message| options::runtime_error(env, &message))?
            .map_err(|error| error.napi(env))
    }
    #[napi(js_name = "setVolumeGain")]
    pub fn set_volume_gain(&self, env: Env, gain: Unknown) -> Result<f64> {
        let gain = options::number(env, gain, "Expected setVolumeGain(gain: number)")?;
        if !gain.is_finite() {
            return Err(options::range_error(
                env,
                "Volume gain must be a finite number",
            ));
        }
        let gain = gain.clamp(0.0, 1.0);
        self.shared
            .target_gain
            .store(gain.to_bits(), Ordering::Relaxed);
        if !self.shared.started.load(Ordering::Acquire) {
            self.shared.gain.store(gain.to_bits(), Ordering::Relaxed);
        }
        Ok(gain)
    }
    #[napi]
    pub fn flush(&self, env: Env) -> Result<f64> {
        if self.shared.closed.load(Ordering::Acquire) {
            return Ok(0.0);
        }
        self.request(Command::Flush)
            .map_err(|message| options::runtime_error(env, &message))?
            .map_err(|error| error.napi(env))
    }
    #[napi(js_name = "getState")]
    pub fn get_state(&self, env: Env) -> Result<Value> {
        if let Some(state) = &self.final_state {
            return Ok(state.value(&self.shared));
        }
        self.request(Command::State)
            .map(|state| state.value(&self.shared))
            .map_err(|message| options::runtime_error(env, &message))
    }
    #[napi]
    pub fn close(&mut self) {
        self.close_internal();
    }
}
impl Drop for WasapiExclusiveRenderer {
    fn drop(&mut self) {
        self.close_internal();
    }
}
