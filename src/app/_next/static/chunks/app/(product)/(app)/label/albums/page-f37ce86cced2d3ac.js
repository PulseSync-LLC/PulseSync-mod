(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3008],
    {
        3187: (e, t, r) => {
            'use strict';
            r.r(t), r.d(t, { default: () => G });
            var l = r(32290),
                o = r(21916),
                s = r(55178),
                a = r(63618),
                i = r(96103),
                n = r(60900),
                d = r(21732),
                c = r(91027),
                u = r(71926),
                m = r(64170),
                _ = r(24170),
                h = r(7999),
                g = r(37215),
                x = r(97201),
                b = r(31266),
                v = r(71670),
                N = r(4359),
                S = r(39407),
                f = r(63423),
                R = r(56758),
                C = r(82586),
                j = r(57594),
                p = r(24159),
                A = r.n(p);
            let w = { [g.g.RATING]: (0, l.jsx)(S.A, { id: 'sort.sort-by-rating' }), [g.g.YEAR]: (0, l.jsx)(S.A, { id: 'sort.sort-by-year' }) },
                I = (0, i.PA)((e) => {
                    var t;
                    let { sortModel: r, onSort: o } = e,
                        {
                            settings: { isMobile: a },
                        } = (0, j.g)(),
                        i = (0, c.c)((e) => {
                            (0, N.W)(e.id) && r.sortBy !== e.id && (r.setSortBy(e.id), o());
                        }),
                        n = (0, s.useMemo)(
                            () =>
                                a
                                    ? (0, l.jsx)(f.$, { radius: 'xxxl', className: A().button, icon: (0, l.jsx)(C.I, { variant: 'filter', size: 'xs' }) })
                                    : (0, l.jsxs)(f.$, {
                                          radius: 'xxxl',
                                          className: A().button,
                                          'data-test-id': d.Kq.sort.SORT_DROPDOWN_BUTTON,
                                          children: [
                                              (0, l.jsx)(u.HL, {
                                                  variant: 'span',
                                                  size: 'm',
                                                  weight: 'medium',
                                                  'data-test-id': d.Kq.sort.SORT_DROPDOWN_BUTTON_CAPTION,
                                                  children: r.sortBy ? w[r.sortBy] : (0, l.jsx)(S.A, { id: 'sort.select-filter' }),
                                              }),
                                              (0, l.jsx)(C.I, { size: 'xxs', variant: 'arrowDown', 'data-test-id': d.Kq.sort.SORT_DROPDOWN_BUTTON_ICON }),
                                          ],
                                      }),
                            [a, r.sortBy],
                        );
                    return (0, l.jsx)(R.ms, {
                        placement: a ? 'bottom' : 'top',
                        isMobile: a,
                        strategy: 'fixed',
                        className: A().root,
                        onSelect: i,
                        reference: n,
                        offsetOptions: { mainAxis: 10, crossAxis: -50 },
                        defaultValue: null != (t = r.sortBy) ? t : g.g.YEAR,
                        containerClassName: A().container,
                        header: a ? (0, l.jsx)('div', { className: A().header }) : void 0,
                        'data-test-id': d.Kq.sort.SORT_DROPDOWN,
                        children: Object.values(g.g).map((e) => (0, l.jsx)(R.c$, { id: e, label: w[e], 'data-test-id': d.Kq.sort.SORT_DROPDOWN_ITEM }, e)),
                    });
                });
            var L = r(48922),
                T = r(22714),
                E = r(83808),
                y = r(83920),
                B = r(3796),
                P = r(49259),
                O = r(45066),
                D = r(11262),
                k = r(58054),
                M = r(32468),
                F = r(74694),
                V = r(89020),
                U = r(45257),
                W = r(29973),
                K = r(77546),
                z = r.n(K);
            let X = (0, i.PA)((e) => {
                let { labelId: t, preloadedLabel: r, preloadedAlbums: i, sortBy: S } = e,
                    { id: f, type: R, name: C, albumsSubpage: p, reset: A, isNeededToLoad: w, getData: K, isPublisher: X } = (0, P.s)(O.n.LABEL),
                    {
                        settings: { isMobile: $ },
                    } = (0, j.g)(),
                    { formatMessage: H } = (0, n.A)(),
                    { contentScrollRef: Y, setContentScrollRef: q } = (0, y.g)(),
                    G = (0, E.W)(),
                    Q = X ? H({ id: 'page.label-podcast-header' }, { labelName: C }) : H({ id: 'page.label-albums-header' }, { labelName: C }),
                    J = (0, c.c)((e) => {
                        var r;
                        p.getData({ labelId: Number(t), page: e, pageSize: 20, sortBy: null != (r = p.sort.sortBy) ? r : S });
                    }),
                    Z = (0, c.c)(() => {
                        p.reset(), J(0);
                    });
                ((e) => {
                    let { sortModel: t } = e,
                        r = (0, v.X)();
                    (0, s.useLayoutEffect)(() => {
                        let e = new URL(window.location.href).searchParams.get(x.K.SORT);
                        e && (0, N.W)(e) ? t.setSortBy(e) : t.setSortBy(g.g.YEAR);
                    }, [t]),
                        (0, s.useEffect)(() => {
                            if (t.sortBy) {
                                let e = (0, b.b)(x.K.SORT, t.sortBy);
                                e && r(e);
                            }
                        }, [r, t.sortBy]);
                })({ sortModel: p.sort }),
                    (0, D.X)(p.pagesLoader, J),
                    (0, s.useEffect)(
                        () => () => {
                            A(), p.reset();
                        },
                        [A, p],
                    ),
                    p.isNotFound && (0, o.notFound)(),
                    (0, W.Q)({ id: Number(f), name: null != C ? C : '', type: null != R ? R : '' }, W.T.ALBUMS),
                    (0, B.J)(p.isResolved);
                let ee = (0, s.useMemo)(() => ({ Footer: () => (0, l.jsx)(M.A, { children: (0, l.jsx)(k.w, { className: z().footer }) }) }), []),
                    et = H({ id: 'entity-names.label-albums-list' }),
                    er = [];
                if (p.isNeededToLoad) {
                    var el;
                    let e = p.sort.sortBy === S || void 0 === p.sort.sortBy;
                    er.push(p.getData({ labelId: Number(t), page: 0, pageSize: 20, preloadedAlbums: e ? i : void 0, sortBy: null != (el = p.sort.sortBy) ? el : S }));
                }
                if (
                    (w && er.push(K({ labelId: Number(t), preloadedLabel: r, withLabelEntities: !1 })),
                    er.length && (0, s.use)(Promise.allSettled(er)),
                    p.isRejected && !p.isNotFound)
                )
                    return (0, l.jsx)(m.SomethingWentWrong, {});
                let eo = p.isShimmerVisible ? 20 : p.totalCount;
                return (0, l.jsx)(T.n, {
                    pageId: L._Q.LABEL_ALBUMS,
                    children: (0, l.jsx)(h.h, {
                        scrollElement: Y,
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
                                        (0, l.jsx)(I, { sortModel: p.sort, onSort: Z }),
                                    ],
                                }),
                                (0, l.jsx)(U.$, {
                                    className: (0, a.$)(z().scrollContainer, z().important),
                                    listClassName: z().content,
                                    itemClassName: z().item,
                                    customComponents: ee,
                                    itemContentCallback: (e) => {
                                        let t = p.items[e],
                                            r = H({ id: 'loading-messages.entity-is-loading' }, { entityName: H({ id: 'entity-names.album' }) });
                                        return t
                                            ? (0, l.jsx)(_.a, { album: t, contentLinesCount: 4, withAddition: !t.isNonMusic, withLikesCount: t.isNonMusic }, t.id)
                                            : (0, l.jsx)(V.V, { 'aria-label': r, linesCount: 4 });
                                    },
                                    totalCount: eo,
                                    initialItemCount: eo,
                                    onGetDataByPage: J,
                                    pageSize: 20,
                                    totalRequests: p.requestsCount,
                                    handleRef: q,
                                    context: { listAriaLabel: et },
                                    isMobileLayout: $,
                                    useWindowScroll: $,
                                }),
                            ],
                        }),
                    }),
                });
            });
            var $ = r(79856),
                H = r(50308);
            let Y = () => {
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
                                    (0, l.jsx)($.W, { className: z().shimmerTitle, radius: 'l' }),
                                    (0, l.jsx)($.W, { className: z().shimmerSortDropdown, radius: 'xxxl' }),
                                ],
                            }),
                            (0, l.jsx)('div', {
                                className: (0, a.$)(z().scrollContainer, z().important, z().shimmerScrollContainer),
                                children: (0, l.jsx)('div', {
                                    className: z().content,
                                    children: (0, l.jsx)(H.e, { isActive: !0, itemClassName: z().item, 'aria-label': r, linesCount: 4, count: 20 }),
                                }),
                            }),
                        ],
                    }),
                });
            };
            var q = r(17024);
            let G = () => {
                let e = (0, o.useSearchParams)().get('labelId');
                return (e && (0, q.L)(e)) || (0, o.notFound)(), (0, l.jsx)(s.Suspense, { fallback: (0, l.jsx)(Y, {}), children: (0, l.jsx)(X, { labelId: e }) });
            };
        },
        4359: (e, t, r) => {
            'use strict';
            r.d(t, { W: () => o });
            var l = r(37215);
            let o = (e) => !!e && (e === l.g.RATING || e === l.g.YEAR);
        },
        11262: (e, t, r) => {
            'use strict';
            r.d(t, { X: () => c });
            var l = r(32290),
                o = r(55178),
                s = r(91027),
                a = r(71730),
                i = r(45477),
                n = r(75582),
                d = r(49399);
            let c = (e, t) => {
                let { notify: r, dismiss: c } = (0, n.l)(),
                    u = (0, o.useRef)(void 0),
                    m = (0, s.c)(() => {
                        var r;
                        c({ notificationId: u.current }), (u.current = 0);
                        let l = [...(null != (r = e.lastRejectedPagesList) ? r : [])].reverse().filter((t) => {
                            var r;
                            return (null == (r = e.pageStates) ? void 0 : r[t]) === d.G.REJECT;
                        });
                        e.resetRejectedPagesState(),
                            l.forEach((e) => {
                                t(e);
                            });
                    });
                (0, o.useEffect)(() => {
                    e.rejectedPagesCount > 0 && !u.current && (u.current = r((0, l.jsx)(a.L, { reloadBlocks: m }), { containerId: i.u.ERROR, autoClose: !1 }));
                }, [c, m, r, e.rejectedPagesCount]);
            };
        },
        24159: (e) => {
            e.exports = {
                root: 'SortDropdown_root__d1JmQ',
                button: 'SortDropdown_button__SjTI7',
                header: 'SortDropdown_header__kj8yV',
                container: 'SortDropdown_container__dyVF_',
            };
        },
        31266: (e, t, r) => {
            'use strict';
            r.d(t, { b: () => l });
            let l = (e, t) => {
                let r = new URL(window.location.href),
                    l = r.searchParams;
                return l.set(e, t), (r.search = l.toString()), r.toString();
            };
        },
        37215: (e, t, r) => {
            'use strict';
            var l;
            r.d(t, { g: () => l }),
                (function (e) {
                    (e.RATING = 'rating'), (e.YEAR = 'year');
                })(l || (l = {}));
        },
        39684: (e) => {
            e.exports = {
                root: 'VirtualScroll_root__pCptn',
                root_scrolling: 'VirtualScroll_root_scrolling__dsQ6K',
                root_notScrolling: 'VirtualScroll_root_notScrolling__x4qdd',
                scroller_withFooter: 'VirtualScroll_scroller_withFooter__ntDaU',
                scroller_withHeader: 'VirtualScroll_scroller_withHeader__9yzCK',
                scroller_withForceScroll: 'VirtualScroll_scroller_withForceScroll__w7q1L',
            };
        },
        45257: (e, t, r) => {
            'use strict';
            r.d(t, { $: () => x });
            var l = r(32290),
                o = r(63618),
                s = r(8055),
                a = r(55178);
            let i = (e) => {
                    let { style: t, forwardRef: r, context: o, ...s } = e,
                        a = (null == o ? void 0 : o.listAriaLabel) || void 0,
                        i = (null == o ? void 0 : o.listRole) || 'region';
                    return (0, l.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: i, 'aria-label': a, style: { ...t }, ref: r, ...s });
                },
                n = (0, a.forwardRef)((e, t) => (0, l.jsx)(i, { forwardRef: t, ...e }));
            var d = r(39684),
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
            var _ = r(62060),
                h = r(31417);
            let g = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: r,
                            onRangeHandler: o,
                            debounceDurationInMs: s = 100,
                            totalCount: i = 0,
                            shouldTriggerRangeChangedOn: n = [],
                            endReached: d,
                            ...c
                        } = e,
                        [u, m] = (0, a.useState)(null),
                        g = (0, a.useMemo)(
                            () =>
                                (0, _.A)((e) => {
                                    if ((null == o || o(e), n.length > 0 && m(e), t && r)) {
                                        let l = Math.floor(e.endIndex / t) + 1,
                                            o = Math.floor(e.startIndex / t);
                                        for (let e = o; e < l; e++) r(e);
                                    }
                                }, s),
                            [s, o, t, r, n],
                        );
                    (0, a.useEffect)(() => {
                        n.length > 0 && u && g(u);
                    }, n);
                    let x = (0, a.useMemo)(() => {
                        if (d)
                            return (0, _.A)((e) => {
                                d(e);
                            }, s);
                    }, [d, s]);
                    return (0, l.jsx)(h.sN, { rangeChanged: g, totalCount: i, endReached: x, ...c });
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
                            totalCount: v,
                            totalRequests: N,
                            debounceDurationInMs: S,
                            initialItemCount: f,
                            minInitialItemCount: R = 20,
                            handleRef: C,
                            alwaysShowScrollbar: j = !1,
                            testId: p,
                            isMobileLayout: A = !1,
                            shouldTriggerRangeChangedOn: w,
                            ...I
                        } = e,
                        [L, T] = (0, a.useState)(!1),
                        E = (0, a.useMemo)(
                            () =>
                                (0, s.A)((e) => {
                                    T(e);
                                }, 100),
                            [],
                        ),
                        y = (0, a.useMemo)(() => {
                            var e, t;
                            return A
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
                        }, [r, N, A]),
                        B = f ? Math.min(f, R) : void 0;
                    return (0, l.jsxs)('div', {
                        className: (0, o.$)(c().root, { [c().root_scrolling]: L || j, [c().root_notScrolling]: !L && !j }, t),
                        'data-test-id': p,
                        children: [
                            A && (null == r ? void 0 : r.Header) && r.Header(),
                            (0, l.jsx)(g, {
                                overscan: x,
                                components: y,
                                listClassName: h,
                                itemClassName: u,
                                isScrolling: E,
                                itemContent: _,
                                scrollerRef: C,
                                totalCount: v,
                                pageSize: b,
                                onPageHandler: i,
                                onRangeHandler: d,
                                debounceDurationInMs: S,
                                initialItemCount: B,
                                shouldTriggerRangeChangedOn: w,
                                ...I,
                            }),
                            A && (null == r ? void 0 : r.Footer) && r.Footer(),
                        ],
                    });
                };
        },
        50308: (e, t, r) => {
            'use strict';
            r.d(t, { e: () => s });
            var l = r(32290),
                o = r(89020);
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
        57594: (e, t, r) => {
            'use strict';
            r.d(t, { P: () => s, g: () => a });
            var l = r(29222),
                o = r(55178);
            let s = (0, o.createContext)(null);
            function a() {
                let e = (0, o.useContext)(s);
                if (null === e) throw new l.t('Store cannot be null, please add a context provider', { code: 'E_CONTEXT_STORE_NULL' });
                return e;
            }
        },
        70718: (e) => {
            e.exports = {
                root: 'NotificationReloadBlocks_root__qNd_1',
                important: 'NotificationReloadBlocks_important__QsAfb',
                text: 'NotificationReloadBlocks_text__TN_U0',
                icon: 'NotificationReloadBlocks_icon__vVN__',
                button: 'NotificationReloadBlocks_button__uXYiL',
                message: 'NotificationReloadBlocks_message__uQ1hC',
            };
        },
        71670: (e, t, r) => {
            'use strict';
            r.d(t, { X: () => o });
            var l = r(55178);
            let o = () =>
                (0, l.useCallback)((e) => {
                    {
                        let t = window.history.state;
                        window.history.replaceState(t, '', e);
                    }
                }, []);
        },
        71730: (e, t, r) => {
            'use strict';
            r.d(t, { L: () => h });
            var l = r(32290),
                o = r(63618),
                s = r(55178),
                a = r(60900),
                i = r(39407),
                n = r(63423),
                d = r(82586),
                c = r(71926),
                u = r(58534),
                m = r(70718),
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
        77546: (e) => {
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
        85844: (e, t, r) => {
            Promise.resolve().then(r.bind(r, 3187));
        },
        97201: (e, t, r) => {
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
                    (e.MULTIVIBE_INVITE_ROOM_ID = 'multivibeInviteRoomId'),
                    e
                );
            })({});
        },
    },
    (e) => {
        e.O(
            0,
            [
                7034, 5718, 7231, 7972, 6347, 3183, 9763, 6639, 7258, 8817, 6706, 1311, 8892, 2536, 66, 5835, 2812, 8035, 551, 2732, 1410, 1417, 6252, 3266, 6477, 7275,
                2586, 8347, 7702, 6874, 861, 782, 4668, 9740, 1175, 14, 8915, 8816, 2563, 6758, 8828, 4220, 9562, 7358,
            ],
            () => e((e.s = 85844)),
        ),
            (_N_E = e.O());
    },
]);
