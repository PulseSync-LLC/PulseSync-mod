'use strict';
const MILLISECONDS_PER_HOUR = 60 * 60 * 1e3;
const DEFAULT_FULL_SYNC_PERIOD_MS = 24 * MILLISECONDS_PER_HOUR;
const DEFAULT_AVAILABILITIES_SYNC_PERIOD_MS = 30 * 60 * 1e3;
let offlineSyncConfig = {
    fullSyncDisabled: false,
    fullSyncPeriodMs: DEFAULT_FULL_SYNC_PERIOD_MS,
    availabilitiesSyncPeriodMs: DEFAULT_AVAILABILITIES_SYNC_PERIOD_MS,
};
const resolvePeriod = (hours, defaultPeriodMs) => {
    const periodMs = (hours ?? 0) * MILLISECONDS_PER_HOUR;
    return Number.isFinite(periodMs) && periodMs > defaultPeriodMs ? periodMs : defaultPeriodMs;
};
const getOfflineSyncConfig = () => offlineSyncConfig;
const setOfflineSyncConfig = (value) => {
    offlineSyncConfig = {
        fullSyncDisabled: value.fullSyncDisabled ?? false,
        fullSyncPeriodMs: resolvePeriod(value.fullSyncPeriodHours, DEFAULT_FULL_SYNC_PERIOD_MS),
        availabilitiesSyncPeriodMs: resolvePeriod(value.availabilitiesSyncPeriodHours, DEFAULT_AVAILABILITIES_SYNC_PERIOD_MS),
    };
};

module.exports = { getOfflineSyncConfig, setOfflineSyncConfig };
