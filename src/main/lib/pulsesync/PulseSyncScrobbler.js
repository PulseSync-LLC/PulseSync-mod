'use strict';
const scrobblerTypeEnum_1 = require('../scrobble/constants/scrobblerTypeEnum');
const Logger_1 = require('../../packages/logger/Logger');
Object.defineProperty(exports, '__esModule', { value: true });

class PulseSyncScrobbler {
    constructor(manager) {
        this.type = scrobblerTypeEnum_1.ScrobblerTypeEnum.PulseSync;
        this.logger = new Logger_1.Logger('PulseSyncScrobbler');
        this.currentTrack = null;
        this.currentTrackStartTime = null;
        this.currentTrackPlayedTime = 0;
        this.isScrobblerEnabled = true;
        this.pulseSyncManager = manager;
    }

    handleEvent(playingState) {
        if (this.isTrackChanged(playingState.track)) {
            this.handleTrackChange(playingState);
        } else if (this.isPlaybackStateChanged(playingState)) {
            this.handlePlaybackStateChange(playingState);
        }
    }
    isEnabled() {
        return this.isScrobblerEnabled;
    }
    isTrackChanged(newTrack) {
        return this.currentTrack?.id !== newTrack.id;
    }

    handleTrackChange(playingState) {
        this.maybeScrobbleCurrentTrack();

        this.currentTrack = playingState.track;
        this.currentTrackStartTime = null;
        this.currentTrackPlayedTime = 0;

        if (playingState.isPlaying) {
            this.startTrackPlayback();
        }
    }

    isPlaybackStateChanged(playingState) {
        return this.currentTrack?.id === playingState.track?.id && (playingState.isPlaying ? this.currentTrackStartTime === null : this.currentTrackStartTime !== null);
    }

    handlePlaybackStateChange(playingState) {
        if (playingState.isPlaying) {
            this.startTrackPlayback();
        } else {
            this.pauseTrackPlayback();
            const scrobbled = this.maybeScrobbleCurrentTrack();
            if (scrobbled) {
                this.currentTrackPlayedTime = 0;
            }
        }
    }

    startTrackPlayback() {
        if (!this.currentTrack) return;
        this.currentTrackStartTime = Date.now();
    }

    pauseTrackPlayback() {
        if (!this.currentTrackStartTime) return;
        this.currentTrackPlayedTime += Date.now() - this.currentTrackStartTime;
        this.currentTrackStartTime = null;
    }

    maybeScrobbleCurrentTrack() {
        if (!this.currentTrack) return false;
        const playedTime = this.calculateTotalPlayedTime();
        this.logger.info(`Current track played time: ${playedTime} ms`);
        if (!this.isTrackEligibleForScrobble(this.currentTrack, playedTime)) {
            return false;
        }
        this.logger.info(`Scrobbling track: ${this.currentTrack.title} by ${this.currentTrack.artists[0].name}`);
        void this.sendScrobble(this.currentTrack);
        return true;
    }

    calculateTotalPlayedTime() {
        let total = this.currentTrackPlayedTime;
        if (this.currentTrackStartTime) {
            total += Date.now() - this.currentTrackStartTime;
        }
        return total;
    }

    isTrackEligibleForScrobble(track, playedTimeMs) {
        if (track.durationMs < PulseSyncScrobbler.MIN_TRACK_DURATION_MS) {
            this.logger.info('Track is too short to scrobble');
            return false;
        }
        const SCROBBLE_THRESHOLD_MS = 5000;
        const minPlayTimeMs = Math.min(track.durationMs / 2, PulseSyncScrobbler.MAX_SCROBBLE_TIME_MS);
        if (playedTimeMs < minPlayTimeMs) {
            this.logger.info(`Track played time ${playedTimeMs} ms is less than minimum required ${minPlayTimeMs} ms`);
            return false;
        }

        return playedTimeMs >= SCROBBLE_THRESHOLD_MS;
    }

    async sendScrobble(track) {
        this.logger.info(`Sending scrobble for track: ${track.title} by ${track.artists[0].name}`);
        this.pulseSyncManager.updateTrackInfo(track);
    }
}

PulseSyncScrobbler.MIN_TRACK_DURATION_MS = 30000; // 30 сек.
PulseSyncScrobbler.MAX_SCROBBLE_TIME_MS = 420000; // 7 мин.

exports.PulseSyncScrobbler = PulseSyncScrobbler;
