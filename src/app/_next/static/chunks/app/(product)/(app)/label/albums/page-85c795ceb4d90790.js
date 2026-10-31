(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3008],
    {
        568: (e, t, r) => {
            'use strict';
            (r.r(t), r.d(t, { default: () => G }));
            var l = r(88800),
                o = r(53548),
                s = r(58390),
                a = r(65724),
                i = r(84961),
                n = r(2058),
                d = r(17392),
                c = r(29993),
                u = r(29504),
                m = r(32596),
                _ = r(10079),
                h = r(69630),
                g = r(63565),
                b = r(34303),
                x = r(44440),
                f = r(14912),
                N = r(31661),
                S = r(88969),
                v = r(96817),
                A = r(2288),
                R = r(52300),
                j = r(72288),
                p = r(29645),
                w = r.n(p);
            let C = { [g.g.RATING]: (0, l.jsx)(S.A, { id: 'sort.sort-by-rating' }), [g.g.YEAR]: (0, l.jsx)(S.A, { id: 'sort.sort-by-year' }) },
                L = (0, i.PA)((e) => {
                    var t;
                    let { sortModel: r, onSort: s } = e,
                        {
                            settings: { isMobile: a },
                        } = (0, j.g)(),
                        i = (0, c.c)((e) => {
                            (0, N.W)(e.id) && r.sortBy !== e.id && (r.setSortBy(e.id), s());
                        }),
                        n = (0, o.useMemo)(
                            () =>
                                a
                                    ? (0, l.jsx)(v.$, { radius: 'xxxl', className: w().button, icon: (0, l.jsx)(R.I, { variant: 'filter', size: 'xs' }) })
                                    : (0, l.jsxs)(v.$, {
                                          radius: 'xxxl',
                                          className: w().button,
                                          'data-test-id': d.Kq.sort.SORT_DROPDOWN_BUTTON,
                                          children: [
                                              (0, l.jsx)(u.HL, {
                                                  variant: 'span',
                                                  size: 'm',
                                                  weight: 'medium',
                                                  'data-test-id': d.Kq.sort.SORT_DROPDOWN_BUTTON_CAPTION,
                                                  children: r.sortBy ? C[r.sortBy] : (0, l.jsx)(S.A, { id: 'sort.select-filter' }),
                                              }),
                                              (0, l.jsx)(R.I, { size: 'xxs', variant: 'arrowDown', 'data-test-id': d.Kq.sort.SORT_DROPDOWN_BUTTON_ICON }),
                                          ],
                                      }),
                            [a, r.sortBy],
                        );
                    return (0, l.jsx)(A.ms, {
                        placement: a ? 'bottom' : 'top',
                        isMobile: a,
                        strategy: 'fixed',
                        className: w().root,
                        onSelect: i,
                        reference: n,
                        offsetOptions: { mainAxis: 10, crossAxis: -50 },
                        defaultValue: null != (t = r.sortBy) ? t : g.g.YEAR,
                        containerClassName: w().container,
                        header: a ? (0, l.jsx)('div', { className: w().header }) : void 0,
                        'data-test-id': d.Kq.sort.SORT_DROPDOWN,
                        children: Object.values(g.g).map((e) => (0, l.jsx)(A.c$, { id: e, label: C[e], 'data-test-id': d.Kq.sort.SORT_DROPDOWN_ITEM }, e)),
                    });
                });
            var y = r(12816),
                T = r(59844),
                E = r(46422),
                I = r(44230),
                B = r(37670),
                P = r(34961),
                O = r(53892),
                D = r(54320),
                k = r(86790),
                M = r(60266),
                F = r(93317),
                U = r(37770),
                W = r(79418),
                V = r(64709),
                K = r(29044),
                z = r.n(K);
            let X = (0, i.PA)((e) => {
                let { labelId: t, preloadedLabel: r, preloadedAlbums: i, sortBy: S } = e,
                    { id: v, type: A, name: R, albumsSubpage: p, reset: w, isNeededToLoad: C, getData: K, isPublisher: X } = (0, P.s)(O.n.LABEL),
                    {
                        settings: { isMobile: Y },
                    } = (0, j.g)(),
                    { formatMessage: $ } = (0, n.A)(),
                    { contentScrollRef: H, setContentScrollRef: q } = (0, I.g)(),
                    G = (0, E.W)(),
                    Q = X ? $({ id: 'page.label-podcast-header' }, { labelName: R }) : $({ id: 'page.label-albums-header' }, { labelName: R }),
                    J = (0, c.c)((e) => {
                        var r;
                        p.getData({ labelId: Number(t), page: e, pageSize: 20, sortBy: null != (r = p.sort.sortBy) ? r : S });
                    }),
                    Z = (0, c.c)(() => {
                        (p.reset(), J(0));
                    });
                (((e) => {
                    let { sortModel: t } = e,
                        r = (0, f.X)();
                    ((0, o.useLayoutEffect)(() => {
                        let e = new URL(window.location.href).searchParams.get(b.K.SORT);
                        e && (0, N.W)(e) ? t.setSortBy(e) : t.setSortBy(g.g.YEAR);
                    }, [t]),
                        (0, o.useEffect)(() => {
                            if (t.sortBy) {
                                let e = (0, x.b)(b.K.SORT, t.sortBy);
                                e && r(e);
                            }
                        }, [r, t.sortBy]));
                })({ sortModel: p.sort }),
                    (0, D.X)(p.pagesLoader, J),
                    (0, o.useEffect)(
                        () => () => {
                            (w(), p.reset());
                        },
                        [w, p],
                    ),
                    p.isNotFound && (0, s.notFound)(),
                    (0, V.Q)({ id: Number(v), name: null != R ? R : '', type: null != A ? A : '' }, V.T.ALBUMS),
                    (0, B.J)(p.isResolved));
                let ee = (0, o.useMemo)(() => ({ Footer: () => (0, l.jsx)(M.A, { children: (0, l.jsx)(k.w, { className: z().footer }) }) }), []),
                    et = $({ id: 'entity-names.label-albums-list' }),
                    er = [];
                if (p.isNeededToLoad) {
                    var el;
                    let e = p.sort.sortBy === S || void 0 === p.sort.sortBy;
                    er.push(p.getData({ labelId: Number(t), page: 0, pageSize: 20, preloadedAlbums: e ? i : void 0, sortBy: null != (el = p.sort.sortBy) ? el : S }));
                }
                if (
                    (C && er.push(K({ labelId: Number(t), preloadedLabel: r, withLabelEntities: !1 })),
                    er.length && (0, o.use)(Promise.allSettled(er)),
                    p.isRejected && !p.isNotFound)
                )
                    return (0, l.jsx)(m.SomethingWentWrong, {});
                let eo = p.isShimmerVisible ? 20 : p.totalCount;
                return (0, l.jsx)(T.n, {
                    pageId: y._Q.LABEL_ALBUMS,
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
                                        (0, l.jsx)(L, { sortModel: p.sort, onSort: Z }),
                                    ],
                                }),
                                (0, l.jsx)(W.$, {
                                    className: (0, a.$)(z().scrollContainer, z().important),
                                    listClassName: z().content,
                                    itemClassName: z().item,
                                    customComponents: ee,
                                    itemContentCallback: (e) => {
                                        let t = p.items[e],
                                            r = $({ id: 'loading-messages.entity-is-loading' }, { entityName: $({ id: 'entity-names.album' }) });
                                        return t
                                            ? (0, l.jsx)(_.a, { album: t, contentLinesCount: 4, withAddition: !t.isNonMusic, withLikesCount: t.isNonMusic }, t.id)
                                            : (0, l.jsx)(U.V, { 'aria-label': r, linesCount: 4 });
                                    },
                                    totalCount: eo,
                                    initialItemCount: eo,
                                    onGetDataByPage: J,
                                    pageSize: 20,
                                    totalRequests: p.requestsCount,
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
            var Y = r(19994),
                $ = r(1698);
            let H = () => {
                let e = (0, E.W)(),
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
            var q = r(21438);
            let G = () => {
                let e = (0, s.useSearchParams)().get('labelId');
                return ((e && (0, q.L)(e)) || (0, s.notFound)(), (0, l.jsx)(o.Suspense, { fallback: (0, l.jsx)(H, {}), children: (0, l.jsx)(X, { labelId: e }) }));
            };
        },
        1698: (e, t, r) => {
            'use strict';
            r.d(t, { e: () => s });
            var l = r(88800),
                o = r(37770);
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
        4044: (e) => {
            e.exports = {
                root: 'NotificationReloadBlocks_root__qNd_1',
                important: 'NotificationReloadBlocks_important__QsAfb',
                text: 'NotificationReloadBlocks_text__TN_U0',
                icon: 'NotificationReloadBlocks_icon__vVN__',
                button: 'NotificationReloadBlocks_button__uXYiL',
                message: 'NotificationReloadBlocks_message__uQ1hC',
            };
        },
        9492: (e, t, r) => {
            'use strict';
            r.d(t, { L: () => h });
            var l = r(88800),
                o = r(65724),
                s = r(53548),
                a = r(2058),
                i = r(88969),
                n = r(96817),
                d = r(52300),
                c = r(29504),
                u = r(59304),
                m = r(4044),
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
        14912: (e, t, r) => {
            'use strict';
            r.d(t, { X: () => o });
            var l = r(53548);
            let o = () =>
                (0, l.useCallback)((e) => {
                    {
                        let t = window.history.state;
                        window.history.replaceState(t, '', e);
                    }
                }, []);
        },
        16434: (e) => {
            e.exports = {
                root: 'VirtualScroll_root__pCptn',
                root_scrolling: 'VirtualScroll_root_scrolling__dsQ6K',
                root_notScrolling: 'VirtualScroll_root_notScrolling__x4qdd',
                scroller_withFooter: 'VirtualScroll_scroller_withFooter__ntDaU',
                scroller_withHeader: 'VirtualScroll_scroller_withHeader__9yzCK',
                scroller_withForceScroll: 'VirtualScroll_scroller_withForceScroll__w7q1L',
            };
        },
        29044: (e) => {
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
        29645: (e) => {
            e.exports = {
                root: 'SortDropdown_root__d1JmQ',
                button: 'SortDropdown_button__SjTI7',
                header: 'SortDropdown_header__kj8yV',
                container: 'SortDropdown_container__dyVF_',
            };
        },
        31661: (e, t, r) => {
            'use strict';
            r.d(t, { W: () => o });
            var l = r(63565);
            let o = (e) => !!e && (e === l.g.RATING || e === l.g.YEAR);
        },
        34303: (e, t, r) => {
            'use strict';
            r.d(t, { K: () => l });
            var l = (function (e) {
                return (
                    (e.TAB = 'tab'),
                    (e.URL = 'url'),
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
        44440: (e, t, r) => {
            'use strict';
            r.d(t, { b: () => l });
            let l = (e, t) => {
                let r = new URL(window.location.href),
                    l = r.searchParams;
                return (l.set(e, t), (r.search = l.toString()), r.toString());
            };
        },
        54320: (e, t, r) => {
            'use strict';
            r.d(t, { X: () => c });
            var l = r(88800),
                o = r(53548),
                s = r(29993),
                a = r(9492),
                i = r(29595),
                n = r(74965),
                d = r(74773);
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
        63565: (e, t, r) => {
            'use strict';
            var l;
            (r.d(t, { g: () => l }),
                (function (e) {
                    ((e.RATING = 'rating'), (e.YEAR = 'year'));
                })(l || (l = {})));
        },
        65523: (e, t, r) => {
            'use strict';
            r.d(t, { U: () => i });
            var l = r(4086),
                o = r(41928),
                s = r(44084);
            let a = new WeakMap(),
                i = () =>
                    ((e) => {
                        if (e instanceof s.r) return e;
                        let t = a.get(e);
                        if (t) return t;
                        let r = {
                            log: (t, r) => e.info(t, r),
                            trace: (t, r) => e.trace(t, r),
                            debug: (t, r) => e.debug(t, r),
                            info: (t, r) => e.info(t, r),
                            warn: (t, r) => e.warn(t, r),
                            error: (t, r) => e.error(t, r),
                            fatal: (t, r) => e.fatal(t, r),
                            child: (t) => e.child(t),
                        };
                        return (a.set(e, r), r);
                    })((0, o.N)().get(l.Zf));
        },
        79418: (e, t, r) => {
            'use strict';
            r.d(t, { $: () => b });
            var l = r(88800),
                o = r(65724),
                s = r(61013),
                a = r(53548);
            let i = (e) => {
                    let { style: t, forwardRef: r, context: o, ...s } = e,
                        a = (null == o ? void 0 : o.listAriaLabel) || void 0,
                        i = (null == o ? void 0 : o.listRole) || 'region';
                    return (0, l.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: i, 'aria-label': a, style: { ...t }, ref: r, ...s });
                },
                n = (0, a.forwardRef)((e, t) => (0, l.jsx)(i, { forwardRef: t, ...e }));
            var d = r(16434),
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
            var _ = r(55482),
                h = r(75151);
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
                        b = (0, a.useMemo)(
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
                        n.length > 0 && m && b(m);
                    }, n);
                    let x = (0, a.useMemo)(() => {
                        if (d)
                            return (0, _.A)((e) => {
                                d(e);
                            }, s);
                    }, [d, s]);
                    return (0, l.jsx)(h.sN, { ref: c, rangeChanged: b, totalCount: i, endReached: x, ...u });
                },
                b = (e) => {
                    let {
                            className: t,
                            customComponents: r,
                            onGetDataByPage: i,
                            onGetDataByRange: d,
                            itemClassName: u,
                            itemContentCallback: _,
                            listClassName: h,
                            overscan: b = 700,
                            pageSize: x = 20,
                            totalCount: f,
                            totalRequests: N,
                            debounceDurationInMs: S,
                            initialItemCount: v,
                            minInitialItemCount: A = 20,
                            handleRef: R,
                            alwaysShowScrollbar: j = !1,
                            testId: p,
                            isMobileLayout: w = !1,
                            shouldTriggerRangeChangedOn: C,
                            ...L
                        } = e,
                        [y, T] = (0, a.useState)(!1),
                        E = (0, a.useMemo)(
                            () =>
                                (0, s.A)((e) => {
                                    T(e);
                                }, 100),
                            [],
                        ),
                        I = (0, a.useMemo)(() => {
                            var e, t;
                            return w
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
                        }, [r, N, w]),
                        B = v ? Math.min(v, A) : void 0;
                    return (0, l.jsxs)('div', {
                        className: (0, o.$)(c().root, { [c().root_scrolling]: y || j, [c().root_notScrolling]: !y && !j }, t),
                        'data-test-id': p,
                        children: [
                            w && (null == r ? void 0 : r.Header) && r.Header(),
                            (0, l.jsx)(g, {
                                overscan: b,
                                components: I,
                                listClassName: h,
                                itemClassName: u,
                                isScrolling: E,
                                itemContent: _,
                                scrollerRef: R,
                                totalCount: f,
                                pageSize: x,
                                onPageHandler: i,
                                onRangeHandler: d,
                                debounceDurationInMs: S,
                                initialItemCount: B,
                                shouldTriggerRangeChangedOn: C,
                                ...L,
                            }),
                            w && (null == r ? void 0 : r.Footer) && r.Footer(),
                        ],
                    });
                };
        },
        84608: (e, t, r) => {
            Promise.resolve().then(r.bind(r, 568));
        },
    },
    (e) => {
        (e.O(
            0,
            [
                8752, 7435, 5108, 8380, 127, 1931, 1191, 7617, 3637, 949, 6706, 4771, 1311, 8832, 6904, 5977, 2058, 2881, 8628, 9693, 6326, 8283, 2824, 5151, 3862, 4732,
                1195, 1598, 1928, 7627, 9124, 7967, 900, 9934, 6387, 4561, 9337, 4613, 3724, 2288, 3470, 763, 2670, 7358,
            ],
            () => e((e.s = 84608)),
        ),
            (_N_E = e.O()));
    },
]);
