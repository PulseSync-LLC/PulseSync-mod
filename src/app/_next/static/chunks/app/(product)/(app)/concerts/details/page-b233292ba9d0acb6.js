(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2849],
    {
        14741: (e, t, n) => {
            'use strict';
            n.d(t, { f: () => N, _: () => i });
            var o = n(93064),
                r = n(77217),
                s = n(83252),
                a = n(26433);
            let i = o.gK
                .compose(o.gK.model('ConcertsDetailsPage', { concerts: o.gK.maybeNull(o.gK.array(r.aR)), title: o.gK.maybeNull(o.gK.string) }), a.XT, a.pl)
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
                        let { type: n, id: a } = t,
                            { concertsResource: i, modelActionsLogger: l } = (0, o._$)(e);
                        if (!e.isLoading)
                            try {
                                e.loadingState = s.GuX.PENDING;
                                let { items: t } = yield i.getConcertsDetails({ type: n, id: a });
                                (e.concerts = (0, o.wg)(t.map((e) => (0, r.HN)(e)))), (e.loadingState = s.GuX.RESOLVE);
                            } catch (t) {
                                l.error(t), (e.loadingState = s.GuX.REJECT);
                            }
                    }),
                    reset() {
                        (e.loadingState = s.GuX.IDLE), (e.title = null), e.destroyItems([e.concerts]);
                    },
                }));
            var l = n(54486),
                c = n(28303),
                d = n(97396),
                u = n(61910),
                m = n(43426),
                g = n(8817),
                f = n(67648),
                _ = n(56231),
                h = n(97800),
                p = n(82644),
                x = n(33276),
                C = n(24188),
                j = n(80585),
                b = n(25566),
                v = n.n(b);
            let N = (0, c.PA)((e) => {
                let { type: t, id: n } = e,
                    o = (0, u.useId)(),
                    { concertsDetails: a, experiments: i } = (0, s.Pjs)(),
                    { formatMessage: c } = (0, m.A)(),
                    { contentScrollRef: b, setContentScrollRef: N } = (0, s.gKY)(),
                    y = (0, s.W6M)(),
                    [P, S] = (0, f.d)(),
                    k = (0, s.fBs)(),
                    T = (0, u.useRef)(!1),
                    w = (0, g.c)(() => {
                        var e;
                        return !a.isShimmerVisible && (null == (e = a.concerts) ? void 0 : e.length) ? a.concerts.length : 50;
                    }),
                    {
                        virtualizer: F,
                        rowResizeObserver: E,
                        columnCount: L,
                        indices: A,
                    } = (0, C.LW)({
                        count: w(),
                        rowGap: 32,
                        columnGap: 16,
                        getEstimateRowSize: () => 371,
                        minColumnCount: 2,
                        minColumnWidth: 170,
                        maxColumnWidth: 227,
                        containerRef: P,
                    }),
                    R = { '--feed-concerts-height': ''.concat(F.getTotalSize(), 'px'), '--feed-concerts-column-count': L },
                    W = (0, u.useCallback)(
                        (e) => {
                            var t;
                            let n = null == (t = a.concerts) ? void 0 : t[e];
                            return !n || a.isShimmerVisible ? (0, l.jsx)(r.LY, { isActive: a.isShimmerActive }) : (0, l.jsx)(r.Qb, { concert: n });
                        },
                        [a.concerts, a.isShimmerActive, a.isShimmerVisible],
                    );
                if (
                    ((0, u.useEffect)(
                        () => () => {
                            a.reset();
                        },
                        [a],
                    ),
                    (0, u.useEffect)(() => {
                        a.isResolved && !T.current && (k(), (T.current = !0));
                    }, [a.isResolved, k]),
                    a.isNeededToLoad && (0, u.use)(a.getData({ type: t, id: n })),
                    (!i.checkExperiment(s.zal.WebNextConcertsDetailsPage, 'on') || i.checkExperiment(s.zal.disableAllConcerts, 'on')) && (0, d.notFound)(),
                    a.isRejected)
                )
                    return (0, l.jsx)(p.w, {});
                let D = c({ id: 'concerts.details-title' });
                return (0, l.jsx)(x.hO, {
                    scrollElement: b,
                    outerTitle: D,
                    children: (0, l.jsxs)('div', {
                        className: v().root,
                        children: [
                            (0, l.jsx)(j.Y9, {
                                variant: j.Vw.TEXT,
                                withForwardControl: !1,
                                withBackwardControl: y.canBack,
                                children: (0, l.jsx)(h.Heading, { variant: 'h2', weight: 'bold', size: 'xl', lineClamp: 1, children: D }),
                            }),
                            (0, l.jsxs)(_.N, {
                                ref: N,
                                className: v().scrollContainer,
                                children: [
                                    (0, l.jsx)('div', {
                                        className: v().content,
                                        children: (0, l.jsx)('div', {
                                            'aria-labelledby': o,
                                            ref: S,
                                            style: R,
                                            className: v().container,
                                            children: F.getVirtualItems().map((e) =>
                                                (0, l.jsx)(
                                                    C.Ux,
                                                    {
                                                        className: v().row,
                                                        columnClassName: v().column,
                                                        virtualItem: e,
                                                        resizeObserver: E,
                                                        indices: A,
                                                        renderItemByIndex: W,
                                                        scrollMargin: F.options.scrollMargin,
                                                    },
                                                    e.key,
                                                ),
                                            ),
                                        }),
                                    }),
                                    (0, l.jsx)(j.A, { children: (0, l.jsx)(j.wi, { className: v().footer }) }),
                                ],
                            }),
                        ],
                    }),
                });
            });
        },
        25566: (e) => {
            e.exports = {
                root: 'ConcertsDetailsPage_root__Uyap_',
                scrollContainer: 'ConcertsDetailsPage_scrollContainer__BKTRD',
                content: 'ConcertsDetailsPage_content__WsuVk',
                header: 'ConcertsDetailsPage_header__K7UVE',
                container: 'ConcertsDetailsPage_container__swjuX',
                column: 'ConcertsDetailsPage_column__EB1kA',
                row: 'ConcertsDetailsPage_row__oP8Xu',
                footer: 'ConcertsDetailsPage_footer__ooBj8',
            };
        },
        31622: (e, t, n) => {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'default', {
                    enumerable: !0,
                    get: function () {
                        return l;
                    },
                });
            let o = n(54486),
                r = n(61910),
                s = n(91165);
            function a(e) {
                return { default: e && 'default' in e ? e.default : e };
            }
            n(98944);
            let i = { loader: () => Promise.resolve(a(() => null)), loading: null, ssr: !0 },
                l = function (e) {
                    let t = { ...i, ...e },
                        n = (0, r.lazy)(() => t.loader().then(a)),
                        l = t.loading;
                    function c(e) {
                        let a = l ? (0, o.jsx)(l, { isLoading: !0, pastDelay: !0, error: null }) : null,
                            i = !t.ssr || !!t.loading,
                            c = i ? r.Suspense : r.Fragment,
                            d = t.ssr
                                ? (0, o.jsxs)(o.Fragment, { children: [null, (0, o.jsx)(n, { ...e })] })
                                : (0, o.jsx)(s.BailoutToCSR, { reason: 'next/dynamic', children: (0, o.jsx)(n, { ...e }) });
                        return (0, o.jsx)(c, { ...(i ? { fallback: a } : {}), children: d });
                    }
                    return (c.displayName = 'LoadableComponent'), c;
                };
        },
        35462: (e) => {
            e.exports = {
                root: 'TopConcertsCarousel_root__opMbb',
                controls: 'TopConcertsCarousel_controls__c92PW',
                header: 'TopConcertsCarousel_header__3h3Zn',
                carousel: 'TopConcertsCarousel_carousel__uMke6',
                item: 'TopConcertsCarousel_item__fz8lR',
                important: 'TopConcertsCarousel_important__ZcT6Z',
            };
        },
        36446: (e, t, n) => {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'default', {
                    enumerable: !0,
                    get: function () {
                        return r;
                    },
                });
            let o = n(45221)._(n(31622));
            function r(e, t) {
                var n;
                let r = {};
                'function' == typeof e && (r.loader = e);
                let s = { ...r, ...t };
                return (0, o.default)({ ...s, modules: null == (n = s.loadableGenerated) ? void 0 : n.modules });
            }
            ('function' == typeof t.default || ('object' == typeof t.default && null !== t.default)) &&
                void 0 === t.default.__esModule &&
                (Object.defineProperty(t.default, '__esModule', { value: !0 }), Object.assign(t.default, t), (e.exports = t.default));
        },
        42421: (e, t, n) => {
            'use strict';
            n.d(t, { M: () => o.NotFound });
            var o = n(65034);
        },
        45777: (e, t, n) => {
            'use strict';
            n.r(t), n.d(t, { default: () => l });
            var o = n(54486),
                r = n(97396),
                s = n(61910),
                a = n(48249),
                i = n(14741);
            let l = () => {
                let e = (0, r.useSearchParams)(),
                    t = e.get('type'),
                    n = e.get('id');
                return (t && n) || (0, r.notFound)(), (0, o.jsx)(s.Suspense, { fallback: (0, o.jsx)(a.k_, {}), children: (0, o.jsx)(i.f, { type: t, id: n }) });
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
        48249: (e, t, n) => {
            'use strict';
            n.d(t, { km: () => _, h4: () => M, cw: () => d, k_: () => Y });
            var o = n(83252),
                r = n(93064),
                s = n(6664),
                a = n(77217),
                i = n(26433);
            let l = (e, t, n) => (-1 === n ? e.slice(t) : e.slice(t, t + n)),
                c = r.gK
                    .compose(
                        r.gK.model('ConcertsPageConfig', {
                            topOffset: r.gK.optional(r.gK.number, 0),
                            topLimit: r.gK.optional(r.gK.number, 3),
                            feedOffset: r.gK.optional(r.gK.number, 3),
                            feedLimit: r.gK.optional(r.gK.number, -1),
                        }),
                        i.XT,
                    )
                    .actions((e) => ({
                        getData: (0, r.L3)(function* () {
                            let { concertsResource: t, modelActionsLogger: n } = (0, r._$)(e);
                            if (!e.isLoading)
                                try {
                                    e.loadingState = o.GuX.PENDING;
                                    let {
                                        config: { feed: n, top: r },
                                    } = yield t.getTabConfig({});
                                    (e.feedLimit = n.limit),
                                        (e.feedOffset = n.offset),
                                        (e.topLimit = r.limit),
                                        (e.topOffset = r.offset),
                                        (e.loadingState = o.GuX.RESOLVE);
                                } catch (t) {
                                    n.error(t), (e.loadingState = o.GuX.REJECT);
                                }
                        }),
                        reset() {
                            (e.loadingState = o.GuX.IDLE), (e.feedLimit = -1), (e.feedOffset = 3), (e.topLimit = 3), (e.topOffset = 0);
                        },
                    })),
                d = r.gK
                    .compose(
                        r.gK.model('ConcertsPage', {
                            config: c,
                            landing: s.Ju,
                            topConcerts: r.gK.maybeNull(r.gK.array(a.aR)),
                            feedConcerts: r.gK.maybeNull(r.gK.array(a.aR)),
                        }),
                        i.XT,
                        i.pl,
                    )
                    .views((e) => ({
                        get isShimmerVisible() {
                            return e.isNeededToLoad || e.isLoading || e.isRejected;
                        },
                        get isShimmerActive() {
                            return e.isLoading;
                        },
                    }))
                    .actions((e) => ({
                        getData: (0, r.L3)(function* () {
                            let { concertsResource: t, modelActionsLogger: n } = (0, r._$)(e);
                            if (!e.config.isLoading && !e.isLoading)
                                try {
                                    (e.loadingState = o.GuX.PENDING), yield e.config.getData();
                                    let { items: n } = yield t.getFeed({}),
                                        { feedConcerts: s, topConcerts: i } = ((e, t) => {
                                            let { topLimit: n, topOffset: o, feedLimit: r, feedOffset: s } = e;
                                            return { topConcerts: l(t, o, n), feedConcerts: l(t, s, r) };
                                        })(
                                            e.config,
                                            n.map((e) => (0, a.HN)(e)),
                                        );
                                    (e.feedConcerts = (0, r.wg)(s)), (e.topConcerts = (0, r.wg)(i)), (e.loadingState = o.GuX.RESOLVE);
                                } catch (t) {
                                    n.error(t), (e.loadingState = o.GuX.REJECT);
                                }
                        }),
                        reset() {
                            e.config.reset(), e.landing.reset(), (e.loadingState = o.GuX.IDLE), e.destroyItems([e.topConcerts, e.feedConcerts]);
                        },
                    }));
            var u = n(54486),
                m = n(28303),
                g = n(61910),
                f = n(42421);
            let _ = (0, m.PA)(() => {
                let { concerts: e } = (0, o.Pjs)();
                return (
                    (0, g.useEffect)(
                        () => () => {
                            e.reset();
                        },
                        [e],
                    ),
                    (0, u.jsx)(f.M, {})
                );
            });
            var h = n(97396),
                p = n(43426),
                x = n(47713),
                C = n(9348),
                j = n(43350),
                b = n(31500),
                v = n(6024),
                N = n(56231),
                y = n(97800),
                P = n(8817),
                S = n(67648),
                k = n(24188),
                T = n(80585),
                w = n(63118),
                F = n.n(w);
            let E = (0, m.PA)(() => {
                let e = (0, g.useId)(),
                    { concerts: t } = (0, o.Pjs)(),
                    { formatMessage: n } = (0, p.A)(),
                    [r, s] = (0, S.d)(),
                    i = (0, o.fBs)(),
                    l = (0, g.useRef)(!1),
                    c = (0, P.c)(() => {
                        var e;
                        return !t.isShimmerVisible && (null == (e = t.feedConcerts) ? void 0 : e.length) ? t.feedConcerts.length : 50;
                    }),
                    {
                        virtualizer: d,
                        rowResizeObserver: m,
                        columnCount: f,
                        indices: _,
                    } = (0, k.LW)({
                        count: c(),
                        rowGap: 32,
                        columnGap: 16,
                        getEstimateRowSize: () => 371,
                        minColumnCount: 2,
                        minColumnWidth: 170,
                        maxColumnWidth: 227,
                        containerRef: r,
                    }),
                    h = { '--feed-concerts-height': ''.concat(d.getTotalSize(), 'px'), '--feed-concerts-column-count': f },
                    x = (0, g.useCallback)(
                        (e) => {
                            var n, r, s;
                            let i = null == (n = t.feedConcerts) ? void 0 : n[e];
                            return !i || t.isShimmerVisible
                                ? (0, u.jsx)(a.LY, { isActive: t.isShimmerActive })
                                : (0, u.jsx)(o.Bki, {
                                      objectType: j.ky.Concert,
                                      objectId: i.id,
                                      objectPosX: (e % f) + 1,
                                      objectPosY: Math.floor(e / f) + 1,
                                      objectsCount: null != (s = null == (r = t.feedConcerts) ? void 0 : r.length) ? s : 0,
                                      children: (0, u.jsx)(a.Qb, { concert: i }),
                                  });
                        },
                        [f, t.feedConcerts, t.isShimmerActive, t.isShimmerVisible],
                    );
                return (
                    (0, g.useEffect)(() => {
                        t.isResolved && !l.current && (i(), (l.current = !0));
                    }, [t.isResolved, i]),
                    (0, u.jsxs)('div', {
                        className: F().root,
                        ...(0, b.Am)(b.e8.concerts.CONCERTS_FEED),
                        children: [
                            (0, u.jsx)(T.Tw, { className: F().header, labeledForId: e, title: n({ id: 'concerts.all-concerts' }), headingVariant: 'h2' }),
                            (0, u.jsx)('div', {
                                'aria-labelledby': e,
                                ref: s,
                                style: h,
                                className: F().container,
                                children: d.getVirtualItems().map((e) =>
                                    (0, u.jsx)(
                                        k.Ux,
                                        {
                                            className: F().row,
                                            columnClassName: F().column,
                                            virtualItem: e,
                                            resizeObserver: m,
                                            indices: _,
                                            renderItemByIndex: x,
                                            scrollMargin: d.options.scrollMargin,
                                        },
                                        e.key,
                                    ),
                                ),
                            }),
                        ],
                    })
                );
            });
            var L = n(50420),
                A = n(81203),
                R = n(35462),
                W = n.n(R);
            let D = (e) => {
                    let { children: t } = e,
                        n = (0, g.useId)(),
                        o = (0, g.useRef)(null),
                        { formatMessage: r } = (0, p.A)();
                    return (0, u.jsxs)('div', {
                        className: W().root,
                        ...(0, b.Am)(b.e8.concerts.CONCERTS_TOP),
                        children: [
                            (0, u.jsx)(T.Tw, {
                                className: W().header,
                                labeledForId: n,
                                title: r({ id: 'concerts.top-for-you' }),
                                controls: (0, u.jsx)(T.X9, { className: W().controls, carouselRef: o }),
                                headingVariant: 'h2',
                            }),
                            (0, u.jsx)(A.Carousel, {
                                className: W().carousel,
                                ref: o,
                                itemClassName: (0, L.$)(W().item, W().important),
                                'aria-labelledby': n,
                                children: t,
                            }),
                        ],
                    });
                },
                O = (e) => Array.from({ length: 10 }, (t, n) => (0, u.jsx)(a.LY, { isActive: e, withPriceButton: !0 }, n)),
                I = (0, m.PA)(() => {
                    let { concerts: e } = (0, o.Pjs)(),
                        t = (0, o.fBs)(),
                        n = (0, g.useRef)(!1),
                        r = (0, g.useMemo)(() => {
                            var t;
                            return (null == (t = e.topConcerts) ? void 0 : t.length) && !e.isShimmerVisible
                                ? e.topConcerts.map((t, n) => {
                                      var r, s;
                                      return (0, u.jsx)(
                                          o.Bki,
                                          {
                                              objectType: j.ky.Concert,
                                              objectId: t.id,
                                              objectPosX: n + 1,
                                              objectPosY: 1,
                                              objectsCount: null != (s = null == (r = e.topConcerts) ? void 0 : r.length) ? s : 0,
                                              children: (0, u.jsx)(a.Qb, { withMask: !1, withPriceButton: !0, concert: t }),
                                          },
                                          t.getKey(n),
                                      );
                                  })
                                : O(e.isShimmerActive);
                        }, [e.isShimmerActive, e.isShimmerVisible, e.topConcerts]);
                    return (
                        (0, g.useEffect)(() => {
                            e.isResolved && !n.current && (t(), (n.current = !0));
                        }, [e.isResolved, t]),
                        e.isNeededToLoad && (0, g.use)(e.getData()),
                        (0, u.jsx)(D, { children: r })
                    );
                }),
                K = () => (0, u.jsx)(g.Suspense, { fallback: (0, u.jsx)(D, { children: O(!0) }), children: (0, u.jsx)(I, {}) });
            var z = n(82644),
                G = n(33276),
                X = n(62395),
                B = n(77343),
                V = n.n(B);
            let M = (0, m.PA)(() => {
                    var e, t, n, r, a, i, l, c, d;
                    let { formatMessage: m } = (0, p.A)(),
                        { setContentScrollRef: f, contentScrollRef: _ } = (0, o.gKY)(),
                        { concerts: S, experiments: k, user: w } = (0, o.Pjs)(),
                        F = (() => {
                            let e = (0, X.st)(),
                                t = (0, o.UlF)(),
                                { hash: n } = (0, X.gf)();
                            return (0, P.c)((o, r) => {
                                if (!e) return;
                                let s = { hash: n, pageId: j.QT.ConcertsLandingScreen, pageStyle: j.QL.Fullscreen, pagePlacement: j.c4.Fullscreen, viewUuid: r },
                                    a = (0, j.Fx)({ params: s, logger: t, context: 'useSendEventOnConcertsOpenedOrClosed' });
                                a && (o ? (0, j.Fn)(e.evgenInstance, a) : (0, j.PO)(e.evgenInstance, a));
                            });
                        })(),
                        L = (0, g.useRef)(String((0, C.A)())),
                        A = null != (i = null == (e = S.landing.meta) ? void 0 : e.selectedTabIndex) ? i : 0,
                        R = null != (l = null == (n = S.landing.tabs.data) || null == (t = n[A]) ? void 0 : t.blocks.length) ? l : 0;
                    return ((!k.checkExperiment(o.zal.WebNextConcertsTab, 'on') || k.checkExperiment(o.zal.disableAllConcerts, 'on')) && (0, h.notFound)(),
                    w.hasPlus || (0, h.redirect)(o.Zyd.main.href),
                    (0, g.useEffect)(
                        () => () => {
                            S.reset();
                        },
                        [S],
                    ),
                    (0, g.useEffect)(() => {
                        let e = L.current;
                        return (
                            F(!0, e),
                            () => {
                                F(!1, e);
                            }
                        );
                    }, [F]),
                    (0, o.Jzs)(S.landing.isResolved),
                    (() => {
                        let e = (0, g.useRef)(1),
                            { concerts: t } = (0, o.Pjs)(),
                            { notify: n } = (0, o.lkh)(),
                            { formatMessage: r } = (0, p.A)();
                        (0, g.useEffect)(() => {
                            e && (t.isRejected && n((0, u.jsx)(T.hT, { error: r({ id: 'concerts.feed-error' }) }), { containerId: o.uQT.ERROR }), e.current--);
                        }, [t.isRejected, r, n]);
                    })(),
                    S.landing.isNeededToLoad && (0, g.use)(S.landing.getSkeleton({ id: v.p.CONCERTS, showWizard: w.settings.showWizard }, { preloadBlocksCount: 2 })),
                    S.landing.isRejected)
                        ? (0, u.jsx)(z.w, {})
                        : (0, u.jsx)(o.nVz, {
                              pageId: o._Q$.CONCERTS,
                              children: (0, u.jsxs)(G.hO, {
                                  scrollElement: _,
                                  outerTitle: m({ id: 'entity-names.concerts' }),
                                  children: [
                                      (0, u.jsx)(T.Y9, {
                                          variant: T.Vw.TEXT,
                                          showControls: !1,
                                          children: (0, u.jsx)(y.Heading, {
                                              variant: 'h1',
                                              weight: 'bold',
                                              size: 'xl',
                                              children: (0, u.jsx)(x.A, { id: 'entity-names.concerts' }),
                                          }),
                                      }),
                                      (0, u.jsxs)(N.N, {
                                          ref: f,
                                          className: V().root,
                                          containerClassName: V().container,
                                          ...(0, b.Am)(b.Xk.concerts.CONCERTS_PAGE),
                                          children: [
                                              (0, u.jsx)(o.jPc, {
                                                  children: (0, u.jsx)(o.hjC, {
                                                      tabId: '',
                                                      tabPos: 0,
                                                      isTabSelectedByDefault: !1,
                                                      children: (0, u.jsx)(o.FoH, {
                                                          blockId: j.LA.ConcertTabHeader,
                                                          blockType: j.LA.ConcertTabHeader,
                                                          blockPosX: 1,
                                                          blockPosY: 1,
                                                          objectsCount: null != (c = null == (r = S.topConcerts) ? void 0 : r.length) ? c : 0,
                                                          children: (0, u.jsx)(K, {}),
                                                      }),
                                                  }),
                                              }),
                                              (0, u.jsx)(o.MZP, {
                                                  offsetBlockPosY: 1,
                                                  children: (0, u.jsx)(s.EA, { landing: S.landing, errorComponent: (0, u.jsx)(z.w, { withBackwardControl: !1 }) }),
                                              }),
                                              (0, u.jsx)(o.jPc, {
                                                  children: (0, u.jsx)(o.hjC, {
                                                      tabId: '',
                                                      tabPos: 0,
                                                      isTabSelectedByDefault: !1,
                                                      children: (0, u.jsx)(o.FoH, {
                                                          blockId: j.LA.ConcertTabFeed,
                                                          blockType: j.LA.ConcertTabFeed,
                                                          blockPosX: 1,
                                                          blockPosY: R + 2,
                                                          objectsCount: null != (d = null == (a = S.feedConcerts) ? void 0 : a.length) ? d : 0,
                                                          children: (0, u.jsx)(E, {}),
                                                      }),
                                                  }),
                                              }),
                                              (0, u.jsx)(T.A, { children: (0, u.jsx)(T.wi, { className: V().footer }) }),
                                          ],
                                      }),
                                  ],
                              }),
                          });
                }),
                Y = () => (0, u.jsx)(T.JR, { style: { position: 'absolute', background: 'var(--ym-background-color-primary-enabled-content)' } });
        },
        57249: (e, t, n) => {
            'use strict';
            e.exports = n.p + 'static/media/dotlottie-player.98f80c6ff3eca5ba.wasm';
        },
        63118: (e) => {
            e.exports = {
                root: 'FeedConcerts_root__W7OGN',
                header: 'FeedConcerts_header__Ht1xd',
                container: 'FeedConcerts_container__CONvW',
                column: 'FeedConcerts_column__FpMgx',
                row: 'FeedConcerts_row__HEdtn',
            };
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
        65034: (e, t, n) => {
            'use strict';
            n.d(t, { NotFound: () => _ });
            var o = n(54486),
                r = n(50420),
                s = n(28303),
                a = n(47713),
                i = n(77881),
                l = n(5956),
                c = n(97800),
                d = n(83252),
                u = n(80585),
                m = n(61910),
                g = n(46215),
                f = n.n(g);
            let _ = (0, s.PA)((e) => {
                let { className: t, title: n, description: s, iconVariant: g = 'musicLogo', iconClassName: _, iconSize: h } = e,
                    { contentRef: p } = (0, d.gKY)(),
                    x = (0, d.ZpR)(d.Zyd.main.href);
                (0, d.LZB)();
                let { handleNavigateToMain: C } = (0, d.D5F)(x);
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
                    (0, o.jsxs)('div', {
                        className: (0, r.$)(f().root, { [f().root_desktop]: !p }, t),
                        children: [
                            (0, o.jsx)(u.Lh, { withBackwardFallback: '/', className: f().navigation, withForwardControl: !1 }),
                            (0, o.jsxs)('div', {
                                className: f().content,
                                children: [
                                    (0, o.jsx)(l.Icon, { className: (0, r.$)(f().icon, _), variant: g, size: h }),
                                    (0, o.jsx)(c.Heading, {
                                        className: (0, r.$)(f().title, f().important),
                                        variant: 'h3',
                                        size: 'xs',
                                        children: n || (0, o.jsx)(a.A, { id: 'page-error.page-does-not-exist' }),
                                    }),
                                    (0, o.jsx)(c.Caption, {
                                        className: (0, r.$)(f().text, f().important),
                                        variant: 'span',
                                        type: 'text',
                                        size: 'l',
                                        weight: 'normal',
                                        children: s || (0, o.jsx)(a.A, { id: 'page-error.page-does-not-exist-description' }),
                                    }),
                                    (0, o.jsx)(i.$, {
                                        onClick: C,
                                        className: f().button,
                                        role: 'link',
                                        color: 'secondary',
                                        size: 'l',
                                        radius: 'xxxl',
                                        children: (0, o.jsx)(c.Caption, {
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'm',
                                            children: (0, o.jsx)(a.A, { id: 'navigation.page-main' }),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    })
                );
            });
        },
        75312: (e, t, n) => {
            'use strict';
            n.d(t, { SomethingWentWrong: () => h });
            var o = n(54486),
                r = n(50420),
                s = n(28303),
                a = n(61910),
                i = n(43426),
                l = n(47713),
                c = n(77881),
                d = n(5956),
                u = n(97800),
                m = n(83252),
                g = n(80585),
                f = n(63708),
                _ = n.n(f);
            let h = (0, s.PA)((e) => {
                let { className: t, withBackwardControl: n = !0 } = e,
                    { formatMessage: s } = (0, i.A)(),
                    f = s({ id: 'error-messages.something-went-wrong' });
                (0, m.CgZ)(f);
                let { sendRefreshEvent: h } = (0, m.cYT)(),
                    p = (0, a.useCallback)(() => {
                        h(), (window.location.href = m.Zyd.main.href);
                    }, [h]),
                    { contentRef: x } = (0, m.gKY)();
                return (0, o.jsxs)('div', {
                    className: (0, r.$)(_().root, t),
                    children: [
                        n &&
                            (0, o.jsx)(g.Lh, {
                                withBackwardFallback: '/',
                                className: (0, r.$)(_().navigation, { [_().navigation_desktop]: !x }),
                                withForwardControl: !1,
                            }),
                        (0, o.jsxs)('div', {
                            className: (0, r.$)(_().content, { [_().content_shrink]: !n }),
                            children: [
                                (0, o.jsx)(d.Icon, { className: _().icon, variant: 'attention', size: 'xxl' }),
                                (0, o.jsx)(u.Heading, { className: (0, r.$)(_().title, _().important), variant: 'h3', size: 'xs', children: f }),
                                (0, o.jsxs)(u.Caption, {
                                    className: (0, r.$)(_().text, _().important),
                                    variant: 'span',
                                    type: 'text',
                                    size: 'l',
                                    weight: 'normal',
                                    children: [!1, (0, o.jsx)(l.A, { id: 'page-error.try-to-restart-app' })],
                                }),
                                (0, o.jsx)(c.$, {
                                    onClick: p,
                                    className: _().button,
                                    role: 'link',
                                    color: 'secondary',
                                    size: 'l',
                                    radius: 'xxxl',
                                    children: (0, o.jsxs)(u.Caption, {
                                        type: 'controls',
                                        variant: 'span',
                                        size: 'm',
                                        children: [!1, (0, o.jsx)(l.A, { id: 'page-error.restart-app-button' })],
                                    }),
                                }),
                            ],
                        }),
                    ],
                });
            });
        },
        77343: (e) => {
            e.exports = { root: 'ConcertsPage_root__olabl', container: 'ConcertsPage_container__qS7xA', footer: 'ConcertsPage_footer__GYRwF' };
        },
        82644: (e, t, n) => {
            'use strict';
            n.d(t, { w: () => o.SomethingWentWrong });
            var o = n(75312);
        },
        83645: (e, t, n) => {
            'use strict';
            n.d(t, { default: () => r.a });
            var o = n(36446),
                r = n.n(o);
        },
        91165: (e, t, n) => {
            'use strict';
            function o(e) {
                let { reason: t, children: n } = e;
                return n;
            }
            Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'BailoutToCSR', {
                    enumerable: !0,
                    get: function () {
                        return o;
                    },
                }),
                n(39201);
        },
        94360: (e, t, n) => {
            Promise.resolve().then(n.bind(n, 45777));
        },
        97151: (e, t, n) => {
            'use strict';
            n.d(t, { XU: () => u });
            var o,
                r,
                s = n(41500),
                a = n(61910),
                i = n(43426);
            !(function (e) {
                (e.formatDate = 'FormattedDate'),
                    (e.formatTime = 'FormattedTime'),
                    (e.formatNumber = 'FormattedNumber'),
                    (e.formatList = 'FormattedList'),
                    (e.formatDisplayName = 'FormattedDisplayName');
            })(o || (o = {})),
                (function (e) {
                    (e.formatDate = 'FormattedDateParts'),
                        (e.formatTime = 'FormattedTimeParts'),
                        (e.formatNumber = 'FormattedNumberParts'),
                        (e.formatList = 'FormattedListParts');
                })(r || (r = {}));
            var l = function (e) {
                var t = (0, i.A)(),
                    n = e.value,
                    o = e.children,
                    r = (0, s.__rest)(e, ['value', 'children']);
                return o(t.formatNumberToParts(n, r));
            };
            function c(e) {
                var t = function (t) {
                    var n = (0, i.A)(),
                        o = t.value,
                        r = t.children,
                        a = (0, s.__rest)(t, ['value', 'children']),
                        l = 'string' == typeof o ? new Date(o || 0) : o;
                    return r('formatDate' === e ? n.formatDateToParts(l, a) : n.formatTimeToParts(l, a));
                };
                return (t.displayName = r[e]), t;
            }
            function d(e) {
                var t = function (t) {
                    var n = (0, i.A)(),
                        o = t.value,
                        r = t.children,
                        l = (0, s.__rest)(t, ['value', 'children']),
                        c = n[e](o, l);
                    if ('function' == typeof r) return r(c);
                    var d = n.textComponent || a.Fragment;
                    return a.createElement(d, null, c);
                };
                return (t.displayName = o[e]), t;
            }
            (l.displayName = 'FormattedNumberParts'), (l.displayName = 'FormattedNumberParts');
            var u = d('formatDate');
            d('formatTime'), d('formatNumber'), d('formatList'), d('formatDisplayName'), c('formatDate'), c('formatTime');
        },
        98944: (e, t, n) => {
            'use strict';
            function o(e) {
                let { moduleIds: t } = e;
                return null;
            }
            Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'PreloadChunks', {
                    enumerable: !0,
                    get: function () {
                        return o;
                    },
                }),
                n(54486),
                n(92803),
                n(14367),
                n(32038);
        },
    },
    (e) => {
        e.O(
            0,
            [
                6041, 9834, 5355, 1023, 2398, 8748, 6552, 4915, 2186, 1776, 2036, 1311, 7764, 6706, 7724, 5201, 5148, 3005, 3916, 4885, 3252, 585, 6433, 3286, 156, 6231,
                4826, 1365, 3211, 7858, 5570, 6664, 5843, 3290, 7358,
            ],
            () => e((e.s = 94360)),
        ),
            (_N_E = e.O());
    },
]);
