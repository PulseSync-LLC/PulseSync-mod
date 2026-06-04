(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9017],
    {
        12119: (t, e, n) => {
            'use strict';
            n.d(e, { NotFound: () => p });
            var r = n(32290),
                o = n(63618),
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
                    (0, r.jsxs)('div', {
                        className: (0, o.$)(f().root, { [f().root_desktop]: !h }, e),
                        children: [
                            (0, r.jsx)(c.Lh, { withBackwardFallback: '/', className: f().navigation, withForwardControl: !1 }),
                            (0, r.jsxs)('div', {
                                className: f().content,
                                children: [
                                    (0, r.jsx)(l.Icon, { className: (0, o.$)(f().icon, p), variant: _, size: g }),
                                    (0, r.jsx)(d.Heading, {
                                        className: (0, o.$)(f().title, f().important),
                                        variant: 'h3',
                                        size: 'xs',
                                        children: n || (0, r.jsx)(i.A, { id: 'page-error.page-does-not-exist' }),
                                    }),
                                    (0, r.jsx)(d.Caption, {
                                        className: (0, o.$)(f().text, f().important),
                                        variant: 'span',
                                        type: 'text',
                                        size: 'l',
                                        weight: 'normal',
                                        children: a || (0, r.jsx)(i.A, { id: 'page-error.page-does-not-exist-description' }),
                                    }),
                                    (0, r.jsx)(s.$, {
                                        onClick: v,
                                        className: f().button,
                                        role: 'link',
                                        color: 'secondary',
                                        size: 'l',
                                        radius: 'xxxl',
                                        children: (0, r.jsx)(d.Caption, {
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'm',
                                            children: (0, r.jsx)(i.A, { id: 'navigation.page-main' }),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    })
                );
            });
        },
        16051: (t, e, n) => {
            'use strict';
            n.r(e), n.d(e, { default: () => i });
            var r = n(32290),
                o = n(21916),
                a = n(75542);
            let i = () => {
                let t = (0, o.useSearchParams)().get('categoryId');
                return t || (0, o.notFound)(), (0, r.jsx)(a.bB, { categoryId: t });
            };
        },
        27775: (t, e, n) => {
            Promise.resolve().then(n.bind(n, 16051));
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
            n.d(e, { w: () => r.SomethingWentWrong });
            var r = n(60194);
        },
        46456: (t, e, n) => {
            'use strict';
            function r(t) {
                let { moduleIds: e } = t;
                return null;
            }
            Object.defineProperty(e, '__esModule', { value: !0 }),
                Object.defineProperty(e, 'PreloadChunks', {
                    enumerable: !0,
                    get: function () {
                        return r;
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
        60194: (t, e, n) => {
            'use strict';
            n.d(e, { SomethingWentWrong: () => g });
            var r = n(32290),
                o = n(63618),
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
                return (0, r.jsxs)('div', {
                    className: (0, o.$)(p().root, e),
                    children: [
                        n &&
                            (0, r.jsx)(_.Lh, {
                                withBackwardFallback: '/',
                                className: (0, o.$)(p().navigation, { [p().navigation_desktop]: !x }),
                                withForwardControl: !1,
                            }),
                        (0, r.jsxs)('div', {
                            className: (0, o.$)(p().content, { [p().content_shrink]: !n }),
                            children: [
                                (0, r.jsx)(u.Icon, { className: p().icon, variant: 'attention', size: 'xxl' }),
                                (0, r.jsx)(c.Heading, { className: (0, o.$)(p().title, p().important), variant: 'h3', size: 'xs', children: f }),
                                (0, r.jsxs)(c.Caption, {
                                    className: (0, o.$)(p().text, p().important),
                                    variant: 'span',
                                    type: 'text',
                                    size: 'l',
                                    weight: 'normal',
                                    children: [!1, (0, r.jsx)(l.A, { id: 'page-error.try-to-restart-app' })],
                                }),
                                (0, r.jsx)(d.$, {
                                    onClick: h,
                                    className: p().button,
                                    role: 'link',
                                    color: 'secondary',
                                    size: 'l',
                                    radius: 'xxxl',
                                    children: (0, r.jsxs)(c.Caption, {
                                        type: 'controls',
                                        variant: 'span',
                                        size: 'm',
                                        children: [!1, (0, r.jsx)(l.A, { id: 'page-error.restart-app-button' })],
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
            function r(t) {
                let { reason: e, children: n } = t;
                return n;
            }
            Object.defineProperty(e, '__esModule', { value: !0 }),
                Object.defineProperty(e, 'BailoutToCSR', {
                    enumerable: !0,
                    get: function () {
                        return r;
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
            let r = n(32290),
                o = n(55178),
                a = n(63397);
            function i(t) {
                return { default: t && 'default' in t ? t.default : t };
            }
            n(46456);
            let s = { loader: () => Promise.resolve(i(() => null)), loading: null, ssr: !0 },
                l = function (t) {
                    let e = { ...s, ...t },
                        n = (0, o.lazy)(() => e.loader().then(i)),
                        l = e.loading;
                    function d(t) {
                        let i = l ? (0, r.jsx)(l, { isLoading: !0, pastDelay: !0, error: null }) : null,
                            s = !e.ssr || !!e.loading,
                            d = s ? o.Suspense : o.Fragment,
                            u = e.ssr
                                ? (0, r.jsxs)(r.Fragment, { children: [null, (0, r.jsx)(n, { ...t })] })
                                : (0, r.jsx)(a.BailoutToCSR, { reason: 'next/dynamic', children: (0, r.jsx)(n, { ...t }) });
                        return (0, r.jsx)(d, { ...(s ? { fallback: i } : {}), children: u });
                    }
                    return (d.displayName = 'LoadableComponent'), d;
                };
        },
        65493: (t, e, n) => {
            'use strict';
            n.d(e, { default: () => o.a });
            var r = n(95574),
                o = n.n(r);
        },
        80719: (t, e, n) => {
            'use strict';
            n.d(e, { M: () => r.NotFound });
            var r = n(12119);
        },
        81354: (t, e, n) => {
            'use strict';
            n.d(e, { XU: () => c });
            var r,
                o,
                a = n(30782),
                i = n(55178),
                s = n(60900);
            !(function (t) {
                (t.formatDate = 'FormattedDate'),
                    (t.formatTime = 'FormattedTime'),
                    (t.formatNumber = 'FormattedNumber'),
                    (t.formatList = 'FormattedList'),
                    (t.formatDisplayName = 'FormattedDisplayName');
            })(r || (r = {})),
                (function (t) {
                    (t.formatDate = 'FormattedDateParts'),
                        (t.formatTime = 'FormattedTimeParts'),
                        (t.formatNumber = 'FormattedNumberParts'),
                        (t.formatList = 'FormattedListParts');
                })(o || (o = {}));
            var l = function (t) {
                var e = (0, s.A)(),
                    n = t.value,
                    r = t.children,
                    o = (0, a.__rest)(t, ['value', 'children']);
                return r(e.formatNumberToParts(n, o));
            };
            function d(t) {
                var e = function (e) {
                    var n = (0, s.A)(),
                        r = e.value,
                        o = e.children,
                        i = (0, a.__rest)(e, ['value', 'children']),
                        l = 'string' == typeof r ? new Date(r || 0) : r;
                    return o('formatDate' === t ? n.formatDateToParts(l, i) : n.formatTimeToParts(l, i));
                };
                return (e.displayName = o[t]), e;
            }
            function u(t) {
                var e = function (e) {
                    var n = (0, s.A)(),
                        r = e.value,
                        o = e.children,
                        l = (0, a.__rest)(e, ['value', 'children']),
                        d = n[t](r, l);
                    if ('function' == typeof o) return o(d);
                    var u = n.textComponent || i.Fragment;
                    return i.createElement(u, null, d);
                };
                return (e.displayName = r[t]), e;
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
                        return o;
                    },
                });
            let r = n(33399)._(n(64910));
            function o(t, e) {
                var n;
                let o = {};
                'function' == typeof t && (o.loader = t);
                let a = { ...o, ...e };
                return (0, r.default)({ ...a, modules: null == (n = a.loadableGenerated) ? void 0 : n.modules });
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
            () => t((t.s = 27775)),
        ),
            (_N_E = t.O());
    },
]);
