'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.getUpdater = exports.Updater = void 0;
const semver = require('semver');
const electron_1 = require('electron');
const electron_updater_1 = require('electron-updater');
const state_js_1 = require('./state.js');
const store_js_1 = require('./store.js');
const deviceInfo_js_1 = require('./deviceInfo.js');
const config_js_1 = require('../config.js');
const updateStatus_js_1 = require('../types/updateStatus.js');
const Logger_js_1 = require('../packages/logger/Logger.js');
const probabilityBuckets = {
    6: '0-5',
    26: '5-25',
    51: '25-50',
    101: '50-100',
};
const isVersionDeprecated = () => {
    if (!config_js_1.config.common.DEPRECATED_VERSIONS) {
        return false;
    }
    return semver.satisfies(electron_1.app.getVersion(), config_js_1.config.common.DEPRECATED_VERSIONS);
};
let downloadBlockerId = null;
const enableSuspensionBlocker = () => {
    if (downloadBlockerId === null) downloadBlockerId = electron_1.powerSaveBlocker.start('prevent-app-suspension');
};
const disableSuspensionBlocker = () => {
    if (downloadBlockerId !== null) electron_1.powerSaveBlocker.stop(downloadBlockerId);
    downloadBlockerId = null;
};
class Updater {
    latestAvailableVersion = null;
    updateStatus = updateStatus_js_1.UpdateStatus.IDLE;
    updaterId = null;
    onUpdateListeners = [];
    logger;
    cancellationToken = null;
    downloadedVersion = null;
    downloadingVersion = null;
    isDownloadingDeprecatedVersion = false;
    constructor() {
        this.logger = new Logger_js_1.Logger('UpdateLogger');
        electron_updater_1.autoUpdater.autoDownload = false;
        electron_updater_1.autoUpdater.logger = this.logger.withPrefix('Logger inside "electron-updater" package');
        electron_updater_1.autoUpdater.autoRunAppAfterInstall = true;
        electron_updater_1.autoUpdater.disableDifferentialDownload = false;
        electron_updater_1.autoUpdater.on('error', (error) => {
            this.logger.error('Updater error', error);
        });
        electron_updater_1.autoUpdater.on('update-downloaded', (updateInfo) => {
            if (this.downloadingVersion && this.downloadingVersion !== updateInfo.version) return;
            this.logger.log('Update downloaded', updateInfo.version);
            this.downloadedVersion = updateInfo.version;
            this.downloadingVersion = null;
            this.isDownloadingDeprecatedVersion = false;
            disableSuspensionBlocker();
            if (isVersionDeprecated()) {
                this.logger.info('This version is deprecated', electron_1.app.getVersion(), config_js_1.config.common.DEPRECATED_VERSIONS);
                this.install();
                return;
            }
            this.latestAvailableVersion = updateInfo.version;
            this.onUpdateListeners.forEach((listener) => {
                listener(updateInfo.version);
            });
        });
    }
    cancelCurrentDownload(newVersion) {
        this.logger.info('Cancelling current download', this.downloadingVersion || this.downloadedVersion || 'unknown', '->', newVersion);
        if (this.cancellationToken) {
            this.cancellationToken.cancel();
            this.cancellationToken = null;
        }
        this.latestAvailableVersion = null;
        this.downloadedVersion = null;
        this.downloadingVersion = null;
        this.updateStatus = updateStatus_js_1.UpdateStatus.IDLE;
        disableSuspensionBlocker();
    }
    updateApplier(updateResult) {
        const { downloadPromise, updateInfo, cancellationToken } = updateResult;
        if ('commonConfig' in updateInfo) {
            this.logger.info('Common config', updateInfo.commonConfig);
            config_js_1.applyCommonConfig(updateInfo.commonConfig);
        }
        if (downloadPromise !== null) {
            return;
        }
        const newVersion = updateInfo.version;
        const shouldCancelCurrent = this.shouldCancelCurrentUpdate(newVersion);
        if (shouldCancelCurrent) {
            this.cancelCurrentDownload(newVersion);
        } else if (this.downloadingVersion || this.downloadedVersion) {
            return;
        }
        deviceInfo_js_1.logSystemMetrics(true);
        if (
            isVersionDeprecated() ||
            !(store_js_1.getModSettings()?.appAutoUpdates.enableAppAutoUpdateByProbability ?? config_js_1.config.app.enableUpdateByProbability)
        ) {
            this.isDownloadingDeprecatedVersion = isVersionDeprecated();
            this.downloadUpdate(updateInfo.version, cancellationToken);
            return;
        }
        if ('updateProbability' in updateInfo) {
            this.logger.info(`Update probability: ${updateInfo.updateProbability}; checking with client value ${this.clientUpdateProbability}`);
            const updateProbability = Number(updateInfo.updateProbability);
            if (this.clientUpdateProbability <= updateProbability && updateProbability > 0) {
                this.downloadUpdate(updateInfo.version, cancellationToken);
            }
        }
    }
    shouldCancelCurrentUpdate(newVersion) {
        if (this.isDownloadingDeprecatedVersion) {
            this.logger.info('Not cancelling deprecated version download');
            return false;
        }
        if (this.updateStatus === updateStatus_js_1.UpdateStatus.IDLE) {
            if (!this.downloadingVersion && !this.downloadedVersion) {
                return false;
            }
        }
        const currentVersion = this.downloadingVersion || this.downloadedVersion || this.latestAvailableVersion;
        if (currentVersion && semver.gt(newVersion, currentVersion)) {
            this.logger.info('New version is higher', currentVersion, '<', newVersion);
            return true;
        }
        return false;
    }
    async downloadUpdate(version, cancellationToken) {
        this.logger.info('New version available', electron_1.app.getVersion(), '->', version);
        this.updateStatus = updateStatus_js_1.UpdateStatus.DOWNLOADING;
        this.downloadingVersion = version;
        this.cancellationToken = cancellationToken;
        enableSuspensionBlocker();
        electron_updater_1.autoUpdater
            .downloadUpdate(cancellationToken)
            .then((downloadResult) => {
                if (this.cancellationToken !== cancellationToken) return;
                if (downloadResult) {
                    this.updateStatus = updateStatus_js_1.UpdateStatus.DOWNLOADED;
                    this.logger.info(`Download result: ${downloadResult}`);
                }
            })
            .catch((error) => {
                if (this.cancellationToken !== cancellationToken) return;
                this.updateStatus = updateStatus_js_1.UpdateStatus.IDLE;
                this.downloadingVersion = null;
                this.isDownloadingDeprecatedVersion = false;
                disableSuspensionBlocker();
                this.logger.error('Downloader error', error);
            });
    }
    async check() {
        if (this.updateStatus === updateStatus_js_1.UpdateStatus.INSTALLING) {
            this.logger.log('Update is installing', this.updateStatus);
            return;
        }
        try {
            const updateResult = await electron_updater_1.autoUpdater.checkForUpdates();
            if (!updateResult) {
                this.logger.log('Updater is inactive');
                return;
            }
            this.updateApplier(updateResult);
        } catch (error) {
            this.logger.error('Update check error', error);
        }
    }
    start() {
        this.stop();
        this.check();
        this.updaterId = setInterval(() => {
            this.check();
        }, config_js_1.config.common.UPDATE_POLL_INTERVAL_MS);
    }
    stop() {
        if (this.updaterId) {
            clearInterval(this.updaterId);
            this.updaterId = null;
        }
    }
    onUpdate(listener) {
        this.onUpdateListeners.push(listener);
    }
    install() {
        this.logger.info('Installing a new version', this.latestAvailableVersion);
        this.updateStatus = updateStatus_js_1.UpdateStatus.INSTALLING;
        state_js_1.state.willQuit = true;
        electron_updater_1.autoUpdater.quitAndInstall();
    }
    get clientUpdateProbability() {
        const deviceId = store_js_1.getDeviceId();
        const num = Number.parseInt(deviceId, 16);
        if (Number.isNaN(num)) {
            return 0;
        }
        return num % 101;
    }
    get netSession() {
        return electron_updater_1.autoUpdater.netSession;
    }
    getProbabilityBucket() {
        for (const bucket of Object.keys(probabilityBuckets)) {
            if (this.clientUpdateProbability < Number(bucket)) {
                return probabilityBuckets[Number(bucket)];
            }
        }
        return;
    }
}
exports.Updater = Updater;
exports.getUpdater = (() => {
    let updater;
    return () => {
        if (!updater) {
            updater = new Updater();
        }
        return updater;
    };
})();
