'use strict';

const native = process.platform === 'win32' ? require('./wasapi_exclusive.node') : null;

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

const normalizePcmBitsPerSample = (value, fallback = 16) => {
    const bitsPerSample = normalizePositiveInteger(value, fallback, 16, 32);
    return [16, 24, 32].includes(bitsPerSample) ? bitsPerSample : fallback;
};

const normalizeOptions = (options = {}) => {
    const floatPcm = options.float === true;
    const normalized = {
        sampleRate: normalizePositiveInteger(options.sampleRate, 48000, 8000, 384000),
        channels: normalizePositiveInteger(options.channels, 2, 1, 2),
        bitsPerSample: floatPcm ? 32 : normalizePcmBitsPerSample(options.bitsPerSample, 16),
        float: floatPcm,
        bufferMs: normalizePositiveInteger(options.bufferMs, 50, 10, 500),
        maxQueuedMs: normalizePositiveInteger(options.maxQueuedMs, 1000, 50, 10000),
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

    return native.listDevices({
        includeDisabled: Boolean(options.includeDisabled),
        includeFormats: options.includeFormats !== false,
    });
};

const getDeviceForOptions = (devices, options = {}) => {
    if (typeof options.deviceId === 'string' && options.deviceId.trim()) {
        return devices.find((device) => device.id === options.deviceId) ?? null;
    }

    return devices.find((device) => device.isDefaultConsole) ?? devices.find((device) => device.isDefault) ?? devices[0] ?? null;
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

    return score;
};

const getClosestSupportedFormat = (options = {}) => {
    const desired = normalizeOptions(options);
    const devices = listDevices({ includeDisabled: false, includeFormats: true });
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
            float: format.float,
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

module.exports = {
    createRenderer,
    getClosestSupportedFormat,
    isSupported,
    listDevices,
    normalizeOptions,
    WasapiExclusiveError,
    WasapiExclusiveRenderer,
};
