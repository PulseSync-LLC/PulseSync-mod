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
    const YANDEX_STATION_CROSSFADE_EVENT = 'ShouldAutomoveForward';
    const YANDEX_STATION_SYNC_SEEK_DELAY_MS = 500;
    const yandexStationOriginalPlayerMethods = new WeakMap();
    const yandexStationAutomaticTrackSyncState = new WeakMap();
    const yandexStationAudioGraphConnections = new WeakMap();
    const yandexStationAudioGraphNodes = new Set();
    const yandexStationAudioMuteGainByContext = new WeakMap();
    const yandexStationAudioMuteGainNodes = new WeakSet();
    const yandexStationMutedAudioConnections = [];
    let yandexStationLocalAudioMuted = false;

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
    const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    const getEntityStableId = (entity) => {
        const { trackId, albumId } = getEntityIdParts(entity);
        return trackId ? createEntityId(trackId, albumId) : null;
    };

    const getQueuePairEntity = (pair) => pair?.entity ?? pair ?? null;

    const getNextQueuePair = (playerInst) => {
        return playerInst?.state?.queueState?.nextEntity?.value ?? playerInst?.state?.queueState?.entityList?.value?.[getCurrentQueueIndex(playerInst) + 1] ?? null;
    };

    const rememberAudioConnection = (source, args) => {
        const destination = args[0];
        if (!source || !destination || typeof source !== 'object' || typeof destination !== 'object') return;

        const records = yandexStationAudioGraphConnections.get(source) ?? [];
        records.push({ source, destination, args });
        yandexStationAudioGraphConnections.set(source, records);
        yandexStationAudioGraphNodes.add(source);
    };

    const forgetAudioConnections = (source, args) => {
        const records = yandexStationAudioGraphConnections.get(source);
        if (!records) return;

        if (!args.length) {
            yandexStationAudioGraphConnections.set(source, []);
            return;
        }

        const [destinationOrOutput] = args;
        if (typeof destinationOrOutput === 'number') {
            return;
        }

        yandexStationAudioGraphConnections.set(
            source,
            records.filter((record) => record.destination !== destinationOrOutput),
        );
    };

    const getOriginalAudioConnect = () => window.__pulseSyncYandexStationOriginalAudioNodeConnect ?? window.AudioNode?.prototype?.connect;
    const getOriginalAudioDisconnect = () => window.__pulseSyncYandexStationOriginalAudioNodeDisconnect ?? window.AudioNode?.prototype?.disconnect;

    const isAudioDestination = (source, destination) => {
        return Boolean(
            destination &&
                typeof destination === 'object' &&
                ((typeof AudioDestinationNode !== 'undefined' && destination instanceof AudioDestinationNode) || destination === source?.context?.destination),
        );
    };

    const getMuteGainNode = (context) => {
        if (!context?.createGain) return null;

        let gainNode = yandexStationAudioMuteGainByContext.get(context);
        if (gainNode) return gainNode;

        gainNode = context.createGain();
        gainNode.gain.value = 0;
        yandexStationAudioMuteGainNodes.add(gainNode);
        yandexStationAudioMuteGainByContext.set(context, gainNode);

        return gainNode;
    };

    const routeAudioConnectionThroughMute = (source, args, shouldDisconnectOriginal = true) => {
        const destination = args[0];
        if (!isAudioDestination(source, destination) || yandexStationAudioMuteGainNodes.has(source)) return false;
        if (yandexStationMutedAudioConnections.some((connection) => connection.source === source && connection.destination === destination)) return true;

        const originalConnect = getOriginalAudioConnect();
        const originalDisconnect = getOriginalAudioDisconnect();
        const muteGain = getMuteGainNode(source.context);
        if (!originalConnect || !originalDisconnect || !muteGain) return false;

        const output = typeof args[1] === 'number' ? args[1] : 0;
        const input = typeof args[2] === 'number' ? args[2] : 0;

        if (shouldDisconnectOriginal) {
            try {
                originalDisconnect.apply(source, args);
            } catch {
                try {
                    originalDisconnect.call(source, destination);
                } catch {}
            }
        }

        try {
            originalConnect.call(source, muteGain, output, 0);
            originalConnect.call(muteGain, destination, 0, input);
            yandexStationMutedAudioConnections.push({ source, destination, args, muteGain, output, input });
            return true;
        } catch {
            return false;
        }
    };

    const unrouteMutedAudioConnection = (connection, restoreOriginal = true) => {
        const originalConnect = getOriginalAudioConnect();
        const originalDisconnect = getOriginalAudioDisconnect();
        if (!originalConnect || !originalDisconnect) return;

        try {
            originalDisconnect.call(connection.source, connection.muteGain);
        } catch {}

        try {
            originalDisconnect.call(connection.muteGain, connection.destination);
        } catch {}

        if (restoreOriginal) {
            try {
                originalConnect.apply(connection.source, connection.args);
                rememberAudioConnection(connection.source, connection.args);
            } catch {}
        }
    };

    const removeMutedAudioConnections = (source, args) => {
        const destination = args[0];
        let removed = false;
        for (let index = yandexStationMutedAudioConnections.length - 1; index >= 0; index -= 1) {
            const connection = yandexStationMutedAudioConnections[index];
            if (connection.source !== source) continue;
            if (args.length && destination && connection.destination !== destination && connection.muteGain !== destination) continue;

            yandexStationMutedAudioConnections.splice(index, 1);
            unrouteMutedAudioConnection(connection, false);
            removed = true;
        }

        return removed;
    };

    const installWebAudioGraphMonitor = () => {
        if (!window.AudioNode?.prototype || window.__pulseSyncYandexStationAudioGraphMonitorInstalled) return;

        const originalConnect = window.AudioNode.prototype.connect;
        const originalDisconnect = window.AudioNode.prototype.disconnect;
        window.__pulseSyncYandexStationAudioGraphMonitorInstalled = true;
        window.__pulseSyncYandexStationOriginalAudioNodeConnect = originalConnect;
        window.__pulseSyncYandexStationOriginalAudioNodeDisconnect = originalDisconnect;

        window.AudioNode.prototype.connect = function (...args) {
            if (yandexStationLocalAudioMuted && routeAudioConnectionThroughMute(this, args, false)) {
                rememberAudioConnection(this, args);
                return args[0];
            }

            const result = originalConnect.apply(this, args);
            rememberAudioConnection(this, args);
            return result;
        };

        window.AudioNode.prototype.disconnect = function (...args) {
            const removedMutedConnection = removeMutedAudioConnections(this, args);
            if (removedMutedConnection && args.length && typeof args[0] !== 'number') {
                forgetAudioConnections(this, args);
                return undefined;
            }

            const result = originalDisconnect.apply(this, args);
            forgetAudioConnections(this, args);
            return result;
        };
    };

    const setLocalAudioMuted = (muted) => {
        installWebAudioGraphMonitor();
        yandexStationLocalAudioMuted = muted;

        if (!muted) {
            while (yandexStationMutedAudioConnections.length) {
                const connection = yandexStationMutedAudioConnections.shift();
                unrouteMutedAudioConnection(connection, true);
            }
            return;
        }

        yandexStationAudioGraphNodes.forEach((source) => {
            const records = yandexStationAudioGraphConnections.get(source) ?? [];
            records.forEach((record) => {
                routeAudioConnectionThroughMute(source, record.args, true);
            });
        });
    };

    installWebAudioGraphMonitor();

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
            setLocalAudioMuted(true);
            this.muteTimer = setInterval(() => setLocalAudioMuted(true), 3000);
        },
        stopMuteGuard() {
            clearInterval(this.muteTimer);
            this.muteTimer = null;
            setLocalAudioMuted(false);
        },
        async activate(iotDeviceId) {
            const result = await window.desktopEvents?.invoke?.(YANDEX_STATION_EVENTS.selectSpeaker, iotDeviceId);
            if (!result?.ok) return result;

            this.activeSpeakerId = iotDeviceId;
            this.startMuteGuard();
            void this.sendCurrentTrack({ syncPosition: true });
            notifyYandexStationCastChange({ activeSpeakerId: this.activeSpeakerId });

            return result;
        },
        async clear() {
            await this.sendCommand('PAUSE');
            this.activeSpeakerId = null;
            this.stopMuteGuard();
            notifyYandexStationCastChange({ activeSpeakerId: null });

            return await window.desktopEvents?.invoke?.(YANDEX_STATION_EVENTS.clearSpeaker);
        },
        sendCommand(action, payload = {}) {
            if (!this.isActive()) return Promise.resolve({ ok: false, reason: 'Yandex Station cast is not active' });

            const request = window.desktopEvents?.invoke?.(YANDEX_STATION_EVENTS.control, action, payload) ?? Promise.resolve({ ok: false });

            return request
                .then((result) => {
                    return result;
                })
                .catch((error) => {
                    console.warn('Yandex Station command failed', error);
                    return { ok: false, reason: error?.message };
                });
        },
        async sendTrackFromEntity(entity, options = {}) {
            const { trackId, albumId } = getEntityIdParts(entity);
            if (!trackId) return Promise.resolve({ ok: false, reason: 'Track id is missing' });

            const response = await this.sendCommand('PLAY_TRACK', {
                type: 'track',
                trackId: createEntityId(trackId, albumId),
            });
            const position = Math.max(Number(options.position) || 0, 0);

            if (response?.ok && position > 0) {
                await wait(YANDEX_STATION_SYNC_SEEK_DELAY_MS);
                return await this.sendCommand('SET_PROGRESS', { position });
            }

            return response;
        },
        sendCurrentTrack(options = {}) {
            const playerInst = getPlayerInstance();
            const entity = playerInst?.state?.queueState?.currentEntity?.value?.entity;
            const position = options.syncPosition ? getCurrentProgressPosition(playerInst) : options.position;

            return this.sendTrackFromEntity(entity, { position });
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

    const syncYandexStationNextTrack = (playerInst, reason) => {
        const bridge = ensureYandexStationCastBridge();
        if (!bridge.isActive()) return;

        const currentPair = playerInst?.state?.queueState?.currentEntity?.value;
        const nextPair = getNextQueuePair(playerInst);
        const currentEntity = getQueuePairEntity(currentPair);
        const nextEntity = getQueuePairEntity(nextPair);
        const currentId = getEntityStableId(currentEntity);
        const nextId = getEntityStableId(nextEntity);
        if (!nextId) return;

        const state = yandexStationAutomaticTrackSyncState.get(playerInst) ?? {};
        const syncKey = `${currentId ?? 'unknown'}->${nextId}`;
        if (state.lastSentKey === syncKey) return;

        state.lastSentKey = syncKey;
        state.lastSentReason = reason;
        yandexStationAutomaticTrackSyncState.set(playerInst, state);

        void bridge.sendTrackFromEntity(nextEntity);
        bridge.startMuteGuard();
    };

    const installYandexStationAutomaticTrackSync = (playerInst) => {
        if (!playerInst || yandexStationAutomaticTrackSyncState.has(playerInst)) return;

        const state = {
            lastSentKey: null,
            unsubscribers: [],
        };
        yandexStationAutomaticTrackSyncState.set(playerInst, state);

        const eventUnsubscribe = playerInst?.state?.playerState?.event?.onChange?.((event) => {
            if (event === YANDEX_STATION_CROSSFADE_EVENT) {
                syncYandexStationNextTrack(playerInst, 'crossfade-event');
            }
        });
        const currentEntityUnsubscribe = playerInst?.state?.queueState?.currentEntity?.onChange?.(() => {
            state.lastSentKey = null;
        });

        [eventUnsubscribe, currentEntityUnsubscribe].forEach((unsubscribe) => {
            if (typeof unsubscribe === 'function') state.unsubscribers.push(unsubscribe);
        });
    };

    const installYandexStationPlayerProxy = (playerInst) => {
        if (!playerInst) return;
        installYandexStationAutomaticTrackSync(playerInst);
        if (yandexStationOriginalPlayerMethods.has(playerInst)) return;

        wrapYandexStationPlayerMethod(playerInst, 'togglePause', (playerInst, args) => {
            const bridge = ensureYandexStationCastBridge();
            if (bridge.isActive()) {
                const action = playerInst?.state?.playerState?.status?.value === 'playing' ? 'PAUSE' : 'PLAY';
                void bridge.sendCommand(action);
                bridge.startMuteGuard();
            }

            return callOriginalPlayerMethod(playerInst, 'togglePause', args);
        });

        wrapYandexStationPlayerMethod(playerInst, 'moveForward', (playerInst, args) => {
            const bridge = ensureYandexStationCastBridge();
            if (bridge.isActive()) {
                const nextEntity = getQueueEntityAt(playerInst, getCurrentQueueIndex(playerInst) + 1);
                void (nextEntity ? bridge.sendTrackFromEntity(nextEntity) : Promise.resolve({ ok: false, reason: 'Next queue entity is missing' }));
                bridge.startMuteGuard();
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
                    const prevEntity = getQueueEntityAt(playerInst, getCurrentQueueIndex(playerInst) - 1);
                    void (prevEntity ? bridge.sendTrackFromEntity(prevEntity) : Promise.resolve({ ok: false, reason: 'Previous queue entity is missing' }));
                }
                bridge.startMuteGuard();
            }

            return callOriginalPlayerMethod(playerInst, 'moveBackward', args);
        });

        wrapYandexStationPlayerMethod(playerInst, 'setProgress', (playerInst, args) => {
            const bridge = ensureYandexStationCastBridge();
            if (bridge.isActive()) {
                void bridge.sendCommand('SET_PROGRESS', {
                    position: Math.max(Number(args[0]) || 0, 0),
                });
                bridge.startMuteGuard();
            }

            return callOriginalPlayerMethod(playerInst, 'setProgress', args);
        });

        wrapYandexStationPlayerMethod(playerInst, 'setEntityByIndex', (playerInst, args) => {
            const bridge = ensureYandexStationCastBridge();
            if (bridge.isActive()) {
                const entity = getQueueEntityAt(playerInst, Number(args[0]));
                void bridge.sendTrackFromEntity(entity);
                bridge.startMuteGuard();
            }

            return callOriginalPlayerMethod(playerInst, 'setEntityByIndex', args);
        });

        wrapYandexStationPlayerMethod(playerInst, 'playContext', (playerInst, args) => {
            const bridge = ensureYandexStationCastBridge();
            const result = callOriginalPlayerMethod(playerInst, 'playContext', args);

            if (bridge.isActive()) {
                const syncAfterContextChange = () => {
                    setTimeout(() => {
                        void bridge.sendCurrentTrack({ syncPosition: true });
                    }, 0);
                };
                typeof result?.then === 'function' ? void Promise.resolve(result).then(syncAfterContextChange, syncAfterContextChange) : syncAfterContextChange();
                bridge.startMuteGuard();
            }

            return result;
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
