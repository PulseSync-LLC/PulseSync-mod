'use strict';

const { matchesAllowedUrl } = require('../handlers/handleHeadersReceived/corsHandler.js');
const worlds = new Map();
const senders = new Set();
const ISOLATED_ORIGIN = /^https:\/\/addon-\d+\.pulsesync\.invalid$/;

function registerAddonNetworkPolicy(sender, worldId, addon, getSnapshot) {
    const origin = `https://addon-${worldId}.pulsesync.invalid`;
    const key = `${sender.id}:${origin}`;
    worlds.set(key, { addon, getSnapshot });
    if (!senders.has(sender.id)) {
        senders.add(sender.id);
        sender.once('destroyed', () => {
            senders.delete(sender.id);
            for (const key of worlds.keys()) if (key.startsWith(`${sender.id}:`)) worlds.delete(key);
        });
    }
    return origin;
}

function checkAddonNetworkRequest(senderId, origin, value) {
    if (typeof origin !== 'string' || !ISOLATED_ORIGIN.test(origin)) return undefined;
    const policy = worlds.get(`${senderId}:${origin}`);
    if (!policy) return false;
    const current = policy.getSnapshot()?.addons?.find((addon) => addon.id === policy.addon.id);
    if (!current || current.code !== policy.addon.code) return false;
    try {
        const target = new URL(value);
        if (target.origin === 'http://localhost:2007' && /^\/assets(?:\/|$)/.test(target.pathname)) {
            return target.searchParams.get('id') === current.id;
        }
    } catch {
        return false;
    }
    const rules = current.securityManifest?.allowedUrls ?? current.allowedUrls ?? [];
    return rules.some((rule) => matchesAllowedUrl(value, rule));
}

module.exports = { registerAddonNetworkPolicy, checkAddonNetworkRequest };
