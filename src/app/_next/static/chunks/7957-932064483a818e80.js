'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7957],
    {
        8487: (e, t, n) => {
            n.d(t, { A: () => c });
            var r = n(23198),
                o = n(74631),
                a = n(30236),
                u = n(39004);
            function l(e) {
                var t = (0, u.A)(),
                    n = t.formatMessage,
                    r = t.textComponent,
                    a = void 0 === r ? o.Fragment : r,
                    l = e.id,
                    i = e.description,
                    c = e.defaultMessage,
                    s = e.values,
                    f = e.children,
                    p = e.tagName,
                    d = void 0 === p ? a : p,
                    m = n({ id: l, description: i, defaultMessage: c }, s, { ignoreTag: e.ignoreTag });
                return 'function' == typeof f ? f(Array.isArray(m) ? m : [m]) : d ? o.createElement(d, null, m) : o.createElement(o.Fragment, null, m);
            }
            l.displayName = 'FormattedMessage';
            var i = o.memo(l, function (e, t) {
                var n = e.values,
                    o = (0, r.__rest)(e, ['values']),
                    u = t.values,
                    l = (0, r.__rest)(t, ['values']);
                return (0, a.bN)(u, n) && (0, a.bN)(o, l);
            });
            i.displayName = 'MemoizedFormattedMessage';
            let c = i;
        },
        17850: (e, t, n) => {
            ((t.uY = function (e, t) {
                let {
                        skeletonId: n = '',
                        mainObjectType: a = o.DomainObjectType.NonApplicable,
                        mainObjectId: u = '',
                        tabId: l = '',
                        tabPos: i = 0,
                        isTabSelectedByDefault: c = !1,
                        entityPosX: s = 1,
                        entityPosY: f = 1,
                        objectsCount: p = 0,
                        displayReasonId: d = '',
                        filterKey: m = '',
                        filterValue: g = '',
                        filterPos: y = 0,
                    } = t,
                    b = (0, r.makeMetaParams)(1),
                    h = {
                        ...t,
                        skeletonId: n,
                        mainObjectType: a,
                        mainObjectId: u,
                        tabId: l,
                        tabPos: i,
                        isTabSelectedByDefault: c,
                        entityPosX: s,
                        entityPosY: f,
                        objectsCount: p,
                        displayReasonId: d,
                        filterKey: m,
                        filterValue: g,
                        filterPos: y,
                        _meta: b,
                    };
                e.trackEvent('LandingBlock.Loaded', h);
            }),
                (t.es = function (e, t) {
                    let {
                            pageStyle: n = o.PageStyles.Fullscreen,
                            pagePlacement: a = o.PagePlacements.Fullscreen,
                            skeletonId: u = '',
                            mainObjectType: l = o.DomainObjectType.NonApplicable,
                            mainObjectId: i = '',
                            tabId: c = '',
                            tabPos: s = 0,
                            isTabSelectedByDefault: f = !1,
                            entityPosX: p = 1,
                            entityPosY: d = 1,
                            objectsCount: m = 0,
                            displayReasonId: g = '',
                            filterKey: y = '',
                            filterValue: b = '',
                            filterPos: h = 0,
                        } = t,
                        P = (0, r.makeMetaParams)(2),
                        v = {
                            ...t,
                            pageStyle: n,
                            pagePlacement: a,
                            skeletonId: u,
                            mainObjectType: l,
                            mainObjectId: i,
                            tabId: c,
                            tabPos: s,
                            isTabSelectedByDefault: f,
                            entityPosX: p,
                            entityPosY: d,
                            objectsCount: m,
                            displayReasonId: g,
                            filterKey: y,
                            filterValue: b,
                            filterPos: h,
                            _meta: P,
                        };
                    e.trackEvent('LandingBlock.Loaded', v);
                }),
                (t.Pf = function (e, t) {
                    let {
                            objectPosX: n = 0,
                            objectPosY: a = 0,
                            skeletonId: u = '',
                            mainObjectType: l = o.DomainObjectType.NonApplicable,
                            mainObjectId: i = '',
                            tabId: c = '',
                            tabPos: s = 0,
                            isTabSelectedByDefault: f = !1,
                            entityPosX: p = 1,
                            entityPosY: d = 1,
                            objectsCount: m = 0,
                            displayReasonId: g = '',
                            filterKey: y = '',
                            filterValue: b = '',
                            filterPos: h = 0,
                        } = t,
                        P = (0, r.makeMetaParams)(1),
                        v = {
                            ...t,
                            objectPosX: n,
                            objectPosY: a,
                            skeletonId: u,
                            mainObjectType: l,
                            mainObjectId: i,
                            tabId: c,
                            tabPos: s,
                            isTabSelectedByDefault: f,
                            entityPosX: p,
                            entityPosY: d,
                            objectsCount: m,
                            displayReasonId: g,
                            filterKey: y,
                            filterValue: b,
                            filterPos: h,
                            _meta: P,
                        };
                    e.trackEvent('LandingBlock.Showed', v);
                }),
                (t.lW = function (e, t) {
                    let {
                            pageStyle: n = o.PageStyles.Fullscreen,
                            pagePlacement: a = o.PagePlacements.Fullscreen,
                            skeletonId: u = '',
                            mainObjectType: l = o.DomainObjectType.NonApplicable,
                            mainObjectId: i = '',
                            objectPosX: c = 0,
                            objectPosY: s = 0,
                            tabId: f = '',
                            tabPos: p = 0,
                            isTabSelectedByDefault: d = !1,
                            entityPosX: m = 1,
                            entityPosY: g = 1,
                            objectsCount: y = 0,
                            displayReasonId: b = '',
                            filterKey: h = '',
                            filterValue: P = '',
                            filterPos: v = 0,
                        } = t,
                        k = (0, r.makeMetaParams)(2),
                        E = {
                            ...t,
                            pageStyle: n,
                            pagePlacement: a,
                            skeletonId: u,
                            mainObjectType: l,
                            mainObjectId: i,
                            objectPosX: c,
                            objectPosY: s,
                            tabId: f,
                            tabPos: p,
                            isTabSelectedByDefault: d,
                            entityPosX: m,
                            entityPosY: g,
                            objectsCount: y,
                            displayReasonId: b,
                            filterKey: h,
                            filterValue: P,
                            filterPos: v,
                            _meta: k,
                        };
                    e.trackEvent('LandingBlock.Showed', E);
                }),
                (t.nv = function (e, t) {
                    let {
                            objectPosX: n = 0,
                            objectPosY: a = 0,
                            skeletonId: u = '',
                            mainObjectType: l = o.DomainObjectType.NonApplicable,
                            mainObjectId: i = '',
                            tabId: c = '',
                            tabPos: s = 0,
                            isTabSelectedByDefault: f = !1,
                            entityPosX: p = 1,
                            entityPosY: d = 1,
                            objectsCount: m = 0,
                            displayReasonId: g = '',
                            filterKey: y = '',
                            filterValue: b = '',
                            filterPos: h = 0,
                        } = t,
                        P = (0, r.makeMetaParams)(1),
                        v = {
                            ...t,
                            objectPosX: n,
                            objectPosY: a,
                            skeletonId: u,
                            mainObjectType: l,
                            mainObjectId: i,
                            tabId: c,
                            tabPos: s,
                            isTabSelectedByDefault: f,
                            entityPosX: p,
                            entityPosY: d,
                            objectsCount: m,
                            displayReasonId: g,
                            filterKey: y,
                            filterValue: b,
                            filterPos: h,
                            _meta: P,
                        };
                    e.trackEvent('LandingBlock.Hidden', v);
                }),
                (t.LZ = function (e, t) {
                    let {
                            pageStyle: n = o.PageStyles.Fullscreen,
                            pagePlacement: a = o.PagePlacements.Fullscreen,
                            skeletonId: u = '',
                            mainObjectType: l = o.DomainObjectType.NonApplicable,
                            mainObjectId: i = '',
                            objectPosX: c = 0,
                            objectPosY: s = 0,
                            tabId: f = '',
                            tabPos: p = 0,
                            isTabSelectedByDefault: d = !1,
                            entityPosX: m = 1,
                            entityPosY: g = 1,
                            objectsCount: y = 0,
                            displayReasonId: b = '',
                            filterKey: h = '',
                            filterValue: P = '',
                            filterPos: v = 0,
                        } = t,
                        k = (0, r.makeMetaParams)(2),
                        E = {
                            ...t,
                            pageStyle: n,
                            pagePlacement: a,
                            skeletonId: u,
                            mainObjectType: l,
                            mainObjectId: i,
                            objectPosX: c,
                            objectPosY: s,
                            tabId: f,
                            tabPos: p,
                            isTabSelectedByDefault: d,
                            entityPosX: m,
                            entityPosY: g,
                            objectsCount: y,
                            displayReasonId: b,
                            filterKey: h,
                            filterValue: P,
                            filterPos: v,
                            _meta: k,
                        };
                    e.trackEvent('LandingBlock.Hidden', E);
                }),
                (t.QS = function (e, t) {
                    let {
                            objectPosX: n = 0,
                            objectPosY: a = 0,
                            skeletonId: u = '',
                            mainObjectType: l = o.DomainObjectType.NonApplicable,
                            mainObjectId: i = '',
                            tabId: c = '',
                            tabPos: s = 0,
                            isTabSelectedByDefault: f = !1,
                            entityPosX: p = 1,
                            entityPosY: d = 1,
                            objectsCount: m = 0,
                            displayReasonId: g = '',
                            filterKey: y = '',
                            filterValue: b = '',
                            filterPos: h = 0,
                            deepLink: P = '',
                        } = t,
                        v = (0, r.makeMetaParams)(1),
                        k = {
                            ...t,
                            objectPosX: n,
                            objectPosY: a,
                            skeletonId: u,
                            mainObjectType: l,
                            mainObjectId: i,
                            tabId: c,
                            tabPos: s,
                            isTabSelectedByDefault: f,
                            entityPosX: p,
                            entityPosY: d,
                            objectsCount: m,
                            displayReasonId: g,
                            filterKey: y,
                            filterValue: b,
                            filterPos: h,
                            deepLink: P,
                            _meta: v,
                        };
                    e.trackEvent('LandingBlock.Navigated', k);
                }),
                (t.iF = function (e, t) {
                    let {
                            pageStyle: n = o.PageStyles.Fullscreen,
                            pagePlacement: a = o.PagePlacements.Fullscreen,
                            skeletonId: u = '',
                            mainObjectType: l = o.DomainObjectType.NonApplicable,
                            mainObjectId: i = '',
                            objectPosX: c = 0,
                            objectPosY: s = 0,
                            tabId: f = '',
                            tabPos: p = 0,
                            isTabSelectedByDefault: d = !1,
                            entityPosX: m = 1,
                            entityPosY: g = 1,
                            objectsCount: y = 0,
                            displayReasonId: b = '',
                            filterKey: h = '',
                            filterValue: P = '',
                            filterPos: v = 0,
                            deepLink: k = '',
                        } = t,
                        E = (0, r.makeMetaParams)(2),
                        _ = {
                            ...t,
                            pageStyle: n,
                            pagePlacement: a,
                            skeletonId: u,
                            mainObjectType: l,
                            mainObjectId: i,
                            objectPosX: c,
                            objectPosY: s,
                            tabId: f,
                            tabPos: p,
                            isTabSelectedByDefault: d,
                            entityPosX: m,
                            entityPosY: g,
                            objectsCount: y,
                            displayReasonId: b,
                            filterKey: h,
                            filterValue: P,
                            filterPos: v,
                            deepLink: k,
                            _meta: E,
                        };
                    e.trackEvent('LandingBlock.Navigated', _);
                }),
                (t.er = function (e, t) {
                    let {
                            objectPosX: n = 0,
                            objectPosY: a = 0,
                            skeletonId: u = '',
                            mainObjectType: l = o.DomainObjectType.NonApplicable,
                            mainObjectId: i = '',
                            tabId: c = '',
                            tabPos: s = 0,
                            isTabSelectedByDefault: f = !1,
                            entityPosX: p = 1,
                            entityPosY: d = 1,
                            objectsCount: m = 0,
                            displayReasonId: g = '',
                            filterKey: y = '',
                            filterValue: b = '',
                            filterPos: h = 0,
                        } = t,
                        P = (0, r.makeMetaParams)(1),
                        v = {
                            ...t,
                            objectPosX: n,
                            objectPosY: a,
                            skeletonId: u,
                            mainObjectType: l,
                            mainObjectId: i,
                            tabId: c,
                            tabPos: s,
                            isTabSelectedByDefault: f,
                            entityPosX: p,
                            entityPosY: d,
                            objectsCount: m,
                            displayReasonId: g,
                            filterKey: y,
                            filterValue: b,
                            filterPos: h,
                            _meta: P,
                        };
                    e.trackEvent('LandingBlock.Started', v);
                }),
                (t.h_ = function (e, t) {
                    let {
                            objectPosX: n = 0,
                            objectPosY: a = 0,
                            skeletonId: u = '',
                            mainObjectType: l = o.DomainObjectType.NonApplicable,
                            mainObjectId: i = '',
                            tabId: c = '',
                            tabPos: s = 0,
                            isTabSelectedByDefault: f = !1,
                            entityPosX: p = 1,
                            entityPosY: d = 1,
                            objectsCount: m = 0,
                            displayReasonId: g = '',
                            filterKey: y = '',
                            filterValue: b = '',
                            filterPos: h = 0,
                        } = t,
                        P = (0, r.makeMetaParams)(1),
                        v = {
                            ...t,
                            objectPosX: n,
                            objectPosY: a,
                            skeletonId: u,
                            mainObjectType: l,
                            mainObjectId: i,
                            tabId: c,
                            tabPos: s,
                            isTabSelectedByDefault: f,
                            entityPosX: p,
                            entityPosY: d,
                            objectsCount: m,
                            displayReasonId: g,
                            filterKey: y,
                            filterValue: b,
                            filterPos: h,
                            _meta: P,
                        };
                    e.trackEvent('LandingBlock.ActionPerformed', v);
                }),
                (t.l6 = function (e, t) {
                    let {
                            pageStyle: n = o.PageStyles.Fullscreen,
                            pagePlacement: a = o.PagePlacements.Fullscreen,
                            skeletonId: u = '',
                            mainObjectType: l = o.DomainObjectType.NonApplicable,
                            mainObjectId: i = '',
                            objectPosX: c = 0,
                            objectPosY: s = 0,
                            tabId: f = '',
                            tabPos: p = 0,
                            isTabSelectedByDefault: d = !1,
                            entityPosX: m = 1,
                            entityPosY: g = 1,
                            objectsCount: y = 0,
                            displayReasonId: b = '',
                            filterKey: h = '',
                            filterValue: P = '',
                            filterPos: v = 0,
                        } = t,
                        k = (0, r.makeMetaParams)(2),
                        E = {
                            ...t,
                            pageStyle: n,
                            pagePlacement: a,
                            skeletonId: u,
                            mainObjectType: l,
                            mainObjectId: i,
                            objectPosX: c,
                            objectPosY: s,
                            tabId: f,
                            tabPos: p,
                            isTabSelectedByDefault: d,
                            entityPosX: m,
                            entityPosY: g,
                            objectsCount: y,
                            displayReasonId: b,
                            filterKey: h,
                            filterValue: P,
                            filterPos: v,
                            _meta: k,
                        };
                    e.trackEvent('LandingBlock.ActionPerformed', E);
                }));
            let r = n(26895),
                o = n(36619);
        },
        26895: (e, t) => {
            var n;
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.MiniappConfig = void 0),
                (t.makeMetaParams = function (e) {
                    return { event: { version: e } };
                }),
                (t.createEvgenAnalytics = function (e, t, n) {
                    return {
                        trackEvent: (r, o) => {
                            let a = { ...o, ...t.getGlobalParams(), ...n.getPlatformParams() };
                            e.trackEvent(r, a);
                        },
                    };
                }),
                !(function (e) {
                    ((e.Music = 'music'), (e.NotApplicable = 'not_applicable'));
                })(n || (t.MiniappConfig = n = {})));
        },
        31803: (e, t) => {
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                !(function (e, t) {
                    for (var n in t) Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
                })(t, {
                    DecodeError: function () {
                        return m;
                    },
                    MiddlewareNotFoundError: function () {
                        return h;
                    },
                    MissingStaticPage: function () {
                        return b;
                    },
                    NormalizeError: function () {
                        return g;
                    },
                    PageNotFoundError: function () {
                        return y;
                    },
                    SP: function () {
                        return p;
                    },
                    ST: function () {
                        return d;
                    },
                    WEB_VITALS: function () {
                        return n;
                    },
                    execOnce: function () {
                        return r;
                    },
                    getDisplayName: function () {
                        return i;
                    },
                    getLocationOrigin: function () {
                        return u;
                    },
                    getURL: function () {
                        return l;
                    },
                    isAbsoluteUrl: function () {
                        return a;
                    },
                    isResSent: function () {
                        return c;
                    },
                    loadGetInitialProps: function () {
                        return f;
                    },
                    normalizeRepeatedSlashes: function () {
                        return s;
                    },
                    stringifyError: function () {
                        return P;
                    },
                }));
            let n = ['CLS', 'FCP', 'FID', 'INP', 'LCP', 'TTFB'];
            function r(e) {
                let t,
                    n = !1;
                return function () {
                    for (var r = arguments.length, o = Array(r), a = 0; a < r; a++) o[a] = arguments[a];
                    return (n || ((n = !0), (t = e(...o))), t);
                };
            }
            let o = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
                a = (e) => o.test(e);
            function u() {
                let { protocol: e, hostname: t, port: n } = window.location;
                return e + '//' + t + (n ? ':' + n : '');
            }
            function l() {
                let { href: e } = window.location,
                    t = u();
                return e.substring(t.length);
            }
            function i(e) {
                return 'string' == typeof e ? e : e.displayName || e.name || 'Unknown';
            }
            function c(e) {
                return e.finished || e.headersSent;
            }
            function s(e) {
                let t = e.split('?');
                return t[0].replace(/\\/g, '/').replace(/\/\/+/g, '/') + (t[1] ? '?' + t.slice(1).join('?') : '');
            }
            async function f(e, t) {
                let n = t.res || (t.ctx && t.ctx.res);
                if (!e.getInitialProps) return t.ctx && t.Component ? { pageProps: await f(t.Component, t.ctx) } : {};
                let r = await e.getInitialProps(t);
                if (n && c(n)) return r;
                if (!r)
                    throw Object.defineProperty(
                        Error('"' + i(e) + '.getInitialProps()" should resolve to an object. But found "' + r + '" instead.'),
                        '__NEXT_ERROR_CODE',
                        { value: 'E394', enumerable: !1, configurable: !0 },
                    );
                return r;
            }
            let p = 'undefined' != typeof performance,
                d = p && ['mark', 'measure', 'getEntriesByName'].every((e) => 'function' == typeof performance[e]);
            class m extends Error {}
            class g extends Error {}
            class y extends Error {
                constructor(e) {
                    (super(), (this.code = 'ENOENT'), (this.name = 'PageNotFoundError'), (this.message = 'Cannot find module for page: ' + e));
                }
            }
            class b extends Error {
                constructor(e, t) {
                    (super(), (this.message = 'Failed to load static file for page: ' + e + ' ' + t));
                }
            }
            class h extends Error {
                constructor() {
                    (super(), (this.code = 'ENOENT'), (this.message = 'Cannot find the middleware module'));
                }
            }
            function P(e) {
                return JSON.stringify({ message: e.message, stack: e.stack });
            }
        },
        31935: (e, t) => {
            function n(e) {
                let t = {};
                for (let [n, r] of e.entries()) {
                    let e = t[n];
                    void 0 === e ? (t[n] = r) : Array.isArray(e) ? e.push(r) : (t[n] = [e, r]);
                }
                return t;
            }
            function r(e) {
                return 'string' == typeof e ? e : ('number' != typeof e || isNaN(e)) && 'boolean' != typeof e ? '' : String(e);
            }
            function o(e) {
                let t = new URLSearchParams();
                for (let [n, o] of Object.entries(e))
                    if (Array.isArray(o)) for (let e of o) t.append(n, r(e));
                    else t.set(n, r(o));
                return t;
            }
            function a(e) {
                for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                for (let t of n) {
                    for (let n of t.keys()) e.delete(n);
                    for (let [n, r] of t.entries()) e.append(n, r);
                }
                return e;
            }
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                !(function (e, t) {
                    for (var n in t) Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
                })(t, {
                    assign: function () {
                        return a;
                    },
                    searchParamsToUrlQuery: function () {
                        return n;
                    },
                    urlQueryToSearchParams: function () {
                        return o;
                    },
                }));
        },
        37697: (e, t, n) => {
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                !(function (e, t) {
                    for (var n in t) Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
                })(t, {
                    formatUrl: function () {
                        return a;
                    },
                    formatWithValidation: function () {
                        return l;
                    },
                    urlObjectKeys: function () {
                        return u;
                    },
                }));
            let r = n(78868)._(n(31935)),
                o = /https?|ftp|gopher|file/;
            function a(e) {
                let { auth: t, hostname: n } = e,
                    a = e.protocol || '',
                    u = e.pathname || '',
                    l = e.hash || '',
                    i = e.query || '',
                    c = !1;
                ((t = t ? encodeURIComponent(t).replace(/%3A/i, ':') + '@' : ''),
                    e.host ? (c = t + e.host) : n && ((c = t + (~n.indexOf(':') ? '[' + n + ']' : n)), e.port && (c += ':' + e.port)),
                    i && 'object' == typeof i && (i = String(r.urlQueryToSearchParams(i))));
                let s = e.search || (i && '?' + i) || '';
                return (
                    a && !a.endsWith(':') && (a += ':'),
                    e.slashes || ((!a || o.test(a)) && !1 !== c) ? ((c = '//' + (c || '')), u && '/' !== u[0] && (u = '/' + u)) : c || (c = ''),
                    l && '#' !== l[0] && (l = '#' + l),
                    s && '?' !== s[0] && (s = '?' + s),
                    '' + a + c + (u = u.replace(/[?#]/g, encodeURIComponent)) + (s = s.replace('#', '%23')) + l
                );
            }
            let u = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
            function l(e) {
                return a(e);
            }
        },
        51556: (e, t, n) => {
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'isLocalURL', {
                    enumerable: !0,
                    get: function () {
                        return a;
                    },
                }));
            let r = n(31803),
                o = n(91434);
            function a(e) {
                if (!(0, r.isAbsoluteUrl)(e)) return !0;
                try {
                    let t = (0, r.getLocationOrigin)(),
                        n = new URL(e, t);
                    return n.origin === t && (0, o.hasBasePath)(n.pathname);
                } catch (e) {
                    return !1;
                }
            }
        },
        55050: (e, t, n) => {
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'useMergedRef', {
                    enumerable: !0,
                    get: function () {
                        return o;
                    },
                }));
            let r = n(74631);
            function o(e, t) {
                let n = (0, r.useRef)(null),
                    o = (0, r.useRef)(null);
                return (0, r.useCallback)(
                    (r) => {
                        if (null === r) {
                            let e = n.current;
                            e && ((n.current = null), e());
                            let t = o.current;
                            t && ((o.current = null), t());
                        } else (e && (n.current = a(e, r)), t && (o.current = a(t, r)));
                    },
                    [e, t],
                );
            }
            function a(e, t) {
                if ('function' != typeof e)
                    return (
                        (e.current = t),
                        () => {
                            e.current = null;
                        }
                    );
                {
                    let n = e(t);
                    return 'function' == typeof n ? n : () => e(null);
                }
            }
            ('function' == typeof t.default || ('object' == typeof t.default && null !== t.default)) &&
                void 0 === t.default.__esModule &&
                (Object.defineProperty(t.default, '__esModule', { value: !0 }), Object.assign(t.default, t), (e.exports = t.default));
        },
        58038: (e, t, n) => {
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                !(function (e, t) {
                    for (var n in t) Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
                })(t, {
                    default: function () {
                        return y;
                    },
                    useLinkStatus: function () {
                        return h;
                    },
                }));
            let r = n(78868),
                o = n(25839),
                a = r._(n(74631)),
                u = n(37697),
                l = n(91543),
                i = n(37502),
                c = n(55050),
                s = n(31803),
                f = n(94005);
            n(1978);
            let p = n(52278),
                d = n(51556),
                m = n(1326);
            function g(e) {
                return 'string' == typeof e ? e : (0, u.formatUrl)(e);
            }
            function y(e) {
                let t,
                    n,
                    r,
                    [u, y] = (0, a.useOptimistic)(p.IDLE_LINK_STATUS),
                    h = (0, a.useRef)(null),
                    {
                        href: P,
                        as: v,
                        children: k,
                        prefetch: E = null,
                        passHref: _,
                        replace: O,
                        shallow: N,
                        scroll: j,
                        onClick: M,
                        onMouseEnter: A,
                        onTouchStart: T,
                        legacyBehavior: L = !1,
                        onNavigate: S,
                        ref: C,
                        unstable_dynamicOnHover: F,
                        ...x
                    } = e;
                ((t = k), L && ('string' == typeof t || 'number' == typeof t) && (t = (0, o.jsx)('a', { children: t })));
                let D = a.default.useContext(l.AppRouterContext),
                    U = !1 !== E,
                    w = null === E || 'auto' === E ? i.PrefetchKind.AUTO : i.PrefetchKind.FULL,
                    { href: R, as: B } = a.default.useMemo(() => {
                        let e = g(P);
                        return { href: e, as: v ? g(v) : e };
                    }, [P, v]);
                L && (n = a.default.Children.only(t));
                let I = L ? n && 'object' == typeof n && n.ref : C,
                    K = a.default.useCallback(
                        (e) => (
                            null !== D && (h.current = (0, p.mountLinkInstance)(e, R, D, w, U, y)),
                            () => {
                                (h.current && ((0, p.unmountLinkForCurrentNavigation)(h.current), (h.current = null)), (0, p.unmountPrefetchableInstance)(e));
                            }
                        ),
                        [U, R, D, w, y],
                    ),
                    z = {
                        ref: (0, c.useMergedRef)(K, I),
                        onClick(e) {
                            (L || 'function' != typeof M || M(e),
                                L && n.props && 'function' == typeof n.props.onClick && n.props.onClick(e),
                                D &&
                                    (e.defaultPrevented ||
                                        (function (e, t, n, r, o, u, l) {
                                            let { nodeName: i } = e.currentTarget;
                                            if (
                                                !(
                                                    ('A' === i.toUpperCase() &&
                                                        (function (e) {
                                                            let t = e.currentTarget.getAttribute('target');
                                                            return (
                                                                (t && '_self' !== t) ||
                                                                e.metaKey ||
                                                                e.ctrlKey ||
                                                                e.shiftKey ||
                                                                e.altKey ||
                                                                (e.nativeEvent && 2 === e.nativeEvent.which)
                                                            );
                                                        })(e)) ||
                                                    e.currentTarget.hasAttribute('download')
                                                )
                                            ) {
                                                if (!(0, d.isLocalURL)(t)) {
                                                    o && (e.preventDefault(), location.replace(t));
                                                    return;
                                                }
                                                if ((e.preventDefault(), l)) {
                                                    let e = !1;
                                                    if (
                                                        (l({
                                                            preventDefault: () => {
                                                                e = !0;
                                                            },
                                                        }),
                                                        e)
                                                    )
                                                        return;
                                                }
                                                a.default.startTransition(() => {
                                                    (0, m.dispatchNavigateAction)(n || t, o ? 'replace' : 'push', null == u || u, r.current);
                                                });
                                            }
                                        })(e, R, B, h, O, j, S)));
                        },
                        onMouseEnter(e) {
                            (L || 'function' != typeof A || A(e),
                                L && n.props && 'function' == typeof n.props.onMouseEnter && n.props.onMouseEnter(e),
                                D && U && (0, p.onNavigationIntent)(e.currentTarget, !0 === F));
                        },
                        onTouchStart: function (e) {
                            (L || 'function' != typeof T || T(e),
                                L && n.props && 'function' == typeof n.props.onTouchStart && n.props.onTouchStart(e),
                                D && U && (0, p.onNavigationIntent)(e.currentTarget, !0 === F));
                        },
                    };
                return (
                    (0, s.isAbsoluteUrl)(B) ? (z.href = B) : (L && !_ && ('a' !== n.type || 'href' in n.props)) || (z.href = (0, f.addBasePath)(B)),
                    (r = L ? a.default.cloneElement(n, z) : (0, o.jsx)('a', { ...x, ...z, children: t })),
                    (0, o.jsx)(b.Provider, { value: u, children: r })
                );
            }
            n(82848);
            let b = (0, a.createContext)(p.IDLE_LINK_STATUS),
                h = () => (0, a.useContext)(b);
            ('function' == typeof t.default || ('object' == typeof t.default && null !== t.default)) &&
                void 0 === t.default.__esModule &&
                (Object.defineProperty(t.default, '__esModule', { value: !0 }), Object.assign(t.default, t), (e.exports = t.default));
        },
        82848: (e, t) => {
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'errorOnce', {
                    enumerable: !0,
                    get: function () {
                        return n;
                    },
                }));
            let n = (e) => {};
        },
    },
]);
