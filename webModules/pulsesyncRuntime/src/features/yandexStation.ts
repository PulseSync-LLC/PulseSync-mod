import type { PulseSyncPlayer } from '../contracts';
import { YANDEX_STATION_CAST_SETTING_KEY, YANDEX_STATION_EVENTS } from '../config';
import { createEntityId, getPlayerInstance } from '../core/values';
import { setLocalAudioMuted } from '../audio/webAudioGraph';
import { callOriginalPlayerMethod, originalPlayerMethods, syncLocalPlaybackState } from './playerMethods';

const BACK_THRESHOLD_SECONDS = 5;
const CROSSFADE_EVENT = 'ShouldAutomoveForward';
const SYNC_SEEK_DELAY_MS = 500;
const LOCAL_TRACK_START_DELAY_CAP_MS = 750;
const TRANSITION_GUARD_MS = 2_000;
const VOLUME_STEP = 5;
const VOLUME_THROTTLE_MS = 250;
const automaticTrackSync = new WeakMap<PulseSyncPlayer, { lastSentKey: string | null; lastSentReason?: string; unsubscribers: Array<() => void> }>();

function isCastEnabled() {
    try {
        if (typeof window.ENABLE_YANDEX_STATION_CAST === 'function') return window.ENABLE_YANDEX_STATION_CAST() !== false;
        return window.nativeSettings?.get?.(YANDEX_STATION_CAST_SETTING_KEY) !== false;
    } catch {
        return true;
    }
}

function getEntityIdParts(entity: any) {
    const rawId =
        entity?.idWithContext ??
        entity?.id ??
        entity?.entityId ??
        entity?.entityData?.meta?.idWithContext ??
        entity?.entityData?.meta?.id ??
        entity?.data?.meta?.idWithContext ??
        entity?.data?.meta?.id ??
        entity?.meta?.idWithContext ??
        entity?.meta?.id;
    const [trackId, albumId] = String(rawId ?? '').split(':');
    return {
        trackId: trackId || undefined,
        albumId: albumId || entity?.albumId || entity?.entityData?.meta?.albumId || entity?.data?.meta?.albumId,
    };
}

function getQueueEntity(player: PulseSyncPlayer, index: number) {
    const pair = player.state?.queueState?.entityList?.value?.[index];
    return pair?.entity ?? pair ?? null;
}

const getQueuePairEntity = (pair: any) => pair?.entity ?? pair ?? null;

function getNextQueuePair(player: PulseSyncPlayer) {
    return player.state?.queueState?.nextEntity?.value ?? player.state?.queueState?.entityList?.value?.[getQueueIndex(player) + 1] ?? null;
}

function getQueueIndex(player: PulseSyncPlayer) {
    return Number(player.state?.queueState?.index?.value ?? 0);
}

function getProgress(player: PulseSyncPlayer | null) {
    return Number(player?.state?.playerState?.progress?.value?.position ?? 0);
}

function isPlaying(player: PulseSyncPlayer | null) {
    return player?.state?.playerState?.status?.value === 'playing';
}

function getVolume(player: PulseSyncPlayer | null) {
    const volume = Number(player?.state?.playerState?.exponentVolume?.value ?? player?.state?.playerState?.volume?.value);
    return Number.isFinite(volume) ? Math.min(Math.max(volume, 0), 1) : undefined;
}

function setVolume(player: PulseSyncPlayer | null, volume: number) {
    if (!player || !Number.isFinite(volume)) return;
    player.setExponentVolume?.(Math.min(Math.max(volume, 0), 1));
}

function normalizeVolume(value: unknown) {
    const numeric = Number(value);
    if (!Number.isFinite(numeric)) return null;
    const percentValue = Math.min(Math.max(numeric > 1 ? numeric : numeric * 100, 0), 100);
    const percent = Math.min(Math.max(Math.round(percentValue / VOLUME_STEP) * VOLUME_STEP, 0), 100);
    return { percent, normalized: percent / 100 };
}

function runAfterStationStart(stationStartPromise: Promise<unknown>, callback: () => unknown) {
    const delayCap = new Promise((resolve) => setTimeout(resolve, LOCAL_TRACK_START_DELAY_CAP_MS));
    return Promise.race([Promise.resolve(stationStartPromise).catch(() => undefined), delayCap]).then(callback);
}

function notifyCastChange(detail: Record<string, unknown>) {
    window.dispatchEvent(new CustomEvent('pulse-sync-yandex-station-cast-change', { detail }));
}

function createBridge() {
    const bridge: Record<string, any> = {
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
        isActive: () => isCastEnabled() && Boolean(bridge.activeSpeakerId),
        startMuteGuard() {
            clearInterval(bridge.muteTimer);
            setLocalAudioMuted(true);
            bridge.muteTimer = setInterval(() => setLocalAudioMuted(true), 3_000);
        },
        stopMuteGuard() {
            clearInterval(bridge.muteTimer);
            bridge.muteTimer = null;
            setLocalAudioMuted(false);
        },
        startPlaybackTransitionGuard() {
            const active = Boolean(bridge.playbackTransitionGuardTimer);
            clearTimeout(bridge.playbackTransitionGuardTimer);
            if (!active) bridge.pendingStationPause = false;
            bridge.playbackTransitionGuardTimer = setTimeout(() => {
                bridge.playbackTransitionGuardTimer = null;
                if (!bridge.pendingStationPause) return;
                bridge.pendingStationPause = false;
                syncLocalPlaybackState(false);
            }, TRANSITION_GUARD_MS);
        },
        stopPlaybackTransitionGuard() {
            clearTimeout(bridge.playbackTransitionGuardTimer);
            bridge.playbackTransitionGuardTimer = null;
            bridge.pendingStationPause = false;
        },
        async activate(iotDeviceId: string) {
            if (!isCastEnabled()) return { ok: false, reason: 'Yandex Station cast is disabled' };
            const result: any = await window.desktopEvents?.invoke?.(YANDEX_STATION_EVENTS.selectSpeaker, iotDeviceId);
            if (!result?.ok) return result;
            bridge.stopPlaybackTransitionGuard();
            const player = getPlayerInstance();
            const stationVolume = Number(result.volume ?? result.state?.volume);
            if (bridge.savedClientVolume === undefined) bridge.savedClientVolume = getVolume(player);
            if (Number.isFinite(stationVolume)) {
                bridge.suppressVolumeSync = true;
                try {
                    setVolume(player, stationVolume);
                } finally {
                    bridge.suppressVolumeSync = false;
                }
                bridge.lastVolumePercent = normalizeVolume(stationVolume)?.percent ?? null;
            } else {
                bridge.lastVolumePercent = null;
            }
            bridge.activeSpeakerId = iotDeviceId;
            bridge.initialTrackSent = false;
            bridge.pendingVolume = null;
            clearTimeout(bridge.volumeThrottleTimer);
            bridge.volumeThrottleTimer = null;
            bridge.lastVolumeSentAt = 0;
            if (isPlaying(player)) {
                bridge.startMuteGuard();
                void bridge.sendInitialCurrentTrack();
            }
            notifyCastChange({ activeSpeakerId: iotDeviceId });
            return result;
        },
        async clear() {
            const player = getPlayerInstance();
            const restoreVolume = bridge.savedClientVolume;
            bridge.pendingVolume = null;
            clearTimeout(bridge.volumeThrottleTimer);
            bridge.volumeThrottleTimer = null;
            bridge.lastVolumeSentAt = 0;
            if (bridge.activeSpeakerId) await bridge.sendCommand('PAUSE', {}, { syncLocalPlayback: false, ignoreEnabled: true });
            bridge.activeSpeakerId = null;
            bridge.initialTrackSent = false;
            bridge.lastVolumePercent = null;
            bridge.savedClientVolume = undefined;
            bridge.stopPlaybackTransitionGuard();
            bridge.stopMuteGuard();
            if (restoreVolume !== undefined) {
                bridge.suppressVolumeSync = true;
                try {
                    setVolume(player, restoreVolume);
                } finally {
                    bridge.suppressVolumeSync = false;
                }
            }
            notifyCastChange({ activeSpeakerId: null });
            return await window.desktopEvents?.invoke?.(YANDEX_STATION_EVENTS.clearSpeaker);
        },
        sendCommand(action: string, payload: Record<string, unknown> = {}, options: Record<string, any> = {}) {
            if (!options.ignoreEnabled && !isCastEnabled()) return Promise.resolve({ ok: false, reason: 'Yandex Station cast is disabled' });
            if (!bridge.activeSpeakerId) return Promise.resolve({ ok: false, reason: 'Yandex Station cast is not active' });
            if (['PLAY', 'MOVE_FORWARD', 'MOVE_BACKWARD', 'SET_PROGRESS', 'PLAY_TRACK'].includes(action)) bridge.startPlaybackTransitionGuard();
            const invoke = window.desktopEvents?.invoke;
            return (invoke?.<any>(YANDEX_STATION_EVENTS.control, action, payload) ?? Promise.resolve({ ok: false }))
                .then((result) => {
                    if (result?.ok && options.syncLocalPlayback !== false) {
                        if (action === 'PLAY') syncLocalPlaybackState(true);
                        if (action === 'PAUSE') syncLocalPlaybackState(false);
                    }
                    return result;
                })
                .catch((error) => {
                    console.warn('Yandex Station command failed', error);
                    return { ok: false, reason: error instanceof Error ? error.message : undefined };
                });
        },
        flushPendingVolume() {
            bridge.volumeThrottleTimer = null;
            const nextVolume = bridge.pendingVolume;
            bridge.pendingVolume = null;
            if (!nextVolume || nextVolume.percent === bridge.lastVolumePercent) return;
            bridge.lastVolumePercent = nextVolume.percent;
            bridge.lastVolumeSentAt = Date.now();
            void bridge.sendCommand('SET_VOLUME', { volume: nextVolume.normalized });
            bridge.startMuteGuard();
        },
        sendVolume(value: unknown) {
            const volume = normalizeVolume(value);
            if (!volume) return;
            if (volume.percent === bridge.lastVolumePercent) {
                bridge.pendingVolume = null;
                return;
            }
            const elapsed = Date.now() - bridge.lastVolumeSentAt;
            if (!bridge.lastVolumeSentAt || elapsed >= VOLUME_THROTTLE_MS) {
                clearTimeout(bridge.volumeThrottleTimer);
                bridge.volumeThrottleTimer = null;
                bridge.pendingVolume = null;
                bridge.lastVolumePercent = volume.percent;
                bridge.lastVolumeSentAt = Date.now();
                void bridge.sendCommand('SET_VOLUME', { volume: volume.normalized });
                bridge.startMuteGuard();
                return;
            }
            bridge.pendingVolume = volume;
            if (bridge.volumeThrottleTimer) return;
            bridge.volumeThrottleTimer = setTimeout(() => bridge.flushPendingVolume(), VOLUME_THROTTLE_MS - elapsed);
        },
        applyStationVolume(value: unknown) {
            const volume = normalizeVolume(value);
            if (!volume || volume.percent === bridge.lastVolumePercent) return;
            bridge.lastVolumePercent = volume.percent;
            bridge.pendingVolume = null;
            clearTimeout(bridge.volumeThrottleTimer);
            bridge.volumeThrottleTimer = null;
            bridge.suppressVolumeSync = true;
            try {
                setVolume(getPlayerInstance(), volume.normalized);
            } finally {
                bridge.suppressVolumeSync = false;
            }
        },
        async sendTrackFromEntity(entity: any, options: Record<string, any> = {}) {
            const { trackId, albumId } = getEntityIdParts(entity);
            if (!trackId) return { ok: false, reason: 'Track id is missing' };
            const response = await bridge.sendCommand('PLAY_TRACK', { type: 'track', trackId: createEntityId(trackId, albumId) });
            if (response?.ok) bridge.initialTrackSent = true;
            const position = options.syncPosition ? Math.max(Number(options.position) || 0, 0) : 0;
            const positionSampledAt = Number(options.positionSampledAt) || undefined;
            if (response?.ok && position > 0) {
                await new Promise((resolve) => setTimeout(resolve, SYNC_SEEK_DELAY_MS));
                return bridge.sendCommand('SET_PROGRESS', { position, positionSampledAt, compensateLatency: true });
            }
            return response;
        },
        sendInitialCurrentTrack() {
            return bridge.sendCurrentTrack({ syncPosition: true }).then((response: any) => {
                if (response?.ok) bridge.initialTrackSent = true;
                return response;
            });
        },
        sendCurrentTrack(options: Record<string, any> = {}) {
            const player = getPlayerInstance();
            const entity = player?.state?.queueState?.currentEntity?.value?.entity;
            return bridge.sendTrackFromEntity(entity, {
                position: options.syncPosition ? getProgress(player) : options.position,
                positionSampledAt: options.syncPosition ? Date.now() : options.positionSampledAt,
                syncPosition: Boolean(options.syncPosition),
            });
        },
    };
    return bridge;
}

export function ensureYandexStationCastBridge() {
    if (!window.pulseSyncYandexStationCast) window.pulseSyncYandexStationCast = createBridge();
    return window.pulseSyncYandexStationCast;
}

function wrapPlayerMethod(player: PulseSyncPlayer, methodName: string, handler: (player: PulseSyncPlayer, args: any[]) => unknown) {
    if (typeof player[methodName] !== 'function') return;
    let originals = originalPlayerMethods.get(player);
    if (!originals) originalPlayerMethods.set(player, (originals = new Map()));
    if (originals.has(methodName)) return;
    originals.set(methodName, player[methodName]);
    player[methodName] = (...args: any[]) => handler(player, args);
}

function installAutomaticTrackSync(player: PulseSyncPlayer) {
    if (automaticTrackSync.has(player)) return;
    const state: { lastSentKey: string | null; lastSentReason?: string; unsubscribers: Array<() => void> } = { lastSentKey: null, unsubscribers: [] };
    automaticTrackSync.set(player, state);
    const syncNext = (reason: string) => {
        const bridge = ensureYandexStationCastBridge();
        if (!bridge.isActive()) return;
        const current = getQueuePairEntity(player.state?.queueState?.currentEntity?.value);
        const next = getQueuePairEntity(getNextQueuePair(player));
        const currentParts = getEntityIdParts(current);
        const nextParts = getEntityIdParts(next);
        const currentId = currentParts.trackId ? createEntityId(currentParts.trackId, currentParts.albumId) : null;
        const nextId = nextParts.trackId ? createEntityId(nextParts.trackId, nextParts.albumId) : null;
        if (!nextId) return;
        const key = `${currentId ?? 'unknown'}->${nextId}`;
        if (state.lastSentKey === key) return;
        state.lastSentKey = key;
        state.lastSentReason = reason;
        void bridge.sendTrackFromEntity(next);
        bridge.startMuteGuard();
    };
    const eventUnsubscribe = player.state?.playerState?.event?.onChange?.((event: string) => event === CROSSFADE_EVENT && syncNext('crossfade-event'));
    const entityUnsubscribe = player.state?.queueState?.currentEntity?.onChange?.(() => (state.lastSentKey = null));
    [eventUnsubscribe, entityUnsubscribe].forEach((unsubscribe) => typeof unsubscribe === 'function' && state.unsubscribers.push(unsubscribe));
}

export function installYandexStationPlayerProxy(player: PulseSyncPlayer) {
    if (!player) return;
    installAutomaticTrackSync(player);
    if (originalPlayerMethods.has(player)) return;
    wrapPlayerMethod(player, 'togglePause', (current, args) => {
        const bridge = ensureYandexStationCastBridge();
        if (bridge.isActive()) {
            const action = isPlaying(current) ? 'PAUSE' : 'PLAY';
            bridge.startMuteGuard();
            if (action === 'PLAY' && !bridge.initialTrackSent) return runAfterStationStart(bridge.sendInitialCurrentTrack(), () => callOriginalPlayerMethod(current, 'togglePause', args));
            void bridge.sendCommand(action);
        }
        return callOriginalPlayerMethod(current, 'togglePause', args);
    });
    for (const [method, offset] of [
        ['moveForward', 1],
        ['moveBackward', -1],
    ] as const) {
        wrapPlayerMethod(player, method, (current, args) => {
            const bridge = ensureYandexStationCastBridge();
            if (!bridge.isActive()) return callOriginalPlayerMethod(current, method, args);
            if (method === 'moveBackward' && getProgress(current) > BACK_THRESHOLD_SECONDS) {
                void bridge.sendCommand('SET_PROGRESS', { position: 0 });
                bridge.startMuteGuard();
                return callOriginalPlayerMethod(current, method, args);
            }
            const entity = getQueueEntity(current, getQueueIndex(current) + offset);
            bridge.startMuteGuard();
            const stationStartPromise = entity
                ? bridge.sendTrackFromEntity(entity)
                : Promise.resolve({ ok: false, reason: method === 'moveForward' ? 'Next queue entity is missing' : 'Previous queue entity is missing' });
            return runAfterStationStart(stationStartPromise, () => callOriginalPlayerMethod(current, method, args));
        });
    }
    wrapPlayerMethod(player, 'setProgress', (current, args) => {
        const bridge = ensureYandexStationCastBridge();
        if (bridge.isActive()) {
            void bridge.sendCommand('SET_PROGRESS', { position: Math.max(Number(args[0]) || 0, 0), compensateLatency: true });
            bridge.startMuteGuard();
        }
        return callOriginalPlayerMethod(current, 'setProgress', args);
    });
    for (const method of ['setVolume', 'setExponentVolume']) {
        wrapPlayerMethod(player, method, (current, args) => {
            const bridge = ensureYandexStationCastBridge();
            if (bridge.isActive() && !bridge.suppressVolumeSync) bridge.sendVolume(args[0]);
            return callOriginalPlayerMethod(current, method, args);
        });
    }
    wrapPlayerMethod(player, 'setEntityByIndex', (current, args) => {
        const bridge = ensureYandexStationCastBridge();
        if (!bridge.isActive()) return callOriginalPlayerMethod(current, 'setEntityByIndex', args);
        bridge.startMuteGuard();
        return runAfterStationStart(bridge.sendTrackFromEntity(getQueueEntity(current, Number(args[0]))), () => callOriginalPlayerMethod(current, 'setEntityByIndex', args));
    });
    wrapPlayerMethod(player, 'playContext', (current, args) => {
        const result = callOriginalPlayerMethod(current, 'playContext', args);
        const bridge = ensureYandexStationCastBridge();
        if (bridge.isActive()) {
            const sync = () => setTimeout(() => void bridge.sendCurrentTrack(), 0);
            if (result && typeof (result as Promise<unknown>).then === 'function') void Promise.resolve(result).then(sync, sync);
            else sync();
            bridge.startMuteGuard();
        }
        return result;
    });
}
