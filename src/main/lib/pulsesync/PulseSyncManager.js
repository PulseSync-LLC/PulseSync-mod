const { io } = require('socket.io-client');
const net = require('net');
const EventEmitter = require('node:events');
const Logger_js_1 = require('../../packages/logger/Logger.js');
const store_js_1 = require('../store.js');
const store_js_2 = require('../../types/store.js');
const { applyCss, removeCss, applyScript, wrapThemeScript } = require('./utils/PulseSyncUtils');
const { Events } = require('../../types/events');
const { addAllowedUrls } = require('../handlers/handleHeadersReceived/corsHandler.js');

const { mergeWithSystem, isSystemId, sanitizeId: sanitizeIdFromSystem } = require('./system/SystemAddons');

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
        this.isPremium = false;
        this._addonSettingsSnapshot = {};

        this.updatePlayerState = this.updatePlayerState.bind(this);
        this.updateDownloadInfo = this.updateDownloadInfo.bind(this);
        this.readyEvent = this.readyEvent.bind(this);
        this.getEnabledAddons = this.getEnabledAddons.bind(this);
        this.handlePulseSyncApi = this.handlePulseSyncApi.bind(this);
        this.validatePremium = this.validatePremium.bind(this);
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

        if (!this.isPremium) return;
        if (!this.appLoaded) return;
        await this._ensureSingleApply(async () => {
            await this.handleExtensions(this.sourceExtensions);
        });
    }

    start() {
        this.connectSocket();
        this.tryConnect();
        this.validatePremium();
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

        this.socket.on('PING', () => {
            if (!this.readySent && this.socket.connected && !this.isReloading) {
                this.sendReadyEvent();
            }
        });

        this.socket.on('REFRESH_EXTENSIONS', (data) => {
            const incoming = Array.isArray(data?.addons) ? data.addons : [];
            this.handleExtensions(incoming);
        });

        this.socket.on('UPDATE_CSS', (data) => {
            this.handleCss({ css: data.theme?.css || '', name: data.theme?.name || 'theme' });
        });

        this.socket.on('ALLOWED_URLS', (payload) => {
            if (Array.isArray(payload?.allowedUrls) && payload.allowedUrls.length) {
                this.logger.warn(`Allowed: ${payload.allowedUrls}`);
                addAllowedUrls(payload.allowedUrls);
            }
        });

        this.socket.on('THEME', async (data) => {
            if (!data?.theme) {
                this.logger.info('[WARN] THEME payload missing');
                return;
            }
            const newTheme = data.theme;
            const incoming = newTheme.name.toLowerCase();
            const prev = this.currentTheme?.name.toLowerCase() || null;

            if (incoming === 'default' && prev && prev !== 'default') {
                const prevThemeId = sanitizeId(prev);
                const prevThemeScriptKey = `theme-script-${prevThemeId}`;
                const hadThemeScript = !!this.scriptContent[prevThemeScriptKey] || !!this.scriptKeys[prevThemeScriptKey];

                for (const key of Object.keys(this.cssContent)) {
                    await removeCss(this.window, key, this.styleKeys);
                }
                this.cssContent = {};
                this.styleKeys = {};
                this.scriptContent = {};
                this.scriptKeys = {};
                this.currentTheme = null;
                if (hadThemeScript) {
                    this.safeReload('theme switched to default with script');
                }
                return;
            }

            if (prev === incoming && this.currentTheme?.css === newTheme.css && this.currentTheme?.script === newTheme.script) {
                return;
            }

            this.currentTheme = newTheme;
            await this.handleTheme(newTheme);
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

        if (process.argv.includes('--safe-mode')) {
            this.logger.warn('Safe mode enabled: skipping ddon injection');
            return;
        }

        this.sourceExtensions = Array.isArray(addons) ? addons : [];
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

        if (this.prevExtensions.length > 0) {
            const prevMap = mapExtensionsById(this.prevExtensions);
            const nextMap = mapExtensionsById(filtered);
            let requiresReload = false;

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

            if (requiresReload) {
                this.prevExtensions = filtered;
                return this.safeReload('extension script set changed');
            }

            for (const [id] of prevMap) {
                if (nextMap.has(id)) continue;

                const cssKey = `css-${id}`;
                if (this.cssContent[cssKey]) {
                    delete this.cssContent[cssKey];
                    await removeCss(this.window, cssKey, this.styleKeys);
                }
            }
        }

        this.prevExtensions = filtered;

        for (const ext of filtered) {
            const base = sanitizeId(ext.addon || ext.name);

            await this.handleCss({ css: ext.css || '', name: base });

            const key = `ext-script-${base}`;
            const hasScript = hasAddonScript(ext);

            if (!hasScript && isSystemId(base)) {
                if (!this.scriptKeys[key]) {
                    this.logger.info(`System addon '${base}' had empty script in incoming list; preserving system version.`);
                }
                continue;
            }

            if (hasScript && !this.scriptKeys[key]) {
                this.logger.info(`Applying script: ${ext.name}${isSystemId(base) ? ' (system)' : ''}`);
                await applyScript(this.window, key, ext.script);
                this.scriptKeys[key] = true;
            } else if (!hasScript && this.scriptKeys[key]) {
                return this.safeReload(`extension script removed: ${base}`);
            }
        }
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

    async handleCss({ css, name }) {
        const key = `css-${sanitizeId(name)}`;
        const old = this.cssContent[key] || '';
        if (!css?.trim() || css.trim() === '{}') {
            if (old) {
                delete this.cssContent[key];
                await removeCss(this.window, key, this.styleKeys);
                return true;
            }
            return false;
        }
        if (!this.styleKeys[key] || this.isReloading || css !== old) {
            this.cssContent[key] = css;
            await applyCss(this.window, key, css, this.styleKeys);
            return true;
        }
        return false;
    }

    async handleTheme({ css = '', name = 'theme', script = '' }) {
        this.logger.info(process.argv);

        if (process.argv.includes('--safe-mode')) {
            this.logger.warn('Safe mode enabled: skipping theme injection');
            return;
        }

        this.logger.info(`Applying theme: ${name}`);
        await this.handleCss({ css, name });

        const keyScript = `theme-script-${sanitizeId(name)}`;
        const wrapped = wrapThemeScript(script);
        const oldWrapped = this.scriptContent[keyScript] || '';
        let scriptChanged = false;

        if (!script.trim()) {
            if (oldWrapped) {
                delete this.scriptContent[keyScript];
                delete this.scriptKeys[keyScript];
                this.safeReload(`theme script removed: ${name}`);
                return;
            }
        } else if (!this.scriptKeys[keyScript] || wrapped !== oldWrapped) {
            this.scriptContent[keyScript] = wrapped;
            this.scriptKeys[keyScript] = true;
            await applyScript(this.window, keyScript, wrapped);
            scriptChanged = true;
        }

        if (!this.isReloading && name.toLowerCase() !== 'default' && scriptChanged && !this.hasReloadedOnTheme) {
            this.hasReloadedOnTheme = true;
            this.safeReload(`theme script changed: ${name}`);
        }
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
        if (!payload?.action) {
            this.logger.warn('handlePulseSyncApi: missing action');
            return;
        }
        this.window.webContents.send(Events.PULSESYNC_API, payload);
    }

    sendReadyEvent() {
        if (this.socket?.connected) {
            this.socket.emit('READY');
            this.socket.emit('IS_PREMIUM_USER');
            this.readySent = true;
        } else {
            this.logger.warn('sendReadyEvent: socket not connected, skipping');
        }
    }

    async validatePremium() {
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
