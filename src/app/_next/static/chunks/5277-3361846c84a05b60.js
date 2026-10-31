'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5277],
    {
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
        16818: (e, t, r) => {
            r.d(t, { Y: () => s });
            var i = r(53647),
                n = r(4086),
                l = r(41928),
                a = r(65523),
                o = r(57448);
            let s = () => {
                let e = (0, l.N)(),
                    t = e.get(n.oo),
                    r = e.get(n.QG),
                    s = e.get(n.uM),
                    u = e.get(n.ff),
                    g = e.get(n.V4),
                    d = e.get(n.P0),
                    c = (0, o.f)(),
                    v = (0, a.U)(),
                    m = (0, l.N)().get(n.TK),
                    y = e.get(n.ni),
                    b = e.get(n.RD),
                    f = new i.si(),
                    p = new i.fW();
                return {
                    ...c,
                    acqOffers: s,
                    disclaimerDictionary: u,
                    logger: v,
                    modelActionsLogger: m,
                    localStorage: f,
                    sessionStorage: p,
                    containerStorage: t,
                    authorization: r,
                    config: g,
                    clientSafeConfig: d,
                    landingSdk: y,
                    tagSandbox: b,
                };
            };
        },
        17128: (e, t, r) => {
            r.d(t, { G: () => b });
            var i,
                n = r(5120),
                l = r(92716),
                a = r(61691);
            !(function (e) {
                ((e.KIDS = 'kids'), (e.BOOKMATE = 'bookmate'));
            })(i || (i = {}));
            var o = r(79390),
                s = r(50633),
                u = r(85587),
                g = r(67102),
                d = r(23744),
                c = r(97335),
                v = r(38514),
                m = r(88943),
                y = r(8413);
            let b = n.gK
                .compose(
                    n.gK.model({
                        id: n.gK.number,
                        title: n.gK.string,
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
                        trailer: n.gK.maybe(d.a),
                        durationSec: n.gK.maybe(n.gK.number),
                        listeningFinished: n.gK.maybe(n.gK.boolean),
                        releaseDate: n.gK.maybe(n.gK.string),
                    }),
                    c.t,
                    g.E,
                )
                .views((e) => {
                    let t = {
                        get url() {
                            let { href: t } = (0, v.L)(e.id);
                            return t;
                        },
                        get isLiked() {
                            if (!(0, n._n)(e)) return !1;
                            let { library: t } = (0, s.M)(e);
                            return null == t ? void 0 : t.isAlbumLiked(e.id);
                        },
                        get pinId() {
                            return (0, m.i)(e.id);
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
                            return (0, y.a)(e.type);
                        },
                        get mainObjectType() {
                            if (t.isPodcast) return l.DomainObjectType.Podcast;
                            if (t.isAudiobook || t.isFairyTale) return l.DomainObjectType.Audiobook;
                            return l.DomainObjectType.Album;
                        },
                        get isPinned() {
                            if (!(0, n._n)(e)) return !1;
                            let { pinsCollection: t } = (0, s.M)(e);
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
                            var r;
                            return !e.isAvailable && (e.availableForPremiumUsers || !!(null == (r = e.availableForOptions) ? void 0 : r.includes(i.BOOKMATE)));
                        },
                        get shouldShowBooksBadge() {
                            var o;
                            return !!(
                                e.bookmateOptionRequired ||
                                (!e.availableForPremiumUsers && (null == (o = e.availableForOptions) ? void 0 : o.includes(i.BOOKMATE)))
                            );
                        },
                        getDisclaimerEntityRef: (r) => ({ entityType: null != r ? r : t.isPodcast ? u.n.PODCAST : u.n.ALBUM, entityId: e.id }),
                    };
                    return t;
                })
                .actions((e) => ({
                    toggleLike: (0, n.L3)(function* () {
                        if (!(0, n._n)(e)) return;
                        let { library: t, user: r } = (0, s.M)(e);
                        if (r.isAuthorized) {
                            let i = yield t.toggleAlbumLike({ entityId: e.id, userId: r.account.data.uid });
                            return ((0, n._n)(e) && i === o.f.OK && (e.isLiked ? e.likePending() : e.unlikePending()), i);
                        }
                    }),
                    togglePin: (0, n.L3)(function* () {
                        if (!(0, n._n)(e)) return;
                        let { pinsCollection: t, user: r } = (0, s.M)(e);
                        if (r.isAuthorized) return yield t.toggleAlbumPin({ id: e.id }, e.pinId);
                    }),
                    getKey: (t) => ''.concat(t, '_').concat(e.id),
                    updateFinished: (t) => {
                        e.listeningFinished = t;
                    },
                }))
                .named('BaseAlbum');
        },
        23744: (e, t, r) => {
            r.d(t, { a: () => o });
            var i = r(5120),
                n = r(50633);
            let l = ['Safari', 'MobileSafari'],
                a = ['iOS', 'MacOS'],
                o = i.gK.model('DomainTrailerEntity', { available: i.gK.boolean }).views((e) => ({
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
        27169: (e, t, r) => {
            var i;
            (r.d(t, { Q: () => i }),
                (function (e) {
                    ((e.FROM_ALBUM_COVER = 'from-album-cover'), (e.FROM_ARTIST_PHOTOS = 'from-artist-photos'), (e.PIC = 'pic'), (e.MOSAIC = 'mosaic'));
                })(i || (i = {})));
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
            r.d(t, { V8: () => l, si: () => o, fW: () => c, MJ: () => d, jU: () => m, Bx: () => v });
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
            class o {
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
                        let o = null != (i = null == a ? void 0 : a.value) ? i : null;
                        if ((null == a ? void 0 : a.expires) && Date.now() > new Date(a.expires).getTime()) return (this.remove(e), null);
                        return o;
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
            var s = r(9519),
                u = r(39499);
            class g extends u.t {
                constructor(e, t, { code: r = 'E_STORAGE', ...i } = {}) {
                    (super('There is no '.concat(t, ' storage on the ').concat(e, ' platform'), { code: r, ...i }),
                        (0, s._)(this, 'name', 'Storage Exception'),
                        Object.setPrototypeOf(this, g.prototype));
                }
            }
            class d {
                get(e) {
                    throw new g(this.platform, this.type);
                }
                set(e, t, r) {
                    throw new g(this.platform, this.type);
                }
                has(e) {
                    throw new g(this.platform, this.type);
                }
                remove(e) {
                    throw new g(this.platform, this.type);
                }
                constructor(e, t) {
                    ((0, s._)(this, 'platform', ''), (0, s._)(this, 'type', ''), (this.platform = e), (this.type = t));
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
            function v(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                Array.isArray(t) &&
                    t.forEach((t) => {
                        let r = 'object' != typeof t ? t : t.name,
                            i = 'object' != typeof t ? { expires: 365 } : t.options || { expires: 365 },
                            n = e.get(r);
                        null != n && e.set(r, n, i);
                    });
            }
            function m(e) {
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
        57448: (e, t, r) => {
            r.d(t, { f: () => l });
            var i = r(4086),
                n = r(41928);
            let l = () => {
                let e = (0, n.N)(),
                    t = e.get(i.$I),
                    r = e.get(i.EN),
                    l = e.get(i.N1),
                    a = e.get(i._1),
                    o = e.get(i.V3),
                    s = e.get(i.Lb),
                    u = e.get(i.wK),
                    g = e.get(i.tz),
                    d = e.get(i.$8),
                    c = e.get(i.Oo),
                    v = e.get(i.X4),
                    m = e.get(i.O9),
                    y = e.get(i.E),
                    b = e.get(i.wH),
                    f = e.get(i.ok),
                    p = e.get(i.X8),
                    K = e.get(i.yq),
                    h = e.get(i.NN),
                    A = e.get(i.qN),
                    O = e.get(i.ro),
                    L = e.get(i.nM),
                    _ = e.get(i.Ut),
                    k = e.get(i.K1),
                    D = e.get(i.eu),
                    T = e.get(i.SD),
                    I = e.get(i.aE),
                    E = e.get(i.ki),
                    M = e.get(i.c9),
                    C = e.get(i.en),
                    S = e.get(i.jQ),
                    P = e.get(i.cZ),
                    w = e.get(i.Zl),
                    R = e.get(i.CN),
                    F = e.get(i.P1),
                    N = e.get(i.zj),
                    U = e.get(i.re),
                    j = e.get(i.JM),
                    x = e.get(i.Lk),
                    G = e.get(i.$$),
                    B = e.get(i.sv),
                    Y = e.get(i.gd),
                    z = e.get(i.Ez),
                    V = e.get(i.u2),
                    X = e.get(i.TD),
                    $ = e.get(i.dh),
                    J = e.get(i.LC),
                    Q = e.get(i.PL),
                    q = e.get(i.DT);
                return {
                    accountResource: t,
                    afterTrackResource: r,
                    disclaimersResource: l,
                    usersResource: a,
                    landingResource: o,
                    landing3Resource: s,
                    landingBlocksResource: u,
                    albumResource: g,
                    libraryResource: d,
                    tracksResource: c,
                    topResource: v,
                    artistsResource: m,
                    slidesResource: y,
                    redAlertResource: b,
                    rotorResource: f,
                    waveResource: p,
                    searchResource: K,
                    searchPlaylistResource: h,
                    playlistResource: A,
                    playlistsResource: O,
                    pinResource: L,
                    metatagsResource: _,
                    tagResource: k,
                    feedResource: D,
                    wizard3Resource: T,
                    pinsResource: I,
                    musicHistoryResource: E,
                    dynamicPagesResource: M,
                    chartResource: C,
                    clipsResource: S,
                    lyricViewsResource: P,
                    nonMusicResource: w,
                    donationResource: R,
                    loaderResource: F,
                    lumenResource: N,
                    prefixlessResource: U,
                    streamsResource: j,
                    filtersResource: x,
                    ugcResource: G,
                    collectionResource: B,
                    adsResource: Y,
                    personalResource: z,
                    familyResource: V,
                    childrenLandingResource: X,
                    promoResource: $,
                    telemetryResource: J,
                    labelsResource: Q,
                    concertsResource: q,
                    wordsResource: e.get(i.dA),
                    wheelResource: e.get(i.$Y),
                };
            };
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
        63425: (e, t, r) => {
            r.d(t, { $: () => n });
            var i = r(5120);
            let n = i.gK.model('Cover', { uri: i.gK.maybe(i.gK.string), color: i.gK.maybe(i.gK.string), videoUrl: i.gK.maybe(i.gK.string) });
        },
        67102: (e, t, r) => {
            r.d(t, { E: () => s });
            var i = r(5120),
                n = r(62837),
                l = r(61499),
                a = r(54667),
                o = r(81828);
            let s = i.gK
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
                    getIsLegalRejected(t) {
                        let r;
                        return !!(0, i._n)(e) && ((r = e.disclaimers), !t && !!(r && (0, n.Ve)(r, n.Yw.MODAL)));
                    },
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
        70003: (e, t, r) => {
            r.d(t, { m: () => l });
            var i = r(5120),
                n = r(53548);
            let l = (e) => {
                let { createStore: t, getPendingPatchBatches: r, patchesUpdatedEventName: l } = e,
                    a = (0, n.useRef)([]),
                    [o] = (0, n.useState)(() => {
                        let e = t();
                        for (let t of r()) (0, i.X6)(e, t);
                        return e;
                    });
                return (
                    (0, n.useLayoutEffect)(() => {
                        let e = () => {
                            for (let e of r()) (0, i.X6)(o, e);
                        };
                        return (e(), window.addEventListener(l, e), () => window.removeEventListener(l, e));
                    }, [r, l, o]),
                    { store: o, patchesRef: a }
                );
            };
        },
        70850: (e, t, r) => {
            r.d(t, { f: () => l });
            var i = r(48109),
                n = r(57285);
            let l = (e) => ({
                id: e.id,
                title: e.title,
                coverUri: e.coverUri,
                type: e.type,
                year: e.year,
                version: e.version,
                genre: e.genre,
                likesCount: e.likesCount,
                averageColor: (0, i.Q)(e.derivedColors),
                isAvailable: !!e.available,
                trackPosition: e.trackPosition,
                disclaimers: e.disclaimers,
                trackCount: e.trackCount,
                availableForPremiumUsers: e.availableForPremiumUsers,
                availableForOptions: e.availableForOptions || [],
                bestAlbumTracks: e.bests,
                durationSec: e.durationSec,
                trailer: (0, n.n)(e.trailer),
                listeningFinished: !!e.listeningFinished,
            });
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
            r.d(t, { G: () => s });
            var i = r(48109),
                n = r(31510),
                l = r(57285),
                a = r(81592),
                o = r(53399);
            let s = (e) => {
                var t;
                return {
                    ...(0, a.v)(e),
                    decomposed: (0, o.m)(e.decomposed),
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
                o = r(85587),
                s = r(63425),
                u = r(67102),
                g = r(23744),
                d = r(97335),
                c = r(35994),
                v = r(6215);
            let m = i.gK
                    .compose(
                        i.gK.model('BaseArtist', {
                            id: i.gK.string,
                            name: i.gK.string,
                            various: i.gK.maybe(i.gK.boolean),
                            isComposer: i.gK.maybe(i.gK.boolean),
                            isAvailable: i.gK.boolean,
                            trailer: i.gK.maybe(g.a),
                            coverUri: i.gK.maybe(i.gK.string),
                            coverType: i.gK.maybe(i.gK.string),
                            cutoutCover: i.gK.maybe(s.$),
                        }),
                        d.t,
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
                            return (0, v.E)(e.id);
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
                        getDisclaimerEntityRef: (t) => ({ entityType: null != t ? t : o.n.ARTIST, entityId: e.id }),
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
                y = i.gK.model('Counts', { albums: i.gK.number, compilations: i.gK.number, tracks: i.gK.number }),
                b = m.props({ separator: i.gK.maybe(i.gK.string) }),
                f = m.props({ decomposed: i.gK.maybe(i.gK.array(b)), averageColor: i.gK.maybe(i.gK.string), counts: i.gK.maybe(y) }).views((e) => ({
                    get isAvailableForPlaying() {
                        if (void 0 === e.counts) return !0;
                        return e.counts.tracks > 0;
                    },
                }));
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
