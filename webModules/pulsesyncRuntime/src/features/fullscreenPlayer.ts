import type { FullscreenPlayerMode, FullscreenPlayerSnapshot } from '@pulsesync/yamusic-types';
import { getNativePlayerRoot, observeNativePlayer } from './nativePlayer';

export function getFullscreenPlayerSnapshot(): FullscreenPlayerSnapshot {
    const player = getNativePlayerRoot()?.store.fullscreenPlayer;

    return {
        available: Boolean(player),
        isOpen: player?.modal?.isOpened === true,
        mode: player?.mode === 'syncLyrics' ? 'lyrics' : player?.isPlayQueueMode ? 'queue' : 'cover',
    };
}

export function onFullscreenPlayerChange(listener: (snapshot: FullscreenPlayerSnapshot) => void) {
    let previous = JSON.stringify(getFullscreenPlayerSnapshot());

    return observeNativePlayer(() => {
        const snapshot = getFullscreenPlayerSnapshot(),
            key = JSON.stringify(snapshot);

        if (key !== previous) {
            previous = key;
            listener(snapshot);
        }
    });
}

export function setFullscreenPlayerMode(mode: FullscreenPlayerMode): boolean {
    if (!['cover', 'lyrics', 'queue'].includes(mode)) {
        throw new TypeError('Invalid fullscreen player mode');
    }

    const player = getNativePlayerRoot()?.store.fullscreenPlayer;

    if (!player) {
        return false;
    }

    if (mode === 'lyrics') {
        player.hidePlayQueue();
        player.showSyncLyrics();
    } else if (mode === 'queue') {
        player.hideSyncLyrics();
        player.showPlayQueue();
    } else {
        player.hideSyncLyrics();
        player.hidePlayQueue();
    }

    return true;
}

export function openFullscreenPlayer(mode: FullscreenPlayerMode = 'cover'): boolean {
    if (!setFullscreenPlayerMode(mode)) {
        return false;
    }

    if (mode === 'cover') {
        getNativePlayerRoot()!.store.fullscreenPlayer.showFullscreenPlayerModal();
    }

    return true;
}

export function closeFullscreenPlayer(): boolean {
    const player = getNativePlayerRoot()?.store.fullscreenPlayer;

    if (!player) {
        return false;
    }

    player.modal.close();

    return true;
}
