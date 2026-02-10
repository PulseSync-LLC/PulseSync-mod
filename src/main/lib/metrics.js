'use strict';

const { app } = require('electron');
const path = require('path');
const fs = require('fs/promises');
const crypto = require('crypto');
const Logger_1 = require('../packages/logger/Logger');

const logger = new Logger_1.Logger('Metrics');

function uuidV4() {
    if (typeof crypto.randomUUID === 'function') return crypto.randomUUID();
    const b = crypto.randomBytes(16);
    b[6] = (b[6] & 0x0f) | 0x40;
    b[8] = (b[8] & 0x3f) | 0x80;
    const hex = b.toString('hex');
    const uuid = hex.slice(0, 8) + '-' + hex.slice(8, 12) + '-' + hex.slice(12, 16) + '-' + hex.slice(16, 20) + '-' + hex.slice(20);
    logger.debug('Generated UUID:', uuid);
    return uuid;
}

async function ensureDir(dir) {
    await fs.mkdir(dir, { recursive: true });
}

async function readJsonSafe(filePath) {
    try {
        const raw = await fs.readFile(filePath, 'utf8');
        logger.debug('Read JSON from:', filePath);
        return JSON.parse(raw);
    } catch (error) {
        logger.debug('Failed to read JSON from', filePath, ':', error.message);
        return null;
    }
}

async function writeJsonAtomic(filePath, data) {
    const dir = path.dirname(filePath);
    await ensureDir(dir);

    const tmp = filePath + '.tmp';
    const json = JSON.stringify(data);

    await fs.writeFile(tmp, json, 'utf8');

    try {
        try {
            await fs.unlink(filePath);
        } catch {}
        await fs.rename(tmp, filePath);
        logger.debug('Wrote JSON to:', filePath);
        return;
    } catch (error) {
        logger.warn('Failed to rename temp file, copying instead:', error.message);
        try {
            await fs.copyFile(tmp, filePath);
        } finally {
            try {
                await fs.unlink(tmp);
            } catch {}
        }
    }
}

function getMetricsStatePath() {
    return path.join(app.getPath('userData'), 'metrics-state.json');
}

async function getOrCreateInstallId(statePath) {
    const state = (await readJsonSafe(statePath)) || {};
    if (typeof state.install_id === 'string' && state.install_id.length > 10) {
        return { state, installId: state.install_id, isNew: false };
    }
    const installId = uuidV4();
    const newState = { ...state, install_id: installId, install_created_at_ms: Date.now() };
    await writeJsonAtomic(statePath, newState);
    return { state: newState, installId, isNew: true };
}

function nowMs() {
    return Date.now();
}

function shouldSendHeartbeat(lastSentAtMs, intervalMs) {
    if (!lastSentAtMs || typeof lastSentAtMs !== 'number') return true;
    return nowMs() - lastSentAtMs >= intervalMs;
}

function sleep(ms) {
    return new Promise((r) => setTimeout(r, ms));
}

function isRetryableStatus(status) {
    return status === 429 || status === 500 || status === 502 || status === 503 || status === 504;
}

async function sendEvent({ endpointUrl, apiKey, payload, timeoutMs = 10_000, maxRetries = 2 }) {
    const f = globalThis.fetch;
    if (typeof f !== 'function') {
        throw new Error('fetch is not available in this runtime (consider upgrading Node/Electron or using undici)');
    }

    let attempt = 0;
    let lastErr = null;

    while (attempt <= maxRetries) {
        const controller = new AbortController();
        const timer = setTimeout(() => controller.abort(), timeoutMs);

        try {
            logger.debug(`Sending event (attempt ${attempt + 1}/${maxRetries + 1}):`, payload.event);
            const res = await f(endpointUrl, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    accept: 'application/json',
                    ...(apiKey ? { authorization: `Bearer ${apiKey}` } : {}),
                },
                body: JSON.stringify(payload),
                signal: controller.signal,
            });

            if (!res.ok) {
                const text = await res.text().catch(() => '');
                const err = new Error(`Metrics send failed: ${res.status} ${res.statusText} ${text}`.trim());
                if (attempt < maxRetries && isRetryableStatus(res.status)) {
                    lastErr = err;
                    attempt += 1;
                    logger.warn(`Event send failed with retryable status ${res.status}, retrying...`);
                    await sleep(300 * Math.pow(3, attempt - 1));
                    continue;
                }
                logger.error('Event send failed:', err.message);
                throw err;
            }

            logger.debug('Event sent successfully:', payload.event);
            return;
        } catch (e) {
            lastErr = e;
            const msg = String(e && e.message ? e.message : e);
            const retryable = msg.includes('aborted') || msg.includes('AbortError') || msg.toLowerCase().includes('network') || msg.toLowerCase().includes('fetch');

            if (attempt < maxRetries && retryable) {
                attempt += 1;
                logger.warn(`Event send encountered retryable error: ${msg}, retrying...`);
                await sleep(300 * Math.pow(3, attempt - 1));
                continue;
            }
            logger.error('Event send failed with non-retryable error:', msg);
            throw e;
        } finally {
            clearTimeout(timer);
        }
    }

    logger.error('Event send failed after all retries');
    throw lastErr || new Error('Metrics send failed');
}

async function sendEventWithFallback({ primaryUrl, fallbackUrl, apiKey, payload, timeoutMs = 10_000, maxRetries = 2 }) {
    try {
        logger.debug('Attempting to send event to primary endpoint:', payload.event);
        await sendEvent({ endpointUrl: primaryUrl, apiKey, payload, timeoutMs, maxRetries });
        return;
    } catch (primaryError) {
        if (!fallbackUrl) {
            logger.error('Primary endpoint failed and no fallback URL available');
            throw primaryError;
        }

        logger.warn('Primary endpoint failed, attempting fallback endpoint:', primaryError.message);

        try {
            await sendEvent({ endpointUrl: fallbackUrl, apiKey, payload, timeoutMs, maxRetries });
            logger.info('Event sent successfully to fallback endpoint:', payload.event);
            return;
        } catch (fallbackError) {
            logger.error('Both primary and fallback endpoints failed');
            throw fallbackError;
        }
    }
}

function buildCommonPayload({ installId, appName, modVersion }) {
    return {
        ts: new Date().toISOString(),
        install_id: installId,
        app_name: appName,
        app_version: app.getVersion(),
        mod_version: modVersion || null,
        platform: process.platform,
        arch: process.arch,
    };
}

let heartbeatTimer = null;
let heartbeatStopped = false;
let heartbeatInFlight = false;
let teardownBound = false;

function stopHeartbeatScheduler() {
    heartbeatStopped = true;
    if (heartbeatTimer) {
        clearTimeout(heartbeatTimer);
        heartbeatTimer = null;
    }
    logger.debug('Heartbeat scheduler stopped');
}

function bindTeardownOnce() {
    if (teardownBound) return;
    teardownBound = true;

    app.on('before-quit', stopHeartbeatScheduler);
    app.on('quit', stopHeartbeatScheduler);

    process.on('exit', stopHeartbeatScheduler);
    process.on('SIGINT', stopHeartbeatScheduler);
    process.on('SIGTERM', stopHeartbeatScheduler);
}

async function trySendHeartbeatOnce({ endpointUrl, fallbackUrl, apiKey, statePath, installId, appName, modVersion, heartbeatIntervalMs, timeoutMs, maxRetries }) {
    if (heartbeatInFlight) return;
    heartbeatInFlight = true;

    try {
        const state = (await readJsonSafe(statePath)) || {};
        const lastSentAt = state.last_heartbeat_at_ms || 0;

        if (!shouldSendHeartbeat(lastSentAt, heartbeatIntervalMs)) return;

        const payload = {
            event: 'app_heartbeat',
            ...buildCommonPayload({ installId, appName, modVersion }),
        };

        await sendEventWithFallback({ primaryUrl: endpointUrl, fallbackUrl, apiKey, payload, timeoutMs, maxRetries });

        const newState = { ...state, last_heartbeat_at_ms: nowMs() };
        await writeJsonAtomic(statePath, newState);
    } catch {
    } finally {
        heartbeatInFlight = false;
    }
}

function scheduleNextTick(fn, delayMs) {
    if (heartbeatStopped) return;
    if (heartbeatTimer) clearTimeout(heartbeatTimer);
    heartbeatTimer = setTimeout(fn, delayMs);
}

function startHeartbeatScheduler(params) {
    const { heartbeatIntervalMs } = params;

    const tick = async () => {
        if (heartbeatStopped) return;

        await trySendHeartbeatOnce(params);

        scheduleNextTick(tick, heartbeatIntervalMs);
    };

    scheduleNextTick(tick, heartbeatIntervalMs);
}

async function initUserCountMetric(options) {
    const {
        endpointUrl,
        fallbackUrl = 'https://pulsesync-metrics.forea-adoxid-account.workers.dev',
        apiKey = '',
        heartbeatIntervalMs = 3 * 60 * 60 * 1000,
        appName = app.getName(),
        modVersion = '',
        timeoutMs = 10_000,
        maxRetries = 2,
        enablePeriodicHeartbeat = true,
    } = options || {};

    if (!endpointUrl) {
        logger.debug('Metrics endpoint URL not provided, skipping initialization');
        return;
    }

    logger.info('Initializing user count metrics');

    await app.whenReady();

    bindTeardownOnce();

    const statePath = getMetricsStatePath();
    const { state, installId, isNew } = await getOrCreateInstallId(statePath);

    if (isNew) {
        logger.info('New installation detected, install ID:', installId);
    } else {
        logger.debug('Existing installation, install ID:', installId);
    }

    if (isNew && !state.install_event_sent) {
        const payload = {
            event: 'app_install',
            ...buildCommonPayload({ installId, appName, modVersion }),
        };

        try {
            logger.debug('Sending app install event');
            await sendEventWithFallback({ primaryUrl: endpointUrl, fallbackUrl, apiKey, payload, timeoutMs, maxRetries });
            const newState = { ...state, install_event_sent: true };
            await writeJsonAtomic(statePath, newState);
            logger.info('App install event sent successfully');
        } catch (error) {
            logger.error('Failed to send app install event:', error);
        }
    }

    try {
        logger.debug('Sending initial heartbeat');
        await trySendHeartbeatOnce({
            endpointUrl,
            fallbackUrl,
            apiKey,
            statePath,
            installId,
            appName,
            modVersion,
            heartbeatIntervalMs,
            timeoutMs,
            maxRetries,
        });
        logger.debug('Initial heartbeat sent');
    } catch (error) {
        logger.error('Failed to send initial heartbeat:', error);
    }

    if (enablePeriodicHeartbeat) {
        logger.info('Starting periodic heartbeat scheduler, interval:', heartbeatIntervalMs, 'ms');
        startHeartbeatScheduler({
            endpointUrl,
            fallbackUrl,
            apiKey,
            statePath,
            installId,
            appName,
            modVersion,
            heartbeatIntervalMs,
            timeoutMs,
            maxRetries,
        });
    } else {
        logger.info('Periodic heartbeat scheduler disabled');
    }
}

module.exports = {
    initUserCountMetric,
    stopHeartbeatScheduler,
};
