'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.corsHandler = exports.isUrlAllowed = exports.getAllowedUrls = exports.addAllowedUrls = exports.DIRECT_URLS = exports.METRIKA_URLS = void 0;
const url = require('url');
const config_js_1 = require('../../../config.js');
const cors_js_1 = require('../../../constants/cors.js');
const Logger_js_1 = require('../../../packages/logger/Logger.js');

const corsHandlerLogger = new Logger_js_1.Logger('CorsHandler');

const METRIKA_URLS = cors_js_1.TLDS.map((tld) => cors_js_1.PROTOCOL + cors_js_1.METRIKA_DOMAIN + tld);
exports.METRIKA_URLS = METRIKA_URLS;
const DIRECT_URLS = cors_js_1.TLDS.map((tld) => cors_js_1.PROTOCOL + cors_js_1.DIRECT_DOMAIN + tld);
exports.DIRECT_URLS = DIRECT_URLS;

const LOCAL_IPS = ['http://192.168.0.210', 'https://192.168.0.210'];
const STATIC_ALLOWED_URLS = METRIKA_URLS.concat(DIRECT_URLS, LOCAL_IPS);
const WILDCARD_HOSTS = ['yandex.ru', 'yandex.net', 'yastatic.net', 'lrclib.net', 'passport.yandex.ru'];

const ACCESS_CONTROL_ALLOW_ORIGIN_HEADER = 'access-control-allow-origin';
const NEW_HEADER_VALUE = [`${config_js_1.config.app.appProtocol}://${config_js_1.config.app.appHostname}`];

const dynamicAllowedUrls = new Set();

function addAllowedUrls(urls) {
    for (const url of urls || []) {
        if (typeof url === 'string' && url.trim()) {
            dynamicAllowedUrls.add(url.trim());
            corsHandlerLogger.log(`Dynamic allow added: ${url.trim()}`);
        }
    }
}
exports.addAllowedUrls = addAllowedUrls;

function getAllowedUrls() {
    return Array.from(dynamicAllowedUrls);
}
exports.getAllowedUrls = getAllowedUrls;

function isUrlAllowed(requestUrl) {
    if (typeof requestUrl !== 'string') {
        corsHandlerLogger.warn(`Not a string, denied: ${requestUrl}`);
        return false;
    }
    let urlObj;
    try {
        urlObj = new url.URL(requestUrl);
    } catch {
        corsHandlerLogger.warn(`Invalid URL syntax, denied: ${requestUrl}`);
        return false;
    }
    const normalized = urlObj.href;
    const host = urlObj.hostname;

    for (const domain of WILDCARD_HOSTS) {
        if (host === domain || host.endsWith(`.${domain}`)) {
            return true;
        }
    }
    for (const prefix of STATIC_ALLOWED_URLS) {
        if (normalized.startsWith(prefix)) {
            return true;
        }
    }
    for (const prefix of dynamicAllowedUrls) {
        if (normalized.startsWith(prefix)) {
            return true;
        }
    }
    if (!((host === 'localhost' && urlObj.port === '2007') || urlObj.port === '5173')) {
        corsHandlerLogger.warn(`URL not allowed: ${normalized}`);
    }
    return false;
}
exports.isUrlAllowed = isUrlAllowed;

function corsHandler(responseHeaders, details) {
    const url = details.url;
    const newResponseHeaders = structuredClone(responseHeaders);
    if (isUrlAllowed(url)) {
        newResponseHeaders[ACCESS_CONTROL_ALLOW_ORIGIN_HEADER] = NEW_HEADER_VALUE;
        return newResponseHeaders;
    }
    if (METRIKA_URLS.some((prefix) => url.startsWith(prefix))) {
        const existing = (newResponseHeaders[ACCESS_CONTROL_ALLOW_ORIGIN_HEADER] ?? [])[0];
        if (existing && cors_js_1.ALLOWED_HOSTS.includes(existing)) {
            newResponseHeaders[ACCESS_CONTROL_ALLOW_ORIGIN_HEADER] = NEW_HEADER_VALUE;
        }
    } else if (DIRECT_URLS.some((prefix) => url.startsWith(prefix))) {
        newResponseHeaders[ACCESS_CONTROL_ALLOW_ORIGIN_HEADER] = NEW_HEADER_VALUE;
    }
    return newResponseHeaders;
}
exports.corsHandler = corsHandler;
