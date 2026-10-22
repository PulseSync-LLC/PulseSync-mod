(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4361, 9940],
    {
        8254: (e) => {
            e.exports = {
                icon: 'MainSuspenseLoader_icon__MceTD',
                'animate-pop': 'MainSuspenseLoader_animate-pop__vkpff',
                heartbeat: 'MainSuspenseLoader_heartbeat__6RDpM',
            };
        },
        13624: (e, t, n) => {
            'use strict';
            n.d(t, { default: () => o.a });
            var s = n(68545),
                o = n.n(s);
        },
        16714: (e, t, n) => {
            'use strict';
            n.d(t, { MainSuspenseLoader: () => l });
            var s = n(25839),
                o = n(66738),
                i = n(8254),
                r = n.n(i);
            let l = (e) => {
                let { style: t } = e,
                    n = {
                        display: 'flex',
                        position: 'fixed',
                        insetBlockStart: 0,
                        insetInlineEnd: 0,
                        insetBlockEnd: 0,
                        insetInlineStart: 0,
                        zIndex: 'var(--ym-z-index-loader)',
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'hidden',
                        background: 'var(--ym-background-color-primary-enabled-basic)',
                        ...t,
                    };
                return (0, s.jsx)('div', {
                    style: n,
                    children: (0, s.jsx)(o.I, {
                        variant: 'musicLogo',
                        style: { width: '100%', maxWidth: '100px', color: 'var(--ym-logo-color-primary-variant)' },
                        className: r().icon,
                    }),
                });
            };
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
        32190: (e, t, n) => {
            'use strict';
            n.d(t, { U: () => c });
            var s = n(25839),
                o = n(82298),
                i = n(88204),
                r = n(74631),
                l = n(32942),
                a = n.n(l);
            let c = (0, i.PA)((e) => {
                let { indices: t, virtualItem: n, renderItemByIndex: i, columnClassName: l, className: c, resizeObserver: d, scrollMargin: u } = e,
                    h = (0, r.useRef)(null),
                    m = t[n.index],
                    p = { '--virtual-grid-row-vertical-offset': ''.concat(n.start - u, 'px') };
                return (
                    (0, r.useEffect)(() => {
                        let e = h.current;
                        if (e)
                            return (
                                null == d || d.observe(e),
                                () => {
                                    null == d || d.unobserve(e);
                                }
                            );
                    }, [d]),
                    (0, s.jsx)('div', {
                        'data-index': n.index,
                        ref: h,
                        style: p,
                        className: (0, o.$)(a().root, c),
                        children: null == m ? void 0 : m.map((e) => (0, s.jsx)('div', { className: l, children: i(e) }, ''.concat(n.key, '_').concat(e))),
                    })
                );
            });
        },
        32942: (e) => {
            e.exports = { root: 'VirtualGridRow_root___UfbI' };
        },
        35325: (e) => {
            e.exports = {
                root: 'LocationSelector_root__ZHQJl',
                root_disabled: 'LocationSelector_root_disabled__pvwot',
                icon: 'LocationSelector_icon__4o_En',
                text: 'LocationSelector_text__ZgYJ0',
                shimmer: 'LocationSelector_shimmer__NKWIA',
            };
        },
        39379: (e) => {
            e.exports = {
                item: 'LocationDialogListItem_item__a0z5H',
                itemText: 'LocationDialogListItem_itemText__t5XG5',
                checkIcon: 'LocationDialogListItem_checkIcon__AfJMx',
            };
        },
        40489: (e, t, n) => {
            'use strict';
            n.d(t, { L: () => c });
            var s = n(26508),
                o = n(49656),
                i = n(28631),
                r = n(74631);
            let l = (e) => {
                let { minColumnWidth: t, maxColumnWidth: n, containerWidth: s, totalCount: o, columnGap: i, minColumnCount: r, maxColumnCount: l } = e,
                    a = Math.max(1, Math.floor((s + i) / (t + i))),
                    c = Math.max(r, Math.floor((s + i) / ((n + t) * 0.5 + i)));
                for (let e = r; e <= a; e++) {
                    let o = (s - (e - 1) * i) / e;
                    if (o >= t && o <= n) {
                        c = e;
                        break;
                    }
                }
                return { rowCount: Math.ceil(o / (c = l ? Math.min(c, l) : c)), columnCount: c };
            };
            var a = n(52312);
            let c = (e) => {
                let {
                        count: t,
                        getEstimateRowSize: n,
                        rowGap: c,
                        columnGap: d,
                        minColumnWidth: u,
                        maxColumnWidth: h,
                        minColumnCount: m,
                        maxColumnCount: p,
                        containerRef: f,
                    } = e,
                    { rowCount: _, columnCount: g } = ((e) => {
                        let { containerRef: t, minColumnCount: n, maxColumnWidth: s, minColumnWidth: o, totalCount: a, columnGap: c, maxColumnCount: d } = e,
                            [u, h] = (0, r.useState)({ rowCount: 0, columnCount: 0 }),
                            m = (0, r.useRef)(null),
                            p = (0, r.useMemo)(
                                () =>
                                    (0, i.A)(
                                        (e) => {
                                            h(
                                                l({
                                                    minColumnWidth: o,
                                                    maxColumnWidth: s,
                                                    containerWidth: e.contentRect.width,
                                                    totalCount: a,
                                                    columnGap: c,
                                                    minColumnCount: n,
                                                    maxColumnCount: d,
                                                }),
                                            );
                                        },
                                        100,
                                        { trailing: !0 },
                                    ),
                                [c, d, s, n, o, a],
                            );
                        return (
                            (0, r.useLayoutEffect)(
                                () => (
                                    m.current && m.current.disconnect(),
                                    (m.current = new ResizeObserver((e) => {
                                        e.forEach(p);
                                    })),
                                    t &&
                                        (h(
                                            l({
                                                minColumnWidth: o,
                                                maxColumnWidth: s,
                                                containerWidth: t.getBoundingClientRect().width,
                                                totalCount: a,
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
                                [c, t, p, d, s, n, o, a],
                            ),
                            u
                        );
                    })({ totalCount: t, columnGap: null != d ? d : 0, minColumnCount: m, maxColumnWidth: h, minColumnWidth: u, maxColumnCount: p, containerRef: f }),
                    { virtualizer: b, resizeObserver: C } = (0, a.r)({ count: _, getEstimateSize: n, gap: c, containerRef: f }),
                    v = (0, s.A)(
                        Array.from({ length: t }, (e, t) => t),
                        g,
                    ),
                    x = (0, o.L)(() => {
                        var e, t;
                        if (!b.range) return null;
                        let n = null == (e = v[b.range.startIndex]) ? void 0 : e.at(0),
                            s = null == (t = v[b.range.endIndex]) ? void 0 : t.at(-1);
                        return void 0 !== n && void 0 !== s ? { startIndex: n, endIndex: s } : null;
                    });
                return { virtualizer: b, rowResizeObserver: C, indices: v, columnCount: g, visibleRange: x };
            };
        },
        41341: (e, t, n) => {
            'use strict';
            (n.r(t), n.d(t, { default: () => e$ }));
            var s = n(25839),
                o = n(74631),
                i = n.t(o, 2),
                r = n(88204),
                l = n(39004),
                a = n(8487),
                c = n(59342),
                d = n(84059),
                u = n(44031),
                h = n(61493),
                m = n(97762),
                p = n(71035),
                f = n(68934),
                _ = n(13833),
                g = n(4254),
                b = n(40489),
                C = n(32190),
                v = n(82904),
                x = n(28924),
                E = n(61777),
                S = n(95314),
                y = n(27954),
                T = n(18412),
                O = n(77348),
                j = n.n(O);
            let A = (0, r.PA)(() => {
                let e = (0, o.useId)(),
                    { concerts: t } = (0, y.g)(),
                    { formatMessage: n } = (0, l.A)(),
                    [i, r] = (0, f.d)(),
                    a = (0, E.f)(),
                    c = (0, o.useRef)(!1),
                    d = (0, p.c)(() => {
                        var e;
                        return !t.isShimmerVisible && (null == (e = t.feedConcerts) ? void 0 : e.length) ? t.feedConcerts.length : 50;
                    }),
                    {
                        virtualizer: m,
                        rowResizeObserver: _,
                        columnCount: g,
                        indices: O,
                    } = (0, b.L)({
                        count: d(),
                        rowGap: 32,
                        columnGap: 16,
                        getEstimateRowSize: () => 371,
                        minColumnCount: 2,
                        minColumnWidth: 170,
                        maxColumnWidth: 227,
                        containerRef: i,
                    }),
                    A = { '--feed-concerts-height': ''.concat(m.getTotalSize(), 'px'), '--feed-concerts-column-count': g },
                    I = (0, o.useCallback)(
                        (e) => {
                            var n, o, i;
                            let r = null == (n = t.feedConcerts) ? void 0 : n[e];
                            return !r || t.isShimmerVisible
                                ? (0, s.jsx)(x.L, { isActive: t.isShimmerActive })
                                : (0, s.jsx)(S.B, {
                                      objectType: u.DomainObjectType.Concert,
                                      objectId: r.id,
                                      objectPosX: (e % g) + 1,
                                      objectPosY: Math.floor(e / g) + 1,
                                      objectsCount: null != (i = null == (o = t.feedConcerts) ? void 0 : o.length) ? i : 0,
                                      children: (0, s.jsx)(v.Q, { concert: r }),
                                  });
                        },
                        [g, t.feedConcerts, t.isShimmerActive, t.isShimmerVisible],
                    );
                return (
                    (0, o.useEffect)(() => {
                        t.isResolved && !c.current && (a(), (c.current = !0));
                    }, [t.isResolved, a]),
                    (0, s.jsxs)('div', {
                        className: j().root,
                        'data-test-id': h.e8.concerts.CONCERTS_FEED,
                        children: [
                            (0, s.jsx)(T.T, { className: j().header, labeledForId: e, title: n({ id: 'concerts.all-concerts' }), headingVariant: 'h2' }),
                            (0, s.jsx)('div', {
                                'aria-labelledby': e,
                                ref: r,
                                style: A,
                                className: j().container,
                                children: m
                                    .getVirtualItems()
                                    .map((e) =>
                                        (0, s.jsx)(
                                            C.U,
                                            {
                                                className: j().row,
                                                columnClassName: j().column,
                                                virtualItem: e,
                                                resizeObserver: _,
                                                indices: O,
                                                renderItemByIndex: I,
                                                scrollMargin: m.options.scrollMargin,
                                            },
                                            e.key,
                                        ),
                                    ),
                            }),
                        ],
                    })
                );
            });
            var I = n(44806),
                L = n(73705),
                w = n.n(L),
                M = n(82298),
                R = n(5365),
                N = n(80986),
                k = n(57236),
                z = n.n(k);
            let D = (e) => {
                    let { children: t } = e,
                        n = (0, o.useId)(),
                        i = (0, o.useRef)(null),
                        { formatMessage: r } = (0, l.A)();
                    return (0, s.jsxs)('div', {
                        className: z().root,
                        'data-test-id': h.e8.concerts.CONCERTS_TOP,
                        children: [
                            (0, s.jsx)(T.T, {
                                className: z().header,
                                labeledForId: n,
                                title: r({ id: 'concerts.top-for-you' }),
                                controls: (0, s.jsx)(N.X, { className: z().controls, carouselRef: i }),
                                headingVariant: 'h2',
                            }),
                            (0, s.jsx)(R.F, { className: z().carousel, ref: i, itemClassName: (0, M.$)(z().item, z().important), 'aria-labelledby': n, children: t }),
                        ],
                    });
                },
                P = (e) => Array.from({ length: 10 }, (t, n) => (0, s.jsx)(x.L, { isActive: e, withPriceButton: !0 }, n)),
                W = (0, r.PA)(() => {
                    let { concerts: e, experiments: t } = (0, y.g)(),
                        n = (0, E.f)(),
                        i = (0, o.useRef)(!1),
                        r = t.checkExperiment(I.z.WebNextConcertsIdentityEventType, 'on'),
                        l = (0, o.useMemo)(() => {
                            var t;
                            return (null == (t = e.topConcerts) ? void 0 : t.length) && !e.isShimmerVisible
                                ? e.topConcerts.map((t, n) => {
                                      var o, i;
                                      return (0, s.jsx)(
                                          S.B,
                                          {
                                              objectType: u.DomainObjectType.Concert,
                                              objectId: t.id,
                                              objectPosX: n + 1,
                                              objectPosY: 1,
                                              objectsCount: null != (i = null == (o = e.topConcerts) ? void 0 : o.length) ? i : 0,
                                              children: (0, s.jsx)('div', {
                                                  className: w().concertCard,
                                                  children: (0, s.jsx)(v.Q, { withMask: r, withPriceButton: !0, withInlineMeta: !0, concert: t }),
                                              }),
                                          },
                                          t.getKey(n),
                                      );
                                  })
                                : P(e.isShimmerActive);
                        }, [e.isShimmerActive, e.isShimmerVisible, e.topConcerts, r]);
                    return (
                        (0, o.useEffect)(() => {
                            e.isResolved && !i.current && (n(), (i.current = !0));
                        }, [e.isResolved, n]),
                        e.isNeededToLoad && (0, o.use)(e.getData()),
                        (0, s.jsx)(D, { children: l })
                    );
                }),
                F = () => (0, s.jsx)(o.Suspense, { fallback: (0, s.jsx)(D, { children: P(!0) }), children: (0, s.jsx)(W, {}) });
            var B = n(32113),
                G = n(64715),
                V = n(89257),
                H = n(1407),
                U = n(20258),
                X = n(57138),
                Y = n(57487);
            let K = (e) => {
                let { children: t, offsetBlockPosY: n } = e,
                    i = (0, o.useMemo)(() => ({ offsetBlockPosY: n }), [n]);
                return (0, s.jsx)(Y.E.Provider, { value: i, children: t });
            };
            var $ = n(95858),
                Z = n(10322),
                Q = n(39058),
                q = n(89192),
                J = n(30716),
                ee = n(53712),
                et = n(99401),
                en = n(26076),
                es = n(10603),
                eo = n(91149),
                ei = n(92942),
                er = n(57549),
                el = n(67379),
                ea = n(87277),
                ec = n(59450),
                ed = n(84e3),
                eu = n(4071),
                eh = n(66738),
                em = n(23976),
                ep = n(29481),
                ef = n(49656),
                e_ = n(35622),
                eg = n(71143),
                eb = n.n(eg),
                eC = n(83243),
                ev = {
                    810: (e) => {
                        e.exports = i;
                    },
                },
                ex = {},
                eE = {};
            ((() => {
                (Object.defineProperty(eE, '__esModule', { value: !0 }), (eE.useKeyboardNavigation = void 0));
                let e = (function e(t) {
                    var n = ex[t];
                    if (void 0 !== n) return n.exports;
                    var s = (ex[t] = { exports: {} });
                    return (ev[t](s, s.exports, e), s.exports);
                })(810);
                function t(e, t) {
                    return e.current ? Array.from(t ? e.current.querySelectorAll(t) : e.current.children) : [];
                }
                eE.useKeyboardNavigation = function (n) {
                    let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        { navigationItemsSelector: o, activeAttributeName: i = 'aria-selected' } = s,
                        r = (0, e.useCallback)(
                            (e) => {
                                let s = t(n, o);
                                if (!s.length) return;
                                let i = e.target,
                                    r = s.indexOf(i);
                                if (-1 === r) return;
                                let [l] = s,
                                    a = s.at(-1),
                                    c = null;
                                switch (e.key) {
                                    case 'ArrowLeft':
                                    case 'ArrowUp':
                                        c = s[r - 1] || a;
                                        break;
                                    case 'ArrowRight':
                                    case 'ArrowDown':
                                        c = s[r + 1] || l;
                                        break;
                                    case 'Home':
                                        c = l;
                                        break;
                                    case 'End':
                                        c = a;
                                }
                                null !== c && (c.focus(), e.preventDefault());
                            },
                            [o, n],
                        );
                    ((0, e.useEffect)(() => {
                        let e = n.current;
                        return (null == e || e.addEventListener('keydown', r), () => (null == e ? void 0 : e.removeEventListener('keydown', r)));
                    }, [n, r]),
                        (0, e.useEffect)(() => {
                            t(n, o).forEach((e) => {
                                e.hasAttribute(i) && ('true' === e.getAttribute(i) ? (e.tabIndex = 0) : (e.tabIndex = -1));
                            });
                        }));
                };
            })(),
                eE.__esModule);
            var eS = eE.useKeyboardNavigation,
                ey = n(42966),
                eT = n(52512),
                eO = n(17226),
                ej = n(39379),
                eA = n.n(ej);
            let eI = (e) => {
                let { isSelected: t, onSelect: n, children: o, locationId: i, testId: r } = e,
                    l = (0, ey.m)(),
                    { ref: a, intersectionPropertyId: c } = (0, eT.n)(),
                    d = (0, p.c)(() => {
                        (l({ actionType: u.ActionType.SearchItemSelected }), n(i));
                    }),
                    m = (0, p.c)((e) => {
                        (e.key === eO.v.ENTER || e.key === eO.v.SPACE) && (e.preventDefault(), l({ actionType: u.ActionType.SearchItemSelected }), n(i));
                    });
                return (0, s.jsxs)('li', {
                    ref: a,
                    'data-intersection-property-id': c,
                    className: eA().item,
                    role: 'option',
                    'aria-selected': t,
                    tabIndex: 0,
                    onClick: d,
                    onKeyDown: m,
                    'data-test-id': null != r ? r : h.Xk.concerts.CONCERTS_LOCATION_DIALOG_LIST_ITEM,
                    children: [
                        (0, s.jsx)(g.HL, { className: eA().itemText, variant: 'span', size: 'l', weight: 'medium', children: o }),
                        t && (0, s.jsx)(eh.I, { className: eA().checkIcon, variant: 'check', size: 'xs', 'aria-hidden': 'true' }),
                    ],
                });
            };
            var eL = n(78393),
                ew = n.n(eL);
            let eM = (0, r.PA)((e) => {
                let { showAutoDetect: t, isAutoDetect: n, filteredLocations: i, selectedLocationId: r, onSelectLocation: c, onSelectAutoDetect: d } = e,
                    { formatMessage: m } = (0, l.A)(),
                    p = (0, o.useRef)(null);
                eS(p, { navigationItemsSelector: '[role="option"]' });
                let f = i.length,
                    _ = (0, ef.L)(() => {
                        let e = i.find((e) => e.id === r),
                            t = i.filter((e) => e.id !== r),
                            n = [];
                        return (e && n.push(e), n.push(...t), n);
                    });
                return (0, s.jsx)(X.F, {
                    blockType: u.EntityTypes.LocationList,
                    blockId: u.EntityTypes.LocationList,
                    blockPosX: 1,
                    blockPosY: 2,
                    objectsCount: f,
                    children: (0, s.jsxs)('ul', {
                        ref: p,
                        className: ew().root,
                        role: 'listbox',
                        'aria-label': m({ id: 'concerts.cities-list' }),
                        'data-test-id': h.Xk.concerts.CONCERTS_LOCATION_DIALOG_LIST,
                        children: [
                            t &&
                                (0, s.jsx)(S.B, {
                                    objectType: u.DomainObjectType.LocationAutoDetect,
                                    objectId: u.DomainObjectType.LocationAutoDetect,
                                    objectPosX: 1,
                                    objectPosY: 1,
                                    objectsCount: f,
                                    children: (0, s.jsx)(eI, {
                                        isSelected: n,
                                        onSelect: d,
                                        testId: h.Xk.concerts.CONCERTS_LOCATION_DIALOG_NEARBY_ITEM,
                                        children: (0, s.jsx)(a.A, { id: 'concerts.concerts-nearby' }),
                                    }),
                                }),
                            _.map((e, n) =>
                                (0, s.jsx)(
                                    S.B,
                                    {
                                        objectType: u.DomainObjectType.Location,
                                        objectId: String(e.id),
                                        objectPosX: 1,
                                        objectPosY: t ? n + 2 : n + 1,
                                        objectsCount: f,
                                        children: (0, s.jsx)(eI, { isSelected: e.id === r, onSelect: c, locationId: e.id, children: e.name }),
                                    },
                                    e.id,
                                ),
                            ),
                        ],
                    }),
                });
            });
            var eR = n(79749),
                eN = n.n(eR);
            let ek = (0, r.PA)((e) => {
                let { onClose: t } = e,
                    { concerts: n } = (0, y.g)(),
                    { locationSelection: i } = n,
                    { filteredLocations: r, searchText: l, selectedLocationId: c, isAutoDetect: d } = i,
                    m = !l.trim(),
                    f = m || r.length > 0,
                    _ = (0, p.c)((e) => {
                        void 0 !== e && (i.setSelectedLocation(e), t());
                    }),
                    b = (0, p.c)(() => {
                        (i.setSelectedLocation(null), t());
                    }),
                    C = (0, eC.l)({ mainObjectType: u.DomainObjectType.Location });
                (0, o.useEffect)(
                    () => (
                        C(!0),
                        () => {
                            C(!1);
                        }
                    ),
                    [C],
                );
                let v = (0, ef.L)(() =>
                        (0, s.jsx)(eM, { showAutoDetect: m, isAutoDetect: d, filteredLocations: r, selectedLocationId: c, onSelectLocation: _, onSelectAutoDetect: b }),
                    ),
                    x = (0, ef.L)(() =>
                        (0, s.jsxs)('div', {
                            className: eN().emptyState,
                            'data-test-id': h.Xk.concerts.CONCERTS_LOCATION_DIALOG_EMPTY_STATE,
                            children: [
                                (0, s.jsx)(g.DZ, {
                                    className: eN().emptyStateTitle,
                                    variant: 'h3',
                                    weight: 'bold',
                                    size: 's',
                                    children: (0, s.jsx)(a.A, { id: 'concerts.nothing-found' }),
                                }),
                                (0, s.jsx)(g.HL, {
                                    className: eN().emptyStateSubtitle,
                                    variant: 'span',
                                    size: 'm',
                                    children: (0, s.jsx)(a.A, { id: 'concerts.try-different-query' }),
                                }),
                            ],
                        }),
                    );
                return (0, s.jsx)('div', { className: eN().root, children: f ? v : x });
            });
            var ez = n(56659),
                eD = n(56577),
                eP = n.n(eD);
            let eW = (e) => {
                    let { searchText: t, onChange: n, onReset: o } = e,
                        { formatMessage: i } = (0, l.A)(),
                        { ref: r, intersectionPropertyId: a } = (0, eT.n)();
                    return (0, s.jsx)('div', {
                        ref: r,
                        'data-intersection-property-id': a,
                        className: eP().root,
                        children: (0, s.jsx)(ez.D, {
                            className: eP().searchInput,
                            placeholder: i({ id: 'concerts.find-city' }),
                            initialValue: t,
                            correctedValue: null,
                            onChange: n,
                            onResetClick: o,
                            resetButtonAriaLabel: i({ id: 'interface-actions.reset-search-input' }),
                            withResetButton: !1,
                            autoFocus: !0,
                            innerInputProps: { 'data-test-id': h.Xk.concerts.CONCERTS_LOCATION_DIALOG_SEARCH_INPUT },
                        }),
                    });
                },
                eF = (0, r.PA)((e) => {
                    let { isOpen: t, onClose: n } = e,
                        { formatMessage: i } = (0, l.A)(),
                        {
                            concerts: r,
                            settings: { isMobile: a },
                        } = (0, y.g)(),
                        { locationSelection: c } = r,
                        { searchText: d } = c,
                        m = (0, p.c)((e) => {
                            c.setSearchText(e);
                        }),
                        f = (0, p.c)(() => {
                            c.resetSearchText();
                        }),
                        _ = (0, p.c)((e) => {
                            e || n();
                        });
                    (0, o.useEffect)(() => {
                        t || c.resetSearchText();
                    }, [t, c]);
                    let g = (0, ef.L)(() =>
                            (0, s.jsx)(X.F, {
                                blockType: u.EntityTypes.Search,
                                blockId: u.EntityTypes.Search,
                                blockPosX: 1,
                                blockPosY: 1,
                                objectsCount: 1,
                                children: (0, s.jsx)(S.B, {
                                    objectType: u.DomainObjectType.SearchField,
                                    objectId: u.DomainObjectType.SearchField,
                                    objectPosX: 1,
                                    objectPosY: 1,
                                    objectsCount: 1,
                                    children: (0, s.jsx)(eW, { searchText: d, onChange: m, onReset: f }),
                                }),
                            }),
                        ),
                        b = (0, ef.L)(() => {
                            if (!a)
                                return (0, s.jsx)(eu.$, {
                                    radius: 'round',
                                    color: 'secondary',
                                    size: 'xxs',
                                    icon: (0, s.jsx)(eh.I, { variant: 'close', size: 'xxs' }),
                                    onClick: n,
                                    'aria-label': i({ id: 'interface-actions.close' }),
                                    className: eb().desktopCloseButton,
                                    'data-test-id': h.Xk.concerts.CONCERTS_LOCATION_DIALOG_CLOSE_BUTTON,
                                });
                        });
                    return (0, s.jsx)(e_.a, {
                        open: t,
                        onClose: n,
                        onOpenChange: _,
                        placement: a ? 'default' : 'center',
                        size: a ? 'fullscreen' : 'fitContent',
                        className: eb().root,
                        labelClose: i({ id: 'interface-actions.close' }),
                        closeButtonProps: { className: eb().closeButton, 'data-test-id': h.Xk.concerts.CONCERTS_LOCATION_DIALOG_CLOSE_BUTTON },
                        headerClassName: eb().header,
                        header: g,
                        customCloseButton: b,
                        isMobile: a,
                        enableSwipe: a,
                        overlayColor: a ? 'transparent' : 'full',
                        'data-test-id': h.Xk.concerts.CONCERTS_LOCATION_DIALOG_MODAL,
                        children: t && (0, s.jsx)(ek, { onClose: n }),
                    });
                });
            var eB = n(35325),
                eG = n.n(eB);
            let eV = (0, r.PA)((e) => {
                var t;
                let { className: n } = e,
                    { concerts: o } = (0, y.g)(),
                    { locationSelection: i } = o,
                    r = (0, ep.N)(),
                    l = (0, p.c)(() => {
                        (r({ to: u.AppScreen.ConcertLocationSelector }), i.modal.open());
                    });
                if (i.shouldShowShimmer) return (0, s.jsx)(em.W, { className: (0, M.$)(eG().root, eG().shimmer, n), isActive: !0, radius: 'xxxl' });
                let c = i.hasLocations,
                    d = null != (t = i.selectedLocationName) ? t : (0, s.jsx)(a.A, { id: 'concerts.nearby' });
                return (0, s.jsxs)(s.Fragment, {
                    children: [
                        (0, s.jsx)(eu.$, {
                            className: (0, M.$)(eG().root, n, { [eG().root_disabled]: !c }),
                            variant: 'text',
                            size: 's',
                            icon: (0, s.jsx)(eh.I, { variant: 'arrowDown', size: 'xxxs' }),
                            iconPosition: 'right',
                            iconClassName: eG().icon,
                            withRipple: !1,
                            'aria-live': 'polite',
                            'aria-haspopup': 'dialog',
                            'aria-expanded': i.modal.isOpened,
                            disabled: !c,
                            onClick: l,
                            'data-test-id': h.Xk.concerts.CONCERTS_LOCATION_SELECTOR_BUTTON,
                            children: (0, s.jsx)(g.HL, {
                                className: eG().text,
                                variant: 'span',
                                type: 'controls',
                                size: 'l',
                                weight: 'medium',
                                lineClamp: 1,
                                children: d,
                            }),
                        }),
                        c &&
                            (0, s.jsx)(Z.n, {
                                pageId: U._Q.CONCERT_LOCATION_SELECTOR,
                                pageEntityId: U._Q.CONCERT_LOCATION_SELECTOR,
                                pageStyle: u.PageStyles.Fullscreen,
                                pagePlacement: u.PagePlacements.Fullscreen,
                                children: (0, s.jsx)(eF, { isOpen: i.modal.isOpened, onClose: i.modal.close }),
                            }),
                    ],
                });
            });
            var eH = n(89241),
                eU = n.n(eH);
            let eX = (0, r.PA)(() => {
                var e, t, n, i, r, b, C, v, x;
                let { formatMessage: E } = (0, l.A)(),
                    { setContentScrollRef: T, contentScrollRef: O } = (0, q.g)(),
                    { concerts: j, experiments: L, user: w } = (0, y.g)(),
                    [M, R] = (0, f.d)(),
                    N = (() => {
                        let e = (0, ec.st)(),
                            t = (0, ed.U)(),
                            { hash: n } = (0, ec.gf)();
                        return (0, p.c)((s, o) => {
                            if (!e) return;
                            let i = {
                                    hash: n,
                                    pageId: u.AppScreen.ConcertsLandingScreen,
                                    pageStyle: u.PageStyles.Fullscreen,
                                    pagePlacement: u.PagePlacements.Fullscreen,
                                    viewUuid: o,
                                },
                                r = (0, el.F)({ params: i, logger: t, context: 'useSendEventOnConcertsOpenedOrClosed' });
                            r && (s ? (0, ea.Fn)(e.evgenInstance, r) : (0, ea.PO)(e.evgenInstance, r));
                        });
                    })(),
                    k = (0, o.useRef)(String((0, c.A)())),
                    z = null != (b = null == (e = j.landing.meta) ? void 0 : e.selectedTabIndex) ? b : 0,
                    D = null != (C = null == (n = j.landing.tabs.data) || null == (t = n[z]) ? void 0 : t.blocks.length) ? C : 0;
                (L.checkExperiment(I.z.WebNextConcertsTab, 'on') || (0, d.notFound)(),
                    w.hasPlus || (0, d.redirect)(ee.Z.main.href),
                    (0, o.useEffect)(
                        () => () => {
                            j.resetPageData();
                        },
                        [j],
                    ),
                    j.isLocationSelectionExperimentEnabled && j.locationSelection.isNeededToLoad && (0, o.use)(j.locationSelection.getLocations()),
                    (0, o.useEffect)(() => {
                        let e = k.current;
                        return (
                            N(!0, e),
                            () => {
                                N(!1, e);
                            }
                        );
                    }, [N]),
                    (0, J.J)(j.landing.isResolved),
                    (() => {
                        let e = (0, o.useRef)(1),
                            { concerts: t } = (0, y.g)(),
                            { notify: n } = (0, ei.l)(),
                            { formatMessage: i } = (0, l.A)();
                        (0, o.useEffect)(() => {
                            e && (t.isRejected && n((0, s.jsx)(er.h, { error: i({ id: 'concerts.feed-error' }) }), { containerId: eo.u.ERROR }), e.current--);
                        }, [t.isRejected, i, n]);
                    })());
                let P = (0, p.c)(() => {
                    if (j.landing.isLoaded) return j.landing.getSkeleton({ id: m.p.CONCERTS, showWizard: w.settings.showWizard }, { preloadBlocksCount: 2 });
                });
                return (j.landing.isNeededToLoad && (0, o.use)(j.landing.getSkeleton({ id: m.p.CONCERTS, showWizard: w.settings.showWizard }, { preloadBlocksCount: 2 })),
                j.landing.isRejected)
                    ? (0, s.jsx)(G.SomethingWentWrong, {})
                    : (0, s.jsx)($.j, {
                          children: (0, s.jsxs)(Z.n, {
                              pageId: U._Q.CONCERTS,
                              children: [
                                  (0, s.jsxs)(H.h, {
                                      scrollElement: O,
                                      outerTitle: E({ id: 'entity-names.concerts' }),
                                      headerElement: M,
                                      children: [
                                          (0, s.jsx)(es.Y, { variant: es.V.TEXT, showControls: !1 }),
                                          (0, s.jsxs)(_.N, {
                                              ref: T,
                                              className: eU().root,
                                              containerClassName: eU().container,
                                              'data-test-id': h.Xk.concerts.CONCERTS_PAGE,
                                              children: [
                                                  (0, s.jsxs)('div', {
                                                      className: eU().pageHeader,
                                                      ref: R,
                                                      children: [
                                                          (0, s.jsx)(g.DZ, {
                                                              variant: 'h1',
                                                              weight: 'bold',
                                                              size: 'xl',
                                                              className: eU().pageTitle,
                                                              'data-test-id': h.Xk.concerts.CONCERTS_PAGE_TITLE,
                                                              children: (0, s.jsx)(a.A, { id: 'entity-names.concerts' }),
                                                          }),
                                                          j.isLocationSelectionExperimentEnabled &&
                                                              (0, s.jsx)(Q.h, {
                                                                  tabId: '',
                                                                  tabPos: 0,
                                                                  isTabSelectedByDefault: !1,
                                                                  children: (0, s.jsx)(X.F, {
                                                                      blockId: u.EntityTypes.ConcertTabHeader,
                                                                      blockType: u.EntityTypes.ConcertTabHeader,
                                                                      blockPosX: 1,
                                                                      blockPosY: 1,
                                                                      objectsCount: 1,
                                                                      children: (0, s.jsx)(S.B, {
                                                                          objectType: u.DomainObjectType.Location,
                                                                          objectId: u.DomainObjectType.Location,
                                                                          objectPosX: 1,
                                                                          objectPosY: 1,
                                                                          objectsCount: 1,
                                                                          children: (0, s.jsx)(eV, { className: eU().locationSelector }),
                                                                      }),
                                                                  }),
                                                              }),
                                                      ],
                                                  }),
                                                  (0, s.jsx)(Q.h, {
                                                      tabId: '',
                                                      tabPos: 0,
                                                      isTabSelectedByDefault: !1,
                                                      children: (0, s.jsx)(X.F, {
                                                          blockId: u.EntityTypes.ConcertTabHeader,
                                                          blockType: u.EntityTypes.ConcertTabHeader,
                                                          blockPosX: 1,
                                                          blockPosY: 1,
                                                          objectsCount: null != (v = null == (i = j.topConcerts) ? void 0 : i.length) ? v : 0,
                                                          children: (0, s.jsx)(F, {}),
                                                      }),
                                                  }),
                                                  (0, s.jsx)(K, {
                                                      offsetBlockPosY: 1,
                                                      children: (0, s.jsx)(B.E, {
                                                          landing: j.landing,
                                                          errorComponent: (0, s.jsx)(G.SomethingWentWrong, { withBackwardControl: !1 }),
                                                      }),
                                                  }),
                                                  (0, s.jsx)(Q.h, {
                                                      tabId: '',
                                                      tabPos: 0,
                                                      isTabSelectedByDefault: !1,
                                                      children: (0, s.jsx)(X.F, {
                                                          blockId: u.EntityTypes.ConcertTabFeed,
                                                          blockType: u.EntityTypes.ConcertTabFeed,
                                                          blockPosX: 1,
                                                          blockPosY: D + 2,
                                                          objectsCount: null != (x = null == (r = j.feedConcerts) ? void 0 : r.length) ? x : 0,
                                                          children: (0, s.jsx)(A, {}),
                                                      }),
                                                  }),
                                                  (0, s.jsx)(en.A, { children: (0, s.jsx)(et.w, { className: eU().footer }) }),
                                              ],
                                          }),
                                      ],
                                  }),
                                  (0, s.jsx)(V.p, { onFinishSuccess: P }),
                              ],
                          }),
                      });
            });
            var eY = n(16714);
            let eK = () => (0, s.jsx)(eY.MainSuspenseLoader, { style: { position: 'absolute', background: 'var(--ym-background-color-primary-enabled-content)' } }),
                e$ = () => (0, s.jsx)(o.Suspense, { fallback: (0, s.jsx)(eK, {}), children: (0, s.jsx)(eX, {}) });
        },
        42220: (e, t, n) => {
            'use strict';
            ((t.__ = function (e, t) {
                let n = (0, s.makeMetaParams)(1),
                    o = { ...t, pageId: 'artist_concerts_screen', pageType: 'listing', _meta: n };
                e.trackEvent('ArtistConcerts.Opened', o);
            }),
                (t.pe = function (e, t) {
                    let n = (0, s.makeMetaParams)(1),
                        o = { ...t, pageId: 'artist_concerts_screen', pageType: 'listing', _meta: n };
                    e.trackEvent('ArtistConcerts.Closed', o);
                }),
                (t.Z4 = function (e, t) {
                    let { objectPos: n = 1 } = t,
                        o = (0, s.makeMetaParams)(1),
                        i = { ...t, objectPos: n, pageId: 'artist_concerts_screen', pageType: 'listing', objectType: 'concert', _meta: o };
                    e.trackEvent('ArtistConcerts.Concert.Showed', i);
                }),
                (t.mh = function (e, t) {
                    let { objectPos: n = 1 } = t,
                        o = (0, s.makeMetaParams)(1),
                        i = {
                            ...t,
                            objectPos: n,
                            pageId: 'artist_concerts_screen',
                            pageType: 'listing',
                            objectType: 'concert',
                            from: 'artist_concerts_screen',
                            _meta: o,
                        };
                    e.trackEvent('ArtistConcerts.Concert.Navigated', i);
                }));
            let s = n(96195);
        },
        46450: (e, t) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                !(function (e, t) {
                    for (var n in t) Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
                })(t, {
                    bindSnapshot: function () {
                        return r;
                    },
                    createAsyncLocalStorage: function () {
                        return i;
                    },
                    createSnapshot: function () {
                        return l;
                    },
                }));
            let n = Object.defineProperty(Error('Invariant: AsyncLocalStorage accessed in runtime where it is not available'), '__NEXT_ERROR_CODE', {
                value: 'E504',
                enumerable: !1,
                configurable: !0,
            });
            class s {
                disable() {
                    throw n;
                }
                getStore() {}
                run() {
                    throw n;
                }
                exit() {
                    throw n;
                }
                enterWith() {
                    throw n;
                }
                static bind(e) {
                    return e;
                }
            }
            let o = 'undefined' != typeof globalThis && globalThis.AsyncLocalStorage;
            function i() {
                return o ? new o() : new s();
            }
            function r(e) {
                return o ? o.bind(e) : s.bind(e);
            }
            function l() {
                return o
                    ? o.snapshot()
                    : function (e, ...t) {
                          return e(...t);
                      };
            }
        },
        49971: (e, t, n) => {
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
                n(25839),
                n(71910),
                n(65780),
                n(4865));
        },
        50669: (e, t, n) => {
            Promise.resolve().then(n.bind(n, 41341));
        },
        56577: (e) => {
            e.exports = { root: 'LocationDialogSearchField_root__eYUkc', searchInput: 'LocationDialogSearchField_searchInput__7O9xi' };
        },
        57236: (e) => {
            e.exports = {
                root: 'TopConcertsCarousel_root__opMbb',
                controls: 'TopConcertsCarousel_controls__c92PW',
                header: 'TopConcertsCarousel_header__3h3Zn',
                carousel: 'TopConcertsCarousel_carousel__uMke6',
                item: 'TopConcertsCarousel_item__fz8lR',
                important: 'TopConcertsCarousel_important__ZcT6Z',
            };
        },
        57249: (e, t, n) => {
            'use strict';
            e.exports = n.p + 'static/media/dotlottie-player.98f80c6ff3eca5ba.wasm';
        },
        65343: (e, t, n) => {
            'use strict';
            n.d(t, { l: () => s });
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
        65780: (e, t, n) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'workAsyncStorage', {
                    enumerable: !0,
                    get: function () {
                        return s.workAsyncStorageInstance;
                    },
                }));
            let s = n(90720);
        },
        68545: (e, t, n) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'default', {
                    enumerable: !0,
                    get: function () {
                        return o;
                    },
                }));
            let s = n(20567)._(n(89729));
            function o(e, t) {
                var n;
                let o = {};
                'function' == typeof e && (o.loader = e);
                let i = { ...o, ...t };
                return (0, s.default)({ ...i, modules: null == (n = i.loadableGenerated) ? void 0 : n.modules });
            }
            ('function' == typeof t.default || ('object' == typeof t.default && null !== t.default)) &&
                void 0 === t.default.__esModule &&
                (Object.defineProperty(t.default, '__esModule', { value: !0 }), Object.assign(t.default, t), (e.exports = t.default));
        },
        69394: (e, t, n) => {
            'use strict';
            var s;
            ((t.HB = function (e, t) {
                let { objectsCount: n = 1, objectPosX: s = 1, objectPosY: i = 1 } = t,
                    r = (0, o.makeMetaParams)(2),
                    l = {
                        ...t,
                        objectsCount: n,
                        objectPosX: s,
                        objectPosY: i,
                        pageId: 'artist_screen',
                        pageType: 'object',
                        entityType: 'carousel',
                        entityId: 'concerts',
                        objectsType: 'concert',
                        _meta: r,
                    };
                e.trackEvent('Artist.Concerts.Showed', l);
            }),
                (t.U6 = function (e, t) {
                    let { objectsCount: n = 1, objectPosX: s = 1, objectPosY: i = 1 } = t,
                        r = (0, o.makeMetaParams)(2),
                        l = {
                            ...t,
                            objectsCount: n,
                            objectPosX: s,
                            objectPosY: i,
                            pageId: 'artist_screen',
                            pageType: 'object',
                            entityType: 'carousel',
                            entityId: 'concerts',
                            objectsType: 'concert',
                            from: 'artist_screen',
                            _meta: r,
                        };
                    e.trackEvent('Artist.Concerts.Navigated', l);
                }));
            let o = n(96195);
            (s || (s = {})).ConcertScreen = 'concert_screen';
        },
        71143: (e) => {
            e.exports = {
                root: 'LocationDialog_root__mAfDO',
                closeButton: 'LocationDialog_closeButton__gecsT',
                desktopCloseButton: 'LocationDialog_desktopCloseButton__jzdnV',
                header: 'LocationDialog_header__Se7S8',
            };
        },
        73705: (e) => {
            e.exports = { concertCard: 'TopConcerts_concertCard__h86wP' };
        },
        77348: (e) => {
            e.exports = {
                root: 'FeedConcerts_root__W7OGN',
                header: 'FeedConcerts_header__Ht1xd',
                container: 'FeedConcerts_container__CONvW',
                column: 'FeedConcerts_column__FpMgx',
                row: 'FeedConcerts_row__HEdtn',
            };
        },
        78393: (e) => {
            e.exports = { root: 'LocationDialogList_root__BjLJb' };
        },
        79749: (e) => {
            e.exports = {
                root: 'LocationDialogContent_root__BH0fV',
                emptyState: 'LocationDialogContent_emptyState__HKHWl',
                emptyStateTitle: 'LocationDialogContent_emptyStateTitle__OP1_t',
                emptyStateSubtitle: 'LocationDialogContent_emptyStateSubtitle__SRjAW',
            };
        },
        82572: (e, t, n) => {
            'use strict';
            ((t.TV = function (e, t) {
                let { skeletonId: n = '', mainObjectType: i = o.DomainObjectType.NonApplicable, mainObjectId: r = '' } = t,
                    l = (0, s.makeMetaParams)(1),
                    a = { ...t, skeletonId: n, mainObjectType: i, mainObjectId: r, _meta: l };
                e.trackEvent('Tab.Opened', a);
            }),
                (t.hc = function (e, t) {
                    let { skeletonId: n = '', mainObjectType: i = o.DomainObjectType.NonApplicable, mainObjectId: r = '' } = t,
                        l = (0, s.makeMetaParams)(1),
                        a = { ...t, skeletonId: n, mainObjectType: i, mainObjectId: r, _meta: l };
                    e.trackEvent('Tab.Loaded', a);
                }));
            let s = n(96195),
                o = n(44031);
        },
        84361: (e, t, n) => {
            'use strict';
            n.d(t, { Te: () => S, XW: () => y });
            var s = n(74631),
                o = n(71910);
            function i(e, t, n) {
                let s,
                    o = n.initialDeps ?? [];
                function i() {
                    var i, r, l, a;
                    let c, d;
                    n.key && (null == (i = n.debug) ? void 0 : i.call(n)) && (c = Date.now());
                    let u = e();
                    if (!(u.length !== o.length || u.some((e, t) => o[t] !== e))) return s;
                    if (
                        ((o = u),
                        n.key && (null == (r = n.debug) ? void 0 : r.call(n)) && (d = Date.now()),
                        (s = t(...u)),
                        n.key && (null == (l = n.debug) ? void 0 : l.call(n)))
                    ) {
                        let e = Math.round((Date.now() - c) * 100) / 100,
                            t = Math.round((Date.now() - d) * 100) / 100,
                            s = t / 16,
                            o = (e, t) => {
                                for (e = String(e); e.length < t;) e = ' ' + e;
                                return e;
                            };
                        console.info(
                            `%c⏱ ${o(t, 5)} /${o(e, 5)} ms`,
                            `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * s, 120))}deg 100% 31%);`,
                            null == n ? void 0 : n.key,
                        );
                    }
                    return (null == (a = null == n ? void 0 : n.onChange) || a.call(n, s), s);
                }
                return (
                    (i.updateDeps = (e) => {
                        o = e;
                    }),
                    i
                );
            }
            function r(e, t) {
                if (void 0 !== e) return e;
                throw Error(`Unexpected undefined${t ? `: ${t}` : ''}`);
            }
            let l = (e, t, n) => {
                    let s;
                    return function (...o) {
                        (e.clearTimeout(s), (s = e.setTimeout(() => t.apply(this, o), n)));
                    };
                },
                a = (e) => e,
                c = (e) => {
                    let t = Math.max(e.startIndex - e.overscan, 0),
                        n = Math.min(e.endIndex + e.overscan, e.count - 1),
                        s = [];
                    for (let e = t; e <= n; e++) s.push(e);
                    return s;
                },
                d = (e, t) => {
                    let n = e.scrollElement;
                    if (!n) return;
                    let s = e.targetWindow;
                    if (!s) return;
                    let o = (e) => {
                        let { width: n, height: s } = e;
                        t({ width: Math.round(n), height: Math.round(s) });
                    };
                    if ((o(n.getBoundingClientRect()), !s.ResizeObserver)) return () => {};
                    let i = new s.ResizeObserver((t) => {
                        let s = () => {
                            let e = t[0];
                            if (null == e ? void 0 : e.borderBoxSize) {
                                let t = e.borderBoxSize[0];
                                if (t) return void o({ width: t.inlineSize, height: t.blockSize });
                            }
                            o(n.getBoundingClientRect());
                        };
                        e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(s) : s();
                    });
                    return (
                        i.observe(n, { box: 'border-box' }),
                        () => {
                            i.unobserve(n);
                        }
                    );
                },
                u = { passive: !0 },
                h = (e, t) => {
                    let n = e.scrollElement;
                    if (!n) return;
                    let s = () => {
                        t({ width: n.innerWidth, height: n.innerHeight });
                    };
                    return (
                        s(),
                        n.addEventListener('resize', s, u),
                        () => {
                            n.removeEventListener('resize', s);
                        }
                    );
                },
                m = 'undefined' == typeof window || 'onscrollend' in window,
                p = (e, t) => {
                    let n = e.scrollElement;
                    if (!n) return;
                    let s = e.targetWindow;
                    if (!s) return;
                    let o = 0,
                        i =
                            e.options.useScrollendEvent && m
                                ? () => void 0
                                : l(
                                      s,
                                      () => {
                                          t(o, !1);
                                      },
                                      e.options.isScrollingResetDelay,
                                  ),
                        r = (s) => () => {
                            let { horizontal: r, isRtl: l } = e.options;
                            ((o = r ? n.scrollLeft * ((l && -1) || 1) : n.scrollTop), i(), t(o, s));
                        },
                        a = r(!0),
                        c = r(!1);
                    (c(), n.addEventListener('scroll', a, u));
                    let d = e.options.useScrollendEvent && m;
                    return (
                        d && n.addEventListener('scrollend', c, u),
                        () => {
                            (n.removeEventListener('scroll', a), d && n.removeEventListener('scrollend', c));
                        }
                    );
                },
                f = (e, t) => {
                    let n = e.scrollElement;
                    if (!n) return;
                    let s = e.targetWindow;
                    if (!s) return;
                    let o = 0,
                        i =
                            e.options.useScrollendEvent && m
                                ? () => void 0
                                : l(
                                      s,
                                      () => {
                                          t(o, !1);
                                      },
                                      e.options.isScrollingResetDelay,
                                  ),
                        r = (s) => () => {
                            ((o = n[e.options.horizontal ? 'scrollX' : 'scrollY']), i(), t(o, s));
                        },
                        a = r(!0),
                        c = r(!1);
                    (c(), n.addEventListener('scroll', a, u));
                    let d = e.options.useScrollendEvent && m;
                    return (
                        d && n.addEventListener('scrollend', c, u),
                        () => {
                            (n.removeEventListener('scroll', a), d && n.removeEventListener('scrollend', c));
                        }
                    );
                },
                _ = (e, t, n) => {
                    if (null == t ? void 0 : t.borderBoxSize) {
                        let e = t.borderBoxSize[0];
                        if (e) return Math.round(e[n.options.horizontal ? 'inlineSize' : 'blockSize']);
                    }
                    return Math.round(e.getBoundingClientRect()[n.options.horizontal ? 'width' : 'height']);
                },
                g = (e, { adjustments: t = 0, behavior: n }, s) => {
                    var o, i;
                    null == (i = null == (o = s.scrollElement) ? void 0 : o.scrollTo) || i.call(o, { [s.options.horizontal ? 'left' : 'top']: e + t, behavior: n });
                },
                b = (e, { adjustments: t = 0, behavior: n }, s) => {
                    var o, i;
                    null == (i = null == (o = s.scrollElement) ? void 0 : o.scrollTo) || i.call(o, { [s.options.horizontal ? 'left' : 'top']: e + t, behavior: n });
                };
            class C {
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
                                    var n;
                                    (null == (n = t()) || n.disconnect(), (e = null));
                                },
                                observe: (e) => {
                                    var n;
                                    return null == (n = t()) ? void 0 : n.observe(e, { box: 'border-box' });
                                },
                                unobserve: (e) => {
                                    var n;
                                    return null == (n = t()) ? void 0 : n.unobserve(e);
                                },
                            };
                        })()),
                        (this.range = null),
                        (this.setOptions = (e) => {
                            (Object.entries(e).forEach(([t, n]) => {
                                void 0 === n && delete e[t];
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
                                    rangeExtractor: c,
                                    onChange: () => {},
                                    measureElement: _,
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
                            var t, n;
                            null == (n = (t = this.options).onChange) || n.call(t, this, e);
                        }),
                        (this.maybeNotify = i(
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
                            let n = new Map(),
                                s = new Map();
                            for (let o = t - 1; o >= 0; o--) {
                                let t = e[o];
                                if (n.has(t.lane)) continue;
                                let i = s.get(t.lane);
                                if ((null == i || t.end > i.end ? s.set(t.lane, t) : t.end < i.end && n.set(t.lane, !0), n.size === this.options.lanes)) break;
                            }
                            return s.size === this.options.lanes
                                ? Array.from(s.values()).sort((e, t) => (e.end === t.end ? e.index - t.index : e.end - t.end))[0]
                                : void 0;
                        }),
                        (this.getMeasurementOptions = i(
                            () => [this.options.count, this.options.paddingStart, this.options.scrollMargin, this.options.getItemKey, this.options.enabled],
                            (e, t, n, s, o) => ((this.pendingMeasuredCacheIndexes = []), { count: e, paddingStart: t, scrollMargin: n, getItemKey: s, enabled: o }),
                            { key: !1 },
                        )),
                        (this.getMeasurements = i(
                            () => [this.getMeasurementOptions(), this.itemSizeCache],
                            ({ count: e, paddingStart: t, scrollMargin: n, getItemKey: s, enabled: o }, i) => {
                                if (!o) return ((this.measurementsCache = []), this.itemSizeCache.clear(), []);
                                0 === this.measurementsCache.length &&
                                    ((this.measurementsCache = this.options.initialMeasurementsCache),
                                    this.measurementsCache.forEach((e) => {
                                        this.itemSizeCache.set(e.key, e.size);
                                    }));
                                let r = this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
                                this.pendingMeasuredCacheIndexes = [];
                                let l = this.measurementsCache.slice(0, r);
                                for (let o = r; o < e; o++) {
                                    let e = s(o),
                                        r = 1 === this.options.lanes ? l[o - 1] : this.getFurthestMeasurement(l, o),
                                        a = r ? r.end + this.options.gap : t + n,
                                        c = i.get(e),
                                        d = 'number' == typeof c ? c : this.options.estimateSize(o),
                                        u = a + d,
                                        h = r ? r.lane : o % this.options.lanes;
                                    l[o] = { index: o, start: a, size: d, end: u, key: e, lane: h };
                                }
                                return ((this.measurementsCache = l), l);
                            },
                            { key: !1, debug: () => this.options.debug },
                        )),
                        (this.calculateRange = i(
                            () => [this.getMeasurements(), this.getSize(), this.getScrollOffset(), this.options.lanes],
                            (e, t, n, s) =>
                                (this.range =
                                    e.length > 0 && t > 0
                                        ? (function ({ measurements: e, outerSize: t, scrollOffset: n, lanes: s }) {
                                              let o = e.length - 1,
                                                  i = v(0, o, (t) => e[t].start, n),
                                                  r = i;
                                              if (1 === s) for (; r < o && e[r].end < n + t;) r++;
                                              else if (s > 1) {
                                                  let l = Array(s).fill(0);
                                                  for (; r < o && l.some((e) => e < n + t);) {
                                                      let t = e[r];
                                                      ((l[t.lane] = t.end), r++);
                                                  }
                                                  let a = Array(s).fill(n + t);
                                                  for (; i > 0 && a.some((e) => e >= n);) {
                                                      let t = e[i];
                                                      ((a[t.lane] = t.start), i--);
                                                  }
                                                  ((i = Math.max(0, i - (i % s))), (r = Math.min(o, r + (s - 1 - (r % s)))));
                                              }
                                              return { startIndex: i, endIndex: r };
                                          })({ measurements: e, outerSize: t, scrollOffset: n, lanes: s })
                                        : null),
                            { key: !1, debug: () => this.options.debug },
                        )),
                        (this.getVirtualIndexes = i(
                            () => {
                                let e = null,
                                    t = null,
                                    n = this.calculateRange();
                                return (
                                    n && ((e = n.startIndex), (t = n.endIndex)),
                                    this.maybeNotify.updateDeps([this.isScrolling, e, t]),
                                    [this.options.rangeExtractor, this.options.overscan, this.options.count, e, t]
                                );
                            },
                            (e, t, n, s, o) => (null === s || null === o ? [] : e({ startIndex: s, endIndex: o, overscan: t, count: n })),
                            { key: !1, debug: () => this.options.debug },
                        )),
                        (this.indexFromElement = (e) => {
                            let t = this.options.indexAttribute,
                                n = e.getAttribute(t);
                            return n ? parseInt(n, 10) : (console.warn(`Missing attribute name '${t}={index}' on measured element.`), -1);
                        }),
                        (this._measureElement = (e, t) => {
                            let n = this.indexFromElement(e),
                                s = this.measurementsCache[n];
                            if (!s) return;
                            let o = s.key,
                                i = this.elementsCache.get(o);
                            (i !== e && (i && this.observer.unobserve(i), this.observer.observe(e), this.elementsCache.set(o, e)),
                                e.isConnected && this.resizeItem(n, this.options.measureElement(e, t, this)));
                        }),
                        (this.resizeItem = (e, t) => {
                            let n = this.measurementsCache[e];
                            if (!n) return;
                            let s = t - (this.itemSizeCache.get(n.key) ?? n.size);
                            0 !== s &&
                                ((void 0 !== this.shouldAdjustScrollPositionOnItemSizeChange
                                    ? this.shouldAdjustScrollPositionOnItemSizeChange(n, s, this)
                                    : n.start < this.getScrollOffset() + this.scrollAdjustments) &&
                                    this._scrollToOffset(this.getScrollOffset(), { adjustments: (this.scrollAdjustments += s), behavior: void 0 }),
                                this.pendingMeasuredCacheIndexes.push(n.index),
                                (this.itemSizeCache = new Map(this.itemSizeCache.set(n.key, t))),
                                this.notify(!1));
                        }),
                        (this.measureElement = (e) => {
                            if (!e)
                                return void this.elementsCache.forEach((e, t) => {
                                    e.isConnected || (this.observer.unobserve(e), this.elementsCache.delete(t));
                                });
                            this._measureElement(e, void 0);
                        }),
                        (this.getVirtualItems = i(
                            () => [this.getVirtualIndexes(), this.getMeasurements()],
                            (e, t) => {
                                let n = [];
                                for (let s = 0, o = e.length; s < o; s++) {
                                    let o = t[e[s]];
                                    n.push(o);
                                }
                                return n;
                            },
                            { key: !1, debug: () => this.options.debug },
                        )),
                        (this.getVirtualItemForOffset = (e) => {
                            let t = this.getMeasurements();
                            if (0 !== t.length) return r(t[v(0, t.length - 1, (e) => r(t[e]).start, e)]);
                        }),
                        (this.getOffsetForAlignment = (e, t, n = 0) => {
                            let s = this.getSize(),
                                o = this.getScrollOffset();
                            ('auto' === t && (t = e >= o + s ? 'end' : 'start'), 'center' === t ? (e += (n - s) / 2) : 'end' === t && (e -= s));
                            let i = this.options.horizontal ? 'scrollWidth' : 'scrollHeight';
                            return Math.max(
                                Math.min(
                                    (this.scrollElement
                                        ? 'document' in this.scrollElement
                                            ? this.scrollElement.document.documentElement[i]
                                            : this.scrollElement[i]
                                        : 0) - s,
                                    e,
                                ),
                                0,
                            );
                        }),
                        (this.getOffsetForIndex = (e, t = 'auto') => {
                            e = Math.max(0, Math.min(e, this.options.count - 1));
                            let n = this.measurementsCache[e];
                            if (!n) return;
                            let s = this.getSize(),
                                o = this.getScrollOffset();
                            if ('auto' === t)
                                if (n.end >= o + s - this.options.scrollPaddingEnd) t = 'end';
                                else {
                                    if (!(n.start <= o + this.options.scrollPaddingStart)) return [o, t];
                                    t = 'start';
                                }
                            let i = 'end' === t ? n.end + this.options.scrollPaddingEnd : n.start - this.options.scrollPaddingStart;
                            return [this.getOffsetForAlignment(i, t, n.size), t];
                        }),
                        (this.isDynamicMode = () => this.elementsCache.size > 0),
                        (this.cancelScrollToIndex = () => {
                            null !== this.scrollToIndexTimeoutId &&
                                this.targetWindow &&
                                (this.targetWindow.clearTimeout(this.scrollToIndexTimeoutId), (this.scrollToIndexTimeoutId = null));
                        }),
                        (this.scrollToOffset = (e, { align: t = 'start', behavior: n } = {}) => {
                            (this.cancelScrollToIndex(),
                                'smooth' === n && this.isDynamicMode() && console.warn('The `smooth` scroll behavior is not fully supported with dynamic size.'),
                                this._scrollToOffset(this.getOffsetForAlignment(e, t), { adjustments: void 0, behavior: n }));
                        }),
                        (this.scrollToIndex = (e, { align: t = 'auto', behavior: n } = {}) => {
                            ((e = Math.max(0, Math.min(e, this.options.count - 1))),
                                this.cancelScrollToIndex(),
                                'smooth' === n && this.isDynamicMode() && console.warn('The `smooth` scroll behavior is not fully supported with dynamic size.'));
                            let s = this.getOffsetForIndex(e, t);
                            if (!s) return;
                            let [o, i] = s;
                            (this._scrollToOffset(o, { adjustments: void 0, behavior: n }),
                                'smooth' !== n &&
                                    this.isDynamicMode() &&
                                    this.targetWindow &&
                                    (this.scrollToIndexTimeoutId = this.targetWindow.setTimeout(() => {
                                        if (((this.scrollToIndexTimeoutId = null), this.elementsCache.has(this.options.getItemKey(e)))) {
                                            let [t] = r(this.getOffsetForIndex(e, i));
                                            1 > Math.abs(t - this.getScrollOffset()) || this.scrollToIndex(e, { align: i, behavior: n });
                                        } else this.scrollToIndex(e, { align: i, behavior: n });
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
                                n = this.getMeasurements();
                            if (0 === n.length) t = this.options.paddingStart;
                            else if (1 === this.options.lanes) t = (null == (e = n[n.length - 1]) ? void 0 : e.end) ?? 0;
                            else {
                                let e = Array(this.options.lanes).fill(null),
                                    s = n.length - 1;
                                for (; s > 0 && e.some((e) => null === e);) {
                                    let t = n[s];
                                    (null === e[t.lane] && (e[t.lane] = t.end), s--);
                                }
                                t = Math.max(...e.filter((e) => null !== e));
                            }
                            return Math.max(t - this.options.scrollMargin + this.options.paddingEnd, 0);
                        }),
                        (this._scrollToOffset = (e, { adjustments: t, behavior: n }) => {
                            this.options.scrollToFn(e, { behavior: n, adjustments: t }, this);
                        }),
                        (this.measure = () => {
                            ((this.itemSizeCache = new Map()), this.notify(!1));
                        }),
                        this.setOptions(e));
                }
            }
            let v = (e, t, n, s) => {
                    for (; e <= t;) {
                        let o = ((e + t) / 2) | 0,
                            i = n(o);
                        if (i < s) e = o + 1;
                        else {
                            if (!(i > s)) return o;
                            t = o - 1;
                        }
                    }
                    return e > 0 ? e - 1 : 0;
                },
                x = 'undefined' != typeof document ? s.useLayoutEffect : s.useEffect;
            function E(e) {
                let t = s.useReducer(() => ({}), {})[1],
                    n = {
                        ...e,
                        onChange: (n, s) => {
                            var i;
                            (s ? (0, o.flushSync)(t) : t(), null == (i = e.onChange) || i.call(e, n, s));
                        },
                    },
                    [i] = s.useState(() => new C(n));
                return (i.setOptions(n), x(() => i._didMount(), []), x(() => i._willUpdate()), i);
            }
            function S(e) {
                return E({ observeElementRect: d, observeElementOffset: p, scrollToFn: b, ...e });
            }
            function y(e) {
                return E({
                    getScrollElement: () => ('undefined' != typeof document ? window : null),
                    observeElementRect: h,
                    observeElementOffset: f,
                    scrollToFn: g,
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
        89209: (e, t, n) => {
            'use strict';
            n.d(t, { M: () => s });
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
        89241: (e) => {
            e.exports = {
                root: 'ConcertsPage_root__olabl',
                container: 'ConcertsPage_container__qS7xA',
                pageHeader: 'ConcertsPage_pageHeader__KyDH4',
                pageTitle: 'ConcertsPage_pageTitle__VViQV',
                locationSelector: 'ConcertsPage_locationSelector__izo2S',
                footer: 'ConcertsPage_footer__GYRwF',
            };
        },
        89257: (e, t, n) => {
            'use strict';
            n.d(t, { p: () => G });
            var s = n(25839),
                o = n(82298),
                i = n(88204),
                r = n(74631),
                l = n(39004),
                a = n(8487),
                c = n(61493),
                d = n(68934),
                u = n(4071),
                h = n(35622),
                m = n(5867),
                p = n(4254),
                f = n(51859),
                _ = n(91149),
                g = n(92942),
                b = n(65343),
                C = n(89209),
                v = n(20790),
                x = n(27954),
                E = n(31488),
                S = n(36159),
                y = n(57549),
                T = n(69041),
                O = n(19412),
                j = n(79396),
                A = n(9931),
                I = n(6968),
                L = n(51246),
                w = n(66738),
                M = n(86869),
                R = n(52512),
                N = n(6323),
                k = n(27819),
                z = n(86432),
                D = n.n(z);
            let P = (0, i.PA)((e) => {
                let { className: t, artist: n } = e,
                    { ref: i, intersectionPropertyId: l } = (0, R.n)(),
                    {
                        wizard: { likeArtist: a, isArtistLiked: d },
                    } = (0, x.g)(),
                    { id: h, name: m, coverUri: f } = n,
                    _ = (0, r.useCallback)(() => {
                        a(h);
                    }, [a, h]),
                    g = d(h),
                    b = (0, r.useMemo)(
                        () =>
                            (0, s.jsx)(M.t, {
                                className: D().cover,
                                radius: 'round',
                                'data-test-id': c.e8.wizard.ARTIST_CARD,
                                children: (0, s.jsxs)(u.$, {
                                    radius: 'round',
                                    className: D().coverBlock,
                                    variant: 'default',
                                    onClick: _,
                                    withRipple: !1,
                                    withHover: !1,
                                    'aria-pressed': g,
                                    'aria-label': m,
                                    'data-test-id': c.e8.wizard.ARTIST_CARD_BUTTON,
                                    children: [
                                        (0, s.jsx)(N.B, { className: D().image, src: f || k.A.src, fit: 'cover', alt: m, withAvatarReplace: !!f, 'aria-hidden': !0 }),
                                        (0, s.jsx)('div', {
                                            className: (0, o.$)(D().like),
                                            children: (0, s.jsx)(w.I, { variant: 'likedVariant', size: 's', className: D().icon }),
                                        }),
                                    ],
                                }),
                            }),
                        [g, f, m, _],
                    );
                return (0, s.jsx)(L.MN, {
                    ref: i,
                    className: (0, o.$)(D().root, { [D().root_selected]: g }, t),
                    textPosition: 'center',
                    title: (0, s.jsx)(p.HL, {
                        'aria-hidden': !0,
                        className: D().name,
                        variant: 'div',
                        type: 'entity',
                        size: 'l',
                        weight: 'medium',
                        lineClamp: 2,
                        'data-test-id': c.e8.wizard.ARTIST_CARD_NAME,
                        children: m,
                    }),
                    'data-intersection-property-id': l,
                    view: b,
                    'data-test-id': c.Kq.artist.ARTIST_ITEM,
                });
            });
            var W = n(22984),
                F = n.n(W);
            let B = { [f.u.Desktop]: { start: 40, end: 40 }, [f.u.Mobile]: { start: 40, end: 40 } },
                G = (0, i.PA)((e) => {
                    let { onFinishSuccess: t } = e,
                        { formatMessage: n } = (0, l.A)(),
                        {
                            wizard: i,
                            settings: { isMobile: f, isWindowsApplication: L, isLinuxApplication: w },
                            user: M,
                        } = (0, x.g)(),
                        { notify: R } = (0, g.l)(),
                        N = (0, v.z)(),
                        [k, z] = (0, d.d)(),
                        D = (0, m.zb)(0),
                        W = (0, r.useMemo)(
                            () => (e) => {
                                var t;
                                if (!D.onTabChange || e === D.value) return;
                                D.onTabChange(e);
                                let n = null == (t = i.genres[e]) ? void 0 : t.id;
                                (i.setFilter(n), null == k || k.scrollTo({ top: 0 }));
                            },
                            [i, D, k],
                        ),
                        G = (0, r.useMemo)(() => {
                            switch (i.selectedArtistsQuantity) {
                                case 0:
                                    return n({ id: 'wizard.button-tune' });
                                case 1:
                                    return n({ id: 'wizard.button-little-more' });
                                case 2:
                                    return n({ id: 'wizard.button-one-more' });
                                default:
                                    return n({ id: 'wizard.button-done' });
                            }
                        }, [i.selectedArtistsQuantity, n]),
                        V = (0, r.useMemo)(
                            () =>
                                (0, s.jsx)(A.wI, {
                                    className: F().tabCarousel,
                                    ...D,
                                    onTabChange: W,
                                    isShimmerVisible: i.loadingState === S.G.PENDING,
                                    shimmer: (0, s.jsx)(A.zr, { isActive: !0, className: F().tabCarousel, shimmerClassName: F().tabShimmer, count: f ? 2 : 3 }),
                                    children: i.genres.map((e, t) =>
                                        (0, s.jsx)(
                                            j.o,
                                            {
                                                className: (0, o.$)(F().filter, { [F().filter_selected]: t === D.value }),
                                                titleClassName: F().tabTitle,
                                                title: e.title,
                                                value: t,
                                            },
                                            t,
                                        ),
                                    ),
                                }),
                            [i.genres, D, W, i.loadingState, f],
                        ),
                        H = (0, r.useCallback)(() => {
                            i.loadArtists(60);
                        }, [i]);
                    (0, r.useEffect)(() => {
                        i.filter && H();
                    }, [i.filter, H]);
                    let U = (0, r.useCallback)(async () => {
                        (await i.loadGenres(), H());
                    }, [i, H]);
                    ((0, r.useEffect)(() => {
                        i.modal.isOpened && U();
                    }, [i, i.modal.isOpened, U]),
                        (0, r.useEffect)(() => {
                            i.loadingState === S.G.REJECT &&
                                (i.modal.close(), R((0, s.jsx)(y.h, { error: n({ id: 'error-messages.error-load-wizard' }) }), { containerId: _.u.ERROR }));
                        }, [i, i.loadGenres, i.loadingState, n, R]));
                    let X = (0, r.useMemo)(
                            () =>
                                (0, s.jsx)(p.DZ, {
                                    className: F().title,
                                    weight: 'bold',
                                    variant: 'h1',
                                    size: 'l',
                                    'data-test-id': c.e8.wizard.WIZARD_MODAL_TITLE,
                                    children: (0, s.jsx)(a.A, { id: 'wizard.modal-title' }),
                                }),
                            [],
                        ),
                        Y = (0, r.useCallback)(async () => {
                            (i.canFinish ? (await i.finish()) === E.F.OK && (await M.getSettings(), await (null == t ? void 0 : t())) : i.loadArtists(), i.modal.close());
                        }, [t, M, i]);
                    return (
                        (0, r.useEffect)(
                            () => (
                                null == N ||
                                    N.addShortcutsListener(C.M.MAIN, b.l.CLOSE, () => {
                                        i.modal.isOpened && Y();
                                    }),
                                () => {
                                    null == N || N.removeShortcutsListener(C.M.MAIN, b.l.CLOSE);
                                }
                            ),
                            [Y, i.modal.isOpened, N],
                        ),
                        (0, s.jsxs)(h.a, {
                            className: (0, o.$)(F().root, { [F().root_withCustomControls]: L || w }),
                            headerClassName: F().modalHeader,
                            contentClassName: F().modalContent,
                            open: i.modal.isOpened,
                            onOpenChange: i.modal.onOpenChange,
                            onClose: Y,
                            size: 'fullscreen',
                            placement: 'center',
                            labelClose: n({ id: 'interface-actions.close' }),
                            closeButtonDataTestId: c.e8.wizard.WIZARD_MODAL_CLOSE_BUTTON,
                            'data-test-id': c.e8.wizard.WIZARD_MODAL,
                            header: f && X,
                            escapeKey: !1,
                            children: [
                                (0, s.jsxs)('div', {
                                    className: F().wrapper,
                                    children: [
                                        !f && X,
                                        (0, s.jsx)(p.HL, {
                                            className: F().text,
                                            variant: 'div',
                                            size: 'l',
                                            weight: 'normal',
                                            'data-test-id': c.e8.wizard.WIZARD_MODAL_TEXT,
                                            children: (0, s.jsx)(a.A, { id: 'wizard.modal-text' }),
                                        }),
                                        (0, s.jsx)(u.$, {
                                            className: F().button,
                                            size: f ? 'm' : 'l',
                                            iconPosition: 'right',
                                            radius: 'xxxl',
                                            color: 'primary',
                                            onClick: Y,
                                            disabled: !i.canFinish,
                                            'data-test-id': c.e8.wizard.WIZARD_MODAL_BUTTON,
                                            children: (0, s.jsx)(p.HL, { variant: 'div', size: 'm', weight: 'medium', children: G }),
                                        }),
                                    ],
                                }),
                                (0, s.jsxs)('div', {
                                    className: F().mainContainer,
                                    children: [
                                        (0, s.jsx)(T.F, { className: F().carousel, carouselElement: V, scrollPadding: B }),
                                        (0, s.jsx)(I.$, {
                                            withFooter: !1,
                                            className: (0, o.$)(F().scrollContainer, F().important),
                                            itemContentCallback: (e) => {
                                                let t = i.artistsByGenre[e];
                                                if (!t) {
                                                    let e = n({ id: 'loading-messages.entity-is-loading' }, { entityName: n({ id: 'entity-names.artist' }) });
                                                    return (0, s.jsx)(O.V, { 'aria-label': e, round: !0, centered: !0 });
                                                }
                                                return (0, s.jsx)(P, { artist: t }, t.id);
                                            },
                                            data: i.artistsByGenre,
                                            endReached: H,
                                            listClassName: F().content,
                                            itemClassName: F().item,
                                            pageSize: 60,
                                            handleRef: z,
                                            'data-test-id': c.e8.wizard.WIZARD_MODAL_ARTISTS_GRID,
                                        }),
                                    ],
                                }),
                            ],
                        })
                    );
                });
        },
        89729: (e, t, n) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'default', {
                    enumerable: !0,
                    get: function () {
                        return a;
                    },
                }));
            let s = n(25839),
                o = n(74631),
                i = n(95102);
            function r(e) {
                return { default: e && 'default' in e ? e.default : e };
            }
            n(49971);
            let l = { loader: () => Promise.resolve(r(() => null)), loading: null, ssr: !0 },
                a = function (e) {
                    let t = { ...l, ...e },
                        n = (0, o.lazy)(() => t.loader().then(r)),
                        a = t.loading;
                    function c(e) {
                        let r = a ? (0, s.jsx)(a, { isLoading: !0, pastDelay: !0, error: null }) : null,
                            l = !t.ssr || !!t.loading,
                            c = l ? o.Suspense : o.Fragment,
                            d = t.ssr
                                ? (0, s.jsxs)(s.Fragment, { children: [null, (0, s.jsx)(n, { ...e })] })
                                : (0, s.jsx)(i.BailoutToCSR, { reason: 'next/dynamic', children: (0, s.jsx)(n, { ...e }) });
                        return (0, s.jsx)(c, { ...(l ? { fallback: r } : {}), children: d });
                    }
                    return ((c.displayName = 'LoadableComponent'), c);
                };
        },
        90720: (e, t, n) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'workAsyncStorageInstance', {
                    enumerable: !0,
                    get: function () {
                        return s;
                    },
                }));
            let s = (0, n(46450).createAsyncLocalStorage)();
        },
        95102: (e, t, n) => {
            'use strict';
            function s(e) {
                let { reason: t, children: n } = e;
                return n;
            }
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'BailoutToCSR', {
                    enumerable: !0,
                    get: function () {
                        return s;
                    },
                }),
                n(29834));
        },
    },
    (e) => {
        (e.O(
            0,
            [
                3349, 3112, 5812, 8775, 8451, 1583, 8561, 8803, 6287, 2e3, 6749, 6392, 3472, 2121, 7170, 1632, 5743, 3084, 3021, 5058, 3789, 9468, 364, 9122, 6706, 4771,
                1311, 5201, 8398, 260, 6702, 9004, 7511, 9414, 3595, 1251, 1817, 6215, 3257, 2038, 4163, 3246, 7848, 3482, 6680, 2247, 4345, 8836, 820, 4434, 48, 862,
                8372, 5898, 1808, 8222, 8892, 4932, 5622, 3268, 2445, 5853, 4018, 338, 4475, 5056, 7358,
            ],
            () => e((e.s = 50669)),
        ),
            (_N_E = e.O()));
    },
]);
