export type DownloadMode = 'offline' | 'file';
export type DownloadOptions = { mode?: DownloadMode };
export type DownloadOperation = {
    id: string;
    mode: DownloadMode;
    status: 'queued' | 'downloading' | 'completed' | 'failed' | 'cancelled';
    trackIds: string[];
    /** Overall progress from 0 to 1. */
    progress: number;
    error?: string;
};
export type DownloadsApi = {
    track: (id: string | number, options?: DownloadOptions) => Promise<string>;
    tracks: (ids: readonly (string | number)[], options?: DownloadOptions) => Promise<string>;
    get: (id: string) => Promise<DownloadOperation | null>;
    cancel: (id: string) => Promise<boolean>;
    onProgress: (listener: (operation: DownloadOperation) => void) => () => void;
};
export type DownloadsClient = {
    startTrackDownloads: (
        ids: readonly (string | number)[],
        options?: DownloadOptions,
        ownerId?: string,
    ) => Promise<string>;
    getTrackDownload: (id: string, ownerId?: string) => Promise<DownloadOperation | null>;
    cancelTrackDownload: (id: string, ownerId?: string) => Promise<boolean>;
    onTrackDownloadProgress: (listener: (operation: DownloadOperation) => void, ownerId?: string) => () => void;
    clearTrackDownloads: (ownerId?: string) => void;
};
