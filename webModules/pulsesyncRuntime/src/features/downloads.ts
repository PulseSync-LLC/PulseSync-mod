import type { DownloadOperation, DownloadOptions } from '../../../shared/downloads';

type NativeState = { loadingState?: string; progress?: number };
export type NativeSource = {
    available: boolean;
    start: (id: string) => void;
    cancel: (id: string) => void;
    get: (id: string) => NativeState | undefined;
    subscribe: (listener: (id: string, state: NativeState) => void) => () => void;
};
type Operation = {
    owner: string;
    value: DownloadOperation;
    source?: NativeSource;
    states?: Map<string, NativeState>;
    lastStatus?: string;
    lastEventAt?: number;
    fileStarted?: boolean;
};
type Lease = { source: NativeSource; id: string; started: boolean; owners: Set<Operation> };

const operations = new Map<string, Operation>();
const listeners = new Map<string, Set<(operation: DownloadOperation) => void>>();
const leases = new Map<string, Lease>();
let nativeSource: NativeSource | undefined;
let disposeNativeSource: (() => void) | undefined;
let fileSubscribed = false;

const terminal = (value: DownloadOperation) => ['completed', 'failed', 'cancelled'].includes(value.status);
const copy = (value: DownloadOperation): DownloadOperation => ({ ...value, trackIds: [...value.trackIds] });
const baseId = (id: string) => id.split(':')[0]!;

function ownerId(value?: string) {
    const id = String(value ?? '').trim();

    if (!id || id.length > 200) {
        throw new TypeError('Download owner is required');
    }

    return id;
}

function emit(operation: Operation) {
    const now = Date.now();

    if (
        !terminal(operation.value) &&
        operation.lastStatus === operation.value.status &&
        now - (operation.lastEventAt ?? 0) < 200
    ) {
        return;
    }

    operation.lastStatus = operation.value.status;
    operation.lastEventAt = now;

    for (const listener of listeners.get(operation.owner) ?? []) {
        try {
            listener(copy(operation.value));
        } catch (error) {
            console.warn('[PulseSync] Download listener failed:', error);
        }
    }

    const finished = [...operations.values()].filter((entry) => terminal(entry.value));

    while (finished.length > 128) {
        operations.delete(finished.shift()!.value.id);
    }
}

function release(operation: Operation, stop: boolean) {
    for (const [id, lease] of leases) {
        if (!lease.owners.delete(operation) || lease.owners.size) {
            continue;
        }

        leases.delete(id);

        if (stop && lease.started) {
            try {
                lease.source.cancel(lease.id);
            } catch (error) {
                console.warn('[PulseSync] Native download cancellation failed:', error);
            }
        }
    }
}

function updateNative(operation: Operation) {
    if (terminal(operation.value)) {
        return;
    }

    const states = [...operation.states!.values()];

    operation.value.progress =
        states.reduce(
            (sum, state) =>
                sum +
                (state.loadingState === 'DOWNLOADED'
                    ? 1
                    : Math.max(0, Math.min(1, Number.isFinite(state.progress) ? state.progress! : 0))),
            0,
        ) / states.length;

    if (states.some((state) => state.loadingState === 'DOWNLOAD_FAILED')) {
        operation.value.status = 'failed';
        operation.value.error = 'Не удалось скачать трек в офлайн-кеш';
    } else if (states.every((state) => state.loadingState === 'DOWNLOADED')) {
        operation.value.status = 'completed';
    }

    if (terminal(operation.value)) {
        release(operation, operation.value.status !== 'completed');
    }

    emit(operation);
}

export function registerNativeTrackDownloads(source: NativeSource) {
    disposeNativeSource?.();
    nativeSource = source;

    const unsubscribe = source.subscribe((id, state) => {
        const lease = leases.get(baseId(String(id)));

        if (!lease || lease.source !== source) {
            return;
        }

        for (const operation of [...lease.owners]) {
            if (state.loadingState === 'IDLE') {
                operation.value.status = 'cancelled';
                release(operation, true);
                emit(operation);
            } else {
                operation.states!.set(baseId(String(id)), state);
                updateNative(operation);
            }
        }
    });
    let active = true;
    const cleanup = () => {
        if (!active) {
            return;
        }

        active = false;
        unsubscribe();

        if (nativeSource === source) {
            nativeSource = undefined;
        }

        for (const operation of operations.values()) {
            if (operation.source === source && !terminal(operation.value)) {
                operation.value.status = 'cancelled';
                release(operation, true);
                emit(operation);
            }
        }
    };

    disposeNativeSource = cleanup;

    return cleanup;
}

function subscribeFiles() {
    if (fileSubscribed) {
        return;
    }

    const desktop = window.musicDesktop?.pulsesync.downloads;

    if (!desktop?.onAddonProgress) {
        throw new Error('File downloads require a newer PulseSync preload');
    }

    desktop.onAddonProgress((owner, value) => {
        const previous = operations.get(value.id);

        if (previous && previous.owner !== owner) {
            return;
        }

        if (previous && terminal(previous.value)) {
            return;
        }

        const operation = previous ?? { owner, value };

        operation.value = copy(value);
        operations.set(value.id, operation);
        emit(operation);
    });
    fileSubscribed = true;
}

export async function startTrackDownloads(
    ids: readonly (string | number)[],
    options: DownloadOptions = {},
    owner?: string,
) {
    const ownerKey = ownerId(owner);

    if (!options || typeof options !== 'object' || Array.isArray(options)) {
        throw new TypeError('Invalid download options');
    }

    const mode = options.mode ?? 'file';

    if (mode !== 'offline' && mode !== 'file') {
        throw new TypeError('Unknown download mode');
    }

    if (!Array.isArray(ids) || !ids.length || ids.length > 500) {
        throw new TypeError('Provide between 1 and 500 track IDs');
    }

    const seen = new Set<string>();
    const trackIds = ids
        .map((id) => {
            if (!['string', 'number'].includes(typeof id) || !/^[\w.:-]{1,200}$/.test(String(id))) {
                throw new TypeError('Invalid track ID');
            }

            if (typeof id === 'number' && (!Number.isSafeInteger(id) || id <= 0)) {
                throw new TypeError('Invalid numeric track ID');
            }

            return String(id);
        })
        .filter((id) => {
            const key = mode === 'offline' ? baseId(id) : id;

            if (seen.has(key)) {
                return false;
            }

            seen.add(key);

            return true;
        });
    const active = [...operations.values()].filter((operation) => !terminal(operation.value));

    if (active.length >= 16 || active.filter((operation) => operation.owner === ownerKey).length >= 4) {
        throw new Error('Too many active downloads');
    }

    if (mode === 'file') {
        subscribeFiles();

        const operation: Operation = {
            owner: ownerKey,
            value: { id: crypto.randomUUID(), mode, status: 'queued', trackIds, progress: 0 },
        };

        operations.set(operation.value.id, operation);
        emit(operation);

        if (terminal(operation.value)) {
            return operation.value.id;
        }

        try {
            operation.fileStarted = true;
            await window.musicDesktop!.pulsesync.downloads.startAddon(trackIds, ownerKey, operation.value.id);

            if (operation.value.status === 'cancelled') {
                await window.musicDesktop!.pulsesync.downloads.cancelAddon(operation.value.id, ownerKey);
            }

            return operation.value.id;
        } catch (error) {
            if (!terminal(operation.value)) {
                operation.value.status = 'failed';
                operation.value.error =
                    error instanceof Error ? error.message.slice(0, 500) : 'Не удалось запустить загрузку';
                emit(operation);
            }

            throw error;
        }
    }

    const source = nativeSource;

    if (!source?.available) {
        throw new Error('Штатная офлайн-загрузка недоступна для этого аккаунта или режима приложения');
    }

    const operation: Operation = {
        owner: ownerKey,
        source,
        states: new Map(),
        value: { id: crypto.randomUUID(), mode, status: 'queued', trackIds, progress: 0 },
    };

    for (const id of trackIds) {
        operation.states!.set(baseId(id), {});
    }

    operations.set(operation.value.id, operation);
    emit(operation);
    queueMicrotask(() => {
        if (terminal(operation.value)) {
            return;
        }

        operation.value.status = 'downloading';

        try {
            for (const id of trackIds) {
                if (terminal(operation.value)) {
                    break;
                }

                const state = source.get(id) ?? {};

                operation.states!.set(baseId(id), state);

                if (state.loadingState === 'DOWNLOADED') {
                    continue;
                }

                operation.states!.set(baseId(id), {
                    loadingState: 'DOWNLOADING',
                    progress: state.loadingState === 'DOWNLOADING' ? (state.progress ?? 0) : 0,
                });

                let lease = leases.get(baseId(id));

                if (!lease) {
                    lease = { id, source, started: state.loadingState !== 'DOWNLOADING', owners: new Set() };
                    leases.set(baseId(id), lease);
                }

                lease.owners.add(operation);

                if (lease.started && lease.owners.size === 1) {
                    source.start(id);
                }
            }

            updateNative(operation);
        } catch {
            operation.value.status = 'failed';
            operation.value.error = 'Не удалось запустить офлайн-загрузку';
            release(operation, true);
            emit(operation);
        }
    });

    return operation.value.id;
}

export async function getTrackDownload(id: string, owner?: string) {
    const operation = operations.get(id);

    return operation?.owner === ownerId(owner) ? copy(operation.value) : null;
}

export async function cancelTrackDownload(id: string, owner?: string) {
    const operation = operations.get(id);

    if (!operation || operation.owner !== ownerId(owner) || terminal(operation.value)) {
        return false;
    }

    if (operation.value.mode === 'file') {
        if (!operation.fileStarted) {
            operation.value.status = 'cancelled';
            emit(operation);

            return true;
        }

        const accepted = await window.musicDesktop!.pulsesync.downloads.cancelAddon(id, operation.owner);

        if (accepted && !terminal(operation.value)) {
            operation.value.status = 'cancelled';
            emit(operation);
        }

        return accepted;
    }

    operation.value.status = 'cancelled';
    release(operation, true);
    emit(operation);

    return true;
}

export function onTrackDownloadProgress(listener: (operation: DownloadOperation) => void, owner?: string) {
    const key = ownerId(owner);

    if (typeof listener !== 'function') {
        throw new TypeError('Download listener is required');
    }

    const callbacks = listeners.get(key) ?? new Set();

    callbacks.add(listener);
    listeners.set(key, callbacks);

    return () => {
        callbacks.delete(listener);

        if (!callbacks.size) {
            listeners.delete(key);
        }
    };
}

export function clearTrackDownloads(owner?: string) {
    const key = ownerId(owner);

    listeners.delete(key);

    for (const operation of operations.values()) {
        if (operation.owner !== key || terminal(operation.value)) {
            continue;
        }

        if (operation.value.mode === 'file') {
            operation.value.status = 'cancelled';
            void window.musicDesktop!.pulsesync.downloads.cancelAddon(operation.value.id, key).catch(console.warn);
        } else {
            void cancelTrackDownload(operation.value.id, key).catch(console.warn);
        }
    }
}
