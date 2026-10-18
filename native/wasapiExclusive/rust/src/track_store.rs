use crate::options::{self, Options};
use napi::{bindgen_prelude::*, Env};
use napi_derive::napi;
use serde_json::{json, Value};
use std::{
    ptr,
    sync::{
        atomic::{AtomicU64, AtomicUsize, Ordering},
        Arc, Mutex, RwLock,
    },
};
use windows_sys::Win32::System::Memory::{
    VirtualAlloc, VirtualFree, MEM_COMMIT, MEM_RELEASE, MEM_RESERVE, PAGE_READWRITE,
};

#[derive(Default, Clone, Copy)]
pub struct PcmState {
    pub max_bytes: usize,
    pub bytes: usize,
    pub pages: usize,
    pub received: u64,
    pub rejected: u64,
}

pub struct PcmStore {
    address: usize,
    max_bytes: usize,
    page_size: usize,
    committed: AtomicUsize,
    published: AtomicUsize,
    received: AtomicU64,
    rejected: AtomicU64,
    writer: Mutex<()>,
    generation: RwLock<()>,
}

impl PcmStore {
    fn new(max_bytes: usize, page_size: usize) -> Self {
        // SAFETY: VirtualAlloc reserves a bounded region; no bytes are accessed before committing.
        let address =
            unsafe { VirtualAlloc(ptr::null(), max_bytes, MEM_RESERVE, PAGE_READWRITE) } as usize;
        Self {
            address,
            max_bytes,
            page_size,
            committed: AtomicUsize::new(0),
            published: AtomicUsize::new(0),
            received: AtomicU64::new(0),
            rejected: AtomicU64::new(0),
            writer: Mutex::new(()),
            generation: RwLock::new(()),
        }
    }

    fn append(&self, data: &[u8]) -> bool {
        if data.is_empty() {
            return true;
        }
        let _writer = self.writer.lock().unwrap();
        let _generation = self.generation.read().unwrap();
        let offset = self.published.load(Ordering::Relaxed);
        if data.len() > self.max_bytes - offset || self.address == 0 {
            self.rejected
                .fetch_add(data.len() as u64, Ordering::Relaxed);
            return false;
        }
        let required = offset + data.len();
        let committed = self.committed.load(Ordering::Relaxed);
        if required > committed {
            let target = required
                .div_ceil(self.page_size)
                .saturating_mul(self.page_size)
                .min(self.max_bytes);
            // SAFETY: the requested commit range stays in our reserved region; writers are serialized.
            if unsafe {
                VirtualAlloc(
                    (self.address + committed) as *const _,
                    target - committed,
                    MEM_COMMIT,
                    PAGE_READWRITE,
                )
            }
            .is_null()
            {
                self.rejected
                    .fetch_add(data.len() as u64, Ordering::Relaxed);
                return false;
            }
            self.committed.store(target, Ordering::Release);
        }
        // SAFETY: this writer owns the unpublished tail. Readers see only immutable published bytes;
        // the generation read lock prevents clear from resetting/reusing those bytes during this copy.
        unsafe {
            ptr::copy_nonoverlapping(
                data.as_ptr(),
                (self.address + offset) as *mut u8,
                data.len(),
            );
        }
        self.received
            .fetch_add(data.len() as u64, Ordering::Relaxed);
        self.published.store(required, Ordering::Release);
        true
    }

    pub fn read(&self, offset: usize, destination: &mut [u8]) -> usize {
        let _generation = self.generation.read().unwrap();
        let published = self.published.load(Ordering::Acquire);
        if self.address == 0 || offset >= published {
            return 0;
        }
        let length = destination.len().min(published - offset);
        // SAFETY: acquire observes the completed append. The mapping is Arc-owned, and clear
        // cannot reuse the published range while this read guard/copy is active.
        unsafe {
            ptr::copy_nonoverlapping(
                (self.address + offset) as *const u8,
                destination.as_mut_ptr(),
                length,
            );
        }
        length
    }

    fn clear(&self) -> usize {
        let _writer = self.writer.lock().unwrap();
        let _generation = self.generation.write().unwrap();
        self.published.swap(0, Ordering::AcqRel)
    }

    pub fn state(&self) -> PcmState {
        let bytes = self.published.load(Ordering::Acquire);
        PcmState {
            max_bytes: self.max_bytes,
            bytes,
            pages: bytes.div_ceil(self.page_size),
            received: self.received.load(Ordering::Relaxed),
            rejected: self.rejected.load(Ordering::Relaxed),
        }
    }
}

impl Drop for PcmStore {
    fn drop(&mut self) {
        if self.address != 0 {
            // SAFETY: the last Arc owner is gone; no append/read can retain or access the reservation.
            unsafe {
                VirtualFree(self.address as *mut _, 0, MEM_RELEASE);
            }
        }
    }
}

struct Chunk {
    offset: usize,
    length: usize,
    _append_sequence: Option<f64>,
    _timeline_start: Option<f64>,
    _timeline_end: Option<f64>,
}

#[napi]
pub struct YaspTrackStore {
    page_size: usize,
    max_encoded: usize,
    pages: Vec<Vec<u8>>,
    encoded_bytes: usize,
    chunks: Vec<Chunk>,
    pub(crate) pcm: Arc<PcmStore>,
    encoded_received: u64,
    encoded_rejected: u64,
    out_of_order: u64,
    last_sequence: Option<f64>,
}

#[napi]
impl YaspTrackStore {
    #[napi(constructor)]
    pub fn new(options: Option<Unknown>) -> Result<Self> {
        let options = Options::new(options)?;
        let page_size = options.size("pageSize", 1024 * 1024, 64 * 1024, 8 * 1024 * 1024)?;
        Ok(Self {
            page_size,
            max_encoded: options.size(
                "maxEncodedBytes",
                128 * 1024 * 1024,
                1024 * 1024,
                1024 * 1024 * 1024,
            )?,
            pcm: Arc::new(PcmStore::new(
                options.size(
                    "maxPcmBytes",
                    512 * 1024 * 1024,
                    8 * 1024 * 1024,
                    2 * 1024 * 1024 * 1024,
                )?,
                page_size,
            )),
            pages: Vec::new(),
            encoded_bytes: 0,
            chunks: Vec::new(),
            encoded_received: 0,
            encoded_rejected: 0,
            out_of_order: 0,
            last_sequence: None,
        })
    }

    #[napi(js_name = "appendEncoded")]
    pub fn append_encoded(
        &mut self,
        env: Env,
        data: Unknown,
        meta: Option<Unknown>,
    ) -> Result<Value> {
        let data = options::buffer(
            env,
            data,
            "Expected appendEncoded(buffer: Buffer, meta?: object)",
        )?;
        let offset = self.encoded_bytes;
        let accepted = data.len() <= self.max_encoded - offset;
        let index = self.chunks.len();
        if accepted {
            let mut source = &data[..];
            while !source.is_empty() {
                if self
                    .pages
                    .last()
                    .is_none_or(|page| page.len() == self.page_size)
                {
                    self.pages.push(Vec::with_capacity(self.page_size));
                }
                let page = self.pages.last_mut().unwrap();
                let length = source.len().min(self.page_size - page.len());
                page.extend_from_slice(&source[..length]);
                source = &source[length..];
            }
            self.encoded_bytes += data.len();
            let meta = Options::new(meta)?;
            let sequence = meta.finite("appendSequence")?;
            let timeline_start = meta.finite("timelineStartSeconds")?;
            let timeline_end = meta.finite("timelineEndSeconds")?;
            if let Some(sequence) = sequence {
                if self.last_sequence.is_some_and(|last| sequence <= last) {
                    self.out_of_order += 1;
                }
                self.last_sequence = Some(sequence);
            }
            self.chunks.push(Chunk {
                offset,
                length: data.len(),
                _append_sequence: sequence,
                _timeline_start: timeline_start,
                _timeline_end: timeline_end,
            });
            self.encoded_received += data.len() as u64;
        } else {
            self.encoded_rejected += data.len() as u64;
        }
        let mut result = json!({"accepted":accepted,"chunkIndex":index,"offset":offset,"length":data.len(),
            "encodedBytes":self.encoded_bytes,"encodedChunkCount":self.chunks.len(),"rejectedEncodedBytes":self.encoded_rejected});
        if !accepted {
            result["reason"] = json!("encoded store capacity exceeded");
        }
        Ok(result)
    }

    #[napi(js_name = "readEncodedChunk")]
    pub fn read_encoded_chunk(&self, env: Env, index: Unknown) -> Result<Option<Buffer>> {
        let index = options::number(env, index, "Expected readEncodedChunk(index: number)")?;
        if !index.is_finite() || index < 0.0 || index > u32::MAX as f64 {
            return Ok(None);
        }
        let Some(chunk) = self.chunks.get(index as usize) else {
            return Ok(None);
        };
        let mut result = Vec::with_capacity(chunk.length);
        let mut offset = chunk.offset;
        while result.len() < chunk.length {
            let page = &self.pages[offset / self.page_size];
            let position = offset % self.page_size;
            let length = (chunk.length - result.len()).min(page.len() - position);
            result.extend_from_slice(&page[position..position + length]);
            offset += length;
        }
        Ok(Some(result.into()))
    }

    #[napi(js_name = "appendPcm")]
    pub fn append_pcm(&self, env: Env, data: Unknown) -> Result<Value> {
        let data = options::buffer(env, data, "Expected appendPcm(buffer: Buffer)")?;
        let offset = self.pcm.state().bytes;
        let accepted = self.pcm.append(&data);
        let state = self.pcm.state();
        let mut result = json!({"accepted":accepted,"offset":offset,"length":data.len(),"pcmBytes":state.bytes,"rejectedPcmBytes":state.rejected});
        if !accepted {
            result["reason"] = json!("pcm store capacity exceeded");
        }
        Ok(result)
    }

    #[napi(js_name = "readPcm")]
    pub fn read_pcm(&self, env: Env, offset: Unknown, length: Unknown) -> Result<Option<Buffer>> {
        let offset = options::number(
            env,
            offset,
            "Expected readPcm(offset: number, length: number)",
        )?;
        let length = options::number(
            env,
            length,
            "Expected readPcm(offset: number, length: number)",
        )?;
        if !offset.is_finite() || !length.is_finite() || offset < 0.0 || length <= 0.0 {
            return Ok(None);
        }
        let state = self.pcm.state();
        if offset as usize >= state.bytes {
            return Ok(None);
        }
        let length = (length as usize).min(state.bytes - offset as usize);
        let mut output = vec![0; length];
        if self.pcm.read(offset as usize, &mut output) != length {
            return Err(options::runtime_error(
                env,
                "Failed to read a complete PCM range from native track store",
            ));
        }
        Ok(Some(output.into()))
    }

    #[napi]
    pub fn clear(&mut self) -> Value {
        let result =
            json!({"clearedEncodedBytes":self.encoded_bytes,"clearedPcmBytes":self.pcm.clear()});
        self.pages.clear();
        self.chunks.clear();
        self.encoded_bytes = 0;
        self.last_sequence = None;
        result
    }

    #[napi(js_name = "getState")]
    pub fn get_state(&self) -> Value {
        let pcm = self.pcm.state();
        json!({"backend":"native-paged-track-store","pageSize":self.page_size,"maxEncodedBytes":self.max_encoded,"maxPcmBytes":pcm.max_bytes,
            "encodedBytes":self.encoded_bytes,"encodedPages":self.pages.len(),"encodedChunkCount":self.chunks.len(),"pcmBytes":pcm.bytes,"pcmPages":pcm.pages,
            "totalEncodedReceivedBytes":self.encoded_received,"totalPcmReceivedBytes":pcm.received,"rejectedEncodedBytes":self.encoded_rejected,
            "rejectedPcmBytes":pcm.rejected,"outOfOrderChunks":self.out_of_order,"lastAppendSequence":self.last_sequence})
    }
}
