(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3069],
    {
        3291: (t) => {
            t.exports = {
                description: 'HorizontalPlaylistCard_description__KYHZF',
                likesCount: 'HorizontalPlaylistCard_likesCount__rgUhr',
                tracksCount: 'HorizontalPlaylistCard_tracksCount__ZdjzM',
                icon: 'HorizontalPlaylistCard_icon__LHymu',
            };
        },
        7103: (t, e, i) => {
            'use strict';
            i.d(e, { r: () => l });
            var a = i(44020),
                s = i(47480);
            let l = (t) => {
                let { formatMessage: e } = (0, s.A)();
                return (0, a.useMemo)(() => {
                    let i = '';
                    t.isLiked && !t.actualLikesCount
                        ? (i = e({ id: 'entity-names.has-your-like' }))
                        : 'number' == typeof t.actualLikesCount &&
                          (i =
                              t.actualLikesCount > 0
                                  ? e({ id: 'entity-names.likes-counter' }, { counter: t.actualLikesCount })
                                  : e({ id: 'entity-names.likes-counter-empty' }));
                    let a = e({ id: 'entity-names.playlist-name' }, { playlistName: t.title });
                    return ''.concat(a, ' ').concat(i);
                }, [e, t]);
            };
        },
        9066: (t, e, i) => {
            'use strict';
            i.d(e, { HorizontalPlaylistCard: () => b });
            var a = i(62936),
                s = i(79950),
                l = i(19718),
                n = i(44020),
                r = i(47480),
                o = i(26731),
                c = i(23480),
                d = i(8669),
                u = i(81959),
                m = i(59935),
                _ = i(49923),
                p = i(85742),
                y = i(20418),
                g = i(42561),
                x = i(85906),
                v = i(7103),
                h = i(25358),
                P = i(71318),
                C = i.n(P);
            let k = (0, l.PA)((t) => {
                var e;
                let { className: i, playlist: l, likeIconSize: r = 'xxs' } = t,
                    { user: o, trailer: d } = (0, g.Pjs)(),
                    u = (0, g.PT7)(),
                    { sendLikeSearchFeedback: _ } = (0, g.zEv)(),
                    y = (0, h.KX)(l),
                    [v, P] = (0, n.useState)(!1),
                    k = (0, m.c)(async () => {
                        v || l.isLiked || (P(!0), null == _ || _()), await y();
                    }),
                    j = (0, g.Ftl)(),
                    N = (0, m.c)((t) => {
                        if ((t.stopPropagation(), u())) return void t.preventDefault();
                        d.openPlaylistTrailer(l.id), j(c.ky.Playlist, l.id);
                    });
                return (0, a.jsxs)('div', {
                    className: (0, s.$)(C().root, C().controls, i, { [C().controls_disabled]: !l.isAvailable }),
                    children: [
                        l.isAvailable &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)(x.aQ, {
                                        fallback: (0, a.jsx)(x.cy, {
                                            size: 'xs',
                                            iconSize: r,
                                            className: (0, s.$)(C().item, C().likeIcon),
                                            isLiked: l.isLiked,
                                            onClick: k,
                                            disabled: !o.isAuthorized,
                                        }),
                                    }),
                                    (null == (e = l.trailer) ? void 0 : e.isAvailable) &&
                                        (0, a.jsx)(x.aQ, {
                                            fallback: (0, a.jsx)(x.kJ, {
                                                className: (0, s.$)(C().item, C().trailerIcon),
                                                iconSize: 'xs',
                                                variant: 'text',
                                                onClick: N,
                                                withRipple: !1,
                                            }),
                                        }),
                                ],
                            }),
                        (0, a.jsx)('div', {
                            className: (0, s.$)(C().item, C().item_buttonArrow),
                            children: (0, a.jsx)(p.Icon, { className: x.$f.buttonArrow, variant: 'arrowRight', size: 'xs' }),
                        }),
                    ],
                });
            });
            var j = i(3291),
                N = i.n(j);
            let b = (0, l.PA)((t) => {
                let { className: e, playlist: i, pageId: l, coverClassName: h, playButtonIconSize: P, likeIconSize: C } = t,
                    { ref: j, intersectionPropertyId: b } = (0, g.nMI)(),
                    { from: L } = (0, g.fyy)({ pageId: l }),
                    [f, A] = (0, n.useState)(!1),
                    S = (0, g.brA)(),
                    K = (0, v.r)(i),
                    T = i.title || '',
                    { formatMessage: w, formatNumber: B } = (0, r.A)(),
                    F = (0, g.PT7)(),
                    { sendNavigateSearchFeedback: E, sendPlaySearchFeedback: I } = (0, g.zEv)(),
                    z = (0, g.NKK)(),
                    {
                        paywall: { modal: O },
                    } = (0, g.Pjs)(),
                    R = (0, g.NPu)(),
                    {
                        isPlaying: W,
                        isCurrent: $,
                        togglePlay: M,
                    } = (0, g.Dx4)({ playContextParams: { contextData: { type: u.K.Playlist, meta: { id: i.id, uuid: i.uuid }, from: L }, loadContextMeta: !0 } }),
                    D = (0, g.ZpR)(i.url),
                    X = (0, m.c)((t) => {
                        null == E || E(), z({ to: c.QT.PlaylistScreen }), t.preventDefault(), D(t);
                    }),
                    Y = (0, m.c)(() => {
                        if (!F()) {
                            if (R) return void O.open();
                            f || W || (A(!0), null == I || I()), M(), S(!W);
                        }
                    }),
                    U = (0, m.c)((t) => {
                        (0, _.P)(t, x.$f.ripple), X(t);
                    }),
                    Z = (0, m.c)((t) => {
                        t.stopPropagation(), X(t);
                    }),
                    H = (0, n.useCallback)(
                        (t) =>
                            (0, a.jsx)(x.q1, {
                                isAvailable: i.isAvailable,
                                isDisliked: !1,
                                coverUri: i.coverUri,
                                title: T,
                                className: (0, s.$)(x.$f.playButtonCell, h),
                                alt: w({ id: 'entity-names.playlist-name' }, { playlistName: T }),
                                radius: 'xs',
                                ...t,
                            }),
                        [i, T, h, w],
                    ),
                    q = null == H ? void 0 : H({ onPlayButtonClick: Y, isPlaying: W, isCurrent: $, playButtonIconSize: P }),
                    G = (0, n.useMemo)(
                        () =>
                            i.url && i.isAvailable
                                ? (0, a.jsx)(x.N_, { className: (0, s.$)(x.$f.text, x.$f.titleLink), href: i.url, onClick: Z, children: T })
                                : (0, a.jsx)(y.Caption, { className: (0, s.$)(x.$f.text, x.$f.titleText), size: 'm', variant: 'div', type: 'text', children: T }),
                        [Z, i.isAvailable, i.url, T],
                    ),
                    Q = (0, n.useMemo)(() => {
                        if (void 0 === i.actualLikesCount || void 0 === i.tracksCount) return;
                        let t = (0, a.jsx)(y.Caption, { variant: 'span', size: 'm', weight: 'medium', 'aria-hidden': !0, children: '•' }),
                            e = i.isLiked ? 'likedVariant' : 'likeVariant',
                            s = ''.concat(K, ' ').concat(w({ id: 'entity-names.tracks-count' }, { value: i.tracksCount }));
                        return (0, a.jsxs)('div', {
                            className: N().description,
                            'aria-label': s,
                            children: [
                                (0, a.jsxs)('div', {
                                    className: N().likesCount,
                                    'aria-hidden': !0,
                                    children: [
                                        (0, a.jsx)(p.Icon, { className: N().icon, variant: e, size: 'xxs' }),
                                        (0, a.jsx)(y.Caption, { variant: 'span', size: 'm', weight: 'medium', children: B(i.actualLikesCount) }),
                                    ],
                                }),
                                (0, a.jsxs)('div', {
                                    className: N().tracksCount,
                                    'aria-hidden': !0,
                                    children: [
                                        t,
                                        (0, a.jsx)(y.Caption, {
                                            variant: 'span',
                                            size: 'm',
                                            weight: 'medium',
                                            children: (0, a.jsx)(o.A, { id: 'entity-names.tracks-count', values: { value: B(i.tracksCount) } }),
                                        }),
                                    ],
                                }),
                            ],
                        });
                    }, [w, B, K, i.actualLikesCount, i.isLiked, i.tracksCount]);
                return (0, a.jsxs)(x.Cj, {
                    ref: j,
                    'data-intersection-property-id': b,
                    className: (0, s.$)(x.$f.root, { [x.$f.root_disabled]: !i.isAvailable }, e),
                    'aria-label': i.title || w({ id: 'entity-names.playlist' }),
                    onClick: U,
                    ...(0, d.Am)(d.Kq.playlist.HORIZONTAL_PLAYLIST_CARD),
                    children: [q, (0, a.jsx)(x.ro, { isDisabled: !i.isAvailable, title: G, description: Q }), (0, a.jsx)(k, { playlist: i, likeIconSize: C })],
                });
            });
        },
        9939: (t, e, i) => {
            'use strict';
            i.d(e, { M: () => a.NotFound });
            var a = i(91455);
        },
        20433: (t, e, i) => {
            'use strict';
            i.d(e, { PlaylistsCarousel: () => d });
            var a = i(62936),
                s = i(44020),
                l = i(23480),
                n = i(42561),
                r = i(85906),
                o = i(88587);
            let c = (t) => {
                    let {
                            forwardRef: e,
                            isShimmerVisible: i,
                            isShimmerActive: c,
                            title: d,
                            description: u,
                            playlists: m,
                            containerClassName: _,
                            className: p,
                            headerClassName: y,
                            viewAllActionLink: g,
                            headingVariant: x,
                            shouldSendAnalyticsOnLoaded: v,
                            ...h
                        } = t,
                        P = (0, n.fBs)();
                    return (
                        (0, s.useEffect)(() => {
                            v && !i && P();
                        }, [i, P, v]),
                        (0, a.jsx)(r.OY, {
                            isShimmerVisible: i,
                            isShimmerActive: c,
                            className: p,
                            headerClassName: y,
                            containerClassName: _,
                            ref: e,
                            title: d,
                            description: u,
                            viewAllActionLink: g,
                            headingVariant: x,
                            ...h,
                            children:
                                null == m
                                    ? void 0
                                    : m.map((t, e) =>
                                          (0, a.jsx)(
                                              n.Bki,
                                              {
                                                  objectType: l.ky.Playlist,
                                                  objectId: t.id,
                                                  objectPosX: e + 1,
                                                  objectPosY: 1,
                                                  objectsCount: m.length,
                                                  children: (0, a.jsx)(o.PlaylistCard, { playlist: t, contentLinesCount: 3 }),
                                              },
                                              t.key,
                                          ),
                                      ),
                        })
                    );
                },
                d = (0, s.forwardRef)((t, e) => (0, a.jsx)(c, { forwardRef: e, ...t }));
        },
        26499: (t) => {
            t.exports = { root: 'PostPlaylists_root__3tea0', content: 'PostPlaylists_content__2fXI5' };
        },
        32679: (t) => {
            t.exports = { root: 'PostArtists_root__Zxmjq', content: 'PostArtists_content__JzGOH' };
        },
        36118: (t, e, i) => {
            'use strict';
            i.d(e, { SomethingWentWrong: () => g });
            var a = i(62936),
                s = i(79950),
                l = i(19718),
                n = i(44020),
                r = i(47480),
                o = i(26731),
                c = i(5099),
                d = i(85742),
                u = i(20418),
                m = i(42561),
                _ = i(85906),
                p = i(52166),
                y = i.n(p);
            let g = (0, l.PA)((t) => {
                let { className: e, withBackwardControl: i = !0 } = t,
                    { formatMessage: l } = (0, r.A)(),
                    p = l({ id: 'error-messages.something-went-wrong' });
                (0, m.CgZ)(p);
                let { sendRefreshEvent: g } = (0, m.cYT)(),
                    x = (0, n.useCallback)(() => {
                        g(), (window.location.href = m.Zyd.main.href);
                    }, [g]),
                    { contentRef: v } = (0, m.gKY)();
                return (0, a.jsxs)('div', {
                    className: (0, s.$)(y().root, e),
                    children: [
                        i &&
                            (0, a.jsx)(_.Lh, {
                                withBackwardFallback: '/',
                                className: (0, s.$)(y().navigation, { [y().navigation_desktop]: !v }),
                                withForwardControl: !1,
                            }),
                        (0, a.jsxs)('div', {
                            className: (0, s.$)(y().content, { [y().content_shrink]: !i }),
                            children: [
                                (0, a.jsx)(d.Icon, { className: y().icon, variant: 'attention', size: 'xxl' }),
                                (0, a.jsx)(u.Heading, { className: (0, s.$)(y().title, y().important), variant: 'h3', size: 'xs', children: p }),
                                (0, a.jsxs)(u.Caption, {
                                    className: (0, s.$)(y().text, y().important),
                                    variant: 'span',
                                    type: 'text',
                                    size: 'l',
                                    weight: 'normal',
                                    children: [!1, (0, a.jsx)(o.A, { id: 'page-error.try-to-restart-app' })],
                                }),
                                (0, a.jsx)(c.$, {
                                    onClick: x,
                                    className: y().button,
                                    role: 'link',
                                    color: 'secondary',
                                    size: 'l',
                                    radius: 'xxxl',
                                    children: (0, a.jsxs)(u.Caption, {
                                        type: 'controls',
                                        variant: 'span',
                                        size: 'm',
                                        children: [!1, (0, a.jsx)(o.A, { id: 'page-error.restart-app-button' })],
                                    }),
                                }),
                            ],
                        }),
                    ],
                });
            });
        },
        37416: (t, e, i) => {
            'use strict';
            i.d(e, { PostNotFoundPage: () => n });
            var a = i(62936),
                s = i(19718),
                l = i(9939);
            let n = (0, s.PA)(() => (0, a.jsx)(l.M, {}));
        },
        40507: (t) => {
            t.exports = {
                root: 'PlaylistCard_root__i3pR4',
                controls: 'PlaylistCard_controls__Ej8Rz',
                cover: 'PlaylistCard_cover__tpK5L',
                coverBlock: 'PlaylistCard_coverBlock__1slsN',
                image: 'PlaylistCard_image__Li6oy',
                titleLink: 'PlaylistCard_titleLink__H8qEc',
                artists: 'PlaylistCard_artists__HtVIF',
                artistLink: 'PlaylistCard_artistLink__jx3KB',
                playButton: 'PlaylistCard_playButton__eaduk',
                likeButton: 'PlaylistCard_likeButton__RYXJz',
                menuButton: 'PlaylistCard_menuButton__jFcWr',
                pinButton: 'PlaylistCard_pinButton__jhWnL',
                trailerButton: 'PlaylistCard_trailerButton__Qjg_U',
                control: 'PlaylistCard_control__73YUq',
            };
        },
        40856: (t, e, i) => {
            'use strict';
            i.d(e, { EX: () => _.PostPage, VQ: () => m });
            var a = i(51606),
                s = i(14525),
                l = i(99877),
                n = i(90914),
                r = i(79670),
                o = i(81628),
                c = i(25358),
                d = i(42561),
                u = i(54690);
            let m = a.gK
                .compose(
                    a.gK.model('PostPage', {
                        errorStatusCode: a.gK.maybe(a.gK.number),
                        title: a.gK.maybeNull(a.gK.string),
                        promotionType: a.gK.maybeNull(a.gK.enumeration(Object.values(l.Q))),
                        artists: a.gK.maybe(a.gK.array(o.PK)),
                        albums: a.gK.maybe(a.gK.array(n.JC)),
                        playlists: a.gK.maybe(a.gK.array(r.IP)),
                    }),
                    u.XT,
                )
                .views((t) => {
                    let e = {
                        get isLoading() {
                            return t.isNeededToLoad || t.loadingState === d.GuX.PENDING;
                        },
                        get isNotFound() {
                            let e = t.errorStatusCode === s.X1.NOT_FOUND || t.errorStatusCode === s.X1.BAD_REQUEST;
                            return t.isRejected && e;
                        },
                        get isSomethingWrong() {
                            return t.isRejected && !e.isNotFound;
                        },
                    };
                    return e;
                })
                .actions((t) => ({
                    getData: (0, a.L3)(function* (e) {
                        let { promoId: i } = e,
                            { feedResource: l, modelActionsLogger: r } = (0, a._$)(t);
                        if (t.loadingState !== d.GuX.PENDING)
                            try {
                                t.loadingState = d.GuX.PENDING;
                                let e = yield l.getPromotionsById({ promoId: i });
                                (t.title = e.title),
                                    (t.promotionType = e.promotionType),
                                    e.artists && e.artists.length > 0 && (t.artists = (0, a.wg)(e.artists.map(o.dM))),
                                    e.albums && e.albums.length > 0 && (t.albums = (0, a.wg)(e.albums.map(n.pp))),
                                    e.playlists &&
                                        e.playlists.length > 0 &&
                                        (t.playlists = (0, a.wg)(
                                            e.playlists.map((t) => {
                                                let { playlist: e } = t;
                                                return (0, c.jX)(e);
                                            }),
                                        )),
                                    t.loadingState !== d.GuX.IDLE && (t.loadingState = d.GuX.RESOLVE);
                            } catch (e) {
                                r.error(e),
                                    e instanceof s.GX && (e.statusCode === s.X1.NOT_FOUND || e.statusCode === s.X1.BAD_REQUEST) && (t.errorStatusCode = s.X1.NOT_FOUND),
                                    t.loadingState !== d.GuX.IDLE && (t.loadingState = d.GuX.REJECT);
                            }
                    }),
                    reset() {
                        (t.loadingState = d.GuX.IDLE), (t.title = null), (t.artists = (0, a.wg)([])), (t.albums = (0, a.wg)([]));
                    },
                }));
            i(37416);
            var _ = i(56617);
        },
        52166: (t) => {
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
        56617: (t, e, i) => {
            'use strict';
            i.d(e, { PostPage: () => B });
            var a = i(62936),
                s = i(79950),
                l = i(19718),
                n = i(69526),
                r = i(44020),
                o = i(99877),
                c = i(14501),
                d = i(30388),
                u = i(20418),
                m = i(65438),
                _ = i(92229),
                p = i(42561),
                y = i(85906),
                g = i(63622),
                x = i.n(g);
            let v = () =>
                (0, a.jsxs)('div', {
                    className: x().root,
                    children: [(0, a.jsx)(d.Shimmer, { radius: 'l', className: x().top }), (0, a.jsx)(d.Shimmer, { radius: 'l', className: x().bottom })],
                });
            var h = i(92110),
                P = i.n(h),
                C = i(90914),
                k = i(99793),
                j = i.n(k);
            let N = (0, l.PA)((t) => {
                let { albums: e = [] } = t;
                return (0, a.jsx)('div', {
                    className: j().root,
                    children: (0, a.jsx)('div', {
                        className: j().content,
                        'aria-labelledby': 'post-page-header',
                        tabIndex: 0,
                        children: e.map((t) => (0, a.jsx)(C.aX, { className: j().item, album: t, contentLinesCount: 3 }, t.id)),
                    }),
                });
            });
            var b = i(11334),
                L = i(32679),
                f = i.n(L);
            let A = (0, l.PA)((t) => {
                let { artists: e = [] } = t;
                return (0, a.jsx)('div', {
                    className: f().root,
                    children: (0, a.jsx)('div', {
                        className: f().content,
                        'aria-labelledby': 'post-page-header',
                        tabIndex: 0,
                        children: e.map((t) => (0, a.jsx)(b.ao, { className: f().item, artist: t, contentLinesCount: 3 }, t.id)),
                    }),
                });
            });
            var S = i(79670),
                K = i(26499),
                T = i.n(K);
            let w = (0, l.PA)((t) => {
                    let { playlists: e = [] } = t;
                    return (0, a.jsx)('div', {
                        className: T().root,
                        children: (0, a.jsx)('div', {
                            className: T().content,
                            'aria-labelledby': 'post-page-header',
                            tabIndex: 0,
                            children: e.map((t) => (0, a.jsx)(S.B6, { className: T().item, playlist: t, contentLinesCount: 3 }, t.id)),
                        }),
                    });
                }),
                B = (0, l.PA)((t) => {
                    let { promoId: e } = t,
                        { post: i } = (0, p.Pjs)(),
                        l = (0, p.W6M)(),
                        { contentScrollRef: g, setContentScrollRef: x } = (0, p.gKY)();
                    (0, r.useEffect)(
                        () => () => {
                            i.reset();
                        },
                        [i],
                    ),
                        i.isNotFound && (0, n.notFound)(),
                        (0, p.Jzs)(i.isResolved);
                    let h = (0, r.useMemo)(() => {
                        if (i.isLoading) return (0, a.jsx)(v, {});
                        switch (i.promotionType) {
                            case o.Q.ARTISTS:
                                return (0, a.jsx)(A, { artists: i.artists });
                            case o.Q.ALBUMS:
                                return (0, a.jsx)(N, { albums: i.albums });
                            case o.Q.PLAYLISTS:
                                return (0, a.jsx)(w, { playlists: i.playlists });
                            default:
                                (0, n.notFound)();
                        }
                    }, [i.albums, i.artists, i.isLoading, i.playlists, i.promotionType]);
                    return (e && i.isNeededToLoad && (0, r.use)(i.getData({ promoId: e })), i.isSomethingWrong)
                        ? (0, a.jsx)(m.w, {})
                        : (0, a.jsx)(p.nVz, {
                              pageId: p._Q$.POST,
                              children: (0, a.jsx)(_.hO, {
                                  scrollElement: g,
                                  outerTitle: i.title || void 0,
                                  children: (0, a.jsxs)('div', {
                                      className: P().root,
                                      children: [
                                          (0, a.jsx)(y.Y9, {
                                              variant: y.Vw.TEXT,
                                              withForwardControl: !1,
                                              withBackwardControl: l.canBack,
                                              children: i.title
                                                  ? (0, a.jsx)(u.Heading, {
                                                        id: 'post-header',
                                                        variant: 'h2',
                                                        weight: 'bold',
                                                        size: 'xl',
                                                        lineClamp: 1,
                                                        children: i.title,
                                                    })
                                                  : (0, a.jsx)(d.Shimmer, { className: P().shimmerTitle, radius: 'l' }),
                                          }),
                                          (0, a.jsx)(c.N, {
                                              containerClassName: (0, s.$)(P().scrollContainer, P().important),
                                              className: P().scrollableContainer,
                                              ref: x,
                                              children: (0, a.jsx)('div', { className: P().container, children: h }),
                                          }),
                                      ],
                                  }),
                              }),
                          });
                });
        },
        63622: (t) => {
            t.exports = { root: 'PostShimmer_root__MlLkY', top: 'PostShimmer_top__ySpmZ', bottom: 'PostShimmer_bottom__ajW_P' };
        },
        64715: (t, e, i) => {
            'use strict';
            i.r(e), i.d(e, { default: () => r });
            var a = i(62936),
                s = i(69526),
                l = i(44020),
                n = i(40856);
            let r = () => {
                let t = (0, s.useSearchParams)().get('promoId');
                return t || (0, s.notFound)(), (0, a.jsx)(l.Suspense, { children: (0, a.jsx)(n.EX, { promoId: t }) });
            };
        },
        65438: (t, e, i) => {
            'use strict';
            i.d(e, { w: () => a.SomethingWentWrong });
            var a = i(36118);
        },
        71318: (t) => {
            t.exports = {
                card_root: 'HorizontalCardContainer_root__YoAAP',
                root: 'ControlsBar_root__mf9o_',
                item: 'ControlsBar_item__4YJMp',
                item_buttonArrow: 'ControlsBar_item_buttonArrow__9hTqa',
                controls: 'ControlsBar_controls__DcFpX',
                likeIcon: 'ControlsBar_likeIcon__g8y02',
                trailerIcon: 'ControlsBar_trailerIcon__iH6eY',
                controls_disabled: 'ControlsBar_controls_disabled___hlf6',
            };
        },
        73611: (t, e, i) => {
            Promise.resolve().then(i.bind(i, 64715));
        },
        79670: (t, e, i) => {
            'use strict';
            i.d(e, {
                pA: () => C.EmptyPlaylistBlock,
                vf: () => k.HorizontalPlaylistCard,
                B6: () => j.PlaylistCard,
                BL: () => h,
                IP: () => P,
                EC: () => N.PlaylistsCarousel,
                bk: () => l,
                ZC: () => c,
                Ew: () => u,
                pd: () => _,
            });
            var a = i(51606),
                s = i(42561);
            let l = (t) => {
                var e, i;
                let { playlist: l, generatedPlaylistType: n, likesCount: r, trailer: o, tracksCount: c } = t;
                return (0, a.wg)({
                    isAvailable: null == (i = l.available) || i,
                    uuid: l.playlistUuid,
                    title: l.title,
                    uid: l.uid,
                    kind: l.kind,
                    coverUri: null == (e = l.cover) ? void 0 : e.uri,
                    generatedPlaylistType: n,
                    likesCount: r,
                    tracksCount: c,
                    trailer: (0, s.mxW)(o),
                });
            };
            var n = i(69526),
                r = i(44020);
            (0, r.cache)(async (t, e) => {
                var i;
                let a;
                try {
                    let { container: i, backendHostTld: l, locale: n, host: r, fullUrl: o, isRSC: c, requestUrl: d } = await (0, s.IhE)();
                    if (c) return { playlist: void 0, backendHostTld: l, locale: n, host: r, fullUrl: o, requestUrl: d };
                    let u = i.get(s._19);
                    a = {
                        playlist: await u.getPlaylistWithTracksIds({ userId: t, playlistKind: e, resumeStream: !1 }),
                        backendHostTld: l,
                        locale: n,
                        host: r,
                        fullUrl: o,
                        requestUrl: d,
                    };
                } catch (t) {
                    return (0, s.tfF)(t, () => ({ playlist: void 0, ...(0, s.Bj3)() }));
                }
                return (null == (i = a.playlist) ? void 0 : i.error) === 'not-found' && (0, n.notFound)(), a;
            }),
                (0, r.cache)(async (t) => {
                    var e;
                    let i;
                    (0, s.sU0)(t) || (0, n.notFound)();
                    try {
                        let { container: e, backendHostTld: a, locale: l, host: n, fullUrl: r, isRSC: o, requestUrl: c } = await (0, s.IhE)();
                        if (o) return { playlist: void 0, backendHostTld: a, locale: l, host: n, fullUrl: r, requestUrl: c };
                        let d = e.get(s.qNr);
                        i = {
                            playlist: await d.getPlaylist({ playlistUuid: t, resumeStream: !1, richTracks: !1 }),
                            backendHostTld: a,
                            locale: l,
                            host: n,
                            fullUrl: r,
                            requestUrl: c,
                        };
                    } catch (t) {
                        return (0, s.tfF)(t, () => ({ playlist: void 0, ...(0, s.Bj3)() }));
                    }
                    return (null == (e = i.playlist) ? void 0 : e.error) === 'not-found' && (0, n.notFound)(), i;
                });
            var o = i(25358);
            let c = (t) =>
                (0, a.wg)({
                    ...(0, o.jX)(t),
                    owner: t.owner ? ((t) => ({ uid: t.uid, login: t.login, name: t.name, sex: t.sex, verified: t.verified }))(t.owner) : void 0,
                    description: t.description,
                    tags: t.tags,
                    modified: t.modified,
                    madeFor: t.madeFor ? ((t) => (0, a.wg)({ caseForms: t.caseForms ? (0, s.NH4)(t.caseForms) : null }))(t.madeFor) : null,
                });
            var d = i(81628);
            let u = (t) => {
                var e, i;
                return (0, a.wg)({ ...(0, o.jX)(t), artists: null != (i = null == t || null == (e = t.artists) ? void 0 : e.map(d.dM)) ? i : [] });
            };
            var m = i(43026);
            let _ = (t) => {
                var e, i;
                return (0, a.wg)({ ...(0, o.jX)(t), tracks: null != (i = null == t || null == (e = t.tracks) ? void 0 : e.map(m.Rw)) ? i : [] });
            };
            var p = i(54690);
            let y = a.gK.model('PlaylistOwner', { caseForms: a.gK.maybeNull(p.lg) });
            var g = i(78980);
            let x = a.gK.model('PlaylistOwner', {
                    uid: a.gK.number,
                    login: a.gK.string,
                    name: a.gK.string,
                    sex: a.gK.enumeration(Object.values(g.U)),
                    verified: a.gK.boolean,
                }),
                v = a.gK.model('PlaylistTag', { id: a.gK.string, value: a.gK.string }),
                h = o.$o
                    .props({
                        owner: a.gK.maybe(x),
                        modified: a.gK.string,
                        description: a.gK.maybe(a.gK.string),
                        tags: a.gK.maybeNull(a.gK.array(v)),
                        madeFor: a.gK.maybeNull(y),
                    })
                    .views((t) => ({
                        get seeds() {
                            var e;
                            return ['playlist:'.concat(null == (e = t.owner) ? void 0 : e.login, '_').concat(t.kind)];
                        },
                        get tagsString() {
                            let { experiments: e } = (0, a.Zn)(t);
                            if (!e.checkExperiment(s.zal.WebEditorsFeatures, 'on') || !Array.isArray(t.tags) || !t.tags.length) return null;
                            return t.tags.map((t) => t.value).join(', ');
                        },
                    }))
                    .actions((t) => ({
                        changeDescription: (0, a.L3)(function* (e) {
                            if (!(0, a._n)(t)) return s.FlZ.ERROR;
                            if (t.description === e) return s.FlZ.OK;
                            if (e.length > o.iz) return s.FlZ.ERROR;
                            let { usersResource: i, modelActionsLogger: l } = (0, a._$)(t);
                            if (t.canUserChange) {
                                let a = t.description;
                                t.description = e;
                                try {
                                    let a = yield i.changePlaylistDescription({ description: e, userId: t.uid, playlistKind: t.kind });
                                    return (t.description = a.description), s.FlZ.OK;
                                } catch (e) {
                                    (t.description = a), l.error(e);
                                }
                            }
                            return s.FlZ.ERROR;
                        }),
                        changePlaylistCover: (0, a.L3)(function* (e) {
                            if (!(0, a._n)(t)) return s.FlZ.ERROR;
                            let { usersResource: i, modelActionsLogger: l } = (0, a._$)(t);
                            try {
                                let a = yield i.uploadPlaylistCover({ userId: t.uid, formData: e, playlistKind: t.kind });
                                return (t.coverUri = a.cover.uri), s.FlZ.OK;
                            } catch (t) {
                                l.error(t);
                            }
                            return s.FlZ.ERROR;
                        }),
                    }))
                    .named('PlaylistMeta'),
                P = o.Zq.props({ artists: a.gK.maybe(a.gK.array(d.PK)) });
            var C = i(95565),
                k = i(9066),
                j = i(88587),
                N = i(20433);
        },
        88587: (t, e, i) => {
            'use strict';
            i.d(e, { PlaylistCard: () => f });
            var a = i(62936),
                s = i(79950),
                l = i(19718),
                n = i(44020),
                r = i(47480),
                o = i(23480),
                c = i(8669),
                d = i(81959),
                u = i(59935),
                m = i(60188),
                _ = i(16258),
                p = i(85742),
                y = i(56721),
                g = i(20418),
                x = i(81628),
                v = i(25358),
                h = i(42561),
                P = i(85906),
                C = i(7103),
                k = i(64304),
                j = i(35250);
            let N = (0, l.PA)((t) => {
                var e;
                let { playlist: i, onOpenChange: s, open: l, ...n } = t,
                    { shouldShowBuySubscriptionModal: d, showBuySubscriptionModal: m } = (0, h.qBP)(),
                    {
                        experiments: _,
                        settings: { isMobile: p },
                        trailer: y,
                        user: g,
                    } = (0, h.Pjs)(),
                    x = (0, v.KX)(i),
                    C = (0, v.A7)(i),
                    N = (0, h.Ftl)(),
                    { formatMessage: b } = (0, r.A)(),
                    L = (0, h.PT7)(),
                    f = _.checkExperiment(h.zal.WebEditorsFeatures, 'on'),
                    A = (0, j.A_)({ entityVariant: h.DwC.PLAYLIST, urlParams: { id: i.uid, kind: i.kind } });
                (0, h.NBO)(l);
                let S = (0, u.c)(() => {
                    if (d) return void m();
                    L() || (y.openPlaylistTrailer(i.id), N(o.ky.Playlist, i.id));
                });
                return (0, a.jsxs)(k.W1, {
                    title: i.title,
                    onOpenChange: s,
                    open: l,
                    offsetOptions: 10,
                    isMobile: p,
                    ariaLabel: b({ id: 'interface-actions.context-menu' }),
                    containerProps: (0, c.Am)(c.Kq.playlist.PLAYLIST_CONTEXT_MENU),
                    ...n,
                    children: [
                        f && (0, a.jsx)(j.dx, { entityVariant: h.DwC.PLAYLIST, adminUrl: i.isFavouritePlaylist ? void 0 : A }),
                        !p && (0, a.jsx)(P.L1, { onClick: C, isPinned: i.isPinned }),
                        !i.isFavouritePlaylist && (0, a.jsx)(P.TW, { onClick: x, isLiked: i.isLiked, disabled: !g.isAuthorized }),
                        (null == (e = i.trailer) ? void 0 : e.isAvailable) && (0, a.jsx)(P.No, { onClick: S, disabled: !i.isAvailable }),
                    ],
                });
            });
            var b = i(40507),
                L = i.n(b);
            let f = (0, l.PA)((t) => {
                let { className: e, playlist: i, children: l, contentLinesCount: k, customDescription: j } = t,
                    { ref: b, intersectionPropertyId: f } = (0, h.nMI)(),
                    {
                        trailer: A,
                        user: S,
                        paywall: { modal: K },
                    } = (0, h.Pjs)(),
                    { from: T, utmLink: w } = (0, h.fyy)({ contextId: i.uuid, contextType: d.K.Playlist }),
                    { formatMessage: B } = (0, r.A)(),
                    { sendLikeSearchFeedback: F, sendNavigateSearchFeedback: E, sendPlaySearchFeedback: I } = (0, h.zEv)(),
                    [z, O] = (0, n.useState)(!1),
                    [R, W] = (0, n.useState)(!1),
                    [$, M] = (0, n.useState)(!1),
                    D = (0, C.r)(i),
                    X = (0, v.KX)(i),
                    Y = (0, v.A7)(i),
                    U = (0, h.NKK)(),
                    Z = (0, h.brA)(),
                    H = (0, h.ZpR)(i.url),
                    q = (0, h.Ftl)(),
                    G = (0, h.PT7)(),
                    Q = (0, u.c)((t) => {
                        if ((t.stopPropagation(), G())) return void t.preventDefault();
                        A.setUtmLink(w), A.openPlaylistTrailer(i.id), q(o.ky.Playlist, i.id);
                    }),
                    [V, J] = (0, n.useState)(!1),
                    { isPlaying: tt, togglePlay: te } = (0, h.Dx4)({
                        playContextParams: { contextData: { type: d.K.Playlist, meta: { id: i.id, uuid: i.uuid }, from: T, utmLink: w }, loadContextMeta: !0 },
                    }),
                    ti = (0, u.c)(() => {
                        U({ to: o.QT.PlaylistScreen }), null == E || E();
                    }),
                    ta = (0, u.c)((t) => {
                        ti(), H(t);
                    }),
                    ts = (0, h.NPu)(),
                    tl = (0, u.c)(() => {
                        if (!G()) {
                            if (ts) return void K.open();
                            z || tt || (O(!0), null == I || I()), te(), Z(!tt);
                        }
                    }),
                    tn = (0, u.c)(() => {
                        R || i.isLiked || (W(!0), null == F || F()), X();
                    }),
                    tr = (0, u.c)((t) => {
                        t.preventDefault(), t.stopPropagation();
                    }),
                    to = (0, u.c)((t) => {
                        M(t), J(t);
                    }),
                    tc = (0, n.useMemo)(() => {
                        var t;
                        return j
                            ? (0, a.jsx)(g.Caption, { variant: 'span', type: 'entity', size: 's', weight: 'medium', lineClamp: 2, children: j }, i.getKey('description'))
                            : (null == (t = i.artists) ? void 0 : t.length)
                              ? (0, a.jsx)(
                                    x.iQ,
                                    { className: L().artists, artists: i.artists, lineClamp: 1, linkClassName: L().artistLink, captionSize: 's' },
                                    i.getKey('description'),
                                )
                              : void 0;
                    }, [j, i]),
                    td = (0, m.L)(() => {
                        if (!i.isFavouritePlaylist)
                            return (0, a.jsx)(
                                P.cy,
                                {
                                    className: (0, s.$)(L().likeButton, L().control),
                                    isLiked: i.isLiked,
                                    onClick: tn,
                                    variant: 'default',
                                    size: 's',
                                    iconSize: 'xxs',
                                    disabled: !S.isAuthorized,
                                },
                                i.getKey('LikeButton'),
                            );
                    }),
                    tu = (0, n.useMemo)(() => {
                        var t;
                        if (null == i || null == (t = i.trailer) ? void 0 : t.isAvailable)
                            return (0, a.jsx)(
                                P.nE,
                                {
                                    children: (0, a.jsx)(
                                        P.kJ,
                                        { className: (0, s.$)(L().trailerButton, L().control), radius: 'round', size: 's', iconSize: 'xxs', onClick: Q },
                                        i.getKey('TrailerButton'),
                                    ),
                                },
                                i.getKey('PlaylilstCardTrailerTooltip'),
                            );
                    }, [Q, i]),
                    tm = (0, n.useMemo)(
                        () =>
                            (0, a.jsx)(
                                P.O0,
                                { onClick: Y, isPinned: i.isPinned, className: (0, s.$)(L().pinButton, L().control), withRipple: !1 },
                                i.getKey('PinButton'),
                            ),
                        [Y, i],
                    ),
                    t_ = (0, n.useMemo)(
                        () =>
                            (0, a.jsx)(y.Paper, {
                                className: L().cover,
                                radius: 's',
                                withShadow: !0,
                                ...(0, c.Am)(c.Kq.playlist.PLAYLIST_CARD),
                                children: (0, a.jsxs)('div', {
                                    className: L().coverBlock,
                                    onClick: ta,
                                    children: [
                                        (0, a.jsx)(P.BW, {
                                            className: L().image,
                                            src: i.coverUri,
                                            size: 200,
                                            fit: 'cover',
                                            alt: D,
                                            withAvatarReplace: !0,
                                            'aria-hidden': !0,
                                        }),
                                        (0, a.jsx)(_.hg, {
                                            isVisible: $ || V,
                                            className: L().controls,
                                            playControl: (0, a.jsx)(
                                                P.DM,
                                                {
                                                    className: (0, s.$)(L().playButton, L().control),
                                                    buttonVariant: 'default',
                                                    withHover: !1,
                                                    iconSize: 'xl',
                                                    variant: 'filled',
                                                    onClick: tl,
                                                    isPlaying: tt,
                                                    disabled: !i.isAvailable,
                                                },
                                                i.getKey('PlayButton'),
                                            ),
                                            likeControl: td,
                                            menuControl: (0, a.jsx)(
                                                N,
                                                {
                                                    playlist: i,
                                                    onOpenChange: to,
                                                    open: $,
                                                    onClick: tr,
                                                    className: (0, s.$)(L().menuButton, L().control),
                                                    icon: (0, a.jsx)(p.Icon, { size: 'xxs', variant: 'more' }),
                                                    size: 's',
                                                    ...(0, c.Am)(c.Kq.playlist.PLAYLIST_CONTEXT_MENU_BUTTON),
                                                },
                                                i.getKey('PlaylistContextMenu'),
                                            ),
                                            pinControl: tm,
                                            trailerControl: tu,
                                        }),
                                    ],
                                }),
                            }),
                        [ta, i, D, $, V, tl, tt, td, to, tr, tm, tu],
                    ),
                    tp = !!i.actualLikesCount && !i.isLikesCountHidden;
                return (0, a.jsxs)(_.MN, {
                    ref: b,
                    'aria-label': D,
                    className: (0, s.$)(L().root, e),
                    title: (0, a.jsx)(g.Caption, {
                        variant: 'div',
                        type: 'entity',
                        size: 's',
                        weight: 'medium',
                        lineClamp: 2,
                        ...(0, c.Am)(c.Kq.playlist.PLAYLIST_TITLE),
                        children: (0, a.jsx)(P.N_, { className: L().titleLink, href: i.url, onClick: ti, children: i.title }),
                    }),
                    srTitle: (0, a.jsx)(P.N_, { href: i.url, onClick: ti, children: i.title }),
                    'data-intersection-property-id': f,
                    contentLinesCount: k,
                    view: t_,
                    description: tc,
                    ...(0, c.Am)(c.Kq.playlist.PLAYLIST_ITEM),
                    children: [
                        tp &&
                            (0, a.jsx)(P.xW, {
                                ariaLabel: B({ id: 'entity-names.likes-counter' }, { counter: i.actualLikesCount }),
                                likesCount: i.actualLikesCount,
                                isLiked: i.isLiked,
                                handleLikeClick: X,
                            }),
                        l,
                    ],
                });
            });
        },
        88933: (t) => {
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
        91455: (t, e, i) => {
            'use strict';
            i.d(e, { NotFound: () => y });
            var a = i(62936),
                s = i(79950),
                l = i(19718),
                n = i(26731),
                r = i(5099),
                o = i(85742),
                c = i(20418),
                d = i(42561),
                u = i(85906),
                m = i(44020),
                _ = i(88933),
                p = i.n(_);
            let y = (0, l.PA)((t) => {
                let { className: e, title: i, description: l, iconVariant: _ = 'musicLogo', iconClassName: y, iconSize: g } = t,
                    { contentRef: x } = (0, d.gKY)(),
                    v = (0, d.ZpR)(d.Zyd.main.href);
                (0, d.LZB)();
                let { handleNavigateToMain: h } = (0, d.D5F)(v);
                return (
                    (0, d.NBO)(!0),
                    !(function () {
                        let { location: t } = (0, d.Pjs)();
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
                    (0, a.jsxs)('div', {
                        className: (0, s.$)(p().root, { [p().root_desktop]: !x }, e),
                        children: [
                            (0, a.jsx)(u.Lh, { withBackwardFallback: '/', className: p().navigation, withForwardControl: !1 }),
                            (0, a.jsxs)('div', {
                                className: p().content,
                                children: [
                                    (0, a.jsx)(o.Icon, { className: (0, s.$)(p().icon, y), variant: _, size: g }),
                                    (0, a.jsx)(c.Heading, {
                                        className: (0, s.$)(p().title, p().important),
                                        variant: 'h3',
                                        size: 'xs',
                                        children: i || (0, a.jsx)(n.A, { id: 'page-error.page-does-not-exist' }),
                                    }),
                                    (0, a.jsx)(c.Caption, {
                                        className: (0, s.$)(p().text, p().important),
                                        variant: 'span',
                                        type: 'text',
                                        size: 'l',
                                        weight: 'normal',
                                        children: l || (0, a.jsx)(n.A, { id: 'page-error.page-does-not-exist-description' }),
                                    }),
                                    (0, a.jsx)(r.$, {
                                        onClick: h,
                                        className: p().button,
                                        role: 'link',
                                        color: 'secondary',
                                        size: 'l',
                                        radius: 'xxxl',
                                        children: (0, a.jsx)(c.Caption, {
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'm',
                                            children: (0, a.jsx)(n.A, { id: 'navigation.page-main' }),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    })
                );
            });
        },
        92110: (t) => {
            t.exports = {
                root: 'PostPage_root__Orhf7',
                scrollableContainer: 'PostPage_scrollableContainer__iV9Bo',
                scrollContainer: 'PostPage_scrollContainer__zrIrH',
                important: 'PostPage_important__qUlED',
                container: 'PostPage_container__orSfz',
                shimmerTitle: 'PostPage_shimmerTitle__EeFCD',
            };
        },
        92339: (t) => {
            t.exports = {
                root: 'EmptyPlaylistBlock_root__wpA0j',
                iconBackground: 'EmptyPlaylistBlock_iconBackground__pnUlz',
                title: 'EmptyPlaylistBlock_title__pQQLf',
                subtitle: 'EmptyPlaylistBlock_subtitle__P4Q7x',
            };
        },
        95565: (t, e, i) => {
            'use strict';
            i.d(e, { EmptyPlaylistBlock: () => m });
            var a = i(62936),
                s = i(79950),
                l = i(44020),
                n = i(26731),
                r = i(8669),
                o = i(85742),
                c = i(20418),
                d = i(92339),
                u = i.n(d);
            let m = (t) => {
                let { className: e, isEmptySearch: i } = t,
                    d = (0, l.useMemo)(
                        () => (i ? (0, a.jsx)(n.A, { id: 'search-results.not-found-title' }) : (0, a.jsx)(n.A, { id: 'error-messages.empty-collection-playlist-title' })),
                        [i],
                    ),
                    m = (0, l.useMemo)(
                        () =>
                            i
                                ? (0, a.jsx)(n.A, { id: 'search-results.not-found-description' })
                                : (0, a.jsx)(n.A, { id: 'error-messages.empty-collection-playlist-description' }),
                        [i],
                    );
                return (0, a.jsxs)('div', {
                    className: (0, s.$)(u().root, e),
                    ...(0, r.Am)(r.Kq.playlist.PLAYLIST_EMPTY_BLOCK),
                    children: [
                        (0, a.jsx)('div', {
                            className: u().iconBackground,
                            children: (0, a.jsx)(o.Icon, { variant: 'search', size: 'l', className: u().icon, ...(0, r.Am)(r.Kq.playlist.PLAYLIST_EMPTY_BLOCK_ICON) }),
                        }),
                        (0, a.jsx)(c.Heading, { variant: 'h3', size: 'xs', className: u().title, ...(0, r.Am)(r.Kq.playlist.PLAYLIST_EMPTY_BLOCK_TITLE), children: d }),
                        (0, a.jsx)(c.Caption, {
                            variant: 'span',
                            size: 'l',
                            className: u().subtitle,
                            ...(0, r.Am)(r.Kq.playlist.PLAYLIST_EMPTY_BLOCK_TEXT),
                            children: m,
                        }),
                    ],
                });
            };
        },
        99793: (t) => {
            t.exports = { root: 'PostAlbums_root__u2a1q', content: 'PostAlbums_content__uMSez' };
        },
        99877: (t, e, i) => {
            'use strict';
            var a;
            i.d(e, { Q: () => a }),
                (function (t) {
                    (t.ALBUMS = 'albums'), (t.ARTISTS = 'artists'), (t.PLAYLISTS = 'playlists');
                })(a || (a = {}));
        },
    },
    (t) => {
        t.O(0, [85, 260, 3196, 403, 2537, 3789, 1970, 2670, 4103, 1311, 7764, 6706, 2899, 5419, 2561, 5906, 4690, 4501, 9154, 914, 3197, 1009, 4670, 7358], () =>
            t((t.s = 73611)),
        ),
            (_N_E = t.O());
    },
]);
