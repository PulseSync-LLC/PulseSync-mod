import type {
    PulseSyncPlayerSnapshot,
    PulseSyncPlayerStatus,
    PulseSyncProgressState,
    PulseSyncQueueSnapshot,
    PulseSyncRepeatMode,
    PulseSyncRouteSnapshot,
    PulseSyncTrackMeta,
} from '@pulsesync/yamusic-types';
import { cloneValue, getPlayerInstance } from '../core/values';
import { callWithPlayer } from './player';

type PageEntityType = 'album' | 'playlist' | 'artist';

type PageEntitySnapshot = {
    revision: number;
    type: PageEntityType;
    entity: unknown;
};

type TrackReplacement = {
    addonId: string;
    url: string;
};

type ArtistBriefResolver = {
    artistId: string;
    resolve: () => Promise<unknown>;
};

const PAGE_ENTITY_TYPES = new Set<PageEntityType>(['album', 'playlist', 'artist']);
const trackReplacements = new Map<string, TrackReplacement>();
const pageEntityListeners = new Set<(snapshot: PageEntitySnapshot) => void>();
const artistBriefCache = new Map<string, unknown>();
const pendingArtistBriefRequests = new Map<string, Promise<void>>();

let pageEntityRevision = 0;
let lastPageEntity: PageEntitySnapshot | undefined;
let artistBriefResolver: ArtistBriefResolver | undefined;

const routeListeners = new Set<(snapshot: PulseSyncRouteSnapshot) => void>();
let routeTrackingInstalled = false;
let lastRouteKey = '';

function toFiniteNumber(value: unknown) {
    const number = Number(value);
    return Number.isFinite(number) ? number : null;
}

function getCurrentTrack(): PulseSyncTrackMeta | null {
    const value = getPlayerInstance()?.state?.queueState?.currentEntity?.value?.entity?.entityData?.meta;
    return value && typeof value === 'object' ? cloneValue(value as PulseSyncTrackMeta) : null;
}

export function getPlayerSnapshot(): PulseSyncPlayerSnapshot {
    const player = getPlayerInstance();
    const progressValue = player?.state?.playerState?.progress?.value;
    const progress =
        typeof progressValue === 'number'
            ? progressValue
            : progressValue && typeof progressValue === 'object'
              ? cloneValue(progressValue as PulseSyncProgressState)
              : null;
    const status = String(player?.state?.playerState?.status?.value ?? 'idle') as PulseSyncPlayerStatus;

    return Object.freeze({
        status,
        isPlaying: status === 'playing',
        track: getCurrentTrack(),
        progress,
        duration: toFiniteNumber(getCurrentTrack()?.duration),
        volume: toFiniteNumber(player?.state?.playerState?.volume?.value),
        repeatMode: (player?.state?.queueState?.repeat?.value ?? null) as PulseSyncRepeatMode | null,
        shuffle: Boolean(player?.state?.queueState?.shuffle?.value),
    });
}

export function getQueueSnapshot(): PulseSyncQueueSnapshot {
    const player = getPlayerInstance();
    const queue = player?.state?.queueState?.entityList?.value;
    const items = Array.isArray(queue)
        ? queue
              .map((item) => item?.entity?.entityData?.meta ?? item?.entity?.data?.meta)
              .filter((item): item is PulseSyncTrackMeta => Boolean(item && typeof item === 'object'))
              .map((item) => cloneValue(item))
        : [];

    return Object.freeze({
        currentIndex: toFiniteNumber(player?.state?.queueState?.index?.value),
        items: Object.freeze(items),
    });
}

export function getRouteSnapshot(): PulseSyncRouteSnapshot {
    return Object.freeze({
        href: window.location.href,
        pathname: window.location.pathname,
        search: window.location.search,
        hash: window.location.hash,
    });
}

function subscribePlayer(listener: () => void, observables: (player: Record<string, any>) => unknown[]) {
    let active = true;
    const cleanups: (() => void)[] = [];
    callWithPlayer((player) => {
        if (!active) return;
        for (const observable of observables(player)) {
            const cleanup = (observable as { onChange?: (callback: () => void) => unknown } | undefined)?.onChange?.(listener);
            if (typeof cleanup === 'function') cleanups.push(cleanup as () => void);
        }
        listener();
    });
    return () => {
        active = false;
        cleanups.splice(0).forEach((cleanup) => cleanup());
    };
}

export function onPlayerSnapshotChange(listener: (snapshot: PulseSyncPlayerSnapshot) => void) {
    if (typeof listener !== 'function') return () => {};
    const emit = () => listener(getPlayerSnapshot());
    return subscribePlayer(emit, (player) => [
        player.state?.playerState?.status,
        player.state?.playerState?.progress,
        player.state?.playerState?.volume,
        player.state?.queueState?.currentEntity,
        player.state?.queueState?.repeat,
        player.state?.queueState?.shuffle,
    ]);
}

export function onQueueChange(listener: (snapshot: PulseSyncQueueSnapshot) => void) {
    if (typeof listener !== 'function') return () => {};
    const emit = () => listener(getQueueSnapshot());
    return subscribePlayer(emit, (player) => [
        player.state?.queueState?.entityList,
        player.state?.queueState?.index,
        player.state?.queueState?.currentEntity,
    ]);
}

function routeKey(snapshot: PulseSyncRouteSnapshot) {
    return `${snapshot.pathname}${snapshot.search}${snapshot.hash}`;
}

function emitRouteChange() {
    const snapshot = getRouteSnapshot();
    const nextKey = routeKey(snapshot);
    if (nextKey === lastRouteKey) return;
    lastRouteKey = nextKey;
    routeListeners.forEach((listener) => listener(snapshot));
}

function installRouteTracking() {
    if (routeTrackingInstalled) return;
    routeTrackingInstalled = true;
    lastRouteKey = routeKey(getRouteSnapshot());
    window.addEventListener('popstate', emitRouteChange);
    window.addEventListener('hashchange', emitRouteChange);

    const navigation = (window as Window & { navigation?: { addEventListener?: (type: string, listener: () => void) => void } }).navigation;
    navigation?.addEventListener?.('currententrychange', emitRouteChange);

    for (const methodName of ['pushState', 'replaceState'] as const) {
        const original = window.history[methodName];
        window.history[methodName] = function (this: History, ...args: Parameters<History[typeof methodName]>) {
            const result = Reflect.apply(original, this, args);
            queueMicrotask(emitRouteChange);
            return result;
        } as History[typeof methodName];
    }
}

export function onRouteChange(listener: (snapshot: PulseSyncRouteSnapshot) => void) {
    if (typeof listener !== 'function') return () => {};
    installRouteTracking();
    routeListeners.add(listener);
    listener(getRouteSnapshot());
    return () => routeListeners.delete(listener);
}

function normalizePageEntityType(value: unknown): PageEntityType {
    if (typeof value !== 'string' || !PAGE_ENTITY_TYPES.has(value as PageEntityType)) {
        throw new TypeError('Unsupported page entity type');
    }
    return value as PageEntityType;
}

function getArtistId(entity: unknown) {
    if (!entity || typeof entity !== 'object') return '';
    return String((entity as { artist?: { id?: unknown } }).artist?.id ?? '').trim();
}

function storePageEntity(type: PageEntityType, entity: unknown) {
    pageEntityRevision += 1;
    lastPageEntity = { revision: pageEntityRevision, type, entity };
    pageEntityListeners.forEach((listener) => listener(lastPageEntity!));
    return lastPageEntity;
}

export function publishPageEntity(typeValue: unknown, entity: unknown, resolveArtistBrief?: unknown, artistBriefComplete = false) {
    const type = normalizePageEntityType(typeValue);
    if (!entity || typeof entity !== 'object') throw new TypeError('Page entity is required');

    if (type !== 'artist') {
        artistBriefResolver = undefined;
        return storePageEntity(type, entity);
    }

    const artistId = getArtistId(entity);
    if (artistBriefComplete && artistId) artistBriefCache.set(artistId, entity);
    if (typeof resolveArtistBrief === 'function' && artistId) {
        artistBriefResolver = { artistId, resolve: resolveArtistBrief as () => Promise<unknown> };
    }

    return storePageEntity(type, artistBriefCache.get(artistId) ?? entity);
}

async function requestArtistBrief() {
    const request = artistBriefResolver;
    if (!request || artistBriefCache.has(request.artistId)) return;

    let pending = pendingArtistBriefRequests.get(request.artistId);
    if (!pending) {
        pending = Promise.resolve(request.resolve())
            .then(() => undefined)
            .finally(() => pendingArtistBriefRequests.delete(request.artistId));
        pendingArtistBriefRequests.set(request.artistId, pending);
    }
    await pending;
}

export async function getPageEntity(options: unknown) {
    if ((options as { includeArtistBrief?: unknown } | null)?.includeArtistBrief === true && lastPageEntity?.type === 'artist') {
        await requestArtistBrief();
    }
    return lastPageEntity ?? null;
}

export function onPageEntityChange(listener: (snapshot: PageEntitySnapshot) => void) {
    if (typeof listener !== 'function') return () => {};
    pageEntityListeners.add(listener);
    if (lastPageEntity) listener(lastPageEntity);
    return () => pageEntityListeners.delete(listener);
}

function normalizeTrackId(value: unknown) {
    const trackId = String(value ?? '').trim();
    if (!trackId) throw new TypeError('Track id is required');
    return trackId;
}

function normalizeReplacementUrl(value: unknown) {
    const url = String(value ?? '').trim();
    if (!url) throw new TypeError('Track replacement URL is required');
    const protocol = new URL(url, window.location.href).protocol;
    if (!['http:', 'https:', 'blob:'].includes(protocol)) throw new TypeError(`Unsupported track replacement URL protocol: ${protocol}`);
    return url;
}

export function getTrackReplacement(trackIdValue: unknown) {
    const trackId = String(trackIdValue ?? '').trim();
    return trackId ? (trackReplacements.get(trackId)?.url ?? null) : null;
}

export function setTrackReplacement(trackIdValue: unknown, urlValue: unknown, addonId = 'global') {
    const trackId = normalizeTrackId(trackIdValue);
    const url = normalizeReplacementUrl(urlValue);
    trackReplacements.set(trackId, { addonId, url });
    return true;
}

export function setTrackReplacements(replacementsValue: unknown, addonId = 'global') {
    if (!replacementsValue || typeof replacementsValue !== 'object' || Array.isArray(replacementsValue)) {
        throw new TypeError('Track replacements must be an object');
    }
    const entries = Object.entries(replacementsValue as Record<string, unknown>);
    if (entries.length > 10_000) throw new RangeError('Too many track replacements');

    const replacements = entries.map(([trackId, url]) => [normalizeTrackId(trackId), normalizeReplacementUrl(url)] as const);
    clearTrackReplacements(addonId);
    replacements.forEach(([trackId, url]) => trackReplacements.set(trackId, { addonId, url }));
    return replacements.length;
}

export function removeTrackReplacement(trackIdValue: unknown, addonId = 'global') {
    const trackId = normalizeTrackId(trackIdValue);
    const replacement = trackReplacements.get(trackId);
    return replacement?.addonId === addonId ? trackReplacements.delete(trackId) : false;
}

export function clearTrackReplacements(addonId = 'global') {
    for (const [trackId, replacement] of trackReplacements) {
        if (replacement.addonId === addonId) trackReplacements.delete(trackId);
    }
}

export function clearTrackReplacementsForOwner(addonId = 'global') {
    clearTrackReplacements(addonId);
    return true;
}
