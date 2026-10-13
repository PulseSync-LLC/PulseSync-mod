const fs = require('node:fs');
const fsp = fs.promises;
const path = require('node:path');
const os = require('node:os');
const http = require('node:http');
const { execFileSync } = require('node:child_process');
const { createHash } = require('node:crypto');
const { performance, monitorEventLoopDelay } = require('node:perf_hooks');
const { setTimeout: delay } = require('node:timers/promises');

const root = path.resolve(__dirname, '../..');
const args = process.argv.slice(2);
const option = (name, fallback) => {
    const index = args.indexOf(name);
    return index < 0 ? fallback : args[index + 1];
};
const baseline = execFileSync('git', ['rev-parse', '--verify', `${option('--baseline', 'HEAD')}^{commit}`], { cwd: root, encoding: 'utf8' }).trim();
const runs = Number(option('--runs', '3'));
if (!Number.isInteger(runs) || runs < 1 || runs > 20) throw new Error('--runs must be between 1 and 20');
const output = path.resolve(root, option('--output', 'temp/track-downloader-benchmark/comparison.json'));
const quietLogger = class {
    log() {}
    info() {}
    warn() {}
    error() {}
};
const payload = Buffer.alloc(256 * 1024, 0x5a);
const payloadHash = createHash('sha256').update(payload).digest('hex');
const sourcePaths = ['src/main/lib/trackDownloader/trackDownloader.js', 'src/main/lib/trackDownloader/pipelineStage.js', 'src/main/lib/utils.js'];

function loadDownloader(ref) {
    const cache = new Map();
    const sources = new Map();
    const settings = { downloader: { useSyncLyrics: true } };
    const stubs = {
        '../../packages/logger/Logger.js': { Logger: quietLogger },
        '../store.js': { getModSettings: () => settings },
        electron: { app: { getPath: () => os.tmpdir(), getAppPath: () => root } },
        './tracksApiWrapper.js': { TracksApiWrapper: class {} },
        './ffmpegWrapper.js': { FfmpegWrapper: class {} },
        './ytDlpWrapper.js': { YtDlpWrapper: class {} },
    };
    function load(relativePath) {
        if (cache.has(relativePath)) return cache.get(relativePath).exports;
        const source = ref
            ? execFileSync('git', ['show', `${ref}:${relativePath}`], { cwd: root, encoding: 'utf8', maxBuffer: 4 * 1024 * 1024 })
            : fs.readFileSync(path.join(root, relativePath), 'utf8');
        sources.set(relativePath, source);
        const module = { exports: {} };
        cache.set(relativePath, module);
        const filename = path.join(root, relativePath);
        const localRequire = (request) => {
            if (Object.hasOwn(stubs, request)) return stubs[request];
            if (!request.startsWith('.')) return require(request);
            const dependency = path.relative(root, path.resolve(path.dirname(filename), request)).replaceAll('\\', '/');
            return load(dependency);
        };
        new Function('require', 'module', 'exports', '__filename', '__dirname', source)(localRequire, module, module.exports, filename, path.dirname(filename));
        return module.exports;
    }
    const { TrackDownloader } = load(sourcePaths[0]);
    const sourceHash = createHash('sha256')
        .update(
            [...sources]
                .sort()
                .map(([name, source]) => `${name}\n${source}`)
                .join('\n'),
        )
        .digest('hex');
    return { TrackDownloader, sourceHash };
}

function measureProgress(TrackDownloader, tracks) {
    const downloader = Object.create(TrackDownloader.prototype);
    // EventEmitter lazily initializes its listener storage.
    const jobs = Array.from({ length: tracks }, (_, index) => ({ jobId: String(index), metrics: {}, stageProgress: {} }));
    let callbacks = 0;
    let finalProgress = 0;
    const reporter = downloader.createProgressReporter(tracks, jobs, (value) => {
        callbacks++;
        finalProgress = value;
    });
    const cpuStart = process.cpuUsage();
    const start = performance.now();
    for (const job of jobs) downloader.updateJobProgress(job, 'metadata', 0, reporter);
    const initializationMs = performance.now() - start;
    const updates = 10000;
    for (let index = 0; index < updates; index++) {
        const job = jobs[index % tracks];
        job.metrics.downloadBytesCurrent = (job.metrics.downloadBytesCurrent || 0) + 32768;
        downloader.updateJobProgress(job, 'download', (Math.floor(index / tracks) + 1) / Math.ceil(updates / tracks), reporter);
    }
    for (const job of jobs) downloader.completeJobProgress(job, reporter);
    reporter.flush?.();
    reporter.dispose?.();
    const elapsedMs = performance.now() - start;
    const cpu = process.cpuUsage(cpuStart);
    return { tracks, updates, initializationMs, elapsedMs, cpuMs: (cpu.user + cpu.system) / 1000, callbacks, finalProgress };
}

async function measurePipeline(TrackDownloader, scenario, directory) {
    await fsp.mkdir(directory, { recursive: true });
    const inputDirectory = path.join(directory, 'input');
    const outputDirectory = path.join(directory, 'output');
    await fsp.mkdir(inputDirectory);
    await fsp.mkdir(outputDirectory);
    let requests = 0;
    let sentBytes = 0;
    let coverRequests = 0;
    const coverAttempts = new Map();
    const server = http.createServer(async (request, response) => {
        requests++;
        response.writeHead(200, { 'content-length': payload.length, 'content-type': 'audio/mpeg' });
        for (let offset = 0; offset < payload.length; offset += 32768) {
            await delay(scenario.chunkDelayMs);
            if (response.destroyed) return;
            response.write(payload.subarray(offset, offset + 32768));
            sentBytes += 32768;
        }
        response.end();
    });
    await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
    const url = `http://127.0.0.1:${server.address().port}/audio`;
    const downloader = new TrackDownloader({ webContents: { executeJavaScript: async () => 'local-benchmark', getUserAgent: () => 'benchmark' } });
    await downloader.waitUntilReady();
    const tempBytesByPath = new Map();
    let observedTempBytes = 0;
    let peakObservedTempBytes = 0;
    const setTempBytes = (filename, bytes) => {
        observedTempBytes += bytes - (tempBytesByPath.get(filename) || 0);
        tempBytesByPath.set(filename, bytes);
        peakObservedTempBytes = Math.max(peakObservedTempBytes, observedTempBytes);
    };
    const originalDownload = downloader.downloadTrackFile.bind(downloader);
    downloader.downloadTrackFile = (data, filename, callback, options) => {
        setTempBytes(filename, 0);
        return originalDownload(
            data,
            filename,
            (progress, windowProgress, metrics) => {
                setTempBytes(filename, metrics.downloadedBytes);
                callback(progress, windowProgress, metrics);
            },
            options,
        );
    };
    const originalCleanup = downloader.removeIfExistsDir.bind(downloader);
    downloader.removeIfExistsDir = async (directory) => {
        await originalCleanup(directory);
        for (const filename of tempBytesByPath.keys()) {
            if (path.dirname(filename) === directory) {
                setTempBytes(filename, 0);
                tempBytesByPath.delete(filename);
            }
        }
    };
    downloader.tracksAPI = {
        async getFileInfoBatch(ids) {
            await delay(3);
            return ids.map((trackId) => ({ trackId, url, codec: 'mp3', transport: 'raw' }));
        },
        async getTracksMeta(ids) {
            await delay(3);
            return ids.map((id) => ({ id, title: id, coverUri: `cover/${id}`, lyricsInfo: { hasAvailableSyncLyrics: scenario.lyricsMs > 0 } }));
        },
        async getSyncLyrics(id, { signal } = {}) {
            await delay(scenario.lyricsMs, undefined, { signal });
            return { lrc: '[00:00.00]Local benchmark' };
        },
        async fetchTrackCover(track, size, { signal } = {}) {
            coverRequests++;
            const attempt = coverAttempts.get(track.id) || 0;
            coverAttempts.set(track.id, attempt + 1);
            await delay(scenario.coverMs || 3, undefined, { signal });
            if (scenario.coverFailures && Number(track.id) % 4 === 0 && attempt === 0) throw new Error('Simulated cover failure');
            return Buffer.from('local benchmark cover');
        },
    };
    downloader.getFinalTrackPath = async (data) => path.join(outputDirectory, `${data.trackId}.mp3`);
    downloader.createTempDirPath = async (data) => {
        const result = path.join(inputDirectory, String(data.trackId));
        await fsp.mkdir(result, { recursive: true });
        return result;
    };
    downloader.ffmpeg.writeTrackFile = async (data, finalPath, tempDir, tempFile, extension, lyrics, { signal } = {}) => {
        await delay(scenario.finalizeMs, undefined, { signal });
        await fsp.copyFile(tempFile, finalPath);
    };
    const eventLoop = monitorEventLoopDelay({ resolution: 10 });
    eventLoop.enable();
    const cpuStart = process.cpuUsage();
    const start = performance.now();
    try {
        const result = await downloader.runTrackPipeline(
            Array.from({ length: scenario.tracks }, (_, index) => String(index + 1)),
            undefined,
            () => {},
            {
                metadataConcurrency: 4,
                downloadConcurrency: 8,
                ffmpegConcurrency: 2,
                ffmpegMaxQueued: 4,
                adaptiveConcurrency: scenario.adaptive,
                adaptiveConcurrencyIntervalMs: 100,
                adaptiveConcurrencyCooldownMs: 300,
                retryDelayMs: 10,
                auxiliaryRetryDelayMs: 10,
                maxBufferedBytes: scenario.maxBufferedBytes,
            },
        );
        const elapsedMs = performance.now() - start;
        const cpu = process.cpuUsage(cpuStart);
        eventLoop.disable();
        let verifiedFiles = 0;
        for (const job of result.jobs) {
            if (job.status !== 'done') continue;
            const hash = createHash('sha256')
                .update(await fsp.readFile(job.outputFile))
                .digest('hex');
            if (hash === payloadHash) verifiedFiles++;
        }
        return {
            elapsedMs,
            cpuMs: (cpu.user + cpu.system) / 1000,
            eventLoopP99Ms: eventLoop.percentile(99) / 1e6,
            requests,
            sentBytes,
            coverRequests,
            peakObservedTempBytes,
            verifiedFiles,
            failures: result.jobs
                .filter((job) => job.status === 'failed')
                .slice(0, 3)
                .map((job) => ({ error: job.error?.message, stack: job.error?.stack })),
            ...result.queueMetrics,
        };
    } finally {
        eventLoop.disable();
        server.closeAllConnections();
        await new Promise((resolve) => server.close(resolve));
    }
}

async function main() {
    const variants = { before: loadDownloader(baseline) };
    if (!args.includes('--baseline-only')) variants.after = loadDownloader();
    const scenarios = [
        { name: 'lyrics', tracks: 48, lyricsMs: 80, chunkDelayMs: 5, finalizeMs: 5, adaptive: false },
        { name: 'slow-finalize', tracks: 48, lyricsMs: 0, chunkDelayMs: 2, finalizeMs: 80, adaptive: true },
        { name: 'cover-retry', tracks: 16, lyricsMs: 0, chunkDelayMs: 2, finalizeMs: 5, coverMs: 80, coverFailures: true, adaptive: false },
        { name: 'disk-budget', tracks: 32, lyricsMs: 0, chunkDelayMs: 2, finalizeMs: 30, maxBufferedBytes: payload.length * 4, adaptive: false },
    ];
    const artifactRoot = path.join(root, 'temp', 'track-downloader-benchmark');
    await fsp.mkdir(artifactRoot, { recursive: true });
    const scratch = await fsp.mkdtemp(path.join(artifactRoot, 'run-'));
    const report = {
        generatedAt: new Date().toISOString(),
        baseline,
        benchmarkHash: createHash('sha256').update(fs.readFileSync(__filename)).digest('hex'),
        environment: { node: process.version, platform: process.platform, arch: process.arch, cpu: os.cpus()[0]?.model },
        limitations:
            'Synthetic localhost HTTP and real file I/O; API, lyrics, covers and FFmpeg are simulated. CPU includes the local HTTP server. No CDN or installed Electron app measurement.',
        scenarios,
        variants: Object.fromEntries(Object.entries(variants).map(([name, variant]) => [name, { sourceHash: variant.sourceHash, progress: [], pipeline: [] }])),
    };
    try {
        for (let run = 0; run < runs; run++) {
            const order = Object.entries(variants);
            if (run % 2) order.reverse();
            for (const [name, { TrackDownloader }] of order) {
                const target = report.variants[name];
                for (const tracks of [100, 1000, 5000]) target.progress.push({ run, ...measureProgress(TrackDownloader, tracks) });
                for (const scenario of scenarios) {
                    const result = await measurePipeline(TrackDownloader, scenario, path.join(scratch, `${name}-${run}-${scenario.name}`));
                    target.pipeline.push({ run, scenario: scenario.name, ...result });
                    console.log(
                        `${name} run ${run + 1} ${scenario.name}: ${result.elapsedMs.toFixed(1)} ms, ${result.requests} audio requests, ${result.verifiedFiles}/${scenario.tracks} verified files`,
                    );
                }
            }
        }
        report.valid = Object.values(report.variants).every((variant) => variant.pipeline.every((run) => run.verifiedFiles === run.tracksCount && run.failed === 0));
        report.summary = summarizeReport(report);
        console.table(report.summary);
        await fsp.mkdir(path.dirname(output), { recursive: true });
        await fsp.writeFile(output, JSON.stringify(report, null, 2) + '\n');
        console.log(`Report: ${output}`);
        if (!report.valid) throw new Error('Benchmark has failed or corrupted downloads; do not use its timings for a speed comparison');
    } finally {
        const checkedScratch = path.resolve(scratch);
        if (path.dirname(checkedScratch) !== artifactRoot || !path.basename(checkedScratch).startsWith('run-')) throw new Error('Unexpected benchmark scratch path');
        await fsp.rm(checkedScratch, { recursive: true, force: true, maxRetries: 5, retryDelay: 150 });
    }
}

function summarizeReport(report) {
    const median = (values) => {
        const sorted = [...values].sort((a, b) => a - b);
        const middle = Math.floor(sorted.length / 2);
        return sorted.length % 2 ? sorted[middle] : (sorted[middle - 1] + sorted[middle]) / 2;
    };
    const rows = [];
    const add = (name, field, select) => {
        const before = median(select(report.variants.before).map((run) => run[field]));
        const after = report.variants.after ? median(select(report.variants.after).map((run) => run[field])) : undefined;
        rows.push({
            scenario: name,
            metric: field,
            before: Number(before.toFixed(2)),
            after: after === undefined ? null : Number(after.toFixed(2)),
            changePercent: after === undefined || !before ? null : Number(((after / before - 1) * 100).toFixed(1)),
        });
    };
    for (const tracks of [100, 1000, 5000]) add(`progress-${tracks}`, 'elapsedMs', (variant) => variant.progress.filter((run) => run.tracks === tracks));
    for (const scenario of report.scenarios) {
        const select = (variant) => variant.pipeline.filter((run) => run.scenario === scenario.name);
        add(scenario.name, 'elapsedMs', select);
        add(scenario.name, 'requests', select);
        add(scenario.name, 'peakObservedTempBytes', select);
    }
    return rows;
}

if (require.main === module) {
    main().catch((error) => {
        console.error(error);
        process.exitCode = 1;
    });
}

module.exports = { loadDownloader, measurePipeline };
