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

function runProcess(command, args, logger, { cwd, shouldLogOutput = true } = {}) {
    return new Promise((resolve, reject) => {
        const child = spawn(command, args, {
            cwd,
            windowsHide: true,
            stdio: ['ignore', 'pipe', 'pipe'],
        });

        let stdout = '';
        let stderr = '';

        child.stdout.on('data', (chunk) => {
            stdout += chunk.toString();
        });

        child.stderr.on('data', (chunk) => {
            stderr += chunk.toString();
        });

        child.on('error', (error) => {
            reject(error);
        });

        child.on('close', (code) => {
            if (shouldLogOutput && stdout.trim()) logger.info(stdout.trim());
            if (shouldLogOutput && stderr.trim()) logger.warn(stderr.trim());

            if (code === 0) {
                resolve({ stdout, stderr });
                return;
            }

            reject(new Error(`yt-dlp exited with code ${code}`));
        });
    });
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
            files.push({ fullPath, modifiedAt: stats.mtimeMs });
        }

        files.sort((a, b) => a.modifiedAt - b.modifiedAt);
        return files.map((file) => file.fullPath);
    }

    async downloadTracksFromUrl(rawURL) {
        const ytDlpBinaryPath = await this.resolveBinaryPath();
        const ffmpegPath = await this.ffmpegUpdater.ensureInstalled();
        const tempDirPath = await fs.mkdtemp(path.join(electron.app.getPath('temp'), 'pulsesync-yt-dlp-'));
        const parsedURL = new URL(rawURL);
        const referer = `${parsedURL.origin}/`;

        try {
            await runProcess(
                ytDlpBinaryPath,
                [
                    '--ignore-config',
                    '--no-warnings',
                    '--no-progress',
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
                { cwd: tempDirPath },
            );

            const downloadedFilePaths = await this.findDownloadedAudioFiles(tempDirPath);

            if (!downloadedFilePaths.length) {
                throw new Error(`yt-dlp did not produce any ${TARGET_AUDIO_EXTENSION} files`);
            }

            return await Promise.all(
                downloadedFilePaths.map(async (downloadedFilePath) => {
                    const fileExtension = path.extname(downloadedFilePath).slice(1).toLowerCase();
                    const buffer = await fs.readFile(downloadedFilePath);

                    return {
                        buffer,
                        fileName: path.basename(downloadedFilePath),
                        mimeType: getMimeTypeFromExtension(fileExtension),
                    };
                }),
            );
        } finally {
            await fs.rm(tempDirPath, { recursive: true, force: true });
        }
    }

    async downloadTrackFromUrl(rawURL) {
        const downloadedTracks = await this.downloadTracksFromUrl(rawURL);
        const [firstTrack] = downloadedTracks;

        if (!firstTrack) {
            throw new Error(`yt-dlp did not produce any ${TARGET_AUDIO_EXTENSION} files`);
        }

        return firstTrack;
    }
}

exports.YtDlpWrapper = YtDlpWrapper;
