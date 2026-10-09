import type { PulseSyncMetadataEntityType } from '@pulsesync/yamusic-types';
import { findMetadataOverride, hasMetadataOverrides } from './metadataRegistry';
import { rememberMetadataSource } from './metadataProvenance';

type Entity = Record<string, any>;
function record(value: unknown): value is Entity {
    return value !== null && typeof value === 'object' && !Array.isArray(value);
}
function apply(value: unknown, type: PulseSyncMetadataEntityType): unknown {
    if (!record(value)) return value;
    const selected = findMetadataOverride(value, type);
    if (!selected) return value;
    const copy = structuredClone(selected);
    // Resource consumers use different cover aliases. An explicit cover replaces those aliases together.
    const cover = copy.cover as Entity | undefined;
    const uri = copy.coverUri ?? copy.ogImage ?? cover?.uri ?? cover?.prefix;
    if (typeof uri === 'string') {
        copy.coverUri ??= uri;
        copy.ogImage ??= uri;
        copy.cover = { ...(record(value.cover) ? value.cover : {}), ...cover, uri: cover?.uri ?? uri };
    }
    return { ...value, ...copy, ...(type === 'track' && record(value.substituted) ? { substituted: { ...value.substituted, ...structuredClone(copy) } } : {}) };
}

function map(value: unknown, transform: (value: unknown) => unknown): unknown {
    if (!Array.isArray(value)) return value;
    let changed = false;
    const next = value.map((item) => {
        const result = transform(item);
        changed ||= result !== item;
        return result;
    });
    return changed ? next : value;
}

function fields(value: unknown, adapters: Record<string, (value: unknown) => unknown>): unknown {
    if (!record(value)) return value;
    let result = value;
    for (const [key, adapter] of Object.entries(adapters)) {
        if (!Object.hasOwn(value, key)) continue;
        const next = adapter(value[key]);
        if (next !== value[key]) {
            if (result === value) result = { ...value };
            result[key] = next;
        }
    }
    return result;
}

function remember(type: PulseSyncMetadataEntityType, original: unknown, result: unknown): unknown {
    rememberMetadataSource(type, original, result);
    return result;
}
export const applyArtist = (value: unknown): unknown => remember('artist', value, apply(value, 'artist'));
const artists = (value: unknown) => map(value, applyArtist);
const albumMetadata = (value: unknown): unknown => remember('album', value, fields(apply(value, 'album'), { artists }));
const trackMetadata = (value: unknown): unknown => fields(value, { artists, albums: (albums) => map(albums, albumMetadata) });
export const applyTrack = (value: unknown): unknown => remember('track', value, fields(trackMetadata(apply(value, 'track')), { substituted: trackMetadata }));
const tracks = (value: unknown) => map(value, applyTrack);
export const applyAlbum = (value: unknown): unknown => fields(albumMetadata(value), { tracks, volumes: (value) => map(value, tracks) });
const albums = (value: unknown) => map(value, applyAlbum);
const release = (value: unknown) => {
    const result = fields(value, { album: applyAlbum, artists });
    // Landing/search releases keep display artists next to the album rather than inside it.
    if (record(value) && record(result) && Object.hasOwn(findMetadataOverride(value.album, 'album') ?? {}, 'artists')) {
        if (record(value.album) && !Array.isArray(value.album.artists) && Array.isArray(value.artists)) {
            rememberMetadataSource('album', { ...value.album, artists: value.artists }, result.album);
        }
        return { ...result, artists: result.album.artists };
    }
    return result;
};
const artistInfo = (value: unknown) =>
    fields(value, {
        artist: applyArtist,
        artists,
        similarArtists: artists,
        tracks,
        popularTracks: tracks,
        albums,
        alsoAlbums: albums,
        lastReleases: albums,
    });
const trackEnvelope = (value: unknown) => fields(value, { track: applyTrack });
const sequence = (value: unknown): unknown => fields(value, { sequence: (items) => map(items, trackEnvelope) });
const landingItem = (value: unknown): unknown => {
    if (!record(value)) return value;
    if (value.type === 'album_item') return fields(value, { data: release });
    if (value.type === 'artist_item') return fields(value, { data: artistInfo });
    return value;
};
const searchItem = (value: unknown) =>
    fields(value, {
        track: applyTrack,
        album: applyAlbum,
        artist: applyArtist,
        best_result_track: applyTrack,
        best_result_album: release,
        best_result_recent_release: release,
        best_result_artist: artistInfo,
    });

/** Explicit resource response shapes only; unknown fields and envelope metadata are preserved. */
export function applyMetadataResponse(kind: string, value: unknown): unknown {
    if (!hasMetadataOverrides()) return value;
    switch (kind) {
        case 'tracks':
            return tracks(value);
        case 'trackInfo':
            return fields(value, { track: applyTrack, similarTracks: tracks });
        case 'albums':
            return albums(value);
        case 'album':
            return applyAlbum(value);
        case 'artist':
            return artistInfo(value);
        case 'artistTracks':
            return Array.isArray(value) ? tracks(value) : fields(value, { tracks });
        case 'artistAlbums':
            return Array.isArray(value) ? albums(value) : fields(value, { albums });
        case 'familiar':
            return fields(value, { wave: (wave) => fields(wave, { tracks }), collection: (collection) => fields(collection, { tracks, albums }) });
        case 'landing':
            return fields(value, { tracks, release, items: (items) => map(items, landingItem) });
        case 'search':
            return fields(value, { bestResults: (items) => map(items, searchItem), results: (items) => map(items, searchItem) });
        case 'chart':
            return fields(value, { chart: (chart) => fields(chart, { tracks: (items) => map(items, trackEnvelope) }) });
        case 'rotor':
            return sequence(value);
        case 'albumEtag':
        case 'trackInfoEtag':
            return record(value) && value.notModified !== true
                ? fields(value, { data: kind === 'albumEtag' ? applyAlbum : (data) => fields(data, { track: applyTrack, similarTracks: tracks }) })
                : value;
        default:
            return value;
    }
}
