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
let latestVersion = currentVersion;

class ModUpdater {
    updaterId = null;
    onModUpdateListeners = [];
    logger;
    latestUrl = undefined;
    compressionType = null; // null | 'zstd'

    constructor() {
        this.logger = new Logger_js_1.Logger('ModUpdaterLogger');
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
        const url = await this.checkForUpdates(force);
        if (!url) return;

        this.latestUrl = url;

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
        const response = await fetch(UPDATE_CHECK_URL);
        const releaseData = await response.json();

        if (force || semver.lt(latestVersion, releaseData.mod.modVersion)) {
            latestVersion = releaseData.mod.modVersion;
            this.logger.log('New version available:', currentVersion, '->', latestVersion);

            const downloadUrl = releaseData.mod.downloadUrl;
            this.compressionType = downloadUrl && downloadUrl.endsWith('.zst') ? 'zstd' : null;

            if (this.compressionType === 'zstd' && !zstdDecompressPromise) {
                this.logger.error('zstd decompression is not supported in current Node.js runtime');
                return false;
            }

            return downloadUrl;
        }

        return false;
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

                if (this.compressionType === 'zstd') {
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
            await this.openPatcher(APP_ASAR_TMP_DOWNLOAD_PATH);
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
