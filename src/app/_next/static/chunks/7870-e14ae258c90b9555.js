(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7870],
    {
        11019: (e, t, a) => {
            'use strict';
            a.d(t, { NonMusicNotFoundPage: () => r });
            var l = a(54486),
                i = a(28303),
                o = a(61910),
                s = a(42421),
                n = a(83252);
            let r = (0, i.PA)(() => {
                let { nonMusic: e } = (0, n.Pjs)();
                return (
                    (0, o.useEffect)(
                        () => () => {
                            e.landing.reset();
                        },
                        [e.landing],
                    ),
                    (0, l.jsx)(s.M, {})
                );
            });
        },
        22809: (e, t, a) => {
            'use strict';
            a.d(t, { NonMusicPage: () => E });
            var l = a(54486),
                i = a(50420),
                o = a(28303),
                s = a(61910),
                n = a(43426),
                r = a(47713),
                d = a(31500),
                u = a(6024),
                g = a(67648),
                c = a(56231),
                N = a(97800),
                m = a(6664),
                _ = a(82644),
                C = a(33276),
                p = a(83252),
                y = a(80585),
                A = a(43859),
                T = a.n(A);
            let E = (0, o.PA)(() => {
                let { nonMusic: e, user: t } = (0, p.Pjs)(),
                    { formatMessage: a } = (0, n.A)(),
                    { contentScrollRef: o, setContentScrollRef: A } = (0, p.gKY)(),
                    [E, S] = (0, g.d)();
                (0, s.useEffect)(() => () => e.landing.reset(), [e.landing]), (0, p.Jzs)(e.landing.isResolved);
                let L = (0, m._9)(e.landing);
                return (
                    e.landing.isNeededToLoad && (0, s.use)(e.landing.getSkeleton({ id: u.p.NON_MUSIC, showWizard: t.settings.showWizard }, { preloadBlocksCount: 2 })),
                    (0, l.jsx)(p.nVz, {
                        pageId: p._Q$.NON_MUSIC,
                        children: (0, l.jsxs)(C.hO, {
                            scrollElement: o,
                            outerTitle: a({ id: 'entity-names.podcasts-and-books' }),
                            headerElement: E,
                            shouldHideHeader: e.landing.hasUpperBlocks,
                            children: [
                                (0, l.jsx)(y.Y9, {
                                    variant: y.Vw.TEXT,
                                    showControls: !1,
                                    disableStickyVariant: !0,
                                    children: (0, l.jsx)('div', {
                                        className: T().header,
                                        children: (0, l.jsx)(N.Heading, {
                                            variant: 'h1',
                                            weight: 'bold',
                                            size: 'xl',
                                            children: (0, l.jsx)(r.A, { id: 'entity-names.podcasts-and-books' }),
                                        }),
                                    }),
                                }),
                                (0, l.jsxs)(c.N, {
                                    className: T().root,
                                    containerClassName: T().content,
                                    ref: A,
                                    ...(0, d.Am)(d.Xk.nonMusic.NON_MUSIC_PAGE),
                                    children: [
                                        (0, l.jsx)('div', {
                                            className: (0, i.$)(T().landing, { [T().landing_onlyWizard]: L }),
                                            children: (0, l.jsx)(m.EA, {
                                                landing: e.landing,
                                                headerConcealerComponent: (0, l.jsx)('div', { ref: S }),
                                                errorComponent: (0, l.jsx)(_.w, { className: T().error, withBackwardControl: !1 }),
                                            }),
                                        }),
                                        (0, l.jsx)(y.A, { children: (0, l.jsx)(y.wi, { className: T().footer }) }),
                                    ],
                                }),
                            ],
                        }),
                    })
                );
            });
        },
        29391: (e, t, a) => {
            'use strict';
            a.d(t, { NonMusicCategoryNotFoundPage: () => s });
            var l = a(54486),
                i = a(28303),
                o = a(42421);
            let s = (0, i.PA)(() => (0, l.jsx)(o.M, {}));
        },
        31085: (e, t, a) => {
            'use strict';
            a.d(t, { NonMusicCategoryPlaylistsPage: () => y });
            var l = a(54486),
                i = a(50420),
                o = a(28303),
                s = a(97396),
                n = a(61910),
                r = a(43426),
                d = a(31500),
                u = a(97800),
                g = a(82644),
                c = a(33276),
                N = a(83909),
                m = a(83252),
                _ = a(80585),
                C = a(52291),
                p = a.n(C);
            let y = (0, o.PA)((e) => {
                var t, a, o;
                let { categoryId: C } = e,
                    {
                        nonMusic: { categoryPlaylistsSubpage: y },
                        settings: A,
                    } = (0, m.Pjs)(),
                    T = (0, m.W6M)(),
                    { contentScrollRef: E, setContentScrollRef: S } = (0, m.gKY)(),
                    { formatMessage: L } = (0, r.A)(),
                    b = A.layout === m.u40.Mobile,
                    h = (0, n.useCallback)(
                        (e) => {
                            y.getPlaylists({ page: e, pageSize: 20 });
                        },
                        [y],
                    );
                y.isNotFound && (0, s.notFound)(),
                    (0, n.useEffect)(
                        () => () => {
                            y.reset();
                        },
                        [y],
                    );
                let P = (0, n.useMemo)(() => ({ Footer: () => (0, l.jsx)(_.A, { children: (0, l.jsx)(_.wi, { className: p().footer }) }) }), []);
                if (
                    ((0, m.Jzs)(y.isResolved),
                    (0, m.XcE)(y.pagesLoader, h),
                    y.isNeededToLoad && (0, n.use)(y.getData({ categoryId: C, page: 0, pageSize: 20 })),
                    y.isSomethingWrong)
                )
                    return (0, l.jsx)(g.w, {});
                let I = y.isLoading ? 20 : null != (a = null == (t = y.pagesLoader.pager) ? void 0 : t.total) ? a : 0;
                return (0, l.jsx)(m.nVz, {
                    pageId: m._Q$.NON_MUSIC_CATEGORY_PLAYLISTS,
                    children: (0, l.jsx)(c.hO, {
                        scrollElement: E,
                        outerTitle: y.title,
                        children: (0, l.jsxs)('div', {
                            className: p().root,
                            ...(0, d.Am)(d.Xk.nonMusic.NON_MUSIC_CATEGORY_PLAYLISTS),
                            children: [
                                (0, l.jsx)(_.Y9, {
                                    variant: _.Vw.TEXT,
                                    withForwardControl: !1,
                                    withBackwardControl: T.canBack,
                                    children: (0, l.jsx)(u.Heading, { variant: 'h2', weight: 'bold', size: 'xl', lineClamp: 1, children: y.title }),
                                }),
                                (0, l.jsx)(_.$$, {
                                    context: { listAriaLabel: L({ id: 'mixes.playlists-list' }, { genreName: y.title || '' }) },
                                    className: (0, i.$)(p().scrollContainer, p().important),
                                    customComponents: P,
                                    itemContentCallback: (e) => {
                                        let t = y.playlists[e],
                                            a = L({ id: 'loading-messages.entity-is-loading' }, { entityName: L({ id: 'entity-names.playlist' }) });
                                        return t ? (0, l.jsx)(N.B6, { playlist: t, contentLinesCount: 3 }, t.key) : (0, l.jsx)(_.Vt, { isActive: !0, 'aria-label': a });
                                    },
                                    totalCount: I,
                                    onGetDataByPage: h,
                                    pageSize: 20,
                                    totalRequests: null != (o = null == y ? void 0 : y.pagesLoader.requestsCount) ? o : 0,
                                    listClassName: p().content,
                                    itemClassName: p().item,
                                    handleRef: S,
                                    isMobileLayout: b,
                                    useWindowScroll: b,
                                }),
                            ],
                        }),
                    }),
                });
            });
        },
        37723: (e) => {
            e.exports = {
                root: 'NonMusicAlbumsPage_root__jlDXa',
                scrollContainer: 'NonMusicAlbumsPage_scrollContainer__XNRsu',
                important: 'NonMusicAlbumsPage_important__Rk8LT',
                footer: 'NonMusicAlbumsPage_footer__LJCIL',
                item: 'NonMusicAlbumsPage_item__YArCS',
                content: 'NonMusicAlbumsPage_content__phVa7',
            };
        },
        43859: (e) => {
            e.exports = {
                root: 'NonMusicPage_root__IPKkH',
                content: 'NonMusicPage_content__7_TYy',
                header: 'NonMusicPage_header__dijgk',
                landing: 'NonMusicPage_landing__kGKTh',
                landing_onlyWizard: 'NonMusicPage_landing_onlyWizard__P9nN3',
                footer: 'NonMusicPage_footer__juz5v',
                error: 'NonMusicPage_error__oW0V3',
            };
        },
        52291: (e) => {
            e.exports = {
                root: 'NonMusicCategoryPlaylistsPage_root__NvUH8',
                scrollContainer: 'NonMusicCategoryPlaylistsPage_scrollContainer__uUyGe',
                important: 'NonMusicCategoryPlaylistsPage_important__YBsHf',
                footer: 'NonMusicCategoryPlaylistsPage_footer__TtkEO',
                item: 'NonMusicCategoryPlaylistsPage_item__4YasT',
                content: 'NonMusicCategoryPlaylistsPage_content__GZb1j',
            };
        },
        63059: (e) => {
            e.exports = {
                root: 'NonMusicCategoryPage_root__GYeXL',
                content: 'NonMusicCategoryPage_content__LJFnm',
                carouselBlocks: 'NonMusicCategoryPage_carouselBlocks___BPJ_',
                carouselBlock: 'NonMusicCategoryPage_carouselBlock__t41do',
                carouselBlockHeader: 'NonMusicCategoryPage_carouselBlockHeader__1uIfL',
                footer: 'NonMusicCategoryPage_footer__56hvJ',
            };
        },
        69029: (e, t, a) => {
            'use strict';
            a.d(t, { x: () => l });
            var l = (function (e) {
                return (e.CATEGORY = 'category'), (e.EDITORIAL = 'editorial'), e;
            })({});
        },
        77870: (e, t, a) => {
            'use strict';
            a.d(t, { gD: () => R.NonMusicAlbumsPage, xq: () => i.x, ol: () => k.NonMusicCategoryPage, bB: () => K.NonMusicCategoryPlaylistsPage, rN: () => M });
            var l = a(83252),
                i = a(69029),
                o = a(93064),
                s = a(14287),
                n = a(52733),
                r = a(26433);
            let d = o.gK
                .compose(
                    o.gK.model('NonMusicCategoryPlaylistsPage', {
                        errorStatusCode: o.gK.maybeNull(o.gK.number),
                        title: o.gK.maybeNull(o.gK.string),
                        playlistsData: o.gK.array(o.gK.model({ uid: o.gK.number, kind: o.gK.number })),
                        pagesLoader: (0, r.Ij)(n.$o),
                    }),
                    r.XT,
                )
                .views((e) => {
                    let t = {
                        get isLoading() {
                            return e.isNeededToLoad || e.loadingState === l.GuX.PENDING;
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
                        getPlaylists: (0, o.L3)(function* (t) {
                            let { page: a = 0, pageSize: i = 20 } = t,
                                { playlistsResource: r, modelActionsLogger: d } = (0, o._$)(e);
                            if (e.loadingState === l.GuX.RESOLVE && e.pagesLoader.isPageNeedToLoad(a)) {
                                e.pagesLoader.setPageState(a, l.GuX.PENDING);
                                try {
                                    let t = a * i,
                                        l = e.playlistsData.slice(t, t + i),
                                        o = yield r.getPlaylists({ playlistIds: l.map((e) => ''.concat(e.uid, ':').concat(e.kind)), resumeStream: !1 }),
                                        s = { page: a, perPage: i, total: e.playlistsData.length },
                                        d = o.playlists.map(n.jX);
                                    e.pagesLoader.setItems(d, { page: a, pager: s });
                                } catch (t) {
                                    d.error(t),
                                        e.pagesLoader.setItems(null, { responseStatus: l.FlZ.ERROR, page: a }),
                                        t instanceof s.GX &&
                                            (t.statusCode === s.X1.NOT_FOUND || t.statusCode === s.X1.BAD_REQUEST) &&
                                            (e.errorStatusCode = s.X1.NOT_FOUND),
                                        e.loadingState !== l.GuX.IDLE && (e.loadingState = l.GuX.REJECT);
                                }
                            }
                        }),
                        getData: (0, o.L3)(function* (a) {
                            let { categoryId: i, page: n = 0, pageSize: r = 20 } = a,
                                { nonMusicResource: d, modelActionsLogger: u } = (0, o._$)(e);
                            if (e.loadingState !== l.GuX.PENDING)
                                try {
                                    var g;
                                    e.loadingState = l.GuX.PENDING;
                                    let a = yield d.getPlaylists({ categoryId: i });
                                    (e.title = a.title),
                                        (e.playlistsData = (0, o.wg)((null != (g = a.entities) ? g : []).map((e) => ({ uid: e.uid, kind: e.kind })))),
                                        e.loadingState !== l.GuX.IDLE && (e.loadingState = l.GuX.RESOLVE),
                                        yield t.getPlaylists({ page: n, pageSize: r });
                                } catch (t) {
                                    u.error(t),
                                        t instanceof s.GX &&
                                            (t.statusCode === s.X1.NOT_FOUND || t.statusCode === s.X1.BAD_REQUEST) &&
                                            (e.errorStatusCode = s.X1.NOT_FOUND),
                                        e.loadingState !== l.GuX.IDLE && (e.loadingState = l.GuX.REJECT);
                                }
                        }),
                        reset() {
                            e.pagesLoader.reset(), (e.loadingState = l.GuX.IDLE), (e.title = null), (e.playlistsData = (0, o.wg)([])), (e.errorStatusCode = null);
                        },
                    };
                    return t;
                });
            var u = a(6664),
                g = a(80156);
            let c = o.gK.model('NonMusicAlbumsPageItem', { id: o.gK.number, data: o.gK.maybeNull(g.JC) }),
                N = o.gK
                    .compose(
                        o.gK.model('NonMusicAlbumsPage', {
                            errorStatusCode: o.gK.maybe(o.gK.number),
                            title: o.gK.maybeNull(o.gK.string),
                            albums: o.gK.maybeNull(o.gK.array(c)),
                            requestsCount: o.gK.maybe(o.gK.number),
                        }),
                        r.XT,
                    )
                    .views((e) => {
                        let t = {
                            get isLoading() {
                                return e.isNeededToLoad || e.loadingState === l.GuX.PENDING;
                            },
                            get isNotFound() {
                                let t = e.errorStatusCode === s.X1.NOT_FOUND || e.errorStatusCode === s.X1.BAD_REQUEST;
                                return e.loadingState === l.GuX.REJECT && t;
                            },
                            get isSomethingWrong() {
                                return e.isRejected && !t.isNotFound;
                            },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        getEditorialAlbums: (0, o.L3)(function* (t) {
                            let { id: a } = t,
                                { nonMusicResource: i, modelActionsLogger: n } = (0, o._$)(e);
                            if (e.loadingState !== l.GuX.PENDING)
                                try {
                                    var r;
                                    e.loadingState = l.GuX.PENDING;
                                    let t = yield i.getEditorialAlbums({ id: a });
                                    (e.title = t.title),
                                        (null == (r = t.entities) ? void 0 : r.length) && (e.albums = (0, o.wg)(t.entities.map((e) => ({ id: e })))),
                                        e.loadingState !== l.GuX.IDLE && (e.loadingState = l.GuX.RESOLVE);
                                } catch (t) {
                                    n.error(t),
                                        t instanceof s.GX &&
                                            (t.statusCode === s.X1.NOT_FOUND || t.statusCode === s.X1.BAD_REQUEST) &&
                                            (e.errorStatusCode = s.X1.NOT_FOUND),
                                        e.loadingState !== l.GuX.IDLE && (e.loadingState = l.GuX.REJECT);
                                }
                        }),
                        getCategoryAlbums: (0, o.L3)(function* (t) {
                            let { id: a } = t,
                                { nonMusicResource: i, modelActionsLogger: n } = (0, o._$)(e);
                            if (e.loadingState !== l.GuX.PENDING)
                                try {
                                    var r;
                                    e.loadingState = l.GuX.PENDING;
                                    let t = yield i.getCategoryAlbums({ id: a });
                                    (e.title = t.title),
                                        (null == (r = t.albums) ? void 0 : r.length) && (e.albums = (0, o.wg)(t.albums.map((e) => ({ id: e })))),
                                        e.loadingState !== l.GuX.IDLE && (e.loadingState = l.GuX.RESOLVE);
                                } catch (t) {
                                    n.error(t),
                                        t instanceof s.GX &&
                                            (t.statusCode === s.X1.NOT_FOUND || t.statusCode === s.X1.BAD_REQUEST) &&
                                            (e.errorStatusCode = s.X1.NOT_FOUND),
                                        e.loadingState !== l.GuX.IDLE && (e.loadingState = l.GuX.REJECT);
                                }
                        }),
                        getAlbumsByRange: (0, o.L3)(function* (t, a) {
                            var l, i, s;
                            let { albumResource: n, modelActionsLogger: r } = (0, o._$)(e);
                            if (!(null == (l = e.albums) ? void 0 : l.length)) return null;
                            (t = Math.max(0, t)), (a = Math.min(a, e.albums.length));
                            let d = [];
                            for (let l = t; l <= a; l++)
                                (null == (i = e.albums[l]) ? void 0 : i.id) && !(null == (s = e.albums[l]) ? void 0 : s.data) && d.push(e.albums[l].id);
                            if (!d.length) return null;
                            try {
                                let t = yield n.getAlbums({ albumIds: d });
                                null == t ||
                                    t.forEach((t) => {
                                        var a;
                                        null == (a = e.albums) ||
                                            a.forEach((a, l) => {
                                                var i;
                                                a.id === t.id && (null == (i = e.albums) ? void 0 : i[l]) && (e.albums[l].data = (0, g.pp)(t));
                                            });
                                    }),
                                    e.requestsCount ? (e.requestsCount = e.requestsCount + 1) : (e.requestsCount = 1);
                            } catch (e) {
                                r.error(e);
                            }
                            return null;
                        }),
                        reset() {
                            (e.loadingState = l.GuX.IDLE), (e.title = null), (e.albums = null), (e.requestsCount = 0);
                        },
                    }));
            var m = a(84701),
                _ = a(35620),
                C = a(42140),
                p = a(60049),
                y = a(83909);
            let A = o.gK
                    .model('NonMusicBaseBlock')
                    .props({
                        type: o.gK.enumeration(Object.values(m.K.CATEGORY)),
                        landingBlockType: o.gK.enumeration(Object.values(_.t)),
                        id: o.gK.maybe(o.gK.string),
                        title: o.gK.maybe(o.gK.string),
                        description: o.gK.maybe(o.gK.string),
                        viewAllActionLink: o.gK.maybe(o.gK.string),
                    }),
                T = A.named('NonMusicCategoryBlock').props({
                    type: o.gK.literal(m.K.CATEGORY),
                    landingBlockType: o.gK.literal(_.t.NON_MUSIC_EDITORIAL_COMPILATION),
                    items: o.gK.array(u.h9),
                }),
                E = A.named('NonMusicChartAlbumBlock').props({
                    type: o.gK.literal(m.K.ALBUM_CHART),
                    landingBlockType: o.gK.literal(_.t.CHART_ALBUMS),
                    items: o.gK.array(g.JC),
                }),
                S = o.gK.union(u.RO, u.Od),
                L = A.named('NonMusicEditorialPlaylistsBlock').props({
                    type: o.gK.literal(m.K.EDITORIAL_PLAYLISTS),
                    landingBlockType: o.gK.literal(_.t.RECENTLY_PLAYED),
                    items: o.gK.array(S),
                });
            var b = a(3095);
            let h = A.named('NonMusicMixesBlock').props({
                    type: o.gK.literal(m.K.CATEGORIES_TAB),
                    landingBlockType: o.gK.literal(_.t.MIXES_GRID),
                    items: o.gK.array(b.bv),
                }),
                P = A.named('NonMusicPromotionsBlock').props({
                    type: o.gK.literal(m.K.PROMOTIONS),
                    landingBlockType: o.gK.literal(_.t.NON_MUSIC_PROMOTIONS),
                    items: o.gK.array(u.fv),
                }),
                I = o.gK.union(E, L, T, P, h),
                O = o.gK
                    .compose(
                        o.gK.model('NonMusicCategoryPage', { errorStatusCode: o.gK.maybeNull(o.gK.number), title: o.gK.maybeNull(o.gK.string), blocks: o.gK.array(I) }),
                        r.XT,
                    )
                    .views((e) => {
                        let t = {
                            get isLoading() {
                                return e.isNeededToLoad || e.loadingState === l.GuX.PENDING;
                            },
                            get isNotFound() {
                                let t = e.isResolved && 0 === e.blocks.length,
                                    a = e.errorStatusCode === s.X1.NOT_FOUND || e.errorStatusCode === s.X1.BAD_REQUEST;
                                return (e.isRejected && a) || t;
                            },
                            get isSomethingWrong() {
                                return e.isRejected && !t.isNotFound;
                            },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        getData: (0, o.L3)(function* (t) {
                            let { categoryId: a } = t,
                                { nonMusicResource: i, modelActionsLogger: n } = (0, o._$)(e);
                            if (e.loadingState !== l.GuX.PENDING)
                                try {
                                    e.loadingState = l.GuX.PENDING;
                                    let t = yield i.getCategory({ categoryId: a });
                                    e.title = t.title;
                                    let s = [];
                                    t.blocks &&
                                        (t.blocks.forEach((e) => {
                                            switch (e.type) {
                                                case m.K.ALBUM_CHART:
                                                    s.push(
                                                        ((e) => {
                                                            let t = e.entities.map((e) => ({
                                                                ...(0, g.pp)(e.data.album),
                                                                chart: e.data.chartPosition && (0, C.ws)(e.data.chartPosition),
                                                                likesCount: e.data.album.likesCount,
                                                            }));
                                                            return (0, o.wg)({
                                                                id: e.id,
                                                                type: m.K.ALBUM_CHART,
                                                                landingBlockType: _.t.CHART_ALBUMS,
                                                                title: e.title,
                                                                description: e.description,
                                                                viewAllActionLink: e.viewAllUrl,
                                                                items: t,
                                                            });
                                                        })(e),
                                                    );
                                                    return;
                                                case m.K.EDITORIAL_PLAYLISTS:
                                                case m.K.PLAYLIST_WITH_TRACKS:
                                                    s.push(
                                                        ((e) => {
                                                            let t = e.entities.map((e) => {
                                                                switch (e.type) {
                                                                    case m.j.PLAYLIST:
                                                                        return { type: p._.PLAYLIST_ITEM, data: (0, y.Ew)({ ...e.data, artists: [] }) };
                                                                    case m.j.ALBUM:
                                                                        return { type: p._.ALBUM_ITEM, data: (0, g.pp)(e.data) };
                                                                }
                                                            });
                                                            return (0, o.wg)({
                                                                id: e.id,
                                                                type: m.K.EDITORIAL_PLAYLISTS,
                                                                landingBlockType: _.t.RECENTLY_PLAYED,
                                                                title: e.title,
                                                                description: e.description,
                                                                viewAllActionLink: e.viewAllUrl,
                                                                items: t,
                                                            });
                                                        })(e),
                                                    );
                                                    return;
                                                case m.K.CATEGORY:
                                                    s.push(
                                                        ((e) => {
                                                            let t = e.entities.map((e) => ({ type: p._.NON_MUSIC_ALBUM_ITEM, data: (0, g.pp)(e.data) }));
                                                            return (0, o.wg)({
                                                                id: e.id,
                                                                type: m.K.CATEGORY,
                                                                landingBlockType: _.t.NON_MUSIC_EDITORIAL_COMPILATION,
                                                                title: e.title,
                                                                description: e.description,
                                                                viewAllActionLink: e.viewAllUrl,
                                                                items: t,
                                                            });
                                                        })(e),
                                                    );
                                                    return;
                                                case m.K.PROMOTIONS:
                                                    s.push(
                                                        ((e) => {
                                                            var t;
                                                            let a = e.entities.map((e) => {
                                                                var t, a, l, i, o;
                                                                return {
                                                                    featureId: null != (t = e.data.promoId) ? t : '',
                                                                    title: null != (a = e.data.title) ? a : '',
                                                                    subtitle: null != (l = e.data.subtitle) ? l : '',
                                                                    imageUrl: null != (i = e.data.image) ? i : '',
                                                                    weblink: null != (o = e.data.url) ? o : '',
                                                                };
                                                            });
                                                            return (0, o.wg)({
                                                                id: e.id,
                                                                type: m.K.PROMOTIONS,
                                                                landingBlockType: _.t.NON_MUSIC_PROMOTIONS,
                                                                title: e.title,
                                                                description: e.description,
                                                                viewAllActionLink: null != (t = e.viewAllUrl) ? t : void 0,
                                                                items: a,
                                                            });
                                                        })(e),
                                                    );
                                                    return;
                                                case m.K.CATEGORIES_TAB:
                                                    s.push(
                                                        ((e) => {
                                                            let t = e.entities.map((e) => {
                                                                var t, a, l, i, o;
                                                                let s = [
                                                                    {
                                                                        uri: null != (t = e.data.backgroundImageUri) ? t : '',
                                                                        color: null != (a = e.data.textBackgroundColor) ? a : '',
                                                                        videoUrl: '',
                                                                    },
                                                                ];
                                                                return {
                                                                    id: null != (l = e.id) ? l : '',
                                                                    title: null != (i = e.data.title) ? i : '',
                                                                    weblink: null != (o = e.data.url) ? o : '',
                                                                    covers: s,
                                                                };
                                                            });
                                                            return (0, o.wg)({
                                                                id: e.id,
                                                                type: m.K.CATEGORIES_TAB,
                                                                landingBlockType: _.t.MIXES_GRID,
                                                                title: e.title,
                                                                items: t,
                                                            });
                                                        })(e),
                                                    );
                                            }
                                        }),
                                        (e.blocks = (0, o.wg)(s))),
                                        e.loadingState !== l.GuX.IDLE && (e.loadingState = l.GuX.RESOLVE);
                                } catch (t) {
                                    n.error(t),
                                        t instanceof s.GX &&
                                            (t.statusCode === s.X1.NOT_FOUND || t.statusCode === s.X1.BAD_REQUEST) &&
                                            (e.errorStatusCode = s.X1.NOT_FOUND),
                                        e.loadingState !== l.GuX.IDLE && (e.loadingState = l.GuX.REJECT);
                                }
                        }),
                        reset() {
                            (e.errorStatusCode = null), (e.title = null), (e.loadingState = l.GuX.IDLE), (e.blocks = (0, o.wg)([]));
                        },
                    })),
                M = o.gK.model('NonMusicPage', { landing: u.Ju, albums: N, categorySubpage: O, categoryPlaylistsSubpage: d });
            var R = a(86977);
            a(29391);
            var k = a(86521),
                K = a(31085);
            a(11019), a(22809);
        },
        84701: (e, t, a) => {
            'use strict';
            var l, i;
            a.d(t, { K: () => i, j: () => l }),
                (function (e) {
                    (e.ALBUM = 'album'),
                        (e.PLAYLIST = 'playlist'),
                        (e.ALBUM_CHART_ITEM = 'album-chart-item'),
                        (e.BOOKMATE_BANNER_ENTITY = 'bookmate-banner-entity'),
                        (e.PROMOTION = 'promotion'),
                        (e.CATEGORY_TAB = 'category');
                })(l || (l = {})),
                (function (e) {
                    (e.ALBUM_CHART = 'album-chart'),
                        (e.EDITORIAL_PLAYLISTS = 'editorial-playlists'),
                        (e.PLAYLIST_WITH_TRACKS = 'playlist-with-tracks'),
                        (e.CATEGORY = 'category'),
                        (e.BOOKMATE_BANNER = 'bookmate-banner'),
                        (e.PROMOTIONS = 'promotions'),
                        (e.CATEGORIES_TAB = 'categories-tab');
                })(i || (i = {}));
        },
        86521: (e, t, a) => {
            'use strict';
            a.d(t, { NonMusicCategoryPage: () => A });
            var l = a(54486),
                i = a(50420),
                o = a(28303),
                s = a(97396),
                n = a(61910),
                r = a(84701),
                d = a(56231),
                u = a(97800),
                g = a(6664),
                c = a(82644),
                N = a(33276),
                m = a(83252),
                _ = a(80585),
                C = a(63059),
                p = a.n(C);
            let y = { [r.K.ALBUM_CHART]: g.zt, [r.K.EDITORIAL_PLAYLISTS]: g.g0, [r.K.CATEGORY]: g.tl, [r.K.PROMOTIONS]: g.nM, [r.K.CATEGORIES_TAB]: g.qh },
                A = (0, o.PA)((e) => {
                    let { id: t } = e,
                        {
                            nonMusic: { categorySubpage: a },
                            experiments: o,
                        } = (0, m.Pjs)(),
                        { contentScrollRef: r, setContentScrollRef: g } = (0, m.gKY)(),
                        C = (0, m.W6M)(),
                        A = (0, n.useRef)(null);
                    if (o.checkExperiment(m.zal.WebNextNewNestedNonMusicLandings, 'on')) {
                        let { href: e } = (0, m.uvd)('/landing/:skeleton', { params: { skeleton: 'category_non-music_'.concat(t) } });
                        (0, s.redirect)(e);
                    }
                    a.isNotFound && (0, s.notFound)(),
                        (0, n.useEffect)(() => {
                            A.current !== t && t && (a.reset(), (A.current = t));
                        }, [t, a]),
                        (0, n.useEffect)(() => () => a.reset(), [a]),
                        (0, m.Jzs)(a.isResolved);
                    let T = (0, n.useMemo)(
                        () =>
                            a.blocks.map((e, t) => {
                                let o = y[e.type];
                                return (0, l.jsx)(
                                    m.FoH,
                                    {
                                        blockId: e.id,
                                        blockType: e.type,
                                        blockIdForFrom: ''.concat(m.hf$.DISCOVERY_BLOCK, '-').concat(e.id),
                                        blockPosX: 1,
                                        blockPosY: t + 1,
                                        objectsCount: e.items.length,
                                        children: (0, l.jsx)(
                                            o,
                                            {
                                                headerClassName: (0, i.$)(p().carouselBlockHeader, p().carouselBlock),
                                                containerClassName: p().carouselBlock,
                                                type: e.landingBlockType,
                                                loadingState: a.loadingState,
                                                id: e.id,
                                                isNotFound: a.isNotFound,
                                                hasSentAnalyticsOnLoaded: !1,
                                                meta: { title: e.title, description: e.description, viewAllActionLink: e.viewAllActionLink },
                                                data: { items: e.items },
                                                isNeededToLoad: !1,
                                                isLoading: a.isLoading,
                                                isLoaded: a.isResolved,
                                                isRejected: a.isRejected,
                                                isShimmerVisible: a.isLoading,
                                                isShimmerActive: !0,
                                                isVisible: !0,
                                                objectsCount: e.items.length,
                                            },
                                            e.id,
                                        ),
                                    },
                                    e.id,
                                );
                            }),
                        [a.blocks, a.loadingState, a.isNotFound, a.isLoading, a.isResolved, a.isRejected],
                    );
                    return (t && a.isNeededToLoad && (0, n.use)(a.getData({ categoryId: t })), a.isSomethingWrong)
                        ? (0, l.jsx)(c.w, {})
                        : (0, l.jsx)(m.nVz, {
                              pageId: m._Q$.NON_MUSIC_CATEGORY,
                              children: (0, l.jsxs)(N.hO, {
                                  scrollElement: r,
                                  outerTitle: a.title,
                                  children: [
                                      (0, l.jsx)(_.Y9, {
                                          variant: _.Vw.TEXT,
                                          withForwardControl: !1,
                                          withBackwardControl: C.canBack,
                                          children: (0, l.jsx)(u.Heading, { variant: 'h2', weight: 'bold', size: 'xl', children: a.title }),
                                      }),
                                      (0, l.jsxs)(d.N, {
                                          className: p().root,
                                          containerClassName: p().content,
                                          ref: g,
                                          children: [
                                              (0, l.jsx)('div', { className: p().carouselBlocks, children: T }),
                                              (0, l.jsx)(_.A, { children: (0, l.jsx)(_.wi, { className: p().footer }) }),
                                          ],
                                      }),
                                  ],
                              }),
                          });
                });
        },
        86977: (e, t, a) => {
            'use strict';
            a.d(t, { NonMusicAlbumsPage: () => y });
            var l = a(54486),
                i = a(50420),
                o = a(28303),
                s = a(97396),
                n = a(61910),
                r = a(43426),
                d = a(31500),
                u = a(97800),
                g = a(80156),
                c = a(33276),
                N = a(83252),
                m = a(80585),
                _ = a(69029),
                C = a(37723),
                p = a.n(C);
            let y = (0, o.PA)((e) => {
                var t, a;
                let { id: o, variant: C } = e,
                    {
                        nonMusic: { albums: y },
                        settings: A,
                    } = (0, N.Pjs)(),
                    { formatMessage: T } = (0, r.A)(),
                    { contentScrollRef: E, setContentScrollRef: S } = (0, N.gKY)(),
                    L = (0, N.W6M)(),
                    b = A.layout === N.u40.Mobile;
                (y.isNotFound || !o) && (0, s.notFound)(),
                    (0, N.Jzs)(y.isResolved),
                    (0, n.useEffect)(
                        () => () => {
                            y.reset();
                        },
                        [y],
                    );
                let h = (0, n.useCallback)(
                        (e) => {
                            y.getAlbumsByRange(e.startIndex, e.endIndex);
                        },
                        [y],
                    ),
                    P = (0, n.useMemo)(() => ({ Footer: () => (0, l.jsx)(m.A, { children: (0, l.jsx)(m.wi, { className: p().footer }) }) }), []),
                    I = y.isLoading ? 20 : null != (a = null == (t = y.albums) ? void 0 : t.length) ? a : 0;
                return (
                    o && y.isNeededToLoad && (C === _.x.EDITORIAL ? (0, n.use)(y.getEditorialAlbums({ id: o })) : (0, n.use)(y.getCategoryAlbums({ id: o }))),
                    (0, l.jsx)(N.nVz, {
                        pageId: N._Q$.NON_MUSIC_ALBUMS,
                        children: (0, l.jsx)(c.hO, {
                            scrollElement: E,
                            outerTitle: y.title,
                            children: (0, l.jsxs)('div', {
                                className: p().root,
                                ...(0, d.Am)(d.Xk.nonMusic.NON_MUSIC_ALBUMS_PAGE),
                                children: [
                                    (0, l.jsx)(m.Y9, {
                                        variant: m.Vw.TEXT,
                                        withForwardControl: !1,
                                        withBackwardControl: L.canBack,
                                        children: (0, l.jsx)(u.Heading, {
                                            id: 'collection-artists-header',
                                            variant: 'h2',
                                            weight: 'bold',
                                            size: 'xl',
                                            lineClamp: 1,
                                            children: y.title,
                                        }),
                                    }),
                                    (0, l.jsx)(m.$$, {
                                        className: (0, i.$)(p().scrollContainer, p().important),
                                        customComponents: P,
                                        itemContentCallback: (e) => {
                                            var t, a;
                                            let i = null == (a = y.albums) || null == (t = a[e]) ? void 0 : t.data,
                                                o = T({ id: 'loading-messages.entity-is-loading' }, { entityName: T({ id: 'entity-names.album' }) });
                                            return i
                                                ? (0, l.jsx)(g.aX, { withLikesCount: !0, album: i, contentLinesCount: 3 }, i.id)
                                                : (0, l.jsx)(m.Vt, { 'aria-label': o }, e);
                                        },
                                        totalCount: I,
                                        onGetDataByRange: h,
                                        totalRequests: y.requestsCount,
                                        listClassName: p().content,
                                        itemClassName: p().item,
                                        handleRef: S,
                                        context: { listAriaLabel: T({ id: 'mixes.albums-list' }, { genreName: y.title || '' }) },
                                        isMobileLayout: b,
                                        useWindowScroll: b,
                                    }),
                                ],
                            }),
                        }),
                    })
                );
            });
        },
    },
]);
