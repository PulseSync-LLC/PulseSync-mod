const { session: electronSession } = require('electron');
const { EventEmitter } = require('events');
const { DEFAULTS } = require('./constants.js');
const { YandexStationService } = require('./YandexStationService.js');
const { sanitizeJson } = require('./sanitize.js');

const YANDEX_COOKIE_DOMAIN_PATTERN = /(^|\.)yandex\.|(^|\.)ya\.ru$/i;
const COOKIE_REFRESH_DEBOUNCE_MS = 15000;
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

function normalizePlaybackStateValue(value) {
    if (typeof value !== 'string') return null;

    const state = value.toLowerCase();
    if (['playing', 'play', 'running'].includes(state)) return 'playing';
    if (['paused', 'pause', 'stopped', 'stop', 'idle'].includes(state)) return 'paused';

    return null;
}

function extractStationPlaybackState(value, depth = 0) {
    if (!value || typeof value !== 'object' || depth > 4) return null;

    const directCandidates = [
        value.playerState?.status?.value,
        value.playerState?.status,
        value.player_state?.status?.value,
        value.player_state?.status,
        value.playbackState?.value,
        value.playbackState,
        value.playback_state?.value,
        value.playback_state,
        value.status?.value,
        value.status,
    ];

    for (const candidate of directCandidates) {
        const normalized = normalizePlaybackStateValue(candidate);
        if (normalized) return normalized;
    }

    for (const [key, nestedValue] of Object.entries(value)) {
        const normalizedKey = key.toLowerCase();

        if ((normalizedKey === 'playing' || normalizedKey === 'isplaying') && typeof nestedValue === 'boolean') {
            return nestedValue ? 'playing' : 'paused';
        }

        if ((normalizedKey === 'paused' || normalizedKey === 'ispaused') && typeof nestedValue === 'boolean') {
            return nestedValue ? 'paused' : 'playing';
        }

        if (/playback|player|status|playing|paused/.test(normalizedKey)) {
            const normalized = normalizePlaybackStateValue(nestedValue);
            if (normalized) return normalized;

            const nested = extractStationPlaybackState(nestedValue, depth + 1);
            if (nested) return nested;
        }
    }

    return null;
}

function normalizeStationVolume(value) {
    const numericValue = Number(value);
    if (!Number.isFinite(numericValue)) return null;

    return Math.max(0, Math.min(1, numericValue > 1 ? numericValue / 100 : numericValue));
}

function extractStationVolume(value, depth = 0) {
    if (!value || typeof value !== 'object' || depth > 4) return null;

    const directCandidates = [
        value.volume?.value,
        value.volume,
        value.playerState?.volume?.value,
        value.playerState?.volume,
        value.playerState?.exponentVolume?.value,
        value.playerState?.exponentVolume,
        value.player_state?.volume?.value,
        value.player_state?.volume,
        value.playbackState?.volume?.value,
        value.playbackState?.volume,
        value.playback_state?.volume?.value,
        value.playback_state?.volume,
    ];

    for (const candidate of directCandidates) {
        const normalized = normalizeStationVolume(candidate);
        if (normalized !== null) return normalized;
    }

    for (const [key, nestedValue] of Object.entries(value)) {
        const normalizedKey = key.toLowerCase();

        if (/volume/.test(normalizedKey)) {
            const normalized = normalizeStationVolume(nestedValue);
            if (normalized !== null) return normalized;
        }

        if (/playback|player|state/.test(normalizedKey)) {
            const nested = extractStationVolume(nestedValue, depth + 1);
            if (nested !== null) return nested;
        }
    }

    return null;
}

function getVolumePercent(volume) {
    const normalized = normalizeStationVolume(volume);
    return normalized === null ? null : Math.round(normalized * 100);
}

class YandexStationRuntime extends EventEmitter {
    constructor(options = {}) {
        super();
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
        this.accountSpeakersReady = false;
        this.localSpeakersReady = false;
        this.accountSpeakersRefreshing = false;
        this.localSpeakersRefreshing = false;
        this.activeConnectionInfo = null;
        this.stateMonitorSocket = null;
        this.stateMonitorReconnectTimer = null;
        this.stateMonitorToken = 0;
        this.lastStationPlaybackState = null;
        this.lastStationVolumePercent = null;
    }

    start() {
        if (this.started) {
            this.enabled = true;
            this.emitStateChanged();
            return;
        }

        this.started = true;
        this.enabled = true;
        this.runId += 1;
        this.accountSpeakersReady = false;
        this.localSpeakersReady = false;
        this.attachCookieRefresh();
        this.emitStateChanged();

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
        this.activeConnectionInfo = null;
        this.stopActiveStateMonitor();
        this.accountSpeakersReady = false;
        this.localSpeakersReady = false;
        this.accountSpeakersRefreshing = false;
        this.localSpeakersRefreshing = false;
        this.logger.info?.('Yandex Station runtime stopped');
        this.emitStateChanged();
    }

    getState() {
        const accountSpeakers = this.getAccountSpeakersCache();
        const localSpeakers = this.getLocalSpeakersCache();

        return {
            enabled: this.enabled,
            accountSpeakers,
            localSpeakers,
            activeSpeaker: this.getActiveSpeaker(),
            accountSpeakersReady: this.enabled && this.accountSpeakersReady,
            localSpeakersReady: this.enabled && this.localSpeakersReady,
            firstFlowCompleted: this.enabled && this.accountSpeakersReady && this.localSpeakersReady,
            accountSpeakersRefreshing: this.enabled && this.accountSpeakersRefreshing,
            localSpeakersRefreshing: this.enabled && this.localSpeakersRefreshing,
            refreshing: this.enabled && (this.accountSpeakersRefreshing || this.localSpeakersRefreshing),
        };
    }

    emitStateChanged() {
        this.emit('stateChanged', this.getState());
    }

    emitPlaybackStateChanged(detail) {
        this.emit('playbackStateChanged', {
            speakerId: this.activeSpeakerId,
            ...detail,
        });
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

        this.stopActiveStateMonitor();
        this.activeSpeakerId = iotDeviceId;
        this.activeConnectionInfo = warmUpResult?.connectionInfo ?? null;
        this.lastStationPlaybackState = extractStationPlaybackState(warmUpResult?.state) ?? null;
        this.lastStationVolumePercent = getVolumePercent(warmUpResult?.volume ?? extractStationVolume(warmUpResult?.state));
        this.startActiveStateMonitor();
        this.emitStateChanged();

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
        this.activeConnectionInfo = null;
        this.stopActiveStateMonitor();
        this.emitStateChanged();

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
            if (action === 'PLAY' || action === 'PAUSE' || action === 'PLAY_TRACK') {
                this.lastStationPlaybackState = action === 'PAUSE' ? 'paused' : 'playing';
            }
            if (action === 'SET_VOLUME') {
                this.lastStationVolumePercent = getVolumePercent(payload.volume);
            }

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

    startActiveStateMonitor() {
        if (!this.enabled || !this.activeSpeakerId || !this.activeConnectionInfo) return;

        const monitorToken = ++this.stateMonitorToken;
        let socket;

        try {
            socket = this.service.connectLocalStateEvents(this.activeConnectionInfo, (message) => {
                if (monitorToken !== this.stateMonitorToken || !this.enabled || !this.activeSpeakerId) return;

                const playbackState = extractStationPlaybackState(message?.state);
                const volume = extractStationVolume(message?.state);
                const volumePercent = getVolumePercent(volume);
                const detail = {};

                if (playbackState && playbackState !== this.lastStationPlaybackState) {
                    this.lastStationPlaybackState = playbackState;
                    detail.playbackState = playbackState;
                }

                if (volumePercent !== null && volumePercent !== this.lastStationVolumePercent) {
                    this.lastStationVolumePercent = volumePercent;
                    detail.volume = volumePercent / 100;
                    detail.volumePercent = volumePercent;
                }

                if (detail.playbackState || detail.volumePercent !== undefined) {
                    this.emitPlaybackStateChanged(detail);
                }
            });
        } catch (error) {
            this.logger.debug?.('Yandex Station state monitor start failed', sanitizeJson({ code: error.code, message: error.message }));
            return;
        }

        this.stateMonitorSocket = socket;

        socket.on('error', (error) => {
            this.logger.debug?.('Yandex Station state monitor socket failed', sanitizeJson({ message: error.message }));
        });

        socket.on('close', () => {
            if (monitorToken !== this.stateMonitorToken || !this.enabled || !this.activeSpeakerId || !this.activeConnectionInfo) return;

            clearTimeout(this.stateMonitorReconnectTimer);
            this.stateMonitorReconnectTimer = setTimeout(() => {
                if (monitorToken === this.stateMonitorToken) this.startActiveStateMonitor();
            }, 3000);
            this.stateMonitorReconnectTimer.unref?.();
        });
    }

    stopActiveStateMonitor() {
        this.stateMonitorToken += 1;
        clearTimeout(this.stateMonitorReconnectTimer);
        this.stateMonitorReconnectTimer = null;

        const socket = this.stateMonitorSocket;
        this.stateMonitorSocket = null;
        this.lastStationPlaybackState = null;
        this.lastStationVolumePercent = null;

        if (socket) {
            socket.removeAllListeners();
            if (socket.readyState === 0 || socket.readyState === 1) {
                socket.close();
            }
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
            this.accountSpeakersRefreshing = true;
            this.emitStateChanged();
            try {
                if (!this.enabled || runId !== this.runId) return this.accountSpeakersCache;
                const cookies = await this.getYandexCookiesFromSession();

                if (!this.enabled || runId !== this.runId) return this.accountSpeakersCache;

                if (!cookies.length) {
                    this.logger.info?.('Yandex Station account speakers prewarm skipped: no Yandex cookies in Electron session');
                    this.accountSpeakersReady = true;
                    this.emitStateChanged();
                    return this.accountSpeakersCache;
                }

                this.logger.info?.('Yandex Station account speakers prewarm started', { cookies: cookies.length });
                this.service.setCookies(cookies);
                const accountSpeakers = await this.service.getAccountSpeakers();
                if (!this.enabled || runId !== this.runId) return this.accountSpeakersCache;
                this.accountSpeakersCache = accountSpeakers;
                this.accountSpeakersReady = true;
                this.logger.info?.('Yandex Station account speakers cache updated', { count: this.accountSpeakersCache.length });
                this.emitStateChanged();

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

                if (this.enabled && runId === this.runId) {
                    this.accountSpeakersReady = true;
                    this.emitStateChanged();
                }

                return this.accountSpeakersCache;
            } finally {
                if (this.enabled && runId === this.runId) {
                    this.accountSpeakersRefreshing = false;
                    this.emitStateChanged();
                }
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
            this.localSpeakersRefreshing = true;
            this.emitStateChanged();
            try {
                if (!this.enabled || runId !== this.runId) return this.localSpeakersCache;
                const localSpeakers = await this.service.discoverLocalSpeakers();
                if (!this.enabled || runId !== this.runId) return this.localSpeakersCache;
                this.localSpeakersCache = localSpeakers;
                this.localSpeakersReady = true;
                const count = this.localSpeakersCache.length;

                if (this.localSpeakersLastLoggedCount !== count) {
                    this.logger.info?.('Yandex Station local speakers cache updated', { count });
                    this.localSpeakersLastLoggedCount = count;
                } else {
                    this.logger.debug?.('Yandex Station local speakers cache refreshed', { count });
                }

                this.emitStateChanged();

                return this.localSpeakersCache;
            } catch (error) {
                this.logger.warn?.(
                    'Yandex Station local speakers discovery failed',
                    sanitizeJson({
                        code: error.code,
                        message: error.message,
                    }),
                );

                if (this.enabled && runId === this.runId) {
                    this.localSpeakersReady = true;
                    this.emitStateChanged();
                }

                return this.localSpeakersCache;
            } finally {
                if (this.enabled && runId === this.runId) {
                    this.localSpeakersRefreshing = false;
                    this.emitStateChanged();
                }
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
