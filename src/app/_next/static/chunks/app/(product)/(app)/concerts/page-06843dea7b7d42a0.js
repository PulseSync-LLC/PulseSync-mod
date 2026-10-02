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
        9822: (e, t, s) => {
            'use strict';
            var n;
            ((t.HB = function (e, t) {
                let { objectsCount: s = 1, objectPosX: n = 1, objectPosY: o = 1 } = t,
                    r = (0, i.makeMetaParams)(2),
                    l = {
                        ...t,
                        objectsCount: s,
                        objectPosX: n,
                        objectPosY: o,
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
                    let { objectsCount: s = 1, objectPosX: n = 1, objectPosY: o = 1 } = t,
                        r = (0, i.makeMetaParams)(2),
                        l = {
                            ...t,
                            objectsCount: s,
                            objectPosX: n,
                            objectPosY: o,
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
            let i = s(26895);
            (n || (n = {})).ConcertScreen = 'concert_screen';
        },
        16714: (e, t, s) => {
            'use strict';
            s.d(t, { MainSuspenseLoader: () => l });
            var n = s(25839),
                i = s(66738),
                o = s(8254),
                r = s.n(o);
            let l = (e) => {
                let { style: t } = e,
                    s = {
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
                return (0, n.jsx)('div', {
                    style: s,
                    children: (0, n.jsx)(i.I, {
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
        32190: (e, t, s) => {
            'use strict';
            s.d(t, { U: () => c });
            var n = s(25839),
                i = s(82298),
                o = s(88204),
                r = s(74631),
                l = s(32942),
                a = s.n(l);
            let c = (0, o.PA)((e) => {
                let { indices: t, virtualItem: s, renderItemByIndex: o, columnClassName: l, className: c, resizeObserver: d, scrollMargin: u } = e,
                    h = (0, r.useRef)(null),
                    m = t[s.index],
                    p = { '--virtual-grid-row-vertical-offset': ''.concat(s.start - u, 'px') };
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
                    (0, n.jsx)('div', {
                        'data-index': s.index,
                        ref: h,
                        style: p,
                        className: (0, i.$)(a().root, c),
                        children: null == m ? void 0 : m.map((e) => (0, n.jsx)('div', { className: l, children: o(e) }, ''.concat(s.key, '_').concat(e))),
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
        40489: (e, t, s) => {
            'use strict';
            s.d(t, { L: () => c });
            var n = s(26508),
                i = s(49656),
                o = s(28631),
                r = s(74631);
            let l = (e) => {
                let { minColumnWidth: t, maxColumnWidth: s, containerWidth: n, totalCount: i, columnGap: o, minColumnCount: r, maxColumnCount: l } = e,
                    a = Math.max(1, Math.floor((n + o) / (t + o))),
                    c = Math.max(r, Math.floor((n + o) / ((s + t) * 0.5 + o)));
                for (let e = r; e <= a; e++) {
                    let i = (n - (e - 1) * o) / e;
                    if (i >= t && i <= s) {
                        c = e;
                        break;
                    }
                }
                return { rowCount: Math.ceil(i / (c = l ? Math.min(c, l) : c)), columnCount: c };
            };
            var a = s(52312);
            let c = (e) => {
                let {
                        count: t,
                        getEstimateRowSize: s,
                        rowGap: c,
                        columnGap: d,
                        minColumnWidth: u,
                        maxColumnWidth: h,
                        minColumnCount: m,
                        maxColumnCount: p,
                        containerRef: _,
                    } = e,
                    { rowCount: g, columnCount: f } = ((e) => {
                        let { containerRef: t, minColumnCount: s, maxColumnWidth: n, minColumnWidth: i, totalCount: a, columnGap: c, maxColumnCount: d } = e,
                            [u, h] = (0, r.useState)({ rowCount: 0, columnCount: 0 }),
                            m = (0, r.useRef)(null),
                            p = (0, r.useMemo)(
                                () =>
                                    (0, o.A)(
                                        (e) => {
                                            h(
                                                l({
                                                    minColumnWidth: i,
                                                    maxColumnWidth: n,
                                                    containerWidth: e.contentRect.width,
                                                    totalCount: a,
                                                    columnGap: c,
                                                    minColumnCount: s,
                                                    maxColumnCount: d,
                                                }),
                                            );
                                        },
                                        100,
                                        { trailing: !0 },
                                    ),
                                [c, d, n, s, i, a],
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
                                                minColumnWidth: i,
                                                maxColumnWidth: n,
                                                containerWidth: t.getBoundingClientRect().width,
                                                totalCount: a,
                                                columnGap: c,
                                                minColumnCount: s,
                                                maxColumnCount: d,
                                            }),
                                        ),
                                        m.current.observe(t)),
                                    () => {
                                        var e;
                                        null == (e = m.current) || e.disconnect();
                                    }
                                ),
                                [c, t, p, d, n, s, i, a],
                            ),
                            u
                        );
                    })({ totalCount: t, columnGap: null != d ? d : 0, minColumnCount: m, maxColumnWidth: h, minColumnWidth: u, maxColumnCount: p, containerRef: _ }),
                    { virtualizer: C, resizeObserver: b } = (0, a.r)({ count: g, getEstimateSize: s, gap: c, containerRef: _ }),
                    v = (0, n.A)(
                        Array.from({ length: t }, (e, t) => t),
                        f,
                    ),
                    x = (0, i.L)(() => {
                        var e, t;
                        if (!C.range) return null;
                        let s = null == (e = v[C.range.startIndex]) ? void 0 : e.at(0),
                            n = null == (t = v[C.range.endIndex]) ? void 0 : t.at(-1);
                        return void 0 !== s && void 0 !== n ? { startIndex: s, endIndex: n } : null;
                    });
                return { virtualizer: C, rowResizeObserver: b, indices: v, columnCount: f, visibleRange: x };
            };
        },
        41341: (e, t, s) => {
            'use strict';
            (s.r(t), s.d(t, { default: () => e$ }));
            var n = s(25839),
                i = s(74631),
                o = s.t(i, 2),
                r = s(88204),
                l = s(84059),
                a = s(39004),
                c = s(8487),
                d = s(59342),
                u = s(36619),
                h = s(61493),
                m = s(97762),
                p = s(71035),
                _ = s(68934),
                g = s(13833),
                f = s(4254),
                C = s(40489),
                b = s(32190),
                v = s(82904),
                x = s(28924),
                E = s(61777),
                S = s(95314),
                T = s(27954),
                y = s(18412),
                O = s(77348),
                I = s.n(O);
            let j = (0, r.PA)(() => {
                let e = (0, i.useId)(),
                    { concerts: t } = (0, T.g)(),
                    { formatMessage: s } = (0, a.A)(),
                    [o, r] = (0, _.d)(),
                    l = (0, E.f)(),
                    c = (0, i.useRef)(!1),
                    d = (0, p.c)(() => {
                        var e;
                        return !t.isShimmerVisible && (null == (e = t.feedConcerts) ? void 0 : e.length) ? t.feedConcerts.length : 50;
                    }),
                    {
                        virtualizer: m,
                        rowResizeObserver: g,
                        columnCount: f,
                        indices: O,
                    } = (0, C.L)({
                        count: d(),
                        rowGap: 32,
                        columnGap: 16,
                        getEstimateRowSize: () => 371,
                        minColumnCount: 2,
                        minColumnWidth: 170,
                        maxColumnWidth: 227,
                        containerRef: o,
                    }),
                    j = { '--feed-concerts-height': ''.concat(m.getTotalSize(), 'px'), '--feed-concerts-column-count': f },
                    A = (0, i.useCallback)(
                        (e) => {
                            var s, i, o;
                            let r = null == (s = t.feedConcerts) ? void 0 : s[e];
                            return !r || t.isShimmerVisible
                                ? (0, n.jsx)(x.L, { isActive: t.isShimmerActive })
                                : (0, n.jsx)(S.B, {
                                      objectType: u.DomainObjectType.Concert,
                                      objectId: r.id,
                                      objectPosX: (e % f) + 1,
                                      objectPosY: Math.floor(e / f) + 1,
                                      objectsCount: null != (o = null == (i = t.feedConcerts) ? void 0 : i.length) ? o : 0,
                                      children: (0, n.jsx)(v.Q, { concert: r }),
                                  });
                        },
                        [f, t.feedConcerts, t.isShimmerActive, t.isShimmerVisible],
                    );
                return (
                    (0, i.useEffect)(() => {
                        t.isResolved && !c.current && (l(), (c.current = !0));
                    }, [t.isResolved, l]),
                    (0, n.jsxs)('div', {
                        className: I().root,
                        'data-test-id': h.e8.concerts.CONCERTS_FEED,
                        children: [
                            (0, n.jsx)(y.T, { className: I().header, labeledForId: e, title: s({ id: 'concerts.all-concerts' }), headingVariant: 'h2' }),
                            (0, n.jsx)('div', {
                                'aria-labelledby': e,
                                ref: r,
                                style: j,
                                className: I().container,
                                children: m.getVirtualItems().map((e) =>
                                    (0, n.jsx)(
                                        b.U,
                                        {
                                            className: I().row,
                                            columnClassName: I().column,
                                            virtualItem: e,
                                            resizeObserver: g,
                                            indices: O,
                                            renderItemByIndex: A,
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
            var A = s(44806),
                L = s(73705),
                w = s.n(L),
                M = s(82298),
                R = s(5365),
                N = s(80986),
                z = s(57236),
                k = s.n(z);
            let D = (e) => {
                    let { children: t } = e,
                        s = (0, i.useId)(),
                        o = (0, i.useRef)(null),
                        { formatMessage: r } = (0, a.A)();
                    return (0, n.jsxs)('div', {
                        className: k().root,
                        'data-test-id': h.e8.concerts.CONCERTS_TOP,
                        children: [
                            (0, n.jsx)(y.T, {
                                className: k().header,
                                labeledForId: s,
                                title: r({ id: 'concerts.top-for-you' }),
                                controls: (0, n.jsx)(N.X, { className: k().controls, carouselRef: o }),
                                headingVariant: 'h2',
                            }),
                            (0, n.jsx)(R.F, { className: k().carousel, ref: o, itemClassName: (0, M.$)(k().item, k().important), 'aria-labelledby': s, children: t }),
                        ],
                    });
                },
                P = (e) => Array.from({ length: 10 }, (t, s) => (0, n.jsx)(x.L, { isActive: e, withPriceButton: !0 }, s)),
                W = (0, r.PA)(() => {
                    let { concerts: e, experiments: t } = (0, T.g)(),
                        s = (0, E.f)(),
                        o = (0, i.useRef)(!1),
                        r = t.checkExperiment(A.z.WebNextConcertsIdentityEventType, 'on'),
                        l = (0, i.useMemo)(() => {
                            var t;
                            return (null == (t = e.topConcerts) ? void 0 : t.length) && !e.isShimmerVisible
                                ? e.topConcerts.map((t, s) => {
                                      var i, o;
                                      return (0, n.jsx)(
                                          S.B,
                                          {
                                              objectType: u.DomainObjectType.Concert,
                                              objectId: t.id,
                                              objectPosX: s + 1,
                                              objectPosY: 1,
                                              objectsCount: null != (o = null == (i = e.topConcerts) ? void 0 : i.length) ? o : 0,
                                              children: (0, n.jsx)('div', {
                                                  className: w().concertCard,
                                                  children: (0, n.jsx)(v.Q, { withMask: r, withPriceButton: !0, withInlineMeta: !0, concert: t }),
                                              }),
                                          },
                                          t.getKey(s),
                                      );
                                  })
                                : P(e.isShimmerActive);
                        }, [e.isShimmerActive, e.isShimmerVisible, e.topConcerts, r]);
                    return (
                        (0, i.useEffect)(() => {
                            e.isResolved && !o.current && (s(), (o.current = !0));
                        }, [e.isResolved, s]),
                        e.isNeededToLoad && (0, i.use)(e.getData()),
                        (0, n.jsx)(D, { children: l })
                    );
                }),
                F = () => (0, n.jsx)(i.Suspense, { fallback: (0, n.jsx)(D, { children: P(!0) }), children: (0, n.jsx)(W, {}) });
            var B = s(32113),
                G = s(78299),
                V = s(89257),
                H = s(1407),
                U = s(20258),
                X = s(57138),
                Y = s(57487);
            let K = (e) => {
                let { children: t, offsetBlockPosY: s } = e,
                    o = (0, i.useMemo)(() => ({ offsetBlockPosY: s }), [s]);
                return (0, n.jsx)(Y.E.Provider, { value: o, children: t });
            };
            var $ = s(95858),
                Z = s(10322),
                Q = s(39058),
                q = s(89192),
                J = s(30716),
                ee = s(53712),
                et = s(99401),
                es = s(26076),
                en = s(10603),
                ei = s(91149),
                eo = s(92942),
                er = s(57549),
                el = s(67379),
                ea = s(76945),
                ec = s(59450),
                ed = s(84e3),
                eu = s(4071),
                eh = s(66738),
                em = s(23976),
                ep = s(29481),
                e_ = s(49656),
                eg = s(35622),
                ef = s(71143),
                eC = s.n(ef),
                eb = s(83243),
                ev = {
                    810: (e) => {
                        e.exports = o;
                    },
                },
                ex = {},
                eE = {};
            ((() => {
                (Object.defineProperty(eE, '__esModule', { value: !0 }), (eE.useKeyboardNavigation = void 0));
                let e = (function e(t) {
                    var s = ex[t];
                    if (void 0 !== s) return s.exports;
                    var n = (ex[t] = { exports: {} });
                    return (ev[t](n, n.exports, e), n.exports);
                })(810);
                function t(e, t) {
                    return e.current ? Array.from(t ? e.current.querySelectorAll(t) : e.current.children) : [];
                }
                eE.useKeyboardNavigation = function (s) {
                    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        { navigationItemsSelector: i, activeAttributeName: o = 'aria-selected' } = n,
                        r = (0, e.useCallback)(
                            (e) => {
                                let n = t(s, i);
                                if (!n.length) return;
                                let o = e.target,
                                    r = n.indexOf(o);
                                if (-1 === r) return;
                                let [l] = n,
                                    a = n.at(-1),
                                    c = null;
                                switch (e.key) {
                                    case 'ArrowLeft':
                                    case 'ArrowUp':
                                        c = n[r - 1] || a;
                                        break;
                                    case 'ArrowRight':
                                    case 'ArrowDown':
                                        c = n[r + 1] || l;
                                        break;
                                    case 'Home':
                                        c = l;
                                        break;
                                    case 'End':
                                        c = a;
                                }
                                null !== c && (c.focus(), e.preventDefault());
                            },
                            [i, s],
                        );
                    ((0, e.useEffect)(() => {
                        let e = s.current;
                        return (null == e || e.addEventListener('keydown', r), () => (null == e ? void 0 : e.removeEventListener('keydown', r)));
                    }, [s, r]),
                        (0, e.useEffect)(() => {
                            t(s, i).forEach((e) => {
                                e.hasAttribute(o) && ('true' === e.getAttribute(o) ? (e.tabIndex = 0) : (e.tabIndex = -1));
                            });
                        }));
                };
            })(),
                eE.__esModule);
            var eS = eE.useKeyboardNavigation,
                eT = s(42966),
                ey = s(52512),
                eO = s(17226),
                eI = s(39379),
                ej = s.n(eI);
            let eA = (e) => {
                let { isSelected: t, onSelect: s, children: i, locationId: o, testId: r } = e,
                    l = (0, eT.m)(),
                    { ref: a, intersectionPropertyId: c } = (0, ey.n)(),
                    d = (0, p.c)(() => {
                        (l({ actionType: u.ActionType.SearchItemSelected }), s(o));
                    }),
                    m = (0, p.c)((e) => {
                        (e.key === eO.v.ENTER || e.key === eO.v.SPACE) && (e.preventDefault(), l({ actionType: u.ActionType.SearchItemSelected }), s(o));
                    });
                return (0, n.jsxs)('li', {
                    ref: a,
                    'data-intersection-property-id': c,
                    className: ej().item,
                    role: 'option',
                    'aria-selected': t,
                    tabIndex: 0,
                    onClick: d,
                    onKeyDown: m,
                    'data-test-id': null != r ? r : h.Xk.concerts.CONCERTS_LOCATION_DIALOG_LIST_ITEM,
                    children: [
                        (0, n.jsx)(f.HL, { className: ej().itemText, variant: 'span', size: 'l', weight: 'medium', children: i }),
                        t && (0, n.jsx)(eh.I, { className: ej().checkIcon, variant: 'check', size: 'xs', 'aria-hidden': 'true' }),
                    ],
                });
            };
            var eL = s(78393),
                ew = s.n(eL);
            let eM = (0, r.PA)((e) => {
                let { showAutoDetect: t, isAutoDetect: s, filteredLocations: o, selectedLocationId: r, onSelectLocation: l, onSelectAutoDetect: d } = e,
                    { formatMessage: m } = (0, a.A)(),
                    p = (0, i.useRef)(null);
                eS(p, { navigationItemsSelector: '[role="option"]' });
                let _ = o.length,
                    g = (0, e_.L)(() => {
                        let e = o.find((e) => e.id === r),
                            t = o.filter((e) => e.id !== r),
                            s = [];
                        return (e && s.push(e), s.push(...t), s);
                    });
                return (0, n.jsx)(X.F, {
                    blockType: u.EntityTypes.LocationList,
                    blockId: u.EntityTypes.LocationList,
                    blockPosX: 1,
                    blockPosY: 2,
                    objectsCount: _,
                    children: (0, n.jsxs)('ul', {
                        ref: p,
                        className: ew().root,
                        role: 'listbox',
                        'aria-label': m({ id: 'concerts.cities-list' }),
                        'data-test-id': h.Xk.concerts.CONCERTS_LOCATION_DIALOG_LIST,
                        children: [
                            t &&
                                (0, n.jsx)(S.B, {
                                    objectType: u.DomainObjectType.LocationAutoDetect,
                                    objectId: u.DomainObjectType.LocationAutoDetect,
                                    objectPosX: 1,
                                    objectPosY: 1,
                                    objectsCount: _,
                                    children: (0, n.jsx)(eA, {
                                        isSelected: s,
                                        onSelect: d,
                                        testId: h.Xk.concerts.CONCERTS_LOCATION_DIALOG_NEARBY_ITEM,
                                        children: (0, n.jsx)(c.A, { id: 'concerts.concerts-nearby' }),
                                    }),
                                }),
                            g.map((e, s) =>
                                (0, n.jsx)(
                                    S.B,
                                    {
                                        objectType: u.DomainObjectType.Location,
                                        objectId: String(e.id),
                                        objectPosX: 1,
                                        objectPosY: t ? s + 2 : s + 1,
                                        objectsCount: _,
                                        children: (0, n.jsx)(eA, { isSelected: e.id === r, onSelect: l, locationId: e.id, children: e.name }),
                                    },
                                    e.id,
                                ),
                            ),
                        ],
                    }),
                });
            });
            var eR = s(79749),
                eN = s.n(eR);
            let ez = (0, r.PA)((e) => {
                let { onClose: t } = e,
                    { concerts: s } = (0, T.g)(),
                    { locationSelection: o } = s,
                    { filteredLocations: r, searchText: l, selectedLocationId: a, isAutoDetect: d } = o,
                    m = !l.trim(),
                    _ = m || r.length > 0,
                    g = (0, p.c)((e) => {
                        void 0 !== e && (o.setSelectedLocation(e), t());
                    }),
                    C = (0, p.c)(() => {
                        (o.setSelectedLocation(null), t());
                    }),
                    b = (0, eb.l)({ mainObjectType: u.DomainObjectType.Location });
                (0, i.useEffect)(
                    () => (
                        b(!0),
                        () => {
                            b(!1);
                        }
                    ),
                    [b],
                );
                let v = (0, e_.L)(() =>
                        (0, n.jsx)(eM, { showAutoDetect: m, isAutoDetect: d, filteredLocations: r, selectedLocationId: a, onSelectLocation: g, onSelectAutoDetect: C }),
                    ),
                    x = (0, e_.L)(() =>
                        (0, n.jsxs)('div', {
                            className: eN().emptyState,
                            'data-test-id': h.Xk.concerts.CONCERTS_LOCATION_DIALOG_EMPTY_STATE,
                            children: [
                                (0, n.jsx)(f.DZ, {
                                    className: eN().emptyStateTitle,
                                    variant: 'h3',
                                    weight: 'bold',
                                    size: 's',
                                    children: (0, n.jsx)(c.A, { id: 'concerts.nothing-found' }),
                                }),
                                (0, n.jsx)(f.HL, {
                                    className: eN().emptyStateSubtitle,
                                    variant: 'span',
                                    size: 'm',
                                    children: (0, n.jsx)(c.A, { id: 'concerts.try-different-query' }),
                                }),
                            ],
                        }),
                    );
                return (0, n.jsx)('div', { className: eN().root, children: _ ? v : x });
            });
            var ek = s(56659),
                eD = s(56577),
                eP = s.n(eD);
            let eW = (e) => {
                    let { searchText: t, onChange: s, onReset: i } = e,
                        { formatMessage: o } = (0, a.A)(),
                        { ref: r, intersectionPropertyId: l } = (0, ey.n)();
                    return (0, n.jsx)('div', {
                        ref: r,
                        'data-intersection-property-id': l,
                        className: eP().root,
                        children: (0, n.jsx)(ek.D, {
                            className: eP().searchInput,
                            placeholder: o({ id: 'concerts.find-city' }),
                            initialValue: t,
                            correctedValue: null,
                            onChange: s,
                            onResetClick: i,
                            resetButtonAriaLabel: o({ id: 'interface-actions.reset-search-input' }),
                            withResetButton: !1,
                            autoFocus: !0,
                            innerInputProps: { 'data-test-id': h.Xk.concerts.CONCERTS_LOCATION_DIALOG_SEARCH_INPUT },
                        }),
                    });
                },
                eF = (0, r.PA)((e) => {
                    let { isOpen: t, onClose: s } = e,
                        { formatMessage: o } = (0, a.A)(),
                        {
                            concerts: r,
                            settings: { isMobile: l },
                        } = (0, T.g)(),
                        { locationSelection: c } = r,
                        { searchText: d } = c,
                        m = (0, p.c)((e) => {
                            c.setSearchText(e);
                        }),
                        _ = (0, p.c)(() => {
                            c.resetSearchText();
                        }),
                        g = (0, p.c)((e) => {
                            e || s();
                        });
                    (0, i.useEffect)(() => {
                        t || c.resetSearchText();
                    }, [t, c]);
                    let f = (0, e_.L)(() =>
                            (0, n.jsx)(X.F, {
                                blockType: u.EntityTypes.Search,
                                blockId: u.EntityTypes.Search,
                                blockPosX: 1,
                                blockPosY: 1,
                                objectsCount: 1,
                                children: (0, n.jsx)(S.B, {
                                    objectType: u.DomainObjectType.SearchField,
                                    objectId: u.DomainObjectType.SearchField,
                                    objectPosX: 1,
                                    objectPosY: 1,
                                    objectsCount: 1,
                                    children: (0, n.jsx)(eW, { searchText: d, onChange: m, onReset: _ }),
                                }),
                            }),
                        ),
                        C = (0, e_.L)(() => {
                            if (!l)
                                return (0, n.jsx)(eu.$, {
                                    radius: 'round',
                                    color: 'secondary',
                                    size: 'xxs',
                                    icon: (0, n.jsx)(eh.I, { variant: 'close', size: 'xxs' }),
                                    onClick: s,
                                    'aria-label': o({ id: 'interface-actions.close' }),
                                    className: eC().desktopCloseButton,
                                    'data-test-id': h.Xk.concerts.CONCERTS_LOCATION_DIALOG_CLOSE_BUTTON,
                                });
                        });
                    return (0, n.jsx)(eg.a, {
                        open: t,
                        onClose: s,
                        onOpenChange: g,
                        placement: l ? 'default' : 'center',
                        size: l ? 'fullscreen' : 'fitContent',
                        className: eC().root,
                        labelClose: o({ id: 'interface-actions.close' }),
                        closeButtonProps: { className: eC().closeButton, 'data-test-id': h.Xk.concerts.CONCERTS_LOCATION_DIALOG_CLOSE_BUTTON },
                        headerClassName: eC().header,
                        header: f,
                        customCloseButton: C,
                        isMobile: l,
                        enableSwipe: l,
                        overlayColor: l ? 'transparent' : 'full',
                        'data-test-id': h.Xk.concerts.CONCERTS_LOCATION_DIALOG_MODAL,
                        children: t && (0, n.jsx)(ez, { onClose: s }),
                    });
                });
            var eB = s(35325),
                eG = s.n(eB);
            let eV = (0, r.PA)((e) => {
                var t;
                let { className: s } = e,
                    { concerts: i } = (0, T.g)(),
                    { locationSelection: o } = i,
                    r = (0, ep.N)(),
                    l = (0, p.c)(() => {
                        (r({ to: u.AppScreen.ConcertLocationSelector }), o.modal.open());
                    });
                if (o.shouldShowShimmer) return (0, n.jsx)(em.W, { className: (0, M.$)(eG().root, eG().shimmer, s), isActive: !0, radius: 'xxxl' });
                let a = o.hasLocations,
                    d = null != (t = o.selectedLocationName) ? t : (0, n.jsx)(c.A, { id: 'concerts.nearby' });
                return (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)(eu.$, {
                            className: (0, M.$)(eG().root, s, { [eG().root_disabled]: !a }),
                            variant: 'text',
                            size: 's',
                            icon: (0, n.jsx)(eh.I, { variant: 'arrowDown', size: 'xxxs' }),
                            iconPosition: 'right',
                            iconClassName: eG().icon,
                            withRipple: !1,
                            'aria-live': 'polite',
                            'aria-haspopup': 'dialog',
                            'aria-expanded': o.modal.isOpened,
                            disabled: !a,
                            onClick: l,
                            'data-test-id': h.Xk.concerts.CONCERTS_LOCATION_SELECTOR_BUTTON,
                            children: (0, n.jsx)(f.HL, {
                                className: eG().text,
                                variant: 'span',
                                type: 'controls',
                                size: 'l',
                                weight: 'medium',
                                lineClamp: 1,
                                children: d,
                            }),
                        }),
                        a &&
                            (0, n.jsx)(Z.n, {
                                pageId: U._Q.CONCERT_LOCATION_SELECTOR,
                                pageEntityId: U._Q.CONCERT_LOCATION_SELECTOR,
                                pageStyle: u.PageStyles.Fullscreen,
                                pagePlacement: u.PagePlacements.Fullscreen,
                                children: (0, n.jsx)(eF, { isOpen: o.modal.isOpened, onClose: o.modal.close }),
                            }),
                    ],
                });
            });
            var eH = s(89241),
                eU = s.n(eH);
            let eX = (0, r.PA)(() => {
                var e, t, s, o, r, C, b, v, x;
                let { formatMessage: E } = (0, a.A)(),
                    { setContentScrollRef: y, contentScrollRef: O } = (0, q.g)(),
                    { concerts: I, experiments: L, user: w } = (0, T.g)(),
                    [M, R] = (0, _.d)(),
                    N = (() => {
                        let e = (0, ec.st)(),
                            t = (0, ed.U)(),
                            { hash: s } = (0, ec.gf)();
                        return (0, p.c)((n, i) => {
                            if (!e) return;
                            let o = {
                                    hash: s,
                                    pageId: u.AppScreen.ConcertsLandingScreen,
                                    pageStyle: u.PageStyles.Fullscreen,
                                    pagePlacement: u.PagePlacements.Fullscreen,
                                    viewUuid: i,
                                },
                                r = (0, el.F)({ params: o, logger: t, context: 'useSendEventOnConcertsOpenedOrClosed' });
                            r && (n ? (0, ea.Fn)(e.evgenInstance, r) : (0, ea.PO)(e.evgenInstance, r));
                        });
                    })(),
                    z = (0, i.useRef)(String((0, d.A)())),
                    k = null != (C = null == (e = I.landing.meta) ? void 0 : e.selectedTabIndex) ? C : 0,
                    D = null != (b = null == (s = I.landing.tabs.data) || null == (t = s[k]) ? void 0 : t.blocks.length) ? b : 0;
                (L.checkExperiment(A.z.WebNextConcertsTab, 'on') || (0, l.notFound)(),
                    w.hasPlus || (0, l.redirect)(ee.Z.main.href),
                    (0, i.useEffect)(
                        () => () => {
                            I.resetPageData();
                        },
                        [I],
                    ),
                    I.isLocationSelectionExperimentEnabled && I.locationSelection.isNeededToLoad && (0, i.use)(I.locationSelection.getLocations()),
                    (0, i.useEffect)(() => {
                        let e = z.current;
                        return (
                            N(!0, e),
                            () => {
                                N(!1, e);
                            }
                        );
                    }, [N]),
                    (0, J.J)(I.landing.isResolved),
                    (() => {
                        let e = (0, i.useRef)(1),
                            { concerts: t } = (0, T.g)(),
                            { notify: s } = (0, eo.l)(),
                            { formatMessage: o } = (0, a.A)();
                        (0, i.useEffect)(() => {
                            e && (t.isRejected && s((0, n.jsx)(er.h, { error: o({ id: 'concerts.feed-error' }) }), { containerId: ei.u.ERROR }), e.current--);
                        }, [t.isRejected, o, s]);
                    })());
                let P = (0, p.c)(() => {
                    if (I.landing.isLoaded) return I.landing.getSkeleton({ id: m.p.CONCERTS, showWizard: w.settings.showWizard }, { preloadBlocksCount: 2 });
                });
                return (I.landing.isNeededToLoad && (0, i.use)(I.landing.getSkeleton({ id: m.p.CONCERTS, showWizard: w.settings.showWizard }, { preloadBlocksCount: 2 })),
                I.landing.isRejected)
                    ? (0, n.jsx)(G.SomethingWentWrong, {})
                    : (0, n.jsx)($.j, {
                          children: (0, n.jsxs)(Z.n, {
                              pageId: U._Q.CONCERTS,
                              children: [
                                  (0, n.jsxs)(H.h, {
                                      scrollElement: O,
                                      outerTitle: E({ id: 'entity-names.concerts' }),
                                      headerElement: M,
                                      children: [
                                          (0, n.jsx)(en.Y, { variant: en.V.TEXT, showControls: !1 }),
                                          (0, n.jsxs)(g.N, {
                                              ref: y,
                                              className: eU().root,
                                              containerClassName: eU().container,
                                              'data-test-id': h.Xk.concerts.CONCERTS_PAGE,
                                              children: [
                                                  (0, n.jsxs)('div', {
                                                      className: eU().pageHeader,
                                                      ref: R,
                                                      children: [
                                                          (0, n.jsx)(f.DZ, {
                                                              variant: 'h1',
                                                              weight: 'bold',
                                                              size: 'xl',
                                                              className: eU().pageTitle,
                                                              'data-test-id': h.Xk.concerts.CONCERTS_PAGE_TITLE,
                                                              children: (0, n.jsx)(c.A, { id: 'entity-names.concerts' }),
                                                          }),
                                                          I.isLocationSelectionExperimentEnabled &&
                                                              (0, n.jsx)(Q.h, {
                                                                  tabId: '',
                                                                  tabPos: 0,
                                                                  isTabSelectedByDefault: !1,
                                                                  children: (0, n.jsx)(X.F, {
                                                                      blockId: u.EntityTypes.ConcertTabHeader,
                                                                      blockType: u.EntityTypes.ConcertTabHeader,
                                                                      blockPosX: 1,
                                                                      blockPosY: 1,
                                                                      objectsCount: 1,
                                                                      children: (0, n.jsx)(S.B, {
                                                                          objectType: u.DomainObjectType.Location,
                                                                          objectId: u.DomainObjectType.Location,
                                                                          objectPosX: 1,
                                                                          objectPosY: 1,
                                                                          objectsCount: 1,
                                                                          children: (0, n.jsx)(eV, { className: eU().locationSelector }),
                                                                      }),
                                                                  }),
                                                              }),
                                                      ],
                                                  }),
                                                  (0, n.jsx)(Q.h, {
                                                      tabId: '',
                                                      tabPos: 0,
                                                      isTabSelectedByDefault: !1,
                                                      children: (0, n.jsx)(X.F, {
                                                          blockId: u.EntityTypes.ConcertTabHeader,
                                                          blockType: u.EntityTypes.ConcertTabHeader,
                                                          blockPosX: 1,
                                                          blockPosY: 1,
                                                          objectsCount: null != (v = null == (o = I.topConcerts) ? void 0 : o.length) ? v : 0,
                                                          children: (0, n.jsx)(F, {}),
                                                      }),
                                                  }),
                                                  (0, n.jsx)(K, {
                                                      offsetBlockPosY: 1,
                                                      children: (0, n.jsx)(B.E, {
                                                          landing: I.landing,
                                                          errorComponent: (0, n.jsx)(G.SomethingWentWrong, { withBackwardControl: !1 }),
                                                      }),
                                                  }),
                                                  (0, n.jsx)(Q.h, {
                                                      tabId: '',
                                                      tabPos: 0,
                                                      isTabSelectedByDefault: !1,
                                                      children: (0, n.jsx)(X.F, {
                                                          blockId: u.EntityTypes.ConcertTabFeed,
                                                          blockType: u.EntityTypes.ConcertTabFeed,
                                                          blockPosX: 1,
                                                          blockPosY: D + 2,
                                                          objectsCount: null != (x = null == (r = I.feedConcerts) ? void 0 : r.length) ? x : 0,
                                                          children: (0, n.jsx)(j, {}),
                                                      }),
                                                  }),
                                                  (0, n.jsx)(es.A, { children: (0, n.jsx)(et.w, { className: eU().footer }) }),
                                              ],
                                          }),
                                      ],
                                  }),
                                  (0, n.jsx)(V.p, { onFinishSuccess: P }),
                              ],
                          }),
                      });
            });
            var eY = s(16714);
            let eK = () => (0, n.jsx)(eY.MainSuspenseLoader, { style: { position: 'absolute', background: 'var(--ym-background-color-primary-enabled-content)' } }),
                e$ = () => (0, n.jsx)(i.Suspense, { fallback: (0, n.jsx)(eK, {}), children: (0, n.jsx)(eX, {}) });
        },
        47608: (e, t, s) => {
            'use strict';
            ((t.__ = function (e, t) {
                let s = (0, n.makeMetaParams)(1),
                    i = { ...t, pageId: 'artist_concerts_screen', pageType: 'listing', _meta: s };
                e.trackEvent('ArtistConcerts.Opened', i);
            }),
                (t.pe = function (e, t) {
                    let s = (0, n.makeMetaParams)(1),
                        i = { ...t, pageId: 'artist_concerts_screen', pageType: 'listing', _meta: s };
                    e.trackEvent('ArtistConcerts.Closed', i);
                }),
                (t.Z4 = function (e, t) {
                    let { objectPos: s = 1 } = t,
                        i = (0, n.makeMetaParams)(1),
                        o = { ...t, objectPos: s, pageId: 'artist_concerts_screen', pageType: 'listing', objectType: 'concert', _meta: i };
                    e.trackEvent('ArtistConcerts.Concert.Showed', o);
                }),
                (t.mh = function (e, t) {
                    let { objectPos: s = 1 } = t,
                        i = (0, n.makeMetaParams)(1),
                        o = {
                            ...t,
                            objectPos: s,
                            pageId: 'artist_concerts_screen',
                            pageType: 'listing',
                            objectType: 'concert',
                            from: 'artist_concerts_screen',
                            _meta: i,
                        };
                    e.trackEvent('ArtistConcerts.Concert.Navigated', o);
                }));
            let n = s(26895);
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
        65343: (e, t, s) => {
            'use strict';
            s.d(t, { l: () => n });
            var n = (function (e) {
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
        84361: (e, t, s) => {
            'use strict';
            s.d(t, { Te: () => S, XW: () => T });
            var n = s(74631),
                i = s(71910);
            function o(e, t, s) {
                let n,
                    i = s.initialDeps ?? [];
                function o() {
                    var o, r, l, a;
                    let c, d;
                    s.key && (null == (o = s.debug) ? void 0 : o.call(s)) && (c = Date.now());
                    let u = e();
                    if (!(u.length !== i.length || u.some((e, t) => i[t] !== e))) return n;
                    if (
                        ((i = u),
                        s.key && (null == (r = s.debug) ? void 0 : r.call(s)) && (d = Date.now()),
                        (n = t(...u)),
                        s.key && (null == (l = s.debug) ? void 0 : l.call(s)))
                    ) {
                        let e = Math.round((Date.now() - c) * 100) / 100,
                            t = Math.round((Date.now() - d) * 100) / 100,
                            n = t / 16,
                            i = (e, t) => {
                                for (e = String(e); e.length < t;) e = ' ' + e;
                                return e;
                            };
                        console.info(
                            `%c⏱ ${i(t, 5)} /${i(e, 5)} ms`,
                            `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * n, 120))}deg 100% 31%);`,
                            null == s ? void 0 : s.key,
                        );
                    }
                    return (null == (a = null == s ? void 0 : s.onChange) || a.call(s, n), n);
                }
                return (
                    (o.updateDeps = (e) => {
                        i = e;
                    }),
                    o
                );
            }
            function r(e, t) {
                if (void 0 !== e) return e;
                throw Error(`Unexpected undefined${t ? `: ${t}` : ''}`);
            }
            let l = (e, t, s) => {
                    let n;
                    return function (...i) {
                        (e.clearTimeout(n), (n = e.setTimeout(() => t.apply(this, i), s)));
                    };
                },
                a = (e) => e,
                c = (e) => {
                    let t = Math.max(e.startIndex - e.overscan, 0),
                        s = Math.min(e.endIndex + e.overscan, e.count - 1),
                        n = [];
                    for (let e = t; e <= s; e++) n.push(e);
                    return n;
                },
                d = (e, t) => {
                    let s = e.scrollElement;
                    if (!s) return;
                    let n = e.targetWindow;
                    if (!n) return;
                    let i = (e) => {
                        let { width: s, height: n } = e;
                        t({ width: Math.round(s), height: Math.round(n) });
                    };
                    if ((i(s.getBoundingClientRect()), !n.ResizeObserver)) return () => {};
                    let o = new n.ResizeObserver((t) => {
                        let n = () => {
                            let e = t[0];
                            if (null == e ? void 0 : e.borderBoxSize) {
                                let t = e.borderBoxSize[0];
                                if (t) return void i({ width: t.inlineSize, height: t.blockSize });
                            }
                            i(s.getBoundingClientRect());
                        };
                        e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(n) : n();
                    });
                    return (
                        o.observe(s, { box: 'border-box' }),
                        () => {
                            o.unobserve(s);
                        }
                    );
                },
                u = { passive: !0 },
                h = (e, t) => {
                    let s = e.scrollElement;
                    if (!s) return;
                    let n = () => {
                        t({ width: s.innerWidth, height: s.innerHeight });
                    };
                    return (
                        n(),
                        s.addEventListener('resize', n, u),
                        () => {
                            s.removeEventListener('resize', n);
                        }
                    );
                },
                m = 'undefined' == typeof window || 'onscrollend' in window,
                p = (e, t) => {
                    let s = e.scrollElement;
                    if (!s) return;
                    let n = e.targetWindow;
                    if (!n) return;
                    let i = 0,
                        o =
                            e.options.useScrollendEvent && m
                                ? () => void 0
                                : l(
                                      n,
                                      () => {
                                          t(i, !1);
                                      },
                                      e.options.isScrollingResetDelay,
                                  ),
                        r = (n) => () => {
                            let { horizontal: r, isRtl: l } = e.options;
                            ((i = r ? s.scrollLeft * ((l && -1) || 1) : s.scrollTop), o(), t(i, n));
                        },
                        a = r(!0),
                        c = r(!1);
                    (c(), s.addEventListener('scroll', a, u));
                    let d = e.options.useScrollendEvent && m;
                    return (
                        d && s.addEventListener('scrollend', c, u),
                        () => {
                            (s.removeEventListener('scroll', a), d && s.removeEventListener('scrollend', c));
                        }
                    );
                },
                _ = (e, t) => {
                    let s = e.scrollElement;
                    if (!s) return;
                    let n = e.targetWindow;
                    if (!n) return;
                    let i = 0,
                        o =
                            e.options.useScrollendEvent && m
                                ? () => void 0
                                : l(
                                      n,
                                      () => {
                                          t(i, !1);
                                      },
                                      e.options.isScrollingResetDelay,
                                  ),
                        r = (n) => () => {
                            ((i = s[e.options.horizontal ? 'scrollX' : 'scrollY']), o(), t(i, n));
                        },
                        a = r(!0),
                        c = r(!1);
                    (c(), s.addEventListener('scroll', a, u));
                    let d = e.options.useScrollendEvent && m;
                    return (
                        d && s.addEventListener('scrollend', c, u),
                        () => {
                            (s.removeEventListener('scroll', a), d && s.removeEventListener('scrollend', c));
                        }
                    );
                },
                g = (e, t, s) => {
                    if (null == t ? void 0 : t.borderBoxSize) {
                        let e = t.borderBoxSize[0];
                        if (e) return Math.round(e[s.options.horizontal ? 'inlineSize' : 'blockSize']);
                    }
                    return Math.round(e.getBoundingClientRect()[s.options.horizontal ? 'width' : 'height']);
                },
                f = (e, { adjustments: t = 0, behavior: s }, n) => {
                    var i, o;
                    null == (o = null == (i = n.scrollElement) ? void 0 : i.scrollTo) || o.call(i, { [n.options.horizontal ? 'left' : 'top']: e + t, behavior: s });
                },
                C = (e, { adjustments: t = 0, behavior: s }, n) => {
                    var i, o;
                    null == (o = null == (i = n.scrollElement) ? void 0 : i.scrollTo) || o.call(i, { [n.options.horizontal ? 'left' : 'top']: e + t, behavior: s });
                };
            class b {
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
                                    var s;
                                    (null == (s = t()) || s.disconnect(), (e = null));
                                },
                                observe: (e) => {
                                    var s;
                                    return null == (s = t()) ? void 0 : s.observe(e, { box: 'border-box' });
                                },
                                unobserve: (e) => {
                                    var s;
                                    return null == (s = t()) ? void 0 : s.unobserve(e);
                                },
                            };
                        })()),
                        (this.range = null),
                        (this.setOptions = (e) => {
                            (Object.entries(e).forEach(([t, s]) => {
                                void 0 === s && delete e[t];
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
                            var t, s;
                            null == (s = (t = this.options).onChange) || s.call(t, this, e);
                        }),
                        (this.maybeNotify = o(
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
                            let s = new Map(),
                                n = new Map();
                            for (let i = t - 1; i >= 0; i--) {
                                let t = e[i];
                                if (s.has(t.lane)) continue;
                                let o = n.get(t.lane);
                                if ((null == o || t.end > o.end ? n.set(t.lane, t) : t.end < o.end && s.set(t.lane, !0), s.size === this.options.lanes)) break;
                            }
                            return n.size === this.options.lanes
                                ? Array.from(n.values()).sort((e, t) => (e.end === t.end ? e.index - t.index : e.end - t.end))[0]
                                : void 0;
                        }),
                        (this.getMeasurementOptions = o(
                            () => [this.options.count, this.options.paddingStart, this.options.scrollMargin, this.options.getItemKey, this.options.enabled],
                            (e, t, s, n, i) => ((this.pendingMeasuredCacheIndexes = []), { count: e, paddingStart: t, scrollMargin: s, getItemKey: n, enabled: i }),
                            { key: !1 },
                        )),
                        (this.getMeasurements = o(
                            () => [this.getMeasurementOptions(), this.itemSizeCache],
                            ({ count: e, paddingStart: t, scrollMargin: s, getItemKey: n, enabled: i }, o) => {
                                if (!i) return ((this.measurementsCache = []), this.itemSizeCache.clear(), []);
                                0 === this.measurementsCache.length &&
                                    ((this.measurementsCache = this.options.initialMeasurementsCache),
                                    this.measurementsCache.forEach((e) => {
                                        this.itemSizeCache.set(e.key, e.size);
                                    }));
                                let r = this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
                                this.pendingMeasuredCacheIndexes = [];
                                let l = this.measurementsCache.slice(0, r);
                                for (let i = r; i < e; i++) {
                                    let e = n(i),
                                        r = 1 === this.options.lanes ? l[i - 1] : this.getFurthestMeasurement(l, i),
                                        a = r ? r.end + this.options.gap : t + s,
                                        c = o.get(e),
                                        d = 'number' == typeof c ? c : this.options.estimateSize(i),
                                        u = a + d,
                                        h = r ? r.lane : i % this.options.lanes;
                                    l[i] = { index: i, start: a, size: d, end: u, key: e, lane: h };
                                }
                                return ((this.measurementsCache = l), l);
                            },
                            { key: !1, debug: () => this.options.debug },
                        )),
                        (this.calculateRange = o(
                            () => [this.getMeasurements(), this.getSize(), this.getScrollOffset(), this.options.lanes],
                            (e, t, s, n) =>
                                (this.range =
                                    e.length > 0 && t > 0
                                        ? (function ({ measurements: e, outerSize: t, scrollOffset: s, lanes: n }) {
                                              let i = e.length - 1,
                                                  o = v(0, i, (t) => e[t].start, s),
                                                  r = o;
                                              if (1 === n) for (; r < i && e[r].end < s + t;) r++;
                                              else if (n > 1) {
                                                  let l = Array(n).fill(0);
                                                  for (; r < i && l.some((e) => e < s + t);) {
                                                      let t = e[r];
                                                      ((l[t.lane] = t.end), r++);
                                                  }
                                                  let a = Array(n).fill(s + t);
                                                  for (; o > 0 && a.some((e) => e >= s);) {
                                                      let t = e[o];
                                                      ((a[t.lane] = t.start), o--);
                                                  }
                                                  ((o = Math.max(0, o - (o % n))), (r = Math.min(i, r + (n - 1 - (r % n)))));
                                              }
                                              return { startIndex: o, endIndex: r };
                                          })({ measurements: e, outerSize: t, scrollOffset: s, lanes: n })
                                        : null),
                            { key: !1, debug: () => this.options.debug },
                        )),
                        (this.getVirtualIndexes = o(
                            () => {
                                let e = null,
                                    t = null,
                                    s = this.calculateRange();
                                return (
                                    s && ((e = s.startIndex), (t = s.endIndex)),
                                    this.maybeNotify.updateDeps([this.isScrolling, e, t]),
                                    [this.options.rangeExtractor, this.options.overscan, this.options.count, e, t]
                                );
                            },
                            (e, t, s, n, i) => (null === n || null === i ? [] : e({ startIndex: n, endIndex: i, overscan: t, count: s })),
                            { key: !1, debug: () => this.options.debug },
                        )),
                        (this.indexFromElement = (e) => {
                            let t = this.options.indexAttribute,
                                s = e.getAttribute(t);
                            return s ? parseInt(s, 10) : (console.warn(`Missing attribute name '${t}={index}' on measured element.`), -1);
                        }),
                        (this._measureElement = (e, t) => {
                            let s = this.indexFromElement(e),
                                n = this.measurementsCache[s];
                            if (!n) return;
                            let i = n.key,
                                o = this.elementsCache.get(i);
                            (o !== e && (o && this.observer.unobserve(o), this.observer.observe(e), this.elementsCache.set(i, e)),
                                e.isConnected && this.resizeItem(s, this.options.measureElement(e, t, this)));
                        }),
                        (this.resizeItem = (e, t) => {
                            let s = this.measurementsCache[e];
                            if (!s) return;
                            let n = t - (this.itemSizeCache.get(s.key) ?? s.size);
                            0 !== n &&
                                ((void 0 !== this.shouldAdjustScrollPositionOnItemSizeChange
                                    ? this.shouldAdjustScrollPositionOnItemSizeChange(s, n, this)
                                    : s.start < this.getScrollOffset() + this.scrollAdjustments) &&
                                    this._scrollToOffset(this.getScrollOffset(), { adjustments: (this.scrollAdjustments += n), behavior: void 0 }),
                                this.pendingMeasuredCacheIndexes.push(s.index),
                                (this.itemSizeCache = new Map(this.itemSizeCache.set(s.key, t))),
                                this.notify(!1));
                        }),
                        (this.measureElement = (e) => {
                            if (!e)
                                return void this.elementsCache.forEach((e, t) => {
                                    e.isConnected || (this.observer.unobserve(e), this.elementsCache.delete(t));
                                });
                            this._measureElement(e, void 0);
                        }),
                        (this.getVirtualItems = o(
                            () => [this.getVirtualIndexes(), this.getMeasurements()],
                            (e, t) => {
                                let s = [];
                                for (let n = 0, i = e.length; n < i; n++) {
                                    let i = t[e[n]];
                                    s.push(i);
                                }
                                return s;
                            },
                            { key: !1, debug: () => this.options.debug },
                        )),
                        (this.getVirtualItemForOffset = (e) => {
                            let t = this.getMeasurements();
                            if (0 !== t.length) return r(t[v(0, t.length - 1, (e) => r(t[e]).start, e)]);
                        }),
                        (this.getOffsetForAlignment = (e, t, s = 0) => {
                            let n = this.getSize(),
                                i = this.getScrollOffset();
                            ('auto' === t && (t = e >= i + n ? 'end' : 'start'), 'center' === t ? (e += (s - n) / 2) : 'end' === t && (e -= n));
                            let o = this.options.horizontal ? 'scrollWidth' : 'scrollHeight';
                            return Math.max(
                                Math.min(
                                    (this.scrollElement
                                        ? 'document' in this.scrollElement
                                            ? this.scrollElement.document.documentElement[o]
                                            : this.scrollElement[o]
                                        : 0) - n,
                                    e,
                                ),
                                0,
                            );
                        }),
                        (this.getOffsetForIndex = (e, t = 'auto') => {
                            e = Math.max(0, Math.min(e, this.options.count - 1));
                            let s = this.measurementsCache[e];
                            if (!s) return;
                            let n = this.getSize(),
                                i = this.getScrollOffset();
                            if ('auto' === t)
                                if (s.end >= i + n - this.options.scrollPaddingEnd) t = 'end';
                                else {
                                    if (!(s.start <= i + this.options.scrollPaddingStart)) return [i, t];
                                    t = 'start';
                                }
                            let o = 'end' === t ? s.end + this.options.scrollPaddingEnd : s.start - this.options.scrollPaddingStart;
                            return [this.getOffsetForAlignment(o, t, s.size), t];
                        }),
                        (this.isDynamicMode = () => this.elementsCache.size > 0),
                        (this.cancelScrollToIndex = () => {
                            null !== this.scrollToIndexTimeoutId &&
                                this.targetWindow &&
                                (this.targetWindow.clearTimeout(this.scrollToIndexTimeoutId), (this.scrollToIndexTimeoutId = null));
                        }),
                        (this.scrollToOffset = (e, { align: t = 'start', behavior: s } = {}) => {
                            (this.cancelScrollToIndex(),
                                'smooth' === s && this.isDynamicMode() && console.warn('The `smooth` scroll behavior is not fully supported with dynamic size.'),
                                this._scrollToOffset(this.getOffsetForAlignment(e, t), { adjustments: void 0, behavior: s }));
                        }),
                        (this.scrollToIndex = (e, { align: t = 'auto', behavior: s } = {}) => {
                            ((e = Math.max(0, Math.min(e, this.options.count - 1))),
                                this.cancelScrollToIndex(),
                                'smooth' === s && this.isDynamicMode() && console.warn('The `smooth` scroll behavior is not fully supported with dynamic size.'));
                            let n = this.getOffsetForIndex(e, t);
                            if (!n) return;
                            let [i, o] = n;
                            (this._scrollToOffset(i, { adjustments: void 0, behavior: s }),
                                'smooth' !== s &&
                                    this.isDynamicMode() &&
                                    this.targetWindow &&
                                    (this.scrollToIndexTimeoutId = this.targetWindow.setTimeout(() => {
                                        if (((this.scrollToIndexTimeoutId = null), this.elementsCache.has(this.options.getItemKey(e)))) {
                                            let [t] = r(this.getOffsetForIndex(e, o));
                                            1 > Math.abs(t - this.getScrollOffset()) || this.scrollToIndex(e, { align: o, behavior: s });
                                        } else this.scrollToIndex(e, { align: o, behavior: s });
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
                                s = this.getMeasurements();
                            if (0 === s.length) t = this.options.paddingStart;
                            else if (1 === this.options.lanes) t = (null == (e = s[s.length - 1]) ? void 0 : e.end) ?? 0;
                            else {
                                let e = Array(this.options.lanes).fill(null),
                                    n = s.length - 1;
                                for (; n > 0 && e.some((e) => null === e);) {
                                    let t = s[n];
                                    (null === e[t.lane] && (e[t.lane] = t.end), n--);
                                }
                                t = Math.max(...e.filter((e) => null !== e));
                            }
                            return Math.max(t - this.options.scrollMargin + this.options.paddingEnd, 0);
                        }),
                        (this._scrollToOffset = (e, { adjustments: t, behavior: s }) => {
                            this.options.scrollToFn(e, { behavior: s, adjustments: t }, this);
                        }),
                        (this.measure = () => {
                            ((this.itemSizeCache = new Map()), this.notify(!1));
                        }),
                        this.setOptions(e));
                }
            }
            let v = (e, t, s, n) => {
                    for (; e <= t;) {
                        let i = ((e + t) / 2) | 0,
                            o = s(i);
                        if (o < n) e = i + 1;
                        else {
                            if (!(o > n)) return i;
                            t = i - 1;
                        }
                    }
                    return e > 0 ? e - 1 : 0;
                },
                x = 'undefined' != typeof document ? n.useLayoutEffect : n.useEffect;
            function E(e) {
                let t = n.useReducer(() => ({}), {})[1],
                    s = {
                        ...e,
                        onChange: (s, n) => {
                            var o;
                            (n ? (0, i.flushSync)(t) : t(), null == (o = e.onChange) || o.call(e, s, n));
                        },
                    },
                    [o] = n.useState(() => new b(s));
                return (o.setOptions(s), x(() => o._didMount(), []), x(() => o._willUpdate()), o);
            }
            function S(e) {
                return E({ observeElementRect: d, observeElementOffset: p, scrollToFn: C, ...e });
            }
            function T(e) {
                return E({
                    getScrollElement: () => ('undefined' != typeof document ? window : null),
                    observeElementRect: h,
                    observeElementOffset: _,
                    scrollToFn: f,
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
        89209: (e, t, s) => {
            'use strict';
            s.d(t, { M: () => n });
            var n = (function (e) {
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
        89257: (e, t, s) => {
            'use strict';
            s.d(t, { p: () => G });
            var n = s(25839),
                i = s(82298),
                o = s(88204),
                r = s(74631),
                l = s(39004),
                a = s(8487),
                c = s(61493),
                d = s(68934),
                u = s(4071),
                h = s(35622),
                m = s(5867),
                p = s(4254),
                _ = s(51859),
                g = s(91149),
                f = s(92942),
                C = s(65343),
                b = s(89209),
                v = s(20790),
                x = s(27954),
                E = s(31488),
                S = s(36159),
                T = s(57549),
                y = s(69041),
                O = s(19412),
                I = s(79396),
                j = s(9931),
                A = s(6968),
                L = s(51246),
                w = s(66738),
                M = s(86869),
                R = s(52512),
                N = s(6323),
                z = s(27819),
                k = s(86432),
                D = s.n(k);
            let P = (0, o.PA)((e) => {
                let { className: t, artist: s } = e,
                    { ref: o, intersectionPropertyId: l } = (0, R.n)(),
                    {
                        wizard: { likeArtist: a, isArtistLiked: d },
                    } = (0, x.g)(),
                    { id: h, name: m, coverUri: _ } = s,
                    g = (0, r.useCallback)(() => {
                        a(h);
                    }, [a, h]),
                    f = d(h),
                    C = (0, r.useMemo)(
                        () =>
                            (0, n.jsx)(M.t, {
                                className: D().cover,
                                radius: 'round',
                                'data-test-id': c.e8.wizard.ARTIST_CARD,
                                children: (0, n.jsxs)(u.$, {
                                    radius: 'round',
                                    className: D().coverBlock,
                                    variant: 'default',
                                    onClick: g,
                                    withRipple: !1,
                                    withHover: !1,
                                    'aria-pressed': f,
                                    'aria-label': m,
                                    'data-test-id': c.e8.wizard.ARTIST_CARD_BUTTON,
                                    children: [
                                        (0, n.jsx)(N.B, { className: D().image, src: _ || z.A.src, fit: 'cover', alt: m, withAvatarReplace: !!_, 'aria-hidden': !0 }),
                                        (0, n.jsx)('div', {
                                            className: (0, i.$)(D().like),
                                            children: (0, n.jsx)(w.I, { variant: 'likedVariant', size: 's', className: D().icon }),
                                        }),
                                    ],
                                }),
                            }),
                        [f, _, m, g],
                    );
                return (0, n.jsx)(L.MN, {
                    ref: o,
                    className: (0, i.$)(D().root, { [D().root_selected]: f }, t),
                    textPosition: 'center',
                    title: (0, n.jsx)(p.HL, {
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
                    view: C,
                    'data-test-id': c.Kq.artist.ARTIST_ITEM,
                });
            });
            var W = s(22984),
                F = s.n(W);
            let B = { [_.u.Desktop]: { start: 40, end: 40 }, [_.u.Mobile]: { start: 40, end: 40 } },
                G = (0, o.PA)((e) => {
                    let { onFinishSuccess: t } = e,
                        { formatMessage: s } = (0, l.A)(),
                        {
                            wizard: o,
                            settings: { isMobile: _, isWindowsApplication: L, isLinuxApplication: w },
                            user: M,
                        } = (0, x.g)(),
                        { notify: R } = (0, f.l)(),
                        N = (0, v.z)(),
                        [z, k] = (0, d.d)(),
                        D = (0, m.zb)(0),
                        W = (0, r.useMemo)(
                            () => (e) => {
                                var t;
                                if (!D.onTabChange || e === D.value) return;
                                D.onTabChange(e);
                                let s = null == (t = o.genres[e]) ? void 0 : t.id;
                                (o.setFilter(s), null == z || z.scrollTo({ top: 0 }));
                            },
                            [o, D, z],
                        ),
                        G = (0, r.useMemo)(() => {
                            switch (o.selectedArtistsCounter) {
                                case 0:
                                    return s({ id: 'wizard.button-tune' });
                                case 1:
                                    return s({ id: 'wizard.button-little-more' });
                                case 2:
                                    return s({ id: 'wizard.button-one-more' });
                                default:
                                    return s({ id: 'wizard.button-done' });
                            }
                        }, [o.selectedArtistsCounter, s]),
                        V = (0, r.useMemo)(
                            () =>
                                (0, n.jsx)(j.wI, {
                                    className: F().tabCarousel,
                                    ...D,
                                    onTabChange: W,
                                    isShimmerVisible: o.loadingState === S.G.PENDING,
                                    shimmer: (0, n.jsx)(j.zr, { isActive: !0, className: F().tabCarousel, shimmerClassName: F().tabShimmer, count: _ ? 2 : 3 }),
                                    children: o.genres.map((e, t) =>
                                        (0, n.jsx)(
                                            I.o,
                                            {
                                                className: (0, i.$)(F().filter, { [F().filter_selected]: t === D.value }),
                                                titleClassName: F().tabTitle,
                                                title: e.title,
                                                value: t,
                                            },
                                            t,
                                        ),
                                    ),
                                }),
                            [o.genres, D, W, o.loadingState, _],
                        ),
                        H = (0, r.useCallback)(() => {
                            o.getArtists(60);
                        }, [o]);
                    (0, r.useEffect)(() => {
                        o.filter && H();
                    }, [o.filter, H]);
                    let U = (0, r.useCallback)(async () => {
                        (await o.getGenres(), H());
                    }, [o, H]);
                    ((0, r.useEffect)(() => {
                        o.modal.isOpened && U();
                    }, [o, o.modal.isOpened, U]),
                        (0, r.useEffect)(() => {
                            o.loadingState === S.G.REJECT &&
                                (o.modal.close(), R((0, n.jsx)(T.h, { error: s({ id: 'error-messages.error-load-wizard' }) }), { containerId: g.u.ERROR }));
                        }, [o, o.getGenres, o.loadingState, s, R]));
                    let X = (0, r.useMemo)(
                            () =>
                                (0, n.jsx)(p.DZ, {
                                    className: F().title,
                                    weight: 'bold',
                                    variant: 'h1',
                                    size: 'l',
                                    'data-test-id': c.e8.wizard.WIZARD_MODAL_TITLE,
                                    children: (0, n.jsx)(a.A, { id: 'wizard.modal-title' }),
                                }),
                            [],
                        ),
                        Y = (0, r.useCallback)(async () => {
                            (o.selectedArtistsCounter < 3 ? o.getArtists() : (await o.finish()) === E.F.OK && (await M.getSettings(), await (null == t ? void 0 : t())),
                                o.modal.close());
                        }, [t, M, o]);
                    return (
                        (0, r.useEffect)(
                            () => (
                                null == N ||
                                    N.addShortcutsListener(b.M.MAIN, C.l.CLOSE, () => {
                                        o.modal.isOpened && Y();
                                    }),
                                () => {
                                    null == N || N.removeShortcutsListener(b.M.MAIN, C.l.CLOSE);
                                }
                            ),
                            [Y, o.modal.isOpened, N],
                        ),
                        (0, n.jsxs)(h.a, {
                            className: (0, i.$)(F().root, { [F().root_withCustomControls]: L || w }),
                            headerClassName: F().modalHeader,
                            contentClassName: F().modalContent,
                            open: o.modal.isOpened,
                            onOpenChange: o.modal.onOpenChange,
                            onClose: Y,
                            size: 'fullscreen',
                            placement: 'center',
                            labelClose: s({ id: 'interface-actions.close' }),
                            closeButtonDataTestId: c.e8.wizard.WIZARD_MODAL_CLOSE_BUTTON,
                            'data-test-id': c.e8.wizard.WIZARD_MODAL,
                            header: _ && X,
                            escapeKey: !1,
                            children: [
                                (0, n.jsxs)('div', {
                                    className: F().wrapper,
                                    children: [
                                        !_ && X,
                                        (0, n.jsx)(p.HL, {
                                            className: F().text,
                                            variant: 'div',
                                            size: 'l',
                                            weight: 'normal',
                                            'data-test-id': c.e8.wizard.WIZARD_MODAL_TEXT,
                                            children: (0, n.jsx)(a.A, { id: 'wizard.modal-text' }),
                                        }),
                                        (0, n.jsx)(u.$, {
                                            className: F().button,
                                            size: _ ? 'm' : 'l',
                                            iconPosition: 'right',
                                            radius: 'xxxl',
                                            color: 'primary',
                                            onClick: Y,
                                            disabled: o.selectedArtistsCounter < 3,
                                            'data-test-id': c.e8.wizard.WIZARD_MODAL_BUTTON,
                                            children: (0, n.jsx)(p.HL, { variant: 'div', size: 'm', weight: 'medium', children: G }),
                                        }),
                                    ],
                                }),
                                (0, n.jsxs)('div', {
                                    className: F().mainContainer,
                                    children: [
                                        (0, n.jsx)(y.F, { className: F().carousel, carouselElement: V, scrollPadding: B }),
                                        (0, n.jsx)(A.$, {
                                            withFooter: !1,
                                            className: (0, i.$)(F().scrollContainer, F().important),
                                            itemContentCallback: (e) => {
                                                let t = o.artistsByGenre[e];
                                                if (!t) {
                                                    let e = s({ id: 'loading-messages.entity-is-loading' }, { entityName: s({ id: 'entity-names.artist' }) });
                                                    return (0, n.jsx)(O.V, { 'aria-label': e, round: !0, centered: !0 });
                                                }
                                                return (0, n.jsx)(P, { artist: t }, t.id);
                                            },
                                            data: o.artistsByGenre,
                                            endReached: H,
                                            listClassName: F().content,
                                            itemClassName: F().item,
                                            pageSize: 60,
                                            handleRef: k,
                                            'data-test-id': c.e8.wizard.WIZARD_MODAL_ARTISTS_GRID,
                                        }),
                                    ],
                                }),
                            ],
                        })
                    );
                });
        },
        94086: (e, t, s) => {
            Promise.resolve().then(s.bind(s, 41341));
        },
    },
    (e) => {
        (e.O(
            0,
            [
                3349, 7349, 5610, 8775, 8451, 1583, 8561, 1676, 6287, 2e3, 6749, 7339, 3472, 2121, 1632, 5743, 3084, 3021, 5058, 3789, 9468, 364, 1107, 6706, 1311, 5201,
                9212, 260, 4512, 9004, 4985, 7839, 7957, 9761, 9479, 1817, 3257, 4305, 3269, 4163, 3246, 4517, 3482, 6680, 6504, 5329, 8836, 820, 4434, 48, 862, 6361,
                5898, 2533, 8222, 4932, 5622, 9973, 5853, 6271, 7804, 3545, 4475, 5056, 7358,
            ],
            () => e((e.s = 94086)),
        ),
            (_N_E = e.O()));
    },
]);
