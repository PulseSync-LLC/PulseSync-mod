(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8764],
    {
        4370: (e, t, i) => {
            'use strict';
            i.d(t, { Z: () => o });
            var s = i(67174);
            let o = {
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
            i.d(t, { H: () => p });
            var s = i(88800),
                o = i(88969),
                l = i(58390),
                n = i(17392),
                r = i(29993),
                a = i(96817),
                c = i(29504),
                u = i(99890),
                d = i(4086),
                m = i(41928);
            let p = (e) => {
                let { size: t = 'm', variant: i = 'default', color: p = 'primary', withRipple: _ = !0, buttonText: h, isBlock: v, key: E, className: f } = e,
                    N = (0, l.useRouter)(),
                    x = (0, m.N)().get(d.QG),
                    y = (0, r.c)(() => {
                        x.authorizationUrl && ((0, u.uV)({ stage: 'attempt-start', trigger: 'user' }), N.push(x.authorizationUrl));
                    });
                return (0, s.jsx)(
                    a.$,
                    {
                        onClick: y,
                        className: f,
                        isBlock: v,
                        color: p,
                        variant: i,
                        size: t,
                        radius: 'xxxl',
                        withRipple: _,
                        'data-test-id': n.S7.UNAUTHORIZED_BUTTON,
                        children: h || (0, s.jsx)(c.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, s.jsx)(o.A, { id: 'authorization.enter-button' }) }),
                    },
                    E,
                );
            };
        },
        34303: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => s });
            var s = (function (e) {
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
        42674: (e) => {
            e.exports = {
                root: 'Login_root__VtFg_',
                title: 'Login_title__dqQz1',
                important: 'Login_important__Z8S9I',
                text: 'Login_text__1uju5',
                button: 'Login_button__ZYvZY',
            };
        },
        42774: (e, t, i) => {
            Promise.resolve().then(i.bind(i, 51546));
        },
        48820: (e, t, i) => {
            'use strict';
            i.d(t, { WithWebNextWaveForTwo: () => r });
            var s = i(84961),
                o = i(58390),
                l = i(4370),
                n = i(72288);
            let r = (0, s.PA)((e) => {
                let { children: t } = e,
                    { multivibe: i } = (0, n.g)();
                return (i.isEnabled || (0, o.redirect)(l.Z.main.href), t);
            });
        },
        51546: (e, t, i) => {
            'use strict';
            (i.r(t), i.d(t, { default: () => f }));
            var s = i(88800),
                o = i(58390),
                l = i(57328),
                n = i(48820),
                r = i(84961),
                a = i(53548),
                c = i(67879),
                u = i(29993),
                d = i(79179),
                m = i(4370),
                p = i(72288),
                _ = i(68986),
                h = i(34303),
                v = i(87396);
            let E = (0, r.PA)((e) => {
                    let { roomId: t = null } = e,
                        i = (0, o.useRouter)(),
                        { multivibe: l } = (0, p.g)(),
                        { hasPlus: n, isPaywallBlocking: r } = (0, d.S)(),
                        [E, f] = (0, a.useState)(!1),
                        N = (0, u.c)(async (e) => {
                            var t;
                            if ((await l.getRoomById({ roomId: e }), l.isGetRoomByIdRejected && l.errorName !== c.z.ROOM_NOT_FOUND)) {
                                (f(!0), l.resetErrorName());
                                return;
                            }
                            let s = l.invitationRoom;
                            if ((null == s ? void 0 : s.isEnabled) && (null == (t = s.wave) ? void 0 : t.seedsId)) {
                                let e = new URLSearchParams();
                                (e.set(h.K.DEEPLINK, _.v.PLAY_VIBE), e.set(h.K.SEEDS, s.wave.seedsId), i.replace(''.concat(m.Z.main.href, '?').concat(e.toString())));
                                return;
                            }
                            (l.inviteModal.open(), i.replace(m.Z.main.href));
                        });
                    return ((0, a.useEffect)(() => {
                        if (n) {
                            if (!t) {
                                (l.promoModal.open(), i.replace(m.Z.main.href));
                                return;
                            }
                            N(t);
                        }
                    }, [N, n, l.promoModal, t, i]),
                    E && (0, o.notFound)(),
                    r)
                        ? null
                        : (0, s.jsx)(v.MainSuspenseLoader, {});
                }),
                f = () => {
                    let e = (0, o.useSearchParams)().get('roomId');
                    return (0, s.jsx)(n.WithWebNextWaveForTwo, {
                        children: (0, s.jsx)(l.WithAuth, { withRedirectToMainPage: !1, children: (0, s.jsx)(E, { roomId: e }) }),
                    });
                };
        },
        57328: (e, t, i) => {
            'use strict';
            i.d(t, { WithAuth: () => h });
            var s = i(88800),
                o = i(84961),
                l = i(58390),
                n = i(65724),
                r = i(88969),
                a = i(29504),
                c = i(7628),
                u = i(42674),
                d = i.n(u);
            let m = (0, o.PA)(() =>
                (0, s.jsxs)('div', {
                    className: d().root,
                    children: [
                        (0, s.jsx)(a.DZ, {
                            className: (0, n.$)(d().title, d().important),
                            variant: 'h3',
                            size: 'xs',
                            children: (0, s.jsx)(r.A, { id: 'authorization.enter-title' }),
                        }),
                        (0, s.jsx)(a.HL, {
                            className: (0, n.$)(d().text, d().important),
                            variant: 'span',
                            type: 'text',
                            size: 'l',
                            weight: 'normal',
                            children: (0, s.jsx)(r.A, { id: 'authorization.enter-text' }),
                        }),
                        (0, s.jsx)(c.H, { size: 'l', className: d().button }),
                    ],
                }),
            );
            var p = i(4370),
                _ = i(72288);
            let h = (0, o.PA)((e) => {
                let { children: t, withRedirectToMainPage: i } = e,
                    { user: o } = (0, _.g)();
                return o.isAuthorized ? t : (i && (0, l.redirect)(p.Z.main.href), (0, s.jsx)(m, {}));
            });
        },
        60932: (e) => {
            e.exports = {
                icon: 'MainSuspenseLoader_icon__MceTD',
                'animate-pop': 'MainSuspenseLoader_animate-pop__vkpff',
                heartbeat: 'MainSuspenseLoader_heartbeat__6RDpM',
            };
        },
        67879: (e, t, i) => {
            'use strict';
            var s;
            (i.d(t, { z: () => s }),
                (function (e) {
                    ((e.NOT_FOUND = 'NOT_FOUND'),
                        (e.INVALID_SEEDS = 'INVALID_SEEDS'),
                        (e.ROOM_DUPLICATION = 'ROOM_DUPLICATION'),
                        (e.ROOM_NOT_FOUND = 'ROOM_NOT_FOUND'),
                        (e.ROOM_LIMIT_EXCEEDED = 'ROOM_LIMIT_EXCEEDED'));
                })(s || (s = {})));
        },
        67990: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => s });
            let s = (e) => 'object' == typeof e && null !== e && 'request' in e && null !== e.request;
        },
        68986: (e, t, i) => {
            'use strict';
            i.d(t, { v: () => s });
            var s = (function (e) {
                return ((e.PLAY_VIBE = 'play-vibe'), e);
            })({});
        },
        79179: (e, t, i) => {
            'use strict';
            i.d(t, { S: () => r });
            var s = i(53548),
                o = i(58390),
                l = i(4370),
                n = i(72288);
            let r = () => {
                let e = (0, o.useRouter)(),
                    { user: t, paywall: i, multivibe: r } = (0, n.g)(),
                    [a, c] = (0, s.useState)(!1),
                    u = !r.isEnabled,
                    d = t.hasPlus,
                    m = i.modal.isOpened,
                    p = !d && a && !m,
                    _ = a && m;
                return (
                    (0, s.useEffect)(() => {
                        if (u || p) return void e.replace(l.Z.main.href);
                        a || d || m || (i.openModal(), c(!0));
                    }, [d, u, m, a, i, e, p]),
                    { hasPlus: d, isPaywallBlocking: _ }
                );
            };
        },
        87396: (e, t, i) => {
            'use strict';
            i.d(t, { MainSuspenseLoader: () => r });
            var s = i(88800),
                o = i(52300),
                l = i(60932),
                n = i.n(l);
            let r = (e) => {
                let { style: t } = e,
                    i = {
                        display: 'flex',
                        position: 'fixed',
                        insetBlockStart: 0,
                        insetInlineEnd: 0,
                        insetBlockEnd: 0,
                        insetInlineStart: 0,
                        zIndex: 'var(--ym-z-index-loader)',
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'hidden',
                        background: 'var(--ym-background-color-primary-enabled-basic)',
                        ...t,
                    };
                return (0, s.jsx)('div', {
                    style: i,
                    children: (0, s.jsx)(o.I, {
                        variant: 'musicLogo',
                        style: { width: '100%', maxWidth: '100px', color: 'var(--ym-logo-color-primary-variant)' },
                        className: n().icon,
                    }),
                });
            };
        },
        99890: (e, t, i) => {
            'use strict';
            i.d(t, { C8: () => l, UC: () => n, dM: () => r, uV: () => a });
            var s = i(89916),
                o = i(67990);
            let l = (e) => {
                    if (void 0 === e || '' === e) return 'missing';
                    let t = Number(e);
                    return !Number.isFinite(t) || t < 0 ? 'invalid' : t < 86400 ? 'lt-1d' : t <= 2592e3 ? '1-30d' : 'gt-30d';
                },
                n = (e) => (e.uid ? 'authorized' : 'no-uid'),
                r = (e) => {
                    if (!(e instanceof s.m5) || !(0, o.N)(e.cause)) return 'unexpected';
                    let t = ((e) => {
                        if (!(0, o.N)(e.cause)) return;
                        let t = e.cause.response;
                        if ('object' == typeof t && null !== t) {
                            if ('statusCode' in t && 'number' == typeof t.statusCode) return t.statusCode;
                            if ('status' in t && 'number' == typeof t.status) return t.status;
                        }
                    })(e);
                    return void 0 === t ? 'transport' : 401 === t ? '401' : t >= 400 && t < 500 ? '4xx' : t >= 500 && t < 600 ? '5xx' : 'unexpected';
                },
                a = (e) => {
                    try {
                        var t;
                        null == (t = window.musicDesktop) || t.authorization.reportDiagnostic(e);
                    } catch (e) {}
                };
        },
    },
    (e) => {
        (e.O(0, [7435, 6706, 8832, 2058, 4831, 4732, 1195, 1598, 763, 2670, 7358], () => e((e.s = 42774))), (_N_E = e.O()));
    },
]);
