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

module.exports = { isApplicationLanguage, isDesktopPlayerState, isDesktopTheme, isPngSavePayload };
