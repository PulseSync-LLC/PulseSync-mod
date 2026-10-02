(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5112],
    {
        14893: (e, t, i) => {
            'use strict';
            i.d(t, { CollectionLayout: () => d });
            var l = i(88204),
                s = i(84059),
                o = i(74631),
                a = i(78143),
                n = i(53712),
                r = i(27954);
            let c = [
                n.Z.collectionNonMusic.href,
                n.Z.collectionNonMusicLiked.href,
                n.Z.collectionVibeRooms.href,
                n.Z.collectionShelf.href,
                n.Z.collectionShelfLiked.href,
                n.Z.collectionShelfRecentlyPlayed.href,
            ];
            var b = i(44806);
            let d = (0, l.PA)((e) => {
                let { children: t } = e,
                    { experiments: i } = (0, r.g)();
                return (
                    (() => {
                        let e = (0, s.usePathname)(),
                            t = (0, a.n)(),
                            { paywall: i } = (0, r.g)(),
                            l = (0, o.useMemo)(() => c.includes(e), [e]),
                            n = t && !l;
                        (0, o.useEffect)(
                            () => (
                                n && i.openFreemiumCollectionPaywall(),
                                () => {
                                    i.clearFreemiumCollectionBarrier();
                                }
                            ),
                            [n, i],
                        );
                    })(),
                    i.checkExperiment(b.z.WebNextDisableCollection, 'on') && (0, s.redirect)(n.Z.main.href),
                    t
                );
            });
        },
        19224: (e, t, i) => {
            Promise.resolve().then(i.bind(i, 14893));
        },
        25895: (e, t, i) => {
            'use strict';
            (i.d(t, { u: () => c }), i(93588));
            var l = i(89288),
                s = i(74310),
                o = i(38097);
            let a = (e) => {
                    var t;
                    if (!e) return e;
                    let i = (null != (t = e.split('?')[0]) ? t : '').split('/').filter(Boolean);
                    for (let e of Object.keys(s.j)) {
                        let t = e.split('/').filter(Boolean);
                        if (i.length !== t.length) continue;
                        let l = !0;
                        for (let e = 0; e < t.length; e++) {
                            let s = t[e],
                                o = i[e];
                            if (s && !s.startsWith(':') && s !== o) {
                                l = !1;
                                break;
                            }
                        }
                        if (l) return e;
                    }
                    return e;
                },
                n = (e) => {
                    let t = [],
                        i = e.split('/').filter(Boolean),
                        l = [];
                    for (let e of i) e.startsWith(':') ? t.push(e.substring(1)) : l.push(e);
                    let s = '/'.concat(l.join('/'));
                    if (0 === t.length) return e;
                    let o = t.map((e) => ''.concat(e, '=:').concat(e)).join('&');
                    return ''.concat(s, '?').concat(o);
                },
                r = (e) =>
                    e
                        .split('/')
                        .filter(Boolean)
                        .filter((e) => e.startsWith(':'))
                        .map((e) => e.substring(1)),
                c = function (e) {
                    for (var t, i = arguments.length, c = Array(i > 1 ? i - 1 : 0), b = 1; b < i; b++) c[b - 1] = arguments[b];
                    let [d] = c,
                        u = e.includes(':'),
                        W = e.includes('?'),
                        N = 'string' == typeof e ? e : String(e);
                    if (
                        (N.includes(o.nl) && (d = { ...d, options: { ...(null == d ? void 0 : d.options), isExternalLink: !0 } }),
                        W &&
                            ((e) => {
                                let [t, i] = e.split('?'),
                                    l = new URLSearchParams(i);
                                return Object.keys(s.j).some((e) => {
                                    let i = r(e);
                                    return 0 !== i.length && n(e).split('?')[0] === t && i.every((e) => l.has(e));
                                });
                            })(N))
                    )
                        return (0, l.no)(N, d);
                    if (W && !u) {
                        let e = a(N),
                            i = r(e);
                        if (i.length > 0) {
                            let s = ((e, t) => {
                                    var i;
                                    let l = (null != (i = e.split('?')[0]) ? i : '').split('/').filter(Boolean);
                                    return t
                                        .split('/')
                                        .filter(Boolean)
                                        .reduce((e, t, i) => {
                                            let s = l[i];
                                            return (t.startsWith(':') && s && (e[t.substring(1)] = s), e);
                                        }, {});
                                })(N, e),
                                o = {
                                    ...((e, t) => {
                                        let i = e.split('?')[1];
                                        if (!i) return {};
                                        let l = new Set(t),
                                            s = {};
                                        return (
                                            new URLSearchParams(i).forEach((e, t) => {
                                                l.has(t) || (s[t] = e);
                                            }),
                                            s
                                        );
                                    })(N, i),
                                    ...(null != (t = null == d ? void 0 : d.query) ? t : {}),
                                },
                                a = n(e);
                            return (0, l.no)(a, { ...d, params: s, query: o });
                        }
                    }
                    if (u || W) {
                        let e = n(N);
                        return (0, l.no)(e, d);
                    }
                    let x = a(N),
                        m = (function (e, t) {
                            let [i, l] = e.split('?'),
                                s = null == i ? void 0 : i.split('/').filter(Boolean),
                                o = {},
                                a = t.split('/').filter(Boolean);
                            if ((null == s ? void 0 : s.length) !== a.length || (a[0] && !e.startsWith('/'.concat(a[0])))) return o;
                            for (let e = 0; e < a.length; e++) {
                                let t = a[e],
                                    i = s && s[e];
                                (null == t ? void 0 : t.startsWith(':')) && i && (o[t.substring(1)] = i);
                            }
                            return (
                                l &&
                                    l.split('&').map((e) => {
                                        let [t, i] = e.split('=');
                                        t && void 0 !== i && (o[t] = i);
                                    }),
                                o
                            );
                        })(N, x),
                        p = n(x);
                    return (0, l.no)(p, { ...d, params: m });
                };
        },
        27912: (e, t, i) => {
            'use strict';
            i.d(t, { t: () => l });
            let l = {
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
        27954: (e, t, i) => {
            'use strict';
            i.d(t, { P: () => o, g: () => a });
            var l = i(74631),
                s = i(36432);
            let o = (0, l.createContext)(null);
            function a() {
                let e = (0, l.useContext)(o);
                if (null === e) throw new s.t('Store cannot be null, please add a context provider', { code: 'E_CONTEXT_STORE_NULL' });
                return e;
            }
        },
        38097: (e, t, i) => {
            'use strict';
            i.d(t, { k7: () => l, nl: () => s });
            let l = 1e3,
                s = 'https://';
        },
        44806: (e, t, i) => {
            'use strict';
            i.d(t, { z: () => l });
            var l = (function (e) {
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
        53712: (e, t, i) => {
            'use strict';
            i.d(t, { Z: () => s });
            var l = i(25895);
            let s = {
                main: (0, l.u)('/'),
                chart: (0, l.u)('/chart'),
                chartPodcasts: (0, l.u)('/chart/podcasts'),
                collection: (0, l.u)('/collection'),
                collectionAlbums: (0, l.u)('/collection/albums'),
                collectionArtists: (0, l.u)('/collection/artists'),
                collectionClips: (0, l.u)('/collection/clips'),
                collectionDislikes: (0, l.u)('/collection/dislikes'),
                collectionKids: (0, l.u)('/collection/kids'),
                collectionKidsAlbums: (0, l.u)('/collection/kids/albums'),
                collectionKidsPlaylists: (0, l.u)('/collection/kids/playlists'),
                collectionKidsTracks: (0, l.u)('/collection/kids/tracks'),
                collectionNonMusic: (0, l.u)('/collection/non-music'),
                collectionNonMusicLiked: (0, l.u)('/collection/non-music/liked'),
                collectionVibeRooms: (0, l.u)('/collection/multivibes'),
                collectionPlaylists: (0, l.u)('/collection/playlists'),
                collectionPlaylistsCreated: (0, l.u)('/collection/playlists/created'),
                collectionPlaylistsLiked: (0, l.u)('/collection/playlists/liked'),
                collectionShelf: (0, l.u)('/collection/shelf'),
                collectionShelfLiked: (0, l.u)('/collection/shelf/liked'),
                collectionShelfNewEpisodes: (0, l.u)('/collection/shelf/new-episodes'),
                collectionShelfRecentlyPlayed: (0, l.u)('/collection/shelf/recently-played'),
                concerts: (0, l.u)('/concerts'),
                kids: (0, l.u)('/kids'),
                mixes: (0, l.u)('/mixes'),
                musicHistory: (0, l.u)('/music-history'),
                muzmarket: (0, l.u)('/muzmarket'),
                mymusic: (0, l.u)('/mymusic'),
                mymusicDownloadsTracks: (0, l.u)('/mymusic/downloads/tracks'),
                multivibe: (0, l.u)('/multivibe'),
                nonMusic: (0, l.u)('/non-music'),
                pay: (0, l.u)('/pay'),
                userSlides: (0, l.u)('/slides/user'),
                search: (0, l.u)('/search'),
                searchHistory: (0, l.u)('/search/history'),
                settings: (0, l.u)('/settings'),
                video: (0, l.u)('/video'),
            };
        },
        74310: (e, t, i) => {
            'use strict';
            i.d(t, { b: () => l, j: () => s });
            let l = {
                    exactPaths: [
                        '/',
                        '/404',
                        '/album/[albumId]',
                        '/album/[albumId]/track/[trackId]',
                        '/artist/[artistId]',
                        '/artist/[artistId]/albums',
                        '/artist/[artistId]/compilations',
                        '/artist/[artistId]/concerts',
                        '/artist/[artistId]/discography',
                        '/artist/[artistId]/familiar',
                        '/artist/[artistId]/similar',
                        '/artist/[artistId]/tracks',
                        '/artist/[artistId]/videos',
                        '/chart',
                        '/chart/podcasts',
                        '/chart/podcasts/category/[categoryId]',
                        '/collection',
                        '/collection/albums',
                        '/collection/artists',
                        '/collection/clips',
                        '/collection/dislikes',
                        '/collection/kids',
                        '/collection/kids/albums',
                        '/collection/kids/playlists',
                        '/collection/kids/tracks',
                        '/collection/multivibes',
                        '/collection/non-music',
                        '/collection/non-music/liked',
                        '/collection/playlists',
                        '/collection/playlists/created',
                        '/collection/playlists/liked',
                        '/collection/shelf',
                        '/collection/shelf/liked',
                        '/collection/shelf/new-episodes',
                        '/collection/shelf/recently-played',
                        '/concert/[concertId]',
                        '/concerts',
                        '/concerts/details/[type]/[id]',
                        '/entities/[blockType]/[blockId]',
                        '/genre/[metatagId]',
                        '/genre/[metatagId]/albums',
                        '/genre/[metatagId]/artists',
                        '/genre/[metatagId]/playlists',
                        '/kids',
                        '/kids/category/[categoryId]',
                        '/kids/editorial/album/[id]',
                        '/kids/editorial/playlist/[id]',
                        '/label/[labelId]',
                        '/label/[labelId]/albums',
                        '/label/[labelId]/artists',
                        '/landing-promo-preview',
                        '/landing/[skeleton]',
                        '/login-status',
                        '/mixes',
                        '/mixes/[navigationId]',
                        '/multivibe',
                        '/multivibe/[roomId]',
                        '/music-history',
                        '/muzmarket',
                        '/mymusic/favorite_tracks',
                        '/non-music',
                        '/non-music/category/[id]',
                        '/non-music/category/[id]/albums',
                        '/non-music/editorial/album/[id]',
                        '/non-music/editorial/playlist/[categoryId]',
                        '/oauth',
                        '/pay',
                        '/playlist/[playlistId]',
                        '/playlists/[playlistUuid]',
                        '/plus',
                        '/post/[promoId]',
                        '/promolanding/album/[albumId]',
                        '/search',
                        '/search/history',
                        '/seo/album/[albumId]/track/[trackId]',
                        '/seo/track/[trackId]',
                        '/settings',
                        '/slides/artist/[artistId]',
                        '/slides/kids',
                        '/slides/podcast/[podcastId]',
                        '/slides/special/[campaignId]',
                        '/slides/user',
                        '/tag/[tagId]',
                        '/track/[trackId]',
                        '/users',
                        '/users/[userId]/playlists/[kind]',
                        '/video',
                    ],
                    regexPatterns: [
                        '^/$',
                        '^/404$',
                        '^/album/([^/]+)$',
                        '^/album/([^/]+)/track/([^/]+)$',
                        '^/artist/([^/]+)$',
                        '^/artist/([^/]+)/albums$',
                        '^/artist/([^/]+)/compilations$',
                        '^/artist/([^/]+)/concerts$',
                        '^/artist/([^/]+)/discography$',
                        '^/artist/([^/]+)/familiar$',
                        '^/artist/([^/]+)/similar$',
                        '^/artist/([^/]+)/tracks$',
                        '^/artist/([^/]+)/videos$',
                        '^/chart$',
                        '^/chart/podcasts$',
                        '^/chart/podcasts/category/([^/]+)$',
                        '^/collection$',
                        '^/collection/albums$',
                        '^/collection/artists$',
                        '^/collection/clips$',
                        '^/collection/dislikes$',
                        '^/collection/kids$',
                        '^/collection/kids/albums$',
                        '^/collection/kids/playlists$',
                        '^/collection/kids/tracks$',
                        '^/collection/multivibes$',
                        '^/collection/non-music$',
                        '^/collection/non-music/liked$',
                        '^/collection/playlists$',
                        '^/collection/playlists/created$',
                        '^/collection/playlists/liked$',
                        '^/collection/shelf$',
                        '^/collection/shelf/liked$',
                        '^/collection/shelf/new-episodes$',
                        '^/collection/shelf/recently-played$',
                        '^/concert/([^/]+)$',
                        '^/concerts$',
                        '^/concerts/details/([^/]+)/([^/]+)$',
                        '^/entities/([^/]+)/([^/]+)$',
                        '^/genre/([^/]+)$',
                        '^/genre/([^/]+)/albums$',
                        '^/genre/([^/]+)/artists$',
                        '^/genre/([^/]+)/playlists$',
                        '^/kids$',
                        '^/kids/category/([^/]+)$',
                        '^/kids/editorial/album/([^/]+)$',
                        '^/kids/editorial/playlist/([^/]+)$',
                        '^/label/([^/]+)$',
                        '^/label/([^/]+)/albums$',
                        '^/label/([^/]+)/artists$',
                        '^/landing-promo-preview$',
                        '^/landing/([^/]+)$',
                        '^/login-status$',
                        '^/mixes$',
                        '^/mixes/([^/]+)$',
                        '^/multivibe$',
                        '^/multivibe/([^/]+)$',
                        '^/music-history$',
                        '^/muzmarket$',
                        '^/mymusic/favorite_tracks$',
                        '^/non-music$',
                        '^/non-music/category/([^/]+)$',
                        '^/non-music/category/([^/]+)/albums$',
                        '^/non-music/editorial/album/([^/]+)$',
                        '^/non-music/editorial/playlist/([^/]+)$',
                        '^/oauth$',
                        '^/pay$',
                        '^/playlist/([^/]+)$',
                        '^/playlists/([^/]+)$',
                        '^/plus$',
                        '^/post/([^/]+)$',
                        '^/promolanding/album/([^/]+)$',
                        '^/search$',
                        '^/search/history$',
                        '^/seo/album/([^/]+)/track/([^/]+)$',
                        '^/seo/track/([^/]+)$',
                        '^/settings$',
                        '^/slides/artist/([^/]+)$',
                        '^/slides/kids$',
                        '^/slides/podcast/([^/]+)$',
                        '^/slides/special/([^/]+)$',
                        '^/slides/user$',
                        '^/tag/([^/]+)$',
                        '^/track/([^/]+)$',
                        '^/users$',
                        '^/users/([^/]+)/playlists/([^/]+)$',
                        '^/video$',
                    ],
                },
                s = {
                    '/': '',
                    '/404': '',
                    '/album/:albumId': '',
                    '/album/:albumId/track/:trackId': '',
                    '/artist/:artistId': '',
                    '/artist/:artistId/albums': '',
                    '/artist/:artistId/compilations': '',
                    '/artist/:artistId/concerts': '',
                    '/artist/:artistId/discography': '',
                    '/artist/:artistId/familiar': '',
                    '/artist/:artistId/similar': '',
                    '/artist/:artistId/tracks': '',
                    '/artist/:artistId/videos': '',
                    '/chart': '',
                    '/chart/podcasts': '',
                    '/chart/podcasts/category/:categoryId': '',
                    '/collection': '',
                    '/collection/albums': '',
                    '/collection/artists': '',
                    '/collection/clips': '',
                    '/collection/dislikes': '',
                    '/collection/kids': '',
                    '/collection/kids/albums': '',
                    '/collection/kids/playlists': '',
                    '/collection/kids/tracks': '',
                    '/collection/multivibes': '',
                    '/collection/non-music': '',
                    '/collection/non-music/liked': '',
                    '/collection/playlists': '',
                    '/collection/playlists/created': '',
                    '/collection/playlists/liked': '',
                    '/collection/shelf': '',
                    '/collection/shelf/liked': '',
                    '/collection/shelf/new-episodes': '',
                    '/collection/shelf/recently-played': '',
                    '/concert/:concertId': '',
                    '/concerts': '',
                    '/concerts/details/:type/:id': '',
                    '/entities/:blockType/:blockId': '',
                    '/genre/:metatagId': '',
                    '/genre/:metatagId/albums': '',
                    '/genre/:metatagId/artists': '',
                    '/genre/:metatagId/playlists': '',
                    '/kids': '',
                    '/kids/category/:categoryId': '',
                    '/kids/editorial/album/:id': '',
                    '/kids/editorial/playlist/:id': '',
                    '/label/:labelId': '',
                    '/label/:labelId/albums': '',
                    '/label/:labelId/artists': '',
                    '/landing-promo-preview': '',
                    '/landing/:skeleton': '',
                    '/login-status': '',
                    '/mixes': '',
                    '/mixes/:navigationId': '',
                    '/multivibe': '',
                    '/multivibe/:roomId': '',
                    '/music-history': '',
                    '/muzmarket': '',
                    '/mymusic/favorite_tracks': '',
                    '/non-music': '',
                    '/non-music/category/:id': '',
                    '/non-music/category/:id/albums': '',
                    '/non-music/editorial/album/:id': '',
                    '/non-music/editorial/playlist/:categoryId': '',
                    '/oauth': '',
                    '/pay': '',
                    '/playlist/:playlistId': '',
                    '/playlists/:playlistUuid': '',
                    '/plus': '',
                    '/post/:promoId': '',
                    '/promolanding/album/:albumId': '',
                    '/search': '',
                    '/search/history': '',
                    '/seo/album/:albumId/track/:trackId': '',
                    '/seo/track/:trackId': '',
                    '/settings': '',
                    '/slides/artist/:artistId': '',
                    '/slides/kids': '',
                    '/slides/podcast/:podcastId': '',
                    '/slides/special/:campaignId': '',
                    '/slides/user': '',
                    '/tag/:tagId': '',
                    '/track/:trackId': '',
                    '/users': '',
                    '/users/:userId/playlists/:kind': '',
                    '/video': '',
                };
        },
        78143: (e, t, i) => {
            'use strict';
            i.d(t, { n: () => o });
            var l = i(27954),
                s = i(44806);
            let o = () => {
                var e, t, i;
                let { user: o, experiments: a, settings: n } = (0, l.g)();
                return (
                    !a.checkExperiment(s.z.WebNextDisableCollection, 'on') &&
                    !(null == (e = n.browserInfo) ? void 0 : e.isTouch) &&
                    o.isAuthorized &&
                    !o.hasPlus &&
                    (null == (i = a.getExperiment(s.z.WebNextDesktopWebFreemium)) || null == (t = i.value) ? void 0 : t.closeCollection) === 'on'
                );
            };
        },
        93588: (e, t, i) => {
            'use strict';
            i.d(t, { sK: () => g, NN: () => s, R8: () => o, $3: () => l, CP: () => d, tE: () => u, Ef: () => W, $5: () => x, IU: () => h, tk: () => m.t, u0: () => y });
            let l = !1,
                s = !0,
                o = !1;
            var a = i(58025),
                n = i(36432);
            class r extends n.t {
                constructor(e = 'Internal error', { code: t = 'E_CONFIG', ...i } = {}) {
                    (super(e, { code: t, ...i }), (0, a._)(this, 'name', 'ConfigException'), Object.setPrototypeOf(this, r.prototype));
                }
            }
            class c extends r {
                constructor(e) {
                    (super('The configuration file for environment "'.concat(e, '" does not exist.'), { code: 'E_CONFIG_FILE_NOT_FOUND' }),
                        (0, a._)(this, 'name', 'NotFoundConfigException'),
                        Object.setPrototypeOf(this, c.prototype));
                }
            }
            let b = (function (e) {
                    let { manifest: t, getConfig: i } = e,
                        l = new Map();
                    return (e) => {
                        let s = l.get(e);
                        if (s) return s;
                        if (!Object.hasOwn(t, e)) return Promise.reject(new c(e));
                        let o = t[e]().then(i);
                        return (l.set(e, o), o);
                    };
                })({
                    manifest: {
                        development: () => Promise.all([i.e(546), i.e(260), i.e(2917), i.e(4903), i.e(1198), i.e(6214)]).then(i.bind(i, 66214)),
                        qa: () => Promise.all([i.e(546), i.e(260), i.e(2917), i.e(4903), i.e(1198), i.e(7216)]).then(i.bind(i, 7216)),
                        stress: () => Promise.all([i.e(546), i.e(260), i.e(2917), i.e(4903), i.e(1198), i.e(2967)]).then(i.bind(i, 5348)),
                        production: () => Promise.all([i.e(546), i.e(260), i.e(2917), i.e(4903), i.e(1198), i.e(4069)]).then(i.bind(i, 74069)),
                    },
                    getConfig: (e) => {
                        let { config: t } = e;
                        return t;
                    },
                }),
                d = (e, t) => ''.concat(e, '/').concat(t || '1.0.0'),
                u = (e, t) => (t ? e.afisha.clientId[t] : e.afisha.clientId.web);
            function W(e, t) {
                return t ? e.player.secretKey[t] : '';
            }
            var N = i(49124);
            let x = () => {
                let e = 'window.location.pathname',
                    t = N.env.APP_VERSION || '',
                    i = 'production';
                return {
                    rumSettings: {
                        rumId: 'ru.music.frontend.desktop',
                        project: 'music.frontend.desktop',
                        service: 'frontend-desktop',
                        platform: 'desktop',
                        page: e,
                        heroElement: 'body',
                        version: t,
                        environment: i,
                    },
                    errorBooster: {
                        project: 'music.frontend.desktop',
                        platform: 'desktop',
                        page: e,
                        version: t,
                        environment: i,
                        unhandledRejection: !0,
                        uncaughtException: !0,
                        resourceFails: !0,
                    },
                };
            };
            var m = i(27912),
                p = i(90887),
                k = i(52830);
            let y = (e, t, i) => {
                let { allowCustomPrefixUrl: l, prefixUrl: s } = e.resources.musicExternalApi,
                    o = l && 'string' == typeof i && i.length > 0 ? i : s;
                return (0, p.r)(o, t, k.B);
            };
            var g = (function (e) {
                return ((e.WEB = 'YandexMusicWebNext'), (e.DESKTOP = 'YandexMusicDesktopApp'), e);
            })({});
            let h = async (e) => ({ env: e, publicConfig: await b(e) });
        },
    },
    (e) => {
        (e.O(0, [6706, 9212, 489, 4475, 5056, 7358], () => e((e.s = 19224))), (_N_E = e.O()));
    },
]);
