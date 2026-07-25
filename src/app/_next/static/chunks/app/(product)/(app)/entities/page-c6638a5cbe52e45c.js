(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6360],
    {
        49: (t) => {
            t.exports = {
                root: 'BlockEntities_root__sHn14',
                scrollableContent: 'BlockEntities_scrollableContent__4A0tK',
                scrollableContainer: 'BlockEntities_scrollableContainer__KXyas',
                container: 'BlockEntities_container__1XiOc',
                content: 'BlockEntities_content__bfoTn',
                shimmerWithSubcover: 'BlockEntities_shimmerWithSubcover__dYd6P',
                footer: 'BlockEntities_footer__eEuix',
            };
        },
        356: (t) => {
            t.exports = {
                message: 'NotificationDislike_message__RoxZH',
                text: 'NotificationDislike_text__fJHts',
                cover: 'NotificationDislike_cover__N5Oqu',
                image: 'NotificationDislike_image__jn4_4',
            };
        },
        2125: (t, e, i) => {
            'use strict';
            i.d(e, { h: () => a });
            var s = i(37862),
                a = (function (t) {
                    return (
                        (t[(t.RUP_MAIN_RADIO = ''.concat(s.U.RUP, '_').concat(s.U.MAIN, '-').concat(s.U.RADIO))] = 'RUP_MAIN_RADIO'),
                        (t[(t.DISCOGRAPHY_CAROUSEL = ''.concat(s.U.DISCOGRAPHY, '_').concat(s.U.CAROUSEL))] = 'DISCOGRAPHY_CAROUSEL'),
                        (t[(t.ALBUMS_CAROUSEL = ''.concat(s.U.ALBUMS, '_').concat(s.U.CAROUSEL))] = 'ALBUMS_CAROUSEL'),
                        (t[(t.COMPILATIONS_CAROUSEL = ''.concat(s.U.COMPILATIONS, '_').concat(s.U.CAROUSEL))] = 'COMPILATIONS_CAROUSEL'),
                        (t[(t.PLAYLISTS_CAROUSEL = ''.concat(s.U.PLAYLISTS, '_').concat(s.U.CAROUSEL))] = 'PLAYLISTS_CAROUSEL'),
                        (t[(t.ARTISTS_CAROUSEL = ''.concat(s.U.ARTISTS, '_').concat(s.U.CAROUSEL))] = 'ARTISTS_CAROUSEL'),
                        (t[(t.CLIPS_CAROUSEL = ''.concat(s.U.CLIPS, '_').concat(s.U.CAROUSEL))] = 'CLIPS_CAROUSEL'),
                        (t[(t.DISCOVERY_BLOCK = ''.concat(s.U.DISCOVERY, '_').concat(s.U.BLOCK))] = 'DISCOVERY_BLOCK'),
                        (t[(t.PLAYLISTS_SIMILAR = ''.concat(s.U.PLAYLISTS, '_').concat(s.U.SIMILAR))] = 'PLAYLISTS_SIMILAR'),
                        (t[(t.SEARCH_HISTORY = ''.concat(s.U.SEARCH, '_').concat(s.U.HISTORY))] = 'SEARCH_HISTORY'),
                        (t[(t.PLAYLISTS_SIMILAR_PLAYLIST = ''.concat(s.U.PLAYLISTS, '_').concat(s.U.SIMILAR, '_').concat(s.U.PLAYLIST))] = 'PLAYLISTS_SIMILAR_PLAYLIST'),
                        (t[(t.SEARCH_BEST_RESULTS = ''.concat(s.U.SEARCH, '_').concat(s.U.BEST_RESULTS))] = 'SEARCH_BEST_RESULTS'),
                        (t[(t.SEARCH_OPEN_BEST_RESULTS = ''.concat(s.U.SEARCH, '_').concat(s.U.OPEN_BEST_RESULTS))] = 'SEARCH_OPEN_BEST_RESULTS'),
                        t
                    );
                })({});
        },
        5942: (t, e, i) => {
            'use strict';
            i.d(e, { K: () => x });
            var s = i(32290),
                a = i(92708),
                l = i(55178),
                r = i(60900),
                n = i(63380),
                o = i(45477),
                c = i(75582),
                d = i(57594),
                u = i(90357),
                _ = i(20472),
                m = i(97647),
                A = i(97755);
            let T = (t) => {
                    let { artist: e, closeToast: i } = t;
                    return (0, s.jsx)(A.O, {
                        closeToast: i,
                        entityVariant: m.c.ARTIST,
                        entityUrl: e.url,
                        collectionUrl: _.Z.collectionArtists.href,
                        coverUri: e.coverUri,
                        entityTitle: e.name,
                        isLiked: e.isLiked,
                    });
                },
                x = (t) => {
                    let { user: e } = (0, d.g)(),
                        { notify: i } = (0, c.l)(),
                        [_, m] = (0, l.useState)(!1),
                        { formatMessage: A } = (0, r.A)();
                    return (0, l.useCallback)(async () => {
                        if (!t) return;
                        if (!e.isAuthorized)
                            return void i((0, s.jsx)(u.h, { error: A({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                        if (_) return;
                        let l = { ...(0, a.HO)(t), isLiked: !t.isLiked };
                        m(!0);
                        let r = await t.toggleLike();
                        m(!1),
                            r === n.f.OK
                                ? i((0, s.jsx)(T, { artist: l }), { containerId: o.u.INFO })
                                : i((0, s.jsx)(u.h, { error: A({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR });
                    }, [t, e.isAuthorized, _, A, i]);
                };
        },
        7474: (t, e, i) => {
            'use strict';
            i.d(e, { a: () => w });
            var s = i(32290),
                a = i(63618),
                l = i(96103),
                r = i(55178),
                n = i(60900),
                o = i(16172),
                c = i(21732),
                d = i(71483),
                u = i(91027),
                _ = i(6752),
                m = i(14934),
                A = i(82586),
                pulseSyncPlaylistDownloadIcons = i(82586),
                T = i(86269),
                x = i(71926),
                L = i(91853),
                C = i(5942),
                I = i(70390),
                S = i(71735),
                h = i(47745),
                E = i(2969),
                k = i(54391),
                p = i(23352),
                R = i(72396),
                y = i(5537),
                v = i(84062),
                O = i(28999),
                N = i(90169),
                P = i(57594),
                f = i(11323),
                j = i(92744),
                g = i(61258),
                M = i(10180),
                b = i(90326),
                U = i(29268),
                B = i(34925),
                D = i(80528),
                Y = i(42048),
                z = i.n(Y);
            let w = (0, l.PA)((t) => {
                let { artist: e, className: i, children: l, contentLinesCount: Y, topTitleElement: w, bottomTitleElement: K } = t,
                    { ref: H, intersectionPropertyId: F } = (0, p.n)(),
                    {
                        trailer: V,
                        user: X,
                        paywall: { modal: G },
                    } = (0, P.g)(),
                    { from: W, utmLink: q } = (0, R.f)({ contextId: e.id, contextType: d.K.Artist }),
                    { formatMessage: $ } = (0, n.A)(),
                    [J, Z] = (0, r.useState)(!1),
                    [Q, tt] = (0, r.useState)(!1),
                    [te, ti] = (0, r.useState)(!1),
                    { sendLikeSearchFeedback: ts, sendNavigateSearchFeedback: ta, sendPlaySearchFeedback: tl } = (0, O.z)(),
                    tr = (0, h.N)(),
                    tn = (0, E.b)(),
                    to = (0, C.K)(e),
                    tc = (0, I.A)(e),
                    { id: td, name: tu, coverUri: t_, isLiked: tm } = e,
                    tA = (0, v.Z)(e.url),
                    [tT, tx] = (0, r.useState)(!1),
                    tL = (0, k.F)(),
                    tC = (0, S.P)(),
                    tI = (0, u.c)((t) => {
                        if ((t.stopPropagation(), tC())) return void t.preventDefault();
                        V.openArtistTrailer(e.id), tL(o.ky.Artist, e.id);
                    }),
                    tS = (0, r.useMemo)(() => {
                        let t = $({ id: 'entity-names.artist-name' }, { artistName: tu }),
                            e = tm ? $({ id: 'entity-names.has-your-like' }) : '';
                        return ''.concat(t, ' ').concat(e);
                    }, [tu, tm, $]),
                    { isPlaying: th, togglePlay: tE } = (0, N.D)({
                        playContextParams: { contextData: { type: d.K.Artist, meta: { id: Number(td) }, from: W, utmLink: q }, loadContextMeta: !0 },
                    }),
                    tk = (0, L.S)({ artist: e, callback: tA }),
                    tp = (0, L.S)({ artist: e, callback: tE }),
                    tR = (0, u.c)((t) => {
                        null == ta || ta(), tr({ to: o.QT.ArtistScreen }), tk(t);
                    }),
                    ty = (0, y.N)(),
                    tv = (0, u.c)(() => {
                        if (!tC()) {
                            if (ty) return void G.open();
                            J || th || (Z(!0), null == tl || tl()), tp(), tn(!th);
                        }
                    }),
                    tO = (0, u.c)(() => {
                        Q || tm || (tt(!0), null == ts || ts()), to();
                    }),
                    tN = (0, u.c)((t) => {
                        t.preventDefault(), t.stopPropagation();
                    }),
                    tP = (0, u.c)((t) => {
                        ti(t), tx(t);
                    }),
                    tf = (0, r.useMemo)(
                        () =>
                            (0, s.jsx)(
                                D.g,
                                {
                                    artist: e,
                                    onOpenChange: tP,
                                    open: te,
                                    onClick: tN,
                                    className: (0, a.$)(z().menuButton, z().control),
                                    size: 's',
                                    icon: (0, s.jsx)(A.I, { size: 'xxs', variant: 'more' }),
                                    'data-test-id': c.Kq.artist.ARTIST_CONTEXT_MENU_BUTTON,
                                },
                                e.getKey('ArtistContextMenu'),
                            ),
                        [e, tN, tP, te],
                    ),
                    tj = (0, r.useMemo)(() => {
                        var t;
                        if (null == e || null == (t = e.trailer) ? void 0 : t.isAvailable)
                            return (0, s.jsx)(
                                B.n,
                                {
                                    children: (0, s.jsx)(U.k, {
                                        className: (0, a.$)(z().trailerButton, z().control),
                                        radius: 'round',
                                        size: 's',
                                        iconSize: 'xxs',
                                        onClick: tI,
                                    }),
                                },
                                e.getKey('ArtistCardTrailerTooltip'),
                            );
                    }, [e, tI]),
                    tg = (0, r.useMemo)(
                        () =>
                            (0, s.jsx)(
                                M.O,
                                { onClick: tc, isPinned: e.isPinned, className: (0, a.$)(z().pinButton, z().control), withRipple: !1 },
                                e.getKey('PinButton'),
                            ),
                        [e, tc],
                    ),
                    tM = (0, _.L)(() => {
                        if (e.isAvailable)
                            return (0, s.jsx)(
                                m.hg,
                                {
                                    isVisible: te || tT,
                                    className: z().controls,
                                    radius: 'round',
                                    playControl: (0, s.jsx)(
                                        b.D,
                                        {
                                            buttonVariant: 'default',
                                            withHover: !1,
                                            className: (0, a.$)(z().playButton, z().control),
                                            iconSize: 'xl',
                                            variant: 'filled',
                                            onClick: tv,
                                            isPlaying: th,
                                            disabled: !e.isAvailableForPlaying,
                                        },
                                        e.getKey('PlayButton'),
                                    ),
                                    likeControl: (0, s.jsx)(
                                        j.c,
                                        {
                                            className: (0, a.$)(z().likeButton, z().control),
                                            isLiked: tm,
                                            onClick: tO,
                                            variant: 'default',
                                            size: 's',
                                            iconSize: 'xxs',
                                            disabled: !X.isAuthorized,
                                        },
                                        e.getKey('LikeButton'),
                                    ),
                                    menuControl: tf,
                                    pinControl: tg,
                                    trailerControl: tj,
                                },
                                e.getKey('ArtistCardControls'),
                            );
                    }),
                    tb = (0, r.useMemo)(
                        () =>
                            (0, s.jsx)(T.t, {
                                className: z().cover,
                                radius: 'round',
                                withShadow: !0,
                                'data-test-id': c.Kq.artist.ARTIST_CARD,
                                children: (0, s.jsxs)('div', {
                                    className: z().coverBlock,
                                    onClick: tR,
                                    children: [
                                        (0, s.jsx)(f.B, {
                                            className: z().image,
                                            src: t_,
                                            size: 200,
                                            fit: 'cover',
                                            alt: tS,
                                            withAvatarReplace: !0,
                                            isAvailable: e.isAvailable,
                                            'aria-hidden': !0,
                                        }),
                                        tM,
                                    ],
                                }),
                            }),
                        [tR, t_, tS, e.isAvailable, tM],
                    );
                return (0, s.jsx)(m.MN, {
                    ref: H,
                    className: (0, a.$)(z().root, i),
                    textPosition: 'center',
                    'aria-label': tS,
                    title: (0, s.jsxs)(s.Fragment, {
                        children: [
                            w,
                            (0, s.jsx)(x.HL, {
                                variant: 'div',
                                type: 'entity',
                                size: 's',
                                weight: 'medium',
                                lineClamp: 2,
                                children: (0, s.jsx)(g.N, {
                                    className: z().titleLink,
                                    href: e.url,
                                    'aria-label': tS,
                                    onClick: tR,
                                    'data-test-id': c.Kq.artist.ARTIST_TITLE,
                                    children: tu,
                                }),
                            }),
                            K,
                        ],
                    }),
                    srTitle: (0, s.jsx)(g.N, { href: e.url, onClick: tR, children: tS }),
                    'data-intersection-property-id': F,
                    contentLinesCount: Y,
                    view: tb,
                    'data-test-id': c.Kq.artist.ARTIST_ITEM,
                    children: l,
                });
            });
        },
        8588: (t, e, i) => {
            'use strict';
            i.d(e, { V: () => A });
            var s = i(32290),
                a = i(63618),
                l = i(96103),
                r = i(55178),
                n = i(21732),
                o = i(50162),
                c = i(86269),
                d = i(71926),
                u = i(61258),
                _ = i(69748),
                m = i.n(_);
            let A = (0, l.PA)((t) => {
                var e;
                let { className: i, title: l, weblink: _, linkClassName: A, covers: T, coverSize: x = 100, captionVariant: L = 'div' } = t,
                    C = (0, r.useMemo)(() => {
                        var t;
                        if (null == T || null == (t = T[0]) ? void 0 : t.color) return { '--subcover-background-color': T[0].color };
                    }, [T]);
                return (0, s.jsx)(u.N, {
                    href: _,
                    className: (0, a.$)(m().link, A),
                    'data-test-id': n.OA.mix.MIX_CARD,
                    children: (0, s.jsxs)(c.t, {
                        radius: 'm',
                        style: C,
                        className: (0, a.$)(m().root, i),
                        children: [
                            (0, s.jsxs)('div', {
                                className: m().plate,
                                'data-test-id': n.OA.mix.MIX_CARD_PLATE,
                                children: [
                                    (0, s.jsx)('div', { className: m().subcover, 'data-test-id': n.OA.mix.MIX_CARD_SUBCOVER }),
                                    (0, s.jsx)(o._V, {
                                        src: null == T || null == (e = T[0]) ? void 0 : e.uri,
                                        withAvatarReplace: !0,
                                        fit: 'contain',
                                        className: m().cover,
                                        size: x,
                                        'data-test-id': n.OA.mix.MIX_CARD_COVER,
                                    }),
                                ],
                            }),
                            (0, s.jsx)('div', {
                                className: m().header,
                                children: (0, s.jsx)(d.HL, {
                                    variant: L,
                                    size: 'xs',
                                    weight: 'bold',
                                    className: m().title,
                                    lineClamp: 2,
                                    'data-test-id': n.OA.mix.MIX_CARD_HEADER,
                                    children: l,
                                }),
                            }),
                        ],
                    }),
                });
            });
        },
        8626: (t, e, i) => {
            'use strict';
            i.d(e, { m: () => s });
            let s = () => ({ year: 'numeric' });
        },
        11675: (t) => {
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
        13931: (t, e, i) => {
            'use strict';
            i.d(e, { r: () => l });
            var s = i(55178),
                a = i(60900);
            let l = (t) => {
                let { formatMessage: e } = (0, a.A)();
                return (0, s.useMemo)(() => {
                    let i = '';
                    t.isLiked && !t.actualLikesCount
                        ? (i = e({ id: 'entity-names.has-your-like' }))
                        : 'number' == typeof t.actualLikesCount &&
                          (i =
                              t.actualLikesCount > 0
                                  ? e({ id: 'entity-names.likes-counter' }, { counter: t.actualLikesCount })
                                  : e({ id: 'entity-names.likes-counter-empty' }));
                    let s = e({ id: 'entity-names.playlist-name' }, { playlistName: t.title });
                    return ''.concat(s, ' ').concat(i);
                }, [e, t]);
            };
        },
        14858: (t, e, i) => {
            'use strict';
            i.d(e, { w: () => r });
            var s = i(60900),
                a = i(57594),
                l = i(79406);
            let r = function () {
                let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    { formatMessage: e } = (0, s.A)(),
                    { user: i, experiments: r } = (0, a.g)(),
                    n = 'ru' === i.account.data.userSessionRegionIso && r.checkExperiment(l.z.WebNextFooterDisclaimer, 'on'),
                    o = e(t ? { id: 'footer.explicit-content' } : { id: 'about-app.explicit-content' });
                return n ? e({ id: 'footer.disclaimer-content' }) : o;
            };
        },
        20472: (t, e, i) => {
            'use strict';
            i.d(e, { Z: () => a });
            var s = i(36477);
            let a = {
                main: (0, s.u)('/'),
                chart: (0, s.u)('/chart'),
                chartPodcasts: (0, s.u)('/chart/podcasts'),
                collection: (0, s.u)('/collection'),
                collectionAlbums: (0, s.u)('/collection/albums'),
                collectionArtists: (0, s.u)('/collection/artists'),
                collectionClips: (0, s.u)('/collection/clips'),
                collectionDislikes: (0, s.u)('/collection/dislikes'),
                collectionKids: (0, s.u)('/collection/kids'),
                collectionKidsAlbums: (0, s.u)('/collection/kids/albums'),
                collectionKidsPlaylists: (0, s.u)('/collection/kids/playlists'),
                collectionKidsTracks: (0, s.u)('/collection/kids/tracks'),
                collectionNonMusic: (0, s.u)('/collection/non-music'),
                collectionNonMusicLiked: (0, s.u)('/collection/non-music/liked'),
                collectionVibeRooms: (0, s.u)('/collection/multivibes'),
                collectionPlaylists: (0, s.u)('/collection/playlists'),
                collectionPlaylistsCreated: (0, s.u)('/collection/playlists/created'),
                collectionPlaylistsLiked: (0, s.u)('/collection/playlists/liked'),
                collectionShelf: (0, s.u)('/collection/shelf'),
                collectionShelfLiked: (0, s.u)('/collection/shelf/liked'),
                collectionShelfNewEpisodes: (0, s.u)('/collection/shelf/new-episodes'),
                collectionShelfRecentlyPlayed: (0, s.u)('/collection/shelf/recently-played'),
                concerts: (0, s.u)('/concerts'),
                kids: (0, s.u)('/kids'),
                mixes: (0, s.u)('/mixes'),
                musicHistory: (0, s.u)('/music-history'),
                mymusic: (0, s.u)('/mymusic'),
                mymusicDownloadsTracks: (0, s.u)('/mymusic/downloads/tracks'),
                nonMusic: (0, s.u)('/non-music'),
                pay: (0, s.u)('/pay'),
                userSlides: (0, s.u)('/slides/user'),
                search: (0, s.u)('/search'),
                searchHistory: (0, s.u)('/search/history'),
                settings: (0, s.u)('/settings'),
                video: (0, s.u)('/video'),
            };
        },
        31010: (t, e, i) => {
            'use strict';
            i.d(e, { H: () => a, P: () => l });
            var s = i(55178);
            let a = (0, s.createContext)(null),
                l = () => (0, s.useContext)(a);
        },
        32468: (t, e, i) => {
            'use strict';
            i.d(e, { A: () => r });
            var s = i(32290),
                a = i(77088),
                l = i.n(a);
            let r = (t) => {
                let { children: e } = t;
                return (0, s.jsx)('footer', { className: l().empty });
            };
        },
        38223: (t, e, i) => {
            'use strict';
            i.d(e, { D: () => d });
            var s = i(32290),
                a = i(96103),
                l = i(39407),
                r = i(21732),
                n = i(82586),
                o = i(19740),
                c = i(57594);
            let d = (0, a.PA)((t) => {
                let { isDisliked: e, onClick: i, disabled: a, className: d } = t,
                    { user: u } = (0, c.g)();
                return (0, s.jsx)(o.Dr, {
                    onClick: i,
                    className: d,
                    icon: (0, s.jsx)(n.I, { variant: e ? 'disliked' : 'dislike', size: 'xxs' }),
                    role: 'menuitemcheckbox',
                    'aria-checked': e,
                    disabled: a || !u.isAuthorized,
                    'data-test-id': r.S7.CONTEXT_MENU_DISLIKE_BUTTON,
                    children: (0, s.jsx)(l.A, { id: 'interface-actions.do-not-like' }),
                });
            });
        },
        42048: (t) => {
            t.exports = {
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
        50308: (t, e, i) => {
            'use strict';
            i.d(e, { e: () => l });
            var s = i(32290),
                a = i(89020);
            let l = (t) => {
                let {
                    isActive: e,
                    itemClassName: i,
                    round: l,
                    centered: r,
                    withInfo: n,
                    count: o = 10,
                    shimmerClassName: c,
                    linesCount: d,
                    'aria-label': u,
                    withSubcover: _,
                } = t;
                return Array.from(Array(o).keys()).map((t) =>
                    (0, s.jsx)(
                        a.V,
                        { isActive: e, linesCount: d, className: i, round: l, centered: r, withInfo: n, withSubcover: _, 'aria-label': u, shimmerClassName: c },
                        t,
                    ),
                );
            };
        },
        52432: (t, e, i) => {
            'use strict';
            i.r(e), i.d(e, { default: () => B });
            var s = i(32290),
                a = i(21916),
                l = i(96103),
                r = i(55178),
                n = i(63618),
                o = i(60900),
                c = i(21732),
                d = i(96194),
                u = i(90404),
                _ = i(46049),
                m = i(71926),
                A = i(24170),
                T = i(7474),
                x = i(7999),
                L = i(83460),
                C = i(8588),
                I = i(83808),
                S = i(83920),
                h = i(57594),
                E = i(58054),
                k = i(32468),
                p = i(74694),
                R = i(50308),
                y = i(49),
                v = i.n(y);
            let O = (0, l.PA)((t) => {
                let { blockId: e, blockType: i } = t,
                    { landingBlockEntities: a } = (0, h.g)(),
                    { formatMessage: l } = (0, o.A)(),
                    { contentScrollRef: y, setContentScrollRef: O } = (0, S.g)(),
                    N = (0, I.W)(),
                    P = (0, r.useMemo)(() => {
                        if (a.isLoading) {
                            let t = l({ id: 'loading-messages.content-is-loading' }),
                                e = [d.t.COLLECTION_ARTISTS, d.t.COLLECTION_ARTISTS_AND_TOP, d.t.PERSONAL_ARTISTS, d.t.NEW_STARS_ARTISTS, d.t.EDITORIAL_ARTISTS].includes(
                                    i,
                                ),
                                a = i === d.t.MIXES_GRID;
                            return (0, s.jsx)(R.e, {
                                itemClassName: (0, n.$)({ [v().shimmerWithSubcover]: a }),
                                withSubcover: a,
                                isActive: !0,
                                'aria-label': t,
                                centered: e || a,
                                round: e,
                            });
                        }
                        return a.items.map((t) => {
                            switch (t.type) {
                                case u._.MIX_CARD_ITEM:
                                    return (0, s.jsx)(C.V, { title: t.data.title, weblink: t.data.weblink, covers: t.data.covers }, t.data.id);
                                case u._.ALBUM_ITEM:
                                    return (0, s.jsx)(A.a, { album: t.data, contentLinesCount: 3 }, t.data.id);
                                case u._.CHART_ALBUM_ITEM:
                                case u._.NON_MUSIC_ALBUM_ITEM:
                                    return (0, s.jsx)(A.a, { withChart: !0, withLikesCount: !0, album: t.data, contentLinesCount: 3 }, t.data.id);
                                case u._.ARTIST_ITEM:
                                    return (0, s.jsx)(T.a, { artist: t.data, contentLinesCount: 3 }, t.data.id);
                                case u._.PLAYLIST_ITEM:
                                    return (0, s.jsx)(L.B, { playlist: t.data, contentLinesCount: 3 }, t.data.key);
                                case u._.PERSONAL_PLAYLIST_ITEM:
                                    return (0, s.jsx)(
                                        L.B,
                                        { playlist: t.data.playlist, customDescription: t.data.description, contentLinesCount: 4 },
                                        t.data.playlist.key,
                                    );
                                case u._.LIKED_PLAYLIST_ITEM:
                                    return (0, s.jsx)(L.B, { playlist: t.data, contentLinesCount: 3 }, t.data.key);
                            }
                        });
                    }, [i, a.isLoading, a.items, l]);
                return (
                    e && a.isNeededToLoad && (0, r.use)(a.getData({ blockId: e })),
                    (0, s.jsx)(x.h, {
                        scrollElement: y,
                        outerTitle: a.title,
                        children: (0, s.jsxs)('div', {
                            className: v().root,
                            children: [
                                (0, s.jsx)(p.Y, {
                                    variant: p.V.TEXT,
                                    withForwardControl: !1,
                                    withBackwardControl: N.canBack,
                                    children: (0, s.jsx)(m.DZ, {
                                        id: 'block-entities-header',
                                        variant: 'h1',
                                        weight: 'bold',
                                        size: 'xl',
                                        lineClamp: 1,
                                        children: a.title,
                                    }),
                                }),
                                (0, s.jsx)(_.N, {
                                    ref: O,
                                    className: v().scrollableContent,
                                    containerClassName: v().scrollableContainer,
                                    'data-test-id': c.e8.landing.BLOCK_ENTITY_PAGE,
                                    children: (0, s.jsxs)('div', {
                                        className: v().container,
                                        children: [
                                            (0, s.jsx)('div', { className: v().content, 'aria-labelledby': 'block-entities-header', tabIndex: 0, children: P }),
                                            (0, s.jsx)(k.A, { children: (0, s.jsx)(E.w, { className: v().footer }) }),
                                        ],
                                    }),
                                }),
                            ],
                        }),
                    })
                );
            });
            var N = i(2125),
                P = i(48922),
                f = i(95226),
                j = i(22714),
                g = i(3796),
                M = i(49399);
            let b = {
                    'new-releases': d.t.NEW_RELEASES,
                    'editorial-new-releases': d.t.EDITORIAL_NEW_RELEASES,
                    'personal-artists': d.t.PERSONAL_ARTISTS,
                    'new-stars-artists': d.t.NEW_STARS_ARTISTS,
                    'editorial-artists': d.t.EDITORIAL_ARTISTS,
                    'new-playlists': d.t.NEW_PLAYLISTS,
                    'editorial-compilation': d.t.EDITORIAL_COMPILATION,
                    'non-music-editorial-compilation': d.t.EDITORIAL_COMPILATION,
                    'chart-albums': d.t.CHART_ALBUMS,
                    'mixes-grid': d.t.MIXES_GRID,
                    'mixes-music': d.t.MIXES_MUSIC,
                },
                U = (0, l.PA)((t) => {
                    let { blockType: e, blockId: i } = t,
                        { landingBlockEntities: l } = (0, h.g)();
                    (0, r.useEffect)(
                        () => () => {
                            l.reset();
                        },
                        [l, e, i],
                    ),
                        (0, g.J)(l.loadingState === M.G.RESOLVE);
                    let n = b[e];
                    return (
                        (l.isNotFound || !n) && (0, a.notFound)(),
                        (0, s.jsx)(j.n, {
                            pageId: P._Q.ENTITIES,
                            children: (0, s.jsx)(f.F, {
                                blockId: ''.concat(N.h.DISCOVERY_BLOCK, '-').concat(i),
                                blockIdForFrom: ''.concat(N.h.DISCOVERY_BLOCK, '-').concat(i),
                                blockPosX: 1,
                                blockPosY: 1,
                                blockType: n,
                                objectsCount: l.items.length,
                                children: (0, s.jsx)(O, { blockType: n, blockId: i }),
                            }),
                        })
                    );
                }),
                B = () => {
                    let t = (0, a.useSearchParams)(),
                        e = t.get('blockType'),
                        i = t.get('blockId');
                    return (e && i) || (0, a.notFound)(), (0, s.jsx)(U, { blockType: e, blockId: i });
                };
        },
        58046: (t, e, i) => {
            Promise.resolve().then(i.bind(i, 52432));
        },
        58054: (t, e, i) => {
            'use strict';
            i.d(e, { w: () => h });
            var s = i(32290),
                a = i(63618),
                l = i(96103),
                r = i(60900),
                n = i(39407),
                o = i(21732),
                c = i(71926),
                d = i(14858),
                u = i(8626),
                _ = i(31010),
                m = i(61945),
                A = i(57594),
                T = (function (t) {
                    return (
                        (t.YANDEX = 'YANDEX'),
                        (t.YANDEX_PROJECTS = 'YANDEX_PROJECTS'),
                        (t.COPYRIGHT_HOLDER = 'COPYRIGHT_HOLDER'),
                        (t.AGREEMENT = 'AGREEMENT'),
                        (t.RECOMMENDATION_RULES = 'RECOMMENDATION_RULES'),
                        (t.HELP = 'HELP'),
                        (t.PRIVACY_POLICY = 'PRIVACY_POLICY'),
                        t
                    );
                })({});
            let x = (t, e, i) => {
                switch (t) {
                    case T.YANDEX:
                        if ('ru' === e) return 'https://ya.ru';
                        return;
                    case T.YANDEX_PROJECTS:
                        return 'https://yandex.'.concat(e, '/all?lang=').concat(i);
                    case T.COPYRIGHT_HOLDER:
                        return 'https://yandex.'.concat(e, '/support/music/performers-and-copyright-holders/copyright.html?lang=').concat(i);
                    case T.AGREEMENT:
                        return 'https://yandex.ru/legal/music_termsofuse?lang='.concat(i);
                    case T.RECOMMENDATION_RULES:
                        return 'https://music.yandex.ru/legal/recommendations/ru/#music';
                    case T.HELP:
                        return 'https://yandex.'.concat(e, '/support/music/index.html?lang=').concat(i);
                    case T.PRIVACY_POLICY:
                        return 'https://yandex.'.concat(e, '/legal/confidential/').concat(i);
                }
            };
            var L = i(61258),
                C = i(77088),
                I = i.n(C);
            let S = (0, l.PA)((t) => {
                    let { className: e } = t,
                        { location: i } = (0, A.g)(),
                        { formatDate: l } = (0, r.A)(),
                        { language: d } = (0, m.h)();
                    return (0, s.jsxs)('div', {
                        className: (0, a.$)(I().copyrights, e),
                        'data-test-id': o.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, s.jsxs)(c.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: I().text,
                                children: [
                                    '\xa9 ',
                                    l(new Date(), (0, u.m)()),
                                    ' \xa0',
                                    (0, s.jsx)(L.N, {
                                        target: '_blank',
                                        href: x(T.YANDEX, i.tld, d),
                                        className: (0, a.$)(I().copyrightLink, I().yandexMusicLink),
                                        'data-test-id': o.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: (0, s.jsx)(n.A, { id: 'footer.yandex-music' }),
                                    }),
                                ],
                            }),
                            (0, s.jsx)(c.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, s.jsx)(L.N, {
                                target: '_blank',
                                href: x(T.YANDEX_PROJECTS, i.tld, d),
                                className: I().copyrightLink,
                                'data-test-id': o.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: (0, s.jsx)(n.A, { id: 'footer.yandex-project' }),
                            }),
                        ],
                    });
                }),
                h = (0, l.PA)((t) => {
                    var e;
                    let { className: i } = t,
                        { user: l, location: r } = (0, A.g)(),
                        { isEnabled: u } = null != (e = (0, _.P)()) ? e : {},
                        { language: C } = (0, m.h)(),
                        h = (0, d.w)(!0),
                        E = ((t) => {
                            let { platform: e, tld: i, language: a, userRegion: l } = t,
                                r = { title: (0, s.jsx)(n.A, { id: 'footer.links-copyright-holders' }), url: x(T.COPYRIGHT_HOLDER, i, a) },
                                o = { title: (0, s.jsx)(n.A, { id: 'footer.links-privacy-policy' }), url: x(T.PRIVACY_POLICY, i, a) },
                                c = { title: (0, s.jsx)(n.A, { id: 'footer.links-terms' }), url: x(T.AGREEMENT, i, a) },
                                d = { title: (0, s.jsx)(n.A, { id: 'footer.links-recommendation-rules' }), url: x(T.RECOMMENDATION_RULES, i, a) },
                                u = { title: (0, s.jsx)(n.A, { id: 'footer.links-help' }), url: x(T.HELP, i, a) };
                            switch (e) {
                                case 'spa':
                                case 'web': {
                                    let t = [r, c, d];
                                    return 'ru' === l && t.push(o), t.push(u), t;
                                }
                                case 'desktop':
                                    return [r, c, d, u];
                            }
                        })({ platform: 'desktop', tld: r.tld, language: C, userRegion: l.account.data.userSessionRegionIso });
                    return (0, s.jsxs)('footer', {
                        className: (0, a.$)(I().root, I().important, { [I().root_withOffsetForDeeplink]: u }, i),
                        'data-test-id': o.S7.FOOTER,
                        children: [
                            (0, s.jsxs)('div', {
                                className: I().links,
                                children: [
                                    (0, s.jsx)('ol', {
                                        className: I().list,
                                        'data-test-id': o.S7.FOOTER_LINKS_LIST,
                                        children: E.map((t) => {
                                            let { title: e, url: i } = t;
                                            return (0, s.jsx)(
                                                'li',
                                                {
                                                    className: I().item,
                                                    children: (0, s.jsx)(L.N, {
                                                        target: '_blank',
                                                        href: i,
                                                        className: I().link,
                                                        'data-test-id': o.S7.FOOTER_LINK,
                                                        children: e,
                                                    }),
                                                },
                                                i,
                                            );
                                        }),
                                    }),
                                    (0, s.jsx)(c.HL, {
                                        variant: 'span',
                                        type: 'text',
                                        size: 'm',
                                        weight: 'medium',
                                        className: I().explicitText,
                                        tabIndex: 0,
                                        dangerouslySetInnerHTML: { __html: h },
                                        'data-test-id': o.S7.FOOTER_DISCLAIMER_TEXT,
                                    }),
                                ],
                            }),
                            (0, s.jsx)(S, {}),
                        ],
                    });
                });
        },
        69748: (t) => {
            t.exports = {
                plate: 'MixesGridMixCard_plate__ONH3P',
                root: 'MixesGridMixCard_root__HHE7z',
                subcover: 'MixesGridMixCard_subcover__z5sBj',
                link: 'MixesGridMixCard_link__D3_S6',
                header: 'MixesGridMixCard_header__t24VH',
                title: 'MixesGridMixCard_title__fKTCy',
                cover: 'MixesGridMixCard_cover__Ra3ic',
            };
        },
        70390: (t, e, i) => {
            'use strict';
            i.d(e, { A: () => A });
            var s = i(32290),
                a = i(92708),
                l = i(55178),
                r = i(60900),
                n = i(45477),
                o = i(75582),
                c = i(57594),
                d = i(90357),
                u = i(97647),
                _ = i(8097);
            let m = (t) => {
                    let { artist: e, closeToast: i } = t;
                    return (0, s.jsx)(_.k, {
                        closeToast: i,
                        entityVariant: u.c.ARTIST,
                        coverUri: e.coverUri,
                        entityUrl: e.url,
                        entityTitle: e.name,
                        isPinned: e.isPinned,
                        radius: 'round',
                    });
                },
                A = (t) => {
                    let { user: e } = (0, c.g)(),
                        { notify: i } = (0, o.l)(),
                        { formatMessage: u } = (0, r.A)(),
                        [_, A] = (0, l.useState)(!1);
                    return (0, l.useCallback)(async () => {
                        if (!t) return;
                        if (!e.isAuthorized)
                            return void i((0, s.jsx)(d.h, { error: u({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: n.u.ERROR });
                        if (_) return;
                        let l = { ...(0, a.HO)(t), isPinned: !t.isPinned };
                        A(!0);
                        let r = await t.togglePin();
                        A(!1),
                            r
                                ? i((0, s.jsx)(m, { artist: l }), { containerId: n.u.INFO })
                                : i((0, s.jsx)(d.h, { error: u({ id: 'error-messages.error-during-action' }) }), { containerId: n.u.ERROR });
                    }, [t, e.isAuthorized, _, u, i]);
                };
        },
        73141: (t, e, i) => {
            'use strict';
            i.d(e, { K: () => T });
            var s = i(32290),
                a = i(92708),
                l = i(55178),
                r = i(60900),
                n = i(63380),
                o = i(45477),
                c = i(75582),
                d = i(57594),
                u = i(90357),
                _ = i(97647),
                m = i(97755);
            let A = (t) => {
                    let { playlist: e, closeToast: i } = t;
                    return (0, s.jsx)(m.O, {
                        entityVariant: _.c.PLAYLIST,
                        entityUrl: e.url,
                        collectionUrl: '/collection',
                        entityTitle: e.title,
                        isLiked: e.isLiked,
                        closeToast: i,
                        coverUri: e.coverUri,
                    });
                },
                T = (t) => {
                    let { user: e } = (0, d.g)(),
                        { notify: i } = (0, c.l)(),
                        [_, m] = (0, l.useState)(!1),
                        { formatMessage: T } = (0, r.A)();
                    return (0, l.useCallback)(async () => {
                        if (!e.isAuthorized)
                            return void i((0, s.jsx)(u.h, { error: T({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                        if (_) return;
                        let l = { ...(0, a.HO)(t), url: t.url, isLiked: !t.isLiked };
                        m(!0);
                        let r = await t.toggleLike();
                        m(!1),
                            r === n.f.OK
                                ? i((0, s.jsx)(A, { playlist: l }), { containerId: o.u.INFO })
                                : i((0, s.jsx)(u.h, { error: T({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR });
                    }, [e.isAuthorized, _, t, T, i]);
                };
        },
        73192: (t, e, i) => {
            'use strict';
            i.d(e, { A: () => A });
            var s = i(32290),
                a = i(92708),
                l = i(55178),
                r = i(60900),
                n = i(45477),
                o = i(75582),
                c = i(57594),
                d = i(90357),
                u = i(97647),
                _ = i(8097);
            let m = (t) => {
                    let { playlist: e, closeToast: i } = t;
                    return (0, s.jsx)(_.k, {
                        closeToast: i,
                        entityVariant: u.c.PLAYLIST,
                        entityUrl: e.url,
                        coverUri: e.coverUri,
                        entityTitle: e.title,
                        isPinned: e.isPinned,
                        radius: 's',
                    });
                },
                A = (t) => {
                    let { user: e } = (0, c.g)(),
                        { notify: i } = (0, o.l)(),
                        { formatMessage: u } = (0, r.A)(),
                        [_, A] = (0, l.useState)(!1);
                    return (0, l.useCallback)(async () => {
                        if (!e.isAuthorized)
                            return void i((0, s.jsx)(d.h, { error: u({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: n.u.ERROR });
                        if (_) return;
                        let l = { ...(0, a.HO)(t), url: t.url, isPinned: !t.isPinned };
                        A(!0);
                        let r = await t.togglePin();
                        A(!1),
                            r
                                ? i((0, s.jsx)(m, { playlist: l }), { containerId: n.u.INFO })
                                : i((0, s.jsx)(d.h, { error: u({ id: 'error-messages.error-during-action' }) }), { containerId: n.u.ERROR });
                    }, [e.isAuthorized, _, t, i, u]);
                };
        },
        77088: (t) => {
            t.exports = {
                root: 'Footer_root__ugyur',
                root_withOffsetForDeeplink: 'Footer_root_withOffsetForDeeplink__qcs6U',
                important: 'Footer_important__mCXZp',
                links: 'Footer_links__3kOY7',
                list: 'Footer_list__0sCXQ',
                copyrights: 'Footer_copyrights__IsnbJ',
                link: 'Footer_link__av50q',
                copyrightLink: 'Footer_copyrightLink__6NOkg',
                yandexMusicLink: 'Footer_yandexMusicLink__k7ILf',
                explicitText: 'Footer_explicitText__Px3wr',
                text: 'Footer_text__lMPwl',
                empty: 'Footer_empty__RR_zf',
            };
        },
        80528: (t, e, i) => {
            'use strict';
            i.d(e, { g: () => J });
            var s = i(32290),
                a = i(96103),
                l = i(60900),
                r = i(16172),
                n = i(21732),
                o = i(71483),
                c = i(91027),
                d = i(82586),
                u = i(19740),
                _ = i(92708),
                m = i(55178),
                A = i(63380),
                T = i(45477),
                x = i(75582),
                L = i(57594),
                C = i(90357),
                I = i(86269),
                S = i(74196),
                h = i(71926),
                E = i(58534),
                k = i(11323),
                p = i(356),
                R = i.n(p);
            let y = (t) => {
                let { coverUri: e, title: i, isDisliked: a, closeToast: r } = t,
                    { formatMessage: n } = (0, l.A)(),
                    o = n(a ? { id: 'notifications-info.artist-unavailable-in-recommendations' } : { id: 'notifications-info.artist-available-in-recommendations' });
                return (0, s.jsx)(E.$, {
                    closeToast: r,
                    message: (0, s.jsxs)('div', {
                        className: R().message,
                        children: [
                            (0, s.jsx)(S.q, { children: (0, s.jsx)('p', { role: 'alert', 'aria-label': o }) }),
                            (0, s.jsx)(I.t, {
                                className: R().cover,
                                radius: 'round',
                                children: (0, s.jsx)(k.B, { className: R().image, src: e, alt: i, size: 100, fit: 'cover', withAvatarReplace: !0 }),
                            }),
                            (0, s.jsx)(h.HL, { className: R().text, variant: 'div', type: 'controls', size: 'm', 'aria-hidden': !0, children: o }),
                        ],
                    }),
                });
            };
            var v = i(5942),
                O = i(70390),
                N = i(9017),
                P = i(65477),
                f = i(71735),
                j = i(37862),
                g = i(48922),
                M = i(54391),
                b = i(72396),
                U = i(46200),
                B = i(27120),
                D = i(43564),
                Y = i(95134),
                z = i(79406),
                w = i(51675),
                K = i(48027),
                H = i(89384),
                F = i(38223),
                V = i(58237),
                X = i(56367),
                G = i(4914),
                W = i(83755),
                q = i(25160),
                $ = i(4008);
            let J = (0, a.PA)((t) => {
                var e, i, a;
                let { artist: I, onOpenChange: S, open: h, ...E } = t,
                    { shouldShowBuySubscriptionModal: k, showBuySubscriptionModal: p } = (0, U.q)(),
                    {
                        settings: { isMobile: R },
                        modals: { artistAboutModal: J },
                        trailer: Z,
                        user: Q,
                        experiments: tt,
                    } = (0, L.g)(),
                    te = (0, O.A)(I),
                    ti = (0, v.K)(I),
                    ts = ((t) => {
                        let { user: e } = (0, L.g)(),
                            { notify: i } = (0, x.l)(),
                            [a, r] = (0, m.useState)(!1),
                            { formatMessage: n } = (0, l.A)();
                        return (0, c.c)(async () => {
                            if (!t) return;
                            if (!e.isAuthorized)
                                return void i((0, s.jsx)(C.h, { error: n({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: T.u.ERROR });
                            if (a) return;
                            let l = { ...(0, _.HO)(t), isDisliked: !t.isDisliked };
                            r(!0);
                            let o = await t.toggleDislike();
                            r(!1),
                                o === A.f.OK
                                    ? i((0, s.jsx)(y, { coverUri: l.coverUri, title: l.name, isDisliked: l.isDisliked }), { containerId: T.u.INFO })
                                    : i((0, s.jsx)(C.h, { error: n({ id: 'error-messages.error-during-action' }) }), { containerId: T.u.ERROR });
                        });
                    })(I),
                    ta = (0, M.F)(),
                    tl = ''.concat(j.U.ARTIST, '-').concat(null == I ? void 0 : I.id),
                    { formatMessage: tr } = (0, l.A)(),
                    { utmLink: tn } = (0, b.f)({ blockId: j.U.ARTIST, contextType: o.K.Artist, contextId: null == I ? void 0 : I.id }),
                    { shareLink: to, pathname: tc } = (0, H.b)('/artist/:artistId', { params: { artistId: null != (i = null == I ? void 0 : I.id) ? i : '' } }),
                    td = (0, N.A)({ entityVariant: Y.D.ARTIST, urlParams: { id: null == I ? void 0 : I.id } }),
                    { isPlaying: tu, togglePlay: t_ } = (0, D.B)({
                        seeds: null != (a = null == I ? void 0 : I.seeds) ? a : [],
                        pageIdForFrom: g._Q.RADIO,
                        blockIdForFrom: tl,
                        parentContextId: null == I ? void 0 : I.id,
                    }),
                    tm = (0, f.P)(),
                    tA = tr((null == I ? void 0 : I.isComposer) ? { id: 'artist.about-composer' } : { id: 'artist.about-artist' }),
                    tT = (0, c.c)(() => {
                        if (k && Q.isAuthorized) return void p();
                        tu || t_();
                    }),
                    tx = (0, c.c)(() => {
                        if (!tm()) {
                            if (k) return void p();
                            (null == I ? void 0 : I.id) && (Z.setUtmLink(tn), Z.openArtistTrailer(I.id), ta(r.ky.Artist, I.id));
                        }
                    }),
                    tL = (0, c.c)(() => {
                        J.open(null == I ? void 0 : I.id);
                    });
                (0, B.N)(h);
                let tC = { variant: w.Y.ARTIST, id: null == I ? void 0 : I.id, title: null == I ? void 0 : I.name, path: tc },
                    tI = tt.checkExperiment(z.z.WebEditorsFeatures, 'on'),
                    tS = null == I || null == (e = I.trailer) ? void 0 : e.isAvailable,
                    th = tt.checkExperiment(z.z.WebNextArtistInfo, 'on');
                return (0, s.jsxs)(u.W1, {
                    isMobile: R,
                    offsetOptions: 10,
                    open: h,
                    onOpenChange: S,
                    ariaLabel: tr({ id: 'interface-actions.context-menu' }),
                    containerProps: { 'data-test-id': n.Kq.artist.ARTIST_CONTEXT_MENU },
                    ...E,
                    children: [
                        tI && (0, s.jsx)($.WithOffline, { fallback: (0, s.jsx)(P.d, { entityVariant: Y.D.ARTIST, adminUrl: td }) }),
                        !R && (0, s.jsx)($.WithOffline, { fallback: (0, s.jsx)(X.L, { onClick: te, isPinned: null == I ? void 0 : I.isPinned }) }),
                        (0, s.jsx)($.WithOffline, {
                            fallback: (0, s.jsx)(V.T, {
                                onClick: ti,
                                isLiked: null == I ? void 0 : I.isLiked,
                                disabled: !Q.isAuthorized || !(null == I ? void 0 : I.isAvailable),
                            }),
                        }),
                        tS && (0, s.jsx)($.WithOffline, { fallback: (0, s.jsx)(W.N, { onClick: tx }) }),
                        (0, s.jsx)($.WithOffline, {
                            fallback: (0, s.jsx)(q.C, { onClick: tT, disabled: !(null == I ? void 0 : I.isAvailable), variant: K.I.ARTIST, onOpenMenuChange: S }),
                        }),
                        (0, s.jsx)(G.H, { disabled: !I, shareLink: to, entityMeta: tC }),
                        th &&
                            (0, s.jsx)($.WithOffline, {
                                fallback: (0, s.jsx)(u.Dr, {
                                    onClick: tL,
                                    icon: (0, s.jsx)(d.I, { variant: 'info', size: 'xxs' }),
                                    'data-test-id': n.Kq.artist.ARTIST_CONTEXT_MENU_ABOUT_ARTIST_BUTTON,
                                    children: tA,
                                }),
                            }),
                        (0, s.jsx)($.WithOffline, {
                            fallback: (0, s.jsx)(F.D, { onClick: ts, isDisliked: null == I ? void 0 : I.isDisliked, disabled: !(null == I ? void 0 : I.isAvailable) }),
                        }),
                    ],
                });
            });
        },
        83460: (t, e, i) => {
            'use strict';
            i.d(e, { B: () => Q });
            var s = i(32290),
                a = i(63618),
                l = i(96103),
                r = i(55178),
                n = i(60900),
                o = i(16172),
                c = i(21732),
                d = i(71483),
                u = i(91027),
                _ = i(6752),
                m = i(14934),
                A = i(82586),
                T = i(86269),
                x = i(71926),
                L = i(41677),
                C = i(73141),
                I = i(73192),
                S = i(71735),
                h = i(47745),
                E = i(2969),
                k = i(54391),
                p = i(23352),
                R = i(72396),
                y = i(5537),
                v = i(84062),
                O = i(28999),
                N = i(90169),
                P = i(57594),
                f = i(61376),
                j = i(11323),
                g = i(92744),
                M = i(61258),
                b = i(10180),
                U = i(90326),
                B = i(29268),
                D = i(34925),
                Y = i(13931),
                z = i(19740),
                w = i(9017),
                K = i(65477),
                H = i(46200),
                F = i(27120),
                V = i(95134),
                X = i(79406),
                G = i(58237),
                W = i(56367),
                q = i(83755);
            let $ = (0, l.PA)((t) => {
                var e;
                let { playlist: i, onOpenChange: a, open: l, ...r } = t,
                    { shouldShowBuySubscriptionModal: d, showBuySubscriptionModal: _ } = (0, H.q)(),
                    {
                        experiments: m,
                        settings: { isMobile: A },
                        trailer: T,
                        user: x,
                    } = (0, P.g)(),
                    L = (0, C.K)(i),
                    h = (0, I.A)(i),
                    E = (0, k.F)(),
                    { formatMessage: p } = (0, n.A)(),
                    R = (0, S.P)(),
                    y = m.checkExperiment(X.z.WebEditorsFeatures, 'on'),
                    v = (0, w.A)({ entityVariant: V.D.PLAYLIST, urlParams: { id: i.uid, kind: i.kind } });
                (0, F.N)(l);
                let O = (0, u.c)(() => {
                    if (d) return void _();
                    R() || (T.openPlaylistTrailer(i.id), E(o.ky.Playlist, i.id));
                });
                return (0, s.jsxs)(z.W1, {
                    title: i.title,
                    onOpenChange: a,
                    open: l,
                    offsetOptions: 10,
                    isMobile: A,
                    ariaLabel: p({ id: 'interface-actions.context-menu' }),
                    containerProps: { 'data-test-id': c.Kq.playlist.PLAYLIST_CONTEXT_MENU },
                    ...r,
                    children: [
                        y && (0, s.jsx)(K.d, { entityVariant: V.D.PLAYLIST, adminUrl: i.isFavouritePlaylist ? void 0 : v }),
                        !A && (0, s.jsx)(W.L, { onClick: h, isPinned: i.isPinned }),
                        !i.isFavouritePlaylist && (0, s.jsx)(G.T, { onClick: L, isLiked: i.isLiked, disabled: !x.isAuthorized }),
                        (i.tracksCount ?? 1) > 0 &&
                            (0, s.jsx)(z.Dr, {
                                onClick: i.downloadToFile,
                                icon: (0, s.jsx)(pulseSyncPlaylistDownloadIcons.I, { variant: 'download', size: 'xxs' }),
                                children: 'Скачать в файл',
                            }),
                        (null == (e = i.trailer) ? void 0 : e.isAvailable) && (0, s.jsx)(q.N, { onClick: O, disabled: !i.isAvailable }),
                    ],
                });
            });
            var J = i(11675),
                Z = i.n(J);
            let Q = (0, l.PA)((t) => {
                let { className: e, playlist: i, children: l, contentLinesCount: z, customDescription: w } = t,
                    { ref: K, intersectionPropertyId: H } = (0, p.n)(),
                    {
                        trailer: F,
                        user: V,
                        paywall: { modal: X },
                    } = (0, P.g)(),
                    { from: G, utmLink: W } = (0, R.f)({ contextId: i.uuid, contextType: d.K.Playlist }),
                    { formatMessage: q } = (0, n.A)(),
                    { sendLikeSearchFeedback: J, sendNavigateSearchFeedback: Q, sendPlaySearchFeedback: tt } = (0, O.z)(),
                    [te, ti] = (0, r.useState)(!1),
                    [ts, ta] = (0, r.useState)(!1),
                    [tl, tr] = (0, r.useState)(!1),
                    tn = (0, Y.r)(i),
                    to = (0, C.K)(i),
                    tc = (0, I.A)(i),
                    td = (0, h.N)(),
                    tu = (0, E.b)(),
                    t_ = (0, v.Z)(i.url),
                    tm = (0, k.F)(),
                    tA = (0, S.P)(),
                    tT = (0, u.c)((t) => {
                        if ((t.stopPropagation(), tA())) return void t.preventDefault();
                        F.setUtmLink(W), F.openPlaylistTrailer(i.id), tm(o.ky.Playlist, i.id);
                    }),
                    [tx, tL] = (0, r.useState)(!1),
                    { isPlaying: tC, togglePlay: tI } = (0, N.D)({
                        playContextParams: { contextData: { type: d.K.Playlist, meta: { id: i.id, uuid: i.uuid }, from: G, utmLink: W }, loadContextMeta: !0 },
                    }),
                    tS = (0, u.c)(() => {
                        td({ to: o.QT.PlaylistScreen }), null == Q || Q();
                    }),
                    th = (0, u.c)((t) => {
                        tS(), t_(t);
                    }),
                    tE = (0, y.N)(),
                    tk = (0, u.c)(() => {
                        if (!tA()) {
                            if (tE) return void X.open();
                            te || tC || (ti(!0), null == tt || tt()), tI(), tu(!tC);
                        }
                    }),
                    tp = (0, u.c)(() => {
                        ts || i.isLiked || (ta(!0), null == J || J()), to();
                    }),
                    tR = (0, u.c)((t) => {
                        t.preventDefault(), t.stopPropagation();
                    }),
                    ty = (0, u.c)((t) => {
                        tr(t), tL(t);
                    }),
                    tv = (0, r.useMemo)(() => {
                        var t;
                        return w
                            ? (0, s.jsx)(x.HL, { variant: 'span', type: 'entity', size: 's', weight: 'medium', lineClamp: 2, children: w }, i.getKey('description'))
                            : (null == (t = i.artists) ? void 0 : t.length)
                              ? (0, s.jsx)(
                                    L.i,
                                    { className: Z().artists, artists: i.artists, lineClamp: 1, linkClassName: Z().artistLink, captionSize: 's' },
                                    i.getKey('description'),
                                )
                              : void 0;
                    }, [w, i]),
                    tO = (0, _.L)(() => {
                        if (!i.isFavouritePlaylist)
                            return (0, s.jsx)(
                                g.c,
                                {
                                    className: (0, a.$)(Z().likeButton, Z().control),
                                    isLiked: i.isLiked,
                                    onClick: tp,
                                    variant: 'default',
                                    size: 's',
                                    iconSize: 'xxs',
                                    disabled: !V.isAuthorized,
                                },
                                i.getKey('LikeButton'),
                            );
                    }),
                    tN = (0, r.useMemo)(() => {
                        var t;
                        if (null == i || null == (t = i.trailer) ? void 0 : t.isAvailable)
                            return (0, s.jsx)(
                                D.n,
                                {
                                    children: (0, s.jsx)(
                                        B.k,
                                        { className: (0, a.$)(Z().trailerButton, Z().control), radius: 'round', size: 's', iconSize: 'xxs', onClick: tT },
                                        i.getKey('TrailerButton'),
                                    ),
                                },
                                i.getKey('PlaylilstCardTrailerTooltip'),
                            );
                    }, [tT, i]),
                    tP = (0, r.useMemo)(
                        () =>
                            (0, s.jsx)(
                                b.O,
                                { onClick: tc, isPinned: i.isPinned, className: (0, a.$)(Z().pinButton, Z().control), withRipple: !1 },
                                i.getKey('PinButton'),
                            ),
                        [tc, i],
                    ),
                    tf = (0, r.useMemo)(
                        () =>
                            (0, s.jsx)(T.t, {
                                className: Z().cover,
                                radius: 's',
                                withShadow: !0,
                                'data-test-id': c.Kq.playlist.PLAYLIST_CARD,
                                children: (0, s.jsxs)('div', {
                                    className: Z().coverBlock,
                                    onClick: th,
                                    children: [
                                        (0, s.jsx)(j.B, {
                                            className: Z().image,
                                            src: i.coverUri,
                                            size: 200,
                                            fit: 'cover',
                                            alt: tn,
                                            withAvatarReplace: !0,
                                            'aria-hidden': !0,
                                        }),
                                        (0, s.jsx)(m.hg, {
                                            isVisible: tl || tx,
                                            className: Z().controls,
                                            playControl: (0, s.jsx)(
                                                U.D,
                                                {
                                                    className: (0, a.$)(Z().playButton, Z().control),
                                                    buttonVariant: 'default',
                                                    withHover: !1,
                                                    iconSize: 'xl',
                                                    variant: 'filled',
                                                    onClick: tk,
                                                    isPlaying: tC,
                                                    disabled: !i.isAvailable,
                                                },
                                                i.getKey('PlayButton'),
                                            ),
                                            likeControl: tO,
                                            menuControl: (0, s.jsx)(
                                                $,
                                                {
                                                    playlist: i,
                                                    onOpenChange: ty,
                                                    open: tl,
                                                    onClick: tR,
                                                    className: (0, a.$)(Z().menuButton, Z().control),
                                                    icon: (0, s.jsx)(A.I, { size: 'xxs', variant: 'more' }),
                                                    size: 's',
                                                    'data-test-id': c.Kq.playlist.PLAYLIST_CONTEXT_MENU_BUTTON,
                                                },
                                                i.getKey('PlaylistContextMenu'),
                                            ),
                                            pinControl: tP,
                                            trailerControl: tN,
                                        }),
                                    ],
                                }),
                            }),
                        [th, i, tn, tl, tx, tk, tC, tO, ty, tR, tP, tN],
                    ),
                    tj = !!i.actualLikesCount && !i.isLikesCountHidden;
                return (0, s.jsxs)(m.MN, {
                    ref: K,
                    'aria-label': tn,
                    className: (0, a.$)(Z().root, e),
                    title: (0, s.jsx)(x.HL, {
                        variant: 'div',
                        type: 'entity',
                        size: 's',
                        weight: 'medium',
                        lineClamp: 2,
                        'data-test-id': c.Kq.playlist.PLAYLIST_TITLE,
                        children: (0, s.jsx)(M.N, { className: Z().titleLink, href: i.url, onClick: tS, children: i.title }),
                    }),
                    srTitle: (0, s.jsx)(M.N, { href: i.url, onClick: tS, children: i.title }),
                    'data-intersection-property-id': H,
                    contentLinesCount: z,
                    view: tf,
                    description: tv,
                    'data-test-id': c.Kq.playlist.PLAYLIST_ITEM,
                    children: [
                        tj &&
                            (0, s.jsx)(f.x, {
                                ariaLabel: q({ id: 'entity-names.likes-counter' }, { counter: i.actualLikesCount }),
                                likesCount: i.actualLikesCount,
                                isLiked: i.isLiked,
                                handleLikeClick: to,
                            }),
                        l,
                    ],
                });
            });
        },
        90404: (t, e, i) => {
            'use strict';
            var s;
            i.d(e, { _: () => s }),
                (function (t) {
                    (t.ALBUM_ITEM = 'album_item'),
                        (t.ARTIST_ITEM = 'artist_item'),
                        (t.PLAYLIST_ITEM = 'playlist_item'),
                        (t.TRACK_ITEM = 'track_item'),
                        (t.LIKED_PLAYLIST_ITEM = 'liked_playlist_item'),
                        (t.PERSONAL_PLAYLIST_ITEM = 'personal_playlist_item'),
                        (t.WAVE_ITEM = 'wave_item'),
                        (t.WAVE_AGENT_ITEM = 'wave_agent_item'),
                        (t.MIX = 'mix'),
                        (t.MIX_CARD_ITEM = 'mix_card_item'),
                        (t.LIKED_ALBUM_ITEM = 'liked_album_item'),
                        (t.PRESAVED_ALBUM_ITEM = 'presaved_album_item'),
                        (t.CHART_ALBUM_ITEM = 'chart_album_item'),
                        (t.NON_MUSIC_ALBUM_ITEM = 'non_music_album_item'),
                        (t.MENU_ITEM = 'menu_item'),
                        (t.DONATION_ITEM = 'donation_item'),
                        (t.CLIP = 'clip'),
                        (t.CLIP_ITEM = 'clip_item'),
                        (t.CONCERT_ITEM = 'concert_item'),
                        (t.QUERY_TO_VIBE_ITEM = 'q2v_item');
                })(s || (s = {}));
        },
        91853: (t, e, i) => {
            'use strict';
            i.d(e, { S: () => a });
            var s = i(19383);
            let a = (t) => {
                let { artist: e, callback: i, shouldHistoryBack: a } = t;
                return (0, s.l)({ entity: e, callback: i, modalBehavior: void 0 === a ? void 0 : { shouldHistoryBack: a }, preventDefaultWhenSafe: !0 });
            };
        },
        95226: (t, e, i) => {
            'use strict';
            i.d(e, { F: () => r });
            var s = i(32290),
                a = i(55178),
                l = i(73818);
            let r = (t) => {
                let {
                        blockId: e,
                        blockType: i,
                        blockIdForFrom: r,
                        blockPosX: n,
                        blockPosY: o,
                        objectsCount: c,
                        mainObjectType: d,
                        mainObjectId: u,
                        children: _,
                        displayReasonId: m,
                    } = t,
                    A = (0, a.useMemo)(
                        () => ({
                            blockId: e,
                            blockType: i,
                            blockIdForFrom: r,
                            blockPosX: n,
                            blockPosY: o,
                            objectsCount: c,
                            mainObjectType: d,
                            mainObjectId: u,
                            displayReasonId: m,
                        }),
                        [e, i, r, n, o, c, d, u, m],
                    );
                return (0, s.jsx)(l.p.Provider, { value: A, children: _ });
            };
        },
    },
    (t) => {
        t.O(
            0,
            [
                7034, 7231, 5718, 7972, 6347, 3183, 9763, 6639, 7258, 4182, 6706, 8892, 2536, 66, 5835, 2812, 8035, 551, 2732, 1410, 6252, 6477, 7275, 2586, 8347, 4522,
                7702, 6874, 861, 782, 4668, 9740, 1175, 14, 8915, 8816, 2563, 4220, 9562, 7358,
            ],
            () => t((t.s = 58046)),
        ),
            (_N_E = t.O());
    },
]);
