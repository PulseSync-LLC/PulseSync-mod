(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2849],
    {
        1176: (e, t, n) => {
            'use strict';
            n.d(t, { r: () => r });
            let r = (0, n(55178).createContext)({ pageId: void 0, pageEntityId: void 0, displayReasonId: void 0, pageStyle: void 0, pagePlacement: void 0 });
        },
        1677: (e, t, n) => {
            'use strict';
            n.d(t, { F: () => a });
            var r = n(16172),
                i = n(48922);
            let a = {
                [i._Q.HOME]: r.rW.MainScreen,
                [i._Q.NON_MUSIC]: r.rW.NonmusicLandingScreen,
                [i._Q.OWN_COLLECTION]: r.rW.CollectionLandingScreen,
                [i._Q.LANDING]: r.rW.DynamicScreen,
                [i._Q.OWN_ARTISTS]: r.rW.CollectionArtistsScreen,
                [i._Q.SEARCH]: r.rW.SearchScreen,
                [i._Q.ARTIST]: r.rW.ArtistScreen,
                [i._Q.CONCERTS]: r.rW.ConcertsLandingScreen,
                [i._Q.CONCERT]: r.rW.ConcertScreen,
                [i._Q.CONCERT_LOCATION_SELECTOR]: r.rW.ConcertLocationSelector,
                [i._Q.ALBUM]: r.rW.AlbumScreen,
                [i._Q.PLAYLIST]: r.rW.PlaylistScreen,
                [i._Q.SLIDES_SCREEN]: r.rW.SlidesScreen,
                [i._Q.PROMOLANDING_ALBUM]: r.rW.PromolandingAlbumScreen,
                [i._Q.WAVE_LANDING_SCREEN]: r.rW.WaveLandingScreen,
                [i._Q.FACT_SCREEN]: r.rW.FactScreen,
                [i._Q.COLLECTION_VIBE_ROOMS]: r.rW.MultivibeScreen,
                [i._Q.MULTIVIBE_SENDING_INVITATION_SCREEN]: r.rW.MultivibeSendingInvitationScreen,
                [i._Q.MULTIVIBE_ACCEPTING_INVITATION_SCREEN]: r.rW.MultivibeAcceptingInvitationScreen,
                [i._Q.MULTIVIBE_ACTION_SCREEN]: r.rW.MultivibeActionScreen,
                [i._Q.MULTIVIBE_ALONE_SCREEN]: r.rW.MultivibeAloneScreen,
                [i._Q.MULTIVIBE_INVALID_INVITATION_SCREEN]: r.rW.MultivibeInvalidInvitationScreen,
                [i._Q.MULTIVIBE_PENDING_INVITATION_SCREEN]: r.rW.MultivibePendingInvitationScreen,
                [i._Q.MULTIVIBE_ALREADY_EXIST_SCREEN]: r.rW.MultivibeAlreadyExistScreen,
            };
        },
        2528: (e, t, n) => {
            'use strict';
            n.r(t), n.d(t, { default: () => V });
            var r = n(32290),
                i = n(21916),
                a = n(55178),
                s = n(49259),
                l = n(45066),
                o = n(60754),
                c = n(36885),
                d = n(55573),
                u = n(15567),
                _ = n(49399),
                m = n(73715),
                g = n(93841);
            let v = o.gK
                    .compose(o.gK.model('ConcertsDetailsPage', { concerts: o.gK.maybeNull(o.gK.array(d.a)), title: o.gK.maybeNull(o.gK.string) }), m.X, g.p)
                    .views((e) => ({
                        get isShimmerVisible() {
                            return e.isNeededToLoad || e.isLoading || e.isRejected;
                        },
                        get isShimmerActive() {
                            return e.isLoading;
                        },
                    }))
                    .actions((e) => ({
                        getData: (0, o.L3)(function* (t) {
                            let { type: n, id: r } = t,
                                { concertsResource: i, modelActionsLogger: a } = (0, o._$)(e);
                            if (!e.isLoading)
                                try {
                                    e.loadingState = _.G.PENDING;
                                    let { concerts: t } = (0, u.M)(e),
                                        a = t.concertsLocationForRequest,
                                        { items: s, title: l } = yield i.getConcertsDetails({ type: n, id: r, locations: a });
                                    (e.concerts = (0, o.wg)(s.map((e) => (0, c.H)(e)))), (e.title = null != l ? l : null), (e.loadingState = _.G.RESOLVE);
                                } catch (t) {
                                    a.error(t), (e.loadingState = _.G.REJECT);
                                }
                        }),
                        reset() {
                            (e.loadingState = _.G.IDLE), (e.title = null), e.destroyItems([e.concerts]);
                        },
                    })),
                h = { loadingState: _.G.IDLE },
                { pageStoreProvider: p } = (0, s.W)({ createStore: (e) => v.create(h, e), patchKey: l.n.CONCERTS_DETAILS });
            var E = n(96103),
                C = n(60900),
                I = n(91027),
                T = n(54862),
                S = n(46049),
                f = n(71926),
                N = n(64170),
                y = n(7999),
                A = n(93954),
                b = n(34326),
                x = n(53109),
                O = n(88404),
                R = n(95481),
                L = n(83808),
                k = n(83920),
                w = n(57594),
                P = n(79406),
                j = n(58054),
                M = n(32468),
                D = n(74694),
                Q = n(77028),
                W = n.n(Q);
            let K = (0, E.PA)((e) => {
                let { type: t, id: n } = e,
                    o = (0, a.useId)(),
                    c = (0, s.s)(l.n.CONCERTS_DETAILS),
                    { experiments: d } = (0, w.g)(),
                    { formatMessage: u } = (0, C.A)(),
                    { contentScrollRef: _, setContentScrollRef: m } = (0, k.g)(),
                    g = (0, L.W)(),
                    [v, h] = (0, T.d)(),
                    p = (0, R.f)(),
                    E = (0, a.useRef)(!1),
                    Q = d.checkExperiment(P.z.WebNextConcertsIdentityEventType, 'on'),
                    K = (0, I.c)(() => {
                        var e;
                        return !c.isShimmerVisible && (null == (e = c.concerts) ? void 0 : e.length) ? c.concerts.length : 50;
                    }),
                    {
                        virtualizer: U,
                        rowResizeObserver: G,
                        columnCount: B,
                        indices: V,
                    } = (0, A.L)({
                        count: K(),
                        rowGap: 32,
                        columnGap: 16,
                        getEstimateRowSize: () => 371,
                        minColumnCount: 2,
                        minColumnWidth: 170,
                        maxColumnWidth: 227,
                        containerRef: v,
                    }),
                    H = { '--feed-concerts-height': ''.concat(U.getTotalSize(), 'px'), '--feed-concerts-column-count': B },
                    F = (0, a.useCallback)(
                        (e) => {
                            var t;
                            let n = null == (t = c.concerts) ? void 0 : t[e];
                            return !n || c.isShimmerVisible ? (0, r.jsx)(O.L, { isActive: c.isShimmerActive, withMeta: !0 }) : (0, r.jsx)(x.Q, { concert: n });
                        },
                        [c.concerts, c.isShimmerActive, c.isShimmerVisible],
                    );
                if (
                    ((0, a.useEffect)(
                        () => () => {
                            c.reset();
                        },
                        [c],
                    ),
                    (0, a.useEffect)(() => {
                        c.isResolved && !E.current && (p(), (E.current = !0));
                    }, [c.isResolved, p]),
                    c.isNeededToLoad && (0, a.use)(c.getData({ type: t, id: n })),
                    d.checkExperiment(P.z.WebNextConcertsDetailsPage, 'on') || (0, i.notFound)(),
                    c.isRejected)
                )
                    return (0, r.jsx)(N.SomethingWentWrong, {});
                let Y = Q && c.title ? c.title : u({ id: 'concerts.details-title' });
                return (0, r.jsx)(y.h, {
                    scrollElement: _,
                    outerTitle: Y,
                    children: (0, r.jsxs)('div', {
                        className: W().root,
                        children: [
                            (0, r.jsx)(D.Y, {
                                variant: D.V.TEXT,
                                withForwardControl: !1,
                                withBackwardControl: g.canBack,
                                children: (0, r.jsx)(f.DZ, { variant: 'h2', weight: 'bold', size: 'xl', lineClamp: 1, children: Y }),
                            }),
                            (0, r.jsxs)(S.N, {
                                ref: m,
                                className: W().scrollContainer,
                                children: [
                                    (0, r.jsx)('div', {
                                        className: W().content,
                                        children: (0, r.jsx)('div', {
                                            'aria-labelledby': o,
                                            ref: h,
                                            style: H,
                                            className: W().container,
                                            children: U.getVirtualItems().map((e) =>
                                                (0, r.jsx)(
                                                    b.U,
                                                    {
                                                        className: W().row,
                                                        columnClassName: W().column,
                                                        virtualItem: e,
                                                        resizeObserver: G,
                                                        indices: V,
                                                        renderItemByIndex: F,
                                                        scrollMargin: U.options.scrollMargin,
                                                    },
                                                    e.key,
                                                ),
                                            ),
                                        }),
                                    }),
                                    (0, r.jsx)(M.A, { children: (0, r.jsx)(j.w, { className: W().footer }) }),
                                ],
                            }),
                        ],
                    }),
                });
            });
            var U = n(79856);
            let G = (e) => (0, r.jsx)(O.L, { isActive: !0, withMeta: !0 }, e),
                B = () => {
                    let e = (0, L.W)(),
                        { contentScrollRef: t, setContentScrollRef: n } = (0, k.g)(),
                        [i, a] = (0, T.d)(),
                        { formatMessage: s } = (0, C.A)(),
                        l = s({ id: 'loading-messages.entity-is-loading' }, { entityName: s({ id: 'entity-names.concert' }) }),
                        {
                            virtualizer: o,
                            rowResizeObserver: c,
                            columnCount: d,
                            indices: u,
                        } = (0, A.L)({
                            count: 50,
                            rowGap: 32,
                            columnGap: 16,
                            getEstimateRowSize: () => 371,
                            minColumnCount: 2,
                            minColumnWidth: 170,
                            maxColumnWidth: 227,
                            containerRef: i,
                        }),
                        _ = { '--feed-concerts-height': ''.concat(o.getTotalSize(), 'px'), '--feed-concerts-column-count': d };
                    return (0, r.jsx)(y.h, {
                        scrollElement: t,
                        children: (0, r.jsxs)('div', {
                            className: W().root,
                            children: [
                                (0, r.jsx)(D.Y, {
                                    variant: D.V.TEXT,
                                    withForwardControl: !1,
                                    withBackwardControl: e.canBack,
                                    children: (0, r.jsx)(U.W, { className: W().shimmerTitle, radius: 'xxxl' }),
                                }),
                                (0, r.jsx)(S.N, {
                                    ref: n,
                                    className: W().scrollContainer,
                                    children: (0, r.jsx)('div', {
                                        className: W().content,
                                        children: (0, r.jsx)('div', {
                                            'aria-label': l,
                                            ref: a,
                                            style: _,
                                            className: W().container,
                                            children: o.getVirtualItems().map((e) =>
                                                (0, r.jsx)(
                                                    b.U,
                                                    {
                                                        className: W().row,
                                                        columnClassName: W().column,
                                                        virtualItem: e,
                                                        resizeObserver: c,
                                                        indices: u,
                                                        renderItemByIndex: G,
                                                        scrollMargin: o.options.scrollMargin,
                                                    },
                                                    e.key,
                                                ),
                                            ),
                                        }),
                                    }),
                                }),
                            ],
                        }),
                    });
                },
                V = () => {
                    let e = (0, i.useSearchParams)(),
                        t = e.get('type'),
                        n = e.get('id');
                    return (
                        (t && n) || (0, i.notFound)(),
                        (0, r.jsx)(p, { children: (0, r.jsx)(a.Suspense, { fallback: (0, r.jsx)(B, {}), children: (0, r.jsx)(K, { type: t, id: n }) }) })
                    );
                };
        },
        2792: (e, t, n) => {
            'use strict';
            n.d(t, { J: () => a });
            var r = n(55178),
                i = n(10936);
            function a() {
                return (0, r.useContext)(i.l);
            }
        },
        3064: (e, t, n) => {
            'use strict';
            n.d(t, { D: () => r });
            let r = (0, n(55178).createContext)({ skeleton: void 0 });
        },
        5245: (e, t, n) => {
            'use strict';
            n.d(t, { m: () => a });
            var r = n(60754),
                i = n(55178);
            let a = (e) => {
                let { createStore: t, getPendingPatchBatches: n, patchesUpdatedEventName: a } = e,
                    s = (0, i.useRef)([]),
                    [l] = (0, i.useState)(() => {
                        let e = t();
                        for (let t of n()) (0, r.X6)(e, t);
                        return e;
                    });
                return (
                    (0, i.useLayoutEffect)(() => {
                        let e = () => {
                            for (let e of n()) (0, r.X6)(l, e);
                        };
                        return e(), window.addEventListener(a, e), () => window.removeEventListener(a, e);
                    }, [n, a, l]),
                    { store: l, patchesRef: s }
                );
            };
        },
        6752: (e, t, n) => {
            'use strict';
            n.d(t, { L: () => i });
            var r = {};
            Object.defineProperty(r, '__esModule', { value: !0 }), (r.useReturnValue = void 0), (r.useReturnValue = (e) => e()), r.__esModule;
            var i = r.useReturnValue;
        },
        8626: (e, t, n) => {
            'use strict';
            n.d(t, { m: () => r });
            let r = () => ({ year: 'numeric' });
        },
        9848: (e, t, n) => {
            'use strict';
            n.d(t, { F: () => r });
            let r = (0, n(55178).createContext)({ tabId: void 0, tabPos: void 0, isTabSelectedByDefault: void 0 });
        },
        10570: (e) => {
            e.exports = {
                root: 'ConcertMeta_root__CkKU3',
                city: 'ConcertMeta_city__ngDq2',
                info: 'ConcertMeta_info__czKlU',
                time: 'ConcertMeta_time__gX09u',
                cashback: 'ConcertMeta_cashback__fkZfk',
                meta: 'ConcertMeta_meta__GteL_',
                title: 'ConcertMeta_title__cqonb',
                location: 'ConcertMeta_location__HuUgv',
                rating: 'ConcertMeta_rating__P4Ana',
                separator: 'ConcertMeta_separator__BcJsF',
            };
        },
        10936: (e, t, n) => {
            'use strict';
            n.d(t, { l: () => r });
            let r = (0, n(55178).createContext)({
                objectType: void 0,
                objectId: void 0,
                objectPosX: void 0,
                objectPosY: void 0,
                objectPos: void 0,
                objectsCount: void 0,
                mainObjectId: void 0,
                mainObjectType: void 0,
            });
        },
        11489: (e) => {
            e.exports = { root: 'AfishaWidget_root__Fu9a6', content: 'AfishaWidget_content__YFmbs', widget: 'AfishaWidget_widget__ZdvqS' };
        },
        12578: (e, t, n) => {
            'use strict';
            n.d(t, { h: () => p });
            var r = n(32290),
                i = n(55178),
                a = n(60900),
                s = n(21732),
                l = n(63423),
                o = n(84638),
                c = n(74196),
                d = n(70204),
                u = n(34186),
                _ = n(21916),
                m = n(74523),
                g = n(97201),
                v = n(11489),
                h = n.n(v);
            let p = (e) => {
                let { dataSessionId: t, isOpened: n, onOpen: v, onClose: p } = e,
                    E = (0, u.N)().get(d.tw),
                    { formatMessage: C } = (0, a.A)(),
                    I = (() => {
                        let e = (0, _.useSearchParams)();
                        return (0, i.useCallback)(
                            (t) => {
                                let n = e.get(g.K.UTM_CAMPAIGN);
                                if (!n) return t;
                                let r = new URLSearchParams();
                                return r.set(g.K.UTM_SOURCE, 'campaignid_'.concat(n)), (0, m.C)(t, r);
                            },
                            [e],
                        );
                    })(),
                    T = (0, i.useCallback)(
                        (e) => {
                            e.origin === E.afisha.host && 'close' === e.data.type && p();
                        },
                        [p, E.afisha.host],
                    );
                (0, i.useEffect)(
                    () => (
                        window.addEventListener('message', T),
                        () => {
                            window.removeEventListener('message', T);
                        }
                    ),
                    [T],
                );
                let S = (0, i.useCallback)(
                        (e) => {
                            e ? v() : p();
                        },
                        [p, v],
                    ),
                    f = I(''.concat(E.afisha.host, '/w/sessions/').concat(t, '?clientKey=').concat(E.afisha.clientId));
                return (0, r.jsxs)(o.a, {
                    size: 'fitContent',
                    placement: 'center',
                    open: n,
                    onOpenChange: S,
                    onClose: p,
                    showHeader: !1,
                    className: h().widget,
                    contentClassName: h().content,
                    overlayColor: 'full',
                    containerProps: { 'data-test-id': s.OA.concert.AFISHA_MODAL },
                    children: [
                        (0, r.jsx)(c.q, { children: (0, r.jsx)(l.$, { 'aria-label': C({ id: 'interface-actions.close' }), onClick: p }) }),
                        (0, r.jsx)('iframe', {
                            src: f,
                            className: h().root,
                            referrerPolicy: 'no-referrer',
                            sandbox: 'allow-forms allow-modals allow-popups allow-scripts allow-same-origin',
                            allow: 'clipboard-read clipboard-write',
                        }),
                    ],
                });
            };
        },
        12989: (e, t, n) => {
            'use strict';
            n.d(t, { D: () => p });
            var r = n(55178),
                i = n(16172),
                a = n(52068),
                s = n(6752),
                l = n(62376),
                o = n(1677),
                c = n(48922),
                d = n(84782),
                u = n(30915),
                _ = n(18746),
                m = n(2792),
                g = n(37240),
                v = n(51012),
                h = n(47498);
            let p = () => {
                let e = (0, l.U)(),
                    t = (0, a.st)(),
                    { hash: n } = (0, a.gf)(),
                    { pageId: p, displayReasonId: E } = (0, g.$)(),
                    { tabId: C, tabPos: I, isTabSelectedByDefault: T } = (0, h.R)(),
                    { offsetBlockPosY: S } = (0, u.u)(),
                    { blockType: f, blockId: N, blockPosX: y, blockPosY: A, mainObjectId: b, mainObjectType: x, displayReasonId: O } = (0, d.N)(),
                    { filterKey: R, filterValue: L, filterPos: k } = (0, _.G)(),
                    { objectType: w, objectsCount: P, objectId: j, objectPosX: M, objectPosY: D } = (0, m.J)(),
                    { skeleton: Q } = (0, v.b)(),
                    W = null != O ? O : E,
                    K = (0, s.L)(() => (void 0 !== S && void 0 !== A ? S + A : A));
                return (0, r.useCallback)(
                    (r, a) => {
                        if (!t || !p || !c.xK.includes(p) || !c.fD.includes(p)) return;
                        let s = o.F[p];
                        if (!s) return;
                        let l = {
                            hash: n,
                            pageId: s,
                            entityType: f,
                            entityId: N,
                            entityPosX: y,
                            entityPosY: K,
                            objectsCount: P,
                            viewUuid: a,
                            objectType: w,
                            objectId: j,
                            objectPosX: M,
                            objectPosY: D,
                        };
                        void 0 !== R && ((l.filterKey = R), (l.filterValue = L), (l.filterPos = k)),
                            c.qG.includes(p) && ((l.tabId = C), (l.tabPos = I), (l.isTabSelectedByDefault = T)),
                            Q && (l.skeletonId = Q),
                            'string' == typeof b && 'string' == typeof x && ((l.mainObjectType = x), (l.mainObjectId = b)),
                            W && (l.displayReasonId = W);
                        let d = (0, i.Fx)({ params: l, logger: e, context: 'useSendEventOnBlockShowedOrHidden' });
                        d && (r ? (0, i.Pf)(t.evgenInstance, d) : (0, i.nv)(t.evgenInstance, d));
                    },
                    [t, W, N, y, K, f, R, k, L, n, T, e, b, x, j, M, D, w, P, p, Q, C, I],
                );
            };
        },
        14858: (e, t, n) => {
            'use strict';
            n.d(t, { w: () => s });
            var r = n(60900),
                i = n(57594),
                a = n(79406);
            let s = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    { formatMessage: t } = (0, r.A)(),
                    { user: n, experiments: s } = (0, i.g)(),
                    l = 'ru' === n.account.data.userSessionRegionIso && s.checkExperiment(a.z.WebNextFooterDisclaimer, 'on'),
                    o = t(e ? { id: 'footer.explicit-content' } : { id: 'about-app.explicit-content' });
                return l ? t({ id: 'footer.disclaimer-content' }) : o;
            };
        },
        15567: (e, t, n) => {
            'use strict';
            n.d(t, { M: () => i });
            var r = n(60754);
            let i = (e) => {
                let t = (0, r.Zn)(e);
                if (((e) => 'object' == typeof e && null !== e && 'isRootModel' in e && !0 === e.isRootModel)(t)) return t;
                let { rootStore: n } = (0, r._$)(e);
                return n || t;
            };
        },
        18746: (e, t, n) => {
            'use strict';
            n.d(t, { G: () => a });
            var r = n(55178),
                i = n(70608);
            function a() {
                return (0, r.useContext)(i.S);
            }
        },
        19111: (e) => {
            e.exports = { root: 'ConcertDate_root__xnVG1', month: 'ConcertDate_month__ti5Na', day: 'ConcertDate_day__YibpP', weekday: 'ConcertDate_weekday__fBZXo' };
        },
        19381: (e, t, n) => {
            'use strict';
            n.d(t, { h: () => l });
            var r = n(60754),
                i = n(36125),
                a = n(69538),
                s = n(82757);
            let l = (e, t) => {
                var n, l, o, c;
                let { uri: d, color: u } = e.cover || {};
                return (0, r.wg)({
                    id: e.id,
                    title: e.concertTitle,
                    city: e.city,
                    place: e.place,
                    datetime: e.datetime && (0, a.A)(e.datetime),
                    contentRating: e.contentRating,
                    dataSessionId: e.dataSessionId,
                    cover: { uri: d, color: u },
                    rank: e.rank,
                    cashbackTitle: null == (n = e.cashback) ? void 0 : n.title,
                    cashbackValuePercent: null == (l = e.cashback) ? void 0 : l.valuePercent,
                    price: (0, s.J)(t),
                    eventKind: null != (c = null == (o = e.eventInfo) ? void 0 : o.type) ? c : i.Z.UNSPECIFIED,
                });
            };
        },
        19522: (e, t, n) => {
            'use strict';
            n.d(t, { Y: () => a });
            var r = n(60900),
                i = n(91027);
            let a = () => {
                let { formatMessage: e, formatNumber: t } = (0, r.A)();
                return (0, i.c)((n) => {
                    var r, i;
                    return (null == (r = n.price) ? void 0 : r.value)
                        ? e(
                              { id: 'payment.min-price' },
                              { value: t(n.price.value, { style: 'currency', currency: null == (i = n.price) ? void 0 : i.currency, maximumFractionDigits: 0 }) },
                          )
                        : e({ id: 'payment.buy' });
                });
            };
        },
        20472: (e, t, n) => {
            'use strict';
            n.d(t, { Z: () => i });
            var r = n(36477);
            let i = {
                main: (0, r.u)('/'),
                chart: (0, r.u)('/chart'),
                chartPodcasts: (0, r.u)('/chart/podcasts'),
                collection: (0, r.u)('/collection'),
                collectionAlbums: (0, r.u)('/collection/albums'),
                collectionArtists: (0, r.u)('/collection/artists'),
                collectionClips: (0, r.u)('/collection/clips'),
                collectionDislikes: (0, r.u)('/collection/dislikes'),
                collectionKids: (0, r.u)('/collection/kids'),
                collectionKidsAlbums: (0, r.u)('/collection/kids/albums'),
                collectionKidsPlaylists: (0, r.u)('/collection/kids/playlists'),
                collectionKidsTracks: (0, r.u)('/collection/kids/tracks'),
                collectionNonMusic: (0, r.u)('/collection/non-music'),
                collectionNonMusicLiked: (0, r.u)('/collection/non-music/liked'),
                collectionVibeRooms: (0, r.u)('/collection/multivibes'),
                collectionPlaylists: (0, r.u)('/collection/playlists'),
                collectionPlaylistsCreated: (0, r.u)('/collection/playlists/created'),
                collectionPlaylistsLiked: (0, r.u)('/collection/playlists/liked'),
                collectionShelf: (0, r.u)('/collection/shelf'),
                collectionShelfLiked: (0, r.u)('/collection/shelf/liked'),
                collectionShelfNewEpisodes: (0, r.u)('/collection/shelf/new-episodes'),
                collectionShelfRecentlyPlayed: (0, r.u)('/collection/shelf/recently-played'),
                concerts: (0, r.u)('/concerts'),
                kids: (0, r.u)('/kids'),
                mixes: (0, r.u)('/mixes'),
                musicHistory: (0, r.u)('/music-history'),
                mymusic: (0, r.u)('/mymusic'),
                mymusicDownloadsTracks: (0, r.u)('/mymusic/downloads/tracks'),
                nonMusic: (0, r.u)('/non-music'),
                pay: (0, r.u)('/pay'),
                userSlides: (0, r.u)('/slides/user'),
                search: (0, r.u)('/search'),
                searchHistory: (0, r.u)('/search/history'),
                settings: (0, r.u)('/settings'),
                video: (0, r.u)('/video'),
            };
        },
        20599: (e, t, n) => {
            'use strict';
            n.d(t, { E: () => r });
            let r = (0, n(55178).createContext)({ offsetBlockPosY: void 0 });
        },
        23352: (e, t, n) => {
            'use strict';
            n.d(t, { n: () => s });
            var r = n(55178),
                i = n(12989),
                a = n(80536);
            let s = function () {
                let { callback: e, singleEvent: t, withViewUuid: n } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    s = (0, r.useRef)(null),
                    l = (0, i.D)(),
                    o = (0, r.useId)(),
                    c = (0, r.useContext)(a.B),
                    d = (0, r.useCallback)(
                        (r, i) => {
                            e ? e(r, n ? i : void 0) : l(r, i), t && c.unobserveElement(o);
                        },
                        [e, c, o, l, t, n],
                    );
                return (
                    (0, r.useEffect)(
                        () => (
                            c.observeElement({ elementRef: s, elementId: o, callback: d }),
                            () => {
                                c.unobserveElement(o);
                            }
                        ),
                        [e, c, d, o, l],
                    ),
                    { ref: s, intersectionPropertyId: o }
                );
            };
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
        30915: (e, t, n) => {
            'use strict';
            n.d(t, { u: () => a });
            var r = n(55178),
                i = n(20599);
            function a() {
                return (0, r.useContext)(i.E);
            }
        },
        31010: (e, t, n) => {
            'use strict';
            n.d(t, { H: () => i, P: () => a });
            var r = n(55178);
            let i = (0, r.createContext)(null),
                a = () => (0, r.useContext)(i);
        },
        31726: (e, t, n) => {
            'use strict';
            n.d(t, { Y: () => l });
            var r = n(54280),
                i = n(70204),
                a = n(34186),
                s = n(62376);
            let l = () => {
                let e = (0, a.N)(),
                    t = e.get(i.oo),
                    n = e.get(i.uM),
                    l = e.get(i.ff),
                    o = e.get(i.tw),
                    c = e.get(i.P0),
                    d = (() => {
                        let e = (0, a.N)(),
                            t = e.get(i.$I),
                            n = e.get(i.EN),
                            r = e.get(i.N1),
                            s = e.get(i._1),
                            l = e.get(i.V3),
                            o = e.get(i.Lb),
                            c = e.get(i.wK),
                            d = e.get(i.tz),
                            u = e.get(i.$8),
                            _ = e.get(i.Oo),
                            m = e.get(i.X4),
                            g = e.get(i.O9),
                            v = e.get(i.E),
                            h = e.get(i.wH),
                            p = e.get(i.ok),
                            E = e.get(i.X8),
                            C = e.get(i.yq),
                            I = e.get(i.NN),
                            T = e.get(i.qN),
                            S = e.get(i.ro),
                            f = e.get(i.nM),
                            N = e.get(i.Ut),
                            y = e.get(i.K1),
                            A = e.get(i.eu),
                            b = e.get(i.aE),
                            x = e.get(i.ki),
                            O = e.get(i.c9),
                            R = e.get(i.en),
                            L = e.get(i.jQ),
                            k = e.get(i.cZ),
                            w = e.get(i.Zl),
                            P = e.get(i.CN),
                            j = e.get(i.P1),
                            M = e.get(i.zj),
                            D = e.get(i.re),
                            Q = e.get(i.JM),
                            W = e.get(i.Lk),
                            K = e.get(i.$$),
                            U = e.get(i.sv),
                            G = e.get(i.gd),
                            B = e.get(i.Ez),
                            V = e.get(i.u2),
                            H = e.get(i.TD),
                            F = e.get(i.dh),
                            Y = e.get(i.LC),
                            z = e.get(i.PL),
                            X = e.get(i.DT);
                        return {
                            accountResource: t,
                            afterTrackResource: n,
                            disclaimersResource: r,
                            usersResource: s,
                            landingResource: l,
                            landing3Resource: o,
                            landingBlocksResource: c,
                            albumResource: d,
                            libraryResource: u,
                            tracksResource: _,
                            topResource: m,
                            artistsResource: g,
                            slidesResource: v,
                            redAlertResource: h,
                            rotorResource: p,
                            waveResource: E,
                            searchResource: C,
                            searchPlaylistResource: I,
                            playlistResource: T,
                            playlistsResource: S,
                            pinResource: f,
                            metatagsResource: N,
                            tagResource: y,
                            feedResource: A,
                            pinsResource: b,
                            musicHistoryResource: x,
                            dynamicPagesResource: O,
                            chartResource: R,
                            clipsResource: L,
                            lyricViewsResource: k,
                            nonMusicResource: w,
                            donationResource: P,
                            loaderResource: j,
                            lumenResource: M,
                            prefixlessResource: D,
                            streamsResource: Q,
                            filtersResource: W,
                            ugcResource: K,
                            collectionResource: U,
                            adsResource: G,
                            personalResource: B,
                            familyResource: V,
                            childrenLandingResource: H,
                            promoResource: F,
                            telemetryResource: Y,
                            labelsResource: z,
                            concertsResource: X,
                            wordsResource: e.get(i.dA),
                            wheelResource: e.get(i.$Y),
                        };
                    })(),
                    u = (0, s.U)(),
                    _ = (0, a.N)().get(i.TK),
                    m = e.get(i.ni),
                    g = new r.si(),
                    v = new r.fW();
                return {
                    ...d,
                    acqOffers: n,
                    disclaimerDictionary: l,
                    logger: u,
                    modelActionsLogger: _,
                    localStorage: g,
                    sessionStorage: v,
                    containerStorage: t,
                    config: o,
                    clientSafeConfig: c,
                    landingSdk: m,
                };
            };
        },
        32468: (e, t, n) => {
            'use strict';
            n.d(t, { A: () => s });
            var r = n(32290),
                i = n(77088),
                a = n.n(i);
            let s = (e) => {
                let { children: t } = e;
                return (0, r.jsx)('footer', { className: a().empty });
            };
        },
        34326: (e, t, n) => {
            'use strict';
            n.d(t, { U: () => c });
            var r = n(32290),
                i = n(63618),
                a = n(96103),
                s = n(55178),
                l = n(62366),
                o = n.n(l);
            let c = (0, a.PA)((e) => {
                let { indices: t, virtualItem: n, renderItemByIndex: a, columnClassName: l, className: c, resizeObserver: d, scrollMargin: u } = e,
                    _ = (0, s.useRef)(null),
                    m = t[n.index],
                    g = { '--virtual-grid-row-vertical-offset': ''.concat(n.start - u, 'px') };
                return (
                    (0, s.useEffect)(() => {
                        let e = _.current;
                        if (e)
                            return (
                                null == d || d.observe(e),
                                () => {
                                    null == d || d.unobserve(e);
                                }
                            );
                    }, [d]),
                    (0, r.jsx)('div', {
                        'data-index': n.index,
                        ref: _,
                        style: g,
                        className: (0, i.$)(o().root, c),
                        children: null == m ? void 0 : m.map((e) => (0, r.jsx)('div', { className: l, children: a(e) }, ''.concat(n.key, '_').concat(e))),
                    })
                );
            });
        },
        36125: (e, t, n) => {
            'use strict';
            var r;
            n.d(t, { Z: () => r }),
                (function (e) {
                    (e.CONCERT = 'concert'), (e.FESTIVAL = 'festival'), (e.TRIBUTE = 'tribute'), (e.MUSICAL = 'musical'), (e.UNSPECIFIED = 'unspecified');
                })(r || (r = {}));
        },
        36885: (e, t, n) => {
            'use strict';
            n.d(t, { H: () => i });
            var r = n(19381);
            let i = (e) => (0, r.h)(e.data.concert, e.data.minPrice);
        },
        37240: (e, t, n) => {
            'use strict';
            n.d(t, { $: () => a });
            var r = n(55178),
                i = n(1176);
            function a() {
                return (0, r.useContext)(i.r);
            }
        },
        42406: (e, t, n) => {
            'use strict';
            n.d(t, { BL: () => d, Gv: () => o, L5: () => c });
            var r,
                i = n(55178),
                a = {
                    5663: (e, t, n) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.useIntersectionObserver = t.createIntersectionObserver = t.getElementNameByDataAttribute = t.isInViewportNow = t.defaultOptions = void 0);
                        let r = n(810),
                            { innerWidth: i = 0, innerHeight: a = 0 } = window;
                        function s(e) {
                            let { top: t, right: n, bottom: r, left: s } = e.getBoundingClientRect();
                            return ((t >= 0 && t <= a) || (r >= 0 && r <= a)) && ((s >= 0 && s <= i) || (n >= 0 && n <= i));
                        }
                        function l(e) {
                            var t, n;
                            let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'data-intersection-property-id';
                            return null != (n = null == e || null == (t = e.getAttribute) ? void 0 : t.call(e, r)) ? n : e.attributes[0];
                        }
                        function o(e, t) {
                            let n = new IntersectionObserver((t) => {
                                t.forEach((t) => {
                                    e(t, n);
                                });
                            }, t);
                            return n;
                        }
                        (t.defaultOptions = { threshold: 0, preflightCheck: !0 }),
                            (t.isInViewportNow = s),
                            (t.getElementNameByDataAttribute = l),
                            (t.createIntersectionObserver = o),
                            (t.useIntersectionObserver = function (e, n, i) {
                                let [{ freezeOnceVisible: a, preflightCheck: c, ...d }, u = !1] =
                                        'boolean' == typeof n || void 0 === n ? [t.defaultOptions, n] : [{ ...t.defaultOptions, ...n }, i],
                                    [_, m] = (0, r.useState)({}),
                                    g = (0, r.useRef)(new Set()),
                                    v = (0, r.useMemo)(
                                        () =>
                                            u
                                                ? null
                                                : o((e) => {
                                                      let t = l(e.target);
                                                      if (t && v) {
                                                          if (g.current.has(t)) return;
                                                          m((n) => ({ ...n, [t]: { isIntersecting: e.isIntersecting } })),
                                                              a && e.isIntersecting && (g.current.add(t), v.unobserve(e.target));
                                                      }
                                                  }, d),
                                        [u],
                                    );
                                return (
                                    (0, r.useLayoutEffect)(
                                        () => (
                                            v &&
                                                !u &&
                                                e.forEach((e) => {
                                                    if (e.current) {
                                                        let t = !1;
                                                        if (c && (t = s(e.current))) {
                                                            let t = l(e.current);
                                                            m((e) => ({ ...e, [t]: { isIntersecting: !0 } }));
                                                        }
                                                        t || v.observe(e.current);
                                                    }
                                                }),
                                            () => {
                                                v && v.disconnect();
                                            }
                                        ),
                                        [u, v, e.length],
                                    ),
                                    _
                                );
                            });
                    },
                    810: (e) => {
                        e.exports = r || (r = n.t(i, 2));
                    },
                },
                s = {},
                l = (function e(t) {
                    var n = s[t];
                    if (void 0 !== n) return n.exports;
                    var r = (s[t] = { exports: {} });
                    return a[t](r, r.exports, e), r.exports;
                })(5663);
            l.__esModule;
            var o = l.createIntersectionObserver;
            l.defaultOptions;
            var c = l.getElementNameByDataAttribute;
            l.isInViewportNow;
            var d = l.useIntersectionObserver;
        },
        44989: (e, t, n) => {
            'use strict';
            n.d(t, { e: () => o });
            var r,
                i = n(55178),
                a = {
                    810: (e) => {
                        e.exports = r || (r = n.t(i, 2));
                    },
                },
                s = {},
                l = {};
            (() => {
                Object.defineProperty(l, '__esModule', { value: !0 }), (l.useToggle = void 0);
                let e = (function e(t) {
                    var n = s[t];
                    if (void 0 !== n) return n.exports;
                    var r = (s[t] = { exports: {} });
                    return a[t](r, r.exports, e), r.exports;
                })(810);
                l.useToggle = (t) => {
                    let [n, r] = (0, e.useState)(t);
                    (0, e.useEffect)(() => {
                        r(t);
                    }, [t]);
                    let i = (0, e.useCallback)(() => {
                            r((e) => !e);
                        }, []),
                        a = (0, e.useCallback)(() => {
                            r(!0);
                        }, []),
                        s = (0, e.useCallback)(() => {
                            r(!1);
                        }, []);
                    return { state: n, toggle: i, setState: r, toggleTrue: a, toggleFalse: s };
                };
            })(),
                l.__esModule;
            var o = l.useToggle;
        },
        45066: (e, t, n) => {
            'use strict';
            n.d(t, { n: () => r });
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
        47498: (e, t, n) => {
            'use strict';
            n.d(t, { R: () => a });
            var r = n(55178),
                i = n(9848);
            function a() {
                return (0, r.useContext)(i.F);
            }
        },
        47745: (e, t, n) => {
            'use strict';
            n.d(t, { N: () => E });
            var r = n(55178),
                i = n(16172),
                a = n(52068),
                s = n(6752),
                l = n(62376),
                o = n(1677),
                c = n(79374),
                d = n(48922),
                u = n(84782),
                _ = n(30915),
                m = n(18746),
                g = n(2792),
                v = n(37240),
                h = n(51012),
                p = n(47498);
            let E = () => {
                let e = (0, a.st)(),
                    t = (0, l.U)(),
                    { hash: n } = (0, a.gf)(),
                    { pageId: E, displayReasonId: C, pagePlacement: I, pageStyle: T } = (0, v.$)(),
                    { tabId: S, tabPos: f, isTabSelectedByDefault: N } = (0, p.R)(),
                    { offsetBlockPosY: y } = (0, _.u)(),
                    { blockId: A, blockType: b, blockPosX: x, blockPosY: O, mainObjectId: R, mainObjectType: L, displayReasonId: k } = (0, u.N)(),
                    { filterKey: w, filterValue: P, filterPos: j } = (0, m.G)(),
                    { objectId: M, objectPosX: D, objectPosY: Q, objectType: W, objectsCount: K } = (0, g.J)(),
                    { skeleton: U } = (0, h.b)(),
                    G = null != k ? k : C,
                    B = (0, s.L)(() => (void 0 !== y && void 0 !== O ? y + O : O));
                return (0, r.useCallback)(
                    (r) => {
                        let { to: a, objectId: s, objectType: l, deepLink: u, objectPosY: _ } = r;
                        if (!e || !E || !d.xK.includes(E) || !d.fD.includes(E)) return;
                        let m = o.F[E];
                        if (!m) return;
                        let g = {
                            hash: n,
                            pageId: m,
                            pagePlacement: null != I ? I : i.c4.Fullscreen,
                            pageStyle: null != T ? T : i.QL.Fullscreen,
                            entityType: b,
                            entityId: A,
                            entityPosX: x,
                            entityPosY: B,
                            objectId: null != s ? s : M,
                            objectType: null != l ? l : W,
                            objectPosX: D,
                            objectPosY: null != _ ? _ : Q,
                            objectsCount: K,
                            from: c.W[E],
                            to: a,
                        };
                        void 0 !== w && ((g.filterKey = w), (g.filterValue = P), (g.filterPos = j)),
                            d.qG.includes(E) && ((g.tabId = S), (g.tabPos = f), (g.isTabSelectedByDefault = N)),
                            U && (g.skeletonId = U),
                            u && (g.deepLink = u),
                            R && L && ((g.mainObjectType = L), (g.mainObjectId = R)),
                            G && (g.displayReasonId = G);
                        let v = (0, i.Fx)({ params: g, logger: t, context: 'useSendEventOnBlockNavigated' });
                        v && (0, i.QS)(e.evgenInstance, v);
                    },
                    [M, W, e, E, n, I, T, b, A, x, B, w, P, j, D, Q, K, U, R, L, G, t, S, f, N],
                );
            };
        },
        48922: (e, t, n) => {
            'use strict';
            n.d(t, { _Q: () => r, fD: () => a, qG: () => s, xK: () => i });
            var r = (function (e) {
                return (
                    (e.ALBUM = 'album'),
                    (e.PLAYLIST = 'playlist'),
                    (e.ARTIST = 'artist'),
                    (e.ARTIST_TRACKS = 'artist_tracks'),
                    (e.ARTIST_SIMILAR = 'artist_similar'),
                    (e.ARTIST_ALBUMS = 'artist_albums'),
                    (e.ARTIST_DISCOGRAPHY = 'artist_discography'),
                    (e.ARTIST_COMPILATIONS = 'artist_compilations'),
                    (e.ARTIST_CONCERTS = 'artist_concerts_screen'),
                    (e.ARTIST_CLIPS = 'artist_clips'),
                    (e.CHART = 'chart'),
                    (e.CHART_PODCASTS = 'chart_podcasts'),
                    (e.CHART_PODCASTS_CATEGORY = 'chart_podcasts_category'),
                    (e.HOME = 'home'),
                    (e.SEARCH = 'search'),
                    (e.SIDEBAR = 'sidebar'),
                    (e.OWN_COLLECTION = 'own_collection'),
                    (e.OWN_ALBUMS = 'own_albums'),
                    (e.OWN_DISLIKES = 'own_dislikes'),
                    (e.OWN_PODCASTS = 'own_podcasts'),
                    (e.OWN_ARTISTS = 'own_artists'),
                    (e.OWN_PLAYLISTS = 'own_playlists'),
                    (e.OWN_TRACKS = 'own_tracks'),
                    (e.OWN_CLIPS = 'own_clips'),
                    (e.RADIO = 'radio'),
                    (e.GENRE = 'genre'),
                    (e.GENRE_ALBUMS = 'genre_albums'),
                    (e.GENRE_ARTISTS = 'genre_artists'),
                    (e.GENRE_PLAYLISTS = 'genre_playlists'),
                    (e.TAG = 'tag'),
                    (e.POST = 'post'),
                    (e.HISTORY = 'history'),
                    (e.FAMILIAR_YOU = 'familiar_you'),
                    (e.PODCAST = 'podcast'),
                    (e.AUDIOBOOK = 'audiobook'),
                    (e.NON_MUSIC = 'non_music'),
                    (e.NON_MUSIC_CATEGORY_PLAYLISTS = 'non_music_category_playlists'),
                    (e.NON_MUSIC_ALBUMS = 'non_music_albums'),
                    (e.LANDING = 'landing'),
                    (e.ENTITIES = 'entities'),
                    (e.TRAILER = 'trailer'),
                    (e.TRACK = 'track'),
                    (e.TRACK_SCREEN = 'track_screen'),
                    (e.PLAYER = 'player'),
                    (e.KIDS = 'kids'),
                    (e.KIDS_EDITORIAL_PLAYLISTS = 'kids_editorial_playlists'),
                    (e.KIDS_EDITORIAL_ALBUMS = 'kids_editorial_albums'),
                    (e.DOWNLOADS_TRACKS = 'downloads_tracks'),
                    (e.TRAILER_OF_THE_YEAR = 'trailer_of_the_year'),
                    (e.COLLECTION_KIDS = 'collection_kids'),
                    (e.COLLECTION_KIDS_ALBUMS = 'collection_kids_albums'),
                    (e.COLLECTION_KIDS_PLAYLISTS = 'collection_kids_playlists'),
                    (e.COLLECTION_KIDS_TRACKS = 'collection_kids_tracks'),
                    (e.COLLECTION_VIBE_ROOMS = 'multivibe_screen'),
                    (e.VIDEO_PLAYER = 'video_player'),
                    (e.LABEL = 'label'),
                    (e.LABEL_ALBUMS = 'label_albums'),
                    (e.LABEL_ARTISTS = 'label_artists'),
                    (e.PAYWALL = 'paywall'),
                    (e.CONCERTS = 'concerts'),
                    (e.CONCERT_LOCATION_SELECTOR = 'concert_location_selector'),
                    (e.PROMOLANDING_ALBUM = 'promolanding_album'),
                    (e.CONCERT = 'concert_screen'),
                    (e.PAGE_NOT_FOUND_SCREEN = 'page_not_found_screen'),
                    (e.SLIDES_SCREEN = 'slides_screen'),
                    (e.WAVE_LANDING_SCREEN = 'wave_landing_screen'),
                    (e.FACT_SCREEN = 'fact_screen'),
                    (e.LUMEN_AWAKENING_SCREEN = 'lumen_awakening_screen'),
                    (e.MULTIVIBE_SENDING_INVITATION_SCREEN = 'multivibe_sending_invitation_screen'),
                    (e.MULTIVIBE_ACCEPTING_INVITATION_SCREEN = 'multivibe_accepting_invitation_screen'),
                    (e.MULTIVIBE_ACTION_SCREEN = 'multivibe_action_screen'),
                    (e.MULTIVIBE_ALONE_SCREEN = 'multivibe_alone_screen'),
                    (e.MULTIVIBE_INVALID_INVITATION_SCREEN = 'multivibe_invalid_invitation_screen'),
                    (e.MULTIVIBE_PENDING_INVITATION_SCREEN = 'multivibe_pending_invitation_screen'),
                    (e.MULTIVIBE_LIMIT_SCREEN = 'multivibe_limit_screen'),
                    (e.MULTIVIBE_ALREADY_EXIST_SCREEN = 'multivibe_already_exist_screen'),
                    e
                );
            })({});
            let i = [
                    'home',
                    'own_collection',
                    'landing',
                    'own_artists',
                    'artist',
                    'artist_concerts_screen',
                    'non_music',
                    'playlist',
                    'search',
                    'video_player',
                    'label',
                    'concerts',
                    'concert_screen',
                    'concert_location_selector',
                    'album',
                    'playlist',
                    'slides_screen',
                    'promolanding_album',
                    'wave_landing_screen',
                    'fact_screen',
                    'lumen_awakening_screen',
                    'multivibe_screen',
                    'multivibe_sending_invitation_screen',
                    'multivibe_accepting_invitation_screen',
                    'multivibe_action_screen',
                    'multivibe_alone_screen',
                    'multivibe_invalid_invitation_screen',
                    'multivibe_pending_invitation_screen',
                    'multivibe_already_exist_screen',
                ],
                a = [
                    'home',
                    'landing',
                    'non_music',
                    'own_collection',
                    'own_artists',
                    'search',
                    'artist',
                    'concerts',
                    'concert_screen',
                    'concert_location_selector',
                    'album',
                    'playlist',
                    'slides_screen',
                    'promolanding_album',
                    'wave_landing_screen',
                    'fact_screen',
                    'lumen_awakening_screen',
                    'multivibe_screen',
                    'multivibe_sending_invitation_screen',
                    'multivibe_accepting_invitation_screen',
                    'multivibe_action_screen',
                    'multivibe_alone_screen',
                    'multivibe_invalid_invitation_screen',
                    'multivibe_pending_invitation_screen',
                    'multivibe_already_exist_screen',
                ],
                s = ['home', 'landing', 'non_music', 'own_collection', 'search', 'artist', 'concerts', 'concert_screen', 'album', 'playlist'];
        },
        49259: (e, t, n) => {
            'use strict';
            n.d(t, { W: () => h, s: () => p });
            var r = n(32290),
                i = n(29222),
                a = n(96103),
                s = n(21916),
                l = n(55178),
                o = n(80451),
                c = n(96218),
                d = n(5245),
                u = n(57594),
                _ = n(31726);
            (0, a.eO)(!1);
            let m = (0, l.createContext)(null),
                g = (e) => {
                    let { children: t, store: n, storeKey: i } = e,
                        a = (0, l.useMemo)(() => ({ store: n, storeKey: i }), [n, i]);
                    return (0, r.jsx)(m.Provider, { value: a, children: t });
                },
                v = (e) => {
                    let { nonce: t, patchKey: n, patchesRef: i } = e;
                    return (
                        (0, s.useServerInsertedHTML)(() => {
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
                                                  .concat(c.O, "'));\n    "))(n, e),
                                      },
                                      nonce: null != t ? t : void 0,
                                  });
                        }),
                        null
                    );
                },
                h = (e) => {
                    let { createStore: t, patchKey: n } = e,
                        i = () => {
                            var e, t;
                            let r = null != (t = null == (e = window.__PAGE_STATE_PATCHES__) ? void 0 : e[n]) ? t : [];
                            return window.__PAGE_STATE_PATCHES__ && delete window.__PAGE_STATE_PATCHES__[n], r;
                        };
                    return {
                        pageStoreProvider: (e) => {
                            let { children: a, nonce: s } = e,
                                l = (0, _.Y)(),
                                o = (0, u.g)(),
                                { store: m, patchesRef: h } = (0, d.m)({
                                    createStore: () => t({ ...l, rootStore: o }),
                                    getPendingPatchBatches: i,
                                    patchesUpdatedEventName: c.O,
                                });
                            return (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)(v, { nonce: s, patchKey: n, patchesRef: h }), (0, r.jsx)(g, { store: m, storeKey: n, children: a })],
                            });
                        },
                    };
                };
            function p(e) {
                let { throwOnAbsence: t = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = (0, l.useContext)(m);
                if (!n || n.storeKey !== e) {
                    var r;
                    if (!t) return null;
                    throw new i.t('Page store context is missing or has unexpected key', {
                        code: 'E_CONTEXT_PAGE_STORE_NULL',
                        data: { actualStoreKey: null != (r = null == n ? void 0 : n.storeKey) ? r : 'null', expectedStoreKey: e },
                    });
                }
                return n.store;
            }
        },
        51012: (e, t, n) => {
            'use strict';
            n.d(t, { b: () => a });
            var r = n(55178),
                i = n(3064);
            function a() {
                return (0, r.useContext)(i.D);
            }
        },
        52068: (e, t, n) => {
            'use strict';
            n.d(t, { vZ: () => m, st: () => a, gf: () => l });
            var r = n(55178);
            let i = (0, r.createContext)(null);
            function a() {
                return (0, r.useContext)(i);
            }
            let s = (0, r.createContext)({ hash: void 0 });
            function l() {
                return (0, r.useContext)(s);
            }
            var o = n(32290),
                c = n(27576);
            let d = (e) => {
                let { children: t } = e,
                    n = (0, r.useMemo)(() => ({ hash: (0, c.A)() }), []);
                return (0, o.jsx)(s.Provider, { value: n, children: t });
            };
            var u = n(16172);
            let _ = null,
                m = (e) => {
                    let { allowAnalyticsLogs: t, children: n, evgenUserParam: a, logger: s, metrika: l } = e,
                        c = (0, r.useMemo)(() => {
                            if (_) return _;
                            let e = (0, u.vD)((e) => l.count(e, a), s, t),
                                n = (0, u.xU)(),
                                r = (0, u.$N)();
                            return (_ = new u.gK(e, n, r));
                        }, [s, l]);
                    return (0, o.jsx)(i.Provider, { value: c, children: (0, o.jsx)(d, { children: n }) });
                };
        },
        53109: (e, t, n) => {
            'use strict';
            n.d(t, { Q: () => w });
            var r = n(32290),
                i = n(96103),
                a = n(39407),
                s = n(16172),
                l = n(21732),
                o = n(91027),
                c = n(6752),
                d = n(44989),
                u = n(63423),
                _ = n(74196),
                m = n(71926),
                g = n(47745),
                v = n(23352),
                h = n(84062),
                p = n(57594),
                E = n(79406),
                C = n(86562),
                I = n(36477),
                T = n(19522),
                S = n(12578),
                f = n(98066);
            let N = ' • ',
                y = (e, t) => {
                    let n = [];
                    return e.city && n.push(e.city), e.place && n.push(e.place), n.join(t);
                };
            var A = n(10570),
                b = n.n(A);
            let x = (0, i.PA)((e) => {
                let { concert: t, cashback: n } = e;
                return (0, r.jsxs)('div', {
                    className: b().meta,
                    children: [
                        (0, r.jsx)(m.HL, {
                            variant: 'span',
                            type: 'controls',
                            size: 'l',
                            weight: 'medium',
                            lineClamp: 1,
                            className: b().title,
                            'data-test-id': l.OA.concert.CONCERT_CARD_TITLE,
                            children: t.title,
                        }),
                        (0, r.jsxs)(m.HL, {
                            variant: 'span',
                            type: 'controls',
                            weight: 'medium',
                            className: b().info,
                            children: [
                                (0, r.jsx)(m.HL, {
                                    variant: 'span',
                                    type: 'controls',
                                    weight: 'medium',
                                    lineClamp: 1,
                                    className: b().location,
                                    'aria-label': y(t, ' '),
                                    'data-test-id': l.OA.concert.CONCERT_CARD_LOCATION,
                                    children: y(t, N),
                                }),
                                (0, r.jsx)(m.HL, { 'aria-hidden': !0, className: b().separator, variant: 'span', type: 'controls', weight: 'medium', children: N }),
                                (0, r.jsx)(m.HL, {
                                    variant: 'span',
                                    type: 'controls',
                                    weight: 'medium',
                                    className: b().rating,
                                    'data-test-id': l.OA.concert.CONCERT_CARD_CONTENT_RATING,
                                    children: t.contentRating,
                                }),
                            ],
                        }),
                        n,
                    ],
                });
            });
            var O = n(61744),
                R = n(81697),
                L = n(96871),
                k = n.n(L);
            let w = (0, i.PA)((e) => {
                var t, n, i;
                let { concert: N, withMask: y = !0, withPriceButton: A, withInlineMeta: b = !1 } = e,
                    { state: L, toggleTrue: w, toggleFalse: P } = (0, d.e)(!1),
                    { ref: j, intersectionPropertyId: M } = (0, v.n)(),
                    { experiments: D } = (0, p.g)(),
                    Q = D.checkExperiment(E.z.WebNextConcertPage, 'on'),
                    W = (0, g.N)(),
                    K = (0, T.Y)(),
                    { href: U } = (0, I.u)('/concert/:concertId', { params: { concertId: N.id } }),
                    G = (0, h.Z)(U),
                    B = K(N),
                    V = (0, o.c)((e) => {
                        W({ to: s.QT.ConcertPurchaseScreen }), w(), null == e || e.stopPropagation();
                    }),
                    H = (0, o.c)((e) => {
                        if (!Q) return void V(e);
                        W({ to: s.QT.ConcertScreen }), G(e);
                    }),
                    F = (0, o.c)((e) => {
                        (e.code === C.v.SPACE || e.code === C.v.ENTER) && (e.preventDefault(), H());
                    }),
                    Y = (0, o.c)((e) => {
                        Q && (V(e), e.preventDefault());
                    }),
                    z = (0, c.L)(() => {
                        let e = N.isIdentityExperimentEnabled && N.cashbackValuePercent,
                            t = !N.isIdentityExperimentEnabled && N.isCashbackExperimentEnabled && N.cashbackTitle;
                        if (e || t)
                            return (0, r.jsx)(f.m, {
                                className: k().cashback,
                                titleClassName: k().cashbackTitle,
                                title: N.cashbackTitle,
                                valuePercent: N.cashbackValuePercent,
                            });
                    }),
                    X = (0, r.jsx)(O.M, { concert: N, withCashback: !1, withInlineMeta: b, titleSize: 'l' }),
                    $ = (0, r.jsx)(x, { concert: N, cashback: z });
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)('div', {
                            className: k().root,
                            role: 'button',
                            tabIndex: 0,
                            onClick: H,
                            onKeyDown: F,
                            ref: j,
                            'data-intersection-property-id': M,
                            'data-test-id': l.OA.concert.CONCERT_CARD,
                            children: [
                                (0, r.jsx)(_.q, { children: (0, r.jsx)(m.HL, { variant: 'div', children: (0, r.jsx)(a.A, { id: 'entity-names.concert' }) }) }),
                                (0, r.jsx)('div', {
                                    className: k().cover,
                                    children: (0, r.jsx)(R.W, {
                                        datetime: N.datetime,
                                        coverColor: null == (t = N.cover) ? void 0 : t.color,
                                        uri: null == (n = N.cover) ? void 0 : n.uri,
                                        withMask: y,
                                        cashbackPercent: N.isIdentityExperimentEnabled ? N.cashbackValuePercent : void 0,
                                    }),
                                }),
                                N.isIdentityExperimentEnabled ? X : $,
                                !!(null == (i = N.price) ? void 0 : i.value) && (0, r.jsx)(_.q, { children: (0, r.jsx)(m.HL, { variant: 'div', children: B }) }),
                                A &&
                                    (0, r.jsx)(u.$, {
                                        'aria-hidden': !0,
                                        tabIndex: -1,
                                        radius: 'xxxl',
                                        className: k().button,
                                        size: 'default',
                                        variant: 'default',
                                        color: 'primary',
                                        onClick: Y,
                                        'data-test-id': l.OA.concert.CONCERT_CARD_BUTTON,
                                        children: B,
                                    }),
                            ],
                        }),
                        (0, r.jsx)(S.h, { dataSessionId: N.dataSessionId, isOpened: L, onOpen: w, onClose: P }),
                    ],
                });
            });
        },
        54267: (e) => {
            e.exports = {
                root: 'ConcertImage_root__gZpOa',
                root_withMask: 'ConcertImage_root_withMask__1ayfK',
                image: 'ConcertImage_image__xtZCZ',
                day: 'ConcertImage_day__c90Ih',
                month: 'ConcertImage_month__Ic5k5',
                date: 'ConcertImage_date__aH1IR',
                date_withEventType: 'ConcertImage_date_withEventType__QRb1o',
                day_withEventType: 'ConcertImage_day_withEventType__GI5B9',
                month_withEventType: 'ConcertImage_month_withEventType__Thry7',
                weekday_withEventType: 'ConcertImage_weekday_withEventType__v4vMZ',
                dateBackground: 'ConcertImage_dateBackground__GAONC',
                weekday: 'ConcertImage_weekday__kXeo3',
                important: 'ConcertImage_important__0o7jF',
                cashback: 'ConcertImage_cashback__TQ_tu',
            };
        },
        54280: (e, t, n) => {
            'use strict';
            n.d(t, { V8: () => a, si: () => l, fW: () => _, MJ: () => u, jU: () => g, Bx: () => m });
            var r = n(78061);
            function i(e) {
                if (!e) return null;
                try {
                    return JSON.parse(e);
                } catch (e) {
                    return console.error(e), null;
                }
            }
            class a {
                get(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    try {
                        let s = (0, r.Jt)(e);
                        if (t) {
                            var n, a;
                            return null != (a = null == (n = i(s)) ? void 0 : n.value) ? a : null;
                        }
                        return null != s ? s : null;
                    } catch (e) {
                        return null;
                    }
                }
                set(e, t, n) {
                    let i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
                    try {
                        let a = i ? JSON.stringify({ value: t }) : t;
                        (0, r.hZ)(e, a, n);
                    } catch (e) {
                        console.error(e);
                    }
                }
                has(e) {
                    return null !== this.get(e, !1);
                }
                remove(e) {
                    try {
                        (0, r.TF)(e);
                    } catch (e) {}
                }
            }
            function s(e) {
                try {
                    var t;
                    return null != (t = window[e]) ? t : null;
                } catch (e) {
                    return null;
                }
            }
            class l {
                get(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        n = s('localStorage');
                    if (!n) return null;
                    try {
                        var r;
                        let a = n.getItem(e) || void 0;
                        if (!t) return a;
                        let s = i(a);
                        if (!s) return null;
                        let l = null != (r = null == s ? void 0 : s.value) ? r : null;
                        if ((null == s ? void 0 : s.expires) && Date.now() > new Date(s.expires).getTime()) return this.remove(e), null;
                        return l;
                    } catch (e) {
                        return null;
                    }
                }
                set(e, t, n) {
                    if ('number' == typeof (null == n ? void 0 : n.expires)) {
                        let e = new Date();
                        e.setMilliseconds(e.getMilliseconds() + 864e5 * n.expires), (n.expires = e);
                    }
                    let r = s('localStorage');
                    if (r)
                        try {
                            r.setItem(e, JSON.stringify({ value: t, ...n }));
                        } catch (e) {}
                }
                has(e) {
                    return null !== this.get(e);
                }
                remove(e) {
                    let t = s('localStorage');
                    if (t)
                        try {
                            t.removeItem(e);
                        } catch (e) {}
                }
            }
            var o = n(91945),
                c = n(29222);
            class d extends c.t {
                constructor(e, t, { code: n = 'E_STORAGE', ...r } = {}) {
                    super('There is no '.concat(t, ' storage on the ').concat(e, ' platform'), { code: n, ...r }),
                        (0, o._)(this, 'name', 'Storage Exception'),
                        Object.setPrototypeOf(this, d.prototype);
                }
            }
            class u {
                get(e) {
                    throw new d(this.platform, this.type);
                }
                set(e, t, n) {
                    throw new d(this.platform, this.type);
                }
                has(e) {
                    throw new d(this.platform, this.type);
                }
                remove(e) {
                    throw new d(this.platform, this.type);
                }
                constructor(e, t) {
                    (0, o._)(this, 'platform', ''), (0, o._)(this, 'type', ''), (this.platform = e), (this.type = t);
                }
            }
            class _ {
                get(e) {
                    let t = s('sessionStorage');
                    if (!t) return null;
                    try {
                        var n, r, a;
                        let s = null != (r = t.getItem(e)) ? r : void 0;
                        return null != (a = null == (n = i(s)) ? void 0 : n.value) ? a : null;
                    } catch (e) {
                        return null;
                    }
                }
                set(e, t) {
                    let n = s('sessionStorage');
                    if (n)
                        try {
                            n.setItem(e, JSON.stringify({ value: t }));
                        } catch (e) {}
                }
                has(e) {
                    return null !== this.get(e);
                }
                remove(e) {
                    let t = s('sessionStorage');
                    if (t)
                        try {
                            t.removeItem(e);
                        } catch (e) {}
                }
            }
            function m(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                Array.isArray(t) &&
                    t.forEach((t) => {
                        let n = 'object' != typeof t ? t : t.name,
                            r = 'object' != typeof t ? { expires: 365 } : t.options || { expires: 365 },
                            i = e.get(n);
                        null != i && e.set(n, i, r);
                    });
            }
            function g(e) {
                let { name: t, group: n, value: r } = e;
                return r && 0 !== Object.keys(r).length
                    ? r.title
                        ? { [t]: { group: n, value: { ...r, title: n } } }
                        : { [t]: { group: n, value: { title: n, value: r } } }
                    : { [t]: { group: n, value: { title: n } } };
            }
        },
        55573: (e, t, n) => {
            'use strict';
            n.d(t, { a: () => o });
            var r = n(60754),
                i = n(15567),
                a = n(79406),
                s = n(99703);
            let l = r.gK.model('Price', { value: r.gK.number, currency: r.gK.string }),
                o = r.gK
                    .model('Concert', {
                        id: r.gK.string,
                        dataSessionId: r.gK.maybe(r.gK.string),
                        datetime: r.gK.maybe(r.gK.string),
                        city: r.gK.maybe(r.gK.string),
                        place: r.gK.maybe(r.gK.string),
                        contentRating: r.gK.maybe(r.gK.string),
                        price: r.gK.maybe(l),
                        cashbackTitle: r.gK.maybe(r.gK.string),
                        cashbackValuePercent: r.gK.maybe(r.gK.number),
                        title: r.gK.maybe(r.gK.string),
                        cover: r.gK.maybe(s.$),
                        rank: r.gK.maybe(r.gK.number),
                        eventKind: r.gK.maybe(r.gK.string),
                    })
                    .views((e) => ({
                        get isCashbackExperimentEnabled() {
                            let { experiments: t } = (0, i.M)(e);
                            return t.checkExperiment(a.z.WebNextConcertsCashback, 'on');
                        },
                        get isIdentityExperimentEnabled() {
                            let { experiments: t } = (0, i.M)(e);
                            return t.checkExperiment(a.z.WebNextConcertsIdentityEventType, 'on');
                        },
                    }))
                    .actions((e) => ({ getKey: (t) => ''.concat(t, '_').concat(e.id) }));
        },
        58054: (e, t, n) => {
            'use strict';
            n.d(t, { w: () => T });
            var r = n(32290),
                i = n(63618),
                a = n(96103),
                s = n(60900),
                l = n(39407),
                o = n(21732),
                c = n(71926),
                d = n(14858),
                u = n(8626),
                _ = n(31010),
                m = n(61945),
                g = n(57594),
                v = (function (e) {
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
            let h = (e, t, n) => {
                switch (e) {
                    case v.YANDEX:
                        if ('ru' === t) return 'https://ya.ru';
                        return;
                    case v.YANDEX_PROJECTS:
                        return 'https://yandex.'.concat(t, '/all?lang=').concat(n);
                    case v.COPYRIGHT_HOLDER:
                        return 'https://yandex.'.concat(t, '/support/music/performers-and-copyright-holders/copyright.html?lang=').concat(n);
                    case v.AGREEMENT:
                        return 'https://yandex.ru/legal/music_termsofuse?lang='.concat(n);
                    case v.RECOMMENDATION_RULES:
                        return 'https://music.yandex.ru/legal/recommendations/ru/#music';
                    case v.HELP:
                        return 'https://yandex.'.concat(t, '/support/music/index.html?lang=').concat(n);
                    case v.PRIVACY_POLICY:
                        return 'https://yandex.'.concat(t, '/legal/confidential/').concat(n);
                }
            };
            var p = n(61258),
                E = n(77088),
                C = n.n(E);
            let I = (0, a.PA)((e) => {
                    let { className: t } = e,
                        { location: n } = (0, g.g)(),
                        { formatDate: a } = (0, s.A)(),
                        { language: d } = (0, m.h)();
                    return (0, r.jsxs)('div', {
                        className: (0, i.$)(C().copyrights, t),
                        'data-test-id': o.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, r.jsxs)(c.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: C().text,
                                children: [
                                    '\xa9 ',
                                    a(new Date(), (0, u.m)()),
                                    ' \xa0',
                                    (0, r.jsx)(p.N, {
                                        target: '_blank',
                                        href: h(v.YANDEX, n.tld, d),
                                        className: (0, i.$)(C().copyrightLink, C().yandexMusicLink),
                                        'data-test-id': o.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: (0, r.jsx)(l.A, { id: 'footer.yandex-music' }),
                                    }),
                                ],
                            }),
                            (0, r.jsx)(c.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, r.jsx)(p.N, {
                                target: '_blank',
                                href: h(v.YANDEX_PROJECTS, n.tld, d),
                                className: C().copyrightLink,
                                'data-test-id': o.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: (0, r.jsx)(l.A, { id: 'footer.yandex-project' }),
                            }),
                        ],
                    });
                }),
                T = (0, a.PA)((e) => {
                    var t;
                    let { className: n } = e,
                        { user: a, location: s } = (0, g.g)(),
                        { isEnabled: u } = null != (t = (0, _.P)()) ? t : {},
                        { language: E } = (0, m.h)(),
                        T = (0, d.w)(!0),
                        S = ((e) => {
                            let { platform: t, tld: n, language: i, userRegion: a } = e,
                                s = { title: (0, r.jsx)(l.A, { id: 'footer.links-copyright-holders' }), url: h(v.COPYRIGHT_HOLDER, n, i) },
                                o = { title: (0, r.jsx)(l.A, { id: 'footer.links-privacy-policy' }), url: h(v.PRIVACY_POLICY, n, i) },
                                c = { title: (0, r.jsx)(l.A, { id: 'footer.links-terms' }), url: h(v.AGREEMENT, n, i) },
                                d = { title: (0, r.jsx)(l.A, { id: 'footer.links-recommendation-rules' }), url: h(v.RECOMMENDATION_RULES, n, i) },
                                u = { title: (0, r.jsx)(l.A, { id: 'footer.links-help' }), url: h(v.HELP, n, i) };
                            switch (t) {
                                case 'spa':
                                case 'web': {
                                    let e = [s, c, d];
                                    return 'ru' === a && e.push(o), e.push(u), e;
                                }
                                case 'desktop':
                                    return [s, c, d, u];
                            }
                        })({ platform: 'desktop', tld: s.tld, language: E, userRegion: a.account.data.userSessionRegionIso });
                    return (0, r.jsxs)('footer', {
                        className: (0, i.$)(C().root, C().important, { [C().root_withOffsetForDeeplink]: u }, n),
                        'data-test-id': o.S7.FOOTER,
                        children: [
                            (0, r.jsxs)('div', {
                                className: C().links,
                                children: [
                                    (0, r.jsx)('ol', {
                                        className: C().list,
                                        'data-test-id': o.S7.FOOTER_LINKS_LIST,
                                        children: S.map((e) => {
                                            let { title: t, url: n } = e;
                                            return (0, r.jsx)(
                                                'li',
                                                {
                                                    className: C().item,
                                                    children: (0, r.jsx)(p.N, {
                                                        target: '_blank',
                                                        href: n,
                                                        className: C().link,
                                                        'data-test-id': o.S7.FOOTER_LINK,
                                                        children: t,
                                                    }),
                                                },
                                                n,
                                            );
                                        }),
                                    }),
                                    (0, r.jsx)(c.HL, {
                                        variant: 'span',
                                        type: 'text',
                                        size: 'm',
                                        weight: 'medium',
                                        className: C().explicitText,
                                        tabIndex: 0,
                                        dangerouslySetInnerHTML: { __html: T },
                                        'data-test-id': o.S7.FOOTER_DISCLAIMER_TEXT,
                                    }),
                                ],
                            }),
                            (0, r.jsx)(I, {}),
                        ],
                    });
                });
        },
        59245: (e) => {
            e.exports = { root: 'CashbackPercentBadge_root__rP2Rj', icon: 'CashbackPercentBadge_icon__dq7pE', text: 'CashbackPercentBadge_text__Uol3I' };
        },
        61258: (e, t, n) => {
            'use strict';
            n.d(t, { N: () => v });
            var r = n(32290),
                i = n(96103),
                a = n(59611),
                s = n.n(a),
                l = n(55178),
                o = n(91027),
                c = n(63887),
                d = n(57594),
                u = n(79406),
                _ = n(36477);
            let m = (e) => {
                    let [t, n] = (0, l.useState)(!1),
                        i = (0, o.c)(() => {
                            n(!0);
                        });
                    return (0, r.jsx)(s(), { prefetch: t, ...e, onMouseEnter: i });
                },
                g = (0, i.PA)((e) => {
                    let { forwardedRef: t, href: n, component: i, ...a } = e,
                        { experiments: o } = (0, d.g)(),
                        { href: g, target: v, rel: h } = (0, _.u)(null != n ? n : ''),
                        p = o.checkExperiment(u.z.WebNextDisablePrefetchRequests, 'on'),
                        E = o.checkExperiment(u.z.WebNextDisablePrefetchRequests, 'hover'),
                        C = (0, l.isValidElement)(i)
                            ? i
                            : (function (e, t, n) {
                                  return e ? (t ? (0, r.jsx)(s(), { prefetch: !1 }) : n ? (0, r.jsx)(m, { href: e }) : (0, r.jsx)(s(), {})) : (0, r.jsx)('a', {});
                              })(n, p, E);
                    return (0, r.jsx)(c.N, { ref: t, component: C, href: n ? g : void 0, target: v, rel: h, ...a });
                }),
                v = (0, l.forwardRef)((e, t) => (0, r.jsx)(g, { ...e, forwardedRef: t }));
        },
        61744: (e, t, n) => {
            'use strict';
            n.d(t, { M: () => m });
            var r = n(32290),
                i = n(96103),
                a = n(55178),
                s = n(39407),
                l = n(21732),
                o = n(6752),
                c = n(71926),
                d = n(98066),
                u = n(10570),
                _ = n.n(u);
            let m = (0, i.PA)((e) => {
                let { id: t, concert: n, withCashback: i = !0, withInlineMeta: u = !1, titleSize: m = 'm' } = e,
                    g = [],
                    v = (0, r.jsx)(c.HL, { variant: 'span', size: 'm', weight: 'medium', 'aria-hidden': !0, children: '•' });
                (null == n ? void 0 : n.eventKind) &&
                    g.push(
                        (0, r.jsx)(c.HL, {
                            variant: 'span',
                            size: 'm',
                            weight: 'medium',
                            'data-test-id': l.OA.concert.CONCERT_CARD_EVENT_KIND,
                            children: (0, r.jsx)(s.A, { id: 'concerts.event-kind', values: { kind: n.eventKind } }),
                        }),
                    ),
                    (null == n ? void 0 : n.contentRating) &&
                        g.push(
                            v,
                            (0, r.jsx)(c.HL, {
                                variant: 'span',
                                size: 'm',
                                weight: 'medium',
                                'data-test-id': l.OA.concert.CONCERT_CARD_CONTENT_RATING,
                                children: n.contentRating,
                            }),
                        );
                let h = (0, o.L)(() =>
                    (null == n ? void 0 : n.city)
                        ? (0, r.jsx)(c.HL, {
                              variant: 'span',
                              size: 'm',
                              weight: 'medium',
                              lineClamp: 1,
                              'data-test-id': l.OA.concert.CONCERT_CARD_LOCATION,
                              children: n.city,
                          })
                        : null,
                );
                return (
                    u && h && g.push(v, h),
                    (0, r.jsxs)('div', {
                        className: _().root,
                        id: t,
                        children: [
                            (0, r.jsx)(c.HL, {
                                variant: 'div',
                                size: m,
                                weight: 'medium',
                                className: _().city,
                                lineClamp: 1,
                                'data-test-id': l.OA.concert.CONCERT_CARD_TITLE,
                                children: null == n ? void 0 : n.title,
                            }),
                            (0, r.jsx)('div', { className: _().info, children: g.map((e, t) => (0, a.cloneElement)(e, { key: t })) }),
                            !u && h,
                            i &&
                                (null == n ? void 0 : n.isIdentityExperimentEnabled) &&
                                n.cashbackValuePercent &&
                                (0, r.jsx)(d.m, { className: _().cashback, valuePercent: n.cashbackValuePercent }),
                            i &&
                                !(null == n ? void 0 : n.isIdentityExperimentEnabled) &&
                                (null == n ? void 0 : n.isCashbackExperimentEnabled) &&
                                n.cashbackTitle &&
                                (0, r.jsx)(d.m, { className: _().cashback, title: n.cashbackTitle }),
                        ],
                    })
                );
            });
        },
        62366: (e) => {
            e.exports = { root: 'VirtualGridRow_root___UfbI' };
        },
        62980: (e, t, n) => {
            'use strict';
            n.d(t, { d: () => u });
            var r = n(32290),
                i = n(63618),
                a = n(60900),
                s = n(21732),
                l = n(71926),
                o = n(83560),
                c = n(19111),
                d = n.n(c);
            let u = (e) => {
                let { datetime: t, className: n, monthClassName: c, dayClassName: u, weekdayClassName: _, withWeekday: m = !0, ...g } = e,
                    { formatDate: v } = (0, a.A)(),
                    h = ((e) => {
                        let { formatMessage: t } = (0, a.A)(),
                            n = {
                                0: t({ id: 'calendar.january-short' }),
                                1: t({ id: 'calendar.february-short' }),
                                2: t({ id: 'calendar.march-short' }),
                                3: t({ id: 'calendar.april-short' }),
                                4: t({ id: 'calendar.may-short' }),
                                5: t({ id: 'calendar.june-short' }),
                                6: t({ id: 'calendar.july-short' }),
                                7: t({ id: 'calendar.august-short' }),
                                8: t({ id: 'calendar.september-short' }),
                                9: t({ id: 'calendar.october-short' }),
                                10: t({ id: 'calendar.november-short' }),
                                11: t({ id: 'calendar.december-short' }),
                            };
                        if (e) return n[new Date(e).getMonth()];
                    })(t);
                return (0, r.jsxs)('div', {
                    className: (0, i.$)(d().root, n),
                    'aria-label': v(t, (0, o.s)()),
                    ...g,
                    'data-test-id': s.OA.concert.CONCERT_DATE,
                    children: [
                        (0, r.jsx)(l.HL, {
                            variant: 'div',
                            size: 'xs',
                            weight: 'bold',
                            className: (0, i.$)(d().month, c),
                            'data-test-id': s.OA.concert.CONCERT_DATE_MONTH,
                            children: h,
                        }),
                        (0, r.jsx)(l.HL, {
                            variant: 'div',
                            className: (0, i.$)(d().day, u),
                            'data-test-id': s.OA.concert.CONCERT_DATE_DAY,
                            children: v(t, { day: 'numeric' }),
                        }),
                        m &&
                            (0, r.jsx)(l.HL, {
                                variant: 'div',
                                size: 'xs',
                                weight: 'bold',
                                className: (0, i.$)(d().weekday, _),
                                'data-test-id': s.OA.concert.CONCERT_DATE_WEEKDAY,
                                children: v(t, { weekday: 'short' }),
                            }),
                    ],
                });
            };
        },
        63887: (e, t, n) => {
            'use strict';
            n.d(t, { N: () => c });
            var r,
                i = n(55178),
                a = {
                    5881: (e, t, n) => {
                        function r() {
                            for (var e, t, n = 0, r = ''; n < arguments.length; )
                                (e = arguments[n++]) &&
                                    (t = (function e(t) {
                                        var n,
                                            r,
                                            i = '';
                                        if ('string' == typeof t || 'number' == typeof t) i += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (n = 0; n < t.length; n++) t[n] && (r = e(t[n])) && (i && (i += ' '), (i += r));
                                            else for (n in t) t[n] && (i && (i += ' '), (i += n));
                                        return i;
                                    })(e)) &&
                                    (r && (r += ' '), (r += t));
                            return r;
                        }
                        n.r(t), n.d(t, { clsx: () => r, default: () => i });
                        let i = r;
                    },
                    9829: (e, t, n) => {
                        n.r(t), n.d(t, { default: () => r });
                        let r = {
                            root: 'buOTZq_TKQOVyjMLrXvB',
                            block: 'BSPmaubc8UL2KHOMLV4A',
                            iconContainer: 'VUb2BxfgkGQhG1RDQGwF',
                            iconOnly: 'WhDaA5aAfZSjxalYb_Ex',
                            flexIcon: 'vIGeuYz4Cf60Cnuq3WKA',
                            icon_position_left: 'GoUQfg7mJlSkcbAZ28Rj',
                            icon_position_right: 'TXa2RKc_Hf0QPdmUDMwI',
                        };
                    },
                    9097: (e, t) => {
                        var n = Symbol.for('react.transitional.element');
                        function r(e, t, r) {
                            var i = null;
                            if ((void 0 !== r && (i = '' + r), void 0 !== t.key && (i = '' + t.key), 'key' in t))
                                for (var a in ((r = {}), t)) 'key' !== a && (r[a] = t[a]);
                            else r = t;
                            return { $$typeof: n, type: e, key: i, ref: void 0 !== (t = r.ref) ? t : null, props: r };
                        }
                        (t.Fragment = Symbol.for('react.fragment')), (t.jsx = r), (t.jsxs = r);
                    },
                    4377: (e, t, n) => {
                        e.exports = n(9097);
                    },
                    3937: function (e, t, n) {
                        var r =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Link = void 0);
                        let i = n(4377),
                            a = n(810),
                            s = n(5881),
                            l = r(n(9829)),
                            o = (e) => {
                                let {
                                        component: t = (0, i.jsx)('a', {}),
                                        block: n,
                                        target: r,
                                        rel: o,
                                        href: c,
                                        forwardRef: d,
                                        iconPosition: u = 'left',
                                        flexIcon: _,
                                        icon: m,
                                        className: g,
                                        children: v,
                                        textClassName: h = '',
                                        containerClassName: p,
                                        ...E
                                    } = e,
                                    C = (0, a.useId)(),
                                    I = !a.Children.count(v),
                                    T = 'left' === u,
                                    S = null;
                                if (void 0 !== m) {
                                    var f;
                                    S = (0, a.cloneElement)(m, {
                                        className: (0, s.clsx)(
                                            l.default.icon,
                                            { [l.default['icon_position_'.concat(u)]]: !I && u },
                                            null == (f = m.props) ? void 0 : f.className,
                                        ),
                                        key: C,
                                    });
                                }
                                let N = (0, a.useMemo)(
                                    () =>
                                        m
                                            ? (0, i.jsxs)('div', {
                                                  className: (0, s.clsx)(l.default.iconContainer, p),
                                                  children: [T && S, !I && (0, i.jsx)('span', { className: h, children: v }), !T && S],
                                              })
                                            : v,
                                    [v, p, m, T, I, S, h],
                                );
                                return (0, a.cloneElement)(
                                    t,
                                    {
                                        ref: d,
                                        target: r,
                                        rel: '_blank' === r && void 0 === o ? 'noopener noreferrer' : o,
                                        href: c,
                                        className: (0, s.clsx)(l.default.root, { [l.default.block]: n, [l.default.flexIcon]: m && _, [l.default.iconOnly]: m && I }, g),
                                        ...E,
                                        ...t.props,
                                    },
                                    N,
                                );
                            };
                        t.Link = (0, a.forwardRef)((e, t) => (0, i.jsx)(o, { forwardRef: t, ...e }));
                    },
                    810: (e) => {
                        e.exports = r || (r = n.t(i, 2));
                    },
                },
                s = {};
            function l(e) {
                var t = s[e];
                if (void 0 !== t) return t.exports;
                var n = (s[e] = { exports: {} });
                return a[e].call(n.exports, n, n.exports, l), n.exports;
            }
            (l.d = (e, t) => {
                for (var n in t) l.o(t, n) && !l.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
            }),
                (l.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (l.r = (e) => {
                    'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 });
                });
            var o = {};
            (() => {
                Object.defineProperty(o, 'X', { value: !0 }), (o.r = void 0);
                var e = l(3937);
                Object.defineProperty(o, 'r', {
                    enumerable: !0,
                    get: function () {
                        return e.Link;
                    },
                });
            })();
            var c = o.r;
            o.X;
        },
        64146: (e) => {
            e.exports = { root: 'CashbackBadge_root__hStMF', icon: 'CashbackBadge_icon__RJ6qe', title: 'CashbackBadge_title__neGD7' };
        },
        64170: (e, t, n) => {
            'use strict';
            n.d(t, { SomethingWentWrong: () => T });
            var r = n(32290),
                i = n(63618),
                a = n(96103),
                s = n(55178),
                l = n(60900),
                o = n(39407),
                c = n(63423),
                d = n(82586),
                u = n(71926),
                _ = n(16172),
                m = n(52068),
                g = n(62376),
                v = n(37240),
                h = n(83920),
                p = n(20472),
                E = n(12894),
                C = n(30310),
                I = n.n(C);
            let T = (0, a.PA)((e) => {
                let { className: t, withBackwardControl: n = !0 } = e,
                    { formatMessage: a } = (0, l.A)(),
                    C = a({ id: 'error-messages.something-went-wrong' });
                !(function (e) {
                    let t = (0, m.st)(),
                        { hash: n } = (0, m.gf)(),
                        { pageId: r } = (0, v.$)(),
                        i = (0, g.U)();
                    (0, s.useEffect)(() => {
                        if (!t || !n || !r) return;
                        let a = (0, _.Fx)({
                            params: {
                                entityType: _.LA.Error,
                                entityId: _.LA.SomethingWrong,
                                errorMessage: e,
                                hash: n,
                                pageId: r,
                                pageStyle: _.QL.Fullscreen,
                                pagePlacement: _.c4.Fullscreen,
                                mainObjectType: _.ky.NonApplicable,
                                mainObjectId: _.ky.NonApplicable,
                            },
                            logger: i,
                            context: 'useSendEventOnSomethingWentWrongShowed',
                        });
                        a && (0, _.z5)(t.evgenInstance, a);
                    }, [t, e, n, r, i]);
                })(C);
                let { sendRefreshEvent: T } = (function () {
                        let e = (0, m.st)(),
                            { hash: t } = (0, m.gf)(),
                            { pageId: n } = (0, v.$)(),
                            r = (0, g.U)();
                        return {
                            sendRefreshEvent: (0, s.useCallback)(() => {
                                if (!e || !t || !n) return;
                                let i = (0, _.Fx)({
                                    params: {
                                        actionType: _.X2.Refresh,
                                        userInteractionType: _.gi.Tap,
                                        entityType: _.LA.Error,
                                        entityId: _.LA.SomethingWrong,
                                        hash: t,
                                        pageId: n,
                                        pageStyle: _.QL.Fullscreen,
                                        pagePlacement: _.c4.Fullscreen,
                                        mainObjectType: _.ky.NonApplicable,
                                        mainObjectId: _.ky.NonApplicable,
                                    },
                                    logger: r,
                                    context: 'useSendEventOnSomethingWentWrongRefreshed',
                                });
                                i && (0, _.bv)(e.evgenInstance, i);
                            }, [e, t, n, r]),
                        };
                    })(),
                    S = (0, s.useCallback)(() => {
                        T(), (window.location.href = p.Z.main.href);
                    }, [T]),
                    { contentRef: f } = (0, h.g)();
                return (0, r.jsxs)('div', {
                    className: (0, i.$)(I().root, t),
                    children: [
                        n &&
                            (0, r.jsx)(E.L, { withBackwardFallback: '/', className: (0, i.$)(I().navigation, { [I().navigation_desktop]: !f }), withForwardControl: !1 }),
                        (0, r.jsxs)('div', {
                            className: (0, i.$)(I().content, { [I().content_shrink]: !n }),
                            children: [
                                (0, r.jsx)(d.I, { className: I().icon, variant: 'attention', size: 'xxl' }),
                                (0, r.jsx)(u.DZ, { className: (0, i.$)(I().title, I().important), variant: 'h3', size: 'xs', children: C }),
                                (0, r.jsxs)(u.HL, {
                                    className: (0, i.$)(I().text, I().important),
                                    variant: 'span',
                                    type: 'text',
                                    size: 'l',
                                    weight: 'normal',
                                    children: [!1, (0, r.jsx)(o.A, { id: 'page-error.try-to-restart-app' })],
                                }),
                                (0, r.jsx)(c.$, {
                                    onClick: S,
                                    className: I().button,
                                    role: 'link',
                                    color: 'secondary',
                                    size: 'l',
                                    radius: 'xxxl',
                                    children: (0, r.jsxs)(u.HL, {
                                        type: 'controls',
                                        variant: 'span',
                                        size: 'm',
                                        children: [!1, (0, r.jsx)(o.A, { id: 'page-error.restart-app-button' })],
                                    }),
                                }),
                            ],
                        }),
                    ],
                });
            });
        },
        69538: (e, t, n) => {
            'use strict';
            n.d(t, { A: () => i });
            let r = /[+-]\d{2}:?\d{2}/,
                i = (e) => (null == e ? void 0 : e.replace(r, ''));
        },
        70608: (e, t, n) => {
            'use strict';
            n.d(t, { S: () => r });
            let r = (0, n(55178).createContext)({ filterKey: void 0, filterValue: void 0, filterPos: void 0 });
        },
        73715: (e, t, n) => {
            'use strict';
            n.d(t, { X: () => a });
            var r = n(60754),
                i = n(49399);
            let a = r.gK.model('LoadingState', { loadingState: r.gK.enumeration(Object.values(i.G)) }).views((e) => ({
                get isNeededToLoad() {
                    return e.loadingState === i.G.IDLE;
                },
                get isLoading() {
                    return e.loadingState === i.G.PENDING;
                },
                get isResolved() {
                    return e.loadingState === i.G.RESOLVE;
                },
                get isRejected() {
                    return e.loadingState === i.G.REJECT;
                },
            }));
        },
        73818: (e, t, n) => {
            'use strict';
            n.d(t, { p: () => r });
            let r = (0, n(55178).createContext)({
                blockId: void 0,
                blockType: void 0,
                blockIdForFrom: void 0,
                blockPosX: void 0,
                blockPosY: void 0,
                objectsCount: void 0,
                mainObjectType: void 0,
                mainObjectId: void 0,
                displayReasonId: void 0,
            });
        },
        74196: (e, t, n) => {
            'use strict';
            n.d(t, { q: () => c });
            var r,
                i = n(55178),
                a = {
                    5881: (e, t, n) => {
                        function r() {
                            for (var e, t, n = 0, r = ''; n < arguments.length; )
                                (e = arguments[n++]) &&
                                    (t = (function e(t) {
                                        var n,
                                            r,
                                            i = '';
                                        if ('string' == typeof t || 'number' == typeof t) i += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (n = 0; n < t.length; n++) t[n] && (r = e(t[n])) && (i && (i += ' '), (i += r));
                                            else for (n in t) t[n] && (i && (i += ' '), (i += n));
                                        return i;
                                    })(e)) &&
                                    (r && (r += ' '), (r += t));
                            return r;
                        }
                        n.r(t), n.d(t, { clsx: () => r, default: () => i });
                        let i = r;
                    },
                    4517: (e, t, n) => {
                        n.r(t), n.d(t, { default: () => r });
                        let r = { root: 'eaYyesBmJL_NbkgoYR1c', focusable: 'uL1dD5rxgI4bPmfyMMe7' };
                    },
                    9097: (e, t) => {
                        var n = Symbol.for('react.transitional.element');
                        function r(e, t, r) {
                            var i = null;
                            if ((void 0 !== r && (i = '' + r), void 0 !== t.key && (i = '' + t.key), 'key' in t))
                                for (var a in ((r = {}), t)) 'key' !== a && (r[a] = t[a]);
                            else r = t;
                            return { $$typeof: n, type: e, key: i, ref: void 0 !== (t = r.ref) ? t : null, props: r };
                        }
                        (t.Fragment = Symbol.for('react.fragment')), (t.jsx = r), (t.jsxs = r);
                    },
                    4377: (e, t, n) => {
                        e.exports = n(9097);
                    },
                    2865: function (e, t, n) {
                        var r =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.SROnly = void 0);
                        let i = n(4377),
                            a = n(5881),
                            s = n(810),
                            l = r(n(4517));
                        t.SROnly = (e) => {
                            let { className: t, focusable: n, children: r, ...o } = e,
                                c = (0, a.clsx)(l.default.root, { [l.default.focusable]: n }, t);
                            return (0, s.isValidElement)(r)
                                ? (0, s.cloneElement)(r, { ...o, className: (0, a.clsx)(c, r.props.className) })
                                : (0, i.jsx)('span', { className: c, ...o, children: r });
                        };
                    },
                    810: (e) => {
                        e.exports = r || (r = n.t(i, 2));
                    },
                },
                s = {};
            function l(e) {
                var t = s[e];
                if (void 0 !== t) return t.exports;
                var n = (s[e] = { exports: {} });
                return a[e].call(n.exports, n, n.exports, l), n.exports;
            }
            (l.d = (e, t) => {
                for (var n in t) l.o(t, n) && !l.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
            }),
                (l.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (l.r = (e) => {
                    'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 });
                });
            var o = {};
            (() => {
                Object.defineProperty(o, '__esModule', { value: !0 }), (o.SROnly = void 0);
                var e = l(2865);
                Object.defineProperty(o, 'SROnly', {
                    enumerable: !0,
                    get: function () {
                        return e.SROnly;
                    },
                });
            })();
            var c = o.SROnly;
            o.__esModule;
        },
        74523: (e, t, n) => {
            'use strict';
            n.d(t, { C: () => r });
            let r = (e, t) => {
                let [n, r] = e.split('?'),
                    i = new URLSearchParams(r || '');
                for (let [e, n] of new URLSearchParams(t).entries()) i.set(e, n);
                let a = i.toString();
                return ''.concat(n).concat(a ? '?'.concat(a) : '');
            };
        },
        77028: (e) => {
            e.exports = {
                root: 'ConcertsDetailsPage_root__Uyap_',
                scrollContainer: 'ConcertsDetailsPage_scrollContainer__BKTRD',
                content: 'ConcertsDetailsPage_content__WsuVk',
                header: 'ConcertsDetailsPage_header__K7UVE',
                container: 'ConcertsDetailsPage_container__swjuX',
                column: 'ConcertsDetailsPage_column__EB1kA',
                row: 'ConcertsDetailsPage_row__oP8Xu',
                shimmerTitle: 'ConcertsDetailsPage_shimmerTitle__vjWfR',
                footer: 'ConcertsDetailsPage_footer__ooBj8',
            };
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
        79248: (e, t, n) => {
            'use strict';
            n.d(t, { r: () => c });
            var r = n(77307),
                i = n(55178),
                a = n(91027),
                s = n(83920),
                l = n(57594);
            let o = { width: 400, height: 400 },
                c = (e) => {
                    let { count: t, getEstimateSize: n, gap: c, containerRef: d, overscan: u = 2 } = e,
                        {
                            settings: { isMobile: _ },
                        } = (0, l.g)(),
                        { contentScrollRef: m } = (0, s.g)(),
                        g = (0, i.useRef)(new Map()),
                        v = (0, i.useRef)(void 0),
                        h = {
                            count: t,
                            gap: c,
                            estimateSize: (e) => {
                                let t = g.current.get(String(e));
                                return null != t ? t : n(e);
                            },
                            overscan: u,
                            initialRect: o,
                            isScrollingResetDelay: 50,
                            scrollMargin: ((e, t, n) => {
                                if (!t) return 0;
                                let r = t.getBoundingClientRect().top;
                                return e && 1 ? r + window.scrollY : !e && n ? r + n.scrollTop : 0;
                            })(_, d, m),
                        },
                        p = (0, r.XW)(h),
                        E = (0, r.Te)({ ...h, getScrollElement: () => m, initialOffset: null == m ? void 0 : m.scrollTop }),
                        C = _ ? p : E,
                        I = (0, a.c)(() => {
                            C.measure();
                        });
                    return (
                        (0, i.useEffect)(() => {
                            v.current ||
                                (v.current = new ResizeObserver((e) => {
                                    let t = !1;
                                    e.forEach((e) => {
                                        let n = e.target.getAttribute('data-index');
                                        if (e.target && n) {
                                            let r = e.contentRect.height;
                                            r && r !== g.current.get(n) && (g.current.set(n, e.contentRect.height), (t = !0));
                                        }
                                    }),
                                        t && I();
                                }));
                        }, [I]),
                        { virtualizer: C, resizeObserver: v.current }
                    );
                };
        },
        79374: (e, t, n) => {
            'use strict';
            n.d(t, { W: () => a });
            var r = n(16172),
                i = n(48922);
            let a = {
                [i._Q.ALBUM]: r.QT.AlbumScreen,
                [i._Q.PLAYLIST]: r.QT.PlaylistScreen,
                [i._Q.HOME]: r.QT.MainScreen,
                [i._Q.ARTIST]: r.QT.ArtistScreen,
                [i._Q.ARTIST_TRACKS]: r.QT.ArtistScreen,
                [i._Q.ARTIST_SIMILAR]: r.QT.ArtistScreen,
                [i._Q.ARTIST_ALBUMS]: r.QT.ArtistScreen,
                [i._Q.ARTIST_DISCOGRAPHY]: r.QT.ArtistScreen,
                [i._Q.ARTIST_COMPILATIONS]: r.QT.ArtistScreen,
                [i._Q.ARTIST_CONCERTS]: r.QT.ArtistScreen,
                [i._Q.SEARCH]: r.QT.SearchScreen,
                [i._Q.OWN_COLLECTION]: r.QT.CollectionLandingScreen,
                [i._Q.LANDING]: r.QT.DynamicScreen,
                [i._Q.HISTORY]: r.QT.MusicHistoryScreen,
                [i._Q.NON_MUSIC]: r.QT.NonmusicLandingScreen,
                [i._Q.CHART]: r.QT.PlaylistListScreen,
                [i._Q.PODCAST]: r.QT.AlbumScreen,
                [i._Q.AUDIOBOOK]: r.QT.AlbumScreen,
                [i._Q.OWN_ALBUMS]: r.QT.CollectionAlbumsScreen,
                [i._Q.OWN_DISLIKES]: r.QT.CollectionTrackListScreen,
                [i._Q.OWN_ARTISTS]: r.QT.CollectionArtistsScreen,
                [i._Q.OWN_PLAYLISTS]: r.QT.CollectionPlaylistsScreen,
                [i._Q.FAMILIAR_YOU]: r.QT.TrackListScreen,
                [i._Q.ENTITIES]: r.QT.ObjectsGridScreen,
                [i._Q.TRAILER]: r.QT.TrailerScreen,
                [i._Q.PLAYER]: r.QT.ExpandedPlayerScreen,
                [i._Q.VIDEO_PLAYER]: r.QT.VideoScreen,
                [i._Q.TRACK_SCREEN]: r.QT.TrackScreen,
                [i._Q.PAYWALL]: r.QT.PaywallScreen,
                [i._Q.CONCERTS]: r.QT.ConcertsLandingScreen,
                [i._Q.CONCERT]: r.QT.ConcertScreen,
                [i._Q.CONCERT_LOCATION_SELECTOR]: r.QT.ConcertLocationSelector,
                [i._Q.PAGE_NOT_FOUND_SCREEN]: r.QT.PageNotFoundScreen,
                [i._Q.SLIDES_SCREEN]: r.QT.SlidesScreen,
                [i._Q.PROMOLANDING_ALBUM]: r.QT.PromolandingAlbumScreen,
                [i._Q.WAVE_LANDING_SCREEN]: r.QT.WaveLandingScreen,
                [i._Q.FACT_SCREEN]: r.QT.FactScreen,
                [i._Q.LUMEN_AWAKENING_SCREEN]: r.QT.LumenAwakeningScreen,
                [i._Q.COLLECTION_VIBE_ROOMS]: r.QT.MultivibeScreen,
                [i._Q.MULTIVIBE_SENDING_INVITATION_SCREEN]: r.QT.MultivibeSendingInvitationScreen,
                [i._Q.MULTIVIBE_ACCEPTING_INVITATION_SCREEN]: r.QT.MultivibeAcceptingInvitationScreen,
                [i._Q.MULTIVIBE_ACTION_SCREEN]: r.QT.MultivibeActionScreen,
                [i._Q.MULTIVIBE_ALONE_SCREEN]: r.QT.MultivibeAloneScreen,
                [i._Q.MULTIVIBE_INVALID_INVITATION_SCREEN]: r.QT.MultivibeInvalidInvitationScreen,
                [i._Q.MULTIVIBE_PENDING_INVITATION_SCREEN]: r.QT.MultivibePendingInvitationScreen,
                [i._Q.MULTIVIBE_LIMIT_SCREEN]: r.QT.MultivibeLimitScreen,
                [i._Q.MULTIVIBE_ALREADY_EXIST_SCREEN]: r.QT.MultivibeAlreadyExistScreen,
            };
        },
        80536: (e, t, n) => {
            'use strict';
            n.d(t, { B: () => r });
            let r = (0, n(55178).createContext)({ observeElement: () => {}, unobserveElement: () => {} });
        },
        81697: (e, t, n) => {
            'use strict';
            n.d(t, { W: () => A });
            var r,
                i,
                a = n(32290),
                s = n(63618),
                l = n(96103),
                o = n(55178),
                c = n(21732),
                d = n(6752),
                u = n(50162),
                _ = n(57594),
                m = n(79406),
                g = n(80451);
            let v = (e) => (0, g.httpsReplacer)(e.replace('%%', '960x690_noncrop'));
            var h = n(39407),
                p = n(71926);
            function E() {
                return (E = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var n = arguments[t];
                              for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                          }
                          return e;
                      }).apply(null, arguments);
            }
            let C = function (e) {
                return o.createElement(
                    'svg',
                    E({ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', fill: 'none' }, e),
                    r ||
                        (r = o.createElement(
                            'defs',
                            null,
                            o.createElement(
                                'linearGradient',
                                { id: 'plusColorGradient', x1: 0, x2: 24, y1: 10.4, y2: 10.4, gradientUnits: 'userSpaceOnUse' },
                                o.createElement('stop', { stopColor: '#FF5C4D' }),
                                o.createElement('stop', { offset: 0.4, stopColor: '#EB469F' }),
                                o.createElement('stop', { offset: 1, stopColor: '#8341EF' }),
                            ),
                            o.createElement('clipPath', { id: 'plusColorClip' }, o.createElement('rect', { width: 24, height: 24, fill: '#fff', rx: 12 })),
                        )),
                    i ||
                        (i = o.createElement(
                            'g',
                            { clipPath: 'url(#plusColorClip)' },
                            o.createElement('rect', { width: 24, height: 24, fill: '#fff', rx: 12 }),
                            o.createElement('path', {
                                fill: 'url(#plusColorGradient)',
                                fillRule: 'evenodd',
                                d: 'M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0c1.295 0 2.542.205 3.71.585L12.977 9H4.989l-.976 3H12l-2.34 7.2h3.3L15.3 12H24Zm-.378-3h-7.346l2.29-7.046A12.019 12.019 0 0 1 23.622 9Z',
                                clipRule: 'evenodd',
                            }),
                        )),
                );
            };
            var I = n(59245),
                T = n.n(I);
            let S = (e) => {
                let { percent: t, className: n } = e;
                return (0, a.jsxs)('div', {
                    className: (0, s.$)(T().root, n),
                    'data-test-id': c.OA.concert.CONCERT_CARD_CASHBACK_PERCENT,
                    children: [
                        (0, a.jsx)(C, { 'aria-hidden': !0, className: T().icon }),
                        (0, a.jsx)(p.HL, {
                            variant: 'span',
                            type: 'text',
                            size: 'xs',
                            weight: 'medium',
                            className: T().text,
                            children: (0, a.jsx)(h.A, { id: 'entity-names.percent', values: { value: t } }),
                        }),
                    ],
                });
            };
            var f = n(62980),
                N = n(54267),
                y = n.n(N);
            let A = (0, l.PA)((e) => {
                let { uri: t, withMask: n, datetime: r, coverColor: i, cashbackPercent: l } = e,
                    { experiments: h } = (0, _.g)(),
                    [p, E] = (0, o.useState)(!1),
                    C = h.checkExperiment(m.z.NewConcertsTicketRedesign, 'on') && n,
                    I = h.checkExperiment(m.z.WebNextConcertsIdentityEventType, 'on'),
                    T = (0, o.useCallback)(() => {
                        E(!0);
                    }, []),
                    N = (0, d.L)(() => {
                        if (i)
                            return {
                                '--concert-image-date-background': ((e) => {
                                    let { h: t, s: n, l: r } = (0, g.hexToHsl)(e);
                                    return 'hsl('
                                        .concat(t, ', ')
                                        .concat(n, '%, ')
                                        .concat(r <= 55 ? r + 20 : r - 20, '%)');
                                })(i),
                            };
                    }),
                    A = (0, d.L)(() =>
                        r
                            ? (0, a.jsxs)('div', {
                                  className: (0, s.$)(y().date, { [y().date_withEventType]: I }),
                                  children: [
                                      (0, a.jsx)(u._V, {
                                          className: y().dateBackground,
                                          fit: 'cover',
                                          src: 'avatars.mds.yandex.net/get-music-misc/28052/img.69aab8c335547735b2df1c54/%%',
                                          'aria-hidden': !0,
                                          withAvatarReplace: !0,
                                          withLoadingIndicator: !1,
                                          onLoad: T,
                                      }),
                                      p &&
                                          (0, a.jsx)(f.d, {
                                              className: y().root_withEventType,
                                              dayClassName: y().day_withEventType,
                                              weekdayClassName: y().weekday_withEventType,
                                              monthClassName: y().month_withEventType,
                                              datetime: r,
                                          }),
                                  ],
                              })
                            : null,
                    ),
                    b = (0, d.L)(() =>
                        r
                            ? (0, a.jsx)(f.d, {
                                  dayClassName: y().day,
                                  weekdayClassName: (0, s.$)(y().weekday, y().important),
                                  monthClassName: y().month,
                                  className: y().date,
                                  datetime: r,
                              })
                            : null,
                    );
                return (0, a.jsxs)('div', {
                    className: (0, s.$)(y().root, { [y().root_withMask]: C }),
                    style: N,
                    children: [
                        (0, a.jsx)(u._V, {
                            className: y().image,
                            fit: 'cover',
                            src: t,
                            withAvatarReplace: !0,
                            createUrlReplacer: v,
                            'aria-hidden': !0,
                            'data-test-id': c.OA.concert.CONCERT_CARD_IMAGE,
                        }),
                        r && (I ? A : b),
                        I && l && (0, a.jsx)(S, { className: y().cashback, percent: l }),
                    ],
                });
            });
        },
        82757: (e, t, n) => {
            'use strict';
            n.d(t, { J: () => r });
            let r = (e) => {
                if (e) return { value: e.value, currency: e.currency };
            };
        },
        83560: (e, t, n) => {
            'use strict';
            n.d(t, { s: () => r });
            let r = () => ({ year: 'numeric', month: 'long', day: 'numeric' });
        },
        84062: (e, t, n) => {
            'use strict';
            n.d(t, { Z: () => s });
            var r = n(21916),
                i = n(91027),
                a = n(36477);
            let s = (e) => {
                let t = (0, r.useRouter)(),
                    { href: n, target: s } = (0, a.u)(e);
                return (0, i.c)((e) => {
                    (null != e && e.metaKey) ||
                        (null != e && e.ctrlKey) ||
                        (null != e && e.shiftKey) ||
                        ('_blank' === s
                            ? ((e) => {
                                  let { target: t, rel: n } = (0, a.u)(e, { options: { isExternalLink: !0 } });
                                  window.open(e, t, n);
                              })(n)
                            : t.push(n));
                });
            };
        },
        84782: (e, t, n) => {
            'use strict';
            n.d(t, { N: () => a });
            var r = n(55178),
                i = n(73818);
            function a() {
                return (0, r.useContext)(i.p);
            }
        },
        86562: (e, t, n) => {
            'use strict';
            n.d(t, { v: () => r });
            var r = (function (e) {
                return (e.SPACE = 'Space'), (e.ENTER = 'Enter'), (e.ESCAPE = 'Escape'), e;
            })({});
        },
        88259: (e, t, n) => {
            Promise.resolve().then(n.bind(n, 2528));
        },
        88404: (e, t, n) => {
            'use strict';
            n.d(t, { L: () => l });
            var r = n(32290),
                i = n(79856),
                a = n(96871),
                s = n.n(a);
            let l = (e) => {
                let { isActive: t, withMeta: n, withPriceButton: a } = e;
                return (0, r.jsxs)('div', {
                    className: s().root,
                    children: [
                        (0, r.jsx)(i.W, { radius: 'm', className: s().shimmerCover, isActive: t }),
                        (0, r.jsxs)('div', {
                            className: s().meta,
                            children: [
                                (0, r.jsx)(i.W, { isActive: t, radius: 'xxxl', className: s().shimmerTitle }),
                                n &&
                                    (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(i.W, { isActive: t, radius: 'xxxl', className: s().shimmerInfo }),
                                            (0, r.jsx)(i.W, { isActive: t, radius: 'xxxl', className: s().shimmerCity }),
                                        ],
                                    }),
                            ],
                        }),
                        a && (0, r.jsx)(i.W, { isActive: t, radius: 'xxxl', className: s().shimmerButton }),
                    ],
                });
            };
        },
        93841: (e, t, n) => {
            'use strict';
            n.d(t, { p: () => i });
            var r = n(60754);
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
        93954: (e, t, n) => {
            'use strict';
            n.d(t, { L: () => c });
            var r = n(66988),
                i = n(6752),
                a = n(8055),
                s = n(55178);
            let l = (e) => {
                let { minColumnWidth: t, maxColumnWidth: n, containerWidth: r, totalCount: i, columnGap: a, minColumnCount: s, maxColumnCount: l } = e,
                    o = Math.max(1, Math.floor((r + a) / (t + a))),
                    c = Math.max(s, Math.floor((r + a) / ((n + t) * 0.5 + a)));
                for (let e = s; e <= o; e++) {
                    let i = (r - (e - 1) * a) / e;
                    if (i >= t && i <= n) {
                        c = e;
                        break;
                    }
                }
                return { rowCount: Math.ceil(i / (c = l ? Math.min(c, l) : c)), columnCount: c };
            };
            var o = n(79248);
            let c = (e) => {
                let {
                        count: t,
                        getEstimateRowSize: n,
                        rowGap: c,
                        columnGap: d,
                        minColumnWidth: u,
                        maxColumnWidth: _,
                        minColumnCount: m,
                        maxColumnCount: g,
                        containerRef: v,
                    } = e,
                    { rowCount: h, columnCount: p } = ((e) => {
                        let { containerRef: t, minColumnCount: n, maxColumnWidth: r, minColumnWidth: i, totalCount: o, columnGap: c, maxColumnCount: d } = e,
                            [u, _] = (0, s.useState)({ rowCount: 0, columnCount: 0 }),
                            m = (0, s.useRef)(null),
                            g = (0, s.useMemo)(
                                () =>
                                    (0, a.A)(
                                        (e) => {
                                            _(
                                                l({
                                                    minColumnWidth: i,
                                                    maxColumnWidth: r,
                                                    containerWidth: e.contentRect.width,
                                                    totalCount: o,
                                                    columnGap: c,
                                                    minColumnCount: n,
                                                    maxColumnCount: d,
                                                }),
                                            );
                                        },
                                        100,
                                        { trailing: !0 },
                                    ),
                                [c, d, r, n, i, o],
                            );
                        return (
                            (0, s.useLayoutEffect)(
                                () => (
                                    m.current && m.current.disconnect(),
                                    (m.current = new ResizeObserver((e) => {
                                        e.forEach(g);
                                    })),
                                    t &&
                                        (_(
                                            l({
                                                minColumnWidth: i,
                                                maxColumnWidth: r,
                                                containerWidth: t.getBoundingClientRect().width,
                                                totalCount: o,
                                                columnGap: c,
                                                minColumnCount: n,
                                                maxColumnCount: d,
                                            }),
                                        ),
                                        m.current.observe(t)),
                                    () => {
                                        var e;
                                        null == (e = m.current) || e.disconnect();
                                    }
                                ),
                                [c, t, g, d, r, n, i, o],
                            ),
                            u
                        );
                    })({ totalCount: t, columnGap: null != d ? d : 0, minColumnCount: m, maxColumnWidth: _, minColumnWidth: u, maxColumnCount: g, containerRef: v }),
                    { virtualizer: E, resizeObserver: C } = (0, o.r)({ count: h, getEstimateSize: n, gap: c, containerRef: v }),
                    I = (0, r.A)(
                        Array.from({ length: t }, (e, t) => t),
                        p,
                    ),
                    T = (0, i.L)(() => {
                        var e, t;
                        if (!E.range) return null;
                        let n = null == (e = I[E.range.startIndex]) ? void 0 : e.at(0),
                            r = null == (t = I[E.range.endIndex]) ? void 0 : t.at(-1);
                        return void 0 !== n && void 0 !== r ? { startIndex: n, endIndex: r } : null;
                    });
                return { virtualizer: E, rowResizeObserver: C, indices: I, columnCount: p, visibleRange: T };
            };
        },
        95481: (e, t, n) => {
            'use strict';
            n.d(t, { f: () => p });
            var r = n(55178),
                i = n(16172),
                a = n(52068),
                s = n(6752),
                l = n(62376),
                o = n(1677),
                c = n(48922),
                d = n(84782),
                u = n(30915),
                _ = n(18746),
                m = n(37240),
                g = n(51012),
                v = n(47498);
            let h = [
                    c._Q.HOME,
                    c._Q.LANDING,
                    c._Q.NON_MUSIC,
                    c._Q.OWN_COLLECTION,
                    c._Q.SEARCH,
                    c._Q.ARTIST,
                    c._Q.CONCERTS,
                    c._Q.CONCERT,
                    c._Q.ALBUM,
                    c._Q.PLAYLIST,
                    c._Q.SLIDES_SCREEN,
                    c._Q.PROMOLANDING_ALBUM,
                    c._Q.WAVE_LANDING_SCREEN,
                ],
                p = () => {
                    let e = (0, r.useRef)(!1),
                        t = (0, a.st)(),
                        n = (0, l.U)(),
                        { hash: p } = (0, a.gf)(),
                        { pageId: E } = (0, m.$)(),
                        { tabId: C, tabPos: I, isTabSelectedByDefault: T } = (0, v.R)(),
                        { offsetBlockPosY: S } = (0, u.u)(),
                        { blockId: f, blockType: N, blockPosX: y, blockPosY: A, mainObjectType: b, mainObjectId: x, objectsCount: O } = (0, d.N)(),
                        { filterKey: R, filterValue: L, filterPos: k } = (0, _.G)(),
                        { skeleton: w } = (0, g.b)(),
                        P = (0, s.L)(() => (void 0 !== S && void 0 !== A ? S + A : A));
                    return (0, r.useCallback)(() => {
                        if (!t || !E || !c.xK.includes(E) || !h.includes(E) || e.current) return;
                        let r = { hash: p, pageId: o.F[E], entityType: N, entityId: f, entityPosX: y, entityPosY: P, objectsCount: O };
                        void 0 !== R && ((r.filterKey = R), (r.filterValue = L), (r.filterPos = k)),
                            c.qG.includes(E) && ((r.tabId = C), (r.tabPos = I), (r.isTabSelectedByDefault = T)),
                            w && (r.skeletonId = w),
                            x && b && ((r.mainObjectType = b), (r.mainObjectId = x));
                        let a = (0, i.Fx)({ params: r, logger: n, context: 'useSendEventOnBlockLoaded' });
                        a && ((0, i.uY)(t.evgenInstance, a), (e.current = !0));
                    }, [t, E, p, N, f, y, P, R, L, k, O, w, x, b, n, C, I, T]);
                };
        },
        96218: (e, t, n) => {
            'use strict';
            n.d(t, { O: () => i, s: () => r });
            let r = 'yMusicStatePatchesUpdated',
                i = 'yMusicPageStatePatchesUpdated';
        },
        96871: (e) => {
            e.exports = {
                root: 'ConcertCardWithImage_root__NHF59',
                cover: 'ConcertCardWithImage_cover__3V2fk',
                cashbackTitle: 'ConcertCardWithImage_cashbackTitle__lfr7z',
                cashback: 'ConcertCardWithImage_cashback__sNa2M',
                shimmerCover: 'ConcertCardWithImage_shimmerCover___X6xn',
                shimmerTitle: 'ConcertCardWithImage_shimmerTitle__YgaQa',
                shimmerInfo: 'ConcertCardWithImage_shimmerInfo__yUfJ4',
                shimmerCity: 'ConcertCardWithImage_shimmerCity__VlGY_',
                meta: 'ConcertCardWithImage_meta__mhsYf',
                button: 'ConcertCardWithImage_button__osv22',
                shimmerButton: 'ConcertCardWithImage_shimmerButton__JZEFY',
            };
        },
        97201: (e, t, n) => {
            'use strict';
            n.d(t, { K: () => r });
            var r = (function (e) {
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
        98066: (e, t, n) => {
            'use strict';
            n.d(t, { m: () => d });
            var r = n(32290),
                i = n(63618),
                a = n(21732),
                s = n(82586),
                l = n(71926),
                o = n(64146),
                c = n.n(o);
            let d = (e) => {
                let { title: t, className: n, titleClassName: o, valuePercent: d } = e;
                return (0, r.jsxs)('div', {
                    className: (0, i.$)(c().root, n),
                    children: [
                        (0, r.jsx)(s.I, { 'aria-hidden': !0, className: c().icon, variant: 'plus' }),
                        (0, r.jsx)(l.HL, {
                            variant: 'span',
                            type: 'text',
                            size: 'm',
                            weight: 'medium',
                            lineClamp: 1,
                            className: (0, i.$)(c().title, o),
                            'data-test-id': a.OA.concert.CONCERT_CARD_CASHBACK,
                            children: d ? ''.concat(d, '%') : t,
                        }),
                    ],
                });
            };
        },
        99703: (e, t, n) => {
            'use strict';
            n.d(t, { $: () => i });
            var r = n(60754);
            let i = r.gK.model('Cover', { uri: r.gK.maybe(r.gK.string), color: r.gK.maybe(r.gK.string), videoUrl: r.gK.maybe(r.gK.string) });
        },
    },
    (e) => {
        e.O(
            0,
            [
                7034, 5718, 7258, 6639, 9695, 6706, 1311, 8892, 2536, 66, 5835, 2812, 8035, 2732, 1410, 7307, 4402, 6477, 7275, 2586, 8347, 4522, 7702, 4668, 1175, 4638,
                4220, 9562, 7358,
            ],
            () => e((e.s = 88259)),
        ),
            (_N_E = e.O());
    },
]);
