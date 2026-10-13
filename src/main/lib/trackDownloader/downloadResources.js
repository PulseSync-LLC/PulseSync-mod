const { throwIfAborted } = require('./pipelineStage.js');

// Both limits are shared by the jobs of one pipeline. Waiting jobs keep their
// upstream worker slot, so the existing stage queues also bound these waiters.
class DownloadResources {
    constructor({ auxiliaryConcurrency = 8, maxBufferedBytes = 512 * 1024 * 1024 } = {}) {
        this.auxiliaryConcurrency = Math.max(1, auxiliaryConcurrency);
        this.maxBufferedBytes = Math.max(1, maxBufferedBytes);
        this.auxiliaryRunning = 0;
        this.bufferedBytes = 0;
        this.peakBufferedBytes = 0;
        this.waiters = new Set();
    }

    async waitUntil(ready, signal) {
        throwIfAborted(signal);
        while (!ready()) {
            await new Promise((resolve, reject) => {
                const finish = (error) => {
                    this.waiters.delete(wake);
                    signal?.removeEventListener('abort', abort);
                    if (error) reject(error);
                    else resolve();
                };
                const wake = () => finish();
                const abort = () => finish(signal.reason ?? new Error('Download aborted'));
                this.waiters.add(wake);
                signal?.addEventListener('abort', abort, { once: true });
                if (signal?.aborted) abort();
            });
            throwIfAborted(signal);
        }
    }

    wake() {
        [...this.waiters].forEach((resolve) => resolve());
    }

    async runAuxiliary(task, signal) {
        // Recheck after awaiting: several waiters can wake in the same turn.
        do {
            await this.waitUntil(() => this.auxiliaryRunning < this.auxiliaryConcurrency, signal);
        } while (this.auxiliaryRunning >= this.auxiliaryConcurrency);
        throwIfAborted(signal);
        this.auxiliaryRunning++;
        try {
            return await task();
        } finally {
            this.auxiliaryRunning--;
            this.wake();
        }
    }

    setJobBytes(job, bytes) {
        const previousBytes = this.bufferedBytes;
        this.bufferedBytes += bytes - (job.bufferedBytes ?? 0);
        job.bufferedBytes = bytes;
        this.peakBufferedBytes = Math.max(this.peakBufferedBytes, this.bufferedBytes);
        if (previousBytes >= this.maxBufferedBytes && this.bufferedBytes < this.maxBufferedBytes) this.wake();
    }

    waitForDownload(signal) {
        // This is a soft limit on starting transfers, not on chunks. Transfers
        // already in flight must finish so FFmpeg can drain and free disk space.
        return this.waitUntil(() => this.bufferedBytes < this.maxBufferedBytes, signal);
    }
}

module.exports = { DownloadResources };
