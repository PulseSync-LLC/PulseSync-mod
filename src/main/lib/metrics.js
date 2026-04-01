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

function buildCommonPayload({ installId, appName, modVersion, metricType }) {
    return {
        ts: new Date().toISOString(),
        install_id: installId,
        app_name: appName,
        app_version: app.getVersion(),
        mod_version: modVersion || null,
        platform: process.platform,
        arch: process.arch,
        metric_type: metricType,
    };
}

let heartbeatTimer = null;
let heartbeatStopped = false;
let heartbeatInFlight = false;
let teardownBound = false;
let metricsRuntimeConfig = null;
const FEATURE_METRIC_STATE_VERSION = 5;

function isPlainObject(value) {
    return Boolean(value) && typeof value === 'object' && !Array.isArray(value);
}

function isPrimitiveFeatureValue(value) {
    return value === null || typeof value === 'boolean' || typeof value === 'number' || typeof value === 'string';
}

function shouldSkipFeatureKey(key) {
    return key === 'premiumCheckToken';
}

function getFeatureValueKey(pathParts) {
    return pathParts.join('.');
}

function shouldSkipFeaturePath(pathParts) {
    if (pathParts.length < 2) {
        return false;
    }

    const lastKey = pathParts[pathParts.length - 1];
    const parentKey = pathParts[pathParts.length - 2];
    const isWindowGeometryKey = lastKey === 'width' || lastKey === 'height' || lastKey === 'x' || lastKey === 'y';

    return parentKey === 'window' && isWindowGeometryKey;
}

function normalizePathLikeFeatureValue(value) {
    if (typeof value !== 'string') {
        return value;
    }

    return value.trim().length > 0 ? 'custom' : 'empty';
}

function normalizeFeaturePrimitiveValue(pathParts, value) {
    const key = getFeatureValueKey(pathParts);

    if (
        key === 'modSettings.downloader.defaultPath' ||
        key === 'modSettings.downloader.customPathForSessionStorage'
    ) {
        return normalizePathLikeFeatureValue(value);
    }

    return value;
}

function buildFeaturesEndpoint(endpointUrl) {
    if (!endpointUrl) return '';
    const trimmed = endpointUrl.endsWith('/') ? endpointUrl.slice(0, -1) : endpointUrl;
    if (trimmed.endsWith('/features')) return trimmed;
    return `${trimmed}/features`;
}

function normalizeFeatureTree(value, pathParts = []) {
    if (!isPlainObject(value)) {
        return null;
    }

    const normalized = {};

    for (const [key, nestedValue] of Object.entries(value)) {
        if (shouldSkipFeatureKey(key)) {
            continue;
        }

        const nextPathParts = [...pathParts, key];
        if (shouldSkipFeaturePath(nextPathParts)) {
            continue;
        }

        if (isPrimitiveFeatureValue(nestedValue)) {
            normalized[key] = normalizeFeaturePrimitiveValue(nextPathParts, nestedValue);
            continue;
        }

        const nestedTree = normalizeFeatureTree(nestedValue, nextPathParts);
        if (nestedTree && Object.keys(nestedTree).length > 0) {
            normalized[key] = nestedTree;
        }
    }

    return Object.keys(normalized).length > 0 ? normalized : null;
}

function cloneFeatureTree(value) {
    if (!isPlainObject(value)) {
        return {};
    }

    const clone = {};

    for (const [key, nestedValue] of Object.entries(value)) {
        clone[key] = isPlainObject(nestedValue) ? cloneFeatureTree(nestedValue) : nestedValue;
    }

    return clone;
}

function areFeatureTreesEqual(left, right) {
    if (left === right) {
        return true;
    }

    if (isPrimitiveFeatureValue(left) || isPrimitiveFeatureValue(right)) {
        return left === right;
    }

    if (!isPlainObject(left) || !isPlainObject(right)) {
        return false;
    }

    const leftKeys = Object.keys(left);
    const rightKeys = Object.keys(right);

    if (leftKeys.length !== rightKeys.length) {
        return false;
    }

    for (const key of leftKeys) {
        if (!Object.prototype.hasOwnProperty.call(right, key)) {
            return false;
        }

        if (!areFeatureTreesEqual(left[key], right[key])) {
            return false;
        }
    }

    return true;
}

function hasFeatureTreeChanges(currentState, nextState) {
    if (!isPlainObject(nextState)) {
        return false;
    }

    for (const [key, nextValue] of Object.entries(nextState)) {
        const currentValue = isPlainObject(currentState) ? currentState[key] : undefined;

        if (isPrimitiveFeatureValue(nextValue)) {
            if (currentValue !== nextValue) {
                return true;
            }
            continue;
        }

        if (!isPlainObject(currentValue)) {
            return true;
        }

        if (hasFeatureTreeChanges(currentValue, nextValue)) {
            return true;
        }
    }

    return false;
}

function mergeFeatureTree(baseState, patchState) {
    const nextState = cloneFeatureTree(baseState);

    if (!isPlainObject(patchState)) {
        return nextState;
    }

    for (const [key, patchValue] of Object.entries(patchState)) {
        if (isPrimitiveFeatureValue(patchValue)) {
            nextState[key] = patchValue;
            continue;
        }

        nextState[key] = mergeFeatureTree(nextState[key], patchValue);
    }

    return nextState;
}

function getMetricScopedFeatureState(state, metricType) {
    const featureStates = isPlainObject(state.last_sent_features_by_metric_type) ? state.last_sent_features_by_metric_type : {};
    const metricState = featureStates[metricType];
    return isPlainObject(metricState) ? metricState : {};
}

function normalizeFeatureMetricsState(state) {
    const version = typeof state?.feature_metrics_state_version === 'number' ? state.feature_metrics_state_version : 0;

    if (version === FEATURE_METRIC_STATE_VERSION) {
        return state;
    }

    logger.info(
        `Resetting cached feature metrics state due to schema change (${version} -> ${FEATURE_METRIC_STATE_VERSION})`,
    );

    return {
        ...state,
        last_sent_features_by_metric_type: {},
        feature_metrics_state_version: FEATURE_METRIC_STATE_VERSION,
    };
}

function buildFeatureStateUpdate(state, metricType, features) {
    const featureStates = isPlainObject(state.last_sent_features_by_metric_type) ? cloneFeatureTree(state.last_sent_features_by_metric_type) : {};
    featureStates[metricType] = features;
    return {
        ...state,
        last_sent_features_by_metric_type: featureStates,
        last_features_sent_at_ms: nowMs(),
        feature_metrics_state_version: FEATURE_METRIC_STATE_VERSION,
    };
}

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

async function trySendHeartbeatOnce({
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
    metricType,
}) {
    if (heartbeatInFlight) return;
    heartbeatInFlight = true;

    try {
        const state = (await readJsonSafe(statePath)) || {};
        const lastSentAt = state.last_heartbeat_at_ms || 0;

        if (!shouldSendHeartbeat(lastSentAt, heartbeatIntervalMs)) return;

        const payload = {
            event: 'mod_heartbeat',
            ...buildCommonPayload({ installId, appName, modVersion, metricType }),
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
        fallbackUrl = 'https://metrics.pulsesync.dev/metrics',
        apiKey = '',
        metricType = 'mod',
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

    metricsRuntimeConfig = {
        endpointUrl,
        fallbackUrl,
        apiKey,
        metricType,
        appName,
        modVersion,
        timeoutMs,
        maxRetries,
    };

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
            event: 'mod_install',
            ...buildCommonPayload({ installId, appName, modVersion, metricType }),
        };

        try {
            logger.debug('Sending mod install event');
            await sendEventWithFallback({
                primaryUrl: endpointUrl,
                fallbackUrl: fallbackUrl,
                apiKey,
                payload,
                timeoutMs,
                maxRetries,
            });
            const newState = { ...state, install_event_sent: true };
            await writeJsonAtomic(statePath, newState);
            logger.info('Mod install event sent successfully');
        } catch (error) {
            logger.error('Failed to send mod install event:', error);
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
            metricType,
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
            metricType,
        });
    } else {
        logger.info('Periodic heartbeat scheduler disabled');
    }
}

async function sendFeaturesMetric(features, overrides = {}) {
    if (!metricsRuntimeConfig?.endpointUrl || !features || typeof features !== 'object' || Array.isArray(features)) {
        return;
    }

    try {
        await app.whenReady();

        const statePath = getMetricsStatePath();
        const { state: rawState, installId } = await getOrCreateInstallId(statePath);
        const state = normalizeFeatureMetricsState(rawState);
        const metricType = overrides.metricType || metricsRuntimeConfig.metricType || 'mod';
        const normalizedFeatures = normalizeFeatureTree(features);

        if (!normalizedFeatures) {
            return;
        }

        const lastSentFeatures = getMetricScopedFeatureState(state, metricType);
        const hasChanges = hasFeatureTreeChanges(lastSentFeatures, normalizedFeatures);

        if (!hasChanges) {
            logger.debug('Skipping features metric send because feature state did not change');
            return;
        }

        const endpointUrl = buildFeaturesEndpoint(overrides.endpointUrl || metricsRuntimeConfig.endpointUrl);
        const fallbackUrl = buildFeaturesEndpoint(overrides.fallbackUrl || metricsRuntimeConfig.fallbackUrl);
        const payload = {
            features: normalizedFeatures,
            ...buildCommonPayload({
                installId,
                appName: overrides.appName || metricsRuntimeConfig.appName,
                modVersion: overrides.modVersion || metricsRuntimeConfig.modVersion,
                metricType,
            }),
        };

        await sendEventWithFallback({
            primaryUrl: endpointUrl,
            fallbackUrl,
            apiKey: overrides.apiKey || metricsRuntimeConfig.apiKey,
            payload,
            timeoutMs: overrides.timeoutMs || metricsRuntimeConfig.timeoutMs,
            maxRetries: overrides.maxRetries || metricsRuntimeConfig.maxRetries,
        });

        const nextFeaturesState = areFeatureTreesEqual(lastSentFeatures, normalizedFeatures)
            ? lastSentFeatures
            : mergeFeatureTree(lastSentFeatures, normalizedFeatures);
        const latestState = normalizeFeatureMetricsState((await readJsonSafe(statePath)) || state);
        await writeJsonAtomic(statePath, buildFeatureStateUpdate(latestState, metricType, nextFeaturesState));
    } catch (error) {
        logger.warn('Failed to send features metric:', error?.message || error);
    }
}

module.exports = {
    initUserCountMetric,
    stopHeartbeatScheduler,
    sendFeaturesMetric,
};
