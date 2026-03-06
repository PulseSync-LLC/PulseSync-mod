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

    const ensureApi = () => {
        if (window.pulsesyncApi) {
            return window.pulsesyncApi;
        }
        window.pulsesyncApi = {
            playerInstance: null,
            _pendingCalls: [],
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
    };

    ensureApi();
    registerDesktopListener();
})();
