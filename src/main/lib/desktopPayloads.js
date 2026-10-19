'use strict';
const { config } = require('../config.js');
const isApplicationLanguage = (value) => {
    return typeof value === 'string' && config.app.systemLanguages.includes(value);
};
const isRecord = (value) => {
    return typeof value === 'object' && value !== null;
};
const isOptionalBoolean = (value) => {
    return typeof value === 'undefined' || typeof value === 'boolean';
};
const isDesktopPlayerState = (value) => {
    return (
        isRecord(value) &&
        !Array.isArray(value) &&
        isOptionalBoolean(value.isPlaying) &&
        isOptionalBoolean(value.canMoveBackward) &&
        isOptionalBoolean(value.canMoveForward)
    );
};
const isDesktopTheme = (value) => {
    return value === 'light' || value === 'dark';
};
const PLAYBACK_TIMING_KEYS = new Set(['entityHooksMs', 'mediaSourceMs', 'mediaHooksMs', 'preloadHooksMs', 'preparationWaitMs', 'canplayMs', 'playMs']);
const isDesktopPlaybackDiagnostic = (value) => {
    if (!isRecord(value) || Array.isArray(value)) return false;
    if (!['transition', 'prepare'].includes(value.kind) || !['standard', 'prepared', 'crossfade'].includes(value.mode)) return false;
    if (!['playing', 'ready', 'cancelled', 'error', 'fallback'].includes(value.outcome)) return false;
    if (typeof value.requestId !== 'string' || !/^\d{1,12}$/.test(value.requestId)) return false;
    if (value.trackId !== null && (typeof value.trackId !== 'string' || !/^[\w:-]{1,128}$/.test(value.trackId))) return false;
    if (typeof value.method !== 'string' || !/^[a-zA-Z]{0,32}$/.test(value.method)) return false;
    if (typeof value.cacheHit !== 'boolean' || !Number.isFinite(value.durationMs) || value.durationMs < 0 || value.durationMs > 3600000) return false;
    if (!isRecord(value.timings) || Array.isArray(value.timings)) return false;
    return Object.entries(value.timings).every(([key, duration]) => PLAYBACK_TIMING_KEYS.has(key) && Number.isFinite(duration) && duration >= 0 && duration <= 3600000);
};
const MAX_PNG_DEFAULT_PATH_LENGTH = 1024;
const MAX_PNG_BUFFER_SIZE = 50 * 1024 * 1024;
const isPngSavePayload = (value) => {
    if (!isRecord(value)) {
        return false;
    }
    const { defaultPath, buffer } = value;
    return (
        typeof defaultPath === 'string' &&
        defaultPath.length > 0 &&
        defaultPath.length <= MAX_PNG_DEFAULT_PATH_LENGTH &&
        !defaultPath.includes('\0') &&
        buffer instanceof ArrayBuffer &&
        buffer.byteLength > 0 &&
        buffer.byteLength <= MAX_PNG_BUFFER_SIZE
    );
};

module.exports = { isApplicationLanguage, isDesktopPlayerState, isDesktopTheme, isPngSavePayload, isDesktopPlaybackDiagnostic };
