(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7642],
    {
        12388: (e, t, r) => {
            'use strict';
            r.d(t, { J: () => l });
            var i = r(60754),
                a = r(87411),
                n = r(57367),
                s = r(44032);
            let l = a.G.props({ artists: i.gK.maybe(i.gK.array(n.P)), chart: i.gK.maybe(s.I) }).views((e) => ({
                get artistNames() {
                    var t;
                    return null == (t = e.artists) ? void 0 : t.map((e) => e.name).join(', ');
                },
                get artistName() {
                    var r, i, a, n;
                    if (null == (i = e.artists) || null == (r = i[0]) ? void 0 : r.various) return;
                    return null == (n = e.artists) || null == (a = n[0]) ? void 0 : a.name;
                },
                get artistIds() {
                    var s;
                    return null == (s = e.artists) ? void 0 : s.map((e) => e.id);
                },
                get artistId() {
                    var l, o;
                    return null == (o = e.artists) || null == (l = o[0]) ? void 0 : l.id;
                },
            }));
        },
        13365: (e, t, r) => {
            'use strict';
            var i;
            r.d(t, { _: () => i }),
                (function (e) {
                    (e.UP = 'up'), (e.DOWN = 'down'), (e.SAME = 'same'), (e.NEW = 'new');
                })(i || (i = {}));
        },
        15858: (e, t, r) => {
            Promise.resolve().then(r.bind(r, 60284));
        },
        23200: (e, t, r) => {
            'use strict';
            r.d(t, { b: () => s });
            var i = r(60754),
                a = r(85796),
                n = r(32012);
            let s = (e, t) => (0, i.wg)({ ...(0, n.v)(e), chart: t && (0, a.w)(t) });
        },
        32012: (e, t, r) => {
            'use strict';
            r.d(t, { v: () => l });
            var i = r(60754),
                a = r(69757),
                n = r(84060),
                s = r(75819);
            let l = (e, t) => {
                var r, l;
                let o = null == (r = e.artists) ? void 0 : r.map(n.d),
                    u = null == (l = e.albums) ? void 0 : l.map(a.e);
                return (0, i.wg)({ ...(0, s.g)(e, t), artists: o, albums: u });
            };
        },
        38777: (e, t, r) => {
            'use strict';
            r.d(t, { O: () => m });
            var i = r(60754),
                a = r(96333),
                n = r(68100),
                s = r(15567),
                l = r(85017),
                o = r(36477),
                u = r(52947),
                d = r(45346),
                c = r(56e3);
            let g = [a.S.MUSIC, a.S.TRACK, a.S.NOISE, a.S.ASMR],
                m = i.gK
                    .compose(
                        i.gK.model('BaseTrack', {
                            id: i.gK.string,
                            isAvailable: i.gK.boolean,
                            isRemoved: i.gK.boolean,
                            title: i.gK.string,
                            trackSource: i.gK.maybe(i.gK.enumeration(Object.values(n.J))),
                            version: i.gK.maybe(i.gK.string),
                            durationMs: i.gK.maybe(i.gK.number),
                            coverUri: i.gK.maybe(i.gK.string),
                            averageColor: i.gK.maybe(i.gK.string),
                            trackParameters: i.gK.maybe(i.gK.frozen()),
                            albumId: i.gK.maybe(i.gK.number),
                            type: i.gK.maybe(i.gK.enumeration(Object.values(a.S))),
                            pubDate: i.gK.maybe(i.gK.string),
                            hasLyrics: i.gK.maybe(i.gK.boolean),
                            hasSyncLyrics: i.gK.maybe(i.gK.boolean),
                            trailer: i.gK.maybe(d.a),
                            shouldRememberPosition: i.gK.maybe(i.gK.boolean),
                            streamProgress: i.gK.maybe(c.B),
                            shortDescription: i.gK.maybe(i.gK.string),
                            major: i.gK.maybeNull(i.gK.frozen()),
                            clipIds: i.gK.maybeNull(i.gK.frozen()),
                            genre: i.gK.maybeNull(i.gK.string),
                            realId: i.gK.maybe(i.gK.string),
                        }),
                        u.E,
                    )
                    .views((e) => {
                        let t = {
                            get isLiked() {
                                if ((0, i._n)(e)) {
                                    let { library: t } = (0, s.M)(e);
                                    return t.isTrackLiked(e.id);
                                }
                                return !1;
                            },
                            get isDownloaded() {
                                if (!(0, i._n)(e)) return !1;
                                let { slam: t } = (0, s.M)(e);
                                return t.isTrackDownloaded(e.id);
                            },
                            get isDownloading() {
                                if (!(0, i._n)(e)) return !1;
                                let { slam: t } = (0, s.M)(e);
                                return t.isTrackDownloading(e.id);
                            },
                            get downloadingProgress() {
                                if (!(0, i._n)(e)) return 0;
                                let { slam: t } = (0, s.M)(e);
                                return t.getTrackDownloadingProgress(e.id);
                            },
                            get isAvailableForDownload() {
                                if (!(0, i._n)(e)) return !1;
                                return (e.type && g.includes(e.type)) || !!t.isUGC;
                            },
                            getUrl(t) {
                                let r = e.albumId ? '/album/:albumId/track/:trackId' : '/track/:trackId',
                                    i = e.albumId ? { albumId: e.albumId, trackId: e.id } : { trackId: e.id },
                                    { href: a } = (0, o.u)(r, { params: i, query: t });
                                return a;
                            },
                            get url() {
                                return t.getUrl();
                            },
                            get isDisliked() {
                                if ((0, i._n)(e)) {
                                    let { library: t } = (0, s.M)(e);
                                    return t.isTrackDisliked(e.id);
                                }
                                return !1;
                            },
                            get isTrackPodcast() {
                                if ((0, i._n)(e)) return e.type === a.S.PODCAST;
                                return !1;
                            },
                            get isPlusSubscribed() {
                                if (!(0, i._n)(e)) return !1;
                                let { user: t } = (0, s.M)(e);
                                return t.hasPlus;
                            },
                            get isSyncLyricsAvailableWithOfflineFeature() {
                                if (!(0, i._n)(e)) return !1;
                                let { slam: t } = (0, s.M)(e);
                                return !!e.hasSyncLyrics && !t.isOfflineModeEnabled;
                            },
                            get isSyncLyricsAvailable() {
                                return this.isPlusSubscribed && this.isSyncLyricsAvailableWithOfflineFeature;
                            },
                            get isLyricsAvailable() {
                                if (!(0, i._n)(e)) return !1;
                                let { slam: t, user: r } = (0, s.M)(e);
                                if (!r.hasPlus) return !1;
                                return !!e.hasLyrics && !t.isOfflineModeEnabled;
                            },
                            get isTrackAudiobook() {
                                if ((0, i._n)(e)) return e.type === a.S.AUDIOBOOK;
                                return !1;
                            },
                            get isTrackFairyTale() {
                                if ((0, i._n)(e)) return e.type === a.S.FAIRY_TALE;
                                return !1;
                            },
                            get isTrackNonMusic() {
                                return this.isTrackPodcast || this.isTrackAudiobook || this.isTrackFairyTale;
                            },
                            get isTrackMusic() {
                                if ((0, i._n)(e)) return e.type === a.S.TRACK || e.type === a.S.MUSIC;
                                return !1;
                            },
                            get isUGC() {
                                if ((0, i._n)(e)) return e.trackSource === n.J.UGC;
                                return;
                            },
                            get isOwn() {
                                if ((0, i._n)(e)) return e.trackSource === n.J.OWN;
                                return;
                            },
                            get isOwnReplacedToUGC() {
                                if ((0, i._n)(e)) return e.trackSource === n.J.OWN_REPLACED_TO_UGC;
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
                                if (!(0, i._n)(e)) return !1;
                                return !!(e.albumId && this.isOwn && e.isAvailable);
                            },
                            get hasTrackLink() {
                                if (!(0, i._n)(e)) return !1;
                                let {
                                    settings: { isMobile: t },
                                    slam: r,
                                } = (0, s.M)(e);
                                return e.isAvailable && !this.isUGC && !this.isOwnReplacedToUGC && !t && !r.isOfflineModeEnabled;
                            },
                            get isNonUserGenerated() {
                                if (!(0, i._n)(e)) return !1;
                                return !t.isUGC && !t.isOwnReplacedToUGC;
                            },
                            get hasModalAccess() {
                                return e.hasModalDisclaimer;
                            },
                            getDisclaimerEntityRef: (r) =>
                                r
                                    ? { entityType: r, entityId: e.id }
                                    : t.isTrackPodcast
                                      ? { entityType: l.n.PODCAST, entityId: e.id }
                                      : t.isTrackAudiobook
                                        ? { entityType: l.n.AUDIOBOOK, entityId: e.id }
                                        : { entityType: l.n.TRACK, entityId: e.id },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        afterCreate() {
                            e.trackType = e.type;
                        },
                        toggleLike: (0, i.L3)(function* () {
                            if (!(0, i._n)(e)) return;
                            let { library: t, user: r } = (0, s.M)(e);
                            if (r.isAuthorized) return yield t.toggleTrackLike({ entityId: e.id, albumId: e.albumId, userId: r.account.data.uid });
                        }),
                        toggleDislike: (0, i.L3)(function* () {
                            if (!(0, i._n)(e)) return;
                            let { library: t, user: r } = (0, s.M)(e);
                            if (r.isAuthorized) return yield t.toggleTrackDislike({ entityId: e.id, albumId: e.albumId, userId: r.account.data.uid });
                        }),
                        setListeningFinishedStatus: (0, i.L3)(function* () {
                            let t = e.streamProgress;
                            if (t)
                                return (null == t ? void 0 : t.hasEverFinished)
                                    ? yield null == t ? void 0 : t.markUnlistened({ trackId: Number(e.id) })
                                    : yield null == t ? void 0 : t.markListened({ trackId: Number(e.id) });
                        }),
                        getKey: (t) => ''.concat(t, '_').concat(e.id),
                    }));
        },
        45066: (e, t, r) => {
            'use strict';
            r.d(t, { n: () => i });
            let i = {
                MIXES: 'pages/mixes',
                TAG: 'pages/tag',
                GENRES: 'pages/genres',
                PROMOLANDING: 'pages/promolanding',
                MUSIC_HISTORY: 'pages/music-history',
                POST: 'pages/post',
                PLAYLIST_PERSONAL: 'pages/playlist-personal',
                MY_MUSIC: 'pages/my-music',
                FAVORITE_TRACKS: 'pages/favorite-tracks',
                CONCERTS_DETAILS: 'pages/concerts-details',
                LANDING_PROMO_PREVIEW: 'pages/landing-promo-preview',
                LABEL: 'pages/label',
                GENRE: 'pages/genre',
                CHART: 'pages/chart',
            };
        },
        49259: (e, t, r) => {
            'use strict';
            r.d(t, { W: () => v, s: () => T });
            var i = r(32290),
                a = r(29222),
                n = r(96103),
                s = r(21916),
                l = r(55178),
                o = r(80451),
                u = r(96218),
                d = r(5245),
                c = r(57594),
                g = r(31726);
            (0, n.eO)(!1);
            let m = (0, l.createContext)(null),
                _ = (e) => {
                    let { children: t, store: r, storeKey: a } = e,
                        n = (0, l.useMemo)(() => ({ store: r, storeKey: a }), [r, a]);
                    return (0, i.jsx)(m.Provider, { value: n, children: t });
                },
                E = (e) => {
                    let { nonce: t, patchKey: r, patchesRef: a } = e;
                    return (
                        (0, s.useServerInsertedHTML)(() => {
                            let e = a.current;
                            return ((a.current = []), 0 === e.length)
                                ? null
                                : (0, i.jsx)('script', {
                                      dangerouslySetInnerHTML: {
                                          __html: ((e, t) =>
                                              "\n        window.__PAGE_STATE_PATCHES__ = window.__PAGE_STATE_PATCHES__ || {};\n        window.__PAGE_STATE_PATCHES__['"
                                                  .concat(e, "'] =\n            window.__PAGE_STATE_PATCHES__['")
                                                  .concat(e, "'] || [];\n        window.__PAGE_STATE_PATCHES__['")
                                                  .concat(e, "'].push(")
                                                  .concat((0, o.stringifyJSONSafely)(t), ");\n        window.dispatchEvent(new Event('")
                                                  .concat(u.O, "'));\n    "))(r, e),
                                      },
                                      nonce: null != t ? t : void 0,
                                  });
                        }),
                        null
                    );
                },
                v = (e) => {
                    let { createStore: t, patchKey: r } = e,
                        a = () => {
                            var e, t;
                            let i = null != (t = null == (e = window.__PAGE_STATE_PATCHES__) ? void 0 : e[r]) ? t : [];
                            return window.__PAGE_STATE_PATCHES__ && delete window.__PAGE_STATE_PATCHES__[r], i;
                        };
                    return {
                        pageStoreProvider: (e) => {
                            let { children: n, nonce: s } = e,
                                l = (0, g.Y)(),
                                o = (0, c.g)(),
                                { store: m, patchesRef: v } = (0, d.m)({
                                    createStore: () => t({ ...l, rootStore: o }),
                                    getPendingPatchBatches: a,
                                    patchesUpdatedEventName: u.O,
                                });
                            return (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsx)(E, { nonce: s, patchKey: r, patchesRef: v }), (0, i.jsx)(_, { store: m, storeKey: r, children: n })],
                            });
                        },
                    };
                };
            function T(e) {
                let { throwOnAbsence: t = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    r = (0, l.useContext)(m);
                if (!r || r.storeKey !== e) {
                    var i;
                    if (!t) return null;
                    throw new a.t('Page store context is missing or has unexpected key', {
                        code: 'E_CONTEXT_PAGE_STORE_NULL',
                        data: { actualStoreKey: null != (i = null == r ? void 0 : r.storeKey) ? i : 'null', expectedStoreKey: e },
                    });
                }
                return r.store;
            }
        },
        49399: (e, t, r) => {
            'use strict';
            r.d(t, { G: () => i });
            var i = (function (e) {
                return (e.IDLE = 'IDLE'), (e.PENDING = 'PENDING'), (e.RESOLVE = 'RESOLVE'), (e.REJECT = 'REJECT'), e;
            })({});
        },
        55985: (e, t, r) => {
            'use strict';
            r.d(t, { p: () => a });
            var i = r(60754);
            let a = (e) => (0, i.wg)({ uri: e.uri, color: e.color });
        },
        56e3: (e, t, r) => {
            'use strict';
            r.d(t, { B: () => n });
            var i = r(60754),
                a = r(92013);
            let n = i.gK.model('StreamProgress', { endPositionSec: i.gK.maybe(i.gK.number), hasEverFinished: i.gK.maybe(i.gK.boolean) }).actions((e) => ({
                updateEndPositionSec: (t) => {
                    e.endPositionSec = t;
                },
                updateEverFinished: (t) => {
                    e.hasEverFinished = t;
                },
                markListened: (0, i.L3)(function* (t) {
                    let { streamsResource: r, modelActionsLogger: n } = (0, i._$)(e);
                    try {
                        return yield r.markFinished(t);
                    } catch (e) {
                        return n.error(e), a.T.ERROR;
                    }
                }),
                markUnlistened: (0, i.L3)(function* (t) {
                    let { streamsResource: r, modelActionsLogger: n } = (0, i._$)(e);
                    try {
                        return yield r.markUnfinished(t);
                    } catch (e) {
                        return n.error(e), a.T.ERROR;
                    }
                }),
            }));
        },
        57594: (e, t, r) => {
            'use strict';
            r.d(t, { P: () => n, g: () => s });
            var i = r(29222),
                a = r(55178);
            let n = (0, a.createContext)(null);
            function s() {
                let e = (0, a.useContext)(n);
                if (null === e) throw new i.t('Store cannot be null, please add a context provider', { code: 'E_CONTEXT_STORE_NULL' });
                return e;
            }
        },
        58008: (e, t, r) => {
            'use strict';
            r.d(t, { F: () => i });
            var i = (function (e) {
                return (e.OK = 'ok'), (e.ERROR = 'error'), e;
            })({});
        },
        60284: (e, t, r) => {
            'use strict';
            r.d(t, { ChartPageStoreProvider: () => b });
            var i = r(49259),
                a = r(45066),
                n = r(60754),
                s = r(49399),
                l = r(87953),
                o = r(85796),
                u = r(72428),
                d = r(12388),
                c = r(73715),
                g = r(93841);
            let m = n.gK
                .compose(
                    n.gK.model('ChartPodcastsPage', { title: n.gK.maybeNull(n.gK.string), items: n.gK.array(d.J), errorStatusCode: n.gK.maybeNull(n.gK.number) }),
                    g.p,
                    c.X,
                )
                .views((e) => {
                    let t = {
                        get isLoading() {
                            return e.isNeededToLoad || e.loadingState === s.G.PENDING;
                        },
                        get isShimmerVisible() {
                            return e.isNeededToLoad || e.loadingState === s.G.PENDING;
                        },
                        get itemsCount() {
                            return e.items.length;
                        },
                        get isNotFound() {
                            var r;
                            let t = e.isResolved && !(null == (r = e.items) ? void 0 : r.length),
                                i = e.errorStatusCode === l.X1.NOT_FOUND || e.errorStatusCode === l.X1.BAD_REQUEST;
                            return (e.loadingState === s.G.REJECT && i) || t;
                        },
                        get isSomethingWrong() {
                            return e.isRejected && !t.isNotFound;
                        },
                    };
                    return t;
                })
                .actions((e) => ({
                    getData: (0, n.L3)(function* (t) {
                        let { chartResource: r, modelActionsLogger: i } = (0, n._$)(e);
                        if (e.loadingState !== s.G.PENDING)
                            try {
                                let i;
                                (e.loadingState = s.G.PENDING),
                                    (e.title = (i = t ? yield r.getChartPodcastsCategory({ categoryId: t }) : yield r.getChartPodcasts()).title),
                                    i.chartPositions &&
                                        (e.items = (0, n.wg)(
                                            i.chartPositions.map((e) => {
                                                let t, r;
                                                return (t = e.album), (r = e.chartPosition), (0, n.wg)({ ...(0, u.p)(t), chart: r && (0, o.w)(r) });
                                            }),
                                        )),
                                    e.loadingState !== s.G.IDLE && (e.loadingState = s.G.RESOLVE);
                            } catch (t) {
                                i.error(t),
                                    t instanceof l.GX && (t.statusCode === l.X1.NOT_FOUND || t.statusCode === l.X1.BAD_REQUEST) && (e.errorStatusCode = l.X1.NOT_FOUND),
                                    e.loadingState !== s.G.IDLE && (e.loadingState = s.G.REJECT);
                            }
                    }),
                    reset() {
                        (e.loadingState = s.G.IDLE), (e.title = null), (e.errorStatusCode = null), e.destroyItems([e.items]);
                    },
                }));
            var _ = r(23200),
                E = r(99212);
            let v = n.gK.model('ChartPagePlaylistModel', { uuid: n.gK.string, uid: n.gK.number, kind: n.gK.number }),
                T = n.gK
                    .compose(n.gK.model('ChartTracksPage', { title: n.gK.maybeNull(n.gK.string), playlistMeta: n.gK.maybeNull(v), items: n.gK.array(E.v) }), c.X)
                    .views((e) => ({
                        get isLoading() {
                            return e.isNeededToLoad || e.loadingState === s.G.PENDING;
                        },
                    }))
                    .actions((e) => ({
                        getTracks: (0, n.L3)(function* () {
                            let { landing3Resource: t, modelActionsLogger: r } = (0, n._$)(e);
                            if (e.loadingState !== s.G.PENDING)
                                try {
                                    e.loadingState = s.G.PENDING;
                                    let r = yield t.getChart();
                                    (e.title = r.chart.title),
                                        (e.playlistMeta = (0, n.wg)({ uuid: r.chart.playlistUuid, uid: r.chart.uid, kind: r.chart.kind })),
                                        (e.items = (0, n.wg)(r.chart.tracks.map((e) => (0, _.b)(e.track, e.chart)))),
                                        e.loadingState !== s.G.IDLE && (e.loadingState = s.G.RESOLVE);
                                } catch (t) {
                                    r.error(t), e.loadingState !== s.G.IDLE && (e.loadingState = s.G.REJECT);
                                }
                        }),
                    })),
                S = n.gK.model('ChartPageModel', { tracksSubPage: T, podcastsSubPage: m }),
                I = { tracksSubPage: { loadingState: s.G.IDLE, items: [] }, podcastsSubPage: { loadingState: s.G.IDLE, items: [] } },
                { pageStoreProvider: y } = (0, i.W)({ createStore: (e) => S.create(I, e), patchKey: a.n.CHART }),
                b = y;
        },
        63380: (e, t, r) => {
            'use strict';
            var i;
            r.d(t, { f: () => i }),
                (function (e) {
                    (e.OK = 'ok'), (e.ERROR = 'error');
                })(i || (i = {}));
        },
        64605: (e, t, r) => {
            'use strict';
            var i;
            r.d(t, { _: () => i }),
                (function (e) {
                    (e.UNKNOWN = 'unknown'),
                        (e.ALBUM = 'album'),
                        (e.SINGLE = 'single'),
                        (e.COMPILATION = 'compilation'),
                        (e.PODCAST = 'podcast'),
                        (e.FAIRY_TALE = 'fairy-tale'),
                        (e.AUDIOBOOK = 'audiobook'),
                        (e.VIDEO_SINGLE = 'video-single'),
                        (e.VIDEO_ALBUM = 'video-album'),
                        (e.RADIO = 'radio'),
                        (e.ASMR = 'asmr'),
                        (e.NOISE = 'noise');
                })(i || (i = {}));
        },
        68100: (e, t, r) => {
            'use strict';
            var i;
            r.d(t, { J: () => i }),
                (function (e) {
                    (e.OWN = 'OWN'), (e.UGC = 'UGC'), (e.OWN_REPLACED_TO_UGC = 'OWN_REPLACED_TO_UGC'), (e.EXTERNAL = 'EXTERNAL');
                })(i || (i = {}));
        },
        72428: (e, t, r) => {
            'use strict';
            r.d(t, { p: () => s });
            var i = r(60754),
                a = r(69757),
                n = r(84060);
            let s = (e) => {
                let t = e.artists.map((e) => (0, n.d)(e));
                return (0, i.wg)({ ...(0, a.e)(e), artists: t });
            };
        },
        75819: (e, t, r) => {
            'use strict';
            r.d(t, { g: () => s });
            var i,
                a = r(60754);
            (i || (i = {})).SMART_PREVIEW = 'smart_preview';
            var n = r(93159);
            let s = (e, t) => {
                var r, s, l, o, u, d, c, g, m, _;
                e = e || {};
                let { isSmartPreview: E, hasEverFinished: v } = t || {},
                    T = (0, n.Q)(null == e ? void 0 : e.derivedColors),
                    S = E ? (null == (r = e.smartPreviewParams) ? void 0 : r.durationMs) : null == e ? void 0 : e.durationMs,
                    I = (0, a.wg)({ available: !!(null == (s = e.specialAudioResources) ? void 0 : s.includes(i.SMART_PREVIEW)) });
                return (0, a.wg)({
                    id: (e.id || 0).toString(),
                    isAvailable: !!(null == e ? void 0 : e.available),
                    isRemoved: (null == e ? void 0 : e.error) === 'not-found',
                    title: null != (m = null == e ? void 0 : e.title) ? m : '',
                    version: null == e ? void 0 : e.version,
                    durationMs: S,
                    coverUri: null == e ? void 0 : e.coverUri,
                    averageColor: T,
                    trackParameters: null == e ? void 0 : e.trackParameters,
                    trackSource: null == e ? void 0 : e.trackSource,
                    albumId: null == (o = e.albums) || null == (l = o[0]) ? void 0 : l.id,
                    disclaimers: e.disclaimers,
                    type: e.type,
                    pubDate: e.pubDate,
                    hasLyrics: null == (u = e.lyricsInfo) ? void 0 : u.hasAvailableTextLyrics,
                    hasSyncLyrics: null == (d = e.lyricsInfo) ? void 0 : d.hasAvailableSyncLyrics,
                    shouldRememberPosition: e.rememberPosition,
                    streamProgress: ((e, t) =>
                        (0, a.wg)({
                            endPositionSec: null == e ? void 0 : e.endPositionSec,
                            hasEverFinished: (null == t ? void 0 : t.hasEverFinished) || (null == e ? void 0 : e.everFinished),
                        }))(null == e ? void 0 : e.streamProgress, { hasEverFinished: v }),
                    shortDescription: null != (_ = e.shortDescription) ? _ : '',
                    trailer: I,
                    clipIds: e.clipIds,
                    major: e.major ? { id: e.major.id, name: e.major.name } : null,
                    genre: null == (g = e.albums) || null == (c = g[0]) ? void 0 : c.genre,
                    realId: e.realId,
                });
            };
        },
        85017: (e, t, r) => {
            'use strict';
            r.d(t, { Z: () => i, n: () => a });
            var i = (function (e) {
                    return (e.REJECT = 'REJECT'), (e.UNSAFE = 'UNSAFE'), e;
                })({}),
                a = (function (e) {
                    return (e.ALBUM = 'album'), (e.PODCAST = 'podcast'), (e.AUDIOBOOK = 'audiobook'), (e.ARTIST = 'artist'), (e.TRACK = 'track'), (e.CLIP = 'clip'), e;
                })({});
        },
        85796: (e, t, r) => {
            'use strict';
            r.d(t, { w: () => a });
            var i = r(60754);
            let a = (e) => (0, i.wg)({ position: e.position, progress: e.progress });
        },
        90404: (e, t, r) => {
            'use strict';
            var i;
            r.d(t, { _: () => i }),
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
                })(i || (i = {}));
        },
        92013: (e, t, r) => {
            'use strict';
            var i;
            r.d(t, { T: () => i }),
                (function (e) {
                    (e.OK = 'ok'), (e.ERROR = 'error');
                })(i || (i = {}));
        },
        93841: (e, t, r) => {
            'use strict';
            r.d(t, { p: () => a });
            var i = r(60754);
            let a = i.gK.model('ModelDestroyManager').actions(() => ({
                destroyItems(e) {
                    e.forEach((e) => {
                        e && (0, i.Yo)(e);
                    }),
                        queueMicrotask(() => {
                            e.forEach((e) => {
                                e && (0, i.zr)(e);
                            });
                        });
                },
            }));
        },
        96333: (e, t, r) => {
            'use strict';
            var i;
            r.d(t, { S: () => i }),
                (function (e) {
                    (e.TRACK = 'track'),
                        (e.MUSIC = 'music'),
                        (e.NOISE = 'noise'),
                        (e.PODCAST = 'podcast-episode'),
                        (e.COMMENT = 'comment'),
                        (e.ARTICLE = 'article'),
                        (e.ASMR = 'asmr'),
                        (e.RADIO = 'radio'),
                        (e.SHOW = 'show'),
                        (e.LECTURE = 'lecture'),
                        (e.FAIRY_TALE = 'fairy-tale'),
                        (e.AUDIOBOOK = 'audiobook'),
                        (e.POETRY = 'poetry');
                })(i || (i = {}));
        },
        99212: (e, t, r) => {
            'use strict';
            r.d(t, { v: () => u });
            var i = r(60754),
                a = r(87411),
                n = r(57367),
                s = r(44032),
                l = r(38777),
                o = r(58008);
            let u = l.O.props({ artists: i.gK.array(n.P), albums: i.gK.array(a.G), chart: i.gK.maybe(s.I) })
                .views((e) => ({
                    get artistsNames() {
                        var t;
                        return null == (t = e.artists) ? void 0 : t.map((e) => e.name).join(', ');
                    },
                    get mainArtist() {
                        var r, i, a, n;
                        if (null == (i = e.artists) || null == (r = i[0]) ? void 0 : r.various) return null;
                        return null != (n = null == (a = e.artists) ? void 0 : a[0]) ? n : null;
                    },
                    get mainAlbum() {
                        var s, l;
                        return null != (l = null == (s = e.albums) ? void 0 : s[0]) ? l : null;
                    },
                    get index() {
                        var o, u, d;
                        return null != (d = null == (u = e.albums[0]) || null == (o = u.trackPosition) ? void 0 : o.index) ? d : null;
                    },
                    get isAvailableOnlyForPlus() {
                        var c;
                        return !!(null == (c = this.mainAlbum) ? void 0 : c.isAvailableOnlyForPlus);
                    },
                }))
                .actions((e) => ({
                    changeTrackInfo: (0, i.L3)(function* (t, r) {
                        let { ugcResource: a, modelActionsLogger: s } = (0, i._$)(e);
                        if (e.artists.map((e) => e.name).join(', ') === r && t === e.title) return o.F.OK;
                        try {
                            var l;
                            yield a.changeTrack({ trackId: e.id, title: t, artist: r }), (e.title = t);
                            let s = (null == (l = e.artists[0]) ? void 0 : l.id) || '0';
                            if (((e.artists = (0, i.wg)([])), r)) {
                                let t = n.P.create({ id: s, name: r, isAvailable: !0 });
                                e.artists = (0, i.wg)([t]);
                            }
                            return o.F.OK;
                        } catch (e) {
                            return s.error(e), o.F.ERROR;
                        }
                    }),
                }))
                .named('Track');
        },
    },
    (e) => {
        e.O(0, [6706, 1311, 8892, 6252, 9994, 6477, 7275, 1647, 4220, 9562, 7358], () => e((e.s = 15858))), (_N_E = e.O());
    },
]);
