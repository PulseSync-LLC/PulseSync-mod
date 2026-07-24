(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6252, 7980],
    {
        3377: (e, t, s) => {
            'use strict';
            s.d(t, { WithAuth: () => b });
            var i = s(32290),
                a = s(96103),
                l = s(21916),
                o = s(63618),
                r = s(39407),
                n = s(71926),
                c = s(94218),
                u = s(55556),
                d = s.n(u);
            let m = (0, a.PA)(() =>
                (0, i.jsxs)('div', {
                    className: d().root,
                    children: [
                        (0, i.jsx)(n.DZ, {
                            className: (0, o.$)(d().title, d().important),
                            variant: 'h3',
                            size: 'xs',
                            children: (0, i.jsx)(r.A, { id: 'authorization.enter-title' }),
                        }),
                        (0, i.jsx)(n.HL, {
                            className: (0, o.$)(d().text, d().important),
                            variant: 'span',
                            type: 'text',
                            size: 'l',
                            weight: 'normal',
                            children: (0, i.jsx)(r.A, { id: 'authorization.enter-text' }),
                        }),
                        (0, i.jsx)(c.H, { size: 'l', className: d().button }),
                    ],
                }),
            );
            var _ = s(20472),
                h = s(57594);
            let b = (0, a.PA)((e) => {
                let { children: t, withRedirectToMainPage: s } = e,
                    { user: a } = (0, h.g)();
                return a.isAuthorized ? t : (s && (0, l.redirect)(_.Z.main.href), (0, i.jsx)(m, {}));
            });
        },
        8626: (e, t, s) => {
            'use strict';
            s.d(t, { m: () => i });
            let i = () => ({ year: 'numeric' });
        },
        14083: (e, t, s) => {
            'use strict';
            s.d(t, { CollectionAlbumsPage: () => es });
            var i = s(32290),
                a = s(96103),
                l = s(21916),
                o = s(55178),
                r = s(21732),
                n = s(15299),
                c = s(7999),
                u = s(48922),
                d = s(22714),
                m = s(83920),
                _ = s(3796),
                h = s(57594),
                b = s(29038),
                p = s(97201),
                g = (function (e) {
                    return (e[(e.LIKED_ALBUMS = 0)] = 'LIKED_ALBUMS'), (e[(e.UPCOMING_ALBUMS = 1)] = 'UPCOMING_ALBUMS'), e;
                })({}),
                A = s(73744),
                v = s.n(A),
                x = s(63618),
                C = s(60900),
                I = s(24170),
                y = s(58054),
                E = s(32468),
                N = s(89020),
                L = s(45257),
                f = s(39407),
                O = s(71926),
                P = s(83808),
                S = s(85377),
                j = s(12894),
                M = s(45180),
                T = s(8946),
                k = s(20472),
                R = s(36477),
                w = s(71670);
            let U = (e) => {
                let t = (0, w.X)();
                return (0, o.useCallback)(
                    (s) => {
                        var i;
                        switch ((null == (i = e.onTabChange) || i.call(e, s), s)) {
                            case g.LIKED_ALBUMS: {
                                let { href: e } = (0, R.u)(k.Z.collectionAlbums.href, { query: { tab: b.H.LIKED_ALBUMS } });
                                t(e);
                                break;
                            }
                            case g.UPCOMING_ALBUMS: {
                                let { href: e } = (0, R.u)(k.Z.collectionAlbums.href, { query: { tab: b.H.UPCOMING_ALBUMS } });
                                t(e);
                            }
                        }
                    },
                    [t, e],
                );
            };
            var D = s(57190),
                B = s.n(D),
                H = s(79856);
            let F = () =>
                    (0, i.jsxs)('div', {
                        className: B().tabsShimmer,
                        children: [(0, i.jsx)(H.W, { className: B().tabShimmer }), (0, i.jsx)(H.W, { className: B().tabShimmer })],
                    }),
                G = (0, a.PA)((e) => {
                    var t, s, a;
                    let { tabsState: l, tabElementId: n } = e,
                        { collection: c } = (0, h.g)(),
                        { formatMessage: u } = (0, C.A)(),
                        d = (0, P.W)(),
                        { isScrolling: m } = (0, o.useContext)(S.B),
                        _ = U(l),
                        b = (0, o.useMemo)(
                            () =>
                                c.albums.items.length
                                    ? ''.concat(u({ id: 'entity-names.albums' }), ' • ').concat(c.albums.items.length)
                                    : u({ id: 'entity-names.albums' }),
                            [c.albums.items.length, u],
                        ),
                        p = (0, o.useMemo)(() => {
                            var e;
                            return (null == (e = c.albums.upcomingAlbums.items) ? void 0 : e.length)
                                ? ''.concat(u({ id: 'entity-names.upcoming-albums' }), ' • ').concat(c.albums.upcomingAlbums.items.length)
                                : u({ id: 'entity-names.upcoming-albums' });
                        }, [null == (t = c.albums.upcomingAlbums.items) ? void 0 : t.length, u]);
                    return (0, i.jsxs)('header', {
                        className: B().root,
                        'aria-hidden': m,
                        'data-test-id': r.Xk.collection.COLLECTION_ALBUMS_PAGE_STATIC_HEADER,
                        children: [
                            (0, i.jsxs)('div', {
                                className: B().container,
                                children: [
                                    d.canBack && (0, i.jsx)(j.L, { withForwardControl: !1, withBackwardControl: d.canBack, shouldFocusOnMount: !m }),
                                    (0, i.jsx)(O.DZ, {
                                        variant: 'h2',
                                        weight: 'bold',
                                        size: 'xl',
                                        lineClamp: 1,
                                        className: B().title,
                                        'data-test-id': r.Xk.collection.COLLECTION_ALBUMS_PAGE_STATIC_HEADER_TITLE,
                                        children: (0, i.jsx)(f.A, { id: 'entity-names.favourite-albums' }),
                                    }),
                                ],
                            }),
                            (0, i.jsxs)(T.wI, {
                                isShimmerVisible: c.albums.isLoading,
                                shimmer: (0, i.jsx)(F, {}),
                                className: B().tabs,
                                elementId: n,
                                ...l,
                                onTabChange: _,
                                children: [
                                    (0, i.jsx)(M.o, {
                                        className: B().tab,
                                        value: g.LIKED_ALBUMS,
                                        title: b,
                                        'aria-label': u({ id: 'entity-names.albums-count' }, { value: c.albums.items.length }),
                                        'aria-hidden': m,
                                        tabIndex: m ? -1 : 0,
                                    }),
                                    (0, i.jsx)(M.o, {
                                        className: B().tab,
                                        value: g.UPCOMING_ALBUMS,
                                        title: p,
                                        'aria-label': u(
                                            { id: 'entity-names.upcoming-albums-count' },
                                            { value: null != (a = null == (s = c.albums.upcomingAlbums.items) ? void 0 : s.length) ? a : 0 },
                                        ),
                                        'aria-hidden': m,
                                        tabIndex: m ? -1 : 0,
                                    }),
                                ],
                            }),
                        ],
                    });
                });
            var z = s(17092),
                K = s.n(z);
            let V = (0, a.PA)((e) => {
                var t;
                let { forwardRef: s, tabsState: a, tabElementId: l } = e,
                    {
                        user: r,
                        collection: c,
                        settings: { isMobile: u },
                    } = (0, h.g)(),
                    { formatMessage: d } = (0, C.A)(),
                    m = (0, o.useCallback)(
                        (e) => {
                            r.account.data.uid && c.albums.getData({ userId: r.account.data.uid, metaType: 'music', page: e, pageSize: 20 });
                        },
                        [c.albums, r.account.data.uid],
                    ),
                    _ = (0, o.useMemo)(
                        () => ({
                            Header: () => (0, i.jsx)(G, { tabsState: a, tabElementId: l }),
                            Footer: () => (0, i.jsx)(E.A, { children: (0, i.jsx)(y.w, { className: K().footer }) }),
                        }),
                        [l, a],
                    ),
                    b = c.albums.isAlbumsLoading ? 20 : c.albums.items.length;
                return (0, i.jsx)('div', {
                    className: K().root,
                    children: (0, i.jsx)(n.Kp, {
                        value: a.value,
                        name: g.LIKED_ALBUMS,
                        elementId: l,
                        className: K().tabPanel,
                        children: (0, i.jsx)(L.$, {
                            className: (0, x.$)(K().scrollContainer, K().important),
                            customComponents: _,
                            itemContentCallback: (e) => {
                                var t;
                                let s = null == (t = c.albums.pagesLoader.items) ? void 0 : t[e],
                                    a = d({ id: 'loading-messages.entity-is-loading' }, { entityName: d({ id: 'entity-names.album' }) });
                                return s ? (0, i.jsx)(I.a, { album: s, contentLinesCount: 4 }, s.id) : (0, i.jsx)(N.V, { 'aria-label': a, linesCount: 4 });
                            },
                            totalCount: b,
                            onGetDataByPage: m,
                            pageSize: 20,
                            totalRequests: null != (t = c.albums.pagesLoader.requestsCount) ? t : 0,
                            listClassName: K().content,
                            itemClassName: K().item,
                            handleRef: s,
                            context: { listAriaLabel: d({ id: 'collection.liked-albums-list' }) },
                            isMobileLayout: u,
                            useWindowScroll: u,
                        }),
                    }),
                });
            });
            var Y = s(46049),
                X = s(40126),
                $ = s(50308);
            let q = (0, a.PA)((e) => {
                let { forwardRef: t, tabsState: s, tabElementId: a } = e,
                    { collection: l } = (0, h.g)(),
                    { formatMessage: r } = (0, C.A)(),
                    c = (0, o.useMemo)(() => {
                        var e;
                        let t = r({ id: 'loading-messages.entity-is-loading' }, { entityName: r({ id: 'entity-names.album' }) });
                        return l.albums.isUpcomingAlbumsLoading
                            ? (0, i.jsx)($.e, { isActive: !0, 'aria-label': t })
                            : null == (e = l.albums.upcomingAlbums.items)
                              ? void 0
                              : e.map((e) => (0, i.jsx)(X.M, { upcomingAlbum: e }, e.id));
                    }, [l.albums.isUpcomingAlbumsLoading, l.albums.upcomingAlbums, r]);
                return (0, i.jsxs)(Y.N, {
                    className: K().root,
                    containerClassName: (0, x.$)(K().scrollContainer, K().important),
                    ref: t,
                    children: [
                        (0, i.jsx)(G, { tabsState: s, tabElementId: a }),
                        (0, i.jsx)(n.Kp, { value: s.value, name: g.UPCOMING_ALBUMS, elementId: a, className: K().content, children: c }),
                        (0, i.jsx)(E.A, { children: (0, i.jsx)(y.w, { className: K().footer }) }),
                    ],
                });
            });
            var Z = s(82586),
                J = s(83716),
                W = s.n(J);
            let Q = (0, a.PA)((e) => {
                let { tabsState: t, tabElementId: s } = e,
                    a = (0, o.useMemo)(() => {
                        switch (t.value) {
                            case g.LIKED_ALBUMS:
                                return (0, i.jsx)(f.A, { id: 'error-messages.empty-collection-albums-title' });
                            case g.UPCOMING_ALBUMS:
                                return (0, i.jsx)(f.A, { id: 'error-messages.empty-collection-upcoming-albums-title' });
                        }
                    }, [t.value]),
                    l = t.value === g.LIKED_ALBUMS;
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(G, { tabsState: t, tabElementId: s }),
                        (0, i.jsxs)(n.Kp, {
                            value: t.value,
                            name: t.value,
                            elementId: s,
                            className: W().root,
                            children: [
                                (0, i.jsx)(Z.I, { className: W().icon, size: 'l', variant: 'album' }),
                                (0, i.jsx)(O.DZ, {
                                    className: W().title,
                                    variant: 'h3',
                                    size: 'xs',
                                    'data-test-id': r.Xk.collection.COLLECTION_ALBUMS_PAGE_EMPTY_TITLE,
                                    children: a,
                                }),
                                l &&
                                    (0, i.jsx)(O.HL, {
                                        className: W().text,
                                        variant: 'span',
                                        type: 'controls',
                                        size: 'l',
                                        weight: 'normal',
                                        children: (0, i.jsx)(f.A, { id: 'error-messages.empty-collection-albums-description' }),
                                    }),
                            ],
                        }),
                    ],
                });
            });
            var ee = s(74694);
            let et = (0, a.PA)((e) => {
                    var t, s, a;
                    let { tabsState: l, tabElementId: n } = e,
                        { collection: c } = (0, h.g)(),
                        { formatMessage: u } = (0, C.A)(),
                        { isScrolling: d } = (0, o.useContext)(S.B),
                        m = (0, P.W)(),
                        _ = U(l),
                        b = (0, o.useMemo)(
                            () =>
                                c.albums.items.length
                                    ? ''.concat(u({ id: 'entity-names.albums' }), ' • ').concat(c.albums.items.length)
                                    : u({ id: 'entity-names.albums' }),
                            [c.albums.items.length, u],
                        ),
                        p = (0, o.useMemo)(() => {
                            var e, t;
                            return (null == (e = c.albums.upcomingAlbums.items) ? void 0 : e.length)
                                ? ''.concat(u({ id: 'entity-names.upcoming-albums' }), ' • ').concat(null == (t = c.albums.upcomingAlbums.items) ? void 0 : t.length)
                                : u({ id: 'entity-names.upcoming-albums' });
                        }, [null == (t = c.albums.upcomingAlbums.items) ? void 0 : t.length, u]);
                    return (0, i.jsx)(ee.Y, {
                        variant: ee.V.COMPOSITE,
                        staticClassName: (0, x.$)(B().staticHeader, B().important),
                        'aria-hidden': !d,
                        stickyClassName: (0, x.$)(B().stickyHeader, B().important),
                        containerProps: { 'data-test-id': r.Xk.collection.COLLECTION_ALBUMS_PAGE_STICKY_HEADER },
                        stickyChild: (0, i.jsxs)('div', {
                            className: B().container,
                            children: [
                                m.canBack && (0, i.jsx)(j.L, { withForwardControl: !1, withBackwardControl: m.canBack, shouldFocusOnMount: !1, buttonSize: 'xs' }),
                                (0, i.jsxs)(T.wI, {
                                    isShimmerVisible: c.albums.isLoading,
                                    shimmer: (0, i.jsx)(F, {}),
                                    className: B().tabs,
                                    elementId: n,
                                    ...l,
                                    onTabChange: _,
                                    children: [
                                        (0, i.jsx)(M.o, {
                                            className: B().tab,
                                            value: g.LIKED_ALBUMS,
                                            title: b,
                                            'aria-label': u({ id: 'entity-names.albums-count' }, { value: c.albums.items.length }),
                                            'aria-hidden': !d,
                                            tabIndex: d ? 0 : -1,
                                        }),
                                        (0, i.jsx)(M.o, {
                                            className: B().tab,
                                            value: g.UPCOMING_ALBUMS,
                                            title: p,
                                            'aria-label': u(
                                                { id: 'entity-names.upcoming-albums-count' },
                                                { value: null != (a = null == (s = c.albums.upcomingAlbums.items) ? void 0 : s.length) ? a : 0 },
                                            ),
                                            'aria-hidden': !d,
                                            tabIndex: d ? 0 : -1,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    });
                }),
                es = (0, a.PA)(() => {
                    let e = (0, l.useSearchParams)(),
                        { user: t, collection: s, library: a } = (0, h.g)(),
                        { contentScrollRef: A, setContentScrollRef: x } = (0, m.g)(),
                        C = (0, o.useId)(),
                        I = (0, o.useMemo)(() => {
                            switch (e.get(p.K.TAB)) {
                                case b.H.LIKED_ALBUMS:
                                    break;
                                case b.H.UPCOMING_ALBUMS:
                                    return g.UPCOMING_ALBUMS;
                            }
                            return g.LIKED_ALBUMS;
                        }, [e]),
                        y = (0, n.zb)(I);
                    (0, _.J)(s.albums.isResolved),
                        (0, o.useEffect)(
                            () => () => {
                                s.albums.reset();
                            },
                            [s.albums],
                        );
                    let E = (0, o.useMemo)(() => {
                        switch (y.value) {
                            case g.LIKED_ALBUMS:
                                if (s.albums.isAlbumsEmpty) return (0, i.jsx)(Q, { tabsState: y, tabElementId: C });
                                return (0, i.jsx)(V, { forwardRef: x, tabsState: y, tabElementId: C });
                            case g.UPCOMING_ALBUMS:
                                if (s.albums.isUpcomingAlbumsEmpty) return (0, i.jsx)(Q, { tabsState: y, tabElementId: C });
                                return (0, i.jsx)(q, { forwardRef: x, tabsState: y, tabElementId: C });
                        }
                    }, [s.albums.isAlbumsEmpty, s.albums.isUpcomingAlbumsEmpty, x, C, y]);
                    if (t.account.data.uid && s.albums.isNeededToLoad) {
                        let e = [
                            s.albums.getData({ userId: t.account.data.uid, metaType: 'music', page: 0, pageSize: 20 }),
                            s.albums.getPresaves({ userId: t.account.data.uid }),
                            a.getData(),
                        ];
                        (0, o.use)(Promise.allSettled(e));
                    }
                    return (0, i.jsx)(d.n, {
                        pageId: u._Q.OWN_ALBUMS,
                        children: (0, i.jsx)(c.h, {
                            scrollElement: A,
                            headerThreshold: 148,
                            children: (0, i.jsxs)('div', {
                                className: v().root,
                                'data-test-id': r.Xk.collection.COLLECTION_ALBUMS_PAGE,
                                children: [(0, i.jsx)(et, { tabsState: y, tabElementId: C }), E],
                            }),
                        }),
                    });
                });
        },
        14858: (e, t, s) => {
            'use strict';
            s.d(t, { w: () => o });
            var i = s(60900),
                a = s(57594),
                l = s(79406);
            let o = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    { formatMessage: t } = (0, i.A)(),
                    { user: s, experiments: o } = (0, a.g)(),
                    r = 'ru' === s.account.data.userSessionRegionIso && o.checkExperiment(l.z.WebNextFooterDisclaimer, 'on'),
                    n = t(e ? { id: 'footer.explicit-content' } : { id: 'about-app.explicit-content' });
                return r ? t({ id: 'footer.disclaimer-content' }) : n;
            };
        },
        17092: (e) => {
            e.exports = {
                root: 'CollectionAlbumsPageContent_root__2Ya18',
                scrollContainer: 'CollectionAlbumsPageContent_scrollContainer__0TjJm',
                important: 'CollectionAlbumsPageContent_important__fixM8',
                content: 'CollectionAlbumsPageContent_content__jcwRU',
                footer: 'CollectionAlbumsPageContent_footer__ZkUKY',
                item: 'CollectionAlbumsPageContent_item__I_Wuz',
                tabPanel: 'CollectionAlbumsPageContent_tabPanel__0qXKZ',
            };
        },
        20472: (e, t, s) => {
            'use strict';
            s.d(t, { Z: () => a });
            var i = s(36477);
            let a = {
                main: (0, i.u)('/'),
                chart: (0, i.u)('/chart'),
                chartPodcasts: (0, i.u)('/chart/podcasts'),
                collection: (0, i.u)('/collection'),
                collectionAlbums: (0, i.u)('/collection/albums'),
                collectionArtists: (0, i.u)('/collection/artists'),
                collectionClips: (0, i.u)('/collection/clips'),
                collectionDislikes: (0, i.u)('/collection/dislikes'),
                collectionKids: (0, i.u)('/collection/kids'),
                collectionKidsAlbums: (0, i.u)('/collection/kids/albums'),
                collectionKidsPlaylists: (0, i.u)('/collection/kids/playlists'),
                collectionKidsTracks: (0, i.u)('/collection/kids/tracks'),
                collectionNonMusic: (0, i.u)('/collection/non-music'),
                collectionNonMusicLiked: (0, i.u)('/collection/non-music/liked'),
                collectionVibeRooms: (0, i.u)('/collection/multivibes'),
                collectionPlaylists: (0, i.u)('/collection/playlists'),
                collectionPlaylistsCreated: (0, i.u)('/collection/playlists/created'),
                collectionPlaylistsLiked: (0, i.u)('/collection/playlists/liked'),
                collectionShelf: (0, i.u)('/collection/shelf'),
                collectionShelfLiked: (0, i.u)('/collection/shelf/liked'),
                collectionShelfNewEpisodes: (0, i.u)('/collection/shelf/new-episodes'),
                collectionShelfRecentlyPlayed: (0, i.u)('/collection/shelf/recently-played'),
                concerts: (0, i.u)('/concerts'),
                kids: (0, i.u)('/kids'),
                mixes: (0, i.u)('/mixes'),
                musicHistory: (0, i.u)('/music-history'),
                mymusic: (0, i.u)('/mymusic'),
                mymusicDownloadsTracks: (0, i.u)('/mymusic/downloads/tracks'),
                nonMusic: (0, i.u)('/non-music'),
                pay: (0, i.u)('/pay'),
                userSlides: (0, i.u)('/slides/user'),
                search: (0, i.u)('/search'),
                searchHistory: (0, i.u)('/search/history'),
                settings: (0, i.u)('/settings'),
                video: (0, i.u)('/video'),
            };
        },
        26252: (e, t, s) => {
            'use strict';
            s.d(t, { AS: () => m, Yw: () => i, JU: () => a, DQ: () => b, Ve: () => p });
            var i,
                a,
                l = s(98411),
                o = (function () {
                    function e(e) {
                        (this.observableValue = (0, l.vP)(e)), (this.prevValueByListener = new Map());
                    }
                    return (
                        Object.defineProperty(e.prototype, 'value', {
                            get: function () {
                                return this.observableValue.value;
                            },
                            set: function (e) {
                                this.observableValue.value = e;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (e.prototype.onChange = function (e, t) {
                            var s = this;
                            void 0 === t && (t = { skipFirstChange: !1 });
                            var i = !0;
                            return (
                                this.prevValueByListener.has(e) || this.prevValueByListener.set(e, void 0),
                                this.observableValue.subscribe(function (a) {
                                    if (a !== s.prevValueByListener.get(e)) {
                                        if (t.skipFirstChange && i) {
                                            i = !1;
                                            return;
                                        }
                                        s.prevValueByListener.set(e, a), e(a);
                                    }
                                })
                            );
                        }),
                        e
                    );
                })();
            !(function () {
                function e(e) {
                    (this.observableValue = (0, l.EW)(e)), (this.prevValueByListener = new Map());
                }
                Object.defineProperty(e.prototype, 'value', {
                    get: function () {
                        return this.observableValue.value;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                    (e.prototype.onChange = function (e, t) {
                        var s = this;
                        void 0 === t && (t = { skipFirstChange: !1 });
                        var i = !0;
                        return (
                            this.prevValueByListener.has(e) || this.prevValueByListener.set(e, void 0),
                            this.observableValue.subscribe(function (a) {
                                if (a !== s.prevValueByListener.get(e)) {
                                    if (t.skipFirstChange && i) {
                                        i = !1;
                                        return;
                                    }
                                    s.prevValueByListener.set(e, a), e(a);
                                }
                            })
                        );
                    });
            })();
            class r extends Error {
                name = 'BaseException';
                message;
                code;
                data;
                stack;
                constructor(e, t = {}) {
                    let { code: s = 'E_INTERNAL', data: i = {}, ...a } = t,
                        l = e || 'Internal error';
                    super(l, a), (this.message = l), (this.code = s), (this.data = i), (this.stack = Error(l).stack), Object.setPrototypeOf(this, r.prototype);
                }
            }
            class n extends r {
                name = 'DisclaimerDictionaryLoadError';
                constructor(e) {
                    super('Failed to load disclaimer dictionary', { code: 'E_DISCLAIMER_DICTIONARY_LOAD', cause: e, data: { valueType: typeof e } }),
                        Object.setPrototypeOf(this, n.prototype);
                }
            }
            class c extends r {
                name = 'DisclaimerNotFoundError';
                disclaimerId;
                retryAttempted;
                constructor(e, t) {
                    super(`Disclaimer with id "${e}" not found${t ? ' after retry' : ''}`, {
                        code: 'E_DISCLAIMER_NOT_FOUND',
                        data: { disclaimerId: e, retryAttempted: t },
                    }),
                        (this.disclaimerId = e),
                        (this.retryAttempted = t),
                        Object.setPrototypeOf(this, c.prototype);
                }
            }
            !(function (e) {
                (e.MODAL = 'modal'),
                    (e.FOREIGN_AGENT = 'foreignAgent'),
                    (e.INFORMATIONAL = 'informational'),
                    (e.AGE_18 = 'age18'),
                    (e.EXPLICIT = 'explicit'),
                    (e.DESCRIPTION_TEXT = 'descriptionText'),
                    (e.AGE_12_ICON = 'age12Icon'),
                    (e.AGE_16_ICON = 'age16Icon'),
                    (e.AGE_18_ICON = 'age18Icon'),
                    (e.EXPLICIT_ICON = 'explicitIcon'),
                    (e.EXCLAMATION_ICON = 'exclamationIcon');
            })(i || (i = {}));
            let u = (e) => {
                    let t = [];
                    for (let s of e) {
                        let [e, i] = s.split(':');
                        e && i && t.push({ type: e, id: i });
                    }
                    return t;
                },
                d = (e, t) => u(e).filter((e) => e.type === t);
            class m {
                items;
                isLoading;
                error;
                dataSource;
                itemsObservable;
                isLoadingObservable;
                errorObservable;
                loadingPromise;
                isDestroyed;
                constructor(e) {
                    (this.dataSource = e.dataSource),
                        (this.itemsObservable = new o(null)),
                        (this.isLoadingObservable = new o(!1)),
                        (this.errorObservable = new o(null)),
                        (this.loadingPromise = null),
                        (this.isDestroyed = !1),
                        (this.items = this.itemsObservable),
                        (this.isLoading = this.isLoadingObservable),
                        (this.error = this.errorObservable);
                }
                async load() {
                    if (this.isDestroyed) return;
                    if (this.loadingPromise) return void (await this.loadingPromise);
                    (this.isLoadingObservable.value = !0), (this.errorObservable.value = null);
                    let e = this.dataSource
                        .loadAll()
                        .then((e) => {
                            this.isDestroyed || ((this.itemsObservable.value = e), (this.isLoadingObservable.value = !1));
                        })
                        .catch((e) => {
                            let t = e instanceof Error ? e : new n(e);
                            throw (!1 === this.isDestroyed && ((this.errorObservable.value = t), (this.isLoadingObservable.value = !1)), t);
                        })
                        .finally(() => {
                            this.loadingPromise = null;
                        });
                    (this.loadingPromise = e), await e;
                }
                async getById(e) {
                    let t = this.findItemById(e);
                    return t || (await this.load(), this.findItemById(e));
                }
                async getByIdOrThrow(e) {
                    let t = await this.getById(e);
                    if (void 0 !== t) return t;
                    throw new c(e, !0);
                }
                async resolveByType(e, t) {
                    let s = d(e, t);
                    return (await Promise.all(s.map(async (e) => await this.getById(e.id)))).filter((e) => void 0 !== e);
                }
                async resolveAll(e) {
                    let t = u(e),
                        s = await Promise.all(
                            t.map(async (e) => {
                                let t = await this.getById(e.id);
                                return void 0 === t ? null : { disclaimerItem: t, disclaimerType: e.type };
                            }),
                        ),
                        i = {};
                    for (let e of s)
                        if (e) {
                            let t = i[e.disclaimerType] ?? [];
                            t.push(e.disclaimerItem), (i[e.disclaimerType] = t);
                        }
                    return i;
                }
                destroy() {
                    (this.isDestroyed = !0),
                        (this.loadingPromise = null),
                        (this.itemsObservable.value = null),
                        (this.isLoadingObservable.value = !1),
                        (this.errorObservable.value = null);
                }
                findItemById(e) {
                    let t = this.itemsObservable.value;
                    if (null !== t) return t.find((t) => t.id === e);
                }
            }
            !(function (e) {
                (e.E = 'e'), (e.AGE_12 = '12+'), (e.AGE_16 = '16+'), (e.AGE_18 = '18+'), (e.EXCLAMATION = '!');
            })(a || (a = {}));
            let _ = new Map([
                    [i.EXPLICIT_ICON, a.E],
                    [i.AGE_18_ICON, a.AGE_18],
                    [i.AGE_16_ICON, a.AGE_16],
                    [i.AGE_12_ICON, a.AGE_12],
                    [i.EXCLAMATION_ICON, a.EXCLAMATION],
                ]),
                h = [i.EXPLICIT_ICON, i.AGE_18_ICON, i.AGE_16_ICON, i.AGE_12_ICON, i.EXCLAMATION_ICON],
                b = (e) => {
                    let t = ((e, t) => {
                        for (let s of t) {
                            let t = d(e, s)[0];
                            if (t) return t;
                        }
                        return null;
                    })(e, h);
                    if (null === t) return null;
                    let s = _.get(t.type);
                    return void 0 !== s ? s : null;
                },
                p = (e, t) => d(e, t).length > 0;
        },
        29038: (e, t, s) => {
            'use strict';
            s.d(t, { H: () => i });
            var i = (function (e) {
                return (e.LIKED_ALBUMS = 'liked'), (e.UPCOMING_ALBUMS = 'upcoming'), e;
            })({});
        },
        31010: (e, t, s) => {
            'use strict';
            s.d(t, { H: () => a, P: () => l });
            var i = s(55178);
            let a = (0, i.createContext)(null),
                l = () => (0, i.useContext)(a);
        },
        32468: (e, t, s) => {
            'use strict';
            s.d(t, { A: () => o });
            var i = s(32290),
                a = s(77088),
                l = s.n(a);
            let o = (e) => {
                let { children: t } = e;
                return (0, i.jsx)('footer', { className: l().empty });
            };
        },
        38714: (e) => {
            e.exports = {
                root: 'UpcomingAlbumCard_root__lSZ5l',
                controls: 'UpcomingAlbumCard_controls__fQ50f',
                cover: 'UpcomingAlbumCard_cover__qvU1m',
                image: 'UpcomingAlbumCard_image__WKtGR',
                releaseDate: 'UpcomingAlbumCard_releaseDate__EvDzB',
                artists: 'UpcomingAlbumCard_artists__Jp1OE',
                artistLink: 'UpcomingAlbumCard_artistLink__RSqXw',
                control: 'UpcomingAlbumCard_control__pSMdI',
                presaveButton: 'UpcomingAlbumCard_presaveButton__ixwy_',
                lockButton: 'UpcomingAlbumCard_lockButton__9_qyp',
                lockIcon: 'UpcomingAlbumCard_lockIcon__wtvkP',
            };
        },
        39684: (e) => {
            e.exports = {
                root: 'VirtualScroll_root__pCptn',
                root_scrolling: 'VirtualScroll_root_scrolling__dsQ6K',
                root_notScrolling: 'VirtualScroll_root_notScrolling__x4qdd',
                scroller_withFooter: 'VirtualScroll_scroller_withFooter__ntDaU',
                scroller_withHeader: 'VirtualScroll_scroller_withHeader__9yzCK',
                scroller_withForceScroll: 'VirtualScroll_scroller_withForceScroll__w7q1L',
            };
        },
        40126: (e, t, s) => {
            'use strict';
            s.d(t, { M: () => L });
            var i = s(32290),
                a = s(63618),
                l = s(96103),
                o = s(55178),
                r = s(60900),
                n = s(39407),
                c = s(21732),
                u = s(6752),
                d = s(63423),
                m = s(14934),
                _ = s(82586),
                h = s(86269),
                b = s(71926),
                p = s(73654),
                g = s(41677),
                A = s(23352),
                v = s(83560),
                x = s(57594),
                C = s(11323),
                I = s(13798),
                y = s(92744),
                E = s(38714),
                N = s.n(E);
            let L = (0, l.PA)((e) => {
                let { className: t, children: s, upcomingAlbum: l, contentLinesCount: E } = e,
                    { user: L } = (0, x.g)(),
                    { ref: f, intersectionPropertyId: O } = (0, A.n)(),
                    { formatMessage: P, formatDate: S } = (0, r.A)(),
                    j = (0, p.P)(l),
                    M = l.getKey('PlayButton'),
                    T = l.getKey('LikeButton'),
                    k = (0, o.useMemo)(() => {
                        let e = P({ id: 'entity-names.upcoming-album-name' }, { upcomingAlbumName: l.title }),
                            t = l.isPresave ? P({ id: 'entity-names.has-your-like' }) : '';
                        return ''.concat(e, ' ').concat(t);
                    }, [P, l.title, l.isPresave]),
                    R = (0, u.L)(() =>
                        (0, i.jsxs)(h.t, {
                            className: N().cover,
                            radius: 's',
                            withShadow: !0,
                            children: [
                                (0, i.jsx)(C.B, { className: N().image, src: l.coverUri, size: 200, fit: 'cover', alt: k, withAvatarReplace: !0 }),
                                (0, i.jsx)(m.hg, {
                                    className: N().controls,
                                    playControl: (0, i.jsx)(
                                        d.$,
                                        {
                                            className: N().lockButton,
                                            disabled: !0,
                                            radius: 'xxxl',
                                            variant: 'default',
                                            size: 's',
                                            icon: (0, i.jsx)(_.I, { variant: 'lock', size: 'xxs', className: N().lockIcon }),
                                            'aria-label': P({ id: 'entity-names.upcoming-album-play-disabled' }),
                                            'data-test-id': c.Kq.album.UPCOMING_ALBUM_LOCK_BUTTON,
                                        },
                                        M,
                                    ),
                                    likeControl: (0, i.jsx)(
                                        y.c,
                                        {
                                            className: (0, a.$)(N().control, N().presaveButton),
                                            isLiked: l.isPresave,
                                            onClick: j,
                                            variant: 'default',
                                            size: 's',
                                            iconSize: 'xxs',
                                            disabled: !L.isAuthorized,
                                        },
                                        T,
                                    ),
                                }),
                            ],
                        }),
                    );
                return (0, i.jsxs)(m.MN, {
                    ref: f,
                    className: (0, a.$)(N().root, t),
                    'aria-label': k,
                    explicitMarkComponent: l.explicitDisclaimer && (0, i.jsx)(I.N, { getDescriptionTexts: l.getDescriptionTexts, variant: l.explicitDisclaimer }),
                    title: (0, i.jsx)(b.HL, {
                        variant: 'div',
                        type: 'entity',
                        size: 's',
                        weight: 'medium',
                        lineClamp: 2,
                        'data-test-id': c.Kq.album.UPCOMING_ALBUM_TITLE,
                        children: l.title,
                    }),
                    'data-intersection-property-id': O,
                    contentLinesCount: E,
                    view: R,
                    description: (0, i.jsx)(g.i, { className: N().artists, artists: l.artists, lineClamp: 1, linkClassName: N().artistLink, captionSize: 's' }),
                    'data-test-id': c.Kq.album.UPCOMING_ALBUM_CARD,
                    children: [
                        (0, i.jsx)(b.HL, {
                            className: N().releaseDate,
                            variant: 'div',
                            type: 'entity',
                            size: 's',
                            weight: 'medium',
                            lineClamp: 1,
                            'data-test-id': c.Kq.album.UPCOMING_ALBUM_RELEASE_DATE,
                            children: (0, i.jsx)(n.A, { id: 'entity-names.upcoming-album-date', values: { releaseDate: S(l.releaseDate, (0, v.s)()) } }),
                        }),
                        s,
                    ],
                });
            });
        },
        44273: (e, t, s) => {
            Promise.resolve().then(s.bind(s, 3377)), Promise.resolve().then(s.bind(s, 14083));
        },
        45257: (e, t, s) => {
            'use strict';
            s.d(t, { $: () => p });
            var i = s(32290),
                a = s(63618),
                l = s(8055),
                o = s(55178);
            let r = (e) => {
                    let { style: t, forwardRef: s, context: a, ...l } = e,
                        o = (null == a ? void 0 : a.listAriaLabel) || void 0,
                        r = (null == a ? void 0 : a.listRole) || 'region';
                    return (0, i.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: r, 'aria-label': o, style: { ...t }, ref: s, ...l });
                },
                n = (0, o.forwardRef)((e, t) => (0, i.jsx)(r, { forwardRef: t, ...e }));
            var c = s(39684),
                u = s.n(c);
            let d = (e) => {
                    let { style: t, forwardRef: s, withFooter: l, withHeader: o, withForceScroll: r, ...n } = e;
                    return (0, i.jsx)('div', {
                        className: (0, a.$)(u().scroller, { [u().scroller_withFooter]: l, [u().scroller_withHeader]: o, [u().scroller_withForceScroll]: r }),
                        style: { ...t },
                        ref: s,
                        ...n,
                        tabIndex: -1,
                    });
                },
                m = (0, o.forwardRef)((e, t) => (0, i.jsx)(d, { forwardRef: t, ...e }));
            var _ = s(62060),
                h = s(31417);
            let b = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: s,
                            onRangeHandler: a,
                            debounceDurationInMs: l = 100,
                            totalCount: r = 0,
                            shouldTriggerRangeChangedOn: n = [],
                            endReached: c,
                            ...u
                        } = e,
                        [d, m] = (0, o.useState)(null),
                        b = (0, o.useMemo)(
                            () =>
                                (0, _.A)((e) => {
                                    if ((null == a || a(e), n.length > 0 && m(e), t && s)) {
                                        let i = Math.floor(e.endIndex / t) + 1,
                                            a = Math.floor(e.startIndex / t);
                                        for (let e = a; e < i; e++) s(e);
                                    }
                                }, l),
                            [l, a, t, s, n],
                        );
                    (0, o.useEffect)(() => {
                        n.length > 0 && d && b(d);
                    }, n);
                    let p = (0, o.useMemo)(() => {
                        if (c)
                            return (0, _.A)((e) => {
                                c(e);
                            }, l);
                    }, [c, l]);
                    return (0, i.jsx)(h.sN, { rangeChanged: b, totalCount: r, endReached: p, ...u });
                },
                p = (e) => {
                    let {
                            className: t,
                            customComponents: s,
                            onGetDataByPage: r,
                            onGetDataByRange: c,
                            itemClassName: d,
                            itemContentCallback: _,
                            listClassName: h,
                            overscan: p = 700,
                            pageSize: g = 20,
                            totalCount: A,
                            totalRequests: v,
                            debounceDurationInMs: x,
                            initialItemCount: C,
                            minInitialItemCount: I = 20,
                            handleRef: y,
                            alwaysShowScrollbar: E = !1,
                            testId: N,
                            isMobileLayout: L = !1,
                            shouldTriggerRangeChangedOn: f,
                            ...O
                        } = e,
                        [P, S] = (0, o.useState)(!1),
                        j = (0, o.useMemo)(
                            () =>
                                (0, l.A)((e) => {
                                    S(e);
                                }, 100),
                            [],
                        ),
                        M = (0, o.useMemo)(() => {
                            var e, t;
                            return L
                                ? {
                                      Scroller: m,
                                      List: null != (e = null == s ? void 0 : s.List) ? e : n,
                                      Item: null == s ? void 0 : s.Item,
                                      ScrollSeekPlaceholder: null == s ? void 0 : s.ScrollSeekPlaceholder,
                                  }
                                : {
                                      Scroller: m,
                                      List: null != (t = null == s ? void 0 : s.List) ? t : n,
                                      Item: null == s ? void 0 : s.Item,
                                      Header: null == s ? void 0 : s.Header,
                                      Footer: null == s ? void 0 : s.Footer,
                                      ScrollSeekPlaceholder: null == s ? void 0 : s.ScrollSeekPlaceholder,
                                  };
                        }, [s, v, L]),
                        T = C ? Math.min(C, I) : void 0;
                    return (0, i.jsxs)('div', {
                        className: (0, a.$)(u().root, { [u().root_scrolling]: P || E, [u().root_notScrolling]: !P && !E }, t),
                        'data-test-id': N,
                        children: [
                            L && (null == s ? void 0 : s.Header) && s.Header(),
                            (0, i.jsx)(b, {
                                overscan: p,
                                components: M,
                                listClassName: h,
                                itemClassName: d,
                                isScrolling: j,
                                itemContent: _,
                                scrollerRef: y,
                                totalCount: A,
                                pageSize: g,
                                onPageHandler: r,
                                onRangeHandler: c,
                                debounceDurationInMs: x,
                                initialItemCount: T,
                                shouldTriggerRangeChangedOn: f,
                                ...O,
                            }),
                            L && (null == s ? void 0 : s.Footer) && s.Footer(),
                        ],
                    });
                };
        },
        50308: (e, t, s) => {
            'use strict';
            s.d(t, { e: () => l });
            var i = s(32290),
                a = s(89020);
            let l = (e) => {
                let {
                    isActive: t,
                    itemClassName: s,
                    round: l,
                    centered: o,
                    withInfo: r,
                    count: n = 10,
                    shimmerClassName: c,
                    linesCount: u,
                    'aria-label': d,
                    withSubcover: m,
                } = e;
                return Array.from(Array(n).keys()).map((e) =>
                    (0, i.jsx)(
                        a.V,
                        { isActive: t, linesCount: u, className: s, round: l, centered: o, withInfo: r, withSubcover: m, 'aria-label': d, shimmerClassName: c },
                        e,
                    ),
                );
            };
        },
        55556: (e) => {
            e.exports = {
                root: 'Login_root__VtFg_',
                title: 'Login_title__dqQz1',
                important: 'Login_important__Z8S9I',
                text: 'Login_text__1uju5',
                button: 'Login_button__ZYvZY',
            };
        },
        57190: (e) => {
            e.exports = {
                root: 'CollectionAlbumsPageHeader_root__87L_c',
                container: 'CollectionAlbumsPageHeader_container__96cIo',
                title: 'CollectionAlbumsPageHeader_title__1Ps8d',
                tabs: 'CollectionAlbumsPageHeader_tabs__P4GTY',
                tab: 'CollectionAlbumsPageHeader_tab__JSFBc',
                tabsShimmer: 'CollectionAlbumsPageHeader_tabsShimmer__fGlR0',
                tabShimmer: 'CollectionAlbumsPageHeader_tabShimmer__9hCc6',
                staticHeader: 'CollectionAlbumsPageHeader_staticHeader__YNfX4',
                important: 'CollectionAlbumsPageHeader_important__0dgC2',
                stickyHeader: 'CollectionAlbumsPageHeader_stickyHeader__L_1IS',
            };
        },
        58054: (e, t, s) => {
            'use strict';
            s.d(t, { w: () => C });
            var i = s(32290),
                a = s(63618),
                l = s(96103),
                o = s(60900),
                r = s(39407),
                n = s(21732),
                c = s(71926),
                u = s(14858),
                d = s(8626),
                m = s(31010),
                _ = s(61945),
                h = s(57594),
                b = (function (e) {
                    return (
                        (e.YANDEX = 'YANDEX'),
                        (e.YANDEX_PROJECTS = 'YANDEX_PROJECTS'),
                        (e.COPYRIGHT_HOLDER = 'COPYRIGHT_HOLDER'),
                        (e.AGREEMENT = 'AGREEMENT'),
                        (e.RECOMMENDATION_RULES = 'RECOMMENDATION_RULES'),
                        (e.HELP = 'HELP'),
                        (e.PRIVACY_POLICY = 'PRIVACY_POLICY'),
                        e
                    );
                })({});
            let p = (e, t, s) => {
                switch (e) {
                    case b.YANDEX:
                        if ('ru' === t) return 'https://ya.ru';
                        return;
                    case b.YANDEX_PROJECTS:
                        return 'https://yandex.'.concat(t, '/all?lang=').concat(s);
                    case b.COPYRIGHT_HOLDER:
                        return 'https://yandex.'.concat(t, '/support/music/performers-and-copyright-holders/copyright.html?lang=').concat(s);
                    case b.AGREEMENT:
                        return 'https://yandex.ru/legal/music_termsofuse?lang='.concat(s);
                    case b.RECOMMENDATION_RULES:
                        return 'https://music.yandex.ru/legal/recommendations/ru/#music';
                    case b.HELP:
                        return 'https://yandex.'.concat(t, '/support/music/index.html?lang=').concat(s);
                    case b.PRIVACY_POLICY:
                        return 'https://yandex.'.concat(t, '/legal/confidential/').concat(s);
                }
            };
            var g = s(61258),
                A = s(77088),
                v = s.n(A);
            let x = (0, l.PA)((e) => {
                    let { className: t } = e,
                        { location: s } = (0, h.g)(),
                        { formatDate: l } = (0, o.A)(),
                        { language: u } = (0, _.h)();
                    return (0, i.jsxs)('div', {
                        className: (0, a.$)(v().copyrights, t),
                        'data-test-id': n.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, i.jsxs)(c.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: v().text,
                                children: [
                                    '\xa9 ',
                                    l(new Date(), (0, d.m)()),
                                    ' \xa0',
                                    (0, i.jsx)(g.N, {
                                        target: '_blank',
                                        href: p(b.YANDEX, s.tld, u),
                                        className: (0, a.$)(v().copyrightLink, v().yandexMusicLink),
                                        'data-test-id': n.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: (0, i.jsx)(r.A, { id: 'footer.yandex-music' }),
                                    }),
                                ],
                            }),
                            (0, i.jsx)(c.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, i.jsx)(g.N, {
                                target: '_blank',
                                href: p(b.YANDEX_PROJECTS, s.tld, u),
                                className: v().copyrightLink,
                                'data-test-id': n.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: (0, i.jsx)(r.A, { id: 'footer.yandex-project' }),
                            }),
                        ],
                    });
                }),
                C = (0, l.PA)((e) => {
                    var t;
                    let { className: s } = e,
                        { user: l, location: o } = (0, h.g)(),
                        { isEnabled: d } = null != (t = (0, m.P)()) ? t : {},
                        { language: A } = (0, _.h)(),
                        C = (0, u.w)(!0),
                        I = ((e) => {
                            let { platform: t, tld: s, language: a, userRegion: l } = e,
                                o = { title: (0, i.jsx)(r.A, { id: 'footer.links-copyright-holders' }), url: p(b.COPYRIGHT_HOLDER, s, a) },
                                n = { title: (0, i.jsx)(r.A, { id: 'footer.links-privacy-policy' }), url: p(b.PRIVACY_POLICY, s, a) },
                                c = { title: (0, i.jsx)(r.A, { id: 'footer.links-terms' }), url: p(b.AGREEMENT, s, a) },
                                u = { title: (0, i.jsx)(r.A, { id: 'footer.links-recommendation-rules' }), url: p(b.RECOMMENDATION_RULES, s, a) },
                                d = { title: (0, i.jsx)(r.A, { id: 'footer.links-help' }), url: p(b.HELP, s, a) };
                            switch (t) {
                                case 'spa':
                                case 'web': {
                                    let e = [o, c, u];
                                    return 'ru' === l && e.push(n), e.push(d), e;
                                }
                                case 'desktop':
                                    return [o, c, u, d];
                            }
                        })({ platform: 'desktop', tld: o.tld, language: A, userRegion: l.account.data.userSessionRegionIso });
                    return (0, i.jsxs)('footer', {
                        className: (0, a.$)(v().root, v().important, { [v().root_withOffsetForDeeplink]: d }, s),
                        'data-test-id': n.S7.FOOTER,
                        children: [
                            (0, i.jsxs)('div', {
                                className: v().links,
                                children: [
                                    (0, i.jsx)('ol', {
                                        className: v().list,
                                        'data-test-id': n.S7.FOOTER_LINKS_LIST,
                                        children: I.map((e) => {
                                            let { title: t, url: s } = e;
                                            return (0, i.jsx)(
                                                'li',
                                                {
                                                    className: v().item,
                                                    children: (0, i.jsx)(g.N, {
                                                        target: '_blank',
                                                        href: s,
                                                        className: v().link,
                                                        'data-test-id': n.S7.FOOTER_LINK,
                                                        children: t,
                                                    }),
                                                },
                                                s,
                                            );
                                        }),
                                    }),
                                    (0, i.jsx)(c.HL, {
                                        variant: 'span',
                                        type: 'text',
                                        size: 'm',
                                        weight: 'medium',
                                        className: v().explicitText,
                                        tabIndex: 0,
                                        dangerouslySetInnerHTML: { __html: C },
                                        'data-test-id': n.S7.FOOTER_DISCLAIMER_TEXT,
                                    }),
                                ],
                            }),
                            (0, i.jsx)(x, {}),
                        ],
                    });
                });
        },
        71670: (e, t, s) => {
            'use strict';
            s.d(t, { X: () => a });
            var i = s(55178);
            let a = () =>
                (0, i.useCallback)((e) => {
                    {
                        let t = window.history.state;
                        window.history.replaceState(t, '', e);
                    }
                }, []);
        },
        73654: (e, t, s) => {
            'use strict';
            s.d(t, { P: () => N });
            var i = s(32290),
                a = s(92708),
                l = s(55178),
                o = s(60900),
                r = s(90346),
                n = s(45477),
                c = s(75582),
                u = s(57594),
                d = s(90357),
                m = s(63618),
                _ = s(39407),
                h = s(21732),
                b = s(74196),
                p = s(71926),
                g = s(29038),
                A = s(11323),
                v = s(61258),
                x = s(58534),
                C = s(80271),
                I = s.n(C);
            let y = (e) => {
                    let { closeToast: t, albumTitle: s, coverUri: a, isPresave: r, entityTitle: n, className: c } = e,
                        { formatMessage: u } = (0, o.A)(),
                        d = (0, l.useMemo)(
                            () => (r ? (0, i.jsx)(_.A, { id: 'notifications-info.added-to' }) : (0, i.jsx)(_.A, { id: 'notifications-info.removed-from' })),
                            [r],
                        ),
                        C = (0, l.useMemo)(
                            () => (r ? (0, i.jsx)(_.A, { id: 'notifications-info.to-collection' }) : (0, i.jsx)(_.A, { id: 'notifications-info.from-collection' })),
                            [r],
                        ),
                        y = (0, l.useMemo)(
                            () =>
                                r
                                    ? u({ id: 'notifications-info.album-added-to-collection-aria-label' }, { entity: n })
                                    : u({ id: 'notifications-info.album-removed-from-collection-aria-label' }, { entity: n }),
                            [r, n, u],
                        ),
                        E = (0, l.useMemo)(
                            () =>
                                (0, i.jsxs)(p.HL, {
                                    className: I().text,
                                    variant: 'div',
                                    type: 'controls',
                                    size: 'm',
                                    'data-test-id': h.S7.BASE_NOTIFICATION_PRESAVE_TEXT,
                                    'aria-hidden': !0,
                                    children: [
                                        (0, i.jsx)(_.A, { id: 'entity-names.album' }),
                                        '\xa0',
                                        (0, i.jsxs)(p.HL, { className: I().title, variant: 'span', type: 'controls', size: 'm', lineClamp: 1, children: [n, '\xa0'] }),
                                        d,
                                        '\xa0',
                                        (0, i.jsx)(v.N, {
                                            className: I().link,
                                            href: '/collection/albums?tab='.concat(g.H.UPCOMING_ALBUMS),
                                            title: String(C),
                                            children: (0, i.jsx)(p.HL, { variant: 'span', type: 'controls', size: 'm', lineClamp: 1, children: C }),
                                        }),
                                    ],
                                }),
                            [n, d, C],
                        );
                    return (0, i.jsx)(x.$, {
                        className: (0, m.$)(I().root, c),
                        message: (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(b.q, { children: (0, i.jsx)('p', { role: 'alert', 'aria-label': y }) }), E] }),
                        cover: (0, i.jsx)(A.B, { className: I().image, src: a, size: 100, fit: 'cover', alt: s, withAvatarReplace: !0 }),
                        closeToast: t,
                        coverRadius: 's',
                    });
                },
                E = (e) => {
                    let { upcomingAlbum: t, closeToast: s } = e;
                    return (0, i.jsx)(y, { closeToast: s, albumTitle: t.title, coverUri: t.coverUri, entityTitle: t.title, isPresave: t.isPresave });
                },
                N = (e) => {
                    let { user: t } = (0, u.g)(),
                        { notify: s } = (0, c.l)(),
                        [m, _] = (0, l.useState)(!1),
                        { formatMessage: h } = (0, o.A)();
                    return (0, l.useCallback)(async () => {
                        if (!t.isAuthorized)
                            return void s((0, i.jsx)(d.h, { error: h({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: n.u.ERROR });
                        if (m) return;
                        let l = { ...(0, a.HO)(e), isPresave: !e.isPresave };
                        _(!0);
                        let o = await e.toggleLike();
                        _(!1),
                            o === r.J.OK
                                ? s((0, i.jsx)(E, { upcomingAlbum: l }), { containerId: n.u.INFO })
                                : s((0, i.jsx)(d.h, { error: h({ id: 'error-messages.error-during-action' }) }), { containerId: n.u.ERROR });
                    }, [t.isAuthorized, m, e, s, h]);
                };
        },
        73744: (e) => {
            e.exports = { root: 'CollectionAlbumsPage_root__qMtcC' };
        },
        77088: (e) => {
            e.exports = {
                root: 'Footer_root__ugyur',
                root_withOffsetForDeeplink: 'Footer_root_withOffsetForDeeplink__qcs6U',
                important: 'Footer_important__mCXZp',
                links: 'Footer_links__3kOY7',
                list: 'Footer_list__0sCXQ',
                copyrights: 'Footer_copyrights__IsnbJ',
                link: 'Footer_link__av50q',
                copyrightLink: 'Footer_copyrightLink__6NOkg',
                yandexMusicLink: 'Footer_yandexMusicLink__k7ILf',
                explicitText: 'Footer_explicitText__Px3wr',
                text: 'Footer_text__lMPwl',
                empty: 'Footer_empty__RR_zf',
            };
        },
        80271: (e) => {
            e.exports = {
                link: 'BaseNotificationPresave_link__4uQhM',
                title: 'BaseNotificationPresave_title__bEloI',
                text: 'BaseNotificationPresave_text__3Kv9j',
                image: 'BaseNotificationPresave_image__Hb7ve',
            };
        },
        83716: (e) => {
            e.exports = {
                root: 'CollectionAlbumsPageEmpty_root__7yn1F',
                icon: 'CollectionAlbumsPageEmpty_icon__XFf9x',
                title: 'CollectionAlbumsPageEmpty_title__hMQde',
                text: 'CollectionAlbumsPageEmpty_text__jp_lj',
            };
        },
        90346: (e, t, s) => {
            'use strict';
            var i;
            s.d(t, { J: () => i }),
                (function (e) {
                    (e.OK = 'ok'), (e.ERROR = 'error');
                })(i || (i = {}));
        },
        94218: (e, t, s) => {
            'use strict';
            s.d(t, { H: () => m });
            var i = s(32290),
                a = s(21916),
                l = s(39407),
                o = s(21732),
                r = s(91027),
                n = s(63423),
                c = s(71926),
                u = s(70204),
                d = s(34186);
            let m = (e) => {
                let { size: t = 'm', variant: s = 'default', withRipple: m = !0, buttonText: _, isBlock: h, key: b, className: p } = e,
                    g = (0, a.useRouter)(),
                    A = (0, d.N)().get(u.QG),
                    v = (0, r.c)(() => {
                        A.authorizationUrl && g.push(A.authorizationUrl);
                    });
                return (0, i.jsx)(
                    n.$,
                    {
                        onClick: v,
                        className: p,
                        isBlock: h,
                        color: 'primary',
                        variant: s,
                        size: t,
                        radius: 'xxxl',
                        withRipple: m,
                        'data-test-id': o.S7.UNAUTHORIZED_BUTTON,
                        children: _ || (0, i.jsx)(c.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, i.jsx)(l.A, { id: 'authorization.enter-button' }) }),
                    },
                    b,
                );
            };
        },
        97201: (e, t, s) => {
            'use strict';
            s.d(t, { K: () => i });
            var i = (function (e) {
                return (
                    (e.TAB = 'tab'),
                    (e.ACTIVE_TAB = 'activeTab'),
                    (e.BLOCK = 'block'),
                    (e.IDS = 'ids'),
                    (e.ACTIVE_INDEX = 'activeIndex'),
                    (e.SORT = 'sort'),
                    (e.OPEN_TRAILER = 'openTrailer'),
                    (e.DEEPLINK = 'deeplink'),
                    (e.SEEDS = 'seeds'),
                    (e.STATION_ID = 'stationId'),
                    (e.OPEN_PLAYER = 'openPlayer'),
                    (e.SCREEN = 'screen'),
                    (e.CLID = 'clid'),
                    (e.UTM_SOURCE = 'utm_source'),
                    (e.YCLID = 'yclid'),
                    (e.UTM_CAMPAIGN = 'utm_campaign'),
                    (e.UTM_MEDIUM = 'utm_medium'),
                    (e.REF_ID = 'ref_id'),
                    (e.MULTIVIBE_INVITE_ROOM_ID = 'multivibeInviteRoomId'),
                    e
                );
            })({});
        },
    },
    (e) => {
        e.O(
            0,
            [
                5718, 7034, 7231, 7972, 6347, 3183, 9763, 6639, 7258, 3379, 3647, 8091, 9103, 6706, 8892, 2536, 66, 5835, 2812, 8035, 551, 2732, 1410, 1417, 6477, 7275,
                2586, 8347, 4522, 7702, 6874, 861, 782, 4668, 9740, 1175, 14, 8915, 8816, 2563, 4797, 4220, 9562, 7358,
            ],
            () => e((e.s = 44273)),
        ),
            (_N_E = e.O());
    },
]);
