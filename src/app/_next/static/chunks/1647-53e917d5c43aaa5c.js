'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1647],
    {
        5245: (e, t, r) => {
            r.d(t, { m: () => l });
            var i = r(60754),
                n = r(55178);
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
                        return e(), window.addEventListener(l, e), () => window.removeEventListener(l, e);
                    }, [r, l, s]),
                    { store: s, patchesRef: a }
                );
            };
        },
        10733: (e, t, r) => {
            r.d(t, { G: () => l });
            var i = r(91945),
                n = r(50891);
            class l extends n.m {
                constructor(e, t) {
                    super(e, { code: 'E_HTTP_CLIENT_NON_2XX_3XX_RESPONSE', cause: t.cause }),
                        (0, i._)(this, 'name', 'HttpErrorException'),
                        (0, i._)(this, 'statusCode', void 0),
                        (this.statusCode = t.statusCode),
                        Object.setPrototypeOf(this, l.prototype);
                }
            }
        },
        15567: (e, t, r) => {
            r.d(t, { M: () => n });
            var i = r(60754);
            let n = (e) => {
                let t = (0, i.Zn)(e);
                if (((e) => 'object' == typeof e && null !== e && 'isRootModel' in e && !0 === e.isRootModel)(t)) return t;
                let { rootStore: r } = (0, i._$)(e);
                return r || t;
            };
        },
        26544: (e, t, r) => {
            r.d(t, { m: () => n });
            var i = r(60754);
            let n = (e) => (0, i.wg)({ available: !!(null == e ? void 0 : e.available) });
        },
        31726: (e, t, r) => {
            r.d(t, { Y: () => s });
            var i = r(54280),
                n = r(70204),
                l = r(34186),
                a = r(62376);
            let s = () => {
                let e = (0, l.N)(),
                    t = e.get(n.oo),
                    r = e.get(n.uM),
                    s = e.get(n.ff),
                    o = e.get(n.tw),
                    u = e.get(n.P0),
                    g = (() => {
                        let e = (0, l.N)(),
                            t = e.get(n.$I),
                            r = e.get(n.EN),
                            i = e.get(n.N1),
                            a = e.get(n._1),
                            s = e.get(n.V3),
                            o = e.get(n.Lb),
                            u = e.get(n.wK),
                            g = e.get(n.tz),
                            d = e.get(n.$8),
                            c = e.get(n.Oo),
                            m = e.get(n.X4),
                            v = e.get(n.O9),
                            b = e.get(n.E),
                            y = e.get(n.wH),
                            f = e.get(n.ok),
                            p = e.get(n.X8),
                            E = e.get(n.yq),
                            K = e.get(n.NN),
                            _ = e.get(n.qN),
                            O = e.get(n.ro),
                            A = e.get(n.nM),
                            h = e.get(n.Ut),
                            T = e.get(n.K1),
                            I = e.get(n.eu),
                            D = e.get(n.aE),
                            L = e.get(n.ki),
                            k = e.get(n.c9),
                            P = e.get(n.en),
                            S = e.get(n.jQ),
                            C = e.get(n.cZ),
                            N = e.get(n.Zl),
                            M = e.get(n.CN),
                            w = e.get(n.P1),
                            R = e.get(n.zj),
                            F = e.get(n.re),
                            U = e.get(n.JM),
                            j = e.get(n.Lk),
                            B = e.get(n.$$),
                            x = e.get(n.sv),
                            X = e.get(n.gd),
                            G = e.get(n.Ez),
                            Q = e.get(n.u2),
                            Y = e.get(n.TD),
                            z = e.get(n.dh),
                            H = e.get(n.LC),
                            V = e.get(n.PL),
                            $ = e.get(n.DT);
                        return {
                            accountResource: t,
                            afterTrackResource: r,
                            disclaimersResource: i,
                            usersResource: a,
                            landingResource: s,
                            landing3Resource: o,
                            landingBlocksResource: u,
                            albumResource: g,
                            libraryResource: d,
                            tracksResource: c,
                            topResource: m,
                            artistsResource: v,
                            slidesResource: b,
                            redAlertResource: y,
                            rotorResource: f,
                            waveResource: p,
                            searchResource: E,
                            searchPlaylistResource: K,
                            playlistResource: _,
                            playlistsResource: O,
                            pinResource: A,
                            metatagsResource: h,
                            tagResource: T,
                            feedResource: I,
                            pinsResource: D,
                            musicHistoryResource: L,
                            dynamicPagesResource: k,
                            chartResource: P,
                            clipsResource: S,
                            lyricViewsResource: C,
                            nonMusicResource: N,
                            donationResource: M,
                            loaderResource: w,
                            lumenResource: R,
                            prefixlessResource: F,
                            streamsResource: U,
                            filtersResource: j,
                            ugcResource: B,
                            collectionResource: x,
                            adsResource: X,
                            personalResource: G,
                            familyResource: Q,
                            childrenLandingResource: Y,
                            promoResource: z,
                            telemetryResource: H,
                            labelsResource: V,
                            concertsResource: $,
                            wordsResource: e.get(n.dA),
                            wheelResource: e.get(n.$Y),
                        };
                    })(),
                    d = (0, a.U)(),
                    c = (0, l.N)().get(n.TK),
                    m = e.get(n.ni),
                    v = new i.si(),
                    b = new i.fW();
                return {
                    ...g,
                    acqOffers: r,
                    disclaimerDictionary: s,
                    logger: d,
                    modelActionsLogger: c,
                    localStorage: v,
                    sessionStorage: b,
                    containerStorage: t,
                    config: o,
                    clientSafeConfig: u,
                    landingSdk: m,
                };
            };
        },
        33898: (e, t, r) => {
            var i;
            r.d(t, { Z: () => i }),
                (function (e) {
                    (e.METHOD_NOT_SUPPORTED = 'E_BEACON_METHOD_NOT_SUPPORTED'),
                        (e.NOT_AVAILABLE = 'E_BEACON_NOT_AVAILABLE'),
                        (e.QUEUE_FAILED = 'E_BEACON_QUEUE_FAILED'),
                        (e.NO_RESPONSE_DATA = 'E_BEACON_NO_RESPONSE_DATA'),
                        (e.RETRY_EXHAUSTED = 'E_BEACON_RETRY_EXHAUSTED');
                })(i || (i = {}));
        },
        35597: (e, t, r) => {
            r.d(t, { t: () => n });
            var i = r(60754);
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
        44032: (e, t, r) => {
            r.d(t, { I: () => l });
            var i = r(60754),
                n = r(13365);
            let l = i.gK.model('Chart', { position: i.gK.maybe(i.gK.number), progress: i.gK.maybe(i.gK.enumeration(Object.values(n._))) });
        },
        45346: (e, t, r) => {
            r.d(t, { a: () => s });
            var i = r(60754),
                n = r(15567);
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
        50891: (e, t, r) => {
            r.d(t, { m: () => l });
            var i = r(91945),
                n = r(29222);
            class l extends n.t {
                constructor(e = 'Http Client error', { code: t = 'E_HTTP_CLIENT', ...r } = {}) {
                    super(e, { code: t, ...r }), (0, i._)(this, 'name', 'HttpException'), Object.setPrototypeOf(this, l.prototype);
                }
            }
        },
        50961: (e, t, r) => {
            var i;
            r.d(t, { X: () => i }),
                (function (e) {
                    (e[(e.NOT_MODIFIED = 304)] = 'NOT_MODIFIED'),
                        (e[(e.NOT_FOUND = 404)] = 'NOT_FOUND'),
                        (e[(e.BAD_REQUEST = 400)] = 'BAD_REQUEST'),
                        (e[(e.REQUEST_TIMEOUT = 408)] = 'REQUEST_TIMEOUT'),
                        (e[(e.PRECONDITION_FAILED = 412)] = 'PRECONDITION_FAILED'),
                        (e[(e.TEAPOT = 418)] = 'TEAPOT');
                })(i || (i = {}));
        },
        52947: (e, t, r) => {
            r.d(t, { E: () => s });
            var i = r(60754),
                n = r(26252),
                l = r(63849),
                a = r(96333);
            let s = i.gK
                .model('ExplicitModel', {
                    contentWarning: i.gK.maybe(i.gK.enumeration(Object.values(l.K))),
                    trackType: i.gK.maybe(i.gK.enumeration(Object.values(a.S))),
                    disclaimers: i.gK.maybe(i.gK.frozen()),
                    resolvedDisclaimers: i.gK.maybe(i.gK.frozen()),
                })
                .views((e) => ({
                    get isExplicit() {
                        return e.contentWarning === l.K.EXPLICIT;
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
                        return !!(0, i._n)(e) && !t && this.hasModalDisclaimer;
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
                                return r.error(e), null;
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
        54280: (e, t, r) => {
            r.d(t, { V8: () => l, si: () => s, fW: () => c, MJ: () => d, jU: () => v, Bx: () => m });
            var i = r(78061);
            function n(e) {
                if (!e) return null;
                try {
                    return JSON.parse(e);
                } catch (e) {
                    return console.error(e), null;
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
                        if ((null == a ? void 0 : a.expires) && Date.now() > new Date(a.expires).getTime()) return this.remove(e), null;
                        return s;
                    } catch (e) {
                        return null;
                    }
                }
                set(e, t, r) {
                    if ('number' == typeof (null == r ? void 0 : r.expires)) {
                        let e = new Date();
                        e.setMilliseconds(e.getMilliseconds() + 864e5 * r.expires), (r.expires = e);
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
            var o = r(91945),
                u = r(29222);
            class g extends u.t {
                constructor(e, t, { code: r = 'E_STORAGE', ...i } = {}) {
                    super('There is no '.concat(t, ' storage on the ').concat(e, ' platform'), { code: r, ...i }),
                        (0, o._)(this, 'name', 'Storage Exception'),
                        Object.setPrototypeOf(this, g.prototype);
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
                    (0, o._)(this, 'platform', ''), (0, o._)(this, 'type', ''), (this.platform = e), (this.type = t);
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
        57367: (e, t, r) => {
            r.d(t, { P: () => f });
            var i = r(60754),
                n = r(90404),
                l = r(96151),
                a = r(63380),
                s = r(15567),
                o = r(85017),
                u = r(36477),
                g = r(99703),
                d = r(52947),
                c = r(45346),
                m = r(35597);
            let v = i.gK
                    .compose(
                        i.gK.model('BaseArtist', {
                            id: i.gK.string,
                            name: i.gK.string,
                            various: i.gK.maybe(i.gK.boolean),
                            isComposer: i.gK.maybe(i.gK.boolean),
                            isAvailable: i.gK.boolean,
                            trailer: i.gK.maybe(c.a),
                            coverUri: i.gK.maybe(i.gK.string),
                            coverType: i.gK.maybe(i.gK.string),
                            cutoutCover: i.gK.maybe(g.$),
                        }),
                        m.t,
                        d.E,
                    )
                    .views((e) => ({
                        get key() {
                            return ''.concat(e.id, '_').concat(e.name);
                        },
                        get url() {
                            let { href: t } = (0, u.u)('/artist/:artistId', { params: { artistId: e.id } });
                            return t;
                        },
                        get isLiked() {
                            if (!(0, i._n)(e)) return !1;
                            let { library: t } = (0, s.M)(e);
                            return t.isArtistLiked(e.id);
                        },
                        get isDisliked() {
                            if (!(0, i._n)(e)) return !1;
                            let { library: t } = (0, s.M)(e);
                            return t.isArtistDisliked(e.id);
                        },
                        get pinId() {
                            return ''.concat(n._.ARTIST_ITEM).concat(e.id);
                        },
                        get seeds() {
                            return ['artist:'.concat(e.id)];
                        },
                        get isPinned() {
                            if (!(0, i._n)(e)) return !1;
                            let { pinsCollection: t } = (0, s.M)(e);
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
                            return e.coverType === l.Q.FROM_ALBUM_COVER;
                        },
                        getDisclaimerEntityRef: (t) => ({ entityType: null != t ? t : o.n.ARTIST, entityId: e.id }),
                    }))
                    .actions((e) => ({
                        toggleLike: (0, i.L3)(function* () {
                            if (!(0, i._n)(e)) return;
                            let { library: t, user: r } = (0, s.M)(e);
                            if (r.isAuthorized) {
                                let n = yield t.toggleArtistLike({ entityId: e.id, userId: r.account.data.uid });
                                return (0, i._n)(e) && n === a.f.OK && (e.isLiked ? e.likePending() : e.unlikePending()), n;
                            }
                        }),
                        toggleDislike() {
                            if (!(0, i._n)(e)) return;
                            let { library: t, user: r } = (0, s.M)(e);
                            return t.toggleArtistDislike({ entityId: e.id, userId: r.account.data.uid });
                        },
                        togglePin: (0, i.L3)(function* () {
                            if (!(0, i._n)(e)) return;
                            let { pinsCollection: t, user: r } = (0, s.M)(e);
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
        63849: (e, t, r) => {
            var i;
            r.d(t, { K: () => i }),
                (function (e) {
                    (e.EXPLICIT = 'explicit'), (e.CLEAN = 'clean');
                })(i || (i = {}));
        },
        69757: (e, t, r) => {
            r.d(t, { e: () => a });
            var i = r(60754),
                n = r(93159),
                l = r(26544);
            let a = (e) => {
                let t = (0, l.m)(e.trailer);
                return (0, i.wg)({
                    id: e.id,
                    title: e.title,
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
                    trailer: t,
                    listeningFinished: !!e.listeningFinished,
                });
            };
        },
        73715: (e, t, r) => {
            r.d(t, { X: () => l });
            var i = r(60754),
                n = r(49399);
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
        84060: (e, t, r) => {
            r.d(t, { d: () => o });
            var i = r(60754),
                n = r(93159),
                l = r(55985),
                a = r(26544),
                s = r(89014);
            let o = (e) => {
                var t, r, o;
                let u = (0, s.F)(e.decomposed),
                    g = (null == e ? void 0 : e.counts) ? ((e) => ({ albums: e.directAlbums, compilations: e.alsoAlbums, tracks: e.tracks }))(e.counts) : void 0,
                    d = (0, a.m)(e.trailer),
                    c = e.cutoutCover ? (0, l.p)(e.cutoutCover) : void 0;
                return (0, i.wg)({
                    id: String(e.id),
                    name: e.name,
                    isComposer: e.composer,
                    coverUri: null == (t = e.cover) ? void 0 : t.uri,
                    coverType: null == (r = e.cover) ? void 0 : r.type,
                    various: e.various,
                    averageColor: (0, n.Q)(null == e ? void 0 : e.derivedColors),
                    decomposed: u,
                    counts: g,
                    isAvailable: null == (o = null == e ? void 0 : e.available) || o,
                    disclaimers: e.disclaimers,
                    trailer: d,
                    cutoutCover: c,
                });
            };
        },
        87411: (e, t, r) => {
            r.d(t, { G: () => b });
            var i,
                n = r(60754),
                l = r(16172),
                a = r(64605),
                s = r(90404);
            !(function (e) {
                (e.KIDS = 'kids'), (e.BOOKMATE = 'bookmate');
            })(i || (i = {}));
            var o = r(63380),
                u = r(15567),
                g = r(85017),
                d = r(36477),
                c = r(52947),
                m = r(45346),
                v = r(35597);
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
                        get url() {
                            let { href: t } = (0, d.u)('/album/:albumId', { params: { albumId: e.id } });
                            return t;
                        },
                        get isLiked() {
                            if (!(0, n._n)(e)) return !1;
                            let { library: t } = (0, u.M)(e);
                            return null == t ? void 0 : t.isAlbumLiked(e.id);
                        },
                        get pinId() {
                            return ''.concat(s._.ALBUM_ITEM).concat(e.id);
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
                            return t.isPodcast || t.isAudiobook || t.isFairyTale;
                        },
                        get mainObjectType() {
                            if (t.isPodcast) return l.ky.Podcast;
                            if (t.isAudiobook || t.isFairyTale) return l.ky.Audiobook;
                            return l.ky.Album;
                        },
                        get isPinned() {
                            if (!(0, n._n)(e)) return !1;
                            let { pinsCollection: t } = (0, u.M)(e);
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
                        getDisclaimerEntityRef: (r) => ({ entityType: null != r ? r : t.isPodcast ? g.n.PODCAST : g.n.ALBUM, entityId: e.id }),
                    };
                    return t;
                })
                .actions((e) => ({
                    toggleLike: (0, n.L3)(function* () {
                        if (!(0, n._n)(e)) return;
                        let { library: t, user: r } = (0, u.M)(e);
                        if (r.isAuthorized) {
                            let i = yield t.toggleAlbumLike({ entityId: e.id, userId: r.account.data.uid });
                            return (0, n._n)(e) && i === o.f.OK && (e.isLiked ? e.likePending() : e.unlikePending()), i;
                        }
                    }),
                    togglePin: (0, n.L3)(function* () {
                        if (!(0, n._n)(e)) return;
                        let { pinsCollection: t, user: r } = (0, u.M)(e);
                        if (r.isAuthorized) return yield t.toggleAlbumPin({ id: e.id }, e.pinId);
                    }),
                    getKey: (t) => ''.concat(t, '_').concat(e.id),
                    updateFinished: (t) => {
                        e.listeningFinished = t;
                    },
                }))
                .named('BaseAlbum');
        },
        87953: (e, t, r) => {
            r.d(t, { GX: () => l.G, X1: () => i.X, m5: () => n.m });
            var i = r(50961),
                n = r(50891),
                l = r(10733);
            r(33898);
        },
        89014: (e, t, r) => {
            r.d(t, { F: () => n });
            var i = r(60754);
            let n = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                    t = [];
                return (
                    e.forEach((r, n) => {
                        let l = e[n + 1];
                        if ('string' == typeof r && 'object' == typeof l) {
                            var a, s;
                            t.push(
                                (0, i.wg)({
                                    id: String(l.id),
                                    name: l.name,
                                    various: l.various,
                                    isComposer: l.composer,
                                    separator: r,
                                    isAvailable: null == (s = l.available) || s,
                                    disclaimers: l.disclaimers,
                                    coverUri: null == (a = l.cover) ? void 0 : a.uri,
                                }),
                            );
                        }
                    }),
                    t.length > 0 ? t : void 0
                );
            };
        },
        93159: (e, t, r) => {
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
        96151: (e, t, r) => {
            var i;
            r.d(t, { Q: () => i }),
                (function (e) {
                    (e.FROM_ALBUM_COVER = 'from-album-cover'), (e.FROM_ARTIST_PHOTOS = 'from-artist-photos'), (e.PIC = 'pic'), (e.MOSAIC = 'mosaic');
                })(i || (i = {}));
        },
        96218: (e, t, r) => {
            r.d(t, { O: () => n, s: () => i });
            let i = 'yMusicStatePatchesUpdated',
                n = 'yMusicPageStatePatchesUpdated';
        },
        99703: (e, t, r) => {
            r.d(t, { $: () => n });
            var i = r(60754);
            let n = i.gK.model('Cover', { uri: i.gK.maybe(i.gK.string), color: i.gK.maybe(i.gK.string), videoUrl: i.gK.maybe(i.gK.string) });
        },
    },
]);
