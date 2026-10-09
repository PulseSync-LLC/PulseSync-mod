type Store = Record<string, any>;
type Changes = { artists: Iterable<string>; albums: Iterable<string> };
type Root = { store: Store; environment: (store: Store) => Store };

const roots = new Set<Root>();
const pendingArtists = new Set<string>();
const pendingAlbums = new Set<string>();
let scheduled = false;
let running = false;
let revision = 0;

export function registerNativeMetadataRoot(store: Store, environment: Root['environment']) {
    const entry = { store, environment };
    roots.add(entry);
    return () => roots.delete(entry);
}

export function notifyLibraryChanges(changes: Changes) {
    if (!roots.size) return;
    for (const id of changes.artists) pendingArtists.add(id);
    for (const id of changes.albums) pendingAlbums.add(id);
    revision++;
    if (scheduled || running) return;
    scheduled = true;
    queueMicrotask(() => void refresh());
}

function currentRoute() {
    return `${window.location.pathname}${window.location.search}`;
}

function routeId(type: 'album' | 'artist') {
    if (window.location.pathname.split('/')[1] !== type) return '';
    return new URLSearchParams(window.location.search).get(`${type}Id`) ?? '';
}

async function refreshAlbum(root: Root, ids: Set<string>, generation: number, route: string) {
    const id = routeId('album');
    const page = root.store.album;
    if (!ids.has(id) || String(page?.id) !== id || !page?.isResolved || typeof page.refreshLibraryVolumes !== 'function') return;
    const resource = root.environment(page).albumResource;
    if (typeof resource?.getAlbumWithTracksIds !== 'function') return;
    const album = await resource.getAlbumWithTracksIds({ albumId: Number(id), resumeStream: false });
    if (!roots.has(root) || revision !== generation || currentRoute() !== route || String(page.id) !== id || !Array.isArray(album?.volumes)) return;
    await page.refreshLibraryVolumes({
        albumId: Number(id),
        preloadedAlbum: album,
        sonataState: root.store.sonataState,
        isCurrent: () => roots.has(root) && revision === generation && currentRoute() === route && String(page.id) === id,
    });
}

function artistBlocks(landing: Store): Store[] {
    const blocks = [...(landing.upperBlocks ?? [])];
    for (const tab of landing.tabs?.data ?? []) blocks.push(...(tab.blocks ?? []));
    return blocks.slice(0, 100).filter((block) => ['ARTIST_POPULAR_TRACKS', 'ARTIST_ALBUMS'].includes(block.type) && block.loadingState === 'RESOLVE');
}

async function refreshArtist(root: Root, ids: Set<string>, generation: number, route: string) {
    const id = routeId('artist');
    const page = root.store.artist;
    if (!ids.has(id) || String(page?.id) !== id || !page?.meta) return;
    const resource = root.environment(page).artistsResource;
    if (!resource) return;
    const stillCurrent = () => roots.has(root) && revision === generation && currentRoute() === route && String(page.id) === id;
    const info = await resource.getInfo({ artistId: id });
    if (!stillCurrent()) return;
    await page.getInfo({ artistId: id, preloadedArtist: info });
    if (!stillCurrent()) return;

    const subpage = window.location.pathname.split('/')[2];
    if (!subpage) {
        for (const block of artistBlocks(page.landing)) {
            if (!stillCurrent()) return;
            await page.landing.getBlock(block);
        }
    } else if (subpage === 'tracks') {
        const list = page.fullTracksListSubpage;
        if (!list?.isResolved) return;
        const trackIds = await resource.getArtistTrackIds({ artistId: id });
        if (!stillCurrent() || !Array.isArray(trackIds)) return;
        await list.getTracksIds({ artistId: id, preloadedTrackIds: trackIds });
    } else if (subpage === 'albums') {
        await refreshArtistAlbums(page.albumsSubpage, resource, id, stillCurrent);
    }
}

async function refreshArtistAlbums(page: Store, resource: Store, id: string, stillCurrent: () => boolean) {
    const loader = page?.pagesLoader;
    if (!page?.isResolved || page.variant !== 'albums') return;
    const pageSize = loader.pager?.perPage;
    const pages: number[] = [];
    for (const [index, state] of (loader.pageStates ?? []).entries()) if (state === 'RESOLVE') pages.push(index);
    if (!pages.length || pages.length > 20 || !Number.isSafeInteger(pageSize) || pageSize <= 0) return;
    const responses = [];
    for (const index of pages) {
        const albums = await resource.getDirectAlbums({ artistId: id, page: index, pageSize, sort: { sortBy: 'year' } });
        if (!stillCurrent() || !Array.isArray(albums?.albums)) return;
        responses.push({ index, albums });
    }
    loader.reset();
    for (const { index, albums } of responses) {
        if (!stillCurrent()) return;
        await page.getData({ artistId: id, page: index, pageSize, sort: { sortBy: 'year' }, preloadedAlbums: albums });
    }
}

async function refresh() {
    scheduled = false;
    if (running) return;
    running = true;
    try {
        while (pendingArtists.size || pendingAlbums.size) {
            const artists = new Set(pendingArtists);
            const albums = new Set(pendingAlbums);
            pendingArtists.clear();
            pendingAlbums.clear();
            const generation = revision;
            const route = currentRoute();
            for (const root of roots) {
                try {
                    await refreshAlbum(root, albums, generation, route);
                    await refreshArtist(root, artists, generation, route);
                } catch (error) {
                    console.warn('[PulseSync] Could not refresh library page', error);
                }
            }
            if (revision !== generation) {
                for (const id of artists) pendingArtists.add(id);
                for (const id of albums) pendingAlbums.add(id);
            }
        }
    } finally {
        running = false;
    }
}
