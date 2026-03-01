'use strict';

const fs = require('original-fs');
const fsPromise = fs.promises;
const path = require('path');
const https = require('https');
const axios = require('axios');
const electron = require('electron');
const crypto = require('crypto');
const { pipeline } = require('stream/promises');
const Logger_js_1 = require('../packages/logger/Logger.js');

function getBaseDirNearAsar() {
    const appPath = electron.app.getAppPath();
    return appPath.includes('app.asar') ? path.dirname(appPath) : appPath;
}

function mapAssetName() {
    if (process.platform === 'win32') {
        if (process.arch === 'arm64') return 'yt-dlp_arm64.exe';
        if (process.arch === 'x64') return 'yt-dlp.exe';
    }

    if (process.platform === 'darwin') {
        if (['x64', 'arm64'].includes(process.arch)) return 'yt-dlp_macos';
    }

    if (process.platform === 'linux') {
        if (process.arch === 'arm64') return 'yt-dlp_linux_aarch64';
        if (process.arch === 'x64') return 'yt-dlp_linux';
    }

    throw new Error(`Unsupported yt-dlp platform/arch: ${process.platform}/${process.arch}`);
}

function getInstallBinaryName(assetName) {
    if (process.platform === 'win32') return 'yt-dlp.exe';
    return assetName.endsWith('.exe') ? assetName.slice(0, -4) : 'yt-dlp';
}

async function sha256File(filePath) {
    const hash = crypto.createHash('sha256');
    await pipeline(fs.createReadStream(filePath), hash);
    return hash.digest('hex');
}

class YtDlpInstaller {
    constructor({ repo = 'yt-dlp/yt-dlp', channel = 'latest' } = {}) {
        this.logger = new Logger_js_1.Logger('YtDlpInstaller');
        this.repo = repo;
        this.channel = channel;
        this.assetName = mapAssetName();

        if (process.platform === 'linux') {
            this.baseDir = path.join(electron.app.getPath('userData'), 'yt-dlp');
            this.tempDir = path.join(this.baseDir, 'temp');
        } else {
            this.baseDir = getBaseDirNearAsar();
            this.tempDir = path.join(this.baseDir, '..', 'temp');
        }

        this.archivePath = path.join(this.tempDir, this.assetName);
        this.installPath = path.join(this.baseDir, getInstallBinaryName(this.assetName));

        this.logger.log('Initialized');
        this.logger.log('Install path:', this.installPath);
        this.logger.log('Asset name:', this.assetName);
    }

    getAssetUrl() {
        return `https://github.com/${this.repo}/releases/${this.channel}/download/${this.assetName}`;
    }

    getShaUrl() {
        return `https://github.com/${this.repo}/releases/${this.channel}/download/SHA2-256SUMS`;
    }

    async fileExists(filePath) {
        try {
            await fsPromise.access(filePath, fs.constants.F_OK);
            return true;
        } catch {
            return false;
        }
    }

    async deleteFileIfExists(filePath) {
        try {
            if (await this.fileExists(filePath)) {
                await fsPromise.unlink(filePath);
            }
        } catch (error) {
            this.logger.warn('Failed to delete file:', filePath, error?.message || error);
        }
    }

    async fetchExpectedHash() {
        const agent = new https.Agent({ keepAlive: true });

        try {
            const response = await axios.get(this.getShaUrl(), {
                httpsAgent: agent,
                responseType: 'text',
                headers: { 'User-Agent': 'PulseSync-yt-dlp-installer' },
                validateStatus: (status) => status === 200 || status === 404,
            });

            if (response.status === 404) {
                this.logger.warn('SHA2-256SUMS not found');
                return null;
            }

            const escapedAssetName = this.assetName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            const match = String(response.data).match(new RegExp(`([a-fA-F0-9]{64})\\s+\\*?${escapedAssetName}`));

            return match?.[1]?.toLowerCase() ?? null;
        } catch (error) {
            this.logger.warn('Failed to fetch yt-dlp checksums:', error?.message || error);
            return null;
        }
    }

    async isInstalled() {
        if (!(await this.fileExists(this.installPath))) {
            return false;
        }

        const expectedHash = await this.fetchExpectedHash();
        if (!expectedHash) {
            return true;
        }

        const actualHash = await sha256File(this.installPath);
        return actualHash.toLowerCase() === expectedHash;
    }

    async download(callback) {
        await fsPromise.mkdir(path.dirname(this.archivePath), { recursive: true });
        await this.deleteFileIfExists(this.archivePath);

        const agent = new https.Agent({ keepAlive: true });
        const response = await axios.get(this.getAssetUrl(), {
            responseType: 'stream',
            httpsAgent: agent,
            headers: { 'User-Agent': 'PulseSync-yt-dlp-installer' },
            maxRedirects: 10,
            validateStatus: (status) => status >= 200 && status < 400,
        });

        const totalLength = parseInt(response.headers['content-length'] || '0', 10);
        let downloaded = 0;

        response.data.on('data', (chunk) => {
            downloaded += chunk.length;
            if (typeof callback === 'function' && totalLength > 0) {
                const progress = downloaded / totalLength;
                callback(progress, progress);
            }
        });

        try {
            await pipeline(response.data, fs.createWriteStream(this.archivePath));
        } catch (error) {
            await this.deleteFileIfExists(this.archivePath);
            throw error;
        }
    }

    async install() {
        await fsPromise.mkdir(path.dirname(this.installPath), { recursive: true });
        await fsPromise.copyFile(this.archivePath, this.installPath);

        if (process.platform !== 'win32') {
            await fsPromise.chmod(this.installPath, 0o755);
        }
    }

    async ensureInstalled(callback, { force = false } = {}) {
        if (!force && (await this.isInstalled())) {
            return this.installPath;
        }

        try {
            await this.download(callback);
            await this.install();

            const expectedHash = await this.fetchExpectedHash();
            if (expectedHash) {
                const actualHash = await sha256File(this.installPath);
                if (actualHash.toLowerCase() !== expectedHash) {
                    await this.deleteFileIfExists(this.installPath);
                    throw new Error('yt-dlp checksum mismatch');
                }
            }

            return this.installPath;
        } finally {
            await this.deleteFileIfExists(this.archivePath);
        }
    }
}

exports.YtDlpInstaller = YtDlpInstaller;

exports.getYtDlpInstaller = (() => {
    let instance;
    return (opts) => {
        if (!instance) {
            instance = new YtDlpInstaller(opts);
        }
        return instance;
    };
})();
