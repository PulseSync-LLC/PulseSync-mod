import type { PulseSyncApi } from '../contracts';
import { NATIVE_AUDIO_CHUNK_TAP_SETTING_KEY, WASAPI_EXCLUSIVE_OUTPUT_SETTING_KEY, YANDEX_STATION_CAST_SETTING_KEY, YANDEX_STATION_EVENTS } from '../config';
import { applyAddonSettingsSnapshot, applyAddonSettingsUpdate } from '../api/addonSettingsBridge';
import { applyWasapiOutputState, syncWasapiCrossfadePolicy } from '../audio/wasapi';
import { installYaspNativeAudioHooks } from '../audio/yasp';
import { syncLocalAudioGainMute } from '../audio/webAudioGraph';
import { syncLocalPlaybackState } from '../features/playerMethods';
import { ensureYandexStationCastBridge } from '../features/yandexStation';

export function registerDesktopListeners(ensureApi: () => PulseSyncApi) {
    if (window.__pulsesyncDesktopListenerRegistered) return;
    const desktopEvents = window.desktopEvents;
    if (!desktopEvents?.on) {
        window.setTimeout(() => registerDesktopListeners(ensureApi), 500);
        return;
    }

    window.__pulsesyncDesktopListenerRegistered = true;
    desktopEvents.on('PULSESYNC_API', (_event, payload: Record<string, any>) => {
        const api = ensureApi();
        if (!payload?.action) return;
        const method = api[payload.action];
        if (typeof method !== 'function') return;
        if (Array.isArray(payload.args)) return void method(...payload.args);
        if (payload.trackId !== undefined) return void method(payload.trackId, { ...payload.options, albumId: payload.albumId });
        if (payload.playlistId !== undefined) return void method(payload.playlistId, payload.options);
        method(payload.options);
    });
    desktopEvents.on('PULSESYNC_SETTINGS', (_event, payload: Record<string, any>) => {
        ensureApi();
        if (payload?.type === 'snapshot') applyAddonSettingsSnapshot(payload.settings);
        else if (payload?.type === 'update') applyAddonSettingsUpdate(payload.addon, payload.settings);
    });
    desktopEvents.on('NATIVE_AUDIO_OUTPUT_WASAPI_EXCLUSIVE_OUTPUT_STATE_CHANGED', (_event, state) => applyWasapiOutputState(state));
    desktopEvents.on('NATIVE_STORE_UPDATE', (_event, key: string, value: unknown) => {
        if (key === NATIVE_AUDIO_CHUNK_TAP_SETTING_KEY) {
            syncWasapiCrossfadePolicy(Boolean(value === true && window.nativeSettings?.get?.(WASAPI_EXCLUSIVE_OUTPUT_SETTING_KEY)));
            if (value === true) {
                installYaspNativeAudioHooks();
                syncLocalAudioGainMute();
                console.info('[PulseSync] YASP native audio stream tap enabled. Reload the current source if the YASP worker already exists.');
            }
            return;
        }
        if (key === WASAPI_EXCLUSIVE_OUTPUT_SETTING_KEY) {
            syncWasapiCrossfadePolicy(Boolean(value === true && window.nativeSettings?.get?.(NATIVE_AUDIO_CHUNK_TAP_SETTING_KEY)));
            if (value !== true) applyWasapiOutputState({ enabled: false, active: false, captureActive: false, session: null });
            else syncLocalAudioGainMute();
            return;
        }
        if (key !== YANDEX_STATION_CAST_SETTING_KEY) return;
        window.__pulseSyncYandexStationCastEnabled = value !== false;
        window.dispatchEvent(new CustomEvent('pulse-sync-yandex-station-cast-setting-change', { detail: { enabled: value !== false } }));
        if (value === false) void ensureYandexStationCastBridge().clear();
    });
    desktopEvents.on(YANDEX_STATION_EVENTS.playbackState, (_event, payload: Record<string, any>) => {
        const bridge = ensureYandexStationCastBridge();
        if (!bridge.isActive() || payload?.speakerId !== bridge.activeSpeakerId) return;
        if (Number.isFinite(Number(payload.volume))) bridge.applyStationVolume(payload.volume);
        if (payload.playbackState === 'paused') {
            if (bridge.playbackTransitionGuardTimer) bridge.pendingStationPause = true;
            else syncLocalPlaybackState(false);
        } else if (payload.playbackState === 'playing') bridge.stopPlaybackTransitionGuard();
    });
}
