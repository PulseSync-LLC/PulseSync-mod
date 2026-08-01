export const YANDEX_STATION_EVENTS = {
    selectSpeaker: 'YANDEX_STATION_SELECT_SPEAKER',
    clearSpeaker: 'YANDEX_STATION_CLEAR_SPEAKER',
    control: 'YANDEX_STATION_CONTROL',
    playbackState: 'YANDEX_STATION_PLAYBACK_STATE',
} as const;

export const YANDEX_STATION_CAST_SETTING_KEY = 'modSettings.playerBarEnhancement.enableYandexStationCast';
export const NATIVE_AUDIO_CHUNK_TAP_SETTING_KEY = 'modSettings.nativeAudioOutput.enableYaspChunkTap';
export const WASAPI_EXCLUSIVE_OUTPUT_SETTING_KEY = 'modSettings.nativeAudioOutput.enableWasapiExclusiveOutput';
