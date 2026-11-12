(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3008],
    {
        568: (e, t, r) => {
            'use strict';
            (r.r(t), r.d(t, { default: () => Q }));
            var l = r(88800),
                o = r(53548),
                s = r(58390),
                a = r(65724),
                i = r(84961),
                n = r(2058),
                d = r(87999),
                c = r(76903),
                u = r(17392),
                m = r(29993),
                _ = r(29504),
                h = r(32596),
                g = r(10079),
                b = r(69630),
                x = r(63565),
                S = r(34303),
                N = r(44440),
                f = r(14912),
                v = r(31661),
                A = r(88969),
                p = r(96817),
                R = r(2288),
                j = r(52300),
                C = r(72288),
                w = r(29645),
                L = r.n(w);
            let y = { [x.g.RATING]: (0, l.jsx)(A.A, { id: 'sort.sort-by-rating' }), [x.g.YEAR]: (0, l.jsx)(A.A, { id: 'sort.sort-by-year' }) },
                T = (0, i.PA)((e) => {
                    var t;
                    let { sortModel: r, onSort: s } = e,
                        {
                            settings: { isMobile: a },
                        } = (0, C.g)(),
                        i = (0, m.c)((e) => {
                            (0, v.W)(e.id) && r.sortBy !== e.id && (r.setSortBy(e.id), s());
                        }),
                        n = (0, o.useMemo)(
                            () =>
                                a
                                    ? (0, l.jsx)(p.$, { radius: 'xxxl', className: L().button, icon: (0, l.jsx)(j.I, { variant: 'filter', size: 'xs' }) })
                                    : (0, l.jsxs)(p.$, {
                                          radius: 'xxxl',
                                          className: L().button,
                                          'data-test-id': u.Kq.sort.SORT_DROPDOWN_BUTTON,
                                          children: [
                                              (0, l.jsx)(_.HL, {
                                                  variant: 'span',
                                                  size: 'm',
                                                  weight: 'medium',
                                                  'data-test-id': u.Kq.sort.SORT_DROPDOWN_BUTTON_CAPTION,
                                                  children: r.sortBy ? y[r.sortBy] : (0, l.jsx)(A.A, { id: 'sort.select-filter' }),
                                              }),
                                              (0, l.jsx)(j.I, { size: 'xxs', variant: 'arrowDown', 'data-test-id': u.Kq.sort.SORT_DROPDOWN_BUTTON_ICON }),
                                          ],
                                      }),
                            [a, r.sortBy],
                        );
                    return (0, l.jsx)(R.ms, {
                        placement: a ? 'bottom' : 'top',
                        isMobile: a,
                        strategy: 'fixed',
                        className: L().root,
                        onSelect: i,
                        reference: n,
                        offsetOptions: { mainAxis: 10, crossAxis: -50 },
                        defaultValue: null != (t = r.sortBy) ? t : x.g.YEAR,
                        containerClassName: L().container,
                        header: a ? (0, l.jsx)('div', { className: L().header }) : void 0,
                        'data-test-id': u.Kq.sort.SORT_DROPDOWN,
                        children: Object.values(x.g).map((e) => (0, l.jsx)(R.c$, { id: e, label: y[e], 'data-test-id': u.Kq.sort.SORT_DROPDOWN_ITEM }, e)),
                    });
                });
            var E = r(98427),
                I = r(46422),
                B = r(44230),
                P = r(37670),
                O = r(34961),
                D = r(53892),
                k = r(54320),
                M = r(86790),
                F = r(60266),
                U = r(93317),
                W = r(37770),
                V = r(79418),
                K = r(64709),
                z = r(29044),
                X = r.n(z);
            let Y = (0, i.PA)((e) => {
                let { labelId: t, preloadedLabel: r, preloadedAlbums: i, sortBy: A } = e,
                    { id: p, type: R, name: j, albumsSubpage: w, reset: L, isNeededToLoad: y, getData: z, isPublisher: Y } = (0, O.s)(D.n.LABEL),
                    {
                        settings: { isMobile: $ },
                    } = (0, C.g)(),
                    { formatMessage: H } = (0, n.A)(),
                    { contentScrollRef: q, setContentScrollRef: G } = (0, B.g)(),
                    Q = (0, I.W)(),
                    J = Y ? H({ id: 'page.label-podcast-header' }, { labelName: j }) : H({ id: 'page.label-albums-header' }, { labelName: j }),
                    Z = (0, m.c)((e) => {
                        var r;
                        w.getData({ labelId: Number(t), page: e, pageSize: 20, sortBy: null != (r = w.sort.sortBy) ? r : A });
                    }),
                    ee = (0, m.c)(() => {
                        (w.reset(), Z(0));
                    });
                (((e) => {
                    let { sortModel: t } = e,
                        r = (0, f.X)();
                    ((0, o.useLayoutEffect)(() => {
                        let e = new URL(window.location.href).searchParams.get(S.K.SORT);
                        e && (0, v.W)(e) ? t.setSortBy(e) : t.setSortBy(x.g.YEAR);
                    }, [t]),
                        (0, o.useEffect)(() => {
                            if (t.sortBy) {
                                let e = (0, N.b)(S.K.SORT, t.sortBy);
                                e && r(e);
                            }
                        }, [r, t.sortBy]));
                })({ sortModel: w.sort }),
                    (0, k.X)(w.pagesLoader, Z),
                    (0, o.useEffect)(
                        () => () => {
                            (L(), w.reset());
                        },
                        [L, w],
                    ),
                    w.isNotFound && (0, s.notFound)(),
                    (0, K.Q)({ id: Number(p), name: null != j ? j : '', type: null != R ? R : '' }, K.T.ALBUMS),
                    (0, P.J)(w.isResolved));
                let et = (0, o.useMemo)(() => ({ Footer: () => (0, l.jsx)(F.A, { children: (0, l.jsx)(M.w, { className: X().footer }) }) }), []),
                    er = H({ id: 'entity-names.label-albums-list' }),
                    el = [];
                if (w.isNeededToLoad) {
                    var eo;
                    let e = w.sort.sortBy === A || void 0 === w.sort.sortBy;
                    el.push(w.getData({ labelId: Number(t), page: 0, pageSize: 20, preloadedAlbums: e ? i : void 0, sortBy: null != (eo = w.sort.sortBy) ? eo : A }));
                }
                if (
                    (y && el.push(z({ labelId: Number(t), preloadedLabel: r, withLabelEntities: !1 })),
                    el.length && (0, o.use)(Promise.allSettled(el)),
                    w.isRejected && !w.isNotFound)
                )
                    return (0, l.jsx)(h.SomethingWentWrong, {});
                let es = w.isShimmerVisible ? 20 : w.totalCount;
                return (0, l.jsx)(c.a, {
                    pageId: d.AppScreen.LabelAlbums,
                    pageIdForFrom: E.b.LABEL_ALBUMS,
                    children: (0, l.jsx)(b.h, {
                        scrollElement: q,
                        outerTitle: J,
                        children: (0, l.jsxs)('div', {
                            className: X().root,
                            'data-test-id': u.Xk.label.LABEL_ALBUMS_PAGE,
                            children: [
                                (0, l.jsxs)(U.Y, {
                                    variant: U.V.TEXT,
                                    withForwardControl: !1,
                                    withBackwardControl: Q.canBack,
                                    children: [
                                        (0, l.jsx)(_.DZ, { variant: 'h1', weight: 'bold', size: 'xl', lineClamp: 1, children: J }),
                                        (0, l.jsx)(T, { sortModel: w.sort, onSort: ee }),
                                    ],
                                }),
                                (0, l.jsx)(V.$, {
                                    className: (0, a.$)(X().scrollContainer, X().important),
                                    listClassName: X().content,
                                    itemClassName: X().item,
                                    customComponents: et,
                                    itemContentCallback: (e) => {
                                        let t = w.items[e],
                                            r = H({ id: 'loading-messages.entity-is-loading' }, { entityName: H({ id: 'entity-names.album' }) });
                                        return t
                                            ? (0, l.jsx)(g.a, { album: t, contentLinesCount: 4, withAddition: !t.isNonMusic, withLikesCount: t.isNonMusic }, t.id)
                                            : (0, l.jsx)(W.V, { 'aria-label': r, linesCount: 4 });
                                    },
                                    totalCount: es,
                                    initialItemCount: es,
                                    onGetDataByPage: Z,
                                    pageSize: 20,
                                    totalRequests: w.requestsCount,
                                    handleRef: G,
                                    context: { listAriaLabel: er },
                                    isMobileLayout: $,
                                    useWindowScroll: $,
                                }),
                            ],
                        }),
                    }),
                });
            });
            var $ = r(19994),
                H = r(1698);
            let q = () => {
                let e = (0, I.W)(),
                    { formatMessage: t } = (0, n.A)(),
                    r = t({ id: 'loading-messages.entity-is-loading' }, { entityName: t({ id: 'entity-names.album' }) });
                return (0, l.jsx)(b.h, {
                    scrollElement: null,
                    children: (0, l.jsxs)('div', {
                        className: X().root,
                        children: [
                            (0, l.jsxs)(U.Y, {
                                variant: U.V.TEXT,
                                withForwardControl: !1,
                                withBackwardControl: e.canBack,
                                children: [
                                    (0, l.jsx)($.W, { className: X().shimmerTitle, radius: 'l' }),
                                    (0, l.jsx)($.W, { className: X().shimmerSortDropdown, radius: 'xxxl' }),
                                ],
                            }),
                            (0, l.jsx)('div', {
                                className: (0, a.$)(X().scrollContainer, X().important, X().shimmerScrollContainer),
                                children: (0, l.jsx)('div', {
                                    className: X().content,
                                    children: (0, l.jsx)(H.e, { isActive: !0, itemClassName: X().item, 'aria-label': r, linesCount: 4, count: 20 }),
                                }),
                            }),
                        ],
                    }),
                });
            };
            var G = r(21438);
            let Q = () => {
                let e = (0, s.useSearchParams)().get('labelId');
                return ((e && (0, G.L)(e)) || (0, s.notFound)(), (0, l.jsx)(o.Suspense, { fallback: (0, l.jsx)(q, {}), children: (0, l.jsx)(Y, { labelId: e }) }));
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
        69831: (e, t, r) => {
            Promise.resolve().then(r.bind(r, 568));
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
                            totalCount: S,
                            totalRequests: N,
                            debounceDurationInMs: f,
                            initialItemCount: v,
                            minInitialItemCount: A = 20,
                            handleRef: p,
                            alwaysShowScrollbar: R = !1,
                            testId: j,
                            isMobileLayout: C = !1,
                            shouldTriggerRangeChangedOn: w,
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
                            return C
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
                        }, [r, N, C]),
                        B = v ? Math.min(v, A) : void 0;
                    return (0, l.jsxs)('div', {
                        className: (0, o.$)(c().root, { [c().root_scrolling]: y || R, [c().root_notScrolling]: !y && !R }, t),
                        'data-test-id': j,
                        children: [
                            C && (null == r ? void 0 : r.Header) && r.Header(),
                            (0, l.jsx)(g, {
                                overscan: b,
                                components: I,
                                listClassName: h,
                                itemClassName: u,
                                isScrolling: E,
                                itemContent: _,
                                scrollerRef: p,
                                totalCount: S,
                                pageSize: x,
                                onPageHandler: i,
                                onRangeHandler: d,
                                debounceDurationInMs: f,
                                initialItemCount: B,
                                shouldTriggerRangeChangedOn: w,
                                ...L,
                            }),
                            C && (null == r ? void 0 : r.Footer) && r.Footer(),
                        ],
                    });
                };
        },
    },
    (e) => {
        (e.O(
            0,
            [
                4700, 7908, 3248, 5038, 7065, 1147, 4555, 1191, 7072, 8655, 2691, 949, 6706, 4771, 1311, 8832, 6904, 4495, 2058, 3578, 8628, 4975, 4827, 8283, 1800, 5151,
                6088, 4732, 9087, 3979, 1928, 9091, 9124, 900, 9934, 2470, 7670, 4441, 9337, 2088, 79, 2288, 3470, 763, 2670, 7358,
            ],
            () => e((e.s = 69831)),
        ),
            (_N_E = e.O()));
    },
]);
