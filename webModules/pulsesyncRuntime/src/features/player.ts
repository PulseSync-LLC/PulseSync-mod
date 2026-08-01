import type { PulseSyncPlayer } from '../contracts';

export function callWithPlayer(callback: (player: PulseSyncPlayer) => void) {
    const api = window.pulsesyncApi;
    if (!api) return;
    if (api.playerInstance) {
        callback(api.playerInstance);
        return;
    }
    api._pendingCalls.push(callback);
}

export function tryStoreMethod(store: Record<string, any> | undefined, methodNames: string[], entityId: unknown) {
    for (const methodName of methodNames) {
        if (typeof store?.[methodName] !== 'function') continue;
        try {
            return store[methodName](entityId);
        } catch {}
    }
    return false;
}
