const modules = [
    { name: 'runtime', load: () => import('./pulsesync-runtime/runtime.js') },
    { name: 'web-host', load: () => import('./pulsesync-web/host.js'), stylesheet: './pulsesync-web/host.css' },
];

function loadStylesheet(name, href) {
    const existing = document.querySelector(`link[data-pulsesync-stylesheet="${name}"]`);
    if (existing) return Promise.resolve();

    return new Promise((resolve, reject) => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = new URL(href, import.meta.url).href;
        link.dataset.pulsesyncStylesheet = name;
        link.addEventListener('load', resolve, { once: true });
        link.addEventListener('error', () => reject(new Error(`PulseSync ${name} stylesheet failed to load`)), { once: true });
        document.head.append(link);
    });
}

void (async () => {
    for (const { name, load, stylesheet } of modules) {
        if (stylesheet) {
            try {
                await loadStylesheet(name, stylesheet);
            } catch (error) {
                console.error(`PulseSync ${name} stylesheet failed to load`, error);
            }
        }

        try {
            await load();
        } catch (error) {
            console.error(`PulseSync ${name} failed to load`, error);
        }
    }
})();
