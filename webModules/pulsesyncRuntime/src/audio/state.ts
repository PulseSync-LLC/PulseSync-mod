export type AudioConnection = {
    source: AudioNode;
    destination: AudioNode;
    args: any[];
};

export type MutedAudioConnection = AudioConnection & {
    muteGain: GainNode;
    output: number;
    input: number;
};

export type AudioSinkId = string | { type: 'none' };

export const audioState = {
    graphConnections: new WeakMap<AudioNode, AudioConnection[]>(),
    graphNodes: new Set<AudioNode>(),
    muteGainByContext: new WeakMap<BaseAudioContext, GainNode>(),
    muteGainNodes: new WeakSet<GainNode>(),
    mutedConnections: [] as MutedAudioConnection[],
    contexts: new Set<AudioContext>(),
    originalSinkIds: new WeakMap<AudioContext, AudioSinkId>(),
    localMuted: false,
    wasapiOutputActive: false,
    parkingRequested: false,
    parkingSignature: null as string | null,
    parkingInFlightSignature: null as string | null,
    parkingAcknowledgedSignature: null as string | null,
    parkingGeneration: 0,
    lastWasapiOutputState: null as Record<string, any> | null,
    playerHold: { active: false, resumeOnRelease: false },
    progressSync: { inFlight: false, lastSyncAt: 0 },
    seekProxyPlayers: new WeakSet<Record<string, any>>(),
    crossfadePolicy: {
        enabled: false,
        restoreEnabled: null as boolean | null,
        playerInstance: null as Record<string, any> | null,
        crossfadePlayer: null as Record<string, any> | null,
        crossfadeEnabledUnsubscribe: null as (() => void) | null,
        currentMediaPlayerUnsubscribe: null as (() => void) | null,
        mediaPlayersStoreUnsubscribe: null as (() => void) | null,
        applying: false,
    },
};
