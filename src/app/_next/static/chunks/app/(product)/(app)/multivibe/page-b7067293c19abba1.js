(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8764],
    {
        148: (e) => {
            e.exports = {
                root: 'Login_root__VtFg_',
                title: 'Login_title__dqQz1',
                important: 'Login_important__Z8S9I',
                text: 'Login_text__1uju5',
                button: 'Login_button__ZYvZY',
            };
        },
        6786: (e, t, i) => {
            'use strict';
            (i.r(t), i.d(t, { default: () => E }));
            var s = i(25839),
                o = i(84059),
                l = i(30871),
                n = i(90290),
                r = i(88204),
                a = i(74631),
                c = i(70969),
                u = i(71035),
                d = i(15993),
                m = i(53712),
                p = i(27954),
                h = i(17244),
                _ = i(6969),
                v = i(16714);
            let f = (0, r.PA)((e) => {
                    let { roomId: t = null } = e,
                        i = (0, o.useRouter)(),
                        { multivibe: l } = (0, p.g)(),
                        { hasPlus: n, isPaywallBlocking: r } = (0, d.S)(),
                        [f, E] = (0, a.useState)(!1),
                        x = (0, u.c)(async (e) => {
                            var t;
                            if ((await l.getRoomById({ roomId: e }), l.isGetRoomByIdRejected && l.errorName !== c.z.ROOM_NOT_FOUND)) {
                                (E(!0), l.resetErrorName());
                                return;
                            }
                            let s = l.invitationRoom;
                            if ((null == s ? void 0 : s.isEnabled) && (null == (t = s.wave) ? void 0 : t.seedsId)) {
                                let e = new URLSearchParams();
                                (e.set(_.K.DEEPLINK, h.v.PLAY_VIBE), e.set(_.K.SEEDS, s.wave.seedsId), i.replace(''.concat(m.Z.main.href, '?').concat(e.toString())));
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
                            x(t);
                        }
                    }, [x, n, l.promoModal, t, i]),
                    f && (0, o.notFound)(),
                    r)
                        ? null
                        : (0, s.jsx)(v.MainSuspenseLoader, {});
                }),
                E = () => {
                    let e = (0, o.useSearchParams)().get('roomId');
                    return (0, s.jsx)(n.WithWebNextWaveForTwo, {
                        children: (0, s.jsx)(l.WithAuth, { withRedirectToMainPage: !1, children: (0, s.jsx)(f, { roomId: e }) }),
                    });
                };
        },
        6969: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => s });
            var s = (function (e) {
                return (
                    (e.TAB = 'tab'),
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
        8254: (e) => {
            e.exports = {
                icon: 'MainSuspenseLoader_icon__MceTD',
                'animate-pop': 'MainSuspenseLoader_animate-pop__vkpff',
                heartbeat: 'MainSuspenseLoader_heartbeat__6RDpM',
            };
        },
        15993: (e, t, i) => {
            'use strict';
            i.d(t, { S: () => r });
            var s = i(84059),
                o = i(74631),
                l = i(53712),
                n = i(27954);
            let r = () => {
                let e = (0, s.useRouter)(),
                    { user: t, paywall: i, multivibe: r } = (0, n.g)(),
                    [a, c] = (0, o.useState)(!1),
                    u = !r.isEnabled,
                    d = t.hasPlus,
                    m = i.modal.isOpened,
                    p = !d && a && !m,
                    h = a && m;
                return (
                    (0, o.useEffect)(() => {
                        if (u || p) return void e.replace(l.Z.main.href);
                        a || d || m || (i.openModal(), c(!0));
                    }, [d, u, m, a, i, e, p]),
                    { hasPlus: d, isPaywallBlocking: h }
                );
            };
        },
        16714: (e, t, i) => {
            'use strict';
            i.d(t, { MainSuspenseLoader: () => r });
            var s = i(25839),
                o = i(66738),
                l = i(8254),
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
        16978: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => p });
            var s = i(25839),
                o = i(84059),
                l = i(8487),
                n = i(61493),
                r = i(71035),
                a = i(4071),
                c = i(4254),
                u = i(57024),
                d = i(36484),
                m = i(62562);
            let p = (e) => {
                let { size: t = 'm', variant: i = 'default', color: p = 'primary', withRipple: h = !0, buttonText: _, isBlock: v, key: f, className: E } = e,
                    x = (0, o.useRouter)(),
                    y = (0, m.N)().get(d.QG),
                    N = (0, r.c)(() => {
                        y.authorizationUrl && ((0, u.uV)({ stage: 'attempt-start', trigger: 'user' }), x.push(y.authorizationUrl));
                    });
                return (0, s.jsx)(
                    a.$,
                    {
                        onClick: N,
                        className: E,
                        isBlock: v,
                        color: p,
                        variant: i,
                        size: t,
                        radius: 'xxxl',
                        withRipple: h,
                        'data-test-id': n.S7.UNAUTHORIZED_BUTTON,
                        children: _ || (0, s.jsx)(c.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, s.jsx)(l.A, { id: 'authorization.enter-button' }) }),
                    },
                    f,
                );
            };
        },
        17244: (e, t, i) => {
            'use strict';
            i.d(t, { v: () => s });
            var s = (function (e) {
                return ((e.PLAY_VIBE = 'play-vibe'), e);
            })({});
        },
        27954: (e, t, i) => {
            'use strict';
            i.d(t, { P: () => l, g: () => n });
            var s = i(74631),
                o = i(36432);
            let l = (0, s.createContext)(null);
            function n() {
                let e = (0, s.useContext)(l);
                if (null === e) throw new o.t('Store cannot be null, please add a context provider', { code: 'E_CONTEXT_STORE_NULL' });
                return e;
            }
        },
        30871: (e, t, i) => {
            'use strict';
            i.d(t, { WithAuth: () => _ });
            var s = i(25839),
                o = i(88204),
                l = i(84059),
                n = i(82298),
                r = i(8487),
                a = i(4254),
                c = i(16978),
                u = i(148),
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
            var p = i(53712),
                h = i(27954);
            let _ = (0, o.PA)((e) => {
                let { children: t, withRedirectToMainPage: i } = e,
                    { user: o } = (0, h.g)();
                return o.isAuthorized ? t : (i && (0, l.redirect)(p.Z.main.href), (0, s.jsx)(m, {}));
            });
        },
        53712: (e, t, i) => {
            'use strict';
            i.d(t, { Z: () => o });
            var s = i(25895);
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
        57024: (e, t, i) => {
            'use strict';
            i.d(t, { C8: () => l, UC: () => n, dM: () => r, uV: () => a });
            var s = i(93690),
                o = i(58848);
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
        58848: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => s });
            let s = (e) => 'object' == typeof e && null !== e && 'request' in e && null !== e.request;
        },
        60015: (e, t, i) => {
            Promise.resolve().then(i.bind(i, 6786));
        },
        70969: (e, t, i) => {
            'use strict';
            var s;
            (i.d(t, { z: () => s }),
                (function (e) {
                    ((e.ROOM_DUPLICATION = 'ROOM_DUPLICATION'), (e.ROOM_NOT_FOUND = 'ROOM_NOT_FOUND'), (e.ROOM_LIMIT_EXCEEDED = 'ROOM_LIMIT_EXCEEDED'));
                })(s || (s = {})));
        },
        90290: (e, t, i) => {
            'use strict';
            i.d(t, { WithWebNextWaveForTwo: () => r });
            var s = i(88204),
                o = i(84059),
                l = i(53712),
                n = i(27954);
            let r = (0, s.PA)((e) => {
                let { children: t } = e,
                    { multivibe: i } = (0, n.g)();
                return (i.isEnabled || (0, o.redirect)(l.Z.main.href), t);
            });
        },
    },
    (e) => {
        (e.O(0, [1676, 1107, 6706, 9212, 9004, 4464, 3269, 4163, 3246, 4475, 5056, 7358], () => e((e.s = 60015))), (_N_E = e.O()));
    },
]);
