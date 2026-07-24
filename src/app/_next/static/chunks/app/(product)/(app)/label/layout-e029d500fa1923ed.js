(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4964],
    {
        8246: (e, t, a) => {
            'use strict';
            var r;
            a.d(t, { x: () => r }),
                (function (e) {
                    (e.ASC = 'asc'), (e.DESC = 'desc');
                })(r || (r = {}));
        },
        12388: (e, t, a) => {
            'use strict';
            a.d(t, { J: () => n });
            var r = a(60754),
                s = a(87411),
                i = a(57367),
                l = a(44032);
            let n = s.G.props({ artists: r.gK.maybe(r.gK.array(i.P)), chart: r.gK.maybe(l.I) }).views((e) => ({
                get artistNames() {
                    var t;
                    return null == (t = e.artists) ? void 0 : t.map((e) => e.name).join(', ');
                },
                get artistName() {
                    var a, r, s, i;
                    if (null == (r = e.artists) || null == (a = r[0]) ? void 0 : a.various) return;
                    return null == (i = e.artists) || null == (s = i[0]) ? void 0 : s.name;
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
        37215: (e, t, a) => {
            'use strict';
            var r;
            a.d(t, { g: () => r }),
                (function (e) {
                    (e.RATING = 'rating'), (e.YEAR = 'year');
                })(r || (r = {}));
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
            a.d(t, { W: () => _, s: () => S });
            var r = a(32290),
                s = a(29222),
                i = a(96103),
                l = a(21916),
                n = a(55178),
                o = a(80451),
                u = a(96218),
                g = a(5245),
                d = a(57594),
                p = a(31726);
            (0, i.eO)(!1);
            let E = (0, n.createContext)(null),
                c = (e) => {
                    let { children: t, store: a, storeKey: s } = e,
                        i = (0, n.useMemo)(() => ({ store: a, storeKey: s }), [a, s]);
                    return (0, r.jsx)(E.Provider, { value: i, children: t });
                },
                m = (e) => {
                    let { nonce: t, patchKey: a, patchesRef: s } = e;
                    return (
                        (0, l.useServerInsertedHTML)(() => {
                            let e = s.current;
                            return ((s.current = []), 0 === e.length)
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
                        s = () => {
                            var e, t;
                            let r = null != (t = null == (e = window.__PAGE_STATE_PATCHES__) ? void 0 : e[a]) ? t : [];
                            return window.__PAGE_STATE_PATCHES__ && delete window.__PAGE_STATE_PATCHES__[a], r;
                        };
                    return {
                        pageStoreProvider: (e) => {
                            let { children: i, nonce: l } = e,
                                n = (0, p.Y)(),
                                o = (0, d.g)(),
                                { store: E, patchesRef: _ } = (0, g.m)({
                                    createStore: () => t({ ...n, rootStore: o }),
                                    getPendingPatchBatches: s,
                                    patchesUpdatedEventName: u.O,
                                });
                            return (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)(m, { nonce: l, patchKey: a, patchesRef: _ }), (0, r.jsx)(c, { store: E, storeKey: a, children: i })],
                            });
                        },
                    };
                };
            function S(e) {
                let { throwOnAbsence: t = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    a = (0, n.useContext)(E);
                if (!a || a.storeKey !== e) {
                    var r;
                    if (!t) return null;
                    throw new s.t('Page store context is missing or has unexpected key', {
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
        55985: (e, t, a) => {
            'use strict';
            a.d(t, { p: () => s });
            var r = a(60754);
            let s = (e) => (0, r.wg)({ uri: e.uri, color: e.color });
        },
        57594: (e, t, a) => {
            'use strict';
            a.d(t, { P: () => i, g: () => l });
            var r = a(29222),
                s = a(55178);
            let i = (0, s.createContext)(null);
            function l() {
                let e = (0, s.useContext)(i);
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
        72428: (e, t, a) => {
            'use strict';
            a.d(t, { p: () => l });
            var r = a(60754),
                s = a(69757),
                i = a(84060);
            let l = (e) => {
                let t = e.artists.map((e) => (0, i.d)(e));
                return (0, r.wg)({ ...(0, s.e)(e), artists: t });
            };
        },
        76944: (e, t, a) => {
            Promise.resolve().then(a.bind(a, 90825));
        },
        85017: (e, t, a) => {
            'use strict';
            a.d(t, { Z: () => r, n: () => s });
            var r = (function (e) {
                    return (e.REJECT = 'REJECT'), (e.UNSAFE = 'UNSAFE'), e;
                })({}),
                s = (function (e) {
                    return (e.ALBUM = 'album'), (e.PODCAST = 'podcast'), (e.AUDIOBOOK = 'audiobook'), (e.ARTIST = 'artist'), (e.TRACK = 'track'), (e.CLIP = 'clip'), e;
                })({});
        },
        86634: (e, t, a) => {
            'use strict';
            a.d(t, { I: () => u });
            var r = a(60754),
                s = a(58008),
                i = a(49399),
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
                            initialRequestLoadingState: r.gK.optional(r.gK.enumeration(Object.values(i.G)), i.G.IDLE),
                            lastRejectedPagesList: r.gK.optional(r.gK.array(r.gK.number), []),
                            pager: r.gK.maybeNull(o.j),
                            pageStates: r.gK.maybeNull(r.gK.array(r.gK.enumeration(Object.values(i.G)))),
                        }),
                        n.p,
                    )
                    .views((e) => {
                        let t = {
                            isPageNeedToLoad: (t) => {
                                var a;
                                return null == (a = e.pageStates) || !a[t] || e.pageStates[t] === i.G.IDLE;
                            },
                            get isSomePageResolved() {
                                var r;
                                return !!((null == (r = e.pageStates) ? void 0 : r.length) && e.pageStates.some((e) => e === i.G.RESOLVE));
                            },
                            get isEmpty() {
                                var s;
                                return t.isSomePageResolved && !(null == (s = e.items) ? void 0 : s.length);
                            },
                            get isNeedToMakeInitialRequest() {
                                return e.initialRequestLoadingState === i.G.IDLE;
                            },
                            get isInitialRequestRejected() {
                                return e.initialRequestLoadingState === i.G.REJECT;
                            },
                            get hasMorePages() {
                                var l;
                                return !!a && !(null == (l = e.pager) ? void 0 : l.lastPage);
                            },
                            get rejectedPagesCount() {
                                var n;
                                if (t.isInitialRequestRejected || !(null == (n = e.pageStates) ? void 0 : n.length)) return 0;
                                return e.pageStates.filter((e) => e === i.G.REJECT).length;
                            },
                        };
                        return t;
                    })
                    .actions((e) => {
                        let t = {
                            setPageState: (r, s) => {
                                let l;
                                if (([i.G.IDLE, i.G.PENDING].includes(e.initialRequestLoadingState) && (e.initialRequestLoadingState = s), a)) l = r + 1;
                                else {
                                    var n, o, u, g;
                                    l = Math.ceil(
                                        (null != (u = null == (n = e.pager) ? void 0 : n.total) ? u : 0) /
                                            (null != (g = null == (o = e.pager) ? void 0 : o.perPage) ? g : 1),
                                    );
                                }
                                let d = Math.max(r + 1, l);
                                t.ensurePageStatesInitialized(d), e.pageStates && (e.pageStates[r] = s), s === i.G.REJECT && t.addLastRejectedPageToList(r);
                            },
                            setItems: (n, o) => {
                                var u;
                                let { page: g, pager: d, responseStatus: p } = o;
                                if (((e.requestsCount = (null != (u = e.requestsCount) ? u : 0) + 1), p === s.F.ERROR || !n || !d))
                                    return void t.setPageState(g, i.G.REJECT);
                                e.pager
                                    ? a && ((e.pager.lastPage = d.lastPage), (e.pager.perPage = d.perPage))
                                    : (e.pager = { page: d.page, perPage: d.perPage, total: d.total, lastPage: d.lastPage }),
                                    t.setPageState(g, i.G.RESOLVE),
                                    (e.pager.page = g),
                                    a
                                        ? (e.items || (e.items = (0, r.wg)([])), e.items && e.items.push(...n))
                                        : (e.items || (e.items = (0, r.wg)(Array.from({ length: e.pager.total }, () => null))),
                                          e.items && (0, l.I)({ items: e.items, mappedRawItems: n, page: g, pageSize: e.pager.perPage }));
                            },
                            resetRejectedPagesState() {
                                var t, a, r;
                                for (let s = 0; s < (null != (a = null == (t = e.pageStates) ? void 0 : t.length) ? a : 0); s++)
                                    (null == (r = e.pageStates) ? void 0 : r[s]) === i.G.REJECT && (e.pageStates[s] = i.G.IDLE);
                            },
                            addLastRejectedPageToList(t) {
                                var a, r, s;
                                for (e.lastRejectedPagesList.push(t); (null != (r = null == (a = e.lastRejectedPagesList) ? void 0 : a.length) ? r : 0) > 5; )
                                    null == (s = e.lastRejectedPagesList) || s.shift();
                            },
                            ensurePageStatesInitialized(t) {
                                if (t <= 0) return;
                                if (!e.pageStates) {
                                    let a = Array.from({ length: t }, () => i.G.IDLE);
                                    e.pageStates = (0, r.wg)(a);
                                    return;
                                }
                                let a = e.pageStates.length;
                                if (t > a) {
                                    let r = Array.from({ length: t - a }, () => i.G.IDLE);
                                    e.pageStates.push(...r);
                                }
                            },
                            reset() {
                                (e.initialRequestLoadingState = i.G.IDLE),
                                    (e.requestsCount = 0),
                                    (e.lastRejectedPagesList = (0, r.wg)([])),
                                    e.destroyItems([e.items, e.pager, e.pageStates]);
                            },
                        };
                        return t;
                    });
            }
        },
        89009: (e, t, a) => {
            'use strict';
            function r(e) {
                let { items: t, mappedRawItems: a, page: r, pageSize: s } = e,
                    i = r * s,
                    l = 0;
                for (let e = i; e < i + s; e++) a[l] && (t[e] = a[l]), l++;
            }
            a.d(t, { I: () => r });
        },
        89418: (e, t, a) => {
            'use strict';
            a.d(t, { w: () => l });
            var r = a(60754),
                s = a(37215),
                i = a(8246);
            let l = r.gK
                .model('Sort', { sortBy: r.gK.maybe(r.gK.enumeration(Object.values(s.g))), sortOrder: r.gK.maybe(r.gK.enumeration(Object.values(i.x))) })
                .actions((e) => ({
                    setSortBy(t) {
                        e.sortBy = t;
                    },
                    setSortOrder(t) {
                        e.sortOrder = t;
                    },
                }));
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
        90825: (e, t, a) => {
            'use strict';
            a.d(t, { LabelPageStoreProvider: () => P });
            var r,
                s = a(49259),
                i = a(45066),
                l = a(60754),
                n = a(87953);
            !(function (e) {
                (e.MUSICAL = 'musical'), (e.PUBLISHER = 'publisher');
            })(r || (r = {}));
            var o = a(72428),
                u = a(12388),
                g = a(84060),
                d = a(57367),
                p = a(49399),
                E = a(36477),
                c = a(73715),
                m = a(93841),
                _ = a(89418),
                S = a(58008),
                L = a(86634);
            let I = l.gK
                    .model('LabelAlbumsPage', { pagesLoader: (0, L.I)(u.J), errorStatusCode: l.gK.maybeNull(l.gK.number), sort: _.w })
                    .views((e) => ({
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
                            var t, a;
                            return null != (a = null == (t = e.pagesLoader.pager) ? void 0 : t.total) ? a : 0;
                        },
                        get items() {
                            var r;
                            return null != (r = e.pagesLoader.items) ? r : [];
                        },
                        get isNotFound() {
                            return e.pagesLoader.isInitialRequestRejected && e.errorStatusCode === n.X1.NOT_FOUND;
                        },
                    }))
                    .actions((e) => ({
                        getData: (0, l.L3)(function* (t) {
                            let { labelId: a, page: r = 0, pageSize: s = 20, preloadedAlbums: i, sortBy: u } = t,
                                { labelsResource: g, modelActionsLogger: d } = (0, l._$)(e);
                            if (e.pagesLoader.isPageNeedToLoad(r))
                                try {
                                    e.pagesLoader.setPageState(r, p.G.PENDING);
                                    let t = i;
                                    t || (t = yield g.getAlbums({ labelId: a, page: r, pageSize: s, sortBy: u }));
                                    let l = t.albums.map(o.p);
                                    e.pagesLoader.setItems(l, { page: r, pager: t.pager });
                                } catch (t) {
                                    d.error(t),
                                        t instanceof n.GX && t.statusCode === n.X1.NOT_FOUND && (e.errorStatusCode = n.X1.NOT_FOUND),
                                        e.pagesLoader.setItems(null, { responseStatus: S.F.ERROR, page: r });
                                }
                        }),
                        reset() {
                            e.pagesLoader.reset(), (e.errorStatusCode = null);
                        },
                    })),
                T = l.gK
                    .model('LabelArtistsPage', { pagesLoader: (0, L.I)(d.P), errorStatusCode: l.gK.maybeNull(l.gK.number) })
                    .views((e) => ({
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
                            var t, a;
                            return null != (a = null == (t = e.pagesLoader.pager) ? void 0 : t.total) ? a : 0;
                        },
                        get items() {
                            var r;
                            return null != (r = e.pagesLoader.items) ? r : [];
                        },
                        get isNotFound() {
                            return e.pagesLoader.isInitialRequestRejected && e.errorStatusCode === n.X1.NOT_FOUND;
                        },
                    }))
                    .actions((e) => ({
                        getData: (0, l.L3)(function* (t) {
                            let { labelId: a, page: r = 0, pageSize: s = 20, preloadedArtists: i } = t,
                                { labelsResource: o, modelActionsLogger: u } = (0, l._$)(e);
                            if (e.pagesLoader.isPageNeedToLoad(r))
                                try {
                                    e.pagesLoader.setPageState(r, p.G.PENDING);
                                    let t = i;
                                    t || (t = yield o.getArtists({ labelId: a, page: r, pageSize: s }));
                                    let l = t.artists.map(g.d);
                                    e.pagesLoader.setItems(l, { page: r, pager: t.pager });
                                } catch (t) {
                                    u.error(t),
                                        t instanceof n.GX && t.statusCode === n.X1.NOT_FOUND && (e.errorStatusCode = n.X1.NOT_FOUND),
                                        e.pagesLoader.setItems(null, { responseStatus: S.F.ERROR, page: r });
                                }
                        }),
                        reset() {
                            e.pagesLoader.reset(), (e.errorStatusCode = null);
                        },
                    })),
                R = l.gK
                    .compose(
                        l.gK.model('LabelPage', {
                            id: l.gK.maybeNull(l.gK.string),
                            name: l.gK.maybeNull(l.gK.string),
                            type: l.gK.maybeNull(l.gK.string),
                            albums: l.gK.maybeNull(l.gK.array(u.J)),
                            albumsSubpage: I,
                            artistsSubpage: T,
                            artists: l.gK.maybeNull(l.gK.array(d.P)),
                            errorStatusCode: l.gK.maybeNull(l.gK.number),
                        }),
                        m.p,
                        c.X,
                    )
                    .views((e) => {
                        let t = {
                            get isLoading() {
                                return e.isNeededToLoad || e.loadingState === p.G.PENDING;
                            },
                            get hasAlbums() {
                                return !!(t.isLoading || (e.albums && e.albums.length > 0));
                            },
                            get hasArtists() {
                                if (t.isPublisher) return !1;
                                return !!(t.isLoading || (e.artists && e.artists.length > 0));
                            },
                            get isNotFound() {
                                let a = e.isResolved && !e.name && !t.hasAlbums && !t.hasArtists,
                                    r = e.errorStatusCode && [n.X1.NOT_FOUND, n.X1.BAD_REQUEST].includes(e.errorStatusCode);
                                return (e.isRejected && r) || a;
                            },
                            get albumsUrl() {
                                if (!e.id) return '';
                                let { href: t } = (0, E.u)('/label/:labelId/albums', { params: { labelId: e.id } });
                                return t;
                            },
                            get artistsUrl() {
                                if (!e.id) return '';
                                let { href: t } = (0, E.u)('/label/:labelId/artists', { params: { labelId: e.id } });
                                return t;
                            },
                            get isPublisher() {
                                return e.type === r.PUBLISHER;
                            },
                            get isMusical() {
                                return e.type === r.MUSICAL;
                            },
                        };
                        return t;
                    })
                    .actions((e) => {
                        let t = {
                            getAlbums: (0, l.L3)(function* (t) {
                                let { labelsResource: a, modelActionsLogger: r } = (0, l._$)(e);
                                try {
                                    let r = yield a.getAlbums(t);
                                    e.albums = (0, l.wg)(r.albums.map(o.p));
                                } catch (t) {
                                    r.error(t), t instanceof n.GX && [n.X1.BAD_REQUEST, n.X1.NOT_FOUND].includes(t.statusCode) && (e.errorStatusCode = n.X1.NOT_FOUND);
                                }
                            }),
                            getArtists: (0, l.L3)(function* (t) {
                                let { labelsResource: a, modelActionsLogger: r } = (0, l._$)(e);
                                try {
                                    let r = yield a.getArtists(t);
                                    e.artists = (0, l.wg)(r.artists.map(g.d));
                                } catch (t) {
                                    r.error(t), t instanceof n.GX && [n.X1.BAD_REQUEST, n.X1.NOT_FOUND].includes(t.statusCode) && (e.errorStatusCode = n.X1.NOT_FOUND);
                                }
                            }),
                            getData: (0, l.L3)(function* (a) {
                                let { labelId: r, preloadedLabel: s, withLabelEntities: i = !0 } = a,
                                    { labelsResource: o, modelActionsLogger: u } = (0, l._$)(e);
                                if (e.loadingState !== p.G.PENDING)
                                    try {
                                        e.loadingState = p.G.PENDING;
                                        let a = s;
                                        a || (a = yield o.getData({ labelId: r })),
                                            (e.id = String(a.id)),
                                            (e.name = a.name),
                                            (e.type = a.type),
                                            i && (yield t.getAlbums({ labelId: r, pageSize: 8 }), yield t.getArtists({ labelId: r, pageSize: 8 })),
                                            (e.loadingState = p.G.RESOLVE);
                                    } catch (t) {
                                        u.error(t),
                                            t instanceof n.GX && [n.X1.BAD_REQUEST, n.X1.NOT_FOUND].includes(t.statusCode) && (e.errorStatusCode = t.statusCode),
                                            e.loadingState !== p.G.IDLE && (e.loadingState = p.G.REJECT);
                                    }
                            }),
                            reset() {
                                (e.loadingState = p.G.IDLE),
                                    (e.id = null),
                                    (e.name = null),
                                    (e.type = null),
                                    (e.errorStatusCode = null),
                                    e.destroyItems([e.albums, e.artists]);
                            },
                        };
                        return t;
                    }),
                A = { loadingState: p.G.IDLE, albumsSubpage: { pagesLoader: {}, sort: {} }, artistsSubpage: { pagesLoader: {} } },
                { pageStoreProvider: N } = (0, s.W)({ createStore: (e) => R.create(A, e), patchKey: i.n.LABEL }),
                P = N;
        },
        93043: (e, t, a) => {
            'use strict';
            a.d(t, { j: () => s });
            var r = a(60754);
            let s = r.gK.model('Pager', { page: r.gK.number, perPage: r.gK.number, total: r.gK.number, lastPage: r.gK.maybe(r.gK.boolean) });
        },
        93841: (e, t, a) => {
            'use strict';
            a.d(t, { p: () => s });
            var r = a(60754);
            let s = r.gK.model('ModelDestroyManager').actions(() => ({
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
        e.O(0, [6706, 1311, 8892, 6252, 4756, 6477, 7275, 1647, 4220, 9562, 7358], () => e((e.s = 76944))), (_N_E = e.O());
    },
]);
