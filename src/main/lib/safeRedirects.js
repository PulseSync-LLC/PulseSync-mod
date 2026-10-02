'use strict';
const { Logger } = require('../packages/logger/Logger.js');
const {
    yandexHostnamePattern,
    oldMusicHostnamePattern,
    AUTH_HOSTNAME_PATTERNS,
    DESKTOP_APPLICATION_PROTOCOL,
    isApplicationHostname,
    resolveUrlByPolicy,
    UrlProtocol,
} = require('./desktopPolicy.js');
const ALLOWED_HOSTNAME_PATTERNS = [yandexHostnamePattern, oldMusicHostnamePattern, ...AUTH_HOSTNAME_PATTERNS];
const safeRedirectsLogger = new Logger('SafeRedirects');
const SAFE_REDIRECT_URL_POLICY = {
    allowedProtocols: /* @__PURE__ */ new Set([DESKTOP_APPLICATION_PROTOCOL, UrlProtocol.HTTPS]),
};
const isSafeRedirectUrl = (url) => {
    if (url.port !== '') {
        return false;
    }
    if (url.protocol === DESKTOP_APPLICATION_PROTOCOL) {
        return isApplicationHostname(url.hostname);
    }
    return url.protocol === UrlProtocol.HTTPS && ALLOWED_HOSTNAME_PATTERNS.some((pattern) => pattern.test(url.hostname));
};
const safeRedirects = (window) => {
    window.webContents.on('will-navigate', (event, targetUrl) => {
        const result = resolveUrlByPolicy(targetUrl, SAFE_REDIRECT_URL_POLICY);
        if (!result.isAllowed) {
            safeRedirectsLogger.warn('Redirect prevented', result.reason);
            event.preventDefault();
            return;
        }
        if (!isSafeRedirectUrl(result.url)) {
            safeRedirectsLogger.warn('Redirect prevented', result.url.protocol, result.url.hostname);
            event.preventDefault();
        }
    });
};

exports.safeRedirects = safeRedirects;
