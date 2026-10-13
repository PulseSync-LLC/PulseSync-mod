'use strict';
const electron = require('electron');
const electronCertificateVerification = require('@yandex-music-int/electron-certificate-verification');
const { config } = require('../config.js');
const { Logger } = require('../packages/logger/Logger.js');
const CERTIFICATE_VERIFICATION_SESSION_NAMES = {
    chromium: 'chromium',
    updater: 'updater',
};
const certificateVerificationLogger = new Logger('CertificateVerification');
const reportLocalCertificateVerificationRejection = (decision) => {
    if (decision.source !== 'local' || decision.result !== 'rejected') {
        return;
    }
    certificateVerificationLogger.error('Certificate verification rejected locally', {
        sessionName: decision.sessionName,
        hostname: decision.hostname,
        authority: decision.authority,
        failureStage: decision.failureStage,
        rejectionReason: decision.rejectionReason,
        chromiumVerificationResult: decision.chromiumVerificationResult,
        chromiumErrorCode: decision.chromiumErrorCode,
    });
};
const createCertificateVerificationHosts = (additionalHosts) => {
    return {
        yandexInternal: [...config.certificates.yandexInternalHosts, ...(additionalHosts?.yandexInternal ?? [])],
        nuc: [...config.certificates.nucHosts, ...(additionalHosts?.nuc ?? [])],
        revocationDefense: [...config.certificates.revocationDefenseHosts, ...(additionalHosts?.revocationDefense ?? [])],
    };
};
const setupCertificateVerification = async ({ updater, policyOverrides = {}, onDecision }) => {
    const coordinatorHandle = electronCertificateVerification.setupCertificateVerificationCoordinator({
        sessions: [
            {
                sessionName: CERTIFICATE_VERIFICATION_SESSION_NAMES.chromium,
                session: electron.session.defaultSession,
            },
            {
                sessionName: CERTIFICATE_VERIFICATION_SESSION_NAMES.updater,
                session: updater.netSession,
            },
        ],
        hosts: createCertificateVerificationHosts(policyOverrides.additionalHosts),
        isEnabled: () => config.common.CERTIFICATE_VERIFICATION_ENABLED,
        revocationDefense: {
            isEnabled: () => config.common.REVOCATION_DEFENSE_ENABLED,
            buildTime: policyOverrides.revocationDefenseBuildTime ?? config.buildInfo.BUILD_TIME,
        },
        certificateTransparencyLogList: {
            fetchCertificateTransparencyLogList: (certificateTransparencyLogListUrl, requestOptions) =>
                electron.net.fetch(certificateTransparencyLogListUrl, requestOptions),
        },
        logger: certificateVerificationLogger,
        onDecision: (decision) => {
            reportLocalCertificateVerificationRejection(decision);
            onDecision?.(decision);
        },
    });
    await Promise.all([electron.session.defaultSession.closeAllConnections(), updater.netSession.closeAllConnections()]);
    coordinatorHandle?.refreshCertificateTransparencyLogList().catch(() => void 0);
    return coordinatorHandle;
};

module.exports = { setupCertificateVerification };
