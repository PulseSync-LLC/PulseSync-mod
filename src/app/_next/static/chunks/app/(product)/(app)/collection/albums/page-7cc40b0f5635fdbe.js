(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2837, 7980],
    {
        1698: (e, t, s) => {
            'use strict';
            s.d(t, { e: () => l });
            var i = s(88800),
                a = s(37770);
            let l = (e) => {
                let {
                    isActive: t,
                    itemClassName: s,
                    round: l,
                    centered: r,
                    withInfo: o,
                    count: n = 10,
                    shimmerClassName: c,
                    linesCount: u,
                    'aria-label': d,
                    withSubcover: m,
                } = e;
                return Array.from(Array(n).keys()).map((e) =>
                    (0, i.jsx)(
                        a.V,
                        { isActive: t, linesCount: u, className: s, round: l, centered: r, withInfo: o, withSubcover: m, 'aria-label': d, shimmerClassName: c },
                        e,
                    ),
                );
            };
        },
        1884: (e) => {
            e.exports = {
                root: 'CollectionAlbumsPageHeader_root__87L_c',
                container: 'CollectionAlbumsPageHeader_container__96cIo',
                title: 'CollectionAlbumsPageHeader_title__1Ps8d',
                tabs: 'CollectionAlbumsPageHeader_tabs__P4GTY',
                tab: 'CollectionAlbumsPageHeader_tab__JSFBc',
                tabsShimmer: 'CollectionAlbumsPageHeader_tabsShimmer__fGlR0',
                tabShimmer: 'CollectionAlbumsPageHeader_tabShimmer__9hCc6',
                staticHeader: 'CollectionAlbumsPageHeader_staticHeader__YNfX4',
                important: 'CollectionAlbumsPageHeader_important__0dgC2',
                stickyHeader: 'CollectionAlbumsPageHeader_stickyHeader__L_1IS',
            };
        },
        4370: (e, t, s) => {
            'use strict';
            s.d(t, { Z: () => a });
            var i = s(67174);
            let a = {
                main: (0, i.u)('/'),
                chart: (0, i.u)('/chart'),
                chartPodcasts: (0, i.u)('/chart/podcasts'),
                collection: (0, i.u)('/collection'),
                collectionAlbums: (0, i.u)('/collection/albums'),
                collectionArtists: (0, i.u)('/collection/artists'),
                collectionClips: (0, i.u)('/collection/clips'),
                collectionDislikes: (0, i.u)('/collection/dislikes'),
                collectionKids: (0, i.u)('/collection/kids'),
                collectionKidsAlbums: (0, i.u)('/collection/kids/albums'),
                collectionKidsPlaylists: (0, i.u)('/collection/kids/playlists'),
                collectionKidsTracks: (0, i.u)('/collection/kids/tracks'),
                collectionNonMusic: (0, i.u)('/collection/non-music'),
                collectionNonMusicLiked: (0, i.u)('/collection/non-music/liked'),
                collectionVibeRooms: (0, i.u)('/collection/multivibes'),
                collectionPlaylists: (0, i.u)('/collection/playlists'),
                collectionPlaylistsCreated: (0, i.u)('/collection/playlists/created'),
                collectionPlaylistsLiked: (0, i.u)('/collection/playlists/liked'),
                collectionShelf: (0, i.u)('/collection/shelf'),
                collectionShelfLiked: (0, i.u)('/collection/shelf/liked'),
                collectionShelfNewEpisodes: (0, i.u)('/collection/shelf/new-episodes'),
                collectionShelfRecentlyPlayed: (0, i.u)('/collection/shelf/recently-played'),
                concerts: (0, i.u)('/concerts'),
                kids: (0, i.u)('/kids'),
                mixes: (0, i.u)('/mixes'),
                musicHistory: (0, i.u)('/music-history'),
                muzmarket: (0, i.u)('/muzmarket'),
                mymusic: (0, i.u)('/mymusic'),
                mymusicDownloadsTracks: (0, i.u)('/mymusic/downloads/tracks'),
                multivibe: (0, i.u)('/multivibe'),
                nonMusic: (0, i.u)('/non-music'),
                pay: (0, i.u)('/pay'),
                userSlides: (0, i.u)('/slides/user'),
                search: (0, i.u)('/search'),
                searchHistory: (0, i.u)('/search/history'),
                settings: (0, i.u)('/settings'),
                video: (0, i.u)('/video'),
            };
        },
        7628: (e, t, s) => {
            'use strict';
            s.d(t, { H: () => _ });
            var i = s(88800),
                a = s(88969),
                l = s(58390),
                r = s(17392),
                o = s(29993),
                n = s(96817),
                c = s(29504),
                u = s(99890),
                d = s(4086),
                m = s(41928);
            let _ = (e) => {
                let { size: t = 'm', variant: s = 'default', color: _ = 'primary', withRipple: h = !0, buttonText: p, isBlock: b, key: g, className: A } = e,
                    E = (0, l.useRouter)(),
                    v = (0, m.N)().get(d.QG),
                    C = (0, o.c)(() => {
                        v.authorizationUrl && ((0, u.uV)({ stage: 'attempt-start', trigger: 'user' }), E.push(v.authorizationUrl));
                    });
                return (0, i.jsx)(
                    n.$,
                    {
                        onClick: C,
                        className: A,
                        isBlock: b,
                        color: _,
                        variant: s,
                        size: t,
                        radius: 'xxxl',
                        withRipple: h,
                        'data-test-id': r.S7.UNAUTHORIZED_BUTTON,
                        children: p || (0, i.jsx)(c.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, i.jsx)(a.A, { id: 'authorization.enter-button' }) }),
                    },
                    g,
                );
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
        14912: (e, t, s) => {
            'use strict';
            s.d(t, { X: () => a });
            var i = s(53548);
            let a = () =>
                (0, i.useCallback)((e) => {
                    {
                        let t = window.history.state;
                        window.history.replaceState(t, '', e);
                    }
                }, []);
        },
        14965: (e, t, s) => {
            'use strict';
            s.d(t, { t: () => i });
            class i extends Error {
                name = 'BaseException';
                message;
                code;
                data;
                stack;
                constructor(e, t = {}) {
                    let { code: s = 'E_INTERNAL', data: a = {}, ...l } = t,
                        r = e || 'Internal error';
                    (super(r, l), (this.message = r), (this.code = s), (this.data = a), (this.stack = Error(r).stack), Object.setPrototypeOf(this, i.prototype));
                }
            }
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
        17017: (e, t, s) => {
            'use strict';
            var i;
            (s.d(t, { Z: () => i }),
                (function (e) {
                    ((e.METHOD_NOT_SUPPORTED = 'E_BEACON_METHOD_NOT_SUPPORTED'),
                        (e.NOT_AVAILABLE = 'E_BEACON_NOT_AVAILABLE'),
                        (e.QUEUE_FAILED = 'E_BEACON_QUEUE_FAILED'),
                        (e.NO_RESPONSE_DATA = 'E_BEACON_NO_RESPONSE_DATA'),
                        (e.RETRY_EXHAUSTED = 'E_BEACON_RETRY_EXHAUSTED'));
                })(i || (i = {})));
        },
        17944: (e, t, s) => {
            'use strict';
            s.d(t, { H: () => i });
            var i = (function (e) {
                return ((e.LIKED_ALBUMS = 'liked'), (e.UPCOMING_ALBUMS = 'upcoming'), e);
            })({});
        },
        19840: (e, t, s) => {
            'use strict';
            (s.d(t, { G: () => a }), s(46606));
            var i = s(91136);
            class a extends i.m {
                name = 'HttpErrorException';
                statusCode;
                constructor(e, t) {
                    (super(e, { code: 'E_HTTP_CLIENT_NON_2XX_3XX_RESPONSE', cause: t.cause }),
                        (this.statusCode = t.statusCode),
                        Object.setPrototypeOf(this, a.prototype));
                }
            }
        },
        25596: (e, t, s) => {
            'use strict';
            s.d(t, { P: () => N });
            var i = s(88800),
                a = s(96706),
                l = s(53548),
                r = s(2058),
                o = s(97804),
                n = s(29595),
                c = s(74965),
                u = s(72288),
                d = s(66943),
                m = s(65724),
                _ = s(88969),
                h = s(17392),
                p = s(73170),
                b = s(29504),
                g = s(17944),
                A = s(81877),
                E = s(91292),
                v = s(59304),
                C = s(59357),
                I = s.n(C);
            let y = (e) => {
                    let { closeToast: t, albumTitle: s, coverUri: a, isPresave: o, entityTitle: n, className: c } = e,
                        { formatMessage: u } = (0, r.A)(),
                        d = (0, l.useMemo)(
                            () => (o ? (0, i.jsx)(_.A, { id: 'notifications-info.added-to' }) : (0, i.jsx)(_.A, { id: 'notifications-info.removed-from' })),
                            [o],
                        ),
                        C = (0, l.useMemo)(
                            () => (o ? (0, i.jsx)(_.A, { id: 'notifications-info.to-collection' }) : (0, i.jsx)(_.A, { id: 'notifications-info.from-collection' })),
                            [o],
                        ),
                        y = (0, l.useMemo)(
                            () =>
                                o
                                    ? u({ id: 'notifications-info.album-added-to-collection-aria-label' }, { entity: n })
                                    : u({ id: 'notifications-info.album-removed-from-collection-aria-label' }, { entity: n }),
                            [o, n, u],
                        ),
                        x = (0, l.useMemo)(
                            () =>
                                (0, i.jsxs)(b.HL, {
                                    className: I().text,
                                    variant: 'div',
                                    type: 'controls',
                                    size: 'm',
                                    'data-test-id': h.S7.BASE_NOTIFICATION_PRESAVE_TEXT,
                                    'aria-hidden': !0,
                                    children: [
                                        (0, i.jsx)(_.A, { id: 'entity-names.album' }),
                                        '\xa0',
                                        (0, i.jsxs)(b.HL, { className: I().title, variant: 'span', type: 'controls', size: 'm', lineClamp: 1, children: [n, '\xa0'] }),
                                        d,
                                        '\xa0',
                                        (0, i.jsx)(E.N, {
                                            className: I().link,
                                            href: '/collection/albums?tab='.concat(g.H.UPCOMING_ALBUMS),
                                            title: String(C),
                                            children: (0, i.jsx)(b.HL, { variant: 'span', type: 'controls', size: 'm', lineClamp: 1, children: C }),
                                        }),
                                    ],
                                }),
                            [n, d, C],
                        );
                    return (0, i.jsx)(v.$, {
                        className: (0, m.$)(I().root, c),
                        message: (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(p.q, { children: (0, i.jsx)('p', { role: 'alert', 'aria-label': y }) }), x] }),
                        cover: (0, i.jsx)(A.B, { className: I().image, src: a, size: 100, fit: 'cover', alt: s, withAvatarReplace: !0 }),
                        closeToast: t,
                        coverRadius: 's',
                    });
                },
                x = (e) => {
                    let { upcomingAlbum: t, closeToast: s } = e;
                    return (0, i.jsx)(y, { closeToast: s, albumTitle: t.title, coverUri: t.coverUri, entityTitle: t.title, isPresave: t.isPresave });
                },
                N = (e) => {
                    let { user: t } = (0, u.g)(),
                        { notify: s } = (0, c.l)(),
                        [m, _] = (0, l.useState)(!1),
                        { formatMessage: h } = (0, r.A)();
                    return (0, l.useCallback)(async () => {
                        if (!t.isAuthorized)
                            return void s((0, i.jsx)(d.h, { error: h({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: n.u.ERROR });
                        if (m) return;
                        let l = { ...(0, a.HO)(e), isPresave: !e.isPresave };
                        _(!0);
                        let r = await e.toggleLike();
                        (_(!1),
                            r === o.J.OK
                                ? s((0, i.jsx)(x, { upcomingAlbum: l }), { containerId: n.u.INFO })
                                : s((0, i.jsx)(d.h, { error: h({ id: 'error-messages.error-during-action' }) }), { containerId: n.u.ERROR }));
                    }, [t.isAuthorized, m, e, s, h]);
                };
        },
        31108: (e, t, s) => {
            'use strict';
            s.d(t, { M: () => O });
            var i = s(88800),
                a = s(65724),
                l = s(84961),
                r = s(53548),
                o = s(2058),
                n = s(88969),
                c = s(62414),
                u = s(17392),
                d = s(79070),
                m = s(96817),
                _ = s(29832),
                h = s(52300),
                p = s(7555),
                b = s(29504),
                g = s(25596),
                A = s(13946),
                E = s(32414),
                v = s(72288),
                C = s(81877),
                I = s(90224),
                y = s(49738),
                x = s(43708),
                N = s.n(x);
            let O = (0, l.PA)((e) => {
                let { className: t, children: s, upcomingAlbum: l, contentLinesCount: x } = e,
                    { user: O } = (0, v.g)(),
                    L = (0, c.D)(),
                    { formatMessage: f, formatDate: S } = (0, o.A)(),
                    P = (0, g.P)(l),
                    T = l.getKey('PlayButton'),
                    j = l.getKey('LikeButton'),
                    M = (0, r.useMemo)(() => {
                        let e = f({ id: 'entity-names.upcoming-album-name' }, { upcomingAlbumName: l.title }),
                            t = l.isPresave ? f({ id: 'entity-names.has-your-like' }) : '';
                        return ''.concat(e, ' ').concat(t);
                    }, [f, l.title, l.isPresave]),
                    k = (0, d.L)(() =>
                        (0, i.jsxs)(p.t, {
                            className: N().cover,
                            radius: 's',
                            withShadow: !0,
                            children: [
                                (0, i.jsx)(C.B, { className: N().image, src: l.coverUri, size: 200, fit: 'cover', alt: M, withAvatarReplace: !0 }),
                                (0, i.jsx)(_.hg, {
                                    className: N().controls,
                                    playControl: (0, i.jsx)(
                                        m.$,
                                        {
                                            className: N().lockButton,
                                            disabled: !0,
                                            radius: 'xxxl',
                                            variant: 'default',
                                            size: 's',
                                            icon: (0, i.jsx)(h.I, { variant: 'lock', size: 'xxs', className: N().lockIcon }),
                                            'aria-label': f({ id: 'entity-names.upcoming-album-play-disabled' }),
                                            'data-test-id': u.Kq.album.UPCOMING_ALBUM_LOCK_BUTTON,
                                        },
                                        T,
                                    ),
                                    likeControl: (0, i.jsx)(
                                        y.c,
                                        {
                                            className: (0, a.$)(N().control, N().presaveButton),
                                            isLiked: l.isPresave,
                                            onClick: P,
                                            variant: 'default',
                                            size: 's',
                                            iconSize: 'xxs',
                                            disabled: !O.isAuthorized,
                                        },
                                        j,
                                    ),
                                }),
                            ],
                        }),
                    );
                return (0, i.jsxs)(_.MN, {
                    ref: L,
                    className: (0, a.$)(N().root, t),
                    'aria-label': M,
                    explicitMarkComponent: l.explicitDisclaimer && (0, i.jsx)(I.N, { getDescriptionTexts: l.getDescriptionTexts, variant: l.explicitDisclaimer }),
                    title: (0, i.jsx)(b.HL, {
                        variant: 'div',
                        type: 'entity',
                        size: 's',
                        weight: 'medium',
                        lineClamp: 2,
                        'data-test-id': u.Kq.album.UPCOMING_ALBUM_TITLE,
                        children: l.title,
                    }),
                    contentLinesCount: x,
                    view: k,
                    description: (0, i.jsx)(A.i, { className: N().artists, artists: l.artists, lineClamp: 1, linkClassName: N().artistLink, captionSize: 's' }),
                    'data-test-id': u.Kq.album.UPCOMING_ALBUM_CARD,
                    children: [
                        (0, i.jsx)(b.HL, {
                            className: N().releaseDate,
                            variant: 'div',
                            type: 'entity',
                            size: 's',
                            weight: 'medium',
                            lineClamp: 1,
                            'data-test-id': u.Kq.album.UPCOMING_ALBUM_RELEASE_DATE,
                            children: (0, i.jsx)(n.A, { id: 'entity-names.upcoming-album-date', values: { releaseDate: S(l.releaseDate, (0, E.s)()) } }),
                        }),
                        s,
                    ],
                });
            });
        },
        34303: (e, t, s) => {
            'use strict';
            s.d(t, { K: () => i });
            var i = (function (e) {
                return (
                    (e.TAB = 'tab'),
                    (e.URL = 'url'),
                    (e.ACTIVE_TAB = 'activeTab'),
                    (e.BLOCK = 'block'),
                    (e.IDS = 'ids'),
                    (e.ACTIVE_INDEX = 'activeIndex'),
                    (e.SORT = 'sort'),
                    (e.OPEN_TRAILER = 'openTrailer'),
                    (e.DEEPLINK = 'deeplink'),
                    (e.SEEDS = 'seeds'),
                    (e.STATION_ID = 'stationId'),
                    (e.OPEN_PLAYER = 'openPlayer'),
                    (e.SCREEN = 'screen'),
                    (e.CLID = 'clid'),
                    (e.UTM_SOURCE = 'utm_source'),
                    (e.YCLID = 'yclid'),
                    (e.UTM_CAMPAIGN = 'utm_campaign'),
                    (e.UTM_MEDIUM = 'utm_medium'),
                    (e.REF_ID = 'ref_id'),
                    (e.LUMEN_AWAKE_PARAM = 'shouldAwakeLumen'),
                    (e.BEST_PLAY = 'bestPlay'),
                    (e.TEXT = 'text'),
                    e
                );
            })({});
        },
        36978: (e) => {
            e.exports = {
                root: 'CollectionAlbumsPageEmpty_root__7yn1F',
                icon: 'CollectionAlbumsPageEmpty_icon__XFf9x',
                title: 'CollectionAlbumsPageEmpty_title__hMQde',
                text: 'CollectionAlbumsPageEmpty_text__jp_lj',
            };
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
        43708: (e) => {
            e.exports = {
                root: 'UpcomingAlbumCard_root__lSZ5l',
                controls: 'UpcomingAlbumCard_controls__fQ50f',
                cover: 'UpcomingAlbumCard_cover__qvU1m',
                image: 'UpcomingAlbumCard_image__WKtGR',
                releaseDate: 'UpcomingAlbumCard_releaseDate__EvDzB',
                artists: 'UpcomingAlbumCard_artists__Jp1OE',
                artistLink: 'UpcomingAlbumCard_artistLink__RSqXw',
                control: 'UpcomingAlbumCard_control__pSMdI',
                presaveButton: 'UpcomingAlbumCard_presaveButton__ixwy_',
                lockButton: 'UpcomingAlbumCard_lockButton__9_qyp',
                lockIcon: 'UpcomingAlbumCard_lockIcon__wtvkP',
            };
        },
        44937: (e) => {
            e.exports = { root: 'CollectionAlbumsPage_root__qMtcC' };
        },
        46606: (e, t, s) => {
            'use strict';
            var i;
            (s.d(t, { X: () => i }),
                (function (e) {
                    ((e[(e.NOT_MODIFIED = 304)] = 'NOT_MODIFIED'),
                        (e[(e.NOT_FOUND = 404)] = 'NOT_FOUND'),
                        (e[(e.BAD_REQUEST = 400)] = 'BAD_REQUEST'),
                        (e[(e.REQUEST_TIMEOUT = 408)] = 'REQUEST_TIMEOUT'),
                        (e[(e.PRECONDITION_FAILED = 412)] = 'PRECONDITION_FAILED'),
                        (e[(e.TEAPOT = 418)] = 'TEAPOT'));
                })(i || (i = {})));
        },
        57328: (e, t, s) => {
            'use strict';
            s.d(t, { WithAuth: () => p });
            var i = s(88800),
                a = s(84961),
                l = s(58390),
                r = s(65724),
                o = s(88969),
                n = s(29504),
                c = s(7628),
                u = s(42674),
                d = s.n(u);
            let m = (0, a.PA)(() =>
                (0, i.jsxs)('div', {
                    className: d().root,
                    children: [
                        (0, i.jsx)(n.DZ, {
                            className: (0, r.$)(d().title, d().important),
                            variant: 'h3',
                            size: 'xs',
                            children: (0, i.jsx)(o.A, { id: 'authorization.enter-title' }),
                        }),
                        (0, i.jsx)(n.HL, {
                            className: (0, r.$)(d().text, d().important),
                            variant: 'span',
                            type: 'text',
                            size: 'l',
                            weight: 'normal',
                            children: (0, i.jsx)(o.A, { id: 'authorization.enter-text' }),
                        }),
                        (0, i.jsx)(c.H, { size: 'l', className: d().button }),
                    ],
                }),
            );
            var _ = s(4370),
                h = s(72288);
            let p = (0, a.PA)((e) => {
                let { children: t, withRedirectToMainPage: s } = e,
                    { user: a } = (0, h.g)();
                return a.isAuthorized ? t : (s && (0, l.redirect)(_.Z.main.href), (0, i.jsx)(m, {}));
            });
        },
        58517: (e, t, s) => {
            (Promise.resolve().then(s.bind(s, 57328)), Promise.resolve().then(s.bind(s, 67213)));
        },
        59357: (e) => {
            e.exports = {
                link: 'BaseNotificationPresave_link__4uQhM',
                title: 'BaseNotificationPresave_title__bEloI',
                text: 'BaseNotificationPresave_text__3Kv9j',
                image: 'BaseNotificationPresave_image__Hb7ve',
            };
        },
        60266: (e, t, s) => {
            'use strict';
            s.d(t, { A: () => r });
            var i = s(88800);
            s(30282);
            var a = s(11006),
                l = s.n(a);
            let r = (e) => {
                let { children: t } = e;
                return (0, i.jsx)('footer', { className: l().empty });
            };
        },
        62293: (e, t, s) => {
            'use strict';
            s.d(t, { v: () => a });
            var i = s(97956);
            let a = (e) => {
                let { checkExperiment: t, getDisclaimerContent: s, getExplicitContent: a, userRegion: l } = e;
                return 'ru' === l && t(i.z.WebNextFooterDisclaimer, 'on') ? s() : a();
            };
        },
        62837: (e, t, s) => {
            'use strict';
            s.d(t, { AS: () => m, Yw: () => i, JU: () => a, DQ: () => p, Ve: () => b });
            var i,
                a,
                l = s(43297),
                r = (function () {
                    function e(e) {
                        ((this.observableValue = (0, l.vP)(e)), (this.prevValueByListener = new Map()));
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
                            var s = this;
                            void 0 === t && (t = { skipFirstChange: !1 });
                            var i = !0;
                            return (
                                this.prevValueByListener.has(e) || this.prevValueByListener.set(e, void 0),
                                this.observableValue.subscribe(function (a) {
                                    if (a !== s.prevValueByListener.get(e)) {
                                        if (t.skipFirstChange && i) {
                                            i = !1;
                                            return;
                                        }
                                        (s.prevValueByListener.set(e, a), e(a));
                                    }
                                })
                            );
                        }),
                        e
                    );
                })();
            !(function () {
                function e(e) {
                    ((this.observableValue = (0, l.EW)(e)), (this.prevValueByListener = new Map()));
                }
                (Object.defineProperty(e.prototype, 'value', {
                    get: function () {
                        return this.observableValue.value;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                    (e.prototype.onChange = function (e, t) {
                        var s = this;
                        void 0 === t && (t = { skipFirstChange: !1 });
                        var i = !0;
                        return (
                            this.prevValueByListener.has(e) || this.prevValueByListener.set(e, void 0),
                            this.observableValue.subscribe(function (a) {
                                if (a !== s.prevValueByListener.get(e)) {
                                    if (t.skipFirstChange && i) {
                                        i = !1;
                                        return;
                                    }
                                    (s.prevValueByListener.set(e, a), e(a));
                                }
                            })
                        );
                    }));
            })();
            var o = s(14965);
            class n extends o.t {
                name = 'DisclaimerDictionaryLoadError';
                constructor(e) {
                    (super('Failed to load disclaimer dictionary', { code: 'E_DISCLAIMER_DICTIONARY_LOAD', cause: e, data: { valueType: typeof e } }),
                        Object.setPrototypeOf(this, n.prototype));
                }
            }
            class c extends o.t {
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
            })(i || (i = {}));
            let u = (e) => {
                    let t = [];
                    for (let s of e) {
                        let [e, i] = s.split(':');
                        e && i && t.push({ type: e, id: i });
                    }
                    return t;
                },
                d = (e, t) => u(e).filter((e) => e.type === t);
            class m {
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
                        (this.itemsObservable = new r(null)),
                        (this.isLoadingObservable = new r(!1)),
                        (this.errorObservable = new r(null)),
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
                            let t = e instanceof Error ? e : new n(e);
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
                    let s = d(e, t);
                    return (await Promise.all(s.map(async (e) => await this.getById(e.id)))).filter((e) => void 0 !== e);
                }
                async resolveAll(e) {
                    let t = u(e),
                        s = await Promise.all(
                            t.map(async (e) => {
                                let t = await this.getById(e.id);
                                return void 0 === t ? null : { disclaimerItem: t, disclaimerType: e.type };
                            }),
                        ),
                        i = {};
                    for (let e of s)
                        if (e) {
                            let t = i[e.disclaimerType] ?? [];
                            (t.push(e.disclaimerItem), (i[e.disclaimerType] = t));
                        }
                    return i;
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
            let _ = new Map([
                    [i.EXPLICIT_ICON, a.E],
                    [i.AGE_18_ICON, a.AGE_18],
                    [i.AGE_16_ICON, a.AGE_16],
                    [i.AGE_12_ICON, a.AGE_12],
                    [i.EXCLAMATION_ICON, a.EXCLAMATION],
                    // for PulseSync: BEGIN map the substituted-track icon to its label
                    [i.SUBSTITUTED_ICON, a.SUBSTITUTED],
                    // for PulseSync: END map the substituted-track icon to its label
                ]),
                h = [i.EXPLICIT_ICON, i.AGE_18_ICON, i.AGE_16_ICON, i.AGE_12_ICON, i.SUBSTITUTED_ICON, i.EXCLAMATION_ICON],
                p = (e) => {
                    let t = ((e, t) => {
                        for (let s of t) {
                            let t = d(e, s)[0];
                            if (t) return t;
                        }
                        return null;
                    })(e, h);
                    if (null === t) return null;
                    let s = _.get(t.type);
                    return void 0 !== s ? s : null;
                },
                b = (e, t) => d(e, t).length > 0;
        },
        67213: (e, t, s) => {
            'use strict';
            s.d(t, { CollectionAlbumsPage: () => ei });
            var i = s(88800),
                a = s(84961),
                l = s(53548),
                r = s(58390),
                o = s(87999),
                n = s(76903),
                c = s(17392),
                u = s(98225),
                d = s(69630),
                m = s(98427),
                _ = s(44230),
                h = s(37670),
                p = s(72288),
                b = s(17944),
                g = s(34303),
                A = (function (e) {
                    return ((e[(e.LIKED_ALBUMS = 0)] = 'LIKED_ALBUMS'), (e[(e.UPCOMING_ALBUMS = 1)] = 'UPCOMING_ALBUMS'), e);
                })({}),
                E = s(44937),
                v = s.n(E),
                C = s(65724),
                I = s(2058),
                y = s(10079),
                x = s(86790),
                N = s(60266),
                O = s(37770),
                L = s(79418),
                f = s(88969),
                S = s(29504),
                P = s(46422),
                T = s(63807),
                j = s(56248),
                M = s(87366),
                k = s(76099),
                R = s(4370),
                D = s(67174),
                U = s(14912);
            let w = (e) => {
                let t = (0, U.X)();
                return (0, l.useCallback)(
                    (s) => {
                        var i;
                        switch ((null == (i = e.onTabChange) || i.call(e, s), s)) {
                            case A.LIKED_ALBUMS: {
                                let { href: e } = (0, D.u)(R.Z.collectionAlbums.href, { query: { tab: b.H.LIKED_ALBUMS } });
                                t(e);
                                break;
                            }
                            case A.UPCOMING_ALBUMS: {
                                let { href: e } = (0, D.u)(R.Z.collectionAlbums.href, { query: { tab: b.H.UPCOMING_ALBUMS } });
                                t(e);
                            }
                        }
                    },
                    [t, e],
                );
            };
            var B = s(1884),
                H = s.n(B),
                F = s(19994);
            let G = () =>
                    (0, i.jsxs)('div', {
                        className: H().tabsShimmer,
                        children: [(0, i.jsx)(F.W, { className: H().tabShimmer }), (0, i.jsx)(F.W, { className: H().tabShimmer })],
                    }),
                z = (0, a.PA)((e) => {
                    var t, s, a;
                    let { tabsState: r, tabElementId: o } = e,
                        { collection: n } = (0, p.g)(),
                        { formatMessage: u } = (0, I.A)(),
                        d = (0, P.W)(),
                        { isScrolling: m } = (0, l.useContext)(T.B),
                        _ = w(r),
                        h = (0, l.useMemo)(
                            () =>
                                n.albums.items.length
                                    ? ''.concat(u({ id: 'entity-names.albums' }), ' • ').concat(n.albums.items.length)
                                    : u({ id: 'entity-names.albums' }),
                            [n.albums.items.length, u],
                        ),
                        b = (0, l.useMemo)(() => {
                            var e;
                            return (null == (e = n.albums.upcomingAlbums.items) ? void 0 : e.length)
                                ? ''.concat(u({ id: 'entity-names.upcoming-albums' }), ' • ').concat(n.albums.upcomingAlbums.items.length)
                                : u({ id: 'entity-names.upcoming-albums' });
                        }, [null == (t = n.albums.upcomingAlbums.items) ? void 0 : t.length, u]);
                    return (0, i.jsxs)('header', {
                        className: H().root,
                        'aria-hidden': m,
                        'data-test-id': c.Xk.collection.COLLECTION_ALBUMS_PAGE_STATIC_HEADER,
                        children: [
                            (0, i.jsxs)('div', {
                                className: H().container,
                                children: [
                                    d.canBack && (0, i.jsx)(j.L, { withForwardControl: !1, withBackwardControl: d.canBack, shouldFocusOnMount: !m }),
                                    (0, i.jsx)(S.DZ, {
                                        variant: 'h2',
                                        weight: 'bold',
                                        size: 'xl',
                                        lineClamp: 1,
                                        className: H().title,
                                        'data-test-id': c.Xk.collection.COLLECTION_ALBUMS_PAGE_STATIC_HEADER_TITLE,
                                        children: (0, i.jsx)(f.A, { id: 'entity-names.favourite-albums' }),
                                    }),
                                ],
                            }),
                            (0, i.jsxs)(k.wI, {
                                isShimmerVisible: n.albums.isLoading,
                                shimmer: (0, i.jsx)(G, {}),
                                className: H().tabs,
                                elementId: o,
                                ...r,
                                onTabChange: _,
                                children: [
                                    (0, i.jsx)(M.o, {
                                        className: H().tab,
                                        value: A.LIKED_ALBUMS,
                                        title: h,
                                        'aria-label': u({ id: 'entity-names.albums-count' }, { value: n.albums.items.length }),
                                        'aria-hidden': m,
                                        tabIndex: m ? -1 : 0,
                                    }),
                                    (0, i.jsx)(M.o, {
                                        className: H().tab,
                                        value: A.UPCOMING_ALBUMS,
                                        title: b,
                                        'aria-label': u(
                                            { id: 'entity-names.upcoming-albums-count' },
                                            { value: null != (a = null == (s = n.albums.upcomingAlbums.items) ? void 0 : s.length) ? a : 0 },
                                        ),
                                        'aria-hidden': m,
                                        tabIndex: m ? -1 : 0,
                                    }),
                                ],
                            }),
                        ],
                    });
                });
            var X = s(70434),
                V = s.n(X);
            let K = (0, a.PA)((e) => {
                var t;
                let { forwardRef: s, tabsState: a, tabElementId: r } = e,
                    {
                        user: o,
                        collection: n,
                        settings: { isMobile: c },
                    } = (0, p.g)(),
                    { formatMessage: d } = (0, I.A)(),
                    m = (0, l.useCallback)(
                        (e) => {
                            o.account.data.uid && n.albums.getData({ userId: o.account.data.uid, metaType: 'music', page: e, pageSize: 20 });
                        },
                        [n.albums, o.account.data.uid],
                    ),
                    _ = (0, l.useMemo)(
                        () => ({
                            Header: () => (0, i.jsx)(z, { tabsState: a, tabElementId: r }),
                            Footer: () => (0, i.jsx)(N.A, { children: (0, i.jsx)(x.w, { className: V().footer }) }),
                        }),
                        [r, a],
                    ),
                    h = n.albums.isAlbumsLoading ? 20 : n.albums.items.length;
                return (0, i.jsx)('div', {
                    className: V().root,
                    children: (0, i.jsx)(u.Kp, {
                        value: a.value,
                        name: A.LIKED_ALBUMS,
                        elementId: r,
                        className: V().tabPanel,
                        children: (0, i.jsx)(L.$, {
                            className: (0, C.$)(V().scrollContainer, V().important),
                            customComponents: _,
                            itemContentCallback: (e) => {
                                var t;
                                let s = null == (t = n.albums.pagesLoader.items) ? void 0 : t[e],
                                    a = d({ id: 'loading-messages.entity-is-loading' }, { entityName: d({ id: 'entity-names.album' }) });
                                return s ? (0, i.jsx)(y.a, { album: s, contentLinesCount: 4 }, s.id) : (0, i.jsx)(O.V, { 'aria-label': a, linesCount: 4 });
                            },
                            totalCount: h,
                            onGetDataByPage: m,
                            pageSize: 20,
                            totalRequests: null != (t = n.albums.pagesLoader.requestsCount) ? t : 0,
                            listClassName: V().content,
                            itemClassName: V().item,
                            handleRef: s,
                            context: { listAriaLabel: d({ id: 'collection.liked-albums-list' }) },
                            isMobileLayout: c,
                            useWindowScroll: c,
                        }),
                    }),
                });
            });
            var Y = s(66719),
                q = s(31108),
                $ = s(1698);
            let Z = (0, a.PA)((e) => {
                let { forwardRef: t, tabsState: s, tabElementId: a } = e,
                    { collection: r } = (0, p.g)(),
                    { formatMessage: o } = (0, I.A)(),
                    n = (0, l.useMemo)(() => {
                        var e;
                        let t = o({ id: 'loading-messages.entity-is-loading' }, { entityName: o({ id: 'entity-names.album' }) });
                        return r.albums.isUpcomingAlbumsLoading
                            ? (0, i.jsx)($.e, { isActive: !0, 'aria-label': t })
                            : null == (e = r.albums.upcomingAlbums.items)
                              ? void 0
                              : e.map((e) => (0, i.jsx)(q.M, { upcomingAlbum: e }, e.id));
                    }, [r.albums.isUpcomingAlbumsLoading, r.albums.upcomingAlbums, o]);
                return (0, i.jsxs)(Y.N, {
                    className: V().root,
                    containerClassName: (0, C.$)(V().scrollContainer, V().important),
                    ref: t,
                    children: [
                        (0, i.jsx)(z, { tabsState: s, tabElementId: a }),
                        (0, i.jsx)(u.Kp, { value: s.value, name: A.UPCOMING_ALBUMS, elementId: a, className: V().content, children: n }),
                        (0, i.jsx)(N.A, { children: (0, i.jsx)(x.w, { className: V().footer }) }),
                    ],
                });
            });
            var J = s(52300),
                Q = s(36978),
                W = s.n(Q);
            let ee = (0, a.PA)((e) => {
                let { tabsState: t, tabElementId: s } = e,
                    a = (0, l.useMemo)(() => {
                        switch (t.value) {
                            case A.LIKED_ALBUMS:
                                return (0, i.jsx)(f.A, { id: 'error-messages.empty-collection-albums-title' });
                            case A.UPCOMING_ALBUMS:
                                return (0, i.jsx)(f.A, { id: 'error-messages.empty-collection-upcoming-albums-title' });
                        }
                    }, [t.value]),
                    r = t.value === A.LIKED_ALBUMS;
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(z, { tabsState: t, tabElementId: s }),
                        (0, i.jsxs)(u.Kp, {
                            value: t.value,
                            name: t.value,
                            elementId: s,
                            className: W().root,
                            children: [
                                (0, i.jsx)(J.I, { className: W().icon, size: 'l', variant: 'album' }),
                                (0, i.jsx)(S.DZ, {
                                    className: W().title,
                                    variant: 'h3',
                                    size: 'xs',
                                    'data-test-id': c.Xk.collection.COLLECTION_ALBUMS_PAGE_EMPTY_TITLE,
                                    children: a,
                                }),
                                r &&
                                    (0, i.jsx)(S.HL, {
                                        className: W().text,
                                        variant: 'span',
                                        type: 'controls',
                                        size: 'l',
                                        weight: 'normal',
                                        children: (0, i.jsx)(f.A, { id: 'error-messages.empty-collection-albums-description' }),
                                    }),
                            ],
                        }),
                    ],
                });
            });
            var et = s(93317);
            let es = (0, a.PA)((e) => {
                    var t, s, a;
                    let { tabsState: r, tabElementId: o } = e,
                        { collection: n } = (0, p.g)(),
                        { formatMessage: u } = (0, I.A)(),
                        { isScrolling: d } = (0, l.useContext)(T.B),
                        m = (0, P.W)(),
                        _ = w(r),
                        h = (0, l.useMemo)(
                            () =>
                                n.albums.items.length
                                    ? ''.concat(u({ id: 'entity-names.albums' }), ' • ').concat(n.albums.items.length)
                                    : u({ id: 'entity-names.albums' }),
                            [n.albums.items.length, u],
                        ),
                        b = (0, l.useMemo)(() => {
                            var e, t;
                            return (null == (e = n.albums.upcomingAlbums.items) ? void 0 : e.length)
                                ? ''.concat(u({ id: 'entity-names.upcoming-albums' }), ' • ').concat(null == (t = n.albums.upcomingAlbums.items) ? void 0 : t.length)
                                : u({ id: 'entity-names.upcoming-albums' });
                        }, [null == (t = n.albums.upcomingAlbums.items) ? void 0 : t.length, u]);
                    return (0, i.jsx)(et.Y, {
                        variant: et.V.COMPOSITE,
                        staticClassName: (0, C.$)(H().staticHeader, H().important),
                        'aria-hidden': !d,
                        stickyClassName: (0, C.$)(H().stickyHeader, H().important),
                        stickyChild: (0, i.jsxs)('div', {
                            className: H().container,
                            'data-test-id': c.Xk.collection.COLLECTION_ALBUMS_PAGE_STICKY_HEADER,
                            children: [
                                m.canBack && (0, i.jsx)(j.L, { withForwardControl: !1, withBackwardControl: m.canBack, shouldFocusOnMount: !1, buttonSize: 'xs' }),
                                (0, i.jsxs)(k.wI, {
                                    isShimmerVisible: n.albums.isLoading,
                                    shimmer: (0, i.jsx)(G, {}),
                                    className: H().tabs,
                                    elementId: o,
                                    ...r,
                                    onTabChange: _,
                                    children: [
                                        (0, i.jsx)(M.o, {
                                            className: H().tab,
                                            value: A.LIKED_ALBUMS,
                                            title: h,
                                            'aria-label': u({ id: 'entity-names.albums-count' }, { value: n.albums.items.length }),
                                            'aria-hidden': !d,
                                            tabIndex: d ? 0 : -1,
                                        }),
                                        (0, i.jsx)(M.o, {
                                            className: H().tab,
                                            value: A.UPCOMING_ALBUMS,
                                            title: b,
                                            'aria-label': u(
                                                { id: 'entity-names.upcoming-albums-count' },
                                                { value: null != (a = null == (s = n.albums.upcomingAlbums.items) ? void 0 : s.length) ? a : 0 },
                                            ),
                                            'aria-hidden': !d,
                                            tabIndex: d ? 0 : -1,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    });
                }),
                ei = (0, a.PA)(() => {
                    let e = (0, r.useSearchParams)(),
                        { user: t, collection: s, library: a } = (0, p.g)(),
                        { contentScrollRef: E, setContentScrollRef: C } = (0, _.g)(),
                        I = (0, l.useId)(),
                        y = (0, l.useMemo)(() => {
                            switch (e.get(g.K.TAB)) {
                                case b.H.LIKED_ALBUMS:
                                    break;
                                case b.H.UPCOMING_ALBUMS:
                                    return A.UPCOMING_ALBUMS;
                            }
                            return A.LIKED_ALBUMS;
                        }, [e]),
                        x = (0, u.zb)(y);
                    ((0, h.J)(s.albums.isResolved),
                        (0, l.useEffect)(
                            () => () => {
                                s.albums.reset();
                            },
                            [s.albums],
                        ));
                    let N = (0, l.useMemo)(() => {
                        switch (x.value) {
                            case A.LIKED_ALBUMS:
                                if (s.albums.isAlbumsEmpty) return (0, i.jsx)(ee, { tabsState: x, tabElementId: I });
                                return (0, i.jsx)(K, { forwardRef: C, tabsState: x, tabElementId: I });
                            case A.UPCOMING_ALBUMS:
                                if (s.albums.isUpcomingAlbumsEmpty) return (0, i.jsx)(ee, { tabsState: x, tabElementId: I });
                                return (0, i.jsx)(Z, { forwardRef: C, tabsState: x, tabElementId: I });
                        }
                    }, [s.albums.isAlbumsEmpty, s.albums.isUpcomingAlbumsEmpty, C, I, x]);
                    if (t.account.data.uid && s.albums.isNeededToLoad) {
                        let e = [
                            s.albums.getData({ userId: t.account.data.uid, metaType: 'music', page: 0, pageSize: 20 }),
                            s.albums.getPresaves({ userId: t.account.data.uid }),
                            a.getData(),
                        ];
                        (0, l.use)(Promise.allSettled(e));
                    }
                    return (0, i.jsx)(n.a, {
                        pageId: o.AppScreen.CollectionAlbumsScreen,
                        pageIdForFrom: m.b.OWN_ALBUMS,
                        children: (0, i.jsx)(d.h, {
                            scrollElement: E,
                            headerThreshold: 148,
                            children: (0, i.jsxs)('div', {
                                className: v().root,
                                'data-test-id': c.Xk.collection.COLLECTION_ALBUMS_PAGE,
                                children: [(0, i.jsx)(es, { tabsState: x, tabElementId: I }), N],
                            }),
                        }),
                    });
                });
        },
        67990: (e, t, s) => {
            'use strict';
            s.d(t, { N: () => i });
            let i = (e) => 'object' == typeof e && null !== e && 'request' in e && null !== e.request;
        },
        70434: (e) => {
            e.exports = {
                root: 'CollectionAlbumsPageContent_root__2Ya18',
                scrollContainer: 'CollectionAlbumsPageContent_scrollContainer__0TjJm',
                important: 'CollectionAlbumsPageContent_important__fixM8',
                content: 'CollectionAlbumsPageContent_content__jcwRU',
                footer: 'CollectionAlbumsPageContent_footer__ZkUKY',
                item: 'CollectionAlbumsPageContent_item__I_Wuz',
                tabPanel: 'CollectionAlbumsPageContent_tabPanel__0qXKZ',
            };
        },
        70621: (e, t, s) => {
            'use strict';
            s.d(t, { D: () => n });
            var i = s(53548),
                a = s(63582),
                l = s(245),
                r = s(22681),
                o = s(56374);
            let n = (0, a.n)({ event: 'LandingBlock.ActionPerformed', kind: 'hook', requiredScopes: ['screen', 'block', 'object'] }, () => {
                let e = (0, l.N)(),
                    t = (0, r.w)(),
                    s = (0, i.useMemo)(() => (t ? e.createBlockReporter(t.snapshot) : null), [e, t]);
                return (0, o.c)((e) => {
                    t?.object && s && s.actionPerformed({ ...e, viewUuid: (t.object.activeViewSession ?? t.object.viewSession).start() });
                });
            });
        },
        76903: (e, t, s) => {
            'use strict';
            s.d(t, { a: () => d });
            var i = s(88800),
                a = s(53548),
                l = s(53534),
                r = s(63582),
                o = s(245);
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
                    let s =
                        n.get(t) ??
                        (() => {
                            let e = [],
                                t = !1,
                                s = () => {
                                    for (; e.length > 0;) e.shift()?.();
                                },
                                i = () => {
                                    t ||
                                        ((t = !0),
                                        queueMicrotask(() => {
                                            try {
                                                s();
                                            } finally {
                                                ((t = !1), e.length > 0 && i());
                                            }
                                        }));
                                };
                            return {
                                open: (e) => {
                                    (s(), e());
                                },
                                defer: (t) => {
                                    (e.push(t), i());
                                },
                            };
                        })();
                    (n.set(t, s), (this.queue = s));
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
            var u = s(87999);
            let d = (0, r.B)(
                { kind: 'provider', requiredProps: ['pageId'], pendingProps: ['mainObjectType', 'mainObjectId'], scope: 'screen' },
                ({ children: e, ...t }) => {
                    let s = (0, o.N)(),
                        r = ((e) =>
                            (!Object.hasOwn(e, 'mainObjectType') || void 0 !== e.mainObjectType) &&
                            ('string' == typeof e.mainObjectId ||
                                (!Object.hasOwn(e, 'mainObjectId') && (!Object.hasOwn(e, 'mainObjectType') || e.mainObjectType === u.DomainObjectType.NonApplicable))))(
                            t,
                        ),
                        [n, d] = (0, a.useState)(() => {
                            let e = new c(s.createScreenSession().screenViewUuid, s);
                            return { client: s, input: t, isReady: r, scope: r ? s.createScreenScope(t, e) : null, session: e };
                        });
                    if (
                        n.client !== s ||
                        n.input.pageId !== t.pageId ||
                        n.input.skeletonId !== t.skeletonId ||
                        n.input.mainObjectType !== t.mainObjectType ||
                        n.input.mainObjectId !== t.mainObjectId
                    ) {
                        let a = new c(s.createScreenSession().screenViewUuid, s),
                            o = { client: s, input: t, isReady: r, scope: r ? s.createScreenScope(t, a) : null, session: a };
                        return (d(o), (0, i.jsx)(l.k, { value: o, children: e }));
                    }
                    if (
                        n.isReady !== r ||
                        n.input.displayReasonId !== t.displayReasonId ||
                        n.input.pageIdForFrom !== t.pageIdForFrom ||
                        n.input.pagePlacement !== t.pagePlacement ||
                        n.input.pageStyle !== t.pageStyle
                    ) {
                        let a = { ...n, input: t, isReady: r, scope: r ? s.createScreenScope(t, n.session) : null };
                        return (d(a), (0, i.jsx)(l.k, { value: a, children: e }));
                    }
                    return (0, i.jsx)(l.k, { value: n, children: e });
                },
            );
        },
        79418: (e, t, s) => {
            'use strict';
            s.d(t, { $: () => b });
            var i = s(88800),
                a = s(65724),
                l = s(61013),
                r = s(53548);
            let o = (e) => {
                    let { style: t, forwardRef: s, context: a, ...l } = e,
                        r = (null == a ? void 0 : a.listAriaLabel) || void 0,
                        o = (null == a ? void 0 : a.listRole) || 'region';
                    return (0, i.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: o, 'aria-label': r, style: { ...t }, ref: s, ...l });
                },
                n = (0, r.forwardRef)((e, t) => (0, i.jsx)(o, { forwardRef: t, ...e }));
            var c = s(16434),
                u = s.n(c);
            let d = (e) => {
                    let { style: t, forwardRef: s, withFooter: l, withHeader: r, withForceScroll: o, ...n } = e;
                    return (0, i.jsx)('div', {
                        className: (0, a.$)(u().scroller, { [u().scroller_withFooter]: l, [u().scroller_withHeader]: r, [u().scroller_withForceScroll]: o }),
                        style: { ...t },
                        ref: s,
                        ...n,
                        tabIndex: -1,
                    });
                },
                m = (0, r.forwardRef)((e, t) => (0, i.jsx)(d, { forwardRef: t, ...e }));
            var _ = s(55482),
                h = s(75151);
            let p = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: s,
                            onRangeHandler: a,
                            debounceDurationInMs: l = 100,
                            totalCount: o = 0,
                            shouldTriggerRangeChangedOn: n = [],
                            endReached: c,
                            virtuosoRef: u,
                            ...d
                        } = e,
                        [m, p] = (0, r.useState)(null),
                        b = (0, r.useMemo)(
                            () =>
                                (0, _.A)((e) => {
                                    if ((null == a || a(e), n.length > 0 && p(e), t && s)) {
                                        let i = Math.floor(e.endIndex / t) + 1,
                                            a = Math.floor(e.startIndex / t);
                                        for (let e = a; e < i; e++) s(e);
                                    }
                                }, l),
                            [l, a, t, s, n],
                        );
                    (0, r.useEffect)(() => {
                        n.length > 0 && m && b(m);
                    }, n);
                    let g = (0, r.useMemo)(() => {
                        if (c)
                            return (0, _.A)((e) => {
                                c(e);
                            }, l);
                    }, [c, l]);
                    return (0, i.jsx)(h.sN, { ref: u, rangeChanged: b, totalCount: o, endReached: g, ...d });
                },
                b = (e) => {
                    let {
                            className: t,
                            customComponents: s,
                            onGetDataByPage: o,
                            onGetDataByRange: c,
                            itemClassName: d,
                            itemContentCallback: _,
                            listClassName: h,
                            overscan: b = 700,
                            pageSize: g = 20,
                            totalCount: A,
                            totalRequests: E,
                            debounceDurationInMs: v,
                            initialItemCount: C,
                            minInitialItemCount: I = 20,
                            handleRef: y,
                            alwaysShowScrollbar: x = !1,
                            testId: N,
                            isMobileLayout: O = !1,
                            shouldTriggerRangeChangedOn: L,
                            ...f
                        } = e,
                        [S, P] = (0, r.useState)(!1),
                        T = (0, r.useMemo)(
                            () =>
                                (0, l.A)((e) => {
                                    P(e);
                                }, 100),
                            [],
                        ),
                        j = (0, r.useMemo)(() => {
                            var e, t;
                            return O
                                ? {
                                      Scroller: m,
                                      List: null != (e = null == s ? void 0 : s.List) ? e : n,
                                      Item: null == s ? void 0 : s.Item,
                                      ScrollSeekPlaceholder: null == s ? void 0 : s.ScrollSeekPlaceholder,
                                  }
                                : {
                                      Scroller: m,
                                      List: null != (t = null == s ? void 0 : s.List) ? t : n,
                                      Item: null == s ? void 0 : s.Item,
                                      Header: null == s ? void 0 : s.Header,
                                      Footer: null == s ? void 0 : s.Footer,
                                      ScrollSeekPlaceholder: null == s ? void 0 : s.ScrollSeekPlaceholder,
                                  };
                        }, [s, E, O]),
                        M = C ? Math.min(C, I) : void 0;
                    return (0, i.jsxs)('div', {
                        className: (0, a.$)(u().root, { [u().root_scrolling]: S || x, [u().root_notScrolling]: !S && !x }, t),
                        'data-test-id': N,
                        children: [
                            O && (null == s ? void 0 : s.Header) && s.Header(),
                            (0, i.jsx)(p, {
                                overscan: b,
                                components: j,
                                listClassName: h,
                                itemClassName: d,
                                isScrolling: T,
                                itemContent: _,
                                scrollerRef: y,
                                totalCount: A,
                                pageSize: g,
                                onPageHandler: o,
                                onRangeHandler: c,
                                debounceDurationInMs: v,
                                initialItemCount: M,
                                shouldTriggerRangeChangedOn: L,
                                ...f,
                            }),
                            O && (null == s ? void 0 : s.Footer) && s.Footer(),
                        ],
                    });
                };
        },
        86790: (e, t, s) => {
            'use strict';
            s.d(t, { w: () => N });
            var i = s(88800),
                a = s(65724),
                l = s(84961),
                r = s(2058),
                o = s(30282),
                n = s(94144),
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
            let u = (e, t, s) => {
                    switch (e) {
                        case c.YANDEX:
                            if ('ru' === t) return 'https://ya.ru';
                            return;
                        case c.YANDEX_PROJECTS:
                            return 'https://yandex.'.concat(t, '/all?lang=').concat(s);
                        case c.COPYRIGHT_HOLDER:
                            return 'https://yandex.'.concat(t, '/support/music/performers-and-copyright-holders/copyright.html?lang=').concat(s);
                        case c.AGREEMENT:
                            return 'https://yandex.ru/legal/music_termsofuse?lang='.concat(s);
                        case c.RECOMMENDATION_RULES:
                            return 'https://music.yandex.ru/legal/recommendations/ru/#music';
                        case c.HELP:
                            return 'https://yandex.'.concat(t, '/support/music/index.html?lang=').concat(s);
                        case c.PRIVACY_POLICY:
                            return 'https://yandex.'.concat(t, '/legal/confidential/').concat(s);
                    }
                },
                d = (e) => {
                    let { formatMessage: t, language: s, tld: i, year: a } = e;
                    return {
                        year: a,
                        yandexMusic: { id: c.YANDEX, title: t({ id: 'footer.yandex-music' }), url: u(c.YANDEX, i, s) },
                        yandexProjects: { id: c.YANDEX_PROJECTS, title: t({ id: 'footer.yandex-project' }), url: u(c.YANDEX_PROJECTS, i, s) },
                    };
                };
            var m = s(62293),
                _ = s(99839);
            let h = (e) => e(new Date(), (0, _.m)());
            var p = s(51611),
                b = s(72288),
                g = s(11006),
                A = s.n(g),
                E = s(17392),
                v = s(29504),
                C = s(91292);
            let I = (e) => {
                    let { className: t, data: s } = e;
                    return (0, i.jsxs)('div', {
                        className: (0, a.$)(A().copyrights, t),
                        'data-test-id': E.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, i.jsxs)(v.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: A().text,
                                children: [
                                    '\xa9 ',
                                    s.year,
                                    ' \xa0',
                                    (0, i.jsx)(C.N, {
                                        target: '_blank',
                                        href: s.yandexMusic.url,
                                        className: (0, a.$)(A().copyrightLink, A().yandexMusicLink),
                                        'data-test-id': E.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: s.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, i.jsx)(v.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, i.jsx)(C.N, {
                                target: '_blank',
                                href: s.yandexProjects.url,
                                className: A().copyrightLink,
                                'data-test-id': E.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: s.yandexProjects.title,
                            }),
                        ],
                    });
                },
                y = (e) => {
                    let { disclaimer: t, links: s } = e;
                    return (0, i.jsxs)('div', {
                        className: A().links,
                        children: [
                            (0, i.jsx)('ol', {
                                className: A().list,
                                'data-test-id': E.S7.FOOTER_LINKS_LIST,
                                children: s.map((e) => {
                                    let { id: t, title: s, url: a } = e;
                                    return (0, i.jsx)(
                                        'li',
                                        {
                                            className: A().item,
                                            children: (0, i.jsx)(C.N, { target: '_blank', href: a, className: A().link, 'data-test-id': E.S7.FOOTER_LINK, children: s }),
                                        },
                                        t,
                                    );
                                }),
                            }),
                            (0, i.jsx)(v.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: A().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: t },
                                'data-test-id': E.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                x = (e) => {
                    let { className: t, data: s } = e;
                    return (0, i.jsxs)('footer', {
                        className: (0, a.$)(A().root, A().important, t),
                        'data-test-id': E.S7.FOOTER,
                        children: [(0, i.jsx)(y, { links: s.links, disclaimer: s.disclaimer }), (0, i.jsx)(I, { data: s.copyrights })],
                    });
                };
            (0, l.PA)((e) => {
                let { className: t } = e,
                    { location: s } = (0, b.g)(),
                    { formatDate: a, formatMessage: l } = (0, r.A)(),
                    { language: o } = (0, p.h)(),
                    n = d({ formatMessage: l, language: o, tld: s.tld, year: h(a) });
                return (0, i.jsx)(I, { className: t, data: n });
            });
            let N = (0, l.PA)((e) => {
                var t;
                let { className: s } = e,
                    { experiments: l, location: _, user: g } = (0, b.g)(),
                    { formatDate: E, formatMessage: v } = (0, r.A)(),
                    { isEnabled: C } = null != (t = (0, n.P)()) ? t : {},
                    { language: I } = (0, p.h)(),
                    y = ((e) => {
                        let { checkExperiment: t, formatMessage: s, isWebApplication: i, language: a, tld: l, userRegion: r, year: o } = e;
                        return {
                            links: ((e) => {
                                let { formatMessage: t, isWebApplication: s, tld: i, language: a, userRegion: l } = e,
                                    r = { id: c.COPYRIGHT_HOLDER, title: t({ id: 'footer.links-copyright-holders' }), url: u(c.COPYRIGHT_HOLDER, i, a) },
                                    o = { id: c.PRIVACY_POLICY, title: t({ id: 'footer.links-privacy-policy' }), url: u(c.PRIVACY_POLICY, i, a) },
                                    n = { id: c.AGREEMENT, title: t({ id: 'footer.links-terms' }), url: u(c.AGREEMENT, i, a) },
                                    d = { id: c.RECOMMENDATION_RULES, title: t({ id: 'footer.links-recommendation-rules' }), url: u(c.RECOMMENDATION_RULES, i, a) },
                                    m = { id: c.HELP, title: t({ id: 'footer.links-help' }), url: u(c.HELP, i, a) },
                                    _ = [r, n, d];
                                return (s && 'ru' === l && _.push(o), _.push(m), _);
                            })({ formatMessage: s, isWebApplication: i, language: a, tld: l, userRegion: r }),
                            disclaimer: (0, m.v)({
                                checkExperiment: t,
                                getDisclaimerContent: () => s({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => s({ id: 'footer.explicit-content' }),
                                userRegion: r,
                            }),
                            copyrights: d({ formatMessage: s, language: a, tld: l, year: o }),
                        };
                    })({
                        checkExperiment: (e, t) => l.checkExperiment(e, t),
                        formatMessage: v,
                        isWebApplication: o.$3,
                        tld: _.tld,
                        language: I,
                        userRegion: g.account.data.userSessionRegionIso,
                        year: h(E),
                    });
                return (0, i.jsx)(x, { className: (0, a.$)({ [A().root_withOffsetForDeeplink]: C }, s), data: y });
            });
        },
        89916: (e, t, s) => {
            'use strict';
            s.d(t, { GX: () => l.G, X1: () => i.X, m5: () => a.m });
            var i = s(46606),
                a = s(91136),
                l = s(19840);
            s(17017);
        },
        91136: (e, t, s) => {
            'use strict';
            s.d(t, { m: () => a });
            class i extends Error {
                name = 'BaseException';
                message;
                code;
                data;
                stack;
                constructor(e, t = {}) {
                    let { code: s = 'E_INTERNAL', data: a = {}, ...l } = t,
                        r = e || 'Internal error';
                    (super(r, l), (this.message = r), (this.code = s), (this.data = a), (this.stack = Error(r).stack), Object.setPrototypeOf(this, i.prototype));
                }
            }
            class a extends i {
                name = 'HttpException';
                constructor(e = 'Http Client error', { code: t = 'E_HTTP_CLIENT', ...s } = {}) {
                    (super(e, { code: t, ...s }), Object.setPrototypeOf(this, a.prototype));
                }
            }
        },
        94144: (e, t, s) => {
            'use strict';
            s.d(t, { H: () => a, P: () => l });
            var i = s(53548);
            let a = (0, i.createContext)(null),
                l = () => (0, i.useContext)(a);
        },
        97804: (e, t, s) => {
            'use strict';
            var i;
            (s.d(t, { J: () => i }),
                (function (e) {
                    ((e.OK = 'ok'), (e.ERROR = 'error'));
                })(i || (i = {})));
        },
        99839: (e, t, s) => {
            'use strict';
            s.d(t, { m: () => i });
            let i = () => ({ year: 'numeric' });
        },
        99890: (e, t, s) => {
            'use strict';
            s.d(t, { C8: () => l, UC: () => r, dM: () => o, uV: () => n });
            var i = s(89916),
                a = s(67990);
            let l = (e) => {
                    if (void 0 === e || '' === e) return 'missing';
                    let t = Number(e);
                    return !Number.isFinite(t) || t < 0 ? 'invalid' : t < 86400 ? 'lt-1d' : t <= 2592e3 ? '1-30d' : 'gt-30d';
                },
                r = (e) => (e.uid ? 'authorized' : 'no-uid'),
                o = (e) => {
                    if (!(e instanceof i.m5) || !(0, a.N)(e.cause)) return 'unexpected';
                    let t = ((e) => {
                        if (!(0, a.N)(e.cause)) return;
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
                7908, 4700, 3248, 5038, 7065, 1147, 4555, 1191, 7072, 8655, 2691, 7750, 6706, 4771, 8832, 6904, 4495, 2058, 3578, 8628, 4975, 4827, 8283, 1800, 5151,
                4732, 9087, 3979, 6719, 1928, 9091, 9124, 900, 9934, 2470, 7670, 4441, 9337, 2088, 79, 4322, 763, 2670, 7358,
            ],
            () => e((e.s = 58517)),
        ),
            (_N_E = e.O()));
    },
]);
