(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1175],
    {
        7999: (e, t, r) => {
            'use strict';
            r.d(t, { h: () => _ });
            var l = r(32290),
                i = r(8055),
                s = r(96103),
                n = r(55178),
                a = r(40996),
                o = r(57594),
                d = r(85377);
            let c = (e) => {
                    let { element: t, scrollTop: r, isMobile: l } = e,
                        i = 0.6 * t.clientHeight;
                    return r + (l ? 60 : 76) >= t.offsetTop + i;
                },
                _ = (0, s.PA)((e) => {
                    let { children: t, scrollElement: r, outerTitle: s = '', headerElement: _, headerThreshold: u, shouldHideHeader: h } = e,
                        [m, p] = (0, n.useState)(s),
                        [T, f] = (0, n.useState)(null),
                        [x, E] = (0, n.useState)(null),
                        [v, N] = (0, n.useState)(null),
                        [H, b] = (0, n.useState)(!1),
                        [k, w] = (0, n.useState)(!1),
                        [C, B] = (0, n.useState)(!1),
                        [S, y] = (0, n.useState)(!1),
                        {
                            settings: { isMobile: R },
                        } = (0, o.g)();
                    (0, n.useLayoutEffect)(() => {
                        p(s);
                    }, [s]);
                    let P = (0, n.useCallback)(() => {
                        let e = null != u ? u : 10,
                            t = _ ? Number(_.offsetTop) - e : e;
                        t < 0 && (t = 0);
                        let l = (e) => {
                            B(e > t),
                                h && y(e > 30),
                                (null == T ? void 0 : T.current) && b(c({ element: null == T ? void 0 : T.current, scrollTop: e, isMobile: R })),
                                (null == x ? void 0 : x.current) && w(c({ element: null == x ? void 0 : x.current, scrollTop: e, isMobile: R }));
                        };
                        R ? l(window.scrollY) : r && l(r.scrollTop);
                    }, [u, _, R, h, T, x, r]);
                    (0, n.useEffect)(() => {
                        R ? 0 === window.scrollY && B(!1) : (r && 0 !== r.scrollTop) || B(!1);
                    }, [r, null == r ? void 0 : r.scrollTop, R]);
                    let j = (0, n.useMemo)(() => (R ? { onScroll: (0, i.A)(P, 200) } : { onScroll: (0, i.A)(P, 200), elementRef: r }), [P, r, R]);
                    (0, a.L)(j);
                    let I = (0, n.useMemo)(
                        () => ({
                            title: m,
                            setTitle: p,
                            titleElement: T,
                            scrollElement: R ? null : r,
                            setTitleElement: f,
                            childElement: x,
                            setChildElement: E,
                            child: v,
                            setChild: N,
                            isScrolledChild: k,
                            isScrolledTitle: H,
                            isScrolling: C,
                            isHeaderHidden: S,
                        }),
                        [m, H, T, r, C, R, v, x, k, S],
                    );
                    return (0, l.jsx)(d.B.Provider, { value: I, children: t });
                });
        },
        18518: (e) => {
            e.exports = {
                backdrop: 'BrandedPlaylistHeader_backdrop__hLImj',
                title: 'BrandedPlaylistHeader_title__gPU9U',
                title_show: 'BrandedPlaylistHeader_title_show__e4u0h',
                show: 'BrandedPlaylistHeader_show__42bNL',
                title_withOffset: 'BrandedPlaylistHeader_title_withOffset__QppO0',
                root: 'BrandedPlaylistHeader_root__jXK4F',
                root_withChildren: 'BrandedPlaylistHeader_root_withChildren__6BMwV',
                root_sticky: 'BrandedPlaylistHeader_root_sticky__E_n81',
                root_blurWithTitle: 'BrandedPlaylistHeader_root_blurWithTitle__lmykd',
                child: 'BrandedPlaylistHeader_child__35wjg',
                child_show: 'BrandedPlaylistHeader_child_show__Uvbef',
                container: 'BrandedPlaylistHeader_container__s66Ay',
                container_withMultipleChildren: 'BrandedPlaylistHeader_container_withMultipleChildren__76B6E',
                header: 'BrandedPlaylistHeader_header__jdTQJ',
                actions: 'BrandedPlaylistHeader_actions__we7tI',
                leftBlock: 'BrandedPlaylistHeader_leftBlock__iSsfy',
            };
        },
        40996: (e, t, r) => {
            'use strict';
            r.d(t, { L: () => c });
            var l,
                i = r(72812),
                s = r(55178),
                n = {
                    6699: (e, t, r) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.useDebouncedToggle = void 0);
                        let l = r(352),
                            i = r(810);
                        t.useDebouncedToggle = (e) => {
                            let { delay: t, initialState: r, throttleTimeout: s } = e,
                                n = (0, i.useRef)(null),
                                [a, o] = (0, i.useState)(!!r),
                                d = (0, i.useMemo)(
                                    () =>
                                        (0, l.throttle)(() => {
                                            o(!r),
                                                n.current && window.clearTimeout(n.current),
                                                (n.current = window.setTimeout(() => {
                                                    o(!!r);
                                                }, t));
                                        }, s),
                                    [t, r, s],
                                ),
                                c = (0, i.useCallback)(() => {
                                    o(!!r), n.current && window.clearTimeout(n.current);
                                }, [r]);
                            return (
                                (0, i.useEffect)(
                                    () => () => {
                                        n.current && window.clearTimeout(n.current);
                                    },
                                    [],
                                ),
                                { state: a, handleDebouncedToggle: d, reset: c }
                            );
                        };
                    },
                    361: (e, t) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.getElementFromRefOrElement = void 0),
                            (t.getElementFromRefOrElement = (e) => {
                                if (void 0 !== e) {
                                    if (null === e || e instanceof HTMLElement) return e;
                                    if (null === e.current || e.current instanceof HTMLElement) return e.current;
                                }
                            });
                    },
                    352: (e) => {
                        e.exports = i;
                    },
                    810: (e) => {
                        e.exports = l || (l = r.t(s, 2));
                    },
                },
                a = {};
            function o(e) {
                var t = a[e];
                if (void 0 !== t) return t.exports;
                var r = (a[e] = { exports: {} });
                return n[e](r, r.exports, o), r.exports;
            }
            var d = {};
            (() => {
                Object.defineProperty(d, '__esModule', { value: !0 }), (d.useScroll = void 0);
                let e = o(810),
                    t = o(361),
                    r = o(6699);
                d.useScroll = (l) => {
                    let { onScroll: i, listenIsScrolling: s, elementRef: n } = l,
                        { state: a, handleDebouncedToggle: o } = (0, r.useDebouncedToggle)({ delay: 1e3, throttleTimeout: 100 }),
                        d = (0, e.useCallback)(() => {
                            s && o(), null == i || i();
                        }, [s, o, i]);
                    return (
                        (0, e.useEffect)(() => {
                            let e = (0, t.getElementFromRefOrElement)(n);
                            if (null === e) return;
                            let r = null != e ? e : window,
                                l = { capture: !0, passive: !0 };
                            return r.addEventListener('scroll', d, l), () => r.removeEventListener('scroll', d, l);
                        }, [n, d]),
                        a
                    );
                };
            })(),
                d.__esModule;
            var c = d.useScroll;
        },
        47584: (e) => {
            e.exports = {
                staticItem: 'TextHeader_staticItem__OMNew',
                staticItem_hide: 'TextHeader_staticItem_hide__JtdeC',
                backdrop: 'TextHeader_backdrop__39FkE',
                stickyItem: 'TextHeader_stickyItem__WF2hh',
                container: 'TextHeader_container__I0pVO',
                stickyItem_scrolling: 'TextHeader_stickyItem_scrolling__YPBOL',
            };
        },
        48870: (e) => {
            e.exports = {
                title: 'InnerHeader_title__5aVLP',
                title_show: 'InnerHeader_title_show__RvHsQ',
                show: 'InnerHeader_show__ji3KF',
                backdrop: 'InnerHeader_backdrop__iRxvk',
                root: 'InnerHeader_root__u0zu1',
                root_withChildren: 'InnerHeader_root_withChildren__rLTCN',
                root_sticky: 'InnerHeader_root_sticky__baN8o',
                child: 'InnerHeader_child__DGTfK',
                child_show: 'InnerHeader_child_show__7MFTV',
                actions: 'InnerHeader_actions__x6ruG',
                plusButton: 'InnerHeader_plusButton__eH4NP',
                plusButton_show: 'InnerHeader_plusButton_show__jwPtB',
            };
        },
        50396: (e) => {
            e.exports = {
                root: 'StickyHeader_root__s_rPg',
                backdrop: 'StickyHeader_backdrop__fCnOw',
                container: 'StickyHeader_container__8mTBx',
                container_scrolling: 'StickyHeader_container_scrolling__nV9EK',
                plusButton: 'StickyHeader_plusButton__80nx5',
                plusButton_show: 'StickyHeader_plusButton_show__lN22Y',
                children: 'StickyHeader_children__5Jlr1',
            };
        },
        74694: (e, t, r) => {
            'use strict';
            r.d(t, { Y: () => K, V: () => $ });
            var l = r(32290),
                i = r(96103),
                s = r(71768),
                n = r(27246),
                a = r(24116),
                o = r(63618),
                d = r(55178),
                c = r(21732),
                _ = r(91027),
                u = r(54862),
                h = r(71926),
                m = r(98740),
                p = r(57594),
                T = r(15509),
                f = r(12894),
                x = r(81471),
                E = r.n(x),
                v = r(85377),
                N = r(18518),
                H = r.n(N);
            let b = 'header-block-controls',
                k = (0, i.PA)((e) => {
                    let { showControls: t = !0, ...r } = e,
                        { isScrolledTitle: i, isScrolledChild: s, isScrolling: n, title: a, titleElement: x, child: N, childElement: k } = (0, d.useContext)(v.B),
                        {
                            settings: { isMobile: w, browserInfo: C },
                            user: { hasPlus: B, isAuthorized: S },
                        } = (0, p.g)(),
                        [y, R] = (0, u.d)(),
                        P = !B && !(null == C ? void 0 : C.isTouch),
                        {
                            openPaymentWidgetModal: j,
                            saveOfferAndAuthorize: I,
                            isShimmerActive: L,
                            isShimmerVisible: g,
                            mainText: A,
                            mainTextA11y: O,
                        } = (0, m.D)({ storeName: 'music', isEnabled: !B, offerElement: { element: y, intersectionPropertyId: b, isVisible: i, requireTransition: !0 } }),
                        D = (0, _.c)(() => {
                            var e;
                            null == x || null == (e = x.current) || e.scrollIntoView({ block: 'center', behavior: 'smooth' });
                        }),
                        M = (0, _.c)(() => {
                            var e;
                            null == k || null == (e = k.current) || e.scrollIntoView({ block: 'center', behavior: 'smooth' });
                        }),
                        F = (0, _.c)(() => {
                            if (!S) return void I();
                            j();
                        });
                    return (0, l.jsx)('header', {
                        className: (0, o.$)(H().root, { [H().root_sticky]: n, [H().root_withChildren]: s, [H().root_blurWithTitle]: !i }),
                        'data-test-id': c.S7.BRANDED_PLAYLIST_HEADER,
                        ...r,
                        children: (0, l.jsx)('div', {
                            className: H().header,
                            children: (0, l.jsxs)('div', {
                                className: (0, o.$)(H().container, { [H().container_withMultipleChildren]: (0, d.isValidElement)(N) }),
                                children: [
                                    (0, l.jsx)('div', { className: H().backdrop }),
                                    (0, l.jsxs)('div', {
                                        className: H().leftBlock,
                                        children: [
                                            t && (0, l.jsx)(f.L, { withForwardControl: !w, className: H().actions }),
                                            i &&
                                                (0, l.jsxs)(l.Fragment, {
                                                    children: [
                                                        (0, l.jsx)(h.HL, {
                                                            variant: 'div',
                                                            type: 'text',
                                                            className: (0, o.$)(H().title, { [H().title_show]: i, [H().title_withOffset]: t }),
                                                            lineClamp: 1,
                                                            onClick: D,
                                                            title: n && a ? a : '',
                                                            'aria-hidden': !0,
                                                            children: a,
                                                        }),
                                                        P &&
                                                            (0, l.jsx)(T.b, {
                                                                mainText: A,
                                                                ariaLabel: O,
                                                                mainTextFontSize: 'm',
                                                                ref: R,
                                                                onClick: F,
                                                                isShimmerActive: L,
                                                                isShimmerVisible: g,
                                                                className: E().plusButton,
                                                                'data-intersection-property-id': b,
                                                                'data-test-id': c.S7.HEADER_PLUS_BUTTON,
                                                            }),
                                                    ],
                                                }),
                                        ],
                                    }),
                                    (0, d.isValidElement)(N) &&
                                        (0, l.jsx)('div', { onClick: M, className: (0, o.$)(H().child, { [H().child_show]: s }), 'aria-hidden': !0, children: N }),
                                ],
                            }),
                        }),
                    });
                });
            var w = r(50396),
                C = r.n(w);
            let B = 'header-block-controls',
                S = (e) => {
                    let { className: t, children: r, onClick: i, 'aria-hidden': s, 'data-testid': n } = e,
                        { isScrolling: a } = (0, d.useContext)(v.B),
                        {
                            user: { hasPlus: h, isAuthorized: f },
                            settings: { browserInfo: x },
                        } = (0, p.g)(),
                        N = !h && !(null == x ? void 0 : x.isTouch),
                        [H, b] = (0, u.d)(),
                        {
                            openPaymentWidgetModal: k,
                            saveOfferAndAuthorize: w,
                            isShimmerActive: S,
                            isShimmerVisible: y,
                            mainText: R,
                            mainTextA11y: P,
                        } = (0, m.D)({ storeName: 'music', isEnabled: !h, offerElement: { element: H, intersectionPropertyId: B, isVisible: a, requireTransition: !0 } }),
                        j = (0, _.c)(() => {
                            if (!f) return void w();
                            k();
                        });
                    return (0, l.jsx)('div', {
                        className: C().root,
                        children: (0, l.jsxs)('div', {
                            className: (0, o.$)(C().container, { [C().container_scrolling]: a }, t),
                            onClick: i,
                            'aria-hidden': s,
                            'data-testid': n,
                            'data-test-id': c.S7.STICKY_HEADER,
                            children: [
                                (0, l.jsx)('div', { className: C().backdrop }),
                                (0, l.jsx)('div', { className: C().children, children: r }),
                                N &&
                                    (0, l.jsx)(T.b, {
                                        mainText: R,
                                        ariaLabel: P,
                                        mainTextFontSize: 'm',
                                        ref: b,
                                        onClick: j,
                                        isShimmerActive: S,
                                        isShimmerVisible: y,
                                        className: (0, o.$)(E().plusButton, C().plusButton, { [C().plusButton_show]: a }),
                                        'data-intersection-property-id': B,
                                        'data-test-id': c.S7.HEADER_PLUS_BUTTON,
                                    }),
                            ],
                        }),
                    });
                };
            var y = r(98610),
                R = r.n(y);
            let P = (0, i.PA)((e) => {
                let {
                        className: t,
                        children: r,
                        stickyChild: i,
                        isScrolledToTop: s = !0,
                        staticClassName: n,
                        stickyClassName: a,
                        compositeHeaderRef: _,
                        'aria-hidden': u,
                    } = e,
                    { isScrolling: h, scrollElement: m } = (0, d.useContext)(v.B),
                    p = (0, d.useRef)(null),
                    T = (0, d.useCallback)(() => {
                        if (m && s) m.scrollTo({ top: 0, behavior: 'smooth' });
                        else {
                            var e;
                            null == p || null == (e = p.current) || e.scrollIntoView({ block: 'center', behavior: 'smooth' });
                        }
                    }, [p, m, s]);
                return (0, l.jsxs)('header', {
                    className: (0, o.$)(R().root, t),
                    'aria-hidden': u,
                    ref: _,
                    'data-test-id': c.S7.COMPOSITE_HEADER_CONTAINER,
                    children: [
                        (0, l.jsx)('div', { className: (0, o.$)(R().static, { [R().static_hidden]: h }, n), ref: p, 'data-test-id': c.S7.COMPOSITE_HEADER, children: r }),
                        (0, l.jsx)(S, { className: a, onClick: T, 'aria-hidden': !0, 'data-test-id': c.S7.COMPOSITE_STICKY_HEADER, children: i }),
                    ],
                });
            });
            var j = r(48870),
                I = r.n(j);
            let L = 'header-block-controls',
                g = (0, i.PA)((e) => {
                    let { headerRef: t, ...r } = e,
                        { isScrolledTitle: i, isScrolledChild: s, isScrolling: n, title: a, titleElement: x, child: N, childElement: H } = (0, d.useContext)(v.B),
                        {
                            settings: { isMobile: b, browserInfo: k },
                            user: { hasPlus: w, isAuthorized: C },
                        } = (0, p.g)(),
                        [B, S] = (0, u.d)(),
                        y = !w && !(null == k ? void 0 : k.isTouch),
                        {
                            openPaymentWidgetModal: R,
                            saveOfferAndAuthorize: P,
                            isShimmerActive: j,
                            isShimmerVisible: g,
                            mainText: A,
                            mainTextA11y: O,
                        } = (0, m.D)({ storeName: 'music', isEnabled: !w, offerElement: { element: B, intersectionPropertyId: L, isVisible: i, requireTransition: !0 } }),
                        D = (0, _.c)(() => {
                            var e;
                            null == x || null == (e = x.current) || e.scrollIntoView({ block: 'center', behavior: 'smooth' });
                        }),
                        M = (0, _.c)(() => {
                            var e;
                            null == H || null == (e = H.current) || e.scrollIntoView({ block: 'center', behavior: 'smooth' });
                        }),
                        F = (0, _.c)(() => {
                            if (!C) return void P();
                            R();
                        });
                    return (0, l.jsx)('header', {
                        className: (0, o.$)(E().inner, I().root, { [I().root_sticky]: n, [I().root_withChildren]: s }),
                        ref: t,
                        'data-test-id': c.S7.INNER_HEADER,
                        ...r,
                        children: (0, l.jsx)('div', {
                            className: E().header,
                            children: (0, l.jsxs)('div', {
                                className: E().container,
                                children: [
                                    (0, l.jsx)('div', { className: I().backdrop }),
                                    (0, l.jsxs)('div', {
                                        className: E().leftBlock,
                                        children: [
                                            (0, l.jsx)(f.L, { withForwardControl: !b, className: I().actions }),
                                            (0, l.jsx)(h.HL, {
                                                variant: 'div',
                                                type: 'text',
                                                className: (0, o.$)(E().title, I().title, { [I().title_show]: i }),
                                                lineClamp: 1,
                                                onClick: D,
                                                title: n && a ? a : '',
                                                'aria-hidden': !0,
                                                children: a,
                                            }),
                                            y &&
                                                (0, l.jsx)(T.b, {
                                                    mainText: A,
                                                    ariaLabel: O,
                                                    mainTextFontSize: 'm',
                                                    ref: S,
                                                    onClick: F,
                                                    isShimmerActive: j,
                                                    isShimmerVisible: g,
                                                    className: (0, o.$)(E().plusButton, I().plusButton, { [I().plusButton_show]: i }),
                                                    'data-intersection-property-id': L,
                                                    'data-test-id': c.S7.HEADER_PLUS_BUTTON,
                                                }),
                                        ],
                                    }),
                                    (0, l.jsx)('div', { onClick: M, className: (0, o.$)(I().child, { [I().child_show]: s }), 'aria-hidden': !0, children: N }),
                                ],
                            }),
                        }),
                    });
                });
            var A = r(86838),
                O = r.n(A);
            let D = 'header-block-controls',
                M = (e) => {
                    let { style: t } = e,
                        { isScrolling: r, title: i, titleElement: s, isScrolledTitle: n } = (0, d.useContext)(v.B),
                        {
                            user: { hasPlus: a, isAuthorized: f },
                            settings: { browserInfo: x },
                        } = (0, p.g)(),
                        N = !a && !(null == x ? void 0 : x.isTouch),
                        [H, b] = (0, u.d)(),
                        {
                            openPaymentWidgetModal: k,
                            saveOfferAndAuthorize: w,
                            isShimmerActive: C,
                            isShimmerVisible: B,
                            mainText: S,
                            mainTextA11y: y,
                        } = (0, m.D)({ storeName: 'music', isEnabled: !a, offerElement: { element: H, intersectionPropertyId: D, isVisible: n, requireTransition: !0 } }),
                        R = (0, _.c)(() => {
                            var e;
                            null == s || null == (e = s.current) || e.scrollIntoView({ block: 'center', behavior: 'smooth' });
                        }),
                        P = (0, _.c)(() => {
                            if (!f) return void w();
                            k();
                        });
                    return (0, l.jsx)('header', {
                        className: (0, o.$)(E().inner, O().root, { [O().root_visible]: n }),
                        style: t,
                        'data-test-id': c.S7.PROMO_LANDING_HEADER,
                        children: (0, l.jsx)('div', {
                            className: E().header,
                            children: (0, l.jsxs)('div', {
                                className: (0, o.$)(E().container, O().container),
                                children: [
                                    (0, l.jsx)('div', { className: O().backdrop }),
                                    (0, l.jsxs)('div', {
                                        className: E().leftBlock,
                                        children: [
                                            (0, l.jsx)(h.HL, {
                                                variant: 'div',
                                                type: 'text',
                                                className: (0, o.$)(E().title, O().title),
                                                lineClamp: 1,
                                                onClick: R,
                                                title: r && i ? i : '',
                                                'aria-hidden': !0,
                                                children: i,
                                            }),
                                            N &&
                                                (0, l.jsx)(T.b, {
                                                    mainText: S,
                                                    ariaLabel: y,
                                                    mainTextFontSize: 'm',
                                                    ref: b,
                                                    onClick: P,
                                                    isShimmerActive: C,
                                                    isShimmerVisible: B,
                                                    className: E().plusButton,
                                                    'data-intersection-property-id': D,
                                                    'data-test-id': c.S7.HEADER_PLUS_BUTTON,
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                        }),
                    });
                };
            var F = r(47584),
                V = r.n(F);
            let U = 'header-block-controls',
                Y = (0, i.PA)((e) => {
                    let { className: t, children: r, showControls: i = !0, withForwardControl: s = !0, withBackwardControl: n = !0, disableStickyVariant: a = !1 } = e,
                        { isScrolling: x, title: N, scrollElement: H, isHeaderHidden: b } = (0, d.useContext)(v.B),
                        k = (0, d.useRef)(null),
                        [w, C] = (0, u.d)(),
                        {
                            user: { hasPlus: B, isAuthorized: S },
                            settings: { browserInfo: y },
                        } = (0, p.g)(),
                        R = !B && !(null == y ? void 0 : y.isTouch),
                        {
                            openPaymentWidgetModal: P,
                            saveOfferAndAuthorize: j,
                            isShimmerActive: I,
                            isShimmerVisible: L,
                            mainText: g,
                            mainTextA11y: A,
                        } = (0, m.D)({ storeName: 'music', isEnabled: !B, offerElement: { element: w, intersectionPropertyId: U, isVisible: x, requireTransition: !0 } }),
                        O = (0, _.c)(() => {
                            if (H) H.scrollTo({ top: 0, behavior: 'smooth' });
                            else {
                                var e;
                                null == k || null == (e = k.current) || e.scrollIntoView({ block: 'center', behavior: 'smooth' });
                            }
                        }),
                        D = (0, d.useMemo)(() => (0, l.jsx)(h.DZ, { variant: 'h2', weight: 'bold', size: 's', lineClamp: 1, children: N }), [N]),
                        M = i && (s || n),
                        F = (0, _.c)(() => {
                            if (!S) return void j();
                            P();
                        });
                    return (0, l.jsxs)('header', {
                        className: (0, o.$)(V().root, t),
                        children: [
                            (0, l.jsxs)('div', {
                                className: (0, o.$)(V().staticItem, { [V().staticItem_hide]: x || b }),
                                ref: k,
                                'data-test-id': c.S7.TEXT_HEADER,
                                children: [M && (0, l.jsx)(f.L, { withForwardControl: s, withBackwardControl: n }), r],
                            }),
                            !a &&
                                (0, l.jsxs)('div', {
                                    className: (0, o.$)(V().stickyItem, { [V().stickyItem_scrolling]: x }),
                                    onClick: O,
                                    'aria-hidden': !0,
                                    'data-test-id': c.S7.TEXT_STICKY_HEADER,
                                    children: [
                                        (0, l.jsx)('div', { className: V().backdrop }),
                                        (0, l.jsxs)('div', {
                                            className: V().container,
                                            children: [M && (0, l.jsx)(f.L, { withForwardControl: s, withBackwardControl: n, shouldFocusOnMount: !1 }), D],
                                        }),
                                        R &&
                                            (0, l.jsx)(T.b, {
                                                mainText: g,
                                                ariaLabel: A,
                                                mainTextFontSize: 'm',
                                                ref: C,
                                                onClick: F,
                                                isShimmerActive: I,
                                                isShimmerVisible: L,
                                                className: E().plusButton,
                                                'data-intersection-property-id': U,
                                                'data-test-id': c.S7.HEADER_PLUS_BUTTON,
                                            }),
                                    ],
                                }),
                        ],
                    });
                });
            var $ = (function (e) {
                return (
                    (e.INNER = 'INNER'),
                    (e.TEXT = 'TEXT'),
                    (e.COMPOSITE = 'COMPOSITE'),
                    (e.PROMO_LANDING = 'PROMO_LANDING'),
                    (e.BRANDED_PLAYLIST = 'BRANDED_PLAYLIST'),
                    (e.STICKY = 'STICKY'),
                    e
                );
            })({});
            let K = (0, i.PA)((e) => {
                let {
                    variant: t = 'INNER',
                    style: r,
                    children: i,
                    showControls: o,
                    withBackwardControl: d,
                    withForwardControl: c,
                    className: _ = '',
                    stickyChild: u,
                    staticClassName: h,
                    stickyClassName: m,
                    innerHeaderRef: p,
                    compositeHeaderRef: T,
                    disableStickyVariant: f,
                    ...x
                } = e;
                switch (t) {
                    case 'INNER':
                        return (0, l.jsx)(s.r, { page: n.l.HEADER, places: [a.R.BUTTON], children: (0, l.jsx)(g, { headerRef: p, style: r }) });
                    case 'TEXT':
                        return (0, l.jsx)(s.r, {
                            page: n.l.HEADER,
                            places: [a.R.BUTTON],
                            children: (0, l.jsx)(Y, { showControls: o, withBackwardControl: d, withForwardControl: c, disableStickyVariant: f, children: i }),
                        });
                    case 'COMPOSITE':
                        return (0, l.jsx)(s.r, {
                            page: n.l.HEADER,
                            places: [a.R.BUTTON],
                            children: (0, l.jsx)(P, { className: _, stickyChild: u, staticClassName: h, stickyClassName: m, compositeHeaderRef: T, ...x, children: i }),
                        });
                    case 'PROMO_LANDING':
                        return (0, l.jsx)(s.r, { page: n.l.HEADER, places: [a.R.BUTTON], children: (0, l.jsx)(M, { style: r }) });
                    case 'BRANDED_PLAYLIST':
                        return (0, l.jsx)(s.r, { page: n.l.HEADER, places: [a.R.BUTTON], children: (0, l.jsx)(k, { showControls: o, children: i }) });
                    case 'STICKY':
                        return (0, l.jsx)('header', {
                            className: _,
                            children: (0, l.jsx)(s.r, { page: n.l.HEADER, places: [a.R.BUTTON], children: (0, l.jsx)(S, { className: m, ...x, children: u }) }),
                        });
                }
            });
        },
        81471: (e) => {
            e.exports = {
                inner: 'CommonHeader_inner__DFpbr',
                header: 'CommonHeader_header__41HAE',
                container: 'CommonHeader_container__Jgf0s',
                leftBlock: 'CommonHeader_leftBlock__dJUBK',
                title: 'CommonHeader_title__RSbBG',
                plusButton: 'CommonHeader_plusButton__oe8Gh',
            };
        },
        83920: (e, t, r) => {
            'use strict';
            r.d(t, { M: () => i, g: () => s });
            var l = r(55178);
            let i = (0, l.createContext)({
                    contentRef: null,
                    defaultLayoutRef: null,
                    contentRootRef: null,
                    contentScrollRef: null,
                    sideBannerRef: null,
                    playlistStickyFiltersRef: null,
                    playlistStaticFiltersRef: null,
                    compositePlayerBarRef: null,
                    paywallRef: null,
                    setDefaultLayoutRef: () => {},
                    setContentRef: () => {},
                    setContentRootRef: () => {},
                    setSideBannerRef: () => {},
                    setContentScrollRef: () => {},
                    setPlaylistStickyFiltersRef: () => {},
                    setPlaylistStaticFiltersRef: () => {},
                    setCompositePlayerBarRef: () => {},
                    setPaywallRef: () => {},
                }),
                s = () => (0, l.useContext)(i);
        },
        85377: (e, t, r) => {
            'use strict';
            r.d(t, { B: () => l });
            let l = (0, r(55178).createContext)({
                title: null,
                setTitle: () => {},
                titleElement: null,
                scrollElement: null,
                setTitleElement: () => {},
                child: null,
                setChild: () => {},
                childElement: null,
                setChildElement: () => {},
                isScrolledChild: !1,
                isScrolledTitle: !1,
                isScrolling: !1,
                isHeaderHidden: !1,
            });
        },
        86838: (e) => {
            e.exports = {
                inner: 'PromoLandingHeader_inner__hKls8',
                header: 'PromoLandingHeader_header__gKwtu',
                container: 'PromoLandingHeader_container__JD5rw',
                leftBlock: 'PromoLandingHeader_leftBlock__jEcOR',
                title: 'PromoLandingHeader_title__LqClE',
                plusButton: 'PromoLandingHeader_plusButton__27yUf',
                backdrop: 'PromoLandingHeader_backdrop__AYF3a',
                root: 'PromoLandingHeader_root__zLOun',
                root_visible: 'PromoLandingHeader_root_visible__yB3YQ',
            };
        },
        98610: (e) => {
            e.exports = { static: 'CompositeHeader_static__pZdrc', static_hidden: 'CompositeHeader_static_hidden__jHPYh' };
        },
    },
]);
