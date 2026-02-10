'use strict';

const fs = require('original-fs');
const fsPromise = fs.promises;
const path = require('path');
const https = require('https');
const axios = require('axios');
const yaml = require('js-yaml');
const crypto = require('crypto');
const { pipeline } = require('stream/promises');
const { app, shell } = require('electron');
const { spawn } = require('child_process');
const Logger_js_1 = require('../packages/logger/Logger.js');

const DEFAULT_FEEDS = {
    win32: 'https://s3.pulsesync.dev/builds/app/beta/latest.yml',
    linux: 'https://s3.pulsesync.dev/builds/app/beta/latest-linux.yml',
    darwin: 'https://pulsesync.dev/builds/app/beta/download.json',
};

const DEFAULT_NAMES = {
    appNames: ['PulseSync', 'PulseSync App', 'pulsesync-app'],
    exeNames: ['PulseSync.exe', 'PulseSync App.exe', 'pulsesync-app.exe'],
    desktopNames: ['pulsesync.desktop', 'pulsesync-app.desktop'],
    macAppNames: ['PulseSync.app', 'PulseSync App.app'],
    linuxBinaryNames: ['pulsesync', 'pulsesync-app'],
};

function getFeedUrl(platform, feeds) {
    const url = feeds[platform];
    if (!url) {
        throw new Error(`Unsupported platform: ${platform}`);
    }
    return url;
}

function normalizeSha512(expected) {
    const value = String(expected || '').trim();
    if (!value) return null;
    if (/^[0-9a-fA-F]{128}$/.test(value)) {
        return value.toLowerCase();
    }
    try {
        return Buffer.from(value, 'base64').toString('hex').toLowerCase();
    } catch {
        return null;
    }
}

async function sha512File(p) {
    const hash = crypto.createHash('sha512');
    await pipeline(fs.createReadStream(p), hash);
    return hash.digest('hex');
}

function pickFileByArch(files, arch) {
    if (!Array.isArray(files) || files.length === 0) return null;
    const byArch = files.find((file) => file?.arch === arch);
    if (byArch) return byArch;
    const byUrl = files.find((file) => typeof file?.url === 'string' && file.url.includes(arch));
    return byUrl || files[0];
}

function resolveUrl(base, maybeRelative) {
    if (!maybeRelative) return null;
    try {
        return new URL(maybeRelative).toString();
    } catch {
        return new URL(maybeRelative, base).toString();
    }
}

async function fileExists(p) {
    try {
        await fsPromise.access(p, fs.constants.F_OK);
        return true;
    } catch {
        return false;
    }
}

async function readDesktopExecPath(p) {
    try {
        const content = await fsPromise.readFile(p, 'utf8');
        const line = content
            .split(/\r?\n/)
            .map((l) => l.trim())
            .find((l) => l.startsWith('Exec='));
        if (!line) return null;
        const execValue = line.slice('Exec='.length).trim();
        const match = execValue.match(/^"([^"]+)"|^([^\s]+)/);
        const execPath = match?.[1] || match?.[2];
        return execPath || null;
    } catch {
        return null;
    }
}

class PulseSyncAppInstaller {
    constructor({ feeds = {}, names = {}, silentInstall = true, downloadDir } = {}) {
        this.logger = new Logger_js_1.Logger('PulseSyncAppInstaller');
        this.feeds = { ...DEFAULT_FEEDS, ...feeds };
        this.names = { ...DEFAULT_NAMES, ...names };
        this.silentInstall = silentInstall === true;
        this.platform = process.platform;
        this.arch = process.arch;
        this.downloadDir = downloadDir || path.join(app.getPath('userData'), 'pulsesync-app-installer');
        this._cachedRelease = null;
    }

    async getLatestRelease() {
        if (this._cachedRelease) return this._cachedRelease;
        const feedUrl = getFeedUrl(this.platform, this.feeds);
        const agent = new https.Agent({ keepAlive: true });
        const resp = await axios.get(feedUrl, {
            responseType: 'text',
            httpsAgent: agent,
            headers: { 'User-Agent': 'PulseSync-App-Installer' },
            validateStatus: (s) => s >= 200 && s < 400,
        });

        let data;
        if (this.platform === 'darwin') {
            data = JSON.parse(resp.data);
        } else {
            data = yaml.load(resp.data);
        }

        const base = new URL(feedUrl);
        const arch = this.arch === 'arm64' ? 'arm64' : this.arch === 'ia32' ? 'ia32' : 'x64';

        if (this.platform === 'darwin') {
            const asset = pickFileByArch(data.assets || [], arch) || {};
            const url = resolveUrl(base, asset.url || data.url);
            const sha512 = asset.sha512 || data.sha512;
            const fileType = asset.fileType || data.fileType || path.extname(url || '').replace('.', '');
            this._cachedRelease = {
                version: data.version,
                url,
                sha512,
                fileType,
                minOsVersion: data.minOsVersion,
            };
            return this._cachedRelease;
        }

        const file = pickFileByArch(data.files || [], arch) || {};
        const urlPath = file.url || data.path;
        const url = resolveUrl(base, urlPath);
        const sha512 = file.sha512 || data.sha512;
        const fileType = file.fileType || data.fileType || path.extname(urlPath || '').replace('.', '');

        this._cachedRelease = {
            version: data.version,
            url,
            sha512,
            fileType,
        };

        return this._cachedRelease;
    }

    async findInstalledPath() {
        if (this.platform === 'win32') {
            const localAppData = process.env.LOCALAPPDATA || app.getPath('localAppData');
            const programFiles = process.env.ProgramFiles;
            const programFilesX86 = process.env['ProgramFiles(x86)'];
            const baseDirs = [localAppData ? path.join(localAppData, 'Programs') : null, programFiles || null, programFilesX86 || null].filter(Boolean);

            for (const base of baseDirs) {
                let dirEntries = [];
                try {
                    dirEntries = await fsPromise.readdir(base, { withFileTypes: true });
                } catch {
                    continue;
                }

                const dirNames = new Set(dirEntries.filter((entry) => entry.isDirectory()).map((entry) => entry.name.toLowerCase()));

                for (const appName of this.names.appNames) {
                    if (!dirNames.has(appName.toLowerCase())) continue;
                    const appDir = path.join(base, appName);
                    let appEntries = [];
                    try {
                        appEntries = await fsPromise.readdir(appDir, { withFileTypes: true });
                    } catch {
                        continue;
                    }
                    const fileNames = new Set(appEntries.filter((entry) => entry.isFile()).map((entry) => entry.name.toLowerCase()));
                    for (const exeName of this.names.exeNames) {
                        if (fileNames.has(exeName.toLowerCase())) {
                            return path.join(appDir, exeName);
                        }
                    }
                }
            }
            return null;
        }

        if (this.platform === 'darwin') {
            const home = app.getPath('home');
            const appDirs = [path.join('/Applications'), path.join(home, 'Applications')];
            for (const dir of appDirs) {
                let entries = [];
                try {
                    entries = await fsPromise.readdir(dir, { withFileTypes: true });
                } catch {
                    continue;
                }
                const names = new Set(entries.map((entry) => entry.name));
                for (const appName of this.names.macAppNames) {
                    if (names.has(appName)) {
                        return path.join(dir, appName);
                    }
                }
            }
            return null;
        }

        if (this.platform === 'linux') {
            const home = app.getPath('home');
            const desktopCandidates = [
                ...this.names.desktopNames.map((name) => path.join(home, '.local', 'share', 'applications', name)),
                ...this.names.desktopNames.map((name) => path.join('/usr', 'share', 'applications', name)),
            ];
            for (const desktopFile of desktopCandidates) {
                const desktopDir = path.dirname(desktopFile);
                let entries = [];
                try {
                    entries = await fsPromise.readdir(desktopDir, { withFileTypes: true });
                } catch {
                    continue;
                }
                const fileNames = new Set(entries.filter((entry) => entry.isFile()).map((entry) => entry.name));
                const baseName = path.basename(desktopFile);
                if (!fileNames.has(baseName)) continue;
                const execPath = await readDesktopExecPath(desktopFile);
                if (execPath && (await fileExists(execPath))) {
                    return execPath;
                }
            }

            const pathDirs = (process.env.PATH || '').split(path.delimiter).filter(Boolean);
            for (const dir of pathDirs) {
                let entries = [];
                try {
                    entries = await fsPromise.readdir(dir, { withFileTypes: true });
                } catch {
                    continue;
                }
                const fileNames = new Set(entries.filter((entry) => entry.isFile()).map((entry) => entry.name));
                for (const binName of this.names.linuxBinaryNames) {
                    if (fileNames.has(binName)) {
                        return path.join(dir, binName);
                    }
                }
            }
            return null;
        }

        return null;
    }

    async isInstalled() {
        const found = await this.findInstalledPath();
        return Boolean(found);
    }

    async download(url, out, callback) {
        await fsPromise.mkdir(path.dirname(out), { recursive: true });

        if (await fileExists(out)) {
            await fsPromise.unlink(out).catch(() => null);
        }

        const agent = new https.Agent({ keepAlive: true });
        const resp = await axios.get(url, {
            responseType: 'stream',
            httpsAgent: agent,
            headers: { 'User-Agent': 'PulseSync-App-Installer' },
            maxRedirects: 10,
            validateStatus: (s) => s >= 200 && s < 400,
        });

        const totalLength = parseInt(resp.headers['content-length'] || '0', 10);
        let downloaded = 0;

        resp.data.on('data', (chunk) => {
            downloaded += chunk.length;
            if (typeof callback === 'function') {
                const progress = totalLength > 0 ? downloaded / totalLength : 0;
                callback(progress, progress);
            }
        });

        try {
            await pipeline(resp.data, fs.createWriteStream(out));
        } catch (e) {
            await fsPromise.unlink(out).catch(() => null);
            if (typeof callback === 'function') callback(-1, -1);
            throw e;
        }

        if (typeof callback === 'function') callback(1.1, -1);
        this.logger.log('Downloaded installer:', out);
    }

    async verifySha512(filePath, expected) {
        const normalized = normalizeSha512(expected);
        if (!normalized) {
            this.logger.warn('SHA-512 missing or invalid; skipping verification');
            return false;
        }
        const actual = await sha512File(filePath);
        if (actual !== normalized) {
            throw new Error('SHA-512 mismatch');
        }
        return true;
    }

    async downloadLatest(callback) {
        const info = await this.getLatestRelease();
        if (!info?.url) {
            throw new Error('Latest release URL missing');
        }
        const filename = path.basename(new URL(info.url).pathname);
        const out = path.join(this.downloadDir, filename);
        await this.download(info.url, out, callback);
        await this.verifySha512(out, info.sha512);
        return { installerPath: out, info };
    }

    async install(installerPath, info) {
        if (this.platform === 'win32') {
            const args = this.silentInstall ? ['/S'] : [];
            await new Promise((resolve, reject) => {
                const child = spawn(installerPath, args, {
                    stdio: 'ignore',
                    windowsHide: true,
                });
                child.on('error', reject);
                child.on('exit', () => resolve());
            });
            return { launched: false };
        }

        if (this.platform === 'linux') {
            const ext = path.extname(installerPath).toLowerCase();
            const fileType = String(info?.fileType || '').toLowerCase();
            if (ext === '.appimage' || fileType === 'appimage') {
                await fsPromise.chmod(installerPath, 0o755).catch(() => null);
                spawn(installerPath, [], { detached: true, stdio: 'ignore' }).unref();
                return { launched: true };
            }
            await shell.openPath(installerPath);
            return { launched: false };
        }

        if (this.platform === 'darwin') {
            await shell.openPath(installerPath);
            return { launched: false };
        }

        return { launched: false };
    }

    async launchInstalled({ timeoutMs = 30000, intervalMs = 1000 } = {}) {
        const start = Date.now();
        let installedPath = null;

        while (!installedPath && Date.now() - start < timeoutMs) {
            installedPath = await this.findInstalledPath();
            if (!installedPath) {
                await new Promise((resolve) => setTimeout(resolve, intervalMs));
            }
        }

        if (!installedPath) {
            this.logger.warn('PulseSync app not found after install');
            return false;
        }

        this.logger.log('Launching installed app:', installedPath);
        if (this.platform === 'darwin') {
            await shell.openPath(installedPath);
        } else {
            spawn(installedPath, [], {
                detached: true,
                stdio: 'ignore',
                windowsHide: this.platform === 'win32',
            }).unref();
        }
        return true;
    }

    async ensureInstalled(callback, { force = false, launch = true } = {}) {
        if (!force) {
            const installed = await this.findInstalledPath();
            if (installed) {
                this.logger.log('PulseSync app already installed:', installed);
                return installed;
            }
        }

        const { installerPath, info } = await this.downloadLatest(callback);
        const result = await this.install(installerPath, info);
        if (launch && !result?.launched) {
            await this.launchInstalled();
        }
        return installerPath;
    }
}

exports.PulseSyncAppInstaller = PulseSyncAppInstaller;

exports.getPulseSyncAppInstaller = (() => {
    let instance;
    return (opts) => {
        if (!instance) {
            instance = new PulseSyncAppInstaller(opts);
        }
        return instance;
    };
})();
