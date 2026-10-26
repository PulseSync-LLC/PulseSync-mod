'use strict';

const { ipcRenderer } = require('electron');
const { Events } = require('../../types/events.js');

const createPulseSyncDesktopBridge = (subscribe) => ({
    downloads: {
        currentTrack: (trackId) => ipcRenderer.send(Events.DOWNLOAD_CURRENT_TRACK, trackId),
        track: (trackId, name) => ipcRenderer.send(Events.DOWNLOAD_TRACK, trackId, name),
        tracks: (trackIds, type, name) => ipcRenderer.send(Events.DOWNLOAD_TRACKS, trackIds, type, name),
        cancel: (operation) => ipcRenderer.send(Events.DOWNLOAD_TRACKS_CANCEL, operation),
        onProgress: (listener) => subscribe(Events.PROGRESS_BAR_CHANGE, listener),
    },
    settings: {
        get: (key) => ipcRenderer.invoke(Events.NATIVE_STORE_GET, key),
        set: (key, value) => ipcRenderer.invoke(Events.NATIVE_STORE_SET, key, value),
        selectDirectory: (key) => ipcRenderer.invoke('setPathWithNativeDialog', key, undefined, ['openDirectory', 'showHiddenFiles']),
        getAddonSnapshot: () => ipcRenderer.invoke(Events.PULSESYNC_SETTINGS_SNAPSHOT),
        setAutoStartup: (enabled) => ipcRenderer.send('autoStartupStatus', enabled),
        setShortcutsRecording: (recording) => ipcRenderer.send(Events.GLOBAL_SHORTCUTS_RECORDING_STATE, recording),
        onChange: (listener) => subscribe(Events.NATIVE_STORE_UPDATE, listener),
        onAddonChange: (listener) => subscribe(Events.PULSESYNC_SETTINGS, listener),
        onOpenDeeplink: (listener) => subscribe(Events.PULSESYNC_OPEN_SETTINGS_DEEPLINK, listener),
    },
    addons: {
        getLegacySnapshot: () => ipcRenderer.invoke(Events.PULSESYNC_LEGACY_ASSETS_SNAPSHOT),
        getWebHostSnapshot: () => ipcRenderer.invoke(Events.PULSESYNC_WEBHOST_ADDONS_SNAPSHOT),
        recover: (request) => ipcRenderer.invoke(Events.PULSESYNC_ADDON_RECOVERY, request),
        onLegacyChange: (listener) => subscribe(Events.PULSESYNC_LEGACY_ASSETS, listener),
        onWebHostChange: (listener) => subscribe(Events.PULSESYNC_WEBHOST_ADDONS, listener),
    },
    webHost: {
        reportHealth: (state) => ipcRenderer.send(Events.PULSESYNC_WEBHOST_HEALTH, state),
    },
    station: {
        getState: () => ipcRenderer.invoke(Events.YANDEX_STATION_STATE),
        selectSpeaker: (deviceId) => ipcRenderer.invoke(Events.YANDEX_STATION_SELECT_SPEAKER, deviceId),
        clearSpeaker: () => ipcRenderer.invoke(Events.YANDEX_STATION_CLEAR_SPEAKER),
        control: (action, payload) => ipcRenderer.invoke(Events.YANDEX_STATION_CONTROL, action, payload),
        onState: (listener) => subscribe(Events.YANDEX_STATION_STATE, listener),
        onPlaybackState: (listener) => subscribe(Events.YANDEX_STATION_PLAYBACK_STATE, listener),
    },
    audio: {
        getUgcLoudness: (track) => ipcRenderer.invoke(Events.GET_UGC_LOUDNESS, track),
        onFormatChanged: (listener) => subscribe(Events.NATIVE_AUDIO_OUTPUT_YASP_AUDIO_FORMAT_CHANGED, listener),
        onWasapiStateChanged: (listener) => subscribe(Events.NATIVE_AUDIO_OUTPUT_WASAPI_EXCLUSIVE_OUTPUT_STATE_CHANGED, listener),
    },
    notifications: {
        show: (options) => ipcRenderer.invoke(Events.PULSESYNC_SHOW_TOAST, options),
        onCreate: (listener) => subscribe(Events.BASIC_TOAST_CREATE, listener),
        onDismiss: (listener) => subscribe(Events.BASIC_TOAST_DISMISS, listener),
    },
    updates: {
        download: () => ipcRenderer.send(Events.DOWNLOAD_MOD_UPDATE),
        install: () => ipcRenderer.send(Events.INSTALL_MOD_UPDATE),
        onAvailable: (listener) => subscribe(Events.MOD_UPDATE_AVAILABLE, listener),
    },
    app: {
        restart: () => ipcRenderer.send(Events.APPLICATION_RESTART),
        cancelStallRestart: () => ipcRenderer.send(Events.APP_STALL_CANCEL_RESTART),
        isPremiumUser: () => ipcRenderer.invoke('isPremiumUser'),
        onGpuStall: (listener) => subscribe(Events.GPU_STALL, listener),
        onStall: (listener) => subscribe(Events.APP_STALL, listener),
    },
    player: {
        onApiRequest: (listener) => subscribe(Events.PULSESYNC_API, listener),
        onCurrentTrackRequest: (listener) => subscribe(Events.GET_CURRENT_TRACK, listener),
        reportYnisonState: (state) => ipcRenderer.send(Events.YNISON_STATE, state),
    },
    metrics: {
        reportExperiments: (metrics) => ipcRenderer.send(Events.EXPERIMENTS_METRIC, metrics),
    },
    lastfm: {
        onUserInfoChanged: (listener) => subscribe(Events.LASTFM_USERINFO_UPDATE, listener),
    },
    miniplayer: {
        toggle: () => ipcRenderer.send(Events.TOGGLE_MINIPLAYER),
    },
});

module.exports = { createPulseSyncDesktopBridge };
