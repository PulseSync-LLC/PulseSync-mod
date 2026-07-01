'use strict';

Object.defineProperty(exports, '__esModule', { value: true });
exports.resetYaspSource = exports.receiveYaspChunk = exports.configureYaspSource = void 0;

const { Logger } = require('../packages/logger/Logger.js');
const crypto = require('crypto');

const logger = new Logger('NativeAudioOutput');
const sources = new Map();
const chunkStats = new Map();

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

const getChunkStatKey = (payload) => {
    const sourceKey = payload?.sourceKey || payload?.meta?.sourceKey || 'unknown-source';
    const feederId = payload?.meta?.feederId || 'unknown-feeder';
    return `${sourceKey}:${feederId}`;
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

const receiveYaspChunk = (payload = {}, chunk) => {
    if (!chunk || typeof chunk.byteLength !== 'number') {
        return;
    }

    const statKey = getChunkStatKey(payload);
    const now = Date.now();
    const stat = chunkStats.get(statKey) ?? {
        chunks: 0,
        bytes: 0,
        firstChunkAt: now,
        lastLogAt: 0,
    };

    stat.chunks += 1;
    stat.bytes += chunk.byteLength;
    stat.lastChunkAt = now;
    stat.lastMeta = payload.meta ?? null;
    chunkStats.set(statKey, stat);

    if (stat.chunks === 1 || stat.chunks % 256 === 0 || now - stat.lastLogAt > 10000) {
        stat.lastLogAt = now;
        logger.info('YASP native audio chunk tap', {
            statHash: hashValue(statKey),
            chunks: stat.chunks,
            bytes: stat.bytes,
            lastChunkBytes: chunk.byteLength,
            mimeType: payload?.meta?.mimeType,
            currentTrack: payload?.meta?.currentTrack,
            playbackTime: payload?.meta?.playbackTime,
        });
    }
};
exports.receiveYaspChunk = receiveYaspChunk;

const resetYaspSource = (payload = {}) => {
    const sourceKey = payload.sourceKey || getSourceKey(payload.source);
    if (!sourceKey) {
        return;
    }

    sources.delete(sourceKey);
    for (const key of Array.from(chunkStats.keys())) {
        if (key.startsWith(`${sourceKey}:`)) {
            chunkStats.delete(key);
        }
    }

    logger.info('YASP native audio source reset', { sourceHash: hashValue(sourceKey) });
};
exports.resetYaspSource = resetYaspSource;
