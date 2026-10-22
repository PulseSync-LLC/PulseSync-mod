(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7642],
    {
        1482: (e, t, i) => {
            'use strict';
            i.d(t, { ChartPageStoreProvider: () => _ });
            var r = i(80499),
                s = i(82706),
                a = i(28410),
                l = i(36159),
                n = i(93690),
                o = i(58268),
                c = i(91201),
                u = i(55180),
                d = i(19835),
                m = i(95897);
            let g = a.gK
                .compose(
                    a.gK.model('ChartPodcastsPage', { title: a.gK.maybeNull(a.gK.string), items: a.gK.array(u.J), errorStatusCode: a.gK.maybeNull(a.gK.number) }),
                    m.p,
                    d.X,
                )
                .views((e) => {
                    let t = {
                        get isLoading() {
                            return e.isNeededToLoad || e.loadingState === l.G.PENDING;
                        },
                        get isShimmerVisible() {
                            return e.isNeededToLoad || e.loadingState === l.G.PENDING;
                        },
                        get itemsCount() {
                            return e.items.length;
                        },
                        get isNotFound() {
                            var i;
                            let t = e.isResolved && !(null == (i = e.items) ? void 0 : i.length),
                                r = e.errorStatusCode === n.X1.NOT_FOUND || e.errorStatusCode === n.X1.BAD_REQUEST;
                            return (e.loadingState === l.G.REJECT && r) || t;
                        },
                        get isSomethingWrong() {
                            return e.isRejected && !t.isNotFound;
                        },
                    };
                    return t;
                })
                .actions((e) => ({
                    getData: (0, a.L3)(function* (t) {
                        let { chartResource: i, modelActionsLogger: r } = (0, a._$)(e);
                        if (e.loadingState !== l.G.PENDING)
                            try {
                                let r;
                                ((e.loadingState = l.G.PENDING),
                                    (e.title = (r = t ? yield i.getChartPodcastsCategory({ categoryId: t }) : yield i.getChartPodcasts()).title),
                                    r.chartPositions &&
                                        (e.items = (0, a.wg)(
                                            r.chartPositions.map((e) => {
                                                let t, i;
                                                return ((t = e.album), (i = e.chartPosition), (0, a.wg)({ ...(0, c.p)(t), chart: i && (0, o.w)(i) }));
                                            }),
                                        )),
                                    e.loadingState !== l.G.IDLE && (e.loadingState = l.G.RESOLVE));
                            } catch (t) {
                                (r.error(t),
                                    t instanceof n.GX && (t.statusCode === n.X1.NOT_FOUND || t.statusCode === n.X1.BAD_REQUEST) && (e.errorStatusCode = n.X1.NOT_FOUND),
                                    e.loadingState !== l.G.IDLE && (e.loadingState = l.G.REJECT));
                            }
                    }),
                    reset() {
                        ((e.loadingState = l.G.IDLE), (e.title = null), (e.errorStatusCode = null), e.destroyItems([e.items]));
                    },
                }));
            var p = i(83496),
                y = i(88148);
            let b = a.gK.model('ChartPagePlaylistModel', { uuid: a.gK.string, uid: a.gK.number, kind: a.gK.number }),
                I = a.gK
                    .compose(a.gK.model('ChartTracksPage', { title: a.gK.maybeNull(a.gK.string), playlistMeta: a.gK.maybeNull(b), items: a.gK.array(y.v) }), d.X)
                    .views((e) => ({
                        get isLoading() {
                            return e.isNeededToLoad || e.loadingState === l.G.PENDING;
                        },
                    }))
                    .actions((e) => ({
                        getTracks: (0, a.L3)(function* () {
                            let { landing3Resource: t, modelActionsLogger: i } = (0, a._$)(e);
                            if (e.loadingState !== l.G.PENDING)
                                try {
                                    e.loadingState = l.G.PENDING;
                                    let i = yield t.getChart();
                                    ((e.title = i.chart.title),
                                        (e.playlistMeta = (0, a.wg)({ uuid: i.chart.playlistUuid, uid: i.chart.uid, kind: i.chart.kind })),
                                        (e.items = (0, a.wg)(i.chart.tracks.map((e) => (0, p.b)(e.track, e.chart)))),
                                        e.loadingState !== l.G.IDLE && (e.loadingState = l.G.RESOLVE));
                                } catch (t) {
                                    (i.error(t), e.loadingState !== l.G.IDLE && (e.loadingState = l.G.REJECT));
                                }
                        }),
                    })),
                v = a.gK.model('ChartPageModel', { tracksSubPage: I, podcastsSubPage: g }),
                E = { tracksSubPage: { loadingState: l.G.IDLE, items: [] }, podcastsSubPage: { loadingState: l.G.IDLE, items: [] } },
                { pageStoreProvider: k } = (0, r.W)({ createStore: (e) => v.create(E, e), patchKey: s.n.CHART }),
                _ = k;
        },
        12929: (e, t, i) => {
            'use strict';
            i.d(t, { Z: () => r, n: () => s });
            var r = (function (e) {
                    return ((e.REJECT = 'REJECT'), (e.UNSAFE = 'UNSAFE'), e);
                })({}),
                s = (function (e) {
                    return ((e.ALBUM = 'album'), (e.PODCAST = 'podcast'), (e.AUDIOBOOK = 'audiobook'), (e.ARTIST = 'artist'), (e.TRACK = 'track'), (e.CLIP = 'clip'), e);
                })({});
        },
        16063: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => l });
            var r = i(83772),
                s = i(45337),
                a = i(80468);
            let l = (e, t) => {
                var i, l;
                let n = null == (i = e.artists) ? void 0 : i.map(s.G),
                    o = null == (l = e.albums) ? void 0 : l.map(r.f);
                return { ...(0, a.x)(e, t), artists: n, albums: o };
            };
        },
        18660: (e, t, i) => {
            'use strict';
            var r;
            (i.d(t, { J: () => r }),
                (function (e) {
                    ((e.OWN = 'OWN'), (e.UGC = 'UGC'), (e.OWN_REPLACED_TO_UGC = 'OWN_REPLACED_TO_UGC'), (e.EXTERNAL = 'EXTERNAL'));
                })(r || (r = {})));
        },
        24820: (e, t, i) => {
            'use strict';
            i.d(t, { v: () => a });
            var r = i(28410),
                s = i(16063);
            let a = (e, t) => {
                let i = (0, s.K)(e, t);
                return (0, r.wg)(i);
            };
        },
        25895: (e, t, i) => {
            'use strict';
            (i.d(t, { u: () => c }), i(93588));
            var r = i(89288),
                s = i(74310),
                a = i(38097);
            let l = (e) => {
                    var t;
                    if (!e) return e;
                    let i = (null != (t = e.split('?')[0]) ? t : '').split('/').filter(Boolean);
                    for (let e of Object.keys(s.j)) {
                        let t = e.split('/').filter(Boolean);
                        if (i.length !== t.length) continue;
                        let r = !0;
                        for (let e = 0; e < t.length; e++) {
                            let s = t[e],
                                a = i[e];
                            if (s && !s.startsWith(':') && s !== a) {
                                r = !1;
                                break;
                            }
                        }
                        if (r) return e;
                    }
                    return e;
                },
                n = (e) => {
                    let t = [],
                        i = e.split('/').filter(Boolean),
                        r = [];
                    for (let e of i) e.startsWith(':') ? t.push(e.substring(1)) : r.push(e);
                    let s = '/'.concat(r.join('/'));
                    if (0 === t.length) return e;
                    let a = t.map((e) => ''.concat(e, '=:').concat(e)).join('&');
                    return ''.concat(s, '?').concat(a);
                },
                o = (e) =>
                    e
                        .split('/')
                        .filter(Boolean)
                        .filter((e) => e.startsWith(':'))
                        .map((e) => e.substring(1)),
                c = function (e) {
                    for (var t, i = arguments.length, c = Array(i > 1 ? i - 1 : 0), u = 1; u < i; u++) c[u - 1] = arguments[u];
                    let [d] = c,
                        m = e.includes(':'),
                        g = e.includes('?'),
                        p = 'string' == typeof e ? e : String(e);
                    if (
                        (p.includes(a.nl) && (d = { ...d, options: { ...(null == d ? void 0 : d.options), isExternalLink: !0 } }),
                        g &&
                            ((e) => {
                                let [t, i] = e.split('?'),
                                    r = new URLSearchParams(i);
                                return Object.keys(s.j).some((e) => {
                                    let i = o(e);
                                    return 0 !== i.length && n(e).split('?')[0] === t && i.every((e) => r.has(e));
                                });
                            })(p))
                    )
                        return (0, r.no)(p, d);
                    if (g && !m) {
                        let e = l(p),
                            i = o(e);
                        if (i.length > 0) {
                            let s = ((e, t) => {
                                    var i;
                                    let r = (null != (i = e.split('?')[0]) ? i : '').split('/').filter(Boolean);
                                    return t
                                        .split('/')
                                        .filter(Boolean)
                                        .reduce((e, t, i) => {
                                            let s = r[i];
                                            return (t.startsWith(':') && s && (e[t.substring(1)] = s), e);
                                        }, {});
                                })(p, e),
                                a = {
                                    ...((e, t) => {
                                        let i = e.split('?')[1];
                                        if (!i) return {};
                                        let r = new Set(t),
                                            s = {};
                                        return (
                                            new URLSearchParams(i).forEach((e, t) => {
                                                r.has(t) || (s[t] = e);
                                            }),
                                            s
                                        );
                                    })(p, i),
                                    ...(null != (t = null == d ? void 0 : d.query) ? t : {}),
                                },
                                l = n(e);
                            return (0, r.no)(l, { ...d, params: s, query: a });
                        }
                    }
                    if (m || g) {
                        let e = n(p);
                        return (0, r.no)(e, d);
                    }
                    let y = l(p),
                        b = (function (e, t) {
                            let [i, r] = e.split('?'),
                                s = null == i ? void 0 : i.split('/').filter(Boolean),
                                a = {},
                                l = t.split('/').filter(Boolean);
                            if ((null == s ? void 0 : s.length) !== l.length || (l[0] && !e.startsWith('/'.concat(l[0])))) return a;
                            for (let e = 0; e < l.length; e++) {
                                let t = l[e],
                                    i = s && s[e];
                                (null == t ? void 0 : t.startsWith(':')) && i && (a[t.substring(1)] = i);
                            }
                            return (
                                r &&
                                    r.split('&').map((e) => {
                                        let [t, i] = e.split('=');
                                        t && void 0 !== i && (a[t] = i);
                                    }),
                                a
                            );
                        })(p, y),
                        I = n(y);
                    return (0, r.no)(I, { ...d, params: b });
                };
        },
        27304: (e, t, i) => {
            'use strict';
            i.d(t, { t: () => s });
            var r = i(77895);
            let s = (e, t) => {
                let { isMobile: i, isOfflineModeEnabled: s } = t,
                    { isNonUserGenerated: a } = (0, r.I)(e.trackSource);
                return e.isAvailable && a && !i && !s;
            };
        },
        27912: (e, t, i) => {
            'use strict';
            i.d(t, { t: () => r });
            let r = {
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
        27954: (e, t, i) => {
            'use strict';
            i.d(t, { P: () => a, g: () => l });
            var r = i(74631),
                s = i(36432);
            let a = (0, r.createContext)(null);
            function l() {
                let e = (0, r.useContext)(a);
                if (null === e) throw new s.t('Store cannot be null, please add a context provider', { code: 'E_CONTEXT_STORE_NULL' });
                return e;
            }
        },
        30299: (e, t, i) => {
            Promise.resolve().then(i.bind(i, 1482));
        },
        31488: (e, t, i) => {
            'use strict';
            i.d(t, { F: () => r });
            var r = (function (e) {
                return ((e.OK = 'ok'), (e.ERROR = 'error'), e);
            })({});
        },
        31860: (e, t, i) => {
            'use strict';
            var r;
            (i.d(t, { f: () => r }),
                (function (e) {
                    ((e.OK = 'ok'), (e.ERROR = 'error'));
                })(r || (r = {})));
        },
        34001: (e, t, i) => {
            'use strict';
            i.d(t, { O: () => I });
            var r = i(28410),
                s = i(75501),
                a = i(18660),
                l = i(51751),
                n = i(12929),
                o = i(26847),
                c = i(11638),
                u = i(86656),
                d = i(27304),
                m = i(40480),
                g = i(77895),
                p = i(43708),
                y = i(60024);
            let b = [s.S.MUSIC, s.S.TRACK, s.S.NOISE, s.S.ASMR],
                I = r.gK
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
                            type: r.gK.maybe(r.gK.enumeration(Object.values(s.S))),
                            pubDate: r.gK.maybe(r.gK.string),
                            hasLyrics: r.gK.maybe(r.gK.boolean),
                            hasSyncLyrics: r.gK.maybe(r.gK.boolean),
                            trailer: r.gK.maybe(u.a),
                            shouldRememberPosition: r.gK.maybe(r.gK.boolean),
                            streamProgress: r.gK.maybe(y.B),
                            shortDescription: r.gK.maybe(r.gK.string),
                            major: r.gK.maybeNull(r.gK.frozen()),
                            clipIds: r.gK.maybeNull(r.gK.frozen()),
                            genre: r.gK.maybeNull(r.gK.string),
                            realId: r.gK.maybe(r.gK.string),
                            cutoutCover: r.gK.maybe(o.$),
                        }),
                        c.E,
                    )
                    .views((e) => {
                        let t = {
                            get isLiked() {
                                if ((0, r._n)(e)) {
                                    let { library: t } = (0, l.M)(e);
                                    return t.isTrackLiked(e.id);
                                }
                                return !1;
                            },
                            get isDownloaded() {
                                if (!(0, r._n)(e)) return !1;
                                let { slam: t } = (0, l.M)(e);
                                return t.isTrackDownloaded(e.id);
                            },
                            get isDownloading() {
                                if (!(0, r._n)(e)) return !1;
                                let { slam: t } = (0, l.M)(e);
                                return t.isTrackDownloading(e.id);
                            },
                            get downloadingProgress() {
                                if (!(0, r._n)(e)) return 0;
                                let { slam: t } = (0, l.M)(e);
                                return t.getTrackDownloadingProgress(e.id);
                            },
                            get isAvailableForDownload() {
                                if (!(0, r._n)(e)) return !1;
                                return (e.type && b.includes(e.type)) || !!t.isUGC;
                            },
                            getUrl(t) {
                                let { href: i } = (0, m.l)(e.id, e.albumId, t);
                                return i;
                            },
                            get url() {
                                return t.getUrl();
                            },
                            get isDisliked() {
                                if ((0, r._n)(e)) {
                                    let { library: t } = (0, l.M)(e);
                                    return t.isTrackDisliked(e.id);
                                }
                                return !1;
                            },
                            get isTrackPodcast() {
                                if ((0, r._n)(e)) return e.type === s.S.PODCAST;
                                return !1;
                            },
                            get isPlusSubscribed() {
                                if (!(0, r._n)(e)) return !1;
                                let { user: t } = (0, l.M)(e);
                                return t.hasPlus;
                            },
                            get isSyncLyricsAvailableWithOfflineFeature() {
                                if (!(0, r._n)(e)) return !1;
                                let { slam: t } = (0, l.M)(e);
                                return !!e.hasSyncLyrics && !t.isOfflineModeEnabled;
                            },
                            get isSyncLyricsAvailable() {
                                return this.isPlusSubscribed && this.isSyncLyricsAvailableWithOfflineFeature;
                            },
                            get isLyricsAvailable() {
                                if (!(0, r._n)(e)) return !1;
                                let { slam: t, user: i } = (0, l.M)(e);
                                if (!i.hasPlus) return !1;
                                return !!e.hasLyrics && !t.isOfflineModeEnabled;
                            },
                            get isTrackAudiobook() {
                                if ((0, r._n)(e)) return e.type === s.S.AUDIOBOOK;
                                return !1;
                            },
                            get isTrackFairyTale() {
                                if ((0, r._n)(e)) return e.type === s.S.FAIRY_TALE;
                                return !1;
                            },
                            get isTrackNonMusic() {
                                return this.isTrackPodcast || this.isTrackAudiobook || this.isTrackFairyTale;
                            },
                            get isTrackMusic() {
                                if ((0, r._n)(e)) return (0, p.f)(e.type);
                                return !1;
                            },
                            get isUGC() {
                                if ((0, r._n)(e)) {
                                    let { isUGC: t } = (0, g.I)(e.trackSource);
                                    return t;
                                }
                                return;
                            },
                            get isOwn() {
                                if ((0, r._n)(e)) {
                                    let { isOwn: t } = (0, g.I)(e.trackSource);
                                    return t;
                                }
                                return;
                            },
                            get isOwnReplacedToUGC() {
                                if ((0, r._n)(e)) {
                                    let { isOwnReplacedToUGC: t } = (0, g.I)(e.trackSource);
                                    return t;
                                }
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
                                    slam: i,
                                } = (0, l.M)(e);
                                return (0, d.t)(e, { isMobile: t, isOfflineModeEnabled: i.isOfflineModeEnabled });
                            },
                            get isNonUserGenerated() {
                                if (!(0, r._n)(e)) return !1;
                                let { isNonUserGenerated: t } = (0, g.I)(e.trackSource);
                                return t;
                            },
                            get hasModalAccess() {
                                return e.hasModalDisclaimer;
                            },
                            getDisclaimerEntityRef: (i) =>
                                i
                                    ? { entityType: i, entityId: e.id }
                                    : t.isTrackPodcast
                                      ? { entityType: n.n.PODCAST, entityId: e.id }
                                      : t.isTrackAudiobook
                                        ? { entityType: n.n.AUDIOBOOK, entityId: e.id }
                                        : { entityType: n.n.TRACK, entityId: e.id },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        afterCreate() {
                            e.trackType = e.type;
                        },
                        toggleLike: (0, r.L3)(function* () {
                            if (!(0, r._n)(e)) return;
                            let { library: t, user: i } = (0, l.M)(e);
                            if (i.isAuthorized) return yield t.toggleTrackLike({ entityId: e.id, albumId: e.albumId, userId: i.account.data.uid });
                        }),
                        toggleDislike: (0, r.L3)(function* () {
                            if (!(0, r._n)(e)) return;
                            let { library: t, user: i } = (0, l.M)(e);
                            if (i.isAuthorized) return yield t.toggleTrackDislike({ entityId: e.id, albumId: e.albumId, userId: i.account.data.uid });
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
        34546: (e, t, i) => {
            'use strict';
            i.d(t, { j: () => r });
            let r = (e) => e.map((e) => e.name).join(', ');
        },
        36159: (e, t, i) => {
            'use strict';
            i.d(t, { G: () => r });
            var r = (function (e) {
                return ((e.IDLE = 'IDLE'), (e.PENDING = 'PENDING'), (e.RESOLVE = 'RESOLVE'), (e.REJECT = 'REJECT'), e);
            })({});
        },
        36484: (e, t, i) => {
            'use strict';
            i.d(t, {
                $$: () => ec,
                $5: () => eg,
                $8: () => C,
                $I: () => y,
                $Y: () => e$,
                A4: () => g,
                CN: () => es,
                CR: () => p,
                DP: () => A,
                DT: () => eO,
                DV: () => ey,
                E: () => _,
                EN: () => r,
                Ez: () => em,
                GV: () => h,
                Hm: () => o,
                JM: () => en,
                K1: () => V,
                LC: () => ek,
                Lb: () => E,
                Lk: () => eo,
                N1: () => eb,
                NN: () => F,
                O9: () => M,
                OP: () => m,
                Oo: () => N,
                P0: () => S,
                P1: () => ea,
                PL: () => eP,
                QG: () => w,
                RG: () => eM,
                S1: () => a,
                SD: () => Y,
                SX: () => e_,
                TD: () => eE,
                TK: () => n,
                Tq: () => eL,
                U2: () => O,
                UB: () => eN,
                Ut: () => H,
                V3: () => I,
                V4: () => T,
                VR: () => ew,
                W5: () => eh,
                WA: () => z,
                X4: () => $,
                X8: () => G,
                Xc: () => et,
                Zf: () => s,
                Zi: () => eA,
                Zl: () => er,
                _1: () => b,
                aE: () => J,
                by: () => eR,
                c9: () => ee,
                cZ: () => ei,
                dA: () => eK,
                dh: () => ef,
                en: () => Q,
                eu: () => X,
                ff: () => eI,
                gd: () => ed,
                gu: () => c,
                jQ: () => Z,
                ki: () => q,
                mD: () => l,
                mr: () => d,
                nM: () => W,
                ni: () => eD,
                ok: () => U,
                oo: () => P,
                qN: () => B,
                qT: () => ep,
                qt: () => f,
                re: () => el,
                ro: () => j,
                s_: () => eS,
                sv: () => eu,
                tz: () => k,
                u2: () => ev,
                uM: () => eT,
                vH: () => K,
                vg: () => eC,
                wH: () => D,
                wK: () => v,
                xF: () => R,
                y$: () => u,
                yq: () => x,
                zj: () => L,
            });
            let r = 'AfterTrackResource',
                s = 'Logger',
                a = 'TechMetricsLogger',
                l = 'OtelSdk',
                n = 'ModelActionsLogger',
                o = 'HttpClient',
                c = 'HttpBeaconClient',
                u = 'Slam',
                d = 'UgcUploadHttpClient',
                m = 'BaseResourceHttpClient',
                g = 'ResourceHttpClient',
                p = 'ResourceBeaconClient',
                y = 'AccountResource',
                b = 'UsersResource',
                I = 'LandingResource',
                v = 'LandingBlocksResource',
                E = 'Landing3Resource',
                k = 'AlbumResource',
                _ = 'SlidesResource',
                f = 'MusicExternalApiPrefixUrl',
                h = 'MusicResourceFactory',
                T = 'PublicConfig',
                R = 'ServerConfig',
                S = 'TokenConfig',
                P = 'Storage',
                A = 'CookieStorage',
                O = 'LocalStorage',
                C = 'LibraryResource',
                L = 'LumenResource',
                N = 'TracksResource',
                K = 'SessionStorage',
                $ = 'TopResource',
                M = 'ArtistsResource',
                w = 'Authorization',
                D = 'RedAlertResource',
                U = 'RotorResource',
                G = 'WaveResource',
                x = 'SearchResource',
                F = 'SearchPlaylistResource',
                B = 'PlaylistResource',
                j = 'PlaylistsResource',
                W = 'PinResource',
                H = 'MetatagsResource',
                V = 'TagResource',
                X = 'FeedResource',
                Y = 'Wizard3Resource',
                z = 'CONTAINER_USER_ID_TOKEN',
                J = 'PinsResource',
                q = 'MusicHistoryResource',
                Q = 'ChartResource',
                Z = 'ClipsResource',
                ee = 'DynamicPagesResource',
                et = 'CONTAINER_I18N_STORAGE',
                ei = 'LyricViewsResource',
                er = 'NonMusicResource',
                es = 'DonationResource',
                ea = 'LoaderResource',
                el = 'PrefixlessResource',
                en = 'StreamsResource',
                eo = 'FiltersResource',
                ec = 'UgcResource',
                eu = 'CollectionResource',
                ed = 'AdsResource',
                em = 'PersonalResource',
                eg = 'AvailabilityResource',
                ep = 'GetFileInfoResource',
                ey = 'ResourcesFileInfoResource',
                eb = 'DisclaimersResource',
                eI = 'DisclaimerDictionary',
                ev = 'FamilyResource',
                eE = 'ChildrenLandingResource',
                ek = 'TelemetryResource',
                e_ = 'Env',
                ef = 'PromoResource',
                eh = 'RumResource',
                eT = 'AcqOffers',
                eR = 'Ynison',
                eS = 'YnisonNewConnector',
                eP = 'LabelsResource',
                eA = 'RequestExecutionContext',
                eO = 'ConcertsResource',
                eC = 'YaMetrikaController',
                eL = 'RumTransport',
                eN = 'YaMetrikaTransport',
                eK = 'WordsResource',
                e$ = 'WheelResource',
                eM = 'MocksInitializer',
                ew = 'NetworkMonitorFactory',
                eD = 'SkeletonSdk';
        },
        38097: (e, t, i) => {
            'use strict';
            i.d(t, { k7: () => r, nl: () => s });
            let r = 1e3,
                s = 'https://';
        },
        39528: (e, t, i) => {
            'use strict';
            i.d(t, { R: () => s });
            var r = i(25895);
            let s = (e) => (0, r.u)('/artist/:artistId', { params: { artistId: e } });
        },
        40480: (e, t, i) => {
            'use strict';
            i.d(t, { l: () => s });
            var r = i(25895);
            let s = (e, t, i) =>
                (0, r.u)(t ? '/album/:albumId/track/:trackId' : '/track/:trackId', { params: t ? { albumId: t, trackId: e } : { trackId: e }, query: i });
        },
        43708: (e, t, i) => {
            'use strict';
            i.d(t, { f: () => s });
            var r = i(75501);
            let s = (e) => e === r.S.TRACK || e === r.S.MUSIC;
        },
        53603: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => r });
            let r = (e) => {
                var t, i;
                return (null == e || null == (t = e[0]) ? void 0 : t.various) ? null : null != (i = null == e ? void 0 : e[0]) ? i : null;
            };
        },
        55180: (e, t, i) => {
            'use strict';
            i.d(t, { J: () => n });
            var r = i(28410),
                s = i(66730),
                a = i(69088),
                l = i(69432);
            let n = s.G.props({ artists: r.gK.maybe(r.gK.array(a.P)), chart: r.gK.maybe(l.I) }).views((e) => ({
                get artistNames() {
                    var t;
                    return null == (t = e.artists) ? void 0 : t.map((e) => e.name).join(', ');
                },
                get artistName() {
                    var i, r, s, a;
                    if (null == (r = e.artists) || null == (i = r[0]) ? void 0 : i.various) return;
                    return null == (a = e.artists) || null == (s = a[0]) ? void 0 : s.name;
                },
                get artistIds() {
                    var l;
                    return null == (l = e.artists) ? void 0 : l.map((e) => e.id);
                },
                get artistId() {
                    var n, o;
                    return null == (o = e.artists) || null == (n = o[0]) ? void 0 : n.id;
                },
            }));
        },
        56629: (e, t, i) => {
            'use strict';
            var r;
            (i.d(t, { _: () => r }),
                (function (e) {
                    ((e.UP = 'up'), (e.DOWN = 'down'), (e.SAME = 'same'), (e.NEW = 'new'));
                })(r || (r = {})));
        },
        56829: (e, t, i) => {
            'use strict';
            var r;
            (i.d(t, { _: () => r }),
                (function (e) {
                    ((e.UNKNOWN = 'unknown'),
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
                        (e.NOISE = 'noise'));
                })(r || (r = {})));
        },
        58268: (e, t, i) => {
            'use strict';
            i.d(t, { w: () => s });
            var r = i(28410);
            let s = (e) => (0, r.wg)({ position: e.position, progress: e.progress });
        },
        59981: (e, t, i) => {
            'use strict';
            var r;
            (i.d(t, { T: () => r }),
                (function (e) {
                    ((e.OK = 'ok'), (e.ERROR = 'error'));
                })(r || (r = {})));
        },
        60024: (e, t, i) => {
            'use strict';
            i.d(t, { B: () => a });
            var r = i(28410),
                s = i(59981);
            let a = r.gK.model('StreamProgress', { endPositionSec: r.gK.maybe(r.gK.number), hasEverFinished: r.gK.maybe(r.gK.boolean) }).actions((e) => ({
                updateEndPositionSec: (t) => {
                    e.endPositionSec = t;
                },
                updateEverFinished: (t) => {
                    e.hasEverFinished = t;
                },
                markListened: (0, r.L3)(function* (t) {
                    let { streamsResource: i, modelActionsLogger: a } = (0, r._$)(e);
                    try {
                        return yield i.markFinished(t);
                    } catch (e) {
                        return (a.error(e), s.T.ERROR);
                    }
                }),
                markUnlistened: (0, r.L3)(function* (t) {
                    let { streamsResource: i, modelActionsLogger: a } = (0, r._$)(e);
                    try {
                        return yield i.markUnfinished(t);
                    } catch (e) {
                        return (a.error(e), s.T.ERROR);
                    }
                }),
            }));
        },
        62562: (e, t, i) => {
            'use strict';
            i.d(t, { B: () => a, N: () => l });
            var r = i(74631),
                s = i(36432);
            let a = (0, r.createContext)(null);
            function l() {
                let e = (0, r.useContext)(a);
                if (null === e) throw new s.t('Container cannot be null, please add a context provider', { code: 'E_CONTEXT_CONTAINER_NULL' });
                return e;
            }
        },
        73544: (e, t, i) => {
            'use strict';
            i.d(t, { e: () => r });
            let r = (e) => ({ uri: e.uri, color: e.color });
        },
        74310: (e, t, i) => {
            'use strict';
            i.d(t, { b: () => r, j: () => s });
            let r = {
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
        75501: (e, t, i) => {
            'use strict';
            var r;
            (i.d(t, { S: () => r }),
                (function (e) {
                    ((e.TRACK = 'track'),
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
                        (e.POETRY = 'poetry'));
                })(r || (r = {})));
        },
        77895: (e, t, i) => {
            'use strict';
            i.d(t, { I: () => s });
            var r = i(18660);
            let s = (e) => {
                let t = e === r.J.UGC,
                    i = e === r.J.OWN,
                    s = e === r.J.OWN_REPLACED_TO_UGC;
                return { isUGC: t, isOwn: i, isOwnReplacedToUGC: s, isNonUserGenerated: !t && !s };
            };
        },
        80468: (e, t, i) => {
            'use strict';
            (i.d(t, { x: () => a }), ((r || (r = {})).SMART_PREVIEW = 'smart_preview'));
            var r,
                s = i(23951);
            let a = (e, t) => {
                var i, a, l, n, o, c, u, d, m, g;
                let { isSmartPreview: p, hasEverFinished: y } = t || {},
                    b = (0, s.Q)(null == e ? void 0 : e.derivedColors),
                    I = p ? (null == e || null == (i = e.smartPreviewParams) ? void 0 : i.durationMs) : null == e ? void 0 : e.durationMs,
                    v = { available: !!(null == e || null == (a = e.specialAudioResources) ? void 0 : a.includes(r.SMART_PREVIEW)) };
                return {
                    id: ((null == e ? void 0 : e.id) || 0).toString(),
                    isAvailable: !!(null == e ? void 0 : e.available),
                    isRemoved: (null == e ? void 0 : e.error) === 'not-found',
                    title: null != (m = null == e ? void 0 : e.title) ? m : '',
                    version: null == e ? void 0 : e.version,
                    durationMs: I,
                    coverUri: null == e ? void 0 : e.coverUri,
                    averageColor: b,
                    trackParameters: null == e ? void 0 : e.trackParameters,
                    trackSource: null == e ? void 0 : e.trackSource,
                    albumId: null == e || null == (n = e.albums) || null == (l = n[0]) ? void 0 : l.id,
                    disclaimers: null == e ? void 0 : e.disclaimers,
                    type: null == e ? void 0 : e.type,
                    pubDate: null == e ? void 0 : e.pubDate,
                    hasLyrics: null == e || null == (o = e.lyricsInfo) ? void 0 : o.hasAvailableTextLyrics,
                    hasSyncLyrics: null == e || null == (c = e.lyricsInfo) ? void 0 : c.hasAvailableSyncLyrics,
                    shouldRememberPosition: null == e ? void 0 : e.rememberPosition,
                    streamProgress: ((e, t) => ({
                        endPositionSec: null == e ? void 0 : e.endPositionSec,
                        hasEverFinished: (null == t ? void 0 : t.hasEverFinished) || (null == e ? void 0 : e.everFinished),
                    }))(null == e ? void 0 : e.streamProgress, { hasEverFinished: y }),
                    shortDescription: null != (g = null == e ? void 0 : e.shortDescription) ? g : '',
                    trailer: v,
                    clipIds: null == e ? void 0 : e.clipIds,
                    major: (null == e ? void 0 : e.major) ? { id: e.major.id, name: e.major.name } : null,
                    genre: null == e || null == (d = e.albums) || null == (u = d[0]) ? void 0 : u.genre,
                    realId: null == e ? void 0 : e.realId,
                    cutoutCover: null == e ? void 0 : e.cutoutCover,
                };
            };
        },
        80499: (e, t, i) => {
            'use strict';
            i.d(t, { W: () => b, s: () => I });
            var r = i(25839),
                s = i(88204),
                a = i(84059),
                l = i(74631),
                n = i(89288),
                o = i(36432),
                c = i(94421),
                u = i(99989),
                d = i(27954),
                m = i(83382);
            (0, s.eO)(!1);
            let g = (0, l.createContext)(null),
                p = (e) => {
                    let { children: t, store: i, storeKey: s } = e,
                        a = (0, l.useMemo)(() => ({ store: i, storeKey: s }), [i, s]);
                    return (0, r.jsx)(g.Provider, { value: a, children: t });
                },
                y = (e) => {
                    let { nonce: t, patchKey: i, patchesRef: s } = e;
                    return (
                        (0, a.useServerInsertedHTML)(() => {
                            let e = s.current;
                            return ((s.current = []), 0 === e.length)
                                ? null
                                : (0, r.jsx)('script', {
                                      dangerouslySetInnerHTML: {
                                          __html: ((e, t) =>
                                              "\n        window.__PAGE_STATE_PATCHES__ = window.__PAGE_STATE_PATCHES__ || {};\n        window.__PAGE_STATE_PATCHES__['"
                                                  .concat(e, "'] =\n            window.__PAGE_STATE_PATCHES__['")
                                                  .concat(e, "'] || [];\n        window.__PAGE_STATE_PATCHES__['")
                                                  .concat(e, "'].push(")
                                                  .concat((0, n.Gr)(t), ");\n        window.dispatchEvent(new Event('")
                                                  .concat(c.O, "'));\n    "))(i, e),
                                      },
                                      nonce: null != t ? t : void 0,
                                  });
                        }),
                        null
                    );
                },
                b = (e) => {
                    let { createStore: t, patchKey: i } = e,
                        s = () => {
                            var e, t;
                            let r = null != (t = null == (e = window.__PAGE_STATE_PATCHES__) ? void 0 : e[i]) ? t : [];
                            return (window.__PAGE_STATE_PATCHES__ && delete window.__PAGE_STATE_PATCHES__[i], r);
                        };
                    return {
                        pageStoreProvider: (e) => {
                            let { children: a, nonce: l } = e,
                                n = (0, m.Y)(),
                                o = (0, d.g)(),
                                { store: g, patchesRef: b } = (0, u.m)({
                                    createStore: () => t({ ...n, rootStore: o }),
                                    getPendingPatchBatches: s,
                                    patchesUpdatedEventName: c.O,
                                });
                            return (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)(y, { nonce: l, patchKey: i, patchesRef: b }), (0, r.jsx)(p, { store: g, storeKey: i, children: a })],
                            });
                        },
                    };
                };
            function I(e) {
                let { throwOnAbsence: t = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    i = (0, l.useContext)(g);
                if (!i || i.storeKey !== e) {
                    var r;
                    if (!t) return null;
                    throw new o.t('Page store context is missing or has unexpected key', {
                        code: 'E_CONTEXT_PAGE_STORE_NULL',
                        data: { actualStoreKey: null != (r = null == i ? void 0 : i.storeKey) ? r : 'null', expectedStoreKey: e },
                    });
                }
                return i.store;
            }
        },
        81024: (e, t, i) => {
            'use strict';
            i.d(t, { L: () => s });
            var r = i(25895);
            let s = (e) => (0, r.u)('/album/:albumId', { params: { albumId: e } });
        },
        82706: (e, t, i) => {
            'use strict';
            i.d(t, { n: () => r });
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
        83496: (e, t, i) => {
            'use strict';
            i.d(t, { b: () => l });
            var r = i(28410),
                s = i(58268),
                a = i(24820);
            let l = (e, t) => (0, r.wg)({ ...(0, a.v)(e), chart: t && (0, s.w)(t) });
        },
        84e3: (e, t, i) => {
            'use strict';
            i.d(t, { U: () => a });
            var r = i(36484),
                s = i(62562);
            let a = () => (0, s.N)().get(r.Zf);
        },
        88148: (e, t, i) => {
            'use strict';
            i.d(t, { v: () => d });
            var r = i(28410),
                s = i(66730),
                a = i(69088),
                l = i(69432),
                n = i(34001),
                o = i(34546),
                c = i(31488),
                u = i(53603);
            let d = n.O.props({ artists: r.gK.array(a.P), albums: r.gK.array(s.G), chart: r.gK.maybe(l.I) })
                .views((e) => ({
                    get artistsNames() {
                        return (0, o.j)(e.artists);
                    },
                    get mainArtist() {
                        return (0, u.m)(e.artists);
                    },
                    get mainAlbum() {
                        var t, i;
                        return null != (i = null == (t = e.albums) ? void 0 : t[0]) ? i : null;
                    },
                    get index() {
                        var r, s, a;
                        return null != (a = null == (s = e.albums[0]) || null == (r = s.trackPosition) ? void 0 : r.index) ? a : null;
                    },
                    get isAvailableOnlyForPlus() {
                        var l;
                        return !!(null == (l = this.mainAlbum) ? void 0 : l.isAvailableOnlyForPlus);
                    },
                }))
                .actions((e) => ({
                    changeTrackInfo: (0, r.L3)(function* (t, i) {
                        let { ugcResource: s, modelActionsLogger: l } = (0, r._$)(e);
                        if (e.artists.map((e) => e.name).join(', ') === i && t === e.title) return c.F.OK;
                        try {
                            var n;
                            (yield s.changeTrack({ trackId: e.id, title: t, artist: i }), (e.title = t));
                            let l = (null == (n = e.artists[0]) ? void 0 : n.id) || '0';
                            if (((e.artists = (0, r.wg)([])), i)) {
                                let t = a.P.create({ id: l, name: i, isAvailable: !0 });
                                e.artists = (0, r.wg)([t]);
                            }
                            return c.F.OK;
                        } catch (e) {
                            return (l.error(e), c.F.ERROR);
                        }
                    }),
                }))
                .named('Track');
        },
        91201: (e, t, i) => {
            'use strict';
            i.d(t, { p: () => l });
            var r = i(28410),
                s = i(83772),
                a = i(45337);
            let l = (e) => {
                let t = ((e) => ({ ...(0, s.f)(e), artists: e.artists.map(a.G) }))(e);
                return (0, r.wg)(t);
            };
        },
        93588: (e, t, i) => {
            'use strict';
            i.d(t, { sK: () => E, NN: () => s, $3: () => r, CP: () => u, tE: () => d, Ef: () => m, $5: () => p, IU: () => k, tk: () => y.t, u0: () => v });
            let r = !1,
                s = !0;
            var a = i(58025),
                l = i(36432);
            class n extends l.t {
                constructor(e = 'Internal error', { code: t = 'E_CONFIG', ...i } = {}) {
                    (super(e, { code: t, ...i }), (0, a._)(this, 'name', 'ConfigException'), Object.setPrototypeOf(this, n.prototype));
                }
            }
            class o extends n {
                constructor(e) {
                    (super('The configuration file for environment "'.concat(e, '" does not exist.'), { code: 'E_CONFIG_FILE_NOT_FOUND' }),
                        (0, a._)(this, 'name', 'NotFoundConfigException'),
                        Object.setPrototypeOf(this, o.prototype));
                }
            }
            let c = (function (e) {
                    let { manifest: t, getConfig: i } = e,
                        r = new Map();
                    return (e) => {
                        let s = r.get(e);
                        if (s) return s;
                        if (!Object.hasOwn(t, e)) return Promise.reject(new o(e));
                        let a = t[e]().then(i);
                        return (r.set(e, a), a);
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
                u = (e, t) => ''.concat(e, '/').concat(t || '1.0.0'),
                d = (e, t) => (t ? e.afisha.clientId[t] : e.afisha.clientId.web);
            function m(e, t) {
                return t ? e.player.secretKey[t] : '';
            }
            var g = i(49124);
            let p = () => {
                let e = 'window.location.pathname',
                    t = g.env.APP_VERSION || '',
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
            var y = i(27912),
                b = i(90887),
                I = i(52830);
            let v = (e, t, i) => {
                let { allowCustomPrefixUrl: r, prefixUrl: s } = e.resources.musicExternalApi,
                    a = r && 'string' == typeof i && i.length > 0 ? i : s;
                return (0, b.r)(a, t, I.B);
            };
            var E = (function (e) {
                return ((e.WEB = 'YandexMusicWebNext'), (e.DESKTOP = 'YandexMusicDesktopApp'), e);
            })({});
            let k = async (e) => ({ env: e, publicConfig: await c(e) });
        },
        95897: (e, t, i) => {
            'use strict';
            i.d(t, { p: () => s });
            var r = i(28410);
            let s = r.gK.model('ModelDestroyManager').actions(() => ({
                destroyItems(e) {
                    (e.forEach((e) => {
                        e && (0, r.Yo)(e);
                    }),
                        queueMicrotask(() => {
                            e.forEach((e) => {
                                e && (0, r.zr)(e);
                            });
                        }));
                },
            }));
        },
        98436: (e, t, i) => {
            'use strict';
            var r;
            (i.d(t, { _: () => r }),
                (function (e) {
                    ((e.ALBUM_ITEM = 'album_item'),
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
                        (e.QUERY_TO_VIBE_ITEM = 'q2v_item'));
                })(r || (r = {})));
        },
    },
    (e) => {
        (e.O(0, [6706, 1311, 8398, 6702, 6152, 9333, 4475, 5056, 7358], () => e((e.s = 30299))), (_N_E = e.O()));
    },
]);
