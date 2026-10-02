(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2626],
    {
        572: (e, t, i) => {
            'use strict';
            (i.r(t), i.d(t, { default: () => ey }));
            var l = i(25839),
                s = i(84059),
                o = i(27954),
                a = i(44806),
                r = i(88204),
                n = i(74631),
                d = i(61493),
                c = i(71035),
                h = i(13833),
                u = i(4254),
                b = i(32113),
                v = i(78299),
                m = i(89257),
                k = i(1407),
                g = i(20258),
                f = i(10322),
                p = i(59858),
                _ = i(21784),
                x = i(89192),
                I = i(30716);
            let S = new Set(Object.values(i(97762).p)),
                C = (e) => S.has(e);
            var y = i(99401),
                N = i(26076),
                E = i(15270),
                j = i(35295),
                w = i.n(j);
            let L = (0, r.PA)((e) => {
                let { skeleton: t } = e,
                    { landing: i, user: s } = (0, o.g)(),
                    a = (0, _.W)(),
                    { contentScrollRef: r, setContentScrollRef: S } = (0, x.g)();
                ((0, n.useEffect)(() => () => i.reset(), [i]), (0, I.J)(i.isResolved));
                let j = (0, c.c)(() => {
                    if (i.isLoaded) return i.getSkeleton({ id: i.id || t, showWizard: s.settings.showWizard }, { preloadBlocksCount: 2 });
                });
                if ((i.isNeededToLoad && (0, n.use)(i.getSkeleton({ id: t, showWizard: s.settings.showWizard }, { preloadBlocksCount: 2 })), i.isRejected))
                    return (0, l.jsx)(v.SomethingWentWrong, {});
                let L = !C(i.id) && a.canBack;
                return (0, l.jsx)(f.n, {
                    pageId: g._Q.LANDING,
                    children: (0, l.jsxs)(p.l, {
                        skeleton: t,
                        children: [
                            (0, l.jsx)(k.h, {
                                scrollElement: r,
                                headerThreshold: 134,
                                children: (0, l.jsxs)(h.N, {
                                    className: w().root,
                                    containerClassName: w().content,
                                    ref: S,
                                    'data-test-id': d.Xk.landing.LANDING_PAGE,
                                    children: [
                                        (0, l.jsxs)('div', {
                                            className: w().header,
                                            children: [
                                                L && (0, l.jsx)(E.L, { withForwardControl: !1, withBackwardControl: L }),
                                                (0, l.jsx)(u.DZ, {
                                                    variant: 'h1',
                                                    weight: 'bold',
                                                    size: 'xl',
                                                    className: w().title,
                                                    'data-test-id': d.Xk.landing.LANDING_PAGE_HEADER,
                                                    children: i.title,
                                                }),
                                            ],
                                        }),
                                        (0, l.jsx)('div', {
                                            className: w().landing,
                                            children: (0, l.jsx)(b.E, {
                                                landing: i,
                                                errorComponent: (0, l.jsx)(v.SomethingWentWrong, { className: w().error, withBackwardControl: !1 }),
                                            }),
                                        }),
                                        (0, l.jsx)(N.A, { children: (0, l.jsx)(y.w, { className: w().footer }) }),
                                    ],
                                }),
                            }),
                            (0, l.jsx)(m.p, { onFinishSuccess: j }),
                        ],
                    }),
                });
            });
            var B = i(2209),
                T = i(39985),
                V = i(91886),
                P = i(95858),
                R = i(39058),
                M = i(5867),
                A = i(82298),
                z = i(49656),
                F = i(42853),
                O = i(61777),
                D = i(57138),
                H = i(13364),
                W = i(93647),
                G = i.n(W);
            let J = (0, r.PA)((e) => {
                    let { block: t, ref: i, className: s, containerClassName: r, ...d } = e,
                        {
                            isLoading: c,
                            isLoaded: h,
                            isRejected: u,
                            isShimmerVisible: b,
                            isShimmerActive: v,
                            id: m,
                            type: k,
                            meta: g,
                            data: f,
                            hasSentAnalyticsOnLoaded: p,
                            setHasSentAnalyticsOnLoaded: _,
                            setOutdated: x,
                            setIsNeededToLoad: I,
                        } = t;
                    if ((0, T.Q)(t)) return null;
                    let S = H.D[t.type],
                        C = (0, O.f)(),
                        { settings: y, experiments: N } = (0, o.g)(),
                        E = !N.checkExperiment(a.z.WebNextVirtualSkeleton, 'on') && y.browserInfo && !y.browserInfo.isSafari;
                    (0, n.useEffect)(() => {
                        !p && h && (C(), _(!0));
                    }, [p, h, C, _]);
                    let j = (0, z.L)(() => {
                        var e, t;
                        return null != (t = null == i || null == (e = i.current) ? void 0 : e.clientHeight) ? t : 0;
                    });
                    return (0, l.jsx)(
                        S,
                        {
                            setIsNeededToLoad: I,
                            setOutdated: x,
                            isLoaded: h,
                            isLoading: c,
                            isShimmerVisible: b,
                            isShimmerActive: v,
                            isRejected: u,
                            tracksContainerClassName: G().tracksContainer,
                            containerClassName: (0, A.$)(G().container, G().important, r),
                            className: (0, A.$)({ [G().container_withContentVisibility]: E && j }, s),
                            headerClassName: G().headerContainer,
                            meta: g,
                            data: f,
                            type: k,
                            ref: i,
                            headingVariant: 'h2',
                            'data-intersection-property-id': t.id,
                            'data-test-id': t.type,
                            ...d,
                        },
                        m,
                    );
                }),
                K = (0, r.PA)((e) => {
                    let { ...t } = e;
                    return (0, l.jsx)(D.F, {
                        blockId: t.block.id,
                        blockType: t.block.type,
                        blockIdForFrom: ''.concat(F.h.DISCOVERY_BLOCK, '-').concat(t.block.id),
                        blockPosX: 1,
                        blockPosY: t.blockIndex + 1,
                        objectsCount: t.block.objectsCount,
                        children: (0, l.jsx)(J, { ...t }),
                    });
                });
            var q = i(36545);
            let Q = (0, r.PA)((e) => {
                    let { block: t, ref: i, onLoad: s, ...o } = e;
                    if (
                        ((0, n.useEffect)(() => {
                            null == s || s();
                        }, [t.isVisible, s]),
                        !(0, T.Q)(t) || !t.isVisible)
                    )
                        return null;
                    let a = q.Y[t.type];
                    return (0, l.jsx)(a, { data: t.data, ref: i, 'data-intersection-property-id': t.id, ...o });
                }),
                X = (0, r.PA)((e) => {
                    let { ...t } = e;
                    return (0, l.jsx)(D.F, {
                        blockId: t.block.id,
                        blockType: t.block.type,
                        blockIdForFrom: ''.concat(F.h.DISCOVERY_BLOCK, '-').concat(t.block.id),
                        blockPosX: 1,
                        blockPosY: t.blockIndex + 1,
                        objectsCount: t.block.objectsCount,
                        children: (0, l.jsx)(Q, { ...t }),
                    });
                }),
                $ = (0, r.PA)((e) => ((0, T.Q)(e.block) ? (0, l.jsx)(X, { ...e }) : (0, l.jsx)(K, { ...e })));
            var U = i(10603),
                Y = i(36484),
                Z = i(62562),
                ee = i(36159),
                et = i(27625),
                ei = i(79396),
                el = i(9931),
                es = i(8826),
                eo = i.n(es);
            let ea = (0, r.PA)((e) => {
                var t, i, s;
                let {
                        skeleton: a,
                        landing: r,
                        tabsState: h,
                        tabElementId: u,
                        headerClassName: b,
                        headerVariant: v,
                        stickyHeaderClassName: m,
                        staticHeaderClassName: k,
                        stickyHeaderTabIndex: g,
                        tabWithHeadingTitle: f,
                        tabWithCovers: p,
                        tabWithSubtitle: _,
                    } = e,
                    { tabs: I } = r,
                    { isScrolling: S } = (0, n.useContext)(et.B),
                    { contentScrollRef: C } = (0, x.g)(),
                    {
                        settings: { isMobile: y },
                    } = (0, o.g)(),
                    N = (0, Z.N)().get(Y.ni),
                    E = null == a || null == (t = a.root) ? void 0 : t.getTabsBlock(),
                    j = (0, n.useRef)(null);
                (0, n.useEffect)(() => {
                    E && N.loadNodes([E.data.id]);
                }, [N, E]);
                let w = (0, c.c)((e) => {
                    var t;
                    (y ? window.scrollTo(0, 0) : C && (C.scrollTop = 0), null == (t = h.onTabChange) || t.call(h, e));
                });
                return (0, l.jsx)(U.Y, {
                    compositeHeaderRef: j,
                    className: (0, A.$)(eo().header, b),
                    variant: v,
                    stickyClassName: m,
                    staticClassName: k,
                    stickyChild: (0, l.jsx)(el.wI, {
                        isShimmerVisible: I.isLoading || r.isLoading,
                        className: eo().stickyTabs,
                        shimmer: (0, l.jsx)(el.zr, {}),
                        elementId: u,
                        'data-test-id': d.e8.landing.MAIN_TABS,
                        value: h.value,
                        onTabChange: w,
                        children:
                            null == (i = I.data)
                                ? void 0
                                : i.map((e, t) => {
                                      let { meta: i } = e;
                                      return (0, l.jsx)(
                                          ei.o,
                                          {
                                              className: eo().tab,
                                              value: t,
                                              'aria-label': i.title,
                                              title: i.title,
                                              'aria-hidden': !S && v !== U.V.STICKY,
                                              tabIndex: null != g ? g : S ? 0 : -1,
                                          },
                                          i.id,
                                      );
                                  }),
                    }),
                    children: (0, l.jsx)(el.wI, {
                        className: (0, A.$)(eo().tabCarousel, eo().important),
                        elementId: u,
                        'data-test-id': d.e8.landing.MAIN_TABS,
                        ...h,
                        children:
                            null == (s = I.data)
                                ? void 0
                                : s.map((e, t) => {
                                      let { meta: i, data: s } = e;
                                      return (0, l.jsx)(
                                          ei.o,
                                          {
                                              className: eo().tab,
                                              value: t,
                                              'aria-label': i.title,
                                              title: i.title,
                                              subtitle: null == s ? void 0 : s.subtitle,
                                              covers: null == s ? void 0 : s.covers,
                                              'aria-hidden': S,
                                              tabIndex: S ? -1 : 0,
                                              withCovers: p,
                                              withSubtitle: _,
                                              withHeading: f,
                                              isShimmerVisible: I.loadingState === ee.G.PENDING,
                                          },
                                          i.id,
                                      );
                                  }),
                    }),
                });
            });
            var er = i(31463),
                en = i.n(er),
                ed = i(91149),
                ec = i(92942),
                eh = i(1466);
            let eu = (e, t) => {
                    let i = null == e ? void 0 : e.getNodeById(t),
                        { notify: s, dismiss: o } = (0, ec.l)(),
                        a = (0, n.useRef)(void 0),
                        r = (0, c.c)(() => {
                            (null == i || i.reloadErrorBlocks(), o({ notificationId: a.current }), (a.current = void 0));
                        });
                    (0, n.useEffect)(() => {
                        if (!i) return;
                        let e = i.hasErrorBlocks.onChange(() => {
                            i.hasErrorBlocks.value && !a.current && (a.current = s((0, l.jsx)(eh.L, { reloadBlocks: r }), { containerId: ed.u.ERROR, autoClose: !1 }));
                        });
                        return () => {
                            (e(), o());
                        };
                    }, [i, s, o, r]);
                },
                eb = (0, r.PA)((e) => {
                    var t;
                    let { skeleton: i, landingSdkModel: s, tab: o, tabIndex: a } = e,
                        r = (0, n.useMemo)(() => o.blocks.map(() => (0, n.createRef)()), [o.blocks]);
                    return (
                        eu(i, o.meta.id),
                        (0, l.jsx)(P.j, {
                            children: (0, l.jsx)(R.h, {
                                tabId: o.meta.id,
                                tabPos: a + 1,
                                isTabSelectedByDefault: (null == (t = s.meta) ? void 0 : t.selectedTabIndex) === a,
                                children: (0, l.jsx)('div', {
                                    className: en().root,
                                    children: o.blocks.map((e, t) => (0, l.jsx)($, { landingSdkModel: s, block: e, blockIndex: t, ref: r[t] }, e.id)),
                                }),
                            }),
                        })
                    );
                });
            var ev = i(68934),
                em = i(52312),
                ek = i(6969),
                eg = i(80504),
                ef = i(57986),
                ep = i.n(ef);
            let e_ = (0, r.PA)((e) => {
                    let { virtualItem: t, resizeObserver: i, style: s, ...o } = e,
                        a = (0, n.useRef)(null),
                        r = (0, n.useRef)(null);
                    return (
                        (0, n.useEffect)(() => {
                            let e = r.current;
                            if (e && i) return (i.observe(e), () => i.unobserve(e));
                        }, [i]),
                        (0, l.jsx)('div', { 'data-index': t.index, className: ep().root, ref: r, style: s, children: (0, l.jsx)($, { ...o, ref: a }) })
                    );
                }),
                ex = (0, r.PA)((e) => {
                    var t, i;
                    let { skeleton: a, landingSdkModel: r, tab: d, tabIndex: h } = e,
                        u = (0, s.useSearchParams)(),
                        {
                            settings: { isMobile: b },
                        } = (0, o.g)(),
                        { contentScrollRef: v } = (0, x.g)(),
                        [m, k] = (0, ev.d)(),
                        g = (0, n.useRef)(!0),
                        { blockIndexesToShow: f, mapSdkBlockToBlockModel: p } = ((e, t) => {
                            var i;
                            let l = null == e ? void 0 : e.getNodeById(t),
                                [s, o] = (0, n.useState)(null != (i = null == l ? void 0 : l.blocksIndexesToShow.value) ? i : []);
                            return (
                                (0, n.useEffect)(() => {
                                    let e =
                                        null == l
                                            ? void 0
                                            : l.blocksIndexesToShow.onChange(() => {
                                                  var e;
                                                  o(null != (e = null == l ? void 0 : l.blocksIndexesToShow.value) ? e : []);
                                              });
                                    return () => (null == e ? void 0 : e());
                                }, [null == l ? void 0 : l.blocksIndexesToShow]),
                                {
                                    blockIndexesToShow: s,
                                    mapSdkBlockToBlockModel: (0, n.useCallback)(
                                        (e, t, i) => {
                                            let s,
                                                o = t[e];
                                            if (void 0 === o) return;
                                            let a = null == l ? void 0 : l.children[o],
                                                r = i.find((e, t) => (null == a ? void 0 : a.data.id) === e.id && ((s = t), !0));
                                            if (r && void 0 !== s) return { blockModel: r, blockModelIndex: s };
                                        },
                                        [null == l ? void 0 : l.children],
                                    ),
                                }
                            );
                        })(a, d.meta.id);
                    eu(a, d.meta.id);
                    let _ = b ? 16 : 24;
                    ((e) => {
                        let { listContainer: t, contentScrollElement: i, isWindowScroll: l, tabId: s, gap: o } = e,
                            a = (0, Z.N)().get(Y.ni);
                        (0, n.useEffect)(() => {
                            if (!t) return;
                            let e = l ? window : i;
                            if (e) return a.observeList({ container: t, scrollElement: e, tabId: s, sizes: eg.X, gap: o, overscan: 3 });
                        }, [i, o, l, a, t, s]);
                    })({ listContainer: m, contentScrollElement: v, isWindowScroll: b, tabId: d.meta.id, gap: _ });
                    let I = (0, c.c)((e) => {
                            let t = f[e];
                            if (void 0 === t) return 300;
                            let i = d.blocks[t];
                            return (null == i ? void 0 : i.isVisible) ? eg.X[i.type] : 0;
                        }),
                        { virtualizer: S, resizeObserver: C } = (0, em.r)({ count: null != (i = f.length) ? i : 0, gap: _, getEstimateSize: I, containerRef: m });
                    (0, n.useEffect)(() => {
                        var e;
                        if (!g.current) return;
                        let t = u.get(ek.K.BLOCK),
                            i = d.blocks.findIndex((e) => e.id === t);
                        if (!f.includes(i)) return;
                        let l = null == (e = S.getOffsetForIndex(i, 'center')) ? void 0 : e[0];
                        (S.scrollToIndex(i, { align: 'center', behavior: 'auto' }), S.scrollOffset && l && 100 > Math.abs(S.scrollOffset - l) && (g.current = !1));
                    }, [f, u, d.blocks, S]);
                    let y = S.getTotalSize(),
                        N = S.getVirtualItems();
                    return (0, l.jsx)(P.j, {
                        children: (0, l.jsx)(R.h, {
                            tabId: d.meta.id,
                            tabPos: h + 1,
                            isTabSelectedByDefault: (null == (t = r.meta) ? void 0 : t.selectedTabIndex) === h,
                            children: (0, l.jsx)('div', {
                                className: en().root,
                                style: { height: ''.concat(y, 'px') },
                                ref: k,
                                children: N.map((e) => {
                                    let t = p(e.index, f, d.blocks);
                                    return t
                                        ? (0, l.jsx)(
                                              e_,
                                              {
                                                  virtualItem: e,
                                                  resizeObserver: C,
                                                  landingSdkModel: r,
                                                  block: t.blockModel,
                                                  blockIndex: Number(t.blockModelIndex),
                                                  isScrolling: S.isScrolling,
                                                  style: { transform: 'translate3d(0, '.concat(e.start - S.options.scrollMargin, 'px, 0)') },
                                              },
                                              e.key,
                                          )
                                        : null;
                                }),
                            }),
                        }),
                    });
                }),
                eI = (0, r.PA)((e) => {
                    var t;
                    let {
                            skeleton: i,
                            landingSdkModel: s,
                            upperBlocks: r,
                            headerConcealerComponent: d,
                            tabsState: c,
                            containerClassName: h,
                            containerStyle: u,
                            headerClassName: b,
                            tabWithHeadingTitle: v,
                            tabWithCovers: m,
                            tabWithSubtitle: k,
                            stickyHeaderClassName: g,
                            staticHeaderClassName: f,
                            stickyHeaderTabIndex: p,
                            headerVariant: _ = U.V.COMPOSITE,
                        } = e,
                        { tabs: x } = s,
                        I = (0, n.useId)(),
                        { experiments: S } = (0, o.g)(),
                        C = S.checkExperiment(a.z.WebNextVirtualSkeleton, 'on') ? ex : eb;
                    return (0, l.jsxs)(l.Fragment, {
                        children: [
                            r,
                            d,
                            (0, l.jsx)(ea, {
                                skeleton: i,
                                landing: s,
                                tabsState: c,
                                tabElementId: I,
                                headerClassName: b,
                                headerVariant: _,
                                stickyHeaderClassName: g,
                                staticHeaderClassName: f,
                                stickyHeaderTabIndex: p,
                                tabWithHeadingTitle: v,
                                tabWithCovers: m,
                                tabWithSubtitle: k,
                            }),
                            (0, l.jsx)('div', {
                                className: h,
                                style: u,
                                children:
                                    null == (t = x.data)
                                        ? void 0
                                        : t.map((e, t) =>
                                              (0, l.jsx)(
                                                  M.Kp,
                                                  {
                                                      className: en().tabPanel,
                                                      name: t,
                                                      value: c.value,
                                                      elementId: I,
                                                      children: (0, l.jsx)(C, { skeleton: i, landingSdkModel: s, tab: e, tabIndex: t }),
                                                  },
                                                  e.meta.id,
                                              ),
                                          ),
                            }),
                        ],
                    });
                }),
                eS = (0, r.PA)((e) => {
                    var t, i;
                    let {
                            skeleton: s,
                            landingSdkModel: r,
                            headerConcealerComponent: d,
                            errorComponent: c,
                            containerClassName: h,
                            headerClassName: u,
                            containerStyle: b,
                            tabWithHeadingTitle: v,
                            tabWithCovers: m,
                            tabWithSubtitle: k,
                            staticHeaderClassName: g,
                            stickyHeaderClassName: f,
                            stickyHeaderTabIndex: p,
                            headerVariant: _,
                        } = e,
                        { experiments: x } = (0, o.g)(),
                        I = x.checkExperiment(a.z.WebNextVirtualSkeleton, 'on') ? ex : eb,
                        S = ((e) => {
                            var t, i, l;
                            let s = null != (i = null == e || null == (t = e.root) ? void 0 : t.getTabsBlock()) ? i : null,
                                { value: o, onTabChange: a } = (0, M.zb)(null != (l = null == s ? void 0 : s.tabIndex.value) ? l : 0);
                            (0, n.useEffect)(() => {
                                if (!s) return;
                                let e = s.tabIndex.onChange(() => {
                                    null == a || a(s.tabIndex.value);
                                });
                                return () => {
                                    e();
                                };
                            }, [s, a]);
                            let r = (0, n.useCallback)(
                                (e) => {
                                    null == s || s.changeSelectedTab(e);
                                },
                                [s],
                            );
                            return s ? { value: o, onTabChange: r } : { value: 0 };
                        })(s),
                        C = (0, n.useCallback)(
                            (e) => {
                                var t;
                                null == (t = S.onTabChange) || t.call(S, e);
                            },
                            [S],
                        ),
                        y = !!(r.tabs.data && r.tabs.data.length > 1),
                        N = null == (t = r.tabs.data) ? void 0 : t[0],
                        E = (0, n.useMemo)(() => {
                            var e, t;
                            return null != (t = null == (e = r.upperBlocks) ? void 0 : e.map(() => (0, n.createRef)())) ? t : [];
                        }, [r.upperBlocks]),
                        j = (0, V.BL)(E, { freezeOnceVisible: !0 }),
                        w = (0, n.useMemo)(() => {
                            var e;
                            if (null == (e = r.upperBlocks) ? void 0 : e.length)
                                return (0, l.jsx)(R.h, {
                                    tabId: '',
                                    tabPos: -1,
                                    isTabSelectedByDefault: !1,
                                    children: (0, l.jsx)('div', {
                                        className: en().upperBlocks,
                                        children: r.upperBlocks.map((e, t) => {
                                            let { isIntersecting: i } = j[e.id] || {};
                                            return (0, l.jsx)($, { landingSdkModel: r, block: e, blockIndex: t, isIntersecting: i, ref: E[t] }, e.id);
                                        }),
                                    }),
                                });
                        }, [null == (i = r.upperBlocks) ? void 0 : i.length, r, j, E]);
                    return y
                        ? (0, l.jsx)(eI, {
                              skeleton: s,
                              landingSdkModel: r,
                              upperBlocks: w,
                              headerConcealerComponent: d,
                              tabsState: { value: S.value, onTabChange: C },
                              containerClassName: h,
                              containerStyle: b,
                              headerClassName: u,
                              tabWithHeadingTitle: v,
                              tabWithCovers: m,
                              tabWithSubtitle: k,
                              staticHeaderClassName: g,
                              stickyHeaderClassName: f,
                              stickyHeaderTabIndex: p,
                              headerVariant: _,
                          })
                        : N
                          ? (0, l.jsxs)('div', { className: h, style: b, children: [w, d, (0, l.jsx)(I, { skeleton: s, landingSdkModel: r, tab: N, tabIndex: 0 })] })
                          : w
                            ? (0, l.jsx)(P.j, { children: (0, l.jsxs)('div', { className: h, style: b, children: [w, d] }) })
                            : r.isLoadedAndEmpty
                              ? (0, l.jsx)('div', { className: h, style: b, children: c })
                              : null;
                });
            (0, r.PA)((e) => {
                let { skeleton: t } = e,
                    { landingSdkModel: i, user: s } = (0, o.g)(),
                    a = (0, _.W)(),
                    { contentScrollRef: r, setContentScrollRef: c } = (0, x.g)(),
                    b = (0, Z.N)().get(Y.ni);
                if (((0, n.useEffect)(() => () => i.reset(), [i]), (0, I.J)(i.isResolved), i.isNeededToInit)) {
                    let e = { type: B.$b.LANDING_PAGE, id: t, showWizard: s.settings.showWizard };
                    i.skeletonMeta ? i.createSkeleton({ skeletonData: e }) : (0, n.use)(i.loadAndCreateSkeleton({ skeletonData: e, preloadBlocksCount: 2 }));
                }
                if (
                    (((e) => {
                        let { landingSdkModel: t } = (0, o.g)();
                        (0, n.useEffect)(() => {
                            var i, l, s;
                            let o = [];
                            if (!e) return;
                            let a = (i) => {
                                if ((0, T.Q)(i)) {
                                    var l;
                                    null == (l = i.data) || l.blocks.forEach(a);
                                    return;
                                }
                                let s = e.getNodeById(i.id);
                                s &&
                                    o.push(
                                        s.state.loadingStatus.onChange(() => {
                                            t.handleSdkBlockUpdate(i, s, s.state.loadingStatus.value);
                                        }),
                                    );
                            };
                            for (let e of (null == (i = t.upperBlocks) || i.forEach(a), null != (s = t.tabs.data) ? s : [])) e.blocks.forEach(a);
                            let r = null == (l = e.root) ? void 0 : l.getTabsBlock();
                            if (r) {
                                let e = r.state.loadingStatus.onChange(() => {
                                    t.handleSdkTabsBlockUpdate(r, r.state.loadingStatus.value);
                                });
                                o.push(e);
                            }
                            return () => {
                                o.forEach((e) => e());
                            };
                        }, [e, t, t.tabs.data, t.upperBlocks]);
                    })(b.skeleton),
                    i.isRejected)
                )
                    return (0, l.jsx)(v.SomethingWentWrong, {});
                let m = !C(i.id) && a.canBack;
                return (0, l.jsx)(f.n, {
                    pageId: g._Q.LANDING,
                    children: (0, l.jsx)(p.l, {
                        skeleton: t,
                        children: (0, l.jsx)(k.h, {
                            scrollElement: r,
                            headerThreshold: 134,
                            children: (0, l.jsxs)(h.N, {
                                className: w().root,
                                containerClassName: w().content,
                                ref: c,
                                'data-test-id': d.Xk.landing.LANDING_PAGE,
                                children: [
                                    (0, l.jsxs)('div', {
                                        className: w().header,
                                        children: [
                                            m && (0, l.jsx)(E.L, { withForwardControl: !1, withBackwardControl: m }),
                                            (0, l.jsx)(u.DZ, {
                                                variant: 'h1',
                                                weight: 'bold',
                                                size: 'xl',
                                                className: w().title,
                                                'data-test-id': d.Xk.landing.LANDING_PAGE_HEADER,
                                                children: i.title,
                                            }),
                                        ],
                                    }),
                                    (0, l.jsx)('div', {
                                        className: w().landing,
                                        children: (0, l.jsx)(eS, {
                                            skeleton: b.skeleton,
                                            landingSdkModel: i,
                                            errorComponent: (0, l.jsx)(v.SomethingWentWrong, { className: w().error, withBackwardControl: !1 }),
                                        }),
                                    }),
                                    (0, l.jsx)(N.A, { children: (0, l.jsx)(y.w, { className: w().footer }) }),
                                ],
                            }),
                        }),
                    }),
                });
            });
            let eC = (e) => {
                    let { skeleton: t } = e,
                        { experiments: i } = (0, o.g)();
                    return (i.checkExperiment(a.z.WebNextLandingSdk, 'on'), (0, l.jsx)(L, { skeleton: t }));
                },
                ey = () => {
                    let e = (0, s.useSearchParams)(),
                        t = e.get('skeleton');
                    return (t || (0, s.notFound)(), (0, l.jsx)(eC, { skeleton: t }, e.toString()));
                };
        },
        6968: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => k });
            var l = i(25839),
                s = i(82298),
                o = i(28631),
                a = i(74631);
            let r = (e) => {
                    let { style: t, forwardRef: i, context: s, ...o } = e,
                        a = (null == s ? void 0 : s.listAriaLabel) || void 0,
                        r = (null == s ? void 0 : s.listRole) || 'region';
                    return (0, l.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: r, 'aria-label': a, style: { ...t }, ref: i, ...o });
                },
                n = (0, a.forwardRef)((e, t) => (0, l.jsx)(r, { forwardRef: t, ...e }));
            var d = i(45300),
                c = i.n(d);
            let h = (e) => {
                    let { style: t, forwardRef: i, withFooter: o, withHeader: a, withForceScroll: r, ...n } = e;
                    return (0, l.jsx)('div', {
                        className: (0, s.$)(c().scroller, { [c().scroller_withFooter]: o, [c().scroller_withHeader]: a, [c().scroller_withForceScroll]: r }),
                        style: { ...t },
                        ref: i,
                        ...n,
                        tabIndex: -1,
                    });
                },
                u = (0, a.forwardRef)((e, t) => (0, l.jsx)(h, { forwardRef: t, ...e }));
            var b = i(10508),
                v = i(63257);
            let m = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: i,
                            onRangeHandler: s,
                            debounceDurationInMs: o = 100,
                            totalCount: r = 0,
                            shouldTriggerRangeChangedOn: n = [],
                            endReached: d,
                            virtuosoRef: c,
                            ...h
                        } = e,
                        [u, m] = (0, a.useState)(null),
                        k = (0, a.useMemo)(
                            () =>
                                (0, b.A)((e) => {
                                    if ((null == s || s(e), n.length > 0 && m(e), t && i)) {
                                        let l = Math.floor(e.endIndex / t) + 1,
                                            s = Math.floor(e.startIndex / t);
                                        for (let e = s; e < l; e++) i(e);
                                    }
                                }, o),
                            [o, s, t, i, n],
                        );
                    (0, a.useEffect)(() => {
                        n.length > 0 && u && k(u);
                    }, n);
                    let g = (0, a.useMemo)(() => {
                        if (d)
                            return (0, b.A)((e) => {
                                d(e);
                            }, o);
                    }, [d, o]);
                    return (0, l.jsx)(v.sN, { ref: c, rangeChanged: k, totalCount: r, endReached: g, ...h });
                },
                k = (e) => {
                    let {
                            className: t,
                            customComponents: i,
                            onGetDataByPage: r,
                            onGetDataByRange: d,
                            itemClassName: h,
                            itemContentCallback: b,
                            listClassName: v,
                            overscan: k = 700,
                            pageSize: g = 20,
                            totalCount: f,
                            totalRequests: p,
                            debounceDurationInMs: _,
                            initialItemCount: x,
                            minInitialItemCount: I = 20,
                            handleRef: S,
                            alwaysShowScrollbar: C = !1,
                            testId: y,
                            isMobileLayout: N = !1,
                            shouldTriggerRangeChangedOn: E,
                            ...j
                        } = e,
                        [w, L] = (0, a.useState)(!1),
                        B = (0, a.useMemo)(
                            () =>
                                (0, o.A)((e) => {
                                    L(e);
                                }, 100),
                            [],
                        ),
                        T = (0, a.useMemo)(() => {
                            var e, t;
                            return N
                                ? {
                                      Scroller: u,
                                      List: null != (e = null == i ? void 0 : i.List) ? e : n,
                                      Item: null == i ? void 0 : i.Item,
                                      ScrollSeekPlaceholder: null == i ? void 0 : i.ScrollSeekPlaceholder,
                                  }
                                : {
                                      Scroller: u,
                                      List: null != (t = null == i ? void 0 : i.List) ? t : n,
                                      Item: null == i ? void 0 : i.Item,
                                      Header: null == i ? void 0 : i.Header,
                                      Footer: null == i ? void 0 : i.Footer,
                                      ScrollSeekPlaceholder: null == i ? void 0 : i.ScrollSeekPlaceholder,
                                  };
                        }, [i, p, N]),
                        V = x ? Math.min(x, I) : void 0;
                    return (0, l.jsxs)('div', {
                        className: (0, s.$)(c().root, { [c().root_scrolling]: w || C, [c().root_notScrolling]: !w && !C }, t),
                        'data-test-id': y,
                        children: [
                            N && (null == i ? void 0 : i.Header) && i.Header(),
                            (0, l.jsx)(m, {
                                overscan: k,
                                components: T,
                                listClassName: v,
                                itemClassName: h,
                                isScrolling: B,
                                itemContent: b,
                                scrollerRef: S,
                                totalCount: f,
                                pageSize: g,
                                onPageHandler: r,
                                onRangeHandler: d,
                                debounceDurationInMs: _,
                                initialItemCount: V,
                                shouldTriggerRangeChangedOn: E,
                                ...j,
                            }),
                            N && (null == i ? void 0 : i.Footer) && i.Footer(),
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
        28343: (e, t, i) => {
            Promise.resolve().then(i.bind(i, 572));
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
        57986: (e) => {
            e.exports = { root: 'VirtualizedSkeletonBlock_root__oFWuv' };
        },
        60296: (e, t, i) => {
            'use strict';
            ((t.TV = function (e, t) {
                let { skeletonId: i = '', mainObjectType: o = s.DomainObjectType.NonApplicable, mainObjectId: a = '' } = t,
                    r = (0, l.makeMetaParams)(1),
                    n = { ...t, skeletonId: i, mainObjectType: o, mainObjectId: a, _meta: r };
                e.trackEvent('Tab.Opened', n);
            }),
                (t.hc = function (e, t) {
                    let { skeletonId: i = '', mainObjectType: o = s.DomainObjectType.NonApplicable, mainObjectId: a = '' } = t,
                        r = (0, l.makeMetaParams)(1),
                        n = { ...t, skeletonId: i, mainObjectType: o, mainObjectId: a, _meta: r };
                    e.trackEvent('Tab.Loaded', n);
                }));
            let l = i(26895),
                s = i(36619);
        },
        72233: (e, t, i) => {
            'use strict';
            i.d(t, { u2: () => d, rl: () => l, mz: () => n, yq: () => h, zE: () => s });
            var l,
                s,
                o = i(58025),
                a = i(36432);
            (!(function (e) {
                ((e.IDLE = 'IDLE'), (e.PENDING = 'PENDING'), (e.RESOLVE = 'RESOLVE'), (e.REJECT = 'REJECT'));
            })(l || (l = {})),
                (function (e) {
                    ((e.HIDDEN = 'HIDDEN'), (e.VISIBLE = 'VISIBLE'));
                })(s || (s = {})));
            class r {
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
                            var s;
                            let o = null == (s = this.skeleton) ? void 0 : s.getNodeById(t.id);
                            o && o.state.loadingStatus.value !== l.REJECT && e.push(i);
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
                        let s = i.state.loadingStatus.value === l.REJECT,
                            o = i.state.loadingStatus.onChange(() => {
                                let e = i.state.loadingStatus.value === l.REJECT;
                                e !== s && ((s = e), this.updatePotentialBlocksIndexes());
                            });
                        this.blocksLoadingStatusUnsubs.push(o);
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
                        ((0, o._)(this, 'detector', void 0),
                        (0, o._)(this, 'virtualizedMetadataLoader', void 0),
                        (0, o._)(this, 'skeleton', void 0),
                        (0, o._)(this, 'targetsToIdMap', new Map()),
                        (0, o._)(this, 'listItems', []),
                        (0, o._)(this, 'potentialBlocksIndexes', []),
                        (0, o._)(this, 'blocksLoadingStatusUnsubs', []),
                        (0, o._)(this, 'updatePotentialBlocksIndexes', () => {
                            var e;
                            let t = this.potentialBlocksIndexes,
                                i = this.calculatePotentialBlocksIndexes();
                            ((this.potentialBlocksIndexes = i),
                                (t.length === i.length && t.every((e, t) => e === i[t])) ||
                                    null == (e = this.virtualizedMetadataLoader) ||
                                    e.updateItems(this.getPotentialItems()));
                        }),
                        (0, o._)(this, 'setNodeVisibility', (e, t) => {
                            var i;
                            let l = null == (i = this.skeleton) ? void 0 : i.getNodeById(e);
                            if (!l) return;
                            let o = t ? s.VISIBLE : s.HIDDEN;
                            l.state.visibilityStatus.value !== o && (l.state.visibilityStatus.value = o);
                        }),
                        (0, o._)(this, 'onListVisibilityChange', (e) => {
                            e.forEach((e) => {
                                this.setNodeVisibility(e.id, e.isVisible);
                            });
                        }),
                        (0, o._)(this, 'onElementsVisibilityChange', (e) => {
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
            class n {
                async loadAndCreateSkeleton(e) {
                    let { data: t, preloadedBlocksMeta: i } = e,
                        l = this.skeletonFactory.create({ data: t });
                    (this.visibilityController && this.visibilityController.attachSkeleton(l),
                        await l.loadSkeletonMeta(),
                        l.createSkeletonTree(i),
                        l.onNodesVisibilityChange(),
                        (this.skeleton = l));
                }
                createSkeleton(e) {
                    let { data: t, preloadedBlocksMeta: i } = e,
                        l = this.skeletonFactory.create({ data: t });
                    (this.visibilityController && this.visibilityController.attachSkeleton(l), l.createSkeletonTree(i), l.onNodesVisibilityChange(), (this.skeleton = l));
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
                        ((this.visibilityController = new r(e)),
                        this.skeleton && this.visibilityController.attachSkeleton(this.skeleton),
                        (this.hasVisibilityController = !0));
                }
                observe(e) {
                    let { target: t, loadIfNoElement: i = !1 } = e,
                        { element: l, id: s } = t;
                    if (!l && i) {
                        var o;
                        let e = null == (o = this.skeleton) ? void 0 : o.getNodeById(s);
                        null == e || e.load();
                        return;
                    }
                    if (!this.visibilityController) throw new a.t('VisibilityController has not been created');
                    this.visibilityController.observe(t);
                }
                unobserve(e) {
                    if (!this.visibilityController) throw new a.t('VisibilityController has not been created');
                    this.visibilityController.unobserve(e);
                }
                observeList(e) {
                    if (!this.visibilityController) throw new a.t('VisibilityController has not been created');
                    return this.visibilityController.observeList(e);
                }
                destroy() {
                    var e, t;
                    (null == (e = this.visibilityController) || e.disconnect(), null == (t = this.skeleton) || t.destroy(), (this.skeleton = void 0));
                }
                constructor({ skeletonFactory: e }) {
                    ((0, o._)(this, 'skeletonFactory', void 0),
                        (0, o._)(this, 'visibilityController', void 0),
                        (0, o._)(this, 'hasVisibilityController', !1),
                        (0, o._)(this, 'skeleton', void 0),
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
                    let { container: t, scrollElement: i, items: l, gap: s, overscan: o = 2, onVisibilityChange: a } = e;
                    if (
                        (this.unobserveList(),
                        (this.container = t),
                        (this.scrollElement = i),
                        (this.items = l),
                        (this.gap = s),
                        (this.overscan = Number.isFinite(o) ? Math.max(0, o) : 2),
                        (this.onVisibilityChange = a),
                        (this.abortController = new AbortController()),
                        this.rebuildLayout(),
                        this.scrollElement.addEventListener('scroll', this.scheduleRefresh, { passive: !0, signal: this.abortController.signal }),
                        !c(i))
                    ) {
                        var r;
                        this.stopObservingResize = null == (r = this.resizeObserverAdapter) ? void 0 : r.observe(i, this.scheduleRefresh);
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
                        l = Math.min(this.layout.totalSize, t.bottom - e.top);
                    if (l <= i) return void this.updateVisibility([]);
                    let s = ((e) => {
                        let { items: t, viewportStart: i, viewportEnd: l, overscan: s } = e;
                        if (0 === t.length) return [];
                        let o = ((e, t) => {
                                let i = 0,
                                    l = e.length - 1,
                                    s = -1;
                                for (; i <= l;) {
                                    let o = Math.floor((i + l) / 2),
                                        a = e[o];
                                    if (!a) break;
                                    a.end >= t ? ((s = o), (l = o - 1)) : (i = o + 1);
                                }
                                return s;
                            })(t, i),
                            a = ((e, t) => {
                                let i = 0,
                                    l = e.length - 1,
                                    s = -1;
                                for (; i <= l;) {
                                    let o = Math.floor((i + l) / 2),
                                        a = e[o];
                                    if (!a) break;
                                    a.start <= t ? ((s = o), (i = o + 1)) : (l = o - 1);
                                }
                                return s;
                            })(t, l);
                        if (-1 === o || -1 === a || o > a) return [];
                        let r = Math.max(0, o - s),
                            n = Math.min(t.length - 1, a + s);
                        return t.slice(r, n + 1);
                    })({ items: this.layout.items, viewportStart: i, viewportEnd: l, overscan: this.overscan });
                    this.updateVisibility(s);
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
                        var l;
                        null == (l = this.onVisibilityChange) || l.call(this, i);
                    }
                }
                constructor({ resizeObserverAdapter: e } = {}) {
                    ((0, o._)(this, 'resizeObserverAdapter', void 0),
                        (0, o._)(this, 'container', void 0),
                        (0, o._)(this, 'scrollElement', void 0),
                        (0, o._)(this, 'gap', 0),
                        (0, o._)(this, 'overscan', 2),
                        (0, o._)(this, 'onVisibilityChange', void 0),
                        (0, o._)(this, 'abortController', void 0),
                        (0, o._)(this, 'items', []),
                        (0, o._)(this, 'layout', { items: [], totalSize: 0 }),
                        (0, o._)(this, 'visibleItemIds', new Set()),
                        (0, o._)(this, 'animationFrameId', void 0),
                        (0, o._)(this, 'stopObservingResize', void 0),
                        (0, o._)(this, 'rebuildLayout', () => {
                            this.layout = ((e) => {
                                let { items: t, gap: i } = e,
                                    l = [],
                                    s = 0,
                                    o = !1;
                                return (
                                    t.forEach((e, t) => {
                                        if (e.estimatedSize <= 0) return;
                                        let a = e.estimatedSize + i;
                                        (l.push({ id: e.id, index: t, start: s, end: s + a, size: a }), (s += a), (o = !0));
                                    }),
                                    { items: l, totalSize: o ? Math.max(0, s - i) : 0 }
                                );
                            })({ items: this.items, gap: this.gap });
                        }),
                        (0, o._)(this, 'cancelScheduledRefresh', () => {
                            var e;
                            if (void 0 === this.animationFrameId) return;
                            let t = null == (e = this.container) ? void 0 : e.ownerDocument.defaultView;
                            (null == t || t.cancelAnimationFrame(this.animationFrameId), (this.animationFrameId = void 0));
                        }),
                        (0, o._)(this, 'scheduleRefresh', () => {
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
        93647: (e) => {
            e.exports = {
                container: 'SkeletonBlock_container__BE40w',
                important: 'SkeletonBlock_important__mf3Zo',
                container_withContentVisibility: 'SkeletonBlock_container_withContentVisibility__Iq2_D',
                headerContainer: 'SkeletonBlock_headerContainer__qVrPn',
                tracksContainer: 'SkeletonBlock_tracksContainer__BEMi0',
            };
        },
    },
    (e) => {
        (e.O(
            0,
            [
                3349, 8451, 1583, 8561, 1676, 6287, 7349, 2e3, 6749, 7339, 3472, 2121, 1632, 5743, 3084, 3021, 5058, 3789, 9468, 364, 1107, 6706, 1311, 5201, 9212, 260,
                4512, 9004, 4985, 7839, 7957, 9761, 9479, 1817, 3257, 4305, 3269, 4163, 3246, 4517, 3482, 6680, 6504, 5329, 8836, 820, 4434, 48, 862, 6361, 5898, 2533,
                8222, 4932, 5622, 9973, 5853, 6271, 7804, 2209, 6490, 4475, 5056, 7358,
            ],
            () => e((e.s = 28343)),
        ),
            (_N_E = e.O()));
    },
]);
