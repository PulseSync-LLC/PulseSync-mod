(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5622],
    {
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
                        return O;
                    },
                }));
            let n = r(28854),
                o = r(88800),
                u = n._(r(53548)),
                i = r(74428),
                s = r(92746),
                a = r(7733),
                c = r(13985),
                l = r(20498),
                f = r(13872);
            r(4115);
            let d = r(53437),
                p = r(87013),
                h = r(48985);
            function E(e) {
                return 'string' == typeof e ? e : (0, i.formatUrl)(e);
            }
            function g(e) {
                let t,
                    r,
                    n,
                    [i, g] = (0, u.useOptimistic)(d.IDLE_LINK_STATUS),
                    O = (0, u.useRef)(null),
                    {
                        href: y,
                        as: T,
                        children: _,
                        prefetch: R = null,
                        passHref: N,
                        replace: b,
                        shallow: C,
                        scroll: A,
                        onClick: v,
                        onMouseEnter: I,
                        onTouchStart: P,
                        legacyBehavior: U = !1,
                        onNavigate: D,
                        ref: L,
                        unstable_dynamicOnHover: S,
                        ...x
                    } = e;
                ((t = _), U && ('string' == typeof t || 'number' == typeof t) && (t = (0, o.jsx)('a', { children: t })));
                let j = u.default.useContext(s.AppRouterContext),
                    F = !1 !== R,
                    M = null === R || 'auto' === R ? a.PrefetchKind.AUTO : a.PrefetchKind.FULL,
                    { href: B, as: k } = u.default.useMemo(() => {
                        let e = E(y);
                        return { href: e, as: T ? E(T) : e };
                    }, [y, T]);
                U && (r = u.default.Children.only(t));
                let w = U ? r && 'object' == typeof r && r.ref : L,
                    G = u.default.useCallback(
                        (e) => (
                            null !== j && (O.current = (0, d.mountLinkInstance)(e, B, j, M, F, g)),
                            () => {
                                (O.current && ((0, d.unmountLinkForCurrentNavigation)(O.current), (O.current = null)), (0, d.unmountPrefetchableInstance)(e));
                            }
                        ),
                        [F, B, j, M, g],
                    ),
                    Q = {
                        ref: (0, c.useMergedRef)(G, w),
                        onClick(e) {
                            (U || 'function' != typeof v || v(e),
                                U && r.props && 'function' == typeof r.props.onClick && r.props.onClick(e),
                                j &&
                                    (e.defaultPrevented ||
                                        (function (e, t, r, n, o, i, s) {
                                            let { nodeName: a } = e.currentTarget;
                                            if (
                                                !(
                                                    ('A' === a.toUpperCase() &&
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
                                                    o && (e.preventDefault(), location.replace(t));
                                                    return;
                                                }
                                                if ((e.preventDefault(), s)) {
                                                    let e = !1;
                                                    if (
                                                        (s({
                                                            preventDefault: () => {
                                                                e = !0;
                                                            },
                                                        }),
                                                        e)
                                                    )
                                                        return;
                                                }
                                                u.default.startTransition(() => {
                                                    (0, h.dispatchNavigateAction)(r || t, o ? 'replace' : 'push', null == i || i, n.current);
                                                });
                                            }
                                        })(e, B, k, O, b, A, D)));
                        },
                        onMouseEnter(e) {
                            (U || 'function' != typeof I || I(e),
                                U && r.props && 'function' == typeof r.props.onMouseEnter && r.props.onMouseEnter(e),
                                j && F && (0, d.onNavigationIntent)(e.currentTarget, !0 === S));
                        },
                        onTouchStart: function (e) {
                            (U || 'function' != typeof P || P(e),
                                U && r.props && 'function' == typeof r.props.onTouchStart && r.props.onTouchStart(e),
                                j && F && (0, d.onNavigationIntent)(e.currentTarget, !0 === S));
                        },
                    };
                return (
                    (0, l.isAbsoluteUrl)(k) ? (Q.href = k) : (U && !N && ('a' !== r.type || 'href' in r.props)) || (Q.href = (0, f.addBasePath)(k)),
                    (n = U ? u.default.cloneElement(r, Q) : (0, o.jsx)('a', { ...x, ...Q, children: t })),
                    (0, o.jsx)(m.Provider, { value: i, children: n })
                );
            }
            r(36155);
            let m = (0, u.createContext)(d.IDLE_LINK_STATUS),
                O = () => (0, u.useContext)(m);
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
                        return o;
                    },
                }));
            let n = r(53548);
            function o(e, t) {
                let r = (0, n.useRef)(null),
                    o = (0, n.useRef)(null);
                return (0, n.useCallback)(
                    (n) => {
                        if (null === n) {
                            let e = r.current;
                            e && ((r.current = null), e());
                            let t = o.current;
                            t && ((o.current = null), t());
                        } else (e && (r.current = u(e, n)), t && (o.current = u(t, n)));
                    },
                    [e, t],
                );
            }
            function u(e, t) {
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
            (e.exports = function (e, t, n, o) {
                return JSON.stringify(e, r(t, o), n);
            }).getSerialize = r;
            function r(e, t) {
                var r = [],
                    n = [];
                return (
                    null == t &&
                        (t = function (e, t) {
                            return r[0] === t ? '[Circular ~]' : '[Circular ~.' + n.slice(0, r.indexOf(t)).join('.') + ']';
                        }),
                    function (o, u) {
                        if (r.length > 0) {
                            var i = r.indexOf(this);
                            (~i ? r.splice(i + 1) : r.push(this), ~i ? n.splice(i, 1 / 0, o) : n.push(o), ~r.indexOf(u) && (u = t.call(this, o, u)));
                        } else r.push(u);
                        return null == e ? u : e.call(this, o, u);
                    }
                );
            }
        },
        17017: (e, t, r) => {
            'use strict';
            var n;
            (r.d(t, { Z: () => n }),
                (function (e) {
                    ((e.METHOD_NOT_SUPPORTED = 'E_BEACON_METHOD_NOT_SUPPORTED'),
                        (e.NOT_AVAILABLE = 'E_BEACON_NOT_AVAILABLE'),
                        (e.QUEUE_FAILED = 'E_BEACON_QUEUE_FAILED'),
                        (e.NO_RESPONSE_DATA = 'E_BEACON_NO_RESPONSE_DATA'),
                        (e.RETRY_EXHAUSTED = 'E_BEACON_RETRY_EXHAUSTED'));
                })(n || (n = {})));
        },
        19840: (e, t, r) => {
            'use strict';
            (r.d(t, { G: () => o }), r(46606));
            var n = r(91136);
            class o extends n.m {
                name = 'HttpErrorException';
                statusCode;
                constructor(e, t) {
                    (super(e, { code: 'E_HTTP_CLIENT_NON_2XX_3XX_RESPONSE', cause: t.cause }),
                        (this.statusCode = t.statusCode),
                        Object.setPrototypeOf(this, o.prototype));
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
                        return O;
                    },
                    MissingStaticPage: function () {
                        return m;
                    },
                    NormalizeError: function () {
                        return E;
                    },
                    PageNotFoundError: function () {
                        return g;
                    },
                    SP: function () {
                        return d;
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
                        return a;
                    },
                    getLocationOrigin: function () {
                        return i;
                    },
                    getURL: function () {
                        return s;
                    },
                    isAbsoluteUrl: function () {
                        return u;
                    },
                    isResSent: function () {
                        return c;
                    },
                    loadGetInitialProps: function () {
                        return f;
                    },
                    normalizeRepeatedSlashes: function () {
                        return l;
                    },
                    stringifyError: function () {
                        return y;
                    },
                }));
            let r = ['CLS', 'FCP', 'FID', 'INP', 'LCP', 'TTFB'];
            function n(e) {
                let t,
                    r = !1;
                return function () {
                    for (var n = arguments.length, o = Array(n), u = 0; u < n; u++) o[u] = arguments[u];
                    return (r || ((r = !0), (t = e(...o))), t);
                };
            }
            let o = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
                u = (e) => o.test(e);
            function i() {
                let { protocol: e, hostname: t, port: r } = window.location;
                return e + '//' + t + (r ? ':' + r : '');
            }
            function s() {
                let { href: e } = window.location,
                    t = i();
                return e.substring(t.length);
            }
            function a(e) {
                return 'string' == typeof e ? e : e.displayName || e.name || 'Unknown';
            }
            function c(e) {
                return e.finished || e.headersSent;
            }
            function l(e) {
                let t = e.split('?');
                return t[0].replace(/\\/g, '/').replace(/\/\/+/g, '/') + (t[1] ? '?' + t.slice(1).join('?') : '');
            }
            async function f(e, t) {
                let r = t.res || (t.ctx && t.ctx.res);
                if (!e.getInitialProps) return t.ctx && t.Component ? { pageProps: await f(t.Component, t.ctx) } : {};
                let n = await e.getInitialProps(t);
                if (r && c(r)) return n;
                if (!n)
                    throw Object.defineProperty(
                        Error('"' + a(e) + '.getInitialProps()" should resolve to an object. But found "' + n + '" instead.'),
                        '__NEXT_ERROR_CODE',
                        { value: 'E394', enumerable: !1, configurable: !0 },
                    );
                return n;
            }
            let d = 'undefined' != typeof performance,
                p = d && ['mark', 'measure', 'getEntriesByName'].every((e) => 'function' == typeof performance[e]);
            class h extends Error {}
            class E extends Error {}
            class g extends Error {
                constructor(e) {
                    (super(), (this.code = 'ENOENT'), (this.name = 'PageNotFoundError'), (this.message = 'Cannot find module for page: ' + e));
                }
            }
            class m extends Error {
                constructor(e, t) {
                    (super(), (this.message = 'Failed to load static file for page: ' + e + ' ' + t));
                }
            }
            class O extends Error {
                constructor() {
                    (super(), (this.code = 'ENOENT'), (this.message = 'Cannot find the middleware module'));
                }
            }
            function y(e) {
                return JSON.stringify({ message: e.message, stack: e.stack });
            }
        },
        23877: (e, t, r) => {
            'use strict';
            var n;
            (r.d(t, { Q: () => o, c: () => n }),
                (function (e) {
                    ((e[(e.ERROR = 10)] = 'ERROR'),
                        (e[(e.WARNING = 20)] = 'WARNING'),
                        (e[(e.INFO = 30)] = 'INFO'),
                        (e[(e.DEBUG = 40)] = 'DEBUG'),
                        (e[(e.TRACE = 50)] = 'TRACE'));
                })(n || (n = {})));
            let o = { [n.ERROR]: 'error', [n.WARNING]: 'warn', [n.INFO]: 'info', [n.DEBUG]: 'debug', [n.TRACE]: 'trace' };
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
        44084: (e, t, r) => {
            'use strict';
            r.d(t, { r: () => u });
            var n = r(23877),
                o = r(74021);
            class u extends o.q {
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
                    let o = n.Q[e];
                    console[o](...this.formatMessage(e, t, r));
                }
                sendToErrorBooster(e, t, r) {
                    window.Ya.Rum.logError({ message: t, level: e, additional: { data: r ? this.obfuscateData({ ...this.additionalData, ...r }) : {} } });
                }
            }
        },
        46606: (e, t, r) => {
            'use strict';
            var n;
            (r.d(t, { X: () => n }),
                (function (e) {
                    ((e[(e.NOT_MODIFIED = 304)] = 'NOT_MODIFIED'),
                        (e[(e.NOT_FOUND = 404)] = 'NOT_FOUND'),
                        (e[(e.BAD_REQUEST = 400)] = 'BAD_REQUEST'),
                        (e[(e.REQUEST_TIMEOUT = 408)] = 'REQUEST_TIMEOUT'),
                        (e[(e.PRECONDITION_FAILED = 412)] = 'PRECONDITION_FAILED'),
                        (e[(e.TEAPOT = 418)] = 'TEAPOT'));
                })(n || (n = {})));
        },
        54020: (e, t, r) => {
            'use strict';
            let n;
            r.d(t, { A: () => s });
            let o = { randomUUID: 'undefined' != typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto) },
                u = new Uint8Array(16),
                i = [];
            for (let e = 0; e < 256; ++e) i.push((e + 256).toString(16).slice(1));
            let s = function (e, t, r) {
                if (o.randomUUID && !t && !e) return o.randomUUID();
                let s =
                    (e = e || {}).random ||
                    (
                        e.rng ||
                        function () {
                            if (!n && !(n = 'undefined' != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)))
                                throw Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
                            return n(u);
                        }
                    )();
                if (((s[6] = (15 & s[6]) | 64), (s[8] = (63 & s[8]) | 128), t)) {
                    r = r || 0;
                    for (let e = 0; e < 16; ++e) t[r + e] = s[e];
                    return t;
                }
                return (function (e, t = 0) {
                    return (
                        i[e[t + 0]] +
                        i[e[t + 1]] +
                        i[e[t + 2]] +
                        i[e[t + 3]] +
                        '-' +
                        i[e[t + 4]] +
                        i[e[t + 5]] +
                        '-' +
                        i[e[t + 6]] +
                        i[e[t + 7]] +
                        '-' +
                        i[e[t + 8]] +
                        i[e[t + 9]] +
                        '-' +
                        i[e[t + 10]] +
                        i[e[t + 11]] +
                        i[e[t + 12]] +
                        i[e[t + 13]] +
                        i[e[t + 14]] +
                        i[e[t + 15]]
                    );
                })(s);
            };
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
            function o(e) {
                let t = new URLSearchParams();
                for (let [r, o] of Object.entries(e))
                    if (Array.isArray(o)) for (let e of o) t.append(r, n(e));
                    else t.set(r, n(o));
                return t;
            }
            function u(e) {
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
                        return u;
                    },
                    searchParamsToUrlQuery: function () {
                        return r;
                    },
                    urlQueryToSearchParams: function () {
                        return o;
                    },
                }));
        },
        74021: (e, t, r) => {
            'use strict';
            r.d(t, { q: () => a });
            var n = r(14567),
                o = r(243),
                u = r(62151),
                i = r(33396);
            let s = () => 'SECRET';
            class a {
                maxLogLevel;
                secureFields;
                additionalData;
                constructor({ additionalData: e, maxLogLevel: t, secureFields: r }) {
                    ((this.maxLogLevel = t), (this.secureFields = r), (this.additionalData = e));
                }
                formatMessage(e, t, r = {}, o) {
                    let u,
                        s = String(t instanceof Error && t.stack ? t.stack : t),
                        a = (0, i.A)({ ...this.additionalData, ...r });
                    return (Object.keys(a).length && (u = this.obfuscateData(a)), o) ? `${s} ${n(u)}` : [s, u];
                }
                obfuscateData(e) {
                    if (this.secureFields?.length) for (let t of this.secureFields) void 0 !== (0, o.A)(e, t) && (0, u.A)(e, t, s());
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
                        return u;
                    },
                    formatWithValidation: function () {
                        return s;
                    },
                    urlObjectKeys: function () {
                        return i;
                    },
                }));
            let n = r(28854)._(r(56804)),
                o = /https?|ftp|gopher|file/;
            function u(e) {
                let { auth: t, hostname: r } = e,
                    u = e.protocol || '',
                    i = e.pathname || '',
                    s = e.hash || '',
                    a = e.query || '',
                    c = !1;
                ((t = t ? encodeURIComponent(t).replace(/%3A/i, ':') + '@' : ''),
                    e.host ? (c = t + e.host) : r && ((c = t + (~r.indexOf(':') ? '[' + r + ']' : r)), e.port && (c += ':' + e.port)),
                    a && 'object' == typeof a && (a = String(n.urlQueryToSearchParams(a))));
                let l = e.search || (a && '?' + a) || '';
                return (
                    u && !u.endsWith(':') && (u += ':'),
                    e.slashes || ((!u || o.test(u)) && !1 !== c) ? ((c = '//' + (c || '')), i && '/' !== i[0] && (i = '/' + i)) : c || (c = ''),
                    s && '#' !== s[0] && (s = '#' + s),
                    l && '?' !== l[0] && (l = '?' + l),
                    '' + u + c + (i = i.replace(/[?#]/g, encodeURIComponent)) + (l = l.replace('#', '%23')) + s
                );
            }
            let i = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
            function s(e) {
                return u(e);
            }
        },
        77451: (e, t, r) => {
            'use strict';
            r.d(t, { Jt: () => u, TF: () => s, hZ: () => i });
            var n = function () {
                return (n =
                    Object.assign ||
                    function (e) {
                        for (var t, r = 1, n = arguments.length; r < n; r++)
                            for (var o in (t = arguments[r])) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e;
                    }).apply(this, arguments);
            };
            function o(e, t) {
                if (!t) return '';
                var r = '; ' + e;
                return !0 === t ? r : r + '=' + t;
            }
            function u(e) {
                return (function (e) {
                    for (var t = {}, r = e ? e.split('; ') : [], n = 0; n < r.length; n++) {
                        var o = r[n].split('='),
                            u = o.slice(1).join('=');
                        '"' === u[0] && (u = u.slice(1, -1));
                        try {
                            t[decodeURIComponent(o[0])] = u.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
                        } catch (e) {}
                    }
                    return t;
                })(document.cookie)[e];
            }
            function i(e, t, r) {
                var u;
                document.cookie =
                    ((u = n({ path: '/' }, r)),
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
                                o('Expires', e.expires ? e.expires.toUTCString() : '') +
                                o('Domain', e.domain) +
                                o('Path', e.path) +
                                o('Secure', e.secure) +
                                o('SameSite', e.sameSite)
                            );
                        })(u));
            }
            function s(e, t) {
                i(e, '', n(n({}, t), { expires: -1 }));
            }
        },
        87013: (e, t, r) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'isLocalURL', {
                    enumerable: !0,
                    get: function () {
                        return u;
                    },
                }));
            let n = r(20498),
                o = r(42411);
            function u(e) {
                if (!(0, n.isAbsoluteUrl)(e)) return !0;
                try {
                    let t = (0, n.getLocationOrigin)(),
                        r = new URL(e, t);
                    return r.origin === t && (0, o.hasBasePath)(r.pathname);
                } catch (e) {
                    return !1;
                }
            }
        },
        89916: (e, t, r) => {
            'use strict';
            r.d(t, { GX: () => u.G, X1: () => n.X, m5: () => o.m });
            var n = r(46606),
                o = r(91136),
                u = r(19840);
            r(17017);
        },
        91136: (e, t, r) => {
            'use strict';
            r.d(t, { m: () => o });
            class n extends Error {
                name = 'BaseException';
                message;
                code;
                data;
                stack;
                constructor(e, t = {}) {
                    let { code: r = 'E_INTERNAL', data: o = {}, ...u } = t,
                        i = e || 'Internal error';
                    (super(i, u), (this.message = i), (this.code = r), (this.data = o), (this.stack = Error(i).stack), Object.setPrototypeOf(this, n.prototype));
                }
            }
            class o extends n {
                name = 'HttpException';
                constructor(e = 'Http Client error', { code: t = 'E_HTTP_CLIENT', ...r } = {}) {
                    (super(e, { code: t, ...r }), Object.setPrototypeOf(this, o.prototype));
                }
            }
        },
    },
]);
