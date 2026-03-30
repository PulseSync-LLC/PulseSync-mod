(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4640],
    {
        558: (t, e, s) => {
            'use strict';
            s.d(e, { Y: () => a });
            var i = s(96559);
            class a {
                getStore() {
                    return this.store;
                }
                constructor(t) {
                    (0, i._)(this, 'store', void 0), (this.store = t);
                }
            }
        },
        2936: (t, e, s) => {
            'use strict';
            s.d(e, { w: () => r });
            var i = s(96559),
                a = s(53676),
                n = s(77220);
            class r extends n.X {
                async getData(t, e) {
                    return (
                        await this.httpClient.get(
                            'labels/'.concat(t.labelId),
                            this.createHttpOptions({ timeoutKey: 'getData', params: t, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                async getAlbums(t, e) {
                    return (
                        await this.httpClient.get(
                            'labels/'.concat(t.labelId, '/albums'),
                            this.createHttpOptions({
                                timeoutKey: 'getAlbums',
                                params: t,
                                signal: null == e ? void 0 : e.signal,
                                searchParams: (0, a.P)({ page: t.page, pageSize: t.pageSize, sortBy: t.sortBy, sortOrder: t.sortOrder }),
                            }),
                        )
                    ).json();
                }
                async getArtists(t, e) {
                    return (
                        await this.httpClient.get(
                            'labels/'.concat(t.labelId, '/artists'),
                            this.createHttpOptions({
                                timeoutKey: 'getArtists',
                                params: t,
                                signal: null == e ? void 0 : e.signal,
                                searchParams: (0, a.P)({ page: t.page, pageSize: t.pageSize }),
                            }),
                        )
                    ).json();
                }
                constructor(t, e) {
                    super(t, e), (0, i._)(this, 'httpClient', void 0), (0, i._)(this, 'config', void 0), (this.httpClient = t), (this.config = e);
                }
            }
        },
        3327: (t, e, s) => {
            'use strict';
            s.d(e, { u: () => r });
            var i = s(96559),
                a = s(53676),
                n = s(77220);
            class r extends n.X {
                async getCollectionKidsTracksLiked(t, e) {
                    return (
                        await this.httpClient.get(
                            'landing-blocks/collection/kids/tracks-liked',
                            this.createHttpOptions({
                                timeoutKey: 'getCollectionKidsTracksLiked',
                                params: t,
                                signal: null == e ? void 0 : e.signal,
                                searchParams: (0, a.P)({ page: t.page, pageSize: t.pageSize }),
                            }),
                        )
                    ).json();
                }
                async getCollectionKidsPlaylistsLiked(t, e) {
                    return (
                        await this.httpClient.get(
                            'landing-blocks/collection/kids/playlists-liked',
                            this.createHttpOptions({
                                timeoutKey: 'getCollectionKidsPlaylistsLiked',
                                params: t,
                                signal: null == e ? void 0 : e.signal,
                                searchParams: (0, a.P)({ page: t.page, pageSize: t.pageSize }),
                            }),
                        )
                    ).json();
                }
                async getCollectionKidsAlbumsLiked(t, e) {
                    return (
                        await this.httpClient.get(
                            'landing-blocks/collection/kids/albums-liked',
                            this.createHttpOptions({
                                timeoutKey: 'getCollectionKidsAlbumsLiked',
                                params: t,
                                signal: null == e ? void 0 : e.signal,
                                searchParams: (0, a.P)({ page: t.page, pageSize: t.pageSize }),
                            }),
                        )
                    ).json();
                }
                constructor(t, e) {
                    super(t, e), (0, i._)(this, 'httpClient', void 0), (0, i._)(this, 'config', void 0), (this.httpClient = t), (this.config = e);
                }
            }
        },
        3463: (t, e, s) => {
            'use strict';
            s.d(e, { s: () => n });
            var i = s(96559),
                a = s(77220);
            class n extends a.X {
                async getTriggers(t, e) {
                    return (
                        await this.httpClient.post(
                            'dynamic-pages/trigger/polling',
                            this.createHttpOptions({ timeoutKey: 'getTriggers', params: t, json: { anchorIds: t.anchorIds }, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                async getTrigger(t, e) {
                    return (
                        await this.httpClient.get(
                            'dynamic-pages/trigger/polling/'.concat(t.anchorId),
                            this.createHttpOptions({ timeoutKey: 'getTrigger', params: t, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                async shown(t, e) {
                    await this.httpClient.post(
                        'dynamic-pages/trigger/shown',
                        this.createHttpOptions({
                            timeoutKey: 'shown',
                            params: t,
                            json: { anchorIds: t.anchorIds, screenId: t.screenId },
                            signal: null == e ? void 0 : e.signal,
                        }),
                    );
                }
                async action(t, e) {
                    await this.httpClient.post(
                        'dynamic-pages/trigger/action',
                        this.createHttpOptions({
                            timeoutKey: 'action',
                            params: t,
                            json: { anchorIds: t.anchorIds, screenId: t.screenId, actionId: t.actionId },
                            signal: null == e ? void 0 : e.signal,
                        }),
                    );
                }
                async getTriggersV2(t, e) {
                    return (
                        await this.httpClient.post(
                            'dynamic-pages/v2/trigger/polling',
                            this.createHttpOptions({ timeoutKey: 'getTriggers', params: t, json: { anchorIds: t.anchorIds }, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                async shownV2(t, e) {
                    await this.httpClient.post(
                        'dynamic-pages/v2/trigger/shown',
                        this.createHttpOptions({
                            timeoutKey: 'shown',
                            params: t,
                            json: { anchorIds: t.anchorIds, feedbackToken: t.feedbackToken },
                            signal: null == e ? void 0 : e.signal,
                        }),
                    );
                }
                async actionV2(t, e) {
                    await this.httpClient.post(
                        'dynamic-pages/v2/trigger/action',
                        this.createHttpOptions({
                            timeoutKey: 'action',
                            params: t,
                            json: { anchorIds: t.anchorIds, actionId: t.actionId, feedbackToken: t.feedbackToken },
                            signal: null == e ? void 0 : e.signal,
                        }),
                    );
                }
                constructor(t, e) {
                    super(t, e), (0, i._)(this, 'httpClient', void 0), (0, i._)(this, 'config', void 0), (this.httpClient = t), (this.config = e);
                }
            }
        },
        6556: (t, e, s) => {
            'use strict';
            s.d(e, { J: () => a });
            var i = s(8171);
            let a = (t) => {
                let e = t.resources.musicExternalApi.timeouts;
                return (
                    (t.resources.musicExternalApi.defaultTimeout = i.nJ),
                    (t.resources.musicExternalApi.timeouts = (0, i.ne)(e, [{ type: 'override', value: i.nJ, conditionFn: (t) => t < i.nJ }])),
                    t
                );
            };
        },
        8171: (t, e, s) => {
            'use strict';
            s.d(e, { nJ: () => a, Aj: () => i, LE: () => c, ne: () => l });
            let i = 2e3,
                a = 1e4;
            var n = s(98388),
                r = s(59955),
                o = s(21863);
            let l = (t, e) => {
                    let s = (0, n.A)(t);
                    return (
                        Object.values(s).forEach((t) => {
                            t &&
                                Object.keys(t).forEach((s) => {
                                    let i = e.reduce(
                                        (t, e) => {
                                            let { type: s, value: i, conditionFn: a = () => !0 } = e;
                                            if (!a(t)) return t;
                                            switch (s) {
                                                case 'sum':
                                                    return t + i;
                                                case 'multiply':
                                                    return t * i;
                                                case 'devide':
                                                    return t / i;
                                                case 'override':
                                                    return i;
                                                default:
                                                    return t;
                                            }
                                        },
                                        (0, r.A)(t, [s]),
                                    );
                                    (0, o.A)(t, [s], i);
                                });
                        }),
                        s
                    );
                },
                c = l(
                    {
                        redAlertResource: { getRedAlerts: i },
                        rotorResource: {
                            getStationInfo: 180,
                            sessionNew: i,
                            sessionTracks: i,
                            sessionFeedback: 450,
                            sessionFeedbacks: i,
                            sessionsFeedbacks: i,
                            waveLast: 170,
                            waveSettings: 180,
                            waveLastReset: 30,
                        },
                        adsResource: { saveAds: 200 },
                        accountResource: { experiments: 130, experimentsDetails: 600, settings: 190, about: 600 },
                        albumsResource: {
                            getAlbumWithTracksIds: 5e3,
                            getAlbumWithRichTracks: 5e3,
                            getDisclaimer: 150,
                            getTrailer: i,
                            getRelatedContent: 1e3,
                            getAlbums: 1e3,
                            getSimilarEntities: i,
                            getExternalStreamingLinks: i,
                        },
                        artistsResource: {
                            getArtistTracks: 650,
                            getArtistTrackIds: 310,
                            getSafeDirectAlbums: 210,
                            getBriefInfo: 600,
                            getSimilarArtists: 90,
                            getConcerts: 100,
                            getFamiliarYouInfo: i,
                            getFamiliarYou: 500,
                            getDisclaimer: 150,
                            getTrailer: i,
                            getInfo: i,
                            getSkeleton: i,
                            getAboutArtist: i,
                            getClips: i,
                            getDonation: i,
                            getArtistLinks: i,
                        },
                        availabilityResource: { getAvailabilityTracks: 500 },
                        clipsResource: { getClip: 2e3, getCredits: 200, getDisclaimer: i, getClipsWillLike: i },
                        chartResource: { getChartPodcasts: 2e3, getChartPodcastsCategory: 800 },
                        dynamicPagesResource: { getTriggers: 3e3, getTrigger: 3e3, shown: 3e3, action: 3e3 },
                        filtersResource: { getTracksFilters: i, getFilterName: i },
                        libraryResource: { getAllIds: 260 },
                        searchResource: { getInstantMixedSearch: 1e3, sendFeedback: 170 },
                        searchPlaylistResource: { getTrackIds: 2e3 },
                        siteMapResource: { link: i },
                        slidesResource: { getUserSlides: 500, getArtistSlides: 500, getPodcastSlides: 500, getSpecialSlides: 500, getKidsSlides: 500 },
                        topResource: { getTopByGenre: 1e3 },
                        tracksResource: {
                            getStorageData: 140,
                            getTracksMeta: 2700,
                            getDisclaimer: 150,
                            getFullInfoTrack: 600,
                            getFullDescriptionTrack: 300,
                            getCredits: 400,
                            getLyrics: 80,
                            getTrailer: i,
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
                            changePlaylistTitle: i,
                            changePlaylistDescription: i,
                            uploadPlaylistCover: i,
                            deletePlaylist: i,
                            getPlaylistTrailer: i,
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
                            getLikedClips: i,
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
                        personalResource: { getTopArtists: i },
                        playlistResource: { getPlaylist: 1e3, getSimilarEntities: i },
                        playlistsResource: { getPlaylists: i, getPlaylistPersonal: 1e3 },
                        landingResource: { getSkeleton: 5e3, getBlock: i, getSpecialHeader: 500 },
                        landingBlocksResource: { getCollectionKidsTracksLiked: i, getCollectionKidsPlaylistsLiked: i, getCollectionKidsAlbumsLiked: i },
                        landing3Resource: { getMetatags: i, getChart: i },
                        loaderResource: { getUploadUrl: i },
                        metatagsResource: { getMetatagById: i },
                        pinResource: { pinAlbum: i, unpinAlbum: i, pinPlaylist: i, unpinPlaylist: i, pinArtist: i, unpinArtist: i, pinWave: i, unpinWave: i },
                        pinsResource: { getPins: i },
                        getFileInfoResource: { getFileInfo: i, getByteRange: i },
                        tagResource: { getPlaylistIds: i },
                        feedResource: { getPromotionsById: i, getWizardGenres: 1e3, getWizardArtistsByGenre: 1e3, finishWizard: 1e3 },
                        musicHistoryResource: { getMusicHistory: i, getMusicHistoryItems: i },
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
                        donationResource: { getAlbumDonations: i },
                        prefixlessResource: { uploadFile: 4e5, reportForAlbumPromo: i, getLyricsText: i },
                        offersResource: { getCompositeOffers: i },
                        afterTrackResource: { getAfterTrack: i },
                        ugcResource: { changeTrack: 200 },
                        collectionResource: { sync: 1e3 },
                        disclaimersResource: { getDisclaimers: i },
                        familyResource: { getInviteInfo: i, acceptInvite: i },
                        childrenLandingResource: { getSkeleton: 1e3, getEditorialPlaylist: 200, getEditorialAlbum: 200 },
                        promoResource: { getPromoAlbumInfo: i, getAlbumCpaId: i, sendFeedback: i },
                        telemetryResouce: { log: i, perfLog: i },
                        labelsResource: { getData: i, getAlbums: i, getArtists: i },
                        concertsResource: { getTabConfig: i, getFeed: i, getInfo: i, getSkeleton: i },
                        radioStreamResource: { getAvailableList: i, getByRadioId: i },
                        radioStationsResource: {
                            getAll: i,
                            getStationBySlug: i,
                            getStreamBySlug: i,
                            getStreamsBySlugs: i,
                            getStreamUrlBySlug: i,
                            getStreamWidgetsBySlug: i,
                            getRegions: i,
                            getRegionBySlug: i,
                            getStreamsByRegion: i,
                            getGenres: i,
                            getStationsByGenre: i,
                            getBlocksForYou: i,
                            getSimilar: i,
                            getCollectionStations: i,
                            addCollectionStations: i,
                            getCollectionTracks: i,
                            addCollectionTracks: i,
                            getCollectionTracksIds: i,
                            bulkDeleteCollectionTracks: i,
                            bulkDeleteCollectionStations: i,
                            getCollectionStationsSlugs: i,
                            getStreamReactions: i,
                            sendStreamReactions: i,
                            search: i,
                            getStationsListenersCount: i,
                            sendRecommendationsRecordEvent: i,
                            getRecentlyPlayedTracks: i,
                        },
                        complaintResource: { sendComplaint: i, getComplaintsReasons: i },
                        importResource: {
                            getStatus: i,
                            getActiveImportsList: i,
                            spotifyAuth: i,
                            spotifyCallback: i,
                            appleMusicCreate: i,
                            youtubeMusicAuth: i,
                            youtubeMusicCallback: i,
                            vkImport: i,
                            anghamiImport: i,
                        },
                        partnersResource: { getAccountInfo: i, getMajors: i, scheduleReport: i },
                        wordsResource: { cards: i, cardsFeedback: i },
                        wheelResource: { wheelNew: i },
                    },
                    [
                        { type: 'override', value: 200, conditionFn: (t) => t < 200 },
                        { type: 'multiply', value: 1.5, conditionFn: (t) => t >= 1e3 },
                        { type: 'multiply', value: 2, conditionFn: (t) => t < 1e3 },
                        { type: 'sum', value: 200 },
                    ],
                );
        },
        10560: (t, e, s) => {
            'use strict';
            s.d(e, { z: () => r });
            var i = s(96559),
                a = s(53676),
                n = s(77220);
            class r extends n.X {
                async saveAds(t, e) {
                    return (
                        await this.httpClient.post(
                            'ads/save-ads',
                            this.createHttpOptions({
                                timeoutKey: 'saveAds',
                                params: t,
                                signal: null == e ? void 0 : e.signal,
                                searchParams: (0, a.P)({ from: t.from, trackId: t.trackId, type: t.type }),
                            }),
                        )
                    ).json();
                }
                constructor(t, e) {
                    super(t, e), (0, i._)(this, 'httpClient', void 0), (0, i._)(this, 'config', void 0), (this.httpClient = t), (this.config = e);
                }
            }
        },
        10582: (t, e, s) => {
            'use strict';
            s.d(e, { $: () => r });
            var i = s(96559),
                a = s(77220),
                n = s(53676);
            class r extends a.X {
                async getMetatagById(t, e) {
                    return (
                        await this.httpClient.get(
                            'metatags/'.concat(t.id),
                            this.createHttpOptions({
                                timeoutKey: 'getMetatagById',
                                params: t,
                                searchParams: (0, n.P)({
                                    tracksCount: t.tracksCount,
                                    artistsCount: t.artistsCount,
                                    composersCount: t.composersCount,
                                    albumsCount: t.albumsCount,
                                    promotionsCount: t.promotionsCount,
                                    featuresCount: t.featuresCount,
                                    playlistsCount: t.playlistsCount,
                                    concertsCount: t.concertsCount,
                                    tracksSortBy: t.tracksSortBy,
                                    albumsSortBy: t.albumsSortBy,
                                    withLikesCount: t.withLikesCount,
                                }),
                                signal: null == e ? void 0 : e.signal,
                            }),
                        )
                    ).json();
                }
                async getMetatagAlbums(t, e) {
                    return (
                        await this.httpClient.get(
                            'metatags/'.concat(t.id, '/albums'),
                            this.createHttpOptions({
                                timeoutKey: 'getMetatagAlbums',
                                params: t,
                                searchParams: (0, n.P)({ period: t.period, sortBy: t.sortBy, offset: t.offset, limit: t.limit }),
                                signal: null == e ? void 0 : e.signal,
                            }),
                        )
                    ).json();
                }
                async getMetatagArtists(t, e) {
                    return (
                        await this.httpClient.get(
                            'metatags/'.concat(t.id, '/artists'),
                            this.createHttpOptions({
                                timeoutKey: 'getMetatagArtists',
                                params: t,
                                searchParams: (0, n.P)({ period: t.period, sortBy: t.sortBy, offset: t.offset, limit: t.limit, tracksPerArtist: t.tracksPerArtist }),
                                signal: null == e ? void 0 : e.signal,
                            }),
                        )
                    ).json();
                }
                async getMetatagPlaylists(t, e) {
                    return (
                        await this.httpClient.get(
                            'metatags/'.concat(t.id, '/playlists'),
                            this.createHttpOptions({
                                timeoutKey: 'getMetatagPlaylists',
                                params: t,
                                searchParams: (0, n.P)({ sortBy: t.sortBy, offset: t.offset, limit: t.limit, withLikesCount: t.withLikesCount }),
                                signal: null == e ? void 0 : e.signal,
                            }),
                        )
                    ).json();
                }
                constructor(t, e) {
                    super(t, e), (0, i._)(this, 'httpClient', void 0), (0, i._)(this, 'config', void 0), (this.httpClient = t), (this.config = e);
                }
            }
        },
        12774: (t, e, s) => {
            'use strict';
            s.d(e, { T: () => r });
            var i = s(96559),
                a = s(77220),
                n = s(53676);
            class r extends a.X {
                async getPlaylist(t, e) {
                    return (
                        await this.httpClient.get(
                            'playlist/'.concat(t.playlistUuid),
                            this.createHttpOptions({
                                timeoutKey: 'getPlaylist',
                                params: t,
                                searchParams: (0, n.P)({
                                    resumeStream: t.resumeStream,
                                    richTracks: t.richTracks,
                                    trackPlayCounts: t.trackPlayCounts,
                                    withSimilarsLikesCount: t.withSimilarsLikesCount,
                                    page: t.page,
                                    pageSize: t.pageSize,
                                }),
                                signal: null == e ? void 0 : e.signal,
                            }),
                        )
                    ).json();
                }
                async getSimilarEntities(t, e) {
                    return (
                        await this.httpClient.get(
                            'playlist/'.concat(t.playlistUuid, '/similar-entities'),
                            this.createHttpOptions({ timeoutKey: 'getSimilarEntities', params: t, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                constructor(t, e) {
                    super(t, e), (0, i._)(this, 'httpClient', void 0), (0, i._)(this, 'config', void 0), (this.httpClient = t), (this.config = e);
                }
            }
        },
        12979: (t, e, s) => {
            'use strict';
            async function i(t) {
                let { config: e } = await s(94753)('./'.concat(t, '.ts'));
                return e();
            }
            s.d(e, { z: () => i });
        },
        13696: (t, e, s) => {
            'use strict';
            s.d(e, { p: () => n });
            var i = s(96559),
                a = s(77220);
            class n extends a.X {
                async getPlaylistIds(t, e) {
                    return (
                        await this.httpClient.get(
                            'tags/'.concat(t.id, '/playlist-ids'),
                            this.createHttpOptions({ timeoutKey: 'getPlaylistIds', params: t, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                constructor(t, e) {
                    super(t, e), (0, i._)(this, 'httpClient', void 0), (0, i._)(this, 'config', void 0), (this.httpClient = t), (this.config = e);
                }
            }
        },
        13871: (t, e, s) => {
            'use strict';
            s.d(e, { i: () => n });
            var i = s(9348),
                a = s(70755);
            let n = (t, e) => {
                let { cause: s } = t;
                if (((t) => 'object' == typeof t && null !== t && 'response' in t && 'request' in t)(s) || (0, a.N)(s)) {
                    var n;
                    let t = (null == (n = s.request.options) ? void 0 : n.headers) || s.request.originalRequestHeaders;
                    if (t instanceof Headers) {
                        t.set('x-retry-count', String(e));
                        let [s] = (t.get('x-request-id') || (0, i.A)()).split('.');
                        t.set('x-request-id', ''.concat(s, '.').concat(e));
                    }
                }
            };
        },
        14032: (t, e, s) => {
            'use strict';
            s.d(e, { V: () => a, d: () => i });
            let i = (t) => String(t).split(':'),
                a = (t, e) => (e ? [t, e].join(':') : t);
        },
        16068: (t, e, s) => {
            'use strict';
            s.d(e, { H: () => n });
            var i = s(96559),
                a = s(77220);
            class n extends a.X {
                async getDisclaimers(t, e) {
                    return (
                        await this.httpClient.get(
                            'disclaimers',
                            this.createHttpOptions({ timeoutKey: 'getDisclaimers', params: t, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                constructor(t, e) {
                    super(t, e), (0, i._)(this, 'httpClient', void 0), (0, i._)(this, 'config', void 0), (this.httpClient = t), (this.config = e);
                }
            }
        },
        18258: (t, e, s) => {
            'use strict';
            s.d(e, { r: () => r });
            var i = s(96559),
                a = s(86622),
                n = s(91927);
            class r extends n.q {
                info(t, e) {
                    this.maxLogLevel >= a.c.INFO && this.logToConsole(a.c.INFO, t, e);
                }
                debug(t, e) {
                    this.maxLogLevel >= a.c.DEBUG && this.logToConsole(a.c.DEBUG, t, e);
                }
                trace(t, e) {
                    this.maxLogLevel >= a.c.TRACE && this.logToConsole(a.c.TRACE, t, e);
                }
                warn(t, e) {
                    this.maxLogLevel >= a.c.WARNING && this.logToConsole(a.c.WARNING, t, e), this.sendToErrorBooster(a.c.WARNING, t, e);
                }
                error(t, e) {
                    this.maxLogLevel >= a.c.ERROR && this.logToConsole(a.c.ERROR, t, e), this.sendToErrorBooster(a.c.ERROR, t, e);
                }
                log(t, e) {
                    this.logToConsole(a.c.INFO, t, e);
                }
                logToConsole(t, e, s) {
                    if (this.disableLogToConsole) return;
                    let i = a.Q[t];
                    console[i](...this.formatMessage(t, e, s));
                }
                sendToErrorBooster(t, e, s) {
                    window.Ya.Rum.logError({ message: e, level: t, additional: { data: s ? this.obfuscateData({ ...this.additionalData, ...s }) : {} } });
                }
                constructor(t) {
                    super(t), (0, i._)(this, 'disableLogToConsole', void 0), (this.disableLogToConsole = t.disableLogToConsole);
                }
            }
        },
        21220: (t, e, s) => {
            'use strict';
            s.d(e, { q: () => a });
            var i = s(96559);
            class a {
                get(t) {
                    return this.config.get(t);
                }
                set(t, e) {
                    this.config.set(t, e);
                }
                constructor(t) {
                    (0, i._)(this, 'config', void 0), (this.config = t);
                }
            }
        },
        24120: (t, e, s) => {
            'use strict';
            s.d(e, { B: () => n });
            var i = s(96559),
                a = s(77220);
            class n extends a.X {
                async getChartPodcasts(t, e) {
                    return (
                        await this.httpClient.get(
                            'chart/podcasts',
                            this.createHttpOptions({ timeoutKey: 'getChartPodcasts', params: t, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                async getChartPodcastsCategory(t, e) {
                    return (
                        await this.httpClient.get(
                            'chart/podcasts/category/'.concat(t.categoryId),
                            this.createHttpOptions({ timeoutKey: 'getChartPodcastsCategory', params: t, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                constructor(t, e) {
                    super(t, e), (0, i._)(this, 'httpClient', void 0), (0, i._)(this, 'config', void 0), (this.httpClient = t), (this.config = e);
                }
            }
        },
        24252: (t, e, s) => {
            'use strict';
            s.d(e, { e: () => r });
            var i = s(96559),
                a = s(77220),
                n = s(53676);
            class r extends a.X {
                async getPlaylists(t, e) {
                    return (
                        await this.httpClient.get(
                            'playlists',
                            this.createHttpOptions({
                                timeoutKey: 'getPlaylists',
                                params: t,
                                searchParams: (0, n.P)({ resumeStream: t.resumeStream, page: t.page, pageSize: t.pageSize, playlistIds: t.playlistIds }),
                                signal: null == e ? void 0 : e.signal,
                            }),
                        )
                    ).json();
                }
                async getPlaylistPersonal(t, e) {
                    return (
                        await this.httpClient.get(
                            'playlists/personal/'.concat(t.playlistId),
                            this.createHttpOptions({ timeoutKey: 'getPlaylistPersonal', params: t, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                constructor(t, e) {
                    super(t, e), (0, i._)(this, 'httpClient', void 0), (0, i._)(this, 'config', void 0), (this.httpClient = t), (this.config = e);
                }
            }
        },
        25289: (t, e, s) => {
            'use strict';
            s.d(e, { a: () => i.a });
            var i = s(80506);
            s(42520);
        },
        27493: (t, e, s) => {
            'use strict';
            async function i(t) {
                let { config: e } = await s(55256)('./'.concat(t, '.ts'));
                return e();
            }
            s.d(e, { B: () => i });
        },
        29372: (t, e, s) => {
            'use strict';
            s.d(e, { o: () => r });
            var i = s(96559),
                a = s(77220),
                n = s(76898);
            class r extends a.X {
                async pinAlbum(t, e) {
                    let s = (0, n.F)({ id: t.id });
                    return (
                        await this.httpClient.put(
                            'pin/album',
                            this.createHttpOptions({ timeoutKey: 'pinAlbum', params: t, json: s, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                async unpinAlbum(t, e) {
                    let s = (0, n.F)({ id: t.id });
                    return (
                        await this.httpClient.delete(
                            'pin/album',
                            this.createHttpOptions({ timeoutKey: 'unpinAlbum', params: t, json: s, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                async pinPlaylist(t, e) {
                    let s = (0, n.F)({ uid: t.uid, kind: t.kind });
                    return (
                        await this.httpClient.put(
                            'pin/playlist',
                            this.createHttpOptions({ timeoutKey: 'pinPlaylist', params: t, json: s, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                async unpinPlaylist(t, e) {
                    let s = (0, n.F)({ uid: t.uid, kind: t.kind });
                    return (
                        await this.httpClient.delete(
                            'pin/playlist',
                            this.createHttpOptions({ timeoutKey: 'unpinPlaylist', params: t, json: s, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                async pinArtist(t, e) {
                    let s = (0, n.F)({ id: t.id });
                    return (
                        await this.httpClient.put(
                            'pin/artist',
                            this.createHttpOptions({ timeoutKey: 'pinArtist', params: t, json: s, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                async unpinArtist(t, e) {
                    let s = (0, n.F)({ id: t.id });
                    return (
                        await this.httpClient.delete(
                            'pin/artist',
                            this.createHttpOptions({ timeoutKey: 'unpinArtist', params: t, json: s, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                async pinWave(t, e) {
                    let s = (0, n.F)({ seeds: t.seeds });
                    return (
                        await this.httpClient.put(
                            'pin/wave',
                            this.createHttpOptions({ timeoutKey: 'pinWave', params: t, json: s, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                async unpinWave(t, e) {
                    let s = (0, n.F)({ seeds: t.seeds });
                    return (
                        await this.httpClient.delete(
                            'pin/wave',
                            this.createHttpOptions({ timeoutKey: 'unpinWave', params: t, json: s, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                constructor(t, e) {
                    super(t, e), (0, i._)(this, 'httpClient', void 0), (0, i._)(this, 'config', void 0), (this.httpClient = t), (this.config = e);
                }
            }
        },
        29449: (t, e, s) => {
            'use strict';
            s.d(e, { L: () => n });
            var i = s(96559),
                a = s(77220);
            class n extends a.X {
                async getSkeleton(t, e) {
                    return (
                        await this.httpClient.get(
                            'children-landing/category/'.concat(t.categoryId),
                            this.createHttpOptions({ timeoutKey: 'getSkeleton', params: t, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                async getEditorialPlaylist(t, e) {
                    return (
                        await this.httpClient.get(
                            'children-landing/editorial/playlist/'.concat(t.id),
                            this.createHttpOptions({ timeoutKey: 'getEditorialPlaylist', params: t, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                async getEditorialAlbum(t, e) {
                    return (
                        await this.httpClient.get(
                            'children-landing/editorial/album/'.concat(t.id),
                            this.createHttpOptions({ timeoutKey: 'getEditorialAlbum', params: t, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                constructor(t, e) {
                    super(t, e), (0, i._)(this, 'httpClient', void 0), (0, i._)(this, 'config', void 0), (this.httpClient = t), (this.config = e);
                }
            }
        },
        30508: (t, e, s) => {
            'use strict';
            s.d(e, { E: () => r });
            var i = s(96559),
                a = s(77220),
                n = s(76898);
            class r extends a.X {
                async changeTrack(t, e) {
                    return (
                        await this.httpClient.post(
                            'ugc/tracks/'.concat(t.trackId, '/change'),
                            this.createHttpOptions({
                                timeoutKey: 'changeTrack',
                                params: t,
                                json: (0, n.F)({ artist: t.artist, title: t.title }),
                                signal: null == e ? void 0 : e.signal,
                            }),
                        )
                    ).json();
                }
                constructor(t, e) {
                    super(t, e), (0, i._)(this, 'httpClient', void 0), (0, i._)(this, 'config', void 0), (this.httpClient = t), (this.config = e);
                }
            }
        },
        33716: (t, e, s) => {
            'use strict';
            s.d(e, { K: () => r });
            var i = s(96559),
                a = s(77220),
                n = s(53676);
            class r extends a.X {
                async getCompositeOffers(t, e) {
                    var s;
                    let i = (null == (s = t.common) ? void 0 : s.language) || this.config.params.common.language;
                    return (
                        await this.httpClient.get(
                            'proxy/plus-cg-api/offers/composite',
                            this.createHttpOptions({
                                timeoutKey: 'getCompositeOffers',
                                params: t,
                                searchParams: (0, n.P)({ uid: t.uid, target: t.target, features: t.features, language: i }),
                                signal: null == e ? void 0 : e.signal,
                            }),
                        )
                    ).json();
                }
                constructor(t, e) {
                    super(t, e), (0, i._)(this, 'httpClient', void 0), (0, i._)(this, 'config', void 0), (this.httpClient = t), (this.config = e);
                }
            }
        },
        34965: (t, e, s) => {
            'use strict';
            s.d(e, { cm: () => i.c });
            var i = s(86622);
            s(91927);
        },
        35566: (t, e, s) => {
            'use strict';
            s.d(e, { V: () => n });
            var i = s(96559),
                a = s(77220);
            class n extends a.X {
                async getUserSlides(t, e) {
                    return (
                        await this.httpClient.get(
                            'recap-slides/user',
                            this.createHttpOptions({ timeoutKey: 'getUserSlides', params: t, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                async getArtistSlides(t, e) {
                    return (
                        await this.httpClient.get(
                            'recap-slides/artist/'.concat(t.artistId),
                            this.createHttpOptions({ timeoutKey: 'getArtistSlides', params: t, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                async getPodcastSlides(t, e) {
                    return (
                        await this.httpClient.get(
                            'recap-slides/podcast/'.concat(t.podcastId),
                            this.createHttpOptions({ timeoutKey: 'getPodcastSlides', params: t, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                async getSpecialSlides(t, e) {
                    return (
                        await this.httpClient.get(
                            'recap-slides/special/'.concat(t.campaignId),
                            this.createHttpOptions({ timeoutKey: 'getSpecialSlides', params: t, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                async getKidsSlides(t, e) {
                    return (
                        await this.httpClient.get(
                            'recap-slides/kids',
                            this.createHttpOptions({ timeoutKey: 'getKidsSlides', params: t, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                constructor(t, e) {
                    super(t, e), (0, i._)(this, 'httpClient', void 0), (0, i._)(this, 'config', void 0), (this.httpClient = t), (this.config = e);
                }
            }
        },
        36211: (t, e, s) => {
            'use strict';
            s.d(e, { G: () => n, B: () => r });
            var i = s(96559),
                a = s(56258);
            class n {
                async send(t, e) {
                    var s, i, n, r, o, l, c;
                    let { name: u, data: d } = t,
                        p = this.rum._errorSettings,
                        h = this.rum._buildAdditional(p.additional, d),
                        g = this.rum._buildExperiments(null != (c = p.experiments) ? c : []),
                        y = {
                            ...this.rum._vars,
                            '-project': 'music.frontend',
                            '-service': e.service,
                            '-experiments': g,
                            '-yandexuid': p.yandexuid,
                            '-loggedin': p.loggedin,
                            '-referrer': this.rum._getReferrer(p),
                            '-additional': h,
                            '-ts': Date.now(),
                            '-type': 'string',
                            '-name': u,
                            '-value': this.clientType,
                        },
                        m = this.rum._createVarsString(y),
                        v = (null == (s = (i = this.rum).getSetting) ? void 0 : s.call(i, 'reqid')) || '',
                        f = null == (n = (r = this.rum).getSetting) ? void 0 : n.call(r, 'slots'),
                        k = null == (o = (l = this.rum).getSetting) ? void 0 : o.call(l, 'experiments');
                    try {
                        await this.rumResource.sendMetrics({
                            varsString: m,
                            reqid: v,
                            table: 'rum_events',
                            slots: f,
                            experimentsSetting: k,
                            name: u,
                            clientType: this.clientType,
                        });
                    } catch (t) {
                        throw new a.t('Failed to send metrics to RUM', { code: 'E_RUM_METRICS_SEND', cause: t });
                    }
                }
                constructor(t, e, s) {
                    (0, i._)(this, 'clientType', void 0),
                        (0, i._)(this, 'rumResource', void 0),
                        (0, i._)(this, 'rum', void 0),
                        (this.clientType = t),
                        (this.rumResource = e),
                        (this.rum = s);
                }
            }
            class r {
                async send(t, e) {
                    return new Promise((s) => {
                        let i = { [t.name]: { ...t.data } };
                        this.yaMetrika.count(i, e.topLevelParameter), s();
                    });
                }
                constructor(t) {
                    (0, i._)(this, 'yaMetrika', void 0), (this.yaMetrika = t);
                }
            }
        },
        36788: (t, e, s) => {
            'use strict';
            s.d(e, { b: () => r });
            var i = s(96559),
                a = s(53676),
                n = s(77220);
            class r extends n.X {
                async getArtistTracks(t, e) {
                    var s, i;
                    return (
                        await this.httpClient.get(
                            'artists/'.concat(t.artistId, '/tracks'),
                            this.createHttpOptions({
                                timeoutKey: 'getArtistTracks',
                                params: t,
                                signal: null == e ? void 0 : e.signal,
                                searchParams: (0, a.P)({
                                    'sort-by': null == (s = t.sort) ? void 0 : s.sortBy,
                                    'sort-order': null == (i = t.sort) ? void 0 : i.sortOrder,
                                    page: t.page,
                                    pageSize: t.pageSize,
                                }),
                            }),
                        )
                    ).json();
                }
                async getArtistTrackIds(t, e) {
                    return (
                        await this.httpClient.get(
                            'artists/'.concat(t.artistId, '/track-ids'),
                            this.createHttpOptions({
                                timeoutKey: 'getArtistTrackIds',
                                params: t,
                                signal: null == e ? void 0 : e.signal,
                                searchParams: (0, a.P)({ page: t.page, pageSize: t.pageSize }),
                            }),
                        )
                    ).json();
                }
                async getSafeDirectAlbums(t, e) {
                    var s, i;
                    return (
                        await this.httpClient.get(
                            'artists/'.concat(t.artistId, '/safe-direct-albums'),
                            this.createHttpOptions({
                                timeoutKey: 'getSafeDirectAlbums',
                                params: t,
                                signal: null == e ? void 0 : e.signal,
                                searchParams: (0, a.P)({
                                    'sort-by': null == (s = t.sort) ? void 0 : s.sortBy,
                                    'sort-order': null == (i = t.sort) ? void 0 : i.sortOrder,
                                    limit: t.limit,
                                }),
                            }),
                        )
                    ).json();
                }
                async getBriefInfo(t, e) {
                    return (
                        await this.httpClient.get(
                            'artists/'.concat(t.artistId, '/brief-info'),
                            this.createHttpOptions({
                                timeoutKey: 'getBriefInfo',
                                params: t,
                                signal: null == e ? void 0 : e.signal,
                                searchParams: (0, a.P)({
                                    popularTracksCount: t.popularTracksCount,
                                    useClipDataFormat: t.useClipDataFormat,
                                    discographyBlockEnabled: t.discographyBlockEnabled,
                                    fetchPlaylistLikesCounts: t.fetchPlaylistLikesCounts,
                                }),
                            }),
                        )
                    ).json();
                }
                async getAboutArtist(t, e) {
                    return (
                        await this.httpClient.get(
                            'artists/'.concat(t.artistId, '/about-artist'),
                            this.createHttpOptions({ timeoutKey: 'getAboutArtist', params: t, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                async getSimilarArtists(t, e) {
                    return (
                        await this.httpClient.get(
                            'artists/'.concat(t.artistId, '/similar'),
                            this.createHttpOptions({ timeoutKey: 'getSimilarArtists', params: t, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                async getDiscographyAlbums(t, e) {
                    var s, i;
                    return (
                        await this.httpClient.get(
                            'artists/'.concat(t.artistId, '/discography-albums'),
                            this.createHttpOptions({
                                timeoutKey: 'getDiscographyAlbums',
                                params: t,
                                signal: null == e ? void 0 : e.signal,
                                searchParams: (0, a.P)({
                                    page: t.page,
                                    pageSize: t.pageSize,
                                    'sort-by': null == (s = t.sort) ? void 0 : s.sortBy,
                                    'sort-order': null == (i = t.sort) ? void 0 : i.sortOrder,
                                }),
                            }),
                        )
                    ).json();
                }
                async getDirectAlbums(t, e) {
                    var s, i;
                    return (
                        await this.httpClient.get(
                            'artists/'.concat(t.artistId, '/direct-albums'),
                            this.createHttpOptions({
                                timeoutKey: 'getDirectAlbums',
                                params: t,
                                signal: null == e ? void 0 : e.signal,
                                searchParams: (0, a.P)({
                                    page: t.page,
                                    pageSize: t.pageSize,
                                    'sort-by': null == (s = t.sort) ? void 0 : s.sortBy,
                                    'sort-order': null == (i = t.sort) ? void 0 : i.sortOrder,
                                }),
                            }),
                        )
                    ).json();
                }
                async getAlsoAlbums(t, e) {
                    var s, i;
                    return (
                        await this.httpClient.get(
                            'artists/'.concat(t.artistId, '/also-albums'),
                            this.createHttpOptions({
                                timeoutKey: 'getAlsoAlbums',
                                params: t,
                                signal: null == e ? void 0 : e.signal,
                                searchParams: (0, a.P)({
                                    page: t.page,
                                    pageSize: t.pageSize,
                                    'sort-by': null == (s = t.sort) ? void 0 : s.sortBy,
                                    'sort-order': null == (i = t.sort) ? void 0 : i.sortOrder,
                                }),
                            }),
                        )
                    ).json();
                }
                async getConcerts(t, e) {
                    let s = await this.httpClient.get(
                        'artists/'.concat(t.artistId, '/concerts'),
                        this.createHttpOptions({
                            timeoutKey: 'getConcerts',
                            params: { ...t, common: { ...t, withoutInvocationInfo: !1 } },
                            signal: null == e ? void 0 : e.signal,
                        }),
                    );
                    return (await s.json()).result;
                }
                async getFamiliarYouInfo(t, e) {
                    return (
                        await this.httpClient.get(
                            'artists/'.concat(t.artistId, '/familiar-you/info'),
                            this.createHttpOptions({
                                timeoutKey: 'getFamiliarYouInfo',
                                params: t,
                                signal: null == e ? void 0 : e.signal,
                                searchParams: (0, a.P)({ withWaveInfo: t.withWaveInfo, withCollectionInfo: t.withCollectionInfo }),
                            }),
                        )
                    ).json();
                }
                async getFamiliarYou(t, e) {
                    return (
                        await this.httpClient.get(
                            'artists/'.concat(t.artistId, '/familiar-you'),
                            this.createHttpOptions({
                                timeoutKey: 'getFamiliarYou',
                                params: t,
                                signal: null == e ? void 0 : e.signal,
                                searchParams: (0, a.P)({
                                    waveTracksLimit: t.waveTracksLimit,
                                    collectionTracksLimit: t.collectionTracksLimit,
                                    collectionAlbumsLimit: t.collectionAlbumsLimit,
                                    withIds: t.withIds,
                                }),
                            }),
                        )
                    ).json();
                }
                async getDisclaimer(t, e) {
                    return (
                        await this.httpClient.get(
                            'artists/'.concat(t.artistId, '/disclaimer'),
                            this.createHttpOptions({ timeoutKey: 'getDisclaimer', params: t, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                async getTrailer(t, e) {
                    return (
                        await this.httpClient.get(
                            'artists/'.concat(t.artistId, '/trailer'),
                            this.createHttpOptions({ timeoutKey: 'getTrailer', params: t, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                async getInfo(t, e) {
                    return (
                        await this.httpClient.get(
                            'artists/'.concat(t.artistId, '/info'),
                            this.createHttpOptions({ timeoutKey: 'getInfo', params: t, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                async getSkeleton(t, e) {
                    return (
                        await this.httpClient.get(
                            'artists/'.concat(t.artistId, '/skeletons/').concat(t.skeletonId),
                            this.createHttpOptions({ timeoutKey: 'getSkeleton', params: t, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                async getClips(t, e) {
                    return (
                        await this.httpClient.get(
                            'artists/'.concat(t.artistId, '/blocks/artist-clips'),
                            this.createHttpOptions({
                                timeoutKey: 'getClips',
                                params: t,
                                signal: null == e ? void 0 : e.signal,
                                searchParams: (0, a.P)({ page: t.page, pageSize: t.pageSize }),
                            }),
                        )
                    ).json();
                }
                async getDonation(t, e) {
                    return (
                        await this.httpClient.get(
                            'artists/'.concat(t.artistId, '/blocks/artist-donation'),
                            this.createHttpOptions({ timeoutKey: 'getDonation', params: t, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                async getArtistLinks(t, e) {
                    return (
                        await this.httpClient.get(
                            'artists/'.concat(t.artistId, '/artist-links'),
                            this.createHttpOptions({ timeoutKey: 'getArtistLinks', params: t, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                constructor(t, e) {
                    super(t, e), (0, i._)(this, 'httpClient', void 0), (0, i._)(this, 'config', void 0), (this.httpClient = t), (this.config = e);
                }
            }
        },
        37934: (t, e, s) => {
            'use strict';
            s.d(e, { p: () => o });
            var i = s(96559),
                a = s(77220),
                n = s(76898),
                r = s(53676);
            class o extends a.X {
                async getInstantMixedSearch(t, e) {
                    return (
                        await this.httpClient.get(
                            'search/instant/mixed',
                            this.createHttpOptions({
                                timeoutKey: 'getInstantMixedSearch',
                                params: t,
                                searchParams: (0, r.P)({
                                    text: t.text,
                                    type: t.type,
                                    page: t.page,
                                    filter: t.filter,
                                    pageSize: t.pageSize,
                                    nocorrect: t.nocorrent,
                                    onlyCounters: t.onlyCounters,
                                    withLikesCount: t.withLikesCount,
                                    from: t.from,
                                    inputType: t.inputType,
                                    vocalTypes: t.vocalTypes,
                                    releaseYears: t.releaseYears,
                                    epochs: t.epochs,
                                    moods: t.moods,
                                    activities: t.activities,
                                    genres: t.genres,
                                    lyricsLanguages: t.lyricsLanguages,
                                    moodScoresFrom: t.moodScoresFrom,
                                    moodScoresTo: t.moodScoresTo,
                                    activityScoresFrom: t.activityScoresFrom,
                                    activityScoresTo: t.activityScoresTo,
                                    withBestResults: t.withBestResults,
                                }),
                                signal: null == e ? void 0 : e.signal,
                            }),
                        )
                    ).json();
                }
                async sendFeedback(t, e) {
                    let s = (0, n.F)({
                        blockType: t.blockType,
                        entityId: t.entityId,
                        timestamp: t.timestamp,
                        blockPosition: t.blockPosition,
                        position: t.position,
                        searchRequestId: t.searchRequestId,
                        query: t.query,
                        page: t.page,
                        clickType: t.clickType,
                        clientNow: t.clientNow,
                        absolutePosition: t.absoluteBlockPosition,
                        clientSearchContext: t.clientSearchContext,
                        searchType: t.searchType,
                    });
                    return (
                        await this.httpClient.post(
                            'search/feedback',
                            this.createHttpOptions({ timeoutKey: 'sendFeedback', params: t, json: s, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                constructor(t, e) {
                    super(t, e), (0, i._)(this, 'httpClient', void 0), (0, i._)(this, 'config', void 0), (this.httpClient = t), (this.config = e);
                }
            }
        },
        38689: (t, e, s) => {
            'use strict';
            s.d(e, { D: () => r });
            var i = s(96559),
                a = s(77220),
                n = s(53676);
            class r extends a.X {
                async getShelfRecentlyPlayed(t, e) {
                    return (
                        await this.httpClient.get(
                            'non-music/bookshelf/recently-played',
                            this.createHttpOptions({
                                timeoutKey: 'getShelfRecentlyPlayed',
                                params: t,
                                signal: null == e ? void 0 : e.signal,
                                searchParams: (0, n.P)({ page: null == t ? void 0 : t.page, pageSize: null == t ? void 0 : t.pageSize }),
                            }),
                        )
                    ).json();
                }
                async getShelfLiked(t, e) {
                    return (
                        await this.httpClient.get(
                            'non-music/bookshelf/liked',
                            this.createHttpOptions({
                                timeoutKey: 'getShelfLiked',
                                params: t,
                                signal: null == e ? void 0 : e.signal,
                                searchParams: (0, n.P)({ page: null == t ? void 0 : t.page, pageSize: null == t ? void 0 : t.pageSize }),
                            }),
                        )
                    ).json();
                }
                async getPlaylists(t, e) {
                    return (
                        await this.httpClient.get(
                            'non-music/editorial/playlist/'.concat(t.categoryId, '/'),
                            this.createHttpOptions({ timeoutKey: 'getPlaylists', params: t, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                async getNewEpisodes(t, e) {
                    return (
                        await this.httpClient.get(
                            'non-music/new-episodes',
                            this.createHttpOptions({ timeoutKey: 'getNewEpisodes', params: t, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                async getEditorialAlbums(t, e) {
                    return (
                        await this.httpClient.get(
                            'non-music/editorial/album/'.concat(t.id),
                            this.createHttpOptions({ timeoutKey: 'getEditorialAlbums', params: t, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                async getCategory(t, e) {
                    return (
                        await this.httpClient.get(
                            'non-music/category/'.concat(t.categoryId),
                            this.createHttpOptions({ timeoutKey: 'getCategory', params: t, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                async getCategoryAlbums(t, e) {
                    return (
                        await this.httpClient.get(
                            'non-music/category/'.concat(t.id, '/albums'),
                            this.createHttpOptions({ timeoutKey: 'getCategoryAlbums', params: t, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                constructor(t, e) {
                    super(t, e), (0, i._)(this, 'httpClient', void 0), (0, i._)(this, 'config', void 0), (this.httpClient = t), (this.config = e);
                }
            }
        },
        40080: (t, e, s) => {
            'use strict';
            s.d(e, { d: () => l });
            var i = s(96559),
                a = s(77534),
                n = s(71020),
                r = s(53676),
                o = s(77220);
            class l extends o.X {
                async getLikedAlbums(t, e) {
                    return (
                        await this.httpClient.get(
                            'users/'.concat(t.userId, '/likes/albums/page'),
                            this.createHttpOptions({
                                timeoutKey: 'getLikedAlbums',
                                params: t,
                                searchParams: (0, r.P)({
                                    rich: !0,
                                    page: t.page,
                                    pageSize: t.pageSize,
                                    'sort-by': t.sortBy,
                                    'sort-order': t.sortOrder,
                                    metaType: t.metaType,
                                }),
                                signal: null == e ? void 0 : e.signal,
                            }),
                        )
                    ).json();
                }
                async getLikedArtists(t, e) {
                    return (
                        await this.httpClient.get(
                            'users/'.concat(t.userId, '/likes/artists/page'),
                            this.createHttpOptions({
                                timeoutKey: 'getLikedArtists',
                                params: t,
                                searchParams: (0, r.P)({
                                    page: t.page,
                                    pageSize: t.pageSize,
                                    'sort-by': t.sortBy,
                                    'sort-order': t.sortOrder,
                                    withTimestamps: t.withTimestamps,
                                }),
                                signal: null == e ? void 0 : e.signal,
                            }),
                        )
                    ).json();
                }
                async getDislikedArtists(t, e) {
                    return (
                        await this.httpClient.get(
                            'users/'.concat(t.userId, '/dislikes/artists'),
                            this.createHttpOptions({
                                timeoutKey: 'getDislikedArtists',
                                params: t,
                                searchParams: (0, r.P)({ 'sort-by': t.sortBy, 'sort-order': t.sortOrder }),
                                signal: null == e ? void 0 : e.signal,
                            }),
                        )
                    ).json();
                }
                async getLikedPlaylists(t, e) {
                    let s = await this.httpClient.get(
                            'users/'.concat(t.userId, '/likes/playlists'),
                            this.createHttpOptions({
                                timeoutKey: 'getLikedPlaylists',
                                params: { ...t, common: { ...t.common, withoutInvocationInfo: !1 } },
                                searchParams: (0, r.P)({
                                    page: t.page,
                                    pageSize: t.pageSize,
                                    'sort-by': t.sortBy,
                                    'sort-order': t.sortOrder,
                                    playlistMetaType: t.playlistMetaType,
                                    withTracks: t.withTracks,
                                }),
                                signal: null == e ? void 0 : e.signal,
                            }),
                        ),
                        i = await s.json();
                    return { likedPlaylists: i.result, pager: i.pager };
                }
                async getPlaylistsKinds(t, e) {
                    return (
                        await this.httpClient.get(
                            'users/'.concat(t.userId, '/playlists/list/kinds'),
                            this.createHttpOptions({
                                timeoutKey: 'getPlaylistsKinds',
                                params: t,
                                searchParams: (0, r.P)({ addPlaylistWithLikes: t.addPlaylistWithLikes }),
                                signal: null == e ? void 0 : e.signal,
                            }),
                        )
                    ).json();
                }
                async createPlaylist(t, e) {
                    return (
                        await this.httpClient.post(
                            'users/'.concat(t.userId, '/playlists/create'),
                            this.createHttpOptions({
                                timeoutKey: 'createPlaylist',
                                params: t,
                                searchParams: (0, r.P)({ visibility: t.visibility, title: t.title, description: t.description }),
                                signal: null == e ? void 0 : e.signal,
                            }),
                        )
                    ).json();
                }
                async getPlaylistsByKinds(t, e) {
                    return (
                        await this.httpClient.post(
                            'users/'.concat(t.userId, '/playlists'),
                            this.createHttpOptions({
                                timeoutKey: 'getPlaylistsByKinds',
                                params: t,
                                searchParams: (0, r.P)({ kinds: t.kinds, withLikesCount: t.withLikesCount, withTracks: t.withTracks }),
                                signal: null == e ? void 0 : e.signal,
                            }),
                        )
                    ).json();
                }
                async getCreatedPlaylists(t, e) {
                    return (
                        await this.httpClient.get(
                            'users/'.concat(t.userId, '/playlists/list'),
                            this.createHttpOptions({
                                timeoutKey: 'getCreatedPlaylists',
                                params: t,
                                searchParams: (0, r.P)({
                                    page: t.page,
                                    pageSize: t.pageSize,
                                    'sort-by': t.sortBy,
                                    'sort-order': t.sortOrder,
                                    withLikesCount: t.withLikesCount,
                                }),
                                signal: null == e ? void 0 : e.signal,
                            }),
                        )
                    ).json();
                }
                async getPlaylistWithRichTracks(t, e) {
                    return (
                        await this.httpClient.get(
                            'users/'.concat(t.userId, '/playlists/').concat(t.playlistKind),
                            this.createHttpOptions({
                                timeoutKey: 'getPlaylistWithRichTracks',
                                params: t,
                                searchParams: (0, r.P)({
                                    resumeStream: t.resumeStream,
                                    trackMetaType: t.trackMetaType,
                                    page: t.page,
                                    pageSize: t.pageSize,
                                    trackPlayCounts: t.trackPlayCounts,
                                    withSimilarsLikesCount: t.withSimilarsLikesCount,
                                    richTracks: !0,
                                }),
                                signal: null == e ? void 0 : e.signal,
                            }),
                        )
                    ).json();
                }
                async changePlaylistTitle(t, e) {
                    return (
                        await this.httpClient.post(
                            'users/'.concat(t.userId, '/playlists/').concat(t.playlistKind, '/name'),
                            this.createHttpOptions({
                                timeoutKey: 'changePlaylistTitle',
                                params: t,
                                searchParams: (0, r.P)({ value: t.title }),
                                signal: null == e ? void 0 : e.signal,
                            }),
                        )
                    ).json();
                }
                async deletePlaylist(t, e) {
                    return (
                        await this.httpClient.post(
                            'users/'.concat(t.userId, '/playlists/').concat(t.playlistKind, '/delete'),
                            this.createHttpOptions({ timeoutKey: 'deletePlaylist', params: t, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                async changePlaylistDescription(t, e) {
                    return (
                        await this.httpClient.post(
                            'users/'.concat(t.userId, '/playlists/').concat(t.playlistKind, '/description'),
                            this.createHttpOptions({
                                timeoutKey: 'changePlaylistDescription',
                                params: t,
                                searchParams: (0, r.P)({ value: t.description }),
                                signal: null == e ? void 0 : e.signal,
                            }),
                        )
                    ).json();
                }
                async getPlaylistWithTracksIds(t, e) {
                    return (
                        await this.httpClient.get(
                            'users/'.concat(t.userId, '/playlists/').concat(t.playlistKind),
                            this.createHttpOptions({
                                timeoutKey: 'getPlaylistWithTracksIds',
                                params: t,
                                searchParams: (0, r.P)({
                                    resumeStream: t.resumeStream,
                                    trackMetaType: t.trackMetaType,
                                    page: t.page,
                                    pageSize: t.pageSize,
                                    trackPlayCounts: t.trackPlayCounts,
                                    withSimilarsLikesCount: t.withSimilarsLikesCount,
                                    richTracks: !1,
                                }),
                                signal: null == e ? void 0 : e.signal,
                            }),
                        )
                    ).json();
                }
                async likeTrack(t, e) {
                    let s = await this.httpClient.post(
                            'users/'.concat(t.userId, '/likes/tracks/add'),
                            this.createHttpOptions({
                                timeoutKey: 'likeTrack',
                                params: t,
                                searchParams: (0, r.P)({ 'track-id': t.entityId }),
                                signal: null == e ? void 0 : e.signal,
                            }),
                        ),
                        i = await s.json();
                    return (null == i ? void 0 : i.revision) ? a.f.OK : a.f.ERROR;
                }
                async unlikeTrack(t, e) {
                    let s = await this.httpClient.post(
                            'users/'.concat(t.userId, '/likes/tracks/').concat(t.entityId, '/remove'),
                            this.createHttpOptions({ timeoutKey: 'unlikeTrack', params: t, signal: null == e ? void 0 : e.signal }),
                        ),
                        i = await s.json();
                    return (null == i ? void 0 : i.revision) ? a.f.OK : a.f.ERROR;
                }
                async getDislikedTracks(t, e) {
                    return (
                        await this.httpClient.get(
                            'users/'.concat(t.userId, '/dislikes/tracks'),
                            this.createHttpOptions({ timeoutKey: 'getDislikedTracks', params: t, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                async dislikeTrack(t, e) {
                    let s = await this.httpClient.post(
                            'users/'.concat(t.userId, '/dislikes/tracks/add'),
                            this.createHttpOptions({
                                timeoutKey: 'dislikeTrack',
                                params: t,
                                searchParams: (0, r.P)({ 'track-id': t.entityId }),
                                signal: null == e ? void 0 : e.signal,
                            }),
                        ),
                        i = await s.json();
                    return (null == i ? void 0 : i.revision) ? a.f.OK : a.f.ERROR;
                }
                async undislikeTrack(t, e) {
                    let s = await this.httpClient.post(
                            'users/'.concat(t.userId, '/dislikes/tracks/').concat(t.entityId, '/remove'),
                            this.createHttpOptions({ timeoutKey: 'undislikeTrack', params: t, signal: null == e ? void 0 : e.signal }),
                        ),
                        i = await s.json();
                    return (null == i ? void 0 : i.revision) ? a.f.OK : a.f.ERROR;
                }
                async likeArtist(t, e) {
                    let s = await this.httpClient.post(
                        'users/'.concat(t.userId, '/likes/artists/add'),
                        this.createHttpOptions({
                            timeoutKey: 'likeArtist',
                            params: t,
                            searchParams: (0, r.P)({ 'artist-id': t.entityId }),
                            signal: null == e ? void 0 : e.signal,
                        }),
                    );
                    return (await s.json()) === a.f.OK ? a.f.OK : a.f.ERROR;
                }
                async unlikeArtist(t, e) {
                    let s = await this.httpClient.post(
                        'users/'.concat(t.userId, '/likes/artists/').concat(t.entityId, '/remove'),
                        this.createHttpOptions({ timeoutKey: 'unlikeArtist', params: t, signal: null == e ? void 0 : e.signal }),
                    );
                    return (await s.json()) === a.f.OK ? a.f.OK : a.f.ERROR;
                }
                async dislikeArtist(t, e) {
                    let s = await this.httpClient.post(
                        'users/'.concat(t.userId, '/dislikes/artists/add'),
                        this.createHttpOptions({
                            timeoutKey: 'dislikeArtist',
                            params: t,
                            searchParams: (0, r.P)({ 'artist-id': t.entityId }),
                            signal: null == e ? void 0 : e.signal,
                        }),
                    );
                    return (await s.json()) === a.f.OK ? a.f.OK : a.f.ERROR;
                }
                async undislikeArtist(t, e) {
                    let s = await this.httpClient.post(
                        'users/'.concat(t.userId, '/dislikes/artists/').concat(t.entityId, '/remove'),
                        this.createHttpOptions({ timeoutKey: 'undislikeArtist', params: t, signal: null == e ? void 0 : e.signal }),
                    );
                    return (await s.json()) === a.f.OK ? a.f.OK : a.f.ERROR;
                }
                async likeAlbum(t, e) {
                    let s = await this.httpClient.post(
                        'users/'.concat(t.userId, '/likes/albums/add'),
                        this.createHttpOptions({
                            timeoutKey: 'likeAlbum',
                            params: t,
                            searchParams: (0, r.P)({ 'album-id': t.entityId }),
                            signal: null == e ? void 0 : e.signal,
                        }),
                    );
                    return (await s.json()) === a.f.OK ? a.f.OK : a.f.ERROR;
                }
                async unlikeAlbum(t, e) {
                    let s = await this.httpClient.post(
                        'users/'.concat(t.userId, '/likes/albums/').concat(t.entityId, '/remove'),
                        this.createHttpOptions({ timeoutKey: 'unlikeAlbum', params: t, signal: null == e ? void 0 : e.signal }),
                    );
                    return (await s.json()) === a.f.OK ? a.f.OK : a.f.ERROR;
                }
                async likePlaylist(t, e) {
                    let s = await this.httpClient.post(
                        'users/'.concat(t.userId, '/likes/playlists/add'),
                        this.createHttpOptions({
                            timeoutKey: 'likePlaylist',
                            params: t,
                            searchParams: (0, r.P)({ 'owner-uid': t.ownerId, kind: t.kindId }),
                            signal: null == e ? void 0 : e.signal,
                        }),
                    );
                    return (await s.json()) === a.f.OK ? a.f.OK : a.f.ERROR;
                }
                async unlikePlaylist(t, e) {
                    let s = await this.httpClient.post(
                        'users/'.concat(t.userId, '/likes/playlists/').concat(t.ownerId, '-').concat(t.kindId, '/remove'),
                        this.createHttpOptions({ timeoutKey: 'unlikePlaylist', params: t, signal: null == e ? void 0 : e.signal }),
                    );
                    return (await s.json()) === a.f.OK ? a.f.OK : a.f.ERROR;
                }
                async getLikedClips(t, e) {
                    return (
                        await this.httpClient.get(
                            'users/'.concat(t.userId, '/likes/clips'),
                            this.createHttpOptions({
                                timeoutKey: 'getLikedClips',
                                params: t,
                                searchParams: (0, r.P)({ page: t.page, pageSize: t.pageSize }),
                                signal: null == e ? void 0 : e.signal,
                            }),
                        )
                    ).json();
                }
                async likeClip(t, e) {
                    await this.httpClient.post(
                        'users/'.concat(t.userId, '/likes/clips/add'),
                        this.createHttpOptions({
                            timeoutKey: 'likeClip',
                            params: t,
                            searchParams: (0, r.P)({ 'clip-id': t.entityId }),
                            signal: null == e ? void 0 : e.signal,
                        }),
                    );
                }
                async unlikeClip(t, e) {
                    await this.httpClient.post(
                        'users/'.concat(t.userId, '/likes/clips/').concat(t.entityId, '/remove'),
                        this.createHttpOptions({ timeoutKey: 'unlikeClip', params: t, signal: null == e ? void 0 : e.signal }),
                    );
                }
                async presaveAlbum(t, e) {
                    let s = await this.httpClient.post(
                        'users/'.concat(t.userId, '/presaves/add'),
                        this.createHttpOptions({
                            timeoutKey: 'presaveAlbum',
                            params: t,
                            searchParams: (0, r.P)({ albumId: t.albumId, likeAfterRelease: t.likeAfterRelease }),
                            signal: null == e ? void 0 : e.signal,
                        }),
                    );
                    return (await s.json()) === n.J.OK ? n.J.OK : n.J.ERROR;
                }
                async removePresaveAlbum(t, e) {
                    let s = await this.httpClient.post(
                        'users/'.concat(t.userId, '/presaves/remove'),
                        this.createHttpOptions({
                            timeoutKey: 'removePresaveAlbum',
                            params: t,
                            searchParams: (0, r.P)({ albumId: t.albumId }),
                            signal: null == e ? void 0 : e.signal,
                        }),
                    );
                    return (await s.json()) === n.J.OK ? n.J.OK : n.J.ERROR;
                }
                async getPresaves(t, e) {
                    return (
                        await this.httpClient.get(
                            'users/'.concat(t.userId, '/presaves'),
                            this.createHttpOptions({
                                timeoutKey: 'getPresaves',
                                params: t,
                                searchParams: (0, r.P)({ includeReleased: t.includeReleased, includeUpcoming: t.includeUpcoming }),
                                signal: null == e ? void 0 : e.signal,
                            }),
                        )
                    ).json();
                }
                async getSearchHistory(t, e) {
                    return (
                        await this.httpClient.get(
                            'users/'.concat(t.userId, '/search-history'),
                            this.createHttpOptions({
                                timeoutKey: 'getSearchHistory',
                                params: t,
                                searchParams: (0, r.P)({ clientSearchContext: t.clientSearchContext, contentType: t.contentType, supportedTypes: t.supportedTypes }),
                                signal: null == e ? void 0 : e.signal,
                            }),
                        )
                    ).json();
                }
                async clearSearchHistory(t, e) {
                    return (
                        await this.httpClient.get(
                            'users/'.concat(t.userId, '/search-history/clear'),
                            this.createHttpOptions({ timeoutKey: 'clearSearchHistory', params: t, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                async changePlaylistRelative(t, e) {
                    return (
                        await this.httpClient.post(
                            'users/'.concat(t.userId, '/playlists/').concat(t.playlistKind, '/change-relative'),
                            this.createHttpOptions({
                                timeoutKey: 'changePlaylistRelative',
                                params: t,
                                searchParams: (0, r.P)({ diff: t.diff, revision: t.revision }),
                                signal: null == e ? void 0 : e.signal,
                            }),
                        )
                    ).json();
                }
                async uploadPlaylistCover(t, e) {
                    return (
                        await this.httpClient.post(
                            'users/'.concat(t.userId, '/playlists/').concat(t.playlistKind, '/cover/upload'),
                            this.createHttpOptions({ timeoutKey: 'uploadPlaylistCover', params: t, body: t.formData, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                async getPlaylistTrailer(t, e) {
                    return (
                        await this.httpClient.get(
                            'users/'.concat(t.userId, '/playlists/').concat(t.playlistKind, '/trailer'),
                            this.createHttpOptions({ timeoutKey: 'getPlaylistTrailer', params: t, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                async togglePlaylistVisibility(t, e) {
                    return (
                        await this.httpClient.post(
                            'users/'.concat(t.userId, '/playlists/').concat(t.playlistKind, '/visibility'),
                            this.createHttpOptions({
                                timeoutKey: 'createPlaylist',
                                params: t,
                                searchParams: (0, r.P)({ value: t.visibility }),
                                signal: null == e ? void 0 : e.signal,
                            }),
                        )
                    ).json();
                }
                constructor(t, e) {
                    super(t, e), (0, i._)(this, 'httpClient', void 0), (0, i._)(this, 'config', void 0), (this.httpClient = t), (this.config = e);
                }
            }
        },
        40168: (t, e, s) => {
            'use strict';
            s.d(e, { O: () => n });
            var i = s(96559),
                a = s(77220);
            class n extends a.X {
                async getTabConfig(t, e) {
                    let s = await this.httpClient.get(
                        'concerts/tab-config',
                        this.createHttpOptions({ timeoutKey: 'getTabConfig', params: t, signal: null == e ? void 0 : e.signal }),
                    );
                    return await s.json();
                }
                async getFeed(t, e) {
                    let s = await this.httpClient.get(
                        'concerts/feed',
                        this.createHttpOptions({ timeoutKey: 'getFeed', params: t, signal: null == e ? void 0 : e.signal }),
                    );
                    return await s.json();
                }
                async getInfo(t, e) {
                    let s = await this.httpClient.get(
                        'concerts/'.concat(t.concertId, '/info'),
                        this.createHttpOptions({ timeoutKey: 'getInfo', params: t, signal: null == e ? void 0 : e.signal }),
                    );
                    return await s.json();
                }
                async getSkeleton(t, e) {
                    return (
                        await this.httpClient.get(
                            'concerts/'.concat(t.concertId, '/skeletons/').concat(t.skeletonId),
                            this.createHttpOptions({ timeoutKey: 'getSkeleton', params: t, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                async getConcertsDetails(t, e) {
                    return (
                        await this.httpClient.get(
                            'concerts/details/'.concat(t.type, '/').concat(t.id),
                            this.createHttpOptions({ timeoutKey: 'getConcertsDetails', params: t, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                constructor(t, e) {
                    super(t, e), (0, i._)(this, 'httpClient', void 0), (0, i._)(this, 'config', void 0), (this.httpClient = t), (this.config = e);
                }
            }
        },
        41778: (t, e, s) => {
            'use strict';
            s.d(e, { J: () => n });
            var i = s(96559),
                a = s(77220);
            class n extends a.X {
                async getInviteInfo(t) {
                    return (
                        await this.httpClient.get(
                            'account/family/invite-info/'.concat(t.inviteId, '/'),
                            this.createHttpOptions({ timeoutKey: 'getInviteInfo', params: t }),
                        )
                    ).json();
                }
                async acceptInvite(t) {
                    await this.httpClient.post('account/family/accept-invite/'.concat(t.inviteId), this.createHttpOptions({ timeoutKey: 'acceptInvite', params: t }));
                }
                constructor(t, e) {
                    super(t, e), (0, i._)(this, 'httpClient', void 0), (0, i._)(this, 'config', void 0), (this.httpClient = t), (this.config = e);
                }
            }
        },
        42132: (t, e, s) => {
            'use strict';
            s.d(e, { g: () => o });
            var i = s(96559),
                a = s(77220),
                n = s(76898),
                r = s(53676);
            class o extends a.X {
                async log(t) {
                    await this.httpClient.post(
                        'log',
                        this.createHttpOptions(
                            {
                                timeoutKey: 'log',
                                params: t,
                                json: (0, n.F)(t.payload),
                                excludeHeaders: ['x-request-id', 'x-retry-count', 'x-retpath-y'],
                                searchParams: (0, r.P)(t.urlParams),
                            },
                            { withoutHeaders: !0 },
                        ),
                    );
                }
                async perfLog(t) {
                    await this.httpClient.post(
                        'perf',
                        this.createHttpOptions(
                            {
                                timeoutKey: 'perfLog',
                                params: t,
                                json: t.payload,
                                excludeHeaders: ['x-request-id', 'x-retry-count', 'x-retpath-y'],
                                searchParams: (0, r.P)(t.urlParams),
                            },
                            { withoutHeaders: !0 },
                        ),
                    );
                }
                constructor(t, e) {
                    super(t, e), (0, i._)(this, 'httpClient', void 0), (0, i._)(this, 'config', void 0), (this.httpClient = t), (this.config = e);
                }
            }
        },
        42520: (t, e, s) => {
            'use strict';
            let i;
            s.d(e, { useMetrika: () => r });
            var a = s(61910),
                n = s(80506);
            let r = () => {
                let t = (i || (i = (0, n.a)()), i),
                    e = (0, a.useSyncExternalStore)(t.isLoaded.onChange, () => t.isLoaded.value);
                return (0, a.useMemo)(() => ({ ...t, isLoaded: e }), [e]);
            };
        },
        45628: (t, e, s) => {
            'use strict';
            s.d(e, { V: () => a });
            var i = s(96559);
            class a {
                setPassportUid(t) {
                    let e = this.executionContext.getStore();
                    void 0 !== e && (e.puid = t), (this.passportUid = t);
                }
                getPassportUid() {
                    return this.passportUid;
                }
                constructor(t) {
                    (0, i._)(this, 'executionContext', void 0), (0, i._)(this, 'passportUid', void 0), (this.executionContext = t);
                }
            }
        },
        49775: (t, e, s) => {
            'use strict';
            s.d(e, { t: () => i });
            let i = {
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
        50218: (t, e, s) => {
            'use strict';
            s.d(e, { N: () => n });
            var i = s(96559),
                a = s(77220);
            class n extends a.X {
                async getAlbumDonations(t, e) {
                    let s = await this.httpClient.get(
                        'donation/albums/'.concat(t.albumId),
                        this.createHttpOptions({ timeoutKey: 'getAlbumDonations', params: t, signal: null == e ? void 0 : e.signal }),
                    );
                    return await s.json();
                }
                constructor(t, e) {
                    super(t, e), (0, i._)(this, 'httpClient', void 0), (0, i._)(this, 'config', void 0), (this.httpClient = t), (this.config = e);
                }
            }
        },
        52962: (t, e, s) => {
            'use strict';
            s.d(e, { L: () => r });
            var i = s(96559),
                a = s(77220),
                n = s(53676);
            class r extends a.X {
                async getStorageData(t, e) {
                    let { formatFlags: s, direct: i, preview: a, canUseStreaming: r, tsInSeconds: o, sign: l, debug: c, isAliceRequester: u, requireMp3Link: d } = t;
                    return (
                        await this.httpClient.get(
                            'tracks/'.concat(t.trackId, '/download-info'),
                            this.createHttpOptions({
                                timeoutKey: 'getStorageData',
                                params: t,
                                searchParams: (0, n.P)({
                                    formatFlags: s,
                                    debug: c,
                                    preview: a,
                                    direct: i,
                                    isAliceRequester: u,
                                    requireMp3Link: d,
                                    canUseStreaming: r,
                                    ts: o,
                                    sign: l,
                                }),
                                signal: null == e ? void 0 : e.signal,
                            }),
                        )
                    ).json();
                }
                async getTracksMeta(t, e) {
                    const tracksMeta = await (
                        await this.httpClient.post(
                            'tracks',
                            this.createHttpOptions({
                                timeoutKey: 'getTracksMeta',
                                params: t,
                                body: (function (t) {
                                    let e = new FormData();
                                    return (
                                        Object.getOwnPropertyNames(t).forEach((s) => {
                                            let i = t[s];
                                            (('number' == typeof i || 'string' == typeof i || 'boolean' == typeof i) && e.append(s, String(i)),
                                                Array.isArray(i) &&
                                                    i.forEach((t) => {
                                                        ('number' == typeof t || 'string' == typeof t) && e.append(s, String(t));
                                                    }));
                                        }),
                                        e
                                    );
                                })({ trackIds: t.trackIds, removeDuplicates: t.removeDuplicates || !1, withProgress: t.withProgress, withMixData: t.withMixData }),
                                signal: null == e ? void 0 : e.signal,
                            }),
                        )
                    ).json();

                    tracksMeta.forEach((t) => {
                        t.substituted?.artists && t.artists ? (t.artists = t.substituted.artists) : undefined;
                        t.substituted?.ogImage && t.ogImage ? (t.ogImage = t.substituted.ogImage) : undefined;
                        t.substituted?.coverUri && t.coverUri ? (t.coverUri = t.substituted.coverUri) : undefined;
                        t.substituted?.title && t.title ? (t.title = t.substituted.title) : undefined;
                        t.substituted?.derivedColors && t.derivedColors ? (t.derivedColors = t.substituted.derivedColors) : undefined;
                        t.substituted?.version && t.version
                            ? (t.version = t.substituted.version)
                            : t.substituted
                              ? 'Подменёные данные трека были восстановлены'
                              : undefined;
                    });

                    return tracksMeta;
                }
                async getFullInfoTrack(t, e) {
                    let s = t.albumId ? ''.concat(t.trackId, ':').concat(t.albumId) : t.trackId;
                    return (
                        await this.httpClient.get(
                            'tracks/'.concat(s, '/full-info'),
                            this.createHttpOptions({ timeoutKey: 'getFullInfoTrack', params: t, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                async getFullDescriptionTrack(t, e) {
                    return (
                        await this.httpClient.get(
                            'tracks/'.concat(t.trackId, '/supplement'),
                            this.createHttpOptions({ timeoutKey: 'getFullDescriptionTrack', params: t, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                async getCredits(t, e) {
                    return (
                        await this.httpClient.get(
                            'tracks/'.concat(t.trackId, '/credits'),
                            this.createHttpOptions({ timeoutKey: 'getCredits', params: t, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                async getDisclaimer(t, e) {
                    return (
                        await this.httpClient.get(
                            'tracks/'.concat(t.trackId, '/disclaimer'),
                            this.createHttpOptions({ timeoutKey: 'getDisclaimer', params: t, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                async getTrailer(t, e) {
                    return (
                        await this.httpClient.get(
                            'tracks/'.concat(t.trackId, '/trailer'),
                            this.createHttpOptions({ timeoutKey: 'getTrailer', params: t, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                async getLyrics(t, e) {
                    return (
                        await this.httpClient.get(
                            'tracks/'.concat(t.trackId, '/lyrics'),
                            this.createHttpOptions({
                                timeoutKey: 'getLyrics',
                                params: t,
                                searchParams: (0, n.P)({ sign: t.sign, timeStamp: t.timeStamp, format: t.format }),
                                signal: null == e ? void 0 : e.signal,
                            }),
                        )
                    ).json();
                }
                constructor(t, e) {
                    super(t, e), (0, i._)(this, 'httpClient', void 0), (0, i._)(this, 'config', void 0), (this.httpClient = t), (this.config = e);
                }
            }
        },
        54280: (t, e, s) => {
            'use strict';
            s.d(e, { S: () => r });
            var i = s(96559),
                a = s(53676),
                n = s(77220);
            class r extends n.X {
                async getUploadUrl(t, e) {
                    return (
                        await this.httpClient.post(
                            'loader/upload-url',
                            this.createHttpOptions({
                                timeoutKey: 'getUploadUrl',
                                params: t,
                                signal: null == e ? void 0 : e.signal,
                                searchParams: (0, a.P)({ uid: t.uid, 'playlist-id': t.playlistId, visibility: t.visibility, path: t.path }),
                            }),
                        )
                    ).json();
                }
                constructor(t, e) {
                    super(t, e), (0, i._)(this, 'httpClient', void 0), (0, i._)(this, 'config', void 0), (this.httpClient = t), (this.config = e);
                }
            }
        },
        54924: (t, e, s) => {
            'use strict';
            s.d(e, { _: () => r });
            var i = s(96559),
                a = s(77220),
                n = s(53676);
            class r extends a.X {
                async getAfterTrack(t, e) {
                    return (
                        await this.httpClient.get(
                            'after-track',
                            this.createHttpOptions({
                                timeoutKey: 'getAfterTrack',
                                params: t,
                                signal: null == e ? void 0 : e.signal,
                                searchParams: (0, n.P)({ from: t.from, types: t.types, nextTrackId: t.nextTrackId, prevTrackId: t.prevTrackId }),
                            }),
                        )
                    ).json();
                }
                constructor(t, e) {
                    super(t, e), (0, i._)(this, 'httpClient', void 0), (0, i._)(this, 'config', void 0), (this.httpClient = t), (this.config = e);
                }
            }
        },
        55256: (t, e, s) => {
            var i = {
                './default.ts': [83491, 3491],
                './development.ts': [6071, 6071],
                './production.ts': [82965, 2965],
                './qa.ts': [45396, 3015],
                './stress.ts': [65989, 8370],
                './tokens/DevToolsTokens.ts': [62901],
            };
            function a(t) {
                if (!s.o(i, t))
                    return Promise.resolve().then(() => {
                        var e = Error("Cannot find module '" + t + "'");
                        throw ((e.code = 'MODULE_NOT_FOUND'), e);
                    });
                var e = i[t],
                    a = e[0];
                return Promise.all(e.slice(1).map(s.e)).then(() => s(a));
            }
            (a.keys = () => Object.keys(i)), (a.id = 55256), (t.exports = a);
        },
        55948: (t, e, s) => {
            'use strict';
            s.d(e, { _: () => r });
            var i = s(96559),
                a = s(53676),
                n = s(77220);
            class r extends n.X {
                async getClip(t, e) {
                    return (
                        await this.httpClient.get(
                            'clips',
                            this.createHttpOptions({
                                timeoutKey: 'getClip',
                                params: t,
                                signal: null == e ? void 0 : e.signal,
                                searchParams: (0, a.P)({ clipIds: t.clipIds.join(',') }),
                            }),
                        )
                    ).json();
                }
                async getCredits(t, e) {
                    return (
                        await this.httpClient.get(
                            'clips/'.concat(t.clipId, '/credits'),
                            this.createHttpOptions({ timeoutKey: 'getCredits', params: t, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                async getDisclaimer(t, e) {
                    return (
                        await this.httpClient.get(
                            'clips/'.concat(t.clipId, '/disclaimer'),
                            this.createHttpOptions({ timeoutKey: 'getDisclaimer', params: t, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                async getClipsWillLike(t, e) {
                    return (
                        await this.httpClient.get(
                            'clips/will/like',
                            this.createHttpOptions({
                                timeoutKey: 'getClipsWillLike',
                                params: t,
                                signal: null == e ? void 0 : e.signal,
                                searchParams: (0, a.P)({ page: t.page, pageSize: t.pageSize }),
                            }),
                        )
                    ).json();
                }
                constructor(t, e) {
                    super(t, e), (0, i._)(this, 'httpClient', void 0), (0, i._)(this, 'config', void 0), (this.httpClient = t), (this.config = e);
                }
            }
        },
        63988: (t, e, s) => {
            'use strict';
            s.d(e, { Z: () => o });
            var i = s(96559),
                a = s(53676),
                n = s(76898),
                r = s(77220);
            class o extends r.X {
                async getStationInfo(t, e) {
                    return (
                        await this.httpClient.get(
                            'rotor/station/'.concat(t.stationId, '/info'),
                            this.createHttpOptions({ timeoutKey: 'getStationInfo', params: t, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                async sessionNew(t, e) {
                    var s;
                    let i = null == (s = t.sessions) ? void 0 : s.map((t) => ({ sessionId: t.radioSessionId, seeds: t.seeds, feedbacks: t.feedbacks })),
                        a = (0, n.F)({
                            seeds: t.seeds,
                            queue: t.queue,
                            includeTracksInResponse: t.includeTracksInResponse,
                            trackToStartFrom: t.trackToStartFrom,
                            clientRemoteType: t.clientRemoteType,
                            incognito: t.incognito,
                            child: t.child,
                            allowExplicit: t.allowExplicit,
                            aliceExperiments: t.aliceExperiments,
                            djData: t.djData,
                            useIchwill: t.useIchwill,
                            includeWaveModel: t.includeWaveModel,
                            interactive: t.interactive,
                            sessions: i,
                        });
                    return (
                        await this.httpClient.post(
                            'rotor/session/new',
                            this.createHttpOptions({ timeoutKey: 'sessionNew', params: t, json: a, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                async sessionClone(t, e) {
                    var s;
                    let i = null == (s = t.sessions) ? void 0 : s.map((t) => ({ sessionId: t.radioSessionId, seeds: t.seeds, feedbacks: t.feedbacks })),
                        a = (0, n.F)({
                            queue: t.queue,
                            includeTracksInResponse: t.includeTracksInResponse,
                            trackToStartFrom: t.trackToStartFrom,
                            clientRemoteType: t.clientRemoteType,
                            incognito: t.incognito,
                            child: t.child,
                            allowExplicit: t.allowExplicit,
                            aliceExperiments: t.aliceExperiments,
                            djData: t.djData,
                            useIchwill: t.useIchwill,
                            includeWaveModel: t.includeWaveModel,
                            interactive: t.interactive,
                            sessions: i,
                        });
                    return (
                        await this.httpClient.post(
                            'rotor/session/'.concat(t.radioSessionId, '/clone'),
                            this.createHttpOptions({ timeoutKey: 'sessionClone', params: t, json: a, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                async sessionTracks(t, e) {
                    let s = (0, n.F)({ queue: t.queue, aliceExperiments: t.aliceExperiments, djData: t.djData, useIchwill: t.useIchwill, feedbacks: t.feedbacks });
                    return (
                        await this.httpClient.post(
                            'rotor/session/'.concat(t.radioSessionId, '/tracks'),
                            this.createHttpOptions({ timeoutKey: 'sessionTracks', params: t, json: s, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                async sessionFeedback(t, e) {
                    let s = (0, n.F)({ event: t.feedback.event, batchId: t.feedback.batchId, from: t.feedback.from });
                    return (
                        await this.httpClient.post(
                            'rotor/session/'.concat(t.radioSessionId, '/feedback/'),
                            this.createHttpOptions({ timeoutKey: 'sessionFeedback', params: t, json: s, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                async sessionFeedbacks(t, e) {
                    let s = {
                        feedbacks: t.feedbacks.map((t) => {
                            let { event: e, batchId: s, from: i } = t;
                            return (0, n.F)({ event: e, batchId: s, from: i });
                        }),
                    };
                    return (
                        await this.httpClient.post(
                            'rotor/session/'.concat(t.radioSessionId, '/feedbacks/'),
                            this.createHttpOptions({ timeoutKey: 'sessionFeedbacks', params: t, json: s, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                async sessionsFeedbacks(t, e) {
                    let s = t.sessions.map((t) => ({ sessionId: t.radioSessionId, seeds: t.seeds, feedbacks: t.feedbacks }));
                    return (
                        await this.httpClient.post(
                            'rotor/sessions/feedbacks/',
                            this.createHttpOptions({ timeoutKey: 'sessionsFeedbacks', params: t, json: { sessions: s }, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                async waveLast(t, e) {
                    return (
                        await this.httpClient.get('rotor/wave/last', this.createHttpOptions({ timeoutKey: 'waveLast', params: t, signal: null == e ? void 0 : e.signal }))
                    ).json();
                }
                async waveSettings(t, e) {
                    return (
                        await this.httpClient.get(
                            'rotor/wave/settings',
                            this.createHttpOptions({
                                timeoutKey: 'waveSettings',
                                params: t,
                                signal: null == e ? void 0 : e.signal,
                                searchParams: (0, a.P)({ seeds: null == t ? void 0 : t.seeds }),
                            }),
                        )
                    ).json();
                }
                async waveLastReset(t, e) {
                    return (
                        await this.httpClient.post(
                            'rotor/wave/last/reset',
                            this.createHttpOptions({ timeoutKey: 'waveLastReset', params: t, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                async getGenerativeInfo(t, e) {
                    return (
                        await this.httpClient.get(
                            'rotor/station/'.concat(t.stationId, '/stream'),
                            this.createHttpOptions({ timeoutKey: 'getGenerativeInfo', params: t, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                async stationFeedback(t, e) {
                    return (
                        await this.httpClient.post(
                            'rotor/station/'.concat(t.stationId, '/feedback'),
                            this.createHttpOptions({
                                timeoutKey: 'stationFeedback',
                                params: t,
                                json: (0, n.F)({ type: t.type, timestamp: t.timestamp }),
                                searchParams: (0, a.P)({ streamId: t.streamId }),
                                signal: null == e ? void 0 : e.signal,
                            }),
                        )
                    ).json();
                }
                async combinedLanding(t, e) {
                    return (
                        await this.httpClient.post(
                            'rotor/combined/session/landing',
                            this.createHttpOptions({
                                timeoutKey: 'combinedLanding',
                                params: t,
                                json: (0, n.F)({ supportedTypes: t.supportedTypes, child: t.child, allowExplicit: t.allowExplicit }),
                                signal: null == e ? void 0 : e.signal,
                            }),
                        )
                    ).json();
                }
                async combinedSessionNew(t, e) {
                    return (
                        await this.httpClient.post(
                            'rotor/combined/session/new',
                            this.createHttpOptions({
                                timeoutKey: 'combinedSessionNew',
                                params: t,
                                json: (0, n.F)({ supportedTypes: t.supportedTypes, child: t.child, allowExplicit: t.allowExplicit, queue: t.queue }),
                                signal: null == e ? void 0 : e.signal,
                            }),
                        )
                    ).json();
                }
                async combinedSessionNext(t, e) {
                    return (
                        await this.httpClient.post(
                            'rotor/combined/session/'.concat(t.sessionid, '/next'),
                            this.createHttpOptions({
                                timeoutKey: 'combinedSessionNext',
                                params: t,
                                json: (0, n.F)({ queue: t.queue }),
                                signal: null == e ? void 0 : e.signal,
                            }),
                        )
                    ).json();
                }
                async stationsDashboard(t, e) {
                    return (
                        await this.httpClient.get(
                            'rotor/stations/dashboard',
                            this.createHttpOptions({
                                timeoutKey: 'stationsDashboard',
                                params: t,
                                searchParams: (0, a.P)({ limit: t.limit }),
                                signal: null == e ? void 0 : e.signal,
                            }),
                        )
                    ).json();
                }
                constructor(t, e) {
                    super(t, e), (0, i._)(this, 'httpClient', void 0), (0, i._)(this, 'config', void 0), (this.httpClient = t), (this.config = e);
                }
            }
        },
        64659: (t, e, s) => {
            'use strict';
            s.d(e, { c: () => r });
            var i = s(96559),
                a = s(77220),
                n = s(53676);
            class r extends a.X {
                async getRedAlerts(t, e) {
                    var s;
                    let i = (null == (s = t.common) ? void 0 : s.language) || this.config.params.common.language;
                    return (
                        await this.httpClient.get(
                            'proxy/plus-red-alert/v1/alerts',
                            this.createHttpOptions({
                                timeoutKey: 'getRedAlerts',
                                params: t,
                                searchParams: (0, n.P)({ service: t.service, client: t.client, platform: t.platform, countryId: t.countryId, language: i }),
                                signal: null == e ? void 0 : e.signal,
                            }),
                        )
                    ).json();
                }
                constructor(t, e) {
                    super(t, e), (0, i._)(this, 'httpClient', void 0), (0, i._)(this, 'config', void 0), (this.httpClient = t), (this.config = e);
                }
            }
        },
        65098: (t, e, s) => {
            'use strict';
            s.d(e, { n: () => a });
            var i = s(49775);
            let a = (t) => async (e) => {
                let s = await t.post(e.url, { body: e.body, headers: e.headers, signal: e.signal, credentials: e.credentials, retry: { config: i.t } });
                return await s.json();
            };
        },
        71020: (t, e, s) => {
            'use strict';
            var i;
            s.d(e, { J: () => i }),
                (function (t) {
                    (t.OK = 'ok'), (t.ERROR = 'error');
                })(i || (i = {}));
        },
        74875: (t, e, s) => {
            'use strict';
            s.d(e, { o: () => r });
            var i = s(14287),
                a = s(70755);
            let n = (t) =>
                    401 ===
                    ((t) => {
                        var e, s, i, n;
                        if ((0, a.N)(t.cause))
                            return (
                                (null == (s = t.cause) || null == (e = s.response) ? void 0 : e.statusCode) ||
                                (null == (n = t.cause) || null == (i = n.response) ? void 0 : i.status)
                            );
                    })(t),
                r = (t, e) => async (s) => {
                    let r = s.cause;
                    if ((0, a.N)(r) && n(s))
                        try {
                            await e.about();
                        } catch (e) {
                            e instanceof i.m5 && n(e) && t.redirectToAuthorizationUrl();
                        }
                    return s;
                };
        },
        74922: (t, e, s) => {
            'use strict';
            s.d(e, { l: () => n });
            var i = s(96559),
                a = s(77220);
            class n extends a.X {
                async getTopArtists(t, e) {
                    return (
                        await this.httpClient.get(
                            'personal/top/artists/month',
                            this.createHttpOptions({ timeoutKey: 'getTopArtists', params: t, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                constructor(t, e) {
                    super(t, e), (0, i._)(this, 'httpClient', void 0), (0, i._)(this, 'config', void 0), (this.httpClient = t), (this.config = e);
                }
            }
        },
        76898: (t, e, s) => {
            'use strict';
            function i(t) {
                let e = {};
                return (
                    Object.getOwnPropertyNames(t)
                        .filter((e) => void 0 !== t[e] && null !== t[e])
                        .map((s) => {
                            e[s] = t[s];
                        }),
                    e
                );
            }
            s.d(e, { F: () => i });
        },
        77534: (t, e, s) => {
            'use strict';
            var i;
            s.d(e, { f: () => i }),
                (function (t) {
                    (t.OK = 'ok'), (t.ERROR = 'error');
                })(i || (i = {}));
        },
        78226: (t, e, s) => {
            'use strict';
            s.d(e, { D: () => o });
            var i = s(96559),
                a = s(77220),
                n = s(53676),
                r = s(76898);
            class o extends a.X {
                async getPromotionsById(t, e) {
                    return (
                        await this.httpClient.get(
                            'feed/promotions/'.concat(t.promoId),
                            this.createHttpOptions({
                                timeoutKey: 'getPromotionsById',
                                params: t,
                                searchParams: (0, n.P)({ checkContent: t.checkContent }),
                                signal: null == e ? void 0 : e.signal,
                            }),
                        )
                    ).json();
                }
                async getWizardGenres(t, e) {
                    return (
                        await this.httpClient.get(
                            'feed/wizard2-new/get-genres',
                            this.createHttpOptions({ timeoutKey: 'getWizardGenres', params: t, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                async getWizardArtistsByGenre(t, e) {
                    let s = (0, r.F)({
                        genre: t.genre,
                        showedArtists: t.showedArtists,
                        likedArtists: t.likedArtists,
                        unlikedArtists: t.unlikedArtists,
                        countOfNewArtists: t.countOfNewArtists,
                    });
                    return (
                        await this.httpClient.post(
                            'feed/wizard2-new/get-artists-by-genre',
                            this.createHttpOptions({ timeoutKey: 'getWizardArtistsByGenre', params: t, json: s, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                async finishWizard(t, e) {
                    let s = (0, r.F)({ genre: t.genre, likedArtists: t.likedArtists, unlikedArtists: t.unlikedArtists });
                    await this.httpClient.post(
                        'feed/wizard2-new/finish',
                        this.createHttpOptions({ timeoutKey: 'finishWizard', params: t, json: s, signal: null == e ? void 0 : e.signal }),
                    );
                }
                async infiniteFeed(t, e) {
                    return (
                        await this.httpClient.get(
                            'infinite-feed',
                            this.createHttpOptions({
                                timeoutKey: 'infiniteFeed',
                                params: t,
                                searchParams: (0, n.P)({ batchNumber: t.batchNumber, landingType: t.landingType, supportedBlocks: 'generic' }),
                                signal: null == e ? void 0 : e.signal,
                            }),
                        )
                    ).json();
                }
                constructor(t, e) {
                    super(t, e), (0, i._)(this, 'httpClient', void 0), (0, i._)(this, 'config', void 0), (this.httpClient = t), (this.config = e);
                }
            }
        },
        79329: (t, e, s) => {
            'use strict';
            s.d(e, { v: () => r });
            var i = s(96559),
                a = s(77220),
                n = s(53676);
            class r extends a.X {
                async getTrackIds(t, e) {
                    return (
                        await this.httpClient.get(
                            'search-playlist/'.concat(t.uid, '/').concat(t.kind),
                            this.createHttpOptions({
                                timeoutKey: 'getTrackIds',
                                params: t,
                                searchParams: (0, n.P)({ part: t.part }),
                                signal: null == e ? void 0 : e.signal,
                            }),
                        )
                    ).json();
                }
                constructor(t, e) {
                    super(t, e), (0, i._)(this, 'httpClient', void 0), (0, i._)(this, 'config', void 0), (this.httpClient = t), (this.config = e);
                }
            }
        },
        79817: (t, e, s) => {
            'use strict';
            s.d(e, { B: () => r });
            var i = s(96559),
                a = s(53676),
                n = s(77220);
            class r extends n.X {
                async getAlbumWithRichTracks(t, e) {
                    return (
                        await this.httpClient.get(
                            'albums/'.concat(t.albumId, '/with-tracks'),
                            this.createHttpOptions({
                                timeoutKey: 'getAlbumWithRichTracks',
                                params: t,
                                signal: null == e ? void 0 : e.signal,
                                searchParams: (0, a.P)({
                                    resumeStream: t.resumeStream,
                                    page: t.page,
                                    pageSize: t.pageSize,
                                    'sort-order': t.sortOrder,
                                    richTracks: !0,
                                    withListeningFinished: !0,
                                }),
                            }),
                        )
                    ).json();
                }
                async getAlbumWithTracksIds(t, e) {
                    return (
                        await this.httpClient.get(
                            'albums/'.concat(t.albumId, '/with-tracks'),
                            this.createHttpOptions({
                                timeoutKey: 'getAlbumWithTracksIds',
                                params: t,
                                signal: null == e ? void 0 : e.signal,
                                searchParams: (0, a.P)({
                                    resumeStream: t.resumeStream,
                                    page: t.page,
                                    pageSize: t.pageSize,
                                    'sort-order': t.sortOrder,
                                    richTracks: !1,
                                    withListeningFinished: !0,
                                }),
                            }),
                        )
                    ).json();
                }
                async getDisclaimer(t, e) {
                    return (
                        await this.httpClient.get(
                            'albums/'.concat(t.albumId, '/disclaimer'),
                            this.createHttpOptions({ timeoutKey: 'getDisclaimer', params: t, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                async getTrailer(t, e) {
                    return (
                        await this.httpClient.get(
                            'albums/'.concat(t.albumId, '/trailer'),
                            this.createHttpOptions({ timeoutKey: 'getTrailer', params: t, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                async getRelatedContent(t, e) {
                    return (
                        await this.httpClient.get(
                            'albums/'.concat(t.albumId, '/related-content'),
                            this.createHttpOptions({ timeoutKey: 'getRelatedContent', params: t, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                async getAlbums(t, e) {
                    return (
                        await this.httpClient.get(
                            'albums',
                            this.createHttpOptions({
                                timeoutKey: 'getAlbums',
                                params: t,
                                signal: null == e ? void 0 : e.signal,
                                searchParams: (0, a.P)({ albumIds: t.albumIds.join(',') }),
                            }),
                        )
                    ).json();
                }
                async getSimilarEntities(t, e) {
                    return (
                        await this.httpClient.get(
                            'albums/'.concat(t.albumId, '/similar-entities'),
                            this.createHttpOptions({ timeoutKey: 'getSimilarEntities', params: t, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                async getExternalStreamingLinks(t, e) {
                    return (
                        await this.httpClient.get(
                            'albums/'.concat(t.albumId, '/external-streaming-links'),
                            this.createHttpOptions({ timeoutKey: 'getExternalStreamingLinks', params: t, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                constructor(t, e) {
                    super(t, e), (0, i._)(this, 'httpClient', void 0), (0, i._)(this, 'config', void 0), (this.httpClient = t), (this.config = e);
                }
            }
        },
        79850: (t, e, s) => {
            'use strict';
            s.d(e, { S: () => o });
            var i = s(96559),
                a = s(97992),
                n = s(78793),
                r = s(95998);
            class o {
                async get(t) {
                    let e = new n.m('GET method is not supported by BeaconHttpClient. navigator.sendBeacon() only supports POST requests.', {
                        code: a.Z.METHOD_NOT_SUPPORTED,
                        cause: { method: 'GET', supportedMethods: ['POST'] },
                    });
                    return await this.executeBeforeErrorHooks(e), this.executeRequestDoneHooks(t, { method: 'GET' }, void 0, e), Promise.reject(e);
                }
                async put(t) {
                    let e = new n.m('PUT method is not supported by BeaconHttpClient. navigator.sendBeacon() only supports POST requests.', {
                        code: a.Z.METHOD_NOT_SUPPORTED,
                        cause: { method: 'PUT', supportedMethods: ['POST'] },
                    });
                    return await this.executeBeforeErrorHooks(e), this.executeRequestDoneHooks(t, { method: 'PUT' }, void 0, e), Promise.reject(e);
                }
                async patch(t) {
                    let e = new n.m('PATCH method is not supported by BeaconHttpClient. navigator.sendBeacon() only supports POST requests.', {
                        code: a.Z.METHOD_NOT_SUPPORTED,
                        cause: { method: 'PATCH', supportedMethods: ['POST'] },
                    });
                    return await this.executeBeforeErrorHooks(e), this.executeRequestDoneHooks(t, { method: 'PATCH' }, void 0, e), Promise.reject(e);
                }
                async delete(t) {
                    let e = new n.m('DELETE method is not supported by BeaconHttpClient. navigator.sendBeacon() only supports POST requests.', {
                        code: a.Z.METHOD_NOT_SUPPORTED,
                        cause: { method: 'DELETE', supportedMethods: ['POST'] },
                    });
                    return await this.executeBeforeErrorHooks(e), this.executeRequestDoneHooks(t, { method: 'DELETE' }, void 0, e), Promise.reject(e);
                }
                async head(t) {
                    let e = new n.m('HEAD method is not supported by BeaconHttpClient. navigator.sendBeacon() only supports POST requests.', {
                        code: a.Z.METHOD_NOT_SUPPORTED,
                        cause: { method: 'HEAD', supportedMethods: ['POST'] },
                    });
                    return await this.executeBeforeErrorHooks(e), this.executeRequestDoneHooks(t, { method: 'HEAD' }, void 0, e), Promise.reject(e);
                }
                async post(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return this.request(t, { ...e, method: 'POST' });
                }
                async request(t, e) {
                    let s,
                        i,
                        r = e.method || 'GET';
                    if ('POST' !== r)
                        throw new n.m(''.concat(r, ' method is not supported by BeaconHttpClient. navigator.sendBeacon() only supports POST requests.'), {
                            code: a.Z.METHOD_NOT_SUPPORTED,
                            cause: { method: r, supportedMethods: ['POST'] },
                        });
                    if ('undefined' == typeof navigator || 'function' != typeof navigator.sendBeacon)
                        throw new n.m('navigator.sendBeacon is not available in this environment', { code: a.Z.NOT_AVAILABLE });
                    try {
                        let i = this.mergeOptions(e),
                            a = this.buildUrl(t, i);
                        await this.executeBeforeRequestHooks(a, i);
                        let n = this.prepareBeaconData(i);
                        return (s = await this.executeWithRetries(a, n, i));
                    } catch (t) {
                        throw ((i = t), await this.executeBeforeErrorHooks(t, e), t);
                    } finally {
                        this.executeRequestDoneHooks(t, e, s, i);
                    }
                }
                mergeOptions(t) {
                    return { ...this.defaultOptions, ...t, headers: { ...this.defaultOptions.headers, ...t.headers } };
                }
                buildUrl(t, e) {
                    let s = t;
                    if (e.prefixUrl) {
                        let i = e.prefixUrl.toString().replace(/\/$/, ''),
                            a = t.replace(/^\//, '');
                        s = ''.concat(i, '/').concat(a);
                    }
                    if (e.searchParams) {
                        let t = new URL(s);
                        ('string' == typeof e.searchParams ? new URLSearchParams(e.searchParams) : e.searchParams).forEach((e, s) => {
                            t.searchParams.set(s, e);
                        }),
                            (s = t.toString());
                    }
                    return s;
                }
                async executeBeforeRequestHooks(t, e) {
                    var s, i;
                    for (let a of [...this.beforeRequestHooks, ...(null != (i = null == (s = e.hooks) ? void 0 : s.beforeRequest) ? i : [])]) {
                        let s = {
                            url: t,
                            method: e.method,
                            headers: new Headers(e.headers || {}),
                            searchParams: e.searchParams
                                ? 'string' == typeof e.searchParams
                                    ? new URLSearchParams(e.searchParams)
                                    : e.searchParams
                                : new URLSearchParams(),
                            json: e.json,
                            timeout: e.timeout,
                        };
                        await a(s);
                    }
                }
                async executeBeforeErrorHooks(t, e) {
                    var s, i;
                    let a = [...this.beforeErrorHooks, ...(null != (i = null == e || null == (s = e.hooks) ? void 0 : s.beforeError) ? i : [])],
                        r = t instanceof n.m ? t : new n.m(t instanceof Error ? t.message : 'Unknown error', { cause: t });
                    for (let t of a) {
                        let e = await t(r);
                        e instanceof n.m && Object.assign(r, e);
                    }
                }
                executeRequestDoneHooks(t, e, s, i) {
                    this.requestDoneHooks.forEach((a) => {
                        a({ url: t, options: e, response: s, error: i });
                    });
                }
                prepareBeaconData(t) {
                    return void 0 !== t.body
                        ? t.body instanceof Blob ||
                          t.body instanceof ArrayBuffer ||
                          t.body instanceof FormData ||
                          t.body instanceof URLSearchParams ||
                          'string' == typeof t.body
                            ? t.body
                            : String(t.body)
                        : void 0 !== t.json
                          ? JSON.stringify(t.json)
                          : null;
                }
                createMockResponse(t, e) {
                    let s = {};
                    return (
                        void 0 !== e.json
                            ? (s['content-type'] = 'application/json')
                            : e.body instanceof FormData
                              ? (s['content-type'] = 'multipart/form-data')
                              : e.body instanceof URLSearchParams && (s['content-type'] = 'application/x-www-form-urlencoded'),
                        {
                            headers: s,
                            statusCode: 204,
                            statusMessage: 'No Content',
                            url: t,
                            json: async () =>
                                Promise.reject(
                                    new n.m('BeaconHttpClient does not receive response data. navigator.sendBeacon() is a fire-and-forget API.', {
                                        code: a.Z.NO_RESPONSE_DATA,
                                    }),
                                ),
                            text: async () =>
                                Promise.reject(
                                    new n.m('BeaconHttpClient does not receive response data. navigator.sendBeacon() is a fire-and-forget API.', {
                                        code: a.Z.NO_RESPONSE_DATA,
                                    }),
                                ),
                            arrayBuffer: async () =>
                                Promise.reject(
                                    new n.m('BeaconHttpClient does not receive response data. navigator.sendBeacon() is a fire-and-forget API.', {
                                        code: a.Z.NO_RESPONSE_DATA,
                                    }),
                                ),
                            clone: () => this.createMockResponse(t, e),
                            request: { prefixUrl: e.prefixUrl, headers: e.headers, searchParams: e.searchParams, method: e.method },
                        }
                    );
                }
                async executeWithRetries(t, e, s) {
                    var i, r;
                    let o = null == (i = s.retry) ? void 0 : i.config,
                        l = null != (r = null == o ? void 0 : o.totalRequestsLimit) ? r : 1,
                        c = new n.m('All retry attempts failed', { code: a.Z.RETRY_EXHAUSTED });
                    for (let i = 1; i <= l; i++)
                        try {
                            if (!navigator.sendBeacon(t, e)) {
                                let t = new n.m('Failed to queue beacon request.', { code: a.Z.QUEUE_FAILED });
                                if (await this.handleRetryableError(t, i, l, o)) continue;
                                throw t;
                            }
                            return this.createMockResponse(t, s);
                        } catch (e) {
                            let t = e instanceof n.m ? e : new n.m(e instanceof Error ? e.message : 'Unknown error', { cause: e, code: a.Z.RETRY_EXHAUSTED });
                            if (await this.handleRetryableError(t, i, l, o, s)) continue;
                            throw t;
                        }
                    throw c;
                }
                async handleRetryableError(t, e, s, i, a) {
                    if (e < s && this.shouldRetryForError(t, i)) {
                        await this.executeBeforeRetryHooks(t, e, a);
                        let s = this.getRetryDelay(t, e - 1, i);
                        return s > 0 && (await (0, r.c)(s)), !0;
                    }
                    return !1;
                }
                async executeBeforeRetryHooks(t, e, s) {
                    var i, a;
                    for (let n of [...this.beforeRetryHooks, ...(null != (a = null == s || null == (i = s.hooks) ? void 0 : i.beforeRetry) ? a : [])]) await n(t, e);
                }
                shouldRetryForError(t, e) {
                    return !!e && !!e.statusCodes.NON_HTTP_ERROR && t.code === a.Z.QUEUE_FAILED;
                }
                getRetryDelay(t, e, s) {
                    var i;
                    if (!s) return 0;
                    let a = s.statusCodes.NON_HTTP_ERROR,
                        n = null == a ? void 0 : a.attempts;
                    return !n || e >= n.length ? 0 : null != (i = n[e]) ? i : 0;
                }
                constructor(t = {}) {
                    var e, s, a, n, r, o, l, c;
                    (0, i._)(this, 'requestDoneHooks', []),
                        (0, i._)(this, 'beforeRequestHooks', []),
                        (0, i._)(this, 'beforeErrorHooks', []),
                        (0, i._)(this, 'beforeRetryHooks', []),
                        (0, i._)(this, 'defaultOptions', void 0),
                        (this.defaultOptions = t),
                        (this.beforeRequestHooks = null != (r = null == (e = t.hooks) ? void 0 : e.beforeRequest) ? r : []),
                        (this.beforeErrorHooks = null != (o = null == (s = t.hooks) ? void 0 : s.beforeError) ? o : []),
                        (this.beforeRetryHooks = null != (l = null == (a = t.hooks) ? void 0 : a.beforeRetry) ? l : []),
                        (this.requestDoneHooks = null != (c = null == (n = t.hooks) ? void 0 : n.onRequestDone) ? c : []);
                }
            }
        },
        80506: (t, e, s) => {
            'use strict';
            s.d(e, { a: () => a });
            var i = s(87965);
            let a = () => {
                let t = null,
                    e = new i.cJ(!1),
                    s = [];
                return {
                    isLoaded: e,
                    init: (i) => {
                        var a, n;
                        if (void 0 !== (null == (a = window.Ya) ? void 0 : a.Metrika2) && !e.value)
                            try {
                                (t = new window.Ya.Metrika2({ ...i })),
                                    (e.value = !0),
                                    (n = t),
                                    s.forEach((t) => {
                                        t(n);
                                    }),
                                    (s.length = 0);
                            } catch (t) {
                                ('string' == typeof t || t instanceof Error) && i.logger.error(t);
                            }
                    },
                    count: function (e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'counter';
                        t
                            ? t.params({ [i]: e })
                            : s.push((t) => {
                                  t.params({ [i]: e });
                              });
                    },
                    hit: (e) => {
                        t
                            ? t.hit(e)
                            : s.push((t) => {
                                  t.hit(e);
                              });
                    },
                    reachGoal: (e, i) => {
                        if (!t) return void s.push((t) => t.reachGoal(e, i));
                        t.reachGoal(e, i);
                    },
                };
            };
        },
        80535: (t, e, s) => {
            'use strict';
            s.d(e, { c: () => r });
            var i = s(96559),
                a = s(77220),
                n = s(76898);
            class r extends a.X {
                async sendViews(t, e) {
                    let s = (0, n.F)({ lyricViews: t.lyricViews });
                    await this.httpClient.post(
                        'lyric-views',
                        this.createHttpOptions({ timeoutKey: 'sendViews', params: t, signal: null == e ? void 0 : e.signal, json: s }),
                    );
                }
                constructor(t, e) {
                    super(t, e), (0, i._)(this, 'httpClient', void 0), (0, i._)(this, 'config', void 0), (this.httpClient = t), (this.config = e);
                }
            }
        },
        81658: (t, e, s) => {
            'use strict';
            s.d(e, { H: () => n });
            var i = s(96559),
                a = s(77220);
            class n extends a.X {
                async getMetatags(t, e) {
                    return (
                        await this.httpClient.get(
                            'landing3/metatags',
                            this.createHttpOptions({ timeoutKey: 'getMetatags', params: t, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                async getChart(t, e) {
                    return (
                        await this.httpClient.get('landing3/chart', this.createHttpOptions({ timeoutKey: 'getChart', params: t, signal: null == e ? void 0 : e.signal }))
                    ).json();
                }
                constructor(t, e) {
                    super(t, e), (0, i._)(this, 'httpClient', void 0), (0, i._)(this, 'config', void 0), (this.httpClient = t), (this.config = e);
                }
            }
        },
        81760: (t, e, s) => {
            'use strict';
            s.d(e, { N: () => n });
            var i = s(96559),
                a = s(77220);
            class n extends a.X {
                async sendMetrics(t) {
                    let { varsString: e, reqid: s, table: i, path: a, slots: n, experimentsSetting: r } = t,
                        o = [
                            '/reqid='.concat(s),
                            '/table='.concat(i),
                            a ? '/path='.concat(a) : '',
                            n ? '/slots='.concat(Array.isArray(n) ? n.join(';') : n) : '',
                            r ? '/experiments='.concat(Array.isArray(r) ? r.join(';') : r) : '',
                            '/vars='.concat(e),
                            '/cts='.concat(Date.now()),
                            '/*',
                        ]
                            .filter(Boolean)
                            .join('');
                    return this.httpClient.post('', {
                        prefixUrl: this.config.prefixUrl,
                        body: o,
                        retry: this.config.retryPolicyConfig ? { config: this.config.retryPolicyConfig } : void 0,
                    });
                }
                constructor(t, e) {
                    super(t, e), (0, i._)(this, 'httpClient', void 0), (0, i._)(this, 'config', void 0), (this.httpClient = t), (this.config = e);
                }
            }
        },
        84690: (t, e, s) => {
            'use strict';
            s.d(e, { Q: () => g });
            var i = s(96559),
                a = s(51736),
                n = s(38697),
                r = s(67195),
                o = s(31643),
                l = s(78793),
                c = s(41999);
            let u = { retryLimit: 0, retryDelay: 0 };
            var d = s(95998);
            let p = async (t) => {
                    var e, s;
                    let { options: i, error: a, retryAttempt: n, clientRetryConfig: r } = t;
                    if (null == a || null == (s = a.response) || null == (e = s.headers) ? void 0 : e.get('Retry-After')) return;
                    let o = ((t) => {
                        let { retryAttempt: e, error: s, retryAfter: i, retryPolicyConfig: a } = t;
                        if (!a) return u;
                        if (i) return a.totalRequestsLimit > e ? { retryLimit: a.totalRequestsLimit, retryDelay: i } : u;
                        if (a.statusCodes[s]) {
                            var n;
                            let t = a.statusCodes[s];
                            if ((null == t || null == (n = t.attempts) ? void 0 : n.length) && t.attempts.length >= e)
                                return { retryLimit: t.attempts.length + 1, retryDelay: t.attempts[e - 1] || 1 };
                        }
                        return u;
                    })({
                        error: ((t) =>
                            (null == t ? void 0 : t.code) === 'ETIMEDOUT' ? 'TIMEOUT' : (t.response && (t.response.status || t.response.statusCode)) || 'NON_HTTP_ERROR')(
                            a,
                        ),
                        retryAttempt: n,
                        retryPolicyConfig: null == r ? void 0 : r.config,
                    });
                    (i.retry.limit = o.retryLimit), await (0, d.c)(o.retryDelay);
                },
                h = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'get', 'post', 'put', 'patch', 'delete', 'head'];
            class g {
                async get(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return this.request(t, { ...e, method: 'GET' });
                }
                async post(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return this.request(t, { ...e, method: 'POST' });
                }
                async put(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return this.request(t, { ...e, method: 'PUT' });
                }
                async patch(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return this.request(t, { ...e, method: 'PATCH' });
                }
                async delete(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return this.request(t, { ...e, method: 'DELETE' });
                }
                async head(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return this.request(t, { ...e, method: 'HEAD' });
                }
                async request(t, e) {
                    let s, i;
                    try {
                        let i = Date.now(),
                            a = await this.client(t, this.optionsConverter(e)),
                            n = Date.now() - i;
                        return (s = this.responseConverter(a, e, { start: i, response: n }));
                    } catch (t) {
                        if (t instanceof a.H) throw this.errorConverter(t);
                        if (((i = t), t instanceof n.M))
                            throw (
                                (this.afterTimeoutHooks.forEach((e) => {
                                    e(this.errorConverter(t));
                                }),
                                this.errorConverter(t))
                            );
                        throw t;
                    } finally {
                        this.requestDoneHooks.forEach((a) => {
                            a({ url: t, options: e, response: s, error: i });
                        });
                    }
                }
                optionsConverter(t) {
                    let {
                            prefixUrl: e,
                            method: s,
                            searchParams: i,
                            headers: a,
                            json: n,
                            hooks: r,
                            retry: o,
                            timeout: l,
                            body: c,
                            credentials: u,
                            signal: d,
                            excludeHeaders: g,
                        } = t,
                        y = {};
                    if ((void 0 !== u && (y.credentials = u), void 0 !== e && (y.prefixUrl = e), void 0 !== s && (y.method = s), void 0 !== a)) {
                        var m;
                        y.headers = { ...a, 'user-agent': null != (m = a['user-agent']) ? m : a['User-Agent'] };
                    }
                    if (
                        (void 0 !== i && (y.searchParams = i),
                        void 0 !== n && (y.json = n),
                        'number' == typeof l && (y.timeout = l),
                        void 0 !== c && (y.body = c),
                        void 0 !== d && (y.signal = d),
                        (null == o ? void 0 : o.config) &&
                            ((y.retry = {
                                limit: o.config.totalRequestsLimit,
                                backoffLimit: 1,
                                statusCodes: Object.keys(o.config.statusCodes)
                                    .filter((t) => !isNaN(Number(t)))
                                    .map((t) => parseInt(t, 10)),
                                methods: h,
                            }),
                            (y.hooks = y.hooks || {}),
                            (y.hooks.beforeRetry = y.hooks.beforeRetry || []),
                            y.hooks.beforeRetry.push(async (t) => {
                                await p({ request: t.request, options: t.options, error: t.error, retryAttempt: t.retryCount, clientRetryConfig: o });
                            })),
                        r)
                    ) {
                        let t,
                            { beforeRequest: e, beforeRetry: s, beforeError: i, afterResponse: a } = r;
                        void 0 === y.hooks && (y.hooks = {}),
                            Array.isArray(e) &&
                                (y.hooks.beforeRequest = e.map((e) => async (s, i) => {
                                    t = Date.now();
                                    let a = { ...this.normalizeOptions(s, i), headers: s.headers };
                                    await e(a);
                                })),
                            Array.isArray(s) &&
                                ((y.hooks.beforeRetry = y.hooks.beforeRetry || []),
                                (y.hooks.beforeRetry = y.hooks.beforeRetry.concat(
                                    s.map((t) => async (e) => {
                                        let { request: s, options: i, error: a, retryCount: n } = e;
                                        await t(this.errorConverter(a, s, i), n);
                                    }),
                                ))),
                            Array.isArray(i) && (y.hooks.beforeError = i.map((t) => async (e) => (await t(this.errorConverter(e)), e))),
                            Array.isArray(a) &&
                                (y.hooks.afterResponse = a.map((e) => async (s, i, a) => {
                                    let n = this.normalizeOptions(s, i),
                                        r = Date.now();
                                    return await e(this.responseConverter(a, n, { start: t, response: r })), a;
                                }));
                    }
                    return (
                        void 0 !== g &&
                            (void 0 === y.hooks && (y.hooks = {}),
                            void 0 === y.hooks.beforeRequest && (y.hooks.beforeRequest = []),
                            y.hooks.beforeRequest.push((t) => {
                                if (g) for (let e of g) t.headers.has(e) && t.headers.delete(e);
                            })),
                        y
                    );
                }
                responseConverter(t, e, s) {
                    return {
                        headers: Object.fromEntries(t.headers.entries()),
                        statusCode: t.status,
                        statusMessage: t.statusText,
                        url: t.url,
                        json: t.json.bind(t),
                        text: t.text.bind(t),
                        arrayBuffer: t.arrayBuffer.bind(t),
                        timings: s,
                        clone: () => this.responseConverter(t.clone(), e, s),
                        request: { prefixUrl: e.prefixUrl, headers: e.headers, searchParams: e.searchParams, method: e.method },
                    };
                }
                normalizeOptions(t, e) {
                    let s = new URL(t.url);
                    return {
                        headers: this.normalizeHeaders(e.headers),
                        searchParams: new URLSearchParams(s.search),
                        json: t.json,
                        url: t.url,
                        method: this.convertMethod(e.method),
                        timeout: void 0,
                    };
                }
                normalizeHeaders(t) {
                    return void 0 === t ? {} : t instanceof Headers ? Object.fromEntries(t.entries()) : Array.isArray(t) ? Object.fromEntries(t) : t;
                }
                errorConverter(t, e, s) {
                    if (t instanceof a.H || t instanceof n.M)
                        return new c.G(t.message, { statusCode: t instanceof n.M ? o.X.REQUEST_TIMEOUT : t.response.status, cause: t });
                    let i = null;
                    return (
                        e &&
                            s &&
                            (i = {
                                headers: null == s ? void 0 : s.headers,
                                originalRequestHeaders: e.headers,
                                url: null == e ? void 0 : e.url,
                                method: null == e ? void 0 : e.method,
                            }),
                        new l.m(t.message, { cause: { error: t, request: i } })
                    );
                }
                convertMethod(t) {
                    return void 0 !== t && h.includes(t) ? t.toUpperCase() : 'GET';
                }
                convertMethods(t) {
                    let e = new Set();
                    return (
                        t.forEach((t) => {
                            h.includes(t) && e.add(t.toUpperCase());
                        }),
                        [...e]
                    );
                }
                constructor(t = {}) {
                    var e, s, a, n;
                    (0, i._)(this, 'client', void 0),
                        (0, i._)(this, 'afterTimeoutHooks', []),
                        (0, i._)(this, 'requestDoneHooks', []),
                        (this.client = r.Ay.create(this.optionsConverter(t))),
                        (this.afterTimeoutHooks = null != (a = null == (e = t.hooks) ? void 0 : e.afterTimeout) ? a : []),
                        (this.requestDoneHooks = null != (n = null == (s = t.hooks) ? void 0 : s.onRequestDone) ? n : []);
                }
            }
        },
        86420: (t, e, s) => {
            'use strict';
            s.d(e, { g: () => r });
            var i = s(96559),
                a = s(76898),
                n = s(77220);
            class r extends n.X {
                async getTracksFilters(t, e) {
                    let s = (0, a.F)({ trackIds: t.trackIds });
                    return (
                        await this.httpClient.post(
                            'filters/tracks',
                            this.createHttpOptions({ timeoutKey: 'getTracksFilters', params: t, json: s, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                async getFilterName(t, e) {
                    return (
                        await this.httpClient.get(
                            'filters/'.concat(t.filterId),
                            this.createHttpOptions({ timeoutKey: 'getFilterName', params: t, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                constructor(t, e) {
                    super(t, e), (0, i._)(this, 'httpClient', void 0), (0, i._)(this, 'config', void 0), (this.httpClient = t), (this.config = e);
                }
            }
        },
        86622: (t, e, s) => {
            'use strict';
            var i;
            s.d(e, { Q: () => a, c: () => i }),
                (function (t) {
                    (t[(t.ERROR = 10)] = 'ERROR'),
                        (t[(t.WARNING = 20)] = 'WARNING'),
                        (t[(t.INFO = 30)] = 'INFO'),
                        (t[(t.DEBUG = 40)] = 'DEBUG'),
                        (t[(t.TRACE = 50)] = 'TRACE');
                })(i || (i = {}));
            let a = { [i.ERROR]: 'error', [i.WARNING]: 'warn', [i.INFO]: 'info', [i.DEBUG]: 'debug', [i.TRACE]: 'trace' };
        },
        87716: (t, e, s) => {
            'use strict';
            s.d(e, { q: () => o });
            var i = s(96559),
                a = s(77220),
                n = s(76898),
                r = s(53676);
            class o extends a.X {
                async getPromoAlbumInfo(t, e) {
                    return (
                        await this.httpClient.get(
                            'promo/albums/'.concat(t.albumId),
                            this.createHttpOptions({
                                timeoutKey: 'getPromoAlbumInfo',
                                params: t,
                                signal: null == e ? void 0 : e.signal,
                                searchParams: (0, r.P)({ campaignId: t.campaignId }),
                            }),
                        )
                    ).json();
                }
                async getAlbumCpaId(t, e) {
                    return (
                        await this.httpClient.get(
                            'promo/albums/'.concat(t.albumId, '/cpa-id'),
                            this.createHttpOptions({ timeoutKey: 'getAlbumCpaId', params: t, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                async sendFeedback(t, e) {
                    await this.httpClient.post(
                        'promo/feedback',
                        this.createHttpOptions({
                            timeoutKey: 'sendFeedback',
                            params: t,
                            signal: null == e ? void 0 : e.signal,
                            json: (0, n.F)({ reaction: t.reaction, yclid: t.yclid, campaignId: t.campaignId, trackId: t.trackId }),
                        }),
                    );
                }
                constructor(t, e) {
                    super(t, e), (0, i._)(this, 'httpClient', void 0), (0, i._)(this, 'config', void 0), (this.httpClient = t), (this.config = e);
                }
            }
        },
        88246: (t, e, s) => {
            'use strict';
            s.d(e, { x: () => a });
            var i = s(9348);
            let a = (t) => {
                t.headers.has('x-request-id') || t.headers.set('x-request-id', (0, i.A)());
            };
        },
        88660: (t, e, s) => {
            'use strict';
            s.d(e, { w: () => n });
            var i = s(96559),
                a = s(77220);
            class n extends a.X {
                async getAllIds(t, e) {
                    return (
                        await this.httpClient.get(
                            'library/all-ids',
                            this.createHttpOptions({ timeoutKey: 'getAllIds', params: t, signal: null == e ? void 0 : e.signal }),
                        )
                    ).json();
                }
                constructor(t, e) {
                    super(t, e), (0, i._)(this, 'httpClient', void 0), (0, i._)(this, 'config', void 0), (this.httpClient = t), (this.config = e);
                }
            }
        },
        90579: (t, e, s) => {
            'use strict';
            s.d(e, { b: () => a });
            var i = s(14287);
            let a = (t) =>
                class extends t {
                    error(t, e) {
                        !(t instanceof i.m5) && (t instanceof Error || 'string' == typeof t) && super.error(t, e);
                    }
                    constructor(t) {
                        super(t);
                    }
                };
        },
        91927: (t, e, s) => {
            'use strict';
            s.d(e, { q: () => c });
            var i = s(96559),
                a = s(46175),
                n = s(59955),
                r = s(21863),
                o = s(98388);
            let l = () => 'SECRET';
            class c {
                formatMessage(t, e) {
                    let s,
                        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        n = arguments.length > 3 ? arguments[3] : void 0,
                        r = String(e instanceof Error && e.stack ? e.stack : e),
                        l = (0, o.A)({ ...this.additionalData, ...i });
                    return (Object.keys(l).length && (s = this.obfuscateData(l)), n) ? ''.concat(r, ' ').concat(a(s)) : [r, s];
                }
                obfuscateData(t) {
                    var e;
                    if (null == (e = this.secureFields) ? void 0 : e.length) for (let e of this.secureFields) void 0 !== (0, n.A)(t, e) && (0, r.A)(t, e, l());
                    return t;
                }
                constructor({ additionalData: t, maxLogLevel: e, secureFields: s }) {
                    (0, i._)(this, 'maxLogLevel', void 0),
                        (0, i._)(this, 'secureFields', void 0),
                        (0, i._)(this, 'additionalData', void 0),
                        (this.maxLogLevel = e),
                        (this.secureFields = s),
                        (this.additionalData = t);
                }
            }
        },
        92103: (t, e, s) => {
            'use strict';
            s.d(e, { I: () => o });
            var i = s(96559),
                a = s(77220),
                n = s(53676),
                r = s(76898);
            class o extends a.X {
                async getMusicHistory(t, e) {
                    return (
                        await this.httpClient.get(
                            'music-history',
                            this.createHttpOptions({
                                timeoutKey: 'getMusicHistory',
                                params: t,
                                signal: null == e ? void 0 : e.signal,
                                searchParams: (0, n.P)({ fullModelsCount: t.fullModelsCount }),
                            }),
                        )
                    ).json();
                }
                async getMusicHistoryItems(t, e) {
                    return (
                        await this.httpClient.post(
                            'music-history/items',
                            this.createHttpOptions({
                                timeoutKey: 'getMusicHistoryItems',
                                params: t,
                                signal: null == e ? void 0 : e.signal,
                                json: (0, r.F)({ items: t.items }),
                            }),
                        )
                    ).json();
                }
                constructor(t, e) {
                    super(t, e), (0, i._)(this, 'httpClient', void 0), (0, i._)(this, 'config', void 0), (this.httpClient = t), (this.config = e);
                }
            }
        },
        93076: (t, e, s) => {
            'use strict';
            s.d(e, { a: () => r });
            var i = s(96559),
                a = s(77220),
                n = s(53676);
            class r extends a.X {
                async getTopByGenre(t, e) {
                    return (
                        await this.httpClient.get(
                            'top/'.concat(t.category),
                            this.createHttpOptions({
                                timeoutKey: 'getTopByGenre',
                                params: t,
                                searchParams: (0, n.P)({
                                    genre: t.genre,
                                    period: t.period,
                                    page: t.page,
                                    pageSize: t.pageSize,
                                    popularTracksPerArtist: t.popularTracksPerArtist,
                                    chartRegion: t.chartRegion,
                                }),
                                signal: null == e ? void 0 : e.signal,
                            }),
                        )
                    ).json();
                }
                constructor(t, e) {
                    super(t, e), (0, i._)(this, 'httpClient', void 0), (0, i._)(this, 'config', void 0), (this.httpClient = t), (this.config = e);
                }
            }
        },
        94150: (t, e, s) => {
            'use strict';
            s.d(e, { l: () => n });
            var i = s(96559),
                a = s(77220);
            class n extends a.X {
                async getPins(t, e) {
                    return (
                        await this.httpClient.get('pins', this.createHttpOptions({ timeoutKey: 'getPins', params: t, signal: null == e ? void 0 : e.signal }))
                    ).json();
                }
                constructor(t, e) {
                    super(t, e), (0, i._)(this, 'httpClient', void 0), (0, i._)(this, 'config', void 0), (this.httpClient = t), (this.config = e);
                }
            }
        },
        94753: (t, e, s) => {
            var i = {
                './clientSafeConfig/default.ts': [83491, 3491],
                './clientSafeConfig/development.ts': [6071, 6071],
                './clientSafeConfig/production.ts': [82965, 2965],
                './clientSafeConfig/qa.ts': [45396, 3015],
                './clientSafeConfig/stress.ts': [65989, 8370],
                './clientSafeConfig/tokens/DevToolsTokens.ts': [62901],
                './default.ts': [80738, 8357],
                './development.ts': [58814, 8814],
                './production.ts': [10622, 622],
                './qa.ts': [9259, 9259],
                './retryPolicyConfigs/musicExternalApiRetryPolicyConfig.ts': [49775],
                './retryPolicyConfigs/musicExternalApiRetryPolicyServerConfig.ts': [52580, 2580],
                './stress.ts': [83273, 3273],
                './types/ConfigVariables.ts': [62638, 2638],
                './types/ConfigVariablesMainPlayback.ts': [28170, 8170],
                './types/ConfigVariablesPayment.ts': [10588, 588],
                './types/ConfigVariablesPlayer.ts': [68631, 8631],
                './types/ConfigVariablesResource.ts': [43654, 3654],
                './types/ConfigVariablesTelemetry.ts': [78213, 8213],
                './types/ConfigVariablesTrailerPlayback.ts': [46276, 6276],
                './types/ConfigVariablesVHMediaProvider.ts': [58713, 8713],
                './utils/getAfishaClientId.ts': [39399, 9399],
                './utils/getClientSafeConfig.ts': [27493],
                './utils/getConfig.ts': [12979],
            };
            function a(t) {
                if (!s.o(i, t))
                    return Promise.resolve().then(() => {
                        var e = Error("Cannot find module '" + t + "'");
                        throw ((e.code = 'MODULE_NOT_FOUND'), e);
                    });
                var e = i[t],
                    a = e[0];
                return Promise.all(e.slice(1).map(s.e)).then(() => s(a));
            }
            (a.keys = () => Object.keys(i)), (a.id = 94753), (t.exports = a);
        },
        95198: (t, e, s) => {
            'use strict';
            s.d(e, { L: () => r });
            var i = s(96559),
                a = s(77220),
                n = s(76898);
            class r extends a.X {
                async sync(t, e) {
                    return (
                        await this.httpClient.post(
                            'collection/sync',
                            this.createHttpOptions({
                                timeoutKey: 'sync',
                                params: t,
                                signal: null == e ? void 0 : e.signal,
                                json: (0, n.F)({
                                    likedAlbums: t.likedAlbums,
                                    likedArtists: t.likedArtists,
                                    likedClips: t.likedClips,
                                    likedTracks: t.likedTracks,
                                    presavedAlbums: t.presavedAlbums,
                                    ownPlaylists: t.ownPlaylists,
                                    likedPlaylists: t.likedPlaylists,
                                }),
                            }),
                        )
                    ).json();
                }
                constructor(t, e) {
                    super(t, e), (0, i._)(this, 'httpClient', void 0), (0, i._)(this, 'config', void 0), (this.httpClient = t), (this.config = e);
                }
            }
        },
        95998: (t, e, s) => {
            'use strict';
            s.d(e, { c: () => i });
            let i = async (t) => new Promise((e) => setTimeout(e, t));
        },
        96992: (t, e, s) => {
            'use strict';
            s.d(e, { _: () => r });
            var i = s(96559),
                a = s(77220),
                n = s(53676);
            class r extends a.X {
                async getAvailabilityTracks(t, e) {
                    return (
                        await this.httpClient.post(
                            'availability/tracks',
                            this.createHttpOptions({
                                timeoutKey: 'getAvailabilityTracks',
                                params: t,
                                signal: null == e ? void 0 : e.signal,
                                searchParams: (0, n.P)({ trackIds: t.trackIds }),
                            }),
                        )
                    ).json();
                }
                constructor(t, e) {
                    super(t, e), (0, i._)(this, 'httpClient', void 0), (0, i._)(this, 'config', void 0), (this.httpClient = t), (this.config = e);
                }
            }
        },
        99676: (t, e, s) => {
            'use strict';
            s.d(e, { s: () => n });
            var i = s(96559),
                a = s(77220);
            class n extends a.X {
                async uploadFile(t, e) {
                    return (
                        await this.httpClient.post(
                            t.url,
                            this.createHttpOptions(
                                {
                                    timeoutKey: 'uploadFile',
                                    params: t,
                                    body: t.formData,
                                    excludeHeaders: ['x-request-id', 'x-retry-count'],
                                    signal: null == e ? void 0 : e.signal,
                                },
                                { withoutHeaders: !0 },
                            ),
                        )
                    ).json();
                }
                async reportForAlbumPromo(t, e) {
                    await this.httpClient.get(
                        t,
                        this.createHttpOptions(
                            { timeoutKey: 'reportForAlbumPromo', excludeHeaders: ['x-request-id', 'x-retry-count'], signal: null == e ? void 0 : e.signal },
                            { withoutHeaders: !0 },
                        ),
                    );
                }
                async getLyricsText(t, e) {
                    return (
                        await this.httpClient.get(
                            t,
                            this.createHttpOptions(
                                { timeoutKey: 'getLyricsText', excludeHeaders: ['x-request-id', 'x-retry-count'], signal: null == e ? void 0 : e.signal },
                                { withoutHeaders: !0 },
                            ),
                        )
                    ).text();
                }
                constructor(t, e) {
                    super(t, e), (0, i._)(this, 'httpClient', void 0), (0, i._)(this, 'config', void 0), (this.httpClient = t), (this.config = e);
                }
            }
        },
    },
]);
