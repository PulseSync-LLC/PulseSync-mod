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
        this.activeSpeakerId = null;
        this.cookieRefreshTimer = null;
        this.cookieChangedHandler = null;
        this.enabled = false;
        this.runId = 0;
    }

    start() {
        if (this.started) return;

        this.started = true;
        this.enabled = true;
        this.runId += 1;
        this.attachCookieRefresh();

        void this.refreshAccountSpeakers();
        void this.refreshLocalSpeakers();

        this.localSpeakersRefreshInterval = setInterval(() => {
            void this.refreshLocalSpeakers();
        }, this.localSpeakersRefreshIntervalMs);
        this.localSpeakersRefreshInterval.unref?.();
    }

    async stop() {
        if (!this.started && !this.enabled) return;

        try {
            await this.clearSpeaker();
        } catch (error) {
            this.logger.warn?.(
                'Yandex Station runtime stop clear failed',
                sanitizeJson({
                    code: error.code,
                    statusCode: error.statusCode,
                    endpoint: error.endpoint,
                    message: error.message,
                }),
            );
        }

        this.enabled = false;
        this.runId += 1;
        this.dispose();
        this.started = false;
        this.accountSpeakersCache = [];
        this.localSpeakersCache = [];
        this.localSpeakersLastLoggedCount = null;
        this.accountSpeakersPromise = null;
        this.localSpeakersPromise = null;
        this.activeSpeakerId = null;
        this.logger.info?.('Yandex Station runtime stopped');
    }

    getAccountSpeakersCache() {
        if (!this.enabled) return [];
        return cloneCache(this.accountSpeakersCache);
    }

    getLocalSpeakersCache() {
        if (!this.enabled) return [];
        return cloneCache(this.localSpeakersCache);
    }

    getResolvedSpeakersCache() {
        if (!this.enabled) return [];
        const usedLocalSpeakers = new Set();

        return this.accountSpeakersCache.map((accountSpeaker) => {
            const localSpeaker = this.service.findMatchingLocalSpeaker(accountSpeaker, this.localSpeakersCache, usedLocalSpeakers);
            if (localSpeaker) usedLocalSpeakers.add(localSpeaker);

            return {
                accountSpeaker,
                localSpeaker: localSpeaker ?? undefined,
                canUseCloud: true,
                canUseLocal: Boolean(localSpeaker),
                canCast: Boolean(localSpeaker && accountSpeaker.isCastCandidate),
                reason: localSpeaker ? undefined : 'No matching local _yandexio._tcp.local speaker was discovered',
            };
        });
    }

    getActiveSpeaker() {
        if (!this.activeSpeakerId) return null;

        return this.getResolvedSpeakersCache().find((speaker) => speaker.accountSpeaker?.id === this.activeSpeakerId) ?? null;
    }

    async selectSpeaker(iotDeviceId) {
        if (!this.enabled) {
            return {
                ok: false,
                reason: 'Yandex Station cast is disabled',
            };
        }

        const speaker = this.getResolvedSpeakersCache().find((speaker) => speaker.accountSpeaker?.id === iotDeviceId);

        if (!speaker?.canUseLocal) {
            return {
                ok: false,
                reason: 'Yandex Station is not available in the local network',
            };
        }

        let warmUpResult;

        try {
            warmUpResult = await this.service.warmUpLocalSpeaker(speaker);
        } catch (error) {
            this.logger.warn?.(
                'Yandex Station speaker selection failed',
                sanitizeJson({
                    code: error.code,
                    statusCode: error.statusCode,
                    endpoint: error.endpoint,
                    message: error.message,
                }),
            );

            return {
                ok: false,
                code: error.code,
                reason: error.message,
            };
        }

        this.activeSpeakerId = iotDeviceId;

        return {
            ok: true,
            speaker: cloneCache(speaker),
            state: warmUpResult?.state ? cloneCache(warmUpResult.state) : undefined,
            volume: warmUpResult?.volume,
        };
    }

    async clearSpeaker() {
        const speaker = this.getActiveSpeaker();
        if (speaker?.canUseLocal) {
            try {
                await this.service.sendLocalMediaCommand(speaker, 'PAUSE');
            } catch (error) {
                this.logger.warn?.(
                    'Yandex Station speaker clear stop failed',
                    sanitizeJson({
                        code: error.code,
                        statusCode: error.statusCode,
                        endpoint: error.endpoint,
                        message: error.message,
                    }),
                );
            }
        }

        this.activeSpeakerId = null;

        return {
            ok: true,
        };
    }

    async sendMediaCommand(action, payload = {}) {
        if (!this.enabled) {
            return {
                ok: false,
                reason: 'Yandex Station cast is disabled',
            };
        }

        const speaker = this.getActiveSpeaker();

        if (!speaker?.canUseLocal) {
            return {
                ok: false,
                reason: 'No active local Yandex Station speaker',
            };
        }

        try {
            const response = await this.service.sendLocalMediaCommand(speaker, action, payload);

            return {
                ok: true,
                response,
            };
        } catch (error) {
            this.logger.warn?.(
                'Yandex Station media command failed',
                sanitizeJson({
                    action,
                    code: error.code,
                    statusCode: error.statusCode,
                    endpoint: error.endpoint,
                    message: error.message,
                }),
            );

            return {
                ok: false,
                code: error.code,
                reason: error.message,
            };
        }
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
        if (!this.enabled) return this.accountSpeakersCache;
        if (this.accountSpeakersPromise) return await this.accountSpeakersPromise;

        this.accountSpeakersPromise = (async () => {
            const runId = this.runId;
            try {
                if (!this.enabled || runId !== this.runId) return this.accountSpeakersCache;
                const cookies = await this.getYandexCookiesFromSession();

                if (!this.enabled || runId !== this.runId) return this.accountSpeakersCache;

                if (!cookies.length) {
                    this.logger.info?.('Yandex Station account speakers prewarm skipped: no Yandex cookies in Electron session');
                    return this.accountSpeakersCache;
                }

                this.logger.info?.('Yandex Station account speakers prewarm started', { cookies: cookies.length });
                this.service.setCookies(cookies);
                const accountSpeakers = await this.service.getAccountSpeakers();
                if (!this.enabled || runId !== this.runId) return this.accountSpeakersCache;
                this.accountSpeakersCache = accountSpeakers;
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
        if (!this.enabled) return this.localSpeakersCache;
        if (this.localSpeakersPromise) return await this.localSpeakersPromise;

        this.localSpeakersPromise = (async () => {
            const runId = this.runId;
            try {
                if (!this.enabled || runId !== this.runId) return this.localSpeakersCache;
                const localSpeakers = await this.service.discoverLocalSpeakers();
                if (!this.enabled || runId !== this.runId) return this.localSpeakersCache;
                this.localSpeakersCache = localSpeakers;
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
        if (!this.enabled) return;
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
