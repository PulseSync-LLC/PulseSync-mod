import { NATIVE_AUDIO_CHUNK_TAP_SETTING_KEY } from '../config';
import { cloneValue } from '../core/values';
import { YASP_METADATA_PROBE_CHUNK_LIMIT, pulseSyncYaspWorkerBootstrap } from './yaspWorker';

const TAP_OFF = 'off';
const TAP_METADATA = 'metadata';
const TAP_STREAM = 'stream';
let workerCounter = 0;
let currentSourceKey: string | null = null;

function isChunkTapEnabled() {
    if (window.__PULSESYNC_NATIVE_AUDIO_CHUNK_TAP === true) return true;
    try {
        if (window.nativeAudioOutput?.isYaspChunkTapEnabled?.()) return true;
    } catch {}
    try {
        return Boolean(window.nativeSettings?.get?.(NATIVE_AUDIO_CHUNK_TAP_SETTING_KEY));
    } catch {
        return false;
    }
}

function getTapMode() {
    if (isChunkTapEnabled()) return TAP_STREAM;
    return window.__PULSESYNC_YASP_AUDIO_FORMAT_TAP === false ? TAP_OFF : TAP_METADATA;
}

function isLikelyWorkerUrl(url: unknown) {
    const value = String(url ?? '').toLowerCase();
    return value.startsWith('blob:') || value.includes('yasp') || value.includes('yandex-video-player') || value.includes('video-player-iframe-api-bundles') || value.includes('stream-player');
}

function readWorkerSource(sourceUrl: string) {
    try {
        const request = new XMLHttpRequest();
        request.open('GET', sourceUrl, false);
        request.send(null);
        return request.responseText || null;
    } catch (error) {
        console.warn('[PulseSync] Failed to read YASP worker source for native audio tap:', error);
        return null;
    }
}

function handleWorkerMessage(event: MessageEvent<Record<string, any>>) {
    const data = event.data;
    if (!data?.__pulseSyncNativeAudio) return;
    event.stopImmediatePropagation();
    event.stopPropagation();
    event.preventDefault();
    if (data.event === 'chunk') {
        window.nativeAudioOutput?.pushYaspChunk?.({ sourceUrl: data.sourceUrl, sourceKey: currentSourceKey, workerId: data.workerId, meta: data.meta }, data.chunk);
    } else if (data.event === 'patch-status') {
        (data.patched ? console.info : console.warn)('[PulseSync] YASP native audio worker patch:', data.reason, data.sourceUrl);
    } else if (data.event === 'tap-error') {
        console.warn('[PulseSync] YASP native audio tap error:', data.message, data.sourceUrl);
    }
}

function installWorkerPatch() {
    if (window.__pulseSyncYaspNativeAudioWorkerPatchInstalled || typeof window.Worker !== 'function') return;
    const OriginalWorker = window.Worker;
    const PatchedWorker = function (url: URL | string, options?: WorkerOptions) {
        const tapMode = getTapMode();
        if (tapMode === TAP_OFF || options?.type === 'module' || !isLikelyWorkerUrl(url)) return new OriginalWorker(url, options);
        const sourceUrl = new URL(String(url), window.location.href).href;
        const inlineSource = sourceUrl.startsWith('blob:') ? readWorkerSource(sourceUrl) : null;
        const appendChunkMarker = /(return\s+e\.next\s*=\s*15\s*,\s*)cf\.race\(\[this\.appendChunk\(t\s*,\s*o\)\s*,\s*n\]\)/;
        if (sourceUrl.startsWith('blob:') && (!inlineSource || !appendChunkMarker.test(inlineSource))) return new OriginalWorker(url, options);
        const workerId = `${Date.now().toString(36)}-${(++workerCounter).toString(36)}`;
        const bootstrap = `(${pulseSyncYaspWorkerBootstrap.toString()})(${JSON.stringify(sourceUrl)},${JSON.stringify(inlineSource)},${JSON.stringify(workerId)},${JSON.stringify(tapMode)},${YASP_METADATA_PROBE_CHUNK_LIMIT});`;
        const bootstrapUrl = URL.createObjectURL(new Blob([bootstrap], { type: 'application/javascript' }));
        try {
            const worker = new OriginalWorker(bootstrapUrl, options);
            worker.addEventListener('message', handleWorkerMessage, true);
            return worker;
        } catch (error) {
            console.warn('[PulseSync] Failed to create patched YASP worker, falling back to original worker:', error);
            return new OriginalWorker(url, options);
        } finally {
            window.setTimeout(() => URL.revokeObjectURL(bootstrapUrl), 1_000);
        }
    } as unknown as typeof Worker;
    PatchedWorker.prototype = OriginalWorker.prototype;
    Object.setPrototypeOf(PatchedWorker, OriginalWorker);
    window.Worker = PatchedWorker;
    window.__pulseSyncYaspNativeAudioWorkerPatchInstalled = true;
}

function installSourceConfigHook() {
    if (window.__pulseSyncYaspNativeAudioSourceConfigHookInstalled) return true;
    const yasp = window.Ya?.YaspAudioElement;
    if (!yasp || typeof yasp.configureSource !== 'function') return false;
    const original = yasp.configureSource;
    yasp.configureSource = function (this: unknown, source: unknown, config: Record<string, unknown> = {}) {
        try {
            const url = new URL(String(source ?? ''));
            url.searchParams.delete('index');
            currentSourceKey = url.href.replace(/#.+$/, '');
        } catch {
            currentSourceKey = String(source ?? '');
        }
        if (getTapMode() !== TAP_OFF) window.nativeAudioOutput?.configureYaspSource?.({ source, sourceKey: currentSourceKey, config: cloneValue(config) });
        return original.apply(this, arguments as any);
    };
    window.__pulseSyncYaspNativeAudioSourceConfigHookInstalled = true;
    return true;
}

export function installYaspNativeAudioHooks() {
    installWorkerPatch();
    if (installSourceConfigHook()) return;
    const timer = window.setInterval(() => {
        if (installSourceConfigHook()) window.clearInterval(timer);
    }, 500);
}
