(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2849],
    {
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
                        return o;
                    },
                });
            let r = n(36283)._(n(23772));
            function o(e, t) {
                var n;
                let o = {};
                'function' == typeof e && (o.loader = e);
                let a = { ...o, ...t };
                return (0, r.default)({ ...a, modules: null == (n = a.loadableGenerated) ? void 0 : n.modules });
            }
            ('function' == typeof t.default || ('object' == typeof t.default && null !== t.default)) &&
                void 0 === t.default.__esModule &&
                (Object.defineProperty(t.default, '__esModule', { value: !0 }), Object.assign(t.default, t), (e.exports = t.default));
        },
        16588: (e, t, n) => {
            'use strict';
            n.d(t, { f: () => y, _: () => s });
            var r = n(51606),
                o = n(16616),
                a = n(42561),
                i = n(54690);
            let s = r.gK
                .compose(r.gK.model('ConcertsDetailsPage', { concerts: r.gK.maybeNull(r.gK.array(o.aR)), title: r.gK.maybeNull(r.gK.string) }), i.XT, i.pl)
                .views((e) => ({
                    get isShimmerVisible() {
                        return e.isNeededToLoad || e.isLoading || e.isRejected;
                    },
                    get isShimmerActive() {
                        return e.isLoading;
                    },
                }))
                .actions((e) => ({
                    getData: (0, r.L3)(function* (t) {
                        let { type: n, id: i } = t,
                            { concertsResource: s, modelActionsLogger: l } = (0, r._$)(e);
                        if (!e.isLoading)
                            try {
                                e.loadingState = a.GuX.PENDING;
                                let { items: t, title: l } = yield s.getConcertsDetails({ type: n, id: i });
                                (e.concerts = (0, r.wg)(t.map((e) => (0, o.HN)(e)))), (e.title = null != l ? l : null), (e.loadingState = a.GuX.RESOLVE);
                            } catch (t) {
                                l.error(t), (e.loadingState = a.GuX.REJECT);
                            }
                    }),
                    reset() {
                        (e.loadingState = a.GuX.IDLE), (e.title = null), e.destroyItems([e.concerts]);
                    },
                }));
            var l = n(62936),
                c = n(19718),
                d = n(69526),
                u = n(44020),
                m = n(47480),
                _ = n(59935),
                g = n(56874),
                f = n(14501),
                p = n(20418),
                h = n(65438),
                x = n(92229),
                v = n(99041),
                N = n(85906),
                j = n(99012),
                b = n.n(j);
            let y = (0, c.PA)((e) => {
                let { type: t, id: n } = e,
                    r = (0, u.useId)(),
                    { concertsDetails: i, experiments: s } = (0, a.Pjs)(),
                    { formatMessage: c } = (0, m.A)(),
                    { contentScrollRef: j, setContentScrollRef: y } = (0, a.gKY)(),
                    C = (0, a.W6M)(),
                    [P, k] = (0, g.d)(),
                    F = (0, a.fBs)(),
                    w = (0, u.useRef)(!1),
                    W = s.checkExperiment(a.zal.WebNextConcertsIdentityEventType, 'on'),
                    S = (0, _.c)(() => {
                        var e;
                        return !i.isShimmerVisible && (null == (e = i.concerts) ? void 0 : e.length) ? i.concerts.length : 50;
                    }),
                    {
                        virtualizer: D,
                        rowResizeObserver: E,
                        columnCount: T,
                        indices: L,
                    } = (0, v.LW)({
                        count: S(),
                        rowGap: 32,
                        columnGap: 16,
                        getEstimateRowSize: () => 371,
                        minColumnCount: 2,
                        minColumnWidth: 170,
                        maxColumnWidth: 227,
                        containerRef: P,
                    }),
                    A = { '--feed-concerts-height': ''.concat(D.getTotalSize(), 'px'), '--feed-concerts-column-count': T },
                    z = (0, u.useCallback)(
                        (e) => {
                            var t;
                            let n = null == (t = i.concerts) ? void 0 : t[e];
                            return !n || i.isShimmerVisible ? (0, l.jsx)(o.LY, { isActive: i.isShimmerActive }) : (0, l.jsx)(o.Qb, { concert: n });
                        },
                        [i.concerts, i.isShimmerActive, i.isShimmerVisible],
                    );
                if (
                    ((0, u.useEffect)(
                        () => () => {
                            i.reset();
                        },
                        [i],
                    ),
                    (0, u.useEffect)(() => {
                        i.isResolved && !w.current && (F(), (w.current = !0));
                    }, [i.isResolved, F]),
                    i.isNeededToLoad && (0, u.use)(i.getData({ type: t, id: n })),
                    (!s.checkExperiment(a.zal.WebNextConcertsDetailsPage, 'on') || s.checkExperiment(a.zal.disableAllConcerts, 'on')) && (0, d.notFound)(),
                    i.isRejected)
                )
                    return (0, l.jsx)(h.w, {});
                let O = W && i.title ? i.title : c({ id: 'concerts.details-title' });
                return (0, l.jsx)(x.hO, {
                    scrollElement: j,
                    outerTitle: O,
                    children: (0, l.jsxs)('div', {
                        className: b().root,
                        children: [
                            (0, l.jsx)(N.Y9, {
                                variant: N.Vw.TEXT,
                                withForwardControl: !1,
                                withBackwardControl: C.canBack,
                                children: (0, l.jsx)(p.Heading, { variant: 'h2', weight: 'bold', size: 'xl', lineClamp: 1, children: O }),
                            }),
                            (0, l.jsxs)(f.N, {
                                ref: y,
                                className: b().scrollContainer,
                                children: [
                                    (0, l.jsx)('div', {
                                        className: b().content,
                                        children: (0, l.jsx)('div', {
                                            'aria-labelledby': r,
                                            ref: k,
                                            style: A,
                                            className: b().container,
                                            children: D.getVirtualItems().map((e) =>
                                                (0, l.jsx)(
                                                    v.Ux,
                                                    {
                                                        className: b().row,
                                                        columnClassName: b().column,
                                                        virtualItem: e,
                                                        resizeObserver: E,
                                                        indices: L,
                                                        renderItemByIndex: z,
                                                        scrollMargin: D.options.scrollMargin,
                                                    },
                                                    e.key,
                                                ),
                                            ),
                                        }),
                                    }),
                                    (0, l.jsx)(N.A, { children: (0, l.jsx)(N.wi, { className: b().footer }) }),
                                ],
                            }),
                        ],
                    }),
                });
            });
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
                o = n(44020),
                a = n(24571);
            function i(e) {
                return { default: e && 'default' in e ? e.default : e };
            }
            n(46950);
            let s = { loader: () => Promise.resolve(i(() => null)), loading: null, ssr: !0 },
                l = function (e) {
                    let t = { ...s, ...e },
                        n = (0, o.lazy)(() => t.loader().then(i)),
                        l = t.loading;
                    function c(e) {
                        let i = l ? (0, r.jsx)(l, { isLoading: !0, pastDelay: !0, error: null }) : null,
                            s = !t.ssr || !!t.loading,
                            c = s ? o.Suspense : o.Fragment,
                            d = t.ssr
                                ? (0, r.jsxs)(r.Fragment, { children: [null, (0, r.jsx)(n, { ...e })] })
                                : (0, r.jsx)(a.BailoutToCSR, { reason: 'next/dynamic', children: (0, r.jsx)(n, { ...e }) });
                        return (0, r.jsx)(c, { ...(s ? { fallback: i } : {}), children: d });
                    }
                    return (c.displayName = 'LoadableComponent'), c;
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
        36118: (e, t, n) => {
            'use strict';
            n.d(t, { SomethingWentWrong: () => p });
            var r = n(62936),
                o = n(79950),
                a = n(19718),
                i = n(44020),
                s = n(47480),
                l = n(26731),
                c = n(5099),
                d = n(85742),
                u = n(20418),
                m = n(42561),
                _ = n(85906),
                g = n(52166),
                f = n.n(g);
            let p = (0, a.PA)((e) => {
                let { className: t, withBackwardControl: n = !0 } = e,
                    { formatMessage: a } = (0, s.A)(),
                    g = a({ id: 'error-messages.something-went-wrong' });
                (0, m.CgZ)(g);
                let { sendRefreshEvent: p } = (0, m.cYT)(),
                    h = (0, i.useCallback)(() => {
                        p(), (window.location.href = m.Zyd.main.href);
                    }, [p]),
                    { contentRef: x } = (0, m.gKY)();
                return (0, r.jsxs)('div', {
                    className: (0, o.$)(f().root, t),
                    children: [
                        n &&
                            (0, r.jsx)(_.Lh, {
                                withBackwardFallback: '/',
                                className: (0, o.$)(f().navigation, { [f().navigation_desktop]: !x }),
                                withForwardControl: !1,
                            }),
                        (0, r.jsxs)('div', {
                            className: (0, o.$)(f().content, { [f().content_shrink]: !n }),
                            children: [
                                (0, r.jsx)(d.Icon, { className: f().icon, variant: 'attention', size: 'xxl' }),
                                (0, r.jsx)(u.Heading, { className: (0, o.$)(f().title, f().important), variant: 'h3', size: 'xs', children: g }),
                                (0, r.jsxs)(u.Caption, {
                                    className: (0, o.$)(f().text, f().important),
                                    variant: 'span',
                                    type: 'text',
                                    size: 'l',
                                    weight: 'normal',
                                    children: [!1, (0, r.jsx)(l.A, { id: 'page-error.try-to-restart-app' })],
                                }),
                                (0, r.jsx)(c.$, {
                                    onClick: h,
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
        36119: (e, t, n) => {
            'use strict';
            n.r(t), n.d(t, { default: () => l });
            var r = n(62936),
                o = n(69526),
                a = n(44020),
                i = n(91147),
                s = n(16588);
            let l = () => {
                let e = (0, o.useSearchParams)(),
                    t = e.get('type'),
                    n = e.get('id');
                return (t && n) || (0, o.notFound)(), (0, r.jsx)(a.Suspense, { fallback: (0, r.jsx)(i.k_, {}), children: (0, r.jsx)(s.f, { type: t, id: n }) });
            };
        },
        36179: (e, t, n) => {
            'use strict';
            n.d(t, { XU: () => u });
            var r,
                o,
                a = n(62986),
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
                })(o || (o = {}));
            var l = function (e) {
                var t = (0, s.A)(),
                    n = e.value,
                    r = e.children,
                    o = (0, a.__rest)(e, ['value', 'children']);
                return r(t.formatNumberToParts(n, o));
            };
            function c(e) {
                var t = function (t) {
                    var n = (0, s.A)(),
                        r = t.value,
                        o = t.children,
                        i = (0, a.__rest)(t, ['value', 'children']),
                        l = 'string' == typeof r ? new Date(r || 0) : r;
                    return o('formatDate' === e ? n.formatDateToParts(l, i) : n.formatTimeToParts(l, i));
                };
                return (t.displayName = o[e]), t;
            }
            function d(e) {
                var t = function (t) {
                    var n = (0, s.A)(),
                        r = t.value,
                        o = t.children,
                        l = (0, a.__rest)(t, ['value', 'children']),
                        c = n[e](r, l);
                    if ('function' == typeof o) return o(c);
                    var d = n.textComponent || i.Fragment;
                    return i.createElement(d, null, c);
                };
                return (t.displayName = r[e]), t;
            }
            (l.displayName = 'FormattedNumberParts'), (l.displayName = 'FormattedNumberParts');
            var u = d('formatDate');
            d('formatTime'), d('formatNumber'), d('formatList'), d('formatDisplayName'), c('formatDate'), c('formatTime');
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
            n.d(t, { default: () => o.a });
            var r = n(10076),
                o = n.n(r);
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
        57249: (e, t, n) => {
            'use strict';
            e.exports = n.p + 'static/media/dotlottie-player.98f80c6ff3eca5ba.wasm';
        },
        64745: (e, t, n) => {
            Promise.resolve().then(n.bind(n, 36119));
        },
        65438: (e, t, n) => {
            'use strict';
            n.d(t, { w: () => r.SomethingWentWrong });
            var r = n(36118);
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
                o = n(79950),
                a = n(19718),
                i = n(26731),
                s = n(5099),
                l = n(85742),
                c = n(20418),
                d = n(42561),
                u = n(85906),
                m = n(44020),
                _ = n(88933),
                g = n.n(_);
            let f = (0, a.PA)((e) => {
                let { className: t, title: n, description: a, iconVariant: _ = 'musicLogo', iconClassName: f, iconSize: p } = e,
                    { contentRef: h } = (0, d.gKY)(),
                    x = (0, d.ZpR)(d.Zyd.main.href);
                (0, d.LZB)();
                let { handleNavigateToMain: v } = (0, d.D5F)(x);
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
                    (0, r.jsxs)('div', {
                        className: (0, o.$)(g().root, { [g().root_desktop]: !h }, t),
                        children: [
                            (0, r.jsx)(u.Lh, { withBackwardFallback: '/', className: g().navigation, withForwardControl: !1 }),
                            (0, r.jsxs)('div', {
                                className: g().content,
                                children: [
                                    (0, r.jsx)(l.Icon, { className: (0, o.$)(g().icon, f), variant: _, size: p }),
                                    (0, r.jsx)(c.Heading, {
                                        className: (0, o.$)(g().title, g().important),
                                        variant: 'h3',
                                        size: 'xs',
                                        children: n || (0, r.jsx)(i.A, { id: 'page-error.page-does-not-exist' }),
                                    }),
                                    (0, r.jsx)(c.Caption, {
                                        className: (0, o.$)(g().text, g().important),
                                        variant: 'span',
                                        type: 'text',
                                        size: 'l',
                                        weight: 'normal',
                                        children: a || (0, r.jsx)(i.A, { id: 'page-error.page-does-not-exist-description' }),
                                    }),
                                    (0, r.jsx)(s.$, {
                                        onClick: v,
                                        className: g().button,
                                        role: 'link',
                                        color: 'secondary',
                                        size: 'l',
                                        radius: 'xxxl',
                                        children: (0, r.jsx)(c.Caption, {
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
        99012: (e) => {
            e.exports = {
                root: 'ConcertsDetailsPage_root__Uyap_',
                scrollContainer: 'ConcertsDetailsPage_scrollContainer__BKTRD',
                content: 'ConcertsDetailsPage_content__WsuVk',
                header: 'ConcertsDetailsPage_header__K7UVE',
                container: 'ConcertsDetailsPage_container__swjuX',
                column: 'ConcertsDetailsPage_column__EB1kA',
                row: 'ConcertsDetailsPage_row__oP8Xu',
                footer: 'ConcertsDetailsPage_footer__ooBj8',
            };
        },
    },
    (e) => {
        e.O(
            0,
            [
                85, 260, 3196, 403, 2537, 3789, 612, 5721, 2670, 1970, 1311, 7764, 6706, 6011, 5201, 2899, 5419, 2530, 5064, 2561, 5906, 4690, 4501, 9154, 914, 3197,
                6161, 3912, 3189, 2632, 2991, 2695, 1147, 1009, 4670, 7358,
            ],
            () => e((e.s = 64745)),
        ),
            (_N_E = e.O());
    },
]);
