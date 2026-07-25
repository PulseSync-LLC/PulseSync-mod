(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6881],
    {
        3092: (e) => {
            e.exports = {
                root: 'MyMusicDownloadedTracksPageHeader_root__2vfuc',
                container: 'MyMusicDownloadedTracksPageHeader_container__hQ_wt',
                title: 'MyMusicDownloadedTracksPageHeader_title__Ncn5X',
                stickyTitle: 'MyMusicDownloadedTracksPageHeader_stickyTitle__Efl0U',
                playButton: 'MyMusicDownloadedTracksPageHeader_playButton__seWgC',
                stickyPlayButton: 'MyMusicDownloadedTracksPageHeader_stickyPlayButton__JVicd',
                titleContainer: 'MyMusicDownloadedTracksPageHeader_titleContainer__rLAkS',
                staticHeader: 'MyMusicDownloadedTracksPageHeader_staticHeader__LSVC8',
                important: 'MyMusicDownloadedTracksPageHeader_important__JIubq',
                stickyHeader: 'MyMusicDownloadedTracksPageHeader_stickyHeader__MuQh4',
            };
        },
        3377: (e, t, a) => {
            'use strict';
            a.d(t, { WithAuth: () => y });
            var r = a(32290),
                i = a(96103),
                n = a(21916),
                s = a(63618),
                l = a(39407),
                o = a(71926),
                d = a(94218),
                c = a(55556),
                u = a.n(c);
            let g = (0, i.PA)(() =>
                (0, r.jsxs)('div', {
                    className: u().root,
                    children: [
                        (0, r.jsx)(o.DZ, {
                            className: (0, s.$)(u().title, u().important),
                            variant: 'h3',
                            size: 'xs',
                            children: (0, r.jsx)(l.A, { id: 'authorization.enter-title' }),
                        }),
                        (0, r.jsx)(o.HL, {
                            className: (0, s.$)(u().text, u().important),
                            variant: 'span',
                            type: 'text',
                            size: 'l',
                            weight: 'normal',
                            children: (0, r.jsx)(l.A, { id: 'authorization.enter-text' }),
                        }),
                        (0, r.jsx)(d.H, { size: 'l', className: u().button }),
                    ],
                }),
            );
            var m = a(20472),
                _ = a(57594);
            let y = (0, i.PA)((e) => {
                let { children: t, withRedirectToMainPage: a } = e,
                    { user: i } = (0, _.g)();
                return i.isAuthorized ? t : (a && (0, n.redirect)(m.Z.main.href), (0, r.jsx)(g, {}));
            });
        },
        11044: (e, t, a) => {
            'use strict';
            a.d(t, { MyMusicPageStoreProvider: () => u });
            var r = a(49259),
                i = a(45066),
                n = a(60754),
                s = a(59407),
                l = a(49399);
            let o = n.gK.model('MyMusicPage', { downloadedTracks: s.b }),
                d = { downloadedTracks: { loadingState: l.G.IDLE } },
                { pageStoreProvider: c } = (0, r.W)({ createStore: (e) => o.create(d, e), patchKey: i.n.MY_MUSIC }),
                u = c;
        },
        31286: (e, t, a) => {
            'use strict';
            a.d(t, { w: () => n });
            var r = a(55178),
                i = a(91027);
            let n = () => {
                let e = (0, r.useRef)(new Map());
                return (
                    (0, r.useLayoutEffect)(
                        () => (
                            e.current.size > 0 && e.current.clear(),
                            () => {
                                e.current.clear();
                            }
                        ),
                        [],
                    ),
                    (0, i.c)((t, a) => (e.current.has(t) ? e.current.get(t) : (e.current.set(t, a), a)))
                );
            };
        },
        32012: (e, t, a) => {
            'use strict';
            a.d(t, { v: () => l });
            var r = a(60754),
                i = a(69757),
                n = a(84060),
                s = a(75819);
            let l = (e, t) => {
                var a, l;
                let o = null == (a = e.substituted?.artists ?? e.artists) ? void 0 : a.map(n.d),
                    d = null == (l = e.albums) ? void 0 : l.map(i.e);
                return (0, r.wg)({ ...(0, s.g)(e, t), artists: o, albums: d });
            };
        },
        38777: (e, t, a) => {
            'use strict';
            a.d(t, { O: () => m });
            var r = a(60754),
                i = a(96333),
                n = a(68100),
                s = a(15567),
                l = a(85017),
                o = a(36477),
                d = a(52947),
                c = a(45346),
                u = a(56e3);
            let g = [i.S.MUSIC, i.S.TRACK, i.S.NOISE, i.S.ASMR],
                m = r.gK
                    .compose(
                        r.gK.model('BaseTrack', {
                            id: r.gK.string,
                            isAvailable: r.gK.boolean,
                            isRemoved: r.gK.boolean,
                            title: r.gK.string,
                            trackSource: r.gK.maybe(r.gK.enumeration(Object.values(n.J))),
                            version: r.gK.maybe(r.gK.string),
                            durationMs: r.gK.maybe(r.gK.number),
                            coverUri: r.gK.maybe(r.gK.string),
                            averageColor: r.gK.maybe(r.gK.string),
                            trackParameters: r.gK.maybe(r.gK.frozen()),
                            albumId: r.gK.maybe(r.gK.number),
                            type: r.gK.maybe(r.gK.enumeration(Object.values(i.S))),
                            pubDate: r.gK.maybe(r.gK.string),
                            hasLyrics: r.gK.maybe(r.gK.boolean),
                            hasSyncLyrics: r.gK.maybe(r.gK.boolean),
                            trailer: r.gK.maybe(c.a),
                            shouldRememberPosition: r.gK.maybe(r.gK.boolean),
                            streamProgress: r.gK.maybe(u.B),
                            shortDescription: r.gK.maybe(r.gK.string),
                            major: r.gK.maybeNull(r.gK.frozen()),
                            clipIds: r.gK.maybeNull(r.gK.frozen()),
                            genre: r.gK.maybeNull(r.gK.string),
                            realId: r.gK.maybe(r.gK.string),
                        }),
                        d.E,
                    )
                    .views((e) => {
                        let t = {
                            get isLiked() {
                                if ((0, r._n)(e)) {
                                    let { library: t } = (0, s.M)(e);
                                    return t.isTrackLiked(e.id);
                                }
                                return !1;
                            },
                            get isDownloaded() {
                                if (!(0, r._n)(e)) return !1;
                                let { slam: t } = (0, s.M)(e);
                                return t.isTrackDownloaded(e.id);
                            },
                            get isDownloading() {
                                if (!(0, r._n)(e)) return !1;
                                let { slam: t } = (0, s.M)(e);
                                return t.isTrackDownloading(e.id);
                            },
                            get downloadingProgress() {
                                if (!(0, r._n)(e)) return 0;
                                let { slam: t } = (0, s.M)(e);
                                return t.getTrackDownloadingProgress(e.id);
                            },
                            get isAvailableForDownload() {
                                if (!(0, r._n)(e)) return !1;
                                return (e.type && g.includes(e.type)) || !!t.isUGC;
                            },
                            getUrl(t) {
                                let a = e.albumId ? '/album/:albumId/track/:trackId' : '/track/:trackId',
                                    r = e.albumId ? { albumId: e.albumId, trackId: e.id } : { trackId: e.id },
                                    { href: i } = (0, o.u)(a, { params: r, query: t });
                                return i;
                            },
                            get url() {
                                return t.getUrl();
                            },
                            get isDisliked() {
                                if ((0, r._n)(e)) {
                                    let { library: t } = (0, s.M)(e);
                                    return t.isTrackDisliked(e.id);
                                }
                                return !1;
                            },
                            get isTrackPodcast() {
                                if ((0, r._n)(e)) return e.type === i.S.PODCAST;
                                return !1;
                            },
                            get isPlusSubscribed() {
                                if (!(0, r._n)(e)) return !1;
                                let { user: t } = (0, s.M)(e);
                                return t.hasPlus;
                            },
                            get isSyncLyricsAvailableWithOfflineFeature() {
                                if (!(0, r._n)(e)) return !1;
                                let { slam: t } = (0, s.M)(e);
                                return !!e.hasSyncLyrics && !t.isOfflineModeEnabled;
                            },
                            get isSyncLyricsAvailable() {
                                return this.isPlusSubscribed && this.isSyncLyricsAvailableWithOfflineFeature;
                            },
                            get isLyricsAvailable() {
                                if (!(0, r._n)(e)) return !1;
                                let { slam: t, user: a } = (0, s.M)(e);
                                if (!a.hasPlus) return !1;
                                return !!e.hasLyrics && !t.isOfflineModeEnabled;
                            },
                            get isTrackAudiobook() {
                                if ((0, r._n)(e)) return e.type === i.S.AUDIOBOOK;
                                return !1;
                            },
                            get isTrackFairyTale() {
                                if ((0, r._n)(e)) return e.type === i.S.FAIRY_TALE;
                                return !1;
                            },
                            get isTrackNonMusic() {
                                return this.isTrackPodcast || this.isTrackAudiobook || this.isTrackFairyTale;
                            },
                            get isTrackMusic() {
                                if ((0, r._n)(e)) return e.type === i.S.TRACK || e.type === i.S.MUSIC;
                                return !1;
                            },
                            get isUGC() {
                                if ((0, r._n)(e)) return e.trackSource === n.J.UGC;
                                return;
                            },
                            get isOwn() {
                                if ((0, r._n)(e)) return e.trackSource === n.J.OWN;
                                return;
                            },
                            get isOwnReplacedToUGC() {
                                if ((0, r._n)(e)) return e.trackSource === n.J.OWN_REPLACED_TO_UGC;
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
                                    settings: { isMobile: t },
                                    slam: a,
                                } = (0, s.M)(e);
                                return e.isAvailable && !this.isUGC && !this.isOwnReplacedToUGC && !t && !a.isOfflineModeEnabled;
                            },
                            get isNonUserGenerated() {
                                if (!(0, r._n)(e)) return !1;
                                return !t.isUGC && !t.isOwnReplacedToUGC;
                            },
                            get hasModalAccess() {
                                return e.hasModalDisclaimer;
                            },
                            getDisclaimerEntityRef: (a) =>
                                a
                                    ? { entityType: a, entityId: e.id }
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
                        toggleLike: (0, r.L3)(function* () {
                            if (!(0, r._n)(e)) return;
                            let { library: t, user: a } = (0, s.M)(e);
                            if (a.isAuthorized) return yield t.toggleTrackLike({ entityId: e.id, albumId: e.albumId, userId: a.account.data.uid });
                        }),
                        toggleDislike: (0, r.L3)(function* () {
                            if (!(0, r._n)(e)) return;
                            let { library: t, user: a } = (0, s.M)(e);
                            if (a.isAuthorized) return yield t.toggleTrackDislike({ entityId: e.id, albumId: e.albumId, userId: a.account.data.uid });
                        }),
                        setListeningFinishedStatus: (0, r.L3)(function* () {
                            let t = e.streamProgress;
                            if (t)
                                return (null == t ? void 0 : t.hasEverFinished)
                                    ? yield null == t ? void 0 : t.markUnlistened({ trackId: Number(e.id) })
                                    : yield null == t ? void 0 : t.markListened({ trackId: Number(e.id) });
                        }),
                        getKey: (t) => ''.concat(t, '_').concat(e.id),
                    }));
        },
        45066: (e, t, a) => {
            'use strict';
            a.d(t, { n: () => r });
            let r = {
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
        49259: (e, t, a) => {
            'use strict';
            a.d(t, { W: () => v, s: () => p });
            var r = a(32290),
                i = a(29222),
                n = a(96103),
                s = a(21916),
                l = a(55178),
                o = a(80451),
                d = a(96218),
                c = a(5245),
                u = a(57594),
                g = a(31726);
            (0, n.eO)(!1);
            let m = (0, l.createContext)(null),
                _ = (e) => {
                    let { children: t, store: a, storeKey: i } = e,
                        n = (0, l.useMemo)(() => ({ store: a, storeKey: i }), [a, i]);
                    return (0, r.jsx)(m.Provider, { value: n, children: t });
                },
                y = (e) => {
                    let { nonce: t, patchKey: a, patchesRef: i } = e;
                    return (
                        (0, s.useServerInsertedHTML)(() => {
                            let e = i.current;
                            return ((i.current = []), 0 === e.length)
                                ? null
                                : (0, r.jsx)('script', {
                                      dangerouslySetInnerHTML: {
                                          __html: ((e, t) =>
                                              "\n        window.__PAGE_STATE_PATCHES__ = window.__PAGE_STATE_PATCHES__ || {};\n        window.__PAGE_STATE_PATCHES__['"
                                                  .concat(e, "'] =\n            window.__PAGE_STATE_PATCHES__['")
                                                  .concat(e, "'] || [];\n        window.__PAGE_STATE_PATCHES__['")
                                                  .concat(e, "'].push(")
                                                  .concat((0, o.stringifyJSONSafely)(t), ");\n        window.dispatchEvent(new Event('")
                                                  .concat(d.O, "'));\n    "))(a, e),
                                      },
                                      nonce: null != t ? t : void 0,
                                  });
                        }),
                        null
                    );
                },
                v = (e) => {
                    let { createStore: t, patchKey: a } = e,
                        i = () => {
                            var e, t;
                            let r = null != (t = null == (e = window.__PAGE_STATE_PATCHES__) ? void 0 : e[a]) ? t : [];
                            return window.__PAGE_STATE_PATCHES__ && delete window.__PAGE_STATE_PATCHES__[a], r;
                        };
                    return {
                        pageStoreProvider: (e) => {
                            let { children: n, nonce: s } = e,
                                l = (0, g.Y)(),
                                o = (0, u.g)(),
                                { store: m, patchesRef: v } = (0, c.m)({
                                    createStore: () => t({ ...l, rootStore: o }),
                                    getPendingPatchBatches: i,
                                    patchesUpdatedEventName: d.O,
                                });
                            return (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)(y, { nonce: s, patchKey: a, patchesRef: v }), (0, r.jsx)(_, { store: m, storeKey: a, children: n })],
                            });
                        },
                    };
                };
            function p(e) {
                let { throwOnAbsence: t = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    a = (0, l.useContext)(m);
                if (!a || a.storeKey !== e) {
                    var r;
                    if (!t) return null;
                    throw new i.t('Page store context is missing or has unexpected key', {
                        code: 'E_CONTEXT_PAGE_STORE_NULL',
                        data: { actualStoreKey: null != (r = null == a ? void 0 : a.storeKey) ? r : 'null', expectedStoreKey: e },
                    });
                }
                return a.store;
            }
        },
        55556: (e) => {
            e.exports = {
                root: 'Login_root__VtFg_',
                title: 'Login_title__dqQz1',
                important: 'Login_important__Z8S9I',
                text: 'Login_text__1uju5',
                button: 'Login_button__ZYvZY',
            };
        },
        56e3: (e, t, a) => {
            'use strict';
            a.d(t, { B: () => n });
            var r = a(60754),
                i = a(92013);
            let n = r.gK.model('StreamProgress', { endPositionSec: r.gK.maybe(r.gK.number), hasEverFinished: r.gK.maybe(r.gK.boolean) }).actions((e) => ({
                updateEndPositionSec: (t) => {
                    e.endPositionSec = t;
                },
                updateEverFinished: (t) => {
                    e.hasEverFinished = t;
                },
                markListened: (0, r.L3)(function* (t) {
                    let { streamsResource: a, modelActionsLogger: n } = (0, r._$)(e);
                    try {
                        return yield a.markFinished(t);
                    } catch (e) {
                        return n.error(e), i.T.ERROR;
                    }
                }),
                markUnlistened: (0, r.L3)(function* (t) {
                    let { streamsResource: a, modelActionsLogger: n } = (0, r._$)(e);
                    try {
                        return yield a.markUnfinished(t);
                    } catch (e) {
                        return n.error(e), i.T.ERROR;
                    }
                }),
            }));
        },
        58108: (e) => {
            e.exports = { root: 'MyMusicDownloadedTracksInfo_root__yIYHx' };
        },
        59407: (e, t, a) => {
            'use strict';
            a.d(t, { b: () => d });
            var r = a(60754),
                i = a(3623),
                n = a(32012),
                s = a(99212),
                l = a(49399),
                o = a(73715);
            let d = r.gK
                .compose(r.gK.model('DownloadedTracks', { items: r.gK.maybeNull(r.gK.array(s.v)), tracks: r.gK.maybeNull(r.gK.frozen()) }), o.X)
                .views((e) => ({
                    get tracksDurationInMinutes() {
                        var t, a;
                        return (null != (a = null == (t = e.tracks) ? void 0 : t.reduce((e, t) => (t.durationMs ? e + t.durationMs : e), 0)) ? a : 0) / 1e3 / 60;
                    },
                    get entitiesData() {
                        if (!e.tracks) return [];
                        return e.tracks.map((e) => ({ type: i.R.DownloadedMusic, meta: e }));
                    },
                    get isEmpty() {
                        var r;
                        return e.isResolved && (null == (r = e.items) ? void 0 : r.length) === 0;
                    },
                }))
                .actions((e) => ({
                    getData: (0, r.L3)(function* (t, a) {
                        let { modelActionsLogger: i } = (0, r._$)(e);
                        if (e.loadingState !== l.G.PENDING)
                            try {
                                e.loadingState = l.G.PENDING;
                                let i = yield t.getTracks(a);
                                (e.tracks = i), (e.items = (0, r.wg)(i.map((e) => (0, n.v)(e)))), e.loadingState !== l.G.IDLE && (e.loadingState = l.G.RESOLVE);
                            } catch (t) {
                                i.error(t), e.loadingState !== l.G.IDLE && (e.loadingState = l.G.REJECT);
                            }
                    }),
                    reset() {
                        (e.items = null), (e.tracks = null), (e.loadingState = l.G.IDLE);
                    },
                }));
        },
        68100: (e, t, a) => {
            'use strict';
            var r;
            a.d(t, { J: () => r }),
                (function (e) {
                    (e.OWN = 'OWN'), (e.UGC = 'UGC'), (e.OWN_REPLACED_TO_UGC = 'OWN_REPLACED_TO_UGC'), (e.EXTERNAL = 'EXTERNAL');
                })(r || (r = {}));
        },
        75819: (e, t, a) => {
            'use strict';
            a.d(t, { g: () => s });
            var r,
                i = a(60754);
            (r || (r = {})).SMART_PREVIEW = 'smart_preview';
            var n = a(93159);
            let s = (e, t) => {
                var a, s, l, o, d, c, u, g, m, _;
                e = e || {};
                let { isSmartPreview: y, hasEverFinished: v } = t || {},
                    p = (0, n.Q)(e?.substituted?.derivedColors ?? e.derivedColors),
                    h = y ? (null == (a = e.smartPreviewParams) ? void 0 : a.durationMs) : null == e ? void 0 : e.durationMs,
                    k = (0, i.wg)({
                        available: !!(null == (s = e.specialAudioResources) ? void 0 : s.includes(r.SMART_PREVIEW)),
                    });
                return (0, i.wg)({
                    id: (e.id || 0).toString(),
                    isAvailable: !!(null == e ? void 0 : e.available),
                    isRemoved: (null == e ? void 0 : e.error) === 'not-found',
                    title: e?.substituted?.title ?? e?.title ?? '',
                    version: e?.substituted?.version ?? e?.version,
                    isSubstituted: !!(e?.isSubstituted || e?.substituted),
                    durationMs: h,
                    coverUri: e?.substituted?.coverUri || e?.substituted?.ogImage || e?.substituted?.cover?.uri || e?.substituted?.albums?.[0]?.coverUri || e?.coverUri,
                    averageColor: p,
                    trackParameters: null == e ? void 0 : e.trackParameters,
                    trackSource: null == e ? void 0 : e.trackSource,
                    albumId: null == (o = e.albums) || null == (l = o[0]) ? void 0 : l.id,
                    disclaimers:
                        e?.isSubstituted || e?.substituted
                            ? Array.from(new Set([...(e.disclaimers ?? []), 'substitutedIcon:pulsesync-substituted', 'descriptionText:pulsesync-substituted']))
                            : e.disclaimers,
                    type: e.type,
                    pubDate: e.pubDate,
                    hasLyrics: null == (d = e.lyricsInfo) ? void 0 : d.hasAvailableTextLyrics,
                    hasSyncLyrics: null == (c = e.lyricsInfo) ? void 0 : c.hasAvailableSyncLyrics,
                    shouldRememberPosition: e.rememberPosition,
                    streamProgress: ((e, t) =>
                        (0, i.wg)({
                            endPositionSec: null == e ? void 0 : e.endPositionSec,
                            hasEverFinished: (null == t ? void 0 : t.hasEverFinished) || (null == e ? void 0 : e.everFinished),
                        }))(null == e ? void 0 : e.streamProgress, { hasEverFinished: v }),
                    shortDescription: null != (_ = e.shortDescription) ? _ : '',
                    trailer: k,
                    clipIds: e?.substituted?.clipIds ?? e.clipIds,
                    major: e.major
                        ? {
                              id: e.major.id,
                              name: e.major.name,
                          }
                        : null,
                    genre: null == (g = e.albums) || null == (u = g[0]) ? void 0 : u.genre,
                    realId: e.realId,
                });
            };
        },
        78061: (e, t, a) => {
            'use strict';
            a.d(t, { Jt: () => n, TF: () => l, hZ: () => s });
            var r = function () {
                return (r =
                    Object.assign ||
                    function (e) {
                        for (var t, a = 1, r = arguments.length; a < r; a++)
                            for (var i in (t = arguments[a])) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                        return e;
                    }).apply(this, arguments);
            };
            function i(e, t) {
                if (!t) return '';
                var a = '; ' + e;
                return !0 === t ? a : a + '=' + t;
            }
            function n(e) {
                return (function (e) {
                    for (var t = {}, a = e ? e.split('; ') : [], r = 0; r < a.length; r++) {
                        var i = a[r].split('='),
                            n = i.slice(1).join('=');
                        '"' === n[0] && (n = n.slice(1, -1));
                        try {
                            t[decodeURIComponent(i[0])] = n.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
                        } catch (e) {}
                    }
                    return t;
                })(document.cookie)[e];
            }
            function s(e, t, a) {
                var n;
                document.cookie =
                    ((n = r({ path: '/' }, a)),
                    encodeURIComponent(e)
                        .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
                        .replace(/\(/g, '%28')
                        .replace(/\)/g, '%29') +
                        '=' +
                        encodeURIComponent(t).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent) +
                        (function (e) {
                            if ('number' == typeof e.expires) {
                                var t = new Date();
                                t.setMilliseconds(t.getMilliseconds() + 864e5 * e.expires), (e.expires = t);
                            }
                            return (
                                i('Expires', e.expires ? e.expires.toUTCString() : '') +
                                i('Domain', e.domain) +
                                i('Path', e.path) +
                                i('Secure', e.secure) +
                                i('SameSite', e.sameSite)
                            );
                        })(n));
            }
            function l(e, t) {
                s(e, '', r(r({}, t), { expires: -1 }));
            }
        },
        85912: (e) => {
            e.exports = {
                root: 'MyMusicDownloadedTracksPage_root__hZZwz',
                important: 'MyMusicDownloadedTracksPage_important__QP_t0',
                pageContainer: 'MyMusicDownloadedTracksPage_pageContainer__qu3hF',
                footer: 'MyMusicDownloadedTracksPage_footer__KI5OP',
                content: 'MyMusicDownloadedTracksPage_content__Iz1WY',
                trackShimmer: 'MyMusicDownloadedTracksPage_trackShimmer__MZgW3',
            };
        },
        92498: (e, t, a) => {
            'use strict';
            a.d(t, { MyMusicDownloadedTracksPage: () => et });
            var r = a(32290),
                i = a(63618),
                n = a(96103),
                s = a(55178),
                l = a(60900),
                o = a(21732),
                d = a(71483),
                c = a(91027),
                u = a(92533),
                g = a(64170),
                m = a(7999),
                _ = a(69951),
                y = a(37862),
                v = a(48922),
                p = a(22714),
                h = a(72396),
                k = a(83920),
                T = a(3796),
                A = a(88964),
                S = a(31286),
                f = a(49259),
                E = a(45066),
                M = a(49399),
                b = a(98350),
                C = a(58054),
                P = a(32468),
                D = a(34223),
                x = a(45257),
                I = a(85912),
                w = a.n(I),
                K = a(39407),
                L = a(82586),
                O = a(71926),
                N = a(71735),
                R = a(2969),
                j = a(83808),
                U = a(90169),
                G = a(57594),
                H = a(85377),
                F = a(12894),
                W = a(90326),
                z = a(58108),
                B = a.n(z);
            let Y = (0, n.PA)(() => {
                var e;
                let { downloadedTracks: t } = (0, f.s)(E.n.MY_MUSIC),
                    a = (0, r.jsx)(O.HL, { variant: 'span', size: 's', weight: 'medium', 'aria-hidden': !0, children: '•' }),
                    i = [];
                (null == (e = t.tracks) ? void 0 : e.length) &&
                    i.push(
                        (0, r.jsx)(O.HL, {
                            variant: 'span',
                            size: 's',
                            weight: 'medium',
                            lineClamp: 1,
                            children: (0, r.jsx)(K.A, { id: 'entity-names.tracks-count', values: { value: t.tracks.length } }),
                        }),
                    );
                let n = Math.floor(t.tracksDurationInMinutes / 60),
                    l = Math.floor(t.tracksDurationInMinutes % 60);
                return (
                    (n || l) &&
                        (i.push(a),
                        i.push(
                            (0, r.jsx)(O.HL, {
                                variant: 'span',
                                size: 's',
                                weight: 'medium',
                                children: (0, r.jsx)(K.A, { id: 'time.hours-minutes', values: { hours: n, minutes: l } }),
                            }),
                        )),
                    (0, r.jsx)('div', { className: B().root, children: i.map((e, t) => (0, s.cloneElement)(e, { key: t })) })
                );
            });
            var V = a(3092),
                J = a.n(V);
            let Q = (0, n.PA)(() => {
                let { isScrolling: e } = (0, s.useContext)(H.B),
                    t = (0, j.W)(),
                    { downloadedTracks: a } = (0, f.s)(E.n.MY_MUSIC),
                    {
                        settings: { isMobile: i },
                        slam: n,
                    } = (0, G.g)(),
                    { from: l } = (0, h.f)({ pageId: v._Q.OWN_TRACKS, blockId: y.U.TRACK_LIST }),
                    u = (0, N.P)(),
                    g = (0, R.b)(),
                    { isPlaying: m, togglePlay: _ } = (0, U.D)({
                        playContextParams: {
                            contextData: { type: d.K.Various, meta: { id: v._Q.DOWNLOADS_TRACKS }, from: l },
                            entitiesData: a.entitiesData,
                            loadContextMeta: !1,
                        },
                    }),
                    p = (0, c.c)(() => {
                        u() || (_(), g(!m));
                    });
                return (0, r.jsx)('header', {
                    className: J().root,
                    'aria-hidden': e,
                    'data-test-id': o.Xk.myMusic.MY_MUSIC_DOWNLOADED_TRACKS_PAGE_HEADER,
                    children: (0, r.jsxs)('div', {
                        className: J().container,
                        children: [
                            !n.isOfflineModeEnabled &&
                                t.canBack &&
                                (0, r.jsx)(F.L, { withForwardControl: !1, withBackwardControl: t.canBack, shouldFocusOnMount: !e, buttonSize: 'xxs' }),
                            (0, r.jsxs)('div', {
                                className: J().titleContainer,
                                children: [
                                    (0, r.jsx)(O.DZ, {
                                        variant: 'h1',
                                        weight: 'bold',
                                        size: 'xs',
                                        lineClamp: 1,
                                        className: J().title,
                                        children: (0, r.jsx)(K.A, { id: 'offline.downloaded-tracks' }),
                                    }),
                                    (0, r.jsx)(Y, {}),
                                ],
                            }),
                            !a.isEmpty &&
                                (0, r.jsx)(W.D, {
                                    withRipple: !0,
                                    buttonVariant: 'default',
                                    radius: 'xxxl',
                                    size: 's',
                                    color: 'primary',
                                    iconSize: 'xxs',
                                    isPlaying: m,
                                    onClick: p,
                                    className: J().playButton,
                                    ariaHidden: e,
                                    tabIndex: e ? -1 : 0,
                                    children: !i && (0, r.jsx)(K.A, { id: 'player-actions.listen' }),
                                }),
                        ],
                    }),
                });
            });
            var X = a(95658),
                Z = a.n(X);
            let $ = (0, n.PA)(() =>
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(Q, {}),
                        (0, r.jsxs)('div', {
                            className: Z().root,
                            'data-test-id': o.Xk.myMusic.MY_MUSIC_DOWNLOADED_TRACKS_PAGE_EMPTY,
                            children: [
                                (0, r.jsx)(L.I, { className: Z().icon, size: 'l', variant: 'download' }),
                                (0, r.jsx)(O.DZ, { className: Z().title, variant: 'div', size: 'xs', children: (0, r.jsx)(K.A, { id: 'offline.downloaded-empty' }) }),
                                (0, r.jsx)(O.HL, {
                                    className: Z().text,
                                    variant: 'span',
                                    type: 'controls',
                                    size: 'l',
                                    weight: 'normal',
                                    children: (0, r.jsx)(K.A, { id: 'offline.download-for-offline' }),
                                }),
                            ],
                        }),
                    ],
                }),
            );
            var q = a(74694);
            let ee = (0, n.PA)(() => {
                    let { isScrolling: e } = (0, s.useContext)(H.B),
                        t = (0, j.W)(),
                        { downloadedTracks: a } = (0, f.s)(E.n.MY_MUSIC),
                        {
                            settings: { isMobile: n },
                            slam: l,
                        } = (0, G.g)(),
                        { from: u } = (0, h.f)({ pageId: v._Q.OWN_TRACKS, blockId: y.U.TRACK_LIST }),
                        g = (0, R.b)(),
                        m = (0, N.P)(),
                        { isPlaying: _, togglePlay: p } = (0, U.D)({
                            playContextParams: {
                                contextData: { type: d.K.Various, meta: { id: v._Q.DOWNLOADS_TRACKS }, from: u },
                                entitiesData: a.entitiesData,
                                loadContextMeta: !1,
                            },
                        }),
                        k = (0, c.c)(() => {
                            m() || (p(), g(!_));
                        });
                    return (0, r.jsx)(q.Y, {
                        variant: q.V.COMPOSITE,
                        'aria-hidden': !e,
                        stickyChild: (0, r.jsxs)('div', {
                            className: J().container,
                            'data-test-id': o.Xk.myMusic.MY_MUSIC_DOWNLOADED_TRACKS_PAGE_STICKY_HEADER,
                            children: [
                                !l.isOfflineModeEnabled &&
                                    t.canBack &&
                                    (0, r.jsx)(F.L, { withForwardControl: !1, withBackwardControl: t.canBack, shouldFocusOnMount: !1, buttonSize: 'xxs' }),
                                (0, r.jsx)(O.DZ, {
                                    variant: 'h1',
                                    weight: 'bold',
                                    size: 'xs',
                                    lineClamp: 1,
                                    className: J().stickyTitle,
                                    children: (0, r.jsx)(K.A, { id: 'offline.downloaded-tracks' }),
                                }),
                                !a.isEmpty &&
                                    (0, r.jsx)(W.D, {
                                        withRipple: !0,
                                        buttonVariant: 'default',
                                        radius: 'xxxl',
                                        size: 's',
                                        color: 'primary',
                                        iconSize: 'xxs',
                                        isPlaying: _,
                                        onClick: k,
                                        className: (0, i.$)(J().playButton, { [J().stickyPlayButton]: !n }),
                                        ariaHidden: !e,
                                        tabIndex: e ? 0 : -1,
                                        children: !n && (0, r.jsx)(K.A, { id: 'player-actions.listen' }),
                                    }),
                            ],
                        }),
                        stickyClassName: (0, i.$)(J().stickyHeader, J().important),
                        staticClassName: (0, i.$)(J().staticHeader, J().important),
                    });
                }),
                et = (0, n.PA)(() => {
                    var e;
                    let t = (0, A.j)(),
                        { contentScrollRef: a, setContentScrollRef: n } = (0, k.g)(),
                        { formatMessage: I } = (0, l.A)(),
                        { downloadedTracks: K } = (0, f.s)(E.n.MY_MUSIC),
                        { from: L } = (0, h.f)({ pageId: v._Q.OWN_TRACKS, blockId: y.U.TRACK_LIST }),
                        O = (0, S.w)(),
                        N = (0, c.c)(() => {
                            t.tracksController && K.getData(t.tracksController);
                        });
                    (0, u.L)(N),
                        (0, s.useEffect)(() => {
                            K.isNeededToLoad && N();
                        }, [K.isNeededToLoad, N]),
                        (0, s.useEffect)(
                            () => () => {
                                K.reset();
                            },
                            [K],
                        ),
                        (0, T.J)(K.isResolved);
                    let R = (0, s.useMemo)(
                        () => ({ Header: () => (0, r.jsx)(Q, {}), Footer: () => (0, r.jsx)(P.A, { children: (0, r.jsx)(C.w, { className: w().footer }) }) }),
                        [],
                    );
                    if (K.loadingState === M.G.REJECT) return (0, r.jsx)(g.SomethingWentWrong, {});
                    if (K.isEmpty) return (0, r.jsx)($, {});
                    let j = (null == (e = K.items) ? void 0 : e.length) || 10;
                    return (0, r.jsx)(p.n, {
                        pageId: v._Q.DOWNLOADS_TRACKS,
                        children: (0, r.jsx)(m.h, {
                            scrollElement: a,
                            children: (0, r.jsxs)('div', {
                                className: w().pageContainer,
                                children: [
                                    (0, r.jsx)(ee, {}),
                                    (0, r.jsx)(x.$, {
                                        context: { listAriaLabel: I({ id: 'offline.downloaded-track-list' }) },
                                        className: (0, i.$)(w().root, w().important),
                                        listClassName: w().content,
                                        customComponents: R,
                                        totalCount: j,
                                        itemContentCallback: (e) => {
                                            var t;
                                            let a = null == (t = K.items) ? void 0 : t[e];
                                            return a
                                                ? (0, r.jsx)(
                                                      _.K,
                                                      {
                                                          track: a,
                                                          playContextParams: O(a.id, {
                                                              contextData: { type: d.K.Various, meta: { id: v._Q.DOWNLOADS_TRACKS }, from: L },
                                                              entitiesData: K.entitiesData,
                                                              queueParams: { index: e, entityId: a.id },
                                                              loadContextMeta: !1,
                                                          }),
                                                      },
                                                      a.id,
                                                  )
                                                : (0, r.jsx)(D.D, { isActive: !0, className: w().trackShimmer, variant: b.X.PLAYLIST });
                                        },
                                        debounceDurationInMs: 300,
                                        initialItemCount: j,
                                        handleRef: n,
                                        shouldTriggerRangeChangedOn: [j],
                                        testId: o.Xk.myMusic.MY_MUSIC_DOWNLOADED_TRACKS_PAGE,
                                    }),
                                ],
                            }),
                        }),
                    });
                });
        },
        92533: (e, t, a) => {
            'use strict';
            a.d(t, { L: () => o });
            var r = a(55178),
                i = a(44547),
                n = a(91027),
                s = a(88964);
            let l = [i.DT.IDLE, i.DT.DOWNLOADED],
                o = (e) => {
                    var t;
                    let a = (0, s.j)(),
                        o = (0, n.c)((t) => {
                            let { state: a } = t;
                            l.includes(a.loadingState) && e();
                        });
                    (0, r.useEffect)(() => {
                        var t, r;
                        return (
                            null == (t = a.store) || t.tracks.events.on(i.je.STATE_CHANGED, e),
                            null == (r = a.store) || r.tracks.events.on(i.je.ENTITY_CHANGED, o),
                            () => {
                                var t, r;
                                null == (t = a.store) || t.tracks.events.off(i.je.STATE_CHANGED, e), null == (r = a.store) || r.tracks.events.off(i.je.ENTITY_CHANGED, o);
                            }
                        );
                    }, [e, o, null == (t = a.store) ? void 0 : t.tracks.events]);
                };
        },
        95658: (e) => {
            e.exports = {
                root: 'MyMusicDownloadedTracksPageEmpty_root__LAXpY',
                icon: 'MyMusicDownloadedTracksPageEmpty_icon__PDhk2',
                title: 'MyMusicDownloadedTracksPageEmpty_title__g2w5R',
                text: 'MyMusicDownloadedTracksPageEmpty_text__8RJFg',
            };
        },
        99212: (e, t, a) => {
            'use strict';
            a.d(t, { v: () => d });
            var r = a(60754),
                i = a(87411),
                n = a(57367),
                s = a(44032),
                l = a(38777),
                o = a(58008);
            let d = l.O.props({ artists: r.gK.array(n.P), albums: r.gK.array(i.G), chart: r.gK.maybe(s.I) })
                .views((e) => ({
                    get artistsNames() {
                        var t;
                        return null == (t = e.artists) ? void 0 : t.map((e) => e.name).join(', ');
                    },
                    get mainArtist() {
                        var a, r, i, n;
                        if (null == (r = e.artists) || null == (a = r[0]) ? void 0 : a.various) return null;
                        return null != (n = null == (i = e.artists) ? void 0 : i[0]) ? n : null;
                    },
                    get mainAlbum() {
                        var s, l;
                        return null != (l = null == (s = e.albums) ? void 0 : s[0]) ? l : null;
                    },
                    get index() {
                        var o, d, c;
                        return null != (c = null == (d = e.albums[0]) || null == (o = d.trackPosition) ? void 0 : o.index) ? c : null;
                    },
                    get isAvailableOnlyForPlus() {
                        var u;
                        return !!(null == (u = this.mainAlbum) ? void 0 : u.isAvailableOnlyForPlus);
                    },
                }))
                .actions((e) => ({
                    changeTrackInfo: (0, r.L3)(function* (t, a) {
                        let { ugcResource: i, modelActionsLogger: s } = (0, r._$)(e);
                        if (e.artists.map((e) => e.name).join(', ') === a && t === e.title) return o.F.OK;
                        try {
                            var l;
                            yield i.changeTrack({ trackId: e.id, title: t, artist: a }), (e.title = t);
                            let s = (null == (l = e.artists[0]) ? void 0 : l.id) || '0';
                            if (((e.artists = (0, r.wg)([])), a)) {
                                let t = n.P.create({ id: s, name: a, isAvailable: !0 });
                                e.artists = (0, r.wg)([t]);
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
]);
