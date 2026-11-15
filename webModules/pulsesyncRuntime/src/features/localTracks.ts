import type { LocalTrack, LocalTracksChange, LocalTracksSnapshot } from '@pulsesync/yamusic-types';

export type NativeLocalTracksSource = {
    list: () => Promise<unknown[]>;
    subscribe: (listener: () => void) => () => void;
};

let source: NativeLocalTracksSource | undefined;
let disposeSource: (() => void) | undefined;
let revision = 0;
let scheduled = false;
let cache: { revision: number; tracks: Promise<LocalTrack[]> } | undefined;
const listeners = new Set<(change: LocalTracksChange) => void>();

function changed() {
    ++revision;
    cache = undefined;

    if (scheduled) {
        return;
    }

    scheduled = true;
    queueMicrotask(() => {
        scheduled = false;

        const change = { available: Boolean(source), revision };

        for (const listener of [...listeners]) {
            try {
                listener(change);
            } catch (error) {
                console.error('[PulseSync] Local tracks listener failed', error);
            }
        }
    });
}

export function registerNativeLocalTracks(next: NativeLocalTracksSource) {
    disposeSource?.();
    source = next;

    const unsubscribe = next.subscribe(changed);
    let active = true;
    const dispose = () => {
        if (!active) {
            return;
        }

        active = false;
        unsubscribe();

        if (source === next) {
            source = undefined;
        }

        if (disposeSource === dispose) {
            disposeSource = undefined;
        }

        changed();
    };

    disposeSource = dispose;
    changed();

    return dispose;
}

function normalizeTrack(value: unknown): LocalTrack | null {
    if (!value || typeof value !== 'object') {
        return null;
    }

    const meta = value as Record<string, any>;

    if (typeof meta.id !== 'string' && typeof meta.id !== 'number') {
        return null;
    }

    const id = String(meta.id);

    if (!id || id.length > 200) {
        return null;
    }

    const text = (item: unknown) => (typeof item === 'string' ? item : '');

    return {
        id,
        playbackId: id,
        title: text(meta.title),
        version: text(meta.version) || null,
        artists: Array.from(meta.artists ?? [], (artist: any) => ({
            id: artist.id == null ? null : String(artist.id),
            name: text(artist.name),
        })),
        albums: Array.from(meta.albums ?? [], (album: any) => ({ id: String(album.id), title: text(album.title) })),
        durationMs: typeof meta.durationMs === 'number' && Number.isFinite(meta.durationMs) ? meta.durationMs : null,
        coverUri: text(meta.coverUri) || null,
        trackSource: text(meta.trackSource) || null,
    };
}

export async function listLocalTracks(options: { offset?: number; limit?: number } = {}): Promise<LocalTracksSnapshot> {
    if (!options || typeof options !== 'object' || Array.isArray(options)) {
        throw new TypeError('Invalid local tracks options');
    }

    const offset = options.offset ?? 0,
        limit = options.limit ?? 100;

    if (!Number.isSafeInteger(offset) || offset < 0 || !Number.isSafeInteger(limit) || limit < 1 || limit > 200) {
        throw new RangeError('Local tracks require offset >= 0 and limit 1..200');
    }

    const active = source,
        epoch = revision;

    if (!active) {
        return { available: false, revision, total: 0, offset, tracks: [] };
    }

    if (!cache || cache.revision !== epoch) {
        const tracks = active.list().then((items) => {
            const unique = new Map<string, LocalTrack>();

            for (const item of items) {
                const track = normalizeTrack(item);

                if (track) {
                    unique.set(track.id, track);
                }
            }

            return [...unique.values()].sort((a, b) => a.id.localeCompare(b.id));
        });

        cache = { revision: epoch, tracks };
        void tracks.catch(() => {
            if (cache?.tracks === tracks) {
                cache = undefined;
            }
        });
    }

    const tracks = await cache.tracks;

    if (active !== source || epoch !== revision) {
        throw new DOMException('Local catalog changed; read the page again', 'AbortError');
    }

    return {
        available: true,
        revision,
        total: tracks.length,
        offset,
        tracks: structuredClone(tracks.slice(offset, offset + limit)),
    };
}

export function onLocalTracksChange(listener: (change: LocalTracksChange) => void) {
    listeners.add(listener);

    return () => {
        listeners.delete(listener);
    };
}
