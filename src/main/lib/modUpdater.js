const zlib = require('node:zlib');
const exec = require('child_process').exec;
const promisify = require('util').promisify;
const fsPromise = require('fs').promises;
const fs = require('original-fs');
const path = require('path');
const semver = require('semver');
const Logger_js_1 = require('../packages/logger/Logger.js');
const config_js_1 = require('../config.js');
const https = require('https');
const axios = require('axios');
const electron = require('electron');
const { spawn } = require('child_process');
const spawnAsync = promisify(spawn);

const execPromise = promisify(exec);
const zstdDecompressPromise = zlib.zstdDecompress ? promisify(zlib.zstdDecompress) : undefined;

exports.getModUpdater = exports.ModUpdater = void 0;

const UPDATE_CHECK_URL = `https://ru-node-1.pulsesync.dev/api/v1/mod/latest`;
const APP_ASAR_PATH = electron.app.getAppPath();
const APP_ASAR_TMP_DOWNLOAD_PATH = path.join(electron.app.getAppPath(), '../../', 'temp\\app.asar');
const APP_ASAR_TMP_ZSTD_DOWNLOAD_PATH = path.join(electron.app.getAppPath(), '../../', 'temp\\app.asar.zst');
const TMP_PATH = path.join(electron.app.getAppPath(), '../../', '\\temp');
const currentVersion = config_js_1.config.modification.version;

class ModUpdater {
    updaterId = null;
    onModUpdateListeners = [];
    logger;
    latestUrl = undefined;
    compressionType = null; // null | 'zstd'
    latestVersion = currentVersion;
    latestCommit;
    branch;

    constructor() {
        this.logger = new Logger_js_1.Logger('ModUpdaterLogger');
        this.branch = config_js_1.config.modification.branch || '';
        this.latestCommit = config_js_1.config.modification.commit;
        this.logger.log('Initializing...');
        this.clearCaches().then(() => {
            this.logger.log('Initialized');
        });
    }

    start() {
        this.check();
        this.updaterId = setInterval(() => {
            this.check();
        }, config_js_1.config.common.UPDATE_POLL_INTERVAL_MS);
        this.logger.log('Loop started');
    }

    stop() {
        if (this.updaterId) {
            clearInterval(this.updaterId);
            this.logger.log('Loop stopped');
        }
    }

    async clearCaches() {
        this.logger.log('Clearing caches');
        await this.deleteFile(APP_ASAR_TMP_ZSTD_DOWNLOAD_PATH);
        await this.deleteFile(APP_ASAR_TMP_DOWNLOAD_PATH);
        this.logger.log('Caches cleared');
    }

    async check(force = false) {
        let url;
        try {
            url = await this.checkForUpdates(force);
        } catch (error) {
            this.logger.error('Update check failed:', error);
            return;
        }
        if (!url) return;

        this.latestUrl = url;
        const latestVersion = this.latestVersion;

        force
            ? this.onModUpdateListeners.forEach((listener) => {
                  listener(currentVersion, latestVersion);
              })
            : setTimeout(() => {
                  this.onModUpdateListeners.forEach((listener) => {
                      listener(currentVersion, latestVersion);
                  });
              }, 5000);
    }

    async checkForUpdates(force = false) {
        if (this.branch) return this.checkForBranchUpdates(force);

        const response = await fetch(UPDATE_CHECK_URL, { signal: AbortSignal.timeout(15000) });
        if (!response.ok) throw new Error(`Mod update lookup failed: HTTP ${response.status}`);
        const releaseData = await response.json();

        if (force || semver.lt(this.latestVersion, releaseData.mod.modVersion)) {
            const downloadUrl = releaseData.mod.downloadUrl;
            this.compressionType = downloadUrl && downloadUrl.endsWith('.zst') ? 'zstd' : null;

            if (this.compressionType === 'zstd' && !zstdDecompressPromise) {
                this.logger.error('zstd decompression is not supported in current Node.js runtime');
                return false;
            }

            this.latestVersion = releaseData.mod.modVersion;
            this.logger.log('New version available:', currentVersion, '->', this.latestVersion);
            return downloadUrl;
        }

        return false;
    }

    async checkForBranchUpdates(force = false) {
        const response = await fetch(`https://api.github.com/repos/PulseSync-LLC/PulseSync-mod/releases/tags/${encodeURIComponent(`branch-${this.branch}`)}`, {
            headers: { Accept: 'application/vnd.github+json' },
            signal: AbortSignal.timeout(15000),
        });
        if (!response.ok) throw new Error(`Branch update lookup failed: HTTP ${response.status}`);
        const release = await response.json();
        const archive = release.assets?.find((asset) => asset.name === 'app.asar.zst');
        const unpacked = release.assets?.find((asset) => asset.name === 'app.asar.unpacked.zip');
        const metadataAsset = release.assets?.find((asset) => asset.name === 'build.json');
        if (release.draft || !release.prerelease || !archive || !unpacked || !metadataAsset) {
            throw new Error('Incomplete branch build');
        }
        const metadataResponse = await fetch(metadataAsset.browser_download_url, { signal: AbortSignal.timeout(15000) });
        if (!metadataResponse.ok) throw new Error(`Branch metadata lookup failed: HTTP ${metadataResponse.status}`);
        const metadata = await metadataResponse.json();
        if (metadata.branch !== this.branch || !/^[a-f0-9]{40}$/i.test(metadata.commit) || !semver.valid(metadata.version)) {
            throw new Error('Invalid branch build metadata');
        }
        if (!force && metadata.commit === this.latestCommit) return false;

        this.latestCommit = metadata.commit;
        this.latestVersion = `${metadata.version} (${this.branch}, ${metadata.commit.slice(0, 7)})`;
        this.compressionType = 'zstd';
        this.logger.log('New branch build available:', this.latestVersion);
        return archive.browser_download_url;
    }

    async downloadFile(url, filePath, callback) {
        const httpsAgent = new https.Agent({
            rejectUnauthorized: false,
            keepAlive: true,
        });

        const writer = fs.createWriteStream(filePath);
        let isFinished = false;
        let isError = false;

        const response = await axios.get(url, {
            httpsAgent,
            responseType: 'stream',
        });

        const totalLength = parseInt(response.headers['content-length'] || '0', 10);
        let downloadedLength = 0;

        response.data.on('data', (chunk) => {
            if (isFinished) return;

            downloadedLength += chunk.length;
            const progress = totalLength > 0 ? downloadedLength / totalLength : 0;

            callback(progress, progress);
            writer.write(chunk);
        });

        response.data.on('end', () => {
            if (isFinished) return;
            isFinished = true;
            writer.end();
        });

        response.data.on('error', async (err) => {
            if (isFinished) return;
            isFinished = true;
            isError = true;
            writer.end();
            await this.deleteFile(filePath);
            this.logger.error('Download error:', err.message);
            callback(-1, -1);
        });

        writer.on('finish', async () => {
            try {
                if (!isFinished) return;
                if (isError) return;

                this.logger.log('Downloaded update.');

                if (this.compressionType === 'zstd' && !this.branch) {
                    await this.decompressZstdFile(APP_ASAR_TMP_ZSTD_DOWNLOAD_PATH, APP_ASAR_TMP_DOWNLOAD_PATH);
                }

                callback(1.1, -1);
                this.logger.log('Update ready to install.');
            } catch (e) {
                await this.deleteFile(filePath);
                this.logger.error('Error writing file:', e);
                callback(-1, -1);
            }
        });

        writer.on('error', async (err) => {
            await this.deleteFile(filePath);
            this.logger.error('Error writing file:', err);
            callback(-1, -1);
        });
    }

    async deleteFile(filePath) {
        if (fs.existsSync(filePath)) {
            await fsPromise.unlink(filePath);
            this.logger.log('Deleted: ', filePath);
        } else {
            this.logger.log('File not found, skipping delete: ', filePath);
        }
    }

    async renameFile(oldPath, newPath) {
        await fsPromise.rename(oldPath, newPath);
        this.logger.log('Renamed: ', oldPath, ' to ', newPath);
    }

    async copyFile(oldPath, newPath) {
        await execPromise(`copy ${oldPath} ${newPath}`);
        this.logger.log('Copied: ', oldPath, ' to ', newPath);
    }

    async openPatcher(filePath) {
        const cmdScript = `pulsesync://patch/from_mod/${encodeURIComponent(filePath)}`;
        this.logger.log('Opening external detached: ', cmdScript);
        await this.openExternalDetached(cmdScript);
    }

    async openExternalDetached(url) {
        let command;
        let args;

        if (process.platform === 'win32') {
            command = 'cmd.exe';
            args = ['/c', 'start', '', url];
        } else if (process.platform === 'darwin') {
            command = 'open';
            args = [url];
        } else {
            command = 'xdg-open';
            args = [url];
        }

        const child = spawn(command, args, {
            detached: true,
            stdio: 'ignore',
        });

        child.unref();
    }

    async decompressZstdFile(oldPath, newPath) {
        if (!zstdDecompressPromise) {
            throw new Error('zstd decompression is not supported in current Node.js runtime');
        }

        const compressedData = await fsPromise.readFile(oldPath);
        const decompressedData = await zstdDecompressPromise(compressedData);

        await fsPromise.writeFile(newPath, decompressedData);
        this.logger.log('Decompressed: ', oldPath, ' to ', newPath);
    }

    onUpdateAvailable(listener) {
        this.onModUpdateListeners.push(listener);
    }

    async onUpdateDownload(callback) {
        if (!fs.existsSync(TMP_PATH)) {
            await fsPromise.mkdir(TMP_PATH);
            this.logger.log('Created temp directory.');
        }

        const downloadPath = this.compressionType === 'zstd' ? APP_ASAR_TMP_ZSTD_DOWNLOAD_PATH : APP_ASAR_TMP_DOWNLOAD_PATH;

        await this.downloadFile(this.latestUrl, downloadPath, callback);
    }

    async onInstallUpdate() {
        this.logger.log('Installing update...');
        try {
            await this.openPatcher(this.branch ? APP_ASAR_TMP_ZSTD_DOWNLOAD_PATH : APP_ASAR_TMP_DOWNLOAD_PATH);
        } catch (e) {
            this.logger.error('Update install failed:', e);
        }
        this.logger.log('Update installed.');
    }
}

exports.ModUpdater = ModUpdater;
exports.getModUpdater = (() => {
    let modUpdater;

    return () => {
        if (!modUpdater) {
            modUpdater = new ModUpdater();
        }
        return modUpdater;
    };
})();
