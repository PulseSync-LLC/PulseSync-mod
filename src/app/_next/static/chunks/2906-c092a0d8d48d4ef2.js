(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1384, 2906],
    {
        245: (e, t, n) => {
            'use strict';
            n.d(t, { N: () => o });
            var r = n(53548),
                i = n(59791);
            let o = () => {
                let e = (0, r.useContext)(i.I);
                if (!e) throw Error('AnalyticsProvider is required');
                return e;
            };
        },
        4653: (e, t, n) => {
            'use strict';
            n.d(t, { U: () => s });
            var r = n(95982),
                i = Object.defineProperty,
                o = (e, t, n) => (
                    ((e, t, n) => (t in e ? i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n)))(e, 'symbol' != typeof t ? t + '' : t, n),
                    n
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
                    return r.parse(e).map(({ code: e }) => e);
                }
                getLang({ regionIsoName: e, urlLang: t, cookieLang: n, acceptLangs: r }) {
                    var i, o, s;
                    let a = e ? (null == (i = this.regionLangs) ? void 0 : i[e]) : void 0,
                        u = this.enableWideLanguageSelectWithBrandLangs ? this.brandLangs : null != (o = null == a ? void 0 : a.langs) ? o : this.brandLangs,
                        c = null != (s = null == a ? void 0 : a.defaultLang) ? s : this.brandDefaultLang;
                    return this.selectLang({ supportedLangs: u, defaultLang: c, urlLang: t, cookieLang: n, acceptLangs: r });
                }
                intersect(e, t) {
                    let n = new Set(t);
                    return e.filter((e) => n.has(e));
                }
                selectLang({ supportedLangs: e, defaultLang: t, urlLang: n, cookieLang: r, acceptLangs: i }) {
                    if ('string' == typeof n && e.includes(n)) return n;
                    let o = null != i ? i : [],
                        s = r ? [r, ...o] : o,
                        a = this.intersect(s, e)[0];
                    return void 0 !== a ? a : t;
                }
            }
        },
        7695: (e, t, n) => {
            'use strict';
            n.d(t, { Ve: () => s, Vn: () => i, p6: () => o, w: () => r });
            let r = '',
                i = 0,
                o = !1,
                s = Object.freeze({ tabId: r, tabPos: 0, isTabSelectedByDefault: !1 });
        },
        7833: (e, t, n) => {
            'use strict';
            n.d(t, { B: () => c });
            var r = n(88800),
                i = n(53548),
                o = n(63582),
                s = n(99875),
                a = n(66109),
                u = n(245);
            let c = (0, o.B)(
                { kind: 'provider', requiredProps: ['objectType', 'objectId', 'objectPosX', 'objectPosY'], pendingProps: ['objectId'], scope: 'object' },
                ({ children: e, objectId: t, objectPosX: n, objectPosY: o, objectType: c }) => {
                    let l = (0, u.N)(),
                        d = (0, i.useContext)(s.p)?.loadedSession,
                        f = [c, t, n, o].join(':'),
                        [p, h] = (0, i.useState)(() => ({ client: l, identity: f, blockSession: d, viewSession: l.createBlockViewSession() }));
                    (p.client !== l || p.identity !== f || p.blockSession !== d) &&
                        h({ client: l, identity: f, blockSession: d, viewSession: l.createBlockViewSession() });
                    let v = (0, i.useMemo)(
                        () => ({ activeViewSession: null, scope: { objectId: t, objectPosX: n, objectPosY: o, objectType: c }, viewSession: p.viewSession }),
                        [t, n, o, c, p.viewSession],
                    );
                    return (0, r.jsx)(a.l, { value: v, children: e });
                },
            );
        },
        12389: (e, t, n) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                !(function (e, t) {
                    for (var n in t) Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
                })(t, {
                    default: function () {
                        return g;
                    },
                    useLinkStatus: function () {
                        return b;
                    },
                }));
            let r = n(28854),
                i = n(88800),
                o = r._(n(53548)),
                s = n(74428),
                a = n(92746),
                u = n(7733),
                c = n(13985),
                l = n(20498),
                d = n(13872);
            n(4115);
            let f = n(53437),
                p = n(87013),
                h = n(48985);
            function v(e) {
                return 'string' == typeof e ? e : (0, s.formatUrl)(e);
            }
            function g(e) {
                let t,
                    n,
                    r,
                    [s, g] = (0, o.useOptimistic)(f.IDLE_LINK_STATUS),
                    b = (0, o.useRef)(null),
                    {
                        href: m,
                        as: w,
                        children: S,
                        prefetch: j = null,
                        passHref: k,
                        replace: C,
                        shallow: O,
                        scroll: x,
                        onClick: E,
                        onMouseEnter: T,
                        onTouchStart: L,
                        legacyBehavior: I = !1,
                        onNavigate: P,
                        ref: R,
                        unstable_dynamicOnHover: N,
                        ..._
                    } = e;
                ((t = S), I && ('string' == typeof t || 'number' == typeof t) && (t = (0, i.jsx)('a', { children: t })));
                let A = o.default.useContext(a.AppRouterContext),
                    M = !1 !== j,
                    U = null === j || 'auto' === j ? u.PrefetchKind.AUTO : u.PrefetchKind.FULL,
                    { href: D, as: F } = o.default.useMemo(() => {
                        let e = v(m);
                        return { href: e, as: w ? v(w) : e };
                    }, [m, w]);
                I && (n = o.default.Children.only(t));
                let B = I ? n && 'object' == typeof n && n.ref : R,
                    z = o.default.useCallback(
                        (e) => (
                            null !== A && (b.current = (0, f.mountLinkInstance)(e, D, A, U, M, g)),
                            () => {
                                (b.current && ((0, f.unmountLinkForCurrentNavigation)(b.current), (b.current = null)), (0, f.unmountPrefetchableInstance)(e));
                            }
                        ),
                        [M, D, A, U, g],
                    ),
                    V = {
                        ref: (0, c.useMergedRef)(z, B),
                        onClick(e) {
                            (I || 'function' != typeof E || E(e),
                                I && n.props && 'function' == typeof n.props.onClick && n.props.onClick(e),
                                A &&
                                    (e.defaultPrevented ||
                                        (function (e, t, n, r, i, s, a) {
                                            let { nodeName: u } = e.currentTarget;
                                            if (
                                                !(
                                                    ('A' === u.toUpperCase() &&
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
                                                    (0, h.dispatchNavigateAction)(n || t, i ? 'replace' : 'push', null == s || s, r.current);
                                                });
                                            }
                                        })(e, D, F, b, C, x, P)));
                        },
                        onMouseEnter(e) {
                            (I || 'function' != typeof T || T(e),
                                I && n.props && 'function' == typeof n.props.onMouseEnter && n.props.onMouseEnter(e),
                                A && M && (0, f.onNavigationIntent)(e.currentTarget, !0 === N));
                        },
                        onTouchStart: function (e) {
                            (I || 'function' != typeof L || L(e),
                                I && n.props && 'function' == typeof n.props.onTouchStart && n.props.onTouchStart(e),
                                A && M && (0, f.onNavigationIntent)(e.currentTarget, !0 === N));
                        },
                    };
                return (
                    (0, l.isAbsoluteUrl)(F) ? (V.href = F) : (I && !k && ('a' !== n.type || 'href' in n.props)) || (V.href = (0, d.addBasePath)(F)),
                    (r = I ? o.default.cloneElement(n, V) : (0, i.jsx)('a', { ..._, ...V, children: t })),
                    (0, i.jsx)(y.Provider, { value: s, children: r })
                );
            }
            n(36155);
            let y = (0, o.createContext)(f.IDLE_LINK_STATUS),
                b = () => (0, o.useContext)(y);
            ('function' == typeof t.default || ('object' == typeof t.default && null !== t.default)) &&
                void 0 === t.default.__esModule &&
                (Object.defineProperty(t.default, '__esModule', { value: !0 }), Object.assign(t.default, t), (e.exports = t.default));
        },
        13985: (e, t, n) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'useMergedRef', {
                    enumerable: !0,
                    get: function () {
                        return i;
                    },
                }));
            let r = n(53548);
            function i(e, t) {
                let n = (0, r.useRef)(null),
                    i = (0, r.useRef)(null);
                return (0, r.useCallback)(
                    (r) => {
                        if (null === r) {
                            let e = n.current;
                            e && ((n.current = null), e());
                            let t = i.current;
                            t && ((i.current = null), t());
                        } else (e && (n.current = o(e, r)), t && (i.current = o(t, r)));
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
                    let n = e(t);
                    return 'function' == typeof n ? n : () => e(null);
                }
            }
            ('function' == typeof t.default || ('object' == typeof t.default && null !== t.default)) &&
                void 0 === t.default.__esModule &&
                (Object.defineProperty(t.default, '__esModule', { value: !0 }), Object.assign(t.default, t), (e.exports = t.default));
        },
        14567: (e, t) => {
            (e.exports = function (e, t, r, i) {
                return JSON.stringify(e, n(t, i), r);
            }).getSerialize = n;
            function n(e, t) {
                var n = [],
                    r = [];
                return (
                    null == t &&
                        (t = function (e, t) {
                            return n[0] === t ? '[Circular ~]' : '[Circular ~.' + r.slice(0, n.indexOf(t)).join('.') + ']';
                        }),
                    function (i, o) {
                        if (n.length > 0) {
                            var s = n.indexOf(this);
                            (~s ? n.splice(s + 1) : n.push(this), ~s ? r.splice(s, 1 / 0, i) : r.push(i), ~n.indexOf(o) && (o = t.call(this, i, o)));
                        } else n.push(o);
                        return null == e ? o : e.call(this, i, o);
                    }
                );
            }
        },
        14668: (e, t, n) => {
            'use strict';
            ((t.__ = function (e, t) {
                let n = (0, r.makeMetaParams)(1),
                    i = { ...t, pageId: 'artist_concerts_screen', pageType: 'listing', _meta: n };
                e.trackEvent('ArtistConcerts.Opened', i);
            }),
                (t.pe = function (e, t) {
                    let n = (0, r.makeMetaParams)(1),
                        i = { ...t, pageId: 'artist_concerts_screen', pageType: 'listing', _meta: n };
                    e.trackEvent('ArtistConcerts.Closed', i);
                }),
                (t.Z4 = function (e, t) {
                    let { objectPos: n = 1 } = t,
                        i = (0, r.makeMetaParams)(1),
                        o = { ...t, objectPos: n, pageId: 'artist_concerts_screen', pageType: 'listing', objectType: 'concert', _meta: i };
                    e.trackEvent('ArtistConcerts.Concert.Showed', o);
                }),
                (t.mh = function (e, t) {
                    let { objectPos: n = 1 } = t,
                        i = (0, r.makeMetaParams)(1),
                        o = {
                            ...t,
                            objectPos: n,
                            pageId: 'artist_concerts_screen',
                            pageType: 'listing',
                            objectType: 'concert',
                            from: 'artist_concerts_screen',
                            _meta: i,
                        };
                    e.trackEvent('ArtistConcerts.Concert.Navigated', o);
                }));
            let r = n(59203);
        },
        20498: (e, t) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                !(function (e, t) {
                    for (var n in t) Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
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
                        return n;
                    },
                    execOnce: function () {
                        return r;
                    },
                    getDisplayName: function () {
                        return u;
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
                        return c;
                    },
                    loadGetInitialProps: function () {
                        return d;
                    },
                    normalizeRepeatedSlashes: function () {
                        return l;
                    },
                    stringifyError: function () {
                        return m;
                    },
                }));
            let n = ['CLS', 'FCP', 'FID', 'INP', 'LCP', 'TTFB'];
            function r(e) {
                let t,
                    n = !1;
                return function () {
                    for (var r = arguments.length, i = Array(r), o = 0; o < r; o++) i[o] = arguments[o];
                    return (n || ((n = !0), (t = e(...i))), t);
                };
            }
            let i = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
                o = (e) => i.test(e);
            function s() {
                let { protocol: e, hostname: t, port: n } = window.location;
                return e + '//' + t + (n ? ':' + n : '');
            }
            function a() {
                let { href: e } = window.location,
                    t = s();
                return e.substring(t.length);
            }
            function u(e) {
                return 'string' == typeof e ? e : e.displayName || e.name || 'Unknown';
            }
            function c(e) {
                return e.finished || e.headersSent;
            }
            function l(e) {
                let t = e.split('?');
                return t[0].replace(/\\/g, '/').replace(/\/\/+/g, '/') + (t[1] ? '?' + t.slice(1).join('?') : '');
            }
            async function d(e, t) {
                let n = t.res || (t.ctx && t.ctx.res);
                if (!e.getInitialProps) return t.ctx && t.Component ? { pageProps: await d(t.Component, t.ctx) } : {};
                let r = await e.getInitialProps(t);
                if (n && c(n)) return r;
                if (!r)
                    throw Object.defineProperty(
                        Error('"' + u(e) + '.getInitialProps()" should resolve to an object. But found "' + r + '" instead.'),
                        '__NEXT_ERROR_CODE',
                        { value: 'E394', enumerable: !1, configurable: !0 },
                    );
                return r;
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
        22681: (e, t, n) => {
            'use strict';
            n.d(t, { w: () => l });
            var r = n(53548),
                i = n(99875),
                o = n(36236),
                s = n(66109),
                a = n(53534),
                u = n(79045),
                c = n(7695);
            let l = () => {
                let e = (0, r.useContext)(a.k),
                    t = e?.isReady ? e.scope : null,
                    n = (0, r.useContext)(u.F) ?? c.Ve,
                    l = (0, r.useContext)(o.S),
                    d = (0, r.useContext)(i.p),
                    f = (0, r.useContext)(s.l),
                    p = (0, r.useMemo)(() => (t && d ? { block: d.scope, filter: l, object: f?.scope ?? null, screen: t, tab: n } : null), [d, l, f, t, n]);
                return (0, r.useMemo)(() => (d && p ? { block: d, object: f, snapshot: p } : null), [d, f, p]);
            };
        },
        23877: (e, t, n) => {
            'use strict';
            var r;
            (n.d(t, { Q: () => i, c: () => r }),
                (function (e) {
                    ((e[(e.ERROR = 10)] = 'ERROR'),
                        (e[(e.WARNING = 20)] = 'WARNING'),
                        (e[(e.INFO = 30)] = 'INFO'),
                        (e[(e.DEBUG = 40)] = 'DEBUG'),
                        (e[(e.TRACE = 50)] = 'TRACE'));
                })(r || (r = {})));
            let i = { [r.ERROR]: 'error', [r.WARNING]: 'warn', [r.INFO]: 'info', [r.DEBUG]: 'debug', [r.TRACE]: 'trace' };
        },
        24114: (e, t, n) => {
            'use strict';
            var r;
            ((t.HB = function (e, t) {
                let { objectsCount: n = 1, objectPosX: r = 1, objectPosY: o = 1 } = t,
                    s = (0, i.makeMetaParams)(2),
                    a = {
                        ...t,
                        objectsCount: n,
                        objectPosX: r,
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
                    let { objectsCount: n = 1, objectPosX: r = 1, objectPosY: o = 1 } = t,
                        s = (0, i.makeMetaParams)(2),
                        a = {
                            ...t,
                            objectsCount: n,
                            objectPosX: r,
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
            let i = n(59203);
            (r || (r = {})).ConcertScreen = 'concert_screen';
        },
        35606: (e, t, n) => {
            'use strict';
            n.d(t, { m: () => r });
            let r = (0, n(53548).createContext)(void 0);
        },
        36155: (e, t) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'errorOnce', {
                    enumerable: !0,
                    get: function () {
                        return n;
                    },
                }));
            let n = (e) => {};
        },
        36236: (e, t, n) => {
            'use strict';
            n.d(t, { S: () => r });
            let r = (0, n(53548).createContext)(null);
        },
        37523: (e, t, n) => {
            'use strict';
            n.d(t, { F: () => l });
            var r = n(88800),
                i = n(53548),
                o = n(63582),
                s = n(53534),
                a = n(99875),
                u = n(245);
            let c = (e, t, n) => {
                    let r = e.createBlockViewSession(),
                        i = !1;
                    return { claimLoadedSession: () => (i ? null : ((i = !0), r)), client: e, identity: t, loadedSession: r, screenSession: n };
                },
                l = (0, o.B)(
                    { kind: 'provider', requiredProps: ['blockId', 'blockType', 'blockPosX', 'blockPosY', 'objectsCount'], scope: 'block' },
                    ({ blockId: e, blockIdForFrom: t, blockPosX: n, blockPosY: o, blockType: l, children: d, objectsCount: f }) => {
                        let p = (0, u.N)(),
                            h = (0, i.useContext)(s.k)?.session,
                            v = [e, l, n, o].join(':'),
                            [g, y] = (0, i.useState)(() => c(p, v, h));
                        (g.client !== p || g.identity !== v || g.screenSession !== h) && y(c(p, v, h));
                        let b = (0, i.useMemo)(
                            () => ({
                                claimLoadedSession: g.claimLoadedSession,
                                loadedSession: g.loadedSession,
                                scope: { blockId: e, blockIdForFrom: t, blockPosX: n, blockPosY: o, blockType: l, objectsCount: f },
                            }),
                            [e, t, n, o, l, f, g.claimLoadedSession, g.loadedSession],
                        );
                        return (0, r.jsx)(a.p, { value: b, children: d });
                    },
                );
        },
        42824: (e, t, n) => {
            'use strict';
            (n.d(t, { s: () => S }), n(4653));
            function r(e, t, n) {
                return ((t = s(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e);
            }
            function i(e, t) {
                return (
                    (function (e) {
                        if (Array.isArray(e)) return e;
                    })(e) ||
                    (function (e, t) {
                        var n = null == e ? null : ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                        if (null != n) {
                            var r,
                                i,
                                o,
                                s,
                                a = [],
                                u = !0,
                                c = !1;
                            try {
                                if (((o = (n = n.call(e)).next), 0 === t)) {
                                    if (Object(n) !== n) return;
                                    u = !1;
                                } else for (; !(u = (r = o.call(n)).done) && (a.push(r.value), a.length !== t); u = !0);
                            } catch (e) {
                                ((c = !0), (i = e));
                            } finally {
                                try {
                                    if (!u && null != n.return && ((s = n.return()), Object(s) !== s)) return;
                                } finally {
                                    if (c) throw i;
                                }
                            }
                            return a;
                        }
                    })(e, t) ||
                    (function (e, t) {
                        if (e) {
                            if ('string' == typeof e) return o(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            if (('Object' === n && e.constructor && (n = e.constructor.name), 'Map' === n || 'Set' === n)) return Array.from(e);
                            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return o(e, t);
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
                for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                return r;
            }
            function s(e) {
                var t = (function (e, t) {
                    if ('object' != typeof e || null === e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, t || 'default');
                        if ('object' != typeof r) return r;
                        throw TypeError('@@toPrimitive must return a primitive value.');
                    }
                    return ('string' === t ? String : Number)(e);
                })(e, 'string');
                return 'symbol' == typeof t ? t : String(t);
            }
            function a(e, t) {
                var n,
                    r,
                    i = c(e, t, 'get');
                return ((n = e), (r = i).get ? r.get.call(n) : r.value);
            }
            function u(e, t, n) {
                var r = c(e, t, 'set');
                return (
                    (function (e, t, n) {
                        if (t.set) t.set.call(e, n);
                        else {
                            if (!t.writable) throw TypeError('attempted to set read only private field');
                            t.value = n;
                        }
                    })(e, r, n),
                    n
                );
            }
            function c(e, t, n) {
                if (!t.has(e)) throw TypeError('attempted to ' + n + ' private field on non-instance');
                return t.get(e);
            }
            function l(e, t, n) {
                if (!t.has(e)) throw TypeError('attempted to get private field on non-instance');
                return n;
            }
            function d(e, t) {
                if (t.has(e)) throw TypeError('Cannot initialize the same private elements twice on an object');
            }
            function f(e, t, n) {
                (d(e, t), t.set(e, n));
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
                    var n = i(t, 2),
                        r = n[0],
                        o = n[1],
                        s = e.lastIndexOf(r);
                    ~s && e.splice(s, 1, o);
                });
            })(h);
            var v = new WeakMap(),
                g = new WeakMap(),
                y = new WeakSet(),
                b = new WeakSet();
            function m() {
                u(this, g, RegExp(a(this, v).join('|'), 'i'));
            }
            function w(e) {
                return a(this, v).indexOf(e.toLowerCase());
            }
            new ((function () {
                var e;
                function t(e) {
                    var n = this;
                    if (!(this instanceof t)) throw TypeError('Cannot call a class as a function');
                    return (
                        p(this, b),
                        p(this, y),
                        f(this, v, { writable: !0, value: void 0 }),
                        f(this, g, { writable: !0, value: void 0 }),
                        u(this, v, e || h.slice()),
                        l(this, y, m).call(this),
                        Object.defineProperties(
                            function (e) {
                                return n.test(e);
                            },
                            Object.entries(Object.getOwnPropertyDescriptors(t.prototype)).reduce(function (e, t) {
                                var o = i(t, 2),
                                    s = o[0],
                                    a = o[1];
                                return (
                                    'function' == typeof a.value && Object.assign(e, r({}, s, { value: n[s].bind(n) })),
                                    'function' == typeof a.get &&
                                        Object.assign(
                                            e,
                                            r({}, s, {
                                                get: function () {
                                                    return n[s];
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
                                            return -1 === l(e, b, w).call(e, t);
                                        })
                                        .map(function (e) {
                                            return e.toLowerCase();
                                        }),
                                ),
                                    l(this, y, m).call(this));
                            },
                        },
                        {
                            key: 'exclude',
                            value: function () {
                                for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], t = e.length; t--;) {
                                    var n = l(this, b, w).call(this, e[t]);
                                    n > -1 && a(this, v).splice(n, 1);
                                }
                                l(this, y, m).call(this);
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
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            ((r.enumerable = r.enumerable || !1), (r.configurable = !0), 'value' in r && (r.writable = !0), Object.defineProperty(e, s(r.key), r));
                        }
                    })(t.prototype, e),
                    Object.defineProperty(t, 'prototype', { writable: !1 }),
                    t
                );
            })())();
            let S = 'funtech-lang';
        },
        43297: (e, t, n) => {
            'use strict';
            function r() {
                throw Error('Cycle detected');
            }
            function i() {
                if (u > 1) u--;
                else {
                    for (var e, t = !1; void 0 !== a;) {
                        var n = a;
                        for (a = void 0, c++; void 0 !== n;) {
                            var r = n.o;
                            if (((n.o = void 0), (n.f &= -3), !(8 & n.f) && h(n)))
                                try {
                                    n.c();
                                } catch (n) {
                                    t || ((e = n), (t = !0));
                                }
                            n = r;
                        }
                    }
                    if (((c = 0), u--, t)) throw e;
                }
            }
            function o(e) {
                if (u > 0) return e();
                u++;
                try {
                    return e();
                } finally {
                    i();
                }
            }
            n.d(t, { EW: () => b, vA: () => o, vP: () => p });
            var s = void 0,
                a = void 0,
                u = 0,
                c = 0,
                l = 0;
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
                    var n = t.S.n;
                    if ((void 0 !== n && (t.r = n), (t.S.n = t), (t.i = -1), void 0 === t.n)) {
                        e.s = t;
                        break;
                    }
                }
            }
            function g(e) {
                for (var t = e.s, n = void 0; void 0 !== t;) {
                    var r = t.p;
                    (-1 === t.i ? (t.S.U(t), void 0 !== r && (r.n = t.n), void 0 !== t.n && (t.n.p = r)) : (n = t),
                        (t.S.n = t.r),
                        void 0 !== t.r && (t.r = void 0),
                        (t = r));
                }
                e.s = n;
            }
            function y(e) {
                (f.call(this, void 0), (this.x = e), (this.s = void 0), (this.g = l - 1), (this.f = 4));
            }
            function b(e) {
                return new y(e);
            }
            function m(e) {
                var t = e.u;
                if (((e.u = void 0), 'function' == typeof t)) {
                    u++;
                    var n = s;
                    s = void 0;
                    try {
                        t();
                    } catch (t) {
                        throw ((e.f &= -2), (e.f |= 8), w(e), t);
                    } finally {
                        ((s = n), i());
                    }
                }
            }
            function w(e) {
                for (var t = e.s; void 0 !== t; t = t.n) t.S.U(t);
                ((e.x = void 0), (e.s = void 0), m(e));
            }
            function S(e) {
                if (s !== this) throw Error('Out-of-order effect');
                (g(this), (s = e), (this.f &= -2), 8 & this.f && w(this), i());
            }
            function j(e) {
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
                            n = e.x;
                        (void 0 !== t && ((t.x = n), (e.e = void 0)), void 0 !== n && ((n.e = t), (e.x = void 0)), e === this.t && (this.t = n));
                    }
                }),
                (f.prototype.subscribe = function (e) {
                    var t = this,
                        n = function () {
                            var n = t.value,
                                r = 32 & this.f;
                            this.f &= -33;
                            try {
                                e(n);
                            } finally {
                                this.f |= r;
                            }
                        },
                        r = new j(n);
                    try {
                        r.c();
                    } catch (e) {
                        throw (r.d(), e);
                    }
                    return r.d.bind(r);
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
                            (c > 100 && r(), (this.v = e), this.i++, l++, u++);
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
                    if (32 == (36 & this.f) || ((this.f &= -5), this.g === l)) return !0;
                    if (((this.g = l), (this.f |= 1), this.i > 0 && !h(this))) return ((this.f &= -2), !0);
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
                    if ((this.h() || r(), 16 & this.f)) throw this.v;
                    return this.v;
                }),
                Object.defineProperty(y.prototype, 'value', {
                    get: function () {
                        1 & this.f && r();
                        var e = d(this);
                        if ((this.h(), void 0 !== e && (e.i = this.i), 16 & this.f)) throw this.v;
                        return this.v;
                    },
                }),
                (j.prototype.c = function () {
                    var e = this.S();
                    try {
                        if (8 & this.f || void 0 === this.x) return;
                        var t = this.x();
                        'function' == typeof t && (this.u = t);
                    } finally {
                        e();
                    }
                }),
                (j.prototype.S = function () {
                    (1 & this.f && r(), (this.f |= 1), (this.f &= -9), m(this), v(this), u++);
                    var e = s;
                    return ((s = this), S.bind(this, e));
                }),
                (j.prototype.N = function () {
                    2 & this.f || ((this.f |= 2), (this.o = a), (a = this));
                }),
                (j.prototype.d = function () {
                    ((this.f |= 8), 1 & this.f || w(this));
                }));
        },
        44084: (e, t, n) => {
            'use strict';
            n.d(t, { r: () => o });
            var r = n(23877),
                i = n(74021);
            class o extends i.q {
                disableLogToConsole;
                constructor(e) {
                    (super(e), (this.disableLogToConsole = e.disableLogToConsole));
                }
                info(e, t) {
                    this.maxLogLevel >= r.c.INFO && this.logToConsole(r.c.INFO, e, t);
                }
                debug(e, t) {
                    this.maxLogLevel >= r.c.DEBUG && this.logToConsole(r.c.DEBUG, e, t);
                }
                trace(e, t) {
                    this.maxLogLevel >= r.c.TRACE && this.logToConsole(r.c.TRACE, e, t);
                }
                warn(e, t) {
                    (this.maxLogLevel >= r.c.WARNING && this.logToConsole(r.c.WARNING, e, t), this.sendToErrorBooster(r.c.WARNING, e, t));
                }
                error(e, t) {
                    (this.maxLogLevel >= r.c.ERROR && this.logToConsole(r.c.ERROR, e, t), this.sendToErrorBooster(r.c.ERROR, e, t));
                }
                log(e, t) {
                    this.logToConsole(r.c.INFO, e, t);
                }
                logToConsole(e, t, n) {
                    if (this.disableLogToConsole) return;
                    let i = r.Q[e];
                    console[i](...this.formatMessage(e, t, n));
                }
                sendToErrorBooster(e, t, n) {
                    window.Ya.Rum.logError({ message: t, level: e, additional: { data: n ? this.obfuscateData({ ...this.additionalData, ...n }) : {} } });
                }
            }
        },
        53534: (e, t, n) => {
            'use strict';
            n.d(t, { k: () => r });
            let r = (0, n(53548).createContext)(null);
        },
        54020: (e, t, n) => {
            'use strict';
            let r;
            n.d(t, { A: () => a });
            let i = { randomUUID: 'undefined' != typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto) },
                o = new Uint8Array(16),
                s = [];
            for (let e = 0; e < 256; ++e) s.push((e + 256).toString(16).slice(1));
            let a = function (e, t, n) {
                if (i.randomUUID && !t && !e) return i.randomUUID();
                let a =
                    (e = e || {}).random ||
                    (
                        e.rng ||
                        function () {
                            if (!r && !(r = 'undefined' != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)))
                                throw Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
                            return r(o);
                        }
                    )();
                if (((a[6] = (15 & a[6]) | 64), (a[8] = (63 & a[8]) | 128), t)) {
                    n = n || 0;
                    for (let e = 0; e < 16; ++e) t[n + e] = a[e];
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
        56374: (e, t, n) => {
            'use strict';
            n.d(t, { c: () => i });
            var r = n(53548);
            function i(e) {
                let t = (0, r.useRef)({ stableFn: (...e) => t.current.callback(...e), callback: e });
                return (
                    (0, r.useInsertionEffect)(() => {
                        t.current.callback = e;
                    }),
                    t.current.stableFn
                );
            }
        },
        56804: (e, t) => {
            'use strict';
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
            function i(e) {
                let t = new URLSearchParams();
                for (let [n, i] of Object.entries(e))
                    if (Array.isArray(i)) for (let e of i) t.append(n, r(e));
                    else t.set(n, r(i));
                return t;
            }
            function o(e) {
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
                        return o;
                    },
                    searchParamsToUrlQuery: function () {
                        return n;
                    },
                    urlQueryToSearchParams: function () {
                        return i;
                    },
                }));
        },
        59203: (e, t) => {
            'use strict';
            var n;
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.MiniappConfig = void 0),
                (t.makeMetaParams = function (e) {
                    return { event: { version: e } };
                }),
                (t.createEvgenAnalytics = function (e, t, n) {
                    return {
                        trackEvent: (r, i) => {
                            let o = { ...i, ...t.getGlobalParams(), ...n.getPlatformParams() };
                            e.trackEvent(r, o);
                        },
                    };
                }),
                !(function (e) {
                    ((e.Music = 'music'), (e.NotApplicable = 'not_applicable'));
                })(n || (t.MiniappConfig = n = {})));
        },
        59791: (e, t, n) => {
            'use strict';
            n.d(t, { I: () => r });
            let r = (0, n(53548).createContext)(null);
        },
        62414: (e, t, n) => {
            'use strict';
            n.d(t, { D: () => u });
            var r = n(53548),
                i = n(63582),
                o = n(245),
                s = n(22681),
                a = n(56374);
            let u = (0, i.n)({ event: 'LandingBlock.Showed/Hidden', kind: 'hook', requiredScopes: ['screen', 'block', 'object'] }, (e = {}) => {
                let { createObserver: t, delayMs: n = 1e3, enabled: i = !0, onVisibilityChange: u, threshold: c = 0.8 } = e,
                    l = (0, o.N)(),
                    d = (0, s.w)(),
                    f = d?.object,
                    p = d?.block.claimLoadedSession,
                    h = (0, r.useMemo)(() => (d ? l.createBlockReporter(d.snapshot) : null), [l, d]),
                    v = (0, r.useRef)(t),
                    g = (0, r.useRef)(u),
                    [y, b] = (0, r.useState)(null),
                    m = (0, a.c)((e) => b(e));
                ((v.current = t), (g.current = u));
                let w = !!t;
                return (
                    (0, r.useEffect)(() => {
                        if (!i || !y || !f || 'string' != typeof f.scope.objectId || !p || !h || (!w && !y.ownerDocument.defaultView?.IntersectionObserver)) return;
                        let e = !1,
                            t = null,
                            r = null,
                            o = () => {
                                r && (clearTimeout(r), (r = null));
                                let e = t?.hide();
                                (f.activeViewSession === t && (f.activeViewSession = null), (t = null), e && (h.hidden({ viewUuid: e }), g.current?.(!1)));
                            },
                            s = (
                                v.current ??
                                ((e, t, n) => {
                                    let r = n.ownerDocument.defaultView?.IntersectionObserver;
                                    if (!r) throw Error('IntersectionObserver is not available');
                                    return new r(e, t);
                                })
                            )(
                                (i) => {
                                    e ||
                                        i.forEach((e) => {
                                            if (!(e.isIntersecting && e.intersectionRatio >= c)) return void o();
                                            r ||
                                                t?.isVisible ||
                                                (r = setTimeout(() => {
                                                    ((r = null), (t ??= p() ?? f.viewSession), (f.activeViewSession = t));
                                                    let e = t.show();
                                                    e && (h.showed({ viewUuid: e }), g.current?.(!0));
                                                }, n));
                                        });
                                },
                                { threshold: c },
                                y,
                            );
                        return (
                            s.observe(y),
                            () => {
                                ((e = !0), o(), s.unobserve(y), s.disconnect());
                            }
                        );
                    }, [y, p, f, n, i, w, c, h]),
                    m
                );
            });
        },
        63582: (e, t, n) => {
            'use strict';
            n.d(t, { B: () => i, n: () => r });
            let r = (e, t) => Object.assign(t, { analyticsCoverageMetadata: e }),
                i = (e, t) => Object.assign(t, { analyticsCoverageMetadata: e });
        },
        64543: (e, t, n) => {
            'use strict';
            n.d(t, { j: () => c });
            var r = n(53548),
                i = n(99875),
                o = n(36236),
                s = n(66109),
                a = n(53534),
                u = n(79045);
            let c = () => {
                let e = (0, r.useContext)(i.p),
                    t = (0, r.useContext)(o.S),
                    n = (0, r.useContext)(s.l),
                    c = (0, r.useContext)(a.k),
                    l = c?.isReady ? c.scope : null,
                    d = (0, r.useContext)(u.F),
                    f = e?.scope ?? null,
                    p = n?.scope ?? null;
                return (0, r.useMemo)(() => ({ block: f, filter: t, object: p, screen: l, tab: d }), [f, t, p, l, d]);
            };
        },
        66109: (e, t, n) => {
            'use strict';
            n.d(t, { l: () => r });
            let r = (0, n(53548).createContext)(null);
        },
        74021: (e, t, n) => {
            'use strict';
            n.d(t, { q: () => u });
            var r = n(14567),
                i = n(243),
                o = n(62151),
                s = n(33396);
            let a = () => 'SECRET';
            class u {
                maxLogLevel;
                secureFields;
                additionalData;
                constructor({ additionalData: e, maxLogLevel: t, secureFields: n }) {
                    ((this.maxLogLevel = t), (this.secureFields = n), (this.additionalData = e));
                }
                formatMessage(e, t, n = {}, i) {
                    let o,
                        a = String(t instanceof Error && t.stack ? t.stack : t),
                        u = (0, s.A)({ ...this.additionalData, ...n });
                    return (Object.keys(u).length && (o = this.obfuscateData(u)), i) ? `${a} ${r(o)}` : [a, o];
                }
                obfuscateData(e) {
                    if (this.secureFields?.length) for (let t of this.secureFields) void 0 !== (0, i.A)(e, t) && (0, o.A)(e, t, a());
                    return e;
                }
            }
        },
        74428: (e, t, n) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                !(function (e, t) {
                    for (var n in t) Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
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
            let r = n(28854)._(n(56804)),
                i = /https?|ftp|gopher|file/;
            function o(e) {
                let { auth: t, hostname: n } = e,
                    o = e.protocol || '',
                    s = e.pathname || '',
                    a = e.hash || '',
                    u = e.query || '',
                    c = !1;
                ((t = t ? encodeURIComponent(t).replace(/%3A/i, ':') + '@' : ''),
                    e.host ? (c = t + e.host) : n && ((c = t + (~n.indexOf(':') ? '[' + n + ']' : n)), e.port && (c += ':' + e.port)),
                    u && 'object' == typeof u && (u = String(r.urlQueryToSearchParams(u))));
                let l = e.search || (u && '?' + u) || '';
                return (
                    o && !o.endsWith(':') && (o += ':'),
                    e.slashes || ((!o || i.test(o)) && !1 !== c) ? ((c = '//' + (c || '')), s && '/' !== s[0] && (s = '/' + s)) : c || (c = ''),
                    a && '#' !== a[0] && (a = '#' + a),
                    l && '?' !== l[0] && (l = '?' + l),
                    '' + o + c + (s = s.replace(/[?#]/g, encodeURIComponent)) + (l = l.replace('#', '%23')) + a
                );
            }
            let s = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
            function a(e) {
                return o(e);
            }
        },
        76903: (e, t, n) => {
            'use strict';
            n.d(t, { a: () => d });
            var r = n(88800),
                i = n(53548),
                o = n(53534),
                s = n(63582),
                a = n(245);
            let u = new WeakMap();
            class c {
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
                    let n =
                        u.get(t) ??
                        (() => {
                            let e = [],
                                t = !1,
                                n = () => {
                                    for (; e.length > 0;) e.shift()?.();
                                },
                                r = () => {
                                    t ||
                                        ((t = !0),
                                        queueMicrotask(() => {
                                            try {
                                                n();
                                            } finally {
                                                ((t = !1), e.length > 0 && r());
                                            }
                                        }));
                                };
                            return {
                                open: (e) => {
                                    (n(), e());
                                },
                                defer: (t) => {
                                    (e.push(t), r());
                                },
                            };
                        })();
                    (u.set(t, n), (this.queue = n));
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
            var l = n(87999);
            let d = (0, s.B)(
                { kind: 'provider', requiredProps: ['pageId'], pendingProps: ['mainObjectType', 'mainObjectId'], scope: 'screen' },
                ({ children: e, ...t }) => {
                    let n = (0, a.N)(),
                        s = ((e) =>
                            (!Object.hasOwn(e, 'mainObjectType') || void 0 !== e.mainObjectType) &&
                            ('string' == typeof e.mainObjectId ||
                                (!Object.hasOwn(e, 'mainObjectId') && (!Object.hasOwn(e, 'mainObjectType') || e.mainObjectType === l.DomainObjectType.NonApplicable))))(
                            t,
                        ),
                        [u, d] = (0, i.useState)(() => {
                            let e = new c(n.createScreenSession().screenViewUuid, n);
                            return { client: n, input: t, isReady: s, scope: s ? n.createScreenScope(t, e) : null, session: e };
                        });
                    if (
                        u.client !== n ||
                        u.input.pageId !== t.pageId ||
                        u.input.skeletonId !== t.skeletonId ||
                        u.input.mainObjectType !== t.mainObjectType ||
                        u.input.mainObjectId !== t.mainObjectId
                    ) {
                        let i = new c(n.createScreenSession().screenViewUuid, n),
                            a = { client: n, input: t, isReady: s, scope: s ? n.createScreenScope(t, i) : null, session: i };
                        return (d(a), (0, r.jsx)(o.k, { value: a, children: e }));
                    }
                    if (
                        u.isReady !== s ||
                        u.input.displayReasonId !== t.displayReasonId ||
                        u.input.pageIdForFrom !== t.pageIdForFrom ||
                        u.input.pagePlacement !== t.pagePlacement ||
                        u.input.pageStyle !== t.pageStyle
                    ) {
                        let i = { ...u, input: t, isReady: s, scope: s ? n.createScreenScope(t, u.session) : null };
                        return (d(i), (0, r.jsx)(o.k, { value: i, children: e }));
                    }
                    return (0, r.jsx)(o.k, { value: u, children: e });
                },
            );
        },
        79045: (e, t, n) => {
            'use strict';
            n.d(t, { F: () => r });
            let r = (0, n(53548).createContext)(null);
        },
        80643: (e, t, n) => {
            'use strict';
            n.d(t, { S: () => u });
            var r = n(53548),
                i = n(63582),
                o = n(245),
                s = n(22681),
                a = n(56374);
            let u = (0, i.n)({ event: 'LandingBlock.Navigated', kind: 'hook', requiredScopes: ['screen', 'block', 'object'] }, () => {
                let e = (0, o.N)(),
                    t = (0, s.w)(),
                    n = (0, r.useMemo)(() => (t ? e.createBlockReporter(t.snapshot) : null), [e, t]);
                return (0, a.c)((e) => {
                    t?.object &&
                        n &&
                        n.navigated({ ...e, from: e.from ?? t.snapshot.screen.pageId, viewUuid: (t.object.activeViewSession ?? t.object.viewSession).start() });
                });
            });
        },
        84423: (e, t, n) => {
            'use strict';
            n.d(t, { s: () => o });
            var r = n(53548),
                i = n(59791);
            let o = () => {
                let e = (0, r.useContext)(i.I);
                return (0, r.useMemo)(() => (e ? { evgenInstance: e } : null), [e]);
            };
        },
        87013: (e, t, n) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'isLocalURL', {
                    enumerable: !0,
                    get: function () {
                        return o;
                    },
                }));
            let r = n(20498),
                i = n(42411);
            function o(e) {
                if (!(0, r.isAbsoluteUrl)(e)) return !0;
                try {
                    let t = (0, r.getLocationOrigin)(),
                        n = new URL(e, t);
                    return n.origin === t && (0, i.hasBasePath)(n.pathname);
                } catch (e) {
                    return !1;
                }
            }
        },
        88969: (e, t, n) => {
            'use strict';
            n.d(t, { A: () => c });
            var r = n(88092),
                i = n(53548),
                o = n(84014),
                s = n(2058);
            function a(e) {
                var t = (0, s.A)(),
                    n = t.formatMessage,
                    r = t.textComponent,
                    o = void 0 === r ? i.Fragment : r,
                    a = e.id,
                    u = e.description,
                    c = e.defaultMessage,
                    l = e.values,
                    d = e.children,
                    f = e.tagName,
                    p = void 0 === f ? o : f,
                    h = n({ id: a, description: u, defaultMessage: c }, l, { ignoreTag: e.ignoreTag });
                return 'function' == typeof d ? d(Array.isArray(h) ? h : [h]) : p ? i.createElement(p, null, h) : i.createElement(i.Fragment, null, h);
            }
            a.displayName = 'FormattedMessage';
            var u = i.memo(a, function (e, t) {
                var n = e.values,
                    i = (0, r.__rest)(e, ['values']),
                    s = t.values,
                    a = (0, r.__rest)(t, ['values']);
                return (0, o.bN)(s, n) && (0, o.bN)(i, a);
            });
            u.displayName = 'MemoizedFormattedMessage';
            let c = u;
        },
        89846: (e, t, n) => {
            'use strict';
            n.d(t, { g: () => o });
            var r = n(53548),
                i = n(35606);
            let o = () => ({ hash: (0, r.useContext)(i.m) });
        },
        95982: (e) => {
            var t = /((([a-zA-Z]+(-[a-zA-Z0-9]+){0,2})|\*)(;q=[0-1](\.[0-9]+)?)?)*/g;
            function n(e) {
                return (e || '')
                    .match(t)
                    .map(function (e) {
                        if (e) {
                            var t = e.split(';'),
                                n = t[0].split('-'),
                                r = 3 === n.length;
                            return { code: n[0], script: r ? n[1] : null, region: r ? n[2] : n[1], quality: t[1] ? parseFloat(t[1].split('=')[1]) : 1 };
                        }
                    })
                    .filter(function (e) {
                        return e;
                    })
                    .sort(function (e, t) {
                        return t.quality - e.quality;
                    });
            }
            ((e.exports.parse = n),
                (e.exports.pick = function (e, t, r) {
                    if (((r = r || {}), !e || !e.length || !t)) return null;
                    'string' == typeof t && (t = n(t));
                    for (
                        var i = e.map(function (e) {
                                var t = e.split('-'),
                                    n = 3 === t.length;
                                return { code: t[0], script: n ? t[1] : null, region: n ? t[2] : t[1] };
                            }),
                            o = 0;
                        o < t.length;
                        o++
                    )
                        for (
                            var s = t[o],
                                a = s.code.toLowerCase(),
                                u = s.region ? s.region.toLowerCase() : s.region,
                                c = s.script ? s.script.toLowerCase() : s.script,
                                l = 0;
                            l < i.length;
                            l++
                        ) {
                            var d = i[l].code.toLowerCase(),
                                f = i[l].script ? i[l].script.toLowerCase() : i[l].script,
                                p = i[l].region ? i[l].region.toLowerCase() : i[l].region;
                            if (a === d && (r.loose || !c || c === f) && (r.loose || !u || u === p)) return e[l];
                        }
                    return null;
                }));
        },
        99875: (e, t, n) => {
            'use strict';
            n.d(t, { p: () => r });
            let r = (0, n(53548).createContext)(null);
        },
    },
]);
