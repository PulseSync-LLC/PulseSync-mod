window.findCssRuleByPartialName = function (pName) {
    const found = [];
    for (const sheet of document.styleSheets) {
        let rules;
        try {
            rules = sheet.cssRules;
        } catch {
            continue;
        }
        if (!rules) continue;
        for (const rule of rules) {
            if (rule.selectorText?.includes(pName)) {
                found.push(rule.selectorText);
            }
        }
    }
    return found;
};

(function initPulseSyncBridge() {
    if (window.__pulsesyncBridgeInitialized) {
        return;
    }
    window.__pulsesyncBridgeInitialized = true;

    const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
    const createEntityId = (trackId, albumId) => (albumId ? ''.concat(trackId, ':').concat(albumId) : trackId);
    const getPlayerInstance = () => window.pulsesyncApi?.playerInstance ?? null;
    const normalizeAddonId = (addonId) => String(addonId ?? '').trim();
    const isPlainObject = (value) => Boolean(value) && typeof value === 'object' && !Array.isArray(value);
    const cloneValue = (value) => {
        if (typeof structuredClone === 'function') {
            return structuredClone(value);
        }

        try {
            return JSON.parse(JSON.stringify(value));
        } catch {
            return value;
        }
    };
    const areSettingsEqual = (left, right) => {
        try {
            return JSON.stringify(left ?? {}) === JSON.stringify(right ?? {});
        } catch {
            return left === right;
        }
    };
    const YANDEX_STATION_EVENTS = {
        selectSpeaker: 'YANDEX_STATION_SELECT_SPEAKER',
        clearSpeaker: 'YANDEX_STATION_CLEAR_SPEAKER',
        control: 'YANDEX_STATION_CONTROL',
    };
    const YANDEX_STATION_BACK_THRESHOLD_SECONDS = 5;
    const yandexStationOriginalPlayerMethods = new WeakMap();
    const yandexStationOriginalMediaState = new WeakMap();
    const yandexStationOriginalGainState = new WeakMap();
    const yandexStationOriginalPlayerVolumeState = new WeakMap();

    const getEntityIdParts = (value) => {
        const rawId =
            value?.idWithContext ??
            value?.id ??
            value?.entityId ??
            value?.entityData?.meta?.idWithContext ??
            value?.entityData?.meta?.id ??
            value?.data?.meta?.idWithContext ??
            value?.data?.meta?.id ??
            value?.meta?.idWithContext ??
            value?.meta?.id;
        const [trackId, albumId] = String(rawId ?? '').split(':');

        return {
            trackId: trackId || undefined,
            albumId: albumId || value?.albumId || value?.entityData?.meta?.albumId || value?.data?.meta?.albumId,
        };
    };

    const getQueueEntityAt = (playerInst, index) => {
        const queue = playerInst?.state?.queueState?.entityList?.value ?? [];

        return queue[index]?.entity ?? queue[index] ?? null;
    };

    const getCurrentQueueIndex = (playerInst) => Number(playerInst?.state?.queueState?.index?.value ?? 0);
    const getCurrentProgressPosition = (playerInst) => Number(playerInst?.state?.playerState?.progress?.value?.position ?? 0);

    const collectGainNodes = (root) => {
        const result = new Set();
        const seen = new WeakSet();
        const queue = [{ value: root, depth: 0 }];

        while (queue.length) {
            const { value, depth } = queue.shift();
            if (!value || typeof value !== 'object') continue;
            if (seen.has(value)) continue;
            seen.add(value);

            if (value.gain && typeof value.gain.value === 'number') {
                result.add(value);
            }

            if (depth >= 5) continue;

            for (const key of Object.keys(value)) {
                if (key === 'parentNode' || key === 'ownerDocument' || key === 'document' || key === 'window') continue;

                try {
                    const child = value[key];
                    if (child && typeof child === 'object') queue.push({ value: child, depth: depth + 1 });
                } catch {}
            }
        }

        return Array.from(result);
    };

    const setLocalGainMuted = (muted) => {
        const playerInst = getPlayerInstance();

        collectGainNodes(playerInst).forEach((node) => {
            if (!yandexStationOriginalGainState.has(node)) {
                yandexStationOriginalGainState.set(node, node.gain.value);
            }

            if (muted) {
                node.gain.value = 0;
                return;
            }

            const originalValue = yandexStationOriginalGainState.get(node);
            if (typeof originalValue !== 'number') return;

            node.gain.value = originalValue;
            yandexStationOriginalGainState.delete(node);
        });
    };

    const setLocalPlayerVolumeMuted = (muted) => {
        const playerInst = getPlayerInstance();
        if (!playerInst) return;

        if (muted) {
            if (!yandexStationOriginalPlayerVolumeState.has(playerInst)) {
                yandexStationOriginalPlayerVolumeState.set(playerInst, {
                    volume: playerInst?.state?.playerState?.volume?.value,
                    exponentVolume: playerInst?.state?.playerState?.exponentVolume?.value,
                });
            }

            if (typeof playerInst.setVolume === 'function') {
                Promise.resolve(playerInst.setVolume(0)).catch(() => {});
                return;
            }

            if (playerInst?.state?.playerState?.volume) {
                playerInst.state.playerState.volume.value = 0;
            }
            return;
        }

        const original = yandexStationOriginalPlayerVolumeState.get(playerInst);
        if (!original) return;

        if (typeof playerInst.setVolume === 'function' && typeof original.volume === 'number') {
            Promise.resolve(playerInst.setVolume(original.volume)).catch(() => {});
        } else if (typeof playerInst.setExponentVolume === 'function' && typeof original.exponentVolume === 'number') {
            Promise.resolve(playerInst.setExponentVolume(original.exponentVolume)).catch(() => {});
        } else if (playerInst?.state?.playerState?.volume && typeof original.volume === 'number') {
            playerInst.state.playerState.volume.value = original.volume;
        }

        yandexStationOriginalPlayerVolumeState.delete(playerInst);
    };

    const setLocalMediaMuted = (muted) => {
        document.querySelectorAll('audio, video').forEach((media) => {
            if (!yandexStationOriginalMediaState.has(media)) {
                yandexStationOriginalMediaState.set(media, {
                    muted: media.muted,
                    volume: media.volume,
                });
            }

            if (muted) {
                media.muted = true;
                media.volume = 0;
                return;
            }

            const original = yandexStationOriginalMediaState.get(media);
            if (!original) return;

            media.muted = original.muted;
            media.volume = original.volume;
            yandexStationOriginalMediaState.delete(media);
        });
        setLocalPlayerVolumeMuted(muted);
        setLocalGainMuted(muted);
    };

    const notifyYandexStationCastChange = (detail) => {
        window.dispatchEvent(new CustomEvent('pulse-sync-yandex-station-cast-change', { detail }));
    };

    const createYandexStationCastBridge = () => ({
        activeSpeakerId: null,
        muteTimer: null,
        isActive() {
            return Boolean(this.activeSpeakerId);
        },
        startMuteGuard() {
            clearInterval(this.muteTimer);
            setLocalMediaMuted(true);
            this.muteTimer = setInterval(() => setLocalMediaMuted(true), 1000);
        },
        stopMuteGuard() {
            clearInterval(this.muteTimer);
            this.muteTimer = null;
            setLocalMediaMuted(false);
        },
        async activate(iotDeviceId) {
            const result = await window.desktopEvents?.invoke?.(YANDEX_STATION_EVENTS.selectSpeaker, iotDeviceId);
            if (!result?.ok) return result;

            this.activeSpeakerId = iotDeviceId;
            this.startMuteGuard();
            this.sendCurrentTrack();
            notifyYandexStationCastChange({ activeSpeakerId: this.activeSpeakerId });

            return result;
        },
        async clear() {
            this.activeSpeakerId = null;
            this.stopMuteGuard();
            notifyYandexStationCastChange({ activeSpeakerId: null });

            return await window.desktopEvents?.invoke?.(YANDEX_STATION_EVENTS.clearSpeaker);
        },
        sendCommand(action, payload = {}) {
            if (!this.isActive()) return Promise.resolve({ ok: false, reason: 'Yandex Station cast is not active' });

            const request = window.desktopEvents?.invoke?.(YANDEX_STATION_EVENTS.control, action, payload) ?? Promise.resolve({ ok: false });

            return request.catch((error) => {
                console.warn('Yandex Station command failed', error);
                return { ok: false, reason: error?.message };
            });
        },
        sendTrackFromEntity(entity) {
            const { trackId } = getEntityIdParts(entity);
            if (!trackId) return Promise.resolve({ ok: false, reason: 'Track id is missing' });

            return this.sendCommand('PLAY_TRACK', {
                type: 'track',
                trackId,
            });
        },
        sendCurrentTrack() {
            const playerInst = getPlayerInstance();
            const entity = playerInst?.state?.queueState?.currentEntity?.value?.entity;

            return this.sendTrackFromEntity(entity);
        },
    });

    const ensureYandexStationCastBridge = () => {
        if (!window.pulseSyncYandexStationCast) {
            window.pulseSyncYandexStationCast = createYandexStationCastBridge();
        }

        return window.pulseSyncYandexStationCast;
    };

    const callOriginalPlayerMethod = (playerInst, methodName, args) => {
        const originals = yandexStationOriginalPlayerMethods.get(playerInst);
        const method = originals?.[methodName];

        return typeof method === 'function' ? method.apply(playerInst, args) : undefined;
    };

    const wrapYandexStationPlayerMethod = (playerInst, methodName, handler) => {
        if (typeof playerInst?.[methodName] !== 'function') return;

        const originals = yandexStationOriginalPlayerMethods.get(playerInst) ?? {};
        if (originals[methodName]) return;

        originals[methodName] = playerInst[methodName];
        yandexStationOriginalPlayerMethods.set(playerInst, originals);

        playerInst[methodName] = function (...args) {
            return handler(playerInst, args);
        };
    };

    const installYandexStationPlayerProxy = (playerInst) => {
        if (!playerInst || yandexStationOriginalPlayerMethods.has(playerInst)) return;

        wrapYandexStationPlayerMethod(playerInst, 'togglePause', (playerInst, args) => {
            const bridge = ensureYandexStationCastBridge();
            if (bridge.isActive()) {
                const action = playerInst?.state?.playerState?.status?.value === 'playing' ? 'PAUSE' : 'PLAY';
                void bridge.sendCommand(action);
                setLocalMediaMuted(true);
            }

            return callOriginalPlayerMethod(playerInst, 'togglePause', args);
        });

        wrapYandexStationPlayerMethod(playerInst, 'moveForward', (playerInst, args) => {
            const bridge = ensureYandexStationCastBridge();
            if (bridge.isActive()) {
                const nextEntity = getQueueEntityAt(playerInst, getCurrentQueueIndex(playerInst) + 1);
                void (nextEntity ? bridge.sendTrackFromEntity(nextEntity) : bridge.sendCommand('MOVE_FORWARD'));
                setLocalMediaMuted(true);
            }

            return callOriginalPlayerMethod(playerInst, 'moveForward', args);
        });

        wrapYandexStationPlayerMethod(playerInst, 'moveBackward', (playerInst, args) => {
            const bridge = ensureYandexStationCastBridge();
            if (bridge.isActive()) {
                const position = getCurrentProgressPosition(playerInst);

                if (position > YANDEX_STATION_BACK_THRESHOLD_SECONDS) {
                    void bridge.sendCommand('SET_PROGRESS', { position: 0 });
                } else {
                    void bridge.sendCommand('MOVE_BACKWARD');
                }
                setLocalMediaMuted(true);
            }

            return callOriginalPlayerMethod(playerInst, 'moveBackward', args);
        });

        wrapYandexStationPlayerMethod(playerInst, 'setProgress', (playerInst, args) => {
            const bridge = ensureYandexStationCastBridge();
            if (bridge.isActive()) {
                void bridge.sendCommand('SET_PROGRESS', {
                    position: Math.max(Number(args[0]) || 0, 0),
                });
                setLocalMediaMuted(true);
            }

            return callOriginalPlayerMethod(playerInst, 'setProgress', args);
        });

        wrapYandexStationPlayerMethod(playerInst, 'setEntityByIndex', (playerInst, args) => {
            const bridge = ensureYandexStationCastBridge();
            if (bridge.isActive()) {
                const entity = getQueueEntityAt(playerInst, Number(args[0]));
                void bridge.sendTrackFromEntity(entity);
                setLocalMediaMuted(true);
            }

            return callOriginalPlayerMethod(playerInst, 'setEntityByIndex', args);
        });

        wrapYandexStationPlayerMethod(playerInst, 'playContext', (playerInst, args) => {
            const bridge = ensureYandexStationCastBridge();
            if (bridge.isActive()) {
                const payload = args[0];
                const entity = payload?.entitiesData?.[0] ?? payload?.queueParams ?? payload?.contextData?.meta;
                void bridge.sendTrackFromEntity(entity);
                setLocalMediaMuted(true);
            }

            return callOriginalPlayerMethod(playerInst, 'playContext', args);
        });
    };

    const callWithPlayer = (callback) => {
        const api = window.pulsesyncApi;
        if (!api) {
            return;
        }
        if (api.playerInstance) {
            callback(api.playerInstance);
            return;
        }
        api._pendingCalls.push(callback);
    };

    const tryStoreMethod = (store, methodNames, entityId) => {
        for (const methodName of methodNames) {
            if (typeof store?.[methodName] !== 'function') {
                continue;
            }
            try {
                return store[methodName](entityId);
            } catch {}
        }
        return false;
    };

    const notifySettingsListeners = (addonId) => {
        const api = window.pulsesyncApi;
        if (!api) {
            return;
        }

        const listeners = api._addonSettingsListeners.get(addonId);
        if (!listeners || listeners.size === 0) {
            return;
        }

        const nextSettings = cloneValue(api._addonSettings[addonId] ?? {});
        listeners.forEach((callback) => {
            callback(nextSettings);
        });
    };

    const applyAddonSettingsUpdate = (addonId, settings) => {
        const api = window.pulsesyncApi;
        const key = normalizeAddonId(addonId);
        if (!api || !key) {
            return;
        }

        const nextSettings = isPlainObject(settings) ? cloneValue(settings) : {};
        const prevSettings = api._addonSettings[key] ?? {};
        if (areSettingsEqual(prevSettings, nextSettings)) {
            return;
        }

        api._addonSettings[key] = nextSettings;
        notifySettingsListeners(key);
    };

    const applyAddonSettingsSnapshot = (snapshot) => {
        const api = window.pulsesyncApi;
        if (!api) {
            return;
        }

        const prevSnapshot = api._addonSettings;
        const nextSnapshot = {};

        if (isPlainObject(snapshot)) {
            Object.entries(snapshot).forEach(([addonId, settings]) => {
                const key = normalizeAddonId(addonId);
                if (!key) {
                    return;
                }

                nextSnapshot[key] = isPlainObject(settings) ? cloneValue(settings) : {};
            });
        }

        api._addonSettings = nextSnapshot;

        const changedKeys = new Set([...Object.keys(prevSnapshot), ...Object.keys(nextSnapshot)]);
        changedKeys.forEach((addonId) => {
            if (!areSettingsEqual(prevSnapshot[addonId] ?? {}, nextSnapshot[addonId] ?? {})) {
                notifySettingsListeners(addonId);
            }
        });
    };

    const requestInitialAddonSettingsSnapshot = async () => {
        if (!window.desktopEvents?.invoke) {
            window.setTimeout(requestInitialAddonSettingsSnapshot, 500);
            return;
        }

        try {
            const snapshot = await window.desktopEvents.invoke('PULSESYNC_SETTINGS_SNAPSHOT');
            ensureApi();
            applyAddonSettingsSnapshot(snapshot);
        } catch {}
    };

    const ensureApi = () => {
        if (window.pulsesyncApi) {
            window.__pulseSyncPendingPlayerInstance && installYandexStationPlayerProxy(window.__pulseSyncPendingPlayerInstance);
            return window.pulsesyncApi;
        }
        window.pulsesyncApi = {
            playerInstance: null,
            _pendingCalls: [],
            _addonSettings: {},
            _addonSettingsListeners: new Map(),
            _waitForPlayer: callWithPlayer,
            playVibe: (params = { screen: 'landing' }) => {
                const nativeFn = window.pulsesyncApi?.playVibeNative;
                if (typeof nativeFn === 'function') {
                    nativeFn(params);
                }
            },
            play: () => {
                callWithPlayer((playerInst) => {
                    playerInst.togglePause?.();
                });
            },
            pause: () => {
                callWithPlayer((playerInst) => {
                    playerInst.togglePause?.();
                });
            },
            togglePlayPause: () => {
                callWithPlayer((playerInst) => {
                    playerInst.togglePause?.();
                });
            },
            next: () => {
                callWithPlayer((playerInst) => {
                    playerInst.moveForward?.();
                });
            },
            previous: () => {
                callWithPlayer((playerInst) => {
                    playerInst.moveBackward?.();
                });
            },
            setRepeatMode: (mode) => {
                callWithPlayer((playerInst) => {
                    playerInst.setRepeatMode?.(mode);
                });
            },
            toggleShuffle: () => {
                callWithPlayer((playerInst) => {
                    playerInst.toggleShuffle?.();
                });
            },
            setVolume: (volume) => {
                callWithPlayer((playerInst) => {
                    playerInst.setExponentVolume?.(clamp(volume, 0, 100));
                });
            },
            setProgress: (progress) => {
                callWithPlayer((playerInst) => {
                    playerInst.setProgress?.(Math.max(progress, 0));
                });
            },
            playTrackById: (trackId, options = {}) => {
                callWithPlayer((playerInst) => {
                    const entityId = createEntityId(trackId, options?.albumId);
                    const queue = playerInst?.state?.queueState?.entityList?.value || [];
                    const currentId = playerInst?.state?.queueState?.currentEntity?.value?.entity?.entityData?.meta?.id;

                    if (currentId === entityId) {
                        playerInst.setProgress?.(0);
                        if (playerInst?.state?.playerState?.status?.value !== 'playing') {
                            playerInst.togglePause?.();
                        }
                        return;
                    }

                    const trackIndex = queue.findIndex((item) => item?.entity?.entityData?.meta?.id === entityId);
                    if (trackIndex !== -1) {
                        playerInst.setEntityByIndex?.(trackIndex);
                        return;
                    }

                    if (typeof playerInst?.playContext === 'function') {
                        const from = options?.from || playerInst?.state?.currentContext?.value?.contextData?.from || 'external';
                        playerInst.playContext({
                            contextData: { type: 'various', meta: { id: entityId }, from },
                            queueParams: { entityId },
                            loadContextMeta: true,
                            entitiesData: [{ type: 'unloaded', meta: { id: entityId } }],
                        });
                    }
                });
            },
            addTrackToQueueById: (trackId, options = {}) => {
                callWithPlayer((playerInst) => {
                    const entityId = createEntityId(trackId, options?.albumId);
                    const entitiesData = [{ type: 'unloaded', meta: { id: entityId } }];
                    if (options?.position === 'next' && typeof playerInst?.injectNext === 'function') {
                        playerInst.injectNext({ entitiesData });
                        return;
                    }
                    playerInst.injectLast?.({ entitiesData });
                });
            },
            likeTrack: (trackId, options = {}) => {
                const playerInst = getPlayerInstance();
                const entity = playerInst?.state?.queueState?.currentEntity?.value?.entity;
                const entityId = trackId ? createEntityId(trackId, options?.albumId) : entity?.entityData?.meta?.id;
                return tryStoreMethod(entity?.likeStore, ['likeTrack', 'setTrackLiked', 'addTrackLike', 'toggleTrackLike'], entityId);
            },
            unlikeTrack: (trackId, options = {}) => {
                const playerInst = getPlayerInstance();
                const entity = playerInst?.state?.queueState?.currentEntity?.value?.entity;
                const entityId = trackId ? createEntityId(trackId, options?.albumId) : entity?.entityData?.meta?.id;
                return tryStoreMethod(entity?.likeStore, ['unlikeTrack', 'removeTrackLike', 'setTrackUnliked'], entityId);
            },
            dislikeTrack: (trackId, options = {}) => {
                const playerInst = getPlayerInstance();
                const entity = playerInst?.state?.queueState?.currentEntity?.value?.entity;
                const entityId = trackId ? createEntityId(trackId, options?.albumId) : entity?.entityData?.meta?.id;
                return tryStoreMethod(entity?.likeStore, ['dislikeTrack', 'setTrackDisliked', 'addTrackDislike', 'toggleTrackDislike'], entityId);
            },
            undislikeTrack: (trackId, options = {}) => {
                const playerInst = getPlayerInstance();
                const entity = playerInst?.state?.queueState?.currentEntity?.value?.entity;
                const entityId = trackId ? createEntityId(trackId, options?.albumId) : entity?.entityData?.meta?.id;
                return tryStoreMethod(entity?.likeStore, ['undislikeTrack', 'removeTrackDislike', 'setTrackUndisliked'], entityId);
            },
            isTrackLiked: (trackId, albumId) => {
                const playerInst = getPlayerInstance();
                const entity = playerInst?.state?.queueState?.currentEntity?.value?.entity;
                const likeStore = entity?.likeStore;
                const entityId = trackId ? createEntityId(trackId, albumId) : entity?.entityData?.meta?.id;
                return entityId ? !!likeStore?.isTrackLiked?.(entityId) : false;
            },
            isTrackDisliked: (trackId, albumId) => {
                const playerInst = getPlayerInstance();
                const entity = playerInst?.state?.queueState?.currentEntity?.value?.entity;
                const likeStore = entity?.likeStore;
                const entityId = trackId ? createEntityId(trackId, albumId) : entity?.entityData?.meta?.id;
                return entityId ? !!likeStore?.isTrackDisliked?.(entityId) : false;
            },
            getState: () => getPlayerInstance()?.state,
            isPlaying: () => getPlayerInstance()?.state?.playerState?.status?.value === 'playing',
            getCurrentTrack: () => getPlayerInstance()?.state?.queueState?.currentEntity?.value?.entity?.entityData?.meta,
            getQueue: () => getPlayerInstance()?.state?.queueState?.entityList?.value,
            getProgress: () => getPlayerInstance()?.state?.playerState?.progress?.value,
            getDuration: () => getPlayerInstance()?.state?.queueState?.currentEntity?.value?.entity?.entityData?.meta?.duration,
            getVolume: () => getPlayerInstance()?.state?.playerState?.volume?.value,
            getRepeatMode: () => getPlayerInstance()?.state?.queueState?.repeat?.value,
            isShuffle: () => getPlayerInstance()?.state?.queueState?.shuffle?.value,
            getSettings: (addonId) => {
                const key = normalizeAddonId(addonId);
                return {
                    getCurrent: () => cloneValue(window.pulsesyncApi?._addonSettings?.[key] ?? {}),
                    onChange: (callback) => {
                        if (!key || typeof callback !== 'function') {
                            return () => {};
                        }

                        let listeners = window.pulsesyncApi._addonSettingsListeners.get(key);
                        if (!listeners) {
                            listeners = new Set();
                            window.pulsesyncApi._addonSettingsListeners.set(key, listeners);
                        }

                        listeners.add(callback);

                        if (Object.prototype.hasOwnProperty.call(window.pulsesyncApi._addonSettings, key)) {
                            callback(cloneValue(window.pulsesyncApi._addonSettings[key] ?? {}));
                        }

                        return () => {
                            const currentListeners = window.pulsesyncApi?._addonSettingsListeners?.get(key);
                            if (!currentListeners) {
                                return;
                            }

                            currentListeners.delete(callback);
                            if (currentListeners.size === 0) {
                                window.pulsesyncApi._addonSettingsListeners.delete(key);
                            }
                        };
                    },
                };
            },
            setPlayerInstance: (playerInst) => {
                installYandexStationPlayerProxy(playerInst);
                window.pulsesyncApi.playerInstance = playerInst;
                while (window.pulsesyncApi._pendingCalls.length > 0) {
                    const callback = window.pulsesyncApi._pendingCalls.shift();
                    callback(playerInst);
                }
            },
        };
        window.__pulseSyncPendingPlayerInstance && window.pulsesyncApi.setPlayerInstance(window.__pulseSyncPendingPlayerInstance);
        return window.pulsesyncApi;
    };

    const registerDesktopListener = () => {
        if (window.__pulsesyncDesktopListenerRegistered) {
            return;
        }
        if (!window.desktopEvents?.on) {
            window.setTimeout(registerDesktopListener, 500);
            return;
        }
        window.__pulsesyncDesktopListenerRegistered = true;
        window.desktopEvents.on('PULSESYNC_API', (event, payload) => {
            const pulseSyncApi = ensureApi();
            if (!pulseSyncApi || !payload?.action) {
                return;
            }
            const { action, trackId, albumId, options, args } = payload;
            const apiMethod = pulseSyncApi[action];
            if (typeof apiMethod !== 'function') {
                return;
            }
            if (Array.isArray(args)) {
                apiMethod(...args);
                return;
            }
            if (typeof trackId !== 'undefined') {
                apiMethod(trackId, { ...options, albumId });
                return;
            }
            apiMethod(options);
        });
        window.desktopEvents.on('PULSESYNC_SETTINGS', (event, payload) => {
            ensureApi();
            if (!payload?.type) {
                return;
            }

            if (payload.type === 'snapshot') {
                applyAddonSettingsSnapshot(payload.settings);
                return;
            }

            if (payload.type === 'update') {
                applyAddonSettingsUpdate(payload.addon, payload.settings);
            }
        });
    };

    ensureApi();
    registerDesktopListener();
    requestInitialAddonSettingsSnapshot();
})();
