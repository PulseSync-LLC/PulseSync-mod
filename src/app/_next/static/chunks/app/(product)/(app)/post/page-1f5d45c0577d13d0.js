(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3069],
    {
        554: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => r });
            let r = (e) => {
                let { uid: t, kind: i } = e;
                return ''.concat(t, ':').concat(i);
            };
        },
        4370: (e, t, i) => {
            'use strict';
            i.d(t, { Z: () => n });
            var r = i(67174);
            let n = {
                main: (0, r.u)('/'),
                chart: (0, r.u)('/chart'),
                chartPodcasts: (0, r.u)('/chart/podcasts'),
                collection: (0, r.u)('/collection'),
                collectionAlbums: (0, r.u)('/collection/albums'),
                collectionArtists: (0, r.u)('/collection/artists'),
                collectionClips: (0, r.u)('/collection/clips'),
                collectionDislikes: (0, r.u)('/collection/dislikes'),
                collectionKids: (0, r.u)('/collection/kids'),
                collectionKidsAlbums: (0, r.u)('/collection/kids/albums'),
                collectionKidsPlaylists: (0, r.u)('/collection/kids/playlists'),
                collectionKidsTracks: (0, r.u)('/collection/kids/tracks'),
                collectionNonMusic: (0, r.u)('/collection/non-music'),
                collectionNonMusicLiked: (0, r.u)('/collection/non-music/liked'),
                collectionVibeRooms: (0, r.u)('/collection/multivibes'),
                collectionPlaylists: (0, r.u)('/collection/playlists'),
                collectionPlaylistsCreated: (0, r.u)('/collection/playlists/created'),
                collectionPlaylistsLiked: (0, r.u)('/collection/playlists/liked'),
                collectionShelf: (0, r.u)('/collection/shelf'),
                collectionShelfLiked: (0, r.u)('/collection/shelf/liked'),
                collectionShelfNewEpisodes: (0, r.u)('/collection/shelf/new-episodes'),
                collectionShelfRecentlyPlayed: (0, r.u)('/collection/shelf/recently-played'),
                concerts: (0, r.u)('/concerts'),
                kids: (0, r.u)('/kids'),
                mixes: (0, r.u)('/mixes'),
                musicHistory: (0, r.u)('/music-history'),
                muzmarket: (0, r.u)('/muzmarket'),
                mymusic: (0, r.u)('/mymusic'),
                mymusicDownloadsTracks: (0, r.u)('/mymusic/downloads/tracks'),
                multivibe: (0, r.u)('/multivibe'),
                nonMusic: (0, r.u)('/non-music'),
                pay: (0, r.u)('/pay'),
                userSlides: (0, r.u)('/slides/user'),
                search: (0, r.u)('/search'),
                searchHistory: (0, r.u)('/search/history'),
                settings: (0, r.u)('/settings'),
                video: (0, r.u)('/video'),
            };
        },
        6215: (e, t, i) => {
            'use strict';
            i.d(t, { E: () => n });
            var r = i(42078);
            let n = (e) => ''.concat(r._.ARTIST_ITEM).concat(e);
        },
        6322: (e, t, i) => {
            'use strict';
            i.d(t, { l: () => l });
            var r = i(88800),
                n = i(15077),
                s = i(33719);
            let l = (e) => {
                let { playlist: t, closeToast: i } = e;
                return (0, r.jsx)(s.k, {
                    closeToast: i,
                    entityVariant: n.c.PLAYLIST,
                    entityUrl: t.url,
                    coverUri: t.coverUri,
                    entityTitle: t.title,
                    isPinned: t.isPinned,
                    radius: 's',
                });
            };
        },
        8413: (e, t, i) => {
            'use strict';
            i.d(t, { a: () => n });
            var r = i(61691);
            let n = (e) => e === r._.PODCAST || e === r._.AUDIOBOOK || e === r._.FAIRY_TALE;
        },
        9184: (e) => {
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
        12906: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => s });
            var r = i(5120),
                n = i(57285);
            let s = (e) => {
                let t = (0, n.n)(e);
                return (0, r.wg)(t);
            };
        },
        16818: (e, t, i) => {
            'use strict';
            i.d(t, { Y: () => o });
            var r = i(53647),
                n = i(4086),
                s = i(41928),
                l = i(65523),
                a = i(57448);
            let o = () => {
                let e = (0, s.N)(),
                    t = e.get(n.oo),
                    i = e.get(n.QG),
                    o = e.get(n.uM),
                    c = e.get(n.ff),
                    u = e.get(n.V4),
                    d = e.get(n.P0),
                    g = (0, a.f)(),
                    m = (0, l.U)(),
                    p = (0, s.N)().get(n.TK),
                    v = e.get(n.ni),
                    y = e.get(n.RD),
                    _ = new r.si(),
                    h = new r.fW();
                return {
                    ...g,
                    acqOffers: o,
                    disclaimerDictionary: c,
                    logger: m,
                    modelActionsLogger: p,
                    localStorage: _,
                    sessionStorage: h,
                    containerStorage: t,
                    authorization: i,
                    config: u,
                    clientSafeConfig: d,
                    landingSdk: v,
                    tagSandbox: y,
                };
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
        18243: (e, t, i) => {
            'use strict';
            i.d(t, { f: () => n });
            var r = i(42078);
            let n = (e) => {
                let { uid: t, kind: i } = e;
                return ''.concat(r._.PLAYLIST_ITEM).concat(t, '_').concat(i);
            };
        },
        20775: (e, t, i) => {
            'use strict';
            i.d(t, { x: () => n });
            var r = i(62837);
            let n = (e, t) => !e && !!(t && (0, r.Ve)(t, r.Yw.MODAL));
        },
        21256: (e, t, i) => {
            'use strict';
            i.d(t, { a: () => F });
            var r = i(88800),
                n = i(65724),
                s = i(84961),
                l = i(53548),
                a = i(2058),
                o = i(87999),
                c = i(62414),
                u = i(80643),
                d = i(33979),
                g = i(17392),
                m = i(18593),
                p = i(29993),
                v = i(79070),
                y = i(29832),
                _ = i(52300),
                h = i(7555),
                b = i(29504),
                f = i(91959),
                T = i(64207),
                k = i(77455),
                A = i(5407),
                x = i(57934),
                P = i(84384),
                I = i(4795),
                C = i(78940),
                S = i(55693),
                L = i(39079),
                K = i(72288),
                O = i(81877),
                j = i(49738),
                E = i(91292),
                N = i(56862),
                R = i(16704),
                w = i(56446),
                M = i(36207),
                D = i(43161),
                U = i(93434),
                B = i.n(U);
            let F = (0, s.PA)((e) => {
                let { artist: t, className: i, children: s, contentLinesCount: U, topTitleElement: F, bottomTitleElement: z } = e,
                    W = (0, c.D)(),
                    {
                        trailer: G,
                        user: H,
                        paywall: { modal: Y },
                    } = (0, K.g)(),
                    { from: V, utmLink: $ } = (0, P.f)({ contextId: t.id, contextType: m.K.Artist }),
                    { formatMessage: q } = (0, a.A)(),
                    [X, Z] = (0, l.useState)(!1),
                    [J, Q] = (0, l.useState)(!1),
                    [ee, et] = (0, l.useState)(!1),
                    { sendLikeSearchFeedback: ei, sendNavigateSearchFeedback: er, sendPlaySearchFeedback: en } = (0, S.z)(),
                    es = (0, u.S)(),
                    el = (0, d.g)(),
                    ea = (0, T.K)(t),
                    eo = (0, k.A)(t),
                    { id: ec, name: eu, coverUri: ed, isLiked: eg } = t,
                    em = (0, C.Z)(t.url),
                    [ep, ev] = (0, l.useState)(!1),
                    ey = (0, x.F)(),
                    e_ = (0, A.P)(),
                    eh = (0, p.c)((e) => {
                        if ((e.stopPropagation(), e_())) return void e.preventDefault();
                        (G.openArtistTrailer(t.id), ey(o.DomainObjectType.Artist, t.id));
                    }),
                    eb = (0, l.useMemo)(() => {
                        let e = q({ id: 'entity-names.artist-name' }, { artistName: eu }),
                            t = eg ? q({ id: 'entity-names.has-your-like' }) : '';
                        return ''.concat(e, ' ').concat(t);
                    }, [eu, eg, q]),
                    { isPlaying: ef, togglePlay: eT } = (0, L.D)({
                        playContextParams: { contextData: { type: m.K.Artist, meta: { id: Number(ec) }, from: V, utmLink: $ }, loadContextMeta: !0 },
                    }),
                    ek = (0, f.S)({ artist: t, callback: em }),
                    eA = (0, f.S)({ artist: t, callback: eT }),
                    ex = (0, p.c)((e) => {
                        (null == er || er(), es({ to: o.AppScreen.ArtistScreen }), ek(e));
                    }),
                    eP = (0, I.N)(),
                    eI = (0, p.c)(() => {
                        if (!e_()) {
                            if (eP) return void Y.open();
                            (X || ef || (Z(!0), null == en || en()), eA(), ef || el());
                        }
                    }),
                    eC = (0, p.c)(() => {
                        (J || eg || (Q(!0), null == ei || ei()), ea());
                    }),
                    eS = (0, p.c)((e) => {
                        (e.preventDefault(), e.stopPropagation());
                    }),
                    eL = (0, p.c)((e) => {
                        (et(e), ev(e));
                    }),
                    eK = (0, l.useMemo)(
                        () =>
                            (0, r.jsx)(
                                D.g,
                                {
                                    artist: t,
                                    onOpenChange: eL,
                                    open: ee,
                                    onClick: eS,
                                    className: (0, n.$)(B().menuButton, B().control),
                                    size: 's',
                                    icon: (0, r.jsx)(_.I, { size: 'xxs', variant: 'more' }),
                                    'data-test-id': g.Kq.artist.ARTIST_CONTEXT_MENU_BUTTON,
                                },
                                t.getKey('ArtistContextMenu'),
                            ),
                        [t, eS, eL, ee],
                    ),
                    eO = (0, l.useMemo)(() => {
                        var e;
                        if (null == t || null == (e = t.trailer) ? void 0 : e.isAvailable)
                            return (0, r.jsx)(
                                M.n,
                                {
                                    children: (0, r.jsx)(w.k, {
                                        className: (0, n.$)(B().trailerButton, B().control),
                                        radius: 'round',
                                        size: 's',
                                        iconSize: 'xxs',
                                        onClick: eh,
                                    }),
                                },
                                t.getKey('ArtistCardTrailerTooltip'),
                            );
                    }, [t, eh]),
                    ej = (0, l.useMemo)(
                        () =>
                            (0, r.jsx)(
                                N.O,
                                { onClick: eo, isPinned: t.isPinned, className: (0, n.$)(B().pinButton, B().control), withRipple: !1 },
                                t.getKey('PinButton'),
                            ),
                        [t, eo],
                    ),
                    eE = (0, v.L)(() => {
                        if (t.isAvailable)
                            return (0, r.jsx)(
                                y.hg,
                                {
                                    isVisible: ee || ep,
                                    className: B().controls,
                                    radius: 'round',
                                    playControl: (0, r.jsx)(
                                        R.D,
                                        {
                                            buttonVariant: 'default',
                                            withHover: !1,
                                            className: (0, n.$)(B().playButton, B().control),
                                            iconSize: 'xl',
                                            variant: 'filled',
                                            onClick: eI,
                                            isPlaying: ef,
                                            disabled: !t.isAvailableForPlaying,
                                        },
                                        t.getKey('PlayButton'),
                                    ),
                                    likeControl: (0, r.jsx)(
                                        j.c,
                                        {
                                            className: (0, n.$)(B().likeButton, B().control),
                                            isLiked: eg,
                                            onClick: eC,
                                            variant: 'default',
                                            size: 's',
                                            iconSize: 'xxs',
                                            disabled: !H.isAuthorized,
                                        },
                                        t.getKey('LikeButton'),
                                    ),
                                    menuControl: eK,
                                    pinControl: ej,
                                    trailerControl: eO,
                                },
                                t.getKey('ArtistCardControls'),
                            );
                    }),
                    eN = (0, l.useMemo)(
                        () =>
                            (0, r.jsx)(h.t, {
                                className: B().cover,
                                radius: 'round',
                                withShadow: !0,
                                'data-test-id': g.Kq.artist.ARTIST_CARD,
                                children: (0, r.jsxs)('div', {
                                    className: B().coverBlock,
                                    onClick: ex,
                                    children: [
                                        (0, r.jsx)(O.B, {
                                            className: B().image,
                                            src: ed,
                                            size: 200,
                                            fit: 'cover',
                                            alt: eb,
                                            withAvatarReplace: !0,
                                            isAvailable: t.isAvailable,
                                            'aria-hidden': !0,
                                        }),
                                        eE,
                                    ],
                                }),
                            }),
                        [ex, ed, eb, t.isAvailable, eE],
                    );
                return (0, r.jsx)(y.MN, {
                    ref: W,
                    className: (0, n.$)(B().root, i),
                    textPosition: 'center',
                    'aria-label': eb,
                    title: (0, r.jsxs)(r.Fragment, {
                        children: [
                            F,
                            (0, r.jsx)(b.HL, {
                                variant: 'div',
                                type: 'entity',
                                size: 's',
                                weight: 'medium',
                                lineClamp: 2,
                                'aria-hidden': !0,
                                children: (0, r.jsx)(E.N, {
                                    className: B().titleLink,
                                    href: t.url,
                                    tabIndex: -1,
                                    'aria-label': eb,
                                    onClick: ex,
                                    'data-test-id': g.Kq.artist.ARTIST_TITLE,
                                    children: eu,
                                }),
                            }),
                            z,
                        ],
                    }),
                    srTitle: (0, r.jsx)(E.N, { className: B().srTitleLink, href: t.url, onClick: ex, children: eb }),
                    contentLinesCount: U,
                    view: eN,
                    'data-test-id': g.Kq.artist.ARTIST_ITEM,
                    children: s,
                });
            });
        },
        23744: (e, t, i) => {
            'use strict';
            i.d(t, { a: () => a });
            var r = i(5120),
                n = i(50633);
            let s = ['Safari', 'MobileSafari'],
                l = ['iOS', 'MacOS'],
                a = r.gK.model('DomainTrailerEntity', { available: r.gK.boolean }).views((e) => ({
                    get isAvailable() {
                        if (!(0, r._n)(e)) return !1;
                        let { settings: t } = (0, n.M)(e);
                        if (
                            !(null == t ? void 0 : t.browserInfo) ||
                            ((e) => {
                                let t = e.version ? Number(e.version.split('.')[0]) : void 0;
                                return !!(e.name && s.includes(e.name) && e.OSFamily && l.includes(e.OSFamily) && t && t < 18);
                            })(t.browserInfo)
                        )
                            return !1;
                        return e.available;
                    },
                }));
        },
        24460: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => g });
            var r = i(88800),
                n = i(96706),
                s = i(53548),
                l = i(2058),
                a = i(29595),
                o = i(74965),
                c = i(72288),
                u = i(66943),
                d = i(6322);
            let g = (e) => {
                let { user: t } = (0, c.g)(),
                    { notify: i } = (0, o.l)(),
                    { formatMessage: g } = (0, l.A)(),
                    [m, p] = (0, s.useState)(!1);
                return (0, s.useCallback)(async () => {
                    if (!t.isAuthorized) return void i((0, r.jsx)(u.h, { error: g({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: a.u.ERROR });
                    if (m) return;
                    let s = { ...(0, n.HO)(e), url: e.url, isPinned: !e.isPinned };
                    p(!0);
                    let l = await e.togglePin();
                    (p(!1),
                        l
                            ? i((0, r.jsx)(d.l, { playlist: s }), { containerId: a.u.INFO })
                            : i((0, r.jsx)(u.h, { error: g({ id: 'error-messages.error-during-action' }) }), { containerId: a.u.ERROR }));
                }, [t.isAuthorized, m, e, i, g]);
            };
        },
        27169: (e, t, i) => {
            'use strict';
            var r;
            (i.d(t, { Q: () => r }),
                (function (e) {
                    ((e.FROM_ALBUM_COVER = 'from-album-cover'), (e.FROM_ARTIST_PHOTOS = 'from-artist-photos'), (e.PIC = 'pic'), (e.MOSAIC = 'mosaic'));
                })(r || (r = {})));
        },
        30832: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => l });
            var r = i(88800),
                n = i(15077),
                s = i(42729);
            let l = (e) => {
                let { playlist: t, closeToast: i } = e;
                return (0, r.jsx)(s.O, {
                    entityVariant: n.c.PLAYLIST,
                    entityUrl: t.url,
                    collectionUrl: '/collection',
                    entityTitle: t.title,
                    isLiked: t.isLiked,
                    closeToast: i,
                    coverUri: t.coverUri,
                });
            };
        },
        31510: (e, t, i) => {
            'use strict';
            i.d(t, { e: () => r });
            let r = (e) => ({ uri: e.uri, color: e.color });
        },
        32596: (e, t, i) => {
            'use strict';
            i.d(t, { SomethingWentWrong: () => E });
            var r = i(88800),
                n = i(65724),
                s = i(84961),
                l = i(53548),
                a = i(2058),
                o = i(88969);
            i(30282);
            var c = i(96817),
                u = i(52300),
                d = i(29504),
                g = i(87999),
                m = i(47149),
                p = i(84423),
                v = i(89846),
                y = i(64543),
                _ = i(63582);
            let h = (0, _.n)({ event: 'Screen.ActionPerformed', kind: 'hook', requiredScopes: ['screen'] }, function () {
                    var e;
                    let t = null == (e = (0, p.s)()) ? void 0 : e.evgenInstance,
                        { hash: i } = (0, v.g)(),
                        { screen: r } = (0, y.j)();
                    return {
                        sendRefreshEvent: (0, l.useCallback)(() => {
                            if (!t || !i || !(null == r ? void 0 : r.pageId)) return;
                            let e = {
                                actionType: g.ActionType.Refresh,
                                userInteractionType: g.UserInteractionType.Tap,
                                entityType: g.EntityTypes.Error,
                                entityId: g.EntityTypes.SomethingWrong,
                                hash: i,
                                pageId: r.pageId,
                                pageStyle: g.PageStyles.Fullscreen,
                                pagePlacement: g.PagePlacements.Fullscreen,
                                mainObjectType: g.DomainObjectType.NonApplicable,
                                mainObjectId: g.DomainObjectType.NonApplicable,
                            };
                            Object.values(e).some((e) => void 0 === e) || (0, m.bv)(t, e);
                        }, [t, i, null == r ? void 0 : r.pageId]),
                    };
                }),
                b = (0, _.n)({ event: 'Screen.ErrorRaised', kind: 'hook', requiredScopes: ['screen'] }, function (e) {
                    var t;
                    let i = null == (t = (0, p.s)()) ? void 0 : t.evgenInstance,
                        { hash: r } = (0, v.g)(),
                        { screen: n } = (0, y.j)();
                    (0, l.useEffect)(() => {
                        if (!i || !r || !(null == n ? void 0 : n.pageId)) return;
                        let t = {
                            entityType: g.EntityTypes.Error,
                            entityId: g.EntityTypes.SomethingWrong,
                            errorMessage: e,
                            hash: r,
                            pageId: n.pageId,
                            pageStyle: g.PageStyles.Fullscreen,
                            pagePlacement: g.PagePlacements.Fullscreen,
                            mainObjectType: g.DomainObjectType.NonApplicable,
                            mainObjectId: g.DomainObjectType.NonApplicable,
                        };
                        Object.values(t).some((e) => void 0 === e) || (0, m.z5)(i, t);
                    }, [i, e, r, null == n ? void 0 : n.pageId]);
                });
            var f = i(44230),
                T = i(4370),
                k = i(72288),
                A = i(97956),
                x = i(56248),
                P = i(90688),
                I = i(78940);
            let C = { src: '/_next/static/media/unstable-music-screen.87f662df.png' };
            var S = i(96856),
                L = i.n(S);
            let K = (0, s.PA)((e) => {
                let { className: t, withBackwardControl: i = !0, onBack: s } = e,
                    { slam: l } = (0, k.g)(),
                    { contentRef: a } = (0, f.g)(),
                    u = (0, I.Z)(T.Z.mymusicDownloadsTracks.href);
                return (0, r.jsxs)('div', {
                    className: (0, n.$)(L().root, t),
                    children: [
                        i &&
                            (0, r.jsx)(x.L, {
                                withBackwardFallback: '/',
                                className: (0, n.$)(L().navigation, { [L().navigation_desktop]: !a }),
                                withForwardControl: !1,
                                onBackwardClick: s,
                            }),
                        (0, r.jsxs)('div', {
                            className: (0, n.$)(L().content, { [L().content_shrink]: !i }),
                            children: [
                                (0, r.jsx)(P._V, { className: L().image, src: C.src, fit: 'contain', withLoadingIndicator: !1, alt: '', 'aria-hidden': !0 }),
                                (0, r.jsxs)('div', {
                                    className: L().message,
                                    children: [
                                        (0, r.jsx)(d.DZ, {
                                            className: L().title,
                                            variant: 'h3',
                                            size: 'l',
                                            children: (0, r.jsx)(o.A, { id: 'page-error.unstable-music-screen-title' }),
                                        }),
                                        (0, r.jsx)(d.HL, {
                                            className: L().text,
                                            variant: 'span',
                                            type: 'text',
                                            size: 'l',
                                            weight: 'medium',
                                            children: (0, r.jsx)(o.A, { id: 'page-error.unstable-music-screen-description' }),
                                        }),
                                    ],
                                }),
                                l.hasDownloadedTracks &&
                                    (0, r.jsx)(c.$, {
                                        className: L().button,
                                        onClick: u,
                                        color: 'secondary',
                                        size: 'default',
                                        radius: 'xxxl',
                                        children: (0, r.jsx)(d.HL, {
                                            className: L().buttonText,
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'l',
                                            children: (0, r.jsx)(o.A, { id: 'page-error.listen-downloaded-content' }),
                                        }),
                                    }),
                            ],
                        }),
                    ],
                });
            });
            var O = i(9184),
                j = i.n(O);
            let E = (0, s.PA)((e) => {
                let { className: t, withBackwardControl: i = !0, onBack: s } = e,
                    { formatMessage: g } = (0, a.A)(),
                    m = (0, l.useContext)(k.P),
                    p = null == m ? void 0 : m.experiments.checkExperiment(A.z.WebNextUnstableMusicScreen, 'on'),
                    v = g(p ? { id: 'page-error.unstable-music-screen-title' } : { id: 'error-messages.something-went-wrong' });
                b(v);
                let { sendRefreshEvent: y } = h(),
                    _ = (0, l.useCallback)(() => {
                        (y(), (window.location.href = T.Z.main.href));
                    }, [y]),
                    { contentRef: P } = (0, f.g)();
                return p
                    ? (0, r.jsx)(K, { className: t, withBackwardControl: i, onBack: s })
                    : (0, r.jsxs)('div', {
                          className: (0, n.$)(j().root, t),
                          children: [
                              i &&
                                  (0, r.jsx)(x.L, {
                                      withBackwardFallback: '/',
                                      className: (0, n.$)(j().navigation, { [j().navigation_desktop]: !P }),
                                      withForwardControl: !1,
                                      onBackwardClick: s,
                                  }),
                              (0, r.jsxs)('div', {
                                  className: (0, n.$)(j().content, { [j().content_shrink]: !i }),
                                  children: [
                                      (0, r.jsx)(u.I, { className: j().icon, variant: 'attention', size: 'xxl' }),
                                      (0, r.jsx)(d.DZ, { className: (0, n.$)(j().title, j().important), variant: 'h3', size: 'xs', children: v }),
                                      (0, r.jsxs)(d.HL, {
                                          className: (0, n.$)(j().text, j().important),
                                          variant: 'span',
                                          type: 'text',
                                          size: 'l',
                                          weight: 'normal',
                                          children: [!1, (0, r.jsx)(o.A, { id: 'page-error.try-to-restart-app' })],
                                      }),
                                      (0, r.jsx)(c.$, {
                                          onClick: _,
                                          className: j().button,
                                          role: 'link',
                                          color: 'secondary',
                                          size: 'l',
                                          radius: 'xxxl',
                                          children: (0, r.jsxs)(d.HL, {
                                              type: 'controls',
                                              variant: 'span',
                                              size: 'm',
                                              children: [!1, (0, r.jsx)(o.A, { id: 'page-error.restart-app-button' })],
                                          }),
                                      }),
                                  ],
                              }),
                          ],
                      });
            });
        },
        34407: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => r });
            let r = 100;
        },
        34961: (e, t, i) => {
            'use strict';
            i.d(t, { W: () => y, s: () => _ });
            var r = i(88800),
                n = i(84961),
                s = i(58390),
                l = i(53548),
                a = i(35412),
                o = i(39499),
                c = i(89108),
                u = i(70003),
                d = i(72288),
                g = i(16818);
            (0, n.eO)(!1);
            let m = (0, l.createContext)(null),
                p = (e) => {
                    let { children: t, store: i, storeKey: n } = e,
                        s = (0, l.useMemo)(() => ({ store: i, storeKey: n }), [i, n]);
                    return (0, r.jsx)(m.Provider, { value: s, children: t });
                },
                v = (e) => {
                    let { nonce: t, patchKey: i, patchesRef: n } = e;
                    return (
                        (0, s.useServerInsertedHTML)(() => {
                            let e = n.current;
                            return ((n.current = []), 0 === e.length)
                                ? null
                                : (0, r.jsx)('script', {
                                      dangerouslySetInnerHTML: {
                                          __html: ((e, t) =>
                                              "\n        window.__PAGE_STATE_PATCHES__ = window.__PAGE_STATE_PATCHES__ || {};\n        window.__PAGE_STATE_PATCHES__['"
                                                  .concat(e, "'] =\n            window.__PAGE_STATE_PATCHES__['")
                                                  .concat(e, "'] || [];\n        window.__PAGE_STATE_PATCHES__['")
                                                  .concat(e, "'].push(")
                                                  .concat((0, a.Gr)(t), ");\n        window.dispatchEvent(new Event('")
                                                  .concat(c.O, "'));\n    "))(i, e),
                                      },
                                      nonce: null != t ? t : void 0,
                                  });
                        }),
                        null
                    );
                },
                y = (e) => {
                    let { createStore: t, patchKey: i } = e,
                        n = () => {
                            var e, t;
                            let r = null != (t = null == (e = window.__PAGE_STATE_PATCHES__) ? void 0 : e[i]) ? t : [];
                            return (window.__PAGE_STATE_PATCHES__ && delete window.__PAGE_STATE_PATCHES__[i], r);
                        };
                    return {
                        pageStoreProvider: (e) => {
                            let { children: s, nonce: l } = e,
                                a = (0, g.Y)(),
                                o = (0, d.g)(),
                                { store: m, patchesRef: y } = (0, u.m)({
                                    createStore: () => t({ ...a, rootStore: o }),
                                    getPendingPatchBatches: n,
                                    patchesUpdatedEventName: c.O,
                                });
                            return (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)(v, { nonce: l, patchKey: i, patchesRef: y }), (0, r.jsx)(p, { store: m, storeKey: i, children: s })],
                            });
                        },
                    };
                };
            function _(e) {
                let { throwOnAbsence: t = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    i = (0, l.useContext)(m);
                if (!i || i.storeKey !== e) {
                    var r;
                    if (!t) return null;
                    throw new o.t('Page store context is missing or has unexpected key', {
                        code: 'E_CONTEXT_PAGE_STORE_NULL',
                        data: { actualStoreKey: null != (r = null == i ? void 0 : i.storeKey) ? r : 'null', expectedStoreKey: e },
                    });
                }
                return i.store;
            }
        },
        38514: (e, t, i) => {
            'use strict';
            i.d(t, { L: () => n });
            var r = i(67174);
            let n = (e) => (0, r.u)('/album/:albumId', { params: { albumId: e } });
        },
        39339: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => _ });
            var r = i(5120),
                n = i(89916),
                s = i(60385),
                l = i(79390),
                a = i(50633),
                o = i(27506),
                c = i(67174),
                u = i(23744),
                d = i(97335),
                g = i(67318),
                m = i(34407),
                p = i(554),
                v = i(18243),
                y = i(99007);
            let _ = r.gK
                .compose(
                    r.gK.model({
                        uuid: r.gK.string,
                        isAvailable: r.gK.boolean,
                        revision: r.gK.maybe(r.gK.number),
                        uid: r.gK.number,
                        kind: r.gK.number,
                        title: r.gK.maybe(r.gK.string),
                        coverUri: r.gK.maybe(r.gK.string),
                        tracksCount: r.gK.maybe(r.gK.number),
                        averageColor: r.gK.maybe(r.gK.string),
                        generatedPlaylistType: r.gK.maybe(r.gK.string),
                        personalColor: r.gK.maybeNull(r.gK.number),
                        visibility: r.gK.maybe(r.gK.string),
                        trailer: r.gK.maybe(u.a),
                    }),
                    d.t,
                )
                .views((e) => ({
                    get key() {
                        return ''.concat(e.uuid, '_').concat(e.uid, '_').concat(e.kind);
                    },
                    get url() {
                        let { href: t } = (0, c.u)('/playlists/:playlistUuid', { params: { playlistUuid: e.uuid } });
                        return t;
                    },
                    get isLikesCountHidden() {
                        return e.kind === y.j.LIKE || e.kind === y.j.CHART || e.generatedPlaylistType;
                    },
                    get isFavouritePlaylist() {
                        return e.kind === y.j.LIKE;
                    },
                    get isPublic() {
                        return e.visibility === s.L.PUBLIC;
                    },
                    get isLiked() {
                        if (!(0, r._n)(e)) return !1;
                        let { library: t } = (0, a.M)(e);
                        return t.isPlaylistLiked((0, p.m)(e));
                    },
                    get pinId() {
                        return (0, v.f)(e);
                    },
                    get id() {
                        return (0, p.m)(e);
                    },
                    get isPinned() {
                        if (!(0, r._n)(e)) return !1;
                        let { pinsCollection: t } = (0, a.M)(e);
                        return t.isPinned(this.pinId);
                    },
                    get isOwnPlaylist() {
                        let { user: t } = (0, a.M)(e);
                        return !!(t.isAuthorized && e.uid && t.account.data.uid && e.uid === t.account.data.uid);
                    },
                    get canUserChange() {
                        if (!(0, r._n)(e)) return !1;
                        return this.isOwnPlaylist && !this.isFavouritePlaylist;
                    },
                    get isOwnFavouritePlaylist() {
                        if (!(0, r._n)(e)) return !1;
                        return this.isFavouritePlaylist && this.isOwnPlaylist;
                    },
                }))
                .actions((e) => ({
                    toggleLike: (0, r.L3)(function* () {
                        if (!(0, r._n)(e)) return;
                        let { library: t, user: i } = (0, a.M)(e);
                        if (i.isAuthorized) {
                            let n = yield t.togglePlaylistLike({ userId: i.account.data.uid, entityId: e.id, ownerId: e.uid, kindId: e.kind });
                            return ((0, r._n)(e) && n === l.f.OK && (e.isLiked ? e.likePending() : e.unlikePending()), n);
                        }
                    }),
                    togglePin: (0, r.L3)(function* () {
                        if (!(0, r._n)(e)) return;
                        let { pinsCollection: t, user: i } = (0, a.M)(e);
                        if (i.isAuthorized) return yield t.togglePlaylistPin({ uid: e.uid, kind: e.kind }, e.pinId);
                    }),
                    changePlaylist: (0, r.L3)(function* (t) {
                        if (!(0, r._n)(e)) return g.Y.ERROR;
                        let { usersResource: i, modelActionsLogger: s } = (0, r._$)(e);
                        try {
                            var l, a;
                            let n = yield i.changePlaylistRelative({ userId: e.uid, diff: t, revision: null != (l = e.revision) ? l : 0, playlistKind: e.kind });
                            // for PulseSync: BEGIN keep playlist track counts for append-to-end insertion
                            Number.isSafeInteger(n.trackCount) && n.trackCount >= 0 && (e.tracksCount = n.trackCount);
                            // for PulseSync: END keep playlist track counts for append-to-end insertion
                            return ((e.revision = n.revision), (e.isAvailable = null == (a = n.available) || a), g.Y.OK);
                        } catch (e) {
                            if ((s.error(e), e && 'object' == typeof e && 'statusCode' in e && e.statusCode === n.X1.PRECONDITION_FAILED)) return g.Y.RELOAD;
                            return g.Y.ERROR;
                        }
                    }),
                    changeTitle: (0, r.L3)(function* (t) {
                        if (!(0, r._n)(e)) return o.F.ERROR;
                        if (e.title === t) return o.F.OK;
                        let { usersResource: i, modelActionsLogger: n } = (0, r._$)(e);
                        if (e.canUserChange) {
                            if (t.length < 1 || t.length > m.k) return o.F.ERROR;
                            let r = e.title;
                            e.title = t;
                            try {
                                let n = yield i.changePlaylistTitle({ title: t, userId: e.uid, playlistKind: e.kind });
                                if (!(null == n ? void 0 : n.title)) return ((e.title = r), o.F.ERROR);
                                return ((e.title = n.title), o.F.OK);
                            } catch (t) {
                                ((e.title = r), n.error(t));
                            }
                        }
                        return o.F.ERROR;
                    }),
                    deletePlaylist: (0, r.L3)(function* () {
                        if (!(0, r._n)(e) || !e.canUserChange) return o.F.ERROR;
                        let { pinsCollection: t } = (0, a.M)(e),
                            { usersResource: i, modelActionsLogger: n } = (0, r._$)(e);
                        try {
                            return (yield i.deletePlaylist({ userId: e.uid, playlistKind: e.kind }), t.isPinned(e.pinId) && t.deletePin(e.pinId), o.F.OK);
                        } catch (e) {
                            n.error(e);
                        }
                        return o.F.ERROR;
                    }),
                    toggleVisibility: (0, r.L3)(function* (t) {
                        if (!(0, r._n)(e) || (!e.canUserChange && !e.isOwnFavouritePlaylist)) return o.F.ERROR;
                        let { usersResource: i, modelActionsLogger: n } = (0, r._$)(e),
                            { user: l } = (0, a.M)(e),
                            c = e.visibility,
                            u = e.isPublic ? s.L.PRIVATE : s.L.PUBLIC;
                        t && (u = t);
                        try {
                            return (
                                (e.visibility = u),
                                e.isOwnFavouritePlaylist
                                    ? yield l.setSettings({ userMusicVisibility: u })
                                    : yield i.togglePlaylistVisibility({ visibility: u, userId: e.uid, playlistKind: e.kind }),
                                o.F.OK
                            );
                        } catch (e) {
                            n.error(e);
                        }
                        return ((e.visibility = c), o.F.ERROR);
                    }),
                    getKey: (t) => ''.concat(t, '_').concat(e.id),

                    // for PulseSync: BEGIN playlist model download-to-file action
                    downloadToFile: (0, r.L3)(function* () {
                        if (!(0, r._n)(e)) return;
                        let { usersResource: resource, modelActionsLogger: logger } = (0, r._$)(e);
                        try {
                            let { tracks = [] } = yield resource.getPlaylistWithTracksIds({
                                    userId: String(e.uid),
                                    playlistKind: e.kind,
                                    resumeStream: !1,
                                }),
                                trackIds = tracks.map((track) => (null == track?.id ? null : track.albumId ? ''.concat(track.id, ':').concat(track.albumId) : String(track.id))).filter(Boolean);
                            trackIds.length && window.musicDesktop?.pulsesync.downloads.tracks?.(trackIds, 'playlist', e.title || '');
                        } catch (error) {
                            logger.error(error);
                        }
                    }),
                    // for PulseSync: END playlist model download-to-file action
                    }));
        },
        40363: (e, t, i) => {
            Promise.resolve().then(i.bind(i, 47433));
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
            var r = i(88800),
                n = i(65724),
                s = i(84961),
                l = i(53548),
                a = i(2058),
                o = i(87999),
                c = i(62414),
                u = i(80643),
                d = i(33979),
                g = i(17392),
                m = i(18593),
                p = i(29993),
                v = i(79070),
                y = i(29832),
                _ = i(52300),
                h = i(7555),
                b = i(29504),
                f = i(13946),
                T = i(85902),
                k = i(24460),
                A = i(5407),
                x = i(57934),
                P = i(84384),
                I = i(4795),
                C = i(78940),
                S = i(55693),
                L = i(39079),
                K = i(72288),
                O = i(86298),
                j = i(81877),
                E = i(49738),
                N = i(91292),
                R = i(56862),
                w = i(16704),
                M = i(56446),
                D = i(36207),
                U = i(47513),
                B = i(19934),
                F = i(48749),
                z = i(22505),
                W = i(9618),
                G = i(95210),
                H = i(46936),
                Y = i(97956),
                V = i(93091),
                $ = i(27817),
                q = i(15425);
            let X = (0, s.PA)((e) => {
                var t;
                let { playlist: i, onOpenChange: n, open: s, ...l } = e,
                    { shouldShowBuySubscriptionModal: c, showBuySubscriptionModal: u } = (0, W.q)(),
                    {
                        experiments: d,
                        settings: { isMobile: m },
                        trailer: v,
                        user: y,
                    } = (0, K.g)(),
                    _ = (0, T.K)(i),
                    h = (0, k.A)(i),
                    b = (0, x.F)(),
                    { formatMessage: f } = (0, a.A)(),
                    P = (0, A.P)(),
                    I = d.checkExperiment(Y.z.WebEditorsFeatures, 'on'),
                    C = (0, F.A)({ entityVariant: H.D.PLAYLIST, urlParams: { id: i.uid, kind: i.kind } });
                (0, G.N)(s);
                let S = (0, p.c)(() => {
                    if (c) return void u();
                    P() || (v.openPlaylistTrailer(i.id), b(o.DomainObjectType.Playlist, i.id));
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
                                        (activate(), n?.(!1));
                                    },
                                    children: label,
                                    'data-pulsesync-addon-menu-item': '',
                                },
                                key,
                            );
                        },
                    }) ?? items;
                // for PulseSync WebHost: END playlist context and native addon menu item rendering
                return (0, r.jsxs)(B.W1, {
                    title: i.title,
                    onOpenChange: n,
                    open: s,
                    offsetOptions: 10,
                    isMobile: m,
                    ariaLabel: f({ id: 'interface-actions.context-menu' }),
                    containerDataTestId: g.Kq.playlist.PLAYLIST_CONTEXT_MENU,
                    ...l,
                    // for PulseSync WebHost: BEGIN inject native addon items into the playlist context menu
                    children: pulseSyncInjectPlaylistMenuItems([
                        I && (0, r.jsx)(z.d, { entityVariant: H.D.PLAYLIST, adminUrl: i.isFavouritePlaylist ? void 0 : C }),
                        !m && (0, r.jsx)($.L, { onClick: h, isPinned: i.isPinned }),
                        !i.isFavouritePlaylist && (0, r.jsx)(V.T, { onClick: _, isLiked: i.isLiked, disabled: !y.isAuthorized }),
                        // for PulseSync: BEGIN download-to-file action in the playlist context menu
                        (i.tracksCount ?? 1) > 0 &&
                            (0, r.jsx)(B.Dr, {
                                onClick: i.downloadToFile,
                                icon: (0, r.jsx)(pulseSyncPlaylistDownloadIcons.I, { variant: 'download', size: 'xxs' }),
                                children: 'Скачать в файл',
                            }),
                        // for PulseSync: END download-to-file action in the playlist context menu
                        (null == (t = i.trailer) ? void 0 : t.isAvailable) && (0, r.jsx)(q.N, { onClick: S, disabled: !i.isAvailable }),
                    ]),
                    // for PulseSync WebHost: END inject native addon items into the playlist context menu
                });
            });
            var Z = i(17657),
                J = i.n(Z);
            let Q = (0, s.PA)((e) => {
                let { className: t, playlist: i, children: s, contentLinesCount: B, customDescription: F, onCoverMouseDown: z } = e,
                    W = (0, c.D)(),
                    {
                        trailer: G,
                        user: H,
                        paywall: { modal: Y },
                    } = (0, K.g)(),
                    { from: V, utmLink: $ } = (0, P.f)({ contextId: i.uuid, contextType: m.K.Playlist }),
                    { formatMessage: q } = (0, a.A)(),
                    { sendLikeSearchFeedback: Z, sendNavigateSearchFeedback: Q, sendPlaySearchFeedback: ee } = (0, S.z)(),
                    [et, ei] = (0, l.useState)(!1),
                    [er, en] = (0, l.useState)(!1),
                    [es, el] = (0, l.useState)(!1),
                    ea = (0, U.r)(i),
                    eo = (0, T.K)(i),
                    ec = (0, k.A)(i),
                    eu = (0, u.S)(),
                    ed = (0, d.g)(),
                    eg = (0, C.Z)(i.url),
                    em = (0, x.F)(),
                    ep = (0, A.P)(),
                    ev = (0, p.c)((e) => {
                        if ((e.stopPropagation(), ep())) return void e.preventDefault();
                        (G.setUtmLink($), G.openPlaylistTrailer(i.id), em(o.DomainObjectType.Playlist, i.id));
                    }),
                    [ey, e_] = (0, l.useState)(!1),
                    { isPlaying: eh, togglePlay: eb } = (0, L.D)({
                        playContextParams: { contextData: { type: m.K.Playlist, meta: { id: i.id, uuid: i.uuid }, from: V, utmLink: $ }, loadContextMeta: !0 },
                    }),
                    ef = (0, p.c)(() => {
                        (eu({ to: o.AppScreen.PlaylistScreen }), null == Q || Q());
                    }),
                    eT = (0, p.c)((e) => {
                        (ef(), eg(e));
                    }),
                    ek = (0, I.N)(),
                    eA = (0, p.c)(() => {
                        if (!ep()) {
                            if (ek) return void Y.open();
                            (et || eh || (ei(!0), null == ee || ee()), eb(), eh || ed());
                        }
                    }),
                    ex = (0, p.c)(() => {
                        (er || i.isLiked || (en(!0), null == Z || Z()), eo());
                    }),
                    eP = (0, p.c)((e) => {
                        (e.preventDefault(), e.stopPropagation());
                    }),
                    eI = (0, p.c)((e) => {
                        (el(e), e_(e));
                    }),
                    eC = (0, l.useMemo)(() => {
                        var e;
                        return F
                            ? (0, r.jsx)(b.HL, { variant: 'span', type: 'entity', size: 's', weight: 'medium', lineClamp: 2, children: F }, i.getKey('description'))
                            : (null == (e = i.artists) ? void 0 : e.length)
                              ? (0, r.jsx)(
                                    f.i,
                                    { className: J().artists, artists: i.artists, lineClamp: 1, linkClassName: J().artistLink, captionSize: 's' },
                                    i.getKey('description'),
                                )
                              : void 0;
                    }, [F, i]),
                    eS = (0, v.L)(() => {
                        if (!i.isFavouritePlaylist)
                            return (0, r.jsx)(
                                E.c,
                                {
                                    className: (0, n.$)(J().likeButton, J().control),
                                    isLiked: i.isLiked,
                                    onClick: ex,
                                    variant: 'default',
                                    size: 's',
                                    iconSize: 'xxs',
                                    disabled: !H.isAuthorized,
                                },
                                i.getKey('LikeButton'),
                            );
                    }),
                    eL = (0, l.useMemo)(() => {
                        var e;
                        if (null == i || null == (e = i.trailer) ? void 0 : e.isAvailable)
                            return (0, r.jsx)(
                                D.n,
                                {
                                    children: (0, r.jsx)(
                                        M.k,
                                        { className: (0, n.$)(J().trailerButton, J().control), radius: 'round', size: 's', iconSize: 'xxs', onClick: ev },
                                        i.getKey('TrailerButton'),
                                    ),
                                },
                                i.getKey('PlaylilstCardTrailerTooltip'),
                            );
                    }, [ev, i]),
                    eK = (0, l.useMemo)(
                        () =>
                            (0, r.jsx)(
                                R.O,
                                { onClick: ec, isPinned: i.isPinned, className: (0, n.$)(J().pinButton, J().control), withRipple: !1 },
                                i.getKey('PinButton'),
                            ),
                        [ec, i],
                    ),
                    eO = (0, l.useMemo)(
                        () =>
                            (0, r.jsx)(h.t, {
                                className: J().cover,
                                radius: 's',
                                withShadow: !0,
                                'data-test-id': g.Kq.playlist.PLAYLIST_CARD,
                                children: (0, r.jsxs)('div', {
                                    className: J().coverBlock,
                                    onClick: eT,
                                    onMouseDown: z,
                                    children: [
                                        (0, r.jsx)(j.B, {
                                            className: J().image,
                                            src: i.coverUri,
                                            size: 200,
                                            fit: 'cover',
                                            alt: ea,
                                            withAvatarReplace: !0,
                                            'aria-hidden': !0,
                                        }),
                                        (0, r.jsx)(y.hg, {
                                            isVisible: es || ey,
                                            className: J().controls,
                                            playControl: (0, r.jsx)(
                                                w.D,
                                                {
                                                    className: (0, n.$)(J().playButton, J().control),
                                                    buttonVariant: 'default',
                                                    withHover: !1,
                                                    iconSize: 'xl',
                                                    variant: 'filled',
                                                    onClick: eA,
                                                    isPlaying: eh,
                                                    disabled: !i.isAvailable,
                                                },
                                                i.getKey('PlayButton'),
                                            ),
                                            likeControl: eS,
                                            menuControl: (0, r.jsx)(
                                                X,
                                                {
                                                    playlist: i,
                                                    onOpenChange: eI,
                                                    open: es,
                                                    onClick: eP,
                                                    className: (0, n.$)(J().menuButton, J().control),
                                                    icon: (0, r.jsx)(_.I, { size: 'xxs', variant: 'more' }),
                                                    size: 's',
                                                    'data-test-id': g.Kq.playlist.PLAYLIST_CONTEXT_MENU_BUTTON,
                                                },
                                                i.getKey('PlaylistContextMenu'),
                                            ),
                                            pinControl: eK,
                                            trailerControl: eL,
                                        }),
                                    ],
                                }),
                            }),
                        [eT, z, i, ea, es, ey, eA, eh, eS, eI, eP, eK, eL],
                    ),
                    ej = !!i.actualLikesCount && !i.isLikesCountHidden;
                return (0, r.jsxs)(y.MN, {
                    ref: W,
                    'aria-label': ea,
                    className: (0, n.$)(J().root, t),
                    title: (0, r.jsx)(b.HL, {
                        variant: 'div',
                        type: 'entity',
                        size: 's',
                        weight: 'medium',
                        lineClamp: 2,
                        'aria-hidden': !0,
                        'data-test-id': g.Kq.playlist.PLAYLIST_TITLE,
                        children: (0, r.jsx)(N.N, { className: J().titleLink, href: i.url, tabIndex: -1, onClick: ef, children: i.title }),
                    }),
                    srTitle: (0, r.jsx)(N.N, { className: J().srTitleLink, href: i.url, onClick: ef, children: i.title }),
                    contentLinesCount: B,
                    view: eO,
                    description: eC,
                    'data-test-id': g.Kq.playlist.PLAYLIST_ITEM,
                    children: [
                        ej &&
                            (0, r.jsx)(O.x, {
                                ariaLabel: q({ id: 'entity-names.likes-counter' }, { counter: i.actualLikesCount }),
                                likesCount: i.actualLikesCount,
                                isLiked: i.isLiked,
                                handleLikeClick: eo,
                            }),
                        s,
                    ],
                });
            });
        },
        41917: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => l });
            var r = i(89625),
                n = i(48109),
                s = i(57285);
            let l = function (e) {
                var t;
                let { mapArtists: i = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return {
                    // for PulseSync: BEGIN album id metadata fallback
                    id: Number(e.id),
                    // for PulseSync: END album id metadata fallback
                    title: e.title,
                    artists: i ? (null == (t = e.artists) ? void 0 : t.map(r.G)) : void 0,

                    // for PulseSync: BEGIN album coverUri metadata fallback
                    coverUri: e.coverUri ?? e.ogImage ?? e.cover?.uri ?? e.cover?.prefix,
                    // for PulseSync: END album coverUri metadata fallback
                    type: e.type,
                    year: e.year,
                    version: e.version,
                    genre: e.genre,
                    likesCount: e.likesCount,
                    averageColor: (0, n.Q)(e.derivedColors),
                    isAvailable: !!e.available,
                    trackPosition: e.trackPosition,
                    disclaimers: e.disclaimers,
                    trackCount: e.trackCount,
                    availableForPremiumUsers: e.availableForPremiumUsers,
                    availableForOptions: e.availableForOptions || [],
                    bestAlbumTracks: e.bests,
                    durationSec: e.durationSec,
                    trailer: (0, s.n)(e.trailer),
                    listeningFinished: !!e.listeningFinished,
                };
            };
        },
        42078: (e, t, i) => {
            'use strict';
            var r;
            (i.d(t, { _: () => r }),
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
                })(r || (r = {})));
        },
        43161: (e, t, i) => {
            'use strict';
            i.d(t, { g: () => Z });
            var r = i(88800),
                n = i(84961),
                s = i(2058),
                l = i(87999),
                a = i(17392),
                o = i(18593),
                c = i(29993),
                u = i(52300),
                d = i(19934),
                g = i(96706),
                m = i(53548),
                p = i(79390),
                v = i(29595),
                y = i(74965),
                _ = i(72288),
                h = i(66943),
                b = i(7555),
                f = i(73170),
                T = i(29504),
                k = i(59304),
                A = i(81877),
                x = i(85074),
                P = i.n(x);
            let I = (e) => {
                let { coverUri: t, title: i, isDisliked: n, closeToast: l } = e,
                    { formatMessage: a } = (0, s.A)(),
                    o = a(n ? { id: 'notifications-info.artist-unavailable-in-recommendations' } : { id: 'notifications-info.artist-available-in-recommendations' });
                return (0, r.jsx)(k.$, {
                    closeToast: l,
                    message: (0, r.jsxs)('div', {
                        className: P().message,
                        children: [
                            (0, r.jsx)(f.q, { children: (0, r.jsx)('p', { role: 'alert', 'aria-label': o }) }),
                            (0, r.jsx)(b.t, {
                                className: P().cover,
                                radius: 'round',
                                children: (0, r.jsx)(A.B, { className: P().image, src: t, alt: i, size: 100, fit: 'cover', withAvatarReplace: !0 }),
                            }),
                            (0, r.jsx)(T.HL, { className: P().text, variant: 'div', type: 'controls', size: 'm', 'aria-hidden': !0, children: o }),
                        ],
                    }),
                });
            };
            var C = i(64207),
                S = i(77455),
                L = i(48749),
                K = i(22505),
                O = i(5407),
                j = i(64284),
                E = i(98427),
                N = i(57934),
                R = i(84384),
                w = i(9618),
                M = i(95210),
                D = i(47964),
                U = i(46936),
                B = i(97956),
                F = i(98953),
                z = i(32721),
                W = i(18130),
                G = i(56117),
                H = i(93091),
                Y = i(27817),
                V = i(74064),
                $ = i(15425),
                q = i(81066),
                X = i(64546);
            let Z = (0, n.PA)((e) => {
                var t, i, n;
                let { artist: b, onOpenChange: f, open: T, ...k } = e,
                    { shouldShowBuySubscriptionModal: A, showBuySubscriptionModal: x } = (0, w.q)(),
                    {
                        settings: { isMobile: P },
                        modals: { artistAboutModal: Z },
                        trailer: J,
                        user: Q,
                        experiments: ee,
                    } = (0, _.g)(),
                    et = (0, S.A)(b),
                    ei = (0, C.K)(b),
                    er = ((e) => {
                        let { user: t } = (0, _.g)(),
                            { notify: i } = (0, y.l)(),
                            [n, l] = (0, m.useState)(!1),
                            { formatMessage: a } = (0, s.A)();
                        return (0, c.c)(async () => {
                            if (!e) return;
                            if (!t.isAuthorized)
                                return void i((0, r.jsx)(h.h, { error: a({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: v.u.ERROR });
                            if (n) return;
                            let s = { ...(0, g.HO)(e), isDisliked: !e.isDisliked };
                            l(!0);
                            let o = await e.toggleDislike();
                            (l(!1),
                                o === p.f.OK
                                    ? i((0, r.jsx)(I, { coverUri: s.coverUri, title: s.name, isDisliked: s.isDisliked }), { containerId: v.u.INFO })
                                    : i((0, r.jsx)(h.h, { error: a({ id: 'error-messages.error-during-action' }) }), { containerId: v.u.ERROR }));
                        });
                    })(b),
                    en = (0, N.F)(),
                    es = ''.concat(j.U.ARTIST, '-').concat(null == b ? void 0 : b.id),
                    { formatMessage: el } = (0, s.A)(),
                    { utmLink: ea } = (0, R.f)({ blockId: j.U.ARTIST, contextType: o.K.Artist, contextId: null == b ? void 0 : b.id }),
                    { shareLink: eo, pathname: ec } = (0, W.b)('/artist/:artistId', { params: { artistId: null != (i = null == b ? void 0 : b.id) ? i : '' } }),
                    eu = (0, L.A)({ entityVariant: U.D.ARTIST, urlParams: { id: null == b ? void 0 : b.id } }),
                    { isPlaying: ed, togglePlay: eg } = (0, D.B)({
                        seeds: null != (n = null == b ? void 0 : b.seeds) ? n : [],
                        pageIdForFrom: E.b.RADIO,
                        blockIdForFrom: es,
                        parentContextId: null == b ? void 0 : b.id,
                    }),
                    em = (0, O.P)(),
                    ep = el((null == b ? void 0 : b.isComposer) ? { id: 'artist.about-composer' } : { id: 'artist.about-artist' }),
                    ev = (0, c.c)(() => {
                        if (A && Q.isAuthorized) return void x();
                        ed || eg();
                    }),
                    ey = (0, c.c)(() => {
                        if (!em()) {
                            if (A) return void x();
                            (null == b ? void 0 : b.id) && (J.setUtmLink(ea), J.openArtistTrailer(b.id), en(l.DomainObjectType.Artist, b.id));
                        }
                    }),
                    e_ = (0, c.c)(() => {
                        Z.open(null == b ? void 0 : b.id);
                    });
                (0, M.N)(T);
                let eh = { variant: F.Y.ARTIST, id: null == b ? void 0 : b.id, title: null == b ? void 0 : b.name, path: ec },
                    eb = ee.checkExperiment(B.z.WebEditorsFeatures, 'on'),
                    ef = null == b || null == (t = b.trailer) ? void 0 : t.isAvailable,
                    eT = ee.checkExperiment(B.z.WebNextArtistInfo, 'on'),
                    ek = !ee.checkExperiment(B.z.WebNextProductWithoutRecommendation, 'on');
                return (0, r.jsxs)(d.W1, {
                    isMobile: P,
                    offsetOptions: 10,
                    open: T,
                    onOpenChange: f,
                    ariaLabel: el({ id: 'interface-actions.context-menu' }),
                    containerDataTestId: a.Kq.artist.ARTIST_CONTEXT_MENU,
                    ...k,
                    children: [
                        eb && (0, r.jsx)(X.WithOffline, { fallback: (0, r.jsx)(K.d, { entityVariant: U.D.ARTIST, adminUrl: eu }) }),
                        !P && (0, r.jsx)(X.WithOffline, { fallback: (0, r.jsx)(Y.L, { onClick: et, isPinned: null == b ? void 0 : b.isPinned }) }),
                        (0, r.jsx)(X.WithOffline, {
                            fallback: (0, r.jsx)(H.T, {
                                onClick: ei,
                                isLiked: null == b ? void 0 : b.isLiked,
                                disabled: !Q.isAuthorized || !(null == b ? void 0 : b.isAvailable),
                            }),
                        }),
                        ef && (0, r.jsx)(X.WithOffline, { fallback: (0, r.jsx)($.N, { onClick: ey }) }),
                        ek &&
                            (0, r.jsx)(X.WithOffline, {
                                fallback: (0, r.jsx)(q.C, { onClick: ev, disabled: !(null == b ? void 0 : b.isAvailable), variant: z.I.ARTIST, onOpenMenuChange: f }),
                            }),
                        (0, r.jsx)(V.H, { disabled: !b, shareLink: eo, entityMeta: eh }),
                        eT &&
                            (0, r.jsx)(X.WithOffline, {
                                fallback: (0, r.jsx)(d.Dr, {
                                    onClick: e_,
                                    icon: (0, r.jsx)(u.I, { variant: 'info', size: 'xxs' }),
                                    'data-test-id': a.Kq.artist.ARTIST_CONTEXT_MENU_ABOUT_ARTIST_BUTTON,
                                    children: ep,
                                }),
                            }),
                        (0, r.jsx)(X.WithOffline, {
                            fallback: (0, r.jsx)(G.D, { onClick: er, isDisliked: null == b ? void 0 : b.isDisliked, disabled: !(null == b ? void 0 : b.isAvailable) }),
                        }),
                    ],
                });
            });
        },
        46886: (e) => {
            e.exports = { root: 'PostPlaylists_root__3tea0', content: 'PostPlaylists_content__2fXI5' };
        },
        47433: (e, t, i) => {
            'use strict';
            (i.r(t), i.d(t, { default: () => ei }));
            var r,
                n = i(88800),
                s = i(53548),
                l = i(58390),
                a = i(34961),
                o = i(53892),
                c = i(5120),
                u = i(89916);
            !(function (e) {
                ((e.ALBUMS = 'albums'), (e.ARTISTS = 'artists'), (e.PLAYLISTS = 'playlists'));
            })(r || (r = {}));
            var d = i(78460),
                g = i(83890),
                m = i(49573),
                p = i(98138),
                v = i(90544),
                y = i(99211),
                _ = i(74773),
                h = i(59497);
            let b = c.gK
                    .compose(
                        c.gK.model('PostPage', {
                            errorStatusCode: c.gK.maybe(c.gK.number),
                            title: c.gK.maybeNull(c.gK.string),
                            promotionType: c.gK.maybeNull(c.gK.enumeration(Object.values(r))),
                            artists: c.gK.maybe(c.gK.array(v.P)),
                            albums: c.gK.maybe(c.gK.array(m.J)),
                            playlists: c.gK.maybe(c.gK.array(d.I)),
                        }),
                        h.X,
                    )
                    .views((e) => {
                        let t = {
                            get isLoading() {
                                return e.isNeededToLoad || e.loadingState === _.G.PENDING;
                            },
                            get isNotFound() {
                                let t = e.errorStatusCode === u.X1.NOT_FOUND || e.errorStatusCode === u.X1.BAD_REQUEST;
                                return e.isRejected && t;
                            },
                            get isSomethingWrong() {
                                return e.isRejected && !t.isNotFound;
                            },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        getData: (0, c.L3)(function* (t) {
                            let { promoId: i } = t,
                                { feedResource: r, modelActionsLogger: n } = (0, c._$)(e);
                            if (e.loadingState !== _.G.PENDING)
                                try {
                                    e.loadingState = _.G.PENDING;
                                    let t = yield r.getPromotionsById({ promoId: i });
                                    ((e.title = t.title),
                                        (e.promotionType = t.promotionType),
                                        t.artists && t.artists.length > 0 && (e.artists = (0, c.wg)(t.artists.map(p.d))),
                                        t.albums && t.albums.length > 0 && (e.albums = (0, c.wg)(t.albums.map(g.p))),
                                        t.playlists &&
                                            t.playlists.length > 0 &&
                                            (e.playlists = (0, c.wg)(
                                                t.playlists.map((e) => {
                                                    let { playlist: t } = e;
                                                    return (0, y.j)(t);
                                                }),
                                            )),
                                        e.loadingState !== _.G.IDLE && (e.loadingState = _.G.RESOLVE));
                                } catch (t) {
                                    (n.error(t),
                                        t instanceof u.GX &&
                                            (t.statusCode === u.X1.NOT_FOUND || t.statusCode === u.X1.BAD_REQUEST) &&
                                            (e.errorStatusCode = u.X1.NOT_FOUND),
                                        e.loadingState !== _.G.IDLE && (e.loadingState = _.G.REJECT));
                                }
                        }),
                        reset() {
                            ((e.loadingState = _.G.IDLE), (e.title = null), (e.artists = (0, c.wg)([])), (e.albums = (0, c.wg)([])));
                        },
                    })),
                f = { loadingState: _.G.IDLE },
                { pageStoreProvider: T } = (0, a.W)({ createStore: (e) => b.create(f, e), patchKey: o.n.POST });
            var k = i(65724),
                A = i(84961),
                x = i(87999),
                P = i(76903),
                I = i(66719),
                C = i(19994),
                S = i(29504),
                L = i(32596),
                K = i(69630),
                O = i(98427),
                j = i(46422),
                E = i(44230),
                N = i(37670),
                R = i(93317),
                w = i(37770),
                M = i(57344),
                D = i.n(M);
            let U = () => {
                let e = Array.from({ length: 20 }, (e, t) => {
                    let i = void 0 === e ? t : ''.concat(t, '-').concat(String(e));
                    return (0, n.jsx)(w.V, { isActive: !0 }, i);
                });
                return (0, n.jsx)('div', { className: D().root, children: e });
            };
            var B = i(58040),
                F = i.n(B),
                z = i(10079),
                W = i(69631),
                G = i.n(W);
            let H = (0, A.PA)((e) => {
                let { albums: t = [] } = e;
                return (0, n.jsx)('div', {
                    className: G().root,
                    children: (0, n.jsx)('div', {
                        className: G().content,
                        'aria-labelledby': 'post-page-header',
                        tabIndex: 0,
                        children: t.map((e) => (0, n.jsx)(z.a, { className: G().item, album: e, contentLinesCount: 3 }, e.id)),
                    }),
                });
            });
            var Y = i(21256),
                V = i(92925),
                $ = i.n(V);
            let q = (0, A.PA)((e) => {
                let { artists: t = [] } = e;
                return (0, n.jsx)('div', {
                    className: $().root,
                    children: (0, n.jsx)('div', {
                        className: $().content,
                        'aria-labelledby': 'post-page-header',
                        tabIndex: 0,
                        children: t.map((e) => (0, n.jsx)(Y.a, { className: $().item, artist: e, contentLinesCount: 3 }, e.id)),
                    }),
                });
            });
            var X = i(41911),
                Z = i(46886),
                J = i.n(Z);
            let Q = (0, A.PA)((e) => {
                    let { playlists: t = [] } = e;
                    return (0, n.jsx)('div', {
                        className: J().root,
                        children: (0, n.jsx)('div', {
                            className: J().content,
                            'aria-labelledby': 'post-page-header',
                            tabIndex: 0,
                            children: t.map((e) => (0, n.jsx)(X.B, { className: J().item, playlist: e, contentLinesCount: 3 }, e.id)),
                        }),
                    });
                }),
                ee = (0, A.PA)((e) => {
                    let { promoId: t } = e,
                        i = (0, a.s)(o.n.POST),
                        c = (0, j.W)(),
                        { contentScrollRef: u, setContentScrollRef: d } = (0, E.g)();
                    (i.isNotFound && (0, l.notFound)(), (0, N.J)(i.isResolved));
                    let g = (0, s.useMemo)(() => {
                        if (i.isLoading) return (0, n.jsx)(U, {});
                        switch (i.promotionType) {
                            case r.ARTISTS:
                                return (0, n.jsx)(q, { artists: i.artists });
                            case r.ALBUMS:
                                return (0, n.jsx)(H, { albums: i.albums });
                            case r.PLAYLISTS:
                                return (0, n.jsx)(Q, { playlists: i.playlists });
                            default:
                                (0, l.notFound)();
                        }
                    }, [i.albums, i.artists, i.isLoading, i.playlists, i.promotionType]);
                    return (t && i.isNeededToLoad && (0, s.use)(i.getData({ promoId: t })), i.isSomethingWrong)
                        ? (0, n.jsx)(L.SomethingWentWrong, {})
                        : (0, n.jsx)(P.a, {
                              pageId: x.AppScreen.Post,
                              pageIdForFrom: O.b.POST,
                              children: (0, n.jsx)(K.h, {
                                  scrollElement: u,
                                  outerTitle: i.title || void 0,
                                  children: (0, n.jsxs)('div', {
                                      className: F().root,
                                      children: [
                                          (0, n.jsx)(R.Y, {
                                              variant: R.V.TEXT,
                                              withForwardControl: !1,
                                              withBackwardControl: c.canBack,
                                              children: i.title
                                                  ? (0, n.jsx)(S.DZ, { id: 'post-header', variant: 'h2', weight: 'bold', size: 'xl', lineClamp: 1, children: i.title })
                                                  : (0, n.jsx)(C.W, { className: F().shimmerTitle, radius: 'l' }),
                                          }),
                                          (0, n.jsx)(I.N, {
                                              containerClassName: (0, k.$)(F().scrollContainer, F().important),
                                              className: F().scrollableContainer,
                                              ref: d,
                                              children: (0, n.jsx)('div', { className: F().container, children: g }),
                                          }),
                                      ],
                                  }),
                              }),
                          });
                }),
                et = () => {
                    let e = (0, j.W)();
                    return (0, n.jsx)(K.h, {
                        scrollElement: null,
                        children: (0, n.jsxs)('div', {
                            className: F().root,
                            children: [
                                (0, n.jsx)(R.Y, {
                                    variant: R.V.TEXT,
                                    withForwardControl: !1,
                                    withBackwardControl: e.canBack,
                                    children: (0, n.jsx)(C.W, { className: F().shimmerTitle, radius: 'l' }),
                                }),
                                (0, n.jsx)(I.N, {
                                    containerClassName: (0, k.$)(F().scrollContainer, F().important),
                                    className: F().scrollableContainer,
                                    children: (0, n.jsx)('div', { className: F().container, children: (0, n.jsx)(U, {}) }),
                                }),
                            ],
                        }),
                    });
                },
                ei = () => {
                    let e = (0, l.useSearchParams)().get('promoId');
                    return (
                        e || (0, l.notFound)(),
                        (0, n.jsx)(T, { children: (0, n.jsx)(s.Suspense, { fallback: (0, n.jsx)(et, {}), children: (0, n.jsx)(ee, { promoId: e }) }) })
                    );
                };
        },
        47513: (e, t, i) => {
            'use strict';
            i.d(t, { r: () => s });
            var r = i(53548),
                n = i(2058);
            let s = (e) => {
                let { formatMessage: t } = (0, n.A)();
                return (0, r.useMemo)(() => {
                    let i = '';
                    e.isLiked && !e.actualLikesCount
                        ? (i = t({ id: 'entity-names.has-your-like' }))
                        : 'number' == typeof e.actualLikesCount &&
                          (i =
                              e.actualLikesCount > 0
                                  ? t({ id: 'entity-names.likes-counter' }, { counter: e.actualLikesCount })
                                  : t({ id: 'entity-names.likes-counter-empty' }));
                    let r = t({ id: 'entity-names.playlist-name' }, { playlistName: e.title });
                    return ''.concat(r, ' ').concat(i);
                }, [t, e]);
            };
        },
        48109: (e, t, i) => {
            'use strict';
            i.d(t, { Q: () => r });
            let r = (e) => {
                var t, i;
                return 'string' == typeof (null == e ? void 0 : e.average)
                    ? null == e
                        ? void 0
                        : e.average
                    : 'object' == typeof (null == e ? void 0 : e.average) && 'string' == typeof (null == e || null == (t = e.average) ? void 0 : t.color)
                      ? null == e || null == (i = e.average)
                          ? void 0
                          : i.color
                      : '';
            };
        },
        49573: (e, t, i) => {
            'use strict';
            i.d(t, { J: () => h });
            var r,
                n = i(5120),
                s = i(87999),
                l = i(61691);
            !(function (e) {
                ((e.KIDS = 'kids'), (e.BOOKMATE = 'bookmate'));
            })(r || (r = {}));
            var a = i(79390),
                o = i(90544),
                c = i(62390),
                u = i(50633),
                d = i(85587),
                g = i(62697),
                m = i(23744),
                p = i(97335),
                v = i(38514),
                y = i(88943),
                _ = i(8413);
            let h = n.gK
                .compose(
                    n.gK.model({
                        id: n.gK.number,
                        title: n.gK.string,
                        artists: n.gK.maybe(n.gK.array(o.P)),
                        chart: n.gK.maybe(c.I),
                        type: n.gK.maybe(n.gK.enumeration(Object.values(l._))),
                        coverUri: n.gK.maybe(n.gK.string),
                        averageColor: n.gK.maybe(n.gK.string),
                        year: n.gK.maybe(n.gK.number),
                        version: n.gK.maybe(n.gK.string),
                        isAvailable: n.gK.optional(n.gK.boolean, !0),
                        availableForOptions: n.gK.maybe(n.gK.frozen()),
                        availableForPremiumUsers: n.gK.maybe(n.gK.boolean),
                        bookmateOptionRequired: n.gK.maybe(n.gK.boolean),
                        genre: n.gK.maybe(n.gK.string),
                        trackPosition: n.gK.maybe(n.gK.frozen()),
                        trackCount: n.gK.maybe(n.gK.number),
                        bestAlbumTracks: n.gK.maybe(n.gK.frozen()),
                        trailer: n.gK.maybe(m.a),
                        durationSec: n.gK.maybe(n.gK.number),
                        listeningFinished: n.gK.maybe(n.gK.boolean),
                        releaseDate: n.gK.maybe(n.gK.string),
                    }),
                    p.t,
                    g.E,
                )
                .views((e) => {
                    let t = {
                        get artistNames() {
                            var i;
                            return null == (i = e.artists) ? void 0 : i.map((e) => e.name).join(', ');
                        },
                        get artistName() {
                            var a, o, c, g;
                            if (null == (o = e.artists) || null == (a = o[0]) ? void 0 : a.various) return;
                            return null == (g = e.artists) || null == (c = g[0]) ? void 0 : c.name;
                        },
                        get artistIds() {
                            var m;
                            return null == (m = e.artists) ? void 0 : m.map((e) => e.id);
                        },
                        get artistId() {
                            var p, h;
                            return null == (h = e.artists) || null == (p = h[0]) ? void 0 : p.id;
                        },
                        get url() {
                            let { href: t } = (0, v.L)(e.id);
                            return t;
                        },
                        get isLiked() {
                            if (!(0, n._n)(e)) return !1;
                            let { library: t } = (0, u.M)(e);
                            return null == t ? void 0 : t.isAlbumLiked(e.id);
                        },
                        get pinId() {
                            return (0, y.i)(e.id);
                        },
                        get seeds() {
                            return ['album:'.concat(e.id)];
                        },
                        get isAlbum() {
                            return e.type === l._.ALBUM || e.type === l._.SINGLE;
                        },
                        get isPodcast() {
                            return e.type === l._.PODCAST;
                        },
                        get isAudiobook() {
                            return e.type === l._.AUDIOBOOK;
                        },
                        get isFairyTale() {
                            return e.type === l._.FAIRY_TALE;
                        },
                        get isNonMusic() {
                            if (!(0, n._n)(e)) return !1;
                            return (0, _.a)(e.type);
                        },
                        get mainObjectType() {
                            if (t.isPodcast) return s.DomainObjectType.Podcast;
                            if (t.isAudiobook || t.isFairyTale) return s.DomainObjectType.Audiobook;
                            return s.DomainObjectType.Album;
                        },
                        get isPinned() {
                            if (!(0, n._n)(e)) return !1;
                            let { pinsCollection: t } = (0, u.M)(e);
                            return t.isPinned(this.pinId);
                        },
                        get isLegalRejected() {
                            if (!(0, n._n)(e)) return !1;
                            return e.getIsLegalRejected(e.isAvailable);
                        },
                        get isUnsafeLegal() {
                            if (!(0, n._n)(e)) return !1;
                            return e.getIsUnsafeLegal(e.isAvailable);
                        },
                        get isAvailableOnlyForPlus() {
                            var b;
                            return !e.isAvailable && (e.availableForPremiumUsers || !!(null == (b = e.availableForOptions) ? void 0 : b.includes(r.BOOKMATE)));
                        },
                        get shouldShowBooksBadge() {
                            var f;
                            return !!(e.bookmateOptionRequired || (!e.availableForPremiumUsers && (null == (f = e.availableForOptions) ? void 0 : f.includes(r.BOOKMATE))));
                        },
                        getDisclaimerEntityRef: (i) => ({ entityType: null != i ? i : t.isPodcast ? d.n.PODCAST : d.n.ALBUM, entityId: e.id }),
                    };
                    return t;
                })
                .actions((e) => ({
                    toggleLike: (0, n.L3)(function* () {
                        if (!(0, n._n)(e)) return;
                        let { library: t, user: i } = (0, u.M)(e);
                        if (i.isAuthorized) {
                            let r = yield t.toggleAlbumLike({ entityId: e.id, userId: i.account.data.uid });
                            return ((0, n._n)(e) && r === a.f.OK && (e.isLiked ? e.likePending() : e.unlikePending()), r);
                        }
                    }),
                    togglePin: (0, n.L3)(function* () {
                        if (!(0, n._n)(e)) return;
                        let { pinsCollection: t, user: i } = (0, u.M)(e);
                        if (i.isAuthorized) return yield t.toggleAlbumPin({ id: e.id }, e.pinId);
                    }),
                    getKey: (t) => ''.concat(t, '_').concat(e.id),
                    updateFinished: (t) => {
                        e.listeningFinished = t;
                    },
                }))
                // for PulseSync: BEGIN attach addon album metadata actions
                .actions(r(999994).metadataModelActions('album'))
                // for PulseSync: END attach addon album metadata actions
                .named('AlbumModel');
        },
        50633: (e, t, i) => {
            'use strict';
            i.d(t, { M: () => n });
            var r = i(5120);
            let n = (e) => {
                let t = (0, r.Zn)(e);
                if (((e) => 'object' == typeof e && null !== e && 'isRootModel' in e && !0 === e.isRootModel)(t)) return t;
                let { rootStore: i } = (0, r._$)(e);
                return i || t;
            };
        },
        53399: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => n });
            var r = i(81592);
            let n = (e) => {
                if (!e) return;
                let t = [];
                return (
                    e.forEach((i, n) => {
                        let s = e[n + 1];
                        'string' == typeof i && 'object' == typeof s && t.push({ ...(0, r.v)(s), separator: i });
                    }),
                    t.length > 0 ? t : void 0
                );
            };
        },
        53647: (e, t, i) => {
            'use strict';
            i.d(t, { V8: () => s, si: () => a, fW: () => g, MJ: () => d, jU: () => p, Bx: () => m });
            var r = i(77451);
            function n(e) {
                if (!e) return null;
                try {
                    return JSON.parse(e);
                } catch (e) {
                    return (console.error(e), null);
                }
            }
            class s {
                get(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    try {
                        let l = (0, r.Jt)(e);
                        if (t) {
                            var i, s;
                            return null != (s = null == (i = n(l)) ? void 0 : i.value) ? s : null;
                        }
                        return null != l ? l : null;
                    } catch (e) {
                        return null;
                    }
                }
                set(e, t, i) {
                    let n = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
                    try {
                        let s = n ? JSON.stringify({ value: t }) : t;
                        (0, r.hZ)(e, s, i);
                    } catch (e) {
                        console.error(e);
                    }
                }
                has(e) {
                    return null !== this.get(e, !1);
                }
                remove(e) {
                    try {
                        (0, r.TF)(e);
                    } catch (e) {}
                }
            }
            function l(e) {
                try {
                    var t;
                    return null != (t = window[e]) ? t : null;
                } catch (e) {
                    return null;
                }
            }
            class a {
                get(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        i = l('localStorage');
                    if (!i) return null;
                    try {
                        var r;
                        let s = i.getItem(e) || void 0;
                        if (!t) return s;
                        let l = n(s);
                        if (!l) return null;
                        let a = null != (r = null == l ? void 0 : l.value) ? r : null;
                        if ((null == l ? void 0 : l.expires) && Date.now() > new Date(l.expires).getTime()) return (this.remove(e), null);
                        return a;
                    } catch (e) {
                        return null;
                    }
                }
                set(e, t, i) {
                    if ('number' == typeof (null == i ? void 0 : i.expires)) {
                        let e = new Date();
                        (e.setMilliseconds(e.getMilliseconds() + 864e5 * i.expires), (i.expires = e));
                    }
                    let r = l('localStorage');
                    if (r)
                        try {
                            r.setItem(e, JSON.stringify({ value: t, ...i }));
                        } catch (e) {}
                }
                has(e) {
                    return null !== this.get(e);
                }
                remove(e) {
                    let t = l('localStorage');
                    if (t)
                        try {
                            t.removeItem(e);
                        } catch (e) {}
                }
            }
            var o = i(9519),
                c = i(39499);
            class u extends c.t {
                constructor(e, t, { code: i = 'E_STORAGE', ...r } = {}) {
                    (super('There is no '.concat(t, ' storage on the ').concat(e, ' platform'), { code: i, ...r }),
                        (0, o._)(this, 'name', 'Storage Exception'),
                        Object.setPrototypeOf(this, u.prototype));
                }
            }
            class d {
                get(e) {
                    throw new u(this.platform, this.type);
                }
                set(e, t, i) {
                    throw new u(this.platform, this.type);
                }
                has(e) {
                    throw new u(this.platform, this.type);
                }
                remove(e) {
                    throw new u(this.platform, this.type);
                }
                constructor(e, t) {
                    ((0, o._)(this, 'platform', ''), (0, o._)(this, 'type', ''), (this.platform = e), (this.type = t));
                }
            }
            class g {
                get(e) {
                    let t = l('sessionStorage');
                    if (!t) return null;
                    try {
                        var i, r, s;
                        let l = null != (r = t.getItem(e)) ? r : void 0;
                        return null != (s = null == (i = n(l)) ? void 0 : i.value) ? s : null;
                    } catch (e) {
                        return null;
                    }
                }
                set(e, t) {
                    let i = l('sessionStorage');
                    if (i)
                        try {
                            i.setItem(e, JSON.stringify({ value: t }));
                        } catch (e) {}
                }
                has(e) {
                    return null !== this.get(e);
                }
                remove(e) {
                    let t = l('sessionStorage');
                    if (t)
                        try {
                            t.removeItem(e);
                        } catch (e) {}
                }
            }
            function m(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                Array.isArray(t) &&
                    t.forEach((t) => {
                        let i = 'object' != typeof t ? t : t.name,
                            r = 'object' != typeof t ? { expires: 365 } : t.options || { expires: 365 },
                            n = e.get(i);
                        null != n && e.set(i, n, r);
                    });
            }
            function p(e) {
                let { name: t, group: i, value: r } = e;
                return r && 0 !== Object.keys(r).length
                    ? r.title
                        ? { [t]: { group: i, value: { ...r, title: i } } }
                        : { [t]: { group: i, value: { title: i, value: r } } }
                    : { [t]: { group: i, value: { title: i } } };
            }
        },
        53892: (e, t, i) => {
            'use strict';
            i.d(t, { n: () => r });
            let r = {
                MIXES: 'pages/mixes',
                TAG: 'pages/tag',
                GENRES: 'pages/genres',
                PROMOLANDING: 'pages/promolanding',
                MUSIC_HISTORY: 'pages/music-history',
                POST: 'pages/post',
                PLAYLIST_PERSONAL: 'pages/playlist-personal',
                MY_MUSIC: 'pages/my-music',
                FAVORITE_TRACKS: 'pages/favorite-tracks',
                CONCERTS_DETAILS: 'pages/concerts-details',
                LANDING_PROMO_PREVIEW: 'pages/landing-promo-preview',
                LABEL: 'pages/label',
                GENRE: 'pages/genre',
                CHART: 'pages/chart',
            };
        },
        54243: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => a });
            var r = i(88800),
                n = i(4370),
                s = i(15077),
                l = i(42729);
            let a = (e) => {
                let { artist: t, closeToast: i } = e;
                return (0, r.jsx)(l.O, {
                    closeToast: i,
                    entityVariant: s.c.ARTIST,
                    entityUrl: t.url,
                    collectionUrl: n.Z.collectionArtists.href,
                    coverUri: t.coverUri,
                    entityTitle: t.name,
                    isLiked: t.isLiked,
                });
            };
        },
        54667: (e, t, i) => {
            'use strict';
            var r;
            (i.d(t, { S: () => r }),
                (function (e) {
                    ((e.TRACK = 'track'),
                        (e.MUSIC = 'music'),
                        (e.NOISE = 'noise'),
                        (e.PODCAST = 'podcast-episode'),
                        (e.COMMENT = 'comment'),
                        (e.ARTICLE = 'article'),
                        (e.ASMR = 'asmr'),
                        (e.RADIO = 'radio'),
                        (e.SHOW = 'show'),
                        (e.LECTURE = 'lecture'),
                        (e.FAIRY_TALE = 'fairy-tale'),
                        (e.AUDIOBOOK = 'audiobook'),
                        (e.POETRY = 'poetry'));
                })(r || (r = {})));
        },
        56117: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => u });
            var r = i(88800),
                n = i(84961),
                s = i(88969),
                l = i(17392),
                a = i(52300),
                o = i(19934),
                c = i(72288);
            let u = (0, n.PA)((e) => {
                let { isDisliked: t, onClick: i, disabled: n, className: u } = e,
                    { user: d } = (0, c.g)();
                return (0, r.jsx)(o.Dr, {
                    onClick: i,
                    className: u,
                    icon: (0, r.jsx)(a.I, { variant: t ? 'disliked' : 'dislike', size: 'xxs' }),
                    role: 'menuitemcheckbox',
                    'aria-checked': t,
                    disabled: n || !d.isAuthorized,
                    'data-test-id': l.S7.CONTEXT_MENU_DISLIKE_BUTTON,
                    children: (0, r.jsx)(s.A, { id: 'interface-actions.do-not-like' }),
                });
            });
        },
        57285: (e, t, i) => {
            'use strict';
            i.d(t, { n: () => r });
            let r = (e) => ({ available: !!(null == e ? void 0 : e.available) });
        },
        57344: (e) => {
            e.exports = { root: 'PostShimmer_root__MlLkY' };
        },
        57448: (e, t, i) => {
            'use strict';
            i.d(t, { f: () => s });
            var r = i(4086),
                n = i(41928);
            let s = () => {
                let e = (0, n.N)(),
                    t = e.get(r.$I),
                    i = e.get(r.EN),
                    s = e.get(r.N1),
                    l = e.get(r._1),
                    a = e.get(r.V3),
                    o = e.get(r.Lb),
                    c = e.get(r.wK),
                    u = e.get(r.tz),
                    d = e.get(r.$8),
                    g = e.get(r.Oo),
                    m = e.get(r.X4),
                    p = e.get(r.O9),
                    v = e.get(r.E),
                    y = e.get(r.wH),
                    _ = e.get(r.ok),
                    h = e.get(r.X8),
                    b = e.get(r.yq),
                    f = e.get(r.NN),
                    T = e.get(r.qN),
                    k = e.get(r.ro),
                    A = e.get(r.nM),
                    x = e.get(r.Ut),
                    P = e.get(r.K1),
                    I = e.get(r.eu),
                    C = e.get(r.SD),
                    S = e.get(r.aE),
                    L = e.get(r.ki),
                    K = e.get(r.c9),
                    O = e.get(r.en),
                    j = e.get(r.jQ),
                    E = e.get(r.cZ),
                    N = e.get(r.Zl),
                    R = e.get(r.CN),
                    w = e.get(r.P1),
                    M = e.get(r.zj),
                    D = e.get(r.re),
                    U = e.get(r.JM),
                    B = e.get(r.Lk),
                    F = e.get(r.$$),
                    z = e.get(r.sv),
                    W = e.get(r.gd),
                    G = e.get(r.Ez),
                    H = e.get(r.u2),
                    Y = e.get(r.TD),
                    V = e.get(r.dh),
                    $ = e.get(r.LC),
                    q = e.get(r.PL),
                    X = e.get(r.DT);
                return {
                    accountResource: t,
                    afterTrackResource: i,
                    disclaimersResource: s,
                    usersResource: l,
                    landingResource: a,
                    landing3Resource: o,
                    landingBlocksResource: c,
                    albumResource: u,
                    libraryResource: d,
                    tracksResource: g,
                    topResource: m,
                    artistsResource: p,
                    slidesResource: v,
                    redAlertResource: y,
                    rotorResource: _,
                    waveResource: h,
                    searchResource: b,
                    searchPlaylistResource: f,
                    playlistResource: T,
                    playlistsResource: k,
                    pinResource: A,
                    metatagsResource: x,
                    tagResource: P,
                    feedResource: I,
                    wizard3Resource: C,
                    pinsResource: S,
                    musicHistoryResource: L,
                    dynamicPagesResource: K,
                    chartResource: O,
                    clipsResource: j,
                    lyricViewsResource: E,
                    nonMusicResource: N,
                    donationResource: R,
                    loaderResource: w,
                    lumenResource: M,
                    prefixlessResource: D,
                    streamsResource: U,
                    filtersResource: B,
                    ugcResource: F,
                    collectionResource: z,
                    adsResource: W,
                    personalResource: G,
                    familyResource: H,
                    childrenLandingResource: Y,
                    promoResource: V,
                    telemetryResource: $,
                    labelsResource: q,
                    concertsResource: X,
                    wordsResource: e.get(r.dA),
                    wheelResource: e.get(r.$Y),
                };
            };
        },
        58040: (e) => {
            e.exports = {
                root: 'PostPage_root__Orhf7',
                scrollableContainer: 'PostPage_scrollableContainer__iV9Bo',
                scrollContainer: 'PostPage_scrollContainer__zrIrH',
                important: 'PostPage_important__qUlED',
                container: 'PostPage_container__orSfz',
                shimmerTitle: 'PostPage_shimmerTitle__EeFCD',
            };
        },
        59497: (e, t, i) => {
            'use strict';
            i.d(t, { X: () => s });
            var r = i(5120),
                n = i(74773);
            let s = r.gK.model('LoadingState', { loadingState: r.gK.enumeration(Object.values(n.G)) }).views((e) => ({
                get isNeededToLoad() {
                    return e.loadingState === n.G.IDLE;
                },
                get isLoading() {
                    return e.loadingState === n.G.PENDING;
                },
                get isResolved() {
                    return e.loadingState === n.G.RESOLVE;
                },
                get isRejected() {
                    return e.loadingState === n.G.REJECT;
                },
            }));
        },
        60385: (e, t, i) => {
            'use strict';
            var r;
            (i.d(t, { L: () => r }),
                (function (e) {
                    ((e.PUBLIC = 'public'), (e.PRIVATE = 'private'));
                })(r || (r = {})));
        },
        61499: (e, t, i) => {
            'use strict';
            var r;
            (i.d(t, { K: () => r }),
                (function (e) {
                    ((e.EXPLICIT = 'explicit'), (e.CLEAN = 'clean'));
                })(r || (r = {})));
        },
        62390: (e, t, i) => {
            'use strict';
            i.d(t, { I: () => s });
            var r = i(5120),
                n = i(13607);
            let s = r.gK.model('Chart', { position: r.gK.maybe(r.gK.number), progress: r.gK.maybe(r.gK.enumeration(Object.values(n._))) });
        },
        62697: (e, t, i) => {
            'use strict';
            i.d(t, { E: () => c });
            var r = i(5120),
                n = i(62837),
                s = i(61499),
                l = i(54667),
                a = i(20775),
                o = i(81828);
            let c = r.gK
                .model('ExplicitModel', {
                    contentWarning: r.gK.maybe(r.gK.enumeration(Object.values(s.K))),
                    trackType: r.gK.maybe(r.gK.enumeration(Object.values(l.S))),
                    disclaimers: r.gK.maybe(r.gK.frozen()),
                    resolvedDisclaimers: r.gK.maybe(r.gK.frozen()),
                })
                .views((e) => ({
                    get isExplicit() {
                        return (0, o.A)(e.contentWarning);
                    },
                    get explicitDisclaimer() {
                        if (!(0, r._n)(e) || !e.disclaimers) return null;
                        return (0, n.DQ)(e.disclaimers);
                    },
                    get hasModalDisclaimer() {
                        if (!e.disclaimers) return !1;
                        return (0, n.Ve)(e.disclaimers, n.Yw.MODAL);
                    },
                    getIsLegalRejected: (t) => !!(0, r._n)(e) && (0, a.x)(t, e.disclaimers),
                    getIsUnsafeLegal(t) {
                        return !!(0, r._n)(e) && !!e.disclaimers && t && this.hasModalDisclaimer;
                    },
                    get isForeignAgent() {
                        if (!(0, r._n)(e) || !e.disclaimers) return !1;
                        return (0, n.Ve)(e.disclaimers, n.Yw.FOREIGN_AGENT);
                    },
                    get resolvedForeignAgentData() {
                        var t;
                        if (!e.resolvedDisclaimers) return null;
                        let i = e.resolvedDisclaimers[n.Yw.FOREIGN_AGENT];
                        return null != (t = null == i ? void 0 : i[0]) ? t : null;
                    },
                    get resolvedDescriptionTexts() {
                        if (!e.resolvedDisclaimers) return null;
                        let t = e.resolvedDisclaimers[n.Yw.DESCRIPTION_TEXT];
                        if (!t || 0 === t.length) return null;
                        let i = [];
                        for (let e of t) e.title && i.push(e.title);
                        return i.length > 0 ? i : null;
                    },
                    get resolvedModalData() {
                        var i;
                        if (!e.resolvedDisclaimers) return null;
                        let t = e.resolvedDisclaimers[n.Yw.MODAL];
                        return null != (i = null == t ? void 0 : t[0]) ? i : null;
                    },
                }))
                .actions((e) => {
                    let { disclaimerDictionary: t, modelActionsLogger: i } = (0, r._$)(e),
                        s = (0, r.L3)(function* (n) {
                            try {
                                if (!(0, r._n)(e) || !e.disclaimers) return null;
                                let i = yield t.resolveByType(e.disclaimers, n);
                                if (0 === i.length) return null;
                                return i;
                            } catch (e) {
                                return (i.error(e), null);
                            }
                        });
                    return {
                        getDisclaimerData: (0, r.L3)(function* (e) {
                            return yield s(e);
                        }),
                        getModalDisclaimerData: (0, r.L3)(function* () {
                            var e;
                            let t = yield s(n.Yw.MODAL);
                            return t && null != (e = t[0]) ? e : null;
                        }),
                        getForeignAgentDisclaimerData: (0, r.L3)(function* () {
                            var e;
                            let t = yield s(n.Yw.FOREIGN_AGENT);
                            return t && null != (e = t[0]) ? e : null;
                        }),
                        getDescriptionTexts: (0, r.L3)(function* () {
                            if (e.resolvedDescriptionTexts) return e.resolvedDescriptionTexts;
                            let t = yield s(n.Yw.DESCRIPTION_TEXT);
                            if (!t) return null;
                            let i = [];
                            for (let e of t) e.title && i.push(e.title);
                            return i.length > 0 ? i : null;
                        }),
                        resolveAllDisclaimers: (0, r.L3)(function* () {
                            if ((0, r._n)(e) && e.disclaimers && 0 !== e.disclaimers.length)
                                try {
                                    let i = yield t.resolveAll(e.disclaimers);
                                    e.resolvedDisclaimers = (0, r.wg)(i);
                                } catch (e) {
                                    i.error(e);
                                }
                        }),
                    };
                });
        },
        63425: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => n });
            var r = i(5120);
            let n = r.gK.model('Cover', { uri: r.gK.maybe(r.gK.string), color: r.gK.maybe(r.gK.string), videoUrl: r.gK.maybe(r.gK.string) });
        },
        64207: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => m });
            var r = i(88800),
                n = i(96706),
                s = i(53548),
                l = i(2058),
                a = i(79390),
                o = i(29595),
                c = i(74965),
                u = i(72288),
                d = i(66943),
                g = i(54243);
            let m = (e) => {
                let { user: t } = (0, u.g)(),
                    { notify: i } = (0, c.l)(),
                    [m, p] = (0, s.useState)(!1),
                    { formatMessage: v } = (0, l.A)();
                return (0, s.useCallback)(async () => {
                    if (!e) return;
                    if (!t.isAuthorized) return void i((0, r.jsx)(d.h, { error: v({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                    if (m) return;
                    let s = { ...(0, n.HO)(e), isLiked: !e.isLiked };
                    p(!0);
                    let l = await e.toggleLike();
                    (p(!1),
                        l === a.f.OK
                            ? i((0, r.jsx)(g.T, { artist: s }), { containerId: o.u.INFO })
                            : i((0, r.jsx)(d.h, { error: v({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR }));
                }, [e, t.isAuthorized, m, v, i]);
            };
        },
        64247: (e, t, i) => {
            'use strict';
            i.d(t, { l: () => l });
            var r = i(88800),
                n = i(15077),
                s = i(33719);
            let l = (e) => {
                let { artist: t, closeToast: i } = e;
                return (0, r.jsx)(s.k, {
                    closeToast: i,
                    entityVariant: n.c.ARTIST,
                    coverUri: t.coverUri,
                    entityUrl: t.url,
                    entityTitle: t.name,
                    isPinned: t.isPinned,
                    radius: 'round',
                });
            };
        },
        65523: (e, t, i) => {
            'use strict';
            i.d(t, { U: () => a });
            var r = i(4086),
                n = i(41928),
                s = i(44084);
            let l = new WeakMap(),
                a = () =>
                    ((e) => {
                        if (e instanceof s.r) return e;
                        let t = l.get(e);
                        if (t) return t;
                        let i = {
                            log: (t, i) => e.info(t, i),
                            trace: (t, i) => e.trace(t, i),
                            debug: (t, i) => e.debug(t, i),
                            info: (t, i) => e.info(t, i),
                            warn: (t, i) => e.warn(t, i),
                            error: (t, i) => e.error(t, i),
                            fatal: (t, i) => e.fatal(t, i),
                            child: (t) => e.child(t),
                        };
                        return (l.set(e, i), i);
                    })((0, n.N)().get(r.Zf));
        },
        67318: (e, t, i) => {
            'use strict';
            i.d(t, { Y: () => r });
            var r = (function (e) {
                return ((e.OK = 'ok'), (e.ERROR = 'error'), (e.RELOAD = 'reload'), e);
            })({});
        },
        69631: (e) => {
            e.exports = { root: 'PostAlbums_root__u2a1q', content: 'PostAlbums_content__uMSez' };
        },
        70003: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => s });
            var r = i(5120),
                n = i(53548);
            let s = (e) => {
                let { createStore: t, getPendingPatchBatches: i, patchesUpdatedEventName: s } = e,
                    l = (0, n.useRef)([]),
                    [a] = (0, n.useState)(() => {
                        let e = t();
                        for (let t of i()) (0, r.X6)(e, t);
                        return e;
                    });
                return (
                    (0, n.useLayoutEffect)(() => {
                        let e = () => {
                            for (let e of i()) (0, r.X6)(a, e);
                        };
                        return (e(), window.addEventListener(s, e), () => window.removeEventListener(s, e));
                    }, [i, s, a]),
                    { store: a, patchesRef: l }
                );
            };
        },
        70621: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => o });
            var r = i(53548),
                n = i(63582),
                s = i(245),
                l = i(22681),
                a = i(56374);
            let o = (0, n.n)({ event: 'LandingBlock.ActionPerformed', kind: 'hook', requiredScopes: ['screen', 'block', 'object'] }, () => {
                let e = (0, s.N)(),
                    t = (0, l.w)(),
                    i = (0, r.useMemo)(() => (t ? e.createBlockReporter(t.snapshot) : null), [e, t]);
                return (0, a.c)((e) => {
                    t?.object && i && i.actionPerformed({ ...e, viewUuid: (t.object.activeViewSession ?? t.object.viewSession).start() });
                });
            });
        },
        76903: (e, t, i) => {
            'use strict';
            i.d(t, { a: () => d });
            var r = i(88800),
                n = i(53548),
                s = i(53534),
                l = i(63582),
                a = i(245);
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
                                r = () => {
                                    t ||
                                        ((t = !0),
                                        queueMicrotask(() => {
                                            try {
                                                i();
                                            } finally {
                                                ((t = !1), e.length > 0 && r());
                                            }
                                        }));
                                };
                            return {
                                open: (e) => {
                                    (i(), e());
                                },
                                defer: (t) => {
                                    (e.push(t), r());
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
            var u = i(87999);
            let d = (0, l.B)(
                { kind: 'provider', requiredProps: ['pageId'], pendingProps: ['mainObjectType', 'mainObjectId'], scope: 'screen' },
                ({ children: e, ...t }) => {
                    let i = (0, a.N)(),
                        l = ((e) =>
                            (!Object.hasOwn(e, 'mainObjectType') || void 0 !== e.mainObjectType) &&
                            ('string' == typeof e.mainObjectId ||
                                (!Object.hasOwn(e, 'mainObjectId') && (!Object.hasOwn(e, 'mainObjectType') || e.mainObjectType === u.DomainObjectType.NonApplicable))))(
                            t,
                        ),
                        [o, d] = (0, n.useState)(() => {
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
                        let n = new c(i.createScreenSession().screenViewUuid, i),
                            a = { client: i, input: t, isReady: l, scope: l ? i.createScreenScope(t, n) : null, session: n };
                        return (d(a), (0, r.jsx)(s.k, { value: a, children: e }));
                    }
                    if (
                        o.isReady !== l ||
                        o.input.displayReasonId !== t.displayReasonId ||
                        o.input.pageIdForFrom !== t.pageIdForFrom ||
                        o.input.pagePlacement !== t.pagePlacement ||
                        o.input.pageStyle !== t.pageStyle
                    ) {
                        let n = { ...o, input: t, isReady: l, scope: l ? i.createScreenScope(t, o.session) : null };
                        return (d(n), (0, r.jsx)(s.k, { value: n, children: e }));
                    }
                    return (0, r.jsx)(s.k, { value: o, children: e });
                },
            );
        },
        77455: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => g });
            var r = i(88800),
                n = i(96706),
                s = i(53548),
                l = i(2058),
                a = i(29595),
                o = i(74965),
                c = i(72288),
                u = i(66943),
                d = i(64247);
            let g = (e) => {
                let { user: t } = (0, c.g)(),
                    { notify: i } = (0, o.l)(),
                    { formatMessage: g } = (0, l.A)(),
                    [m, p] = (0, s.useState)(!1);
                return (0, s.useCallback)(async () => {
                    if (!e) return;
                    if (!t.isAuthorized) return void i((0, r.jsx)(u.h, { error: g({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: a.u.ERROR });
                    if (m) return;
                    let s = { ...(0, n.HO)(e), isPinned: !e.isPinned };
                    p(!0);
                    let l = await e.togglePin();
                    (p(!1),
                        l
                            ? i((0, r.jsx)(d.l, { artist: s }), { containerId: a.u.INFO })
                            : i((0, r.jsx)(u.h, { error: g({ id: 'error-messages.error-during-action' }) }), { containerId: a.u.ERROR }));
                }, [e, t.isAuthorized, m, g, i]);
            };
        },
        78460: (e, t, i) => {
            'use strict';
            i.d(t, { I: () => s });
            var r = i(5120),
                n = i(90544);
            let s = i(83176).Z.props({ artists: r.gK.maybe(r.gK.array(n.P)) });
        },
        81592: (e, t, i) => {
            'use strict';
            i.d(t, { v: () => r });
            let r = (e) => {
                var t, i;
                return {
                    id: String(e.id),
                    name: e.name,
                    various: e.various,
                    isComposer: e.composer,
                    isAvailable: null == (i = e.available) || i,
                    disclaimers: e.disclaimers,
                    coverUri: (null == (t = e.cover) ? void 0 : t.uri) ?? e.coverUri ?? e.ogImage,
                };
            };
        },
        81828: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => n });
            var r = i(61499);
            let n = (e) => e === r.K.EXPLICIT;
        },
        83176: (e, t, i) => {
            'use strict';
            i.d(t, { Z: () => s });
            var r = i(5120);
            let n = r.gK.model('TrackIdModel', { id: r.gK.union(r.gK.string, r.gK.number), albumId: r.gK.maybe(r.gK.number), timestamp: r.gK.maybe(r.gK.string) }),
                s = i(39339)
                    .$.props({ tracks: r.gK.maybe(r.gK.array(n)) })
                    .actions((e) => ({ getKey: (t) => ''.concat(t, '_').concat(e.id) }));
        },
        83890: (e, t, i) => {
            'use strict';
            i.d(t, { p: () => s });
            var r = i(5120),
                n = i(41917);
            let s = (e) => {
                let t = (0, n.m)(e);
                return (0, r.wg)(t);
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
            i.d(t, { K: () => m });
            var r = i(88800),
                n = i(96706),
                s = i(53548),
                l = i(2058),
                a = i(79390),
                o = i(29595),
                c = i(74965),
                u = i(72288),
                d = i(66943),
                g = i(30832);
            let m = (e) => {
                let { user: t } = (0, u.g)(),
                    { notify: i } = (0, c.l)(),
                    [m, p] = (0, s.useState)(!1),
                    { formatMessage: v } = (0, l.A)();
                return (0, s.useCallback)(async () => {
                    if (!t.isAuthorized) return void i((0, r.jsx)(d.h, { error: v({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                    if (m) return;
                    let s = { ...(0, n.HO)(e), url: e.url, isLiked: !e.isLiked };
                    p(!0);
                    let l = await e.toggleLike();
                    (p(!1),
                        l === a.f.OK
                            ? i((0, r.jsx)(g.T, { playlist: s }), { containerId: o.u.INFO })
                            : i((0, r.jsx)(d.h, { error: v({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR }));
                }, [t.isAuthorized, m, e, v, i]);
            };
        },
        88943: (e, t, i) => {
            'use strict';
            i.d(t, { i: () => n });
            var r = i(42078);
            let n = (e) => ''.concat(r._.ALBUM_ITEM).concat(e);
        },
        89108: (e, t, i) => {
            'use strict';
            i.d(t, { O: () => n, s: () => r });
            let r = 'yMusicStatePatchesUpdated',
                n = 'yMusicPageStatePatchesUpdated';
        },
        89625: (e, t, i) => {
            'use strict';
            i.d(t, { G: () => o });
            var r = i(48109),
                n = i(31510),
                s = i(57285),
                l = i(81592),
                a = i(53399);
            let o = (e) => {
                var t;
                return {
                    ...(0, l.v)(e),
                    decomposed: (0, a.m)(e.decomposed),
                    coverType: null == (t = e.cover) ? void 0 : t.type,
                    averageColor: (0, r.Q)(e.derivedColors),
                    counts: e.counts ? ((e) => ({ albums: e.directAlbums, compilations: e.alsoAlbums, tracks: e.tracks }))(e.counts) : void 0,
                    trailer: (0, s.n)(e.trailer),
                    cutoutCover: e.cutoutCover ? (0, n.e)(e.cutoutCover) : void 0,
                };
            };
        },
        90544: (e, t, i) => {
            'use strict';
            i.d(t, { P: () => _ });
            var r = i(5120),
                n = i(27169),
                s = i(79390),
                l = i(50633),
                a = i(85587),
                o = i(63425),
                c = i(62697),
                u = i(23744),
                d = i(97335),
                g = i(35994),
                m = i(6215);
            let p = r.gK
                    .compose(
                        r.gK.model('BaseArtist', {
                            id: r.gK.string,
                            name: r.gK.string,
                            various: r.gK.maybe(r.gK.boolean),
                            isComposer: r.gK.maybe(r.gK.boolean),
                            isAvailable: r.gK.boolean,
                            trailer: r.gK.maybe(u.a),
                            coverUri: r.gK.maybe(r.gK.string),
                            coverType: r.gK.maybe(r.gK.string),
                            cutoutCover: r.gK.maybe(o.$),
                        }),
                        d.t,
                        c.E,
                    )
                    .views((e) => ({
                        get key() {
                            return ''.concat(e.id, '_').concat(e.name);
                        },
                        get url() {
                            let { href: t } = (0, g.R)(e.id);
                            return t;
                        },
                        get isLiked() {
                            if (!(0, r._n)(e)) return !1;
                            let { library: t } = (0, l.M)(e);
                            return t.isArtistLiked(e.id);
                        },
                        get isDisliked() {
                            if (!(0, r._n)(e)) return !1;
                            let { library: t } = (0, l.M)(e);
                            return t.isArtistDisliked(e.id);
                        },
                        get pinId() {
                            return (0, m.E)(e.id);
                        },
                        get seeds() {
                            return ['artist:'.concat(e.id)];
                        },
                        get isPinned() {
                            if (!(0, r._n)(e)) return !1;
                            let { pinsCollection: t } = (0, l.M)(e);
                            return t.isPinned(this.pinId);
                        },
                        // for PulseSync: BEGIN guard artist legal views after node destruction
                        get isLegalRejected() {
                            if (!(0, r._n)(e)) return !1;
                            return e.getIsLegalRejected(e.isAvailable);
                        },
                        get isUnsafeLegal() {
                            if (!(0, r._n)(e)) return !1;
                            return e.getIsUnsafeLegal(e.isAvailable);
                        },
                        // for PulseSync: END guard artist legal views after node destruction
                        get isCoverFromAlbum() {
                            if (!(0, r._n)(e)) return !1;
                            return e.coverType === n.Q.FROM_ALBUM_COVER;
                        },
                        getDisclaimerEntityRef: (t) => ({ entityType: null != t ? t : a.n.ARTIST, entityId: e.id }),
                    }))
                    .actions((e) => ({
                        toggleLike: (0, r.L3)(function* () {
                            if (!(0, r._n)(e)) return;
                            let { library: t, user: i } = (0, l.M)(e);
                            if (i.isAuthorized) {
                                let n = yield t.toggleArtistLike({ entityId: e.id, userId: i.account.data.uid });
                                return ((0, r._n)(e) && n === s.f.OK && (e.isLiked ? e.likePending() : e.unlikePending()), n);
                            }
                        }),
                        toggleDislike() {
                            if (!(0, r._n)(e)) return;
                            let { library: t, user: i } = (0, l.M)(e);
                            return t.toggleArtistDislike({ entityId: e.id, userId: i.account.data.uid });
                        },
                        togglePin: (0, r.L3)(function* () {
                            if (!(0, r._n)(e)) return;
                            let { pinsCollection: t, user: i } = (0, l.M)(e);
                            if (i.isAuthorized) return yield t.toggleArtistPin({ id: e.id }, e.pinId);
                        }),
                        getKey: (t) => ''.concat(t, '_').concat(e.id),
                    }))
                    .actions(i(999994).metadataModelActions('artist')),
                v = r.gK.model('Counts', { albums: r.gK.number, compilations: r.gK.number, tracks: r.gK.number }),
                y = p.props({ separator: r.gK.maybe(r.gK.string) }),
                _ = p.props({ decomposed: r.gK.maybe(r.gK.array(y)), averageColor: r.gK.maybe(r.gK.string), counts: r.gK.maybe(v) }).views((e) => ({
                    get isAvailableForPlaying() {
                        if (void 0 === e.counts) return !0;
                        return e.counts.tracks > 0;
                    },
                }));
        },
        91959: (e, t, i) => {
            'use strict';
            i.d(t, { S: () => n });
            var r = i(58217);
            let n = (e) => {
                let { artist: t, callback: i, shouldHistoryBack: n } = e;
                return (0, r.l)({ entity: t, callback: i, modalBehavior: void 0 === n ? void 0 : { shouldHistoryBack: n }, preventDefaultWhenSafe: !0 });
            };
        },
        92925: (e) => {
            e.exports = { root: 'PostArtists_root__Zxmjq', content: 'PostArtists_content__JzGOH' };
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
        96856: (e) => {
            e.exports = {
                root: 'UnstableMusicScreen_root__YblW2',
                content: 'UnstableMusicScreen_content__VnJFc',
                content_shrink: 'UnstableMusicScreen_content_shrink__0bG5x',
                navigation: 'UnstableMusicScreen_navigation___dOLr',
                navigation_desktop: 'UnstableMusicScreen_navigation_desktop__mM97H',
                image: 'UnstableMusicScreen_image__85q4P',
                message: 'UnstableMusicScreen_message__Z0HNs',
                title: 'UnstableMusicScreen_title__EdP6Y',
                text: 'UnstableMusicScreen_text__Bc7HH',
                button: 'UnstableMusicScreen_button__UQBy2',
                buttonText: 'UnstableMusicScreen_buttonText__kM_WM',
            };
        },
        97335: (e, t, i) => {
            'use strict';
            i.d(t, { t: () => n });
            var r = i(5120);
            let n = r.gK
                .model('LikesCount', { likesCount: r.gK.maybe(r.gK.number), pendingLikesCount: r.gK.optional(r.gK.number, 0) })
                .views((e) => ({
                    get actualLikesCount() {
                        if ('number' == typeof e.likesCount) {
                            var t;
                            return e.likesCount + (null != (t = e.pendingLikesCount) ? t : 0);
                        }
                        return 0;
                    },
                }))
                .actions((e) => ({
                    likePending() {
                        e.pendingLikesCount += 1;
                    },
                    unlikePending() {
                        e.pendingLikesCount -= 1;
                    },
                }));
        },
        98138: (e, t, i) => {
            'use strict';
            i.d(t, { d: () => s });
            var r = i(5120),
                n = i(89625);
            let s = (e) => {
                let t = (0, n.G)(e);
                return (0, r.wg)(t);
            };
        },
        99007: (e, t, i) => {
            'use strict';
            i.d(t, { j: () => r });
            var r = (function (e) {
                return ((e[(e.LIKE = 3)] = 'LIKE'), (e[(e.CHART = 1076)] = 'CHART'), e);
            })({});
        },
        99211: (e, t, i) => {
            'use strict';
            i.d(t, { j: () => l });
            var r = i(5120),
                n = i(48109),
                s = i(12906);
            let l = (e) => {
                var t, i, l, a, o;
                e = e || {};
                let c = (0, s.m)(e.trailer);
                return (0, r.wg)({
                    isAvailable: null == (a = e.available) || a,
                    uid: e.uid,
                    uuid: null != (o = e.playlistUuid) ? o : '',
                    kind: e.kind,
                    title: e.title,
                    coverUri: (null == e || null == (t = e.cover) ? void 0 : t.uri) || (null == e || null == (l = e.cover) || null == (i = l.itemsUri) ? void 0 : i[0]),
                    tracksCount: e.trackCount,
                    likesCount: e.likesCount,
                    averageColor: (0, n.Q)(null == e ? void 0 : e.derivedColors),
                    revision: e.revision,
                    generatedPlaylistType: e.generatedPlaylistType,
                    personalColor: e.personalColor,
                    visibility: e.visibility,
                    trailer: c,
                });
            };
        },
    },
    (e) => {
        (e.O(
            0,
            [
                7437, 4814, 9801, 9079, 1833, 3469, 8194, 1191, 6676, 1480, 6706, 4771, 1311, 8832, 6904, 4495, 2058, 3578, 8628, 4975, 4827, 8283, 1800, 1423, 4732,
                9087, 3979, 6719, 1928, 9091, 9124, 900, 9934, 2470, 7670, 4441, 9337, 2088, 79, 763, 2670, 7358,
            ],
            () => e((e.s = 40363)),
        ),
            (_N_E = e.O()));
    },
]);
