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
    const DEFAULT_VIBE_SEEDS = ['user:onyourwave'];
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
        playbackState: 'YANDEX_STATION_PLAYBACK_STATE',
    };
    const YANDEX_STATION_BACK_THRESHOLD_SECONDS = 5;
    const YANDEX_STATION_CROSSFADE_EVENT = 'ShouldAutomoveForward';
    const YANDEX_STATION_SYNC_SEEK_DELAY_MS = 500;
    const YANDEX_STATION_LOCAL_TRACK_START_DELAY_CAP_MS = 750;
    const YANDEX_STATION_PLAYBACK_TRANSITION_GUARD_MS = 2000;
    const YANDEX_STATION_VOLUME_STEP = 5;
    const YANDEX_STATION_VOLUME_THROTTLE_MS = 250;
    const YANDEX_STATION_CAST_SETTING_KEY = 'modSettings.playerBarEnhancement.enableYandexStationCast';
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

    const isPlayerPlaying = (playerInst) => playerInst?.state?.playerState?.status?.value === 'playing';
    const getCurrentQueueIndex = (playerInst) => Number(playerInst?.state?.queueState?.index?.value ?? 0);
    const getCurrentProgressPosition = (playerInst) => Number(playerInst?.state?.playerState?.progress?.value?.position ?? 0);
    const getCurrentPlayerVolume = (playerInst) => {
        const volume = Number(playerInst?.state?.playerState?.exponentVolume?.value ?? playerInst?.state?.playerState?.volume?.value);
        return Number.isFinite(volume) ? clamp(volume, 0, 1) : undefined;
    };
    const setPlayerVolume = (playerInst, volume) => {
        const normalizedVolume = Number(volume);
        if (!playerInst || !Number.isFinite(normalizedVolume)) return;

        playerInst.setExponentVolume?.(clamp(normalizedVolume, 0, 1));
    };
    const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    const runAfterStationStart = (stationStartPromise, callback) => {
        return Promise.race([Promise.resolve(stationStartPromise).catch(() => undefined), wait(YANDEX_STATION_LOCAL_TRACK_START_DELAY_CAP_MS)]).then(callback);
    };
    const normalizeYandexStationVolume = (value) => {
        const numericValue = Number(value);
        if (!Number.isFinite(numericValue)) return null;

        const percentValue = clamp(numericValue > 1 ? numericValue : numericValue * 100, 0, 100);
        const steppedPercent = clamp(Math.round(percentValue / YANDEX_STATION_VOLUME_STEP) * YANDEX_STATION_VOLUME_STEP, 0, 100);

        return {
            percent: steppedPercent,
            normalized: steppedPercent / 100,
        };
    };
    const isYandexStationCastEnabled = () => {
        try {
            if (typeof window.ENABLE_YANDEX_STATION_CAST === 'function') {
                return window.ENABLE_YANDEX_STATION_CAST() !== false;
            }

            return window.nativeSettings?.get?.(YANDEX_STATION_CAST_SETTING_KEY) !== false;
        } catch {
            return true;
        }
    };

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
        initialTrackSent: false,
        lastVolumePercent: null,
        pendingVolume: null,
        volumeThrottleTimer: null,
        playbackTransitionGuardTimer: null,
        pendingStationPause: false,
        lastVolumeSentAt: 0,
        savedClientVolume: undefined,
        suppressVolumeSync: false,
        isActive() {
            return isYandexStationCastEnabled() && Boolean(this.activeSpeakerId);
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
        startPlaybackTransitionGuard() {
            const transitionAlreadyActive = Boolean(this.playbackTransitionGuardTimer);
            clearTimeout(this.playbackTransitionGuardTimer);
            if (!transitionAlreadyActive) this.pendingStationPause = false;
            this.playbackTransitionGuardTimer = setTimeout(() => {
                this.playbackTransitionGuardTimer = null;
                if (!this.pendingStationPause) return;

                this.pendingStationPause = false;
                syncLocalPlaybackState(false);
            }, YANDEX_STATION_PLAYBACK_TRANSITION_GUARD_MS);
        },
        stopPlaybackTransitionGuard() {
            clearTimeout(this.playbackTransitionGuardTimer);
            this.playbackTransitionGuardTimer = null;
            this.pendingStationPause = false;
        },
        async activate(iotDeviceId) {
            if (!isYandexStationCastEnabled()) {
                return { ok: false, reason: 'Yandex Station cast is disabled' };
            }

            const result = await window.desktopEvents?.invoke?.(YANDEX_STATION_EVENTS.selectSpeaker, iotDeviceId);
            if (!result?.ok) return result;

            this.stopPlaybackTransitionGuard();

            const playerInst = getPlayerInstance();
            const stationVolume = Number(result.volume ?? result.state?.volume);
            if (this.savedClientVolume === undefined) {
                this.savedClientVolume = getCurrentPlayerVolume(playerInst);
            }
            if (Number.isFinite(stationVolume)) {
                this.suppressVolumeSync = true;
                try {
                    setPlayerVolume(playerInst, stationVolume);
                } finally {
                    this.suppressVolumeSync = false;
                }

                const normalizedStationVolume = normalizeYandexStationVolume(stationVolume);
                this.lastVolumePercent = normalizedStationVolume?.percent ?? null;
            } else {
                this.lastVolumePercent = null;
            }

            this.activeSpeakerId = iotDeviceId;
            this.initialTrackSent = false;
            this.pendingVolume = null;
            clearTimeout(this.volumeThrottleTimer);
            this.volumeThrottleTimer = null;
            this.lastVolumeSentAt = 0;

            if (isPlayerPlaying(getPlayerInstance())) {
                this.startMuteGuard();
                void this.sendInitialCurrentTrack();
            }

            notifyYandexStationCastChange({ activeSpeakerId: this.activeSpeakerId });

            return result;
        },
        async clear() {
            const playerInst = getPlayerInstance();
            const volumeToRestore = this.savedClientVolume;

            this.pendingVolume = null;
            clearTimeout(this.volumeThrottleTimer);
            this.volumeThrottleTimer = null;
            this.lastVolumeSentAt = 0;

            if (this.activeSpeakerId) {
                await this.sendCommand('PAUSE', {}, { syncLocalPlayback: false, ignoreEnabled: true });
            }
            this.activeSpeakerId = null;
            this.initialTrackSent = false;
            this.lastVolumePercent = null;
            this.savedClientVolume = undefined;
            this.stopPlaybackTransitionGuard();
            this.stopMuteGuard();
            if (volumeToRestore !== undefined) {
                this.suppressVolumeSync = true;
                try {
                    setPlayerVolume(playerInst, volumeToRestore);
                } finally {
                    this.suppressVolumeSync = false;
                }
            }
            notifyYandexStationCastChange({ activeSpeakerId: null });

            return await window.desktopEvents?.invoke?.(YANDEX_STATION_EVENTS.clearSpeaker);
        },
        sendCommand(action, payload = {}, options = {}) {
            if (!options.ignoreEnabled && !isYandexStationCastEnabled()) return Promise.resolve({ ok: false, reason: 'Yandex Station cast is disabled' });
            if (!this.activeSpeakerId) return Promise.resolve({ ok: false, reason: 'Yandex Station cast is not active' });

            if (['PLAY', 'MOVE_FORWARD', 'MOVE_BACKWARD', 'SET_PROGRESS', 'PLAY_TRACK'].includes(action)) {
                this.startPlaybackTransitionGuard();
            }

            const request = window.desktopEvents?.invoke?.(YANDEX_STATION_EVENTS.control, action, payload) ?? Promise.resolve({ ok: false });

            return request
                .then((result) => {
                    if (result?.ok && options.syncLocalPlayback !== false) {
                        if (action === 'PLAY') syncLocalPlaybackState(true);
                        if (action === 'PAUSE') syncLocalPlaybackState(false);
                    }

                    return result;
                })
                .catch((error) => {
                    console.warn('Yandex Station command failed', error);
                    return { ok: false, reason: error?.message };
                });
        },
        flushPendingVolume() {
            this.volumeThrottleTimer = null;

            const nextVolume = this.pendingVolume;
            this.pendingVolume = null;
            if (!nextVolume || nextVolume.percent === this.lastVolumePercent) return;

            this.lastVolumePercent = nextVolume.percent;
            this.lastVolumeSentAt = Date.now();
            void this.sendCommand('SET_VOLUME', { volume: nextVolume.normalized });
            this.startMuteGuard();
        },
        sendVolume(value) {
            const volume = normalizeYandexStationVolume(value);
            if (!volume) return;
            if (volume.percent === this.lastVolumePercent) {
                this.pendingVolume = null;
                return;
            }

            const elapsedSinceLastSend = Date.now() - this.lastVolumeSentAt;
            if (!this.lastVolumeSentAt || elapsedSinceLastSend >= YANDEX_STATION_VOLUME_THROTTLE_MS) {
                clearTimeout(this.volumeThrottleTimer);
                this.volumeThrottleTimer = null;
                this.pendingVolume = null;

                this.lastVolumePercent = volume.percent;
                this.lastVolumeSentAt = Date.now();
                void this.sendCommand('SET_VOLUME', { volume: volume.normalized });
                this.startMuteGuard();
                return;
            }

            this.pendingVolume = volume;
            if (this.volumeThrottleTimer) return;

            this.volumeThrottleTimer = setTimeout(() => {
                this.flushPendingVolume();
            }, YANDEX_STATION_VOLUME_THROTTLE_MS - elapsedSinceLastSend);
        },
        applyStationVolume(value) {
            const volume = normalizeYandexStationVolume(value);
            if (!volume || volume.percent === this.lastVolumePercent) return;

            const playerInst = getPlayerInstance();
            this.lastVolumePercent = volume.percent;
            this.pendingVolume = null;
            clearTimeout(this.volumeThrottleTimer);
            this.volumeThrottleTimer = null;

            this.suppressVolumeSync = true;
            try {
                setPlayerVolume(playerInst, volume.normalized);
            } finally {
                this.suppressVolumeSync = false;
            }
        },
        async sendTrackFromEntity(entity, options = {}) {
            const { trackId, albumId } = getEntityIdParts(entity);
            if (!trackId) return Promise.resolve({ ok: false, reason: 'Track id is missing' });

            const response = await this.sendCommand('PLAY_TRACK', {
                type: 'track',
                trackId: createEntityId(trackId, albumId),
            });
            if (response?.ok) this.initialTrackSent = true;

            const position = options.syncPosition ? Math.max(Number(options.position) || 0, 0) : 0;
            const positionSampledAt = Number(options.positionSampledAt) || undefined;

            if (response?.ok && position > 0) {
                await wait(YANDEX_STATION_SYNC_SEEK_DELAY_MS);
                return await this.sendCommand('SET_PROGRESS', {
                    position,
                    positionSampledAt,
                    compensateLatency: true,
                });
            }

            return response;
        },
        async sendInitialCurrentTrack() {
            const response = await this.sendCurrentTrack({ syncPosition: true });
            if (response?.ok) this.initialTrackSent = true;

            return response;
        },
        sendCurrentTrack(options = {}) {
            const playerInst = getPlayerInstance();
            const entity = playerInst?.state?.queueState?.currentEntity?.value?.entity;
            const position = options.syncPosition ? getCurrentProgressPosition(playerInst) : options.position;
            const positionSampledAt = options.syncPosition ? Date.now() : options.positionSampledAt;

            return this.sendTrackFromEntity(entity, { position, positionSampledAt, syncPosition: Boolean(options.syncPosition) });
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

    const syncLocalPlaybackState = (shouldPlay) => {
        const playerInst = getPlayerInstance();
        if (!playerInst) return;

        const isPlaying = isPlayerPlaying(playerInst);
        if (isPlaying === shouldPlay) return;

        const result = callOriginalPlayerMethod(playerInst, 'togglePause', []);
        if (result === undefined && !yandexStationOriginalPlayerMethods.has(playerInst)) {
            playerInst.togglePause?.();
        }
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
                const action = isPlayerPlaying(playerInst) ? 'PAUSE' : 'PLAY';
                bridge.startMuteGuard();

                if (action === 'PLAY' && !bridge.initialTrackSent) {
                    return runAfterStationStart(bridge.sendInitialCurrentTrack(), () => callOriginalPlayerMethod(playerInst, 'togglePause', args));
                }

                void bridge.sendCommand(action);
            }

            return callOriginalPlayerMethod(playerInst, 'togglePause', args);
        });

        wrapYandexStationPlayerMethod(playerInst, 'moveForward', (playerInst, args) => {
            const bridge = ensureYandexStationCastBridge();
            if (bridge.isActive()) {
                const nextEntity = getQueueEntityAt(playerInst, getCurrentQueueIndex(playerInst) + 1);
                const stationStartPromise = nextEntity ? bridge.sendTrackFromEntity(nextEntity) : Promise.resolve({ ok: false, reason: 'Next queue entity is missing' });
                bridge.startMuteGuard();

                return runAfterStationStart(stationStartPromise, () => callOriginalPlayerMethod(playerInst, 'moveForward', args));
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
                    const stationStartPromise = prevEntity
                        ? bridge.sendTrackFromEntity(prevEntity)
                        : Promise.resolve({ ok: false, reason: 'Previous queue entity is missing' });
                    bridge.startMuteGuard();

                    return runAfterStationStart(stationStartPromise, () => callOriginalPlayerMethod(playerInst, 'moveBackward', args));
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
                    compensateLatency: true,
                });
                bridge.startMuteGuard();
            }

            return callOriginalPlayerMethod(playerInst, 'setProgress', args);
        });

        wrapYandexStationPlayerMethod(playerInst, 'setVolume', (playerInst, args) => {
            const bridge = ensureYandexStationCastBridge();
            if (bridge.isActive() && !bridge.suppressVolumeSync) {
                bridge.sendVolume(args[0]);
            }

            return callOriginalPlayerMethod(playerInst, 'setVolume', args);
        });

        wrapYandexStationPlayerMethod(playerInst, 'setExponentVolume', (playerInst, args) => {
            const bridge = ensureYandexStationCastBridge();
            if (bridge.isActive() && !bridge.suppressVolumeSync) {
                bridge.sendVolume(args[0]);
            }

            return callOriginalPlayerMethod(playerInst, 'setExponentVolume', args);
        });

        wrapYandexStationPlayerMethod(playerInst, 'setEntityByIndex', (playerInst, args) => {
            const bridge = ensureYandexStationCastBridge();
            if (bridge.isActive()) {
                const entity = getQueueEntityAt(playerInst, Number(args[0]));
                const stationStartPromise = bridge.sendTrackFromEntity(entity);
                bridge.startMuteGuard();

                return runAfterStationStart(stationStartPromise, () => callOriginalPlayerMethod(playerInst, 'setEntityByIndex', args));
            }

            return callOriginalPlayerMethod(playerInst, 'setEntityByIndex', args);
        });

        wrapYandexStationPlayerMethod(playerInst, 'playContext', (playerInst, args) => {
            const bridge = ensureYandexStationCastBridge();
            const result = callOriginalPlayerMethod(playerInst, 'playContext', args);

            if (bridge.isActive()) {
                const syncAfterContextChange = () => {
                    setTimeout(() => {
                        void bridge.sendCurrentTrack();
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

    const normalizeVibeSeeds = (params) => {
        const seeds = Array.isArray(params?.seeds) ? params.seeds : typeof params?.seed === 'string' ? [params.seed] : [];
        return seeds.map((seed) => String(seed ?? '').trim()).filter(Boolean);
    };

    const playVibeBySeeds = (params = {}) => {
        const seeds = normalizeVibeSeeds(params);
        const nextSeeds = seeds.length > 0 ? seeds : DEFAULT_VIBE_SEEDS;

        callWithPlayer((playerInst) => {
            if (typeof playerInst?.playContext !== 'function') {
                return;
            }

            const from = params?.from || playerInst?.state?.currentContext?.value?.contextData?.from || 'external';
            playerInst.playContext({
                contextData: {
                    type: 'vibe',
                    meta: { id: nextSeeds.join(',') },
                    seeds: nextSeeds,
                    from,
                    includeTracksInResponse: true,
                    interactive: true,
                    ...(params?.parentContextId ? { parentContextId: params.parentContextId } : {}),
                },
                loadContextMeta: true,
            });
        });
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
                if (normalizeVibeSeeds(params).length > 0) {
                    playVibeBySeeds(params);
                    return;
                }

                const nativeFn = window.pulsesyncApi?.playVibeNative;
                if (typeof nativeFn === 'function') {
                    nativeFn(params);
                    return;
                }

                playVibeBySeeds(params);
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
            playPlaylistById: (playlistId, options = {}) => {
                callWithPlayer((playerInst) => {
                    if (typeof playerInst?.playContext === 'function') {
                        const from = options?.from || playerInst?.state?.currentContext?.value?.contextData?.from || 'external';
                        const meta = options?.uuid ? { id: playlistId, uuid: options.uuid } : { id: playlistId };
                        playerInst.playContext({
                            contextData: {
                                type: 'playlist',
                                meta,
                                from,
                                ...(options?.utmLink ? { utmLink: options.utmLink } : {}),
                            },
                            loadContextMeta: true,
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
            const { action, trackId, playlistId, albumId, options, args } = payload;
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
            if (typeof playlistId !== 'undefined') {
                apiMethod(playlistId, options);
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
        window.desktopEvents.on('NATIVE_STORE_UPDATE', (event, key, value) => {
            if (key !== YANDEX_STATION_CAST_SETTING_KEY) return;

            window.__pulseSyncYandexStationCastEnabled = value !== false;
            window.dispatchEvent(new CustomEvent('pulse-sync-yandex-station-cast-setting-change', { detail: { enabled: value !== false } }));
            if (value === false) {
                void ensureYandexStationCastBridge().clear();
            }
        });
        window.desktopEvents.on(YANDEX_STATION_EVENTS.playbackState, (event, payload) => {
            const bridge = ensureYandexStationCastBridge();
            if (!bridge.isActive() || payload?.speakerId !== bridge.activeSpeakerId) return;

            if (Number.isFinite(Number(payload?.volume))) {
                bridge.applyStationVolume(payload.volume);
            }

            if (payload?.playbackState === 'paused') {
                if (bridge.playbackTransitionGuardTimer) {
                    bridge.pendingStationPause = true;
                    return;
                }
                syncLocalPlaybackState(false);
                return;
            }

            if (payload?.playbackState === 'playing') {
                bridge.stopPlaybackTransitionGuard();
            }
        });
    };

    ensureApi();
    registerDesktopListener();
    requestInitialAddonSettingsSnapshot();
})();
