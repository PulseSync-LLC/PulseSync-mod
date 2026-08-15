'use strict';

Object.defineProperty(exports, '__esModule', { value: true });
exports.refreshWasapiExclusiveDefaultDeviceMonitor =
    exports.refreshWasapiExclusiveVolumePolicy =
    exports.resetYaspSource =
    exports.seekWasapiExclusiveOutput =
    exports.stopWasapiExclusiveOutput =
    exports.updateWasapiExclusiveAudioParkingState =
    exports.updateWasapiExclusivePlayerState =
    exports.getWasapiExclusiveOutputState =
    exports.onWasapiExclusiveOutputStateChanged =
    exports.getYaspAudioFormat =
    exports.onYaspAudioFormatChanged =
    exports.receiveYaspChunk =
    exports.configureYaspSource =
    exports.createWasapiExclusiveRenderer =
    exports.listWasapiExclusiveDevices =
    exports.getWasapiExclusiveStatus =
        void 0;

const { Logger } = require('../packages/logger/Logger.js');
const crypto = require('crypto');
const { EventEmitter } = require('events');
const { getFfmpegUpdater } = require('./ffmpegInstaller.js');

const logger = new Logger('NativeAudioOutput');
const sources = new Map();
const chunkStats = new Map();
const yaspPreloadedStreams = new Map();
const nativeAudioOutputEvents = new EventEmitter();
const YASP_AUDIO_FORMAT_CHANGED_EVENT = 'yaspAudioFormatChanged';
const WASAPI_EXCLUSIVE_OUTPUT_STATE_CHANGED_EVENT = 'wasapiExclusiveOutputStateChanged';
const WASAPI_EXCLUSIVE_PROGRESS_SEEK_THRESHOLD_SECONDS = 1.5;
const WASAPI_EXCLUSIVE_PLAYER_CLOCK_STALL_MAX_DELTA_SECONDS = 0.25;
const WASAPI_EXCLUSIVE_PLAYER_CLOCK_STALL_MIN_INTERVAL_MS = 1000;
const WASAPI_EXCLUSIVE_FAILED_SIGNATURE_RETRY_MS = 15000;
const WASAPI_EXCLUSIVE_DEVICE_AVAILABILITY_TTL_MS = 1000;
const WASAPI_EXCLUSIVE_DEFAULT_DEVICE_POLL_MS = 1000;
const WASAPI_EXCLUSIVE_TRANSIENT_PLAYER_STATUSES = new Set(['buffering', 'loading', 'loadingMediaSource']);
let lastYaspAudioFormat = null;
let lastYaspAudioFormatSignature = '';
const WASAPI_EXCLUSIVE_DEVICE_ID_SETTING_KEY = 'modSettings.nativeAudioOutput.wasapiExclusiveDeviceId';
const WASAPI_EXCLUSIVE_OUTPUT_ENABLED_SETTING_KEY = 'modSettings.nativeAudioOutput.enableWasapiExclusiveOutput';
const WASAPI_EXCLUSIVE_FORCE_FULL_VOLUME_SETTING_KEY = 'modSettings.nativeAudioOutput.forceWasapiExclusiveFullVolume';
const YASP_CHUNK_TAP_ENABLED_SETTING_KEY = 'modSettings.nativeAudioOutput.enableYaspChunkTap';
const WASAPI_EXCLUSIVE_MODULE_PATH = '../native_modules/wasapi_exclusive';
const YASP_WASAPI_INIT_CHUNK_LIMIT_BYTES = 4 * 1024 * 1024;
const YASP_WASAPI_PRELOAD_STREAM_LIMIT = 4;
const YASP_WASAPI_PRELOAD_MAX_BYTES = 32 * 1024 * 1024;
const YASP_WASAPI_PRELOAD_TTL_MS = 2 * 60 * 1000;
const YASP_WASAPI_PRELOAD_DURATION_TOLERANCE_MS = 1500;
const YASP_CHUNK_STATS_TTL_MS = 5 * 60 * 1000;
const YASP_CHUNK_STATS_LIMIT = 32;
const requireIfExists =
    (typeof globalThis !== 'undefined' && globalThis.requireIfExists) ||
    (typeof global !== 'undefined' && global.requireIfExists) ||
    ((path) => {
        try {
            return require(path);
        } catch (e) {
            logger.log('Error occurred while requiring WASAPI exclusive module:', e);
            return false;
        }
    });

let wasapiExclusiveModule;
let wasapiExclusiveLoaded = false;
let wasapiExclusiveLoadError = null;
let wasapiExclusiveLoadPath = null;
let storeModule;
let storeLoaded = false;
let wasapiExclusiveOutputSession = null;
let lastWasapiExclusiveOutputError = null;
let lastFailedWasapiExclusiveOutputSignature = null;
let lastFailedWasapiExclusiveOutputAt = 0;
let lastFailedWasapiExclusiveOutputPermanent = false;
let lastWasapiExclusiveOutputSkipReason = null;
let lastWasapiExclusivePlayerState = null;
let wasapiExclusiveDeviceAvailabilityCache = null;
let wasapiExclusiveDefaultDeviceMonitorTimer = null;
let wasapiExclusiveDefaultDeviceMonitorInitialized = false;
let lastWasapiExclusiveDefaultDeviceId = null;
let lastWasapiExclusiveDefaultDeviceChangedAt = null;

function emitWasapiExclusiveOutputStateChanged() {
    nativeAudioOutputEvents.emit(WASAPI_EXCLUSIVE_OUTPUT_STATE_CHANGED_EVENT, getWasapiExclusiveOutputState());
}

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const toFiniteNumber = (value) => {
    const number = Number(value);
    return Number.isFinite(number) ? number : null;
};

const getPlayerStateProgressPosition = (playerState = {}) => {
    const progress = playerState.progress && typeof playerState.progress === 'object' ? playerState.progress : {};
    return toFiniteNumber(progress.position ?? progress.currentTime ?? playerState.position);
};

const clampUnitInterval = (value) => Math.min(Math.max(value, 0), 1);

const exponentVolumeToLinearGain = (value) => {
    const exponentVolume = toFiniteNumber(value);
    if (!Number.isFinite(exponentVolume)) {
        return null;
    }

    const linearGain = Math.pow(0.01, 1 - clampUnitInterval(exponentVolume));
    return linearGain > 0.01 ? linearGain : 0;
};

const getTrackId = (track = {}) => {
    const rawId = track.idWithContext ?? track.id ?? track.realId ?? track.trackId ?? track.entityId;
    const [trackId] = String(rawId ?? '').split(':');
    return trackId || null;
};

const getTrackDurationMs = (track = {}) => toFiniteNumber(track.durationMs ?? track.duration);

const getPlayerTrackId = (playerState = {}) => {
    const track = playerState.track && typeof playerState.track === 'object' ? playerState.track : {};
    return getTrackId(track);
};

const normalizeWasapiExclusivePlayerState = (playerState = {}, updatedAt = Date.now()) => {
    const status = typeof playerState.status === 'string' ? playerState.status : null;
    const exponentVolume = toFiniteNumber(playerState.exponentVolume?.value ?? playerState.exponentVolume ?? playerState.volume?.value ?? playerState.volume);
    return {
        raw: playerState,
        status,
        hasIsPlaying: typeof playerState.isPlaying === 'boolean',
        isPlaying: playerState.isPlaying === true || status === 'playing',
        position: getPlayerStateProgressPosition(playerState),
        trackId: getPlayerTrackId(playerState),
        seekEventSequence: toFiniteNumber(playerState.seekEventSequence),
        exponentVolume: Number.isFinite(exponentVolume) ? clampUnitInterval(exponentVolume) : null,
        volumeGain: exponentVolumeToLinearGain(exponentVolume),
        updatedAt,
    };
};

const getEstimatedPlayerPosition = (playerState, now = Date.now()) => {
    if (!playerState || !Number.isFinite(playerState.position)) {
        return null;
    }

    if (!playerState.isPlaying) {
        return playerState.position;
    }

    return playerState.position + Math.max(now - playerState.updatedAt, 0) / 1000;
};

const getWasapiExclusivePlayerStopReason = (playerState) => {
    if (!playerState) {
        return null;
    }

    if (WASAPI_EXCLUSIVE_TRANSIENT_PLAYER_STATUSES.has(playerState.status)) {
        return null;
    }

    return (playerState.status && !playerState.isPlaying) || (playerState.hasIsPlaying && !playerState.isPlaying)
        ? `player ${playerState.status ?? 'not playing'}`
        : null;
};

const getFfmpegPathForNativeAudio = async () => {
    const updater = getFfmpegUpdater();
    if (await updater.fileExists(updater.installPath)) {
        return updater.installPath;
    }
    return updater.ensureInstalled();
};

const createWasapiExclusiveOutputSession = (sessionOptions) => {
    const wasapiExclusive = getWasapiExclusiveModule();
    if (typeof wasapiExclusive?.createYaspStreamSession === 'function') {
        return wasapiExclusive.createYaspStreamSession({
            ...sessionOptions,
            getFfmpegPath: getFfmpegPathForNativeAudio,
            onStateChange: (sessionState) => {
                if (sessionState?.state === 'running') {
                    if (sessionOptions.preloadIdentity) {
                        consumeYaspPreloadedStream(sessionOptions.preloadIdentity);
                    }
                    lastWasapiExclusiveOutputError = null;
                    lastWasapiExclusiveOutputSkipReason = null;
                    if (lastFailedWasapiExclusiveOutputSignature === sessionOptions.signature) {
                        lastFailedWasapiExclusiveOutputSignature = null;
                        lastFailedWasapiExclusiveOutputAt = 0;
                        lastFailedWasapiExclusiveOutputPermanent = false;
                    }
                }
                emitWasapiExclusiveOutputStateChanged();
            },
            onError: (error, session) => {
                lastWasapiExclusiveOutputError = String(error?.message ?? error);
                lastFailedWasapiExclusiveOutputSignature = session?.signature ?? sessionOptions.signature;
                lastFailedWasapiExclusiveOutputAt = Date.now();
                lastFailedWasapiExclusiveOutputPermanent = isPermanentWasapiExclusiveFailure(error);
                logger.error('YASP WASAPI exclusive native-module session failed:', lastWasapiExclusiveOutputError);
                if (wasapiExclusiveOutputSession === session) {
                    session.close(`native session error: ${lastWasapiExclusiveOutputError}`);
                    wasapiExclusiveOutputSession = null;
                    emitWasapiExclusiveOutputStateChanged();
                }
            },
            onLog: (level, message, payload) => {
                const logFn = typeof logger?.[level] === 'function' ? logger[level].bind(logger) : logger.info.bind(logger);
                logFn(message, payload);
            },
        });
    }

    throw new Error('Native WASAPI stream session is unavailable');
};

const loadWasapiExclusiveModule = () => {
    try {
        wasapiExclusiveLoadPath = require.resolve(WASAPI_EXCLUSIVE_MODULE_PATH);
        return require(WASAPI_EXCLUSIVE_MODULE_PATH);
    } catch (error) {
        wasapiExclusiveLoadError = error;
        logger.error('Error loading WASAPI exclusive module:', error);
    }

    const fallbackModule = requireIfExists('./native_modules/wasapi_exclusive');
    if (!fallbackModule) {
        return null;
    }

    wasapiExclusiveLoadError = null;
    wasapiExclusiveLoadPath = './native_modules/wasapi_exclusive';
    return fallbackModule;
};

const getWasapiExclusiveModule = () => {
    if (wasapiExclusiveLoaded) {
        return wasapiExclusiveModule;
    }

    wasapiExclusiveLoaded = true;
    wasapiExclusiveModule = loadWasapiExclusiveModule();

    logger.log('WASAPI exclusive module load status', {
        available: Boolean(wasapiExclusiveModule),
        loadPath: wasapiExclusiveLoadPath,
        loadError: wasapiExclusiveLoadError ? String(wasapiExclusiveLoadError?.message ?? wasapiExclusiveLoadError) : null,
    });

    return wasapiExclusiveModule;
};
const getStoreModule = () => {
    if (storeLoaded) {
        return storeModule;
    }

    storeLoaded = true;
    try {
        storeModule = require('./store.js');
    } catch {
        storeModule = null;
    }
    return storeModule;
};

const getSelectedWasapiExclusiveDeviceId = () => getStoreModule()?.get?.(WASAPI_EXCLUSIVE_DEVICE_ID_SETTING_KEY) ?? null;
const isYaspChunkTapEnabled = () => getStoreModule()?.get?.(YASP_CHUNK_TAP_ENABLED_SETTING_KEY) === true;
const isWasapiExclusiveOutputConfigured = () => getStoreModule()?.get?.(WASAPI_EXCLUSIVE_OUTPUT_ENABLED_SETTING_KEY) === true;
const isWasapiExclusiveOutputEnabled = () => isWasapiExclusiveOutputConfigured() && isYaspChunkTapEnabled();
const isWasapiExclusiveFullVolumeForced = () => getStoreModule()?.get?.(WASAPI_EXCLUSIVE_FORCE_FULL_VOLUME_SETTING_KEY) === true;
const getWasapiExclusiveVolumeGain = (exponentVolume) =>
    isWasapiExclusiveFullVolumeForced() ? 1 : (exponentVolumeToLinearGain(exponentVolume) ?? 1);

const getWasapiExclusiveDeviceAvailability = (forceRefresh = false) => {
    const requestedDeviceId = getSelectedWasapiExclusiveDeviceId();
    const now = Date.now();
    if (
        !forceRefresh &&
        wasapiExclusiveDeviceAvailabilityCache?.requestedDeviceId === requestedDeviceId &&
        now - wasapiExclusiveDeviceAvailabilityCache.checkedAt <= WASAPI_EXCLUSIVE_DEVICE_AVAILABILITY_TTL_MS
    ) {
        return wasapiExclusiveDeviceAvailabilityCache;
    }

    const wasapiExclusive = getWasapiExclusiveModule();
    if (!wasapiExclusive?.isSupported?.()) {
        wasapiExclusiveDeviceAvailabilityCache = {
            requestedDeviceId,
            resolvedDeviceId: null,
            available: false,
            device: null,
            reason: 'WASAPI exclusive module is unavailable',
            validationError: null,
            checkedAt: now,
        };
        return wasapiExclusiveDeviceAvailabilityCache;
    }

    try {
        const devices = wasapiExclusive.listDevices({ includeDisabled: true, includeFormats: false });
        const device = requestedDeviceId
            ? (devices.find((item) => item.id === requestedDeviceId) ?? null)
            : (devices.find((item) => item.isDefault && item.state === 'active') ??
              devices.find((item) => item.isDefaultConsole && item.state === 'active') ??
              null);
        const available = device?.state === 'active';
        const reason = available
            ? null
            : requestedDeviceId
              ? device
                  ? `Selected WASAPI device is not active: ${device.state}`
                  : 'Selected WASAPI device is no longer present'
              : 'No active default WASAPI render device is available';
        wasapiExclusiveDeviceAvailabilityCache = {
            requestedDeviceId,
            resolvedDeviceId: device?.id ?? null,
            available,
            device,
            reason,
            validationError: null,
            checkedAt: now,
        };
    } catch (error) {
        wasapiExclusiveDeviceAvailabilityCache = {
            requestedDeviceId,
            resolvedDeviceId: requestedDeviceId,
            available: null,
            device: null,
            reason: null,
            validationError: String(error?.message ?? error),
            checkedAt: now,
        };
    }

    return wasapiExclusiveDeviceAvailabilityCache;
};

const stopWasapiExclusiveDefaultDeviceMonitor = () => {
    if (wasapiExclusiveDefaultDeviceMonitorTimer) {
        clearInterval(wasapiExclusiveDefaultDeviceMonitorTimer);
        wasapiExclusiveDefaultDeviceMonitorTimer = null;
    }
};

const shouldMonitorWasapiExclusiveDefaultDevice = () =>
    process.platform === 'win32' &&
    isWasapiExclusiveOutputEnabled() &&
    !getSelectedWasapiExclusiveDeviceId();

const pollWasapiExclusiveDefaultDevice = () => {
    if (!shouldMonitorWasapiExclusiveDefaultDevice()) {
        stopWasapiExclusiveDefaultDeviceMonitor();
        return;
    }

    const availability = getWasapiExclusiveDeviceAvailability(true);
    const nextDeviceId = availability.available === true ? availability.resolvedDeviceId : null;
    if (!wasapiExclusiveDefaultDeviceMonitorInitialized) {
        wasapiExclusiveDefaultDeviceMonitorInitialized = true;
        lastWasapiExclusiveDefaultDeviceId = nextDeviceId;
        return;
    }
    if (nextDeviceId === lastWasapiExclusiveDefaultDeviceId) {
        return;
    }

    const previousDeviceId = lastWasapiExclusiveDefaultDeviceId;
    lastWasapiExclusiveDefaultDeviceId = nextDeviceId;
    lastWasapiExclusiveDefaultDeviceChangedAt = Date.now();
    getWasapiExclusiveModule()?.clearDeviceCache?.();
    logger.info('System default WASAPI output device changed', {
        previousDeviceId,
        deviceId: nextDeviceId,
        deviceName: availability.device?.name ?? null,
    });

    if (!nextDeviceId) {
        if (wasapiExclusiveOutputSession) {
            stopWasapiExclusiveOutput(availability.reason ?? 'default output device unavailable');
        } else {
            emitWasapiExclusiveOutputStateChanged();
        }
        return;
    }

    const session = wasapiExclusiveOutputSession;
    if (!session) {
        emitWasapiExclusiveOutputStateChanged();
        return;
    }
    const switched = session?.switchOutputDevice?.(nextDeviceId, 'system default output device changed') === true;
    if (!switched && wasapiExclusiveOutputSession === session) {
        stopWasapiExclusiveOutput('failed to switch to new system default output device');
    }
};

const ensureWasapiExclusiveDefaultDeviceMonitor = () => {
    if (!shouldMonitorWasapiExclusiveDefaultDevice()) {
        stopWasapiExclusiveDefaultDeviceMonitor();
        return;
    }
    if (wasapiExclusiveDefaultDeviceMonitorTimer) {
        return;
    }

    pollWasapiExclusiveDefaultDevice();
    if (!shouldMonitorWasapiExclusiveDefaultDevice()) {
        return;
    }
    wasapiExclusiveDefaultDeviceMonitorTimer = setInterval(pollWasapiExclusiveDefaultDevice, WASAPI_EXCLUSIVE_DEFAULT_DEVICE_POLL_MS);
    wasapiExclusiveDefaultDeviceMonitorTimer.unref?.();
};

const refreshWasapiExclusiveDefaultDeviceMonitor = () => {
    getWasapiExclusiveModule()?.clearDeviceCache?.();
    wasapiExclusiveDeviceAvailabilityCache = null;
    wasapiExclusiveDefaultDeviceMonitorInitialized = false;
    lastWasapiExclusiveDefaultDeviceId = null;
    stopWasapiExclusiveDefaultDeviceMonitor();
    ensureWasapiExclusiveDefaultDeviceMonitor();
    return getWasapiExclusiveOutputState();
};
exports.refreshWasapiExclusiveDefaultDeviceMonitor = refreshWasapiExclusiveDefaultDeviceMonitor;

const skipUnavailableWasapiExclusiveDevice = (availability) => {
    if (availability?.available !== false) {
        return false;
    }

    const reason = availability.reason ?? 'Selected WASAPI device is unavailable';
    const didChange = lastWasapiExclusiveOutputSkipReason !== reason || lastWasapiExclusiveOutputError !== null;
    lastWasapiExclusiveOutputSkipReason = reason;
    lastWasapiExclusiveOutputError = null;
    lastFailedWasapiExclusiveOutputSignature = null;
    lastFailedWasapiExclusiveOutputAt = 0;
    lastFailedWasapiExclusiveOutputPermanent = false;
    if (wasapiExclusiveOutputSession) {
        stopWasapiExclusiveOutput(reason);
    } else if (didChange) {
        emitWasapiExclusiveOutputStateChanged();
    }
    if (didChange) {
        logger.warn('YASP WASAPI exclusive output skipped because the selected device is unavailable', availability);
    }
    return true;
};

const normalizeWasapiOutputInteger = (value, allowedValues = null) => {
    const number = Number(value);
    if (!Number.isFinite(number) || number <= 0) {
        return null;
    }

    const integer = Math.round(number);
    return !allowedValues || allowedValues.includes(integer) ? integer : null;
};

const getWasapiOutputBitsPerSample = (format = {}) => {
    const parsedBitsPerSample = normalizeWasapiOutputInteger(format.bitsPerSample, [16, 24, 32]);
    if (parsedBitsPerSample) {
        return parsedBitsPerSample;
    }

    const codec = String(format.codec ?? '').toLowerCase();
    if (codec.includes('aac') || codec.includes('mp3') || codec.includes('mpeg')) {
        return 16;
    }

    return null;
};

const getWasapiOutputRendererOptions = (format = {}) => {
    const sampleRate = normalizeWasapiOutputInteger(format.sampleRate);
    const channels = normalizeWasapiOutputInteger(format.channels, [1, 2]);
    const bitsPerSample = getWasapiOutputBitsPerSample(format);
    if (!sampleRate || !channels || !bitsPerSample) {
        return null;
    }

    const options = {
        sampleRate,
        channels,
        bitsPerSample,
        validBitsPerSample: bitsPerSample,
        containerBitsPerSample: bitsPerSample === 24 ? 32 : bitsPerSample,
        float: false,
        bufferMs: 40,
        maxQueuedMs: 10000,
        renderMode: 'timer',
        timerPollMs: 5,
        timerPeriodMs: 10,
        timerBufferPeriods: 4,
    };

    const deviceId = getSelectedWasapiExclusiveDeviceId();
    if (deviceId) {
        options.deviceId = deviceId;
    }

    return options;
};

const getYaspStreamIdentity = (format = {}) =>
    format.workerId && format.feederId != null
        ? `${format.workerId}:${format.feederId}:${format.streamGeneration ?? 0}`
        : (format.currentTrack ?? format.sourceHash ?? null);

const getYaspTrackDurationMs = (format = {}) => {
    const match = String(format.currentTrack ?? '').match(/_([0-9]+(?:\.[0-9]+)?)$/);
    return match ? toFiniteNumber(match[1]) : null;
};

const getYaspPreloadTarget = (format, playerState = lastWasapiExclusivePlayerState) => {
    const streamDurationMs = getYaspTrackDurationMs(format);
    const currentTrack = playerState?.raw?.track && typeof playerState.raw.track === 'object' ? playerState.raw.track : {};
    const nextTrack = playerState?.raw?.nextTrack && typeof playerState.raw.nextTrack === 'object' ? playerState.raw.nextTrack : {};
    const nextTrackId = getTrackId(nextTrack);
    const currentDurationMs = getTrackDurationMs(currentTrack);
    const nextDurationMs = getTrackDurationMs(nextTrack);
    if (!nextTrackId || !Number.isFinite(streamDurationMs) || !Number.isFinite(nextDurationMs)) {
        return null;
    }

    const matchesNext = Math.abs(streamDurationMs - nextDurationMs) <= YASP_WASAPI_PRELOAD_DURATION_TOLERANCE_MS;
    const matchesCurrent = Number.isFinite(currentDurationMs) && Math.abs(streamDurationMs - currentDurationMs) <= YASP_WASAPI_PRELOAD_DURATION_TOLERANCE_MS;
    return matchesNext && !matchesCurrent
        ? {
              trackId: nextTrackId,
              durationMs: nextDurationMs,
          }
        : null;
};

const pruneYaspPreloadedStreams = (now = Date.now()) => {
    for (const [identity, entry] of yaspPreloadedStreams) {
        if (now - entry.updatedAt > YASP_WASAPI_PRELOAD_TTL_MS) {
            yaspPreloadedStreams.delete(identity);
        }
    }

    while (yaspPreloadedStreams.size > YASP_WASAPI_PRELOAD_STREAM_LIMIT) {
        const oldest = Array.from(yaspPreloadedStreams.entries()).sort((left, right) => left[1].updatedAt - right[1].updatedAt)[0];
        if (!oldest) {
            break;
        }
        yaspPreloadedStreams.delete(oldest[0]);
    }
};

const cacheYaspPreloadedChunk = (format, chunkBuffer, options = {}) => {
    const identity = getYaspStreamIdentity(format);
    if (!identity || !Buffer.isBuffer(chunkBuffer) || !chunkBuffer.byteLength) {
        return null;
    }

    const now = Date.now();
    const preloadTarget = getYaspPreloadTarget(format);
    pruneYaspPreloadedStreams(now);
    let entry = yaspPreloadedStreams.get(identity);
    if (!entry) {
        entry = {
            identity,
            format: { ...format },
            chunks: [],
            chunkKeys: new Set(),
            bytes: 0,
            basePosition: null,
            hasInitSegment: false,
            hasMediaSegment: false,
            capturedPlayerTrackId: lastWasapiExclusivePlayerState?.trackId ?? null,
            targetPlayerTrackId: preloadTarget?.trackId ?? null,
            durationMs: getYaspTrackDurationMs(format),
            createdAt: now,
            updatedAt: now,
            truncated: false,
        };
        yaspPreloadedStreams.set(identity, entry);
    } else {
        entry.format = { ...entry.format, ...format };
        entry.targetPlayerTrackId ??= preloadTarget?.trackId ?? null;
        entry.updatedAt = now;
    }

    const chunkMeta = options.chunkMeta && typeof options.chunkMeta === 'object' ? options.chunkMeta : {};
    const mp4ChunkInfo = options.mp4ChunkInfo && typeof options.mp4ChunkInfo === 'object' ? options.mp4ChunkInfo : {};
    const appendSequence = toFiniteNumber(chunkMeta.appendSequence);
    const timelineStartMs = toFiniteNumber(chunkMeta.timelineStartMs);
    const timelineStartSeconds = toFiniteNumber(
        options.streamPosition ?? chunkMeta.timelineStartSeconds ?? (Number.isFinite(timelineStartMs) ? timelineStartMs / 1000 : null),
    );
    const cachedInitChunk = Buffer.isBuffer(options.initChunk) ? options.initChunk : null;
    const cachedChunkBuffer =
        mp4ChunkInfo.hasInitSegment === true && mp4ChunkInfo.hasMediaSegment !== true && cachedInitChunk?.byteLength ? cachedInitChunk : chunkBuffer;
    const chunkKey = `segment:${chunkMeta.segmentNumber ?? 'unknown'}:${mp4ChunkInfo.hasInitSegment === true}:${
        mp4ChunkInfo.hasMediaSegment === true
    }:${timelineStartSeconds ?? 'unknown'}:${getYaspChunkFingerprint(cachedChunkBuffer)}`;
    if (entry.chunkKeys.has(chunkKey)) {
        return entry;
    }

    if (!entry.hasInitSegment && cachedInitChunk?.byteLength && mp4ChunkInfo.hasInitSegment !== true) {
        if (entry.bytes + cachedInitChunk.byteLength > YASP_WASAPI_PRELOAD_MAX_BYTES) {
            entry.truncated = true;
            return entry;
        }

        entry.chunkKeys.add('cached-init');
        entry.chunks.push({
            buffer: Buffer.from(cachedInitChunk),
            appendSequence: Number.isFinite(appendSequence) ? appendSequence - 0.5 : null,
            timelineStartSeconds: null,
            hasInitSegment: true,
            hasMediaSegment: false,
        });
        entry.bytes += cachedInitChunk.byteLength;
        entry.hasInitSegment = true;
    }

    if (entry.bytes + cachedChunkBuffer.byteLength > YASP_WASAPI_PRELOAD_MAX_BYTES) {
        entry.truncated = true;
        return entry;
    }

    entry.chunkKeys.add(chunkKey);
    entry.chunks.push({
        buffer: Buffer.from(cachedChunkBuffer),
        appendSequence,
        timelineStartSeconds,
        hasInitSegment: mp4ChunkInfo.hasInitSegment === true,
        hasMediaSegment: mp4ChunkInfo.hasMediaSegment === true,
    });
    entry.bytes += cachedChunkBuffer.byteLength;
    entry.hasInitSegment ||= mp4ChunkInfo.hasInitSegment === true;
    entry.hasMediaSegment ||= mp4ChunkInfo.hasMediaSegment === true;
    if (mp4ChunkInfo.hasMediaSegment === true && Number.isFinite(timelineStartSeconds)) {
        entry.basePosition = Number.isFinite(entry.basePosition) ? Math.min(entry.basePosition, timelineStartSeconds) : timelineStartSeconds;
    }
    pruneYaspPreloadedStreams(now);
    return entry;
};

const getYaspPreloadedStream = (identity) => {
    pruneYaspPreloadedStreams();
    return identity ? (yaspPreloadedStreams.get(identity) ?? null) : null;
};

const consumeYaspPreloadedStream = (identity) => {
    const entry = getYaspPreloadedStream(identity);
    if (entry) {
        yaspPreloadedStreams.delete(identity);
    }
    return entry;
};

const getYaspPreloadedDecoderChunks = (entry) =>
    (entry?.chunks ?? [])
        .slice()
        .sort((left, right) => {
            if (Number.isFinite(left.appendSequence) && Number.isFinite(right.appendSequence)) {
                return left.appendSequence - right.appendSequence;
            }
            return 0;
        })
        .map((chunk) => {
            if (chunk.hasInitSegment === true && chunk.hasMediaSegment !== true) {
                return inspectMp4Chunk(chunk.buffer).initSegment ?? chunk.buffer;
            }
            return chunk.buffer;
        });

const selectYaspPreloadedStreamForPlayerTrack = (previousPlayerState, nextPlayerState) => {
    pruneYaspPreloadedStreams();
    let candidates = Array.from(yaspPreloadedStreams.values()).filter(
        (entry) => entry.hasMediaSegment && (!previousPlayerState?.trackId || entry.capturedPlayerTrackId === previousPlayerState.trackId),
    );
    if (!candidates.length) {
        return null;
    }

    const directTrackMatches = nextPlayerState?.trackId ? candidates.filter((entry) => entry.targetPlayerTrackId === nextPlayerState.trackId) : [];
    if (directTrackMatches.length) {
        return directTrackMatches.sort((left, right) => right.updatedAt - left.updatedAt)[0];
    }

    candidates = candidates.filter((entry) => !entry.targetPlayerTrackId);
    if (!candidates.length) {
        return null;
    }

    const playerDurationMs = toFiniteNumber(nextPlayerState?.raw?.track?.durationMs ?? nextPlayerState?.raw?.track?.duration);
    if (Number.isFinite(playerDurationMs)) {
        candidates = candidates
            .map((entry) => ({ entry, durationDelta: Number.isFinite(entry.durationMs) ? Math.abs(entry.durationMs - playerDurationMs) : Number.POSITIVE_INFINITY }))
            .filter(({ durationDelta }) => durationDelta <= YASP_WASAPI_PRELOAD_DURATION_TOLERANCE_MS)
            .sort((left, right) => left.durationDelta - right.durationDelta || right.entry.updatedAt - left.entry.updatedAt)
            .map(({ entry }) => entry);
        if (candidates.length !== 1) {
            return null;
        }
    } else if (candidates.length !== 1) {
        return null;
    }

    return candidates.sort((left, right) => right.updatedAt - left.updatedAt)[0] ?? null;
};

const getYaspPreloadedStreamStates = () => {
    pruneYaspPreloadedStreams();
    return Array.from(yaspPreloadedStreams.values()).map((entry) => ({
        identity: entry.identity,
        currentTrack: entry.format.currentTrack ?? null,
        streamGeneration: entry.format.streamGeneration ?? null,
        capturedPlayerTrackId: entry.capturedPlayerTrackId,
        targetPlayerTrackId: entry.targetPlayerTrackId,
        durationMs: entry.durationMs,
        chunks: entry.chunks.length,
        bytes: entry.bytes,
        basePosition: entry.basePosition,
        hasInitSegment: entry.hasInitSegment,
        hasMediaSegment: entry.hasMediaSegment,
        truncated: entry.truncated,
        updatedAt: entry.updatedAt,
    }));
};

const getWasapiOutputSignature = (format, rendererOptions) =>
    JSON.stringify({
        streamIdentity: getYaspStreamIdentity(format),
        codec: format?.codec ?? null,
        sampleRate: rendererOptions.sampleRate,
        channels: rendererOptions.channels,
        bitsPerSample: rendererOptions.bitsPerSample,
        containerBitsPerSample: rendererOptions.containerBitsPerSample ?? rendererOptions.bitsPerSample,
        renderMode: rendererOptions.renderMode ?? 'event',
        timerPeriodMs: rendererOptions.timerPeriodMs ?? null,
        timerBufferPeriods: rendererOptions.timerBufferPeriods ?? null,
        waveFormatExtensible: rendererOptions.waveFormatExtensible !== false,
        deviceId: rendererOptions.deviceId ?? null,
    });

const getWasapiExclusiveStatus = () => {
    const wasapiExclusive = getWasapiExclusiveModule();
    const deviceAvailability = getWasapiExclusiveDeviceAvailability(true);
    ensureWasapiExclusiveDefaultDeviceMonitor();
    return {
        available: Boolean(wasapiExclusive),
        supported: Boolean(wasapiExclusive?.isSupported?.()),
        selectedDeviceId: getSelectedWasapiExclusiveDeviceId(),
        resolvedDeviceId: deviceAvailability.resolvedDeviceId,
        selectedDeviceAvailable: deviceAvailability.available,
        selectedDevice: deviceAvailability.device,
        selectedDeviceUnavailableReason: deviceAvailability.reason,
        deviceValidationError: deviceAvailability.validationError,
        outputEnabled: isWasapiExclusiveOutputConfigured(),
        effectiveOutputEnabled: isWasapiExclusiveOutputEnabled(),
        yaspTapEnabled: isYaspChunkTapEnabled(),
        outputState: getWasapiExclusiveOutputState(),
        loadPath: wasapiExclusiveLoadPath,
        loadError: wasapiExclusiveLoadError ? String(wasapiExclusiveLoadError?.message ?? wasapiExclusiveLoadError) : null,
    };
};
exports.getWasapiExclusiveStatus = getWasapiExclusiveStatus;

const listWasapiExclusiveDevices = (options = {}) => {
    const wasapiExclusive = getWasapiExclusiveModule();
    if (!wasapiExclusive?.isSupported?.()) {
        return [];
    }

    return wasapiExclusive.listDevices(options);
};
exports.listWasapiExclusiveDevices = listWasapiExclusiveDevices;

const createWasapiExclusiveRenderer = (options = {}) => {
    const wasapiExclusive = getWasapiExclusiveModule();
    if (!wasapiExclusive?.isSupported?.()) {
        return null;
    }

    const rendererOptions = options && typeof options === 'object' ? { ...options } : {};
    const selectedDeviceId = getSelectedWasapiExclusiveDeviceId();
    if (!rendererOptions.deviceId && selectedDeviceId) {
        rendererOptions.deviceId = selectedDeviceId;
    }

    return wasapiExclusive.createRenderer(rendererOptions);
};
exports.createWasapiExclusiveRenderer = createWasapiExclusiveRenderer;

const hashValue = (value) =>
    crypto
        .createHash('sha1')
        .update(String(value ?? ''))
        .digest('hex')
        .slice(0, 12);

const getSourceKey = (source) => {
    try {
        const url = new URL(String(source ?? ''));
        url.searchParams.delete('index');
        return url.href.replace(/#.+$/, '');
    } catch {
        return String(source ?? '');
    }
};

const getPayloadSourceKey = (payload = {}) => payload?.sourceKey || payload?.meta?.sourceKey || getSourceKey(payload?.sourceUrl ?? payload?.source);

const getYaspAudioFormatSignature = (format) => {
    if (!format) {
        return '';
    }

    return JSON.stringify({
        mimeType: format.mimeType ?? null,
        codec: format.codec ?? null,
        bitrate: format.bitrate ?? null,
        channels: format.channels ?? null,
        sampleRate: format.sampleRate ?? null,
        bitsPerSample: format.bitsPerSample ?? null,
        container: format.container ?? null,
        source: format.source ?? null,
        lossless: format.lossless ?? null,
        currentTrack: format.currentTrack ?? null,
        workerId: format.workerId ?? null,
        feederId: format.feederId ?? null,
        streamGeneration: format.streamGeneration ?? null,
    });
};

const setLastYaspAudioFormat = (format) => {
    const signature = getYaspAudioFormatSignature(format);
    const didChange = signature !== lastYaspAudioFormatSignature;
    lastYaspAudioFormatSignature = signature;
    lastYaspAudioFormat = format;

    if (didChange) {
        nativeAudioOutputEvents.emit(YASP_AUDIO_FORMAT_CHANGED_EVENT, lastYaspAudioFormat);
    }
};

const onYaspAudioFormatChanged = (listener) => {
    nativeAudioOutputEvents.on(YASP_AUDIO_FORMAT_CHANGED_EVENT, listener);
    return () => nativeAudioOutputEvents.off(YASP_AUDIO_FORMAT_CHANGED_EVENT, listener);
};
exports.onYaspAudioFormatChanged = onYaspAudioFormatChanged;

const onWasapiExclusiveOutputStateChanged = (listener) => {
    nativeAudioOutputEvents.on(WASAPI_EXCLUSIVE_OUTPUT_STATE_CHANGED_EVENT, listener);
    return () => nativeAudioOutputEvents.off(WASAPI_EXCLUSIVE_OUTPUT_STATE_CHANGED_EVENT, listener);
};
exports.onWasapiExclusiveOutputStateChanged = onWasapiExclusiveOutputStateChanged;

const getChunkStatKey = (payload) => {
    const workerId = payload?.workerId || payload?.meta?.workerId || 'unknown-worker';
    const feederId = payload?.meta?.feederId || 'unknown-feeder';
    const streamGeneration = payload?.meta?.streamGeneration ?? 0;
    return `${workerId}:${feederId}:${streamGeneration}`;
};

const pruneYaspChunkStats = (now = Date.now()) => {
    for (const [key, stat] of chunkStats) {
        if (now - Number(stat.lastChunkAt ?? stat.firstChunkAt ?? 0) > YASP_CHUNK_STATS_TTL_MS) {
            chunkStats.delete(key);
        }
    }

    while (chunkStats.size > YASP_CHUNK_STATS_LIMIT) {
        const oldest = Array.from(chunkStats.entries()).sort(
            (left, right) => Number(left[1].lastChunkAt ?? left[1].firstChunkAt ?? 0) - Number(right[1].lastChunkAt ?? right[1].firstChunkAt ?? 0),
        )[0];
        if (!oldest) break;
        chunkStats.delete(oldest[0]);
    }
};

const isPermanentWasapiExclusiveFailure = (error) =>
    /exact wasapi format is not supported|unsupported format|bitsPerSample must|containerBitsPerSample must|native yasptrackstore is unavailable/i.test(
        String(error?.message ?? error),
    );

const toChunkBuffer = (chunk) => {
    if (Buffer.isBuffer(chunk)) {
        return chunk;
    }

    if (chunk instanceof ArrayBuffer) {
        return Buffer.from(chunk);
    }

    if (ArrayBuffer.isView(chunk)) {
        return Buffer.from(chunk.buffer, chunk.byteOffset, chunk.byteLength);
    }

    return null;
};

const normalizeNumber = (value) => {
    const number = Number(value);
    return Number.isFinite(number) ? number : null;
};

const normalizePositiveNumber = (value) => {
    const number = normalizeNumber(value);
    return number > 0 ? number : null;
};

const mergeAudioFormats = (...formats) =>
    formats.filter(Boolean).reduce(
        (result, format) => ({
            mimeType: format.mimeType ?? result.mimeType,
            codec: format.codec ?? result.codec,
            bitrate: normalizePositiveNumber(format.bitrate) ?? result.bitrate,
            channels: normalizePositiveNumber(format.channels) ?? result.channels,
            sampleRate: normalizePositiveNumber(format.sampleRate) ?? result.sampleRate,
            bitsPerSample: normalizePositiveNumber(format.bitsPerSample) ?? result.bitsPerSample,
            container: format.container ?? result.container,
            source: format.source ?? result.source,
            lossless: typeof format.lossless === 'boolean' ? format.lossless : result.lossless,
        }),
        {
            mimeType: null,
            codec: null,
            bitrate: null,
            channels: null,
            sampleRate: null,
            bitsPerSample: null,
            container: null,
            source: null,
            lossless: null,
        },
    );

const hasAudioFormatData = (format) =>
    Boolean(format?.mimeType || format?.codec || format?.bitrate || format?.channels || format?.sampleRate || format?.bitsPerSample || format?.container);

const normalizeYaspAudioFormat = (meta = {}) => {
    const track = meta.audioTrack && typeof meta.audioTrack === 'object' ? meta.audioTrack : {};
    const format = meta.audioFormat && typeof meta.audioFormat === 'object' ? meta.audioFormat : {};
    const audioFormat = {
        mimeType: format.mimeType ?? track.mimeType ?? meta.mimeType ?? null,
        codec: format.codec ?? track.codec ?? null,
        bitrate: normalizePositiveNumber(format.bitrate ?? track.bitrate),
        channels: normalizePositiveNumber(format.channels ?? track.channels),
        sampleRate: normalizePositiveNumber(format.sampleRate ?? track.sampleRate),
        bitsPerSample: normalizePositiveNumber(format.bitsPerSample ?? track.bitsPerSample),
    };

    return hasAudioFormatData(audioFormat) ? audioFormat : null;
};

const getYaspChunkTimelinePosition = (payload = {}) => {
    const timelineStartMs = normalizeNumber(payload?.meta?.timelineStartMs ?? payload?.meta?.time);
    return Number.isFinite(timelineStartMs) ? timelineStartMs / 1000 : null;
};

const getYaspChunkFingerprint = (buffer) => {
    if (!Buffer.isBuffer(buffer) || !buffer.byteLength) {
        return 'empty';
    }

    return `${buffer.byteLength}:${crypto.createHash('sha256').update(buffer).digest('hex')}`;
};

const readMp4BoxHeader = (buffer, offset, end) => {
    if (!Buffer.isBuffer(buffer) || offset + 8 > end) {
        return null;
    }

    let size = buffer.readUInt32BE(offset);
    const type = buffer.toString('ascii', offset + 4, offset + 8);
    let headerSize = 8;

    if (size === 1) {
        if (offset + 16 > end) {
            return null;
        }
        const largeSize = buffer.readBigUInt64BE(offset + 8);
        if (largeSize > BigInt(Number.MAX_SAFE_INTEGER)) {
            return null;
        }
        size = Number(largeSize);
        headerSize = 16;
    } else if (size === 0) {
        size = end - offset;
    }

    if (size < headerSize || offset + size > end) {
        return null;
    }

    return {
        type,
        start: offset,
        end: offset + size,
        payloadStart: offset + headerSize,
        headerSize,
        size,
    };
};

const walkMp4Boxes = (buffer, start, end, visitor) => {
    let offset = start;
    while (offset + 8 <= end) {
        const box = readMp4BoxHeader(buffer, offset, end);
        if (!box) {
            break;
        }

        visitor(box);
        offset = box.end;
    }
};

const getTopLevelMp4BoxTypes = (buffer) => {
    const boxes = [];
    walkMp4Boxes(buffer, 0, buffer.byteLength, (box) => {
        if (boxes.length < 8) {
            boxes.push(box.type);
        }
    });
    return boxes;
};

const inspectMp4Chunk = (buffer) => {
    const topLevelBoxes = [];
    let moovEnd = null;
    let mediaStart = null;
    let hasMediaSegment = false;

    walkMp4Boxes(buffer, 0, buffer.byteLength, (box) => {
        if (topLevelBoxes.length < 8) {
            topLevelBoxes.push(box.type);
        }

        if (box.type === 'moov' && moovEnd === null) {
            moovEnd = box.end;
        }

        if (box.type === 'moof' || box.type === 'mdat') {
            if (mediaStart === null) {
                mediaStart = box.start;
            }
            hasMediaSegment = true;
        }
    });

    const initSegment = Number.isFinite(moovEnd) ? Buffer.from(buffer.subarray(0, moovEnd)) : null;
    const mediaSegment = Number.isFinite(mediaStart) ? buffer.subarray(mediaStart) : null;

    return {
        topLevelBoxes,
        hasInitSegment: Buffer.isBuffer(initSegment),
        hasMediaSegment,
        initSegment,
        mediaStart,
        mediaSegment,
    };
};

const isMp4OutputFormat = (format = {}, mp4ChunkInfo = {}) => {
    const mimeType = String(format.mimeType ?? '').toLowerCase();
    const container = String(format.container ?? '').toLowerCase();
    const topLevelBoxes = Array.isArray(mp4ChunkInfo.topLevelBoxes) ? mp4ChunkInfo.topLevelBoxes : [];

    return container === 'mp4' || mimeType.includes('mp4') || topLevelBoxes.some((type) => ['ftyp', 'moov', 'moof', 'mdat', 'sidx'].includes(type));
};

const parseFlacStreamInfo = (buffer, offset, end) => {
    if (offset + 34 > end) {
        return null;
    }

    const packed = buffer.readBigUInt64BE(offset + 10);
    const sampleRate = Number((packed >> 44n) & 0xfffffn);
    const channels = Number((packed >> 41n) & 0x7n) + 1;
    const bitsPerSample = Number((packed >> 36n) & 0x1fn) + 1;

    if (!sampleRate || !channels || !bitsPerSample) {
        return null;
    }

    return {
        codec: 'flac',
        sampleRate,
        channels,
        bitsPerSample,
        container: 'mp4',
        source: 'mp4-dfLa-streaminfo',
        lossless: true,
    };
};

const parseFlacMetadataBlocks = (buffer, start, end) => {
    let offset = start;
    while (offset + 4 <= end) {
        const header = buffer.readUInt8(offset);
        const type = header & 0x7f;
        const length = buffer.readUIntBE(offset + 1, 3);
        const payloadStart = offset + 4;
        const payloadEnd = payloadStart + length;
        if (payloadEnd > end) {
            return null;
        }

        if (type === 0) {
            return parseFlacStreamInfo(buffer, payloadStart, payloadEnd);
        }

        if (header & 0x80) {
            return null;
        }

        offset = payloadEnd;
    }

    return null;
};

const parseDfLaBox = (buffer, box) => parseFlacMetadataBlocks(buffer, box.payloadStart + 4, box.end) ?? parseFlacMetadataBlocks(buffer, box.payloadStart, box.end);

const readBits = (buffer, bitOffset, bitLength) => {
    let value = 0;
    for (let index = 0; index < bitLength; index += 1) {
        const absoluteBit = bitOffset + index;
        const byte = buffer[Math.floor(absoluteBit / 8)];
        const bit = (byte >> (7 - (absoluteBit % 8))) & 1;
        value = (value << 1) | bit;
    }
    return value;
};

const parseAacAudioSpecificConfig = (buffer, start, end) => {
    if (start + 2 > end) {
        return null;
    }

    let bitOffset = start * 8;
    let audioObjectType = readBits(buffer, bitOffset, 5);
    bitOffset += 5;
    if (audioObjectType === 31) {
        audioObjectType = 32 + readBits(buffer, bitOffset, 6);
        bitOffset += 6;
    }

    const frequencyTable = [96000, 88200, 64000, 48000, 44100, 32000, 24000, 22050, 16000, 12000, 11025, 8000, 7350];
    let frequencyIndex = readBits(buffer, bitOffset, 4);
    bitOffset += 4;
    let sampleRate = frequencyIndex === 15 ? readBits(buffer, bitOffset, 24) : (frequencyTable[frequencyIndex] ?? null);
    if (frequencyIndex === 15) {
        bitOffset += 24;
    }

    const channelConfig = readBits(buffer, bitOffset, 4);
    bitOffset += 4;
    const channelTable = {
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 8,
    };

    const isHeAac = audioObjectType === 5 || audioObjectType === 29;
    if (isHeAac) {
        frequencyIndex = readBits(buffer, bitOffset, 4);
        bitOffset += 4;
        sampleRate = frequencyIndex === 15 ? readBits(buffer, bitOffset, 24) : (frequencyTable[frequencyIndex] ?? sampleRate);
    }

    return {
        codec: isHeAac ? 'he-aac' : 'aac',
        sampleRate,
        channels: channelTable[channelConfig] ?? null,
        bitsPerSample: null,
        container: 'mp4',
        source: 'mp4-esds-asc',
        lossless: false,
    };
};

const readMp4DescriptorHeader = (buffer, offset, end) => {
    if (offset + 2 > end) {
        return null;
    }

    const tag = buffer.readUInt8(offset);
    let size = 0;
    let sizeBytes = 0;
    do {
        if (offset + 1 + sizeBytes >= end || sizeBytes >= 4) {
            return null;
        }

        const byte = buffer.readUInt8(offset + 1 + sizeBytes);
        size = (size << 7) | (byte & 0x7f);
        sizeBytes += 1;
        if (!(byte & 0x80)) {
            break;
        }
    } while (true);

    const payloadStart = offset + 1 + sizeBytes;
    const payloadEnd = payloadStart + size;
    if (payloadEnd > end) {
        return null;
    }

    return {
        tag,
        payloadStart,
        payloadEnd,
        end: payloadEnd,
    };
};

const parseEsdsDescriptors = (buffer, start, end) => {
    let offset = start;
    while (offset < end) {
        const descriptor = readMp4DescriptorHeader(buffer, offset, end);
        if (!descriptor) {
            return null;
        }

        if (descriptor.tag === 0x05) {
            return parseAacAudioSpecificConfig(buffer, descriptor.payloadStart, descriptor.payloadEnd);
        }

        if (descriptor.tag === 0x03) {
            if (descriptor.payloadStart + 3 > descriptor.payloadEnd) {
                return null;
            }

            let childStart = descriptor.payloadStart + 3;
            const flags = buffer.readUInt8(descriptor.payloadStart + 2);
            if (flags & 0x80) {
                childStart += 2;
            }
            if (flags & 0x40) {
                if (childStart >= descriptor.payloadEnd) {
                    return null;
                }
                childStart += 1 + buffer.readUInt8(childStart);
            }
            if (flags & 0x20) {
                childStart += 2;
            }
            return parseEsdsDescriptors(buffer, childStart, descriptor.payloadEnd);
        }

        if (descriptor.tag === 0x04) {
            if (descriptor.payloadStart + 13 > descriptor.payloadEnd) {
                return null;
            }

            return parseEsdsDescriptors(buffer, descriptor.payloadStart + 13, descriptor.payloadEnd);
        }

        offset = descriptor.end;
    }

    return null;
};

const parseEsdsBox = (buffer, box) => parseEsdsDescriptors(buffer, box.payloadStart + 4, box.end);

const parseAlacBox = (buffer, box) => {
    const start = box.payloadStart;
    if (start + 24 > box.end) {
        return null;
    }

    return {
        codec: 'alac',
        sampleRate: normalizePositiveNumber(buffer.readUInt32BE(start + 20)),
        channels: normalizePositiveNumber(buffer.readUInt8(start + 9)),
        bitsPerSample: normalizePositiveNumber(buffer.readUInt8(start + 5)),
        container: 'mp4',
        source: 'mp4-alac-config',
        lossless: true,
    };
};

const parseAudioSampleEntry = (buffer, entryBox, mimeType) => {
    if (entryBox.payloadStart + 28 > entryBox.end) {
        return null;
    }

    const version = buffer.readUInt16BE(entryBox.payloadStart + 8);
    let childStart = entryBox.payloadStart + 28;
    if (version === 1) {
        childStart += 16;
    } else if (version === 2) {
        childStart += 36;
    }

    const sampleEntryFormat = {
        mimeType,
        codec: entryBox.type,
        channels: normalizePositiveNumber(buffer.readUInt16BE(entryBox.payloadStart + 16)),
        bitsPerSample: normalizePositiveNumber(buffer.readUInt16BE(entryBox.payloadStart + 18)),
        sampleRate: normalizePositiveNumber(buffer.readUInt32BE(entryBox.payloadStart + 24) >>> 16),
        container: 'mp4',
        source: 'mp4-stsd-sample-entry',
    };
    let parsedFormat = sampleEntryFormat;

    walkMp4Boxes(buffer, childStart, entryBox.end, (childBox) => {
        if (childBox.type === 'dfLa') {
            parsedFormat = mergeAudioFormats(parsedFormat, parseDfLaBox(buffer, childBox));
            return;
        }

        if (childBox.type === 'esds') {
            parsedFormat = mergeAudioFormats(parsedFormat, parseEsdsBox(buffer, childBox));
            return;
        }

        if (childBox.type === 'alac') {
            parsedFormat = mergeAudioFormats(parsedFormat, parseAlacBox(buffer, childBox));
        }
    });

    return hasAudioFormatData(parsedFormat) ? parsedFormat : null;
};

const parseStsdBox = (buffer, box, mimeType) => {
    const entryCountOffset = box.payloadStart + 4;
    if (entryCountOffset + 4 > box.end) {
        return null;
    }

    const entryCount = buffer.readUInt32BE(entryCountOffset);
    let offset = entryCountOffset + 4;
    let parsedFormat = null;

    for (let index = 0; index < entryCount && offset + 8 <= box.end; index += 1) {
        const entryBox = readMp4BoxHeader(buffer, offset, box.end);
        if (!entryBox) {
            break;
        }

        parsedFormat = mergeAudioFormats(parsedFormat, parseAudioSampleEntry(buffer, entryBox, mimeType));
        offset = entryBox.end;
    }

    return hasAudioFormatData(parsedFormat) ? parsedFormat : null;
};

const parseMp4AudioFormat = (chunk, meta = {}) => {
    if (!Buffer.isBuffer(chunk) || chunk.byteLength < 16) {
        return null;
    }

    const mimeType = meta?.audioFormat?.mimeType ?? meta?.audioTrack?.mimeType ?? meta?.mimeType ?? 'audio/mp4';
    let parsedFormat = null;

    const walkContainer = (start, end, depth = 0) => {
        if (depth > 8) {
            return;
        }

        walkMp4Boxes(chunk, start, end, (box) => {
            if (box.type === 'stsd') {
                parsedFormat = mergeAudioFormats(parsedFormat, parseStsdBox(chunk, box, mimeType));
                return;
            }

            if (['moov', 'trak', 'mdia', 'minf', 'stbl'].includes(box.type)) {
                walkContainer(box.payloadStart, box.end, depth + 1);
            }
        });
    };

    walkContainer(0, chunk.byteLength);
    return hasAudioFormatData(parsedFormat) ? parsedFormat : null;
};

const stopWasapiExclusiveOutput = (reason = 'stopped') => {
    if (reason !== 'format changed') {
        lastFailedWasapiExclusiveOutputSignature = null;
        lastFailedWasapiExclusiveOutputAt = 0;
        lastFailedWasapiExclusiveOutputPermanent = false;
    }

    if (!wasapiExclusiveOutputSession) {
        if (!shouldMonitorWasapiExclusiveDefaultDevice()) {
            stopWasapiExclusiveDefaultDeviceMonitor();
        }
        return;
    }

    wasapiExclusiveOutputSession.close(reason);
    wasapiExclusiveOutputSession = null;
    if (!shouldMonitorWasapiExclusiveDefaultDevice()) {
        stopWasapiExclusiveDefaultDeviceMonitor();
    }
    emitWasapiExclusiveOutputStateChanged();
};
exports.stopWasapiExclusiveOutput = stopWasapiExclusiveOutput;

const getWasapiExclusiveOutputState = () => {
    const sessionState = wasapiExclusiveOutputSession?.getState?.() ?? null;
    return {
        enabled: isWasapiExclusiveOutputEnabled(),
        configured: isWasapiExclusiveOutputConfigured(),
        yaspTapEnabled: isYaspChunkTapEnabled(),
        forceFullVolume: isWasapiExclusiveFullVolumeForced(),
        active: wasapiExclusiveOutputSession?.state === 'running',
        captureActive:
            wasapiExclusiveOutputSession?.state === 'running' ||
            (wasapiExclusiveOutputSession?.state === 'starting' && sessionState?.exclusiveEndpointRequested === true),
        lastError: lastWasapiExclusiveOutputError,
        lastFailedSignature: lastFailedWasapiExclusiveOutputSignature,
        lastFailedAt: lastFailedWasapiExclusiveOutputAt || null,
        lastFailedPermanent: lastFailedWasapiExclusiveOutputPermanent,
        lastSkipReason: lastWasapiExclusiveOutputSkipReason,
        selectedDeviceId: getSelectedWasapiExclusiveDeviceId(),
        resolvedDeviceId: wasapiExclusiveDeviceAvailabilityCache?.resolvedDeviceId ?? null,
        defaultDeviceChangedAt: lastWasapiExclusiveDefaultDeviceChangedAt,
        preloadedStreams: getYaspPreloadedStreamStates(),
        playerState: lastWasapiExclusivePlayerState
            ? {
                  status: lastWasapiExclusivePlayerState.status,
                  isPlaying: lastWasapiExclusivePlayerState.isPlaying,
                  position: lastWasapiExclusivePlayerState.position,
                  trackId: lastWasapiExclusivePlayerState.trackId,
                  seekEventSequence: lastWasapiExclusivePlayerState.seekEventSequence,
                  exponentVolume: lastWasapiExclusivePlayerState.exponentVolume,
                  volumeGain: lastWasapiExclusivePlayerState.volumeGain,
                  updatedAt: lastWasapiExclusivePlayerState.updatedAt,
              }
            : null,
        session: sessionState,
    };
};
exports.getWasapiExclusiveOutputState = getWasapiExclusiveOutputState;

const updateWasapiExclusiveAudioParkingState = (payload = {}) => {
    if (!wasapiExclusiveOutputSession || typeof wasapiExclusiveOutputSession.setAudioParkingState !== 'function') {
        return getWasapiExclusiveOutputState();
    }

    const signature = typeof payload.signature === 'string' ? payload.signature : null;
    if (signature && signature !== wasapiExclusiveOutputSession.signature) {
        return getWasapiExclusiveOutputState();
    }

    wasapiExclusiveOutputSession.setAudioParkingState({
        ready: payload.ready === true,
        error: payload.error ? String(payload.error) : null,
        contextCount: normalizeNumber(payload.contextCount),
        updatedAt: normalizeNumber(payload.updatedAt) ?? Date.now(),
    });
    return getWasapiExclusiveOutputState();
};
exports.updateWasapiExclusiveAudioParkingState = updateWasapiExclusiveAudioParkingState;

const getWasapiSessionFormat = (format = {}) => ({
    mimeType: format.mimeType ?? null,
    codec: format.codec ?? null,
    bitrate: format.bitrate ?? null,
    channels: format.channels ?? null,
    sampleRate: format.sampleRate ?? null,
    bitsPerSample: format.bitsPerSample ?? null,
    container: format.container ?? null,
    source: format.source ?? null,
    lossless: format.lossless ?? null,
    currentTrack: format.currentTrack ?? null,
    sourceHash: format.sourceHash ?? null,
    workerId: format.workerId ?? null,
    feederId: format.feederId ?? null,
    streamGeneration: format.streamGeneration ?? null,
});

const activateYaspPreloadedStream = (previousPlayerState, nextPlayerState) => {
    if (!isWasapiExclusiveOutputEnabled() || wasapiExclusiveOutputSession) {
        return false;
    }

    if (skipUnavailableWasapiExclusiveDevice(getWasapiExclusiveDeviceAvailability())) {
        return false;
    }

    const entry = selectYaspPreloadedStreamForPlayerTrack(previousPlayerState, nextPlayerState);
    if (!entry?.chunks?.length) {
        return false;
    }

    const rendererOptions = getWasapiOutputRendererOptions(entry.format);
    if (!rendererOptions) {
        return false;
    }

    const signature = getWasapiOutputSignature(entry.format, rendererOptions);
    if (
        lastFailedWasapiExclusiveOutputSignature === signature &&
        (lastFailedWasapiExclusiveOutputPermanent ||
            (lastFailedWasapiExclusiveOutputAt && Date.now() - lastFailedWasapiExclusiveOutputAt <= WASAPI_EXCLUSIVE_FAILED_SIGNATURE_RETRY_MS))
    ) {
        return false;
    }

    const initialChunks = getYaspPreloadedDecoderChunks(entry);
    const pcmBasePosition = Number.isFinite(entry.basePosition) ? entry.basePosition : 0;

    try {
        wasapiExclusiveOutputSession = createWasapiExclusiveOutputSession({
            signature,
            format: getWasapiSessionFormat(entry.format),
            rendererOptions,
            initialChunks,
            pcmBasePosition,
            startPosition: pcmBasePosition,
            playerState: nextPlayerState,
            requireAudioParking: true,
            preloadIdentity: entry.identity,
        });
    } catch (error) {
        lastWasapiExclusiveOutputError = String(error?.message ?? error);
        lastFailedWasapiExclusiveOutputSignature = signature;
        lastFailedWasapiExclusiveOutputAt = Date.now();
        lastFailedWasapiExclusiveOutputPermanent = isPermanentWasapiExclusiveFailure(error);
        lastWasapiExclusiveOutputSkipReason = 'preloaded native stream session unavailable';
        logger.error('Failed to activate preloaded YASP WASAPI stream:', error);
        emitWasapiExclusiveOutputStateChanged();
        return false;
    }

    lastWasapiExclusiveOutputError = null;
    setLastYaspAudioFormat({
        ...entry.format,
        updatedAt: Date.now(),
    });
    lastWasapiExclusiveOutputSkipReason = null;
    logger.info('YASP WASAPI preloaded stream activated', {
        identity: entry.identity,
        currentTrack: entry.format.currentTrack,
        playerTrackId: nextPlayerState?.trackId ?? null,
        playerDurationMs: toFiniteNumber(nextPlayerState?.raw?.track?.durationMs),
        streamDurationMs: entry.durationMs,
        initialChunks: initialChunks.length,
        initialBytes: entry.bytes,
        pcmBasePosition,
    });
    emitWasapiExclusiveOutputStateChanged();
    ensureWasapiExclusiveDefaultDeviceMonitor();
    void wasapiExclusiveOutputSession.start();
    return true;
};

const updateWasapiExclusivePlayerState = (playerState = {}) => {
    const now = Date.now();
    const previousState = lastWasapiExclusivePlayerState;
    const nextState = normalizeWasapiExclusivePlayerState(playerState, now);
    if (!Number.isFinite(nextState.seekEventSequence) && previousState) {
        nextState.seekEventSequence = previousState.seekEventSequence;
    }
    if (!Number.isFinite(nextState.exponentVolume) && previousState) {
        nextState.exponentVolume = previousState.exponentVolume;
    }
    nextState.volumeGain = getWasapiExclusiveVolumeGain(nextState.exponentVolume);
    const playerTrackChanged = Boolean(previousState?.trackId && nextState.trackId && previousState.trackId !== nextState.trackId);
    const explicitPlayerSeek = Boolean(
        !playerTrackChanged &&
        !WASAPI_EXCLUSIVE_TRANSIENT_PLAYER_STATUSES.has(nextState.status) &&
        Number.isFinite(previousState?.seekEventSequence) &&
        Number.isFinite(nextState.seekEventSequence) &&
        nextState.seekEventSequence > previousState.seekEventSequence,
    );
    let stopReason = playerTrackChanged ? 'player track changed' : null;

    if (!playerTrackChanged && previousState && Number.isFinite(previousState.position) && Number.isFinite(nextState.position)) {
        const expectedPosition = getEstimatedPlayerPosition(previousState, now);
        if (Number.isFinite(expectedPosition)) {
            const jumpSeconds = nextState.position - expectedPosition;
            const rawPositionDelta = nextState.position - previousState.position;
            const updateIntervalMs = now - previousState.updatedAt;
            const playerClockStalled =
                previousState.isPlaying &&
                nextState.isPlaying &&
                updateIntervalMs >= WASAPI_EXCLUSIVE_PLAYER_CLOCK_STALL_MIN_INTERVAL_MS &&
                Math.abs(rawPositionDelta) <= WASAPI_EXCLUSIVE_PLAYER_CLOCK_STALL_MAX_DELTA_SECONDS;
            if (explicitPlayerSeek && !playerClockStalled && Math.abs(jumpSeconds) > WASAPI_EXCLUSIVE_PROGRESS_SEEK_THRESHOLD_SECONDS) {
                if (wasapiExclusiveOutputSession) {
                    lastWasapiExclusiveOutputSkipReason = `player progress seek ${jumpSeconds.toFixed(3)}s`;
                    if (!wasapiExclusiveOutputSession.seekToPosition(nextState.position, now, lastWasapiExclusiveOutputSkipReason)) {
                        stopReason = `${lastWasapiExclusiveOutputSkipReason} outside pcm cache`;
                    }
                } else {
                    stopReason = `player progress seek ${jumpSeconds.toFixed(3)}s`;
                }
            }
        }
    }
    lastWasapiExclusivePlayerState = nextState;
    if (!stopReason && wasapiExclusiveOutputSession) {
        wasapiExclusiveOutputSession.updatePlayerState?.(nextState);
    }
    if (wasapiExclusiveOutputSession?.playerHoldActive && nextState.isPlaying) {
        wasapiExclusiveOutputSession.releasePlayerHold('player resumed', now);
    }

    if (!stopReason && wasapiExclusiveOutputSession) {
        stopReason = wasapiExclusiveOutputSession.getPlayerSyncStopReason(nextState, now);
    }

    if (stopReason) {
        lastWasapiExclusiveOutputSkipReason = stopReason;
        stopWasapiExclusiveOutput(stopReason);
        if (playerTrackChanged) {
            activateYaspPreloadedStream(previousState, nextState);
        }
    } else if (wasapiExclusiveOutputSession && (nextState.isPlaying || wasapiExclusiveOutputSession.isPlayerHoldPausedState(nextState, now))) {
        wasapiExclusiveOutputSession.scheduleRendererService?.(0);
    }

    return getWasapiExclusiveOutputState();
};
exports.updateWasapiExclusivePlayerState = updateWasapiExclusivePlayerState;

const seekWasapiExclusiveOutput = (payload = {}) => {
    const position = toFiniteNumber(typeof payload === 'object' ? payload?.position : payload);
    if (!Number.isFinite(position) || position < 0) {
        return getWasapiExclusiveOutputState();
    }

    const now = Date.now();
    if (lastWasapiExclusivePlayerState) {
        lastWasapiExclusivePlayerState = {
            ...lastWasapiExclusivePlayerState,
            position,
            updatedAt: now,
        };
        wasapiExclusiveOutputSession?.updatePlayerState?.(lastWasapiExclusivePlayerState);
    }

    const session = wasapiExclusiveOutputSession;
    if (!session) {
        return getWasapiExclusiveOutputState();
    }

    const reason = `manual player seek to ${position.toFixed(3)}s`;
    if (!session.seekToPosition(position, now, reason)) {
        if (wasapiExclusiveOutputSession === session) {
            lastWasapiExclusiveOutputSkipReason = `${reason} outside decoded PCM`;
            stopWasapiExclusiveOutput(lastWasapiExclusiveOutputSkipReason);
        }
    } else {
        lastWasapiExclusiveOutputSkipReason = null;
        emitWasapiExclusiveOutputStateChanged();
    }

    return getWasapiExclusiveOutputState();
};
exports.seekWasapiExclusiveOutput = seekWasapiExclusiveOutput;

const refreshWasapiExclusiveVolumePolicy = () => {
    if (lastWasapiExclusivePlayerState) {
        lastWasapiExclusivePlayerState.volumeGain = getWasapiExclusiveVolumeGain(lastWasapiExclusivePlayerState.exponentVolume);
        wasapiExclusiveOutputSession?.updatePlayerState?.(lastWasapiExclusivePlayerState);
    }
    emitWasapiExclusiveOutputStateChanged();
    return getWasapiExclusiveOutputState();
};
exports.refreshWasapiExclusiveVolumePolicy = refreshWasapiExclusiveVolumePolicy;

const feedWasapiExclusiveOutput = (format, chunkBuffer, options = {}) => {
    if (!isWasapiExclusiveOutputEnabled()) {
        lastWasapiExclusiveOutputSkipReason = 'output disabled';
        stopWasapiExclusiveOutput('disabled');
        return;
    }

    if (!format || !Buffer.isBuffer(chunkBuffer)) {
        lastWasapiExclusiveOutputSkipReason = !format ? 'missing format' : 'invalid chunk';
        return;
    }

    const mp4ChunkInfo = options.mp4ChunkInfo && typeof options.mp4ChunkInfo === 'object' ? options.mp4ChunkInfo : {};
    const initChunk = Buffer.isBuffer(options.initChunk) ? options.initChunk : null;
    const streamPosition = Number.isFinite(options.streamPosition) ? options.streamPosition : null;
    const isMp4Format = isMp4OutputFormat(format, mp4ChunkInfo);
    const incomingStreamIdentity = getYaspStreamIdentity(format);
    const activeStreamIdentity = getYaspStreamIdentity(wasapiExclusiveOutputSession?.format);
    const preloadTarget = getYaspPreloadTarget(format);
    const isFutureTrackPreload = Boolean(preloadTarget?.trackId && preloadTarget.trackId !== lastWasapiExclusivePlayerState?.trackId);
    if (
        incomingStreamIdentity &&
        ((wasapiExclusiveOutputSession?.state !== 'closed' && activeStreamIdentity && incomingStreamIdentity !== activeStreamIdentity) ||
            (isFutureTrackPreload && incomingStreamIdentity !== activeStreamIdentity))
    ) {
        cacheYaspPreloadedChunk(format, chunkBuffer, { ...options, streamPosition });
        return;
    }

    if (lastWasapiExclusivePlayerState) {
        const stopReason = wasapiExclusiveOutputSession?.getPlayerSyncStopReason(lastWasapiExclusivePlayerState);
        if (stopReason) {
            lastWasapiExclusiveOutputSkipReason = stopReason;
            stopWasapiExclusiveOutput(stopReason);
            return;
        }

        const playerStopReason = getWasapiExclusivePlayerStopReason(lastWasapiExclusivePlayerState);
        if (playerStopReason && !wasapiExclusiveOutputSession?.isPlayerHoldPausedState(lastWasapiExclusivePlayerState)) {
            lastWasapiExclusiveOutputSkipReason = playerStopReason;
            return;
        }
    }

    const rendererOptions = getWasapiOutputRendererOptions(format);
    if (!rendererOptions) {
        lastWasapiExclusiveOutputSkipReason = 'missing renderer options';
        return;
    }

    const signature = getWasapiOutputSignature(format, rendererOptions);
    const hasReusableSession = wasapiExclusiveOutputSession && wasapiExclusiveOutputSession.signature === signature && wasapiExclusiveOutputSession.state !== 'closed';
    if (!hasReusableSession && skipUnavailableWasapiExclusiveDevice(getWasapiExclusiveDeviceAvailability())) {
        return;
    }
    if (lastFailedWasapiExclusiveOutputSignature === signature) {
        if (
            !lastFailedWasapiExclusiveOutputPermanent &&
            (!lastFailedWasapiExclusiveOutputAt || Date.now() - lastFailedWasapiExclusiveOutputAt > WASAPI_EXCLUSIVE_FAILED_SIGNATURE_RETRY_MS)
        ) {
            lastFailedWasapiExclusiveOutputSignature = null;
            lastFailedWasapiExclusiveOutputAt = 0;
            lastFailedWasapiExclusiveOutputPermanent = false;
        } else {
            lastWasapiExclusiveOutputSkipReason = lastFailedWasapiExclusiveOutputPermanent ? 'signature permanently unsupported' : 'signature failed';
            return;
        }
    }

    const preloadedEntry = !hasReusableSession ? getYaspPreloadedStream(incomingStreamIdentity) : null;

    if (!hasReusableSession && isMp4Format && mp4ChunkInfo.hasInitSegment && !mp4ChunkInfo.hasMediaSegment) {
        cacheYaspPreloadedChunk(format, chunkBuffer, { ...options, streamPosition });
        lastWasapiExclusiveOutputSkipReason = 'waiting for mp4 media chunk';
        return;
    }

    if (!hasReusableSession && isMp4Format && mp4ChunkInfo.hasMediaSegment && !mp4ChunkInfo.hasInitSegment && !initChunk && !preloadedEntry?.hasInitSegment) {
        lastWasapiExclusiveOutputSkipReason = 'missing mp4 init chunk';
        return;
    }

    let decoderChunkBuffer = chunkBuffer;
    if (hasReusableSession && isMp4Format && mp4ChunkInfo.hasInitSegment) {
        if (!mp4ChunkInfo.hasMediaSegment) {
            wasapiExclusiveOutputSession.updateFormat(format);
            wasapiExclusiveOutputSession.skipEncodedChunk(chunkBuffer, 'mp4 init-only');
            return;
        }

        if (Buffer.isBuffer(mp4ChunkInfo.mediaSegment)) {
            decoderChunkBuffer = wasapiExclusiveOutputSession.stripInitSegment(chunkBuffer, mp4ChunkInfo.mediaSegment);
        }
    }

    if (!hasReusableSession) {
        stopWasapiExclusiveOutput('format changed');
        const initialChunks = getYaspPreloadedDecoderChunks(preloadedEntry);
        if (isMp4Format && !mp4ChunkInfo.hasInitSegment && initChunk && !preloadedEntry?.hasInitSegment) {
            initialChunks.unshift(initChunk);
        }
        const pcmBasePosition = Number.isFinite(preloadedEntry?.basePosition) ? preloadedEntry.basePosition : streamPosition;
        try {
            wasapiExclusiveOutputSession = createWasapiExclusiveOutputSession({
                signature,
                format: getWasapiSessionFormat(format),
                rendererOptions,
                initialChunks,
                pcmBasePosition,
                startPosition: pcmBasePosition,
                playerState: lastWasapiExclusivePlayerState,
                requireAudioParking: true,
                preloadIdentity: preloadedEntry?.identity ?? null,
            });
        } catch (error) {
            lastWasapiExclusiveOutputError = String(error?.message ?? error);
            lastFailedWasapiExclusiveOutputSignature = signature;
            lastFailedWasapiExclusiveOutputAt = Date.now();
            lastFailedWasapiExclusiveOutputPermanent = isPermanentWasapiExclusiveFailure(error);
            lastWasapiExclusiveOutputSkipReason = 'native stream session unavailable';
            logger.error('Failed to create native-module WASAPI stream session; keeping regular YASP output:', error);
            emitWasapiExclusiveOutputStateChanged();
            return;
        }
        if (preloadedEntry) {
            logger.info('YASP WASAPI cached preload attached to stream session', {
                identity: incomingStreamIdentity,
                chunks: initialChunks.length,
                bytes: preloadedEntry.bytes,
                pcmBasePosition,
            });
        }
        lastWasapiExclusiveOutputError = null;
        emitWasapiExclusiveOutputStateChanged();
        ensureWasapiExclusiveDefaultDeviceMonitor();
        void wasapiExclusiveOutputSession.start();
    }

    lastWasapiExclusiveOutputSkipReason = null;
    wasapiExclusiveOutputSession.updateFormat(format);
    const timelineEndMs = normalizeNumber(options.chunkMeta?.timelineEndMs ?? options.chunkMeta?.nextTimeToSet);
    wasapiExclusiveOutputSession.writeEncodedChunk(decoderChunkBuffer, {
        ...(options.chunkMeta ?? {}),
        timelineStartSeconds: streamPosition,
        timelineEndSeconds: Number.isFinite(timelineEndMs) ? timelineEndMs / 1000 : null,
    });
    ensureWasapiExclusiveDefaultDeviceMonitor();
};

const configureYaspSource = (payload = {}) => {
    const source = String(payload.source ?? '');
    const sourceKey = getSourceKey(source);
    const config = payload.config && typeof payload.config === 'object' ? payload.config : {};
    sources.set(sourceKey, {
        source,
        sourceKey,
        configuredAt: Date.now(),
        hasAudioDecodingKey: Boolean(config.audioDecodingKey),
        mirrorUrlCount: Array.isArray(config.mirrorUrls) ? config.mirrorUrls.length : 0,
    });

    logger.info('YASP native audio source configured', {
        sourceHash: hashValue(sourceKey),
        hasAudioDecodingKey: Boolean(config.audioDecodingKey),
        mirrorUrlCount: Array.isArray(config.mirrorUrls) ? config.mirrorUrls.length : 0,
    });
};
exports.configureYaspSource = configureYaspSource;

const getYaspAudioFormat = () => lastYaspAudioFormat;
exports.getYaspAudioFormat = getYaspAudioFormat;

const receiveYaspChunk = (payload = {}, chunk) => {
    const chunkBuffer = toChunkBuffer(chunk);
    if (!chunkBuffer) {
        return;
    }

    const payloadSourceKey = getPayloadSourceKey(payload) || 'unknown-source';
    const statKey = getChunkStatKey(payload);
    const now = Date.now();
    pruneYaspChunkStats(now);
    const stat = chunkStats.get(statKey) ?? {
        chunks: 0,
        bytes: 0,
        firstChunkAt: now,
        lastLogAt: 0,
    };

    stat.chunks += 1;
    stat.bytes += chunkBuffer.byteLength;
    stat.lastChunkAt = now;
    stat.lastMeta = payload.meta ?? null;
    const appendSequence = normalizeNumber(payload?.meta?.appendSequence);
    if (Number.isFinite(appendSequence)) {
        if (Number.isFinite(stat.lastAppendSequence) && appendSequence <= stat.lastAppendSequence) {
            stat.outOfOrderChunkCount = (stat.outOfOrderChunkCount ?? 0) + 1;
            stat.lastOutOfOrderChunk = {
                previousAppendSequence: stat.lastAppendSequence,
                appendSequence,
                at: now,
            };
        }
        stat.lastAppendSequence = appendSequence;
    }
    chunkStats.set(statKey, stat);

    const mp4ChunkInfo = inspectMp4Chunk(chunkBuffer);
    if (mp4ChunkInfo.hasInitSegment) {
        if (mp4ChunkInfo.initSegment.byteLength <= YASP_WASAPI_INIT_CHUNK_LIMIT_BYTES) {
            stat.initChunk = mp4ChunkInfo.initSegment;
            stat.initChunkAt = now;
            stat.initChunkTopLevelBoxes = mp4ChunkInfo.topLevelBoxes;
            stat.initChunkBytes = mp4ChunkInfo.initSegment.byteLength;
            stat.lastInitChunkError = null;
        } else {
            stat.lastInitChunkError = `init chunk too large: ${mp4ChunkInfo.initSegment.byteLength}`;
        }
    }

    const metadataAudioFormat = normalizeYaspAudioFormat(payload.meta);
    const containerAudioFormat = parseMp4AudioFormat(chunkBuffer, payload.meta);
    const audioFormat = mergeAudioFormats(stat.audioFormat, metadataAudioFormat, containerAudioFormat);
    const streamPosition = getYaspChunkTimelinePosition(payload);
    stat.lastParseDebug = {
        chunkConstructor: chunk?.constructor?.name ?? null,
        bufferByteLength: chunkBuffer.byteLength,
        firstBytesHex: chunkBuffer.subarray(0, 16).toString('hex'),
        topLevelBoxes: mp4ChunkInfo.topLevelBoxes,
        hasInitSegment: mp4ChunkInfo.hasInitSegment,
        hasMediaSegment: mp4ChunkInfo.hasMediaSegment,
        cachedInitChunkBytes: stat.initChunkBytes ?? 0,
        mediaStart: mp4ChunkInfo.mediaStart,
        mediaSegmentBytes: mp4ChunkInfo.mediaSegment?.byteLength ?? 0,
        appendSequence,
        outOfOrderChunkCount: stat.outOfOrderChunkCount ?? 0,
        lastOutOfOrderChunk: stat.lastOutOfOrderChunk ?? null,
        parsedContainerSource: containerAudioFormat?.source ?? null,
        timelineStartMs: normalizeNumber(payload?.meta?.timelineStartMs),
        timelineEndMs: normalizeNumber(payload?.meta?.timelineEndMs),
        segmentNumber: payload?.meta?.segmentNumber ?? null,
        streamPosition,
    };
    if (hasAudioFormatData(audioFormat)) {
        stat.audioFormat = audioFormat;
        const nextYaspAudioFormat = {
            ...audioFormat,
            currentTrack: payload?.meta?.currentTrack ?? null,
            sourceHash: hashValue(payloadSourceKey),
            workerId: payload?.workerId || payload?.meta?.workerId || null,
            feederId: payload?.meta?.feederId ?? null,
            streamGeneration: payload?.meta?.streamGeneration ?? null,
            updatedAt: now,
        };

        if (!nextYaspAudioFormat.channels || !nextYaspAudioFormat.sampleRate || !nextYaspAudioFormat.bitsPerSample) {
            nextYaspAudioFormat.parseDebug = stat.lastParseDebug;
        }
        if (!getYaspPreloadTarget(nextYaspAudioFormat)) {
            setLastYaspAudioFormat(nextYaspAudioFormat);
        }
        feedWasapiExclusiveOutput(nextYaspAudioFormat, chunkBuffer, {
            initChunk: stat.initChunk,
            chunkMeta: payload.meta ?? null,
            mp4ChunkInfo,
            streamPosition,
        });
    }

    if (stat.chunks === 1 || stat.chunks % 256 === 0 || now - stat.lastLogAt > 10000) {
        stat.lastLogAt = now;
        logger.info('YASP native audio chunk tap', {
            statHash: hashValue(statKey),
            chunks: stat.chunks,
            bytes: stat.bytes,
            lastChunkBytes: chunkBuffer.byteLength,
            mimeType: payload?.meta?.mimeType,
            audioFormat: lastYaspAudioFormat,
            lastChunkTopLevelBoxes: mp4ChunkInfo.topLevelBoxes,
            hasInitChunk: Boolean(stat.initChunk),
            initChunkBytes: stat.initChunkBytes ?? 0,
            lastInitChunkError: stat.lastInitChunkError ?? null,
            mediaStart: mp4ChunkInfo.mediaStart,
            mediaSegmentBytes: mp4ChunkInfo.mediaSegment?.byteLength ?? 0,
            appendSequence,
            outOfOrderChunkCount: stat.outOfOrderChunkCount ?? 0,
            lastOutOfOrderChunk: stat.lastOutOfOrderChunk ?? null,
            currentTrack: payload?.meta?.currentTrack,
            workerId: payload?.workerId || payload?.meta?.workerId || null,
            feederId: payload?.meta?.feederId ?? null,
            segmentNumber: payload?.meta?.segmentNumber ?? null,
            timelineStartMs: normalizeNumber(payload?.meta?.timelineStartMs),
            timelineEndMs: normalizeNumber(payload?.meta?.timelineEndMs),
            playbackTime: payload?.meta?.playbackTime,
            streamPosition,
        });
    }
};
exports.receiveYaspChunk = receiveYaspChunk;

const resetYaspSource = (payload = {}) => {
    const sourceKey = payload.sourceKey || getSourceKey(payload.sourceUrl ?? payload.source);
    const workerId = payload.workerId || payload?.meta?.workerId || null;
    if (!sourceKey) {
        return;
    }

    if (lastYaspAudioFormat?.sourceHash === hashValue(sourceKey)) {
        setLastYaspAudioFormat(null);
        stopWasapiExclusiveOutput('source reset');
    }

    sources.delete(sourceKey);
    for (const key of Array.from(chunkStats.keys())) {
        if ((workerId && key.startsWith(`${workerId}:`)) || key.startsWith(`${sourceKey}:`)) {
            chunkStats.delete(key);
        }
    }
    const sourceHash = hashValue(sourceKey);
    for (const [identity, entry] of yaspPreloadedStreams) {
        if ((workerId && identity.startsWith(`${workerId}:`)) || entry.format.sourceHash === sourceHash) {
            yaspPreloadedStreams.delete(identity);
        }
    }

    logger.info('YASP native audio source reset', { sourceHash, workerId });
};
exports.resetYaspSource = resetYaspSource;
