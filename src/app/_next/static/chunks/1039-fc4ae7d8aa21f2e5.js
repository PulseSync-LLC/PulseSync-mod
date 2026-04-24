'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1039],
    {
        1039: (e, t, a) => {
            a.d(t, { Z3: () => N.GenreAlbumsPage, P0: () => c.GenreArtistsPage, L6: () => S.GenrePage, G8: () => L, ys: () => y.GenrePlaylistsPage });
            var s = a(51606),
                r = a(14525),
                l = a(90914),
                o = a(79670),
                i = a(81628),
                g = a(42561),
                u = a(54690);
            let d = s.gK
                    .model('GenreAlbumsPage', { pagesLoader: (0, u.Ij)(l.JC), errorStatusCode: s.gK.maybeNull(s.gK.number), fullTitle: s.gK.maybeNull(s.gK.string) })
                    .views((e) => {
                        let t = {
                            get isNotFound() {
                                var a, s;
                                let t = e.pagesLoader.isSomePageResolved && (null != (s = null == (a = e.pagesLoader.items) ? void 0 : a.length) ? s : 0) === 0,
                                    l = e.errorStatusCode === r.X1.NOT_FOUND || e.errorStatusCode === r.X1.BAD_REQUEST;
                                return (e.pagesLoader.isInitialRequestRejected && l) || t;
                            },
                            get isSomethingWrong() {
                                return e.pagesLoader.isInitialRequestRejected && !t.isNotFound;
                            },
                            get isShimmerVisible() {
                                return !e.pagesLoader.isSomePageResolved;
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
                            get items() {
                                var l;
                                return null != (l = e.pagesLoader.items) ? l : [];
                            },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        getData: (0, s.L3)(function* (t) {
                            let { metatagId: a, page: o = 0, pageSize: i = 20, preloadedMeta: u } = t,
                                { metatagsResource: d, modelActionsLogger: n } = (0, s._$)(e);
                            if (e.pagesLoader.isPageNeedToLoad(o))
                                try {
                                    e.pagesLoader.setPageState(o, g.GuX.PENDING);
                                    let t = u;
                                    t || (t = yield d.getMetatagAlbums({ id: a, offset: o, limit: i })), (e.fullTitle = t.title.fullTitle);
                                    let s = t.albums.map(l.pp);
                                    e.pagesLoader.setItems(s, { page: o, pager: { page: o, perPage: i, total: t.pager.total } });
                                } catch (t) {
                                    n.error(t),
                                        t instanceof r.GX &&
                                            (t.statusCode === r.X1.NOT_FOUND || t.statusCode === r.X1.BAD_REQUEST) &&
                                            (e.errorStatusCode = r.X1.NOT_FOUND),
                                        e.pagesLoader.setItems(null, { responseStatus: g.FlZ.ERROR, page: o });
                                }
                        }),
                        reset() {
                            (e.errorStatusCode = null), (e.fullTitle = null), e.pagesLoader.reset();
                        },
                    })),
                n = s.gK
                    .compose(
                        s.gK.model('GenreArtistsPage', {
                            errorStatusCode: s.gK.maybeNull(s.gK.number),
                            fullTitle: s.gK.maybeNull(s.gK.string),
                            pagesLoader: (0, u.Ij)(i.PK),
                        }),
                        u.XT,
                    )
                    .views((e) => {
                        let t = {
                            get isNotFound() {
                                var a;
                                let t = e.isResolved && (null == (a = e.pagesLoader.pager) ? void 0 : a.total) === 0,
                                    s = e.errorStatusCode === r.X1.NOT_FOUND || e.errorStatusCode === r.X1.BAD_REQUEST;
                                return (e.isRejected && s) || t;
                            },
                            get isSomethingWrong() {
                                return e.isRejected && !t.isNotFound;
                            },
                            get isShimmerVisible() {
                                return !e.pagesLoader.isSomePageResolved;
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
                            get items() {
                                return e.pagesLoader.items || [];
                            },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        getData: (0, s.L3)(function* (t) {
                            let { metatagId: a, page: l = 0, pageSize: o = 20, preloadedMeta: u } = t,
                                { metatagsResource: d, modelActionsLogger: n } = (0, s._$)(e);
                            if (e.pagesLoader.isPageNeedToLoad(l))
                                try {
                                    e.pagesLoader.setPageState(l, g.GuX.PENDING);
                                    let t = u;
                                    t || (t = yield d.getMetatagArtists({ id: a, offset: l, limit: o, period: 'week' })), (e.fullTitle = t.title.fullTitle);
                                    let s = t.artists.map((e) => (0, i.dM)(e.artist));
                                    e.pagesLoader.setItems(s, { page: l, pager: t.pager });
                                } catch (t) {
                                    n.error(t),
                                        t instanceof r.GX &&
                                            (t.statusCode === r.X1.NOT_FOUND || t.statusCode === r.X1.BAD_REQUEST) &&
                                            (e.errorStatusCode = r.X1.NOT_FOUND),
                                        e.pagesLoader.setItems(null, { responseStatus: g.FlZ.ERROR, page: l });
                                }
                        }),
                        reset() {
                            (e.errorStatusCode = null), e.pagesLoader.reset();
                        },
                    }));
            var p = a(25358);
            let m = s.gK
                    .model('GenrePlaylistsPage', { pagesLoader: (0, u.Ij)(p.$o), errorStatusCode: s.gK.maybeNull(s.gK.number), fullTitle: s.gK.maybeNull(s.gK.string) })
                    .views((e) => {
                        let t = {
                            get isNotFound() {
                                var a, s;
                                let t = e.pagesLoader.isSomePageResolved && (null != (s = null == (a = e.pagesLoader.items) ? void 0 : a.length) ? s : 0) === 0,
                                    l = e.errorStatusCode === r.X1.NOT_FOUND || e.errorStatusCode === r.X1.BAD_REQUEST;
                                return (e.pagesLoader.isInitialRequestRejected && l) || t;
                            },
                            get isSomethingWrong() {
                                return e.pagesLoader.isInitialRequestRejected && !t.isNotFound;
                            },
                            get isShimmerVisible() {
                                return !e.pagesLoader.isSomePageResolved;
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
                            get items() {
                                var l;
                                return null != (l = e.pagesLoader.items) ? l : [];
                            },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        getData: (0, s.L3)(function* (t) {
                            let { metatagId: a, page: r = 0, pageSize: l = 20, preloadedMeta: o } = t,
                                { metatagsResource: i, modelActionsLogger: u } = (0, s._$)(e);
                            if (e.pagesLoader.isPageNeedToLoad(r))
                                try {
                                    e.pagesLoader.setPageState(r, g.GuX.PENDING);
                                    let t = o;
                                    t || (t = yield i.getMetatagPlaylists({ id: a, offset: r, limit: l, withLikesCount: !0 })), (e.fullTitle = t.title.fullTitle);
                                    let s = t.playlists.map(p.jX);
                                    e.pagesLoader.setItems(s, { page: r, pager: { page: r, perPage: l, total: t.pager.total } });
                                } catch (t) {
                                    u.error(t), e.pagesLoader.setItems(null, { responseStatus: g.FlZ.ERROR, page: r });
                                }
                        }),
                        reset() {
                            e.pagesLoader.reset(), (e.errorStatusCode = null), (e.fullTitle = null);
                        },
                    })),
                L = s.gK
                    .compose(
                        s.gK.model('GenrePage', {
                            id: s.gK.maybeNull(s.gK.string),
                            errorStatusCode: s.gK.maybeNull(s.gK.number),
                            fullTitle: s.gK.maybeNull(s.gK.string),
                            artists: s.gK.array(i.PK),
                            albums: s.gK.array(l.JC),
                            playlists: s.gK.array(o.IP),
                            albumsSubpage: d,
                            artistsSubpage: n,
                            playlistsSubpage: m,
                        }),
                        u.XT,
                    )
                    .views((e) => {
                        let t = {
                            get isLoading() {
                                return e.isNeededToLoad || e.loadingState === g.GuX.PENDING;
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
                                    s = e.errorStatusCode === r.X1.NOT_FOUND || e.errorStatusCode === r.X1.BAD_REQUEST;
                                return (e.isRejected && s) || a;
                            },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        getData: (0, s.L3)(function* (t) {
                            let { id: a, preloadedMeta: u } = t,
                                { metatagsResource: d, modelActionsLogger: n } = (0, s._$)(e);
                            if (e.loadingState !== g.GuX.PENDING)
                                try {
                                    e.loadingState = g.GuX.PENDING;
                                    let t = u;
                                    t || (t = yield d.getMetatagById({ id: a })),
                                        (e.id = t.id),
                                        (e.fullTitle = t.title.fullTitle),
                                        (e.artists = (0, s.wg)(t.artists.map(i.dM))),
                                        (e.albums = (0, s.wg)(t.albums.map(l.pp))),
                                        (e.playlists = (0, s.wg)(t.playlists.map(o.ZC))),
                                        e.loadingState !== g.GuX.IDLE && (e.loadingState = g.GuX.RESOLVE);
                                } catch (t) {
                                    n.error(t),
                                        t instanceof r.GX &&
                                            (t.statusCode === r.X1.NOT_FOUND || t.statusCode === r.X1.BAD_REQUEST) &&
                                            (e.errorStatusCode = r.X1.NOT_FOUND),
                                        e.loadingState !== g.GuX.IDLE && (e.loadingState = g.GuX.REJECT);
                                }
                        }),
                        reset() {
                            (e.loadingState = g.GuX.IDLE), (e.fullTitle = null), (e.artists = (0, s.wg)([])), (e.albums = (0, s.wg)([])), (e.playlists = (0, s.wg)([]));
                        },
                    }));
            var N = a(69430),
                c = a(58689);
            a(79841);
            var S = a(45689),
                y = a(34841);
            a(33266), a(90044), a(70762), a(51491);
            var R = a(44020),
                T = a(91901);
            let f = async (e, t) => {
                try {
                    let { container: a, backendHostTld: s, locale: r, host: l, fullUrl: o, isRSC: i, requestUrl: u } = await (0, g.IhE)();
                    if (!e || i) return { genreMeta: void 0, tld: '', locale: null, host: '', fullUrl: null, url: null };
                    let d = a.get(g.UtQ);
                    return { genreMeta: await t(d, e), tld: s, locale: r, host: l, fullUrl: o, url: u };
                } catch (e) {
                    return (0, g.tfF)(e, () => ({ genreMeta: void 0, tld: '', locale: null, host: '', fullUrl: null, url: null }));
                }
            };
            (0, R.cache)(async (e) => f(e, async (e, t) => e.getMetatagAlbums({ id: t, offset: 0, limit: T.c }))),
                (0, R.cache)(async (e) => f(e, async (e, t) => e.getMetatagArtists({ id: t, offset: 0, limit: T.c, period: 'week' }))),
                (0, R.cache)(async (e) => f(e, async (e, t) => e.getMetatagById({ id: t }))),
                (0, R.cache)(async (e) => f(e, async (e, t) => e.getMetatagPlaylists({ id: t, offset: 0, limit: T.c, withLikesCount: !0 })));
        },
    },
]);
