'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4622],
    {
        151: (t, e, r) => {
            r.d(e, { X: () => s });
            var a = r(30141);
            class i {
                constructor(t) {
                    (0, a._)(this, 'httpClient', void 0), (this.httpClient = t);
                }
            }
            class s extends i {
                createHttpOptions(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        { timeoutKey: r, params: a, headers: i, signal: s, ...n } = t,
                        { prefixUrl: o, ...c } = n,
                        { timeouts: l = this.config.timeouts, withoutPrefixUrl: h, withoutHeaders: u } = e,
                        d = null == l ? void 0 : l[r],
                        g = u ? void 0 : null != i ? i : this.createRequestHeaders({ params: a, timeout: d }),
                        y = null != o ? o : this.config.prefixUrl,
                        p = { headers: g, retry: this.getRetryPolicyConfig(), timeout: d, signal: s, ...c };
                    return h ? p : { prefixUrl: y, ...p };
                }
                createRequestHeaders() {
                    var t, e;
                    let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        { params: a, timeout: i } = r,
                        s = this.createRequestHeadersFromParams(a);
                    if (
                        (null != (e = null == a || null == (t = a.common) ? void 0 : t.sendRequestDeadline) ? e : this.config.params.common.sendRequestDeadline) &&
                        void 0 !== i
                    ) {
                        let t = Date.now() + i;
                        s['x-request-deadline-ms'] = String(t);
                    }
                    return s;
                }
                createRequestHeadersFromParams(t) {
                    var e, r, a, i, s, n, o, c, l, h, u, d, g, y, p, m, v, E, w;
                    let T = (null == t || null == (e = t.common) ? void 0 : e.oauth) || this.config.params.common.oauth,
                        k = (null == t || null == (r = t.common) ? void 0 : r.client) || this.config.params.common.client,
                        C = (null == t || null == (a = t.common) ? void 0 : a.language) || this.config.params.common.language,
                        f = (null == t || null == (i = t.common) ? void 0 : i.device) || this.config.params.common.device,
                        A = (null == t || null == (s = t.common) ? void 0 : s.multiAuthUserId) || this.config.params.common.multiAuthUserId,
                        I =
                            (null == t || null == (o = t.common) || null == (n = o.blackbox) ? void 0 : n.userTicket) ||
                            (null == (c = this.config.params.common.blackbox) ? void 0 : c.userTicket),
                        _ =
                            (null == t || null == (h = t.common) || null == (l = h.tvm) ? void 0 : l.serviceTicket) ||
                            (null == (u = this.config.params.common.tvm) ? void 0 : u.serviceTicket),
                        b = null == (w = null == t || null == (d = t.common) ? void 0 : d.withoutInvocationInfo) || w,
                        S = (null == t || null == (g = t.common) ? void 0 : g.icookie) || this.config.params.common.icookie,
                        R = (null == t || null == (y = t.common) ? void 0 : y.requestId) || this.config.params.common.requestId,
                        D = (null == t || null == (p = t.common) ? void 0 : p.clientIp) || this.config.params.common.clientIp,
                        O = (null == t || null == (m = t.common) ? void 0 : m.tracestate) || this.config.params.common.tracestate,
                        x = (null == t || null == (v = t.common) ? void 0 : v.traceparent) || this.config.params.common.traceparent,
                        N = (null == t || null == (E = t.common) ? void 0 : E.referer) || this.config.params.common.referer,
                        L = {
                            authorization: void 0 !== T ? 'OAuth '.concat(T) : void 0,
                            'x-yandex-music-client': k,
                            'accept-language': C,
                            'x-yandex-music-device': f,
                            'x-yandex-music-multi-auth-user-id': void 0 !== A ? String(A) : void 0,
                        };
                    return (
                        void 0 !== I && (L['x-ya-user-ticket'] = I),
                        void 0 !== _ && (L['x-ya-service-ticket'] = _),
                        b && (L['x-yandex-music-without-invocation-info'] = '1'),
                        void 0 !== S && (L['x-yandex-icookie'] = S),
                        void 0 !== R && (L['x-request-id'] = R),
                        void 0 !== D && (L['x-forwarded-for-y'] = D),
                        void 0 !== O && (L.tracestate = O),
                        void 0 !== x && (L.traceparent = x),
                        void 0 !== N && (L.referer = N),
                        L
                    );
                }
                getRetryPolicyConfig() {
                    return { config: this.config.retryPolicyConfig };
                }
                constructor(t, e) {
                    super(t), (0, a._)(this, 'httpClient', void 0), (0, a._)(this, 'config', void 0), (this.httpClient = t), (this.config = e);
                }
            }
        },
        6587: (t, e, r) => {
            r.d(e, { G: () => l });
            var a = r(30141),
                i = r(63854),
                s = r(151),
                n = r(60670),
                o = r(63924);
            class c extends o.t {
                constructor(t = 'Landing resource error', e = {}) {
                    super(t, e), (0, a._)(this, 'name', 'LandingResourceException'), Object.setPrototypeOf(this, c.prototype);
                }
            }
            class l extends s.X {
                async getSkeleton(t, e) {
                    return (
                        await this.httpClient.get(
                            'landing/skeleton/'.concat(t.id),
                            this.createHttpOptions({
                                timeoutKey: 'getSkeleton',
                                params: t,
                                signal: null == e ? void 0 : e.signal,
                                searchParams: (0, n.P)({ showWizard: t.showWizard }),
                            }),
                        )
                    ).json();
                }
                async getBlock(t, e) {
                    if (!(null == t ? void 0 : t.source)) throw new c('Landing block source is not defined');
                    let r = t.type === i.t.CHART_TRACKS,
                        a = ((t, e, r) => {
                            let { uri: a, count: i, countWeb: s, ...o } = e,
                                c = t + a,
                                l = (0, n.P)(o);
                            s && l.append(r ? 'limit' : 'count', String(s));
                            let h = l.toString();
                            return h ? ''.concat(c, '?').concat(h) : c;
                        })(this.config.prefixUrl, t.source, r);
                    return (
                        await this.httpClient.get(
                            a,
                            this.createHttpOptions({ timeoutKey: 'getBlock', params: t, signal: null == e ? void 0 : e.signal }, { withoutPrefixUrl: !0 }),
                        )
                    ).json();
                }
                async getBlockEntities(t, e) {
                    return (
                        await this.httpClient.get(
                            'landing/block/'.concat(t.blockId, '/entities'),
                            this.createHttpOptions({
                                timeoutKey: 'getBlockEntities',
                                params: t,
                                signal: null == e ? void 0 : e.signal,
                                searchParams: (0, n.P)({ page: t.page, pageSize: t.pageSize }),
                            }),
                        )
                    ).json();
                }
                async getSpecialHeader(t, e) {
                    return (
                        await this.httpClient.get(
                            'landing/special-header',
                            this.createHttpOptions({ timeoutKey: 'getSpecialHeader', params: t, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                constructor(t, e) {
                    super(t, e), (0, a._)(this, 'httpClient', void 0), (0, a._)(this, 'config', void 0), (this.httpClient = t), (this.config = e);
                }
            }
        },
        14622: (t, e, r) => {
            r.d(e, {
                wV: () => t9,
                d7: () => en,
                o7: () => ed,
                wK: () => tt,
                DT: () => o,
                FX: () => eo,
                OU: () => s,
                Mz: () => t7,
                je: () => c,
                _2: () => et,
                sY: () => ec,
            });
            var a,
                i,
                s,
                n,
                o,
                c,
                l,
                h = r(30141);
            let u = Symbol('CONTAINER_USER_CONFIG_TOKEN'),
                d = Symbol('CONTAINER_FEATURE_FLAGS_TOKEN'),
                g = Symbol('CONTAINER_STORE_TOKEN'),
                y = Symbol('CONTAINER_RESOURCES_TOKEN'),
                p = Symbol('CONTAINER_REPOSITORY_CONTAINER_TOKEN'),
                m = Symbol('CONTAINER_FILE_STORAGE_TOKEN'),
                v = Symbol('CONTAINER_TRACK_MANAGER_TOKEN'),
                E = Symbol('CONTAINER_USERS_TRACKS_MANAGER_TOKEN'),
                w = Symbol('CONTAINER_ARTIST_MANAGER_TOKEN'),
                T = Symbol('CONTAINER_ALBUM_MANAGER_TOKEN'),
                k = Symbol('CONTAINER_USERS_ALBUMS_MANAGER_TOKEN'),
                C = Symbol('CONTAINER_TRACKS_CONTROLLER_TOKEN'),
                f = Symbol('CONTAINER_PLAYLISTS_CONTROLLER_TOKEN'),
                A = Symbol('CONTAINER_ARTISTS_CONTROLLER_TOKEN'),
                I = Symbol('CONTAINER_ALBUMS_CONTROLLER_TOKEN'),
                _ = Symbol('CONTAINER_DOWNLOADER_TOKEN'),
                b = Symbol('CONTAINER_HOOKS_TOKEN'),
                S = Symbol('CONTAINER_TRACK_DOWNLOAD_TASK_PARAMS_TOKEN');
            !(function (t) {
                (t.TRACK_META_RECEIVED = 'track_meta_received'),
                    (t.TRACK_DECRYPT_KEY_RECEIVED = 'track_decrypt_key_received'),
                    (t.CHUNK_MEDIA_FILE_RECEIVED = 'chunk_media_file_received'),
                    (t.MEDIA_FILE_RECEIVED = 'media_file_received'),
                    (t.ARTIST_IMAGE_RECEIVED = 'artist_image_received'),
                    (t.TRACK_IMAGE_RECEIVED = 'track_image_received'),
                    (t.TRACK_DOWNLOAD_FINISHED = 'track_download_finished'),
                    (t.TRACK_DOWNLOAD_STOPPED = 'track_download_stopped'),
                    (t.TRACK_DOWNLOAD_FAILED = 'track_download_failed'),
                    (t.ALBUM_META_RECEIVED = 'album_meta_received');
            })(a || (a = {}));
            var R = r(63924);
            class D extends R.t {
                constructor(t, { code: e = 'E_ARTISTS_CONTROLLER', ...r } = {}) {
                    super(''.concat('[ArtistsController]', ' ').concat(t), { code: e, ...r }),
                        (0, h._)(this, 'name', 'ArtistsControllerException'),
                        Object.setPrototypeOf(this, D.prototype);
                }
            }
            let O = (t) => 'images/artists/'.concat(t);
            class x {
                async getArtist(t) {
                    try {
                        return await this.artistManager.getArtist(t);
                    } catch (e) {
                        return this.hooks.afterError.promise(new D('Failed to get artist', { cause: e, data: { id: t } })), null;
                    }
                }
                async getArtistTrackIdsByUser(t) {
                    return await this.artistManager.getArtistTrackIdsByUser(t);
                }
                onArtistImageReceived(t, e) {
                    var r;
                    let a = O(t);
                    null == (r = this.fileStorage) ||
                        r.writeFile(a, e).catch((t) => {
                            this.hooks.afterError.promise(new D('Failed to write artist image', { cause: t, data: { path: a } }));
                        });
                }
                constructor(t) {
                    (0, h._)(this, 'hooks', void 0),
                        (0, h._)(this, 'downloader', void 0),
                        (0, h._)(this, 'fileStorage', void 0),
                        (0, h._)(this, 'artistManager', void 0),
                        (this.hooks = t.container.get(b)),
                        (this.downloader = t.container.get(_)),
                        (this.fileStorage = t.container.get(m)),
                        (this.artistManager = t.container.get(w)),
                        this.downloader.events.on(a.ARTIST_IMAGE_RECEIVED, this.onArtistImageReceived.bind(this));
                }
            }
            var N = r(75880),
                L = r(14525);
            class M extends R.t {
                constructor(t, { code: e = 'E_CACHE_CONTROLLER', ...r } = {}) {
                    super(''.concat('[CacheController]', ' ').concat(t), { code: e, ...r }),
                        (0, h._)(this, 'name', 'CacheControllerException'),
                        Object.setPrototypeOf(this, M.prototype);
                }
            }
            var F = r(68486);
            !(function (t) {
                (t.RESPONSE_CACHE = 'response_cache'),
                    (t.TRACKS = 'tracks'),
                    (t.ALBUMS = 'albums'),
                    (t.ALBUMS_TRACKS = 'albums_tracks'),
                    (t.ALBUMS_ARTISTS = 'albums_artists'),
                    (t.ARTISTS = 'artists'),
                    (t.ARTISTS_TRACKS = 'artists_tracks'),
                    (t.USERS = 'users'),
                    (t.USERS_TRACKS = 'users_tracks'),
                    (t.USERS_ALBUMS = 'users_albums');
            })(i || (i = {}));
            let P = { name: i.ALBUMS, version: 1, restrictions: { attemptsCount: 3, count: 100 } },
                U = { name: i.ALBUMS_ARTISTS, version: 1, restrictions: { attemptsCount: 3 } },
                K = { name: i.ALBUMS_TRACKS, version: 1, restrictions: { attemptsCount: 3 } },
                B = { name: i.ARTISTS, version: 1, restrictions: { attemptsCount: 3, count: 100 } },
                G = { name: i.ARTISTS_TRACKS, version: 1, restrictions: { attemptsCount: 3 } },
                W = { name: i.RESPONSE_CACHE, version: 1, restrictions: { attemptsCount: 3, count: 100 } };
            !(function (t) {
                (t[(t.LOW = 1)] = 'LOW'), (t[(t.MEDIUM = 2)] = 'MEDIUM'), (t[(t.HIGH = 3)] = 'HIGH');
            })(s || (s = {}));
            let j = { name: i.TRACKS, version: 1, restrictions: { attemptsCount: 3, count: 100 } },
                H = { name: i.USERS, version: 1, restrictions: { attemptsCount: 3, count: 100 } },
                q = { name: i.USERS_ALBUMS, version: 1, restrictions: { attemptsCount: 3 } };
            !(function (t) {
                (t.TRACK = 'track'), (t.ENTITY = 'entity');
            })(n || (n = {}));
            let V = { name: i.USERS_TRACKS, version: 1, restrictions: { attemptsCount: 3 } };
            class Y {
                async get(t, e, r) {
                    var a;
                    return (null == (a = this.repositoryContainer.responseCacheRepository) ? void 0 : a.get(t, e, r)) || null;
                }
                put(t) {
                    var e;
                    let { uid: r, requestId: a, priority: i, response: n } = t;
                    null == (e = this.repositoryContainer.responseCacheRepository) || e.put({ uid: r, requestId: a, priority: null != i ? i : s.LOW, response: n });
                }
                constructor(t) {
                    (0, h._)(this, 'repositoryContainer', void 0), (this.repositoryContainer = t.repositoryContainer);
                }
            }
            let z = [L.X1.REQUEST_TIMEOUT, L.X1.TEAPOT];
            class X {
                get shouldGetCache() {
                    return 'number' == typeof this.variables.uid && this.variables.isOffline;
                }
                getRequestId(t) {
                    return (0, N.createHash)('sha256').update(JSON.stringify(t)).digest('hex');
                }
                async get(t, e) {
                    if ('number' == typeof this.variables.uid)
                        try {
                            let r = await this.cacheManager.get(this.variables.uid, t, e);
                            if (r) return r.response;
                        } catch (e) {
                            throw new M('Cache not found', { cause: e, data: { requestId: t, uid: this.variables.uid } });
                        }
                    throw new M('Cache not found', { data: { requestId: t, uid: String(this.variables.uid) } });
                }
                put(t) {
                    let { requestId: e, response: r, uid: a, priority: i } = t,
                        s = null != a ? a : this.variables.uid;
                    'number' == typeof s && this.cacheManager.put({ uid: s, requestId: e, priority: i, response: r });
                }
                async handleError(t, e, r) {
                    if (!(t instanceof L.GX) || z.includes(t.statusCode)) return this.get(e, r);
                    throw t;
                }
                constructor(t) {
                    (0, h._)(this, 'cacheManager', void 0),
                        (0, h._)(this, 'variables', void 0),
                        (this.cacheManager = new Y({ repositoryContainer: t.repositoryContainer })),
                        (this.variables = t.variables);
                }
            }
            var Q = r(7823);
            let J = (t) => (e) => e.id !== t || (e.stop(), !1);
            class Z {
                get quality() {
                    return this.variables.getQuality();
                }
                injectTask(t) {
                    this.queue.push(t), this.startNextDownload();
                }
                removeTask(t) {
                    this.removeTaskFromQueue(t), this.removeTaskFromActiveDownloads(t);
                }
                startTask(t) {
                    this.activeTasks.push(t),
                        t.start().finally(() => {
                            this.removeTaskFromActiveDownloads(t.id), this.startNextDownload();
                        });
                }
                startNextDownload() {
                    let t = this.activeTasks.length,
                        e = this.variables.maxConcurrentDownloads - t;
                    e > 0 && this.queue.length > 0 && this.queue.splice(0, e).forEach(this.startTask.bind(this));
                }
                removeTaskFromQueue(t) {
                    this.queue = this.queue.filter(J(t));
                }
                removeTaskFromActiveDownloads(t) {
                    this.activeTasks = this.activeTasks.filter(J(t));
                }
                constructor(t) {
                    (0, h._)(this, 'variables', void 0),
                        (0, h._)(this, 'events', new Q.v()),
                        (0, h._)(this, 'queue', []),
                        (0, h._)(this, 'activeTasks', []),
                        (this.variables = t.variables);
                }
            }
            class $ {
                download(t) {
                    t.forEach((t) => {
                        this.trackManager.download(t, n.ENTITY);
                    });
                }
                stopDownload(t) {
                    t.forEach((t) => {
                        this.trackManager.stopDownload(t);
                    });
                }
                delete(t) {
                    t.forEach((t) => {
                        this.trackManager.deleteTrack(t);
                    });
                }
                constructor(t) {
                    (0, h._)(this, 'trackManager', void 0), (this.trackManager = t.container.get(v));
                }
            }
            class tt {
                apply(t) {
                    let { hooks: e } = t;
                    e.afterError.tapPromise('LoggerPlugin', async (t) => {
                        let e;
                        return (
                            (e = t instanceof R.t ? t : new R.t('Error in Slam', { code: 'E_SLAM', cause: t })).cause instanceof Error && delete e.cause.stack,
                            this.logger.error('[Slam] '.concat(e.message), { ...e.data, code: e.code, cause: e.cause }),
                            Promise.resolve()
                        );
                    });
                }
                constructor(t) {
                    (0, h._)(this, 'logger', void 0);
                    let { logger: e } = t;
                    this.logger = e;
                }
            }
            var te = r(67864);
            !(function (t) {
                (t.IDLE = 'IDLE'), (t.DOWNLOADING = 'DOWNLOADING'), (t.DOWNLOADED = 'DOWNLOADED'), (t.DOWNLOAD_FAILED = 'DOWNLOAD_FAILED'), (t.REMOVING = 'REMOVING');
            })(o || (o = {}));
            class tr extends R.t {
                constructor(t, { code: e = 'E_ALBUMS_CONTROLLER', ...r } = {}) {
                    super(''.concat('[AlbumsController]', ' ').concat(t), { code: e, ...r }),
                        (0, h._)(this, 'name', 'AlbumsControllerException'),
                        Object.setPrototypeOf(this, tr.prototype);
                }
            }
            class ta {
                async initState() {
                    try {
                        let t = await this.usersAlbumsManager.getAlbumsByUid();
                        (null == t ? void 0 : t.length) && (this.store.albums.state = t.reduce((t, e) => ((t[String(e)] = { loadingState: o.DOWNLOADED }), t), {}));
                    } catch (t) {
                        this.hooks.afterError.promise(new tr('Failed to init albums state', { cause: t }));
                    }
                }
                download(t, e) {
                    this.albumManager.download(t, e);
                }
                stopDownload(t, e) {
                    this.albumManager.stopDownload(t, e);
                }
                async delete(t, e) {
                    try {
                        await this.albumManager.delete(t, e);
                    } catch (r) {
                        this.hooks.afterError.promise(new tr('Failed to delete album', { cause: r, data: { albumId: t, trackIds: e } }));
                    }
                }
                async getAlbum(t) {
                    try {
                        return await this.albumManager.getAlbum(t);
                    } catch (e) {
                        return this.hooks.afterError.promise(new tr('Failed to get album', { cause: e, data: { albumId: t } })), null;
                    }
                }
                constructor(t) {
                    (0, h._)(this, 'hooks', void 0),
                        (0, h._)(this, 'store', void 0),
                        (0, h._)(this, 'albumManager', void 0),
                        (0, h._)(this, 'usersAlbumsManager', void 0),
                        (this.hooks = t.container.get(b)),
                        (this.store = t.container.get(g)),
                        (this.albumManager = t.container.get(T)),
                        (this.usersAlbumsManager = t.container.get(k));
                }
            }
            var ti = r(83110);
            !(function (t) {
                (t.STATE_CHANGED = 'STATE_CHANGED'), (t.ENTITY_CHANGED = 'ENTITY_CHANGED');
            })(c || (c = {}));
            let ts = (t, e) => (0 === e ? 100 : Math.min(Math.trunc((t / e) * 100), 100));
            class tn {
                downloadList(t, e) {
                    e.length &&
                        (this.updateListState(t, { loadingState: o.DOWNLOADING }),
                        e.forEach((t) => {
                            this.trackManager.download(t, n.ENTITY);
                        }),
                        this.subscribeToTracksStateChanges(t, e));
                }
                stopDownloadList(t, e) {
                    e.length &&
                        (e.forEach((t) => {
                            this.trackManager.stopDownload(t);
                        }),
                        this.unsubscribeFromTracksStateChanges(t),
                        this.updateListState(t, { loadingState: o.IDLE }));
                }
                async deleteList(t, e) {
                    if (!e.length) return;
                    this.unsubscribeFromTracksStateChanges(t), this.updateListState(t, { loadingState: o.REMOVING });
                    let r = e.map(async (t) => this.trackManager.deleteTrack(t));
                    await Promise.all(r), this.updateListState(t, { loadingState: o.IDLE, progress: void 0 });
                }
                unsubscribeFromTracksStateChanges(t) {
                    let e = this.trackStateChangeHandlers.get(t);
                    e && (this.store.tracks.events.off(c.ENTITY_CHANGED, e), this.trackStateChangeHandlers.delete(t));
                }
                subscribeToTracksStateChanges(t, e) {
                    this.unsubscribeFromTracksStateChanges(t);
                    let r = e.length,
                        a = [];
                    e.forEach((t) => {
                        var e;
                        let [r] = (0, ti.d)(t);
                        r && (null == (e = this.store.tracks.state[r]) ? void 0 : e.loadingState) === o.DOWNLOADED && a.push(r);
                    });
                    let i = new Set(a);
                    this.updateListState(t, { loadingState: o.DOWNLOADING, progress: ts(i.size, r) });
                    let s = (e) => {
                        let { id: a, state: s } = e;
                        if (!i.has(a) && s.loadingState === o.DOWNLOADED) {
                            i.add(a);
                            let e = i.size,
                                s = ts(e, r);
                            e === r
                                ? (this.updateListState(t, { loadingState: o.DOWNLOADED, progress: s }), this.unsubscribeFromTracksStateChanges(t))
                                : this.updateListState(t, { loadingState: o.DOWNLOADING, progress: s });
                        }
                    };
                    this.trackStateChangeHandlers.set(t, s), this.store.tracks.events.on(c.ENTITY_CHANGED, s);
                }
                constructor(t) {
                    (0, h._)(this, 'store', void 0),
                        (0, h._)(this, 'trackManager', void 0),
                        (0, h._)(this, 'trackStateChangeHandlers', new Map()),
                        (this.store = t.container.get(g)),
                        (this.trackManager = t.container.get(v));
                }
            }
            let to = (t) => 'images/albums/'.concat(t);
            class tc extends tn {
                download(t, e) {
                    this.downloadList(t, e);
                }
                async delete(t, e) {
                    if (!e.length) return;
                    let r = await this.filterEntityTracks(e);
                    r.length && (await this.deleteList(t, r));
                }
                stopDownload(t, e) {
                    this.stopDownloadList(t, e);
                }
                async getAlbum(t) {
                    var e;
                    let r = await (null == (e = this.repositoryContainer.albumsRepository) ? void 0 : e.get(t));
                    if (!r) return null;
                    let a = await this.getAlbumArtists(t),
                        i = { ...r, artists: a };
                    return i.coverUri && this.fileStorage && (i.coverUri = await this.fileStorage.createFileURL(to(t))), i;
                }
                async getAlbumArtists(t) {
                    var e;
                    let r = await (null == (e = this.repositoryContainer.albumsArtistsRepository) ? void 0 : e.getArtistsByAlbumId(t));
                    return (null == r ? void 0 : r.length)
                        ? (
                              await Promise.all(
                                  r.map(async (t) => {
                                      var e;
                                      let { artistId: r } = t;
                                      return null == (e = this.repositoryContainer.artistsRepository) ? void 0 : e.get(r);
                                  }),
                              )
                          ).filter((t) => !!t)
                        : [];
                }
                async saveAlbum(t, e) {
                    var r, a;
                    let i = to(String(t.id));
                    null == (r = this.fileStorage) ||
                        r.writeFile(i, e).catch((e) => {
                            this.hooks.afterError.promise(new tr('Failed to write album image', { cause: e, data: { albumId: String(t.id) } }));
                        }),
                        (await (null == (a = this.repositoryContainer.albumsTracksRepository) ? void 0 : a.getCountByAlbum(String(t.id)))) === t.trackCount &&
                            (this.store.albums.setEntityState(String(t.id), { loadingState: o.DOWNLOADED }), await this.usersAlbumsManager.put(String(t.id)));
                }
                async filterEntityTracks(t) {
                    return (
                        await Promise.all(
                            t.map(async (t) => {
                                let e = await this.usersTracksManager.get(t);
                                return (null == e ? void 0 : e.downloadSource) === n.ENTITY ? t : null;
                            }),
                        )
                    ).filter((t) => null !== t);
                }
                updateListState(t, e) {
                    this.store.albums.setEntityState(t, e);
                }
                constructor(t) {
                    super({ container: t.container }),
                        (0, h._)(this, 'hooks', void 0),
                        (0, h._)(this, 'downloader', void 0),
                        (0, h._)(this, 'fileStorage', void 0),
                        (0, h._)(this, 'repositoryContainer', void 0),
                        (0, h._)(this, 'usersAlbumsManager', void 0),
                        (0, h._)(this, 'usersTracksManager', void 0),
                        (this.hooks = t.container.get(b)),
                        (this.downloader = t.container.get(_)),
                        (this.fileStorage = t.container.get(m)),
                        (this.repositoryContainer = t.container.get(p)),
                        (this.usersAlbumsManager = t.container.get(k)),
                        (this.usersTracksManager = t.container.get(E)),
                        this.downloader.events.on(a.ALBUM_META_RECEIVED, this.saveAlbum.bind(this));
                }
            }
            class tl {
                async getArtist(t) {
                    var e, r, a;
                    let i = await (null == (e = this.repositoryContainer.artistsRepository) ? void 0 : e.get(t));
                    if (!i) return null;
                    let s = {
                            available: !0,
                            decomposed: [],
                            hasPromotions: !1,
                            ogImage: '',
                            genres: [],
                            ticketsAvailable: !1,
                            links: [],
                            ratings: { week: 0, month: 0, day: 0 },
                            counts: { tracks: 0, directAlbums: 0, alsoAlbums: 0, alsoTracks: 0 },
                            ...i,
                        },
                        n = O(t);
                    if (await (null == (r = this.fileStorage) ? void 0 : r.isFileExisting(n))) {
                        let t = await (null == (a = this.fileStorage) ? void 0 : a.createFileURL(n));
                        s.cover && t && (s.cover.uri = t);
                    }
                    return s;
                }
                async getArtistTrackIdsByUser(t) {
                    var e, r;
                    return Promise.all([
                        null == (e = this.repositoryContainer.usersTracksRepository) ? void 0 : e.getTracksByUid(this.userConfig.uid),
                        null == (r = this.repositoryContainer.artistsTracksRepository) ? void 0 : r.getTracksByArtistId(t),
                    ])
                        .then((t) => {
                            let [e, r] = t;
                            if (!e || !r) return [];
                            let a = r.reduce((t, e) => ((t[e.trackId] = !0), t), {});
                            return e.filter((t) => {
                                let [e] = (0, ti.d)(t);
                                return e && a[e];
                            });
                        })
                        .catch(() => []);
                }
                constructor(t) {
                    (0, h._)(this, 'userConfig', void 0),
                        (0, h._)(this, 'repositoryContainer', void 0),
                        (0, h._)(this, 'fileStorage', void 0),
                        (this.userConfig = t.container.get(u)),
                        (this.repositoryContainer = t.container.get(p)),
                        (this.fileStorage = t.container.get(m));
                }
            }
            let th = { afterError: new (r(78785).AsyncSeriesHook)(['error']) };
            class tu {
                get state() {
                    return this.loadingState;
                }
                set state(t) {
                    (this.loadingState = t), this.events.emit(c.STATE_CHANGED, this.state);
                }
                setEntityState(t, e) {
                    (this.loadingState[t] = e), this.events.emit(c.ENTITY_CHANGED, { id: t, state: e });
                }
                clear() {
                    this.state = {};
                }
                constructor() {
                    (0, h._)(this, 'loadingState', {}), (0, h._)(this, 'events', new Q.v());
                }
            }
            class td {
                constructor() {
                    (0, h._)(this, 'tracks', void 0), (0, h._)(this, 'albums', void 0), (this.tracks = new tu()), (this.albums = new tu());
                }
            }
            var tg = r(13973),
                ty = r(33878),
                tp = r(81093),
                tm = r(80535);
            class tv extends R.t {
                constructor(t, { code: e = 'E_DOWNLOADER', ...r } = {}) {
                    super(''.concat('[Downloader]', ' ').concat(t), { code: e, ...r }),
                        (0, h._)(this, 'name', 'DownloaderException'),
                        Object.setPrototypeOf(this, tv.prototype);
                }
            }
            class tE {
                async getFileInfo(t, e) {
                    let r = (0, tp.T)(),
                        a = this.variables.codecs.join(''),
                        i = ''.concat(r).concat(t).concat(e).concat(a).concat(this.transport),
                        s = await (0, tp.m)({ secretKey: this.secretKey, data: i });
                    return this.getFileInfoResource.getFileInfo({
                        tsInSeconds: r,
                        trackId: t,
                        quality: e,
                        codecs: this.variables.codecs,
                        transports: [this.transport],
                        sign: s,
                    });
                }
                async getImage(t, e) {
                    try {
                        let r = (0, ty.createAvatarUrl)(t, this.variables.coverSize, !1),
                            a = await fetch(r, { cache: 'no-store' }),
                            i = await a.blob();
                        e(i);
                    } catch (e) {
                        this.hooks.afterError.promise(new tv('Error when downloading image', { cause: String(e), data: { src: t } }));
                    }
                }
                async start() {
                    try {
                        var t, e;
                        let [r] = await this.tracksResource.getTracksMeta({ trackIds: [this.id] });
                        if (!r || !r.available) return void this.handleDownloadError('Track is not defined or is not available');
                        let i = String(r.id);
                        this.events.emit(a.TRACK_META_RECEIVED, r),
                            r.coverUri &&
                                this.getImage(r.coverUri, (t) => {
                                    this.events.emit(a.TRACK_IMAGE_RECEIVED, this.id, t);
                                }),
                            null == (t = r.artists) ||
                                t.forEach((t) => {
                                    var e;
                                    (null == (e = t.cover) ? void 0 : e.uri) &&
                                        this.getImage(t.cover.uri, (e) => {
                                            this.events.emit(a.ARTIST_IMAGE_RECEIVED, t.id, e);
                                        });
                                }),
                            null == (e = r.albums) ||
                                e.forEach((t) => {
                                    t.coverUri &&
                                        this.getImage(t.coverUri, (e) => {
                                            this.events.emit(a.ALBUM_META_RECEIVED, t, e);
                                        });
                                });
                        let { downloadInfo: s } = await this.getFileInfo(i, this.quality);
                        if ('error' in s || s.transport !== tm.o.ENCRAW) return void this.handleDownloadError('Erorr in download info or transport is not encraw');
                        this.events.emit(a.TRACK_DECRYPT_KEY_RECEIVED, i, s.key);
                        let n = null,
                            o = 0,
                            c = [],
                            l = s.urls[0];
                        if (!l) return void this.handleDownloadError('Src is not defined');
                        let h = async () => {
                            if (this.isStopped) return;
                            let t = 0;
                            null === n || o + this.variables.chunkSize < n ? (t = o + this.variables.chunkSize - 1) : o + this.variables.chunkSize >= n && (t = n);
                            let { contentLength: e, data: r, contentRange: i } = await this.getFileInfoResource.getByteRange({ srcUrl: l, start: o, end: t });
                            (o += e),
                                (n = Number(i.split('/')[1])),
                                c.push(r),
                                this.events.emit(a.CHUNK_MEDIA_FILE_RECEIVED, this.id, Math.floor((o / n) * 100)),
                                null !== n && o < n && (await h());
                        };
                        await h(),
                            o === n
                                ? (this.events.emit(a.MEDIA_FILE_RECEIVED, this.id, new Blob(c)),
                                  this.events.emit(a.TRACK_DOWNLOAD_FINISHED, this.id, this.downloadSource))
                                : this.events.emit(a.TRACK_DOWNLOAD_STOPPED, this.id);
                    } catch (t) {
                        this.handleDownloadError(String(t));
                    }
                }
                stop() {
                    this.isStopped = !0;
                }
                handleDownloadError(t) {
                    this.hooks.afterError.promise(new tv('Error when downloading track', { cause: t, data: { id: this.id } })),
                        this.events.emit(a.TRACK_DOWNLOAD_FAILED, this.id);
                }
                constructor(t, e, r, a) {
                    (0, h._)(this, 'id', void 0),
                        (0, h._)(this, 'isStopped', !1),
                        (0, h._)(this, 'tracksResource', void 0),
                        (0, h._)(this, 'getFileInfoResource', void 0),
                        (0, h._)(this, 'secretKey', void 0),
                        (0, h._)(this, 'transport', void 0),
                        (0, h._)(this, 'variables', void 0),
                        (0, h._)(this, 'quality', void 0),
                        (0, h._)(this, 'downloadSource', void 0),
                        (0, h._)(this, 'hooks', void 0),
                        (0, h._)(this, 'events', new Q.v()),
                        (this.id = t),
                        (this.tracksResource = e.tracksResource),
                        (this.getFileInfoResource = e.getFileInfoResource),
                        (this.secretKey = e.secretKey),
                        (this.transport = e.transport),
                        (this.variables = e.variables),
                        (this.events = e.events),
                        (this.hooks = e.hooks),
                        (this.quality = r),
                        (this.downloadSource = null != a ? a : n.TRACK);
                }
            }
            let tw = (t) => 'images/tracks/'.concat(t),
                tT = (t) => 'tracks/'.concat(t),
                tk = [o.IDLE, o.DOWNLOAD_FAILED],
                tC = [o.IDLE, o.DOWNLOADING];
            class tf {
                initDownloaderEvents() {
                    this.downloader.events.on(a.TRACK_META_RECEIVED, this.saveTrack.bind(this)),
                        this.downloader.events.on(a.TRACK_DECRYPT_KEY_RECEIVED, this.putDecryptKey.bind(this)),
                        this.downloader.events.on(a.CHUNK_MEDIA_FILE_RECEIVED, this.onChunkMediaFileReceived.bind(this)),
                        this.downloader.events.on(a.TRACK_IMAGE_RECEIVED, this.onTrackImageReceived.bind(this)),
                        this.downloader.events.on(a.TRACK_DOWNLOAD_FINISHED, this.onTrackDownloadFinished.bind(this)),
                        this.downloader.events.on(a.TRACK_DOWNLOAD_STOPPED, this.onTrackDownloadStopped.bind(this)),
                        this.downloader.events.on(a.TRACK_DOWNLOAD_FAILED, this.onTrackDownloadFailed.bind(this)),
                        this.downloader.events.on(a.MEDIA_FILE_RECEIVED, this.onMediaFileReceived.bind(this));
                }
                async putTrackArtists(t) {
                    let e = 0;
                    if (!t.artists) return Promise.resolve();
                    let r = [];
                    return (
                        t.artists.forEach((a) => {
                            let { decomposed: i, ...s } = a;
                            r.push({ artistMeta: s, artistTrack: { artistId: String(a.id), trackId: String(t.id), artistIndex: e } }), e++;
                            let n = '';
                            i &&
                                i.length > 0 &&
                                i.forEach((a) => {
                                    if ('string' == typeof a) {
                                        n = a;
                                        return;
                                    }
                                    r.push({ artistMeta: a, artistTrack: { artistId: String(a.id), trackId: String(t.id), artistIndex: e, decomposed: !0, prefix: n } }),
                                        e++,
                                        (n = '');
                                });
                        }),
                        Promise.all(
                            r.map(async (t) => {
                                var e, r;
                                let { artistMeta: a, artistTrack: i } = t;
                                return Promise.all([
                                    null == (e = this.repositoryContainer.artistsRepository) ? void 0 : e.put(a),
                                    null == (r = this.repositoryContainer.artistsTracksRepository) ? void 0 : r.put(i),
                                ]);
                            }),
                        )
                    );
                }
                async putTrackAlbums(t) {
                    return t.albums
                        ? Promise.all(
                              t.albums.map(async (e) => {
                                  var r, a, i, s;
                                  let { artists: n, trackPosition: o, ...c } = e,
                                      l = String(c.id),
                                      h = String(t.id),
                                      u = [
                                          null == (r = this.repositoryContainer.albumsRepository) ? void 0 : r.put(c),
                                          null == (a = this.repositoryContainer.albumsTracksRepository)
                                              ? void 0
                                              : a.put({
                                                    trackId: h,
                                                    albumId: l,
                                                    volume: null != (i = null == o ? void 0 : o.volume) ? i : NaN,
                                                    position: null != (s = null == o ? void 0 : o.index) ? s : NaN,
                                                }),
                                      ];
                                  if (n && n.length > 0) {
                                      let t = n.map(async (t, e) => {
                                          var r;
                                          return null == (r = this.repositoryContainer.albumsArtistsRepository)
                                              ? void 0
                                              : r.put({ albumId: l, artistId: String(t.id), artistIndex: e });
                                      });
                                      u.push(...t.filter((t) => !!t));
                                  }
                                  return Promise.all(u);
                              }),
                          )
                        : Promise.resolve();
                }
                async getTrackArtists(t) {
                    var e;
                    let r,
                        a = await (null == (e = this.repositoryContainer.artistsTracksRepository) ? void 0 : e.getArtistsByTrackId(t));
                    if (!(null == a ? void 0 : a.length)) return [];
                    let i = await Promise.all(
                            a.map(async (t) => {
                                var e;
                                let { artistId: r } = t;
                                return null == (e = this.repositoryContainer.artistsRepository) ? void 0 : e.get(r);
                            }),
                        ),
                        s = [];
                    return (
                        a.forEach((t, e) => {
                            let { decomposed: a, prefix: n } = t,
                                o = i[e];
                            if (o) {
                                if (!a && 'object' == typeof o && 'id' in o) {
                                    (r = o), s.push(o);
                                    return;
                                }
                                r && (void 0 === r.decomposed && (r.decomposed = []), n && r.decomposed.push(n), r.decomposed.push(o));
                            }
                        }),
                        s
                    );
                }
                async getTrackAlbums(t, e) {
                    var r, a;
                    let i = [];
                    if (e) {
                        let t = await (null == (r = this.repositoryContainer.albumsRepository) ? void 0 : r.get(e));
                        t && i.push({ ...t, artists: [] });
                    } else {
                        let e = await (null == (a = this.repositoryContainer.albumsTracksRepository) ? void 0 : a.getAlbumsByTrackId(t));
                        if (!(null == e ? void 0 : e.length)) return i;
                        (
                            await Promise.all(e.map(async (t) => (this.repositoryContainer.albumsRepository ? this.repositoryContainer.albumsRepository.get(t) : null)))
                        ).forEach((t) => {
                            t && i.push({ ...t, artists: [] });
                        });
                    }
                    return i;
                }
                async deleteTrackArtists(t) {
                    var e;
                    let r = await (null == (e = this.repositoryContainer.artistsTracksRepository) ? void 0 : e.getArtistsByTrackId(t));
                    return (null == r ? void 0 : r.length)
                        ? Promise.all(
                              r.map(async (e) => {
                                  var r, a, i, s;
                                  let { artistId: n } = e;
                                  return (await (null == (r = this.repositoryContainer.artistsTracksRepository) ? void 0 : r.delete(t, n)),
                                  0 === (await (null == (a = this.repositoryContainer.artistsTracksRepository) ? void 0 : a.getCountByArtist(n))))
                                      ? Promise.all([
                                            null == (i = this.fileStorage) ? void 0 : i.deleteFile(O(n)),
                                            null == (s = this.repositoryContainer.artistsRepository) ? void 0 : s.delete(n),
                                        ])
                                      : Promise.resolve();
                              }),
                          )
                        : Promise.resolve();
                }
                async deleteTrackAlbums(t) {
                    var e;
                    let r = await (null == (e = this.repositoryContainer.albumsTracksRepository) ? void 0 : e.getAlbumsByTrackId(t));
                    return (null == r ? void 0 : r.length)
                        ? Promise.all(
                              r.map(async (e) => {
                                  var r, a, i, s, n;
                                  await (null == (r = this.repositoryContainer.albumsTracksRepository) ? void 0 : r.delete(t, e));
                                  let c = await (null == (a = this.repositoryContainer.albumsTracksRepository) ? void 0 : a.getCountByAlbum(e));
                                  return (this.store.albums.setEntityState(e, { loadingState: o.IDLE }), this.usersAlbumsManager.delete(e), 0 === c)
                                      ? Promise.all([
                                            null == (i = this.fileStorage) ? void 0 : i.deleteFile(to(e)),
                                            null == (s = this.repositoryContainer.albumsRepository) ? void 0 : s.delete(e),
                                            null == (n = this.repositoryContainer.albumsArtistsRepository) ? void 0 : n.deleteByAlbumId(e),
                                        ])
                                      : Promise.resolve();
                              }),
                          )
                        : Promise.resolve();
                }
                async saveTrack(t) {
                    var e;
                    this.store.tracks.setEntityState(String(t.id), { loadingState: o.DOWNLOADING });
                    let r = (0, tg.A)(t);
                    return (
                        delete r.albums,
                        delete r.artists,
                        Promise.all([null == (e = this.repositoryContainer.tracksRepository) ? void 0 : e.put(r), this.putTrackAlbums(t), this.putTrackArtists(t)])
                    );
                }
                async getTrack(t) {
                    var e, r;
                    let [a, i] = (0, ti.d)(t);
                    if (!a) return null;
                    let s = await (null == (e = this.repositoryContainer.tracksRepository) ? void 0 : e.get(a));
                    if (!s) return null;
                    let n = s.meta;
                    return (
                        n.coverUri && (n.coverUri = await (null == (r = this.fileStorage) ? void 0 : r.createFileURL(tw(t)))),
                        (n.albums = await this.getTrackAlbums(String(n.id), i)),
                        (n.artists = await this.getTrackArtists(String(n.id))),
                        n
                    );
                }
                async getAllIds() {
                    var t;
                    return null == (t = this.repositoryContainer.tracksRepository) ? void 0 : t.getAllIds();
                }
                async putDecryptKey(t, e) {
                    var r;
                    await (null == (r = this.repositoryContainer.tracksRepository) ? void 0 : r.putDecryptKey(t, e));
                }
                async putTrackAvailable(t, e) {
                    var r;
                    await (null == (r = this.repositoryContainer.tracksRepository) ? void 0 : r.putTrackAvailable(t, e));
                }
                async deleteTrack(t) {
                    var e, r, a;
                    let [i] = (0, ti.d)(t);
                    if (i) {
                        if (
                            (this.changeState(i, { loadingState: o.REMOVING }),
                            await this.usersTracksManager.delete(i),
                            0 !== (await this.usersTracksManager.getCountByTrackId(i)))
                        )
                            return void this.changeState(i, { loadingState: o.DOWNLOADED });
                        await Promise.all([
                            null == (e = this.fileStorage) ? void 0 : e.deleteFile(tT(i)),
                            null == (r = this.fileStorage) ? void 0 : r.deleteFile(tw(t)),
                            null == (a = this.repositoryContainer.tracksRepository) ? void 0 : a.delete(i),
                            this.deleteTrackAlbums(i),
                            this.deleteTrackArtists(i),
                        ]),
                            this.changeState(i, { loadingState: o.IDLE });
                    }
                }
                download(t, e) {
                    var r;
                    let [a] = (0, ti.d)(t);
                    if (!a) return;
                    let i = null == (r = this.store.tracks.state[a]) ? void 0 : r.loadingState;
                    (!this.store.tracks.state[a] || (i && tk.includes(i))) &&
                        this.downloader.injectTask(new tE(String(t), this.trackDownloadTaskParams, this.downloader.quality, e));
                }
                stopDownload(t) {
                    var e;
                    let [r] = (0, ti.d)(t);
                    if (!r) return;
                    let a = null == (e = this.store.tracks.state[r]) ? void 0 : e.loadingState;
                    (!this.store.tracks.state[r] || (a && tC.includes(a))) && (this.changeState(r, { loadingState: o.IDLE }), this.downloader.removeTask(String(t)));
                }
                onTrackDownloadFinished(t, e) {
                    let [r, a] = (0, ti.d)(t);
                    r &&
                        (this.usersTracksManager.put({ uid: this.userConfig.uid, downloadSource: e, trackId: r, albumId: a }),
                        this.changeState(r, { loadingState: o.DOWNLOADED }));
                }
                onTrackDownloadStopped(t) {
                    let [e] = (0, ti.d)(t);
                    e && (this.deleteTrack(t), this.changeState(e, { loadingState: o.IDLE }));
                }
                onTrackDownloadFailed(t) {
                    let [e] = (0, ti.d)(t);
                    e && (this.deleteTrack(t), this.changeState(e, { loadingState: o.DOWNLOAD_FAILED }));
                }
                onTrackImageReceived(t, e) {
                    var r;
                    let a = tw(t);
                    null == (r = this.fileStorage) ||
                        r.writeFile(a, e).catch(() => {
                            this.hooks.afterError.promise(Error('Error in tracks manager')), this.stopDownload(t), this.onTrackDownloadFailed(t);
                        });
                }
                onChunkMediaFileReceived(t, e) {
                    var r;
                    let [a] = (0, ti.d)(t);
                    a &&
                        (null == (r = this.store.tracks.state[a]) ? void 0 : r.loadingState) !== o.IDLE &&
                        this.changeState(a, { loadingState: o.DOWNLOADING, progress: e });
                }
                onMediaFileReceived(t, e) {
                    var r, a;
                    let [i] = (0, ti.d)(t);
                    if (!i || (null == (r = this.store.tracks.state[i]) ? void 0 : r.loadingState) === o.IDLE) return;
                    let s = tT(i);
                    null == (a = this.fileStorage) ||
                        a.writeFile(s, e).catch(() => {
                            this.hooks.afterError.promise(Error('Error in tracks manager')), this.stopDownload(t), this.onTrackDownloadFailed(t);
                        });
                }
                changeState(t, e) {
                    this.store.tracks.setEntityState(t, e);
                }
                constructor(t) {
                    (0, h._)(this, 'userConfig', void 0),
                        (0, h._)(this, 'store', void 0),
                        (0, h._)(this, 'hooks', void 0),
                        (0, h._)(this, 'downloader', void 0),
                        (0, h._)(this, 'repositoryContainer', void 0),
                        (0, h._)(this, 'fileStorage', void 0),
                        (0, h._)(this, 'usersTracksManager', void 0),
                        (0, h._)(this, 'usersAlbumsManager', void 0),
                        (0, h._)(this, 'trackDownloadTaskParams', void 0),
                        (this.userConfig = t.container.get(u)),
                        (this.downloader = t.container.get(_)),
                        (this.repositoryContainer = t.container.get(p)),
                        (this.fileStorage = t.container.get(m)),
                        (this.store = t.container.get(g)),
                        (this.hooks = t.container.get(b)),
                        (this.trackDownloadTaskParams = t.container.get(S)),
                        (this.usersTracksManager = t.container.get(E)),
                        (this.usersAlbumsManager = t.container.get(k)),
                        this.initDownloaderEvents();
                }
            }
            var tA = r(99451);
            class tI extends R.t {
                constructor(t, { code: e = 'E_TRACKS_CONTROLLER', ...r } = {}) {
                    super(''.concat('[TracksController]', ' ').concat(t), { code: e, ...r }),
                        (0, h._)(this, 'name', 'TracksControllerException'),
                        Object.setPrototypeOf(this, tI.prototype);
                }
            }
            class t_ {
                async initState() {
                    try {
                        let t = await this.usersTracksManager.getTracksByUid();
                        (null == t ? void 0 : t.length) &&
                            (this.store.tracks.state = t.reduce((t, e) => {
                                let [r] = (0, ti.d)(e);
                                return r && (t[r] = { loadingState: o.DOWNLOADED }), t;
                            }, {}));
                    } catch (t) {
                        this.hooks.afterError.promise(new tI('Failed to init tracks state', { cause: t }));
                    }
                }
                async clearAll() {
                    try {
                        let t = await this.usersTracksManager.getTracksByUid();
                        null == t ||
                            t.forEach((t) => {
                                this.deleteTrack(t);
                            }),
                            this.store.tracks.clear();
                    } catch (t) {
                        this.hooks.afterError.promise(new tI('Failed to clear all tracks', { cause: t }));
                    }
                }
                async validateTracks() {
                    try {
                        let t = await this.trackManager.getAllIds();
                        t &&
                            t.forEach(async (t) => {
                                let e = String(t),
                                    r = await this.usersTracksManager.getCountByTrackId(e);
                                0 === r && this.deleteTrack(e);
                            });
                    } catch (t) {
                        this.hooks.afterError.promise(new tI('Failed to validate tracks', { cause: t }));
                    }
                }
                download(t) {
                    this.trackManager.download(t);
                }
                stopDownload(t) {
                    this.trackManager.stopDownload(t);
                }
                async getTracks(t) {
                    let e = t;
                    return (t || (e = await this.usersTracksManager.getTracksByUid()), e)
                        ? (await Promise.all(null == e ? void 0 : e.map(async (t) => this.getTrack(t)))).filter((t) => null !== t)
                        : [];
                }
                async getTracksCount() {
                    let t = await this.usersTracksManager.getCountByUid();
                    return null != t ? t : 0;
                }
                async getTrack(t) {
                    try {
                        return await this.trackManager.getTrack(t);
                    } catch (e) {
                        return this.hooks.afterError.promise(new tI('Failed to get track', { cause: e, data: { id: t } })), null;
                    }
                }
                async deleteTrack(t) {
                    try {
                        await this.trackManager.deleteTrack(t);
                    } catch (e) {
                        this.hooks.afterError.promise(new tI('Failed to delete track', { cause: e, data: { id: t } }));
                    }
                }
                async refreshTracksAvailability() {
                    try {
                        let t = await this.usersTracksManager.getTracksByUid();
                        if (!t) return;
                        let e = async (t) => {
                                (await this.availabilityResource.getAvailabilityTracks({ trackIds: t })).availabilities.forEach((t) => {
                                    let { trackId: e, available: r } = t,
                                        [a] = (0, ti.d)(e);
                                    a && this.trackManager.putTrackAvailable(a, r);
                                });
                            },
                            r = (0, tA.A)(t, this.variables.requestTrackChunkSize);
                        Promise.all(r.map(e));
                    } catch (t) {
                        this.hooks.afterError.promise(new tI('Failed to refresh tracks availability', { cause: t }));
                    }
                }
                async refreshTracksMeta() {
                    try {
                        let t = await this.usersTracksManager.getTracksByUid();
                        if (!t) return;
                        let e = async (t) => {
                                (await this.tracksResource.getTracksMeta({ trackIds: t })).forEach(this.updateTrackMeta.bind(this));
                            },
                            r = (0, tA.A)(t, this.variables.requestTrackChunkSize);
                        Promise.all(r.map(e));
                    } catch (t) {
                        this.hooks.afterError.promise(new tI('Failed to refresh tracks meta', { cause: t }));
                    }
                }
                async updateTrackMeta(t) {
                    try {
                        var e, r;
                        let a = await this.usersTracksManager.get(String(t.id));
                        if (!a) return;
                        let i = null == (r = t.albums) || null == (e = r[0]) ? void 0 : e.id;
                        if ((void 0 === a.albumId && void 0 === i) || a.albumId === String(i)) {
                            await this.trackManager.deleteTrackArtists(String(t.id)), this.trackManager.saveTrack(t);
                            return;
                        }
                        await this.deleteTrack(String((0, ti.V)(a.trackId, a.albumId))), this.download(String((0, ti.V)(t.id, i)));
                    } catch (e) {
                        this.hooks.afterError.promise(new tI('Failed to update track meta', { cause: e, data: { id: t.id } }));
                    }
                }
                constructor(t) {
                    (0, h._)(this, 'userConfig', void 0),
                        (0, h._)(this, 'hooks', void 0),
                        (0, h._)(this, 'store', void 0),
                        (0, h._)(this, 'tracksResource', void 0),
                        (0, h._)(this, 'availabilityResource', void 0),
                        (0, h._)(this, 'trackManager', void 0),
                        (0, h._)(this, 'usersTracksManager', void 0),
                        (0, h._)(this, 'variables', void 0);
                    let { availabilityResource: e, tracksResource: r } = t.container.get(y);
                    (this.userConfig = t.container.get(u)),
                        (this.hooks = t.container.get(b)),
                        (this.store = t.container.get(g)),
                        (this.availabilityResource = e),
                        (this.tracksResource = r),
                        (this.variables = t.variables),
                        (this.trackManager = t.container.get(v)),
                        (this.usersTracksManager = t.container.get(E)),
                        this.validateTracks();
                }
            }
            class tb {
                async getAlbumsByUid() {
                    var t;
                    return null == (t = this.repositoryContainer.usersAlbumsRepository) ? void 0 : t.getAlbumsByUid(this.userConfig.uid);
                }
                async getCountByUid() {
                    var t;
                    return null == (t = this.repositoryContainer.usersAlbumsRepository) ? void 0 : t.getCountByUid(this.userConfig.uid);
                }
                async getCountByAlbumId(t) {
                    var e;
                    return null == (e = this.repositoryContainer.usersAlbumsRepository) ? void 0 : e.getCountByAlbumId(t);
                }
                async get(t) {
                    var e;
                    return null == (e = this.repositoryContainer.usersAlbumsRepository) ? void 0 : e.get(this.userConfig.uid, t);
                }
                async put(t) {
                    var e;
                    await (null == (e = this.repositoryContainer.usersAlbumsRepository) ? void 0 : e.put({ uid: this.userConfig.uid, albumId: t }));
                }
                async delete(t) {
                    var e;
                    await (null == (e = this.repositoryContainer.usersAlbumsRepository) ? void 0 : e.delete(this.userConfig.uid, t));
                }
                constructor(t) {
                    (0, h._)(this, 'userConfig', void 0),
                        (0, h._)(this, 'repositoryContainer', void 0),
                        (this.userConfig = t.container.get(u)),
                        (this.repositoryContainer = t.container.get(p));
                }
            }
            class tS {
                async getTracksByUid() {
                    var t;
                    return null == (t = this.repositoryContainer.usersTracksRepository) ? void 0 : t.getTracksByUid(this.userConfig.uid);
                }
                async getCountByUid() {
                    var t;
                    return null == (t = this.repositoryContainer.usersTracksRepository) ? void 0 : t.getCountByUid(this.userConfig.uid);
                }
                async getCountByTrackId(t) {
                    var e;
                    return null == (e = this.repositoryContainer.usersTracksRepository) ? void 0 : e.getCountByTrackId(t);
                }
                async get(t) {
                    var e;
                    return null == (e = this.repositoryContainer.usersTracksRepository) ? void 0 : e.get(this.userConfig.uid, t);
                }
                async put(t) {
                    var e;
                    await (null == (e = this.repositoryContainer.usersTracksRepository) ? void 0 : e.put(t));
                }
                async delete(t) {
                    var e;
                    await (null == (e = this.repositoryContainer.usersTracksRepository) ? void 0 : e.delete(this.userConfig.uid, t));
                }
                constructor(t) {
                    (0, h._)(this, 'userConfig', void 0),
                        (0, h._)(this, 'repositoryContainer', void 0),
                        (this.userConfig = t.container.get(u)),
                        (this.repositoryContainer = t.container.get(p));
                }
            }
            let tR = () => ('undefined' == typeof navigator ? { isOffline: !1 } : { isOffline: !navigator.onLine });
            class tD {
                updateStatus(t) {
                    (this.status = tR()), t(this.status);
                }
                subscribe(t) {
                    this.updateStatus(t),
                        window.addEventListener('online', this.updateStatus.bind(this, t)),
                        window.addEventListener('offline', this.updateStatus.bind(this, t));
                }
                unsubscribe(t) {
                    window.removeEventListener('online', this.updateStatus.bind(this, t)), window.removeEventListener('offline', this.updateStatus.bind(this, t));
                }
                constructor() {
                    (0, h._)(this, 'status', tR());
                }
            }
            class tO extends R.t {
                constructor(t, { code: e = 'E_FILE_STORAGE', ...r } = {}) {
                    super(''.concat('[FileStorage]', ' ').concat(t), { code: e, ...r }),
                        (0, h._)(this, 'name', 'FileStorageException'),
                        Object.setPrototypeOf(this, tO.prototype);
                }
            }
            class tx {
                async getRootDir() {
                    try {
                        let t = await this.rootDir;
                        if (!this.isAvailable || !t) throw this.generateError('FileStorage is not available');
                        return t;
                    } catch (t) {
                        throw this.generateError('FileStorage is not available', t);
                    }
                }
                parsePath(t) {
                    let e = t.split('/'),
                        r = e.pop();
                    if (!r) throw this.generateError('Invalid file path');
                    return { name: r, dir: e.join('/') };
                }
                async getDirectoryRecursive(t, e, r) {
                    let a = e.shift();
                    if (!a) return t;
                    let i = await t.getDirectoryHandle(a, r);
                    return this.getDirectoryRecursive(i, e, r);
                }
                async getDirectory(t, e) {
                    let r = t.split('/'),
                        a = await this.getRootDir();
                    return this.getDirectoryRecursive(a, r, e);
                }
                async getFile(t, e) {
                    let { name: r, dir: a } = this.parsePath(t);
                    return (await this.getDirectory(a, e)).getFileHandle(r, e);
                }
                async isFileExisting(t) {
                    try {
                        return await this.getFile(t), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                async writeFile(t, e) {
                    try {
                        let r = await this.getFile(t, { create: !0 }),
                            a = await r.createWritable();
                        await a.write(e), await a.close();
                    } catch (e) {
                        throw this.generateError('Error when trying to write file', e, { path: t });
                    }
                }
                async readFile(t) {
                    try {
                        let e = await this.getFile(t);
                        return await e.getFile();
                    } catch (e) {
                        throw this.generateError('Error when trying to read file', e, { path: t });
                    }
                }
                async deleteFile(t, e) {
                    try {
                        if (!(await this.isFileExisting(t))) return;
                        let { name: r, dir: a } = this.parsePath(t),
                            i = await this.getDirectory(a);
                        return await i.removeEntry(r, e);
                    } catch (e) {
                        throw this.generateError('Error when trying to delete file', e, { path: t });
                    }
                }
                async createFileURL(t) {
                    try {
                        let e = await this.getFile(t),
                            r = await e.getFile();
                        return URL.createObjectURL(r);
                    } catch (e) {
                        throw this.generateError('Error when trying to create file URL', e, { path: t });
                    }
                }
                async getEstimate() {
                    var t, e;
                    return (null == (e = window.navigator) || null == (t = e.storage) ? void 0 : t.estimate) ? window.navigator.storage.estimate().catch(() => ({})) : {};
                }
                generateError(t, e, r) {
                    return new tO(t, { cause: e instanceof Error ? e.message : String(e), data: { errorMeta: { estimate: this.estimate }, ...r } });
                }
                constructor() {
                    (0, h._)(this, 'rootDir', void 0),
                        (0, h._)(this, 'isAvailable', !0),
                        (0, h._)(this, 'estimate', {}),
                        (this.rootDir = window.navigator.storage.getDirectory()),
                        this.getEstimate().then((t) => {
                            this.estimate = t;
                        });
                }
            }
            !(function (t) {
                (t.WRITE = 'WRITE'), (t.READ = 'READ'), (t.DELETE = 'DELETE'), (t.CREATE_URL = 'CREATE_URL'), (t.IS_EXISTING = 'IS_EXISTING');
            })(l || (l = {}));
            class tN {
                async executeWithLock(t, e) {
                    let r = this.operationsInProgress.get(t);
                    if (r) return r;
                    let a = e();
                    return (
                        this.operationsInProgress.set(t, a),
                        a.finally(() => {
                            this.operationsInProgress.delete(t);
                        })
                    );
                }
                getOperationKey(t) {
                    for (var e = arguments.length, r = Array(e > 1 ? e - 1 : 0), a = 1; a < e; a++) r[a - 1] = arguments[a];
                    return [t, ...r].join('-');
                }
                async writeFile() {
                    for (var t = arguments.length, e = Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                    return this.executeWithLock(this.getOperationKey(l.WRITE, ...e), async () => this.storage.writeFile(...e));
                }
                async readFile() {
                    for (var t = arguments.length, e = Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                    return this.executeWithLock(this.getOperationKey(l.READ, ...e), async () => this.storage.readFile(...e));
                }
                async deleteFile() {
                    for (var t = arguments.length, e = Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                    return this.executeWithLock(this.getOperationKey(l.DELETE, ...e), async () => this.storage.deleteFile(...e));
                }
                async createFileURL() {
                    for (var t = arguments.length, e = Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                    return this.executeWithLock(this.getOperationKey(l.CREATE_URL, ...e), async () => this.storage.createFileURL(...e));
                }
                async isFileExisting() {
                    for (var t = arguments.length, e = Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                    return this.executeWithLock(this.getOperationKey(l.IS_EXISTING, ...e), async () => this.storage.isFileExisting(...e));
                }
                get activeOperationsCount() {
                    return this.operationsInProgress.size;
                }
                get activeOperationsPaths() {
                    return Array.from(this.operationsInProgress.keys());
                }
                constructor(t = new tx()) {
                    (0, h._)(this, 'storage', void 0), (0, h._)(this, 'operationsInProgress', new Map()), (this.storage = t);
                }
            }
            class tL extends R.t {
                constructor(t, { code: e = 'E_IDB_REPOSITORY', ...r } = {}) {
                    super(''.concat('[IndexedDB]', ' ').concat(t), { code: e, ...r }),
                        (0, h._)(this, 'name', 'IdbRepositoryException'),
                        Object.setPrototypeOf(this, tL.prototype);
                }
            }
            class tM {
                async clearAll() {
                    return this.executeTransaction(async (t) => t.clear(this.config.name));
                }
                async executeTransaction(t) {
                    let e = await this.idb;
                    if (!this.isIdbAvailable || !e) throw this.generateError('IdbRepository is not available');
                    return t(e);
                }
                async count() {
                    return this.executeTransaction(async (t) => t.count(this.config.name));
                }
                async openIdb() {
                    return new F.h(''.concat('music_slam', '_').concat(this.config.name)).openDB(this.config.version, {
                        onBlocked: (t, e, r) => {
                            var a, i;
                            this.onError(), null == (i = this.handlers) || null == (a = i.onBlocked) || a.call(i, t, e, r);
                        },
                        onBlocking: (t, e, r) => {
                            var a, i;
                            this.onError(), null == (i = this.handlers) || null == (a = i.onBlocking) || a.call(i, t, e, r);
                        },
                        onTerminated: () => {
                            var t, e;
                            this.onError(), null == (e = this.handlers) || null == (t = e.onTerminated) || t.call(e);
                        },
                        onUpgrade: (t, e, r, a, i) => {
                            var s, n;
                            null == (n = this.handlers) || null == (s = n.onUpgrade) || s.call(n, t, e, r, a, i);
                        },
                    });
                }
                onError() {
                    this.closeConnection().finally(() => {
                        this.attemptsConnection < this.config.restrictions.attemptsCount
                            ? (this.attemptsConnection++, (this.idb = this.openIdb()))
                            : (this.isIdbAvailable = !1);
                    });
                }
                async closeConnection() {
                    let t = await this.idb;
                    t && t.close();
                }
                async getEstimate() {
                    var t, e;
                    return (null == (e = window.navigator) || null == (t = e.storage) ? void 0 : t.estimate) ? window.navigator.storage.estimate().catch(() => ({})) : {};
                }
                generateError(t, e, r) {
                    return new tL(t, {
                        cause: e instanceof Error ? e.message : String(e),
                        data: { errorMeta: { repository: { name: String(this.config.name), version: this.config.version }, estimate: this.estimate }, ...r },
                    });
                }
                constructor({ config: t, handlers: e }) {
                    (0, h._)(this, 'idb', void 0),
                        (0, h._)(this, 'config', void 0),
                        (0, h._)(this, 'handlers', void 0),
                        (0, h._)(this, 'attemptsConnection', 0),
                        (0, h._)(this, 'isIdbAvailable', !0),
                        (0, h._)(this, 'estimate', {}),
                        (this.config = t),
                        (this.handlers = e),
                        (this.idb = this.openIdb()),
                        this.getEstimate().then((t) => {
                            this.estimate = t;
                        });
                }
            }
            class tF extends tM {
                async put(t) {
                    return this.executeTransaction(async (e) => {
                        var r;
                        let a = await e.get(P.name, String(t.id)),
                            i = Date.now(),
                            s = null != (r = null == a ? void 0 : a.createdAt) ? r : i;
                        return e.put(P.name, { meta: t, updatedAt: i, createdAt: s }, String(t.id));
                    }).catch((e) => {
                        throw this.generateError('Error when trying to put data', e, { albumId: t.id });
                    });
                }
                async get(t) {
                    return this.executeTransaction(async (e) => {
                        var r;
                        let a = await e.get(P.name, t);
                        return null != (r = null == a ? void 0 : a.meta) ? r : null;
                    }).catch((e) => {
                        throw this.generateError('Error when trying to get data', e, { albumId: t });
                    });
                }
                async delete(t) {
                    return this.executeTransaction(async (e) => e.delete(P.name, t)).catch((e) => {
                        throw this.generateError('Error when trying to delete data', e, { albumId: t });
                    });
                }
                constructor() {
                    super({
                        config: P,
                        handlers: {
                            onUpgrade: (t) => {
                                t.createObjectStore(P.name);
                            },
                        },
                    });
                }
            }
            let tP = 'albumId',
                tU = 'artistId',
                tK = (t, e) => ''.concat(t, ':').concat(e);
            class tB extends tM {
                async put(t) {
                    let { albumId: e, artistId: r, artistIndex: a } = t;
                    return this.executeTransaction(async (t) => {
                        var i;
                        let s = await t.get(U.name, tK(e, r)),
                            n = Date.now(),
                            o = null != (i = null == s ? void 0 : s.createdAt) ? i : n;
                        return t.put(U.name, { albumId: e, artistId: r, artistIndex: a, updatedAt: n, createdAt: o }, tK(e, r));
                    }).catch((t) => {
                        throw this.generateError('Error when trying to put data', t, { albumId: e, artistId: r });
                    });
                }
                async get(t, e) {
                    return this.executeTransaction(async (r) => {
                        let a = await r.get(U.name, tK(t, e));
                        return null != a ? a : null;
                    }).catch((r) => {
                        throw this.generateError('Error when trying to get data', r, { albumId: t, artistId: e });
                    });
                }
                async getArtistsByAlbumId(t) {
                    return this.executeTransaction(async (e) => (await e.getAllFromIndex(U.name, tP, t)).sort((t, e) => t.artistIndex - e.artistIndex)).catch((e) => {
                        throw this.generateError('Error when trying to get data', e, { albumId: t });
                    });
                }
                async getAlbumsByArtistId(t) {
                    return this.executeTransaction(async (e) => (await e.getAllFromIndex(U.name, tU, t)).sort((t, e) => t.artistIndex - e.artistIndex)).catch((e) => {
                        throw this.generateError('Error when trying to get data', e, { artistId: t });
                    });
                }
                async delete(t, e) {
                    return this.executeTransaction(async (r) => r.delete(U.name, tK(t, e))).catch((r) => {
                        throw this.generateError('Error when trying to delete data', r, { albumId: t, artistId: e });
                    });
                }
                async deleteByAlbumId(t) {
                    return this.executeTransaction(async (e) => {
                        let r = (await e.getAllFromIndex(U.name, tP, t)).map(async (t) => e.delete(U.name, tK(t.albumId, t.artistId)));
                        await Promise.all(r);
                    }).catch((e) => {
                        throw this.generateError('Error when trying to delete data by albumId', e, { albumId: t });
                    });
                }
                async getCountByAlbum(t) {
                    return this.executeTransaction(async (e) => e.countFromIndex(U.name, tP, t)).catch((e) => {
                        throw this.generateError('Error when trying to get data', e, { albumId: t });
                    });
                }
                async getCountByArtist(t) {
                    return this.executeTransaction(async (e) => e.countFromIndex(U.name, tU, t)).catch((e) => {
                        throw this.generateError('Error when trying to get data', e, { artistId: t });
                    });
                }
                constructor() {
                    super({
                        config: U,
                        handlers: {
                            onUpgrade: (t) => {
                                let e = t.createObjectStore(U.name);
                                e.createIndex(tP, 'albumId'), e.createIndex(tU, 'artistId');
                            },
                        },
                    });
                }
            }
            let tG = 'albumId',
                tW = 'trackId',
                tj = (t, e) => ''.concat(t, ':').concat(e);
            class tH extends tM {
                async put(t) {
                    let { trackId: e, albumId: r, volume: a, position: i } = t;
                    return this.executeTransaction(async (t) => t.put(K.name, { trackId: e, albumId: r, volume: a, position: i }, tj(e, r))).catch((t) => {
                        throw this.generateError('Error when trying to put data', t, { trackId: e, albumId: r });
                    });
                }
                async get(t, e) {
                    return this.executeTransaction(async (r) => {
                        let a = await r.get(K.name, tj(t, e));
                        return null != a ? a : null;
                    }).catch((r) => {
                        throw this.generateError('Error when trying to get data', r, { trackId: t, albumId: e });
                    });
                }
                async getTracksByAlbumId(t) {
                    return this.executeTransaction(async (e) => (await e.getAllFromIndex(K.name, tG, t)).map((t) => t.trackId)).catch((e) => {
                        throw this.generateError('Error when trying to get data', e, { albumId: t });
                    });
                }
                async getAlbumsByTrackId(t) {
                    return this.executeTransaction(async (e) => (await e.getAllFromIndex(K.name, tW, t)).map((t) => t.albumId)).catch((e) => {
                        throw this.generateError('Error when trying to get data', e, { trackId: t });
                    });
                }
                async delete(t, e) {
                    return this.executeTransaction(async (r) => r.delete(K.name, tj(t, e))).catch((r) => {
                        throw this.generateError('Error when trying to delete data', r, { trackId: t, albumId: e });
                    });
                }
                async getCountByAlbum(t) {
                    return this.executeTransaction(async (e) => e.countFromIndex(K.name, tG, t)).catch((e) => {
                        throw this.generateError('Error when trying to get data', e, { albumId: t });
                    });
                }
                constructor() {
                    super({
                        config: K,
                        handlers: {
                            onUpgrade: (t) => {
                                let e = t.createObjectStore(K.name);
                                e.createIndex(tG, 'albumId'), e.createIndex(tW, 'trackId');
                            },
                        },
                    });
                }
            }
            class tq extends tM {
                async put(t) {
                    return this.executeTransaction(async (e) => {
                        var r;
                        let a = await e.get(B.name, String(t.id)),
                            i = Date.now(),
                            s = null != (r = null == a ? void 0 : a.createdAt) ? r : i;
                        return e.put(B.name, { meta: t, updatedAt: i, createdAt: s }, String(t.id));
                    }).catch((e) => {
                        throw this.generateError('Error when trying to put data', e, { artistId: t.id });
                    });
                }
                async get(t) {
                    return this.executeTransaction(async (e) => {
                        var r;
                        let a = await e.get(B.name, t);
                        return null != (r = null == a ? void 0 : a.meta) ? r : null;
                    }).catch((e) => {
                        throw this.generateError('Error when trying to get data', e, { artistId: t });
                    });
                }
                async delete(t) {
                    return this.executeTransaction(async (e) => e.delete(B.name, t)).catch((e) => {
                        throw this.generateError('Error when trying to delete data', e, { artistId: t });
                    });
                }
                constructor() {
                    super({
                        config: B,
                        handlers: {
                            onUpgrade: (t) => {
                                t.createObjectStore(B.name);
                            },
                        },
                    });
                }
            }
            let tV = 'artistId',
                tY = 'trackId',
                tz = (t, e) => ''.concat(t, ':').concat(e);
            class tX extends tM {
                async put(t) {
                    let { trackId: e, artistId: r } = t;
                    return this.executeTransaction(async (a) => a.put(G.name, t, tz(e, r))).catch((t) => {
                        throw this.generateError('Error when trying to put data', t, { artistId: r, trackId: e });
                    });
                }
                async get(t, e) {
                    return this.executeTransaction(async (r) => {
                        let a = await r.get(G.name, tz(t, e));
                        return null != a ? a : null;
                    }).catch((r) => {
                        throw this.generateError('Error when trying to get data', r, { trackId: t, artistId: e });
                    });
                }
                async getArtistsByTrackId(t) {
                    return this.executeTransaction(async (e) => (await e.getAllFromIndex(G.name, tY, t)).sort((t, e) => t.artistIndex - e.artistIndex)).catch((e) => {
                        throw this.generateError('Error when trying to get data', e, { trackId: t });
                    });
                }
                async getTracksByArtistId(t) {
                    return this.executeTransaction(async (e) => (await e.getAllFromIndex(G.name, tV, t)).sort((t, e) => t.artistIndex - e.artistIndex)).catch((e) => {
                        throw this.generateError('Error when trying to get data', e, { artistId: t });
                    });
                }
                async delete(t, e) {
                    return this.executeTransaction(async (r) => r.delete(G.name, tz(t, e))).catch((r) => {
                        throw this.generateError('Error when trying to delete data', r, { artistId: e, trackId: t });
                    });
                }
                async getCountByArtist(t) {
                    return this.executeTransaction(async (e) => e.countFromIndex(G.name, tV, t)).catch((e) => {
                        throw this.generateError('Error when trying to get data', e, { artistId: t });
                    });
                }
                constructor() {
                    super({
                        config: G,
                        handlers: {
                            onUpgrade: (t) => {
                                let e = t.createObjectStore(G.name);
                                e.createIndex(tY, 'trackId'), e.createIndex(tV, 'artistId');
                            },
                        },
                    });
                }
            }
            let tQ = 'priority_updatedAt',
                tJ = (t, e) => ''.concat(t, ':').concat(e);
            class tZ extends tM {
                async put(t) {
                    let { uid: e, requestId: r } = t;
                    return this.executeTransaction(async (a) => {
                        var i;
                        let s = await this.get(e, r),
                            n = Date.now(),
                            o = null != (i = null == s ? void 0 : s.createdAt) ? i : n,
                            c = { ...t, updatedAt: n, createdAt: o },
                            l = await a.count(W.name);
                        return s || l < Number(W.restrictions.count) || (await this.deleteResponseByLowPriority()), a.put(W.name, c, tJ(e, r));
                    }).catch((t) => {
                        throw this.generateError('Error when trying to put data', t, { uid: e, requestId: r });
                    });
                }
                async get(t, e, r) {
                    let a = await this.getResponse(t, e);
                    return a && r && Date.now() - a.updatedAt > r ? (await this.delete(t, e), null) : null != a ? a : null;
                }
                async getResponse(t, e) {
                    return this.executeTransaction(async (r) => {
                        let a = tJ(t, e),
                            i = await r.get(W.name, a);
                        return null != i ? i : null;
                    }).catch((r) => {
                        throw this.generateError('Error when trying to get data', r, { uid: t, requestId: e });
                    });
                }
                async delete(t, e) {
                    return this.executeTransaction(async (r) => r.delete(W.name, tJ(t, e))).catch((r) => {
                        throw this.generateError('Error when trying to delete data', r, { uid: t, requestId: e });
                    });
                }
                async deleteResponseByLowPriority() {
                    return this.executeTransaction(async (t) => {
                        let e = t.transaction([W.name], 'readwrite').objectStore(W.name).index(tQ),
                            r = await e.openCursor();
                        return null == r ? void 0 : r.delete();
                    }).catch((t) => {
                        throw this.generateError('Error when trying to delete data', t);
                    });
                }
                constructor() {
                    super({
                        config: W,
                        handlers: {
                            onUpgrade: (t) => {
                                t.createObjectStore(W.name).createIndex(tQ, ['priority', 'updatedAt']);
                            },
                        },
                    });
                }
            }
            class t$ extends tM {
                async put(t) {
                    return this.executeTransaction(async (e) => {
                        var r;
                        let a = await e.get(j.name, t.id),
                            i = Date.now(),
                            s = null != (r = null == a ? void 0 : a.createdAt) ? r : i;
                        return e.put(j.name, { ...a, meta: t, updatedAt: i, createdAt: s }, t.id);
                    }).catch((e) => {
                        throw this.generateError('Error when trying to put data', e, { trackId: t.id });
                    });
                }
                async get(t) {
                    return this.executeTransaction(async (e) => {
                        let r = await e.get(j.name, t);
                        return null != r ? r : null;
                    }).catch((e) => {
                        throw this.generateError('Error when trying to get data', e, { trackId: t });
                    });
                }
                async getAllIds() {
                    return this.executeTransaction(async (t) => t.getAllKeys(j.name)).catch((t) => {
                        throw this.generateError('Error when trying to get data', t);
                    });
                }
                async putDecryptKey(t, e) {
                    return this.executeTransaction(async (r) => {
                        var a;
                        let i = await r.get(j.name, t);
                        if (!i) throw new tL('Track not found');
                        let s = Date.now(),
                            n = null != (a = null == i ? void 0 : i.createdAt) ? a : s;
                        return r.put(j.name, { meta: i.meta, decryptKey: e, updatedAt: s, createdAt: n }, t);
                    }).catch((e) => {
                        throw this.generateError('Error when trying to put data', e, { trackId: t });
                    });
                }
                async putTrackAvailable(t, e) {
                    return this.executeTransaction(async (r) => {
                        var a;
                        let i = await r.get(j.name, t);
                        if (!i) throw new tL('Track not found');
                        let s = Date.now(),
                            n = null != (a = null == i ? void 0 : i.createdAt) ? a : s,
                            { meta: o } = i;
                        return r.put(j.name, { ...i, meta: { ...o, available: e }, updatedAt: s, createdAt: n }, t);
                    }).catch((e) => {
                        throw this.generateError('Error when trying to put data', e, { trackId: t });
                    });
                }
                async getDecryptKey(t) {
                    return this.executeTransaction(async (e) => {
                        var r;
                        let a = await e.get(j.name, t);
                        return null != (r = null == a ? void 0 : a.decryptKey) ? r : null;
                    }).catch((e) => {
                        throw this.generateError('Error when trying to get data', e, { trackId: t });
                    });
                }
                async delete(t) {
                    return this.executeTransaction(async (e) => e.delete(j.name, t)).catch((e) => {
                        throw this.generateError('Error when trying to delete data', e, { trackId: t });
                    });
                }
                constructor() {
                    super({
                        config: j,
                        handlers: {
                            onUpgrade: (t) => {
                                t.createObjectStore(j.name);
                            },
                        },
                    });
                }
            }
            class t0 extends tM {
                async put(t) {
                    return this.executeTransaction(async (e) => {
                        var r;
                        let a = await e.get(H.name, t.uid),
                            i = Date.now(),
                            s = null != (r = null == a ? void 0 : a.createdAt) ? r : i;
                        return e.put(H.name, { ...t, updatedAt: i, createdAt: s }, t.uid);
                    }).catch((e) => {
                        throw this.generateError('Error when trying to put data', e, { uid: t.uid });
                    });
                }
                async get(t) {
                    return this.executeTransaction(async (e) => {
                        let r = await e.get(H.name, t);
                        return null != r ? r : null;
                    }).catch((e) => {
                        throw this.generateError('Error when trying to get data', e, { uid: t });
                    });
                }
                async delete(t) {
                    return this.executeTransaction(async (e) => e.delete(H.name, t)).catch((e) => {
                        throw this.generateError('Error when trying to delete data', e, { uid: t });
                    });
                }
                constructor() {
                    super({
                        config: H,
                        handlers: {
                            onUpgrade: (t) => {
                                t.createObjectStore(H.name);
                            },
                        },
                    });
                }
            }
            let t1 = 'albumId',
                t6 = (t, e) => ''.concat(t, ':').concat(e);
            class t8 extends tM {
                async put(t) {
                    let { uid: e, albumId: r } = t;
                    return this.executeTransaction(async (a) => {
                        var i;
                        let s = t6(e, r),
                            n = await a.get(q.name, s),
                            o = Date.now(),
                            c = null != (i = null == n ? void 0 : n.createdAt) ? i : o;
                        return a.put(q.name, { ...t, updatedAt: o, createdAt: c }, s);
                    }).catch((t) => {
                        throw this.generateError('Error when trying to put data', t, { uid: e, albumId: r });
                    });
                }
                async get(t, e) {
                    return this.executeTransaction(async (r) => {
                        let a = await r.get(q.name, t6(t, e));
                        return null != a ? a : null;
                    }).catch((r) => {
                        throw this.generateError('Error when trying to get data', r, { uid: t, albumId: e });
                    });
                }
                async getAlbumsByUid(t) {
                    return this.executeTransaction(async (e) =>
                        (await e.getAllFromIndex(q.name, 'uid', t))
                            .sort((t, e) => e.createdAt - t.createdAt)
                            .map((t) => {
                                let { albumId: e } = t;
                                return Number(e);
                            }),
                    ).catch((e) => {
                        throw this.generateError('Error when trying to get data', e, { uid: t });
                    });
                }
                async delete(t, e) {
                    return this.executeTransaction(async (r) => r.delete(q.name, t6(t, e))).catch((r) => {
                        throw this.generateError('Error when trying to delete data', r, { uid: t, albumId: e });
                    });
                }
                async getCountByAlbumId(t) {
                    return this.executeTransaction(async (e) => e.countFromIndex(q.name, t1, t)).catch((e) => {
                        throw this.generateError('Error when trying to get data', e, { albumId: t });
                    });
                }
                async getCountByUid(t) {
                    return this.executeTransaction(async (e) => e.countFromIndex(q.name, 'uid', t)).catch((e) => {
                        throw this.generateError('Error when trying to get data', e, { uid: t });
                    });
                }
                constructor() {
                    super({
                        config: q,
                        handlers: {
                            onUpgrade: (t) => {
                                let e = t.createObjectStore(q.name);
                                e.createIndex('uid', 'uid'), e.createIndex(t1, 'albumId');
                            },
                        },
                    });
                }
            }
            let t3 = 'trackId',
                t4 = (t, e) => ''.concat(t, ':').concat(e);
            class t5 extends tM {
                async put(t) {
                    let { uid: e, trackId: r } = t;
                    return this.executeTransaction(async (a) => {
                        var i;
                        let s = t4(e, r),
                            n = await a.get(V.name, s),
                            o = Date.now(),
                            c = null != (i = null == n ? void 0 : n.createdAt) ? i : o;
                        return a.put(V.name, { ...t, updatedAt: o, createdAt: c }, s);
                    }).catch((t) => {
                        throw this.generateError('Error when trying to put data', t, { uid: e, trackId: r });
                    });
                }
                async get(t, e) {
                    return this.executeTransaction(async (r) => {
                        let a = await r.get(V.name, t4(t, e));
                        return null != a ? a : null;
                    }).catch((r) => {
                        throw this.generateError('Error when trying to get data', r, { uid: t, trackId: e });
                    });
                }
                async getTracksByUid(t) {
                    return this.executeTransaction(async (e) =>
                        (await e.getAllFromIndex(V.name, 'uid', t))
                            .sort((t, e) => e.createdAt - t.createdAt)
                            .map((t) => {
                                let { trackId: e, albumId: r } = t;
                                return String((0, ti.V)(e, r));
                            }),
                    ).catch((e) => {
                        throw this.generateError('Error when trying to get data', e, { uid: t });
                    });
                }
                async delete(t, e) {
                    return this.executeTransaction(async (r) => r.delete(V.name, t4(t, e))).catch((r) => {
                        throw this.generateError('Error when trying to delete data', r, { uid: t, trackId: e });
                    });
                }
                async getCountByTrackId(t) {
                    return this.executeTransaction(async (e) => e.countFromIndex(V.name, t3, t)).catch((e) => {
                        throw this.generateError('Error when trying to get data', e, { trackId: t });
                    });
                }
                async getCountByUid(t) {
                    return this.executeTransaction(async (e) => e.countFromIndex(V.name, 'uid', t)).catch((e) => {
                        throw this.generateError('Error when trying to get data', e, { uid: t });
                    });
                }
                constructor() {
                    super({
                        config: V,
                        handlers: {
                            onUpgrade: (t) => {
                                let e = t.createObjectStore(V.name);
                                e.createIndex('uid', 'uid'), e.createIndex(t3, 'trackId');
                            },
                        },
                    });
                }
            }
            class t7 {
                get tracksController() {
                    return this.container ? this.container.get(C) : null;
                }
                get albumsController() {
                    return this.container ? this.container.get(I) : null;
                }
                get playlistsController() {
                    return this.container ? this.container.get(f) : null;
                }
                get artistsController() {
                    return this.container ? this.container.get(A) : null;
                }
                get store() {
                    return this.container ? this.container.get(g) : null;
                }
                createCacheController(t) {
                    this.cacheController || (this.cacheController = new X(t));
                }
                init(t) {
                    var e, r;
                    this.container ||
                        (this.container = (function (t) {
                            let {
                                repositoryContainer: e,
                                userConfig: r,
                                resources: a,
                                downloaderVariables: i,
                                featureFlags: s,
                                tracksControllerVariables: n,
                                trackDownloadTaskParams: o,
                            } = t;
                            return new te.Dt().registerMany({
                                [u]: (0, te.Gr)(() => r),
                                [d]: (0, te.Gr)(() => s),
                                [g]: (0, te.Gr)(() => new td()),
                                [b]: (0, te.Gr)(() => th),
                                [_]: (0, te.Gr)(() => new Z({ variables: i })),
                                [y]: (0, te.Gr)(() => a),
                                [p]: (0, te.Gr)(() => e),
                                [m]: (0, te.Gr)(() => e.fileStorage),
                                [v]: (0, te.do)((t) => new tf({ container: t })),
                                [E]: (0, te.do)((t) => new tS({ container: t })),
                                [w]: (0, te.do)((t) => new tl({ container: t })),
                                [T]: (0, te.do)((t) => new tc({ container: t })),
                                [k]: (0, te.do)((t) => new tb({ container: t })),
                                [C]: (0, te.Gr)((t) => {
                                    let { entities: e } = t.get(d);
                                    return e ? new t_({ container: t, variables: n }) : null;
                                }),
                                [f]: (0, te.Gr)((t) => {
                                    let { entities: e } = t.get(d);
                                    return e ? new $({ container: t }) : null;
                                }),
                                [A]: (0, te.Gr)((t) => {
                                    let { entities: e } = t.get(d);
                                    return e ? new x({ container: t }) : null;
                                }),
                                [I]: (0, te.Gr)((t) => {
                                    let { entities: e } = t.get(d);
                                    return e ? new ta({ container: t }) : null;
                                }),
                                [S]: (0, te.Gr)((t) => {
                                    let { tracksResource: e, getFileInfoResource: r } = t.get(y);
                                    return {
                                        tracksResource: e,
                                        getFileInfoResource: r,
                                        secretKey: o.secretKey,
                                        transport: o.transport,
                                        variables: o.variables,
                                        events: t.get(_).events,
                                        hooks: t.get(b),
                                    };
                                }),
                            });
                        })({ repositoryContainer: this.repositoryContainer, ...t })),
                        null == (r = this.repositoryContainer) || null == (e = r.usersRepository) || e.put({ uid: t.userConfig.uid });
                }
                async clearAll() {
                    var t;
                    return Promise.all([null == (t = this.tracksController) ? void 0 : t.clearAll()]);
                }
                constructor({ config: t, plugins: e }) {
                    (0, h._)(this, 'hooks', th),
                        (0, h._)(this, 'container', null),
                        (0, h._)(this, 'network', new tD()),
                        (0, h._)(this, 'repositoryContainer', void 0),
                        (0, h._)(this, 'cacheController', null),
                        (this.repositoryContainer = ((t) => {
                            let { useFileStorage: e, useResponseCacheStorage: r, useEntitiesStorage: a } = t,
                                i = {};
                            return (
                                e && (i.fileStorage = new tN()),
                                r && (i.responseCacheRepository = new tZ()),
                                a &&
                                    ((i.albumsRepository = new tF()),
                                    (i.albumsTracksRepository = new tH()),
                                    (i.albumsArtistsRepository = new tB()),
                                    (i.artistsRepository = new tq()),
                                    (i.artistsTracksRepository = new tX()),
                                    (i.tracksRepository = new t$()),
                                    (i.usersRepository = new t0()),
                                    (i.usersTracksRepository = new t5()),
                                    (i.usersAlbumsRepository = new t8())),
                                i
                            );
                        })(t)),
                        null == e || e.forEach((t) => t.apply({ hooks: this.hooks }));
                }
            }
            var t2 = r(81178);
            class t9 extends t2.Q {
                async about(t, e) {
                    let r = this.cacheController.getRequestId({ resourceName: t2.Q.constructor.name, methodName: this.about.name, args: [t] });
                    if (this.cacheController.shouldGetCache) return this.cacheController.get(r, 6048e5);
                    try {
                        let a = await super.about(t, e);
                        return this.cacheController.put({ requestId: r, response: a, uid: a.uid, priority: s.MEDIUM }), a;
                    } catch (t) {
                        return this.cacheController.handleError(t, r, 6048e5);
                    }
                }
                async settings(t, e) {
                    let r = this.cacheController.getRequestId({ resourceName: t2.Q.constructor.name, methodName: this.settings.name, args: [t] });
                    if (this.cacheController.shouldGetCache) return this.cacheController.get(r, 6048e5);
                    try {
                        let a = await super.settings(t, e);
                        return this.cacheController.put({ requestId: r, response: a, priority: s.MEDIUM }), a;
                    } catch (t) {
                        return this.cacheController.handleError(t, r, 6048e5);
                    }
                }
                async experiments(t, e) {
                    let r = this.cacheController.getRequestId({ resourceName: t2.Q.constructor.name, methodName: this.experiments.name, args: [t] });
                    if (this.cacheController.shouldGetCache) return this.cacheController.get(r, 6048e5);
                    try {
                        let a = await super.experiments(t, e);
                        return this.cacheController.put({ requestId: r, response: a, priority: s.MEDIUM }), a;
                    } catch (t) {
                        return this.cacheController.handleError(t, r, 6048e5);
                    }
                }
                async experimentsDetails(t, e) {
                    let r = this.cacheController.getRequestId({ resourceName: t2.Q.constructor.name, methodName: this.experimentsDetails.name, args: [t] });
                    if (this.cacheController.shouldGetCache) return this.cacheController.get(r, 6048e5);
                    try {
                        let a = await super.experimentsDetails(t, e);
                        return this.cacheController.put({ requestId: r, response: a, priority: s.MEDIUM }), a;
                    } catch (t) {
                        return this.cacheController.handleError(t, r, 6048e5);
                    }
                }
                constructor(t, e, r) {
                    super(t, e),
                        (0, h._)(this, 'httpClient', void 0),
                        (0, h._)(this, 'config', void 0),
                        (0, h._)(this, 'cacheController', void 0),
                        (this.httpClient = t),
                        (this.config = e),
                        (this.cacheController = r.cacheController);
                }
            }
            let et = (t) => {
                let { resource: e, cacheController: r, config: a } = t;
                return new Proxy(e, {
                    get(t, e) {
                        let i = t[e],
                            {
                                enabled: s,
                                ttl: n,
                                priority: o,
                            } = ((t, e) => {
                                var r, a, i, s;
                                let n = null == (r = t.overrides) ? void 0 : r[e];
                                return {
                                    enabled: null != (a = null == n ? void 0 : n.enabled) ? a : t.enabled,
                                    ttl: null != (i = null == n ? void 0 : n.ttl) ? i : t.ttl,
                                    priority: null != (s = null == n ? void 0 : n.priority) ? s : t.priority,
                                };
                            })(a, e);
                        return 'function' == typeof i && s
                            ? async function () {
                                  for (var s = arguments.length, c = Array(s), l = 0; l < s; l++) c[l] = arguments[l];
                                  let { resourceName: h } = a.common,
                                      u = r.getRequestId({ resourceName: h, prop: e, args: c });
                                  if (r.shouldGetCache) return r.get(u, n);
                                  try {
                                      let e = await i.apply(t, c);
                                      return r.put({ requestId: u, response: e, priority: o }), e;
                                  } catch (t) {
                                      return r.handleError(t, u, n);
                                  }
                              }
                            : i;
                    },
                });
            };
            var ee = r(63974);
            class er extends R.t {
                constructor(t, { code: e = 'E_RESOURCE_PROXY', ...r } = {}) {
                    super(''.concat('[ResourceProxy]', ' ').concat(t), { code: e, ...r }),
                        (0, h._)(this, 'name', 'ResourceProxyException'),
                        Object.setPrototypeOf(this, er.prototype);
                }
            }
            var ea = r(45963);
            let ei = [ea.e.PREVIEW, ea.e.SMART_PREVIEW],
                es = async (t) => {
                    let { key: e, data: r, loadedBytes: a } = t,
                        i = await crypto.subtle.importKey('raw', new Uint8Array(e.match(/.{1,2}/g).map((t) => parseInt(t, 16))), { name: 'AES-CTR' }, !1, [
                            'encrypt',
                            'decrypt',
                        ]),
                        s = new Uint8Array(16);
                    return (
                        a &&
                            (s = ((t) => {
                                let e = t,
                                    r = new Uint8Array(16);
                                for (let t = 0; t < 16; ++t) (r[r.length - 1 - t] = 255 & e), (e >>= 8);
                                return r;
                            })(a / 16)),
                        crypto.subtle.decrypt({ name: 'AES-CTR', counter: s, length: 128 }, i, r)
                    );
                };
            class en extends ee.v {
                async isTrackDownloaded(t, e) {
                    if (!this.variables.uid || ei.includes(e)) return !1;
                    try {
                        return !!(await this.usersTracksRepository.get(this.variables.uid, t));
                    } catch (e) {
                        return this.hooks.afterError.promise(new er('Can not determine if track was downloaded', { cause: e, data: { trackId: t } })), !1;
                    }
                }
                async getLocalFileDownloadInfo(t) {
                    let e = await this.tracksRepository.getDecryptKey(String(t));
                    if (!e) throw new er('Decrypt key not found');
                    let r = await this.fileStorage.readFile(tT(String(t))),
                        a = r.slice(0, r.size),
                        i = await a.arrayBuffer(),
                        s = await es({ data: i, key: e });
                    return { trackId: t, urls: [URL.createObjectURL(new Blob([s]))] };
                }
                async getFileInfo(t, e) {
                    if (!(await this.isTrackDownloaded(String(t.trackId), t.quality))) return super.getFileInfo(t, e);
                    try {
                        return { downloadInfo: await this.getLocalFileDownloadInfo(String(t.trackId)) };
                    } catch (r) {
                        return this.hooks.afterError.promise(new er('Can not get a local file', { cause: r, data: { trackId: t.trackId } })), super.getFileInfo(t, e);
                    }
                }
                async getSign(t, e, r, a) {
                    let i = (0, tp.T)(),
                        s = t.join(','),
                        n = e.join(''),
                        o = ''.concat(i).concat(s).concat(r).concat(n).concat(a);
                    return (0, tp.m)({ secretKey: this.variables.secretKey, data: o });
                }
                async getFileInfoBatch(t, e) {
                    let r = t.trackIds.split(','),
                        a = await Promise.all(r.map(async (e) => this.isTrackDownloaded.bind(this)(e, t.quality))),
                        i = {},
                        s = [],
                        n = [];
                    r.forEach((t, e) => {
                        (i[t] = e), a[e] ? n.push(t) : s.push(t);
                    });
                    let o = await Promise.allSettled(n.map(this.getLocalFileDownloadInfo.bind(this))),
                        c = [];
                    o.forEach((t, e) => {
                        switch (t.status) {
                            case 'fulfilled': {
                                let e = i[t.value.trackId];
                                void 0 !== e && (c[e] = t.value);
                                break;
                            }
                            case 'rejected': {
                                let t = n[e];
                                t && (this.hooks.afterError.promise(new er('Can not get a local file', { data: { trackId: t } })), s.push(t));
                            }
                        }
                    });
                    let l = null;
                    if (s.length > 0) {
                        let r = t.transports[0] || tm.o.RAW,
                            a = await this.getSign(s, t.codecs, t.quality, r);
                        try {
                            l = (await super.getFileInfoBatch({ ...t, sign: a, trackIds: s.join(',') }, e)).downloadInfos;
                        } catch (t) {
                            this.hooks.afterError.promise(new er('Can not get file info batch', { cause: String(t), data: { trackIds: s.join(',') } }));
                        }
                    }
                    return (
                        null == l ||
                            l.forEach((t) => {
                                let e = i[t.trackId];
                                void 0 !== e && (c[e] = t);
                            }),
                        { downloadInfos: c }
                    );
                }
                constructor(t, e, r) {
                    super(t, e),
                        (0, h._)(this, 'httpClient', void 0),
                        (0, h._)(this, 'config', void 0),
                        (0, h._)(this, 'fileStorage', void 0),
                        (0, h._)(this, 'tracksRepository', void 0),
                        (0, h._)(this, 'usersTracksRepository', void 0),
                        (0, h._)(this, 'hooks', void 0),
                        (0, h._)(this, 'variables', void 0),
                        (this.httpClient = t),
                        (this.config = e);
                    let { fileStorage: a, tracksRepository: i, usersTracksRepository: s, hooks: n, variables: o } = r;
                    (this.fileStorage = a), (this.tracksRepository = i), (this.usersTracksRepository = s), (this.hooks = n), (this.variables = o);
                }
            }
            let eo = L.X1.TEAPOT,
                ec = (t, e) =>
                    new Proxy(t, {
                        get(t, r) {
                            let a = t[r],
                                { isOffline: i } = e;
                            return 'function' == typeof a && i
                                ? function () {
                                      throw new L.GX('Offline mode enabled', { statusCode: eo });
                                  }
                                : a;
                        },
                    });
            var el = r(6587),
                eh = r(63854),
                eu = r(44262);
            class ed extends el.G {
                async getCollectionDownloadedTracks() {
                    let t = { tracks: [] };
                    if (!this.variables.tracksController) return t;
                    try {
                        return { tracks: await this.variables.tracksController.getTracks() };
                    } catch (e) {
                        return this.hooks.afterError.promise(new er('Can not get collection downloaded tracks', { cause: e })), t;
                    }
                }
                async getBlock(t, e) {
                    return t.type === eh.t.COLLECTION_DOWNLOADED_TRACKS ? this.getCollectionDownloadedTracks() : super.getBlock(t, e);
                }
                async getSkeleton(t, e) {
                    if (!this.variables.cacheController) return super.getSkeleton(t, e);
                    if (t.id === eu.p.WEB_COLLECTION) {
                        let r = this.variables.cacheController.getRequestId({ resourceName: el.G.constructor.name, methodName: this.getSkeleton.name, args: [t] });
                        if (this.variables.cacheController.shouldGetCache) return this.variables.cacheController.get(r, 6048e5);
                        try {
                            let a = await super.getSkeleton(t, e);
                            return this.variables.cacheController.put({ requestId: r, response: a, priority: s.MEDIUM }), a;
                        } catch (t) {
                            return this.variables.cacheController.handleError(t, r, 6048e5);
                        }
                    }
                    return super.getSkeleton(t, e);
                }
                constructor(t, e, r) {
                    super(t, e),
                        (0, h._)(this, 'httpClient', void 0),
                        (0, h._)(this, 'config', void 0),
                        (0, h._)(this, 'hooks', void 0),
                        (0, h._)(this, 'variables', void 0),
                        (this.httpClient = t),
                        (this.config = e),
                        (this.hooks = r.hooks),
                        (this.variables = r.variables);
                }
            }
        },
        45963: (t, e, r) => {
            var a;
            r.d(e, { e: () => a }),
                (function (t) {
                    (t.LOSSLESS = 'lossless'), (t.HQ = 'hq'), (t.NQ = 'nq'), (t.LQ = 'lq'), (t.PREVIEW = 'preview'), (t.SMART_PREVIEW = 'smart_preview');
                })(a || (a = {}));
        },
        60670: (t, e, r) => {
            r.d(e, { P: () => a });
            let a = (t) => {
                let e = {};
                return (
                    Object.getOwnPropertyNames(t)
                        .filter((e) => void 0 !== t[e] && null !== t[e])
                        .map((r) => {
                            e[r] = String(t[r]);
                        }),
                    new URLSearchParams(e)
                );
            };
        },
        63974: (t, e, r) => {
            r.d(e, { v: () => n });
            var a = r(30141),
                i = r(60670),
                s = r(151);
            class n extends s.X {
                async getFileInfo(t, e) {
                    var r;
                    let a = await this.httpClient.get(
                        'get-file-info',
                        this.createHttpOptions({
                            timeoutKey: 'getFileInfo',
                            params: t,
                            searchParams: (0, i.P)({
                                ts: t.tsInSeconds,
                                trackId: t.trackId,
                                quality: t.quality,
                                codecs: t.codecs.join(','),
                                transports: t.transports.join(','),
                                sign: t.sign,
                                fromPromoLanding: t.fromPromoLanding,
                            }),
                            signal: null == e ? void 0 : e.signal,
                        }),
                    );
                    return { ...(await a.json()), responseTime: null == (r = a.timings) ? void 0 : r.response, url: a.url };
                }
                async getFileInfoBatch(t, e) {
                    return (
                        await this.httpClient.get(
                            'get-file-info/batch',
                            this.createHttpOptions({
                                timeoutKey: 'getFileInfoBatch',
                                params: t,
                                searchParams: (0, i.P)({
                                    ts: t.tsInSeconds,
                                    trackIds: t.trackIds,
                                    quality: t.quality,
                                    codecs: t.codecs.join(','),
                                    transports: t.transports.join(','),
                                    sign: t.sign,
                                    fromPromoLanding: t.fromPromoLanding,
                                }),
                                signal: null == e ? void 0 : e.signal,
                            }),
                        )
                    ).json();
                }
                async getByteRange(t, e) {
                    let r = await this.httpClient.get(
                            t.srcUrl,
                            this.createHttpOptions(
                                {
                                    timeoutKey: 'getByteRange',
                                    params: t,
                                    signal: null == e ? void 0 : e.signal,
                                    headers: { Range: 'bytes='.concat(t.start, '-').concat(t.end) },
                                    excludeHeaders: ['x-request-id', 'x-retry-count'],
                                },
                                { withoutPrefixUrl: !0 },
                            ),
                        ),
                        a = await r.arrayBuffer();
                    return { data: a, contentLength: Number(r.headers['content-length']), contentRange: r.headers['content-range'] };
                }
                constructor(t, e) {
                    super(t, e), (0, a._)(this, 'httpClient', void 0), (0, a._)(this, 'config', void 0), (this.httpClient = t), (this.config = e);
                }
            }
        },
        67864: (t, e, r) => {
            r.d(e, { Dt: () => c, P9: () => u, Gr: () => h, do: () => l });
            var a = r(30141),
                i = r(63924);
            class s extends i.t {
                constructor(t = 'Internal error', { code: e = 'E_CONTAINER', ...r } = {}) {
                    super(t, { code: e, ...r }), (0, a._)(this, 'name', 'ContainerException'), Object.setPrototypeOf(this, s.prototype);
                }
            }
            class n extends s {
                constructor(t) {
                    super("A binding with the name '".concat(t.toString(), "' already exists in the container"), { code: 'E_CONTAINER_ALREADY_EXISTS' }),
                        (0, a._)(this, 'name', 'AlreadyExistsContainerException'),
                        Object.setPrototypeOf(this, n.prototype);
                }
            }
            class o extends s {
                constructor(t) {
                    super("No entry with the name '".concat(t.toString(), "' was found in the container"), { code: 'E_CONTAINER_NOT_FOUND' }),
                        (0, a._)(this, 'name', 'NotFoundContainerException'),
                        Object.setPrototypeOf(this, o.prototype);
                }
            }
            class c {
                register(t, e) {
                    if (this.has(t)) throw new n(t);
                    return (this.bindings = { ...this.bindings, [t]: e }), this;
                }
                registerMany(t) {
                    for (let e in t) if (this.has(e)) throw new n(e);
                    return (this.bindings = { ...this.bindings, ...t }), this;
                }
                get(t) {
                    if (this.shared.has(t)) return this.shared.get(t);
                    let e = this.bindings[t];
                    if (void 0 === e) throw new o(t);
                    let r = this.create(e);
                    return e.isShared && this.shared.set(t, r), r;
                }
                has(t) {
                    return t in this.bindings;
                }
                create(t) {
                    return t.creator(this);
                }
                constructor() {
                    (0, a._)(this, 'bindings', {}), (0, a._)(this, 'shared', new Map());
                }
            }
            function l(t) {
                return { type: 'transient', creator: t, isShared: !1 };
            }
            function h(t) {
                return { type: 'singleton', creator: t, isShared: !0 };
            }
            function u(t) {
                return { type: 'factory', creator: t, isShared: !1 };
            }
        },
        81178: (t, e, r) => {
            r.d(e, { Q: () => n });
            var a = r(30141),
                i = r(151),
                s = r(60670);
            class n extends i.X {
                async experiments(t, e) {
                    return (
                        await this.httpClient.get(
                            'account/experiments',
                            this.createHttpOptions({ timeoutKey: 'experiments', params: t, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                async experimentsDetails(t, e) {
                    return (
                        await this.httpClient.get(
                            'account/experiments/details',
                            this.createHttpOptions({ timeoutKey: 'experimentsDetails', params: t, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                async settings(t, e) {
                    return (
                        await this.httpClient.post(
                            'account/settings',
                            this.createHttpOptions({
                                timeoutKey: 'settings',
                                params: t,
                                signal: null == e ? void 0 : e.signal,
                                searchParams: (0, s.P)({
                                    childModEnabled: null == t ? void 0 : t.childModEnabled,
                                    userMusicVisibility: null == t ? void 0 : t.userMusicVisibility,
                                }),
                            }),
                        )
                    ).json();
                }
                async about(t, e) {
                    return (
                        await this.httpClient.get('account/about', this.createHttpOptions({ timeoutKey: 'about', params: t, signal: null == e ? void 0 : e.signal }))
                    ).json();
                }
                constructor(t, e) {
                    super(t, e), (0, a._)(this, 'httpClient', void 0), (0, a._)(this, 'config', void 0), (this.httpClient = t), (this.config = e);
                }
            }
        },
    },
]);
