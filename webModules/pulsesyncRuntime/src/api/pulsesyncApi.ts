import type { PulseSyncToastOptions } from '@pulsesync/yamusic-types';
import type { AddonSettings, PulseSyncApi, PulseSyncPlayer, RuntimeServices } from '../contracts';
import { clamp, cloneValue, createEntityId, getPlayerInstance, normalizeAddonId } from '../core/values';
import { callWithPlayer, tryStoreMethod } from '../features/player';
import { enableNativeSlotTooltips } from '../features/nativeUi';
import { normalizeVibeSeeds, playVibeBySeeds, type VibeParams } from '../features/vibe';
import {
    clearTrackReplacementsForOwner,
    getPageEntity,
    getPlayerSnapshot,
    getQueueSnapshot,
    getRouteSnapshot,
    getTrackReplacement,
    onPageEntityChange,
    onPlayerSnapshotChange,
    onQueueChange,
    onRouteChange,
    publishPageEntity,
    removeTrackReplacement,
    setTrackReplacement,
    setTrackReplacements,
} from '../features/addonCapabilities';

function getCurrentEntity() {
    return getPlayerInstance()?.state?.queueState?.currentEntity?.value?.entity;
}

const LEGACY_MOD_SETTING_KEYS = new Set(['enableYnisonPlayerRemoteControl', 'ynisonInterceptPlayback', 'sendModAnonymizedMetrics']);

function normalizeModSettingKey(key: unknown) {
    const normalizedKey = String(key ?? '').trim();
    if (!normalizedKey.startsWith('modSettings.') && !LEGACY_MOD_SETTING_KEYS.has(normalizedKey)) {
        throw new Error('PulseSync mod settings API rejected unsupported key');
    }
    return normalizedKey;
}

function invokeDesktopEvent(event: string, ...args: unknown[]) {
    if (!window.desktopEvents?.invoke) return Promise.reject(new Error('PulseSync desktop events bridge is unavailable'));
    return window.desktopEvents.invoke(event, ...args);
}

function getScrobbleMethod(method: 'lastfmGetUser' | 'lastfmLogin' | 'lastfmLogout') {
    const handler = window.scrobble?.[method];
    if (typeof handler !== 'function') throw new Error('Last.fm bridge is unavailable');
    return handler;
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
        enableNativeSlotTooltips,
        applyR128Normalization(enabled: unknown) {
            window.__PULSESYNC_APPLY_R128_NORMALIZATION__?.(Boolean(enabled));
        },
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
        likeTrack: (trackId?: unknown, options?: Record<string, any>) =>
            callLikeStore(['likeTrack', 'setTrackLiked', 'addTrackLike', 'toggleTrackLike'], trackId, options),
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
        getPlayerSnapshot,
        getQueueSnapshot,
        getRouteSnapshot,
        getCurrentTrack: () => getCurrentEntity()?.entityData?.meta,
        getQueue: () => getPlayerInstance()?.state?.queueState?.entityList?.value,
        getPageEntity,
        getTrackReplacement,
        getProgress: () => getPlayerInstance()?.state?.playerState?.progress?.value,
        getDuration: () => getCurrentEntity()?.entityData?.meta?.duration,
        getVolume: () => getPlayerInstance()?.state?.playerState?.volume?.value,
        getRepeatMode: () => getPlayerInstance()?.state?.queueState?.repeat?.value,
        isShuffle: () => getPlayerInstance()?.state?.queueState?.shuffle?.value,
        getSettings<TSettings extends AddonSettings = AddonSettings>(addonId: string) {
            const key = normalizeAddonId(addonId);
            return {
                getCurrent: () => cloneValue(window.pulsesyncApi?._addonSettings[key] ?? {}) as TSettings,
                onChange(callback: (settings: TSettings) => void) {
                    const currentApi = window.pulsesyncApi;
                    if (!key || !currentApi || typeof callback !== 'function') return () => {};
                    let listeners = currentApi._addonSettingsListeners.get(key);
                    if (!listeners) currentApi._addonSettingsListeners.set(key, (listeners = new Set()));
                    const listener = (settings: AddonSettings) => callback(settings as TSettings);
                    listeners.add(listener);
                    if (Object.prototype.hasOwnProperty.call(currentApi._addonSettings, key)) listener(cloneValue(currentApi._addonSettings[key] ?? {}));
                    return () => {
                        const currentListeners = window.pulsesyncApi?._addonSettingsListeners.get(key);
                        currentListeners?.delete(listener);
                        if (!currentListeners?.size) window.pulsesyncApi?._addonSettingsListeners.delete(key);
                    };
                },
            };
        },
        async getModSetting(key: unknown) {
            const normalizedKey = normalizeModSettingKey(key);
            return cloneValue(await invokeDesktopEvent('NATIVE_STORE_GET', normalizedKey));
        },
        getModSettingSnapshot(key: unknown) {
            const normalizedKey = normalizeModSettingKey(key);
            return cloneValue(window.nativeSettings?.get?.(normalizedKey));
        },
        getDisplayMaxFps() {
            const value = Number(window.DISPLAY_MAX_FPS);
            return Number.isFinite(value) ? Math.max(value, 1) : 60;
        },
        getPlatform() {
            return String(window.PLATFORM ?? '');
        },
        async getPremiumStatus() {
            return Boolean(await invokeDesktopEvent('isPremiumUser'));
        },
        async showToast(message: string, options: PulseSyncToastOptions | null = {}, ownerId?: string) {
            await invokeDesktopEvent('PULSESYNC_SHOW_TOAST', {
                message: String(message ?? '').trim(),
                durationMs: options?.durationMs,
                ownerId: String(ownerId ?? '').trim(),
            });
        },
        async getLastFmUser() {
            try {
                return cloneValue(await getScrobbleMethod('lastfmGetUser')());
            } catch (error) {
                if (error instanceof Error && error.message.includes('No session found')) return null;
                throw error;
            }
        },
        async getLastFmYnisonAvailability() {
            try {
                const response = await fetch('https://api.music.yandex.net/tracks/138005337:36143630');
                return response.ok;
            } catch {
                return false;
            }
        },
        async getSelectedWasapiExclusiveDeviceId() {
            return cloneValue(await window.nativeAudioOutput?.getSelectedWasapiExclusiveDeviceId?.());
        },
        async getWasapiExclusiveStatus() {
            return cloneValue(await window.nativeAudioOutput?.getWasapiExclusiveStatus?.());
        },
        async listWasapiExclusiveDevices() {
            return cloneValue(await window.nativeAudioOutput?.listWasapiExclusiveDevices?.({ includeDisabled: true, includeFormats: true }));
        },
        async loginLastFm() {
            return cloneValue(await getScrobbleMethod('lastfmLogin')());
        },
        async logoutLastFm() {
            return cloneValue(await getScrobbleMethod('lastfmLogout')());
        },
        onLastFmUserInfoChange(listener) {
            if (typeof listener !== 'function') return () => {};
            return window.desktopEvents?.on('LASTFM_USERINFO_UPDATE', (_event, value) => listener(cloneValue(value))) ?? (() => {});
        },
        onCurrentTrackChange(listener) {
            if (typeof listener !== 'function') return () => {};
            let active = true;
            let unsubscribe: (() => void) | undefined;
            callWithPlayer((player) => {
                if (!active) return;
                const emit = () => listener(cloneValue(getCurrentEntity()?.entityData?.meta ?? null));
                const cleanup = player.state?.queueState?.currentEntity?.onChange?.(emit);
                if (typeof cleanup === 'function') unsubscribe = cleanup;
                emit();
            });
            return () => {
                active = false;
                unsubscribe?.();
            };
        },
        onPlayerSnapshotChange,
        onQueueChange,
        onRouteChange,
        onPageEntityChange,
        publishPageEntity,
        setTrackReplacement,
        setTrackReplacements,
        removeTrackReplacement,
        clearTrackReplacements: clearTrackReplacementsForOwner,
        refreshPlayerBar() {
            window.setTimeout(() => window.forcePlayerBarRerender?.(), 100);
        },
        async selectWasapiExclusiveDevice(deviceId: unknown) {
            return cloneValue(await window.nativeAudioOutput?.selectWasapiExclusiveDevice?.(deviceId || null));
        },
        setAutoStartupStatus(isEnabled: unknown) {
            window.desktopEvents?.send?.('autoStartupStatus', Boolean(isEnabled));
        },
        async setModSetting(key: unknown, value: unknown) {
            const normalizedKey = normalizeModSettingKey(key);
            return cloneValue(await invokeDesktopEvent('NATIVE_STORE_SET', normalizedKey, cloneValue(value)));
        },
        async selectModSettingDirectory(key: unknown) {
            const normalizedKey = normalizeModSettingKey(key);
            return invokeDesktopEvent('setPathWithNativeDialog', normalizedKey, undefined, ['openDirectory', 'showHiddenFiles']);
        },
        setGlobalShortcutsRecording(isRecording: unknown) {
            window.desktopEvents?.send?.('GLOBAL_SHORTCUTS_RECORDING_STATE', Boolean(isRecording));
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
