import type { PulseSyncMetadataEntityType } from '@pulsesync/yamusic-types';

type Kind = PulseSyncMetadataEntityType;
export type MetadataSnapshot = Record<string, any>;
type Source = { native: MetadataSnapshot; applied: MetadataSnapshot; bytes: number };
const fields: Record<Kind, readonly string[]> = {
    track: ['title', 'name', 'version', 'coverUri', 'ogImage', 'cover', 'artists', 'albums', 'available', 'error', 'substituted'],
    album: ['title', 'name', 'version', 'genre', 'releaseDate', 'type', 'year', 'coverUri', 'ogImage', 'cover', 'artists'],
    artist: ['name', 'description', 'genres', 'coverUri', 'ogImage', 'cover'],
};
const sources = new Map<string, Source[]>();
const origins = new WeakMap<object, MetadataSnapshot>();
const MAX_BYTES = 4 * 1024 * 1024;
let sourceBytes = 0;
let capturing = true;

export function metadataEqual(left: unknown, right: unknown): boolean {
    return JSON.stringify(left) === JSON.stringify(right);
}
export function metadataFields(kind: Kind): readonly string[] {
    return fields[kind];
}
function sourceKey(kind: Kind, value: MetadataSnapshot): string {
    const id = kind === 'track' ? String(value.id).split(':')[0] : String(value.id);
    return `${kind}:${id}`;
}
function metadataOnly(kind: Kind, value: MetadataSnapshot): MetadataSnapshot {
    const result: MetadataSnapshot = { id: value.id };
    for (const field of fields[kind]) if (field in value) result[field] = structuredClone(value[field]);
    return result;
}

/** Live projection is not a new server response and must never overwrite native provenance. */
export function withoutMetadataSourceCapture<T>(callback: () => T): T {
    const previous = capturing;
    capturing = false;
    try {
        return callback();
    } finally {
        capturing = previous;
    }
}
export function rememberMetadataSource(kind: Kind, nativeValue: unknown, appliedValue: unknown): void {
    if (!capturing || !nativeValue || !appliedValue || typeof nativeValue !== 'object' || typeof appliedValue !== 'object' || nativeValue === appliedValue) return;
    try {
        const native = origins.get(nativeValue) ?? metadataOnly(kind, nativeValue as MetadataSnapshot);
        const applied = metadataOnly(kind, appliedValue as MetadataSnapshot);
        origins.set(appliedValue, native);
        const bytes = new TextEncoder().encode(JSON.stringify([native, applied])).byteLength;
        if (bytes > MAX_BYTES / 4) return;
        const key = sourceKey(kind, native);
        const previous = sources.get(key) ?? [];
        sources.delete(key);
        for (const entry of previous) sourceBytes -= entry.bytes;
        const next = [{ native, applied, bytes }, ...previous.filter((entry) => !metadataEqual(entry.applied, applied))].slice(0, 4);
        sources.set(key, next);
        for (const entry of next) sourceBytes += entry.bytes;
        while (sources.size > 2000 || sourceBytes > MAX_BYTES) {
            const first = sources.keys().next().value!;
            for (const entry of sources.get(first)!) sourceBytes -= entry.bytes;
            sources.delete(first);
        }
    } catch {
        /* Provenance is optional; response delivery must remain fail-open. */
    }
}

/** Translate native snapshot aliases before applying the same policy used for resource DTOs. */
export function toRawMetadata(kind: Kind, snapshot: MetadataSnapshot): MetadataSnapshot {
    const raw = structuredClone(snapshot);
    if ('isAvailable' in raw) {
        raw.available = raw.isAvailable;
        delete raw.isAvailable;
    }
    if (kind === 'track' && 'isRemoved' in raw) {
        raw.error = raw.isRemoved ? 'not-found' : null;
        delete raw.isRemoved;
    }
    if (Array.isArray(raw.artists)) raw.artists = raw.artists.map((artist) => toRawMetadata('artist', artist));
    if (kind === 'track' && Array.isArray(raw.albums)) raw.albums = raw.albums.map((album) => toRawMetadata('album', album));
    return raw;
}

function artistSnapshot(raw: MetadataSnapshot, previous?: MetadataSnapshot): MetadataSnapshot {
    const result = previous ? structuredClone(previous) : { id: String(raw.id), name: '', isAvailable: true, coverUri: undefined };
    for (const field of fields.artist) if (field in result && field in raw) result[field] = structuredClone(raw[field]);
    for (const field of ['various', 'isComposer', 'coverType', 'cutoutCover', 'averageColor']) {
        if (field in raw) result[field] = structuredClone(raw[field]);
    }
    if ('composer' in raw) result.isComposer = raw.composer;
    result.id = String(raw.id);
    result.name = raw.name ?? result.name;
    result.isAvailable = raw.available ?? raw.isAvailable ?? result.isAvailable;
    result.coverUri = raw.coverUri ?? raw.ogImage ?? raw.cover?.uri ?? raw.cover?.prefix;
    return result;
}

/** Keep the existing native schema and non-metadata snapshot fields intact. */
export function toNativeMetadata(kind: Kind, raw: MetadataSnapshot, template: MetadataSnapshot): MetadataSnapshot {
    const result = structuredClone(template);
    for (const field of fields[kind]) if (field in template && field !== 'artists' && field !== 'albums') result[field] = structuredClone(raw[field]);
    if (kind === 'track') {
        const substituted = raw.substituted;
        result.title = substituted?.title ?? raw.title ?? '';
        if ('version' in template) result.version = substituted?.version ?? raw.version;
        if ('coverUri' in template)
            result.coverUri = substituted?.coverUri || substituted?.ogImage || substituted?.cover?.uri || substituted?.albums?.[0]?.coverUri || raw.coverUri;
        if ('isAvailable' in template) result.isAvailable = Boolean(raw.available);
        if ('isRemoved' in template) result.isRemoved = raw.error === 'not-found';
    } else if (kind === 'artist' && 'coverUri' in template) result.coverUri = raw.coverUri ?? raw.ogImage ?? raw.cover?.uri ?? raw.cover?.prefix;
    const artists = kind === 'track' ? (raw.substituted?.artists ?? raw.artists) : raw.artists;
    if (Array.isArray(template.artists) && Array.isArray(artists)) {
        result.artists = artists.map((artist) =>
            artistSnapshot(
                artist,
                template.artists.find((entry: MetadataSnapshot) => String(entry.id) === String(artist.id)),
            ),
        );
    }
    if (kind === 'track' && Array.isArray(template.albums) && Array.isArray(raw.albums)) {
        result.albums = template.albums.map((album: MetadataSnapshot) => {
            const source = raw.albums.find((entry: MetadataSnapshot) => String(entry.id) === String(album.id));
            return source ? toNativeMetadata('album', source, album) : album;
        });
    }
    return result;
}

/** Recover only fields that still match a known patched response, newest matching variant first. */
export function restoreMetadataBaseline(kind: Kind, snapshot: MetadataSnapshot, nativeModel: boolean): MetadataSnapshot {
    const baseline = structuredClone(snapshot);
    const restored = new Set<string>();
    for (const source of sources.get(sourceKey(kind, snapshot)) ?? []) {
        const native = nativeModel ? toNativeMetadata(kind, source.native, snapshot) : source.native;
        const applied = nativeModel ? toNativeMetadata(kind, source.applied, snapshot) : source.applied;
        for (const field of new Set([...Object.keys(native), ...Object.keys(applied)])) {
            if (field === 'id' || restored.has(field) || metadataEqual(native[field], applied[field]) || !metadataEqual(snapshot[field], applied[field])) continue;
            if (field in native) baseline[field] = structuredClone(native[field]);
            else delete baseline[field];
            restored.add(field);
        }
    }
    return baseline;
}
