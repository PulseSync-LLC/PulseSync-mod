'use strict';

const fs = require('node:fs/promises');
const path = require('node:path');
const { createHash, randomUUID } = require('node:crypto');
const { spawn } = require('node:child_process');
const { downloadFileWithProgress, makeDecryptor } = require('./utils.js');

const CACHE_VERSION = 1;
const CACHE_KEY_VERSION = 2;
const CACHE_LIMIT = 1000;
const ACCOUNT_LIMIT = 16;
const QUEUE_LIMIT = 8;
const MAX_AUDIO_BYTES = 256 * 1024 * 1024;
const ANALYSIS_TIMEOUT_MS = 5 * 60 * 1000;
const FAILURE_RETRY_MS = 60 * 1000;

const isR128 = (value) => value && Number.isFinite(value.i) && Number.isFinite(value.tp);
const hashKey = (value) => createHash('sha256').update(JSON.stringify(value)).digest('hex');
const trackCacheKey = (identity, track, version) => hashKey([version, identity, String(track.id), track.durationMs, track.title, track.version ?? '']);

function parseR128Summary(stderr) {
    const integrated = /Integrated loudness:\s*I:\s*([+-]?(?:\d+(?:\.\d+)?|inf))\s+LUFS/gi;
    const peak = /True peak:\s*Peak:\s*([+-]?(?:\d+(?:\.\d+)?|inf))\s+dBFS/gi;
    const i = [...stderr.matchAll(integrated)].at(-1)?.[1];
    const tp = [...stderr.matchAll(peak)].at(-1)?.[1];
    if (i === undefined || tp === undefined) throw new Error('FFmpeg did not return an R128 summary');
    const result = { i: Number(i), tp: Number(tp) };
    return isR128(result) ? result : null;
}

function analyzeFile(ffmpegPath, inputPath, signal, durationMs, onProgress) {
    return new Promise((resolve, reject) => {
        signal.throwIfAborted();
        const child = spawn(
            ffmpegPath,
            [
                '-hide_banner',
                '-nostdin',
                '-nostats',
                '-progress',
                'pipe:1',
                '-loglevel',
                'info',
                '-threads',
                '1',
                '-i',
                inputPath,
                '-map',
                '0:a:0',
                '-vn',
                '-sn',
                '-dn',
                '-af',
                'ebur128=peak=true:framelog=verbose',
                '-filter_threads',
                '1',
                '-threads',
                '1',
                '-f',
                'null',
                '-',
            ],
            { windowsHide: true, stdio: ['ignore', 'pipe', 'pipe'] },
        );
        let stderr = '';
        let progressBuffer = '';
        const abort = () => child.kill();
        signal.addEventListener('abort', abort, { once: true });
        child.stdout.on('data', (chunk) => {
            const lines = (progressBuffer + chunk.toString()).split(/\r?\n/);
            progressBuffer = lines.pop().slice(-1024);
            for (const line of lines) {
                const match = /^out_time_us=(\d+)$/.exec(line);
                if (match) onProgress(Math.min(99, (Number(match[1]) / (durationMs * 1000)) * 100));
            }
        });
        child.stderr.on('data', (chunk) => {
            stderr = (stderr + chunk.toString()).slice(-16384);
        });
        child.once('error', (error) => {
            signal.removeEventListener('abort', abort);
            reject(error);
        });
        child.once('close', (code) => {
            signal.removeEventListener('abort', abort);
            if (signal.aborted) return reject(signal.reason);
            if (code !== 0) return reject(new Error(`FFmpeg R128 analysis exited with code ${code}`));
            try {
                resolve(parseR128Summary(stderr));
            } catch (error) {
                reject(error);
            }
        });
        if (signal.aborted) abort();
    });
}

class UgcLoudness {
    constructor({ downloader, cachePath, tempPath, isEnabled, logger, onProgress }) {
        this.downloader = downloader;
        this.cachePath = cachePath;
        this.tempPath = path.resolve(tempPath);
        this.isEnabled = isEnabled;
        this.logger = logger;
        this.onProgress = onProgress;
        this.cache = new Map();
        this.accounts = new Map();
        this.cacheUpdates = Promise.resolve();
        this.pending = new Set();
        this.failures = new Map();
        this.queue = [];
        this.controller = null;
        this.processing = null;
        this.disposed = false;
        this.loading = this.loadCache();
    }

    async loadCache() {
        try {
            if ((await fs.stat(this.cachePath)).size > 2 * 1024 * 1024) return;
            const saved = JSON.parse(await fs.readFile(this.cachePath, 'utf8'));
            if (saved.version !== CACHE_VERSION || !Array.isArray(saved.entries)) return;
            for (const entry of Array.isArray(saved.accounts) ? saved.accounts.slice(-ACCOUNT_LIMIT) : []) {
                if (Array.isArray(entry) && /^[a-f0-9]{64}$/.test(entry[0]) && typeof entry[1] === 'string' && /^\d{1,32}$/.test(entry[1])) {
                    this.accounts.set(entry[0], entry[1]);
                }
            }
            for (const [key, result] of saved.entries.slice(-CACHE_LIMIT)) {
                if (/^[a-f0-9]{64}$/.test(key) && (result === null || isR128(result))) this.cache.set(key, result);
            }
        } catch (error) {
            if (error.code !== 'ENOENT') this.logger.warn('Failed to load UGC loudness cache:', error.message);
        }
    }

    async saveCache(entries = this.cache) {
        await fs.mkdir(path.dirname(this.cachePath), { recursive: true });
        const temporary = `${this.cachePath}.${randomUUID()}.tmp`;
        try {
            await fs.writeFile(temporary, JSON.stringify({ version: CACHE_VERSION, entries: [...entries], accounts: [...this.accounts] }), 'utf8');
            await fs.rename(temporary, this.cachePath);
        } finally {
            await fs.rm(temporary, { force: true });
        }
    }

    storeResult(key, result, legacyKey) {
        const update = this.cacheUpdates
            .catch(() => {})
            .then(async () => {
                const updatedCache = new Map(this.cache);
                if (legacyKey && legacyKey !== key) updatedCache.delete(legacyKey);
                updatedCache.delete(key);
                updatedCache.set(key, result);
                while (updatedCache.size > CACHE_LIMIT) updatedCache.delete(updatedCache.keys().next().value);
                await this.saveCache(updatedCache);
                this.cache = updatedCache;
            });
        this.cacheUpdates = update;
        return update;
    }

    async resolveAccount(job, signal) {
        signal.throwIfAborted();
        if (job.api.token !== job.token) throw new Error('UGC loudness authorization changed');
        const tokenKey = hashKey(job.token);
        let uid = this.accounts.get(tokenKey);
        if (!uid) {
            const response = await job.api.request('GET', 'account/status', { signal });
            signal.throwIfAborted();
            if (job.api.token !== job.token) throw new Error('UGC loudness authorization changed');
            const account = response.data?.result ?? response.data;
            uid = String(account?.account?.uid ?? '');
            if (!/^\d{1,32}$/.test(uid)) throw new Error('Unable to identify the UGC loudness account');
            this.accounts.set(tokenKey, uid);
            while (this.accounts.size > ACCOUNT_LIMIT) this.accounts.delete(this.accounts.keys().next().value);
        }
        return uid;
    }

    async get(track) {
        if (this.disposed || !this.isEnabled() || !track || typeof track !== 'object') return null;
        if (!['UGC', 'OWN_REPLACED_TO_UGC'].includes(track.trackSource)) return null;
        const id = String(track.id ?? '');
        if (!/^[\w.:-]{1,200}$/.test(id) || !Number.isFinite(track.durationMs) || track.durationMs <= 0) return null;
        if (typeof track.title !== 'string' || track.title.length > 1000 || (track.version != null && (typeof track.version !== 'string' || track.version.length > 1000)))
            return null;

        let api;
        try {
            api = await this.downloader.waitUntilReady();
        } catch {
            return null;
        }
        if (!api?.token) return null;
        await this.loading;
        if (this.disposed || !this.isEnabled()) return null;
        const token = api.token;
        const legacyKey = trackCacheKey(token, track, CACHE_VERSION);
        const uid = this.accounts.get(hashKey(token));
        const key = uid ? trackCacheKey(uid, track, CACHE_KEY_VERSION) : null;
        const cachedKey = key && this.cache.has(key) ? key : this.cache.has(legacyKey) ? legacyKey : null;
        const cachedResult = cachedKey ? this.cache.get(cachedKey) : null;
        if (cachedKey) {
            void this.storeResult(key ?? legacyKey, cachedResult, legacyKey).catch((error) => this.logger.warn('Failed to update UGC loudness cache:', error.message));
            if (uid) return cachedResult;
        }
        if (this.pending.has(legacyKey) || this.queue.length >= QUEUE_LIMIT || (this.failures.get(legacyKey) ?? 0) > Date.now()) return cachedResult;
        this.pending.add(legacyKey);
        const job = {
            key: legacyKey,
            id,
            api,
            token,
            operationId: randomUUID(),
            track: { id, durationMs: track.durationMs, title: track.title, version: track.version ?? null, trackSource: track.trackSource },
        };
        this.queue.push(job);
        this.report(job, 'queued');
        this.startProcessing();
        return cachedResult;
    }

    report(job, stage, progress = null, r128 = null) {
        const percentage = Number.isFinite(progress) ? Math.max(0, Math.min(100, Math.floor(progress))) : null;
        const now = Date.now();
        if (stage === job.lastStage && (percentage === job.lastProgress || now - job.lastReportAt < 250)) return;
        job.lastStage = stage;
        job.lastProgress = percentage;
        job.lastReportAt = now;
        try {
            this.onProgress?.({ operationId: job.operationId, track: job.track, stage, progress: percentage, r128 });
        } catch (error) {
            this.logger.warn('Failed to report UGC loudness progress:', error.message);
        }
    }

    startProcessing() {
        if (this.processing || this.disposed || !this.isEnabled() || !this.queue.length) return;
        this.processing = this.drain().finally(() => {
            this.processing = null;
            this.startProcessing();
        });
        void this.processing.catch((error) => this.logger.warn('UGC loudness queue failed:', error.message));
    }

    async drain() {
        while (this.queue.length && !this.disposed && this.isEnabled()) {
            const job = this.queue.shift();
            this.controller = new AbortController();
            try {
                const uid = await this.resolveAccount(job, this.controller.signal);
                const key = trackCacheKey(uid, job.track, CACHE_KEY_VERSION);
                const cachedKey = this.cache.has(key) ? key : this.cache.has(job.key) ? job.key : null;
                const result = cachedKey ? this.cache.get(cachedKey) : await this.analyze(job, this.controller);
                this.controller.signal.throwIfAborted();
                this.report(job, 'saving', 99);
                await this.storeResult(key, result, job.key);
                this.controller.signal.throwIfAborted();
                this.report(job, 'ready', 100, result);
                this.logger.info('UGC loudness measured', { trackId: job.id, r128: result });
            } catch (error) {
                if (!this.disposed && this.isEnabled()) {
                    this.failures.delete(job.key);
                    this.failures.set(job.key, Date.now() + FAILURE_RETRY_MS);
                    while (this.failures.size > CACHE_LIMIT) this.failures.delete(this.failures.keys().next().value);
                    this.logger.warn('Failed to measure UGC loudness:', { trackId: job.id, error: error.message });
                    this.report(job, 'error');
                } else {
                    this.report(job, 'cancelled');
                }
            } finally {
                this.pending.delete(job.key);
                this.controller = null;
            }
        }
    }

    async analyze(job, controller) {
        const { signal } = controller;
        const timer = setTimeout(() => controller.abort(new Error('UGC loudness analysis timed out')), ANALYSIS_TIMEOUT_MS);
        timer.unref?.();
        let directory;
        try {
            this.report(job, 'downloading', 0);
            const ffmpegPath = this.downloader.ffmpeg.ffmpegPath;
            await fs.access(ffmpegPath);
            const response = await job.api.getFileInfo(job.id, { signal });
            const info = this.downloader.selectDownloadInfo(response.downloadInfo);
            if (!info?.url || !['raw', 'encraw'].includes(info.transport)) throw new Error('UGC audio source is unavailable');
            signal.throwIfAborted();
            directory = await fs.mkdtemp(path.join(this.tempPath, 'pulsesync-ugc-loudness-'));
            const inputPath = path.join(directory, 'audio');
            await downloadFileWithProgress(
                info.url,
                inputPath,
                (progress, bytes, total) => {
                    if (bytes > MAX_AUDIO_BYTES) controller.abort(new Error('UGC audio exceeds the loudness analysis size limit'));
                    this.report(job, 'downloading', total ? progress * 100 : null);
                },
                info.transport === 'encraw' ? makeDecryptor(info.key) : undefined,
                { signal },
            );
            signal.throwIfAborted();
            this.report(job, 'analyzing', 0);
            return await analyzeFile(ffmpegPath, inputPath, signal, job.track.durationMs, (progress) => this.report(job, 'analyzing', progress));
        } finally {
            clearTimeout(timer);
            if (directory) {
                await fs.rm(path.join(directory, 'audio'), { force: true });
                await fs.rmdir(directory);
            }
        }
    }

    cancelPending() {
        for (const job of this.queue) {
            this.pending.delete(job.key);
            this.report(job, 'cancelled');
        }
        this.queue = [];
        this.controller?.abort(new Error('UGC loudness analysis canceled'));
    }

    dispose() {
        this.disposed = true;
        this.cancelPending();
    }
}

module.exports = { UgcLoudness };
