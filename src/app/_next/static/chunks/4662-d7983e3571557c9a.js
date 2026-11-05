(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2494, 2824, 4662],
    {
        245: (e, t, r) => {
            'use strict';
            r.d(t, { N: () => o });
            var n = r(53548),
                i = r(59791);
            let o = () => {
                let e = (0, n.useContext)(i.I);
                if (!e) throw Error('AnalyticsProvider is required');
                return e;
            };
        },
        4653: (e, t, r) => {
            'use strict';
            r.d(t, { U: () => s });
            var n = r(95982),
                i = Object.defineProperty,
                o = (e, t, r) => (
                    ((e, t, r) => (t in e ? i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r)))(e, 'symbol' != typeof t ? t + '' : t, r),
                    r
                );
            class s {
                constructor({ brandConfig: e, enableWideLanguageSelectWithBrandLangs: t }) {
                    (o(this, 'brandLangs'),
                        o(this, 'brandDefaultLang'),
                        o(this, 'regionLangs'),
                        o(this, 'enableWideLanguageSelectWithBrandLangs'),
                        (this.brandLangs = e.langs),
                        (this.brandDefaultLang = e.defaultLang),
                        (this.regionLangs = e.regionLangs),
                        (this.enableWideLanguageSelectWithBrandLangs = t));
                }
                static parseAcceptLanguage(e) {
                    return n.parse(e).map(({ code: e }) => e);
                }
                getLang({ regionIsoName: e, urlLang: t, cookieLang: r, acceptLangs: n }) {
                    var i, o, s;
                    let a = e ? (null == (i = this.regionLangs) ? void 0 : i[e]) : void 0,
                        l = this.enableWideLanguageSelectWithBrandLangs ? this.brandLangs : null != (o = null == a ? void 0 : a.langs) ? o : this.brandLangs,
                        u = null != (s = null == a ? void 0 : a.defaultLang) ? s : this.brandDefaultLang;
                    return this.selectLang({ supportedLangs: l, defaultLang: u, urlLang: t, cookieLang: r, acceptLangs: n });
                }
                intersect(e, t) {
                    let r = new Set(t);
                    return e.filter((e) => r.has(e));
                }
                selectLang({ supportedLangs: e, defaultLang: t, urlLang: r, cookieLang: n, acceptLangs: i }) {
                    if ('string' == typeof r && e.includes(r)) return r;
                    let o = null != i ? i : [],
                        s = n ? [n, ...o] : o,
                        a = this.intersect(s, e)[0];
                    return void 0 !== a ? a : t;
                }
            }
        },
        7695: (e, t, r) => {
            'use strict';
            r.d(t, { Ve: () => s, Vn: () => i, p6: () => o, w: () => n });
            let n = '',
                i = 0,
                o = !1,
                s = Object.freeze({ tabId: n, tabPos: 0, isTabSelectedByDefault: !1 });
        },
        7833: (e, t, r) => {
            'use strict';
            r.d(t, { B: () => u });
            var n = r(88800),
                i = r(53548),
                o = r(63582),
                s = r(99875),
                a = r(66109),
                l = r(245);
            let u = (0, o.B)(
                { kind: 'provider', requiredProps: ['objectType', 'objectId', 'objectPosX', 'objectPosY'], pendingProps: ['objectId'], scope: 'object' },
                ({ children: e, objectId: t, objectPosX: r, objectPosY: o, objectType: u }) => {
                    let c = (0, l.N)(),
                        d = (0, i.useContext)(s.p)?.loadedSession,
                        f = [u, t, r, o].join(':'),
                        [p, h] = (0, i.useState)(() => ({ client: c, identity: f, blockSession: d, viewSession: c.createBlockViewSession() }));
                    (p.client !== c || p.identity !== f || p.blockSession !== d) &&
                        h({ client: c, identity: f, blockSession: d, viewSession: c.createBlockViewSession() });
                    let v = (0, i.useMemo)(
                        () => ({ activeViewSession: null, scope: { objectId: t, objectPosX: r, objectPosY: o, objectType: u }, viewSession: p.viewSession }),
                        [t, r, o, u, p.viewSession],
                    );
                    return (0, n.jsx)(a.l, { value: v, children: e });
                },
            );
        },
        12389: (e, t, r) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                !(function (e, t) {
                    for (var r in t) Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
                })(t, {
                    default: function () {
                        return g;
                    },
                    useLinkStatus: function () {
                        return b;
                    },
                }));
            let n = r(28854),
                i = r(88800),
                o = n._(r(53548)),
                s = r(74428),
                a = r(92746),
                l = r(7733),
                u = r(13985),
                c = r(20498),
                d = r(13872);
            r(4115);
            let f = r(53437),
                p = r(87013),
                h = r(48985);
            function v(e) {
                return 'string' == typeof e ? e : (0, s.formatUrl)(e);
            }
            function g(e) {
                let t,
                    r,
                    n,
                    [s, g] = (0, o.useOptimistic)(f.IDLE_LINK_STATUS),
                    b = (0, o.useRef)(null),
                    {
                        href: m,
                        as: w,
                        children: O,
                        prefetch: C = null,
                        passHref: I,
                        replace: E,
                        shallow: S,
                        scroll: j,
                        onClick: k,
                        onMouseEnter: L,
                        onTouchStart: T,
                        legacyBehavior: x = !1,
                        onNavigate: A,
                        ref: _,
                        unstable_dynamicOnHover: N,
                        ...P
                    } = e;
                ((t = O), x && ('string' == typeof t || 'number' == typeof t) && (t = (0, i.jsx)('a', { children: t })));
                let R = o.default.useContext(a.AppRouterContext),
                    M = !1 !== C,
                    D = null === C || 'auto' === C ? l.PrefetchKind.AUTO : l.PrefetchKind.FULL,
                    { href: B, as: U } = o.default.useMemo(() => {
                        let e = v(m);
                        return { href: e, as: w ? v(w) : e };
                    }, [m, w]);
                x && (r = o.default.Children.only(t));
                let F = x ? r && 'object' == typeof r && r.ref : _,
                    V = o.default.useCallback(
                        (e) => (
                            null !== R && (b.current = (0, f.mountLinkInstance)(e, B, R, D, M, g)),
                            () => {
                                (b.current && ((0, f.unmountLinkForCurrentNavigation)(b.current), (b.current = null)), (0, f.unmountPrefetchableInstance)(e));
                            }
                        ),
                        [M, B, R, D, g],
                    ),
                    G = {
                        ref: (0, u.useMergedRef)(V, F),
                        onClick(e) {
                            (x || 'function' != typeof k || k(e),
                                x && r.props && 'function' == typeof r.props.onClick && r.props.onClick(e),
                                R &&
                                    (e.defaultPrevented ||
                                        (function (e, t, r, n, i, s, a) {
                                            let { nodeName: l } = e.currentTarget;
                                            if (
                                                !(
                                                    ('A' === l.toUpperCase() &&
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
                                                if (!(0, p.isLocalURL)(t)) {
                                                    i && (e.preventDefault(), location.replace(t));
                                                    return;
                                                }
                                                if ((e.preventDefault(), a)) {
                                                    let e = !1;
                                                    if (
                                                        (a({
                                                            preventDefault: () => {
                                                                e = !0;
                                                            },
                                                        }),
                                                        e)
                                                    )
                                                        return;
                                                }
                                                o.default.startTransition(() => {
                                                    (0, h.dispatchNavigateAction)(r || t, i ? 'replace' : 'push', null == s || s, n.current);
                                                });
                                            }
                                        })(e, B, U, b, E, j, A)));
                        },
                        onMouseEnter(e) {
                            (x || 'function' != typeof L || L(e),
                                x && r.props && 'function' == typeof r.props.onMouseEnter && r.props.onMouseEnter(e),
                                R && M && (0, f.onNavigationIntent)(e.currentTarget, !0 === N));
                        },
                        onTouchStart: function (e) {
                            (x || 'function' != typeof T || T(e),
                                x && r.props && 'function' == typeof r.props.onTouchStart && r.props.onTouchStart(e),
                                R && M && (0, f.onNavigationIntent)(e.currentTarget, !0 === N));
                        },
                    };
                return (
                    (0, c.isAbsoluteUrl)(U) ? (G.href = U) : (x && !I && ('a' !== r.type || 'href' in r.props)) || (G.href = (0, d.addBasePath)(U)),
                    (n = x ? o.default.cloneElement(r, G) : (0, i.jsx)('a', { ...P, ...G, children: t })),
                    (0, i.jsx)(y.Provider, { value: s, children: n })
                );
            }
            r(36155);
            let y = (0, o.createContext)(f.IDLE_LINK_STATUS),
                b = () => (0, o.useContext)(y);
            ('function' == typeof t.default || ('object' == typeof t.default && null !== t.default)) &&
                void 0 === t.default.__esModule &&
                (Object.defineProperty(t.default, '__esModule', { value: !0 }), Object.assign(t.default, t), (e.exports = t.default));
        },
        13985: (e, t, r) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'useMergedRef', {
                    enumerable: !0,
                    get: function () {
                        return i;
                    },
                }));
            let n = r(53548);
            function i(e, t) {
                let r = (0, n.useRef)(null),
                    i = (0, n.useRef)(null);
                return (0, n.useCallback)(
                    (n) => {
                        if (null === n) {
                            let e = r.current;
                            e && ((r.current = null), e());
                            let t = i.current;
                            t && ((i.current = null), t());
                        } else (e && (r.current = o(e, n)), t && (i.current = o(t, n)));
                    },
                    [e, t],
                );
            }
            function o(e, t) {
                if ('function' != typeof e)
                    return (
                        (e.current = t),
                        () => {
                            e.current = null;
                        }
                    );
                {
                    let r = e(t);
                    return 'function' == typeof r ? r : () => e(null);
                }
            }
            ('function' == typeof t.default || ('object' == typeof t.default && null !== t.default)) &&
                void 0 === t.default.__esModule &&
                (Object.defineProperty(t.default, '__esModule', { value: !0 }), Object.assign(t.default, t), (e.exports = t.default));
        },
        14567: (e, t) => {
            (e.exports = function (e, t, n, i) {
                return JSON.stringify(e, r(t, i), n);
            }).getSerialize = r;
            function r(e, t) {
                var r = [],
                    n = [];
                return (
                    null == t &&
                        (t = function (e, t) {
                            return r[0] === t ? '[Circular ~]' : '[Circular ~.' + n.slice(0, r.indexOf(t)).join('.') + ']';
                        }),
                    function (i, o) {
                        if (r.length > 0) {
                            var s = r.indexOf(this);
                            (~s ? r.splice(s + 1) : r.push(this), ~s ? n.splice(s, 1 / 0, i) : n.push(i), ~r.indexOf(o) && (o = t.call(this, i, o)));
                        } else r.push(o);
                        return null == e ? o : e.call(this, i, o);
                    }
                );
            }
        },
        14668: (e, t, r) => {
            'use strict';
            ((t.__ = function (e, t) {
                let r = (0, n.makeMetaParams)(1),
                    i = { ...t, pageId: 'artist_concerts_screen', pageType: 'listing', _meta: r };
                e.trackEvent('ArtistConcerts.Opened', i);
            }),
                (t.pe = function (e, t) {
                    let r = (0, n.makeMetaParams)(1),
                        i = { ...t, pageId: 'artist_concerts_screen', pageType: 'listing', _meta: r };
                    e.trackEvent('ArtistConcerts.Closed', i);
                }),
                (t.Z4 = function (e, t) {
                    let { objectPos: r = 1 } = t,
                        i = (0, n.makeMetaParams)(1),
                        o = { ...t, objectPos: r, pageId: 'artist_concerts_screen', pageType: 'listing', objectType: 'concert', _meta: i };
                    e.trackEvent('ArtistConcerts.Concert.Showed', o);
                }),
                (t.mh = function (e, t) {
                    let { objectPos: r = 1 } = t,
                        i = (0, n.makeMetaParams)(1),
                        o = {
                            ...t,
                            objectPos: r,
                            pageId: 'artist_concerts_screen',
                            pageType: 'listing',
                            objectType: 'concert',
                            from: 'artist_concerts_screen',
                            _meta: i,
                        };
                    e.trackEvent('ArtistConcerts.Concert.Navigated', o);
                }));
            let n = r(59203);
        },
        14965: (e, t, r) => {
            'use strict';
            r.d(t, { t: () => n });
            class n extends Error {
                name = 'BaseException';
                message;
                code;
                data;
                stack;
                constructor(e, t = {}) {
                    let { code: r = 'E_INTERNAL', data: i = {}, ...o } = t,
                        s = e || 'Internal error';
                    (super(s, o), (this.message = s), (this.code = r), (this.data = i), (this.stack = Error(s).stack), Object.setPrototypeOf(this, n.prototype));
                }
            }
        },
        20498: (e, t) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                !(function (e, t) {
                    for (var r in t) Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
                })(t, {
                    DecodeError: function () {
                        return h;
                    },
                    MiddlewareNotFoundError: function () {
                        return b;
                    },
                    MissingStaticPage: function () {
                        return y;
                    },
                    NormalizeError: function () {
                        return v;
                    },
                    PageNotFoundError: function () {
                        return g;
                    },
                    SP: function () {
                        return f;
                    },
                    ST: function () {
                        return p;
                    },
                    WEB_VITALS: function () {
                        return r;
                    },
                    execOnce: function () {
                        return n;
                    },
                    getDisplayName: function () {
                        return l;
                    },
                    getLocationOrigin: function () {
                        return s;
                    },
                    getURL: function () {
                        return a;
                    },
                    isAbsoluteUrl: function () {
                        return o;
                    },
                    isResSent: function () {
                        return u;
                    },
                    loadGetInitialProps: function () {
                        return d;
                    },
                    normalizeRepeatedSlashes: function () {
                        return c;
                    },
                    stringifyError: function () {
                        return m;
                    },
                }));
            let r = ['CLS', 'FCP', 'FID', 'INP', 'LCP', 'TTFB'];
            function n(e) {
                let t,
                    r = !1;
                return function () {
                    for (var n = arguments.length, i = Array(n), o = 0; o < n; o++) i[o] = arguments[o];
                    return (r || ((r = !0), (t = e(...i))), t);
                };
            }
            let i = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
                o = (e) => i.test(e);
            function s() {
                let { protocol: e, hostname: t, port: r } = window.location;
                return e + '//' + t + (r ? ':' + r : '');
            }
            function a() {
                let { href: e } = window.location,
                    t = s();
                return e.substring(t.length);
            }
            function l(e) {
                return 'string' == typeof e ? e : e.displayName || e.name || 'Unknown';
            }
            function u(e) {
                return e.finished || e.headersSent;
            }
            function c(e) {
                let t = e.split('?');
                return t[0].replace(/\\/g, '/').replace(/\/\/+/g, '/') + (t[1] ? '?' + t.slice(1).join('?') : '');
            }
            async function d(e, t) {
                let r = t.res || (t.ctx && t.ctx.res);
                if (!e.getInitialProps) return t.ctx && t.Component ? { pageProps: await d(t.Component, t.ctx) } : {};
                let n = await e.getInitialProps(t);
                if (r && u(r)) return n;
                if (!n)
                    throw Object.defineProperty(
                        Error('"' + l(e) + '.getInitialProps()" should resolve to an object. But found "' + n + '" instead.'),
                        '__NEXT_ERROR_CODE',
                        { value: 'E394', enumerable: !1, configurable: !0 },
                    );
                return n;
            }
            let f = 'undefined' != typeof performance,
                p = f && ['mark', 'measure', 'getEntriesByName'].every((e) => 'function' == typeof performance[e]);
            class h extends Error {}
            class v extends Error {}
            class g extends Error {
                constructor(e) {
                    (super(), (this.code = 'ENOENT'), (this.name = 'PageNotFoundError'), (this.message = 'Cannot find module for page: ' + e));
                }
            }
            class y extends Error {
                constructor(e, t) {
                    (super(), (this.message = 'Failed to load static file for page: ' + e + ' ' + t));
                }
            }
            class b extends Error {
                constructor() {
                    (super(), (this.code = 'ENOENT'), (this.message = 'Cannot find the middleware module'));
                }
            }
            function m(e) {
                return JSON.stringify({ message: e.message, stack: e.stack });
            }
        },
        22681: (e, t, r) => {
            'use strict';
            r.d(t, { w: () => c });
            var n = r(53548),
                i = r(99875),
                o = r(36236),
                s = r(66109),
                a = r(53534),
                l = r(79045),
                u = r(7695);
            let c = () => {
                let e = (0, n.useContext)(a.k),
                    t = e?.isReady ? e.scope : null,
                    r = (0, n.useContext)(l.F) ?? u.Ve,
                    c = (0, n.useContext)(o.S),
                    d = (0, n.useContext)(i.p),
                    f = (0, n.useContext)(s.l),
                    p = (0, n.useMemo)(() => (t && d ? { block: d.scope, filter: c, object: f?.scope ?? null, screen: t, tab: r } : null), [d, c, f, t, r]);
                return (0, n.useMemo)(() => (d && p ? { block: d, object: f, snapshot: p } : null), [d, f, p]);
            };
        },
        23877: (e, t, r) => {
            'use strict';
            var n;
            (r.d(t, { Q: () => i, c: () => n }),
                (function (e) {
                    ((e[(e.ERROR = 10)] = 'ERROR'),
                        (e[(e.WARNING = 20)] = 'WARNING'),
                        (e[(e.INFO = 30)] = 'INFO'),
                        (e[(e.DEBUG = 40)] = 'DEBUG'),
                        (e[(e.TRACE = 50)] = 'TRACE'));
                })(n || (n = {})));
            let i = { [n.ERROR]: 'error', [n.WARNING]: 'warn', [n.INFO]: 'info', [n.DEBUG]: 'debug', [n.TRACE]: 'trace' };
        },
        24114: (e, t, r) => {
            'use strict';
            var n;
            ((t.HB = function (e, t) {
                let { objectsCount: r = 1, objectPosX: n = 1, objectPosY: o = 1 } = t,
                    s = (0, i.makeMetaParams)(2),
                    a = {
                        ...t,
                        objectsCount: r,
                        objectPosX: n,
                        objectPosY: o,
                        pageId: 'artist_screen',
                        pageType: 'object',
                        entityType: 'carousel',
                        entityId: 'concerts',
                        objectsType: 'concert',
                        _meta: s,
                    };
                e.trackEvent('Artist.Concerts.Showed', a);
            }),
                (t.U6 = function (e, t) {
                    let { objectsCount: r = 1, objectPosX: n = 1, objectPosY: o = 1 } = t,
                        s = (0, i.makeMetaParams)(2),
                        a = {
                            ...t,
                            objectsCount: r,
                            objectPosX: n,
                            objectPosY: o,
                            pageId: 'artist_screen',
                            pageType: 'object',
                            entityType: 'carousel',
                            entityId: 'concerts',
                            objectsType: 'concert',
                            from: 'artist_screen',
                            _meta: s,
                        };
                    e.trackEvent('Artist.Concerts.Navigated', a);
                }));
            let i = r(59203);
            (n || (n = {})).ConcertScreen = 'concert_screen';
        },
        35606: (e, t, r) => {
            'use strict';
            r.d(t, { m: () => n });
            let n = (0, r(53548).createContext)(void 0);
        },
        36155: (e, t) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'errorOnce', {
                    enumerable: !0,
                    get: function () {
                        return r;
                    },
                }));
            let r = (e) => {};
        },
        36236: (e, t, r) => {
            'use strict';
            r.d(t, { S: () => n });
            let n = (0, r(53548).createContext)(null);
        },
        37523: (e, t, r) => {
            'use strict';
            r.d(t, { F: () => c });
            var n = r(88800),
                i = r(53548),
                o = r(63582),
                s = r(53534),
                a = r(99875),
                l = r(245);
            let u = (e, t, r) => {
                    let n = e.createBlockViewSession(),
                        i = !1;
                    return { claimLoadedSession: () => (i ? null : ((i = !0), n)), client: e, identity: t, loadedSession: n, screenSession: r };
                },
                c = (0, o.B)(
                    { kind: 'provider', requiredProps: ['blockId', 'blockType', 'blockPosX', 'blockPosY', 'objectsCount'], scope: 'block' },
                    ({ blockId: e, blockIdForFrom: t, blockPosX: r, blockPosY: o, blockType: c, children: d, objectsCount: f }) => {
                        let p = (0, l.N)(),
                            h = (0, i.useContext)(s.k)?.session,
                            v = [e, c, r, o].join(':'),
                            [g, y] = (0, i.useState)(() => u(p, v, h));
                        (g.client !== p || g.identity !== v || g.screenSession !== h) && y(u(p, v, h));
                        let b = (0, i.useMemo)(
                            () => ({
                                claimLoadedSession: g.claimLoadedSession,
                                loadedSession: g.loadedSession,
                                scope: { blockId: e, blockIdForFrom: t, blockPosX: r, blockPosY: o, blockType: c, objectsCount: f },
                            }),
                            [e, t, r, o, c, f, g.claimLoadedSession, g.loadedSession],
                        );
                        return (0, n.jsx)(a.p, { value: b, children: d });
                    },
                );
        },
        42824: (e, t, r) => {
            'use strict';
            (r.d(t, { s: () => O }), r(4653));
            function n(e, t, r) {
                return ((t = s(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e);
            }
            function i(e, t) {
                return (
                    (function (e) {
                        if (Array.isArray(e)) return e;
                    })(e) ||
                    (function (e, t) {
                        var r = null == e ? null : ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                        if (null != r) {
                            var n,
                                i,
                                o,
                                s,
                                a = [],
                                l = !0,
                                u = !1;
                            try {
                                if (((o = (r = r.call(e)).next), 0 === t)) {
                                    if (Object(r) !== r) return;
                                    l = !1;
                                } else for (; !(l = (n = o.call(r)).done) && (a.push(n.value), a.length !== t); l = !0);
                            } catch (e) {
                                ((u = !0), (i = e));
                            } finally {
                                try {
                                    if (!l && null != r.return && ((s = r.return()), Object(s) !== s)) return;
                                } finally {
                                    if (u) throw i;
                                }
                            }
                            return a;
                        }
                    })(e, t) ||
                    (function (e, t) {
                        if (e) {
                            if ('string' == typeof e) return o(e, t);
                            var r = Object.prototype.toString.call(e).slice(8, -1);
                            if (('Object' === r && e.constructor && (r = e.constructor.name), 'Map' === r || 'Set' === r)) return Array.from(e);
                            if ('Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return o(e, t);
                        }
                    })(e, t) ||
                    (function () {
                        throw TypeError(
                            'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                        );
                    })()
                );
            }
            function o(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
                return n;
            }
            function s(e) {
                var t = (function (e, t) {
                    if ('object' != typeof e || null === e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(e, t || 'default');
                        if ('object' != typeof n) return n;
                        throw TypeError('@@toPrimitive must return a primitive value.');
                    }
                    return ('string' === t ? String : Number)(e);
                })(e, 'string');
                return 'symbol' == typeof t ? t : String(t);
            }
            function a(e, t) {
                var r,
                    n,
                    i = u(e, t, 'get');
                return ((r = e), (n = i).get ? n.get.call(r) : n.value);
            }
            function l(e, t, r) {
                var n = u(e, t, 'set');
                return (
                    (function (e, t, r) {
                        if (t.set) t.set.call(e, r);
                        else {
                            if (!t.writable) throw TypeError('attempted to set read only private field');
                            t.value = r;
                        }
                    })(e, n, r),
                    r
                );
            }
            function u(e, t, r) {
                if (!t.has(e)) throw TypeError('attempted to ' + r + ' private field on non-instance');
                return t.get(e);
            }
            function c(e, t, r) {
                if (!t.has(e)) throw TypeError('attempted to get private field on non-instance');
                return r;
            }
            function d(e, t) {
                if (t.has(e)) throw TypeError('Cannot initialize the same private elements twice on an object');
            }
            function f(e, t, r) {
                (d(e, t), t.set(e, r));
            }
            function p(e, t) {
                (d(e, t), t.add(e));
            }
            var h = [
                ' daum[ /]',
                ' deusu/',
                ' yadirectfetcher',
                '(?:^| )site',
                '(?:^|[^g])news',
                '@[a-z]',
                '\\(at\\)[a-z]',
                '\\(github\\.com/',
                '\\[at\\][a-z]',
                '^12345',
                '^<',
                '^[\\w \\.\\-\\(\\)]+(/v?\\d+(\\.\\d+)?(\\.\\d{1,10})?)?$',
                '^[^ ]{50,}$',
                '^active',
                '^ad muncher',
                '^amaya',
                '^anglesharp/',
                '^anonymous',
                '^avsdevicesdk/',
                '^axios/',
                '^bidtellect/',
                '^biglotron',
                '^btwebclient/',
                '^castro',
                '^clamav[ /]',
                '^client/',
                '^cobweb/',
                '^coccoc',
                '^custom',
                '^ddg[_-]android',
                '^discourse',
                '^dispatch/\\d',
                '^downcast/',
                '^duckduckgo',
                '^facebook',
                '^fdm[ /]\\d',
                '^getright/',
                '^gozilla/',
                '^hatena',
                '^hobbit',
                '^hotzonu',
                '^hwcdn/',
                '^jeode/',
                '^jetty/',
                '^jigsaw',
                '^linkdex',
                '^lwp[-: ]',
                '^metauri',
                '^microsoft bits',
                '^movabletype',
                '^mozilla/\\d\\.\\d \\(compatible;?\\)$',
                '^mozilla/\\d\\.\\d \\w*$',
                '^navermailapp',
                '^netsurf',
                '^offline explorer',
                '^php',
                '^postman',
                '^postrank',
                '^python',
                '^read',
                '^reed',
                '^restsharp/',
                '^snapchat',
                '^space bison',
                '^svn',
                '^swcd ',
                '^taringa',
                '^test certificate info',
                '^thumbor/',
                '^tumblr/',
                '^user-agent:mozilla',
                '^valid',
                '^venus/fedoraplanet',
                '^w3c',
                '^webbandit/',
                '^webcopier',
                '^wget',
                '^whatsapp',
                '^xenu link sleuth',
                '^yahoo',
                '^yandex',
                '^zdm/\\d',
                '^zoom marketplace/',
                '^{{.*}}$',
                'adbeat\\.com',
                'appinsights',
                'archive',
                'ask jeeves/teoma',
                'bit\\.ly/',
                'bluecoat drtr',
                'bot',
                'browsex',
                'burpcollaborator',
                'capture',
                'catch',
                'check',
                'chrome-lighthouse',
                'chromeframe',
                'cloud',
                'crawl',
                'cryptoapi',
                'dareboost',
                'datanyze',
                'dataprovider',
                'dejaclick',
                'dmbrowser',
                'download',
                'evc-batch/',
                'feed',
                'firephp',
                'freesafeip',
                'gomezagent',
                'google',
                'headlesschrome/',
                'http',
                'httrack',
                'hubspot marketing grader',
                'hydra',
                'ibisbrowser',
                'images',
                'inspect',
                'iplabel',
                'ips-agent',
                'java',
                'library',
                'mail\\.ru/',
                'manager',
                'monitor',
                'morningscore/',
                'neustar wpm',
                'nutch',
                'offbyone',
                'optimize',
                'pageburst',
                'pagespeed',
                'perl',
                'phantom',
                'pingdom',
                'powermarks',
                'preview',
                'proxy',
                'ptst[ /]\\d',
                'reader',
                'rexx;',
                'rigor',
                'rss',
                'scan',
                'scrape',
                'search',
                'serp ?reputation ?management',
                'server',
                'sogou',
                'sparkler/',
                'speedcurve',
                'spider',
                'splash',
                'statuscake',
                'stumbleupon\\.com',
                'supercleaner',
                'synapse',
                'synthetic',
                'torrent',
                'tracemyfile',
                'transcoder',
                'trendsmapresolver',
                'twingly recon',
                'url',
                'virtuoso',
                'wappalyzer',
                'webglance',
                'webkit2png',
                'websitemetadataretriever',
                'whatcms/',
                'wordpress',
                'zgrab',
            ];
            !(function (e) {
                try {
                    RegExp('(?<! cu)bot').test('dangerbot');
                } catch (t) {
                    return e;
                }
                [
                    ['bot', '(?<! cu)bot'],
                    ['google', '(?<! (?:channel/|google/))google(?!(app|/google| pixel))'],
                    ['http', '(?<!(?:lib))http'],
                    ['java', 'java(?!;)'],
                    ['search', '(?<! ya(?:yandex)?)search'],
                ].forEach(function (t) {
                    var r = i(t, 2),
                        n = r[0],
                        o = r[1],
                        s = e.lastIndexOf(n);
                    ~s && e.splice(s, 1, o);
                });
            })(h);
            var v = new WeakMap(),
                g = new WeakMap(),
                y = new WeakSet(),
                b = new WeakSet();
            function m() {
                l(this, g, RegExp(a(this, v).join('|'), 'i'));
            }
            function w(e) {
                return a(this, v).indexOf(e.toLowerCase());
            }
            new ((function () {
                var e;
                function t(e) {
                    var r = this;
                    if (!(this instanceof t)) throw TypeError('Cannot call a class as a function');
                    return (
                        p(this, b),
                        p(this, y),
                        f(this, v, { writable: !0, value: void 0 }),
                        f(this, g, { writable: !0, value: void 0 }),
                        l(this, v, e || h.slice()),
                        c(this, y, m).call(this),
                        Object.defineProperties(
                            function (e) {
                                return r.test(e);
                            },
                            Object.entries(Object.getOwnPropertyDescriptors(t.prototype)).reduce(function (e, t) {
                                var o = i(t, 2),
                                    s = o[0],
                                    a = o[1];
                                return (
                                    'function' == typeof a.value && Object.assign(e, n({}, s, { value: r[s].bind(r) })),
                                    'function' == typeof a.get &&
                                        Object.assign(
                                            e,
                                            n({}, s, {
                                                get: function () {
                                                    return r[s];
                                                },
                                            }),
                                        ),
                                    e
                                );
                            }, {}),
                        )
                    );
                }
                return (
                    (e = [
                        {
                            key: 'pattern',
                            get: function () {
                                return new RegExp(a(this, g));
                            },
                        },
                        {
                            key: 'test',
                            value: function (e) {
                                return !!e && a(this, g).test(e);
                            },
                        },
                        {
                            key: 'find',
                            value: function () {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '',
                                    t = e.match(a(this, g));
                                return t && t[0];
                            },
                        },
                        {
                            key: 'matches',
                            value: function () {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '';
                                return a(this, v).filter(function (t) {
                                    return RegExp(t, 'i').test(e);
                                });
                            },
                        },
                        {
                            key: 'clear',
                            value: function () {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '';
                                this.exclude(this.matches(e));
                            },
                        },
                        {
                            key: 'extend',
                            value: function () {
                                var e = this,
                                    t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                                ([].push.apply(
                                    a(this, v),
                                    t
                                        .filter(function (t) {
                                            return -1 === c(e, b, w).call(e, t);
                                        })
                                        .map(function (e) {
                                            return e.toLowerCase();
                                        }),
                                ),
                                    c(this, y, m).call(this));
                            },
                        },
                        {
                            key: 'exclude',
                            value: function () {
                                for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], t = e.length; t--;) {
                                    var r = c(this, b, w).call(this, e[t]);
                                    r > -1 && a(this, v).splice(r, 1);
                                }
                                c(this, y, m).call(this);
                            },
                        },
                        {
                            key: 'spawn',
                            value: function (e) {
                                return new t(e || a(this, v));
                            },
                        },
                    ]),
                    (function (e, t) {
                        for (var r = 0; r < t.length; r++) {
                            var n = t[r];
                            ((n.enumerable = n.enumerable || !1), (n.configurable = !0), 'value' in n && (n.writable = !0), Object.defineProperty(e, s(n.key), n));
                        }
                    })(t.prototype, e),
                    Object.defineProperty(t, 'prototype', { writable: !1 }),
                    t
                );
            })())();
            let O = 'funtech-lang';
        },
        43297: (e, t, r) => {
            'use strict';
            function n() {
                throw Error('Cycle detected');
            }
            function i() {
                if (l > 1) l--;
                else {
                    for (var e, t = !1; void 0 !== a;) {
                        var r = a;
                        for (a = void 0, u++; void 0 !== r;) {
                            var n = r.o;
                            if (((r.o = void 0), (r.f &= -3), !(8 & r.f) && h(r)))
                                try {
                                    r.c();
                                } catch (r) {
                                    t || ((e = r), (t = !0));
                                }
                            r = n;
                        }
                    }
                    if (((u = 0), l--, t)) throw e;
                }
            }
            function o(e) {
                if (l > 0) return e();
                l++;
                try {
                    return e();
                } finally {
                    i();
                }
            }
            r.d(t, { EW: () => b, vA: () => o, vP: () => p });
            var s = void 0,
                a = void 0,
                l = 0,
                u = 0,
                c = 0;
            function d(e) {
                if (void 0 !== s) {
                    var t = e.n;
                    if (void 0 === t || t.t !== s)
                        return (
                            (t = { i: 0, S: e, p: s.s, n: void 0, t: s, e: void 0, x: void 0, r: t }),
                            void 0 !== s.s && (s.s.n = t),
                            (s.s = t),
                            (e.n = t),
                            32 & s.f && e.S(t),
                            t
                        );
                    if (-1 === t.i)
                        return ((t.i = 0), void 0 !== t.n && ((t.n.p = t.p), void 0 !== t.p && (t.p.n = t.n), (t.p = s.s), (t.n = void 0), (s.s.n = t), (s.s = t)), t);
                }
            }
            function f(e) {
                ((this.v = e), (this.i = 0), (this.n = void 0), (this.t = void 0));
            }
            function p(e) {
                return new f(e);
            }
            function h(e) {
                for (var t = e.s; void 0 !== t; t = t.n) if (t.S.i !== t.i || !t.S.h() || t.S.i !== t.i) return !0;
                return !1;
            }
            function v(e) {
                for (var t = e.s; void 0 !== t; t = t.n) {
                    var r = t.S.n;
                    if ((void 0 !== r && (t.r = r), (t.S.n = t), (t.i = -1), void 0 === t.n)) {
                        e.s = t;
                        break;
                    }
                }
            }
            function g(e) {
                for (var t = e.s, r = void 0; void 0 !== t;) {
                    var n = t.p;
                    (-1 === t.i ? (t.S.U(t), void 0 !== n && (n.n = t.n), void 0 !== t.n && (t.n.p = n)) : (r = t),
                        (t.S.n = t.r),
                        void 0 !== t.r && (t.r = void 0),
                        (t = n));
                }
                e.s = r;
            }
            function y(e) {
                (f.call(this, void 0), (this.x = e), (this.s = void 0), (this.g = c - 1), (this.f = 4));
            }
            function b(e) {
                return new y(e);
            }
            function m(e) {
                var t = e.u;
                if (((e.u = void 0), 'function' == typeof t)) {
                    l++;
                    var r = s;
                    s = void 0;
                    try {
                        t();
                    } catch (t) {
                        throw ((e.f &= -2), (e.f |= 8), w(e), t);
                    } finally {
                        ((s = r), i());
                    }
                }
            }
            function w(e) {
                for (var t = e.s; void 0 !== t; t = t.n) t.S.U(t);
                ((e.x = void 0), (e.s = void 0), m(e));
            }
            function O(e) {
                if (s !== this) throw Error('Out-of-order effect');
                (g(this), (s = e), (this.f &= -2), 8 & this.f && w(this), i());
            }
            function C(e) {
                ((this.x = e), (this.u = void 0), (this.s = void 0), (this.o = void 0), (this.f = 32));
            }
            ((f.prototype.h = function () {
                return !0;
            }),
                (f.prototype.S = function (e) {
                    this.t !== e && void 0 === e.e && ((e.x = this.t), void 0 !== this.t && (this.t.e = e), (this.t = e));
                }),
                (f.prototype.U = function (e) {
                    if (void 0 !== this.t) {
                        var t = e.e,
                            r = e.x;
                        (void 0 !== t && ((t.x = r), (e.e = void 0)), void 0 !== r && ((r.e = t), (e.x = void 0)), e === this.t && (this.t = r));
                    }
                }),
                (f.prototype.subscribe = function (e) {
                    var t = this,
                        r = function () {
                            var r = t.value,
                                n = 32 & this.f;
                            this.f &= -33;
                            try {
                                e(r);
                            } finally {
                                this.f |= n;
                            }
                        },
                        n = new C(r);
                    try {
                        n.c();
                    } catch (e) {
                        throw (n.d(), e);
                    }
                    return n.d.bind(n);
                }),
                (f.prototype.valueOf = function () {
                    return this.value;
                }),
                (f.prototype.toString = function () {
                    return this.value + '';
                }),
                (f.prototype.toJSON = function () {
                    return this.value;
                }),
                (f.prototype.peek = function () {
                    return this.v;
                }),
                Object.defineProperty(f.prototype, 'value', {
                    get: function () {
                        var e = d(this);
                        return (void 0 !== e && (e.i = this.i), this.v);
                    },
                    set: function (e) {
                        if (
                            (s instanceof y &&
                                (function () {
                                    throw Error('Computed cannot have side-effects');
                                })(),
                            e !== this.v)
                        ) {
                            (u > 100 && n(), (this.v = e), this.i++, c++, l++);
                            try {
                                for (var t = this.t; void 0 !== t; t = t.x) t.t.N();
                            } finally {
                                i();
                            }
                        }
                    },
                }),
                ((y.prototype = new f()).h = function () {
                    if (((this.f &= -3), 1 & this.f)) return !1;
                    if (32 == (36 & this.f) || ((this.f &= -5), this.g === c)) return !0;
                    if (((this.g = c), (this.f |= 1), this.i > 0 && !h(this))) return ((this.f &= -2), !0);
                    var e = s;
                    try {
                        (v(this), (s = this));
                        var t = this.x();
                        (16 & this.f || this.v !== t || 0 === this.i) && ((this.v = t), (this.f &= -17), this.i++);
                    } catch (e) {
                        ((this.v = e), (this.f |= 16), this.i++);
                    }
                    return ((s = e), g(this), (this.f &= -2), !0);
                }),
                (y.prototype.S = function (e) {
                    if (void 0 === this.t) {
                        this.f |= 36;
                        for (var t = this.s; void 0 !== t; t = t.n) t.S.S(t);
                    }
                    f.prototype.S.call(this, e);
                }),
                (y.prototype.U = function (e) {
                    if (void 0 !== this.t && (f.prototype.U.call(this, e), void 0 === this.t)) {
                        this.f &= -33;
                        for (var t = this.s; void 0 !== t; t = t.n) t.S.U(t);
                    }
                }),
                (y.prototype.N = function () {
                    if (!(2 & this.f)) {
                        this.f |= 6;
                        for (var e = this.t; void 0 !== e; e = e.x) e.t.N();
                    }
                }),
                (y.prototype.peek = function () {
                    if ((this.h() || n(), 16 & this.f)) throw this.v;
                    return this.v;
                }),
                Object.defineProperty(y.prototype, 'value', {
                    get: function () {
                        1 & this.f && n();
                        var e = d(this);
                        if ((this.h(), void 0 !== e && (e.i = this.i), 16 & this.f)) throw this.v;
                        return this.v;
                    },
                }),
                (C.prototype.c = function () {
                    var e = this.S();
                    try {
                        if (8 & this.f || void 0 === this.x) return;
                        var t = this.x();
                        'function' == typeof t && (this.u = t);
                    } finally {
                        e();
                    }
                }),
                (C.prototype.S = function () {
                    (1 & this.f && n(), (this.f |= 1), (this.f &= -9), m(this), v(this), l++);
                    var e = s;
                    return ((s = this), O.bind(this, e));
                }),
                (C.prototype.N = function () {
                    2 & this.f || ((this.f |= 2), (this.o = a), (a = this));
                }),
                (C.prototype.d = function () {
                    ((this.f |= 8), 1 & this.f || w(this));
                }));
        },
        44084: (e, t, r) => {
            'use strict';
            r.d(t, { r: () => o });
            var n = r(23877),
                i = r(74021);
            class o extends i.q {
                disableLogToConsole;
                constructor(e) {
                    (super(e), (this.disableLogToConsole = e.disableLogToConsole));
                }
                info(e, t) {
                    this.maxLogLevel >= n.c.INFO && this.logToConsole(n.c.INFO, e, t);
                }
                debug(e, t) {
                    this.maxLogLevel >= n.c.DEBUG && this.logToConsole(n.c.DEBUG, e, t);
                }
                trace(e, t) {
                    this.maxLogLevel >= n.c.TRACE && this.logToConsole(n.c.TRACE, e, t);
                }
                warn(e, t) {
                    (this.maxLogLevel >= n.c.WARNING && this.logToConsole(n.c.WARNING, e, t), this.sendToErrorBooster(n.c.WARNING, e, t));
                }
                error(e, t) {
                    (this.maxLogLevel >= n.c.ERROR && this.logToConsole(n.c.ERROR, e, t), this.sendToErrorBooster(n.c.ERROR, e, t));
                }
                log(e, t) {
                    this.logToConsole(n.c.INFO, e, t);
                }
                logToConsole(e, t, r) {
                    if (this.disableLogToConsole) return;
                    let i = n.Q[e];
                    console[i](...this.formatMessage(e, t, r));
                }
                sendToErrorBooster(e, t, r) {
                    window.Ya.Rum.logError({ message: t, level: e, additional: { data: r ? this.obfuscateData({ ...this.additionalData, ...r }) : {} } });
                }
            }
        },
        53534: (e, t, r) => {
            'use strict';
            r.d(t, { k: () => n });
            let n = (0, r(53548).createContext)(null);
        },
        54020: (e, t, r) => {
            'use strict';
            let n;
            r.d(t, { A: () => a });
            let i = { randomUUID: 'undefined' != typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto) },
                o = new Uint8Array(16),
                s = [];
            for (let e = 0; e < 256; ++e) s.push((e + 256).toString(16).slice(1));
            let a = function (e, t, r) {
                if (i.randomUUID && !t && !e) return i.randomUUID();
                let a =
                    (e = e || {}).random ||
                    (
                        e.rng ||
                        function () {
                            if (!n && !(n = 'undefined' != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)))
                                throw Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
                            return n(o);
                        }
                    )();
                if (((a[6] = (15 & a[6]) | 64), (a[8] = (63 & a[8]) | 128), t)) {
                    r = r || 0;
                    for (let e = 0; e < 16; ++e) t[r + e] = a[e];
                    return t;
                }
                return (function (e, t = 0) {
                    return (
                        s[e[t + 0]] +
                        s[e[t + 1]] +
                        s[e[t + 2]] +
                        s[e[t + 3]] +
                        '-' +
                        s[e[t + 4]] +
                        s[e[t + 5]] +
                        '-' +
                        s[e[t + 6]] +
                        s[e[t + 7]] +
                        '-' +
                        s[e[t + 8]] +
                        s[e[t + 9]] +
                        '-' +
                        s[e[t + 10]] +
                        s[e[t + 11]] +
                        s[e[t + 12]] +
                        s[e[t + 13]] +
                        s[e[t + 14]] +
                        s[e[t + 15]]
                    );
                })(a);
            };
        },
        56374: (e, t, r) => {
            'use strict';
            r.d(t, { c: () => i });
            var n = r(53548);
            function i(e) {
                let t = (0, n.useRef)({ stableFn: (...e) => t.current.callback(...e), callback: e });
                return (
                    (0, n.useInsertionEffect)(() => {
                        t.current.callback = e;
                    }),
                    t.current.stableFn
                );
            }
        },
        56804: (e, t) => {
            'use strict';
            function r(e) {
                let t = {};
                for (let [r, n] of e.entries()) {
                    let e = t[r];
                    void 0 === e ? (t[r] = n) : Array.isArray(e) ? e.push(n) : (t[r] = [e, n]);
                }
                return t;
            }
            function n(e) {
                return 'string' == typeof e ? e : ('number' != typeof e || isNaN(e)) && 'boolean' != typeof e ? '' : String(e);
            }
            function i(e) {
                let t = new URLSearchParams();
                for (let [r, i] of Object.entries(e))
                    if (Array.isArray(i)) for (let e of i) t.append(r, n(e));
                    else t.set(r, n(i));
                return t;
            }
            function o(e) {
                for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
                for (let t of r) {
                    for (let r of t.keys()) e.delete(r);
                    for (let [r, n] of t.entries()) e.append(r, n);
                }
                return e;
            }
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                !(function (e, t) {
                    for (var r in t) Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
                })(t, {
                    assign: function () {
                        return o;
                    },
                    searchParamsToUrlQuery: function () {
                        return r;
                    },
                    urlQueryToSearchParams: function () {
                        return i;
                    },
                }));
        },
        59203: (e, t) => {
            'use strict';
            var r;
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.MiniappConfig = void 0),
                (t.makeMetaParams = function (e) {
                    return { event: { version: e } };
                }),
                (t.createEvgenAnalytics = function (e, t, r) {
                    return {
                        trackEvent: (n, i) => {
                            let o = { ...i, ...t.getGlobalParams(), ...r.getPlatformParams() };
                            e.trackEvent(n, o);
                        },
                    };
                }),
                !(function (e) {
                    ((e.Music = 'music'), (e.NotApplicable = 'not_applicable'));
                })(r || (t.MiniappConfig = r = {})));
        },
        59791: (e, t, r) => {
            'use strict';
            r.d(t, { I: () => n });
            let n = (0, r(53548).createContext)(null);
        },
        62414: (e, t, r) => {
            'use strict';
            r.d(t, { D: () => l });
            var n = r(53548),
                i = r(63582),
                o = r(245),
                s = r(22681),
                a = r(56374);
            let l = (0, i.n)({ event: 'LandingBlock.Showed/Hidden', kind: 'hook', requiredScopes: ['screen', 'block', 'object'] }, (e = {}) => {
                let { createObserver: t, delayMs: r = 1e3, enabled: i = !0, onVisibilityChange: l, threshold: u = 0.8 } = e,
                    c = (0, o.N)(),
                    d = (0, s.w)(),
                    f = d?.object,
                    p = d?.block.claimLoadedSession,
                    h = (0, n.useMemo)(() => (d ? c.createBlockReporter(d.snapshot) : null), [c, d]),
                    v = (0, n.useRef)(t),
                    g = (0, n.useRef)(l),
                    [y, b] = (0, n.useState)(null),
                    m = (0, a.c)((e) => b(e));
                ((v.current = t), (g.current = l));
                let w = !!t;
                return (
                    (0, n.useEffect)(() => {
                        if (!i || !y || !f || 'string' != typeof f.scope.objectId || !p || !h || (!w && !y.ownerDocument.defaultView?.IntersectionObserver)) return;
                        let e = !1,
                            t = null,
                            n = null,
                            o = () => {
                                n && (clearTimeout(n), (n = null));
                                let e = t?.hide();
                                (f.activeViewSession === t && (f.activeViewSession = null), (t = null), e && (h.hidden({ viewUuid: e }), g.current?.(!1)));
                            },
                            s = (
                                v.current ??
                                ((e, t, r) => {
                                    let n = r.ownerDocument.defaultView?.IntersectionObserver;
                                    if (!n) throw Error('IntersectionObserver is not available');
                                    return new n(e, t);
                                })
                            )(
                                (i) => {
                                    e ||
                                        i.forEach((e) => {
                                            if (!(e.isIntersecting && e.intersectionRatio >= u)) return void o();
                                            n ||
                                                t?.isVisible ||
                                                (n = setTimeout(() => {
                                                    ((n = null), (t ??= p() ?? f.viewSession), (f.activeViewSession = t));
                                                    let e = t.show();
                                                    e && (h.showed({ viewUuid: e }), g.current?.(!0));
                                                }, r));
                                        });
                                },
                                { threshold: u },
                                y,
                            );
                        return (
                            s.observe(y),
                            () => {
                                ((e = !0), o(), s.unobserve(y), s.disconnect());
                            }
                        );
                    }, [y, p, f, r, i, w, u, h]),
                    m
                );
            });
        },
        62837: (e, t, r) => {
            'use strict';
            r.d(t, { AS: () => f, Yw: () => n, JU: () => i, DQ: () => v, Ve: () => g });
            var n,
                i,
                o = r(43297),
                s = (function () {
                    function e(e) {
                        ((this.observableValue = (0, o.vP)(e)), (this.prevValueByListener = new Map()));
                    }
                    return (
                        Object.defineProperty(e.prototype, 'value', {
                            get: function () {
                                return this.observableValue.value;
                            },
                            set: function (e) {
                                this.observableValue.value = e;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (e.prototype.onChange = function (e, t) {
                            var r = this;
                            void 0 === t && (t = { skipFirstChange: !1 });
                            var n = !0;
                            return (
                                this.prevValueByListener.has(e) || this.prevValueByListener.set(e, void 0),
                                this.observableValue.subscribe(function (i) {
                                    if (i !== r.prevValueByListener.get(e)) {
                                        if (t.skipFirstChange && n) {
                                            n = !1;
                                            return;
                                        }
                                        (r.prevValueByListener.set(e, i), e(i));
                                    }
                                })
                            );
                        }),
                        e
                    );
                })();
            !(function () {
                function e(e) {
                    ((this.observableValue = (0, o.EW)(e)), (this.prevValueByListener = new Map()));
                }
                (Object.defineProperty(e.prototype, 'value', {
                    get: function () {
                        return this.observableValue.value;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                    (e.prototype.onChange = function (e, t) {
                        var r = this;
                        void 0 === t && (t = { skipFirstChange: !1 });
                        var n = !0;
                        return (
                            this.prevValueByListener.has(e) || this.prevValueByListener.set(e, void 0),
                            this.observableValue.subscribe(function (i) {
                                if (i !== r.prevValueByListener.get(e)) {
                                    if (t.skipFirstChange && n) {
                                        n = !1;
                                        return;
                                    }
                                    (r.prevValueByListener.set(e, i), e(i));
                                }
                            })
                        );
                    }));
            })();
            var a = r(14965);
            class l extends a.t {
                name = 'DisclaimerDictionaryLoadError';
                constructor(e) {
                    (super('Failed to load disclaimer dictionary', { code: 'E_DISCLAIMER_DICTIONARY_LOAD', cause: e, data: { valueType: typeof e } }),
                        Object.setPrototypeOf(this, l.prototype));
                }
            }
            class u extends a.t {
                name = 'DisclaimerNotFoundError';
                disclaimerId;
                retryAttempted;
                constructor(e, t) {
                    (super(`Disclaimer with id "${e}" not found${t ? ' after retry' : ''}`, {
                        code: 'E_DISCLAIMER_NOT_FOUND',
                        data: { disclaimerId: e, retryAttempted: t },
                    }),
                        (this.disclaimerId = e),
                        (this.retryAttempted = t),
                        Object.setPrototypeOf(this, u.prototype));
                }
            }
            !(function (e) {
                ((e.MODAL = 'modal'),
                    (e.FOREIGN_AGENT = 'foreignAgent'),
                    (e.INFORMATIONAL = 'informational'),
                    (e.AGE_18 = 'age18'),
                    (e.EXPLICIT = 'explicit'),
                    (e.DESCRIPTION_TEXT = 'descriptionText'),
                    (e.AGE_12_ICON = 'age12Icon'),
                    (e.AGE_16_ICON = 'age16Icon'),
                    (e.AGE_18_ICON = 'age18Icon'),
                    (e.EXPLICIT_ICON = 'explicitIcon'),
                    (e.EXCLAMATION_ICON = 'exclamationIcon'));
            })(n || (n = {}));
            let c = (e) => {
                    let t = [];
                    for (let r of e) {
                        let [e, n] = r.split(':');
                        e && n && t.push({ type: e, id: n });
                    }
                    return t;
                },
                d = (e, t) => c(e).filter((e) => e.type === t);
            class f {
                items;
                isLoading;
                error;
                dataSource;
                itemsObservable;
                isLoadingObservable;
                errorObservable;
                loadingPromise;
                isDestroyed;
                constructor(e) {
                    ((this.dataSource = e.dataSource),
                        (this.itemsObservable = new s(null)),
                        (this.isLoadingObservable = new s(!1)),
                        (this.errorObservable = new s(null)),
                        (this.loadingPromise = null),
                        (this.isDestroyed = !1),
                        (this.items = this.itemsObservable),
                        (this.isLoading = this.isLoadingObservable),
                        (this.error = this.errorObservable));
                }
                async load() {
                    if (this.isDestroyed) return;
                    if (this.loadingPromise) return void (await this.loadingPromise);
                    ((this.isLoadingObservable.value = !0), (this.errorObservable.value = null));
                    let e = this.dataSource
                        .loadAll()
                        .then((e) => {
                            this.isDestroyed || ((this.itemsObservable.value = e), (this.isLoadingObservable.value = !1));
                        })
                        .catch((e) => {
                            let t = e instanceof Error ? e : new l(e);
                            throw (!1 === this.isDestroyed && ((this.errorObservable.value = t), (this.isLoadingObservable.value = !1)), t);
                        })
                        .finally(() => {
                            this.loadingPromise = null;
                        });
                    ((this.loadingPromise = e), await e);
                }
                async getById(e) {
                    let t = this.findItemById(e);
                    return t || (await this.load(), this.findItemById(e));
                }
                async getByIdOrThrow(e) {
                    let t = await this.getById(e);
                    if (void 0 !== t) return t;
                    throw new u(e, !0);
                }
                async resolveByType(e, t) {
                    let r = d(e, t);
                    return (await Promise.all(r.map(async (e) => await this.getById(e.id)))).filter((e) => void 0 !== e);
                }
                async resolveAll(e) {
                    let t = c(e),
                        r = await Promise.all(
                            t.map(async (e) => {
                                let t = await this.getById(e.id);
                                return void 0 === t ? null : { disclaimerItem: t, disclaimerType: e.type };
                            }),
                        ),
                        n = {};
                    for (let e of r)
                        if (e) {
                            let t = n[e.disclaimerType] ?? [];
                            (t.push(e.disclaimerItem), (n[e.disclaimerType] = t));
                        }
                    return n;
                }
                destroy() {
                    ((this.isDestroyed = !0),
                        (this.loadingPromise = null),
                        (this.itemsObservable.value = null),
                        (this.isLoadingObservable.value = !1),
                        (this.errorObservable.value = null));
                }
                findItemById(e) {
                    let t = this.itemsObservable.value;
                    if (null !== t) return t.find((t) => t.id === e);
                }
            }
            !(function (e) {
                ((e.E = 'e'), (e.AGE_12 = '12+'), (e.AGE_16 = '16+'), (e.AGE_18 = '18+'), (e.EXCLAMATION = '!'));
            })(i || (i = {}));
            let p = new Map([
                    [n.EXPLICIT_ICON, i.E],
                    [n.AGE_18_ICON, i.AGE_18],
                    [n.AGE_16_ICON, i.AGE_16],
                    [n.AGE_12_ICON, i.AGE_12],
                    [n.EXCLAMATION_ICON, i.EXCLAMATION],
                ]),
                h = [n.EXPLICIT_ICON, n.AGE_18_ICON, n.AGE_16_ICON, n.AGE_12_ICON, n.EXCLAMATION_ICON],
                v = (e) => {
                    let t = ((e, t) => {
                        for (let r of t) {
                            let t = d(e, r)[0];
                            if (t) return t;
                        }
                        return null;
                    })(e, h);
                    if (null === t) return null;
                    let r = p.get(t.type);
                    return void 0 !== r ? r : null;
                },
                g = (e, t) => d(e, t).length > 0;
        },
        63582: (e, t, r) => {
            'use strict';
            r.d(t, { B: () => i, n: () => n });
            let n = (e, t) => Object.assign(t, { analyticsCoverageMetadata: e }),
                i = (e, t) => Object.assign(t, { analyticsCoverageMetadata: e });
        },
        64543: (e, t, r) => {
            'use strict';
            r.d(t, { j: () => u });
            var n = r(53548),
                i = r(99875),
                o = r(36236),
                s = r(66109),
                a = r(53534),
                l = r(79045);
            let u = () => {
                let e = (0, n.useContext)(i.p),
                    t = (0, n.useContext)(o.S),
                    r = (0, n.useContext)(s.l),
                    u = (0, n.useContext)(a.k),
                    c = u?.isReady ? u.scope : null,
                    d = (0, n.useContext)(l.F),
                    f = e?.scope ?? null,
                    p = r?.scope ?? null;
                return (0, n.useMemo)(() => ({ block: f, filter: t, object: p, screen: c, tab: d }), [f, t, p, c, d]);
            };
        },
        66109: (e, t, r) => {
            'use strict';
            r.d(t, { l: () => n });
            let n = (0, r(53548).createContext)(null);
        },
        74021: (e, t, r) => {
            'use strict';
            r.d(t, { q: () => l });
            var n = r(14567),
                i = r(243),
                o = r(62151),
                s = r(33396);
            let a = () => 'SECRET';
            class l {
                maxLogLevel;
                secureFields;
                additionalData;
                constructor({ additionalData: e, maxLogLevel: t, secureFields: r }) {
                    ((this.maxLogLevel = t), (this.secureFields = r), (this.additionalData = e));
                }
                formatMessage(e, t, r = {}, i) {
                    let o,
                        a = String(t instanceof Error && t.stack ? t.stack : t),
                        l = (0, s.A)({ ...this.additionalData, ...r });
                    return (Object.keys(l).length && (o = this.obfuscateData(l)), i) ? `${a} ${n(o)}` : [a, o];
                }
                obfuscateData(e) {
                    if (this.secureFields?.length) for (let t of this.secureFields) void 0 !== (0, i.A)(e, t) && (0, o.A)(e, t, a());
                    return e;
                }
            }
        },
        74428: (e, t, r) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                !(function (e, t) {
                    for (var r in t) Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
                })(t, {
                    formatUrl: function () {
                        return o;
                    },
                    formatWithValidation: function () {
                        return a;
                    },
                    urlObjectKeys: function () {
                        return s;
                    },
                }));
            let n = r(28854)._(r(56804)),
                i = /https?|ftp|gopher|file/;
            function o(e) {
                let { auth: t, hostname: r } = e,
                    o = e.protocol || '',
                    s = e.pathname || '',
                    a = e.hash || '',
                    l = e.query || '',
                    u = !1;
                ((t = t ? encodeURIComponent(t).replace(/%3A/i, ':') + '@' : ''),
                    e.host ? (u = t + e.host) : r && ((u = t + (~r.indexOf(':') ? '[' + r + ']' : r)), e.port && (u += ':' + e.port)),
                    l && 'object' == typeof l && (l = String(n.urlQueryToSearchParams(l))));
                let c = e.search || (l && '?' + l) || '';
                return (
                    o && !o.endsWith(':') && (o += ':'),
                    e.slashes || ((!o || i.test(o)) && !1 !== u) ? ((u = '//' + (u || '')), s && '/' !== s[0] && (s = '/' + s)) : u || (u = ''),
                    a && '#' !== a[0] && (a = '#' + a),
                    c && '?' !== c[0] && (c = '?' + c),
                    '' + o + u + (s = s.replace(/[?#]/g, encodeURIComponent)) + (c = c.replace('#', '%23')) + a
                );
            }
            let s = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
            function a(e) {
                return o(e);
            }
        },
        76903: (e, t, r) => {
            'use strict';
            r.d(t, { a: () => d });
            var n = r(88800),
                i = r(53548),
                o = r(53534),
                s = r(63582),
                a = r(245);
            let l = new WeakMap();
            class u {
                screenViewUuid;
                queue;
                consumers = new Set();
                loadedTabs = new Set();
                opened = !1;
                pendingOpen = !1;
                closed = !1;
                pendingClose = null;
                constructor(e, t) {
                    this.screenViewUuid = e;
                    let r =
                        l.get(t) ??
                        (() => {
                            let e = [],
                                t = !1,
                                r = () => {
                                    for (; e.length > 0;) e.shift()?.();
                                },
                                n = () => {
                                    t ||
                                        ((t = !0),
                                        queueMicrotask(() => {
                                            try {
                                                r();
                                            } finally {
                                                ((t = !1), e.length > 0 && n());
                                            }
                                        }));
                                };
                            return {
                                open: (e) => {
                                    (r(), e());
                                },
                                defer: (t) => {
                                    (e.push(t), n());
                                },
                            };
                        })();
                    (l.set(t, r), (this.queue = r));
                }
                open(e, t) {
                    ((this.pendingClose = null),
                        this.opened ||
                            this.pendingOpen ||
                            ((this.pendingOpen = !0),
                            this.queue.open(() => {
                                try {
                                    (t(), (this.opened = !0));
                                } finally {
                                    this.pendingOpen = !1;
                                }
                            })),
                        this.consumers.add(e));
                }
                close(e, t) {
                    (this.consumers.delete(e), this.closed || this.pendingClose?.scheduled || ((this.pendingClose = { send: t, scheduled: !1 }), this.scheduleClose()));
                }
                release(e) {
                    (this.consumers.delete(e), this.scheduleClose());
                }
                loadTab(e, t) {
                    this.loadedTabs.has(e) || (t(), this.loadedTabs.add(e));
                }
                scheduleClose() {
                    let e = this.pendingClose;
                    !e ||
                        e.scheduled ||
                        this.consumers.size > 0 ||
                        ((e.scheduled = !0),
                        this.queue.defer(() => {
                            this.pendingClose !== e || this.consumers.size > 0 || ((this.pendingClose = null), e.send(), (this.closed = !0));
                        }));
                }
            }
            var c = r(87999);
            let d = (0, s.B)(
                { kind: 'provider', requiredProps: ['pageId'], pendingProps: ['mainObjectType', 'mainObjectId'], scope: 'screen' },
                ({ children: e, ...t }) => {
                    let r = (0, a.N)(),
                        s = ((e) =>
                            (!Object.hasOwn(e, 'mainObjectType') || void 0 !== e.mainObjectType) &&
                            ('string' == typeof e.mainObjectId ||
                                (!Object.hasOwn(e, 'mainObjectId') && (!Object.hasOwn(e, 'mainObjectType') || e.mainObjectType === c.DomainObjectType.NonApplicable))))(
                            t,
                        ),
                        [l, d] = (0, i.useState)(() => {
                            let e = new u(r.createScreenSession().screenViewUuid, r);
                            return { client: r, input: t, isReady: s, scope: s ? r.createScreenScope(t, e) : null, session: e };
                        });
                    if (
                        l.client !== r ||
                        l.input.pageId !== t.pageId ||
                        l.input.skeletonId !== t.skeletonId ||
                        l.input.mainObjectType !== t.mainObjectType ||
                        l.input.mainObjectId !== t.mainObjectId
                    ) {
                        let i = new u(r.createScreenSession().screenViewUuid, r),
                            a = { client: r, input: t, isReady: s, scope: s ? r.createScreenScope(t, i) : null, session: i };
                        return (d(a), (0, n.jsx)(o.k, { value: a, children: e }));
                    }
                    if (
                        l.isReady !== s ||
                        l.input.displayReasonId !== t.displayReasonId ||
                        l.input.pageIdForFrom !== t.pageIdForFrom ||
                        l.input.pagePlacement !== t.pagePlacement ||
                        l.input.pageStyle !== t.pageStyle
                    ) {
                        let i = { ...l, input: t, isReady: s, scope: s ? r.createScreenScope(t, l.session) : null };
                        return (d(i), (0, n.jsx)(o.k, { value: i, children: e }));
                    }
                    return (0, n.jsx)(o.k, { value: l, children: e });
                },
            );
        },
        79045: (e, t, r) => {
            'use strict';
            r.d(t, { F: () => n });
            let n = (0, r(53548).createContext)(null);
        },
        80643: (e, t, r) => {
            'use strict';
            r.d(t, { S: () => l });
            var n = r(53548),
                i = r(63582),
                o = r(245),
                s = r(22681),
                a = r(56374);
            let l = (0, i.n)({ event: 'LandingBlock.Navigated', kind: 'hook', requiredScopes: ['screen', 'block', 'object'] }, () => {
                let e = (0, o.N)(),
                    t = (0, s.w)(),
                    r = (0, n.useMemo)(() => (t ? e.createBlockReporter(t.snapshot) : null), [e, t]);
                return (0, a.c)((e) => {
                    t?.object &&
                        r &&
                        r.navigated({ ...e, from: e.from ?? t.snapshot.screen.pageId, viewUuid: (t.object.activeViewSession ?? t.object.viewSession).start() });
                });
            });
        },
        84423: (e, t, r) => {
            'use strict';
            r.d(t, { s: () => o });
            var n = r(53548),
                i = r(59791);
            let o = () => {
                let e = (0, n.useContext)(i.I);
                return (0, n.useMemo)(() => (e ? { evgenInstance: e } : null), [e]);
            };
        },
        87013: (e, t, r) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'isLocalURL', {
                    enumerable: !0,
                    get: function () {
                        return o;
                    },
                }));
            let n = r(20498),
                i = r(42411);
            function o(e) {
                if (!(0, n.isAbsoluteUrl)(e)) return !0;
                try {
                    let t = (0, n.getLocationOrigin)(),
                        r = new URL(e, t);
                    return r.origin === t && (0, i.hasBasePath)(r.pathname);
                } catch (e) {
                    return !1;
                }
            }
        },
        88969: (e, t, r) => {
            'use strict';
            r.d(t, { A: () => u });
            var n = r(88092),
                i = r(53548),
                o = r(84014),
                s = r(2058);
            function a(e) {
                var t = (0, s.A)(),
                    r = t.formatMessage,
                    n = t.textComponent,
                    o = void 0 === n ? i.Fragment : n,
                    a = e.id,
                    l = e.description,
                    u = e.defaultMessage,
                    c = e.values,
                    d = e.children,
                    f = e.tagName,
                    p = void 0 === f ? o : f,
                    h = r({ id: a, description: l, defaultMessage: u }, c, { ignoreTag: e.ignoreTag });
                return 'function' == typeof d ? d(Array.isArray(h) ? h : [h]) : p ? i.createElement(p, null, h) : i.createElement(i.Fragment, null, h);
            }
            a.displayName = 'FormattedMessage';
            var l = i.memo(a, function (e, t) {
                var r = e.values,
                    i = (0, n.__rest)(e, ['values']),
                    s = t.values,
                    a = (0, n.__rest)(t, ['values']);
                return (0, o.bN)(s, r) && (0, o.bN)(i, a);
            });
            l.displayName = 'MemoizedFormattedMessage';
            let u = l;
        },
        89846: (e, t, r) => {
            'use strict';
            r.d(t, { g: () => o });
            var n = r(53548),
                i = r(35606);
            let o = () => ({ hash: (0, n.useContext)(i.m) });
        },
        95982: (e) => {
            var t = /((([a-zA-Z]+(-[a-zA-Z0-9]+){0,2})|\*)(;q=[0-1](\.[0-9]+)?)?)*/g;
            function r(e) {
                return (e || '')
                    .match(t)
                    .map(function (e) {
                        if (e) {
                            var t = e.split(';'),
                                r = t[0].split('-'),
                                n = 3 === r.length;
                            return { code: r[0], script: n ? r[1] : null, region: n ? r[2] : r[1], quality: t[1] ? parseFloat(t[1].split('=')[1]) : 1 };
                        }
                    })
                    .filter(function (e) {
                        return e;
                    })
                    .sort(function (e, t) {
                        return t.quality - e.quality;
                    });
            }
            ((e.exports.parse = r),
                (e.exports.pick = function (e, t, n) {
                    if (((n = n || {}), !e || !e.length || !t)) return null;
                    'string' == typeof t && (t = r(t));
                    for (
                        var i = e.map(function (e) {
                                var t = e.split('-'),
                                    r = 3 === t.length;
                                return { code: t[0], script: r ? t[1] : null, region: r ? t[2] : t[1] };
                            }),
                            o = 0;
                        o < t.length;
                        o++
                    )
                        for (
                            var s = t[o],
                                a = s.code.toLowerCase(),
                                l = s.region ? s.region.toLowerCase() : s.region,
                                u = s.script ? s.script.toLowerCase() : s.script,
                                c = 0;
                            c < i.length;
                            c++
                        ) {
                            var d = i[c].code.toLowerCase(),
                                f = i[c].script ? i[c].script.toLowerCase() : i[c].script,
                                p = i[c].region ? i[c].region.toLowerCase() : i[c].region;
                            if (a === d && (n.loose || !u || u === f) && (n.loose || !l || l === p)) return e[c];
                        }
                    return null;
                }));
        },
        99875: (e, t, r) => {
            'use strict';
            r.d(t, { p: () => n });
            let n = (0, r(53548).createContext)(null);
        },
    },
]);
