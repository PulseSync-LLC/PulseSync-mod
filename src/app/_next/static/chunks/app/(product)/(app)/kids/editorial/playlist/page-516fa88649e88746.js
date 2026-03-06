(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5063],
    {
        1019: (e, t, a) => {
            'use strict';
            a.d(t, { KidsEditorialAlbumsPage: () => y });
            var i = a(54486),
                n = a(50420),
                s = a(28303),
                o = a(97396),
                r = a(61910),
                l = a(43426),
                d = a(31500),
                u = a(8817),
                g = a(27510),
                c = a(97800),
                m = a(82644),
                _ = a(80156),
                p = a(33276),
                h = a(83252),
                N = a(80585),
                x = a(22603),
                f = a.n(x);
            let y = (0, s.PA)((e) => {
                var t, a, s, x;
                let { id: y } = e,
                    {
                        kids: { kidsEditorialAlbumSubpage: P },
                        settings: { isMobile: j },
                    } = (0, h.Pjs)(),
                    S = (0, h.W6M)(),
                    { contentScrollRef: E, setContentScrollRef: v } = (0, h.gKY)(),
                    { formatMessage: b } = (0, l.A)(),
                    C = (0, u.c)((e) => {
                        P.getAlbums({ page: e, pageSize: 20 });
                    });
                P.isNotFound && (0, o.notFound)(),
                    (0, r.useEffect)(
                        () => () => {
                            P.reset();
                        },
                        [P],
                    );
                let L = (0, g.L)(() => ({ Footer: () => (0, i.jsx)(N.A, { children: (0, i.jsx)(N.wi, { className: f().footer }) }) }));
                if (
                    ((0, h.Jzs)(P.isResolved),
                    (0, h.XcE)(P.pagesLoader, C),
                    P.isNeededToLoad && (0, r.use)(P.getData({ id: y, page: 0, pageSize: 20 })),
                    P.isSomethingWrong)
                )
                    return (0, i.jsx)(m.w, {});
                let D = P.isLoading ? 20 : null != (s = null == (a = P.pagesLoader) || null == (t = a.pager) ? void 0 : t.total) ? s : 0;
                return (0, i.jsx)(h.nVz, {
                    pageId: h._Q$.KIDS_EDITORIAL_ALBUMS,
                    children: (0, i.jsx)(p.hO, {
                        scrollElement: E,
                        outerTitle: P.title,
                        children: (0, i.jsxs)('div', {
                            className: f().root,
                            ...(0, d.Am)(d.Xk.kids.KIDS_EDITORIAL_ALBUMS),
                            children: [
                                (0, i.jsx)(N.Y9, {
                                    variant: N.Vw.TEXT,
                                    withForwardControl: !1,
                                    withBackwardControl: S.canBack,
                                    children: (0, i.jsx)(c.Heading, { variant: 'h2', weight: 'bold', size: 'xl', lineClamp: 1, children: P.title }),
                                }),
                                (0, i.jsx)(N.$$, {
                                    context: { listAriaLabel: b({ id: 'mixes.albums-list' }, { genreName: P.title || '' }) },
                                    className: (0, n.$)(f().scrollContainer, f().important),
                                    customComponents: L,
                                    itemContentCallback: (e) => {
                                        let t = P.albums[e],
                                            a = b({ id: 'loading-messages.entity-is-loading' }, { entityName: b({ id: 'entity-names.album' }) });
                                        return t
                                            ? (0, i.jsx)(_.aX, { withLikesCount: !0, album: t, contentLinesCount: 3 }, t.id)
                                            : (0, i.jsx)(N.Vt, { isActive: !0, 'aria-label': a });
                                    },
                                    totalCount: D,
                                    onGetDataByPage: C,
                                    pageSize: 20,
                                    totalRequests: null != (x = P.pagesLoader.requestsCount) ? x : 0,
                                    listClassName: f().content,
                                    itemClassName: f().item,
                                    handleRef: v,
                                    isMobileLayout: j,
                                    useWindowScroll: j,
                                }),
                            ],
                        }),
                    }),
                });
            });
        },
        13127: (e, t, a) => {
            'use strict';
            a.d(t, { jM: () => m.KidsCategoryPage, u3: () => _.KidsEditorialAlbumsPage, bU: () => p.KidsEditorialPlaylistsPage, GY: () => c });
            var i = a(83252),
                n = a(93064),
                s = a(14287),
                o = a(46423),
                r = a(26433);
            let l = n.gK
                .compose(
                    n.gK.model('KidsEditorialAlbumPage', {
                        errorStatusCode: n.gK.maybeNull(n.gK.number),
                        title: n.gK.maybeNull(n.gK.string),
                        albumsData: n.gK.array(n.gK.model({ id: n.gK.number })),
                        pagesLoader: (0, r.Ij)(o.GI),
                    }),
                    r.XT,
                )
                .views((e) => {
                    let t = {
                        get isLoading() {
                            return e.isNeededToLoad || e.loadingState === i.GuX.PENDING;
                        },
                        get isNotFound() {
                            let t = e.errorStatusCode === s.X1.NOT_FOUND || e.errorStatusCode === s.X1.BAD_REQUEST,
                                a = e.pagesLoader.isEmpty;
                            return (e.isRejected && t) || a;
                        },
                        get isSomethingWrong() {
                            return e.isRejected && !t.isNotFound;
                        },
                        get albums() {
                            var a;
                            return null != (a = e.pagesLoader.items) ? a : [];
                        },
                    };
                    return t;
                })
                .actions((e) => {
                    let t = {
                        getAlbums: (0, n.L3)(function* (t) {
                            let { page: a = 0, pageSize: r = 20 } = t,
                                { albumResource: l, modelActionsLogger: d } = (0, n._$)(e);
                            if (e.loadingState === i.GuX.RESOLVE && e.pagesLoader.isPageNeedToLoad(a)) {
                                e.pagesLoader.setPageState(a, i.GuX.PENDING);
                                try {
                                    let t = a * r,
                                        i = e.albumsData.slice(t, t + r).map((e) => e.id),
                                        n = yield l.getAlbums({ albumIds: i }),
                                        s = { page: a, perPage: r, total: e.albumsData.length },
                                        d = n.map(o.e7);
                                    e.pagesLoader.setItems(d, { page: a, pager: s });
                                } catch (t) {
                                    d.error(t),
                                        e.pagesLoader.setItems(null, { responseStatus: i.FlZ.ERROR, page: a }),
                                        t instanceof s.GX &&
                                            (t.statusCode === s.X1.NOT_FOUND || t.statusCode === s.X1.BAD_REQUEST) &&
                                            (e.errorStatusCode = s.X1.NOT_FOUND),
                                        e.loadingState !== i.GuX.IDLE && (e.loadingState = i.GuX.REJECT);
                                }
                            }
                        }),
                        getData: (0, n.L3)(function* (a) {
                            let { id: o, page: r = 0, pageSize: l = 20 } = a,
                                { childrenLandingResource: d, modelActionsLogger: u } = (0, n._$)(e);
                            if (e.loadingState !== i.GuX.PENDING)
                                try {
                                    var g;
                                    e.loadingState = i.GuX.PENDING;
                                    let a = yield d.getEditorialAlbum({ id: o });
                                    (e.title = a.title),
                                        (e.albumsData = (0, n.wg)((null != (g = a.entities) ? g : []).map((e) => ({ id: e })))),
                                        e.loadingState !== i.GuX.IDLE && (e.loadingState = i.GuX.RESOLVE),
                                        yield t.getAlbums({ page: r, pageSize: l });
                                } catch (t) {
                                    u.error(t),
                                        t instanceof s.GX &&
                                            (t.statusCode === s.X1.NOT_FOUND || t.statusCode === s.X1.BAD_REQUEST) &&
                                            (e.errorStatusCode = s.X1.NOT_FOUND),
                                        e.loadingState !== i.GuX.IDLE && (e.loadingState = i.GuX.REJECT);
                                }
                        }),
                        reset() {
                            (e.loadingState = i.GuX.IDLE), (e.title = null), e.pagesLoader.reset(), (e.albumsData = (0, n.wg)([])), (e.errorStatusCode = null);
                        },
                    };
                    return t;
                });
            var d = a(52733);
            let u = n.gK
                .compose(
                    n.gK.model('KidsEditorialPlaylistPage', {
                        errorStatusCode: n.gK.maybeNull(n.gK.number),
                        title: n.gK.maybeNull(n.gK.string),
                        playlistsData: n.gK.array(n.gK.model({ uid: n.gK.number, kind: n.gK.number })),
                        pagesLoader: (0, r.Ij)(d.$o),
                    }),
                    r.XT,
                )
                .views((e) => {
                    let t = {
                        get isLoading() {
                            return e.isNeededToLoad || e.loadingState === i.GuX.PENDING;
                        },
                        get isNotFound() {
                            let t = e.errorStatusCode === s.X1.NOT_FOUND || e.errorStatusCode === s.X1.BAD_REQUEST,
                                a = e.pagesLoader.isEmpty;
                            return (e.isRejected && t) || a;
                        },
                        get isSomethingWrong() {
                            return e.isRejected && !t.isNotFound;
                        },
                        get playlists() {
                            var a;
                            return null != (a = e.pagesLoader.items) ? a : [];
                        },
                    };
                    return t;
                })
                .actions((e) => {
                    let t = {
                        getPlaylists: (0, n.L3)(function* (t) {
                            let { page: a = 0, pageSize: o = 20 } = t,
                                { playlistsResource: r, modelActionsLogger: l } = (0, n._$)(e);
                            if (e.loadingState === i.GuX.RESOLVE && e.pagesLoader.isPageNeedToLoad(a)) {
                                e.pagesLoader.setPageState(a, i.GuX.PENDING);
                                try {
                                    let t = a * o,
                                        i = e.playlistsData.slice(t, t + o),
                                        n = yield r.getPlaylists({ playlistIds: i.map((e) => ''.concat(e.uid, ':').concat(e.kind)), resumeStream: !1 }),
                                        s = { page: a, perPage: o, total: e.playlistsData.length },
                                        l = n.playlists.map(d.jX);
                                    e.pagesLoader.setItems(l, { page: a, pager: s });
                                } catch (t) {
                                    l.error(t),
                                        e.pagesLoader.setItems(null, { responseStatus: i.FlZ.ERROR, page: a }),
                                        t instanceof s.GX &&
                                            (t.statusCode === s.X1.NOT_FOUND || t.statusCode === s.X1.BAD_REQUEST) &&
                                            (e.errorStatusCode = s.X1.NOT_FOUND),
                                        e.loadingState !== i.GuX.IDLE && (e.loadingState = i.GuX.REJECT);
                                }
                            }
                        }),
                        getData: (0, n.L3)(function* (a) {
                            let { id: o, page: r = 0, pageSize: l = 20 } = a,
                                { childrenLandingResource: d, modelActionsLogger: u } = (0, n._$)(e);
                            if (e.loadingState !== i.GuX.PENDING)
                                try {
                                    var g;
                                    e.loadingState = i.GuX.PENDING;
                                    let a = yield d.getEditorialPlaylist({ id: o });
                                    (e.title = a.title),
                                        (e.playlistsData = (0, n.wg)((null != (g = a.entities) ? g : []).map((e) => ({ uid: e.uid, kind: e.kind })))),
                                        e.loadingState !== i.GuX.IDLE && (e.loadingState = i.GuX.RESOLVE),
                                        yield t.getPlaylists({ page: r, pageSize: l });
                                } catch (t) {
                                    u.error(t),
                                        t instanceof s.GX &&
                                            (t.statusCode === s.X1.NOT_FOUND || t.statusCode === s.X1.BAD_REQUEST) &&
                                            (e.errorStatusCode = s.X1.NOT_FOUND),
                                        e.loadingState !== i.GuX.IDLE && (e.loadingState = i.GuX.REJECT);
                                }
                        }),
                        reset() {
                            (e.loadingState = i.GuX.IDLE), (e.title = null), e.pagesLoader.reset(), (e.playlistsData = (0, n.wg)([])), (e.errorStatusCode = null);
                        },
                    };
                    return t;
                });
            var g = a(6664);
            let c = n.gK.model('KidsPage', { landing: g.Ju, kidsEditorialPlaylistSubpage: u, kidsEditorialAlbumSubpage: l });
            var m = a(25945),
                _ = a(1019),
                p = a(49841);
            a(67923), a(75669);
        },
        22603: (e) => {
            e.exports = {
                root: 'KidsEditorialAlbumsPage_root__7rHF8',
                scrollContainer: 'KidsEditorialAlbumsPage_scrollContainer__nQVlt',
                important: 'KidsEditorialAlbumsPage_important__hmmxn',
                footer: 'KidsEditorialAlbumsPage_footer__6rwU1',
                item: 'KidsEditorialAlbumsPage_item__Wc243',
                content: 'KidsEditorialAlbumsPage_content__u3zcW',
            };
        },
        24993: (e) => {
            e.exports = {
                root: 'KidsEditorialPlaylistsPage_root__HeHqc',
                scrollContainer: 'KidsEditorialPlaylistsPage_scrollContainer__Hy6HY',
                important: 'KidsEditorialPlaylistsPage_important__283cd',
                footer: 'KidsEditorialPlaylistsPage_footer___UaP5',
                item: 'KidsEditorialPlaylistsPage_item__0wBk2',
                content: 'KidsEditorialPlaylistsPage_content__6wWkP',
            };
        },
        25945: (e, t, a) => {
            'use strict';
            a.d(t, { KidsCategoryPage: () => j });
            var i = a(54486),
                n = a(50420),
                s = a(28303),
                o = a(97396),
                r = a(61910),
                l = a(31500),
                d = a(56231),
                u = a(97800),
                g = a(6664),
                c = a(82644),
                m = a(33276),
                _ = a(83252),
                p = a(80585),
                h = a(44193),
                N = a.n(h),
                x = a(27510),
                f = a(91582),
                y = a.n(f);
            let P = (0, s.PA)(() => {
                    let { experiments: e } = (0, _.Pjs)(),
                        t = e.checkExperiment(_.zal.WebNextWaveAgentExperiment, 'on'),
                        a = (0, x.L)(() =>
                            t ? (0, i.jsx)(p.OY, { isShimmerVisible: !0, isShimmerActive: !0, isShimmerCentered: !0 }) : (0, i.jsx)(g.Rj, { isActive: !0, length: 4 }),
                        );
                    return (0, i.jsxs)('div', {
                        className: y().root,
                        children: [
                            (0, i.jsx)('div', { children: a }),
                            (0, i.jsx)(p.OY, { isShimmerVisible: !0, isShimmerActive: !0 }),
                            (0, i.jsx)(p.OY, { isShimmerVisible: !0, isShimmerActive: !0 }),
                        ],
                    });
                }),
                j = (0, s.PA)((e) => {
                    let { categoryId: t } = e,
                        { kids: a, experiments: s } = (0, _.Pjs)(),
                        { contentScrollRef: h, setContentScrollRef: x } = (0, _.gKY)(),
                        f = (0, _.W6M)(),
                        y = s.checkExperiment(_.zal.WebNextNewNestedNonMusicLandings, 'on');
                    if (((0, r.useEffect)(() => () => a.landing.reset(), [a.landing]), (0, _.Jzs)(a.landing.isResolved), y)) {
                        let { href: e } = (0, _.uvd)('/landing/:skeleton', { params: { skeleton: 'category_kids_'.concat(t) } });
                        (0, o.redirect)(e);
                    }
                    a.landing.isLoadedAndEmpty && (0, o.notFound)();
                    let j = (0, g._9)(a.landing),
                        S = (0, r.useMemo)(
                            () =>
                                a.landing.isLoading || a.landing.isNeededToLoad
                                    ? (0, i.jsx)(P, {})
                                    : (0, i.jsx)(g.EA, { landing: a.landing, errorComponent: (0, i.jsx)(c.w, { className: N().error, withBackwardControl: !1 }) }),
                            [a.landing.loadingState, a.landing],
                        );
                    return (
                        a.landing.isNeededToLoad && (0, r.use)(a.landing.getChildrenSkeleton({ categoryId: t })),
                        (0, i.jsx)(_.nVz, {
                            pageId: _._Q$.KIDS_CATEGORY,
                            children: (0, i.jsxs)(m.hO, {
                                scrollElement: h,
                                outerTitle: a.landing.title,
                                children: [
                                    (0, i.jsx)(p.Y9, {
                                        variant: p.Vw.TEXT,
                                        withForwardControl: !1,
                                        withBackwardControl: f.canBack,
                                        children: (0, i.jsx)('div', {
                                            className: N().header,
                                            children: (0, i.jsx)(u.Heading, { variant: 'h1', weight: 'bold', size: 'xl', children: a.landing.title }),
                                        }),
                                    }),
                                    (0, i.jsxs)(d.N, {
                                        className: N().root,
                                        containerClassName: N().content,
                                        ref: x,
                                        ...(0, l.Am)(l.Xk.kids.KIDS_CATEGORY_PAGE),
                                        children: [
                                            (0, i.jsx)('div', { className: (0, n.$)(N().landing, { [N().landing_onlyWizard]: j }), children: S }),
                                            (0, i.jsx)(p.A, { children: (0, i.jsx)(p.wi, { className: N().footer }) }),
                                        ],
                                    }),
                                ],
                            }),
                        })
                    );
                });
        },
        27005: (e) => {
            e.exports = {
                root: 'KidsPage_root__yycsJ',
                content: 'KidsPage_content__08pPR',
                header: 'KidsPage_header__2Gk2l',
                landing: 'KidsPage_landing__3QZZj',
                landing_onlyWizard: 'KidsPage_landing_onlyWizard__xKyDo',
                footer: 'KidsPage_footer__p7SVD',
                error: 'KidsPage_error__qa7Qo',
            };
        },
        31622: (e, t, a) => {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'default', {
                    enumerable: !0,
                    get: function () {
                        return l;
                    },
                });
            let i = a(54486),
                n = a(61910),
                s = a(91165);
            function o(e) {
                return { default: e && 'default' in e ? e.default : e };
            }
            a(98944);
            let r = { loader: () => Promise.resolve(o(() => null)), loading: null, ssr: !0 },
                l = function (e) {
                    let t = { ...r, ...e },
                        a = (0, n.lazy)(() => t.loader().then(o)),
                        l = t.loading;
                    function d(e) {
                        let o = l ? (0, i.jsx)(l, { isLoading: !0, pastDelay: !0, error: null }) : null,
                            r = !t.ssr || !!t.loading,
                            d = r ? n.Suspense : n.Fragment,
                            u = t.ssr
                                ? (0, i.jsxs)(i.Fragment, { children: [null, (0, i.jsx)(a, { ...e })] })
                                : (0, i.jsx)(s.BailoutToCSR, { reason: 'next/dynamic', children: (0, i.jsx)(a, { ...e }) });
                        return (0, i.jsx)(d, { ...(r ? { fallback: o } : {}), children: u });
                    }
                    return (d.displayName = 'LoadableComponent'), d;
                };
        },
        36446: (e, t, a) => {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'default', {
                    enumerable: !0,
                    get: function () {
                        return n;
                    },
                });
            let i = a(45221)._(a(31622));
            function n(e, t) {
                var a;
                let n = {};
                'function' == typeof e && (n.loader = e);
                let s = { ...n, ...t };
                return (0, i.default)({ ...s, modules: null == (a = s.loadableGenerated) ? void 0 : a.modules });
            }
            ('function' == typeof t.default || ('object' == typeof t.default && null !== t.default)) &&
                void 0 === t.default.__esModule &&
                (Object.defineProperty(t.default, '__esModule', { value: !0 }), Object.assign(t.default, t), (e.exports = t.default));
        },
        42421: (e, t, a) => {
            'use strict';
            a.d(t, { M: () => i.NotFound });
            var i = a(65034);
        },
        44193: (e) => {
            e.exports = {
                root: 'KidsCategoryPage_root__bk7_R',
                content: 'KidsCategoryPage_content__LN0NB',
                header: 'KidsCategoryPage_header__Agys3',
                landing: 'KidsCategoryPage_landing__aSDYw',
                landing_onlyWizard: 'KidsCategoryPage_landing_onlyWizard__3EC9N',
                footer: 'KidsCategoryPage_footer__BQhqi',
                error: 'KidsCategoryPage_error__tSXF7',
            };
        },
        46215: (e) => {
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
        49841: (e, t, a) => {
            'use strict';
            a.d(t, { KidsEditorialPlaylistsPage: () => y });
            var i = a(54486),
                n = a(50420),
                s = a(28303),
                o = a(97396),
                r = a(61910),
                l = a(43426),
                d = a(31500),
                u = a(8817),
                g = a(27510),
                c = a(97800),
                m = a(82644),
                _ = a(33276),
                p = a(83909),
                h = a(83252),
                N = a(80585),
                x = a(24993),
                f = a.n(x);
            let y = (0, s.PA)((e) => {
                var t, a, s;
                let { id: x } = e,
                    {
                        kids: { kidsEditorialPlaylistSubpage: y },
                        settings: { isMobile: P },
                    } = (0, h.Pjs)(),
                    j = (0, h.W6M)(),
                    { contentScrollRef: S, setContentScrollRef: E } = (0, h.gKY)(),
                    { formatMessage: v } = (0, l.A)(),
                    b = (0, u.c)((e) => {
                        y.getPlaylists({ page: e, pageSize: 20 });
                    });
                y.isNotFound && (0, o.notFound)(),
                    (0, r.useEffect)(
                        () => () => {
                            y.reset();
                        },
                        [y],
                    );
                let C = (0, g.L)(() => ({ Footer: () => (0, i.jsx)(N.A, { children: (0, i.jsx)(N.wi, { className: f().footer }) }) }));
                if (
                    ((0, h.Jzs)(y.isResolved),
                    (0, h.XcE)(y.pagesLoader, b),
                    y.isNeededToLoad && (0, r.use)(y.getData({ id: x, page: 0, pageSize: 20 })),
                    y.isSomethingWrong)
                )
                    return (0, i.jsx)(m.w, {});
                let L = y.isLoading ? 20 : null != (a = null == (t = y.pagesLoader.pager) ? void 0 : t.total) ? a : 0;
                return (0, i.jsx)(h.nVz, {
                    pageId: h._Q$.KIDS_EDITORIAL_PLAYLISTS,
                    children: (0, i.jsx)(_.hO, {
                        scrollElement: S,
                        outerTitle: y.title,
                        children: (0, i.jsxs)('div', {
                            className: f().root,
                            ...(0, d.Am)(d.Xk.kids.KIDS_EDITORIAL_PLAYLISTS),
                            children: [
                                (0, i.jsx)(N.Y9, {
                                    variant: N.Vw.TEXT,
                                    withForwardControl: !1,
                                    withBackwardControl: j.canBack,
                                    children: (0, i.jsx)(c.Heading, { variant: 'h2', weight: 'bold', size: 'xl', lineClamp: 1, children: y.title }),
                                }),
                                (0, i.jsx)(N.$$, {
                                    context: { listAriaLabel: v({ id: 'mixes.playlists-list' }, { genreName: y.title || '' }) },
                                    className: (0, n.$)(f().scrollContainer, f().important),
                                    customComponents: C,
                                    itemContentCallback: (e) => {
                                        let t = y.playlists[e],
                                            a = v({ id: 'loading-messages.entity-is-loading' }, { entityName: v({ id: 'entity-names.playlist' }) });
                                        return t ? (0, i.jsx)(p.B6, { playlist: t, contentLinesCount: 3 }, t.key) : (0, i.jsx)(N.Vt, { isActive: !0, 'aria-label': a });
                                    },
                                    totalCount: L,
                                    onGetDataByPage: b,
                                    pageSize: 20,
                                    totalRequests: null != (s = y.pagesLoader.requestsCount) ? s : 0,
                                    listClassName: f().content,
                                    itemClassName: f().item,
                                    handleRef: E,
                                    isMobileLayout: P,
                                    useWindowScroll: P,
                                }),
                            ],
                        }),
                    }),
                });
            });
        },
        57249: (e, t, a) => {
            'use strict';
            e.exports = a.p + 'static/media/dotlottie-player.98f80c6ff3eca5ba.wasm';
        },
        58366: (e, t, a) => {
            Promise.resolve().then(a.bind(a, 82527));
        },
        63708: (e) => {
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
        65034: (e, t, a) => {
            'use strict';
            a.d(t, { NotFound: () => p });
            var i = a(54486),
                n = a(50420),
                s = a(28303),
                o = a(47713),
                r = a(77881),
                l = a(5956),
                d = a(97800),
                u = a(83252),
                g = a(80585),
                c = a(61910),
                m = a(46215),
                _ = a.n(m);
            let p = (0, s.PA)((e) => {
                let { className: t, title: a, description: s, iconVariant: m = 'musicLogo', iconClassName: p, iconSize: h } = e,
                    { contentRef: N } = (0, u.gKY)(),
                    x = (0, u.ZpR)(u.Zyd.main.href);
                (0, u.LZB)();
                let { handleNavigateToMain: f } = (0, u.D5F)(x);
                return (
                    (0, u.NBO)(!0),
                    !(function () {
                        let { location: e } = (0, u.Pjs)();
                        (0, c.useEffect)(
                            () => (
                                e.setNotFound(!0),
                                () => {
                                    e.setNotFound(!1);
                                }
                            ),
                            [e],
                        );
                    })(),
                    (0, i.jsxs)('div', {
                        className: (0, n.$)(_().root, { [_().root_desktop]: !N }, t),
                        children: [
                            (0, i.jsx)(g.Lh, { withBackwardFallback: '/', className: _().navigation, withForwardControl: !1 }),
                            (0, i.jsxs)('div', {
                                className: _().content,
                                children: [
                                    (0, i.jsx)(l.Icon, { className: (0, n.$)(_().icon, p), variant: m, size: h }),
                                    (0, i.jsx)(d.Heading, {
                                        className: (0, n.$)(_().title, _().important),
                                        variant: 'h3',
                                        size: 'xs',
                                        children: a || (0, i.jsx)(o.A, { id: 'page-error.page-does-not-exist' }),
                                    }),
                                    (0, i.jsx)(d.Caption, {
                                        className: (0, n.$)(_().text, _().important),
                                        variant: 'span',
                                        type: 'text',
                                        size: 'l',
                                        weight: 'normal',
                                        children: s || (0, i.jsx)(o.A, { id: 'page-error.page-does-not-exist-description' }),
                                    }),
                                    (0, i.jsx)(r.$, {
                                        onClick: f,
                                        className: _().button,
                                        role: 'link',
                                        color: 'secondary',
                                        size: 'l',
                                        radius: 'xxxl',
                                        children: (0, i.jsx)(d.Caption, {
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'm',
                                            children: (0, i.jsx)(o.A, { id: 'navigation.page-main' }),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    })
                );
            });
        },
        67923: (e, t, a) => {
            'use strict';
            a.d(t, { KidsNotFoundPage: () => l });
            var i = a(54486),
                n = a(28303),
                s = a(61910),
                o = a(42421),
                r = a(83252);
            let l = (0, n.PA)(() => {
                let { kids: e } = (0, r.Pjs)();
                return (
                    (0, s.useEffect)(
                        () => () => {
                            e.landing.reset();
                        },
                        [e.landing],
                    ),
                    (0, i.jsx)(o.M, {})
                );
            });
        },
        75312: (e, t, a) => {
            'use strict';
            a.d(t, { SomethingWentWrong: () => h });
            var i = a(54486),
                n = a(50420),
                s = a(28303),
                o = a(61910),
                r = a(43426),
                l = a(47713),
                d = a(77881),
                u = a(5956),
                g = a(97800),
                c = a(83252),
                m = a(80585),
                _ = a(63708),
                p = a.n(_);
            let h = (0, s.PA)((e) => {
                let { className: t, withBackwardControl: a = !0 } = e,
                    { formatMessage: s } = (0, r.A)(),
                    _ = s({ id: 'error-messages.something-went-wrong' });
                (0, c.CgZ)(_);
                let { sendRefreshEvent: h } = (0, c.cYT)(),
                    N = (0, o.useCallback)(() => {
                        h(), (window.location.href = c.Zyd.main.href);
                    }, [h]),
                    { contentRef: x } = (0, c.gKY)();
                return (0, i.jsxs)('div', {
                    className: (0, n.$)(p().root, t),
                    children: [
                        a &&
                            (0, i.jsx)(m.Lh, {
                                withBackwardFallback: '/',
                                className: (0, n.$)(p().navigation, { [p().navigation_desktop]: !x }),
                                withForwardControl: !1,
                            }),
                        (0, i.jsxs)('div', {
                            className: (0, n.$)(p().content, { [p().content_shrink]: !a }),
                            children: [
                                (0, i.jsx)(u.Icon, { className: p().icon, variant: 'attention', size: 'xxl' }),
                                (0, i.jsx)(g.Heading, { className: (0, n.$)(p().title, p().important), variant: 'h3', size: 'xs', children: _ }),
                                (0, i.jsxs)(g.Caption, {
                                    className: (0, n.$)(p().text, p().important),
                                    variant: 'span',
                                    type: 'text',
                                    size: 'l',
                                    weight: 'normal',
                                    children: [!1, (0, i.jsx)(l.A, { id: 'page-error.try-to-restart-app' })],
                                }),
                                (0, i.jsx)(d.$, {
                                    onClick: N,
                                    className: p().button,
                                    role: 'link',
                                    color: 'secondary',
                                    size: 'l',
                                    radius: 'xxxl',
                                    children: (0, i.jsxs)(g.Caption, {
                                        type: 'controls',
                                        variant: 'span',
                                        size: 'm',
                                        children: [!1, (0, i.jsx)(l.A, { id: 'page-error.restart-app-button' })],
                                    }),
                                }),
                            ],
                        }),
                    ],
                });
            });
        },
        75669: (e, t, a) => {
            'use strict';
            a.d(t, { KidsPage: () => y });
            var i = a(54486),
                n = a(50420),
                s = a(28303),
                o = a(61910),
                r = a(43426),
                l = a(47713),
                d = a(31500),
                u = a(6024),
                g = a(56231),
                c = a(97800),
                m = a(6664),
                _ = a(82644),
                p = a(33276),
                h = a(83252),
                N = a(80585),
                x = a(27005),
                f = a.n(x);
            let y = (0, s.PA)(() => {
                let { kids: e, user: t } = (0, h.Pjs)(),
                    { formatMessage: a } = (0, r.A)(),
                    { contentScrollRef: s, setContentScrollRef: x } = (0, h.gKY)();
                (0, o.useEffect)(() => () => e.landing.reset(), [e.landing]), (0, h.Jzs)(e.landing.isResolved);
                let y = (0, m._9)(e.landing);
                return (
                    e.landing.isNeededToLoad && (0, o.use)(e.landing.getSkeleton({ id: u.p.KIDS, showWizard: t.settings.showWizard }, { preloadBlocksCount: 2 })),
                    (0, i.jsx)(h.nVz, {
                        pageId: h._Q$.KIDS,
                        children: (0, i.jsxs)(p.hO, {
                            scrollElement: s,
                            outerTitle: a({ id: 'kids.for-kids' }),
                            children: [
                                (0, i.jsx)(N.Y9, {
                                    variant: N.Vw.TEXT,
                                    showControls: !1,
                                    children: (0, i.jsx)('div', {
                                        className: f().header,
                                        children: (0, i.jsx)(c.Heading, {
                                            variant: 'h1',
                                            weight: 'bold',
                                            size: 'xl',
                                            children: (0, i.jsx)(l.A, { id: 'kids.for-kids' }),
                                        }),
                                    }),
                                }),
                                (0, i.jsxs)(g.N, {
                                    className: f().root,
                                    containerClassName: f().content,
                                    ref: x,
                                    ...(0, d.Am)(d.Xk.kids.KIDS_PAGE),
                                    children: [
                                        (0, i.jsx)('div', {
                                            className: (0, n.$)(f().landing, { [f().landing_onlyWizard]: y }),
                                            children: (0, i.jsx)(m.EA, {
                                                landing: e.landing,
                                                errorComponent: (0, i.jsx)(_.w, { className: f().error, withBackwardControl: !1 }),
                                            }),
                                        }),
                                        (0, i.jsx)(N.A, { children: (0, i.jsx)(N.wi, { className: f().footer }) }),
                                    ],
                                }),
                            ],
                        }),
                    })
                );
            });
        },
        82527: (e, t, a) => {
            'use strict';
            a.r(t), a.d(t, { default: () => o });
            var i = a(54486),
                n = a(97396),
                s = a(13127);
            let o = () => {
                let e = (0, n.useSearchParams)().get('id');
                return e || (0, n.notFound)(), (0, i.jsx)(s.bU, { id: e });
            };
        },
        82644: (e, t, a) => {
            'use strict';
            a.d(t, { w: () => i.SomethingWentWrong });
            var i = a(75312);
        },
        83645: (e, t, a) => {
            'use strict';
            a.d(t, { default: () => n.a });
            var i = a(36446),
                n = a.n(i);
        },
        91165: (e, t, a) => {
            'use strict';
            function i(e) {
                let { reason: t, children: a } = e;
                return a;
            }
            Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'BailoutToCSR', {
                    enumerable: !0,
                    get: function () {
                        return i;
                    },
                }),
                a(39201);
        },
        91582: (e) => {
            e.exports = { root: 'KidsCategoryPageShimmer_root__0V_bC' };
        },
        97151: (e, t, a) => {
            'use strict';
            a.d(t, { XU: () => g });
            var i,
                n,
                s = a(41500),
                o = a(61910),
                r = a(43426);
            !(function (e) {
                (e.formatDate = 'FormattedDate'),
                    (e.formatTime = 'FormattedTime'),
                    (e.formatNumber = 'FormattedNumber'),
                    (e.formatList = 'FormattedList'),
                    (e.formatDisplayName = 'FormattedDisplayName');
            })(i || (i = {})),
                (function (e) {
                    (e.formatDate = 'FormattedDateParts'),
                        (e.formatTime = 'FormattedTimeParts'),
                        (e.formatNumber = 'FormattedNumberParts'),
                        (e.formatList = 'FormattedListParts');
                })(n || (n = {}));
            var l = function (e) {
                var t = (0, r.A)(),
                    a = e.value,
                    i = e.children,
                    n = (0, s.__rest)(e, ['value', 'children']);
                return i(t.formatNumberToParts(a, n));
            };
            function d(e) {
                var t = function (t) {
                    var a = (0, r.A)(),
                        i = t.value,
                        n = t.children,
                        o = (0, s.__rest)(t, ['value', 'children']),
                        l = 'string' == typeof i ? new Date(i || 0) : i;
                    return n('formatDate' === e ? a.formatDateToParts(l, o) : a.formatTimeToParts(l, o));
                };
                return (t.displayName = n[e]), t;
            }
            function u(e) {
                var t = function (t) {
                    var a = (0, r.A)(),
                        i = t.value,
                        n = t.children,
                        l = (0, s.__rest)(t, ['value', 'children']),
                        d = a[e](i, l);
                    if ('function' == typeof n) return n(d);
                    var u = a.textComponent || o.Fragment;
                    return o.createElement(u, null, d);
                };
                return (t.displayName = i[e]), t;
            }
            (l.displayName = 'FormattedNumberParts'), (l.displayName = 'FormattedNumberParts');
            var g = u('formatDate');
            u('formatTime'), u('formatNumber'), u('formatList'), u('formatDisplayName'), d('formatDate'), d('formatTime');
        },
        98944: (e, t, a) => {
            'use strict';
            function i(e) {
                let { moduleIds: t } = e;
                return null;
            }
            Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'PreloadChunks', {
                    enumerable: !0,
                    get: function () {
                        return i;
                    },
                }),
                a(54486),
                a(92803),
                a(14367),
                a(32038);
        },
    },
    (e) => {
        e.O(
            0,
            [
                6041, 9834, 5355, 1023, 2398, 8748, 6552, 4915, 2186, 2036, 1776, 1311, 7764, 6706, 7724, 5201, 5148, 3005, 3916, 4885, 3252, 585, 6433, 3286, 156, 6231,
                4826, 1365, 3211, 7858, 5570, 6664, 5843, 3290, 7358,
            ],
            () => e((e.s = 58366)),
        ),
            (_N_E = e.O());
    },
]);
