const fs = require('node:fs/promises');
const path = require('node:path');
const { setTimeout: delay } = require('node:timers/promises');
const { createRequire } = require('node:module');
const { Agent } = require('node:https');
const ncs = require('nocopyrightsounds-api');
const axios = createRequire(require.resolve('nocopyrightsounds-api'))('axios');

const CATALOG_PATH = path.resolve(__dirname, '../../webModules/pulsesyncRuntime/src/data/ncsCatalog.json');
const SOURCE_URL = 'https://ncs.io/music';

function decodeHtml(value) {
    const entities = { amp: '&', quot: '"', apos: "'", lt: '<', gt: '>', nbsp: ' ' };
    return value.replace(/&(#x[\da-f]+|#\d+|amp|quot|apos|lt|gt|nbsp);/gi, (_entity, name) => {
        if (name[0] !== '#') return entities[name.toLowerCase()];
        return String.fromCodePoint(name[1].toLowerCase() === 'x' ? parseInt(name.slice(2), 16) : Number(name.slice(1)));
    });
}

async function getSongs(page) {
    for (let attempt = 0; attempt < 3; attempt++) {
        try {
            return await ncs.getSongs(page);
        } catch (error) {
            if (attempt === 2) throw error;
            console.warn(`NCS page ${page + 1}: ${error.message}; retrying`);
            await delay(1000 * (attempt + 1));
        }
    }
}

async function updateNcsCatalog() {
    const agent = new Agent({ keepAlive: false });
    const timeoutInterceptor = axios.interceptors.request.use((config) => ({
        ...config,
        timeout: 15000,
        httpsAgent: agent,
        headers: { ...config.headers, Connection: 'close' },
    }));
    const tracks = new Map();
    let pageCount = 0;
    try {
        for (; pageCount <= 500; pageCount++) {
            const songs = await getSongs(pageCount);
            if (!songs.length) break;
            if (pageCount === 500) throw new Error('NCS catalogue exceeds the expected page limit');
            const previousSize = tracks.size;
            for (const song of songs) {
                const artists = song.artists.map((artist) => decodeHtml(artist.name).trim());
                if (!song.id || !song.name || !song.url || artists.some((artist) => !artist)) {
                    throw new Error(`Incomplete NCS metadata on page ${pageCount + 1}`);
                }
                tracks.set(song.id, {
                    title: song.name,
                    artists,
                    url: new URL(song.url, SOURCE_URL).href,
                    genre: song.genre ?? null,
                });
            }
            if (tracks.size === previousSize) throw new Error(`NCS page ${pageCount + 1} repeats previously downloaded tracks`);
            if (pageCount === 0 || (pageCount + 1) % 10 === 0) console.log(`NCS: ${pageCount + 1} pages, ${tracks.size} tracks`);
            await delay(200);
        }
    } finally {
        axios.interceptors.request.eject(timeoutInterceptor);
        agent.destroy();
    }
    if (tracks.size < 1000) throw new Error(`NCS catalogue appears incomplete: ${tracks.size} tracks; previous file was preserved`);
    const catalog = { source: SOURCE_URL, fetchedAt: new Date().toISOString(), pageCount, tracks: [...tracks.values()] };
    await fs.mkdir(path.dirname(CATALOG_PATH), { recursive: true });
    await fs.writeFile(`${CATALOG_PATH}.tmp`, JSON.stringify(catalog, null, 4) + '\n', 'utf8');
    await fs.rename(`${CATALOG_PATH}.tmp`, CATALOG_PATH);
    console.log(`Saved ${catalog.tracks.length} tracks from ${pageCount} pages to ${CATALOG_PATH}`);
    const missingArtists = catalog.tracks.filter((track) => !track.artists.length).length;
    if (missingArtists) console.warn(`NCS: ${missingArtists} tracks have no artist metadata and will not be matched`);
}

if (require.main === module) {
    updateNcsCatalog().catch((error) => {
        console.error(error.message);
        process.exitCode = 1;
    });
}

module.exports = { updateNcsCatalog };
