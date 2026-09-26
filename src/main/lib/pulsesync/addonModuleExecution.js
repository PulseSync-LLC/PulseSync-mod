'use strict';

const crypto = require('node:crypto');

const MAX_MODULE_WORLDS_PER_RENDERER = 32;
const MODULE_IPC = Object.freeze({ request: 'PULSESYNC_MODULE_REQUEST', dispose: 'PULSESYNC_MODULE_DISPOSE' });

const moduleError = (code) => Object.assign(new Error(`PulseSync modules: ${code}`), { code });
const validAlias = (alias) => typeof alias === 'string' && /^[a-z][a-z0-9_-]{0,63}$/.test(alias);

class AddonModuleExecutionStore {
    constructor({ allocateWorld, maxWorlds = MAX_MODULE_WORLDS_PER_RENDERER } = {}) {
        if (typeof allocateWorld !== 'function') throw new TypeError('A world allocator is required');
        this.allocateWorld = allocateWorld;
        this.maxWorlds = maxWorlds;
        this.active = new Map();
        this.capabilities = new Map();
        this.generations = new Map();
    }

    activate({ senderId, runtimeId, binding, descriptors, activationId = crypto.randomUUID() }) {
        if (!Number.isSafeInteger(senderId) || typeof runtimeId !== 'string' || !runtimeId || typeof binding !== 'string' || !binding || binding.length > 16384) {
            throw moduleError('access-denied');
        }
        const count = this.generations.get(senderId) || 0;
        if (count >= this.maxWorlds) throw moduleError('reload-required');
        const pins = Object.create(null);
        for (const [alias, descriptor] of Object.entries(descriptors)) {
            if (
                !validAlias(alias) ||
                !descriptor ||
                !/^[a-f0-9]{64}$/.test(descriptor.sha256) ||
                descriptor.formatVersion !== 1 ||
                !['javascript', 'wasm'].includes(descriptor.kind) ||
                !['public', 'protected'].includes(descriptor.access) ||
                !Number.isSafeInteger(descriptor.apiMajor) ||
                descriptor.apiMajor < 1 ||
                !Number.isSafeInteger(descriptor.size) ||
                descriptor.size < 1 ||
                descriptor.size > (descriptor.kind === 'javascript' ? 2 : 10) * 1024 * 1024 ||
                ['moduleId', 'versionId', 'version'].some((field) => typeof descriptor[field] !== 'string' || !descriptor[field] || descriptor[field].length > 160)
            )
                throw moduleError('integrity-mismatch');
            pins[alias] = Object.freeze({
                formatVersion: 1,
                moduleId: descriptor.moduleId,
                versionId: descriptor.versionId,
                version: descriptor.version,
                apiMajor: descriptor.apiMajor,
                kind: descriptor.kind,
                access: descriptor.access,
                sha256: descriptor.sha256,
                size: descriptor.size,
            });
        }
        const key = `${senderId}:${runtimeId}`;
        this.invalidate(this.active.get(key));
        const activation = Object.freeze({
            senderId,
            runtimeId,
            binding,
            descriptors: Object.freeze(pins),
            worldId: this.allocateWorld(),
            activationId,
            capability: crypto.randomBytes(32).toString('hex'),
        });
        this.generations.set(senderId, count + 1);
        this.active.set(key, activation);
        this.capabilities.set(activation.capability, activation);
        return activation;
    }

    assertActive(activation) {
        if (!activation || this.capabilities.get(activation.capability) !== activation) throw moduleError('aborted');
        return activation;
    }

    resolve(senderId, capability, alias) {
        const activation = this.capabilities.get(capability);
        if (!activation || activation.senderId !== senderId) throw moduleError('access-denied');
        if (!validAlias(alias) || !Object.hasOwn(activation.descriptors, alias)) throw moduleError('undeclared-module');
        return { activation, descriptor: activation.descriptors[alias] };
    }

    invalidate(activation) {
        if (!activation) return;
        this.capabilities.delete(activation.capability);
        const key = `${activation.senderId}:${activation.runtimeId}`;
        if (this.active.get(key) === activation) this.active.delete(key);
    }

    invalidateSender(senderId) {
        for (const activation of this.active.values()) {
            if (activation.senderId === senderId) this.invalidate(activation);
        }
    }

    resetDocument(senderId) {
        this.invalidateSender(senderId);
        this.generations.delete(senderId);
    }
}

module.exports = { AddonModuleExecutionStore, MAX_MODULE_WORLDS_PER_RENDERER, MODULE_IPC, moduleError, validAlias };
