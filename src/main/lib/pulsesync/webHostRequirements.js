'use strict';

const WEB_HOST_CAPABILITIES = Object.freeze(['typed-settings-v1', 'lifecycle-v1', 'async-start-v1', 'net-per-addon-v1', 'scoped-css-v1', 'modules-v1']);

function normalizeWebHostRequirements(requirements) {
    if (requirements === undefined) return undefined;
    if (!requirements || typeof requirements !== 'object' || Array.isArray(requirements)) throw new Error('webhost-incompatible: Invalid host requirements');
    const { minHostApi = 1, capabilities = [] } = requirements;
    if (
        !Number.isSafeInteger(minHostApi) ||
        minHostApi < 1 ||
        !Array.isArray(capabilities) ||
        capabilities.length > 64 ||
        capabilities.some((value) => typeof value !== 'string' || !/^[a-z][a-z0-9-]{0,63}$/.test(value))
    ) {
        throw new Error('webhost-incompatible: Invalid host requirements');
    }
    return { minHostApi, capabilities: [...new Set(capabilities)] };
}

function validateWebHostRequirements(requirements) {
    const normalized = normalizeWebHostRequirements(requirements);
    if (normalized && (normalized.minHostApi > 1 || normalized.capabilities.some((value) => !WEB_HOST_CAPABILITIES.includes(value))))
        throw new Error('webhost-incompatible: This addon requires a newer PulseSync host');
    return normalized;
}

module.exports = { WEB_HOST_CAPABILITIES, normalizeWebHostRequirements, validateWebHostRequirements };
