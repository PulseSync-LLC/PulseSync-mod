(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2849],
    {
        1323: (e, t, n) => {
            'use strict';
            n.r(t), n.d(t, { default: () => l });
            var r = n(32290),
                o = n(21916),
                a = n(55178),
                i = n(62812),
                s = n(67985);
            let l = () => {
                let e = (0, o.useSearchParams)(),
                    t = e.get('type'),
                    n = e.get('id');
                return (t && n) || (0, o.notFound)(), (0, r.jsx)(a.Suspense, { fallback: (0, r.jsx)(i.k_, {}), children: (0, r.jsx)(s.f, { type: t, id: n }) });
            };
        },
        12119: (e, t, n) => {
            'use strict';
            n.d(t, { NotFound: () => f });
            var r = n(32290),
                o = n(63618),
                a = n(96103),
                i = n(39407),
                s = n(63423),
                l = n(82586),
                c = n(71926),
                d = n(49574),
                u = n(44574),
                m = n(55178),
                _ = n(55365),
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
        45209: (e, t, n) => {
            Promise.resolve().then(n.bind(n, 1323));
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
            n.d(t, { SomethingWentWrong: () => p });
            var r = n(32290),
                o = n(63618),
                a = n(96103),
                i = n(55178),
                s = n(60900),
                l = n(39407),
                c = n(63423),
                d = n(82586),
                u = n(71926),
                m = n(49574),
                _ = n(44574),
                g = n(30310),
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
                o = n(55178),
                a = n(63397);
            function i(e) {
                return { default: e && 'default' in e ? e.default : e };
            }
            n(46456);
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
        65493: (e, t, n) => {
            'use strict';
            n.d(t, { default: () => o.a });
            var r = n(95574),
                o = n.n(r);
        },
        67985: (e, t, n) => {
            'use strict';
            n.d(t, { f: () => y, _: () => s });
            var r = n(60754),
                o = n(73298),
                a = n(49574),
                i = n(95428);
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
                                let { concerts: t } = (0, r.Zn)(e),
                                    l = t.concertsLocationForRequest,
                                    { items: c, title: d } = yield s.getConcertsDetails({ type: n, id: i, locations: l });
                                (e.concerts = (0, r.wg)(c.map((e) => (0, o.HN)(e)))), (e.title = null != d ? d : null), (e.loadingState = a.GuX.RESOLVE);
                            } catch (t) {
                                l.error(t), (e.loadingState = a.GuX.REJECT);
                            }
                    }),
                    reset() {
                        (e.loadingState = a.GuX.IDLE), (e.title = null), e.destroyItems([e.concerts]);
                    },
                }));
            var l = n(32290),
                c = n(96103),
                d = n(21916),
                u = n(55178),
                m = n(60900),
                _ = n(91027),
                g = n(54862),
                f = n(46049),
                p = n(71926),
                h = n(32381),
                x = n(75645),
                v = n(20194),
                N = n(44574),
                j = n(77028),
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
                        columnCount: L,
                        indices: T,
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
                    A = { '--feed-concerts-height': ''.concat(D.getTotalSize(), 'px'), '--feed-concerts-column-count': L },
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
                                                        indices: T,
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
        77028: (e) => {
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
        80719: (e, t, n) => {
            'use strict';
            n.d(t, { M: () => r.NotFound });
            var r = n(12119);
        },
        81354: (e, t, n) => {
            'use strict';
            n.d(t, { XU: () => u });
            var r,
                o,
                a = n(30782),
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
        95574: (e, t, n) => {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'default', {
                    enumerable: !0,
                    get: function () {
                        return o;
                    },
                });
            let r = n(33399)._(n(64910));
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
    },
    (e) => {
        e.O(
            0,
            [
                1670, 3445, 9221, 9745, 4567, 4826, 7236, 6328, 5969, 4394, 9312, 6375, 3169, 1311, 7764, 6706, 1588, 5201, 3267, 9769, 4250, 7307, 9574, 4574, 5428,
                6049, 4089, 6486, 3317, 864, 3843, 112, 6043, 3557, 2812, 4220, 9562, 7358,
            ],
            () => e((e.s = 45209)),
        ),
            (_N_E = e.O());
    },
]);
