const fs = require('fs');
const path = require('path');

function sanitizeId(name) {
    return String(name)
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\-_]+/g, '-')
        .replace(/^-+|-+$/g, '');
}

const SYSTEM_IDS = new Set(['wolfylibrary']);

const CANDIDATE_PATHS = [path.resolve(__dirname, './scripts/WolfyLibrary.js')];

function readFirstExisting(paths) {
    for (const p of paths) {
        try {
            if (fs.existsSync(p)) {
                return fs.readFileSync(p, 'utf8');
            }
        } catch {}
    }
    return '';
}

function getSystemAddons() {
    const wolfyScript = readFirstExisting(CANDIDATE_PATHS);
    const addons = [];

    if (wolfyScript && wolfyScript.trim()) {
        addons.push({
            name: 'WolfyLibrary',
            addon: 'WolfyLibrary',
            system: true,
            protected: true,
            order: -1000,
            css: '',
            script: wolfyScript,
        });
    }

    return addons;
}

function isSystemId(idOrName) {
    const id = sanitizeId(idOrName || '');
    return SYSTEM_IDS.has(id);
}

function mergeWithSystem(incoming = []) {
    const sys = getSystemAddons();

    const seen = new Set();
    const systemList = [];
    for (const a of sys) {
        const id = sanitizeId(a.addon || a.name);
        if (!id || seen.has(id)) continue;
        seen.add(id);
        systemList.push(a);
    }

    const nonSystem = [];
    for (const ext of incoming) {
        if (!ext) continue;
        const id = sanitizeId(ext.addon || ext.name);
        if (!id || seen.has(id)) continue;
        if (isSystemId(id) || ext.system === true || ext.protected === true) continue;
        seen.add(id);
        nonSystem.push(ext);
    }

    systemList.sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
    nonSystem.sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

    return [...systemList, ...nonSystem];
}

module.exports = {
    getSystemAddons,
    mergeWithSystem,
    isSystemId,
    sanitizeId,
};
