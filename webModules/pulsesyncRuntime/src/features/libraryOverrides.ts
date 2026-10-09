import { copyResourceData } from './resourceData';
import { validateMetadataPatch } from './metadataOverrides';
import { notifyLibraryChanges } from './libraryLive';

type Data = Record<string, any>;
type Registration = { artists: Map<string, Data>; albums: Map<string, Data>; tracks: Map<string, Data>; localAlbums: Map<string, Data> };
const registrations = new Map<string, Registration>();
const MAX_NATIVE_ITEMS = 5000;
const PAGE_SIZE = 100;
let revision = 0;
const listCache = new Map<string, { expires: number; total: number; items: any[] }>();
const pendingLists = new Map<string, Promise<any[] | undefined>>();
function invalidateLists() {
    revision++;
    listCache.clear();
    pendingLists.clear();
}
export type ResourceInvoke = (request: Data) => Promise<any>;
export type ResourceAuxiliary = (method: string, request: Data) => Promise<any>;

function object(value: any): value is Data {
    return value !== null && typeof value === 'object' && !Array.isArray(value);
}
function owner(value: unknown): string {
    if (typeof value !== 'string' || !value.trim() || value.length > 256) throw new TypeError('Library owner is required');
    return value;
}
function id(value: unknown): string {
    if (typeof value !== 'string' || !/^[1-9][0-9]{0,15}$/.test(value) || !Number.isSafeInteger(Number(value)))
        throw new TypeError('Library IDs must be positive safe decimal strings');
    return value;
}
function keys(value: any, allowed: string[]) {
    if (!object(value) || Object.keys(value).some((key) => !allowed.includes(key))) throw new TypeError('Unsupported library fields');
}
function text(value: unknown) {
    if (typeof value !== 'string' || !value || value.length > 4096) throw new TypeError('Library title/name is required');
}
function artists(value: unknown) {
    if (!Array.isArray(value) || value.length > 100) throw new TypeError('Library artists are required');
    return value.map((artist) => {
        if (!object(artist)) throw new TypeError('Invalid library artist');
        id(String(artist.id));
        text(artist.name);
        return validateMetadataPatch(artist, 'artist', true);
    });
}
function albumReference(value: any): Data {
    if (!object(value)) throw new TypeError('Invalid library album');
    const { id: entityId, ...meta } = value;
    id(entityId);
    text(meta.title);
    return { id: entityId, ...validateMetadataPatch(meta, 'album'), ...(meta.artists ? { artists: artists(meta.artists) } : {}) };
}
function track(value: any): Data {
    if (!object(value)) throw new TypeError('Invalid library track');
    const { id: entityId, durationMs, albums, ...meta } = value;
    id(entityId);
    text(meta.title);
    if (!Number.isSafeInteger(durationMs) || durationMs <= 0 || durationMs > 86400000 || typeof meta.available !== 'boolean')
        throw new TypeError('Track duration and availability are required');
    if (!Array.isArray(albums) || albums.length > 100) throw new TypeError('Track albums are required');
    return { ...validateMetadataPatch(meta, 'track'), id: entityId, durationMs, artists: artists(meta.artists), albums: albums.map(albumReference) };
}
function volumes(value: unknown): Data[][] {
    if (!Array.isArray(value) || value.length > 100) throw new TypeError('Invalid album volumes');
    const seen = new Set<string>();
    return value.map((volume) => {
        if (!Array.isArray(volume) || volume.length > 1000) throw new TypeError('Invalid album volume');
        return volume.map(track).filter((item) => {
            if (seen.has(item.id)) return false;
            seen.add(item.id);
            return true;
        });
    });
}
function album(value: any): Data {
    if (!object(value)) throw new TypeError('Invalid library album');
    const { volumes: tracks, available, ...meta } = value;
    if (typeof available !== 'boolean') throw new TypeError('Album availability is required');
    const normalized = volumes(tracks);
    return {
        ...albumReference(meta),
        artists: artists(meta.artists),
        available,
        volumes: normalized,
        trackCount: normalized.flat().length,
        durationMs: normalized.flat().reduce((total, item) => total + item.durationMs, 0),
    };
}
function insertions(value: any, kind: 'track' | 'album'): Data[] {
    if (value === undefined) return [];
    if (!Array.isArray(value) || value.length > 1000) throw new TypeError('Invalid library insertions');
    const seen = new Set<string>();
    return value
        .map((entry, order) => {
            keys(entry, ['index', kind]);
            if (!Number.isSafeInteger(entry.index) || entry.index < 0 || entry.index > MAX_NATIVE_ITEMS) throw new TypeError('Invalid insertion index');
            return { index: entry.index, order, entity: kind === 'track' ? track(entry.track) : album(entry.album) };
        })
        .filter((entry) => {
            if (seen.has(entry.entity.id)) return false;
            seen.add(entry.entity.id);
            return true;
        })
        .sort((a, b) => a.index - b.index || a.order - b.order);
}
function indexTracks(registration: Registration, items: Data[][], albumInfo?: Data, albumId?: string) {
    items.forEach((volume, volumeIndex) =>
        volume.forEach((value, index) => {
            const item = copyResourceData(value);
            if (albumInfo) {
                const { volumes: _volumes, available: _available, ...meta } = albumInfo;
                item.albums = [
                    { ...meta, trackPosition: { volume: volumeIndex + 1, index: index + 1 } },
                    ...item.albums.filter((entry: Data) => String(entry.id) !== String(meta.id)),
                ];
            }
            if (albumId) {
                const reference = item.albums.find((entry: Data) => entry.id === albumId);
                if (!reference) throw new TypeError('Replacement tracks must reference their album');
                reference.trackPosition = { volume: volumeIndex + 1, index: index + 1 };
            }
            registration.tracks.set(item.id, item);
        }),
    );
}
export function setLibraryOverrides(value: unknown, ownerId?: string): number {
    const key = owner(ownerId),
        data = copyResourceData(value);
    keys(data, ['artists', 'albums']);
    if ((data.artists !== undefined && !object(data.artists)) || (data.albums !== undefined && !object(data.albums)))
        throw new TypeError('Library entity maps must be objects');
    const next: Registration = { artists: new Map(), albums: new Map(), tracks: new Map(), localAlbums: new Map() };
    let count = 0;
    for (const [artistId, raw] of Object.entries(data.artists ?? {})) {
        id(artistId);
        keys(raw, ['tracks', 'albums']);
        const entry = raw as Data;
        const value = { tracks: insertions(entry.tracks, 'track'), albums: insertions(entry.albums, 'album') };
        next.artists.set(artistId, value);
        for (const item of value.tracks) next.tracks.set(item.entity.id, item.entity);
        for (const item of value.albums) {
            next.localAlbums.set(item.entity.id, item.entity);
            indexTracks(next, item.entity.volumes, item.entity);
        }
        count++;
    }
    for (const [albumId, raw] of Object.entries(data.albums ?? {})) {
        id(albumId);
        keys(raw, ['volumes']);
        const value = { volumes: volumes((raw as Data).volumes) };
        next.albums.set(albumId, value);
        indexTracks(next, value.volumes, undefined, albumId);
        count++;
    }
    if (count > 1000 || next.tracks.size > 1000) throw new RangeError('Library limit is 1000 entities/tracks per owner');
    invalidateLists();
    const previous = registrations.get(key);
    registrations.delete(key);
    if (count) registrations.set(key, next);
    notifyLibraryChanges({
        artists: new Set([...(previous?.artists.keys() ?? []), ...next.artists.keys()]),
        albums: new Set([...(previous?.albums.keys() ?? []), ...next.albums.keys()]),
    });
    return count;
}
export function clearLibraryOverrides(ownerId?: string) {
    const key = owner(ownerId);
    const previous = registrations.get(key);
    const removed = registrations.delete(key);
    if (removed) {
        invalidateLists();
        notifyLibraryChanges({ artists: previous!.artists.keys(), albums: previous!.albums.keys() });
    }
    return removed;
}
export function removeLibraryOverride(type: 'artist' | 'album', entityId: string, ownerId?: string) {
    const key = owner(ownerId);
    id(entityId);
    if (type !== 'artist' && type !== 'album') throw new TypeError('Invalid library entity type');
    const old = registrations.get(key);
    if (!old) return false;
    const entries = type === 'artist' ? old.artists : old.albums;
    if (!entries.has(entityId)) return false;
    // Rebuild indexes without changing the owner's priority relative to other registrations.
    const next = { ...old, artists: new Map(old.artists), albums: new Map(old.albums), tracks: new Map<string, Data>(), localAlbums: new Map<string, Data>() };
    (type === 'artist' ? next.artists : next.albums).delete(entityId);
    for (const entry of next.artists.values()) {
        for (const item of entry.tracks) next.tracks.set(item.entity.id, item.entity);
        for (const item of entry.albums) {
            next.localAlbums.set(item.entity.id, item.entity);
            indexTracks(next, item.entity.volumes, item.entity);
        }
    }
    for (const [albumId, entry] of next.albums) indexTracks(next, entry.volumes, undefined, albumId);
    invalidateLists();
    registrations.set(key, next);
    notifyLibraryChanges({ artists: type === 'artist' ? [entityId] : [], albums: type === 'album' ? [entityId] : [] });
    return true;
}
function lookup(type: keyof Registration, entityId: unknown): Data | undefined {
    let result: Data | undefined;
    for (const entry of registrations.values()) result = entry[type].get(String(entityId).split(':')[0]) ?? result;
    return result;
}
function merge(base: any[], entries: Data[], extract = (value: any) => String(value?.id ?? value), convert = (value: Data): any => copyResourceData(value)): any[] {
    const seen = new Set<string>();
    const unique = base.filter((item) => {
        const key = extract(item);
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
    });
    const additions = entries.filter((entry) => !seen.has(entry.entity.id));
    const result = [...unique];
    let lastIndex = -1,
        equalOffset = 0;
    for (const entry of additions) {
        equalOffset = lastIndex === entry.index ? equalOffset + 1 : 0;
        lastIndex = entry.index;
        result.splice(Math.min(entry.index + equalOffset, result.length), 0, convert(entry.entity));
    }
    return result;
}
function albumResult(value: any, request: Data, rich: boolean): any {
    if (!object(value)) return value;
    const replacement = lookup('albums', request.albumId ?? value.id);
    const selectedVolumes = replacement?.volumes ?? value.volumes;
    if (!replacement && !lookup('localAlbums', request.albumId ?? value.id)) return value;
    if (!Array.isArray(selectedVolumes)) return value;
    let flatIndex = 0;
    const page = Number(request.page ?? 0),
        size = Number(request.pageSize ?? selectedVolumes.flat().length);
    const start = page * size,
        end = start + size;
    const mapped = selectedVolumes.map((volume: Data[], v: number) =>
        volume
            .map((item, i) => {
                const position = flatIndex++;
                if (position < start || position >= end) return undefined;
                return rich ? { ...copyResourceData(lookup('tracks', item.id) ?? item), trackPosition: { volume: v + 1, index: i + 1 } } : { id: String(item.id) };
            })
            .filter(Boolean),
    );
    return {
        ...value,
        volumes: mapped,
        trackCount: flatIndex,
        ...(value.pager ? { pager: { ...value.pager, total: flatIndex, page, perPage: size } } : {}),
        durationMs: selectedVolumes.flat().reduce((n: number, t: Data) => n + (t.durationMs ?? 0), 0),
    };
}
async function collectUncached(method: string, request: Data, first: any, invoke: ResourceInvoke): Promise<any[] | undefined> {
    const key = method === 'getArtistTracks' || method === 'landingTracks' ? 'tracks' : method === 'landingAlbums' ? 'items' : 'albums';
    if (Array.isArray(first)) return first;
    if (!Array.isArray(first?.[key])) return undefined;
    const total = Number(first.pager?.total);
    if (!Number.isSafeInteger(total) || total < 0 || total > MAX_NATIVE_ITEMS) return undefined;
    const page = Number(request.page ?? 0),
        size = Number(request.pageSize ?? first.pager?.perPage ?? PAGE_SIZE);
    if (page === 0 && first[key].length >= total) return first[key];
    const all: any[] = [];
    for (let p = 0; p < Math.ceil(total / PAGE_SIZE); p++) {
        const response = page === p && size === PAGE_SIZE ? first : await invoke({ ...request, page: p, pageSize: PAGE_SIZE });
        if (!Array.isArray(response?.[key])) return undefined;
        all.push(...response[key]);
    }
    return all;
}
async function collect(method: string, request: Data, first: any, invoke: ResourceInvoke, signal?: AbortSignal): Promise<any[] | undefined> {
    const { page: _page, pageSize: _pageSize, ...identity } = request;
    if (identity.source) {
        const { page: _sourcePage, pageSize: _sourceSize, count: _count, countWeb: _countWeb, ...source } = identity.source;
        identity.source = source;
    }
    const total = Number(first?.pager?.total),
        key = method + JSON.stringify(identity) + ':' + total;
    const cached = listCache.get(key);
    if (cached && cached.expires > Date.now() && cached.total === total) return copyResourceData(cached.items, 8 * 1024 * 1024, true);
    const generation = revision;
    let pending = !signal ? pendingLists.get(key) : undefined;
    if (!pending) {
        pending = collectUncached(method, request, first, invoke).then((items) => {
            if (items && revision === generation) {
                if (listCache.size >= 16) listCache.delete(listCache.keys().next().value!);
                listCache.set(key, { expires: Date.now() + 30000, total, items: copyResourceData(items, 8 * 1024 * 1024, true) });
            }
            return revision === generation ? items : undefined;
        });
        if (!signal) pendingLists.set(key, pending);
        void pending
            .finally(() => {
                if (pendingLists.get(key) === pending) pendingLists.delete(key);
            })
            .catch(() => {});
    }
    const items = await pending;
    return items ? copyResourceData(items, 8 * 1024 * 1024, true) : undefined;
}
function getArtistId(request: Data): string {
    if (!object(request)) return '';
    if (request.artistId) return String(request.artistId);
    if (request.source?.artistId) return String(request.source.artistId);
    const match = String(request.source?.uri ?? '').match(/(?:^|\/)artists\/(\d+)(?:\/|$|\?)/);
    return match?.[1] ?? '';
}

/** Native lookups are only bypassed for explicitly registered complete DTOs. Auxiliary calls bypass hooks. */
export async function runLibraryResource(
    resource: string,
    method: string,
    request: Data,
    invoke: ResourceInvoke,
    auxiliary?: ResourceAuxiliary,
    signal?: AbortSignal,
): Promise<any> {
    if (!registrations.size) return invoke(request);
    if (resource === 'tracks' && method === 'getTracksMeta' && Array.isArray(request.trackIds)) {
        const ids = request.trackIds.map(String),
            missing = ids.filter((key: string) => !lookup('tracks', key));
        if (missing.length === ids.length) return invoke(request);
        const generation = revision;
        const native = missing.length ? await invoke({ ...request, trackIds: missing }) : [];
        if (revision !== generation) return invoke(request);
        const result = ids
            .map((key: string) => lookup('tracks', key) ?? native.find((item: Data) => String(item.id) === key.split(':')[0]))
            .filter(Boolean)
            .map((item: Data) => copyResourceData(item, undefined, true));
        return request.removeDuplicates
            ? result.filter((item: Data, i: number) => result.findIndex((other: Data) => String(other.id) === String(item.id)) === i)
            : result;
    }
    if (resource === 'tracks' && method.startsWith('getFullInfoTrack')) {
        const local = lookup('tracks', request.trackId);
        if (local) {
            const data = { track: copyResourceData(local), similarTracks: [] };
            return method.endsWith('WithEtag') ? { notModified: false, data } : data;
        }
    }
    if (resource === 'albums' && method === 'getAlbums' && Array.isArray(request.albumIds)) {
        const ids = request.albumIds.map(String),
            missing = ids.filter((key: string) => !lookup('localAlbums', key));
        if (missing.length === ids.length) return invoke(request);
        const generation = revision;
        const native = missing.length ? await invoke({ ...request, albumIds: missing }) : [];
        if (revision !== generation) return invoke(request);
        return ids
            .map((key: string) => lookup('localAlbums', key) ?? native.find((item: Data) => String(item.id) === key))
            .filter(Boolean)
            .map((item: Data) => copyResourceData(item, undefined, true));
    }
    if (resource === 'albums' && method.startsWith('getAlbumWith')) {
        const local = lookup('localAlbums', request.albumId),
            replacement = lookup('albums', request.albumId);
        const etag = method.endsWith('WithEtag');
        const response = local
            ? etag
                ? { data: copyResourceData(local), notModified: false }
                : copyResourceData(local)
            : await invoke(replacement && etag ? { ...request, ifNoneMatch: undefined } : request);
        const data = etag ? response.data : response;
        const result = albumResult(data, request, method === 'getAlbumWithRichTracks');
        return etag ? { ...response, ...(result === undefined ? {} : { data: result }) } : result;
    }
    const response = await invoke(request);
    const artistId = getArtistId(request),
        patch = lookup('artists', artistId);
    if (!patch) return response;
    if (resource === 'artists' && method === 'getArtistTrackIds' && Array.isArray(response)) {
        if (!patch.tracks.length) return response;
        let all;
        try {
            all = request.page === undefined ? response : await invoke({ ...request, page: undefined, pageSize: undefined });
        } catch {
            return response;
        }
        if (!Array.isArray(all) || all.length > MAX_NATIVE_ITEMS || lookup('artists', artistId) !== patch) return response;
        const merged = merge(all, patch.tracks, undefined, (value) => value.id);
        if (request.page === undefined) return merged;
        const page = Number(request.page),
            size = Number(request.pageSize ?? PAGE_SIZE);
        return merged.slice(page * size, (page + 1) * size);
    }
    if (resource === 'artists' && ['getArtistTracks', 'getDirectAlbums'].includes(method)) {
        const key = method === 'getArtistTracks' ? 'tracks' : 'albums',
            entries = patch[key];
        if (!entries.length) return response;
        let all: any[] | undefined;
        try {
            all = await collect(method, request, response, invoke, signal);
        } catch {
            return response;
        }
        if (!all || lookup('artists', artistId) !== patch) return response;
        const merged = merge(all, entries);
        if (Array.isArray(response)) return merged;
        const page = Number(request.page ?? 0),
            perPage = Number(request.pageSize ?? response.pager?.perPage ?? PAGE_SIZE);
        return { ...response, [key]: merged.slice(page * perPage, (page + 1) * perPage), pager: { ...response.pager, total: merged.length, page, perPage } };
    }
    if (resource === 'artists' && ['getInfo', 'getBriefInfo'].includes(method) && object(response)) {
        const result = copyResourceData(response, undefined, true);
        for (const key of ['tracks', 'popularTracks']) if (Array.isArray(result[key])) result[key] = merge(result[key], patch.tracks);
        for (const key of ['albums', 'lastReleases']) if (Array.isArray(result[key])) result[key] = merge(result[key], patch.albums);
        if (result.artist?.counts && auxiliary) {
            try {
                if (patch.tracks.length) {
                    const ids = await auxiliary('getArtistTrackIds', { artistId });
                    if (Array.isArray(ids)) result.artist.counts.tracks = merge(ids, patch.tracks, undefined, (value) => value.id).length;
                }
                if (patch.albums.length) {
                    const first = await auxiliary('getDirectAlbums', { artistId, page: 0, pageSize: PAGE_SIZE });
                    const all = await collect('getDirectAlbums', { artistId, page: 0, pageSize: PAGE_SIZE }, first, (r) => auxiliary('getDirectAlbums', r), signal);
                    if (all) result.artist.counts.directAlbums = merge(all, patch.albums).length;
                }
            } catch {
                return response;
            }
        }
        return lookup('artists', artistId) === patch ? result : response;
    }
    if (resource === 'landing' && method === 'getBlock' && object(response)) {
        const isTracks = request.type === 'ARTIST_POPULAR_TRACKS',
            isAlbums = request.type === 'ARTIST_ALBUMS';
        if (!isTracks && !isAlbums) return response;
        const key = isTracks ? 'tracks' : 'items',
            entries = isTracks ? patch.tracks : patch.albums;
        if (!entries.length || !Array.isArray(response[key])) return response;
        const page = Number(request.source?.page ?? request.page ?? 0);
        const size = Number(request.source?.pageSize ?? request.source?.countWeb ?? request.source?.count ?? request.pageSize ?? response.pager?.perPage ?? PAGE_SIZE);
        let base: any[] | undefined = response[key];
        if (response.pager) {
            const listRequest = { ...request, page, pageSize: size };
            try {
                base = await collect(
                    isTracks ? 'landingTracks' : 'landingAlbums',
                    listRequest,
                    response,
                    (next) =>
                        invoke({ ...request, source: { ...request.source, page: next.page, pageSize: next.pageSize, count: next.pageSize, countWeb: next.pageSize } }),
                    signal,
                );
            } catch {
                return response;
            }
            if (!base || lookup('artists', artistId) !== patch) return response;
        } else if (page > 0) return response;
        if (!base) return response;
        const merged = isTracks
            ? merge(base, entries)
            : merge(
                  base,
                  entries,
                  (item) => String(item.data?.album?.id ?? ''),
                  (value) => ({ type: 'album_item', data: { album: copyResourceData(value), artists: copyResourceData(value.artists) } }),
              );
        return {
            ...response,
            [key]: response.pager ? merged.slice(page * size, (page + 1) * size) : merged,
            ...(response.pager ? { pager: { ...response.pager, total: merged.length, page, perPage: size } } : {}),
        };
    }
    return response;
}
