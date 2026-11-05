(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2470],
    {
        10312: (e) => {
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
        28949: (e) => {
            e.exports = {
                inner: 'CommonHeader_inner__DFpbr',
                header: 'CommonHeader_header__41HAE',
                container: 'CommonHeader_container__Jgf0s',
                leftBlock: 'CommonHeader_leftBlock__dJUBK',
                title: 'CommonHeader_title__RSbBG',
                plusButton: 'CommonHeader_plusButton__oe8Gh',
            };
        },
        37080: (e) => {
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
        44230: (e, t, r) => {
            'use strict';
            r.d(t, { M: () => i, g: () => n });
            var l = r(53548);
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
                n = () => (0, l.useContext)(i);
        },
        46079: (e, t, r) => {
            'use strict';
            r.d(t, { j: () => l });
            let l = (0, r(53548).createContext)({ isPrefetchDisabled: !0, isPrefetchOnHover: !1 });
        },
        47294: (e) => {
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
        48136: (e) => {
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
        50322: (e) => {
            e.exports = {
                staticItem: 'TextHeader_staticItem__OMNew',
                staticItem_hide: 'TextHeader_staticItem_hide__JtdeC',
                backdrop: 'TextHeader_backdrop__39FkE',
                stickyItem: 'TextHeader_stickyItem__WF2hh',
                container: 'TextHeader_container__I0pVO',
                stickyItem_scrolling: 'TextHeader_stickyItem_scrolling__YPBOL',
            };
        },
        54486: (e, t, r) => {
            'use strict';
            r.d(t, { L: () => c });
            var l,
                i = r(14022),
                n = r(53548),
                o = {
                    8612: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useDebouncedToggle = void 0));
                        let l = r(352),
                            i = r(810);
                        t.useDebouncedToggle = (e) => {
                            let { delay: t, initialState: r, throttleTimeout: n } = e,
                                o = (0, i.useRef)(null),
                                [s, a] = (0, i.useState)(!!r),
                                d = (0, i.useMemo)(
                                    () =>
                                        (0, l.throttle)(() => {
                                            (a(!r),
                                                o.current && window.clearTimeout(o.current),
                                                (o.current = window.setTimeout(() => {
                                                    a(!!r);
                                                }, t)));
                                        }, n),
                                    [t, r, n],
                                ),
                                c = (0, i.useCallback)(() => {
                                    (a(!!r), o.current && window.clearTimeout(o.current));
                                }, [r]);
                            return (
                                (0, i.useEffect)(
                                    () => () => {
                                        o.current && window.clearTimeout(o.current);
                                    },
                                    [],
                                ),
                                { state: s, handleDebouncedToggle: d, reset: c }
                            );
                        };
                    },
                    1848: (e, t) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.getElementFromRefOrElement = void 0),
                            (t.getElementFromRefOrElement = (e) => {
                                if (void 0 !== e) {
                                    if (null === e || e instanceof HTMLElement) return e;
                                    if (null === e.current || e.current instanceof HTMLElement) return e.current;
                                }
                            }));
                    },
                    352: (e) => {
                        e.exports = i;
                    },
                    810: (e) => {
                        e.exports = l || (l = r.t(n, 2));
                    },
                },
                s = {};
            function a(e) {
                var t = s[e];
                if (void 0 !== t) return t.exports;
                var r = (s[e] = { exports: {} });
                return (o[e](r, r.exports, a), r.exports);
            }
            var d = {};
            ((() => {
                (Object.defineProperty(d, '__esModule', { value: !0 }), (d.useScroll = void 0));
                let e = a(810),
                    t = a(1848),
                    r = a(8612);
                d.useScroll = (l) => {
                    let { onScroll: i, listenIsScrolling: n, elementRef: o } = l,
                        { state: s, handleDebouncedToggle: a } = (0, r.useDebouncedToggle)({ delay: 1e3, throttleTimeout: 100 }),
                        d = (0, e.useCallback)(() => {
                            (n && a(), null == i || i());
                        }, [n, a, i]);
                    return (
                        (0, e.useEffect)(() => {
                            let e = (0, t.getElementFromRefOrElement)(o);
                            if (null === e) return;
                            let r = null != e ? e : window,
                                l = { capture: !0, passive: !0 };
                            return (r.addEventListener('scroll', d, l), () => r.removeEventListener('scroll', d, l));
                        }, [o, d]),
                        s
                    );
                };
            })(),
                d.__esModule);
            var c = d.useScroll;
        },
        63807: (e, t, r) => {
            'use strict';
            r.d(t, { B: () => l });
            let l = (0, r(53548).createContext)({
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
        65453: (e, t, r) => {
            'use strict';
            r.d(t, { N: () => d });
            var l,
                i = r(53548),
                n = {
                    5881: (e, t, r) => {
                        function l() {
                            for (var e, t, r = 0, l = ''; r < arguments.length;)
                                (e = arguments[r++]) &&
                                    (t = (function e(t) {
                                        var r,
                                            l,
                                            i = '';
                                        if ('string' == typeof t || 'number' == typeof t) i += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (r = 0; r < t.length; r++) t[r] && (l = e(t[r])) && (i && (i += ' '), (i += l));
                                            else for (r in t) t[r] && (i && (i += ' '), (i += r));
                                        return i;
                                    })(e)) &&
                                    (l && (l += ' '), (l += t));
                            return l;
                        }
                        (r.r(t), r.d(t, { clsx: () => l, default: () => i }));
                        let i = l;
                    },
                    7354: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => l }));
                        let l = {
                            root: 'buOTZq_TKQOVyjMLrXvB',
                            block: 'BSPmaubc8UL2KHOMLV4A',
                            iconContainer: 'VUb2BxfgkGQhG1RDQGwF',
                            iconOnly: 'WhDaA5aAfZSjxalYb_Ex',
                            flexIcon: 'vIGeuYz4Cf60Cnuq3WKA',
                            icon_position_left: 'GoUQfg7mJlSkcbAZ28Rj',
                            icon_position_right: 'TXa2RKc_Hf0QPdmUDMwI',
                        };
                    },
                    9097: (e, t) => {
                        var r = Symbol.for('react.transitional.element');
                        function l(e, t, l) {
                            var i = null;
                            if ((void 0 !== l && (i = '' + l), void 0 !== t.key && (i = '' + t.key), 'key' in t))
                                for (var n in ((l = {}), t)) 'key' !== n && (l[n] = t[n]);
                            else l = t;
                            return { $$typeof: r, type: e, key: i, ref: void 0 !== (t = l.ref) ? t : null, props: l };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = l), (t.jsxs = l));
                    },
                    4377: (e, t, r) => {
                        e.exports = r(9097);
                    },
                    3616: function (e, t, r) {
                        var l =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Link = void 0));
                        let i = r(4377),
                            n = r(810),
                            o = r(5881),
                            s = l(r(7354)),
                            a = (e) => {
                                let {
                                        component: t = (0, i.jsx)('a', {}),
                                        block: r,
                                        target: l,
                                        rel: a,
                                        href: d,
                                        forwardRef: c,
                                        iconPosition: u = 'left',
                                        flexIcon: _,
                                        icon: h,
                                        className: m,
                                        children: f,
                                        textClassName: p = '',
                                        containerClassName: v,
                                        ...x
                                    } = e,
                                    b = (0, n.useId)(),
                                    E = !n.Children.count(f),
                                    T = 'left' === u,
                                    y = null;
                                if (void 0 !== h) {
                                    var N;
                                    y = (0, n.cloneElement)(h, {
                                        className: (0, o.clsx)(
                                            s.default.icon,
                                            { [s.default['icon_position_'.concat(u)]]: !E && u },
                                            null == (N = h.props) ? void 0 : N.className,
                                        ),
                                        key: b,
                                    });
                                }
                                let k = (0, n.useMemo)(
                                    () =>
                                        h
                                            ? (0, i.jsxs)('div', {
                                                  className: (0, o.clsx)(s.default.iconContainer, v),
                                                  children: [T && y, !E && (0, i.jsx)('span', { className: p, children: f }), !T && y],
                                              })
                                            : f,
                                    [f, v, h, T, E, y, p],
                                );
                                return (0, n.cloneElement)(
                                    t,
                                    {
                                        ref: c,
                                        target: l,
                                        rel: '_blank' === l && void 0 === a ? 'noopener noreferrer' : a,
                                        href: d,
                                        className: (0, o.clsx)(s.default.root, { [s.default.block]: r, [s.default.flexIcon]: h && _, [s.default.iconOnly]: h && E }, m),
                                        ...x,
                                        ...t.props,
                                    },
                                    k,
                                );
                            };
                        t.Link = (0, n.forwardRef)((e, t) => (0, i.jsx)(a, { forwardRef: t, ...e }));
                    },
                    810: (e) => {
                        e.exports = l || (l = r.t(i, 2));
                    },
                },
                o = {};
            function s(e) {
                var t = o[e];
                if (void 0 !== t) return t.exports;
                var r = (o[e] = { exports: {} });
                return (n[e].call(r.exports, r, r.exports, s), r.exports);
            }
            ((s.d = (e, t) => {
                for (var r in t) s.o(t, r) && !s.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
            }),
                (s.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (s.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var a = {};
            (() => {
                (Object.defineProperty(a, 'X', { value: !0 }), (a.r = void 0));
                var e = s(3616);
                Object.defineProperty(a, 'r', {
                    enumerable: !0,
                    get: function () {
                        return e.Link;
                    },
                });
            })();
            var d = a.r;
            a.X;
        },
        65508: (e) => {
            e.exports = { static: 'CompositeHeader_static__pZdrc', static_hidden: 'CompositeHeader_static_hidden__jHPYh' };
        },
        69630: (e, t, r) => {
            'use strict';
            r.d(t, { h: () => u });
            var l = r(88800),
                i = r(61013),
                n = r(84961),
                o = r(53548),
                s = r(54486),
                a = r(72288),
                d = r(63807);
            let c = (e) => {
                    let { element: t, scrollTop: r, isMobile: l } = e,
                        i = 0.6 * t.clientHeight;
                    return r + (l ? 60 : 76) >= t.offsetTop + i;
                },
                u = (0, n.PA)((e) => {
                    let { children: t, scrollElement: r, outerTitle: n = '', headerElement: u, headerThreshold: _, shouldHideHeader: h } = e,
                        [m, f] = (0, o.useState)(n),
                        [p, v] = (0, o.useState)(null),
                        [x, b] = (0, o.useState)(null),
                        [E, T] = (0, o.useState)(null),
                        [y, N] = (0, o.useState)(!1),
                        [k, S] = (0, o.useState)(!1),
                        [w, H] = (0, o.useState)(!1),
                        [j, C] = (0, o.useState)(!1),
                        {
                            settings: { isMobile: B },
                        } = (0, a.g)();
                    (0, o.useLayoutEffect)(() => {
                        f(n);
                    }, [n]);
                    let R = (0, o.useCallback)(() => {
                        let e = null != _ ? _ : 10,
                            t = u ? Number(u.offsetTop) - e : e;
                        t < 0 && (t = 0);
                        let l = (e) => {
                            (H(e > t),
                                h && C(e > 30),
                                (null == p ? void 0 : p.current) && N(c({ element: null == p ? void 0 : p.current, scrollTop: e, isMobile: B })),
                                (null == x ? void 0 : x.current) && S(c({ element: null == x ? void 0 : x.current, scrollTop: e, isMobile: B })));
                        };
                        B ? l(window.scrollY) : r && l(r.scrollTop);
                    }, [_, u, B, h, p, x, r]);
                    (0, o.useEffect)(() => {
                        B ? 0 === window.scrollY && H(!1) : (r && 0 !== r.scrollTop) || H(!1);
                    }, [r, null == r ? void 0 : r.scrollTop, B]);
                    let P = (0, o.useMemo)(() => (B ? { onScroll: (0, i.A)(R, 200) } : { onScroll: (0, i.A)(R, 200), elementRef: r }), [R, r, B]);
                    (0, s.L)(P);
                    let I = (0, o.useMemo)(
                        () => ({
                            title: m,
                            setTitle: f,
                            titleElement: p,
                            scrollElement: B ? null : r,
                            setTitleElement: v,
                            childElement: x,
                            setChildElement: b,
                            child: E,
                            setChild: T,
                            isScrolledChild: k,
                            isScrolledTitle: y,
                            isScrolling: w,
                            isHeaderHidden: j,
                        }),
                        [m, y, p, r, w, B, E, x, k, j],
                    );
                    return (0, l.jsx)(d.B.Provider, { value: I, children: t });
                });
        },
        91292: (e, t, r) => {
            'use strict';
            r.d(t, { N: () => h });
            var l = r(88800),
                i = r(53548),
                n = r(12389),
                o = r.n(n),
                s = r(29993),
                a = r(65453),
                d = r(46079),
                c = r(67174);
            let u = (e) => {
                    let [t, r] = (0, i.useState)(!1),
                        n = (0, s.c)(() => {
                            r(!0);
                        });
                    return (0, l.jsx)(o(), { prefetch: t, ...e, onMouseEnter: n });
                },
                _ = (e) => {
                    let { forwardedRef: t, href: r, component: n, ...s } = e,
                        { isPrefetchDisabled: _, isPrefetchOnHover: h } = (0, i.useContext)(d.j),
                        { href: m, target: f, rel: p } = (0, c.u)(null != r ? r : ''),
                        v = (0, i.isValidElement)(n)
                            ? n
                            : (function (e, t, r) {
                                  return e ? (t ? (0, l.jsx)(o(), { prefetch: !1 }) : r ? (0, l.jsx)(u, { href: e }) : (0, l.jsx)(o(), {})) : (0, l.jsx)('a', {});
                              })(r, _, h);
                    return (0, l.jsx)(a.N, { ref: t, component: v, href: r ? m : void 0, target: f, rel: p, ...s });
                },
                h = (0, i.forwardRef)((e, t) => (0, l.jsx)(_, { ...e, forwardedRef: t }));
        },
        93317: (e, t, r) => {
            'use strict';
            r.d(t, { Y: () => K, V: () => $ });
            var l = r(88800),
                i = r(84961),
                n = r(44450),
                o = r(26e3),
                s = r(40210),
                a = r(65724),
                d = r(53548),
                c = r(17392),
                u = r(29993),
                _ = r(50408),
                h = r(29504),
                m = r(86462),
                f = r(72288),
                p = r(91051),
                v = r(56248),
                x = r(28949),
                b = r.n(x),
                E = r(63807),
                T = r(48136),
                y = r.n(T);
            let N = 'header-block-controls',
                k = (0, i.PA)((e) => {
                    let { showControls: t = !0, ...r } = e,
                        { isScrolledTitle: i, isScrolledChild: n, isScrolling: o, title: s, titleElement: x, child: T, childElement: k } = (0, d.useContext)(E.B),
                        {
                            settings: { isMobile: S, browserInfo: w },
                            user: { hasPlus: H, isAuthorized: j },
                        } = (0, f.g)(),
                        [C, B] = (0, _.d)(),
                        R = !H && !(null == w ? void 0 : w.isTouch),
                        {
                            openPaymentWidgetModal: P,
                            saveOfferAndAuthorize: I,
                            isShimmerActive: g,
                            isShimmerVisible: O,
                            mainText: L,
                            mainTextA11y: A,
                        } = (0, m.D)({ storeName: 'music', isEnabled: !H, offerElement: { element: C, intersectionPropertyId: N, isVisible: i, requireTransition: !0 } }),
                        D = (0, u.c)(() => {
                            var e;
                            null == x || null == (e = x.current) || e.scrollIntoView({ block: 'center', behavior: 'smooth' });
                        }),
                        M = (0, u.c)(() => {
                            var e;
                            null == k || null == (e = k.current) || e.scrollIntoView({ block: 'center', behavior: 'smooth' });
                        }),
                        V = (0, u.c)(() => {
                            if (!j) return void I();
                            P();
                        });
                    return (0, l.jsx)('header', {
                        className: (0, a.$)(y().root, { [y().root_sticky]: o, [y().root_withChildren]: n, [y().root_blurWithTitle]: !i }),
                        'data-test-id': c.S7.BRANDED_PLAYLIST_HEADER,
                        ...r,
                        children: (0, l.jsx)('div', {
                            className: y().header,
                            children: (0, l.jsxs)('div', {
                                className: (0, a.$)(y().container, { [y().container_withMultipleChildren]: (0, d.isValidElement)(T) }),
                                children: [
                                    (0, l.jsx)('div', { className: y().backdrop }),
                                    (0, l.jsxs)('div', {
                                        className: y().leftBlock,
                                        children: [
                                            t && (0, l.jsx)(v.L, { withForwardControl: !S, className: y().actions }),
                                            i &&
                                                (0, l.jsxs)(l.Fragment, {
                                                    children: [
                                                        (0, l.jsx)(h.HL, {
                                                            variant: 'div',
                                                            type: 'text',
                                                            className: (0, a.$)(y().title, { [y().title_show]: i, [y().title_withOffset]: t }),
                                                            lineClamp: 1,
                                                            onClick: D,
                                                            title: o && s ? s : '',
                                                            'aria-hidden': !0,
                                                            children: s,
                                                        }),
                                                        R &&
                                                            (0, l.jsx)(p.b, {
                                                                mainText: L,
                                                                ariaLabel: A,
                                                                mainTextFontSize: 'm',
                                                                ref: B,
                                                                onClick: V,
                                                                isShimmerActive: g,
                                                                isShimmerVisible: O,
                                                                className: b().plusButton,
                                                                'data-intersection-property-id': N,
                                                                'data-test-id': c.S7.HEADER_PLUS_BUTTON,
                                                            }),
                                                    ],
                                                }),
                                        ],
                                    }),
                                    (0, d.isValidElement)(T) &&
                                        (0, l.jsx)('div', { onClick: M, className: (0, a.$)(y().child, { [y().child_show]: n }), 'aria-hidden': !0, children: T }),
                                ],
                            }),
                        }),
                    });
                });
            var S = r(47294),
                w = r.n(S);
            let H = 'header-block-controls',
                j = (e) => {
                    let { className: t, children: r, onClick: i, 'aria-hidden': n, 'data-test-id': o } = e,
                        { isScrolling: s } = (0, d.useContext)(E.B),
                        {
                            user: { hasPlus: h, isAuthorized: v },
                            settings: { browserInfo: x },
                        } = (0, f.g)(),
                        T = !h && !(null == x ? void 0 : x.isTouch),
                        [y, N] = (0, _.d)(),
                        {
                            openPaymentWidgetModal: k,
                            saveOfferAndAuthorize: S,
                            isShimmerActive: j,
                            isShimmerVisible: C,
                            mainText: B,
                            mainTextA11y: R,
                        } = (0, m.D)({ storeName: 'music', isEnabled: !h, offerElement: { element: y, intersectionPropertyId: H, isVisible: s, requireTransition: !0 } }),
                        P = (0, u.c)(() => {
                            if (!v) return void S();
                            k();
                        });
                    return (0, l.jsx)('div', {
                        className: w().root,
                        children: (0, l.jsxs)('div', {
                            className: (0, a.$)(w().container, { [w().container_scrolling]: s }, t),
                            onClick: i,
                            'aria-hidden': n,
                            'data-test-id': c.S7.STICKY_HEADER,
                            children: [
                                (0, l.jsx)('div', { className: w().backdrop }),
                                (0, l.jsx)('div', { className: w().children, 'data-test-id': o, children: r }),
                                T &&
                                    (0, l.jsx)(p.b, {
                                        mainText: B,
                                        ariaLabel: R,
                                        mainTextFontSize: 'm',
                                        ref: N,
                                        onClick: P,
                                        isShimmerActive: j,
                                        isShimmerVisible: C,
                                        className: (0, a.$)(b().plusButton, w().plusButton, { [w().plusButton_show]: s }),
                                        'data-intersection-property-id': H,
                                        'data-test-id': c.S7.HEADER_PLUS_BUTTON,
                                    }),
                            ],
                        }),
                    });
                };
            var C = r(65508),
                B = r.n(C);
            let R = (0, i.PA)((e) => {
                let {
                        className: t,
                        children: r,
                        stickyChild: i,
                        isScrolledToTop: n = !0,
                        staticClassName: o,
                        stickyClassName: s,
                        compositeHeaderRef: u,
                        'aria-hidden': _,
                    } = e,
                    { isScrolling: h, scrollElement: m } = (0, d.useContext)(E.B),
                    f = (0, d.useRef)(null),
                    p = (0, d.useCallback)(() => {
                        if (m && n) m.scrollTo({ top: 0, behavior: 'smooth' });
                        else {
                            var e;
                            null == f || null == (e = f.current) || e.scrollIntoView({ block: 'center', behavior: 'smooth' });
                        }
                    }, [f, m, n]);
                return (0, l.jsxs)('header', {
                    className: (0, a.$)(B().root, t),
                    'aria-hidden': _,
                    ref: u,
                    'data-test-id': c.S7.COMPOSITE_HEADER_CONTAINER,
                    children: [
                        (0, l.jsx)('div', { className: (0, a.$)(B().static, { [B().static_hidden]: h }, o), ref: f, 'data-test-id': c.S7.COMPOSITE_HEADER, children: r }),
                        (0, l.jsx)(j, { className: s, onClick: p, 'aria-hidden': !0, 'data-test-id': c.S7.COMPOSITE_STICKY_HEADER, children: i }),
                    ],
                });
            });
            var P = r(37080),
                I = r.n(P);
            let g = 'header-block-controls',
                O = (0, i.PA)((e) => {
                    let { headerRef: t, ...r } = e,
                        { isScrolledTitle: i, isScrolledChild: n, isScrolling: o, title: s, titleElement: x, child: T, childElement: y } = (0, d.useContext)(E.B),
                        {
                            settings: { isMobile: N, browserInfo: k },
                            user: { hasPlus: S, isAuthorized: w },
                        } = (0, f.g)(),
                        [H, j] = (0, _.d)(),
                        C = !S && !(null == k ? void 0 : k.isTouch),
                        {
                            openPaymentWidgetModal: B,
                            saveOfferAndAuthorize: R,
                            isShimmerActive: P,
                            isShimmerVisible: O,
                            mainText: L,
                            mainTextA11y: A,
                        } = (0, m.D)({ storeName: 'music', isEnabled: !S, offerElement: { element: H, intersectionPropertyId: g, isVisible: i, requireTransition: !0 } }),
                        D = (0, u.c)(() => {
                            var e;
                            null == x || null == (e = x.current) || e.scrollIntoView({ block: 'center', behavior: 'smooth' });
                        }),
                        M = (0, u.c)(() => {
                            var e;
                            null == y || null == (e = y.current) || e.scrollIntoView({ block: 'center', behavior: 'smooth' });
                        }),
                        V = (0, u.c)(() => {
                            if (!w) return void R();
                            B();
                        });
                    return (0, l.jsx)('header', {
                        className: (0, a.$)(b().inner, I().root, { [I().root_sticky]: o, [I().root_withChildren]: n }),
                        ref: t,
                        'data-test-id': c.S7.INNER_HEADER,
                        ...r,
                        children: (0, l.jsx)('div', {
                            className: b().header,
                            children: (0, l.jsxs)('div', {
                                className: b().container,
                                children: [
                                    (0, l.jsx)('div', { className: I().backdrop }),
                                    (0, l.jsxs)('div', {
                                        className: b().leftBlock,
                                        children: [
                                            (0, l.jsx)(v.L, { withForwardControl: !N, className: I().actions }),
                                            (0, l.jsx)(h.HL, {
                                                variant: 'div',
                                                type: 'text',
                                                className: (0, a.$)(b().title, I().title, { [I().title_show]: i }),
                                                lineClamp: 1,
                                                onClick: D,
                                                title: o && s ? s : '',
                                                'aria-hidden': !0,
                                                children: s,
                                            }),
                                            C &&
                                                (0, l.jsx)(p.b, {
                                                    mainText: L,
                                                    ariaLabel: A,
                                                    mainTextFontSize: 'm',
                                                    ref: j,
                                                    onClick: V,
                                                    isShimmerActive: P,
                                                    isShimmerVisible: O,
                                                    className: (0, a.$)(b().plusButton, I().plusButton, { [I().plusButton_show]: i }),
                                                    'data-intersection-property-id': g,
                                                    'data-test-id': c.S7.HEADER_PLUS_BUTTON,
                                                }),
                                        ],
                                    }),
                                    (0, l.jsx)('div', { onClick: M, className: (0, a.$)(I().child, { [I().child_show]: n }), 'aria-hidden': !0, children: T }),
                                ],
                            }),
                        }),
                    });
                });
            var L = r(10312),
                A = r.n(L);
            let D = 'header-block-controls',
                M = (e) => {
                    let { style: t } = e,
                        { isScrolling: r, title: i, titleElement: n, isScrolledTitle: o } = (0, d.useContext)(E.B),
                        {
                            user: { hasPlus: s, isAuthorized: v },
                            settings: { browserInfo: x },
                        } = (0, f.g)(),
                        T = !s && !(null == x ? void 0 : x.isTouch),
                        [y, N] = (0, _.d)(),
                        {
                            openPaymentWidgetModal: k,
                            saveOfferAndAuthorize: S,
                            isShimmerActive: w,
                            isShimmerVisible: H,
                            mainText: j,
                            mainTextA11y: C,
                        } = (0, m.D)({ storeName: 'music', isEnabled: !s, offerElement: { element: y, intersectionPropertyId: D, isVisible: o, requireTransition: !0 } }),
                        B = (0, u.c)(() => {
                            var e;
                            null == n || null == (e = n.current) || e.scrollIntoView({ block: 'center', behavior: 'smooth' });
                        }),
                        R = (0, u.c)(() => {
                            if (!v) return void S();
                            k();
                        });
                    return (0, l.jsx)('header', {
                        className: (0, a.$)(b().inner, A().root, { [A().root_visible]: o }),
                        style: t,
                        'data-test-id': c.S7.PROMO_LANDING_HEADER,
                        children: (0, l.jsx)('div', {
                            className: b().header,
                            children: (0, l.jsxs)('div', {
                                className: (0, a.$)(b().container, A().container),
                                children: [
                                    (0, l.jsx)('div', { className: A().backdrop }),
                                    (0, l.jsxs)('div', {
                                        className: b().leftBlock,
                                        children: [
                                            (0, l.jsx)(h.HL, {
                                                variant: 'div',
                                                type: 'text',
                                                className: (0, a.$)(b().title, A().title),
                                                lineClamp: 1,
                                                onClick: B,
                                                title: r && i ? i : '',
                                                'aria-hidden': !0,
                                                children: i,
                                            }),
                                            T &&
                                                (0, l.jsx)(p.b, {
                                                    mainText: j,
                                                    ariaLabel: C,
                                                    mainTextFontSize: 'm',
                                                    ref: N,
                                                    onClick: R,
                                                    isShimmerActive: w,
                                                    isShimmerVisible: H,
                                                    className: b().plusButton,
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
            var V = r(50322),
                F = r.n(V);
            let U = 'header-block-controls',
                Y = (0, i.PA)((e) => {
                    let { className: t, children: r, showControls: i = !0, withForwardControl: n = !0, withBackwardControl: o = !0, disableStickyVariant: s = !1 } = e,
                        { isScrolling: x, title: T, scrollElement: y, isHeaderHidden: N } = (0, d.useContext)(E.B),
                        k = (0, d.useRef)(null),
                        [S, w] = (0, _.d)(),
                        {
                            user: { hasPlus: H, isAuthorized: j },
                            settings: { browserInfo: C },
                        } = (0, f.g)(),
                        B = !H && !(null == C ? void 0 : C.isTouch),
                        {
                            openPaymentWidgetModal: R,
                            saveOfferAndAuthorize: P,
                            isShimmerActive: I,
                            isShimmerVisible: g,
                            mainText: O,
                            mainTextA11y: L,
                        } = (0, m.D)({ storeName: 'music', isEnabled: !H, offerElement: { element: S, intersectionPropertyId: U, isVisible: x, requireTransition: !0 } }),
                        A = (0, u.c)(() => {
                            if (y) y.scrollTo({ top: 0, behavior: 'smooth' });
                            else {
                                var e;
                                null == k || null == (e = k.current) || e.scrollIntoView({ block: 'center', behavior: 'smooth' });
                            }
                        }),
                        D = (0, d.useMemo)(() => (0, l.jsx)(h.DZ, { variant: 'h2', weight: 'bold', size: 's', lineClamp: 1, children: T }), [T]),
                        M = i && (n || o),
                        V = (0, u.c)(() => {
                            if (!j) return void P();
                            R();
                        });
                    return (0, l.jsxs)('header', {
                        className: (0, a.$)(F().root, t),
                        'data-test-id': c.S7.TEXT_HEADER_CONTAINER,
                        children: [
                            (0, l.jsxs)('div', {
                                className: (0, a.$)(F().staticItem, { [F().staticItem_hide]: x || N }),
                                ref: k,
                                'data-test-id': c.S7.TEXT_HEADER,
                                children: [M && (0, l.jsx)(v.L, { withForwardControl: n, withBackwardControl: o }), r],
                            }),
                            !s &&
                                (0, l.jsxs)('div', {
                                    className: (0, a.$)(F().stickyItem, { [F().stickyItem_scrolling]: x }),
                                    onClick: A,
                                    'aria-hidden': !0,
                                    'data-test-id': c.S7.TEXT_STICKY_HEADER,
                                    children: [
                                        (0, l.jsx)('div', { className: F().backdrop }),
                                        (0, l.jsxs)('div', {
                                            className: F().container,
                                            children: [M && (0, l.jsx)(v.L, { withForwardControl: n, withBackwardControl: o, shouldFocusOnMount: !1 }), D],
                                        }),
                                        B &&
                                            (0, l.jsx)(p.b, {
                                                mainText: O,
                                                ariaLabel: L,
                                                mainTextFontSize: 'm',
                                                ref: w,
                                                onClick: V,
                                                isShimmerActive: I,
                                                isShimmerVisible: g,
                                                className: b().plusButton,
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
                    showControls: a,
                    withBackwardControl: d,
                    withForwardControl: c,
                    className: u = '',
                    stickyChild: _,
                    staticClassName: h,
                    stickyClassName: m,
                    innerHeaderRef: f,
                    compositeHeaderRef: p,
                    disableStickyVariant: v,
                    ...x
                } = e;
                switch (t) {
                    case 'INNER':
                        return (0, l.jsx)(n.r, { page: o.l.HEADER, places: [s.R.BUTTON], children: (0, l.jsx)(O, { headerRef: f, style: r }) });
                    case 'TEXT':
                        return (0, l.jsx)(n.r, {
                            page: o.l.HEADER,
                            places: [s.R.BUTTON],
                            children: (0, l.jsx)(Y, { showControls: a, withBackwardControl: d, withForwardControl: c, disableStickyVariant: v, children: i }),
                        });
                    case 'COMPOSITE':
                        return (0, l.jsx)(n.r, {
                            page: o.l.HEADER,
                            places: [s.R.BUTTON],
                            children: (0, l.jsx)(R, { className: u, stickyChild: _, staticClassName: h, stickyClassName: m, compositeHeaderRef: p, ...x, children: i }),
                        });
                    case 'PROMO_LANDING':
                        return (0, l.jsx)(n.r, { page: o.l.HEADER, places: [s.R.BUTTON], children: (0, l.jsx)(M, { style: r }) });
                    case 'BRANDED_PLAYLIST':
                        return (0, l.jsx)(n.r, { page: o.l.HEADER, places: [s.R.BUTTON], children: (0, l.jsx)(k, { showControls: a, children: i }) });
                    case 'STICKY':
                        return (0, l.jsx)('header', {
                            className: u,
                            children: (0, l.jsx)(n.r, { page: o.l.HEADER, places: [s.R.BUTTON], children: (0, l.jsx)(j, { className: m, ...x, children: _ }) }),
                        });
                }
            });
        },
    },
]);
