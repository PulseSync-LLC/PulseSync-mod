const Logger_js_1 = require('../../packages/logger/Logger.js');
const fs = require('fs').promises;
const fsSync = require('fs');
const path = require('path');
const { spawn } = require('child_process');
const { artists2string } = require('../utils.js');
const { getFfmpegUpdater } = require('../ffmpegInstaller.js');
const { createLyricsFrames, writeLyricsFrames } = require('./id3Lyrics.js');

function getReleaseYear(track) {
    const album = track?.albums?.[0];
    for (const value of [album?.year, album?.releaseDate, track?.year, track?.releaseDate]) {
        const year = String(value ?? '')
            .trim()
            .match(/^([1-9]\d{3})(?:$|-\d{2}-\d{2}(?:T|$))/)?.[1];
        if (year) return year;
    }
}

function runProcess(command, args, logger, options = {}) {
    return new Promise((resolve, reject) => {
        const { signal } = options;
        if (signal?.aborted) {
            reject(signal.reason ?? new Error('ffmpeg aborted'));
            return;
        }

        const child = spawn(command, args, {
            windowsHide: true,
            stdio: ['ignore', 'pipe', 'pipe'],
        });

        let stdout = '';
        let stderr = '';
        let settled = false;
        const finish = (fn, value) => {
            if (settled) return;
            settled = true;
            signal?.removeEventListener('abort', abortProcess);
            fn(value);
        };

        const abortProcess = () => {
            child.kill('SIGTERM');
            finish(reject, signal.reason ?? new Error('ffmpeg aborted'));
        };

        signal?.addEventListener('abort', abortProcess, { once: true });

        child.stdout.on('data', (d) => (stdout += d.toString()));
        child.stderr.on('data', (d) => (stderr += d.toString()));

        child.on('error', (err) => finish(reject, err));
        child.on('close', (code) => {
            if (stdout) logger.info(stdout);
            if (stderr) logger.warn(stderr);

            if (code === 0) finish(resolve, { stdout, stderr });
            else finish(reject, new Error(`ffmpeg exited with code ${code}`));
        });
    });
}

class FfmpegWrapper {
    constructor() {
        this.logger = new Logger_js_1.Logger('FfmpegWrapper');
        this._updater = getFfmpegUpdater(); // предполагается, что updater singleton
        this.ffmpegPath = this._updater.installPath;
    }

    pushMetadata(args, key, value) {
        if (value === undefined || value === null || value === '') return;
        // spawn receives literal arguments without a shell; escaping would alter the tag value.
        args.push('-metadata', `${key}=${String(value)}`);
    }

    async writeTrackFile(data, finalFilepath, tempDirPath, tempFilepath, fileExtension = undefined, lrc = undefined, options = {}) {
        if (!fsSync.existsSync(tempDirPath) || !fsSync.existsSync(tempFilepath)) {
            throw new Error(`Temporary ffmpeg input is missing: ${tempFilepath}`);
        }

        let withCover = false;
        const coverPath = path.join(tempDirPath, '400x400.jpg');
        if (fsSync.existsSync(coverPath)) withCover = true;

        const args = [];
        const lyricsFrames = fileExtension === 'mp3' && lrc ? createLyricsFrames(lrc) : undefined;

        // Input
        args.push('-i', tempFilepath);

        // Cover
        if (withCover) {
            args.push('-i', coverPath);
        }

        // Maps
        args.push('-map', '0:a');
        if (withCover) {
            args.push('-map', '1:v');
        }

        // Keep the downloaded audio bitstream. For raw MP3 this avoids a useless decode/re-encode pass.
        args.push('-c:a', 'copy');

        if (fileExtension === 'mp3') {
            // Windows Explorer reliably reads cover art from ID3v2.3.
            args.push('-id3v2_version', '3');
            if (lyricsFrames?.length) {
                // Reserve space for USLT/SYLT so adding lyrics does not rewrite the audio.
                args.push('-metadata_header_padding', String(lyricsFrames.length + 10));
                args.push('-metadata', 'lyrics=');
            }
        }

        // Cover embedding
        if (withCover) {
            args.push('-c:v', 'mjpeg', '-metadata:s:v', 'title=Album cover', '-metadata:s:v', 'comment=Cover (front)', '-disposition:v', 'attached_pic');
        }

        this.pushMetadata(args, 'artist', artists2string(data.track?.artists));
        this.pushMetadata(args, 'title', data.track?.title);
        this.pushMetadata(args, 'album', data.track?.albums?.[0]?.title);
        this.pushMetadata(args, 'date', getReleaseYear(data.track));
        this.pushMetadata(args, 'genre', data.track?.albums?.[0]?.genre);
        this.pushMetadata(args, fileExtension === 'mp3' ? 'TSRC' : 'ISRC', data.track?.isrc);

        // Overwrite + output
        args.push('-y', finalFilepath);

        this.logger.info(`Writing track file: ${this.ffmpegPath} ${args.join(' ')}`);

        try {
            await runProcess(this.ffmpegPath, args, this.logger, options);
        } catch (error) {
            this.logger.error(`ffmpeg error: ${error.message}`);
            throw error;
        }

        if (lyricsFrames?.length) {
            await writeLyricsFrames(finalFilepath, lyricsFrames, options);
        }

        if (lrc) {
            // Keep the sidecar available for players that do not read embedded lyrics.
            const ext = path.extname(finalFilepath);
            const lrcPath = `${finalFilepath.slice(0, -ext.length)}.lrc`;
            await fs.writeFile(lrcPath, lrc);
        }
    }

    async extractFromMp4(...args) {
        return this.writeTrackFile(...args);
    }
}

exports.FfmpegWrapper = FfmpegWrapper;
