'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [389],
    {
        5706: (e, t, r) => {
            r.d(t, { f: () => n });
            var i = r(54667);
            let n = (e) => e === i.S.TRACK || e === i.S.MUSIC;
        },
        6215: (e, t, r) => {
            r.d(t, { E: () => n });
            var i = r(42078);
            let n = (e) => ''.concat(i._.ARTIST_ITEM).concat(e);
        },
        8413: (e, t, r) => {
            r.d(t, { a: () => n });
            var i = r(61691);
            let n = (e) => e === i._.PODCAST || e === i._.AUDIOBOOK || e === i._.FAIRY_TALE;
        },
        16501: (e, t, r) => {
            r.d(t, { m: () => i });
            let i = (e) => {
                var t, r;
                return (null == e || null == (t = e[0]) ? void 0 : t.various) ? null : null != (r = null == e ? void 0 : e[0]) ? r : null;
            };
        },
        16818: (e, t, r) => {
            r.d(t, { Y: () => o });
            var i = r(53647),
                n = r(4086),
                l = r(41928),
                a = r(65523),
                s = r(57448);
            let o = () => {
                let e = (0, l.N)(),
                    t = e.get(n.oo),
                    r = e.get(n.QG),
                    o = e.get(n.uM),
                    u = e.get(n.ff),
                    d = e.get(n.V4),
                    g = e.get(n.P0),
                    c = (0, s.f)(),
                    m = (0, a.U)(),
                    v = (0, l.N)().get(n.TK),
                    b = e.get(n.ni),
                    y = e.get(n.RD),
                    f = new i.si(),
                    K = new i.fW();
                return {
                    ...c,
                    acqOffers: o,
                    disclaimerDictionary: u,
                    logger: m,
                    modelActionsLogger: v,
                    localStorage: f,
                    sessionStorage: K,
                    containerStorage: t,
                    authorization: r,
                    config: d,
                    clientSafeConfig: g,
                    landingSdk: b,
                    tagSandbox: y,
                };
            };
        },
        20775: (e, t, r) => {
            r.d(t, { x: () => n });
            var i = r(62837);
            let n = (e, t) => !e && !!(t && (0, i.Ve)(t, i.Yw.MODAL));
        },
        23744: (e, t, r) => {
            r.d(t, { a: () => s });
            var i = r(5120),
                n = r(50633);
            let l = ['Safari', 'MobileSafari'],
                a = ['iOS', 'MacOS'],
                s = i.gK.model('DomainTrailerEntity', { available: i.gK.boolean }).views((e) => ({
                    get isAvailable() {
                        if (!(0, i._n)(e)) return !1;
                        let { settings: t } = (0, n.M)(e);
                        if (
                            !(null == t ? void 0 : t.browserInfo) ||
                            ((e) => {
                                let t = e.version ? Number(e.version.split('.')[0]) : void 0;
                                return !!(e.name && l.includes(e.name) && e.OSFamily && a.includes(e.OSFamily) && t && t < 18);
                            })(t.browserInfo)
                        )
                            return !1;
                        return e.available;
                    },
                }));
        },
        25918: (e, t, r) => {
            r.d(t, { B: () => l });
            var i = r(5120),
                n = r(18143);
            let l = i.gK.model('StreamProgress', { endPositionSec: i.gK.maybe(i.gK.number), hasEverFinished: i.gK.maybe(i.gK.boolean) }).actions((e) => ({
                updateEndPositionSec: (t) => {
                    e.endPositionSec = t;
                },
                updateEverFinished: (t) => {
                    e.hasEverFinished = t;
                },
                markListened: (0, i.L3)(function* (t) {
                    let { streamsResource: r, modelActionsLogger: l } = (0, i._$)(e);
                    try {
                        return yield r.markFinished(t);
                    } catch (e) {
                        return (l.error(e), n.T.ERROR);
                    }
                }),
                markUnlistened: (0, i.L3)(function* (t) {
                    let { streamsResource: r, modelActionsLogger: l } = (0, i._$)(e);
                    try {
                        return yield r.markUnfinished(t);
                    } catch (e) {
                        return (l.error(e), n.T.ERROR);
                    }
                }),
            }));
        },
        27169: (e, t, r) => {
            var i;
            (r.d(t, { Q: () => i }),
                (function (e) {
                    ((e.FROM_ALBUM_COVER = 'from-album-cover'), (e.FROM_ARTIST_PHOTOS = 'from-artist-photos'), (e.PIC = 'pic'), (e.MOSAIC = 'mosaic'));
                })(i || (i = {})));
        },
        41917: (e, t, r) => {
            r.d(t, { m: () => a });
            var i = r(89625),
                n = r(48109),
                l = r(57285);
            let a = function (e) {
                var t;
                let { mapArtists: r = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return {
                    id: e.id,
                    title: e.title,
                    artists: r ? (null == (t = e.artists) ? void 0 : t.map(i.G)) : void 0,
                    coverUri: e.coverUri,
                    type: e.type,
                    year: e.year,
                    version: e.version,
                    genre: e.genre,
                    likesCount: e.likesCount,
                    averageColor: (0, n.Q)(e.derivedColors),
                    isAvailable: !!e.available,
                    trackPosition: e.trackPosition,
                    disclaimers: e.disclaimers,
                    trackCount: e.trackCount,
                    availableForPremiumUsers: e.availableForPremiumUsers,
                    availableForOptions: e.availableForOptions || [],
                    bestAlbumTracks: e.bests,
                    durationSec: e.durationSec,
                    trailer: (0, l.n)(e.trailer),
                    listeningFinished: !!e.listeningFinished,
                };
            };
        },
        48109: (e, t, r) => {
            r.d(t, { Q: () => i });
            let i = (e) => {
                var t, r;
                return 'string' == typeof (null == e ? void 0 : e.average)
                    ? null == e
                        ? void 0
                        : e.average
                    : 'object' == typeof (null == e ? void 0 : e.average) && 'string' == typeof (null == e || null == (t = e.average) ? void 0 : t.color)
                      ? null == e || null == (r = e.average)
                          ? void 0
                          : r.color
                      : '';
            };
        },
        49573: (e, t, r) => {
            r.d(t, { J: () => K });
            var i,
                n = r(5120),
                l = r(87999),
                a = r(61691);
            !(function (e) {
                ((e.KIDS = 'kids'), (e.BOOKMATE = 'bookmate'));
            })(i || (i = {}));
            var s = r(79390),
                o = r(90544),
                u = r(62390),
                d = r(50633),
                g = r(85587),
                c = r(62697),
                m = r(23744),
                v = r(97335),
                b = r(38514),
                y = r(88943),
                f = r(8413);
            let K = n.gK
                .compose(
                    n.gK.model({
                        id: n.gK.number,
                        title: n.gK.string,
                        artists: n.gK.maybe(n.gK.array(o.P)),
                        chart: n.gK.maybe(u.I),
                        type: n.gK.maybe(n.gK.enumeration(Object.values(a._))),
                        coverUri: n.gK.maybe(n.gK.string),
                        averageColor: n.gK.maybe(n.gK.string),
                        year: n.gK.maybe(n.gK.number),
                        version: n.gK.maybe(n.gK.string),
                        isAvailable: n.gK.optional(n.gK.boolean, !0),
                        availableForOptions: n.gK.maybe(n.gK.frozen()),
                        availableForPremiumUsers: n.gK.maybe(n.gK.boolean),
                        bookmateOptionRequired: n.gK.maybe(n.gK.boolean),
                        genre: n.gK.maybe(n.gK.string),
                        trackPosition: n.gK.maybe(n.gK.frozen()),
                        trackCount: n.gK.maybe(n.gK.number),
                        bestAlbumTracks: n.gK.maybe(n.gK.frozen()),
                        trailer: n.gK.maybe(m.a),
                        durationSec: n.gK.maybe(n.gK.number),
                        listeningFinished: n.gK.maybe(n.gK.boolean),
                        releaseDate: n.gK.maybe(n.gK.string),
                    }),
                    v.t,
                    c.E,
                )
                .views((e) => {
                    let t = {
                        get artistNames() {
                            var r;
                            return null == (r = e.artists) ? void 0 : r.map((e) => e.name).join(', ');
                        },
                        get artistName() {
                            var s, o, u, c;
                            if (null == (o = e.artists) || null == (s = o[0]) ? void 0 : s.various) return;
                            return null == (c = e.artists) || null == (u = c[0]) ? void 0 : u.name;
                        },
                        get artistIds() {
                            var m;
                            return null == (m = e.artists) ? void 0 : m.map((e) => e.id);
                        },
                        get artistId() {
                            var v, K;
                            return null == (K = e.artists) || null == (v = K[0]) ? void 0 : v.id;
                        },
                        get url() {
                            let { href: t } = (0, b.L)(e.id);
                            return t;
                        },
                        get isLiked() {
                            if (!(0, n._n)(e)) return !1;
                            let { library: t } = (0, d.M)(e);
                            return null == t ? void 0 : t.isAlbumLiked(e.id);
                        },
                        get pinId() {
                            return (0, y.i)(e.id);
                        },
                        get seeds() {
                            return ['album:'.concat(e.id)];
                        },
                        get isAlbum() {
                            return e.type === a._.ALBUM || e.type === a._.SINGLE;
                        },
                        get isPodcast() {
                            return e.type === a._.PODCAST;
                        },
                        get isAudiobook() {
                            return e.type === a._.AUDIOBOOK;
                        },
                        get isFairyTale() {
                            return e.type === a._.FAIRY_TALE;
                        },
                        get isNonMusic() {
                            if (!(0, n._n)(e)) return !1;
                            return (0, f.a)(e.type);
                        },
                        get mainObjectType() {
                            if (t.isPodcast) return l.DomainObjectType.Podcast;
                            if (t.isAudiobook || t.isFairyTale) return l.DomainObjectType.Audiobook;
                            return l.DomainObjectType.Album;
                        },
                        get isPinned() {
                            if (!(0, n._n)(e)) return !1;
                            let { pinsCollection: t } = (0, d.M)(e);
                            return t.isPinned(this.pinId);
                        },
                        get isLegalRejected() {
                            if (!(0, n._n)(e)) return !1;
                            return e.getIsLegalRejected(e.isAvailable);
                        },
                        get isUnsafeLegal() {
                            if (!(0, n._n)(e)) return !1;
                            return e.getIsUnsafeLegal(e.isAvailable);
                        },
                        get isAvailableOnlyForPlus() {
                            var p;
                            return !e.isAvailable && (e.availableForPremiumUsers || !!(null == (p = e.availableForOptions) ? void 0 : p.includes(i.BOOKMATE)));
                        },
                        get shouldShowBooksBadge() {
                            var h;
                            return !!(
                                e.bookmateOptionRequired ||
                                (!e.availableForPremiumUsers && (null == (h = e.availableForOptions) ? void 0 : h.includes(i.BOOKMATE)))
                            );
                        },
                        getDisclaimerEntityRef: (r) => ({ entityType: null != r ? r : t.isPodcast ? g.n.PODCAST : g.n.ALBUM, entityId: e.id }),
                    };
                    return t;
                })
                .actions((e) => ({
                    toggleLike: (0, n.L3)(function* () {
                        if (!(0, n._n)(e)) return;
                        let { library: t, user: r } = (0, d.M)(e);
                        if (r.isAuthorized) {
                            let i = yield t.toggleAlbumLike({ entityId: e.id, userId: r.account.data.uid });
                            return ((0, n._n)(e) && i === s.f.OK && (e.isLiked ? e.likePending() : e.unlikePending()), i);
                        }
                    }),
                    togglePin: (0, n.L3)(function* () {
                        if (!(0, n._n)(e)) return;
                        let { pinsCollection: t, user: r } = (0, d.M)(e);
                        if (r.isAuthorized) return yield t.toggleAlbumPin({ id: e.id }, e.pinId);
                    }),
                    getKey: (t) => ''.concat(t, '_').concat(e.id),
                    updateFinished: (t) => {
                        e.listeningFinished = t;
                    },
                }))
                .named('AlbumModel');
        },
        50633: (e, t, r) => {
            r.d(t, { M: () => n });
            var i = r(5120);
            let n = (e) => {
                let t = (0, i.Zn)(e);
                if (((e) => 'object' == typeof e && null !== e && 'isRootModel' in e && !0 === e.isRootModel)(t)) return t;
                let { rootStore: r } = (0, i._$)(e);
                return r || t;
            };
        },
        50914: (e, t, r) => {
            (r.d(t, { K: () => s }), ((i || (i = {})).SMART_PREVIEW = 'smart_preview'));
            var i,
                n = r(41917),
                l = r(89625),
                a = r(48109);
            let s = (e, t) => {
                var r, s, o, u, d, g, c, m, v, b, y, f;
                let { isSmartPreview: K, hasEverFinished: p } = t || {},
                    h = (0, a.Q)(null == e ? void 0 : e.derivedColors),
                    k = K ? (null == e || null == (r = e.smartPreviewParams) ? void 0 : r.durationMs) : null == e ? void 0 : e.durationMs,
                    A = { available: !!(null == e || null == (s = e.specialAudioResources) ? void 0 : s.includes(i.SMART_PREVIEW)) };
                return {
                    id: ((null == e ? void 0 : e.id) || 0).toString(),
                    isAvailable: !!(null == e ? void 0 : e.available),
                    isRemoved: (null == e ? void 0 : e.error) === 'not-found',
                    title: null != (y = null == e ? void 0 : e.title) ? y : '',
                    version: null == e ? void 0 : e.version,
                    durationMs: k,
                    coverUri: null == e ? void 0 : e.coverUri,
                    averageColor: h,
                    trackParameters: null == e ? void 0 : e.trackParameters,
                    trackSource: null == e ? void 0 : e.trackSource,
                    albumId: null == e || null == (u = e.albums) || null == (o = u[0]) ? void 0 : o.id,
                    disclaimers: null == e ? void 0 : e.disclaimers,
                    type: null == e ? void 0 : e.type,
                    pubDate: null == e ? void 0 : e.pubDate,
                    hasLyrics: null == e || null == (d = e.lyricsInfo) ? void 0 : d.hasAvailableTextLyrics,
                    hasSyncLyrics: null == e || null == (g = e.lyricsInfo) ? void 0 : g.hasAvailableSyncLyrics,
                    shouldRememberPosition: null == e ? void 0 : e.rememberPosition,
                    streamProgress: ((e, t) => ({
                        endPositionSec: null == e ? void 0 : e.endPositionSec,
                        hasEverFinished: (null == t ? void 0 : t.hasEverFinished) || (null == e ? void 0 : e.everFinished),
                    }))(null == e ? void 0 : e.streamProgress, { hasEverFinished: p }),
                    shortDescription: null != (f = null == e ? void 0 : e.shortDescription) ? f : '',
                    trailer: A,
                    clipIds: null == e ? void 0 : e.clipIds,
                    major: (null == e ? void 0 : e.major) ? { id: e.major.id, name: e.major.name } : null,
                    genre: null == e || null == (m = e.albums) || null == (c = m[0]) ? void 0 : c.genre,
                    realId: null == e ? void 0 : e.realId,
                    cutoutCover: null == e ? void 0 : e.cutoutCover,
                    artists: null == e || null == (v = e.artists) ? void 0 : v.map(l.G),
                    albums: null == e || null == (b = e.albums) ? void 0 : b.map((e) => (0, n.m)(e, { mapArtists: !1 })),
                };
            };
        },
        53399: (e, t, r) => {
            r.d(t, { m: () => n });
            var i = r(81592);
            let n = (e) => {
                if (!e) return;
                let t = [];
                return (
                    e.forEach((r, n) => {
                        let l = e[n + 1];
                        'string' == typeof r && 'object' == typeof l && t.push({ ...(0, i.v)(l), separator: r });
                    }),
                    t.length > 0 ? t : void 0
                );
            };
        },
        53647: (e, t, r) => {
            r.d(t, { V8: () => l, si: () => s, fW: () => c, MJ: () => g, jU: () => v, Bx: () => m });
            var i = r(77451);
            function n(e) {
                if (!e) return null;
                try {
                    return JSON.parse(e);
                } catch (e) {
                    return (console.error(e), null);
                }
            }
            class l {
                get(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    try {
                        let a = (0, i.Jt)(e);
                        if (t) {
                            var r, l;
                            return null != (l = null == (r = n(a)) ? void 0 : r.value) ? l : null;
                        }
                        return null != a ? a : null;
                    } catch (e) {
                        return null;
                    }
                }
                set(e, t, r) {
                    let n = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
                    try {
                        let l = n ? JSON.stringify({ value: t }) : t;
                        (0, i.hZ)(e, l, r);
                    } catch (e) {
                        console.error(e);
                    }
                }
                has(e) {
                    return null !== this.get(e, !1);
                }
                remove(e) {
                    try {
                        (0, i.TF)(e);
                    } catch (e) {}
                }
            }
            function a(e) {
                try {
                    var t;
                    return null != (t = window[e]) ? t : null;
                } catch (e) {
                    return null;
                }
            }
            class s {
                get(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        r = a('localStorage');
                    if (!r) return null;
                    try {
                        var i;
                        let l = r.getItem(e) || void 0;
                        if (!t) return l;
                        let a = n(l);
                        if (!a) return null;
                        let s = null != (i = null == a ? void 0 : a.value) ? i : null;
                        if ((null == a ? void 0 : a.expires) && Date.now() > new Date(a.expires).getTime()) return (this.remove(e), null);
                        return s;
                    } catch (e) {
                        return null;
                    }
                }
                set(e, t, r) {
                    if ('number' == typeof (null == r ? void 0 : r.expires)) {
                        let e = new Date();
                        (e.setMilliseconds(e.getMilliseconds() + 864e5 * r.expires), (r.expires = e));
                    }
                    let i = a('localStorage');
                    if (i)
                        try {
                            i.setItem(e, JSON.stringify({ value: t, ...r }));
                        } catch (e) {}
                }
                has(e) {
                    return null !== this.get(e);
                }
                remove(e) {
                    let t = a('localStorage');
                    if (t)
                        try {
                            t.removeItem(e);
                        } catch (e) {}
                }
            }
            var o = r(9519),
                u = r(39499);
            class d extends u.t {
                constructor(e, t, { code: r = 'E_STORAGE', ...i } = {}) {
                    (super('There is no '.concat(t, ' storage on the ').concat(e, ' platform'), { code: r, ...i }),
                        (0, o._)(this, 'name', 'Storage Exception'),
                        Object.setPrototypeOf(this, d.prototype));
                }
            }
            class g {
                get(e) {
                    throw new d(this.platform, this.type);
                }
                set(e, t, r) {
                    throw new d(this.platform, this.type);
                }
                has(e) {
                    throw new d(this.platform, this.type);
                }
                remove(e) {
                    throw new d(this.platform, this.type);
                }
                constructor(e, t) {
                    ((0, o._)(this, 'platform', ''), (0, o._)(this, 'type', ''), (this.platform = e), (this.type = t));
                }
            }
            class c {
                get(e) {
                    let t = a('sessionStorage');
                    if (!t) return null;
                    try {
                        var r, i, l;
                        let a = null != (i = t.getItem(e)) ? i : void 0;
                        return null != (l = null == (r = n(a)) ? void 0 : r.value) ? l : null;
                    } catch (e) {
                        return null;
                    }
                }
                set(e, t) {
                    let r = a('sessionStorage');
                    if (r)
                        try {
                            r.setItem(e, JSON.stringify({ value: t }));
                        } catch (e) {}
                }
                has(e) {
                    return null !== this.get(e);
                }
                remove(e) {
                    let t = a('sessionStorage');
                    if (t)
                        try {
                            t.removeItem(e);
                        } catch (e) {}
                }
            }
            function m(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                Array.isArray(t) &&
                    t.forEach((t) => {
                        let r = 'object' != typeof t ? t : t.name,
                            i = 'object' != typeof t ? { expires: 365 } : t.options || { expires: 365 },
                            n = e.get(r);
                        null != n && e.set(r, n, i);
                    });
            }
            function v(e) {
                let { name: t, group: r, value: i } = e;
                return i && 0 !== Object.keys(i).length
                    ? i.title
                        ? { [t]: { group: r, value: { ...i, title: r } } }
                        : { [t]: { group: r, value: { title: r, value: i } } }
                    : { [t]: { group: r, value: { title: r } } };
            }
        },
        57285: (e, t, r) => {
            r.d(t, { n: () => i });
            let i = (e) => ({ available: !!(null == e ? void 0 : e.available) });
        },
        59497: (e, t, r) => {
            r.d(t, { X: () => l });
            var i = r(5120),
                n = r(74773);
            let l = i.gK.model('LoadingState', { loadingState: i.gK.enumeration(Object.values(n.G)) }).views((e) => ({
                get isNeededToLoad() {
                    return e.loadingState === n.G.IDLE;
                },
                get isLoading() {
                    return e.loadingState === n.G.PENDING;
                },
                get isResolved() {
                    return e.loadingState === n.G.RESOLVE;
                },
                get isRejected() {
                    return e.loadingState === n.G.REJECT;
                },
            }));
        },
        61499: (e, t, r) => {
            var i;
            (r.d(t, { K: () => i }),
                (function (e) {
                    ((e.EXPLICIT = 'explicit'), (e.CLEAN = 'clean'));
                })(i || (i = {})));
        },
        62390: (e, t, r) => {
            r.d(t, { I: () => l });
            var i = r(5120),
                n = r(13607);
            let l = i.gK.model('Chart', { position: i.gK.maybe(i.gK.number), progress: i.gK.maybe(i.gK.enumeration(Object.values(n._))) });
        },
        62697: (e, t, r) => {
            r.d(t, { E: () => u });
            var i = r(5120),
                n = r(62837),
                l = r(61499),
                a = r(54667),
                s = r(20775),
                o = r(81828);
            let u = i.gK
                .model('ExplicitModel', {
                    contentWarning: i.gK.maybe(i.gK.enumeration(Object.values(l.K))),
                    trackType: i.gK.maybe(i.gK.enumeration(Object.values(a.S))),
                    disclaimers: i.gK.maybe(i.gK.frozen()),
                    resolvedDisclaimers: i.gK.maybe(i.gK.frozen()),
                })
                .views((e) => ({
                    get isExplicit() {
                        return (0, o.A)(e.contentWarning);
                    },
                    get explicitDisclaimer() {
                        if (!(0, i._n)(e) || !e.disclaimers) return null;
                        return (0, n.DQ)(e.disclaimers);
                    },
                    get hasModalDisclaimer() {
                        if (!e.disclaimers) return !1;
                        return (0, n.Ve)(e.disclaimers, n.Yw.MODAL);
                    },
                    getIsLegalRejected: (t) => !!(0, i._n)(e) && (0, s.x)(t, e.disclaimers),
                    getIsUnsafeLegal(t) {
                        return !!(0, i._n)(e) && !!e.disclaimers && t && this.hasModalDisclaimer;
                    },
                    get isForeignAgent() {
                        if (!(0, i._n)(e) || !e.disclaimers) return !1;
                        return (0, n.Ve)(e.disclaimers, n.Yw.FOREIGN_AGENT);
                    },
                    get resolvedForeignAgentData() {
                        var t;
                        if (!e.resolvedDisclaimers) return null;
                        let r = e.resolvedDisclaimers[n.Yw.FOREIGN_AGENT];
                        return null != (t = null == r ? void 0 : r[0]) ? t : null;
                    },
                    get resolvedDescriptionTexts() {
                        if (!e.resolvedDisclaimers) return null;
                        let t = e.resolvedDisclaimers[n.Yw.DESCRIPTION_TEXT];
                        if (!t || 0 === t.length) return null;
                        let r = [];
                        for (let e of t) e.title && r.push(e.title);
                        return r.length > 0 ? r : null;
                    },
                    get resolvedModalData() {
                        var r;
                        if (!e.resolvedDisclaimers) return null;
                        let t = e.resolvedDisclaimers[n.Yw.MODAL];
                        return null != (r = null == t ? void 0 : t[0]) ? r : null;
                    },
                }))
                .actions((e) => {
                    let { disclaimerDictionary: t, modelActionsLogger: r } = (0, i._$)(e),
                        l = (0, i.L3)(function* (n) {
                            try {
                                if (!(0, i._n)(e) || !e.disclaimers) return null;
                                let r = yield t.resolveByType(e.disclaimers, n);
                                if (0 === r.length) return null;
                                return r;
                            } catch (e) {
                                return (r.error(e), null);
                            }
                        });
                    return {
                        getDisclaimerData: (0, i.L3)(function* (e) {
                            return yield l(e);
                        }),
                        getModalDisclaimerData: (0, i.L3)(function* () {
                            var e;
                            let t = yield l(n.Yw.MODAL);
                            return t && null != (e = t[0]) ? e : null;
                        }),
                        getForeignAgentDisclaimerData: (0, i.L3)(function* () {
                            var e;
                            let t = yield l(n.Yw.FOREIGN_AGENT);
                            return t && null != (e = t[0]) ? e : null;
                        }),
                        getDescriptionTexts: (0, i.L3)(function* () {
                            if (e.resolvedDescriptionTexts) return e.resolvedDescriptionTexts;
                            let t = yield l(n.Yw.DESCRIPTION_TEXT);
                            if (!t) return null;
                            let r = [];
                            for (let e of t) e.title && r.push(e.title);
                            return r.length > 0 ? r : null;
                        }),
                        resolveAllDisclaimers: (0, i.L3)(function* () {
                            if ((0, i._n)(e) && e.disclaimers && 0 !== e.disclaimers.length)
                                try {
                                    let r = yield t.resolveAll(e.disclaimers);
                                    e.resolvedDisclaimers = (0, i.wg)(r);
                                } catch (e) {
                                    r.error(e);
                                }
                        }),
                    };
                });
        },
        63425: (e, t, r) => {
            r.d(t, { $: () => n });
            var i = r(5120);
            let n = i.gK.model('Cover', { uri: i.gK.maybe(i.gK.string), color: i.gK.maybe(i.gK.string), videoUrl: i.gK.maybe(i.gK.string) });
        },
        70003: (e, t, r) => {
            r.d(t, { m: () => l });
            var i = r(5120),
                n = r(53548);
            let l = (e) => {
                let { createStore: t, getPendingPatchBatches: r, patchesUpdatedEventName: l } = e,
                    a = (0, n.useRef)([]),
                    [s] = (0, n.useState)(() => {
                        let e = t();
                        for (let t of r()) (0, i.X6)(e, t);
                        return e;
                    });
                return (
                    (0, n.useLayoutEffect)(() => {
                        let e = () => {
                            for (let e of r()) (0, i.X6)(s, e);
                        };
                        return (e(), window.addEventListener(l, e), () => window.removeEventListener(l, e));
                    }, [r, l, s]),
                    { store: s, patchesRef: a }
                );
            };
        },
        76626: (e, t, r) => {
            r.d(t, { v: () => l });
            var i = r(5120),
                n = r(50914);
            let l = (e, t) => {
                let r = (0, n.K)(e, t);
                return (0, i.wg)(r);
            };
        },
        81592: (e, t, r) => {
            r.d(t, { v: () => i });
            let i = (e) => {
                var t, r;
                return {
                    id: String(e.id),
                    name: e.name,
                    various: e.various,
                    isComposer: e.composer,
                    isAvailable: null == (r = e.available) || r,
                    disclaimers: e.disclaimers,
                    coverUri: null == (t = e.cover) ? void 0 : t.uri,
                };
            };
        },
        81828: (e, t, r) => {
            r.d(t, { A: () => n });
            var i = r(61499);
            let n = (e) => e === i.K.EXPLICIT;
        },
        88943: (e, t, r) => {
            r.d(t, { i: () => n });
            var i = r(42078);
            let n = (e) => ''.concat(i._.ALBUM_ITEM).concat(e);
        },
        89108: (e, t, r) => {
            r.d(t, { O: () => n, s: () => i });
            let i = 'yMusicStatePatchesUpdated',
                n = 'yMusicPageStatePatchesUpdated';
        },
        89625: (e, t, r) => {
            r.d(t, { G: () => o });
            var i = r(48109),
                n = r(31510),
                l = r(57285),
                a = r(81592),
                s = r(53399);
            let o = (e) => {
                var t;
                return {
                    ...(0, a.v)(e),
                    decomposed: (0, s.m)(e.decomposed),
                    coverType: null == (t = e.cover) ? void 0 : t.type,
                    averageColor: (0, i.Q)(e.derivedColors),
                    counts: e.counts ? ((e) => ({ albums: e.directAlbums, compilations: e.alsoAlbums, tracks: e.tracks }))(e.counts) : void 0,
                    trailer: (0, l.n)(e.trailer),
                    cutoutCover: e.cutoutCover ? (0, n.e)(e.cutoutCover) : void 0,
                };
            };
        },
        90544: (e, t, r) => {
            r.d(t, { P: () => f });
            var i = r(5120),
                n = r(27169),
                l = r(79390),
                a = r(50633),
                s = r(85587),
                o = r(63425),
                u = r(62697),
                d = r(23744),
                g = r(97335),
                c = r(35994),
                m = r(6215);
            let v = i.gK
                    .compose(
                        i.gK.model('BaseArtist', {
                            id: i.gK.string,
                            name: i.gK.string,
                            various: i.gK.maybe(i.gK.boolean),
                            isComposer: i.gK.maybe(i.gK.boolean),
                            isAvailable: i.gK.boolean,
                            trailer: i.gK.maybe(d.a),
                            coverUri: i.gK.maybe(i.gK.string),
                            coverType: i.gK.maybe(i.gK.string),
                            cutoutCover: i.gK.maybe(o.$),
                        }),
                        g.t,
                        u.E,
                    )
                    .views((e) => ({
                        get key() {
                            return ''.concat(e.id, '_').concat(e.name);
                        },
                        get url() {
                            let { href: t } = (0, c.R)(e.id);
                            return t;
                        },
                        get isLiked() {
                            if (!(0, i._n)(e)) return !1;
                            let { library: t } = (0, a.M)(e);
                            return t.isArtistLiked(e.id);
                        },
                        get isDisliked() {
                            if (!(0, i._n)(e)) return !1;
                            let { library: t } = (0, a.M)(e);
                            return t.isArtistDisliked(e.id);
                        },
                        get pinId() {
                            return (0, m.E)(e.id);
                        },
                        get seeds() {
                            return ['artist:'.concat(e.id)];
                        },
                        get isPinned() {
                            if (!(0, i._n)(e)) return !1;
                            let { pinsCollection: t } = (0, a.M)(e);
                            return t.isPinned(this.pinId);
                        },
                        get isLegalRejected() {
                            return e.getIsLegalRejected(e.isAvailable);
                        },
                        get isUnsafeLegal() {
                            return e.getIsUnsafeLegal(e.isAvailable);
                        },
                        get isCoverFromAlbum() {
                            if (!(0, i._n)(e)) return !1;
                            return e.coverType === n.Q.FROM_ALBUM_COVER;
                        },
                        getDisclaimerEntityRef: (t) => ({ entityType: null != t ? t : s.n.ARTIST, entityId: e.id }),
                    }))
                    .actions((e) => ({
                        toggleLike: (0, i.L3)(function* () {
                            if (!(0, i._n)(e)) return;
                            let { library: t, user: r } = (0, a.M)(e);
                            if (r.isAuthorized) {
                                let n = yield t.toggleArtistLike({ entityId: e.id, userId: r.account.data.uid });
                                return ((0, i._n)(e) && n === l.f.OK && (e.isLiked ? e.likePending() : e.unlikePending()), n);
                            }
                        }),
                        toggleDislike() {
                            if (!(0, i._n)(e)) return;
                            let { library: t, user: r } = (0, a.M)(e);
                            return t.toggleArtistDislike({ entityId: e.id, userId: r.account.data.uid });
                        },
                        togglePin: (0, i.L3)(function* () {
                            if (!(0, i._n)(e)) return;
                            let { pinsCollection: t, user: r } = (0, a.M)(e);
                            if (r.isAuthorized) return yield t.toggleArtistPin({ id: e.id }, e.pinId);
                        }),
                        getKey: (t) => ''.concat(t, '_').concat(e.id),
                    })),
                b = i.gK.model('Counts', { albums: i.gK.number, compilations: i.gK.number, tracks: i.gK.number }),
                y = v.props({ separator: i.gK.maybe(i.gK.string) }),
                f = v.props({ decomposed: i.gK.maybe(i.gK.array(y)), averageColor: i.gK.maybe(i.gK.string), counts: i.gK.maybe(b) }).views((e) => ({
                    get isAvailableForPlaying() {
                        if (void 0 === e.counts) return !0;
                        return e.counts.tracks > 0;
                    },
                }));
        },
        96826: (e, t, r) => {
            r.d(t, { v: () => I });
            var i = r(5120),
                n = r(54667),
                l = r(76794),
                a = r(49573),
                s = r(90544),
                o = r(62390),
                u = r(47580),
                d = r(50633),
                g = r(27506),
                c = r(85587),
                m = r(63425),
                v = r(62697),
                b = r(23744),
                y = r(78686),
                f = r(63698),
                K = r(16501),
                p = r(70565),
                h = r(5706),
                k = r(25918);
            let A = [n.S.MUSIC, n.S.TRACK, n.S.NOISE, n.S.ASMR],
                I = i.gK
                    .compose(
                        i.gK.model({
                            id: i.gK.string,
                            isAvailable: i.gK.boolean,
                            isRemoved: i.gK.boolean,
                            title: i.gK.string,
                            trackSource: i.gK.maybe(i.gK.enumeration(Object.values(l.J))),
                            version: i.gK.maybe(i.gK.string),
                            durationMs: i.gK.maybe(i.gK.number),
                            coverUri: i.gK.maybe(i.gK.string),
                            averageColor: i.gK.maybe(i.gK.string),
                            trackParameters: i.gK.maybe(i.gK.frozen()),
                            albums: i.gK.array(a.J),
                            albumId: i.gK.maybe(i.gK.number),
                            artists: i.gK.array(s.P),
                            chart: i.gK.maybe(o.I),
                            type: i.gK.maybe(i.gK.enumeration(Object.values(n.S))),
                            pubDate: i.gK.maybe(i.gK.string),
                            hasLyrics: i.gK.maybe(i.gK.boolean),
                            hasSyncLyrics: i.gK.maybe(i.gK.boolean),
                            trailer: i.gK.maybe(b.a),
                            shouldRememberPosition: i.gK.maybe(i.gK.boolean),
                            streamProgress: i.gK.maybe(k.B),
                            shortDescription: i.gK.maybe(i.gK.string),
                            major: i.gK.maybeNull(i.gK.frozen()),
                            clipIds: i.gK.maybeNull(i.gK.frozen()),
                            genre: i.gK.maybeNull(i.gK.string),
                            realId: i.gK.maybe(i.gK.string),
                            cutoutCover: i.gK.maybe(m.$),
                        }),
                        v.E,
                    )
                    .views((e) => {
                        let t = {
                            get artistsNames() {
                                return (0, u.j)(e.artists);
                            },
                            get isLiked() {
                                if ((0, i._n)(e)) {
                                    let { library: t } = (0, d.M)(e);
                                    return t.isTrackLiked(e.id);
                                }
                                return !1;
                            },
                            get isDownloaded() {
                                if (!(0, i._n)(e)) return !1;
                                let { slam: t } = (0, d.M)(e);
                                return t.isTrackDownloaded(e.id);
                            },
                            get isDownloading() {
                                if (!(0, i._n)(e)) return !1;
                                let { slam: t } = (0, d.M)(e);
                                return t.isTrackDownloading(e.id);
                            },
                            get downloadingProgress() {
                                if (!(0, i._n)(e)) return 0;
                                let { slam: t } = (0, d.M)(e);
                                return t.getTrackDownloadingProgress(e.id);
                            },
                            get index() {
                                var r, l, a;
                                return null != (a = null == (l = e.albums[0]) || null == (r = l.trackPosition) ? void 0 : r.index) ? a : null;
                            },
                            get isAvailableForDownload() {
                                if (!(0, i._n)(e)) return !1;
                                return (e.type && A.includes(e.type)) || !!t.isUGC;
                            },
                            get isAvailableOnlyForPlus() {
                                var s;
                                return !!(null == (s = this.mainAlbum) ? void 0 : s.isAvailableOnlyForPlus);
                            },
                            getUrl(t) {
                                let { href: r } = (0, f.l)(e.id, e.albumId, t);
                                return r;
                            },
                            get url() {
                                return t.getUrl();
                            },
                            get isDisliked() {
                                if ((0, i._n)(e)) {
                                    let { library: t } = (0, d.M)(e);
                                    return t.isTrackDisliked(e.id);
                                }
                                return !1;
                            },
                            get isTrackPodcast() {
                                if ((0, i._n)(e)) return e.type === n.S.PODCAST;
                                return !1;
                            },
                            get isPlusSubscribed() {
                                if (!(0, i._n)(e)) return !1;
                                let { user: t } = (0, d.M)(e);
                                return t.hasPlus;
                            },
                            get isSyncLyricsAvailableWithOfflineFeature() {
                                if (!(0, i._n)(e)) return !1;
                                let { slam: t } = (0, d.M)(e);
                                return !!e.hasSyncLyrics && !t.isOfflineModeEnabled;
                            },
                            get isSyncLyricsAvailable() {
                                return this.isPlusSubscribed && this.isSyncLyricsAvailableWithOfflineFeature;
                            },
                            get isLyricsAvailable() {
                                if (!(0, i._n)(e)) return !1;
                                let { slam: t, user: r } = (0, d.M)(e);
                                if (!r.hasPlus) return !1;
                                return !!e.hasLyrics && !t.isOfflineModeEnabled;
                            },
                            get isTrackAudiobook() {
                                if ((0, i._n)(e)) return e.type === n.S.AUDIOBOOK;
                                return !1;
                            },
                            get isTrackFairyTale() {
                                if ((0, i._n)(e)) return e.type === n.S.FAIRY_TALE;
                                return !1;
                            },
                            get isTrackNonMusic() {
                                return this.isTrackPodcast || this.isTrackAudiobook || this.isTrackFairyTale;
                            },
                            get isTrackMusic() {
                                if ((0, i._n)(e)) return (0, h.f)(e.type);
                                return !1;
                            },
                            get isUGC() {
                                if ((0, i._n)(e)) {
                                    let { isUGC: t } = (0, p.I)(e.trackSource);
                                    return t;
                                }
                                return;
                            },
                            get isOwn() {
                                if ((0, i._n)(e)) {
                                    let { isOwn: t } = (0, p.I)(e.trackSource);
                                    return t;
                                }
                                return;
                            },
                            get isOwnReplacedToUGC() {
                                if ((0, i._n)(e)) {
                                    let { isOwnReplacedToUGC: t } = (0, p.I)(e.trackSource);
                                    return t;
                                }
                                return;
                            },
                            get mainAlbum() {
                                var o, g;
                                return null != (g = null == (o = e.albums) ? void 0 : o[0]) ? g : null;
                            },
                            get mainArtist() {
                                return (0, K.m)(e.artists);
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
                                } = (0, d.M)(e);
                                return (0, y.t)(e, { isMobile: t, isOfflineModeEnabled: r.isOfflineModeEnabled });
                            },
                            get isNonUserGenerated() {
                                if (!(0, i._n)(e)) return !1;
                                let { isNonUserGenerated: t } = (0, p.I)(e.trackSource);
                                return t;
                            },
                            get hasModalAccess() {
                                return e.hasModalDisclaimer;
                            },
                            getDisclaimerEntityRef: (r) =>
                                r
                                    ? { entityType: r, entityId: e.id }
                                    : t.isTrackPodcast
                                      ? { entityType: c.n.PODCAST, entityId: e.id }
                                      : t.isTrackAudiobook
                                        ? { entityType: c.n.AUDIOBOOK, entityId: e.id }
                                        : { entityType: c.n.TRACK, entityId: e.id },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        afterCreate() {
                            e.trackType = e.type;
                        },
                        changeTrackInfo: (0, i.L3)(function* (t, r) {
                            let { ugcResource: n, modelActionsLogger: l } = (0, i._$)(e);
                            if (e.artists.map((e) => e.name).join(', ') === r && t === e.title) return g.F.OK;
                            try {
                                var a;
                                (yield n.changeTrack({ trackId: e.id, title: t, artist: r }), (e.title = t));
                                let l = (null == (a = e.artists[0]) ? void 0 : a.id) || '0';
                                if (((e.artists = (0, i.wg)([])), r)) {
                                    let t = s.P.create({ id: l, name: r, isAvailable: !0 });
                                    e.artists = (0, i.wg)([t]);
                                }
                                return g.F.OK;
                            } catch (e) {
                                return (l.error(e), g.F.ERROR);
                            }
                        }),
                        toggleLike: (0, i.L3)(function* () {
                            if (!(0, i._n)(e)) return;
                            let { library: t, user: r } = (0, d.M)(e);
                            if (r.isAuthorized) return yield t.toggleTrackLike({ entityId: e.id, albumId: e.albumId, userId: r.account.data.uid });
                        }),
                        toggleDislike: (0, i.L3)(function* () {
                            if (!(0, i._n)(e)) return;
                            let { library: t, user: r } = (0, d.M)(e);
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
                    }))
                    .named('Track');
        },
        97335: (e, t, r) => {
            r.d(t, { t: () => n });
            var i = r(5120);
            let n = i.gK
                .model('LikesCount', { likesCount: i.gK.maybe(i.gK.number), pendingLikesCount: i.gK.optional(i.gK.number, 0) })
                .views((e) => ({
                    get actualLikesCount() {
                        if ('number' == typeof e.likesCount) {
                            var t;
                            return e.likesCount + (null != (t = e.pendingLikesCount) ? t : 0);
                        }
                        return 0;
                    },
                }))
                .actions((e) => ({
                    likePending() {
                        e.pendingLikesCount += 1;
                    },
                    unlikePending() {
                        e.pendingLikesCount -= 1;
                    },
                }));
        },
    },
]);
