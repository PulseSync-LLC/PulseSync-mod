'use strict';
const { Logger } = require('../packages/logger/Logger.js');
const { PASSPORT_LOGIN_DOMAIN } = require('../constants/cookies.js');
const isRecord$1 = (value) => typeof value === 'object' && value !== null && !Array.isArray(value);
const RENDERER_ATTEMPT_TRIGGERS = ['user', 'missing-token', 'passport-login-missing', 'login-mismatch', 'confirmed-401'];
const DESKTOP_AUTH_DIAGNOSTIC_VALUES = {
    accountResult: ['authorized', 'no-uid', '401', '4xx', '5xx', 'transport', 'unexpected'],
    accountValidationDecision: ['keep-session', 'redirect-authorization', 'none'],
    authorizationDecision: ['remove-token-reload', 'redirect-authorization', 'redirect-oauth', 'continue'],
    callbackResult: ['token', 'error', 'malformed', 'missing'],
    login: ['present', 'empty', 'missing'],
    loginComparison: ['match', 'mismatch', 'unavailable'],
    page: ['oauth', 'product'],
    presence: ['present', 'missing'],
    rendererAttemptTrigger: RENDERER_ATTEMPT_TRIGGERS,
    storageReadbackResult: ['present', 'missing', 'not-attempted'],
    storageResult: ['stored', 'state-missing', 'state-mismatch', 'readback-missing'],
    storageState: ['match', 'mismatch', 'missing'],
    storageWriteResult: ['attempted', 'skipped'],
    ttl: ['missing', 'invalid', 'lt-1d', '1-30d', 'gt-30d'],
};
const MAX_EVENTS_PER_ATTEMPT = 12;
const INVALID_PAYLOAD_MESSAGE = 'Invalid auth diagnostic payload';
const hasExactKeys = (value, keys) => {
    const actualKeys = Object.keys(value);
    return actualKeys.length === keys.length && actualKeys.every((key) => keys.includes(key));
};
const isAllowedString = (value, allowedValues) => {
    return typeof value === 'string' && allowedValues.includes(value);
};
const isDesktopRendererAuthDiagnosticPayload = (value) => {
    if (!isRecord$1(value) || typeof value.stage !== 'string') {
        return false;
    }
    switch (value.stage) {
        case 'attempt-start':
            return hasExactKeys(value, ['stage', 'trigger']) && isAllowedString(value.trigger, DESKTOP_AUTH_DIAGNOSTIC_VALUES.rendererAttemptTrigger);
        case 'oauth-callback':
            return (
                hasExactKeys(value, ['stage', 'result', 'state', 'ttl']) &&
                isAllowedString(value.result, DESKTOP_AUTH_DIAGNOSTIC_VALUES.callbackResult) &&
                isAllowedString(value.state, DESKTOP_AUTH_DIAGNOSTIC_VALUES.presence) &&
                isAllowedString(value.ttl, DESKTOP_AUTH_DIAGNOSTIC_VALUES.ttl)
            );
        case 'token-storage':
            return (
                hasExactKeys(value, ['stage', 'state', 'write', 'readback', 'ttl', 'result']) &&
                isAllowedString(value.state, DESKTOP_AUTH_DIAGNOSTIC_VALUES.storageState) &&
                isAllowedString(value.write, DESKTOP_AUTH_DIAGNOSTIC_VALUES.storageWriteResult) &&
                isAllowedString(value.readback, DESKTOP_AUTH_DIAGNOSTIC_VALUES.storageReadbackResult) &&
                isAllowedString(value.ttl, DESKTOP_AUTH_DIAGNOSTIC_VALUES.ttl) &&
                isAllowedString(value.result, DESKTOP_AUTH_DIAGNOSTIC_VALUES.storageResult)
            );
        case 'authorization-decision':
            return (
                hasExactKeys(value, ['stage', 'page', 'token', 'passportLogin', 'tokenOwnerLogin', 'loginComparison', 'decision']) &&
                isAllowedString(value.page, DESKTOP_AUTH_DIAGNOSTIC_VALUES.page) &&
                isAllowedString(value.token, DESKTOP_AUTH_DIAGNOSTIC_VALUES.presence) &&
                isAllowedString(value.passportLogin, DESKTOP_AUTH_DIAGNOSTIC_VALUES.login) &&
                isAllowedString(value.tokenOwnerLogin, DESKTOP_AUTH_DIAGNOSTIC_VALUES.login) &&
                isAllowedString(value.loginComparison, DESKTOP_AUTH_DIAGNOSTIC_VALUES.loginComparison) &&
                isAllowedString(value.decision, DESKTOP_AUTH_DIAGNOSTIC_VALUES.authorizationDecision)
            );
        case 'account-about':
            return hasExactKeys(value, ['stage', 'result']) && isAllowedString(value.result, DESKTOP_AUTH_DIAGNOSTIC_VALUES.accountResult);
        case 'account-validation':
            return (
                hasExactKeys(value, ['stage', 'result', 'decision']) &&
                isAllowedString(value.result, DESKTOP_AUTH_DIAGNOSTIC_VALUES.accountResult) &&
                isAllowedString(value.decision, DESKTOP_AUTH_DIAGNOSTIC_VALUES.accountValidationDecision)
            );
        default:
            return false;
    }
};
class AuthDiagnostics {
    constructor(logger = new Logger('AuthDiagnostics')) {
        this.logger = logger;
    }
    attemptId = 0;
    eventsInAttempt = 0;
    attemptTrigger;
    authorizationDecisionRecorded = false;
    invalidPayloadReported = false;
    startAppAttempt() {
        this.startAttempt('app-start');
    }
    captureAttempt() {
        if (this.attemptId === 0) {
            this.startAppAttempt();
        }
        return this.attemptId;
    }
    recordForAttempt(reference, payload) {
        if (reference !== this.attemptId) {
            return;
        }
        this.record(payload);
    }

    recordRenderer(payload) {
        if (!isDesktopRendererAuthDiagnosticPayload(payload)) {
            this.warnInvalidPayload();
            return;
        }
        this.record(payload);
    }
    record(payload) {
        if (payload.stage === 'attempt-start') {
            const isAutomaticAuthorizationTrigger =
                payload.trigger === 'missing-token' || payload.trigger === 'passport-login-missing' || payload.trigger === 'login-mismatch';
            if (
                this.attemptTrigger === 'app-start' &&
                !this.authorizationDecisionRecorded &&
                this.eventsInAttempt < MAX_EVENTS_PER_ATTEMPT &&
                isAutomaticAuthorizationTrigger
            ) {
                return;
            }
            this.startAttempt(payload.trigger);
            return;
        }
        if (this.attemptId === 0) {
            this.startAppAttempt();
        }
        this.write(payload);
        if (payload.stage === 'authorization-decision') {
            this.authorizationDecisionRecorded = true;
        }
    }
    startAttempt(trigger) {
        this.attemptId += 1;
        this.eventsInAttempt = 0;
        this.attemptTrigger = trigger;
        this.authorizationDecisionRecorded = false;
        this.invalidPayloadReported = false;
        this.write({
            stage: 'attempt-start',
            trigger,
        });
    }
    warnInvalidPayload() {
        if (this.invalidPayloadReported || this.eventsInAttempt >= MAX_EVENTS_PER_ATTEMPT) {
            return;
        }
        this.logger.warn(INVALID_PAYLOAD_MESSAGE);
        this.invalidPayloadReported = true;
        this.eventsInAttempt += 1;
    }
    write(payload) {
        if (this.eventsInAttempt >= MAX_EVENTS_PER_ATTEMPT) {
            return;
        }
        this.logger.info(
            JSON.stringify({
                schemaVersion: 1,
                attemptId: this.attemptId,
                ...payload,
            }),
        );
        this.eventsInAttempt += 1;
    }
}
const authDiagnostics = new AuthDiagnostics();
const classifyPassportState = ({ passportCookies, sessionCookies, passportReadFailed, sessionReadFailed }) => {
    const firstPassportCookie = passportCookies[0];
    let passportLogin = 'missing';
    if (passportReadFailed) {
        passportLogin = 'error';
    } else if (firstPassportCookie) {
        passportLogin = firstPassportCookie.value ? 'present' : 'empty';
    }
    const sessionId = sessionReadFailed ? 'error' : sessionCookies.length > 0 ? 'present' : 'missing';
    return {
        stage: 'passport-state-read',
        sessionId,
        passportLogin,
        cookieCount: passportCookies.length,
        canonicalCookieCount: passportCookies.filter((cookie) => cookie.domain === PASSPORT_LOGIN_DOMAIN && cookie.path === '/').length,
    };
};
const readCookies = async (read, onError) => {
    try {
        return {
            cookies: await read(),
            failed: false,
        };
    } catch (error) {
        try {
            onError(error);
        } catch {}
        return {
            cookies: [],
            failed: true,
        };
    }
};
const readPassportLoginWithDiagnostics = async ({ readPassportCookies, readSessionCookies, record, onPassportReadError, onSessionReadError }) => {
    const passportResultPromise = readCookies(readPassportCookies, onPassportReadError);
    const sessionResultPromise = readCookies(readSessionCookies, onSessionReadError);
    const passportResult = await passportResultPromise;
    sessionResultPromise
        .then((sessionResult) => {
            record(
                classifyPassportState({
                    passportCookies: passportResult.cookies,
                    sessionCookies: sessionResult.cookies,
                    passportReadFailed: passportResult.failed,
                    sessionReadFailed: sessionResult.failed,
                }),
            );
        })
        .catch(() => {});
    return passportResult.cookies[0]?.value;
};

module.exports = { AuthDiagnostics, authDiagnostics, readPassportLoginWithDiagnostics, isDesktopRendererAuthDiagnosticPayload };
