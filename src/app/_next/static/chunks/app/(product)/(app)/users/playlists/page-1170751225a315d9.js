(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2113],
    {
        8061: (e, t, r) => {
            'use strict';
            r.r(t), r.d(t, { default: () => l });
            var n = r(54486),
                o = r(97396),
                a = r(16476);
            let l = () => {
                let e = (0, o.useSearchParams)(),
                    t = e.get('userId'),
                    r = e.get('kind');
                return (t && r) || (0, o.notFound)(), (0, n.jsx)(a.SM, { userId: t, kind: r });
            };
        },
        19713: (e, t, r) => {
            'use strict';
            r.d(t, { FN: () => o, gj: () => n }), r(99215);
            let n = (e) => {
                    let { containerNodeRect: t, draggingNodeRect: r, transform: n } = e;
                    return r && t
                        ? (function (e, t, r) {
                              let n = { ...e };
                              return (
                                  t.top + e.y <= r.top ? (n.y = r.top - t.top) : t.bottom + e.y >= r.top + r.height && (n.y = r.top + r.height - t.bottom),
                                  t.left + e.x <= r.left ? (n.x = r.left - t.left) : t.right + e.x >= r.left + r.width && (n.x = r.left + r.width - t.right),
                                  n
                              );
                          })(n, r, t)
                        : n;
                },
                o = (e) => {
                    let { transform: t } = e;
                    return { ...t, x: 0 };
                };
        },
        31622: (e, t, r) => {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'default', {
                    enumerable: !0,
                    get: function () {
                        return s;
                    },
                });
            let n = r(54486),
                o = r(61910),
                a = r(91165);
            function l(e) {
                return { default: e && 'default' in e ? e.default : e };
            }
            r(98944);
            let i = { loader: () => Promise.resolve(l(() => null)), loading: null, ssr: !0 },
                s = function (e) {
                    let t = { ...i, ...e },
                        r = (0, o.lazy)(() => t.loader().then(l)),
                        s = t.loading;
                    function u(e) {
                        let l = s ? (0, n.jsx)(s, { isLoading: !0, pastDelay: !0, error: null }) : null,
                            i = !t.ssr || !!t.loading,
                            u = i ? o.Suspense : o.Fragment,
                            d = t.ssr
                                ? (0, n.jsxs)(n.Fragment, { children: [null, (0, n.jsx)(r, { ...e })] })
                                : (0, n.jsx)(a.BailoutToCSR, { reason: 'next/dynamic', children: (0, n.jsx)(r, { ...e }) });
                        return (0, n.jsx)(u, { ...(i ? { fallback: l } : {}), children: d });
                    }
                    return (u.displayName = 'LoadableComponent'), u;
                };
        },
        35537: (e, t, r) => {
            'use strict';
            r.d(t, { G: () => d });
            var n,
                o = r(94377),
                a = r(61910),
                l = {
                    6699: (e, t, r) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.useDebouncedToggle = void 0);
                        let n = r(352),
                            o = r(810);
                        t.useDebouncedToggle = (e) => {
                            let { delay: t, initialState: r, throttleTimeout: a } = e,
                                l = (0, o.useRef)(null),
                                [i, s] = (0, o.useState)(!!r),
                                u = (0, o.useMemo)(
                                    () =>
                                        (0, n.throttle)(() => {
                                            s(!r),
                                                l.current && window.clearTimeout(l.current),
                                                (l.current = window.setTimeout(() => {
                                                    s(!!r);
                                                }, t));
                                        }, a),
                                    [t, r, a],
                                ),
                                d = (0, o.useCallback)(() => {
                                    s(!!r), l.current && window.clearTimeout(l.current);
                                }, [r]);
                            return (
                                (0, o.useEffect)(
                                    () => () => {
                                        l.current && window.clearTimeout(l.current);
                                    },
                                    [],
                                ),
                                { state: i, handleDebouncedToggle: u, reset: d }
                            );
                        };
                    },
                    2767: (e, t, r) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.useForceUpdateRef = void 0);
                        let n = r(810);
                        t.useForceUpdateRef = () => {
                            let [e, t] = (0, n.useState)(null);
                            return [
                                e,
                                (0, n.useCallback)((e) => {
                                    t((t) => (t !== e ? e : t));
                                }, []),
                            ];
                        };
                    },
                    2067: (e, t, r) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.useScroll = void 0);
                        let n = r(810),
                            o = r(361),
                            a = r(6699);
                        t.useScroll = (e) => {
                            let { onScroll: t, listenIsScrolling: r, elementRef: l } = e,
                                { state: i, handleDebouncedToggle: s } = (0, a.useDebouncedToggle)({ delay: 1e3, throttleTimeout: 100 }),
                                u = (0, n.useCallback)(() => {
                                    r && s(), null == t || t();
                                }, [r, s, t]);
                            return (
                                (0, n.useEffect)(() => {
                                    let e = (0, o.getElementFromRefOrElement)(l);
                                    if (null === e) return;
                                    let t = null != e ? e : window,
                                        r = { capture: !0, passive: !0 };
                                    return t.addEventListener('scroll', u, r), () => t.removeEventListener('scroll', u, r);
                                }, [l, u]),
                                i
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
                        e.exports = o;
                    },
                    810: (e) => {
                        e.exports = n || (n = r.t(a, 2));
                    },
                },
                i = {};
            function s(e) {
                var t = i[e];
                if (void 0 !== t) return t.exports;
                var r = (i[e] = { exports: {} });
                return l[e](r, r.exports, s), r.exports;
            }
            var u = {};
            (() => {
                Object.defineProperty(u, '__esModule', { value: !0 }), (u.useElementOffsetY = void 0);
                let e = s(810),
                    t = s(2067),
                    r = s(2767);
                u.useElementOffsetY = (n) => {
                    let [o, a] = (0, r.useForceUpdateRef)(),
                        [l, i] = (0, e.useState)(),
                        s = (0, e.useCallback)(() => {
                            let e = null == o ? void 0 : o.getBoundingClientRect();
                            e && i(e.y);
                        }, [o]);
                    return (0, e.useLayoutEffect)(s), (0, t.useScroll)({ onScroll: s, elementRef: n }), { forceUpdateRefCallback: a, offsetY: l };
                };
            })(),
                u.__esModule;
            var d = u.useElementOffsetY;
        },
        36446: (e, t, r) => {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'default', {
                    enumerable: !0,
                    get: function () {
                        return o;
                    },
                });
            let n = r(45221)._(r(31622));
            function o(e, t) {
                var r;
                let o = {};
                'function' == typeof e && (o.loader = e);
                let a = { ...o, ...t };
                return (0, n.default)({ ...a, modules: null == (r = a.loadableGenerated) ? void 0 : r.modules });
            }
            ('function' == typeof t.default || ('object' == typeof t.default && null !== t.default)) &&
                void 0 === t.default.__esModule &&
                (Object.defineProperty(t.default, '__esModule', { value: !0 }), Object.assign(t.default, t), (e.exports = t.default));
        },
        42421: (e, t, r) => {
            'use strict';
            r.d(t, { M: () => n.NotFound });
            var n = r(65034);
        },
        46215: (e) => {
            e.exports = {
                root: 'NotFound_root__47ZX6',
                root_desktop: 'NotFound_root_desktop___QqSb',
                navigation: 'NotFound_navigation__q8rIW',
                content: 'NotFound_content__3kry_',
                icon: 'NotFound_icon___Wa9y',
                title: 'NotFound_title__akG_o',
                important: 'NotFound_important__z1LWl',
                text: 'NotFound_text__oxDZv',
                button: 'NotFound_button__jF4uH',
            };
        },
        57249: (e, t, r) => {
            'use strict';
            e.exports = r.p + 'static/media/dotlottie-player.98f80c6ff3eca5ba.wasm';
        },
        63708: (e) => {
            e.exports = {
                root: 'SomethingWentWrong_root__d77VJ',
                content: 'SomethingWentWrong_content__8_YkJ',
                content_shrink: 'SomethingWentWrong_content_shrink__GOR_7',
                navigation: 'SomethingWentWrong_navigation__a8eMG',
                navigation_desktop: 'SomethingWentWrong_navigation_desktop__WGGBX',
                icon: 'SomethingWentWrong_icon__f15_y',
                title: 'SomethingWentWrong_title__Kn89B',
                important: 'SomethingWentWrong_important__namIb',
                text: 'SomethingWentWrong_text__KEfGc',
                button: 'SomethingWentWrong_button__dmh7t',
            };
        },
        65034: (e, t, r) => {
            'use strict';
            r.d(t, { NotFound: () => p });
            var n = r(54486),
                o = r(50420),
                a = r(28303),
                l = r(47713),
                i = r(77881),
                s = r(5956),
                u = r(97800),
                d = r(83252),
                c = r(80585),
                m = r(61910),
                f = r(46215),
                _ = r.n(f);
            let p = (0, a.PA)((e) => {
                let { className: t, title: r, description: a, iconVariant: f = 'musicLogo', iconClassName: p, iconSize: g } = e,
                    { contentRef: v } = (0, d.gKY)(),
                    h = (0, d.ZpR)(d.Zyd.main.href);
                (0, d.LZB)();
                let { handleNavigateToMain: x } = (0, d.D5F)(h);
                return (
                    (0, d.NBO)(!0),
                    !(function () {
                        let { location: e } = (0, d.Pjs)();
                        (0, m.useEffect)(
                            () => (
                                e.setNotFound(!0),
                                () => {
                                    e.setNotFound(!1);
                                }
                            ),
                            [e],
                        );
                    })(),
                    (0, n.jsxs)('div', {
                        className: (0, o.$)(_().root, { [_().root_desktop]: !v }, t),
                        children: [
                            (0, n.jsx)(c.Lh, { withBackwardFallback: '/', className: _().navigation, withForwardControl: !1 }),
                            (0, n.jsxs)('div', {
                                className: _().content,
                                children: [
                                    (0, n.jsx)(s.Icon, { className: (0, o.$)(_().icon, p), variant: f, size: g }),
                                    (0, n.jsx)(u.Heading, {
                                        className: (0, o.$)(_().title, _().important),
                                        variant: 'h3',
                                        size: 'xs',
                                        children: r || (0, n.jsx)(l.A, { id: 'page-error.page-does-not-exist' }),
                                    }),
                                    (0, n.jsx)(u.Caption, {
                                        className: (0, o.$)(_().text, _().important),
                                        variant: 'span',
                                        type: 'text',
                                        size: 'l',
                                        weight: 'normal',
                                        children: a || (0, n.jsx)(l.A, { id: 'page-error.page-does-not-exist-description' }),
                                    }),
                                    (0, n.jsx)(i.$, {
                                        onClick: x,
                                        className: _().button,
                                        role: 'link',
                                        color: 'secondary',
                                        size: 'l',
                                        radius: 'xxxl',
                                        children: (0, n.jsx)(u.Caption, {
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'm',
                                            children: (0, n.jsx)(l.A, { id: 'navigation.page-main' }),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    })
                );
            });
        },
        68498: (e, t, r) => {
            Promise.resolve().then(r.bind(r, 8061));
        },
        75312: (e, t, r) => {
            'use strict';
            r.d(t, { SomethingWentWrong: () => g });
            var n = r(54486),
                o = r(50420),
                a = r(28303),
                l = r(61910),
                i = r(43426),
                s = r(47713),
                u = r(77881),
                d = r(5956),
                c = r(97800),
                m = r(83252),
                f = r(80585),
                _ = r(63708),
                p = r.n(_);
            let g = (0, a.PA)((e) => {
                let { className: t, withBackwardControl: r = !0 } = e,
                    { formatMessage: a } = (0, i.A)(),
                    _ = a({ id: 'error-messages.something-went-wrong' });
                (0, m.CgZ)(_);
                let { sendRefreshEvent: g } = (0, m.cYT)(),
                    v = (0, l.useCallback)(() => {
                        g(), (window.location.href = m.Zyd.main.href);
                    }, [g]),
                    { contentRef: h } = (0, m.gKY)();
                return (0, n.jsxs)('div', {
                    className: (0, o.$)(p().root, t),
                    children: [
                        r &&
                            (0, n.jsx)(f.Lh, {
                                withBackwardFallback: '/',
                                className: (0, o.$)(p().navigation, { [p().navigation_desktop]: !h }),
                                withForwardControl: !1,
                            }),
                        (0, n.jsxs)('div', {
                            className: (0, o.$)(p().content, { [p().content_shrink]: !r }),
                            children: [
                                (0, n.jsx)(d.Icon, { className: p().icon, variant: 'attention', size: 'xxl' }),
                                (0, n.jsx)(c.Heading, { className: (0, o.$)(p().title, p().important), variant: 'h3', size: 'xs', children: _ }),
                                (0, n.jsxs)(c.Caption, {
                                    className: (0, o.$)(p().text, p().important),
                                    variant: 'span',
                                    type: 'text',
                                    size: 'l',
                                    weight: 'normal',
                                    children: [!1, (0, n.jsx)(s.A, { id: 'page-error.try-to-restart-app' })],
                                }),
                                (0, n.jsx)(u.$, {
                                    onClick: v,
                                    className: p().button,
                                    role: 'link',
                                    color: 'secondary',
                                    size: 'l',
                                    radius: 'xxxl',
                                    children: (0, n.jsxs)(c.Caption, {
                                        type: 'controls',
                                        variant: 'span',
                                        size: 'm',
                                        children: [!1, (0, n.jsx)(s.A, { id: 'page-error.restart-app-button' })],
                                    }),
                                }),
                            ],
                        }),
                    ],
                });
            });
        },
        82644: (e, t, r) => {
            'use strict';
            r.d(t, { w: () => n.SomethingWentWrong });
            var n = r(75312);
        },
        83645: (e, t, r) => {
            'use strict';
            r.d(t, { default: () => o.a });
            var n = r(36446),
                o = r.n(n);
        },
        91165: (e, t, r) => {
            'use strict';
            function n(e) {
                let { reason: t, children: r } = e;
                return r;
            }
            Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'BailoutToCSR', {
                    enumerable: !0,
                    get: function () {
                        return n;
                    },
                }),
                r(39201);
        },
        97151: (e, t, r) => {
            'use strict';
            r.d(t, { XU: () => c });
            var n,
                o,
                a = r(41500),
                l = r(61910),
                i = r(43426);
            !(function (e) {
                (e.formatDate = 'FormattedDate'),
                    (e.formatTime = 'FormattedTime'),
                    (e.formatNumber = 'FormattedNumber'),
                    (e.formatList = 'FormattedList'),
                    (e.formatDisplayName = 'FormattedDisplayName');
            })(n || (n = {})),
                (function (e) {
                    (e.formatDate = 'FormattedDateParts'),
                        (e.formatTime = 'FormattedTimeParts'),
                        (e.formatNumber = 'FormattedNumberParts'),
                        (e.formatList = 'FormattedListParts');
                })(o || (o = {}));
            var s = function (e) {
                var t = (0, i.A)(),
                    r = e.value,
                    n = e.children,
                    o = (0, a.__rest)(e, ['value', 'children']);
                return n(t.formatNumberToParts(r, o));
            };
            function u(e) {
                var t = function (t) {
                    var r = (0, i.A)(),
                        n = t.value,
                        o = t.children,
                        l = (0, a.__rest)(t, ['value', 'children']),
                        s = 'string' == typeof n ? new Date(n || 0) : n;
                    return o('formatDate' === e ? r.formatDateToParts(s, l) : r.formatTimeToParts(s, l));
                };
                return (t.displayName = o[e]), t;
            }
            function d(e) {
                var t = function (t) {
                    var r = (0, i.A)(),
                        n = t.value,
                        o = t.children,
                        s = (0, a.__rest)(t, ['value', 'children']),
                        u = r[e](n, s);
                    if ('function' == typeof o) return o(u);
                    var d = r.textComponent || l.Fragment;
                    return l.createElement(d, null, u);
                };
                return (t.displayName = n[e]), t;
            }
            (s.displayName = 'FormattedNumberParts'), (s.displayName = 'FormattedNumberParts');
            var c = d('formatDate');
            d('formatTime'), d('formatNumber'), d('formatList'), d('formatDisplayName'), u('formatDate'), u('formatTime');
        },
        98944: (e, t, r) => {
            'use strict';
            function n(e) {
                let { moduleIds: t } = e;
                return null;
            }
            Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'PreloadChunks', {
                    enumerable: !0,
                    get: function () {
                        return n;
                    },
                }),
                r(54486),
                r(92803),
                r(14367),
                r(32038);
        },
    },
    (e) => {
        e.O(
            0,
            [
                6041, 5355, 2398, 9834, 1023, 8748, 6552, 4915, 2186, 1776, 2036, 1604, 3146, 1426, 7080, 1311, 7764, 6706, 7724, 5201, 5148, 3005, 3916, 4885, 3252, 585,
                6433, 3286, 156, 6231, 4826, 1365, 3211, 7858, 5570, 6664, 7656, 9021, 1872, 6476, 5843, 3290, 7358,
            ],
            () => e((e.s = 68498)),
        ),
            (_N_E = e.O());
    },
]);
