'use strict';

const { spawn } = require('child_process');

const START_DELAY_MS = 250;
const START_PREBUFFER_MS = 350;
const QUEUE_TARGET_MS = 750;
const QUEUE_MIN_MS = 250;
const PCM_PUMP_INTERVAL_MS = 20;
const PCM_PUMP_WAIT_MS = 10;
const PLAYER_HOLD_TIMEOUT_MS = 3000;
const FIRST_PCM_TIMEOUT_MS = 5000;
const PROGRESS_DRIFT_THRESHOLD_SECONDS = 2;
const TRANSIENT_PLAYER_STATUSES = new Set(['buffering', 'loading']);

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const noop = () => {};

const normalizeFiniteNumber = (value, fallback = null) => {
    const number = Number(value);
    return Number.isFinite(number) ? number : fallback;
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
        this.createEncodedTrackBuffer = typeof options.createEncodedTrackBuffer === 'function' ? options.createEncodedTrackBuffer : null;
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
        this.pendingChunks = [];
        this.pendingBytes = 0;
        this.initialChunkBytes = 0;
        this.pcmCacheChunks = [];
        this.pcmCacheBytes = 0;
        this.pcmBasePosition = Number.isFinite(options.startPosition) ? Math.max(options.startPosition, 0) : 0;
        this.playbackByteOffset = 0;
        this.totalEncodedBytes = 0;
        this.totalPcmBytes = 0;
        this.totalPcmWrittenBytes = 0;
        this.pcmRemainder = Buffer.alloc(0);
        this.decoder = null;
        this.renderer = null;
        this.encodedTrackBuffer = this.createEncodedTrackBuffer?.({ maxBytes: options.encodedBufferMaxBytes });
        this.firstPcmTimer = null;
        this.pumpTimer = null;
        this.syncStartPosition = null;
        this.syncStartedAt = null;
        this.lastSyncDriftSeconds = null;
        this.playerState = null;
        this.waitingForPlayerHold = false;
        this.playerHoldActive = false;
        this.playerHoldRequestedAt = null;
        this.playerHoldReleasedAt = null;
        this.playerHoldTimedOut = false;
        this.playerHoldReleaseReason = null;
        this.lastPumpState = null;
        this.skippedInitOnlyChunks = 0;
        this.skippedInitOnlyBytes = 0;
        this.strippedInitSegmentChunks = 0;
        this.strippedInitSegmentBytes = 0;

        for (const chunk of options.initialChunks ?? []) {
            if (!Buffer.isBuffer(chunk)) {
                continue;
            }

            const queuedChunk = Buffer.from(chunk);
            this.pendingChunks.push(queuedChunk);
            this.pendingBytes += queuedChunk.byteLength;
            this.initialChunkBytes += queuedChunk.byteLength;
            this.totalEncodedBytes += queuedChunk.byteLength;
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
        };
    }

    updatePlayerState(playerState = {}) {
        this.playerState = {
            status: typeof playerState.status === 'string' ? playerState.status : null,
            hasIsPlaying: typeof playerState.isPlaying === 'boolean',
            isPlaying: Boolean(playerState.isPlaying),
            position: normalizeFiniteNumber(playerState.position, null),
            trackId: playerState.trackId ? String(playerState.trackId) : null,
            updatedAt: normalizeFiniteNumber(playerState.updatedAt, Date.now()),
        };

        if (this.playerHoldActive && this.playerState.isPlaying) {
            this.releasePlayerHold('player resumed');
        }

        if (this.playerState.isPlaying || this.isPlayerHoldPausedState(this.playerState)) {
            this.schedulePcmPump(0);
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

    getByteOffsetForPosition(positionSeconds) {
        const relativeSeconds = Math.max(Number(positionSeconds) - this.pcmBasePosition, 0);
        return this.alignByteOffset(relativeSeconds * this.getBytesPerSecond());
    }

    getPositionForByteOffset(byteOffset) {
        return this.pcmBasePosition + this.alignByteOffset(byteOffset) / this.getBytesPerSecond();
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

    syncPlaybackOffsetToPlayer(now = Date.now()) {
        if (this.state === 'running') {
            return false;
        }

        const playerPosition = getEstimatedPlayerPosition(this.playerState, now);
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

        const outputPosition = this.getEstimatedOutputPosition(now);
        const playerPosition = getEstimatedPlayerPosition(this.playerState, now);
        if (!Number.isFinite(outputPosition) || !Number.isFinite(playerPosition)) {
            return null;
        }

        const driftSeconds = outputPosition - playerPosition;
        this.lastSyncDriftSeconds = driftSeconds;
        if (Math.abs(driftSeconds) > PROGRESS_DRIFT_THRESHOLD_SECONDS && !this.seekToPosition(playerPosition, now, `player progress drift ${driftSeconds.toFixed(3)}s`)) {
            return `player progress drift ${driftSeconds.toFixed(3)}s outside pcm cache`;
        }

        return null;
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
                this.renderer.flush();
            } catch (error) {
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
            this.emitStateChange();
        }
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

    writeEncodedChunk(chunk, meta = null) {
        if (this.state === 'closed' || !Buffer.isBuffer(chunk)) {
            return;
        }

        this.totalEncodedBytes += chunk.byteLength;
        try {
            this.encodedTrackBuffer?.push?.(chunk, meta ?? {});
        } catch {}
        if (this.decoder?.stdin?.writable && this.state !== 'closed') {
            this.writeDecoderStdin(chunk);
            return;
        }

        const queuedChunk = Buffer.from(chunk);
        this.pendingChunks.push(queuedChunk);
        this.pendingBytes += queuedChunk.byteLength;
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
        const startPrebufferBytes = this.getByteLengthForMs(START_PREBUFFER_MS);
        if (availableBytes < startPrebufferBytes || !this.canPumpPcm()) {
            return false;
        }

        if (this.shouldWaitForPlayerHold()) {
            return false;
        }

        if (!this.createRenderer) {
            throw new Error('WASAPI renderer factory is missing');
        }

        this.renderer = this.createRenderer(this.rendererOptions);
        const rendererState = this.renderer.getState?.() ?? null;
        this.lastPumpState = rendererState;

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
        this.emitStateChange();
        return true;
    }

    schedulePcmPump(delayMs = PCM_PUMP_INTERVAL_MS) {
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

    pumpPcm() {
        if (this.state === 'closed') {
            return;
        }

        try {
            if (!this.canPumpPcm()) {
                return;
            }

            if (!this.ensureRenderer()) {
                this.schedulePcmPump(PCM_PUMP_WAIT_MS);
                return;
            }

            const targetQueueBytes = this.getByteLengthForMs(QUEUE_TARGET_MS);
            const minimumQueueBytes = this.getByteLengthForMs(QUEUE_MIN_MS);
            const maxWriteBytes = this.getByteLengthForMs(250);
            let rendererState = this.renderer.getState?.() ?? null;
            this.lastPumpState = rendererState;
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
            queuedBytes = this.getRendererQueuedBytes(rendererState);

            if (availableBytes <= 0 || queuedBytes < minimumQueueBytes) {
                this.schedulePcmPump(PCM_PUMP_WAIT_MS);
                return;
            }

            this.schedulePcmPump(wroteBytes > 0 ? PCM_PUMP_INTERVAL_MS : PCM_PUMP_WAIT_MS);
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
                    this.playbackByteOffset = this.getByteOffsetForPosition(startPosition);
                    this.syncStartPosition = startPosition;
                    this.syncStartedAt = Date.now();
                }
            }

            const alignedChunk = buffer.subarray(0, alignedLength);
            this.appendPcmCache(alignedChunk);
            this.pcmRemainder = alignedLength < buffer.byteLength ? Buffer.from(buffer.subarray(alignedLength)) : Buffer.alloc(0);
            this.schedulePcmPump(0);
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
        this.emitStateChange();
    }

    getState() {
        return {
            backend: 'native-module-stream-session',
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
            encodedTrackBufferState: this.encodedTrackBuffer?.getState?.() ?? null,
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
            playerHoldTimeoutMs: PLAYER_HOLD_TIMEOUT_MS,
            lastPumpState: this.lastPumpState,
            queueTargetMs: QUEUE_TARGET_MS,
            queueMinMs: QUEUE_MIN_MS,
            startPrebufferMs: START_PREBUFFER_MS,
            skippedInitOnlyChunks: this.skippedInitOnlyChunks,
            skippedInitOnlyBytes: this.skippedInitOnlyBytes,
            strippedInitSegmentChunks: this.strippedInitSegmentChunks,
            strippedInitSegmentBytes: this.strippedInitSegmentBytes,
            playerState: this.playerState,
        };
    }
}

const createYaspStreamSession = (options = {}) => new YaspWasapiExclusiveStreamSession(options);

module.exports = {
    createYaspStreamSession,
    YaspWasapiExclusiveStreamSession,
};
