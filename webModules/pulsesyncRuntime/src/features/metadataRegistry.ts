import type { PulseSyncMetadataEntityType } from '@pulsesync/yamusic-types';

type Entity = Record<string, any>;
type Patch = Record<string, unknown>;
type Registration = Record<PulseSyncMetadataEntityType, Map<string, Patch>>;
const registrations = new Map<string, Registration>();
const groups = { tracks: 'track', albums: 'album', artists: 'artist' } as const;
const commonFields = ['coverUri', 'ogImage'];
const textFields = {
    track: ['title', 'name', 'version', ...commonFields],
    album: ['title', 'name', 'version', 'genre', 'releaseDate', 'type', ...commonFields],
    artist: ['name', 'description', ...commonFields],
};
const MAX_ENTRIES = 1000;
const MAX_JSON_BYTES = 1024 * 1024;

function record(value: unknown): value is Entity {
    return value !== null && typeof value === 'object' && !Array.isArray(value);
}

function plain(value: unknown): asserts value is Entity {
    if (!record(value) || ![Object.prototype, null].includes(Object.getPrototypeOf(value))) throw new TypeError('Metadata must contain plain objects');
    for (const key of Reflect.ownKeys(value)) {
        const descriptor = Object.getOwnPropertyDescriptor(value, key)!;
        if (typeof key !== 'string' || !descriptor.enumerable || !('value' in descriptor)) throw new TypeError('Metadata must contain serializable data properties');
    }
}

function id(value: unknown): string {
    if (typeof value === 'number' && (!Number.isSafeInteger(value) || value < 0)) throw new TypeError('Invalid metadata ID');
    if ((typeof value !== 'string' && typeof value !== 'number') || !/^[A-Za-z0-9_-]{1,128}$/.test(String(value))) throw new TypeError('Invalid metadata ID');
    return String(value);
}

function owner(value: unknown): string {
    if (typeof value !== 'string' || !value.trim() || value.length > 256) throw new TypeError('Metadata owner is required');
    return value;
}

function text(value: unknown, limit = 4096): string {
    if (typeof value !== 'string' || value.length > limit) throw new TypeError('Invalid metadata string');
    return value;
}

export function validateMetadataPatch(value: unknown, type: PulseSyncMetadataEntityType, withId = false): Patch {
    plain(value);
    const result: Patch = {};
    for (const [key, field] of Object.entries(value)) {
        if (key === 'id' && withId) {
            id(field);
            result.id = field;
        } else if (textFields[type].includes(key)) result[key] = text(field, key === 'description' ? 16384 : 4096);
        else if (key === 'cover') {
            plain(field);
            const cover: Patch = {};
            for (const [name, entry] of Object.entries(field)) {
                if (!['type', 'uri', 'prefix'].includes(name)) throw new TypeError(`Unsupported metadata cover field: ${name}`);
                cover[name] = text(entry);
            }
            result.cover = cover;
        } else if (key === 'artists' && type !== 'artist') {
            if (!Array.isArray(field) || field.length > 100) throw new TypeError('Invalid metadata artists');
            result.artists = Array.from(field, (artist) => {
                plain(artist);
                id(artist.id);
                return validateMetadataPatch(artist, 'artist', true);
            });
        } else if (key === 'genres' && type === 'artist') {
            if (!Array.isArray(field) || field.length > 100) throw new TypeError('Invalid metadata genres');
            result.genres = Array.from(field, (genre) => text(genre));
        } else if (key === 'year' && type === 'album') {
            if (typeof field !== 'number' || !Number.isInteger(field) || field < 0 || field > 9999) throw new TypeError('Invalid metadata year');
            result.year = field;
        } else if (key === 'available' && type === 'track') {
            if (typeof field !== 'boolean') throw new TypeError('Invalid metadata availability');
            result.available = field;
        } else if (key === 'error' && type === 'track') result.error = field === null ? null : text(field);
        else throw new TypeError(`Unsupported ${type} metadata field: ${key}`);
    }
    return result;
}

export function setMetadataOverrides(value: unknown, ownerId?: string): number {
    const key = owner(ownerId);
    plain(value);
    const next: Registration = { track: new Map(), album: new Map(), artist: new Map() };
    let count = 0;
    let bytes = 0;
    for (const [group, entries] of Object.entries(value)) {
        if (!Object.hasOwn(groups, group)) throw new TypeError(`Unsupported metadata group: ${group}`);
        plain(entries);
        const type = groups[group as keyof typeof groups];
        for (const [entityId, input] of Object.entries(entries)) {
            if (++count > MAX_ENTRIES) throw new RangeError('Too many metadata overrides');
            const entityKey = id(entityId);
            const copy = validateMetadataPatch(input, type);
            bytes += new TextEncoder().encode(JSON.stringify(copy)).byteLength + entityKey.length;
            if (bytes > MAX_JSON_BYTES) throw new RangeError('Metadata overrides exceed 1 MiB');
            next[type].set(entityKey, copy);
        }
    }
    registrations.delete(key);
    if (count) registrations.set(key, next);
    notifyMetadataChange();
    return count;
}

export function removeMetadataOverride(type: PulseSyncMetadataEntityType, entityId: string, ownerId?: string): boolean {
    const key = owner(ownerId);
    if (!['track', 'album', 'artist'].includes(type)) throw new TypeError('Unsupported metadata entity type');
    const registration = registrations.get(key);
    const removed = registration?.[type].delete(id(entityId)) ?? false;
    if (registration && !Object.values(registration).some((entries) => entries.size)) registrations.delete(key);
    if (removed) notifyMetadataChange();
    return removed;
}

export function clearMetadataOverrides(ownerId?: string): boolean {
    const removed = registrations.delete(owner(ownerId));
    if (removed) notifyMetadataChange();
    return removed;
}

export function findMetadataOverride(value: unknown, type: PulseSyncMetadataEntityType): Patch | undefined {
    if (!record(value)) return undefined;
    let selected: Patch | undefined;
    // A track can carry an album-qualified ID; the entity's ID remains unchanged.
    const key = type === 'track' ? String(value.id ?? '').split(':')[0] : String(value.id ?? '');
    for (const entry of registrations.values()) selected = entry[type].get(key) ?? selected;
    return selected;
}

const changeListeners = new Set<() => void>();

export function hasMetadataOverrides(): boolean {
    return registrations.size > 0;
}

export function onMetadataOverridesChange(listener: () => void): () => void {
    changeListeners.add(listener);
    return () => changeListeners.delete(listener);
}

function notifyMetadataChange(): void {
    for (const listener of changeListeners) {
        try {
            listener();
        } catch {
            /* A renderer refresh cannot invalidate a successful registration. */
        }
    }
}
