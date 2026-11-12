(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2837, 6360],
    {
        1698: (e, t, i) => {
            'use strict';
            i.d(t, { e: () => r });
            var s = i(88800),
                a = i(37770);
            let r = (e) => {
                let {
                    isActive: t,
                    itemClassName: i,
                    round: r,
                    centered: l,
                    withInfo: n,
                    count: o = 10,
                    shimmerClassName: c,
                    linesCount: d,
                    'aria-label': u,
                    withSubcover: _,
                } = e;
                return Array.from(Array(o).keys()).map((e) =>
                    (0, s.jsx)(
                        a.V,
                        { isActive: t, linesCount: d, className: i, round: r, centered: l, withInfo: n, withSubcover: _, 'aria-label': u, shimmerClassName: c },
                        e,
                    ),
                );
            };
        },
        4370: (e, t, i) => {
            'use strict';
            i.d(t, { Z: () => a });
            var s = i(67174);
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
                muzmarket: (0, s.u)('/muzmarket'),
                mymusic: (0, s.u)('/mymusic'),
                mymusicDownloadsTracks: (0, s.u)('/mymusic/downloads/tracks'),
                multivibe: (0, s.u)('/multivibe'),
                nonMusic: (0, s.u)('/non-music'),
                pay: (0, s.u)('/pay'),
                userSlides: (0, s.u)('/slides/user'),
                search: (0, s.u)('/search'),
                searchHistory: (0, s.u)('/search/history'),
                settings: (0, s.u)('/settings'),
                video: (0, s.u)('/video'),
            };
        },
        6322: (e, t, i) => {
            'use strict';
            i.d(t, { l: () => l });
            var s = i(88800),
                a = i(15077),
                r = i(33719);
            let l = (e) => {
                let { playlist: t, closeToast: i } = e;
                return (0, s.jsx)(r.k, {
                    closeToast: i,
                    entityVariant: a.c.PLAYLIST,
                    entityUrl: t.url,
                    coverUri: t.coverUri,
                    entityTitle: t.title,
                    isPinned: t.isPinned,
                    radius: 's',
                });
            };
        },
        11006: (e) => {
            e.exports = {
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
        14965: (e, t, i) => {
            'use strict';
            i.d(t, { t: () => s });
            class s extends Error {
                name = 'BaseException';
                message;
                code;
                data;
                stack;
                constructor(e, t = {}) {
                    let { code: i = 'E_INTERNAL', data: a = {}, ...r } = t,
                        l = e || 'Internal error';
                    (super(l, r), (this.message = l), (this.code = i), (this.data = a), (this.stack = Error(l).stack), Object.setPrototypeOf(this, s.prototype));
                }
            }
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
        21256: (e, t, i) => {
            'use strict';
            i.d(t, { a: () => z });
            var s = i(88800),
                a = i(65724),
                r = i(84961),
                l = i(53548),
                n = i(2058),
                o = i(87999),
                c = i(62414),
                d = i(80643),
                u = i(33979),
                _ = i(17392),
                m = i(18593),
                h = i(29993),
                p = i(79070),
                A = i(29832),
                I = i(52300),
                T = i(7555),
                C = i(29504),
                L = i(91959),
                y = i(64207),
                v = i(77455),
                E = i(5407),
                S = i(57934),
                O = i(84384),
                x = i(4795),
                k = i(78940),
                b = i(55693),
                R = i(39079),
                N = i(72288),
                g = i(81877),
                f = i(49738),
                P = i(91292),
                j = i(56862),
                M = i(16704),
                D = i(56446),
                U = i(36207),
                B = i(43161),
                w = i(93434),
                Y = i.n(w);
            let z = (0, r.PA)((e) => {
                let { artist: t, className: i, children: r, contentLinesCount: w, topTitleElement: z, bottomTitleElement: F } = e,
                    H = (0, c.D)(),
                    {
                        trailer: K,
                        user: V,
                        paywall: { modal: X },
                    } = (0, N.g)(),
                    { from: G, utmLink: W } = (0, O.f)({ contextId: t.id, contextType: m.K.Artist }),
                    { formatMessage: q } = (0, n.A)(),
                    [$, J] = (0, l.useState)(!1),
                    [Z, Q] = (0, l.useState)(!1),
                    [ee, et] = (0, l.useState)(!1),
                    { sendLikeSearchFeedback: ei, sendNavigateSearchFeedback: es, sendPlaySearchFeedback: ea } = (0, b.z)(),
                    er = (0, d.S)(),
                    el = (0, u.g)(),
                    en = (0, y.K)(t),
                    eo = (0, v.A)(t),
                    { id: ec, name: ed, coverUri: eu, isLiked: e_ } = t,
                    em = (0, k.Z)(t.url),
                    [eh, ep] = (0, l.useState)(!1),
                    eA = (0, S.F)(),
                    eI = (0, E.P)(),
                    eT = (0, h.c)((e) => {
                        if ((e.stopPropagation(), eI())) return void e.preventDefault();
                        (K.openArtistTrailer(t.id), eA(o.DomainObjectType.Artist, t.id));
                    }),
                    eC = (0, l.useMemo)(() => {
                        let e = q({ id: 'entity-names.artist-name' }, { artistName: ed }),
                            t = e_ ? q({ id: 'entity-names.has-your-like' }) : '';
                        return ''.concat(e, ' ').concat(t);
                    }, [ed, e_, q]),
                    { isPlaying: eL, togglePlay: ey } = (0, R.D)({
                        playContextParams: { contextData: { type: m.K.Artist, meta: { id: Number(ec) }, from: G, utmLink: W }, loadContextMeta: !0 },
                    }),
                    ev = (0, L.S)({ artist: t, callback: em }),
                    eE = (0, L.S)({ artist: t, callback: ey }),
                    eS = (0, h.c)((e) => {
                        (null == es || es(), er({ to: o.AppScreen.ArtistScreen }), ev(e));
                    }),
                    eO = (0, x.N)(),
                    ex = (0, h.c)(() => {
                        if (!eI()) {
                            if (eO) return void X.open();
                            ($ || eL || (J(!0), null == ea || ea()), eE(), eL || el());
                        }
                    }),
                    ek = (0, h.c)(() => {
                        (Z || e_ || (Q(!0), null == ei || ei()), en());
                    }),
                    eb = (0, h.c)((e) => {
                        (e.preventDefault(), e.stopPropagation());
                    }),
                    eR = (0, h.c)((e) => {
                        (et(e), ep(e));
                    }),
                    eN = (0, l.useMemo)(
                        () =>
                            (0, s.jsx)(
                                B.g,
                                {
                                    artist: t,
                                    onOpenChange: eR,
                                    open: ee,
                                    onClick: eb,
                                    className: (0, a.$)(Y().menuButton, Y().control),
                                    size: 's',
                                    icon: (0, s.jsx)(I.I, { size: 'xxs', variant: 'more' }),
                                    'data-test-id': _.Kq.artist.ARTIST_CONTEXT_MENU_BUTTON,
                                },
                                t.getKey('ArtistContextMenu'),
                            ),
                        [t, eb, eR, ee],
                    ),
                    eg = (0, l.useMemo)(() => {
                        var e;
                        if (null == t || null == (e = t.trailer) ? void 0 : e.isAvailable)
                            return (0, s.jsx)(
                                U.n,
                                {
                                    children: (0, s.jsx)(D.k, {
                                        className: (0, a.$)(Y().trailerButton, Y().control),
                                        radius: 'round',
                                        size: 's',
                                        iconSize: 'xxs',
                                        onClick: eT,
                                    }),
                                },
                                t.getKey('ArtistCardTrailerTooltip'),
                            );
                    }, [t, eT]),
                    ef = (0, l.useMemo)(
                        () =>
                            (0, s.jsx)(
                                j.O,
                                { onClick: eo, isPinned: t.isPinned, className: (0, a.$)(Y().pinButton, Y().control), withRipple: !1 },
                                t.getKey('PinButton'),
                            ),
                        [t, eo],
                    ),
                    eP = (0, p.L)(() => {
                        if (t.isAvailable)
                            return (0, s.jsx)(
                                A.hg,
                                {
                                    isVisible: ee || eh,
                                    className: Y().controls,
                                    radius: 'round',
                                    playControl: (0, s.jsx)(
                                        M.D,
                                        {
                                            buttonVariant: 'default',
                                            withHover: !1,
                                            className: (0, a.$)(Y().playButton, Y().control),
                                            iconSize: 'xl',
                                            variant: 'filled',
                                            onClick: ex,
                                            isPlaying: eL,
                                            disabled: !t.isAvailableForPlaying,
                                        },
                                        t.getKey('PlayButton'),
                                    ),
                                    likeControl: (0, s.jsx)(
                                        f.c,
                                        {
                                            className: (0, a.$)(Y().likeButton, Y().control),
                                            isLiked: e_,
                                            onClick: ek,
                                            variant: 'default',
                                            size: 's',
                                            iconSize: 'xxs',
                                            disabled: !V.isAuthorized,
                                        },
                                        t.getKey('LikeButton'),
                                    ),
                                    menuControl: eN,
                                    pinControl: ef,
                                    trailerControl: eg,
                                },
                                t.getKey('ArtistCardControls'),
                            );
                    }),
                    ej = (0, l.useMemo)(
                        () =>
                            (0, s.jsx)(T.t, {
                                className: Y().cover,
                                radius: 'round',
                                withShadow: !0,
                                'data-test-id': _.Kq.artist.ARTIST_CARD,
                                children: (0, s.jsxs)('div', {
                                    className: Y().coverBlock,
                                    onClick: eS,
                                    children: [
                                        (0, s.jsx)(g.B, {
                                            className: Y().image,
                                            src: eu,
                                            size: 200,
                                            fit: 'cover',
                                            alt: eC,
                                            withAvatarReplace: !0,
                                            isAvailable: t.isAvailable,
                                            'aria-hidden': !0,
                                        }),
                                        eP,
                                    ],
                                }),
                            }),
                        [eS, eu, eC, t.isAvailable, eP],
                    );
                return (0, s.jsx)(A.MN, {
                    ref: H,
                    className: (0, a.$)(Y().root, i),
                    textPosition: 'center',
                    'aria-label': eC,
                    title: (0, s.jsxs)(s.Fragment, {
                        children: [
                            z,
                            (0, s.jsx)(C.HL, {
                                variant: 'div',
                                type: 'entity',
                                size: 's',
                                weight: 'medium',
                                lineClamp: 2,
                                'aria-hidden': !0,
                                children: (0, s.jsx)(P.N, {
                                    className: Y().titleLink,
                                    href: t.url,
                                    tabIndex: -1,
                                    'aria-label': eC,
                                    onClick: eS,
                                    'data-test-id': _.Kq.artist.ARTIST_TITLE,
                                    children: ed,
                                }),
                            }),
                            F,
                        ],
                    }),
                    srTitle: (0, s.jsx)(P.N, { className: Y().srTitleLink, href: t.url, onClick: eS, children: eC }),
                    contentLinesCount: w,
                    view: ej,
                    'data-test-id': _.Kq.artist.ARTIST_ITEM,
                    children: r,
                });
            });
        },
        24460: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => _ });
            var s = i(88800),
                a = i(96706),
                r = i(53548),
                l = i(2058),
                n = i(29595),
                o = i(74965),
                c = i(72288),
                d = i(66943),
                u = i(6322);
            let _ = (e) => {
                let { user: t } = (0, c.g)(),
                    { notify: i } = (0, o.l)(),
                    { formatMessage: _ } = (0, l.A)(),
                    [m, h] = (0, r.useState)(!1);
                return (0, r.useCallback)(async () => {
                    if (!t.isAuthorized) return void i((0, s.jsx)(d.h, { error: _({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: n.u.ERROR });
                    if (m) return;
                    let r = { ...(0, a.HO)(e), url: e.url, isPinned: !e.isPinned };
                    h(!0);
                    let l = await e.togglePin();
                    (h(!1),
                        l
                            ? i((0, s.jsx)(u.l, { playlist: r }), { containerId: n.u.INFO })
                            : i((0, s.jsx)(d.h, { error: _({ id: 'error-messages.error-during-action' }) }), { containerId: n.u.ERROR }));
                }, [t.isAuthorized, m, e, i, _]);
            };
        },
        30832: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => l });
            var s = i(88800),
                a = i(15077),
                r = i(42729);
            let l = (e) => {
                let { playlist: t, closeToast: i } = e;
                return (0, s.jsx)(r.O, {
                    entityVariant: a.c.PLAYLIST,
                    entityUrl: t.url,
                    collectionUrl: '/collection',
                    entityTitle: t.title,
                    isLiked: t.isLiked,
                    closeToast: i,
                    coverUri: t.coverUri,
                });
            };
        },
        32094: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => h });
            var s = i(88800),
                a = i(65724),
                r = i(84961),
                l = i(53548),
                n = i(17392),
                o = i(90688),
                c = i(7555),
                d = i(29504),
                u = i(91292),
                _ = i(97754),
                m = i.n(_);
            let h = (0, r.PA)((e) => {
                var t;
                let { className: i, title: r, weblink: _, linkClassName: h, covers: p, coverSize: A = 100, captionVariant: I = 'div' } = e,
                    T = (0, l.useMemo)(() => {
                        var e;
                        if (null == p || null == (e = p[0]) ? void 0 : e.color) return { '--subcover-background-color': p[0].color };
                    }, [p]);
                return (0, s.jsx)(u.N, {
                    href: _,
                    className: (0, a.$)(m().link, h),
                    'data-test-id': n.OA.mix.MIX_CARD,
                    children: (0, s.jsxs)(c.t, {
                        radius: 'm',
                        style: T,
                        className: (0, a.$)(m().root, i),
                        children: [
                            (0, s.jsxs)('div', {
                                className: m().plate,
                                'data-test-id': n.OA.mix.MIX_CARD_PLATE,
                                children: [
                                    (0, s.jsx)('div', { className: m().subcover, 'data-test-id': n.OA.mix.MIX_CARD_SUBCOVER }),
                                    (0, s.jsx)(o._V, {
                                        src: null == p || null == (t = p[0]) ? void 0 : t.uri,
                                        withAvatarReplace: !0,
                                        fit: 'contain',
                                        className: m().cover,
                                        size: A,
                                        'data-test-id': n.OA.mix.MIX_CARD_COVER,
                                    }),
                                ],
                            }),
                            (0, s.jsx)('div', {
                                className: m().header,
                                children: (0, s.jsx)(d.HL, {
                                    variant: I,
                                    size: 'xs',
                                    weight: 'bold',
                                    className: m().title,
                                    lineClamp: 2,
                                    'data-test-id': n.OA.mix.MIX_CARD_HEADER,
                                    children: r,
                                }),
                            }),
                        ],
                    }),
                });
            });
        },
        37523: (e, t, i) => {
            'use strict';
            i.d(t, { F: () => d });
            var s = i(88800),
                a = i(53548),
                r = i(63582),
                l = i(53534),
                n = i(99875),
                o = i(245);
            let c = (e, t, i) => {
                    let s = e.createBlockViewSession(),
                        a = !1;
                    return { claimLoadedSession: () => (a ? null : ((a = !0), s)), client: e, identity: t, loadedSession: s, screenSession: i };
                },
                d = (0, r.B)(
                    { kind: 'provider', requiredProps: ['blockId', 'blockType', 'blockPosX', 'blockPosY', 'objectsCount'], scope: 'block' },
                    ({ blockId: e, blockIdForFrom: t, blockPosX: i, blockPosY: r, blockType: d, children: u, objectsCount: _ }) => {
                        let m = (0, o.N)(),
                            h = (0, a.useContext)(l.k)?.session,
                            p = [e, d, i, r].join(':'),
                            [A, I] = (0, a.useState)(() => c(m, p, h));
                        (A.client !== m || A.identity !== p || A.screenSession !== h) && I(c(m, p, h));
                        let T = (0, a.useMemo)(
                            () => ({
                                claimLoadedSession: A.claimLoadedSession,
                                loadedSession: A.loadedSession,
                                scope: { blockId: e, blockIdForFrom: t, blockPosX: i, blockPosY: r, blockType: d, objectsCount: _ },
                            }),
                            [e, t, i, r, d, _, A.claimLoadedSession, A.loadedSession],
                        );
                        return (0, s.jsx)(n.p, { value: T, children: u });
                    },
                );
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
            var s = i(88800),
                a = i(65724),
                r = i(84961),
                l = i(53548),
                n = i(2058),
                o = i(87999),
                c = i(62414),
                d = i(80643),
                u = i(33979),
                _ = i(17392),
                m = i(18593),
                h = i(29993),
                p = i(79070),
                A = i(29832),
                I = i(52300),
                T = i(7555),
                C = i(29504),
                L = i(13946),
                y = i(85902),
                v = i(24460),
                E = i(5407),
                S = i(57934),
                O = i(84384),
                x = i(4795),
                k = i(78940),
                b = i(55693),
                R = i(39079),
                N = i(72288),
                g = i(86298),
                f = i(81877),
                P = i(49738),
                j = i(91292),
                M = i(56862),
                D = i(16704),
                U = i(56446),
                B = i(36207),
                w = i(47513),
                Y = i(19934),
                z = i(48749),
                F = i(22505),
                H = i(9618),
                K = i(95210),
                V = i(46936),
                X = i(97956),
                G = i(93091),
                W = i(27817),
                q = i(15425);
            let $ = (0, r.PA)((e) => {
                var t;
                let { playlist: i, onOpenChange: a, open: r, ...l } = e,
                    { shouldShowBuySubscriptionModal: c, showBuySubscriptionModal: d } = (0, H.q)(),
                    {
                        experiments: u,
                        settings: { isMobile: m },
                        trailer: p,
                        user: A,
                    } = (0, N.g)(),
                    I = (0, y.K)(i),
                    T = (0, v.A)(i),
                    C = (0, S.F)(),
                    { formatMessage: L } = (0, n.A)(),
                    O = (0, E.P)(),
                    x = u.checkExperiment(X.z.WebEditorsFeatures, 'on'),
                    k = (0, z.A)({ entityVariant: V.D.PLAYLIST, urlParams: { id: i.uid, kind: i.kind } });
                (0, K.N)(r);
                let b = (0, h.c)(() => {
                    if (c) return void d();
                    O() || (p.openPlaylistTrailer(i.id), C(o.DomainObjectType.Playlist, i.id));
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
                                        (activate(), a?.(!1));
                                    },
                                    children: label,
                                    'data-pulsesync-addon-menu-item': '',
                                },
                                key,
                            );
                        },
                    }) ?? items;
                // for PulseSync WebHost: END playlist context and native addon menu item rendering
                return (0, s.jsxs)(Y.W1, {
                    title: i.title,
                    onOpenChange: a,
                    open: r,
                    offsetOptions: 10,
                    isMobile: m,
                    ariaLabel: L({ id: 'interface-actions.context-menu' }),
                    containerDataTestId: _.Kq.playlist.PLAYLIST_CONTEXT_MENU,
                    ...l,
                    // for PulseSync WebHost: BEGIN inject native addon items into the playlist context menu
                    children: pulseSyncInjectPlaylistMenuItems([
                        x && (0, s.jsx)(F.d, { entityVariant: V.D.PLAYLIST, adminUrl: i.isFavouritePlaylist ? void 0 : k }),
                        !m && (0, s.jsx)(W.L, { onClick: T, isPinned: i.isPinned }),
                        !i.isFavouritePlaylist && (0, s.jsx)(G.T, { onClick: I, isLiked: i.isLiked, disabled: !A.isAuthorized }),
                        // for PulseSync: BEGIN download-to-file action in the playlist context menu
                        (i.tracksCount ?? 1) > 0 &&
                            (0, s.jsx)(Y.Dr, {
                                onClick: i.downloadToFile,
                                icon: (0, s.jsx)(pulseSyncPlaylistDownloadIcons.I, { variant: 'download', size: 'xxs' }),
                                children: 'Скачать в файл',
                            }),
                        // for PulseSync: END download-to-file action in the playlist context menu
                        (null == (t = i.trailer) ? void 0 : t.isAvailable) && (0, s.jsx)(q.N, { onClick: b, disabled: !i.isAvailable }),
                    ]),
                    // for PulseSync WebHost: END inject native addon items into the playlist context menu
                });
            });
            var J = i(17657),
                Z = i.n(J);
            let Q = (0, r.PA)((e) => {
                let { className: t, playlist: i, children: r, contentLinesCount: Y, customDescription: z, onCoverMouseDown: F } = e,
                    H = (0, c.D)(),
                    {
                        trailer: K,
                        user: V,
                        paywall: { modal: X },
                    } = (0, N.g)(),
                    { from: G, utmLink: W } = (0, O.f)({ contextId: i.uuid, contextType: m.K.Playlist }),
                    { formatMessage: q } = (0, n.A)(),
                    { sendLikeSearchFeedback: J, sendNavigateSearchFeedback: Q, sendPlaySearchFeedback: ee } = (0, b.z)(),
                    [et, ei] = (0, l.useState)(!1),
                    [es, ea] = (0, l.useState)(!1),
                    [er, el] = (0, l.useState)(!1),
                    en = (0, w.r)(i),
                    eo = (0, y.K)(i),
                    ec = (0, v.A)(i),
                    ed = (0, d.S)(),
                    eu = (0, u.g)(),
                    e_ = (0, k.Z)(i.url),
                    em = (0, S.F)(),
                    eh = (0, E.P)(),
                    ep = (0, h.c)((e) => {
                        if ((e.stopPropagation(), eh())) return void e.preventDefault();
                        (K.setUtmLink(W), K.openPlaylistTrailer(i.id), em(o.DomainObjectType.Playlist, i.id));
                    }),
                    [eA, eI] = (0, l.useState)(!1),
                    { isPlaying: eT, togglePlay: eC } = (0, R.D)({
                        playContextParams: { contextData: { type: m.K.Playlist, meta: { id: i.id, uuid: i.uuid }, from: G, utmLink: W }, loadContextMeta: !0 },
                    }),
                    eL = (0, h.c)(() => {
                        (ed({ to: o.AppScreen.PlaylistScreen }), null == Q || Q());
                    }),
                    ey = (0, h.c)((e) => {
                        (eL(), e_(e));
                    }),
                    ev = (0, x.N)(),
                    eE = (0, h.c)(() => {
                        if (!eh()) {
                            if (ev) return void X.open();
                            (et || eT || (ei(!0), null == ee || ee()), eC(), eT || eu());
                        }
                    }),
                    eS = (0, h.c)(() => {
                        (es || i.isLiked || (ea(!0), null == J || J()), eo());
                    }),
                    eO = (0, h.c)((e) => {
                        (e.preventDefault(), e.stopPropagation());
                    }),
                    ex = (0, h.c)((e) => {
                        (el(e), eI(e));
                    }),
                    ek = (0, l.useMemo)(() => {
                        var e;
                        return z
                            ? (0, s.jsx)(C.HL, { variant: 'span', type: 'entity', size: 's', weight: 'medium', lineClamp: 2, children: z }, i.getKey('description'))
                            : (null == (e = i.artists) ? void 0 : e.length)
                              ? (0, s.jsx)(
                                    L.i,
                                    { className: Z().artists, artists: i.artists, lineClamp: 1, linkClassName: Z().artistLink, captionSize: 's' },
                                    i.getKey('description'),
                                )
                              : void 0;
                    }, [z, i]),
                    eb = (0, p.L)(() => {
                        if (!i.isFavouritePlaylist)
                            return (0, s.jsx)(
                                P.c,
                                {
                                    className: (0, a.$)(Z().likeButton, Z().control),
                                    isLiked: i.isLiked,
                                    onClick: eS,
                                    variant: 'default',
                                    size: 's',
                                    iconSize: 'xxs',
                                    disabled: !V.isAuthorized,
                                },
                                i.getKey('LikeButton'),
                            );
                    }),
                    eR = (0, l.useMemo)(() => {
                        var e;
                        if (null == i || null == (e = i.trailer) ? void 0 : e.isAvailable)
                            return (0, s.jsx)(
                                B.n,
                                {
                                    children: (0, s.jsx)(
                                        U.k,
                                        { className: (0, a.$)(Z().trailerButton, Z().control), radius: 'round', size: 's', iconSize: 'xxs', onClick: ep },
                                        i.getKey('TrailerButton'),
                                    ),
                                },
                                i.getKey('PlaylilstCardTrailerTooltip'),
                            );
                    }, [ep, i]),
                    eN = (0, l.useMemo)(
                        () =>
                            (0, s.jsx)(
                                M.O,
                                { onClick: ec, isPinned: i.isPinned, className: (0, a.$)(Z().pinButton, Z().control), withRipple: !1 },
                                i.getKey('PinButton'),
                            ),
                        [ec, i],
                    ),
                    eg = (0, l.useMemo)(
                        () =>
                            (0, s.jsx)(T.t, {
                                className: Z().cover,
                                radius: 's',
                                withShadow: !0,
                                'data-test-id': _.Kq.playlist.PLAYLIST_CARD,
                                children: (0, s.jsxs)('div', {
                                    className: Z().coverBlock,
                                    onClick: ey,
                                    onMouseDown: F,
                                    children: [
                                        (0, s.jsx)(f.B, {
                                            className: Z().image,
                                            src: i.coverUri,
                                            size: 200,
                                            fit: 'cover',
                                            alt: en,
                                            withAvatarReplace: !0,
                                            'aria-hidden': !0,
                                        }),
                                        (0, s.jsx)(A.hg, {
                                            isVisible: er || eA,
                                            className: Z().controls,
                                            playControl: (0, s.jsx)(
                                                D.D,
                                                {
                                                    className: (0, a.$)(Z().playButton, Z().control),
                                                    buttonVariant: 'default',
                                                    withHover: !1,
                                                    iconSize: 'xl',
                                                    variant: 'filled',
                                                    onClick: eE,
                                                    isPlaying: eT,
                                                    disabled: !i.isAvailable,
                                                },
                                                i.getKey('PlayButton'),
                                            ),
                                            likeControl: eb,
                                            menuControl: (0, s.jsx)(
                                                $,
                                                {
                                                    playlist: i,
                                                    onOpenChange: ex,
                                                    open: er,
                                                    onClick: eO,
                                                    className: (0, a.$)(Z().menuButton, Z().control),
                                                    icon: (0, s.jsx)(I.I, { size: 'xxs', variant: 'more' }),
                                                    size: 's',
                                                    'data-test-id': _.Kq.playlist.PLAYLIST_CONTEXT_MENU_BUTTON,
                                                },
                                                i.getKey('PlaylistContextMenu'),
                                            ),
                                            pinControl: eN,
                                            trailerControl: eR,
                                        }),
                                    ],
                                }),
                            }),
                        [ey, F, i, en, er, eA, eE, eT, eb, ex, eO, eN, eR],
                    ),
                    ef = !!i.actualLikesCount && !i.isLikesCountHidden;
                return (0, s.jsxs)(A.MN, {
                    ref: H,
                    'aria-label': en,
                    className: (0, a.$)(Z().root, t),
                    title: (0, s.jsx)(C.HL, {
                        variant: 'div',
                        type: 'entity',
                        size: 's',
                        weight: 'medium',
                        lineClamp: 2,
                        'aria-hidden': !0,
                        'data-test-id': _.Kq.playlist.PLAYLIST_TITLE,
                        children: (0, s.jsx)(j.N, { className: Z().titleLink, href: i.url, tabIndex: -1, onClick: eL, children: i.title }),
                    }),
                    srTitle: (0, s.jsx)(j.N, { className: Z().srTitleLink, href: i.url, onClick: eL, children: i.title }),
                    contentLinesCount: Y,
                    view: eg,
                    description: ek,
                    'data-test-id': _.Kq.playlist.PLAYLIST_ITEM,
                    children: [
                        ef &&
                            (0, s.jsx)(g.x, {
                                ariaLabel: q({ id: 'entity-names.likes-counter' }, { counter: i.actualLikesCount }),
                                likesCount: i.actualLikesCount,
                                isLiked: i.isLiked,
                                handleLikeClick: eo,
                            }),
                        r,
                    ],
                });
            });
        },
        42078: (e, t, i) => {
            'use strict';
            var s;
            (i.d(t, { _: () => s }),
                (function (e) {
                    ((e.ALBUM_ITEM = 'album_item'),
                        (e.ARTIST_ITEM = 'artist_item'),
                        (e.PLAYLIST_ITEM = 'playlist_item'),
                        (e.TRACK_ITEM = 'track_item'),
                        (e.LIKED_PLAYLIST_ITEM = 'liked_playlist_item'),
                        (e.PERSONAL_PLAYLIST_ITEM = 'personal_playlist_item'),
                        (e.WAVE_ITEM = 'wave_item'),
                        (e.WAVE_AGENT_ITEM = 'wave_agent_item'),
                        (e.MIX = 'mix'),
                        (e.MIX_CARD_ITEM = 'mix_card_item'),
                        (e.LIKED_ALBUM_ITEM = 'liked_album_item'),
                        (e.PRESAVED_ALBUM_ITEM = 'presaved_album_item'),
                        (e.CHART_ALBUM_ITEM = 'chart_album_item'),
                        (e.NON_MUSIC_ALBUM_ITEM = 'non_music_album_item'),
                        (e.MENU_ITEM = 'menu_item'),
                        (e.DONATION_ITEM = 'donation_item'),
                        (e.CLIP = 'clip'),
                        (e.CLIP_ITEM = 'clip_item'),
                        (e.CONCERT_ITEM = 'concert_item'),
                        (e.QUERY_TO_VIBE_ITEM = 'q2v_item'));
                })(s || (s = {})));
        },
        43161: (e, t, i) => {
            'use strict';
            i.d(t, { g: () => J });
            var s = i(88800),
                a = i(84961),
                r = i(2058),
                l = i(87999),
                n = i(17392),
                o = i(18593),
                c = i(29993),
                d = i(52300),
                u = i(19934),
                _ = i(96706),
                m = i(53548),
                h = i(79390),
                p = i(29595),
                A = i(74965),
                I = i(72288),
                T = i(66943),
                C = i(7555),
                L = i(73170),
                y = i(29504),
                v = i(59304),
                E = i(81877),
                S = i(85074),
                O = i.n(S);
            let x = (e) => {
                let { coverUri: t, title: i, isDisliked: a, closeToast: l } = e,
                    { formatMessage: n } = (0, r.A)(),
                    o = n(a ? { id: 'notifications-info.artist-unavailable-in-recommendations' } : { id: 'notifications-info.artist-available-in-recommendations' });
                return (0, s.jsx)(v.$, {
                    closeToast: l,
                    message: (0, s.jsxs)('div', {
                        className: O().message,
                        children: [
                            (0, s.jsx)(L.q, { children: (0, s.jsx)('p', { role: 'alert', 'aria-label': o }) }),
                            (0, s.jsx)(C.t, {
                                className: O().cover,
                                radius: 'round',
                                children: (0, s.jsx)(E.B, { className: O().image, src: t, alt: i, size: 100, fit: 'cover', withAvatarReplace: !0 }),
                            }),
                            (0, s.jsx)(y.HL, { className: O().text, variant: 'div', type: 'controls', size: 'm', 'aria-hidden': !0, children: o }),
                        ],
                    }),
                });
            };
            var k = i(64207),
                b = i(77455),
                R = i(48749),
                N = i(22505),
                g = i(5407),
                f = i(64284),
                P = i(98427),
                j = i(57934),
                M = i(84384),
                D = i(9618),
                U = i(95210),
                B = i(47964),
                w = i(46936),
                Y = i(97956),
                z = i(98953),
                F = i(32721),
                H = i(18130),
                K = i(56117),
                V = i(93091),
                X = i(27817),
                G = i(74064),
                W = i(15425),
                q = i(81066),
                $ = i(64546);
            let J = (0, a.PA)((e) => {
                var t, i, a;
                let { artist: C, onOpenChange: L, open: y, ...v } = e,
                    { shouldShowBuySubscriptionModal: E, showBuySubscriptionModal: S } = (0, D.q)(),
                    {
                        settings: { isMobile: O },
                        modals: { artistAboutModal: J },
                        trailer: Z,
                        user: Q,
                        experiments: ee,
                    } = (0, I.g)(),
                    et = (0, b.A)(C),
                    ei = (0, k.K)(C),
                    es = ((e) => {
                        let { user: t } = (0, I.g)(),
                            { notify: i } = (0, A.l)(),
                            [a, l] = (0, m.useState)(!1),
                            { formatMessage: n } = (0, r.A)();
                        return (0, c.c)(async () => {
                            if (!e) return;
                            if (!t.isAuthorized)
                                return void i((0, s.jsx)(T.h, { error: n({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: p.u.ERROR });
                            if (a) return;
                            let r = { ...(0, _.HO)(e), isDisliked: !e.isDisliked };
                            l(!0);
                            let o = await e.toggleDislike();
                            (l(!1),
                                o === h.f.OK
                                    ? i((0, s.jsx)(x, { coverUri: r.coverUri, title: r.name, isDisliked: r.isDisliked }), { containerId: p.u.INFO })
                                    : i((0, s.jsx)(T.h, { error: n({ id: 'error-messages.error-during-action' }) }), { containerId: p.u.ERROR }));
                        });
                    })(C),
                    ea = (0, j.F)(),
                    er = ''.concat(f.U.ARTIST, '-').concat(null == C ? void 0 : C.id),
                    { formatMessage: el } = (0, r.A)(),
                    { utmLink: en } = (0, M.f)({ blockId: f.U.ARTIST, contextType: o.K.Artist, contextId: null == C ? void 0 : C.id }),
                    { shareLink: eo, pathname: ec } = (0, H.b)('/artist/:artistId', { params: { artistId: null != (i = null == C ? void 0 : C.id) ? i : '' } }),
                    ed = (0, R.A)({ entityVariant: w.D.ARTIST, urlParams: { id: null == C ? void 0 : C.id } }),
                    { isPlaying: eu, togglePlay: e_ } = (0, B.B)({
                        seeds: null != (a = null == C ? void 0 : C.seeds) ? a : [],
                        pageIdForFrom: P.b.RADIO,
                        blockIdForFrom: er,
                        parentContextId: null == C ? void 0 : C.id,
                    }),
                    em = (0, g.P)(),
                    eh = el((null == C ? void 0 : C.isComposer) ? { id: 'artist.about-composer' } : { id: 'artist.about-artist' }),
                    ep = (0, c.c)(() => {
                        if (E && Q.isAuthorized) return void S();
                        eu || e_();
                    }),
                    eA = (0, c.c)(() => {
                        if (!em()) {
                            if (E) return void S();
                            (null == C ? void 0 : C.id) && (Z.setUtmLink(en), Z.openArtistTrailer(C.id), ea(l.DomainObjectType.Artist, C.id));
                        }
                    }),
                    eI = (0, c.c)(() => {
                        J.open(null == C ? void 0 : C.id);
                    });
                (0, U.N)(y);
                let eT = { variant: z.Y.ARTIST, id: null == C ? void 0 : C.id, title: null == C ? void 0 : C.name, path: ec },
                    eC = ee.checkExperiment(Y.z.WebEditorsFeatures, 'on'),
                    eL = null == C || null == (t = C.trailer) ? void 0 : t.isAvailable,
                    ey = ee.checkExperiment(Y.z.WebNextArtistInfo, 'on'),
                    ev = !ee.checkExperiment(Y.z.WebNextProductWithoutRecommendation, 'on');
                return (0, s.jsxs)(u.W1, {
                    isMobile: O,
                    offsetOptions: 10,
                    open: y,
                    onOpenChange: L,
                    ariaLabel: el({ id: 'interface-actions.context-menu' }),
                    containerDataTestId: n.Kq.artist.ARTIST_CONTEXT_MENU,
                    ...v,
                    children: [
                        eC && (0, s.jsx)($.WithOffline, { fallback: (0, s.jsx)(N.d, { entityVariant: w.D.ARTIST, adminUrl: ed }) }),
                        !O && (0, s.jsx)($.WithOffline, { fallback: (0, s.jsx)(X.L, { onClick: et, isPinned: null == C ? void 0 : C.isPinned }) }),
                        (0, s.jsx)($.WithOffline, {
                            fallback: (0, s.jsx)(V.T, {
                                onClick: ei,
                                isLiked: null == C ? void 0 : C.isLiked,
                                disabled: !Q.isAuthorized || !(null == C ? void 0 : C.isAvailable),
                            }),
                        }),
                        eL && (0, s.jsx)($.WithOffline, { fallback: (0, s.jsx)(W.N, { onClick: eA }) }),
                        ev &&
                            (0, s.jsx)($.WithOffline, {
                                fallback: (0, s.jsx)(q.C, { onClick: ep, disabled: !(null == C ? void 0 : C.isAvailable), variant: F.I.ARTIST, onOpenMenuChange: L }),
                            }),
                        (0, s.jsx)(G.H, { disabled: !C, shareLink: eo, entityMeta: eT }),
                        ey &&
                            (0, s.jsx)($.WithOffline, {
                                fallback: (0, s.jsx)(u.Dr, {
                                    onClick: eI,
                                    icon: (0, s.jsx)(d.I, { variant: 'info', size: 'xxs' }),
                                    'data-test-id': n.Kq.artist.ARTIST_CONTEXT_MENU_ABOUT_ARTIST_BUTTON,
                                    children: eh,
                                }),
                            }),
                        (0, s.jsx)($.WithOffline, {
                            fallback: (0, s.jsx)(K.D, { onClick: es, isDisliked: null == C ? void 0 : C.isDisliked, disabled: !(null == C ? void 0 : C.isAvailable) }),
                        }),
                    ],
                });
            });
        },
        47513: (e, t, i) => {
            'use strict';
            i.d(t, { r: () => r });
            var s = i(53548),
                a = i(2058);
            let r = (e) => {
                let { formatMessage: t } = (0, a.A)();
                return (0, s.useMemo)(() => {
                    let i = '';
                    e.isLiked && !e.actualLikesCount
                        ? (i = t({ id: 'entity-names.has-your-like' }))
                        : 'number' == typeof e.actualLikesCount &&
                          (i =
                              e.actualLikesCount > 0
                                  ? t({ id: 'entity-names.likes-counter' }, { counter: e.actualLikesCount })
                                  : t({ id: 'entity-names.likes-counter-empty' }));
                    let s = t({ id: 'entity-names.playlist-name' }, { playlistName: e.title });
                    return ''.concat(s, ' ').concat(i);
                }, [t, e]);
            };
        },
        47902: (e, t, i) => {
            'use strict';
            (i.r(t), i.d(t, { default: () => B }));
            var s = i(88800),
                a = i(58390),
                r = i(84961),
                l = i(53548),
                n = i(87999),
                o = i(76903),
                c = i(37523),
                d = i(65724),
                u = i(2058),
                _ = i(17392),
                m = i(82212),
                h = i(42078),
                p = i(66719),
                A = i(29504),
                I = i(10079),
                T = i(21256),
                C = i(69630),
                L = i(41911),
                y = i(32094),
                v = i(46422),
                E = i(44230),
                S = i(72288),
                O = i(86790),
                x = i(60266),
                k = i(93317),
                b = i(1698),
                R = i(62403),
                N = i.n(R);
            let g = (0, r.PA)((e) => {
                let { blockId: t, blockType: i } = e,
                    { landingBlockEntities: a } = (0, S.g)(),
                    { formatMessage: r } = (0, u.A)(),
                    { contentScrollRef: n, setContentScrollRef: o } = (0, E.g)(),
                    c = (0, v.W)(),
                    R = (0, l.useMemo)(() => {
                        if (a.isLoading) {
                            let e = r({ id: 'loading-messages.content-is-loading' }),
                                t = [m.t.COLLECTION_ARTISTS, m.t.COLLECTION_ARTISTS_AND_TOP, m.t.PERSONAL_ARTISTS, m.t.NEW_STARS_ARTISTS, m.t.EDITORIAL_ARTISTS].includes(
                                    i,
                                ),
                                a = i === m.t.MIXES_GRID;
                            return (0, s.jsx)(b.e, {
                                itemClassName: (0, d.$)({ [N().shimmerWithSubcover]: a }),
                                withSubcover: a,
                                isActive: !0,
                                'aria-label': e,
                                centered: t || a,
                                round: t,
                            });
                        }
                        return a.items.map((e) => {
                            switch (e.type) {
                                case h._.MIX_CARD_ITEM:
                                    return (0, s.jsx)(y.V, { title: e.data.title, weblink: e.data.weblink, covers: e.data.covers }, e.data.id);
                                case h._.ALBUM_ITEM:
                                    return (0, s.jsx)(I.a, { album: e.data, contentLinesCount: 3 }, e.data.id);
                                case h._.CHART_ALBUM_ITEM:
                                case h._.NON_MUSIC_ALBUM_ITEM:
                                    return (0, s.jsx)(I.a, { withChart: !0, withLikesCount: !0, album: e.data, contentLinesCount: 3 }, e.data.id);
                                case h._.ARTIST_ITEM:
                                    return (0, s.jsx)(T.a, { artist: e.data, contentLinesCount: 3 }, e.data.id);
                                case h._.PLAYLIST_ITEM:
                                    return (0, s.jsx)(L.B, { playlist: e.data, contentLinesCount: 3 }, e.data.key);
                                case h._.PERSONAL_PLAYLIST_ITEM:
                                    return (0, s.jsx)(
                                        L.B,
                                        { playlist: e.data.playlist, customDescription: e.data.description, contentLinesCount: 4 },
                                        e.data.playlist.key,
                                    );
                                case h._.LIKED_PLAYLIST_ITEM:
                                    return (0, s.jsx)(L.B, { playlist: e.data, contentLinesCount: 3 }, e.data.key);
                            }
                        });
                    }, [i, a.isLoading, a.items, r]);
                return (
                    t && a.isNeededToLoad && (0, l.use)(a.getData({ blockId: t })),
                    (0, s.jsx)(C.h, {
                        scrollElement: n,
                        outerTitle: a.title,
                        children: (0, s.jsxs)('div', {
                            className: N().root,
                            children: [
                                (0, s.jsx)(k.Y, {
                                    variant: k.V.TEXT,
                                    withForwardControl: !1,
                                    withBackwardControl: c.canBack,
                                    children: (0, s.jsx)(A.DZ, {
                                        id: 'block-entities-header',
                                        variant: 'h1',
                                        weight: 'bold',
                                        size: 'xl',
                                        lineClamp: 1,
                                        children: a.title,
                                    }),
                                }),
                                (0, s.jsx)(p.N, {
                                    ref: o,
                                    className: N().scrollableContent,
                                    containerClassName: N().scrollableContainer,
                                    'data-test-id': _.e8.landing.BLOCK_ENTITY_PAGE,
                                    children: (0, s.jsxs)('div', {
                                        className: N().container,
                                        children: [
                                            (0, s.jsx)('div', { className: N().content, 'aria-labelledby': 'block-entities-header', tabIndex: 0, children: R }),
                                            (0, s.jsx)(x.A, { children: (0, s.jsx)(O.w, { className: N().footer }) }),
                                        ],
                                    }),
                                }),
                            ],
                        }),
                    })
                );
            });
            var f = i(86535),
                P = i(98427),
                j = i(37670),
                M = i(74773);
            let D = {
                    'new-releases': m.t.NEW_RELEASES,
                    'editorial-new-releases': m.t.EDITORIAL_NEW_RELEASES,
                    'personal-artists': m.t.PERSONAL_ARTISTS,
                    'new-stars-artists': m.t.NEW_STARS_ARTISTS,
                    'editorial-artists': m.t.EDITORIAL_ARTISTS,
                    'new-playlists': m.t.NEW_PLAYLISTS,
                    'editorial-compilation': m.t.EDITORIAL_COMPILATION,
                    'non-music-editorial-compilation': m.t.EDITORIAL_COMPILATION,
                    'chart-albums': m.t.CHART_ALBUMS,
                    'mixes-grid': m.t.MIXES_GRID,
                    'mixes-music': m.t.MIXES_MUSIC,
                },
                U = (0, r.PA)((e) => {
                    let { blockType: t, blockId: i } = e,
                        { landingBlockEntities: r } = (0, S.g)();
                    ((0, l.useEffect)(
                        () => () => {
                            r.reset();
                        },
                        [r, t, i],
                    ),
                        (0, j.J)(r.loadingState === M.G.RESOLVE));
                    let d = D[t];
                    return (
                        (r.isNotFound || !d) && (0, a.notFound)(),
                        (0, s.jsx)(o.a, {
                            pageId: n.AppScreen.ObjectsGridScreen,
                            pageIdForFrom: P.b.ENTITIES,
                            children: (0, s.jsx)(c.F, {
                                blockId: ''.concat(f.h.DISCOVERY_BLOCK, '-').concat(i),
                                blockIdForFrom: ''.concat(f.h.DISCOVERY_BLOCK, '-').concat(i),
                                blockPosX: 1,
                                blockPosY: 1,
                                blockType: d,
                                objectsCount: r.items.length,
                                children: (0, s.jsx)(g, { blockType: d, blockId: i }),
                            }),
                        })
                    );
                }),
                B = () => {
                    let e = (0, a.useSearchParams)(),
                        t = e.get('blockType'),
                        i = e.get('blockId');
                    return ((t && i) || (0, a.notFound)(), (0, s.jsx)(U, { blockType: t, blockId: i }));
                };
        },
        54243: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => n });
            var s = i(88800),
                a = i(4370),
                r = i(15077),
                l = i(42729);
            let n = (e) => {
                let { artist: t, closeToast: i } = e;
                return (0, s.jsx)(l.O, {
                    closeToast: i,
                    entityVariant: r.c.ARTIST,
                    entityUrl: t.url,
                    collectionUrl: a.Z.collectionArtists.href,
                    coverUri: t.coverUri,
                    entityTitle: t.name,
                    isLiked: t.isLiked,
                });
            };
        },
        56117: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => d });
            var s = i(88800),
                a = i(84961),
                r = i(88969),
                l = i(17392),
                n = i(52300),
                o = i(19934),
                c = i(72288);
            let d = (0, a.PA)((e) => {
                let { isDisliked: t, onClick: i, disabled: a, className: d } = e,
                    { user: u } = (0, c.g)();
                return (0, s.jsx)(o.Dr, {
                    onClick: i,
                    className: d,
                    icon: (0, s.jsx)(n.I, { variant: t ? 'disliked' : 'dislike', size: 'xxs' }),
                    role: 'menuitemcheckbox',
                    'aria-checked': t,
                    disabled: a || !u.isAuthorized,
                    'data-test-id': l.S7.CONTEXT_MENU_DISLIKE_BUTTON,
                    children: (0, s.jsx)(r.A, { id: 'interface-actions.do-not-like' }),
                });
            });
        },
        60266: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => l });
            var s = i(88800);
            i(30282);
            var a = i(11006),
                r = i.n(a);
            let l = (e) => {
                let { children: t } = e;
                return (0, s.jsx)('footer', { className: r().empty });
            };
        },
        62293: (e, t, i) => {
            'use strict';
            i.d(t, { v: () => a });
            var s = i(97956);
            let a = (e) => {
                let { checkExperiment: t, getDisclaimerContent: i, getExplicitContent: a, userRegion: r } = e;
                return 'ru' === r && t(s.z.WebNextFooterDisclaimer, 'on') ? i() : a();
            };
        },
        62403: (e) => {
            e.exports = {
                root: 'BlockEntities_root__sHn14',
                scrollableContent: 'BlockEntities_scrollableContent__4A0tK',
                scrollableContainer: 'BlockEntities_scrollableContainer__KXyas',
                container: 'BlockEntities_container__1XiOc',
                content: 'BlockEntities_content__bfoTn',
                shimmerWithSubcover: 'BlockEntities_shimmerWithSubcover__dYd6P',
                footer: 'BlockEntities_footer__eEuix',
            };
        },
        62837: (e, t, i) => {
            'use strict';
            i.d(t, { AS: () => _, Yw: () => s, JU: () => a, DQ: () => p, Ve: () => A });
            var s,
                a,
                r = i(43297),
                l = (function () {
                    function e(e) {
                        ((this.observableValue = (0, r.vP)(e)), (this.prevValueByListener = new Map()));
                    }
                    return (
                        Object.defineProperty(e.prototype, 'value', {
                            get: function () {
                                return this.observableValue.value;
                            },
                            set: function (e) {
                                this.observableValue.value = e;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (e.prototype.onChange = function (e, t) {
                            var i = this;
                            void 0 === t && (t = { skipFirstChange: !1 });
                            var s = !0;
                            return (
                                this.prevValueByListener.has(e) || this.prevValueByListener.set(e, void 0),
                                this.observableValue.subscribe(function (a) {
                                    if (a !== i.prevValueByListener.get(e)) {
                                        if (t.skipFirstChange && s) {
                                            s = !1;
                                            return;
                                        }
                                        (i.prevValueByListener.set(e, a), e(a));
                                    }
                                })
                            );
                        }),
                        e
                    );
                })();
            !(function () {
                function e(e) {
                    ((this.observableValue = (0, r.EW)(e)), (this.prevValueByListener = new Map()));
                }
                (Object.defineProperty(e.prototype, 'value', {
                    get: function () {
                        return this.observableValue.value;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                    (e.prototype.onChange = function (e, t) {
                        var i = this;
                        void 0 === t && (t = { skipFirstChange: !1 });
                        var s = !0;
                        return (
                            this.prevValueByListener.has(e) || this.prevValueByListener.set(e, void 0),
                            this.observableValue.subscribe(function (a) {
                                if (a !== i.prevValueByListener.get(e)) {
                                    if (t.skipFirstChange && s) {
                                        s = !1;
                                        return;
                                    }
                                    (i.prevValueByListener.set(e, a), e(a));
                                }
                            })
                        );
                    }));
            })();
            var n = i(14965);
            class o extends n.t {
                name = 'DisclaimerDictionaryLoadError';
                constructor(e) {
                    (super('Failed to load disclaimer dictionary', { code: 'E_DISCLAIMER_DICTIONARY_LOAD', cause: e, data: { valueType: typeof e } }),
                        Object.setPrototypeOf(this, o.prototype));
                }
            }
            class c extends n.t {
                name = 'DisclaimerNotFoundError';
                disclaimerId;
                retryAttempted;
                constructor(e, t) {
                    (super(`Disclaimer with id "${e}" not found${t ? ' after retry' : ''}`, {
                        code: 'E_DISCLAIMER_NOT_FOUND',
                        data: { disclaimerId: e, retryAttempted: t },
                    }),
                        (this.disclaimerId = e),
                        (this.retryAttempted = t),
                        Object.setPrototypeOf(this, c.prototype));
                }
            }
            !(function (t) {
                // for PulseSync: BEGIN substituted-track enum extension
                ((t.MODAL = 'modal'),
                    (t.FOREIGN_AGENT = 'foreignAgent'),
                    (t.INFORMATIONAL = 'informational'),
                    (t.AGE_18 = 'age18'),
                    (t.EXPLICIT = 'explicit'),
                    (t.DESCRIPTION_TEXT = 'descriptionText'),
                    (t.AGE_12_ICON = 'age12Icon'),
                    (t.AGE_16_ICON = 'age16Icon'),
                    (t.AGE_18_ICON = 'age18Icon'),
                    (t.EXPLICIT_ICON = 'explicitIcon'),
                    ((t.EXCLAMATION_ICON = 'exclamationIcon'), (t.SUBSTITUTED_ICON = 'substitutedIcon')));
                // for PulseSync: END substituted-track enum extension
            })(s || (s = {}));
            let d = (e) => {
                    let t = [];
                    for (let i of e) {
                        let [e, s] = i.split(':');
                        e && s && t.push({ type: e, id: s });
                    }
                    return t;
                },
                u = (e, t) => d(e).filter((e) => e.type === t);
            class _ {
                items;
                isLoading;
                error;
                dataSource;
                itemsObservable;
                isLoadingObservable;
                errorObservable;
                loadingPromise;
                isDestroyed;
                constructor(e) {
                    ((this.dataSource = e.dataSource),
                        (this.itemsObservable = new l(null)),
                        (this.isLoadingObservable = new l(!1)),
                        (this.errorObservable = new l(null)),
                        (this.loadingPromise = null),
                        (this.isDestroyed = !1),
                        (this.items = this.itemsObservable),
                        (this.isLoading = this.isLoadingObservable),
                        (this.error = this.errorObservable));
                }
                async load() {
                    if (this.isDestroyed) return;
                    if (this.loadingPromise) return void (await this.loadingPromise);
                    ((this.isLoadingObservable.value = !0), (this.errorObservable.value = null));
                    let e = this.dataSource
                        .loadAll()
                        .then((e) => {
                            this.isDestroyed || ((this.itemsObservable.value = e), (this.isLoadingObservable.value = !1));
                        })
                        .catch((e) => {
                            let t = e instanceof Error ? e : new o(e);
                            throw (!1 === this.isDestroyed && ((this.errorObservable.value = t), (this.isLoadingObservable.value = !1)), t);
                        })
                        .finally(() => {
                            this.loadingPromise = null;
                        });
                    ((this.loadingPromise = e), await e);
                }
                async getById(e) {
                    let t = this.findItemById(e);
                    return t || (await this.load(), this.findItemById(e));
                }
                async getByIdOrThrow(e) {
                    let t = await this.getById(e);
                    if (void 0 !== t) return t;
                    throw new c(e, !0);
                }
                async resolveByType(e, t) {
                    let i = u(e, t);
                    return (await Promise.all(i.map(async (e) => await this.getById(e.id)))).filter((e) => void 0 !== e);
                }
                async resolveAll(e) {
                    let t = d(e),
                        i = await Promise.all(
                            t.map(async (e) => {
                                let t = await this.getById(e.id);
                                return void 0 === t ? null : { disclaimerItem: t, disclaimerType: e.type };
                            }),
                        ),
                        s = {};
                    for (let e of i)
                        if (e) {
                            let t = s[e.disclaimerType] ?? [];
                            (t.push(e.disclaimerItem), (s[e.disclaimerType] = t));
                        }
                    return s;
                }
                destroy() {
                    ((this.isDestroyed = !0),
                        (this.loadingPromise = null),
                        (this.itemsObservable.value = null),
                        (this.isLoadingObservable.value = !1),
                        (this.errorObservable.value = null));
                }
                findItemById(e) {
                    let t = this.itemsObservable.value;
                    if (null !== t) return t.find((t) => t.id === e);
                }
            }
            !(function (t) {
                // for PulseSync: BEGIN substituted-track enum extension
                ((t.E = 'e'), (t.AGE_12 = '12+'), (t.AGE_16 = '16+'), (t.AGE_18 = '18+'), ((t.EXCLAMATION = '!'), (t.SUBSTITUTED = 'substituted')));
                // for PulseSync: END substituted-track enum extension
            })(a || (a = {}));
            let m = new Map([
                    [s.EXPLICIT_ICON, a.E],
                    [s.AGE_18_ICON, a.AGE_18],
                    [s.AGE_16_ICON, a.AGE_16],
                    [s.AGE_12_ICON, a.AGE_12],
                    [s.EXCLAMATION_ICON, a.EXCLAMATION],
                    // for PulseSync: BEGIN map the substituted-track icon to its label
                    [s.SUBSTITUTED_ICON, a.SUBSTITUTED],
                    // for PulseSync: END map the substituted-track icon to its label
                ]),
                h = [s.EXPLICIT_ICON, s.AGE_18_ICON, s.AGE_16_ICON, s.AGE_12_ICON, s.SUBSTITUTED_ICON, s.EXCLAMATION_ICON],
                p = (e) => {
                    let t = ((e, t) => {
                        for (let i of t) {
                            let t = u(e, i)[0];
                            if (t) return t;
                        }
                        return null;
                    })(e, h);
                    if (null === t) return null;
                    let i = m.get(t.type);
                    return void 0 !== i ? i : null;
                },
                A = (e, t) => u(e, t).length > 0;
        },
        64207: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => m });
            var s = i(88800),
                a = i(96706),
                r = i(53548),
                l = i(2058),
                n = i(79390),
                o = i(29595),
                c = i(74965),
                d = i(72288),
                u = i(66943),
                _ = i(54243);
            let m = (e) => {
                let { user: t } = (0, d.g)(),
                    { notify: i } = (0, c.l)(),
                    [m, h] = (0, r.useState)(!1),
                    { formatMessage: p } = (0, l.A)();
                return (0, r.useCallback)(async () => {
                    if (!e) return;
                    if (!t.isAuthorized) return void i((0, s.jsx)(u.h, { error: p({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                    if (m) return;
                    let r = { ...(0, a.HO)(e), isLiked: !e.isLiked };
                    h(!0);
                    let l = await e.toggleLike();
                    (h(!1),
                        l === n.f.OK
                            ? i((0, s.jsx)(_.T, { artist: r }), { containerId: o.u.INFO })
                            : i((0, s.jsx)(u.h, { error: p({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR }));
                }, [e, t.isAuthorized, m, p, i]);
            };
        },
        64247: (e, t, i) => {
            'use strict';
            i.d(t, { l: () => l });
            var s = i(88800),
                a = i(15077),
                r = i(33719);
            let l = (e) => {
                let { artist: t, closeToast: i } = e;
                return (0, s.jsx)(r.k, {
                    closeToast: i,
                    entityVariant: a.c.ARTIST,
                    coverUri: t.coverUri,
                    entityUrl: t.url,
                    entityTitle: t.name,
                    isPinned: t.isPinned,
                    radius: 'round',
                });
            };
        },
        70621: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => o });
            var s = i(53548),
                a = i(63582),
                r = i(245),
                l = i(22681),
                n = i(56374);
            let o = (0, a.n)({ event: 'LandingBlock.ActionPerformed', kind: 'hook', requiredScopes: ['screen', 'block', 'object'] }, () => {
                let e = (0, r.N)(),
                    t = (0, l.w)(),
                    i = (0, s.useMemo)(() => (t ? e.createBlockReporter(t.snapshot) : null), [e, t]);
                return (0, n.c)((e) => {
                    t?.object && i && i.actionPerformed({ ...e, viewUuid: (t.object.activeViewSession ?? t.object.viewSession).start() });
                });
            });
        },
        76903: (e, t, i) => {
            'use strict';
            i.d(t, { a: () => u });
            var s = i(88800),
                a = i(53548),
                r = i(53534),
                l = i(63582),
                n = i(245);
            let o = new WeakMap();
            class c {
                screenViewUuid;
                queue;
                consumers = new Set();
                loadedTabs = new Set();
                opened = !1;
                pendingOpen = !1;
                closed = !1;
                pendingClose = null;
                constructor(e, t) {
                    this.screenViewUuid = e;
                    let i =
                        o.get(t) ??
                        (() => {
                            let e = [],
                                t = !1,
                                i = () => {
                                    for (; e.length > 0;) e.shift()?.();
                                },
                                s = () => {
                                    t ||
                                        ((t = !0),
                                        queueMicrotask(() => {
                                            try {
                                                i();
                                            } finally {
                                                ((t = !1), e.length > 0 && s());
                                            }
                                        }));
                                };
                            return {
                                open: (e) => {
                                    (i(), e());
                                },
                                defer: (t) => {
                                    (e.push(t), s());
                                },
                            };
                        })();
                    (o.set(t, i), (this.queue = i));
                }
                open(e, t) {
                    ((this.pendingClose = null),
                        this.opened ||
                            this.pendingOpen ||
                            ((this.pendingOpen = !0),
                            this.queue.open(() => {
                                try {
                                    (t(), (this.opened = !0));
                                } finally {
                                    this.pendingOpen = !1;
                                }
                            })),
                        this.consumers.add(e));
                }
                close(e, t) {
                    (this.consumers.delete(e), this.closed || this.pendingClose?.scheduled || ((this.pendingClose = { send: t, scheduled: !1 }), this.scheduleClose()));
                }
                release(e) {
                    (this.consumers.delete(e), this.scheduleClose());
                }
                loadTab(e, t) {
                    this.loadedTabs.has(e) || (t(), this.loadedTabs.add(e));
                }
                scheduleClose() {
                    let e = this.pendingClose;
                    !e ||
                        e.scheduled ||
                        this.consumers.size > 0 ||
                        ((e.scheduled = !0),
                        this.queue.defer(() => {
                            this.pendingClose !== e || this.consumers.size > 0 || ((this.pendingClose = null), e.send(), (this.closed = !0));
                        }));
                }
            }
            var d = i(87999);
            let u = (0, l.B)(
                { kind: 'provider', requiredProps: ['pageId'], pendingProps: ['mainObjectType', 'mainObjectId'], scope: 'screen' },
                ({ children: e, ...t }) => {
                    let i = (0, n.N)(),
                        l = ((e) =>
                            (!Object.hasOwn(e, 'mainObjectType') || void 0 !== e.mainObjectType) &&
                            ('string' == typeof e.mainObjectId ||
                                (!Object.hasOwn(e, 'mainObjectId') && (!Object.hasOwn(e, 'mainObjectType') || e.mainObjectType === d.DomainObjectType.NonApplicable))))(
                            t,
                        ),
                        [o, u] = (0, a.useState)(() => {
                            let e = new c(i.createScreenSession().screenViewUuid, i);
                            return { client: i, input: t, isReady: l, scope: l ? i.createScreenScope(t, e) : null, session: e };
                        });
                    if (
                        o.client !== i ||
                        o.input.pageId !== t.pageId ||
                        o.input.skeletonId !== t.skeletonId ||
                        o.input.mainObjectType !== t.mainObjectType ||
                        o.input.mainObjectId !== t.mainObjectId
                    ) {
                        let a = new c(i.createScreenSession().screenViewUuid, i),
                            n = { client: i, input: t, isReady: l, scope: l ? i.createScreenScope(t, a) : null, session: a };
                        return (u(n), (0, s.jsx)(r.k, { value: n, children: e }));
                    }
                    if (
                        o.isReady !== l ||
                        o.input.displayReasonId !== t.displayReasonId ||
                        o.input.pageIdForFrom !== t.pageIdForFrom ||
                        o.input.pagePlacement !== t.pagePlacement ||
                        o.input.pageStyle !== t.pageStyle
                    ) {
                        let a = { ...o, input: t, isReady: l, scope: l ? i.createScreenScope(t, o.session) : null };
                        return (u(a), (0, s.jsx)(r.k, { value: a, children: e }));
                    }
                    return (0, s.jsx)(r.k, { value: o, children: e });
                },
            );
        },
        77455: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => _ });
            var s = i(88800),
                a = i(96706),
                r = i(53548),
                l = i(2058),
                n = i(29595),
                o = i(74965),
                c = i(72288),
                d = i(66943),
                u = i(64247);
            let _ = (e) => {
                let { user: t } = (0, c.g)(),
                    { notify: i } = (0, o.l)(),
                    { formatMessage: _ } = (0, l.A)(),
                    [m, h] = (0, r.useState)(!1);
                return (0, r.useCallback)(async () => {
                    if (!e) return;
                    if (!t.isAuthorized) return void i((0, s.jsx)(d.h, { error: _({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: n.u.ERROR });
                    if (m) return;
                    let r = { ...(0, a.HO)(e), isPinned: !e.isPinned };
                    h(!0);
                    let l = await e.togglePin();
                    (h(!1),
                        l
                            ? i((0, s.jsx)(u.l, { artist: r }), { containerId: n.u.INFO })
                            : i((0, s.jsx)(d.h, { error: _({ id: 'error-messages.error-during-action' }) }), { containerId: n.u.ERROR }));
                }, [e, t.isAuthorized, m, _, i]);
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
        85257: (e, t, i) => {
            Promise.resolve().then(i.bind(i, 47902));
        },
        85902: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => m });
            var s = i(88800),
                a = i(96706),
                r = i(53548),
                l = i(2058),
                n = i(79390),
                o = i(29595),
                c = i(74965),
                d = i(72288),
                u = i(66943),
                _ = i(30832);
            let m = (e) => {
                let { user: t } = (0, d.g)(),
                    { notify: i } = (0, c.l)(),
                    [m, h] = (0, r.useState)(!1),
                    { formatMessage: p } = (0, l.A)();
                return (0, r.useCallback)(async () => {
                    if (!t.isAuthorized) return void i((0, s.jsx)(u.h, { error: p({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                    if (m) return;
                    let r = { ...(0, a.HO)(e), url: e.url, isLiked: !e.isLiked };
                    h(!0);
                    let l = await e.toggleLike();
                    (h(!1),
                        l === n.f.OK
                            ? i((0, s.jsx)(_.T, { playlist: r }), { containerId: o.u.INFO })
                            : i((0, s.jsx)(u.h, { error: p({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR }));
                }, [t.isAuthorized, m, e, p, i]);
            };
        },
        86535: (e, t, i) => {
            'use strict';
            i.d(t, { h: () => a });
            var s = i(64284),
                a = (function (e) {
                    return (
                        (e[(e.RUP_MAIN_RADIO = ''.concat(s.U.RUP, '_').concat(s.U.MAIN, '-').concat(s.U.RADIO))] = 'RUP_MAIN_RADIO'),
                        (e[(e.DISCOGRAPHY_CAROUSEL = ''.concat(s.U.DISCOGRAPHY, '_').concat(s.U.CAROUSEL))] = 'DISCOGRAPHY_CAROUSEL'),
                        (e[(e.ALBUMS_CAROUSEL = ''.concat(s.U.ALBUMS, '_').concat(s.U.CAROUSEL))] = 'ALBUMS_CAROUSEL'),
                        (e[(e.COMPILATIONS_CAROUSEL = ''.concat(s.U.COMPILATIONS, '_').concat(s.U.CAROUSEL))] = 'COMPILATIONS_CAROUSEL'),
                        (e[(e.PLAYLISTS_CAROUSEL = ''.concat(s.U.PLAYLISTS, '_').concat(s.U.CAROUSEL))] = 'PLAYLISTS_CAROUSEL'),
                        (e[(e.ARTISTS_CAROUSEL = ''.concat(s.U.ARTISTS, '_').concat(s.U.CAROUSEL))] = 'ARTISTS_CAROUSEL'),
                        (e[(e.CLIPS_CAROUSEL = ''.concat(s.U.CLIPS, '_').concat(s.U.CAROUSEL))] = 'CLIPS_CAROUSEL'),
                        (e[(e.DISCOVERY_BLOCK = ''.concat(s.U.DISCOVERY, '_').concat(s.U.BLOCK))] = 'DISCOVERY_BLOCK'),
                        (e[(e.PLAYLISTS_SIMILAR = ''.concat(s.U.PLAYLISTS, '_').concat(s.U.SIMILAR))] = 'PLAYLISTS_SIMILAR'),
                        (e[(e.SEARCH_HISTORY = ''.concat(s.U.SEARCH, '_').concat(s.U.HISTORY))] = 'SEARCH_HISTORY'),
                        (e[(e.PLAYLISTS_SIMILAR_PLAYLIST = ''.concat(s.U.PLAYLISTS, '_').concat(s.U.SIMILAR, '_').concat(s.U.PLAYLIST))] = 'PLAYLISTS_SIMILAR_PLAYLIST'),
                        (e[(e.SEARCH_BEST_RESULTS = ''.concat(s.U.SEARCH, '_').concat(s.U.BEST_RESULTS))] = 'SEARCH_BEST_RESULTS'),
                        (e[(e.SEARCH_OPEN_BEST_RESULTS = ''.concat(s.U.SEARCH, '_').concat(s.U.OPEN_BEST_RESULTS))] = 'SEARCH_OPEN_BEST_RESULTS'),
                        e
                    );
                })({});
        },
        86790: (e, t, i) => {
            'use strict';
            i.d(t, { w: () => O });
            var s = i(88800),
                a = i(65724),
                r = i(84961),
                l = i(2058),
                n = i(30282),
                o = i(94144),
                c = (function (e) {
                    return (
                        (e.YANDEX = 'YANDEX'),
                        (e.YANDEX_PROJECTS = 'YANDEX_PROJECTS'),
                        (e.COPYRIGHT_HOLDER = 'COPYRIGHT_HOLDER'),
                        (e.AGREEMENT = 'AGREEMENT'),
                        (e.RECOMMENDATION_RULES = 'RECOMMENDATION_RULES'),
                        (e.HELP = 'HELP'),
                        (e.PRIVACY_POLICY = 'PRIVACY_POLICY'),
                        e
                    );
                })({});
            let d = (e, t, i) => {
                    switch (e) {
                        case c.YANDEX:
                            if ('ru' === t) return 'https://ya.ru';
                            return;
                        case c.YANDEX_PROJECTS:
                            return 'https://yandex.'.concat(t, '/all?lang=').concat(i);
                        case c.COPYRIGHT_HOLDER:
                            return 'https://yandex.'.concat(t, '/support/music/performers-and-copyright-holders/copyright.html?lang=').concat(i);
                        case c.AGREEMENT:
                            return 'https://yandex.ru/legal/music_termsofuse?lang='.concat(i);
                        case c.RECOMMENDATION_RULES:
                            return 'https://music.yandex.ru/legal/recommendations/ru/#music';
                        case c.HELP:
                            return 'https://yandex.'.concat(t, '/support/music/index.html?lang=').concat(i);
                        case c.PRIVACY_POLICY:
                            return 'https://yandex.'.concat(t, '/legal/confidential/').concat(i);
                    }
                },
                u = (e) => {
                    let { formatMessage: t, language: i, tld: s, year: a } = e;
                    return {
                        year: a,
                        yandexMusic: { id: c.YANDEX, title: t({ id: 'footer.yandex-music' }), url: d(c.YANDEX, s, i) },
                        yandexProjects: { id: c.YANDEX_PROJECTS, title: t({ id: 'footer.yandex-project' }), url: d(c.YANDEX_PROJECTS, s, i) },
                    };
                };
            var _ = i(62293),
                m = i(99839);
            let h = (e) => e(new Date(), (0, m.m)());
            var p = i(51611),
                A = i(72288),
                I = i(11006),
                T = i.n(I),
                C = i(17392),
                L = i(29504),
                y = i(91292);
            let v = (e) => {
                    let { className: t, data: i } = e;
                    return (0, s.jsxs)('div', {
                        className: (0, a.$)(T().copyrights, t),
                        'data-test-id': C.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, s.jsxs)(L.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: T().text,
                                children: [
                                    '\xa9 ',
                                    i.year,
                                    ' \xa0',
                                    (0, s.jsx)(y.N, {
                                        target: '_blank',
                                        href: i.yandexMusic.url,
                                        className: (0, a.$)(T().copyrightLink, T().yandexMusicLink),
                                        'data-test-id': C.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: i.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, s.jsx)(L.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, s.jsx)(y.N, {
                                target: '_blank',
                                href: i.yandexProjects.url,
                                className: T().copyrightLink,
                                'data-test-id': C.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: i.yandexProjects.title,
                            }),
                        ],
                    });
                },
                E = (e) => {
                    let { disclaimer: t, links: i } = e;
                    return (0, s.jsxs)('div', {
                        className: T().links,
                        children: [
                            (0, s.jsx)('ol', {
                                className: T().list,
                                'data-test-id': C.S7.FOOTER_LINKS_LIST,
                                children: i.map((e) => {
                                    let { id: t, title: i, url: a } = e;
                                    return (0, s.jsx)(
                                        'li',
                                        {
                                            className: T().item,
                                            children: (0, s.jsx)(y.N, { target: '_blank', href: a, className: T().link, 'data-test-id': C.S7.FOOTER_LINK, children: i }),
                                        },
                                        t,
                                    );
                                }),
                            }),
                            (0, s.jsx)(L.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: T().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: t },
                                'data-test-id': C.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                S = (e) => {
                    let { className: t, data: i } = e;
                    return (0, s.jsxs)('footer', {
                        className: (0, a.$)(T().root, T().important, t),
                        'data-test-id': C.S7.FOOTER,
                        children: [(0, s.jsx)(E, { links: i.links, disclaimer: i.disclaimer }), (0, s.jsx)(v, { data: i.copyrights })],
                    });
                };
            (0, r.PA)((e) => {
                let { className: t } = e,
                    { location: i } = (0, A.g)(),
                    { formatDate: a, formatMessage: r } = (0, l.A)(),
                    { language: n } = (0, p.h)(),
                    o = u({ formatMessage: r, language: n, tld: i.tld, year: h(a) });
                return (0, s.jsx)(v, { className: t, data: o });
            });
            let O = (0, r.PA)((e) => {
                var t;
                let { className: i } = e,
                    { experiments: r, location: m, user: I } = (0, A.g)(),
                    { formatDate: C, formatMessage: L } = (0, l.A)(),
                    { isEnabled: y } = null != (t = (0, o.P)()) ? t : {},
                    { language: v } = (0, p.h)(),
                    E = ((e) => {
                        let { checkExperiment: t, formatMessage: i, isWebApplication: s, language: a, tld: r, userRegion: l, year: n } = e;
                        return {
                            links: ((e) => {
                                let { formatMessage: t, isWebApplication: i, tld: s, language: a, userRegion: r } = e,
                                    l = { id: c.COPYRIGHT_HOLDER, title: t({ id: 'footer.links-copyright-holders' }), url: d(c.COPYRIGHT_HOLDER, s, a) },
                                    n = { id: c.PRIVACY_POLICY, title: t({ id: 'footer.links-privacy-policy' }), url: d(c.PRIVACY_POLICY, s, a) },
                                    o = { id: c.AGREEMENT, title: t({ id: 'footer.links-terms' }), url: d(c.AGREEMENT, s, a) },
                                    u = { id: c.RECOMMENDATION_RULES, title: t({ id: 'footer.links-recommendation-rules' }), url: d(c.RECOMMENDATION_RULES, s, a) },
                                    _ = { id: c.HELP, title: t({ id: 'footer.links-help' }), url: d(c.HELP, s, a) },
                                    m = [l, o, u];
                                return (i && 'ru' === r && m.push(n), m.push(_), m);
                            })({ formatMessage: i, isWebApplication: s, language: a, tld: r, userRegion: l }),
                            disclaimer: (0, _.v)({
                                checkExperiment: t,
                                getDisclaimerContent: () => i({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => i({ id: 'footer.explicit-content' }),
                                userRegion: l,
                            }),
                            copyrights: u({ formatMessage: i, language: a, tld: r, year: n }),
                        };
                    })({
                        checkExperiment: (e, t) => r.checkExperiment(e, t),
                        formatMessage: L,
                        isWebApplication: n.$3,
                        tld: m.tld,
                        language: v,
                        userRegion: I.account.data.userSessionRegionIso,
                        year: h(C),
                    });
                return (0, s.jsx)(S, { className: (0, a.$)({ [T().root_withOffsetForDeeplink]: y }, i), data: E });
            });
        },
        91959: (e, t, i) => {
            'use strict';
            i.d(t, { S: () => a });
            var s = i(58217);
            let a = (e) => {
                let { artist: t, callback: i, shouldHistoryBack: a } = e;
                return (0, s.l)({ entity: t, callback: i, modalBehavior: void 0 === a ? void 0 : { shouldHistoryBack: a }, preventDefaultWhenSafe: !0 });
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
        94144: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => a, P: () => r });
            var s = i(53548);
            let a = (0, s.createContext)(null),
                r = () => (0, s.useContext)(a);
        },
        97754: (e) => {
            e.exports = {
                plate: 'MixesGridMixCard_plate__ONH3P',
                root: 'MixesGridMixCard_root__HHE7z',
                subcover: 'MixesGridMixCard_subcover__z5sBj',
                link: 'MixesGridMixCard_link__D3_S6',
                header: 'MixesGridMixCard_header__t24VH',
                title: 'MixesGridMixCard_title__fKTCy',
                cover: 'MixesGridMixCard_cover__Ra3ic',
            };
        },
        99839: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => s });
            let s = () => ({ year: 'numeric' });
        },
    },
    (e) => {
        (e.O(
            0,
            [
                4700, 3248, 5038, 7908, 7065, 1147, 4555, 1191, 7072, 8655, 2691, 9834, 6706, 4771, 8832, 6904, 4495, 2058, 3578, 8628, 4975, 4827, 8283, 1800, 4732,
                9087, 3979, 6719, 1928, 9091, 9124, 900, 9934, 2470, 7670, 4441, 9337, 2088, 79, 763, 2670, 7358,
            ],
            () => e((e.s = 85257)),
        ),
            (_N_E = e.O()));
    },
]);
