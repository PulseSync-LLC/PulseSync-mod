(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6808],
    {
        25895: (e, t, i) => {
            'use strict';
            (i.d(t, { u: () => c }), i(93588));
            var a = i(89288),
                s = i(74310),
                l = i(38097);
            let o = (e) => {
                    var t;
                    if (!e) return e;
                    let i = (null != (t = e.split('?')[0]) ? t : '').split('/').filter(Boolean);
                    for (let e of Object.keys(s.j)) {
                        let t = e.split('/').filter(Boolean);
                        if (i.length !== t.length) continue;
                        let a = !0;
                        for (let e = 0; e < t.length; e++) {
                            let s = t[e],
                                l = i[e];
                            if (s && !s.startsWith(':') && s !== l) {
                                a = !1;
                                break;
                            }
                        }
                        if (a) return e;
                    }
                    return e;
                },
                n = (e) => {
                    let t = [],
                        i = e.split('/').filter(Boolean),
                        a = [];
                    for (let e of i) e.startsWith(':') ? t.push(e.substring(1)) : a.push(e);
                    let s = '/'.concat(a.join('/'));
                    if (0 === t.length) return e;
                    let l = t.map((e) => ''.concat(e, '=:').concat(e)).join('&');
                    return ''.concat(s, '?').concat(l);
                },
                r = (e) =>
                    e
                        .split('/')
                        .filter(Boolean)
                        .filter((e) => e.startsWith(':'))
                        .map((e) => e.substring(1)),
                c = function (e) {
                    for (var t, i = arguments.length, c = Array(i > 1 ? i - 1 : 0), I = 1; I < i; I++) c[I - 1] = arguments[I];
                    let [b] = c,
                        N = e.includes(':'),
                        T = e.includes('?'),
                        S = 'string' == typeof e ? e : String(e);
                    if (
                        (S.includes(l.nl) && (b = { ...b, options: { ...(null == b ? void 0 : b.options), isExternalLink: !0 } }),
                        T &&
                            ((e) => {
                                let [t, i] = e.split('?'),
                                    a = new URLSearchParams(i);
                                return Object.keys(s.j).some((e) => {
                                    let i = r(e);
                                    return 0 !== i.length && n(e).split('?')[0] === t && i.every((e) => a.has(e));
                                });
                            })(S))
                    )
                        return (0, a.no)(S, b);
                    if (T && !N) {
                        let e = o(S),
                            i = r(e);
                        if (i.length > 0) {
                            let s = ((e, t) => {
                                    var i;
                                    let a = (null != (i = e.split('?')[0]) ? i : '').split('/').filter(Boolean);
                                    return t
                                        .split('/')
                                        .filter(Boolean)
                                        .reduce((e, t, i) => {
                                            let s = a[i];
                                            return (t.startsWith(':') && s && (e[t.substring(1)] = s), e);
                                        }, {});
                                })(S, e),
                                l = {
                                    ...((e, t) => {
                                        let i = e.split('?')[1];
                                        if (!i) return {};
                                        let a = new Set(t),
                                            s = {};
                                        return (
                                            new URLSearchParams(i).forEach((e, t) => {
                                                a.has(t) || (s[t] = e);
                                            }),
                                            s
                                        );
                                    })(S, i),
                                    ...(null != (t = null == b ? void 0 : b.query) ? t : {}),
                                },
                                o = n(e);
                            return (0, a.no)(o, { ...b, params: s, query: l });
                        }
                    }
                    if (N || T) {
                        let e = n(S);
                        return (0, a.no)(e, b);
                    }
                    let d = o(S),
                        A = (function (e, t) {
                            let [i, a] = e.split('?'),
                                s = null == i ? void 0 : i.split('/').filter(Boolean),
                                l = {},
                                o = t.split('/').filter(Boolean);
                            if ((null == s ? void 0 : s.length) !== o.length || (o[0] && !e.startsWith('/'.concat(o[0])))) return l;
                            for (let e = 0; e < o.length; e++) {
                                let t = o[e],
                                    i = s && s[e];
                                (null == t ? void 0 : t.startsWith(':')) && i && (l[t.substring(1)] = i);
                            }
                            return (
                                a &&
                                    a.split('&').map((e) => {
                                        let [t, i] = e.split('=');
                                        t && void 0 !== i && (l[t] = i);
                                    }),
                                l
                            );
                        })(S, d),
                        _ = n(d);
                    return (0, a.no)(_, { ...b, params: A });
                };
        },
        27532: (e, t, i) => {
            'use strict';
            i.d(t, { UrlInitializer: () => n });
            var a = i(88204),
                s = i(84059);
            i(93588);
            var l = i(99163),
                o = i(27954);
            let n = (0, a.PA)((e) => {
                let { host: t } = e,
                    { location: i } = (0, o.g)(),
                    a = (0, s.usePathname)(),
                    n = (0, s.useSearchParams)().toString(),
                    r = window.location.host,
                    c = t || r,
                    I = 'https://'.concat(c),
                    b = 'https://'
                        .concat(c)
                        .concat(a)
                        .concat(n ? '?' : '')
                        .concat(n);
                ((I = c),
                    (b = ''
                        .concat(c)
                        .concat(a)
                        .concat(n ? '?' : '')
                        .concat(n)),
                    i.setPathname(a),
                    i.setSearchParams(n),
                    i.setHost(c),
                    i.setTld((0, l.f)(c) || 'ru'),
                    i.setOrigin(I),
                    i.setHref(b));
            });
        },
        27954: (e, t, i) => {
            'use strict';
            i.d(t, { P: () => l, g: () => o });
            var a = i(74631),
                s = i(36432);
            let l = (0, a.createContext)(null);
            function o() {
                let e = (0, a.useContext)(l);
                if (null === e) throw new s.t('Store cannot be null, please add a context provider', { code: 'E_CONTEXT_STORE_NULL' });
                return e;
            }
        },
        31927: (e, t, i) => {
            'use strict';
            i.d(t, { W: () => a });
            let a = { Playing: 'playing', Interrupted: 'interrupted' };
        },
        35522: (e, t, i) => {
            'use strict';
            var a;
            (i.d(t, { t: () => a }),
                (function (e) {
                    ((e.ALBUM_PROMO = 'ALBUM_PROMO'),
                        (e.ARTIST_RECOMMENDATIONS_PROMO = 'ARTIST_RECOMMENDATIONS_PROMO'),
                        (e.SIMPLE_ARTIST_RECOMMENDATIONS_PROMO = 'SIMPLE_ARTIST_RECOMMENDATIONS_PROMO'),
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
                        (e.Q2V_SUGGESTIONS = 'Q2V_SUGGESTIONS'),
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
                        (e.PODCASTS_CHART_ALBUMS = 'PODCASTS_CHART_ALBUMS'));
                })(a || (a = {})));
        },
        38097: (e, t, i) => {
            'use strict';
            i.d(t, { k7: () => a, nl: () => s });
            let a = 1e3,
                s = 'https://';
        },
        44806: (e, t, i) => {
            'use strict';
            i.d(t, { z: () => a });
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
        46925: (e, t, i) => {
            'use strict';
            i.d(t, { O: () => a });
            var a = (function (e) {
                return ((e.MACOS = 'darwin'), (e.WINDOWS = 'win32'), (e.LINUX = 'linux'), e);
            })({});
        },
        73939: (e, t, i) => {
            'use strict';
            i.d(t, { s: () => a });
            var a = (function (e) {
                return ((e.DIVERSITY = 'diversity'), (e.MOOD_ENERGY = 'moodEnergy'), (e.LANGUAGE = 'language'), e);
            })({});
        },
        74310: (e, t, i) => {
            'use strict';
            i.d(t, { b: () => a, j: () => s });
            let a = {
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
        78984: (e, t, i) => {
            'use strict';
            var a;
            (i.d(t, { e: () => a }),
                (function (e) {
                    ((e.HIGH_QUALITY = 'high_quality'), (e.BALANCED = 'balanced'), (e.EFFICIENT = 'efficient'), (e.PREVIEW = 'preview'));
                })(a || (a = {})));
        },
        82407: (e, t, i) => {
            (Promise.resolve().then(i.bind(i, 27532)),
                Promise.resolve().then(i.bind(i, 37394)),
                Promise.resolve().then(i.bind(i, 33986)),
                Promise.resolve().then(i.bind(i, 16714)));
        },
        84e3: (e, t, i) => {
            'use strict';
            i.d(t, { U: () => l });
            var a = i(36484),
                s = i(62562);
            let l = () => (0, s.N)().get(a.Zf);
        },
        94860: (e, t, i) => {
            'use strict';
            i.d(t, { h: () => a });
            let a = {
                PlayerAuthorization: 'player-authorization',
                PlayerSubscription: 'player-subscription',
                FullscreenUnauthorized: 'fullscreen-unauthorized',
                FullscreenSubscription: 'fullscreen-subscription',
            };
        },
    },
    (e) => {
        (e.O(0, [1107, 6706, 1311, 546, 9212, 260, 4512, 4985, 1943, 4245, 2917, 8421, 9965, 3269, 6680, 9333, 2010, 746, 4927, 4475, 5056, 7358], () =>
            e((e.s = 82407)),
        ),
            (_N_E = e.O()));
    },
]);
