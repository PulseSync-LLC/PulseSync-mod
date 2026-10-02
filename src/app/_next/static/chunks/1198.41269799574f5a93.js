'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1198],
    {
        21198: (e, t, s) => {
            s.d(t, { Z: () => m });
            var a = s(15968),
                i = s(52830),
                r = s(77270),
                o = s(99245),
                n = s(40241);
            let l = (e, t) => {
                    let s = (0, r.A)(e);
                    return (
                        Object.values(s).forEach((e) => {
                            e &&
                                Object.keys(e).forEach((s) => {
                                    let a = t.reduce(
                                        (e, t) => {
                                            let { type: s, value: a, conditionFn: i = () => !0 } = t;
                                            if (!i(e)) return e;
                                            switch (s) {
                                                case 'sum':
                                                    return e + a;
                                                case 'multiply':
                                                    return e * a;
                                                case 'devide':
                                                    return e / a;
                                                case 'override':
                                                    return a;
                                                default:
                                                    return e;
                                            }
                                        },
                                        (0, o.A)(e, [s]),
                                    );
                                    (0, n.A)(e, [s], a);
                                });
                        }),
                        s
                    );
                },
                c = l(
                    {
                        redAlertResource: { getRedAlerts: 2e3 },
                        waveResource: { createRoom: 2e3, getRooms: 2e3, getRoomById: 2e3, editRoom: 2e3, enterRoom: 2e3, exitRoom: 2e3 },
                        rotorResource: {
                            getStationInfo: 180,
                            sessionNew: 2e3,
                            sessionTracks: 2e3,
                            sessionFeedback: 450,
                            sessionFeedbacks: 2e3,
                            sessionsFeedbacks: 2e3,
                            waveLast: 170,
                            waveSettings: 180,
                            waveLastReset: 30,
                        },
                        adsResource: { saveAds: 200 },
                        accountResource: { experiments: 130, experimentsDetails: 600, settings: 190, about: 600 },
                        albumsResource: {
                            getAlbumWithTracksIds: 5e3,
                            getAlbumWithTracksIdsWithEtag: 5e3,
                            getAlbumWithRichTracks: 5e3,
                            getDisclaimer: 150,
                            getTrailer: 2e3,
                            getRelatedContent: 1e3,
                            getAlbums: 1e3,
                            getSimilarEntities: 2e3,
                            getExternalStreamingLinks: 2e3,
                        },
                        artistsResource: {
                            getArtistTracks: 650,
                            getArtistTrackIds: 310,
                            getSafeDirectAlbums: 210,
                            getBriefInfo: 600,
                            getSimilarArtists: 90,
                            getConcerts: 100,
                            getFamiliarYouInfo: 2e3,
                            getFamiliarYou: 500,
                            getDisclaimer: 150,
                            getTrailer: 2e3,
                            getInfo: 2e3,
                            getSkeleton: 2e3,
                            getAboutArtist: 2e3,
                            getClips: 2e3,
                            getDonation: 2e3,
                            getArtistLinks: 2e3,
                        },
                        availabilityResource: { getAvailabilityTracks: 500 },
                        clipsResource: { getClip: 2e3, getCredits: 200, getDisclaimer: 2e3, getClipsWillLike: 2e3 },
                        chartResource: { getChartPodcasts: 2e3, getChartPodcastsCategory: 800 },
                        dynamicPagesResource: { getTriggers: 3e3, getTrigger: 3e3, shown: 3e3, action: 3e3 },
                        filtersResource: { getTracksFilters: 2e3, getFilterName: 2e3 },
                        libraryResource: { getAllIds: 260 },
                        searchResource: { getInstantMixedSearch: 1e3, sendFeedback: 170, sendQ2vSuggestionsFeedback: 2e3 },
                        searchPlaylistResource: { getTrackIds: 2e3 },
                        siteMapResource: { link: 2e3 },
                        slidesResource: { getUserSlides: 500, getArtistSlides: 500, getPodcastSlides: 500, getSpecialSlides: 500, getKidsSlides: 500 },
                        topResource: { getTopByGenre: 1e3 },
                        tracksResource: {
                            getStorageData: 140,
                            getTracksMeta: 2700,
                            getDisclaimer: 150,
                            getFullInfoTrack: 600,
                            getFullInfoTrackWithEtag: 600,
                            getFullDescriptionTrack: 300,
                            getCredits: 400,
                            getLyrics: 80,
                            getTrailer: 2e3,
                        },
                        usersResource: {
                            getLikedAlbums: 250,
                            getLikedArtists: 250,
                            getDislikedArtists: 200,
                            getLikedPlaylists: 480,
                            getPlaylistsKinds: 800,
                            createPlaylist: 500,
                            getPlaylistsByKinds: 800,
                            getCreatedPlaylists: 670,
                            changePlaylistTitle: 2e3,
                            changePlaylistPosition: 2e3,
                            changePlaylistDescription: 2e3,
                            uploadPlaylistCover: 2e3,
                            deletePlaylist: 2e3,
                            getPlaylistTrailer: 2e3,
                            getPlaylistWithTracksIds: 1e3,
                            getPlaylistWithRichTracks: 1500,
                            getSearchHistory: 220,
                            clearSearchHistory: 60,
                            getDislikedTracks: 1e3,
                            likeTrack: 300,
                            unlikeTrack: 60,
                            likeArtist: 230,
                            unlikeArtist: 120,
                            likeAlbum: 120,
                            unlikeAlbum: 70,
                            likePlaylist: 120,
                            unlikePlaylist: 90,
                            getLikedClips: 2e3,
                            likeClip: 2e3,
                            unlikeClip: 2e3,
                            dislikeArtist: 40,
                            undislikeArtist: 400,
                            dislikeTrack: 140,
                            undislikeTrack: 300,
                            getPresaves: 300,
                            presaveAlbum: 200,
                            removePresaveAlbum: 300,
                        },
                        personalResource: { getTopArtists: 2e3 },
                        playlistResource: { getPlaylist: 1e3, getSimilarEntities: 2e3 },
                        playlistsResource: { getPlaylists: 2e3, getPlaylistPersonal: 1e3 },
                        landingResource: { getSkeleton: 5e3, getBlock: 2e3, getSpecialHeader: 500, getPromoPreview: 2e3 },
                        landingBlocksResource: { getCollectionKidsTracksLiked: 2e3, getCollectionKidsPlaylistsLiked: 2e3, getCollectionKidsAlbumsLiked: 2e3 },
                        landing3Resource: { getMetatags: 2e3, getChart: 2e3 },
                        loaderResource: { getUploadUrl: 2e3 },
                        metatagsResource: { getMetatagById: 2e3 },
                        pinResource: {
                            pinAlbum: 2e3,
                            unpinAlbum: 2e3,
                            pinPlaylist: 2e3,
                            unpinPlaylist: 2e3,
                            pinArtist: 2e3,
                            unpinArtist: 2e3,
                            pinWave: 2e3,
                            unpinWave: 2e3,
                        },
                        pinsResource: { getPins: 2e3 },
                        getFileInfoResource: { getFileInfo: 2e3, getByteRange: 2e3 },
                        resourcesResource: { getFileInfo: 2e3, getFileInfoBatch: 2e3 },
                        tagResource: { getPlaylistIds: 2e3 },
                        feedResource: { getPromotionsById: 2e3, getWizardGenres: 1e3, getWizardArtistsByGenre: 1e3, finishWizard: 1e3 },
                        wizard3Resource: {
                            getInitialArtists: 2e3,
                            getSimilarArtists: 2e3,
                            getSimilarArtistsByTap: 2e3,
                            likeArtist: 2e3,
                            unlikeArtist: 2e3,
                            isNeedToPass: 2e3,
                            finish: 2e3,
                            close: 2e3,
                        },
                        musicHistoryResource: { getMusicHistory: 2e3, getMusicHistoryItems: 2e3 },
                        streamsResource: { progressSync: 150, markAlbumFinished: 150, markAlbumUnfinished: 150, markFinished: 350, markUnfinished: 150 },
                        lyricViewsResource: { sendViews: 140 },
                        nonMusicResource: {
                            getShelfRecentlyPlayed: 500,
                            getShelfLiked: 1e3,
                            getPlaylists: 200,
                            getNewEpisodes: 1e3,
                            getEditorialAlbums: 200,
                            getCategory: 2e3,
                            getCategoryAlbums: 200,
                        },
                        donationResource: { getAlbumDonations: 2e3 },
                        prefixlessResource: { uploadFile: 4e5, reportForPromo: 2e3, getLyricsText: 2e3 },
                        afterTrackResource: { getAfterTrack: 2e3 },
                        ugcResource: { changeTrack: 200 },
                        collectionResource: { sync: 1e3 },
                        disclaimersResource: { getDisclaimers: 2e3 },
                        familyResource: { getInviteInfo: 2e3, acceptInvite: 2e3 },
                        childrenLandingResource: { getSkeleton: 1e3, getEditorialPlaylist: 200, getEditorialAlbum: 200 },
                        promoResource: { getPromoAlbumInfo: 2e3, getAlbumCpaId: 2e3, sendFeedback: 2e3 },
                        telemetryResouce: { log: 2e3, perfLog: 2e3 },
                        labelsResource: { getData: 2e3, getAlbums: 2e3, getArtists: 2e3 },
                        concertsResource: { getTabConfig: 2e3, getFeed: 2e3, getInfo: 2e3, getSkeleton: 2e3, getLocations: 2e3 },
                        radioStreamResource: { getAvailableList: 2e3, getByRadioId: 2e3 },
                        radioStationsResource: {
                            getAll: 2e3,
                            getStationBySlug: 2e3,
                            getStreamBySlug: 2e3,
                            getShowsSchedule: 2e3,
                            getStreamShowHosts: 2e3,
                            getStreamsBySlugs: 2e3,
                            getStreamUrlBySlug: 2e3,
                            getStreamWidgetsBySlug: 2e3,
                            getRegions: 2e3,
                            getRegionBySlug: 2e3,
                            getStreamsByRegion: 2e3,
                            getGenres: 2e3,
                            getStationsByGenre: 2e3,
                            getBlocksForYou: 2e3,
                            getSimilar: 2e3,
                            getCollectionStations: 2e3,
                            addCollectionStations: 2e3,
                            getCollectionShows: 2e3,
                            addCollectionShows: 2e3,
                            getCollectionShowsIds: 2e3,
                            bulkDeleteCollectionShows: 2e3,
                            getCollectionTracks: 2e3,
                            addCollectionTracks: 2e3,
                            getCollectionTracksIds: 2e3,
                            bulkDeleteCollectionTracks: 2e3,
                            bulkDeleteCollectionStations: 2e3,
                            getCollectionStationsSlugs: 2e3,
                            getStreamReactions: 2e3,
                            sendStreamReactions: 2e3,
                            search: 2e3,
                            getStationsListenersCount: 2e3,
                            sendRecommendationsRecordEvent: 2e3,
                            getRecentlyPlayedTracks: 2e3,
                            sendStreamTelemetry: 2e3,
                            getUserRegion: 2e3,
                        },
                        complaintResource: { sendComplaint: 2e3, getComplaintsReasons: 2e3 },
                        importResource: {
                            getStatus: 2e3,
                            getActiveImportsList: 2e3,
                            spotifyAuth: 2e3,
                            spotifyCallback: 2e3,
                            appleMusicCreate: 2e3,
                            youtubeMusicAuth: 2e3,
                            youtubeMusicCallback: 2e3,
                            vkImport: 2e3,
                            anghamiImport: 2e3,
                        },
                        partnersResource: { getAccountInfo: 2e3, getMajors: 2e3, scheduleReport: 2e3 },
                        wordsResource: { cards: 2e3, cardsFeedback: 2e3 },
                        wheelResource: { wheelNew: 2e3, feedbacks: 2e3 },
                        lumenResource: { getLumen: 2e3 },
                    },
                    [
                        { type: 'override', value: 200, conditionFn: (e) => e < 200 },
                        { type: 'multiply', value: 1.5, conditionFn: (e) => e >= 1e3 },
                        { type: 'multiply', value: 2, conditionFn: (e) => e < 1e3 },
                        { type: 'sum', value: 200 },
                    ],
                );
            var d = s(57010);
            let u = l(c, [{ type: 'override', value: 1e4, conditionFn: (e) => e < 1e4 }]);
            var g = s(27912),
                y = s(49124);
            let m = () => ({
                csp: (0, d.$)(),
                oauthCredentials: { host: 'https://oauth.yandex.'.concat(i.B), clientId: '97fe03033fa34407ac9bcf91d5afed5b' },
                passportCredentials: { host: 'https://passport.yandex.'.concat(i.B), origin: 'music_desktop' },
                resources: {
                    musicExternalApi: { allowCustomPrefixUrl: !1, retryPolicyConfig: g.t, defaultTimeout: 1e4, timeouts: u },
                    networkReachability: { url: 'https://api.browser.yandex.ru/generate_204' },
                },
                payment: { environment: 'testing' },
                i18n: { cookieExpirationDays: 365 },
                ynisonConnectionConfig: {
                    ynisonHost: 'ynison.music.yandex.ru',
                    redirectorPath: '/redirector.YnisonRedirectService/GetRedirectToYnison',
                    hubConnectioPath: '/ynison_state.YnisonStateService/PutYnisonState',
                    reconnectTimeout: 2e3,
                    reconnectAttempts: 2,
                    historyLimit: 100,
                },
                player: {
                    secretKey: { web: '7tvSmFbyf5hJnIHhCimDDD', win32: 'kzqU4XhfCaY6B6JTHODeq5', darwin: 'uz0zSpaYCLmgk6C7YLdo5F', linux: 'uVNvVMAvdrvjtwN0VlhEt2' },
                    configVariablesMainPlayback: {
                        entitiesToPreloadStrmUrlsCount: 1,
                        entitiesToPreloadSourceCount: 1,
                        preloadedSourcesMaxCount: 1,
                        strmUrlsTtlMs: 36e5,
                        mediaElementErrorReloadCount: 2,
                        windowSize: 30,
                        setupQueueWindowSize: 80,
                        bufferGoal: 5,
                    },
                    configVariablesPromoLandingPlayback: {
                        entitiesToPreloadStrmUrlsCount: 1,
                        entitiesToPreloadSourceCount: 1,
                        preloadedSourcesMaxCount: 1,
                        strmUrlsTtlMs: 36e5,
                        mediaElementErrorReloadCount: 2,
                        windowSize: 30,
                        setupQueueWindowSize: 80,
                        bufferGoal: 5,
                    },
                    configVariablesTrailerPlayback: { mediaElementErrorReloadCount: 2, windowSize: 30, setupQueueWindowSize: 80, storePlaysProgressIntervalMs: 5e3 },
                    sessionLifeTimeMin: 540,
                    hlsErrorRetryLimit: 2,
                    yaspVersionStable: '12946',
                    yaspSourceLimit: 3,
                    yaspLoadRetryDelayMs: 1e3,
                    yaspExpName: 'WebNextYaspVersion13766',
                    yaspCandidateVersion: '13766',
                    vhMediaProvider: { service: 'ya-music', from: 'ya-music', vhUrl: 'https://frontend.vh.yandex.ru/player/' },
                    vhPlayerSdkVersion: '12569',
                    telemetry: {
                        telemetryUrl: 'https://log.strm.yandex.ru',
                        testTelemetryUrl: 'https://log-test.strm.yandex.net',
                        service: 'WebMusic',
                        from: 'ya-music',
                        playerTypeForVsid: 'MWE',
                        rumUrl: 'https://yandex.ru/clck/click',
                        perfLogUrl: 'https://strm.yandex.ru/perf',
                    },
                },
                downloadDesktop: { url: 'https://music.yandex.'.concat(i.B, '/download/?autodownload=1') },
                iframe: { entityBaseUrl: 'https://music.yandex.'.concat(i.B) },
                feedbackForm: { host: 'https://music.yandex.'.concat(i.B) },
                market: { host: 'https://market.yandex.ru' },
                afisha: {
                    clientId: {
                        web: 'b200fd55-5a52-4fa2-b5db-d163e986a61d',
                        win32: '0d8ab1a6-1667-42cb-a98f-2fe7eff4b137',
                        darwin: '05c45ae8-b869-4ec1-848c-4b314fbadc17',
                        linux: 'd2bcdb71-90ac-493b-b68f-024321954a5d',
                    },
                },
                acqOffers: { environment: 'production', brand: 'YANDEX', service: 'music', appVersion: y.env.APP_VERSION },
                rsc: { useCache: !0 },
                mocks: {
                    enabled: !1,
                    mocksProviderUrl: y.env.NEXT_PUBLIC_MOCKS_PROVIDER_URL || 'https://s3.mds.yandex.net/mocks-storage/',
                    urlCapturePattern: y.env.NEXT_PUBLIC_MOCK_URL_CAPTURE_PATTERN || ''.concat(a.$, '/*'),
                },
            });
        },
        57010: (e, t, s) => {
            s.d(t, { $: () => ei });
            var a = s(60586),
                i = s.n(a),
                r = s(71872),
                o = s(52830),
                n = s(78634),
                l = s(71673);
            let {
                    avatars: c,
                    data: d,
                    eval: u,
                    inline: g,
                    none: y,
                    nonce: m,
                    self: p,
                    yaStatic: k,
                    adsdk: R,
                    BASE_URI: h,
                    BLOB: b,
                    CONNECT: f,
                    DEFAULT: S,
                    FRAME: P,
                    CHILD: C,
                    IMG: x,
                    MEDIA: A,
                    OBJECT: v,
                    SCRIPT: B,
                    STYLE: T,
                    FONT: w,
                    WORKER: I,
                } = i(),
                L = ['music.yandex.'.concat(o.B)],
                E = ['yandex.'.concat(o.B)],
                F = [
                    '*.storage.yandex.net',
                    'storage.mds.yandex.net',
                    '*.storage.mds.yandex.net',
                    's3.mds.yandex.net',
                    '*.s3.yandex.net',
                    'music.yandex.'.concat(o.B),
                    '*.music.yandex.'.concat(o.B),
                    'generative-api.music.yandex.net',
                ],
                D = ['*.plus.yandex.'.concat(o.B), 'plus.yandex.'.concat(o.B)],
                M = ['strm.yandex.'.concat(o.B), 'strm.yandex.net', '*.strm.yandex.net'],
                U = ['mc.yandex.'.concat(o.B), ...D],
                W = ['storage.mds.yandex.net'],
                z = ['music.yandex.'.concat(o.B), '*.music.yandex.'.concat(o.B), '*.music.yandex.'.concat(o.B, ':8080'), 'blob:'],
                _ = ['widget.afisha.yandex.'.concat(o.B)],
                q = ['https://market.yandex.ru', 'https://*.market.yandex.ru'],
                N = ['passport.yandex.'.concat(o.B), 'sso.passport.yandex.'.concat(o.B), 'sso.ya.'.concat(o.B)],
                V = [
                    '*.yandex.'.concat(o.B),
                    '*.yandex.net',
                    'wss://*.ynison.music.yandex.'.concat(o.B),
                    'wss://ynison.music.yandex.'.concat(o.B),
                    ...E,
                    'https://api.events.plus.yandex.net',
                ],
                Y = ['yandex.'.concat(o.B), '*.s3.yandex.net', 'static-maps.yandex.'.concat(o.B)],
                H = 'yastatic-net.ru',
                K = (0, l.P)(L, n.q, o.B),
                O = (0, l.P)(F, n.q, o.B),
                G = (0, l.P)(M, n.q, o.B),
                j = (0, l.P)(['avatars.yandex.net'], n.q, o.B),
                Q = (0, l.P)(U, [...n.q, 'md'], o.B),
                X = (0, l.P)(z, n.q, o.B),
                Z = (0, l.P)(_, n.q, o.B),
                $ = (0, l.P)(N, n.q, o.B),
                J = (0, l.P)(V, n.q, o.B),
                ee = (0, l.P)(Y, n.q, o.B),
                et = (0, l.P)(E, n.q, o.B),
                es = (0, l.P)(['frontend.vh.yandex.ru'], n.q, o.B),
                ea = (0, l.P)(D, n.q, o.B),
                ei = () => ({
                    [h]: y([h])[h],
                    [S]: [...p([S])[S], r.Lz],
                    [B]: [...p([B])[B], ...u([B])[B], ...m([B])[B], ...k()[B], ...Q, ...R()[B], ...et, ...es, H],
                    [T]: [...p([T])[T], ...g([T])[T], ...k()[T], ...R()[T], H],
                    [x]: [...p([x])[x], ...k()[x], ...c()[x], ...j, ...Q, ...W, b, ...R()[x], ...ee, H],
                    [A]: [...p([A])[A], ...d([A])[A], b, ...G, ...O, ...R()[A], H],
                    [f]: [...p([f])[f], ...J, ...R()[f], H],
                    [P]: [...K, b, ...et, r.Lz, ...Q, ...Z, ...q, ...R()[P], ...$, ...ea, 'https://lumen.yandex.ru'],
                    [C]: [b, ...Q],
                    [I]: [...X],
                    [v]: y([v])[v],
                    [w]: [...p([w])[w], ...k()[w], H],
                    'report-uri': ['https://csp.yandex.net/csp?from=web2_0&project=music'],
                    'frame-ancestors': ["'self'"],
                });
        },
        71673: (e, t, s) => {
            s.d(t, { P: () => i });
            var a = s(90887);
            let i = (e, t, s) => {
                let i = [];
                for (let r of e)
                    if (r.includes(s))
                        for (let e of t) {
                            let t = (0, a.r)(r, e, s);
                            i.push(t);
                        }
                    else i.push(r);
                return i;
            };
        },
        71872: (e, t, s) => {
            s.d(t, { Lz: () => a, ov: () => i });
            let a = ''.concat('yandexmusic', ':'),
                i = ''.concat(a, '//');
        },
        78634: (e, t, s) => {
            s.d(t, { q: () => a });
            let a = Object.values(s(87758).r);
        },
        87758: (e, t, s) => {
            var a;
            (s.d(t, { r: () => a }),
                (function (e) {
                    ((e.RU = 'ru'), (e.COM = 'com'), (e.KZ = 'kz'), (e.BY = 'by'), (e.UZ = 'uz'));
                })(a || (a = {})));
        },
    },
]);
