'use strict';

const crypto = require('node:crypto');
const { moduleError, validAlias } = require('./addonModuleExecution.js');
const trustedKeys = require('./addonModuleTrustedKeys.json');

const sha256 = (value) => crypto.createHash('sha256').update(value).digest('hex');

const normalizeModuleManifest = (manifest) => {
    if (
        !manifest ||
        manifest.formatVersion !== 1 ||
        manifest.runtime !== 'isolated' ||
        manifest.kind !== 'web-addon' ||
        manifest.apiVersion !== 1 ||
        JSON.stringify(manifest.capabilities) !== '["modules-v1"]' ||
        !Array.isArray(manifest.allowedUrls) ||
        !manifest.modules ||
        Array.isArray(manifest.modules) ||
        Object.keys(manifest).some((key) => !['formatVersion', 'runtime', 'kind', 'apiVersion', 'capabilities', 'allowedUrls', 'modules'].includes(key))
    ) {
        throw moduleError('incompatible-api');
    }
    const modules = Object.create(null);
    const entries = Object.entries(manifest.modules).sort(([a], [b]) => (a < b ? -1 : a > b ? 1 : 0));
    if (!entries.length || entries.length > 20 || manifest.allowedUrls.length > 100) throw moduleError('incompatible-api');
    for (const [alias, ref] of entries) {
        if (
            !validAlias(alias) ||
            !ref ||
            typeof ref.moduleId !== 'string' ||
            !/^[0-9a-f-]{36}$/i.test(ref.moduleId) ||
            !Number.isSafeInteger(ref.apiMajor) ||
            ref.apiMajor < 1 ||
            Object.keys(ref).some((key) => !['moduleId', 'apiMajor', 'optional', 'version', 'channel'].includes(key)) ||
            (ref.optional !== undefined && typeof ref.optional !== 'boolean') ||
            (ref.version !== undefined
                ? ref.channel !== undefined || typeof ref.version !== 'string' || ref.version.length > 80
                : !['stable', 'dev'].includes(ref.channel))
        ) {
            throw moduleError('incompatible-api');
        }
        modules[alias] = {
            moduleId: ref.moduleId.toLowerCase(),
            apiMajor: ref.apiMajor,
            optional: Boolean(ref.optional),
            ...(ref.version !== undefined ? { version: ref.version } : { channel: ref.channel }),
        };
    }
    if (manifest.allowedUrls.some((url) => typeof url !== 'string' || url.length > 2048)) throw moduleError('incompatible-api');
    return {
        formatVersion: 1,
        runtime: 'isolated',
        kind: 'web-addon',
        apiVersion: 1,
        capabilities: ['modules-v1'],
        allowedUrls: [...new Set(manifest.allowedUrls.map((url) => url.trim()).filter(Boolean))].sort(),
        modules,
    };
};

const verifyModuleToken = (token, type, keys = trustedKeys, now = Date.now()) => {
    if (typeof token !== 'string' || token.length > 65536) throw moduleError('access-denied');
    const parts = token.split('.');
    if (parts.length !== 3 || parts.some((part) => !/^[a-zA-Z0-9_-]+$/.test(part))) throw moduleError('access-denied');
    let header;
    let payload;
    try {
        header = JSON.parse(Buffer.from(parts[0], 'base64url').toString('utf8'));
        payload = JSON.parse(Buffer.from(parts[1], 'base64url').toString('utf8'));
    } catch {
        throw moduleError('access-denied');
    }
    if (
        header.alg !== 'RS256' ||
        header.typ !== type ||
        typeof header.kid !== 'string' ||
        !Object.hasOwn(keys, header.kid) ||
        header.jku ||
        header.x5u ||
        header.crit ||
        payload.aud !== 'ps-addon-modules' ||
        payload.iss !== 'pulsesync-addon-modules' ||
        !Number.isSafeInteger(payload.exp) ||
        !Number.isSafeInteger(payload.iat) ||
        payload.exp * 1000 <= now ||
        payload.iat * 1000 > now + 5000 ||
        payload.exp - payload.iat > (type === 'ps-addon-release-binding+jwt' ? 900 : 60)
    )
        throw moduleError('access-denied');
    if (!crypto.verify('RSA-SHA256', Buffer.from(`${parts[0]}.${parts[1]}`), keys[header.kid], Buffer.from(parts[2], 'base64url'))) {
        throw moduleError('integrity-mismatch');
    }
    return payload;
};

const assertAddonBinding = (addon, binding) => {
    if (
        binding.runtimeId !== addon.id ||
        binding.catalogAddonId !== addon.catalogAddonId ||
        binding.codeHash !== sha256(addon.code) ||
        binding.manifestHash !== sha256(JSON.stringify(normalizeModuleManifest(addon.securityManifest)))
    )
        throw moduleError('integrity-mismatch');
};

module.exports = { sha256, normalizeModuleManifest, verifyModuleToken, assertAddonBinding };
