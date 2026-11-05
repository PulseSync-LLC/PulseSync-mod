(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8764],
    {
        4086: (e, t, o) => {
            'use strict';
            o.d(t, {
                $$: () => eu,
                $5: () => ep,
                $8: () => O,
                $I: () => _,
                $Y: () => eP,
                A4: () => m,
                CN: () => er,
                CR: () => p,
                DP: () => I,
                DT: () => ek,
                DV: () => eh,
                E: () => g,
                EN: () => s,
                Ez: () => em,
                GB: () => h,
                GV: () => x,
                Hm: () => l,
                JM: () => el,
                K1: () => Y,
                LC: () => ey,
                Lb: () => v,
                Lk: () => ea,
                N1: () => eN,
                NN: () => W,
                O9: () => U,
                OP: () => R,
                Oo: () => M,
                P0: () => A,
                P1: () => ec,
                PL: () => eC,
                QG: () => w,
                RD: () => eB,
                RG: () => eU,
                S1: () => r,
                SD: () => $,
                SX: () => eg,
                TD: () => ev,
                TK: () => n,
                Tq: () => eD,
                U2: () => k,
                UB: () => eM,
                Ut: () => K,
                V3: () => E,
                V4: () => L,
                VR: () => ez,
                W5: () => ex,
                WA: () => G,
                X4: () => P,
                X8: () => B,
                Xc: () => eo,
                Zf: () => i,
                Zi: () => eI,
                Zl: () => ei,
                _1: () => N,
                aE: () => X,
                by: () => eS,
                c9: () => et,
                cZ: () => es,
                dA: () => eb,
                dh: () => eT,
                en: () => J,
                eu: () => q,
                ff: () => eE,
                gd: () => eR,
                gu: () => a,
                iP: () => ew,
                jQ: () => ee,
                ki: () => Q,
                mD: () => c,
                mr: () => d,
                nM: () => Z,
                ni: () => ej,
                ok: () => j,
                oo: () => C,
                qN: () => H,
                qT: () => e_,
                qt: () => T,
                re: () => en,
                ro: () => V,
                s_: () => eA,
                sv: () => ed,
                tz: () => y,
                u2: () => ef,
                uM: () => eL,
                vH: () => b,
                vg: () => eO,
                wH: () => z,
                wK: () => f,
                xF: () => S,
                y$: () => u,
                yq: () => F,
                zj: () => D,
            });
            let s = 'AfterTrackResource',
                i = 'Logger',
                r = 'TechMetricsLogger',
                c = 'OtelSdk',
                n = 'ModelActionsLogger',
                l = 'HttpClient',
                a = 'HttpBeaconClient',
                u = 'Slam',
                d = 'UgcUploadHttpClient',
                R = 'BaseResourceHttpClient',
                m = 'ResourceHttpClient',
                p = 'ResourceBeaconClient',
                _ = 'AccountResource',
                h = 'OutageNoticeResource',
                N = 'UsersResource',
                E = 'LandingResource',
                f = 'LandingBlocksResource',
                v = 'Landing3Resource',
                y = 'AlbumResource',
                g = 'SlidesResource',
                T = 'MusicExternalApiPrefixUrl',
                x = 'MusicResourceFactory',
                L = 'PublicConfig',
                S = 'ServerConfig',
                A = 'TokenConfig',
                C = 'Storage',
                I = 'CookieStorage',
                k = 'LocalStorage',
                O = 'LibraryResource',
                D = 'LumenResource',
                M = 'TracksResource',
                b = 'SessionStorage',
                P = 'TopResource',
                U = 'ArtistsResource',
                w = 'Authorization',
                z = 'RedAlertResource',
                j = 'RotorResource',
                B = 'WaveResource',
                F = 'SearchResource',
                W = 'SearchPlaylistResource',
                H = 'PlaylistResource',
                V = 'PlaylistsResource',
                Z = 'PinResource',
                K = 'MetatagsResource',
                Y = 'TagResource',
                q = 'FeedResource',
                $ = 'Wizard3Resource',
                G = 'CONTAINER_USER_ID_TOKEN',
                X = 'PinsResource',
                Q = 'MusicHistoryResource',
                J = 'ChartResource',
                ee = 'ClipsResource',
                et = 'DynamicPagesResource',
                eo = 'CONTAINER_I18N_STORAGE',
                es = 'LyricViewsResource',
                ei = 'NonMusicResource',
                er = 'DonationResource',
                ec = 'LoaderResource',
                en = 'PrefixlessResource',
                el = 'StreamsResource',
                ea = 'FiltersResource',
                eu = 'UgcResource',
                ed = 'CollectionResource',
                eR = 'AdsResource',
                em = 'PersonalResource',
                ep = 'AvailabilityResource',
                e_ = 'GetFileInfoResource',
                eh = 'ResourcesFileInfoResource',
                eN = 'DisclaimersResource',
                eE = 'DisclaimerDictionary',
                ef = 'FamilyResource',
                ev = 'ChildrenLandingResource',
                ey = 'TelemetryResource',
                eg = 'Env',
                eT = 'PromoResource',
                ex = 'RumResource',
                eL = 'AcqOffers',
                eS = 'Ynison',
                eA = 'YnisonNewConnector',
                eC = 'LabelsResource',
                eI = 'RequestExecutionContext',
                ek = 'ConcertsResource',
                eO = 'YaMetrikaController',
                eD = 'RumTransport',
                eM = 'YaMetrikaTransport',
                eb = 'WordsResource',
                eP = 'WheelResource',
                eU = 'MocksInitializer',
                ew = 'CacheWorker',
                ez = 'NetworkMonitorFactory',
                ej = 'SkeletonSdk',
                eB = 'TagSandbox';
        },
        4370: (e, t, o) => {
            'use strict';
            o.d(t, { Z: () => i });
            var s = o(67174);
            let i = {
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
        7628: (e, t, o) => {
            'use strict';
            o.d(t, { H: () => m });
            var s = o(88800),
                i = o(88969),
                r = o(58390),
                c = o(17392),
                n = o(29993),
                l = o(96817),
                a = o(29504),
                u = o(99890),
                d = o(4086),
                R = o(41928);
            let m = (e) => {
                let { size: t = 'm', variant: o = 'default', color: m = 'primary', withRipple: p = !0, buttonText: _, isBlock: h, key: N, className: E } = e,
                    f = (0, r.useRouter)(),
                    v = (0, R.N)().get(d.QG),
                    y = (0, n.c)(() => {
                        v.authorizationUrl && ((0, u.uV)({ stage: 'attempt-start', trigger: 'user' }), f.push(v.authorizationUrl));
                    });
                return (0, s.jsx)(
                    l.$,
                    {
                        onClick: y,
                        className: E,
                        isBlock: h,
                        color: m,
                        variant: o,
                        size: t,
                        radius: 'xxxl',
                        withRipple: p,
                        'data-test-id': c.S7.UNAUTHORIZED_BUTTON,
                        children: _ || (0, s.jsx)(a.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, s.jsx)(i.A, { id: 'authorization.enter-button' }) }),
                    },
                    N,
                );
            };
        },
        25816: (e, t, o) => {
            Promise.resolve().then(o.bind(o, 51546));
        },
        34303: (e, t, o) => {
            'use strict';
            o.d(t, { K: () => s });
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
        41928: (e, t, o) => {
            'use strict';
            o.d(t, { B: () => r, N: () => c });
            var s = o(53548),
                i = o(39499);
            let r = (0, s.createContext)(null);
            function c() {
                let e = (0, s.useContext)(r);
                if (null === e) throw new i.t('Container cannot be null, please add a context provider', { code: 'E_CONTEXT_CONTAINER_NULL' });
                return e;
            }
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
        48820: (e, t, o) => {
            'use strict';
            o.d(t, { WithWebNextWaveForTwo: () => n });
            var s = o(84961),
                i = o(58390),
                r = o(4370),
                c = o(72288);
            let n = (0, s.PA)((e) => {
                let { children: t } = e,
                    { multivibe: o } = (0, c.g)();
                return (o.isEnabled || (0, i.redirect)(r.Z.main.href), t);
            });
        },
        51546: (e, t, o) => {
            'use strict';
            (o.r(t), o.d(t, { default: () => E }));
            var s = o(88800),
                i = o(58390),
                r = o(57328),
                c = o(48820),
                n = o(84961),
                l = o(53548),
                a = o(67879),
                u = o(29993),
                d = o(79179),
                R = o(4370),
                m = o(72288),
                p = o(68986),
                _ = o(34303),
                h = o(87396);
            let N = (0, n.PA)((e) => {
                    let { roomId: t = null } = e,
                        o = (0, i.useRouter)(),
                        { multivibe: r } = (0, m.g)(),
                        { hasPlus: c, isPaywallBlocking: n } = (0, d.S)(),
                        [N, E] = (0, l.useState)(!1),
                        f = (0, u.c)(async (e) => {
                            var t;
                            if ((await r.getRoomById({ roomId: e }), r.isGetRoomByIdRejected && r.errorName !== a.z.ROOM_NOT_FOUND)) {
                                (E(!0), r.resetErrorName());
                                return;
                            }
                            let s = r.invitationRoom;
                            if ((null == s ? void 0 : s.isEnabled) && (null == (t = s.wave) ? void 0 : t.seedsId)) {
                                let e = new URLSearchParams();
                                (e.set(_.K.DEEPLINK, p.v.PLAY_VIBE), e.set(_.K.SEEDS, s.wave.seedsId), o.replace(''.concat(R.Z.main.href, '?').concat(e.toString())));
                                return;
                            }
                            (r.inviteModal.open(), o.replace(R.Z.main.href));
                        });
                    return ((0, l.useEffect)(() => {
                        if (c) {
                            if (!t) {
                                (r.promoModal.open(), o.replace(R.Z.main.href));
                                return;
                            }
                            f(t);
                        }
                    }, [f, c, r.promoModal, t, o]),
                    N && (0, i.notFound)(),
                    n)
                        ? null
                        : (0, s.jsx)(h.MainSuspenseLoader, {});
                }),
                E = () => {
                    let e = (0, i.useSearchParams)().get('roomId');
                    return (0, s.jsx)(c.WithWebNextWaveForTwo, {
                        children: (0, s.jsx)(r.WithAuth, { withRedirectToMainPage: !1, children: (0, s.jsx)(N, { roomId: e }) }),
                    });
                };
        },
        57328: (e, t, o) => {
            'use strict';
            o.d(t, { WithAuth: () => _ });
            var s = o(88800),
                i = o(84961),
                r = o(58390),
                c = o(65724),
                n = o(88969),
                l = o(29504),
                a = o(7628),
                u = o(42674),
                d = o.n(u);
            let R = (0, i.PA)(() =>
                (0, s.jsxs)('div', {
                    className: d().root,
                    children: [
                        (0, s.jsx)(l.DZ, {
                            className: (0, c.$)(d().title, d().important),
                            variant: 'h3',
                            size: 'xs',
                            children: (0, s.jsx)(n.A, { id: 'authorization.enter-title' }),
                        }),
                        (0, s.jsx)(l.HL, {
                            className: (0, c.$)(d().text, d().important),
                            variant: 'span',
                            type: 'text',
                            size: 'l',
                            weight: 'normal',
                            children: (0, s.jsx)(n.A, { id: 'authorization.enter-text' }),
                        }),
                        (0, s.jsx)(a.H, { size: 'l', className: d().button }),
                    ],
                }),
            );
            var m = o(4370),
                p = o(72288);
            let _ = (0, i.PA)((e) => {
                let { children: t, withRedirectToMainPage: o } = e,
                    { user: i } = (0, p.g)();
                return i.isAuthorized ? t : (o && (0, r.redirect)(m.Z.main.href), (0, s.jsx)(R, {}));
            });
        },
        60932: (e) => {
            e.exports = {
                icon: 'MainSuspenseLoader_icon__MceTD',
                'animate-pop': 'MainSuspenseLoader_animate-pop__vkpff',
                heartbeat: 'MainSuspenseLoader_heartbeat__6RDpM',
            };
        },
        67879: (e, t, o) => {
            'use strict';
            var s;
            (o.d(t, { z: () => s }),
                (function (e) {
                    ((e.NOT_FOUND = 'NOT_FOUND'),
                        (e.INVALID_SEEDS = 'INVALID_SEEDS'),
                        (e.ROOM_DUPLICATION = 'ROOM_DUPLICATION'),
                        (e.ROOM_NOT_FOUND = 'ROOM_NOT_FOUND'),
                        (e.ROOM_LIMIT_EXCEEDED = 'ROOM_LIMIT_EXCEEDED'));
                })(s || (s = {})));
        },
        67990: (e, t, o) => {
            'use strict';
            o.d(t, { N: () => s });
            let s = (e) => 'object' == typeof e && null !== e && 'request' in e && null !== e.request;
        },
        68986: (e, t, o) => {
            'use strict';
            o.d(t, { v: () => s });
            var s = (function (e) {
                return ((e.PLAY_VIBE = 'play-vibe'), e);
            })({});
        },
        79179: (e, t, o) => {
            'use strict';
            o.d(t, { S: () => n });
            var s = o(53548),
                i = o(58390),
                r = o(4370),
                c = o(72288);
            let n = () => {
                let e = (0, i.useRouter)(),
                    { user: t, paywall: o, multivibe: n } = (0, c.g)(),
                    [l, a] = (0, s.useState)(!1),
                    u = !n.isEnabled,
                    d = t.hasPlus,
                    R = o.modal.isOpened,
                    m = !d && l && !R,
                    p = l && R;
                return (
                    (0, s.useEffect)(() => {
                        if (u || m) return void e.replace(r.Z.main.href);
                        l || d || R || (o.openModal(), a(!0));
                    }, [d, u, R, l, o, e, m]),
                    { hasPlus: d, isPaywallBlocking: p }
                );
            };
        },
        87396: (e, t, o) => {
            'use strict';
            o.d(t, { MainSuspenseLoader: () => n });
            var s = o(88800),
                i = o(52300),
                r = o(60932),
                c = o.n(r);
            let n = (e) => {
                let { style: t } = e,
                    o = {
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
                    style: o,
                    children: (0, s.jsx)(i.I, {
                        variant: 'musicLogo',
                        style: { width: '100%', maxWidth: '100px', color: 'var(--ym-logo-color-primary-variant)' },
                        className: c().icon,
                    }),
                });
            };
        },
        99890: (e, t, o) => {
            'use strict';
            o.d(t, { C8: () => r, UC: () => c, dM: () => n, uV: () => l });
            var s = o(89916),
                i = o(67990);
            let r = (e) => {
                    if (void 0 === e || '' === e) return 'missing';
                    let t = Number(e);
                    return !Number.isFinite(t) || t < 0 ? 'invalid' : t < 86400 ? 'lt-1d' : t <= 2592e3 ? '1-30d' : 'gt-30d';
                },
                c = (e) => (e.uid ? 'authorized' : 'no-uid'),
                n = (e) => {
                    if (!(e instanceof s.m5) || !(0, i.N)(e.cause)) return 'unexpected';
                    let t = ((e) => {
                        if (!(0, i.N)(e.cause)) return;
                        let t = e.cause.response;
                        if ('object' == typeof t && null !== t) {
                            if ('statusCode' in t && 'number' == typeof t.statusCode) return t.statusCode;
                            if ('status' in t && 'number' == typeof t.status) return t.status;
                        }
                    })(e);
                    return void 0 === t ? 'transport' : 401 === t ? '401' : t >= 400 && t < 500 ? '4xx' : t >= 500 && t < 600 ? '5xx' : 'unexpected';
                },
                l = (e) => {
                    try {
                        var t;
                        null == (t = window.musicDesktop) || t.authorization.reportDiagnostic(e);
                    } catch (e) {}
                };
        },
    },
    (e) => {
        (e.O(0, [4814, 6706, 8832, 2058, 4831, 4732, 9087, 3979, 763, 2670, 7358], () => e((e.s = 25816))), (_N_E = e.O()));
    },
]);
