const { io } = require('socket.io-client');
const crypto = require('node:crypto');
const net = require('net');
const EventEmitter = require('node:events');
const Logger_js_1 = require('../../packages/logger/Logger.js');
const store_js_1 = require('../store.js');
const store_js_2 = require('../../types/store.js');
const { Events } = require('../../types/events');
const { setAllowedUrls } = require('../handlers/handleHeadersReceived/corsHandler.js');
const { normalizeCanonicalSnapshot } = require('./isolatedAddonExecution.js');

const { mergeWithSystem, isSystemId, sanitizeId: sanitizeIdFromSystem } = require('./system/SystemAddons');

const USER_VALIDATION_REFRESH_INTERVAL_MS = 10 * 60 * 1000;
const USER_VALIDATION_RETRY_DELAY_MS = 60 * 1000;

function sanitizeId(name) {
    return sanitizeIdFromSystem(name);
}

function getAddonContentText(ext) {
    const css = typeof ext?.css === 'string' ? ext.css : '';
    const script = typeof ext?.script === 'string' ? ext.script : '';
    return `${css}\n${script}`;
}

function hasAddonScript(ext) {
    return !!ext?.script && !!String(ext.script).trim();
}

function mapExtensionsById(extensions) {
    const mapped = new Map();
    for (const ext of Array.isArray(extensions) ? extensions : []) {
        mapped.set(sanitizeId(ext.addon || ext.name), ext);
    }
    return mapped;
}

function canonicalizeAddonState(theme, extensions) {
    const normalizedTheme =
        !theme || String(theme.name || '').toLowerCase() === 'default'
            ? { name: 'default', css: '', script: '' }
            : {
                  name: String(theme.name || ''),
                  css: typeof theme.css === 'string' ? theme.css : '',
                  script: typeof theme.script === 'string' ? theme.script : '',
              };
    const normalizedExtensions = (Array.isArray(extensions) ? extensions : [])
        .map((extension) => ({
            addon: String(extension?.addon || ''),
            name: String(extension?.name || ''),
            directoryName: String(extension?.directoryName || ''),
            id: String(extension?.id || ''),
            css: typeof extension?.css === 'string' ? extension.css : '',
            script: typeof extension?.script === 'string' ? extension.script : '',
        }))
        .sort((left, right) => {
            const leftKey = JSON.stringify(left);
            const rightKey = JSON.stringify(right);
            return leftKey < rightKey ? -1 : leftKey > rightKey ? 1 : 0;
        });

    return { theme: normalizedTheme, extensions: normalizedExtensions };
}

function hashAddonState(theme, extensions) {
    return crypto
        .createHash('sha256')
        .update(JSON.stringify(canonicalizeAddonState(theme, extensions)))
        .digest('hex');
}

let singletonInstance = null;
const PULSE_SYNC_MANAGER_KEY = Symbol.for('pulsesync.manager.instance');

class PulseSyncManager extends EventEmitter {
    constructor(window) {
        super();
        this.window = window;
        this.webContents = window.webContents;
        this.logger = new Logger_js_1.Logger('PulseSyncManager');
        this.socket = null;
        this.wsUrl = 'http://localhost:2007';
        this.prevExtensions = [];
        this.sourceExtensions = [];
        this.currentTheme = null;
        this.cssContent = {};
        this.scriptContent = {};
        this.styleKeys = {};
        this.scriptKeys = {};
        this.isReloading = false;
        this.appLoaded = false;
        this.readySent = false;
        this._lastPlayerState = null;
        this.hasReloadedOnTheme = false;
        this._applyInFlight = null;
        this.reconnectDelaysMs = [3000, 8000, 15000, 30000, 60000, 120000];
        this.maxReconnectDelayMs = 120000;
        this.reconnectAttempt = 0;
        this.reconnectTimer = null;
        this.isConnecting = false;
        this.clientAuthorizationKnown = false;
        this.clientAuthorized = false;
        this.legacyClientAuthorized = false;
        this.userValidationTokenValidated = false;
        this.userValidationTokenTimer = null;
        this.userValidationRefreshTimer = null;
        this.userValidationRevision = 0;
        this.legacyPremiumTimer = null;
        this.isAuthorized = false;
        this.isPremium = false;
        this._addonSettingsSnapshot = {};
        this._allowedUrls = [];
        this._legacyAssetsRevision = 0;
        this._legacyAssetsFingerprint = null;
        this._webHostAddonsSnapshot = { runtime: 'isolated', hash: '', addons: [] };

        this.updatePlayerState = this.updatePlayerState.bind(this);
        this.updateDownloadInfo = this.updateDownloadInfo.bind(this);
        this.readyEvent = this.readyEvent.bind(this);
        this.getEnabledAddons = this.getEnabledAddons.bind(this);
        this.handlePulseSyncApi = this.handlePulseSyncApi.bind(this);
        this.acceptLegacyAuthorization = this.acceptLegacyAuthorization.bind(this);
        this.clearUserValidationToken = this.clearUserValidationToken.bind(this);
        this.scheduleUserValidationTokenExpiration = this.scheduleUserValidationTokenExpiration.bind(this);
        this.scheduleUserValidationTokenRefresh = this.scheduleUserValidationTokenRefresh.bind(this);
        this.syncAuthorizationState = this.syncAuthorizationState.bind(this);
        this.validateStoredUserValidationToken = this.validateStoredUserValidationToken.bind(this);
        this.validatePremium = this.validatePremium.bind(this);
        this.validateUserValidationToken = this.validateUserValidationToken.bind(this);
        this.updateAuthorizationState = this.updateAuthorizationState.bind(this);
        this.updatePremiumState = this.updatePremiumState.bind(this);
        this.prevExtensions = mergeWithSystem([]);
    }

    cloneAddonSettingsValue(value) {
        try {
            return JSON.parse(JSON.stringify(value || {}));
        } catch {
            return value || {};
        }
    }

    async injectThemesAndAddons() {
        if (process.argv.includes('--safe-mode')) {
            this.logger.warn('Safe mode enabled: skipping theme and addon injection');
            return;
        }
        if (!this.isAuthorized) {
            this.logger.warn('Authorization required: skipping theme and addon injection');
            return;
        }
        setAllowedUrls(this._allowedUrls);
        await this.handleExtensions(this.sourceExtensions);
        if (this.currentTheme && this.currentTheme.name.toLowerCase() !== 'default') {
            await this.handleTheme(this.currentTheme);
        }
    }

    async _ensureSingleApply(fn) {
        if (this._applyInFlight) return this._applyInFlight;
        this._applyInFlight = (async () => {
            try {
                await fn();
            } finally {
                this._applyInFlight = null;
            }
        })();
        return this._applyInFlight;
    }

    async readyEvent() {
        this.appLoaded = true;

        this.styleKeys = {};
        this.scriptKeys = {};

        await this._ensureSingleApply(async () => {
            await this.injectThemesAndAddons();
        });

        if (!this.readySent && this.socket?.connected && !this.isReloading) {
            this.sendReadyEvent();
        }
    }

    async updatePremiumState(isPremium, source = 'unknown') {
        const nextValue = Boolean(isPremium);
        const changed = this.isPremium !== nextValue;
        this.isPremium = nextValue;

        if (!changed) return;

        this.logger.info(`Premium state changed: ${this.isPremium} (${source})`);
        if (!this.webContents.isDestroyed()) {
            this.webContents.send(Events.PULSESYNC_PREMIUM_STATUS_CHANGED, this.isPremium);
        }

        if (!this.isPremium) return;
        if (!this.appLoaded) return;
        await this._ensureSingleApply(async () => {
            await this.handleExtensions(this.sourceExtensions);
        });
    }

    async updateAuthorizationState(isAuthorized, source = 'unknown') {
        const nextValue = Boolean(isAuthorized);
        const changed = this.isAuthorized !== nextValue;
        this.isAuthorized = nextValue;

        if (!changed) return;

        this.logger.info(`Authorization state changed: ${this.isAuthorized} (${source})`);

        if (this.isAuthorized) {
            if (!this.appLoaded) return;
            await this._ensureSingleApply(async () => {
                await this.injectThemesAndAddons();
            });
            if (!this.webContents.isDestroyed()) {
                this.webContents.send(Events.PULSESYNC_WEBHOST_ADDONS, this.getWebHostAddonsSnapshot());
            }
            return;
        }

        const hadActiveScripts = Object.keys(this.scriptContent).length > 0;
        this.prevExtensions = [];
        this.cssContent = {};
        this.scriptContent = {};
        this.styleKeys = {};
        this.scriptKeys = {};
        setAllowedUrls([]);
        this.publishLegacyAssets();
        if (!this.webContents.isDestroyed()) {
            this.webContents.send(Events.PULSESYNC_WEBHOST_ADDONS, { runtime: 'isolated', hash: '', addons: [] });
        }
        if (hadActiveScripts && this.appLoaded && !this.isReloading && !this.webContents.isDestroyed()) {
            this.safeReload('authorization lost');
        }
    }

    async syncAuthorizationState(source = 'unknown') {
        const isAuthorized = this.clientAuthorizationKnown
            ? this.clientAuthorized && this.userValidationTokenValidated
            : this.userValidationTokenValidated || this.legacyClientAuthorized;
        await this.updateAuthorizationState(isAuthorized, source);
    }

    clearUserValidationToken(forgetStoredToken = false) {
        this.userValidationRevision += 1;
        this.userValidationTokenValidated = false;
        if (this.userValidationTokenTimer) {
            clearTimeout(this.userValidationTokenTimer);
            this.userValidationTokenTimer = null;
        }
        if (this.userValidationRefreshTimer) {
            clearTimeout(this.userValidationRefreshTimer);
            this.userValidationRefreshTimer = null;
        }
        if (forgetStoredToken) {
            store_js_1.set(store_js_2.StoreKeys.USER_VALIDATION_TOKEN, null);
        }
    }

    scheduleUserValidationTokenExpiration(expiresAt) {
        if (this.userValidationTokenTimer) clearTimeout(this.userValidationTokenTimer);
        const delay = Math.max(1, expiresAt - Date.now());
        this.userValidationTokenTimer = setTimeout(() => {
            this.userValidationTokenTimer = null;
            this.userValidationTokenValidated = false;
            this.userValidationRevision += 1;
            store_js_1.set(store_js_2.StoreKeys.USER_VALIDATION_TOKEN, null);
            void this.updatePremiumState(false, 'USER_VALIDATION_TOKEN_EXPIRED');
            void this.syncAuthorizationState('USER_VALIDATION_TOKEN_EXPIRED');
        }, delay);
    }

    scheduleUserValidationTokenRefresh(tokenData, delayMs = USER_VALIDATION_REFRESH_INTERVAL_MS) {
        if (this.userValidationRefreshTimer) clearTimeout(this.userValidationRefreshTimer);
        const expiresAt = Number(tokenData?.expiresAt);
        if (!tokenData?.token || !Number.isFinite(expiresAt) || expiresAt <= Date.now()) return;
        const delay = Math.max(1, Math.min(delayMs, expiresAt - Date.now()));
        this.userValidationRefreshTimer = setTimeout(() => {
            this.userValidationRefreshTimer = null;
            void this.validateUserValidationToken(tokenData, 'STORED_USER_VALIDATION_TOKEN');
        }, delay);
    }

    async validateUserValidationToken(payload, source = 'USER_VALIDATION_TOKEN') {
        const token = typeof payload?.token === 'string' ? payload.token.trim() : '';
        if (!token) {
            this.clearUserValidationToken(true);
            await this.updatePremiumState(false, 'USER_VALIDATION_TOKEN_MISSING');
            await this.syncAuthorizationState('USER_VALIDATION_TOKEN_MISSING');
            return;
        }

        const revision = ++this.userValidationRevision;
        try {
            const response = await fetch('https://ru-node-1.pulsesync.dev/user/validation', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                signal: AbortSignal.timeout(5000),
            });
            const data = await response.json();
            if (revision !== this.userValidationRevision) return;

            const expiresAt = Number(data?.expiresAt);
            if (
                !response.ok ||
                data?.ok !== true ||
                data?.authorized !== true ||
                !Number.isFinite(expiresAt) ||
                expiresAt <= Date.now()
            ) {
                this.clearUserValidationToken(true);
                await this.updatePremiumState(false, 'USER_VALIDATION_TOKEN_INVALID');
                await this.syncAuthorizationState('USER_VALIDATION_TOKEN_INVALID');
                return;
            }

            this.userValidationTokenValidated = true;
            store_js_1.set(store_js_2.StoreKeys.USER_VALIDATION_TOKEN, { token, expiresAt });
            this.scheduleUserValidationTokenExpiration(expiresAt);
            this.scheduleUserValidationTokenRefresh({ token, expiresAt });
            await this.updatePremiumState(data.isPremium === true, source);
            await this.syncAuthorizationState(`${source}_VALID`);
        } catch (error) {
            if (revision !== this.userValidationRevision) return;
            this.logger.warn(`USER_VALIDATION_TOKEN validation error (${error.message})`);
            this.clearUserValidationToken();
            this.scheduleUserValidationTokenRefresh(payload, USER_VALIDATION_RETRY_DELAY_MS);
            await this.updatePremiumState(false, 'USER_VALIDATION_TOKEN_ERROR');
            await this.syncAuthorizationState('USER_VALIDATION_TOKEN_ERROR');
        }
    }

    async validateStoredUserValidationToken() {
        const tokenData = store_js_1.get(store_js_2.StoreKeys.USER_VALIDATION_TOKEN);
        if (!tokenData?.token) return;
        if (!Number.isFinite(Number(tokenData.expiresAt)) || Number(tokenData.expiresAt) <= Date.now()) {
            this.clearUserValidationToken(true);
            return;
        }
        await this.validateUserValidationToken(tokenData, 'STORED_USER_VALIDATION_TOKEN');
    }

    async acceptLegacyAuthorization(source) {
        if (this.clientAuthorizationKnown || this.legacyClientAuthorized) return;
        this.legacyClientAuthorized = true;
        this.logger.info(`AUTH_STATUS not received: using legacy client authorization (${source})`);
        await this.syncAuthorizationState(`LEGACY_${source}`);
    }

    start() {
        void this.validateStoredUserValidationToken();
        this.connectSocket();
        this.tryConnect();
    }

    clearReconnectTimer() {
        if (this.reconnectTimer) {
            clearTimeout(this.reconnectTimer);
            this.reconnectTimer = null;
        }
    }

    getReconnectDelayMs(attempt) {
        if (attempt < this.reconnectDelaysMs.length) {
            return this.reconnectDelaysMs[attempt];
        }

        const lastBaseDelay = this.reconnectDelaysMs[this.reconnectDelaysMs.length - 1];
        const extraStep = attempt - this.reconnectDelaysMs.length + 1;
        const grownDelay = lastBaseDelay * 2 ** extraStep;

        return Math.min(grownDelay, this.maxReconnectDelayMs);
    }

    scheduleReconnect(reason = '') {
        if (this.reconnectTimer) {
            return;
        }

        const attemptNumber = this.reconnectAttempt + 1;
        const delayMs = this.getReconnectDelayMs(this.reconnectAttempt);
        this.reconnectAttempt += 1;

        const reasonSuffix = reason ? ` (${reason})` : '';
        this.logger.warn(`Socket reconnect attempt #${attemptNumber} scheduled in ${Math.round(delayMs / 1000)}s${reasonSuffix}`);

        this.reconnectTimer = setTimeout(() => {
            this.reconnectTimer = null;
            this.tryConnect();
        }, delayMs);
    }

    async isPulseSyncReachable() {
        try {
            const parsed = new URL(this.wsUrl);
            const host = parsed.hostname || 'localhost';
            const defaultPort = parsed.protocol === 'https:' || parsed.protocol === 'wss:' ? 443 : 80;
            const port = Number(parsed.port || defaultPort);

            if (!Number.isFinite(port) || port <= 0) {
                return false;
            }

            return await new Promise((resolve) => {
                const socket = net.createConnection({ host, port });

                const finish = (result) => {
                    socket.removeAllListeners();
                    socket.destroy();
                    resolve(result);
                };

                socket.setTimeout(1500);
                socket.once('connect', () => finish(true));
                socket.once('timeout', () => finish(false));
                socket.once('error', () => finish(false));
            });
        } catch (e) {
            this.logger.warn(`isPulseSyncReachable: invalid wsUrl (${e.message})`);
            return false;
        }
    }

    async tryConnect() {
        if (!this.socket || this.socket.connected || this.isConnecting) {
            return;
        }

        const reachable = await this.isPulseSyncReachable();
        if (!reachable) {
            this.scheduleReconnect('PulseSync is not running');
            return;
        }

        this.isConnecting = true;
        this.logger.info('Trying to connect to PulseSync socket');
        this.socket.connect();
    }

    connectSocket() {
        if (this.socket) {
            return;
        }

        this.socket = io(this.wsUrl, {
            autoConnect: false,
            reconnection: false,
            path: '/socket.io',
            transports: ['websocket', 'polling'],
            query: { v: '1', type: 'yaMusic' },
        });

        this.socket.on('connect', async () => {
            this.logger.info('Socket.IO connected');
            this.emit('connected');
            this.isConnecting = false;
            this.reconnectAttempt = 0;
            this.clearReconnectTimer();
            this.hasReloadedOnTheme = false;

            if (this.isReloading) {
                await this._ensureSingleApply(async () => {
                    await this.reapplyAll();
                });
            }

            if (this.appLoaded) {
                this.sendReadyEvent();
            }
        });

        this.socket.on('disconnect', (reason) => {
            this.logger.warn(`Socket.IO disconnected: ${reason}`);
            this.isConnecting = false;
            this.readySent = false;
            this.clientAuthorizationKnown = false;
            this.clientAuthorized = false;
            this.legacyClientAuthorized = false;
            if (this.legacyPremiumTimer) {
                clearTimeout(this.legacyPremiumTimer);
                this.legacyPremiumTimer = null;
            }
            void this.syncAuthorizationState('SOCKET_DISCONNECT');
            this.emit('disconnected', reason);
            this.scheduleReconnect(reason);
        });

        this.socket.on('connect_error', (err) => {
            this.logger.warn(`Socket.IO connect_error: ${err.message}`);
            this.isConnecting = false;
            this.scheduleReconnect(err.message);
        });

        this.socket.on('PREMIUM_CHECK_TOKEN', async (args) => {
            if (!args?.token) {
                this.logger.warn('PREMIUM_CHECK_TOKEN: missing token in payload');
                return;
            }
            store_js_1.set(store_js_2.StoreKeys.PREMIUM_CHECK_TOKEN, {
                token: args.token,
                expiresAt: args.expiresAt,
            });
            try {
                const res = await fetch('https://ru-node-1.pulsesync.dev/user/subscription/validate', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${args.token}`,
                    },
                });
                const data = await res.json();
                await this.updatePremiumState(Boolean(data?.ok && data?.isPremium), 'PREMIUM_CHECK_TOKEN');
            } catch (error) {
                this.logger.warn(`PREMIUM_CHECK_TOKEN: validation error (${error.message})`);
                await this.updatePremiumState(false, 'PREMIUM_CHECK_TOKEN_ERROR');
            }
        });

        this.socket.on('AUTH_STATUS', async (payload) => {
            if (this.legacyPremiumTimer) {
                clearTimeout(this.legacyPremiumTimer);
                this.legacyPremiumTimer = null;
            }
            this.clientAuthorizationKnown = true;
            this.clientAuthorized = payload?.authorized === true;
            this.legacyClientAuthorized = false;
            if (!this.clientAuthorized) {
                this.clearUserValidationToken(true);
                await this.updatePremiumState(false, 'CLIENT_AUTH_STATUS');
            }
            await this.syncAuthorizationState('CLIENT_AUTH_STATUS');
        });

        this.socket.on('USER_VALIDATION_TOKEN', async (payload) => {
            await this.validateUserValidationToken(payload);
        });

        this.socket.on('PING', () => {
            if (!this.readySent && this.socket.connected && !this.isReloading) {
                this.sendReadyEvent();
            }
        });

        this.socket.on('REFRESH_EXTENSIONS', async (data) => {
            await this.acceptLegacyAuthorization('REFRESH_EXTENSIONS');
            const incoming = Array.isArray(data?.addons) ? data.addons : [];
            await this.handleExtensions(incoming);
        });

        this.socket.on('WEBHOST_ADDONS_SNAPSHOT', async (payload) => {
            await this.acceptLegacyAuthorization('WEBHOST_ADDONS_SNAPSHOT');
            let snapshot;
            try {
                snapshot = normalizeCanonicalSnapshot(payload, (error) => {
                    this.logger.warn(error instanceof Error ? error.message : String(error));
                });
            } catch (error) {
                this.logger.warn(error instanceof Error ? error.message : String(error));
                return;
            }
            if (snapshot.hash && snapshot.hash === this._webHostAddonsSnapshot.hash) return;

            this._webHostAddonsSnapshot = this.cloneAddonSettingsValue(snapshot);
            if (this.isAuthorized) {
                this.window.webContents.send(Events.PULSESYNC_WEBHOST_ADDONS, this._webHostAddonsSnapshot);
            }
        });

        this.socket.on('UPDATE_CSS', async (data) => {
            await this.acceptLegacyAuthorization('UPDATE_CSS');
            if (!this.isAuthorized) return;
            await this.handleCss({ css: data.theme?.css || '', name: data.theme?.name || 'theme' });
        });

        this.socket.on('ALLOWED_URLS', async (payload) => {
            await this.acceptLegacyAuthorization('ALLOWED_URLS');
            this._allowedUrls = Array.isArray(payload?.allowedUrls)
                ? payload.allowedUrls.filter((url) => typeof url === 'string' && url.trim())
                : [];
            if (!this.isAuthorized) return;
            this.logger.warn(`Allowed: ${this._allowedUrls}`);
            setAllowedUrls(this._allowedUrls);
        });

        this.socket.on('THEME', async (data) => {
            await this.acceptLegacyAuthorization('THEME');
            if (!data?.theme) {
                this.logger.info('[WARN] THEME payload missing');
                return;
            }
            const newTheme = data.theme;
            const incoming = newTheme.name.toLowerCase();
            const prev = this.currentTheme?.name.toLowerCase() || null;
            const themeChanged = prev !== incoming;

            if (!this.isAuthorized) {
                this.currentTheme = incoming === 'default' ? null : newTheme;
                this.logger.warn('Authorization required: skipping theme update');
                return;
            }

            if (incoming === 'default' && prev && prev !== 'default') {
                this.cssContent = {};
                this.styleKeys = {};
                this.scriptContent = {};
                this.scriptKeys = {};
                this.currentTheme = null;
                this.safeReload('theme switched to default');
                return;
            }

            if (prev === incoming && this.currentTheme?.css === newTheme.css && this.currentTheme?.script === newTheme.script) {
                return;
            }

            if (themeChanged && prev && prev !== 'default') {
                const previousThemeName = this.currentTheme?.name || prev;
                const previousCssKey = `css-${sanitizeId(previousThemeName)}`;
                const previousScriptKey = `theme-script-${sanitizeId(previousThemeName)}`;
                delete this.cssContent[previousCssKey];
                delete this.styleKeys[previousCssKey];
                delete this.scriptContent[previousScriptKey];
                delete this.scriptKeys[previousScriptKey];
            }

            this.currentTheme = newTheme;
            await this.handleTheme(newTheme, themeChanged);
        });

        this.socket.on('GET_TRACK_INFO', async () => {
            await this.handleGetTrackInfo();
        });

        this.socket.on('PULSESYNC_API_CALL', (payload) => {
            this.handlePulseSyncApi(payload);
        });

        this.socket.on('ADDON_SETTINGS_SNAPSHOT', (payload) => {
            const settings = payload?.settings && typeof payload.settings === 'object' && !Array.isArray(payload.settings) ? payload.settings : {};
            this._addonSettingsSnapshot = this.cloneAddonSettingsValue(settings);
            this.window.webContents.send(Events.PULSESYNC_SETTINGS, {
                type: 'snapshot',
                settings,
            });
        });

        this.socket.on('ADDON_SETTINGS_UPDATE', (payload) => {
            if (!payload?.addon || typeof payload.addon !== 'string') {
                this.logger.warn('ADDON_SETTINGS_UPDATE: missing addon id');
                return;
            }

            const settings = payload.settings && typeof payload.settings === 'object' && !Array.isArray(payload.settings) ? payload.settings : {};
            this._addonSettingsSnapshot = {
                ...this._addonSettingsSnapshot,
                [payload.addon]: this.cloneAddonSettingsValue(settings),
            };
            this.window.webContents.send(Events.PULSESYNC_SETTINGS, {
                type: 'update',
                addon: payload.addon,
                settings,
            });
        });
    }

    safeReload(reason = 'unknown') {
        this.logger.info(`safeReload: ${reason}`);
        if (this.socket?.connected) {
            this.socket.emit('UPDATE_DATA', { type: 'refresh' });
        } else {
            this.logger.warn('safeReload: socket not connected, skipping UPDATE_DATA emit');
        }
        this.isReloading = true;
        this.styleKeys = {};
        this.scriptKeys = {};
        this.webContents.reloadIgnoringCache();
    }

    async reapplyAll() {
        await this.injectThemesAndAddons();
        this.isReloading = false;
    }

    async handleExtensions(addons) {
        this.logger.info(process.argv);

        this.sourceExtensions = Array.isArray(addons) ? addons : [];

        if (process.argv.includes('--safe-mode')) {
            this.logger.warn('Safe mode enabled: skipping ddon injection');
            return;
        }
        if (!this.isAuthorized) {
            this.logger.warn('Authorization required: skipping addon injection');
            return;
        }

        const merged = mergeWithSystem(this.sourceExtensions);

        const unique = [];
        const seen = new Set();
        for (const ext of merged) {
            const id = sanitizeId(ext.addon || ext.name);
            if (!seen.has(id)) {
                seen.add(id);
                unique.push(ext);
            }
        }

        const filtered = unique;

        const prevMap = mapExtensionsById(this.prevExtensions);
        const nextMap = mapExtensionsById(filtered);
        let requiresReload = false;

        if (this.prevExtensions.length > 0) {
            for (const [id, prevExt] of prevMap) {
                const nextExt = nextMap.get(id);
                const prevHasScript = hasAddonScript(prevExt);
                const nextHasScript = hasAddonScript(nextExt);

                if (!nextExt) {
                    if (prevHasScript) {
                        requiresReload = true;
                        break;
                    }
                    continue;
                }

                if (prevHasScript !== nextHasScript) {
                    requiresReload = true;
                    break;
                }

                if (prevHasScript && String(prevExt.script) !== String(nextExt.script)) {
                    requiresReload = true;
                    break;
                }
            }

            if (!requiresReload) {
                for (const [id, nextExt] of nextMap) {
                    if (!prevMap.has(id) && hasAddonScript(nextExt)) {
                        requiresReload = true;
                        break;
                    }
                }
            }

            for (const [id] of prevMap) {
                if (nextMap.has(id)) continue;

                const cssKey = `css-${id}`;
                if (this.cssContent[cssKey]) {
                    delete this.cssContent[cssKey];
                    delete this.styleKeys[cssKey];
                }
            }
        }

        this.prevExtensions = filtered;

        for (const ext of filtered) {
            const base = sanitizeId(ext.addon || ext.name);

            await this.handleCss({ css: ext.css || '', name: base }, false);
        }

        for (const key of Object.keys(this.scriptContent)) {
            if (!key.startsWith('ext-script-')) continue;
            delete this.scriptContent[key];
            delete this.scriptKeys[key];
        }

        for (const ext of filtered) {
            const base = sanitizeId(ext.addon || ext.name);
            if (hasAddonScript(ext)) {
                const key = `ext-script-${base}`;
                this.logger.info(`Applying script: ${ext.name}${isSystemId(base) ? ' (system)' : ''}`);
                this.scriptContent[key] = String(ext.script);
                this.scriptKeys[key] = true;
            }
        }

        if (requiresReload) return this.safeReload('extension script set changed');
        this.publishLegacyAssets();
    }

    getEnabledAddons() {
        const scripts = [];

        for (const ext of Array.isArray(this.prevExtensions) ? this.prevExtensions : []) {
            const base = sanitizeId(ext.addon || ext.name);
            const cssKey = `css-${base}`;
            const scriptKey = `ext-script-${base}`;

            scripts.push({
                id: base,
                name: ext.name || ext.addon || base,
                cssApplied: !!this.styleKeys[cssKey],
                scriptApplied: !!this.scriptKeys[scriptKey],
                cssKey,
                scriptKey,
                isSystem: isSystemId(base),
            });
        }

        const theme = [];
        if (this.currentTheme && this.currentTheme.name) {
            const tName = this.currentTheme.name.replace(/\s+/g, '').toLowerCase();
            const cssKey = `css-${sanitizeId(tName)}`;
            const scriptKey = `theme-script-${sanitizeId(tName)}`;
            theme.push({
                name: tName,
                cssApplied: !!this.styleKeys[cssKey],
                scriptApplied: !!this.scriptKeys[scriptKey],
                cssKey,
                scriptKey,
            });
        }

        return { scripts, theme };
    }

    getAddonSettingsSnapshot() {
        return this.cloneAddonSettingsValue(this._addonSettingsSnapshot);
    }

    getLegacyAssetsSnapshot() {
        if (process.argv.includes('--safe-mode') || !this.isAuthorized) {
            return { runtime: 'legacy', revision: this._legacyAssetsRevision, styles: [], scripts: [] };
        }

        return {
            runtime: 'legacy',
            revision: this._legacyAssetsRevision,
            styles: Object.entries(this.cssContent).map(([id, css]) => ({ id, css })),
            scripts: Object.entries(this.scriptContent).map(([id, code]) => ({
                id,
                code,
                kind: id.startsWith('theme-script-') ? 'theme' : 'addon',
            })),
        };
    }

    getWebHostAddonsSnapshot() {
        if (process.argv.includes('--safe-mode') || !this.isAuthorized) return { runtime: 'isolated', hash: '', addons: [] };
        return this.cloneAddonSettingsValue(this._webHostAddonsSnapshot);
    }

    publishLegacyAssets() {
        const currentSnapshot = this.getLegacyAssetsSnapshot();
        const fingerprint = JSON.stringify({
            styles: [...currentSnapshot.styles].sort((left, right) => left.id.localeCompare(right.id)),
            scripts: [...currentSnapshot.scripts].sort((left, right) => left.id.localeCompare(right.id)),
        });
        if (fingerprint === this._legacyAssetsFingerprint) return currentSnapshot;

        this._legacyAssetsFingerprint = fingerprint;
        this._legacyAssetsRevision += 1;
        const snapshot = this.getLegacyAssetsSnapshot();
        if (!this.webContents || this.webContents.isDestroyed()) return snapshot;
        this.webContents.send(Events.PULSESYNC_LEGACY_ASSETS, snapshot);
        return snapshot;
    }

    async handleCss({ css, name }, publish = true) {
        const key = `css-${sanitizeId(name)}`;
        const old = this.cssContent[key] || '';
        if (!css?.trim() || css.trim() === '{}') {
            if (old) {
                delete this.cssContent[key];
                delete this.styleKeys[key];
                if (publish) this.publishLegacyAssets();
                return true;
            }
            return false;
        }
        if (!this.styleKeys[key] || this.isReloading || css !== old) {
            this.cssContent[key] = css;
            this.styleKeys[key] = true;
            if (publish) this.publishLegacyAssets();
            return true;
        }
        return false;
    }

    async handleTheme({ css = '', name = 'theme', script = '' }, themeChanged = false) {
        this.logger.info(process.argv);

        if (process.argv.includes('--safe-mode')) {
            this.logger.warn('Safe mode enabled: skipping theme injection');
            return;
        }
        if (!this.isAuthorized) {
            this.logger.warn('Authorization required: skipping theme injection');
            return;
        }

        this.logger.info(`Applying theme: ${name}`);
        await this.handleCss({ css, name }, false);

        const keyScript = `theme-script-${sanitizeId(name)}`;
        const oldScript = this.scriptContent[keyScript] || '';
        let scriptChanged = false;

        if (!script.trim()) {
            if (oldScript) {
                delete this.scriptContent[keyScript];
                delete this.scriptKeys[keyScript];
                this.safeReload(`theme script removed: ${name}`);
                return;
            }
        } else if (!this.scriptKeys[keyScript] || script !== oldScript) {
            this.scriptContent[keyScript] = script;
            this.scriptKeys[keyScript] = true;
            scriptChanged = true;
        }

        if (!this.isReloading && name.toLowerCase() !== 'default' && (themeChanged || scriptChanged) && !this.hasReloadedOnTheme) {
            this.hasReloadedOnTheme = true;
            this.safeReload(`theme changed: ${name}`);
            return;
        }

        this.publishLegacyAssets();
    }

    async handleGetTrackInfo() {
        if (!this._lastPlayerState?.track || this._lastPlayerState.track.durationMs === 0) {
            this.logger.warn('handleGetTrackInfo: invalid or empty track');
            return;
        }
        if (this.socket?.connected) {
            this.logger.info('handleGetTrackInfo: sending current track info');
            this.window.webContents.send(Events.GET_CURRENT_TRACK);
        } else {
            this.logger.warn('handleGetTrackInfo: socket not connected');
        }
    }

    updatePlayerState(state) {
        if (!state?.track?.durationMs || !state.progress?.duration) {
            this.logger.warn('updatePlayerState: invalid state');
            return;
        }
        if (state?.track.sourceType !== 'undefined') {
            state.track.sourceType = '';
        }
        this._lastPlayerState = state;
        if (this.socket?.connected) {
            this.socket.emit('UPDATE_DATA', state);
        } else {
            this.logger.warn('updatePlayerState: socket not connected');
        }
    }

    updateTrackInfo(state) {
        if (this.socket?.connected) {
            this.socket.emit('SEND_TRACK', { data: state });
        } else {
            this.logger.warn('updateTrackInfo: socket not connected');
        }
    }

    updateDownloadInfo(downloadInfo) {
        if (!this._lastPlayerState?.track) {
            this.logger.warn('updateDownloadInfo: no track available');
            return;
        }
        if (this.socket?.connected) {
            this.socket.emit('UPDATE_DATA', {
                ...this._lastPlayerState,
                downloadInfo,
                url: downloadInfo.downloadURL || null,
            });
        } else {
            this.logger.warn('updateDownloadInfo: socket not connected');
        }
    }

    handlePulseSyncApi(payload) {
        if (!this.isAuthorized) {
            this.logger.warn('Authorization required: ignoring PulseSync API call');
            return;
        }
        if (!payload?.action) {
            this.logger.warn('handlePulseSyncApi: missing action');
            return;
        }
        this.window.webContents.send(Events.PULSESYNC_API, payload);
    }

    sendReadyEvent() {
        if (this.socket?.connected) {
            this.socket.emit('READY', {
                addonStateHashVersion: 1,
                addonStateHash: hashAddonState(this.currentTheme, this.sourceExtensions),
                webHostAddonProtocolVersion: 2,
                userValidationProtocolVersion: 1,
            });
            if (this.legacyPremiumTimer) clearTimeout(this.legacyPremiumTimer);
            this.legacyPremiumTimer = setTimeout(() => {
                this.legacyPremiumTimer = null;
                if (this.clientAuthorizationKnown || !this.socket?.connected) return;
                void this.validatePremium();
                this.socket.emit('IS_PREMIUM_USER');
            }, 1000);
            this.readySent = true;
        } else {
            this.logger.warn('sendReadyEvent: socket not connected, skipping');
        }
    }

    async validatePremium() {
        if (this.userValidationTokenValidated) return;
        const tokenData = store_js_1.get(store_js_2.StoreKeys.PREMIUM_CHECK_TOKEN);
        if (!tokenData?.token) {
            this.logger.warn('validatePremium: no token available');
            this.isPremium = false;
            return;
        }
        try {
            const res = await fetch('https://ru-node-1.pulsesync.dev/user/subscription/validate', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${tokenData.token}`,
                },
            });
            const data = await res.json();
            if (data.ok) {
                await this.updatePremiumState(data.isPremium, 'validatePremium');
            } else {
                this.logger.warn(`validatePremium: validation failed (${data.message || 'no message'})`);
                await this.updatePremiumState(false, 'validatePremium_failed');
            }
        } catch (e) {
            this.logger.warn(`validatePremium: error during validation (${e.message})`);
            await this.updatePremiumState(false, 'validatePremium_error');
        }
    }

    get isConnected() {
        return this.socket?.connected || false;
    }

    get isPremiumUser() {
        return this.isPremium;
    }
}

function getPulseSyncManager(window) {
    const root = globalThis;
    if (!singletonInstance && root[PULSE_SYNC_MANAGER_KEY]) {
        singletonInstance = root[PULSE_SYNC_MANAGER_KEY];
    }

    if (!window) return singletonInstance;

    if (!singletonInstance) {
        singletonInstance = new PulseSyncManager(window);
        root[PULSE_SYNC_MANAGER_KEY] = singletonInstance;
    } else {
        singletonInstance.window = window;
        singletonInstance.webContents = window.webContents;
    }
    return singletonInstance;
}

module.exports = { getPulseSyncManager };
