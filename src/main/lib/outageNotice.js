'use strict';
const electron = require('electron');
const { Logger } = require('../packages/logger/Logger.js');
const OUTAGE_NOTICE_URL = 'https://runtime-config.music.yandex.net/v1/apps/music/properties/outage-notice';
const OUTAGE_NOTICE_TIMEOUT_MS = 5e3;
const outageNoticeLogger = new Logger('OutageNotice');
let outageNoticePromise;
const requestOutageNotice = async () => {
    outageNoticeLogger.info(`Request to ${OUTAGE_NOTICE_URL} started`);
    const controller = new AbortController();
    let timeoutId;
    const timeout = new Promise((resolve) => {
        timeoutId = setTimeout(() => {
            outageNoticeLogger.warn(`Request to ${OUTAGE_NOTICE_URL} timed out after ${OUTAGE_NOTICE_TIMEOUT_MS} ms`);
            controller.abort();
            resolve({});
        }, OUTAGE_NOTICE_TIMEOUT_MS);
    });
    const request = async () => {
        const response = await electron.net.fetch(OUTAGE_NOTICE_URL, {
            method: 'GET',
            cache: 'no-store',
            credentials: 'omit',
            redirect: 'error',
            signal: controller.signal,
        });
        outageNoticeLogger.info(`Request to ${OUTAGE_NOTICE_URL} completed with status: `, response.status);
        if (!response.ok) {
            return {};
        }
        const payload = await response.json();
        return payload;
    };
    try {
        return await Promise.race([request(), timeout]);
    } catch (error) {
        if (!controller.signal.aborted) {
            outageNoticeLogger.warn(`Request to ${OUTAGE_NOTICE_URL} failed`, {
                platform: process.platform,
                error: error instanceof Error ? error.message : String(error),
            });
        }
        return {};
    } finally {
        clearTimeout(timeoutId);
    }
};
const getOutageNotice = () => {
    if (!outageNoticePromise) {
        outageNoticePromise = requestOutageNotice();
    }
    return outageNoticePromise;
};

module.exports = { getOutageNotice };
