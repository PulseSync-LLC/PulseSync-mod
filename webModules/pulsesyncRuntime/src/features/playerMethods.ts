import type { PulseSyncPlayer } from '../contracts';
import { getPlayerInstance } from '../core/values';

type PlayerMethod = (...args: any[]) => unknown;

export const originalPlayerMethods = new WeakMap<PulseSyncPlayer, Map<string, PlayerMethod>>();

export function callOriginalPlayerMethod(player: PulseSyncPlayer, methodName: string, args: unknown[]) {
    const originalMethod = originalPlayerMethods.get(player)?.get(methodName);
    return originalMethod?.apply(player, args);
}

export function syncLocalPlaybackState(shouldPlay: boolean) {
    const player = getPlayerInstance();
    if (!player) return;

    const isPlaying = player.state?.playerState?.status?.value === 'playing';
    if (isPlaying === shouldPlay) return;

    const result = callOriginalPlayerMethod(player, 'togglePause', []);
    if (result === undefined && !originalPlayerMethods.has(player)) player.togglePause?.();
}
