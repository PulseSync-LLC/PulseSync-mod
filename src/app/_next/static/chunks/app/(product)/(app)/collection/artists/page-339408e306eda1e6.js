(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8336],
    {
        1698: (e, t, i) => {
            'use strict';
            i.d(t, { e: () => o });
            var s = i(88800),
                r = i(37770);
            let o = (e) => {
                let {
                    isActive: t,
                    itemClassName: i,
                    round: o,
                    centered: l,
                    withInfo: a,
                    count: n = 10,
                    shimmerClassName: c,
                    linesCount: d,
                    'aria-label': u,
                    withSubcover: _,
                } = e;
                return Array.from(Array(n).keys()).map((e) =>
                    (0, s.jsx)(
                        r.V,
                        { isActive: t, linesCount: d, className: i, round: o, centered: l, withInfo: a, withSubcover: _, 'aria-label': u, shimmerClassName: c },
                        e,
                    ),
                );
            };
        },
        3099: (e) => {
            e.exports = {
                card_root: 'HorizontalCardContainer_root__YoAAP',
                root: 'Chart_root__ODed_',
                position: 'Chart_position__7UNY9',
                position_disliked: 'Chart_position_disliked__HzjC7',
                position_disabled: 'Chart_position_disabled__poZzD',
                progress: 'Chart_progress__sGj4s',
                progress_up: 'Chart_progress_up__y083c',
                progress_same: 'Chart_progress_same__Cnbdb',
                progress_down: 'Chart_progress_down__lv_ae',
                progress_crown: 'Chart_progress_crown__o__Zm',
                progress_new: 'Chart_progress_new__7DobI',
                progress_disliked: 'Chart_progress_disliked__maVAk',
                progress_disabled: 'Chart_progress_disabled__JoFqG',
                positionShimmer: 'Chart_positionShimmer__6Abak',
            };
        },
        4044: (e) => {
            e.exports = {
                root: 'NotificationReloadBlocks_root__qNd_1',
                important: 'NotificationReloadBlocks_important__QsAfb',
                text: 'NotificationReloadBlocks_text__TN_U0',
                icon: 'NotificationReloadBlocks_icon__vVN__',
                button: 'NotificationReloadBlocks_button__uXYiL',
                message: 'NotificationReloadBlocks_message__uQ1hC',
            };
        },
        4370: (e, t, i) => {
            'use strict';
            i.d(t, { Z: () => r });
            var s = i(67174);
            let r = {
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
        7628: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => m });
            var s = i(88800),
                r = i(88969),
                o = i(58390),
                l = i(17392),
                a = i(29993),
                n = i(96817),
                c = i(29504),
                d = i(99890),
                u = i(4086),
                _ = i(41928);
            let m = (e) => {
                let { size: t = 'm', variant: i = 'default', color: m = 'primary', withRipple: p = !0, buttonText: h, isBlock: x, key: g, className: A } = e,
                    T = (0, o.useRouter)(),
                    v = (0, _.N)().get(u.QG),
                    C = (0, a.c)(() => {
                        v.authorizationUrl && ((0, d.uV)({ stage: 'attempt-start', trigger: 'user' }), T.push(v.authorizationUrl));
                    });
                return (0, s.jsx)(
                    n.$,
                    {
                        onClick: C,
                        className: A,
                        isBlock: x,
                        color: m,
                        variant: i,
                        size: t,
                        radius: 'xxxl',
                        withRipple: p,
                        'data-test-id': l.S7.UNAUTHORIZED_BUTTON,
                        children: h || (0, s.jsx)(c.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, s.jsx)(r.A, { id: 'authorization.enter-button' }) }),
                    },
                    g,
                );
            };
        },
        7833: (e, t, i) => {
            'use strict';
            i.d(t, { B: () => c });
            var s = i(88800),
                r = i(53548),
                o = i(63582),
                l = i(99875),
                a = i(66109),
                n = i(245);
            let c = (0, o.B)(
                { kind: 'provider', requiredProps: ['objectType', 'objectId', 'objectPosX', 'objectPosY'], pendingProps: ['objectId'], scope: 'object' },
                ({ children: e, objectId: t, objectPosX: i, objectPosY: o, objectType: c }) => {
                    let d = (0, n.N)(),
                        u = (0, r.useContext)(l.p)?.loadedSession,
                        _ = [c, t, i, o].join(':'),
                        [m, p] = (0, r.useState)(() => ({ client: d, identity: _, blockSession: u, viewSession: d.createBlockViewSession() }));
                    (m.client !== d || m.identity !== _ || m.blockSession !== u) &&
                        p({ client: d, identity: _, blockSession: u, viewSession: d.createBlockViewSession() });
                    let h = (0, r.useMemo)(
                        () => ({ activeViewSession: null, scope: { objectId: t, objectPosX: i, objectPosY: o, objectType: c }, viewSession: m.viewSession }),
                        [t, i, o, c, m.viewSession],
                    );
                    return (0, s.jsx)(a.l, { value: h, children: e });
                },
            );
        },
        9492: (e, t, i) => {
            'use strict';
            i.d(t, { L: () => p });
            var s = i(88800),
                r = i(65724),
                o = i(53548),
                l = i(2058),
                a = i(88969),
                n = i(96817),
                c = i(52300),
                d = i(29504),
                u = i(59304),
                _ = i(4044),
                m = i.n(_);
            let p = (e) => {
                let { reloadBlocks: t, closeToast: i } = e,
                    _ = (0, o.useRef)(null),
                    { formatMessage: p } = (0, l.A)();
                (0, o.useEffect)(() => {
                    var e;
                    null == (e = _.current) || e.focus();
                }, []);
                let h = (0, o.useMemo)(
                    () =>
                        (0, s.jsxs)('div', {
                            className: m().message,
                            children: [
                                (0, s.jsx)(d.HL, {
                                    className: m().text,
                                    variant: 'div',
                                    type: 'controls',
                                    size: 'm',
                                    children: (0, s.jsx)(a.A, { id: 'error-messages.error-load-part-page' }),
                                }),
                                (0, s.jsx)(n.$, {
                                    ref: _,
                                    className: m().button,
                                    onClick: t,
                                    variant: 'text',
                                    'aria-label': p({ id: 'interface-actions.reload-part-page' }),
                                    icon: (0, s.jsx)(c.I, { variant: 'reset', size: 'xxs', className: m().icon }),
                                }),
                            ],
                        }),
                    [p, t],
                );
                return (0, s.jsx)(u.$, { className: (0, r.$)(m().root, m().important), message: h, closeToast: i });
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
        13607: (e, t, i) => {
            'use strict';
            var s;
            (i.d(t, { _: () => s }),
                (function (e) {
                    ((e.UP = 'up'), (e.DOWN = 'down'), (e.SAME = 'same'), (e.NEW = 'new'));
                })(s || (s = {})));
        },
        16434: (e) => {
            e.exports = {
                root: 'VirtualScroll_root__pCptn',
                root_scrolling: 'VirtualScroll_root_scrolling__dsQ6K',
                root_notScrolling: 'VirtualScroll_root_notScrolling__x4qdd',
                scroller_withFooter: 'VirtualScroll_scroller_withFooter__ntDaU',
                scroller_withHeader: 'VirtualScroll_scroller_withHeader__9yzCK',
                scroller_withForceScroll: 'VirtualScroll_scroller_withForceScroll__w7q1L',
            };
        },
        17017: (e, t, i) => {
            'use strict';
            var s;
            (i.d(t, { Z: () => s }),
                (function (e) {
                    ((e.METHOD_NOT_SUPPORTED = 'E_BEACON_METHOD_NOT_SUPPORTED'),
                        (e.NOT_AVAILABLE = 'E_BEACON_NOT_AVAILABLE'),
                        (e.QUEUE_FAILED = 'E_BEACON_QUEUE_FAILED'),
                        (e.NO_RESPONSE_DATA = 'E_BEACON_NO_RESPONSE_DATA'),
                        (e.RETRY_EXHAUSTED = 'E_BEACON_RETRY_EXHAUSTED'));
                })(s || (s = {})));
        },
        19840: (e, t, i) => {
            'use strict';
            (i.d(t, { G: () => r }), i(46606));
            var s = i(91136);
            class r extends s.m {
                name = 'HttpErrorException';
                statusCode;
                constructor(e, t) {
                    (super(e, { code: 'E_HTTP_CLIENT_NON_2XX_3XX_RESPONSE', cause: t.cause }),
                        (this.statusCode = t.statusCode),
                        Object.setPrototypeOf(this, r.prototype));
                }
            }
        },
        19981: (e, t, i) => {
            'use strict';
            i.d(t, { U: () => s });
            let s = (e, t) => {
                let i = e / 60;
                return i <= 45 ? t({ id: 'time.minutes-left' }, { minutes: Math.round(i) }) : t({ id: 'time.hours' }, { hours: Math.round((i / 60) * 2) / 2 });
            };
        },
        21256: (e, t, i) => {
            'use strict';
            i.d(t, { a: () => H });
            var s = i(88800),
                r = i(65724),
                o = i(84961),
                l = i(53548),
                a = i(2058),
                n = i(87999),
                c = i(62414),
                d = i(80643),
                u = i(33979),
                _ = i(17392),
                m = i(18593),
                p = i(29993),
                h = i(79070),
                x = i(29832),
                g = i(52300),
                A = i(7555),
                T = i(29504),
                v = i(91959),
                C = i(64207),
                N = i(77455),
                k = i(5407),
                y = i(57934),
                j = i(84384),
                f = i(4795),
                E = i(78940),
                O = i(55693),
                b = i(39079),
                S = i(72288),
                I = i(81877),
                R = i(49738),
                P = i(91292),
                L = i(56862),
                D = i(16704),
                w = i(56446),
                M = i(36207),
                z = i(43161),
                B = i(93434),
                F = i.n(B);
            let H = (0, o.PA)((e) => {
                let { artist: t, className: i, children: o, contentLinesCount: B, topTitleElement: H, bottomTitleElement: U } = e,
                    X = (0, c.D)(),
                    {
                        trailer: Y,
                        user: V,
                        paywall: { modal: q },
                    } = (0, S.g)(),
                    { from: K, utmLink: G } = (0, j.f)({ contextId: t.id, contextType: m.K.Artist }),
                    { formatMessage: $ } = (0, a.A)(),
                    [W, Z] = (0, l.useState)(!1),
                    [J, Q] = (0, l.useState)(!1),
                    [ee, et] = (0, l.useState)(!1),
                    { sendLikeSearchFeedback: ei, sendNavigateSearchFeedback: es, sendPlaySearchFeedback: er } = (0, O.z)(),
                    eo = (0, d.S)(),
                    el = (0, u.g)(),
                    ea = (0, C.K)(t),
                    en = (0, N.A)(t),
                    { id: ec, name: ed, coverUri: eu, isLiked: e_ } = t,
                    em = (0, E.Z)(t.url),
                    [ep, eh] = (0, l.useState)(!1),
                    ex = (0, y.F)(),
                    eg = (0, k.P)(),
                    eA = (0, p.c)((e) => {
                        if ((e.stopPropagation(), eg())) return void e.preventDefault();
                        (Y.openArtistTrailer(t.id), ex(n.DomainObjectType.Artist, t.id));
                    }),
                    eT = (0, l.useMemo)(() => {
                        let e = $({ id: 'entity-names.artist-name' }, { artistName: ed }),
                            t = e_ ? $({ id: 'entity-names.has-your-like' }) : '';
                        return ''.concat(e, ' ').concat(t);
                    }, [ed, e_, $]),
                    { isPlaying: ev, togglePlay: eC } = (0, b.D)({
                        playContextParams: { contextData: { type: m.K.Artist, meta: { id: Number(ec) }, from: K, utmLink: G }, loadContextMeta: !0 },
                    }),
                    eN = (0, v.S)({ artist: t, callback: em }),
                    ek = (0, v.S)({ artist: t, callback: eC }),
                    ey = (0, p.c)((e) => {
                        (null == es || es(), eo({ to: n.AppScreen.ArtistScreen }), eN(e));
                    }),
                    ej = (0, f.N)(),
                    ef = (0, p.c)(() => {
                        if (!eg()) {
                            if (ej) return void q.open();
                            (W || ev || (Z(!0), null == er || er()), ek(), ev || el());
                        }
                    }),
                    eE = (0, p.c)(() => {
                        (J || e_ || (Q(!0), null == ei || ei()), ea());
                    }),
                    eO = (0, p.c)((e) => {
                        (e.preventDefault(), e.stopPropagation());
                    }),
                    eb = (0, p.c)((e) => {
                        (et(e), eh(e));
                    }),
                    eS = (0, l.useMemo)(
                        () =>
                            (0, s.jsx)(
                                z.g,
                                {
                                    artist: t,
                                    onOpenChange: eb,
                                    open: ee,
                                    onClick: eO,
                                    className: (0, r.$)(F().menuButton, F().control),
                                    size: 's',
                                    icon: (0, s.jsx)(g.I, { size: 'xxs', variant: 'more' }),
                                    'data-test-id': _.Kq.artist.ARTIST_CONTEXT_MENU_BUTTON,
                                },
                                t.getKey('ArtistContextMenu'),
                            ),
                        [t, eO, eb, ee],
                    ),
                    eI = (0, l.useMemo)(() => {
                        var e;
                        if (null == t || null == (e = t.trailer) ? void 0 : e.isAvailable)
                            return (0, s.jsx)(
                                M.n,
                                {
                                    children: (0, s.jsx)(w.k, {
                                        className: (0, r.$)(F().trailerButton, F().control),
                                        radius: 'round',
                                        size: 's',
                                        iconSize: 'xxs',
                                        onClick: eA,
                                    }),
                                },
                                t.getKey('ArtistCardTrailerTooltip'),
                            );
                    }, [t, eA]),
                    eR = (0, l.useMemo)(
                        () =>
                            (0, s.jsx)(
                                L.O,
                                { onClick: en, isPinned: t.isPinned, className: (0, r.$)(F().pinButton, F().control), withRipple: !1 },
                                t.getKey('PinButton'),
                            ),
                        [t, en],
                    ),
                    eP = (0, h.L)(() => {
                        if (t.isAvailable)
                            return (0, s.jsx)(
                                x.hg,
                                {
                                    isVisible: ee || ep,
                                    className: F().controls,
                                    radius: 'round',
                                    playControl: (0, s.jsx)(
                                        D.D,
                                        {
                                            buttonVariant: 'default',
                                            withHover: !1,
                                            className: (0, r.$)(F().playButton, F().control),
                                            iconSize: 'xl',
                                            variant: 'filled',
                                            onClick: ef,
                                            isPlaying: ev,
                                            disabled: !t.isAvailableForPlaying,
                                        },
                                        t.getKey('PlayButton'),
                                    ),
                                    likeControl: (0, s.jsx)(
                                        R.c,
                                        {
                                            className: (0, r.$)(F().likeButton, F().control),
                                            isLiked: e_,
                                            onClick: eE,
                                            variant: 'default',
                                            size: 's',
                                            iconSize: 'xxs',
                                            disabled: !V.isAuthorized,
                                        },
                                        t.getKey('LikeButton'),
                                    ),
                                    menuControl: eS,
                                    pinControl: eR,
                                    trailerControl: eI,
                                },
                                t.getKey('ArtistCardControls'),
                            );
                    }),
                    eL = (0, l.useMemo)(
                        () =>
                            (0, s.jsx)(A.t, {
                                className: F().cover,
                                radius: 'round',
                                withShadow: !0,
                                'data-test-id': _.Kq.artist.ARTIST_CARD,
                                children: (0, s.jsxs)('div', {
                                    className: F().coverBlock,
                                    onClick: ey,
                                    children: [
                                        (0, s.jsx)(I.B, {
                                            className: F().image,
                                            src: eu,
                                            size: 200,
                                            fit: 'cover',
                                            alt: eT,
                                            withAvatarReplace: !0,
                                            isAvailable: t.isAvailable,
                                            'aria-hidden': !0,
                                        }),
                                        eP,
                                    ],
                                }),
                            }),
                        [ey, eu, eT, t.isAvailable, eP],
                    );
                return (0, s.jsx)(x.MN, {
                    ref: X,
                    className: (0, r.$)(F().root, i),
                    textPosition: 'center',
                    'aria-label': eT,
                    title: (0, s.jsxs)(s.Fragment, {
                        children: [
                            H,
                            (0, s.jsx)(T.HL, {
                                variant: 'div',
                                type: 'entity',
                                size: 's',
                                weight: 'medium',
                                lineClamp: 2,
                                'aria-hidden': !0,
                                children: (0, s.jsx)(P.N, {
                                    className: F().titleLink,
                                    href: t.url,
                                    tabIndex: -1,
                                    'aria-label': eT,
                                    onClick: ey,
                                    'data-test-id': _.Kq.artist.ARTIST_TITLE,
                                    children: ed,
                                }),
                            }),
                            U,
                        ],
                    }),
                    srTitle: (0, s.jsx)(P.N, { className: F().srTitleLink, href: t.url, onClick: ey, children: eT }),
                    contentLinesCount: B,
                    view: eL,
                    'data-test-id': _.Kq.artist.ARTIST_ITEM,
                    children: o,
                });
            });
        },
        37523: (e, t, i) => {
            'use strict';
            i.d(t, { F: () => d });
            var s = i(88800),
                r = i(53548),
                o = i(63582),
                l = i(53534),
                a = i(99875),
                n = i(245);
            let c = (e, t, i) => {
                    let s = e.createBlockViewSession(),
                        r = !1;
                    return { claimLoadedSession: () => (r ? null : ((r = !0), s)), client: e, identity: t, loadedSession: s, screenSession: i };
                },
                d = (0, o.B)(
                    { kind: 'provider', requiredProps: ['blockId', 'blockType', 'blockPosX', 'blockPosY', 'objectsCount'], scope: 'block' },
                    ({ blockId: e, blockIdForFrom: t, blockPosX: i, blockPosY: o, blockType: d, children: u, objectsCount: _ }) => {
                        let m = (0, n.N)(),
                            p = (0, r.useContext)(l.k)?.session,
                            h = [e, d, i, o].join(':'),
                            [x, g] = (0, r.useState)(() => c(m, h, p));
                        (x.client !== m || x.identity !== h || x.screenSession !== p) && g(c(m, h, p));
                        let A = (0, r.useMemo)(
                            () => ({
                                claimLoadedSession: x.claimLoadedSession,
                                loadedSession: x.loadedSession,
                                scope: { blockId: e, blockIdForFrom: t, blockPosX: i, blockPosY: o, blockType: d, objectsCount: _ },
                            }),
                            [e, t, i, o, d, _, x.claimLoadedSession, x.loadedSession],
                        );
                        return (0, s.jsx)(a.p, { value: A, children: u });
                    },
                );
        },
        42674: (e) => {
            e.exports = {
                root: 'Login_root__VtFg_',
                title: 'Login_title__dqQz1',
                important: 'Login_important__Z8S9I',
                text: 'Login_text__1uju5',
                button: 'Login_button__ZYvZY',
            };
        },
        43161: (e, t, i) => {
            'use strict';
            i.d(t, { g: () => Z });
            var s = i(88800),
                r = i(84961),
                o = i(2058),
                l = i(87999),
                a = i(17392),
                n = i(18593),
                c = i(29993),
                d = i(52300),
                u = i(19934),
                _ = i(96706),
                m = i(53548),
                p = i(79390),
                h = i(29595),
                x = i(74965),
                g = i(72288),
                A = i(66943),
                T = i(7555),
                v = i(73170),
                C = i(29504),
                N = i(59304),
                k = i(81877),
                y = i(85074),
                j = i.n(y);
            let f = (e) => {
                let { coverUri: t, title: i, isDisliked: r, closeToast: l } = e,
                    { formatMessage: a } = (0, o.A)(),
                    n = a(r ? { id: 'notifications-info.artist-unavailable-in-recommendations' } : { id: 'notifications-info.artist-available-in-recommendations' });
                return (0, s.jsx)(N.$, {
                    closeToast: l,
                    message: (0, s.jsxs)('div', {
                        className: j().message,
                        children: [
                            (0, s.jsx)(v.q, { children: (0, s.jsx)('p', { role: 'alert', 'aria-label': n }) }),
                            (0, s.jsx)(T.t, {
                                className: j().cover,
                                radius: 'round',
                                children: (0, s.jsx)(k.B, { className: j().image, src: t, alt: i, size: 100, fit: 'cover', withAvatarReplace: !0 }),
                            }),
                            (0, s.jsx)(C.HL, { className: j().text, variant: 'div', type: 'controls', size: 'm', 'aria-hidden': !0, children: n }),
                        ],
                    }),
                });
            };
            var E = i(64207),
                O = i(77455),
                b = i(48749),
                S = i(22505),
                I = i(5407),
                R = i(64284),
                P = i(98427),
                L = i(57934),
                D = i(84384),
                w = i(9618),
                M = i(95210),
                z = i(47964),
                B = i(46936),
                F = i(97956),
                H = i(98953),
                U = i(32721),
                X = i(18130),
                Y = i(56117),
                V = i(93091),
                q = i(27817),
                K = i(74064),
                G = i(15425),
                $ = i(81066),
                W = i(64546);
            let Z = (0, r.PA)((e) => {
                var t, i, r;
                let { artist: T, onOpenChange: v, open: C, ...N } = e,
                    { shouldShowBuySubscriptionModal: k, showBuySubscriptionModal: y } = (0, w.q)(),
                    {
                        settings: { isMobile: j },
                        modals: { artistAboutModal: Z },
                        trailer: J,
                        user: Q,
                        experiments: ee,
                    } = (0, g.g)(),
                    et = (0, O.A)(T),
                    ei = (0, E.K)(T),
                    es = ((e) => {
                        let { user: t } = (0, g.g)(),
                            { notify: i } = (0, x.l)(),
                            [r, l] = (0, m.useState)(!1),
                            { formatMessage: a } = (0, o.A)();
                        return (0, c.c)(async () => {
                            if (!e) return;
                            if (!t.isAuthorized)
                                return void i((0, s.jsx)(A.h, { error: a({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: h.u.ERROR });
                            if (r) return;
                            let o = { ...(0, _.HO)(e), isDisliked: !e.isDisliked };
                            l(!0);
                            let n = await e.toggleDislike();
                            (l(!1),
                                n === p.f.OK
                                    ? i((0, s.jsx)(f, { coverUri: o.coverUri, title: o.name, isDisliked: o.isDisliked }), { containerId: h.u.INFO })
                                    : i((0, s.jsx)(A.h, { error: a({ id: 'error-messages.error-during-action' }) }), { containerId: h.u.ERROR }));
                        });
                    })(T),
                    er = (0, L.F)(),
                    eo = ''.concat(R.U.ARTIST, '-').concat(null == T ? void 0 : T.id),
                    { formatMessage: el } = (0, o.A)(),
                    { utmLink: ea } = (0, D.f)({ blockId: R.U.ARTIST, contextType: n.K.Artist, contextId: null == T ? void 0 : T.id }),
                    { shareLink: en, pathname: ec } = (0, X.b)('/artist/:artistId', { params: { artistId: null != (i = null == T ? void 0 : T.id) ? i : '' } }),
                    ed = (0, b.A)({ entityVariant: B.D.ARTIST, urlParams: { id: null == T ? void 0 : T.id } }),
                    { isPlaying: eu, togglePlay: e_ } = (0, z.B)({
                        seeds: null != (r = null == T ? void 0 : T.seeds) ? r : [],
                        pageIdForFrom: P.b.RADIO,
                        blockIdForFrom: eo,
                        parentContextId: null == T ? void 0 : T.id,
                    }),
                    em = (0, I.P)(),
                    ep = el((null == T ? void 0 : T.isComposer) ? { id: 'artist.about-composer' } : { id: 'artist.about-artist' }),
                    eh = (0, c.c)(() => {
                        if (k && Q.isAuthorized) return void y();
                        eu || e_();
                    }),
                    ex = (0, c.c)(() => {
                        if (!em()) {
                            if (k) return void y();
                            (null == T ? void 0 : T.id) && (J.setUtmLink(ea), J.openArtistTrailer(T.id), er(l.DomainObjectType.Artist, T.id));
                        }
                    }),
                    eg = (0, c.c)(() => {
                        Z.open(null == T ? void 0 : T.id);
                    });
                (0, M.N)(C);
                let eA = { variant: H.Y.ARTIST, id: null == T ? void 0 : T.id, title: null == T ? void 0 : T.name, path: ec },
                    eT = ee.checkExperiment(F.z.WebEditorsFeatures, 'on'),
                    ev = null == T || null == (t = T.trailer) ? void 0 : t.isAvailable,
                    eC = ee.checkExperiment(F.z.WebNextArtistInfo, 'on'),
                    eN = !ee.checkExperiment(F.z.WebNextProductWithoutRecommendation, 'on');
                return (0, s.jsxs)(u.W1, {
                    isMobile: j,
                    offsetOptions: 10,
                    open: C,
                    onOpenChange: v,
                    ariaLabel: el({ id: 'interface-actions.context-menu' }),
                    containerDataTestId: a.Kq.artist.ARTIST_CONTEXT_MENU,
                    ...N,
                    children: [
                        eT && (0, s.jsx)(W.WithOffline, { fallback: (0, s.jsx)(S.d, { entityVariant: B.D.ARTIST, adminUrl: ed }) }),
                        !j && (0, s.jsx)(W.WithOffline, { fallback: (0, s.jsx)(q.L, { onClick: et, isPinned: null == T ? void 0 : T.isPinned }) }),
                        (0, s.jsx)(W.WithOffline, {
                            fallback: (0, s.jsx)(V.T, {
                                onClick: ei,
                                isLiked: null == T ? void 0 : T.isLiked,
                                disabled: !Q.isAuthorized || !(null == T ? void 0 : T.isAvailable),
                            }),
                        }),
                        ev && (0, s.jsx)(W.WithOffline, { fallback: (0, s.jsx)(G.N, { onClick: ex }) }),
                        eN &&
                            (0, s.jsx)(W.WithOffline, {
                                fallback: (0, s.jsx)($.C, { onClick: eh, disabled: !(null == T ? void 0 : T.isAvailable), variant: U.I.ARTIST, onOpenMenuChange: v }),
                            }),
                        (0, s.jsx)(K.H, { disabled: !T, shareLink: en, entityMeta: eA }),
                        eC &&
                            (0, s.jsx)(W.WithOffline, {
                                fallback: (0, s.jsx)(u.Dr, {
                                    onClick: eg,
                                    icon: (0, s.jsx)(d.I, { variant: 'info', size: 'xxs' }),
                                    'data-test-id': a.Kq.artist.ARTIST_CONTEXT_MENU_ABOUT_ARTIST_BUTTON,
                                    children: ep,
                                }),
                            }),
                        (0, s.jsx)(W.WithOffline, {
                            fallback: (0, s.jsx)(Y.D, { onClick: es, isDisliked: null == T ? void 0 : T.isDisliked, disabled: !(null == T ? void 0 : T.isAvailable) }),
                        }),
                    ],
                });
            });
        },
        43443: (e, t, i) => {
            'use strict';
            i.d(t, { t: () => p });
            var s = i(88800),
                r = i(65724),
                o = i(84961),
                l = i(53548),
                a = i(2058),
                n = i(17392),
                c = i(13607),
                d = i(52300),
                u = i(29504),
                _ = i(3099),
                m = i.n(_);
            let p = (0, o.PA)((e) => {
                let {
                        progress: t,
                        withIcon: i,
                        withCrownIcon: o,
                        position: _,
                        weight: p = 'normal',
                        isDisliked: h,
                        isDisabled: x,
                        className: g,
                        positionClassName: A,
                    } = e,
                    { formatMessage: T } = (0, a.A)(),
                    v = t || i,
                    C = (0, l.useMemo)(() => {
                        if (o) return 'crown';
                        switch (t) {
                            case c._.UP:
                                return 'chartUp';
                            case c._.DOWN:
                                return 'chartDown';
                            case c._.NEW:
                                return 'chartNew';
                            default:
                                return 'chartSame';
                        }
                    }, [t, o]),
                    N = (0, l.useMemo)(() => {
                        switch (t) {
                            case c._.UP:
                                return T({ id: 'entity-names.chart-up' });
                            case c._.DOWN:
                                return T({ id: 'entity-names.chart-down' });
                            case c._.NEW:
                                return T({ id: 'entity-names.chart-new' });
                            default:
                                return T({ id: 'entity-names.chart-same' });
                        }
                    }, [T, t]),
                    k = o ? 'crown' : t;
                return (0, s.jsxs)('div', {
                    className: (0, r.$)(m().root, g),
                    'data-test-id': n.OA.chart.CHART_PROGRESS,
                    children: [
                        (0, s.jsx)(u.HL, {
                            variant: 'div',
                            weight: p,
                            type: 'entity',
                            size: 'm',
                            className: (0, r.$)(m().position, A, { [m().position_disliked]: h, [m().position_disabled]: x }),
                            'data-test-id': n.OA.chart.CHART_PROGRESS_POSITION,
                            children: _,
                        }),
                        v &&
                            (0, s.jsx)(d.I, {
                                variant: C,
                                size: 'xxs',
                                'aria-label': N,
                                className: (0, r.$)(m().progress, m()['progress_'.concat(k)], { [m().progress_disliked]: h, [m().progress_disabled]: x }),
                                'data-test-id': n.OA.chart.CHART_PROGRESS_ICON,
                            }),
                    ],
                });
            });
        },
        43662: (e) => {
            e.exports = {
                root: 'CollectionArtistsPage_root__EH25F',
                scrollContainer: 'CollectionArtistsPage_scrollContainer__tT6NQ',
                important: 'CollectionArtistsPage_important__MG_XV',
                footer: 'CollectionArtistsPage_footer__aZrx3',
                item: 'CollectionArtistsPage_item___cy_9',
                contentBlock: 'CollectionArtistsPage_contentBlock__5QDcr',
                contentBlock_withMarginTop: 'CollectionArtistsPage_contentBlock_withMarginTop__e4_VX',
                gridLayout: 'CollectionArtistsPage_gridLayout__00brJ',
                subTitle: 'CollectionArtistsPage_subTitle__My70z',
            };
        },
        46606: (e, t, i) => {
            'use strict';
            var s;
            (i.d(t, { X: () => s }),
                (function (e) {
                    ((e[(e.NOT_MODIFIED = 304)] = 'NOT_MODIFIED'),
                        (e[(e.NOT_FOUND = 404)] = 'NOT_FOUND'),
                        (e[(e.BAD_REQUEST = 400)] = 'BAD_REQUEST'),
                        (e[(e.REQUEST_TIMEOUT = 408)] = 'REQUEST_TIMEOUT'),
                        (e[(e.PRECONDITION_FAILED = 412)] = 'PRECONDITION_FAILED'),
                        (e[(e.TEAPOT = 418)] = 'TEAPOT'));
                })(s || (s = {})));
        },
        49826: (e) => {
            e.exports = {
                subTitle: 'CollectionArtistsPageTopArtists_subTitle__xJdoJ',
                gridLayout: 'CollectionArtistsPageTopArtists_gridLayout__H2AR_',
                chart: 'CollectionArtistsPageTopArtists_chart__inbPE',
                position: 'CollectionArtistsPageTopArtists_position__YDoRC',
                listenTime: 'CollectionArtistsPageTopArtists_listenTime__NqxRf',
            };
        },
        54243: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => a });
            var s = i(88800),
                r = i(4370),
                o = i(15077),
                l = i(42729);
            let a = (e) => {
                let { artist: t, closeToast: i } = e;
                return (0, s.jsx)(l.O, {
                    closeToast: i,
                    entityVariant: o.c.ARTIST,
                    entityUrl: t.url,
                    collectionUrl: r.Z.collectionArtists.href,
                    coverUri: t.coverUri,
                    entityTitle: t.name,
                    isLiked: t.isLiked,
                });
            };
        },
        54320: (e, t, i) => {
            'use strict';
            i.d(t, { X: () => d });
            var s = i(88800),
                r = i(53548),
                o = i(29993),
                l = i(9492),
                a = i(29595),
                n = i(74965),
                c = i(74773);
            let d = (e, t) => {
                let { notify: i, dismiss: d } = (0, n.l)(),
                    u = (0, r.useRef)(void 0),
                    _ = (0, o.c)(() => {
                        var i;
                        (d({ notificationId: u.current }), (u.current = 0));
                        let s = [...(null != (i = e.lastRejectedPagesList) ? i : [])].reverse().filter((t) => {
                            var i;
                            return (null == (i = e.pageStates) ? void 0 : i[t]) === c.G.REJECT;
                        });
                        (e.resetRejectedPagesState(),
                            s.forEach((e) => {
                                t(e);
                            }));
                    });
                (0, r.useEffect)(() => {
                    e.rejectedPagesCount > 0 && !u.current && (u.current = i((0, s.jsx)(l.L, { reloadBlocks: _ }), { containerId: a.u.ERROR, autoClose: !1 }));
                }, [d, _, i, e.rejectedPagesCount]);
            };
        },
        56117: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => d });
            var s = i(88800),
                r = i(84961),
                o = i(88969),
                l = i(17392),
                a = i(52300),
                n = i(19934),
                c = i(72288);
            let d = (0, r.PA)((e) => {
                let { isDisliked: t, onClick: i, disabled: r, className: d } = e,
                    { user: u } = (0, c.g)();
                return (0, s.jsx)(n.Dr, {
                    onClick: i,
                    className: d,
                    icon: (0, s.jsx)(a.I, { variant: t ? 'disliked' : 'dislike', size: 'xxs' }),
                    role: 'menuitemcheckbox',
                    'aria-checked': t,
                    disabled: r || !u.isAuthorized,
                    'data-test-id': l.S7.CONTEXT_MENU_DISLIKE_BUTTON,
                    children: (0, s.jsx)(o.A, { id: 'interface-actions.do-not-like' }),
                });
            });
        },
        57328: (e, t, i) => {
            'use strict';
            i.d(t, { WithAuth: () => h });
            var s = i(88800),
                r = i(84961),
                o = i(58390),
                l = i(65724),
                a = i(88969),
                n = i(29504),
                c = i(7628),
                d = i(42674),
                u = i.n(d);
            let _ = (0, r.PA)(() =>
                (0, s.jsxs)('div', {
                    className: u().root,
                    children: [
                        (0, s.jsx)(n.DZ, {
                            className: (0, l.$)(u().title, u().important),
                            variant: 'h3',
                            size: 'xs',
                            children: (0, s.jsx)(a.A, { id: 'authorization.enter-title' }),
                        }),
                        (0, s.jsx)(n.HL, {
                            className: (0, l.$)(u().text, u().important),
                            variant: 'span',
                            type: 'text',
                            size: 'l',
                            weight: 'normal',
                            children: (0, s.jsx)(a.A, { id: 'authorization.enter-text' }),
                        }),
                        (0, s.jsx)(c.H, { size: 'l', className: u().button }),
                    ],
                }),
            );
            var m = i(4370),
                p = i(72288);
            let h = (0, r.PA)((e) => {
                let { children: t, withRedirectToMainPage: i } = e,
                    { user: r } = (0, p.g)();
                return r.isAuthorized ? t : (i && (0, o.redirect)(m.Z.main.href), (0, s.jsx)(_, {}));
            });
        },
        60266: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => l });
            var s = i(88800);
            i(30282);
            var r = i(11006),
                o = i.n(r);
            let l = (e) => {
                let { children: t } = e;
                return (0, s.jsx)('footer', { className: o().empty });
            };
        },
        60761: (e, t, i) => {
            'use strict';
            i.d(t, { CollectionArtistsPage: () => F });
            var s = i(88800),
                r = i(65724),
                o = i(84961),
                l = i(53548),
                a = i(2058),
                n = i(88969),
                c = i(87999),
                d = i(37523),
                u = i(7833),
                _ = i(76903),
                m = i(17392),
                p = i(29504),
                h = i(21256),
                x = i(69630),
                g = i(98427),
                A = i(46422),
                T = i(44230),
                v = i(37670),
                C = i(72288),
                N = i(54320),
                k = i(86790),
                y = i(60266),
                j = i(93317),
                f = i(37770),
                E = i(79418),
                O = i(43662),
                b = i.n(O),
                S = i(52300),
                I = i(67228),
                R = i.n(I);
            let P = (e) => {
                let { className: t } = e;
                return (0, s.jsxs)('div', {
                    className: R().root,
                    children: [
                        (0, s.jsxs)('div', {
                            className: (0, r.$)(R().emptyContent, t),
                            children: [
                                (0, s.jsx)(S.I, { className: R().emptyContentIcon, size: 'l', variant: 'album' }),
                                (0, s.jsx)(p.DZ, {
                                    className: R().emptyContentTitle,
                                    variant: 'h3',
                                    size: 'xs',
                                    children: (0, s.jsx)(n.A, { id: 'error-messages.empty-collection-artists-title' }),
                                }),
                            ],
                        }),
                        (0, s.jsx)(y.A, { children: (0, s.jsx)(k.w, { className: R().footer }) }),
                    ],
                });
            };
            var L = i(19981),
                D = i(43443),
                w = i(1698),
                M = i(49826),
                z = i.n(M);
            let B = (0, o.PA)(() => {
                    let { collection: e } = (0, C.g)(),
                        { formatMessage: t } = (0, a.A)(),
                        i = t({ id: 'loading-messages.entity-is-loading' }, { entityName: t({ id: 'entity-names.artist' }) }),
                        r = (0, l.useMemo)(
                            () =>
                                e.artists.topArtists.isResolved
                                    ? e.artists.topArtists.items.map((e, i) => {
                                          var r;
                                          let o = e.listenTimeSeconds ? (0, L.U)(e.listenTimeSeconds, t) : null;
                                          return (0, s.jsx)(
                                              u.B,
                                              {
                                                  objectType: c.DomainObjectType.Artist,
                                                  objectId: e.artist.id,
                                                  objectPosX: i + 1,
                                                  objectPosY: 1,
                                                  children: (0, s.jsx)(
                                                      h.a,
                                                      {
                                                          topTitleElement:
                                                              e.top &&
                                                              (0, s.jsx)(
                                                                  D.t,
                                                                  {
                                                                      className: z().chart,
                                                                      position: e.top.position,
                                                                      progress: e.top.progress,
                                                                      weight: 'bold',
                                                                      positionClassName: z().position,
                                                                      withIcon: 0 === i,
                                                                      withCrownIcon: 0 === i,
                                                                  },
                                                                  e.getKey('ArtistTop'),
                                                              ),
                                                          bottomTitleElement: o
                                                              ? (0, s.jsx)(p.HL, {
                                                                    className: z().listenTime,
                                                                    variant: 'div',
                                                                    type: 'entity',
                                                                    size: 's',
                                                                    weight: 'medium',
                                                                    lineClamp: 1,
                                                                    'data-test-id': m.Xk.collection.COLLECTION_TOP_ARTISTS_LISTEN_TIME,
                                                                    children: o,
                                                                })
                                                              : void 0,
                                                          artist: e.artist,
                                                          contentLinesCount: 4,
                                                      },
                                                      null == (r = e.artist) ? void 0 : r.id,
                                                  ),
                                              },
                                              e.artist.id,
                                          );
                                      })
                                    : (0, s.jsx)(w.e, { linesCount: 4, count: 3, isActive: !0, 'aria-label': i, round: !0, centered: !0 }),
                            [t, i, e.artists.topArtists.isResolved, e.artists.topArtists.items],
                        );
                    return (0, s.jsxs)(d.F, {
                        blockId: 'collection_artists_top',
                        blockType: 'ARTISTS_TOP',
                        blockPosX: 1,
                        blockPosY: 1,
                        blockIdForFrom: 'collection_artists_top',
                        objectsCount: e.artists.topArtists.items.length,
                        children: [
                            (0, s.jsx)(p.DZ, {
                                size: 's',
                                weight: 'bold',
                                variant: 'h2',
                                className: z().subTitle,
                                'data-test-id': m.Xk.collection.COLLECTION_TOP_ARTISTS_HEADING,
                                children: (0, s.jsx)(n.A, { id: 'entity-names.top-artists' }),
                            }),
                            (0, s.jsx)('div', { className: z().gridLayout, 'data-test-id': m.Xk.collection.COLLECTION_TOP_ARTISTS_GRID, children: r }),
                        ],
                    });
                }),
                F = (0, o.PA)(() => {
                    let {
                            user: e,
                            collection: t,
                            settings: { isMobile: i },
                            library: o,
                        } = (0, C.g)(),
                        { formatMessage: O } = (0, a.A)(),
                        { contentScrollRef: S, setContentScrollRef: I } = (0, T.g)(),
                        R = (0, A.W)();
                    ((0, v.J)(t.artists.isResolved),
                        (0, l.useEffect)(
                            () => () => {
                                t.artists.reset();
                            },
                            [t.artists],
                        ));
                    let L = (0, l.useCallback)(
                        (i) => {
                            e.account.data.uid && t.artists.getData({ userId: e.account.data.uid, page: i, pageSize: 20 });
                        },
                        [t.artists, e.account.data.uid],
                    );
                    (0, N.X)(t.artists.pagesLoader, L);
                    let D = O({ id: 'loading-messages.entity-is-loading' }, { entityName: O({ id: 'entity-names.artist' }) }),
                        w = (0, l.useCallback)(
                            (e) => {
                                var i;
                                let r = null == (i = t.artists.items) ? void 0 : i[e];
                                return r
                                    ? (0, s.jsx)(d.F, {
                                          blockId: 'collection_artist',
                                          blockType: 'ARTIST',
                                          blockPosX: e + 1,
                                          blockPosY: 1,
                                          blockIdForFrom: r.id,
                                          objectsCount: t.artists.items.length,
                                          children: (0, s.jsx)(u.B, {
                                              objectType: c.DomainObjectType.Artist,
                                              objectId: r.id,
                                              objectPosX: 1,
                                              objectPosY: 1,
                                              children: (0, s.jsx)(h.a, { artist: r, contentLinesCount: 3 }, r.id),
                                          }),
                                      })
                                    : (0, s.jsx)(f.V, { isActive: !0, 'aria-label': D, round: !0, centered: !0 });
                            },
                            [t.artists.items, D],
                        ),
                        M = t.artists.topArtists.items.length || !t.artists.topArtists.isResolved,
                        z = (0, l.useMemo)(
                            () =>
                                M
                                    ? () =>
                                          (0, s.jsxs)('div', {
                                              className: (0, r.$)(b().contentBlock, b().contentBlock_withMarginTop),
                                              children: [
                                                  (0, s.jsx)(B, {}),
                                                  (t.artists.items.length > 0 || !t.artists.isResolved) &&
                                                      (0, s.jsx)(p.DZ, {
                                                          size: 's',
                                                          weight: 'bold',
                                                          variant: 'h2',
                                                          className: b().subTitle,
                                                          children: (0, s.jsx)(n.A, { id: 'entity-names.liked-artist' }),
                                                      }),
                                              ],
                                          })
                                    : null,
                            [M, t.artists.items.length, t.artists.isResolved],
                        ),
                        F = (0, l.useMemo)(() => ({ Header: z, Footer: () => (0, s.jsx)(y.A, { children: (0, s.jsx)(k.w, { className: b().footer }) }) }), [z]),
                        H = t.artists.isShimmerVisible ? 10 : t.artists.items.length,
                        U = (0, l.useMemo)(
                            () =>
                                0 === t.artists.items.length && 0 === t.artists.topArtists.items.length && t.artists.isResolved
                                    ? (0, s.jsx)(P, {})
                                    : (0, s.jsx)(E.$, {
                                          className: (0, r.$)(b().scrollContainer, b().important),
                                          customComponents: F,
                                          itemContentCallback: w,
                                          initialItemCount: H,
                                          totalCount: H,
                                          onGetDataByPage: L,
                                          pageSize: 20,
                                          totalRequests: t.artists.requestsCount,
                                          listClassName: (0, r.$)(b().contentBlock, b().gridLayout, { [b().contentBlock_withMarginTop]: !M }),
                                          itemClassName: b().item,
                                          handleRef: I,
                                          context: { listAriaLabel: O({ id: 'collection.liked-artists-list' }) },
                                          isMobileLayout: i,
                                          useWindowScroll: i,
                                      }),
                            [t.artists.items.length, t.artists.topArtists.items.length, t.artists.isResolved, t.artists.requestsCount, F, O, L, i, w, H, I, M],
                        );
                    if (e.account.data.uid && t.artists.isNeededToLoad) {
                        let i = [t.artists.getData({ userId: e.account.data.uid }), t.artists.getDataTopArtists(), o.getData()];
                        (0, l.use)(Promise.allSettled(i));
                    }
                    return (0, s.jsx)(_.a, {
                        pageId: c.AppScreen.CollectionArtistsScreen,
                        pageIdForFrom: g.b.OWN_ARTISTS,
                        children: (0, s.jsx)(x.h, {
                            scrollElement: S,
                            outerTitle: O({ id: 'entity-names.artists' }),
                            children: (0, s.jsxs)('div', {
                                className: b().root,
                                'data-test-id': m.Xk.collection.COLLECTION_ARTISTS_PAGE,
                                children: [
                                    (0, s.jsx)(j.Y, {
                                        variant: j.V.TEXT,
                                        withForwardControl: !1,
                                        withBackwardControl: R.canBack,
                                        children: (0, s.jsx)(p.DZ, {
                                            id: 'collection-artists-header',
                                            variant: 'h1',
                                            weight: 'bold',
                                            size: 'xl',
                                            lineClamp: 1,
                                            children: (0, s.jsx)(n.A, { id: 'entity-names.artists' }),
                                        }),
                                    }),
                                    U,
                                ],
                            }),
                        }),
                    });
                });
        },
        62293: (e, t, i) => {
            'use strict';
            i.d(t, { v: () => r });
            var s = i(97956);
            let r = (e) => {
                let { checkExperiment: t, getDisclaimerContent: i, getExplicitContent: r, userRegion: o } = e;
                return 'ru' === o && t(s.z.WebNextFooterDisclaimer, 'on') ? i() : r();
            };
        },
        64207: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => m });
            var s = i(88800),
                r = i(96706),
                o = i(53548),
                l = i(2058),
                a = i(79390),
                n = i(29595),
                c = i(74965),
                d = i(72288),
                u = i(66943),
                _ = i(54243);
            let m = (e) => {
                let { user: t } = (0, d.g)(),
                    { notify: i } = (0, c.l)(),
                    [m, p] = (0, o.useState)(!1),
                    { formatMessage: h } = (0, l.A)();
                return (0, o.useCallback)(async () => {
                    if (!e) return;
                    if (!t.isAuthorized) return void i((0, s.jsx)(u.h, { error: h({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: n.u.ERROR });
                    if (m) return;
                    let o = { ...(0, r.HO)(e), isLiked: !e.isLiked };
                    p(!0);
                    let l = await e.toggleLike();
                    (p(!1),
                        l === a.f.OK
                            ? i((0, s.jsx)(_.T, { artist: o }), { containerId: n.u.INFO })
                            : i((0, s.jsx)(u.h, { error: h({ id: 'error-messages.error-during-action' }) }), { containerId: n.u.ERROR }));
                }, [e, t.isAuthorized, m, h, i]);
            };
        },
        64247: (e, t, i) => {
            'use strict';
            i.d(t, { l: () => l });
            var s = i(88800),
                r = i(15077),
                o = i(33719);
            let l = (e) => {
                let { artist: t, closeToast: i } = e;
                return (0, s.jsx)(o.k, {
                    closeToast: i,
                    entityVariant: r.c.ARTIST,
                    coverUri: t.coverUri,
                    entityUrl: t.url,
                    entityTitle: t.name,
                    isPinned: t.isPinned,
                    radius: 'round',
                });
            };
        },
        67228: (e) => {
            e.exports = {
                root: 'CollectionArtistsPageEmpty_root__D39tF',
                emptyContent: 'CollectionArtistsPageEmpty_emptyContent__oJc6T',
                emptyContentIcon: 'CollectionArtistsPageEmpty_emptyContentIcon__uZQwm',
                emptyContentTitle: 'CollectionArtistsPageEmpty_emptyContentTitle__Vqy_Q',
                footer: 'CollectionArtistsPageEmpty_footer__O_8aS',
            };
        },
        67990: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => s });
            let s = (e) => 'object' == typeof e && null !== e && 'request' in e && null !== e.request;
        },
        70621: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => n });
            var s = i(53548),
                r = i(63582),
                o = i(245),
                l = i(22681),
                a = i(56374);
            let n = (0, r.n)({ event: 'LandingBlock.ActionPerformed', kind: 'hook', requiredScopes: ['screen', 'block', 'object'] }, () => {
                let e = (0, o.N)(),
                    t = (0, l.w)(),
                    i = (0, s.useMemo)(() => (t ? e.createBlockReporter(t.snapshot) : null), [e, t]);
                return (0, a.c)((e) => {
                    t?.object && i && i.actionPerformed({ ...e, viewUuid: (t.object.activeViewSession ?? t.object.viewSession).start() });
                });
            });
        },
        76903: (e, t, i) => {
            'use strict';
            i.d(t, { a: () => u });
            var s = i(88800),
                r = i(53548),
                o = i(53534),
                l = i(63582),
                a = i(245);
            let n = new WeakMap();
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
                        n.get(t) ??
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
                    (n.set(t, i), (this.queue = i));
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
                    let i = (0, a.N)(),
                        l = ((e) =>
                            (!Object.hasOwn(e, 'mainObjectType') || void 0 !== e.mainObjectType) &&
                            ('string' == typeof e.mainObjectId ||
                                (!Object.hasOwn(e, 'mainObjectId') && (!Object.hasOwn(e, 'mainObjectType') || e.mainObjectType === d.DomainObjectType.NonApplicable))))(
                            t,
                        ),
                        [n, u] = (0, r.useState)(() => {
                            let e = new c(i.createScreenSession().screenViewUuid, i);
                            return { client: i, input: t, isReady: l, scope: l ? i.createScreenScope(t, e) : null, session: e };
                        });
                    if (
                        n.client !== i ||
                        n.input.pageId !== t.pageId ||
                        n.input.skeletonId !== t.skeletonId ||
                        n.input.mainObjectType !== t.mainObjectType ||
                        n.input.mainObjectId !== t.mainObjectId
                    ) {
                        let r = new c(i.createScreenSession().screenViewUuid, i),
                            a = { client: i, input: t, isReady: l, scope: l ? i.createScreenScope(t, r) : null, session: r };
                        return (u(a), (0, s.jsx)(o.k, { value: a, children: e }));
                    }
                    if (
                        n.isReady !== l ||
                        n.input.displayReasonId !== t.displayReasonId ||
                        n.input.pageIdForFrom !== t.pageIdForFrom ||
                        n.input.pagePlacement !== t.pagePlacement ||
                        n.input.pageStyle !== t.pageStyle
                    ) {
                        let r = { ...n, input: t, isReady: l, scope: l ? i.createScreenScope(t, n.session) : null };
                        return (u(r), (0, s.jsx)(o.k, { value: r, children: e }));
                    }
                    return (0, s.jsx)(o.k, { value: n, children: e });
                },
            );
        },
        77455: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => _ });
            var s = i(88800),
                r = i(96706),
                o = i(53548),
                l = i(2058),
                a = i(29595),
                n = i(74965),
                c = i(72288),
                d = i(66943),
                u = i(64247);
            let _ = (e) => {
                let { user: t } = (0, c.g)(),
                    { notify: i } = (0, n.l)(),
                    { formatMessage: _ } = (0, l.A)(),
                    [m, p] = (0, o.useState)(!1);
                return (0, o.useCallback)(async () => {
                    if (!e) return;
                    if (!t.isAuthorized) return void i((0, s.jsx)(d.h, { error: _({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: a.u.ERROR });
                    if (m) return;
                    let o = { ...(0, r.HO)(e), isPinned: !e.isPinned };
                    p(!0);
                    let l = await e.togglePin();
                    (p(!1),
                        l
                            ? i((0, s.jsx)(u.l, { artist: o }), { containerId: a.u.INFO })
                            : i((0, s.jsx)(d.h, { error: _({ id: 'error-messages.error-during-action' }) }), { containerId: a.u.ERROR }));
                }, [e, t.isAuthorized, m, _, i]);
            };
        },
        79418: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => x });
            var s = i(88800),
                r = i(65724),
                o = i(61013),
                l = i(53548);
            let a = (e) => {
                    let { style: t, forwardRef: i, context: r, ...o } = e,
                        l = (null == r ? void 0 : r.listAriaLabel) || void 0,
                        a = (null == r ? void 0 : r.listRole) || 'region';
                    return (0, s.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: a, 'aria-label': l, style: { ...t }, ref: i, ...o });
                },
                n = (0, l.forwardRef)((e, t) => (0, s.jsx)(a, { forwardRef: t, ...e }));
            var c = i(16434),
                d = i.n(c);
            let u = (e) => {
                    let { style: t, forwardRef: i, withFooter: o, withHeader: l, withForceScroll: a, ...n } = e;
                    return (0, s.jsx)('div', {
                        className: (0, r.$)(d().scroller, { [d().scroller_withFooter]: o, [d().scroller_withHeader]: l, [d().scroller_withForceScroll]: a }),
                        style: { ...t },
                        ref: i,
                        ...n,
                        tabIndex: -1,
                    });
                },
                _ = (0, l.forwardRef)((e, t) => (0, s.jsx)(u, { forwardRef: t, ...e }));
            var m = i(55482),
                p = i(75151);
            let h = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: i,
                            onRangeHandler: r,
                            debounceDurationInMs: o = 100,
                            totalCount: a = 0,
                            shouldTriggerRangeChangedOn: n = [],
                            endReached: c,
                            virtuosoRef: d,
                            ...u
                        } = e,
                        [_, h] = (0, l.useState)(null),
                        x = (0, l.useMemo)(
                            () =>
                                (0, m.A)((e) => {
                                    if ((null == r || r(e), n.length > 0 && h(e), t && i)) {
                                        let s = Math.floor(e.endIndex / t) + 1,
                                            r = Math.floor(e.startIndex / t);
                                        for (let e = r; e < s; e++) i(e);
                                    }
                                }, o),
                            [o, r, t, i, n],
                        );
                    (0, l.useEffect)(() => {
                        n.length > 0 && _ && x(_);
                    }, n);
                    let g = (0, l.useMemo)(() => {
                        if (c)
                            return (0, m.A)((e) => {
                                c(e);
                            }, o);
                    }, [c, o]);
                    return (0, s.jsx)(p.sN, { ref: d, rangeChanged: x, totalCount: a, endReached: g, ...u });
                },
                x = (e) => {
                    let {
                            className: t,
                            customComponents: i,
                            onGetDataByPage: a,
                            onGetDataByRange: c,
                            itemClassName: u,
                            itemContentCallback: m,
                            listClassName: p,
                            overscan: x = 700,
                            pageSize: g = 20,
                            totalCount: A,
                            totalRequests: T,
                            debounceDurationInMs: v,
                            initialItemCount: C,
                            minInitialItemCount: N = 20,
                            handleRef: k,
                            alwaysShowScrollbar: y = !1,
                            testId: j,
                            isMobileLayout: f = !1,
                            shouldTriggerRangeChangedOn: E,
                            ...O
                        } = e,
                        [b, S] = (0, l.useState)(!1),
                        I = (0, l.useMemo)(
                            () =>
                                (0, o.A)((e) => {
                                    S(e);
                                }, 100),
                            [],
                        ),
                        R = (0, l.useMemo)(() => {
                            var e, t;
                            return f
                                ? {
                                      Scroller: _,
                                      List: null != (e = null == i ? void 0 : i.List) ? e : n,
                                      Item: null == i ? void 0 : i.Item,
                                      ScrollSeekPlaceholder: null == i ? void 0 : i.ScrollSeekPlaceholder,
                                  }
                                : {
                                      Scroller: _,
                                      List: null != (t = null == i ? void 0 : i.List) ? t : n,
                                      Item: null == i ? void 0 : i.Item,
                                      Header: null == i ? void 0 : i.Header,
                                      Footer: null == i ? void 0 : i.Footer,
                                      ScrollSeekPlaceholder: null == i ? void 0 : i.ScrollSeekPlaceholder,
                                  };
                        }, [i, T, f]),
                        P = C ? Math.min(C, N) : void 0;
                    return (0, s.jsxs)('div', {
                        className: (0, r.$)(d().root, { [d().root_scrolling]: b || y, [d().root_notScrolling]: !b && !y }, t),
                        'data-test-id': j,
                        children: [
                            f && (null == i ? void 0 : i.Header) && i.Header(),
                            (0, s.jsx)(h, {
                                overscan: x,
                                components: R,
                                listClassName: p,
                                itemClassName: u,
                                isScrolling: I,
                                itemContent: m,
                                scrollerRef: k,
                                totalCount: A,
                                pageSize: g,
                                onPageHandler: a,
                                onRangeHandler: c,
                                debounceDurationInMs: v,
                                initialItemCount: P,
                                shouldTriggerRangeChangedOn: E,
                                ...O,
                            }),
                            f && (null == i ? void 0 : i.Footer) && i.Footer(),
                        ],
                    });
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
        86790: (e, t, i) => {
            'use strict';
            i.d(t, { w: () => j });
            var s = i(88800),
                r = i(65724),
                o = i(84961),
                l = i(2058),
                a = i(30282),
                n = i(94144),
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
                    let { formatMessage: t, language: i, tld: s, year: r } = e;
                    return {
                        year: r,
                        yandexMusic: { id: c.YANDEX, title: t({ id: 'footer.yandex-music' }), url: d(c.YANDEX, s, i) },
                        yandexProjects: { id: c.YANDEX_PROJECTS, title: t({ id: 'footer.yandex-project' }), url: d(c.YANDEX_PROJECTS, s, i) },
                    };
                };
            var _ = i(62293),
                m = i(99839);
            let p = (e) => e(new Date(), (0, m.m)());
            var h = i(51611),
                x = i(72288),
                g = i(11006),
                A = i.n(g),
                T = i(17392),
                v = i(29504),
                C = i(91292);
            let N = (e) => {
                    let { className: t, data: i } = e;
                    return (0, s.jsxs)('div', {
                        className: (0, r.$)(A().copyrights, t),
                        'data-test-id': T.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, s.jsxs)(v.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: A().text,
                                children: [
                                    '\xa9 ',
                                    i.year,
                                    ' \xa0',
                                    (0, s.jsx)(C.N, {
                                        target: '_blank',
                                        href: i.yandexMusic.url,
                                        className: (0, r.$)(A().copyrightLink, A().yandexMusicLink),
                                        'data-test-id': T.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: i.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, s.jsx)(v.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, s.jsx)(C.N, {
                                target: '_blank',
                                href: i.yandexProjects.url,
                                className: A().copyrightLink,
                                'data-test-id': T.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: i.yandexProjects.title,
                            }),
                        ],
                    });
                },
                k = (e) => {
                    let { disclaimer: t, links: i } = e;
                    return (0, s.jsxs)('div', {
                        className: A().links,
                        children: [
                            (0, s.jsx)('ol', {
                                className: A().list,
                                'data-test-id': T.S7.FOOTER_LINKS_LIST,
                                children: i.map((e) => {
                                    let { id: t, title: i, url: r } = e;
                                    return (0, s.jsx)(
                                        'li',
                                        {
                                            className: A().item,
                                            children: (0, s.jsx)(C.N, { target: '_blank', href: r, className: A().link, 'data-test-id': T.S7.FOOTER_LINK, children: i }),
                                        },
                                        t,
                                    );
                                }),
                            }),
                            (0, s.jsx)(v.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: A().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: t },
                                'data-test-id': T.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                y = (e) => {
                    let { className: t, data: i } = e;
                    return (0, s.jsxs)('footer', {
                        className: (0, r.$)(A().root, A().important, t),
                        'data-test-id': T.S7.FOOTER,
                        children: [(0, s.jsx)(k, { links: i.links, disclaimer: i.disclaimer }), (0, s.jsx)(N, { data: i.copyrights })],
                    });
                };
            (0, o.PA)((e) => {
                let { className: t } = e,
                    { location: i } = (0, x.g)(),
                    { formatDate: r, formatMessage: o } = (0, l.A)(),
                    { language: a } = (0, h.h)(),
                    n = u({ formatMessage: o, language: a, tld: i.tld, year: p(r) });
                return (0, s.jsx)(N, { className: t, data: n });
            });
            let j = (0, o.PA)((e) => {
                var t;
                let { className: i } = e,
                    { experiments: o, location: m, user: g } = (0, x.g)(),
                    { formatDate: T, formatMessage: v } = (0, l.A)(),
                    { isEnabled: C } = null != (t = (0, n.P)()) ? t : {},
                    { language: N } = (0, h.h)(),
                    k = ((e) => {
                        let { checkExperiment: t, formatMessage: i, isWebApplication: s, language: r, tld: o, userRegion: l, year: a } = e;
                        return {
                            links: ((e) => {
                                let { formatMessage: t, isWebApplication: i, tld: s, language: r, userRegion: o } = e,
                                    l = { id: c.COPYRIGHT_HOLDER, title: t({ id: 'footer.links-copyright-holders' }), url: d(c.COPYRIGHT_HOLDER, s, r) },
                                    a = { id: c.PRIVACY_POLICY, title: t({ id: 'footer.links-privacy-policy' }), url: d(c.PRIVACY_POLICY, s, r) },
                                    n = { id: c.AGREEMENT, title: t({ id: 'footer.links-terms' }), url: d(c.AGREEMENT, s, r) },
                                    u = { id: c.RECOMMENDATION_RULES, title: t({ id: 'footer.links-recommendation-rules' }), url: d(c.RECOMMENDATION_RULES, s, r) },
                                    _ = { id: c.HELP, title: t({ id: 'footer.links-help' }), url: d(c.HELP, s, r) },
                                    m = [l, n, u];
                                return (i && 'ru' === o && m.push(a), m.push(_), m);
                            })({ formatMessage: i, isWebApplication: s, language: r, tld: o, userRegion: l }),
                            disclaimer: (0, _.v)({
                                checkExperiment: t,
                                getDisclaimerContent: () => i({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => i({ id: 'footer.explicit-content' }),
                                userRegion: l,
                            }),
                            copyrights: u({ formatMessage: i, language: r, tld: o, year: a }),
                        };
                    })({
                        checkExperiment: (e, t) => o.checkExperiment(e, t),
                        formatMessage: v,
                        isWebApplication: a.$3,
                        tld: m.tld,
                        language: N,
                        userRegion: g.account.data.userSessionRegionIso,
                        year: p(T),
                    });
                return (0, s.jsx)(y, { className: (0, r.$)({ [A().root_withOffsetForDeeplink]: C }, i), data: k });
            });
        },
        88441: (e, t, i) => {
            (Promise.resolve().then(i.bind(i, 57328)), Promise.resolve().then(i.bind(i, 60761)));
        },
        89916: (e, t, i) => {
            'use strict';
            i.d(t, { GX: () => o.G, X1: () => s.X, m5: () => r.m });
            var s = i(46606),
                r = i(91136),
                o = i(19840);
            i(17017);
        },
        91136: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => r });
            class s extends Error {
                name = 'BaseException';
                message;
                code;
                data;
                stack;
                constructor(e, t = {}) {
                    let { code: i = 'E_INTERNAL', data: r = {}, ...o } = t,
                        l = e || 'Internal error';
                    (super(l, o), (this.message = l), (this.code = i), (this.data = r), (this.stack = Error(l).stack), Object.setPrototypeOf(this, s.prototype));
                }
            }
            class r extends s {
                name = 'HttpException';
                constructor(e = 'Http Client error', { code: t = 'E_HTTP_CLIENT', ...i } = {}) {
                    (super(e, { code: t, ...i }), Object.setPrototypeOf(this, r.prototype));
                }
            }
        },
        91959: (e, t, i) => {
            'use strict';
            i.d(t, { S: () => r });
            var s = i(58217);
            let r = (e) => {
                let { artist: t, callback: i, shouldHistoryBack: r } = e;
                return (0, s.l)({ entity: t, callback: i, modalBehavior: void 0 === r ? void 0 : { shouldHistoryBack: r }, preventDefaultWhenSafe: !0 });
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
            i.d(t, { H: () => r, P: () => o });
            var s = i(53548);
            let r = (0, s.createContext)(null),
                o = () => (0, s.useContext)(r);
        },
        99839: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => s });
            let s = () => ({ year: 'numeric' });
        },
        99890: (e, t, i) => {
            'use strict';
            i.d(t, { C8: () => o, UC: () => l, dM: () => a, uV: () => n });
            var s = i(89916),
                r = i(67990);
            let o = (e) => {
                    if (void 0 === e || '' === e) return 'missing';
                    let t = Number(e);
                    return !Number.isFinite(t) || t < 0 ? 'invalid' : t < 86400 ? 'lt-1d' : t <= 2592e3 ? '1-30d' : 'gt-30d';
                },
                l = (e) => (e.uid ? 'authorized' : 'no-uid'),
                a = (e) => {
                    if (!(e instanceof s.m5) || !(0, r.N)(e.cause)) return 'unexpected';
                    let t = ((e) => {
                        if (!(0, r.N)(e.cause)) return;
                        let t = e.cause.response;
                        if ('object' == typeof t && null !== t) {
                            if ('statusCode' in t && 'number' == typeof t.statusCode) return t.statusCode;
                            if ('status' in t && 'number' == typeof t.status) return t.status;
                        }
                    })(e);
                    return void 0 === t ? 'transport' : 401 === t ? '401' : t >= 400 && t < 500 ? '4xx' : t >= 500 && t < 600 ? '5xx' : 'unexpected';
                },
                n = (e) => {
                    try {
                        var t;
                        null == (t = window.musicDesktop) || t.authorization.reportDiagnostic(e);
                    } catch (e) {}
                };
        },
    },
    (e) => {
        (e.O(
            0,
            [
                7908, 4700, 3248, 5038, 1147, 1191, 7072, 8655, 2691, 7065, 6706, 4771, 8832, 6904, 4495, 2058, 3578, 8628, 4975, 4827, 8283, 1800, 5151, 4732, 9087,
                3979, 1928, 9091, 9124, 900, 9934, 2470, 7670, 4441, 9337, 2088, 763, 2670, 7358,
            ],
            () => e((e.s = 88441)),
        ),
            (_N_E = e.O()));
    },
]);
