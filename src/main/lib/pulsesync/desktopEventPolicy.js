'use strict';

const { Events } = require('../../types/events.js');

const DESKTOP_EVENT_ALLOWLIST = Object.freeze({
    send: new Set([
        Events.WINDOW_MINIMIZE,
        Events.WINDOW_MAXIMIZE,
        Events.WINDOW_CLOSE,
        Events.INSTALL_UPDATE,
        Events.DOWNLOAD_MOD_UPDATE,
        Events.INSTALL_MOD_UPDATE,
        Events.APPLICATION_READY,
        Events.APPLICATION_RESTART,
        Events.APP_STALL_CANCEL_RESTART,
        Events.APPLICATION_THEME,
        Events.DOWNLOAD_CURRENT_TRACK,
        Events.DOWNLOAD_TRACK,
        Events.DOWNLOAD_TRACKS,
        Events.PLAYER_STATE,
        Events.YNISON_STATE,
        Events.TRACKS_AVAILABILITY_UPDATED,
        Events.REPOSITORY_META_UPDATED,
        Events.SAVE_FILE_TO_LOCAL_DISK,
        Events.EXPERIMENTS_METRIC,
        Events.GLOBAL_SHORTCUTS_RECORDING_STATE,
        Events.TOGGLE_MINIPLAYER,
        'autoStartupStatus',
    ]),
    invoke: new Set([
        Events.GET_PASSPORT_LOGIN,
        Events.GET_YANDEX_UID,
        Events.NATIVE_STORE_GET,
        Events.NATIVE_STORE_SET,
        Events.PULSESYNC_SETTINGS_SNAPSHOT,
        Events.PULSESYNC_LEGACY_ASSETS_SNAPSHOT,
        Events.PULSESYNC_WEBHOST_ADDONS_SNAPSHOT,
        Events.PULSESYNC_SHOW_TOAST,
        Events.YANDEX_STATION_STATE,
        Events.YANDEX_STATION_SELECT_SPEAKER,
        Events.YANDEX_STATION_CLEAR_SPEAKER,
        Events.YANDEX_STATION_CONTROL,
        'isPremiumUser',
        'setPathWithNativeDialog',
    ]),
    listen: new Set([
        Events.UPDATE_AVAILABLE,
        Events.MOD_UPDATE_AVAILABLE,
        Events.PROGRESS_BAR_CHANGE,
        Events.BASIC_TOAST_CREATE,
        Events.BASIC_TOAST_DISMISS,
        Events.REFRESH_APPLICATION_DATA,
        Events.GPU_STALL,
        Events.APP_STALL,
        Events.OPEN_DEEPLINK,
        Events.FIRST_LAUNCH,
        Events.PROBABILITY_BUCKET,
        Events.LOAD_RELEASE_NOTES,
        Events.GET_CURRENT_TRACK,
        Events.REFRESH_TRACKS_AVAILABILITY,
        Events.REFRESH_REPOSITORY_META,
        Events.PLAYER_ACTION,
        Events.PULSESYNC_API,
        Events.PULSESYNC_SETTINGS,
        Events.NATIVE_AUDIO_OUTPUT_YASP_AUDIO_FORMAT_CHANGED,
        Events.NATIVE_AUDIO_OUTPUT_WASAPI_EXCLUSIVE_OUTPUT_STATE_CHANGED,
        Events.NATIVE_STORE_UPDATE,
        Events.YANDEX_STATION_STATE,
        Events.YANDEX_STATION_PLAYBACK_STATE,
        Events.LASTFM_USERINFO_UPDATE,
        Events.PULSESYNC_OPEN_SETTINGS_DEEPLINK,
        Events.PULSESYNC_LEGACY_ASSETS,
        Events.PULSESYNC_WEBHOST_ADDONS,
    ]),
});

const assertDesktopEventAllowed = (operation, value) => {
    const eventName = typeof value === 'string' ? value : '';
    const allowedEvents = DESKTOP_EVENT_ALLOWLIST[operation];
    if (!eventName || !allowedEvents?.has(eventName)) {
        throw new Error(`PulseSync desktop event ${operation} is not allowed: ${eventName || '<empty>'}`);
    }
    return eventName;
};

module.exports = { assertDesktopEventAllowed };
