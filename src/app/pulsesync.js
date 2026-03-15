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
                window.pulsesyncApi.playerInstance = playerInst;
                while (window.pulsesyncApi._pendingCalls.length > 0) {
                    const callback = window.pulsesyncApi._pendingCalls.shift();
                    callback(playerInst);
                }
            },
        };
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
