'use strict';

Object.defineProperty(exports, '__esModule', { value: true });
exports.resetYaspSource =
    exports.getYaspAudioFormat =
    exports.receiveYaspChunk =
    exports.configureYaspSource =
    exports.createWasapiExclusiveRenderer =
    exports.listWasapiExclusiveDevices =
    exports.getWasapiExclusiveStatus =
        void 0;

const { Logger } = require('../packages/logger/Logger.js');
const crypto = require('crypto');

const logger = new Logger('NativeAudioOutput');
const sources = new Map();
const chunkStats = new Map();
let lastYaspAudioFormat = null;
const WASAPI_EXCLUSIVE_DEVICE_ID_SETTING_KEY = 'modSettings.nativeAudioOutput.wasapiExclusiveDeviceId';
const WASAPI_EXCLUSIVE_MODULE_PATH = '../native_modules/wasapi_exclusive';
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

const getWasapiExclusiveStatus = () => {
    const wasapiExclusive = getWasapiExclusiveModule();
    return {
        available: Boolean(wasapiExclusive),
        supported: Boolean(wasapiExclusive?.isSupported?.()),
        selectedDeviceId: getSelectedWasapiExclusiveDeviceId(),
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

const getChunkStatKey = (payload) => {
    const sourceKey = payload?.sourceKey || payload?.meta?.sourceKey || 'unknown-source';
    const feederId = payload?.meta?.feederId || 'unknown-feeder';
    return `${sourceKey}:${feederId}`;
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

    if (lastYaspAudioFormat?.sourceHash !== hashValue(sourceKey)) {
        lastYaspAudioFormat = null;
    }

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
    chunkStats.set(statKey, stat);

    const metadataAudioFormat = normalizeYaspAudioFormat(payload.meta);
    const containerAudioFormat = parseMp4AudioFormat(chunkBuffer, payload.meta);
    const audioFormat = mergeAudioFormats(stat.audioFormat, metadataAudioFormat, containerAudioFormat);
    stat.lastParseDebug = {
        chunkConstructor: chunk?.constructor?.name ?? null,
        bufferByteLength: chunkBuffer.byteLength,
        firstBytesHex: chunkBuffer.subarray(0, 16).toString('hex'),
        topLevelBoxes: getTopLevelMp4BoxTypes(chunkBuffer),
        parsedContainerSource: containerAudioFormat?.source ?? null,
    };
    if (hasAudioFormatData(audioFormat)) {
        stat.audioFormat = audioFormat;
        lastYaspAudioFormat = {
            ...audioFormat,
            currentTrack: payload?.meta?.currentTrack ?? null,
            sourceHash: hashValue(payload?.sourceKey || payload?.meta?.sourceKey || payload?.sourceUrl),
            workerId: payload?.workerId || payload?.meta?.workerId || null,
            updatedAt: now,
        };

        if (!lastYaspAudioFormat.channels || !lastYaspAudioFormat.sampleRate || !lastYaspAudioFormat.bitsPerSample) {
            lastYaspAudioFormat.parseDebug = stat.lastParseDebug;
        }
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

    if (lastYaspAudioFormat?.sourceHash === hashValue(sourceKey)) {
        lastYaspAudioFormat = null;
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
