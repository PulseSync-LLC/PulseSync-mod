(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7062],
    {
        12119: (e, t, a) => {
            'use strict';
            a.d(t, { NotFound: () => _ });
            var s = a(32290),
                r = a(63618),
                o = a(96103),
                i = a(39407),
                n = a(63423),
                l = a(82586),
                g = a(71926),
                d = a(49574),
                u = a(44574),
                m = a(55178),
                c = a(55365),
                p = a.n(c);
            let _ = (0, o.PA)((e) => {
                let { className: t, title: a, description: o, iconVariant: c = 'musicLogo', iconClassName: _, iconSize: N } = e,
                    { contentRef: h } = (0, d.gKY)(),
                    L = (0, d.ZpR)(d.Zyd.main.href);
                (0, d.LZB)();
                let { handleNavigateToMain: S } = (0, d.D5F)(L);
                return (
                    (0, d.NBO)(!0),
                    !(function () {
                        let { location: e } = (0, d.Pjs)();
                        (0, m.useEffect)(
                            () => (
                                e.setNotFound(!0),
                                () => {
                                    e.setNotFound(!1);
                                }
                            ),
                            [e],
                        );
                    })(),
                    (0, s.jsxs)('div', {
                        className: (0, r.$)(p().root, { [p().root_desktop]: !h }, t),
                        children: [
                            (0, s.jsx)(u.Lh, { withBackwardFallback: '/', className: p().navigation, withForwardControl: !1 }),
                            (0, s.jsxs)('div', {
                                className: p().content,
                                children: [
                                    (0, s.jsx)(l.Icon, { className: (0, r.$)(p().icon, _), variant: c, size: N }),
                                    (0, s.jsx)(g.Heading, {
                                        className: (0, r.$)(p().title, p().important),
                                        variant: 'h3',
                                        size: 'xs',
                                        children: a || (0, s.jsx)(i.A, { id: 'page-error.page-does-not-exist' }),
                                    }),
                                    (0, s.jsx)(g.Caption, {
                                        className: (0, r.$)(p().text, p().important),
                                        variant: 'span',
                                        type: 'text',
                                        size: 'l',
                                        weight: 'normal',
                                        children: o || (0, s.jsx)(i.A, { id: 'page-error.page-does-not-exist-description' }),
                                    }),
                                    (0, s.jsx)(n.$, {
                                        onClick: S,
                                        className: p().button,
                                        role: 'link',
                                        color: 'secondary',
                                        size: 'l',
                                        radius: 'xxxl',
                                        children: (0, s.jsx)(g.Caption, {
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'm',
                                            children: (0, s.jsx)(i.A, { id: 'navigation.page-main' }),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    })
                );
            });
        },
        30310: (e) => {
            e.exports = {
                root: 'SomethingWentWrong_root__d77VJ',
                content: 'SomethingWentWrong_content__8_YkJ',
                content_shrink: 'SomethingWentWrong_content_shrink__GOR_7',
                navigation: 'SomethingWentWrong_navigation__a8eMG',
                navigation_desktop: 'SomethingWentWrong_navigation_desktop__WGGBX',
                icon: 'SomethingWentWrong_icon__f15_y',
                title: 'SomethingWentWrong_title__Kn89B',
                important: 'SomethingWentWrong_important__namIb',
                text: 'SomethingWentWrong_text__KEfGc',
                button: 'SomethingWentWrong_button__dmh7t',
            };
        },
        32381: (e, t, a) => {
            'use strict';
            a.d(t, { w: () => s.SomethingWentWrong });
            var s = a(60194);
        },
        50562: (e, t, a) => {
            'use strict';
            a.d(t, { Z3: () => _.GenreAlbumsPage, P0: () => N.GenreArtistsPage, L6: () => h.GenrePage, G8: () => p, ys: () => L.GenrePlaylistsPage });
            var s = a(60754),
                r = a(87953),
                o = a(16486),
                i = a(50510),
                n = a(33797),
                l = a(49574),
                g = a(95428);
            let d = s.gK
                    .model('GenreAlbumsPage', { pagesLoader: (0, g.Ij)(o.JC), errorStatusCode: s.gK.maybeNull(s.gK.number), fullTitle: s.gK.maybeNull(s.gK.string) })
                    .views((e) => {
                        let t = {
                            get isNotFound() {
                                var a, s;
                                let t = e.pagesLoader.isSomePageResolved && (null != (s = null == (a = e.pagesLoader.items) ? void 0 : a.length) ? s : 0) === 0,
                                    o = e.errorStatusCode === r.X1.NOT_FOUND || e.errorStatusCode === r.X1.BAD_REQUEST;
                                return (e.pagesLoader.isInitialRequestRejected && o) || t;
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
                                var o;
                                return null != (o = e.pagesLoader.items) ? o : [];
                            },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        getData: (0, s.L3)(function* (t) {
                            let { metatagId: a, page: i = 0, pageSize: n = 20, preloadedMeta: g } = t,
                                { metatagsResource: d, modelActionsLogger: u } = (0, s._$)(e);
                            if (e.pagesLoader.isPageNeedToLoad(i))
                                try {
                                    e.pagesLoader.setPageState(i, l.GuX.PENDING);
                                    let t = g;
                                    t || (t = yield d.getMetatagAlbums({ id: a, offset: i, limit: n })), (e.fullTitle = t.title.fullTitle);
                                    let s = t.albums.map(o.pp);
                                    e.pagesLoader.setItems(s, { page: i, pager: { page: i, perPage: n, total: t.pager.total } });
                                } catch (t) {
                                    u.error(t),
                                        t instanceof r.GX &&
                                            (t.statusCode === r.X1.NOT_FOUND || t.statusCode === r.X1.BAD_REQUEST) &&
                                            (e.errorStatusCode = r.X1.NOT_FOUND),
                                        e.pagesLoader.setItems(null, { responseStatus: l.FlZ.ERROR, page: i });
                                }
                        }),
                        reset() {
                            (e.errorStatusCode = null), (e.fullTitle = null), e.pagesLoader.reset();
                        },
                    })),
                u = s.gK
                    .compose(
                        s.gK.model('GenreArtistsPage', {
                            errorStatusCode: s.gK.maybeNull(s.gK.number),
                            fullTitle: s.gK.maybeNull(s.gK.string),
                            pagesLoader: (0, g.Ij)(n.PK),
                        }),
                        g.XT,
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
                            let { metatagId: a, page: o = 0, pageSize: i = 20, preloadedMeta: g } = t,
                                { metatagsResource: d, modelActionsLogger: u } = (0, s._$)(e);
                            if (e.pagesLoader.isPageNeedToLoad(o))
                                try {
                                    e.pagesLoader.setPageState(o, l.GuX.PENDING);
                                    let t = g;
                                    t || (t = yield d.getMetatagArtists({ id: a, offset: o, limit: i, period: 'week' })), (e.fullTitle = t.title.fullTitle);
                                    let s = t.artists.map((e) => (0, n.dM)(e.artist));
                                    e.pagesLoader.setItems(s, { page: o, pager: t.pager });
                                } catch (t) {
                                    u.error(t),
                                        t instanceof r.GX &&
                                            (t.statusCode === r.X1.NOT_FOUND || t.statusCode === r.X1.BAD_REQUEST) &&
                                            (e.errorStatusCode = r.X1.NOT_FOUND),
                                        e.pagesLoader.setItems(null, { responseStatus: l.FlZ.ERROR, page: o });
                                }
                        }),
                        reset() {
                            (e.errorStatusCode = null), e.pagesLoader.reset();
                        },
                    }));
            var m = a(55550);
            let c = s.gK
                    .model('GenrePlaylistsPage', { pagesLoader: (0, g.Ij)(m.$o), errorStatusCode: s.gK.maybeNull(s.gK.number), fullTitle: s.gK.maybeNull(s.gK.string) })
                    .views((e) => {
                        let t = {
                            get isNotFound() {
                                var a, s;
                                let t = e.pagesLoader.isSomePageResolved && (null != (s = null == (a = e.pagesLoader.items) ? void 0 : a.length) ? s : 0) === 0,
                                    o = e.errorStatusCode === r.X1.NOT_FOUND || e.errorStatusCode === r.X1.BAD_REQUEST;
                                return (e.pagesLoader.isInitialRequestRejected && o) || t;
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
                                var o;
                                return null != (o = e.pagesLoader.items) ? o : [];
                            },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        getData: (0, s.L3)(function* (t) {
                            let { metatagId: a, page: r = 0, pageSize: o = 20, preloadedMeta: i } = t,
                                { metatagsResource: n, modelActionsLogger: g } = (0, s._$)(e);
                            if (e.pagesLoader.isPageNeedToLoad(r))
                                try {
                                    e.pagesLoader.setPageState(r, l.GuX.PENDING);
                                    let t = i;
                                    t || (t = yield n.getMetatagPlaylists({ id: a, offset: r, limit: o, withLikesCount: !0 })), (e.fullTitle = t.title.fullTitle);
                                    let s = t.playlists.map(m.jX);
                                    e.pagesLoader.setItems(s, { page: r, pager: { page: r, perPage: o, total: t.pager.total } });
                                } catch (t) {
                                    g.error(t), e.pagesLoader.setItems(null, { responseStatus: l.FlZ.ERROR, page: r });
                                }
                        }),
                        reset() {
                            e.pagesLoader.reset(), (e.errorStatusCode = null), (e.fullTitle = null);
                        },
                    })),
                p = s.gK
                    .compose(
                        s.gK.model('GenrePage', {
                            id: s.gK.maybeNull(s.gK.string),
                            errorStatusCode: s.gK.maybeNull(s.gK.number),
                            fullTitle: s.gK.maybeNull(s.gK.string),
                            artists: s.gK.array(n.PK),
                            albums: s.gK.array(o.JC),
                            playlists: s.gK.array(i.IP),
                            albumsSubpage: d,
                            artistsSubpage: u,
                            playlistsSubpage: c,
                        }),
                        g.XT,
                    )
                    .views((e) => {
                        let t = {
                            get isLoading() {
                                return e.isNeededToLoad || e.loadingState === l.GuX.PENDING;
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
                            let { id: a, preloadedMeta: g } = t,
                                { metatagsResource: d, modelActionsLogger: u } = (0, s._$)(e);
                            if (e.loadingState !== l.GuX.PENDING)
                                try {
                                    e.loadingState = l.GuX.PENDING;
                                    let t = g;
                                    t || (t = yield d.getMetatagById({ id: a })),
                                        (e.id = t.id),
                                        (e.fullTitle = t.title.fullTitle),
                                        (e.artists = (0, s.wg)(t.artists.map(n.dM))),
                                        (e.albums = (0, s.wg)(t.albums.map(o.pp))),
                                        (e.playlists = (0, s.wg)(t.playlists.map(i.ZC))),
                                        e.loadingState !== l.GuX.IDLE && (e.loadingState = l.GuX.RESOLVE);
                                } catch (t) {
                                    u.error(t),
                                        t instanceof r.GX &&
                                            (t.statusCode === r.X1.NOT_FOUND || t.statusCode === r.X1.BAD_REQUEST) &&
                                            (e.errorStatusCode = r.X1.NOT_FOUND),
                                        e.loadingState !== l.GuX.IDLE && (e.loadingState = l.GuX.REJECT);
                                }
                        }),
                        reset() {
                            (e.loadingState = l.GuX.IDLE), (e.fullTitle = null), (e.artists = (0, s.wg)([])), (e.albums = (0, s.wg)([])), (e.playlists = (0, s.wg)([]));
                        },
                    }));
            var _ = a(45514),
                N = a(3069);
            a(60637);
            var h = a(53737),
                L = a(15112);
            a(63518), a(20843), a(83470), a(36023);
            var S = a(55178),
                v = a(95393);
            let y = async (e, t) => {
                try {
                    let { container: a, backendHostTld: s, locale: r, host: o, fullUrl: i, isRSC: n, requestUrl: g } = await (0, l.IhE)();
                    if (!e || n) return { genreMeta: void 0, tld: '', locale: null, host: '', fullUrl: null, url: null };
                    let d = a.get(l.UtQ);
                    return { genreMeta: await t(d, e), tld: s, locale: r, host: o, fullUrl: i, url: g };
                } catch (e) {
                    return (0, l.tfF)(e, () => ({ genreMeta: void 0, tld: '', locale: null, host: '', fullUrl: null, url: null }));
                }
            };
            (0, S.cache)(async (e) => y(e, async (e, t) => e.getMetatagAlbums({ id: t, offset: 0, limit: v.c }))),
                (0, S.cache)(async (e) => y(e, async (e, t) => e.getMetatagArtists({ id: t, offset: 0, limit: v.c, period: 'week' }))),
                (0, S.cache)(async (e) => y(e, async (e, t) => e.getMetatagById({ id: t }))),
                (0, S.cache)(async (e) => y(e, async (e, t) => e.getMetatagPlaylists({ id: t, offset: 0, limit: v.c, withLikesCount: !0 })));
        },
        55365: (e) => {
            e.exports = {
                root: 'NotFound_root__47ZX6',
                root_desktop: 'NotFound_root_desktop___QqSb',
                navigation: 'NotFound_navigation__q8rIW',
                content: 'NotFound_content__3kry_',
                icon: 'NotFound_icon___Wa9y',
                title: 'NotFound_title__akG_o',
                important: 'NotFound_important__z1LWl',
                text: 'NotFound_text__oxDZv',
                button: 'NotFound_button__jF4uH',
            };
        },
        56196: (e, t, a) => {
            'use strict';
            a.r(t), a.d(t, { default: () => i });
            var s = a(32290),
                r = a(21916),
                o = a(50562);
            let i = () => {
                let e = (0, r.useSearchParams)().get('metatagId');
                return e || (0, r.notFound)(), (0, s.jsx)(o.ys, { metatagId: e });
            };
        },
        60194: (e, t, a) => {
            'use strict';
            a.d(t, { SomethingWentWrong: () => N });
            var s = a(32290),
                r = a(63618),
                o = a(96103),
                i = a(55178),
                n = a(60900),
                l = a(39407),
                g = a(63423),
                d = a(82586),
                u = a(71926),
                m = a(49574),
                c = a(44574),
                p = a(30310),
                _ = a.n(p);
            let N = (0, o.PA)((e) => {
                let { className: t, withBackwardControl: a = !0 } = e,
                    { formatMessage: o } = (0, n.A)(),
                    p = o({ id: 'error-messages.something-went-wrong' });
                (0, m.CgZ)(p);
                let { sendRefreshEvent: N } = (0, m.cYT)(),
                    h = (0, i.useCallback)(() => {
                        N(), (window.location.href = m.Zyd.main.href);
                    }, [N]),
                    { contentRef: L } = (0, m.gKY)();
                return (0, s.jsxs)('div', {
                    className: (0, r.$)(_().root, t),
                    children: [
                        a &&
                            (0, s.jsx)(c.Lh, {
                                withBackwardFallback: '/',
                                className: (0, r.$)(_().navigation, { [_().navigation_desktop]: !L }),
                                withForwardControl: !1,
                            }),
                        (0, s.jsxs)('div', {
                            className: (0, r.$)(_().content, { [_().content_shrink]: !a }),
                            children: [
                                (0, s.jsx)(d.Icon, { className: _().icon, variant: 'attention', size: 'xxl' }),
                                (0, s.jsx)(u.Heading, { className: (0, r.$)(_().title, _().important), variant: 'h3', size: 'xs', children: p }),
                                (0, s.jsxs)(u.Caption, {
                                    className: (0, r.$)(_().text, _().important),
                                    variant: 'span',
                                    type: 'text',
                                    size: 'l',
                                    weight: 'normal',
                                    children: [!1, (0, s.jsx)(l.A, { id: 'page-error.try-to-restart-app' })],
                                }),
                                (0, s.jsx)(g.$, {
                                    onClick: h,
                                    className: _().button,
                                    role: 'link',
                                    color: 'secondary',
                                    size: 'l',
                                    radius: 'xxxl',
                                    children: (0, s.jsxs)(u.Caption, {
                                        type: 'controls',
                                        variant: 'span',
                                        size: 'm',
                                        children: [!1, (0, s.jsx)(l.A, { id: 'page-error.restart-app-button' })],
                                    }),
                                }),
                            ],
                        }),
                    ],
                });
            });
        },
        62176: (e, t, a) => {
            Promise.resolve().then(a.bind(a, 56196));
        },
        80719: (e, t, a) => {
            'use strict';
            a.d(t, { M: () => s.NotFound });
            var s = a(12119);
        },
    },
    (e) => {
        e.O(
            0,
            [
                1670, 3445, 9221, 9745, 4567, 6375, 3169, 4826, 7236, 1311, 7764, 6706, 3267, 9769, 7307, 9574, 4574, 5428, 6049, 4089, 6486, 3317, 3843, 6961, 4220,
                9562, 7358,
            ],
            () => e((e.s = 62176)),
        ),
            (_N_E = e.O());
    },
]);
