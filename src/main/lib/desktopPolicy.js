'use strict';
const { config } = require('../config.js');
const { RendererTrustProfile } = require('../types/desktop.js');
function getPathnameFromUrl(url) {
    return url.split(/[?#]/)[0] ?? '';
}
const encodedUnsafeCharacterAfterDecodeRegexp = /%(?:25|2e|2f|5c)/i;
const pathTraversalSegmentRegexp = /(^|[\\/])\.\.([\\/]|$)/;

function isSafeDecodedPathname(pathname) {
    return !pathTraversalSegmentRegexp.test(pathname) && !encodedUnsafeCharacterAfterDecodeRegexp.test(pathname);
}
function isSafeUrlPathnameAfterDecode(url) {
    const pathname = getPathnameFromUrl(url);
    let decodedPathname;
    try {
        decodedPathname = decodeURIComponent(pathname);
    } catch {
        return false;
    }
    return isSafeDecodedPathname(decodedPathname);
}
var UrlPolicyRejectionReason;
(function (UrlPolicyRejectionReason) {
    UrlPolicyRejectionReason['INVALID_URL'] = 'invalid-url';
    UrlPolicyRejectionReason['DISALLOWED_PROTOCOL'] = 'disallowed-protocol';
    UrlPolicyRejectionReason['CREDENTIALS_NOT_ALLOWED'] = 'credentials-not-allowed';
})(UrlPolicyRejectionReason || (UrlPolicyRejectionReason = {}));
const resolveUrlByPolicy = (value, config) => {
    let url;
    try {
        url = typeof config.baseUrl === 'undefined' ? new URL(value) : new URL(value, config.baseUrl);
    } catch {
        return {
            isAllowed: false,
            reason: UrlPolicyRejectionReason.INVALID_URL,
        };
    }
    if (!config.allowedProtocols.has(url.protocol)) {
        return {
            isAllowed: false,
            reason: UrlPolicyRejectionReason.DISALLOWED_PROTOCOL,
        };
    }
    if (!config.allowCredentials && (url.username !== '' || url.password !== '')) {
        return {
            isAllowed: false,
            reason: UrlPolicyRejectionReason.CREDENTIALS_NOT_ALLOWED,
        };
    }
    return {
        isAllowed: true,
        url,
    };
};
var UrlProtocol;
(function (UrlProtocol) {
    UrlProtocol['HTTP'] = 'http:';
    UrlProtocol['HTTPS'] = 'https:';
    UrlProtocol['MAILTO'] = 'mailto:';
    UrlProtocol['TEL'] = 'tel:';
})(UrlProtocol || (UrlProtocol = {}));
const DESKTOP_APPLICATION_URL = `${config.app.appProtocol}://${config.app.appHostname}`;
const DESKTOP_APPLICATION_PROTOCOL = new URL(DESKTOP_APPLICATION_URL).protocol;
const SUPPORTED_TLDS = ['ru', 'com', 'kz', 'by', 'uz'];
const TLD_PATTERN = `(?:${SUPPORTED_TLDS.join('|')})`;
const isApplicationHostname = (hostname) => {
    return hostname === config.app.appHostname;
};
const yandexHostnamePattern = new RegExp(`^yandex\\.${TLD_PATTERN}$`);
const oldMusicHostnamePattern = new RegExp(`^music\\.(?:qa\\.)?yandex\\.${TLD_PATTERN}$`);
const oAuthHostnamePattern = new RegExp(`^oauth\\.yandex\\.${TLD_PATTERN}$`);
const passportYandexHostnamePattern = new RegExp(`^passport\\.yandex\\.${TLD_PATTERN}$`);
const ssoPassportYandexHostnamePattern = new RegExp(`^sso\\.passport\\.yandex\\.${TLD_PATTERN}$`);
const ssoPassportYaHostnamePattern = new RegExp(`^sso\\.ya\\.${TLD_PATTERN}$`);
const AUTH_HOSTNAME_PATTERNS = [oAuthHostnamePattern, passportYandexHostnamePattern, ssoPassportYandexHostnamePattern, ssoPassportYaHostnamePattern];
const RENDERER_URL_POLICY = {
    allowedProtocols: new Set([DESKTOP_APPLICATION_PROTOCOL, UrlProtocol.HTTPS]),
};
const classifyRendererUrl = (rawUrl) => {
    const result = resolveUrlByPolicy(rawUrl, RENDERER_URL_POLICY);
    if (!result.isAllowed || result.url.port !== '') {
        return RendererTrustProfile.UNTRUSTED;
    }
    const { url } = result;
    if (url.protocol === DESKTOP_APPLICATION_PROTOCOL && isApplicationHostname(url.hostname)) {
        return RendererTrustProfile.APPLICATION;
    }
    if (url.protocol === UrlProtocol.HTTPS && AUTH_HOSTNAME_PATTERNS.some((pattern) => pattern.test(url.hostname))) {
        return RendererTrustProfile.AUTH;
    }
    return RendererTrustProfile.UNTRUSTED;
};

module.exports = {
    resolveUrlByPolicy,
    UrlProtocol,
    classifyRendererUrl,
    DESKTOP_APPLICATION_PROTOCOL,
    DESKTOP_APPLICATION_URL,
    SUPPORTED_TLDS,
    isApplicationHostname,
    AUTH_HOSTNAME_PATTERNS,
    yandexHostnamePattern,
    oldMusicHostnamePattern,
    oAuthHostnamePattern,
    passportYandexHostnamePattern,
    ssoPassportYandexHostnamePattern,
    ssoPassportYaHostnamePattern,
    isSafeDecodedPathname,
    isSafeUrlPathnameAfterDecode,
};
