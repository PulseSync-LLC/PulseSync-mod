'use strict';

Object.defineProperty(exports, '__esModule', { value: true });
exports.refreshWasapiExclusiveDefaultDeviceMonitor =
    exports.refreshWasapiExclusiveVolumePolicy =
    exports.resetYaspSource =
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
const { spawn } = require('child_process');
const { getFfmpegUpdater } = require('./ffmpegInstaller.js');

const logger = new Logger('NativeAudioOutput');
const sources = new Map();
const chunkStats = new Map();
const yaspPreloadedStreams = new Map();
const nativeAudioOutputEvents = new EventEmitter();
const YASP_AUDIO_FORMAT_CHANGED_EVENT = 'yaspAudioFormatChanged';
const WASAPI_EXCLUSIVE_OUTPUT_STATE_CHANGED_EVENT = 'wasapiExclusiveOutputStateChanged';
const WASAPI_EXCLUSIVE_OUTPUT_START_DELAY_MS = 250;
const WASAPI_EXCLUSIVE_START_PREBUFFER_MS = 2500;
const WASAPI_EXCLUSIVE_NATIVE_QUEUE_TARGET_MS = 2500;
const WASAPI_EXCLUSIVE_NATIVE_QUEUE_MIN_MS = 1000;
const WASAPI_EXCLUSIVE_PCM_PUMP_INTERVAL_MS = 20;
const WASAPI_EXCLUSIVE_PCM_PUMP_WAIT_MS = 10;
const WASAPI_EXCLUSIVE_PLAYER_HOLD_TIMEOUT_MS = 8000;
const YASP_WASAPI_DECODER_FIRST_PCM_TIMEOUT_MS = 5000;
const WASAPI_EXCLUSIVE_PROGRESS_DRIFT_THRESHOLD_SECONDS = 2;
const WASAPI_EXCLUSIVE_PROGRESS_SEEK_THRESHOLD_SECONDS = 1.5;
const WASAPI_EXCLUSIVE_PLAYER_CLOCK_STALL_MAX_DELTA_SECONDS = 0.25;
const WASAPI_EXCLUSIVE_PLAYER_CLOCK_STALL_MIN_INTERVAL_MS = 1000;
const WASAPI_EXCLUSIVE_PCM_WINDOW_POSITION_TOLERANCE_SECONDS = 0.1;
const WASAPI_EXCLUSIVE_FAILED_SIGNATURE_RETRY_MS = 15000;
const WASAPI_EXCLUSIVE_DEVICE_AVAILABILITY_TTL_MS = 1000;
const WASAPI_EXCLUSIVE_DEFAULT_DEVICE_POLL_MS = 1000;
const WASAPI_EXCLUSIVE_TRANSIENT_PLAYER_STATUSES = new Set(['buffering', 'loading']);
let lastYaspAudioFormat = null;
let lastYaspAudioFormatSignature = '';
const WASAPI_EXCLUSIVE_DEVICE_ID_SETTING_KEY = 'modSettings.nativeAudioOutput.wasapiExclusiveDeviceId';
const WASAPI_EXCLUSIVE_OUTPUT_ENABLED_SETTING_KEY = 'modSettings.nativeAudioOutput.enableWasapiExclusiveOutput';
const WASAPI_EXCLUSIVE_FORCE_FULL_VOLUME_SETTING_KEY = 'modSettings.nativeAudioOutput.forceWasapiExclusiveFullVolume';
const YASP_CHUNK_TAP_ENABLED_SETTING_KEY = 'modSettings.nativeAudioOutput.enableYaspChunkTap';
const WASAPI_EXCLUSIVE_MODULE_PATH = '../native_modules/wasapi_exclusive';
const YASP_WASAPI_DECODER_BUFFER_LIMIT_BYTES = 16 * 1024 * 1024;
const YASP_WASAPI_INIT_CHUNK_LIMIT_BYTES = 4 * 1024 * 1024;
const YASP_WASAPI_PRELOAD_STREAM_LIMIT = 4;
const YASP_WASAPI_PRELOAD_MAX_BYTES = 32 * 1024 * 1024;
const YASP_WASAPI_PRELOAD_TTL_MS = 2 * 60 * 1000;
const YASP_WASAPI_PRELOAD_DURATION_TOLERANCE_MS = 1500;
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

class YaspWasapiExclusiveOutputSession {
    constructor({ signature, format, rendererOptions, initialChunks = [], startPosition = null }) {
        this.signature = signature;
        this.format = format;
        this.rendererOptions = rendererOptions;
        this.state = 'starting';
        this.createdAt = Date.now();
        this.startedAt = null;
        this.closedAt = null;
        this.closeReason = null;
        this.error = null;
        this.decoderExit = null;
        this.decoderStderr = '';
        this.decoderArgs = null;
        this.pendingChunks = [];
        this.pendingBytes = 0;
        this.initialChunkBytes = 0;
        this.pcmCacheChunks = [];
        this.pcmCacheBytes = 0;
        this.pcmBasePosition = Number.isFinite(startPosition) ? Math.max(startPosition, 0) : 0;
        this.playbackByteOffset = 0;
        this.totalEncodedBytes = 0;
        this.totalPcmBytes = 0;
        this.totalPcmWrittenBytes = 0;
        this.pcmRemainder = Buffer.alloc(0);
        this.decoder = null;
        this.renderer = null;
        this.firstPcmTimer = null;
        this.pumpTimer = null;
        this.syncStartPosition = null;
        this.syncStartedAt = null;
        this.lastSyncDriftSeconds = null;
        this.waitingForPlayerHold = false;
        this.playerHoldActive = false;
        this.playerHoldRequestedAt = null;
        this.playerHoldReleasedAt = null;
        this.playerHoldTimedOut = false;
        this.playerHoldReleaseReason = null;
        this.lastRendererUnderruns = 0;
        this.lastRendererUnderrunFrames = 0;
        this.lastRendererUnderrunLogAt = 0;
        this.lastPumpState = null;
        this.skippedInitOnlyChunks = 0;
        this.skippedInitOnlyBytes = 0;
        this.strippedInitSegmentChunks = 0;
        this.strippedInitSegmentBytes = 0;
        this.pcmBoundaryChecks = 0;
        this.pcmBoundaryJumpWarnings = 0;
        this.maxPcmBoundaryJump = 0;
        this.lastPcmBoundaryJump = null;
        this.lastPcmBoundaryWarning = null;
        this.lastPcmFrameSamples = null;

        for (const chunk of initialChunks) {
            if (!Buffer.isBuffer(chunk) || this.pendingBytes + chunk.byteLength > YASP_WASAPI_DECODER_BUFFER_LIMIT_BYTES) {
                continue;
            }

            const queuedChunk = Buffer.from(chunk);
            this.pendingChunks.push(queuedChunk);
            this.pendingBytes += queuedChunk.byteLength;
            this.initialChunkBytes += queuedChunk.byteLength;
            this.totalEncodedBytes += queuedChunk.byteLength;
        }
    }

    updateFormat(format) {
        if (!format || typeof format !== 'object') {
            return;
        }

        this.format = {
            ...this.format,
            mimeType: format.mimeType ?? this.format?.mimeType ?? null,
            codec: format.codec ?? this.format?.codec ?? null,
            bitrate: format.bitrate ?? this.format?.bitrate ?? null,
            channels: format.channels ?? this.format?.channels ?? null,
            sampleRate: format.sampleRate ?? this.format?.sampleRate ?? null,
            bitsPerSample: format.bitsPerSample ?? this.format?.bitsPerSample ?? null,
            container: format.container ?? this.format?.container ?? null,
            source: format.source ?? this.format?.source ?? null,
            lossless: format.lossless ?? this.format?.lossless ?? null,
            currentTrack: format.currentTrack ?? this.format?.currentTrack ?? null,
            sourceHash: format.sourceHash ?? this.format?.sourceHash ?? null,
        };
    }

    getEstimatedOutputPosition(now = Date.now()) {
        if (!Number.isFinite(this.syncStartPosition) || !Number.isFinite(this.syncStartedAt)) {
            return null;
        }

        if (this.state !== 'running') {
            return this.syncStartPosition;
        }

        return this.syncStartPosition + Math.max(now - this.syncStartedAt, 0) / 1000;
    }

    getBlockAlign() {
        const containerBitsPerSample = Number(this.rendererOptions.containerBitsPerSample ?? this.rendererOptions.bitsPerSample);
        return Math.max(Number(this.rendererOptions.channels) * (containerBitsPerSample / 8), 1);
    }

    getBytesPerSample() {
        return Math.max(this.getBlockAlign() / Math.max(Number(this.rendererOptions.channels) || 1, 1), 1);
    }

    getBytesPerSecond() {
        return Math.max(Number(this.rendererOptions.sampleRate) * this.getBlockAlign(), 1);
    }

    getByteLengthForMs(milliseconds) {
        return this.alignByteOffset((this.getBytesPerSecond() * Math.max(Number(milliseconds) || 0, 0)) / 1000);
    }

    alignByteOffset(byteOffset) {
        const blockAlign = this.getBlockAlign();
        return Math.max(Math.floor((Number(byteOffset) || 0) / blockAlign) * blockAlign, 0);
    }

    getByteOffsetForPosition(positionSeconds) {
        return this.alignByteOffset(Math.max((Number(positionSeconds) || 0) - this.pcmBasePosition, 0) * this.getBytesPerSecond());
    }

    getPositionForByteOffset(byteOffset) {
        return this.pcmBasePosition + this.alignByteOffset(byteOffset) / this.getBytesPerSecond();
    }

    getPcmSample(buffer, offset) {
        const bytesPerSample = this.getBytesPerSample();
        if (bytesPerSample === 2 && offset + 2 <= buffer.byteLength) {
            return buffer.readInt16LE(offset);
        }

        if (bytesPerSample === 3 && offset + 3 <= buffer.byteLength) {
            const value = buffer.readUIntLE(offset, 3);
            return value & 0x800000 ? value - 0x1000000 : value;
        }

        if (bytesPerSample === 4 && offset + 4 <= buffer.byteLength) {
            return buffer.readInt32LE(offset);
        }

        return null;
    }

    getPcmFrameSamples(buffer, frameOffset) {
        const channels = Math.max(Number(this.rendererOptions.channels) || 1, 1);
        const bytesPerSample = this.getBytesPerSample();
        const samples = [];

        for (let channel = 0; channel < channels; channel += 1) {
            const sample = this.getPcmSample(buffer, frameOffset + channel * bytesPerSample);
            if (!Number.isFinite(sample)) {
                return null;
            }
            samples.push(sample);
        }

        return samples;
    }

    getPcmBoundaryJumpThreshold() {
        const bitsPerSample = Number(this.rendererOptions.bitsPerSample) || 16;
        return Math.max(Math.floor(2 ** Math.min(bitsPerSample - 1, 30) * 0.25), 1);
    }

    trackPcmBoundary(chunk) {
        if (!Buffer.isBuffer(chunk) || chunk.byteLength < this.getBlockAlign()) {
            return;
        }

        const firstFrame = this.getPcmFrameSamples(chunk, 0);
        const lastFrame = this.getPcmFrameSamples(chunk, chunk.byteLength - this.getBlockAlign());
        if (!firstFrame || !lastFrame) {
            return;
        }

        if (this.lastPcmFrameSamples?.length === firstFrame.length) {
            let jump = 0;
            for (let index = 0; index < firstFrame.length; index += 1) {
                jump = Math.max(jump, Math.abs(firstFrame[index] - this.lastPcmFrameSamples[index]));
            }

            this.pcmBoundaryChecks += 1;
            this.lastPcmBoundaryJump = jump;
            this.maxPcmBoundaryJump = Math.max(this.maxPcmBoundaryJump, jump);

            if (jump > this.getPcmBoundaryJumpThreshold()) {
                this.pcmBoundaryJumpWarnings += 1;
                this.lastPcmBoundaryWarning = {
                    jump,
                    checks: this.pcmBoundaryChecks,
                    totalPcmBytes: this.totalPcmBytes,
                    firstFrame,
                    previousFrame: this.lastPcmFrameSamples,
                };
            }
        }

        this.lastPcmFrameSamples = lastFrame;
    }

    syncPlaybackOffsetToPlayer(now = Date.now()) {
        if (this.state === 'running') {
            return false;
        }

        const playerPosition = getEstimatedPlayerPosition(lastWasapiExclusivePlayerState, now);
        if (!Number.isFinite(playerPosition) || playerPosition + 0.5 < this.pcmBasePosition) {
            return false;
        }

        const nextByteOffset = this.getByteOffsetForPosition(playerPosition);
        if (nextByteOffset > this.pcmCacheBytes) {
            return false;
        }

        if (Math.abs(nextByteOffset - this.playbackByteOffset) < this.getByteLengthForMs(20)) {
            return true;
        }

        this.playbackByteOffset = nextByteOffset;
        this.syncStartPosition = this.getPositionForByteOffset(this.playbackByteOffset);
        this.syncStartedAt = now;
        this.lastSyncDriftSeconds = null;
        return true;
    }

    requestPlayerHold(now = Date.now()) {
        if (this.waitingForPlayerHold) {
            return;
        }

        this.waitingForPlayerHold = true;
        this.playerHoldActive = true;
        this.playerHoldRequestedAt = now;
        this.playerHoldReleasedAt = null;
        this.playerHoldReleaseReason = null;
        this.playerHoldTimedOut = false;
        logger.info('YASP WASAPI exclusive waiting for player hold', {
            signature: this.signature,
            playbackByteOffset: this.playbackByteOffset,
            pcmCacheBytes: this.pcmCacheBytes,
        });
        emitWasapiExclusiveOutputStateChanged();
    }

    releasePlayerHoldRequest(reason = 'renderer started', now = Date.now(), emitState = true) {
        if (!this.waitingForPlayerHold) {
            return;
        }

        this.waitingForPlayerHold = false;
        this.playerHoldReleasedAt = now;
        this.playerHoldReleaseReason = reason;
        if (emitState) {
            emitWasapiExclusiveOutputStateChanged();
        }
    }

    releasePlayerHold(reason = 'released', now = Date.now(), emitState = true) {
        const changed = this.waitingForPlayerHold || this.playerHoldActive || this.playerHoldReleaseReason !== reason;
        this.waitingForPlayerHold = false;
        this.playerHoldActive = false;
        this.playerHoldReleasedAt = now;
        this.playerHoldReleaseReason = reason;
        if (changed && emitState) {
            emitWasapiExclusiveOutputStateChanged();
        }
    }

    isPlayerHoldPausedState(playerState = lastWasapiExclusivePlayerState, now = Date.now()) {
        if (!this.playerHoldActive || !playerState?.hasIsPlaying || playerState.isPlaying) {
            return false;
        }

        if (!this.waitingForPlayerHold && Number.isFinite(this.playerHoldReleasedAt) && now - this.playerHoldReleasedAt > WASAPI_EXCLUSIVE_PLAYER_HOLD_TIMEOUT_MS) {
            this.playerHoldTimedOut = true;
            this.releasePlayerHold('resume timeout', now);
            return false;
        }

        return true;
    }

    shouldWaitForPlayerHold(now = Date.now()) {
        if (this.state !== 'starting' || this.renderer || this.startedAt) {
            return false;
        }

        if (!lastWasapiExclusivePlayerState?.isPlaying) {
            if (this.isPlayerHoldPausedState(lastWasapiExclusivePlayerState, now)) {
                this.syncPlaybackOffsetToPlayer(now);
            }
            return false;
        }

        this.requestPlayerHold(now);
        if (now - this.playerHoldRequestedAt > WASAPI_EXCLUSIVE_PLAYER_HOLD_TIMEOUT_MS) {
            this.playerHoldTimedOut = true;
            this.releasePlayerHold('hold timeout', now);
            logger.warn('YASP WASAPI exclusive player hold timeout', {
                signature: this.signature,
                playerState: lastWasapiExclusivePlayerState,
            });
            return false;
        }

        return true;
    }

    seekToPosition(positionSeconds, now = Date.now(), reason = 'seek') {
        const nextByteOffset = this.getByteOffsetForPosition(positionSeconds);
        if (Number(positionSeconds) + 0.5 < this.pcmBasePosition || nextByteOffset > this.pcmCacheBytes + this.getBytesPerSecond()) {
            return false;
        }

        if (Math.abs(nextByteOffset - this.playbackByteOffset) < this.getBytesPerSecond() * 0.1) {
            return true;
        }

        this.playbackByteOffset = nextByteOffset;
        this.syncStartPosition = this.getPositionForByteOffset(this.playbackByteOffset);
        this.syncStartedAt = now;
        this.lastSyncDriftSeconds = null;
        if (this.renderer?.flush) {
            try {
                const flushedBytes = this.renderer.flush();
                logger.info('YASP WASAPI exclusive renderer flushed', {
                    reason,
                    signature: this.signature,
                    flushedBytes,
                    playbackByteOffset: this.playbackByteOffset,
                    pcmCacheBytes: this.pcmCacheBytes,
                });
            } catch (error) {
                logger.error('YASP WASAPI exclusive renderer flush failed:', error);
                this.closeRenderer(`pcm cache ${reason}`);
            }
        } else {
            this.closeRenderer(`pcm cache ${reason}`);
        }
        this.schedulePcmPump(0);
        return true;
    }

    closeRenderer(reason = 'renderer reset') {
        if (!this.renderer) {
            return;
        }

        try {
            this.renderer.close();
        } catch {}
        this.renderer = null;
        if (this.state !== 'closed') {
            this.state = 'starting';
            logger.info('YASP WASAPI exclusive renderer reset', {
                reason,
                signature: this.signature,
                playbackByteOffset: this.playbackByteOffset,
                pcmCacheBytes: this.pcmCacheBytes,
            });
            emitWasapiExclusiveOutputStateChanged();
        }
    }

    getPlayerSyncStopReason(playerState, now = Date.now()) {
        if (!playerState) {
            return null;
        }

        if (this.isPlayerHoldPausedState(playerState, now)) {
            return null;
        }

        const playerStopReason = getWasapiExclusivePlayerStopReason(playerState);
        if (playerStopReason) {
            return playerStopReason;
        }

        if (WASAPI_EXCLUSIVE_TRANSIENT_PLAYER_STATUSES.has(playerState.status)) {
            return null;
        }

        if (this.state !== 'running') {
            return null;
        }

        const outputPosition = this.getEstimatedOutputPosition(now);
        const playerPosition = getEstimatedPlayerPosition(playerState, now);
        if (!Number.isFinite(outputPosition) || !Number.isFinite(playerPosition)) {
            return null;
        }

        const driftSeconds = outputPosition - playerPosition;
        this.lastSyncDriftSeconds = driftSeconds;
        if (Math.abs(driftSeconds) > WASAPI_EXCLUSIVE_PROGRESS_DRIFT_THRESHOLD_SECONDS) {
            if (!this.seekToPosition(playerPosition, now, `player progress drift ${driftSeconds.toFixed(3)}s`)) {
                return `player progress drift ${driftSeconds.toFixed(3)}s outside pcm cache`;
            }
        }

        return null;
    }

    async start() {
        try {
            if (lastWasapiExclusivePlayerState?.isPlaying) {
                this.requestPlayerHold();
            }
            await wait(WASAPI_EXCLUSIVE_OUTPUT_START_DELAY_MS);
            if (this.state === 'closed' || wasapiExclusiveOutputSession !== this) {
                return;
            }

            const wasapiExclusive = getWasapiExclusiveModule();
            if (!wasapiExclusive?.isSupported?.()) {
                throw new Error('WASAPI exclusive module is not available');
            }

            const closest = wasapiExclusive.getClosestSupportedFormat?.(this.rendererOptions);
            if (closest && closest.exact === false) {
                const requested = closest.requestedOptions ?? this.rendererOptions;
                const supported = closest.format;
                throw new Error(
                    `Exact WASAPI format is not supported: requested ${requested.sampleRate}/${requested.channels}/${requested.bitsPerSample}/${
                        requested.containerBitsPerSample ?? requested.bitsPerSample
                    }/${requested.float ? 'float' : 'pcm'}, closest ${
                        supported
                            ? `${supported.sampleRate}/${supported.channels}/${supported.bitsPerSample}/${supported.containerBitsPerSample ?? supported.bitsPerSample}/${
                                  supported.float ? 'float' : 'pcm'
                              }`
                            : 'none'
                    }`,
                );
            }
            if (closest?.rendererOptions) {
                this.rendererOptions = {
                    ...this.rendererOptions,
                    ...closest.rendererOptions,
                };
            }

            const ffmpegPath = await getFfmpegUpdater().ensureInstalled();
            if (this.state === 'closed') {
                return;
            }

            this.decoderArgs = this.createFfmpegArgs();
            this.decoder = spawn(ffmpegPath, this.decoderArgs, {
                windowsHide: true,
                stdio: ['pipe', 'pipe', 'pipe'],
            });

            this.decoder.stdout.on('data', (chunk) => this.writePcm(chunk));
            this.decoder.stderr.on('data', (chunk) => {
                this.decoderStderr = `${this.decoderStderr}${chunk.toString()}`.slice(-8192);
            });
            this.decoder.stdin.on('error', (error) => {
                if (this.state !== 'closed') {
                    this.fail(error);
                }
            });
            this.decoder.on('error', (error) => {
                this.fail(error);
            });
            this.decoder.on('close', (code, signal) => {
                this.decoderExit = { code, signal };
                if (this.state !== 'closed') {
                    const reason = `ffmpeg exited: code=${code}, signal=${signal}`;
                    if (code !== 0 || signal) {
                        this.error = reason;
                        lastWasapiExclusiveOutputError = this.decoderStderr ? `${reason}: ${this.decoderStderr}` : reason;
                        lastFailedWasapiExclusiveOutputSignature = this.signature;
                        lastFailedWasapiExclusiveOutputAt = Date.now();
                    }
                    this.close(reason);
                }
            });

            this.firstPcmTimer = setTimeout(() => {
                if (this.state === 'starting' && !this.renderer) {
                    this.fail(new Error('YASP WASAPI decoder did not produce PCM before timeout'));
                }
            }, YASP_WASAPI_DECODER_FIRST_PCM_TIMEOUT_MS);
            this.firstPcmTimer?.unref?.();
            this.flushPendingChunks();
        } catch (error) {
            this.fail(error);
        }
    }

    createFfmpegArgs() {
        const containerBitsPerSample = Number(this.rendererOptions.containerBitsPerSample ?? this.rendererOptions.bitsPerSample);
        const pcmCodec = `pcm_s${containerBitsPerSample}le`;
        const pcmFormat = `s${containerBitsPerSample}le`;
        return [
            '-hide_banner',
            '-loglevel',
            'warning',
            '-i',
            'pipe:0',
            '-map',
            '0:a:0',
            '-vn',
            '-ac',
            String(this.rendererOptions.channels),
            '-ar',
            String(this.rendererOptions.sampleRate),
            '-acodec',
            pcmCodec,
            '-f',
            pcmFormat,
            'pipe:1',
        ];
    }

    writeDecoderStdin(chunk) {
        const stdin = this.decoder?.stdin;
        if (!stdin?.writable || stdin.destroyed || stdin.writableEnded) {
            return false;
        }

        try {
            stdin.write(chunk, (error) => {
                if (error && this.state !== 'closed') {
                    this.fail(error);
                }
            });
            return true;
        } catch (error) {
            this.fail(error);
            return false;
        }
    }

    writeEncodedChunk(chunk) {
        if (this.state === 'closed' || !Buffer.isBuffer(chunk)) {
            return;
        }

        this.totalEncodedBytes += chunk.byteLength;
        if (this.decoder?.stdin?.writable && this.state !== 'closed') {
            this.writeDecoderStdin(chunk);
            return;
        }

        if (this.pendingBytes + chunk.byteLength > YASP_WASAPI_DECODER_BUFFER_LIMIT_BYTES) {
            const error = new Error('YASP WASAPI decoder input buffer overflow before ffmpeg start');
            this.fail(error);
            return;
        }

        this.pendingChunks.push(Buffer.from(chunk));
        this.pendingBytes += chunk.byteLength;
    }

    skipEncodedChunk(chunk, reason = 'skipped') {
        if (!Buffer.isBuffer(chunk)) {
            return;
        }

        if (reason === 'mp4 init-only') {
            this.skippedInitOnlyChunks += 1;
            this.skippedInitOnlyBytes += chunk.byteLength;
        }
    }

    stripInitSegment(originalChunk, mediaChunk) {
        if (!Buffer.isBuffer(originalChunk) || !Buffer.isBuffer(mediaChunk) || mediaChunk.byteLength >= originalChunk.byteLength) {
            return mediaChunk;
        }

        this.strippedInitSegmentChunks += 1;
        this.strippedInitSegmentBytes += originalChunk.byteLength - mediaChunk.byteLength;
        return mediaChunk;
    }

    flushPendingChunks() {
        if (!this.decoder?.stdin?.writable) {
            return;
        }

        for (const chunk of this.pendingChunks) {
            if (!this.writeDecoderStdin(chunk)) {
                break;
            }
        }
        this.pendingChunks = [];
        this.pendingBytes = 0;
    }

    appendPcmCache(chunk) {
        if (!Buffer.isBuffer(chunk) || !chunk.byteLength) {
            return;
        }

        const cachedChunk = Buffer.from(chunk);
        this.pcmCacheChunks.push(cachedChunk);
        this.pcmCacheBytes += cachedChunk.byteLength;
        this.totalPcmBytes += cachedChunk.byteLength;
    }

    readPcmCache(byteOffset, byteLength) {
        const startOffset = this.alignByteOffset(byteOffset);
        const endOffset = Math.min(startOffset + this.alignByteOffset(byteLength), this.pcmCacheBytes);
        if (endOffset <= startOffset) {
            return null;
        }

        const output = Buffer.alloc(endOffset - startOffset);
        let chunkStart = 0;
        let outputOffset = 0;

        for (const chunk of this.pcmCacheChunks) {
            const chunkEnd = chunkStart + chunk.byteLength;
            if (chunkEnd <= startOffset) {
                chunkStart = chunkEnd;
                continue;
            }

            if (chunkStart >= endOffset) {
                break;
            }

            const copyStart = Math.max(startOffset - chunkStart, 0);
            const copyEnd = Math.min(endOffset - chunkStart, chunk.byteLength);
            chunk.copy(output, outputOffset, copyStart, copyEnd);
            outputOffset += copyEnd - copyStart;
            chunkStart = chunkEnd;
        }

        return outputOffset === output.byteLength ? output : output.subarray(0, outputOffset);
    }

    canPumpPcm() {
        if (this.state === 'closed') {
            return false;
        }

        const now = Date.now();
        const playerHoldPaused = this.isPlayerHoldPausedState(lastWasapiExclusivePlayerState, now);
        const playerStopReason = getWasapiExclusivePlayerStopReason(lastWasapiExclusivePlayerState);
        if (playerStopReason && !playerHoldPaused) {
            return false;
        }

        return !lastWasapiExclusivePlayerState || lastWasapiExclusivePlayerState.isPlaying || playerHoldPaused;
    }

    ensureRenderer() {
        if (this.renderer) {
            return true;
        }

        this.syncPlaybackOffsetToPlayer();

        const availableBytes = this.pcmCacheBytes - this.playbackByteOffset;
        const startPrebufferBytes = this.getByteLengthForMs(WASAPI_EXCLUSIVE_START_PREBUFFER_MS);
        if (availableBytes < startPrebufferBytes || !this.canPumpPcm()) {
            return false;
        }

        if (this.shouldWaitForPlayerHold()) {
            return false;
        }

        this.renderer = createWasapiExclusiveRenderer(this.rendererOptions);
        if (!this.renderer) {
            throw new Error('Failed to create WASAPI exclusive renderer');
        }

        const rendererState = this.renderer.getState?.() ?? null;
        this.lastRendererUnderruns = Number(rendererState?.underruns) || 0;
        this.lastRendererUnderrunFrames = Number(rendererState?.underrunFrames) || 0;
        this.lastRendererUnderrunLogAt = 0;

        clearTimeout(this.firstPcmTimer);
        this.firstPcmTimer = null;
        this.state = 'running';
        if (!this.startedAt) {
            this.startedAt = Date.now();
        }
        const now = Date.now();
        this.syncStartedAt = now;
        this.syncStartPosition = this.getPositionForByteOffset(this.playbackByteOffset);
        this.releasePlayerHoldRequest('renderer started', now, false);
        lastWasapiExclusiveOutputError = null;
        lastFailedWasapiExclusiveOutputSignature = null;
        lastFailedWasapiExclusiveOutputAt = 0;
        lastWasapiExclusiveOutputSkipReason = null;
        emitWasapiExclusiveOutputStateChanged();
        logger.info('YASP WASAPI exclusive output started', {
            signature: this.signature,
            rendererOptions: this.rendererOptions,
            format: this.format,
            playbackByteOffset: this.playbackByteOffset,
            pcmCacheBytes: this.pcmCacheBytes,
        });
        return true;
    }

    schedulePcmPump(delayMs = WASAPI_EXCLUSIVE_PCM_PUMP_INTERVAL_MS) {
        if (this.state === 'closed' || this.pumpTimer) {
            return;
        }

        this.pumpTimer = setTimeout(() => {
            this.pumpTimer = null;
            this.pumpPcm();
        }, delayMs);
        this.pumpTimer?.unref?.();
    }

    getRendererQueuedBytes(state = null) {
        const rendererState = state ?? this.renderer?.getState?.() ?? null;
        const queuedFrames = Number(rendererState?.queuedFrames);
        if (Number.isFinite(queuedFrames)) {
            return this.alignByteOffset(queuedFrames * this.getBlockAlign());
        }

        return this.alignByteOffset(Number(rendererState?.queuedBytes) || 0);
    }

    logRendererUnderruns(state) {
        if (!state) {
            return;
        }

        const underruns = Number(state.underruns) || 0;
        const underrunFrames = Number(state.underrunFrames) || 0;
        if (underruns <= this.lastRendererUnderruns && underrunFrames <= this.lastRendererUnderrunFrames) {
            return;
        }

        const now = Date.now();
        if (now - this.lastRendererUnderrunLogAt > 1000) {
            logger.warn('YASP WASAPI exclusive renderer underrun', {
                signature: this.signature,
                underruns,
                underrunFrames,
                queuedFrames: state.queuedFrames,
                paddingFrames: state.paddingFrames,
                bufferFrames: state.bufferFrames,
                playedFrames: state.playedFrames,
                renderedFrames: state.renderedFrames,
                playbackByteOffset: this.playbackByteOffset,
                pcmCacheBytes: this.pcmCacheBytes,
            });
            this.lastRendererUnderrunLogAt = now;
        }

        this.lastRendererUnderruns = underruns;
        this.lastRendererUnderrunFrames = underrunFrames;
    }

    pumpPcm() {
        if (this.state === 'closed') {
            return;
        }

        try {
            if (!this.canPumpPcm()) {
                return;
            }

            if (!this.ensureRenderer()) {
                this.schedulePcmPump(WASAPI_EXCLUSIVE_PCM_PUMP_WAIT_MS);
                return;
            }

            const targetQueueBytes = this.getByteLengthForMs(WASAPI_EXCLUSIVE_NATIVE_QUEUE_TARGET_MS);
            const minimumQueueBytes = this.getByteLengthForMs(WASAPI_EXCLUSIVE_NATIVE_QUEUE_MIN_MS);
            const maxWriteBytes = this.getByteLengthForMs(500);
            let rendererState = this.renderer.getState?.() ?? null;
            this.lastPumpState = rendererState;
            this.logRendererUnderruns(rendererState);
            let queuedBytes = this.getRendererQueuedBytes(rendererState);
            let availableBytes = this.pcmCacheBytes - this.playbackByteOffset;
            let wroteBytes = 0;
            let iterations = 0;

            while (availableBytes > 0 && queuedBytes < targetQueueBytes && iterations < 8) {
                const wantedBytes = Math.min(targetQueueBytes - queuedBytes, availableBytes, maxWriteBytes);
                const pcm = this.readPcmCache(this.playbackByteOffset, wantedBytes);
                if (!pcm?.byteLength) {
                    break;
                }

                const written = this.renderer.writePcm(pcm);
                const writtenBytes = Math.min(Number(written) || 0, pcm.byteLength);
                if (writtenBytes <= 0) {
                    break;
                }

                const alignedWrittenBytes = this.alignByteOffset(writtenBytes);
                this.playbackByteOffset += alignedWrittenBytes;
                this.totalPcmWrittenBytes += alignedWrittenBytes;
                queuedBytes += alignedWrittenBytes;
                wroteBytes += alignedWrittenBytes;
                availableBytes = this.pcmCacheBytes - this.playbackByteOffset;
                iterations += 1;
            }

            rendererState = this.renderer.getState?.() ?? rendererState;
            this.lastPumpState = rendererState;
            this.logRendererUnderruns(rendererState);
            queuedBytes = this.getRendererQueuedBytes(rendererState);

            if (availableBytes <= 0 || queuedBytes < minimumQueueBytes) {
                this.schedulePcmPump(WASAPI_EXCLUSIVE_PCM_PUMP_WAIT_MS);
                return;
            }

            this.schedulePcmPump(wroteBytes > 0 ? WASAPI_EXCLUSIVE_PCM_PUMP_INTERVAL_MS : WASAPI_EXCLUSIVE_PCM_PUMP_WAIT_MS);
        } catch (error) {
            this.fail(error);
        }
    }

    writePcm(chunk) {
        if (this.state === 'closed' || !Buffer.isBuffer(chunk)) {
            return;
        }

        try {
            const blockAlign = this.getBlockAlign();
            const buffer = this.pcmRemainder.length ? Buffer.concat([this.pcmRemainder, chunk]) : chunk;
            const alignedLength = buffer.byteLength - (buffer.byteLength % blockAlign);
            if (alignedLength <= 0) {
                this.pcmRemainder = Buffer.from(buffer);
                return;
            }

            if (this.totalPcmBytes === 0) {
                clearTimeout(this.firstPcmTimer);
                this.firstPcmTimer = null;
                const startPosition = getEstimatedPlayerPosition(lastWasapiExclusivePlayerState, Date.now());
                if (Number.isFinite(startPosition)) {
                    if (startPosition + WASAPI_EXCLUSIVE_PCM_WINDOW_POSITION_TOLERANCE_SECONDS < this.pcmBasePosition) {
                        this.fail(
                            new Error(
                                `Captured PCM window starts at ${this.pcmBasePosition.toFixed(3)}s, ahead of player position ${startPosition.toFixed(3)}s`,
                            ),
                        );
                        return;
                    }
                    this.playbackByteOffset = this.getByteOffsetForPosition(startPosition);
                    this.syncStartPosition = startPosition;
                    this.syncStartedAt = Date.now();
                }
            }

            const alignedChunk = buffer.subarray(0, alignedLength);
            this.trackPcmBoundary(alignedChunk);
            this.appendPcmCache(alignedChunk);
            this.pcmRemainder = alignedLength < buffer.byteLength ? Buffer.from(buffer.subarray(alignedLength)) : Buffer.alloc(0);
            this.schedulePcmPump(0);
        } catch (error) {
            this.fail(error);
        }
    }

    fail(error) {
        this.error = String(error?.message ?? error);
        lastWasapiExclusiveOutputError = this.error;
        lastFailedWasapiExclusiveOutputSignature = this.signature;
        lastFailedWasapiExclusiveOutputAt = Date.now();
        logger.error('YASP WASAPI exclusive output failed:', this.error, this.decoderStderr);
        this.close(`error: ${this.error}`);
    }

    close(reason = 'closed') {
        if (this.state === 'closed') {
            return;
        }

        this.state = 'closed';
        this.closeReason = reason;
        this.closedAt = Date.now();
        this.releasePlayerHold(`closed: ${reason}`, this.closedAt, false);
        clearTimeout(this.firstPcmTimer);
        this.firstPcmTimer = null;
        clearTimeout(this.pumpTimer);
        this.pumpTimer = null;

        try {
            this.decoder?.stdin?.destroy();
        } catch {}
        try {
            this.decoder?.kill('SIGTERM');
        } catch {}
        try {
            this.renderer?.close();
        } catch {}

        this.pendingChunks = [];
        this.pendingBytes = 0;
        this.pcmCacheChunks = [];
        this.pcmCacheBytes = 0;
        this.pcmRemainder = Buffer.alloc(0);
        logger.info('YASP WASAPI exclusive output closed', {
            reason,
            signature: this.signature,
            totalEncodedBytes: this.totalEncodedBytes,
            initialChunkBytes: this.initialChunkBytes,
            totalPcmBytes: this.totalPcmBytes,
            totalPcmWrittenBytes: this.totalPcmWrittenBytes,
            decoderExit: this.decoderExit,
            decoderStderr: this.decoderStderr,
        });
        emitWasapiExclusiveOutputStateChanged();
    }

    getState() {
        return {
            state: this.state,
            signature: this.signature,
            format: this.format,
            rendererOptions: this.rendererOptions,
            rendererState: this.renderer?.getState?.() ?? null,
            createdAt: this.createdAt,
            startedAt: this.startedAt,
            closedAt: this.closedAt,
            closeReason: this.closeReason,
            error: this.error,
            decoderExit: this.decoderExit,
            decoderArgs: this.decoderArgs,
            pendingBytes: this.pendingBytes,
            initialChunkBytes: this.initialChunkBytes,
            pcmCacheBytes: this.pcmCacheBytes,
            pcmBasePosition: this.pcmBasePosition,
            playbackByteOffset: this.playbackByteOffset,
            totalEncodedBytes: this.totalEncodedBytes,
            totalPcmBytes: this.totalPcmBytes,
            totalPcmWrittenBytes: this.totalPcmWrittenBytes,
            decoderStderr: this.decoderStderr,
            syncStartPosition: this.syncStartPosition,
            syncStartedAt: this.syncStartedAt,
            estimatedOutputPosition: this.getEstimatedOutputPosition(),
            lastSyncDriftSeconds: this.lastSyncDriftSeconds,
            waitingForPlayerHold: this.waitingForPlayerHold,
            playerHoldActive: this.playerHoldActive,
            playerHoldRequestedAt: this.playerHoldRequestedAt,
            playerHoldReleasedAt: this.playerHoldReleasedAt,
            playerHoldTimedOut: this.playerHoldTimedOut,
            playerHoldReleaseReason: this.playerHoldReleaseReason,
            playerHoldTimeoutMs: WASAPI_EXCLUSIVE_PLAYER_HOLD_TIMEOUT_MS,
            lastPumpState: this.lastPumpState,
            queueTargetMs: WASAPI_EXCLUSIVE_NATIVE_QUEUE_TARGET_MS,
            queueMinMs: WASAPI_EXCLUSIVE_NATIVE_QUEUE_MIN_MS,
            startPrebufferMs: WASAPI_EXCLUSIVE_START_PREBUFFER_MS,
            skippedInitOnlyChunks: this.skippedInitOnlyChunks,
            skippedInitOnlyBytes: this.skippedInitOnlyBytes,
            strippedInitSegmentChunks: this.strippedInitSegmentChunks,
            strippedInitSegmentBytes: this.strippedInitSegmentBytes,
            pcmBoundaryChecks: this.pcmBoundaryChecks,
            pcmBoundaryJumpWarnings: this.pcmBoundaryJumpWarnings,
            maxPcmBoundaryJump: this.maxPcmBoundaryJump,
            lastPcmBoundaryJump: this.lastPcmBoundaryJump,
            lastPcmBoundaryWarning: this.lastPcmBoundaryWarning,
        };
    }
}

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
                    lastWasapiExclusiveOutputError = null;
                    lastWasapiExclusiveOutputSkipReason = null;
                    if (lastFailedWasapiExclusiveOutputSignature === sessionOptions.signature) {
                        lastFailedWasapiExclusiveOutputSignature = null;
                        lastFailedWasapiExclusiveOutputAt = 0;
                    }
                }
                emitWasapiExclusiveOutputStateChanged();
            },
            onError: (error, session) => {
                lastWasapiExclusiveOutputError = String(error?.message ?? error);
                lastFailedWasapiExclusiveOutputSignature = session?.signature ?? sessionOptions.signature;
                lastFailedWasapiExclusiveOutputAt = Date.now();
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
        containerBitsPerSample: bitsPerSample,
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
    format.workerId && format.feederId != null && format.currentTrack
        ? `${format.workerId}:${format.feederId}:${format.currentTrack}`
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
    const chunkKey = Number.isFinite(appendSequence)
        ? `sequence:${appendSequence}`
        : `segment:${chunkMeta.segmentNumber ?? 'unknown'}:${mp4ChunkInfo.hasInitSegment === true}:${mp4ChunkInfo.hasMediaSegment === true}:${
              timelineStartSeconds ?? 'unknown'
          }:${chunkBuffer.byteLength}`;
    if (entry.chunkKeys.has(chunkKey)) {
        return entry;
    }

    const cachedInitChunk = Buffer.isBuffer(options.initChunk) ? options.initChunk : null;
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

    if (entry.bytes + chunkBuffer.byteLength > YASP_WASAPI_PRELOAD_MAX_BYTES) {
        entry.truncated = true;
        return entry;
    }

    entry.chunkKeys.add(chunkKey);
    entry.chunks.push({
        buffer: Buffer.from(chunkBuffer),
        appendSequence,
        timelineStartSeconds,
        hasInitSegment: mp4ChunkInfo.hasInitSegment === true,
        hasMediaSegment: mp4ChunkInfo.hasMediaSegment === true,
    });
    entry.bytes += chunkBuffer.byteLength;
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
        if (!candidates.length) {
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
    return `${workerId}:${feederId}`;
};

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
    const mediaSegment = Number.isFinite(mediaStart) ? Buffer.from(buffer.subarray(mediaStart)) : null;

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
        lastFailedWasapiExclusiveOutputAt &&
        Date.now() - lastFailedWasapiExclusiveOutputAt <= WASAPI_EXCLUSIVE_FAILED_SIGNATURE_RETRY_MS
    ) {
        return false;
    }

    const initialChunks = entry.chunks
        .slice()
        .sort((left, right) => {
            if (Number.isFinite(left.appendSequence) && Number.isFinite(right.appendSequence)) {
                return left.appendSequence - right.appendSequence;
            }
            return 0;
        })
        .map((chunk) => chunk.buffer);
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
        });
    } catch (error) {
        lastWasapiExclusiveOutputError = String(error?.message ?? error);
        lastFailedWasapiExclusiveOutputSignature = signature;
        lastFailedWasapiExclusiveOutputAt = Date.now();
        lastWasapiExclusiveOutputSkipReason = 'preloaded native stream session unavailable';
        logger.error('Failed to activate preloaded YASP WASAPI stream:', error);
        emitWasapiExclusiveOutputStateChanged();
        return false;
    }

    consumeYaspPreloadedStream(entry.identity);
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
    if (!Number.isFinite(nextState.exponentVolume) && previousState) {
        nextState.exponentVolume = previousState.exponentVolume;
    }
    nextState.volumeGain = getWasapiExclusiveVolumeGain(nextState.exponentVolume);
    const playerTrackChanged = Boolean(previousState?.trackId && nextState.trackId && previousState.trackId !== nextState.trackId);
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
            if (!playerClockStalled && Math.abs(jumpSeconds) > WASAPI_EXCLUSIVE_PROGRESS_SEEK_THRESHOLD_SECONDS) {
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
        if (!lastFailedWasapiExclusiveOutputAt || Date.now() - lastFailedWasapiExclusiveOutputAt > WASAPI_EXCLUSIVE_FAILED_SIGNATURE_RETRY_MS) {
            lastFailedWasapiExclusiveOutputSignature = null;
            lastFailedWasapiExclusiveOutputAt = 0;
        } else {
            lastWasapiExclusiveOutputSkipReason = 'signature failed';
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
        const initialChunks = preloadedEntry
            ? preloadedEntry.chunks
                  .slice()
                  .sort((left, right) => {
                      if (Number.isFinite(left.appendSequence) && Number.isFinite(right.appendSequence)) {
                          return left.appendSequence - right.appendSequence;
                      }
                      return 0;
                  })
                  .map((chunk) => chunk.buffer)
            : [];
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
            });
        } catch (error) {
            lastWasapiExclusiveOutputError = String(error?.message ?? error);
            lastFailedWasapiExclusiveOutputSignature = signature;
            lastFailedWasapiExclusiveOutputAt = Date.now();
            lastWasapiExclusiveOutputSkipReason = 'native stream session unavailable';
            logger.error('Failed to create native-module WASAPI stream session; keeping regular YASP output:', error);
            emitWasapiExclusiveOutputStateChanged();
            return;
        }
        if (preloadedEntry) {
            consumeYaspPreloadedStream(incomingStreamIdentity);
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
