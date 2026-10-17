(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4964],
    {
        12929: (e, t, s) => {
            'use strict';
            s.d(t, { Z: () => a, n: () => r });
            var a = (function (e) {
                    return ((e.REJECT = 'REJECT'), (e.UNSAFE = 'UNSAFE'), e);
                })({}),
                r = (function (e) {
                    return ((e.ALBUM = 'album'), (e.PODCAST = 'podcast'), (e.AUDIOBOOK = 'audiobook'), (e.ARTIST = 'artist'), (e.TRACK = 'track'), (e.CLIP = 'clip'), e);
                })({});
        },
        17197: (e, t, s) => {
            'use strict';
            s.d(t, { LabelPageStoreProvider: () => T });
            var a,
                r = s(80499),
                i = s(82706),
                l = s(28410),
                o = s(93690);
            !(function (e) {
                ((e.MUSICAL = 'musical'), (e.PUBLISHER = 'publisher'));
            })(a || (a = {}));
            var n = s(91201),
                c = s(55180),
                u = s(96692),
                d = s(69088),
                g = s(36159),
                p = s(25895),
                m = s(19835),
                I = s(95897),
                E = s(36786),
                y = s(31488),
                R = s(23218);
            let b = l.gK
                    .model('LabelAlbumsPage', { pagesLoader: (0, R.I)(c.J), errorStatusCode: l.gK.maybeNull(l.gK.number), sort: E.w })
                    .views((e) => ({
                        get isShimmerVisible() {
                            return !e.pagesLoader.pager && !e.pagesLoader.isInitialRequestRejected;
                        },
                        get isNeededToLoad() {
                            return e.pagesLoader.isNeedToMakeInitialRequest;
                        },
                        get isRejected() {
                            return e.pagesLoader.isInitialRequestRejected;
                        },
                        get isEmpty() {
                            return e.pagesLoader.isEmpty;
                        },
                        get isResolved() {
                            return e.pagesLoader.isSomePageResolved;
                        },
                        get requestsCount() {
                            return e.pagesLoader.requestsCount;
                        },
                        get totalCount() {
                            var t, s;
                            return null != (s = null == (t = e.pagesLoader.pager) ? void 0 : t.total) ? s : 0;
                        },
                        get items() {
                            var a;
                            return null != (a = e.pagesLoader.items) ? a : [];
                        },
                        get isNotFound() {
                            return e.pagesLoader.isInitialRequestRejected && e.errorStatusCode === o.X1.NOT_FOUND;
                        },
                    }))
                    .actions((e) => ({
                        getData: (0, l.L3)(function* (t) {
                            let { labelId: s, page: a = 0, pageSize: r = 20, preloadedAlbums: i, sortBy: c } = t,
                                { labelsResource: u, modelActionsLogger: d } = (0, l._$)(e);
                            if (e.pagesLoader.isPageNeedToLoad(a))
                                try {
                                    e.pagesLoader.setPageState(a, g.G.PENDING);
                                    let t = i;
                                    t || (t = yield u.getAlbums({ labelId: s, page: a, pageSize: r, sortBy: c }));
                                    let l = t.albums.map(n.p);
                                    e.pagesLoader.setItems(l, { page: a, pager: t.pager });
                                } catch (t) {
                                    (d.error(t),
                                        t instanceof o.GX && t.statusCode === o.X1.NOT_FOUND && (e.errorStatusCode = o.X1.NOT_FOUND),
                                        e.pagesLoader.setItems(null, { responseStatus: y.F.ERROR, page: a }));
                                }
                        }),
                        reset() {
                            (e.pagesLoader.reset(), (e.errorStatusCode = null));
                        },
                    })),
                _ = l.gK
                    .model('LabelArtistsPage', { pagesLoader: (0, R.I)(d.P), errorStatusCode: l.gK.maybeNull(l.gK.number) })
                    .views((e) => ({
                        get isShimmerVisible() {
                            return !e.pagesLoader.pager && !e.pagesLoader.isInitialRequestRejected;
                        },
                        get isNeededToLoad() {
                            return e.pagesLoader.isNeedToMakeInitialRequest;
                        },
                        get isRejected() {
                            return e.pagesLoader.isInitialRequestRejected;
                        },
                        get isEmpty() {
                            return e.pagesLoader.isEmpty;
                        },
                        get isResolved() {
                            return e.pagesLoader.isSomePageResolved;
                        },
                        get requestsCount() {
                            return e.pagesLoader.requestsCount;
                        },
                        get totalCount() {
                            var t, s;
                            return null != (s = null == (t = e.pagesLoader.pager) ? void 0 : t.total) ? s : 0;
                        },
                        get items() {
                            var a;
                            return null != (a = e.pagesLoader.items) ? a : [];
                        },
                        get isNotFound() {
                            return e.pagesLoader.isInitialRequestRejected && e.errorStatusCode === o.X1.NOT_FOUND;
                        },
                    }))
                    .actions((e) => ({
                        getData: (0, l.L3)(function* (t) {
                            let { labelId: s, page: a = 0, pageSize: r = 20, preloadedArtists: i } = t,
                                { labelsResource: n, modelActionsLogger: c } = (0, l._$)(e);
                            if (e.pagesLoader.isPageNeedToLoad(a))
                                try {
                                    e.pagesLoader.setPageState(a, g.G.PENDING);
                                    let t = i;
                                    t || (t = yield n.getArtists({ labelId: s, page: a, pageSize: r }));
                                    let l = t.artists.map(u.d);
                                    e.pagesLoader.setItems(l, { page: a, pager: t.pager });
                                } catch (t) {
                                    (c.error(t),
                                        t instanceof o.GX && t.statusCode === o.X1.NOT_FOUND && (e.errorStatusCode = o.X1.NOT_FOUND),
                                        e.pagesLoader.setItems(null, { responseStatus: y.F.ERROR, page: a }));
                                }
                        }),
                        reset() {
                            (e.pagesLoader.reset(), (e.errorStatusCode = null));
                        },
                    })),
                S = l.gK
                    .compose(
                        l.gK.model('LabelPage', {
                            id: l.gK.maybeNull(l.gK.string),
                            name: l.gK.maybeNull(l.gK.string),
                            type: l.gK.maybeNull(l.gK.string),
                            albums: l.gK.maybeNull(l.gK.array(c.J)),
                            albumsSubpage: b,
                            artistsSubpage: _,
                            artists: l.gK.maybeNull(l.gK.array(d.P)),
                            errorStatusCode: l.gK.maybeNull(l.gK.number),
                        }),
                        I.p,
                        m.X,
                    )
                    .views((e) => {
                        let t = {
                            get isLoading() {
                                return e.isNeededToLoad || e.loadingState === g.G.PENDING;
                            },
                            get hasAlbums() {
                                return !!(t.isLoading || (e.albums && e.albums.length > 0));
                            },
                            get hasArtists() {
                                if (t.isPublisher) return !1;
                                return !!(t.isLoading || (e.artists && e.artists.length > 0));
                            },
                            get isNotFound() {
                                let s = e.isResolved && !e.name && !t.hasAlbums && !t.hasArtists,
                                    a = e.errorStatusCode && [o.X1.NOT_FOUND, o.X1.BAD_REQUEST].includes(e.errorStatusCode);
                                return (e.isRejected && a) || s;
                            },
                            get albumsUrl() {
                                if (!e.id) return '';
                                let { href: t } = (0, p.u)('/label/:labelId/albums', { params: { labelId: e.id } });
                                return t;
                            },
                            get artistsUrl() {
                                if (!e.id) return '';
                                let { href: t } = (0, p.u)('/label/:labelId/artists', { params: { labelId: e.id } });
                                return t;
                            },
                            get isPublisher() {
                                return e.type === a.PUBLISHER;
                            },
                            get isMusical() {
                                return e.type === a.MUSICAL;
                            },
                        };
                        return t;
                    })
                    .actions((e) => {
                        let t = {
                            getAlbums: (0, l.L3)(function* (t) {
                                let { labelsResource: s, modelActionsLogger: a } = (0, l._$)(e);
                                try {
                                    let a = yield s.getAlbums(t);
                                    e.albums = (0, l.wg)(a.albums.map(n.p));
                                } catch (t) {
                                    (a.error(t), t instanceof o.GX && [o.X1.BAD_REQUEST, o.X1.NOT_FOUND].includes(t.statusCode) && (e.errorStatusCode = o.X1.NOT_FOUND));
                                }
                            }),
                            getArtists: (0, l.L3)(function* (t) {
                                let { labelsResource: s, modelActionsLogger: a } = (0, l._$)(e);
                                try {
                                    let a = yield s.getArtists(t);
                                    e.artists = (0, l.wg)(a.artists.map(u.d));
                                } catch (t) {
                                    (a.error(t), t instanceof o.GX && [o.X1.BAD_REQUEST, o.X1.NOT_FOUND].includes(t.statusCode) && (e.errorStatusCode = o.X1.NOT_FOUND));
                                }
                            }),
                            getData: (0, l.L3)(function* (s) {
                                let { labelId: a, preloadedLabel: r, withLabelEntities: i = !0 } = s,
                                    { labelsResource: n, modelActionsLogger: c } = (0, l._$)(e);
                                if (e.loadingState !== g.G.PENDING)
                                    try {
                                        e.loadingState = g.G.PENDING;
                                        let s = r;
                                        (s || (s = yield n.getData({ labelId: a })),
                                            (e.id = String(s.id)),
                                            (e.name = s.name),
                                            (e.type = s.type),
                                            i && (yield t.getAlbums({ labelId: a, pageSize: 8 }), yield t.getArtists({ labelId: a, pageSize: 8 })),
                                            (e.loadingState = g.G.RESOLVE));
                                    } catch (t) {
                                        (c.error(t),
                                            t instanceof o.GX && [o.X1.BAD_REQUEST, o.X1.NOT_FOUND].includes(t.statusCode) && (e.errorStatusCode = t.statusCode),
                                            e.loadingState !== g.G.IDLE && (e.loadingState = g.G.REJECT));
                                    }
                            }),
                            reset() {
                                ((e.loadingState = g.G.IDLE),
                                    (e.id = null),
                                    (e.name = null),
                                    (e.type = null),
                                    (e.errorStatusCode = null),
                                    e.destroyItems([e.albums, e.artists]));
                            },
                        };
                        return t;
                    }),
                f = { loadingState: g.G.IDLE, albumsSubpage: { pagesLoader: {}, sort: {} }, artistsSubpage: { pagesLoader: {} } },
                { pageStoreProvider: L } = (0, r.W)({ createStore: (e) => S.create(f, e), patchKey: i.n.LABEL }),
                T = L;
        },
        23218: (e, t, s) => {
            'use strict';
            s.d(t, { I: () => c });
            var a = s(28410),
                r = s(31488),
                i = s(36159),
                l = s(82745),
                o = s(95897),
                n = s(57483);
            function c(e, t) {
                let { useAppendMode: s = !1 } = null != t ? t : {};
                return a.gK
                    .compose(
                        a.gK.model('PageLoader', {
                            items: a.gK.maybeNull(a.gK.array(a.gK.maybeNull(e))),
                            requestsCount: a.gK.optional(a.gK.number, 0),
                            initialRequestLoadingState: a.gK.optional(a.gK.enumeration(Object.values(i.G)), i.G.IDLE),
                            lastRejectedPagesList: a.gK.optional(a.gK.array(a.gK.number), []),
                            pager: a.gK.maybeNull(n.j),
                            pageStates: a.gK.maybeNull(a.gK.array(a.gK.enumeration(Object.values(i.G)))),
                        }),
                        o.p,
                    )
                    .views((e) => {
                        let t = {
                            isPageNeedToLoad: (t) => {
                                var s;
                                return null == (s = e.pageStates) || !s[t] || e.pageStates[t] === i.G.IDLE;
                            },
                            get isSomePageResolved() {
                                var a;
                                return !!((null == (a = e.pageStates) ? void 0 : a.length) && e.pageStates.some((e) => e === i.G.RESOLVE));
                            },
                            get isEmpty() {
                                var r;
                                return t.isSomePageResolved && !(null == (r = e.items) ? void 0 : r.length);
                            },
                            get isNeedToMakeInitialRequest() {
                                return e.initialRequestLoadingState === i.G.IDLE;
                            },
                            get isInitialRequestRejected() {
                                return e.initialRequestLoadingState === i.G.REJECT;
                            },
                            get hasMorePages() {
                                var l;
                                return !!s && !(null == (l = e.pager) ? void 0 : l.lastPage);
                            },
                            get rejectedPagesCount() {
                                var o;
                                if (t.isInitialRequestRejected || !(null == (o = e.pageStates) ? void 0 : o.length)) return 0;
                                return e.pageStates.filter((e) => e === i.G.REJECT).length;
                            },
                        };
                        return t;
                    })
                    .actions((e) => {
                        let t = {
                            setPageState: (a, r) => {
                                let l;
                                if (([i.G.IDLE, i.G.PENDING].includes(e.initialRequestLoadingState) && (e.initialRequestLoadingState = r), s)) l = a + 1;
                                else {
                                    var o, n, c, u;
                                    l = Math.ceil(
                                        (null != (c = null == (o = e.pager) ? void 0 : o.total) ? c : 0) /
                                            (null != (u = null == (n = e.pager) ? void 0 : n.perPage) ? u : 1),
                                    );
                                }
                                let d = Math.max(a + 1, l);
                                (t.ensurePageStatesInitialized(d), e.pageStates && (e.pageStates[a] = r), r === i.G.REJECT && t.addLastRejectedPageToList(a));
                            },
                            setItems: (o, n) => {
                                var c;
                                let { page: u, pager: d, responseStatus: g } = n;
                                if (((e.requestsCount = (null != (c = e.requestsCount) ? c : 0) + 1), g === r.F.ERROR || !o || !d))
                                    return void t.setPageState(u, i.G.REJECT);
                                (e.pager
                                    ? s && ((e.pager.lastPage = d.lastPage), (e.pager.perPage = d.perPage))
                                    : (e.pager = { page: d.page, perPage: d.perPage, total: d.total, lastPage: d.lastPage }),
                                    t.setPageState(u, i.G.RESOLVE),
                                    (e.pager.page = u),
                                    s
                                        ? (e.items || (e.items = (0, a.wg)([])), e.items && e.items.push(...o))
                                        : (e.items || (e.items = (0, a.wg)(Array.from({ length: e.pager.total }, () => null))),
                                          e.items && (0, l.I)({ items: e.items, mappedRawItems: o, page: u, pageSize: e.pager.perPage })));
                            },
                            resetRejectedPagesState() {
                                var t, s, a;
                                for (let r = 0; r < (null != (s = null == (t = e.pageStates) ? void 0 : t.length) ? s : 0); r++)
                                    (null == (a = e.pageStates) ? void 0 : a[r]) === i.G.REJECT && (e.pageStates[r] = i.G.IDLE);
                            },
                            addLastRejectedPageToList(t) {
                                var s, a, r;
                                for (e.lastRejectedPagesList.push(t); (null != (a = null == (s = e.lastRejectedPagesList) ? void 0 : s.length) ? a : 0) > 5;)
                                    null == (r = e.lastRejectedPagesList) || r.shift();
                            },
                            ensurePageStatesInitialized(t) {
                                if (t <= 0) return;
                                if (!e.pageStates) {
                                    let s = Array.from({ length: t }, () => i.G.IDLE);
                                    e.pageStates = (0, a.wg)(s);
                                    return;
                                }
                                let s = e.pageStates.length;
                                if (t > s) {
                                    let a = Array.from({ length: t - s }, () => i.G.IDLE);
                                    e.pageStates.push(...a);
                                }
                            },
                            reset() {
                                ((e.initialRequestLoadingState = i.G.IDLE),
                                    (e.requestsCount = 0),
                                    (e.lastRejectedPagesList = (0, a.wg)([])),
                                    e.destroyItems([e.items, e.pager, e.pageStates]));
                            },
                        };
                        return t;
                    });
            }
        },
        25895: (e, t, s) => {
            'use strict';
            (s.d(t, { u: () => c }), s(93588));
            var a = s(89288),
                r = s(74310),
                i = s(38097);
            let l = (e) => {
                    var t;
                    if (!e) return e;
                    let s = (null != (t = e.split('?')[0]) ? t : '').split('/').filter(Boolean);
                    for (let e of Object.keys(r.j)) {
                        let t = e.split('/').filter(Boolean);
                        if (s.length !== t.length) continue;
                        let a = !0;
                        for (let e = 0; e < t.length; e++) {
                            let r = t[e],
                                i = s[e];
                            if (r && !r.startsWith(':') && r !== i) {
                                a = !1;
                                break;
                            }
                        }
                        if (a) return e;
                    }
                    return e;
                },
                o = (e) => {
                    let t = [],
                        s = e.split('/').filter(Boolean),
                        a = [];
                    for (let e of s) e.startsWith(':') ? t.push(e.substring(1)) : a.push(e);
                    let r = '/'.concat(a.join('/'));
                    if (0 === t.length) return e;
                    let i = t.map((e) => ''.concat(e, '=:').concat(e)).join('&');
                    return ''.concat(r, '?').concat(i);
                },
                n = (e) =>
                    e
                        .split('/')
                        .filter(Boolean)
                        .filter((e) => e.startsWith(':'))
                        .map((e) => e.substring(1)),
                c = function (e) {
                    for (var t, s = arguments.length, c = Array(s > 1 ? s - 1 : 0), u = 1; u < s; u++) c[u - 1] = arguments[u];
                    let [d] = c,
                        g = e.includes(':'),
                        p = e.includes('?'),
                        m = 'string' == typeof e ? e : String(e);
                    if (
                        (m.includes(i.nl) && (d = { ...d, options: { ...(null == d ? void 0 : d.options), isExternalLink: !0 } }),
                        p &&
                            ((e) => {
                                let [t, s] = e.split('?'),
                                    a = new URLSearchParams(s);
                                return Object.keys(r.j).some((e) => {
                                    let s = n(e);
                                    return 0 !== s.length && o(e).split('?')[0] === t && s.every((e) => a.has(e));
                                });
                            })(m))
                    )
                        return (0, a.no)(m, d);
                    if (p && !g) {
                        let e = l(m),
                            s = n(e);
                        if (s.length > 0) {
                            let r = ((e, t) => {
                                    var s;
                                    let a = (null != (s = e.split('?')[0]) ? s : '').split('/').filter(Boolean);
                                    return t
                                        .split('/')
                                        .filter(Boolean)
                                        .reduce((e, t, s) => {
                                            let r = a[s];
                                            return (t.startsWith(':') && r && (e[t.substring(1)] = r), e);
                                        }, {});
                                })(m, e),
                                i = {
                                    ...((e, t) => {
                                        let s = e.split('?')[1];
                                        if (!s) return {};
                                        let a = new Set(t),
                                            r = {};
                                        return (
                                            new URLSearchParams(s).forEach((e, t) => {
                                                a.has(t) || (r[t] = e);
                                            }),
                                            r
                                        );
                                    })(m, s),
                                    ...(null != (t = null == d ? void 0 : d.query) ? t : {}),
                                },
                                l = o(e);
                            return (0, a.no)(l, { ...d, params: r, query: i });
                        }
                    }
                    if (g || p) {
                        let e = o(m);
                        return (0, a.no)(e, d);
                    }
                    let I = l(m),
                        E = (function (e, t) {
                            let [s, a] = e.split('?'),
                                r = null == s ? void 0 : s.split('/').filter(Boolean),
                                i = {},
                                l = t.split('/').filter(Boolean);
                            if ((null == r ? void 0 : r.length) !== l.length || (l[0] && !e.startsWith('/'.concat(l[0])))) return i;
                            for (let e = 0; e < l.length; e++) {
                                let t = l[e],
                                    s = r && r[e];
                                (null == t ? void 0 : t.startsWith(':')) && s && (i[t.substring(1)] = s);
                            }
                            return (
                                a &&
                                    a.split('&').map((e) => {
                                        let [t, s] = e.split('=');
                                        t && void 0 !== s && (i[t] = s);
                                    }),
                                i
                            );
                        })(m, I),
                        y = o(I);
                    return (0, a.no)(y, { ...d, params: E });
                };
        },
        27912: (e, t, s) => {
            'use strict';
            s.d(t, { t: () => a });
            let a = {
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
        27954: (e, t, s) => {
            'use strict';
            s.d(t, { P: () => i, g: () => l });
            var a = s(74631),
                r = s(36432);
            let i = (0, a.createContext)(null);
            function l() {
                let e = (0, a.useContext)(i);
                if (null === e) throw new r.t('Store cannot be null, please add a context provider', { code: 'E_CONTEXT_STORE_NULL' });
                return e;
            }
        },
        31488: (e, t, s) => {
            'use strict';
            s.d(t, { F: () => a });
            var a = (function (e) {
                return ((e.OK = 'ok'), (e.ERROR = 'error'), e);
            })({});
        },
        31860: (e, t, s) => {
            'use strict';
            var a;
            (s.d(t, { f: () => a }),
                (function (e) {
                    ((e.OK = 'ok'), (e.ERROR = 'error'));
                })(a || (a = {})));
        },
        36159: (e, t, s) => {
            'use strict';
            s.d(t, { G: () => a });
            var a = (function (e) {
                return ((e.IDLE = 'IDLE'), (e.PENDING = 'PENDING'), (e.RESOLVE = 'RESOLVE'), (e.REJECT = 'REJECT'), e);
            })({});
        },
        36484: (e, t, s) => {
            'use strict';
            s.d(t, {
                $$: () => el,
                $5: () => eu,
                $8: () => N,
                $I: () => p,
                $Y: () => eC,
                A4: () => d,
                CN: () => et,
                CR: () => g,
                DP: () => h,
                DT: () => eh,
                DV: () => eg,
                E: () => b,
                EN: () => a,
                Ez: () => ec,
                GV: () => S,
                Hm: () => l,
                JM: () => er,
                K1: () => q,
                LC: () => ey,
                Lb: () => y,
                Lk: () => ei,
                N1: () => ep,
                NN: () => U,
                O9: () => $,
                OP: () => u,
                Oo: () => A,
                P0: () => T,
                P1: () => es,
                PL: () => eT,
                QG: () => K,
                RG: () => eO,
                SX: () => eR,
                TD: () => eE,
                TK: () => i,
                Tq: () => eN,
                U2: () => P,
                UB: () => ek,
                Ut: () => F,
                V3: () => I,
                V4: () => f,
                VR: () => e$,
                W5: () => e_,
                WA: () => H,
                X4: () => O,
                X8: () => w,
                Xc: () => Q,
                Zf: () => r,
                Zi: () => ev,
                Zl: () => ee,
                _1: () => m,
                aE: () => V,
                by: () => ef,
                c9: () => J,
                cZ: () => Z,
                dA: () => eA,
                dh: () => eb,
                en: () => Y,
                eu: () => X,
                ff: () => em,
                gd: () => en,
                gu: () => o,
                jQ: () => z,
                ki: () => W,
                mr: () => c,
                nM: () => B,
                ni: () => eK,
                ok: () => M,
                oo: () => v,
                qN: () => j,
                qT: () => ed,
                qt: () => _,
                re: () => ea,
                ro: () => x,
                s_: () => eL,
                sv: () => eo,
                tz: () => R,
                u2: () => eI,
                uM: () => eS,
                vH: () => C,
                vg: () => eP,
                wH: () => D,
                wK: () => E,
                xF: () => L,
                y$: () => n,
                yq: () => G,
                zj: () => k,
            });
            let a = 'AfterTrackResource',
                r = 'Logger',
                i = 'ModelActionsLogger',
                l = 'HttpClient',
                o = 'HttpBeaconClient',
                n = 'Slam',
                c = 'UgcUploadHttpClient',
                u = 'BaseResourceHttpClient',
                d = 'ResourceHttpClient',
                g = 'ResourceBeaconClient',
                p = 'AccountResource',
                m = 'UsersResource',
                I = 'LandingResource',
                E = 'LandingBlocksResource',
                y = 'Landing3Resource',
                R = 'AlbumResource',
                b = 'SlidesResource',
                _ = 'MusicExternalApiPrefixUrl',
                S = 'MusicResourceFactory',
                f = 'PublicConfig',
                L = 'ServerConfig',
                T = 'TokenConfig',
                v = 'Storage',
                h = 'CookieStorage',
                P = 'LocalStorage',
                N = 'LibraryResource',
                k = 'LumenResource',
                A = 'TracksResource',
                C = 'SessionStorage',
                O = 'TopResource',
                $ = 'ArtistsResource',
                K = 'Authorization',
                D = 'RedAlertResource',
                M = 'RotorResource',
                w = 'WaveResource',
                G = 'SearchResource',
                U = 'SearchPlaylistResource',
                j = 'PlaylistResource',
                x = 'PlaylistsResource',
                B = 'PinResource',
                F = 'MetatagsResource',
                q = 'TagResource',
                X = 'FeedResource',
                H = 'CONTAINER_USER_ID_TOKEN',
                V = 'PinsResource',
                W = 'MusicHistoryResource',
                Y = 'ChartResource',
                z = 'ClipsResource',
                J = 'DynamicPagesResource',
                Q = 'CONTAINER_I18N_STORAGE',
                Z = 'LyricViewsResource',
                ee = 'NonMusicResource',
                et = 'DonationResource',
                es = 'LoaderResource',
                ea = 'PrefixlessResource',
                er = 'StreamsResource',
                ei = 'FiltersResource',
                el = 'UgcResource',
                eo = 'CollectionResource',
                en = 'AdsResource',
                ec = 'PersonalResource',
                eu = 'AvailabilityResource',
                ed = 'GetFileInfoResource',
                eg = 'ResourcesFileInfoResource',
                ep = 'DisclaimersResource',
                em = 'DisclaimerDictionary',
                eI = 'FamilyResource',
                eE = 'ChildrenLandingResource',
                ey = 'TelemetryResource',
                eR = 'Env',
                eb = 'PromoResource',
                e_ = 'RumResource',
                eS = 'AcqOffers',
                ef = 'Ynison',
                eL = 'YnisonNewConnector',
                eT = 'LabelsResource',
                ev = 'RequestExecutionContext',
                eh = 'ConcertsResource',
                eP = 'YaMetrikaController',
                eN = 'RumTransport',
                ek = 'YaMetrikaTransport',
                eA = 'WordsResource',
                eC = 'WheelResource',
                eO = 'MocksInitializer',
                e$ = 'NetworkMonitorFactory',
                eK = 'SkeletonSdk';
        },
        36786: (e, t, s) => {
            'use strict';
            s.d(t, { w: () => l });
            var a = s(28410),
                r = s(78111),
                i = s(99670);
            let l = a.gK
                .model('Sort', { sortBy: a.gK.maybe(a.gK.enumeration(Object.values(r.g))), sortOrder: a.gK.maybe(a.gK.enumeration(Object.values(i.x))) })
                .actions((e) => ({
                    setSortBy(t) {
                        e.sortBy = t;
                    },
                    setSortOrder(t) {
                        e.sortOrder = t;
                    },
                }));
        },
        38097: (e, t, s) => {
            'use strict';
            s.d(t, { k7: () => a, nl: () => r });
            let a = 1e3,
                r = 'https://';
        },
        39528: (e, t, s) => {
            'use strict';
            s.d(t, { R: () => r });
            var a = s(25895);
            let r = (e) => (0, a.u)('/artist/:artistId', { params: { artistId: e } });
        },
        55180: (e, t, s) => {
            'use strict';
            s.d(t, { J: () => o });
            var a = s(28410),
                r = s(66730),
                i = s(69088),
                l = s(69432);
            let o = r.G.props({ artists: a.gK.maybe(a.gK.array(i.P)), chart: a.gK.maybe(l.I) }).views((e) => ({
                get artistNames() {
                    var t;
                    return null == (t = e.artists) ? void 0 : t.map((e) => e.name).join(', ');
                },
                get artistName() {
                    var s, a, r, i;
                    if (null == (a = e.artists) || null == (s = a[0]) ? void 0 : s.various) return;
                    return null == (i = e.artists) || null == (r = i[0]) ? void 0 : r.name;
                },
                get artistIds() {
                    var l;
                    return null == (l = e.artists) ? void 0 : l.map((e) => e.id);
                },
                get artistId() {
                    var o, n;
                    return null == (n = e.artists) || null == (o = n[0]) ? void 0 : o.id;
                },
            }));
        },
        56629: (e, t, s) => {
            'use strict';
            var a;
            (s.d(t, { _: () => a }),
                (function (e) {
                    ((e.UP = 'up'), (e.DOWN = 'down'), (e.SAME = 'same'), (e.NEW = 'new'));
                })(a || (a = {})));
        },
        56829: (e, t, s) => {
            'use strict';
            var a;
            (s.d(t, { _: () => a }),
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
                })(a || (a = {})));
        },
        57483: (e, t, s) => {
            'use strict';
            s.d(t, { j: () => r });
            var a = s(28410);
            let r = a.gK.model('Pager', { page: a.gK.number, perPage: a.gK.number, total: a.gK.number, lastPage: a.gK.maybe(a.gK.boolean) });
        },
        62562: (e, t, s) => {
            'use strict';
            s.d(t, { B: () => i, N: () => l });
            var a = s(74631),
                r = s(36432);
            let i = (0, a.createContext)(null);
            function l() {
                let e = (0, a.useContext)(i);
                if (null === e) throw new r.t('Container cannot be null, please add a context provider', { code: 'E_CONTEXT_CONTAINER_NULL' });
                return e;
            }
        },
        73544: (e, t, s) => {
            'use strict';
            s.d(t, { e: () => a });
            let a = (e) => ({ uri: e.uri, color: e.color });
        },
        73693: (e, t, s) => {
            Promise.resolve().then(s.bind(s, 17197));
        },
        74310: (e, t, s) => {
            'use strict';
            s.d(t, { b: () => a, j: () => r });
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
                r = {
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
        75501: (e, t, s) => {
            'use strict';
            var a;
            (s.d(t, { S: () => a }),
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
                })(a || (a = {})));
        },
        78111: (e, t, s) => {
            'use strict';
            var a;
            (s.d(t, { g: () => a }),
                (function (e) {
                    ((e.RATING = 'rating'), (e.YEAR = 'year'));
                })(a || (a = {})));
        },
        80499: (e, t, s) => {
            'use strict';
            s.d(t, { W: () => E, s: () => y });
            var a = s(25839),
                r = s(88204),
                i = s(84059),
                l = s(74631),
                o = s(89288),
                n = s(36432),
                c = s(94421),
                u = s(99989),
                d = s(27954),
                g = s(83382);
            (0, r.eO)(!1);
            let p = (0, l.createContext)(null),
                m = (e) => {
                    let { children: t, store: s, storeKey: r } = e,
                        i = (0, l.useMemo)(() => ({ store: s, storeKey: r }), [s, r]);
                    return (0, a.jsx)(p.Provider, { value: i, children: t });
                },
                I = (e) => {
                    let { nonce: t, patchKey: s, patchesRef: r } = e;
                    return (
                        (0, i.useServerInsertedHTML)(() => {
                            let e = r.current;
                            return ((r.current = []), 0 === e.length)
                                ? null
                                : (0, a.jsx)('script', {
                                      dangerouslySetInnerHTML: {
                                          __html: ((e, t) =>
                                              "\n        window.__PAGE_STATE_PATCHES__ = window.__PAGE_STATE_PATCHES__ || {};\n        window.__PAGE_STATE_PATCHES__['"
                                                  .concat(e, "'] =\n            window.__PAGE_STATE_PATCHES__['")
                                                  .concat(e, "'] || [];\n        window.__PAGE_STATE_PATCHES__['")
                                                  .concat(e, "'].push(")
                                                  .concat((0, o.Gr)(t), ");\n        window.dispatchEvent(new Event('")
                                                  .concat(c.O, "'));\n    "))(s, e),
                                      },
                                      nonce: null != t ? t : void 0,
                                  });
                        }),
                        null
                    );
                },
                E = (e) => {
                    let { createStore: t, patchKey: s } = e,
                        r = () => {
                            var e, t;
                            let a = null != (t = null == (e = window.__PAGE_STATE_PATCHES__) ? void 0 : e[s]) ? t : [];
                            return (window.__PAGE_STATE_PATCHES__ && delete window.__PAGE_STATE_PATCHES__[s], a);
                        };
                    return {
                        pageStoreProvider: (e) => {
                            let { children: i, nonce: l } = e,
                                o = (0, g.Y)(),
                                n = (0, d.g)(),
                                { store: p, patchesRef: E } = (0, u.m)({
                                    createStore: () => t({ ...o, rootStore: n }),
                                    getPendingPatchBatches: r,
                                    patchesUpdatedEventName: c.O,
                                });
                            return (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)(I, { nonce: l, patchKey: s, patchesRef: E }), (0, a.jsx)(m, { store: p, storeKey: s, children: i })],
                            });
                        },
                    };
                };
            function y(e) {
                let { throwOnAbsence: t = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    s = (0, l.useContext)(p);
                if (!s || s.storeKey !== e) {
                    var a;
                    if (!t) return null;
                    throw new n.t('Page store context is missing or has unexpected key', {
                        code: 'E_CONTEXT_PAGE_STORE_NULL',
                        data: { actualStoreKey: null != (a = null == s ? void 0 : s.storeKey) ? a : 'null', expectedStoreKey: e },
                    });
                }
                return s.store;
            }
        },
        81024: (e, t, s) => {
            'use strict';
            s.d(t, { L: () => r });
            var a = s(25895);
            let r = (e) => (0, a.u)('/album/:albumId', { params: { albumId: e } });
        },
        82706: (e, t, s) => {
            'use strict';
            s.d(t, { n: () => a });
            let a = {
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
        82745: (e, t, s) => {
            'use strict';
            function a(e) {
                let { items: t, mappedRawItems: s, page: a, pageSize: r } = e,
                    i = a * r,
                    l = 0;
                for (let e = i; e < i + r; e++) (s[l] && (t[e] = s[l]), l++);
            }
            s.d(t, { I: () => a });
        },
        84e3: (e, t, s) => {
            'use strict';
            s.d(t, { U: () => i });
            var a = s(36484),
                r = s(62562);
            let i = () => (0, r.N)().get(a.Zf);
        },
        91201: (e, t, s) => {
            'use strict';
            s.d(t, { p: () => l });
            var a = s(28410),
                r = s(83772),
                i = s(45337);
            let l = (e) => {
                let t = ((e) => ({ ...(0, r.f)(e), artists: e.artists.map(i.G) }))(e);
                return (0, a.wg)(t);
            };
        },
        93588: (e, t, s) => {
            'use strict';
            s.d(t, { sK: () => _, NN: () => r, R8: () => i, $3: () => a, CP: () => d, tE: () => g, Ef: () => p, $5: () => I, IU: () => S, tk: () => E.t, u0: () => b });
            let a = !1,
                r = !0,
                i = !1;
            var l = s(58025),
                o = s(36432);
            class n extends o.t {
                constructor(e = 'Internal error', { code: t = 'E_CONFIG', ...s } = {}) {
                    (super(e, { code: t, ...s }), (0, l._)(this, 'name', 'ConfigException'), Object.setPrototypeOf(this, n.prototype));
                }
            }
            class c extends n {
                constructor(e) {
                    (super('The configuration file for environment "'.concat(e, '" does not exist.'), { code: 'E_CONFIG_FILE_NOT_FOUND' }),
                        (0, l._)(this, 'name', 'NotFoundConfigException'),
                        Object.setPrototypeOf(this, c.prototype));
                }
            }
            let u = (function (e) {
                    let { manifest: t, getConfig: s } = e,
                        a = new Map();
                    return (e) => {
                        let r = a.get(e);
                        if (r) return r;
                        if (!Object.hasOwn(t, e)) return Promise.reject(new c(e));
                        let i = t[e]().then(s);
                        return (a.set(e, i), i);
                    };
                })({
                    manifest: {
                        development: () => Promise.all([s.e(546), s.e(260), s.e(2917), s.e(4903), s.e(1198), s.e(6214)]).then(s.bind(s, 66214)),
                        qa: () => Promise.all([s.e(546), s.e(260), s.e(2917), s.e(4903), s.e(1198), s.e(7216)]).then(s.bind(s, 7216)),
                        stress: () => Promise.all([s.e(546), s.e(260), s.e(2917), s.e(4903), s.e(1198), s.e(2967)]).then(s.bind(s, 5348)),
                        production: () => Promise.all([s.e(546), s.e(260), s.e(2917), s.e(4903), s.e(1198), s.e(4069)]).then(s.bind(s, 74069)),
                    },
                    getConfig: (e) => {
                        let { config: t } = e;
                        return t;
                    },
                }),
                d = (e, t) => ''.concat(e, '/').concat(t || '1.0.0'),
                g = (e, t) => (t ? e.afisha.clientId[t] : e.afisha.clientId.web);
            function p(e, t) {
                return t ? e.player.secretKey[t] : '';
            }
            var m = s(49124);
            let I = () => {
                let e = 'window.location.pathname',
                    t = m.env.APP_VERSION || '',
                    s = 'production';
                return {
                    rumSettings: {
                        rumId: 'ru.music.frontend.desktop',
                        project: 'music.frontend.desktop',
                        service: 'frontend-desktop',
                        platform: 'desktop',
                        page: e,
                        heroElement: 'body',
                        version: t,
                        environment: s,
                    },
                    errorBooster: {
                        project: 'music.frontend.desktop',
                        platform: 'desktop',
                        page: e,
                        version: t,
                        environment: s,
                        unhandledRejection: !0,
                        uncaughtException: !0,
                        resourceFails: !0,
                    },
                };
            };
            var E = s(27912),
                y = s(90887),
                R = s(52830);
            let b = (e, t, s) => {
                let { allowCustomPrefixUrl: a, prefixUrl: r } = e.resources.musicExternalApi,
                    i = a && 'string' == typeof s && s.length > 0 ? s : r;
                return (0, y.r)(i, t, R.B);
            };
            var _ = (function (e) {
                return ((e.WEB = 'YandexMusicWebNext'), (e.DESKTOP = 'YandexMusicDesktopApp'), e);
            })({});
            let S = async (e) => ({ env: e, publicConfig: await u(e) });
        },
        95897: (e, t, s) => {
            'use strict';
            s.d(t, { p: () => r });
            var a = s(28410);
            let r = a.gK.model('ModelDestroyManager').actions(() => ({
                destroyItems(e) {
                    (e.forEach((e) => {
                        e && (0, a.Yo)(e);
                    }),
                        queueMicrotask(() => {
                            e.forEach((e) => {
                                e && (0, a.zr)(e);
                            });
                        }));
                },
            }));
        },
        96692: (e, t, s) => {
            'use strict';
            s.d(t, { d: () => i });
            var a = s(28410),
                r = s(45337);
            let i = (e) => {
                let t = (0, r.G)(e);
                return (0, a.wg)(t);
            };
        },
        98436: (e, t, s) => {
            'use strict';
            var a;
            (s.d(t, { _: () => a }),
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
                })(a || (a = {})));
        },
        99670: (e, t, s) => {
            'use strict';
            var a;
            (s.d(t, { x: () => a }),
                (function (e) {
                    ((e.ASC = 'asc'), (e.DESC = 'desc'));
                })(a || (a = {})));
        },
    },
    (e) => {
        (e.O(0, [6706, 1311, 8398, 6702, 3771, 9333, 4475, 5056, 7358], () => e((e.s = 73693))), (_N_E = e.O()));
    },
]);
