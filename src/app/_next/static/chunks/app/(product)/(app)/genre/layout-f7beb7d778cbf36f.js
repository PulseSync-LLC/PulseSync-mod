(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7537],
    {
        1045: (e, t, a) => {
            'use strict';
            a.d(t, { k: () => r });
            let r = 100;
        },
        2047: (e, t, a) => {
            'use strict';
            var r;
            a.d(t, { L: () => r }),
                (function (e) {
                    (e.PUBLIC = 'public'), (e.PRIVATE = 'private');
                })(r || (r = {}));
        },
        5482: (e, t, a) => {
            'use strict';
            a.d(t, { I: () => s });
            var r = a(60754),
                i = a(57367);
            let s = a(38396).Z.props({ artists: r.gK.maybe(r.gK.array(i.P)) });
        },
        12388: (e, t, a) => {
            'use strict';
            a.d(t, { J: () => n });
            var r = a(60754),
                i = a(87411),
                s = a(57367),
                l = a(44032);
            let n = i.G.props({ artists: r.gK.maybe(r.gK.array(s.P)), chart: r.gK.maybe(l.I) }).views((e) => ({
                get artistNames() {
                    var t;
                    return null == (t = e.artists) ? void 0 : t.map((e) => e.name).join(', ');
                },
                get artistName() {
                    var a, r, i, s;
                    if (null == (r = e.artists) || null == (a = r[0]) ? void 0 : a.various) return;
                    return null == (s = e.artists) || null == (i = s[0]) ? void 0 : i.name;
                },
                get artistIds() {
                    var l;
                    return null == (l = e.artists) ? void 0 : l.map((e) => e.id);
                },
                get artistId() {
                    var n, o;
                    return null == (o = e.artists) || null == (n = o[0]) ? void 0 : n.id;
                },
            }));
        },
        13365: (e, t, a) => {
            'use strict';
            var r;
            a.d(t, { _: () => r }),
                (function (e) {
                    (e.UP = 'up'), (e.DOWN = 'down'), (e.SAME = 'same'), (e.NEW = 'new');
                })(r || (r = {}));
        },
        20168: (e, t, a) => {
            'use strict';
            a.d(t, { Y: () => r });
            var r = (function (e) {
                return (e.OK = 'ok'), (e.ERROR = 'error'), (e.RELOAD = 'reload'), e;
            })({});
        },
        33229: (e, t, a) => {
            'use strict';
            a.d(t, { j: () => l });
            var r = a(60754),
                i = a(93159),
                s = a(26544);
            let l = (e) => {
                var t, a, l, n, o;
                e = e || {};
                let u = (0, s.m)(e.trailer);
                return (0, r.wg)({
                    isAvailable: null == (n = e.available) || n,
                    uid: e.uid,
                    uuid: null != (o = e.playlistUuid) ? o : '',
                    kind: e.kind,
                    title: e.title,
                    coverUri: (null == e || null == (t = e.cover) ? void 0 : t.uri) || (null == e || null == (l = e.cover) || null == (a = l.itemsUri) ? void 0 : a[0]),
                    tracksCount: e.trackCount,
                    likesCount: e.likesCount,
                    averageColor: (0, i.Q)(null == e ? void 0 : e.derivedColors),
                    revision: e.revision,
                    generatedPlaylistType: e.generatedPlaylistType,
                    personalColor: e.personalColor,
                    visibility: e.visibility,
                    trailer: u,
                });
            };
        },
        38396: (e, t, a) => {
            'use strict';
            a.d(t, { Z: () => s });
            var r = a(60754);
            let i = r.gK.model('TrackIdModel', { id: r.gK.union(r.gK.string, r.gK.number), albumId: r.gK.maybe(r.gK.number), timestamp: r.gK.maybe(r.gK.string) }),
                s = a(74885)
                    .$.props({ tracks: r.gK.maybe(r.gK.array(i)) })
                    .actions((e) => ({ getKey: (t) => ''.concat(t, '_').concat(e.id) }));
        },
        44265: (e, t, a) => {
            'use strict';
            a.d(t, { j: () => r });
            var r = (function (e) {
                return (e[(e.LIKE = 3)] = 'LIKE'), (e[(e.CHART = 1076)] = 'CHART'), e;
            })({});
        },
        45066: (e, t, a) => {
            'use strict';
            a.d(t, { n: () => r });
            let r = {
                MIXES: 'pages/mixes',
                TAG: 'pages/tag',
                GENRES: 'pages/genres',
                PROMOLANDING: 'pages/promolanding',
                MUSIC_HISTORY: 'pages/music-history',
                POST: 'pages/post',
                PLAYLIST_PERSONAL: 'pages/playlist-personal',
                MY_MUSIC: 'pages/my-music',
                FAVORITE_TRACKS: 'pages/favorite-tracks',
                CONCERTS_DETAILS: 'pages/concerts-details',
                LANDING_PROMO_PREVIEW: 'pages/landing-promo-preview',
                LABEL: 'pages/label',
                GENRE: 'pages/genre',
                CHART: 'pages/chart',
            };
        },
        49259: (e, t, a) => {
            'use strict';
            a.d(t, { W: () => _, s: () => L });
            var r = a(32290),
                i = a(29222),
                s = a(96103),
                l = a(21916),
                n = a(55178),
                o = a(80451),
                u = a(96218),
                g = a(5245),
                d = a(57594),
                c = a(31726);
            (0, s.eO)(!1);
            let p = (0, n.createContext)(null),
                m = (e) => {
                    let { children: t, store: a, storeKey: i } = e,
                        s = (0, n.useMemo)(() => ({ store: a, storeKey: i }), [a, i]);
                    return (0, r.jsx)(p.Provider, { value: s, children: t });
                },
                E = (e) => {
                    let { nonce: t, patchKey: a, patchesRef: i } = e;
                    return (
                        (0, l.useServerInsertedHTML)(() => {
                            let e = i.current;
                            return ((i.current = []), 0 === e.length)
                                ? null
                                : (0, r.jsx)('script', {
                                      dangerouslySetInnerHTML: {
                                          __html: ((e, t) =>
                                              "\n        window.__PAGE_STATE_PATCHES__ = window.__PAGE_STATE_PATCHES__ || {};\n        window.__PAGE_STATE_PATCHES__['"
                                                  .concat(e, "'] =\n            window.__PAGE_STATE_PATCHES__['")
                                                  .concat(e, "'] || [];\n        window.__PAGE_STATE_PATCHES__['")
                                                  .concat(e, "'].push(")
                                                  .concat((0, o.stringifyJSONSafely)(t), ");\n        window.dispatchEvent(new Event('")
                                                  .concat(u.O, "'));\n    "))(a, e),
                                      },
                                      nonce: null != t ? t : void 0,
                                  });
                        }),
                        null
                    );
                },
                _ = (e) => {
                    let { createStore: t, patchKey: a } = e,
                        i = () => {
                            var e, t;
                            let r = null != (t = null == (e = window.__PAGE_STATE_PATCHES__) ? void 0 : e[a]) ? t : [];
                            return window.__PAGE_STATE_PATCHES__ && delete window.__PAGE_STATE_PATCHES__[a], r;
                        };
                    return {
                        pageStoreProvider: (e) => {
                            let { children: s, nonce: l } = e,
                                n = (0, c.Y)(),
                                o = (0, d.g)(),
                                { store: p, patchesRef: _ } = (0, g.m)({
                                    createStore: () => t({ ...n, rootStore: o }),
                                    getPendingPatchBatches: i,
                                    patchesUpdatedEventName: u.O,
                                });
                            return (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)(E, { nonce: l, patchKey: a, patchesRef: _ }), (0, r.jsx)(m, { store: p, storeKey: a, children: s })],
                            });
                        },
                    };
                };
            function L(e) {
                let { throwOnAbsence: t = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    a = (0, n.useContext)(p);
                if (!a || a.storeKey !== e) {
                    var r;
                    if (!t) return null;
                    throw new i.t('Page store context is missing or has unexpected key', {
                        code: 'E_CONTEXT_PAGE_STORE_NULL',
                        data: { actualStoreKey: null != (r = null == a ? void 0 : a.storeKey) ? r : 'null', expectedStoreKey: e },
                    });
                }
                return a.store;
            }
        },
        49399: (e, t, a) => {
            'use strict';
            a.d(t, { G: () => r });
            var r = (function (e) {
                return (e.IDLE = 'IDLE'), (e.PENDING = 'PENDING'), (e.RESOLVE = 'RESOLVE'), (e.REJECT = 'REJECT'), e;
            })({});
        },
        55516: (e, t, a) => {
            'use strict';
            a.d(t, { Z: () => s });
            var r = a(60754),
                i = a(33229);
            let s = (e) =>
                (0, r.wg)({
                    ...(0, i.j)(e),
                    owner: e.owner ? ((e) => ({ uid: e.uid, login: e.login, name: e.name, sex: e.sex, verified: e.verified }))(e.owner) : void 0,
                    description: e.description,
                    tags: e.tags,
                    modified: e.modified,
                    madeFor: e.madeFor
                        ? ((e) =>
                              (0, r.wg)({
                                  caseForms: e.caseForms
                                      ? ((e) =>
                                            (0, r.wg)({
                                                nominative: e.nominative,
                                                genitive: e.genitive,
                                                dative: e.dative,
                                                accusative: e.accusative,
                                                instrumental: e.instrumental,
                                                prepositional: e.prepositional,
                                            }))(e.caseForms)
                                      : null,
                              }))(e.madeFor)
                        : null,
                });
        },
        55985: (e, t, a) => {
            'use strict';
            a.d(t, { p: () => i });
            var r = a(60754);
            let i = (e) => (0, r.wg)({ uri: e.uri, color: e.color });
        },
        57594: (e, t, a) => {
            'use strict';
            a.d(t, { P: () => s, g: () => l });
            var r = a(29222),
                i = a(55178);
            let s = (0, i.createContext)(null);
            function l() {
                let e = (0, i.useContext)(s);
                if (null === e) throw new r.t('Store cannot be null, please add a context provider', { code: 'E_CONTEXT_STORE_NULL' });
                return e;
            }
        },
        58008: (e, t, a) => {
            'use strict';
            a.d(t, { F: () => r });
            var r = (function (e) {
                return (e.OK = 'ok'), (e.ERROR = 'error'), e;
            })({});
        },
        63380: (e, t, a) => {
            'use strict';
            var r;
            a.d(t, { f: () => r }),
                (function (e) {
                    (e.OK = 'ok'), (e.ERROR = 'error');
                })(r || (r = {}));
        },
        64605: (e, t, a) => {
            'use strict';
            var r;
            a.d(t, { _: () => r }),
                (function (e) {
                    (e.UNKNOWN = 'unknown'),
                        (e.ALBUM = 'album'),
                        (e.SINGLE = 'single'),
                        (e.COMPILATION = 'compilation'),
                        (e.PODCAST = 'podcast'),
                        (e.FAIRY_TALE = 'fairy-tale'),
                        (e.AUDIOBOOK = 'audiobook'),
                        (e.VIDEO_SINGLE = 'video-single'),
                        (e.VIDEO_ALBUM = 'video-album'),
                        (e.RADIO = 'radio'),
                        (e.ASMR = 'asmr'),
                        (e.NOISE = 'noise');
                })(r || (r = {}));
        },
        66472: (e, t, a) => {
            'use strict';
            a.d(t, { GenrePageStoreProvider: () => K });
            var r = a(49259),
                i = a(45066),
                s = a(60754),
                l = a(87953),
                n = a(72428),
                o = a(12388),
                u = a(55516),
                g = a(5482),
                d = a(84060),
                c = a(57367),
                p = a(49399),
                m = a(73715),
                E = a(58008),
                _ = a(86634);
            let L = s.gK
                    .model('GenreAlbumsPage', { pagesLoader: (0, _.I)(o.J), errorStatusCode: s.gK.maybeNull(s.gK.number), fullTitle: s.gK.maybeNull(s.gK.string) })
                    .views((e) => {
                        let t = {
                            get isNotFound() {
                                var a, r;
                                let t = e.pagesLoader.isSomePageResolved && (null != (r = null == (a = e.pagesLoader.items) ? void 0 : a.length) ? r : 0) === 0,
                                    i = e.errorStatusCode === l.X1.NOT_FOUND || e.errorStatusCode === l.X1.BAD_REQUEST;
                                return (e.pagesLoader.isInitialRequestRejected && i) || t;
                            },
                            get isSomethingWrong() {
                                return e.pagesLoader.isInitialRequestRejected && !t.isNotFound;
                            },
                            get isShimmerVisible() {
                                return !e.pagesLoader.pager && !e.pagesLoader.isInitialRequestRejected;
                            },
                            get isNeededToLoad() {
                                return e.pagesLoader.isNeedToMakeInitialRequest;
                            },
                            get isResolved() {
                                return e.pagesLoader.isSomePageResolved;
                            },
                            get requestsCount() {
                                return e.pagesLoader.requestsCount;
                            },
                            get totalCount() {
                                var i, s;
                                return null != (s = null == (i = e.pagesLoader.pager) ? void 0 : i.total) ? s : 0;
                            },
                            get items() {
                                var n;
                                return null != (n = e.pagesLoader.items) ? n : [];
                            },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        getData: (0, s.L3)(function* (t) {
                            let { metatagId: a, page: r = 0, pageSize: i = 20, preloadedMeta: o } = t,
                                { metatagsResource: u, modelActionsLogger: g } = (0, s._$)(e);
                            if (e.pagesLoader.isPageNeedToLoad(r))
                                try {
                                    e.pagesLoader.setPageState(r, p.G.PENDING);
                                    let t = o;
                                    t || (t = yield u.getMetatagAlbums({ id: a, offset: r, limit: i })), (e.fullTitle = t.title.fullTitle);
                                    let s = t.albums.map(n.p);
                                    e.pagesLoader.setItems(s, { page: r, pager: { page: r, perPage: i, total: t.pager.total } });
                                } catch (t) {
                                    g.error(t),
                                        t instanceof l.GX &&
                                            (t.statusCode === l.X1.NOT_FOUND || t.statusCode === l.X1.BAD_REQUEST) &&
                                            (e.errorStatusCode = l.X1.NOT_FOUND),
                                        e.pagesLoader.setItems(null, { responseStatus: E.F.ERROR, page: r });
                                }
                        }),
                        reset() {
                            (e.errorStatusCode = null), (e.fullTitle = null), e.pagesLoader.reset();
                        },
                    })),
                R = s.gK
                    .compose(
                        s.gK.model('GenreArtistsPage', {
                            errorStatusCode: s.gK.maybeNull(s.gK.number),
                            fullTitle: s.gK.maybeNull(s.gK.string),
                            pagesLoader: (0, _.I)(c.P),
                        }),
                        m.X,
                    )
                    .views((e) => {
                        let t = {
                            get isNotFound() {
                                let a = e.isResolved && 0 === t.totalCount,
                                    r = e.errorStatusCode === l.X1.NOT_FOUND || e.errorStatusCode === l.X1.BAD_REQUEST;
                                return (e.isRejected && r) || a;
                            },
                            get isSomethingWrong() {
                                return e.isRejected && !t.isNotFound;
                            },
                            get isShimmerVisible() {
                                return !e.pagesLoader.pager && !e.pagesLoader.isInitialRequestRejected;
                            },
                            get isNeededToLoad() {
                                return e.pagesLoader.isNeedToMakeInitialRequest;
                            },
                            get isRejected() {
                                return e.pagesLoader.isInitialRequestRejected;
                            },
                            get isEmpty() {
                                return e.pagesLoader.isEmpty;
                            },
                            get isResolved() {
                                return e.pagesLoader.isSomePageResolved;
                            },
                            get requestsCount() {
                                return e.pagesLoader.requestsCount;
                            },
                            get totalCount() {
                                var a, r;
                                return null != (r = null == (a = e.pagesLoader.pager) ? void 0 : a.total) ? r : 0;
                            },
                            get items() {
                                var i;
                                return null != (i = e.pagesLoader.items) ? i : [];
                            },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        getData: (0, s.L3)(function* (t) {
                            let { metatagId: a, page: r = 0, pageSize: i = 20, preloadedMeta: n } = t,
                                { metatagsResource: o, modelActionsLogger: u } = (0, s._$)(e);
                            if (e.pagesLoader.isPageNeedToLoad(r))
                                try {
                                    e.pagesLoader.setPageState(r, p.G.PENDING);
                                    let t = n;
                                    t || (t = yield o.getMetatagArtists({ id: a, offset: r, limit: i, period: 'week' })), (e.fullTitle = t.title.fullTitle);
                                    let s = t.artists.map((e) => (0, d.d)(e.artist));
                                    e.pagesLoader.setItems(s, { page: r, pager: t.pager });
                                } catch (t) {
                                    u.error(t),
                                        t instanceof l.GX &&
                                            (t.statusCode === l.X1.NOT_FOUND || t.statusCode === l.X1.BAD_REQUEST) &&
                                            (e.errorStatusCode = l.X1.NOT_FOUND),
                                        e.pagesLoader.setItems(null, { responseStatus: E.F.ERROR, page: r });
                                }
                        }),
                        reset() {
                            (e.errorStatusCode = null), e.pagesLoader.reset();
                        },
                    }));
            var v = a(33229),
                S = a(74885);
            let T = s.gK
                    .model('GenrePlaylistsPage', { pagesLoader: (0, _.I)(S.$), errorStatusCode: s.gK.maybeNull(s.gK.number), fullTitle: s.gK.maybeNull(s.gK.string) })
                    .views((e) => {
                        let t = {
                            get isNotFound() {
                                var a, r;
                                let t = e.pagesLoader.isSomePageResolved && (null != (r = null == (a = e.pagesLoader.items) ? void 0 : a.length) ? r : 0) === 0,
                                    i = e.errorStatusCode === l.X1.NOT_FOUND || e.errorStatusCode === l.X1.BAD_REQUEST;
                                return (e.pagesLoader.isInitialRequestRejected && i) || t;
                            },
                            get isSomethingWrong() {
                                return e.pagesLoader.isInitialRequestRejected && !t.isNotFound;
                            },
                            get isShimmerVisible() {
                                return !e.pagesLoader.pager && !e.pagesLoader.isInitialRequestRejected;
                            },
                            get isNeededToLoad() {
                                return e.pagesLoader.isNeedToMakeInitialRequest;
                            },
                            get isResolved() {
                                return e.pagesLoader.isSomePageResolved;
                            },
                            get requestsCount() {
                                return e.pagesLoader.requestsCount;
                            },
                            get totalCount() {
                                var i, s;
                                return null != (s = null == (i = e.pagesLoader.pager) ? void 0 : i.total) ? s : 0;
                            },
                            get items() {
                                var n;
                                return null != (n = e.pagesLoader.items) ? n : [];
                            },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        getData: (0, s.L3)(function* (t) {
                            let { metatagId: a, page: r = 0, pageSize: i = 20, preloadedMeta: l } = t,
                                { metatagsResource: n, modelActionsLogger: o } = (0, s._$)(e);
                            if (e.pagesLoader.isPageNeedToLoad(r))
                                try {
                                    e.pagesLoader.setPageState(r, p.G.PENDING);
                                    let t = l;
                                    t || (t = yield n.getMetatagPlaylists({ id: a, offset: r, limit: i, withLikesCount: !0 })), (e.fullTitle = t.title.fullTitle);
                                    let s = t.playlists.map(v.j);
                                    e.pagesLoader.setItems(s, { page: r, pager: { page: r, perPage: i, total: t.pager.total } });
                                } catch (t) {
                                    o.error(t), e.pagesLoader.setItems(null, { responseStatus: E.F.ERROR, page: r });
                                }
                        }),
                        reset() {
                            e.pagesLoader.reset(), (e.errorStatusCode = null), (e.fullTitle = null);
                        },
                    })),
                I = s.gK
                    .compose(
                        s.gK.model('GenrePage', {
                            id: s.gK.maybeNull(s.gK.string),
                            errorStatusCode: s.gK.maybeNull(s.gK.number),
                            fullTitle: s.gK.maybeNull(s.gK.string),
                            artists: s.gK.array(c.P),
                            albums: s.gK.array(o.J),
                            playlists: s.gK.array(g.I),
                            albumsSubpage: L,
                            artistsSubpage: R,
                            playlistsSubpage: T,
                        }),
                        m.X,
                    )
                    .views((e) => {
                        let t = {
                            get isLoading() {
                                return e.isNeededToLoad || e.loadingState === p.G.PENDING;
                            },
                            get hasAlbums() {
                                return t.isLoading || e.albums.length > 0;
                            },
                            get hasArtists() {
                                return t.isLoading || e.artists.length > 0;
                            },
                            get hasPlaylists() {
                                return t.isLoading || e.playlists.length > 0;
                            },
                            get isNotFound() {
                                let a = e.isResolved && !t.hasAlbums && !t.hasArtists && !t.hasPlaylists,
                                    r = e.errorStatusCode === l.X1.NOT_FOUND || e.errorStatusCode === l.X1.BAD_REQUEST;
                                return (e.isRejected && r) || a;
                            },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        getData: (0, s.L3)(function* (t) {
                            let { id: a, preloadedMeta: r } = t,
                                { metatagsResource: i, modelActionsLogger: o } = (0, s._$)(e);
                            if (e.loadingState !== p.G.PENDING)
                                try {
                                    e.loadingState = p.G.PENDING;
                                    let t = r;
                                    t || (t = yield i.getMetatagById({ id: a })),
                                        (e.id = t.id),
                                        (e.fullTitle = t.title.fullTitle),
                                        (e.artists = (0, s.wg)(t.artists.map(d.d))),
                                        (e.albums = (0, s.wg)(t.albums.map(n.p))),
                                        (e.playlists = (0, s.wg)(t.playlists.map(u.Z))),
                                        e.loadingState !== p.G.IDLE && (e.loadingState = p.G.RESOLVE);
                                } catch (t) {
                                    o.error(t),
                                        t instanceof l.GX &&
                                            (t.statusCode === l.X1.NOT_FOUND || t.statusCode === l.X1.BAD_REQUEST) &&
                                            (e.errorStatusCode = l.X1.NOT_FOUND),
                                        e.loadingState !== p.G.IDLE && (e.loadingState = p.G.REJECT);
                                }
                        }),
                        reset() {
                            (e.loadingState = p.G.IDLE), (e.fullTitle = null), (e.artists = (0, s.wg)([])), (e.albums = (0, s.wg)([])), (e.playlists = (0, s.wg)([]));
                        },
                    })),
                P = {
                    loadingState: p.G.IDLE,
                    albumsSubpage: { pagesLoader: {} },
                    artistsSubpage: { loadingState: p.G.IDLE, pagesLoader: {} },
                    playlistsSubpage: { pagesLoader: {} },
                },
                { pageStoreProvider: y } = (0, r.W)({ createStore: (e) => I.create(P, e), patchKey: i.n.GENRE }),
                K = y;
        },
        72428: (e, t, a) => {
            'use strict';
            a.d(t, { p: () => l });
            var r = a(60754),
                i = a(69757),
                s = a(84060);
            let l = (e) => {
                let t = e.artists.map((e) => (0, s.d)(e));
                return (0, r.wg)({ ...(0, i.e)(e), artists: t });
            };
        },
        74885: (e, t, a) => {
            'use strict';
            a.d(t, { $: () => _ });
            var r = a(60754),
                i = a(87953),
                s = a(2047),
                l = a(90404),
                n = a(63380),
                o = a(15567),
                u = a(58008),
                g = a(36477),
                d = a(45346),
                c = a(35597),
                p = a(20168),
                m = a(1045),
                E = a(44265);
            let _ = r.gK
                .compose(
                    r.gK.model({
                        uuid: r.gK.string,
                        isAvailable: r.gK.boolean,
                        revision: r.gK.maybe(r.gK.number),
                        uid: r.gK.number,
                        kind: r.gK.number,
                        title: r.gK.maybe(r.gK.string),
                        coverUri: r.gK.maybe(r.gK.string),
                        tracksCount: r.gK.maybe(r.gK.number),
                        averageColor: r.gK.maybe(r.gK.string),
                        generatedPlaylistType: r.gK.maybe(r.gK.string),
                        personalColor: r.gK.maybeNull(r.gK.number),
                        visibility: r.gK.maybe(r.gK.string),
                        trailer: r.gK.maybe(d.a),
                    }),
                    c.t,
                )
                .views((e) => ({
                    get key() {
                        return ''.concat(e.uuid, '_').concat(e.uid, '_').concat(e.kind);
                    },
                    get url() {
                        let { href: t } = (0, g.u)('/playlists/:playlistUuid', { params: { playlistUuid: e.uuid } });
                        return t;
                    },
                    get isLikesCountHidden() {
                        return e.kind === E.j.LIKE || e.kind === E.j.CHART || e.generatedPlaylistType;
                    },
                    get isFavouritePlaylist() {
                        return e.kind === E.j.LIKE;
                    },
                    get isPublic() {
                        return e.visibility === s.L.PUBLIC;
                    },
                    get isLiked() {
                        if (!(0, r._n)(e)) return !1;
                        let { library: t } = (0, o.M)(e);
                        return t.isPlaylistLiked(''.concat(e.uid, ':').concat(e.kind));
                    },
                    get pinId() {
                        return ''.concat(l._.PLAYLIST_ITEM).concat(e.uid, '_').concat(e.kind);
                    },
                    get id() {
                        return ''.concat(e.uid, ':').concat(e.kind);
                    },
                    get isPinned() {
                        if (!(0, r._n)(e)) return !1;
                        let { pinsCollection: t } = (0, o.M)(e);
                        return t.isPinned(this.pinId);
                    },
                    get isOwnPlaylist() {
                        let { user: t } = (0, o.M)(e);
                        return !!(t.isAuthorized && e.uid && t.account.data.uid && e.uid === t.account.data.uid);
                    },
                    get canUserChange() {
                        if (!(0, r._n)(e)) return !1;
                        return this.isOwnPlaylist && !this.isFavouritePlaylist;
                    },
                    get isOwnFavouritePlaylist() {
                        if (!(0, r._n)(e)) return !1;
                        return this.isFavouritePlaylist && this.isOwnPlaylist;
                    },
                }))
                .actions((e) => ({
                    toggleLike: (0, r.L3)(function* () {
                        if (!(0, r._n)(e)) return;
                        let { library: t, user: a } = (0, o.M)(e);
                        if (a.isAuthorized) {
                            let i = yield t.togglePlaylistLike({ userId: a.account.data.uid, entityId: e.id, ownerId: e.uid, kindId: e.kind });
                            return (0, r._n)(e) && i === n.f.OK && (e.isLiked ? e.likePending() : e.unlikePending()), i;
                        }
                    }),
                    togglePin: (0, r.L3)(function* () {
                        if (!(0, r._n)(e)) return;
                        let { pinsCollection: t, user: a } = (0, o.M)(e);
                        if (a.isAuthorized) return yield t.togglePlaylistPin({ uid: e.uid, kind: e.kind }, e.pinId);
                    }),
                    changePlaylist: (0, r.L3)(function* (t) {
                        if (!(0, r._n)(e)) return p.Y.ERROR;
                        let { usersResource: a, modelActionsLogger: s } = (0, r._$)(e);
                        try {
                            var l, n;
                            let r = yield a.changePlaylistRelative({ userId: e.uid, diff: t, revision: null != (l = e.revision) ? l : 0, playlistKind: e.kind });
                            return (e.revision = r.revision), (e.isAvailable = null == (n = r.available) || n), p.Y.OK;
                        } catch (e) {
                            if ((s.error(e), e && 'object' == typeof e && 'statusCode' in e && e.statusCode === i.X1.PRECONDITION_FAILED)) return p.Y.RELOAD;
                            return p.Y.ERROR;
                        }
                    }),
                    changeTitle: (0, r.L3)(function* (t) {
                        if (!(0, r._n)(e)) return u.F.ERROR;
                        if (e.title === t) return u.F.OK;
                        let { usersResource: a, modelActionsLogger: i } = (0, r._$)(e);
                        if (e.canUserChange) {
                            if (t.length < 1 || t.length > m.k) return u.F.ERROR;
                            let r = e.title;
                            e.title = t;
                            try {
                                let i = yield a.changePlaylistTitle({ title: t, userId: e.uid, playlistKind: e.kind });
                                if (!(null == i ? void 0 : i.title)) return (e.title = r), u.F.ERROR;
                                return (e.title = i.title), u.F.OK;
                            } catch (t) {
                                (e.title = r), i.error(t);
                            }
                        }
                        return u.F.ERROR;
                    }),
                    deletePlaylist: (0, r.L3)(function* () {
                        if (!(0, r._n)(e) || !e.canUserChange) return u.F.ERROR;
                        let { pinsCollection: t } = (0, o.M)(e),
                            { usersResource: a, modelActionsLogger: i } = (0, r._$)(e);
                        try {
                            return yield a.deletePlaylist({ userId: e.uid, playlistKind: e.kind }), t.isPinned(e.pinId) && t.deletePin(e.pinId), u.F.OK;
                        } catch (e) {
                            i.error(e);
                        }
                        return u.F.ERROR;
                    }),
                    toggleVisibility: (0, r.L3)(function* (t) {
                        if (!(0, r._n)(e) || (!e.canUserChange && !e.isOwnFavouritePlaylist)) return u.F.ERROR;
                        let { usersResource: a, modelActionsLogger: i } = (0, r._$)(e),
                            { user: l } = (0, o.M)(e),
                            n = e.visibility,
                            g = e.isPublic ? s.L.PRIVATE : s.L.PUBLIC;
                        t && (g = t);
                        try {
                            return (
                                (e.visibility = g),
                                e.isOwnFavouritePlaylist
                                    ? yield l.setSettings({ userMusicVisibility: g })
                                    : yield a.togglePlaylistVisibility({ visibility: g, userId: e.uid, playlistKind: e.kind }),
                                u.F.OK
                            );
                        } catch (e) {
                            i.error(e);
                        }
                        return (e.visibility = n), u.F.ERROR;
                    }),
                    getKey: (t) => ''.concat(t, '_').concat(e.id),
                }));
        },
        85017: (e, t, a) => {
            'use strict';
            a.d(t, { Z: () => r, n: () => i });
            var r = (function (e) {
                    return (e.REJECT = 'REJECT'), (e.UNSAFE = 'UNSAFE'), e;
                })({}),
                i = (function (e) {
                    return (e.ALBUM = 'album'), (e.PODCAST = 'podcast'), (e.AUDIOBOOK = 'audiobook'), (e.ARTIST = 'artist'), (e.TRACK = 'track'), (e.CLIP = 'clip'), e;
                })({});
        },
        86634: (e, t, a) => {
            'use strict';
            a.d(t, { I: () => u });
            var r = a(60754),
                i = a(58008),
                s = a(49399),
                l = a(89009),
                n = a(93841),
                o = a(93043);
            function u(e, t) {
                let { useAppendMode: a = !1 } = null != t ? t : {};
                return r.gK
                    .compose(
                        r.gK.model('PageLoader', {
                            items: r.gK.maybeNull(r.gK.array(r.gK.maybeNull(e))),
                            requestsCount: r.gK.optional(r.gK.number, 0),
                            initialRequestLoadingState: r.gK.optional(r.gK.enumeration(Object.values(s.G)), s.G.IDLE),
                            lastRejectedPagesList: r.gK.optional(r.gK.array(r.gK.number), []),
                            pager: r.gK.maybeNull(o.j),
                            pageStates: r.gK.maybeNull(r.gK.array(r.gK.enumeration(Object.values(s.G)))),
                        }),
                        n.p,
                    )
                    .views((e) => {
                        let t = {
                            isPageNeedToLoad: (t) => {
                                var a;
                                return null == (a = e.pageStates) || !a[t] || e.pageStates[t] === s.G.IDLE;
                            },
                            get isSomePageResolved() {
                                var r;
                                return !!((null == (r = e.pageStates) ? void 0 : r.length) && e.pageStates.some((e) => e === s.G.RESOLVE));
                            },
                            get isEmpty() {
                                var i;
                                return t.isSomePageResolved && !(null == (i = e.items) ? void 0 : i.length);
                            },
                            get isNeedToMakeInitialRequest() {
                                return e.initialRequestLoadingState === s.G.IDLE;
                            },
                            get isInitialRequestRejected() {
                                return e.initialRequestLoadingState === s.G.REJECT;
                            },
                            get hasMorePages() {
                                var l;
                                return !!a && !(null == (l = e.pager) ? void 0 : l.lastPage);
                            },
                            get rejectedPagesCount() {
                                var n;
                                if (t.isInitialRequestRejected || !(null == (n = e.pageStates) ? void 0 : n.length)) return 0;
                                return e.pageStates.filter((e) => e === s.G.REJECT).length;
                            },
                        };
                        return t;
                    })
                    .actions((e) => {
                        let t = {
                            setPageState: (r, i) => {
                                let l;
                                if (([s.G.IDLE, s.G.PENDING].includes(e.initialRequestLoadingState) && (e.initialRequestLoadingState = i), a)) l = r + 1;
                                else {
                                    var n, o, u, g;
                                    l = Math.ceil(
                                        (null != (u = null == (n = e.pager) ? void 0 : n.total) ? u : 0) /
                                            (null != (g = null == (o = e.pager) ? void 0 : o.perPage) ? g : 1),
                                    );
                                }
                                let d = Math.max(r + 1, l);
                                t.ensurePageStatesInitialized(d), e.pageStates && (e.pageStates[r] = i), i === s.G.REJECT && t.addLastRejectedPageToList(r);
                            },
                            setItems: (n, o) => {
                                var u;
                                let { page: g, pager: d, responseStatus: c } = o;
                                if (((e.requestsCount = (null != (u = e.requestsCount) ? u : 0) + 1), c === i.F.ERROR || !n || !d))
                                    return void t.setPageState(g, s.G.REJECT);
                                e.pager
                                    ? a && ((e.pager.lastPage = d.lastPage), (e.pager.perPage = d.perPage))
                                    : (e.pager = { page: d.page, perPage: d.perPage, total: d.total, lastPage: d.lastPage }),
                                    t.setPageState(g, s.G.RESOLVE),
                                    (e.pager.page = g),
                                    a
                                        ? (e.items || (e.items = (0, r.wg)([])), e.items && e.items.push(...n))
                                        : (e.items || (e.items = (0, r.wg)(Array.from({ length: e.pager.total }, () => null))),
                                          e.items && (0, l.I)({ items: e.items, mappedRawItems: n, page: g, pageSize: e.pager.perPage }));
                            },
                            resetRejectedPagesState() {
                                var t, a, r;
                                for (let i = 0; i < (null != (a = null == (t = e.pageStates) ? void 0 : t.length) ? a : 0); i++)
                                    (null == (r = e.pageStates) ? void 0 : r[i]) === s.G.REJECT && (e.pageStates[i] = s.G.IDLE);
                            },
                            addLastRejectedPageToList(t) {
                                var a, r, i;
                                for (e.lastRejectedPagesList.push(t); (null != (r = null == (a = e.lastRejectedPagesList) ? void 0 : a.length) ? r : 0) > 5; )
                                    null == (i = e.lastRejectedPagesList) || i.shift();
                            },
                            ensurePageStatesInitialized(t) {
                                if (t <= 0) return;
                                if (!e.pageStates) {
                                    let a = Array.from({ length: t }, () => s.G.IDLE);
                                    e.pageStates = (0, r.wg)(a);
                                    return;
                                }
                                let a = e.pageStates.length;
                                if (t > a) {
                                    let r = Array.from({ length: t - a }, () => s.G.IDLE);
                                    e.pageStates.push(...r);
                                }
                            },
                            reset() {
                                (e.initialRequestLoadingState = s.G.IDLE),
                                    (e.requestsCount = 0),
                                    (e.lastRejectedPagesList = (0, r.wg)([])),
                                    e.destroyItems([e.items, e.pager, e.pageStates]);
                            },
                        };
                        return t;
                    });
            }
        },
        88091: (e, t, a) => {
            Promise.resolve().then(a.bind(a, 66472));
        },
        89009: (e, t, a) => {
            'use strict';
            function r(e) {
                let { items: t, mappedRawItems: a, page: r, pageSize: i } = e,
                    s = r * i,
                    l = 0;
                for (let e = s; e < s + i; e++) a[l] && (t[e] = a[l]), l++;
            }
            a.d(t, { I: () => r });
        },
        90404: (e, t, a) => {
            'use strict';
            var r;
            a.d(t, { _: () => r }),
                (function (e) {
                    (e.ALBUM_ITEM = 'album_item'),
                        (e.ARTIST_ITEM = 'artist_item'),
                        (e.PLAYLIST_ITEM = 'playlist_item'),
                        (e.TRACK_ITEM = 'track_item'),
                        (e.LIKED_PLAYLIST_ITEM = 'liked_playlist_item'),
                        (e.PERSONAL_PLAYLIST_ITEM = 'personal_playlist_item'),
                        (e.WAVE_ITEM = 'wave_item'),
                        (e.WAVE_AGENT_ITEM = 'wave_agent_item'),
                        (e.MIX = 'mix'),
                        (e.MIX_CARD_ITEM = 'mix_card_item'),
                        (e.LIKED_ALBUM_ITEM = 'liked_album_item'),
                        (e.PRESAVED_ALBUM_ITEM = 'presaved_album_item'),
                        (e.CHART_ALBUM_ITEM = 'chart_album_item'),
                        (e.NON_MUSIC_ALBUM_ITEM = 'non_music_album_item'),
                        (e.MENU_ITEM = 'menu_item'),
                        (e.DONATION_ITEM = 'donation_item'),
                        (e.CLIP = 'clip'),
                        (e.CLIP_ITEM = 'clip_item'),
                        (e.CONCERT_ITEM = 'concert_item'),
                        (e.QUERY_TO_VIBE_ITEM = 'q2v_item');
                })(r || (r = {}));
        },
        93043: (e, t, a) => {
            'use strict';
            a.d(t, { j: () => i });
            var r = a(60754);
            let i = r.gK.model('Pager', { page: r.gK.number, perPage: r.gK.number, total: r.gK.number, lastPage: r.gK.maybe(r.gK.boolean) });
        },
        93841: (e, t, a) => {
            'use strict';
            a.d(t, { p: () => i });
            var r = a(60754);
            let i = r.gK.model('ModelDestroyManager').actions(() => ({
                destroyItems(e) {
                    e.forEach((e) => {
                        e && (0, r.Yo)(e);
                    }),
                        queueMicrotask(() => {
                            e.forEach((e) => {
                                e && (0, r.zr)(e);
                            });
                        });
                },
            }));
        },
        96333: (e, t, a) => {
            'use strict';
            var r;
            a.d(t, { S: () => r }),
                (function (e) {
                    (e.TRACK = 'track'),
                        (e.MUSIC = 'music'),
                        (e.NOISE = 'noise'),
                        (e.PODCAST = 'podcast-episode'),
                        (e.COMMENT = 'comment'),
                        (e.ARTICLE = 'article'),
                        (e.ASMR = 'asmr'),
                        (e.RADIO = 'radio'),
                        (e.SHOW = 'show'),
                        (e.LECTURE = 'lecture'),
                        (e.FAIRY_TALE = 'fairy-tale'),
                        (e.AUDIOBOOK = 'audiobook'),
                        (e.POETRY = 'poetry');
                })(r || (r = {}));
        },
    },
    (e) => {
        e.O(0, [6706, 1311, 8892, 6252, 7613, 6477, 7275, 1647, 4220, 9562, 7358], () => e((e.s = 88091))), (_N_E = e.O());
    },
]);
