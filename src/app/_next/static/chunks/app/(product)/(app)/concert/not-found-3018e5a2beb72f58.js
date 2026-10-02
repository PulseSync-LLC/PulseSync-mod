(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7290],
    {
        8487: (e, t, n) => {
            'use strict';
            n.d(t, { A: () => s });
            var a = n(23198),
                i = n(74631),
                r = n(30236),
                o = n(39004);
            function l(e) {
                var t = (0, o.A)(),
                    n = t.formatMessage,
                    a = t.textComponent,
                    r = void 0 === a ? i.Fragment : a,
                    l = e.id,
                    c = e.description,
                    s = e.defaultMessage,
                    b = e.values,
                    N = e.children,
                    u = e.tagName,
                    d = void 0 === u ? r : u,
                    p = n({ id: l, description: c, defaultMessage: s }, b, { ignoreTag: e.ignoreTag });
                return 'function' == typeof N ? N(Array.isArray(p) ? p : [p]) : d ? i.createElement(d, null, p) : i.createElement(i.Fragment, null, p);
            }
            l.displayName = 'FormattedMessage';
            var c = i.memo(l, function (e, t) {
                var n = e.values,
                    i = (0, a.__rest)(e, ['values']),
                    o = t.values,
                    l = (0, a.__rest)(t, ['values']);
                return (0, r.bN)(o, n) && (0, r.bN)(i, l);
            });
            c.displayName = 'MemoizedFormattedMessage';
            let s = c;
        },
        10322: (e, t, n) => {
            'use strict';
            n.d(t, { n: () => o });
            var a = n(25839),
                i = n(74631),
                r = n(82064);
            let o = (e) => {
                let { pageId: t, pageEntityId: n, displayReasonId: o, pageStyle: l, pagePlacement: c, children: s } = e,
                    b = (0, i.useMemo)(() => ({ pageId: t, pageEntityId: n, displayReasonId: o, pageStyle: l, pagePlacement: c }), [t, n, o, l, c]);
                return (0, a.jsx)(r.r.Provider, { value: b, children: s });
            };
        },
        15270: (e, t, n) => {
            'use strict';
            n.d(t, { L: () => S });
            var a = n(25839),
                i = n(82298),
                r = n(88204),
                o = n(74631),
                l = n(39004),
                c = n(61493),
                s = n(71035),
                b = n(4071),
                N = n(66738),
                u = n(20583),
                d = n(65610),
                p = n.n(d);
            let S = (0, r.PA)((e) => {
                let {
                        withBackwardControl: t = !0,
                        withForwardControl: n = !0,
                        shouldFocusOnMount: r = !0,
                        className: d,
                        withBackwardFallback: S,
                        buttonSize: _ = 'xxs',
                    } = e,
                    { formatMessage: x } = (0, l.A)(),
                    { canBack: W, canForward: A, moveBack: m, moveForward: T } = (0, u.J)(S),
                    v = (0, o.useRef)(null),
                    I = (0, s.c)((e) => {
                        (e.stopPropagation(), m());
                    }),
                    g = (0, s.c)((e) => {
                        (e.stopPropagation(), T());
                    });
                return (
                    (0, o.useEffect)(() => {
                        r && v.current && W && v.current.focus();
                    }, [W]),
                    (0, a.jsxs)('div', {
                        className: (0, i.$)(p().root, d),
                        'data-test-id': c.Kq.navigation.NAVIGATION_CONTROLS,
                        children: [
                            t &&
                                (0, a.jsx)(b.$, {
                                    ref: v,
                                    'aria-label': x({ id: 'navigation.go-back' }),
                                    radius: 'round',
                                    disabled: !W,
                                    size: _,
                                    icon: (0, a.jsx)(N.I, { size: 'xxs', variant: 'arrowLeft' }),
                                    onClick: I,
                                    'data-test-id': c.Kq.navigation.NAVIGATION_BACKWARD_BUTTON,
                                }),
                            n &&
                                (0, a.jsx)(b.$, {
                                    'aria-label': x({ id: 'navigation.go-forward' }),
                                    radius: 'round',
                                    disabled: !A,
                                    size: _,
                                    icon: (0, a.jsx)(N.I, { size: 'xxs', variant: 'arrowRight' }),
                                    onClick: g,
                                    'data-test-id': c.Kq.navigation.NAVIGATION_FORWARD_BUTTON,
                                }),
                        ],
                    })
                );
            });
        },
        20258: (e, t, n) => {
            'use strict';
            n.d(t, { _Q: () => a, fD: () => r, qG: () => o, xK: () => i });
            var a = (function (e) {
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
                    (e.LUMEN_AWAKENING_SCREEN = 'lumen_awakening_screen'),
                    (e.MULTIVIBE_SENDING_INVITATION_SCREEN = 'multivibe_sending_invitation_screen'),
                    (e.MULTIVIBE_ACTION_SCREEN = 'multivibe_action_screen'),
                    (e.MULTIVIBE_LIMIT_SCREEN = 'multivibe_limit_screen'),
                    (e.MULTIVIBE_UNIFIED_SCREEN = 'multivibe_unified_screen'),
                    e
                );
            })({});
            let i = [
                    'home',
                    'own_collection',
                    'landing',
                    'own_artists',
                    'artist',
                    'artist_concerts_screen',
                    'non_music',
                    'playlist',
                    'search',
                    'video_player',
                    'label',
                    'concerts',
                    'concert_screen',
                    'concert_location_selector',
                    'album',
                    'playlist',
                    'slides_screen',
                    'promolanding_album',
                    'wave_landing_screen',
                    'fact_screen',
                    'lumen_awakening_screen',
                    'multivibe_screen',
                    'multivibe_sending_invitation_screen',
                    'multivibe_action_screen',
                    'multivibe_unified_screen',
                ],
                r = [
                    'home',
                    'landing',
                    'non_music',
                    'own_collection',
                    'own_artists',
                    'search',
                    'artist',
                    'concerts',
                    'concert_screen',
                    'concert_location_selector',
                    'album',
                    'playlist',
                    'slides_screen',
                    'promolanding_album',
                    'wave_landing_screen',
                    'fact_screen',
                    'lumen_awakening_screen',
                    'multivibe_screen',
                    'multivibe_sending_invitation_screen',
                    'multivibe_action_screen',
                    'multivibe_limit_screen',
                    'multivibe_unified_screen',
                ],
                o = ['home', 'landing', 'non_music', 'own_collection', 'search', 'artist', 'concerts', 'concert_screen', 'album', 'playlist'];
        },
        20583: (e, t, n) => {
            'use strict';
            n.d(t, { J: () => o });
            var a = n(10508),
                i = n(74631),
                r = n(21784);
            let o = (e) => {
                let t = (0, r.W)(),
                    n = (0, i.useMemo)(
                        () =>
                            (0, a.A)(() => {
                                if (e && !t.canBack) return void t.replaceState({ href: e });
                                null == t || t.back();
                            }, 200),
                        [t, e],
                    ),
                    o = (0, i.useMemo)(
                        () =>
                            (0, a.A)(() => {
                                null == t || t.forward();
                            }, 200),
                        [t],
                    );
                return { canBack: !!e || t.canBack, canForward: t.canForward, moveBack: n, moveForward: o };
            };
        },
        20790: (e, t, n) => {
            'use strict';
            n.d(t, { z: () => r });
            var a = n(74631),
                i = n(73810);
            let r = () => (0, a.useContext)(i.P);
        },
        21784: (e, t, n) => {
            'use strict';
            n.d(t, { Q: () => i, W: () => r });
            var a = n(74631);
            let i = (0, a.createContext)({
                pushState: () => {},
                replaceState: () => {},
                forward: () => {},
                back: () => {},
                canForward: !1,
                canBack: !1,
                state: null,
                length: 0,
            });
            function r() {
                return (0, a.useContext)(i);
            }
        },
        22293: (e, t, n) => {
            'use strict';
            n.d(t, { A: () => u });
            var a = n(74631),
                i = n(67379),
                r = n(36619),
                o = n(76945),
                l = n(59450),
                c = n(71035),
                s = n(84e3),
                b = n(79670),
                N = n(97952);
            let u = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    { autoSend: t = !0 } = e,
                    n = (0, l.st)(),
                    u = (0, s.U)(),
                    { hash: d } = (0, l.gf)(),
                    { pageId: p } = (0, N.$)(),
                    S = (0, c.c)(function () {
                        let { deepLink: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        if (
                            !n ||
                            !p ||
                            !d ||
                            !(() => {
                                for (let [e, t] of new URLSearchParams(window.location.search))
                                    if ((e.startsWith('utm_') || 'ref_id' === e) && '' !== t.trim()) return !0;
                                return !1;
                            })()
                        )
                            return;
                        let t = b.W[p];
                        if (!t) return;
                        let a = {
                                hash: d,
                                pageId: r.AppScreen.Link,
                                entityType: r.EntityTypes.Deeplink,
                                entityId: r.EntityTypes.Deeplink,
                                from: r.AppScreen.Link,
                                to: t,
                                deepLink: null != e ? e : window.location.href,
                            },
                            l = (0, i.F)({ params: a, logger: u, context: 'useSendDeeplinkNavigationEvent' });
                        l && (0, o.ID)(n.evgenInstance, l);
                    });
                return (
                    (0, a.useEffect)(() => {
                        t && S();
                    }, [t, S]),
                    (0, c.c)(function () {
                        let { deepLink: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        t || S({ deepLink: e });
                    })
                );
            };
        },
        24053: (e) => {
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
        26895: (e, t) => {
            'use strict';
            var n;
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.MiniappConfig = void 0),
                (t.makeMetaParams = function (e) {
                    return { event: { version: e } };
                }),
                (t.createEvgenAnalytics = function (e, t, n) {
                    return {
                        trackEvent: (a, i) => {
                            let r = { ...i, ...t.getGlobalParams(), ...n.getPlatformParams() };
                            e.trackEvent(a, r);
                        },
                    };
                }),
                !(function (e) {
                    ((e.Music = 'music'), (e.NotApplicable = 'not_applicable'));
                })(n || (t.MiniappConfig = n = {})));
        },
        35415: (e, t, n) => {
            Promise.resolve().then(n.bind(n, 48558));
        },
        44806: (e, t, n) => {
            'use strict';
            n.d(t, { z: () => a });
            var a = (function (e) {
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
        48558: (e, t, n) => {
            'use strict';
            (n.r(t), n.d(t, { default: () => x }));
            var a = n(25839),
                i = n(88204),
                r = n(74631),
                o = n(39004),
                l = n(96634),
                c = n(20258),
                s = n(22293),
                b = n(10322),
                N = n(27954),
                u = n(44806),
                d = n(74273),
                p = n.n(d);
            let S = (0, i.PA)(() => {
                    let { experiments: e, concert: t } = (0, N.g)(),
                        { formatMessage: n } = (0, o.A)(),
                        i = e.checkExperiment(u.z.WebNextConcertPage, 'on');
                    if (
                        ((0, s.A)(),
                        (0, r.useEffect)(
                            () => () => {
                                t.reset();
                            },
                            [t],
                        ),
                        !i)
                    )
                        return (0, a.jsx)(l.NotFound, {});
                    let c = n({ id: 'page-error.concert-page-does-not-exist' }),
                        b = n({ id: 'page-error.concert-page-does-not-exist-description' });
                    return (0, a.jsx)(l.NotFound, { title: c, description: b, iconVariant: 'attention', iconSize: 'xxl', iconClassName: p().icon });
                }),
                _ = (0, i.PA)(() => (0, a.jsx)(b.n, { pageId: c._Q.PAGE_NOT_FOUND_SCREEN, children: (0, a.jsx)(S, {}) })),
                x = () => (0, a.jsx)(_, {});
        },
        53712: (e, t, n) => {
            'use strict';
            n.d(t, { Z: () => i });
            var a = n(25895);
            let i = {
                main: (0, a.u)('/'),
                chart: (0, a.u)('/chart'),
                chartPodcasts: (0, a.u)('/chart/podcasts'),
                collection: (0, a.u)('/collection'),
                collectionAlbums: (0, a.u)('/collection/albums'),
                collectionArtists: (0, a.u)('/collection/artists'),
                collectionClips: (0, a.u)('/collection/clips'),
                collectionDislikes: (0, a.u)('/collection/dislikes'),
                collectionKids: (0, a.u)('/collection/kids'),
                collectionKidsAlbums: (0, a.u)('/collection/kids/albums'),
                collectionKidsPlaylists: (0, a.u)('/collection/kids/playlists'),
                collectionKidsTracks: (0, a.u)('/collection/kids/tracks'),
                collectionNonMusic: (0, a.u)('/collection/non-music'),
                collectionNonMusicLiked: (0, a.u)('/collection/non-music/liked'),
                collectionVibeRooms: (0, a.u)('/collection/multivibes'),
                collectionPlaylists: (0, a.u)('/collection/playlists'),
                collectionPlaylistsCreated: (0, a.u)('/collection/playlists/created'),
                collectionPlaylistsLiked: (0, a.u)('/collection/playlists/liked'),
                collectionShelf: (0, a.u)('/collection/shelf'),
                collectionShelfLiked: (0, a.u)('/collection/shelf/liked'),
                collectionShelfNewEpisodes: (0, a.u)('/collection/shelf/new-episodes'),
                collectionShelfRecentlyPlayed: (0, a.u)('/collection/shelf/recently-played'),
                concerts: (0, a.u)('/concerts'),
                kids: (0, a.u)('/kids'),
                mixes: (0, a.u)('/mixes'),
                musicHistory: (0, a.u)('/music-history'),
                muzmarket: (0, a.u)('/muzmarket'),
                mymusic: (0, a.u)('/mymusic'),
                mymusicDownloadsTracks: (0, a.u)('/mymusic/downloads/tracks'),
                multivibe: (0, a.u)('/multivibe'),
                nonMusic: (0, a.u)('/non-music'),
                pay: (0, a.u)('/pay'),
                userSlides: (0, a.u)('/slides/user'),
                search: (0, a.u)('/search'),
                searchHistory: (0, a.u)('/search/history'),
                settings: (0, a.u)('/settings'),
                video: (0, a.u)('/video'),
            };
        },
        56120: (e, t, n) => {
            'use strict';
            n.d(t, { N: () => r });
            var a = n(74631),
                i = n(20790);
            let r = (e) => {
                let t = (0, a.useRef)(!1),
                    n = (0, i.z)();
                (0, a.useEffect)(() => {
                    (e && (null == n || n.disable(), (t.current = !0)), !e && t.current && (null == n || n.enable(), (t.current = !1)));
                }, [e, n]);
            };
        },
        59450: (e, t, n) => {
            'use strict';
            n.d(t, { vZ: () => _, st: () => r, gf: () => l });
            var a = n(74631);
            let i = (0, a.createContext)(null);
            function r() {
                return (0, a.useContext)(i);
            }
            let o = (0, a.createContext)({ hash: void 0 });
            function l() {
                return (0, a.useContext)(o);
            }
            var c = n(25839),
                s = n(59342);
            let b = (e) => {
                let { children: t } = e,
                    n = (0, a.useMemo)(() => ({ hash: (0, s.A)() }), []);
                return (0, c.jsx)(o.Provider, { value: n, children: t });
            };
            class N {
                makeParams() {
                    return {};
                }
            }
            class u {
                makeParams() {
                    return {};
                }
            }
            var d = n(58025);
            class p {
                get evgenInstance() {
                    return this.evgen;
                }
                sendEvent(e, t) {
                    this.evgen.trackEvent(e, t);
                }
                constructor(e, t, n) {
                    ((0, d._)(this, 'evgen', void 0),
                        (this.evgen = {
                            trackEvent: (a, i) => {
                                let r = { ...i, ...t.getGlobalParams(), ...n.getPlatformParams() };
                                e.trackEvent(a, r);
                            },
                        }));
                }
            }
            let S = null,
                _ = (e) => {
                    let { allowAnalyticsLogs: t, children: n, evgenUserParam: r, logger: o, metrika: l } = e,
                        s = (0, a.useMemo)(() => {
                            if (S) return S;
                            let e = (function (e, t, n) {
                                let a = (function (e) {
                                    let { callback: t, maxSendingItemsPerRequest: n, requestsSendingDelay: a } = e,
                                        i = [];
                                    return (
                                        !(function e() {
                                            (i.length > 0 && t(i.splice(0, n)), window.setTimeout(e, a));
                                        })(),
                                        {
                                            add(e) {
                                                i.push(e);
                                            },
                                        }
                                    );
                                })({
                                    callback: (t) => {
                                        e(t);
                                    },
                                    requestsSendingDelay: 1e3,
                                    maxSendingItemsPerRequest: 21,
                                });
                                return {
                                    trackEvent(e, i) {
                                        (n && t.log(e, i), a.add({ [e]: i }));
                                    },
                                };
                            })((e) => l.count(e, r), o, t);
                            return (S = new p(
                                e,
                                (function () {
                                    let e = new N();
                                    return { getGlobalParams: () => e };
                                })(),
                                (function () {
                                    let e = new u();
                                    return { getPlatformParams: () => e };
                                })(),
                            ));
                        }, [o, l]);
                    return (0, c.jsx)(i.Provider, { value: s, children: (0, c.jsx)(b, { children: n }) });
                };
        },
        65610: (e) => {
            e.exports = { root: 'NavigationControls_root__V2A3_' };
        },
        67379: (e, t, n) => {
            'use strict';
            function a(e) {
                let { params: t, logger: n, context: a } = e,
                    i = Object.getOwnPropertyNames(t).filter((e) => void 0 === t[e]);
                return i.length > 0 ? (n.error('Evgen parameters are not met', { parameters: i.join(', '), incomingParams: t, context: a }), null) : t;
            }
            n.d(t, { F: () => a });
        },
        71872: (e, t, n) => {
            'use strict';
            n.d(t, { Lz: () => a, ov: () => i });
            let a = ''.concat('yandexmusic', ':'),
                i = ''.concat(a, '//');
        },
        73810: (e, t, n) => {
            'use strict';
            n.d(t, { P: () => a });
            let a = (0, n(74631).createContext)(null);
        },
        74273: (e) => {
            e.exports = { icon: 'ConcertNotFoundPage_icon__9yJIB' };
        },
        76945: (e, t, n) => {
            'use strict';
            ((t.w5 = function (e, t) {
                let {
                        skeletonId: n = '',
                        mainObjectType: r = i.DomainObjectType.NonApplicable,
                        mainObjectId: o = '',
                        tabId: l = '',
                        tabPos: c = 0,
                        isTabSelectedByDefault: s = !1,
                        viewUuid: b = '',
                    } = t,
                    N = (0, a.makeMetaParams)(1),
                    u = { ...t, skeletonId: n, mainObjectType: r, mainObjectId: o, tabId: l, tabPos: c, isTabSelectedByDefault: s, viewUuid: b, _meta: N };
                e.trackEvent('Screen.Opened', u);
            }),
                (t.Fn = function (e, t) {
                    let {
                            pageStyle: n = i.PageStyles.Fullscreen,
                            pagePlacement: r = i.PagePlacements.Fullscreen,
                            skeletonId: o = '',
                            mainObjectType: l = i.DomainObjectType.NonApplicable,
                            mainObjectId: c = '',
                            tabId: s = '',
                            tabPos: b = 0,
                            isTabSelectedByDefault: N = !1,
                            viewUuid: u = '',
                        } = t,
                        d = (0, a.makeMetaParams)(3),
                        p = {
                            ...t,
                            pageStyle: n,
                            pagePlacement: r,
                            skeletonId: o,
                            mainObjectType: l,
                            mainObjectId: c,
                            tabId: s,
                            tabPos: b,
                            isTabSelectedByDefault: N,
                            viewUuid: u,
                            _meta: d,
                        };
                    e.trackEvent('Screen.Opened', p);
                }),
                (t.XB = function (e, t) {
                    let {
                            skeletonId: n = '',
                            mainObjectType: r = i.DomainObjectType.NonApplicable,
                            mainObjectId: o = '',
                            tabId: l = '',
                            tabPos: c = 0,
                            isTabSelectedByDefault: s = !1,
                        } = t,
                        b = (0, a.makeMetaParams)(1),
                        N = { ...t, skeletonId: n, mainObjectType: r, mainObjectId: o, tabId: l, tabPos: c, isTabSelectedByDefault: s, _meta: b };
                    e.trackEvent('Screen.Closed', N);
                }),
                (t.Ig = function (e, t) {
                    let {
                            pageStyle: n = i.PageStyles.Fullscreen,
                            pagePlacement: r = i.PagePlacements.Fullscreen,
                            skeletonId: o = '',
                            mainObjectType: l = i.DomainObjectType.NonApplicable,
                            mainObjectId: c = '',
                            tabId: s = '',
                            tabPos: b = 0,
                            isTabSelectedByDefault: N = !1,
                        } = t,
                        u = (0, a.makeMetaParams)(3),
                        d = {
                            ...t,
                            pageStyle: n,
                            pagePlacement: r,
                            skeletonId: o,
                            mainObjectType: l,
                            mainObjectId: c,
                            tabId: s,
                            tabPos: b,
                            isTabSelectedByDefault: N,
                            _meta: u,
                        };
                    e.trackEvent('Screen.Closed', d);
                }),
                (t.PO = function (e, t) {
                    let {
                            pageStyle: n = i.PageStyles.Fullscreen,
                            pagePlacement: r = i.PagePlacements.Fullscreen,
                            skeletonId: o = '',
                            mainObjectType: l = i.DomainObjectType.NonApplicable,
                            mainObjectId: c = '',
                            tabId: s = '',
                            tabPos: b = 0,
                            isTabSelectedByDefault: N = !1,
                            viewUuid: u = '',
                        } = t,
                        d = (0, a.makeMetaParams)(4),
                        p = {
                            ...t,
                            pageStyle: n,
                            pagePlacement: r,
                            skeletonId: o,
                            mainObjectType: l,
                            mainObjectId: c,
                            tabId: s,
                            tabPos: b,
                            isTabSelectedByDefault: N,
                            viewUuid: u,
                            _meta: d,
                        };
                    e.trackEvent('Screen.Closed', p);
                }),
                (t.e7 = function (e, t) {
                    let {
                            skeletonId: n = '',
                            mainObjectType: r = i.DomainObjectType.NonApplicable,
                            mainObjectId: o = '',
                            tabId: l = '',
                            tabPos: c = 0,
                            isTabSelectedByDefault: s = !1,
                        } = t,
                        b = (0, a.makeMetaParams)(1),
                        N = { ...t, skeletonId: n, mainObjectType: r, mainObjectId: o, tabId: l, tabPos: c, isTabSelectedByDefault: s, _meta: b };
                    e.trackEvent('Screen.Started', N);
                }),
                (t.Mu = function (e, t) {
                    let {
                            skeletonId: n = '',
                            mainObjectType: r = i.DomainObjectType.NonApplicable,
                            mainObjectId: o = '',
                            tabId: l = '',
                            tabPos: c = 0,
                            isTabSelectedByDefault: s = !1,
                        } = t,
                        b = (0, a.makeMetaParams)(1),
                        N = { ...t, skeletonId: n, mainObjectType: r, mainObjectId: o, tabId: l, tabPos: c, isTabSelectedByDefault: s, _meta: b };
                    e.trackEvent('Screen.Navigated', N);
                }),
                (t.ID = function (e, t) {
                    let {
                            pageStyle: n = i.PageStyles.Fullscreen,
                            pagePlacement: r = i.PagePlacements.Fullscreen,
                            skeletonId: o = '',
                            mainObjectType: l = i.DomainObjectType.NonApplicable,
                            mainObjectId: c = '',
                            tabId: s = '',
                            tabPos: b = 0,
                            isTabSelectedByDefault: N = !1,
                            deepLink: u = '',
                        } = t,
                        d = (0, a.makeMetaParams)(4),
                        p = {
                            ...t,
                            pageStyle: n,
                            pagePlacement: r,
                            skeletonId: o,
                            mainObjectType: l,
                            mainObjectId: c,
                            tabId: s,
                            tabPos: b,
                            isTabSelectedByDefault: N,
                            deepLink: u,
                            _meta: d,
                        };
                    e.trackEvent('Screen.Navigated', p);
                }),
                (t.bv = function (e, t) {
                    let {
                            skeletonId: n = '',
                            mainObjectType: r = i.DomainObjectType.NonApplicable,
                            mainObjectId: o = '',
                            tabId: l = '',
                            tabPos: c = 0,
                            isTabSelectedByDefault: s = !1,
                        } = t,
                        b = (0, a.makeMetaParams)(1),
                        N = { ...t, skeletonId: n, mainObjectType: r, mainObjectId: o, tabId: l, tabPos: c, isTabSelectedByDefault: s, _meta: b };
                    e.trackEvent('Screen.ActionPerformed', N);
                }),
                (t.z5 = function (e, t) {
                    let {
                            pageStyle: n = i.PageStyles.Fullscreen,
                            pagePlacement: r = i.PagePlacements.Fullscreen,
                            skeletonId: o = '',
                            mainObjectType: l = i.DomainObjectType.NonApplicable,
                            mainObjectId: c = '',
                        } = t,
                        s = (0, a.makeMetaParams)(1),
                        b = { ...t, pageStyle: n, pagePlacement: r, skeletonId: o, mainObjectType: l, mainObjectId: c, _meta: s };
                    e.trackEvent('Screen.ErrorRaised', b);
                }));
            let a = n(26895),
                i = n(36619);
        },
        79670: (e, t, n) => {
            'use strict';
            n.d(t, { W: () => r });
            var a = n(36619),
                i = n(20258);
            let r = {
                [i._Q.ALBUM]: a.AppScreen.AlbumScreen,
                [i._Q.PLAYLIST]: a.AppScreen.PlaylistScreen,
                [i._Q.HOME]: a.AppScreen.MainScreen,
                [i._Q.ARTIST]: a.AppScreen.ArtistScreen,
                [i._Q.ARTIST_TRACKS]: a.AppScreen.ArtistScreen,
                [i._Q.ARTIST_SIMILAR]: a.AppScreen.ArtistScreen,
                [i._Q.ARTIST_ALBUMS]: a.AppScreen.ArtistScreen,
                [i._Q.ARTIST_DISCOGRAPHY]: a.AppScreen.ArtistScreen,
                [i._Q.ARTIST_COMPILATIONS]: a.AppScreen.ArtistScreen,
                [i._Q.ARTIST_CONCERTS]: a.AppScreen.ArtistScreen,
                [i._Q.SEARCH]: a.AppScreen.SearchScreen,
                [i._Q.OWN_COLLECTION]: a.AppScreen.CollectionLandingScreen,
                [i._Q.LANDING]: a.AppScreen.DynamicScreen,
                [i._Q.HISTORY]: a.AppScreen.MusicHistoryScreen,
                [i._Q.NON_MUSIC]: a.AppScreen.NonmusicLandingScreen,
                [i._Q.CHART]: a.AppScreen.PlaylistListScreen,
                [i._Q.PODCAST]: a.AppScreen.AlbumScreen,
                [i._Q.AUDIOBOOK]: a.AppScreen.AlbumScreen,
                [i._Q.OWN_ALBUMS]: a.AppScreen.CollectionAlbumsScreen,
                [i._Q.OWN_DISLIKES]: a.AppScreen.CollectionTrackListScreen,
                [i._Q.OWN_ARTISTS]: a.AppScreen.CollectionArtistsScreen,
                [i._Q.OWN_PLAYLISTS]: a.AppScreen.CollectionPlaylistsScreen,
                [i._Q.FAMILIAR_YOU]: a.AppScreen.TrackListScreen,
                [i._Q.ENTITIES]: a.AppScreen.ObjectsGridScreen,
                [i._Q.TRAILER]: a.AppScreen.TrailerScreen,
                [i._Q.PLAYER]: a.AppScreen.ExpandedPlayerScreen,
                [i._Q.VIDEO_PLAYER]: a.AppScreen.VideoScreen,
                [i._Q.TRACK_SCREEN]: a.AppScreen.TrackScreen,
                [i._Q.PAYWALL]: a.AppScreen.PaywallScreen,
                [i._Q.CONCERTS]: a.AppScreen.ConcertsLandingScreen,
                [i._Q.CONCERT]: a.AppScreen.ConcertScreen,
                [i._Q.CONCERT_LOCATION_SELECTOR]: a.AppScreen.ConcertLocationSelector,
                [i._Q.PAGE_NOT_FOUND_SCREEN]: a.AppScreen.PageNotFoundScreen,
                [i._Q.SLIDES_SCREEN]: a.AppScreen.SlidesScreen,
                [i._Q.PROMOLANDING_ALBUM]: a.AppScreen.PromolandingAlbumScreen,
                [i._Q.WAVE_LANDING_SCREEN]: a.AppScreen.WaveLandingScreen,
                [i._Q.FACT_SCREEN]: a.AppScreen.FactScreen,
                [i._Q.LUMEN_AWAKENING_SCREEN]: a.AppScreen.LumenAwakeningScreen,
                [i._Q.COLLECTION_VIBE_ROOMS]: a.AppScreen.MultivibeScreen,
                [i._Q.MULTIVIBE_SENDING_INVITATION_SCREEN]: a.AppScreen.MultivibeSendingInvitationScreen,
                [i._Q.MULTIVIBE_ACTION_SCREEN]: a.AppScreen.MultivibeActionScreen,
                [i._Q.MULTIVIBE_LIMIT_SCREEN]: a.AppScreen.MultivibeLimitScreen,
                [i._Q.MULTIVIBE_UNIFIED_SCREEN]: a.AppScreen.MultivibeUnifiedScreen,
            };
        },
        82064: (e, t, n) => {
            'use strict';
            n.d(t, { r: () => a });
            let a = (0, n(74631).createContext)({ pageId: void 0, pageEntityId: void 0, displayReasonId: void 0, pageStyle: void 0, pagePlacement: void 0 });
        },
        85686: (e, t, n) => {
            'use strict';
            n.d(t, { Z: () => b });
            var a = n(84059);
            n(93588);
            var i = n(71035),
                r = n(25895),
                o = n(89288),
                l = n(71872),
                c = (function (e) {
                    return ((e.INTERNAL = 'internal'), (e.EXTERNAL = 'external'), (e.DEEPLINK = 'deeplink'), e);
                })({});
            let s = [o.cy.HTTP, o.cy.HTTPS, o.cy.MAILTO, o.cy.TEL, l.Lz],
                b = (e) => {
                    let t = (0, a.useRouter)(),
                        { href: n, target: b } = (0, r.u)(e);
                    return (0, i.c)((e) => {
                        let a = ((e, t, n) => {
                            let a;
                            try {
                                a = new URL(t);
                            } catch (e) {
                                return null;
                            }
                            let i = (0, o.Rj)(e, { allowedProtocols: new Set([...s, a.protocol]), baseUrl: a.href });
                            return i.isAllowed
                                ? i.url.protocol === l.Lz
                                    ? { type: c.DEEPLINK, href: e }
                                    : '_blank' !== n && ((e, t) => e.protocol === t.protocol && e.hostname === t.hostname && e.port === t.port)(i.url, a)
                                      ? { type: c.INTERNAL, href: e }
                                      : { type: c.EXTERNAL, href: e }
                                : null;
                        })(n, window.location.href, b);
                        if (!a) {
                            null == e || e.preventDefault();
                            return;
                        }
                        (null != e && e.metaKey) ||
                            (null != e && e.ctrlKey) ||
                            (null != e && e.shiftKey) ||
                            (a.type === c.EXTERNAL || a.type === c.DEEPLINK
                                ? ((e) => {
                                      let { target: t, rel: n } = (0, r.u)(e, { options: { isExternalLink: !0 } });
                                      window.open(e, t, n);
                                  })(a.href)
                                : t.push(a.href));
                    });
                };
        },
        89192: (e, t, n) => {
            'use strict';
            n.d(t, { M: () => i, g: () => r });
            var a = n(74631);
            let i = (0, a.createContext)({
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
                r = () => (0, a.useContext)(i);
        },
        96634: (e, t, n) => {
            'use strict';
            (n.r(t), n.d(t, { NotFound: () => E }));
            var a = n(25839),
                i = n(82298),
                r = n(88204),
                o = n(8487);
            n(93588);
            var l = n(4071),
                c = n(66738),
                s = n(13833),
                b = n(4254),
                N = n(74631),
                u = n(67379),
                d = n(36619),
                p = n(76945),
                S = n(59450),
                _ = n(84e3),
                x = n(59342),
                W = n(89192),
                A = n(53712),
                m = n(85686),
                T = n(56120),
                v = n(15270),
                I = n(27954),
                g = n(24053),
                C = n.n(g);
            let E = (0, r.PA)((e) => {
                let { className: t, title: n, description: r, iconVariant: g = 'musicLogo', iconClassName: E, iconSize: P } = e,
                    { contentRef: y, setContentScrollRef: L } = (0, W.g)(),
                    k = (0, m.Z)(A.Z.main.href);
                !(function () {
                    let e = (0, S.st)(),
                        { hash: t } = (0, S.gf)(),
                        n = (0, _.U)(),
                        a = (0, N.useRef)(void 0);
                    (0, N.useEffect)(() => {
                        if (!e || !t) return;
                        a.current = (0, x.A)();
                        let i = (0, u.F)({
                            params: {
                                hash: t,
                                pageId: d.AppScreen.PageNotFoundScreen,
                                pageStyle: d.PageStyles.Fullscreen,
                                pagePlacement: d.PagePlacements.Fullscreen,
                                mainObjectType: d.DomainObjectType.NonApplicable,
                                mainObjectId: d.DomainObjectType.NonApplicable,
                                viewUuid: a.current,
                            },
                            logger: n,
                            context: 'useSendEventOnNotFoundShowedOrHidden.open',
                        });
                        return (
                            i && (0, p.w5)(e.evgenInstance, i),
                            () => {
                                let i = (0, u.F)({
                                    params: {
                                        hash: t,
                                        pageId: d.AppScreen.PageNotFoundScreen,
                                        pageStyle: d.PageStyles.Fullscreen,
                                        pagePlacement: d.PagePlacements.Fullscreen,
                                        mainObjectType: d.DomainObjectType.NonApplicable,
                                        mainObjectId: d.DomainObjectType.NonApplicable,
                                        viewUuid: a.current,
                                    },
                                    logger: n,
                                    context: 'useSendEventOnNotFoundShowedOrHidden.close',
                                });
                                i && (0, p.XB)(e.evgenInstance, i);
                            }
                        );
                    }, [e, t, n]);
                })();
                let { handleNavigateToMain: O } = (function (e) {
                    let t = (0, S.st)(),
                        { hash: n } = (0, S.gf)(),
                        a = (0, _.U)();
                    return {
                        handleNavigateToMain: (0, N.useCallback)(() => {
                            if (!t || !n) return;
                            let i = (0, u.F)({
                                params: {
                                    hash: n,
                                    pageId: d.AppScreen.PageNotFoundScreen,
                                    pageStyle: d.PageStyles.Fullscreen,
                                    pagePlacement: d.PagePlacements.Fullscreen,
                                    mainObjectType: d.DomainObjectType.NonApplicable,
                                    mainObjectId: d.DomainObjectType.NonApplicable,
                                    from: d.AppScreen.PageNotFoundScreen,
                                    to: d.AppScreen.MainScreen,
                                    entityType: d.EntityTypes.Error,
                                    entityId: d.EntityTypes.Error,
                                },
                                logger: a,
                                context: 'useSendEventOnNotFoundNavigated',
                            });
                            (i && (0, p.Mu)(t.evgenInstance, i), e());
                        }, [t, n, a, e]),
                    };
                })(k);
                return (
                    (0, T.N)(!0),
                    !(function () {
                        let { location: e } = (0, I.g)();
                        (0, N.useEffect)(
                            () => (
                                e.setNotFound(!0),
                                () => {
                                    e.setNotFound(!1);
                                }
                            ),
                            [e],
                        );
                    })(),
                    (0, a.jsxs)(s.N, {
                        className: (0, i.$)(C().root, { [C().root_desktop]: !y }, t),
                        containerClassName: C().container,
                        ref: L,
                        children: [
                            (0, a.jsx)(v.L, { withBackwardFallback: '/', className: C().navigation, withForwardControl: !1 }),
                            (0, a.jsxs)('div', {
                                className: C().content,
                                children: [
                                    (0, a.jsx)(c.I, { className: (0, i.$)(C().icon, E), variant: g, size: P }),
                                    (0, a.jsx)(b.DZ, {
                                        className: (0, i.$)(C().title, C().important),
                                        variant: 'h3',
                                        size: 'xs',
                                        children: n || (0, a.jsx)(o.A, { id: 'page-error.page-does-not-exist' }),
                                    }),
                                    (0, a.jsx)(b.HL, {
                                        className: (0, i.$)(C().text, C().important),
                                        variant: 'span',
                                        type: 'text',
                                        size: 'l',
                                        weight: 'normal',
                                        children: r || (0, a.jsx)(o.A, { id: 'page-error.page-does-not-exist-description' }),
                                    }),
                                    (0, a.jsx)(l.$, {
                                        onClick: O,
                                        className: C().button,
                                        role: 'link',
                                        color: 'secondary',
                                        size: 'l',
                                        radius: 'xxxl',
                                        children: (0, a.jsx)(b.HL, {
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'm',
                                            children: (0, a.jsx)(o.A, { id: 'navigation.page-main' }),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    })
                );
            });
        },
        97952: (e, t, n) => {
            'use strict';
            n.d(t, { $: () => r });
            var a = n(74631),
                i = n(82064);
            function r() {
                return (0, a.useContext)(i.r);
            }
        },
    },
    (e) => {
        (e.O(0, [3349, 6706, 9212, 260, 4512, 9004, 4985, 7839, 3269, 4163, 3246, 4517, 4475, 5056, 7358], () => e((e.s = 35415))), (_N_E = e.O()));
    },
]);
