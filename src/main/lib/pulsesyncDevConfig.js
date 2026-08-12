'use strict';

Object.defineProperty(exports, '__esModule', { value: true });
exports.pulseSyncDevConfig = void 0;

const path = require('node:path');

const LOOPBACK_HOSTS = new Set(['127.0.0.1', 'localhost', '::1']);

const normalizeLoopbackUrl = (value) => {
    if (typeof value !== 'string' || !value.trim()) return null;

    try {
        const url = new URL(value);
        if (url.protocol !== 'http:' || !LOOPBACK_HOSTS.has(url.hostname)) return null;
        return url.origin;
    } catch {
        return null;
    }
};

const enabled = process.env.PULSESYNC_DEV === '1';
const resourcesPath = typeof process.env.PULSESYNC_DEV_RESOURCES_PATH === 'string' ? path.resolve(process.env.PULSESYNC_DEV_RESOURCES_PATH) : null;

exports.pulseSyncDevConfig = Object.freeze({
    enabled,
    webHostUrl: enabled ? normalizeLoopbackUrl(process.env.PULSESYNC_WEB_HOST_DEV_URL) : null,
    miniPlayerUrl: enabled ? normalizeLoopbackUrl(process.env.PULSESYNC_MINIPLAYER_DEV_URL) : null,
    resourcesPath: enabled ? resourcesPath : null,
});
