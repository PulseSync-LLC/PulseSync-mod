export type Cleanup = () => void;
export type UnknownRecord = Record<string, unknown>;
export type AddonSettings = Record<string, unknown>;
export type AddonSettingsSnapshot = Record<string, AddonSettings>;
export type ModSettingListener = (value: unknown) => void;

export type DesktopEventsBridge = {
    invoke?: <T = unknown>(event: string, ...args: unknown[]) => Promise<T>;
    on: (event: string, listener: (event: unknown, ...args: any[]) => void) => (() => void) | void;
    send?: (event: string, ...args: unknown[]) => void;
};

export type PulseSyncPlayer = Record<string, any> & {
    state?: Record<string, any>;
    togglePause?: (...args: unknown[]) => unknown;
};

export type PulseSyncApi = UnknownRecord & {
    _addonSettings: AddonSettingsSnapshot;
    _addonSettingsListeners: Map<string, Set<(settings: AddonSettings) => void>>;
    _modSettingsListeners: Map<string, Set<ModSettingListener>>;
    _pendingCalls: Array<(player: PulseSyncPlayer) => void>;
    playerInstance?: PulseSyncPlayer | null;
    applyR128Normalization: (enabled: unknown) => void;
    getModSetting: (key: unknown) => Promise<unknown>;
    getModSettingSnapshot: (key: unknown) => unknown;
    getDisplayMaxFps: () => number;
    getPlatform: () => string;
    getPremiumStatus: () => Promise<boolean>;
    getLastFmUser: () => Promise<unknown>;
    getLastFmYnisonAvailability: () => Promise<boolean>;
    getSelectedWasapiExclusiveDeviceId: () => Promise<unknown>;
    getWasapiExclusiveStatus: () => Promise<unknown>;
    listWasapiExclusiveDevices: () => Promise<unknown>;
    loginLastFm: () => Promise<unknown>;
    logoutLastFm: () => Promise<unknown>;
    onLastFmUserInfoChange: (listener: (value: unknown) => void) => Cleanup;
    refreshPlayerBar: () => void;
    selectWasapiExclusiveDevice: (deviceId: unknown) => Promise<unknown>;
    setAutoStartupStatus: (isEnabled: unknown) => void;
    setModSetting: (key: unknown, value: unknown) => Promise<unknown>;
    selectModSettingDirectory: (key: unknown) => Promise<unknown>;
    setGlobalShortcutsRecording: (isRecording: unknown) => void;
    onModSettingChange: (key: unknown, listener: ModSettingListener) => Cleanup;
    setPlayerInstance: (player: PulseSyncPlayer) => void;
};

export type RuntimeServices = {
    getLastWasapiOutputState: () => unknown;
    installStationPlayerProxy: (player: PulseSyncPlayer) => void;
    installWasapiPlayerSeekProxy: (player: PulseSyncPlayer) => void;
    bindWasapiCrossfadePlayer: (player: PulseSyncPlayer) => void;
    syncWasapiCrossfadePolicy: () => void;
    syncWasapiPlayerHold: (state: unknown) => void;
};

export type TrackFormat = UnknownRecord & {
    bitrate?: unknown;
    bitsPerSample?: unknown;
    codec?: unknown;
    lossless?: boolean;
    quality?: unknown;
    sampleRate?: unknown;
    source?: unknown;
    updatedAt?: unknown;
};

export type TrackQualityInfo = {
    quality: string | null;
    codec: string | null;
    bitsPerSample: number | null;
    sampleRate: number | null;
    bitrateKbits: number | null;
    label: string;
    source: unknown;
    updatedAt: unknown;
};

export type PulseSyncTrackQualityApi = {
    buildInfo: (format?: TrackFormat | null, fallback?: TrackFormat | null) => TrackQualityInfo | null;
    updateFromFormat: (format?: TrackFormat | null, fallback?: TrackFormat | null) => TrackQualityInfo | null;
    format: (format?: TrackFormat | null, fallback?: TrackFormat | null) => string | null;
    getLastInfo: () => TrackQualityInfo | null;
    getCurrentInfo: (fallback?: TrackFormat | null) => Promise<TrackQualityInfo | null>;
    getCurrentLabel: (fallback?: TrackFormat | null) => Promise<string | null>;
};

export type NativeAudioOutputBridge = UnknownRecord & {
    getYaspAudioFormat?: () => Promise<TrackFormat | null>;
    reportWasapiExclusiveAudioParking?: (state: UnknownRecord) => void;
    isWasapiExclusiveOutputEnabled?: () => boolean;
    reportWasapiExclusivePlayerSeek?: (state: UnknownRecord) => void;
    getWasapiExclusiveStatus?: () => Promise<{ outputState?: UnknownRecord | null }>;
    getSelectedWasapiExclusiveDeviceId?: () => Promise<unknown>;
    listWasapiExclusiveDevices?: (options?: UnknownRecord) => Promise<unknown>;
    selectWasapiExclusiveDevice?: (deviceId: unknown) => Promise<unknown>;
    isYaspChunkTapEnabled?: () => boolean;
    pushYaspChunk?: (meta: UnknownRecord, chunk: ArrayBuffer) => void;
    configureYaspSource?: (source: UnknownRecord) => void;
};

export type ScrobbleBridge = {
    lastfmGetUser?: () => Promise<unknown>;
    lastfmLogin?: () => Promise<unknown>;
    lastfmLogout?: () => Promise<unknown>;
};

declare global {
    interface Window {
        __pulsesyncBridgeInitialized?: boolean;
        __pulseSyncPendingPlayerInstance?: PulseSyncPlayer;
        __pulseSyncNativeAudioOutputGainMuteMonitorInstalled?: boolean;
        __pulseSyncWasapiProgressSyncInFlight?: boolean;
        nativeSettings?: { get?: (key: string) => unknown };
        __PULSESYNC_NATIVE_AUDIO_CHUNK_TAP?: boolean;
        __PULSESYNC_YASP_AUDIO_FORMAT_TAP?: boolean;
        __pulseSyncYaspNativeAudioWorkerPatchInstalled?: boolean;
        __pulseSyncYaspNativeAudioSourceConfigHookInstalled?: boolean;
        Ya?: { YaspAudioElement?: Record<string, any> };
        __pulseSyncYandexStationCastEnabled?: boolean;
        ENABLE_YANDEX_STATION_CAST?: () => boolean;
        pulseSyncYandexStationCast?: Record<string, any>;
        __pulsesyncDesktopListenerRegistered?: boolean;
        __pulseSyncYandexStationAudioGraphMonitorInstalled?: boolean;
        __pulseSyncYandexStationOriginalAudioNodeConnect?: (...args: any[]) => unknown;
        __pulseSyncYandexStationOriginalAudioNodeDisconnect?: (...args: any[]) => unknown;
        desktopEvents?: DesktopEventsBridge;
        forcePlayerBarRerender?: () => void;
        DISPLAY_MAX_FPS?: number;
        PLATFORM?: string;
        __PULSESYNC_APPLY_R128_NORMALIZATION__?: (enabled: boolean) => void;
        nativeAudioOutput?: NativeAudioOutputBridge;
        scrobble?: ScrobbleBridge;
        pulsesyncApi?: PulseSyncApi;
        PulseSyncTrackQuality?: PulseSyncTrackQualityApi;
    }
}
