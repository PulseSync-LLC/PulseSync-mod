'use strict';

const { Events } = require('../../types/events.js');

const DESKTOP_EVENT_ALLOWLIST = Object.freeze({
    send: new Set([Events.WINDOW_CLOSE, Events.GLOBAL_SHORTCUTS_RECORDING_STATE, 'autoStartupStatus']),
    invoke: new Set([
        Events.NATIVE_STORE_GET,
        Events.NATIVE_STORE_SET,
        Events.PULSESYNC_SETTINGS_SNAPSHOT,
        Events.PULSESYNC_LEGACY_ASSETS_SNAPSHOT,
        Events.PULSESYNC_WEBHOST_ADDONS_SNAPSHOT,
        Events.YANDEX_STATION_SELECT_SPEAKER,
        Events.YANDEX_STATION_CLEAR_SPEAKER,
        Events.YANDEX_STATION_CONTROL,
        'isPremiumUser',
        'setPathWithNativeDialog',
    ]),
    listen: new Set([
        Events.PULSESYNC_API,
        Events.PULSESYNC_SETTINGS,
        Events.NATIVE_AUDIO_OUTPUT_WASAPI_EXCLUSIVE_OUTPUT_STATE_CHANGED,
        Events.NATIVE_STORE_UPDATE,
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
