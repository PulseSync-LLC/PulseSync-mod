import type { UnknownRecord } from '../contracts';
import { audioState, type AudioConnection, type AudioSinkId, type MutedAudioConnection } from './state';

type RuntimeAudioContext = AudioContext & {
    sinkId?: AudioSinkId;
    setSinkId?: (sinkId: AudioSinkId) => Promise<void>;
};

type RuntimeAudioContextConstructor = new (options?: AudioContextOptions & { sinkId?: AudioSinkId }) => RuntimeAudioContext;
type AudioMethod = (this: AudioNode, ...args: any[]) => unknown;

function getOriginalConnect() {
    return (window.__pulseSyncYandexStationOriginalAudioNodeConnect ?? window.AudioNode?.prototype.connect) as AudioMethod | undefined;
}

function getOriginalDisconnect() {
    return (window.__pulseSyncYandexStationOriginalAudioNodeDisconnect ?? window.AudioNode?.prototype.disconnect) as AudioMethod | undefined;
}

function cloneSinkId(sinkId: unknown): AudioSinkId {
    return sinkId && typeof sinkId === 'object' ? ({ ...(sinkId as object) } as { type: 'none' }) : typeof sinkId === 'string' ? sinkId : '';
}

function isSilentSinkId(sinkId: unknown): sinkId is { type: 'none' } {
    return Boolean(sinkId && typeof sinkId === 'object' && (sinkId as { type?: unknown }).type === 'none');
}

function areSinkIdsEqual(left: unknown, right: unknown) {
    if (isSilentSinkId(left) || isSilentSinkId(right)) return isSilentSinkId(left) && isSilentSinkId(right);
    return String(left ?? '') === String(right ?? '');
}

function rememberContextSinkId(context: RuntimeAudioContext) {
    if (!audioState.originalSinkIds.has(context)) audioState.originalSinkIds.set(context, cloneSinkId(context.sinkId));
}

async function applyContextSinkId(context: RuntimeAudioContext) {
    if (context.state === 'closed') return false;
    if (typeof context.setSinkId !== 'function') {
        if (audioState.parkingRequested) throw new Error('AudioContext.setSinkId is unavailable; cannot release the exclusive endpoint');
        return false;
    }

    rememberContextSinkId(context);
    const sinkId = audioState.parkingRequested ? { type: 'none' as const } : (audioState.originalSinkIds.get(context) ?? '');
    if (areSinkIdsEqual(context.sinkId, sinkId)) return false;
    await context.setSinkId(sinkId);
    return true;
}

function reportParking(state: UnknownRecord) {
    window.nativeAudioOutput?.reportWasapiExclusiveAudioParking?.(state);
}

function registerContext(context: RuntimeAudioContext | undefined) {
    if (!context || typeof context !== 'object') return;
    audioState.contexts.add(context);
    rememberContextSinkId(context);
    void applyContextSinkId(context).catch((error: unknown) => {
        console.warn('[PulseSync] Failed to park a new WebAudio context for WASAPI exclusive:', error);
        if (audioState.parkingRequested && audioState.parkingSignature) {
            reportParking({
                signature: audioState.parkingSignature,
                ready: false,
                error: error instanceof Error ? error.message : String(error),
                updatedAt: Date.now(),
            });
        }
    });
}

function createContextOptions(options: unknown) {
    if (!audioState.parkingRequested) return options;
    if (options == null) return { sinkId: { type: 'none' as const } };
    if (typeof options !== 'object' || Array.isArray(options) || Object.prototype.hasOwnProperty.call(options, 'sinkId')) return options;
    return { ...options, sinkId: { type: 'none' as const } };
}

function wrapContextConstructor(propertyName: 'AudioContext' | 'webkitAudioContext') {
    const runtimeWindow = window as typeof window & Record<string, any>;
    const OriginalAudioContext = runtimeWindow[propertyName] as RuntimeAudioContextConstructor | undefined;
    if (typeof OriginalAudioContext !== 'function' || (OriginalAudioContext as any).__pulseSyncWasapiSilentSinkWrapped) return;

    const PulseSyncAudioContext = function (this: unknown, ...args: any[]) {
        const options = createContextOptions(args[0]);
        let context: RuntimeAudioContext;
        try {
            const constructorArgs = args.length ? [options, ...args.slice(1)] : options === undefined ? [] : [options];
            context = new OriginalAudioContext(...(constructorArgs as [AudioContextOptions]));
        } catch (error) {
            if (options === args[0]) throw error;
            context = new OriginalAudioContext(...(args as [AudioContextOptions]));
        }
        registerContext(context);
        return context;
    } as unknown as RuntimeAudioContextConstructor;

    Object.defineProperty(PulseSyncAudioContext, '__pulseSyncWasapiSilentSinkWrapped', { value: true });
    Object.setPrototypeOf(PulseSyncAudioContext, OriginalAudioContext);
    PulseSyncAudioContext.prototype = OriginalAudioContext.prototype;
    runtimeWindow[propertyName] = PulseSyncAudioContext;
}

function installSilentSinkMonitor() {
    wrapContextConstructor('AudioContext');
    wrapContextConstructor('webkitAudioContext');
}

async function syncWebAudioSink() {
    installSilentSinkMonitor();
    const contexts = [...audioState.contexts].filter((context) => {
        if (context.state !== 'closed') return true;
        audioState.contexts.delete(context);
        return false;
    });
    if (audioState.parkingRequested && !contexts.length) throw new Error('No live AudioContext was discovered for WASAPI parking');
    await Promise.all(contexts.map((context) => applyContextSinkId(context)));
    return contexts.length;
}

export function syncWasapiAudioParking(state: Record<string, any> | null) {
    const session = state?.session;
    const shouldPark = Boolean(state?.captureActive === true && session?.audioParkingRequired === true && session?.signature);
    if (!shouldPark) {
        if (!audioState.parkingRequested) return;
        audioState.parkingRequested = false;
        audioState.parkingSignature = null;
        audioState.parkingInFlightSignature = null;
        audioState.parkingAcknowledgedSignature = null;
        audioState.parkingGeneration += 1;
        void syncWebAudioSink().catch((error) => console.warn('[PulseSync] Failed to restore WebAudio sink after WASAPI exclusive:', error));
        return;
    }

    const signature = session.signature as string;
    if (audioState.parkingSignature !== signature) {
        audioState.parkingRequested = true;
        audioState.parkingSignature = signature;
        audioState.parkingInFlightSignature = null;
        audioState.parkingAcknowledgedSignature = null;
        audioState.parkingGeneration += 1;
    }
    if (session.waitingForAudioParking !== true || audioState.parkingInFlightSignature === signature || audioState.parkingAcknowledgedSignature === signature) return;

    const generation = audioState.parkingGeneration;
    audioState.parkingInFlightSignature = signature;
    void syncWebAudioSink()
        .then((contextCount) => {
            if (generation !== audioState.parkingGeneration || audioState.parkingSignature !== signature) return;
            audioState.parkingInFlightSignature = null;
            audioState.parkingAcknowledgedSignature = signature;
            reportParking({ signature, ready: true, contextCount, updatedAt: Date.now() });
        })
        .catch((error: unknown) => {
            if (generation !== audioState.parkingGeneration || audioState.parkingSignature !== signature) return;
            audioState.parkingInFlightSignature = null;
            reportParking({ signature, ready: false, error: error instanceof Error ? error.message : String(error), updatedAt: Date.now() });
        });
}

function rememberConnection(source: AudioNode, args: any[]) {
    const destination = args[0] as AudioNode | undefined;
    if (!source || !destination || typeof source !== 'object' || typeof destination !== 'object') return;
    registerContext(source.context as RuntimeAudioContext);
    registerContext(destination.context as RuntimeAudioContext);
    const records = audioState.graphConnections.get(source) ?? [];
    records.push({ source, destination, args });
    audioState.graphConnections.set(source, records);
    audioState.graphNodes.add(source);
}

function forgetConnections(source: AudioNode, args: any[]) {
    const records = audioState.graphConnections.get(source);
    if (!records) return;
    if (!args.length) return void audioState.graphConnections.set(source, []);
    if (typeof args[0] === 'number') return;
    audioState.graphConnections.set(source, records.filter((record) => record.destination !== args[0]));
}

function isAudioDestination(source: AudioNode, destination: unknown): destination is AudioDestinationNode {
    return Boolean(
        destination &&
            typeof destination === 'object' &&
            ((typeof AudioDestinationNode !== 'undefined' && destination instanceof AudioDestinationNode) || destination === source.context.destination),
    );
}

function getMuteGain(context: BaseAudioContext) {
    if (!context?.createGain) return null;
    let gain = audioState.muteGainByContext.get(context);
    if (gain) return gain;
    gain = context.createGain();
    gain.gain.value = 0;
    audioState.muteGainNodes.add(gain);
    audioState.muteGainByContext.set(context, gain);
    return gain;
}

function routeThroughMute(source: AudioNode, args: any[], disconnectOriginal = true) {
    const destination = args[0];
    if (!isAudioDestination(source, destination) || audioState.muteGainNodes.has(source as GainNode)) return false;
    if (audioState.mutedConnections.some((connection) => connection.source === source && connection.destination === destination)) return true;
    const connect = getOriginalConnect();
    const disconnect = getOriginalDisconnect();
    if (!connect || !disconnect) return false;
    const muteGain = getMuteGain(source.context);
    if (!muteGain) return false;
    const output = typeof args[1] === 'number' ? args[1] : 0;
    const input = typeof args[2] === 'number' ? args[2] : 0;
    if (disconnectOriginal) {
        try {
            disconnect.apply(source, args);
        } catch {
            try {
                disconnect.call(source, destination);
            } catch {}
        }
    }
    try {
        connect.call(source, muteGain, output, 0);
        connect.call(muteGain, destination, 0, input);
        audioState.mutedConnections.push({ source, destination, args, muteGain, output, input });
        return true;
    } catch {
        return false;
    }
}

function unrouteMuted(connection: MutedAudioConnection, restoreOriginal = true) {
    const connect = getOriginalConnect();
    const disconnect = getOriginalDisconnect();
    if (!connect || !disconnect) return;
    try {
        disconnect.call(connection.source, connection.muteGain);
    } catch {}
    try {
        disconnect.call(connection.muteGain, connection.destination);
    } catch {}
    if (!restoreOriginal) return;
    try {
        connect.apply(connection.source, connection.args);
        rememberConnection(connection.source, connection.args);
    } catch {}
}

function removeMutedConnections(source: AudioNode, args: any[]) {
    let removed = false;
    for (let index = audioState.mutedConnections.length - 1; index >= 0; index -= 1) {
        const connection = audioState.mutedConnections[index];
        if (connection.source !== source) continue;
        if (args.length && args[0] && connection.destination !== args[0] && connection.muteGain !== args[0]) continue;
        audioState.mutedConnections.splice(index, 1);
        unrouteMuted(connection, false);
        removed = true;
    }
    return removed;
}

function isGainMuted() {
    return audioState.localMuted || audioState.wasapiOutputActive;
}

export function installWebAudioGraphMonitor() {
    if (!window.AudioNode?.prototype || window.__pulseSyncYandexStationAudioGraphMonitorInstalled) return;
    const originalConnect = window.AudioNode.prototype.connect as AudioMethod;
    const originalDisconnect = window.AudioNode.prototype.disconnect as AudioMethod;
    window.__pulseSyncYandexStationAudioGraphMonitorInstalled = true;
    window.__pulseSyncYandexStationOriginalAudioNodeConnect = originalConnect;
    window.__pulseSyncYandexStationOriginalAudioNodeDisconnect = originalDisconnect;
    window.AudioNode.prototype.connect = function (this: AudioNode, ...args: any[]) {
        if (isGainMuted() && routeThroughMute(this, args, false)) {
            rememberConnection(this, args);
            return args[0];
        }
        const result = originalConnect.apply(this, args);
        rememberConnection(this, args);
        return result;
    } as typeof AudioNode.prototype.connect;
    window.AudioNode.prototype.disconnect = function (this: AudioNode, ...args: any[]) {
        if (removeMutedConnections(this, args) && args.length && typeof args[0] !== 'number') {
            forgetConnections(this, args);
            return;
        }
        const result = originalDisconnect.apply(this, args);
        forgetConnections(this, args);
        return result;
    } as typeof AudioNode.prototype.disconnect;
}

export function syncLocalAudioGainMute() {
    installWebAudioGraphMonitor();
    if (!isGainMuted()) {
        while (audioState.mutedConnections.length) unrouteMuted(audioState.mutedConnections.shift() as MutedAudioConnection, true);
        return;
    }
    audioState.graphNodes.forEach((source) => {
        (audioState.graphConnections.get(source) ?? []).forEach((connection: AudioConnection) => routeThroughMute(source, connection.args, true));
    });
}

export function setLocalAudioMuted(muted: boolean) {
    audioState.localMuted = muted;
    syncLocalAudioGainMute();
}
