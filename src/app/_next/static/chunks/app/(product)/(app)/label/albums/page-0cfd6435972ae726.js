(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3008],
    {
        1466: (e, t, r) => {
            'use strict';
            r.d(t, { L: () => h });
            var l = r(25839),
                o = r(82298),
                s = r(74631),
                a = r(39004),
                i = r(8487),
                n = r(4071),
                d = r(66738),
                c = r(4254),
                u = r(51790),
                m = r(12558),
                _ = r.n(m);
            let h = (e) => {
                let { reloadBlocks: t, closeToast: r } = e,
                    m = (0, s.useRef)(null),
                    { formatMessage: h } = (0, a.A)();
                (0, s.useEffect)(() => {
                    var e;
                    null == (e = m.current) || e.focus();
                }, []);
                let g = (0, s.useMemo)(
                    () =>
                        (0, l.jsxs)('div', {
                            className: _().message,
                            children: [
                                (0, l.jsx)(c.HL, {
                                    className: _().text,
                                    variant: 'div',
                                    type: 'controls',
                                    size: 'm',
                                    children: (0, l.jsx)(i.A, { id: 'error-messages.error-load-part-page' }),
                                }),
                                (0, l.jsx)(n.$, {
                                    ref: m,
                                    className: _().button,
                                    onClick: t,
                                    variant: 'text',
                                    'aria-label': h({ id: 'interface-actions.reload-part-page' }),
                                    icon: (0, l.jsx)(d.I, { variant: 'reset', size: 'xxs', className: _().icon }),
                                }),
                            ],
                        }),
                    [h, t],
                );
                return (0, l.jsx)(u.$, { className: (0, o.$)(_().root, _().important), message: g, closeToast: r });
            };
        },
        6968: (e, t, r) => {
            'use strict';
            r.d(t, { $: () => x });
            var l = r(25839),
                o = r(82298),
                s = r(28631),
                a = r(74631);
            let i = (e) => {
                    let { style: t, forwardRef: r, context: o, ...s } = e,
                        a = (null == o ? void 0 : o.listAriaLabel) || void 0,
                        i = (null == o ? void 0 : o.listRole) || 'region';
                    return (0, l.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: i, 'aria-label': a, style: { ...t }, ref: r, ...s });
                },
                n = (0, a.forwardRef)((e, t) => (0, l.jsx)(i, { forwardRef: t, ...e }));
            var d = r(45300),
                c = r.n(d);
            let u = (e) => {
                    let { style: t, forwardRef: r, withFooter: s, withHeader: a, withForceScroll: i, ...n } = e;
                    return (0, l.jsx)('div', {
                        className: (0, o.$)(c().scroller, { [c().scroller_withFooter]: s, [c().scroller_withHeader]: a, [c().scroller_withForceScroll]: i }),
                        style: { ...t },
                        ref: r,
                        ...n,
                        tabIndex: -1,
                    });
                },
                m = (0, a.forwardRef)((e, t) => (0, l.jsx)(u, { forwardRef: t, ...e }));
            var _ = r(10508),
                h = r(63257);
            let g = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: r,
                            onRangeHandler: o,
                            debounceDurationInMs: s = 100,
                            totalCount: i = 0,
                            shouldTriggerRangeChangedOn: n = [],
                            endReached: d,
                            virtuosoRef: c,
                            ...u
                        } = e,
                        [m, g] = (0, a.useState)(null),
                        x = (0, a.useMemo)(
                            () =>
                                (0, _.A)((e) => {
                                    if ((null == o || o(e), n.length > 0 && g(e), t && r)) {
                                        let l = Math.floor(e.endIndex / t) + 1,
                                            o = Math.floor(e.startIndex / t);
                                        for (let e = o; e < l; e++) r(e);
                                    }
                                }, s),
                            [s, o, t, r, n],
                        );
                    (0, a.useEffect)(() => {
                        n.length > 0 && m && x(m);
                    }, n);
                    let b = (0, a.useMemo)(() => {
                        if (d)
                            return (0, _.A)((e) => {
                                d(e);
                            }, s);
                    }, [d, s]);
                    return (0, l.jsx)(h.sN, { ref: c, rangeChanged: x, totalCount: i, endReached: b, ...u });
                },
                x = (e) => {
                    let {
                            className: t,
                            customComponents: r,
                            onGetDataByPage: i,
                            onGetDataByRange: d,
                            itemClassName: u,
                            itemContentCallback: _,
                            listClassName: h,
                            overscan: x = 700,
                            pageSize: b = 20,
                            totalCount: N,
                            totalRequests: S,
                            debounceDurationInMs: f,
                            initialItemCount: v,
                            minInitialItemCount: A = 20,
                            handleRef: C,
                            alwaysShowScrollbar: R = !1,
                            testId: j,
                            isMobileLayout: p = !1,
                            shouldTriggerRangeChangedOn: w,
                            ...L
                        } = e,
                        [T, E] = (0, a.useState)(!1),
                        y = (0, a.useMemo)(
                            () =>
                                (0, s.A)((e) => {
                                    E(e);
                                }, 100),
                            [],
                        ),
                        I = (0, a.useMemo)(() => {
                            var e, t;
                            return p
                                ? {
                                      Scroller: m,
                                      List: null != (e = null == r ? void 0 : r.List) ? e : n,
                                      Item: null == r ? void 0 : r.Item,
                                      ScrollSeekPlaceholder: null == r ? void 0 : r.ScrollSeekPlaceholder,
                                  }
                                : {
                                      Scroller: m,
                                      List: null != (t = null == r ? void 0 : r.List) ? t : n,
                                      Item: null == r ? void 0 : r.Item,
                                      Header: null == r ? void 0 : r.Header,
                                      Footer: null == r ? void 0 : r.Footer,
                                      ScrollSeekPlaceholder: null == r ? void 0 : r.ScrollSeekPlaceholder,
                                  };
                        }, [r, S, p]),
                        P = v ? Math.min(v, A) : void 0;
                    return (0, l.jsxs)('div', {
                        className: (0, o.$)(c().root, { [c().root_scrolling]: T || R, [c().root_notScrolling]: !T && !R }, t),
                        'data-test-id': j,
                        children: [
                            p && (null == r ? void 0 : r.Header) && r.Header(),
                            (0, l.jsx)(g, {
                                overscan: x,
                                components: I,
                                listClassName: h,
                                itemClassName: u,
                                isScrolling: y,
                                itemContent: _,
                                scrollerRef: C,
                                totalCount: N,
                                pageSize: b,
                                onPageHandler: i,
                                onRangeHandler: d,
                                debounceDurationInMs: f,
                                initialItemCount: P,
                                shouldTriggerRangeChangedOn: w,
                                ...L,
                            }),
                            p && (null == r ? void 0 : r.Footer) && r.Footer(),
                        ],
                    });
                };
        },
        6969: (e, t, r) => {
            'use strict';
            r.d(t, { K: () => l });
            var l = (function (e) {
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
                    (e.LUMEN_AWAKE_PARAM = 'shouldAwakeLumen'),
                    (e.BEST_PLAY = 'bestPlay'),
                    (e.TEXT = 'text'),
                    e
                );
            })({});
        },
        8266: (e, t, r) => {
            'use strict';
            r.d(t, { b: () => l });
            let l = (e, t) => {
                let r = new URL(window.location.href),
                    l = r.searchParams;
                return (l.set(e, t), (r.search = l.toString()), r.toString());
            };
        },
        12558: (e) => {
            e.exports = {
                root: 'NotificationReloadBlocks_root__qNd_1',
                important: 'NotificationReloadBlocks_important__QsAfb',
                text: 'NotificationReloadBlocks_text__TN_U0',
                icon: 'NotificationReloadBlocks_icon__vVN__',
                button: 'NotificationReloadBlocks_button__uXYiL',
                message: 'NotificationReloadBlocks_message__uQ1hC',
            };
        },
        20717: (e) => {
            e.exports = {
                root: 'LabelAlbumsPage_root__xyWi4',
                scrollContainer: 'LabelAlbumsPage_scrollContainer__zRUlM',
                important: 'LabelAlbumsPage_important__s18oL',
                shimmerScrollContainer: 'LabelAlbumsPage_shimmerScrollContainer__v_um_',
                footer: 'LabelAlbumsPage_footer__dcXFk',
                item: 'LabelAlbumsPage_item__Qjz9F',
                content: 'LabelAlbumsPage_content__jOWKZ',
                shimmerTitle: 'LabelAlbumsPage_shimmerTitle__jbYXl',
                shimmerSortDropdown: 'LabelAlbumsPage_shimmerSortDropdown__LKtgF',
            };
        },
        27954: (e, t, r) => {
            'use strict';
            r.d(t, { P: () => s, g: () => a });
            var l = r(74631),
                o = r(36432);
            let s = (0, l.createContext)(null);
            function a() {
                let e = (0, l.useContext)(s);
                if (null === e) throw new o.t('Store cannot be null, please add a context provider', { code: 'E_CONTEXT_STORE_NULL' });
                return e;
            }
        },
        34383: (e) => {
            e.exports = {
                root: 'SortDropdown_root__d1JmQ',
                button: 'SortDropdown_button__SjTI7',
                header: 'SortDropdown_header__kj8yV',
                container: 'SortDropdown_container__dyVF_',
            };
        },
        37114: (e, t, r) => {
            'use strict';
            (r.r(t), r.d(t, { default: () => G }));
            var l = r(25839),
                o = r(84059),
                s = r(74631),
                a = r(82298),
                i = r(88204),
                n = r(39004),
                d = r(61493),
                c = r(71035),
                u = r(4254),
                m = r(78299),
                _ = r(76939),
                h = r(1407),
                g = r(78111),
                x = r(6969),
                b = r(8266),
                N = r(83918),
                S = r(65455),
                f = r(8487),
                v = r(4071),
                A = r(32750),
                C = r(66738),
                R = r(27954),
                j = r(34383),
                p = r.n(j);
            let w = { [g.g.RATING]: (0, l.jsx)(f.A, { id: 'sort.sort-by-rating' }), [g.g.YEAR]: (0, l.jsx)(f.A, { id: 'sort.sort-by-year' }) },
                L = (0, i.PA)((e) => {
                    var t;
                    let { sortModel: r, onSort: o } = e,
                        {
                            settings: { isMobile: a },
                        } = (0, R.g)(),
                        i = (0, c.c)((e) => {
                            (0, S.W)(e.id) && r.sortBy !== e.id && (r.setSortBy(e.id), o());
                        }),
                        n = (0, s.useMemo)(
                            () =>
                                a
                                    ? (0, l.jsx)(v.$, { radius: 'xxxl', className: p().button, icon: (0, l.jsx)(C.I, { variant: 'filter', size: 'xs' }) })
                                    : (0, l.jsxs)(v.$, {
                                          radius: 'xxxl',
                                          className: p().button,
                                          'data-test-id': d.Kq.sort.SORT_DROPDOWN_BUTTON,
                                          children: [
                                              (0, l.jsx)(u.HL, {
                                                  variant: 'span',
                                                  size: 'm',
                                                  weight: 'medium',
                                                  'data-test-id': d.Kq.sort.SORT_DROPDOWN_BUTTON_CAPTION,
                                                  children: r.sortBy ? w[r.sortBy] : (0, l.jsx)(f.A, { id: 'sort.select-filter' }),
                                              }),
                                              (0, l.jsx)(C.I, { size: 'xxs', variant: 'arrowDown', 'data-test-id': d.Kq.sort.SORT_DROPDOWN_BUTTON_ICON }),
                                          ],
                                      }),
                            [a, r.sortBy],
                        );
                    return (0, l.jsx)(A.ms, {
                        placement: a ? 'bottom' : 'top',
                        isMobile: a,
                        strategy: 'fixed',
                        className: p().root,
                        onSelect: i,
                        reference: n,
                        offsetOptions: { mainAxis: 10, crossAxis: -50 },
                        defaultValue: null != (t = r.sortBy) ? t : g.g.YEAR,
                        containerClassName: p().container,
                        header: a ? (0, l.jsx)('div', { className: p().header }) : void 0,
                        'data-test-id': d.Kq.sort.SORT_DROPDOWN,
                        children: Object.values(g.g).map((e) => (0, l.jsx)(A.c$, { id: e, label: w[e], 'data-test-id': d.Kq.sort.SORT_DROPDOWN_ITEM }, e)),
                    });
                });
            var T = r(20258),
                E = r(10322),
                y = r(21784),
                I = r(89192),
                P = r(30716),
                B = r(80499),
                O = r(82706),
                D = r(60678),
                k = r(99401),
                M = r(26076),
                F = r(10603),
                U = r(19412),
                W = r(6968),
                V = r(90250),
                K = r(20717),
                z = r.n(K);
            let X = (0, i.PA)((e) => {
                let { labelId: t, preloadedLabel: r, preloadedAlbums: i, sortBy: f } = e,
                    { id: v, type: A, name: C, albumsSubpage: j, reset: p, isNeededToLoad: w, getData: K, isPublisher: X } = (0, B.s)(O.n.LABEL),
                    {
                        settings: { isMobile: Y },
                    } = (0, R.g)(),
                    { formatMessage: $ } = (0, n.A)(),
                    { contentScrollRef: H, setContentScrollRef: q } = (0, I.g)(),
                    G = (0, y.W)(),
                    Q = X ? $({ id: 'page.label-podcast-header' }, { labelName: C }) : $({ id: 'page.label-albums-header' }, { labelName: C }),
                    J = (0, c.c)((e) => {
                        var r;
                        j.getData({ labelId: Number(t), page: e, pageSize: 20, sortBy: null != (r = j.sort.sortBy) ? r : f });
                    }),
                    Z = (0, c.c)(() => {
                        (j.reset(), J(0));
                    });
                (((e) => {
                    let { sortModel: t } = e,
                        r = (0, N.X)();
                    ((0, s.useLayoutEffect)(() => {
                        let e = new URL(window.location.href).searchParams.get(x.K.SORT);
                        e && (0, S.W)(e) ? t.setSortBy(e) : t.setSortBy(g.g.YEAR);
                    }, [t]),
                        (0, s.useEffect)(() => {
                            if (t.sortBy) {
                                let e = (0, b.b)(x.K.SORT, t.sortBy);
                                e && r(e);
                            }
                        }, [r, t.sortBy]));
                })({ sortModel: j.sort }),
                    (0, D.X)(j.pagesLoader, J),
                    (0, s.useEffect)(
                        () => () => {
                            (p(), j.reset());
                        },
                        [p, j],
                    ),
                    j.isNotFound && (0, o.notFound)(),
                    (0, V.Q)({ id: Number(v), name: null != C ? C : '', type: null != A ? A : '' }, V.T.ALBUMS),
                    (0, P.J)(j.isResolved));
                let ee = (0, s.useMemo)(() => ({ Footer: () => (0, l.jsx)(M.A, { children: (0, l.jsx)(k.w, { className: z().footer }) }) }), []),
                    et = $({ id: 'entity-names.label-albums-list' }),
                    er = [];
                if (j.isNeededToLoad) {
                    var el;
                    let e = j.sort.sortBy === f || void 0 === j.sort.sortBy;
                    er.push(j.getData({ labelId: Number(t), page: 0, pageSize: 20, preloadedAlbums: e ? i : void 0, sortBy: null != (el = j.sort.sortBy) ? el : f }));
                }
                if (
                    (w && er.push(K({ labelId: Number(t), preloadedLabel: r, withLabelEntities: !1 })),
                    er.length && (0, s.use)(Promise.allSettled(er)),
                    j.isRejected && !j.isNotFound)
                )
                    return (0, l.jsx)(m.SomethingWentWrong, {});
                let eo = j.isShimmerVisible ? 20 : j.totalCount;
                return (0, l.jsx)(E.n, {
                    pageId: T._Q.LABEL_ALBUMS,
                    children: (0, l.jsx)(h.h, {
                        scrollElement: H,
                        outerTitle: Q,
                        children: (0, l.jsxs)('div', {
                            className: z().root,
                            'data-test-id': d.Xk.label.LABEL_ALBUMS_PAGE,
                            children: [
                                (0, l.jsxs)(F.Y, {
                                    variant: F.V.TEXT,
                                    withForwardControl: !1,
                                    withBackwardControl: G.canBack,
                                    children: [
                                        (0, l.jsx)(u.DZ, { variant: 'h1', weight: 'bold', size: 'xl', lineClamp: 1, children: Q }),
                                        (0, l.jsx)(L, { sortModel: j.sort, onSort: Z }),
                                    ],
                                }),
                                (0, l.jsx)(W.$, {
                                    className: (0, a.$)(z().scrollContainer, z().important),
                                    listClassName: z().content,
                                    itemClassName: z().item,
                                    customComponents: ee,
                                    itemContentCallback: (e) => {
                                        let t = j.items[e],
                                            r = $({ id: 'loading-messages.entity-is-loading' }, { entityName: $({ id: 'entity-names.album' }) });
                                        return t
                                            ? (0, l.jsx)(_.a, { album: t, contentLinesCount: 4, withAddition: !t.isNonMusic, withLikesCount: t.isNonMusic }, t.id)
                                            : (0, l.jsx)(U.V, { 'aria-label': r, linesCount: 4 });
                                    },
                                    totalCount: eo,
                                    initialItemCount: eo,
                                    onGetDataByPage: J,
                                    pageSize: 20,
                                    totalRequests: j.requestsCount,
                                    handleRef: q,
                                    context: { listAriaLabel: et },
                                    isMobileLayout: Y,
                                    useWindowScroll: Y,
                                }),
                            ],
                        }),
                    }),
                });
            });
            var Y = r(23976),
                $ = r(95772);
            let H = () => {
                let e = (0, y.W)(),
                    { formatMessage: t } = (0, n.A)(),
                    r = t({ id: 'loading-messages.entity-is-loading' }, { entityName: t({ id: 'entity-names.album' }) });
                return (0, l.jsx)(h.h, {
                    scrollElement: null,
                    children: (0, l.jsxs)('div', {
                        className: z().root,
                        children: [
                            (0, l.jsxs)(F.Y, {
                                variant: F.V.TEXT,
                                withForwardControl: !1,
                                withBackwardControl: e.canBack,
                                children: [
                                    (0, l.jsx)(Y.W, { className: z().shimmerTitle, radius: 'l' }),
                                    (0, l.jsx)(Y.W, { className: z().shimmerSortDropdown, radius: 'xxxl' }),
                                ],
                            }),
                            (0, l.jsx)('div', {
                                className: (0, a.$)(z().scrollContainer, z().important, z().shimmerScrollContainer),
                                children: (0, l.jsx)('div', {
                                    className: z().content,
                                    children: (0, l.jsx)($.e, { isActive: !0, itemClassName: z().item, 'aria-label': r, linesCount: 4, count: 20 }),
                                }),
                            }),
                        ],
                    }),
                });
            };
            var q = r(61288);
            let G = () => {
                let e = (0, o.useSearchParams)().get('labelId');
                return ((e && (0, q.L)(e)) || (0, o.notFound)(), (0, l.jsx)(s.Suspense, { fallback: (0, l.jsx)(H, {}), children: (0, l.jsx)(X, { labelId: e }) }));
            };
        },
        43083: (e, t, r) => {
            Promise.resolve().then(r.bind(r, 37114));
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
        60678: (e, t, r) => {
            'use strict';
            r.d(t, { X: () => c });
            var l = r(25839),
                o = r(74631),
                s = r(71035),
                a = r(1466),
                i = r(91149),
                n = r(92942),
                d = r(36159);
            let c = (e, t) => {
                let { notify: r, dismiss: c } = (0, n.l)(),
                    u = (0, o.useRef)(void 0),
                    m = (0, s.c)(() => {
                        var r;
                        (c({ notificationId: u.current }), (u.current = 0));
                        let l = [...(null != (r = e.lastRejectedPagesList) ? r : [])].reverse().filter((t) => {
                            var r;
                            return (null == (r = e.pageStates) ? void 0 : r[t]) === d.G.REJECT;
                        });
                        (e.resetRejectedPagesState(),
                            l.forEach((e) => {
                                t(e);
                            }));
                    });
                (0, o.useEffect)(() => {
                    e.rejectedPagesCount > 0 && !u.current && (u.current = r((0, l.jsx)(a.L, { reloadBlocks: m }), { containerId: i.u.ERROR, autoClose: !1 }));
                }, [c, m, r, e.rejectedPagesCount]);
            };
        },
        65455: (e, t, r) => {
            'use strict';
            r.d(t, { W: () => o });
            var l = r(78111);
            let o = (e) => !!e && (e === l.g.RATING || e === l.g.YEAR);
        },
        78111: (e, t, r) => {
            'use strict';
            var l;
            (r.d(t, { g: () => l }),
                (function (e) {
                    ((e.RATING = 'rating'), (e.YEAR = 'year'));
                })(l || (l = {})));
        },
        83918: (e, t, r) => {
            'use strict';
            r.d(t, { X: () => o });
            var l = r(74631);
            let o = () =>
                (0, l.useCallback)((e) => {
                    {
                        let t = window.history.state;
                        window.history.replaceState(t, '', e);
                    }
                }, []);
        },
        84e3: (e, t, r) => {
            'use strict';
            r.d(t, { U: () => s });
            var l = r(36484),
                o = r(62562);
            let s = () => (0, o.N)().get(l.Zf);
        },
        95772: (e, t, r) => {
            'use strict';
            r.d(t, { e: () => s });
            var l = r(25839),
                o = r(19412);
            let s = (e) => {
                let {
                    isActive: t,
                    itemClassName: r,
                    round: s,
                    centered: a,
                    withInfo: i,
                    count: n = 10,
                    shimmerClassName: d,
                    linesCount: c,
                    'aria-label': u,
                    withSubcover: m,
                } = e;
                return Array.from(Array(n).keys()).map((e) =>
                    (0, l.jsx)(
                        o.V,
                        { isActive: t, linesCount: c, className: r, round: s, centered: a, withInfo: i, withSubcover: m, 'aria-label': u, shimmerClassName: d },
                        e,
                    ),
                );
            };
        },
    },
    (e) => {
        (e.O(
            0,
            [
                3349, 1676, 7339, 6749, 6287, 2121, 3472, 1107, 7349, 8881, 6706, 1311, 9212, 260, 4512, 9004, 4985, 7839, 7957, 9761, 9479, 1817, 1943, 3257, 1901, 3269,
                4163, 3246, 3482, 6680, 6504, 5329, 8836, 820, 4434, 48, 862, 6361, 5898, 2750, 6237, 4475, 5056, 7358,
            ],
            () => e((e.s = 43083)),
        ),
            (_N_E = e.O()));
    },
]);
