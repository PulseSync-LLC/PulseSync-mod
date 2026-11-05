(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7934],
    {
        2350: (e) => {
            e.exports = {
                root: 'CarouselBlock_root__aeOla',
                controls: 'CarouselBlock_controls__vsHCR',
                shimmerTitle: 'CarouselBlock_shimmerTitle__ZXIRx',
                item: 'CarouselBlock_item__DatZ2',
                important: 'CarouselBlock_important__AARmP',
            };
        },
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
            r.d(t, { T: () => C });
            var l = r(88800),
                o = r(65724),
                n = r(53548),
                i = r(87999),
                s = r(49784),
                a = r(80643),
                c = r(17392),
                u = r(52300),
                d = r(90688),
                f = r(7555),
                _ = r(19994),
                v = r(29504),
                m = r(91292),
                h = r(16782),
                g = r.n(h);
            let p = (e) => {
                    let {
                        className: t,
                        coverUrl: r,
                        labeledForId: h,
                        subTitle: p,
                        title: C,
                        description: b,
                        viewAllActionLink: x,
                        controls: k,
                        titleSize: y = 'm',
                        coverBackgroundColor: S,
                        coverRadius: R = 's',
                        titleClassName: j,
                        titleLineClamp: O,
                        fallbackIconVariant: E,
                        available: T = !0,
                        onViewAllAction: w,
                        titleChildren: B,
                        children: N,
                        headingRef: L,
                        coverContainerClassName: A,
                        headingVariant: I = 'h3',
                        withDescriptionWidthLimit: P = !0,
                        isShimmerVisible: M,
                        isShimmerActive: H,
                        withCover: D,
                        withDescription: F,
                        forwardRef: W,
                        shimmerCoverClassName: $,
                        shouldSendAnalyticsOnLoaded: z,
                        ...X
                    } = e;
                    (0, s.W)({ enabled: !!z });
                    let K = (0, n.useRef)(null),
                        V = r || D,
                        Z = b || F,
                        U = (0, n.useCallback)(() => {
                            K.current && 'focus' in K.current && K.current.focus();
                        }, []),
                        Y = (0, a.S)(),
                        q = (0, n.useCallback)(() => {
                            w ? w() : Y({ to: i.AppScreen.Link });
                        }, [Y, w]),
                        G = (0, n.useMemo)(
                            () =>
                                C && x && T
                                    ? (0, l.jsxs)(m.N, {
                                          className: g().title,
                                          containerClassName: g().linkContainer,
                                          textClassName: g().linkText,
                                          icon: (0, l.jsx)(u.I, { className: g().titleIcon, size: 'xs', variant: 'arrowRight' }),
                                          iconPosition: 'right',
                                          href: x,
                                          onClick: q,
                                          'data-test-id': c.S7.BLOCK_HEADER_TITLE,
                                          children: [
                                              (0, l.jsx)(v.DZ, {
                                                  id: h,
                                                  className: (0, o.$)(g().heading, j),
                                                  variant: I,
                                                  size: y,
                                                  weight: 'bold',
                                                  lineClamp: O,
                                                  ref: L,
                                                  children: C,
                                              }),
                                              B,
                                          ],
                                      })
                                    : (0, l.jsxs)('div', {
                                          className: g().title,
                                          children: [
                                              (0, l.jsx)(v.DZ, {
                                                  id: h,
                                                  className: (0, o.$)(g().heading, j, { [g().heading_notAvailable]: !T }),
                                                  variant: I,
                                                  size: y,
                                                  weight: 'bold',
                                                  lineClamp: O,
                                                  ref: L,
                                                  'data-test-id': c.S7.BLOCK_HEADER_TITLE,
                                                  children: C,
                                              }),
                                              B,
                                          ],
                                      }),
                            [T, q, L, I, h, C, j, O, y, x, B],
                        ),
                        J = (0, n.useMemo)(() => (F && M ? (0, l.jsx)(_.W, { isActive: H, className: g().shimmerDescription }) : b), [F, M, b, H]),
                        Q = (0, n.useMemo)(
                            () =>
                                D && M
                                    ? (0, l.jsx)(_.W, { isActive: H, className: (0, o.$)(g().shimmerCover, $), radius: 's' })
                                    : (0, l.jsx)(d._V, {
                                          src: r,
                                          fallbackIconVariant: E,
                                          style: { backgroundColor: S },
                                          className: g().cover,
                                          ref: K,
                                          onClick: U,
                                          fit: 'cover',
                                          withAvatarReplace: !0,
                                          fallbackIconSize: 's',
                                          'aria-hidden': !0,
                                          'data-test-id': c.S7.BLOCK_HEADER_COVER,
                                      }),
                            [S, r, E, U, H, M, $, D],
                        );
                    return (0, l.jsxs)('div', {
                        className: (0, o.$)(g().root, t),
                        ref: W,
                        ...X,
                        'data-test-id': c.S7.BLOCK_HEADER,
                        children: [
                            (0, l.jsxs)('div', {
                                className: g().start,
                                children: [
                                    V && (0, l.jsx)(f.t, { radius: R, className: (0, o.$)(g().coverContainer, A), children: Q }),
                                    (0, l.jsxs)('div', {
                                        className: g().textContainer,
                                        children: [
                                            p,
                                            G,
                                            Z &&
                                                (0, l.jsx)(v.HL, {
                                                    id: ''.concat(h, '-description'),
                                                    variant: 'span',
                                                    type: 'text',
                                                    size: 'm',
                                                    weight: 'medium',
                                                    lineClamp: P ? 2 : void 0,
                                                    className: (0, o.$)(g().description, { [g().description_widthLimit]: P }),
                                                    'data-test-id': c.S7.BLOCK_HEADER_DESCRIPTION,
                                                    children: J,
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                            k || N,
                        ],
                    });
                },
                C = (0, n.forwardRef)((e, t) => (0, l.jsx)(p, { forwardRef: t, ...e }));
        },
        31764: (e, t, r) => {
            'use strict';
            r.d(t, { X: () => f });
            var l = r(88800),
                o = r(65724),
                n = r(53548),
                i = r(17392),
                s = r(88021),
                a = r(96817),
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
                        buttonVariant: m = 'outline',
                    } = e,
                    { swipeBackward: h, swipeForward: g, shouldBackwardButtonBeDisabled: p, shouldForwardButtonBeDisabled: C, shouldHideControls: b } = (0, s.Y)(t),
                    x = (0, n.useCallback)(
                        (e) => {
                            (h(), e.stopPropagation());
                        },
                        [h],
                    ),
                    k = (0, n.useCallback)(
                        (e) => {
                            (g(), e.stopPropagation());
                        },
                        [g],
                    );
                return (0, l.jsxs)('div', {
                    className: (0, o.$)(d().root, f),
                    'data-test-id': i.S7.CAROUSEL_CONTROLS,
                    children: [
                        (0, l.jsx)(a.$, {
                            tabIndex: -1,
                            'aria-hidden': !0,
                            className: (0, o.$)(d().control, r, { [d().control_hidden]: b, [d().control_withSecondaryColor]: _ }),
                            onClick: x,
                            size: v,
                            radius: 'round',
                            variant: m,
                            withRipple: !1,
                            icon: (0, l.jsx)(c.I, { size: 'xxs', variant: 'arrowLeft' }),
                            disabled: p,
                            'data-test-id': i.S7.CAROUSEL_CONTROLS_BACKWARD_BUTTON,
                        }),
                        (0, l.jsx)(a.$, {
                            tabIndex: -1,
                            'aria-hidden': !0,
                            className: (0, o.$)(d().control, u, { [d().control_hidden]: b, [d().control_withSecondaryColor]: _ }),
                            onClick: k,
                            size: v,
                            radius: 'round',
                            variant: m,
                            withRipple: !1,
                            icon: (0, l.jsx)(c.I, { size: 'xxs', variant: 'arrowRight' }),
                            disabled: C,
                            'data-test-id': i.S7.CAROUSEL_CONTROLS_FORWARD_BUTTON,
                        }),
                    ],
                });
            };
        },
        35962: (e, t, r) => {
            'use strict';
            r.d(t, { k: () => n });
            var l = r(88800),
                o = r(37770);
            let n = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return Array.from({ length: 9 }, (t, r) => (0, l.jsx)(o.V, { ...e }, r));
            };
        },
        47934: (e, t, r) => {
            'use strict';
            r.d(t, { O: () => p });
            var l = r(88800),
                o = r(65724),
                n = r(53548),
                i = r(35412),
                s = r(87999),
                a = r(7833),
                c = r(79070),
                u = r(53323),
                d = r(19994),
                f = r(18486),
                _ = r(31764),
                v = r(35962),
                m = r(2350),
                h = r.n(m);
            let g = (e) => {
                    let {
                            forwardRef: t,
                            shimmerClassName: r,
                            isShimmerVisible: m,
                            isShimmerActive: g,
                            isShimmerWithSubcover: p,
                            isShimmerCentered: C,
                            isShimmerRounded: b,
                            title: x,
                            description: k,
                            coverUrl: y,
                            viewAllActionLink: S,
                            titleChildren: R,
                            headerChildren: j,
                            children: O,
                            className: E,
                            containerClassName: T,
                            headerClassName: w,
                            itemClassName: B,
                            showHeaderShimmer: N = !1,
                            showShimmerInfo: L = !0,
                            showControls: A = !0,
                            headingRef: I,
                            headingVariant: P,
                            customShimmer: M,
                            ...H
                        } = e,
                        D = (0, n.useId)(),
                        F = (0, n.useRef)(null),
                        W = (0, n.useMemo)(
                            () =>
                                N && m
                                    ? (0, l.jsx)('div', { className: w, children: (0, l.jsx)(d.W, { isActive: g, className: h().shimmerTitle, radius: 'l' }) })
                                    : x || k || R || j
                                      ? (0, l.jsx)(a.B, {
                                            objectType: s.DomainObjectType.Shortcut,
                                            objectId: String(S),
                                            objectPosX: 1,
                                            objectPosY: 1,
                                            children: (0, l.jsx)(f.T, {
                                                className: w,
                                                labeledForId: D,
                                                title: x,
                                                description: k,
                                                coverUrl: y,
                                                viewAllActionLink: S,
                                                controls: A && (0, l.jsx)(_.X, { className: h().controls, carouselRef: F }),
                                                headingRef: I,
                                                headingVariant: P,
                                                withDescription: !!k,
                                                titleChildren: R,
                                                children: j,
                                            }),
                                        })
                                      : void 0,
                            [y, k, w, I, P, D, g, m, A, N, x, R, j, S],
                        ),
                        $ = (0, c.L)(() => M || (0, v.k)({ className: r, isActive: g, withInfo: L, withSubcover: p, centered: C, round: b }));
                    return (0, l.jsxs)('section', {
                        ref: t,
                        className: (0, o.$)(h().root, E),
                        ...(0, i.OZ)(H),
                        children: [
                            W,
                            (0, l.jsx)(u.F, {
                                className: T,
                                ref: F,
                                itemClassName: (0, o.$)(h().item, h().important, B),
                                'aria-labelledby': ''.concat(D, ' ').concat(D, '-description'),
                                children: m ? $ : O,
                            }),
                        ],
                    });
                },
                p = (0, n.forwardRef)((e, t) => (0, l.jsx)(g, { forwardRef: t, ...e }));
        },
        53323: (e, t, r) => {
            'use strict';
            r.d(t, { F: () => u });
            var l,
                o = r(87819),
                n = r(53548),
                i = {
                    5881: (e, t, r) => {
                        function l() {
                            for (var e, t, r = 0, l = ''; r < arguments.length;)
                                (e = arguments[r++]) &&
                                    (t = (function e(t) {
                                        var r,
                                            l,
                                            o = '';
                                        if ('string' == typeof t || 'number' == typeof t) o += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (r = 0; r < t.length; r++) t[r] && (l = e(t[r])) && (o && (o += ' '), (o += l));
                                            else for (r in t) t[r] && (o && (o += ' '), (o += r));
                                        return o;
                                    })(e)) &&
                                    (l && (l += ' '), (l += t));
                            return l;
                        }
                        (r.r(t), r.d(t, { clsx: () => l, default: () => o }));
                        let o = l;
                    },
                    2876: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => l }));
                        let l = { root: 'IZnFMW4gXBshJODnvB1P', item: 'VJ9IexhAEuYSCyGiMfN4' };
                    },
                    9097: (e, t) => {
                        var r = Symbol.for('react.transitional.element');
                        function l(e, t, l) {
                            var o = null;
                            if ((void 0 !== l && (o = '' + l), void 0 !== t.key && (o = '' + t.key), 'key' in t))
                                for (var n in ((l = {}), t)) 'key' !== n && (l[n] = t[n]);
                            else l = t;
                            return { $$typeof: r, type: e, key: o, ref: void 0 !== (t = l.ref) ? t : null, props: l };
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
                            { innerWidth: o = 0, innerHeight: n = 0 } = window;
                        function i(e) {
                            let { top: t, right: r, bottom: l, left: i } = e.getBoundingClientRect();
                            return ((t >= 0 && t <= n) || (l >= 0 && l <= n)) && ((i >= 0 && i <= o) || (r >= 0 && r <= o));
                        }
                        function s(e) {
                            var t, r;
                            let l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'data-intersection-property-id';
                            return null != (r = null == e || null == (t = e.getAttribute) ? void 0 : t.call(e, l)) ? r : e.attributes[0];
                        }
                        function a(e, t) {
                            let r = new IntersectionObserver((t) => {
                                t.forEach((t) => {
                                    e(t, r);
                                });
                            }, t);
                            return r;
                        }
                        ((t.defaultOptions = { threshold: 0, preflightCheck: !0 }),
                            (t.isInViewportNow = i),
                            (t.getElementNameByDataAttribute = s),
                            (t.createIntersectionObserver = a),
                            (t.useIntersectionObserver = function (e, r, o) {
                                let [{ freezeOnceVisible: n, preflightCheck: c, ...u }, d = !1] =
                                        'boolean' == typeof r || void 0 === r ? [t.defaultOptions, r] : [{ ...t.defaultOptions, ...r }, o],
                                    [f, _] = (0, l.useState)({}),
                                    v = (0, l.useRef)(new Set()),
                                    m = (0, l.useMemo)(
                                        () =>
                                            d
                                                ? null
                                                : a((e) => {
                                                      let t = s(e.target);
                                                      if (t && m) {
                                                          if (v.current.has(t)) return;
                                                          (_((r) => ({ ...r, [t]: { isIntersecting: e.isIntersecting } })),
                                                              n && e.isIntersecting && (v.current.add(t), m.unobserve(e.target)));
                                                      }
                                                  }, u),
                                        [d],
                                    );
                                return (
                                    (0, l.useLayoutEffect)(
                                        () => (
                                            m &&
                                                !d &&
                                                e.forEach((e) => {
                                                    if (e.current) {
                                                        let t = !1;
                                                        if (c && (t = i(e.current))) {
                                                            let t = s(e.current);
                                                            _((e) => ({ ...e, [t]: { isIntersecting: !0 } }));
                                                        }
                                                        t || m.observe(e.current);
                                                    }
                                                }),
                                            () => {
                                                m && m.disconnect();
                                            }
                                        ),
                                        [d, m, e.length],
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
                            let o = (0, l.useCallback)(() => {
                                    r((e) => !e);
                                }, []),
                                n = (0, l.useCallback)(() => {
                                    r(!0);
                                }, []),
                                i = (0, l.useCallback)(() => {
                                    r(!1);
                                }, []);
                            return { state: t, toggle: o, setState: r, toggleTrue: n, toggleFalse: i };
                        };
                    },
                    1258: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.AutoScrollCarousel = void 0));
                        let l = r(4377),
                            o = r(810),
                            n = r(792),
                            i = r(597),
                            s = r(4012),
                            a = r(1676),
                            c = r(7962),
                            u = r(2134),
                            d = r(7262);
                        t.AutoScrollCarousel = (e) => {
                            let {
                                    ref: t,
                                    children: r,
                                    autoplay: { enabled: f, delay: _, stopOnMouseEnter: v, stopOnFocusIn: m, stopOnInteraction: h },
                                    onPointerEnter: g,
                                    onPointerLeave: p,
                                    onPointerDown: C,
                                    onPointerUp: b,
                                    onPointerCancel: x,
                                    onFocus: k,
                                    onBlur: y,
                                    onScroll: S,
                                    onScrollEnd: R,
                                    ...j
                                } = e,
                                { state: O, toggleTrue: E, toggleFalse: T } = (0, a.useToggle)(!1),
                                { state: w, toggleTrue: B, toggleFalse: N } = (0, a.useToggle)(!1),
                                { state: L, setState: A, toggleFalse: I } = (0, a.useToggle)(!1),
                                { state: P, setState: M } = (0, a.useToggle)(!1),
                                { state: H, setState: D } = (0, a.useToggle)(!1),
                                { state: F, toggleTrue: W, toggleFalse: $ } = (0, a.useToggle)(!1),
                                { state: z, toggleTrue: X } = (0, a.useToggle)(!1),
                                { state: K, setState: V } = (0, a.useToggle)(!1),
                                Z = (0, o.useRef)(null),
                                U = (0, s.useMergeRefs)([Z, t]),
                                Y = (0, d.useScrollEndFallback)($),
                                q = o.Children.count(r),
                                G = f && q > 1 && P && H && !K && !((v && L) || (m && O) || (h && z) || w || F),
                                J = (0, n.useCallbackRef)((e) => {
                                    (A('mouse' === e.pointerType), null == g || g(e));
                                }),
                                Q = (0, n.useCallbackRef)((e) => {
                                    (I(), N(), null == p || p(e));
                                }),
                                ee = (0, n.useCallbackRef)((e) => {
                                    (B(), X(), null == C || C(e));
                                }),
                                et = (0, n.useCallbackRef)((e) => {
                                    (N(), null == b || b(e));
                                }),
                                er = (0, n.useCallbackRef)((e) => {
                                    (N(), null == x || x(e));
                                }),
                                el = (0, n.useCallbackRef)((e) => {
                                    (w || E(), null == k || k(e));
                                }),
                                eo = (0, n.useCallbackRef)((e) => {
                                    (e.currentTarget.contains(e.relatedTarget) || T(), null == y || y(e));
                                }),
                                en = (0, n.useCallbackRef)((e) => {
                                    (W(), Y(e.currentTarget), null == S || S(e));
                                }),
                                ei = (0, n.useCallbackRef)((e) => {
                                    ($(), null == R || R(e));
                                });
                            return (
                                (0, o.useEffect)(() => {
                                    let e = matchMedia('(prefers-reduced-motion: reduce)'),
                                        t = () => V(e.matches);
                                    return (t(), e.addEventListener('change', t), () => e.removeEventListener('change', t));
                                }, [V]),
                                (0, o.useEffect)(() => {
                                    let e = Z.current;
                                    if (!e) return;
                                    let t = (0, i.createIntersectionObserver)((e) => {
                                        M(e.isIntersecting && e.intersectionRatio > 0);
                                    });
                                    return (t.observe(e), () => t.disconnect());
                                }, [Z, M]),
                                (0, o.useEffect)(() => {
                                    let e = () => D('visible' === document.visibilityState);
                                    return (document.addEventListener('visibilitychange', e), e(), () => document.removeEventListener('visibilitychange', e));
                                }, [D]),
                                (0, o.useEffect)(() => {
                                    let e = Z.current;
                                    if (!e || !G) return;
                                    let t = setInterval(() => {
                                        let r = (0, u.getNextCarouselScrollPosition)(e);
                                        void 0 !== r && (clearInterval(t), W(), e.scrollTo({ left: r, behavior: 'smooth' }));
                                    }, _);
                                    return () => clearInterval(t);
                                }, [Z, _, G, q, W]),
                                (0, l.jsx)(c.CarouselBase, {
                                    ref: U,
                                    ...j,
                                    onPointerEnter: J,
                                    onPointerLeave: Q,
                                    onPointerDown: ee,
                                    onPointerUp: et,
                                    onPointerCancel: er,
                                    onFocus: el,
                                    onBlur: eo,
                                    onScroll: en,
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
                                    o = parseFloat(r.scrollPaddingRight) || 0,
                                    n = e.getBoundingClientRect().left + e.clientLeft,
                                    i = 0;
                                for (let r of e.children) {
                                    let s = r.getBoundingClientRect(),
                                        a = getComputedStyle(r).scrollSnapAlign,
                                        c = s.left - n + e.scrollLeft,
                                        u = Math.max(0, Math.min(t, 'center' === a ? c + s.width / 2 - (e.clientWidth + l - o) / 2 : c - l));
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
                            o = r(792);
                        t.useScrollEndFallback = (e) => {
                            let t = (0, l.useRef)(void 0),
                                r = (0, o.useCallbackRef)(e);
                            return (
                                (0, l.useEffect)(() => () => clearTimeout(t.current), []),
                                (0, o.useCallbackRef)((e) => {
                                    'onscrollend' in e || (clearTimeout(t.current), (t.current = setTimeout(r, 200)));
                                })
                            );
                        };
                    },
                    4014: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Carousel = void 0));
                        let l = r(4377),
                            o = r(1258),
                            n = r(7962);
                        t.Carousel = (e) => {
                            let { autoplay: t, ...r } = e;
                            return t ? (0, l.jsx)(o.AutoScrollCarousel, { ...r, autoplay: t }) : (0, l.jsx)(n.CarouselBase, { ...r });
                        };
                    },
                    7962: function (e, t, r) {
                        var l =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.CarouselBase = void 0));
                        let o = r(4377),
                            n = r(5881),
                            i = r(810),
                            s = l(r(2876));
                        t.CarouselBase = (e) => {
                            let { className: t, itemClassName: r, children: l, ref: a, role: c, ...u } = e;
                            return (0, o.jsx)('ol', {
                                ref: a,
                                className: (0, n.clsx)(s.default.root, t),
                                ...u,
                                role: null != c ? c : 'list',
                                children: i.Children.map(l, (e) => (0, o.jsx)('li', { className: (0, n.clsx)(s.default.item, r), children: e })),
                            });
                        };
                    },
                    1964: (e) => {
                        e.exports = o;
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
                return (i[e].call(r.exports, r, r.exports, a), r.exports);
            }
            ((a.d = (e, t) => {
                for (var r in t) a.o(t, r) && !a.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
            }),
                (a.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (a.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var c = {};
            (() => {
                (Object.defineProperty(c, 'X', { value: !0 }), (c.l = void 0));
                var e = a(4014);
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
                o = r(14022),
                n = r(53548),
                i = {
                    352: (e) => {
                        e.exports = o;
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
                return (i[e](r, r.exports, a), r.exports);
            }
            var c = {};
            ((() => {
                (Object.defineProperty(c, 'X', { value: !0 }), (c.l = void 0));
                let e = a(810),
                    t = a(352);
                c.l = (r) => {
                    let [l, o] = (0, e.useState)(!0),
                        [n, i] = (0, e.useState)(!0),
                        s = () => {
                            let e = null == r ? void 0 : r.current;
                            e && (o(0 === e.scrollLeft), i(e.scrollWidth - e.scrollLeft <= e.offsetWidth + 10));
                        };
                    ((0, e.useEffect)(() => {
                        s();
                    }, [r, s]),
                        (0, e.useEffect)(() => {
                            let e = null == r ? void 0 : r.current;
                            return (
                                null == e || e.addEventListener('scroll', s),
                                window.addEventListener('resize', s),
                                () => {
                                    (null == e || e.removeEventListener('scroll', s), window.removeEventListener('resize', s));
                                }
                            );
                        }, [r, s]));
                    let a = (0, e.useMemo)(
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
                        swipeForward: a,
                        shouldBackwardButtonBeDisabled: l,
                        shouldForwardButtonBeDisabled: n,
                        shouldHideControls: l && n,
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
