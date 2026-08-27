'use strict';

const crypto = require('node:crypto');
const { parse } = require('@babel/parser');

const MAX_ISOLATED_ADDON_CODE_LENGTH = 10_000_000;
const MAX_WEB_HOST_ASSET_CSS_LENGTH = 10_000_000;
const ISOLATED_EXECUTION_TTL_MS = 15_000;

const createBlockedAddonError = (addonId, category, reason) => {
    const error = new Error(`[PulseSync Addons] Blocked isolated addon ${addonId || '<unknown>'}: ${category}: ${reason}`);
    error.category = category;
    return error;
};

const normalizeAddonId = (value) => (typeof value === 'string' ? value.trim() : '');

const validateAddonId = (value) => {
    const addonId = normalizeAddonId(value);
    if (!addonId || addonId.length > 160 || addonId.includes('\0')) {
        throw createBlockedAddonError(addonId, 'invalid-addon-id', 'addon id must be a non-empty string of at most 160 characters');
    }
    return addonId;
};

const normalizeAssetType = (value) => {
    if (value === undefined || value === 'web-addon') return 'web-addon';
    if (value === 'theme') return 'theme';
    throw createBlockedAddonError('<snapshot>', 'invalid-asset-type', `asset type ${String(value)} is not supported`);
};

const validateCanonicalCss = (assetId, value, required = false) => {
    const css = typeof value === 'string' ? value : '';
    if (css.length > MAX_WEB_HOST_ASSET_CSS_LENGTH) {
        throw createBlockedAddonError(assetId, 'css-too-large', `stylesheet exceeds ${MAX_WEB_HOST_ASSET_CSS_LENGTH} characters`);
    }
    if (required && (!css.trim() || css.trim() === '{}')) {
        throw createBlockedAddonError(assetId, 'empty-css', 'theme stylesheet is empty');
    }
    return css;
};

const readStaticString = (node) => {
    if (!node || typeof node !== 'object') return null;
    if (node.type === 'StringLiteral' || (node.type === 'Literal' && typeof node.value === 'string')) return node.value;
    if (node.type === 'TemplateLiteral' && node.expressions?.length === 0) return node.quasis.map((quasi) => quasi.value?.cooked ?? '').join('');
    if (node.type === 'BinaryExpression' && node.operator === '+') {
        const left = readStaticString(node.left);
        const right = readStaticString(node.right);
        return left !== null && right !== null ? left + right : null;
    }
    return null;
};

const readPropertyName = (node) => {
    if (!node || typeof node !== 'object') return null;
    const property = node.type === 'MemberExpression' || node.type === 'OptionalMemberExpression' ? node.property : node;
    if (!property || typeof property !== 'object') return null;
    if (property.type === 'Identifier') return property.name;
    return readStaticString(property);
};

const isExecutableMarkup = (value) =>
    /<\s*script\b/i.test(value) ||
    /\son[a-z0-9_-]+\s*=/i.test(value) ||
    /\b(?:href|src|action|formaction|xlink:href)\s*=\s*['"]?\s*javascript\s*:/i.test(value) ||
    /<\s*iframe\b[^>]*\bsrcdoc\s*=/i.test(value);

const isExecutableAttribute = (name, value) => {
    const normalizedName = String(name).toLowerCase();
    if (normalizedName.startsWith('on') || normalizedName === 'srcdoc') return true;
    return ['href', 'src', 'action', 'formaction', 'xlink:href'].includes(normalizedName) && /^\s*javascript\s*:/i.test(value);
};

const findBlockedCapability = (root) => {
    const pending = [root];
    const seen = new Set();

    while (pending.length) {
        const node = pending.pop();
        if (!node || typeof node !== 'object' || seen.has(node)) continue;
        seen.add(node);

        if ((node.type === 'CallExpression' || node.type === 'OptionalCallExpression') && node.callee?.type?.includes('MemberExpression')) {
            const methodName = readPropertyName(node.callee);
            const args = Array.isArray(node.arguments) ? node.arguments : [];
            const tagName = methodName === 'createElementNS' ? readStaticString(args[1]) : readStaticString(args[0]);
            if ((methodName === 'createElement' || methodName === 'createElementNS') && tagName?.toLowerCase() === 'script') {
                return 'executable script element creation is not allowed';
            }

            if (methodName === 'setAttribute' || methodName === 'setAttributeNS') {
                const offset = methodName === 'setAttributeNS' ? 1 : 0;
                const name = readStaticString(args[offset]);
                const value = readStaticString(args[offset + 1]);
                if (name !== null && value !== null && isExecutableAttribute(name, value)) {
                    return `executable DOM attribute ${name} is not allowed`;
                }
            }

            const markupArgument = methodName === 'insertAdjacentHTML' ? args[1] : args[0];
            if (['insertAdjacentHTML', 'createContextualFragment', 'write', 'writeln'].includes(methodName)) {
                const markup = readStaticString(markupArgument);
                if (markup !== null && isExecutableMarkup(markup)) return `executable markup through ${methodName} is not allowed`;
            }
        }

        if (node.type === 'AssignmentExpression' && node.left?.type?.includes('MemberExpression')) {
            const propertyName = readPropertyName(node.left);
            const value = readStaticString(node.right);
            if (propertyName && value !== null) {
                if (['innerHTML', 'outerHTML'].includes(propertyName) && isExecutableMarkup(value)) {
                    return `executable markup through ${propertyName} is not allowed`;
                }
                if (isExecutableAttribute(propertyName, value)) return `executable DOM property ${propertyName} is not allowed`;
            }
        }

        for (const value of Object.values(node)) {
            if (Array.isArray(value)) pending.push(...value);
            else if (value && typeof value === 'object') pending.push(value);
        }
    }

    return null;
};

const validateCanonicalAddonCode = (addonId, code) => {
    if (typeof code !== 'string' || !code.trim()) throw createBlockedAddonError(addonId, 'empty-code', 'bundle is empty');
    if (code.length > MAX_ISOLATED_ADDON_CODE_LENGTH) {
        throw createBlockedAddonError(addonId, 'code-too-large', `bundle exceeds ${MAX_ISOLATED_ADDON_CODE_LENGTH} characters`);
    }

    let program;
    try {
        program = parse(code, { sourceType: 'script', allowReturnOutsideFunction: false });
    } catch (error) {
        throw createBlockedAddonError(addonId, 'invalid-javascript', error instanceof Error ? error.message : 'bundle parse failed');
    }

    const blockedCapability = findBlockedCapability(program);
    if (blockedCapability) throw createBlockedAddonError(addonId, 'blocked-isolated-capability', blockedCapability);
    return code;
};

const resolveCanonicalAddon = (snapshot, requestedAddonId) => {
    const addonId = validateAddonId(requestedAddonId);
    const addons = Array.isArray(snapshot?.addons) ? snapshot.addons : [];
    const matches = addons.filter((addon) => normalizeAddonId(addon?.id) === addonId);
    if (matches.length !== 1) {
        throw createBlockedAddonError(addonId, 'unknown-addon', matches.length ? 'addon id is duplicated in the canonical snapshot' : 'addon is not active');
    }

    const addon = matches[0];
    if (normalizeAssetType(addon.type) !== 'web-addon') {
        throw createBlockedAddonError(addonId, 'non-executable-asset', 'CSS-only themes cannot be executed');
    }
    const code = validateCanonicalAddonCode(addonId, addon.code);
    return Object.freeze({
        id: addonId,
        name: typeof addon.name === 'string' && addon.name.trim() ? addon.name : addonId,
        directoryName: typeof addon.directoryName === 'string' && addon.directoryName.trim() ? addon.directoryName : addonId,
        ...(typeof addon.version === 'string' ? { version: addon.version } : {}),
        code,
    });
};

const hashCanonicalAddons = (addons) =>
    crypto
        .createHash('sha256')
        .update(
            JSON.stringify(
                [...addons].sort((left, right) => {
                    const leftKey = JSON.stringify(left);
                    const rightKey = JSON.stringify(right);
                    return leftKey < rightKey ? -1 : leftKey > rightKey ? 1 : 0;
                }),
            ),
        )
        .digest('hex');

const normalizeCanonicalSnapshot = (payload, onBlocked = () => {}) => {
    if (payload?.runtime !== undefined && payload.runtime !== 'isolated' && payload.runtime !== 'sandbox') {
        throw createBlockedAddonError('<snapshot>', 'invalid-runtime', `runtime ${String(payload.runtime)} is not isolated`);
    }

    const sourceAddons = Array.isArray(payload?.addons) ? payload.addons : [];
    if (sourceAddons.length > 256) {
        throw createBlockedAddonError('<snapshot>', 'too-many-addons', 'snapshot contains more than 256 addons');
    }

    const idCounts = new Map();
    for (const addon of sourceAddons) {
        const addonId = normalizeAddonId(addon?.id);
        if (addonId) idCounts.set(addonId, (idCounts.get(addonId) || 0) + 1);
    }

    const addons = [];
    for (const sourceAddon of sourceAddons) {
        try {
            const addonId = validateAddonId(sourceAddon?.id);
            if (idCounts.get(addonId) !== 1) {
                throw createBlockedAddonError(addonId, 'duplicate-addon-id', 'addon id is duplicated in the incoming snapshot');
            }
            const type = normalizeAssetType(sourceAddon?.type);
            const baseAsset = {
                type,
                id: addonId,
                name: typeof sourceAddon?.name === 'string' && sourceAddon.name.trim() ? sourceAddon.name : addonId,
                directoryName: typeof sourceAddon?.directoryName === 'string' && sourceAddon.directoryName.trim() ? sourceAddon.directoryName : addonId,
                ...(typeof sourceAddon?.version === 'string' ? { version: sourceAddon.version } : {}),
            };

            if (type === 'theme') {
                if (typeof sourceAddon?.code === 'string' && sourceAddon.code.trim()) {
                    throw createBlockedAddonError(addonId, 'theme-script-not-allowed', 'CSS-only themes cannot contain addon code');
                }
                addons.push({
                    ...baseAsset,
                    css: validateCanonicalCss(addonId, sourceAddon?.css, true),
                });
            } else {
                addons.push({
                    ...baseAsset,
                    css: validateCanonicalCss(addonId, sourceAddon?.css),
                    code: validateCanonicalAddonCode(addonId, sourceAddon?.code),
                });
            }
        } catch (error) {
            try {
                onBlocked(error);
            } catch {}
        }
    }

    const suppliedHash = typeof payload?.hash === 'string' ? payload.hash : '';
    return Object.freeze({
        runtime: 'isolated',
        hash: addons.length === sourceAddons.length && suppliedHash ? suppliedHash : hashCanonicalAddons(addons),
        addons: Object.freeze(addons),
    });
};

const validateChannelToken = (addonId, value) => {
    const channelToken = typeof value === 'string' ? value : '';
    if (!/^[a-f0-9-]{36}$/i.test(channelToken)) {
        throw createBlockedAddonError(addonId, 'invalid-channel-token', 'channel token must be a UUID');
    }
    return channelToken;
};

class IsolatedAddonExecutionStore {
    constructor(now = () => Date.now()) {
        this.now = now;
        this.pending = new Map();
    }

    prepare(value) {
        this.clearExpired();
        const executionToken = crypto.randomUUID();
        this.pending.set(executionToken, { ...value, expiresAt: this.now() + ISOLATED_EXECUTION_TTL_MS });
        return executionToken;
    }

    consume(executionToken, senderId) {
        this.clearExpired();
        const pending = typeof executionToken === 'string' ? this.pending.get(executionToken) : undefined;
        if (!pending || pending.senderId !== senderId) throw new Error('PulseSync isolated addon execution token is invalid or expired');
        this.pending.delete(executionToken);
        return pending;
    }

    clearExpired() {
        const now = this.now();
        for (const [token, pending] of this.pending) {
            if (pending.expiresAt <= now) this.pending.delete(token);
        }
    }
}

module.exports = {
    ISOLATED_EXECUTION_TTL_MS,
    MAX_ISOLATED_ADDON_CODE_LENGTH,
    MAX_WEB_HOST_ASSET_CSS_LENGTH,
    IsolatedAddonExecutionStore,
    normalizeCanonicalSnapshot,
    resolveCanonicalAddon,
    validateAddonId,
    validateCanonicalAddonCode,
    validateChannelToken,
};
