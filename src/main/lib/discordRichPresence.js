'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const Logger_js_1 = require('../packages/logger/Logger.js');
const store_js_1 = require('./store.js');
const { throttle } = require('./utils.js');
const config_js_1 = require('../config.js');
const DiscordRPC = require('@xhayper/discord-rpc');
const discordRichPresenceLogger = new Logger_js_1.Logger('DiscordRichPresence');
const pulseSyncManager_js_1 = require('./pulsesync/PulseSyncManager.js');

class convertableLink {
    constructor(link) {
        this.link = link;
    }

    toString() {
        return this.link;
    }

    toWeb() {
        if (!this.link) return;
        return 'https://music.yandex.ru/' + this.link + '?utm_source=discord&utm_medium=rich_presence_click';
    }

    toApp() {
        if (!this.link) return;
        return 'yandexmusic://' + this.link;
    }
}

const settings = () => store_js_1.get('modSettings.discordRPC') ?? {};

const clientId = settings()?.applicationIDForRPC ?? '1124055337234858005';
const WEB_LINK = 'https://pulsesync.dev';
const SET_ACTIVITY_TIMEOUT_MS = 3000;
const STATUS_DISPLAY_TYPES = {
    0: 0, // Name
    1: 1, // State
    2: 2, // Details
};

let rpc = undefined;
let isReady = false;
let isReconnecting = false;

let afkTimeoutId = undefined;
let reconnectTimeoutId = undefined;
let reconnectRevision = 0;
let connectingRpc = null;
let hasAttemptedConnection = false;
let pausedState = null;
let afkDeadline = null;

let lastPlayingState = undefined;
let lastActivity = undefined;

let activityRevision = 0;
let activityOperationQueue = Promise.resolve();
let subscribedPulseSyncManager;

const tryConnect = async (client) => {
    connectingRpc = client;
    try {
        discordRichPresenceLogger.info('Connecting to Discord...');
        await client.login();
        return rpc === client && (settings().enable ?? true);
    } catch (e) {
        discordRichPresenceLogger.error('Connect error:', e);
        return false;
    } finally {
        if (connectingRpc === client) connectingRpc = null;
    }
};

function getReconnectIntervalMs(rpcSettings) {
    const interval = Number(rpcSettings.reconnectInterval ?? 30);
    return Number.isFinite(interval) && interval > 0 ? interval * 1000 : 0;
}

function stopReconnectLoop() {
    clearTimeout(reconnectTimeoutId);
    reconnectTimeoutId = undefined;
    isReconnecting = false;
    reconnectRevision += 1;
}

function startReconnectLoop() {
    const rpcSettings = settings();
    if (isReconnecting || connectingRpc === rpc || !(rpcSettings.enable ?? true) || !getReconnectIntervalMs(rpcSettings)) {
        return;
    }

    isReconnecting = true;
    const revision = ++reconnectRevision;

    let n = 0;
    discordRichPresenceLogger.info('Reconnecting');

    const reconnectAttempt = async () => {
        if (revision !== reconnectRevision) return;
        reconnectTimeoutId = undefined;
        const nextSettings = settings();
        if (!(nextSettings.enable ?? true) || !getReconnectIntervalMs(nextSettings)) return stopReconnectLoop();
        const previous = rpc;
        rpc = undefined;
        isReady = false;
        activityRevision += 1;
        lastActivity = undefined;
        if (previous) await previous.destroy().catch(() => {});
        if (revision !== reconnectRevision) return;
        const client = initRPC();
        const connected = await tryConnect(client);
        if (revision !== reconnectRevision || rpc !== client) return;

        if (!connected) {
            const currentSettings = settings();
            const reconnectInterval = getReconnectIntervalMs(currentSettings);
            if (!(currentSettings.enable ?? true) || !reconnectInterval) return stopReconnectLoop();
            discordRichPresenceLogger.info(`Reconnect failed (#${++n})`);
            reconnectTimeoutId = setTimeout(reconnectAttempt, reconnectInterval);
        } else {
            discordRichPresenceLogger.info('Reconnect succeeded');
            clearTimeout(reconnectTimeoutId);
            reconnectTimeoutId = undefined;
            isReconnecting = false;
        }
    };

    void reconnectAttempt();
}

const initRPC = () => {
    const client = new DiscordRPC.Client({
        clientId: clientId,
        transport: { type: 'ipc' },
    });
    rpc = client;

    isReady = false;

    client.on('ready', () => {
        if (rpc !== client) return;
        discordRichPresenceLogger.info('Ready');
    });

    client.on('connected', () => {
        if (rpc !== client) return;
        isReady = true;
        discordRichPresenceLogger.info('Connected');
        sendCurrentActivity();
    });

    client.on('disconnected', () => {
        if (rpc !== client) return;
        isReady = false;

        activityRevision += 1;
        lastActivity = undefined;

        discordRichPresenceLogger.info('Disconnected');

        startReconnectLoop();
    });

    client.on('error', (e) => {
        if (rpc !== client) return;
        discordRichPresenceLogger.error('Error', e);
    });

    const manager = pulseSyncManager_js_1.getPulseSyncManager();
    if (manager !== subscribedPulseSyncManager) {
        subscribedPulseSyncManager?.removeListener('disconnected', sendCurrentActivity);
        subscribedPulseSyncManager?.removeListener('connected', sendCurrentActivity);
        manager.on('disconnected', sendCurrentActivity);
        manager.on('connected', sendCurrentActivity);
        subscribedPulseSyncManager = manager;
    }
    return client;
};

const states = {
    playing: { icon: 'playing', name: 'Playing' },
    paused: { icon: 'paused', name: 'Paused' },
    stopped: { icon: 'paused', name: 'Stopped' },
    unknown: { icon: 'logo', name: 'Unknown' },
    default: { icon: 'logo', name: 'Yandex Music' },
};

function string2Discord(string) {
    if (!string) return string;

    if (string.length <= 1) {
        string += 'ㅤ';
    }

    if (string.length > 128) {
        string = string.substring(0, 127);
        string += '…';
    }

    return string;
}

function removeTimestampsFromActivity(activity) {
    return { ...activity, startTimestamp: undefined, endTimestamp: undefined };
}

function serializeActivity(activity) {
    return JSON.stringify(activity);
}

// Проверка значительно ли отличаются временные метки.
// Нужно для оценки целесообразности отправки нового SET_ACTIVITY.
function isTimestampsDifferent(activityA, activityB) {
    const diff = Math.abs((activityA.startTimestamp ?? 0) - (activityB.startTimestamp ?? 0)) + Math.abs((activityA.endTimestamp ?? 0) - (activityB.endTimestamp ?? 0));

    discordRichPresenceLogger.info(
        diff,
        (activityA.startTimestamp ?? 0) - (activityB.startTimestamp ?? 0),
        (activityA.endTimestamp ?? 0) - (activityB.endTimestamp ?? 0),
    );

    return diff > 2000;
}

function compareActivities(newActivity) {
    if (!lastActivity) return false;

    return (
        serializeActivity(removeTimestampsFromActivity(newActivity)) === serializeActivity(removeTimestampsFromActivity(lastActivity)) &&
        !isTimestampsDifferent(newActivity, lastActivity)
    );
}

const getArtist = (artistsArray) => {
    if (!artistsArray?.[0]?.name) return undefined;

    let artistsLabel = artistsArray[0].name;
    artistsArray.shift();

    artistsArray.forEach((artist) => {
        artistsLabel += ', ' + artist.name;
    });

    return artistsLabel;
};

const fromYnisonState = (ynisonState) => {
    if (!settings().fromYnison) return;

    let partialPlayerState = {};

    let currentTrackData = ynisonState?.rawData?.player_state?.player_queue?.playable_list[ynisonState?.rawData?.player_state?.player_queue?.current_playable_index];

    if (!currentTrackData) return;

    const ynisonStatus = ynisonState?.rawData?.player_state?.status;

    if (typeof ynisonStatus?.paused !== 'boolean') return;

    partialPlayerState.track = {
        title: currentTrackData?.title,
        coverUri: currentTrackData?.cover_url_optional,
        id: currentTrackData?.playable_id,
        ...(currentTrackData.album_id_optional
            ? {
                  albums: [
                      {
                          id: currentTrackData.album_id_optional,
                      },
                  ],
              }
            : undefined),
        durationMs: parseInt(ynisonStatus.duration_ms),
    };

    const progressMs = parseInt(ynisonStatus.progress_ms);

    partialPlayerState.status = ynisonStatus.paused ? 'paused' : 'playing';

    partialPlayerState.devices = ynisonState?.rawData?.devices;

    let currentDevice = undefined;

    ynisonState?.rawData?.devices?.forEach((device) => {
        if (device?.info?.device_id && device?.info?.device_id === ynisonState?.rawData?.active_device_id_optional) {
            currentDevice = device;
        }
    });

    partialPlayerState.currentDevice = currentDevice;

    if (!Number.isNaN(progressMs)) {
        partialPlayerState.progress = {
            position: Math.round(progressMs / 1000),
        };
    }

    discordRichPresence(partialPlayerState);
};

function enqueueActivityOperation(operationName, operation) {
    activityOperationQueue = activityOperationQueue
        .catch((e) => {
            discordRichPresenceLogger.error('Previous activity operation error:', e);
        })
        .then(async () => {
            try {
                await operation();
            } catch (e) {
                discordRichPresenceLogger.error(`${operationName} error:`, e);
            }
        });

    return activityOperationQueue;
}

function updateActivity({ activityObject, revision }) {
    if (revision !== activityRevision) {
        discordRichPresenceLogger.debug('Skipping stale activity update');
        return;
    }

    void enqueueActivityOperation('updateActivity', async () => {
        if (revision !== activityRevision || !isReady || !rpc?.user) {
            return;
        }

        discordRichPresenceLogger.debug('Updating activity:', activityObject);

        await rpc.user.setActivity(activityObject);
    });
}

const throttledUpdateActivity = throttle(updateActivity, SET_ACTIVITY_TIMEOUT_MS);

function getAfkTimeoutMinutes(rpcSettings) {
    const value = Number(rpcSettings.afkTimeout ?? 15);

    return Number.isFinite(value) && value >= 0 ? value : 15;
}

function clearAfkTimer() {
    if (afkTimeoutId) {
        clearTimeout(afkTimeoutId);
        afkTimeoutId = undefined;
    }
    afkDeadline = null;
}

function clearCurrentActivity(reason, { destroyRpc = false } = {}) {
    clearAfkTimer();
    const client = rpc;
    if (destroyRpc) {
        stopReconnectLoop();
        rpc = undefined;
        isReady = false;
        pausedState = null;
        hasAttemptedConnection = false;
    }

    const revision = ++activityRevision;

    lastActivity = undefined;

    discordRichPresenceLogger.info(reason);

    return enqueueActivityOperation('clearActivity', async () => {
        if (!destroyRpc && (revision !== activityRevision || rpc !== client)) return;
        try {
            if (client?.user) await client.user.clearActivity();
        } finally {
            if (destroyRpc && client) await client.destroy();
        }
    });
}

function sendCurrentActivity() {
    const rpcSettings = settings();
    const isEnabled = rpcSettings.enable ?? true;

    if (!isEnabled) {
        stopReconnectLoop();
        clearAfkTimer();
        pausedState = null;
        hasAttemptedConnection = false;
        if (rpc || lastActivity) void clearCurrentActivity('Clearing activity because Discord RPC is disabled', { destroyRpc: true });
        return;
    }
    if (!lastPlayingState) return;
    if (isReconnecting && !getReconnectIntervalMs(rpcSettings)) stopReconnectLoop();

    const afkTimeoutMinutes = getAfkTimeoutMinutes(rpcSettings);
    if (lastPlayingState.status === 'paused') {
        if (!pausedState || pausedState.trackId !== lastPlayingState.track?.id) {
            pausedState = { trackId: lastPlayingState.track?.id, startedAt: Date.now() };
        }
        const deadline = pausedState.startedAt + afkTimeoutMinutes * 60 * 1000;
        if (!afkTimeoutMinutes || deadline <= Date.now()) {
            clearAfkTimer();
            if (lastActivity) void clearCurrentActivity('Clearing activity due to inactivity');
            return;
        }
        if (afkDeadline !== deadline) {
            clearAfkTimer();
            afkDeadline = deadline;
            afkTimeoutId = setTimeout(() => {
                afkTimeoutId = undefined;
                sendCurrentActivity();
            }, deadline - Date.now());
        }
    } else {
        pausedState = null;
        clearAfkTimer();
    }

    if (!rpc) {
        if (isReconnecting) return;
        if (hasAttemptedConnection) {
            startReconnectLoop();
            return;
        }
        hasAttemptedConnection = true;
        const client = initRPC();
        void tryConnect(client).then((connected) => {
            if (rpc === client && !connected) startReconnectLoop();
        });
        return;
    }
    if (!isReady) {
        startReconnectLoop();
        return;
    }
    const activityObject = buildActivityObject(lastPlayingState, rpcSettings);

    if (activityObject && !compareActivities(activityObject)) {
        const revision = ++activityRevision;

        lastActivity = activityObject;

        throttledUpdateActivity({
            activityObject,
            revision,
        });
    }
}

function buildActivityObject(playingState, rpcSettings) {
    if (!playingState.track) return undefined;

    if (playingState.status.startsWith('loading')) {
        return undefined;
    }

    const isGenerative = playingState.track?.id.startsWith('generative');

    let title = playingState.track?.title;

    if (playingState.track?.version && (rpcSettings.showVersion ?? true)) {
        title = playingState.track.title + ` (${playingState.track.version})`;
    }

    const artist = getArtist(playingState.track?.artists?.slice());

    let album = playingState.track?.albums?.[0]?.title;

    if (title === album || album === undefined) {
        album = undefined;
    }

    let albumArt = undefined;

    if (playingState.track?.coverUri) {
        albumArt = `https://${playingState.track.coverUri}`.replace('%%', '400x400');
    }

    if (playingState.track?.imageUrl) {
        albumArt = `https://${playingState.track.imageUrl}`.replace('%%', '400x400');
    }

    const shareTrackPath = new convertableLink(
        playingState.track.albums?.[0]?.id && playingState.track.id ? `album/${playingState.track.albums?.[0]?.id}/track/${playingState.track.id}` : undefined,
    );

    const shareAlbumPath = new convertableLink(playingState.track.albums?.[0]?.id ? `album/${playingState.track.albums?.[0]?.id}` : undefined);

    const shareArtistPath = new convertableLink(playingState.track.artists?.[0]?.id ? `artist/${playingState.track.artists?.[0]?.id}` : undefined);

    let startTimestamp = Math.round(Date.now() - (playingState.progress.position ?? 0) * 1000);

    let endTimestamp = isGenerative ? undefined : startTimestamp + (playingState.track.durationMs ?? 0);

    let stateKey = states[playingState.status]?.icon;

    let stateText = states[playingState.status]?.name;

    stateText += ' on ' + (playingState.currentDevice?.info?.type ?? 'DESKTOP');

    if (!states[playingState.status]) {
        stateKey = states.unknown?.icon;
        stateText = states.unknown?.name;
    }

    if (playingState.status !== 'playing') {
        startTimestamp = undefined;
        endTimestamp = undefined;
    }

    const isPremiumUser = Boolean(pulseSyncManager_js_1.getPulseSyncManager()?.isPremiumUser);

    const hideBranding = Boolean(rpcSettings.hideBranding) && isPremiumUser;

    let activityObject = {
        type: 2,
        statusDisplayType: STATUS_DISPLAY_TYPES[rpcSettings.statusDisplayType] ?? 0,
        details: string2Discord(title),
        detailsUrl: shareTrackPath.toWeb(),
        state: string2Discord(artist),
        stateUrl: shareArtistPath.toWeb(),
        largeImageKey: albumArt,
        largeImageText: !hideBranding && `PulseSync Mod ${config_js_1.config.modification.version}`,
        largeImageUrl: WEB_LINK,
        startTimestamp,
        endTimestamp,
        instance: false,
    };

    if (rpcSettings.showSmallIcon ?? true) {
        activityObject.smallImageKey = stateKey;
        activityObject.smallImageText = stateText;
    }

    if ((rpcSettings.showAlbum ?? true) && album) {
        activityObject.largeImageText = string2Discord(album);

        activityObject.largeImageUrl = shareAlbumPath.toWeb();
    }

    if ((shareTrackPath.toApp() || shareTrackPath.toWeb()) && (rpcSettings.showButtons ?? true)) {
        if (!(rpcSettings.overrideDeepLinksExperiment ?? false)) {
            activityObject.buttons = [
                {
                    label: 'Listen in Yandex Music App',
                    url: shareTrackPath.toApp(),
                },
                {
                    label: 'Listen in Yandex Music Web',
                    url: shareTrackPath.toWeb(),
                },
            ];
        } else if (rpcSettings.showGitHubButton ?? true) {
            activityObject.buttons = [
                {
                    label: 'Listen on Yandex Music',
                    url: shareTrackPath.toWeb(),
                },
                {
                    label: 'Install mod',
                    url: WEB_LINK,
                },
            ];
        } else {
            activityObject.buttons = [
                {
                    label: 'Listen on Yandex Music',
                    url: shareTrackPath.toWeb(),
                },
            ];
        }
    }

    return activityObject;
}

const discordRichPresence = (playingState) => {
    lastPlayingState = playingState;
    sendCurrentActivity();
};

exports.discordRichPresence = discordRichPresence;

exports.fromYnisonState = fromYnisonState;
exports.refreshSettings = sendCurrentActivity;
