(function () {
    if (typeof window !== 'undefined' && window.__WOLFYLIBRARY_LOADED__) {
        return;
    }
    if (typeof window !== 'undefined') {
        window.__WOLFYLIBRARY_LOADED__ = true;
    }

    class StylesManager {
        constructor() {
            this._styles = {};
        }

        add(id, style) {
            this._styles[id] = style;
        }

        remove(id) {
            if (this._styles[id]) {
                delete this._styles[id];
                return true;
            }
            return false;
        }

        clear() {
            this._styles = {};
        }

        get result() {
            return Object.values(this._styles).join('\n\n');
        }
    }

    class EventEmitter {
        constructor() {
            this.events = {};
        }

        on(eventName, callback) {
            if (!this.events[eventName]) this.events[eventName] = [];
            this.events[eventName].push(callback);
        }

        off(eventName, callback) {
            if (!this.events[eventName]) return;
            this.events[eventName] = this.events[eventName].filter((cb) => cb !== callback);
        }

        emit(eventName, data) {
            if (!this.events[eventName]) return;
            this.events[eventName].forEach((callback) => callback(data));
        }

        once(eventName, callback) {
            const onceCallback = (data) => {
                callback(data);
                this.off(eventName, onceCallback);
            };
            this.on(eventName, onceCallback);
        }

        removeAllListeners(eventName) {
            delete this.events[eventName];
        }
    }

    class SettingsManager extends EventEmitter {
        constructor(theme) {
            super();

            this.theme = theme;

            this.settings = {};

            this.old_settings = {};

            this._unsubscribe = null;

            this._subscribeTimer = null;
        }

        _createContextPayload() {
            return {
                settings: this.theme.settingsManager,
                styles: this.theme.stylesManager,
                state: this.theme.player.state,
            };
        }

        _clone(value) {
            if (typeof structuredClone === 'function') {
                return structuredClone(value);
            }

            try {
                return JSON.parse(JSON.stringify(value));
            } catch {
                return value;
            }
        }

        _isEqual(left, right) {
            try {
                return JSON.stringify(left) === JSON.stringify(right);
            } catch {
                return left === right;
            }
        }

        _extractItemValue(item) {
            if (item.bool != undefined) return item.bool;
            if (item.filePath != undefined) return item.filePath;
            if (item.input != undefined) return item.input;
            if (item.selected != undefined) return item.selected;
            return item.value;
        }

        _normalizeSettingsPayload(input) {
            if (!input || typeof input !== 'object' || Array.isArray(input)) {
                return {};
            }

            if (Array.isArray(input.sections)) {
                return this.transformJSON(input);
            }

            return this._clone(input);
        }

        _applySettings(nextSettings) {
            const normalizedSettings = this._normalizeSettingsPayload(nextSettings);
            const hasChanged = !this._isEqual(this.settings, normalizedSettings);
            if (!hasChanged) {
                return this.settings;
            }

            this.old_settings = this.settings;
            this.settings = normalizedSettings;
            const context = this._createContextPayload();

            this.emit('update', context);

            for (const id in this.settings) {
                if (this.hasChanged(id)) {
                    this.emit(`change:${id}`, context);
                }
            }

            return this.settings;
        }

        _subscribeToPulseSyncApi() {
            const source = window?.pulsesyncApi?.getSettings?.(this.theme.id);
            if (!source || typeof source.onChange !== 'function') {
                this._subscribeTimer = setTimeout(() => this._subscribeToPulseSyncApi(), 250);
                return;
            }

            this._subscribeTimer = null;
            this._unsubscribe = source.onChange((settings) => {
                this._applySettings(settings);
            });
        }

        start() {
            if (this._unsubscribe || this._subscribeTimer) {
                return;
            }

            this._subscribeToPulseSyncApi();
        }

        async update() {
            try {
                const source = window?.pulsesyncApi?.getSettings?.(this.theme.id);
                if (!source || typeof source.getCurrent !== 'function') {
                    return null;
                }

                const current = source.getCurrent();
                return this._applySettings(current);
            } catch (error) {
                console.error(error);
                return null;
            }
        }

        transformJSON(input) {
            const result = {};

            try {
                input.sections.forEach((section) => {
                    if (!Array.isArray(section?.items)) {
                        return;
                    }

                    section.items.forEach((item) => {
                        if (!item?.id) {
                            return;
                        }

                        if (item.type === 'text' && item.buttons) {
                            result[item.id] = {};
                            item.buttons.forEach((button) => {
                                if (!button?.id) {
                                    return;
                                }

                                result[item.id][button.id] = {
                                    value: button.text,
                                    default: button.defaultParameter,
                                };
                            });
                        } else {
                            result[item.id] = {
                                value: this._extractItemValue(item),
                                default: item.defaultParameter,
                            };
                        }
                    });
                });
            } catch (error) {
                console.error('Failed to transform JSON:', error);
            }

            return result;
        }

        get(id) {
            const keys = id.split('.');
            let value = this.settings;

            for (const key of keys) {
                value = value[key];
            }

            return value;
        }

        hasChanged(id) {
            const hasSettings = Object.keys(this.settings).length > 0;
            if (!hasSettings) return true;

            const keys = id.split('.');
            let value = this.settings;
            let oldValue = this.old_settings;

            for (const key of keys) {
                if (value === undefined || oldValue === undefined) return true;
                value = value[key];
                oldValue = oldValue[key];
            }

            return !this._isEqual(value, oldValue);
        }
    }

    class AssetsManager {
        constructor() {
            this._urlBase = 'http://localhost:2007/assets';
        }

        async getContent(fileName) {
            try {
                const response = await fetch(`${this._urlBase}/${fileName}`);
                if (!response.ok) {
                    throw new Error(`Ошибка сети: ${response.status}`);
                }

                const contentType = response.headers.get('Content-Type');

                if (contentType && contentType.includes('application/json')) {
                    return await response.json();
                } else {
                    return await response.text();
                }
            } catch (error) {
                console.error('Ошибка при получении данных:', error);
                throw error;
            }
        }

        getLink(fileName) {
            return `${this._urlBase}/${fileName}`;
        }

        get files() {
            return fetch(this._urlBase)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error(`Ошибка сети: ${response.status}`);
                    }

                    return response.json();
                })
                .then((data) => {
                    return data.files;
                })
                .catch((reason) => {
                    console.error('Ошибка при получении данных:', reason);
                });
            }
    }

    const getSharedPlayerEventsBridge = () => {
        if (typeof window === 'undefined') {
            return null;
        }

        if (window.__WOLFYLIBRARY_PLAYER_EVENTS_BRIDGE__) {
            return window.__WOLFYLIBRARY_PLAYER_EVENTS_BRIDGE__;
        }

        const subscribers = new Set();

        const notify = (eventName) => {
            subscribers.forEach((subscriber) => {
                subscriber._dispatchCustomEvent(eventName);
            });
        };

        const syncPage = () => {
            subscribers.forEach((subscriber) => {
                subscriber.state.page = window.location.pathname;
                subscriber._dispatchCustomEvent('pageChange');
            });
        };

        const playerCheck = (node) => {
            if (node.querySelector)
                return !node?.matches('[data-floating-ui-portal]') ? node.querySelector('[data-test-id="FULLSCREEN_PLAYER_MODAL"]') : null;
        };
        const textCheck = (node) => {
            return node.querySelector ? node.querySelector('[data-test-id="SYNC_LYRICS_CONTENT"]') : null;
        };
        const queueCheck = (node) => {
            return node.querySelector ? node.querySelector('.PlayQueue_root__ponhw') : null;
        };

        const ensureStarted = () => {
            if (window.__WOLFYLIBRARY_PLAYER_EVENTS_BRIDGE_STARTED__) {
                return;
            }

            if (!document.body) {
                setTimeout(ensureStarted, 100);
                return;
            }

            window.__WOLFYLIBRARY_PLAYER_EVENTS_BRIDGE_STARTED__ = true;

            const observer = new MutationObserver((mutations) => {
                for (const mutation of mutations) {
                    for (const node of mutation.addedNodes) {
                        const playerElement = playerCheck(node);
                        const textElement = textCheck(node);
                        const queueElement = queueCheck(node);

                        if (playerElement) notify('openPlayer');
                        else if (textElement) notify('openText');
                        else if (queueElement) notify('openQueue');
                    }

                    for (const node of mutation.removedNodes) {
                        const playerElement = playerCheck(node);
                        const textElement = textCheck(node);
                        const queueElement = queueCheck(node);

                        if (playerElement) notify('closePlayer');
                        else if (textElement) notify('closeText');
                        else if (queueElement) notify('closeQueue');
                    }
                }
            });

            observer.observe(document.body, {
                childList: true,
                subtree: true,
            });

            const pushState = history.pushState;
            const replaceState = history.replaceState;

            history.pushState = function (...args) {
                pushState.apply(this, args);
                syncPage();
            };

            history.replaceState = function (...args) {
                replaceState.apply(this, args);
                syncPage();
            };

            window.addEventListener('popstate', syncPage);
        };

        const bridge = {
            register(subscriber) {
                subscribers.add(subscriber);
                ensureStarted();
                subscriber.state.page = window.location.pathname;

                return () => {
                    subscribers.delete(subscriber);
                };
            },
        };

        window.__WOLFYLIBRARY_PLAYER_EVENTS_BRIDGE__ = bridge;
        return bridge;
    };

    class PlayerEvents extends EventEmitter {
        constructor(theme) {
            super();

            this.settingsManager = theme.settingsManager;

            this.stylesManager = theme.stylesManager;

            this.state = {
                speed: 1,
                status: 'paused',
                page: '',
                volume: 0,
                progress: {
                    duration: 0,
                    loaded: 0,
                    position: 0,
                    played: 0,
                },
                shuffle: false,
                repeat: '',
                track: {
                    albums: [],
                    artists: [],
                    available: true,
                    availableForOptions: [],
                    availableForPremiumUsers: true,
                    availableFullWithoutPermission: false,
                    coverUri: '',
                    derivedColors: { average: '', waveText: '', miniPlayer: '', accent: '' },
                    disclaimers: [],
                    durationMs: 0,
                    fade: { inStart: 0, inStop: 0, outStart: 0, outStop: 0 },
                    fileSize: 0,
                    id: '',
                    lyricsAvailable: true,
                    lyricsInfo: { hasAvailableSyncLyrics: true, hasAvailableTextLyrics: true },
                    major: { id: 0, name: '' },
                    ogImage: '',
                    previewDurationMs: 0,
                    r128: { i: 0, tp: 0 },
                    realId: '',
                    rememberPosition: true,
                    specialAudioResources: [],
                    storageDir: '',
                    title: '',
                    trackSharingFlag: '',
                    trackSource: '',
                    type: '',
                    version: '',
                },
            };

            this._detachSharedBridge = null;

            this._registerEvents();
        }

        _dispatchCustomEvent(eventName) {
            this.emit(eventName, {
                settings: this.settingsManager,
                styles: this.stylesManager,
                state: this.state,
            });
        }

        _registerEvents() {
            const tryRegister = () => {
                if (!window?.sonataState?.queueState?.currentEntity?.value?.entity?.data?.meta) {
                    setTimeout(tryRegister, 250);
                    return;
                }

                const sonataState = window.sonataState;
                const playerState = sonataState.playerState;
                const queueState = sonataState.queueState;

                const currentEntity = queueState.currentEntity;

                this.state.track = currentEntity.value.entity.data.meta;
                this.state.page = window.location.pathname;
                if (!this._detachSharedBridge) {
                    this._detachSharedBridge = getSharedPlayerEventsBridge()?.register(this) ?? null;
                }

                currentEntity.onChange((event) => {
                    this.state.track = event.entity.data.meta;
                    this._dispatchCustomEvent('trackChange');
                });

                playerState.status.onChange((status) => {
                    const prevStatus = this.state.status;
                    this.state.status = status;
                    switch (status) {
                        case 'playing':
                            if (prevStatus == 'playing') break;

                            this._dispatchCustomEvent('play');
                            break;
                        case 'paused':
                            if (prevStatus == 'paused') break;

                            this._dispatchCustomEvent('pause');
                            break;
                        default:
                            return;
                    }
                });

                playerState.event.onChange((event) => {
                    if (event == 'audio-set-progress') {
                        this._dispatchCustomEvent('seek');
                    }
                });

                playerState.progress.onChange((progress) => {
                    this.state.progress = progress;
                    this._dispatchCustomEvent('progressChange');
                });

                playerState.volume.onChange((volume) => {
                    this.state.volume = Math.round(100 * volume) / 100;
                    this._dispatchCustomEvent('volumeChange');
                });

                queueState.shuffle.onChange((shuffle) => {
                    this.state.shuffle = shuffle;
                    this._dispatchCustomEvent('shuffleChange');
                });

                queueState.repeat.onChange((repeat) => {
                    this.state.repeat = repeat;
                    this._dispatchCustomEvent('repeatChange');
                });
            };

            tryRegister();
        }
    }

    class Theme {
        constructor(id) {
            this.id = id;

            this.actions = {};

            this.stylesManager = new StylesManager();

            this.assetsManager = new AssetsManager();

            this.settingsManager = new SettingsManager(this);

            this.player = new PlayerEvents(this);
        }

        applyTheme() {
            for (const id in this.actions) {
                if (this.actions[id]) {
                    try {
                        this.actions[id]({
                            setting: this.settingsManager.get(id),
                            changed: this.settingsManager.hasChanged(id),
                            styles: this.stylesManager,
                            settings: this.settingsManager,
                            state: this.player.state,
                        });
                    } catch (e) {
                        console.error(`Error executing action for setting "${id}":`, e);
                    }
                }
            }

            this.applyStyles();
        }

        applyStyles() {
            let themeStylesElement = document.getElementById(`${this.id}-styles`);
            if (!themeStylesElement) {
                themeStylesElement = document.createElement('style');
                themeStylesElement.id = `${this.id}-styles`;
                document.head.appendChild(themeStylesElement);
            }

            themeStylesElement.textContent = this.stylesManager.result;
        }

        addAction(id, callback) {
            this.actions[id] = callback;
        }

        async update() {
            await this.settingsManager.update();
            if (!this.settingsManager.settings) return;

            this.applyTheme();
        }

        start(interval) {
            if (!this._settingsUpdateBound) {
                this._settingsUpdateBound = true;
                this.settingsManager.on('update', () => {
                    if (!this.settingsManager.settings) return;
                    this.applyTheme();
                });
            }

            this.settingsManager.start();
            this.update();
        }
    }

    if (typeof window !== 'undefined') {
        window.WolfyLibrary = {
            StylesManager,
            EventEmitter,
            SettingsManager,
            AssetsManager,
            PlayerEvents,
            Theme,
        };
        if (!window.Theme) {
            window.Theme = Theme;
        }
    }
})();
