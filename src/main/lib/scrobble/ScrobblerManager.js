'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.ScrobblerManager = void 0;
const Logger_1 = require('../../packages/logger/Logger');
const store_js_1 = require('../store');

/**
 * ScrobblerManager is responsible for managing all scrobbler services
 * and distributing playing state events to them.
 */
class ScrobblerManager {
    constructor() {
        this.logger = new Logger_1.Logger('ScrobblerManager');
        this.scrobblers = [];
        this.currentTrackId = null;
        this.currentTrackPlaying = false;
        this.debounceTimeout = null;
        // Track last processed progress (in seconds) for allowing re-scrobble on restart
        this.lastProcessedProgress = null;
        // Track last processed timestamp to avoid immediate duplicates
        this.lastProcessedTime = 0;
    }
    /**
     * Registers a scrobbler service with the manager
     *
     * @param scrobblers The scrobbler service to register
     */
    registerScrobbler(...scrobblers) {
        scrobblers.forEach((scrobbler) => {
            this.logger.info(`Registering scrobbler: ${scrobbler.type}`);
            this.scrobblers.push(scrobbler);
        });
    }
    /**
     * Gets all registered scrobblers
     */
    getScrobblers() {
        return this.scrobblers;
    }
    /**
     * Gets a scrobbler service by type
     *
     * @param type The type of scrobbler service to get
     * @returns The scrobbler service or undefined if not found
     */
    getScrobblerByType(type) {
        return this.scrobblers.find((scrobbler) => scrobbler.type === type);
    }
    /**
     * Handles a playing state event and distributes it to all enabled scrobblers
     *
     * Has a debounce to prevent spamming the scrobblers with the same event.
     *
     * @param playingState The current playing state
     */
    handlePlayingState(playingState) {
        if (!playingState?.track) return;
        if (playingState.track.id.startsWith('generative')) return;
        if (playingState.status.startsWith('loading')) return;
        if (this.debounceTimeout) {
            clearTimeout(this.debounceTimeout);
            this.debounceTimeout = null;
        }

        const now = Date.now();
        const progress = typeof playingState.progress === 'number' ? playingState.progress : null;
        const sameTrack = playingState.track.id === this.currentTrackId;
        const samePlayingState = this.currentTrackPlaying === playingState.isPlaying;

        if (sameTrack && samePlayingState) {
            const restarted = progress !== null && this.lastProcessedProgress !== null && progress < this.lastProcessedProgress;
            const restartedFromZero = progress === 0 && this.lastProcessedProgress && this.lastProcessedProgress > 0;

            const MIN_REPEAT_INTERVAL_MS = 15 * 1000; // 15 seconds

            if (!restarted && !restartedFromZero) {
                if (now - this.lastProcessedTime < MIN_REPEAT_INTERVAL_MS) {
                    return;
                }
            }
        }

        this.debounceTimeout = setTimeout(() => {
            this.processPlayingState(playingState);
        }, ScrobblerManager.DEBOUNCE_DELAY_MS);
    }
    /**
     * Processes a playing state event and distributes it to all enabled scrobblers
     *
     * @param playingState The current playing state
     */
    processPlayingState(playingState) {
        if (!playingState) return;

        this.currentTrackId = playingState.track.id;
        this.currentTrackPlaying = playingState.isPlaying;
        // store last processed progress/time for duplicate handling
        this.lastProcessedProgress = typeof playingState.progress === 'number' ? playingState.progress : null;
        this.lastProcessedTime = Date.now();

        this.logger.info(`Processing playing state: ${playingState.isPlaying ? 'Playing' : 'Paused'} with status "${playingState.status}" - ${playingState.track.title}`);
        this.scrobblers.filter((scrobbler) => scrobbler.isEnabled()).forEach((scrobbler) => scrobbler.handleEvent(playingState));
    }
    async handlePlayingStateFromYnison(ynisonState) {
        if (!ynisonState || store_js_1.getModSettings()?.scrobblers?.lastfm?.fromYnison === false) return;
        let partialPlayerState = {};
        let currentTrackData = ynisonState?.rawData?.player_state?.player_queue?.playable_list[ynisonState?.rawData?.player_state?.player_queue?.current_playable_index];
        if (!currentTrackData) return;

        const res = await fetch(`https://api.music.yandex.net/tracks/${currentTrackData.playable_id}:${currentTrackData.album_id_optional ?? ''}`);

        if (!res.ok) return this.logger.warn(`Failed to fetch track data: ${res.statusText}`);

        const fetchedTrack = (await res.json())?.result?.[0];

        if (!fetchedTrack) return this.logger.warn(`Failed to decode track data: ${await res.json()}`);

        partialPlayerState.track = fetchedTrack;
        partialPlayerState.progress = parseInt(ynisonState?.rawData?.player_state?.status?.progress_ms);
        partialPlayerState.status = ynisonState?.rawData?.player_state?.status?.paused ? 'paused' : 'playing';

        partialPlayerState.isPlaying = partialPlayerState.status === 'playing';

        partialPlayerState.devices = ynisonState?.rawData?.devices;

        let currentDevice = undefined;

        ynisonState?.rawData?.devices.forEach((device) => {
            if (device?.info?.device_id && device?.info?.device_id === ynisonState?.rawData?.active_device_id_optional) currentDevice = device;
        });

        partialPlayerState.currentDevice = currentDevice;

        if (partialPlayerState.progress && partialPlayerState.progress !== 0) partialPlayerState.progress = Math.round(partialPlayerState.progress / 1000);

        this.processPlayingState(partialPlayerState);
    }
}
exports.ScrobblerManager = ScrobblerManager;
ScrobblerManager.DEBOUNCE_DELAY_MS = 1500;
