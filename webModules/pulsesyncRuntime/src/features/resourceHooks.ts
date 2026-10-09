import { PULSESYNC_RESOURCE_METHODS, type PulseSyncResourceHooks, type PulseSyncResourceTarget } from '@pulsesync/yamusic-types';
import { applyMetadataResponse } from './metadataOverrides';
import { runLibraryResource, type ResourceAuxiliary } from './libraryOverrides';
import { copyResourceData, copyNativeResourceData } from './resourceData';

type Data = Record<string, any>;
type Hook = { target: PulseSyncResourceTarget; callbacks: PulseSyncResourceHooks; ownerId: string; active: boolean; abort: AbortController; timeout: number };
const hooks = new Set<Hook>();
const internalOptions = new WeakSet<object>();
export function isInternalResourceCall(options: unknown): boolean {
    return typeof options === 'object' && options !== null && internalOptions.has(options);
}
export async function callNativeResource(resource: any, method: string, request: unknown, signal: AbortSignal): Promise<any> {
    const options = { signal };
    internalOptions.add(options);
    try {
        return await Reflect.apply(resource[method], resource, [request, options]);
    } finally {
        internalOptions.delete(options);
    }
}
const kinds: Record<string, string> = {
    getTracksMeta: 'tracks',
    getFullInfoTrack: 'trackInfo',
    getFullInfoTrackWithEtag: 'trackInfoEtag',
    getAlbums: 'albums',
    getAlbumWithTracksIds: 'album',
    getAlbumWithRichTracks: 'album',
    getAlbumWithTracksIdsWithEtag: 'albumEtag',
    getInfo: 'artist',
    getBriefInfo: 'artist',
    getArtistTracks: 'artistTracks',
    getDirectAlbums: 'artistAlbums',
    getFamiliarYou: 'familiar',
    getBlock: 'landing',
    getInstantMixedSearch: 'search',
    getChart: 'chart',
};
function object(value: unknown): value is Data {
    return value !== null && typeof value === 'object' && !Array.isArray(value);
}
export function validateResourceTarget(value: unknown): PulseSyncResourceTarget {
    if (
        !object(value) ||
        !Object.hasOwn(PULSESYNC_RESOURCE_METHODS, value.resource) ||
        !(PULSESYNC_RESOURCE_METHODS[value.resource as keyof typeof PULSESYNC_RESOURCE_METHODS] as readonly string[]).includes(value.method)
    )
        throw new TypeError('Unsupported Yandex resource method');
    return { resource: value.resource, method: value.method } as PulseSyncResourceTarget;
}
export function registerResourceHook(targetValue: unknown, callbacks: PulseSyncResourceHooks, ownerId: string): () => void {
    const target = validateResourceTarget(targetValue);
    if (typeof ownerId !== 'string' || !ownerId || ownerId.length > 256) throw new TypeError('Resource hook owner is required');
    if (!object(callbacks) || (!callbacks.before && !callbacks.after) || Object.keys(callbacks).some((key) => !['before', 'after', 'timeoutMs'].includes(key)))
        throw new TypeError('Invalid resource hooks');
    for (const phase of ['before', 'after'] as const)
        if (callbacks[phase] !== undefined && typeof callbacks[phase] !== 'function') throw new TypeError('Resource hook must be a function');
    const timeout = callbacks.timeoutMs ?? 1500;
    if (!Number.isSafeInteger(timeout) || timeout < 50 || timeout > 5000) throw new TypeError('Hook timeout must be 50..5000 ms');
    if ([...hooks].filter((hook) => hook.ownerId === ownerId).length >= 32) throw new RangeError('Resource hook limit is 32 per addon');
    const hook: Hook = { target, callbacks: { ...callbacks }, ownerId, active: true, abort: new AbortController(), timeout };
    hooks.add(hook);
    return () => {
        hook.active = false;
        hook.abort.abort();
        hooks.delete(hook);
    };
}
export function clearResourceHooks(ownerId: string) {
    for (const hook of hooks)
        if (hook.ownerId === ownerId) {
            hook.active = false;
            hook.abort.abort();
            hooks.delete(hook);
        }
}
async function invokeHook(hook: Hook, phase: 'before' | 'after', context: Data, signal?: AbortSignal): Promise<any> {
    const callback = hook.callbacks[phase];
    if (!hook.active || !callback || signal?.aborted) return undefined;
    let timer: ReturnType<typeof setTimeout> | undefined;
    let abort: () => void = () => {};
    try {
        const payload = copyNativeResourceData(context);
        const stopped = new Promise<undefined>((resolve) => {
            abort = () => resolve(undefined);
            hook.abort.signal.addEventListener('abort', abort, { once: true });
            signal?.addEventListener('abort', abort, { once: true });
            timer = setTimeout(abort, hook.timeout);
        });
        const result = await Promise.race([Promise.resolve().then(() => callback(payload)), stopped]);
        return hook.active && !signal?.aborted && result !== undefined ? copyResourceData(result) : undefined;
    } catch (error) {
        console.warn(`[PulseSync] ${hook.ownerId} ${phase} resource hook failed`, error);
        return undefined;
    } finally {
        clearTimeout(timer);
        hook.abort.signal.removeEventListener('abort', abort);
        signal?.removeEventListener('abort', abort);
    }
}

/** The callback receives the complete original arguments. Only the primary request DTO is replaceable by hooks. */
export async function executeResourceCall(
    resource: string,
    method: string,
    args: any[],
    original: (...args: any[]) => Promise<any>,
    auxiliary?: (method: string, request: Data, options: any) => Promise<any>,
): Promise<any> {
    validateResourceTarget({ resource, method });
    if (object(args[1]) && internalOptions.has(args[1])) return original(...args);
    const signal = args[1]?.signal as AbortSignal | undefined;
    signal?.throwIfAborted();
    let request = args[0];
    const snapshot = [...hooks].filter((hook) => hook.target.resource === resource && hook.target.method === method);
    let response: any,
        responded = false;
    for (const hook of snapshot) {
        const decision = await invokeHook(hook, 'before', { resource, method, request: request ?? {} }, signal);
        signal?.throwIfAborted();
        if (!object(decision)) continue;
        if (decision.kind === 'continue' && object(decision.request)) request = decision.request;
        else if (decision.kind === 'respond' && Object.hasOwn(decision, 'result')) {
            response = decision.result;
            responded = true;
            break;
        }
    }
    const invoke = (next: Data) => original(next, ...args.slice(1));
    const fetchAuxiliary: ResourceAuxiliary | undefined = auxiliary
        ? async (name, next) => {
              const options = { ...args[1] };
              internalOptions.add(options);
              try {
                  return await auxiliary(name, next, options);
              } finally {
                  internalOptions.delete(options);
              }
          }
        : undefined;
    if (!responded) response = await runLibraryResource(resource, method, request, invoke, fetchAuxiliary, signal);
    signal?.throwIfAborted();
    response = applyMetadataResponse(kinds[method] ?? (resource === 'rotor' ? 'rotor' : ''), response);
    for (const hook of snapshot) {
        const decision = await invokeHook(hook, 'after', { resource, method, request: request ?? {}, result: response }, signal);
        signal?.throwIfAborted();
        if (object(decision) && decision.kind === 'replace' && Object.hasOwn(decision, 'result')) response = decision.result;
    }
    return response;
}
