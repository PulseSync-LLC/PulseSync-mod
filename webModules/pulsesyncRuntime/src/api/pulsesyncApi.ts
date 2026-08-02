import type { AddonSettings, PulseSyncApi, PulseSyncPlayer, RuntimeServices } from '../contracts';
import { clamp, cloneValue, createEntityId, getPlayerInstance, normalizeAddonId } from '../core/values';
import { callWithPlayer, tryStoreMethod } from '../features/player';
import { normalizeVibeSeeds, playVibeBySeeds, type VibeParams } from '../features/vibe';

function getCurrentEntity() {
    return getPlayerInstance()?.state?.queueState?.currentEntity?.value?.entity;
}

function normalizeModSettingKey(key: unknown) {
    const normalizedKey = String(key ?? '').trim();
    if (!normalizedKey.startsWith('modSettings.')) throw new Error('PulseSync mod settings API only accepts modSettings.* keys');
    return normalizedKey;
}

function invokeDesktopEvent(event: string, ...args: unknown[]) {
    if (!window.desktopEvents?.invoke) return Promise.reject(new Error('PulseSync desktop events bridge is unavailable'));
    return window.desktopEvents.invoke(event, ...args);
}

function callLikeStore(methodNames: string[], trackId?: unknown, options: Record<string, any> = {}) {
    const entity = getCurrentEntity();
    const entityId = trackId ? createEntityId(trackId, options.albumId) : entity?.entityData?.meta?.id;
    return tryStoreMethod(entity?.likeStore, methodNames, entityId);
}

export function ensurePulseSyncApi(services: RuntimeServices): PulseSyncApi {
    if (window.pulsesyncApi) {
        if (window.__pulseSyncPendingPlayerInstance) services.installStationPlayerProxy(window.__pulseSyncPendingPlayerInstance);
        services.syncWasapiPlayerHold(services.getLastWasapiOutputState());
        return window.pulsesyncApi;
    }

    const api: PulseSyncApi = {
        playerInstance: null,
        _pendingCalls: [],
        _addonSettings: {},
        _addonSettingsListeners: new Map(),
        _modSettingsListeners: new Map(),
        _waitForPlayer: callWithPlayer,
        playVibe(params: VibeParams = { screen: 'landing' }) {
            if (normalizeVibeSeeds(params).length) return playVibeBySeeds(params);
            const nativePlayVibe = window.pulsesyncApi?.playVibeNative;
            return typeof nativePlayVibe === 'function' ? nativePlayVibe(params) : playVibeBySeeds(params);
        },
        play: () => callWithPlayer((player) => player.togglePause?.()),
        pause: () => callWithPlayer((player) => player.togglePause?.()),
        togglePlayPause: () => callWithPlayer((player) => player.togglePause?.()),
        next: () => callWithPlayer((player) => player.moveForward?.()),
        previous: () => callWithPlayer((player) => player.moveBackward?.()),
        setRepeatMode: (mode: unknown) => callWithPlayer((player) => player.setRepeatMode?.(mode)),
        toggleShuffle: () => callWithPlayer((player) => player.toggleShuffle?.()),
        setVolume: (volume: number) => callWithPlayer((player) => player.setExponentVolume?.(clamp(volume, 0, 100))),
        setProgress: (progress: number) => callWithPlayer((player) => player.setProgress?.(Math.max(progress, 0))),
        playTrackById(trackId: unknown, options: Record<string, any> = {}) {
            callWithPlayer((player) => {
                const entityId = createEntityId(trackId, options.albumId);
                const queue = player.state?.queueState?.entityList?.value ?? [];
                const currentId = player.state?.queueState?.currentEntity?.value?.entity?.entityData?.meta?.id;
                if (currentId === entityId) {
                    player.setProgress?.(0);
                    if (player.state?.playerState?.status?.value !== 'playing') player.togglePause?.();
                    return;
                }
                const trackIndex = queue.findIndex((item: any) => item?.entity?.entityData?.meta?.id === entityId);
                if (trackIndex !== -1) return player.setEntityByIndex?.(trackIndex);
                const from = options.from || player.state?.currentContext?.value?.contextData?.from || 'external';
                player.playContext?.({
                    contextData: { type: 'various', meta: { id: entityId }, from },
                    queueParams: { entityId },
                    loadContextMeta: true,
                    entitiesData: [{ type: 'unloaded', meta: { id: entityId } }],
                });
            });
        },
        playPlaylistById(playlistId: unknown, options: Record<string, any> = {}) {
            callWithPlayer((player) => {
                const from = options.from || player.state?.currentContext?.value?.contextData?.from || 'external';
                const meta = options.uuid ? { id: playlistId, uuid: options.uuid } : { id: playlistId };
                player.playContext?.({
                    contextData: { type: 'playlist', meta, from, ...(options.utmLink ? { utmLink: options.utmLink } : {}) },
                    loadContextMeta: true,
                });
            });
        },
        addTrackToQueueById(trackId: unknown, options: Record<string, any> = {}) {
            callWithPlayer((player) => {
                const entitiesData = [{ type: 'unloaded', meta: { id: createEntityId(trackId, options.albumId) } }];
                if (options.position === 'next' && typeof player.injectNext === 'function') return player.injectNext({ entitiesData });
                player.injectLast?.({ entitiesData });
            });
        },
        likeTrack: (trackId?: unknown, options?: Record<string, any>) => callLikeStore(['likeTrack', 'setTrackLiked', 'addTrackLike', 'toggleTrackLike'], trackId, options),
        unlikeTrack: (trackId?: unknown, options?: Record<string, any>) => callLikeStore(['unlikeTrack', 'removeTrackLike', 'setTrackUnliked'], trackId, options),
        dislikeTrack: (trackId?: unknown, options?: Record<string, any>) =>
            callLikeStore(['dislikeTrack', 'setTrackDisliked', 'addTrackDislike', 'toggleTrackDislike'], trackId, options),
        undislikeTrack: (trackId?: unknown, options?: Record<string, any>) =>
            callLikeStore(['undislikeTrack', 'removeTrackDislike', 'setTrackUndisliked'], trackId, options),
        isTrackLiked(trackId?: unknown, albumId?: unknown) {
            const entity = getCurrentEntity();
            const entityId = trackId ? createEntityId(trackId, albumId) : entity?.entityData?.meta?.id;
            return entityId ? Boolean(entity?.likeStore?.isTrackLiked?.(entityId)) : false;
        },
        isTrackDisliked(trackId?: unknown, albumId?: unknown) {
            const entity = getCurrentEntity();
            const entityId = trackId ? createEntityId(trackId, albumId) : entity?.entityData?.meta?.id;
            return entityId ? Boolean(entity?.likeStore?.isTrackDisliked?.(entityId)) : false;
        },
        getState: () => getPlayerInstance()?.state,
        isPlaying: () => getPlayerInstance()?.state?.playerState?.status?.value === 'playing',
        getCurrentTrack: () => getCurrentEntity()?.entityData?.meta,
        getQueue: () => getPlayerInstance()?.state?.queueState?.entityList?.value,
        getProgress: () => getPlayerInstance()?.state?.playerState?.progress?.value,
        getDuration: () => getCurrentEntity()?.entityData?.meta?.duration,
        getVolume: () => getPlayerInstance()?.state?.playerState?.volume?.value,
        getRepeatMode: () => getPlayerInstance()?.state?.queueState?.repeat?.value,
        isShuffle: () => getPlayerInstance()?.state?.queueState?.shuffle?.value,
        getSettings(addonId: unknown) {
            const key = normalizeAddonId(addonId);
            return {
                getCurrent: () => cloneValue(window.pulsesyncApi?._addonSettings[key] ?? {}),
                onChange(callback: (settings: AddonSettings) => void) {
                    const currentApi = window.pulsesyncApi;
                    if (!key || !currentApi || typeof callback !== 'function') return () => {};
                    let listeners = currentApi._addonSettingsListeners.get(key);
                    if (!listeners) currentApi._addonSettingsListeners.set(key, (listeners = new Set()));
                    listeners.add(callback);
                    if (Object.prototype.hasOwnProperty.call(currentApi._addonSettings, key)) callback(cloneValue(currentApi._addonSettings[key] ?? {}));
                    return () => {
                        const currentListeners = window.pulsesyncApi?._addonSettingsListeners.get(key);
                        currentListeners?.delete(callback);
                        if (!currentListeners?.size) window.pulsesyncApi?._addonSettingsListeners.delete(key);
                    };
                },
            };
        },
        async getModSetting(key: unknown) {
            const normalizedKey = normalizeModSettingKey(key);
            return cloneValue(await invokeDesktopEvent('NATIVE_STORE_GET', normalizedKey));
        },
        async setModSetting(key: unknown, value: unknown) {
            const normalizedKey = normalizeModSettingKey(key);
            return cloneValue(await invokeDesktopEvent('NATIVE_STORE_SET', normalizedKey, cloneValue(value)));
        },
        onModSettingChange(key: unknown, listener) {
            const normalizedKey = normalizeModSettingKey(key);
            if (typeof listener !== 'function') return () => {};
            let listeners = api._modSettingsListeners.get(normalizedKey);
            if (!listeners) api._modSettingsListeners.set(normalizedKey, (listeners = new Set()));
            listeners.add(listener);
            return () => {
                const currentListeners = api._modSettingsListeners.get(normalizedKey);
                currentListeners?.delete(listener);
                if (!currentListeners?.size) api._modSettingsListeners.delete(normalizedKey);
            };
        },
        setPlayerInstance(player: PulseSyncPlayer) {
            services.installStationPlayerProxy(player);
            services.installWasapiPlayerSeekProxy(player);
            api.playerInstance = player;
            services.bindWasapiCrossfadePlayer(player);
            services.syncWasapiCrossfadePolicy();
            services.syncWasapiPlayerHold(services.getLastWasapiOutputState());
            while (api._pendingCalls.length) api._pendingCalls.shift()?.(player);
        },
    };

    window.pulsesyncApi = api;
    if (window.__pulseSyncPendingPlayerInstance) api.setPlayerInstance(window.__pulseSyncPendingPlayerInstance);
    return api;
}
