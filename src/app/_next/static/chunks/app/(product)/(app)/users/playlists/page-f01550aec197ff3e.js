(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2113],
    {
        10076: (e, t, r) => {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'default', {
                    enumerable: !0,
                    get: function () {
                        return o;
                    },
                });
            let n = r(36283)._(r(23772));
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
        23772: (e, t, r) => {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'default', {
                    enumerable: !0,
                    get: function () {
                        return u;
                    },
                });
            let n = r(62936),
                o = r(44020),
                a = r(24571);
            function l(e) {
                return { default: e && 'default' in e ? e.default : e };
            }
            r(46950);
            let i = { loader: () => Promise.resolve(l(() => null)), loading: null, ssr: !0 },
                u = function (e) {
                    let t = { ...i, ...e },
                        r = (0, o.lazy)(() => t.loader().then(l)),
                        u = t.loading;
                    function s(e) {
                        let l = u ? (0, n.jsx)(u, { isLoading: !0, pastDelay: !0, error: null }) : null,
                            i = !t.ssr || !!t.loading,
                            s = i ? o.Suspense : o.Fragment,
                            d = t.ssr
                                ? (0, n.jsxs)(n.Fragment, { children: [null, (0, n.jsx)(r, { ...e })] })
                                : (0, n.jsx)(a.BailoutToCSR, { reason: 'next/dynamic', children: (0, n.jsx)(r, { ...e }) });
                        return (0, n.jsx)(s, { ...(i ? { fallback: l } : {}), children: d });
                    }
                    return (s.displayName = 'LoadableComponent'), s;
                };
        },
        24571: (e, t, r) => {
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
                r(71279);
        },
        36118: (e, t, r) => {
            'use strict';
            r.d(t, { SomethingWentWrong: () => g });
            var n = r(62936),
                o = r(79950),
                a = r(19718),
                l = r(44020),
                i = r(47480),
                u = r(26731),
                s = r(5099),
                d = r(85742),
                c = r(20418),
                m = r(42561),
                f = r(85906),
                _ = r(52166),
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
                                    children: [!1, (0, n.jsx)(u.A, { id: 'page-error.try-to-restart-app' })],
                                }),
                                (0, n.jsx)(s.$, {
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
                                        children: [!1, (0, n.jsx)(u.A, { id: 'page-error.restart-app-button' })],
                                    }),
                                }),
                            ],
                        }),
                    ],
                });
            });
        },
        36179: (e, t, r) => {
            'use strict';
            r.d(t, { XU: () => c });
            var n,
                o,
                a = r(62986),
                l = r(44020),
                i = r(47480);
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
            var u = function (e) {
                var t = (0, i.A)(),
                    r = e.value,
                    n = e.children,
                    o = (0, a.__rest)(e, ['value', 'children']);
                return n(t.formatNumberToParts(r, o));
            };
            function s(e) {
                var t = function (t) {
                    var r = (0, i.A)(),
                        n = t.value,
                        o = t.children,
                        l = (0, a.__rest)(t, ['value', 'children']),
                        u = 'string' == typeof n ? new Date(n || 0) : n;
                    return o('formatDate' === e ? r.formatDateToParts(u, l) : r.formatTimeToParts(u, l));
                };
                return (t.displayName = o[e]), t;
            }
            function d(e) {
                var t = function (t) {
                    var r = (0, i.A)(),
                        n = t.value,
                        o = t.children,
                        u = (0, a.__rest)(t, ['value', 'children']),
                        s = r[e](n, u);
                    if ('function' == typeof o) return o(s);
                    var d = r.textComponent || l.Fragment;
                    return l.createElement(d, null, s);
                };
                return (t.displayName = n[e]), t;
            }
            (u.displayName = 'FormattedNumberParts'), (u.displayName = 'FormattedNumberParts');
            var c = d('formatDate');
            d('formatTime'), d('formatNumber'), d('formatList'), d('formatDisplayName'), s('formatDate'), s('formatTime');
        },
        46950: (e, t, r) => {
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
                r(62936),
                r(2933),
                r(34397),
                r(5300);
        },
        49351: (e, t, r) => {
            'use strict';
            r.d(t, { default: () => o.a });
            var n = r(10076),
                o = r.n(n);
        },
        52166: (e) => {
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
        55551: (e, t, r) => {
            'use strict';
            r.d(t, { G: () => d });
            var n,
                o = r(49327),
                a = r(44020),
                l = {
                    6699: (e, t, r) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.useDebouncedToggle = void 0);
                        let n = r(352),
                            o = r(810);
                        t.useDebouncedToggle = (e) => {
                            let { delay: t, initialState: r, throttleTimeout: a } = e,
                                l = (0, o.useRef)(null),
                                [i, u] = (0, o.useState)(!!r),
                                s = (0, o.useMemo)(
                                    () =>
                                        (0, n.throttle)(() => {
                                            u(!r),
                                                l.current && window.clearTimeout(l.current),
                                                (l.current = window.setTimeout(() => {
                                                    u(!!r);
                                                }, t));
                                        }, a),
                                    [t, r, a],
                                ),
                                d = (0, o.useCallback)(() => {
                                    u(!!r), l.current && window.clearTimeout(l.current);
                                }, [r]);
                            return (
                                (0, o.useEffect)(
                                    () => () => {
                                        l.current && window.clearTimeout(l.current);
                                    },
                                    [],
                                ),
                                { state: i, handleDebouncedToggle: s, reset: d }
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
                                { state: i, handleDebouncedToggle: u } = (0, a.useDebouncedToggle)({ delay: 1e3, throttleTimeout: 100 }),
                                s = (0, n.useCallback)(() => {
                                    r && u(), null == t || t();
                                }, [r, u, t]);
                            return (
                                (0, n.useEffect)(() => {
                                    let e = (0, o.getElementFromRefOrElement)(l);
                                    if (null === e) return;
                                    let t = null != e ? e : window,
                                        r = { capture: !0, passive: !0 };
                                    return t.addEventListener('scroll', s, r), () => t.removeEventListener('scroll', s, r);
                                }, [l, s]),
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
            function u(e) {
                var t = i[e];
                if (void 0 !== t) return t.exports;
                var r = (i[e] = { exports: {} });
                return l[e](r, r.exports, u), r.exports;
            }
            var s = {};
            (() => {
                Object.defineProperty(s, '__esModule', { value: !0 }), (s.useElementOffsetY = void 0);
                let e = u(810),
                    t = u(2067),
                    r = u(2767);
                s.useElementOffsetY = (n) => {
                    let [o, a] = (0, r.useForceUpdateRef)(),
                        [l, i] = (0, e.useState)(),
                        u = (0, e.useCallback)(() => {
                            let e = null == o ? void 0 : o.getBoundingClientRect();
                            e && i(e.y);
                        }, [o]);
                    return (0, e.useLayoutEffect)(u), (0, t.useScroll)({ onScroll: u, elementRef: n }), { forceUpdateRefCallback: a, offsetY: l };
                };
            })(),
                s.__esModule;
            var d = s.useElementOffsetY;
        },
        57249: (e, t, r) => {
            'use strict';
            e.exports = r.p + 'static/media/dotlottie-player.98f80c6ff3eca5ba.wasm';
        },
        65438: (e, t, r) => {
            'use strict';
            r.d(t, { w: () => n.SomethingWentWrong });
            var n = r(36118);
        },
        71223: (e, t, r) => {
            'use strict';
            r.r(t), r.d(t, { default: () => l });
            var n = r(62936),
                o = r(69526),
                a = r(44716);
            let l = () => {
                let e = (0, o.useSearchParams)(),
                    t = e.get('userId'),
                    r = e.get('kind');
                return (t && r) || (0, o.notFound)(), (0, n.jsx)(a.SM, { userId: t, kind: r });
            };
        },
        71935: (e, t, r) => {
            'use strict';
            r.d(t, { FN: () => o, gj: () => n }), r(19569);
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
        96789: (e, t, r) => {
            Promise.resolve().then(r.bind(r, 71223));
        },
    },
    (e) => {
        e.O(
            0,
            [
                85, 3196, 2537, 260, 403, 3789, 612, 5721, 2670, 1970, 494, 3302, 3878, 5356, 1311, 7764, 6706, 6011, 5201, 2899, 5419, 2530, 5064, 2561, 5906, 4690,
                4501, 9154, 914, 3197, 6161, 3912, 3189, 2632, 2991, 8303, 2695, 352, 4716, 1009, 4670, 7358,
            ],
            () => e((e.s = 96789)),
        ),
            (_N_E = e.O());
    },
]);
