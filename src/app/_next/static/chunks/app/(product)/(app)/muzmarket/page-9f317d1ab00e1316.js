(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7889],
    {
        12: (e, t, o) => {
            'use strict';
            o.d(t, { MuzmarketPage: () => p });
            var n = o(88800),
                i = o(84961),
                r = o(53548),
                a = o(2058),
                s = o(58390),
                c = o(17392),
                l = o(4086),
                b = o(41928),
                N = o(4370),
                W = o(72288),
                u = o(69704),
                x = o(97956),
                d = o(34303),
                m = o(53054),
                P = o.n(m);
            let p = (0, i.PA)(() => {
                var e, t;
                let o = (0, b.N)(),
                    { experiments: i, location: m, user: p, settings: k } = (0, W.g)(),
                    { theme: y } = (0, u.W)(),
                    { formatMessage: R } = (0, a.A)(),
                    [C, T] = (0, r.useState)(!1),
                    g = o.get(l.V4),
                    S = null == (t = i.getExperiment(x.z.WebNextMarketLanding)) || null == (e = t.value) ? void 0 : e.params,
                    h = (0, r.useMemo)(() => {
                        if (!C || !y) return null;
                        let e = new URL('/page/muz_market', g.market.host);
                        return (
                            'string' == typeof S && (e.search = new URLSearchParams(S).toString()),
                            e.searchParams.set('isMusicIntegration', '1'),
                            e.searchParams.set('withMusicDarkBackground', '1'),
                            e.searchParams.set('themeVariantKey', y),
                            e.searchParams.set(d.K.UTM_SOURCE, 'muz_market'),
                            e.href
                        );
                    }, [g.market.host, C, S, y]);
                return ((0, r.useEffect)(() => {
                    T(!0);
                }, []),
                (i.checkExperiment(x.z.WebNextMarketLanding, 'on') && 'ru' === m.tld && p.isAuthorized && !k.isMobile) || (0, s.redirect)(N.Z.main.href),
                h)
                    ? (0, n.jsx)('iframe', {
                          src: h,
                          title: R({ id: 'navigation.page-muzmarket' }),
                          className: P().root,
                          referrerPolicy: 'no-referrer',
                          sandbox: 'allow-forms allow-modals allow-popups allow-scripts allow-same-origin',
                          allow: 'clipboard-read clipboard-write',
                          'data-test-id': c.Xk.muzmarket.MUZMARKET_PAGE,
                      })
                    : null;
            });
        },
        4086: (e, t, o) => {
            'use strict';
            o.d(t, {
                $$: () => eb,
                $5: () => ex,
                $8: () => E,
                $I: () => d,
                $Y: () => eM,
                A4: () => u,
                CN: () => er,
                CR: () => x,
                DP: () => v,
                DT: () => eA,
                DV: () => em,
                E: () => C,
                EN: () => n,
                Ez: () => eu,
                GB: () => m,
                GV: () => g,
                Hm: () => c,
                JM: () => ec,
                K1: () => H,
                LC: () => eR,
                Lb: () => y,
                Lk: () => el,
                N1: () => eP,
                NN: () => Y,
                O9: () => O,
                OP: () => W,
                Oo: () => I,
                P0: () => f,
                P1: () => ea,
                PL: () => eD,
                QG: () => F,
                RD: () => eU,
                RG: () => eO,
                S1: () => r,
                SD: () => X,
                SX: () => eC,
                TD: () => ey,
                TK: () => s,
                Tq: () => eL,
                U2: () => A,
                UB: () => eI,
                Ut: () => G,
                V3: () => p,
                V4: () => S,
                VR: () => eV,
                W5: () => eg,
                WA: () => j,
                X4: () => M,
                X8: () => U,
                Xc: () => eo,
                Zf: () => i,
                Zi: () => ev,
                Zl: () => ei,
                _1: () => P,
                aE: () => $,
                by: () => eh,
                c9: () => et,
                cZ: () => en,
                dA: () => ew,
                dh: () => eT,
                en: () => J,
                eu: () => q,
                ff: () => ep,
                gd: () => eW,
                gu: () => l,
                iP: () => eF,
                jQ: () => ee,
                ki: () => Z,
                mD: () => a,
                mr: () => N,
                nM: () => Q,
                ni: () => e_,
                ok: () => _,
                oo: () => D,
                qN: () => z,
                qT: () => ed,
                qt: () => T,
                re: () => es,
                ro: () => K,
                s_: () => ef,
                sv: () => eN,
                tz: () => R,
                u2: () => ek,
                uM: () => eS,
                vH: () => w,
                vg: () => eE,
                wH: () => V,
                wK: () => k,
                xF: () => h,
                y$: () => b,
                yq: () => B,
                zj: () => L,
            });
            let n = 'AfterTrackResource',
                i = 'Logger',
                r = 'TechMetricsLogger',
                a = 'OtelSdk',
                s = 'ModelActionsLogger',
                c = 'HttpClient',
                l = 'HttpBeaconClient',
                b = 'Slam',
                N = 'UgcUploadHttpClient',
                W = 'BaseResourceHttpClient',
                u = 'ResourceHttpClient',
                x = 'ResourceBeaconClient',
                d = 'AccountResource',
                m = 'OutageNoticeResource',
                P = 'UsersResource',
                p = 'LandingResource',
                k = 'LandingBlocksResource',
                y = 'Landing3Resource',
                R = 'AlbumResource',
                C = 'SlidesResource',
                T = 'MusicExternalApiPrefixUrl',
                g = 'MusicResourceFactory',
                S = 'PublicConfig',
                h = 'ServerConfig',
                f = 'TokenConfig',
                D = 'Storage',
                v = 'CookieStorage',
                A = 'LocalStorage',
                E = 'LibraryResource',
                L = 'LumenResource',
                I = 'TracksResource',
                w = 'SessionStorage',
                M = 'TopResource',
                O = 'ArtistsResource',
                F = 'Authorization',
                V = 'RedAlertResource',
                _ = 'RotorResource',
                U = 'WaveResource',
                B = 'SearchResource',
                Y = 'SearchPlaylistResource',
                z = 'PlaylistResource',
                K = 'PlaylistsResource',
                Q = 'PinResource',
                G = 'MetatagsResource',
                H = 'TagResource',
                q = 'FeedResource',
                X = 'Wizard3Resource',
                j = 'CONTAINER_USER_ID_TOKEN',
                $ = 'PinsResource',
                Z = 'MusicHistoryResource',
                J = 'ChartResource',
                ee = 'ClipsResource',
                et = 'DynamicPagesResource',
                eo = 'CONTAINER_I18N_STORAGE',
                en = 'LyricViewsResource',
                ei = 'NonMusicResource',
                er = 'DonationResource',
                ea = 'LoaderResource',
                es = 'PrefixlessResource',
                ec = 'StreamsResource',
                el = 'FiltersResource',
                eb = 'UgcResource',
                eN = 'CollectionResource',
                eW = 'AdsResource',
                eu = 'PersonalResource',
                ex = 'AvailabilityResource',
                ed = 'GetFileInfoResource',
                em = 'ResourcesFileInfoResource',
                eP = 'DisclaimersResource',
                ep = 'DisclaimerDictionary',
                ek = 'FamilyResource',
                ey = 'ChildrenLandingResource',
                eR = 'TelemetryResource',
                eC = 'Env',
                eT = 'PromoResource',
                eg = 'RumResource',
                eS = 'AcqOffers',
                eh = 'Ynison',
                ef = 'YnisonNewConnector',
                eD = 'LabelsResource',
                ev = 'RequestExecutionContext',
                eA = 'ConcertsResource',
                eE = 'YaMetrikaController',
                eL = 'RumTransport',
                eI = 'YaMetrikaTransport',
                ew = 'WordsResource',
                eM = 'WheelResource',
                eO = 'MocksInitializer',
                eF = 'CacheWorker',
                eV = 'NetworkMonitorFactory',
                e_ = 'SkeletonSdk',
                eU = 'TagSandbox';
        },
        4370: (e, t, o) => {
            'use strict';
            o.d(t, { Z: () => i });
            var n = o(67174);
            let i = {
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
                muzmarket: (0, n.u)('/muzmarket'),
                mymusic: (0, n.u)('/mymusic'),
                mymusicDownloadsTracks: (0, n.u)('/mymusic/downloads/tracks'),
                multivibe: (0, n.u)('/multivibe'),
                nonMusic: (0, n.u)('/non-music'),
                pay: (0, n.u)('/pay'),
                userSlides: (0, n.u)('/slides/user'),
                search: (0, n.u)('/search'),
                searchHistory: (0, n.u)('/search/history'),
                settings: (0, n.u)('/settings'),
                video: (0, n.u)('/video'),
            };
        },
        30282: (e, t, o) => {
            'use strict';
            o.d(t, { sK: () => k, NN: () => i, $3: () => n, CP: () => b, tE: () => N, Ef: () => W, $5: () => x, IU: () => y, tk: () => d.t, u0: () => p });
            let n = !1,
                i = !0;
            var r = o(9519),
                a = o(39499);
            class s extends a.t {
                constructor(e = 'Internal error', { code: t = 'E_CONFIG', ...o } = {}) {
                    (super(e, { code: t, ...o }), (0, r._)(this, 'name', 'ConfigException'), Object.setPrototypeOf(this, s.prototype));
                }
            }
            class c extends s {
                constructor(e) {
                    (super('The configuration file for environment "'.concat(e, '" does not exist.'), { code: 'E_CONFIG_FILE_NOT_FOUND' }),
                        (0, r._)(this, 'name', 'NotFoundConfigException'),
                        Object.setPrototypeOf(this, c.prototype));
                }
            }
            let l = (function (e) {
                    let { manifest: t, getConfig: o } = e,
                        n = new Map();
                    return (e) => {
                        let i = n.get(e);
                        if (i) return i;
                        if (!Object.hasOwn(t, e)) return Promise.reject(new c(e));
                        let r = t[e]().then(o);
                        return (n.set(e, r), r);
                    };
                })({
                    manifest: {
                        development: () => Promise.all([o.e(3075), o.e(6904), o.e(1223), o.e(7689), o.e(347), o.e(7906)]).then(o.bind(o, 27906)),
                        qa: () => Promise.all([o.e(3075), o.e(6904), o.e(1223), o.e(7689), o.e(347), o.e(2978)]).then(o.bind(o, 82978)),
                        stress: () => Promise.all([o.e(3075), o.e(6904), o.e(1223), o.e(7689), o.e(347), o.e(3552)]).then(o.bind(o, 13552)),
                        production: () => Promise.all([o.e(3075), o.e(6904), o.e(1223), o.e(7689), o.e(347), o.e(3760)]).then(o.bind(o, 33760)),
                    },
                    getConfig: (e) => {
                        let { config: t } = e;
                        return t;
                    },
                }),
                b = (e, t) => ''.concat(e, '/').concat(t || '1.0.0'),
                N = (e, t) => (t ? e.afisha.clientId[t] : e.afisha.clientId.web);
            function W(e, t) {
                return t ? e.player.secretKey[t] : '';
            }
            var u = o(49124);
            let x = () => {
                let e = 'window.location.pathname',
                    t = u.env.APP_VERSION || '',
                    o = 'production';
                return {
                    rumSettings: {
                        rumId: 'ru.music.frontend.desktop',
                        project: 'music.frontend.desktop',
                        service: 'frontend-desktop',
                        platform: 'desktop',
                        page: e,
                        heroElement: 'body',
                        version: t,
                        environment: o,
                    },
                    errorBooster: {
                        project: 'music.frontend.desktop',
                        platform: 'desktop',
                        page: e,
                        version: t,
                        environment: o,
                        unhandledRejection: !0,
                        uncaughtException: !0,
                        resourceFails: !0,
                    },
                };
            };
            var d = o(71242),
                m = o(10285),
                P = o(42668);
            let p = (e, t, o) => {
                let { allowCustomPrefixUrl: n, prefixUrl: i } = e.resources.musicExternalApi,
                    r = n && 'string' == typeof o && o.length > 0 ? o : i;
                return (0, m.r)(r, t, P.B);
            };
            var k = (function (e) {
                return ((e.WEB = 'YandexMusicWebNext'), (e.DESKTOP = 'YandexMusicDesktopApp'), e);
            })({});
            let y = async (e) => ({ env: e, publicConfig: await l(e) });
        },
        34303: (e, t, o) => {
            'use strict';
            o.d(t, { K: () => n });
            var n = (function (e) {
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
        36366: (e, t, o) => {
            Promise.resolve().then(o.bind(o, 12));
        },
        41928: (e, t, o) => {
            'use strict';
            o.d(t, { B: () => r, N: () => a });
            var n = o(53548),
                i = o(39499);
            let r = (0, n.createContext)(null);
            function a() {
                let e = (0, n.useContext)(r);
                if (null === e) throw new i.t('Container cannot be null, please add a context provider', { code: 'E_CONTEXT_CONTAINER_NULL' });
                return e;
            }
        },
        53054: (e) => {
            e.exports = { root: 'MuzmarketPage_root__D49hC' };
        },
        69704: (e, t, o) => {
            'use strict';
            o.d(t, { D: () => i, W: () => r });
            var n = o(53548);
            let i = (0, n.createContext)({ theme: null, setTheme: () => {} }),
                r = () => (0, n.useContext)(i);
        },
        71242: (e, t, o) => {
            'use strict';
            o.d(t, { t: () => n });
            let n = {
                statusCodes: {
                    408: { retryPolicy: 'constant-backoff', attempts: [2e3] },
                    429: { retryPolicy: 'constant-backoff', attempts: [2e3] },
                    500: { retryPolicy: 'constant-backoff', attempts: [1e3] },
                    502: { retryPolicy: 'constant-backoff', attempts: [1e3] },
                    503: { retryPolicy: 'constant-backoff', attempts: [1e3] },
                    504: { retryPolicy: 'constant-backoff', attempts: [2e3] },
                    NON_HTTP_ERROR: { retryPolicy: 'constant-backoff', attempts: [1e3] },
                    TIMEOUT: { retryPolicy: 'constant-backoff', attempts: [500] },
                },
                totalRequestsLimit: 2,
            };
        },
        72288: (e, t, o) => {
            'use strict';
            o.d(t, { P: () => r, g: () => a });
            var n = o(53548),
                i = o(39499);
            let r = (0, n.createContext)(null);
            function a() {
                let e = (0, n.useContext)(r);
                if (null === e) throw new i.t('Store cannot be null, please add a context provider', { code: 'E_CONTEXT_STORE_NULL' });
                return e;
            }
        },
        97956: (e, t, o) => {
            'use strict';
            o.d(t, { z: () => n });
            var n = (function (e) {
                return (
                    (e.WebEditorsFeatures = 'WebEditorsFeatures'),
                    (e.WebNextAuthPerf = 'WebNextAuthPerf'),
                    (e.WebNextTagSandbox = 'WebNextTagSandbox'),
                    (e.WebNextServiceWorkerCache = 'WebNextServiceWorkerCache'),
                    (e.WebNextUnauthorizedProbe = 'WebNextUnauthorizedProbe'),
                    (e.WebNextForcedLogin = 'WebNextForcedLogin'),
                    (e.WebNextBlockFullscreen = 'WebNextBlockFullscreen'),
                    (e.WebNextDisableCollection = 'WebNextDisableCollection'),
                    (e.WebNextDisableVibe = 'WebNextDisableVibe'),
                    (e.WebNextDisableVibeSettings = 'WebNextDisableVibeSettings'),
                    (e.WebNextProductWithoutRecommendation = 'WebNextProductWithoutRecommendation'),
                    (e.WebNextDisableSearch = 'WebNextDisableSearch'),
                    (e.WebNextDisableKids = 'WebNextDisableKids'),
                    (e.WebNextDisableNonMusic = 'WebNextDisableNonMusic'),
                    (e.WebNextDisablePlus = 'WebNextDisablePlus'),
                    (e.WebNextDisableSendPlaysOnTrackStart = 'WebNextDisableSendPlaysOnTrackStart'),
                    (e.WebNextPlayQueueDnD = 'WebNextPlayQueueDnD'),
                    (e.WebNextCollectionPlaylistsDnD = 'WebNextCollectionPlaylistsDnD'),
                    (e.WebNextCrackdownInterval = 'WebNextCrackdownInterval'),
                    (e.WebNextAdvertTest = 'WebNextAdvertTest'),
                    (e.WebNextBrandedPlayerErids = 'WebNextBrandedPlayerErids'),
                    (e.WebNextConcertsCashback = 'WebNextConcertsCashback'),
                    (e.WebNextBetaLabel = 'WebNextBetaLabel'),
                    (e.WebNextRewind2024 = 'WebNextRewind2024'),
                    (e.WebNextOfflineDegradation = 'WebNextOfflineDegradation'),
                    (e.WebNextLatestGenreAlbumsDegradation = 'WebNextLatestGenreAlbumsDegradation'),
                    (e.WebNextPlaylistFiltersDegradation = 'WebNextPlaylistFiltersDegradation'),
                    (e.WebNextUgcUploadDegradation = 'WebNextUgcUploadDegradation'),
                    (e.WebNextLibrarySyncLimits = 'WebNextLibrarySyncLimits'),
                    (e.WebNextDesktopPaywallInterval = 'WebNextDesktopPaywallInterval'),
                    (e.WebNextPaywallCrackdownInterval = 'WebNextPaywallCrackdownInterval'),
                    (e.WebNextShaderFallbackEnabled = 'WebNextShaderFallbackEnabled'),
                    (e.WebNextShaderV3 = 'WebNextShaderV3'),
                    (e.WebNextDisablePrefetchRequests = 'WebNextDisablePrefetchRequests'),
                    (e.WebNextDeleteIndexedDbPlaysStore = 'WebNextDeleteIndexedDbPlaysStore'),
                    (e.WebNextDeeplinksToMobile = 'WebNextDeeplinksToMobile'),
                    (e.WebNextPromoLanding = 'WebNextPromoLanding'),
                    (e.WebNextPromoLandingCrackdownInterval = 'WebNextPromoLandingCrackdownInterval'),
                    (e.WebNextPromoLandingAdvert = 'WebNextPromoLandingAdvert'),
                    (e.WebNextAlbumImpulseBanner = 'WebNextAlbumImpulseBanner'),
                    (e.WebNextPlaylistImpulseBanner = 'WebNextPlaylistImpulseBanner'),
                    (e.WebNextArtistInfo = 'WebNextArtistInfo'),
                    (e.WebNextEnableSendLimitedEntityListToYnison = 'WebNextEnableSendLimitedEntityListToYnison'),
                    (e.WebNextPromoVeryBestRecommendations = 'WebNextPromoVeryBestRecommendations'),
                    (e.WebNextLegalRedirects = 'WebNextLegalRedirects'),
                    (e.WebNextRemoveDuplicatePlays = 'WebNextRemoveDuplicatePlays'),
                    (e.WebNextVirtualSkeleton = 'WebNextVirtualSkeleton'),
                    (e.WebNextAlbumDonationButton = 'WebNextAlbumDonationButton'),
                    (e.WebNextAlbumNotModified = 'WebNextAlbumNotModified'),
                    (e.WebNextTrackNotModified = 'WebNextTrackNotModified'),
                    (e.WebNextDisableAds = 'WebNextDisableAds'),
                    (e.WebNextAlbumCPA = 'WebNextAlbumCPA'),
                    (e.WebNextPlusCPA = 'WebNextPlusCPA'),
                    (e.WebNextNewConcertCard = 'WebNextNewConcertCard'),
                    (e.NewConcertsTicketRedesign = 'newConcertsTicketRedesign'),
                    (e.WebNextConcertsTab = 'WebNextConcertsTab'),
                    (e.WebNextTracksPreload = 'WebNextTracksPreload'),
                    (e.WebNextResourcesFileInfo = 'WebNextResourcesFileInfo'),
                    (e.WebNextDisableConcertsTab = 'WebNextDisableConcertsTab'),
                    (e.WebNextFooterDisclaimer = 'WebNextFooterDisclaimer'),
                    (e.WebNextYnisonActivityInterception = 'WebNextYnisonActivityInterception'),
                    (e.WebNextYnisonEnabled = 'WebNextYnisonEnabled'),
                    (e.WebNextYnisonRestoreMusicAsVibe = 'WebNextYnisonRestoreMusicAsVibe'),
                    (e.WebNextVibeDescription = 'WebNextVibeDescription'),
                    (e.WebNextVibeTerminated = 'WebNextVibeTerminated'),
                    (e.WebNextConcertsTicketIcon = 'WebNextConcertsTicketIcon'),
                    (e.WebNextConcertPage = 'WebNextConcertPage'),
                    (e.WebNextCrossMediaPlayer = 'WebNextCrossMediaPlayer'),
                    (e.WebNextConcertTabOnboarding = 'WebNextConcertTabOnboarding'),
                    (e.WebNextPlusOptionsMarketplace = 'WebNextPlusOptionsMarketplace'),
                    (e.WebNextMarketLanding = 'WebNextMarketLanding'),
                    (e.ABTestIds = 'ABTestIds'),
                    (e.WebNextWaveAgentExperiment = 'WebNextWaveAgentExperiment'),
                    (e.WebNextUlitochka = 'WebNextUlitochka'),
                    (e.WebNextPromoLandingLayout = 'WebNextPromoLandingLayout'),
                    (e.WebNextToggleFavouritePlaylistVisibility = 'WebNextToggleFavouritePlaylistVisibility'),
                    (e.WebNextBrandedPlaylistsAxe = 'WebNextBrandedPlaylistsAxe'),
                    (e.WebNextNavbarExplicit = 'WebNextNavbarExplicit'),
                    (e.WebNextEnableSendFadeFieldsInPlays = 'WebNextEnableSendFadeFieldsInPlays'),
                    (e.WebNextSlidesPage = 'WebNextSlidesPage'),
                    (e.WebNextYnisonInactiveTimerDesktop = 'WebNextYnisonInactiveTimerDesktop'),
                    (e.WebNextPaywallTopSection = 'WebNextPaywallTopSection'),
                    (e.WebNextPaywallDisclaimer = 'WebNextPaywallDisclaimer'),
                    (e.WebNextSearchConcerts = 'WebNextSearchConcerts'),
                    (e.WebNextConcertsDetailsPage = 'WebNextConcertsDetailsPage'),
                    (e.WebNextYaspSourceLimit = 'WebNextYaspSourceLimit'),
                    (e.WebNextWaveLikesAndShares = 'WebNextWaveLikesAndShares'),
                    (e.WebNextNewWaveTab = 'WebNextNewWaveTab'),
                    (e.WebNextWavePauseState = 'WebNextWavePauseState'),
                    (e.WebNextNewWaveEntryPoint = 'WebNextNewWaveEntryPoint'),
                    (e.WebNextMainPlayerAnimation = 'WebNextMainPlayerAnimation'),
                    (e.WebNextPlayerTimecodeTooltip = 'WebNextPlayerTimecodeTooltip'),
                    (e.WebNextNewWaveTabFeedbackForm = 'WebNextNewWaveTabFeedbackForm'),
                    (e.WebNextNdaLabelOnWaveTab = 'WebNextNdaLabelOnWaveTab'),
                    (e.WebNextPaidPerformancePaywallTopSection = 'WebNextPaidPerformancePaywallTopSection'),
                    (e.WebNextConcertsIdentityEventType = 'WebNextConcertsIdentityEventType'),
                    (e.WebNextWaveScreenWordsInWave = 'WebNextWaveScreenWordsInWave'),
                    (e.WebNextWaveScreenWordsInWaveBigReplica = 'WebNextWaveScreenWordsInWaveBigReplica'),
                    (e.WebNextReplicsLumenUI = 'WebNextReplicsLumenUI'),
                    (e.WebNextReplicsLumenOption = 'WebNextReplicsLumenOption'),
                    (e.WebNextWaveScreenWordsInWaveDirectLinks = 'WebNextWaveScreenWordsInWaveDirectLinks'),
                    (e.WebNextEnableSkipDebounce = 'WebNextEnableSkipDebounce'),
                    (e.WebNextYaspVersion15267 = 'WebNextYaspVersion15267'),
                    (e.WebNextQueryToVibe = 'WebNextQueryToVibe'),
                    (e.WebNextQueryToVibeXLumen = 'WebNextQueryToVibeXLumen'),
                    (e.WebNextQueryToVibeLumenOptionCheck = 'WebNextQueryToVibeLumenOptionCheck'),
                    (e.WebNextErrorAutoSkip = 'WebNextErrorAutoSkip'),
                    (e.WebNextConcertsLocation = 'WebNextConcertsLocation'),
                    (e.WebNextConcertsLocationAll = 'WebNextConcertsLocationAll'),
                    (e.WebNextDesktopWebFreemium = 'WebNextDesktopWebFreemium'),
                    (e.WebNextBatchFeedbacksOnVibeSettingsChange = 'WebNextBatchFeedbacksOnVibeSettingsChange'),
                    (e.WebNextSendRadioStartedOnVibeSettingsChange = 'WebNextSendRadioStartedOnVibeSettingsChange'),
                    (e.WebNextRadioStartedOnSessionCreation = 'WebNextRadioStartedOnSessionCreation'),
                    (e.WebNextStoreDeferredVibeFeedbacks = 'WebNextStoreDeferredVibeFeedbacks'),
                    (e.WebNextDeleteDeferredVibeFeedbacksStore = 'WebNextDeleteDeferredVibeFeedbacksStore'),
                    (e.WebNextYnisonNetworkMonitoring = 'WebNextYnisonNetworkMonitoring'),
                    (e.WebNextYnisonNewConnector = 'WebNextYnisonNewConnector'),
                    (e.WebNextCorrectRotorQueueParam = 'WebNextCorrectRotorQueueParam'),
                    (e.WebNextNewWaveWizard = 'WebNextNewWaveWizard'),
                    (e.WebNextWizard3 = 'WebNextWizard3'),
                    (e.WebNextTrackModalCloseOnNavigate = 'WebNextTrackModalCloseOnNavigate'),
                    (e.WebNextEnableSendOriginalContextInVibePlays = 'WebNextEnableSendOriginalContextInVibePlays'),
                    (e.WebNextWaveForTwo = 'WebNextWaveForTwo'),
                    (e.WebNextTrackComplaintForm = 'WebNextTrackComplaintForm'),
                    (e.WebNextLandingSdk = 'WebNextLandingSdk'),
                    (e.WebNextYnisonUseConnectionType = 'WebNextYnisonUseConnectionType'),
                    (e.WebNextWaveForTwoOnboarding = 'WebNextWaveForTwoOnboarding'),
                    (e.WebNextAIContentReductionSetting = 'WebNextAIContentReductionSetting'),
                    (e.WebNextQueryToVibeInputAnimation = 'WebNextQueryToVibeInputAnimation'),
                    (e.WebNextSendVibeFeedbacksWithTracks = 'WebNextSendVibeFeedbacksWithTracks'),
                    (e.WebNextArtistRecommendationsAutoScroll = 'WebNextArtistRecommendationsAutoScroll'),
                    (e.WebNextOtelTechMetrics = 'WebNextOtelTechMetrics'),
                    (e.WebNextMainPlayerTitle = 'WebNextMainPlayerTitle'),
                    (e.WebNextUnstableMusicScreen = 'WebNextUnstableMusicScreen'),
                    (e.WebNextLumenCollectionEntryPoint = 'WebNextLumenCollectionEntryPoint'),
                    (e.WebNextWebView = 'WebNextWebView'),
                    e
                );
            })({});
        },
    },
    (e) => {
        (e.O(0, [2607, 6706, 8832, 2058, 4961, 9087, 763, 2670, 7358], () => e((e.s = 36366))), (_N_E = e.O()));
    },
]);
