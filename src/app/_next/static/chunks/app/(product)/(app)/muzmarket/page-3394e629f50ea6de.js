(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7889],
    {
        6858: (e, t, o) => {
            'use strict';
            o.d(t, { MuzmarketPage: () => p });
            var n = o(25839),
                i = o(88204),
                r = o(84059),
                a = o(74631),
                s = o(39004),
                c = o(61493),
                l = o(36484),
                b = o(62562),
                u = o(53712),
                N = o(27954),
                W = o(96618),
                x = o(44806),
                d = o(6969),
                m = o(42304),
                P = o.n(m);
            let p = (0, i.PA)(() => {
                var e, t;
                let o = (0, b.N)(),
                    { experiments: i, location: m, user: p, settings: k } = (0, N.g)(),
                    { theme: y } = (0, W.W)(),
                    { formatMessage: C } = (0, s.A)(),
                    [R, T] = (0, a.useState)(!1),
                    S = o.get(l.V4),
                    g = null == (t = i.getExperiment(x.z.WebNextMarketLanding)) || null == (e = t.value) ? void 0 : e.params,
                    f = (0, a.useMemo)(() => {
                        if (!R || !y) return null;
                        let e = new URL('/page/muz_market', S.market.host);
                        return (
                            'string' == typeof g && (e.search = new URLSearchParams(g).toString()),
                            e.searchParams.set('isMusicIntegration', '1'),
                            e.searchParams.set('withMusicDarkBackground', '1'),
                            e.searchParams.set('themeVariantKey', y),
                            e.searchParams.set(d.K.UTM_SOURCE, 'muz_market'),
                            e.href
                        );
                    }, [S.market.host, R, g, y]);
                return ((0, a.useEffect)(() => {
                    T(!0);
                }, []),
                (i.checkExperiment(x.z.WebNextMarketLanding, 'on') && 'ru' === m.tld && p.isAuthorized && !k.isMobile) || (0, r.redirect)(u.Z.main.href),
                f)
                    ? (0, n.jsx)('iframe', {
                          src: f,
                          title: C({ id: 'navigation.page-muzmarket' }),
                          className: P().root,
                          referrerPolicy: 'no-referrer',
                          sandbox: 'allow-forms allow-modals allow-popups allow-scripts allow-same-origin',
                          allow: 'clipboard-read clipboard-write',
                          'data-test-id': c.Xk.muzmarket.MUZMARKET_PAGE,
                      })
                    : null;
            });
        },
        6969: (e, t, o) => {
            'use strict';
            o.d(t, { K: () => n });
            var n = (function (e) {
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
        27912: (e, t, o) => {
            'use strict';
            o.d(t, { t: () => n });
            let n = {
                statusCodes: {
                    408: { retryPolicy: 'constant-backoff', attempts: [2e3, 5e3] },
                    429: { retryPolicy: 'constant-backoff', attempts: [2e3, 5e3] },
                    500: { retryPolicy: 'constant-backoff', attempts: [1e3, 3e3] },
                    502: { retryPolicy: 'constant-backoff', attempts: [1e3, 3e3] },
                    503: { retryPolicy: 'constant-backoff', attempts: [1e3, 3e3] },
                    504: { retryPolicy: 'constant-backoff', attempts: [2e3, 5e3] },
                    NON_HTTP_ERROR: { retryPolicy: 'constant-backoff', attempts: [1e3, 1e3] },
                    TIMEOUT: { retryPolicy: 'constant-backoff', attempts: [500] },
                },
                totalRequestsLimit: 3,
            };
        },
        27954: (e, t, o) => {
            'use strict';
            o.d(t, { P: () => r, g: () => a });
            var n = o(74631),
                i = o(36432);
            let r = (0, n.createContext)(null);
            function a() {
                let e = (0, n.useContext)(r);
                if (null === e) throw new i.t('Store cannot be null, please add a context provider', { code: 'E_CONTEXT_STORE_NULL' });
                return e;
            }
        },
        36484: (e, t, o) => {
            'use strict';
            o.d(t, {
                $$: () => ea,
                $5: () => eb,
                $8: () => v,
                $I: () => W,
                $Y: () => eE,
                A4: () => u,
                CN: () => et,
                CR: () => N,
                DP: () => f,
                DT: () => ef,
                DV: () => eN,
                E: () => k,
                EN: () => n,
                Ez: () => el,
                GV: () => C,
                Hm: () => a,
                JM: () => ei,
                K1: () => K,
                LC: () => eP,
                Lb: () => P,
                Lk: () => er,
                N1: () => eW,
                NN: () => _,
                O9: () => w,
                OP: () => b,
                Oo: () => A,
                P0: () => S,
                P1: () => eo,
                PL: () => eS,
                QG: () => I,
                RG: () => eL,
                SX: () => ep,
                TD: () => em,
                TK: () => r,
                Tq: () => ev,
                U2: () => h,
                UB: () => eD,
                Ut: () => z,
                V3: () => d,
                V4: () => R,
                VR: () => ew,
                W5: () => ey,
                WA: () => H,
                X4: () => L,
                X8: () => F,
                Xc: () => Z,
                Zf: () => i,
                Zi: () => eg,
                Zl: () => ee,
                _1: () => x,
                aE: () => q,
                by: () => eR,
                c9: () => $,
                cZ: () => J,
                dA: () => eA,
                dh: () => ek,
                en: () => j,
                eu: () => Q,
                ff: () => ex,
                gd: () => ec,
                gu: () => s,
                jQ: () => G,
                ki: () => X,
                mr: () => l,
                nM: () => Y,
                ni: () => eI,
                ok: () => M,
                oo: () => g,
                qN: () => U,
                qT: () => eu,
                qt: () => y,
                re: () => en,
                ro: () => B,
                s_: () => eT,
                sv: () => es,
                tz: () => p,
                u2: () => ed,
                uM: () => eC,
                vH: () => E,
                vg: () => eh,
                wH: () => O,
                wK: () => m,
                xF: () => T,
                y$: () => c,
                yq: () => V,
                zj: () => D,
            });
            let n = 'AfterTrackResource',
                i = 'Logger',
                r = 'ModelActionsLogger',
                a = 'HttpClient',
                s = 'HttpBeaconClient',
                c = 'Slam',
                l = 'UgcUploadHttpClient',
                b = 'BaseResourceHttpClient',
                u = 'ResourceHttpClient',
                N = 'ResourceBeaconClient',
                W = 'AccountResource',
                x = 'UsersResource',
                d = 'LandingResource',
                m = 'LandingBlocksResource',
                P = 'Landing3Resource',
                p = 'AlbumResource',
                k = 'SlidesResource',
                y = 'MusicExternalApiPrefixUrl',
                C = 'MusicResourceFactory',
                R = 'PublicConfig',
                T = 'ServerConfig',
                S = 'TokenConfig',
                g = 'Storage',
                f = 'CookieStorage',
                h = 'LocalStorage',
                v = 'LibraryResource',
                D = 'LumenResource',
                A = 'TracksResource',
                E = 'SessionStorage',
                L = 'TopResource',
                w = 'ArtistsResource',
                I = 'Authorization',
                O = 'RedAlertResource',
                M = 'RotorResource',
                F = 'WaveResource',
                V = 'SearchResource',
                _ = 'SearchPlaylistResource',
                U = 'PlaylistResource',
                B = 'PlaylistsResource',
                Y = 'PinResource',
                z = 'MetatagsResource',
                K = 'TagResource',
                Q = 'FeedResource',
                H = 'CONTAINER_USER_ID_TOKEN',
                q = 'PinsResource',
                X = 'MusicHistoryResource',
                j = 'ChartResource',
                G = 'ClipsResource',
                $ = 'DynamicPagesResource',
                Z = 'CONTAINER_I18N_STORAGE',
                J = 'LyricViewsResource',
                ee = 'NonMusicResource',
                et = 'DonationResource',
                eo = 'LoaderResource',
                en = 'PrefixlessResource',
                ei = 'StreamsResource',
                er = 'FiltersResource',
                ea = 'UgcResource',
                es = 'CollectionResource',
                ec = 'AdsResource',
                el = 'PersonalResource',
                eb = 'AvailabilityResource',
                eu = 'GetFileInfoResource',
                eN = 'ResourcesFileInfoResource',
                eW = 'DisclaimersResource',
                ex = 'DisclaimerDictionary',
                ed = 'FamilyResource',
                em = 'ChildrenLandingResource',
                eP = 'TelemetryResource',
                ep = 'Env',
                ek = 'PromoResource',
                ey = 'RumResource',
                eC = 'AcqOffers',
                eR = 'Ynison',
                eT = 'YnisonNewConnector',
                eS = 'LabelsResource',
                eg = 'RequestExecutionContext',
                ef = 'ConcertsResource',
                eh = 'YaMetrikaController',
                ev = 'RumTransport',
                eD = 'YaMetrikaTransport',
                eA = 'WordsResource',
                eE = 'WheelResource',
                eL = 'MocksInitializer',
                ew = 'NetworkMonitorFactory',
                eI = 'SkeletonSdk';
        },
        42304: (e) => {
            e.exports = { root: 'MuzmarketPage_root__D49hC' };
        },
        43518: (e, t, o) => {
            Promise.resolve().then(o.bind(o, 6858));
        },
        44806: (e, t, o) => {
            'use strict';
            o.d(t, { z: () => n });
            var n = (function (e) {
                return (
                    (e.WebEditorsFeatures = 'WebEditorsFeatures'),
                    (e.WebNext = 'WebNext'),
                    (e.WebNextAuthPerf = 'WebNextAuthPerf'),
                    (e.WebNextUnauthorizedProbe = 'WebNextUnauthorizedProbe'),
                    (e.WebNextBlockFullscreen = 'WebNextBlockFullscreen'),
                    (e.WebNextDisableCollection = 'WebNextDisableCollection'),
                    (e.WebNextDisableVibe = 'WebNextDisableVibe'),
                    (e.WebNextDisableVibeSettings = 'WebNextDisableVibeSettings'),
                    (e.WebNextDisableSearch = 'WebNextDisableSearch'),
                    (e.WebNextDisableKids = 'WebNextDisableKids'),
                    (e.WebNextDisableNonMusic = 'WebNextDisableNonMusic'),
                    (e.WebNextDisablePlus = 'WebNextDisablePlus'),
                    (e.WebNextDisableSendPlaysOnTrackStart = 'WebNextDisableSendPlaysOnTrackStart'),
                    (e.WebNextPlayQueueDnD = 'WebNextPlayQueueDnD'),
                    (e.WebNextCollectionPlaylistsDnD = 'WebNextCollectionPlaylistsDnD'),
                    (e.WebNextCrackdownInterval = 'WebNextCrackdownInterval'),
                    (e.WebNextAdvertTest = 'WebNextAdvertTest'),
                    (e.WebNextConcertsCashback = 'WebNextConcertsCashback'),
                    (e.WebNextBetaLabel = 'WebNextBetaLabel'),
                    (e.WebNextRewind2024 = 'WebNextRewind2024'),
                    (e.WebNextOfflineDegradation = 'WebNextOfflineDegradation'),
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
                    (e.WebNextArtistInfo = 'WebNextArtistInfo'),
                    (e.WebNextEnableSendLimitedEntityListToYnison = 'WebNextEnableSendLimitedEntityListToYnison'),
                    (e.WebNextPromoVeryBestRecommendations = 'WebNextPromoVeryBestRecommendations'),
                    (e.WebNextLegalRedirects = 'WebNextLegalRedirects'),
                    (e.WebNextRemoveDuplicatePlays = 'WebNextRemoveDuplicatePlays'),
                    (e.WebNextVirtualSkeleton = 'WebNextVirtualSkeleton'),
                    (e.WebNextAlbumDonationButton = 'WebNextAlbumDonationButton'),
                    (e.WebNextAlbumNotModified = 'WebNextAlbumNotModified'),
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
                    (e.WebNextPaywallSecondButton = 'WebNextPaywallSecondButton'),
                    (e.WebNextPaywallDisclaimer = 'WebNextPaywallDisclaimer'),
                    (e.WebNextSearchConcerts = 'WebNextSearchConcerts'),
                    (e.WebNextConcertsDetailsPage = 'WebNextConcertsDetailsPage'),
                    (e.WebNextYaspSourceLimit = 'WebNextYaspSourceLimit'),
                    (e.WebNextWaveLikesAndShares = 'WebNextWaveLikesAndShares'),
                    (e.WebNextPlayerBarYellowButton = 'WebNextPlayerBarYellowButton'),
                    (e.WebNextNewWaveTab = 'WebNextNewWaveTab'),
                    (e.WebNextMainPlayerAnimation = 'WebNextMainPlayerAnimation'),
                    (e.WebNextNewWaveTabFeedbackForm = 'WebNextNewWaveTabFeedbackForm'),
                    (e.WebNextNdaLabelOnWaveTab = 'WebNextNdaLabelOnWaveTab'),
                    (e.WebNextPaidPerformancePaywallTopSection = 'WebNextPaidPerformancePaywallTopSection'),
                    (e.WebNextPlusOptionsSidebar = 'WebNextPlusOptionsSidebar'),
                    (e.WebNextConcertsIdentityEventType = 'WebNextConcertsIdentityEventType'),
                    (e.WebNextWaveScreenWordsInWave = 'WebNextWaveScreenWordsInWave'),
                    (e.WebNextWaveScreenWordsInWaveBigReplica = 'WebNextWaveScreenWordsInWaveBigReplica'),
                    (e.WebNextReplicsLumenUI = 'WebNextReplicsLumenUI'),
                    (e.WebNextWaveScreenWordsInWaveDirectLinks = 'WebNextWaveScreenWordsInWaveDirectLinks'),
                    (e.WebNextEnableSkipDebounce = 'WebNextEnableSkipDebounce'),
                    (e.WebNextYaspVersion13766 = 'WebNextYaspVersion13766'),
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
                    (e.WebNextTrackModalCloseOnNavigate = 'WebNextTrackModalCloseOnNavigate'),
                    (e.WebNextEnableSendOriginalContextInVibePlays = 'WebNextEnableSendOriginalContextInVibePlays'),
                    (e.WebNextWaveForTwo = 'WebNextWaveForTwo'),
                    (e.WebNextWaveForTwoTest = 'WebNextWaveForTwoTest'),
                    (e.WebNextTrackComplaintForm = 'WebNextTrackComplaintForm'),
                    (e.WebNextLandingSdk = 'WebNextLandingSdk'),
                    (e.WebNextYnisonUseConnectionType = 'WebNextYnisonUseConnectionType'),
                    (e.WebNextWaveForTwoOnboarding = 'WebNextWaveForTwoOnboarding'),
                    (e.WebNextNewWaveTabFeatCover = 'WebNextNewWaveTabFeatCover'),
                    (e.WebNextAIContentReductionSetting = 'WebNextAIContentReductionSetting'),
                    (e.WebNextQueryToVibeInputAnimation = 'WebNextQueryToVibeInputAnimation'),
                    (e.WebNextSendVibeFeedbacksWithTracks = 'WebNextSendVibeFeedbacksWithTracks'),
                    e
                );
            })({});
        },
        53712: (e, t, o) => {
            'use strict';
            o.d(t, { Z: () => i });
            var n = o(25895);
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
        62562: (e, t, o) => {
            'use strict';
            o.d(t, { B: () => r, N: () => a });
            var n = o(74631),
                i = o(36432);
            let r = (0, n.createContext)(null);
            function a() {
                let e = (0, n.useContext)(r);
                if (null === e) throw new i.t('Container cannot be null, please add a context provider', { code: 'E_CONTEXT_CONTAINER_NULL' });
                return e;
            }
        },
        93588: (e, t, o) => {
            'use strict';
            o.d(t, { sK: () => y, NN: () => i, R8: () => r, $3: () => n, CP: () => u, tE: () => N, Ef: () => W, $5: () => d, IU: () => C, tk: () => m.t, u0: () => k });
            let n = !1,
                i = !0,
                r = !1;
            var a = o(58025),
                s = o(36432);
            class c extends s.t {
                constructor(e = 'Internal error', { code: t = 'E_CONFIG', ...o } = {}) {
                    (super(e, { code: t, ...o }), (0, a._)(this, 'name', 'ConfigException'), Object.setPrototypeOf(this, c.prototype));
                }
            }
            class l extends c {
                constructor(e) {
                    (super('The configuration file for environment "'.concat(e, '" does not exist.'), { code: 'E_CONFIG_FILE_NOT_FOUND' }),
                        (0, a._)(this, 'name', 'NotFoundConfigException'),
                        Object.setPrototypeOf(this, l.prototype));
                }
            }
            let b = (function (e) {
                    let { manifest: t, getConfig: o } = e,
                        n = new Map();
                    return (e) => {
                        let i = n.get(e);
                        if (i) return i;
                        if (!Object.hasOwn(t, e)) return Promise.reject(new l(e));
                        let r = t[e]().then(o);
                        return (n.set(e, r), r);
                    };
                })({
                    manifest: {
                        development: () => Promise.all([o.e(546), o.e(260), o.e(2917), o.e(4903), o.e(1198), o.e(6214)]).then(o.bind(o, 66214)),
                        qa: () => Promise.all([o.e(546), o.e(260), o.e(2917), o.e(4903), o.e(1198), o.e(7216)]).then(o.bind(o, 7216)),
                        stress: () => Promise.all([o.e(546), o.e(260), o.e(2917), o.e(4903), o.e(1198), o.e(2967)]).then(o.bind(o, 5348)),
                        production: () => Promise.all([o.e(546), o.e(260), o.e(2917), o.e(4903), o.e(1198), o.e(4069)]).then(o.bind(o, 74069)),
                    },
                    getConfig: (e) => {
                        let { config: t } = e;
                        return t;
                    },
                }),
                u = (e, t) => ''.concat(e, '/').concat(t || '1.0.0'),
                N = (e, t) => (t ? e.afisha.clientId[t] : e.afisha.clientId.web);
            function W(e, t) {
                return t ? e.player.secretKey[t] : '';
            }
            var x = o(49124);
            let d = () => {
                let e = 'window.location.pathname',
                    t = x.env.APP_VERSION || '',
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
            var m = o(27912),
                P = o(90887),
                p = o(52830);
            let k = (e, t, o) => {
                let { allowCustomPrefixUrl: n, prefixUrl: i } = e.resources.musicExternalApi,
                    r = n && 'string' == typeof o && o.length > 0 ? o : i;
                return (0, P.r)(r, t, p.B);
            };
            var y = (function (e) {
                return ((e.WEB = 'YandexMusicWebNext'), (e.DESKTOP = 'YandexMusicDesktopApp'), e);
            })({});
            let C = async (e) => ({ env: e, publicConfig: await b(e) });
        },
        96618: (e, t, o) => {
            'use strict';
            o.d(t, { D: () => i, W: () => r });
            var n = o(74631);
            let i = (0, n.createContext)({ theme: null, setTheme: () => {} }),
                r = () => (0, n.useContext)(i);
        },
    },
    (e) => {
        (e.O(0, [7371, 6706, 9212, 9004, 2870, 4163, 4475, 5056, 7358], () => e((e.s = 43518))), (_N_E = e.O()));
    },
]);
