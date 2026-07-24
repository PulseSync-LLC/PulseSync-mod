'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5283],
    {
        1045: (e, i, t) => {
            t.d(i, { k: () => r });
            let r = 100;
        },
        1052: (e, i, t) => {
            t.d(i, { G: () => g });
            var r = t(60754),
                n = t(21263),
                a = t(80785),
                l = t(15567),
                s = t(79406),
                o = t(8322),
                u = t(99703);
            let d = r.gK.model('VibeAgent', { animationUri: r.gK.string, cover: u.$, entityType: r.gK.maybe(r.gK.string) }),
                g = r.gK
                    .model('Vibe', {
                        title: r.gK.optional(r.gK.string, ''),
                        description: r.gK.maybe(r.gK.string),
                        seeds: r.gK.array(r.gK.string),
                        imageUrl: r.gK.maybe(r.gK.string),
                        animationUrl: r.gK.maybe(r.gK.string),
                        backgroundImageUrl: r.gK.maybe(r.gK.string),
                        backgroundColor: r.gK.maybe(r.gK.string),
                        type: r.gK.maybe(r.gK.string),
                        colors: r.gK.maybe(r.gK.model({ average: r.gK.maybe(r.gK.string), waveText: r.gK.maybe(r.gK.string) })),
                        agent: r.gK.maybe(d),
                    })
                    .views((e) => {
                        let i = {
                            get stationId() {
                                var t;
                                return null != (t = e.seeds[0]) ? t : '';
                            },
                            get seedsId() {
                                return e.seeds.join(',');
                            },
                            get context() {
                                if (e.seeds) {
                                    if (i.stationId !== o.M1) return e.title;
                                    else if (e.seeds.length > 1) return e.title;
                                }
                                return null;
                            },
                            get pinId() {
                                return (0, n.f)(e.seeds);
                            },
                            get isPinned() {
                                if (!(0, r._n)(e)) return !1;
                                let { pinsCollection: i } = (0, l.M)(e);
                                return i.isPinned(this.pinId);
                            },
                            get stationType() {
                                var u, d;
                                return null != (d = null == (u = i.stationId) ? void 0 : u.split(':')[0]) ? d : '';
                            },
                            get isMix() {
                                return e.type === a.y.MIX;
                            },
                            get isQ2V() {
                                return e.type === a.y.Q2V;
                            },
                            get shouldShowAgent() {
                                if (!(0, r._n)(e)) return !1;
                                let { experiments: i } = (0, l.M)(e);
                                return i.checkExperiment(s.z.WebNextWaveAgentExperiment, 'on');
                            },
                            get cover() {
                                return (0, r.wg)({ uri: e.imageUrl, color: e.backgroundColor });
                            },
                        };
                        return i;
                    })
                    .actions((e) => ({
                        getKey: (i) => ''.concat(i, '_').concat(e.seeds[0]),
                        togglePin: (0, r.L3)(function* () {
                            if (!(0, r._n)(e)) return;
                            let { pinsCollection: i, user: t } = (0, l.M)(e);
                            if (t.isAuthorized) return yield i.toggleVibePin({ seeds: e.seeds }, e.pinId);
                        }),
                        getDescription() {
                            let i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '';
                            if (!(0, r._n)(e)) return i;
                            let { experiments: t } = (0, l.M)(e);
                            return t.checkExperiment(s.z.WebNextVibeDescription, 'on') && void 0 !== (null == e ? void 0 : e.description) ? e.description : i;
                        },
                    }));
        },
        5482: (e, i, t) => {
            t.d(i, { I: () => a });
            var r = t(60754),
                n = t(57367);
            let a = t(38396).Z.props({ artists: r.gK.maybe(r.gK.array(n.P)) });
        },
        12388: (e, i, t) => {
            t.d(i, { J: () => s });
            var r = t(60754),
                n = t(87411),
                a = t(57367),
                l = t(44032);
            let s = n.G.props({ artists: r.gK.maybe(r.gK.array(a.P)), chart: r.gK.maybe(l.I) }).views((e) => ({
                get artistNames() {
                    var i;
                    return null == (i = e.artists) ? void 0 : i.map((e) => e.name).join(', ');
                },
                get artistName() {
                    var t, r, n, a;
                    if (null == (r = e.artists) || null == (t = r[0]) ? void 0 : t.various) return;
                    return null == (a = e.artists) || null == (n = a[0]) ? void 0 : n.name;
                },
                get artistIds() {
                    var l;
                    return null == (l = e.artists) ? void 0 : l.map((e) => e.id);
                },
                get artistId() {
                    var s, o;
                    return null == (o = e.artists) || null == (s = o[0]) ? void 0 : s.id;
                },
            }));
        },
        13365: (e, i, t) => {
            var r;
            t.d(i, { _: () => r }),
                (function (e) {
                    (e.UP = 'up'), (e.DOWN = 'down'), (e.SAME = 'same'), (e.NEW = 'new');
                })(r || (r = {}));
        },
        14257: (e, i, t) => {
            t.d(i, { S: () => r });
            var r = (function (e) {
                return (e.Dark = 'dark'), (e.Light = 'light'), e;
            })({});
        },
        19379: (e, i, t) => {
            t.d(i, { c: () => n });
            var r = t(99029),
                n = (function (e) {
                    return (
                        (e.Theme = 'theme'),
                        (e.AllowAnalyticsLogs = 'AllowAnalyticsLogs'),
                        (e.NavbarCollapsed = 'navbarCollapsed'),
                        (e.SessionHistoryState = 'sessionHistoryState'),
                        (e.SessionId = 'Session_id'),
                        (e.YmPlayerRepeatMode = 'ymPlayerRepeatMode'),
                        (e.YmPlayerVolume = 'ymPlayerVolume'),
                        (e.YmPlayerPrevVolume = 'ymPlayerPrevVolume'),
                        (e.YmPlayerShuffle = 'ymPlayerShuffle'),
                        (e.YmPlayerQuality = 'ymPlayerQuality'),
                        (e.YmUid = 'ymUid'),
                        (e.YandexLogin = 'yandex_login'),
                        (e.YandexUid = 'yandexuid'),
                        (e.Oauth = 'oauth'),
                        (e.OauthState = 'oauthState'),
                        (e.ArtistDonationButtonOnbordingShowed = 'ArtistDonationButtonOnbordingShowed'),
                        (e.TrailerButtonOnbordingShowed = 'TrailerButtonOnbordingShowed'),
                        (e.ConcertsTabOnboardingShowed = 'ConcertsTabOnboardingShowed'),
                        (e[(e.SavedUserLanguage = r.s)] = 'SavedUserLanguage'),
                        (e.ExEx = 'ExEx'),
                        (e.EqualizerConfig = 'EqualizerConfig'),
                        (e.EnableMetricsPluginDebugMode = 'EnableMetricsPluginDebugMode'),
                        (e.EnableYnisonMetricsDebugMode = 'EnableYnisonMetricsDebugMode'),
                        (e.OverwrittenExperiments = 'overwrittenExperiments'),
                        (e.Offer = 'offer'),
                        (e.OfflineMode = 'offlineMode'),
                        (e.NavbarDownloadBarIsHidden = 'navbarDownloadBarIsHidden'),
                        (e.OfflineDegradation = 'offlineDegradation'),
                        (e.DesktopPaywall = 'desktopPaywall'),
                        (e.LiteVersionMode = 'liteVersionMode'),
                        (e.ForceNextWeb = 'force_next_web'),
                        (e.PreventNextWeb = 'prevent_next_web'),
                        (e.DownloadMobileApp = 'downloadMobileApp'),
                        (e.HideDeeplinkAndOnelink = 'hideDeeplinkAndOnelink'),
                        (e.YnisonDeviceId = 'ynisonDeviceId'),
                        (e.CrossFadeMode = 'crossFadeMode'),
                        (e.CustomPlayerThumbConfig = 'CustomPlayerThumbConfig'),
                        (e.BuySubscriptionParams = 'buySubscriptionParams'),
                        (e.MocksConfiguration = 'mocksConfiguration'),
                        (e.EnableCrossfadeDebugMode = 'EnableCrossfadeDebugMode'),
                        (e.EnableBurstDebounceDebugMode = 'EnableBurstDebounceDebugMode'),
                        (e.ConcertLocation = 'concertLocation'),
                        e
                    );
                })({});
        },
        20982: (e, i, t) => {
            t.d(i, { K: () => n });
            var r = t(55985);
            let n = (e) => {
                var i;
                if (e) return { animationUri: e.animationUri, cover: (0, r.p)(e.cover), entityType: null == (i = e.entity) ? void 0 : i.type };
            };
        },
        23361: (e, i, t) => {
            t.d(i, { s: () => s });
            var r = t(60754),
                n = t(74417),
                a = t(51322),
                l = t(26544);
            let s = (e) => {
                var i, t;
                let { album: s, artists: o, bookmateOptionRequired: u, chart: d, likesCount: g, trailer: c, releaseYear: m, releaseDate: y } = e,
                    { available: v, disclaimers: b } = (0, a.f)(s);
                return (0, r.wg)({
                    id: s.id,
                    title: s.title,
                    coverUri: null == (i = s.cover) ? void 0 : i.uri,
                    type: s.albumType,
                    disclaimers: b,
                    artists: null == o ? void 0 : o.map((e) => (0, n.a)({ artist: e })),
                    averageColor: null == (t = s.cover) ? void 0 : t.color,
                    isAvailable: v,
                    likesCount: g,
                    bookmateOptionRequired: u,
                    chart: d,
                    trailer: (0, l.m)(c),
                    listeningFinished: s.listeningFinished,
                    year: m ? Number(m) : void 0,
                    releaseDate: y,
                });
            };
        },
        32012: (e, i, t) => {
            t.d(i, { v: () => s });
            var r = t(60754),
                n = t(69757),
                a = t(84060),
                l = t(75819);
            let s = (e, i) => {
                var t, s;
                let o = null == (t = e.artists) ? void 0 : t.map(a.d),
                    u = null == (s = e.albums) ? void 0 : s.map(n.e);
                return (0, r.wg)({ ...(0, l.g)(e, i), artists: o, albums: u });
            };
        },
        38396: (e, i, t) => {
            t.d(i, { Z: () => a });
            var r = t(60754);
            let n = r.gK.model('TrackIdModel', { id: r.gK.union(r.gK.string, r.gK.number), albumId: r.gK.maybe(r.gK.number), timestamp: r.gK.maybe(r.gK.string) }),
                a = t(74885)
                    .$.props({ tracks: r.gK.maybe(r.gK.array(n)) })
                    .actions((e) => ({ getKey: (i) => ''.concat(i, '_').concat(e.id) }));
        },
        38777: (e, i, t) => {
            t.d(i, { O: () => m });
            var r = t(60754),
                n = t(96333),
                a = t(68100),
                l = t(15567),
                s = t(85017),
                o = t(36477),
                u = t(52947),
                d = t(45346),
                g = t(56e3);
            let c = [n.S.MUSIC, n.S.TRACK, n.S.NOISE, n.S.ASMR],
                m = r.gK
                    .compose(
                        r.gK.model('BaseTrack', {
                            id: r.gK.string,
                            isAvailable: r.gK.boolean,
                            isRemoved: r.gK.boolean,
                            title: r.gK.string,
                            trackSource: r.gK.maybe(r.gK.enumeration(Object.values(a.J))),
                            version: r.gK.maybe(r.gK.string),
                            durationMs: r.gK.maybe(r.gK.number),
                            coverUri: r.gK.maybe(r.gK.string),
                            averageColor: r.gK.maybe(r.gK.string),
                            trackParameters: r.gK.maybe(r.gK.frozen()),
                            albumId: r.gK.maybe(r.gK.number),
                            type: r.gK.maybe(r.gK.enumeration(Object.values(n.S))),
                            pubDate: r.gK.maybe(r.gK.string),
                            hasLyrics: r.gK.maybe(r.gK.boolean),
                            hasSyncLyrics: r.gK.maybe(r.gK.boolean),
                            trailer: r.gK.maybe(d.a),
                            shouldRememberPosition: r.gK.maybe(r.gK.boolean),
                            streamProgress: r.gK.maybe(g.B),
                            shortDescription: r.gK.maybe(r.gK.string),
                            major: r.gK.maybeNull(r.gK.frozen()),
                            clipIds: r.gK.maybeNull(r.gK.frozen()),
                            genre: r.gK.maybeNull(r.gK.string),
                            realId: r.gK.maybe(r.gK.string),
                        }),
                        u.E,
                    )
                    .views((e) => {
                        let i = {
                            get isLiked() {
                                if ((0, r._n)(e)) {
                                    let { library: i } = (0, l.M)(e);
                                    return i.isTrackLiked(e.id);
                                }
                                return !1;
                            },
                            get isDownloaded() {
                                if (!(0, r._n)(e)) return !1;
                                let { slam: i } = (0, l.M)(e);
                                return i.isTrackDownloaded(e.id);
                            },
                            get isDownloading() {
                                if (!(0, r._n)(e)) return !1;
                                let { slam: i } = (0, l.M)(e);
                                return i.isTrackDownloading(e.id);
                            },
                            get downloadingProgress() {
                                if (!(0, r._n)(e)) return 0;
                                let { slam: i } = (0, l.M)(e);
                                return i.getTrackDownloadingProgress(e.id);
                            },
                            get isAvailableForDownload() {
                                if (!(0, r._n)(e)) return !1;
                                return (e.type && c.includes(e.type)) || !!i.isUGC;
                            },
                            getUrl(i) {
                                let t = e.albumId ? '/album/:albumId/track/:trackId' : '/track/:trackId',
                                    r = e.albumId ? { albumId: e.albumId, trackId: e.id } : { trackId: e.id },
                                    { href: n } = (0, o.u)(t, { params: r, query: i });
                                return n;
                            },
                            get url() {
                                return i.getUrl();
                            },
                            get isDisliked() {
                                if ((0, r._n)(e)) {
                                    let { library: i } = (0, l.M)(e);
                                    return i.isTrackDisliked(e.id);
                                }
                                return !1;
                            },
                            get isTrackPodcast() {
                                if ((0, r._n)(e)) return e.type === n.S.PODCAST;
                                return !1;
                            },
                            get isPlusSubscribed() {
                                if (!(0, r._n)(e)) return !1;
                                let { user: i } = (0, l.M)(e);
                                return i.hasPlus;
                            },
                            get isSyncLyricsAvailableWithOfflineFeature() {
                                if (!(0, r._n)(e)) return !1;
                                let { slam: i } = (0, l.M)(e);
                                return !!e.hasSyncLyrics && !i.isOfflineModeEnabled;
                            },
                            get isSyncLyricsAvailable() {
                                return this.isPlusSubscribed && this.isSyncLyricsAvailableWithOfflineFeature;
                            },
                            get isLyricsAvailable() {
                                if (!(0, r._n)(e)) return !1;
                                let { slam: i, user: t } = (0, l.M)(e);
                                if (!t.hasPlus) return !1;
                                return !!e.hasLyrics && !i.isOfflineModeEnabled;
                            },
                            get isTrackAudiobook() {
                                if ((0, r._n)(e)) return e.type === n.S.AUDIOBOOK;
                                return !1;
                            },
                            get isTrackFairyTale() {
                                if ((0, r._n)(e)) return e.type === n.S.FAIRY_TALE;
                                return !1;
                            },
                            get isTrackNonMusic() {
                                return this.isTrackPodcast || this.isTrackAudiobook || this.isTrackFairyTale;
                            },
                            get isTrackMusic() {
                                if ((0, r._n)(e)) return e.type === n.S.TRACK || e.type === n.S.MUSIC;
                                return !1;
                            },
                            get isUGC() {
                                if ((0, r._n)(e)) return e.trackSource === a.J.UGC;
                                return;
                            },
                            get isOwn() {
                                if ((0, r._n)(e)) return e.trackSource === a.J.OWN;
                                return;
                            },
                            get isOwnReplacedToUGC() {
                                if ((0, r._n)(e)) return e.trackSource === a.J.OWN_REPLACED_TO_UGC;
                                return;
                            },
                            get seeds() {
                                return ['track:'.concat(e.id)];
                            },
                            get isLegalRejected() {
                                return e.getIsLegalRejected(e.isAvailable);
                            },
                            get isUnsafeLegal() {
                                return e.getIsUnsafeLegal(e.isAvailable);
                            },
                            get entityId() {
                                if (e.albumId) return ''.concat(e.id, ':').concat(e.albumId);
                                return e.id;
                            },
                            get hasAlbumLink() {
                                if (!(0, r._n)(e)) return !1;
                                return !!(e.albumId && this.isOwn && e.isAvailable);
                            },
                            get hasTrackLink() {
                                if (!(0, r._n)(e)) return !1;
                                let {
                                    settings: { isMobile: i },
                                    slam: t,
                                } = (0, l.M)(e);
                                return e.isAvailable && !this.isUGC && !this.isOwnReplacedToUGC && !i && !t.isOfflineModeEnabled;
                            },
                            get isNonUserGenerated() {
                                if (!(0, r._n)(e)) return !1;
                                return !i.isUGC && !i.isOwnReplacedToUGC;
                            },
                            get hasModalAccess() {
                                return e.hasModalDisclaimer;
                            },
                            getDisclaimerEntityRef: (t) =>
                                t
                                    ? { entityType: t, entityId: e.id }
                                    : i.isTrackPodcast
                                      ? { entityType: s.n.PODCAST, entityId: e.id }
                                      : i.isTrackAudiobook
                                        ? { entityType: s.n.AUDIOBOOK, entityId: e.id }
                                        : { entityType: s.n.TRACK, entityId: e.id },
                        };
                        return i;
                    })
                    .actions((e) => ({
                        afterCreate() {
                            e.trackType = e.type;
                        },
                        toggleLike: (0, r.L3)(function* () {
                            if (!(0, r._n)(e)) return;
                            let { library: i, user: t } = (0, l.M)(e);
                            if (t.isAuthorized) return yield i.toggleTrackLike({ entityId: e.id, albumId: e.albumId, userId: t.account.data.uid });
                        }),
                        toggleDislike: (0, r.L3)(function* () {
                            if (!(0, r._n)(e)) return;
                            let { library: i, user: t } = (0, l.M)(e);
                            if (t.isAuthorized) return yield i.toggleTrackDislike({ entityId: e.id, albumId: e.albumId, userId: t.account.data.uid });
                        }),
                        setListeningFinishedStatus: (0, r.L3)(function* () {
                            let i = e.streamProgress;
                            if (i)
                                return (null == i ? void 0 : i.hasEverFinished)
                                    ? yield null == i ? void 0 : i.markUnlistened({ trackId: Number(e.id) })
                                    : yield null == i ? void 0 : i.markListened({ trackId: Number(e.id) });
                        }),
                        getKey: (i) => ''.concat(i, '_').concat(e.id),
                    }));
        },
        39031: (e, i, t) => {
            t.d(i, { b: () => a });
            var r = t(60754),
                n = t(26544);
            let a = (e) => {
                var i, t;
                let { playlist: a, generatedPlaylistType: l, likesCount: s, trailer: o, tracksCount: u } = e;
                return (0, r.wg)({
                    isAvailable: null == (t = a.available) || t,
                    uuid: a.playlistUuid,
                    title: a.title,
                    uid: a.uid,
                    kind: a.kind,
                    coverUri: null == (i = a.cover) ? void 0 : i.uri,
                    generatedPlaylistType: l,
                    likesCount: s,
                    tracksCount: u,
                    trailer: (0, n.m)(o),
                });
            };
        },
        49399: (e, i, t) => {
            t.d(i, { G: () => r });
            var r = (function (e) {
                return (e.IDLE = 'IDLE'), (e.PENDING = 'PENDING'), (e.RESOLVE = 'RESOLVE'), (e.REJECT = 'REJECT'), e;
            })({});
        },
        51322: (e, i, t) => {
            t.d(i, { f: () => r });
            let r = (e) => {
                var i, t, r, n, a, l;
                let s = null == (i = e.available) || i,
                    o = null != (t = e.disclaimers) ? t : [];
                return (
                    e.contentRestrictions &&
                        ((s = null == (a = null == (r = e.contentRestrictions) ? void 0 : r.available) || a),
                        (o = null != (l = null == (n = e.contentRestrictions) ? void 0 : n.disclaimers) ? l : [])),
                    { available: s, disclaimers: o }
                );
            };
        },
        54667: (e, i, t) => {
            t.d(i, { P: () => r, u: () => n });
            var r = (function (e) {
                    return (e[(e.Mobile = 768)] = 'Mobile'), (e[(e.Desktop = 1440)] = 'Desktop'), e;
                })({}),
                n = (function (e) {
                    return (e.Mobile = 'Mobile'), (e.Desktop = 'Desktop'), e;
                })({});
        },
        55985: (e, i, t) => {
            t.d(i, { p: () => n });
            var r = t(60754);
            let n = (e) => (0, r.wg)({ uri: e.uri, color: e.color });
        },
        56e3: (e, i, t) => {
            t.d(i, { B: () => a });
            var r = t(60754),
                n = t(92013);
            let a = r.gK.model('StreamProgress', { endPositionSec: r.gK.maybe(r.gK.number), hasEverFinished: r.gK.maybe(r.gK.boolean) }).actions((e) => ({
                updateEndPositionSec: (i) => {
                    e.endPositionSec = i;
                },
                updateEverFinished: (i) => {
                    e.hasEverFinished = i;
                },
                markListened: (0, r.L3)(function* (i) {
                    let { streamsResource: t, modelActionsLogger: a } = (0, r._$)(e);
                    try {
                        return yield t.markFinished(i);
                    } catch (e) {
                        return a.error(e), n.T.ERROR;
                    }
                }),
                markUnlistened: (0, r.L3)(function* (i) {
                    let { streamsResource: t, modelActionsLogger: a } = (0, r._$)(e);
                    try {
                        return yield t.markUnfinished(i);
                    } catch (e) {
                        return a.error(e), n.T.ERROR;
                    }
                }),
            }));
        },
        68100: (e, i, t) => {
            var r;
            t.d(i, { J: () => r }),
                (function (e) {
                    (e.OWN = 'OWN'), (e.UGC = 'UGC'), (e.OWN_REPLACED_TO_UGC = 'OWN_REPLACED_TO_UGC'), (e.EXTERNAL = 'EXTERNAL');
                })(r || (r = {}));
        },
        74417: (e, i, t) => {
            t.d(i, { a: () => s });
            var r = t(60754),
                n = t(51322),
                a = t(26544),
                l = t(89014);
            let s = (e) => {
                var i, t;
                let { artist: s, trailer: o, isComposer: u, likesCount: d } = e,
                    g = (0, l.F)(s.decomposed),
                    { available: c, disclaimers: m } = (0, n.f)(s);
                return (0, r.wg)({
                    id: String(s.id),
                    name: s.name,
                    coverUri: null == (i = s.cover) ? void 0 : i.uri,
                    various: s.various,
                    decomposed: g,
                    isAvailable: c,
                    disclaimers: m,
                    isComposer: u,
                    averageColor: null == (t = s.cover) ? void 0 : t.color,
                    trailer: (0, a.m)(o),
                    likesCount: d,
                });
            };
        },
        74885: (e, i, t) => {
            t.d(i, { $: () => b });
            var r = t(60754),
                n = t(87953),
                a = t(2047),
                l = t(90404),
                s = t(63380),
                o = t(15567),
                u = t(58008),
                d = t(36477),
                g = t(45346),
                c = t(35597),
                m = t(20168),
                y = t(1045),
                v = t(44265);
            let b = r.gK
                .compose(
                    r.gK.model({
                        uuid: r.gK.string,
                        isAvailable: r.gK.boolean,
                        revision: r.gK.maybe(r.gK.number),
                        uid: r.gK.number,
                        kind: r.gK.number,
                        title: r.gK.maybe(r.gK.string),
                        coverUri: r.gK.maybe(r.gK.string),
                        tracksCount: r.gK.maybe(r.gK.number),
                        averageColor: r.gK.maybe(r.gK.string),
                        generatedPlaylistType: r.gK.maybe(r.gK.string),
                        personalColor: r.gK.maybeNull(r.gK.number),
                        visibility: r.gK.maybe(r.gK.string),
                        trailer: r.gK.maybe(g.a),
                    }),
                    c.t,
                )
                .views((e) => ({
                    get key() {
                        return ''.concat(e.uuid, '_').concat(e.uid, '_').concat(e.kind);
                    },
                    get url() {
                        let { href: i } = (0, d.u)('/playlists/:playlistUuid', { params: { playlistUuid: e.uuid } });
                        return i;
                    },
                    get isLikesCountHidden() {
                        return e.kind === v.j.LIKE || e.kind === v.j.CHART || e.generatedPlaylistType;
                    },
                    get isFavouritePlaylist() {
                        return e.kind === v.j.LIKE;
                    },
                    get isPublic() {
                        return e.visibility === a.L.PUBLIC;
                    },
                    get isLiked() {
                        if (!(0, r._n)(e)) return !1;
                        let { library: i } = (0, o.M)(e);
                        return i.isPlaylistLiked(''.concat(e.uid, ':').concat(e.kind));
                    },
                    get pinId() {
                        return ''.concat(l._.PLAYLIST_ITEM).concat(e.uid, '_').concat(e.kind);
                    },
                    get id() {
                        return ''.concat(e.uid, ':').concat(e.kind);
                    },
                    get isPinned() {
                        if (!(0, r._n)(e)) return !1;
                        let { pinsCollection: i } = (0, o.M)(e);
                        return i.isPinned(this.pinId);
                    },
                    get isOwnPlaylist() {
                        let { user: i } = (0, o.M)(e);
                        return !!(i.isAuthorized && e.uid && i.account.data.uid && e.uid === i.account.data.uid);
                    },
                    get canUserChange() {
                        if (!(0, r._n)(e)) return !1;
                        return this.isOwnPlaylist && !this.isFavouritePlaylist;
                    },
                    get isOwnFavouritePlaylist() {
                        if (!(0, r._n)(e)) return !1;
                        return this.isFavouritePlaylist && this.isOwnPlaylist;
                    },
                }))
                .actions((e) => ({
                    toggleLike: (0, r.L3)(function* () {
                        if (!(0, r._n)(e)) return;
                        let { library: i, user: t } = (0, o.M)(e);
                        if (t.isAuthorized) {
                            let n = yield i.togglePlaylistLike({ userId: t.account.data.uid, entityId: e.id, ownerId: e.uid, kindId: e.kind });
                            return (0, r._n)(e) && n === s.f.OK && (e.isLiked ? e.likePending() : e.unlikePending()), n;
                        }
                    }),
                    togglePin: (0, r.L3)(function* () {
                        if (!(0, r._n)(e)) return;
                        let { pinsCollection: i, user: t } = (0, o.M)(e);
                        if (t.isAuthorized) return yield i.togglePlaylistPin({ uid: e.uid, kind: e.kind }, e.pinId);
                    }),
                    changePlaylist: (0, r.L3)(function* (i) {
                        if (!(0, r._n)(e)) return m.Y.ERROR;
                        let { usersResource: t, modelActionsLogger: a } = (0, r._$)(e);
                        try {
                            var l, s;
                            let r = yield t.changePlaylistRelative({ userId: e.uid, diff: i, revision: null != (l = e.revision) ? l : 0, playlistKind: e.kind });
                            return (e.revision = r.revision), (e.isAvailable = null == (s = r.available) || s), m.Y.OK;
                        } catch (e) {
                            if ((a.error(e), e && 'object' == typeof e && 'statusCode' in e && e.statusCode === n.X1.PRECONDITION_FAILED)) return m.Y.RELOAD;
                            return m.Y.ERROR;
                        }
                    }),
                    changeTitle: (0, r.L3)(function* (i) {
                        if (!(0, r._n)(e)) return u.F.ERROR;
                        if (e.title === i) return u.F.OK;
                        let { usersResource: t, modelActionsLogger: n } = (0, r._$)(e);
                        if (e.canUserChange) {
                            if (i.length < 1 || i.length > y.k) return u.F.ERROR;
                            let r = e.title;
                            e.title = i;
                            try {
                                let n = yield t.changePlaylistTitle({ title: i, userId: e.uid, playlistKind: e.kind });
                                if (!(null == n ? void 0 : n.title)) return (e.title = r), u.F.ERROR;
                                return (e.title = n.title), u.F.OK;
                            } catch (i) {
                                (e.title = r), n.error(i);
                            }
                        }
                        return u.F.ERROR;
                    }),
                    deletePlaylist: (0, r.L3)(function* () {
                        if (!(0, r._n)(e) || !e.canUserChange) return u.F.ERROR;
                        let { pinsCollection: i } = (0, o.M)(e),
                            { usersResource: t, modelActionsLogger: n } = (0, r._$)(e);
                        try {
                            return yield t.deletePlaylist({ userId: e.uid, playlistKind: e.kind }), i.isPinned(e.pinId) && i.deletePin(e.pinId), u.F.OK;
                        } catch (e) {
                            n.error(e);
                        }
                        return u.F.ERROR;
                    }),
                    toggleVisibility: (0, r.L3)(function* (i) {
                        if (!(0, r._n)(e) || (!e.canUserChange && !e.isOwnFavouritePlaylist)) return u.F.ERROR;
                        let { usersResource: t, modelActionsLogger: n } = (0, r._$)(e),
                            { user: l } = (0, o.M)(e),
                            s = e.visibility,
                            d = e.isPublic ? a.L.PRIVATE : a.L.PUBLIC;
                        i && (d = i);
                        try {
                            return (
                                (e.visibility = d),
                                e.isOwnFavouritePlaylist
                                    ? yield l.setSettings({ userMusicVisibility: d })
                                    : yield t.togglePlaylistVisibility({ visibility: d, userId: e.uid, playlistKind: e.kind }),
                                u.F.OK
                            );
                        } catch (e) {
                            n.error(e);
                        }
                        return (e.visibility = s), u.F.ERROR;
                    }),
                    getKey: (i) => ''.concat(i, '_').concat(e.id),
                }));
        },
        75819: (e, i, t) => {
            t.d(i, { g: () => l });
            var r,
                n = t(60754);
            (r || (r = {})).SMART_PREVIEW = 'smart_preview';
            var a = t(93159);
            let l = (e, i) => {
                var t, l, s, o, u, d, g, c, m, y;
                e = e || {};
                let { isSmartPreview: v, hasEverFinished: b } = i || {},
                    K = (0, a.Q)(null == e ? void 0 : e.derivedColors),
                    f = v ? (null == (t = e.smartPreviewParams) ? void 0 : t.durationMs) : null == e ? void 0 : e.durationMs,
                    _ = (0, n.wg)({ available: !!(null == (l = e.specialAudioResources) ? void 0 : l.includes(r.SMART_PREVIEW)) });
                return (0, n.wg)({
                    id: (e.id || 0).toString(),
                    isAvailable: !!(null == e ? void 0 : e.available),
                    isRemoved: (null == e ? void 0 : e.error) === 'not-found',
                    title: null != (m = null == e ? void 0 : e.title) ? m : '',
                    version: null == e ? void 0 : e.version,
                    durationMs: f,
                    coverUri: null == e ? void 0 : e.coverUri,
                    averageColor: K,
                    trackParameters: null == e ? void 0 : e.trackParameters,
                    trackSource: null == e ? void 0 : e.trackSource,
                    albumId: null == (o = e.albums) || null == (s = o[0]) ? void 0 : s.id,
                    disclaimers: e.disclaimers,
                    type: e.type,
                    pubDate: e.pubDate,
                    hasLyrics: null == (u = e.lyricsInfo) ? void 0 : u.hasAvailableTextLyrics,
                    hasSyncLyrics: null == (d = e.lyricsInfo) ? void 0 : d.hasAvailableSyncLyrics,
                    shouldRememberPosition: e.rememberPosition,
                    streamProgress: ((e, i) =>
                        (0, n.wg)({
                            endPositionSec: null == e ? void 0 : e.endPositionSec,
                            hasEverFinished: (null == i ? void 0 : i.hasEverFinished) || (null == e ? void 0 : e.everFinished),
                        }))(null == e ? void 0 : e.streamProgress, { hasEverFinished: b }),
                    shortDescription: null != (y = e.shortDescription) ? y : '',
                    trailer: _,
                    clipIds: e.clipIds,
                    major: e.major ? { id: e.major.id, name: e.major.name } : null,
                    genre: null == (c = e.albums) || null == (g = c[0]) ? void 0 : g.genre,
                    realId: e.realId,
                });
            };
        },
        80785: (e, i, t) => {
            var r;
            t.d(i, { y: () => r }),
                (function (e) {
                    (e.MIX = 'MIX'), (e.Q2V = 'Q2V');
                })(r || (r = {}));
        },
        90404: (e, i, t) => {
            var r;
            t.d(i, { _: () => r }),
                (function (e) {
                    (e.ALBUM_ITEM = 'album_item'),
                        (e.ARTIST_ITEM = 'artist_item'),
                        (e.PLAYLIST_ITEM = 'playlist_item'),
                        (e.TRACK_ITEM = 'track_item'),
                        (e.LIKED_PLAYLIST_ITEM = 'liked_playlist_item'),
                        (e.PERSONAL_PLAYLIST_ITEM = 'personal_playlist_item'),
                        (e.WAVE_ITEM = 'wave_item'),
                        (e.WAVE_AGENT_ITEM = 'wave_agent_item'),
                        (e.MIX = 'mix'),
                        (e.MIX_CARD_ITEM = 'mix_card_item'),
                        (e.LIKED_ALBUM_ITEM = 'liked_album_item'),
                        (e.PRESAVED_ALBUM_ITEM = 'presaved_album_item'),
                        (e.CHART_ALBUM_ITEM = 'chart_album_item'),
                        (e.NON_MUSIC_ALBUM_ITEM = 'non_music_album_item'),
                        (e.MENU_ITEM = 'menu_item'),
                        (e.DONATION_ITEM = 'donation_item'),
                        (e.CLIP = 'clip'),
                        (e.CLIP_ITEM = 'clip_item'),
                        (e.CONCERT_ITEM = 'concert_item'),
                        (e.QUERY_TO_VIBE_ITEM = 'q2v_item');
                })(r || (r = {}));
        },
        91221: (e, i, t) => {
            t.d(i, { l: () => a });
            var r = t(60754),
                n = t(20982);
            let a = (e, i) => {
                var t;
                return (0, r.wg)({ title: e.name, seeds: e.seeds, description: e.description, type: null != (t = e.type) ? t : void 0, agent: (0, n.K)(i) });
            };
        },
        92013: (e, i, t) => {
            var r;
            t.d(i, { T: () => r }),
                (function (e) {
                    (e.OK = 'ok'), (e.ERROR = 'error');
                })(r || (r = {}));
        },
        95732: (e, i, t) => {
            t.d(i, { e: () => a });
            var r = t(60754),
                n = t(20982);
            let a = (e) => {
                var i, t, a, l;
                return (0, r.wg)({
                    title: e.title,
                    description: e.header,
                    seeds: e.seeds,
                    animationUrl: e.animationUrl,
                    backgroundImageUrl: e.backgroundImageUrl,
                    imageUrl: e.imageUrl,
                    colors: {
                        average: null != (a = null == (i = e.colors) ? void 0 : i.average) ? a : '',
                        waveText: null != (l = null == (t = e.colors) ? void 0 : t.waveText) ? l : '',
                    },
                    agent: (0, n.K)(e.agent),
                    type: e.type,
                });
            };
        },
        99212: (e, i, t) => {
            t.d(i, { v: () => u });
            var r = t(60754),
                n = t(87411),
                a = t(57367),
                l = t(44032),
                s = t(38777),
                o = t(58008);
            let u = s.O.props({ artists: r.gK.array(a.P), albums: r.gK.array(n.G), chart: r.gK.maybe(l.I) })
                .views((e) => ({
                    get artistsNames() {
                        var i;
                        return null == (i = e.artists) ? void 0 : i.map((e) => e.name).join(', ');
                    },
                    get mainArtist() {
                        var t, r, n, a;
                        if (null == (r = e.artists) || null == (t = r[0]) ? void 0 : t.various) return null;
                        return null != (a = null == (n = e.artists) ? void 0 : n[0]) ? a : null;
                    },
                    get mainAlbum() {
                        var l, s;
                        return null != (s = null == (l = e.albums) ? void 0 : l[0]) ? s : null;
                    },
                    get index() {
                        var o, u, d;
                        return null != (d = null == (u = e.albums[0]) || null == (o = u.trackPosition) ? void 0 : o.index) ? d : null;
                    },
                    get isAvailableOnlyForPlus() {
                        var g;
                        return !!(null == (g = this.mainAlbum) ? void 0 : g.isAvailableOnlyForPlus);
                    },
                }))
                .actions((e) => ({
                    changeTrackInfo: (0, r.L3)(function* (i, t) {
                        let { ugcResource: n, modelActionsLogger: l } = (0, r._$)(e);
                        if (e.artists.map((e) => e.name).join(', ') === t && i === e.title) return o.F.OK;
                        try {
                            var s;
                            yield n.changeTrack({ trackId: e.id, title: i, artist: t }), (e.title = i);
                            let l = (null == (s = e.artists[0]) ? void 0 : s.id) || '0';
                            if (((e.artists = (0, r.wg)([])), t)) {
                                let i = a.P.create({ id: l, name: t, isAvailable: !0 });
                                e.artists = (0, r.wg)([i]);
                            }
                            return o.F.OK;
                        } catch (e) {
                            return l.error(e), o.F.ERROR;
                        }
                    }),
                }))
                .named('Track');
        },
    },
]);
