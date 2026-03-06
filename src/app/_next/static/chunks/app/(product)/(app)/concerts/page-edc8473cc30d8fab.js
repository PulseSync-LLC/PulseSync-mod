(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9940],
    {
        8101: (e, t, n) => {
            Promise.resolve().then(n.bind(n, 72824));
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
            n.d(t, { km: () => _, h4: () => $, cw: () => d, k_: () => V });
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
                f = n(61910),
                g = n(42421);
            let _ = (0, m.PA)(() => {
                let { concerts: e } = (0, o.Pjs)();
                return (
                    (0, f.useEffect)(
                        () => () => {
                            e.reset();
                        },
                        [e],
                    ),
                    (0, u.jsx)(g.M, {})
                );
            });
            var h = n(97396),
                p = n(43426),
                x = n(47713),
                b = n(9348),
                j = n(43350),
                C = n(31500),
                v = n(6024),
                N = n(56231),
                y = n(97800),
                P = n(8817),
                k = n(67648),
                T = n(24188),
                F = n(80585),
                S = n(63118),
                w = n.n(S);
            let A = (0, m.PA)(() => {
                let e = (0, f.useId)(),
                    { concerts: t } = (0, o.Pjs)(),
                    { formatMessage: n } = (0, p.A)(),
                    [r, s] = (0, k.d)(),
                    i = (0, o.fBs)(),
                    l = (0, f.useRef)(!1),
                    c = (0, P.c)(() => {
                        var e;
                        return !t.isShimmerVisible && (null == (e = t.feedConcerts) ? void 0 : e.length) ? t.feedConcerts.length : 50;
                    }),
                    {
                        virtualizer: d,
                        rowResizeObserver: m,
                        columnCount: g,
                        indices: _,
                    } = (0, T.LW)({
                        count: c(),
                        rowGap: 32,
                        columnGap: 16,
                        getEstimateRowSize: () => 371,
                        minColumnCount: 2,
                        minColumnWidth: 170,
                        maxColumnWidth: 227,
                        containerRef: r,
                    }),
                    h = { '--feed-concerts-height': ''.concat(d.getTotalSize(), 'px'), '--feed-concerts-column-count': g },
                    x = (0, f.useCallback)(
                        (e) => {
                            var n, r, s;
                            let i = null == (n = t.feedConcerts) ? void 0 : n[e];
                            return !i || t.isShimmerVisible
                                ? (0, u.jsx)(a.LY, { isActive: t.isShimmerActive })
                                : (0, u.jsx)(o.Bki, {
                                      objectType: j.ky.Concert,
                                      objectId: i.id,
                                      objectPosX: (e % g) + 1,
                                      objectPosY: Math.floor(e / g) + 1,
                                      objectsCount: null != (s = null == (r = t.feedConcerts) ? void 0 : r.length) ? s : 0,
                                      children: (0, u.jsx)(a.Qb, { concert: i }),
                                  });
                        },
                        [g, t.feedConcerts, t.isShimmerActive, t.isShimmerVisible],
                    );
                return (
                    (0, f.useEffect)(() => {
                        t.isResolved && !l.current && (i(), (l.current = !0));
                    }, [t.isResolved, i]),
                    (0, u.jsxs)('div', {
                        className: w().root,
                        ...(0, C.Am)(C.e8.concerts.CONCERTS_FEED),
                        children: [
                            (0, u.jsx)(F.Tw, { className: w().header, labeledForId: e, title: n({ id: 'concerts.all-concerts' }), headingVariant: 'h2' }),
                            (0, u.jsx)('div', {
                                'aria-labelledby': e,
                                ref: s,
                                style: h,
                                className: w().container,
                                children: d
                                    .getVirtualItems()
                                    .map((e) =>
                                        (0, u.jsx)(
                                            T.Ux,
                                            {
                                                className: w().row,
                                                columnClassName: w().column,
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
            var E = n(50420),
                L = n(81203),
                O = n(35462),
                R = n.n(O);
            let W = (e) => {
                    let { children: t } = e,
                        n = (0, f.useId)(),
                        o = (0, f.useRef)(null),
                        { formatMessage: r } = (0, p.A)();
                    return (0, u.jsxs)('div', {
                        className: R().root,
                        ...(0, C.Am)(C.e8.concerts.CONCERTS_TOP),
                        children: [
                            (0, u.jsx)(F.Tw, {
                                className: R().header,
                                labeledForId: n,
                                title: r({ id: 'concerts.top-for-you' }),
                                controls: (0, u.jsx)(F.X9, { className: R().controls, carouselRef: o }),
                                headingVariant: 'h2',
                            }),
                            (0, u.jsx)(L.Carousel, {
                                className: R().carousel,
                                ref: o,
                                itemClassName: (0, E.$)(R().item, R().important),
                                'aria-labelledby': n,
                                children: t,
                            }),
                        ],
                    });
                },
                I = (e) => Array.from({ length: 10 }, (t, n) => (0, u.jsx)(a.LY, { isActive: e, withPriceButton: !0 }, n)),
                D = (0, m.PA)(() => {
                    let { concerts: e } = (0, o.Pjs)(),
                        t = (0, o.fBs)(),
                        n = (0, f.useRef)(!1),
                        r = (0, f.useMemo)(() => {
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
                                : I(e.isShimmerActive);
                        }, [e.isShimmerActive, e.isShimmerVisible, e.topConcerts]);
                    return (
                        (0, f.useEffect)(() => {
                            e.isResolved && !n.current && (t(), (n.current = !0));
                        }, [e.isResolved, t]),
                        e.isNeededToLoad && (0, f.use)(e.getData()),
                        (0, u.jsx)(W, { children: r })
                    );
                }),
                z = () => (0, u.jsx)(f.Suspense, { fallback: (0, u.jsx)(W, { children: I(!0) }), children: (0, u.jsx)(D, {}) });
            var G = n(82644),
                K = n(33276),
                B = n(62395),
                X = n(77343),
                M = n.n(X);
            let $ = (0, m.PA)(() => {
                    var e, t, n, r, a, i, l, c, d;
                    let { formatMessage: m } = (0, p.A)(),
                        { setContentScrollRef: g, contentScrollRef: _ } = (0, o.gKY)(),
                        { concerts: k, experiments: T, user: S } = (0, o.Pjs)(),
                        w = (() => {
                            let e = (0, B.st)(),
                                t = (0, o.UlF)(),
                                { hash: n } = (0, B.gf)();
                            return (0, P.c)((o, r) => {
                                if (!e) return;
                                let s = { hash: n, pageId: j.QT.ConcertsLandingScreen, pageStyle: j.QL.Fullscreen, pagePlacement: j.c4.Fullscreen, viewUuid: r },
                                    a = (0, j.Fx)({ params: s, logger: t, context: 'useSendEventOnConcertsOpenedOrClosed' });
                                a && (o ? (0, j.Fn)(e.evgenInstance, a) : (0, j.PO)(e.evgenInstance, a));
                            });
                        })(),
                        E = (0, f.useRef)(String((0, b.A)())),
                        L = null != (i = null == (e = k.landing.meta) ? void 0 : e.selectedTabIndex) ? i : 0,
                        O = null != (l = null == (n = k.landing.tabs.data) || null == (t = n[L]) ? void 0 : t.blocks.length) ? l : 0;
                    return ((!T.checkExperiment(o.zal.WebNextConcertsTab, 'on') || T.checkExperiment(o.zal.disableAllConcerts, 'on')) && (0, h.notFound)(),
                    S.hasPlus || (0, h.redirect)(o.Zyd.main.href),
                    (0, f.useEffect)(
                        () => () => {
                            k.reset();
                        },
                        [k],
                    ),
                    (0, f.useEffect)(() => {
                        let e = E.current;
                        return (
                            w(!0, e),
                            () => {
                                w(!1, e);
                            }
                        );
                    }, [w]),
                    (0, o.Jzs)(k.landing.isResolved),
                    (() => {
                        let e = (0, f.useRef)(1),
                            { concerts: t } = (0, o.Pjs)(),
                            { notify: n } = (0, o.lkh)(),
                            { formatMessage: r } = (0, p.A)();
                        (0, f.useEffect)(() => {
                            e && (t.isRejected && n((0, u.jsx)(F.hT, { error: r({ id: 'concerts.feed-error' }) }), { containerId: o.uQT.ERROR }), e.current--);
                        }, [t.isRejected, r, n]);
                    })(),
                    k.landing.isNeededToLoad && (0, f.use)(k.landing.getSkeleton({ id: v.p.CONCERTS, showWizard: S.settings.showWizard }, { preloadBlocksCount: 2 })),
                    k.landing.isRejected)
                        ? (0, u.jsx)(G.w, {})
                        : (0, u.jsx)(o.nVz, {
                              pageId: o._Q$.CONCERTS,
                              children: (0, u.jsxs)(K.hO, {
                                  scrollElement: _,
                                  outerTitle: m({ id: 'entity-names.concerts' }),
                                  children: [
                                      (0, u.jsx)(F.Y9, {
                                          variant: F.Vw.TEXT,
                                          showControls: !1,
                                          children: (0, u.jsx)(y.Heading, {
                                              variant: 'h1',
                                              weight: 'bold',
                                              size: 'xl',
                                              children: (0, u.jsx)(x.A, { id: 'entity-names.concerts' }),
                                          }),
                                      }),
                                      (0, u.jsxs)(N.N, {
                                          ref: g,
                                          className: M().root,
                                          containerClassName: M().container,
                                          ...(0, C.Am)(C.Xk.concerts.CONCERTS_PAGE),
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
                                                          objectsCount: null != (c = null == (r = k.topConcerts) ? void 0 : r.length) ? c : 0,
                                                          children: (0, u.jsx)(z, {}),
                                                      }),
                                                  }),
                                              }),
                                              (0, u.jsx)(o.MZP, {
                                                  offsetBlockPosY: 1,
                                                  children: (0, u.jsx)(s.EA, { landing: k.landing, errorComponent: (0, u.jsx)(G.w, { withBackwardControl: !1 }) }),
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
                                                          blockPosY: O + 2,
                                                          objectsCount: null != (d = null == (a = k.feedConcerts) ? void 0 : a.length) ? d : 0,
                                                          children: (0, u.jsx)(A, {}),
                                                      }),
                                                  }),
                                              }),
                                              (0, u.jsx)(F.A, { children: (0, u.jsx)(F.wi, { className: M().footer }) }),
                                          ],
                                      }),
                                  ],
                              }),
                          });
                }),
                V = () => (0, u.jsx)(F.JR, { style: { position: 'absolute', background: 'var(--ym-background-color-primary-enabled-content)' } });
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
                f = n(46215),
                g = n.n(f);
            let _ = (0, s.PA)((e) => {
                let { className: t, title: n, description: s, iconVariant: f = 'musicLogo', iconClassName: _, iconSize: h } = e,
                    { contentRef: p } = (0, d.gKY)(),
                    x = (0, d.ZpR)(d.Zyd.main.href);
                (0, d.LZB)();
                let { handleNavigateToMain: b } = (0, d.D5F)(x);
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
                        className: (0, r.$)(g().root, { [g().root_desktop]: !p }, t),
                        children: [
                            (0, o.jsx)(u.Lh, { withBackwardFallback: '/', className: g().navigation, withForwardControl: !1 }),
                            (0, o.jsxs)('div', {
                                className: g().content,
                                children: [
                                    (0, o.jsx)(l.Icon, { className: (0, r.$)(g().icon, _), variant: f, size: h }),
                                    (0, o.jsx)(c.Heading, {
                                        className: (0, r.$)(g().title, g().important),
                                        variant: 'h3',
                                        size: 'xs',
                                        children: n || (0, o.jsx)(a.A, { id: 'page-error.page-does-not-exist' }),
                                    }),
                                    (0, o.jsx)(c.Caption, {
                                        className: (0, r.$)(g().text, g().important),
                                        variant: 'span',
                                        type: 'text',
                                        size: 'l',
                                        weight: 'normal',
                                        children: s || (0, o.jsx)(a.A, { id: 'page-error.page-does-not-exist-description' }),
                                    }),
                                    (0, o.jsx)(i.$, {
                                        onClick: b,
                                        className: g().button,
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
        72824: (e, t, n) => {
            'use strict';
            n.r(t), n.d(t, { default: () => a });
            var o = n(54486),
                r = n(61910),
                s = n(48249);
            let a = () => (0, o.jsx)(r.Suspense, { fallback: (0, o.jsx)(s.k_, {}), children: (0, o.jsx)(s.h4, {}) });
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
                f = n(80585),
                g = n(63708),
                _ = n.n(g);
            let h = (0, s.PA)((e) => {
                let { className: t, withBackwardControl: n = !0 } = e,
                    { formatMessage: s } = (0, i.A)(),
                    g = s({ id: 'error-messages.something-went-wrong' });
                (0, m.CgZ)(g);
                let { sendRefreshEvent: h } = (0, m.cYT)(),
                    p = (0, a.useCallback)(() => {
                        h(), (window.location.href = m.Zyd.main.href);
                    }, [h]),
                    { contentRef: x } = (0, m.gKY)();
                return (0, o.jsxs)('div', {
                    className: (0, r.$)(_().root, t),
                    children: [
                        n &&
                            (0, o.jsx)(f.Lh, {
                                withBackwardFallback: '/',
                                className: (0, r.$)(_().navigation, { [_().navigation_desktop]: !x }),
                                withForwardControl: !1,
                            }),
                        (0, o.jsxs)('div', {
                            className: (0, r.$)(_().content, { [_().content_shrink]: !n }),
                            children: [
                                (0, o.jsx)(d.Icon, { className: _().icon, variant: 'attention', size: 'xxl' }),
                                (0, o.jsx)(u.Heading, { className: (0, r.$)(_().title, _().important), variant: 'h3', size: 'xs', children: g }),
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
            () => e((e.s = 8101)),
        ),
            (_N_E = e.O());
    },
]);
