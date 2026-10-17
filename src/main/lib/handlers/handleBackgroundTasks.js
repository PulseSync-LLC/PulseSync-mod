'use strict';
var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.handleBackgroundTasks = void 0;
const node_cron_1 = __importDefault(require('node-cron'));
const state_js_1 = require('../state.js');
const events_js_1 = require('../../events.js');
const store_js_1 = require('../store.js');
const { getOfflineSyncConfig } = require('../offlineSyncConfig.js');
const random = (min, max) => {
    return Math.floor(min + Math.random() * (max + 1 - min));
};
const handleBackgroundTasks = (window) => {
    const tasks = [];
    tasks.push(
        node_cron_1.default.schedule(`${random(0, 59)} */${random(5, 10)} * * * *`, () => {
            const config = getOfflineSyncConfig();
            if (state_js_1.state.isWindowHidden) {
                return;
            }
            const [getUpdatedAt] = store_js_1.tracksAvailabilityUpdatedAt;
            const updatedAt = getUpdatedAt();
            if (typeof updatedAt !== 'number' || Date.now() - updatedAt > config.availabilitiesSyncPeriodMs) {
                (0, events_js_1.sendRefreshTracksAvailability)(window);
            }
        }),
    );
    tasks.push(
        node_cron_1.default.schedule(`${random(0, 59)} */${random(30, 35)} * * * *`, () => {
            const config = getOfflineSyncConfig();
            if (state_js_1.state.isWindowHidden || config.fullSyncDisabled) {
                return;
            }
            const [getUpdatedAt] = store_js_1.repositoryMetaUpdatedAt;
            const updatedAt = getUpdatedAt();
            if (typeof updatedAt !== 'number' || Date.now() - updatedAt > config.fullSyncPeriodMs) {
                (0, events_js_1.sendRefreshRepositoryMeta)(window);
            }
        }),
    );
    window.once('closed', () => tasks.forEach((task) => task.destroy()));
};
exports.handleBackgroundTasks = handleBackgroundTasks;
