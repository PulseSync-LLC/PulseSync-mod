const EventEmitter = require('events');

function sleep(ms, signal) {
    if (!ms) return Promise.resolve();

    return new Promise((resolve, reject) => {
        if (signal?.aborted) {
            reject(signal.reason ?? new Error('Operation aborted'));
            return;
        }

        const abort = () => {
            clearTimeout(timeout);
            reject(signal.reason ?? new Error('Operation aborted'));
        };
        const timeout = setTimeout(() => {
            signal?.removeEventListener('abort', abort);
            resolve();
        }, ms);
        signal?.addEventListener('abort', abort, { once: true });
    });
}

function throwIfAborted(signal) {
    if (signal?.aborted) {
        throw signal.reason ?? new Error('Operation aborted');
    }
}

class PipelineStage extends EventEmitter {
    constructor({ name, concurrency = 1, maxQueued = concurrency * 2, retries = 0, retryDelayMs = 500, handler, logger, signal }) {
        super();

        this.name = name;
        this.concurrency = Math.max(1, concurrency);
        this.initialConcurrency = this.concurrency;
        this.maxQueued = Math.max(1, maxQueued);
        this.retries = Math.max(0, retries);
        this.retryDelayMs = Math.max(0, retryDelayMs);
        this.handler = handler;
        this.logger = logger;
        this.signal = signal;

        this.queue = [];
        this.running = 0;
        this.closed = false;
        this.idleResolvers = [];
        this.capacityResolvers = [];
        this.stats = {
            startedAt: Date.now(),
            stoppedAt: null,
            lastMetricsAt: Date.now(),
            queuedJobs: 0,
            startedJobs: 0,
            finishedJobs: 0,
            failedJobs: 0,
            retries: 0,
            idleMs: 0,
            saturatedMs: 0,
            workerBusyMs: 0,
            workerIdleMs: 0,
            totalWorkerMs: 0,
            backpressureWaitMs: 0,
            fullQueueWaits: 0,
            concurrencyChanges: [],
        };

        signal?.addEventListener(
            'abort',
            () => {
                this.stopMetrics();
                this.closed = true;
                this.queue.splice(0);
                this.resolveCapacityWaiters();
                this.resolveIdleWaiters();
            },
            { once: true },
        );
    }

    get metrics() {
        return {
            name: this.name,
            queued: this.queue.length,
            running: this.running,
            concurrency: this.concurrency,
            maxQueued: this.maxQueued,
        };
    }

    accountMetrics(now = Date.now()) {
        if (this.stats.stoppedAt) return;

        const elapsedMs = now - this.stats.lastMetricsAt;
        if (elapsedMs <= 0) return;

        const effectiveConcurrency = Math.max(this.concurrency, this.running);
        this.stats.workerBusyMs += this.running * elapsedMs;
        this.stats.workerIdleMs += Math.max(effectiveConcurrency - this.running, 0) * elapsedMs;
        this.stats.totalWorkerMs += effectiveConcurrency * elapsedMs;
        if (this.running === 0) {
            this.stats.idleMs += elapsedMs;
        }
        if (this.running >= this.concurrency) {
            this.stats.saturatedMs += elapsedMs;
        }
        this.stats.lastMetricsAt = now;
    }

    stopMetrics() {
        if (this.stats.stoppedAt) return;

        const now = Date.now();
        this.accountMetrics(now);
        this.stats.stoppedAt = now;
    }

    getStats() {
        const now = this.stats.stoppedAt ?? Date.now();
        const elapsedMs = this.stats.stoppedAt ? 0 : now - this.stats.lastMetricsAt;
        const effectiveConcurrency = Math.max(this.concurrency, this.running);
        const workerBusyMs = this.stats.workerBusyMs + this.running * elapsedMs;
        const workerIdleMs = this.stats.workerIdleMs + Math.max(effectiveConcurrency - this.running, 0) * elapsedMs;
        const totalWorkerMs = this.stats.totalWorkerMs + effectiveConcurrency * elapsedMs;
        const idleMs = this.stats.idleMs + (this.running === 0 ? elapsedMs : 0);
        const saturatedMs = this.stats.saturatedMs + (this.running >= this.concurrency ? elapsedMs : 0);
        const durationMs = now - this.stats.startedAt;
        const utilization = totalWorkerMs > 0 ? workerBusyMs / totalWorkerMs : 0;

        return {
            name: this.name,
            initialConcurrency: this.initialConcurrency,
            concurrency: this.concurrency,
            maxQueued: this.maxQueued,
            durationMs,
            idleMs,
            saturatedMs,
            workerBusyMs,
            workerIdleMs,
            totalWorkerMs,
            utilization: Number(utilization.toFixed(4)),
            backpressureWaitMs: this.stats.backpressureWaitMs,
            fullQueueWaits: this.stats.fullQueueWaits,
            concurrencyChanges: this.stats.concurrencyChanges,
            queuedJobs: this.stats.queuedJobs,
            startedJobs: this.stats.startedJobs,
            finishedJobs: this.stats.finishedJobs,
            failedJobs: this.stats.failedJobs,
            retries: this.stats.retries,
            finalQueued: this.queue.length,
            finalRunning: this.running,
        };
    }

    setConcurrency(concurrency, reason = 'adaptive') {
        const nextConcurrency = Math.max(1, Math.floor(concurrency));
        if (nextConcurrency === this.concurrency || this.stats.stoppedAt) return;

        this.accountMetrics();
        const previousConcurrency = this.concurrency;
        this.concurrency = nextConcurrency;
        this.stats.concurrencyChanges.push({
            atMs: Date.now() - this.stats.startedAt,
            from: previousConcurrency,
            to: nextConcurrency,
            reason,
        });
        this.emit('concurrency-change', this, previousConcurrency, nextConcurrency, reason, this.metrics);
        this.resolveCapacityWaiters();
        this.drain();
    }

    async push(job) {
        throwIfAborted(this.signal);

        while (!this.closed && this.queue.length >= this.maxQueued) {
            this.stats.fullQueueWaits++;
            const waitStartedAt = Date.now();
            await new Promise((resolve) => this.capacityResolvers.push(resolve));
            this.stats.backpressureWaitMs += Date.now() - waitStartedAt;
            throwIfAborted(this.signal);
        }

        if (this.closed) {
            throw this.signal?.reason ?? new Error(`Pipeline stage ${this.name} is closed`);
        }

        this.accountMetrics();
        this.queue.push(job);
        this.stats.queuedJobs++;
        this.emit('queued', job, this.metrics);
        this.drain();
    }

    async onIdle() {
        if (this.queue.length === 0 && this.running === 0) return;
        await new Promise((resolve) => this.idleResolvers.push(resolve));
    }

    drain() {
        while (!this.closed && this.running < this.concurrency && this.queue.length > 0) {
            this.accountMetrics();
            const job = this.queue.shift();
            this.running++;
            this.resolveCapacityWaiters();

            void this.runJob(job)
                .catch((error) => {
                    this.stats.failedJobs++;
                    this.emit('failed', job, error, this.metrics);
                })
                .finally(() => {
                    this.accountMetrics();
                    this.running--;
                    this.resolveCapacityWaiters();
                    this.resolveIdleWaiters();
                    this.drain();
                });
        }
    }

    async runJob(job) {
        let attempt = 0;

        while (true) {
            throwIfAborted(this.signal);

            try {
                this.stats.startedJobs++;
                this.emit('started', job, this.metrics);
                await this.handler(job, { attempt, signal: this.signal, metrics: this.metrics });
                this.stats.finishedJobs++;
                this.emit('finished', job, this.metrics);
                return;
            } catch (error) {
                attempt++;

                if (error?.noRetry || attempt > this.retries || this.signal?.aborted) {
                    throw error;
                }

                this.stats.retries++;
                this.emit('retry', job, error, attempt, this.metrics);
                await sleep(this.retryDelayMs * attempt, this.signal);
            }
        }
    }

    resolveCapacityWaiters() {
        const waiters = this.capacityResolvers.splice(0);
        waiters.forEach((resolve) => resolve());
    }

    resolveIdleWaiters() {
        if (this.queue.length !== 0 || this.running !== 0) return;

        const waiters = this.idleResolvers.splice(0);
        waiters.forEach((resolve) => resolve());
    }
}

module.exports = {
    PipelineStage,
    throwIfAborted,
};
