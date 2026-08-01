export const YASP_METADATA_PROBE_CHUNK_LIMIT = 8;

export function pulseSyncYaspWorkerBootstrap(sourceUrl: string, inlineSource: string | null, workerId: string, tapMode: string, probeLimit: number) {
    const worker = self as any;
    const messageMarker = '__pulseSyncNativeAudio';
    const mode = tapMode === 'stream' ? 'stream' : 'metadata';
    const metadataProbeLimit = Number.isFinite(Number(probeLimit)) ? Number(probeLimit) : 8;
    const feederStates = new WeakMap<object, { feederId: number; currentTrack: unknown; streamGeneration: number }>();
    const probeCounts = new Map<string, number>();
    let nextFeederId = 1;
    let nextAppendSequence = 1;

    const normalizeNumber = (value: unknown) => {
        const number = Number(value);
        return Number.isFinite(number) ? number : null;
    };
    const normalizeBitsPerSample = (value: unknown) => {
        const number = normalizeNumber(value);
        return number !== null && [8, 16, 24, 32].includes(number) ? number : null;
    };
    const safeRead = <T>(reader: () => T): T | undefined => {
        try {
            return reader();
        } catch {
            return undefined;
        }
    };
    const copyChunk = (chunk: unknown) => {
        if (chunk instanceof ArrayBuffer) return chunk.slice(0);
        if (ArrayBuffer.isView(chunk)) return chunk.buffer.slice(chunk.byteOffset, chunk.byteOffset + chunk.byteLength);
        return null;
    };
    const getFeederIdentity = (feeder: any, currentTrack: unknown) => {
        if (!feeder || typeof feeder !== 'object') return { feederId: 0, streamGeneration: 0 };
        let state = feederStates.get(feeder);
        if (!state) {
            state = { feederId: nextFeederId++, currentTrack, streamGeneration: 1 };
            feederStates.set(feeder, state);
        } else if (currentTrack == null && state.currentTrack != null) {
            state.currentTrack = null;
            state.streamGeneration += 1;
        } else if (currentTrack != null && currentTrack !== state.currentTrack) {
            if (state.currentTrack != null) {
                state.streamGeneration += 1;
            }
            state.currentTrack = currentTrack;
        }
        return { feederId: state.feederId, streamGeneration: state.streamGeneration };
    };
    const shouldPostChunk = (feederId: number, currentTrack: unknown) => {
        if (mode === 'stream') return true;
        const key = `${feederId}:${currentTrack ?? 'unknown'}`;
        const count = probeCounts.get(key) ?? 0;
        if (count >= metadataProbeLimit) return false;
        probeCounts.set(key, count + 1);
        return true;
    };
    const getCurrentAudioTrack = (feeder: any, stream: any) => {
        const timeline = feeder?.timeline;
        const currentTrack = stream?.currentTrack;
        if (!timeline || currentTrack == null) return null;
        return safeRead(() => timeline.findTrackById(currentTrack, 'audio')) ?? safeRead(() => timeline.audio?.find((track: any) => track?.id === currentTrack)) ?? null;
    };
    const getCurrentSegmentMetadata = (feeder: any, stream: any) => {
        const timeline = feeder?.timeline;
        const streamTime = normalizeNumber(stream?.time);
        if (!timeline || streamTime === null || typeof timeline.getSegment !== 'function') return null;
        const segment = safeRead(() => timeline.getSegment(stream.type, streamTime)?.segment);
        if (!segment) return null;
        return {
            number: segment.number ?? null,
            start: normalizeNumber(segment.start),
            end: normalizeNumber(segment.end),
        };
    };
    const getAudioTrackMetadata = (track: any, mimeType: unknown) => {
        if (!track) return null;
        return {
            id: track.id ?? null,
            language: track.language ?? null,
            label: track.label ?? track.name ?? null,
            mimeType: track.mimeType ?? mimeType ?? null,
            codec: track.codecs ?? track.codec ?? null,
            bitrate: normalizeNumber(track.bitrate ?? track.bandwidth),
            channels: normalizeNumber(track.channels),
            sampleRate: normalizeNumber(track.sampleRate ?? track.audioSamplingRate ?? track.samplerate),
            bitsPerSample: normalizeBitsPerSample(track.bitsPerSample ?? track.bitDepth ?? track.bit_depth),
        };
    };
    const getAudioFormatMetadata = (trackMetadata: ReturnType<typeof getAudioTrackMetadata>) => {
        if (!trackMetadata) return null;
        return {
            mimeType: trackMetadata.mimeType,
            codec: trackMetadata.codec,
            bitrate: trackMetadata.bitrate,
            channels: trackMetadata.channels,
            sampleRate: trackMetadata.sampleRate,
            bitsPerSample: trackMetadata.bitsPerSample,
        };
    };
    const postMessage = (message: Record<string, unknown>) => worker.postMessage({ [messageMarker]: true, sourceUrl, workerId, ...message });

    worker.__pulseSyncYaspNativeAudioTap = (feeder: any, stream: any, chunk: unknown, appendSequence: number | null = null, tapStage = 'stream-read') => {
        try {
            if (!stream || stream.type !== 'audio' || !chunk) return;
            const identity = getFeederIdentity(feeder, stream.currentTrack);
            if (!shouldPostChunk(identity.feederId, stream.currentTrack)) return;
            const copiedChunk = copyChunk(chunk);
            if (!copiedChunk) return;
            const mimeTypes = safeRead(() => feeder.timeline.getMimeTypes());
            const mediaState = feeder?.mediaState ?? {};
            const segment = getCurrentSegmentMetadata(feeder, stream);
            const audioTrack = getAudioTrackMetadata(getCurrentAudioTrack(feeder, stream), mimeTypes?.audio?.[0] ?? null);
            const meta = {
                workerId,
                ...identity,
                tapMode: mode,
                type: stream.type,
                tapStage,
                appendSequence,
                currentTrack: stream.currentTrack ?? null,
                audioTrack,
                audioFormat: getAudioFormatMetadata(audioTrack),
                time: normalizeNumber(stream.time),
                nextTimeToSet: normalizeNumber(stream.nextTimeToSet),
                timelineStartMs: segment?.start ?? normalizeNumber(stream.time),
                timelineEndMs: segment?.end ?? normalizeNumber(stream.nextTimeToSet),
                segmentNumber: segment?.number ?? null,
                lastAddedSegmentNumber: stream.lastAddedSegmentNumber ?? null,
                lastTrackTimeOffset: normalizeNumber(stream.lastTrackTimeOffset),
                playbackTime: normalizeNumber(mediaState.currentTime),
                paused: Boolean(mediaState.paused),
                playbackRate: normalizeNumber(mediaState.playbackRate),
                mimeType: mimeTypes?.audio?.[0] ?? null,
                byteLength: copiedChunk.byteLength,
            };
            worker.postMessage({ [messageMarker]: true, event: 'chunk', sourceUrl, workerId, meta, chunk: copiedChunk }, [copiedChunk]);
        } catch (error) {
            postMessage({ event: 'tap-error', message: String((error as { message?: unknown })?.message ?? error) });
        }
    };
    worker.__pulseSyncYaspNativeAudioStreamChunkTap = (feeder: any, stream: any, chunk: unknown) =>
        worker.__pulseSyncYaspNativeAudioTap?.(feeder, stream, chunk, nextAppendSequence++, 'stream-read');

    const patchMetadata = (source: string) =>
        source
            .replace(/(bitrate:\s*n\.bandwidth,\s*)language:\s*e\.lang/, '$1sampleRate:n.audioSamplingRate,language:e.lang')
            .replace(/(V\(G\(r\),\s*"channels",\s*void 0\),)/, '$1V(G(r),"sampleRate",void 0),')
            .replace(/(r\.channels\s*=\s*e\.channels,\s*)r(\s*)/, '$1r.sampleRate=e.sampleRate||e.audioSamplingRate,$2r')
            .replace(/(this\.bitrate\s*=\s*e\.bitrate,\s*)this\.initialization/, '$1this.sampleRate=e.sampleRate||e.audioSamplingRate||this.sampleRate,this.initialization')
            .replace(/channels:\s*r\.channels/g, 'channels:r.channels,sampleRate:r.sampleRate');
    const patchWorkerSource = (source: string) => {
        const metadataSource = patchMetadata(source);
        const marker = /(return\s+e\.next\s*=\s*15\s*,\s*)cf\.race\(\[this\.appendChunk\(t\s*,\s*o\)\s*,\s*n\]\)/;
        const patched = metadataSource.replace(marker, '$1(self.__pulseSyncYaspNativeAudioStreamChunkTap&&self.__pulseSyncYaspNativeAudioStreamChunkTap(this,t,o),cf.race([this.appendChunk(t,o),n]))');
        postMessage({
            event: 'patch-status',
            patched: patched !== source,
            reason: patched === source ? 'appendStream chunk marker not found' : `appendStream stream-read tap patched, track metadata ${metadataSource === source ? 'not patched' : 'patched'}`,
        });
        return patched;
    };

    let workerSource = typeof inlineSource === 'string' ? inlineSource : '';
    if (!workerSource) {
        const request = new XMLHttpRequest();
        request.open('GET', sourceUrl, false);
        request.send(null);
        workerSource = request.responseText;
    }
    if (!workerSource) throw new Error(`Failed to load worker source for PulseSync native audio tap: ${sourceUrl}`);
    (0, eval)(`${patchWorkerSource(workerSource)}\n//# sourceURL=${sourceUrl}?pulsesync-native-audio-tap`);
}
