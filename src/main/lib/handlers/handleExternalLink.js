'use strict';
const electron = require('electron');
const { Logger } = require('../../packages/logger/Logger.js');
const { UrlProtocol, resolveUrlByPolicy, classifyRendererUrl } = require('../desktopPolicy.js');
const { RendererTrustProfile } = require('../../types/desktop.js');
const { navigateToDeeplink } = require('./handleDeeplink.js');
const YANDEX_MUSIC_PROTOCOL = 'yandexmusic:';
const DESKTOP_NAVIGATION_PROTOCOLS = /* @__PURE__ */ new Set([UrlProtocol.HTTP, UrlProtocol.HTTPS, UrlProtocol.MAILTO, UrlProtocol.TEL, YANDEX_MUSIC_PROTOCOL]);
const DESKTOP_NAVIGATION_URL_POLICY = {
    allowedProtocols: DESKTOP_NAVIGATION_PROTOCOLS,
};
const externalNavigationLogger = new Logger('ExternalNavigation');
const openExternalUrl = (url) => {
    electron.shell.openExternal(url.href).then(
        () => externalNavigationLogger.info('External URL opened', url.protocol, url.hostname),
        () => externalNavigationLogger.error('External URL opening failed', url.protocol, url.hostname),
    );
};
const externalLinkLogger = new Logger('ExternalLink');
const isApplicationRenderer = (window) => {
    return Boolean(!window.isDestroyed() && !window.webContents.isDestroyed() && classifyRendererUrl(window.webContents.getURL()) === RendererTrustProfile.APPLICATION);
};
const handleExternalLink = (window) => {
    window.webContents.setWindowOpenHandler(({ url }) => {
        if (!isApplicationRenderer(window)) {
            externalLinkLogger.warn('External URL rejected', 'untrusted-renderer');
            return { action: 'deny' };
        }
        const result = resolveUrlByPolicy(url, DESKTOP_NAVIGATION_URL_POLICY);
        if (!result.isAllowed) {
            externalLinkLogger.warn('External URL rejected', result.reason);
            return { action: 'deny' };
        }
        setImmediate(() => {
            if (!isApplicationRenderer(window)) {
                externalLinkLogger.warn('External URL rejected', 'renderer-navigation-changed');
                return;
            }
            if (result.url.protocol === YANDEX_MUSIC_PROTOCOL) {
                navigateToDeeplink(window, result.url.href);
                return;
            }
            openExternalUrl(result.url);
        });
        return { action: 'deny' };
    });
};

exports.handleExternalLink = handleExternalLink;
