(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3069],
    {
        12393: (t) => {
            t.exports = { root: 'PostArtists_root__Zxmjq', content: 'PostArtists_content__JzGOH' };
        },
        23404: (t) => {
            t.exports = {
                root: 'PostPage_root__Orhf7',
                scrollableContainer: 'PostPage_scrollableContainer__iV9Bo',
                scrollContainer: 'PostPage_scrollContainer__zrIrH',
                important: 'PostPage_important__qUlED',
                container: 'PostPage_container__orSfz',
                shimmerTitle: 'PostPage_shimmerTitle__EeFCD',
            };
        },
        23615: (t, e, o) => {
            'use strict';
            var s;
            o.d(e, { Q: () => s }),
                (function (t) {
                    (t.ALBUMS = 'albums'), (t.ARTISTS = 'artists'), (t.PLAYLISTS = 'playlists');
                })(s || (s = {}));
        },
        30827: (t) => {
            t.exports = { root: 'PostAlbums_root__u2a1q', content: 'PostAlbums_content__uMSez' };
        },
        42421: (t, e, o) => {
            'use strict';
            o.d(e, { M: () => s.NotFound });
            var s = o(65034);
        },
        46215: (t) => {
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
        48625: (t, e, o) => {
            'use strict';
            o.d(e, { EX: () => g.PostPage, VQ: () => _ });
            var s = o(93064),
                a = o(14287),
                n = o(23615),
                r = o(80156),
                i = o(83909),
                l = o(63695),
                d = o(52733),
                c = o(83252),
                m = o(26433);
            let _ = s.gK
                .compose(
                    s.gK.model('PostPage', {
                        errorStatusCode: s.gK.maybe(s.gK.number),
                        title: s.gK.maybeNull(s.gK.string),
                        promotionType: s.gK.maybeNull(s.gK.enumeration(Object.values(n.Q))),
                        artists: s.gK.maybe(s.gK.array(l.PK)),
                        albums: s.gK.maybe(s.gK.array(r.JC)),
                        playlists: s.gK.maybe(s.gK.array(i.IP)),
                    }),
                    m.XT,
                )
                .views((t) => {
                    let e = {
                        get isLoading() {
                            return t.isNeededToLoad || t.loadingState === c.GuX.PENDING;
                        },
                        get isNotFound() {
                            let e = t.errorStatusCode === a.X1.NOT_FOUND || t.errorStatusCode === a.X1.BAD_REQUEST;
                            return t.isRejected && e;
                        },
                        get isSomethingWrong() {
                            return t.isRejected && !e.isNotFound;
                        },
                    };
                    return e;
                })
                .actions((t) => ({
                    getData: (0, s.L3)(function* (e) {
                        let { promoId: o } = e,
                            { feedResource: n, modelActionsLogger: i } = (0, s._$)(t);
                        if (t.loadingState !== c.GuX.PENDING)
                            try {
                                t.loadingState = c.GuX.PENDING;
                                let e = yield n.getPromotionsById({ promoId: o });
                                (t.title = e.title),
                                    (t.promotionType = e.promotionType),
                                    e.artists && e.artists.length > 0 && (t.artists = (0, s.wg)(e.artists.map(l.dM))),
                                    e.albums && e.albums.length > 0 && (t.albums = (0, s.wg)(e.albums.map(r.pp))),
                                    e.playlists &&
                                        e.playlists.length > 0 &&
                                        (t.playlists = (0, s.wg)(
                                            e.playlists.map((t) => {
                                                let { playlist: e } = t;
                                                return (0, d.jX)(e);
                                            }),
                                        )),
                                    t.loadingState !== c.GuX.IDLE && (t.loadingState = c.GuX.RESOLVE);
                            } catch (e) {
                                i.error(e),
                                    e instanceof a.GX && (e.statusCode === a.X1.NOT_FOUND || e.statusCode === a.X1.BAD_REQUEST) && (t.errorStatusCode = a.X1.NOT_FOUND),
                                    t.loadingState !== c.GuX.IDLE && (t.loadingState = c.GuX.REJECT);
                            }
                    }),
                    reset() {
                        (t.loadingState = c.GuX.IDLE), (t.title = null), (t.artists = (0, s.wg)([])), (t.albums = (0, s.wg)([]));
                    },
                }));
            o(77026);
            var g = o(93685);
        },
        50757: (t) => {
            t.exports = { root: 'PostPlaylists_root__3tea0', content: 'PostPlaylists_content__2fXI5' };
        },
        51892: (t) => {
            t.exports = { root: 'PostShimmer_root__MlLkY', top: 'PostShimmer_top__ySpmZ', bottom: 'PostShimmer_bottom__ajW_P' };
        },
        56170: (t, e, o) => {
            Promise.resolve().then(o.bind(o, 64021));
        },
        63708: (t) => {
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
        64021: (t, e, o) => {
            'use strict';
            o.r(e), o.d(e, { default: () => i });
            var s = o(54486),
                a = o(97396),
                n = o(61910),
                r = o(48625);
            let i = () => {
                let t = (0, a.useSearchParams)().get('promoId');
                return t || (0, a.notFound)(), (0, s.jsx)(n.Suspense, { children: (0, s.jsx)(r.EX, { promoId: t }) });
            };
        },
        65034: (t, e, o) => {
            'use strict';
            o.d(e, { NotFound: () => p });
            var s = o(54486),
                a = o(50420),
                n = o(28303),
                r = o(47713),
                i = o(77881),
                l = o(5956),
                d = o(97800),
                c = o(83252),
                m = o(80585),
                _ = o(61910),
                g = o(46215),
                u = o.n(g);
            let p = (0, n.PA)((t) => {
                let { className: e, title: o, description: n, iconVariant: g = 'musicLogo', iconClassName: p, iconSize: h } = t,
                    { contentRef: x } = (0, c.gKY)(),
                    N = (0, c.ZpR)(c.Zyd.main.href);
                (0, c.LZB)();
                let { handleNavigateToMain: j } = (0, c.D5F)(N);
                return (
                    (0, c.NBO)(!0),
                    !(function () {
                        let { location: t } = (0, c.Pjs)();
                        (0, _.useEffect)(
                            () => (
                                t.setNotFound(!0),
                                () => {
                                    t.setNotFound(!1);
                                }
                            ),
                            [t],
                        );
                    })(),
                    (0, s.jsxs)('div', {
                        className: (0, a.$)(u().root, { [u().root_desktop]: !x }, e),
                        children: [
                            (0, s.jsx)(m.Lh, { withBackwardFallback: '/', className: u().navigation, withForwardControl: !1 }),
                            (0, s.jsxs)('div', {
                                className: u().content,
                                children: [
                                    (0, s.jsx)(l.Icon, { className: (0, a.$)(u().icon, p), variant: g, size: h }),
                                    (0, s.jsx)(d.Heading, {
                                        className: (0, a.$)(u().title, u().important),
                                        variant: 'h3',
                                        size: 'xs',
                                        children: o || (0, s.jsx)(r.A, { id: 'page-error.page-does-not-exist' }),
                                    }),
                                    (0, s.jsx)(d.Caption, {
                                        className: (0, a.$)(u().text, u().important),
                                        variant: 'span',
                                        type: 'text',
                                        size: 'l',
                                        weight: 'normal',
                                        children: n || (0, s.jsx)(r.A, { id: 'page-error.page-does-not-exist-description' }),
                                    }),
                                    (0, s.jsx)(i.$, {
                                        onClick: j,
                                        className: u().button,
                                        role: 'link',
                                        color: 'secondary',
                                        size: 'l',
                                        radius: 'xxxl',
                                        children: (0, s.jsx)(d.Caption, {
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'm',
                                            children: (0, s.jsx)(r.A, { id: 'navigation.page-main' }),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    })
                );
            });
        },
        75312: (t, e, o) => {
            'use strict';
            o.d(e, { SomethingWentWrong: () => h });
            var s = o(54486),
                a = o(50420),
                n = o(28303),
                r = o(61910),
                i = o(43426),
                l = o(47713),
                d = o(77881),
                c = o(5956),
                m = o(97800),
                _ = o(83252),
                g = o(80585),
                u = o(63708),
                p = o.n(u);
            let h = (0, n.PA)((t) => {
                let { className: e, withBackwardControl: o = !0 } = t,
                    { formatMessage: n } = (0, i.A)(),
                    u = n({ id: 'error-messages.something-went-wrong' });
                (0, _.CgZ)(u);
                let { sendRefreshEvent: h } = (0, _.cYT)(),
                    x = (0, r.useCallback)(() => {
                        h(), (window.location.href = _.Zyd.main.href);
                    }, [h]),
                    { contentRef: N } = (0, _.gKY)();
                return (0, s.jsxs)('div', {
                    className: (0, a.$)(p().root, e),
                    children: [
                        o &&
                            (0, s.jsx)(g.Lh, {
                                withBackwardFallback: '/',
                                className: (0, a.$)(p().navigation, { [p().navigation_desktop]: !N }),
                                withForwardControl: !1,
                            }),
                        (0, s.jsxs)('div', {
                            className: (0, a.$)(p().content, { [p().content_shrink]: !o }),
                            children: [
                                (0, s.jsx)(c.Icon, { className: p().icon, variant: 'attention', size: 'xxl' }),
                                (0, s.jsx)(m.Heading, { className: (0, a.$)(p().title, p().important), variant: 'h3', size: 'xs', children: u }),
                                (0, s.jsxs)(m.Caption, {
                                    className: (0, a.$)(p().text, p().important),
                                    variant: 'span',
                                    type: 'text',
                                    size: 'l',
                                    weight: 'normal',
                                    children: [!1, (0, s.jsx)(l.A, { id: 'page-error.try-to-restart-app' })],
                                }),
                                (0, s.jsx)(d.$, {
                                    onClick: x,
                                    className: p().button,
                                    role: 'link',
                                    color: 'secondary',
                                    size: 'l',
                                    radius: 'xxxl',
                                    children: (0, s.jsxs)(m.Caption, {
                                        type: 'controls',
                                        variant: 'span',
                                        size: 'm',
                                        children: [!1, (0, s.jsx)(l.A, { id: 'page-error.restart-app-button' })],
                                    }),
                                }),
                            ],
                        }),
                    ],
                });
            });
        },
        77026: (t, e, o) => {
            'use strict';
            o.d(e, { PostNotFoundPage: () => r });
            var s = o(54486),
                a = o(28303),
                n = o(42421);
            let r = (0, a.PA)(() => (0, s.jsx)(n.M, {}));
        },
        82644: (t, e, o) => {
            'use strict';
            o.d(e, { w: () => s.SomethingWentWrong });
            var s = o(75312);
        },
        93685: (t, e, o) => {
            'use strict';
            o.d(e, { PostPage: () => L });
            var s = o(54486),
                a = o(50420),
                n = o(28303),
                r = o(97396),
                i = o(61910),
                l = o(23615),
                d = o(56231),
                c = o(22674),
                m = o(97800),
                _ = o(82644),
                g = o(33276),
                u = o(83252),
                p = o(80585),
                h = o(51892),
                x = o.n(h);
            let N = () =>
                (0, s.jsxs)('div', {
                    className: x().root,
                    children: [(0, s.jsx)(c.Shimmer, { radius: 'l', className: x().top }), (0, s.jsx)(c.Shimmer, { radius: 'l', className: x().bottom })],
                });
            var j = o(23404),
                b = o.n(j),
                v = o(80156),
                P = o(30827),
                S = o.n(P);
            let y = (0, n.PA)((t) => {
                let { albums: e = [] } = t;
                return (0, s.jsx)('div', {
                    className: S().root,
                    children: (0, s.jsx)('div', {
                        className: S().content,
                        'aria-labelledby': 'post-page-header',
                        tabIndex: 0,
                        children: e.map((t) => (0, s.jsx)(v.aX, { className: S().item, album: t, contentLinesCount: 3 }, t.id)),
                    }),
                });
            });
            var C = o(55616),
                W = o(12393),
                w = o.n(W);
            let F = (0, n.PA)((t) => {
                let { artists: e = [] } = t;
                return (0, s.jsx)('div', {
                    className: w().root,
                    children: (0, s.jsx)('div', {
                        className: w().content,
                        'aria-labelledby': 'post-page-header',
                        tabIndex: 0,
                        children: e.map((t) => (0, s.jsx)(C.ao, { className: w().item, artist: t, contentLinesCount: 3 }, t.id)),
                    }),
                });
            });
            var k = o(83909),
                T = o(50757),
                E = o.n(T);
            let A = (0, n.PA)((t) => {
                    let { playlists: e = [] } = t;
                    return (0, s.jsx)('div', {
                        className: E().root,
                        children: (0, s.jsx)('div', {
                            className: E().content,
                            'aria-labelledby': 'post-page-header',
                            tabIndex: 0,
                            children: e.map((t) => (0, s.jsx)(k.B6, { className: E().item, playlist: t, contentLinesCount: 3 }, t.id)),
                        }),
                    });
                }),
                L = (0, n.PA)((t) => {
                    let { promoId: e } = t,
                        { post: o } = (0, u.Pjs)(),
                        n = (0, u.W6M)(),
                        { contentScrollRef: h, setContentScrollRef: x } = (0, u.gKY)();
                    (0, i.useEffect)(
                        () => () => {
                            o.reset();
                        },
                        [o],
                    ),
                        o.isNotFound && (0, r.notFound)(),
                        (0, u.Jzs)(o.isResolved);
                    let j = (0, i.useMemo)(() => {
                        if (o.isLoading) return (0, s.jsx)(N, {});
                        switch (o.promotionType) {
                            case l.Q.ARTISTS:
                                return (0, s.jsx)(F, { artists: o.artists });
                            case l.Q.ALBUMS:
                                return (0, s.jsx)(y, { albums: o.albums });
                            case l.Q.PLAYLISTS:
                                return (0, s.jsx)(A, { playlists: o.playlists });
                            default:
                                (0, r.notFound)();
                        }
                    }, [o.albums, o.artists, o.isLoading, o.playlists, o.promotionType]);
                    return (e && o.isNeededToLoad && (0, i.use)(o.getData({ promoId: e })), o.isSomethingWrong)
                        ? (0, s.jsx)(_.w, {})
                        : (0, s.jsx)(u.nVz, {
                              pageId: u._Q$.POST,
                              children: (0, s.jsx)(g.hO, {
                                  scrollElement: h,
                                  outerTitle: o.title || void 0,
                                  children: (0, s.jsxs)('div', {
                                      className: b().root,
                                      children: [
                                          (0, s.jsx)(p.Y9, {
                                              variant: p.Vw.TEXT,
                                              withForwardControl: !1,
                                              withBackwardControl: n.canBack,
                                              children: o.title
                                                  ? (0, s.jsx)(m.Heading, {
                                                        id: 'post-header',
                                                        variant: 'h2',
                                                        weight: 'bold',
                                                        size: 'xl',
                                                        lineClamp: 1,
                                                        children: o.title,
                                                    })
                                                  : (0, s.jsx)(c.Shimmer, { className: b().shimmerTitle, radius: 'l' }),
                                          }),
                                          (0, s.jsx)(d.N, {
                                              containerClassName: (0, a.$)(b().scrollContainer, b().important),
                                              className: b().scrollableContainer,
                                              ref: x,
                                              children: (0, s.jsx)('div', { className: b().container, children: j }),
                                          }),
                                      ],
                                  }),
                              }),
                          });
                });
        },
    },
    (t) => {
        t.O(0, [6041, 9834, 5355, 1023, 2398, 8748, 1776, 2036, 1311, 7764, 6706, 5148, 3005, 3252, 585, 6433, 3286, 156, 6231, 4826, 3909, 5843, 3290, 7358], () =>
            t((t.s = 56170)),
        ),
            (_N_E = t.O());
    },
]);
