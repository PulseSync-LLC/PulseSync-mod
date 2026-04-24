(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7722],
    {
        10076: (e, t, r) => {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'default', {
                    enumerable: !0,
                    get: function () {
                        return a;
                    },
                });
            let n = r(36283)._(r(23772));
            function a(e, t) {
                var r;
                let a = {};
                'function' == typeof e && (a.loader = e);
                let o = { ...a, ...t };
                return (0, n.default)({ ...o, modules: null == (r = o.loadableGenerated) ? void 0 : r.modules });
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
                        return l;
                    },
                });
            let n = r(62936),
                a = r(44020),
                o = r(24571);
            function i(e) {
                return { default: e && 'default' in e ? e.default : e };
            }
            r(46950);
            let s = { loader: () => Promise.resolve(i(() => null)), loading: null, ssr: !0 },
                l = function (e) {
                    let t = { ...s, ...e },
                        r = (0, a.lazy)(() => t.loader().then(i)),
                        l = t.loading;
                    function u(e) {
                        let i = l ? (0, n.jsx)(l, { isLoading: !0, pastDelay: !0, error: null }) : null,
                            s = !t.ssr || !!t.loading,
                            u = s ? a.Suspense : a.Fragment,
                            d = t.ssr
                                ? (0, n.jsxs)(n.Fragment, { children: [null, (0, n.jsx)(r, { ...e })] })
                                : (0, n.jsx)(o.BailoutToCSR, { reason: 'next/dynamic', children: (0, n.jsx)(r, { ...e }) });
                        return (0, n.jsx)(u, { ...(s ? { fallback: i } : {}), children: d });
                    }
                    return (u.displayName = 'LoadableComponent'), u;
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
            r.d(t, { SomethingWentWrong: () => p });
            var n = r(62936),
                a = r(79950),
                o = r(19718),
                i = r(44020),
                s = r(47480),
                l = r(26731),
                u = r(5099),
                d = r(85742),
                m = r(20418),
                c = r(42561),
                f = r(85906),
                _ = r(52166),
                g = r.n(_);
            let p = (0, o.PA)((e) => {
                let { className: t, withBackwardControl: r = !0 } = e,
                    { formatMessage: o } = (0, s.A)(),
                    _ = o({ id: 'error-messages.something-went-wrong' });
                (0, c.CgZ)(_);
                let { sendRefreshEvent: p } = (0, c.cYT)(),
                    h = (0, i.useCallback)(() => {
                        p(), (window.location.href = c.Zyd.main.href);
                    }, [p]),
                    { contentRef: v } = (0, c.gKY)();
                return (0, n.jsxs)('div', {
                    className: (0, a.$)(g().root, t),
                    children: [
                        r &&
                            (0, n.jsx)(f.Lh, {
                                withBackwardFallback: '/',
                                className: (0, a.$)(g().navigation, { [g().navigation_desktop]: !v }),
                                withForwardControl: !1,
                            }),
                        (0, n.jsxs)('div', {
                            className: (0, a.$)(g().content, { [g().content_shrink]: !r }),
                            children: [
                                (0, n.jsx)(d.Icon, { className: g().icon, variant: 'attention', size: 'xxl' }),
                                (0, n.jsx)(m.Heading, { className: (0, a.$)(g().title, g().important), variant: 'h3', size: 'xs', children: _ }),
                                (0, n.jsxs)(m.Caption, {
                                    className: (0, a.$)(g().text, g().important),
                                    variant: 'span',
                                    type: 'text',
                                    size: 'l',
                                    weight: 'normal',
                                    children: [!1, (0, n.jsx)(l.A, { id: 'page-error.try-to-restart-app' })],
                                }),
                                (0, n.jsx)(u.$, {
                                    onClick: h,
                                    className: g().button,
                                    role: 'link',
                                    color: 'secondary',
                                    size: 'l',
                                    radius: 'xxxl',
                                    children: (0, n.jsxs)(m.Caption, {
                                        type: 'controls',
                                        variant: 'span',
                                        size: 'm',
                                        children: [!1, (0, n.jsx)(l.A, { id: 'page-error.restart-app-button' })],
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
            r.d(t, { XU: () => m });
            var n,
                a,
                o = r(62986),
                i = r(44020),
                s = r(47480);
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
                })(a || (a = {}));
            var l = function (e) {
                var t = (0, s.A)(),
                    r = e.value,
                    n = e.children,
                    a = (0, o.__rest)(e, ['value', 'children']);
                return n(t.formatNumberToParts(r, a));
            };
            function u(e) {
                var t = function (t) {
                    var r = (0, s.A)(),
                        n = t.value,
                        a = t.children,
                        i = (0, o.__rest)(t, ['value', 'children']),
                        l = 'string' == typeof n ? new Date(n || 0) : n;
                    return a('formatDate' === e ? r.formatDateToParts(l, i) : r.formatTimeToParts(l, i));
                };
                return (t.displayName = a[e]), t;
            }
            function d(e) {
                var t = function (t) {
                    var r = (0, s.A)(),
                        n = t.value,
                        a = t.children,
                        l = (0, o.__rest)(t, ['value', 'children']),
                        u = r[e](n, l);
                    if ('function' == typeof a) return a(u);
                    var d = r.textComponent || i.Fragment;
                    return i.createElement(d, null, u);
                };
                return (t.displayName = n[e]), t;
            }
            (l.displayName = 'FormattedNumberParts'), (l.displayName = 'FormattedNumberParts');
            var m = d('formatDate');
            d('formatTime'), d('formatNumber'), d('formatList'), d('formatDisplayName'), u('formatDate'), u('formatTime');
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
            r.d(t, { default: () => a.a });
            var n = r(10076),
                a = r.n(n);
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
        57249: (e, t, r) => {
            'use strict';
            e.exports = r.p + 'static/media/dotlottie-player.98f80c6ff3eca5ba.wasm';
        },
        63940: (e, t, r) => {
            'use strict';
            r.r(t), r.d(t, { default: () => s });
            var n = r(62936),
                a = r(69526),
                o = r(82591),
                i = r(42561);
            let s = () => {
                let e = (0, a.useSearchParams)().get('artistId');
                return (e && (0, i.LLJ)(e)) || (0, a.notFound)(), (0, n.jsx)(o.Sd, { artistId: e });
            };
        },
        65438: (e, t, r) => {
            'use strict';
            r.d(t, { w: () => n.SomethingWentWrong });
            var n = r(36118);
        },
        98640: (e, t, r) => {
            Promise.resolve().then(r.bind(r, 63940));
        },
    },
    (e) => {
        e.O(
            0,
            [
                85, 260, 3196, 403, 2537, 3789, 612, 5721, 2670, 1970, 494, 3302, 3878, 1311, 7764, 6706, 6011, 5201, 2899, 5419, 2530, 5064, 881, 2561, 5906, 4690, 4501,
                9154, 914, 3197, 6161, 3912, 3189, 2632, 2991, 8303, 4622, 5320, 2591, 1009, 4670, 7358,
            ],
            () => e((e.s = 98640)),
        ),
            (_N_E = e.O());
    },
]);
