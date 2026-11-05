(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8062],
    {
        4086: (e, t, r) => {
            'use strict';
            r.d(t, {
                $$: () => eu,
                $5: () => ep,
                $8: () => x,
                $I: () => S,
                $Y: () => eD,
                A4: () => g,
                CN: () => en,
                CR: () => p,
                DP: () => O,
                DT: () => eP,
                DV: () => eE,
                E: () => y,
                EN: () => o,
                Ez: () => eg,
                GB: () => E,
                GV: () => h,
                Hm: () => a,
                JM: () => ea,
                K1: () => Y,
                LC: () => eA,
                Lb: () => m,
                Lk: () => ec,
                N1: () => eR,
                NN: () => B,
                O9: () => M,
                OP: () => _,
                Oo: () => b,
                P0: () => I,
                P1: () => ei,
                PL: () => eC,
                QG: () => U,
                RD: () => eG,
                RG: () => eM,
                S1: () => n,
                SD: () => Z,
                SX: () => ey,
                TD: () => em,
                TK: () => l,
                Tq: () => ew,
                U2: () => P,
                UB: () => eb,
                Ut: () => V,
                V3: () => N,
                V4: () => L,
                VR: () => ej,
                W5: () => eh,
                WA: () => X,
                X4: () => D,
                X8: () => G,
                Xc: () => er,
                Zf: () => s,
                Zi: () => eO,
                Zl: () => es,
                _1: () => R,
                aE: () => q,
                by: () => ev,
                c9: () => et,
                cZ: () => eo,
                dA: () => ek,
                dh: () => ef,
                en: () => Q,
                eu: () => $,
                ff: () => eN,
                gd: () => e_,
                gu: () => c,
                iP: () => eU,
                jQ: () => ee,
                ki: () => J,
                mD: () => i,
                mr: () => d,
                nM: () => W,
                ni: () => eF,
                ok: () => F,
                oo: () => C,
                qN: () => H,
                qT: () => eS,
                qt: () => f,
                re: () => el,
                ro: () => z,
                s_: () => eI,
                sv: () => ed,
                tz: () => A,
                u2: () => eT,
                uM: () => eL,
                vH: () => k,
                vg: () => ex,
                wH: () => j,
                wK: () => T,
                xF: () => v,
                y$: () => u,
                yq: () => K,
                zj: () => w,
            });
            let o = 'AfterTrackResource',
                s = 'Logger',
                n = 'TechMetricsLogger',
                i = 'OtelSdk',
                l = 'ModelActionsLogger',
                a = 'HttpClient',
                c = 'HttpBeaconClient',
                u = 'Slam',
                d = 'UgcUploadHttpClient',
                _ = 'BaseResourceHttpClient',
                g = 'ResourceHttpClient',
                p = 'ResourceBeaconClient',
                S = 'AccountResource',
                E = 'OutageNoticeResource',
                R = 'UsersResource',
                N = 'LandingResource',
                T = 'LandingBlocksResource',
                m = 'Landing3Resource',
                A = 'AlbumResource',
                y = 'SlidesResource',
                f = 'MusicExternalApiPrefixUrl',
                h = 'MusicResourceFactory',
                L = 'PublicConfig',
                v = 'ServerConfig',
                I = 'TokenConfig',
                C = 'Storage',
                O = 'CookieStorage',
                P = 'LocalStorage',
                x = 'LibraryResource',
                w = 'LumenResource',
                b = 'TracksResource',
                k = 'SessionStorage',
                D = 'TopResource',
                M = 'ArtistsResource',
                U = 'Authorization',
                j = 'RedAlertResource',
                F = 'RotorResource',
                G = 'WaveResource',
                K = 'SearchResource',
                B = 'SearchPlaylistResource',
                H = 'PlaylistResource',
                z = 'PlaylistsResource',
                W = 'PinResource',
                V = 'MetatagsResource',
                Y = 'TagResource',
                $ = 'FeedResource',
                Z = 'Wizard3Resource',
                X = 'CONTAINER_USER_ID_TOKEN',
                q = 'PinsResource',
                J = 'MusicHistoryResource',
                Q = 'ChartResource',
                ee = 'ClipsResource',
                et = 'DynamicPagesResource',
                er = 'CONTAINER_I18N_STORAGE',
                eo = 'LyricViewsResource',
                es = 'NonMusicResource',
                en = 'DonationResource',
                ei = 'LoaderResource',
                el = 'PrefixlessResource',
                ea = 'StreamsResource',
                ec = 'FiltersResource',
                eu = 'UgcResource',
                ed = 'CollectionResource',
                e_ = 'AdsResource',
                eg = 'PersonalResource',
                ep = 'AvailabilityResource',
                eS = 'GetFileInfoResource',
                eE = 'ResourcesFileInfoResource',
                eR = 'DisclaimersResource',
                eN = 'DisclaimerDictionary',
                eT = 'FamilyResource',
                em = 'ChildrenLandingResource',
                eA = 'TelemetryResource',
                ey = 'Env',
                ef = 'PromoResource',
                eh = 'RumResource',
                eL = 'AcqOffers',
                ev = 'Ynison',
                eI = 'YnisonNewConnector',
                eC = 'LabelsResource',
                eO = 'RequestExecutionContext',
                eP = 'ConcertsResource',
                ex = 'YaMetrikaController',
                ew = 'RumTransport',
                eb = 'YaMetrikaTransport',
                ek = 'WordsResource',
                eD = 'WheelResource',
                eM = 'MocksInitializer',
                eU = 'CacheWorker',
                ej = 'NetworkMonitorFactory',
                eF = 'SkeletonSdk',
                eG = 'TagSandbox';
        },
        4370: (e, t, r) => {
            'use strict';
            r.d(t, { Z: () => s });
            var o = r(67174);
            let s = {
                main: (0, o.u)('/'),
                chart: (0, o.u)('/chart'),
                chartPodcasts: (0, o.u)('/chart/podcasts'),
                collection: (0, o.u)('/collection'),
                collectionAlbums: (0, o.u)('/collection/albums'),
                collectionArtists: (0, o.u)('/collection/artists'),
                collectionClips: (0, o.u)('/collection/clips'),
                collectionDislikes: (0, o.u)('/collection/dislikes'),
                collectionKids: (0, o.u)('/collection/kids'),
                collectionKidsAlbums: (0, o.u)('/collection/kids/albums'),
                collectionKidsPlaylists: (0, o.u)('/collection/kids/playlists'),
                collectionKidsTracks: (0, o.u)('/collection/kids/tracks'),
                collectionNonMusic: (0, o.u)('/collection/non-music'),
                collectionNonMusicLiked: (0, o.u)('/collection/non-music/liked'),
                collectionVibeRooms: (0, o.u)('/collection/multivibes'),
                collectionPlaylists: (0, o.u)('/collection/playlists'),
                collectionPlaylistsCreated: (0, o.u)('/collection/playlists/created'),
                collectionPlaylistsLiked: (0, o.u)('/collection/playlists/liked'),
                collectionShelf: (0, o.u)('/collection/shelf'),
                collectionShelfLiked: (0, o.u)('/collection/shelf/liked'),
                collectionShelfNewEpisodes: (0, o.u)('/collection/shelf/new-episodes'),
                collectionShelfRecentlyPlayed: (0, o.u)('/collection/shelf/recently-played'),
                concerts: (0, o.u)('/concerts'),
                kids: (0, o.u)('/kids'),
                mixes: (0, o.u)('/mixes'),
                musicHistory: (0, o.u)('/music-history'),
                muzmarket: (0, o.u)('/muzmarket'),
                mymusic: (0, o.u)('/mymusic'),
                mymusicDownloadsTracks: (0, o.u)('/mymusic/downloads/tracks'),
                multivibe: (0, o.u)('/multivibe'),
                nonMusic: (0, o.u)('/non-music'),
                pay: (0, o.u)('/pay'),
                userSlides: (0, o.u)('/slides/user'),
                search: (0, o.u)('/search'),
                searchHistory: (0, o.u)('/search/history'),
                settings: (0, o.u)('/settings'),
                video: (0, o.u)('/video'),
            };
        },
        7628: (e, t, r) => {
            'use strict';
            r.d(t, { H: () => g });
            var o = r(88800),
                s = r(88969),
                n = r(58390),
                i = r(17392),
                l = r(29993),
                a = r(96817),
                c = r(29504),
                u = r(99890),
                d = r(4086),
                _ = r(41928);
            let g = (e) => {
                let { size: t = 'm', variant: r = 'default', color: g = 'primary', withRipple: p = !0, buttonText: S, isBlock: E, key: R, className: N } = e,
                    T = (0, n.useRouter)(),
                    m = (0, _.N)().get(d.QG),
                    A = (0, l.c)(() => {
                        m.authorizationUrl && ((0, u.uV)({ stage: 'attempt-start', trigger: 'user' }), T.push(m.authorizationUrl));
                    });
                return (0, o.jsx)(
                    a.$,
                    {
                        onClick: A,
                        className: N,
                        isBlock: E,
                        color: g,
                        variant: r,
                        size: t,
                        radius: 'xxxl',
                        withRipple: p,
                        'data-test-id': i.S7.UNAUTHORIZED_BUTTON,
                        children: S || (0, o.jsx)(c.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, o.jsx)(s.A, { id: 'authorization.enter-button' }) }),
                    },
                    R,
                );
            };
        },
        15947: (e, t, r) => {
            'use strict';
            r.d(t, { U: () => l });
            var o = r(35412),
                s = r(28166),
                n = r(97261);
            let i = [o.cy.HTTP, o.cy.HTTPS, o.cy.MAILTO, o.cy.TEL, s.Lz],
                l = (e, t, r) => {
                    let l;
                    try {
                        l = new URL(t);
                    } catch (e) {
                        return null;
                    }
                    let a = (0, o.Rj)(e, { allowedProtocols: new Set([...i, l.protocol]), baseUrl: l.href });
                    return a.isAllowed
                        ? a.url.protocol === s.Lz
                            ? { type: n.I.DEEPLINK, href: e }
                            : '_blank' !== r && ((e, t) => e.protocol === t.protocol && e.hostname === t.hostname && e.port === t.port)(a.url, l)
                              ? { type: n.I.INTERNAL, href: e }
                              : { type: n.I.EXTERNAL, href: e }
                        : null;
                };
        },
        16818: (e, t, r) => {
            'use strict';
            r.d(t, { Y: () => a });
            var o = r(53647),
                s = r(4086),
                n = r(41928),
                i = r(65523),
                l = r(57448);
            let a = () => {
                let e = (0, n.N)(),
                    t = e.get(s.oo),
                    r = e.get(s.QG),
                    a = e.get(s.uM),
                    c = e.get(s.ff),
                    u = e.get(s.V4),
                    d = e.get(s.P0),
                    _ = (0, l.f)(),
                    g = (0, i.U)(),
                    p = (0, n.N)().get(s.TK),
                    S = e.get(s.ni),
                    E = e.get(s.RD),
                    R = new o.si(),
                    N = new o.fW();
                return {
                    ..._,
                    acqOffers: a,
                    disclaimerDictionary: c,
                    logger: g,
                    modelActionsLogger: p,
                    localStorage: R,
                    sessionStorage: N,
                    containerStorage: t,
                    authorization: r,
                    config: u,
                    clientSafeConfig: d,
                    landingSdk: S,
                    tagSandbox: E,
                };
            };
        },
        26827: (e) => {
            e.exports = {
                root: 'NotFound_root__47ZX6',
                root_desktop: 'NotFound_root_desktop___QqSb',
                container: 'NotFound_container__h1XeE',
                navigation: 'NotFound_navigation__q8rIW',
                content: 'NotFound_content__3kry_',
                icon: 'NotFound_icon___Wa9y',
                title: 'NotFound_title__akG_o',
                important: 'NotFound_important__z1LWl',
                text: 'NotFound_text__oxDZv',
                button: 'NotFound_button__jF4uH',
            };
        },
        28166: (e, t, r) => {
            'use strict';
            r.d(t, { Lz: () => o, ov: () => s });
            let o = ''.concat('yandexmusic', ':'),
                s = ''.concat(o, '//');
        },
        28340: (e, t, r) => {
            'use strict';
            r.d(t, { FavoriteTracksPageStoreProvider: () => S });
            var o = r(34961),
                s = r(53892),
                n = r(5120),
                i = r(89916),
                l = r(99007),
                a = r(50633),
                c = r(74773),
                u = r(67174),
                d = r(59497);
            let _ = n.gK
                    .compose(n.gK.model('FavoriteTracksPage', { playlistUuid: n.gK.maybeNull(n.gK.string), errorStatusCode: n.gK.maybeNull(n.gK.number) }), d.X)
                    .views((e) => ({
                        get playlistUrl() {
                            if (!e.playlistUuid) return '';
                            let { href: t } = (0, u.u)('/playlists/:playlistUuid', { params: { playlistUuid: e.playlistUuid } });
                            return t;
                        },
                    }))
                    .actions((e) => ({
                        getPlaylistUrl: (0, n.L3)(function* () {
                            let { usersResource: t, modelActionsLogger: r } = (0, n._$)(e),
                                { user: o } = (0, a.M)(e),
                                s = o.account.data.uid;
                            if (s && e.loadingState !== c.G.PENDING)
                                try {
                                    var u;
                                    e.loadingState = c.G.PENDING;
                                    let [r] = yield t.getPlaylistsByKinds({ userId: s, kinds: [l.j.LIKE], withTracks: !1, withLikesCount: !1 });
                                    ((e.playlistUuid = null != (u = null == r ? void 0 : r.playlistUuid) ? u : null),
                                        e.loadingState !== c.G.IDLE && (e.loadingState = c.G.RESOLVE));
                                } catch (t) {
                                    (r.error(t),
                                        t instanceof i.GX &&
                                            (t.statusCode === i.X1.NOT_FOUND || t.statusCode === i.X1.BAD_REQUEST) &&
                                            (e.errorStatusCode = i.X1.NOT_FOUND),
                                        e.loadingState !== c.G.IDLE && (e.loadingState = c.G.REJECT));
                                }
                        }),
                        reset() {
                            ((e.loadingState = c.G.IDLE), (e.playlistUuid = null));
                        },
                    })),
                g = { loadingState: c.G.IDLE },
                { pageStoreProvider: p } = (0, o.W)({ createStore: (e) => _.create(g, e), patchKey: s.n.FAVORITE_TRACKS }),
                S = p;
        },
        32032: (e, t, r) => {
            'use strict';
            r.d(t, { FavoriteTracksPage: () => d });
            var o = r(88800),
                s = r(84961),
                n = r(53548),
                i = r(78940),
                l = r(34961),
                a = r(53892),
                c = r(64462);
            let u = (0, s.PA)(() => (0, o.jsx)(c.NotFound, {})),
                d = (0, s.PA)(() => {
                    let e = (0, l.s)(a.n.FAVORITE_TRACKS),
                        t = (0, i.Z)(e.playlistUrl);
                    if (
                        ((0, n.useEffect)(
                            () => () => {
                                e.reset();
                            },
                            [e],
                        ),
                        (0, n.useEffect)(() => {
                            e.playlistUrl && t();
                        }, [e.playlistUrl, t]),
                        e.isNeededToLoad && (0, n.use)(e.getPlaylistUrl()),
                        e.isRejected)
                    )
                        return (0, o.jsx)(u, {});
                });
        },
        34961: (e, t, r) => {
            'use strict';
            r.d(t, { W: () => E, s: () => R });
            var o = r(88800),
                s = r(84961),
                n = r(58390),
                i = r(53548),
                l = r(35412),
                a = r(39499),
                c = r(89108),
                u = r(70003),
                d = r(72288),
                _ = r(16818);
            (0, s.eO)(!1);
            let g = (0, i.createContext)(null),
                p = (e) => {
                    let { children: t, store: r, storeKey: s } = e,
                        n = (0, i.useMemo)(() => ({ store: r, storeKey: s }), [r, s]);
                    return (0, o.jsx)(g.Provider, { value: n, children: t });
                },
                S = (e) => {
                    let { nonce: t, patchKey: r, patchesRef: s } = e;
                    return (
                        (0, n.useServerInsertedHTML)(() => {
                            let e = s.current;
                            return ((s.current = []), 0 === e.length)
                                ? null
                                : (0, o.jsx)('script', {
                                      dangerouslySetInnerHTML: {
                                          __html: ((e, t) =>
                                              "\n        window.__PAGE_STATE_PATCHES__ = window.__PAGE_STATE_PATCHES__ || {};\n        window.__PAGE_STATE_PATCHES__['"
                                                  .concat(e, "'] =\n            window.__PAGE_STATE_PATCHES__['")
                                                  .concat(e, "'] || [];\n        window.__PAGE_STATE_PATCHES__['")
                                                  .concat(e, "'].push(")
                                                  .concat((0, l.Gr)(t), ");\n        window.dispatchEvent(new Event('")
                                                  .concat(c.O, "'));\n    "))(r, e),
                                      },
                                      nonce: null != t ? t : void 0,
                                  });
                        }),
                        null
                    );
                },
                E = (e) => {
                    let { createStore: t, patchKey: r } = e,
                        s = () => {
                            var e, t;
                            let o = null != (t = null == (e = window.__PAGE_STATE_PATCHES__) ? void 0 : e[r]) ? t : [];
                            return (window.__PAGE_STATE_PATCHES__ && delete window.__PAGE_STATE_PATCHES__[r], o);
                        };
                    return {
                        pageStoreProvider: (e) => {
                            let { children: n, nonce: i } = e,
                                l = (0, _.Y)(),
                                a = (0, d.g)(),
                                { store: g, patchesRef: E } = (0, u.m)({
                                    createStore: () => t({ ...l, rootStore: a }),
                                    getPendingPatchBatches: s,
                                    patchesUpdatedEventName: c.O,
                                });
                            return (0, o.jsxs)(o.Fragment, {
                                children: [(0, o.jsx)(S, { nonce: i, patchKey: r, patchesRef: E }), (0, o.jsx)(p, { store: g, storeKey: r, children: n })],
                            });
                        },
                    };
                };
            function R(e) {
                let { throwOnAbsence: t = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    r = (0, i.useContext)(g);
                if (!r || r.storeKey !== e) {
                    var o;
                    if (!t) return null;
                    throw new a.t('Page store context is missing or has unexpected key', {
                        code: 'E_CONTEXT_PAGE_STORE_NULL',
                        data: { actualStoreKey: null != (o = null == r ? void 0 : r.storeKey) ? o : 'null', expectedStoreKey: e },
                    });
                }
                return r.store;
            }
        },
        38860: (e, t, r) => {
            'use strict';
            r.d(t, { z: () => n });
            var o = r(53548),
                s = r(41168);
            let n = () => (0, o.useContext)(s.P);
        },
        41168: (e, t, r) => {
            'use strict';
            r.d(t, { P: () => o });
            let o = (0, r(53548).createContext)(null);
        },
        41928: (e, t, r) => {
            'use strict';
            r.d(t, { B: () => n, N: () => i });
            var o = r(53548),
                s = r(39499);
            let n = (0, o.createContext)(null);
            function i() {
                let e = (0, o.useContext)(n);
                if (null === e) throw new s.t('Container cannot be null, please add a context provider', { code: 'E_CONTEXT_CONTAINER_NULL' });
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
        44230: (e, t, r) => {
            'use strict';
            r.d(t, { M: () => s, g: () => n });
            var o = r(53548);
            let s = (0, o.createContext)({
                    contentRef: null,
                    defaultLayoutRef: null,
                    contentRootRef: null,
                    contentScrollRef: null,
                    sideBannerRef: null,
                    playlistStickyFiltersRef: null,
                    playlistStaticFiltersRef: null,
                    compositePlayerBarRef: null,
                    paywallRef: null,
                    setDefaultLayoutRef: () => {},
                    setContentRef: () => {},
                    setContentRootRef: () => {},
                    setSideBannerRef: () => {},
                    setContentScrollRef: () => {},
                    setPlaylistStickyFiltersRef: () => {},
                    setPlaylistStaticFiltersRef: () => {},
                    setCompositePlayerBarRef: () => {},
                    setPaywallRef: () => {},
                }),
                n = () => (0, o.useContext)(s);
        },
        46422: (e, t, r) => {
            'use strict';
            r.d(t, { Q: () => s, W: () => n });
            var o = r(53548);
            let s = (0, o.createContext)({
                pushState: () => {},
                replaceState: () => {},
                forward: () => {},
                back: () => {},
                canForward: !1,
                canBack: !1,
                state: null,
                length: 0,
            });
            function n() {
                return (0, o.useContext)(s);
            }
        },
        46777: (e, t, r) => {
            'use strict';
            r.d(t, { J: () => i });
            var o = r(55482),
                s = r(53548),
                n = r(46422);
            let i = (e) => {
                let t = (0, n.W)(),
                    r = (0, s.useMemo)(
                        () =>
                            (0, o.A)(() => {
                                if (e && !t.canBack) return void t.replaceState({ href: e });
                                null == t || t.back();
                            }, 200),
                        [t, e],
                    ),
                    i = (0, s.useMemo)(
                        () =>
                            (0, o.A)(() => {
                                null == t || t.forward();
                            }, 200),
                        [t],
                    );
                return { canBack: !!e || t.canBack, canForward: t.canForward, moveBack: r, moveForward: i };
            };
        },
        50320: (e) => {
            e.exports = { root: 'NavigationControls_root__V2A3_' };
        },
        50633: (e, t, r) => {
            'use strict';
            r.d(t, { M: () => s });
            var o = r(5120);
            let s = (e) => {
                let t = (0, o.Zn)(e);
                if (((e) => 'object' == typeof e && null !== e && 'isRootModel' in e && !0 === e.isRootModel)(t)) return t;
                let { rootStore: r } = (0, o._$)(e);
                return r || t;
            };
        },
        53647: (e, t, r) => {
            'use strict';
            r.d(t, { V8: () => n, si: () => l, fW: () => _, MJ: () => d, jU: () => p, Bx: () => g });
            var o = r(77451);
            function s(e) {
                if (!e) return null;
                try {
                    return JSON.parse(e);
                } catch (e) {
                    return (console.error(e), null);
                }
            }
            class n {
                get(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    try {
                        let i = (0, o.Jt)(e);
                        if (t) {
                            var r, n;
                            return null != (n = null == (r = s(i)) ? void 0 : r.value) ? n : null;
                        }
                        return null != i ? i : null;
                    } catch (e) {
                        return null;
                    }
                }
                set(e, t, r) {
                    let s = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
                    try {
                        let n = s ? JSON.stringify({ value: t }) : t;
                        (0, o.hZ)(e, n, r);
                    } catch (e) {
                        console.error(e);
                    }
                }
                has(e) {
                    return null !== this.get(e, !1);
                }
                remove(e) {
                    try {
                        (0, o.TF)(e);
                    } catch (e) {}
                }
            }
            function i(e) {
                try {
                    var t;
                    return null != (t = window[e]) ? t : null;
                } catch (e) {
                    return null;
                }
            }
            class l {
                get(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        r = i('localStorage');
                    if (!r) return null;
                    try {
                        var o;
                        let n = r.getItem(e) || void 0;
                        if (!t) return n;
                        let i = s(n);
                        if (!i) return null;
                        let l = null != (o = null == i ? void 0 : i.value) ? o : null;
                        if ((null == i ? void 0 : i.expires) && Date.now() > new Date(i.expires).getTime()) return (this.remove(e), null);
                        return l;
                    } catch (e) {
                        return null;
                    }
                }
                set(e, t, r) {
                    if ('number' == typeof (null == r ? void 0 : r.expires)) {
                        let e = new Date();
                        (e.setMilliseconds(e.getMilliseconds() + 864e5 * r.expires), (r.expires = e));
                    }
                    let o = i('localStorage');
                    if (o)
                        try {
                            o.setItem(e, JSON.stringify({ value: t, ...r }));
                        } catch (e) {}
                }
                has(e) {
                    return null !== this.get(e);
                }
                remove(e) {
                    let t = i('localStorage');
                    if (t)
                        try {
                            t.removeItem(e);
                        } catch (e) {}
                }
            }
            var a = r(9519),
                c = r(39499);
            class u extends c.t {
                constructor(e, t, { code: r = 'E_STORAGE', ...o } = {}) {
                    (super('There is no '.concat(t, ' storage on the ').concat(e, ' platform'), { code: r, ...o }),
                        (0, a._)(this, 'name', 'Storage Exception'),
                        Object.setPrototypeOf(this, u.prototype));
                }
            }
            class d {
                get(e) {
                    throw new u(this.platform, this.type);
                }
                set(e, t, r) {
                    throw new u(this.platform, this.type);
                }
                has(e) {
                    throw new u(this.platform, this.type);
                }
                remove(e) {
                    throw new u(this.platform, this.type);
                }
                constructor(e, t) {
                    ((0, a._)(this, 'platform', ''), (0, a._)(this, 'type', ''), (this.platform = e), (this.type = t));
                }
            }
            class _ {
                get(e) {
                    let t = i('sessionStorage');
                    if (!t) return null;
                    try {
                        var r, o, n;
                        let i = null != (o = t.getItem(e)) ? o : void 0;
                        return null != (n = null == (r = s(i)) ? void 0 : r.value) ? n : null;
                    } catch (e) {
                        return null;
                    }
                }
                set(e, t) {
                    let r = i('sessionStorage');
                    if (r)
                        try {
                            r.setItem(e, JSON.stringify({ value: t }));
                        } catch (e) {}
                }
                has(e) {
                    return null !== this.get(e);
                }
                remove(e) {
                    let t = i('sessionStorage');
                    if (t)
                        try {
                            t.removeItem(e);
                        } catch (e) {}
                }
            }
            function g(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                Array.isArray(t) &&
                    t.forEach((t) => {
                        let r = 'object' != typeof t ? t : t.name,
                            o = 'object' != typeof t ? { expires: 365 } : t.options || { expires: 365 },
                            s = e.get(r);
                        null != s && e.set(r, s, o);
                    });
            }
            function p(e) {
                let { name: t, group: r, value: o } = e;
                return o && 0 !== Object.keys(o).length
                    ? o.title
                        ? { [t]: { group: r, value: { ...o, title: r } } }
                        : { [t]: { group: r, value: { title: r, value: o } } }
                    : { [t]: { group: r, value: { title: r } } };
            }
        },
        53892: (e, t, r) => {
            'use strict';
            r.d(t, { n: () => o });
            let o = {
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
        56248: (e, t, r) => {
            'use strict';
            r.d(t, { L: () => S });
            var o = r(88800),
                s = r(65724),
                n = r(84961),
                i = r(53548),
                l = r(2058),
                a = r(17392),
                c = r(29993),
                u = r(96817),
                d = r(52300),
                _ = r(46777),
                g = r(50320),
                p = r.n(g);
            let S = (0, n.PA)((e) => {
                let {
                        withBackwardControl: t = !0,
                        withForwardControl: r = !0,
                        shouldFocusOnMount: n = !0,
                        className: g,
                        withBackwardFallback: S,
                        buttonSize: E = 'xxs',
                        onBackwardClick: R,
                    } = e,
                    { formatMessage: N } = (0, l.A)(),
                    { canBack: T, canForward: m, moveBack: A, moveForward: y } = (0, _.J)(S),
                    f = (0, i.useRef)(null),
                    h = (0, c.c)((e) => {
                        if ((e.stopPropagation(), R)) return void R();
                        A();
                    }),
                    L = (0, c.c)((e) => {
                        (e.stopPropagation(), y());
                    });
                return (
                    (0, i.useEffect)(() => {
                        n && f.current && T && f.current.focus();
                    }, [T]),
                    (0, o.jsxs)('div', {
                        className: (0, s.$)(p().root, g),
                        'data-test-id': a.Kq.navigation.NAVIGATION_CONTROLS,
                        children: [
                            t &&
                                (0, o.jsx)(u.$, {
                                    ref: f,
                                    'aria-label': N({ id: 'navigation.go-back' }),
                                    radius: 'round',
                                    disabled: !T,
                                    size: E,
                                    icon: (0, o.jsx)(d.I, { size: 'xxs', variant: 'arrowLeft' }),
                                    onClick: h,
                                    'data-test-id': a.Kq.navigation.NAVIGATION_BACKWARD_BUTTON,
                                }),
                            r &&
                                (0, o.jsx)(u.$, {
                                    'aria-label': N({ id: 'navigation.go-forward' }),
                                    radius: 'round',
                                    disabled: !m,
                                    size: E,
                                    icon: (0, o.jsx)(d.I, { size: 'xxs', variant: 'arrowRight' }),
                                    onClick: L,
                                    'data-test-id': a.Kq.navigation.NAVIGATION_FORWARD_BUTTON,
                                }),
                        ],
                    })
                );
            });
        },
        57328: (e, t, r) => {
            'use strict';
            r.d(t, { WithAuth: () => S });
            var o = r(88800),
                s = r(84961),
                n = r(58390),
                i = r(65724),
                l = r(88969),
                a = r(29504),
                c = r(7628),
                u = r(42674),
                d = r.n(u);
            let _ = (0, s.PA)(() =>
                (0, o.jsxs)('div', {
                    className: d().root,
                    children: [
                        (0, o.jsx)(a.DZ, {
                            className: (0, i.$)(d().title, d().important),
                            variant: 'h3',
                            size: 'xs',
                            children: (0, o.jsx)(l.A, { id: 'authorization.enter-title' }),
                        }),
                        (0, o.jsx)(a.HL, {
                            className: (0, i.$)(d().text, d().important),
                            variant: 'span',
                            type: 'text',
                            size: 'l',
                            weight: 'normal',
                            children: (0, o.jsx)(l.A, { id: 'authorization.enter-text' }),
                        }),
                        (0, o.jsx)(c.H, { size: 'l', className: d().button }),
                    ],
                }),
            );
            var g = r(4370),
                p = r(72288);
            let S = (0, s.PA)((e) => {
                let { children: t, withRedirectToMainPage: r } = e,
                    { user: s } = (0, p.g)();
                return s.isAuthorized ? t : (r && (0, n.redirect)(g.Z.main.href), (0, o.jsx)(_, {}));
            });
        },
        57448: (e, t, r) => {
            'use strict';
            r.d(t, { f: () => n });
            var o = r(4086),
                s = r(41928);
            let n = () => {
                let e = (0, s.N)(),
                    t = e.get(o.$I),
                    r = e.get(o.EN),
                    n = e.get(o.N1),
                    i = e.get(o._1),
                    l = e.get(o.V3),
                    a = e.get(o.Lb),
                    c = e.get(o.wK),
                    u = e.get(o.tz),
                    d = e.get(o.$8),
                    _ = e.get(o.Oo),
                    g = e.get(o.X4),
                    p = e.get(o.O9),
                    S = e.get(o.E),
                    E = e.get(o.wH),
                    R = e.get(o.ok),
                    N = e.get(o.X8),
                    T = e.get(o.yq),
                    m = e.get(o.NN),
                    A = e.get(o.qN),
                    y = e.get(o.ro),
                    f = e.get(o.nM),
                    h = e.get(o.Ut),
                    L = e.get(o.K1),
                    v = e.get(o.eu),
                    I = e.get(o.SD),
                    C = e.get(o.aE),
                    O = e.get(o.ki),
                    P = e.get(o.c9),
                    x = e.get(o.en),
                    w = e.get(o.jQ),
                    b = e.get(o.cZ),
                    k = e.get(o.Zl),
                    D = e.get(o.CN),
                    M = e.get(o.P1),
                    U = e.get(o.zj),
                    j = e.get(o.re),
                    F = e.get(o.JM),
                    G = e.get(o.Lk),
                    K = e.get(o.$$),
                    B = e.get(o.sv),
                    H = e.get(o.gd),
                    z = e.get(o.Ez),
                    W = e.get(o.u2),
                    V = e.get(o.TD),
                    Y = e.get(o.dh),
                    $ = e.get(o.LC),
                    Z = e.get(o.PL),
                    X = e.get(o.DT);
                return {
                    accountResource: t,
                    afterTrackResource: r,
                    disclaimersResource: n,
                    usersResource: i,
                    landingResource: l,
                    landing3Resource: a,
                    landingBlocksResource: c,
                    albumResource: u,
                    libraryResource: d,
                    tracksResource: _,
                    topResource: g,
                    artistsResource: p,
                    slidesResource: S,
                    redAlertResource: E,
                    rotorResource: R,
                    waveResource: N,
                    searchResource: T,
                    searchPlaylistResource: m,
                    playlistResource: A,
                    playlistsResource: y,
                    pinResource: f,
                    metatagsResource: h,
                    tagResource: L,
                    feedResource: v,
                    wizard3Resource: I,
                    pinsResource: C,
                    musicHistoryResource: O,
                    dynamicPagesResource: P,
                    chartResource: x,
                    clipsResource: w,
                    lyricViewsResource: b,
                    nonMusicResource: k,
                    donationResource: D,
                    loaderResource: M,
                    lumenResource: U,
                    prefixlessResource: j,
                    streamsResource: F,
                    filtersResource: G,
                    ugcResource: K,
                    collectionResource: B,
                    adsResource: H,
                    personalResource: z,
                    familyResource: W,
                    childrenLandingResource: V,
                    promoResource: Y,
                    telemetryResource: $,
                    labelsResource: Z,
                    concertsResource: X,
                    wordsResource: e.get(o.dA),
                    wheelResource: e.get(o.$Y),
                };
            };
        },
        59497: (e, t, r) => {
            'use strict';
            r.d(t, { X: () => n });
            var o = r(5120),
                s = r(74773);
            let n = o.gK.model('LoadingState', { loadingState: o.gK.enumeration(Object.values(s.G)) }).views((e) => ({
                get isNeededToLoad() {
                    return e.loadingState === s.G.IDLE;
                },
                get isLoading() {
                    return e.loadingState === s.G.PENDING;
                },
                get isResolved() {
                    return e.loadingState === s.G.RESOLVE;
                },
                get isRejected() {
                    return e.loadingState === s.G.REJECT;
                },
            }));
        },
        60932: (e) => {
            e.exports = {
                icon: 'MainSuspenseLoader_icon__MceTD',
                'animate-pop': 'MainSuspenseLoader_animate-pop__vkpff',
                heartbeat: 'MainSuspenseLoader_heartbeat__6RDpM',
            };
        },
        61419: (e, t, r) => {
            (Promise.resolve().then(r.bind(r, 57328)),
                Promise.resolve().then(r.bind(r, 28340)),
                Promise.resolve().then(r.bind(r, 32032)),
                Promise.resolve().then(r.bind(r, 87396)));
        },
        64462: (e, t, r) => {
            'use strict';
            (r.r(t), r.d(t, { NotFound: () => P }));
            var o = r(88800),
                s = r(65724),
                n = r(84961),
                i = r(88969);
            r(30282);
            var l = r(87999),
                a = r(54721),
                c = r(76903),
                u = r(17392),
                d = r(96817),
                _ = r(52300),
                g = r(66719),
                p = r(29504),
                S = r(98427),
                E = r(53548),
                R = r(47149),
                N = r(84423),
                T = r(89846);
            let m = (0, r(63582).n)({ event: 'Screen.Navigated', kind: 'hook', requiredScopes: [] }, function (e) {
                var t;
                let r = null == (t = (0, N.s)()) ? void 0 : t.evgenInstance,
                    { hash: o } = (0, T.g)();
                return {
                    handleNavigateToMain: (0, E.useCallback)(() => {
                        if (!r || !o) return;
                        let t = {
                            hash: o,
                            pageId: l.AppScreen.PageNotFoundScreen,
                            pageStyle: l.PageStyles.Fullscreen,
                            pagePlacement: l.PagePlacements.Fullscreen,
                            mainObjectType: l.DomainObjectType.NonApplicable,
                            mainObjectId: l.DomainObjectType.NonApplicable,
                            from: l.AppScreen.PageNotFoundScreen,
                            to: l.AppScreen.MainScreen,
                            entityType: l.EntityTypes.Error,
                            entityId: l.EntityTypes.Error,
                        };
                        (Object.values(t).some((e) => void 0 === e) || (0, R.Mu)(r, t), e());
                    }, [r, o, e]),
                };
            });
            var A = r(44230),
                y = r(4370),
                f = r(78940),
                h = r(95210),
                L = r(56248),
                v = r(72288),
                I = r(26827),
                C = r.n(I);
            let O = (0, n.PA)((e) => {
                    let { className: t, title: r, description: n, iconVariant: l = 'musicLogo', iconClassName: c, iconSize: S } = e,
                        { contentRef: R, setContentScrollRef: N } = (0, A.g)(),
                        T = (0, f.Z)(y.Z.main.href);
                    (0, a.u)();
                    let { handleNavigateToMain: I } = m(T);
                    return (
                        (0, h.N)(!0),
                        !(function () {
                            let { location: e } = (0, v.g)();
                            (0, E.useEffect)(
                                () => (
                                    e.setNotFound(!0),
                                    () => {
                                        e.setNotFound(!1);
                                    }
                                ),
                                [e],
                            );
                        })(),
                        (0, o.jsxs)(g.N, {
                            className: (0, s.$)(C().root, { [C().root_desktop]: !R }, t),
                            containerClassName: C().container,
                            ref: N,
                            'data-test-id': u.e8.notFound.NOT_FOUND,
                            children: [
                                (0, o.jsx)(L.L, { withBackwardFallback: '/', className: C().navigation, withForwardControl: !1 }),
                                (0, o.jsxs)('div', {
                                    className: C().content,
                                    children: [
                                        (0, o.jsx)(_.I, { className: (0, s.$)(C().icon, c), variant: l, size: S }),
                                        (0, o.jsx)(p.DZ, {
                                            className: (0, s.$)(C().title, C().important),
                                            variant: 'h3',
                                            size: 'xs',
                                            'data-test-id': u.e8.notFound.NOT_FOUND_TITLE,
                                            children: r || (0, o.jsx)(i.A, { id: 'page-error.page-does-not-exist' }),
                                        }),
                                        (0, o.jsx)(p.HL, {
                                            className: (0, s.$)(C().text, C().important),
                                            variant: 'span',
                                            type: 'text',
                                            size: 'l',
                                            weight: 'normal',
                                            children: n || (0, o.jsx)(i.A, { id: 'page-error.page-does-not-exist-description' }),
                                        }),
                                        (0, o.jsx)(d.$, {
                                            onClick: I,
                                            className: C().button,
                                            role: 'link',
                                            color: 'secondary',
                                            size: 'l',
                                            radius: 'xxxl',
                                            children: (0, o.jsx)(p.HL, {
                                                type: 'controls',
                                                variant: 'span',
                                                size: 'm',
                                                children: (0, o.jsx)(i.A, { id: 'navigation.page-main' }),
                                            }),
                                        }),
                                    ],
                                }),
                            ],
                        })
                    );
                }),
                P = (e) =>
                    (0, o.jsx)(c.a, {
                        pageId: l.AppScreen.PageNotFoundScreen,
                        pageIdForFrom: S.b.PAGE_NOT_FOUND_SCREEN,
                        pageStyle: l.PageStyles.Fullscreen,
                        pagePlacement: l.PagePlacements.Fullscreen,
                        mainObjectType: l.DomainObjectType.NonApplicable,
                        mainObjectId: l.DomainObjectType.NonApplicable,
                        children: (0, o.jsx)(O, { ...e }),
                    });
        },
        65523: (e, t, r) => {
            'use strict';
            r.d(t, { U: () => l });
            var o = r(4086),
                s = r(41928),
                n = r(44084);
            let i = new WeakMap(),
                l = () =>
                    ((e) => {
                        if (e instanceof n.r) return e;
                        let t = i.get(e);
                        if (t) return t;
                        let r = {
                            log: (t, r) => e.info(t, r),
                            trace: (t, r) => e.trace(t, r),
                            debug: (t, r) => e.debug(t, r),
                            info: (t, r) => e.info(t, r),
                            warn: (t, r) => e.warn(t, r),
                            error: (t, r) => e.error(t, r),
                            fatal: (t, r) => e.fatal(t, r),
                            child: (t) => e.child(t),
                        };
                        return (i.set(e, r), r);
                    })((0, s.N)().get(o.Zf));
        },
        67990: (e, t, r) => {
            'use strict';
            r.d(t, { N: () => o });
            let o = (e) => 'object' == typeof e && null !== e && 'request' in e && null !== e.request;
        },
        70003: (e, t, r) => {
            'use strict';
            r.d(t, { m: () => n });
            var o = r(5120),
                s = r(53548);
            let n = (e) => {
                let { createStore: t, getPendingPatchBatches: r, patchesUpdatedEventName: n } = e,
                    i = (0, s.useRef)([]),
                    [l] = (0, s.useState)(() => {
                        let e = t();
                        for (let t of r()) (0, o.X6)(e, t);
                        return e;
                    });
                return (
                    (0, s.useLayoutEffect)(() => {
                        let e = () => {
                            for (let e of r()) (0, o.X6)(l, e);
                        };
                        return (e(), window.addEventListener(n, e), () => window.removeEventListener(n, e));
                    }, [r, n, l]),
                    { store: l, patchesRef: i }
                );
            };
        },
        74773: (e, t, r) => {
            'use strict';
            r.d(t, { G: () => o });
            var o = (function (e) {
                return ((e.IDLE = 'IDLE'), (e.PENDING = 'PENDING'), (e.RESOLVE = 'RESOLVE'), (e.REJECT = 'REJECT'), e);
            })({});
        },
        78940: (e, t, r) => {
            'use strict';
            (r.d(t, { Z: () => a }), r(30282));
            var o = r(58390),
                s = r(29993),
                n = r(67174),
                i = r(15947),
                l = r(97261);
            let a = (e) => {
                let t = (0, o.useRouter)(),
                    { href: r, target: a } = (0, n.u)(e);
                return (0, s.c)((e) => {
                    let o = (0, i.U)(r, window.location.href, a);
                    if (!o) {
                        null == e || e.preventDefault();
                        return;
                    }
                    (null != e && e.metaKey) ||
                        (null != e && e.ctrlKey) ||
                        (null != e && e.shiftKey) ||
                        (o.type === l.I.EXTERNAL || o.type === l.I.DEEPLINK
                            ? ((e) => {
                                  let { target: t, rel: r } = (0, n.u)(e, { options: { isExternalLink: !0 } });
                                  window.open(e, t, r);
                              })(o.href)
                            : t.push(o.href));
                });
            };
        },
        87396: (e, t, r) => {
            'use strict';
            r.d(t, { MainSuspenseLoader: () => l });
            var o = r(88800),
                s = r(52300),
                n = r(60932),
                i = r.n(n);
            let l = (e) => {
                let { style: t } = e,
                    r = {
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
                return (0, o.jsx)('div', {
                    style: r,
                    children: (0, o.jsx)(s.I, {
                        variant: 'musicLogo',
                        style: { width: '100%', maxWidth: '100px', color: 'var(--ym-logo-color-primary-variant)' },
                        className: i().icon,
                    }),
                });
            };
        },
        89108: (e, t, r) => {
            'use strict';
            r.d(t, { O: () => s, s: () => o });
            let o = 'yMusicStatePatchesUpdated',
                s = 'yMusicPageStatePatchesUpdated';
        },
        95210: (e, t, r) => {
            'use strict';
            r.d(t, { N: () => n });
            var o = r(53548),
                s = r(38860);
            let n = (e) => {
                let t = (0, o.useRef)(!1),
                    r = (0, s.z)();
                (0, o.useEffect)(() => {
                    (e && (null == r || r.disable(), (t.current = !0)), !e && t.current && (null == r || r.enable(), (t.current = !1)));
                }, [e, r]);
            };
        },
        97261: (e, t, r) => {
            'use strict';
            r.d(t, { I: () => o });
            var o = (function (e) {
                return ((e.INTERNAL = 'internal'), (e.EXTERNAL = 'external'), (e.DEEPLINK = 'deeplink'), e);
            })({});
        },
        98427: (e, t, r) => {
            'use strict';
            r.d(t, { b: () => o });
            var o = (function (e) {
                return (
                    (e.ALBUM = 'album'),
                    (e.PLAYLIST = 'playlist'),
                    (e.ARTIST = 'artist'),
                    (e.ARTIST_TRACKS = 'artist_tracks'),
                    (e.ARTIST_SIMILAR = 'artist_similar'),
                    (e.ARTIST_ALBUMS = 'artist_albums'),
                    (e.ARTIST_DISCOGRAPHY = 'artist_discography'),
                    (e.ARTIST_COMPILATIONS = 'artist_compilations'),
                    (e.ARTIST_CONCERTS = 'artist_concerts_screen'),
                    (e.ARTIST_CLIPS = 'artist_clips'),
                    (e.CHART = 'chart'),
                    (e.CHART_PODCASTS = 'chart_podcasts'),
                    (e.CHART_PODCASTS_CATEGORY = 'chart_podcasts_category'),
                    (e.HOME = 'home'),
                    (e.SEARCH = 'search'),
                    (e.SIDEBAR = 'sidebar'),
                    (e.OWN_COLLECTION = 'own_collection'),
                    (e.OWN_ALBUMS = 'own_albums'),
                    (e.OWN_DISLIKES = 'own_dislikes'),
                    (e.OWN_PODCASTS = 'own_podcasts'),
                    (e.OWN_ARTISTS = 'own_artists'),
                    (e.OWN_PLAYLISTS = 'own_playlists'),
                    (e.OWN_TRACKS = 'own_tracks'),
                    (e.OWN_CLIPS = 'own_clips'),
                    (e.RADIO = 'radio'),
                    (e.GENRE = 'genre'),
                    (e.GENRE_ALBUMS = 'genre_albums'),
                    (e.GENRE_ARTISTS = 'genre_artists'),
                    (e.GENRE_PLAYLISTS = 'genre_playlists'),
                    (e.TAG = 'tag'),
                    (e.POST = 'post'),
                    (e.HISTORY = 'history'),
                    (e.FAMILIAR_YOU = 'familiar_you'),
                    (e.PODCAST = 'podcast'),
                    (e.AUDIOBOOK = 'audiobook'),
                    (e.NON_MUSIC = 'non_music'),
                    (e.NON_MUSIC_CATEGORY_PLAYLISTS = 'non_music_category_playlists'),
                    (e.NON_MUSIC_ALBUMS = 'non_music_albums'),
                    (e.LANDING = 'landing'),
                    (e.ENTITIES = 'entities'),
                    (e.TRAILER = 'trailer'),
                    (e.TRACK = 'track'),
                    (e.TRACK_SCREEN = 'track_screen'),
                    (e.PLAYER = 'player'),
                    (e.KIDS = 'kids'),
                    (e.KIDS_EDITORIAL_PLAYLISTS = 'kids_editorial_playlists'),
                    (e.KIDS_EDITORIAL_ALBUMS = 'kids_editorial_albums'),
                    (e.DOWNLOADS_TRACKS = 'downloads_tracks'),
                    (e.TRAILER_OF_THE_YEAR = 'trailer_of_the_year'),
                    (e.COLLECTION_KIDS = 'collection_kids'),
                    (e.COLLECTION_KIDS_ALBUMS = 'collection_kids_albums'),
                    (e.COLLECTION_KIDS_PLAYLISTS = 'collection_kids_playlists'),
                    (e.COLLECTION_KIDS_TRACKS = 'collection_kids_tracks'),
                    (e.COLLECTION_VIBE_ROOMS = 'multivibe_screen'),
                    (e.VIDEO_PLAYER = 'video_player'),
                    (e.LABEL = 'label'),
                    (e.LABEL_ALBUMS = 'label_albums'),
                    (e.LABEL_ARTISTS = 'label_artists'),
                    (e.PAYWALL = 'paywall'),
                    (e.CONCERTS = 'concerts'),
                    (e.CONCERT_LOCATION_SELECTOR = 'concert_location_selector'),
                    (e.PROMOLANDING_ALBUM = 'promolanding_album'),
                    (e.CONCERT = 'concert_screen'),
                    (e.PAGE_NOT_FOUND_SCREEN = 'page_not_found_screen'),
                    (e.SLIDES_SCREEN = 'slides_screen'),
                    (e.WAVE_LANDING_SCREEN = 'wave_landing_screen'),
                    (e.FACT_SCREEN = 'fact_screen'),
                    (e.LUMEN_FACT_SCREEN = 'lumen_fact_screen'),
                    (e.LUMEN_AWAKENING_SCREEN = 'lumen_awakening_screen'),
                    (e.MULTIVIBE_SENDING_INVITATION_SCREEN = 'multivibe_sending_invitation_screen'),
                    (e.MULTIVIBE_ACTION_SCREEN = 'multivibe_action_screen'),
                    (e.MULTIVIBE_LIMIT_SCREEN = 'multivibe_limit_screen'),
                    (e.MULTIVIBE_UNIFIED_SCREEN = 'multivibe_unified_screen'),
                    e
                );
            })({});
        },
        99007: (e, t, r) => {
            'use strict';
            r.d(t, { j: () => o });
            var o = (function (e) {
                return ((e[(e.LIKE = 3)] = 'LIKE'), (e[(e.CHART = 1076)] = 'CHART'), e);
            })({});
        },
        99890: (e, t, r) => {
            'use strict';
            r.d(t, { C8: () => n, UC: () => i, dM: () => l, uV: () => a });
            var o = r(89916),
                s = r(67990);
            let n = (e) => {
                    if (void 0 === e || '' === e) return 'missing';
                    let t = Number(e);
                    return !Number.isFinite(t) || t < 0 ? 'invalid' : t < 86400 ? 'lt-1d' : t <= 2592e3 ? '1-30d' : 'gt-30d';
                },
                i = (e) => (e.uid ? 'authorized' : 'no-uid'),
                l = (e) => {
                    if (!(e instanceof o.m5) || !(0, s.N)(e.cause)) return 'unexpected';
                    let t = ((e) => {
                        if (!(0, s.N)(e.cause)) return;
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
        (e.O(0, [4814, 7437, 8936, 6706, 4771, 1311, 8832, 6904, 4495, 2058, 3578, 8628, 4975, 5437, 4732, 9087, 3979, 6719, 763, 2670, 7358], () => e((e.s = 61419))),
            (_N_E = e.O()));
    },
]);
