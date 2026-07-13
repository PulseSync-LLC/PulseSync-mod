'use strict';

const { spawn } = require('child_process');
const { createHash } = require('crypto');

const START_DELAY_MS = 250;
const START_PREBUFFER_MIN_MS = 750;
const START_PREBUFFER_MAX_MS = 2000;
const START_PREBUFFER_PERIODS = 8;
const PLAYER_HOLD_TIMEOUT_MS = 3000;
const FIRST_PCM_TIMEOUT_MS = 3000;
const AUDIO_PARKING_SETTLE_MS = 150;
const PLAYER_CLOCK_STALL_MS = 1500;
const PLAYER_CLOCK_PROGRESS_EPSILON_SECONDS = 0.05;
const PROGRESS_DRIFT_THRESHOLD_SECONDS = 2;
const RENDERER_CADENCE_GRACE_MS = 3000;
const RENDERER_CADENCE_MIN_RATIO = 0.8;
const RENDERER_CADENCE_MAX_RATIO = 1.2;
const RENDERER_HEALTH_INTERVAL_MS = 100;
const RENDERER_STATE_BROADCAST_INTERVAL_MS = 1000;
const RENDERER_CLOCK_START_TIMEOUT_MS = 2000;
const TRANSIENT_PLAYER_STATUSES = new Set(['buffering', 'loading', 'loadingMediaSource']);

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const noop = () => {};

const normalizeFiniteNumber = (value, fallback = null) => {
    const number = Number(value);
    return Number.isFinite(number) ? number : fallback;
};

const clampUnitInterval = (value) => Math.min(Math.max(value, 0), 1);

const exponentVolumeToLinearGain = (value) => {
    const exponentVolume = normalizeFiniteNumber(value);
    if (!Number.isFinite(exponentVolume)) {
        return null;
    }

    const linearGain = Math.pow(0.01, 1 - clampUnitInterval(exponentVolume));
    return linearGain > 0.01 ? linearGain : 0;
};

const getEncodedChunkFingerprint = (chunk) => {
    if (!Buffer.isBuffer(chunk) || !chunk.byteLength) {
        return null;
    }

    return `${chunk.byteLength}:${createHash('sha256').update(chunk).digest('hex')}`;
};

const getWasapiPlayerStopReason = (playerState) => {
    if (!playerState || TRANSIENT_PLAYER_STATUSES.has(playerState.status)) {
        return null;
    }

    return (playerState.status && !playerState.isPlaying) || (playerState.hasIsPlaying && !playerState.isPlaying)
        ? `player ${playerState.status ?? 'not playing'}`
        : null;
};

const getEstimatedPlayerPosition = (playerState, now = Date.now()) => {
    if (!playerState || !Number.isFinite(playerState.position)) {
        return null;
    }

    if (!playerState.isPlaying) {
        return playerState.position;
    }

    const updatedAt = Number(playerState.updatedAt);
    if (!Number.isFinite(updatedAt)) {
        return playerState.position;
    }

    return playerState.position + Math.max(now - updatedAt, 0) / 1000;
};

class YaspWasapiExclusiveStreamSession {
    constructor(options = {}) {
        this.signature = options.signature;
        this.format = options.format ?? null;
        this.rendererOptions = { ...(options.rendererOptions ?? {}) };
        this.createRenderer = typeof options.createRenderer === 'function' ? options.createRenderer : null;
        this.getClosestSupportedFormat = typeof options.getClosestSupportedFormat === 'function' ? options.getClosestSupportedFormat : null;
        this.getFfmpegPath = typeof options.getFfmpegPath === 'function' ? options.getFfmpegPath : null;
        this.createTrackStore = typeof options.createTrackStore === 'function' ? options.createTrackStore : null;
        this.onStateChange = typeof options.onStateChange === 'function' ? options.onStateChange : noop;
        this.onError = typeof options.onError === 'function' ? options.onError : noop;
        this.onLog = typeof options.onLog === 'function' ? options.onLog : noop;

        this.state = 'starting';
        this.createdAt = Date.now();
        this.startedAt = null;
        this.closedAt = null;
        this.closeReason = null;
        this.error = null;
        this.decoderExit = null;
        this.decoderStderr = '';
        this.decoderArgs = null;
        this.pendingBytes = 0;
        this.decoderEncodedChunkIndex = 0;
        this.decoderEncodedBytes = 0;
        this.decoderWriteBlocked = false;
        this.initialChunkBytes = 0;
        this.pcmCacheBytes = 0;
        const pcmBasePosition = Number.isFinite(options.pcmBasePosition) ? options.pcmBasePosition : options.startPosition;
        this.pcmBasePosition = Number.isFinite(pcmBasePosition) ? Math.max(pcmBasePosition, 0) : 0;
        this.playbackByteOffset = 0;
        this.outputStartByteOffset = null;
        this.totalEncodedBytes = 0;
        this.totalPcmBytes = 0;
        this.pcmRemainder = Buffer.alloc(0);
        this.decoder = null;
        this.renderer = null;
        this.rendererCreatedAt = null;
        this.rendererStartedAt = null;
        this.rendererStarted = false;
        this.trackStore = this.createTrackStore?.({
            maxEncodedBytes: options.encodedBufferMaxBytes,
            maxPcmBytes: options.pcmBufferMaxBytes,
            pageSize: options.trackStorePageSize,
        });
        if (!this.trackStore) {
            throw new Error('Native YaspTrackStore is required for WASAPI stream sessions');
        }
        this.firstPcmTimer = null;
        this.startupTimer = null;
        this.rendererServiceTimer = null;
        this.rendererHealthTimer = null;
        this.waitingForFirstRenderedFrame = false;
        this.lastRendererHealthAt = null;
        this.lastRendererStateBroadcastAt = 0;
        this.lastAudioClockElapsedFrames = null;
        this.lastAudioClockAdvancedAt = null;
        this.syncStartPosition = null;
        this.syncStartedAt = null;
        this.lastSyncDriftSeconds = null;
        this.lastSyncDriftWarningAt = 0;
        this.playerState = null;
        this.lastPlayerProgressPosition = null;
        this.lastPlayerProgressAdvancedAt = null;
        this.playerClockStalled = false;
        this.audioParkingRequired = options.requireAudioParking === true;
        this.audioParkingReady = !this.audioParkingRequired;
        this.audioParkingReadyAt = this.audioParkingReady ? Date.now() : null;
        this.audioParkingError = null;
        this.audioParkingContextCount = null;
        this.exclusiveEndpointRequested = false;
        this.waitingForPlayerHold = false;
        this.playerHoldActive = false;
        this.playerHoldRequestedAt = null;
        this.playerHoldReleasedAt = null;
        this.playerHoldTimedOut = false;
        this.playerHoldReleaseReason = null;
        this.lastRendererServiceState = null;
        this.skippedInitOnlyChunks = 0;
        this.skippedInitOnlyBytes = 0;
        this.strippedInitSegmentChunks = 0;
        this.strippedInitSegmentBytes = 0;
        this.encodedSegmentCount = 0;
        this.encodedChunkFingerprints = new Set();
        this.duplicateEncodedChunks = 0;
        this.duplicateEncodedBytes = 0;
        this.encodedTimelineGapWarnings = 0;
        this.lastEncodedSegmentNumber = null;
        this.lastEncodedTimelineStart = null;
        this.lastEncodedTimelineEnd = null;
        this.lastEncodedTimelineGap = null;
        this.maxEncodedTimelineGap = 0;
        this.pcmBoundaryChecks = 0;
        this.pcmBoundaryJumpWarnings = 0;
        this.lastPcmBoundaryJump = null;
        this.maxPcmBoundaryJump = 0;
        this.lastPcmBoundaryWarning = null;
        this.lastPcmFrameSamples = null;

        for (const chunk of options.initialChunks ?? []) {
            if (!Buffer.isBuffer(chunk)) {
                continue;
            }

            const queuedChunk = chunk;
            const chunkFingerprint = getEncodedChunkFingerprint(queuedChunk);
            if (chunkFingerprint) {
                this.encodedChunkFingerprints.add(chunkFingerprint);
            }
            this.appendEncodedToTrackStore(queuedChunk, { initialChunk: true });
            this.initialChunkBytes += queuedChunk.byteLength;
            this.totalEncodedBytes += queuedChunk.byteLength;
        }

        if (options.playerState) {
            this.updatePlayerState(options.playerState);
        }
    }

    emitStateChange() {
        this.onStateChange(this.getState());
    }

    log(level, message, payload) {
        this.onLog(level, message, payload);
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
            workerId: format.workerId ?? this.format?.workerId ?? null,
            feederId: format.feederId ?? this.format?.feederId ?? null,
            streamGeneration: format.streamGeneration ?? this.format?.streamGeneration ?? null,
        };
    }

    updatePlayerState(playerState = {}) {
        const previousPlayerState = this.playerState;
        const exponentVolume = normalizeFiniteNumber(playerState.exponentVolume ?? playerState.volume, previousPlayerState?.exponentVolume ?? null);
        const explicitVolumeGain = normalizeFiniteNumber(playerState.volumeGain);
        const nextPlayerState = {
            status: typeof playerState.status === 'string' ? playerState.status : null,
            hasIsPlaying: typeof playerState.isPlaying === 'boolean',
            isPlaying: Boolean(playerState.isPlaying),
            position: normalizeFiniteNumber(playerState.position, null),
            trackId: playerState.trackId ? String(playerState.trackId) : null,
            exponentVolume: Number.isFinite(exponentVolume) ? clampUnitInterval(exponentVolume) : null,
            volumeGain: Number.isFinite(explicitVolumeGain)
                ? clampUnitInterval(explicitVolumeGain)
                : (exponentVolumeToLinearGain(exponentVolume) ?? previousPlayerState?.volumeGain ?? 1),
            updatedAt: normalizeFiniteNumber(playerState.updatedAt, Date.now()),
        };
        this.playerState = nextPlayerState;

        if (this.renderer && typeof this.renderer.setVolumeGain === 'function') {
            try {
                this.renderer.setVolumeGain(nextPlayerState.volumeGain);
            } catch (error) {
                this.log('warn', 'Failed to synchronize YASP WASAPI volume gain', {
                    signature: this.signature,
                    error: String(error?.message ?? error),
                });
            }
        }

        if (nextPlayerState.isPlaying && Number.isFinite(nextPlayerState.position)) {
            const progressDelta = Number.isFinite(previousPlayerState?.position) ? nextPlayerState.position - previousPlayerState.position : null;
            if (!previousPlayerState?.isPlaying || !Number.isFinite(progressDelta) || Math.abs(progressDelta) > PLAYER_CLOCK_PROGRESS_EPSILON_SECONDS) {
                this.lastPlayerProgressAdvancedAt = nextPlayerState.updatedAt;
                this.playerClockStalled = false;
            } else {
                const progressReferenceAt = this.lastPlayerProgressAdvancedAt ?? previousPlayerState?.updatedAt ?? nextPlayerState.updatedAt;
                this.playerClockStalled = nextPlayerState.updatedAt - progressReferenceAt >= PLAYER_CLOCK_STALL_MS;
            }
            this.lastPlayerProgressPosition = nextPlayerState.position;
        } else if (!nextPlayerState.isPlaying && !TRANSIENT_PLAYER_STATUSES.has(nextPlayerState.status)) {
            this.playerClockStalled = false;
            this.lastPlayerProgressAdvancedAt = nextPlayerState.updatedAt;
        }

        if (this.playerHoldActive && this.playerState.isPlaying) {
            this.releasePlayerHold('player resumed');
        }

        if (this.playerState.isPlaying || this.isPlayerHoldPausedState(this.playerState)) {
            this.scheduleRendererService(0);
        }
    }

    setAudioParkingState(state = {}) {
        if (this.state === 'closed') {
            return;
        }

        this.audioParkingContextCount = normalizeFiniteNumber(state.contextCount, this.audioParkingContextCount);
        if (state.error) {
            this.audioParkingError = String(state.error);
            this.fail(new Error(`Failed to park WebAudio before WASAPI exclusive start: ${this.audioParkingError}`));
            return;
        }

        this.audioParkingReady = state.ready === true;
        this.audioParkingReadyAt = this.audioParkingReady ? normalizeFiniteNumber(state.updatedAt, Date.now()) : null;
        this.emitStateChange();
        if (this.audioParkingReady) {
            this.scheduleRendererService(AUDIO_PARKING_SETTLE_MS);
        }
    }

    getBlockAlign() {
        const containerBitsPerSample = Number(this.rendererOptions.containerBitsPerSample ?? this.rendererOptions.bitsPerSample);
        return Math.max(Number(this.rendererOptions.channels) * (containerBitsPerSample / 8), 1);
    }

    getBytesPerSecond() {
        return Math.max(Number(this.rendererOptions.sampleRate) * this.getBlockAlign(), 1);
    }

    alignByteOffset(byteOffset) {
        const blockAlign = this.getBlockAlign();
        return Math.max(Math.floor(Number(byteOffset) || 0) - (Math.floor(Number(byteOffset) || 0) % blockAlign), 0);
    }

    getByteLengthForMs(ms) {
        return this.alignByteOffset((this.getBytesPerSecond() * ms) / 1000);
    }

    getStartPrebufferMs(rendererState = null) {
        const configuredBufferMs = normalizeFiniteNumber(
            rendererState?.actualBufferMs ?? this.rendererOptions.bufferMs ?? this.rendererOptions.timerPeriodMs * this.rendererOptions.timerBufferPeriods,
            START_PREBUFFER_MIN_MS,
        );
        return Math.min(Math.max(configuredBufferMs * START_PREBUFFER_PERIODS, START_PREBUFFER_MIN_MS), START_PREBUFFER_MAX_MS);
    }

    getByteOffsetForPosition(positionSeconds) {
        const relativeSeconds = Math.max(Number(positionSeconds) - this.pcmBasePosition, 0);
        return this.alignByteOffset(relativeSeconds * this.getBytesPerSecond());
    }

    getPositionForByteOffset(byteOffset) {
        return this.pcmBasePosition + this.alignByteOffset(byteOffset) / this.getBytesPerSecond();
    }

    getEstimatedOutputPosition(now = Date.now(), rendererState = null) {
        if (!Number.isFinite(this.syncStartPosition) || !Number.isFinite(this.syncStartedAt)) {
            return null;
        }

        if (this.state !== 'running') {
            return this.syncStartPosition;
        }

        const currentRendererState = rendererState ?? this.renderer?.getState?.() ?? null;
        const sampleRate = Number(currentRendererState?.sampleRate ?? this.rendererOptions.sampleRate);
        const audioClockElapsedFrames = Number(currentRendererState?.audioClockElapsedFrames);
        if (sampleRate > 0 && currentRendererState?.audioClockValid === true && Number.isFinite(audioClockElapsedFrames)) {
            return this.syncStartPosition + Math.max(audioClockElapsedFrames, 0) / sampleRate;
        }
        const playedFrames = Number(currentRendererState?.playedFrames);
        const renderedFrames = Number(currentRendererState?.renderedFrames);
        const paddingFrames = Number(currentRendererState?.paddingFrames);
        if (sampleRate > 0 && Number.isFinite(renderedFrames) && Number.isFinite(paddingFrames)) {
            return this.syncStartPosition + Math.max(renderedFrames - paddingFrames, 0) / sampleRate;
        }
        if (sampleRate > 0 && Number.isFinite(playedFrames) && Number.isFinite(paddingFrames)) {
            return this.syncStartPosition + Math.max(playedFrames - paddingFrames, 0) / sampleRate;
        }

        return this.syncStartPosition + Math.max(now - this.syncStartedAt, 0) / 1000;
    }

    syncPlaybackOffsetToPlayer(now = Date.now()) {
        if (this.state === 'running') {
            return false;
        }

        const playerPosition = getEstimatedPlayerPosition(this.playerState, now);
        if (!Number.isFinite(playerPosition)) {
            return false;
        }

        const effectivePlayerPosition = Math.max(playerPosition, this.pcmBasePosition);
        const nextByteOffset = this.getByteOffsetForPosition(effectivePlayerPosition);
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
        this.emitStateChange();
    }

    releasePlayerHoldRequest(reason = 'renderer started', now = Date.now(), emitState = true) {
        if (!this.waitingForPlayerHold) {
            return;
        }

        this.waitingForPlayerHold = false;
        this.playerHoldReleasedAt = now;
        this.playerHoldReleaseReason = reason;
        if (emitState) {
            this.emitStateChange();
        }
    }

    releasePlayerHold(reason = 'released', now = Date.now(), emitState = true) {
        const changed = this.waitingForPlayerHold || this.playerHoldActive || this.playerHoldReleaseReason !== reason;
        this.waitingForPlayerHold = false;
        this.playerHoldActive = false;
        this.playerHoldReleasedAt = now;
        this.playerHoldReleaseReason = reason;
        if (changed && emitState) {
            this.emitStateChange();
        }
    }

    isPlayerHoldPausedState(playerState = this.playerState, now = Date.now()) {
        if (!this.playerHoldActive || !playerState?.hasIsPlaying || playerState.isPlaying) {
            return false;
        }

        if (!this.waitingForPlayerHold && Number.isFinite(this.playerHoldReleasedAt) && now - this.playerHoldReleasedAt > PLAYER_HOLD_TIMEOUT_MS) {
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

        if (!this.playerState?.isPlaying) {
            if (this.isPlayerHoldPausedState(this.playerState, now)) {
                this.syncPlaybackOffsetToPlayer(now);
            }
            return false;
        }

        this.requestPlayerHold(now);
        if (now - this.playerHoldRequestedAt > PLAYER_HOLD_TIMEOUT_MS) {
            this.playerHoldTimedOut = true;
            this.releasePlayerHold('hold timeout', now);
            return false;
        }

        return true;
    }

    getPlayerSyncStopReason(playerState, now = Date.now()) {
        if (playerState) {
            this.updatePlayerState(playerState);
        }

        if (!this.playerState || this.isPlayerHoldPausedState(this.playerState, now)) {
            return null;
        }

        const playerStopReason = getWasapiPlayerStopReason(this.playerState);
        if (playerStopReason) {
            return playerStopReason;
        }

        if (TRANSIENT_PLAYER_STATUSES.has(this.playerState.status) || this.state !== 'running') {
            return null;
        }

        if (this.playerClockStalled) {
            return null;
        }

        const outputPosition = this.getEstimatedOutputPosition(now);
        const playerPosition = getEstimatedPlayerPosition(this.playerState, now);
        if (!Number.isFinite(outputPosition) || !Number.isFinite(playerPosition)) {
            return null;
        }

        const driftSeconds = outputPosition - playerPosition;
        this.lastSyncDriftSeconds = driftSeconds;
        if (Math.abs(driftSeconds) > PROGRESS_DRIFT_THRESHOLD_SECONDS && now - this.lastSyncDriftWarningAt > 5000) {
            this.lastSyncDriftWarningAt = now;
            this.log('warn', 'Muted YASP player drifted from the WASAPI hardware clock', {
                signature: this.signature,
                driftSeconds,
                outputPosition,
                playerPosition,
            });
        }

        return null;
    }

    seekToPosition(positionSeconds, now = Date.now(), reason = 'seek') {
        const nextByteOffset = this.getByteOffsetForPosition(positionSeconds);
        if (Number(positionSeconds) + 0.5 < this.pcmBasePosition || nextByteOffset > this.pcmCacheBytes + this.getBytesPerSecond()) {
            return false;
        }

        const currentOutputPosition = this.getEstimatedOutputPosition(now);
        if (Number.isFinite(currentOutputPosition) && Math.abs(Number(positionSeconds) - currentOutputPosition) < 0.1) {
            return true;
        }

        if (this.renderer && typeof this.renderer.seekPcmSource === 'function') {
            let seeked = false;
            try {
                seeked = this.renderer.seekPcmSource(nextByteOffset);
            } catch (error) {
                this.fail(error);
                return false;
            }
            if (!seeked) {
                return false;
            }

            this.playbackByteOffset = nextByteOffset;
            this.outputStartByteOffset = nextByteOffset;
            this.syncStartPosition = this.getPositionForByteOffset(nextByteOffset);
            this.syncStartedAt = now;
            this.lastSyncDriftSeconds = 0;
            this.lastRendererServiceState = this.renderer.getState?.() ?? null;
            this.log('info', 'YASP WASAPI native PCM cursor moved', {
                signature: this.signature,
                reason,
                positionSeconds,
                byteOffset: nextByteOffset,
            });
            this.emitStateChange();
            return true;
        }

        this.playbackByteOffset = nextByteOffset;
        this.outputStartByteOffset = null;
        this.syncStartPosition = this.getPositionForByteOffset(this.playbackByteOffset);
        this.syncStartedAt = null;
        this.lastSyncDriftSeconds = null;
        if (this.renderer) {
            this.closeRenderer(`pcm cache ${reason}`);
        }
        this.scheduleRendererService(0);
        return true;
    }

    closeRenderer(reason = 'renderer reset') {
        if (!this.renderer) {
            return;
        }

        clearInterval(this.rendererHealthTimer);
        this.rendererHealthTimer = null;
        try {
            this.renderer.close();
        } catch {}
        this.log('info', 'YASP WASAPI renderer reset', { signature: this.signature, reason });
        this.renderer = null;
        this.rendererCreatedAt = null;
        this.rendererStartedAt = null;
        this.rendererStarted = false;
        this.waitingForFirstRenderedFrame = false;
        this.outputStartByteOffset = null;
        if (this.state !== 'closed') {
            this.state = 'starting';
            this.emitStateChange();
        }
    }

    switchOutputDevice(deviceId, reason = 'output device changed') {
        if (this.state === 'closed') {
            return false;
        }

        const normalizedDeviceId = typeof deviceId === 'string' && deviceId.trim() ? deviceId.trim() : null;
        const requestedOptions = { ...this.rendererOptions };
        if (normalizedDeviceId) {
            requestedOptions.deviceId = normalizedDeviceId;
        } else {
            delete requestedOptions.deviceId;
        }

        const closest = this.getClosestSupportedFormat?.(requestedOptions);
        if (!closest || closest.exact === false) {
            const requested = closest?.requestedOptions ?? requestedOptions;
            const supported = closest?.format;
            this.fail(
                new Error(
                    `Exact WASAPI format is not supported by the new output device: requested ${requested.sampleRate}/${requested.channels}/${
                        requested.bitsPerSample
                    }/${requested.containerBitsPerSample ?? requested.bitsPerSample}/${requested.float ? 'float' : 'pcm'}, closest ${
                        supported
                            ? `${supported.sampleRate}/${supported.channels}/${supported.bitsPerSample}/${
                                  supported.containerBitsPerSample ?? supported.bitsPerSample
                              }/${supported.float ? 'float' : 'pcm'}`
                            : 'none'
                    }`,
                ),
            );
            return false;
        }

        const now = Date.now();
        const outputPosition = this.getEstimatedOutputPosition(now) ?? getEstimatedPlayerPosition(this.playerState, now);
        const nextByteOffset = Number.isFinite(outputPosition) ? this.getByteOffsetForPosition(outputPosition) : this.playbackByteOffset;
        if (nextByteOffset > this.pcmCacheBytes + this.getBytesPerSecond()) {
            return false;
        }

        this.rendererOptions = {
            ...requestedOptions,
            ...(closest.rendererOptions ?? {}),
        };
        this.playbackByteOffset = nextByteOffset;
        this.outputStartByteOffset = null;
        this.syncStartPosition = this.getPositionForByteOffset(nextByteOffset);
        this.syncStartedAt = null;
        this.lastSyncDriftSeconds = null;
        this.lastRendererServiceState = null;
        if (this.renderer) {
            this.closeRenderer(reason);
        } else {
            this.emitStateChange();
        }
        this.log('info', 'YASP WASAPI output device changed', {
            signature: this.signature,
            reason,
            deviceId: this.rendererOptions.deviceId ?? null,
            positionSeconds: this.syncStartPosition,
            byteOffset: nextByteOffset,
        });
        this.scheduleRendererService(0);
        return true;
    }

    getStartupBlockReason() {
        const availablePcmBytes = Math.max(this.pcmCacheBytes - this.playbackByteOffset, 0);
        const availablePcmMs = (availablePcmBytes * 1000) / this.getBytesPerSecond();
        const startPrebufferMs = this.getStartPrebufferMs(this.lastRendererServiceState);
        const trackStoreState = this.trackStore?.getState?.() ?? null;
        if (!this.decoder) {
            return 'decoder process is not running';
        }
        if (availablePcmMs < startPrebufferMs) {
            const totalPcmMs = (this.pcmCacheBytes * 1000) / this.getBytesPerSecond();
            const playbackOffsetMs = (this.playbackByteOffset * 1000) / this.getBytesPerSecond();
            const decoderStderr = this.decoderStderr.trim().slice(-500);
            return [
                'available PCM ' + availablePcmMs.toFixed(0) + 'ms/' + startPrebufferMs.toFixed(0) + 'ms',
                'totalPcm=' + totalPcmMs.toFixed(0) + 'ms',
                'playbackOffset=' + playbackOffsetMs.toFixed(0) + 'ms',
                'decoderChunks=' + this.decoderEncodedChunkIndex + '/' + (trackStoreState?.encodedChunkCount ?? 'n/a'),
                'decoderBlocked=' + this.decoderWriteBlocked,
                decoderStderr ? 'decoderStderr=' + decoderStderr : null,
            ]
                .filter(Boolean)
                .join(', ');
        }
        if (this.waitingForPlayerHold) {
            return 'waiting for renderer player-hold acknowledgement';
        }
        if (this.audioParkingRequired && !this.audioParkingReady) {
            return `waiting for WebAudio parking${this.audioParkingError ? `: ${this.audioParkingError}` : ''}`;
        }
        if (!this.renderer) {
            return 'native WASAPI renderer was not created';
        }
        return 'native WASAPI renderer did not start';
    }

    async start() {
        try {
            await wait(START_DELAY_MS);
            if (this.state === 'closed') {
                return;
            }

            const closest = this.getClosestSupportedFormat?.(this.rendererOptions);
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

            const ffmpegPath = await this.getFfmpegPath?.();
            if (!ffmpegPath) {
                throw new Error('ffmpeg path is missing');
            }
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
            this.decoder.stdin.on('drain', () => {
                this.decoderWriteBlocked = false;
                try {
                    this.flushPendingChunks();
                } catch (error) {
                    this.fail(error);
                }
            });
            this.decoder.on('error', (error) => this.fail(error));
            this.decoder.on('close', (code, signal) => {
                this.decoderExit = { code, signal };
                if (this.state !== 'closed') {
                    const reason = `ffmpeg exited: code=${code}, signal=${signal}`;
                    if (code !== 0 || signal) {
                        this.error = this.decoderStderr ? `${reason}: ${this.decoderStderr}` : reason;
                        this.onError(this.error, this);
                    }
                    this.close(reason);
                }
            });

            this.startupTimer = setTimeout(() => {
                if (this.state === 'starting') {
                    this.fail(new Error(`YASP WASAPI renderer did not become ready before startup timeout: ${this.getStartupBlockReason()}`));
                }
            }, PLAYER_HOLD_TIMEOUT_MS);
            this.startupTimer?.unref?.();
            this.firstPcmTimer = setTimeout(() => {
                if (this.state === 'starting' && !this.renderer) {
                    this.fail(new Error('YASP WASAPI decoder did not produce PCM before timeout'));
                }
            }, FIRST_PCM_TIMEOUT_MS);
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
            const canContinue = stdin.write(chunk, (error) => {
                if (error && this.state !== 'closed') {
                    this.fail(error);
                }
            });
            this.decoderWriteBlocked = !canContinue;
            return true;
        } catch (error) {
            this.fail(error);
            return false;
        }
    }

    trackEncodedTimeline(meta = {}) {
        const segmentNumber = normalizeFiniteNumber(meta.segmentNumber, null);
        const timelineStart = normalizeFiniteNumber(meta.timelineStartSeconds, null);
        const timelineEnd = normalizeFiniteNumber(meta.timelineEndSeconds, null);
        const isNewSegment = Number.isFinite(segmentNumber) ? segmentNumber !== this.lastEncodedSegmentNumber : Number.isFinite(timelineStart) && timelineStart !== this.lastEncodedTimelineStart;
        if (!isNewSegment) {
            return;
        }

        if (Number.isFinite(timelineStart) && Number.isFinite(this.lastEncodedTimelineEnd)) {
            const gap = timelineStart - this.lastEncodedTimelineEnd;
            this.lastEncodedTimelineGap = gap;
            this.maxEncodedTimelineGap = Math.max(this.maxEncodedTimelineGap, Math.abs(gap));
            if (Math.abs(gap) > 0.02) {
                this.encodedTimelineGapWarnings += 1;
            }
        }

        this.encodedSegmentCount += 1;
        this.lastEncodedSegmentNumber = segmentNumber;
        this.lastEncodedTimelineStart = timelineStart;
        this.lastEncodedTimelineEnd = timelineEnd;
    }

    getBytesPerSample() {
        return Math.max(Number(this.rendererOptions.containerBitsPerSample ?? this.rendererOptions.bitsPerSample) / 8, 1);
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
            const value = buffer.readInt32LE(offset);
            return Number(this.rendererOptions.bitsPerSample) === 24 ? value >> 8 : value;
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
        return Math.max(Math.floor(2 ** Math.min(bitsPerSample - 1, 30) * 0.75), 1);
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

    writeEncodedChunk(chunk, meta = null) {
        if (this.state === 'closed' || !Buffer.isBuffer(chunk)) {
            return;
        }

        const chunkFingerprint = getEncodedChunkFingerprint(chunk);
        if (chunkFingerprint && this.encodedChunkFingerprints.has(chunkFingerprint)) {
            this.duplicateEncodedChunks += 1;
            this.duplicateEncodedBytes += chunk.byteLength;
            return;
        }
        if (chunkFingerprint) {
            this.encodedChunkFingerprints.add(chunkFingerprint);
        }

        this.totalEncodedBytes += chunk.byteLength;
        this.trackEncodedTimeline(meta ?? {});
        try {
            this.appendEncodedToTrackStore(chunk, meta ?? {});
            if (this.decoder?.stdin?.writable && this.state !== 'closed') {
                this.flushPendingChunks();
            }
        } catch (error) {
            this.fail(error);
        }
    }

    pushEncodedChunk(chunk, meta = null) {
        this.writeEncodedChunk(chunk, meta);
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

        if (this.decoderWriteBlocked) {
            return;
        }

        const state = this.trackStore.getState?.() ?? null;
        const chunkCount = Number(state?.encodedChunkCount) || 0;
        while (this.decoderEncodedChunkIndex < chunkCount && !this.decoderWriteBlocked) {
            const chunk = this.trackStore.readEncodedChunk?.(this.decoderEncodedChunkIndex);
            if (!Buffer.isBuffer(chunk) || !chunk.byteLength || !this.writeDecoderStdin(chunk)) {
                break;
            }
            this.decoderEncodedChunkIndex += 1;
            this.decoderEncodedBytes += chunk.byteLength;
        }
        this.pendingBytes = Math.max((Number(state?.encodedBytes) || 0) - this.decoderEncodedBytes, 0);
    }

    appendEncodedToTrackStore(chunk, meta = null) {
        const result = this.trackStore?.appendEncoded?.(chunk, meta ?? {});
        if (!result?.accepted) {
            throw new Error(`Native encoded track store rejected a chunk: ${result?.reason ?? 'unknown reason'}`);
        }
        this.pendingBytes = Math.max((Number(result.encodedBytes) || 0) - this.decoderEncodedBytes, 0);
        return result;
    }

    appendPcmCache(chunk) {
        if (!Buffer.isBuffer(chunk) || !chunk.byteLength) {
            return;
        }

        const result = this.trackStore.appendPcm?.(chunk);
        if (!result?.accepted) {
            throw new Error(`Native PCM track store rejected decoded audio: ${result?.reason ?? 'unknown reason'}`);
        }
        this.pcmCacheBytes = Number(result.pcmBytes) || 0;
        this.totalPcmBytes += chunk.byteLength;
    }

    canPumpPcm() {
        if (this.state === 'closed') {
            return false;
        }

        const now = Date.now();
        const playerHoldPaused = this.isPlayerHoldPausedState(this.playerState, now);
        const playerStopReason = getWasapiPlayerStopReason(this.playerState);
        if (playerStopReason && !playerHoldPaused) {
            return false;
        }

        return !this.playerState || this.playerState.isPlaying || playerHoldPaused;
    }

    ensureRenderer() {
        if (this.renderer) {
            return true;
        }

        this.syncPlaybackOffsetToPlayer();

        const availableBytes = this.pcmCacheBytes - this.playbackByteOffset;
        const startPrebufferBytes = this.getByteLengthForMs(this.getStartPrebufferMs(this.lastRendererServiceState));
        if (availableBytes < startPrebufferBytes || !this.canPumpPcm()) {
            return false;
        }

        const endpointRequestChanged = !this.exclusiveEndpointRequested;
        this.exclusiveEndpointRequested = true;
        const waitingForPlayerHold = this.shouldWaitForPlayerHold();
        if (endpointRequestChanged && !waitingForPlayerHold) {
            this.emitStateChange();
        }
        if (waitingForPlayerHold) {
            return false;
        }

        if (this.audioParkingRequired) {
            if (this.audioParkingError) {
                throw new Error(`WebAudio parking failed: ${this.audioParkingError}`);
            }
            if (!this.audioParkingReady) {
                return false;
            }
            const settleRemainingMs = AUDIO_PARKING_SETTLE_MS - (Date.now() - this.audioParkingReadyAt);
            if (settleRemainingMs > 0) {
                this.scheduleRendererService(settleRemainingMs + 1);
                return false;
            }
        }

        if (!this.createRenderer) {
            throw new Error('WASAPI renderer factory is missing');
        }

        this.rendererOptions = {
            ...this.rendererOptions,
            deferStart: true,
        };
        this.renderer = this.createRenderer(this.rendererOptions);
        this.renderer.setVolumeGain?.(this.playerState?.volumeGain ?? 1);
        if (!this.renderer.attachPcmSource?.(this.trackStore, this.playbackByteOffset)) {
            this.renderer.close?.();
            this.renderer = null;
            throw new Error('Native WASAPI renderer could not attach the decoded PCM track store');
        }
        this.rendererCreatedAt = Date.now();
        const rendererState = this.renderer.getState?.() ?? null;
        this.lastRendererServiceState = rendererState;
        this.emitStateChange();
        return true;
    }

    startRenderer(now = Date.now()) {
        if (!this.renderer || this.rendererStarted) {
            return Boolean(this.renderer);
        }

        this.renderer.start?.();
        const rendererState = this.renderer.getState?.() ?? null;
        const nativeSourceStartOffset = Number(rendererState?.pcmSourceStartByteOffset);
        this.outputStartByteOffset = Number.isFinite(nativeSourceStartOffset) ? this.alignByteOffset(nativeSourceStartOffset) : this.playbackByteOffset;
        this.rendererStarted = true;
        this.rendererStartedAt = now;
        this.waitingForFirstRenderedFrame = true;
        this.lastAudioClockAdvancedAt = now;
        this.lastAudioClockElapsedFrames = 0;
        clearTimeout(this.startupTimer);
        this.startupTimer = null;
        this.syncStartedAt = now;
        this.syncStartPosition = this.getPositionForByteOffset(this.outputStartByteOffset);
        this.log('info', 'YASP WASAPI exclusive renderer started after PCM prebuffer', {
            signature: this.signature,
            pcmBasePosition: this.pcmBasePosition,
            playbackByteOffset: this.playbackByteOffset,
            rendererState,
        });
        this.startRendererHealthMonitor();
        this.emitStateChange();
        return true;
    }

    startRendererHealthMonitor() {
        if (this.rendererHealthTimer || this.state === 'closed') {
            return;
        }

        this.rendererHealthTimer = setInterval(() => this.serviceRendererHealth(), RENDERER_HEALTH_INTERVAL_MS);
        this.rendererHealthTimer?.unref?.();
    }

    serviceRendererHealth(now = Date.now()) {
        if (this.state === 'closed' || !this.rendererStarted || !this.renderer) {
            return;
        }

        try {
            const rendererState = this.renderer.getState?.() ?? null;
            this.lastRendererHealthAt = now;
            this.lastRendererServiceState = rendererState;

            const lastHRESULTCode = Number(rendererState?.lastHRESULTCode);
            if (Number.isFinite(lastHRESULTCode) && lastHRESULTCode < 0) {
                throw new Error(`WASAPI render loop failed: ${rendererState?.lastHRESULT ?? lastHRESULTCode}`);
            }
            if (Number(rendererState?.waitTimeouts) > 0) {
                throw new Error(`WASAPI render loop timed out: waitTimeouts=${rendererState.waitTimeouts}`);
            }
            if (Number(rendererState?.underruns) > 0) {
                throw new Error(
                    `WASAPI PCM underrun: underruns=${rendererState.underruns}, underrunFrames=${rendererState.underrunFrames ?? 'unknown'}`,
                );
            }

            this.assertRendererCadence(rendererState, now);

            const audioClockElapsedFrames = Number(rendererState?.audioClockElapsedFrames);
            const fallbackConsumedFrames = Number(rendererState?.renderedFrames) - Number(rendererState?.paddingFrames);
            const consumedFrames = rendererState?.audioClockValid === true && Number.isFinite(audioClockElapsedFrames)
                ? audioClockElapsedFrames
                : fallbackConsumedFrames;
            if (Number.isFinite(consumedFrames) && consumedFrames > Number(this.lastAudioClockElapsedFrames ?? -1)) {
                this.lastAudioClockElapsedFrames = consumedFrames;
                this.lastAudioClockAdvancedAt = now;
            }

            if (this.waitingForFirstRenderedFrame && consumedFrames > 0) {
                this.waitingForFirstRenderedFrame = false;
                this.state = 'running';
                this.startedAt ??= now;
                this.releasePlayerHoldRequest('renderer clock started', now, false);
                this.emitStateChange();
            } else if (this.waitingForFirstRenderedFrame && now - this.rendererStartedAt > RENDERER_CLOCK_START_TIMEOUT_MS) {
                throw new Error('WASAPI hardware clock did not advance after renderer start');
            } else if (!this.waitingForFirstRenderedFrame && now - this.lastAudioClockAdvancedAt > RENDERER_CLOCK_START_TIMEOUT_MS) {
                throw new Error('WASAPI hardware clock stalled');
            }

            if (now - this.lastRendererStateBroadcastAt >= RENDERER_STATE_BROADCAST_INTERVAL_MS) {
                this.lastRendererStateBroadcastAt = now;
                this.emitStateChange();
            }
        } catch (error) {
            this.fail(error);
        }
    }

    scheduleRendererService(delayMs = 0) {
        if (this.state === 'closed' || this.rendererServiceTimer || this.rendererStarted) {
            return;
        }

        this.rendererServiceTimer = setTimeout(() => {
            this.rendererServiceTimer = null;
            this.serviceRenderer();
        }, delayMs);
        this.rendererServiceTimer?.unref?.();
    }

    serviceRenderer() {
        if (this.state === 'closed' || this.rendererStarted) {
            return;
        }

        try {
            if (!this.canPumpPcm()) {
                return;
            }

            if (!this.ensureRenderer()) {
                return;
            }

            this.lastRendererServiceState = this.renderer.getState?.() ?? null;
            this.startRenderer();
            this.lastRendererServiceState = this.renderer.getState?.() ?? this.lastRendererServiceState;
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
                const startPosition = getEstimatedPlayerPosition(this.playerState, Date.now());
                if (Number.isFinite(startPosition)) {
                    const effectiveStartPosition = Math.max(startPosition, this.pcmBasePosition);
                    this.playbackByteOffset = this.getByteOffsetForPosition(effectiveStartPosition);
                    this.syncStartPosition = effectiveStartPosition;
                    this.syncStartedAt = Date.now();
                }
            }

            const alignedChunk = buffer.subarray(0, alignedLength);
            this.trackPcmBoundary(alignedChunk);
            this.appendPcmCache(alignedChunk);
            this.pcmRemainder = alignedLength < buffer.byteLength ? Buffer.from(buffer.subarray(alignedLength)) : Buffer.alloc(0);
            this.scheduleRendererService(0);
        } catch (error) {
            this.fail(error);
        }
    }

    fail(error) {
        this.error = String(error?.message ?? error);
        this.onError(this.error, this);
        this.close(`error: ${this.error}`);
    }

    close(reason = 'closed') {
        if (this.state === 'closed') {
            return;
        }

        this.state = 'closed';
        this.exclusiveEndpointRequested = false;
        this.closeReason = reason;
        this.closedAt = Date.now();
        this.releasePlayerHold(`closed: ${reason}`, this.closedAt, false);
        clearTimeout(this.firstPcmTimer);
        this.firstPcmTimer = null;
        clearTimeout(this.startupTimer);
        this.startupTimer = null;
        clearTimeout(this.rendererServiceTimer);
        this.rendererServiceTimer = null;
        clearInterval(this.rendererHealthTimer);
        this.rendererHealthTimer = null;

        try {
            this.decoder?.stdin?.destroy();
        } catch {}
        try {
            this.decoder?.kill('SIGTERM');
        } catch {}
        try {
            this.renderer?.close();
        } catch {}

        this.pendingBytes = 0;
        this.pcmCacheBytes = 0;
        this.pcmRemainder = Buffer.alloc(0);
        this.encodedChunkFingerprints.clear();
        try {
            this.trackStore?.clear?.();
        } catch {}
        this.emitStateChange();
    }

    getRendererCadence(rendererState, now = Date.now()) {
        if (!this.rendererStarted || !this.rendererStartedAt || !rendererState) {
            return null;
        }

        const elapsedMs = Math.max(now - this.rendererStartedAt, 0);
        const sampleRate = Number(rendererState.sampleRate ?? this.rendererOptions.sampleRate);
        const bufferFrames = Number(rendererState.bufferFrames);
        const actualBufferMs = Number(rendererState.actualBufferMs);
        const nativeExpectedEventIntervalMs = Number(rendererState.expectedEventIntervalMs);
        const expectedEventIntervalMs =
            Number.isFinite(nativeExpectedEventIntervalMs) && nativeExpectedEventIntervalMs > 0
                ? nativeExpectedEventIntervalMs
                : Number.isFinite(actualBufferMs)
                  ? actualBufferMs
                  : Number.isFinite(bufferFrames) && sampleRate > 0
                    ? (bufferFrames * 1000) / sampleRate
                    : null;
        const eventWakeups = Number(rendererState.eventWakeups);
        const nativeAverageEventIntervalMs = Number(rendererState.averageEventIntervalMs);
        const observedEventIntervalMs = Number.isFinite(nativeAverageEventIntervalMs) && nativeAverageEventIntervalMs > 0
            ? nativeAverageEventIntervalMs
            : Number.isFinite(eventWakeups) && eventWakeups > 0 && elapsedMs > 0
              ? elapsedMs / eventWakeups
              : null;
        const playedFrames = Number(rendererState.playedFrames);
        const submittedAudioDurationMs = Number.isFinite(playedFrames) && sampleRate > 0 ? (playedFrames * 1000) / sampleRate : null;

        return {
            source: Number.isFinite(nativeAverageEventIntervalMs) && nativeAverageEventIntervalMs > 0 ? 'native-event-timing' : 'session-wall-clock',
            renderMode: rendererState.renderMode ?? this.rendererOptions.renderMode ?? 'event',
            elapsedMs,
            eventWakeups: Number.isFinite(eventWakeups) ? eventWakeups : null,
            expectedEventIntervalMs,
            observedEventIntervalMs,
            eventCadenceRatio: expectedEventIntervalMs > 0 && observedEventIntervalMs != null ? observedEventIntervalMs / expectedEventIntervalMs : null,
            submittedAudioDurationMs,
            submissionRealtimeRatio: elapsedMs > 0 && submittedAudioDurationMs != null ? submittedAudioDurationMs / elapsedMs : null,
        };
    }

    assertRendererCadence(rendererState, now = Date.now()) {
        const cadence = this.getRendererCadence(rendererState, now);
        if (!cadence || cadence.elapsedMs < RENDERER_CADENCE_GRACE_MS || cadence.eventWakeups < 8) {
            return;
        }

        const eventCadenceInvalid =
            cadence.renderMode !== 'timer' &&
            cadence.eventCadenceRatio != null &&
            (cadence.eventCadenceRatio < RENDERER_CADENCE_MIN_RATIO || cadence.eventCadenceRatio > RENDERER_CADENCE_MAX_RATIO);
        const submissionCadenceInvalid =
            cadence.submissionRealtimeRatio != null &&
            (cadence.submissionRealtimeRatio < RENDERER_CADENCE_MIN_RATIO || cadence.submissionRealtimeRatio > RENDERER_CADENCE_MAX_RATIO);
        if (eventCadenceInvalid || submissionCadenceInvalid) {
            throw new Error(
                `WASAPI render cadence is not realtime: mode=${cadence.renderMode}, wakeupRatio=${cadence.eventCadenceRatio?.toFixed(3) ?? 'n/a'}, submissionRatio=${
                    cadence.submissionRealtimeRatio?.toFixed(3) ?? 'n/a'
                }`,
            );
        }
    }

    getState() {
        const now = Date.now();
        const rendererState = this.renderer?.getState?.() ?? null;
        const trackStoreState = this.trackStore?.getState?.() ?? null;
        const pendingBytes = trackStoreState ? Math.max((Number(trackStoreState.encodedBytes) || 0) - this.decoderEncodedBytes, 0) : this.pendingBytes;
        const nativeSourceByteOffset = normalizeFiniteNumber(rendererState?.pcmSourceByteOffset);
        const nativeSourceAvailableBytes = normalizeFiniteNumber(rendererState?.pcmSourceAvailableBytes, 0);
        const nativeSourceReadFrames = normalizeFiniteNumber(rendererState?.pcmSourceReadFrames, 0);
        return {
            backend: 'native-module-stream-session',
            state: this.state,
            signature: this.signature,
            format: this.format,
            rendererOptions: this.rendererOptions,
            rendererState,
            rendererCadence: this.getRendererCadence(rendererState, now),
            rendererCreatedAt: this.rendererCreatedAt,
            rendererStartedAt: this.rendererStartedAt,
            rendererStarted: this.rendererStarted,
            waitingForFirstRenderedFrame: this.waitingForFirstRenderedFrame,
            createdAt: this.createdAt,
            startedAt: this.startedAt,
            closedAt: this.closedAt,
            closeReason: this.closeReason,
            error: this.error,
            decoderExit: this.decoderExit,
            decoderArgs: this.decoderArgs,
            pendingBytes,
            initialChunkBytes: this.initialChunkBytes,
            pcmCacheBytes: this.pcmCacheBytes,
            bufferOwnership: 'native-direct-pcm-source',
            trackStoreState,
            pcmBasePosition: this.pcmBasePosition,
            playbackByteOffset: this.playbackByteOffset,
            nativeSourceByteOffset,
            nativeReadAheadMs: (nativeSourceAvailableBytes * 1000) / this.getBytesPerSecond(),
            outputStartByteOffset: this.outputStartByteOffset,
            totalEncodedBytes: this.totalEncodedBytes,
            totalPcmBytes: this.totalPcmBytes,
            totalPcmWrittenBytes: nativeSourceReadFrames * this.getBlockAlign(),
            decoderStderr: this.decoderStderr,
            syncStartPosition: this.syncStartPosition,
            syncStartedAt: this.syncStartedAt,
            estimatedOutputPosition: this.getEstimatedOutputPosition(now, rendererState),
            lastSyncDriftSeconds: this.lastSyncDriftSeconds,
            waitingForPlayerHold: this.waitingForPlayerHold,
            playerHoldActive: this.playerHoldActive,
            playerHoldRequestedAt: this.playerHoldRequestedAt,
            playerHoldReleasedAt: this.playerHoldReleasedAt,
            playerHoldTimedOut: this.playerHoldTimedOut,
            playerHoldReleaseReason: this.playerHoldReleaseReason,
            playerHoldTimeoutMs: PLAYER_HOLD_TIMEOUT_MS,
            audioParkingRequired: this.audioParkingRequired,
            exclusiveEndpointRequested: this.exclusiveEndpointRequested,
            audioParkingReady: this.audioParkingReady,
            audioParkingReadyAt: this.audioParkingReadyAt,
            audioParkingError: this.audioParkingError,
            audioParkingContextCount: this.audioParkingContextCount,
            waitingForAudioParking: this.state === 'starting' && this.exclusiveEndpointRequested && this.audioParkingRequired && !this.audioParkingReady,
            audioParkingSettleMs: AUDIO_PARKING_SETTLE_MS,
            lastRendererServiceState: this.lastRendererServiceState,
            rendererFeedMode: 'native-pull',
            startPrebufferMs: this.getStartPrebufferMs(rendererState),
            skippedInitOnlyChunks: this.skippedInitOnlyChunks,
            skippedInitOnlyBytes: this.skippedInitOnlyBytes,
            strippedInitSegmentChunks: this.strippedInitSegmentChunks,
            strippedInitSegmentBytes: this.strippedInitSegmentBytes,
            encodedSegmentCount: this.encodedSegmentCount,
            duplicateEncodedChunks: this.duplicateEncodedChunks,
            duplicateEncodedBytes: this.duplicateEncodedBytes,
            encodedTimelineGapWarnings: this.encodedTimelineGapWarnings,
            lastEncodedSegmentNumber: this.lastEncodedSegmentNumber,
            lastEncodedTimelineStart: this.lastEncodedTimelineStart,
            lastEncodedTimelineEnd: this.lastEncodedTimelineEnd,
            lastEncodedTimelineGap: this.lastEncodedTimelineGap,
            maxEncodedTimelineGap: this.maxEncodedTimelineGap,
            pcmBoundaryChecks: this.pcmBoundaryChecks,
            pcmBoundaryJumpWarnings: this.pcmBoundaryJumpWarnings,
            lastPcmBoundaryJump: this.lastPcmBoundaryJump,
            maxPcmBoundaryJump: this.maxPcmBoundaryJump,
            lastPcmBoundaryWarning: this.lastPcmBoundaryWarning,
            playerState: this.playerState,
            playerClockStalled: this.playerClockStalled,
            lastPlayerProgressPosition: this.lastPlayerProgressPosition,
            lastPlayerProgressAdvancedAt: this.lastPlayerProgressAdvancedAt,
        };
    }
}

const createYaspStreamSession = (options = {}) => new YaspWasapiExclusiveStreamSession(options);

module.exports = {
    createYaspStreamSession,
    YaspWasapiExclusiveStreamSession,
};
