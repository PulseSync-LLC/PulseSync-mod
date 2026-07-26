(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3069],
    {
        356: (e) => {
            e.exports = {
                message: 'NotificationDislike_message__RoxZH',
                text: 'NotificationDislike_text__fJHts',
                cover: 'NotificationDislike_cover__N5Oqu',
                image: 'NotificationDislike_image__jn4_4',
            };
        },
        1045: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => n });
            let n = 100;
        },
        2047: (e, t, i) => {
            'use strict';
            var n;
            i.d(t, { L: () => n }),
                (function (e) {
                    (e.PUBLIC = 'public'), (e.PRIVATE = 'private');
                })(n || (n = {}));
        },
        5482: (e, t, i) => {
            'use strict';
            i.d(t, { I: () => s });
            var n = i(60754),
                r = i(57367);
            let s = i(38396).Z.props({ artists: n.gK.maybe(n.gK.array(r.P)) });
        },
        5942: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => y });
            var n = i(32290),
                r = i(92708),
                s = i(55178),
                a = i(60900),
                l = i(63380),
                o = i(45477),
                c = i(75582),
                d = i(57594),
                u = i(90357),
                m = i(20472),
                _ = i(97647),
                g = i(97755);
            let p = (e) => {
                    let { artist: t, closeToast: i } = e;
                    return (0, n.jsx)(g.O, {
                        closeToast: i,
                        entityVariant: _.c.ARTIST,
                        entityUrl: t.url,
                        collectionUrl: m.Z.collectionArtists.href,
                        coverUri: t.coverUri,
                        entityTitle: t.name,
                        isLiked: t.isLiked,
                    });
                },
                y = (e) => {
                    let { user: t } = (0, d.g)(),
                        { notify: i } = (0, c.l)(),
                        [m, _] = (0, s.useState)(!1),
                        { formatMessage: g } = (0, a.A)();
                    return (0, s.useCallback)(async () => {
                        if (!e) return;
                        if (!t.isAuthorized)
                            return void i((0, n.jsx)(u.h, { error: g({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                        if (m) return;
                        let s = { ...(0, r.HO)(e), isLiked: !e.isLiked };
                        _(!0);
                        let a = await e.toggleLike();
                        _(!1),
                            a === l.f.OK
                                ? i((0, n.jsx)(p, { artist: s }), { containerId: o.u.INFO })
                                : i((0, n.jsx)(u.h, { error: g({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR });
                    }, [e, t.isAuthorized, m, g, i]);
                };
        },
        7474: (e, t, i) => {
            'use strict';
            i.d(t, { a: () => z });
            var n = i(32290),
                r = i(63618),
                s = i(96103),
                a = i(55178),
                l = i(60900),
                o = i(16172),
                c = i(21732),
                d = i(71483),
                u = i(91027),
                m = i(6752),
                _ = i(14934),
                g = i(82586),
                p = i(86269),
                y = i(71926),
                v = i(91853),
                h = i(5942),
                x = i(70390),
                k = i(71735),
                T = i(47745),
                A = i(2969),
                C = i(54391),
                P = i(23352),
                f = i(72396),
                I = i(5537),
                b = i(84062),
                L = i(28999),
                S = i(90169),
                E = i(57594),
                j = i(11323),
                N = i(92744),
                R = i(61258),
                O = i(10180),
                K = i(90326),
                w = i(29268),
                M = i(34925),
                B = i(80528),
                U = i(42048),
                D = i.n(U);
            let z = (0, s.PA)((e) => {
                let { artist: t, className: i, children: s, contentLinesCount: U, topTitleElement: z, bottomTitleElement: F } = e,
                    { ref: W, intersectionPropertyId: H } = (0, P.n)(),
                    {
                        trailer: G,
                        user: Y,
                        paywall: { modal: V },
                    } = (0, E.g)(),
                    { from: $, utmLink: X } = (0, f.f)({ contextId: t.id, contextType: d.K.Artist }),
                    { formatMessage: q } = (0, l.A)(),
                    [Z, J] = (0, a.useState)(!1),
                    [Q, ee] = (0, a.useState)(!1),
                    [et, ei] = (0, a.useState)(!1),
                    { sendLikeSearchFeedback: en, sendNavigateSearchFeedback: er, sendPlaySearchFeedback: es } = (0, L.z)(),
                    ea = (0, T.N)(),
                    el = (0, A.b)(),
                    eo = (0, h.K)(t),
                    ec = (0, x.A)(t),
                    { id: ed, name: eu, coverUri: em, isLiked: e_ } = t,
                    eg = (0, b.Z)(t.url),
                    [ep, ey] = (0, a.useState)(!1),
                    ev = (0, C.F)(),
                    eh = (0, k.P)(),
                    ex = (0, u.c)((e) => {
                        if ((e.stopPropagation(), eh())) return void e.preventDefault();
                        G.openArtistTrailer(t.id), ev(o.ky.Artist, t.id);
                    }),
                    ek = (0, a.useMemo)(() => {
                        let e = q({ id: 'entity-names.artist-name' }, { artistName: eu }),
                            t = e_ ? q({ id: 'entity-names.has-your-like' }) : '';
                        return ''.concat(e, ' ').concat(t);
                    }, [eu, e_, q]),
                    { isPlaying: eT, togglePlay: eA } = (0, S.D)({
                        playContextParams: { contextData: { type: d.K.Artist, meta: { id: Number(ed) }, from: $, utmLink: X }, loadContextMeta: !0 },
                    }),
                    eC = (0, v.S)({ artist: t, callback: eg }),
                    eP = (0, v.S)({ artist: t, callback: eA }),
                    ef = (0, u.c)((e) => {
                        null == er || er(), ea({ to: o.QT.ArtistScreen }), eC(e);
                    }),
                    eI = (0, I.N)(),
                    eb = (0, u.c)(() => {
                        if (!eh()) {
                            if (eI) return void V.open();
                            Z || eT || (J(!0), null == es || es()), eP(), el(!eT);
                        }
                    }),
                    eL = (0, u.c)(() => {
                        Q || e_ || (ee(!0), null == en || en()), eo();
                    }),
                    eS = (0, u.c)((e) => {
                        e.preventDefault(), e.stopPropagation();
                    }),
                    eE = (0, u.c)((e) => {
                        ei(e), ey(e);
                    }),
                    ej = (0, a.useMemo)(
                        () =>
                            (0, n.jsx)(
                                B.g,
                                {
                                    artist: t,
                                    onOpenChange: eE,
                                    open: et,
                                    onClick: eS,
                                    className: (0, r.$)(D().menuButton, D().control),
                                    size: 's',
                                    icon: (0, n.jsx)(g.I, { size: 'xxs', variant: 'more' }),
                                    'data-test-id': c.Kq.artist.ARTIST_CONTEXT_MENU_BUTTON,
                                },
                                t.getKey('ArtistContextMenu'),
                            ),
                        [t, eS, eE, et],
                    ),
                    eN = (0, a.useMemo)(() => {
                        var e;
                        if (null == t || null == (e = t.trailer) ? void 0 : e.isAvailable)
                            return (0, n.jsx)(
                                M.n,
                                {
                                    children: (0, n.jsx)(w.k, {
                                        className: (0, r.$)(D().trailerButton, D().control),
                                        radius: 'round',
                                        size: 's',
                                        iconSize: 'xxs',
                                        onClick: ex,
                                    }),
                                },
                                t.getKey('ArtistCardTrailerTooltip'),
                            );
                    }, [t, ex]),
                    eR = (0, a.useMemo)(
                        () =>
                            (0, n.jsx)(
                                O.O,
                                { onClick: ec, isPinned: t.isPinned, className: (0, r.$)(D().pinButton, D().control), withRipple: !1 },
                                t.getKey('PinButton'),
                            ),
                        [t, ec],
                    ),
                    eO = (0, m.L)(() => {
                        if (t.isAvailable)
                            return (0, n.jsx)(
                                _.hg,
                                {
                                    isVisible: et || ep,
                                    className: D().controls,
                                    radius: 'round',
                                    playControl: (0, n.jsx)(
                                        K.D,
                                        {
                                            buttonVariant: 'default',
                                            withHover: !1,
                                            className: (0, r.$)(D().playButton, D().control),
                                            iconSize: 'xl',
                                            variant: 'filled',
                                            onClick: eb,
                                            isPlaying: eT,
                                            disabled: !t.isAvailableForPlaying,
                                        },
                                        t.getKey('PlayButton'),
                                    ),
                                    likeControl: (0, n.jsx)(
                                        N.c,
                                        {
                                            className: (0, r.$)(D().likeButton, D().control),
                                            isLiked: e_,
                                            onClick: eL,
                                            variant: 'default',
                                            size: 's',
                                            iconSize: 'xxs',
                                            disabled: !Y.isAuthorized,
                                        },
                                        t.getKey('LikeButton'),
                                    ),
                                    menuControl: ej,
                                    pinControl: eR,
                                    trailerControl: eN,
                                },
                                t.getKey('ArtistCardControls'),
                            );
                    }),
                    eK = (0, a.useMemo)(
                        () =>
                            (0, n.jsx)(p.t, {
                                className: D().cover,
                                radius: 'round',
                                withShadow: !0,
                                'data-test-id': c.Kq.artist.ARTIST_CARD,
                                children: (0, n.jsxs)('div', {
                                    className: D().coverBlock,
                                    onClick: ef,
                                    children: [
                                        (0, n.jsx)(j.B, {
                                            className: D().image,
                                            src: em,
                                            size: 200,
                                            fit: 'cover',
                                            alt: ek,
                                            withAvatarReplace: !0,
                                            isAvailable: t.isAvailable,
                                            'aria-hidden': !0,
                                        }),
                                        eO,
                                    ],
                                }),
                            }),
                        [ef, em, ek, t.isAvailable, eO],
                    );
                return (0, n.jsx)(_.MN, {
                    ref: W,
                    className: (0, r.$)(D().root, i),
                    textPosition: 'center',
                    'aria-label': ek,
                    title: (0, n.jsxs)(n.Fragment, {
                        children: [
                            z,
                            (0, n.jsx)(y.HL, {
                                variant: 'div',
                                type: 'entity',
                                size: 's',
                                weight: 'medium',
                                lineClamp: 2,
                                children: (0, n.jsx)(R.N, {
                                    className: D().titleLink,
                                    href: t.url,
                                    'aria-label': ek,
                                    onClick: ef,
                                    'data-test-id': c.Kq.artist.ARTIST_TITLE,
                                    children: eu,
                                }),
                            }),
                            F,
                        ],
                    }),
                    srTitle: (0, n.jsx)(R.N, { href: t.url, onClick: ef, children: ek }),
                    'data-intersection-property-id': H,
                    contentLinesCount: U,
                    view: eK,
                    'data-test-id': c.Kq.artist.ARTIST_ITEM,
                    children: s,
                });
            });
        },
        9905: (e) => {
            e.exports = { root: 'PostAlbums_root__u2a1q', content: 'PostAlbums_content__uMSez' };
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
        12388: (e, t, i) => {
            'use strict';
            i.d(t, { J: () => l });
            var n = i(60754),
                r = i(87411),
                s = i(57367),
                a = i(44032);
            let l = r.G.props({ artists: n.gK.maybe(n.gK.array(s.P)), chart: n.gK.maybe(a.I) }).views((e) => ({
                get artistNames() {
                    var t;
                    return null == (t = e.artists) ? void 0 : t.map((e) => e.name).join(', ');
                },
                get artistName() {
                    var i, n, r, s;
                    if (null == (n = e.artists) || null == (i = n[0]) ? void 0 : i.various) return;
                    return null == (s = e.artists) || null == (r = s[0]) ? void 0 : r.name;
                },
                get artistIds() {
                    var a;
                    return null == (a = e.artists) ? void 0 : a.map((e) => e.id);
                },
                get artistId() {
                    var l, o;
                    return null == (o = e.artists) || null == (l = o[0]) ? void 0 : l.id;
                },
            }));
        },
        13931: (e, t, i) => {
            'use strict';
            i.d(t, { r: () => s });
            var n = i(55178),
                r = i(60900);
            let s = (e) => {
                let { formatMessage: t } = (0, r.A)();
                return (0, n.useMemo)(() => {
                    let i = '';
                    e.isLiked && !e.actualLikesCount
                        ? (i = t({ id: 'entity-names.has-your-like' }))
                        : 'number' == typeof e.actualLikesCount &&
                          (i =
                              e.actualLikesCount > 0
                                  ? t({ id: 'entity-names.likes-counter' }, { counter: e.actualLikesCount })
                                  : t({ id: 'entity-names.likes-counter-empty' }));
                    let n = t({ id: 'entity-names.playlist-name' }, { playlistName: e.title });
                    return ''.concat(n, ' ').concat(i);
                }, [t, e]);
            };
        },
        15910: (e) => {
            e.exports = { root: 'PostShimmer_root__MlLkY' };
        },
        19182: (e) => {
            e.exports = {
                root: 'PostPage_root__Orhf7',
                scrollableContainer: 'PostPage_scrollableContainer__iV9Bo',
                scrollContainer: 'PostPage_scrollContainer__zrIrH',
                important: 'PostPage_important__qUlED',
                container: 'PostPage_container__orSfz',
                shimmerTitle: 'PostPage_shimmerTitle__EeFCD',
            };
        },
        20168: (e, t, i) => {
            'use strict';
            i.d(t, { Y: () => n });
            var n = (function (e) {
                return (e.OK = 'ok'), (e.ERROR = 'error'), (e.RELOAD = 'reload'), e;
            })({});
        },
        20472: (e, t, i) => {
            'use strict';
            i.d(t, { Z: () => r });
            var n = i(36477);
            let r = {
                main: (0, n.u)('/'),
                chart: (0, n.u)('/chart'),
                chartPodcasts: (0, n.u)('/chart/podcasts'),
                collection: (0, n.u)('/collection'),
                collectionAlbums: (0, n.u)('/collection/albums'),
                collectionArtists: (0, n.u)('/collection/artists'),
                collectionClips: (0, n.u)('/collection/clips'),
                collectionDislikes: (0, n.u)('/collection/dislikes'),
                collectionKids: (0, n.u)('/collection/kids'),
                collectionKidsAlbums: (0, n.u)('/collection/kids/albums'),
                collectionKidsPlaylists: (0, n.u)('/collection/kids/playlists'),
                collectionKidsTracks: (0, n.u)('/collection/kids/tracks'),
                collectionNonMusic: (0, n.u)('/collection/non-music'),
                collectionNonMusicLiked: (0, n.u)('/collection/non-music/liked'),
                collectionVibeRooms: (0, n.u)('/collection/multivibes'),
                collectionPlaylists: (0, n.u)('/collection/playlists'),
                collectionPlaylistsCreated: (0, n.u)('/collection/playlists/created'),
                collectionPlaylistsLiked: (0, n.u)('/collection/playlists/liked'),
                collectionShelf: (0, n.u)('/collection/shelf'),
                collectionShelfLiked: (0, n.u)('/collection/shelf/liked'),
                collectionShelfNewEpisodes: (0, n.u)('/collection/shelf/new-episodes'),
                collectionShelfRecentlyPlayed: (0, n.u)('/collection/shelf/recently-played'),
                concerts: (0, n.u)('/concerts'),
                kids: (0, n.u)('/kids'),
                mixes: (0, n.u)('/mixes'),
                musicHistory: (0, n.u)('/music-history'),
                mymusic: (0, n.u)('/mymusic'),
                mymusicDownloadsTracks: (0, n.u)('/mymusic/downloads/tracks'),
                nonMusic: (0, n.u)('/non-music'),
                pay: (0, n.u)('/pay'),
                userSlides: (0, n.u)('/slides/user'),
                search: (0, n.u)('/search'),
                searchHistory: (0, n.u)('/search/history'),
                settings: (0, n.u)('/settings'),
                video: (0, n.u)('/video'),
            };
        },
        23491: (e, t, i) => {
            'use strict';
            i.r(t), i.d(t, { default: () => et });
            var n,
                r = i(32290),
                s = i(21916),
                a = i(55178),
                l = i(49259),
                o = i(45066),
                c = i(60754),
                d = i(87953);
            !(function (e) {
                (e.ALBUMS = 'albums'), (e.ARTISTS = 'artists'), (e.PLAYLISTS = 'playlists');
            })(n || (n = {}));
            var u = i(72428),
                m = i(12388),
                _ = i(5482),
                g = i(84060),
                p = i(57367),
                y = i(33229),
                v = i(49399),
                h = i(73715);
            let x = c.gK
                    .compose(
                        c.gK.model('PostPage', {
                            errorStatusCode: c.gK.maybe(c.gK.number),
                            title: c.gK.maybeNull(c.gK.string),
                            promotionType: c.gK.maybeNull(c.gK.enumeration(Object.values(n))),
                            artists: c.gK.maybe(c.gK.array(p.P)),
                            albums: c.gK.maybe(c.gK.array(m.J)),
                            playlists: c.gK.maybe(c.gK.array(_.I)),
                        }),
                        h.X,
                    )
                    .views((e) => {
                        let t = {
                            get isLoading() {
                                return e.isNeededToLoad || e.loadingState === v.G.PENDING;
                            },
                            get isNotFound() {
                                let t = e.errorStatusCode === d.X1.NOT_FOUND || e.errorStatusCode === d.X1.BAD_REQUEST;
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
                                { feedResource: n, modelActionsLogger: r } = (0, c._$)(e);
                            if (e.loadingState !== v.G.PENDING)
                                try {
                                    e.loadingState = v.G.PENDING;
                                    let t = yield n.getPromotionsById({ promoId: i });
                                    (e.title = t.title),
                                        (e.promotionType = t.promotionType),
                                        t.artists && t.artists.length > 0 && (e.artists = (0, c.wg)(t.artists.map(g.d))),
                                        t.albums && t.albums.length > 0 && (e.albums = (0, c.wg)(t.albums.map(u.p))),
                                        t.playlists &&
                                            t.playlists.length > 0 &&
                                            (e.playlists = (0, c.wg)(
                                                t.playlists.map((e) => {
                                                    let { playlist: t } = e;
                                                    return (0, y.j)(t);
                                                }),
                                            )),
                                        e.loadingState !== v.G.IDLE && (e.loadingState = v.G.RESOLVE);
                                } catch (t) {
                                    r.error(t),
                                        t instanceof d.GX &&
                                            (t.statusCode === d.X1.NOT_FOUND || t.statusCode === d.X1.BAD_REQUEST) &&
                                            (e.errorStatusCode = d.X1.NOT_FOUND),
                                        e.loadingState !== v.G.IDLE && (e.loadingState = v.G.REJECT);
                                }
                        }),
                        reset() {
                            (e.loadingState = v.G.IDLE), (e.title = null), (e.artists = (0, c.wg)([])), (e.albums = (0, c.wg)([]));
                        },
                    })),
                k = { loadingState: v.G.IDLE },
                { pageStoreProvider: T } = (0, l.W)({ createStore: (e) => x.create(k, e), patchKey: o.n.POST });
            var A = i(63618),
                C = i(96103),
                P = i(46049),
                f = i(79856),
                I = i(71926),
                b = i(64170),
                L = i(7999),
                S = i(48922),
                E = i(22714),
                j = i(83808),
                N = i(83920),
                R = i(3796),
                O = i(74694),
                K = i(89020),
                w = i(15910),
                M = i.n(w);
            let B = () => {
                let e = Array.from({ length: 20 }, (e, t) => {
                    let i = void 0 === e ? t : ''.concat(t, '-').concat(String(e));
                    return (0, r.jsx)(K.V, { isActive: !0 }, i);
                });
                return (0, r.jsx)('div', { className: M().root, children: e });
            };
            var U = i(19182),
                D = i.n(U),
                z = i(24170),
                F = i(9905),
                W = i.n(F);
            let H = (0, C.PA)((e) => {
                let { albums: t = [] } = e;
                return (0, r.jsx)('div', {
                    className: W().root,
                    children: (0, r.jsx)('div', {
                        className: W().content,
                        'aria-labelledby': 'post-page-header',
                        tabIndex: 0,
                        children: t.map((e) => (0, r.jsx)(z.a, { className: W().item, album: e, contentLinesCount: 3 }, e.id)),
                    }),
                });
            });
            var G = i(7474),
                Y = i(98503),
                V = i.n(Y);
            let $ = (0, C.PA)((e) => {
                let { artists: t = [] } = e;
                return (0, r.jsx)('div', {
                    className: V().root,
                    children: (0, r.jsx)('div', {
                        className: V().content,
                        'aria-labelledby': 'post-page-header',
                        tabIndex: 0,
                        children: t.map((e) => (0, r.jsx)(G.a, { className: V().item, artist: e, contentLinesCount: 3 }, e.id)),
                    }),
                });
            });
            var X = i(83460),
                q = i(79043),
                Z = i.n(q);
            let J = (0, C.PA)((e) => {
                    let { playlists: t = [] } = e;
                    return (0, r.jsx)('div', {
                        className: Z().root,
                        children: (0, r.jsx)('div', {
                            className: Z().content,
                            'aria-labelledby': 'post-page-header',
                            tabIndex: 0,
                            children: t.map((e) => (0, r.jsx)(X.B, { className: Z().item, playlist: e, contentLinesCount: 3 }, e.id)),
                        }),
                    });
                }),
                Q = (0, C.PA)((e) => {
                    let { promoId: t } = e,
                        i = (0, l.s)(o.n.POST),
                        c = (0, j.W)(),
                        { contentScrollRef: d, setContentScrollRef: u } = (0, N.g)();
                    i.isNotFound && (0, s.notFound)(), (0, R.J)(i.isResolved);
                    let m = (0, a.useMemo)(() => {
                        if (i.isLoading) return (0, r.jsx)(B, {});
                        switch (i.promotionType) {
                            case n.ARTISTS:
                                return (0, r.jsx)($, { artists: i.artists });
                            case n.ALBUMS:
                                return (0, r.jsx)(H, { albums: i.albums });
                            case n.PLAYLISTS:
                                return (0, r.jsx)(J, { playlists: i.playlists });
                            default:
                                (0, s.notFound)();
                        }
                    }, [i.albums, i.artists, i.isLoading, i.playlists, i.promotionType]);
                    return (t && i.isNeededToLoad && (0, a.use)(i.getData({ promoId: t })), i.isSomethingWrong)
                        ? (0, r.jsx)(b.SomethingWentWrong, {})
                        : (0, r.jsx)(E.n, {
                              pageId: S._Q.POST,
                              children: (0, r.jsx)(L.h, {
                                  scrollElement: d,
                                  outerTitle: i.title || void 0,
                                  children: (0, r.jsxs)('div', {
                                      className: D().root,
                                      children: [
                                          (0, r.jsx)(O.Y, {
                                              variant: O.V.TEXT,
                                              withForwardControl: !1,
                                              withBackwardControl: c.canBack,
                                              children: i.title
                                                  ? (0, r.jsx)(I.DZ, { id: 'post-header', variant: 'h2', weight: 'bold', size: 'xl', lineClamp: 1, children: i.title })
                                                  : (0, r.jsx)(f.W, { className: D().shimmerTitle, radius: 'l' }),
                                          }),
                                          (0, r.jsx)(P.N, {
                                              containerClassName: (0, A.$)(D().scrollContainer, D().important),
                                              className: D().scrollableContainer,
                                              ref: u,
                                              children: (0, r.jsx)('div', { className: D().container, children: m }),
                                          }),
                                      ],
                                  }),
                              }),
                          });
                }),
                ee = () => {
                    let e = (0, j.W)();
                    return (0, r.jsx)(L.h, {
                        scrollElement: null,
                        children: (0, r.jsxs)('div', {
                            className: D().root,
                            children: [
                                (0, r.jsx)(O.Y, {
                                    variant: O.V.TEXT,
                                    withForwardControl: !1,
                                    withBackwardControl: e.canBack,
                                    children: (0, r.jsx)(f.W, { className: D().shimmerTitle, radius: 'l' }),
                                }),
                                (0, r.jsx)(P.N, {
                                    containerClassName: (0, A.$)(D().scrollContainer, D().important),
                                    className: D().scrollableContainer,
                                    children: (0, r.jsx)('div', { className: D().container, children: (0, r.jsx)(B, {}) }),
                                }),
                            ],
                        }),
                    });
                },
                et = () => {
                    let e = (0, s.useSearchParams)().get('promoId');
                    return (
                        e || (0, s.notFound)(),
                        (0, r.jsx)(T, { children: (0, r.jsx)(a.Suspense, { fallback: (0, r.jsx)(ee, {}), children: (0, r.jsx)(Q, { promoId: e }) }) })
                    );
                };
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
        33229: (e, t, i) => {
            'use strict';
            i.d(t, { j: () => a });
            var n = i(60754),
                r = i(93159),
                s = i(26544);
            let a = (e) => {
                var t, i, a, l, o;
                e = e || {};
                let c = (0, s.m)(e.trailer);
                return (0, n.wg)({
                    isAvailable: null == (l = e.available) || l,
                    uid: e.uid,
                    uuid: null != (o = e.playlistUuid) ? o : '',
                    kind: e.kind,
                    title: e.title,
                    coverUri: (null == e || null == (t = e.cover) ? void 0 : t.uri) || (null == e || null == (a = e.cover) || null == (i = a.itemsUri) ? void 0 : i[0]),
                    tracksCount: e.trackCount,
                    likesCount: e.likesCount,
                    averageColor: (0, r.Q)(null == e ? void 0 : e.derivedColors),
                    revision: e.revision,
                    generatedPlaylistType: e.generatedPlaylistType,
                    personalColor: e.personalColor,
                    visibility: e.visibility,
                    trailer: c,
                });
            };
        },
        38223: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => d });
            var n = i(32290),
                r = i(96103),
                s = i(39407),
                a = i(21732),
                l = i(82586),
                o = i(19740),
                c = i(57594);
            let d = (0, r.PA)((e) => {
                let { isDisliked: t, onClick: i, disabled: r, className: d } = e,
                    { user: u } = (0, c.g)();
                return (0, n.jsx)(o.Dr, {
                    onClick: i,
                    className: d,
                    icon: (0, n.jsx)(l.I, { variant: t ? 'disliked' : 'dislike', size: 'xxs' }),
                    role: 'menuitemcheckbox',
                    'aria-checked': t,
                    disabled: r || !u.isAuthorized,
                    'data-test-id': a.S7.CONTEXT_MENU_DISLIKE_BUTTON,
                    children: (0, n.jsx)(s.A, { id: 'interface-actions.do-not-like' }),
                });
            });
        },
        38396: (e, t, i) => {
            'use strict';
            i.d(t, { Z: () => s });
            var n = i(60754);
            let r = n.gK.model('TrackIdModel', { id: n.gK.union(n.gK.string, n.gK.number), albumId: n.gK.maybe(n.gK.number), timestamp: n.gK.maybe(n.gK.string) }),
                s = i(74885)
                    .$.props({ tracks: n.gK.maybe(n.gK.array(r)) })
                    .actions((e) => ({ getKey: (t) => ''.concat(t, '_').concat(e.id) }));
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
        44265: (e, t, i) => {
            'use strict';
            i.d(t, { j: () => n });
            var n = (function (e) {
                return (e[(e.LIKE = 3)] = 'LIKE'), (e[(e.CHART = 1076)] = 'CHART'), e;
            })({});
        },
        45066: (e, t, i) => {
            'use strict';
            i.d(t, { n: () => n });
            let n = {
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
        49259: (e, t, i) => {
            'use strict';
            i.d(t, { W: () => y, s: () => v });
            var n = i(32290),
                r = i(29222),
                s = i(96103),
                a = i(21916),
                l = i(55178),
                o = i(80451),
                c = i(96218),
                d = i(5245),
                u = i(57594),
                m = i(31726);
            (0, s.eO)(!1);
            let _ = (0, l.createContext)(null),
                g = (e) => {
                    let { children: t, store: i, storeKey: r } = e,
                        s = (0, l.useMemo)(() => ({ store: i, storeKey: r }), [i, r]);
                    return (0, n.jsx)(_.Provider, { value: s, children: t });
                },
                p = (e) => {
                    let { nonce: t, patchKey: i, patchesRef: r } = e;
                    return (
                        (0, a.useServerInsertedHTML)(() => {
                            let e = r.current;
                            return ((r.current = []), 0 === e.length)
                                ? null
                                : (0, n.jsx)('script', {
                                      dangerouslySetInnerHTML: {
                                          __html: ((e, t) =>
                                              "\n        window.__PAGE_STATE_PATCHES__ = window.__PAGE_STATE_PATCHES__ || {};\n        window.__PAGE_STATE_PATCHES__['"
                                                  .concat(e, "'] =\n            window.__PAGE_STATE_PATCHES__['")
                                                  .concat(e, "'] || [];\n        window.__PAGE_STATE_PATCHES__['")
                                                  .concat(e, "'].push(")
                                                  .concat((0, o.stringifyJSONSafely)(t), ");\n        window.dispatchEvent(new Event('")
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
                        r = () => {
                            var e, t;
                            let n = null != (t = null == (e = window.__PAGE_STATE_PATCHES__) ? void 0 : e[i]) ? t : [];
                            return window.__PAGE_STATE_PATCHES__ && delete window.__PAGE_STATE_PATCHES__[i], n;
                        };
                    return {
                        pageStoreProvider: (e) => {
                            let { children: s, nonce: a } = e,
                                l = (0, m.Y)(),
                                o = (0, u.g)(),
                                { store: _, patchesRef: y } = (0, d.m)({
                                    createStore: () => t({ ...l, rootStore: o }),
                                    getPendingPatchBatches: r,
                                    patchesUpdatedEventName: c.O,
                                });
                            return (0, n.jsxs)(n.Fragment, {
                                children: [(0, n.jsx)(p, { nonce: a, patchKey: i, patchesRef: y }), (0, n.jsx)(g, { store: _, storeKey: i, children: s })],
                            });
                        },
                    };
                };
            function v(e) {
                let { throwOnAbsence: t = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    i = (0, l.useContext)(_);
                if (!i || i.storeKey !== e) {
                    var n;
                    if (!t) return null;
                    throw new r.t('Page store context is missing or has unexpected key', {
                        code: 'E_CONTEXT_PAGE_STORE_NULL',
                        data: { actualStoreKey: null != (n = null == i ? void 0 : i.storeKey) ? n : 'null', expectedStoreKey: e },
                    });
                }
                return i.store;
            }
        },
        55985: (e, t, i) => {
            'use strict';
            i.d(t, { p: () => r });
            var n = i(60754);
            let r = (e) => (0, n.wg)({ uri: e.uri, color: e.color });
        },
        64170: (e, t, i) => {
            'use strict';
            i.d(t, { SomethingWentWrong: () => T });
            var n = i(32290),
                r = i(63618),
                s = i(96103),
                a = i(55178),
                l = i(60900),
                o = i(39407),
                c = i(63423),
                d = i(82586),
                u = i(71926),
                m = i(16172),
                _ = i(52068),
                g = i(62376),
                p = i(37240),
                y = i(83920),
                v = i(20472),
                h = i(12894),
                x = i(30310),
                k = i.n(x);
            let T = (0, s.PA)((e) => {
                let { className: t, withBackwardControl: i = !0 } = e,
                    { formatMessage: s } = (0, l.A)(),
                    x = s({ id: 'error-messages.something-went-wrong' });
                !(function (e) {
                    let t = (0, _.st)(),
                        { hash: i } = (0, _.gf)(),
                        { pageId: n } = (0, p.$)(),
                        r = (0, g.U)();
                    (0, a.useEffect)(() => {
                        if (!t || !i || !n) return;
                        let s = (0, m.Fx)({
                            params: {
                                entityType: m.LA.Error,
                                entityId: m.LA.SomethingWrong,
                                errorMessage: e,
                                hash: i,
                                pageId: n,
                                pageStyle: m.QL.Fullscreen,
                                pagePlacement: m.c4.Fullscreen,
                                mainObjectType: m.ky.NonApplicable,
                                mainObjectId: m.ky.NonApplicable,
                            },
                            logger: r,
                            context: 'useSendEventOnSomethingWentWrongShowed',
                        });
                        s && (0, m.z5)(t.evgenInstance, s);
                    }, [t, e, i, n, r]);
                })(x);
                let { sendRefreshEvent: T } = (function () {
                        let e = (0, _.st)(),
                            { hash: t } = (0, _.gf)(),
                            { pageId: i } = (0, p.$)(),
                            n = (0, g.U)();
                        return {
                            sendRefreshEvent: (0, a.useCallback)(() => {
                                if (!e || !t || !i) return;
                                let r = (0, m.Fx)({
                                    params: {
                                        actionType: m.X2.Refresh,
                                        userInteractionType: m.gi.Tap,
                                        entityType: m.LA.Error,
                                        entityId: m.LA.SomethingWrong,
                                        hash: t,
                                        pageId: i,
                                        pageStyle: m.QL.Fullscreen,
                                        pagePlacement: m.c4.Fullscreen,
                                        mainObjectType: m.ky.NonApplicable,
                                        mainObjectId: m.ky.NonApplicable,
                                    },
                                    logger: n,
                                    context: 'useSendEventOnSomethingWentWrongRefreshed',
                                });
                                r && (0, m.bv)(e.evgenInstance, r);
                            }, [e, t, i, n]),
                        };
                    })(),
                    A = (0, a.useCallback)(() => {
                        T(), (window.location.href = v.Z.main.href);
                    }, [T]),
                    { contentRef: C } = (0, y.g)();
                return (0, n.jsxs)('div', {
                    className: (0, r.$)(k().root, t),
                    children: [
                        i &&
                            (0, n.jsx)(h.L, { withBackwardFallback: '/', className: (0, r.$)(k().navigation, { [k().navigation_desktop]: !C }), withForwardControl: !1 }),
                        (0, n.jsxs)('div', {
                            className: (0, r.$)(k().content, { [k().content_shrink]: !i }),
                            children: [
                                (0, n.jsx)(d.I, { className: k().icon, variant: 'attention', size: 'xxl' }),
                                (0, n.jsx)(u.DZ, { className: (0, r.$)(k().title, k().important), variant: 'h3', size: 'xs', children: x }),
                                (0, n.jsxs)(u.HL, {
                                    className: (0, r.$)(k().text, k().important),
                                    variant: 'span',
                                    type: 'text',
                                    size: 'l',
                                    weight: 'normal',
                                    children: [!1, (0, n.jsx)(o.A, { id: 'page-error.try-to-restart-app' })],
                                }),
                                (0, n.jsx)(c.$, {
                                    onClick: A,
                                    className: k().button,
                                    role: 'link',
                                    color: 'secondary',
                                    size: 'l',
                                    radius: 'xxxl',
                                    children: (0, n.jsxs)(u.HL, {
                                        type: 'controls',
                                        variant: 'span',
                                        size: 'm',
                                        children: [!1, (0, n.jsx)(o.A, { id: 'page-error.restart-app-button' })],
                                    }),
                                }),
                            ],
                        }),
                    ],
                });
            });
        },
        70390: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => g });
            var n = i(32290),
                r = i(92708),
                s = i(55178),
                a = i(60900),
                l = i(45477),
                o = i(75582),
                c = i(57594),
                d = i(90357),
                u = i(97647),
                m = i(8097);
            let _ = (e) => {
                    let { artist: t, closeToast: i } = e;
                    return (0, n.jsx)(m.k, {
                        closeToast: i,
                        entityVariant: u.c.ARTIST,
                        coverUri: t.coverUri,
                        entityUrl: t.url,
                        entityTitle: t.name,
                        isPinned: t.isPinned,
                        radius: 'round',
                    });
                },
                g = (e) => {
                    let { user: t } = (0, c.g)(),
                        { notify: i } = (0, o.l)(),
                        { formatMessage: u } = (0, a.A)(),
                        [m, g] = (0, s.useState)(!1);
                    return (0, s.useCallback)(async () => {
                        if (!e) return;
                        if (!t.isAuthorized)
                            return void i((0, n.jsx)(d.h, { error: u({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
                        if (m) return;
                        let s = { ...(0, r.HO)(e), isPinned: !e.isPinned };
                        g(!0);
                        let a = await e.togglePin();
                        g(!1),
                            a
                                ? i((0, n.jsx)(_, { artist: s }), { containerId: l.u.INFO })
                                : i((0, n.jsx)(d.h, { error: u({ id: 'error-messages.error-during-action' }) }), { containerId: l.u.ERROR });
                    }, [e, t.isAuthorized, m, u, i]);
                };
        },
        72428: (e, t, i) => {
            'use strict';
            i.d(t, { p: () => a });
            var n = i(60754),
                r = i(69757),
                s = i(84060);
            let a = (e) => {
                let t = e.artists.map((e) => (0, s.d)(e));
                return (0, n.wg)({ ...(0, r.e)(e), artists: t });
            };
        },
        73141: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => p });
            var n = i(32290),
                r = i(92708),
                s = i(55178),
                a = i(60900),
                l = i(63380),
                o = i(45477),
                c = i(75582),
                d = i(57594),
                u = i(90357),
                m = i(97647),
                _ = i(97755);
            let g = (e) => {
                    let { playlist: t, closeToast: i } = e;
                    return (0, n.jsx)(_.O, {
                        entityVariant: m.c.PLAYLIST,
                        entityUrl: t.url,
                        collectionUrl: '/collection',
                        entityTitle: t.title,
                        isLiked: t.isLiked,
                        closeToast: i,
                        coverUri: t.coverUri,
                    });
                },
                p = (e) => {
                    let { user: t } = (0, d.g)(),
                        { notify: i } = (0, c.l)(),
                        [m, _] = (0, s.useState)(!1),
                        { formatMessage: p } = (0, a.A)();
                    return (0, s.useCallback)(async () => {
                        if (!t.isAuthorized)
                            return void i((0, n.jsx)(u.h, { error: p({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                        if (m) return;
                        let s = { ...(0, r.HO)(e), url: e.url, isLiked: !e.isLiked };
                        _(!0);
                        let a = await e.toggleLike();
                        _(!1),
                            a === l.f.OK
                                ? i((0, n.jsx)(g, { playlist: s }), { containerId: o.u.INFO })
                                : i((0, n.jsx)(u.h, { error: p({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR });
                    }, [t.isAuthorized, m, e, p, i]);
                };
        },
        73192: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => g });
            var n = i(32290),
                r = i(92708),
                s = i(55178),
                a = i(60900),
                l = i(45477),
                o = i(75582),
                c = i(57594),
                d = i(90357),
                u = i(97647),
                m = i(8097);
            let _ = (e) => {
                    let { playlist: t, closeToast: i } = e;
                    return (0, n.jsx)(m.k, {
                        closeToast: i,
                        entityVariant: u.c.PLAYLIST,
                        entityUrl: t.url,
                        coverUri: t.coverUri,
                        entityTitle: t.title,
                        isPinned: t.isPinned,
                        radius: 's',
                    });
                },
                g = (e) => {
                    let { user: t } = (0, c.g)(),
                        { notify: i } = (0, o.l)(),
                        { formatMessage: u } = (0, a.A)(),
                        [m, g] = (0, s.useState)(!1);
                    return (0, s.useCallback)(async () => {
                        if (!t.isAuthorized)
                            return void i((0, n.jsx)(d.h, { error: u({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
                        if (m) return;
                        let s = { ...(0, r.HO)(e), url: e.url, isPinned: !e.isPinned };
                        g(!0);
                        let a = await e.togglePin();
                        g(!1),
                            a
                                ? i((0, n.jsx)(_, { playlist: s }), { containerId: l.u.INFO })
                                : i((0, n.jsx)(d.h, { error: u({ id: 'error-messages.error-during-action' }) }), { containerId: l.u.ERROR });
                    }, [t.isAuthorized, m, e, i, u]);
                };
        },
        74885: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => y });
            var n = i(60754),
                r = i(87953),
                s = i(2047),
                a = i(90404),
                l = i(63380),
                o = i(15567),
                c = i(58008),
                d = i(36477),
                u = i(45346),
                m = i(35597),
                _ = i(20168),
                g = i(1045),
                p = i(44265);
            let y = n.gK
                .compose(
                    n.gK.model({
                        uuid: n.gK.string,
                        isAvailable: n.gK.boolean,
                        revision: n.gK.maybe(n.gK.number),
                        uid: n.gK.number,
                        kind: n.gK.number,
                        title: n.gK.maybe(n.gK.string),
                        coverUri: n.gK.maybe(n.gK.string),
                        tracksCount: n.gK.maybe(n.gK.number),
                        averageColor: n.gK.maybe(n.gK.string),
                        generatedPlaylistType: n.gK.maybe(n.gK.string),
                        personalColor: n.gK.maybeNull(n.gK.number),
                        visibility: n.gK.maybe(n.gK.string),
                        trailer: n.gK.maybe(u.a),
                    }),
                    m.t,
                )
                .views((e) => ({
                    get key() {
                        return ''.concat(e.uuid, '_').concat(e.uid, '_').concat(e.kind);
                    },
                    get url() {
                        let { href: t } = (0, d.u)('/playlists/:playlistUuid', { params: { playlistUuid: e.uuid } });
                        return t;
                    },
                    get isLikesCountHidden() {
                        return e.kind === p.j.LIKE || e.kind === p.j.CHART || e.generatedPlaylistType;
                    },
                    get isFavouritePlaylist() {
                        return e.kind === p.j.LIKE;
                    },
                    get isPublic() {
                        return e.visibility === s.L.PUBLIC;
                    },
                    get isLiked() {
                        if (!(0, n._n)(e)) return !1;
                        let { library: t } = (0, o.M)(e);
                        return t.isPlaylistLiked(''.concat(e.uid, ':').concat(e.kind));
                    },
                    get pinId() {
                        return ''.concat(a._.PLAYLIST_ITEM).concat(e.uid, '_').concat(e.kind);
                    },
                    get id() {
                        return ''.concat(e.uid, ':').concat(e.kind);
                    },
                    get isPinned() {
                        if (!(0, n._n)(e)) return !1;
                        let { pinsCollection: t } = (0, o.M)(e);
                        return t.isPinned(this.pinId);
                    },
                    get isOwnPlaylist() {
                        let { user: t } = (0, o.M)(e);
                        return !!(t.isAuthorized && e.uid && t.account.data.uid && e.uid === t.account.data.uid);
                    },
                    get canUserChange() {
                        if (!(0, n._n)(e)) return !1;
                        return this.isOwnPlaylist && !this.isFavouritePlaylist;
                    },
                    get isOwnFavouritePlaylist() {
                        if (!(0, n._n)(e)) return !1;
                        return this.isFavouritePlaylist && this.isOwnPlaylist;
                    },
                }))
                .actions((e) => ({
                    toggleLike: (0, n.L3)(function* () {
                        if (!(0, n._n)(e)) return;
                        let { library: t, user: i } = (0, o.M)(e);
                        if (i.isAuthorized) {
                            let r = yield t.togglePlaylistLike({ userId: i.account.data.uid, entityId: e.id, ownerId: e.uid, kindId: e.kind });
                            return (0, n._n)(e) && r === l.f.OK && (e.isLiked ? e.likePending() : e.unlikePending()), r;
                        }
                    }),
                    togglePin: (0, n.L3)(function* () {
                        if (!(0, n._n)(e)) return;
                        let { pinsCollection: t, user: i } = (0, o.M)(e);
                        if (i.isAuthorized) return yield t.togglePlaylistPin({ uid: e.uid, kind: e.kind }, e.pinId);
                    }),
                    changePlaylist: (0, n.L3)(function* (t) {
                        if (!(0, n._n)(e)) return _.Y.ERROR;
                        let { usersResource: i, modelActionsLogger: s } = (0, n._$)(e);
                        try {
                            var a, l;
                            let n = yield i.changePlaylistRelative({ userId: e.uid, diff: t, revision: null != (a = e.revision) ? a : 0, playlistKind: e.kind });
                            return (e.revision = n.revision), (e.isAvailable = null == (l = n.available) || l), _.Y.OK;
                        } catch (e) {
                            if ((s.error(e), e && 'object' == typeof e && 'statusCode' in e && e.statusCode === r.X1.PRECONDITION_FAILED)) return _.Y.RELOAD;
                            return _.Y.ERROR;
                        }
                    }),
                    changeTitle: (0, n.L3)(function* (t) {
                        if (!(0, n._n)(e)) return c.F.ERROR;
                        if (e.title === t) return c.F.OK;
                        let { usersResource: i, modelActionsLogger: r } = (0, n._$)(e);
                        if (e.canUserChange) {
                            if (t.length < 1 || t.length > g.k) return c.F.ERROR;
                            let n = e.title;
                            e.title = t;
                            try {
                                let r = yield i.changePlaylistTitle({ title: t, userId: e.uid, playlistKind: e.kind });
                                if (!(null == r ? void 0 : r.title)) return (e.title = n), c.F.ERROR;
                                return (e.title = r.title), c.F.OK;
                            } catch (t) {
                                (e.title = n), r.error(t);
                            }
                        }
                        return c.F.ERROR;
                    }),
                    deletePlaylist: (0, n.L3)(function* () {
                        if (!(0, n._n)(e) || !e.canUserChange) return c.F.ERROR;
                        let { pinsCollection: t } = (0, o.M)(e),
                            { usersResource: i, modelActionsLogger: r } = (0, n._$)(e);
                        try {
                            return yield i.deletePlaylist({ userId: e.uid, playlistKind: e.kind }), t.isPinned(e.pinId) && t.deletePin(e.pinId), c.F.OK;
                        } catch (e) {
                            r.error(e);
                        }
                        return c.F.ERROR;
                    }),
                    toggleVisibility: (0, n.L3)(function* (t) {
                        if (!(0, n._n)(e) || (!e.canUserChange && !e.isOwnFavouritePlaylist)) return c.F.ERROR;
                        let { usersResource: i, modelActionsLogger: r } = (0, n._$)(e),
                            { user: a } = (0, o.M)(e),
                            l = e.visibility,
                            d = e.isPublic ? s.L.PRIVATE : s.L.PUBLIC;
                        t && (d = t);
                        try {
                            return (
                                (e.visibility = d),
                                e.isOwnFavouritePlaylist
                                    ? yield a.setSettings({ userMusicVisibility: d })
                                    : yield i.togglePlaylistVisibility({ visibility: d, userId: e.uid, playlistKind: e.kind }),
                                c.F.OK
                            );
                        } catch (e) {
                            r.error(e);
                        }
                        return (e.visibility = l), c.F.ERROR;
                    }),
                    downloadToFile: (0, n.L3)(function* () {
                        if (!(0, n._n)(e)) return;
                        let { usersResource: t, modelActionsLogger: i } = (0, n._$)(e);
                        try {
                            let { tracks: n = [] } = yield t.getPlaylistWithTracksIds({ userId: String(e.uid), playlistKind: e.kind, resumeStream: !1 }),
                                r = n.map((e) => (null == e?.id ? null : e.albumId ? ''.concat(e.id, ':').concat(e.albumId) : String(e.id))).filter(Boolean);
                            r.length && window.desktopEvents?.send?.('DOWNLOAD_TRACKS', r, 'playlist', e.title || '');
                        } catch (e) {
                            i.error(e);
                        }
                    }),
                    getKey: (t) => ''.concat(t, '_').concat(e.id),
                }));
        },
        78061: (e, t, i) => {
            'use strict';
            i.d(t, { Jt: () => s, TF: () => l, hZ: () => a });
            var n = function () {
                return (n =
                    Object.assign ||
                    function (e) {
                        for (var t, i = 1, n = arguments.length; i < n; i++)
                            for (var r in (t = arguments[i])) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                        return e;
                    }).apply(this, arguments);
            };
            function r(e, t) {
                if (!t) return '';
                var i = '; ' + e;
                return !0 === t ? i : i + '=' + t;
            }
            function s(e) {
                return (function (e) {
                    for (var t = {}, i = e ? e.split('; ') : [], n = 0; n < i.length; n++) {
                        var r = i[n].split('='),
                            s = r.slice(1).join('=');
                        '"' === s[0] && (s = s.slice(1, -1));
                        try {
                            t[decodeURIComponent(r[0])] = s.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
                        } catch (e) {}
                    }
                    return t;
                })(document.cookie)[e];
            }
            function a(e, t, i) {
                var s;
                document.cookie =
                    ((s = n({ path: '/' }, i)),
                    encodeURIComponent(e)
                        .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
                        .replace(/\(/g, '%28')
                        .replace(/\)/g, '%29') +
                        '=' +
                        encodeURIComponent(t).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent) +
                        (function (e) {
                            if ('number' == typeof e.expires) {
                                var t = new Date();
                                t.setMilliseconds(t.getMilliseconds() + 864e5 * e.expires), (e.expires = t);
                            }
                            return (
                                r('Expires', e.expires ? e.expires.toUTCString() : '') +
                                r('Domain', e.domain) +
                                r('Path', e.path) +
                                r('Secure', e.secure) +
                                r('SameSite', e.sameSite)
                            );
                        })(s));
            }
            function l(e, t) {
                a(e, '', n(n({}, t), { expires: -1 }));
            }
        },
        79043: (e) => {
            e.exports = { root: 'PostPlaylists_root__3tea0', content: 'PostPlaylists_content__2fXI5' };
        },
        80528: (e, t, i) => {
            'use strict';
            i.d(t, { g: () => Z });
            var n = i(32290),
                r = i(96103),
                s = i(60900),
                a = i(16172),
                l = i(21732),
                o = i(71483),
                c = i(91027),
                d = i(82586),
                u = i(19740),
                m = i(92708),
                _ = i(55178),
                g = i(63380),
                p = i(45477),
                y = i(75582),
                v = i(57594),
                h = i(90357),
                x = i(86269),
                k = i(74196),
                T = i(71926),
                A = i(58534),
                C = i(11323),
                P = i(356),
                f = i.n(P);
            let I = (e) => {
                let { coverUri: t, title: i, isDisliked: r, closeToast: a } = e,
                    { formatMessage: l } = (0, s.A)(),
                    o = l(r ? { id: 'notifications-info.artist-unavailable-in-recommendations' } : { id: 'notifications-info.artist-available-in-recommendations' });
                return (0, n.jsx)(A.$, {
                    closeToast: a,
                    message: (0, n.jsxs)('div', {
                        className: f().message,
                        children: [
                            (0, n.jsx)(k.q, { children: (0, n.jsx)('p', { role: 'alert', 'aria-label': o }) }),
                            (0, n.jsx)(x.t, {
                                className: f().cover,
                                radius: 'round',
                                children: (0, n.jsx)(C.B, { className: f().image, src: t, alt: i, size: 100, fit: 'cover', withAvatarReplace: !0 }),
                            }),
                            (0, n.jsx)(T.HL, { className: f().text, variant: 'div', type: 'controls', size: 'm', 'aria-hidden': !0, children: o }),
                        ],
                    }),
                });
            };
            var b = i(5942),
                L = i(70390),
                S = i(9017),
                E = i(65477),
                j = i(71735),
                N = i(37862),
                R = i(48922),
                O = i(54391),
                K = i(72396),
                w = i(46200),
                M = i(27120),
                B = i(43564),
                U = i(95134),
                D = i(79406),
                z = i(51675),
                F = i(48027),
                W = i(89384),
                H = i(38223),
                G = i(58237),
                Y = i(56367),
                V = i(4914),
                $ = i(83755),
                X = i(25160),
                q = i(4008);
            let Z = (0, r.PA)((e) => {
                var t, i, r;
                let { artist: x, onOpenChange: k, open: T, ...A } = e,
                    { shouldShowBuySubscriptionModal: C, showBuySubscriptionModal: P } = (0, w.q)(),
                    {
                        settings: { isMobile: f },
                        modals: { artistAboutModal: Z },
                        trailer: J,
                        user: Q,
                        experiments: ee,
                    } = (0, v.g)(),
                    et = (0, L.A)(x),
                    ei = (0, b.K)(x),
                    en = ((e) => {
                        let { user: t } = (0, v.g)(),
                            { notify: i } = (0, y.l)(),
                            [r, a] = (0, _.useState)(!1),
                            { formatMessage: l } = (0, s.A)();
                        return (0, c.c)(async () => {
                            if (!e) return;
                            if (!t.isAuthorized)
                                return void i((0, n.jsx)(h.h, { error: l({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: p.u.ERROR });
                            if (r) return;
                            let s = { ...(0, m.HO)(e), isDisliked: !e.isDisliked };
                            a(!0);
                            let o = await e.toggleDislike();
                            a(!1),
                                o === g.f.OK
                                    ? i((0, n.jsx)(I, { coverUri: s.coverUri, title: s.name, isDisliked: s.isDisliked }), { containerId: p.u.INFO })
                                    : i((0, n.jsx)(h.h, { error: l({ id: 'error-messages.error-during-action' }) }), { containerId: p.u.ERROR });
                        });
                    })(x),
                    er = (0, O.F)(),
                    es = ''.concat(N.U.ARTIST, '-').concat(null == x ? void 0 : x.id),
                    { formatMessage: ea } = (0, s.A)(),
                    { utmLink: el } = (0, K.f)({ blockId: N.U.ARTIST, contextType: o.K.Artist, contextId: null == x ? void 0 : x.id }),
                    { shareLink: eo, pathname: ec } = (0, W.b)('/artist/:artistId', { params: { artistId: null != (i = null == x ? void 0 : x.id) ? i : '' } }),
                    ed = (0, S.A)({ entityVariant: U.D.ARTIST, urlParams: { id: null == x ? void 0 : x.id } }),
                    { isPlaying: eu, togglePlay: em } = (0, B.B)({
                        seeds: null != (r = null == x ? void 0 : x.seeds) ? r : [],
                        pageIdForFrom: R._Q.RADIO,
                        blockIdForFrom: es,
                        parentContextId: null == x ? void 0 : x.id,
                    }),
                    e_ = (0, j.P)(),
                    eg = ea((null == x ? void 0 : x.isComposer) ? { id: 'artist.about-composer' } : { id: 'artist.about-artist' }),
                    ep = (0, c.c)(() => {
                        if (C && Q.isAuthorized) return void P();
                        eu || em();
                    }),
                    ey = (0, c.c)(() => {
                        if (!e_()) {
                            if (C) return void P();
                            (null == x ? void 0 : x.id) && (J.setUtmLink(el), J.openArtistTrailer(x.id), er(a.ky.Artist, x.id));
                        }
                    }),
                    ev = (0, c.c)(() => {
                        Z.open(null == x ? void 0 : x.id);
                    });
                (0, M.N)(T);
                let eh = { variant: z.Y.ARTIST, id: null == x ? void 0 : x.id, title: null == x ? void 0 : x.name, path: ec },
                    ex = ee.checkExperiment(D.z.WebEditorsFeatures, 'on'),
                    ek = null == x || null == (t = x.trailer) ? void 0 : t.isAvailable,
                    eT = ee.checkExperiment(D.z.WebNextArtistInfo, 'on');
                return (0, n.jsxs)(u.W1, {
                    isMobile: f,
                    offsetOptions: 10,
                    open: T,
                    onOpenChange: k,
                    ariaLabel: ea({ id: 'interface-actions.context-menu' }),
                    containerProps: { 'data-test-id': l.Kq.artist.ARTIST_CONTEXT_MENU },
                    ...A,
                    children: [
                        ex && (0, n.jsx)(q.WithOffline, { fallback: (0, n.jsx)(E.d, { entityVariant: U.D.ARTIST, adminUrl: ed }) }),
                        !f && (0, n.jsx)(q.WithOffline, { fallback: (0, n.jsx)(Y.L, { onClick: et, isPinned: null == x ? void 0 : x.isPinned }) }),
                        (0, n.jsx)(q.WithOffline, {
                            fallback: (0, n.jsx)(G.T, {
                                onClick: ei,
                                isLiked: null == x ? void 0 : x.isLiked,
                                disabled: !Q.isAuthorized || !(null == x ? void 0 : x.isAvailable),
                            }),
                        }),
                        ek && (0, n.jsx)(q.WithOffline, { fallback: (0, n.jsx)($.N, { onClick: ey }) }),
                        (0, n.jsx)(q.WithOffline, {
                            fallback: (0, n.jsx)(X.C, { onClick: ep, disabled: !(null == x ? void 0 : x.isAvailable), variant: F.I.ARTIST, onOpenMenuChange: k }),
                        }),
                        (0, n.jsx)(V.H, { disabled: !x, shareLink: eo, entityMeta: eh }),
                        eT &&
                            (0, n.jsx)(q.WithOffline, {
                                fallback: (0, n.jsx)(u.Dr, {
                                    onClick: ev,
                                    icon: (0, n.jsx)(d.I, { variant: 'info', size: 'xxs' }),
                                    'data-test-id': l.Kq.artist.ARTIST_CONTEXT_MENU_ABOUT_ARTIST_BUTTON,
                                    children: eg,
                                }),
                            }),
                        (0, n.jsx)(q.WithOffline, {
                            fallback: (0, n.jsx)(H.D, { onClick: en, isDisliked: null == x ? void 0 : x.isDisliked, disabled: !(null == x ? void 0 : x.isAvailable) }),
                        }),
                    ],
                });
            });
        },
        83460: (e, t, i) => {
            'use strict';
            i.d(t, { B: () => Q });
            var n = i(32290),
                r = i(63618),
                s = i(96103),
                a = i(55178),
                l = i(60900),
                o = i(16172),
                c = i(21732),
                d = i(71483),
                u = i(91027),
                m = i(6752),
                _ = i(14934),
                g = i(82586),
                p = i(86269),
                y = i(71926),
                v = i(41677),
                h = i(73141),
                x = i(73192),
                k = i(71735),
                T = i(47745),
                A = i(2969),
                C = i(54391),
                P = i(23352),
                f = i(72396),
                I = i(5537),
                b = i(84062),
                L = i(28999),
                S = i(90169),
                E = i(57594),
                j = i(61376),
                N = i(11323),
                R = i(92744),
                O = i(61258),
                K = i(10180),
                w = i(90326),
                M = i(29268),
                B = i(34925),
                U = i(13931),
                D = i(19740),
                z = i(9017),
                F = i(65477),
                W = i(46200),
                H = i(27120),
                G = i(95134),
                Y = i(79406),
                V = i(58237),
                $ = i(56367),
                pulseSyncPlaylistDownloadIcons = i(82586),
                X = i(83755);
            let q = (0, s.PA)((e) => {
                var t;
                let { playlist: i, onOpenChange: r, open: s, ...a } = e,
                    { shouldShowBuySubscriptionModal: d, showBuySubscriptionModal: m } = (0, W.q)(),
                    {
                        experiments: _,
                        settings: { isMobile: g },
                        trailer: p,
                        user: y,
                    } = (0, E.g)(),
                    v = (0, h.K)(i),
                    T = (0, x.A)(i),
                    A = (0, C.F)(),
                    { formatMessage: P } = (0, l.A)(),
                    f = (0, k.P)(),
                    I = _.checkExperiment(Y.z.WebEditorsFeatures, 'on'),
                    b = (0, z.A)({ entityVariant: G.D.PLAYLIST, urlParams: { id: i.uid, kind: i.kind } });
                (0, H.N)(s);
                let L = (0, u.c)(() => {
                    if (d) return void m();
                    f() || (p.openPlaylistTrailer(i.id), A(o.ky.Playlist, i.id));
                });
                return (0, n.jsxs)(D.W1, {
                    title: i.title,
                    onOpenChange: r,
                    open: s,
                    offsetOptions: 10,
                    isMobile: g,
                    ariaLabel: P({ id: 'interface-actions.context-menu' }),
                    containerProps: { 'data-test-id': c.Kq.playlist.PLAYLIST_CONTEXT_MENU },
                    ...a,
                    children: [
                        I && (0, n.jsx)(F.d, { entityVariant: G.D.PLAYLIST, adminUrl: i.isFavouritePlaylist ? void 0 : b }),
                        !g && (0, n.jsx)($.L, { onClick: T, isPinned: i.isPinned }),
                        !i.isFavouritePlaylist && (0, n.jsx)(V.T, { onClick: v, isLiked: i.isLiked, disabled: !y.isAuthorized }),
                        (i.tracksCount ?? 1) > 0 &&
                            (0, n.jsx)(D.Dr, {
                                onClick: i.downloadToFile,
                                icon: (0, n.jsx)(pulseSyncPlaylistDownloadIcons.I, { variant: 'download', size: 'xxs' }),
                                children: 'Скачать в файл',
                            }),
                        (null == (t = i.trailer) ? void 0 : t.isAvailable) && (0, n.jsx)(X.N, { onClick: L, disabled: !i.isAvailable }),
                    ],
                });
            });
            var Z = i(11675),
                J = i.n(Z);
            let Q = (0, s.PA)((e) => {
                let { className: t, playlist: i, children: s, contentLinesCount: D, customDescription: z } = e,
                    { ref: F, intersectionPropertyId: W } = (0, P.n)(),
                    {
                        trailer: H,
                        user: G,
                        paywall: { modal: Y },
                    } = (0, E.g)(),
                    { from: V, utmLink: $ } = (0, f.f)({ contextId: i.uuid, contextType: d.K.Playlist }),
                    { formatMessage: X } = (0, l.A)(),
                    { sendLikeSearchFeedback: Z, sendNavigateSearchFeedback: Q, sendPlaySearchFeedback: ee } = (0, L.z)(),
                    [et, ei] = (0, a.useState)(!1),
                    [en, er] = (0, a.useState)(!1),
                    [es, ea] = (0, a.useState)(!1),
                    el = (0, U.r)(i),
                    eo = (0, h.K)(i),
                    ec = (0, x.A)(i),
                    ed = (0, T.N)(),
                    eu = (0, A.b)(),
                    em = (0, b.Z)(i.url),
                    e_ = (0, C.F)(),
                    eg = (0, k.P)(),
                    ep = (0, u.c)((e) => {
                        if ((e.stopPropagation(), eg())) return void e.preventDefault();
                        H.setUtmLink($), H.openPlaylistTrailer(i.id), e_(o.ky.Playlist, i.id);
                    }),
                    [ey, ev] = (0, a.useState)(!1),
                    { isPlaying: eh, togglePlay: ex } = (0, S.D)({
                        playContextParams: { contextData: { type: d.K.Playlist, meta: { id: i.id, uuid: i.uuid }, from: V, utmLink: $ }, loadContextMeta: !0 },
                    }),
                    ek = (0, u.c)(() => {
                        ed({ to: o.QT.PlaylistScreen }), null == Q || Q();
                    }),
                    eT = (0, u.c)((e) => {
                        ek(), em(e);
                    }),
                    eA = (0, I.N)(),
                    eC = (0, u.c)(() => {
                        if (!eg()) {
                            if (eA) return void Y.open();
                            et || eh || (ei(!0), null == ee || ee()), ex(), eu(!eh);
                        }
                    }),
                    eP = (0, u.c)(() => {
                        en || i.isLiked || (er(!0), null == Z || Z()), eo();
                    }),
                    ef = (0, u.c)((e) => {
                        e.preventDefault(), e.stopPropagation();
                    }),
                    eI = (0, u.c)((e) => {
                        ea(e), ev(e);
                    }),
                    eb = (0, a.useMemo)(() => {
                        var e;
                        return z
                            ? (0, n.jsx)(y.HL, { variant: 'span', type: 'entity', size: 's', weight: 'medium', lineClamp: 2, children: z }, i.getKey('description'))
                            : (null == (e = i.artists) ? void 0 : e.length)
                              ? (0, n.jsx)(
                                    v.i,
                                    { className: J().artists, artists: i.artists, lineClamp: 1, linkClassName: J().artistLink, captionSize: 's' },
                                    i.getKey('description'),
                                )
                              : void 0;
                    }, [z, i]),
                    eL = (0, m.L)(() => {
                        if (!i.isFavouritePlaylist)
                            return (0, n.jsx)(
                                R.c,
                                {
                                    className: (0, r.$)(J().likeButton, J().control),
                                    isLiked: i.isLiked,
                                    onClick: eP,
                                    variant: 'default',
                                    size: 's',
                                    iconSize: 'xxs',
                                    disabled: !G.isAuthorized,
                                },
                                i.getKey('LikeButton'),
                            );
                    }),
                    eS = (0, a.useMemo)(() => {
                        var e;
                        if (null == i || null == (e = i.trailer) ? void 0 : e.isAvailable)
                            return (0, n.jsx)(
                                B.n,
                                {
                                    children: (0, n.jsx)(
                                        M.k,
                                        { className: (0, r.$)(J().trailerButton, J().control), radius: 'round', size: 's', iconSize: 'xxs', onClick: ep },
                                        i.getKey('TrailerButton'),
                                    ),
                                },
                                i.getKey('PlaylilstCardTrailerTooltip'),
                            );
                    }, [ep, i]),
                    eE = (0, a.useMemo)(
                        () =>
                            (0, n.jsx)(
                                K.O,
                                { onClick: ec, isPinned: i.isPinned, className: (0, r.$)(J().pinButton, J().control), withRipple: !1 },
                                i.getKey('PinButton'),
                            ),
                        [ec, i],
                    ),
                    ej = (0, a.useMemo)(
                        () =>
                            (0, n.jsx)(p.t, {
                                className: J().cover,
                                radius: 's',
                                withShadow: !0,
                                'data-test-id': c.Kq.playlist.PLAYLIST_CARD,
                                children: (0, n.jsxs)('div', {
                                    className: J().coverBlock,
                                    onClick: eT,
                                    children: [
                                        (0, n.jsx)(N.B, {
                                            className: J().image,
                                            src: i.coverUri,
                                            size: 200,
                                            fit: 'cover',
                                            alt: el,
                                            withAvatarReplace: !0,
                                            'aria-hidden': !0,
                                        }),
                                        (0, n.jsx)(_.hg, {
                                            isVisible: es || ey,
                                            className: J().controls,
                                            playControl: (0, n.jsx)(
                                                w.D,
                                                {
                                                    className: (0, r.$)(J().playButton, J().control),
                                                    buttonVariant: 'default',
                                                    withHover: !1,
                                                    iconSize: 'xl',
                                                    variant: 'filled',
                                                    onClick: eC,
                                                    isPlaying: eh,
                                                    disabled: !i.isAvailable,
                                                },
                                                i.getKey('PlayButton'),
                                            ),
                                            likeControl: eL,
                                            menuControl: (0, n.jsx)(
                                                q,
                                                {
                                                    playlist: i,
                                                    onOpenChange: eI,
                                                    open: es,
                                                    onClick: ef,
                                                    className: (0, r.$)(J().menuButton, J().control),
                                                    icon: (0, n.jsx)(g.I, { size: 'xxs', variant: 'more' }),
                                                    size: 's',
                                                    'data-test-id': c.Kq.playlist.PLAYLIST_CONTEXT_MENU_BUTTON,
                                                },
                                                i.getKey('PlaylistContextMenu'),
                                            ),
                                            pinControl: eE,
                                            trailerControl: eS,
                                        }),
                                    ],
                                }),
                            }),
                        [eT, i, el, es, ey, eC, eh, eL, eI, ef, eE, eS],
                    ),
                    eN = !!i.actualLikesCount && !i.isLikesCountHidden;
                return (0, n.jsxs)(_.MN, {
                    ref: F,
                    'aria-label': el,
                    className: (0, r.$)(J().root, t),
                    title: (0, n.jsx)(y.HL, {
                        variant: 'div',
                        type: 'entity',
                        size: 's',
                        weight: 'medium',
                        lineClamp: 2,
                        'data-test-id': c.Kq.playlist.PLAYLIST_TITLE,
                        children: (0, n.jsx)(O.N, { className: J().titleLink, href: i.url, onClick: ek, children: i.title }),
                    }),
                    srTitle: (0, n.jsx)(O.N, { href: i.url, onClick: ek, children: i.title }),
                    'data-intersection-property-id': W,
                    contentLinesCount: D,
                    view: ej,
                    description: eb,
                    'data-test-id': c.Kq.playlist.PLAYLIST_ITEM,
                    children: [
                        eN &&
                            (0, n.jsx)(j.x, {
                                ariaLabel: X({ id: 'entity-names.likes-counter' }, { counter: i.actualLikesCount }),
                                likesCount: i.actualLikesCount,
                                isLiked: i.isLiked,
                                handleLikeClick: eo,
                            }),
                        s,
                    ],
                });
            });
        },
        88297: (e, t, i) => {
            Promise.resolve().then(i.bind(i, 23491));
        },
        90404: (e, t, i) => {
            'use strict';
            var n;
            i.d(t, { _: () => n }),
                (function (e) {
                    (e.ALBUM_ITEM = 'album_item'),
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
                        (e.QUERY_TO_VIBE_ITEM = 'q2v_item');
                })(n || (n = {}));
        },
        91853: (e, t, i) => {
            'use strict';
            i.d(t, { S: () => r });
            var n = i(19383);
            let r = (e) => {
                let { artist: t, callback: i, shouldHistoryBack: r } = e;
                return (0, n.l)({ entity: t, callback: i, modalBehavior: void 0 === r ? void 0 : { shouldHistoryBack: r }, preventDefaultWhenSafe: !0 });
            };
        },
        96333: (e, t, i) => {
            'use strict';
            var n;
            i.d(t, { S: () => n }),
                (function (e) {
                    (e.TRACK = 'track'),
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
                        (e.POETRY = 'poetry');
                })(n || (n = {}));
        },
        98503: (e) => {
            e.exports = { root: 'PostArtists_root__Zxmjq', content: 'PostArtists_content__JzGOH' };
        },
    },
    (e) => {
        e.O(
            0,
            [
                7034, 5718, 7258, 7441, 7231, 7972, 6347, 3183, 9763, 8168, 3964, 6706, 1311, 8892, 2536, 66, 5835, 2812, 8035, 551, 2732, 1410, 6252, 6477, 7275, 2586,
                8347, 4522, 7702, 6874, 861, 782, 4668, 9740, 1175, 14, 8915, 8816, 2563, 1647, 4220, 9562, 7358,
            ],
            () => e((e.s = 88297)),
        ),
            (_N_E = e.O());
    },
]);
