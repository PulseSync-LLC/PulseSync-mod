(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2626, 4361],
    {
        572: (e, t, i) => {
            'use strict';
            (i.r(t), i.d(t, { default: () => eI }));
            var s = i(25839),
                l = i(84059),
                n = i(27954),
                r = i(44806),
                o = i(88204),
                a = i(74631),
                d = i(61493),
                c = i(71035),
                h = i(13833),
                u = i(4254),
                m = i(32113),
                f = i(64715),
                b = i(89257),
                g = i(1407),
                v = i(20258),
                p = i(10322),
                _ = i(59858),
                C = i(21784),
                S = i(89192),
                k = i(30716);
            let x = new Set(Object.values(i(97762).p)),
                E = (e) => x.has(e);
            var I = i(99401),
                y = i(26076),
                w = i(15270),
                M = i(35295),
                T = i.n(M);
            let O = (0, o.PA)((e) => {
                let { skeleton: t } = e,
                    { landing: i, user: l } = (0, n.g)(),
                    r = (0, C.W)(),
                    { contentScrollRef: o, setContentScrollRef: x } = (0, S.g)();
                ((0, a.useEffect)(() => () => i.reset(), [i]), (0, k.J)(i.isResolved));
                let M = (0, c.c)(() => {
                    if (i.isLoaded) return i.getSkeleton({ id: i.id || t, showWizard: l.settings.showWizard }, { preloadBlocksCount: 2 });
                });
                if ((i.isNeededToLoad && (0, a.use)(i.getSkeleton({ id: t, showWizard: l.settings.showWizard }, { preloadBlocksCount: 2 })), i.isRejected))
                    return (0, s.jsx)(f.SomethingWentWrong, {});
                let O = !E(i.id) && r.canBack;
                return (0, s.jsx)(p.n, {
                    pageId: v._Q.LANDING,
                    children: (0, s.jsxs)(_.l, {
                        skeleton: t,
                        children: [
                            (0, s.jsx)(g.h, {
                                scrollElement: o,
                                headerThreshold: 134,
                                children: (0, s.jsxs)(h.N, {
                                    className: T().root,
                                    containerClassName: T().content,
                                    ref: x,
                                    'data-test-id': d.Xk.landing.LANDING_PAGE,
                                    children: [
                                        (0, s.jsxs)('div', {
                                            className: T().header,
                                            children: [
                                                O && (0, s.jsx)(w.L, { withForwardControl: !1, withBackwardControl: O }),
                                                (0, s.jsx)(u.DZ, {
                                                    variant: 'h1',
                                                    weight: 'bold',
                                                    size: 'xl',
                                                    className: T().title,
                                                    'data-test-id': d.Xk.landing.LANDING_PAGE_HEADER,
                                                    children: i.title,
                                                }),
                                            ],
                                        }),
                                        (0, s.jsx)('div', {
                                            className: T().landing,
                                            children: (0, s.jsx)(m.E, {
                                                landing: i,
                                                errorComponent: (0, s.jsx)(f.SomethingWentWrong, { className: T().error, withBackwardControl: !1 }),
                                            }),
                                        }),
                                        (0, s.jsx)(y.A, { children: (0, s.jsx)(I.w, { className: T().footer }) }),
                                    ],
                                }),
                            }),
                            (0, s.jsx)(b.p, { onFinishSuccess: M }),
                        ],
                    }),
                });
            });
            var j = i(2209),
                A = i(39985),
                N = i(91886),
                L = i(95858),
                z = i(39058),
                R = i(5867),
                P = i(82298),
                B = i(49656),
                D = i(42853),
                V = i(61777),
                W = i(57138),
                F = i(51083),
                G = i(93647),
                H = i.n(G);
            let K = (0, o.PA)((e) => {
                    let { block: t, ref: i, className: l, containerClassName: o, ...d } = e,
                        {
                            isLoading: c,
                            isLoaded: h,
                            isRejected: u,
                            isShimmerVisible: m,
                            isShimmerActive: f,
                            id: b,
                            type: g,
                            meta: v,
                            data: p,
                            hasSentAnalyticsOnLoaded: _,
                            setHasSentAnalyticsOnLoaded: C,
                            setOutdated: S,
                            setIsNeededToLoad: k,
                        } = t;
                    if ((0, A.Q)(t)) return null;
                    let x = F.D[t.type],
                        E = (0, V.f)(),
                        { settings: I, experiments: y } = (0, n.g)(),
                        w = !y.checkExperiment(r.z.WebNextVirtualSkeleton, 'on') && I.browserInfo && !I.browserInfo.isSafari;
                    (0, a.useEffect)(() => {
                        !_ && h && (E(), C(!0));
                    }, [_, h, E, C]);
                    let M = (0, B.L)(() => {
                        var e, t;
                        return null != (t = null == i || null == (e = i.current) ? void 0 : e.clientHeight) ? t : 0;
                    });
                    return (0, s.jsx)(
                        x,
                        {
                            setIsNeededToLoad: k,
                            setOutdated: S,
                            isLoaded: h,
                            isLoading: c,
                            isShimmerVisible: m,
                            isShimmerActive: f,
                            isRejected: u,
                            tracksContainerClassName: H().tracksContainer,
                            containerClassName: (0, P.$)(H().container, H().important, o),
                            className: (0, P.$)({ [H().container_withContentVisibility]: w && M }, l),
                            headerClassName: H().headerContainer,
                            meta: v,
                            data: p,
                            type: g,
                            ref: i,
                            headingVariant: 'h2',
                            'data-intersection-property-id': t.id,
                            'data-test-id': t.type,
                            ...d,
                        },
                        b,
                    );
                }),
                U = (0, o.PA)((e) => {
                    let { ...t } = e;
                    return (0, s.jsx)(W.F, {
                        blockId: t.block.id,
                        blockType: t.block.type,
                        blockIdForFrom: ''.concat(D.h.DISCOVERY_BLOCK, '-').concat(t.block.id),
                        blockPosX: 1,
                        blockPosY: t.blockIndex + 1,
                        objectsCount: t.block.objectsCount,
                        children: (0, s.jsx)(K, { ...t }),
                    });
                });
            var $ = i(36545);
            let Y = (0, o.PA)((e) => {
                    let { block: t, ref: i, onLoad: l, ...n } = e;
                    if (
                        ((0, a.useEffect)(() => {
                            null == l || l();
                        }, [t.isVisible, l]),
                        !(0, A.Q)(t) || !t.isVisible)
                    )
                        return null;
                    let r = $.Y[t.type];
                    return (0, s.jsx)(r, { data: t.data, ref: i, 'data-intersection-property-id': t.id, ...n });
                }),
                Z = (0, o.PA)((e) => {
                    let { ...t } = e;
                    return (0, s.jsx)(W.F, {
                        blockId: t.block.id,
                        blockType: t.block.type,
                        blockIdForFrom: ''.concat(D.h.DISCOVERY_BLOCK, '-').concat(t.block.id),
                        blockPosX: 1,
                        blockPosY: t.blockIndex + 1,
                        objectsCount: t.block.objectsCount,
                        children: (0, s.jsx)(Y, { ...t }),
                    });
                }),
                J = (0, o.PA)((e) => ((0, A.Q)(e.block) ? (0, s.jsx)(Z, { ...e }) : (0, s.jsx)(U, { ...e })));
            var q = i(10603),
                Q = i(36484),
                X = i(62562),
                ee = i(36159),
                et = i(27625),
                ei = i(79396),
                es = i(9931),
                el = i(8826),
                en = i.n(el);
            let er = (0, o.PA)((e) => {
                var t, i, l;
                let {
                        skeleton: r,
                        landing: o,
                        tabsState: h,
                        tabElementId: u,
                        headerClassName: m,
                        headerVariant: f,
                        stickyHeaderClassName: b,
                        staticHeaderClassName: g,
                        stickyHeaderTabIndex: v,
                        tabWithHeadingTitle: p,
                        tabWithCovers: _,
                        tabWithSubtitle: C,
                    } = e,
                    { tabs: k } = o,
                    { isScrolling: x } = (0, a.useContext)(et.B),
                    { contentScrollRef: E } = (0, S.g)(),
                    {
                        settings: { isMobile: I },
                    } = (0, n.g)(),
                    y = (0, X.N)().get(Q.ni),
                    w = null == r || null == (t = r.root) ? void 0 : t.getTabsBlock(),
                    M = (0, a.useRef)(null);
                (0, a.useEffect)(() => {
                    w && y.loadNodes([w.data.id]);
                }, [y, w]);
                let T = (0, c.c)((e) => {
                    var t;
                    (I ? window.scrollTo(0, 0) : E && (E.scrollTop = 0), null == (t = h.onTabChange) || t.call(h, e));
                });
                return (0, s.jsx)(q.Y, {
                    compositeHeaderRef: M,
                    className: (0, P.$)(en().header, m),
                    variant: f,
                    stickyClassName: b,
                    staticClassName: g,
                    stickyChild: (0, s.jsx)(es.wI, {
                        isShimmerVisible: k.isLoading || o.isLoading,
                        className: en().stickyTabs,
                        shimmer: (0, s.jsx)(es.zr, {}),
                        elementId: u,
                        'data-test-id': d.e8.landing.MAIN_TABS,
                        value: h.value,
                        onTabChange: T,
                        children:
                            null == (i = k.data)
                                ? void 0
                                : i.flatMap((e, t) => {
                                      let { meta: i, blocks: l } = e;
                                      return l.length
                                          ? [
                                                (0, s.jsx)(
                                                    ei.o,
                                                    {
                                                        className: en().tab,
                                                        value: t,
                                                        'aria-label': i.title,
                                                        title: i.title,
                                                        'aria-hidden': !x && f !== q.V.STICKY,
                                                        tabIndex: null != v ? v : x ? 0 : -1,
                                                    },
                                                    i.id,
                                                ),
                                            ]
                                          : [];
                                  }),
                    }),
                    children: (0, s.jsx)(es.wI, {
                        className: (0, P.$)(en().tabCarousel, en().important),
                        elementId: u,
                        'data-test-id': d.e8.landing.MAIN_TABS,
                        ...h,
                        children:
                            null == (l = k.data)
                                ? void 0
                                : l.flatMap((e, t) => {
                                      let { meta: i, data: l, blocks: n } = e;
                                      return n.length
                                          ? [
                                                (0, s.jsx)(
                                                    ei.o,
                                                    {
                                                        className: en().tab,
                                                        value: t,
                                                        'aria-label': i.title,
                                                        title: i.title,
                                                        subtitle: null == l ? void 0 : l.subtitle,
                                                        covers: null == l ? void 0 : l.covers,
                                                        'aria-hidden': x,
                                                        tabIndex: x ? -1 : 0,
                                                        withCovers: _,
                                                        withSubtitle: C,
                                                        withHeading: p,
                                                        isShimmerVisible: k.loadingState === ee.G.PENDING,
                                                    },
                                                    i.id,
                                                ),
                                            ]
                                          : [];
                                  }),
                    }),
                });
            });
            var eo = i(31463),
                ea = i.n(eo),
                ed = i(91149),
                ec = i(92942),
                eh = i(1466);
            let eu = (e, t) => {
                    let i = null == e ? void 0 : e.getNodeById(t),
                        { notify: l, dismiss: n } = (0, ec.l)(),
                        r = (0, a.useRef)(void 0),
                        o = (0, c.c)(() => {
                            (null == i || i.reloadErrorBlocks(), n({ notificationId: r.current }), (r.current = void 0));
                        });
                    (0, a.useEffect)(() => {
                        if (!i) return;
                        let e = i.hasErrorBlocks.onChange(() => {
                            i.hasErrorBlocks.value && !r.current && (r.current = l((0, s.jsx)(eh.L, { reloadBlocks: o }), { containerId: ed.u.ERROR, autoClose: !1 }));
                        });
                        return () => {
                            (e(), n());
                        };
                    }, [i, l, n, o]);
                },
                em = (0, o.PA)((e) => {
                    var t;
                    let { skeleton: i, landingSdkModel: l, tab: n, tabIndex: r } = e,
                        o = (0, a.useMemo)(() => n.blocks.map(() => (0, a.createRef)()), [n.blocks]);
                    return (
                        eu(i, n.meta.id),
                        (0, s.jsx)(L.j, {
                            children: (0, s.jsx)(z.h, {
                                tabId: n.meta.id,
                                tabPos: r + 1,
                                isTabSelectedByDefault: (null == (t = l.meta) ? void 0 : t.selectedTabIndex) === r,
                                children: (0, s.jsx)('div', {
                                    className: ea().root,
                                    children: n.blocks.map((e, t) => (0, s.jsx)(J, { landingSdkModel: l, block: e, blockIndex: t, ref: o[t] }, e.id)),
                                }),
                            }),
                        })
                    );
                });
            var ef = i(68934),
                eb = i(52312),
                eg = i(6969),
                ev = i(80504),
                ep = i(57986),
                e_ = i.n(ep);
            let eC = (0, o.PA)((e) => {
                    let { virtualItem: t, resizeObserver: i, style: l, ...n } = e,
                        r = (0, a.useRef)(null),
                        o = (0, a.useRef)(null);
                    return (
                        (0, a.useEffect)(() => {
                            let e = o.current;
                            if (e && i) return (i.observe(e), () => i.unobserve(e));
                        }, [i]),
                        (0, s.jsx)('div', { 'data-index': t.index, className: e_().root, ref: o, style: l, children: (0, s.jsx)(J, { ...n, ref: r }) })
                    );
                }),
                eS = (0, o.PA)((e) => {
                    var t, i;
                    let { skeleton: r, landingSdkModel: o, tab: d, tabIndex: h } = e,
                        u = (0, l.useSearchParams)(),
                        {
                            settings: { isMobile: m },
                        } = (0, n.g)(),
                        { contentScrollRef: f } = (0, S.g)(),
                        [b, g] = (0, ef.d)(),
                        v = (0, a.useRef)(!0),
                        { blockIndexesToShow: p, mapSdkBlockToBlockModel: _ } = ((e, t) => {
                            var i;
                            let s = null == e ? void 0 : e.getNodeById(t),
                                [l, n] = (0, a.useState)(null != (i = null == s ? void 0 : s.blocksIndexesToShow.value) ? i : []);
                            return (
                                (0, a.useEffect)(() => {
                                    let e =
                                        null == s
                                            ? void 0
                                            : s.blocksIndexesToShow.onChange(() => {
                                                  var e;
                                                  n(null != (e = null == s ? void 0 : s.blocksIndexesToShow.value) ? e : []);
                                              });
                                    return () => (null == e ? void 0 : e());
                                }, [null == s ? void 0 : s.blocksIndexesToShow]),
                                {
                                    blockIndexesToShow: l,
                                    mapSdkBlockToBlockModel: (0, a.useCallback)(
                                        (e, t, i) => {
                                            let l,
                                                n = t[e];
                                            if (void 0 === n) return;
                                            let r = null == s ? void 0 : s.children[n],
                                                o = i.find((e, t) => (null == r ? void 0 : r.data.id) === e.id && ((l = t), !0));
                                            if (o && void 0 !== l) return { blockModel: o, blockModelIndex: l };
                                        },
                                        [null == s ? void 0 : s.children],
                                    ),
                                }
                            );
                        })(r, d.meta.id);
                    eu(r, d.meta.id);
                    let C = m ? 16 : 24;
                    ((e) => {
                        let { listContainer: t, contentScrollElement: i, isWindowScroll: s, tabId: l, gap: n } = e,
                            r = (0, X.N)().get(Q.ni);
                        (0, a.useEffect)(() => {
                            if (!t) return;
                            let e = s ? window : i;
                            if (e) return r.observeList({ container: t, scrollElement: e, tabId: l, sizes: ev.X, gap: n, overscan: 3 });
                        }, [i, n, s, r, t, l]);
                    })({ listContainer: b, contentScrollElement: f, isWindowScroll: m, tabId: d.meta.id, gap: C });
                    let k = (0, c.c)((e) => {
                            let t = p[e];
                            if (void 0 === t) return 300;
                            let i = d.blocks[t];
                            return (null == i ? void 0 : i.isVisible) ? ev.X[i.type] : 0;
                        }),
                        { virtualizer: x, resizeObserver: E } = (0, eb.r)({ count: null != (i = p.length) ? i : 0, gap: C, getEstimateSize: k, containerRef: b });
                    (0, a.useEffect)(() => {
                        var e;
                        if (!v.current) return;
                        let t = u.get(eg.K.BLOCK),
                            i = d.blocks.findIndex((e) => e.id === t);
                        if (!p.includes(i)) return;
                        let s = null == (e = x.getOffsetForIndex(i, 'center')) ? void 0 : e[0];
                        (x.scrollToIndex(i, { align: 'center', behavior: 'auto' }), x.scrollOffset && s && 100 > Math.abs(x.scrollOffset - s) && (v.current = !1));
                    }, [p, u, d.blocks, x]);
                    let I = x.getTotalSize(),
                        y = x.getVirtualItems();
                    return (0, s.jsx)(L.j, {
                        children: (0, s.jsx)(z.h, {
                            tabId: d.meta.id,
                            tabPos: h + 1,
                            isTabSelectedByDefault: (null == (t = o.meta) ? void 0 : t.selectedTabIndex) === h,
                            children: (0, s.jsx)('div', {
                                className: ea().root,
                                style: { height: ''.concat(I, 'px') },
                                ref: g,
                                children: y.map((e) => {
                                    let t = _(e.index, p, d.blocks);
                                    return t
                                        ? (0, s.jsx)(
                                              eC,
                                              {
                                                  virtualItem: e,
                                                  resizeObserver: E,
                                                  landingSdkModel: o,
                                                  block: t.blockModel,
                                                  blockIndex: Number(t.blockModelIndex),
                                                  isScrolling: x.isScrolling,
                                                  style: { transform: 'translate3d(0, '.concat(e.start - x.options.scrollMargin, 'px, 0)') },
                                              },
                                              e.key,
                                          )
                                        : null;
                                }),
                            }),
                        }),
                    });
                }),
                ek = (0, o.PA)((e) => {
                    var t;
                    let {
                            skeleton: i,
                            landingSdkModel: l,
                            upperBlocks: o,
                            headerConcealerComponent: d,
                            tabsState: c,
                            containerClassName: h,
                            containerStyle: u,
                            headerClassName: m,
                            tabWithHeadingTitle: f,
                            tabWithCovers: b,
                            tabWithSubtitle: g,
                            stickyHeaderClassName: v,
                            staticHeaderClassName: p,
                            stickyHeaderTabIndex: _,
                            headerVariant: C = q.V.COMPOSITE,
                        } = e,
                        { tabs: S } = l,
                        k = (0, a.useId)(),
                        { experiments: x } = (0, n.g)(),
                        E = x.checkExperiment(r.z.WebNextVirtualSkeleton, 'on') ? eS : em;
                    return (0, s.jsxs)(s.Fragment, {
                        children: [
                            o,
                            d,
                            (0, s.jsx)(er, {
                                skeleton: i,
                                landing: l,
                                tabsState: c,
                                tabElementId: k,
                                headerClassName: m,
                                headerVariant: C,
                                stickyHeaderClassName: v,
                                staticHeaderClassName: p,
                                stickyHeaderTabIndex: _,
                                tabWithHeadingTitle: f,
                                tabWithCovers: b,
                                tabWithSubtitle: g,
                            }),
                            (0, s.jsx)('div', {
                                className: h,
                                style: u,
                                children:
                                    null == (t = S.data)
                                        ? void 0
                                        : t.map((e, t) =>
                                              e.blocks.length
                                                  ? (0, s.jsx)(
                                                        R.Kp,
                                                        {
                                                            className: ea().tabPanel,
                                                            name: t,
                                                            value: c.value,
                                                            elementId: k,
                                                            children: (0, s.jsx)(E, { skeleton: i, landingSdkModel: l, tab: e, tabIndex: t }),
                                                        },
                                                        e.meta.id,
                                                    )
                                                  : null,
                                          ),
                            }),
                        ],
                    });
                }),
                ex = (0, o.PA)((e) => {
                    var t, i, l, o, d, c;
                    let {
                            skeleton: h,
                            landingSdkModel: u,
                            headerConcealerComponent: m,
                            errorComponent: f,
                            containerClassName: b,
                            headerClassName: g,
                            containerStyle: v,
                            tabWithHeadingTitle: p,
                            tabWithCovers: _,
                            tabWithSubtitle: C,
                            staticHeaderClassName: S,
                            stickyHeaderClassName: k,
                            stickyHeaderTabIndex: x,
                            headerVariant: E,
                        } = e,
                        { experiments: I } = (0, n.g)(),
                        y = I.checkExperiment(r.z.WebNextVirtualSkeleton, 'on') ? eS : em,
                        w = ((e) => {
                            var t, i, s;
                            let l = null != (i = null == e || null == (t = e.root) ? void 0 : t.getTabsBlock()) ? i : null,
                                { value: n, onTabChange: r } = (0, R.zb)(null != (s = null == l ? void 0 : l.tabIndex.value) ? s : 0);
                            (0, a.useEffect)(() => {
                                if (!l) return;
                                let e = l.tabIndex.onChange(() => {
                                    null == r || r(l.tabIndex.value);
                                });
                                return () => {
                                    e();
                                };
                            }, [l, r]);
                            let o = (0, a.useCallback)(
                                (e) => {
                                    null == l || l.changeSelectedTab(e);
                                },
                                [l],
                            );
                            return l ? { value: n, onTabChange: o } : { value: 0 };
                        })(h),
                        M = null != (c = null == (t = u.tabs.data) ? void 0 : t.findIndex((e) => e.blocks.length > 0)) ? c : -1,
                        T = (null == (l = u.tabs.data) || null == (i = l[w.value]) ? void 0 : i.blocks.length) ? w.value : M;
                    (0, a.useEffect)(() => {
                        if (T >= 0 && T !== w.value) {
                            var e;
                            null == (e = w.onTabChange) || e.call(w, T);
                        }
                    }, [T, w]);
                    let O = (0, a.useCallback)(
                            (e) => {
                                var t;
                                null == (t = w.onTabChange) || t.call(w, e);
                            },
                            [w],
                        ),
                        j = !!(u.tabs.data && u.tabs.data.filter((e) => e.blocks.length > 0).length > 1),
                        A = null == (o = u.tabs.data) ? void 0 : o[M],
                        P = (0, a.useMemo)(() => {
                            var e, t;
                            return null != (t = null == (e = u.upperBlocks) ? void 0 : e.map(() => (0, a.createRef)())) ? t : [];
                        }, [u.upperBlocks]),
                        B = (0, N.BL)(P, { freezeOnceVisible: !0 }),
                        D = (0, a.useMemo)(() => {
                            var e;
                            if (null == (e = u.upperBlocks) ? void 0 : e.length)
                                return (0, s.jsx)(z.h, {
                                    tabId: '',
                                    tabPos: -1,
                                    isTabSelectedByDefault: !1,
                                    children: (0, s.jsx)('div', {
                                        className: ea().upperBlocks,
                                        children: u.upperBlocks.map((e, t) => {
                                            let { isIntersecting: i } = B[e.id] || {};
                                            return (0, s.jsx)(J, { landingSdkModel: u, block: e, blockIndex: t, isIntersecting: i, ref: P[t] }, e.id);
                                        }),
                                    }),
                                });
                        }, [null == (d = u.upperBlocks) ? void 0 : d.length, u, B, P]);
                    return j
                        ? (0, s.jsx)(ek, {
                              skeleton: h,
                              landingSdkModel: u,
                              upperBlocks: D,
                              headerConcealerComponent: m,
                              tabsState: { value: T, onTabChange: O },
                              containerClassName: b,
                              containerStyle: v,
                              headerClassName: g,
                              tabWithHeadingTitle: p,
                              tabWithCovers: _,
                              tabWithSubtitle: C,
                              staticHeaderClassName: S,
                              stickyHeaderClassName: k,
                              stickyHeaderTabIndex: x,
                              headerVariant: E,
                          })
                        : A
                          ? (0, s.jsxs)('div', { className: b, style: v, children: [D, m, (0, s.jsx)(y, { skeleton: h, landingSdkModel: u, tab: A, tabIndex: M })] })
                          : D
                            ? (0, s.jsx)(L.j, { children: (0, s.jsxs)('div', { className: b, style: v, children: [D, m] }) })
                            : u.isLoadedAndEmpty || (u.isLoaded && M < 0)
                              ? (0, s.jsx)('div', { className: b, style: v, children: f })
                              : null;
                });
            (0, o.PA)((e) => {
                let { skeleton: t } = e,
                    { landingSdkModel: i, user: l } = (0, n.g)(),
                    r = (0, C.W)(),
                    { contentScrollRef: o, setContentScrollRef: c } = (0, S.g)(),
                    m = (0, X.N)().get(Q.ni);
                if (((0, a.useEffect)(() => () => i.reset(), [i]), (0, k.J)(i.isResolved), i.isNeededToInit)) {
                    let e = { type: j.$b.LANDING_PAGE, id: t, showWizard: l.settings.showWizard };
                    i.skeletonMeta ? i.createSkeleton({ skeletonData: e }) : (0, a.use)(i.loadAndCreateSkeleton({ skeletonData: e, preloadBlocksCount: 2 }));
                }
                if (
                    (((e) => {
                        let { landingSdkModel: t } = (0, n.g)();
                        (0, a.useEffect)(() => {
                            var i, s, l;
                            let n = [];
                            if (!e) return;
                            let r = (i) => {
                                if ((0, A.Q)(i)) {
                                    var s;
                                    null == (s = i.data) || s.blocks.forEach(r);
                                    return;
                                }
                                let l = e.getNodeById(i.id);
                                l &&
                                    n.push(
                                        l.state.loadingStatus.onChange(() => {
                                            t.handleSdkBlockUpdate(i, l, l.state.loadingStatus.value);
                                        }),
                                    );
                            };
                            for (let e of (null == (i = t.upperBlocks) || i.forEach(r), null != (l = t.tabs.data) ? l : [])) e.blocks.forEach(r);
                            let o = null == (s = e.root) ? void 0 : s.getTabsBlock();
                            if (o) {
                                let e = o.state.loadingStatus.onChange(() => {
                                    t.handleSdkTabsBlockUpdate(o, o.state.loadingStatus.value);
                                });
                                n.push(e);
                            }
                            return () => {
                                n.forEach((e) => e());
                            };
                        }, [e, t, t.tabs.data, t.upperBlocks]);
                    })(m.skeleton),
                    i.isRejected)
                )
                    return (0, s.jsx)(f.SomethingWentWrong, {});
                let b = !E(i.id) && r.canBack;
                return (0, s.jsx)(p.n, {
                    pageId: v._Q.LANDING,
                    children: (0, s.jsx)(_.l, {
                        skeleton: t,
                        children: (0, s.jsx)(g.h, {
                            scrollElement: o,
                            headerThreshold: 134,
                            children: (0, s.jsxs)(h.N, {
                                className: T().root,
                                containerClassName: T().content,
                                ref: c,
                                'data-test-id': d.Xk.landing.LANDING_PAGE,
                                children: [
                                    (0, s.jsxs)('div', {
                                        className: T().header,
                                        children: [
                                            b && (0, s.jsx)(w.L, { withForwardControl: !1, withBackwardControl: b }),
                                            (0, s.jsx)(u.DZ, {
                                                variant: 'h1',
                                                weight: 'bold',
                                                size: 'xl',
                                                className: T().title,
                                                'data-test-id': d.Xk.landing.LANDING_PAGE_HEADER,
                                                children: i.title,
                                            }),
                                        ],
                                    }),
                                    (0, s.jsx)('div', {
                                        className: T().landing,
                                        children: (0, s.jsx)(ex, {
                                            skeleton: m.skeleton,
                                            landingSdkModel: i,
                                            errorComponent: (0, s.jsx)(f.SomethingWentWrong, { className: T().error, withBackwardControl: !1 }),
                                        }),
                                    }),
                                    (0, s.jsx)(y.A, { children: (0, s.jsx)(I.w, { className: T().footer }) }),
                                ],
                            }),
                        }),
                    }),
                });
            });
            let eE = (e) => {
                    let { skeleton: t } = e,
                        { experiments: i } = (0, n.g)();
                    return (i.checkExperiment(r.z.WebNextLandingSdk, 'on'), (0, s.jsx)(O, { skeleton: t }));
                },
                eI = () => {
                    let e = (0, l.useSearchParams)(),
                        t = e.get('skeleton');
                    return (t || (0, l.notFound)(), (0, s.jsx)(eE, { skeleton: t }, e.toString()));
                };
        },
        2273: (e, t, i) => {
            Promise.resolve().then(i.bind(i, 572));
        },
        6968: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => g });
            var s = i(25839),
                l = i(82298),
                n = i(28631),
                r = i(74631);
            let o = (e) => {
                    let { style: t, forwardRef: i, context: l, ...n } = e,
                        r = (null == l ? void 0 : l.listAriaLabel) || void 0,
                        o = (null == l ? void 0 : l.listRole) || 'region';
                    return (0, s.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: o, 'aria-label': r, style: { ...t }, ref: i, ...n });
                },
                a = (0, r.forwardRef)((e, t) => (0, s.jsx)(o, { forwardRef: t, ...e }));
            var d = i(45300),
                c = i.n(d);
            let h = (e) => {
                    let { style: t, forwardRef: i, withFooter: n, withHeader: r, withForceScroll: o, ...a } = e;
                    return (0, s.jsx)('div', {
                        className: (0, l.$)(c().scroller, { [c().scroller_withFooter]: n, [c().scroller_withHeader]: r, [c().scroller_withForceScroll]: o }),
                        style: { ...t },
                        ref: i,
                        ...a,
                        tabIndex: -1,
                    });
                },
                u = (0, r.forwardRef)((e, t) => (0, s.jsx)(h, { forwardRef: t, ...e }));
            var m = i(10508),
                f = i(63257);
            let b = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: i,
                            onRangeHandler: l,
                            debounceDurationInMs: n = 100,
                            totalCount: o = 0,
                            shouldTriggerRangeChangedOn: a = [],
                            endReached: d,
                            virtuosoRef: c,
                            ...h
                        } = e,
                        [u, b] = (0, r.useState)(null),
                        g = (0, r.useMemo)(
                            () =>
                                (0, m.A)((e) => {
                                    if ((null == l || l(e), a.length > 0 && b(e), t && i)) {
                                        let s = Math.floor(e.endIndex / t) + 1,
                                            l = Math.floor(e.startIndex / t);
                                        for (let e = l; e < s; e++) i(e);
                                    }
                                }, n),
                            [n, l, t, i, a],
                        );
                    (0, r.useEffect)(() => {
                        a.length > 0 && u && g(u);
                    }, a);
                    let v = (0, r.useMemo)(() => {
                        if (d)
                            return (0, m.A)((e) => {
                                d(e);
                            }, n);
                    }, [d, n]);
                    return (0, s.jsx)(f.sN, { ref: c, rangeChanged: g, totalCount: o, endReached: v, ...h });
                },
                g = (e) => {
                    let {
                            className: t,
                            customComponents: i,
                            onGetDataByPage: o,
                            onGetDataByRange: d,
                            itemClassName: h,
                            itemContentCallback: m,
                            listClassName: f,
                            overscan: g = 700,
                            pageSize: v = 20,
                            totalCount: p,
                            totalRequests: _,
                            debounceDurationInMs: C,
                            initialItemCount: S,
                            minInitialItemCount: k = 20,
                            handleRef: x,
                            alwaysShowScrollbar: E = !1,
                            testId: I,
                            isMobileLayout: y = !1,
                            shouldTriggerRangeChangedOn: w,
                            ...M
                        } = e,
                        [T, O] = (0, r.useState)(!1),
                        j = (0, r.useMemo)(
                            () =>
                                (0, n.A)((e) => {
                                    O(e);
                                }, 100),
                            [],
                        ),
                        A = (0, r.useMemo)(() => {
                            var e, t;
                            return y
                                ? {
                                      Scroller: u,
                                      List: null != (e = null == i ? void 0 : i.List) ? e : a,
                                      Item: null == i ? void 0 : i.Item,
                                      ScrollSeekPlaceholder: null == i ? void 0 : i.ScrollSeekPlaceholder,
                                  }
                                : {
                                      Scroller: u,
                                      List: null != (t = null == i ? void 0 : i.List) ? t : a,
                                      Item: null == i ? void 0 : i.Item,
                                      Header: null == i ? void 0 : i.Header,
                                      Footer: null == i ? void 0 : i.Footer,
                                      ScrollSeekPlaceholder: null == i ? void 0 : i.ScrollSeekPlaceholder,
                                  };
                        }, [i, _, y]),
                        N = S ? Math.min(S, k) : void 0;
                    return (0, s.jsxs)('div', {
                        className: (0, l.$)(c().root, { [c().root_scrolling]: T || E, [c().root_notScrolling]: !T && !E }, t),
                        'data-test-id': I,
                        children: [
                            y && (null == i ? void 0 : i.Header) && i.Header(),
                            (0, s.jsx)(b, {
                                overscan: g,
                                components: A,
                                listClassName: f,
                                itemClassName: h,
                                isScrolling: j,
                                itemContent: m,
                                scrollerRef: x,
                                totalCount: p,
                                pageSize: v,
                                onPageHandler: o,
                                onRangeHandler: d,
                                debounceDurationInMs: C,
                                initialItemCount: N,
                                shouldTriggerRangeChangedOn: w,
                                ...M,
                            }),
                            y && (null == i ? void 0 : i.Footer) && i.Footer(),
                        ],
                    });
                };
        },
        8826: (e) => {
            e.exports = {
                tab: 'HeaderTabs_tab__qmO6o',
                tabCarousel: 'HeaderTabs_tabCarousel__0JoCN',
                important: 'HeaderTabs_important__eRbLm',
                header: 'HeaderTabs_header__P_LJZ',
                stickyTabs: 'HeaderTabs_stickyTabs__R5qFO',
            };
        },
        13624: (e, t, i) => {
            'use strict';
            i.d(t, { default: () => l.a });
            var s = i(68545),
                l = i.n(s);
        },
        22984: (e) => {
            e.exports = {
                content: 'WizardModal_content__mLcxg',
                modalHeader: 'WizardModal_modalHeader__BbNjx',
                root: 'WizardModal_root__mrF2y',
                root_withCustomControls: 'WizardModal_root_withCustomControls__t7Kjv',
                modalContent: 'WizardModal_modalContent__OifZs',
                wrapper: 'WizardModal_wrapper__2_8ft',
                title: 'WizardModal_title__fPGJr',
                text: 'WizardModal_text__ntEON',
                button: 'WizardModal_button__e8bCS',
                mainContainer: 'WizardModal_mainContainer__fbjpt',
                carousel: 'WizardModal_carousel__uVcYS',
                scrollContainer: 'WizardModal_scrollContainer__tDrP6',
                important: 'WizardModal_important__7uymQ',
                tabCarousel: 'WizardModal_tabCarousel__AclIV',
                tabShimmer: 'WizardModal_tabShimmer__36Qc7',
                tabTitle: 'WizardModal_tabTitle__7ZAaF',
                filter: 'WizardModal_filter__o2wpn',
                filter_selected: 'WizardModal_filter_selected__qdlMf',
                item: 'WizardModal_item__wUHVg',
            };
        },
        31463: (e) => {
            e.exports = { root: 'Skeleton_root__TJpzw', upperBlocks: 'Skeleton_upperBlocks__fbW1Q', tabPanel: 'Skeleton_tabPanel__o1Zhn' };
        },
        35295: (e) => {
            e.exports = {
                content: 'LandingPage_content__ovHlJ',
                root: 'LandingPage_root__B2lPp',
                header: 'LandingPage_header__TiraG',
                title: 'LandingPage_title__gsIx4',
                footer: 'LandingPage_footer__K9y8K',
                error: 'LandingPage_error__mEsH2',
            };
        },
        42220: (e, t, i) => {
            'use strict';
            ((t.__ = function (e, t) {
                let i = (0, s.makeMetaParams)(1),
                    l = { ...t, pageId: 'artist_concerts_screen', pageType: 'listing', _meta: i };
                e.trackEvent('ArtistConcerts.Opened', l);
            }),
                (t.pe = function (e, t) {
                    let i = (0, s.makeMetaParams)(1),
                        l = { ...t, pageId: 'artist_concerts_screen', pageType: 'listing', _meta: i };
                    e.trackEvent('ArtistConcerts.Closed', l);
                }),
                (t.Z4 = function (e, t) {
                    let { objectPos: i = 1 } = t,
                        l = (0, s.makeMetaParams)(1),
                        n = { ...t, objectPos: i, pageId: 'artist_concerts_screen', pageType: 'listing', objectType: 'concert', _meta: l };
                    e.trackEvent('ArtistConcerts.Concert.Showed', n);
                }),
                (t.mh = function (e, t) {
                    let { objectPos: i = 1 } = t,
                        l = (0, s.makeMetaParams)(1),
                        n = {
                            ...t,
                            objectPos: i,
                            pageId: 'artist_concerts_screen',
                            pageType: 'listing',
                            objectType: 'concert',
                            from: 'artist_concerts_screen',
                            _meta: l,
                        };
                    e.trackEvent('ArtistConcerts.Concert.Navigated', n);
                }));
            let s = i(96195);
        },
        45300: (e) => {
            e.exports = {
                root: 'VirtualScroll_root__pCptn',
                root_scrolling: 'VirtualScroll_root_scrolling__dsQ6K',
                root_notScrolling: 'VirtualScroll_root_notScrolling__x4qdd',
                scroller_withFooter: 'VirtualScroll_scroller_withFooter__ntDaU',
                scroller_withHeader: 'VirtualScroll_scroller_withHeader__9yzCK',
                scroller_withForceScroll: 'VirtualScroll_scroller_withForceScroll__w7q1L',
            };
        },
        46450: (e, t) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                !(function (e, t) {
                    for (var i in t) Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
                })(t, {
                    bindSnapshot: function () {
                        return r;
                    },
                    createAsyncLocalStorage: function () {
                        return n;
                    },
                    createSnapshot: function () {
                        return o;
                    },
                }));
            let i = Object.defineProperty(Error('Invariant: AsyncLocalStorage accessed in runtime where it is not available'), '__NEXT_ERROR_CODE', {
                value: 'E504',
                enumerable: !1,
                configurable: !0,
            });
            class s {
                disable() {
                    throw i;
                }
                getStore() {}
                run() {
                    throw i;
                }
                exit() {
                    throw i;
                }
                enterWith() {
                    throw i;
                }
                static bind(e) {
                    return e;
                }
            }
            let l = 'undefined' != typeof globalThis && globalThis.AsyncLocalStorage;
            function n() {
                return l ? new l() : new s();
            }
            function r(e) {
                return l ? l.bind(e) : s.bind(e);
            }
            function o() {
                return l
                    ? l.snapshot()
                    : function (e, ...t) {
                          return e(...t);
                      };
            }
        },
        49971: (e, t, i) => {
            'use strict';
            function s(e) {
                let { moduleIds: t } = e;
                return null;
            }
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'PreloadChunks', {
                    enumerable: !0,
                    get: function () {
                        return s;
                    },
                }),
                i(25839),
                i(71910),
                i(65780),
                i(4865));
        },
        57249: (e, t, i) => {
            'use strict';
            e.exports = i.p + 'static/media/dotlottie-player.98f80c6ff3eca5ba.wasm';
        },
        57986: (e) => {
            e.exports = { root: 'VirtualizedSkeletonBlock_root__oFWuv' };
        },
        59858: (e, t, i) => {
            'use strict';
            i.d(t, { l: () => r });
            var s = i(25839),
                l = i(74631),
                n = i(97904);
            let r = (e) => {
                let { skeleton: t, children: i } = e,
                    r = (0, l.useMemo)(() => ({ skeleton: t }), [t]);
                return (0, s.jsx)(n.D.Provider, { value: r, children: i });
            };
        },
        65343: (e, t, i) => {
            'use strict';
            i.d(t, { l: () => s });
            var s = (function (e) {
                return (
                    (e.TOGGLE_PLAY = 'TOGGLE_PLAY'),
                    (e.TOGGLE_MUTE = 'TOGGLE_MUTE'),
                    (e.INCREASE_VOLUME = 'INCREASE_VOLUME'),
                    (e.DECREASE_VOLUME = 'DECREASE_VOLUME'),
                    (e.LIKE = 'LIKE'),
                    (e.DISLIKE = 'DISLIKE'),
                    (e.MOVE_FORWARD = 'MOVE_FORWARD'),
                    (e.MOVE_BACKWARD = 'MOVE_BACKWARD'),
                    (e.SLIDE_FORWARD = 'SLIDE_FORWARD'),
                    (e.SLIDE_BACKWARD = 'SLIDE_BACKWARD'),
                    (e.TOGGLE_REPEAT = 'TOGGLE_REPEAT'),
                    (e.TOGGLE_SHUFFLE = 'TOGGLE_SHUFFLE'),
                    (e.TOGGLE_FULLSCREEN_PLAYER = 'TOGGLE_FULLSCREEN_PLAYER'),
                    (e.CLOSE = 'CLOSE'),
                    e
                );
            })({});
        },
        65780: (e, t, i) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'workAsyncStorage', {
                    enumerable: !0,
                    get: function () {
                        return s.workAsyncStorageInstance;
                    },
                }));
            let s = i(90720);
        },
        68545: (e, t, i) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'default', {
                    enumerable: !0,
                    get: function () {
                        return l;
                    },
                }));
            let s = i(20567)._(i(89729));
            function l(e, t) {
                var i;
                let l = {};
                'function' == typeof e && (l.loader = e);
                let n = { ...l, ...t };
                return (0, s.default)({ ...n, modules: null == (i = n.loadableGenerated) ? void 0 : i.modules });
            }
            ('function' == typeof t.default || ('object' == typeof t.default && null !== t.default)) &&
                void 0 === t.default.__esModule &&
                (Object.defineProperty(t.default, '__esModule', { value: !0 }), Object.assign(t.default, t), (e.exports = t.default));
        },
        69394: (e, t, i) => {
            'use strict';
            var s;
            ((t.HB = function (e, t) {
                let { objectsCount: i = 1, objectPosX: s = 1, objectPosY: n = 1 } = t,
                    r = (0, l.makeMetaParams)(2),
                    o = {
                        ...t,
                        objectsCount: i,
                        objectPosX: s,
                        objectPosY: n,
                        pageId: 'artist_screen',
                        pageType: 'object',
                        entityType: 'carousel',
                        entityId: 'concerts',
                        objectsType: 'concert',
                        _meta: r,
                    };
                e.trackEvent('Artist.Concerts.Showed', o);
            }),
                (t.U6 = function (e, t) {
                    let { objectsCount: i = 1, objectPosX: s = 1, objectPosY: n = 1 } = t,
                        r = (0, l.makeMetaParams)(2),
                        o = {
                            ...t,
                            objectsCount: i,
                            objectPosX: s,
                            objectPosY: n,
                            pageId: 'artist_screen',
                            pageType: 'object',
                            entityType: 'carousel',
                            entityId: 'concerts',
                            objectsType: 'concert',
                            from: 'artist_screen',
                            _meta: r,
                        };
                    e.trackEvent('Artist.Concerts.Navigated', o);
                }));
            let l = i(96195);
            (s || (s = {})).ConcertScreen = 'concert_screen';
        },
        72233: (e, t, i) => {
            'use strict';
            i.d(t, { u2: () => d, rl: () => s, mz: () => a, yq: () => h, zE: () => l });
            var s,
                l,
                n = i(58025),
                r = i(36432);
            (!(function (e) {
                ((e.IDLE = 'IDLE'), (e.PENDING = 'PENDING'), (e.RESOLVE = 'RESOLVE'), (e.REJECT = 'REJECT'));
            })(s || (s = {})),
                (function (e) {
                    ((e.HIDDEN = 'HIDDEN'), (e.VISIBLE = 'VISIBLE'));
                })(l || (l = {})));
            class o {
                attachSkeleton(e) {
                    (this.disconnect(), (this.skeleton = e));
                }
                observe(e) {
                    let { element: t, id: i } = e;
                    t && this.detector && (this.targetsToIdMap.set(t, i), this.detector.observe(t));
                }
                unobserve(e) {
                    let { element: t } = e;
                    t && this.detector && (this.targetsToIdMap.delete(t), this.detector.unobserve(t));
                }
                observeList(e) {
                    return this.virtualizedMetadataLoader
                        ? (this.stopObservingList(),
                          (this.listItems = e.items),
                          (this.potentialBlocksIndexes = this.calculatePotentialBlocksIndexes()),
                          this.virtualizedMetadataLoader.observeList({ ...e, items: this.getPotentialItems(), onVisibilityChange: this.onListVisibilityChange }),
                          this.subscribeToBlocksLoadingStatus(),
                          () => this.stopObservingList())
                        : () => void 0;
                }
                disconnect() {
                    var e;
                    (this.stopObservingList(), null == (e = this.detector) || e.disconnect(), this.targetsToIdMap.clear(), (this.skeleton = void 0));
                }
                calculatePotentialBlocksIndexes() {
                    let e = [];
                    return (
                        this.listItems.forEach((t, i) => {
                            var l;
                            let n = null == (l = this.skeleton) ? void 0 : l.getNodeById(t.id);
                            n && n.state.loadingStatus.value !== s.REJECT && e.push(i);
                        }),
                        e
                    );
                }
                getPotentialItems() {
                    let e = [];
                    return (
                        this.potentialBlocksIndexes.forEach((t) => {
                            let i = this.listItems[t];
                            i && e.push(i);
                        }),
                        e
                    );
                }
                subscribeToBlocksLoadingStatus() {
                    this.listItems.forEach((e) => {
                        var t;
                        let i = null == (t = this.skeleton) ? void 0 : t.getNodeById(e.id);
                        if (!i) return;
                        let l = i.state.loadingStatus.value === s.REJECT,
                            n = i.state.loadingStatus.onChange(() => {
                                let e = i.state.loadingStatus.value === s.REJECT;
                                e !== l && ((l = e), this.updatePotentialBlocksIndexes());
                            });
                        this.blocksLoadingStatusUnsubs.push(n);
                    });
                }
                stopObservingList() {
                    var e;
                    (this.blocksLoadingStatusUnsubs.forEach((e) => e()),
                        (this.blocksLoadingStatusUnsubs = []),
                        null == (e = this.virtualizedMetadataLoader) || e.unobserveList(),
                        (this.listItems = []),
                        (this.potentialBlocksIndexes = []));
                }
                constructor({ visibilityConfig: e }) {
                    if (
                        ((0, n._)(this, 'detector', void 0),
                        (0, n._)(this, 'virtualizedMetadataLoader', void 0),
                        (0, n._)(this, 'skeleton', void 0),
                        (0, n._)(this, 'targetsToIdMap', new Map()),
                        (0, n._)(this, 'listItems', []),
                        (0, n._)(this, 'potentialBlocksIndexes', []),
                        (0, n._)(this, 'blocksLoadingStatusUnsubs', []),
                        (0, n._)(this, 'updatePotentialBlocksIndexes', () => {
                            var e;
                            let t = this.potentialBlocksIndexes,
                                i = this.calculatePotentialBlocksIndexes();
                            ((this.potentialBlocksIndexes = i),
                                (t.length === i.length && t.every((e, t) => e === i[t])) ||
                                    null == (e = this.virtualizedMetadataLoader) ||
                                    e.updateItems(this.getPotentialItems()));
                        }),
                        (0, n._)(this, 'setNodeVisibility', (e, t) => {
                            var i;
                            let s = null == (i = this.skeleton) ? void 0 : i.getNodeById(e);
                            if (!s) return;
                            let n = t ? l.VISIBLE : l.HIDDEN;
                            s.state.visibilityStatus.value !== n && (s.state.visibilityStatus.value = n);
                        }),
                        (0, n._)(this, 'onListVisibilityChange', (e) => {
                            e.forEach((e) => {
                                this.setNodeVisibility(e.id, e.isVisible);
                            });
                        }),
                        (0, n._)(this, 'onElementsVisibilityChange', (e) => {
                            for (let t of e) {
                                let e = this.targetsToIdMap.get(t.target);
                                e && this.setNodeVisibility(e, t.isIntersecting);
                            }
                        }),
                        'listVisibility' === e.type)
                    ) {
                        this.virtualizedMetadataLoader = e.virtualizedMetadataLoader;
                        return;
                    }
                    this.detector = e.detectorFactory.create({ onVisibilityChange: this.onElementsVisibilityChange });
                }
            }
            class a {
                async loadAndCreateSkeleton(e) {
                    let { data: t, preloadedBlocksMeta: i } = e,
                        s = this.skeletonFactory.create({ data: t });
                    (this.visibilityController && this.visibilityController.attachSkeleton(s),
                        await s.loadSkeletonMeta(),
                        s.createSkeletonTree(i),
                        s.onNodesVisibilityChange(),
                        (this.skeleton = s));
                }
                createSkeleton(e) {
                    let { data: t, preloadedBlocksMeta: i } = e,
                        s = this.skeletonFactory.create({ data: t });
                    (this.visibilityController && this.visibilityController.attachSkeleton(s), s.createSkeletonTree(i), s.onNodesVisibilityChange(), (this.skeleton = s));
                }
                async loadNodes(e) {
                    if (!this.skeleton) return;
                    let t = [];
                    for (let i of e) {
                        let e = this.skeleton.getNodeById(i);
                        e && t.push(e.load());
                    }
                    await Promise.allSettled(t);
                }
                createVisibilityController(e) {
                    this.hasVisibilityController ||
                        ((this.visibilityController = new o(e)),
                        this.skeleton && this.visibilityController.attachSkeleton(this.skeleton),
                        (this.hasVisibilityController = !0));
                }
                observe(e) {
                    let { target: t, loadIfNoElement: i = !1 } = e,
                        { element: s, id: l } = t;
                    if (!s && i) {
                        var n;
                        let e = null == (n = this.skeleton) ? void 0 : n.getNodeById(l);
                        null == e || e.load();
                        return;
                    }
                    if (!this.visibilityController) throw new r.t('VisibilityController has not been created');
                    this.visibilityController.observe(t);
                }
                unobserve(e) {
                    if (!this.visibilityController) throw new r.t('VisibilityController has not been created');
                    this.visibilityController.unobserve(e);
                }
                observeList(e) {
                    if (!this.visibilityController) throw new r.t('VisibilityController has not been created');
                    return this.visibilityController.observeList(e);
                }
                destroy() {
                    var e, t;
                    (null == (e = this.visibilityController) || e.disconnect(), null == (t = this.skeleton) || t.destroy(), (this.skeleton = void 0));
                }
                constructor({ skeletonFactory: e }) {
                    ((0, n._)(this, 'skeletonFactory', void 0),
                        (0, n._)(this, 'visibilityController', void 0),
                        (0, n._)(this, 'hasVisibilityController', !1),
                        (0, n._)(this, 'skeleton', void 0),
                        (this.skeletonFactory = e));
                }
            }
            class d {
                observe(e, t) {
                    let i = new ResizeObserver(() => t());
                    return (i.observe(e, { box: 'border-box' }), () => i.disconnect());
                }
            }
            let c = (e) => 'window' in e && e.window === e;
            class h {
                observeList(e) {
                    let { container: t, scrollElement: i, items: s, gap: l, overscan: n = 2, onVisibilityChange: r } = e;
                    if (
                        (this.unobserveList(),
                        (this.container = t),
                        (this.scrollElement = i),
                        (this.items = s),
                        (this.gap = l),
                        (this.overscan = Number.isFinite(n) ? Math.max(0, n) : 2),
                        (this.onVisibilityChange = r),
                        (this.abortController = new AbortController()),
                        this.rebuildLayout(),
                        this.scrollElement.addEventListener('scroll', this.scheduleRefresh, { passive: !0, signal: this.abortController.signal }),
                        !c(i))
                    ) {
                        var o;
                        this.stopObservingResize = null == (o = this.resizeObserverAdapter) ? void 0 : o.observe(i, this.scheduleRefresh);
                    }
                    this.refresh();
                }
                updateItems(e) {
                    ((this.items = e), this.rebuildLayout(), this.refresh());
                }
                refresh() {
                    if ((this.cancelScheduledRefresh(), !this.container || !this.scrollElement || !this.onVisibilityChange)) return;
                    if (!this.container.isConnected || 0 === this.layout.totalSize) return void this.updateVisibility([]);
                    let e = this.container.getBoundingClientRect(),
                        t = c(this.scrollElement) ? { top: 0, bottom: this.scrollElement.innerHeight } : this.scrollElement.getBoundingClientRect(),
                        i = Math.max(0, t.top - e.top),
                        s = Math.min(this.layout.totalSize, t.bottom - e.top);
                    if (s <= i) return void this.updateVisibility([]);
                    let l = ((e) => {
                        let { items: t, viewportStart: i, viewportEnd: s, overscan: l } = e;
                        if (0 === t.length) return [];
                        let n = ((e, t) => {
                                let i = 0,
                                    s = e.length - 1,
                                    l = -1;
                                for (; i <= s;) {
                                    let n = Math.floor((i + s) / 2),
                                        r = e[n];
                                    if (!r) break;
                                    r.end >= t ? ((l = n), (s = n - 1)) : (i = n + 1);
                                }
                                return l;
                            })(t, i),
                            r = ((e, t) => {
                                let i = 0,
                                    s = e.length - 1,
                                    l = -1;
                                for (; i <= s;) {
                                    let n = Math.floor((i + s) / 2),
                                        r = e[n];
                                    if (!r) break;
                                    r.start <= t ? ((l = n), (i = n + 1)) : (s = n - 1);
                                }
                                return l;
                            })(t, s);
                        if (-1 === n || -1 === r || n > r) return [];
                        let o = Math.max(0, n - l),
                            a = Math.min(t.length - 1, r + l);
                        return t.slice(o, a + 1);
                    })({ items: this.layout.items, viewportStart: i, viewportEnd: s, overscan: this.overscan });
                    this.updateVisibility(l);
                }
                unobserveList() {
                    var e, t;
                    (null == (e = this.stopObservingResize) || e.call(this),
                        (this.stopObservingResize = void 0),
                        null == (t = this.abortController) || t.abort(),
                        (this.abortController = void 0),
                        this.cancelScheduledRefresh(),
                        this.updateVisibility([]),
                        (this.animationFrameId = void 0),
                        (this.container = void 0),
                        (this.scrollElement = void 0),
                        (this.items = []),
                        (this.layout = { items: [], totalSize: 0 }),
                        (this.gap = 0),
                        (this.overscan = 2),
                        (this.onVisibilityChange = void 0));
                }
                updateVisibility(e) {
                    let t = new Set(e.map((e) => e.id)),
                        i = [];
                    if (
                        (t.forEach((e) => {
                            this.visibleItemIds.has(e) || i.push({ id: e, isVisible: !0 });
                        }),
                        this.visibleItemIds.forEach((e) => {
                            t.has(e) || i.push({ id: e, isVisible: !1 });
                        }),
                        (this.visibleItemIds = t),
                        i.length > 0)
                    ) {
                        var s;
                        null == (s = this.onVisibilityChange) || s.call(this, i);
                    }
                }
                constructor({ resizeObserverAdapter: e } = {}) {
                    ((0, n._)(this, 'resizeObserverAdapter', void 0),
                        (0, n._)(this, 'container', void 0),
                        (0, n._)(this, 'scrollElement', void 0),
                        (0, n._)(this, 'gap', 0),
                        (0, n._)(this, 'overscan', 2),
                        (0, n._)(this, 'onVisibilityChange', void 0),
                        (0, n._)(this, 'abortController', void 0),
                        (0, n._)(this, 'items', []),
                        (0, n._)(this, 'layout', { items: [], totalSize: 0 }),
                        (0, n._)(this, 'visibleItemIds', new Set()),
                        (0, n._)(this, 'animationFrameId', void 0),
                        (0, n._)(this, 'stopObservingResize', void 0),
                        (0, n._)(this, 'rebuildLayout', () => {
                            this.layout = ((e) => {
                                let { items: t, gap: i } = e,
                                    s = [],
                                    l = 0,
                                    n = !1;
                                return (
                                    t.forEach((e, t) => {
                                        if (e.estimatedSize <= 0) return;
                                        let r = e.estimatedSize + i;
                                        (s.push({ id: e.id, index: t, start: l, end: l + r, size: r }), (l += r), (n = !0));
                                    }),
                                    { items: s, totalSize: n ? Math.max(0, l - i) : 0 }
                                );
                            })({ items: this.items, gap: this.gap });
                        }),
                        (0, n._)(this, 'cancelScheduledRefresh', () => {
                            var e;
                            if (void 0 === this.animationFrameId) return;
                            let t = null == (e = this.container) ? void 0 : e.ownerDocument.defaultView;
                            (null == t || t.cancelAnimationFrame(this.animationFrameId), (this.animationFrameId = void 0));
                        }),
                        (0, n._)(this, 'scheduleRefresh', () => {
                            if (!this.container || void 0 !== this.animationFrameId) return;
                            let e = this.container.ownerDocument.defaultView;
                            if (!e) return void this.refresh();
                            this.animationFrameId = e.requestAnimationFrame(() => {
                                ((this.animationFrameId = void 0), this.refresh());
                            });
                        }),
                        (this.resizeObserverAdapter = e));
                }
            }
        },
        82572: (e, t, i) => {
            'use strict';
            ((t.TV = function (e, t) {
                let { skeletonId: i = '', mainObjectType: n = l.DomainObjectType.NonApplicable, mainObjectId: r = '' } = t,
                    o = (0, s.makeMetaParams)(1),
                    a = { ...t, skeletonId: i, mainObjectType: n, mainObjectId: r, _meta: o };
                e.trackEvent('Tab.Opened', a);
            }),
                (t.hc = function (e, t) {
                    let { skeletonId: i = '', mainObjectType: n = l.DomainObjectType.NonApplicable, mainObjectId: r = '' } = t,
                        o = (0, s.makeMetaParams)(1),
                        a = { ...t, skeletonId: i, mainObjectType: n, mainObjectId: r, _meta: o };
                    e.trackEvent('Tab.Loaded', a);
                }));
            let s = i(96195),
                l = i(44031);
        },
        84361: (e, t, i) => {
            'use strict';
            i.d(t, { Te: () => x, XW: () => E });
            var s = i(74631),
                l = i(71910);
            function n(e, t, i) {
                let s,
                    l = i.initialDeps ?? [];
                function n() {
                    var n, r, o, a;
                    let d, c;
                    i.key && (null == (n = i.debug) ? void 0 : n.call(i)) && (d = Date.now());
                    let h = e();
                    if (!(h.length !== l.length || h.some((e, t) => l[t] !== e))) return s;
                    if (
                        ((l = h),
                        i.key && (null == (r = i.debug) ? void 0 : r.call(i)) && (c = Date.now()),
                        (s = t(...h)),
                        i.key && (null == (o = i.debug) ? void 0 : o.call(i)))
                    ) {
                        let e = Math.round((Date.now() - d) * 100) / 100,
                            t = Math.round((Date.now() - c) * 100) / 100,
                            s = t / 16,
                            l = (e, t) => {
                                for (e = String(e); e.length < t;) e = ' ' + e;
                                return e;
                            };
                        console.info(
                            `%c⏱ ${l(t, 5)} /${l(e, 5)} ms`,
                            `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * s, 120))}deg 100% 31%);`,
                            null == i ? void 0 : i.key,
                        );
                    }
                    return (null == (a = null == i ? void 0 : i.onChange) || a.call(i, s), s);
                }
                return (
                    (n.updateDeps = (e) => {
                        l = e;
                    }),
                    n
                );
            }
            function r(e, t) {
                if (void 0 !== e) return e;
                throw Error(`Unexpected undefined${t ? `: ${t}` : ''}`);
            }
            let o = (e, t, i) => {
                    let s;
                    return function (...l) {
                        (e.clearTimeout(s), (s = e.setTimeout(() => t.apply(this, l), i)));
                    };
                },
                a = (e) => e,
                d = (e) => {
                    let t = Math.max(e.startIndex - e.overscan, 0),
                        i = Math.min(e.endIndex + e.overscan, e.count - 1),
                        s = [];
                    for (let e = t; e <= i; e++) s.push(e);
                    return s;
                },
                c = (e, t) => {
                    let i = e.scrollElement;
                    if (!i) return;
                    let s = e.targetWindow;
                    if (!s) return;
                    let l = (e) => {
                        let { width: i, height: s } = e;
                        t({ width: Math.round(i), height: Math.round(s) });
                    };
                    if ((l(i.getBoundingClientRect()), !s.ResizeObserver)) return () => {};
                    let n = new s.ResizeObserver((t) => {
                        let s = () => {
                            let e = t[0];
                            if (null == e ? void 0 : e.borderBoxSize) {
                                let t = e.borderBoxSize[0];
                                if (t) return void l({ width: t.inlineSize, height: t.blockSize });
                            }
                            l(i.getBoundingClientRect());
                        };
                        e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(s) : s();
                    });
                    return (
                        n.observe(i, { box: 'border-box' }),
                        () => {
                            n.unobserve(i);
                        }
                    );
                },
                h = { passive: !0 },
                u = (e, t) => {
                    let i = e.scrollElement;
                    if (!i) return;
                    let s = () => {
                        t({ width: i.innerWidth, height: i.innerHeight });
                    };
                    return (
                        s(),
                        i.addEventListener('resize', s, h),
                        () => {
                            i.removeEventListener('resize', s);
                        }
                    );
                },
                m = 'undefined' == typeof window || 'onscrollend' in window,
                f = (e, t) => {
                    let i = e.scrollElement;
                    if (!i) return;
                    let s = e.targetWindow;
                    if (!s) return;
                    let l = 0,
                        n =
                            e.options.useScrollendEvent && m
                                ? () => void 0
                                : o(
                                      s,
                                      () => {
                                          t(l, !1);
                                      },
                                      e.options.isScrollingResetDelay,
                                  ),
                        r = (s) => () => {
                            let { horizontal: r, isRtl: o } = e.options;
                            ((l = r ? i.scrollLeft * ((o && -1) || 1) : i.scrollTop), n(), t(l, s));
                        },
                        a = r(!0),
                        d = r(!1);
                    (d(), i.addEventListener('scroll', a, h));
                    let c = e.options.useScrollendEvent && m;
                    return (
                        c && i.addEventListener('scrollend', d, h),
                        () => {
                            (i.removeEventListener('scroll', a), c && i.removeEventListener('scrollend', d));
                        }
                    );
                },
                b = (e, t) => {
                    let i = e.scrollElement;
                    if (!i) return;
                    let s = e.targetWindow;
                    if (!s) return;
                    let l = 0,
                        n =
                            e.options.useScrollendEvent && m
                                ? () => void 0
                                : o(
                                      s,
                                      () => {
                                          t(l, !1);
                                      },
                                      e.options.isScrollingResetDelay,
                                  ),
                        r = (s) => () => {
                            ((l = i[e.options.horizontal ? 'scrollX' : 'scrollY']), n(), t(l, s));
                        },
                        a = r(!0),
                        d = r(!1);
                    (d(), i.addEventListener('scroll', a, h));
                    let c = e.options.useScrollendEvent && m;
                    return (
                        c && i.addEventListener('scrollend', d, h),
                        () => {
                            (i.removeEventListener('scroll', a), c && i.removeEventListener('scrollend', d));
                        }
                    );
                },
                g = (e, t, i) => {
                    if (null == t ? void 0 : t.borderBoxSize) {
                        let e = t.borderBoxSize[0];
                        if (e) return Math.round(e[i.options.horizontal ? 'inlineSize' : 'blockSize']);
                    }
                    return Math.round(e.getBoundingClientRect()[i.options.horizontal ? 'width' : 'height']);
                },
                v = (e, { adjustments: t = 0, behavior: i }, s) => {
                    var l, n;
                    null == (n = null == (l = s.scrollElement) ? void 0 : l.scrollTo) || n.call(l, { [s.options.horizontal ? 'left' : 'top']: e + t, behavior: i });
                },
                p = (e, { adjustments: t = 0, behavior: i }, s) => {
                    var l, n;
                    null == (n = null == (l = s.scrollElement) ? void 0 : l.scrollTo) || n.call(l, { [s.options.horizontal ? 'left' : 'top']: e + t, behavior: i });
                };
            class _ {
                constructor(e) {
                    ((this.unsubs = []),
                        (this.scrollElement = null),
                        (this.targetWindow = null),
                        (this.isScrolling = !1),
                        (this.scrollToIndexTimeoutId = null),
                        (this.measurementsCache = []),
                        (this.itemSizeCache = new Map()),
                        (this.pendingMeasuredCacheIndexes = []),
                        (this.scrollRect = null),
                        (this.scrollOffset = null),
                        (this.scrollDirection = null),
                        (this.scrollAdjustments = 0),
                        (this.elementsCache = new Map()),
                        (this.observer = (() => {
                            let e = null,
                                t = () =>
                                    e ||
                                    (this.targetWindow && this.targetWindow.ResizeObserver
                                        ? (e = new this.targetWindow.ResizeObserver((e) => {
                                              e.forEach((e) => {
                                                  let t = () => {
                                                      this._measureElement(e.target, e);
                                                  };
                                                  this.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(t) : t();
                                              });
                                          }))
                                        : null);
                            return {
                                disconnect: () => {
                                    var i;
                                    (null == (i = t()) || i.disconnect(), (e = null));
                                },
                                observe: (e) => {
                                    var i;
                                    return null == (i = t()) ? void 0 : i.observe(e, { box: 'border-box' });
                                },
                                unobserve: (e) => {
                                    var i;
                                    return null == (i = t()) ? void 0 : i.unobserve(e);
                                },
                            };
                        })()),
                        (this.range = null),
                        (this.setOptions = (e) => {
                            (Object.entries(e).forEach(([t, i]) => {
                                void 0 === i && delete e[t];
                            }),
                                (this.options = {
                                    debug: !1,
                                    initialOffset: 0,
                                    overscan: 1,
                                    paddingStart: 0,
                                    paddingEnd: 0,
                                    scrollPaddingStart: 0,
                                    scrollPaddingEnd: 0,
                                    horizontal: !1,
                                    getItemKey: a,
                                    rangeExtractor: d,
                                    onChange: () => {},
                                    measureElement: g,
                                    initialRect: { width: 0, height: 0 },
                                    scrollMargin: 0,
                                    gap: 0,
                                    indexAttribute: 'data-index',
                                    initialMeasurementsCache: [],
                                    lanes: 1,
                                    isScrollingResetDelay: 150,
                                    enabled: !0,
                                    isRtl: !1,
                                    useScrollendEvent: !1,
                                    useAnimationFrameWithResizeObserver: !1,
                                    ...e,
                                }));
                        }),
                        (this.notify = (e) => {
                            var t, i;
                            null == (i = (t = this.options).onChange) || i.call(t, this, e);
                        }),
                        (this.maybeNotify = n(
                            () => (this.calculateRange(), [this.isScrolling, this.range ? this.range.startIndex : null, this.range ? this.range.endIndex : null]),
                            (e) => {
                                this.notify(e);
                            },
                            {
                                key: !1,
                                debug: () => this.options.debug,
                                initialDeps: [this.isScrolling, this.range ? this.range.startIndex : null, this.range ? this.range.endIndex : null],
                            },
                        )),
                        (this.cleanup = () => {
                            (this.unsubs.filter(Boolean).forEach((e) => e()),
                                (this.unsubs = []),
                                this.observer.disconnect(),
                                (this.scrollElement = null),
                                (this.targetWindow = null));
                        }),
                        (this._didMount = () => () => {
                            this.cleanup();
                        }),
                        (this._willUpdate = () => {
                            var e;
                            let t = this.options.enabled ? this.options.getScrollElement() : null;
                            if (this.scrollElement !== t) {
                                if ((this.cleanup(), !t)) return void this.maybeNotify();
                                ((this.scrollElement = t),
                                    this.scrollElement && 'ownerDocument' in this.scrollElement
                                        ? (this.targetWindow = this.scrollElement.ownerDocument.defaultView)
                                        : (this.targetWindow = (null == (e = this.scrollElement) ? void 0 : e.window) ?? null),
                                    this.elementsCache.forEach((e) => {
                                        this.observer.observe(e);
                                    }),
                                    this._scrollToOffset(this.getScrollOffset(), { adjustments: void 0, behavior: void 0 }),
                                    this.unsubs.push(
                                        this.options.observeElementRect(this, (e) => {
                                            ((this.scrollRect = e), this.maybeNotify());
                                        }),
                                    ),
                                    this.unsubs.push(
                                        this.options.observeElementOffset(this, (e, t) => {
                                            ((this.scrollAdjustments = 0),
                                                (this.scrollDirection = t ? (this.getScrollOffset() < e ? 'forward' : 'backward') : null),
                                                (this.scrollOffset = e),
                                                (this.isScrolling = t),
                                                this.maybeNotify());
                                        }),
                                    ));
                            }
                        }),
                        (this.getSize = () =>
                            this.options.enabled
                                ? ((this.scrollRect = this.scrollRect ?? this.options.initialRect), this.scrollRect[this.options.horizontal ? 'width' : 'height'])
                                : ((this.scrollRect = null), 0)),
                        (this.getScrollOffset = () =>
                            this.options.enabled
                                ? ((this.scrollOffset =
                                      this.scrollOffset ?? ('function' == typeof this.options.initialOffset ? this.options.initialOffset() : this.options.initialOffset)),
                                  this.scrollOffset)
                                : ((this.scrollOffset = null), 0)),
                        (this.getFurthestMeasurement = (e, t) => {
                            let i = new Map(),
                                s = new Map();
                            for (let l = t - 1; l >= 0; l--) {
                                let t = e[l];
                                if (i.has(t.lane)) continue;
                                let n = s.get(t.lane);
                                if ((null == n || t.end > n.end ? s.set(t.lane, t) : t.end < n.end && i.set(t.lane, !0), i.size === this.options.lanes)) break;
                            }
                            return s.size === this.options.lanes
                                ? Array.from(s.values()).sort((e, t) => (e.end === t.end ? e.index - t.index : e.end - t.end))[0]
                                : void 0;
                        }),
                        (this.getMeasurementOptions = n(
                            () => [this.options.count, this.options.paddingStart, this.options.scrollMargin, this.options.getItemKey, this.options.enabled],
                            (e, t, i, s, l) => ((this.pendingMeasuredCacheIndexes = []), { count: e, paddingStart: t, scrollMargin: i, getItemKey: s, enabled: l }),
                            { key: !1 },
                        )),
                        (this.getMeasurements = n(
                            () => [this.getMeasurementOptions(), this.itemSizeCache],
                            ({ count: e, paddingStart: t, scrollMargin: i, getItemKey: s, enabled: l }, n) => {
                                if (!l) return ((this.measurementsCache = []), this.itemSizeCache.clear(), []);
                                0 === this.measurementsCache.length &&
                                    ((this.measurementsCache = this.options.initialMeasurementsCache),
                                    this.measurementsCache.forEach((e) => {
                                        this.itemSizeCache.set(e.key, e.size);
                                    }));
                                let r = this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
                                this.pendingMeasuredCacheIndexes = [];
                                let o = this.measurementsCache.slice(0, r);
                                for (let l = r; l < e; l++) {
                                    let e = s(l),
                                        r = 1 === this.options.lanes ? o[l - 1] : this.getFurthestMeasurement(o, l),
                                        a = r ? r.end + this.options.gap : t + i,
                                        d = n.get(e),
                                        c = 'number' == typeof d ? d : this.options.estimateSize(l),
                                        h = a + c,
                                        u = r ? r.lane : l % this.options.lanes;
                                    o[l] = { index: l, start: a, size: c, end: h, key: e, lane: u };
                                }
                                return ((this.measurementsCache = o), o);
                            },
                            { key: !1, debug: () => this.options.debug },
                        )),
                        (this.calculateRange = n(
                            () => [this.getMeasurements(), this.getSize(), this.getScrollOffset(), this.options.lanes],
                            (e, t, i, s) =>
                                (this.range =
                                    e.length > 0 && t > 0
                                        ? (function ({ measurements: e, outerSize: t, scrollOffset: i, lanes: s }) {
                                              let l = e.length - 1,
                                                  n = C(0, l, (t) => e[t].start, i),
                                                  r = n;
                                              if (1 === s) for (; r < l && e[r].end < i + t;) r++;
                                              else if (s > 1) {
                                                  let o = Array(s).fill(0);
                                                  for (; r < l && o.some((e) => e < i + t);) {
                                                      let t = e[r];
                                                      ((o[t.lane] = t.end), r++);
                                                  }
                                                  let a = Array(s).fill(i + t);
                                                  for (; n > 0 && a.some((e) => e >= i);) {
                                                      let t = e[n];
                                                      ((a[t.lane] = t.start), n--);
                                                  }
                                                  ((n = Math.max(0, n - (n % s))), (r = Math.min(l, r + (s - 1 - (r % s)))));
                                              }
                                              return { startIndex: n, endIndex: r };
                                          })({ measurements: e, outerSize: t, scrollOffset: i, lanes: s })
                                        : null),
                            { key: !1, debug: () => this.options.debug },
                        )),
                        (this.getVirtualIndexes = n(
                            () => {
                                let e = null,
                                    t = null,
                                    i = this.calculateRange();
                                return (
                                    i && ((e = i.startIndex), (t = i.endIndex)),
                                    this.maybeNotify.updateDeps([this.isScrolling, e, t]),
                                    [this.options.rangeExtractor, this.options.overscan, this.options.count, e, t]
                                );
                            },
                            (e, t, i, s, l) => (null === s || null === l ? [] : e({ startIndex: s, endIndex: l, overscan: t, count: i })),
                            { key: !1, debug: () => this.options.debug },
                        )),
                        (this.indexFromElement = (e) => {
                            let t = this.options.indexAttribute,
                                i = e.getAttribute(t);
                            return i ? parseInt(i, 10) : (console.warn(`Missing attribute name '${t}={index}' on measured element.`), -1);
                        }),
                        (this._measureElement = (e, t) => {
                            let i = this.indexFromElement(e),
                                s = this.measurementsCache[i];
                            if (!s) return;
                            let l = s.key,
                                n = this.elementsCache.get(l);
                            (n !== e && (n && this.observer.unobserve(n), this.observer.observe(e), this.elementsCache.set(l, e)),
                                e.isConnected && this.resizeItem(i, this.options.measureElement(e, t, this)));
                        }),
                        (this.resizeItem = (e, t) => {
                            let i = this.measurementsCache[e];
                            if (!i) return;
                            let s = t - (this.itemSizeCache.get(i.key) ?? i.size);
                            0 !== s &&
                                ((void 0 !== this.shouldAdjustScrollPositionOnItemSizeChange
                                    ? this.shouldAdjustScrollPositionOnItemSizeChange(i, s, this)
                                    : i.start < this.getScrollOffset() + this.scrollAdjustments) &&
                                    this._scrollToOffset(this.getScrollOffset(), { adjustments: (this.scrollAdjustments += s), behavior: void 0 }),
                                this.pendingMeasuredCacheIndexes.push(i.index),
                                (this.itemSizeCache = new Map(this.itemSizeCache.set(i.key, t))),
                                this.notify(!1));
                        }),
                        (this.measureElement = (e) => {
                            if (!e)
                                return void this.elementsCache.forEach((e, t) => {
                                    e.isConnected || (this.observer.unobserve(e), this.elementsCache.delete(t));
                                });
                            this._measureElement(e, void 0);
                        }),
                        (this.getVirtualItems = n(
                            () => [this.getVirtualIndexes(), this.getMeasurements()],
                            (e, t) => {
                                let i = [];
                                for (let s = 0, l = e.length; s < l; s++) {
                                    let l = t[e[s]];
                                    i.push(l);
                                }
                                return i;
                            },
                            { key: !1, debug: () => this.options.debug },
                        )),
                        (this.getVirtualItemForOffset = (e) => {
                            let t = this.getMeasurements();
                            if (0 !== t.length) return r(t[C(0, t.length - 1, (e) => r(t[e]).start, e)]);
                        }),
                        (this.getOffsetForAlignment = (e, t, i = 0) => {
                            let s = this.getSize(),
                                l = this.getScrollOffset();
                            ('auto' === t && (t = e >= l + s ? 'end' : 'start'), 'center' === t ? (e += (i - s) / 2) : 'end' === t && (e -= s));
                            let n = this.options.horizontal ? 'scrollWidth' : 'scrollHeight';
                            return Math.max(
                                Math.min(
                                    (this.scrollElement
                                        ? 'document' in this.scrollElement
                                            ? this.scrollElement.document.documentElement[n]
                                            : this.scrollElement[n]
                                        : 0) - s,
                                    e,
                                ),
                                0,
                            );
                        }),
                        (this.getOffsetForIndex = (e, t = 'auto') => {
                            e = Math.max(0, Math.min(e, this.options.count - 1));
                            let i = this.measurementsCache[e];
                            if (!i) return;
                            let s = this.getSize(),
                                l = this.getScrollOffset();
                            if ('auto' === t)
                                if (i.end >= l + s - this.options.scrollPaddingEnd) t = 'end';
                                else {
                                    if (!(i.start <= l + this.options.scrollPaddingStart)) return [l, t];
                                    t = 'start';
                                }
                            let n = 'end' === t ? i.end + this.options.scrollPaddingEnd : i.start - this.options.scrollPaddingStart;
                            return [this.getOffsetForAlignment(n, t, i.size), t];
                        }),
                        (this.isDynamicMode = () => this.elementsCache.size > 0),
                        (this.cancelScrollToIndex = () => {
                            null !== this.scrollToIndexTimeoutId &&
                                this.targetWindow &&
                                (this.targetWindow.clearTimeout(this.scrollToIndexTimeoutId), (this.scrollToIndexTimeoutId = null));
                        }),
                        (this.scrollToOffset = (e, { align: t = 'start', behavior: i } = {}) => {
                            (this.cancelScrollToIndex(),
                                'smooth' === i && this.isDynamicMode() && console.warn('The `smooth` scroll behavior is not fully supported with dynamic size.'),
                                this._scrollToOffset(this.getOffsetForAlignment(e, t), { adjustments: void 0, behavior: i }));
                        }),
                        (this.scrollToIndex = (e, { align: t = 'auto', behavior: i } = {}) => {
                            ((e = Math.max(0, Math.min(e, this.options.count - 1))),
                                this.cancelScrollToIndex(),
                                'smooth' === i && this.isDynamicMode() && console.warn('The `smooth` scroll behavior is not fully supported with dynamic size.'));
                            let s = this.getOffsetForIndex(e, t);
                            if (!s) return;
                            let [l, n] = s;
                            (this._scrollToOffset(l, { adjustments: void 0, behavior: i }),
                                'smooth' !== i &&
                                    this.isDynamicMode() &&
                                    this.targetWindow &&
                                    (this.scrollToIndexTimeoutId = this.targetWindow.setTimeout(() => {
                                        if (((this.scrollToIndexTimeoutId = null), this.elementsCache.has(this.options.getItemKey(e)))) {
                                            let [t] = r(this.getOffsetForIndex(e, n));
                                            1 > Math.abs(t - this.getScrollOffset()) || this.scrollToIndex(e, { align: n, behavior: i });
                                        } else this.scrollToIndex(e, { align: n, behavior: i });
                                    })));
                        }),
                        (this.scrollBy = (e, { behavior: t } = {}) => {
                            (this.cancelScrollToIndex(),
                                'smooth' === t && this.isDynamicMode() && console.warn('The `smooth` scroll behavior is not fully supported with dynamic size.'),
                                this._scrollToOffset(this.getScrollOffset() + e, { adjustments: void 0, behavior: t }));
                        }),
                        (this.getTotalSize = () => {
                            var e;
                            let t,
                                i = this.getMeasurements();
                            if (0 === i.length) t = this.options.paddingStart;
                            else if (1 === this.options.lanes) t = (null == (e = i[i.length - 1]) ? void 0 : e.end) ?? 0;
                            else {
                                let e = Array(this.options.lanes).fill(null),
                                    s = i.length - 1;
                                for (; s > 0 && e.some((e) => null === e);) {
                                    let t = i[s];
                                    (null === e[t.lane] && (e[t.lane] = t.end), s--);
                                }
                                t = Math.max(...e.filter((e) => null !== e));
                            }
                            return Math.max(t - this.options.scrollMargin + this.options.paddingEnd, 0);
                        }),
                        (this._scrollToOffset = (e, { adjustments: t, behavior: i }) => {
                            this.options.scrollToFn(e, { behavior: i, adjustments: t }, this);
                        }),
                        (this.measure = () => {
                            ((this.itemSizeCache = new Map()), this.notify(!1));
                        }),
                        this.setOptions(e));
                }
            }
            let C = (e, t, i, s) => {
                    for (; e <= t;) {
                        let l = ((e + t) / 2) | 0,
                            n = i(l);
                        if (n < s) e = l + 1;
                        else {
                            if (!(n > s)) return l;
                            t = l - 1;
                        }
                    }
                    return e > 0 ? e - 1 : 0;
                },
                S = 'undefined' != typeof document ? s.useLayoutEffect : s.useEffect;
            function k(e) {
                let t = s.useReducer(() => ({}), {})[1],
                    i = {
                        ...e,
                        onChange: (i, s) => {
                            var n;
                            (s ? (0, l.flushSync)(t) : t(), null == (n = e.onChange) || n.call(e, i, s));
                        },
                    },
                    [n] = s.useState(() => new _(i));
                return (n.setOptions(i), S(() => n._didMount(), []), S(() => n._willUpdate()), n);
            }
            function x(e) {
                return k({ observeElementRect: c, observeElementOffset: f, scrollToFn: p, ...e });
            }
            function E(e) {
                return k({
                    getScrollElement: () => ('undefined' != typeof document ? window : null),
                    observeElementRect: u,
                    observeElementOffset: b,
                    scrollToFn: v,
                    initialOffset: () => ('undefined' != typeof document ? window.scrollY : 0),
                    ...e,
                });
            }
        },
        86432: (e) => {
            e.exports = {
                coverBlock: 'ArtistCard_coverBlock__YCSus',
                like: 'ArtistCard_like__jmlKc',
                root: 'ArtistCard_root__F4RfA',
                root_selected: 'ArtistCard_root_selected__9Djbq',
                cover: 'ArtistCard_cover__RSTvK',
                image: 'ArtistCard_image__Uab5w',
                name: 'ArtistCard_name__IF9yZ',
                icon: 'ArtistCard_icon__PjbJI',
            };
        },
        89209: (e, t, i) => {
            'use strict';
            i.d(t, { M: () => s });
            var s = (function (e) {
                return (
                    (e.MAIN = 'MAIN'),
                    (e.TRAILER = 'TRAILER'),
                    (e.VIDEO_PLAYER = 'VIDEO_PLAYER'),
                    (e.IMAGE_SLIDER = 'IMAGE_SLIDER'),
                    (e.PROMO_LANDING = 'PROMO_LANDING'),
                    e
                );
            })({});
        },
        89257: (e, t, i) => {
            'use strict';
            i.d(t, { p: () => F });
            var s = i(25839),
                l = i(82298),
                n = i(88204),
                r = i(74631),
                o = i(39004),
                a = i(8487),
                d = i(61493),
                c = i(68934),
                h = i(4071),
                u = i(35622),
                m = i(5867),
                f = i(4254),
                b = i(51859),
                g = i(91149),
                v = i(92942),
                p = i(65343),
                _ = i(89209),
                C = i(20790),
                S = i(27954),
                k = i(31488),
                x = i(36159),
                E = i(57549),
                I = i(69041),
                y = i(19412),
                w = i(79396),
                M = i(9931),
                T = i(6968),
                O = i(51246),
                j = i(66738),
                A = i(86869),
                N = i(52512),
                L = i(6323),
                z = i(27819),
                R = i(86432),
                P = i.n(R);
            let B = (0, n.PA)((e) => {
                let { className: t, artist: i } = e,
                    { ref: n, intersectionPropertyId: o } = (0, N.n)(),
                    {
                        wizard: { likeArtist: a, isArtistLiked: c },
                    } = (0, S.g)(),
                    { id: u, name: m, coverUri: b } = i,
                    g = (0, r.useCallback)(() => {
                        a(u);
                    }, [a, u]),
                    v = c(u),
                    p = (0, r.useMemo)(
                        () =>
                            (0, s.jsx)(A.t, {
                                className: P().cover,
                                radius: 'round',
                                'data-test-id': d.e8.wizard.ARTIST_CARD,
                                children: (0, s.jsxs)(h.$, {
                                    radius: 'round',
                                    className: P().coverBlock,
                                    variant: 'default',
                                    onClick: g,
                                    withRipple: !1,
                                    withHover: !1,
                                    'aria-pressed': v,
                                    'aria-label': m,
                                    'data-test-id': d.e8.wizard.ARTIST_CARD_BUTTON,
                                    children: [
                                        (0, s.jsx)(L.B, { className: P().image, src: b || z.A.src, fit: 'cover', alt: m, withAvatarReplace: !!b, 'aria-hidden': !0 }),
                                        (0, s.jsx)('div', {
                                            className: (0, l.$)(P().like),
                                            children: (0, s.jsx)(j.I, { variant: 'likedVariant', size: 's', className: P().icon }),
                                        }),
                                    ],
                                }),
                            }),
                        [v, b, m, g],
                    );
                return (0, s.jsx)(O.MN, {
                    ref: n,
                    className: (0, l.$)(P().root, { [P().root_selected]: v }, t),
                    textPosition: 'center',
                    title: (0, s.jsx)(f.HL, {
                        'aria-hidden': !0,
                        className: P().name,
                        variant: 'div',
                        type: 'entity',
                        size: 'l',
                        weight: 'medium',
                        lineClamp: 2,
                        'data-test-id': d.e8.wizard.ARTIST_CARD_NAME,
                        children: m,
                    }),
                    'data-intersection-property-id': o,
                    view: p,
                    'data-test-id': d.Kq.artist.ARTIST_ITEM,
                });
            });
            var D = i(22984),
                V = i.n(D);
            let W = { [b.u.Desktop]: { start: 40, end: 40 }, [b.u.Mobile]: { start: 40, end: 40 } },
                F = (0, n.PA)((e) => {
                    let { onFinishSuccess: t } = e,
                        { formatMessage: i } = (0, o.A)(),
                        {
                            wizard: n,
                            settings: { isMobile: b, isWindowsApplication: O, isLinuxApplication: j },
                            user: A,
                        } = (0, S.g)(),
                        { notify: N } = (0, v.l)(),
                        L = (0, C.z)(),
                        [z, R] = (0, c.d)(),
                        P = (0, m.zb)(0),
                        D = (0, r.useMemo)(
                            () => (e) => {
                                var t;
                                if (!P.onTabChange || e === P.value) return;
                                P.onTabChange(e);
                                let i = null == (t = n.genres[e]) ? void 0 : t.id;
                                (n.setFilter(i), null == z || z.scrollTo({ top: 0 }));
                            },
                            [n, P, z],
                        ),
                        F = (0, r.useMemo)(() => {
                            switch (n.selectedArtistsQuantity) {
                                case 0:
                                    return i({ id: 'wizard.button-tune' });
                                case 1:
                                    return i({ id: 'wizard.button-little-more' });
                                case 2:
                                    return i({ id: 'wizard.button-one-more' });
                                default:
                                    return i({ id: 'wizard.button-done' });
                            }
                        }, [n.selectedArtistsQuantity, i]),
                        G = (0, r.useMemo)(
                            () =>
                                (0, s.jsx)(M.wI, {
                                    className: V().tabCarousel,
                                    ...P,
                                    onTabChange: D,
                                    isShimmerVisible: n.loadingState === x.G.PENDING,
                                    shimmer: (0, s.jsx)(M.zr, { isActive: !0, className: V().tabCarousel, shimmerClassName: V().tabShimmer, count: b ? 2 : 3 }),
                                    children: n.genres.map((e, t) =>
                                        (0, s.jsx)(
                                            w.o,
                                            {
                                                className: (0, l.$)(V().filter, { [V().filter_selected]: t === P.value }),
                                                titleClassName: V().tabTitle,
                                                title: e.title,
                                                value: t,
                                            },
                                            t,
                                        ),
                                    ),
                                }),
                            [n.genres, P, D, n.loadingState, b],
                        ),
                        H = (0, r.useCallback)(() => {
                            n.loadArtists(60);
                        }, [n]);
                    (0, r.useEffect)(() => {
                        n.filter && H();
                    }, [n.filter, H]);
                    let K = (0, r.useCallback)(async () => {
                        (await n.loadGenres(), H());
                    }, [n, H]);
                    ((0, r.useEffect)(() => {
                        n.modal.isOpened && K();
                    }, [n, n.modal.isOpened, K]),
                        (0, r.useEffect)(() => {
                            n.loadingState === x.G.REJECT &&
                                (n.modal.close(), N((0, s.jsx)(E.h, { error: i({ id: 'error-messages.error-load-wizard' }) }), { containerId: g.u.ERROR }));
                        }, [n, n.loadGenres, n.loadingState, i, N]));
                    let U = (0, r.useMemo)(
                            () =>
                                (0, s.jsx)(f.DZ, {
                                    className: V().title,
                                    weight: 'bold',
                                    variant: 'h1',
                                    size: 'l',
                                    'data-test-id': d.e8.wizard.WIZARD_MODAL_TITLE,
                                    children: (0, s.jsx)(a.A, { id: 'wizard.modal-title' }),
                                }),
                            [],
                        ),
                        $ = (0, r.useCallback)(async () => {
                            (n.canFinish ? (await n.finish()) === k.F.OK && (await A.getSettings(), await (null == t ? void 0 : t())) : n.loadArtists(), n.modal.close());
                        }, [t, A, n]);
                    return (
                        (0, r.useEffect)(
                            () => (
                                null == L ||
                                    L.addShortcutsListener(_.M.MAIN, p.l.CLOSE, () => {
                                        n.modal.isOpened && $();
                                    }),
                                () => {
                                    null == L || L.removeShortcutsListener(_.M.MAIN, p.l.CLOSE);
                                }
                            ),
                            [$, n.modal.isOpened, L],
                        ),
                        (0, s.jsxs)(u.a, {
                            className: (0, l.$)(V().root, { [V().root_withCustomControls]: O || j }),
                            headerClassName: V().modalHeader,
                            contentClassName: V().modalContent,
                            open: n.modal.isOpened,
                            onOpenChange: n.modal.onOpenChange,
                            onClose: $,
                            size: 'fullscreen',
                            placement: 'center',
                            labelClose: i({ id: 'interface-actions.close' }),
                            closeButtonDataTestId: d.e8.wizard.WIZARD_MODAL_CLOSE_BUTTON,
                            'data-test-id': d.e8.wizard.WIZARD_MODAL,
                            header: b && U,
                            escapeKey: !1,
                            children: [
                                (0, s.jsxs)('div', {
                                    className: V().wrapper,
                                    children: [
                                        !b && U,
                                        (0, s.jsx)(f.HL, {
                                            className: V().text,
                                            variant: 'div',
                                            size: 'l',
                                            weight: 'normal',
                                            'data-test-id': d.e8.wizard.WIZARD_MODAL_TEXT,
                                            children: (0, s.jsx)(a.A, { id: 'wizard.modal-text' }),
                                        }),
                                        (0, s.jsx)(h.$, {
                                            className: V().button,
                                            size: b ? 'm' : 'l',
                                            iconPosition: 'right',
                                            radius: 'xxxl',
                                            color: 'primary',
                                            onClick: $,
                                            disabled: !n.canFinish,
                                            'data-test-id': d.e8.wizard.WIZARD_MODAL_BUTTON,
                                            children: (0, s.jsx)(f.HL, { variant: 'div', size: 'm', weight: 'medium', children: F }),
                                        }),
                                    ],
                                }),
                                (0, s.jsxs)('div', {
                                    className: V().mainContainer,
                                    children: [
                                        (0, s.jsx)(I.F, { className: V().carousel, carouselElement: G, scrollPadding: W }),
                                        (0, s.jsx)(T.$, {
                                            withFooter: !1,
                                            className: (0, l.$)(V().scrollContainer, V().important),
                                            itemContentCallback: (e) => {
                                                let t = n.artistsByGenre[e];
                                                if (!t) {
                                                    let e = i({ id: 'loading-messages.entity-is-loading' }, { entityName: i({ id: 'entity-names.artist' }) });
                                                    return (0, s.jsx)(y.V, { 'aria-label': e, round: !0, centered: !0 });
                                                }
                                                return (0, s.jsx)(B, { artist: t }, t.id);
                                            },
                                            data: n.artistsByGenre,
                                            endReached: H,
                                            listClassName: V().content,
                                            itemClassName: V().item,
                                            pageSize: 60,
                                            handleRef: R,
                                            'data-test-id': d.e8.wizard.WIZARD_MODAL_ARTISTS_GRID,
                                        }),
                                    ],
                                }),
                            ],
                        })
                    );
                });
        },
        89729: (e, t, i) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'default', {
                    enumerable: !0,
                    get: function () {
                        return a;
                    },
                }));
            let s = i(25839),
                l = i(74631),
                n = i(95102);
            function r(e) {
                return { default: e && 'default' in e ? e.default : e };
            }
            i(49971);
            let o = { loader: () => Promise.resolve(r(() => null)), loading: null, ssr: !0 },
                a = function (e) {
                    let t = { ...o, ...e },
                        i = (0, l.lazy)(() => t.loader().then(r)),
                        a = t.loading;
                    function d(e) {
                        let r = a ? (0, s.jsx)(a, { isLoading: !0, pastDelay: !0, error: null }) : null,
                            o = !t.ssr || !!t.loading,
                            d = o ? l.Suspense : l.Fragment,
                            c = t.ssr
                                ? (0, s.jsxs)(s.Fragment, { children: [null, (0, s.jsx)(i, { ...e })] })
                                : (0, s.jsx)(n.BailoutToCSR, { reason: 'next/dynamic', children: (0, s.jsx)(i, { ...e }) });
                        return (0, s.jsx)(d, { ...(o ? { fallback: r } : {}), children: c });
                    }
                    return ((d.displayName = 'LoadableComponent'), d);
                };
        },
        90720: (e, t, i) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'workAsyncStorageInstance', {
                    enumerable: !0,
                    get: function () {
                        return s;
                    },
                }));
            let s = (0, i(46450).createAsyncLocalStorage)();
        },
        93647: (e) => {
            e.exports = {
                container: 'SkeletonBlock_container__BE40w',
                important: 'SkeletonBlock_important__mf3Zo',
                container_withContentVisibility: 'SkeletonBlock_container_withContentVisibility__Iq2_D',
                headerContainer: 'SkeletonBlock_headerContainer__qVrPn',
                tracksContainer: 'SkeletonBlock_tracksContainer__BEMi0',
            };
        },
        95102: (e, t, i) => {
            'use strict';
            function s(e) {
                let { reason: t, children: i } = e;
                return i;
            }
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'BailoutToCSR', {
                    enumerable: !0,
                    get: function () {
                        return s;
                    },
                }),
                i(29834));
        },
    },
    (e) => {
        (e.O(
            0,
            [
                3349, 8451, 1583, 8561, 7055, 6287, 3112, 2e3, 5128, 740, 7339, 3472, 2121, 1632, 5743, 3084, 3021, 5058, 6170, 9468, 364, 2767, 590, 6706, 4771, 1311,
                5201, 8398, 260, 6702, 9004, 7511, 7839, 3595, 9286, 1251, 1817, 6215, 3257, 2038, 4163, 3246, 7848, 3482, 6680, 2247, 7856, 8836, 820, 4434, 8649, 862,
                6361, 5898, 1808, 8222, 5232, 4932, 5622, 3268, 2445, 5853, 4018, 2209, 4475, 5056, 7358,
            ],
            () => e((e.s = 2273)),
        ),
            (_N_E = e.O()));
    },
]);
