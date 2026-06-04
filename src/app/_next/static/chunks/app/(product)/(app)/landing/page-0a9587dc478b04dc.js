(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2626],
    {
        12119: (e, t, n) => {
            'use strict';
            n.d(t, { NotFound: () => f });
            var r = n(32290),
                a = n(63618),
                o = n(96103),
                i = n(39407),
                s = n(63423),
                l = n(82586),
                d = n(71926),
                c = n(49574),
                u = n(44574),
                m = n(55178),
                _ = n(55365),
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
        12719: (e) => {
            e.exports = {
                content: 'LandingPage_content__ovHlJ',
                root: 'LandingPage_root__B2lPp',
                header: 'LandingPage_header__TiraG',
                title: 'LandingPage_title__gsIx4',
                footer: 'LandingPage_footer__K9y8K',
                error: 'LandingPage_error__mEsH2',
            };
        },
        23369: (e, t, n) => {
            'use strict';
            n.d(t, { LandingPage: () => h });
            var r = n(32290),
                a = n(96103),
                o = n(55178),
                i = n(59824),
                s = n(46049),
                l = n(71926),
                d = n(43557),
                c = n(32381),
                u = n(75645),
                m = n(49574),
                _ = n(44574),
                g = n(12719),
                f = n.n(g);
            let h = (0, a.PA)((e) => {
                let { skeleton: t } = e,
                    { landing: n, user: a } = (0, m.Pjs)(),
                    g = (0, m.W6M)(),
                    { contentScrollRef: h, setContentScrollRef: p } = (0, m.gKY)();
                if (
                    ((0, o.useEffect)(() => () => n.reset(), [n]),
                    (0, m.Jzs)(n.isResolved),
                    n.isNeededToLoad && (0, o.use)(n.getSkeleton({ id: t, showWizard: a.settings.showWizard }, { preloadBlocksCount: 2 })),
                    n.isRejected)
                )
                    return (0, r.jsx)(c.w, {});
                let x = !(0, m.hLs)(n.id) && g.canBack;
                return (0, r.jsx)(m.nVz, {
                    pageId: m._Q$.LANDING,
                    children: (0, r.jsx)(m.lSq, {
                        skeleton: t,
                        children: (0, r.jsx)(u.hO, {
                            scrollElement: h,
                            headerThreshold: 134,
                            children: (0, r.jsxs)(s.N, {
                                className: f().root,
                                containerClassName: f().content,
                                ref: p,
                                ...(0, i.Am)(i.Xk.landing.LANDING_PAGE),
                                children: [
                                    (0, r.jsxs)('div', {
                                        className: f().header,
                                        children: [
                                            x && (0, r.jsx)(_.Lh, { withForwardControl: !1, withBackwardControl: x }),
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
        30310: (e) => {
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
        32381: (e, t, n) => {
            'use strict';
            n.d(t, { w: () => r.SomethingWentWrong });
            var r = n(60194);
        },
        34513: (e, t, n) => {
            'use strict';
            n.d(t, { LandingNotFoundPage: () => l });
            var r = n(32290),
                a = n(96103),
                o = n(55178),
                i = n(80719),
                s = n(49574);
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
        46456: (e, t, n) => {
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
                n(32290),
                n(51767),
                n(40199),
                n(15406);
        },
        55365: (e) => {
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
        60194: (e, t, n) => {
            'use strict';
            n.d(t, { SomethingWentWrong: () => h });
            var r = n(32290),
                a = n(63618),
                o = n(96103),
                i = n(55178),
                s = n(60900),
                l = n(39407),
                d = n(63423),
                c = n(82586),
                u = n(71926),
                m = n(49574),
                _ = n(44574),
                g = n(30310),
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
        63397: (e, t, n) => {
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
                n(82105);
        },
        64910: (e, t, n) => {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'default', {
                    enumerable: !0,
                    get: function () {
                        return l;
                    },
                });
            let r = n(32290),
                a = n(55178),
                o = n(63397);
            function i(e) {
                return { default: e && 'default' in e ? e.default : e };
            }
            n(46456);
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
        65493: (e, t, n) => {
            'use strict';
            n.d(t, { default: () => a.a });
            var r = n(95574),
                a = n.n(r);
        },
        69334: (e, t, n) => {
            Promise.resolve().then(n.bind(n, 90830));
        },
        80719: (e, t, n) => {
            'use strict';
            n.d(t, { M: () => r.NotFound });
            var r = n(12119);
        },
        81354: (e, t, n) => {
            'use strict';
            n.d(t, { XU: () => u });
            var r,
                a,
                o = n(30782),
                i = n(55178),
                s = n(60900);
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
        90830: (e, t, n) => {
            'use strict';
            n.r(t), n.d(t, { default: () => i });
            var r = n(32290),
                a = n(21916);
            n(34513);
            var o = n(23369);
            let i = () => {
                let e = (0, a.useSearchParams)(),
                    t = e.get('skeleton');
                return t || (0, a.notFound)(), (0, r.jsx)(o.LandingPage, { skeleton: t }, e.toString());
            };
        },
        95574: (e, t, n) => {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'default', {
                    enumerable: !0,
                    get: function () {
                        return a;
                    },
                });
            let r = n(33399)._(n(64910));
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
    },
    (e) => {
        e.O(
            0,
            [
                1670, 3445, 9221, 9745, 4567, 4826, 7236, 6328, 5969, 4394, 6375, 8804, 1311, 7764, 6706, 1588, 5201, 3267, 9769, 4250, 7307, 9574, 4574, 5428, 6049,
                4089, 6486, 3317, 864, 3843, 112, 6043, 3557, 4220, 9562, 7358,
            ],
            () => e((e.s = 69334)),
        ),
            (_N_E = e.O());
    },
]);
