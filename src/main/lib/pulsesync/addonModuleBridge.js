'use strict';

const { MODULE_IPC, moduleError, validAlias } = require('./addonModuleExecution.js');

const createAddonModuleBridge = (invoke, capability) => {
    let active = true;
    const request = async (alias, bytes) => {
        if (!active) throw moduleError('aborted');
        if (!validAlias(alias)) throw moduleError('undeclared-module');
        if (!(bytes instanceof Uint8Array) || !bytes.byteLength || bytes.byteLength > 10 * 1024 * 1024) throw moduleError('integrity-mismatch');
        const result = await invoke(MODULE_IPC.request, { capability, operation: 'load', alias, bytes });
        if (!active) throw moduleError('aborted');
        return result;
    };
    return Object.freeze({
        load: request,
        dispose: () => {
            if (!active) return Promise.resolve();
            active = false;
            return invoke(MODULE_IPC.dispose, { capability });
        },
    });
};

module.exports = { createAddonModuleBridge };
