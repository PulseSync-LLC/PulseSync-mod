'use strict';

const fs = require('node:fs/promises');
const path = require('node:path');
const { createHash, randomUUID } = require('node:crypto');
const { spawn } = require('node:child_process');
const { downloadFileWithProgress, makeDecryptor } = require('./utils.js');

const CACHE_VERSION = 1;
const CACHE_LIMIT = 1000;
const QUEUE_LIMIT = 8;
const MAX_AUDIO_BYTES = 256 * 1024 * 1024;
const ANALYSIS_TIMEOUT_MS = 5 * 60 * 1000;
const FAILURE_RETRY_MS = 60 * 1000;

const isR128 = (value) => value && Number.isFinite(value.i) && Number.isFinite(value.tp);

function parseR128Summary(stderr) {
    const integrated = /Integrated loudness:\s*I:\s*([+-]?(?:\d+(?:\.\d+)?|inf))\s+LUFS/gi;
    const peak = /True peak:\s*Peak:\s*([+-]?(?:\d+(?:\.\d+)?|inf))\s+dBFS/gi;
    const i = [...stderr.matchAll(integrated)].at(-1)?.[1];
    const tp = [...stderr.matchAll(peak)].at(-1)?.[1];
    if (i === undefined || tp === undefined) throw new Error('FFmpeg did not return an R128 summary');
    const result = { i: Number(i), tp: Number(tp) };
    return isR128(result) ? result : null;
}

function analyzeFile(ffmpegPath, inputPath, signal) {
    return new Promise((resolve, reject) => {
        signal.throwIfAborted();
        const child = spawn(
            ffmpegPath,
            [
                '-hide_banner',
                '-nostdin',
                '-nostats',
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
            { windowsHide: true, stdio: ['ignore', 'ignore', 'pipe'] },
        );
        let stderr = '';
        const abort = () => child.kill();
        signal.addEventListener('abort', abort, { once: true });
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
    constructor({ downloader, cachePath, tempPath, isEnabled, logger }) {
        this.downloader = downloader;
        this.cachePath = cachePath;
        this.tempPath = path.resolve(tempPath);
        this.isEnabled = isEnabled;
        this.logger = logger;
        this.cache = new Map();
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
            for (const [key, result] of saved.entries.slice(-CACHE_LIMIT)) {
                if (/^[a-f0-9]{64}$/.test(key) && (result === null || isR128(result))) this.cache.set(key, result);
            }
        } catch (error) {
            if (error.code !== 'ENOENT') this.logger.warn('Failed to load UGC loudness cache:', error.message);
        }
    }

    async saveCache() {
        await fs.mkdir(path.dirname(this.cachePath), { recursive: true });
        const temporary = `${this.cachePath}.${randomUUID()}.tmp`;
        try {
            await fs.writeFile(temporary, JSON.stringify({ version: CACHE_VERSION, entries: [...this.cache] }), 'utf8');
            await fs.rename(temporary, this.cachePath);
        } finally {
            await fs.rm(temporary, { force: true });
        }
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
        const key = createHash('sha256')
            .update(JSON.stringify([CACHE_VERSION, api.token, id, track.durationMs, track.title, track.version ?? '']))
            .digest('hex');
        if (this.cache.has(key)) return this.cache.get(key);
        if (this.pending.has(key) || this.queue.length >= QUEUE_LIMIT || (this.failures.get(key) ?? 0) > Date.now()) return null;
        this.pending.add(key);
        this.queue.push({ key, id, api });
        this.startProcessing();
        return null;
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
                const result = await this.analyze(job, this.controller);
                this.controller.signal.throwIfAborted();
                this.cache.delete(job.key);
                this.cache.set(job.key, result);
                while (this.cache.size > CACHE_LIMIT) this.cache.delete(this.cache.keys().next().value);
                await this.saveCache();
                this.logger.info('UGC loudness measured', { trackId: job.id, r128: result });
            } catch (error) {
                if (!this.disposed && this.isEnabled()) {
                    this.failures.delete(job.key);
                    this.failures.set(job.key, Date.now() + FAILURE_RETRY_MS);
                    while (this.failures.size > CACHE_LIMIT) this.failures.delete(this.failures.keys().next().value);
                    this.logger.warn('Failed to measure UGC loudness:', { trackId: job.id, error: error.message });
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
                (_progress, bytes) => {
                    if (bytes > MAX_AUDIO_BYTES) controller.abort(new Error('UGC audio exceeds the loudness analysis size limit'));
                },
                info.transport === 'encraw' ? makeDecryptor(info.key) : undefined,
                { signal },
            );
            signal.throwIfAborted();
            return await analyzeFile(ffmpegPath, inputPath, signal);
        } finally {
            clearTimeout(timer);
            if (directory) {
                await fs.rm(path.join(directory, 'audio'), { force: true });
                await fs.rmdir(directory);
            }
        }
    }

    cancelPending() {
        for (const job of this.queue) this.pending.delete(job.key);
        this.queue = [];
        this.controller?.abort(new Error('UGC loudness analysis canceled'));
    }

    dispose() {
        this.disposed = true;
        this.cancelPending();
    }
}

module.exports = { UgcLoudness };
