(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6902],
    {
        6322: (e, i, t) => {
            'use strict';
            t.d(i, { l: () => r });
            var a = t(88800),
                s = t(15077),
                l = t(33719);
            let r = (e) => {
                let { playlist: i, closeToast: t } = e;
                return (0, a.jsx)(l.k, {
                    closeToast: t,
                    entityVariant: s.c.PLAYLIST,
                    entityUrl: i.url,
                    coverUri: i.coverUri,
                    entityTitle: i.title,
                    isPinned: i.isPinned,
                    radius: 's',
                });
            };
        },
        9133: (e, i, t) => {
            'use strict';
            (t.r(i), t.d(i, { default: () => G }));
            var a = t(88800),
                s = t(53548),
                l = t(58390),
                r = t(65724),
                n = t(84961),
                o = t(2058),
                c = t(87999),
                d = t(76903),
                u = t(37523),
                m = t(66719),
                v = t(29504),
                A = t(32596),
                k = t(74929),
                C = t(21256),
                _ = t(69630),
                p = t(80715),
                h = t(86535),
                S = t(98427),
                L = t(46422),
                T = t(44230),
                x = t(37670),
                y = t(34961),
                I = t(53892),
                b = t(47934),
                g = t(93317),
                P = t(30144),
                j = t(72288),
                R = t(324),
                f = t(46511),
                N = t(13012),
                O = t(57297),
                U = t(2218),
                E = t(77863),
                B = t(45383),
                z = t(40883);
            async function D(e, i) {
                let { locale: t, fullUrl: a, url: s, tld: l, host: r } = i,
                    n = await (0, f.W)(t),
                    o = e.title.fullTitle,
                    c = n({ id: 'metadata.genre-title' }, { genreTitle: o }),
                    d = 'artists' in e ? e.artists : void 0,
                    u = (0, z.f)({ genreTitle: o, artists: d, messageFormatter: n }),
                    m = new URL(''.concat('', '/meta/og-image.png'), 'https://'.concat(r)).href;
                return {
                    title: c,
                    description: u,
                    openGraph: (0, O.i)({
                        ogTitle: (0, N.N)(o),
                        ogDescription: u,
                        fullUrl: null != a ? a : '',
                        locale: t,
                        siteName: n({ id: 'metadata.yandex-music' }),
                        ogImage: m,
                    }),
                    twitter: (0, U.H)({ cardType: E.W.APP, title: c, url: null != s ? s : '', appName: n({ id: 'metadata.yandex-music' }) }),
                    appLinks: (0, R.X)({
                        additional: { tld: l, url: null != s ? s : '', fullUrl: null != a ? a : '', host: r },
                        appName: n({ id: 'metadata.yandex-music' }),
                    }),
                    alternates: (0, B.S)('/genre/:metatagId', i.tld, { params: { metatagId: e.id } }),
                };
            }
            var w = t(70278),
                M = t(59918),
                K = t(68495),
                F = t(75021),
                H = t.n(F);
            let Y = (0, n.PA)((e) => {
                let { metatagId: i, preloadedMeta: t } = e,
                    n = (0, y.s)(I.n.GENRE),
                    { formatMessage: R } = (0, o.A)(),
                    { contentScrollRef: f, setContentScrollRef: N } = (0, T.g)(),
                    O = (0, L.W)();
                return (n.isNotFound && (0, l.notFound)(),
                (0, s.useEffect)(
                    () => () => {
                        n.reset();
                    },
                    [n],
                ),
                (0, x.J)(n.isResolved),
                ((e) => {
                    let { fullscreenVideoPlayer: i } = (0, j.g)(),
                        t = null == e ? void 0 : e.fullTitle,
                        a = null == e ? void 0 : e.isResolved,
                        l = null == e ? void 0 : e.isRejected,
                        r = (0, s.useCallback)(
                            (i) =>
                                l
                                    ? {}
                                    : e && a && t
                                      ? D(
                                            ((e) => ({
                                                id: '',
                                                title: { title: '', fullTitle: e.fullTitle || '' },
                                                liked: !1,
                                                tracks: [],
                                                artists: e.artists.map(M.N),
                                                composers: [],
                                                albums: e.albums.map(w.f),
                                                playlists: e.playlists.map(K.J),
                                            }))(e),
                                            i,
                                        )
                                      : void 0,
                            [e, t, a, l],
                        );
                    (0, P.C)(i.modal.isOpened ? null : r);
                })(n),
                i && n.isNeededToLoad && (0, s.use)(n.getData({ id: i, preloadedMeta: t })),
                n.isRejected && !n.isNotFound)
                    ? (0, a.jsx)(A.SomethingWentWrong, {})
                    : (0, a.jsx)(d.a, {
                          pageId: c.AppScreen.Genre,
                          pageIdForFrom: S.b.GENRE,
                          children: (0, a.jsxs)(_.h, {
                              scrollElement: f,
                              outerTitle: n.fullTitle,
                              children: [
                                  (0, a.jsx)(g.Y, {
                                      variant: g.V.TEXT,
                                      withForwardControl: !1,
                                      withBackwardControl: O.canBack,
                                      children: (0, a.jsx)(v.DZ, { variant: 'h2', weight: 'bold', size: 'xl', lineClamp: 1, children: n.fullTitle }),
                                  }),
                                  (0, a.jsx)(m.N, {
                                      className: H().root,
                                      containerClassName: H().content,
                                      ref: N,
                                      children: (0, a.jsxs)('div', {
                                          className: H().carouselBlocks,
                                          children: [
                                              n.hasPlaylists &&
                                                  (0, a.jsx)(u.F, {
                                                      blockId: h.h.PLAYLISTS_CAROUSEL,
                                                      blockType: h.h.PLAYLISTS_CAROUSEL,
                                                      blockPosX: 1,
                                                      blockPosY: 1,
                                                      blockIdForFrom: h.h.PLAYLISTS_CAROUSEL,
                                                      objectsCount: n.playlists.length,
                                                      children: (0, a.jsx)(p.E, {
                                                          isShimmerVisible: n.isLoading,
                                                          isShimmerActive: !0,
                                                          headerClassName: (0, r.$)(H().carouselBlockHeader, H().carouselBlock),
                                                          containerClassName: H().carouselBlock,
                                                          playlists: n.playlists,
                                                          title: R({ id: 'entity-names.popular-playlists' }),
                                                          viewAllActionLink: '/genre/'.concat(n.id, '/playlists'),
                                                      }),
                                                  }),
                                              n.hasAlbums &&
                                                  (0, a.jsx)(u.F, {
                                                      blockId: h.h.ALBUMS_CAROUSEL,
                                                      blockType: h.h.ALBUMS_CAROUSEL,
                                                      blockPosX: 1,
                                                      blockPosY: 2,
                                                      blockIdForFrom: h.h.ALBUMS_CAROUSEL,
                                                      objectsCount: n.albums.length,
                                                      children: (0, a.jsx)(k.p, {
                                                          isShimmerVisible: n.isLoading,
                                                          isShimmerActive: !0,
                                                          headerClassName: (0, r.$)(H().carouselBlockHeader, H().carouselBlock),
                                                          containerClassName: H().carouselBlock,
                                                          albums: n.albums,
                                                          title: R({ id: 'entity-names.new-albums' }),
                                                          viewAllActionLink: '/genre/'.concat(n.id, '/albums'),
                                                      }),
                                                  }),
                                              n.hasArtists &&
                                                  (0, a.jsx)(u.F, {
                                                      blockId: h.h.ARTISTS_CAROUSEL,
                                                      blockType: h.h.ARTISTS_CAROUSEL,
                                                      blockPosX: 1,
                                                      blockPosY: 3,
                                                      blockIdForFrom: h.h.ARTISTS_CAROUSEL,
                                                      objectsCount: n.artists.length,
                                                      children: (0, a.jsx)(b.O, {
                                                          isShimmerVisible: n.isLoading,
                                                          isShimmerActive: !0,
                                                          isShimmerCentered: !0,
                                                          isShimmerRounded: !0,
                                                          headerClassName: (0, r.$)(H().carouselBlockHeader, H().carouselBlock),
                                                          containerClassName: H().carouselBlock,
                                                          title: R({ id: 'entity-names.popular-artists' }),
                                                          viewAllActionLink: '/genre/'.concat(n.id, '/artists'),
                                                          children: n.artists.map((e) => (0, a.jsx)(C.a, { artist: e, contentLinesCount: 3 }, e.id)),
                                                      }),
                                                  }),
                                          ],
                                      }),
                                  }),
                              ],
                          }),
                      });
            });
            var V = t(19994);
            let W = () => {
                    let { formatMessage: e } = (0, o.A)(),
                        { contentScrollRef: i, setContentScrollRef: t } = (0, T.g)(),
                        s = (0, L.W)();
                    return (0, a.jsxs)(_.h, {
                        scrollElement: i,
                        children: [
                            (0, a.jsx)(g.Y, {
                                variant: g.V.TEXT,
                                withForwardControl: !1,
                                withBackwardControl: s.canBack,
                                children: (0, a.jsx)(V.W, { className: H().shimmerTitle, radius: 'l' }),
                            }),
                            (0, a.jsx)(m.N, {
                                className: H().root,
                                containerClassName: H().content,
                                ref: t,
                                children: (0, a.jsxs)('div', {
                                    className: H().carouselBlocks,
                                    children: [
                                        (0, a.jsx)(p.E, {
                                            isShimmerVisible: !0,
                                            isShimmerActive: !0,
                                            headerClassName: (0, r.$)(H().carouselBlockHeader, H().carouselBlock),
                                            containerClassName: H().carouselBlock,
                                            title: e({ id: 'entity-names.popular-playlists' }),
                                        }),
                                        (0, a.jsx)(k.p, {
                                            isShimmerVisible: !0,
                                            isShimmerActive: !0,
                                            headerClassName: (0, r.$)(H().carouselBlockHeader, H().carouselBlock),
                                            containerClassName: H().carouselBlock,
                                            title: e({ id: 'entity-names.new-albums' }),
                                        }),
                                        (0, a.jsx)(b.O, {
                                            isShimmerVisible: !0,
                                            isShimmerActive: !0,
                                            isShimmerCentered: !0,
                                            isShimmerRounded: !0,
                                            headerClassName: (0, r.$)(H().carouselBlockHeader, H().carouselBlock),
                                            containerClassName: H().carouselBlock,
                                            title: e({ id: 'entity-names.popular-artists' }),
                                        }),
                                    ],
                                }),
                            }),
                        ],
                    });
                },
                G = () => {
                    let e = (0, l.useSearchParams)().get('metatagId');
                    return (e || (0, l.notFound)(), (0, a.jsx)(s.Suspense, { fallback: (0, a.jsx)(W, {}), children: (0, a.jsx)(Y, { metatagId: e }) }));
                };
        },
        17657: (e) => {
            e.exports = {
                root: 'PlaylistCard_root__i3pR4',
                srTitleLink: 'PlaylistCard_srTitleLink__Gg2Dy',
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
        21256: (e, i, t) => {
            'use strict';
            t.d(i, { a: () => K });
            var a = t(88800),
                s = t(65724),
                l = t(84961),
                r = t(53548),
                n = t(2058),
                o = t(87999),
                c = t(62414),
                d = t(80643),
                u = t(33979),
                m = t(17392),
                v = t(18593),
                A = t(29993),
                k = t(79070),
                C = t(29832),
                _ = t(52300),
                p = t(7555),
                h = t(29504),
                S = t(91959),
                L = t(64207),
                T = t(77455),
                x = t(5407),
                y = t(57934),
                I = t(84384),
                b = t(4795),
                g = t(78940),
                P = t(55693),
                j = t(39079),
                R = t(72288),
                f = t(81877),
                N = t(49738),
                O = t(91292),
                U = t(56862),
                E = t(16704),
                B = t(56446),
                z = t(36207),
                D = t(43161),
                w = t(93434),
                M = t.n(w);
            let K = (0, l.PA)((e) => {
                let { artist: i, className: t, children: l, contentLinesCount: w, topTitleElement: K, bottomTitleElement: F } = e,
                    H = (0, c.D)(),
                    {
                        trailer: Y,
                        user: V,
                        paywall: { modal: W },
                    } = (0, R.g)(),
                    { from: G, utmLink: X } = (0, I.f)({ contextId: i.id, contextType: v.K.Artist }),
                    { formatMessage: q } = (0, n.A)(),
                    [$, J] = (0, r.useState)(!1),
                    [Z, Q] = (0, r.useState)(!1),
                    [ee, ei] = (0, r.useState)(!1),
                    { sendLikeSearchFeedback: et, sendNavigateSearchFeedback: ea, sendPlaySearchFeedback: es } = (0, P.z)(),
                    el = (0, d.S)(),
                    er = (0, u.g)(),
                    en = (0, L.K)(i),
                    eo = (0, T.A)(i),
                    { id: ec, name: ed, coverUri: eu, isLiked: em } = i,
                    ev = (0, g.Z)(i.url),
                    [eA, ek] = (0, r.useState)(!1),
                    eC = (0, y.F)(),
                    e_ = (0, x.P)(),
                    ep = (0, A.c)((e) => {
                        if ((e.stopPropagation(), e_())) return void e.preventDefault();
                        (Y.openArtistTrailer(i.id), eC(o.DomainObjectType.Artist, i.id));
                    }),
                    eh = (0, r.useMemo)(() => {
                        let e = q({ id: 'entity-names.artist-name' }, { artistName: ed }),
                            i = em ? q({ id: 'entity-names.has-your-like' }) : '';
                        return ''.concat(e, ' ').concat(i);
                    }, [ed, em, q]),
                    { isPlaying: eS, togglePlay: eL } = (0, j.D)({
                        playContextParams: { contextData: { type: v.K.Artist, meta: { id: Number(ec) }, from: G, utmLink: X }, loadContextMeta: !0 },
                    }),
                    eT = (0, S.S)({ artist: i, callback: ev }),
                    ex = (0, S.S)({ artist: i, callback: eL }),
                    ey = (0, A.c)((e) => {
                        (null == ea || ea(), el({ to: o.AppScreen.ArtistScreen }), eT(e));
                    }),
                    eI = (0, b.N)(),
                    eb = (0, A.c)(() => {
                        if (!e_()) {
                            if (eI) return void W.open();
                            ($ || eS || (J(!0), null == es || es()), ex(), eS || er());
                        }
                    }),
                    eg = (0, A.c)(() => {
                        (Z || em || (Q(!0), null == et || et()), en());
                    }),
                    eP = (0, A.c)((e) => {
                        (e.preventDefault(), e.stopPropagation());
                    }),
                    ej = (0, A.c)((e) => {
                        (ei(e), ek(e));
                    }),
                    eR = (0, r.useMemo)(
                        () =>
                            (0, a.jsx)(
                                D.g,
                                {
                                    artist: i,
                                    onOpenChange: ej,
                                    open: ee,
                                    onClick: eP,
                                    className: (0, s.$)(M().menuButton, M().control),
                                    size: 's',
                                    icon: (0, a.jsx)(_.I, { size: 'xxs', variant: 'more' }),
                                    'data-test-id': m.Kq.artist.ARTIST_CONTEXT_MENU_BUTTON,
                                },
                                i.getKey('ArtistContextMenu'),
                            ),
                        [i, eP, ej, ee],
                    ),
                    ef = (0, r.useMemo)(() => {
                        var e;
                        if (null == i || null == (e = i.trailer) ? void 0 : e.isAvailable)
                            return (0, a.jsx)(
                                z.n,
                                {
                                    children: (0, a.jsx)(B.k, {
                                        className: (0, s.$)(M().trailerButton, M().control),
                                        radius: 'round',
                                        size: 's',
                                        iconSize: 'xxs',
                                        onClick: ep,
                                    }),
                                },
                                i.getKey('ArtistCardTrailerTooltip'),
                            );
                    }, [i, ep]),
                    eN = (0, r.useMemo)(
                        () =>
                            (0, a.jsx)(
                                U.O,
                                { onClick: eo, isPinned: i.isPinned, className: (0, s.$)(M().pinButton, M().control), withRipple: !1 },
                                i.getKey('PinButton'),
                            ),
                        [i, eo],
                    ),
                    eO = (0, k.L)(() => {
                        if (i.isAvailable)
                            return (0, a.jsx)(
                                C.hg,
                                {
                                    isVisible: ee || eA,
                                    className: M().controls,
                                    radius: 'round',
                                    playControl: (0, a.jsx)(
                                        E.D,
                                        {
                                            buttonVariant: 'default',
                                            withHover: !1,
                                            className: (0, s.$)(M().playButton, M().control),
                                            iconSize: 'xl',
                                            variant: 'filled',
                                            onClick: eb,
                                            isPlaying: eS,
                                            disabled: !i.isAvailableForPlaying,
                                        },
                                        i.getKey('PlayButton'),
                                    ),
                                    likeControl: (0, a.jsx)(
                                        N.c,
                                        {
                                            className: (0, s.$)(M().likeButton, M().control),
                                            isLiked: em,
                                            onClick: eg,
                                            variant: 'default',
                                            size: 's',
                                            iconSize: 'xxs',
                                            disabled: !V.isAuthorized,
                                        },
                                        i.getKey('LikeButton'),
                                    ),
                                    menuControl: eR,
                                    pinControl: eN,
                                    trailerControl: ef,
                                },
                                i.getKey('ArtistCardControls'),
                            );
                    }),
                    eU = (0, r.useMemo)(
                        () =>
                            (0, a.jsx)(p.t, {
                                className: M().cover,
                                radius: 'round',
                                withShadow: !0,
                                'data-test-id': m.Kq.artist.ARTIST_CARD,
                                children: (0, a.jsxs)('div', {
                                    className: M().coverBlock,
                                    onClick: ey,
                                    children: [
                                        (0, a.jsx)(f.B, {
                                            className: M().image,
                                            src: eu,
                                            size: 200,
                                            fit: 'cover',
                                            alt: eh,
                                            withAvatarReplace: !0,
                                            isAvailable: i.isAvailable,
                                            'aria-hidden': !0,
                                        }),
                                        eO,
                                    ],
                                }),
                            }),
                        [ey, eu, eh, i.isAvailable, eO],
                    );
                return (0, a.jsx)(C.MN, {
                    ref: H,
                    className: (0, s.$)(M().root, t),
                    textPosition: 'center',
                    'aria-label': eh,
                    title: (0, a.jsxs)(a.Fragment, {
                        children: [
                            K,
                            (0, a.jsx)(h.HL, {
                                variant: 'div',
                                type: 'entity',
                                size: 's',
                                weight: 'medium',
                                lineClamp: 2,
                                'aria-hidden': !0,
                                children: (0, a.jsx)(O.N, {
                                    className: M().titleLink,
                                    href: i.url,
                                    tabIndex: -1,
                                    'aria-label': eh,
                                    onClick: ey,
                                    'data-test-id': m.Kq.artist.ARTIST_TITLE,
                                    children: ed,
                                }),
                            }),
                            F,
                        ],
                    }),
                    srTitle: (0, a.jsx)(O.N, { className: M().srTitleLink, href: i.url, onClick: ey, children: eh }),
                    contentLinesCount: w,
                    view: eU,
                    'data-test-id': m.Kq.artist.ARTIST_ITEM,
                    children: l,
                });
            });
        },
        24460: (e, i, t) => {
            'use strict';
            t.d(i, { A: () => m });
            var a = t(88800),
                s = t(96706),
                l = t(53548),
                r = t(2058),
                n = t(29595),
                o = t(74965),
                c = t(72288),
                d = t(66943),
                u = t(6322);
            let m = (e) => {
                let { user: i } = (0, c.g)(),
                    { notify: t } = (0, o.l)(),
                    { formatMessage: m } = (0, r.A)(),
                    [v, A] = (0, l.useState)(!1);
                return (0, l.useCallback)(async () => {
                    if (!i.isAuthorized) return void t((0, a.jsx)(d.h, { error: m({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: n.u.ERROR });
                    if (v) return;
                    let l = { ...(0, s.HO)(e), url: e.url, isPinned: !e.isPinned };
                    A(!0);
                    let r = await e.togglePin();
                    (A(!1),
                        r
                            ? t((0, a.jsx)(u.l, { playlist: l }), { containerId: n.u.INFO })
                            : t((0, a.jsx)(d.h, { error: m({ id: 'error-messages.error-during-action' }) }), { containerId: n.u.ERROR }));
                }, [i.isAuthorized, v, e, t, m]);
            };
        },
        29201: (e, i, t) => {
            'use strict';
            t.d(i, { H: () => s });
            var a = t(35396);
            let s = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                return e.map((e) => ((0, a.C)(e) ? e : void 0)).filter((e) => void 0 !== e);
            };
        },
        30832: (e, i, t) => {
            'use strict';
            t.d(i, { T: () => r });
            var a = t(88800),
                s = t(15077),
                l = t(42729);
            let r = (e) => {
                let { playlist: i, closeToast: t } = e;
                return (0, a.jsx)(l.O, {
                    entityVariant: s.c.PLAYLIST,
                    entityUrl: i.url,
                    collectionUrl: '/collection',
                    entityTitle: i.title,
                    isLiked: i.isLiked,
                    closeToast: t,
                    coverUri: i.coverUri,
                });
            };
        },
        35396: (e, i, t) => {
            'use strict';
            var a;
            (t.d(i, { C: () => l }),
                (function (e) {
                    // for PulseSync: BEGIN substituted-track enum extension
                    ((e.MODAL = 'modal'),
                        (e.FOREIGN_AGENT = 'foreignAgent'),
                        (e.INFORMATIONAL = 'informational'),
                        (e.AGE_18 = 'age18'),
                        (e.EXPLICIT = 'explicit'),
                        (e.DESCRIPTION_TEXT = 'descriptionText'),
                        (e.AGE_18_ICON = 'age18Icon'),
                        (e.EXPLICIT_ICON = 'explicitIcon'),
                        ((e.EXCLAMATION_ICON = 'exclamationIcon'), (e.SUBSTITUTED_ICON = 'substitutedIcon')));
                    // for PulseSync: END substituted-track enum extension
                })(a || (a = {})));
            let s = new Set(Object.values(a)),
                l = (e) => 'string' == typeof e && s.has(e);
        },
        41911: (e, i, t) => {
            'use strict';
// for PulseSync: BEGIN import the download icon for playlist menu actions

            var pulseSyncPlaylistDownloadIcons = t(52300);
// for PulseSync: END import the download icon for playlist menu actions
            t.d(i, { B: () => Q });
            // for PulseSync WebHost: BEGIN imports for native addon context menu items
            var pulseSyncMenuJsx = t(88800),
                pulseSyncMenuItems = t(19934),
                pulseSyncMenuIcons = t(52300);
            // for PulseSync WebHost: END imports for native addon context menu items
            var a = t(88800),
                s = t(65724),
                l = t(84961),
                r = t(53548),
                n = t(2058),
                o = t(87999),
                c = t(62414),
                d = t(80643),
                u = t(33979),
                m = t(17392),
                v = t(18593),
                A = t(29993),
                k = t(79070),
                C = t(29832),
                _ = t(52300),
                p = t(7555),
                h = t(29504),
                S = t(13946),
                L = t(85902),
                T = t(24460),
                x = t(5407),
                y = t(57934),
                I = t(84384),
                b = t(4795),
                g = t(78940),
                P = t(55693),
                j = t(39079),
                R = t(72288),
                f = t(86298),
                N = t(81877),
                O = t(49738),
                U = t(91292),
                E = t(56862),
                B = t(16704),
                z = t(56446),
                D = t(36207),
                w = t(47513),
                M = t(19934),
                K = t(48749),
                F = t(22505),
                H = t(9618),
                Y = t(95210),
                V = t(46936),
                W = t(97956),
                G = t(93091),
                X = t(27817),
                q = t(15425);
            let $ = (0, l.PA)((e) => {
                var i;
                let { playlist: t, onOpenChange: s, open: l, ...r } = e,
                    { shouldShowBuySubscriptionModal: c, showBuySubscriptionModal: d } = (0, H.q)(),
                    {
                        experiments: u,
                        settings: { isMobile: v },
                        trailer: k,
                        user: C,
                    } = (0, R.g)(),
                    _ = (0, L.K)(t),
                    p = (0, T.A)(t),
                    h = (0, y.F)(),
                    { formatMessage: S } = (0, n.A)(),
                    I = (0, x.P)(),
                    b = u.checkExperiment(W.z.WebEditorsFeatures, 'on'),
                    g = (0, K.A)({ entityVariant: V.D.PLAYLIST, urlParams: { id: t.uid, kind: t.kind } });
                (0, Y.N)(l);
                let P = (0, A.c)(() => {
                    if (c) return void d();
                    I() || (k.openPlaylistTrailer(t.id), h(o.DomainObjectType.Playlist, t.id));
                });
                // for PulseSync WebHost: BEGIN playlist context and native addon menu item rendering
                let pulseSyncInjectPlaylistMenuItems = (items) =>
                    window.pulsesyncApi?.injectNativeSlotItems?.('playlistContextMenu', items, {
                        eventDetail: {
                            id: String(t.kind ?? t.id),
                            uuid: String(t.uuid ?? ''),
                            url: String(t.url ?? ''),
                            ...(t.title
                                ? {
                                      title: String(t.title),
                                  }
                                : {}),
                        },
                        renderItem: ({ key, payload, activate }) => {
                            const label = String(payload?.label ?? '').trim(),
                                icon = String(payload?.icon ?? '').trim();
                            if (!label || !icon) return null;
                            return (0, pulseSyncMenuJsx.jsx)(
                                pulseSyncMenuItems.Dr,
                                {
                                    icon: (0, pulseSyncMenuJsx.jsx)(pulseSyncMenuIcons.I, {
                                        variant: icon,
                                        size: 'xxs',
                                    }),
                                    onClick: () => {
                                        (activate(), s?.(!1));
                                    },
                                    children: label,
                                    'data-pulsesync-addon-menu-item': '',
                                },
                                key,
                            );
                        },
                    }) ?? items;
                // for PulseSync WebHost: END playlist context and native addon menu item rendering
                return (0, a.jsxs)(M.W1, {
                    title: t.title,
                    onOpenChange: s,
                    open: l,
                    offsetOptions: 10,
                    isMobile: v,
                    ariaLabel: S({ id: 'interface-actions.context-menu' }),
                    containerDataTestId: m.Kq.playlist.PLAYLIST_CONTEXT_MENU,
                    ...r,
                    // for PulseSync WebHost: BEGIN inject native addon items into the playlist context menu
                    children: pulseSyncInjectPlaylistMenuItems([
                        b && (0, a.jsx)(F.d, { entityVariant: V.D.PLAYLIST, adminUrl: t.isFavouritePlaylist ? void 0 : g }),
                        !v && (0, a.jsx)(X.L, { onClick: p, isPinned: t.isPinned }),
                        !t.isFavouritePlaylist && (0, a.jsx)(G.T, { onClick: _, isLiked: t.isLiked, disabled: !C.isAuthorized }),
                        // for PulseSync: BEGIN download-to-file action in the playlist context menu
                        (t.tracksCount ?? 1) > 0 &&
                            (0, a.jsx)(M.Dr, {
                                onClick: t.downloadToFile,
                                icon: (0, a.jsx)(pulseSyncPlaylistDownloadIcons.I, { variant: 'download', size: 'xxs' }),
                                children: 'Скачать в файл',
                            }),
                        // for PulseSync: END download-to-file action in the playlist context menu
                        (null == (i = t.trailer) ? void 0 : i.isAvailable) && (0, a.jsx)(q.N, { onClick: P, disabled: !t.isAvailable }),
                    ]),
                    // for PulseSync WebHost: END inject native addon items into the playlist context menu
                });
            });
            var J = t(17657),
                Z = t.n(J);
            let Q = (0, l.PA)((e) => {
                let { className: i, playlist: t, children: l, contentLinesCount: M, customDescription: K, onCoverMouseDown: F } = e,
                    H = (0, c.D)(),
                    {
                        trailer: Y,
                        user: V,
                        paywall: { modal: W },
                    } = (0, R.g)(),
                    { from: G, utmLink: X } = (0, I.f)({ contextId: t.uuid, contextType: v.K.Playlist }),
                    { formatMessage: q } = (0, n.A)(),
                    { sendLikeSearchFeedback: J, sendNavigateSearchFeedback: Q, sendPlaySearchFeedback: ee } = (0, P.z)(),
                    [ei, et] = (0, r.useState)(!1),
                    [ea, es] = (0, r.useState)(!1),
                    [el, er] = (0, r.useState)(!1),
                    en = (0, w.r)(t),
                    eo = (0, L.K)(t),
                    ec = (0, T.A)(t),
                    ed = (0, d.S)(),
                    eu = (0, u.g)(),
                    em = (0, g.Z)(t.url),
                    ev = (0, y.F)(),
                    eA = (0, x.P)(),
                    ek = (0, A.c)((e) => {
                        if ((e.stopPropagation(), eA())) return void e.preventDefault();
                        (Y.setUtmLink(X), Y.openPlaylistTrailer(t.id), ev(o.DomainObjectType.Playlist, t.id));
                    }),
                    [eC, e_] = (0, r.useState)(!1),
                    { isPlaying: ep, togglePlay: eh } = (0, j.D)({
                        playContextParams: { contextData: { type: v.K.Playlist, meta: { id: t.id, uuid: t.uuid }, from: G, utmLink: X }, loadContextMeta: !0 },
                    }),
                    eS = (0, A.c)(() => {
                        (ed({ to: o.AppScreen.PlaylistScreen }), null == Q || Q());
                    }),
                    eL = (0, A.c)((e) => {
                        (eS(), em(e));
                    }),
                    eT = (0, b.N)(),
                    ex = (0, A.c)(() => {
                        if (!eA()) {
                            if (eT) return void W.open();
                            (ei || ep || (et(!0), null == ee || ee()), eh(), ep || eu());
                        }
                    }),
                    ey = (0, A.c)(() => {
                        (ea || t.isLiked || (es(!0), null == J || J()), eo());
                    }),
                    eI = (0, A.c)((e) => {
                        (e.preventDefault(), e.stopPropagation());
                    }),
                    eb = (0, A.c)((e) => {
                        (er(e), e_(e));
                    }),
                    eg = (0, r.useMemo)(() => {
                        var e;
                        return K
                            ? (0, a.jsx)(h.HL, { variant: 'span', type: 'entity', size: 's', weight: 'medium', lineClamp: 2, children: K }, t.getKey('description'))
                            : (null == (e = t.artists) ? void 0 : e.length)
                              ? (0, a.jsx)(
                                    S.i,
                                    { className: Z().artists, artists: t.artists, lineClamp: 1, linkClassName: Z().artistLink, captionSize: 's' },
                                    t.getKey('description'),
                                )
                              : void 0;
                    }, [K, t]),
                    eP = (0, k.L)(() => {
                        if (!t.isFavouritePlaylist)
                            return (0, a.jsx)(
                                O.c,
                                {
                                    className: (0, s.$)(Z().likeButton, Z().control),
                                    isLiked: t.isLiked,
                                    onClick: ey,
                                    variant: 'default',
                                    size: 's',
                                    iconSize: 'xxs',
                                    disabled: !V.isAuthorized,
                                },
                                t.getKey('LikeButton'),
                            );
                    }),
                    ej = (0, r.useMemo)(() => {
                        var e;
                        if (null == t || null == (e = t.trailer) ? void 0 : e.isAvailable)
                            return (0, a.jsx)(
                                D.n,
                                {
                                    children: (0, a.jsx)(
                                        z.k,
                                        { className: (0, s.$)(Z().trailerButton, Z().control), radius: 'round', size: 's', iconSize: 'xxs', onClick: ek },
                                        t.getKey('TrailerButton'),
                                    ),
                                },
                                t.getKey('PlaylilstCardTrailerTooltip'),
                            );
                    }, [ek, t]),
                    eR = (0, r.useMemo)(
                        () =>
                            (0, a.jsx)(
                                E.O,
                                { onClick: ec, isPinned: t.isPinned, className: (0, s.$)(Z().pinButton, Z().control), withRipple: !1 },
                                t.getKey('PinButton'),
                            ),
                        [ec, t],
                    ),
                    ef = (0, r.useMemo)(
                        () =>
                            (0, a.jsx)(p.t, {
                                className: Z().cover,
                                radius: 's',
                                withShadow: !0,
                                'data-test-id': m.Kq.playlist.PLAYLIST_CARD,
                                children: (0, a.jsxs)('div', {
                                    className: Z().coverBlock,
                                    onClick: eL,
                                    onMouseDown: F,
                                    children: [
                                        (0, a.jsx)(N.B, {
                                            className: Z().image,
                                            src: t.coverUri,
                                            size: 200,
                                            fit: 'cover',
                                            alt: en,
                                            withAvatarReplace: !0,
                                            'aria-hidden': !0,
                                        }),
                                        (0, a.jsx)(C.hg, {
                                            isVisible: el || eC,
                                            className: Z().controls,
                                            playControl: (0, a.jsx)(
                                                B.D,
                                                {
                                                    className: (0, s.$)(Z().playButton, Z().control),
                                                    buttonVariant: 'default',
                                                    withHover: !1,
                                                    iconSize: 'xl',
                                                    variant: 'filled',
                                                    onClick: ex,
                                                    isPlaying: ep,
                                                    disabled: !t.isAvailable,
                                                },
                                                t.getKey('PlayButton'),
                                            ),
                                            likeControl: eP,
                                            menuControl: (0, a.jsx)(
                                                $,
                                                {
                                                    playlist: t,
                                                    onOpenChange: eb,
                                                    open: el,
                                                    onClick: eI,
                                                    className: (0, s.$)(Z().menuButton, Z().control),
                                                    icon: (0, a.jsx)(_.I, { size: 'xxs', variant: 'more' }),
                                                    size: 's',
                                                    'data-test-id': m.Kq.playlist.PLAYLIST_CONTEXT_MENU_BUTTON,
                                                },
                                                t.getKey('PlaylistContextMenu'),
                                            ),
                                            pinControl: eR,
                                            trailerControl: ej,
                                        }),
                                    ],
                                }),
                            }),
                        [eL, F, t, en, el, eC, ex, ep, eP, eb, eI, eR, ej],
                    ),
                    eN = !!t.actualLikesCount && !t.isLikesCountHidden;
                return (0, a.jsxs)(C.MN, {
                    ref: H,
                    'aria-label': en,
                    className: (0, s.$)(Z().root, i),
                    title: (0, a.jsx)(h.HL, {
                        variant: 'div',
                        type: 'entity',
                        size: 's',
                        weight: 'medium',
                        lineClamp: 2,
                        'aria-hidden': !0,
                        'data-test-id': m.Kq.playlist.PLAYLIST_TITLE,
                        children: (0, a.jsx)(U.N, { className: Z().titleLink, href: t.url, tabIndex: -1, onClick: eS, children: t.title }),
                    }),
                    srTitle: (0, a.jsx)(U.N, { className: Z().srTitleLink, href: t.url, onClick: eS, children: t.title }),
                    contentLinesCount: M,
                    view: ef,
                    description: eg,
                    'data-test-id': m.Kq.playlist.PLAYLIST_ITEM,
                    children: [
                        eN &&
                            (0, a.jsx)(f.x, {
                                ariaLabel: q({ id: 'entity-names.likes-counter' }, { counter: t.actualLikesCount }),
                                likesCount: t.actualLikesCount,
                                isLiked: t.isLiked,
                                handleLikeClick: eo,
                            }),
                        l,
                    ],
                });
            });
        },
        43161: (e, i, t) => {
            'use strict';
            t.d(i, { g: () => J });
            var a = t(88800),
                s = t(84961),
                l = t(2058),
                r = t(87999),
                n = t(17392),
                o = t(18593),
                c = t(29993),
                d = t(52300),
                u = t(19934),
                m = t(96706),
                v = t(53548),
                A = t(79390),
                k = t(29595),
                C = t(74965),
                _ = t(72288),
                p = t(66943),
                h = t(7555),
                S = t(73170),
                L = t(29504),
                T = t(59304),
                x = t(81877),
                y = t(85074),
                I = t.n(y);
            let b = (e) => {
                let { coverUri: i, title: t, isDisliked: s, closeToast: r } = e,
                    { formatMessage: n } = (0, l.A)(),
                    o = n(s ? { id: 'notifications-info.artist-unavailable-in-recommendations' } : { id: 'notifications-info.artist-available-in-recommendations' });
                return (0, a.jsx)(T.$, {
                    closeToast: r,
                    message: (0, a.jsxs)('div', {
                        className: I().message,
                        children: [
                            (0, a.jsx)(S.q, { children: (0, a.jsx)('p', { role: 'alert', 'aria-label': o }) }),
                            (0, a.jsx)(h.t, {
                                className: I().cover,
                                radius: 'round',
                                children: (0, a.jsx)(x.B, { className: I().image, src: i, alt: t, size: 100, fit: 'cover', withAvatarReplace: !0 }),
                            }),
                            (0, a.jsx)(L.HL, { className: I().text, variant: 'div', type: 'controls', size: 'm', 'aria-hidden': !0, children: o }),
                        ],
                    }),
                });
            };
            var g = t(64207),
                P = t(77455),
                j = t(48749),
                R = t(22505),
                f = t(5407),
                N = t(64284),
                O = t(98427),
                U = t(57934),
                E = t(84384),
                B = t(9618),
                z = t(95210),
                D = t(47964),
                w = t(46936),
                M = t(97956),
                K = t(98953),
                F = t(32721),
                H = t(18130),
                Y = t(56117),
                V = t(93091),
                W = t(27817),
                G = t(74064),
                X = t(15425),
                q = t(81066),
                $ = t(64546);
            let J = (0, s.PA)((e) => {
                var i, t, s;
                let { artist: h, onOpenChange: S, open: L, ...T } = e,
                    { shouldShowBuySubscriptionModal: x, showBuySubscriptionModal: y } = (0, B.q)(),
                    {
                        settings: { isMobile: I },
                        modals: { artistAboutModal: J },
                        trailer: Z,
                        user: Q,
                        experiments: ee,
                    } = (0, _.g)(),
                    ei = (0, P.A)(h),
                    et = (0, g.K)(h),
                    ea = ((e) => {
                        let { user: i } = (0, _.g)(),
                            { notify: t } = (0, C.l)(),
                            [s, r] = (0, v.useState)(!1),
                            { formatMessage: n } = (0, l.A)();
                        return (0, c.c)(async () => {
                            if (!e) return;
                            if (!i.isAuthorized)
                                return void t((0, a.jsx)(p.h, { error: n({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: k.u.ERROR });
                            if (s) return;
                            let l = { ...(0, m.HO)(e), isDisliked: !e.isDisliked };
                            r(!0);
                            let o = await e.toggleDislike();
                            (r(!1),
                                o === A.f.OK
                                    ? t((0, a.jsx)(b, { coverUri: l.coverUri, title: l.name, isDisliked: l.isDisliked }), { containerId: k.u.INFO })
                                    : t((0, a.jsx)(p.h, { error: n({ id: 'error-messages.error-during-action' }) }), { containerId: k.u.ERROR }));
                        });
                    })(h),
                    es = (0, U.F)(),
                    el = ''.concat(N.U.ARTIST, '-').concat(null == h ? void 0 : h.id),
                    { formatMessage: er } = (0, l.A)(),
                    { utmLink: en } = (0, E.f)({ blockId: N.U.ARTIST, contextType: o.K.Artist, contextId: null == h ? void 0 : h.id }),
                    { shareLink: eo, pathname: ec } = (0, H.b)('/artist/:artistId', { params: { artistId: null != (t = null == h ? void 0 : h.id) ? t : '' } }),
                    ed = (0, j.A)({ entityVariant: w.D.ARTIST, urlParams: { id: null == h ? void 0 : h.id } }),
                    { isPlaying: eu, togglePlay: em } = (0, D.B)({
                        seeds: null != (s = null == h ? void 0 : h.seeds) ? s : [],
                        pageIdForFrom: O.b.RADIO,
                        blockIdForFrom: el,
                        parentContextId: null == h ? void 0 : h.id,
                    }),
                    ev = (0, f.P)(),
                    eA = er((null == h ? void 0 : h.isComposer) ? { id: 'artist.about-composer' } : { id: 'artist.about-artist' }),
                    ek = (0, c.c)(() => {
                        if (x && Q.isAuthorized) return void y();
                        eu || em();
                    }),
                    eC = (0, c.c)(() => {
                        if (!ev()) {
                            if (x) return void y();
                            (null == h ? void 0 : h.id) && (Z.setUtmLink(en), Z.openArtistTrailer(h.id), es(r.DomainObjectType.Artist, h.id));
                        }
                    }),
                    e_ = (0, c.c)(() => {
                        J.open(null == h ? void 0 : h.id);
                    });
                (0, z.N)(L);
                let ep = { variant: K.Y.ARTIST, id: null == h ? void 0 : h.id, title: null == h ? void 0 : h.name, path: ec },
                    eh = ee.checkExperiment(M.z.WebEditorsFeatures, 'on'),
                    eS = null == h || null == (i = h.trailer) ? void 0 : i.isAvailable,
                    eL = ee.checkExperiment(M.z.WebNextArtistInfo, 'on'),
                    eT = !ee.checkExperiment(M.z.WebNextProductWithoutRecommendation, 'on');
                return (0, a.jsxs)(u.W1, {
                    isMobile: I,
                    offsetOptions: 10,
                    open: L,
                    onOpenChange: S,
                    ariaLabel: er({ id: 'interface-actions.context-menu' }),
                    containerDataTestId: n.Kq.artist.ARTIST_CONTEXT_MENU,
                    ...T,
                    children: [
                        eh && (0, a.jsx)($.WithOffline, { fallback: (0, a.jsx)(R.d, { entityVariant: w.D.ARTIST, adminUrl: ed }) }),
                        !I && (0, a.jsx)($.WithOffline, { fallback: (0, a.jsx)(W.L, { onClick: ei, isPinned: null == h ? void 0 : h.isPinned }) }),
                        (0, a.jsx)($.WithOffline, {
                            fallback: (0, a.jsx)(V.T, {
                                onClick: et,
                                isLiked: null == h ? void 0 : h.isLiked,
                                disabled: !Q.isAuthorized || !(null == h ? void 0 : h.isAvailable),
                            }),
                        }),
                        eS && (0, a.jsx)($.WithOffline, { fallback: (0, a.jsx)(X.N, { onClick: eC }) }),
                        eT &&
                            (0, a.jsx)($.WithOffline, {
                                fallback: (0, a.jsx)(q.C, { onClick: ek, disabled: !(null == h ? void 0 : h.isAvailable), variant: F.I.ARTIST, onOpenMenuChange: S }),
                            }),
                        (0, a.jsx)(G.H, { disabled: !h, shareLink: eo, entityMeta: ep }),
                        eL &&
                            (0, a.jsx)($.WithOffline, {
                                fallback: (0, a.jsx)(u.Dr, {
                                    onClick: e_,
                                    icon: (0, a.jsx)(d.I, { variant: 'info', size: 'xxs' }),
                                    'data-test-id': n.Kq.artist.ARTIST_CONTEXT_MENU_ABOUT_ARTIST_BUTTON,
                                    children: eA,
                                }),
                            }),
                        (0, a.jsx)($.WithOffline, {
                            fallback: (0, a.jsx)(Y.D, { onClick: ea, isDisliked: null == h ? void 0 : h.isDisliked, disabled: !(null == h ? void 0 : h.isAvailable) }),
                        }),
                    ],
                });
            });
        },
        47513: (e, i, t) => {
            'use strict';
            t.d(i, { r: () => l });
            var a = t(53548),
                s = t(2058);
            let l = (e) => {
                let { formatMessage: i } = (0, s.A)();
                return (0, a.useMemo)(() => {
                    let t = '';
                    e.isLiked && !e.actualLikesCount
                        ? (t = i({ id: 'entity-names.has-your-like' }))
                        : 'number' == typeof e.actualLikesCount &&
                          (t =
                              e.actualLikesCount > 0
                                  ? i({ id: 'entity-names.likes-counter' }, { counter: e.actualLikesCount })
                                  : i({ id: 'entity-names.likes-counter-empty' }));
                    let a = i({ id: 'entity-names.playlist-name' }, { playlistName: e.title });
                    return ''.concat(a, ' ').concat(t);
                }, [i, e]);
            };
        },
        54243: (e, i, t) => {
            'use strict';
            t.d(i, { T: () => n });
            var a = t(88800),
                s = t(4370),
                l = t(15077),
                r = t(42729);
            let n = (e) => {
                let { artist: i, closeToast: t } = e;
                return (0, a.jsx)(r.O, {
                    closeToast: t,
                    entityVariant: l.c.ARTIST,
                    entityUrl: i.url,
                    collectionUrl: s.Z.collectionArtists.href,
                    coverUri: i.coverUri,
                    entityTitle: i.name,
                    isLiked: i.isLiked,
                });
            };
        },
        56117: (e, i, t) => {
            'use strict';
            t.d(i, { D: () => d });
            var a = t(88800),
                s = t(84961),
                l = t(88969),
                r = t(17392),
                n = t(52300),
                o = t(19934),
                c = t(72288);
            let d = (0, s.PA)((e) => {
                let { isDisliked: i, onClick: t, disabled: s, className: d } = e,
                    { user: u } = (0, c.g)();
                return (0, a.jsx)(o.Dr, {
                    onClick: t,
                    className: d,
                    icon: (0, a.jsx)(n.I, { variant: i ? 'disliked' : 'dislike', size: 'xxs' }),
                    role: 'menuitemcheckbox',
                    'aria-checked': i,
                    disabled: s || !u.isAuthorized,
                    'data-test-id': r.S7.CONTEXT_MENU_DISLIKE_BUTTON,
                    children: (0, a.jsx)(l.A, { id: 'interface-actions.do-not-like' }),
                });
            });
        },
        59918: (e, i, t) => {
            'use strict';
            t.d(i, { N: () => l });
            var a = t(27169),
                s = t(29201);
            let l = (e) => {
                var i, t, l, r, n;
                return e
                    ? {
                          id: e.id,
                          decomposed:
                              (null == (i = e.decomposed)
                                  ? void 0
                                  : i.map((e) => {
                                        var i;
                                        return {
                                            id: e.id,
                                            name: e.name,
                                            various: e.various || !1,
                                            composer: e.isComposer || !1,
                                            item: e.separator,
                                            available: null == (i = e.isAvailable) || i,
                                            disclaimers: (0, s.H)(e.disclaimers),
                                        };
                                    })) || [],
                          name: e.name,
                          cover: { uri: e.coverUri || '', type: a.Q.PIC, prefix: '', custom: !1 },
                          ogImage: '',
                          derivedColors: { accent: '', average: e.averageColor || '', miniPlayer: '', waveText: '' },
                          available: e.isAvailable,
                          disclaimers: (0, s.H)(e.disclaimers),
                          counts: {
                              directAlbums: (null == (t = e.counts) ? void 0 : t.albums) || 0,
                              alsoAlbums: (null == (l = e.counts) ? void 0 : l.compilations) || 0,
                              tracks: (null == (r = e.counts) ? void 0 : r.tracks) || 0,
                              alsoTracks: 0,
                          },
                          trailer: { available: !!(null == (n = e.trailer) ? void 0 : n.isAvailable) },
                          hasPromotions: !1,
                          genres: [],
                          links: [],
                          ticketsAvailable: !1,
                          ratings: { week: 0, month: 0, day: 0 },
                          composer: e.isComposer || !1,
                          various: e.various || !1,
                      }
                    : {
                          id: '',
                          name: '',
                          various: !1,
                          composer: !1,
                          decomposed: [],
                          ogImage: '',
                          hasPromotions: !1,
                          genres: [],
                          ticketsAvailable: !1,
                          links: [],
                          ratings: { week: 0, month: 0, day: 0 },
                          counts: { directAlbums: 0, alsoAlbums: 0, tracks: 0, alsoTracks: 0 },
                          available: !1,
                          disclaimers: [],
                      };
            };
        },
        64207: (e, i, t) => {
            'use strict';
            t.d(i, { K: () => v });
            var a = t(88800),
                s = t(96706),
                l = t(53548),
                r = t(2058),
                n = t(79390),
                o = t(29595),
                c = t(74965),
                d = t(72288),
                u = t(66943),
                m = t(54243);
            let v = (e) => {
                let { user: i } = (0, d.g)(),
                    { notify: t } = (0, c.l)(),
                    [v, A] = (0, l.useState)(!1),
                    { formatMessage: k } = (0, r.A)();
                return (0, l.useCallback)(async () => {
                    if (!e) return;
                    if (!i.isAuthorized) return void t((0, a.jsx)(u.h, { error: k({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                    if (v) return;
                    let l = { ...(0, s.HO)(e), isLiked: !e.isLiked };
                    A(!0);
                    let r = await e.toggleLike();
                    (A(!1),
                        r === n.f.OK
                            ? t((0, a.jsx)(m.T, { artist: l }), { containerId: o.u.INFO })
                            : t((0, a.jsx)(u.h, { error: k({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR }));
                }, [e, i.isAuthorized, v, k, t]);
            };
        },
        64247: (e, i, t) => {
            'use strict';
            t.d(i, { l: () => r });
            var a = t(88800),
                s = t(15077),
                l = t(33719);
            let r = (e) => {
                let { artist: i, closeToast: t } = e;
                return (0, a.jsx)(l.k, {
                    closeToast: t,
                    entityVariant: s.c.ARTIST,
                    coverUri: i.coverUri,
                    entityUrl: i.url,
                    entityTitle: i.name,
                    isPinned: i.isPinned,
                    radius: 'round',
                });
            };
        },
        68495: (e, i, t) => {
            'use strict';
            t.d(i, { J: () => s });
            var a = t(27169);
            let s = (e) => {
                var i;
                return e
                    ? {
                          playlistUuid: e.uuid,
                          available: e.isAvailable,
                          uid: e.uid,
                          kind: e.kind,
                          title: e.title || '',
                          revision: e.revision || 0,
                          snapshot: 0,
                          trackCount: e.tracksCount || 0,
                          visibility: e.visibility || 'public',
                          collective: !1,
                          created: '',
                          modified: '',
                          isBanner: !1,
                          isPremiere: !1,
                          durationMs: 0,
                          cover: { uri: e.coverUri || '', type: a.Q.PIC, prefix: '', custom: !1 },
                          ogImage: e.coverUri || '',
                          tags: [],
                          likesCount: e.likesCount || 0,
                          generatedPlaylistType: e.generatedPlaylistType || '',
                          trailer: { available: !!(null == (i = e.trailer) ? void 0 : i.isAvailable) },
                      }
                    : {
                          playlistUuid: '',
                          available: !0,
                          uid: 0,
                          kind: 0,
                          title: '',
                          revision: 0,
                          snapshot: 0,
                          trackCount: 0,
                          visibility: 'public',
                          collective: !1,
                          created: '',
                          modified: '',
                          isBanner: !1,
                          isPremiere: !1,
                          durationMs: 0,
                          cover: { uri: '', type: a.Q.PIC, prefix: '', custom: !1 },
                          ogImage: '',
                          tags: [],
                          likesCount: 0,
                          generatedPlaylistType: '',
                          trailer: { available: !0 },
                      };
            };
        },
        70278: (e, i, t) => {
            'use strict';
            t.d(i, { f: () => s });
            var a = t(59918);
            let s = (e) => {
                var i;
                if (!e)
                    return {
                        id: 0,
                        title: '',
                        availableForOptions: [],
                        availableForPremiumUsers: !0,
                        artists: [],
                        volumes: [],
                        ogImage: '',
                        availablePartially: !1,
                        trackCount: 0,
                        recent: !1,
                        veryImportant: !1,
                        labels: [],
                        metaType: '',
                        availableForMobile: !0,
                    };
                let t = (null == (i = e.artists) ? void 0 : i.map(a.N)) || [];
                return {
                    id: e.id,
                    title: e.title,
                    type: e.type,
                    coverUri: e.coverUri,
                    year: e.year,
                    version: e.version,
                    availableForOptions: e.availableForOptions || [],
                    availableForPremiumUsers: e.availableForPremiumUsers || !0,
                    artists: t,
                    volumes: [],
                    ogImage: e.coverUri || '',
                    availablePartially: !1,
                    trackCount: e.trackCount || 0,
                    recent: !1,
                    veryImportant: !1,
                    labels: [],
                    metaType: '',
                    availableForMobile: !0,
                };
            };
        },
        74929: (e, i, t) => {
            'use strict';
            t.d(i, { p: () => u });
            var a = t(88800),
                s = t(53548),
                l = t(87999),
                r = t(49784),
                n = t(7833),
                o = t(47934),
                c = t(10079);
            let d = (e) => {
                    let {
                        forwardRef: i,
                        isShimmerVisible: t,
                        isShimmerActive: s,
                        title: d,
                        description: u,
                        albums: m,
                        className: v,
                        containerClassName: A,
                        headerClassName: k,
                        viewAllActionLink: C,
                        headingRef: _,
                        headingVariant: p,
                        shouldSendAnalyticsOnLoaded: h,
                        ...S
                    } = e;
                    return (
                        (0, r.W)({ enabled: !!h && !t }),
                        (0, a.jsx)(o.O, {
                            isShimmerVisible: t,
                            isShimmerActive: s,
                            className: v,
                            headerClassName: k,
                            containerClassName: A,
                            ref: i,
                            title: d,
                            description: u,
                            viewAllActionLink: C,
                            headingRef: _,
                            headingVariant: p,
                            ...S,
                            children:
                                null == m
                                    ? void 0
                                    : m.map((e, i) =>
                                          (0, a.jsx)(
                                              n.B,
                                              {
                                                  objectType: l.DomainObjectType.Album,
                                                  objectId: String(e.id),
                                                  objectPosX: i + 1,
                                                  objectPosY: 1,
                                                  children: (0, a.jsx)(c.a, {
                                                      album: e,
                                                      contentLinesCount: 3,
                                                      withAddition: !e.isNonMusic,
                                                      withLikesCount: e.isNonMusic,
                                                  }),
                                              },
                                              e.id,
                                          ),
                                      ),
                        })
                    );
                },
                u = (0, s.forwardRef)((e, i) => (0, a.jsx)(d, { forwardRef: i, ...e }));
        },
        75021: (e) => {
            e.exports = {
                root: 'GenrePage_root___kL_v',
                content: 'GenrePage_content__NRwAJ',
                shimmerTitle: 'GenrePage_shimmerTitle__hrgjK',
                carouselBlocks: 'GenrePage_carouselBlocks__kR63B',
                carouselBlock: 'GenrePage_carouselBlock__QCkpK',
                carouselBlockHeader: 'GenrePage_carouselBlockHeader__u12sn',
            };
        },
        77455: (e, i, t) => {
            'use strict';
            t.d(i, { A: () => m });
            var a = t(88800),
                s = t(96706),
                l = t(53548),
                r = t(2058),
                n = t(29595),
                o = t(74965),
                c = t(72288),
                d = t(66943),
                u = t(64247);
            let m = (e) => {
                let { user: i } = (0, c.g)(),
                    { notify: t } = (0, o.l)(),
                    { formatMessage: m } = (0, r.A)(),
                    [v, A] = (0, l.useState)(!1);
                return (0, l.useCallback)(async () => {
                    if (!e) return;
                    if (!i.isAuthorized) return void t((0, a.jsx)(d.h, { error: m({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: n.u.ERROR });
                    if (v) return;
                    let l = { ...(0, s.HO)(e), isPinned: !e.isPinned };
                    A(!0);
                    let r = await e.togglePin();
                    (A(!1),
                        r
                            ? t((0, a.jsx)(u.l, { artist: l }), { containerId: n.u.INFO })
                            : t((0, a.jsx)(d.h, { error: m({ id: 'error-messages.error-during-action' }) }), { containerId: n.u.ERROR }));
                }, [e, i.isAuthorized, v, m, t]);
            };
        },
        80715: (e, i, t) => {
            'use strict';
            t.d(i, { E: () => u });
            var a = t(88800),
                s = t(53548),
                l = t(87999),
                r = t(49784),
                n = t(7833),
                o = t(47934),
                c = t(41911);
            let d = (e) => {
                    let {
                        forwardRef: i,
                        isShimmerVisible: t,
                        isShimmerActive: s,
                        title: d,
                        description: u,
                        playlists: m,
                        containerClassName: v,
                        className: A,
                        headerClassName: k,
                        viewAllActionLink: C,
                        headingVariant: _,
                        shouldSendAnalyticsOnLoaded: p,
                        ...h
                    } = e;
                    return (
                        (0, r.W)({ enabled: !!p && !t }),
                        (0, a.jsx)(o.O, {
                            isShimmerVisible: t,
                            isShimmerActive: s,
                            className: A,
                            headerClassName: k,
                            containerClassName: v,
                            ref: i,
                            title: d,
                            description: u,
                            viewAllActionLink: C,
                            headingVariant: _,
                            ...h,
                            children:
                                null == m
                                    ? void 0
                                    : m.map((e, i) =>
                                          (0, a.jsx)(
                                              n.B,
                                              {
                                                  objectType: l.DomainObjectType.Playlist,
                                                  objectId: e.id,
                                                  objectPosX: i + 1,
                                                  objectPosY: 1,
                                                  children: (0, a.jsx)(c.B, { playlist: e, contentLinesCount: 3 }),
                                              },
                                              e.key,
                                          ),
                                      ),
                        })
                    );
                },
                u = (0, s.forwardRef)((e, i) => (0, a.jsx)(d, { forwardRef: i, ...e }));
        },
        85074: (e) => {
            e.exports = {
                message: 'NotificationDislike_message__RoxZH',
                text: 'NotificationDislike_text__fJHts',
                cover: 'NotificationDislike_cover__N5Oqu',
                image: 'NotificationDislike_image__jn4_4',
            };
        },
        85902: (e, i, t) => {
            'use strict';
            t.d(i, { K: () => v });
            var a = t(88800),
                s = t(96706),
                l = t(53548),
                r = t(2058),
                n = t(79390),
                o = t(29595),
                c = t(74965),
                d = t(72288),
                u = t(66943),
                m = t(30832);
            let v = (e) => {
                let { user: i } = (0, d.g)(),
                    { notify: t } = (0, c.l)(),
                    [v, A] = (0, l.useState)(!1),
                    { formatMessage: k } = (0, r.A)();
                return (0, l.useCallback)(async () => {
                    if (!i.isAuthorized) return void t((0, a.jsx)(u.h, { error: k({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                    if (v) return;
                    let l = { ...(0, s.HO)(e), url: e.url, isLiked: !e.isLiked };
                    A(!0);
                    let r = await e.toggleLike();
                    (A(!1),
                        r === n.f.OK
                            ? t((0, a.jsx)(m.T, { playlist: l }), { containerId: o.u.INFO })
                            : t((0, a.jsx)(u.h, { error: k({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR }));
                }, [i.isAuthorized, v, e, k, t]);
            };
        },
        86535: (e, i, t) => {
            'use strict';
            t.d(i, { h: () => s });
            var a = t(64284),
                s = (function (e) {
                    return (
                        (e[(e.RUP_MAIN_RADIO = ''.concat(a.U.RUP, '_').concat(a.U.MAIN, '-').concat(a.U.RADIO))] = 'RUP_MAIN_RADIO'),
                        (e[(e.DISCOGRAPHY_CAROUSEL = ''.concat(a.U.DISCOGRAPHY, '_').concat(a.U.CAROUSEL))] = 'DISCOGRAPHY_CAROUSEL'),
                        (e[(e.ALBUMS_CAROUSEL = ''.concat(a.U.ALBUMS, '_').concat(a.U.CAROUSEL))] = 'ALBUMS_CAROUSEL'),
                        (e[(e.COMPILATIONS_CAROUSEL = ''.concat(a.U.COMPILATIONS, '_').concat(a.U.CAROUSEL))] = 'COMPILATIONS_CAROUSEL'),
                        (e[(e.PLAYLISTS_CAROUSEL = ''.concat(a.U.PLAYLISTS, '_').concat(a.U.CAROUSEL))] = 'PLAYLISTS_CAROUSEL'),
                        (e[(e.ARTISTS_CAROUSEL = ''.concat(a.U.ARTISTS, '_').concat(a.U.CAROUSEL))] = 'ARTISTS_CAROUSEL'),
                        (e[(e.CLIPS_CAROUSEL = ''.concat(a.U.CLIPS, '_').concat(a.U.CAROUSEL))] = 'CLIPS_CAROUSEL'),
                        (e[(e.DISCOVERY_BLOCK = ''.concat(a.U.DISCOVERY, '_').concat(a.U.BLOCK))] = 'DISCOVERY_BLOCK'),
                        (e[(e.PLAYLISTS_SIMILAR = ''.concat(a.U.PLAYLISTS, '_').concat(a.U.SIMILAR))] = 'PLAYLISTS_SIMILAR'),
                        (e[(e.SEARCH_HISTORY = ''.concat(a.U.SEARCH, '_').concat(a.U.HISTORY))] = 'SEARCH_HISTORY'),
                        (e[(e.PLAYLISTS_SIMILAR_PLAYLIST = ''.concat(a.U.PLAYLISTS, '_').concat(a.U.SIMILAR, '_').concat(a.U.PLAYLIST))] = 'PLAYLISTS_SIMILAR_PLAYLIST'),
                        (e[(e.SEARCH_BEST_RESULTS = ''.concat(a.U.SEARCH, '_').concat(a.U.BEST_RESULTS))] = 'SEARCH_BEST_RESULTS'),
                        (e[(e.SEARCH_OPEN_BEST_RESULTS = ''.concat(a.U.SEARCH, '_').concat(a.U.OPEN_BEST_RESULTS))] = 'SEARCH_OPEN_BEST_RESULTS'),
                        e
                    );
                })({});
        },
        91959: (e, i, t) => {
            'use strict';
            t.d(i, { S: () => s });
            var a = t(58217);
            let s = (e) => {
                let { artist: i, callback: t, shouldHistoryBack: s } = e;
                return (0, a.l)({ entity: i, callback: t, modalBehavior: void 0 === s ? void 0 : { shouldHistoryBack: s }, preventDefaultWhenSafe: !0 });
            };
        },
        93434: (e) => {
            e.exports = {
                controls: 'ArtistCard_controls__jsqqI',
                cover: 'ArtistCard_cover__29ShU',
                root: 'ArtistCard_root__x67BK',
                srTitleLink: 'ArtistCard_srTitleLink__jzfOW',
                coverBlock: 'ArtistCard_coverBlock__dBL4x',
                image: 'ArtistCard_image__pONJx',
                titleLink: 'ArtistCard_titleLink__G8Puz',
                playButton: 'ArtistCard_playButton__XZoTr',
                likeButton: 'ArtistCard_likeButton__LU9TL',
                menuButton: 'ArtistCard_menuButton__EynXG',
                pinButton: 'ArtistCard_pinButton__G_VOi',
                trailerButton: 'ArtistCard_trailerButton__a2NHm',
                control: 'ArtistCard_control___qv5j',
            };
        },
        96333: (e, i, t) => {
            Promise.resolve().then(t.bind(t, 9133));
        },
    },
    (e) => {
        (e.O(
            0,
            [
                4700, 7908, 1147, 2691, 3248, 5038, 7065, 4555, 1191, 7072, 916, 6706, 4771, 1311, 8832, 6904, 4495, 2058, 3578, 8628, 4975, 4827, 8283, 1800, 2207, 4732,
                9087, 3979, 6719, 1928, 9091, 9124, 900, 9934, 2470, 7670, 4441, 9337, 2088, 79, 7934, 9269, 763, 2670, 7358,
            ],
            () => e((e.s = 96333)),
        ),
            (_N_E = e.O()));
    },
]);
