(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7889],
    {
        6858: (e, t, o) => {
            'use strict';
            o.d(t, { MuzmarketPage: () => p });
            var i = o(25839),
                n = o(88204),
                r = o(74631),
                a = o(39004),
                s = o(84059),
                c = o(61493),
                l = o(36484),
                b = o(62562),
                N = o(53712),
                u = o(27954),
                W = o(96618),
                x = o(44806),
                d = o(6969),
                m = o(42304),
                P = o.n(m);
            let p = (0, n.PA)(() => {
                var e, t;
                let o = (0, b.N)(),
                    { experiments: n, location: m, user: p, settings: k } = (0, u.g)(),
                    { theme: y } = (0, W.W)(),
                    { formatMessage: R } = (0, a.A)(),
                    [C, T] = (0, r.useState)(!1),
                    g = o.get(l.V4),
                    S = null == (t = n.getExperiment(x.z.WebNextMarketLanding)) || null == (e = t.value) ? void 0 : e.params,
                    f = (0, r.useMemo)(() => {
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
                (n.checkExperiment(x.z.WebNextMarketLanding, 'on') && 'ru' === m.tld && p.isAuthorized && !k.isMobile) || (0, s.redirect)(N.Z.main.href),
                f)
                    ? (0, i.jsx)('iframe', {
                          src: f,
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
        6969: (e, t, o) => {
            'use strict';
            o.d(t, { K: () => i });
            var i = (function (e) {
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
            o.d(t, { t: () => i });
            let i = {
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
        27954: (e, t, o) => {
            'use strict';
            o.d(t, { P: () => r, g: () => a });
            var i = o(74631),
                n = o(36432);
            let r = (0, i.createContext)(null);
            function a() {
                let e = (0, i.useContext)(r);
                if (null === e) throw new n.t('Store cannot be null, please add a context provider', { code: 'E_CONTEXT_STORE_NULL' });
                return e;
            }
        },
        34410: (e, t, o) => {
            Promise.resolve().then(o.bind(o, 6858));
        },
        36484: (e, t, o) => {
            'use strict';
            o.d(t, {
                $$: () => el,
                $5: () => eW,
                $8: () => A,
                $I: () => d,
                $Y: () => ew,
                A4: () => W,
                CN: () => en,
                CR: () => x,
                DP: () => D,
                DT: () => ev,
                DV: () => ed,
                E: () => R,
                EN: () => i,
                Ez: () => eu,
                GV: () => T,
                Hm: () => c,
                JM: () => es,
                K1: () => H,
                LC: () => ey,
                Lb: () => k,
                Lk: () => ec,
                N1: () => em,
                NN: () => B,
                O9: () => M,
                OP: () => u,
                Oo: () => L,
                P0: () => f,
                P1: () => er,
                PL: () => eh,
                QG: () => O,
                RG: () => eM,
                S1: () => r,
                SD: () => G,
                SX: () => eR,
                TD: () => ek,
                TK: () => s,
                Tq: () => eE,
                U2: () => v,
                UB: () => eL,
                Ut: () => Q,
                V3: () => P,
                V4: () => g,
                VR: () => eO,
                W5: () => eT,
                WA: () => X,
                X4: () => w,
                X8: () => _,
                Xc: () => et,
                Zf: () => n,
                Zi: () => eD,
                Zl: () => ei,
                _1: () => m,
                aE: () => j,
                by: () => eS,
                c9: () => ee,
                cZ: () => eo,
                dA: () => eI,
                dh: () => eC,
                en: () => Z,
                eu: () => q,
                ff: () => eP,
                gd: () => eN,
                gu: () => l,
                jQ: () => J,
                ki: () => $,
                mD: () => a,
                mr: () => N,
                nM: () => K,
                ni: () => eF,
                ok: () => V,
                oo: () => h,
                qN: () => Y,
                qT: () => ex,
                qt: () => C,
                re: () => ea,
                ro: () => z,
                s_: () => ef,
                sv: () => eb,
                tz: () => y,
                u2: () => ep,
                uM: () => eg,
                vH: () => I,
                vg: () => eA,
                wH: () => F,
                wK: () => p,
                xF: () => S,
                y$: () => b,
                yq: () => U,
                zj: () => E,
            });
            let i = 'AfterTrackResource',
                n = 'Logger',
                r = 'TechMetricsLogger',
                a = 'OtelSdk',
                s = 'ModelActionsLogger',
                c = 'HttpClient',
                l = 'HttpBeaconClient',
                b = 'Slam',
                N = 'UgcUploadHttpClient',
                u = 'BaseResourceHttpClient',
                W = 'ResourceHttpClient',
                x = 'ResourceBeaconClient',
                d = 'AccountResource',
                m = 'UsersResource',
                P = 'LandingResource',
                p = 'LandingBlocksResource',
                k = 'Landing3Resource',
                y = 'AlbumResource',
                R = 'SlidesResource',
                C = 'MusicExternalApiPrefixUrl',
                T = 'MusicResourceFactory',
                g = 'PublicConfig',
                S = 'ServerConfig',
                f = 'TokenConfig',
                h = 'Storage',
                D = 'CookieStorage',
                v = 'LocalStorage',
                A = 'LibraryResource',
                E = 'LumenResource',
                L = 'TracksResource',
                I = 'SessionStorage',
                w = 'TopResource',
                M = 'ArtistsResource',
                O = 'Authorization',
                F = 'RedAlertResource',
                V = 'RotorResource',
                _ = 'WaveResource',
                U = 'SearchResource',
                B = 'SearchPlaylistResource',
                Y = 'PlaylistResource',
                z = 'PlaylistsResource',
                K = 'PinResource',
                Q = 'MetatagsResource',
                H = 'TagResource',
                q = 'FeedResource',
                G = 'Wizard3Resource',
                X = 'CONTAINER_USER_ID_TOKEN',
                j = 'PinsResource',
                $ = 'MusicHistoryResource',
                Z = 'ChartResource',
                J = 'ClipsResource',
                ee = 'DynamicPagesResource',
                et = 'CONTAINER_I18N_STORAGE',
                eo = 'LyricViewsResource',
                ei = 'NonMusicResource',
                en = 'DonationResource',
                er = 'LoaderResource',
                ea = 'PrefixlessResource',
                es = 'StreamsResource',
                ec = 'FiltersResource',
                el = 'UgcResource',
                eb = 'CollectionResource',
                eN = 'AdsResource',
                eu = 'PersonalResource',
                eW = 'AvailabilityResource',
                ex = 'GetFileInfoResource',
                ed = 'ResourcesFileInfoResource',
                em = 'DisclaimersResource',
                eP = 'DisclaimerDictionary',
                ep = 'FamilyResource',
                ek = 'ChildrenLandingResource',
                ey = 'TelemetryResource',
                eR = 'Env',
                eC = 'PromoResource',
                eT = 'RumResource',
                eg = 'AcqOffers',
                eS = 'Ynison',
                ef = 'YnisonNewConnector',
                eh = 'LabelsResource',
                eD = 'RequestExecutionContext',
                ev = 'ConcertsResource',
                eA = 'YaMetrikaController',
                eE = 'RumTransport',
                eL = 'YaMetrikaTransport',
                eI = 'WordsResource',
                ew = 'WheelResource',
                eM = 'MocksInitializer',
                eO = 'NetworkMonitorFactory',
                eF = 'SkeletonSdk';
        },
        42304: (e) => {
            e.exports = { root: 'MuzmarketPage_root__D49hC' };
        },
        44806: (e, t, o) => {
            'use strict';
            o.d(t, { z: () => i });
            var i = (function (e) {
                return (
                    (e.WebEditorsFeatures = 'WebEditorsFeatures'),
                    (e.WebNextAuthPerf = 'WebNextAuthPerf'),
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
                    // for PulseSync: BEGIN yellow play button experiment ID for mod settings
                    (e.WebNextPlayerBarYellowButton = 'WebNextPlayerBarYellowButton'),
                    // for PulseSync: END yellow play button experiment ID for mod settings
                    (e.WebNextNewWaveTab = 'WebNextNewWaveTab'),
                    (e.WebNextMainPlayerAnimation = 'WebNextMainPlayerAnimation'),
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
                    (e.WebNextWizard3 = 'WebNextWizard3'),
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
                    (e.WebNextArtistRecommendationsAutoScroll = 'WebNextArtistRecommendationsAutoScroll'),
                    (e.WebNextOtelTechMetrics = 'WebNextOtelTechMetrics'),
                    (e.WebNextMainPlayerTitle = 'WebNextMainPlayerTitle'),
                    (e.WebNextUnstableMusicScreen = 'WebNextUnstableMusicScreen'),
                    e
                );
            })({});
        },
        53712: (e, t, o) => {
            'use strict';
            o.d(t, { Z: () => n });
            var i = o(25895);
            let n = {
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
        62562: (e, t, o) => {
            'use strict';
            o.d(t, { B: () => r, N: () => a });
            var i = o(74631),
                n = o(36432);
            let r = (0, i.createContext)(null);
            function a() {
                let e = (0, i.useContext)(r);
                if (null === e) throw new n.t('Container cannot be null, please add a context provider', { code: 'E_CONTEXT_CONTAINER_NULL' });
                return e;
            }
        },
        93588: (e, t, o) => {
            'use strict';
            o.d(t, { sK: () => k, NN: () => n, $3: () => i, CP: () => b, tE: () => N, Ef: () => u, $5: () => x, IU: () => y, tk: () => d.t, u0: () => p });
            let i = !1,
                n = !0;
            var r = o(58025),
                a = o(36432);
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
                        i = new Map();
                    return (e) => {
                        let n = i.get(e);
                        if (n) return n;
                        if (!Object.hasOwn(t, e)) return Promise.reject(new c(e));
                        let r = t[e]().then(o);
                        return (i.set(e, r), r);
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
                b = (e, t) => ''.concat(e, '/').concat(t || '1.0.0'),
                N = (e, t) => (t ? e.afisha.clientId[t] : e.afisha.clientId.web);
            function u(e, t) {
                return t ? e.player.secretKey[t] : '';
            }
            var W = o(49124);
            let x = () => {
                let e = 'window.location.pathname',
                    t = W.env.APP_VERSION || '',
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
            var d = o(27912),
                m = o(90887),
                P = o(52830);
            let p = (e, t, o) => {
                let { allowCustomPrefixUrl: i, prefixUrl: n } = e.resources.musicExternalApi,
                    r = i && 'string' == typeof o && o.length > 0 ? o : n;
                return (0, m.r)(r, t, P.B);
            };
            var k = (function (e) {
                return ((e.WEB = 'YandexMusicWebNext'), (e.DESKTOP = 'YandexMusicDesktopApp'), e);
            })({});
            let y = async (e) => ({ env: e, publicConfig: await l(e) });
        },
        96618: (e, t, o) => {
            'use strict';
            o.d(t, { D: () => n, W: () => r });
            var i = o(74631);
            let n = (0, i.createContext)({ theme: null, setTheme: () => {} }),
                r = () => (0, i.useContext)(n);
        },
    },
    (e) => {
        (e.O(0, [7371, 6706, 8398, 9004, 8204, 4163, 4475, 5056, 7358], () => e((e.s = 34410))), (_N_E = e.O()));
    },
]);
