(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6902],
    {
        2350: (e) => {
            e.exports = {
                root: 'CarouselBlock_root__aeOla',
                controls: 'CarouselBlock_controls__vsHCR',
                shimmerTitle: 'CarouselBlock_shimmerTitle__ZXIRx',
                item: 'CarouselBlock_item__DatZ2',
                important: 'CarouselBlock_important__AARmP',
            };
        },
        6322: (e, t, i) => {
            'use strict';
            i.d(t, { l: () => l });
            var a = i(88800),
                s = i(15077),
                r = i(33719);
            let l = (e) => {
                let { playlist: t, closeToast: i } = e;
                return (0, a.jsx)(r.k, {
                    closeToast: i,
                    entityVariant: s.c.PLAYLIST,
                    entityUrl: t.url,
                    coverUri: t.coverUri,
                    entityTitle: t.title,
                    isPinned: t.isPinned,
                    radius: 's',
                });
            };
        },
        7756: (e, t, i) => {
            Promise.resolve().then(i.bind(i, 9133));
        },
        9133: (e, t, i) => {
            'use strict';
            (i.r(t), i.d(t, { default: () => W }));
            var a = i(88800),
                s = i(53548),
                r = i(58390),
                l = i(65724),
                n = i(84961),
                o = i(2058),
                c = i(66719),
                d = i(29504),
                u = i(32596),
                m = i(74929),
                v = i(21256),
                p = i(69630),
                A = i(80715),
                C = i(86535),
                h = i(12816),
                k = i(82204),
                _ = i(59844),
                S = i(46422),
                x = i(44230),
                T = i(37670),
                L = i(34961),
                y = i(53892),
                b = i(47934),
                f = i(93317),
                I = i(30144),
                g = i(72288),
                j = i(324),
                R = i(46511),
                P = i(13012),
                N = i(57297),
                O = i(2218),
                U = i(77863),
                B = i(45383),
                E = i(40883);
            async function w(e, t) {
                let { locale: i, fullUrl: a, url: s, tld: r, host: l } = t,
                    n = await (0, R.W)(i),
                    o = e.title.fullTitle,
                    c = n({ id: 'metadata.genre-title' }, { genreTitle: o }),
                    d = 'artists' in e ? e.artists : void 0,
                    u = (0, E.f)({ genreTitle: o, artists: d, messageFormatter: n }),
                    m = new URL(''.concat('', '/meta/og-image.png'), 'https://'.concat(l)).href;
                return {
                    title: c,
                    description: u,
                    openGraph: (0, N.i)({
                        ogTitle: (0, P.N)(o),
                        ogDescription: u,
                        fullUrl: null != a ? a : '',
                        locale: i,
                        siteName: n({ id: 'metadata.yandex-music' }),
                        ogImage: m,
                    }),
                    twitter: (0, O.H)({ cardType: U.W.APP, title: c, url: null != s ? s : '', appName: n({ id: 'metadata.yandex-music' }) }),
                    appLinks: (0, j.X)({
                        additional: { tld: r, url: null != s ? s : '', fullUrl: null != a ? a : '', host: l },
                        appName: n({ id: 'metadata.yandex-music' }),
                    }),
                    alternates: (0, B.S)('/genre/:metatagId', t.tld, { params: { metatagId: e.id } }),
                };
            }
            var D = i(19922),
                M = i(59918),
                z = i(68495),
                F = i(75021),
                K = i.n(F);
            let H = (0, n.PA)((e) => {
                let { metatagId: t, preloadedMeta: i } = e,
                    n = (0, L.s)(y.n.GENRE),
                    { formatMessage: j } = (0, o.A)(),
                    { contentScrollRef: R, setContentScrollRef: P } = (0, x.g)(),
                    N = (0, S.W)();
                return (n.isNotFound && (0, r.notFound)(),
                (0, s.useEffect)(
                    () => () => {
                        n.reset();
                    },
                    [n],
                ),
                (0, T.J)(n.isResolved),
                ((e) => {
                    let { fullscreenVideoPlayer: t } = (0, g.g)(),
                        i = null == e ? void 0 : e.fullTitle,
                        a = null == e ? void 0 : e.isResolved,
                        r = null == e ? void 0 : e.isRejected,
                        l = (0, s.useCallback)(
                            (t) =>
                                r
                                    ? {}
                                    : e && a && i
                                      ? w(
                                            ((e) => ({
                                                id: '',
                                                title: { title: '', fullTitle: e.fullTitle || '' },
                                                liked: !1,
                                                tracks: [],
                                                artists: e.artists.map(M.N),
                                                composers: [],
                                                albums: e.albums.map(D.f),
                                                playlists: e.playlists.map(z.J),
                                            }))(e),
                                            t,
                                        )
                                      : void 0,
                            [e, i, a, r],
                        );
                    (0, I.C)(t.modal.isOpened ? null : l);
                })(n),
                t && n.isNeededToLoad && (0, s.use)(n.getData({ id: t, preloadedMeta: i })),
                n.isRejected && !n.isNotFound)
                    ? (0, a.jsx)(u.SomethingWentWrong, {})
                    : (0, a.jsx)(_.n, {
                          pageId: h._Q.GENRE,
                          children: (0, a.jsxs)(p.h, {
                              scrollElement: R,
                              outerTitle: n.fullTitle,
                              children: [
                                  (0, a.jsx)(f.Y, {
                                      variant: f.V.TEXT,
                                      withForwardControl: !1,
                                      withBackwardControl: N.canBack,
                                      children: (0, a.jsx)(d.DZ, { variant: 'h2', weight: 'bold', size: 'xl', lineClamp: 1, children: n.fullTitle }),
                                  }),
                                  (0, a.jsx)(c.N, {
                                      className: K().root,
                                      containerClassName: K().content,
                                      ref: P,
                                      children: (0, a.jsxs)('div', {
                                          className: K().carouselBlocks,
                                          children: [
                                              n.hasPlaylists &&
                                                  (0, a.jsx)(k.F, {
                                                      blockId: C.h.PLAYLISTS_CAROUSEL,
                                                      blockType: C.h.PLAYLISTS_CAROUSEL,
                                                      blockPosX: 1,
                                                      blockPosY: 1,
                                                      blockIdForFrom: C.h.PLAYLISTS_CAROUSEL,
                                                      objectsCount: n.albums.length,
                                                      children: (0, a.jsx)(A.E, {
                                                          isShimmerVisible: n.isLoading,
                                                          isShimmerActive: !0,
                                                          headerClassName: (0, l.$)(K().carouselBlockHeader, K().carouselBlock),
                                                          containerClassName: K().carouselBlock,
                                                          playlists: n.playlists,
                                                          title: j({ id: 'entity-names.popular-playlists' }),
                                                          viewAllActionLink: '/genre/'.concat(n.id, '/playlists'),
                                                      }),
                                                  }),
                                              n.hasAlbums &&
                                                  (0, a.jsx)(k.F, {
                                                      blockId: C.h.ALBUMS_CAROUSEL,
                                                      blockType: C.h.ALBUMS_CAROUSEL,
                                                      blockPosX: 1,
                                                      blockPosY: 2,
                                                      blockIdForFrom: C.h.ALBUMS_CAROUSEL,
                                                      objectsCount: n.albums.length,
                                                      children: (0, a.jsx)(m.p, {
                                                          isShimmerVisible: n.isLoading,
                                                          isShimmerActive: !0,
                                                          headerClassName: (0, l.$)(K().carouselBlockHeader, K().carouselBlock),
                                                          containerClassName: K().carouselBlock,
                                                          albums: n.albums,
                                                          title: j({ id: 'entity-names.new-albums' }),
                                                          viewAllActionLink: '/genre/'.concat(n.id, '/albums'),
                                                      }),
                                                  }),
                                              n.hasArtists &&
                                                  (0, a.jsx)(k.F, {
                                                      blockId: C.h.ARTISTS_CAROUSEL,
                                                      blockType: C.h.ARTISTS_CAROUSEL,
                                                      blockPosX: 1,
                                                      blockPosY: 3,
                                                      blockIdForFrom: C.h.ARTISTS_CAROUSEL,
                                                      objectsCount: n.albums.length,
                                                      children: (0, a.jsx)(b.O, {
                                                          isShimmerVisible: n.isLoading,
                                                          isShimmerActive: !0,
                                                          isShimmerCentered: !0,
                                                          isShimmerRounded: !0,
                                                          headerClassName: (0, l.$)(K().carouselBlockHeader, K().carouselBlock),
                                                          containerClassName: K().carouselBlock,
                                                          title: j({ id: 'entity-names.popular-artists' }),
                                                          viewAllActionLink: '/genre/'.concat(n.id, '/artists'),
                                                          children: n.artists.map((e) => (0, a.jsx)(v.a, { artist: e, contentLinesCount: 3 }, e.id)),
                                                      }),
                                                  }),
                                          ],
                                      }),
                                  }),
                              ],
                          }),
                      });
            });
            var Y = i(19994);
            let V = () => {
                    let { formatMessage: e } = (0, o.A)(),
                        { contentScrollRef: t, setContentScrollRef: i } = (0, x.g)(),
                        s = (0, S.W)();
                    return (0, a.jsxs)(p.h, {
                        scrollElement: t,
                        children: [
                            (0, a.jsx)(f.Y, {
                                variant: f.V.TEXT,
                                withForwardControl: !1,
                                withBackwardControl: s.canBack,
                                children: (0, a.jsx)(Y.W, { className: K().shimmerTitle, radius: 'l' }),
                            }),
                            (0, a.jsx)(c.N, {
                                className: K().root,
                                containerClassName: K().content,
                                ref: i,
                                children: (0, a.jsxs)('div', {
                                    className: K().carouselBlocks,
                                    children: [
                                        (0, a.jsx)(A.E, {
                                            isShimmerVisible: !0,
                                            isShimmerActive: !0,
                                            headerClassName: (0, l.$)(K().carouselBlockHeader, K().carouselBlock),
                                            containerClassName: K().carouselBlock,
                                            title: e({ id: 'entity-names.popular-playlists' }),
                                        }),
                                        (0, a.jsx)(m.p, {
                                            isShimmerVisible: !0,
                                            isShimmerActive: !0,
                                            headerClassName: (0, l.$)(K().carouselBlockHeader, K().carouselBlock),
                                            containerClassName: K().carouselBlock,
                                            title: e({ id: 'entity-names.new-albums' }),
                                        }),
                                        (0, a.jsx)(b.O, {
                                            isShimmerVisible: !0,
                                            isShimmerActive: !0,
                                            isShimmerCentered: !0,
                                            isShimmerRounded: !0,
                                            headerClassName: (0, l.$)(K().carouselBlockHeader, K().carouselBlock),
                                            containerClassName: K().carouselBlock,
                                            title: e({ id: 'entity-names.popular-artists' }),
                                        }),
                                    ],
                                }),
                            }),
                        ],
                    });
                },
                W = () => {
                    let e = (0, r.useSearchParams)().get('metatagId');
                    return (e || (0, r.notFound)(), (0, a.jsx)(s.Suspense, { fallback: (0, a.jsx)(V, {}), children: (0, a.jsx)(H, { metatagId: e }) }));
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
        19922: (e, t, i) => {
            'use strict';
            i.d(t, { f: () => s });
            var a = i(59918);
            let s = (e) => {
                var t;
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
                let i = (null == (t = e.artists) ? void 0 : t.map((e) => (0, a.N)(e))) || [];
                return {
                    id: e.id,
                    title: e.title,
                    type: e.type,
                    coverUri: e.coverUri,
                    year: e.year,
                    version: e.version,
                    availableForOptions: e.availableForOptions || [],
                    availableForPremiumUsers: e.availableForPremiumUsers || !0,
                    artists: i,
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
        21256: (e, t, i) => {
            'use strict';
            i.d(t, { a: () => F });
            var a = i(88800),
                s = i(65724),
                r = i(84961),
                l = i(53548),
                n = i(2058),
                o = i(92716),
                c = i(17392),
                d = i(18593),
                u = i(29993),
                m = i(79070),
                v = i(29832),
                p = i(52300),
                A = i(7555),
                C = i(29504),
                h = i(91959),
                k = i(64207),
                _ = i(77455),
                S = i(5407),
                x = i(96527),
                T = i(76675),
                L = i(25557),
                y = i(28830),
                b = i(84384),
                f = i(4795),
                I = i(78940),
                g = i(55693),
                j = i(39079),
                R = i(72288),
                P = i(81877),
                N = i(49738),
                O = i(91292),
                U = i(56862),
                B = i(16704),
                E = i(56446),
                w = i(36207),
                D = i(43161),
                M = i(93434),
                z = i.n(M);
            let F = (0, r.PA)((e) => {
                let { artist: t, className: i, children: r, contentLinesCount: M, topTitleElement: F, bottomTitleElement: K } = e,
                    { ref: H, intersectionPropertyId: Y } = (0, y.n)(),
                    {
                        trailer: V,
                        user: W,
                        paywall: { modal: X },
                    } = (0, R.g)(),
                    { from: $, utmLink: q } = (0, b.f)({ contextId: t.id, contextType: d.K.Artist }),
                    { formatMessage: G } = (0, n.A)(),
                    [Z, J] = (0, l.useState)(!1),
                    [Q, ee] = (0, l.useState)(!1),
                    [et, ei] = (0, l.useState)(!1),
                    { sendLikeSearchFeedback: ea, sendNavigateSearchFeedback: es, sendPlaySearchFeedback: er } = (0, g.z)(),
                    el = (0, x.N)(),
                    en = (0, T.b)(),
                    eo = (0, k.K)(t),
                    ec = (0, _.A)(t),
                    { id: ed, name: eu, coverUri: em, isLiked: ev } = t,
                    ep = (0, I.Z)(t.url),
                    [eA, eC] = (0, l.useState)(!1),
                    eh = (0, L.F)(),
                    ek = (0, S.P)(),
                    e_ = (0, u.c)((e) => {
                        if ((e.stopPropagation(), ek())) return void e.preventDefault();
                        (V.openArtistTrailer(t.id), eh(o.DomainObjectType.Artist, t.id));
                    }),
                    eS = (0, l.useMemo)(() => {
                        let e = G({ id: 'entity-names.artist-name' }, { artistName: eu }),
                            t = ev ? G({ id: 'entity-names.has-your-like' }) : '';
                        return ''.concat(e, ' ').concat(t);
                    }, [eu, ev, G]),
                    { isPlaying: ex, togglePlay: eT } = (0, j.D)({
                        playContextParams: { contextData: { type: d.K.Artist, meta: { id: Number(ed) }, from: $, utmLink: q }, loadContextMeta: !0 },
                    }),
                    eL = (0, h.S)({ artist: t, callback: ep }),
                    ey = (0, h.S)({ artist: t, callback: eT }),
                    eb = (0, u.c)((e) => {
                        (null == es || es(), el({ to: o.AppScreen.ArtistScreen }), eL(e));
                    }),
                    ef = (0, f.N)(),
                    eI = (0, u.c)(() => {
                        if (!ek()) {
                            if (ef) return void X.open();
                            (Z || ex || (J(!0), null == er || er()), ey(), en(!ex));
                        }
                    }),
                    eg = (0, u.c)(() => {
                        (Q || ev || (ee(!0), null == ea || ea()), eo());
                    }),
                    ej = (0, u.c)((e) => {
                        (e.preventDefault(), e.stopPropagation());
                    }),
                    eR = (0, u.c)((e) => {
                        (ei(e), eC(e));
                    }),
                    eP = (0, l.useMemo)(
                        () =>
                            (0, a.jsx)(
                                D.g,
                                {
                                    artist: t,
                                    onOpenChange: eR,
                                    open: et,
                                    onClick: ej,
                                    className: (0, s.$)(z().menuButton, z().control),
                                    size: 's',
                                    icon: (0, a.jsx)(p.I, { size: 'xxs', variant: 'more' }),
                                    'data-test-id': c.Kq.artist.ARTIST_CONTEXT_MENU_BUTTON,
                                },
                                t.getKey('ArtistContextMenu'),
                            ),
                        [t, ej, eR, et],
                    ),
                    eN = (0, l.useMemo)(() => {
                        var e;
                        if (null == t || null == (e = t.trailer) ? void 0 : e.isAvailable)
                            return (0, a.jsx)(
                                w.n,
                                {
                                    children: (0, a.jsx)(E.k, {
                                        className: (0, s.$)(z().trailerButton, z().control),
                                        radius: 'round',
                                        size: 's',
                                        iconSize: 'xxs',
                                        onClick: e_,
                                    }),
                                },
                                t.getKey('ArtistCardTrailerTooltip'),
                            );
                    }, [t, e_]),
                    eO = (0, l.useMemo)(
                        () =>
                            (0, a.jsx)(
                                U.O,
                                { onClick: ec, isPinned: t.isPinned, className: (0, s.$)(z().pinButton, z().control), withRipple: !1 },
                                t.getKey('PinButton'),
                            ),
                        [t, ec],
                    ),
                    eU = (0, m.L)(() => {
                        if (t.isAvailable)
                            return (0, a.jsx)(
                                v.hg,
                                {
                                    isVisible: et || eA,
                                    className: z().controls,
                                    radius: 'round',
                                    playControl: (0, a.jsx)(
                                        B.D,
                                        {
                                            buttonVariant: 'default',
                                            withHover: !1,
                                            className: (0, s.$)(z().playButton, z().control),
                                            iconSize: 'xl',
                                            variant: 'filled',
                                            onClick: eI,
                                            isPlaying: ex,
                                            disabled: !t.isAvailableForPlaying,
                                        },
                                        t.getKey('PlayButton'),
                                    ),
                                    likeControl: (0, a.jsx)(
                                        N.c,
                                        {
                                            className: (0, s.$)(z().likeButton, z().control),
                                            isLiked: ev,
                                            onClick: eg,
                                            variant: 'default',
                                            size: 's',
                                            iconSize: 'xxs',
                                            disabled: !W.isAuthorized,
                                        },
                                        t.getKey('LikeButton'),
                                    ),
                                    menuControl: eP,
                                    pinControl: eO,
                                    trailerControl: eN,
                                },
                                t.getKey('ArtistCardControls'),
                            );
                    }),
                    eB = (0, l.useMemo)(
                        () =>
                            (0, a.jsx)(A.t, {
                                className: z().cover,
                                radius: 'round',
                                withShadow: !0,
                                'data-test-id': c.Kq.artist.ARTIST_CARD,
                                children: (0, a.jsxs)('div', {
                                    className: z().coverBlock,
                                    onClick: eb,
                                    children: [
                                        (0, a.jsx)(P.B, {
                                            className: z().image,
                                            src: em,
                                            size: 200,
                                            fit: 'cover',
                                            alt: eS,
                                            withAvatarReplace: !0,
                                            isAvailable: t.isAvailable,
                                            'aria-hidden': !0,
                                        }),
                                        eU,
                                    ],
                                }),
                            }),
                        [eb, em, eS, t.isAvailable, eU],
                    );
                return (0, a.jsx)(v.MN, {
                    ref: H,
                    className: (0, s.$)(z().root, i),
                    textPosition: 'center',
                    'aria-label': eS,
                    title: (0, a.jsxs)(a.Fragment, {
                        children: [
                            F,
                            (0, a.jsx)(C.HL, {
                                variant: 'div',
                                type: 'entity',
                                size: 's',
                                weight: 'medium',
                                lineClamp: 2,
                                'aria-hidden': !0,
                                children: (0, a.jsx)(O.N, {
                                    className: z().titleLink,
                                    href: t.url,
                                    tabIndex: -1,
                                    'aria-label': eS,
                                    onClick: eb,
                                    'data-test-id': c.Kq.artist.ARTIST_TITLE,
                                    children: eu,
                                }),
                            }),
                            K,
                        ],
                    }),
                    srTitle: (0, a.jsx)(O.N, { className: z().srTitleLink, href: t.url, onClick: eb, children: eS }),
                    'data-intersection-property-id': Y,
                    contentLinesCount: M,
                    view: eB,
                    'data-test-id': c.Kq.artist.ARTIST_ITEM,
                    children: r,
                });
            });
        },
        24460: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => m });
            var a = i(88800),
                s = i(96706),
                r = i(53548),
                l = i(2058),
                n = i(29595),
                o = i(74965),
                c = i(72288),
                d = i(66943),
                u = i(6322);
            let m = (e) => {
                let { user: t } = (0, c.g)(),
                    { notify: i } = (0, o.l)(),
                    { formatMessage: m } = (0, l.A)(),
                    [v, p] = (0, r.useState)(!1);
                return (0, r.useCallback)(async () => {
                    if (!t.isAuthorized) return void i((0, a.jsx)(d.h, { error: m({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: n.u.ERROR });
                    if (v) return;
                    let r = { ...(0, s.HO)(e), url: e.url, isPinned: !e.isPinned };
                    p(!0);
                    let l = await e.togglePin();
                    (p(!1),
                        l
                            ? i((0, a.jsx)(u.l, { playlist: r }), { containerId: n.u.INFO })
                            : i((0, a.jsx)(d.h, { error: m({ id: 'error-messages.error-during-action' }) }), { containerId: n.u.ERROR }));
                }, [t.isAuthorized, v, e, i, m]);
            };
        },
        29201: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => s });
            var a = i(35396);
            let s = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                return e.map((e) => ((0, a.C)(e) ? e : void 0)).filter((e) => void 0 !== e);
            };
        },
        30832: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => l });
            var a = i(88800),
                s = i(15077),
                r = i(42729);
            let l = (e) => {
                let { playlist: t, closeToast: i } = e;
                return (0, a.jsx)(r.O, {
                    entityVariant: s.c.PLAYLIST,
                    entityUrl: t.url,
                    collectionUrl: '/collection',
                    entityTitle: t.title,
                    isLiked: t.isLiked,
                    closeToast: i,
                    coverUri: t.coverUri,
                });
            };
        },
        35396: (e, t, i) => {
            'use strict';
            var a;
            (i.d(t, { C: () => r }),
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
                r = (e) => 'string' == typeof e && s.has(e);
        },
        35962: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => r });
            var a = i(88800),
                s = i(37770);
            let r = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return Array.from({ length: 9 }, (t, i) => (0, a.jsx)(s.V, { ...e }, i));
            };
        },
        41911: (e, t, i) => {
            'use strict';
// for PulseSync: BEGIN import the download icon for playlist menu actions

            var pulseSyncPlaylistDownloadIcons = i(52300);
// for PulseSync: END import the download icon for playlist menu actions
            i.d(t, { B: () => Q });
            // for PulseSync WebHost: BEGIN imports for native addon context menu items
            var pulseSyncMenuJsx = i(88800),
                pulseSyncMenuItems = i(19934),
                pulseSyncMenuIcons = i(52300);
            // for PulseSync WebHost: END imports for native addon context menu items
            var a = i(88800),
                s = i(65724),
                r = i(84961),
                l = i(53548),
                n = i(2058),
                o = i(92716),
                c = i(17392),
                d = i(18593),
                u = i(29993),
                m = i(79070),
                v = i(29832),
                p = i(52300),
                A = i(7555),
                C = i(29504),
                h = i(13946),
                k = i(85902),
                _ = i(24460),
                S = i(5407),
                x = i(96527),
                T = i(76675),
                L = i(25557),
                y = i(28830),
                b = i(84384),
                f = i(4795),
                I = i(78940),
                g = i(55693),
                j = i(39079),
                R = i(72288),
                P = i(86298),
                N = i(81877),
                O = i(49738),
                U = i(91292),
                B = i(56862),
                E = i(16704),
                w = i(56446),
                D = i(36207),
                M = i(47513),
                z = i(19934),
                F = i(48749),
                K = i(22505),
                H = i(9618),
                Y = i(95210),
                V = i(46936),
                W = i(97956),
                X = i(93091),
                $ = i(27817),
                q = i(15425);
            let G = (0, r.PA)((e) => {
                var t;
                let { playlist: i, onOpenChange: s, open: r, ...l } = e,
                    { shouldShowBuySubscriptionModal: d, showBuySubscriptionModal: m } = (0, H.q)(),
                    {
                        experiments: v,
                        settings: { isMobile: p },
                        trailer: A,
                        user: C,
                    } = (0, R.g)(),
                    h = (0, k.K)(i),
                    x = (0, _.A)(i),
                    T = (0, L.F)(),
                    { formatMessage: y } = (0, n.A)(),
                    b = (0, S.P)(),
                    f = v.checkExperiment(W.z.WebEditorsFeatures, 'on'),
                    I = (0, F.A)({ entityVariant: V.D.PLAYLIST, urlParams: { id: i.uid, kind: i.kind } });
                (0, Y.N)(r);
                let g = (0, u.c)(() => {
                    if (d) return void m();
                    b() || (A.openPlaylistTrailer(i.id), T(o.DomainObjectType.Playlist, i.id));
                });
                // for PulseSync WebHost: BEGIN playlist context and native addon menu item rendering
                let pulseSyncInjectPlaylistMenuItems = (items) =>
                    window.pulsesyncApi?.injectNativeSlotItems?.('playlistContextMenu', items, {
                        eventDetail: {
                            id: String(i.kind ?? i.id),
                            uuid: String(i.uuid ?? ''),
                            url: String(i.url ?? ''),
                            ...(i.title
                                ? {
                                      title: String(i.title),
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
                return (0, a.jsxs)(z.W1, {
                    title: i.title,
                    onOpenChange: s,
                    open: r,
                    offsetOptions: 10,
                    isMobile: p,
                    ariaLabel: y({ id: 'interface-actions.context-menu' }),
                    containerDataTestId: c.Kq.playlist.PLAYLIST_CONTEXT_MENU,
                    ...l,
                    // for PulseSync WebHost: BEGIN inject native addon items into the playlist context menu
                    children: pulseSyncInjectPlaylistMenuItems([
                        f && (0, a.jsx)(K.d, { entityVariant: V.D.PLAYLIST, adminUrl: i.isFavouritePlaylist ? void 0 : I }),
                        !p && (0, a.jsx)($.L, { onClick: x, isPinned: i.isPinned }),
                        !i.isFavouritePlaylist && (0, a.jsx)(X.T, { onClick: h, isLiked: i.isLiked, disabled: !C.isAuthorized }),
                        // for PulseSync: BEGIN download-to-file action in the playlist context menu
                        (i.tracksCount ?? 1) > 0 &&
                            (0, a.jsx)(z.Dr, {
                                onClick: i.downloadToFile,
                                icon: (0, a.jsx)(pulseSyncPlaylistDownloadIcons.I, { variant: 'download', size: 'xxs' }),
                                children: 'Скачать в файл',
                            }),
                        // for PulseSync: END download-to-file action in the playlist context menu
                        (null == (t = i.trailer) ? void 0 : t.isAvailable) && (0, a.jsx)(q.N, { onClick: g, disabled: !i.isAvailable }),
                    ]),
                    // for PulseSync WebHost: END inject native addon items into the playlist context menu
                });
            });
            var Z = i(17657),
                J = i.n(Z);
            let Q = (0, r.PA)((e) => {
                let { className: t, playlist: i, children: r, contentLinesCount: z, customDescription: F, onCoverMouseDown: K } = e,
                    { ref: H, intersectionPropertyId: Y } = (0, y.n)(),
                    {
                        trailer: V,
                        user: W,
                        paywall: { modal: X },
                    } = (0, R.g)(),
                    { from: $, utmLink: q } = (0, b.f)({ contextId: i.uuid, contextType: d.K.Playlist }),
                    { formatMessage: Z } = (0, n.A)(),
                    { sendLikeSearchFeedback: Q, sendNavigateSearchFeedback: ee, sendPlaySearchFeedback: et } = (0, g.z)(),
                    [ei, ea] = (0, l.useState)(!1),
                    [es, er] = (0, l.useState)(!1),
                    [el, en] = (0, l.useState)(!1),
                    eo = (0, M.r)(i),
                    ec = (0, k.K)(i),
                    ed = (0, _.A)(i),
                    eu = (0, x.N)(),
                    em = (0, T.b)(),
                    ev = (0, I.Z)(i.url),
                    ep = (0, L.F)(),
                    eA = (0, S.P)(),
                    eC = (0, u.c)((e) => {
                        if ((e.stopPropagation(), eA())) return void e.preventDefault();
                        (V.setUtmLink(q), V.openPlaylistTrailer(i.id), ep(o.DomainObjectType.Playlist, i.id));
                    }),
                    [eh, ek] = (0, l.useState)(!1),
                    { isPlaying: e_, togglePlay: eS } = (0, j.D)({
                        playContextParams: { contextData: { type: d.K.Playlist, meta: { id: i.id, uuid: i.uuid }, from: $, utmLink: q }, loadContextMeta: !0 },
                    }),
                    ex = (0, u.c)(() => {
                        (eu({ to: o.AppScreen.PlaylistScreen }), null == ee || ee());
                    }),
                    eT = (0, u.c)((e) => {
                        (ex(), ev(e));
                    }),
                    eL = (0, f.N)(),
                    ey = (0, u.c)(() => {
                        if (!eA()) {
                            if (eL) return void X.open();
                            (ei || e_ || (ea(!0), null == et || et()), eS(), em(!e_));
                        }
                    }),
                    eb = (0, u.c)(() => {
                        (es || i.isLiked || (er(!0), null == Q || Q()), ec());
                    }),
                    ef = (0, u.c)((e) => {
                        (e.preventDefault(), e.stopPropagation());
                    }),
                    eI = (0, u.c)((e) => {
                        (en(e), ek(e));
                    }),
                    eg = (0, l.useMemo)(() => {
                        var e;
                        return F
                            ? (0, a.jsx)(C.HL, { variant: 'span', type: 'entity', size: 's', weight: 'medium', lineClamp: 2, children: F }, i.getKey('description'))
                            : (null == (e = i.artists) ? void 0 : e.length)
                              ? (0, a.jsx)(
                                    h.i,
                                    { className: J().artists, artists: i.artists, lineClamp: 1, linkClassName: J().artistLink, captionSize: 's' },
                                    i.getKey('description'),
                                )
                              : void 0;
                    }, [F, i]),
                    ej = (0, m.L)(() => {
                        if (!i.isFavouritePlaylist)
                            return (0, a.jsx)(
                                O.c,
                                {
                                    className: (0, s.$)(J().likeButton, J().control),
                                    isLiked: i.isLiked,
                                    onClick: eb,
                                    variant: 'default',
                                    size: 's',
                                    iconSize: 'xxs',
                                    disabled: !W.isAuthorized,
                                },
                                i.getKey('LikeButton'),
                            );
                    }),
                    eR = (0, l.useMemo)(() => {
                        var e;
                        if (null == i || null == (e = i.trailer) ? void 0 : e.isAvailable)
                            return (0, a.jsx)(
                                D.n,
                                {
                                    children: (0, a.jsx)(
                                        w.k,
                                        { className: (0, s.$)(J().trailerButton, J().control), radius: 'round', size: 's', iconSize: 'xxs', onClick: eC },
                                        i.getKey('TrailerButton'),
                                    ),
                                },
                                i.getKey('PlaylilstCardTrailerTooltip'),
                            );
                    }, [eC, i]),
                    eP = (0, l.useMemo)(
                        () =>
                            (0, a.jsx)(
                                B.O,
                                { onClick: ed, isPinned: i.isPinned, className: (0, s.$)(J().pinButton, J().control), withRipple: !1 },
                                i.getKey('PinButton'),
                            ),
                        [ed, i],
                    ),
                    eN = (0, l.useMemo)(
                        () =>
                            (0, a.jsx)(A.t, {
                                className: J().cover,
                                radius: 's',
                                withShadow: !0,
                                'data-test-id': c.Kq.playlist.PLAYLIST_CARD,
                                children: (0, a.jsxs)('div', {
                                    className: J().coverBlock,
                                    onClick: eT,
                                    onMouseDown: K,
                                    children: [
                                        (0, a.jsx)(N.B, {
                                            className: J().image,
                                            src: i.coverUri,
                                            size: 200,
                                            fit: 'cover',
                                            alt: eo,
                                            withAvatarReplace: !0,
                                            'aria-hidden': !0,
                                        }),
                                        (0, a.jsx)(v.hg, {
                                            isVisible: el || eh,
                                            className: J().controls,
                                            playControl: (0, a.jsx)(
                                                E.D,
                                                {
                                                    className: (0, s.$)(J().playButton, J().control),
                                                    buttonVariant: 'default',
                                                    withHover: !1,
                                                    iconSize: 'xl',
                                                    variant: 'filled',
                                                    onClick: ey,
                                                    isPlaying: e_,
                                                    disabled: !i.isAvailable,
                                                },
                                                i.getKey('PlayButton'),
                                            ),
                                            likeControl: ej,
                                            menuControl: (0, a.jsx)(
                                                G,
                                                {
                                                    playlist: i,
                                                    onOpenChange: eI,
                                                    open: el,
                                                    onClick: ef,
                                                    className: (0, s.$)(J().menuButton, J().control),
                                                    icon: (0, a.jsx)(p.I, { size: 'xxs', variant: 'more' }),
                                                    size: 's',
                                                    'data-test-id': c.Kq.playlist.PLAYLIST_CONTEXT_MENU_BUTTON,
                                                },
                                                i.getKey('PlaylistContextMenu'),
                                            ),
                                            pinControl: eP,
                                            trailerControl: eR,
                                        }),
                                    ],
                                }),
                            }),
                        [eT, K, i, eo, el, eh, ey, e_, ej, eI, ef, eP, eR],
                    ),
                    eO = !!i.actualLikesCount && !i.isLikesCountHidden;
                return (0, a.jsxs)(v.MN, {
                    ref: H,
                    'aria-label': eo,
                    className: (0, s.$)(J().root, t),
                    title: (0, a.jsx)(C.HL, {
                        variant: 'div',
                        type: 'entity',
                        size: 's',
                        weight: 'medium',
                        lineClamp: 2,
                        'aria-hidden': !0,
                        'data-test-id': c.Kq.playlist.PLAYLIST_TITLE,
                        children: (0, a.jsx)(U.N, { className: J().titleLink, href: i.url, tabIndex: -1, onClick: ex, children: i.title }),
                    }),
                    srTitle: (0, a.jsx)(U.N, { className: J().srTitleLink, href: i.url, onClick: ex, children: i.title }),
                    'data-intersection-property-id': Y,
                    contentLinesCount: z,
                    view: eN,
                    description: eg,
                    'data-test-id': c.Kq.playlist.PLAYLIST_ITEM,
                    children: [
                        eO &&
                            (0, a.jsx)(P.x, {
                                ariaLabel: Z({ id: 'entity-names.likes-counter' }, { counter: i.actualLikesCount }),
                                likesCount: i.actualLikesCount,
                                isLiked: i.isLiked,
                                handleLikeClick: ec,
                            }),
                        r,
                    ],
                });
            });
        },
        43161: (e, t, i) => {
            'use strict';
            i.d(t, { g: () => Z });
            var a = i(88800),
                s = i(84961),
                r = i(2058),
                l = i(92716),
                n = i(17392),
                o = i(18593),
                c = i(29993),
                d = i(52300),
                u = i(19934),
                m = i(96706),
                v = i(53548),
                p = i(79390),
                A = i(29595),
                C = i(74965),
                h = i(72288),
                k = i(66943),
                _ = i(7555),
                S = i(73170),
                x = i(29504),
                T = i(59304),
                L = i(81877),
                y = i(85074),
                b = i.n(y);
            let f = (e) => {
                let { coverUri: t, title: i, isDisliked: s, closeToast: l } = e,
                    { formatMessage: n } = (0, r.A)(),
                    o = n(s ? { id: 'notifications-info.artist-unavailable-in-recommendations' } : { id: 'notifications-info.artist-available-in-recommendations' });
                return (0, a.jsx)(T.$, {
                    closeToast: l,
                    message: (0, a.jsxs)('div', {
                        className: b().message,
                        children: [
                            (0, a.jsx)(S.q, { children: (0, a.jsx)('p', { role: 'alert', 'aria-label': o }) }),
                            (0, a.jsx)(_.t, {
                                className: b().cover,
                                radius: 'round',
                                children: (0, a.jsx)(L.B, { className: b().image, src: t, alt: i, size: 100, fit: 'cover', withAvatarReplace: !0 }),
                            }),
                            (0, a.jsx)(x.HL, { className: b().text, variant: 'div', type: 'controls', size: 'm', 'aria-hidden': !0, children: o }),
                        ],
                    }),
                });
            };
            var I = i(64207),
                g = i(77455),
                j = i(48749),
                R = i(22505),
                P = i(5407),
                N = i(64284),
                O = i(12816),
                U = i(25557),
                B = i(84384),
                E = i(9618),
                w = i(95210),
                D = i(47964),
                M = i(46936),
                z = i(97956),
                F = i(98953),
                K = i(32721),
                H = i(18130),
                Y = i(56117),
                V = i(93091),
                W = i(27817),
                X = i(74064),
                $ = i(15425),
                q = i(81066),
                G = i(64546);
            let Z = (0, s.PA)((e) => {
                var t, i, s;
                let { artist: _, onOpenChange: S, open: x, ...T } = e,
                    { shouldShowBuySubscriptionModal: L, showBuySubscriptionModal: y } = (0, E.q)(),
                    {
                        settings: { isMobile: b },
                        modals: { artistAboutModal: Z },
                        trailer: J,
                        user: Q,
                        experiments: ee,
                    } = (0, h.g)(),
                    et = (0, g.A)(_),
                    ei = (0, I.K)(_),
                    ea = ((e) => {
                        let { user: t } = (0, h.g)(),
                            { notify: i } = (0, C.l)(),
                            [s, l] = (0, v.useState)(!1),
                            { formatMessage: n } = (0, r.A)();
                        return (0, c.c)(async () => {
                            if (!e) return;
                            if (!t.isAuthorized)
                                return void i((0, a.jsx)(k.h, { error: n({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: A.u.ERROR });
                            if (s) return;
                            let r = { ...(0, m.HO)(e), isDisliked: !e.isDisliked };
                            l(!0);
                            let o = await e.toggleDislike();
                            (l(!1),
                                o === p.f.OK
                                    ? i((0, a.jsx)(f, { coverUri: r.coverUri, title: r.name, isDisliked: r.isDisliked }), { containerId: A.u.INFO })
                                    : i((0, a.jsx)(k.h, { error: n({ id: 'error-messages.error-during-action' }) }), { containerId: A.u.ERROR }));
                        });
                    })(_),
                    es = (0, U.F)(),
                    er = ''.concat(N.U.ARTIST, '-').concat(null == _ ? void 0 : _.id),
                    { formatMessage: el } = (0, r.A)(),
                    { utmLink: en } = (0, B.f)({ blockId: N.U.ARTIST, contextType: o.K.Artist, contextId: null == _ ? void 0 : _.id }),
                    { shareLink: eo, pathname: ec } = (0, H.b)('/artist/:artistId', { params: { artistId: null != (i = null == _ ? void 0 : _.id) ? i : '' } }),
                    ed = (0, j.A)({ entityVariant: M.D.ARTIST, urlParams: { id: null == _ ? void 0 : _.id } }),
                    { isPlaying: eu, togglePlay: em } = (0, D.B)({
                        seeds: null != (s = null == _ ? void 0 : _.seeds) ? s : [],
                        pageIdForFrom: O._Q.RADIO,
                        blockIdForFrom: er,
                        parentContextId: null == _ ? void 0 : _.id,
                    }),
                    ev = (0, P.P)(),
                    ep = el((null == _ ? void 0 : _.isComposer) ? { id: 'artist.about-composer' } : { id: 'artist.about-artist' }),
                    eA = (0, c.c)(() => {
                        if (L && Q.isAuthorized) return void y();
                        eu || em();
                    }),
                    eC = (0, c.c)(() => {
                        if (!ev()) {
                            if (L) return void y();
                            (null == _ ? void 0 : _.id) && (J.setUtmLink(en), J.openArtistTrailer(_.id), es(l.DomainObjectType.Artist, _.id));
                        }
                    }),
                    eh = (0, c.c)(() => {
                        Z.open(null == _ ? void 0 : _.id);
                    });
                (0, w.N)(x);
                let ek = { variant: F.Y.ARTIST, id: null == _ ? void 0 : _.id, title: null == _ ? void 0 : _.name, path: ec },
                    e_ = ee.checkExperiment(z.z.WebEditorsFeatures, 'on'),
                    eS = null == _ || null == (t = _.trailer) ? void 0 : t.isAvailable,
                    ex = ee.checkExperiment(z.z.WebNextArtistInfo, 'on'),
                    eT = !ee.checkExperiment(z.z.WebNextProductWithoutRecommendation, 'on');
                return (0, a.jsxs)(u.W1, {
                    isMobile: b,
                    offsetOptions: 10,
                    open: x,
                    onOpenChange: S,
                    ariaLabel: el({ id: 'interface-actions.context-menu' }),
                    containerDataTestId: n.Kq.artist.ARTIST_CONTEXT_MENU,
                    ...T,
                    children: [
                        e_ && (0, a.jsx)(G.WithOffline, { fallback: (0, a.jsx)(R.d, { entityVariant: M.D.ARTIST, adminUrl: ed }) }),
                        !b && (0, a.jsx)(G.WithOffline, { fallback: (0, a.jsx)(W.L, { onClick: et, isPinned: null == _ ? void 0 : _.isPinned }) }),
                        (0, a.jsx)(G.WithOffline, {
                            fallback: (0, a.jsx)(V.T, {
                                onClick: ei,
                                isLiked: null == _ ? void 0 : _.isLiked,
                                disabled: !Q.isAuthorized || !(null == _ ? void 0 : _.isAvailable),
                            }),
                        }),
                        eS && (0, a.jsx)(G.WithOffline, { fallback: (0, a.jsx)($.N, { onClick: eC }) }),
                        eT &&
                            (0, a.jsx)(G.WithOffline, {
                                fallback: (0, a.jsx)(q.C, { onClick: eA, disabled: !(null == _ ? void 0 : _.isAvailable), variant: K.I.ARTIST, onOpenMenuChange: S }),
                            }),
                        (0, a.jsx)(X.H, { disabled: !_, shareLink: eo, entityMeta: ek }),
                        ex &&
                            (0, a.jsx)(G.WithOffline, {
                                fallback: (0, a.jsx)(u.Dr, {
                                    onClick: eh,
                                    icon: (0, a.jsx)(d.I, { variant: 'info', size: 'xxs' }),
                                    'data-test-id': n.Kq.artist.ARTIST_CONTEXT_MENU_ABOUT_ARTIST_BUTTON,
                                    children: ep,
                                }),
                            }),
                        (0, a.jsx)(G.WithOffline, {
                            fallback: (0, a.jsx)(Y.D, { onClick: ea, isDisliked: null == _ ? void 0 : _.isDisliked, disabled: !(null == _ ? void 0 : _.isAvailable) }),
                        }),
                    ],
                });
            });
        },
        47513: (e, t, i) => {
            'use strict';
            i.d(t, { r: () => r });
            var a = i(53548),
                s = i(2058);
            let r = (e) => {
                let { formatMessage: t } = (0, s.A)();
                return (0, a.useMemo)(() => {
                    let i = '';
                    e.isLiked && !e.actualLikesCount
                        ? (i = t({ id: 'entity-names.has-your-like' }))
                        : 'number' == typeof e.actualLikesCount &&
                          (i =
                              e.actualLikesCount > 0
                                  ? t({ id: 'entity-names.likes-counter' }, { counter: e.actualLikesCount })
                                  : t({ id: 'entity-names.likes-counter-empty' }));
                    let a = t({ id: 'entity-names.playlist-name' }, { playlistName: e.title });
                    return ''.concat(a, ' ').concat(i);
                }, [t, e]);
            };
        },
        47934: (e, t, i) => {
            'use strict';
            i.d(t, { O: () => _ });
            var a = i(88800),
                s = i(65724),
                r = i(53548),
                l = i(35412),
                n = i(92716),
                o = i(79070),
                c = i(53323),
                d = i(19994),
                u = i(34500),
                m = i(77948),
                v = i(18486),
                p = i(31764),
                A = i(35962),
                C = i(2350),
                h = i.n(C);
            let k = (e) => {
                    let {
                            forwardRef: t,
                            shimmerClassName: i,
                            isShimmerVisible: C,
                            isShimmerActive: k,
                            isShimmerWithSubcover: _,
                            isShimmerCentered: S,
                            isShimmerRounded: x,
                            title: T,
                            description: L,
                            coverUrl: y,
                            viewAllActionLink: b,
                            titleChildren: f,
                            headerChildren: I,
                            children: g,
                            className: j,
                            containerClassName: R,
                            headerClassName: P,
                            itemClassName: N,
                            showHeaderShimmer: O = !1,
                            showShimmerInfo: U = !0,
                            showControls: B = !0,
                            headingRef: E,
                            headingVariant: w,
                            customShimmer: D,
                            ...M
                        } = e,
                        z = (0, r.useId)(),
                        F = (0, r.useRef)(null),
                        { objectsCount: K } = (0, u.N)(),
                        H = (0, r.useMemo)(
                            () =>
                                O && C
                                    ? (0, a.jsx)('div', { className: P, children: (0, a.jsx)(d.W, { isActive: k, className: h().shimmerTitle, radius: 'l' }) })
                                    : T || L || f || I
                                      ? (0, a.jsx)(m.B, {
                                            objectType: n.DomainObjectType.Shortcut,
                                            objectId: String(b),
                                            objectPosX: 0,
                                            objectPosY: 0,
                                            objectsCount: null != K ? K : 0,
                                            children: (0, a.jsx)(v.T, {
                                                className: P,
                                                labeledForId: z,
                                                title: T,
                                                description: L,
                                                coverUrl: y,
                                                viewAllActionLink: b,
                                                controls: B && (0, a.jsx)(p.X, { className: h().controls, carouselRef: F }),
                                                headingRef: E,
                                                headingVariant: w,
                                                withDescription: !!L,
                                                titleChildren: f,
                                                children: I,
                                            }),
                                        })
                                      : void 0,
                            [y, L, P, E, w, z, k, C, K, B, O, T, f, I, b],
                        ),
                        Y = (0, o.L)(() => D || (0, A.k)({ className: i, isActive: k, withInfo: U, withSubcover: _, centered: S, round: x }));
                    return (0, a.jsxs)('section', {
                        ref: t,
                        className: (0, s.$)(h().root, j),
                        ...(0, l.OZ)(M),
                        children: [
                            H,
                            (0, a.jsx)(c.F, {
                                className: R,
                                ref: F,
                                itemClassName: (0, s.$)(h().item, h().important, N),
                                'aria-labelledby': ''.concat(z, ' ').concat(z, '-description'),
                                children: C ? Y : g,
                            }),
                        ],
                    });
                },
                _ = (0, r.forwardRef)((e, t) => (0, a.jsx)(k, { forwardRef: t, ...e }));
        },
        54243: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => n });
            var a = i(88800),
                s = i(4370),
                r = i(15077),
                l = i(42729);
            let n = (e) => {
                let { artist: t, closeToast: i } = e;
                return (0, a.jsx)(l.O, {
                    closeToast: i,
                    entityVariant: r.c.ARTIST,
                    entityUrl: t.url,
                    collectionUrl: s.Z.collectionArtists.href,
                    coverUri: t.coverUri,
                    entityTitle: t.name,
                    isLiked: t.isLiked,
                });
            };
        },
        56117: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => d });
            var a = i(88800),
                s = i(84961),
                r = i(88969),
                l = i(17392),
                n = i(52300),
                o = i(19934),
                c = i(72288);
            let d = (0, s.PA)((e) => {
                let { isDisliked: t, onClick: i, disabled: s, className: d } = e,
                    { user: u } = (0, c.g)();
                return (0, a.jsx)(o.Dr, {
                    onClick: i,
                    className: d,
                    icon: (0, a.jsx)(n.I, { variant: t ? 'disliked' : 'dislike', size: 'xxs' }),
                    role: 'menuitemcheckbox',
                    'aria-checked': t,
                    disabled: s || !u.isAuthorized,
                    'data-test-id': l.S7.CONTEXT_MENU_DISLIKE_BUTTON,
                    children: (0, a.jsx)(r.A, { id: 'interface-actions.do-not-like' }),
                });
            });
        },
        59918: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => r });
            var a = i(27169),
                s = i(29201);
            let r = (e) => {
                var t, i, r, l, n;
                return e
                    ? {
                          id: e.id,
                          decomposed:
                              (null == (t = e.decomposed)
                                  ? void 0
                                  : t.map((e) => {
                                        var t;
                                        return {
                                            id: e.id,
                                            name: e.name,
                                            various: e.various || !1,
                                            composer: e.isComposer || !1,
                                            item: e.separator,
                                            available: null == (t = e.isAvailable) || t,
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
                              directAlbums: (null == (i = e.counts) ? void 0 : i.albums) || 0,
                              alsoAlbums: (null == (r = e.counts) ? void 0 : r.compilations) || 0,
                              tracks: (null == (l = e.counts) ? void 0 : l.tracks) || 0,
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
        64207: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => v });
            var a = i(88800),
                s = i(96706),
                r = i(53548),
                l = i(2058),
                n = i(79390),
                o = i(29595),
                c = i(74965),
                d = i(72288),
                u = i(66943),
                m = i(54243);
            let v = (e) => {
                let { user: t } = (0, d.g)(),
                    { notify: i } = (0, c.l)(),
                    [v, p] = (0, r.useState)(!1),
                    { formatMessage: A } = (0, l.A)();
                return (0, r.useCallback)(async () => {
                    if (!e) return;
                    if (!t.isAuthorized) return void i((0, a.jsx)(u.h, { error: A({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                    if (v) return;
                    let r = { ...(0, s.HO)(e), isLiked: !e.isLiked };
                    p(!0);
                    let l = await e.toggleLike();
                    (p(!1),
                        l === n.f.OK
                            ? i((0, a.jsx)(m.T, { artist: r }), { containerId: o.u.INFO })
                            : i((0, a.jsx)(u.h, { error: A({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR }));
                }, [e, t.isAuthorized, v, A, i]);
            };
        },
        64247: (e, t, i) => {
            'use strict';
            i.d(t, { l: () => l });
            var a = i(88800),
                s = i(15077),
                r = i(33719);
            let l = (e) => {
                let { artist: t, closeToast: i } = e;
                return (0, a.jsx)(r.k, {
                    closeToast: i,
                    entityVariant: s.c.ARTIST,
                    coverUri: t.coverUri,
                    entityUrl: t.url,
                    entityTitle: t.name,
                    isPinned: t.isPinned,
                    radius: 'round',
                });
            };
        },
        68495: (e, t, i) => {
            'use strict';
            i.d(t, { J: () => s });
            var a = i(27169);
            let s = (e) => {
                var t;
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
                          trailer: { available: !!(null == (t = e.trailer) ? void 0 : t.isAvailable) },
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
        74929: (e, t, i) => {
            'use strict';
            i.d(t, { p: () => u });
            var a = i(88800),
                s = i(53548),
                r = i(92716),
                l = i(28163),
                n = i(77948),
                o = i(47934),
                c = i(10079);
            let d = (e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: i,
                            isShimmerActive: d,
                            title: u,
                            description: m,
                            albums: v,
                            className: p,
                            containerClassName: A,
                            headerClassName: C,
                            viewAllActionLink: h,
                            headingRef: k,
                            headingVariant: _,
                            shouldSendAnalyticsOnLoaded: S,
                            ...x
                        } = e,
                        T = (0, l.f)();
                    return (
                        (0, s.useEffect)(() => {
                            S && T();
                        }, [T, S]),
                        (0, a.jsx)(o.O, {
                            isShimmerVisible: i,
                            isShimmerActive: d,
                            className: p,
                            headerClassName: C,
                            containerClassName: A,
                            ref: t,
                            title: u,
                            description: m,
                            viewAllActionLink: h,
                            headingRef: k,
                            headingVariant: _,
                            ...x,
                            children:
                                null == v
                                    ? void 0
                                    : v.map((e, t) =>
                                          (0, a.jsx)(
                                              n.B,
                                              {
                                                  objectType: r.DomainObjectType.Album,
                                                  objectId: String(e.id),
                                                  objectPosX: t + 1,
                                                  objectPosY: 1,
                                                  objectsCount: v.length,
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
                u = (0, s.forwardRef)((e, t) => (0, a.jsx)(d, { forwardRef: t, ...e }));
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
        77451: (e, t, i) => {
            'use strict';
            i.d(t, { Jt: () => r, TF: () => n, hZ: () => l });
            var a = function () {
                return (a =
                    Object.assign ||
                    function (e) {
                        for (var t, i = 1, a = arguments.length; i < a; i++)
                            for (var s in (t = arguments[i])) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
                        return e;
                    }).apply(this, arguments);
            };
            function s(e, t) {
                if (!t) return '';
                var i = '; ' + e;
                return !0 === t ? i : i + '=' + t;
            }
            function r(e) {
                return (function (e) {
                    for (var t = {}, i = e ? e.split('; ') : [], a = 0; a < i.length; a++) {
                        var s = i[a].split('='),
                            r = s.slice(1).join('=');
                        '"' === r[0] && (r = r.slice(1, -1));
                        try {
                            t[decodeURIComponent(s[0])] = r.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
                        } catch (e) {}
                    }
                    return t;
                })(document.cookie)[e];
            }
            function l(e, t, i) {
                var r;
                document.cookie =
                    ((r = a({ path: '/' }, i)),
                    encodeURIComponent(e)
                        .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
                        .replace(/\(/g, '%28')
                        .replace(/\)/g, '%29') +
                        '=' +
                        encodeURIComponent(t).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent) +
                        (function (e) {
                            if ('number' == typeof e.expires) {
                                var t = new Date();
                                (t.setMilliseconds(t.getMilliseconds() + 864e5 * e.expires), (e.expires = t));
                            }
                            return (
                                s('Expires', e.expires ? e.expires.toUTCString() : '') +
                                s('Domain', e.domain) +
                                s('Path', e.path) +
                                s('Secure', e.secure) +
                                s('SameSite', e.sameSite)
                            );
                        })(r));
            }
            function n(e, t) {
                l(e, '', a(a({}, t), { expires: -1 }));
            }
        },
        77455: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => m });
            var a = i(88800),
                s = i(96706),
                r = i(53548),
                l = i(2058),
                n = i(29595),
                o = i(74965),
                c = i(72288),
                d = i(66943),
                u = i(64247);
            let m = (e) => {
                let { user: t } = (0, c.g)(),
                    { notify: i } = (0, o.l)(),
                    { formatMessage: m } = (0, l.A)(),
                    [v, p] = (0, r.useState)(!1);
                return (0, r.useCallback)(async () => {
                    if (!e) return;
                    if (!t.isAuthorized) return void i((0, a.jsx)(d.h, { error: m({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: n.u.ERROR });
                    if (v) return;
                    let r = { ...(0, s.HO)(e), isPinned: !e.isPinned };
                    p(!0);
                    let l = await e.togglePin();
                    (p(!1),
                        l
                            ? i((0, a.jsx)(u.l, { artist: r }), { containerId: n.u.INFO })
                            : i((0, a.jsx)(d.h, { error: m({ id: 'error-messages.error-during-action' }) }), { containerId: n.u.ERROR }));
                }, [e, t.isAuthorized, v, m, i]);
            };
        },
        77948: (e, t, i) => {
            'use strict';
            i.d(t, { B: () => l });
            var a = i(88800),
                s = i(53548),
                r = i(90134);
            let l = (e) => {
                let { objectId: t, objectPosX: i, objectPosY: l, objectPos: n, objectType: o, objectsCount: c, mainObjectId: d, mainObjectType: u, children: m } = e,
                    v = (0, s.useMemo)(
                        () => ({ objectId: t, objectPosX: i, objectPosY: l, objectPos: n, objectType: o, objectsCount: c, mainObjectId: d, mainObjectType: u }),
                        [t, i, l, n, o, c, d, u],
                    );
                return (0, a.jsx)(r.l.Provider, { value: v, children: m });
            };
        },
        80715: (e, t, i) => {
            'use strict';
            i.d(t, { E: () => u });
            var a = i(88800),
                s = i(53548),
                r = i(92716),
                l = i(28163),
                n = i(77948),
                o = i(47934),
                c = i(41911);
            let d = (e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: i,
                            isShimmerActive: d,
                            title: u,
                            description: m,
                            playlists: v,
                            containerClassName: p,
                            className: A,
                            headerClassName: C,
                            viewAllActionLink: h,
                            headingVariant: k,
                            shouldSendAnalyticsOnLoaded: _,
                            ...S
                        } = e,
                        x = (0, l.f)();
                    return (
                        (0, s.useEffect)(() => {
                            _ && !i && x();
                        }, [i, x, _]),
                        (0, a.jsx)(o.O, {
                            isShimmerVisible: i,
                            isShimmerActive: d,
                            className: A,
                            headerClassName: C,
                            containerClassName: p,
                            ref: t,
                            title: u,
                            description: m,
                            viewAllActionLink: h,
                            headingVariant: k,
                            ...S,
                            children:
                                null == v
                                    ? void 0
                                    : v.map((e, t) =>
                                          (0, a.jsx)(
                                              n.B,
                                              {
                                                  objectType: r.DomainObjectType.Playlist,
                                                  objectId: e.id,
                                                  objectPosX: t + 1,
                                                  objectPosY: 1,
                                                  objectsCount: v.length,
                                                  children: (0, a.jsx)(c.B, { playlist: e, contentLinesCount: 3 }),
                                              },
                                              e.key,
                                          ),
                                      ),
                        })
                    );
                },
                u = (0, s.forwardRef)((e, t) => (0, a.jsx)(d, { forwardRef: t, ...e }));
        },
        82204: (e, t, i) => {
            'use strict';
            i.d(t, { F: () => l });
            var a = i(88800),
                s = i(53548),
                r = i(43620);
            let l = (e) => {
                let {
                        blockId: t,
                        blockType: i,
                        blockIdForFrom: l,
                        blockPosX: n,
                        blockPosY: o,
                        objectsCount: c,
                        mainObjectType: d,
                        mainObjectId: u,
                        children: m,
                        displayReasonId: v,
                    } = e,
                    p = (0, s.useMemo)(
                        () => ({
                            blockId: t,
                            blockType: i,
                            blockIdForFrom: l,
                            blockPosX: n,
                            blockPosY: o,
                            objectsCount: c,
                            mainObjectType: d,
                            mainObjectId: u,
                            displayReasonId: v,
                        }),
                        [t, i, l, n, o, c, d, u, v],
                    );
                return (0, a.jsx)(r.p.Provider, { value: p, children: m });
            };
        },
        85074: (e) => {
            e.exports = {
                message: 'NotificationDislike_message__RoxZH',
                text: 'NotificationDislike_text__fJHts',
                cover: 'NotificationDislike_cover__N5Oqu',
                image: 'NotificationDislike_image__jn4_4',
            };
        },
        85902: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => v });
            var a = i(88800),
                s = i(96706),
                r = i(53548),
                l = i(2058),
                n = i(79390),
                o = i(29595),
                c = i(74965),
                d = i(72288),
                u = i(66943),
                m = i(30832);
            let v = (e) => {
                let { user: t } = (0, d.g)(),
                    { notify: i } = (0, c.l)(),
                    [v, p] = (0, r.useState)(!1),
                    { formatMessage: A } = (0, l.A)();
                return (0, r.useCallback)(async () => {
                    if (!t.isAuthorized) return void i((0, a.jsx)(u.h, { error: A({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                    if (v) return;
                    let r = { ...(0, s.HO)(e), url: e.url, isLiked: !e.isLiked };
                    p(!0);
                    let l = await e.toggleLike();
                    (p(!1),
                        l === n.f.OK
                            ? i((0, a.jsx)(m.T, { playlist: r }), { containerId: o.u.INFO })
                            : i((0, a.jsx)(u.h, { error: A({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR }));
                }, [t.isAuthorized, v, e, A, i]);
            };
        },
        86535: (e, t, i) => {
            'use strict';
            i.d(t, { h: () => s });
            var a = i(64284),
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
        91959: (e, t, i) => {
            'use strict';
            i.d(t, { S: () => s });
            var a = i(58217);
            let s = (e) => {
                let { artist: t, callback: i, shouldHistoryBack: s } = e;
                return (0, a.l)({ entity: t, callback: i, modalBehavior: void 0 === s ? void 0 : { shouldHistoryBack: s }, preventDefaultWhenSafe: !0 });
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
    },
    (e) => {
        (e.O(
            0,
            [
                8752, 7435, 3637, 5108, 8380, 127, 1931, 1191, 916, 6706, 4771, 1311, 8832, 6904, 5977, 2058, 2881, 8628, 9693, 6326, 8283, 2824, 2837, 9202, 4732, 1195,
                1598, 6281, 1928, 7627, 9124, 7967, 900, 9934, 6387, 4561, 9337, 4613, 3724, 9425, 9269, 763, 2670, 7358,
            ],
            () => e((e.s = 7756)),
        ),
            (_N_E = e.O()));
    },
]);
