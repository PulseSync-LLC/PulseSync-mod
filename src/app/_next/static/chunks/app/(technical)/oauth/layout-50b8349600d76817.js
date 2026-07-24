(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6808],
    {
        5285: (e, t, T) => {
            'use strict';
            T.d(t, { UrlInitializer: () => I });
            var N = T(96103),
                S = T(21916),
                A = T(57594);
            let I = (0, N.PA)((e) => {
                let { host: t } = e,
                    { location: T } = (0, A.g)(),
                    N = (0, S.usePathname)(),
                    I = (0, S.useSearchParams)().toString(),
                    _ = window.location.host,
                    E = t || _,
                    a = 'https://'.concat(E),
                    b = 'https://'
                        .concat(E)
                        .concat(N)
                        .concat(I ? '?' : '')
                        .concat(I);
                (a = E),
                    (b = ''
                        .concat(E)
                        .concat(N)
                        .concat(I ? '?' : '')
                        .concat(I)),
                    T.setPathname(N),
                    T.setSearchParams(I),
                    T.setHost(E),
                    T.setTld(
                        ((e) => {
                            let t = null == e ? void 0 : e.split(':')[0];
                            return ((null == t ? void 0 : t.includes('.')) && (null == t ? void 0 : t.split('.').pop())) || '';
                        })(E) || 'ru',
                    ),
                    T.setOrigin(a),
                    T.setHref(b);
            });
        },
        42224: (e, t, T) => {
            Promise.resolve().then(T.bind(T, 5285)),
                Promise.resolve().then(T.bind(T, 39670)),
                Promise.resolve().then(T.bind(T, 75170)),
                Promise.resolve().then(T.bind(T, 9634));
        },
        57594: (e, t, T) => {
            'use strict';
            T.d(t, { P: () => A, g: () => I });
            var N = T(29222),
                S = T(55178);
            let A = (0, S.createContext)(null);
            function I() {
                let e = (0, S.useContext)(A);
                if (null === e) throw new N.t('Store cannot be null, please add a context provider', { code: 'E_CONTEXT_STORE_NULL' });
                return e;
            }
        },
        58741: (e, t, T) => {
            'use strict';
            T.d(t, { O: () => N });
            var N = (function (e) {
                return (e.MACOS = 'darwin'), (e.WINDOWS = 'win32'), (e.LINUX = 'linux'), e;
            })({});
        },
        76232: (e, t, T) => {
            'use strict';
            var N;
            T.d(t, { e: () => N }),
                (function (e) {
                    (e.HIGH_QUALITY = 'high_quality'), (e.BALANCED = 'balanced'), (e.EFFICIENT = 'efficient'), (e.PREVIEW = 'preview');
                })(N || (N = {}));
        },
        79406: (e, t, T) => {
            'use strict';
            T.d(t, { z: () => N });
            var N = (function (e) {
                return (
                    (e.WebEditorsFeatures = 'WebEditorsFeatures'),
                    (e.WebNext = 'WebNext'),
                    (e.WebNextBlockFullscreen = 'WebNextBlockFullscreen'),
                    (e.WebNextDisableCollection = 'WebNextDisableCollection'),
                    (e.WebNextDisableVibe = 'WebNextDisableVibe'),
                    (e.WebNextDisableVibeSettings = 'WebNextDisableVibeSettings'),
                    (e.WebNextDisableSearch = 'WebNextDisableSearch'),
                    (e.WebNextDisableKids = 'WebNextDisableKids'),
                    (e.WebNextDisableNonMusic = 'WebNextDisableNonMusic'),
                    (e.WebNextDisablePlus = 'WebNextDisablePlus'),
                    (e.WebNextDisableSendPlaysOnTrackStart = 'WebNextDisableSendPlaysOnTrackStart'),
                    (e.WebNextPlayAudioHeartBeat = 'WebNextPlayAudioHeartBeat'),
                    (e.WebNextPlayQueueDnD = 'WebNextPlayQueueDnD'),
                    (e.WebNextUseWaveQueue = 'WebNextUseWaveQueue'),
                    (e.WebNextCrackdownInterval = 'WebNextCrackdownInterval'),
                    (e.WebNextAdvertTest = 'WebNextAdvertTest'),
                    (e.WebNextErids = 'WebNextErids'),
                    (e.WebNextConcertsCashback = 'WebNextConcertsCashback'),
                    (e.WebNextBetaLabel = 'WebNextBetaLabel'),
                    (e.WebNextRewind2024 = 'WebNextRewind2024'),
                    (e.WebNextOfflineDegradation = 'WebNextOfflineDegradation'),
                    (e.WebNextDesktopPaywallInterval = 'WebNextDesktopPaywallInterval'),
                    (e.WebNextPaywallCrackdownInterval = 'WebNextPaywallCrackdownInterval'),
                    (e.WebNextShaderFallbackEnabled = 'WebNextShaderFallbackEnabled'),
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
                    (e.WebNextDisableAds = 'WebNextDisableAds'),
                    (e.WebNextAlbumCPA = 'WebNextAlbumCPA'),
                    (e.WebNextPlusCPA = 'WebNextPlusCPA'),
                    (e.WebNextNewConcertCard = 'WebNextNewConcertCard'),
                    (e.NewConcertsTicketRedesign = 'newConcertsTicketRedesign'),
                    (e.WebNextConcertsTab = 'WebNextConcertsTab'),
                    (e.WebNextTracksPreload = 'WebNextTracksPreload'),
                    (e.WebNextDisableConcertsTab = 'WebNextDisableConcertsTab'),
                    (e.WebNextFooterDisclaimer = 'WebNextFooterDisclaimer'),
                    (e.WebNextYnisonActivityInterception = 'WebNextYnisonActivityInterception'),
                    (e.WebNextVibeDescription = 'WebNextVibeDescription'),
                    (e.WebNextConcertsTicketIcon = 'WebNextConcertsTicketIcon'),
                    (e.WebNextConcertPage = 'WebNextConcertPage'),
                    (e.WebNextCrossMediaPlayer = 'WebNextCrossMediaPlayer'),
                    (e.WebNextConcertTabOnboarding = 'WebNextConcertTabOnboarding'),
                    (e.WebNextPlusOptionsMarketplace = 'WebNextPlusOptionsMarketplace'),
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
                    (e.WebNextSearchConcerts = 'WebNextSearchConcerts'),
                    (e.WebNextConcertsDetailsPage = 'WebNextConcertsDetailsPage'),
                    (e.WebNextYaspSourceLimit = 'WebNextYaspSourceLimit'),
                    (e.WebNextNewWaveTabFeedbackForm = 'WebNextNewWaveTabFeedbackForm'),
                    (e.WebNextNdaLabelOnWaveTab = 'WebNextNdaLabelOnWaveTab'),
                    (e.WebNextPaidPerformancePaywallTopSection = 'WebNextPaidPerformancePaywallTopSection'),
                    (e.WebNextPlayerBarYellowButton = 'WebNextPlayerBarYellowButton'),
                    (e.WebNextPlusOptionsSidebar = 'WebNextPlusOptionsSidebar'),
                    (e.WebNextResetWaveSeeds = 'WebNextResetWaveSeeds'),
                    (e.WebNextConcertsIdentityEventType = 'WebNextConcertsIdentityEventType'),
                    (e.WebNextWaveScreenWordsInWave = 'WebNextWaveScreenWordsInWave'),
                    (e.WebNextWaveScreenWordsInWaveBigReplica = 'WebNextWaveScreenWordsInWaveBigReplica'),
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
                    (e.WebNextFlushDeferredFeedbacksOnContextSwitch = 'WebNextFlushDeferredFeedbacksOnContextSwitch'),
                    (e.WebNextBatchFeedbacksOnVibeSettingsChange = 'WebNextBatchFeedbacksOnVibeSettingsChange'),
                    (e.WebNextSendRadioStartedOnVibeSettingsChange = 'WebNextSendRadioStartedOnVibeSettingsChange'),
                    (e.WebNextRadioStartedOnSessionCreation = 'WebNextRadioStartedOnSessionCreation'),
                    (e.WebNextStoreDeferredVibeFeedbacks = 'WebNextStoreDeferredVibeFeedbacks'),
                    (e.WebNextRealTimeWheelFeedbacks = 'WebNextRealTimeWheelFeedbacks'),
                    (e.WebNextDeleteDeferredVibeFeedbacksStore = 'WebNextDeleteDeferredVibeFeedbacksStore'),
                    (e.WebNextYnisonNetworkMonitoring = 'WebNextYnisonNetworkMonitoring'),
                    (e.WebNextVibeQueueButtonLoginPopover = 'WebNextVibeQueueButtonLoginPopover'),
                    (e.WebNextCorrectRotorQueueParam = 'WebNextCorrectRotorQueueParam'),
                    (e.WebNextQ2VContextColor = 'WebNextQ2VContextColor'),
                    (e.WebNextNewWaveWizard = 'WebNextNewWaveWizard'),
                    (e.WebNextTrackModalCloseOnNavigate = 'WebNextTrackModalCloseOnNavigate'),
                    (e.WebNextEnableSendOriginalContextInVibePlays = 'WebNextEnableSendOriginalContextInVibePlays'),
                    (e.WebNextWaveForTwo = 'WebNextWaveForTwo'),
                    (e.WebNextWaveForTwoTest = 'WebNextWaveForTwoTest'),
                    (e.WebNextLandingSdk = 'WebNextLandingSdk'),
                    e
                );
            })({});
        },
        96194: (e, t, T) => {
            'use strict';
            var N;
            T.d(t, { t: () => N }),
                (function (e) {
                    (e.ALBUM_PROMO = 'ALBUM_PROMO'),
                        (e.ARTIST_PICK = 'ARTIST_PICK'),
                        (e.ARTIST_CONCERTS = 'ARTIST_CONCERTS'),
                        (e.ARTIST_PLAYLISTS = 'ARTIST_PLAYLISTS'),
                        (e.ARTIST_POPULAR_TRACKS_AND_RELEASES = 'ARTIST_POPULAR_TRACKS_AND_RELEASES'),
                        (e.ARTIST_POPULAR_TRACKS = 'ARTIST_POPULAR_TRACKS'),
                        (e.ARTIST_RELEASE = 'ARTIST_RELEASE'),
                        (e.ARTIST_UPCOMING_RELEASE = 'ARTIST_UPCOMING_RELEASE'),
                        (e.ARTIST_ALBUMS = 'ARTIST_ALBUMS'),
                        (e.ARTIST_COMPILATIONS = 'ARTIST_COMPILATIONS'),
                        (e.ARTIST_CLIPS = 'ARTIST_CLIPS'),
                        (e.ARTIST_STUDIO_ALBUMS = 'ARTIST_STUDIO_ALBUMS'),
                        (e.ARTIST_SIMILAR_ENTITIES = 'ARTIST_SIMILAR_ENTITIES'),
                        (e.FAMILIAR_YOU_AND_ARTIST_PICK = 'FAMILIAR_YOU_AND_ARTIST_PICK'),
                        (e.SIMPLE_ALBUM_PROMO = 'SIMPLE_ALBUM_PROMO'),
                        (e.CHART_ALBUMS = 'CHART_ALBUMS'),
                        (e.CHART_TRACKS = 'CHART_TRACKS'),
                        (e.COLLECTION_ALBUMS = 'COLLECTION_ALBUMS'),
                        (e.COLLECTION_ALBUMS_PRESAVES = 'COLLECTION_ALBUMS_PRESAVES'),
                        (e.COLLECTION_ARTISTS = 'COLLECTION_ARTISTS'),
                        (e.COLLECTION_ARTISTS_AND_TOP = 'COLLECTION_ARTISTS_AND_TOP'),
                        (e.COLLECTION_TOP_ARTISTS = 'COLLECTION_TOP_ARTISTS'),
                        (e.COLLECTION_CLIPS = 'COLLECTION_CLIPS'),
                        (e.COLLECTION_FAVOURITE_PLAYLIST = 'COLLECTION_FAVOURITE_PLAYLIST'),
                        (e.COLLECTION_PLAYLISTS_CREATED = 'COLLECTION_PLAYLISTS_CREATED'),
                        (e.COLLECTION_PLAYLISTS_LIKED = 'COLLECTION_PLAYLISTS_LIKED'),
                        (e.COLLECTION_PLAYLISTS_LIKED_AND_CREATED = 'COLLECTION_PLAYLISTS_LIKED_AND_CREATED'),
                        (e.COLLECTION_PLAYLIST_WITH_LIKES = 'COLLECTION_PLAYLIST_WITH_LIKES'),
                        (e.COLLECTION_KIDS = 'COLLECTION_KIDS'),
                        (e.COLLECTION_WAVE_ROOMS = 'COLLECTION_WAVE_ROOMS'),
                        (e.COLLECTION_SIMILAR_ENTITIES = 'COLLECTION_SIMILAR_ENTITIES'),
                        (e.COLLECTION_WAVE_AGENT = 'COLLECTION_WAVE_AGENT'),
                        (e.CONCERTS_PERSONAL = 'CONCERTS_PERSONAL'),
                        (e.COLLECTION_DOWNLOADED_TRACKS = 'COLLECTION_DOWNLOADED_TRACKS'),
                        (e.CONCERTS_TOP = 'CONCERTS_TOP'),
                        (e.VIEWED_CONCERTS = 'VIEWED_CONCERTS'),
                        (e.EDITORIAL_ARTISTS = 'EDITORIAL_ARTISTS'),
                        (e.EDITORIAL_CONCERTS = 'EDITORIAL_CONCERTS'),
                        (e.EDITORIAL_COMPILATION = 'EDITORIAL_COMPILATION'),
                        (e.EDITORIAL_NEW_RELEASES = 'EDITORIAL_NEW_RELEASES'),
                        (e.EDITORIAL_PROMOTIONS = 'EDITORIAL_PROMOTIONS'),
                        (e.EDITORIAL_WAVES = 'EDITORIAL_WAVES'),
                        (e.EDITORIAL_WAVES_AGENT = 'EDITORIAL_WAVES_AGENT'),
                        (e.META_TAG_WAVE_AGENT = 'META_TAG_WAVE_AGENT'),
                        (e.MICRO_GENRE_WAVE_AGENT = 'MICRO_GENRE_WAVE_AGENT'),
                        (e.MICRO_GENRE_SIMILAR_WAVE_AGENT = 'MICRO_GENRE_SIMILAR_WAVE_AGENT'),
                        (e.META_TAG_SIMILAR_WAVE_AGENT = 'META_TAG_SIMILAR_WAVE_AGENT'),
                        (e.IN_STYLE = 'IN_STYLE'),
                        (e.ITEM_LIST = 'ITEM_LIST'),
                        (e.LIKES_AND_HISTORY = 'LIKES_AND_HISTORY'),
                        (e.META_TAG_ALBUMS = 'META_TAG_ALBUMS'),
                        (e.META_TAG_ARTISTS = 'META_TAG_ARTISTS'),
                        (e.META_TAG_NEW_ALBUMS = 'META_TAG_NEW_ALBUMS'),
                        (e.META_TAG_PLAYLISTS = 'META_TAG_PLAYLISTS'),
                        (e.META_TAG_POPULAR_ARTISTS = 'META_TAG_POPULAR_ARTISTS'),
                        (e.META_TAG_POPULAR_PLAYLISTS = 'META_TAG_POPULAR_PLAYLISTS'),
                        (e.META_TAG_SIMILAR_WAVE = 'META_TAG_SIMILAR_WAVE'),
                        (e.META_TAG_WAVE = 'META_TAG_WAVE'),
                        (e.MICRO_GENRE_ALBUMS = 'MICRO_GENRE_ALBUMS'),
                        (e.MICRO_GENRE_ARTISTS = 'MICRO_GENRE_ARTISTS'),
                        (e.MICRO_GENRE_SIMILAR_WAVE = 'MICRO_GENRE_SIMILAR_WAVE'),
                        (e.MICRO_GENRE_TOP_ARTISTS = 'MICRO_GENRE_TOP_ARTISTS'),
                        (e.MICRO_GENRE_WAVE = 'MICRO_GENRE_WAVE'),
                        (e.MIXES = 'MIXES'),
                        (e.MIXES_GRID = 'MIXES_GRID'),
                        (e.MIXES_MUSIC = 'MIXES_MUSIC'),
                        (e.NEUROMUSIC = 'NEUROMUSIC'),
                        (e.NEW_PLAYLISTS = 'NEW_PLAYLISTS'),
                        (e.NEW_RELEASES = 'NEW_RELEASES'),
                        (e.NEW_STARS_ARTISTS = 'NEW_STARS_ARTISTS'),
                        (e.NON_MUSIC_EDITORIAL_COMPILATION = 'NON_MUSIC_EDITORIAL_COMPILATION'),
                        (e.NON_MUSIC_OPEN_PLAYLIST = 'NON_MUSIC_OPEN_PLAYLIST'),
                        (e.NON_MUSIC_PROMOTIONS = 'NON_MUSIC_PROMOTIONS'),
                        (e.OPEN_PLAYLIST = 'OPEN_PLAYLIST'),
                        (e.OVERVIEW = 'OVERVIEW'),
                        (e.PERSONAL_ARTISTS = 'PERSONAL_ARTISTS'),
                        (e.PERSONAL_PLAYLISTS = 'PERSONAL_PLAYLISTS'),
                        (e.PROMOTIONS = 'PROMOTIONS'),
                        (e.RECENTLY_PLAYED = 'RECENTLY_PLAYED'),
                        (e.RECOMMENDED_PLAYLISTS = 'RECOMMENDED_PLAYLISTS'),
                        (e.REWIND_PLAYLISTS = 'REWIND_PLAYLISTS'),
                        (e.SMART_OPEN_PLAYLIST = 'SMART_OPEN_PLAYLIST'),
                        (e.SPECIAL = 'SPECIAL'),
                        (e.SIMILAR_ARTISTS = 'SIMILAR_ARTISTS'),
                        (e.TABS = 'TABS'),
                        (e.WAVES = 'WAVES'),
                        (e.WAVES_AGENT = 'WAVES_AGENT'),
                        (e.SETS_BY_WAVES_AGENT = 'SETS_BY_WAVES_AGENT'),
                        (e.SETS_BY_WAVES = 'SETS_BY_WAVES'),
                        (e.WIZARD = 'WIZARD'),
                        (e.DONATIONS = 'DONATIONS'),
                        (e.CLIPS = 'CLIPS'),
                        (e.CONTINUE_LISTEN = 'CONTINUE_LISTEN'),
                        (e.DISLIKES = 'DISLIKES'),
                        (e.HISTORY = 'HISTORY'),
                        (e.SEARCH_HISTORY = 'SEARCH_HISTORY'),
                        (e.FAMILIAR_YOU = 'FAMILIAR_YOU'),
                        (e.CONCERT_PLACE = 'CONCERT_PLACE'),
                        (e.COLLECTION_ARTISTS_AND_TOP_WITH_ITEMS = 'COLLECTION_ARTISTS_AND_TOP_WITH_ITEMS'),
                        (e.NON_MUSIC_CATEGORY = 'NON_MUSIC_CATEGORY'),
                        (e.PODCASTS_CHART_ALBUMS = 'PODCASTS_CHART_ALBUMS');
                })(N || (N = {}));
        },
        97323: (e, t, T) => {
            'use strict';
            T.d(t, { s: () => N });
            var N = (function (e) {
                return (e.DIVERSITY = 'diversity'), (e.MOOD_ENERGY = 'moodEnergy'), (e.LANGUAGE = 'language'), e;
            })({});
        },
    },
    (e) => {
        e.O(0, [6639, 6706, 1311, 1588, 8892, 2536, 5835, 1410, 6252, 1330, 4970, 6477, 7275, 2586, 6874, 1647, 4547, 5283, 9385, 4220, 9562, 7358], () =>
            e((e.s = 42224)),
        ),
            (_N_E = e.O());
    },
]);
