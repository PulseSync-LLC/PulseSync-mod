(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2626],
    {
        1583: (e) => {
            e.exports = {
                content: 'LandingPage_content__ovHlJ',
                root: 'LandingPage_root__B2lPp',
                header: 'LandingPage_header__TiraG',
                title: 'LandingPage_title__gsIx4',
                footer: 'LandingPage_footer__K9y8K',
                error: 'LandingPage_error__mEsH2',
            };
        },
        9939: (e, t, n) => {
            'use strict';
            n.d(t, { M: () => r.NotFound });
            var r = n(91455);
        },
        10076: (e, t, n) => {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'default', {
                    enumerable: !0,
                    get: function () {
                        return a;
                    },
                });
            let r = n(36283)._(n(23772));
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
        23772: (e, t, n) => {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'default', {
                    enumerable: !0,
                    get: function () {
                        return l;
                    },
                });
            let r = n(62936),
                a = n(44020),
                o = n(24571);
            function i(e) {
                return { default: e && 'default' in e ? e.default : e };
            }
            n(46950);
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
        24571: (e, t, n) => {
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
                n(71279);
        },
        30182: (e, t, n) => {
            Promise.resolve().then(n.bind(n, 52848));
        },
        36118: (e, t, n) => {
            'use strict';
            n.d(t, { SomethingWentWrong: () => h });
            var r = n(62936),
                a = n(79950),
                o = n(19718),
                i = n(44020),
                s = n(47480),
                l = n(26731),
                d = n(5099),
                c = n(85742),
                u = n(20418),
                m = n(42561),
                _ = n(85906),
                g = n(52166),
                f = n.n(g);
            let h = (0, o.PA)((e) => {
                let { className: t, withBackwardControl: n = !0 } = e,
                    { formatMessage: o } = (0, s.A)(),
                    g = o({ id: 'error-messages.something-went-wrong' });
                (0, m.CgZ)(g);
                let { sendRefreshEvent: h } = (0, m.cYT)(),
                    p = (0, i.useCallback)(() => {
                        h(), (window.location.href = m.Zyd.main.href);
                    }, [h]),
                    { contentRef: x } = (0, m.gKY)();
                return (0, r.jsxs)('div', {
                    className: (0, a.$)(f().root, t),
                    children: [
                        n &&
                            (0, r.jsx)(_.Lh, {
                                withBackwardFallback: '/',
                                className: (0, a.$)(f().navigation, { [f().navigation_desktop]: !x }),
                                withForwardControl: !1,
                            }),
                        (0, r.jsxs)('div', {
                            className: (0, a.$)(f().content, { [f().content_shrink]: !n }),
                            children: [
                                (0, r.jsx)(c.Icon, { className: f().icon, variant: 'attention', size: 'xxl' }),
                                (0, r.jsx)(u.Heading, { className: (0, a.$)(f().title, f().important), variant: 'h3', size: 'xs', children: g }),
                                (0, r.jsxs)(u.Caption, {
                                    className: (0, a.$)(f().text, f().important),
                                    variant: 'span',
                                    type: 'text',
                                    size: 'l',
                                    weight: 'normal',
                                    children: [!1, (0, r.jsx)(l.A, { id: 'page-error.try-to-restart-app' })],
                                }),
                                (0, r.jsx)(d.$, {
                                    onClick: p,
                                    className: f().button,
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
        36179: (e, t, n) => {
            'use strict';
            n.d(t, { XU: () => u });
            var r,
                a,
                o = n(62986),
                i = n(44020),
                s = n(47480);
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
        45701: (e, t, n) => {
            'use strict';
            n.d(t, { LandingPage: () => h });
            var r = n(62936),
                a = n(19718),
                o = n(44020),
                i = n(8669),
                s = n(14501),
                l = n(20418),
                d = n(22991),
                c = n(65438),
                u = n(92229),
                m = n(42561),
                _ = n(85906),
                g = n(1583),
                f = n.n(g);
            let h = (0, a.PA)((e) => {
                let { skeleton: t } = e,
                    { landing: n } = (0, m.Pjs)(),
                    a = (0, m.W6M)(),
                    { contentScrollRef: g, setContentScrollRef: h } = (0, m.gKY)();
                if (
                    ((0, o.useEffect)(() => () => n.reset(), [n]),
                    (0, m.Jzs)(n.isResolved),
                    n.isNeededToLoad && (0, o.use)(n.getSkeleton({ id: t, showWizard: !1 }, { preloadBlocksCount: 2 })),
                    n.isRejected)
                )
                    return (0, r.jsx)(c.w, {});
                let p = !(0, m.hLs)(n.id) && a.canBack;
                return (0, r.jsx)(m.nVz, {
                    pageId: m._Q$.LANDING,
                    children: (0, r.jsx)(m.lSq, {
                        skeleton: t,
                        children: (0, r.jsx)(u.hO, {
                            scrollElement: g,
                            headerThreshold: 134,
                            children: (0, r.jsxs)(s.N, {
                                className: f().root,
                                containerClassName: f().content,
                                ref: h,
                                ...(0, i.Am)(i.Xk.landing.LANDING_PAGE),
                                children: [
                                    (0, r.jsxs)('div', {
                                        className: f().header,
                                        children: [
                                            p && (0, r.jsx)(_.Lh, { withForwardControl: !1, withBackwardControl: p }),
                                            (0, r.jsx)(l.Heading, {
                                                variant: 'h1',
                                                weight: 'bold',
                                                size: 'xl',
                                                className: f().title,
                                                ...(0, i.Am)(i.Xk.landing.LANDING_PAGE_HEADER),
                                                children: n.title,
                                            }),
                                        ],
                                    }),
                                    (0, r.jsx)('div', {
                                        className: f().landing,
                                        children: (0, r.jsx)(d.EA, { landing: n, errorComponent: (0, r.jsx)(c.w, { className: f().error, withBackwardControl: !1 }) }),
                                    }),
                                    (0, r.jsx)(_.A, { children: (0, r.jsx)(_.wi, { className: f().footer }) }),
                                ],
                            }),
                        }),
                    }),
                });
            });
        },
        46950: (e, t, n) => {
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
                n(62936),
                n(2933),
                n(34397),
                n(5300);
        },
        49351: (e, t, n) => {
            'use strict';
            n.d(t, { default: () => a.a });
            var r = n(10076),
                a = n.n(r);
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
        52848: (e, t, n) => {
            'use strict';
            n.r(t), n.d(t, { default: () => i });
            var r = n(62936),
                a = n(69526);
            n(70237);
            var o = n(45701);
            let i = () => {
                let e = (0, a.useSearchParams)(),
                    t = e.get('skeleton');
                return t || (0, a.notFound)(), (0, r.jsx)(o.LandingPage, { skeleton: t }, e.toString());
            };
        },
        57249: (e, t, n) => {
            'use strict';
            e.exports = n.p + 'static/media/dotlottie-player.98f80c6ff3eca5ba.wasm';
        },
        65438: (e, t, n) => {
            'use strict';
            n.d(t, { w: () => r.SomethingWentWrong });
            var r = n(36118);
        },
        70237: (e, t, n) => {
            'use strict';
            n.d(t, { LandingNotFoundPage: () => l });
            var r = n(62936),
                a = n(19718),
                o = n(44020),
                i = n(9939),
                s = n(42561);
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
        88933: (e) => {
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
        91455: (e, t, n) => {
            'use strict';
            n.d(t, { NotFound: () => f });
            var r = n(62936),
                a = n(79950),
                o = n(19718),
                i = n(26731),
                s = n(5099),
                l = n(85742),
                d = n(20418),
                c = n(42561),
                u = n(85906),
                m = n(44020),
                _ = n(88933),
                g = n.n(_);
            let f = (0, o.PA)((e) => {
                let { className: t, title: n, description: o, iconVariant: _ = 'musicLogo', iconClassName: f, iconSize: h } = e,
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
                        className: (0, a.$)(g().root, { [g().root_desktop]: !p }, t),
                        children: [
                            (0, r.jsx)(u.Lh, { withBackwardFallback: '/', className: g().navigation, withForwardControl: !1 }),
                            (0, r.jsxs)('div', {
                                className: g().content,
                                children: [
                                    (0, r.jsx)(l.Icon, { className: (0, a.$)(g().icon, f), variant: _, size: h }),
                                    (0, r.jsx)(d.Heading, {
                                        className: (0, a.$)(g().title, g().important),
                                        variant: 'h3',
                                        size: 'xs',
                                        children: n || (0, r.jsx)(i.A, { id: 'page-error.page-does-not-exist' }),
                                    }),
                                    (0, r.jsx)(d.Caption, {
                                        className: (0, a.$)(g().text, g().important),
                                        variant: 'span',
                                        type: 'text',
                                        size: 'l',
                                        weight: 'normal',
                                        children: o || (0, r.jsx)(i.A, { id: 'page-error.page-does-not-exist-description' }),
                                    }),
                                    (0, r.jsx)(s.$, {
                                        onClick: N,
                                        className: g().button,
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
    },
    (e) => {
        e.O(
            0,
            [
                85, 260, 3196, 403, 1970, 2537, 3789, 612, 5721, 2670, 7808, 1311, 7764, 6706, 6011, 5201, 2899, 5419, 2530, 5064, 2561, 5906, 4690, 4501, 9154, 914,
                3197, 6161, 3912, 3189, 2632, 2991, 1009, 4670, 7358,
            ],
            () => e((e.s = 30182)),
        ),
            (_N_E = e.O());
    },
]);
