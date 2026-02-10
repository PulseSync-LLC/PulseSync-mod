'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.handleHeadersReceived = void 0;
const { URL } = require('url');
const framesHandler_js_1 = require('./framesHandler.js');
const corsHandler_js_1 = require('./corsHandler.js');
const experimentOverridesHandler_js_1 = require('./remoteExperimentsOverride.js');

const filter = { urls: ['*://*/*'] };
const apiFilter = { urls: ['https://api.music.yandex.net/*'] };

const LASTFM_HOSTS = ['lastfm.freetls.fastly.net', 'www.last.fm', 'last.fm'];
const LASTFM_PREFIXES = LASTFM_HOSTS.map((host) => `https://${host}/`);
const LOCAL_PREFIX = 'http://localhost:2007/';
const FONTS_PREFIX = 'https://fonts.googleapis.com/';

function isLastfmUrl(url) {
    return LASTFM_PREFIXES.some((prefix) => url.startsWith(prefix));
}

exports.handleHeadersReceived = (window) => {
    const session = window.webContents.session;
    const handlers = [corsHandler_js_1.corsHandler, framesHandler_js_1.framesHandler, experimentOverridesHandler_js_1.experimentOverridesHandler];
    const originMap = new Map();

    session.webRequest.onBeforeSendHeaders(filter, (details, callback) => {
        const origin = details.requestHeaders['origin'] || details.requestHeaders['Origin'];
        if (origin) originMap.set(details.id, origin);
        callback({ requestHeaders: details.requestHeaders });
    });

    session.webRequest.onBeforeRequest({ urls: ['*://*/*'] }, (details, callback) => {
        const url = details.url;
        let protocol = '';
        try {
            protocol = new URL(url).protocol;
        } catch {
            callback({ cancel: true });
            return;
        }
        if (!['http:', 'https:'].includes(protocol)) {
            callback({ cancel: false });
            return;
        }
        if (url.startsWith(LOCAL_PREFIX) || url.startsWith(FONTS_PREFIX) || isLastfmUrl(url) || corsHandler_js_1.isUrlAllowed(url)) {
            callback({ cancel: false });
        } else {
            callback({ cancel: true });
        }
    });

    session.webRequest.onHeadersReceived(filter, (details, callback) => {
        let responseHeaders = handlers.reduce((acc, handler) => handler(acc, details), details.responseHeaders || {});

        for (const name of Object.keys(responseHeaders)) {
            if (name.toLowerCase() === 'access-control-allow-origin') {
                delete responseHeaders[name];
            }
        }

        const url = details.url;
        const origin = originMap.get(details.id);
        originMap.delete(details.id);

        if (url.startsWith(LOCAL_PREFIX) || url.startsWith(FONTS_PREFIX)) {
            responseHeaders['access-control-allow-origin'] = ['*'];
            responseHeaders['access-control-allow-credentials'] = ['true'];
        } else if (origin && corsHandler_js_1.isUrlAllowed(url)) {
            responseHeaders['access-control-allow-origin'] = [origin];
            responseHeaders['access-control-allow-credentials'] = ['true'];
        }

        callback({ responseHeaders });
    });
};
