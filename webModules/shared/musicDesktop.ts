type Cleanup = () => void;
type Subscription<Args extends unknown[]> = (listener: (...args: Args) => void) => Cleanup;
type Snapshot = Record<string, unknown>;
type StationResult = { ok?: boolean; reason?: string; [key: string]: unknown };

export type PulseSyncDesktopBridge = {
    downloads: {
        currentTrack: (trackId?: unknown) => void;
        track: (trackId: unknown, name?: string) => void;
        tracks: (trackIds: string[], type: string, name: string) => void;
        cancel: (operation: unknown) => void;
        onProgress: Subscription<[id: string, progress: number, nonce?: number, label?: string, createNonce?: number]>;
    };
    settings: {
        get: (key: string) => Promise<unknown>;
        set: (key: string, value: unknown) => Promise<unknown>;
        selectDirectory: (key: string) => Promise<unknown>;
        getAddonSnapshot: <T = unknown>() => Promise<T>;
        setAutoStartup: (enabled: boolean) => void;
        setShortcutsRecording: (recording: boolean) => void;
        onChange: Subscription<[key: string, value: unknown]>;
        onAddonChange: Subscription<[payload: Snapshot]>;
        onOpenDeeplink: Subscription<[pathname: string]>;
    };
    addons: {
        getLegacySnapshot: <T = unknown>() => Promise<T>;
        getWebHostSnapshot: <T = unknown>() => Promise<T>;
        recover: <T = unknown>(
            request:
                | {
                      runtime: 'webhost';
                      action: 'quarantine' | 'retry';
                      addonId: string;
                      fingerprint: string;
                      reason?: string;
                  }
                | {
                      runtime: 'legacy';
                      action: 'begin' | 'complete' | 'failure';
                      asset: { id: string; fingerprint: string; name: string; kind: string; isSystem: boolean };
                      reason?: string;
                  },
        ) => Promise<T>;
        onLegacyChange: Subscription<[snapshot: unknown]>;
        onWebHostChange: Subscription<[snapshot: unknown]>;
    };
    webHost: {
        reportHealth: (state: {
            status: 'booting' | 'ready' | 'failed';
            apiVersion?: number;
            message?: string;
        }) => void;
    };
    station: {
        getState: () => Promise<unknown>;
        selectSpeaker: (deviceId: string) => Promise<StationResult>;
        clearSpeaker: () => Promise<StationResult>;
        control: (action: string, payload: Snapshot) => Promise<StationResult>;
        onState: Subscription<[state: unknown]>;
        onPlaybackState: Subscription<[state: Snapshot]>;
    };
    audio: {
        onFormatChanged: Subscription<[format: unknown]>;
        onWasapiStateChanged: Subscription<[state: unknown]>;
    };
    notifications: {
        show: (options: { ownerId?: string; message: string; durationMs?: number }) => Promise<unknown>;
        onCreate: Subscription<
            [
                id: string,
                message: string,
                buttonLabel: string | false,
                nonce?: number,
                action?: string,
                payload?: unknown,
            ]
        >;
        onDismiss: Subscription<[id: string, nonce?: number, createNonce?: number]>;
    };
    updates: {
        download: () => void;
        install: () => void;
        onAvailable: Subscription<[currentVersion: string, newVersion: string, nonce?: number]>;
    };
    app: {
        restart: () => void;
        cancelStallRestart: () => void;
        isPremiumUser: () => Promise<unknown>;
        onGpuStall: Subscription<[reason?: string, nonce?: number]>;
        onStall: Subscription<[state: unknown]>;
    };
    player: {
        onApiRequest: Subscription<[request: Snapshot]>;
        onCurrentTrackRequest: Subscription<[]>;
        reportYnisonState: (state: Snapshot) => void;
    };
    metrics: { reportExperiments: (metrics: unknown) => void };
    lastfm: { onUserInfoChanged: Subscription<[user: unknown]> };
    miniplayer: { toggle: () => void };
};

export type MusicDesktopBridge = {
    runtime: { platform: string };
    authorization?: { getPassportLogin: () => Promise<string | undefined> };
    pulsesync: PulseSyncDesktopBridge;
};
