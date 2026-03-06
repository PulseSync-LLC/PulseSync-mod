(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8781],
    {
        5807: (e, t, n) => {
            'use strict';
            n.d(t, { LandingPage: () => h });
            var r = n(54486),
                a = n(28303),
                o = n(61910),
                i = n(31500),
                s = n(56231),
                l = n(97800),
                d = n(6664),
                c = n(82644),
                u = n(33276),
                m = n(83252),
                _ = n(80585),
                f = n(58141),
                g = n.n(f);
            let h = (0, a.PA)((e) => {
                let { skeleton: t } = e,
                    { landing: n } = (0, m.Pjs)(),
                    a = (0, m.W6M)(),
                    { contentScrollRef: f, setContentScrollRef: h } = (0, m.gKY)();
                return ((0, o.useEffect)(() => () => n.reset(), [n]),
                (0, m.Jzs)(n.isResolved),
                n.isNeededToLoad && (0, o.use)(n.getSkeleton({ id: t, showWizard: !1 }, { preloadBlocksCount: 2 })),
                n.isRejected)
                    ? (0, r.jsx)(c.w, {})
                    : (0, r.jsx)(m.nVz, {
                          pageId: m._Q$.LANDING,
                          children: (0, r.jsx)(m.lSq, {
                              skeleton: t,
                              children: (0, r.jsx)(u.hO, {
                                  scrollElement: f,
                                  headerThreshold: 134,
                                  children: (0, r.jsxs)(s.N, {
                                      className: g().root,
                                      containerClassName: g().content,
                                      ref: h,
                                      ...(0, i.Am)(i.Xk.landing.LANDING_PAGE),
                                      children: [
                                          (0, r.jsxs)('div', {
                                              className: g().header,
                                              children: [
                                                  a.canBack && (0, r.jsx)(_.Lh, { withForwardControl: !1, withBackwardControl: a.canBack }),
                                                  (0, r.jsx)(l.Heading, {
                                                      variant: 'h1',
                                                      weight: 'bold',
                                                      size: 'xl',
                                                      className: g().title,
                                                      ...(0, i.Am)(i.Xk.landing.LANDING_PAGE_HEADER),
                                                      children: n.title,
                                                  }),
                                              ],
                                          }),
                                          (0, r.jsx)('div', {
                                              className: g().landing,
                                              children: (0, r.jsx)(d.EA, {
                                                  landing: n,
                                                  errorComponent: (0, r.jsx)(c.w, { className: g().error, withBackwardControl: !1 }),
                                              }),
                                          }),
                                          (0, r.jsx)(_.A, { children: (0, r.jsx)(_.wi, { className: g().footer }) }),
                                      ],
                                  }),
                              }),
                          }),
                      });
            });
        },
        27895: (e, t, n) => {
            'use strict';
            n.d(t, { LandingNotFoundPage: () => l });
            var r = n(54486),
                a = n(28303),
                o = n(61910),
                i = n(42421),
                s = n(83252);
            let l = (0, a.PA)(() => {
                let { landing: e } = (0, s.Pjs)();
                return (
                    (0, o.useEffect)(
                        () => () => {
                            e.reset();
                        },
                        [e],
                    ),
                    (0, r.jsx)(i.M, {})
                );
            });
        },
        31622: (e, t, n) => {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'default', {
                    enumerable: !0,
                    get: function () {
                        return l;
                    },
                });
            let r = n(54486),
                a = n(61910),
                o = n(91165);
            function i(e) {
                return { default: e && 'default' in e ? e.default : e };
            }
            n(98944);
            let s = { loader: () => Promise.resolve(i(() => null)), loading: null, ssr: !0 },
                l = function (e) {
                    let t = { ...s, ...e },
                        n = (0, a.lazy)(() => t.loader().then(i)),
                        l = t.loading;
                    function d(e) {
                        let i = l ? (0, r.jsx)(l, { isLoading: !0, pastDelay: !0, error: null }) : null,
                            s = !t.ssr || !!t.loading,
                            d = s ? a.Suspense : a.Fragment,
                            c = t.ssr
                                ? (0, r.jsxs)(r.Fragment, { children: [null, (0, r.jsx)(n, { ...e })] })
                                : (0, r.jsx)(o.BailoutToCSR, { reason: 'next/dynamic', children: (0, r.jsx)(n, { ...e }) });
                        return (0, r.jsx)(d, { ...(s ? { fallback: i } : {}), children: c });
                    }
                    return (d.displayName = 'LoadableComponent'), d;
                };
        },
        36446: (e, t, n) => {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'default', {
                    enumerable: !0,
                    get: function () {
                        return a;
                    },
                });
            let r = n(45221)._(n(31622));
            function a(e, t) {
                var n;
                let a = {};
                'function' == typeof e && (a.loader = e);
                let o = { ...a, ...t };
                return (0, r.default)({ ...o, modules: null == (n = o.loadableGenerated) ? void 0 : n.modules });
            }
            ('function' == typeof t.default || ('object' == typeof t.default && null !== t.default)) &&
                void 0 === t.default.__esModule &&
                (Object.defineProperty(t.default, '__esModule', { value: !0 }), Object.assign(t.default, t), (e.exports = t.default));
        },
        42421: (e, t, n) => {
            'use strict';
            n.d(t, { M: () => r.NotFound });
            var r = n(65034);
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
        57249: (e, t, n) => {
            'use strict';
            e.exports = n.p + 'static/media/dotlottie-player.98f80c6ff3eca5ba.wasm';
        },
        58141: (e) => {
            e.exports = {
                content: 'LandingPage_content__ovHlJ',
                root: 'LandingPage_root__B2lPp',
                header: 'LandingPage_header__TiraG',
                title: 'LandingPage_title__gsIx4',
                footer: 'LandingPage_footer__K9y8K',
                error: 'LandingPage_error__mEsH2',
            };
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
        65034: (e, t, n) => {
            'use strict';
            n.d(t, { NotFound: () => g });
            var r = n(54486),
                a = n(50420),
                o = n(28303),
                i = n(47713),
                s = n(77881),
                l = n(5956),
                d = n(97800),
                c = n(83252),
                u = n(80585),
                m = n(61910),
                _ = n(46215),
                f = n.n(_);
            let g = (0, o.PA)((e) => {
                let { className: t, title: n, description: o, iconVariant: _ = 'musicLogo', iconClassName: g, iconSize: h } = e,
                    { contentRef: p } = (0, c.gKY)(),
                    x = (0, c.ZpR)(c.Zyd.main.href);
                (0, c.LZB)();
                let { handleNavigateToMain: N } = (0, c.D5F)(x);
                return (
                    (0, c.NBO)(!0),
                    !(function () {
                        let { location: e } = (0, c.Pjs)();
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
                    (0, r.jsxs)('div', {
                        className: (0, a.$)(f().root, { [f().root_desktop]: !p }, t),
                        children: [
                            (0, r.jsx)(u.Lh, { withBackwardFallback: '/', className: f().navigation, withForwardControl: !1 }),
                            (0, r.jsxs)('div', {
                                className: f().content,
                                children: [
                                    (0, r.jsx)(l.Icon, { className: (0, a.$)(f().icon, g), variant: _, size: h }),
                                    (0, r.jsx)(d.Heading, {
                                        className: (0, a.$)(f().title, f().important),
                                        variant: 'h3',
                                        size: 'xs',
                                        children: n || (0, r.jsx)(i.A, { id: 'page-error.page-does-not-exist' }),
                                    }),
                                    (0, r.jsx)(d.Caption, {
                                        className: (0, a.$)(f().text, f().important),
                                        variant: 'span',
                                        type: 'text',
                                        size: 'l',
                                        weight: 'normal',
                                        children: o || (0, r.jsx)(i.A, { id: 'page-error.page-does-not-exist-description' }),
                                    }),
                                    (0, r.jsx)(s.$, {
                                        onClick: N,
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
        75312: (e, t, n) => {
            'use strict';
            n.d(t, { SomethingWentWrong: () => h });
            var r = n(54486),
                a = n(50420),
                o = n(28303),
                i = n(61910),
                s = n(43426),
                l = n(47713),
                d = n(77881),
                c = n(5956),
                u = n(97800),
                m = n(83252),
                _ = n(80585),
                f = n(63708),
                g = n.n(f);
            let h = (0, o.PA)((e) => {
                let { className: t, withBackwardControl: n = !0 } = e,
                    { formatMessage: o } = (0, s.A)(),
                    f = o({ id: 'error-messages.something-went-wrong' });
                (0, m.CgZ)(f);
                let { sendRefreshEvent: h } = (0, m.cYT)(),
                    p = (0, i.useCallback)(() => {
                        h(), (window.location.href = m.Zyd.main.href);
                    }, [h]),
                    { contentRef: x } = (0, m.gKY)();
                return (0, r.jsxs)('div', {
                    className: (0, a.$)(g().root, t),
                    children: [
                        n &&
                            (0, r.jsx)(_.Lh, {
                                withBackwardFallback: '/',
                                className: (0, a.$)(g().navigation, { [g().navigation_desktop]: !x }),
                                withForwardControl: !1,
                            }),
                        (0, r.jsxs)('div', {
                            className: (0, a.$)(g().content, { [g().content_shrink]: !n }),
                            children: [
                                (0, r.jsx)(c.Icon, { className: g().icon, variant: 'attention', size: 'xxl' }),
                                (0, r.jsx)(u.Heading, { className: (0, a.$)(g().title, g().important), variant: 'h3', size: 'xs', children: f }),
                                (0, r.jsxs)(u.Caption, {
                                    className: (0, a.$)(g().text, g().important),
                                    variant: 'span',
                                    type: 'text',
                                    size: 'l',
                                    weight: 'normal',
                                    children: [!1, (0, r.jsx)(l.A, { id: 'page-error.try-to-restart-app' })],
                                }),
                                (0, r.jsx)(d.$, {
                                    onClick: p,
                                    className: g().button,
                                    role: 'link',
                                    color: 'secondary',
                                    size: 'l',
                                    radius: 'xxxl',
                                    children: (0, r.jsxs)(u.Caption, {
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
        82644: (e, t, n) => {
            'use strict';
            n.d(t, { w: () => r.SomethingWentWrong });
            var r = n(75312);
        },
        83645: (e, t, n) => {
            'use strict';
            n.d(t, { default: () => a.a });
            var r = n(36446),
                a = n.n(r);
        },
        86701: (e, t, n) => {
            Promise.resolve().then(n.bind(n, 27895)), Promise.resolve().then(n.bind(n, 5807));
        },
        91165: (e, t, n) => {
            'use strict';
            function r(e) {
                let { reason: t, children: n } = e;
                return n;
            }
            Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'BailoutToCSR', {
                    enumerable: !0,
                    get: function () {
                        return r;
                    },
                }),
                n(39201);
        },
        97151: (e, t, n) => {
            'use strict';
            n.d(t, { XU: () => u });
            var r,
                a,
                o = n(41500),
                i = n(61910),
                s = n(43426);
            !(function (e) {
                (e.formatDate = 'FormattedDate'),
                    (e.formatTime = 'FormattedTime'),
                    (e.formatNumber = 'FormattedNumber'),
                    (e.formatList = 'FormattedList'),
                    (e.formatDisplayName = 'FormattedDisplayName');
            })(r || (r = {})),
                (function (e) {
                    (e.formatDate = 'FormattedDateParts'),
                        (e.formatTime = 'FormattedTimeParts'),
                        (e.formatNumber = 'FormattedNumberParts'),
                        (e.formatList = 'FormattedListParts');
                })(a || (a = {}));
            var l = function (e) {
                var t = (0, s.A)(),
                    n = e.value,
                    r = e.children,
                    a = (0, o.__rest)(e, ['value', 'children']);
                return r(t.formatNumberToParts(n, a));
            };
            function d(e) {
                var t = function (t) {
                    var n = (0, s.A)(),
                        r = t.value,
                        a = t.children,
                        i = (0, o.__rest)(t, ['value', 'children']),
                        l = 'string' == typeof r ? new Date(r || 0) : r;
                    return a('formatDate' === e ? n.formatDateToParts(l, i) : n.formatTimeToParts(l, i));
                };
                return (t.displayName = a[e]), t;
            }
            function c(e) {
                var t = function (t) {
                    var n = (0, s.A)(),
                        r = t.value,
                        a = t.children,
                        l = (0, o.__rest)(t, ['value', 'children']),
                        d = n[e](r, l);
                    if ('function' == typeof a) return a(d);
                    var c = n.textComponent || i.Fragment;
                    return i.createElement(c, null, d);
                };
                return (t.displayName = r[e]), t;
            }
            (l.displayName = 'FormattedNumberParts'), (l.displayName = 'FormattedNumberParts');
            var u = c('formatDate');
            c('formatTime'), c('formatNumber'), c('formatList'), c('formatDisplayName'), d('formatDate'), d('formatTime');
        },
        98944: (e, t, n) => {
            'use strict';
            function r(e) {
                let { moduleIds: t } = e;
                return null;
            }
            Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'PreloadChunks', {
                    enumerable: !0,
                    get: function () {
                        return r;
                    },
                }),
                n(54486),
                n(92803),
                n(14367),
                n(32038);
        },
    },
    (e) => {
        e.O(
            0,
            [
                6041, 9834, 5355, 1023, 1776, 2398, 8748, 6552, 4915, 2186, 2036, 484, 1311, 7764, 6706, 7724, 5201, 5148, 3005, 3916, 4885, 3252, 585, 6433, 3286, 156,
                6231, 4826, 1365, 3211, 7858, 5570, 6664, 5843, 3290, 7358,
            ],
            () => e((e.s = 86701)),
        ),
            (_N_E = e.O());
    },
]);
