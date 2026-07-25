(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6902],
    {
        356: (e) => {
            e.exports = {
                message: 'NotificationDislike_message__RoxZH',
                text: 'NotificationDislike_text__fJHts',
                cover: 'NotificationDislike_cover__N5Oqu',
                image: 'NotificationDislike_image__jn4_4',
            };
        },
        2125: (e, t, i) => {
            'use strict';
            i.d(t, { h: () => r });
            var a = i(37862),
                r = (function (e) {
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
        3785: (e, t, i) => {
            'use strict';
            var a;
            i.d(t, { M: () => a }),
                (function (e) {
                    (e.MODAL = 'modal'),
                        (e.FOREIGN_AGENT = 'foreignAgent'),
                        (e.INFORMATIONAL = 'informational'),
                        (e.AGE_18 = 'age18'),
                        (e.EXPLICIT = 'explicit'),
                        (e.DESCRIPTION_TEXT = 'descriptionText'),
                        (e.AGE_18_ICON = 'age18Icon'),
                        (e.EXPLICIT_ICON = 'explicitIcon'),
                        (e.EXCLAMATION_ICON = 'exclamationIcon'),
                        (e.SUBSTITUTED_ICON = 'substitutedIcon');
                })(a || (a = {}));
        },
        5942: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => h });
            var a = i(32290),
                r = i(92708),
                l = i(55178),
                s = i(60900),
                o = i(63380),
                n = i(45477),
                c = i(75582),
                d = i(57594),
                u = i(90357),
                m = i(20472),
                _ = i(97647),
                v = i(97755);
            let C = (e) => {
                    let { artist: t, closeToast: i } = e;
                    return (0, a.jsx)(v.O, {
                        closeToast: i,
                        entityVariant: _.c.ARTIST,
                        entityUrl: t.url,
                        collectionUrl: m.Z.collectionArtists.href,
                        coverUri: t.coverUri,
                        entityTitle: t.name,
                        isLiked: t.isLiked,
                    });
                },
                h = (e) => {
                    let { user: t } = (0, d.g)(),
                        { notify: i } = (0, c.l)(),
                        [m, _] = (0, l.useState)(!1),
                        { formatMessage: v } = (0, s.A)();
                    return (0, l.useCallback)(async () => {
                        if (!e) return;
                        if (!t.isAuthorized)
                            return void i((0, a.jsx)(u.h, { error: v({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: n.u.ERROR });
                        if (m) return;
                        let l = { ...(0, r.HO)(e), isLiked: !e.isLiked };
                        _(!0);
                        let s = await e.toggleLike();
                        _(!1),
                            s === o.f.OK
                                ? i((0, a.jsx)(C, { artist: l }), { containerId: n.u.INFO })
                                : i((0, a.jsx)(u.h, { error: v({ id: 'error-messages.error-during-action' }) }), { containerId: n.u.ERROR });
                    }, [e, t.isAuthorized, m, v, i]);
                };
        },
        7474: (e, t, i) => {
            'use strict';
            i.d(t, { a: () => z });
            var a = i(32290),
                r = i(63618),
                l = i(96103),
                s = i(55178),
                o = i(60900),
                n = i(16172),
                c = i(21732),
                d = i(71483),
                u = i(91027),
                m = i(6752),
                _ = i(14934),
                v = i(82586),
                pulseSyncPlaylistDownloadIcons = i(82586),
                C = i(86269),
                h = i(71926),
                k = i(91853),
                p = i(5942),
                A = i(70390),
                x = i(71735),
                f = i(47745),
                S = i(2969),
                L = i(54391),
                y = i(23352),
                T = i(72396),
                b = i(5537),
                g = i(84062),
                I = i(28999),
                j = i(90169),
                N = i(57594),
                R = i(11323),
                P = i(92744),
                O = i(61258),
                E = i(10180),
                B = i(90326),
                U = i(29268),
                w = i(34925),
                M = i(80528),
                D = i(42048),
                H = i.n(D);
            let z = (0, l.PA)((e) => {
                let { artist: t, className: i, children: l, contentLinesCount: D, topTitleElement: z, bottomTitleElement: K } = e,
                    { ref: F, intersectionPropertyId: Y } = (0, y.n)(),
                    {
                        trailer: V,
                        user: W,
                        paywall: { modal: $ },
                    } = (0, N.g)(),
                    { from: X, utmLink: G } = (0, T.f)({ contextId: t.id, contextType: d.K.Artist }),
                    { formatMessage: q } = (0, o.A)(),
                    [Q, Z] = (0, s.useState)(!1),
                    [J, ee] = (0, s.useState)(!1),
                    [et, ei] = (0, s.useState)(!1),
                    { sendLikeSearchFeedback: ea, sendNavigateSearchFeedback: er, sendPlaySearchFeedback: el } = (0, I.z)(),
                    es = (0, f.N)(),
                    eo = (0, S.b)(),
                    en = (0, p.K)(t),
                    ec = (0, A.A)(t),
                    { id: ed, name: eu, coverUri: em, isLiked: e_ } = t,
                    ev = (0, g.Z)(t.url),
                    [eC, eh] = (0, s.useState)(!1),
                    ek = (0, L.F)(),
                    ep = (0, x.P)(),
                    eA = (0, u.c)((e) => {
                        if ((e.stopPropagation(), ep())) return void e.preventDefault();
                        V.openArtistTrailer(t.id), ek(n.ky.Artist, t.id);
                    }),
                    ex = (0, s.useMemo)(() => {
                        let e = q({ id: 'entity-names.artist-name' }, { artistName: eu }),
                            t = e_ ? q({ id: 'entity-names.has-your-like' }) : '';
                        return ''.concat(e, ' ').concat(t);
                    }, [eu, e_, q]),
                    { isPlaying: ef, togglePlay: eS } = (0, j.D)({
                        playContextParams: { contextData: { type: d.K.Artist, meta: { id: Number(ed) }, from: X, utmLink: G }, loadContextMeta: !0 },
                    }),
                    eL = (0, k.S)({ artist: t, callback: ev }),
                    ey = (0, k.S)({ artist: t, callback: eS }),
                    eT = (0, u.c)((e) => {
                        null == er || er(), es({ to: n.QT.ArtistScreen }), eL(e);
                    }),
                    eb = (0, b.N)(),
                    eg = (0, u.c)(() => {
                        if (!ep()) {
                            if (eb) return void $.open();
                            Q || ef || (Z(!0), null == el || el()), ey(), eo(!ef);
                        }
                    }),
                    eI = (0, u.c)(() => {
                        J || e_ || (ee(!0), null == ea || ea()), en();
                    }),
                    ej = (0, u.c)((e) => {
                        e.preventDefault(), e.stopPropagation();
                    }),
                    eN = (0, u.c)((e) => {
                        ei(e), eh(e);
                    }),
                    eR = (0, s.useMemo)(
                        () =>
                            (0, a.jsx)(
                                M.g,
                                {
                                    artist: t,
                                    onOpenChange: eN,
                                    open: et,
                                    onClick: ej,
                                    className: (0, r.$)(H().menuButton, H().control),
                                    size: 's',
                                    icon: (0, a.jsx)(v.I, { size: 'xxs', variant: 'more' }),
                                    'data-test-id': c.Kq.artist.ARTIST_CONTEXT_MENU_BUTTON,
                                },
                                t.getKey('ArtistContextMenu'),
                            ),
                        [t, ej, eN, et],
                    ),
                    eP = (0, s.useMemo)(() => {
                        var e;
                        if (null == t || null == (e = t.trailer) ? void 0 : e.isAvailable)
                            return (0, a.jsx)(
                                w.n,
                                {
                                    children: (0, a.jsx)(U.k, {
                                        className: (0, r.$)(H().trailerButton, H().control),
                                        radius: 'round',
                                        size: 's',
                                        iconSize: 'xxs',
                                        onClick: eA,
                                    }),
                                },
                                t.getKey('ArtistCardTrailerTooltip'),
                            );
                    }, [t, eA]),
                    eO = (0, s.useMemo)(
                        () =>
                            (0, a.jsx)(
                                E.O,
                                { onClick: ec, isPinned: t.isPinned, className: (0, r.$)(H().pinButton, H().control), withRipple: !1 },
                                t.getKey('PinButton'),
                            ),
                        [t, ec],
                    ),
                    eE = (0, m.L)(() => {
                        if (t.isAvailable)
                            return (0, a.jsx)(
                                _.hg,
                                {
                                    isVisible: et || eC,
                                    className: H().controls,
                                    radius: 'round',
                                    playControl: (0, a.jsx)(
                                        B.D,
                                        {
                                            buttonVariant: 'default',
                                            withHover: !1,
                                            className: (0, r.$)(H().playButton, H().control),
                                            iconSize: 'xl',
                                            variant: 'filled',
                                            onClick: eg,
                                            isPlaying: ef,
                                            disabled: !t.isAvailableForPlaying,
                                        },
                                        t.getKey('PlayButton'),
                                    ),
                                    likeControl: (0, a.jsx)(
                                        P.c,
                                        {
                                            className: (0, r.$)(H().likeButton, H().control),
                                            isLiked: e_,
                                            onClick: eI,
                                            variant: 'default',
                                            size: 's',
                                            iconSize: 'xxs',
                                            disabled: !W.isAuthorized,
                                        },
                                        t.getKey('LikeButton'),
                                    ),
                                    menuControl: eR,
                                    pinControl: eO,
                                    trailerControl: eP,
                                },
                                t.getKey('ArtistCardControls'),
                            );
                    }),
                    eB = (0, s.useMemo)(
                        () =>
                            (0, a.jsx)(C.t, {
                                className: H().cover,
                                radius: 'round',
                                withShadow: !0,
                                'data-test-id': c.Kq.artist.ARTIST_CARD,
                                children: (0, a.jsxs)('div', {
                                    className: H().coverBlock,
                                    onClick: eT,
                                    children: [
                                        (0, a.jsx)(R.B, {
                                            className: H().image,
                                            src: em,
                                            size: 200,
                                            fit: 'cover',
                                            alt: ex,
                                            withAvatarReplace: !0,
                                            isAvailable: t.isAvailable,
                                            'aria-hidden': !0,
                                        }),
                                        eE,
                                    ],
                                }),
                            }),
                        [eT, em, ex, t.isAvailable, eE],
                    );
                return (0, a.jsx)(_.MN, {
                    ref: F,
                    className: (0, r.$)(H().root, i),
                    textPosition: 'center',
                    'aria-label': ex,
                    title: (0, a.jsxs)(a.Fragment, {
                        children: [
                            z,
                            (0, a.jsx)(h.HL, {
                                variant: 'div',
                                type: 'entity',
                                size: 's',
                                weight: 'medium',
                                lineClamp: 2,
                                children: (0, a.jsx)(O.N, {
                                    className: H().titleLink,
                                    href: t.url,
                                    'aria-label': ex,
                                    onClick: eT,
                                    'data-test-id': c.Kq.artist.ARTIST_TITLE,
                                    children: eu,
                                }),
                            }),
                            K,
                        ],
                    }),
                    srTitle: (0, a.jsx)(O.N, { href: t.url, onClick: eT, children: ex }),
                    'data-intersection-property-id': Y,
                    contentLinesCount: D,
                    view: eB,
                    'data-test-id': c.Kq.artist.ARTIST_ITEM,
                    children: l,
                });
            });
        },
        8612: (e, t, i) => {
            'use strict';
            i.r(t), i.d(t, { default: () => W });
            var a = i(32290),
                r = i(21916),
                l = i(55178),
                s = i(63618),
                o = i(96103),
                n = i(60900),
                c = i(46049),
                d = i(71926),
                u = i(64170),
                m = i(77435),
                _ = i(7474),
                v = i(7999),
                C = i(64538),
                h = i(2125),
                k = i(48922),
                p = i(95226),
                A = i(22714),
                x = i(83808),
                f = i(83920),
                S = i(3796),
                L = i(49259),
                y = i(45066),
                T = i(98148),
                b = i(74694),
                g = i(22556),
                I = i(44242),
                j = i(42125),
                N = i(44338),
                R = i(24535),
                P = i(47216),
                O = i(94821),
                E = i(26365),
                B = i(43993),
                U = i(49124);
            async function w(e, t) {
                let { locale: i, fullUrl: a, url: r, tld: l, host: s } = t,
                    o = await (0, j.W)(i),
                    n = e.title.fullTitle,
                    c = o({ id: 'metadata.genre-title' }, { genreTitle: n }),
                    d = 'artists' in e ? e.artists : void 0,
                    u = (0, B.f)({ genreTitle: n, artists: d, messageFormatter: o }),
                    m = U.env.ASSET_PREFIX || '',
                    _ = ''.concat(s).concat(m, '/meta/og-image.png');
                return {
                    title: c,
                    description: u,
                    openGraph: (0, R.i)({
                        ogTitle: (0, N.N)(n),
                        ogDescription: u,
                        fullUrl: null != a ? a : '',
                        locale: i,
                        siteName: o({ id: 'metadata.yandex-music' }),
                        ogImage: _,
                    }),
                    twitter: (0, P.H)({ cardType: O.W.APP, title: c, url: null != r ? r : '', appName: o({ id: 'metadata.yandex-music' }) }),
                    appLinks: (0, I.X)({
                        additional: { tld: l, url: null != r ? r : '', fullUrl: null != a ? a : '', host: s },
                        appName: o({ id: 'metadata.yandex-music' }),
                    }),
                    alternates: (0, E.S)('/genre/:metatagId', t.tld, { params: { metatagId: e.id } }),
                };
            }
            var M = i(44936),
                D = i(36504),
                H = i(25049),
                z = i(34627),
                K = i.n(z);
            let F = (0, o.PA)((e) => {
                let { metatagId: t, preloadedMeta: i } = e,
                    o = (0, L.s)(y.n.GENRE),
                    { formatMessage: I } = (0, n.A)(),
                    { contentScrollRef: j, setContentScrollRef: N } = (0, f.g)(),
                    R = (0, x.W)();
                return (o.isNotFound && (0, r.notFound)(),
                (0, l.useEffect)(
                    () => () => {
                        o.reset();
                    },
                    [o],
                ),
                (0, S.J)(o.isResolved),
                ((e) => {
                    (0, l.useEffect)(() => {
                        e &&
                            w(
                                ((e) => ({
                                    id: '',
                                    title: { title: '', fullTitle: e.fullTitle || '' },
                                    liked: !1,
                                    tracks: [],
                                    artists: e.artists.map(D.N),
                                    composers: [],
                                    albums: e.albums.map(M.f),
                                    playlists: e.playlists.map(H.J),
                                }))(e),
                                { fullUrl: null, locale: null, url: null, tld: '', host: '' },
                            ).then((e) => {
                                (0, g.j)(e);
                            });
                    }, [e]);
                })(o),
                t && o.isNeededToLoad && (0, l.use)(o.getData({ id: t, preloadedMeta: i })),
                o.isRejected && !o.isNotFound)
                    ? (0, a.jsx)(u.SomethingWentWrong, {})
                    : (0, a.jsx)(A.n, {
                          pageId: k._Q.GENRE,
                          children: (0, a.jsxs)(v.h, {
                              scrollElement: j,
                              outerTitle: o.fullTitle,
                              children: [
                                  (0, a.jsx)(b.Y, {
                                      variant: b.V.TEXT,
                                      withForwardControl: !1,
                                      withBackwardControl: R.canBack,
                                      children: (0, a.jsx)(d.DZ, { variant: 'h2', weight: 'bold', size: 'xl', lineClamp: 1, children: o.fullTitle }),
                                  }),
                                  (0, a.jsx)(c.N, {
                                      className: K().root,
                                      containerClassName: K().content,
                                      ref: N,
                                      children: (0, a.jsxs)('div', {
                                          className: K().carouselBlocks,
                                          children: [
                                              o.hasPlaylists &&
                                                  (0, a.jsx)(p.F, {
                                                      blockId: h.h.PLAYLISTS_CAROUSEL,
                                                      blockType: h.h.PLAYLISTS_CAROUSEL,
                                                      blockPosX: 1,
                                                      blockPosY: 1,
                                                      blockIdForFrom: h.h.PLAYLISTS_CAROUSEL,
                                                      objectsCount: o.albums.length,
                                                      children: (0, a.jsx)(C.E, {
                                                          isShimmerVisible: o.isLoading,
                                                          isShimmerActive: !0,
                                                          headerClassName: (0, s.$)(K().carouselBlockHeader, K().carouselBlock),
                                                          containerClassName: K().carouselBlock,
                                                          playlists: o.playlists,
                                                          title: I({ id: 'entity-names.popular-playlists' }),
                                                          viewAllActionLink: '/genre/'.concat(o.id, '/playlists'),
                                                      }),
                                                  }),
                                              o.hasAlbums &&
                                                  (0, a.jsx)(p.F, {
                                                      blockId: h.h.ALBUMS_CAROUSEL,
                                                      blockType: h.h.ALBUMS_CAROUSEL,
                                                      blockPosX: 1,
                                                      blockPosY: 2,
                                                      blockIdForFrom: h.h.ALBUMS_CAROUSEL,
                                                      objectsCount: o.albums.length,
                                                      children: (0, a.jsx)(m.p, {
                                                          isShimmerVisible: o.isLoading,
                                                          isShimmerActive: !0,
                                                          headerClassName: (0, s.$)(K().carouselBlockHeader, K().carouselBlock),
                                                          containerClassName: K().carouselBlock,
                                                          albums: o.albums,
                                                          title: I({ id: 'entity-names.new-albums' }),
                                                          viewAllActionLink: '/genre/'.concat(o.id, '/albums'),
                                                      }),
                                                  }),
                                              o.hasArtists &&
                                                  (0, a.jsx)(p.F, {
                                                      blockId: h.h.ARTISTS_CAROUSEL,
                                                      blockType: h.h.ARTISTS_CAROUSEL,
                                                      blockPosX: 1,
                                                      blockPosY: 3,
                                                      blockIdForFrom: h.h.ARTISTS_CAROUSEL,
                                                      objectsCount: o.albums.length,
                                                      children: (0, a.jsx)(T.O, {
                                                          isShimmerVisible: o.isLoading,
                                                          isShimmerActive: !0,
                                                          isShimmerCentered: !0,
                                                          isShimmerRounded: !0,
                                                          headerClassName: (0, s.$)(K().carouselBlockHeader, K().carouselBlock),
                                                          containerClassName: K().carouselBlock,
                                                          title: I({ id: 'entity-names.popular-artists' }),
                                                          viewAllActionLink: '/genre/'.concat(o.id, '/artists'),
                                                          children: o.artists.map((e) => (0, a.jsx)(_.a, { artist: e, contentLinesCount: 3 }, e.id)),
                                                      }),
                                                  }),
                                          ],
                                      }),
                                  }),
                              ],
                          }),
                      });
            });
            var Y = i(79856);
            let V = () => {
                    let { formatMessage: e } = (0, n.A)(),
                        { contentScrollRef: t, setContentScrollRef: i } = (0, f.g)(),
                        r = (0, x.W)();
                    return (0, a.jsxs)(v.h, {
                        scrollElement: t,
                        children: [
                            (0, a.jsx)(b.Y, {
                                variant: b.V.TEXT,
                                withForwardControl: !1,
                                withBackwardControl: r.canBack,
                                children: (0, a.jsx)(Y.W, { className: K().shimmerTitle, radius: 'l' }),
                            }),
                            (0, a.jsx)(c.N, {
                                className: K().root,
                                containerClassName: K().content,
                                ref: i,
                                children: (0, a.jsxs)('div', {
                                    className: K().carouselBlocks,
                                    children: [
                                        (0, a.jsx)(C.E, {
                                            isShimmerVisible: !0,
                                            isShimmerActive: !0,
                                            headerClassName: (0, s.$)(K().carouselBlockHeader, K().carouselBlock),
                                            containerClassName: K().carouselBlock,
                                            title: e({ id: 'entity-names.popular-playlists' }),
                                        }),
                                        (0, a.jsx)(m.p, {
                                            isShimmerVisible: !0,
                                            isShimmerActive: !0,
                                            headerClassName: (0, s.$)(K().carouselBlockHeader, K().carouselBlock),
                                            containerClassName: K().carouselBlock,
                                            title: e({ id: 'entity-names.new-albums' }),
                                        }),
                                        (0, a.jsx)(T.O, {
                                            isShimmerVisible: !0,
                                            isShimmerActive: !0,
                                            isShimmerCentered: !0,
                                            isShimmerRounded: !0,
                                            headerClassName: (0, s.$)(K().carouselBlockHeader, K().carouselBlock),
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
                    return e || (0, r.notFound)(), (0, a.jsx)(l.Suspense, { fallback: (0, a.jsx)(V, {}), children: (0, a.jsx)(F, { metatagId: e }) });
                };
        },
        11675: (e) => {
            e.exports = {
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
        13931: (e, t, i) => {
            'use strict';
            i.d(t, { r: () => l });
            var a = i(55178),
                r = i(60900);
            let l = (e) => {
                let { formatMessage: t } = (0, r.A)();
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
        19620: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => A });
            var a = i(32290),
                r = i(63618),
                l = i(55178),
                s = i(16172),
                o = i(21732),
                n = i(82586),
                c = i(50162),
                d = i(86269),
                u = i(79856),
                m = i(71926),
                _ = i(95481),
                v = i(47745),
                C = i(61258),
                h = i(69e3),
                k = i.n(h);
            let p = (e) => {
                    let {
                            className: t,
                            coverUrl: i,
                            labeledForId: h,
                            subTitle: p,
                            title: A,
                            description: x,
                            viewAllActionLink: f,
                            controls: S,
                            titleSize: L = 'm',
                            coverBackgroundColor: y,
                            coverRadius: T = 's',
                            titleClassName: b,
                            titleLineClamp: g,
                            fallbackIconVariant: I,
                            available: j = !0,
                            onViewAllAction: N,
                            titleChildren: R,
                            children: P,
                            headingRef: O,
                            coverContainerClassName: E,
                            headingVariant: B = 'h3',
                            withDescriptionWidthLimit: U = !0,
                            isShimmerVisible: w,
                            isShimmerActive: M,
                            withCover: D,
                            withDescription: H,
                            forwardRef: z,
                            shimmerCoverClassName: K,
                            shouldSendAnalyticsOnLoaded: F,
                            ...Y
                        } = e,
                        V = (0, _.f)(),
                        W = (0, l.useRef)(null),
                        $ = i || D,
                        X = x || H,
                        G = (0, l.useCallback)(() => {
                            W.current && 'focus' in W.current && W.current.focus();
                        }, []),
                        q = (0, v.N)(),
                        Q = (0, l.useCallback)(() => {
                            N ? N() : q({ to: s.QT.Link });
                        }, [q, N]);
                    (0, l.useEffect)(() => {
                        F && V();
                    }, [F, V]);
                    let Z = (0, l.useMemo)(
                            () =>
                                A && f && j
                                    ? (0, a.jsxs)(C.N, {
                                          className: k().title,
                                          containerClassName: k().linkContainer,
                                          textClassName: k().linkText,
                                          icon: (0, a.jsx)(n.I, { className: k().titleIcon, size: 'xs', variant: 'arrowRight' }),
                                          iconPosition: 'right',
                                          href: f,
                                          onClick: Q,
                                          'data-test-id': o.S7.BLOCK_HEADER_TITLE,
                                          children: [
                                              (0, a.jsx)(m.DZ, {
                                                  id: h,
                                                  className: (0, r.$)(k().heading, b),
                                                  variant: B,
                                                  size: L,
                                                  weight: 'bold',
                                                  lineClamp: g,
                                                  ref: O,
                                                  children: A,
                                              }),
                                              R,
                                          ],
                                      })
                                    : (0, a.jsxs)('div', {
                                          className: k().title,
                                          children: [
                                              (0, a.jsx)(m.DZ, {
                                                  id: h,
                                                  className: (0, r.$)(k().heading, b, { [k().heading_notAvailable]: !j }),
                                                  variant: B,
                                                  size: L,
                                                  weight: 'bold',
                                                  lineClamp: g,
                                                  ref: O,
                                                  'data-test-id': o.S7.BLOCK_HEADER_TITLE,
                                                  children: A,
                                              }),
                                              R,
                                          ],
                                      }),
                            [j, Q, O, B, h, A, b, g, L, f, R],
                        ),
                        J = (0, l.useMemo)(() => (H && w ? (0, a.jsx)(u.W, { isActive: M, className: k().shimmerDescription }) : x), [H, w, x, M]),
                        ee = (0, l.useMemo)(
                            () =>
                                D && w
                                    ? (0, a.jsx)(u.W, { isActive: M, className: (0, r.$)(k().shimmerCover, K), radius: 's' })
                                    : (0, a.jsx)(c._V, {
                                          src: i,
                                          fallbackIconVariant: I,
                                          style: { backgroundColor: y },
                                          className: k().cover,
                                          ref: W,
                                          onClick: G,
                                          fit: 'cover',
                                          withAvatarReplace: !0,
                                          fallbackIconSize: 's',
                                          'aria-hidden': !0,
                                          'data-test-id': o.S7.BLOCK_HEADER_COVER,
                                      }),
                            [y, i, I, G, M, w, K, D],
                        );
                    return (0, a.jsxs)('div', {
                        className: (0, r.$)(k().root, t),
                        ref: z,
                        ...Y,
                        'data-test-id': o.S7.BLOCK_HEADER,
                        children: [
                            (0, a.jsxs)('div', {
                                className: k().start,
                                children: [
                                    $ && (0, a.jsx)(d.t, { radius: T, className: (0, r.$)(k().coverContainer, E), children: ee }),
                                    (0, a.jsxs)('div', {
                                        className: k().textContainer,
                                        children: [
                                            p,
                                            Z,
                                            X &&
                                                (0, a.jsx)(m.HL, {
                                                    id: ''.concat(h, '-description'),
                                                    variant: 'span',
                                                    type: 'text',
                                                    size: 'm',
                                                    weight: 'medium',
                                                    lineClamp: U ? 2 : void 0,
                                                    className: (0, r.$)(k().description, { [k().description_widthLimit]: U }),
                                                    'data-test-id': o.S7.BLOCK_HEADER_DESCRIPTION,
                                                    children: J,
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                            S || P,
                        ],
                    });
                },
                A = (0, l.forwardRef)((e, t) => (0, a.jsx)(p, { forwardRef: t, ...e }));
        },
        25049: (e, t, i) => {
            'use strict';
            i.d(t, { J: () => r });
            var a = i(96151);
            let r = (e) => {
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
        26042: (e, t, i) => {
            'use strict';
            i.d(t, { B: () => s });
            var a = i(32290),
                r = i(55178),
                l = i(10936);
            let s = (e) => {
                let { objectId: t, objectPosX: i, objectPosY: s, objectPos: o, objectType: n, objectsCount: c, mainObjectId: d, mainObjectType: u, children: m } = e,
                    _ = (0, r.useMemo)(
                        () => ({ objectId: t, objectPosX: i, objectPosY: s, objectPos: o, objectType: n, objectsCount: c, mainObjectId: d, mainObjectType: u }),
                        [t, i, s, o, n, c, d, u],
                    );
                return (0, a.jsx)(l.l.Provider, { value: _, children: m });
            };
        },
        30564: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => l });
            var a = i(32290),
                r = i(89020);
            let l = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return Array.from({ length: 9 }, (t, i) => (0, a.jsx)(r.V, { ...e }, i));
            };
        },
        33696: (e) => {
            e.exports = {
                root: 'CarouselBlock_root__aeOla',
                controls: 'CarouselBlock_controls__vsHCR',
                shimmerTitle: 'CarouselBlock_shimmerTitle__ZXIRx',
                item: 'CarouselBlock_item__DatZ2',
                important: 'CarouselBlock_important__AARmP',
            };
        },
        34627: (e) => {
            e.exports = {
                root: 'GenrePage_root___kL_v',
                content: 'GenrePage_content__NRwAJ',
                shimmerTitle: 'GenrePage_shimmerTitle__hrgjK',
                carouselBlocks: 'GenrePage_carouselBlocks__kR63B',
                carouselBlock: 'GenrePage_carouselBlock__QCkpK',
                carouselBlockHeader: 'GenrePage_carouselBlockHeader__u12sn',
            };
        },
        36504: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => l });
            var a = i(96151),
                r = i(87151);
            let l = (e) => {
                var t, i, l, s, o;
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
                                            disclaimers: (0, r.H)(e.disclaimers),
                                        };
                                    })) || [],
                          name: e.name,
                          cover: { uri: e.coverUri || '', type: a.Q.PIC, prefix: '', custom: !1 },
                          ogImage: '',
                          derivedColors: { accent: '', average: e.averageColor || '', miniPlayer: '', waveText: '' },
                          available: e.isAvailable,
                          disclaimers: (0, r.H)(e.disclaimers),
                          counts: {
                              directAlbums: (null == (i = e.counts) ? void 0 : i.albums) || 0,
                              alsoAlbums: (null == (l = e.counts) ? void 0 : l.compilations) || 0,
                              tracks: (null == (s = e.counts) ? void 0 : s.tracks) || 0,
                              alsoTracks: 0,
                          },
                          trailer: { available: !!(null == (o = e.trailer) ? void 0 : o.isAvailable) },
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
        38223: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => d });
            var a = i(32290),
                r = i(96103),
                l = i(39407),
                s = i(21732),
                o = i(82586),
                n = i(19740),
                c = i(57594);
            let d = (0, r.PA)((e) => {
                let { isDisliked: t, onClick: i, disabled: r, className: d } = e,
                    { user: u } = (0, c.g)();
                return (0, a.jsx)(n.Dr, {
                    onClick: i,
                    className: d,
                    icon: (0, a.jsx)(o.I, { variant: t ? 'disliked' : 'dislike', size: 'xxs' }),
                    role: 'menuitemcheckbox',
                    'aria-checked': t,
                    disabled: r || !u.isAuthorized,
                    'data-test-id': s.S7.CONTEXT_MENU_DISLIKE_BUTTON,
                    children: (0, a.jsx)(l.A, { id: 'interface-actions.do-not-like' }),
                });
            });
        },
        42048: (e) => {
            e.exports = {
                root: 'ArtistCard_root__x67BK',
                controls: 'ArtistCard_controls__jsqqI',
                cover: 'ArtistCard_cover__29ShU',
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
        44936: (e, t, i) => {
            'use strict';
            i.d(t, { f: () => r });
            var a = i(36504);
            let r = (e) => {
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
        45807: (e, t, i) => {
            'use strict';
            i.d(t, { Y: () => d });
            var a,
                r = i(72812),
                l = i(55178),
                s = {
                    352: (e) => {
                        e.exports = r;
                    },
                    810: (e) => {
                        e.exports = a || (a = i.t(l, 2));
                    },
                },
                o = {};
            function n(e) {
                var t = o[e];
                if (void 0 !== t) return t.exports;
                var i = (o[e] = { exports: {} });
                return s[e](i, i.exports, n), i.exports;
            }
            var c = {};
            (() => {
                Object.defineProperty(c, 'X', { value: !0 }), (c.l = void 0);
                let e = n(810),
                    t = n(352);
                c.l = (i) => {
                    let [a, r] = (0, e.useState)(!0),
                        [l, s] = (0, e.useState)(!0),
                        o = () => {
                            let e = null == i ? void 0 : i.current;
                            e && (r(0 === e.scrollLeft), s(e.scrollWidth - e.scrollLeft <= e.offsetWidth + 10));
                        };
                    (0, e.useEffect)(() => {
                        o();
                    }, [i, o]),
                        (0, e.useEffect)(() => {
                            let e = null == i ? void 0 : i.current;
                            return (
                                null == e || e.addEventListener('scroll', o),
                                window.addEventListener('resize', o),
                                () => {
                                    null == e || e.removeEventListener('scroll', o), window.removeEventListener('resize', o);
                                }
                            );
                        }, [i, o]);
                    let n = (0, e.useMemo)(
                        () =>
                            (0, t.throttle)(
                                () => {
                                    i && i.current && (i.current.scrollLeft += i.current.offsetWidth / 2);
                                },
                                420,
                                { trailing: !1 },
                            ),
                        [i],
                    );
                    return {
                        swipeBackward: (0, e.useMemo)(
                            () =>
                                (0, t.throttle)(
                                    () => {
                                        i && i.current && (i.current.scrollLeft -= i.current.offsetWidth / 2);
                                    },
                                    420,
                                    { trailing: !1 },
                                ),
                            [i],
                        ),
                        swipeForward: n,
                        shouldBackwardButtonBeDisabled: a,
                        shouldForwardButtonBeDisabled: l,
                        shouldHideControls: a && l,
                    };
                };
            })(),
                c.X;
            var d = c.l;
        },
        49522: (e, t, i) => {
            'use strict';
            i.d(t, { X: () => m });
            var a = i(32290),
                r = i(63618),
                l = i(55178),
                s = i(21732),
                o = i(45807),
                n = i(63423),
                c = i(82586),
                d = i(60178),
                u = i.n(d);
            let m = (e) => {
                let {
                        carouselRef: t,
                        backwardControlClassName: i,
                        forwardControlClassName: d,
                        className: m,
                        withSecondaryColor: _,
                        buttonSize: v = 'xxxs',
                        buttonVariant: C = 'outline',
                    } = e,
                    { swipeBackward: h, swipeForward: k, shouldBackwardButtonBeDisabled: p, shouldForwardButtonBeDisabled: A, shouldHideControls: x } = (0, o.Y)(t),
                    f = (0, l.useCallback)(
                        (e) => {
                            h(), e.stopPropagation();
                        },
                        [h],
                    ),
                    S = (0, l.useCallback)(
                        (e) => {
                            k(), e.stopPropagation();
                        },
                        [k],
                    );
                return (0, a.jsxs)('div', {
                    className: (0, r.$)(u().root, m),
                    'data-test-id': s.S7.CAROUSEL_CONTROLS,
                    children: [
                        (0, a.jsx)(n.$, {
                            tabIndex: -1,
                            'aria-hidden': !0,
                            className: (0, r.$)(u().control, i, { [u().control_hidden]: x, [u().control_withSecondaryColor]: _ }),
                            onClick: f,
                            size: v,
                            radius: 'round',
                            variant: C,
                            withRipple: !1,
                            icon: (0, a.jsx)(c.I, { size: 'xxs', variant: 'arrowLeft' }),
                            disabled: p,
                            'data-test-id': s.S7.CAROUSEL_CONTROLS_BACKWARD_BUTTON,
                        }),
                        (0, a.jsx)(n.$, {
                            tabIndex: -1,
                            'aria-hidden': !0,
                            className: (0, r.$)(u().control, d, { [u().control_hidden]: x, [u().control_withSecondaryColor]: _ }),
                            onClick: S,
                            size: v,
                            radius: 'round',
                            variant: C,
                            withRipple: !1,
                            icon: (0, a.jsx)(c.I, { size: 'xxs', variant: 'arrowRight' }),
                            disabled: A,
                            'data-test-id': s.S7.CAROUSEL_CONTROLS_FORWARD_BUTTON,
                        }),
                    ],
                });
            };
        },
        60178: (e) => {
            e.exports = {
                root: 'CarouselControls_root__E_hwc',
                control: 'CarouselControls_control__L8t4i',
                control_hidden: 'CarouselControls_control_hidden__pLrn6',
                control_withSecondaryColor: 'CarouselControls_control_withSecondaryColor__KqSEN',
            };
        },
        64538: (e, t, i) => {
            'use strict';
            i.d(t, { E: () => u });
            var a = i(32290),
                r = i(55178),
                l = i(16172),
                s = i(95481),
                o = i(26042),
                n = i(98148),
                c = i(83460);
            let d = (e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: i,
                            isShimmerActive: d,
                            title: u,
                            description: m,
                            playlists: _,
                            containerClassName: v,
                            className: C,
                            headerClassName: h,
                            viewAllActionLink: k,
                            headingVariant: p,
                            shouldSendAnalyticsOnLoaded: A,
                            ...x
                        } = e,
                        f = (0, s.f)();
                    return (
                        (0, r.useEffect)(() => {
                            A && !i && f();
                        }, [i, f, A]),
                        (0, a.jsx)(n.O, {
                            isShimmerVisible: i,
                            isShimmerActive: d,
                            className: C,
                            headerClassName: h,
                            containerClassName: v,
                            ref: t,
                            title: u,
                            description: m,
                            viewAllActionLink: k,
                            headingVariant: p,
                            ...x,
                            children:
                                null == _
                                    ? void 0
                                    : _.map((e, t) =>
                                          (0, a.jsx)(
                                              o.B,
                                              {
                                                  objectType: l.ky.Playlist,
                                                  objectId: e.id,
                                                  objectPosX: t + 1,
                                                  objectPosY: 1,
                                                  objectsCount: _.length,
                                                  children: (0, a.jsx)(c.B, { playlist: e, contentLinesCount: 3 }),
                                              },
                                              e.key,
                                          ),
                                      ),
                        })
                    );
                },
                u = (0, r.forwardRef)((e, t) => (0, a.jsx)(d, { forwardRef: t, ...e }));
        },
        65024: (e, t, i) => {
            'use strict';
            i.d(t, { C: () => r });
            let a = new Set(Object.values(i(3785).M)),
                r = (e) => 'string' == typeof e && a.has(e);
        },
        69e3: (e) => {
            e.exports = {
                root: 'BlockHeader_root__j3mbg',
                titleIcon: 'BlockHeader_titleIcon__GQFEK',
                start: 'BlockHeader_start__ZrGP5',
                coverContainer: 'BlockHeader_coverContainer__lATZT',
                cover: 'BlockHeader_cover__koOXq',
                textContainer: 'BlockHeader_textContainer___2wn9',
                title: 'BlockHeader_title__5xlx6',
                description: 'BlockHeader_description__hAk9D',
                description_widthLimit: 'BlockHeader_description_widthLimit__CXxK1',
                linkContainer: 'BlockHeader_linkContainer__EuW_L',
                linkText: 'BlockHeader_linkText__Or6VB',
                heading: 'BlockHeader_heading__4iqvS',
                heading_notAvailable: 'BlockHeader_heading_notAvailable__r_dm1',
                shimmerCover: 'BlockHeader_shimmerCover__m2PJl',
                textShimmerContainer: 'BlockHeader_textShimmerContainer__hT_Zo',
                shimmerTitle: 'BlockHeader_shimmerTitle__kAkgm',
                shimmerDescription: 'BlockHeader_shimmerDescription__Bya4z',
            };
        },
        70390: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => v });
            var a = i(32290),
                r = i(92708),
                l = i(55178),
                s = i(60900),
                o = i(45477),
                n = i(75582),
                c = i(57594),
                d = i(90357),
                u = i(97647),
                m = i(8097);
            let _ = (e) => {
                    let { artist: t, closeToast: i } = e;
                    return (0, a.jsx)(m.k, {
                        closeToast: i,
                        entityVariant: u.c.ARTIST,
                        coverUri: t.coverUri,
                        entityUrl: t.url,
                        entityTitle: t.name,
                        isPinned: t.isPinned,
                        radius: 'round',
                    });
                },
                v = (e) => {
                    let { user: t } = (0, c.g)(),
                        { notify: i } = (0, n.l)(),
                        { formatMessage: u } = (0, s.A)(),
                        [m, v] = (0, l.useState)(!1);
                    return (0, l.useCallback)(async () => {
                        if (!e) return;
                        if (!t.isAuthorized)
                            return void i((0, a.jsx)(d.h, { error: u({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                        if (m) return;
                        let l = { ...(0, r.HO)(e), isPinned: !e.isPinned };
                        v(!0);
                        let s = await e.togglePin();
                        v(!1),
                            s
                                ? i((0, a.jsx)(_, { artist: l }), { containerId: o.u.INFO })
                                : i((0, a.jsx)(d.h, { error: u({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR });
                    }, [e, t.isAuthorized, m, u, i]);
                };
        },
        73141: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => C });
            var a = i(32290),
                r = i(92708),
                l = i(55178),
                s = i(60900),
                o = i(63380),
                n = i(45477),
                c = i(75582),
                d = i(57594),
                u = i(90357),
                m = i(97647),
                _ = i(97755);
            let v = (e) => {
                    let { playlist: t, closeToast: i } = e;
                    return (0, a.jsx)(_.O, {
                        entityVariant: m.c.PLAYLIST,
                        entityUrl: t.url,
                        collectionUrl: '/collection',
                        entityTitle: t.title,
                        isLiked: t.isLiked,
                        closeToast: i,
                        coverUri: t.coverUri,
                    });
                },
                C = (e) => {
                    let { user: t } = (0, d.g)(),
                        { notify: i } = (0, c.l)(),
                        [m, _] = (0, l.useState)(!1),
                        { formatMessage: C } = (0, s.A)();
                    return (0, l.useCallback)(async () => {
                        if (!t.isAuthorized)
                            return void i((0, a.jsx)(u.h, { error: C({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: n.u.ERROR });
                        if (m) return;
                        let l = { ...(0, r.HO)(e), url: e.url, isLiked: !e.isLiked };
                        _(!0);
                        let s = await e.toggleLike();
                        _(!1),
                            s === o.f.OK
                                ? i((0, a.jsx)(v, { playlist: l }), { containerId: n.u.INFO })
                                : i((0, a.jsx)(u.h, { error: C({ id: 'error-messages.error-during-action' }) }), { containerId: n.u.ERROR });
                    }, [t.isAuthorized, m, e, C, i]);
                };
        },
        73192: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => v });
            var a = i(32290),
                r = i(92708),
                l = i(55178),
                s = i(60900),
                o = i(45477),
                n = i(75582),
                c = i(57594),
                d = i(90357),
                u = i(97647),
                m = i(8097);
            let _ = (e) => {
                    let { playlist: t, closeToast: i } = e;
                    return (0, a.jsx)(m.k, {
                        closeToast: i,
                        entityVariant: u.c.PLAYLIST,
                        entityUrl: t.url,
                        coverUri: t.coverUri,
                        entityTitle: t.title,
                        isPinned: t.isPinned,
                        radius: 's',
                    });
                },
                v = (e) => {
                    let { user: t } = (0, c.g)(),
                        { notify: i } = (0, n.l)(),
                        { formatMessage: u } = (0, s.A)(),
                        [m, v] = (0, l.useState)(!1);
                    return (0, l.useCallback)(async () => {
                        if (!t.isAuthorized)
                            return void i((0, a.jsx)(d.h, { error: u({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                        if (m) return;
                        let l = { ...(0, r.HO)(e), url: e.url, isPinned: !e.isPinned };
                        v(!0);
                        let s = await e.togglePin();
                        v(!1),
                            s
                                ? i((0, a.jsx)(_, { playlist: l }), { containerId: o.u.INFO })
                                : i((0, a.jsx)(d.h, { error: u({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR });
                    }, [t.isAuthorized, m, e, i, u]);
                };
        },
        75245: (e, t, i) => {
            'use strict';
            i.d(t, { F: () => c });
            var a,
                r = i(55178),
                l = {
                    5881: (e, t, i) => {
                        function a() {
                            for (var e, t, i = 0, a = ''; i < arguments.length; )
                                (e = arguments[i++]) &&
                                    (t = (function e(t) {
                                        var i,
                                            a,
                                            r = '';
                                        if ('string' == typeof t || 'number' == typeof t) r += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (i = 0; i < t.length; i++) t[i] && (a = e(t[i])) && (r && (r += ' '), (r += a));
                                            else for (i in t) t[i] && (r && (r += ' '), (r += i));
                                        return r;
                                    })(e)) &&
                                    (a && (a += ' '), (a += t));
                            return a;
                        }
                        i.r(t), i.d(t, { clsx: () => a, default: () => r });
                        let r = a;
                    },
                    9058: (e, t, i) => {
                        i.r(t), i.d(t, { default: () => a });
                        let a = { root: 'IZnFMW4gXBshJODnvB1P', item: 'VJ9IexhAEuYSCyGiMfN4' };
                    },
                    9097: (e, t) => {
                        var i = Symbol.for('react.transitional.element');
                        function a(e, t, a) {
                            var r = null;
                            if ((void 0 !== a && (r = '' + a), void 0 !== t.key && (r = '' + t.key), 'key' in t))
                                for (var l in ((a = {}), t)) 'key' !== l && (a[l] = t[l]);
                            else a = t;
                            return { $$typeof: i, type: e, key: r, ref: void 0 !== (t = a.ref) ? t : null, props: a };
                        }
                        (t.Fragment = Symbol.for('react.fragment')), (t.jsx = a), (t.jsxs = a);
                    },
                    4377: (e, t, i) => {
                        e.exports = i(9097);
                    },
                    5056: function (e, t, i) {
                        var a =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Carousel = void 0);
                        let r = i(4377),
                            l = i(5881),
                            s = i(810),
                            o = a(i(9058)),
                            n = (e) => {
                                let { className: t, itemClassName: i, children: a, forwardRef: n, role: c, ...d } = e;
                                return (0, r.jsx)('ol', {
                                    ref: n,
                                    className: (0, l.clsx)(o.default.root, t),
                                    ...d,
                                    role: null != c ? c : 'list',
                                    children: s.Children.map(a, (e) => (0, r.jsx)('li', { className: (0, l.clsx)(o.default.item, i), children: e })),
                                });
                            };
                        t.Carousel = (0, s.forwardRef)((e, t) => (0, r.jsx)(n, { forwardRef: t, ...e }));
                    },
                    810: (e) => {
                        e.exports = a || (a = i.t(r, 2));
                    },
                },
                s = {};
            function o(e) {
                var t = s[e];
                if (void 0 !== t) return t.exports;
                var i = (s[e] = { exports: {} });
                return l[e].call(i.exports, i, i.exports, o), i.exports;
            }
            (o.d = (e, t) => {
                for (var i in t) o.o(t, i) && !o.o(e, i) && Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
            }),
                (o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (o.r = (e) => {
                    'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 });
                });
            var n = {};
            (() => {
                Object.defineProperty(n, 'X', { value: !0 }), (n.l = void 0);
                var e = o(5056);
                Object.defineProperty(n, 'l', {
                    enumerable: !0,
                    get: function () {
                        return e.Carousel;
                    },
                });
            })();
            var c = n.l;
            n.X;
        },
        77435: (e, t, i) => {
            'use strict';
            i.d(t, { p: () => u });
            var a = i(32290),
                r = i(55178),
                l = i(16172),
                s = i(95481),
                o = i(26042),
                n = i(98148),
                c = i(24170);
            let d = (e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: i,
                            isShimmerActive: d,
                            title: u,
                            description: m,
                            albums: _,
                            className: v,
                            containerClassName: C,
                            headerClassName: h,
                            viewAllActionLink: k,
                            headingRef: p,
                            headingVariant: A,
                            shouldSendAnalyticsOnLoaded: x,
                            ...f
                        } = e,
                        S = (0, s.f)();
                    return (
                        (0, r.useEffect)(() => {
                            x && S();
                        }, [S, x]),
                        (0, a.jsx)(n.O, {
                            isShimmerVisible: i,
                            isShimmerActive: d,
                            className: v,
                            headerClassName: h,
                            containerClassName: C,
                            ref: t,
                            title: u,
                            description: m,
                            viewAllActionLink: k,
                            headingRef: p,
                            headingVariant: A,
                            ...f,
                            children:
                                null == _
                                    ? void 0
                                    : _.map((e, t) =>
                                          (0, a.jsx)(
                                              o.B,
                                              {
                                                  objectType: l.ky.Album,
                                                  objectId: String(e.id),
                                                  objectPosX: t + 1,
                                                  objectPosY: 1,
                                                  objectsCount: _.length,
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
                u = (0, r.forwardRef)((e, t) => (0, a.jsx)(d, { forwardRef: t, ...e }));
        },
        80528: (e, t, i) => {
            'use strict';
            i.d(t, { g: () => Q });
            var a = i(32290),
                r = i(96103),
                l = i(60900),
                s = i(16172),
                o = i(21732),
                n = i(71483),
                c = i(91027),
                d = i(82586),
                u = i(19740),
                m = i(92708),
                _ = i(55178),
                v = i(63380),
                C = i(45477),
                h = i(75582),
                k = i(57594),
                p = i(90357),
                A = i(86269),
                x = i(74196),
                f = i(71926),
                S = i(58534),
                L = i(11323),
                y = i(356),
                T = i.n(y);
            let b = (e) => {
                let { coverUri: t, title: i, isDisliked: r, closeToast: s } = e,
                    { formatMessage: o } = (0, l.A)(),
                    n = o(r ? { id: 'notifications-info.artist-unavailable-in-recommendations' } : { id: 'notifications-info.artist-available-in-recommendations' });
                return (0, a.jsx)(S.$, {
                    closeToast: s,
                    message: (0, a.jsxs)('div', {
                        className: T().message,
                        children: [
                            (0, a.jsx)(x.q, { children: (0, a.jsx)('p', { role: 'alert', 'aria-label': n }) }),
                            (0, a.jsx)(A.t, {
                                className: T().cover,
                                radius: 'round',
                                children: (0, a.jsx)(L.B, { className: T().image, src: t, alt: i, size: 100, fit: 'cover', withAvatarReplace: !0 }),
                            }),
                            (0, a.jsx)(f.HL, { className: T().text, variant: 'div', type: 'controls', size: 'm', 'aria-hidden': !0, children: n }),
                        ],
                    }),
                });
            };
            var g = i(5942),
                I = i(70390),
                j = i(9017),
                N = i(65477),
                R = i(71735),
                P = i(37862),
                O = i(48922),
                E = i(54391),
                B = i(72396),
                U = i(46200),
                w = i(27120),
                M = i(43564),
                D = i(95134),
                H = i(79406),
                z = i(51675),
                K = i(48027),
                F = i(89384),
                Y = i(38223),
                V = i(58237),
                W = i(56367),
                $ = i(4914),
                X = i(83755),
                G = i(25160),
                q = i(4008);
            let Q = (0, r.PA)((e) => {
                var t, i, r;
                let { artist: A, onOpenChange: x, open: f, ...S } = e,
                    { shouldShowBuySubscriptionModal: L, showBuySubscriptionModal: y } = (0, U.q)(),
                    {
                        settings: { isMobile: T },
                        modals: { artistAboutModal: Q },
                        trailer: Z,
                        user: J,
                        experiments: ee,
                    } = (0, k.g)(),
                    et = (0, I.A)(A),
                    ei = (0, g.K)(A),
                    ea = ((e) => {
                        let { user: t } = (0, k.g)(),
                            { notify: i } = (0, h.l)(),
                            [r, s] = (0, _.useState)(!1),
                            { formatMessage: o } = (0, l.A)();
                        return (0, c.c)(async () => {
                            if (!e) return;
                            if (!t.isAuthorized)
                                return void i((0, a.jsx)(p.h, { error: o({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: C.u.ERROR });
                            if (r) return;
                            let l = { ...(0, m.HO)(e), isDisliked: !e.isDisliked };
                            s(!0);
                            let n = await e.toggleDislike();
                            s(!1),
                                n === v.f.OK
                                    ? i((0, a.jsx)(b, { coverUri: l.coverUri, title: l.name, isDisliked: l.isDisliked }), { containerId: C.u.INFO })
                                    : i((0, a.jsx)(p.h, { error: o({ id: 'error-messages.error-during-action' }) }), { containerId: C.u.ERROR });
                        });
                    })(A),
                    er = (0, E.F)(),
                    el = ''.concat(P.U.ARTIST, '-').concat(null == A ? void 0 : A.id),
                    { formatMessage: es } = (0, l.A)(),
                    { utmLink: eo } = (0, B.f)({ blockId: P.U.ARTIST, contextType: n.K.Artist, contextId: null == A ? void 0 : A.id }),
                    { shareLink: en, pathname: ec } = (0, F.b)('/artist/:artistId', { params: { artistId: null != (i = null == A ? void 0 : A.id) ? i : '' } }),
                    ed = (0, j.A)({ entityVariant: D.D.ARTIST, urlParams: { id: null == A ? void 0 : A.id } }),
                    { isPlaying: eu, togglePlay: em } = (0, M.B)({
                        seeds: null != (r = null == A ? void 0 : A.seeds) ? r : [],
                        pageIdForFrom: O._Q.RADIO,
                        blockIdForFrom: el,
                        parentContextId: null == A ? void 0 : A.id,
                    }),
                    e_ = (0, R.P)(),
                    ev = es((null == A ? void 0 : A.isComposer) ? { id: 'artist.about-composer' } : { id: 'artist.about-artist' }),
                    eC = (0, c.c)(() => {
                        if (L && J.isAuthorized) return void y();
                        eu || em();
                    }),
                    eh = (0, c.c)(() => {
                        if (!e_()) {
                            if (L) return void y();
                            (null == A ? void 0 : A.id) && (Z.setUtmLink(eo), Z.openArtistTrailer(A.id), er(s.ky.Artist, A.id));
                        }
                    }),
                    ek = (0, c.c)(() => {
                        Q.open(null == A ? void 0 : A.id);
                    });
                (0, w.N)(f);
                let ep = { variant: z.Y.ARTIST, id: null == A ? void 0 : A.id, title: null == A ? void 0 : A.name, path: ec },
                    eA = ee.checkExperiment(H.z.WebEditorsFeatures, 'on'),
                    ex = null == A || null == (t = A.trailer) ? void 0 : t.isAvailable,
                    ef = ee.checkExperiment(H.z.WebNextArtistInfo, 'on');
                return (0, a.jsxs)(u.W1, {
                    isMobile: T,
                    offsetOptions: 10,
                    open: f,
                    onOpenChange: x,
                    ariaLabel: es({ id: 'interface-actions.context-menu' }),
                    containerProps: { 'data-test-id': o.Kq.artist.ARTIST_CONTEXT_MENU },
                    ...S,
                    children: [
                        eA && (0, a.jsx)(q.WithOffline, { fallback: (0, a.jsx)(N.d, { entityVariant: D.D.ARTIST, adminUrl: ed }) }),
                        !T && (0, a.jsx)(q.WithOffline, { fallback: (0, a.jsx)(W.L, { onClick: et, isPinned: null == A ? void 0 : A.isPinned }) }),
                        (0, a.jsx)(q.WithOffline, {
                            fallback: (0, a.jsx)(V.T, {
                                onClick: ei,
                                isLiked: null == A ? void 0 : A.isLiked,
                                disabled: !J.isAuthorized || !(null == A ? void 0 : A.isAvailable),
                            }),
                        }),
                        ex && (0, a.jsx)(q.WithOffline, { fallback: (0, a.jsx)(X.N, { onClick: eh }) }),
                        (0, a.jsx)(q.WithOffline, {
                            fallback: (0, a.jsx)(G.C, { onClick: eC, disabled: !(null == A ? void 0 : A.isAvailable), variant: K.I.ARTIST, onOpenMenuChange: x }),
                        }),
                        (0, a.jsx)($.H, { disabled: !A, shareLink: en, entityMeta: ep }),
                        ef &&
                            (0, a.jsx)(q.WithOffline, {
                                fallback: (0, a.jsx)(u.Dr, {
                                    onClick: ek,
                                    icon: (0, a.jsx)(d.I, { variant: 'info', size: 'xxs' }),
                                    'data-test-id': o.Kq.artist.ARTIST_CONTEXT_MENU_ABOUT_ARTIST_BUTTON,
                                    children: ev,
                                }),
                            }),
                        (0, a.jsx)(q.WithOffline, {
                            fallback: (0, a.jsx)(Y.D, { onClick: ea, isDisliked: null == A ? void 0 : A.isDisliked, disabled: !(null == A ? void 0 : A.isAvailable) }),
                        }),
                    ],
                });
            });
        },
        83460: (e, t, i) => {
            'use strict';
            i.d(t, { B: () => J });
            var a = i(32290),
                r = i(63618),
                l = i(96103),
                s = i(55178),
                o = i(60900),
                n = i(16172),
                c = i(21732),
                d = i(71483),
                u = i(91027),
                m = i(6752),
                _ = i(14934),
                v = i(82586),
                C = i(86269),
                h = i(71926),
                k = i(41677),
                p = i(73141),
                A = i(73192),
                x = i(71735),
                f = i(47745),
                S = i(2969),
                L = i(54391),
                y = i(23352),
                T = i(72396),
                b = i(5537),
                g = i(84062),
                I = i(28999),
                j = i(90169),
                N = i(57594),
                R = i(61376),
                P = i(11323),
                O = i(92744),
                E = i(61258),
                B = i(10180),
                U = i(90326),
                w = i(29268),
                M = i(34925),
                D = i(13931),
                H = i(19740),
                z = i(9017),
                K = i(65477),
                F = i(46200),
                Y = i(27120),
                V = i(95134),
                W = i(79406),
                $ = i(58237),
                X = i(56367),
                G = i(83755);
            let q = (0, l.PA)((e) => {
                var t;
                let { playlist: i, onOpenChange: r, open: l, ...s } = e,
                    { shouldShowBuySubscriptionModal: d, showBuySubscriptionModal: m } = (0, F.q)(),
                    {
                        experiments: _,
                        settings: { isMobile: v },
                        trailer: C,
                        user: h,
                    } = (0, N.g)(),
                    k = (0, p.K)(i),
                    f = (0, A.A)(i),
                    S = (0, L.F)(),
                    { formatMessage: y } = (0, o.A)(),
                    T = (0, x.P)(),
                    b = _.checkExperiment(W.z.WebEditorsFeatures, 'on'),
                    g = (0, z.A)({ entityVariant: V.D.PLAYLIST, urlParams: { id: i.uid, kind: i.kind } });
                (0, Y.N)(l);
                let I = (0, u.c)(() => {
                    if (d) return void m();
                    T() || (C.openPlaylistTrailer(i.id), S(n.ky.Playlist, i.id));
                });
                return (0, a.jsxs)(H.W1, {
                    title: i.title,
                    onOpenChange: r,
                    open: l,
                    offsetOptions: 10,
                    isMobile: v,
                    ariaLabel: y({ id: 'interface-actions.context-menu' }),
                    containerProps: { 'data-test-id': c.Kq.playlist.PLAYLIST_CONTEXT_MENU },
                    ...s,
                    children: [
                        b && (0, a.jsx)(K.d, { entityVariant: V.D.PLAYLIST, adminUrl: i.isFavouritePlaylist ? void 0 : g }),
                        !v && (0, a.jsx)(X.L, { onClick: f, isPinned: i.isPinned }),
                        !i.isFavouritePlaylist && (0, a.jsx)($.T, { onClick: k, isLiked: i.isLiked, disabled: !h.isAuthorized }),
                        (i.tracksCount ?? 1) > 0 &&
                            (0, a.jsx)(H.Dr, {
                                onClick: i.downloadToFile,
                                icon: (0, a.jsx)(pulseSyncPlaylistDownloadIcons.I, { variant: 'download', size: 'xxs' }),
                                children: 'Скачать в файл',
                            }),
                        (null == (t = i.trailer) ? void 0 : t.isAvailable) && (0, a.jsx)(G.N, { onClick: I, disabled: !i.isAvailable }),
                    ],
                });
            });
            var Q = i(11675),
                Z = i.n(Q);
            let J = (0, l.PA)((e) => {
                let { className: t, playlist: i, children: l, contentLinesCount: H, customDescription: z } = e,
                    { ref: K, intersectionPropertyId: F } = (0, y.n)(),
                    {
                        trailer: Y,
                        user: V,
                        paywall: { modal: W },
                    } = (0, N.g)(),
                    { from: $, utmLink: X } = (0, T.f)({ contextId: i.uuid, contextType: d.K.Playlist }),
                    { formatMessage: G } = (0, o.A)(),
                    { sendLikeSearchFeedback: Q, sendNavigateSearchFeedback: J, sendPlaySearchFeedback: ee } = (0, I.z)(),
                    [et, ei] = (0, s.useState)(!1),
                    [ea, er] = (0, s.useState)(!1),
                    [el, es] = (0, s.useState)(!1),
                    eo = (0, D.r)(i),
                    en = (0, p.K)(i),
                    ec = (0, A.A)(i),
                    ed = (0, f.N)(),
                    eu = (0, S.b)(),
                    em = (0, g.Z)(i.url),
                    e_ = (0, L.F)(),
                    ev = (0, x.P)(),
                    eC = (0, u.c)((e) => {
                        if ((e.stopPropagation(), ev())) return void e.preventDefault();
                        Y.setUtmLink(X), Y.openPlaylistTrailer(i.id), e_(n.ky.Playlist, i.id);
                    }),
                    [eh, ek] = (0, s.useState)(!1),
                    { isPlaying: ep, togglePlay: eA } = (0, j.D)({
                        playContextParams: { contextData: { type: d.K.Playlist, meta: { id: i.id, uuid: i.uuid }, from: $, utmLink: X }, loadContextMeta: !0 },
                    }),
                    ex = (0, u.c)(() => {
                        ed({ to: n.QT.PlaylistScreen }), null == J || J();
                    }),
                    ef = (0, u.c)((e) => {
                        ex(), em(e);
                    }),
                    eS = (0, b.N)(),
                    eL = (0, u.c)(() => {
                        if (!ev()) {
                            if (eS) return void W.open();
                            et || ep || (ei(!0), null == ee || ee()), eA(), eu(!ep);
                        }
                    }),
                    ey = (0, u.c)(() => {
                        ea || i.isLiked || (er(!0), null == Q || Q()), en();
                    }),
                    eT = (0, u.c)((e) => {
                        e.preventDefault(), e.stopPropagation();
                    }),
                    eb = (0, u.c)((e) => {
                        es(e), ek(e);
                    }),
                    eg = (0, s.useMemo)(() => {
                        var e;
                        return z
                            ? (0, a.jsx)(h.HL, { variant: 'span', type: 'entity', size: 's', weight: 'medium', lineClamp: 2, children: z }, i.getKey('description'))
                            : (null == (e = i.artists) ? void 0 : e.length)
                              ? (0, a.jsx)(
                                    k.i,
                                    { className: Z().artists, artists: i.artists, lineClamp: 1, linkClassName: Z().artistLink, captionSize: 's' },
                                    i.getKey('description'),
                                )
                              : void 0;
                    }, [z, i]),
                    eI = (0, m.L)(() => {
                        if (!i.isFavouritePlaylist)
                            return (0, a.jsx)(
                                O.c,
                                {
                                    className: (0, r.$)(Z().likeButton, Z().control),
                                    isLiked: i.isLiked,
                                    onClick: ey,
                                    variant: 'default',
                                    size: 's',
                                    iconSize: 'xxs',
                                    disabled: !V.isAuthorized,
                                },
                                i.getKey('LikeButton'),
                            );
                    }),
                    ej = (0, s.useMemo)(() => {
                        var e;
                        if (null == i || null == (e = i.trailer) ? void 0 : e.isAvailable)
                            return (0, a.jsx)(
                                M.n,
                                {
                                    children: (0, a.jsx)(
                                        w.k,
                                        { className: (0, r.$)(Z().trailerButton, Z().control), radius: 'round', size: 's', iconSize: 'xxs', onClick: eC },
                                        i.getKey('TrailerButton'),
                                    ),
                                },
                                i.getKey('PlaylilstCardTrailerTooltip'),
                            );
                    }, [eC, i]),
                    eN = (0, s.useMemo)(
                        () =>
                            (0, a.jsx)(
                                B.O,
                                { onClick: ec, isPinned: i.isPinned, className: (0, r.$)(Z().pinButton, Z().control), withRipple: !1 },
                                i.getKey('PinButton'),
                            ),
                        [ec, i],
                    ),
                    eR = (0, s.useMemo)(
                        () =>
                            (0, a.jsx)(C.t, {
                                className: Z().cover,
                                radius: 's',
                                withShadow: !0,
                                'data-test-id': c.Kq.playlist.PLAYLIST_CARD,
                                children: (0, a.jsxs)('div', {
                                    className: Z().coverBlock,
                                    onClick: ef,
                                    children: [
                                        (0, a.jsx)(P.B, {
                                            className: Z().image,
                                            src: i.coverUri,
                                            size: 200,
                                            fit: 'cover',
                                            alt: eo,
                                            withAvatarReplace: !0,
                                            'aria-hidden': !0,
                                        }),
                                        (0, a.jsx)(_.hg, {
                                            isVisible: el || eh,
                                            className: Z().controls,
                                            playControl: (0, a.jsx)(
                                                U.D,
                                                {
                                                    className: (0, r.$)(Z().playButton, Z().control),
                                                    buttonVariant: 'default',
                                                    withHover: !1,
                                                    iconSize: 'xl',
                                                    variant: 'filled',
                                                    onClick: eL,
                                                    isPlaying: ep,
                                                    disabled: !i.isAvailable,
                                                },
                                                i.getKey('PlayButton'),
                                            ),
                                            likeControl: eI,
                                            menuControl: (0, a.jsx)(
                                                q,
                                                {
                                                    playlist: i,
                                                    onOpenChange: eb,
                                                    open: el,
                                                    onClick: eT,
                                                    className: (0, r.$)(Z().menuButton, Z().control),
                                                    icon: (0, a.jsx)(v.I, { size: 'xxs', variant: 'more' }),
                                                    size: 's',
                                                    'data-test-id': c.Kq.playlist.PLAYLIST_CONTEXT_MENU_BUTTON,
                                                },
                                                i.getKey('PlaylistContextMenu'),
                                            ),
                                            pinControl: eN,
                                            trailerControl: ej,
                                        }),
                                    ],
                                }),
                            }),
                        [ef, i, eo, el, eh, eL, ep, eI, eb, eT, eN, ej],
                    ),
                    eP = !!i.actualLikesCount && !i.isLikesCountHidden;
                return (0, a.jsxs)(_.MN, {
                    ref: K,
                    'aria-label': eo,
                    className: (0, r.$)(Z().root, t),
                    title: (0, a.jsx)(h.HL, {
                        variant: 'div',
                        type: 'entity',
                        size: 's',
                        weight: 'medium',
                        lineClamp: 2,
                        'data-test-id': c.Kq.playlist.PLAYLIST_TITLE,
                        children: (0, a.jsx)(E.N, { className: Z().titleLink, href: i.url, onClick: ex, children: i.title }),
                    }),
                    srTitle: (0, a.jsx)(E.N, { href: i.url, onClick: ex, children: i.title }),
                    'data-intersection-property-id': F,
                    contentLinesCount: H,
                    view: eR,
                    description: eg,
                    'data-test-id': c.Kq.playlist.PLAYLIST_ITEM,
                    children: [
                        eP &&
                            (0, a.jsx)(R.x, {
                                ariaLabel: G({ id: 'entity-names.likes-counter' }, { counter: i.actualLikesCount }),
                                likesCount: i.actualLikesCount,
                                isLiked: i.isLiked,
                                handleLikeClick: en,
                            }),
                        l,
                    ],
                });
            });
        },
        87151: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => r });
            var a = i(65024);
            let r = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                return e.map((e) => ((0, a.C)(e) ? e : void 0)).filter((e) => void 0 !== e);
            };
        },
        87736: (e, t, i) => {
            Promise.resolve().then(i.bind(i, 8612));
        },
        91853: (e, t, i) => {
            'use strict';
            i.d(t, { S: () => r });
            var a = i(19383);
            let r = (e) => {
                let { artist: t, callback: i, shouldHistoryBack: r } = e;
                return (0, a.l)({ entity: t, callback: i, modalBehavior: void 0 === r ? void 0 : { shouldHistoryBack: r }, preventDefaultWhenSafe: !0 });
            };
        },
        95226: (e, t, i) => {
            'use strict';
            i.d(t, { F: () => s });
            var a = i(32290),
                r = i(55178),
                l = i(73818);
            let s = (e) => {
                let {
                        blockId: t,
                        blockType: i,
                        blockIdForFrom: s,
                        blockPosX: o,
                        blockPosY: n,
                        objectsCount: c,
                        mainObjectType: d,
                        mainObjectId: u,
                        children: m,
                        displayReasonId: _,
                    } = e,
                    v = (0, r.useMemo)(
                        () => ({
                            blockId: t,
                            blockType: i,
                            blockIdForFrom: s,
                            blockPosX: o,
                            blockPosY: n,
                            objectsCount: c,
                            mainObjectType: d,
                            mainObjectId: u,
                            displayReasonId: _,
                        }),
                        [t, i, s, o, n, c, d, u, _],
                    );
                return (0, a.jsx)(l.p.Provider, { value: v, children: m });
            };
        },
        95481: (e, t, i) => {
            'use strict';
            i.d(t, { f: () => k });
            var a = i(55178),
                r = i(16172),
                l = i(52068),
                s = i(6752),
                o = i(62376),
                n = i(1677),
                c = i(48922),
                d = i(84782),
                u = i(30915),
                m = i(18746),
                _ = i(37240),
                v = i(51012),
                C = i(47498);
            let h = [
                    c._Q.HOME,
                    c._Q.LANDING,
                    c._Q.NON_MUSIC,
                    c._Q.OWN_COLLECTION,
                    c._Q.SEARCH,
                    c._Q.ARTIST,
                    c._Q.CONCERTS,
                    c._Q.CONCERT,
                    c._Q.ALBUM,
                    c._Q.PLAYLIST,
                    c._Q.SLIDES_SCREEN,
                    c._Q.PROMOLANDING_ALBUM,
                    c._Q.WAVE_LANDING_SCREEN,
                ],
                k = () => {
                    let e = (0, a.useRef)(!1),
                        t = (0, l.st)(),
                        i = (0, o.U)(),
                        { hash: k } = (0, l.gf)(),
                        { pageId: p } = (0, _.$)(),
                        { tabId: A, tabPos: x, isTabSelectedByDefault: f } = (0, C.R)(),
                        { offsetBlockPosY: S } = (0, u.u)(),
                        { blockId: L, blockType: y, blockPosX: T, blockPosY: b, mainObjectType: g, mainObjectId: I, objectsCount: j } = (0, d.N)(),
                        { filterKey: N, filterValue: R, filterPos: P } = (0, m.G)(),
                        { skeleton: O } = (0, v.b)(),
                        E = (0, s.L)(() => (void 0 !== S && void 0 !== b ? S + b : b));
                    return (0, a.useCallback)(() => {
                        if (!t || !p || !c.xK.includes(p) || !h.includes(p) || e.current) return;
                        let a = { hash: k, pageId: n.F[p], entityType: y, entityId: L, entityPosX: T, entityPosY: E, objectsCount: j };
                        void 0 !== N && ((a.filterKey = N), (a.filterValue = R), (a.filterPos = P)),
                            c.qG.includes(p) && ((a.tabId = A), (a.tabPos = x), (a.isTabSelectedByDefault = f)),
                            O && (a.skeletonId = O),
                            I && g && ((a.mainObjectType = g), (a.mainObjectId = I));
                        let l = (0, r.Fx)({ params: a, logger: i, context: 'useSendEventOnBlockLoaded' });
                        l && ((0, r.uY)(t.evgenInstance, l), (e.current = !0));
                    }, [t, p, k, y, L, T, E, N, R, P, j, O, I, g, i, A, x, f]);
                };
        },
        98148: (e, t, i) => {
            'use strict';
            i.d(t, { O: () => A });
            var a = i(32290),
                r = i(63618),
                l = i(55178),
                s = i(16172),
                o = i(80451),
                n = i(6752),
                c = i(75245),
                d = i(79856),
                u = i(84782),
                m = i(26042),
                _ = i(19620),
                v = i(49522),
                C = i(30564),
                h = i(33696),
                k = i.n(h);
            let p = (e) => {
                    let {
                            forwardRef: t,
                            shimmerClassName: i,
                            isShimmerVisible: h,
                            isShimmerActive: p,
                            isShimmerWithSubcover: A,
                            isShimmerCentered: x,
                            isShimmerRounded: f,
                            title: S,
                            description: L,
                            coverUrl: y,
                            viewAllActionLink: T,
                            titleChildren: b,
                            headerChildren: g,
                            children: I,
                            className: j,
                            containerClassName: N,
                            headerClassName: R,
                            itemClassName: P,
                            showHeaderShimmer: O = !1,
                            showShimmerInfo: E = !0,
                            showControls: B = !0,
                            headingRef: U,
                            headingVariant: w,
                            customShimmer: M,
                            ...D
                        } = e,
                        H = (0, l.useId)(),
                        z = (0, l.useRef)(null),
                        { objectsCount: K } = (0, u.N)(),
                        F = (0, l.useMemo)(
                            () =>
                                O && h
                                    ? (0, a.jsx)('div', { className: R, children: (0, a.jsx)(d.W, { isActive: p, className: k().shimmerTitle, radius: 'l' }) })
                                    : S || L || b || g
                                      ? (0, a.jsx)(m.B, {
                                            objectType: s.ky.Shortcut,
                                            objectId: String(T),
                                            objectPosX: 0,
                                            objectPosY: 0,
                                            objectsCount: null != K ? K : 0,
                                            children: (0, a.jsx)(_.T, {
                                                className: R,
                                                labeledForId: H,
                                                title: S,
                                                description: L,
                                                coverUrl: y,
                                                viewAllActionLink: T,
                                                controls: B && (0, a.jsx)(v.X, { className: k().controls, carouselRef: z }),
                                                headingRef: U,
                                                headingVariant: w,
                                                withDescription: !!L,
                                                titleChildren: b,
                                                children: g,
                                            }),
                                        })
                                      : void 0,
                            [y, L, R, U, w, H, p, h, K, B, O, S, b, g, T],
                        ),
                        Y = (0, n.L)(() => M || (0, C.k)({ className: i, isActive: p, withInfo: E, withSubcover: A, centered: x, round: f }));
                    return (0, a.jsxs)('section', {
                        ref: t,
                        className: (0, r.$)(k().root, j),
                        ...(0, o.getDataAttrFromProps)(D),
                        children: [
                            F,
                            (0, a.jsx)(c.F, {
                                className: N,
                                ref: z,
                                itemClassName: (0, r.$)(k().item, k().important, P),
                                'aria-labelledby': ''.concat(H, ' ').concat(H, '-description'),
                                children: h ? Y : I,
                            }),
                        ],
                    });
                },
                A = (0, l.forwardRef)((e, t) => (0, a.jsx)(p, { forwardRef: t, ...e }));
        },
    },
    (e) => {
        e.O(
            0,
            [
                7034, 5718, 7258, 7231, 7972, 6347, 3183, 9763, 3048, 6706, 1311, 8892, 2536, 66, 5835, 2812, 8035, 551, 2732, 1410, 6252, 3266, 6477, 7275, 2586, 8347,
                4522, 7702, 6874, 861, 782, 4668, 9740, 1175, 14, 8915, 8816, 2563, 9021, 4220, 9562, 7358,
            ],
            () => e((e.s = 87736)),
        ),
            (_N_E = e.O());
    },
]);
