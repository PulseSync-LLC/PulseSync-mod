(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8434],
    {
        30446: (e, t, r) => {
            'use strict';
            r.r(t), r.d(t, { default: () => l });
            var a = r(54486),
                o = r(97396),
                n = r(61910),
                s = r(36748),
                i = r(83252);
            let l = () => {
                let e = (0, o.useSearchParams)().get('albumId');
                return (e && (0, i.LLJ)(e)) || (0, o.notFound)(), (0, a.jsx)(n.Suspense, { children: (0, a.jsx)(s.l$, { albumId: e }) });
            };
        },
        31622: (e, t, r) => {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'default', {
                    enumerable: !0,
                    get: function () {
                        return l;
                    },
                });
            let a = r(54486),
                o = r(61910),
                n = r(91165);
            function s(e) {
                return { default: e && 'default' in e ? e.default : e };
            }
            r(98944);
            let i = { loader: () => Promise.resolve(s(() => null)), loading: null, ssr: !0 },
                l = function (e) {
                    let t = { ...i, ...e },
                        r = (0, o.lazy)(() => t.loader().then(s)),
                        l = t.loading;
                    function u(e) {
                        let s = l ? (0, a.jsx)(l, { isLoading: !0, pastDelay: !0, error: null }) : null,
                            i = !t.ssr || !!t.loading,
                            u = i ? o.Suspense : o.Fragment,
                            d = t.ssr
                                ? (0, a.jsxs)(a.Fragment, { children: [null, (0, a.jsx)(r, { ...e })] })
                                : (0, a.jsx)(n.BailoutToCSR, { reason: 'next/dynamic', children: (0, a.jsx)(r, { ...e }) });
                        return (0, a.jsx)(u, { ...(i ? { fallback: s } : {}), children: d });
                    }
                    return (u.displayName = 'LoadableComponent'), u;
                };
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
            let a = r(45221)._(r(31622));
            function o(e, t) {
                var r;
                let o = {};
                'function' == typeof e && (o.loader = e);
                let n = { ...o, ...t };
                return (0, a.default)({ ...n, modules: null == (r = n.loadableGenerated) ? void 0 : r.modules });
            }
            ('function' == typeof t.default || ('object' == typeof t.default && null !== t.default)) &&
                void 0 === t.default.__esModule &&
                (Object.defineProperty(t.default, '__esModule', { value: !0 }), Object.assign(t.default, t), (e.exports = t.default));
        },
        42421: (e, t, r) => {
            'use strict';
            r.d(t, { M: () => a.NotFound });
            var a = r(65034);
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
        65034: (e, t, r) => {
            'use strict';
            r.d(t, { NotFound: () => p });
            var a = r(54486),
                o = r(50420),
                n = r(28303),
                s = r(47713),
                i = r(77881),
                l = r(5956),
                u = r(97800),
                d = r(83252),
                c = r(80585),
                m = r(61910),
                f = r(46215),
                _ = r.n(f);
            let p = (0, n.PA)((e) => {
                let { className: t, title: r, description: n, iconVariant: f = 'musicLogo', iconClassName: p, iconSize: v } = e,
                    { contentRef: N } = (0, d.gKY)(),
                    b = (0, d.ZpR)(d.Zyd.main.href);
                (0, d.LZB)();
                let { handleNavigateToMain: x } = (0, d.D5F)(b);
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
                    (0, a.jsxs)('div', {
                        className: (0, o.$)(_().root, { [_().root_desktop]: !N }, t),
                        children: [
                            (0, a.jsx)(c.Lh, { withBackwardFallback: '/', className: _().navigation, withForwardControl: !1 }),
                            (0, a.jsxs)('div', {
                                className: _().content,
                                children: [
                                    (0, a.jsx)(l.Icon, { className: (0, o.$)(_().icon, p), variant: f, size: v }),
                                    (0, a.jsx)(u.Heading, {
                                        className: (0, o.$)(_().title, _().important),
                                        variant: 'h3',
                                        size: 'xs',
                                        children: r || (0, a.jsx)(s.A, { id: 'page-error.page-does-not-exist' }),
                                    }),
                                    (0, a.jsx)(u.Caption, {
                                        className: (0, o.$)(_().text, _().important),
                                        variant: 'span',
                                        type: 'text',
                                        size: 'l',
                                        weight: 'normal',
                                        children: n || (0, a.jsx)(s.A, { id: 'page-error.page-does-not-exist-description' }),
                                    }),
                                    (0, a.jsx)(i.$, {
                                        onClick: x,
                                        className: _().button,
                                        role: 'link',
                                        color: 'secondary',
                                        size: 'l',
                                        radius: 'xxxl',
                                        children: (0, a.jsx)(u.Caption, {
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'm',
                                            children: (0, a.jsx)(s.A, { id: 'navigation.page-main' }),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    })
                );
            });
        },
        83645: (e, t, r) => {
            'use strict';
            r.d(t, { default: () => o.a });
            var a = r(36446),
                o = r.n(a);
        },
        91165: (e, t, r) => {
            'use strict';
            function a(e) {
                let { reason: t, children: r } = e;
                return r;
            }
            Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'BailoutToCSR', {
                    enumerable: !0,
                    get: function () {
                        return a;
                    },
                }),
                r(39201);
        },
        96997: (e, t, r) => {
            Promise.resolve().then(r.bind(r, 30446));
        },
        97151: (e, t, r) => {
            'use strict';
            r.d(t, { XU: () => c });
            var a,
                o,
                n = r(41500),
                s = r(61910),
                i = r(43426);
            !(function (e) {
                (e.formatDate = 'FormattedDate'),
                    (e.formatTime = 'FormattedTime'),
                    (e.formatNumber = 'FormattedNumber'),
                    (e.formatList = 'FormattedList'),
                    (e.formatDisplayName = 'FormattedDisplayName');
            })(a || (a = {})),
                (function (e) {
                    (e.formatDate = 'FormattedDateParts'),
                        (e.formatTime = 'FormattedTimeParts'),
                        (e.formatNumber = 'FormattedNumberParts'),
                        (e.formatList = 'FormattedListParts');
                })(o || (o = {}));
            var l = function (e) {
                var t = (0, i.A)(),
                    r = e.value,
                    a = e.children,
                    o = (0, n.__rest)(e, ['value', 'children']);
                return a(t.formatNumberToParts(r, o));
            };
            function u(e) {
                var t = function (t) {
                    var r = (0, i.A)(),
                        a = t.value,
                        o = t.children,
                        s = (0, n.__rest)(t, ['value', 'children']),
                        l = 'string' == typeof a ? new Date(a || 0) : a;
                    return o('formatDate' === e ? r.formatDateToParts(l, s) : r.formatTimeToParts(l, s));
                };
                return (t.displayName = o[e]), t;
            }
            function d(e) {
                var t = function (t) {
                    var r = (0, i.A)(),
                        a = t.value,
                        o = t.children,
                        l = (0, n.__rest)(t, ['value', 'children']),
                        u = r[e](a, l);
                    if ('function' == typeof o) return o(u);
                    var d = r.textComponent || s.Fragment;
                    return s.createElement(d, null, u);
                };
                return (t.displayName = a[e]), t;
            }
            (l.displayName = 'FormattedNumberParts'), (l.displayName = 'FormattedNumberParts');
            var c = d('formatDate');
            d('formatTime'), d('formatNumber'), d('formatList'), d('formatDisplayName'), u('formatDate'), u('formatTime');
        },
        98944: (e, t, r) => {
            'use strict';
            function a(e) {
                let { moduleIds: t } = e;
                return null;
            }
            Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'PreloadChunks', {
                    enumerable: !0,
                    get: function () {
                        return a;
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
                6041, 9834, 5355, 1023, 2398, 8748, 6552, 4915, 2186, 1776, 3146, 1426, 1604, 1311, 7764, 6706, 7724, 5201, 5148, 3005, 3916, 4885, 6266, 3252, 585, 6433,
                3286, 156, 6231, 4826, 1365, 3211, 7858, 5570, 6664, 7656, 5284, 2460, 15, 4367, 5843, 3290, 7358,
            ],
            () => e((e.s = 96997)),
        ),
            (_N_E = e.O());
    },
]);
