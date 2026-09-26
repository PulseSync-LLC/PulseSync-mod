'use strict';

const crypto = require('node:crypto');
const { AddonModuleExecutionStore, MODULE_IPC, moduleError } = require('./addonModuleExecution.js');
const { verifyModuleToken, assertAddonBinding, sha256 } = require('./addonModuleTrust.js');
const { resolveCanonicalAddon, validateCanonicalAddonCode } = require('./isolatedAddonExecution.js');

const localFingerprint = (addon) => sha256(JSON.stringify([addon.id, addon.code, addon.securityManifest, addon.localModules]));

class AddonModuleHost {
    constructor(allocateWorld, { trustedKeys } = {}) {
        this.store = new AddonModuleExecutionStore({ allocateWorld });
        this.revision = 0;
        this.manager = null;
        this.webContents = null;
        this.verifyToken = (token, type) => verifyModuleToken(token, type, trustedKeys);
    }

    attach(manager, webContents) {
        this.invalidateAll();
        this.detach?.();
        this.manager = manager;
        this.webContents = webContents;
        const reconcile = () => this.reconcile();
        const invalidate = () => this.invalidateAll();
        const revoked = (activationId) => {
            this.revision++;
            for (const activation of this.store.active.values()) {
                if (activation.activationId === activationId) this.invalidate(activation);
            }
        };
        const navigation = (_event, _url, inPlace, isMainFrame) => {
            if (isMainFrame && !inPlace) this.invalidateAll();
        };
        const reset = () => this.store.resetDocument(webContents.id);
        const destroyed = () => {
            this.invalidateAll();
            reset();
            detach();
        };
        const detach = () => {
            manager.off('module-context-changed', reconcile);
            manager.off('disconnected', invalidate);
            manager.off('module-revoked', revoked);
            webContents.off('did-start-navigation', navigation);
            webContents.off('did-navigate', reset);
            webContents.off('render-process-gone', invalidate);
            webContents.off('destroyed', destroyed);
        };
        manager.on('module-context-changed', reconcile);
        manager.on('disconnected', invalidate);
        manager.on('module-revoked', revoked);
        webContents.on('did-start-navigation', navigation);
        webContents.on('did-navigate', reset);
        webContents.on('render-process-gone', invalidate);
        webContents.once('destroyed', destroyed);
        this.detach = detach;
    }

    invalidate(activation) {
        this.store.invalidate(activation);
        if (!activation.development) void this.manager?.requestAddonModule({ operation: 'dispose', activationId: activation.activationId }).catch(() => {});
        if (this.webContents && !this.webContents.isDestroyed()) {
            void this.webContents
                .executeJavaScriptInIsolatedWorld(activation.worldId, [
                    {
                        code: 'globalThis.__PULSESYNC_ISOLATED_DISPOSE__?.(); null;',
                    },
                ])
                .catch(() => {});
        }
    }

    invalidateAll() {
        this.revision++;
        for (const activation of this.store.active.values()) this.invalidate(activation);
    }

    current(runtimeId) {
        return resolveCanonicalAddon(this.manager.getWebHostAddonsSnapshot(), runtimeId);
    }

    reconcile() {
        this.revision++;
        for (const activation of this.store.active.values()) {
            try {
                this.assertCurrent(activation);
            } catch {
                this.invalidate(activation);
            }
        }
    }

    async prepare(addon, senderId) {
        const revision = this.revision;
        const activationId = crypto.randomUUID();
        if (addon.localModules) {
            const binding = localFingerprint(addon);
            if (localFingerprint(this.current(addon.id)) !== binding) throw moduleError('aborted');
            const previous = this.store.active.get(`${senderId}:${addon.id}`);
            if (previous) this.invalidate(previous);
            const activation = this.store.activate({
                senderId,
                runtimeId: addon.id,
                binding,
                descriptors: addon.localModules,
                activationId,
                development: true,
            });
            return { activation, init: { descriptors: activation.descriptors, errors: {}, development: true } };
        }
        try {
            const response = await this.manager.requestAddonModule({ operation: 'resolve', addonId: addon.id, activationId });
            if (revision !== this.revision) throw moduleError('aborted');
            const binding = this.verifyToken(response.releaseBinding, 'ps-addon-release-binding+jwt');
            assertAddonBinding(addon, binding);
            assertAddonBinding(this.current(addon.id), binding);
            const resolution = this.verifyToken(response.resolution, 'ps-addon-module-resolution+jwt');
            assertAddonBinding(addon, resolution.binding);
            if (resolution.activationId !== activationId || resolution.binding.releaseId !== binding.releaseId) throw moduleError('integrity-mismatch');
            for (const [alias, ref] of Object.entries(addon.securityManifest.modules)) {
                const descriptor = resolution.descriptors?.[alias];
                if (!descriptor && !ref.optional) throw moduleError(resolution.errors?.[alias] || 'unavailable');
                if (descriptor && (descriptor.moduleId !== ref.moduleId || descriptor.apiMajor !== ref.apiMajor || (ref.version && descriptor.version !== ref.version)))
                    throw moduleError('incompatible-api');
            }
            if (Object.keys(resolution.descriptors).some((alias) => !Object.hasOwn(addon.securityManifest.modules, alias))) throw moduleError('undeclared-module');
            const previous = this.store.active.get(`${senderId}:${addon.id}`);
            if (previous) this.invalidate(previous);
            const activation = this.store.activate({
                senderId,
                runtimeId: addon.id,
                binding: response.releaseBinding,
                descriptors: resolution.descriptors,
                activationId,
            });
            return {
                activation,
                init: {
                    descriptors: activation.descriptors,
                    errors: resolution.errors,
                },
            };
        } catch (error) {
            void this.manager.requestAddonModule({ operation: 'dispose', activationId }).catch(() => {});
            throw error;
        }
    }

    assertCurrent(activation) {
        this.store.assertActive(activation);
        const addon = this.current(activation.runtimeId);
        if (activation.development) {
            if (!addon.localModules || localFingerprint(addon) !== activation.binding) throw moduleError('aborted');
            return;
        }
        const bindingParts = activation.binding.split('.');
        const binding = JSON.parse(Buffer.from(bindingParts[1], 'base64url').toString('utf8'));
        assertAddonBinding(addon, binding);
    }

    register(ipcMain) {
        const assertSender = (event) => {
            if (event.sender !== this.webContents || event.senderFrame !== event.sender.mainFrame) throw moduleError('access-denied');
        };
        ipcMain.handle(MODULE_IPC.dispose, (event, payload) => {
            assertSender(event);
            const activation = this.store.capabilities.get(payload?.capability);
            if (!activation || activation.senderId !== event.sender.id) return false;
            this.invalidate(activation);
            return true;
        });
        ipcMain.handle(MODULE_IPC.request, async (event, payload) => {
            assertSender(event);
            const { activation, descriptor } = this.store.resolve(event.sender.id, payload?.capability, payload?.alias);
            this.assertCurrent(activation);
            if (payload?.operation !== 'load') throw moduleError('access-denied');
            let bytes;
            if (activation.development) {
                const response = await this.manager.requestAddonModule({
                    operation: 'load-local',
                    addonId: activation.runtimeId,
                    activationId: activation.activationId,
                    alias: payload.alias,
                    sha256: descriptor.sha256,
                });
                if (typeof response.bytes !== 'string' || response.bytes.length > Math.ceil(descriptor.size / 3) * 4) throw moduleError('integrity-mismatch');
                bytes = Buffer.from(response.bytes, 'base64');
                this.assertCurrent(activation);
            } else {
                if (!(payload.bytes instanceof Uint8Array)) throw moduleError('integrity-mismatch');
                bytes = Buffer.from(payload.bytes);
            }
            if (bytes.byteLength !== descriptor.size) throw moduleError('integrity-mismatch');
            if (sha256(bytes) !== descriptor.sha256) throw moduleError('integrity-mismatch');
            if (!activation.development) {
                const response = await this.manager.requestAddonModule({
                    operation: payload.operation,
                    activationId: activation.activationId,
                    alias: payload.alias,
                });
                this.assertCurrent(activation);
                const approval = this.verifyToken(response.approval, 'ps-addon-module-approval+jwt');
                assertAddonBinding(this.current(activation.runtimeId), approval);
                if (
                    approval.activationId !== activation.activationId ||
                    approval.alias !== payload.alias ||
                    Object.keys(descriptor).some((key) => descriptor[key] !== approval.descriptor?.[key])
                )
                    throw moduleError('integrity-mismatch');
            }
            if (descriptor.kind === 'wasm') return { kind: 'wasm', bytes: new Uint8Array(bytes) };
            const code = validateCanonicalAddonCode(activation.runtimeId, bytes.toString('utf8'));
            if (sha256(code) !== descriptor.sha256) throw moduleError('integrity-mismatch');
            await event.sender.executeJavaScriptInIsolatedWorld(activation.worldId, [
                { code, url: `pulsesync-module://${descriptor.moduleId}/${descriptor.versionId}.js` },
            ]);
            this.assertCurrent(activation);
            return { kind: 'javascript' };
        });
    }
}

module.exports = { AddonModuleHost };
