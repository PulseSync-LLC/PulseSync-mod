// These are the local Ynison fields this feature uses. Device lists, versions and
// context metadata stay inside Music and never cross the desktop bridge.
export interface YnisonVersion {
    device_id: string;
    version: number;
    timestamp_ms: number;
}
export interface YnisonPlayable {
    playable_id: string;
    playable_type: string;
    album_id_optional: string | null;
}
export interface YnisonQueue {
    current_playable_index: number;
    entity_id: string;
    entity_type: string;
    playable_list: YnisonPlayable[];
    options: { repeat_mode: string };
    shuffle_optional: { playable_indices: number[] } | null;
    version: YnisonVersion;
    [key: string]: unknown;
}
export interface YnisonPlayerState {
    player_queue: YnisonQueue;
    status: {
        paused: boolean;
        progress_ms: number;
        duration_ms: number;
        playback_speed: number;
        version: YnisonVersion;
    };
    player_queue_inject_optional: unknown;
}
interface YnisonState {
    player_state: YnisonPlayerState;
    active_device_id_optional: string | null;
    devices: unknown[];
}
export interface YnisonLocalSnapshot {
    canRestore: boolean;
    playbackStatus: string;
    localTrackId?: string | null;
    localTrackIds?: string[];
    playerState?: YnisonPlayerState;
}
export interface YnisonController {
    options: { deviceConfig: { info: { device_id: string } } };
    currentState: YnisonState;
    getLocalPlaybackSnapshot?: () => YnisonLocalSnapshot;
    whenPlaybackSettled?: () => Promise<void>;
    updateState(options: {
        newState: YnisonState;
        skipVersionCompare: true;
        trigger: 'WSConnector';
        pulseSyncListening?: true;
    }): void;
}
type ListeningWindow = Window & {
    ynison?: { state?: YnisonController; interceptActivity?: () => void };
    __pulseSyncListeningLockUntil?: number;
};

export function getYnison(): YnisonController | undefined {
    return (window as ListeningWindow).ynison?.state;
}

export function ownedByOtherDevice(): boolean {
    const state = getYnison();
    const local = state?.options.deviceConfig.info.device_id;
    const active = state?.currentState.active_device_id_optional;

    return Boolean(local && active && active !== local);
}

export function reclaimLocalPlayback(): boolean {
    const ynison = (window as ListeningWindow).ynison;

    if (!ynison?.state?.getLocalPlaybackSnapshot?.().canRestore || !ynison.interceptActivity) {
        return false;
    }

    // An explicit local button press uses Music's own activity interception.
    // Ordinary synchronization must never take over another device silently.
    ynison.interceptActivity();

    return true;
}

export function lockListeningControls(until: number): void {
    (window as ListeningWindow).__pulseSyncListeningLockUntil = until;
}

export function catalogItem(playable: YnisonPlayable): { trackId: string; albumId: string | null } | null {
    if (playable.playable_type !== 'TRACK' || !/^\d+(?::\d+)?$/u.test(playable.playable_id)) {
        return null;
    }

    const [trackId, embeddedAlbum] = playable.playable_id.split(':');
    const albumId = embeddedAlbum ?? playable.album_id_optional ?? null;

    if (!/^[\w-]{1,64}$/u.test(trackId) || (albumId !== null && !/^[\w-]{1,64}$/u.test(albumId))) {
        return null;
    }

    return { trackId, albumId };
}

export function currentLocalTrack(snapshot = getYnison()?.getLocalPlaybackSnapshot?.()): string | null {
    if (snapshot?.localTrackId) {
        return snapshot.localTrackId;
    }

    const queue = snapshot?.playerState?.player_queue;
    const playable = queue?.playable_list[queue.current_playable_index];

    return playable?.playable_type === 'TRACK' && !catalogItem(playable) ? playable.playable_id : null;
}

export function readListeningSource(reason: string | null, snapshot = getYnison()?.getLocalPlaybackSnapshot?.()) {
    const player = snapshot?.playerState;

    if (!player || snapshot.localTrackId) {
        return null;
    }

    const queue = player.player_queue;
    const order = queue.shuffle_optional?.playable_indices;
    const index = order ? order.indexOf(queue.current_playable_index) : queue.current_playable_index;
    const current = queue.playable_list[queue.current_playable_index];

    if (!current || !catalogItem(current)) {
        return null;
    }

    const start = Math.max(0, index - 8);
    const slice = order
        ? order.slice(start, start + 32).map((slot) => queue.playable_list[slot])
        : queue.playable_list.slice(start, start + 32);
    const currentOffset = index - start;
    const localIds = new Set(snapshot.localTrackIds ?? []);
    const items = slice.map((playable) => {
        const item = playable && catalogItem(playable);

        return item && !localIds.has(item.trackId) ? item : null;
    });
    const currentIndex = items.slice(0, currentOffset).filter(Boolean).length;
    const supported = items.filter((item): item is NonNullable<typeof item> => Boolean(item));
    const status = player.status;

    if (
        index < 0 ||
        !items[currentOffset] ||
        currentIndex < 0 ||
        currentIndex >= supported.length ||
        !Number.isFinite(status.progress_ms)
    ) {
        return null;
    }

    return {
        capturedAtMs: Date.now(),
        items: supported,
        currentIndex,
        repeatMode:
            queue.options.repeat_mode === 'ONE' ? 'one' : queue.options.repeat_mode === 'ALL' ? 'context' : 'none',
        shuffle: queue.shuffle_optional !== null,
        status: ['playing', 'paused'].includes(snapshot.playbackStatus) ? snapshot.playbackStatus : 'buffering',
        positionMs: Math.round(
            Math.max(0, Math.min(status.duration_ms > 0 ? status.duration_ms : 0, status.progress_ms)),
        ),
        durationMs:
            Number.isFinite(status.duration_ms) && status.duration_ms > 0 ? Math.round(status.duration_ms) : null,
        playbackRate: status.playback_speed,
        reason,
    };
}
