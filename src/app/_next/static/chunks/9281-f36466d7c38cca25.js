(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9281],
    {
        1817: (e, n, i) => {
            'use strict';
            i.d(n, { KidsNotFoundPage: () => d });
            var o = i(62936),
                r = i(19718),
                s = i(44020),
                t = i(9939),
                l = i(42561);
            let d = (0, r.PA)(() => {
                let { kids: e } = (0, l.Pjs)();
                return (
                    (0, s.useEffect)(
                        () => () => {
                            e.landing.reset();
                        },
                        [e.landing],
                    ),
                    (0, o.jsx)(t.M, {})
                );
            });
        },
        9939: (e, n, i) => {
            'use strict';
            i.d(n, { M: () => o.NotFound });
            var o = i(91455);
        },
        10076: (e, n, i) => {
            'use strict';
            Object.defineProperty(n, '__esModule', { value: !0 }),
                Object.defineProperty(n, 'default', {
                    enumerable: !0,
                    get: function () {
                        return r;
                    },
                });
            let o = i(36283)._(i(23772));
            function r(e, n) {
                var i;
                let r = {};
                'function' == typeof e && (r.loader = e);
                let s = { ...r, ...n };
                return (0, o.default)({ ...s, modules: null == (i = s.loadableGenerated) ? void 0 : i.modules });
            }
            ('function' == typeof n.default || ('object' == typeof n.default && null !== n.default)) &&
                void 0 === n.default.__esModule &&
                (Object.defineProperty(n.default, '__esModule', { value: !0 }), Object.assign(n.default, n), (e.exports = n.default));
        },
        23772: (e, n, i) => {
            'use strict';
            Object.defineProperty(n, '__esModule', { value: !0 }),
                Object.defineProperty(n, 'default', {
                    enumerable: !0,
                    get: function () {
                        return d;
                    },
                });
            let o = i(62936),
                r = i(44020),
                s = i(24571);
            function t(e) {
                return { default: e && 'default' in e ? e.default : e };
            }
            i(46950);
            let l = { loader: () => Promise.resolve(t(() => null)), loading: null, ssr: !0 },
                d = function (e) {
                    let n = { ...l, ...e },
                        i = (0, r.lazy)(() => n.loader().then(t)),
                        d = n.loading;
                    function a(e) {
                        let t = d ? (0, o.jsx)(d, { isLoading: !0, pastDelay: !0, error: null }) : null,
                            l = !n.ssr || !!n.loading,
                            a = l ? r.Suspense : r.Fragment,
                            m = n.ssr
                                ? (0, o.jsxs)(o.Fragment, { children: [null, (0, o.jsx)(i, { ...e })] })
                                : (0, o.jsx)(s.BailoutToCSR, { reason: 'next/dynamic', children: (0, o.jsx)(i, { ...e }) });
                        return (0, o.jsx)(a, { ...(l ? { fallback: t } : {}), children: m });
                    }
                    return (a.displayName = 'LoadableComponent'), a;
                };
        },
        24571: (e, n, i) => {
            'use strict';
            function o(e) {
                let { reason: n, children: i } = e;
                return i;
            }
            Object.defineProperty(n, '__esModule', { value: !0 }),
                Object.defineProperty(n, 'BailoutToCSR', {
                    enumerable: !0,
                    get: function () {
                        return o;
                    },
                }),
                i(71279);
        },
        29588: (e) => {
            e.exports = { root: 'KidsCategoryPageShimmer_root__0V_bC' };
        },
        30931: (e) => {
            e.exports = {
                root: 'KidsCategoryPage_root__bk7_R',
                content: 'KidsCategoryPage_content__LN0NB',
                header: 'KidsCategoryPage_header__Agys3',
                landing: 'KidsCategoryPage_landing__aSDYw',
                landing_onlyWizard: 'KidsCategoryPage_landing_onlyWizard__3EC9N',
                footer: 'KidsCategoryPage_footer__BQhqi',
                error: 'KidsCategoryPage_error__tSXF7',
            };
        },
        32985: (e, n, i) => {
            'use strict';
            i.d(n, { KidsEditorialAlbumsPage: () => x });
            var o = i(62936),
                r = i(79950),
                s = i(19718),
                t = i(69526),
                l = i(44020),
                d = i(47480),
                a = i(8669),
                m = i(59935),
                h = i(60188),
                v = i(20418),
                P = i(65438),
                b = i(90914),
                c = i(92229),
                u = i(42561),
                g = i(85906),
                _ = i(44557),
                p = i.n(_);
            let x = (0, s.PA)((e) => {
                var n, i, s, _;
                let { id: x } = e,
                    {
                        kids: { kidsEditorialAlbumSubpage: f },
                        settings: { isMobile: j },
                    } = (0, u.Pjs)(),
                    N = (0, u.W6M)(),
                    { contentScrollRef: y, setContentScrollRef: C } = (0, u.gKY)(),
                    { formatMessage: k } = (0, d.A)(),
                    w = (0, m.c)((e) => {
                        f.getAlbums({ page: e, pageSize: 20 });
                    });
                f.isNotFound && (0, t.notFound)(),
                    (0, l.useEffect)(
                        () => () => {
                            f.reset();
                        },
                        [f],
                    );
                let A = (0, h.L)(() => ({ Footer: () => (0, o.jsx)(g.A, { children: (0, o.jsx)(g.wi, { className: p().footer }) }) }));
                if (
                    ((0, u.Jzs)(f.isResolved),
                    (0, u.XcE)(f.pagesLoader, w),
                    f.isNeededToLoad && (0, l.use)(f.getData({ id: x, page: 0, pageSize: 20 })),
                    f.isSomethingWrong)
                )
                    return (0, o.jsx)(P.w, {});
                let S = f.isLoading ? 20 : null != (s = null == (i = f.pagesLoader) || null == (n = i.pager) ? void 0 : n.total) ? s : 0;
                return (0, o.jsx)(u.nVz, {
                    pageId: u._Q$.KIDS_EDITORIAL_ALBUMS,
                    children: (0, o.jsx)(c.hO, {
                        scrollElement: y,
                        outerTitle: f.title,
                        children: (0, o.jsxs)('div', {
                            className: p().root,
                            ...(0, a.Am)(a.Xk.kids.KIDS_EDITORIAL_ALBUMS),
                            children: [
                                (0, o.jsx)(g.Y9, {
                                    variant: g.Vw.TEXT,
                                    withForwardControl: !1,
                                    withBackwardControl: N.canBack,
                                    children: (0, o.jsx)(v.Heading, { variant: 'h2', weight: 'bold', size: 'xl', lineClamp: 1, children: f.title }),
                                }),
                                (0, o.jsx)(g.$$, {
                                    context: { listAriaLabel: k({ id: 'mixes.albums-list' }, { genreName: f.title || '' }) },
                                    className: (0, r.$)(p().scrollContainer, p().important),
                                    customComponents: A,
                                    itemContentCallback: (e) => {
                                        let n = f.albums[e],
                                            i = k({ id: 'loading-messages.entity-is-loading' }, { entityName: k({ id: 'entity-names.album' }) });
                                        return n
                                            ? (0, o.jsx)(b.aX, { withLikesCount: !0, album: n, contentLinesCount: 3 }, n.id)
                                            : (0, o.jsx)(g.Vt, { isActive: !0, 'aria-label': i });
                                    },
                                    totalCount: S,
                                    onGetDataByPage: w,
                                    pageSize: 20,
                                    totalRequests: null != (_ = f.pagesLoader.requestsCount) ? _ : 0,
                                    listClassName: p().content,
                                    itemClassName: p().item,
                                    handleRef: C,
                                    isMobileLayout: j,
                                    useWindowScroll: j,
                                }),
                            ],
                        }),
                    }),
                });
            });
        },
        36118: (e, n, i) => {
            'use strict';
            i.d(n, { SomethingWentWrong: () => u });
            var o = i(62936),
                r = i(79950),
                s = i(19718),
                t = i(44020),
                l = i(47480),
                d = i(26731),
                a = i(5099),
                m = i(85742),
                h = i(20418),
                v = i(42561),
                P = i(85906),
                b = i(52166),
                c = i.n(b);
            let u = (0, s.PA)((e) => {
                let { className: n, withBackwardControl: i = !0 } = e,
                    { formatMessage: s } = (0, l.A)(),
                    b = s({ id: 'error-messages.something-went-wrong' });
                (0, v.CgZ)(b);
                let { sendRefreshEvent: u } = (0, v.cYT)(),
                    g = (0, t.useCallback)(() => {
                        u(), (window.location.href = v.Zyd.main.href);
                    }, [u]),
                    { contentRef: _ } = (0, v.gKY)();
                return (0, o.jsxs)('div', {
                    className: (0, r.$)(c().root, n),
                    children: [
                        i &&
                            (0, o.jsx)(P.Lh, {
                                withBackwardFallback: '/',
                                className: (0, r.$)(c().navigation, { [c().navigation_desktop]: !_ }),
                                withForwardControl: !1,
                            }),
                        (0, o.jsxs)('div', {
                            className: (0, r.$)(c().content, { [c().content_shrink]: !i }),
                            children: [
                                (0, o.jsx)(m.Icon, { className: c().icon, variant: 'attention', size: 'xxl' }),
                                (0, o.jsx)(h.Heading, { className: (0, r.$)(c().title, c().important), variant: 'h3', size: 'xs', children: b }),
                                (0, o.jsxs)(h.Caption, {
                                    className: (0, r.$)(c().text, c().important),
                                    variant: 'span',
                                    type: 'text',
                                    size: 'l',
                                    weight: 'normal',
                                    children: [!1, (0, o.jsx)(d.A, { id: 'page-error.try-to-restart-app' })],
                                }),
                                (0, o.jsx)(a.$, {
                                    onClick: g,
                                    className: c().button,
                                    role: 'link',
                                    color: 'secondary',
                                    size: 'l',
                                    radius: 'xxxl',
                                    children: (0, o.jsxs)(h.Caption, {
                                        type: 'controls',
                                        variant: 'span',
                                        size: 'm',
                                        children: [!1, (0, o.jsx)(d.A, { id: 'page-error.restart-app-button' })],
                                    }),
                                }),
                            ],
                        }),
                    ],
                });
            });
        },
        36179: (e, n, i) => {
            'use strict';
            i.d(n, { XU: () => h });
            var o,
                r,
                s = i(62986),
                t = i(44020),
                l = i(47480);
            !(function (e) {
                (e.formatDate = 'FormattedDate'),
                    (e.formatTime = 'FormattedTime'),
                    (e.formatNumber = 'FormattedNumber'),
                    (e.formatList = 'FormattedList'),
                    (e.formatDisplayName = 'FormattedDisplayName');
            })(o || (o = {})),
                (function (e) {
                    (e.formatDate = 'FormattedDateParts'),
                        (e.formatTime = 'FormattedTimeParts'),
                        (e.formatNumber = 'FormattedNumberParts'),
                        (e.formatList = 'FormattedListParts');
                })(r || (r = {}));
            var d = function (e) {
                var n = (0, l.A)(),
                    i = e.value,
                    o = e.children,
                    r = (0, s.__rest)(e, ['value', 'children']);
                return o(n.formatNumberToParts(i, r));
            };
            function a(e) {
                var n = function (n) {
                    var i = (0, l.A)(),
                        o = n.value,
                        r = n.children,
                        t = (0, s.__rest)(n, ['value', 'children']),
                        d = 'string' == typeof o ? new Date(o || 0) : o;
                    return r('formatDate' === e ? i.formatDateToParts(d, t) : i.formatTimeToParts(d, t));
                };
                return (n.displayName = r[e]), n;
            }
            function m(e) {
                var n = function (n) {
                    var i = (0, l.A)(),
                        o = n.value,
                        r = n.children,
                        d = (0, s.__rest)(n, ['value', 'children']),
                        a = i[e](o, d);
                    if ('function' == typeof r) return r(a);
                    var m = i.textComponent || t.Fragment;
                    return t.createElement(m, null, a);
                };
                return (n.displayName = o[e]), n;
            }
            (d.displayName = 'FormattedNumberParts'), (d.displayName = 'FormattedNumberParts');
            var h = m('formatDate');
            m('formatTime'), m('formatNumber'), m('formatList'), m('formatDisplayName'), a('formatDate'), a('formatTime');
        },
        39677: (e, n, i) => {
            'use strict';
            i.d(n, { KidsCategoryPage: () => j });
            var o = i(62936),
                r = i(79950),
                s = i(19718),
                t = i(69526),
                l = i(44020),
                d = i(8669),
                a = i(14501),
                m = i(20418),
                h = i(22991),
                v = i(65438),
                P = i(92229),
                b = i(42561),
                c = i(85906),
                u = i(30931),
                g = i.n(u),
                _ = i(60188),
                p = i(29588),
                x = i.n(p);
            let f = (0, s.PA)(() => {
                    let { experiments: e } = (0, b.Pjs)(),
                        n = e.checkExperiment(b.zal.WebNextWaveAgentExperiment, 'on'),
                        i = (0, _.L)(() =>
                            n ? (0, o.jsx)(c.OY, { isShimmerVisible: !0, isShimmerActive: !0, isShimmerCentered: !0 }) : (0, o.jsx)(h.Rj, { isActive: !0, length: 4 }),
                        );
                    return (0, o.jsxs)('div', {
                        className: x().root,
                        children: [
                            (0, o.jsx)('div', { children: i }),
                            (0, o.jsx)(c.OY, { isShimmerVisible: !0, isShimmerActive: !0 }),
                            (0, o.jsx)(c.OY, { isShimmerVisible: !0, isShimmerActive: !0 }),
                        ],
                    });
                }),
                j = (0, s.PA)((e) => {
                    let { categoryId: n } = e,
                        { kids: i, experiments: s } = (0, b.Pjs)(),
                        { contentScrollRef: u, setContentScrollRef: _ } = (0, b.gKY)(),
                        p = (0, b.W6M)(),
                        x = s.checkExperiment(b.zal.WebNextNewNestedNonMusicLandings, 'on');
                    if (((0, l.useEffect)(() => () => i.landing.reset(), [i.landing]), (0, b.Jzs)(i.landing.isResolved), x)) {
                        let { href: e } = (0, b.uvd)('/landing/:skeleton', { params: { skeleton: 'category_kids_'.concat(n) } });
                        (0, t.redirect)(e);
                    }
                    i.landing.isLoadedAndEmpty && (0, t.notFound)();
                    let j = (0, h._9)(i.landing),
                        N = (0, l.useMemo)(
                            () =>
                                i.landing.isLoading || i.landing.isNeededToLoad
                                    ? (0, o.jsx)(f, {})
                                    : (0, o.jsx)(h.EA, { landing: i.landing, errorComponent: (0, o.jsx)(v.w, { className: g().error, withBackwardControl: !1 }) }),
                            [i.landing.loadingState, i.landing],
                        );
                    return (
                        i.landing.isNeededToLoad && (0, l.use)(i.landing.getChildrenSkeleton({ categoryId: n })),
                        (0, o.jsx)(b.nVz, {
                            pageId: b._Q$.KIDS_CATEGORY,
                            children: (0, o.jsxs)(P.hO, {
                                scrollElement: u,
                                outerTitle: i.landing.title,
                                children: [
                                    (0, o.jsx)(c.Y9, {
                                        variant: c.Vw.TEXT,
                                        withForwardControl: !1,
                                        withBackwardControl: p.canBack,
                                        children: (0, o.jsx)('div', {
                                            className: g().header,
                                            children: (0, o.jsx)(m.Heading, { variant: 'h1', weight: 'bold', size: 'xl', children: i.landing.title }),
                                        }),
                                    }),
                                    (0, o.jsxs)(a.N, {
                                        className: g().root,
                                        containerClassName: g().content,
                                        ref: _,
                                        ...(0, d.Am)(d.Xk.kids.KIDS_CATEGORY_PAGE),
                                        children: [
                                            (0, o.jsx)('div', { className: (0, r.$)(g().landing, { [g().landing_onlyWizard]: j }), children: N }),
                                            (0, o.jsx)(c.A, { children: (0, o.jsx)(c.wi, { className: g().footer }) }),
                                        ],
                                    }),
                                ],
                            }),
                        })
                    );
                });
        },
        43528: (e, n, i) => {
            'use strict';
            i.d(n, { a: () => r });
            var o = i(43696);
            let r = () => {
                let e = null,
                    n = new o.cJ(!1),
                    i = [];
                return {
                    isLoaded: n,
                    init: (o) => {
                        var r, s;
                        if (void 0 !== (null == (r = window.Ya) ? void 0 : r.Metrika2) && !n.value)
                            try {
                                (e = new window.Ya.Metrika2({ ...o })),
                                    (n.value = !0),
                                    (s = e),
                                    i.forEach((e) => {
                                        e(s);
                                    }),
                                    (i.length = 0);
                            } catch (e) {
                                ('string' == typeof e || e instanceof Error) && o.logger.error(e);
                            }
                    },
                    count: function (n) {
                        let o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'counter';
                        e
                            ? e.params({ [o]: n })
                            : i.push((e) => {
                                  e.params({ [o]: n });
                              });
                    },
                    hit: (n) => {
                        e
                            ? e.hit(n)
                            : i.push((e) => {
                                  e.hit(n);
                              });
                    },
                    reachGoal: (n, o) => {
                        if (!e) return void i.push((e) => e.reachGoal(n, o));
                        e.reachGoal(n, o);
                    },
                };
            };
        },
        44557: (e) => {
            e.exports = {
                root: 'KidsEditorialAlbumsPage_root__7rHF8',
                scrollContainer: 'KidsEditorialAlbumsPage_scrollContainer__nQVlt',
                important: 'KidsEditorialAlbumsPage_important__hmmxn',
                footer: 'KidsEditorialAlbumsPage_footer__6rwU1',
                item: 'KidsEditorialAlbumsPage_item__Wc243',
                content: 'KidsEditorialAlbumsPage_content__u3zcW',
            };
        },
        46950: (e, n, i) => {
            'use strict';
            function o(e) {
                let { moduleIds: n } = e;
                return null;
            }
            Object.defineProperty(n, '__esModule', { value: !0 }),
                Object.defineProperty(n, 'PreloadChunks', {
                    enumerable: !0,
                    get: function () {
                        return o;
                    },
                }),
                i(62936),
                i(2933),
                i(34397),
                i(5300);
        },
        47523: (e, n, i) => {
            'use strict';
            i.d(n, { KidsPage: () => x });
            var o = i(62936),
                r = i(79950),
                s = i(19718),
                t = i(44020),
                l = i(47480),
                d = i(26731),
                a = i(8669),
                m = i(44262),
                h = i(14501),
                v = i(20418),
                P = i(22991),
                b = i(65438),
                c = i(92229),
                u = i(42561),
                g = i(85906),
                _ = i(69399),
                p = i.n(_);
            let x = (0, s.PA)(() => {
                let { kids: e, user: n } = (0, u.Pjs)(),
                    { formatMessage: i } = (0, l.A)(),
                    { contentScrollRef: s, setContentScrollRef: _ } = (0, u.gKY)();
                (0, t.useEffect)(() => () => e.landing.reset(), [e.landing]), (0, u.Jzs)(e.landing.isResolved);
                let x = (0, P._9)(e.landing);
                return (
                    e.landing.isNeededToLoad && (0, t.use)(e.landing.getSkeleton({ id: m.p.KIDS, showWizard: n.settings.showWizard }, { preloadBlocksCount: 2 })),
                    (0, o.jsx)(u.nVz, {
                        pageId: u._Q$.KIDS,
                        children: (0, o.jsxs)(c.hO, {
                            scrollElement: s,
                            outerTitle: i({ id: 'kids.for-kids' }),
                            children: [
                                (0, o.jsx)(g.Y9, {
                                    variant: g.Vw.TEXT,
                                    showControls: !1,
                                    children: (0, o.jsx)('div', {
                                        className: p().header,
                                        children: (0, o.jsx)(v.Heading, {
                                            variant: 'h1',
                                            weight: 'bold',
                                            size: 'xl',
                                            children: (0, o.jsx)(d.A, { id: 'kids.for-kids' }),
                                        }),
                                    }),
                                }),
                                (0, o.jsxs)(h.N, {
                                    className: p().root,
                                    containerClassName: p().content,
                                    ref: _,
                                    ...(0, a.Am)(a.Xk.kids.KIDS_PAGE),
                                    children: [
                                        (0, o.jsx)('div', {
                                            className: (0, r.$)(p().landing, { [p().landing_onlyWizard]: x }),
                                            children: (0, o.jsx)(P.EA, {
                                                landing: e.landing,
                                                errorComponent: (0, o.jsx)(b.w, { className: p().error, withBackwardControl: !1 }),
                                            }),
                                        }),
                                        (0, o.jsx)(g.A, { children: (0, o.jsx)(g.wi, { className: p().footer }) }),
                                    ],
                                }),
                            ],
                        }),
                    })
                );
            });
        },
        49351: (e, n, i) => {
            'use strict';
            i.d(n, { default: () => r.a });
            var o = i(10076),
                r = i.n(o);
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
        54802: (e, n, i) => {
            'use strict';
            let o;
            i.d(n, { useMetrika: () => t });
            var r = i(44020),
                s = i(43528);
            let t = () => {
                let e = (o || (o = (0, s.a)()), o),
                    n = (0, r.useSyncExternalStore)(e.isLoaded.onChange, () => e.isLoaded.value);
                return (0, r.useMemo)(() => ({ ...e, isLoaded: n }), [n]);
            };
        },
        57249: (e, n, i) => {
            'use strict';
            e.exports = i.p + 'static/media/dotlottie-player.98f80c6ff3eca5ba.wasm';
        },
        65419: (e) => {
            e.exports = {
                root: 'KidsEditorialPlaylistsPage_root__HeHqc',
                scrollContainer: 'KidsEditorialPlaylistsPage_scrollContainer__Hy6HY',
                important: 'KidsEditorialPlaylistsPage_important__283cd',
                footer: 'KidsEditorialPlaylistsPage_footer___UaP5',
                item: 'KidsEditorialPlaylistsPage_item__0wBk2',
                content: 'KidsEditorialPlaylistsPage_content__6wWkP',
            };
        },
        65438: (e, n, i) => {
            'use strict';
            i.d(n, { w: () => o.SomethingWentWrong });
            var o = i(36118);
        },
        69399: (e) => {
            e.exports = {
                root: 'KidsPage_root__yycsJ',
                content: 'KidsPage_content__08pPR',
                header: 'KidsPage_header__2Gk2l',
                landing: 'KidsPage_landing__3QZZj',
                landing_onlyWizard: 'KidsPage_landing_onlyWizard__xKyDo',
                footer: 'KidsPage_footer__p7SVD',
                error: 'KidsPage_error__qa7Qo',
            };
        },
        80559: (e, n, i) => {
            'use strict';
            i.d(n, { KidsEditorialPlaylistsPage: () => x });
            var o = i(62936),
                r = i(79950),
                s = i(19718),
                t = i(69526),
                l = i(44020),
                d = i(47480),
                a = i(8669),
                m = i(59935),
                h = i(60188),
                v = i(20418),
                P = i(65438),
                b = i(92229),
                c = i(79670),
                u = i(42561),
                g = i(85906),
                _ = i(65419),
                p = i.n(_);
            let x = (0, s.PA)((e) => {
                var n, i, s;
                let { id: _ } = e,
                    {
                        kids: { kidsEditorialPlaylistSubpage: x },
                        settings: { isMobile: f },
                    } = (0, u.Pjs)(),
                    j = (0, u.W6M)(),
                    { contentScrollRef: N, setContentScrollRef: y } = (0, u.gKY)(),
                    { formatMessage: C } = (0, d.A)(),
                    k = (0, m.c)((e) => {
                        x.getPlaylists({ page: e, pageSize: 20 });
                    });
                x.isNotFound && (0, t.notFound)(),
                    (0, l.useEffect)(
                        () => () => {
                            x.reset();
                        },
                        [x],
                    );
                let w = (0, h.L)(() => ({ Footer: () => (0, o.jsx)(g.A, { children: (0, o.jsx)(g.wi, { className: p().footer }) }) }));
                if (
                    ((0, u.Jzs)(x.isResolved),
                    (0, u.XcE)(x.pagesLoader, k),
                    x.isNeededToLoad && (0, l.use)(x.getData({ id: _, page: 0, pageSize: 20 })),
                    x.isSomethingWrong)
                )
                    return (0, o.jsx)(P.w, {});
                let A = x.isLoading ? 20 : null != (i = null == (n = x.pagesLoader.pager) ? void 0 : n.total) ? i : 0;
                return (0, o.jsx)(u.nVz, {
                    pageId: u._Q$.KIDS_EDITORIAL_PLAYLISTS,
                    children: (0, o.jsx)(b.hO, {
                        scrollElement: N,
                        outerTitle: x.title,
                        children: (0, o.jsxs)('div', {
                            className: p().root,
                            ...(0, a.Am)(a.Xk.kids.KIDS_EDITORIAL_PLAYLISTS),
                            children: [
                                (0, o.jsx)(g.Y9, {
                                    variant: g.Vw.TEXT,
                                    withForwardControl: !1,
                                    withBackwardControl: j.canBack,
                                    children: (0, o.jsx)(v.Heading, { variant: 'h2', weight: 'bold', size: 'xl', lineClamp: 1, children: x.title }),
                                }),
                                (0, o.jsx)(g.$$, {
                                    context: { listAriaLabel: C({ id: 'mixes.playlists-list' }, { genreName: x.title || '' }) },
                                    className: (0, r.$)(p().scrollContainer, p().important),
                                    customComponents: w,
                                    itemContentCallback: (e) => {
                                        let n = x.playlists[e],
                                            i = C({ id: 'loading-messages.entity-is-loading' }, { entityName: C({ id: 'entity-names.playlist' }) });
                                        return n ? (0, o.jsx)(c.B6, { playlist: n, contentLinesCount: 3 }, n.key) : (0, o.jsx)(g.Vt, { isActive: !0, 'aria-label': i });
                                    },
                                    totalCount: A,
                                    onGetDataByPage: k,
                                    pageSize: 20,
                                    totalRequests: null != (s = x.pagesLoader.requestsCount) ? s : 0,
                                    listClassName: p().content,
                                    itemClassName: p().item,
                                    handleRef: y,
                                    isMobileLayout: f,
                                    useWindowScroll: f,
                                }),
                            ],
                        }),
                    }),
                });
            });
        },
        84145: (e, n, i) => {
            Promise.resolve().then(i.bind(i, 21153)),
                Promise.resolve().then(i.bind(i, 85742)),
                Promise.resolve().then(i.bind(i, 13030)),
                Promise.resolve().then(i.bind(i, 50576)),
                Promise.resolve().then(i.bind(i, 59260)),
                Promise.resolve().then(i.bind(i, 56721)),
                Promise.resolve().then(i.bind(i, 30388)),
                Promise.resolve().then(i.bind(i, 85023)),
                Promise.resolve().then(i.bind(i, 20418)),
                Promise.resolve().then(i.bind(i, 54802)),
                Promise.resolve().then(i.bind(i, 70036)),
                Promise.resolve().then(i.bind(i, 62967)),
                Promise.resolve().then(i.bind(i, 91738)),
                Promise.resolve().then(i.bind(i, 25467)),
                Promise.resolve().then(i.bind(i, 87740)),
                Promise.resolve().then(i.bind(i, 89457)),
                Promise.resolve().then(i.bind(i, 70892)),
                Promise.resolve().then(i.bind(i, 90031)),
                Promise.resolve().then(i.bind(i, 90339)),
                Promise.resolve().then(i.bind(i, 57297)),
                Promise.resolve().then(i.bind(i, 14848)),
                Promise.resolve().then(i.bind(i, 82447)),
                Promise.resolve().then(i.bind(i, 61387)),
                Promise.resolve().then(i.bind(i, 31011)),
                Promise.resolve().then(i.bind(i, 1624)),
                Promise.resolve().then(i.bind(i, 41338)),
                Promise.resolve().then(i.bind(i, 18460)),
                Promise.resolve().then(i.bind(i, 79078)),
                Promise.resolve().then(i.bind(i, 89774)),
                Promise.resolve().then(i.bind(i, 462)),
                Promise.resolve().then(i.bind(i, 71851)),
                Promise.resolve().then(i.bind(i, 2545)),
                Promise.resolve().then(i.bind(i, 81940)),
                Promise.resolve().then(i.bind(i, 43345)),
                Promise.resolve().then(i.bind(i, 47893)),
                Promise.resolve().then(i.bind(i, 91629)),
                Promise.resolve().then(i.bind(i, 2816)),
                Promise.resolve().then(i.bind(i, 7932)),
                Promise.resolve().then(i.bind(i, 55959)),
                Promise.resolve().then(i.bind(i, 21654)),
                Promise.resolve().then(i.bind(i, 4233)),
                Promise.resolve().then(i.t.bind(i, 11602, 23)),
                Promise.resolve().then(i.bind(i, 60438)),
                Promise.resolve().then(i.bind(i, 52583)),
                Promise.resolve().then(i.bind(i, 55324)),
                Promise.resolve().then(i.bind(i, 30284)),
                Promise.resolve().then(i.bind(i, 39086)),
                Promise.resolve().then(i.t.bind(i, 52615, 23)),
                Promise.resolve().then(i.bind(i, 94481)),
                Promise.resolve().then(i.bind(i, 51099)),
                Promise.resolve().then(i.bind(i, 28865)),
                Promise.resolve().then(i.bind(i, 28311)),
                Promise.resolve().then(i.bind(i, 65185)),
                Promise.resolve().then(i.bind(i, 87395)),
                Promise.resolve().then(i.bind(i, 74351)),
                Promise.resolve().then(i.bind(i, 55880)),
                Promise.resolve().then(i.bind(i, 79845)),
                Promise.resolve().then(i.bind(i, 51945)),
                Promise.resolve().then(i.bind(i, 14144)),
                Promise.resolve().then(i.bind(i, 34753)),
                Promise.resolve().then(i.bind(i, 34211)),
                Promise.resolve().then(i.bind(i, 63065)),
                Promise.resolve().then(i.bind(i, 31441)),
                Promise.resolve().then(i.bind(i, 37577)),
                Promise.resolve().then(i.bind(i, 9451)),
                Promise.resolve().then(i.bind(i, 64987)),
                Promise.resolve().then(i.bind(i, 77188)),
                Promise.resolve().then(i.bind(i, 50509)),
                Promise.resolve().then(i.bind(i, 16945)),
                Promise.resolve().then(i.bind(i, 11503)),
                Promise.resolve().then(i.bind(i, 60131)),
                Promise.resolve().then(i.bind(i, 3873)),
                Promise.resolve().then(i.bind(i, 41936)),
                Promise.resolve().then(i.bind(i, 32322)),
                Promise.resolve().then(i.bind(i, 69410)),
                Promise.resolve().then(i.bind(i, 80210)),
                Promise.resolve().then(i.bind(i, 91638)),
                Promise.resolve().then(i.bind(i, 86482)),
                Promise.resolve().then(i.bind(i, 70505)),
                Promise.resolve().then(i.bind(i, 67226)),
                Promise.resolve().then(i.bind(i, 85253)),
                Promise.resolve().then(i.bind(i, 21895)),
                Promise.resolve().then(i.bind(i, 67939)),
                Promise.resolve().then(i.bind(i, 78533)),
                Promise.resolve().then(i.bind(i, 50823)),
                Promise.resolve().then(i.bind(i, 56159)),
                Promise.resolve().then(i.bind(i, 33801)),
                Promise.resolve().then(i.t.bind(i, 80799, 23)),
                Promise.resolve().then(i.bind(i, 79438)),
                Promise.resolve().then(i.bind(i, 28751)),
                Promise.resolve().then(i.bind(i, 91441)),
                Promise.resolve().then(i.bind(i, 75481)),
                Promise.resolve().then(i.bind(i, 69546)),
                Promise.resolve().then(i.bind(i, 52625)),
                Promise.resolve().then(i.bind(i, 75502)),
                Promise.resolve().then(i.bind(i, 96072)),
                Promise.resolve().then(i.bind(i, 88634)),
                Promise.resolve().then(i.bind(i, 76807)),
                Promise.resolve().then(i.bind(i, 10945)),
                Promise.resolve().then(i.bind(i, 85845)),
                Promise.resolve().then(i.t.bind(i, 14877, 23)),
                Promise.resolve().then(i.bind(i, 31899)),
                Promise.resolve().then(i.bind(i, 15545)),
                Promise.resolve().then(i.bind(i, 51089)),
                Promise.resolve().then(i.bind(i, 29025)),
                Promise.resolve().then(i.bind(i, 21897)),
                Promise.resolve().then(i.bind(i, 18037)),
                Promise.resolve().then(i.bind(i, 88913)),
                Promise.resolve().then(i.t.bind(i, 18843, 23)),
                Promise.resolve().then(i.bind(i, 15589)),
                Promise.resolve().then(i.bind(i, 93469)),
                Promise.resolve().then(i.bind(i, 30948)),
                Promise.resolve().then(i.bind(i, 95565)),
                Promise.resolve().then(i.bind(i, 9066)),
                Promise.resolve().then(i.bind(i, 88587)),
                Promise.resolve().then(i.bind(i, 20433)),
                Promise.resolve().then(i.bind(i, 47286)),
                Promise.resolve().then(i.bind(i, 70977)),
                Promise.resolve().then(i.bind(i, 27917)),
                Promise.resolve().then(i.bind(i, 58480)),
                Promise.resolve().then(i.bind(i, 60415)),
                Promise.resolve().then(i.bind(i, 63019)),
                Promise.resolve().then(i.bind(i, 22228)),
                Promise.resolve().then(i.bind(i, 37284)),
                Promise.resolve().then(i.bind(i, 7124)),
                Promise.resolve().then(i.bind(i, 93883)),
                Promise.resolve().then(i.bind(i, 60472)),
                Promise.resolve().then(i.bind(i, 91092)),
                Promise.resolve().then(i.bind(i, 36550)),
                Promise.resolve().then(i.bind(i, 12435)),
                Promise.resolve().then(i.bind(i, 1170)),
                Promise.resolve().then(i.bind(i, 98636)),
                Promise.resolve().then(i.bind(i, 96780)),
                Promise.resolve().then(i.bind(i, 47665)),
                Promise.resolve().then(i.bind(i, 34722)),
                Promise.resolve().then(i.bind(i, 23339)),
                Promise.resolve().then(i.bind(i, 76411)),
                Promise.resolve().then(i.bind(i, 55475)),
                Promise.resolve().then(i.bind(i, 23740)),
                Promise.resolve().then(i.bind(i, 2947)),
                Promise.resolve().then(i.bind(i, 92647)),
                Promise.resolve().then(i.bind(i, 39677)),
                Promise.resolve().then(i.bind(i, 32985)),
                Promise.resolve().then(i.bind(i, 80559)),
                Promise.resolve().then(i.bind(i, 1817)),
                Promise.resolve().then(i.bind(i, 47523)),
                Promise.resolve().then(i.bind(i, 70900)),
                Promise.resolve().then(i.bind(i, 11182)),
                Promise.resolve().then(i.bind(i, 95368)),
                Promise.resolve().then(i.bind(i, 12331)),
                Promise.resolve().then(i.bind(i, 52589)),
                Promise.resolve().then(i.bind(i, 83132)),
                Promise.resolve().then(i.bind(i, 7670)),
                Promise.resolve().then(i.bind(i, 395)),
                Promise.resolve().then(i.bind(i, 83543)),
                Promise.resolve().then(i.bind(i, 99303)),
                Promise.resolve().then(i.bind(i, 45648)),
                Promise.resolve().then(i.bind(i, 35042)),
                Promise.resolve().then(i.bind(i, 94311)),
                Promise.resolve().then(i.bind(i, 46650)),
                Promise.resolve().then(i.bind(i, 33405)),
                Promise.resolve().then(i.bind(i, 32101)),
                Promise.resolve().then(i.bind(i, 63329)),
                Promise.resolve().then(i.bind(i, 941)),
                Promise.resolve().then(i.bind(i, 58991)),
                Promise.resolve().then(i.bind(i, 42297)),
                Promise.resolve().then(i.bind(i, 7551)),
                Promise.resolve().then(i.bind(i, 75695)),
                Promise.resolve().then(i.bind(i, 42323)),
                Promise.resolve().then(i.bind(i, 91135)),
                Promise.resolve().then(i.bind(i, 14878)),
                Promise.resolve().then(i.bind(i, 26467)),
                Promise.resolve().then(i.bind(i, 41970)),
                Promise.resolve().then(i.bind(i, 16847)),
                Promise.resolve().then(i.bind(i, 78780)),
                Promise.resolve().then(i.bind(i, 16782)),
                Promise.resolve().then(i.bind(i, 77966)),
                Promise.resolve().then(i.bind(i, 31148)),
                Promise.resolve().then(i.bind(i, 76532)),
                Promise.resolve().then(i.bind(i, 38076)),
                Promise.resolve().then(i.bind(i, 94158)),
                Promise.resolve().then(i.bind(i, 14124)),
                Promise.resolve().then(i.bind(i, 86100)),
                Promise.resolve().then(i.bind(i, 59736)),
                Promise.resolve().then(i.bind(i, 20532)),
                Promise.resolve().then(i.bind(i, 80222)),
                Promise.resolve().then(i.bind(i, 93148)),
                Promise.resolve().then(i.bind(i, 43898)),
                Promise.resolve().then(i.bind(i, 23164)),
                Promise.resolve().then(i.bind(i, 71637)),
                Promise.resolve().then(i.bind(i, 87894)),
                Promise.resolve().then(i.bind(i, 72964)),
                Promise.resolve().then(i.bind(i, 2760)),
                Promise.resolve().then(i.bind(i, 31927)),
                Promise.resolve().then(i.bind(i, 97248)),
                Promise.resolve().then(i.bind(i, 57612)),
                Promise.resolve().then(i.bind(i, 5670)),
                Promise.resolve().then(i.bind(i, 70915)),
                Promise.resolve().then(i.bind(i, 8148)),
                Promise.resolve().then(i.bind(i, 32634)),
                Promise.resolve().then(i.bind(i, 508)),
                Promise.resolve().then(i.bind(i, 36363)),
                Promise.resolve().then(i.bind(i, 15958)),
                Promise.resolve().then(i.bind(i, 78685)),
                Promise.resolve().then(i.bind(i, 34476)),
                Promise.resolve().then(i.bind(i, 60917)),
                Promise.resolve().then(i.bind(i, 62520)),
                Promise.resolve().then(i.bind(i, 21389)),
                Promise.resolve().then(i.bind(i, 85546)),
                Promise.resolve().then(i.bind(i, 80185)),
                Promise.resolve().then(i.bind(i, 38285)),
                Promise.resolve().then(i.bind(i, 792)),
                Promise.resolve().then(i.bind(i, 34291)),
                Promise.resolve().then(i.bind(i, 31299)),
                Promise.resolve().then(i.bind(i, 56209)),
                Promise.resolve().then(i.bind(i, 44162)),
                Promise.resolve().then(i.bind(i, 93427)),
                Promise.resolve().then(i.bind(i, 57861)),
                Promise.resolve().then(i.bind(i, 30615)),
                Promise.resolve().then(i.bind(i, 34990)),
                Promise.resolve().then(i.bind(i, 16395)),
                Promise.resolve().then(i.bind(i, 75020)),
                Promise.resolve().then(i.bind(i, 32746)),
                Promise.resolve().then(i.bind(i, 2552)),
                Promise.resolve().then(i.bind(i, 7323)),
                Promise.resolve().then(i.bind(i, 68270)),
                Promise.resolve().then(i.bind(i, 99525)),
                Promise.resolve().then(i.bind(i, 44276)),
                Promise.resolve().then(i.bind(i, 49452)),
                Promise.resolve().then(i.bind(i, 68834)),
                Promise.resolve().then(i.bind(i, 67484)),
                Promise.resolve().then(i.bind(i, 6987)),
                Promise.resolve().then(i.bind(i, 748)),
                Promise.resolve().then(i.bind(i, 94756)),
                Promise.resolve().then(i.bind(i, 5798)),
                Promise.resolve().then(i.bind(i, 44817)),
                Promise.resolve().then(i.bind(i, 6181)),
                Promise.resolve().then(i.bind(i, 40846)),
                Promise.resolve().then(i.bind(i, 43762)),
                Promise.resolve().then(i.bind(i, 12364)),
                Promise.resolve().then(i.bind(i, 13660)),
                Promise.resolve().then(i.bind(i, 31543)),
                Promise.resolve().then(i.bind(i, 38224)),
                Promise.resolve().then(i.bind(i, 63210)),
                Promise.resolve().then(i.bind(i, 44697)),
                Promise.resolve().then(i.bind(i, 64802)),
                Promise.resolve().then(i.bind(i, 1443)),
                Promise.resolve().then(i.bind(i, 95297)),
                Promise.resolve().then(i.bind(i, 4552)),
                Promise.resolve().then(i.bind(i, 92648)),
                Promise.resolve().then(i.bind(i, 73572)),
                Promise.resolve().then(i.bind(i, 29992)),
                Promise.resolve().then(i.bind(i, 66230)),
                Promise.resolve().then(i.bind(i, 18611)),
                Promise.resolve().then(i.bind(i, 36082)),
                Promise.resolve().then(i.bind(i, 42398)),
                Promise.resolve().then(i.bind(i, 21155)),
                Promise.resolve().then(i.bind(i, 44161)),
                Promise.resolve().then(i.bind(i, 38317)),
                Promise.resolve().then(i.bind(i, 22883)),
                Promise.resolve().then(i.bind(i, 59790)),
                Promise.resolve().then(i.bind(i, 47933)),
                Promise.resolve().then(i.bind(i, 88586)),
                Promise.resolve().then(i.bind(i, 34414)),
                Promise.resolve().then(i.bind(i, 41855)),
                Promise.resolve().then(i.bind(i, 10668)),
                Promise.resolve().then(i.bind(i, 51969)),
                Promise.resolve().then(i.bind(i, 93319)),
                Promise.resolve().then(i.bind(i, 6644)),
                Promise.resolve().then(i.bind(i, 73416)),
                Promise.resolve().then(i.bind(i, 6043)),
                Promise.resolve().then(i.bind(i, 98216)),
                Promise.resolve().then(i.bind(i, 68808)),
                Promise.resolve().then(i.bind(i, 94584)),
                Promise.resolve().then(i.bind(i, 77272)),
                Promise.resolve().then(i.bind(i, 20908)),
                Promise.resolve().then(i.bind(i, 26216)),
                Promise.resolve().then(i.bind(i, 62440)),
                Promise.resolve().then(i.bind(i, 99270)),
                Promise.resolve().then(i.bind(i, 55046)),
                Promise.resolve().then(i.bind(i, 32856)),
                Promise.resolve().then(i.bind(i, 2726)),
                Promise.resolve().then(i.bind(i, 75690)),
                Promise.resolve().then(i.bind(i, 39695)),
                Promise.resolve().then(i.bind(i, 84929)),
                Promise.resolve().then(i.bind(i, 24301)),
                Promise.resolve().then(i.bind(i, 21485)),
                Promise.resolve().then(i.bind(i, 25992)),
                Promise.resolve().then(i.bind(i, 51692)),
                Promise.resolve().then(i.bind(i, 79374)),
                Promise.resolve().then(i.bind(i, 13514)),
                Promise.resolve().then(i.bind(i, 99974)),
                Promise.resolve().then(i.bind(i, 42260)),
                Promise.resolve().then(i.bind(i, 72866)),
                Promise.resolve().then(i.bind(i, 81338)),
                Promise.resolve().then(i.bind(i, 82630)),
                Promise.resolve().then(i.bind(i, 49058)),
                Promise.resolve().then(i.bind(i, 39857)),
                Promise.resolve().then(i.bind(i, 48167)),
                Promise.resolve().then(i.bind(i, 40461)),
                Promise.resolve().then(i.bind(i, 59884)),
                Promise.resolve().then(i.bind(i, 73144)),
                Promise.resolve().then(i.bind(i, 66458)),
                Promise.resolve().then(i.bind(i, 77286)),
                Promise.resolve().then(i.bind(i, 53431)),
                Promise.resolve().then(i.bind(i, 22605)),
                Promise.resolve().then(i.bind(i, 94714)),
                Promise.resolve().then(i.bind(i, 90479)),
                Promise.resolve().then(i.bind(i, 64697)),
                Promise.resolve().then(i.bind(i, 5356)),
                Promise.resolve().then(i.bind(i, 6374)),
                Promise.resolve().then(i.bind(i, 39260)),
                Promise.resolve().then(i.bind(i, 68816)),
                Promise.resolve().then(i.bind(i, 20372)),
                Promise.resolve().then(i.bind(i, 85208)),
                Promise.resolve().then(i.bind(i, 95296)),
                Promise.resolve().then(i.bind(i, 78029)),
                Promise.resolve().then(i.bind(i, 6063)),
                Promise.resolve().then(i.bind(i, 14876)),
                Promise.resolve().then(i.bind(i, 86216)),
                Promise.resolve().then(i.bind(i, 18744)),
                Promise.resolve().then(i.bind(i, 32438)),
                Promise.resolve().then(i.bind(i, 18792)),
                Promise.resolve().then(i.bind(i, 84520)),
                Promise.resolve().then(i.bind(i, 85816)),
                Promise.resolve().then(i.bind(i, 71193)),
                Promise.resolve().then(i.bind(i, 37934)),
                Promise.resolve().then(i.bind(i, 92852)),
                Promise.resolve().then(i.bind(i, 34740)),
                Promise.resolve().then(i.bind(i, 83373)),
                Promise.resolve().then(i.bind(i, 9322)),
                Promise.resolve().then(i.bind(i, 25641)),
                Promise.resolve().then(i.bind(i, 96579)),
                Promise.resolve().then(i.bind(i, 17389)),
                Promise.resolve().then(i.bind(i, 41817)),
                Promise.resolve().then(i.bind(i, 87413)),
                Promise.resolve().then(i.bind(i, 40739)),
                Promise.resolve().then(i.t.bind(i, 60738, 23));
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
        91455: (e, n, i) => {
            'use strict';
            i.d(n, { NotFound: () => c });
            var o = i(62936),
                r = i(79950),
                s = i(19718),
                t = i(26731),
                l = i(5099),
                d = i(85742),
                a = i(20418),
                m = i(42561),
                h = i(85906),
                v = i(44020),
                P = i(88933),
                b = i.n(P);
            let c = (0, s.PA)((e) => {
                let { className: n, title: i, description: s, iconVariant: P = 'musicLogo', iconClassName: c, iconSize: u } = e,
                    { contentRef: g } = (0, m.gKY)(),
                    _ = (0, m.ZpR)(m.Zyd.main.href);
                (0, m.LZB)();
                let { handleNavigateToMain: p } = (0, m.D5F)(_);
                return (
                    (0, m.NBO)(!0),
                    !(function () {
                        let { location: e } = (0, m.Pjs)();
                        (0, v.useEffect)(
                            () => (
                                e.setNotFound(!0),
                                () => {
                                    e.setNotFound(!1);
                                }
                            ),
                            [e],
                        );
                    })(),
                    (0, o.jsxs)('div', {
                        className: (0, r.$)(b().root, { [b().root_desktop]: !g }, n),
                        children: [
                            (0, o.jsx)(h.Lh, { withBackwardFallback: '/', className: b().navigation, withForwardControl: !1 }),
                            (0, o.jsxs)('div', {
                                className: b().content,
                                children: [
                                    (0, o.jsx)(d.Icon, { className: (0, r.$)(b().icon, c), variant: P, size: u }),
                                    (0, o.jsx)(a.Heading, {
                                        className: (0, r.$)(b().title, b().important),
                                        variant: 'h3',
                                        size: 'xs',
                                        children: i || (0, o.jsx)(t.A, { id: 'page-error.page-does-not-exist' }),
                                    }),
                                    (0, o.jsx)(a.Caption, {
                                        className: (0, r.$)(b().text, b().important),
                                        variant: 'span',
                                        type: 'text',
                                        size: 'l',
                                        weight: 'normal',
                                        children: s || (0, o.jsx)(t.A, { id: 'page-error.page-does-not-exist-description' }),
                                    }),
                                    (0, o.jsx)(l.$, {
                                        onClick: p,
                                        className: b().button,
                                        role: 'link',
                                        color: 'secondary',
                                        size: 'l',
                                        radius: 'xxxl',
                                        children: (0, o.jsx)(a.Caption, {
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'm',
                                            children: (0, o.jsx)(t.A, { id: 'navigation.page-main' }),
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
]);
