import type { PulseSyncResourceTarget, PulseSyncResourceRequest } from '@pulsesync/yamusic-types';
import { validateResourceTarget, callNativeResource } from './resourceHooks';
import { copyResourceData, copyNativeResourceData } from './resourceData';

export type PulseSyncResourceReadTarget = Extract<PulseSyncResourceTarget, { resource: 'tracks' | 'albums' | 'artists' | 'search' }>;
const names = { tracks: 'TracksResource', albums: 'AlbumResource', artists: 'ArtistsResource', search: 'SearchResource' };
let resolveResource: ((name: string) => any) | undefined;
let pending = 0;
export function registerNativeResourceResolver(resolve: (name: string) => any) {
    if (typeof resolve === 'function') resolveResource = resolve;
}
async function withResources<T>(signal: AbortSignal, run: (resolve: (name: string) => any, signal: AbortSignal) => Promise<T>): Promise<T> {
    signal.throwIfAborted();
    if (!resolveResource) throw new Error('Native music resources are not ready');
    if (pending >= 64) throw new RangeError('Too many pending resource reads');
    pending++;
    const timeout = new AbortController();
    const combined = AbortSignal.any([signal, timeout.signal]);
    const timer = setTimeout(() => timeout.abort(new Error('Resource read timed out')), 14000);
    let aborted: () => void = () => {};
    try {
        const stopped = new Promise<never>((_, reject) => {
            aborted = () => reject(combined.reason);
            combined.addEventListener('abort', aborted, { once: true });
        });
        const result = await Promise.race([run(resolveResource, combined), stopped]);
        combined.throwIfAborted();
        return result;
    } finally {
        clearTimeout(timer);
        combined.removeEventListener('abort', aborted);
        pending--;
    }
}
export function readResource(targetValue: PulseSyncResourceReadTarget, requestValue: PulseSyncResourceRequest, signal: AbortSignal): Promise<unknown> {
    const target = validateResourceTarget(targetValue);
    if (!Object.hasOwn(names, target.resource)) throw new TypeError('Unsupported read-only resource');
    const request = copyResourceData(requestValue, 64 * 1024);
    if (!request || Array.isArray(request) || typeof request !== 'object') throw new TypeError('Resource request must be an object');
    // Native common/transport options include credentials and cannot be supplied by an addon.
    if (['common', 'params', 'headers', 'signal', 'prefixUrl'].some((key) => Object.hasOwn(request, key)))
        throw new TypeError('Native transport options are not allowed');
    return withResources(signal, async (resolve, signal) => {
        const resource = resolve(names[target.resource as keyof typeof names]);
        if (typeof resource?.[target.method] !== 'function') throw new Error('Native resource method is unavailable');
        return copyNativeResourceData(await callNativeResource(resource, target.method, request, signal));
    });
}
export function getNativeLyrics(trackId: string, format: 'LRC' | 'TEXT' = 'LRC', signal: AbortSignal): Promise<string | null> {
    if (typeof trackId !== 'string' || !/^[0-9]{1,16}(?::[0-9]{1,16})?$/.test(trackId) || !['LRC', 'TEXT'].includes(format))
        throw new TypeError('Invalid lyrics request');
    return withResources(signal, async (resolve, signal) => {
        const secrets: Record<string, string> = { win32: 'kzqU4XhfCaY6B6JTHODeq5', darwin: 'uz0zSpaYCLmgk6C7YLdo5F', linux: 'uVNvVMAvdrvjtwN0VlhEt2' };
        const desktop = (window as Window & { musicDesktop?: { runtime?: { platform?: string } } }).musicDesktop;
        const secret = secrets[String(desktop?.runtime?.platform ?? '')];
        if (!secret) throw new Error('Unsupported platform for native lyrics');
        const timeStamp = Math.floor(Date.now() / 1000);
        const key = await crypto.subtle.importKey('raw', new TextEncoder().encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
        const signature = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(`${trackId}${timeStamp}`));
        const sign = btoa(String.fromCharCode(...new Uint8Array(signature)));
        const response = await callNativeResource(resolve('TracksResource'), 'getLyrics', { trackId, format, timeStamp, sign }, signal);
        if (!response?.downloadUrl) return null;
        const url = new URL(response.downloadUrl);
        if (url.protocol !== 'https:') throw new TypeError('Invalid native lyrics URL');
        const text = await callNativeResource(resolve('PrefixlessResource'), 'getLyricsText', url.href, signal);
        return typeof text === 'string' ? copyResourceData(text) : null;
    });
}
