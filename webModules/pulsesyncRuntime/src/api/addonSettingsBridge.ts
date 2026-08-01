import type { AddonSettings, AddonSettingsSnapshot, PulseSyncApi } from '../contracts';
import { areSettingsEqual, cloneValue, isPlainObject, normalizeAddonId } from '../core/values';

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

export async function requestInitialAddonSettingsSnapshot(ensureApi: () => PulseSyncApi) {
    if (!window.desktopEvents?.invoke) {
        window.setTimeout(() => void requestInitialAddonSettingsSnapshot(ensureApi), 500);
        return;
    }

    try {
        const snapshot = await window.desktopEvents.invoke<AddonSettingsSnapshot>('PULSESYNC_SETTINGS_SNAPSHOT');
        ensureApi();
        applyAddonSettingsSnapshot(snapshot);
    } catch {}
}
