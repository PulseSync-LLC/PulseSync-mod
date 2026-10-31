(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9425],
    {
        16782: (e) => {
            e.exports = {
                root: 'BlockHeader_root__j3mbg',
                titleIcon: 'BlockHeader_titleIcon__GQFEK',
                start: 'BlockHeader_start__ZrGP5',
                coverContainer: 'BlockHeader_coverContainer__lATZT',
                cover: 'BlockHeader_cover__koOXq',
                textContainer: 'BlockHeader_textContainer___2wn9',
                title: 'BlockHeader_title__5xlx6',
                description: 'BlockHeader_description__hAk9D',
                description_widthLimit: 'BlockHeader_description_widthLimit__CXxK1',
                linkContainer: 'BlockHeader_linkContainer__EuW_L',
                linkText: 'BlockHeader_linkText__Or6VB',
                heading: 'BlockHeader_heading__4iqvS',
                heading_notAvailable: 'BlockHeader_heading_notAvailable__r_dm1',
                shimmerCover: 'BlockHeader_shimmerCover__m2PJl',
                textShimmerContainer: 'BlockHeader_textShimmerContainer__hT_Zo',
                shimmerTitle: 'BlockHeader_shimmerTitle__kAkgm',
                shimmerDescription: 'BlockHeader_shimmerDescription__Bya4z',
            };
        },
        18486: (e, t, r) => {
            'use strict';
            r.d(t, { T: () => p });
            var l = r(88800),
                n = r(65724),
                o = r(53548),
                i = r(92716),
                a = r(17392),
                s = r(52300),
                c = r(90688),
                u = r(7555),
                d = r(19994),
                f = r(29504),
                _ = r(28163),
                v = r(96527),
                g = r(91292),
                C = r(16782),
                h = r.n(C);
            let m = (e) => {
                    let {
                            className: t,
                            coverUrl: r,
                            labeledForId: C,
                            subTitle: m,
                            title: p,
                            description: b,
                            viewAllActionLink: k,
                            controls: x,
                            titleSize: S = 'm',
                            coverBackgroundColor: y,
                            coverRadius: E = 's',
                            titleClassName: O,
                            titleLineClamp: R,
                            fallbackIconVariant: N,
                            available: T = !0,
                            onViewAllAction: L,
                            titleChildren: j,
                            children: I,
                            headingRef: B,
                            coverContainerClassName: A,
                            headingVariant: w = 'h3',
                            withDescriptionWidthLimit: P = !0,
                            isShimmerVisible: M,
                            isShimmerActive: H,
                            withCover: D,
                            withDescription: F,
                            forwardRef: W,
                            shimmerCoverClassName: Q,
                            shouldSendAnalyticsOnLoaded: $,
                            ...z
                        } = e,
                        K = (0, _.f)(),
                        U = (0, o.useRef)(null),
                        V = r || D,
                        X = b || F,
                        G = (0, o.useCallback)(() => {
                            U.current && 'focus' in U.current && U.current.focus();
                        }, []),
                        Z = (0, v.N)(),
                        Y = (0, o.useCallback)(() => {
                            L ? L() : Z({ to: i.AppScreen.Link });
                        }, [Z, L]);
                    (0, o.useEffect)(() => {
                        $ && K();
                    }, [$, K]);
                    let q = (0, o.useMemo)(
                            () =>
                                p && k && T
                                    ? (0, l.jsxs)(g.N, {
                                          className: h().title,
                                          containerClassName: h().linkContainer,
                                          textClassName: h().linkText,
                                          icon: (0, l.jsx)(s.I, { className: h().titleIcon, size: 'xs', variant: 'arrowRight' }),
                                          iconPosition: 'right',
                                          href: k,
                                          onClick: Y,
                                          'data-test-id': a.S7.BLOCK_HEADER_TITLE,
                                          children: [
                                              (0, l.jsx)(f.DZ, {
                                                  id: C,
                                                  className: (0, n.$)(h().heading, O),
                                                  variant: w,
                                                  size: S,
                                                  weight: 'bold',
                                                  lineClamp: R,
                                                  ref: B,
                                                  children: p,
                                              }),
                                              j,
                                          ],
                                      })
                                    : (0, l.jsxs)('div', {
                                          className: h().title,
                                          children: [
                                              (0, l.jsx)(f.DZ, {
                                                  id: C,
                                                  className: (0, n.$)(h().heading, O, { [h().heading_notAvailable]: !T }),
                                                  variant: w,
                                                  size: S,
                                                  weight: 'bold',
                                                  lineClamp: R,
                                                  ref: B,
                                                  'data-test-id': a.S7.BLOCK_HEADER_TITLE,
                                                  children: p,
                                              }),
                                              j,
                                          ],
                                      }),
                            [T, Y, B, w, C, p, O, R, S, k, j],
                        ),
                        J = (0, o.useMemo)(() => (F && M ? (0, l.jsx)(d.W, { isActive: H, className: h().shimmerDescription }) : b), [F, M, b, H]),
                        ee = (0, o.useMemo)(
                            () =>
                                D && M
                                    ? (0, l.jsx)(d.W, { isActive: H, className: (0, n.$)(h().shimmerCover, Q), radius: 's' })
                                    : (0, l.jsx)(c._V, {
                                          src: r,
                                          fallbackIconVariant: N,
                                          style: { backgroundColor: y },
                                          className: h().cover,
                                          ref: U,
                                          onClick: G,
                                          fit: 'cover',
                                          withAvatarReplace: !0,
                                          fallbackIconSize: 's',
                                          'aria-hidden': !0,
                                          'data-test-id': a.S7.BLOCK_HEADER_COVER,
                                      }),
                            [y, r, N, G, H, M, Q, D],
                        );
                    return (0, l.jsxs)('div', {
                        className: (0, n.$)(h().root, t),
                        ref: W,
                        ...z,
                        'data-test-id': a.S7.BLOCK_HEADER,
                        children: [
                            (0, l.jsxs)('div', {
                                className: h().start,
                                children: [
                                    V && (0, l.jsx)(u.t, { radius: E, className: (0, n.$)(h().coverContainer, A), children: ee }),
                                    (0, l.jsxs)('div', {
                                        className: h().textContainer,
                                        children: [
                                            m,
                                            q,
                                            X &&
                                                (0, l.jsx)(f.HL, {
                                                    id: ''.concat(C, '-description'),
                                                    variant: 'span',
                                                    type: 'text',
                                                    size: 'm',
                                                    weight: 'medium',
                                                    lineClamp: P ? 2 : void 0,
                                                    className: (0, n.$)(h().description, { [h().description_widthLimit]: P }),
                                                    'data-test-id': a.S7.BLOCK_HEADER_DESCRIPTION,
                                                    children: J,
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                            x || I,
                        ],
                    });
                },
                p = (0, o.forwardRef)((e, t) => (0, l.jsx)(m, { forwardRef: t, ...e }));
        },
        28163: (e, t, r) => {
            'use strict';
            r.d(t, { f: () => m });
            var l = r(53548),
                n = r(78793),
                o = r(54577),
                i = r(90780),
                a = r(79070),
                s = r(65523),
                c = r(42139),
                u = r(12816),
                d = r(34500),
                f = r(57649),
                _ = r(60840),
                v = r(14518),
                g = r(73442),
                C = r(91248);
            let h = [
                    u._Q.HOME,
                    u._Q.LANDING,
                    u._Q.NON_MUSIC,
                    u._Q.OWN_COLLECTION,
                    u._Q.SEARCH,
                    u._Q.ARTIST,
                    u._Q.CONCERTS,
                    u._Q.CONCERT,
                    u._Q.ALBUM,
                    u._Q.PLAYLIST,
                    u._Q.SLIDES_SCREEN,
                    u._Q.PROMOLANDING_ALBUM,
                    u._Q.WAVE_LANDING_SCREEN,
                ],
                m = () => {
                    let e = (0, l.useRef)(!1),
                        t = (0, i.st)(),
                        r = (0, s.U)(),
                        { hash: m } = (0, i.gf)(),
                        { pageId: p } = (0, v.$)(),
                        { tabId: b, tabPos: k, isTabSelectedByDefault: x } = (0, C.R)(),
                        { offsetBlockPosY: S } = (0, f.u)(),
                        { blockId: y, blockType: E, blockPosX: O, blockPosY: R, mainObjectType: N, mainObjectId: T, objectsCount: L } = (0, d.N)(),
                        { filterKey: j, filterValue: I, filterPos: B } = (0, _.G)(),
                        { skeleton: A } = (0, g.b)(),
                        w = (0, a.L)(() => (void 0 !== S && void 0 !== R ? S + R : R));
                    return (0, l.useCallback)(() => {
                        if (!t || !p || !u.xK.includes(p) || !h.includes(p) || e.current) return;
                        let l = { hash: m, pageId: c.F[p], entityType: E, entityId: y, entityPosX: O, entityPosY: w, objectsCount: L };
                        (void 0 !== j && ((l.filterKey = j), (l.filterValue = I), (l.filterPos = B)),
                            u.qG.includes(p) && ((l.tabId = b), (l.tabPos = k), (l.isTabSelectedByDefault = x)),
                            A && (l.skeletonId = A),
                            T && N && ((l.mainObjectType = N), (l.mainObjectId = T)));
                        let i = (0, n.F)({ params: l, logger: r, context: 'useSendEventOnBlockLoaded' });
                        i && ((0, o.uY)(t.evgenInstance, i), (e.current = !0));
                    }, [t, p, m, E, y, O, w, j, I, B, L, A, T, N, r, b, k, x]);
                };
        },
        31764: (e, t, r) => {
            'use strict';
            r.d(t, { X: () => f });
            var l = r(88800),
                n = r(65724),
                o = r(53548),
                i = r(17392),
                a = r(88021),
                s = r(96817),
                c = r(52300),
                u = r(89544),
                d = r.n(u);
            let f = (e) => {
                let {
                        carouselRef: t,
                        backwardControlClassName: r,
                        forwardControlClassName: u,
                        className: f,
                        withSecondaryColor: _,
                        buttonSize: v = 'xxxs',
                        buttonVariant: g = 'outline',
                    } = e,
                    { swipeBackward: C, swipeForward: h, shouldBackwardButtonBeDisabled: m, shouldForwardButtonBeDisabled: p, shouldHideControls: b } = (0, a.Y)(t),
                    k = (0, o.useCallback)(
                        (e) => {
                            (C(), e.stopPropagation());
                        },
                        [C],
                    ),
                    x = (0, o.useCallback)(
                        (e) => {
                            (h(), e.stopPropagation());
                        },
                        [h],
                    );
                return (0, l.jsxs)('div', {
                    className: (0, n.$)(d().root, f),
                    'data-test-id': i.S7.CAROUSEL_CONTROLS,
                    children: [
                        (0, l.jsx)(s.$, {
                            tabIndex: -1,
                            'aria-hidden': !0,
                            className: (0, n.$)(d().control, r, { [d().control_hidden]: b, [d().control_withSecondaryColor]: _ }),
                            onClick: k,
                            size: v,
                            radius: 'round',
                            variant: g,
                            withRipple: !1,
                            icon: (0, l.jsx)(c.I, { size: 'xxs', variant: 'arrowLeft' }),
                            disabled: m,
                            'data-test-id': i.S7.CAROUSEL_CONTROLS_BACKWARD_BUTTON,
                        }),
                        (0, l.jsx)(s.$, {
                            tabIndex: -1,
                            'aria-hidden': !0,
                            className: (0, n.$)(d().control, u, { [d().control_hidden]: b, [d().control_withSecondaryColor]: _ }),
                            onClick: x,
                            size: v,
                            radius: 'round',
                            variant: g,
                            withRipple: !1,
                            icon: (0, l.jsx)(c.I, { size: 'xxs', variant: 'arrowRight' }),
                            disabled: p,
                            'data-test-id': i.S7.CAROUSEL_CONTROLS_FORWARD_BUTTON,
                        }),
                    ],
                });
            };
        },
        53323: (e, t, r) => {
            'use strict';
            r.d(t, { F: () => u });
            var l,
                n = r(87819),
                o = r(53548),
                i = {
                    5881: (e, t, r) => {
                        function l() {
                            for (var e, t, r = 0, l = ''; r < arguments.length;)
                                (e = arguments[r++]) &&
                                    (t = (function e(t) {
                                        var r,
                                            l,
                                            n = '';
                                        if ('string' == typeof t || 'number' == typeof t) n += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (r = 0; r < t.length; r++) t[r] && (l = e(t[r])) && (n && (n += ' '), (n += l));
                                            else for (r in t) t[r] && (n && (n += ' '), (n += r));
                                        return n;
                                    })(e)) &&
                                    (l && (l += ' '), (l += t));
                            return l;
                        }
                        (r.r(t), r.d(t, { clsx: () => l, default: () => n }));
                        let n = l;
                    },
                    2876: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => l }));
                        let l = { root: 'IZnFMW4gXBshJODnvB1P', item: 'VJ9IexhAEuYSCyGiMfN4' };
                    },
                    9097: (e, t) => {
                        var r = Symbol.for('react.transitional.element');
                        function l(e, t, l) {
                            var n = null;
                            if ((void 0 !== l && (n = '' + l), void 0 !== t.key && (n = '' + t.key), 'key' in t))
                                for (var o in ((l = {}), t)) 'key' !== o && (l[o] = t[o]);
                            else l = t;
                            return { $$typeof: r, type: e, key: n, ref: void 0 !== (t = l.ref) ? t : null, props: l };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = l), (t.jsxs = l));
                    },
                    4377: (e, t, r) => {
                        e.exports = r(9097);
                    },
                    792: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useCallbackRef = void 0));
                        let l = r(810);
                        t.useCallbackRef = function (e) {
                            let t = (0, l.useRef)({
                                stableFn: function () {
                                    for (var e = arguments.length, r = Array(e), l = 0; l < e; l++) r[l] = arguments[l];
                                    return t.current.callback(...r);
                                },
                                callback: e,
                            });
                            return (
                                (0, l.useInsertionEffect)(() => {
                                    t.current.callback = e;
                                }),
                                t.current.stableFn
                            );
                        };
                    },
                    597: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.useIntersectionObserver = t.createIntersectionObserver = t.getElementNameByDataAttribute = t.isInViewportNow = t.defaultOptions = void 0));
                        let l = r(810),
                            { innerWidth: n = 0, innerHeight: o = 0 } = window;
                        function i(e) {
                            let { top: t, right: r, bottom: l, left: i } = e.getBoundingClientRect();
                            return ((t >= 0 && t <= o) || (l >= 0 && l <= o)) && ((i >= 0 && i <= n) || (r >= 0 && r <= n));
                        }
                        function a(e) {
                            var t, r;
                            let l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'data-intersection-property-id';
                            return null != (r = null == e || null == (t = e.getAttribute) ? void 0 : t.call(e, l)) ? r : e.attributes[0];
                        }
                        function s(e, t) {
                            let r = new IntersectionObserver((t) => {
                                t.forEach((t) => {
                                    e(t, r);
                                });
                            }, t);
                            return r;
                        }
                        ((t.defaultOptions = { threshold: 0, preflightCheck: !0 }),
                            (t.isInViewportNow = i),
                            (t.getElementNameByDataAttribute = a),
                            (t.createIntersectionObserver = s),
                            (t.useIntersectionObserver = function (e, r, n) {
                                let [{ freezeOnceVisible: o, preflightCheck: c, ...u }, d = !1] =
                                        'boolean' == typeof r || void 0 === r ? [t.defaultOptions, r] : [{ ...t.defaultOptions, ...r }, n],
                                    [f, _] = (0, l.useState)({}),
                                    v = (0, l.useRef)(new Set()),
                                    g = (0, l.useMemo)(
                                        () =>
                                            d
                                                ? null
                                                : s((e) => {
                                                      let t = a(e.target);
                                                      if (t && g) {
                                                          if (v.current.has(t)) return;
                                                          (_((r) => ({ ...r, [t]: { isIntersecting: e.isIntersecting } })),
                                                              o && e.isIntersecting && (v.current.add(t), g.unobserve(e.target)));
                                                      }
                                                  }, u),
                                        [d],
                                    );
                                return (
                                    (0, l.useLayoutEffect)(
                                        () => (
                                            g &&
                                                !d &&
                                                e.forEach((e) => {
                                                    if (e.current) {
                                                        let t = !1;
                                                        if (c && (t = i(e.current))) {
                                                            let t = a(e.current);
                                                            _((e) => ({ ...e, [t]: { isIntersecting: !0 } }));
                                                        }
                                                        t || g.observe(e.current);
                                                    }
                                                }),
                                            () => {
                                                g && g.disconnect();
                                            }
                                        ),
                                        [d, g, e.length],
                                    ),
                                    f
                                );
                            }));
                    },
                    4012: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useMergeRefs = void 0));
                        var l = r(1964);
                        Object.defineProperty(t, 'useMergeRefs', {
                            enumerable: !0,
                            get: function () {
                                return l.useMergeRefs;
                            },
                        });
                    },
                    1676: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useToggle = void 0));
                        let l = r(810);
                        t.useToggle = (e) => {
                            let [t, r] = (0, l.useState)(e);
                            (0, l.useEffect)(() => {
                                r(e);
                            }, [e]);
                            let n = (0, l.useCallback)(() => {
                                    r((e) => !e);
                                }, []),
                                o = (0, l.useCallback)(() => {
                                    r(!0);
                                }, []),
                                i = (0, l.useCallback)(() => {
                                    r(!1);
                                }, []);
                            return { state: t, toggle: n, setState: r, toggleTrue: o, toggleFalse: i };
                        };
                    },
                    1258: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.AutoScrollCarousel = void 0));
                        let l = r(4377),
                            n = r(810),
                            o = r(792),
                            i = r(597),
                            a = r(4012),
                            s = r(1676),
                            c = r(7962),
                            u = r(2134),
                            d = r(7262);
                        t.AutoScrollCarousel = (e) => {
                            let {
                                    ref: t,
                                    children: r,
                                    autoplay: { enabled: f, delay: _, stopOnMouseEnter: v, stopOnFocusIn: g, stopOnInteraction: C },
                                    onPointerEnter: h,
                                    onPointerLeave: m,
                                    onPointerDown: p,
                                    onPointerUp: b,
                                    onPointerCancel: k,
                                    onFocus: x,
                                    onBlur: S,
                                    onScroll: y,
                                    onScrollEnd: E,
                                    ...O
                                } = e,
                                { state: R, toggleTrue: N, toggleFalse: T } = (0, s.useToggle)(!1),
                                { state: L, toggleTrue: j, toggleFalse: I } = (0, s.useToggle)(!1),
                                { state: B, setState: A, toggleFalse: w } = (0, s.useToggle)(!1),
                                { state: P, setState: M } = (0, s.useToggle)(!1),
                                { state: H, setState: D } = (0, s.useToggle)(!1),
                                { state: F, toggleTrue: W, toggleFalse: Q } = (0, s.useToggle)(!1),
                                { state: $, toggleTrue: z } = (0, s.useToggle)(!1),
                                { state: K, setState: U } = (0, s.useToggle)(!1),
                                V = (0, n.useRef)(null),
                                X = (0, a.useMergeRefs)([V, t]),
                                G = (0, d.useScrollEndFallback)(Q),
                                Z = n.Children.count(r),
                                Y = f && Z > 1 && P && H && !K && !((v && B) || (g && R) || (C && $) || L || F),
                                q = (0, o.useCallbackRef)((e) => {
                                    (A('mouse' === e.pointerType), null == h || h(e));
                                }),
                                J = (0, o.useCallbackRef)((e) => {
                                    (w(), I(), null == m || m(e));
                                }),
                                ee = (0, o.useCallbackRef)((e) => {
                                    (j(), z(), null == p || p(e));
                                }),
                                et = (0, o.useCallbackRef)((e) => {
                                    (I(), null == b || b(e));
                                }),
                                er = (0, o.useCallbackRef)((e) => {
                                    (I(), null == k || k(e));
                                }),
                                el = (0, o.useCallbackRef)((e) => {
                                    (L || N(), null == x || x(e));
                                }),
                                en = (0, o.useCallbackRef)((e) => {
                                    (e.currentTarget.contains(e.relatedTarget) || T(), null == S || S(e));
                                }),
                                eo = (0, o.useCallbackRef)((e) => {
                                    (W(), G(e.currentTarget), null == y || y(e));
                                }),
                                ei = (0, o.useCallbackRef)((e) => {
                                    (Q(), null == E || E(e));
                                });
                            return (
                                (0, n.useEffect)(() => {
                                    let e = matchMedia('(prefers-reduced-motion: reduce)'),
                                        t = () => U(e.matches);
                                    return (t(), e.addEventListener('change', t), () => e.removeEventListener('change', t));
                                }, [U]),
                                (0, n.useEffect)(() => {
                                    let e = V.current;
                                    if (!e) return;
                                    let t = (0, i.createIntersectionObserver)((e) => {
                                        M(e.isIntersecting && e.intersectionRatio > 0);
                                    });
                                    return (t.observe(e), () => t.disconnect());
                                }, [V, M]),
                                (0, n.useEffect)(() => {
                                    let e = () => D('visible' === document.visibilityState);
                                    return (document.addEventListener('visibilitychange', e), e(), () => document.removeEventListener('visibilitychange', e));
                                }, [D]),
                                (0, n.useEffect)(() => {
                                    let e = V.current;
                                    if (!e || !Y) return;
                                    let t = setInterval(() => {
                                        let r = (0, u.getNextCarouselScrollPosition)(e);
                                        void 0 !== r && (clearInterval(t), W(), e.scrollTo({ left: r, behavior: 'smooth' }));
                                    }, _);
                                    return () => clearInterval(t);
                                }, [V, _, Y, Z, W]),
                                (0, l.jsx)(c.CarouselBase, {
                                    ref: X,
                                    ...O,
                                    onPointerEnter: q,
                                    onPointerLeave: J,
                                    onPointerDown: ee,
                                    onPointerUp: et,
                                    onPointerCancel: er,
                                    onFocus: el,
                                    onBlur: en,
                                    onScroll: eo,
                                    onScrollEnd: ei,
                                    children: r,
                                })
                            );
                        };
                    },
                    2134: (e, t) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.getNextCarouselScrollPosition = void 0),
                            (t.getNextCarouselScrollPosition = (e) => {
                                let t = e.scrollWidth - e.clientWidth;
                                if (t <= 1) return;
                                let r = getComputedStyle(e),
                                    l = parseFloat(r.scrollPaddingLeft) || 0,
                                    n = parseFloat(r.scrollPaddingRight) || 0,
                                    o = e.getBoundingClientRect().left + e.clientLeft,
                                    i = 0;
                                for (let r of e.children) {
                                    let a = r.getBoundingClientRect(),
                                        s = getComputedStyle(r).scrollSnapAlign,
                                        c = a.left - o + e.scrollLeft,
                                        u = Math.max(0, Math.min(t, 'center' === s ? c + a.width / 2 - (e.clientWidth + l - n) / 2 : c - l));
                                    if (u > e.scrollLeft + 1) {
                                        i = u;
                                        break;
                                    }
                                }
                                if (!(1 >= Math.abs(i - e.scrollLeft))) return i;
                            }));
                    },
                    7262: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useScrollEndFallback = void 0));
                        let l = r(810),
                            n = r(792);
                        t.useScrollEndFallback = (e) => {
                            let t = (0, l.useRef)(void 0),
                                r = (0, n.useCallbackRef)(e);
                            return (
                                (0, l.useEffect)(() => () => clearTimeout(t.current), []),
                                (0, n.useCallbackRef)((e) => {
                                    'onscrollend' in e || (clearTimeout(t.current), (t.current = setTimeout(r, 200)));
                                })
                            );
                        };
                    },
                    4014: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Carousel = void 0));
                        let l = r(4377),
                            n = r(1258),
                            o = r(7962);
                        t.Carousel = (e) => {
                            let { autoplay: t, ...r } = e;
                            return t ? (0, l.jsx)(n.AutoScrollCarousel, { ...r, autoplay: t }) : (0, l.jsx)(o.CarouselBase, { ...r });
                        };
                    },
                    7962: function (e, t, r) {
                        var l =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.CarouselBase = void 0));
                        let n = r(4377),
                            o = r(5881),
                            i = r(810),
                            a = l(r(2876));
                        t.CarouselBase = (e) => {
                            let { className: t, itemClassName: r, children: l, ref: s, role: c, ...u } = e;
                            return (0, n.jsx)('ol', {
                                ref: s,
                                className: (0, o.clsx)(a.default.root, t),
                                ...u,
                                role: null != c ? c : 'list',
                                children: i.Children.map(l, (e) => (0, n.jsx)('li', { className: (0, o.clsx)(a.default.item, r), children: e })),
                            });
                        };
                    },
                    1964: (e) => {
                        e.exports = n;
                    },
                    810: (e) => {
                        e.exports = l || (l = r.t(o, 2));
                    },
                },
                a = {};
            function s(e) {
                var t = a[e];
                if (void 0 !== t) return t.exports;
                var r = (a[e] = { exports: {} });
                return (i[e].call(r.exports, r, r.exports, s), r.exports);
            }
            ((s.d = (e, t) => {
                for (var r in t) s.o(t, r) && !s.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
            }),
                (s.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (s.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var c = {};
            (() => {
                (Object.defineProperty(c, 'X', { value: !0 }), (c.l = void 0));
                var e = s(4014);
                Object.defineProperty(c, 'l', {
                    enumerable: !0,
                    get: function () {
                        return e.Carousel;
                    },
                });
            })();
            var u = c.l;
            c.X;
        },
        88021: (e, t, r) => {
            'use strict';
            r.d(t, { Y: () => u });
            var l,
                n = r(14022),
                o = r(53548),
                i = {
                    352: (e) => {
                        e.exports = n;
                    },
                    810: (e) => {
                        e.exports = l || (l = r.t(o, 2));
                    },
                },
                a = {};
            function s(e) {
                var t = a[e];
                if (void 0 !== t) return t.exports;
                var r = (a[e] = { exports: {} });
                return (i[e](r, r.exports, s), r.exports);
            }
            var c = {};
            ((() => {
                (Object.defineProperty(c, 'X', { value: !0 }), (c.l = void 0));
                let e = s(810),
                    t = s(352);
                c.l = (r) => {
                    let [l, n] = (0, e.useState)(!0),
                        [o, i] = (0, e.useState)(!0),
                        a = () => {
                            let e = null == r ? void 0 : r.current;
                            e && (n(0 === e.scrollLeft), i(e.scrollWidth - e.scrollLeft <= e.offsetWidth + 10));
                        };
                    ((0, e.useEffect)(() => {
                        a();
                    }, [r, a]),
                        (0, e.useEffect)(() => {
                            let e = null == r ? void 0 : r.current;
                            return (
                                null == e || e.addEventListener('scroll', a),
                                window.addEventListener('resize', a),
                                () => {
                                    (null == e || e.removeEventListener('scroll', a), window.removeEventListener('resize', a));
                                }
                            );
                        }, [r, a]));
                    let s = (0, e.useMemo)(
                        () =>
                            (0, t.throttle)(
                                () => {
                                    r && r.current && (r.current.scrollLeft += r.current.offsetWidth / 2);
                                },
                                420,
                                { trailing: !1 },
                            ),
                        [r],
                    );
                    return {
                        swipeBackward: (0, e.useMemo)(
                            () =>
                                (0, t.throttle)(
                                    () => {
                                        r && r.current && (r.current.scrollLeft -= r.current.offsetWidth / 2);
                                    },
                                    420,
                                    { trailing: !1 },
                                ),
                            [r],
                        ),
                        swipeForward: s,
                        shouldBackwardButtonBeDisabled: l,
                        shouldForwardButtonBeDisabled: o,
                        shouldHideControls: l && o,
                    };
                };
            })(),
                c.X);
            var u = c.l;
        },
        89544: (e) => {
            e.exports = {
                root: 'CarouselControls_root__E_hwc',
                control: 'CarouselControls_control__L8t4i',
                control_hidden: 'CarouselControls_control_hidden__pLrn6',
                control_withSecondaryColor: 'CarouselControls_control_withSecondaryColor__KqSEN',
            };
        },
    },
]);
