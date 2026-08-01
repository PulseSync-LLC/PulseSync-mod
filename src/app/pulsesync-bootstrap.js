const modules = [
    ['runtime', () => import('./pulsesync-runtime/runtime.js')],
    ['web-host', () => import('./pulsesync-web/host.js')],
];

void (async () => {
    for (const [name, load] of modules) {
        try {
            await load();
        } catch (error) {
            console.error(`PulseSync ${name} failed to load`, error);
        }
    }
})();
