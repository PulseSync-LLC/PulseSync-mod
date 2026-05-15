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

        signal?.addEventListener(
            'abort',
            () => {
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

    async push(job) {
        throwIfAborted(this.signal);

        while (!this.closed && this.queue.length >= this.maxQueued) {
            await new Promise((resolve) => this.capacityResolvers.push(resolve));
            throwIfAborted(this.signal);
        }

        if (this.closed) {
            throw this.signal?.reason ?? new Error(`Pipeline stage ${this.name} is closed`);
        }

        this.queue.push(job);
        this.emit('queued', job, this.metrics);
        this.drain();
    }

    async onIdle() {
        if (this.queue.length === 0 && this.running === 0) return;
        await new Promise((resolve) => this.idleResolvers.push(resolve));
    }

    drain() {
        while (!this.closed && this.running < this.concurrency && this.queue.length > 0) {
            const job = this.queue.shift();
            this.running++;
            this.resolveCapacityWaiters();

            void this.runJob(job)
                .catch((error) => {
                    this.emit('failed', job, error, this.metrics);
                })
                .finally(() => {
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
                this.emit('started', job, this.metrics);
                await this.handler(job, { attempt, signal: this.signal, metrics: this.metrics });
                this.emit('finished', job, this.metrics);
                return;
            } catch (error) {
                attempt++;

                if (error?.noRetry || attempt > this.retries || this.signal?.aborted) {
                    throw error;
                }

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
