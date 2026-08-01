import type { PulseSyncPlayer, UnknownRecord } from '../contracts';

export const DEFAULT_VIBE_SEEDS = ['user:onyourwave'] as const;

export function clamp(value: number, min: number, max: number) {
    return Math.min(Math.max(value, min), max);
}

export function createEntityId(trackId: unknown, albumId: unknown) {
    return albumId ? `${String(trackId)}:${String(albumId)}` : trackId;
}

export function getPlayerInstance(): PulseSyncPlayer | null {
    return window.pulsesyncApi?.playerInstance ?? null;
}

export function normalizeAddonId(addonId: unknown) {
    return String(addonId ?? '').trim();
}

export function isPlainObject(value: unknown): value is UnknownRecord {
    return Boolean(value) && typeof value === 'object' && !Array.isArray(value);
}

export function cloneValue<T>(value: T): T {
    if (typeof structuredClone === 'function') return structuredClone(value);

    try {
        return JSON.parse(JSON.stringify(value)) as T;
    } catch {
        return value;
    }
}

export function areSettingsEqual(left: unknown, right: unknown) {
    try {
        return JSON.stringify(left ?? {}) === JSON.stringify(right ?? {});
    } catch {
        return left === right;
    }
}
