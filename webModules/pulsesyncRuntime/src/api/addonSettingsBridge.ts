import type { AddonSettings, AddonSettingsSnapshot, PulseSyncApi } from '../contracts';
import { areSettingsEqual, cloneValue, isPlainObject, normalizeAddonId } from '../core/values';

const INITIAL_SNAPSHOT_RETRY_DELAYS_MS = [500, 1_000, 2_000, 4_000] as const;

function notifySettingsListeners(addonId: string) {
    const api = window.pulsesyncApi;
    const listeners = api?._addonSettingsListeners.get(addonId);
    if (!api || !listeners?.size) return;

    const nextSettings = cloneValue(api._addonSettings[addonId] ?? {});
    listeners.forEach((callback) => callback(nextSettings));
}

export function applyAddonSettingsUpdate(addonId: unknown, settings: unknown) {
    const api = window.pulsesyncApi;
    const key = normalizeAddonId(addonId);
    if (!api || !key) return;

    const nextSettings: AddonSettings = isPlainObject(settings) ? cloneValue(settings) : {};
    const previousSettings = api._addonSettings[key] ?? {};
    if (areSettingsEqual(previousSettings, nextSettings)) return;

    api._addonSettings[key] = nextSettings;
    notifySettingsListeners(key);
}

export function applyAddonSettingsSnapshot(snapshot: unknown) {
    const api = window.pulsesyncApi;
    if (!api) return;

    const previousSnapshot = api._addonSettings;
    const nextSnapshot: AddonSettingsSnapshot = {};

    if (isPlainObject(snapshot)) {
        Object.entries(snapshot).forEach(([addonId, settings]) => {
            const key = normalizeAddonId(addonId);
            if (key) nextSnapshot[key] = isPlainObject(settings) ? cloneValue(settings) : {};
        });
    }

    api._addonSettings = nextSnapshot;
    const changedKeys = new Set([...Object.keys(previousSnapshot), ...Object.keys(nextSnapshot)]);
    changedKeys.forEach((addonId) => {
        if (!areSettingsEqual(previousSnapshot[addonId] ?? {}, nextSnapshot[addonId] ?? {})) notifySettingsListeners(addonId);
    });
}

export async function requestInitialAddonSettingsSnapshot(ensureApi: () => PulseSyncApi, failedAttempts = 0) {
    if (!window.desktopEvents?.invoke) {
        window.setTimeout(() => void requestInitialAddonSettingsSnapshot(ensureApi, failedAttempts), 500);
        return;
    }

    try {
        const snapshot = await window.desktopEvents.invoke<AddonSettingsSnapshot>('PULSESYNC_SETTINGS_SNAPSHOT');
        ensureApi();
        applyAddonSettingsSnapshot(snapshot);
    } catch (error) {
        console.warn('[PulseSync Runtime] Failed to request initial addon settings snapshot:', error);
        const retryDelay = INITIAL_SNAPSHOT_RETRY_DELAYS_MS[failedAttempts];
        if (retryDelay === undefined) {
            console.error('[PulseSync Runtime] Initial addon settings snapshot retries exhausted');
            return;
        }
        window.setTimeout(() => void requestInitialAddonSettingsSnapshot(ensureApi, failedAttempts + 1), retryDelay);
    }
}
