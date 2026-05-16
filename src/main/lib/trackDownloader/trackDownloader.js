const Logger_js_1 = require('../../packages/logger/Logger.js');
const store_js_1 = require('../store.js');
const electron_1 = require('electron');
const fs = require('fs').promises;
const fsSync = require('fs');
const path = require('path');
const electron = require('electron');
const EventEmitter = require('events');
const {
    downloadFileWithProgress,
    makeDecryptor,
    artists2string,
    removeInvalidCharsFromFilename,
    removeInvalidEndingsFromTrackTitle,
    getFileExtensionFromCodec,
} = require('../utils.js');
const { TracksApiWrapper } = require('./tracksApiWrapper.js');
const { FfmpegWrapper } = require('./ffmpegWrapper.js');
const { YtDlpWrapper } = require('./ytDlpWrapper.js');
const { PipelineStage, throwIfAborted } = require('./pipelineStage.js');
const { createDirIfNotExist } = require('../utils.js');

const TMP_PATH = process.platform === 'linux' ? path.join(electron.app.getPath('userData'), 'temp') : path.join(electron.app.getAppPath(), '../../', '\\temp');
const DEFAULT_PIPELINE_OPTIONS = {
    metadataConcurrency: 8,
    metadataMaxQueued: 128,
    downloadConcurrency: 12,
    downloadMaxQueued: 64,
    ffmpegConcurrency: 2,
    ffmpegMaxQueued: 32,
    metadataRetries: 2,
    downloadRetries: 2,
    ffmpegRetries: 1,
    retryDelayMs: 750,
    adaptiveConcurrency: true,
    adaptiveConcurrencyIntervalMs: 3000,
    adaptiveConcurrencyCooldownMs: 9000,
    metadataMinConcurrency: 4,
    metadataMaxConcurrency: 16,
    downloadMinConcurrency: 4,
    downloadMaxConcurrency: 24,
    ffmpegMinConcurrency: 1,
    ffmpegMaxConcurrency: 6,
};
const ADAPTIVE_CONCURRENCY_CAPS = {
    metadata: 16,
    download: 24,
    ffmpeg: 6,
};
const DOWNLOAD_CONCURRENCY_PRESETS = {
    minimal: {
        metadataConcurrency: 4,
        downloadConcurrency: 4,
        ffmpegConcurrency: 1,
        adaptiveConcurrency: false,
    },
    adaptive: {
        metadataConcurrency: 12,
        downloadConcurrency: 16,
        ffmpegConcurrency: 3,
        adaptiveConcurrency: true,
    },
    maximum: {
        metadataConcurrency: 16,
        downloadConcurrency: 24,
        ffmpegConcurrency: 6,
        adaptiveConcurrency: false,
    },
};
// Queue progress is weighted per track so fast metadata work does not dominate the
// aggregate progress bar and slow ffmpeg work keeps its own visible budget.
const PIPELINE_PROGRESS_WEIGHTS = {
    metadata: 0.1,
    download: 0.6,
    ffmpeg: 0.3,
};
const FILE_INFO_BATCH_SIZE = 50;

function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}

function getTrackFilename(track) {
    if (!track) return 'unknown_track';

    let trackFilename,
        artistsString = artists2string(track?.artists),
        titleString = removeInvalidEndingsFromTrackTitle(track?.title);

    if (artistsString && titleString) {
        trackFilename = `${artistsString} — ${titleString}`;
    } else if (titleString) {
        trackFilename = titleString;
    } else if (artistsString) {
        trackFilename = artistsString;
    } else if (track.filename) {
        trackFilename = removeInvalidEndingsFromTrackTitle(track.filename);
    } else {
        trackFilename = track.realId ?? track.id;
    }

    try {
        const version = track?.version;
        if (version) {
            const verStr = String(version).trim();
            if (verStr && !trackFilename.includes(verStr)) {
                trackFilename = `${trackFilename} (${verStr})`;
            }
        }
    } catch (e) {}

    return removeInvalidCharsFromFilename(trackFilename);
}

function isYandexMusicLink(rawURL) {
    try {
        const parsedURL = new URL(rawURL);
        return parsedURL.hostname.toLowerCase().includes('music.yandex.');
    } catch (error) {
        return false;
    }
}

class TrackDownloader extends EventEmitter {
    logger;
    window;
    constructor(window) {
        super();
        this.window = window;
        this.logger = new Logger_js_1.Logger('TrackDownloaderLogger');
        this.activeAbortControllers = new Set();

        this.ffmpeg = new FfmpegWrapper();
        this.ytDlp = new YtDlpWrapper(window);

        this.logger.log('Initializing tracks API wrapper...');

        this.tracksAPI = null;
        this.readyPromise = window.webContents
            .executeJavaScript('JSON.parse(localStorage.getItem("oauth")).value;')
            .then((token) => {
                // Dirty way to get OAuth token from localStorage
                this.tracksAPI = new TracksApiWrapper(token, window.webContents.getUserAgent());
                this.logger.log('TracksApiWrapper initialized');
                return this.tracksAPI;
            })
            .catch((error) => {
                this.logger.error('Failed to initialize TracksApiWrapper:', error);
                throw error;
            });
        this.logger.log('TrackDownloader initialized');
    }

    async waitUntilReady() {
        if (this.tracksAPI) return this.tracksAPI;
        await this.readyPromise;
        if (!this.tracksAPI) {
            throw new Error('Tracks API is not initialized');
        }
        return this.tracksAPI;
    }

    async downloadTrackFile(
        data,
        outputPath,
        callback = (x, b) => {
            return null;
        },
        options = {},
    ) {
        const isEncrypted = data?.transport === 'encraw';
        const decryptor = isEncrypted ? makeDecryptor(data.key) : undefined;

        this.logger.log(`Downloading${isEncrypted ? ' and decrypting' : ''} raw track: ${data.trackId}`);

        try {
            await downloadFileWithProgress(
                data.downloadURL,
                outputPath,
                (x) => {
                    callback(x * 0.8, x * 0.8);
                },
                decryptor,
                options,
            );
            this.logger.log(`Track ${data.trackId} downloaded${isEncrypted ? ' and decrypted' : ''}`);
            return true;
        } catch (e) {
            this.logger.warn(`Track ${data.trackId} download${isEncrypted ? ' or decryption' : ''} failed: ${e}`);
            return false;
        }
    }

    async handleSaveDialog(data, defaultFilepath) {
        const { canceled, filePath } = await electron_1.dialog.showSaveDialog({
            defaultPath: defaultFilepath, //.replace("-mp4", "")
        });
        if (canceled || !filePath || !data.downloadURL) return this.logger.info('Track download canceled');

        return filePath;
    }

    async handleOutputDirDialog(defaultPath) {
        const dialogOptions = {
            properties: ['openDirectory', 'createDirectory'],
        };

        if (defaultPath) {
            dialogOptions.defaultPath = defaultPath;
        }

        const { canceled, filePaths } = await electron_1.dialog.showOpenDialog(dialogOptions);
        if (canceled || !filePaths?.[0]) {
            this.logger.info('Track download output directory selection canceled');
            return;
        }

        return filePaths[0];
    }

    async removeIfExistsDir(dirPath) {
        if (!fsSync.existsSync(dirPath)) return;
        await fs.rm(dirPath, { recursive: true, force: true, maxRetries: 5, retryDelay: 150 });
        this.logger.log('Deleted temp track directory.', dirPath);
    }

    async getFinalTrackPath(data, fileExtension) {
        const downloaderSettings = store_js_1.getModSettings()?.downloader;
        const defaultDirPath = downloaderSettings?.useDefaultPath && downloaderSettings?.defaultPath ? downloaderSettings.defaultPath : undefined;
        const outputDirPath = data.outputDir ?? defaultDirPath;
        const defaultFilepath = getTrackFilename(data.track) + '.' + fileExtension;

        if (data.subDirName && outputDirPath) {
            try {
                await createDirIfNotExist(path.join(outputDirPath, data.subDirName));
                this.logger.warn('Created directory:', path.join(outputDirPath, data.subDirName));
            } catch (e) {
                this.logger.warn('Failed to create directory:', e);
            }
        }

        return outputDirPath ? path.join(outputDirPath, data.subDirName ?? '', defaultFilepath) : await this.handleSaveDialog(data, defaultFilepath);
    }

    async createTempDirPath(data) {
        if (!data?.trackId) return;
        if (!fsSync.existsSync(TMP_PATH)) {
            await fs.mkdir(TMP_PATH);
            this.logger.log('Created temp directory.');
        }
        const tempDirName = removeInvalidCharsFromFilename(data?.tempDirId ?? data?.trackId);
        const dirPath = path.join(TMP_PATH, tempDirName);
        await this.removeIfExistsDir(dirPath);
        await fs.mkdir(dirPath);
        this.logger.log('Created temp track directory.', dirPath);
        return dirPath;
    }

    async downloadSingleTrack(
        trackId,
        callback = (x, b) => {
            return null;
        },
        options = {},
    ) {
        await this.waitUntilReady();
        this.logger.log(`Downloading single track: ${trackId}`);
        await this.runTrackPipeline([trackId], undefined, callback, options);

        setTimeout(() => {
            callback(-1.0, -1.0);
        }, 1000);
    }

    createPipelineOptions(options = {}) {
        const concurrencyPresetName = options.concurrencyPreset ?? store_js_1.getModSettings()?.downloader?.concurrencyPreset ?? 'adaptive';
        const concurrencyPreset = DOWNLOAD_CONCURRENCY_PRESETS[concurrencyPresetName] ?? DOWNLOAD_CONCURRENCY_PRESETS.adaptive;
        const pipelineOptions = {
            ...DEFAULT_PIPELINE_OPTIONS,
            ...concurrencyPreset,
            ...options,
        };

        ['metadata', 'download', 'ffmpeg'].forEach((stageName) => {
            const minKey = `${stageName}MinConcurrency`;
            const maxKey = `${stageName}MaxConcurrency`;
            const concurrencyKey = `${stageName}Concurrency`;
            const hardMax = ADAPTIVE_CONCURRENCY_CAPS[stageName];

            pipelineOptions[minKey] = Math.max(1, Math.min(pipelineOptions[minKey], hardMax));
            pipelineOptions[maxKey] = Math.max(pipelineOptions[minKey], Math.min(pipelineOptions[maxKey], hardMax));
            pipelineOptions[concurrencyKey] = clamp(pipelineOptions[concurrencyKey], pipelineOptions[minKey], pipelineOptions[maxKey]);
        });

        return pipelineOptions;
    }

    abortActiveDownloads(reason = new Error('Track downloader aborted')) {
        this.logger.warn('Aborting active track downloader pipelines', { activePipelines: this.activeAbortControllers.size });

        this.activeAbortControllers.forEach((controller) => {
            if (!controller.signal.aborted) {
                controller.abort(reason);
            }
        });
    }

    createNoRetryError(message) {
        const error = new Error(message);
        error.noRetry = true;
        return error;
    }

    getJobData(job) {
        return {
            downloadURL: job.downloadUrl,
            codec: job.codec,
            bitrate: job.bitrate,
            trackId: job.trackId,
            track: job.metadata,
            transport: job.transport,
            key: job.key,
            subDirName: job.subDirName,
            outputDir: job.outputDir,
            tempDirId: job.tempDirId,
        };
    }

    createFileInfoBatches(jobs) {
        for (let i = 0; i < jobs.length; i += FILE_INFO_BATCH_SIZE) {
            const trackIds = jobs.slice(i, i + FILE_INFO_BATCH_SIZE).map((job) => job.sourceTrackId);
            const batch = {
                trackIds,
                fileInfoBySourceTrackId: new Map(),
                fileInfoByTrackId: new Map(),
                promise: null,
                ready: false,
            };

            jobs.slice(i, i + FILE_INFO_BATCH_SIZE).forEach((job) => {
                job.fileInfoBatch = batch;
            });
        }
    }

    getBatchDownloadInfos(batchResponse) {
        const downloadInfos = batchResponse?.downloadInfos ?? batchResponse?.downloadInfo ?? batchResponse;
        if (!Array.isArray(downloadInfos)) {
            throw new Error('Invalid getFileInfoBatch response');
        }

        return downloadInfos.map((item) => item?.downloadInfo ?? item);
    }

    async fillFileInfoBatch(batch, { useMP3, signal }) {
        const batchResponse = await this.tracksAPI.getFileInfoBatch(batch.trackIds, { codecs: useMP3 ? ['mp3'] : undefined, signal });
        const downloadInfos = this.getBatchDownloadInfos(batchResponse);

        downloadInfos.forEach((downloadInfo, index) => {
            if (!downloadInfo) return;

            const sourceTrackId = batch.trackIds[index];
            batch.fileInfoBySourceTrackId.set(sourceTrackId, downloadInfo);

            if (downloadInfo.trackId) {
                batch.fileInfoByTrackId.set(`${downloadInfo.trackId}`, downloadInfo);
            }
        });

        batch.ready = true;
        this.logger.info('Fetched track file info batch', { tracks: batch.trackIds.length, resolved: downloadInfos.filter(Boolean).length });
    }

    async getJobFileInfo(job, { useMP3, signal }) {
        const batch = job.fileInfoBatch;
        if (!batch) {
            return (await this.tracksAPI.getFileInfo(job.sourceTrackId, { codecs: useMP3 ? ['mp3'] : undefined, signal })).downloadInfo;
        }

        if (!batch.ready) {
            if (!batch.promise) {
                batch.promise = this.fillFileInfoBatch(batch, { useMP3, signal }).catch((error) => {
                    batch.promise = null;
                    throw error;
                });
            }

            await batch.promise;
        }

        const trackId = `${job.sourceTrackId}`.split(':')[0];
        const downloadInfo = batch.fileInfoBySourceTrackId.get(job.sourceTrackId) ?? batch.fileInfoByTrackId.get(trackId);
        if (downloadInfo) return downloadInfo;

        this.logger.warn('Track file info missing in batch response, falling back to single request', { trackId: job.sourceTrackId });
        return (await this.tracksAPI.getFileInfo(job.sourceTrackId, { codecs: useMP3 ? ['mp3'] : undefined, signal })).downloadInfo;
    }

    updateJobStatus(job, status, extra = {}) {
        const previousStatus = job.status;
        job.status = status;

        const payload = {
            stage: extra.stage,
            trackId: job.trackId,
            sourceTrackId: job.sourceTrackId,
            status,
            previousStatus,
            metrics: extra.metrics,
        };

        this.logger.info('Track pipeline transition', payload);
        this.emit('stage-transition', payload);
    }

    getWeightedJobProgress(job) {
        return Object.entries(PIPELINE_PROGRESS_WEIGHTS).reduce((total, [stage, weight]) => total + (job.stageProgress?.[stage] ?? 0) * weight, 0);
    }

    updateJobProgress(job, stage, progress, reporter) {
        const safeProgress = Math.min(Math.max(progress, 0), 1);
        job.stageProgress = {
            metadata: 0,
            download: 0,
            ffmpeg: 0,
            ...job.stageProgress,
            [stage]: safeProgress,
        };

        const weightedProgress = Math.min(Math.max(this.getWeightedJobProgress(job), 0), 1);
        job.progress = weightedProgress;
        reporter?.(job, weightedProgress);
        this.emit('progress', {
            trackId: job.trackId,
            sourceTrackId: job.sourceTrackId,
            status: job.status,
            stage,
            stageProgress: safeProgress,
            progress: weightedProgress,
        });
    }

    completeJobProgress(job, reporter) {
        job.stageProgress = {
            metadata: 1,
            download: 1,
            ffmpeg: 1,
        };
        job.progress = 1;
        reporter?.(job, 1);
        this.emit('progress', {
            trackId: job.trackId,
            sourceTrackId: job.sourceTrackId,
            status: job.status,
            progress: 1,
        });
    }

    attachStageLogging(stage) {
        stage.on('queued', (job, metrics) => {
            this.logger.info('Track pipeline queued', { stage: stage.name, trackId: job.trackId, metrics });
        });
        stage.on('retry', (job, error, attempt, metrics) => {
            job.retries[stage.name] = attempt;
            this.logger.warn('Track pipeline retry', { stage: stage.name, trackId: job.trackId, attempt, error: error?.message, metrics });
        });
        stage.on('failed', (job, error, metrics) => {
            this.logger.error('Track pipeline failed', { stage: stage.name, trackId: job.trackId, error: error?.message, stack: error?.stack, metrics });
        });
        stage.on('concurrency-change', (changedStage, previousConcurrency, nextConcurrency, reason, metrics) => {
            this.logger.info('Track pipeline concurrency changed', { stage: changedStage.name, previousConcurrency, nextConcurrency, reason, metrics });
        });
    }

    createProgressReporter(totalTracks, callback) {
        const progressByTrack = new Map();

        return (job, progress, label) => {
            progressByTrack.set(job.jobId, progress);

            const total = Array.from(progressByTrack.values()).reduce((a, b) => a + b, 0);
            const completed = Array.from(progressByTrack.values()).filter((value) => value >= 1).length;
            const overall = totalTracks > 0 ? total / totalTracks : 0;
            callback(overall, overall, label ?? `${completed} / ${totalTracks}`);
        };
    }

    async handleJobFailure(job, error, reporter) {
        job.status = 'failed';
        job.error = error;
        this.completeJobProgress(job, reporter);
        await this.cleanupJobTemp(job);
    }

    async cleanupJobTemp(job) {
        if (!job?.tempDir) return true;

        try {
            await this.removeIfExistsDir(job.tempDir);
            return !fsSync.existsSync(job.tempDir);
        } catch (error) {
            this.logger.warn(`Failed to cleanup temp directory for ${job.trackId}:`, error);
            return false;
        }
    }

    async cleanupJobsTemp(jobs) {
        const cleanupResults = await Promise.all(jobs.map((job) => this.cleanupJobTemp(job)));
        const remainingTempDirs = jobs.filter((job, index) => job?.tempDir && cleanupResults[index] === false && fsSync.existsSync(job.tempDir));

        if (remainingTempDirs.length > 0) {
            this.logger.warn('Some track temp directories were not deleted', {
                tempDirs: remainingTempDirs.map((job) => job.tempDir),
            });
        }
    }

    async writePlaylistM3U(jobs, subDirName) {
        const completedJobs = jobs.filter((job) => job.status === 'done' && job.outputFile);
        if (completedJobs.length === 0) return;

        const playlistDir = path.dirname(completedJobs[0].outputFile);
        const playlistName = removeInvalidCharsFromFilename(subDirName || 'playlist');
        const playlistPath = path.join(playlistDir, `${playlistName}.m3u`);
        const lines = ['#EXTM3U'];

        completedJobs.forEach((job) => {
            lines.push(path.basename(job.outputFile).replaceAll('\\', '/'));
        });

        await fs.writeFile(playlistPath, lines.join('\n') + '\n', 'utf8');
        this.logger.info('Playlist M3U saved', { playlistPath, tracks: completedJobs.length });
    }

    createPipelineStages({ options, useMP3, downloadReporter }) {
        let downloadStage;
        let ffmpegStage;

        // Downstream push is awaited by upstream handlers. That is the backpressure boundary:
        // when ffmpeg is full, download workers keep only their bounded temp files and stop
        // accepting more metadata work until capacity opens again.
        ffmpegStage = new PipelineStage({
            name: 'ffmpeg',
            concurrency: options.ffmpegConcurrency,
            maxQueued: options.ffmpegMaxQueued,
            retries: options.ffmpegRetries,
            retryDelayMs: options.retryDelayMs,
            logger: this.logger,
            signal: options.signal,
            handler: async (job, { signal, metrics }) => {
                await this.processFfmpegJob(job, { signal, metrics, reporter: downloadReporter });
            },
        });

        downloadStage = new PipelineStage({
            name: 'download',
            concurrency: options.downloadConcurrency,
            maxQueued: options.downloadMaxQueued,
            retries: options.downloadRetries,
            retryDelayMs: options.retryDelayMs,
            logger: this.logger,
            signal: options.signal,
            handler: async (job, { signal, metrics }) => {
                await this.processDownloadJob(job, {
                    signal,
                    metrics,
                    reporter: downloadReporter,
                    ffmpegStage,
                });
            },
        });

        const metadataStage = new PipelineStage({
            name: 'metadata',
            concurrency: options.metadataConcurrency,
            maxQueued: options.metadataMaxQueued,
            retries: options.metadataRetries,
            retryDelayMs: options.retryDelayMs,
            logger: this.logger,
            signal: options.signal,
            handler: async (job, { signal, metrics }) => {
                await this.processMetadataJob(job, {
                    signal,
                    metrics,
                    useMP3,
                    reporter: downloadReporter,
                    downloadStage,
                });
            },
        });

        [metadataStage, downloadStage, ffmpegStage].forEach((stage) => {
            this.attachStageLogging(stage);
            stage.on('failed', (job, error) => {
                void this.handleJobFailure(job, error, downloadReporter);
            });
        });

        return {
            metadataStage,
            downloadStage,
            ffmpegStage,
        };
    }

    logPipelineQueueMetrics(stages, jobs) {
        const stageMetrics = Object.fromEntries(stages.map((stage) => [stage.name, stage.getStats()]));

        this.logger.info('Track pipeline queue metrics', {
            tracksCount: jobs.length,
            completed: jobs.filter((job) => job.status === 'done').length,
            failed: jobs.filter((job) => job.status === 'failed').length,
            stages: stageMetrics,
        });
    }

    startAdaptiveConcurrency(stages, options) {
        if (!options.adaptiveConcurrency) return () => {};

        const stageConfigs = {
            metadata: {
                min: options.metadataMinConcurrency,
                max: options.metadataMaxConcurrency,
                step: 2,
                increaseUtilization: 0.85,
                decreaseUtilization: 0.35,
            },
            download: {
                min: options.downloadMinConcurrency,
                max: options.downloadMaxConcurrency,
                step: 4,
                increaseUtilization: 0.85,
                decreaseUtilization: 0.25,
                underutilizedWindowsToDecrease: 3,
            },
            ffmpeg: {
                min: options.ffmpegMinConcurrency,
                max: options.ffmpegMaxConcurrency,
                step: 1,
                increaseUtilization: 0.75,
                decreaseUtilization: 0.25,
                underutilizedWindowsToDecrease: 3,
            },
        };
        const state = new Map(
            stages.map((stage) => [
                stage.name,
                {
                    stats: stage.getStats(),
                    throughput: 0,
                    lastDirection: null,
                    lastChangedAt: 0,
                    underutilizedWindows: 0,
                },
            ]),
        );

        const tuneStage = (stage) => {
            const config = stageConfigs[stage.name];
            const stageState = state.get(stage.name);
            if (!config || !stageState) return;

            const stats = stage.getStats();
            const previousStats = stageState.stats;
            const durationMs = stats.durationMs - previousStats.durationMs;
            if (durationMs <= 0) return;

            const workerBusyMs = stats.workerBusyMs - previousStats.workerBusyMs;
            const totalWorkerMs = stats.totalWorkerMs - previousStats.totalWorkerMs;
            const finishedJobs = stats.finishedJobs - previousStats.finishedJobs;
            const failedJobs = stats.failedJobs - previousStats.failedJobs;
            const retries = stats.retries - previousStats.retries;
            const backpressureWaitMs = stats.backpressureWaitMs - previousStats.backpressureWaitMs;
            const fullQueueWaits = stats.fullQueueWaits - previousStats.fullQueueWaits;
            const utilization = totalWorkerMs > 0 ? workerBusyMs / totalWorkerMs : 0;
            const throughput = finishedJobs / (durationMs / 1000);
            const hasPressure = stats.finalQueued > 0 || stats.finalRunning >= stage.concurrency || backpressureWaitMs > 0 || fullQueueWaits > 0;
            const hasErrors = failedJobs > 0 || retries > 0;
            const isUnderutilized = !hasPressure && utilization <= config.decreaseUtilization && stats.finalRunning < stage.concurrency;
            const now = Date.now();
            const isCoolingDown = now - stageState.lastChangedAt < options.adaptiveConcurrencyCooldownMs;
            let nextConcurrency = stage.concurrency;
            let reason;

            stageState.underutilizedWindows = isUnderutilized ? stageState.underutilizedWindows + 1 : 0;

            if (hasErrors && stage.concurrency > config.min) {
                nextConcurrency = Math.max(config.min, stage.concurrency - config.step);
                reason = 'errors';
            } else if (!isCoolingDown) {
                if (hasPressure && utilization >= config.increaseUtilization && stage.concurrency < config.max) {
                    nextConcurrency = Math.min(config.max, stage.concurrency + config.step);
                    reason = 'pressure';
                } else if (stageState.underutilizedWindows >= config.underutilizedWindowsToDecrease && stage.concurrency > config.min) {
                    nextConcurrency = Math.max(config.min, stage.concurrency - config.step);
                    reason = 'underutilized';
                }
            }

            if (nextConcurrency !== stage.concurrency) {
                const previousConcurrency = stage.concurrency;
                stage.setConcurrency(nextConcurrency, reason);
                stageState.lastDirection = nextConcurrency > previousConcurrency ? 'up' : 'down';
                stageState.lastChangedAt = now;
                stageState.underutilizedWindows = 0;
            }

            stageState.stats = stage.getStats();
            stageState.throughput = throughput;
        };

        const interval = setInterval(() => {
            if (options.signal?.aborted) return;
            stages.forEach(tuneStage);
        }, options.adaptiveConcurrencyIntervalMs);
        interval.unref?.();

        return () => clearInterval(interval);
    }

    async processMetadataJob(job, { signal, metrics, useMP3, reporter, downloadStage }) {
        throwIfAborted(signal);
        this.updateJobStatus(job, 'fetching', { stage: 'metadata', metrics });
        this.updateJobProgress(job, 'metadata', 0.25, reporter);

        const [trackDownloadInfo, tracksMeta] = await Promise.all([
            this.getJobFileInfo(job, { useMP3, signal }),
            this.tracksAPI.getTracksMeta(job.sourceTrackId, { signal }),
        ]);

        const trackMeta = tracksMeta?.[0];

        if (!trackDownloadInfo?.url || !trackMeta) {
            throw new Error(`Failed to fetch track metadata or download URL: ${job.sourceTrackId}`);
        }

        job.trackId = trackDownloadInfo.trackId ?? `${job.sourceTrackId}`.split(':')[0];
        job.tempDirId = `${job.trackId}-${job.jobId}`;
        job.metadata = trackMeta;
        job.downloadUrl = trackDownloadInfo.url;
        job.codec = trackDownloadInfo.codec;
        job.bitrate = trackDownloadInfo.bitrate;
        job.transport = trackDownloadInfo.transport;
        job.key = trackDownloadInfo.key;
        job.fileExtension = getFileExtensionFromCodec(job.codec);

        const useSyncLyrics = store_js_1.getModSettings()?.downloader?.useSyncLyrics ?? true;
        if (useSyncLyrics && job.metadata?.lyricsInfo?.hasAvailableSyncLyrics) {
            try {
                job.lyricsMeta = await this.tracksAPI.getSyncLyrics(job.trackId, { signal });
            } catch (error) {
                this.logger.warn(`Failed to fetch ${job.trackId} sync lyrics`, error);
            }
        }

        this.updateJobProgress(job, 'metadata', 1, reporter);
        await downloadStage.push(job);
    }

    async processDownloadJob(job, { signal, metrics, reporter, ffmpegStage }) {
        throwIfAborted(signal);
        this.updateJobStatus(job, 'downloading', { stage: 'download', metrics });

        const data = this.getJobData(job);
        job.outputFile = await this.getFinalTrackPath(data, job.fileExtension);
        if (!job.outputFile) {
            throw this.createNoRetryError(`Track download canceled: ${job.trackId}`);
        }

        job.tempDir = await this.createTempDirPath(data);
        if (!job.tempDir) {
            throw new Error(`Failed to create temp directory for track: ${job.trackId}`);
        }

        job.tempFile = path.join(job.tempDir, removeInvalidCharsFromFilename(`${job.trackId}.${job.codec}`));
        this.updateJobProgress(job, 'download', 0.05, reporter);

        const downloaded = await this.downloadTrackFile(
            data,
            job.tempFile,
            (progressRenderer) => {
                const downloadProgress = Math.min(Math.max(progressRenderer / 0.8, 0), 1);
                this.updateJobProgress(job, 'download', 0.05 + downloadProgress * 0.85, reporter);
            },
            { signal },
        );

        if (!downloaded) {
            throw new Error(`Failed to download track file: ${job.trackId}`);
        }

        if (data.transport === 'encraw') {
            this.updateJobStatus(job, 'decrypting', { stage: 'download', metrics });
        }

        const coverBuffer = await this.tracksAPI.fetchTrackCover(data.track, 400, { signal });
        if (coverBuffer) {
            await fs.writeFile(path.join(job.tempDir, '400x400.jpg'), coverBuffer);
            this.logger.info('Cover saved to temp directory');
        }

        this.updateJobProgress(job, 'download', 1, reporter);
        await ffmpegStage.push(job);
    }

    async processFfmpegJob(job, { signal, metrics, reporter }) {
        throwIfAborted(signal);
        this.updateJobStatus(job, 'ffmpeg', { stage: 'ffmpeg', metrics });
        this.updateJobProgress(job, 'ffmpeg', 0, reporter);

        await this.ffmpeg.extractFromMp4(this.getJobData(job), job.outputFile, job.tempDir, job.tempFile, job.fileExtension, job.lyricsMeta?.lrc, { signal });

        this.updateJobStatus(job, 'done', { stage: 'ffmpeg', metrics });
        this.updateJobProgress(job, 'ffmpeg', 1, reporter);
        this.logger.info('Track downloaded', { trackId: job.trackId, outputFile: job.outputFile });

        await this.cleanupJobTemp(job);
    }

    async runTrackPipeline(trackIds, subDirName, callback, options = {}) {
        const pipelineOptions = this.createPipelineOptions(options);
        const controller = pipelineOptions.signal ? null : new AbortController();
        pipelineOptions.signal = pipelineOptions.signal ?? controller.signal;
        if (controller) {
            this.activeAbortControllers.add(controller);
        }

        const useMP3 = store_js_1.getModSettings()?.downloader?.useMP3 ?? false;
        const normalizedSubDirName = subDirName ? removeInvalidCharsFromFilename(subDirName) : undefined;
        const reporter = this.createProgressReporter(trackIds.length, callback);

        const jobs = trackIds.map((trackId, index) => ({
            jobId: `${index}:${trackId}`,
            trackId: `${trackId}`.split(':')[0],
            sourceTrackId: trackId,
            status: 'queued',
            subDirName: normalizedSubDirName,
            outputDir: pipelineOptions.outputDir,
            retries: {},
            progress: 0,
            stageProgress: {
                metadata: 0,
                download: 0,
                ffmpeg: 0,
            },
        }));

        this.createFileInfoBatches(jobs);
        jobs.forEach((job) => this.updateJobProgress(job, 'metadata', 0, reporter));

        const { metadataStage, downloadStage, ffmpegStage } = this.createPipelineStages({
            options: pipelineOptions,
            useMP3,
            downloadReporter: reporter,
        });
        const stages = [metadataStage, downloadStage, ffmpegStage];
        const stopAdaptiveConcurrency = this.startAdaptiveConcurrency(stages, pipelineOptions);

        try {
            for (const job of jobs) {
                await metadataStage.push(job);
            }

            await metadataStage.onIdle();
            metadataStage.stopMetrics();
            await downloadStage.onIdle();
            downloadStage.stopMetrics();
            await ffmpegStage.onIdle();
            ffmpegStage.stopMetrics();
        } finally {
            stopAdaptiveConcurrency();
            stages.forEach((stage) => stage.stopMetrics());
            this.logPipelineQueueMetrics(stages, jobs);
            if (pipelineOptions.signal?.aborted) {
                await this.cleanupJobsTemp(jobs);
            }
            if (controller) {
                this.activeAbortControllers.delete(controller);
            }
        }

        const failedJobs = jobs.filter((job) => job.status === 'failed');
        if (failedJobs.length > 0) {
            this.logger.warn('Track pipeline completed with failed jobs', {
                failed: failedJobs.map((job) => ({ trackId: job.trackId, error: job.error?.message })),
            });
        }

        return jobs;
    }

    async downloadMultipleTracks(trackIds, subDirName, callback, options = {}) {
        await this.waitUntilReady();

        const downloaderSettings = store_js_1.getModSettings()?.downloader;
        const hasDefaultOutputPath = downloaderSettings?.useDefaultPath && downloaderSettings?.defaultPath;
        let outputDir = options.outputDir;

        if (!hasDefaultOutputPath && !outputDir) {
            this.logger.log('No default output path set, asking user to select output directory.');
            callback(0, 0, 'Выберите папку...');
            outputDir = await this.handleOutputDirDialog(downloaderSettings?.defaultPath);
            if (!outputDir) {
                setTimeout(() => callback(-1, -1), 1000);
                return;
            }
        }

        this.logger.log(`Downloading multiple tracks: ${trackIds?.length}`);

        callback(0, 0, 'Подготовка...');

        const jobs = await this.runTrackPipeline(trackIds, subDirName, callback, {
            ...options,
            outputDir,
        });
        if (options.signal?.aborted) {
            this.logger.info('Multiple track download canceled');
            return;
        }

        if (downloaderSettings?.addM3UToPlaylists) {
            await this.writePlaylistM3U(jobs, subDirName);
        }

        this.logger.log('All tracks downloaded');

        setTimeout(() => callback(-1, -1), 5000);
    }

    async importTracksFromUrl(
        rawURL,
        callback = (x, b, s) => {
            return null;
        },
        options = {},
    ) {
        if (!rawURL || typeof rawURL !== 'string') {
            throw new Error('Track or playlist URL is required');
        }

        const normalizedURL = rawURL.trim();
        if (!/^https?:\/\//i.test(normalizedURL)) {
            throw new Error('Only HTTP(S) links are supported');
        }

        if (isYandexMusicLink(normalizedURL)) {
            throw new Error('Ссылки на Яндекс Музыку здесь не поддерживаются');
        }

        return await this.ytDlp.downloadTracksFromUrl(normalizedURL, callback, options);
    }

    async prefetchTracksFromUrl(rawURL) {
        if (!rawURL || typeof rawURL !== 'string') {
            throw new Error('Track or playlist URL is required');
        }

        const normalizedURL = rawURL.trim();
        if (!/^https?:\/\//i.test(normalizedURL)) {
            throw new Error('Only HTTP(S) links are supported');
        }

        if (isYandexMusicLink(normalizedURL)) {
            throw new Error('РЎСЃС‹Р»РєРё РЅР° РЇРЅРґРµРєСЃ РњСѓР·С‹РєСѓ Р·РґРµСЃСЊ РЅРµ РїРѕРґРґРµСЂР¶РёРІР°СЋС‚СЃСЏ');
        }

        return await this.ytDlp.prefetchTracksFromUrl(normalizedURL);
    }

    async importTrackFromUrl(
        rawURL,
        callback = (x, b, s) => {
            return null;
        },
        options = {},
    ) {
        const importedTracks = await this.importTracksFromUrl(rawURL, callback, options);
        const [firstTrack] = importedTracks.tracks;

        if (!firstTrack) {
            throw new Error('Failed to import audio from URL');
        }

        return firstTrack;
    }

    async downloadTrack(data, callback, options = {}) {
        const useSyncLyrics = store_js_1.getModSettings()?.downloader?.useSyncLyrics ?? true;

        let lyricsMeta = undefined;

        const fileExtension = getFileExtensionFromCodec(data.codec);

        try {
            if (useSyncLyrics && data.track?.lyricsInfo?.hasAvailableSyncLyrics) {
                lyricsMeta = await this.tracksAPI.getSyncLyrics(data.trackId, options);
            }
        } catch (err) {
            this.logger.warn(`Failed to fetch ${data.trackId} sync lyrics`, err);
        }

        const finalTrackPath = await this.getFinalTrackPath(data, fileExtension);
        if (!finalTrackPath) return;

        const tempDirPath = await this.createTempDirPath(data);
        if (!tempDirPath) return;

        const tempTrackPath = path.join(tempDirPath, removeInvalidCharsFromFilename(`${data.trackId}.${data.codec}`));

        callback(0, 0);

        try {
            const downloaded = await this.downloadTrackFile(data, tempTrackPath, callback, options);
            if (!downloaded) {
                throw new Error(`Failed to download track file: ${data.trackId}`);
            }

            const coverBuffer = await this.tracksAPI.fetchTrackCover(data.track, 400, options);

            this.logger.info('Got cover');
            if (coverBuffer) {
                await fs.writeFile(path.join(tempDirPath, '400x400.jpg'), coverBuffer);
                this.logger.info('Cover saved to temp directory');
            }

            await this.ffmpeg.extractFromMp4(data, finalTrackPath, tempDirPath, tempTrackPath, fileExtension, lyricsMeta?.lrc, options);

            callback(1.0, 1.0);
            this.logger.info('Track downloaded');
        } finally {
            await this.removeIfExistsDir(tempDirPath);
        }
    }
}

exports.TrackDownloader = TrackDownloader;
