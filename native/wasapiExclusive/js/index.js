'use strict';

const native = process.platform === 'win32' ? require('./wasapi_exclusive.node') : null;
const { createYaspStreamSession: createYaspStreamSessionInternal, YaspWasapiExclusiveStreamSession } = require('./stream-session');
const DEVICE_FORMAT_CACHE_TTL_MS = 60 * 1000;
let deviceFormatCache = null;

class WasapiExclusiveError extends Error {
    constructor(message) {
        super(message);
        this.name = 'WasapiExclusiveError';
    }
}

const normalizePositiveInteger = (value, fallback, min, max) => {
    const number = Number(value);
    if (!Number.isFinite(number)) {
        return fallback;
    }

    return Math.min(Math.max(Math.round(number), min), max);
};

const normalizeBufferMs = (value) => (Number(value) === 0 ? 0 : normalizePositiveInteger(value, 50, 10, 500));

const normalizePcmBitsPerSample = (value, fallback = 16) => {
    const bitsPerSample = normalizePositiveInteger(value, fallback, 16, 32);
    return [16, 24, 32].includes(bitsPerSample) ? bitsPerSample : fallback;
};

const normalizePcmContainerBitsPerSample = (value, bitsPerSample, sampleFormat) => {
    const normalizedSampleFormat = String(sampleFormat ?? '').toLowerCase();
    if (bitsPerSample === 24) {
        if (normalizedSampleFormat === 'pcm24in32') {
            return 32;
        }
        if (normalizedSampleFormat === 'pcm24') {
            return 24;
        }
    }

    const preferredContainerBitsPerSample = bitsPerSample === 24 ? 32 : bitsPerSample;
    const containerBitsPerSample = normalizePositiveInteger(value, preferredContainerBitsPerSample, 16, 32);
    return containerBitsPerSample === bitsPerSample || (bitsPerSample === 24 && containerBitsPerSample === 32) ? containerBitsPerSample : bitsPerSample;
};

const getSampleFormatName = (bitsPerSample, containerBitsPerSample, floatPcm) => {
    if (floatPcm) {
        return 'float32';
    }

    if (bitsPerSample === 24 && containerBitsPerSample === 32) {
        return 'pcm24in32';
    }

    return `pcm${bitsPerSample}`;
};

const normalizeOptions = (options = {}) => {
    const floatPcm = options.float === true;
    const bitsPerSample = floatPcm ? 32 : normalizePcmBitsPerSample(options.bitsPerSample, 16);
    const containerBitsPerSample = floatPcm ? 32 : normalizePcmContainerBitsPerSample(options.containerBitsPerSample, bitsPerSample, options.sampleFormat);
    const renderMode = options.renderMode === 'timer' ? 'timer' : 'event';
    const timerPollMs = normalizePositiveInteger(options.timerPollMs, 5, 1, 50);
    const timerPeriodMs = normalizePositiveInteger(options.timerPeriodMs, Math.max(timerPollMs * 2, 2), 2, 100);
    const timerBufferPeriods = normalizePositiveInteger(options.timerBufferPeriods, 4, 2, 16);
    const normalized = {
        sampleRate: normalizePositiveInteger(options.sampleRate, 48000, 8000, 384000),
        channels: normalizePositiveInteger(options.channels, 2, 1, 2),
        bitsPerSample,
        validBitsPerSample: bitsPerSample,
        containerBitsPerSample,
        sampleFormat: getSampleFormatName(bitsPerSample, containerBitsPerSample, floatPcm),
        float: floatPcm,
        bufferMs: renderMode === 'timer' ? timerPeriodMs * timerBufferPeriods : normalizeBufferMs(options.bufferMs),
        maxQueuedMs: normalizePositiveInteger(options.maxQueuedMs, 1000, 50, 60000),
        renderMode,
        timerPollMs,
        timerPeriodMs,
        timerBufferPeriods,
        deferStart: options.deferStart === true,
        waveFormatExtensible: options.waveFormatExtensible !== false,
    };

    if (typeof options.deviceId === 'string' && options.deviceId.trim()) {
        normalized.deviceId = options.deviceId;
    }

    return normalized;
};

const isSupported = () => process.platform === 'win32' && Boolean(native?.isSupported?.());

const listDevices = (options = {}) => {
    if (!isSupported()) {
        return [];
    }

    const normalizedOptions = {
        includeDisabled: Boolean(options.includeDisabled),
        includeFormats: options.includeFormats !== false,
    };
    const devices = native.listDevices(normalizedOptions);
    if (!normalizedOptions.includeDisabled && normalizedOptions.includeFormats) {
        deviceFormatCache = {
            devices,
            updatedAt: Date.now(),
        };
    }
    return devices;
};

const clearDeviceCache = () => {
    deviceFormatCache = null;
};

const getDevicesWithFormats = () => {
    if (deviceFormatCache && Date.now() - deviceFormatCache.updatedAt <= DEVICE_FORMAT_CACHE_TTL_MS) {
        return deviceFormatCache.devices;
    }

    return listDevices({ includeDisabled: false, includeFormats: true });
};

const getDeviceForOptions = (devices, options = {}) => {
    if (typeof options.deviceId === 'string' && options.deviceId.trim()) {
        return devices.find((device) => device.id === options.deviceId) ?? null;
    }

    return devices.find((device) => device.isDefault) ?? devices.find((device) => device.isDefaultConsole) ?? null;
};

const scoreSupportedFormat = (format, desired) => {
    let score = 0;

    if (format.sampleRate === desired.sampleRate) {
        score += 1000;
    } else {
        score -= Math.abs(format.sampleRate - desired.sampleRate) / 100;
    }

    if (format.channels === desired.channels) {
        score += 500;
    } else {
        score -= Math.abs(format.channels - desired.channels) * 100;
    }

    if (format.float === desired.float) {
        score += 200;
    } else if (desired.float) {
        score -= 1000;
    }

    if (format.bitsPerSample === desired.bitsPerSample) {
        score += 100;
    } else {
        score -= Math.abs(format.bitsPerSample - desired.bitsPerSample) * 10;
    }

    const formatContainerBitsPerSample = format.containerBitsPerSample ?? format.bitsPerSample;
    const desiredContainerBitsPerSample = desired.containerBitsPerSample ?? desired.bitsPerSample;
    if (formatContainerBitsPerSample === desiredContainerBitsPerSample) {
        score += 50;
    } else if (format.bitsPerSample === desired.bitsPerSample) {
        score -= Math.abs(formatContainerBitsPerSample - desiredContainerBitsPerSample);
    }

    return score;
};

const getClosestSupportedFormat = (options = {}) => {
    const desired = normalizeOptions(options);
    const devices = getDevicesWithFormats();
    const device = getDeviceForOptions(devices, desired);
    if (!device) {
        return null;
    }

    const formats = Array.isArray(device.supportedFormats) ? device.supportedFormats : [];
    if (!formats.length) {
        return {
            device,
            exact: false,
            format: null,
            rendererOptions: null,
            requestedOptions: desired,
        };
    }

    const format = formats.slice().sort((left, right) => scoreSupportedFormat(right, desired) - scoreSupportedFormat(left, desired))[0];

    return {
        device,
        containerExact: (format.containerBitsPerSample ?? format.bitsPerSample) === (desired.containerBitsPerSample ?? desired.bitsPerSample),
        exact:
            format.sampleRate === desired.sampleRate &&
            format.channels === desired.channels &&
            format.bitsPerSample === desired.bitsPerSample &&
            format.float === desired.float,
        format,
        rendererOptions: {
            ...desired,
            deviceId: device.id,
            sampleRate: format.sampleRate,
            channels: format.channels,
            bitsPerSample: format.bitsPerSample,
            validBitsPerSample: format.validBitsPerSample ?? format.bitsPerSample,
            containerBitsPerSample: format.containerBitsPerSample ?? format.bitsPerSample,
            sampleFormat: format.sampleFormat,
            float: format.float,
            waveFormatExtensible: format.waveFormatExtensible !== false,
        },
        requestedOptions: desired,
    };
};

class WasapiExclusiveRenderer {
    constructor(options = {}) {
        if (!isSupported()) {
            throw new WasapiExclusiveError('WASAPI exclusive output is only available on Windows with the native module loaded');
        }

        this.closed = false;
        this.options = normalizeOptions(options);
        this.renderer = new native.WasapiExclusiveRenderer(this.options);
    }

    writePcm(buffer) {
        if (this.closed) {
            return 0;
        }

        if (!Buffer.isBuffer(buffer)) {
            buffer = Buffer.from(buffer);
        }

        return this.renderer.write(buffer);
    }

    attachPcmSource(trackStore, byteOffset = 0) {
        if (this.closed || typeof this.renderer.attachPcmSource !== 'function') {
            return false;
        }

        return this.renderer.attachPcmSource(trackStore, byteOffset);
    }

    seekPcmSource(byteOffset) {
        if (this.closed || typeof this.renderer.seekPcmSource !== 'function') {
            return false;
        }

        return this.renderer.seekPcmSource(byteOffset);
    }

    start() {
        if (this.closed) {
            return false;
        }

        return typeof this.renderer.start === 'function' ? this.renderer.start() : true;
    }

    setVolumeGain(gain) {
        if (this.closed || typeof this.renderer.setVolumeGain !== 'function') {
            return false;
        }

        const normalizedGain = Number(gain);
        if (!Number.isFinite(normalizedGain)) {
            throw new TypeError('Volume gain must be a finite number');
        }

        return this.renderer.setVolumeGain(Math.min(Math.max(normalizedGain, 0), 1));
    }

    flush() {
        if (this.closed) {
            return 0;
        }

        return this.renderer.flush();
    }

    getState() {
        if (this.closed) {
            return {
                closed: true,
                ...this.options,
            };
        }

        return this.renderer.getState();
    }

    close() {
        if (this.closed) {
            return;
        }

        this.closed = true;
        this.renderer.close();
    }
}

const createRenderer = (options = {}) => new WasapiExclusiveRenderer(options);
const createTrackStore = native?.YaspTrackStore ? (options = {}) => new native.YaspTrackStore(options) : null;
const createYaspStreamSession = (options = {}) => {
    if (!createTrackStore) {
        throw new WasapiExclusiveError('Native YaspTrackStore is unavailable; rebuild the WASAPI addon before starting a stream session');
    }

    return createYaspStreamSessionInternal({
        ...options,
        createTrackStore,
        createRenderer,
        getClosestSupportedFormat,
    });
};

module.exports = {
    clearDeviceCache,
    createRenderer,
    createTrackStore,
    createYaspStreamSession,
    getClosestSupportedFormat,
    isSupported,
    listDevices,
    normalizeOptions,
    WasapiExclusiveError,
    WasapiExclusiveRenderer,
    YaspWasapiExclusiveStreamSession,
};
