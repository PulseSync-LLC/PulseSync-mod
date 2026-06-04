(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1397],
    {
        7517: (t, e, n) => {
            Promise.resolve().then(n.bind(n, 58639));
        },
        12119: (t, e, n) => {
            'use strict';
            n.d(e, { NotFound: () => p });
            var o = n(32290),
                r = n(63618),
                a = n(96103),
                i = n(39407),
                s = n(63423),
                l = n(82586),
                d = n(71926),
                u = n(49574),
                c = n(44574),
                m = n(55178),
                _ = n(55365),
                f = n.n(_);
            let p = (0, a.PA)((t) => {
                let { className: e, title: n, description: a, iconVariant: _ = 'musicLogo', iconClassName: p, iconSize: g } = t,
                    { contentRef: h } = (0, u.gKY)(),
                    x = (0, u.ZpR)(u.Zyd.main.href);
                (0, u.LZB)();
                let { handleNavigateToMain: v } = (0, u.D5F)(x);
                return (
                    (0, u.NBO)(!0),
                    !(function () {
                        let { location: t } = (0, u.Pjs)();
                        (0, m.useEffect)(
                            () => (
                                t.setNotFound(!0),
                                () => {
                                    t.setNotFound(!1);
                                }
                            ),
                            [t],
                        );
                    })(),
                    (0, o.jsxs)('div', {
                        className: (0, r.$)(f().root, { [f().root_desktop]: !h }, e),
                        children: [
                            (0, o.jsx)(c.Lh, { withBackwardFallback: '/', className: f().navigation, withForwardControl: !1 }),
                            (0, o.jsxs)('div', {
                                className: f().content,
                                children: [
                                    (0, o.jsx)(l.Icon, { className: (0, r.$)(f().icon, p), variant: _, size: g }),
                                    (0, o.jsx)(d.Heading, {
                                        className: (0, r.$)(f().title, f().important),
                                        variant: 'h3',
                                        size: 'xs',
                                        children: n || (0, o.jsx)(i.A, { id: 'page-error.page-does-not-exist' }),
                                    }),
                                    (0, o.jsx)(d.Caption, {
                                        className: (0, r.$)(f().text, f().important),
                                        variant: 'span',
                                        type: 'text',
                                        size: 'l',
                                        weight: 'normal',
                                        children: a || (0, o.jsx)(i.A, { id: 'page-error.page-does-not-exist-description' }),
                                    }),
                                    (0, o.jsx)(s.$, {
                                        onClick: v,
                                        className: f().button,
                                        role: 'link',
                                        color: 'secondary',
                                        size: 'l',
                                        radius: 'xxxl',
                                        children: (0, o.jsx)(d.Caption, {
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'm',
                                            children: (0, o.jsx)(i.A, { id: 'navigation.page-main' }),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    })
                );
            });
        },
        30310: (t) => {
            t.exports = {
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
        32381: (t, e, n) => {
            'use strict';
            n.d(e, { w: () => o.SomethingWentWrong });
            var o = n(60194);
        },
        46456: (t, e, n) => {
            'use strict';
            function o(t) {
                let { moduleIds: e } = t;
                return null;
            }
            Object.defineProperty(e, '__esModule', { value: !0 }),
                Object.defineProperty(e, 'PreloadChunks', {
                    enumerable: !0,
                    get: function () {
                        return o;
                    },
                }),
                n(32290),
                n(51767),
                n(40199),
                n(15406);
        },
        55365: (t) => {
            t.exports = {
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
        57249: (t, e, n) => {
            'use strict';
            t.exports = n.p + 'static/media/dotlottie-player.98f80c6ff3eca5ba.wasm';
        },
        58639: (t, e, n) => {
            'use strict';
            n.r(e), n.d(e, { default: () => i });
            var o = n(32290),
                r = n(21916),
                a = n(75542);
            let i = () => {
                let t = (0, r.useSearchParams)().get('id');
                return t || (0, r.notFound)(), (0, o.jsx)(a.ol, { id: t });
            };
        },
        60194: (t, e, n) => {
            'use strict';
            n.d(e, { SomethingWentWrong: () => g });
            var o = n(32290),
                r = n(63618),
                a = n(96103),
                i = n(55178),
                s = n(60900),
                l = n(39407),
                d = n(63423),
                u = n(82586),
                c = n(71926),
                m = n(49574),
                _ = n(44574),
                f = n(30310),
                p = n.n(f);
            let g = (0, a.PA)((t) => {
                let { className: e, withBackwardControl: n = !0 } = t,
                    { formatMessage: a } = (0, s.A)(),
                    f = a({ id: 'error-messages.something-went-wrong' });
                (0, m.CgZ)(f);
                let { sendRefreshEvent: g } = (0, m.cYT)(),
                    h = (0, i.useCallback)(() => {
                        g(), (window.location.href = m.Zyd.main.href);
                    }, [g]),
                    { contentRef: x } = (0, m.gKY)();
                return (0, o.jsxs)('div', {
                    className: (0, r.$)(p().root, e),
                    children: [
                        n &&
                            (0, o.jsx)(_.Lh, {
                                withBackwardFallback: '/',
                                className: (0, r.$)(p().navigation, { [p().navigation_desktop]: !x }),
                                withForwardControl: !1,
                            }),
                        (0, o.jsxs)('div', {
                            className: (0, r.$)(p().content, { [p().content_shrink]: !n }),
                            children: [
                                (0, o.jsx)(u.Icon, { className: p().icon, variant: 'attention', size: 'xxl' }),
                                (0, o.jsx)(c.Heading, { className: (0, r.$)(p().title, p().important), variant: 'h3', size: 'xs', children: f }),
                                (0, o.jsxs)(c.Caption, {
                                    className: (0, r.$)(p().text, p().important),
                                    variant: 'span',
                                    type: 'text',
                                    size: 'l',
                                    weight: 'normal',
                                    children: [!1, (0, o.jsx)(l.A, { id: 'page-error.try-to-restart-app' })],
                                }),
                                (0, o.jsx)(d.$, {
                                    onClick: h,
                                    className: p().button,
                                    role: 'link',
                                    color: 'secondary',
                                    size: 'l',
                                    radius: 'xxxl',
                                    children: (0, o.jsxs)(c.Caption, {
                                        type: 'controls',
                                        variant: 'span',
                                        size: 'm',
                                        children: [!1, (0, o.jsx)(l.A, { id: 'page-error.restart-app-button' })],
                                    }),
                                }),
                            ],
                        }),
                    ],
                });
            });
        },
        63397: (t, e, n) => {
            'use strict';
            function o(t) {
                let { reason: e, children: n } = t;
                return n;
            }
            Object.defineProperty(e, '__esModule', { value: !0 }),
                Object.defineProperty(e, 'BailoutToCSR', {
                    enumerable: !0,
                    get: function () {
                        return o;
                    },
                }),
                n(82105);
        },
        64910: (t, e, n) => {
            'use strict';
            Object.defineProperty(e, '__esModule', { value: !0 }),
                Object.defineProperty(e, 'default', {
                    enumerable: !0,
                    get: function () {
                        return l;
                    },
                });
            let o = n(32290),
                r = n(55178),
                a = n(63397);
            function i(t) {
                return { default: t && 'default' in t ? t.default : t };
            }
            n(46456);
            let s = { loader: () => Promise.resolve(i(() => null)), loading: null, ssr: !0 },
                l = function (t) {
                    let e = { ...s, ...t },
                        n = (0, r.lazy)(() => e.loader().then(i)),
                        l = e.loading;
                    function d(t) {
                        let i = l ? (0, o.jsx)(l, { isLoading: !0, pastDelay: !0, error: null }) : null,
                            s = !e.ssr || !!e.loading,
                            d = s ? r.Suspense : r.Fragment,
                            u = e.ssr
                                ? (0, o.jsxs)(o.Fragment, { children: [null, (0, o.jsx)(n, { ...t })] })
                                : (0, o.jsx)(a.BailoutToCSR, { reason: 'next/dynamic', children: (0, o.jsx)(n, { ...t }) });
                        return (0, o.jsx)(d, { ...(s ? { fallback: i } : {}), children: u });
                    }
                    return (d.displayName = 'LoadableComponent'), d;
                };
        },
        65493: (t, e, n) => {
            'use strict';
            n.d(e, { default: () => r.a });
            var o = n(95574),
                r = n.n(o);
        },
        80719: (t, e, n) => {
            'use strict';
            n.d(e, { M: () => o.NotFound });
            var o = n(12119);
        },
        81354: (t, e, n) => {
            'use strict';
            n.d(e, { XU: () => c });
            var o,
                r,
                a = n(30782),
                i = n(55178),
                s = n(60900);
            !(function (t) {
                (t.formatDate = 'FormattedDate'),
                    (t.formatTime = 'FormattedTime'),
                    (t.formatNumber = 'FormattedNumber'),
                    (t.formatList = 'FormattedList'),
                    (t.formatDisplayName = 'FormattedDisplayName');
            })(o || (o = {})),
                (function (t) {
                    (t.formatDate = 'FormattedDateParts'),
                        (t.formatTime = 'FormattedTimeParts'),
                        (t.formatNumber = 'FormattedNumberParts'),
                        (t.formatList = 'FormattedListParts');
                })(r || (r = {}));
            var l = function (t) {
                var e = (0, s.A)(),
                    n = t.value,
                    o = t.children,
                    r = (0, a.__rest)(t, ['value', 'children']);
                return o(e.formatNumberToParts(n, r));
            };
            function d(t) {
                var e = function (e) {
                    var n = (0, s.A)(),
                        o = e.value,
                        r = e.children,
                        i = (0, a.__rest)(e, ['value', 'children']),
                        l = 'string' == typeof o ? new Date(o || 0) : o;
                    return r('formatDate' === t ? n.formatDateToParts(l, i) : n.formatTimeToParts(l, i));
                };
                return (e.displayName = r[t]), e;
            }
            function u(t) {
                var e = function (e) {
                    var n = (0, s.A)(),
                        o = e.value,
                        r = e.children,
                        l = (0, a.__rest)(e, ['value', 'children']),
                        d = n[t](o, l);
                    if ('function' == typeof r) return r(d);
                    var u = n.textComponent || i.Fragment;
                    return i.createElement(u, null, d);
                };
                return (e.displayName = o[t]), e;
            }
            (l.displayName = 'FormattedNumberParts'), (l.displayName = 'FormattedNumberParts');
            var c = u('formatDate');
            u('formatTime'), u('formatNumber'), u('formatList'), u('formatDisplayName'), d('formatDate'), d('formatTime');
        },
        95574: (t, e, n) => {
            'use strict';
            Object.defineProperty(e, '__esModule', { value: !0 }),
                Object.defineProperty(e, 'default', {
                    enumerable: !0,
                    get: function () {
                        return r;
                    },
                });
            let o = n(33399)._(n(64910));
            function r(t, e) {
                var n;
                let r = {};
                'function' == typeof t && (r.loader = t);
                let a = { ...r, ...e };
                return (0, o.default)({ ...a, modules: null == (n = a.loadableGenerated) ? void 0 : n.modules });
            }
            ('function' == typeof e.default || ('object' == typeof e.default && null !== e.default)) &&
                void 0 === e.default.__esModule &&
                (Object.defineProperty(e.default, '__esModule', { value: !0 }), Object.assign(e.default, e), (t.exports = e.default));
        },
    },
    (t) => {
        t.O(
            0,
            [
                1670, 3445, 9221, 9745, 4567, 4826, 7236, 6328, 5969, 4394, 6375, 2449, 1311, 7764, 6706, 1588, 5201, 3267, 9769, 4250, 7307, 9574, 4574, 5428, 6049,
                4089, 6486, 3317, 864, 3843, 112, 6043, 3557, 5542, 4220, 9562, 7358,
            ],
            () => t((t.s = 7517)),
        ),
            (_N_E = t.O());
    },
]);
