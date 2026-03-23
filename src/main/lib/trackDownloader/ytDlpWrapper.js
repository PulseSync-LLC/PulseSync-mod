const Logger_js_1 = require('../../packages/logger/Logger.js');
const electron = require('electron');
const fs = require('fs').promises;
const os = require('os');
const path = require('path');
const { spawn } = require('child_process');
const { getFfmpegUpdater } = require('../ffmpegInstaller.js');
const { getYtDlpInstaller } = require('../ytDlpInstaller.js');
const store_js_1 = require('../store.js');
const { throttle } = require('../utils');

const TARGET_AUDIO_EXTENSION = 'mp3';
const TARGET_AUDIO_QUALITY = '320K';
const YT_DLP_COOKIES_BROWSER_SOURCE_STORE_KEY = 'modSettings.downloader.ytDlpCookiesBrowserSource';

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

function getMainEventSenders() {
    return require('../../events');
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

function isYouTubeLikeURL(rawURL) {
    try {
        const hostname = new URL(rawURL).hostname.toLowerCase();
        return (
            hostname === 'youtu.be' ||
            hostname === 'youtube.com' ||
            hostname.endsWith('.youtube.com') ||
            hostname === 'youtube-nocookie.com' ||
            hostname.endsWith('.youtube-nocookie.com')
        );
    } catch {
        return false;
    }
}

async function pathExists(targetPath) {
    if (!targetPath) {
        return false;
    }

    try {
        await fs.access(targetPath);
        return true;
    } catch {
        return false;
    }
}

function pushUniqueValue(values, value) {
    const normalizedValue = typeof value === 'string' ? value.trim() : '';
    if (!normalizedValue || values.includes(normalizedValue)) {
        return;
    }

    values.push(normalizedValue);
}

async function getYandexBrowserCookieSource() {
    let browserDataPath = null;

    switch (process.platform) {
        case 'win32':
            browserDataPath = path.join(process.env.LOCALAPPDATA || path.join(os.homedir(), 'AppData', 'Local'), 'Yandex', 'YandexBrowser', 'User Data');
            break;
        case 'darwin':
            browserDataPath = path.join(os.homedir(), 'Library', 'Application Support', 'Yandex', 'YandexBrowser');
            break;
        case 'linux':
            browserDataPath = path.join(os.homedir(), '.config', 'yandex-browser');
            break;
        default:
            return null;
    }

    return (await pathExists(browserDataPath)) ? `chromium:${browserDataPath}` : null;
}

async function mapBrowserAppNameToCookieSource(browserAppName) {
    const normalizedAppName = String(browserAppName || '')
        .trim()
        .toLowerCase();
    if (!normalizedAppName) {
        return null;
    }

    if (normalizedAppName.includes('brave')) return 'brave';
    if (normalizedAppName.includes('edge')) return 'edge';
    if (normalizedAppName.includes('firefox')) return 'firefox';
    if (normalizedAppName.includes('opera')) return 'opera';
    if (normalizedAppName.includes('vivaldi')) return 'vivaldi';
    if (normalizedAppName.includes('whale')) return 'whale';
    if (normalizedAppName.includes('chromium')) return 'chromium';
    if (normalizedAppName.includes('chrome')) return 'chrome';
    if (normalizedAppName.includes('yandex') || normalizedAppName.includes('яндекс')) return await getYandexBrowserCookieSource();
    if (normalizedAppName.includes('safari')) return 'safari';

    return null;
}

async function getDefaultBrowserCookieSource() {
    try {
        const browserAppName = electron.app.getApplicationNameForProtocol('https://');
        return await mapBrowserAppNameToCookieSource(browserAppName);
    } catch {
        return null;
    }
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
    const SINGLE_TRACK_DOWNLOAD_PROGRESS_SHARE = 0.9;
    const state = {
        totalItems: 1,
        currentItem: 1,
        currentItemProgress: 0,
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

    const getItemStatusLabel = (postfix, itemProgress) => {
        const progressSuffix = Number.isFinite(itemProgress) && itemProgress >= 0 ? ` ${Math.min(100, Math.max(0, Math.floor(itemProgress * 100)))}%` : '';

        if (state.totalItems > 1) {
            return postfix
                ? `${Math.min(state.currentItem, state.totalItems)} / ${state.totalItems} ${postfix}${progressSuffix}`
                : `${Math.min(state.currentItem, state.totalItems)} / ${state.totalItems}${progressSuffix}`;
        }

        return postfix ? `${postfix}${progressSuffix}` : 'Подготовка...';
    };

    const getSingleTrackOverallDownloadProgress = (itemProgress) => {
        const normalizedItemProgress = Math.min(Math.max(itemProgress, 0), 1);
        return normalizedItemProgress * SINGLE_TRACK_DOWNLOAD_PROGRESS_SHARE;
    };

    const getSingleTrackOverallProcessingProgress = (line) => {
        if (/^\[ExtractAudio\]/i.test(line)) {
            return 0.92;
        }

        if (/^\[(Metadata|ThumbnailsConvertor|VideoConvertor)\]/i.test(line) || /Adding metadata/i.test(line)) {
            return 0.96;
        }

        if (/^\[(EmbedThumbnail|Merger)\]/i.test(line) || /Embedding/i.test(line)) {
            return 0.99;
        }

        return 0.95;
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
        const line = String(rawLine || '')
            .replace(/\x1b\[[0-9;]*m/g, '')
            .trim();
        if (!line) {
            return;
        }

        rememberError(line);

        let match = line.match(/Downloading item (\d+) of (\d+)/i);
        if (match) {
            state.currentItem = Math.max(parseInt(match[1], 10) || 1, 1);
            state.totalItems = Math.max(parseInt(match[2], 10) || 1, 1);
            state.currentItemProgress = 0;
            emitProgress((state.currentItem - 1) / state.totalItems, getItemStatusLabel('Загрузка', state.currentItemProgress));
            return;
        }

        match = line.match(/playlist.+?Downloading (\d+) items?/i);
        if (match) {
            state.totalItems = Math.max(parseInt(match[1], 10) || 1, 1);
            emitProgress(state.lastProgress, getItemStatusLabel('Загрузка', state.currentItemProgress));
            return;
        }

        match = line.match(/\[download\]\s+(\d{1,3}(?:\.\d+)?)%/i);
        if (match) {
            const itemProgress = Math.min(parseFloat(match[1]) || 0, 99.5) / 100;
            state.currentItemProgress = itemProgress;
            const overallProgress =
                state.totalItems > 1 ? (state.currentItem - 1 + itemProgress) / state.totalItems : getSingleTrackOverallDownloadProgress(itemProgress);
            emitProgress(overallProgress, getItemStatusLabel('Загрузка', itemProgress));
            return;
        }

        if (
            /^\[(ExtractAudio|Metadata|EmbedThumbnail|ThumbnailsConvertor|VideoConvertor|Merger)\]/i.test(line) ||
            /Adding metadata/i.test(line) ||
            /Embedding/i.test(line)
        ) {
            const baseProgress = state.totalItems > 1 ? (state.currentItem - 1 + 0.995) / state.totalItems : getSingleTrackOverallProcessingProgress(line);
            state.currentItemProgress = 1;
            emitProgress(baseProgress, getItemStatusLabel('Обработка', 1));
        }
    };

    return {
        handleLine,
        reset() {
            state.totalItems = 1;
            state.currentItem = 1;
            state.currentItemProgress = 0;
            state.lastProgress = 0;
            state.errors = [];
            state.seenErrors = new Set();
        },
        getSnapshot() {
            return {
                totalItems: state.totalItems,
                currentItem: state.currentItem,
                currentItemProgress: state.currentItemProgress,
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
        this.preferredYouTubeCookieSource = undefined;
    }

    async resolveBinaryPath() {
        if (!this.binaryPathPromise) {
            this.binaryPathPromise = this.findBinaryPath().catch((error) => {
                this.binaryPathPromise = null;
                throw error;
            });
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
        const { sendBasicToastCreate, sendProgressBarChange, sendBasicToastDismiss } = getMainEventSenders();
        sendBasicToastCreate(this.window, 'yt-dlp', 'Обновление компонента: yt-dlp', false);

        const callback = (progressRenderer, progressWindow) => {
            sendProgressBarChange(this.window, 'yt-dlp', progressRenderer * 100);
            this.window.setProgressBar(progressWindow);
        };

        try {
            const res = await this.ytDlpInstaller.ensureInstalled(throttle(callback, 200));
            sendBasicToastDismiss(this.window, 'yt-dlp');
            await runProcess(res, ['--version'], this.logger, { shouldLogOutput: false });
            this.logger.log(`Downloaded yt-dlp binary: ${res}`);
            return res;
        } catch (err) {
            sendProgressBarChange(this.window, 'yt-dlp', -1);
            this.logger.error(`Failed to install yt-dlp: ${err}`);
            setTimeout(() => {
                sendBasicToastDismiss(this.window, 'yt-dlp');
            }, 2500);
            throw err;
        }
    }

    getPreferredYouTubeCookieSource() {
        if (typeof this.preferredYouTubeCookieSource !== 'undefined') {
            return this.preferredYouTubeCookieSource;
        }

        const persistedCookieSource = (0, store_js_1.get)(YT_DLP_COOKIES_BROWSER_SOURCE_STORE_KEY);
        this.preferredYouTubeCookieSource = typeof persistedCookieSource === 'string' && persistedCookieSource.trim() ? persistedCookieSource.trim() : null;
        return this.preferredYouTubeCookieSource;
    }

    setPreferredYouTubeCookieSource(cookieSource) {
        const normalizedCookieSource = typeof cookieSource === 'string' ? cookieSource.trim() : '';
        this.preferredYouTubeCookieSource = normalizedCookieSource || null;
        (0, store_js_1.set)(YT_DLP_COOKIES_BROWSER_SOURCE_STORE_KEY, this.preferredYouTubeCookieSource);
    }

    async getYouTubeCookieBrowserSources() {
        const defaultCookieSource = await getDefaultBrowserCookieSource();
        const otherCookieSources = [];

        pushUniqueValue(otherCookieSources, process.env.YT_DLP_COOKIES_FROM_BROWSER);
        pushUniqueValue(otherCookieSources, this.getPreferredYouTubeCookieSource());
        pushUniqueValue(otherCookieSources, await getYandexBrowserCookieSource());

        ['chrome', 'edge', 'brave', 'vivaldi', 'opera', 'firefox', 'chromium'].forEach((browserName) => {
            pushUniqueValue(otherCookieSources, browserName);
        });

        return {
            defaultCookieSource,
            otherCookieSources: otherCookieSources.filter((cookieSource) => cookieSource !== defaultCookieSource),
        };
    }

    async runYtDlpProcess(rawURL, args, { onAttemptStart, onAttemptFailure, onAttemptSuccess, ...runOptions } = {}) {
        const ytDlpBinaryPath = await this.resolveBinaryPath();
        const shouldUseBrowserCookies = isYouTubeLikeURL(rawURL);
        const attempts = [{ label: 'no browser cookies', args, cookieSource: null }];

        if (shouldUseBrowserCookies) {
            const { defaultCookieSource, otherCookieSources } = await this.getYouTubeCookieBrowserSources();

            if (defaultCookieSource) {
                attempts.push({
                    label: `default browser cookies: ${defaultCookieSource}`,
                    args: ['--cookies-from-browser', defaultCookieSource, ...args],
                    cookieSource: defaultCookieSource,
                });
            }

            otherCookieSources.forEach((cookieSource) => {
                attempts.push({
                    label: `browser cookies: ${cookieSource}`,
                    args: ['--cookies-from-browser', cookieSource, ...args],
                    cookieSource,
                });
            });
        }

        let lastError = null;

        for (let attemptIndex = 0; attemptIndex < attempts.length; attemptIndex++) {
            const attempt = attempts[attemptIndex];

            if (typeof onAttemptStart === 'function') {
                await onAttemptStart({ ...attempt, attemptIndex, attemptsCount: attempts.length });
            }

            try {
                shouldUseBrowserCookies && this.logger.log(`Running yt-dlp with ${attempt.label}`);
                const result = await runProcess(ytDlpBinaryPath, attempt.args, this.logger, runOptions);

                if (attempt.cookieSource) {
                    this.setPreferredYouTubeCookieSource(attempt.cookieSource);
                }

                if (typeof onAttemptSuccess === 'function') {
                    await onAttemptSuccess({ ...attempt, attemptIndex, attemptsCount: attempts.length }, result);
                }

                return result;
            } catch (error) {
                lastError = error;
                const isLastAttempt = attemptIndex === attempts.length - 1;

                if (attempt.cookieSource && attempt.cookieSource === this.getPreferredYouTubeCookieSource()) {
                    this.setPreferredYouTubeCookieSource(null);
                }

                if (!shouldUseBrowserCookies || isLastAttempt) {
                    throw error;
                }

                let shouldContinue = true;
                if (typeof onAttemptFailure === 'function') {
                    shouldContinue = (await onAttemptFailure({ ...attempt, attemptIndex, attemptsCount: attempts.length }, error)) !== false;
                }

                this.logger.warn(`yt-dlp attempt failed with ${attempt.label}: ${error?.message || error}`);

                if (!shouldContinue) {
                    throw error;
                }
            }
        }

        throw lastError;
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

    async clearDirectoryContents(directoryPath) {
        const entries = await fs.readdir(directoryPath, { withFileTypes: true }).catch(() => []);

        await Promise.all(
            entries.map((entry) => {
                return fs.rm(path.join(directoryPath, entry.name), { recursive: true, force: true });
            }),
        );
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

    async emitReadyDownloadedTracks(tempDirPath, processedFilePaths, pendingFileStates, importState, { force = false, onTrackReady, collectTracks = true } = {}) {
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
        const { stdout } = await this.runYtDlpProcess(rawURL, ['--ignore-config', '--no-warnings', '--skip-download', '--flat-playlist', '--dump-single-json', rawURL], {
            shouldLogOutput: false,
        });
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
                await this.runYtDlpProcess(
                    rawURL,
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
                    {
                        cwd: tempDirPath,
                        shouldLogOutput: false,
                        onStdoutLine: progressTracker.handleLine,
                        onStderrLine: progressTracker.handleLine,
                        onAttemptStart: async ({ attemptIndex }) => {
                            if (attemptIndex <= 0) {
                                return;
                            }

                            progressTracker.reset();
                            processedFilePaths.clear();
                            pendingFileStates.clear();
                            await this.clearDirectoryContents(tempDirPath);

                            if (typeof progressCallback === 'function') {
                                progressCallback(0, 0, 'Подготовка...');
                            }
                        },
                        onAttemptFailure: async () => {
                            return importState.importedCount <= 0;
                        },
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
