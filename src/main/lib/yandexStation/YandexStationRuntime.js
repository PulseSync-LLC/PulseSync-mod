const { session: electronSession } = require('electron');
const { DEFAULTS } = require('./constants.js');
const { YandexStationService } = require('./YandexStationService.js');
const { sanitizeJson } = require('./sanitize.js');

const YANDEX_COOKIE_DOMAIN_PATTERN = /(^|\.)yandex\.|(^|\.)ya\.ru$/i;
const COOKIE_REFRESH_DEBOUNCE_MS = 3000;
const YANDEX_COOKIE_URLS = [
    'https://iot.quasar.yandex.ru',
    'https://quasar.yandex.net',
    'https://yandex.ru',
    'https://ya.ru',
    'https://music.yandex.ru',
    'https://passport.yandex.ru',
];

function isYandexCookie(cookie) {
    const domain = String(cookie?.domain ?? '').replace(/^\./, '');
    return YANDEX_COOKIE_DOMAIN_PATTERN.test(domain);
}

function cloneCache(value) {
    if (typeof structuredClone === 'function') {
        return structuredClone(value);
    }

    return JSON.parse(JSON.stringify(value));
}

function getCookieKey(cookie) {
    return [cookie.name, cookie.domain, cookie.path].join('|');
}

class YandexStationRuntime {
    constructor(options = {}) {
        this.logger = options.logger ?? console;
        this.session = options.session ?? electronSession.defaultSession;
        this.service =
            options.service ??
            new YandexStationService({
                logger: this.logger,
                mdnsTimeoutMs: options.mdnsTimeoutMs,
                requestTimeoutMs: options.requestTimeoutMs,
            });

        this.accountSpeakersCache = [];
        this.localSpeakersCache = [];
        this.accountSpeakersPromise = null;
        this.localSpeakersPromise = null;
        this.started = false;
        this.localSpeakersRefreshIntervalMs = options.localSpeakersRefreshIntervalMs ?? DEFAULTS.localSpeakersRefreshIntervalMs;
        this.localSpeakersRefreshInterval = null;
        this.localSpeakersLastLoggedCount = null;
        this.cookieRefreshTimer = null;
        this.cookieChangedHandler = null;
    }

    start() {
        if (this.started) return;

        this.started = true;
        this.attachCookieRefresh();

        void this.refreshAccountSpeakers();
        void this.refreshLocalSpeakers();

        this.localSpeakersRefreshInterval = setInterval(() => {
            void this.refreshLocalSpeakers();
        }, this.localSpeakersRefreshIntervalMs);
        this.localSpeakersRefreshInterval.unref?.();
    }

    getAccountSpeakersCache() {
        return cloneCache(this.accountSpeakersCache);
    }

    getLocalSpeakersCache() {
        return cloneCache(this.localSpeakersCache);
    }

    async getYandexCookiesFromSession() {
        const cookiesByKey = new Map();

        for (const url of YANDEX_COOKIE_URLS) {
            const cookies = await this.session.cookies.get({ url });
            cookies.filter(isYandexCookie).forEach((cookie) => cookiesByKey.set(getCookieKey(cookie), cookie));
        }

        if (cookiesByKey.size === 0) {
            const cookies = await this.session.cookies.get({});
            cookies.filter(isYandexCookie).forEach((cookie) => cookiesByKey.set(getCookieKey(cookie), cookie));
        }

        return Array.from(cookiesByKey.values());
    }

    async refreshAccountSpeakers() {
        if (this.accountSpeakersPromise) return await this.accountSpeakersPromise;

        this.accountSpeakersPromise = (async () => {
            try {
                const cookies = await this.getYandexCookiesFromSession();

                if (!cookies.length) {
                    this.logger.info?.('Yandex Station account speakers prewarm skipped: no Yandex cookies in Electron session');
                    return this.accountSpeakersCache;
                }

                this.logger.info?.('Yandex Station account speakers prewarm started', { cookies: cookies.length });
                this.service.setCookies(cookies);
                this.accountSpeakersCache = await this.service.getAccountSpeakers();
                this.logger.info?.('Yandex Station account speakers cache updated', { count: this.accountSpeakersCache.length });

                return this.accountSpeakersCache;
            } catch (error) {
                this.logger.warn?.(
                    'Yandex Station account speakers prewarm failed',
                    sanitizeJson({
                        code: error.code,
                        statusCode: error.statusCode,
                        endpoint: error.endpoint,
                        message: error.message,
                    }),
                );

                return this.accountSpeakersCache;
            } finally {
                this.accountSpeakersPromise = null;
            }
        })();

        return await this.accountSpeakersPromise;
    }

    async refreshLocalSpeakers() {
        if (this.localSpeakersPromise) return await this.localSpeakersPromise;

        this.localSpeakersPromise = (async () => {
            try {
                this.localSpeakersCache = await this.service.discoverLocalSpeakers();
                const count = this.localSpeakersCache.length;

                if (this.localSpeakersLastLoggedCount !== count) {
                    this.logger.info?.('Yandex Station local speakers cache updated', { count });
                    this.localSpeakersLastLoggedCount = count;
                } else {
                    this.logger.debug?.('Yandex Station local speakers cache refreshed', { count });
                }

                return this.localSpeakersCache;
            } catch (error) {
                this.logger.warn?.(
                    'Yandex Station local speakers discovery failed',
                    sanitizeJson({
                        code: error.code,
                        message: error.message,
                    }),
                );

                return this.localSpeakersCache;
            } finally {
                this.localSpeakersPromise = null;
            }
        })();

        return await this.localSpeakersPromise;
    }

    scheduleAccountSpeakersRefresh() {
        clearTimeout(this.cookieRefreshTimer);
        this.cookieRefreshTimer = setTimeout(() => {
            void this.refreshAccountSpeakers();
        }, COOKIE_REFRESH_DEBOUNCE_MS);
        this.cookieRefreshTimer.unref?.();
    }

    attachCookieRefresh() {
        if (this.cookieChangedHandler) return;

        this.cookieChangedHandler = (event, cookie) => {
            if (!isYandexCookie(cookie)) return;
            this.scheduleAccountSpeakersRefresh();
        };
        this.session.cookies.on('changed', this.cookieChangedHandler);
    }

    dispose() {
        clearTimeout(this.cookieRefreshTimer);
        clearInterval(this.localSpeakersRefreshInterval);
        this.localSpeakersRefreshInterval = null;

        if (this.cookieChangedHandler) {
            this.session.cookies.off('changed', this.cookieChangedHandler);
            this.cookieChangedHandler = null;
        }
    }
}

let runtime;

function getYandexStationRuntime(options = {}) {
    if (!runtime) {
        runtime = new YandexStationRuntime(options);
    }

    return runtime;
}

module.exports = {
    YandexStationRuntime,
    getYandexStationRuntime,
};
