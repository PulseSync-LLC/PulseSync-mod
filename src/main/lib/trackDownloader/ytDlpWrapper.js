const Logger_js_1 = require('../../packages/logger/Logger.js');
const electron = require('electron');
const fs = require('fs').promises;
const path = require('path');
const { spawn } = require('child_process');
const { getFfmpegUpdater } = require('../ffmpegInstaller.js');
const { getYtDlpInstaller } = require('../ytDlpInstaller.js');

const TARGET_AUDIO_EXTENSION = 'mp3';
const TARGET_AUDIO_QUALITY = '320K';

function getMimeTypeFromExtension(fileExtension = '') {
    switch (String(fileExtension).toLowerCase()) {
        case 'mp3':
            return 'audio/mpeg';
        case 'm4a':
        case 'aac':
            return 'audio/mp4';
        case 'flac':
            return 'audio/flac';
        case 'wav':
            return 'audio/wav';
        case 'ogg':
        case 'opus':
            return 'audio/ogg';
        default:
            return 'application/octet-stream';
    }
}

function getAppBaseDir() {
    const appPath = electron.app.getAppPath();
    return appPath.includes('app.asar') ? path.dirname(appPath) : appPath;
}

function buildBinaryCandidates() {
    const binaryName = process.platform === 'win32' ? 'yt-dlp.exe' : 'yt-dlp';
    const appBaseDir = getAppBaseDir();
    const exeDir = path.dirname(electron.app.getPath('exe'));
    return [process.env.YT_DLP_PATH, path.join(appBaseDir, binaryName), path.join(exeDir, binaryName), binaryName].filter(Boolean);
}

function emitProcessLines(buffer, chunk, onLine) {
    if (typeof onLine !== 'function') {
        return '';
    }

    const nextBuffer = buffer + chunk.toString();
    const parts = nextBuffer.split(/\r\n|[\r\n]/);
    const rest = parts.pop() ?? '';

    for (const part of parts) {
        const line = part.trim();
        if (line) {
            onLine(line);
        }
    }

    return rest;
}

function flushProcessLines(buffer, onLine) {
    if (typeof onLine !== 'function') {
        return;
    }

    const line = String(buffer || '').trim();
    if (line) {
        onLine(line);
    }
}

function getYtDlpFailureMessage(stdout, stderr, code) {
    const stderrLines = String(stderr || '')
        .split(/\r\n|[\r\n]/)
        .map((line) => line.trim())
        .filter(Boolean);
    const stdoutLines = String(stdout || '')
        .split(/\r\n|[\r\n]/)
        .map((line) => line.trim())
        .filter(Boolean);
    const detailedMessage = stderrLines.at(-1) || stdoutLines.at(-1);

    return detailedMessage || `yt-dlp exited with code ${code}`;
}

function parseYtDlpJson(stdout) {
    const trimmedOutput = String(stdout || '').trim();
    if (!trimmedOutput) {
        throw new Error('yt-dlp returned empty metadata');
    }

    try {
        return JSON.parse(trimmedOutput);
    } catch (error) {
        const jsonLine = trimmedOutput
            .split(/\r\n|[\r\n]/)
            .map((line) => line.trim())
            .reverse()
            .find((line) => line.startsWith('{') || line.startsWith('['));

        if (!jsonLine) {
            throw error;
        }

        return JSON.parse(jsonLine);
    }
}

function getPrefetchedTrackCount(prefetchedInfo) {
    const playlistCount = Number(prefetchedInfo?.playlist_count);
    if (Number.isFinite(playlistCount) && playlistCount > 0) {
        return playlistCount;
    }

    if (Array.isArray(prefetchedInfo?.entries)) {
        const entriesCount = prefetchedInfo.entries.filter(Boolean).length;
        if (entriesCount > 0) {
            return entriesCount;
        }
    }

    if (prefetchedInfo && typeof prefetchedInfo === 'object') {
        return 1;
    }

    return 0;
}

function pickFirstNonEmpty(...values) {
    for (const value of values) {
        const normalizedValue = typeof value === 'string' ? value.trim() : '';
        if (normalizedValue) {
            return normalizedValue;
        }
    }

    return null;
}

function getPrefetchedArtist(prefetchedInfo) {
    return pickFirstNonEmpty(
        prefetchedInfo?.artist,
        prefetchedInfo?.album_artist,
        prefetchedInfo?.creator,
        prefetchedInfo?.playlist_uploader,
        prefetchedInfo?.uploader,
        prefetchedInfo?.channel,
    );
}

function getPrefetchedTitle(prefetchedInfo) {
    return pickFirstNonEmpty(prefetchedInfo?.track, prefetchedInfo?.title, prefetchedInfo?.playlist_title);
}

function runProcess(command, args, logger, { cwd, shouldLogOutput = true, onStdoutLine, onStderrLine } = {}) {
    return new Promise((resolve, reject) => {
        const child = spawn(command, args, {
            cwd,
            windowsHide: true,
            stdio: ['ignore', 'pipe', 'pipe'],
        });

        let stdout = '';
        let stderr = '';
        let stdoutBuffer = '';
        let stderrBuffer = '';

        child.stdout.on('data', (chunk) => {
            stdout += chunk.toString();
            stdoutBuffer = emitProcessLines(stdoutBuffer, chunk, onStdoutLine);
        });

        child.stderr.on('data', (chunk) => {
            stderr += chunk.toString();
            stderrBuffer = emitProcessLines(stderrBuffer, chunk, onStderrLine);
        });

        child.on('error', (error) => {
            reject(error);
        });

        child.on('close', (code) => {
            flushProcessLines(stdoutBuffer, onStdoutLine);
            flushProcessLines(stderrBuffer, onStderrLine);

            if (shouldLogOutput && stdout.trim()) logger.info(stdout.trim());
            if (shouldLogOutput && stderr.trim()) logger.warn(stderr.trim());

            if (code === 0) {
                resolve({ stdout, stderr });
                return;
            }

            const error = new Error(getYtDlpFailureMessage(stdout, stderr, code));
            error.code = code;
            error.stdout = stdout;
            error.stderr = stderr;
            reject(error);
        });
    });
}

function createYtDlpProgressTracker(progressCallback) {
    const state = {
        totalItems: 1,
        currentItem: 1,
        lastProgress: 0,
        errors: [],
        seenErrors: new Set(),
    };

    const emitProgress = (progress, statusLabel) => {
        if (typeof progressCallback !== 'function') {
            return;
        }

        const normalizedProgress = Math.min(Math.max(progress, 0), 1);
        state.lastProgress = Math.max(state.lastProgress, normalizedProgress);
        progressCallback(state.lastProgress, state.lastProgress, statusLabel);
    };

    const getItemStatusLabel = (postfix) => {
        if (state.totalItems > 1) {
            return postfix
                ? `${Math.min(state.currentItem, state.totalItems)} / ${state.totalItems} ${postfix}`
                : `${Math.min(state.currentItem, state.totalItems)} / ${state.totalItems}`;
        }

        return postfix || 'Подготовка...';
    };

    const rememberError = (line) => {
        const match = line.match(/^ERROR:\s*(.+)$/i);
        if (!match) {
            return;
        }

        const errorMessage = match[1].trim();
        if (!errorMessage || state.seenErrors.has(errorMessage)) {
            return;
        }

        state.seenErrors.add(errorMessage);
        state.errors.push(errorMessage);
    };

    const handleLine = (rawLine) => {
        const line = String(rawLine || '').replace(/\x1b\[[0-9;]*m/g, '').trim();
        if (!line) {
            return;
        }

        rememberError(line);

        let match = line.match(/Downloading item (\d+) of (\d+)/i);
        if (match) {
            state.currentItem = Math.max(parseInt(match[1], 10) || 1, 1);
            state.totalItems = Math.max(parseInt(match[2], 10) || 1, 1);
            emitProgress((state.currentItem - 1) / state.totalItems, getItemStatusLabel('Загрузка'));
            return;
        }

        match = line.match(/playlist.+?Downloading (\d+) items?/i);
        if (match) {
            state.totalItems = Math.max(parseInt(match[1], 10) || 1, 1);
            emitProgress(state.lastProgress, getItemStatusLabel('Загрузка'));
            return;
        }

        match = line.match(/\[download\]\s+(\d{1,3}(?:\.\d+)?)%/i);
        if (match) {
            const itemProgress = Math.min(parseFloat(match[1]) || 0, 99.5) / 100;
            const overallProgress =
                state.totalItems > 1 ? ((state.currentItem - 1) + itemProgress) / state.totalItems : itemProgress;
            emitProgress(overallProgress, getItemStatusLabel('Загрузка'));
            return;
        }

        if (
            /^\[(ExtractAudio|Metadata|EmbedThumbnail|ThumbnailsConvertor|VideoConvertor|Merger)\]/i.test(line) ||
            /Adding metadata/i.test(line) ||
            /Embedding/i.test(line)
        ) {
            const baseProgress = state.totalItems > 1 ? (state.currentItem - 1 + 0.995) / state.totalItems : 0.995;
            emitProgress(baseProgress, getItemStatusLabel('Обработка'));
        }
    };

    return {
        handleLine,
        getSnapshot() {
            return {
                totalItems: state.totalItems,
                currentItem: state.currentItem,
                lastProgress: state.lastProgress,
                errors: [...state.errors],
            };
        },
    };
}

class YtDlpWrapper {
    constructor(window) {
        this.window = window;
        this.logger = new Logger_js_1.Logger('YtDlpWrapper');
        this.ffmpegUpdater = getFfmpegUpdater();
        this.ytDlpInstaller = getYtDlpInstaller();
        this.binaryPathPromise = null;
    }

    async resolveBinaryPath() {
        if (!this.binaryPathPromise) {
            this.binaryPathPromise = this.findBinaryPath();
        }
        return this.binaryPathPromise;
    }

    async findBinaryPath() {
        const candidates = [...new Set(buildBinaryCandidates())];

        for (const candidate of candidates) {
            try {
                await runProcess(candidate, ['--version'], this.logger, { shouldLogOutput: false });
                this.logger.log(`Using yt-dlp binary: ${candidate}`);
                return candidate;
            } catch (error) {}
        }

        const installedBinaryPath = await this.ytDlpInstaller.ensureInstalled();
        await runProcess(installedBinaryPath, ['--version'], this.logger, { shouldLogOutput: false });
        this.logger.log(`Downloaded yt-dlp binary: ${installedBinaryPath}`);
        return installedBinaryPath;
    }

    async findDownloadedAudioFiles(tempDirPath) {
        const entries = await fs.readdir(tempDirPath, { withFileTypes: true });
        const files = [];

        for (const entry of entries) {
            if (!entry.isFile()) continue;
            const fullPath = path.join(tempDirPath, entry.name);
            const extension = path.extname(entry.name).slice(1).toLowerCase();
            if (extension !== TARGET_AUDIO_EXTENSION) continue;

            const stats = await fs.stat(fullPath);
            files.push({ fullPath, modifiedAt: stats.mtimeMs, size: stats.size });
        }

        files.sort((a, b) => a.modifiedAt - b.modifiedAt);
        return files;
    }

    async readImportedTrack(downloadedFilePath) {
        const fileExtension = path.extname(downloadedFilePath).slice(1).toLowerCase();
        const buffer = await fs.readFile(downloadedFilePath);

        return {
            buffer,
            fileName: path.basename(downloadedFilePath),
            mimeType: getMimeTypeFromExtension(fileExtension),
        };
    }

    async emitReadyDownloadedTracks(
        tempDirPath,
        processedFilePaths,
        pendingFileStates,
        importState,
        { force = false, onTrackReady, collectTracks = true } = {},
    ) {
        const fileEntries = await this.findDownloadedAudioFiles(tempDirPath);
        const existingFilePaths = new Set(fileEntries.map((fileEntry) => fileEntry.fullPath));

        for (const filePath of pendingFileStates.keys()) {
            if (!existingFilePaths.has(filePath) || processedFilePaths.has(filePath)) {
                pendingFileStates.delete(filePath);
            }
        }

        for (const fileEntry of fileEntries) {
            if (processedFilePaths.has(fileEntry.fullPath)) {
                continue;
            }

            const fileStateSignature = `${fileEntry.size}:${fileEntry.modifiedAt}`;
            if (!force) {
                const previousSignature = pendingFileStates.get(fileEntry.fullPath);
                pendingFileStates.set(fileEntry.fullPath, fileStateSignature);
                if (previousSignature !== fileStateSignature) {
                    continue;
                }
            }

            pendingFileStates.delete(fileEntry.fullPath);
            const importedTrack = await this.readImportedTrack(fileEntry.fullPath);
            processedFilePaths.add(fileEntry.fullPath);
            importState.importedCount += 1;

            if (collectTracks) {
                importState.tracks.push(importedTrack);
            }

            if (typeof onTrackReady === 'function') {
                await onTrackReady(importedTrack, {
                    importedCount: importState.importedCount,
                });
            }
        }
    }

    async prefetchTracksFromUrl(rawURL) {
        const ytDlpBinaryPath = await this.resolveBinaryPath();
        const { stdout } = await runProcess(
            ytDlpBinaryPath,
            ['--ignore-config', '--no-warnings', '--skip-download', '--flat-playlist', '--dump-single-json', rawURL],
            this.logger,
            { shouldLogOutput: false },
        );
        const prefetchedInfo = parseYtDlpJson(stdout);
        const trackCount = getPrefetchedTrackCount(prefetchedInfo);

        if (!trackCount) {
            throw new Error('No downloadable tracks were found for this link');
        }

        return {
            trackCount,
            title: getPrefetchedTitle(prefetchedInfo),
            artist: getPrefetchedArtist(prefetchedInfo),
            isPlaylist: trackCount > 1 || prefetchedInfo?._type === 'playlist',
        };
    }

    async downloadTracksFromUrl(rawURL, progressCallback, { onTrackReady, collectTracks = true } = {}) {
        const ytDlpBinaryPath = await this.resolveBinaryPath();
        const ffmpegPath = await this.ffmpegUpdater.ensureInstalled();
        const tempDirPath = await fs.mkdtemp(path.join(electron.app.getPath('temp'), 'pulsesync-yt-dlp-'));
        const parsedURL = new URL(rawURL);
        const referer = `${parsedURL.origin}/`;
        const progressTracker = createYtDlpProgressTracker(progressCallback);
        const processedFilePaths = new Set();
        const pendingFileStates = new Map();
        const importState = {
            importedCount: 0,
            tracks: [],
        };
        let scanQueue = Promise.resolve();
        let scanInterval = null;

        const scanReadyDownloadedTracks = (force = false) => {
            const nextScan = scanQueue.then(
                () =>
                    this.emitReadyDownloadedTracks(tempDirPath, processedFilePaths, pendingFileStates, importState, {
                        force,
                        onTrackReady,
                        collectTracks,
                    }),
                () =>
                    this.emitReadyDownloadedTracks(tempDirPath, processedFilePaths, pendingFileStates, importState, {
                        force,
                        onTrackReady,
                        collectTracks,
                    }),
            );
            scanQueue = nextScan.catch((error) => {
                this.logger.warn(`Failed to process imported track from ${tempDirPath}: ${error}`);
            });
            return nextScan;
        };

        if (typeof progressCallback === 'function') {
            progressCallback(0, 0, 'Подготовка...');
        }

        try {
            let processError = null;
            scanInterval = setInterval(() => {
                scanReadyDownloadedTracks().catch((error) => {
                    this.logger.warn(`Failed background scan for imported tracks: ${error}`);
                });
            }, 350);

            try {
                await runProcess(
                    ytDlpBinaryPath,
                    [
                        '--ignore-config',
                        '--no-warnings',
                        '--ignore-errors',
                        '--newline',
                        '--restrict-filenames',
                        '--format',
                        'bestaudio/best',
                        '--extract-audio',
                        '--audio-format',
                        TARGET_AUDIO_EXTENSION,
                        '--audio-quality',
                        TARGET_AUDIO_QUALITY,
                        '--embed-metadata',
                        '--embed-thumbnail',
                        '--convert-thumbnails',
                        'jpg',
                        '--ffmpeg-location',
                        ffmpegPath,
                        '--referer',
                        referer,
                        '--user-agent',
                        this.window.webContents.getUserAgent(),
                        '--no-write-info-json',
                        '--no-write-playlist-metafiles',
                        '-o',
                        path.join(tempDirPath, '%(title).180B [%(id)s].%(ext)s'),
                        rawURL,
                    ],
                    this.logger,
                    {
                        cwd: tempDirPath,
                        shouldLogOutput: false,
                        onStdoutLine: progressTracker.handleLine,
                        onStderrLine: progressTracker.handleLine,
                    },
                );
            } catch (error) {
                processError = error;
            } finally {
                if (scanInterval) {
                    clearInterval(scanInterval);
                    scanInterval = null;
                }
                await scanReadyDownloadedTracks(true);
            }

            const progressState = progressTracker.getSnapshot();
            const errors = [...progressState.errors];

            if (processError && importState.importedCount > 0 && !errors.length) {
                errors.push(processError.message);
            }

            if (!importState.importedCount) {
                throw processError ?? new Error(`yt-dlp did not produce any ${TARGET_AUDIO_EXTENSION} files`);
            }

            const totalCount = Math.max(progressState.totalItems || 1, importState.importedCount + errors.length);
            const failedCount = Math.max(errors.length, totalCount - importState.importedCount);

            if (typeof progressCallback === 'function') {
                const completedLabel = totalCount > 1 ? `${importState.importedCount} / ${totalCount}` : 'Готово';
                progressCallback(1, 1, completedLabel);
            }

            return {
                tracks: importState.tracks,
                importedCount: importState.importedCount,
                totalCount,
                failedCount,
                errors,
            };
        } finally {
            if (scanInterval) {
                clearInterval(scanInterval);
            }
            await fs.rm(tempDirPath, { recursive: true, force: true });
        }
    }

    async downloadTrackFromUrl(rawURL, progressCallback) {
        const downloadedTracks = await this.downloadTracksFromUrl(rawURL, progressCallback);
        const [firstTrack] = downloadedTracks.tracks;

        if (!firstTrack) {
            throw new Error(`yt-dlp did not produce any ${TARGET_AUDIO_EXTENSION} files`);
        }

        return firstTrack;
    }
}

exports.YtDlpWrapper = YtDlpWrapper;
