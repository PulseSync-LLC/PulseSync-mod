(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4964],
    {
        12929: (e, t, s) => {
            'use strict';
            s.d(t, { Z: () => r, n: () => i });
            var r = (function (e) {
                    return ((e.REJECT = 'REJECT'), (e.UNSAFE = 'UNSAFE'), e);
                })({}),
                i = (function (e) {
                    return ((e.ALBUM = 'album'), (e.PODCAST = 'podcast'), (e.AUDIOBOOK = 'audiobook'), (e.ARTIST = 'artist'), (e.TRACK = 'track'), (e.CLIP = 'clip'), e);
                })({});
        },
        17197: (e, t, s) => {
            'use strict';
            s.d(t, { LabelPageStoreProvider: () => b });
            var r,
                i = s(80499),
                a = s(82706),
                o = s(28410),
                n = s(93690);
            !(function (e) {
                ((e.MUSICAL = 'musical'), (e.PUBLISHER = 'publisher'));
            })(r || (r = {}));
            var l = s(91201),
                c = s(55180),
                u = s(96692),
                d = s(69088),
                p = s(36159),
                g = s(25895),
                m = s(19835),
                f = s(95897),
                h = s(36786),
                E = s(31488),
                v = s(23218);
            let I = o.gK
                    .model('LabelAlbumsPage', { pagesLoader: (0, v.I)(c.J), errorStatusCode: o.gK.maybeNull(o.gK.number), sort: h.w })
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
                            var r;
                            return null != (r = e.pagesLoader.items) ? r : [];
                        },
                        get isNotFound() {
                            return e.pagesLoader.isInitialRequestRejected && e.errorStatusCode === n.X1.NOT_FOUND;
                        },
                    }))
                    .actions((e) => ({
                        getData: (0, o.L3)(function* (t) {
                            let { labelId: s, page: r = 0, pageSize: i = 20, preloadedAlbums: a, sortBy: c } = t,
                                { labelsResource: u, modelActionsLogger: d } = (0, o._$)(e);
                            if (e.pagesLoader.isPageNeedToLoad(r))
                                try {
                                    e.pagesLoader.setPageState(r, p.G.PENDING);
                                    let t = a;
                                    t || (t = yield u.getAlbums({ labelId: s, page: r, pageSize: i, sortBy: c }));
                                    let o = t.albums.map(l.p);
                                    e.pagesLoader.setItems(o, { page: r, pager: t.pager });
                                } catch (t) {
                                    (d.error(t),
                                        t instanceof n.GX && t.statusCode === n.X1.NOT_FOUND && (e.errorStatusCode = n.X1.NOT_FOUND),
                                        e.pagesLoader.setItems(null, { responseStatus: E.F.ERROR, page: r }));
                                }
                        }),
                        reset() {
                            (e.pagesLoader.reset(), (e.errorStatusCode = null));
                        },
                    })),
                y = o.gK
                    .model('LabelArtistsPage', { pagesLoader: (0, v.I)(d.P), errorStatusCode: o.gK.maybeNull(o.gK.number) })
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
                            var r;
                            return null != (r = e.pagesLoader.items) ? r : [];
                        },
                        get isNotFound() {
                            return e.pagesLoader.isInitialRequestRejected && e.errorStatusCode === n.X1.NOT_FOUND;
                        },
                    }))
                    .actions((e) => ({
                        getData: (0, o.L3)(function* (t) {
                            let { labelId: s, page: r = 0, pageSize: i = 20, preloadedArtists: a } = t,
                                { labelsResource: l, modelActionsLogger: c } = (0, o._$)(e);
                            if (e.pagesLoader.isPageNeedToLoad(r))
                                try {
                                    e.pagesLoader.setPageState(r, p.G.PENDING);
                                    let t = a;
                                    t || (t = yield l.getArtists({ labelId: s, page: r, pageSize: i }));
                                    let o = t.artists.map(u.d);
                                    e.pagesLoader.setItems(o, { page: r, pager: t.pager });
                                } catch (t) {
                                    (c.error(t),
                                        t instanceof n.GX && t.statusCode === n.X1.NOT_FOUND && (e.errorStatusCode = n.X1.NOT_FOUND),
                                        e.pagesLoader.setItems(null, { responseStatus: E.F.ERROR, page: r }));
                                }
                        }),
                        reset() {
                            (e.pagesLoader.reset(), (e.errorStatusCode = null));
                        },
                    })),
                R = o.gK
                    .compose(
                        o.gK.model('LabelPage', {
                            id: o.gK.maybeNull(o.gK.string),
                            name: o.gK.maybeNull(o.gK.string),
                            type: o.gK.maybeNull(o.gK.string),
                            albums: o.gK.maybeNull(o.gK.array(c.J)),
                            albumsSubpage: I,
                            artistsSubpage: y,
                            artists: o.gK.maybeNull(o.gK.array(d.P)),
                            errorStatusCode: o.gK.maybeNull(o.gK.number),
                        }),
                        f.p,
                        m.X,
                    )
                    .views((e) => {
                        let t = {
                            get isLoading() {
                                return e.isNeededToLoad || e.loadingState === p.G.PENDING;
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
                                    r = e.errorStatusCode && [n.X1.NOT_FOUND, n.X1.BAD_REQUEST].includes(e.errorStatusCode);
                                return (e.isRejected && r) || s;
                            },
                            get albumsUrl() {
                                if (!e.id) return '';
                                let { href: t } = (0, g.u)('/label/:labelId/albums', { params: { labelId: e.id } });
                                return t;
                            },
                            get artistsUrl() {
                                if (!e.id) return '';
                                let { href: t } = (0, g.u)('/label/:labelId/artists', { params: { labelId: e.id } });
                                return t;
                            },
                            get isPublisher() {
                                return e.type === r.PUBLISHER;
                            },
                            get isMusical() {
                                return e.type === r.MUSICAL;
                            },
                        };
                        return t;
                    })
                    .actions((e) => {
                        let t = {
                            getAlbums: (0, o.L3)(function* (t) {
                                let { labelsResource: s, modelActionsLogger: r } = (0, o._$)(e);
                                try {
                                    let r = yield s.getAlbums(t);
                                    e.albums = (0, o.wg)(r.albums.map(l.p));
                                } catch (t) {
                                    (r.error(t), t instanceof n.GX && [n.X1.BAD_REQUEST, n.X1.NOT_FOUND].includes(t.statusCode) && (e.errorStatusCode = n.X1.NOT_FOUND));
                                }
                            }),
                            getArtists: (0, o.L3)(function* (t) {
                                let { labelsResource: s, modelActionsLogger: r } = (0, o._$)(e);
                                try {
                                    let r = yield s.getArtists(t);
                                    e.artists = (0, o.wg)(r.artists.map(u.d));
                                } catch (t) {
                                    (r.error(t), t instanceof n.GX && [n.X1.BAD_REQUEST, n.X1.NOT_FOUND].includes(t.statusCode) && (e.errorStatusCode = n.X1.NOT_FOUND));
                                }
                            }),
                            getData: (0, o.L3)(function* (s) {
                                let { labelId: r, preloadedLabel: i, withLabelEntities: a = !0 } = s,
                                    { labelsResource: l, modelActionsLogger: c } = (0, o._$)(e);
                                if (e.loadingState !== p.G.PENDING)
                                    try {
                                        e.loadingState = p.G.PENDING;
                                        let s = i;
                                        (s || (s = yield l.getData({ labelId: r })),
                                            (e.id = String(s.id)),
                                            (e.name = s.name),
                                            (e.type = s.type),
                                            a && (yield t.getAlbums({ labelId: r, pageSize: 8 }), yield t.getArtists({ labelId: r, pageSize: 8 })),
                                            (e.loadingState = p.G.RESOLVE));
                                    } catch (t) {
                                        (c.error(t),
                                            t instanceof n.GX && [n.X1.BAD_REQUEST, n.X1.NOT_FOUND].includes(t.statusCode) && (e.errorStatusCode = t.statusCode),
                                            e.loadingState !== p.G.IDLE && (e.loadingState = p.G.REJECT));
                                    }
                            }),
                            reset() {
                                ((e.loadingState = p.G.IDLE),
                                    (e.id = null),
                                    (e.name = null),
                                    (e.type = null),
                                    (e.errorStatusCode = null),
                                    e.destroyItems([e.albums, e.artists]));
                            },
                        };
                        return t;
                    }),
                S = { loadingState: p.G.IDLE, albumsSubpage: { pagesLoader: {}, sort: {} }, artistsSubpage: { pagesLoader: {} } },
                { pageStoreProvider: _ } = (0, i.W)({ createStore: (e) => R.create(S, e), patchKey: a.n.LABEL }),
                b = _;
        },
        22413: (e, t, s) => {
            'use strict';
            s.d(t, { Jt: () => a, TF: () => n, hZ: () => o });
            var r = function () {
                return (r =
                    Object.assign ||
                    function (e) {
                        for (var t, s = 1, r = arguments.length; s < r; s++)
                            for (var i in (t = arguments[s])) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                        return e;
                    }).apply(this, arguments);
            };
            function i(e, t) {
                if (!t) return '';
                var s = '; ' + e;
                return !0 === t ? s : s + '=' + t;
            }
            function a(e) {
                return (function (e) {
                    for (var t = {}, s = e ? e.split('; ') : [], r = 0; r < s.length; r++) {
                        var i = s[r].split('='),
                            a = i.slice(1).join('=');
                        '"' === a[0] && (a = a.slice(1, -1));
                        try {
                            t[decodeURIComponent(i[0])] = a.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
                        } catch (e) {}
                    }
                    return t;
                })(document.cookie)[e];
            }
            function o(e, t, s) {
                var a;
                document.cookie =
                    ((a = r({ path: '/' }, s)),
                    encodeURIComponent(e)
                        .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
                        .replace(/\(/g, '%28')
                        .replace(/\)/g, '%29') +
                        '=' +
                        encodeURIComponent(t).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent) +
                        (function (e) {
                            if ('number' == typeof e.expires) {
                                var t = new Date();
                                (t.setMilliseconds(t.getMilliseconds() + 864e5 * e.expires), (e.expires = t));
                            }
                            return (
                                i('Expires', e.expires ? e.expires.toUTCString() : '') +
                                i('Domain', e.domain) +
                                i('Path', e.path) +
                                i('Secure', e.secure) +
                                i('SameSite', e.sameSite)
                            );
                        })(a));
            }
            function n(e, t) {
                o(e, '', r(r({}, t), { expires: -1 }));
            }
        },
        23218: (e, t, s) => {
            'use strict';
            s.d(t, { I: () => c });
            var r = s(28410),
                i = s(31488),
                a = s(36159),
                o = s(82745),
                n = s(95897),
                l = s(57483);
            function c(e, t) {
                let { useAppendMode: s = !1 } = null != t ? t : {};
                return r.gK
                    .compose(
                        r.gK.model('PageLoader', {
                            items: r.gK.maybeNull(r.gK.array(r.gK.maybeNull(e))),
                            requestsCount: r.gK.optional(r.gK.number, 0),
                            initialRequestLoadingState: r.gK.optional(r.gK.enumeration(Object.values(a.G)), a.G.IDLE),
                            lastRejectedPagesList: r.gK.optional(r.gK.array(r.gK.number), []),
                            pager: r.gK.maybeNull(l.j),
                            pageStates: r.gK.maybeNull(r.gK.array(r.gK.enumeration(Object.values(a.G)))),
                        }),
                        n.p,
                    )
                    .views((e) => {
                        let t = {
                            isPageNeedToLoad: (t) => {
                                var s;
                                return null == (s = e.pageStates) || !s[t] || e.pageStates[t] === a.G.IDLE;
                            },
                            get isSomePageResolved() {
                                var r;
                                return !!((null == (r = e.pageStates) ? void 0 : r.length) && e.pageStates.some((e) => e === a.G.RESOLVE));
                            },
                            get isEmpty() {
                                var i;
                                return t.isSomePageResolved && !(null == (i = e.items) ? void 0 : i.length);
                            },
                            get isNeedToMakeInitialRequest() {
                                return e.initialRequestLoadingState === a.G.IDLE;
                            },
                            get isInitialRequestRejected() {
                                return e.initialRequestLoadingState === a.G.REJECT;
                            },
                            get hasMorePages() {
                                var o;
                                return !!s && !(null == (o = e.pager) ? void 0 : o.lastPage);
                            },
                            get rejectedPagesCount() {
                                var n;
                                if (t.isInitialRequestRejected || !(null == (n = e.pageStates) ? void 0 : n.length)) return 0;
                                return e.pageStates.filter((e) => e === a.G.REJECT).length;
                            },
                        };
                        return t;
                    })
                    .actions((e) => {
                        let t = {
                            setPageState: (r, i) => {
                                let o;
                                if (([a.G.IDLE, a.G.PENDING].includes(e.initialRequestLoadingState) && (e.initialRequestLoadingState = i), s)) o = r + 1;
                                else {
                                    var n, l, c, u;
                                    o = Math.ceil(
                                        (null != (c = null == (n = e.pager) ? void 0 : n.total) ? c : 0) /
                                            (null != (u = null == (l = e.pager) ? void 0 : l.perPage) ? u : 1),
                                    );
                                }
                                let d = Math.max(r + 1, o);
                                (t.ensurePageStatesInitialized(d), e.pageStates && (e.pageStates[r] = i), i === a.G.REJECT && t.addLastRejectedPageToList(r));
                            },
                            setItems: (n, l) => {
                                var c;
                                let { page: u, pager: d, responseStatus: p } = l;
                                if (((e.requestsCount = (null != (c = e.requestsCount) ? c : 0) + 1), p === i.F.ERROR || !n || !d))
                                    return void t.setPageState(u, a.G.REJECT);
                                (e.pager
                                    ? s && ((e.pager.lastPage = d.lastPage), (e.pager.perPage = d.perPage))
                                    : (e.pager = { page: d.page, perPage: d.perPage, total: d.total, lastPage: d.lastPage }),
                                    t.setPageState(u, a.G.RESOLVE),
                                    (e.pager.page = u),
                                    s
                                        ? (e.items || (e.items = (0, r.wg)([])), e.items && e.items.push(...n))
                                        : (e.items || (e.items = (0, r.wg)(Array.from({ length: e.pager.total }, () => null))),
                                          e.items && (0, o.I)({ items: e.items, mappedRawItems: n, page: u, pageSize: e.pager.perPage })));
                            },
                            resetRejectedPagesState() {
                                var t, s, r;
                                for (let i = 0; i < (null != (s = null == (t = e.pageStates) ? void 0 : t.length) ? s : 0); i++)
                                    (null == (r = e.pageStates) ? void 0 : r[i]) === a.G.REJECT && (e.pageStates[i] = a.G.IDLE);
                            },
                            addLastRejectedPageToList(t) {
                                var s, r, i;
                                for (e.lastRejectedPagesList.push(t); (null != (r = null == (s = e.lastRejectedPagesList) ? void 0 : s.length) ? r : 0) > 5;)
                                    null == (i = e.lastRejectedPagesList) || i.shift();
                            },
                            ensurePageStatesInitialized(t) {
                                if (t <= 0) return;
                                if (!e.pageStates) {
                                    let s = Array.from({ length: t }, () => a.G.IDLE);
                                    e.pageStates = (0, r.wg)(s);
                                    return;
                                }
                                let s = e.pageStates.length;
                                if (t > s) {
                                    let r = Array.from({ length: t - s }, () => a.G.IDLE);
                                    e.pageStates.push(...r);
                                }
                            },
                            reset() {
                                ((e.initialRequestLoadingState = a.G.IDLE),
                                    (e.requestsCount = 0),
                                    (e.lastRejectedPagesList = (0, r.wg)([])),
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
            var r = s(89288),
                i = s(74310),
                a = s(38097);
            let o = (e) => {
                    var t;
                    if (!e) return e;
                    let s = (null != (t = e.split('?')[0]) ? t : '').split('/').filter(Boolean);
                    for (let e of Object.keys(i.j)) {
                        let t = e.split('/').filter(Boolean);
                        if (s.length !== t.length) continue;
                        let r = !0;
                        for (let e = 0; e < t.length; e++) {
                            let i = t[e],
                                a = s[e];
                            if (i && !i.startsWith(':') && i !== a) {
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
                        s = e.split('/').filter(Boolean),
                        r = [];
                    for (let e of s) e.startsWith(':') ? t.push(e.substring(1)) : r.push(e);
                    let i = '/'.concat(r.join('/'));
                    if (0 === t.length) return e;
                    let a = t.map((e) => ''.concat(e, '=:').concat(e)).join('&');
                    return ''.concat(i, '?').concat(a);
                },
                l = (e) =>
                    e
                        .split('/')
                        .filter(Boolean)
                        .filter((e) => e.startsWith(':'))
                        .map((e) => e.substring(1)),
                c = function (e) {
                    for (var t, s = arguments.length, c = Array(s > 1 ? s - 1 : 0), u = 1; u < s; u++) c[u - 1] = arguments[u];
                    let [d] = c,
                        p = e.includes(':'),
                        g = e.includes('?'),
                        m = 'string' == typeof e ? e : String(e);
                    if (
                        (m.includes(a.nl) && (d = { ...d, options: { ...(null == d ? void 0 : d.options), isExternalLink: !0 } }),
                        g &&
                            ((e) => {
                                let [t, s] = e.split('?'),
                                    r = new URLSearchParams(s);
                                return Object.keys(i.j).some((e) => {
                                    let s = l(e);
                                    return 0 !== s.length && n(e).split('?')[0] === t && s.every((e) => r.has(e));
                                });
                            })(m))
                    )
                        return (0, r.no)(m, d);
                    if (g && !p) {
                        let e = o(m),
                            s = l(e);
                        if (s.length > 0) {
                            let i = ((e, t) => {
                                    var s;
                                    let r = (null != (s = e.split('?')[0]) ? s : '').split('/').filter(Boolean);
                                    return t
                                        .split('/')
                                        .filter(Boolean)
                                        .reduce((e, t, s) => {
                                            let i = r[s];
                                            return (t.startsWith(':') && i && (e[t.substring(1)] = i), e);
                                        }, {});
                                })(m, e),
                                a = {
                                    ...((e, t) => {
                                        let s = e.split('?')[1];
                                        if (!s) return {};
                                        let r = new Set(t),
                                            i = {};
                                        return (
                                            new URLSearchParams(s).forEach((e, t) => {
                                                r.has(t) || (i[t] = e);
                                            }),
                                            i
                                        );
                                    })(m, s),
                                    ...(null != (t = null == d ? void 0 : d.query) ? t : {}),
                                },
                                o = n(e);
                            return (0, r.no)(o, { ...d, params: i, query: a });
                        }
                    }
                    if (p || g) {
                        let e = n(m);
                        return (0, r.no)(e, d);
                    }
                    let f = o(m),
                        h = (function (e, t) {
                            let [s, r] = e.split('?'),
                                i = null == s ? void 0 : s.split('/').filter(Boolean),
                                a = {},
                                o = t.split('/').filter(Boolean);
                            if ((null == i ? void 0 : i.length) !== o.length || (o[0] && !e.startsWith('/'.concat(o[0])))) return a;
                            for (let e = 0; e < o.length; e++) {
                                let t = o[e],
                                    s = i && i[e];
                                (null == t ? void 0 : t.startsWith(':')) && s && (a[t.substring(1)] = s);
                            }
                            return (
                                r &&
                                    r.split('&').map((e) => {
                                        let [t, s] = e.split('=');
                                        t && void 0 !== s && (a[t] = s);
                                    }),
                                a
                            );
                        })(m, f),
                        E = n(f);
                    return (0, r.no)(E, { ...d, params: h });
                };
        },
        27912: (e, t, s) => {
            'use strict';
            s.d(t, { t: () => r });
            let r = {
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
        27954: (e, t, s) => {
            'use strict';
            s.d(t, { P: () => a, g: () => o });
            var r = s(74631),
                i = s(36432);
            let a = (0, r.createContext)(null);
            function o() {
                let e = (0, r.useContext)(a);
                if (null === e) throw new i.t('Store cannot be null, please add a context provider', { code: 'E_CONTEXT_STORE_NULL' });
                return e;
            }
        },
        30691: (e, t, s) => {
            'use strict';
            function r() {
                throw Error('Cycle detected');
            }
            function i() {
                if (l > 1) l--;
                else {
                    for (var e, t = !1; void 0 !== n;) {
                        var s = n;
                        for (n = void 0, c++; void 0 !== s;) {
                            var r = s.o;
                            if (((s.o = void 0), (s.f &= -3), !(8 & s.f) && m(s)))
                                try {
                                    s.c();
                                } catch (s) {
                                    t || ((e = s), (t = !0));
                                }
                            s = r;
                        }
                    }
                    if (((c = 0), l--, t)) throw e;
                }
            }
            function a(e) {
                if (l > 0) return e();
                l++;
                try {
                    return e();
                } finally {
                    i();
                }
            }
            s.d(t, { EW: () => v, vA: () => a, vP: () => g });
            var o = void 0,
                n = void 0,
                l = 0,
                c = 0,
                u = 0;
            function d(e) {
                if (void 0 !== o) {
                    var t = e.n;
                    if (void 0 === t || t.t !== o)
                        return (
                            (t = { i: 0, S: e, p: o.s, n: void 0, t: o, e: void 0, x: void 0, r: t }),
                            void 0 !== o.s && (o.s.n = t),
                            (o.s = t),
                            (e.n = t),
                            32 & o.f && e.S(t),
                            t
                        );
                    if (-1 === t.i)
                        return ((t.i = 0), void 0 !== t.n && ((t.n.p = t.p), void 0 !== t.p && (t.p.n = t.n), (t.p = o.s), (t.n = void 0), (o.s.n = t), (o.s = t)), t);
                }
            }
            function p(e) {
                ((this.v = e), (this.i = 0), (this.n = void 0), (this.t = void 0));
            }
            function g(e) {
                return new p(e);
            }
            function m(e) {
                for (var t = e.s; void 0 !== t; t = t.n) if (t.S.i !== t.i || !t.S.h() || t.S.i !== t.i) return !0;
                return !1;
            }
            function f(e) {
                for (var t = e.s; void 0 !== t; t = t.n) {
                    var s = t.S.n;
                    if ((void 0 !== s && (t.r = s), (t.S.n = t), (t.i = -1), void 0 === t.n)) {
                        e.s = t;
                        break;
                    }
                }
            }
            function h(e) {
                for (var t = e.s, s = void 0; void 0 !== t;) {
                    var r = t.p;
                    (-1 === t.i ? (t.S.U(t), void 0 !== r && (r.n = t.n), void 0 !== t.n && (t.n.p = r)) : (s = t),
                        (t.S.n = t.r),
                        void 0 !== t.r && (t.r = void 0),
                        (t = r));
                }
                e.s = s;
            }
            function E(e) {
                (p.call(this, void 0), (this.x = e), (this.s = void 0), (this.g = u - 1), (this.f = 4));
            }
            function v(e) {
                return new E(e);
            }
            function I(e) {
                var t = e.u;
                if (((e.u = void 0), 'function' == typeof t)) {
                    l++;
                    var s = o;
                    o = void 0;
                    try {
                        t();
                    } catch (t) {
                        throw ((e.f &= -2), (e.f |= 8), y(e), t);
                    } finally {
                        ((o = s), i());
                    }
                }
            }
            function y(e) {
                for (var t = e.s; void 0 !== t; t = t.n) t.S.U(t);
                ((e.x = void 0), (e.s = void 0), I(e));
            }
            function R(e) {
                if (o !== this) throw Error('Out-of-order effect');
                (h(this), (o = e), (this.f &= -2), 8 & this.f && y(this), i());
            }
            function S(e) {
                ((this.x = e), (this.u = void 0), (this.s = void 0), (this.o = void 0), (this.f = 32));
            }
            ((p.prototype.h = function () {
                return !0;
            }),
                (p.prototype.S = function (e) {
                    this.t !== e && void 0 === e.e && ((e.x = this.t), void 0 !== this.t && (this.t.e = e), (this.t = e));
                }),
                (p.prototype.U = function (e) {
                    if (void 0 !== this.t) {
                        var t = e.e,
                            s = e.x;
                        (void 0 !== t && ((t.x = s), (e.e = void 0)), void 0 !== s && ((s.e = t), (e.x = void 0)), e === this.t && (this.t = s));
                    }
                }),
                (p.prototype.subscribe = function (e) {
                    var t = this,
                        s = function () {
                            var s = t.value,
                                r = 32 & this.f;
                            this.f &= -33;
                            try {
                                e(s);
                            } finally {
                                this.f |= r;
                            }
                        },
                        r = new S(s);
                    try {
                        r.c();
                    } catch (e) {
                        throw (r.d(), e);
                    }
                    return r.d.bind(r);
                }),
                (p.prototype.valueOf = function () {
                    return this.value;
                }),
                (p.prototype.toString = function () {
                    return this.value + '';
                }),
                (p.prototype.toJSON = function () {
                    return this.value;
                }),
                (p.prototype.peek = function () {
                    return this.v;
                }),
                Object.defineProperty(p.prototype, 'value', {
                    get: function () {
                        var e = d(this);
                        return (void 0 !== e && (e.i = this.i), this.v);
                    },
                    set: function (e) {
                        if (
                            (o instanceof E &&
                                (function () {
                                    throw Error('Computed cannot have side-effects');
                                })(),
                            e !== this.v)
                        ) {
                            (c > 100 && r(), (this.v = e), this.i++, u++, l++);
                            try {
                                for (var t = this.t; void 0 !== t; t = t.x) t.t.N();
                            } finally {
                                i();
                            }
                        }
                    },
                }),
                ((E.prototype = new p()).h = function () {
                    if (((this.f &= -3), 1 & this.f)) return !1;
                    if (32 == (36 & this.f) || ((this.f &= -5), this.g === u)) return !0;
                    if (((this.g = u), (this.f |= 1), this.i > 0 && !m(this))) return ((this.f &= -2), !0);
                    var e = o;
                    try {
                        (f(this), (o = this));
                        var t = this.x();
                        (16 & this.f || this.v !== t || 0 === this.i) && ((this.v = t), (this.f &= -17), this.i++);
                    } catch (e) {
                        ((this.v = e), (this.f |= 16), this.i++);
                    }
                    return ((o = e), h(this), (this.f &= -2), !0);
                }),
                (E.prototype.S = function (e) {
                    if (void 0 === this.t) {
                        this.f |= 36;
                        for (var t = this.s; void 0 !== t; t = t.n) t.S.S(t);
                    }
                    p.prototype.S.call(this, e);
                }),
                (E.prototype.U = function (e) {
                    if (void 0 !== this.t && (p.prototype.U.call(this, e), void 0 === this.t)) {
                        this.f &= -33;
                        for (var t = this.s; void 0 !== t; t = t.n) t.S.U(t);
                    }
                }),
                (E.prototype.N = function () {
                    if (!(2 & this.f)) {
                        this.f |= 6;
                        for (var e = this.t; void 0 !== e; e = e.x) e.t.N();
                    }
                }),
                (E.prototype.peek = function () {
                    if ((this.h() || r(), 16 & this.f)) throw this.v;
                    return this.v;
                }),
                Object.defineProperty(E.prototype, 'value', {
                    get: function () {
                        1 & this.f && r();
                        var e = d(this);
                        if ((this.h(), void 0 !== e && (e.i = this.i), 16 & this.f)) throw this.v;
                        return this.v;
                    },
                }),
                (S.prototype.c = function () {
                    var e = this.S();
                    try {
                        if (8 & this.f || void 0 === this.x) return;
                        var t = this.x();
                        'function' == typeof t && (this.u = t);
                    } finally {
                        e();
                    }
                }),
                (S.prototype.S = function () {
                    (1 & this.f && r(), (this.f |= 1), (this.f &= -9), I(this), f(this), l++);
                    var e = o;
                    return ((o = this), R.bind(this, e));
                }),
                (S.prototype.N = function () {
                    2 & this.f || ((this.f |= 2), (this.o = n), (n = this));
                }),
                (S.prototype.d = function () {
                    ((this.f |= 8), 1 & this.f || y(this));
                }));
        },
        31488: (e, t, s) => {
            'use strict';
            s.d(t, { F: () => r });
            var r = (function (e) {
                return ((e.OK = 'ok'), (e.ERROR = 'error'), e);
            })({});
        },
        31860: (e, t, s) => {
            'use strict';
            var r;
            (s.d(t, { f: () => r }),
                (function (e) {
                    ((e.OK = 'ok'), (e.ERROR = 'error'));
                })(r || (r = {})));
        },
        36159: (e, t, s) => {
            'use strict';
            s.d(t, { G: () => r });
            var r = (function (e) {
                return ((e.IDLE = 'IDLE'), (e.PENDING = 'PENDING'), (e.RESOLVE = 'RESOLVE'), (e.REJECT = 'REJECT'), e);
            })({});
        },
        36484: (e, t, s) => {
            'use strict';
            s.d(t, {
                $$: () => eo,
                $5: () => eu,
                $8: () => O,
                $I: () => g,
                $Y: () => eC,
                A4: () => d,
                CN: () => et,
                CR: () => p,
                DP: () => L,
                DT: () => eL,
                DV: () => ep,
                E: () => I,
                EN: () => r,
                Ez: () => ec,
                GV: () => R,
                Hm: () => o,
                JM: () => ei,
                K1: () => X,
                LC: () => eE,
                Lb: () => E,
                Lk: () => ea,
                N1: () => eg,
                NN: () => x,
                O9: () => D,
                OP: () => u,
                Oo: () => A,
                P0: () => b,
                P1: () => es,
                PL: () => eb,
                QG: () => $,
                RG: () => ek,
                SX: () => ev,
                TD: () => eh,
                TK: () => a,
                Tq: () => eO,
                U2: () => N,
                UB: () => eP,
                Ut: () => F,
                V3: () => f,
                V4: () => S,
                VR: () => eD,
                W5: () => ey,
                WA: () => q,
                X4: () => k,
                X8: () => w,
                Xc: () => Q,
                Zf: () => i,
                Zi: () => eT,
                Zl: () => ee,
                _1: () => m,
                aE: () => V,
                by: () => eS,
                c9: () => z,
                cZ: () => Z,
                dA: () => eA,
                dh: () => eI,
                en: () => Y,
                eu: () => H,
                ff: () => em,
                gd: () => el,
                gu: () => n,
                jQ: () => J,
                ki: () => W,
                mr: () => c,
                nM: () => B,
                ni: () => e$,
                ok: () => M,
                oo: () => T,
                qN: () => G,
                qT: () => ed,
                qt: () => y,
                re: () => er,
                ro: () => j,
                s_: () => e_,
                sv: () => en,
                tz: () => v,
                u2: () => ef,
                uM: () => eR,
                vH: () => C,
                vg: () => eN,
                wH: () => U,
                wK: () => h,
                xF: () => _,
                y$: () => l,
                yq: () => K,
                zj: () => P,
            });
            let r = 'AfterTrackResource',
                i = 'Logger',
                a = 'ModelActionsLogger',
                o = 'HttpClient',
                n = 'HttpBeaconClient',
                l = 'Slam',
                c = 'UgcUploadHttpClient',
                u = 'BaseResourceHttpClient',
                d = 'ResourceHttpClient',
                p = 'ResourceBeaconClient',
                g = 'AccountResource',
                m = 'UsersResource',
                f = 'LandingResource',
                h = 'LandingBlocksResource',
                E = 'Landing3Resource',
                v = 'AlbumResource',
                I = 'SlidesResource',
                y = 'MusicExternalApiPrefixUrl',
                R = 'MusicResourceFactory',
                S = 'PublicConfig',
                _ = 'ServerConfig',
                b = 'TokenConfig',
                T = 'Storage',
                L = 'CookieStorage',
                N = 'LocalStorage',
                O = 'LibraryResource',
                P = 'LumenResource',
                A = 'TracksResource',
                C = 'SessionStorage',
                k = 'TopResource',
                D = 'ArtistsResource',
                $ = 'Authorization',
                U = 'RedAlertResource',
                M = 'RotorResource',
                w = 'WaveResource',
                K = 'SearchResource',
                x = 'SearchPlaylistResource',
                G = 'PlaylistResource',
                j = 'PlaylistsResource',
                B = 'PinResource',
                F = 'MetatagsResource',
                X = 'TagResource',
                H = 'FeedResource',
                q = 'CONTAINER_USER_ID_TOKEN',
                V = 'PinsResource',
                W = 'MusicHistoryResource',
                Y = 'ChartResource',
                J = 'ClipsResource',
                z = 'DynamicPagesResource',
                Q = 'CONTAINER_I18N_STORAGE',
                Z = 'LyricViewsResource',
                ee = 'NonMusicResource',
                et = 'DonationResource',
                es = 'LoaderResource',
                er = 'PrefixlessResource',
                ei = 'StreamsResource',
                ea = 'FiltersResource',
                eo = 'UgcResource',
                en = 'CollectionResource',
                el = 'AdsResource',
                ec = 'PersonalResource',
                eu = 'AvailabilityResource',
                ed = 'GetFileInfoResource',
                ep = 'ResourcesFileInfoResource',
                eg = 'DisclaimersResource',
                em = 'DisclaimerDictionary',
                ef = 'FamilyResource',
                eh = 'ChildrenLandingResource',
                eE = 'TelemetryResource',
                ev = 'Env',
                eI = 'PromoResource',
                ey = 'RumResource',
                eR = 'AcqOffers',
                eS = 'Ynison',
                e_ = 'YnisonNewConnector',
                eb = 'LabelsResource',
                eT = 'RequestExecutionContext',
                eL = 'ConcertsResource',
                eN = 'YaMetrikaController',
                eO = 'RumTransport',
                eP = 'YaMetrikaTransport',
                eA = 'WordsResource',
                eC = 'WheelResource',
                ek = 'MocksInitializer',
                eD = 'NetworkMonitorFactory',
                e$ = 'SkeletonSdk';
        },
        36786: (e, t, s) => {
            'use strict';
            s.d(t, { w: () => o });
            var r = s(28410),
                i = s(78111),
                a = s(99670);
            let o = r.gK
                .model('Sort', { sortBy: r.gK.maybe(r.gK.enumeration(Object.values(i.g))), sortOrder: r.gK.maybe(r.gK.enumeration(Object.values(a.x))) })
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
            s.d(t, { k7: () => r, nl: () => i });
            let r = 1e3,
                i = 'https://';
        },
        39528: (e, t, s) => {
            'use strict';
            s.d(t, { R: () => i });
            var r = s(25895);
            let i = (e) => (0, r.u)('/artist/:artistId', { params: { artistId: e } });
        },
        55180: (e, t, s) => {
            'use strict';
            s.d(t, { J: () => n });
            var r = s(28410),
                i = s(66730),
                a = s(69088),
                o = s(69432);
            let n = i.G.props({ artists: r.gK.maybe(r.gK.array(a.P)), chart: r.gK.maybe(o.I) }).views((e) => ({
                get artistNames() {
                    var t;
                    return null == (t = e.artists) ? void 0 : t.map((e) => e.name).join(', ');
                },
                get artistName() {
                    var s, r, i, a;
                    if (null == (r = e.artists) || null == (s = r[0]) ? void 0 : s.various) return;
                    return null == (a = e.artists) || null == (i = a[0]) ? void 0 : i.name;
                },
                get artistIds() {
                    var o;
                    return null == (o = e.artists) ? void 0 : o.map((e) => e.id);
                },
                get artistId() {
                    var n, l;
                    return null == (l = e.artists) || null == (n = l[0]) ? void 0 : n.id;
                },
            }));
        },
        56629: (e, t, s) => {
            'use strict';
            var r;
            (s.d(t, { _: () => r }),
                (function (e) {
                    ((e.UP = 'up'), (e.DOWN = 'down'), (e.SAME = 'same'), (e.NEW = 'new'));
                })(r || (r = {})));
        },
        56829: (e, t, s) => {
            'use strict';
            var r;
            (s.d(t, { _: () => r }),
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
        57483: (e, t, s) => {
            'use strict';
            s.d(t, { j: () => i });
            var r = s(28410);
            let i = r.gK.model('Pager', { page: r.gK.number, perPage: r.gK.number, total: r.gK.number, lastPage: r.gK.maybe(r.gK.boolean) });
        },
        62562: (e, t, s) => {
            'use strict';
            s.d(t, { B: () => a, N: () => o });
            var r = s(74631),
                i = s(36432);
            let a = (0, r.createContext)(null);
            function o() {
                let e = (0, r.useContext)(a);
                if (null === e) throw new i.t('Container cannot be null, please add a context provider', { code: 'E_CONTEXT_CONTAINER_NULL' });
                return e;
            }
        },
        68617: (e, t, s) => {
            Promise.resolve().then(s.bind(s, 17197));
        },
        73544: (e, t, s) => {
            'use strict';
            s.d(t, { e: () => r });
            let r = (e) => ({ uri: e.uri, color: e.color });
        },
        74310: (e, t, s) => {
            'use strict';
            s.d(t, { b: () => r, j: () => i });
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
                i = {
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
            var r;
            (s.d(t, { S: () => r }),
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
        76481: (e, t, s) => {
            'use strict';
            s.d(t, { m: () => i });
            class r extends Error {
                name = 'BaseException';
                message;
                code;
                data;
                stack;
                constructor(e, t = {}) {
                    let { code: s = 'E_INTERNAL', data: i = {}, ...a } = t,
                        o = e || 'Internal error';
                    (super(o, a), (this.message = o), (this.code = s), (this.data = i), (this.stack = Error(o).stack), Object.setPrototypeOf(this, r.prototype));
                }
            }
            class i extends r {
                name = 'HttpException';
                constructor(e = 'Http Client error', { code: t = 'E_HTTP_CLIENT', ...s } = {}) {
                    (super(e, { code: t, ...s }), Object.setPrototypeOf(this, i.prototype));
                }
            }
        },
        77920: (e, t, s) => {
            'use strict';
            var r;
            (s.d(t, { X: () => r }),
                (function (e) {
                    ((e[(e.NOT_MODIFIED = 304)] = 'NOT_MODIFIED'),
                        (e[(e.NOT_FOUND = 404)] = 'NOT_FOUND'),
                        (e[(e.BAD_REQUEST = 400)] = 'BAD_REQUEST'),
                        (e[(e.REQUEST_TIMEOUT = 408)] = 'REQUEST_TIMEOUT'),
                        (e[(e.PRECONDITION_FAILED = 412)] = 'PRECONDITION_FAILED'),
                        (e[(e.TEAPOT = 418)] = 'TEAPOT'));
                })(r || (r = {})));
        },
        78111: (e, t, s) => {
            'use strict';
            var r;
            (s.d(t, { g: () => r }),
                (function (e) {
                    ((e.RATING = 'rating'), (e.YEAR = 'year'));
                })(r || (r = {})));
        },
        80499: (e, t, s) => {
            'use strict';
            s.d(t, { W: () => h, s: () => E });
            var r = s(25839),
                i = s(88204),
                a = s(84059),
                o = s(74631),
                n = s(89288),
                l = s(36432),
                c = s(94421),
                u = s(99989),
                d = s(27954),
                p = s(83382);
            (0, i.eO)(!1);
            let g = (0, o.createContext)(null),
                m = (e) => {
                    let { children: t, store: s, storeKey: i } = e,
                        a = (0, o.useMemo)(() => ({ store: s, storeKey: i }), [s, i]);
                    return (0, r.jsx)(g.Provider, { value: a, children: t });
                },
                f = (e) => {
                    let { nonce: t, patchKey: s, patchesRef: i } = e;
                    return (
                        (0, a.useServerInsertedHTML)(() => {
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
                                                  .concat((0, n.Gr)(t), ");\n        window.dispatchEvent(new Event('")
                                                  .concat(c.O, "'));\n    "))(s, e),
                                      },
                                      nonce: null != t ? t : void 0,
                                  });
                        }),
                        null
                    );
                },
                h = (e) => {
                    let { createStore: t, patchKey: s } = e,
                        i = () => {
                            var e, t;
                            let r = null != (t = null == (e = window.__PAGE_STATE_PATCHES__) ? void 0 : e[s]) ? t : [];
                            return (window.__PAGE_STATE_PATCHES__ && delete window.__PAGE_STATE_PATCHES__[s], r);
                        };
                    return {
                        pageStoreProvider: (e) => {
                            let { children: a, nonce: o } = e,
                                n = (0, p.Y)(),
                                l = (0, d.g)(),
                                { store: g, patchesRef: h } = (0, u.m)({
                                    createStore: () => t({ ...n, rootStore: l }),
                                    getPendingPatchBatches: i,
                                    patchesUpdatedEventName: c.O,
                                });
                            return (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)(f, { nonce: o, patchKey: s, patchesRef: h }), (0, r.jsx)(m, { store: g, storeKey: s, children: a })],
                            });
                        },
                    };
                };
            function E(e) {
                let { throwOnAbsence: t = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    s = (0, o.useContext)(g);
                if (!s || s.storeKey !== e) {
                    var r;
                    if (!t) return null;
                    throw new l.t('Page store context is missing or has unexpected key', {
                        code: 'E_CONTEXT_PAGE_STORE_NULL',
                        data: { actualStoreKey: null != (r = null == s ? void 0 : s.storeKey) ? r : 'null', expectedStoreKey: e },
                    });
                }
                return s.store;
            }
        },
        81024: (e, t, s) => {
            'use strict';
            s.d(t, { L: () => i });
            var r = s(25895);
            let i = (e) => (0, r.u)('/album/:albumId', { params: { albumId: e } });
        },
        82706: (e, t, s) => {
            'use strict';
            s.d(t, { n: () => r });
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
        82745: (e, t, s) => {
            'use strict';
            function r(e) {
                let { items: t, mappedRawItems: s, page: r, pageSize: i } = e,
                    a = r * i,
                    o = 0;
                for (let e = a; e < a + i; e++) (s[o] && (t[e] = s[o]), o++);
            }
            s.d(t, { I: () => r });
        },
        84e3: (e, t, s) => {
            'use strict';
            s.d(t, { U: () => a });
            var r = s(36484),
                i = s(62562);
            let a = () => (0, i.N)().get(r.Zf);
        },
        84059: (e, t, s) => {
            'use strict';
            var r = s(73923);
            (s.o(r, 'ServerInsertedHTMLContext') &&
                s.d(t, {
                    ServerInsertedHTMLContext: function () {
                        return r.ServerInsertedHTMLContext;
                    },
                }),
                s.o(r, 'notFound') &&
                    s.d(t, {
                        notFound: function () {
                            return r.notFound;
                        },
                    }),
                s.o(r, 'redirect') &&
                    s.d(t, {
                        redirect: function () {
                            return r.redirect;
                        },
                    }),
                s.o(r, 'usePathname') &&
                    s.d(t, {
                        usePathname: function () {
                            return r.usePathname;
                        },
                    }),
                s.o(r, 'useRouter') &&
                    s.d(t, {
                        useRouter: function () {
                            return r.useRouter;
                        },
                    }),
                s.o(r, 'useSearchParams') &&
                    s.d(t, {
                        useSearchParams: function () {
                            return r.useSearchParams;
                        },
                    }),
                s.o(r, 'useServerInsertedHTML') &&
                    s.d(t, {
                        useServerInsertedHTML: function () {
                            return r.useServerInsertedHTML;
                        },
                    }));
        },
        91201: (e, t, s) => {
            'use strict';
            s.d(t, { p: () => o });
            var r = s(28410),
                i = s(83772),
                a = s(45337);
            let o = (e) => {
                let t = ((e) => ({ ...(0, i.f)(e), artists: e.artists.map(a.G) }))(e);
                return (0, r.wg)(t);
            };
        },
        91626: (e, t, s) => {
            'use strict';
            (s.d(t, { G: () => i }), s(77920));
            var r = s(76481);
            class i extends r.m {
                name = 'HttpErrorException';
                statusCode;
                constructor(e, t) {
                    (super(e, { code: 'E_HTTP_CLIENT_NON_2XX_3XX_RESPONSE', cause: t.cause }),
                        (this.statusCode = t.statusCode),
                        Object.setPrototypeOf(this, i.prototype));
                }
            }
        },
        93588: (e, t, s) => {
            'use strict';
            s.d(t, { sK: () => y, NN: () => i, R8: () => a, $3: () => r, CP: () => d, tE: () => p, Ef: () => g, $5: () => f, IU: () => R, tk: () => h.t, u0: () => I });
            let r = !1,
                i = !0,
                a = !1;
            var o = s(58025),
                n = s(36432);
            class l extends n.t {
                constructor(e = 'Internal error', { code: t = 'E_CONFIG', ...s } = {}) {
                    (super(e, { code: t, ...s }), (0, o._)(this, 'name', 'ConfigException'), Object.setPrototypeOf(this, l.prototype));
                }
            }
            class c extends l {
                constructor(e) {
                    (super('The configuration file for environment "'.concat(e, '" does not exist.'), { code: 'E_CONFIG_FILE_NOT_FOUND' }),
                        (0, o._)(this, 'name', 'NotFoundConfigException'),
                        Object.setPrototypeOf(this, c.prototype));
                }
            }
            let u = (function (e) {
                    let { manifest: t, getConfig: s } = e,
                        r = new Map();
                    return (e) => {
                        let i = r.get(e);
                        if (i) return i;
                        if (!Object.hasOwn(t, e)) return Promise.reject(new c(e));
                        let a = t[e]().then(s);
                        return (r.set(e, a), a);
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
                p = (e, t) => (t ? e.afisha.clientId[t] : e.afisha.clientId.web);
            function g(e, t) {
                return t ? e.player.secretKey[t] : '';
            }
            var m = s(49124);
            let f = () => {
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
            var h = s(27912),
                E = s(90887),
                v = s(52830);
            let I = (e, t, s) => {
                let { allowCustomPrefixUrl: r, prefixUrl: i } = e.resources.musicExternalApi,
                    a = r && 'string' == typeof s && s.length > 0 ? s : i;
                return (0, E.r)(a, t, v.B);
            };
            var y = (function (e) {
                return ((e.WEB = 'YandexMusicWebNext'), (e.DESKTOP = 'YandexMusicDesktopApp'), e);
            })({});
            let R = async (e) => ({ env: e, publicConfig: await u(e) });
        },
        93690: (e, t, s) => {
            'use strict';
            s.d(t, { GX: () => a.G, X1: () => r.X, m5: () => i.m });
            var r = s(77920),
                i = s(76481),
                a = s(91626);
            s(95919);
        },
        95897: (e, t, s) => {
            'use strict';
            s.d(t, { p: () => i });
            var r = s(28410);
            let i = r.gK.model('ModelDestroyManager').actions(() => ({
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
        95919: (e, t, s) => {
            'use strict';
            var r;
            (s.d(t, { Z: () => r }),
                (function (e) {
                    ((e.METHOD_NOT_SUPPORTED = 'E_BEACON_METHOD_NOT_SUPPORTED'),
                        (e.NOT_AVAILABLE = 'E_BEACON_NOT_AVAILABLE'),
                        (e.QUEUE_FAILED = 'E_BEACON_QUEUE_FAILED'),
                        (e.NO_RESPONSE_DATA = 'E_BEACON_NO_RESPONSE_DATA'),
                        (e.RETRY_EXHAUSTED = 'E_BEACON_RETRY_EXHAUSTED'));
                })(r || (r = {})));
        },
        96692: (e, t, s) => {
            'use strict';
            s.d(t, { d: () => a });
            var r = s(28410),
                i = s(45337);
            let a = (e) => {
                let t = (0, i.G)(e);
                return (0, r.wg)(t);
            };
        },
        98436: (e, t, s) => {
            'use strict';
            var r;
            (s.d(t, { _: () => r }),
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
        99670: (e, t, s) => {
            'use strict';
            var r;
            (s.d(t, { x: () => r }),
                (function (e) {
                    ((e.ASC = 'asc'), (e.DESC = 'desc'));
                })(r || (r = {})));
        },
    },
    (e) => {
        (e.O(0, [6706, 1311, 9212, 4512, 4245, 9333, 4475, 5056, 7358], () => e((e.s = 68617))), (_N_E = e.O()));
    },
]);
