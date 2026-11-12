(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1384, 8205],
    {
        245: (e, t, r) => {
            'use strict';
            r.d(t, { N: () => i });
            var n = r(53548),
                o = r(59791);
            let i = () => {
                let e = (0, n.useContext)(o.I);
                if (!e) throw Error('AnalyticsProvider is required');
                return e;
            };
        },
        4653: (e, t, r) => {
            'use strict';
            r.d(t, { U: () => a });
            var n = r(95982),
                o = Object.defineProperty,
                i = (e, t, r) => (
                    ((e, t, r) => (t in e ? o(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r)))(e, 'symbol' != typeof t ? t + '' : t, r),
                    r
                );
            class a {
                constructor({ brandConfig: e, enableWideLanguageSelectWithBrandLangs: t }) {
                    (i(this, 'brandLangs'),
                        i(this, 'brandDefaultLang'),
                        i(this, 'regionLangs'),
                        i(this, 'enableWideLanguageSelectWithBrandLangs'),
                        (this.brandLangs = e.langs),
                        (this.brandDefaultLang = e.defaultLang),
                        (this.regionLangs = e.regionLangs),
                        (this.enableWideLanguageSelectWithBrandLangs = t));
                }
                static parseAcceptLanguage(e) {
                    return n.parse(e).map(({ code: e }) => e);
                }
                getLang({ regionIsoName: e, urlLang: t, cookieLang: r, acceptLangs: n }) {
                    var o, i, a;
                    let s = e ? (null == (o = this.regionLangs) ? void 0 : o[e]) : void 0,
                        u = this.enableWideLanguageSelectWithBrandLangs ? this.brandLangs : null != (i = null == s ? void 0 : s.langs) ? i : this.brandLangs,
                        l = null != (a = null == s ? void 0 : s.defaultLang) ? a : this.brandDefaultLang;
                    return this.selectLang({ supportedLangs: u, defaultLang: l, urlLang: t, cookieLang: r, acceptLangs: n });
                }
                intersect(e, t) {
                    let r = new Set(t);
                    return e.filter((e) => r.has(e));
                }
                selectLang({ supportedLangs: e, defaultLang: t, urlLang: r, cookieLang: n, acceptLangs: o }) {
                    if ('string' == typeof r && e.includes(r)) return r;
                    let i = null != o ? o : [],
                        a = n ? [n, ...i] : i,
                        s = this.intersect(a, e)[0];
                    return void 0 !== s ? s : t;
                }
            }
        },
        7695: (e, t, r) => {
            'use strict';
            r.d(t, { Ve: () => a, Vn: () => o, p6: () => i, w: () => n });
            let n = '',
                o = 0,
                i = !1,
                a = Object.freeze({ tabId: n, tabPos: 0, isTabSelectedByDefault: !1 });
        },
        12389: (e, t, r) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                !(function (e, t) {
                    for (var r in t) Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
                })(t, {
                    default: function () {
                        return b;
                    },
                    useLinkStatus: function () {
                        return v;
                    },
                }));
            let n = r(28854),
                o = r(88800),
                i = n._(r(53548)),
                a = r(74428),
                s = r(92746),
                u = r(7733),
                l = r(13985),
                c = r(20498),
                f = r(13872);
            r(4115);
            let d = r(53437),
                p = r(87013),
                h = r(48985);
            function g(e) {
                return 'string' == typeof e ? e : (0, a.formatUrl)(e);
            }
            function b(e) {
                let t,
                    r,
                    n,
                    [a, b] = (0, i.useOptimistic)(d.IDLE_LINK_STATUS),
                    v = (0, i.useRef)(null),
                    {
                        href: y,
                        as: w,
                        children: E,
                        prefetch: k = null,
                        passHref: L,
                        replace: j,
                        shallow: O,
                        scroll: C,
                        onClick: R,
                        onMouseEnter: x,
                        onTouchStart: S,
                        legacyBehavior: T = !1,
                        onNavigate: I,
                        ref: P,
                        unstable_dynamicOnHover: A,
                        ...N
                    } = e;
                ((t = E), T && ('string' == typeof t || 'number' == typeof t) && (t = (0, o.jsx)('a', { children: t })));
                let U = i.default.useContext(s.AppRouterContext),
                    _ = !1 !== k,
                    D = null === k || 'auto' === k ? u.PrefetchKind.AUTO : u.PrefetchKind.FULL,
                    { href: M, as: B } = i.default.useMemo(() => {
                        let e = g(y);
                        return { href: e, as: w ? g(w) : e };
                    }, [y, w]);
                T && (r = i.default.Children.only(t));
                let F = T ? r && 'object' == typeof r && r.ref : P,
                    z = i.default.useCallback(
                        (e) => (
                            null !== U && (v.current = (0, d.mountLinkInstance)(e, M, U, D, _, b)),
                            () => {
                                (v.current && ((0, d.unmountLinkForCurrentNavigation)(v.current), (v.current = null)), (0, d.unmountPrefetchableInstance)(e));
                            }
                        ),
                        [_, M, U, D, b],
                    ),
                    W = {
                        ref: (0, l.useMergedRef)(z, F),
                        onClick(e) {
                            (T || 'function' != typeof R || R(e),
                                T && r.props && 'function' == typeof r.props.onClick && r.props.onClick(e),
                                U &&
                                    (e.defaultPrevented ||
                                        (function (e, t, r, n, o, a, s) {
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
                                                i.default.startTransition(() => {
                                                    (0, h.dispatchNavigateAction)(r || t, o ? 'replace' : 'push', null == a || a, n.current);
                                                });
                                            }
                                        })(e, M, B, v, j, C, I)));
                        },
                        onMouseEnter(e) {
                            (T || 'function' != typeof x || x(e),
                                T && r.props && 'function' == typeof r.props.onMouseEnter && r.props.onMouseEnter(e),
                                U && _ && (0, d.onNavigationIntent)(e.currentTarget, !0 === A));
                        },
                        onTouchStart: function (e) {
                            (T || 'function' != typeof S || S(e),
                                T && r.props && 'function' == typeof r.props.onTouchStart && r.props.onTouchStart(e),
                                U && _ && (0, d.onNavigationIntent)(e.currentTarget, !0 === A));
                        },
                    };
                return (
                    (0, c.isAbsoluteUrl)(B) ? (W.href = B) : (T && !L && ('a' !== r.type || 'href' in r.props)) || (W.href = (0, f.addBasePath)(B)),
                    (n = T ? i.default.cloneElement(r, W) : (0, o.jsx)('a', { ...N, ...W, children: t })),
                    (0, o.jsx)(m.Provider, { value: a, children: n })
                );
            }
            r(36155);
            let m = (0, i.createContext)(d.IDLE_LINK_STATUS),
                v = () => (0, i.useContext)(m);
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
                        } else (e && (r.current = i(e, n)), t && (o.current = i(t, n)));
                    },
                    [e, t],
                );
            }
            function i(e, t) {
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
                    function (o, i) {
                        if (r.length > 0) {
                            var a = r.indexOf(this);
                            (~a ? r.splice(a + 1) : r.push(this), ~a ? n.splice(a, 1 / 0, o) : n.push(o), ~r.indexOf(i) && (i = t.call(this, o, i)));
                        } else r.push(i);
                        return null == e ? i : e.call(this, o, i);
                    }
                );
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
                        return v;
                    },
                    MissingStaticPage: function () {
                        return m;
                    },
                    NormalizeError: function () {
                        return g;
                    },
                    PageNotFoundError: function () {
                        return b;
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
                        return u;
                    },
                    getLocationOrigin: function () {
                        return a;
                    },
                    getURL: function () {
                        return s;
                    },
                    isAbsoluteUrl: function () {
                        return i;
                    },
                    isResSent: function () {
                        return l;
                    },
                    loadGetInitialProps: function () {
                        return f;
                    },
                    normalizeRepeatedSlashes: function () {
                        return c;
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
                    for (var n = arguments.length, o = Array(n), i = 0; i < n; i++) o[i] = arguments[i];
                    return (r || ((r = !0), (t = e(...o))), t);
                };
            }
            let o = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
                i = (e) => o.test(e);
            function a() {
                let { protocol: e, hostname: t, port: r } = window.location;
                return e + '//' + t + (r ? ':' + r : '');
            }
            function s() {
                let { href: e } = window.location,
                    t = a();
                return e.substring(t.length);
            }
            function u(e) {
                return 'string' == typeof e ? e : e.displayName || e.name || 'Unknown';
            }
            function l(e) {
                return e.finished || e.headersSent;
            }
            function c(e) {
                let t = e.split('?');
                return t[0].replace(/\\/g, '/').replace(/\/\/+/g, '/') + (t[1] ? '?' + t.slice(1).join('?') : '');
            }
            async function f(e, t) {
                let r = t.res || (t.ctx && t.ctx.res);
                if (!e.getInitialProps) return t.ctx && t.Component ? { pageProps: await f(t.Component, t.ctx) } : {};
                let n = await e.getInitialProps(t);
                if (r && l(r)) return n;
                if (!n)
                    throw Object.defineProperty(
                        Error('"' + u(e) + '.getInitialProps()" should resolve to an object. But found "' + n + '" instead.'),
                        '__NEXT_ERROR_CODE',
                        { value: 'E394', enumerable: !1, configurable: !0 },
                    );
                return n;
            }
            let d = 'undefined' != typeof performance,
                p = d && ['mark', 'measure', 'getEntriesByName'].every((e) => 'function' == typeof performance[e]);
            class h extends Error {}
            class g extends Error {}
            class b extends Error {
                constructor(e) {
                    (super(), (this.code = 'ENOENT'), (this.name = 'PageNotFoundError'), (this.message = 'Cannot find module for page: ' + e));
                }
            }
            class m extends Error {
                constructor(e, t) {
                    (super(), (this.message = 'Failed to load static file for page: ' + e + ' ' + t));
                }
            }
            class v extends Error {
                constructor() {
                    (super(), (this.code = 'ENOENT'), (this.message = 'Cannot find the middleware module'));
                }
            }
            function y(e) {
                return JSON.stringify({ message: e.message, stack: e.stack });
            }
        },
        22681: (e, t, r) => {
            'use strict';
            r.d(t, { w: () => c });
            var n = r(53548),
                o = r(99875),
                i = r(36236),
                a = r(66109),
                s = r(53534),
                u = r(79045),
                l = r(7695);
            let c = () => {
                let e = (0, n.useContext)(s.k),
                    t = e?.isReady ? e.scope : null,
                    r = (0, n.useContext)(u.F) ?? l.Ve,
                    c = (0, n.useContext)(i.S),
                    f = (0, n.useContext)(o.p),
                    d = (0, n.useContext)(a.l),
                    p = (0, n.useMemo)(() => (t && f ? { block: f.scope, filter: c, object: d?.scope ?? null, screen: t, tab: r } : null), [f, c, d, t, r]);
                return (0, n.useMemo)(() => (f && p ? { block: f, object: d, snapshot: p } : null), [f, d, p]);
            };
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
        42824: (e, t, r) => {
            'use strict';
            (r.d(t, { s: () => E }), r(4653));
            function n(e, t, r) {
                return ((t = a(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e);
            }
            function o(e, t) {
                return (
                    (function (e) {
                        if (Array.isArray(e)) return e;
                    })(e) ||
                    (function (e, t) {
                        var r = null == e ? null : ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                        if (null != r) {
                            var n,
                                o,
                                i,
                                a,
                                s = [],
                                u = !0,
                                l = !1;
                            try {
                                if (((i = (r = r.call(e)).next), 0 === t)) {
                                    if (Object(r) !== r) return;
                                    u = !1;
                                } else for (; !(u = (n = i.call(r)).done) && (s.push(n.value), s.length !== t); u = !0);
                            } catch (e) {
                                ((l = !0), (o = e));
                            } finally {
                                try {
                                    if (!u && null != r.return && ((a = r.return()), Object(a) !== a)) return;
                                } finally {
                                    if (l) throw o;
                                }
                            }
                            return s;
                        }
                    })(e, t) ||
                    (function (e, t) {
                        if (e) {
                            if ('string' == typeof e) return i(e, t);
                            var r = Object.prototype.toString.call(e).slice(8, -1);
                            if (('Object' === r && e.constructor && (r = e.constructor.name), 'Map' === r || 'Set' === r)) return Array.from(e);
                            if ('Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return i(e, t);
                        }
                    })(e, t) ||
                    (function () {
                        throw TypeError(
                            'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                        );
                    })()
                );
            }
            function i(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
                return n;
            }
            function a(e) {
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
            function s(e, t) {
                var r,
                    n,
                    o = l(e, t, 'get');
                return ((r = e), (n = o).get ? n.get.call(r) : n.value);
            }
            function u(e, t, r) {
                var n = l(e, t, 'set');
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
            function l(e, t, r) {
                if (!t.has(e)) throw TypeError('attempted to ' + r + ' private field on non-instance');
                return t.get(e);
            }
            function c(e, t, r) {
                if (!t.has(e)) throw TypeError('attempted to get private field on non-instance');
                return r;
            }
            function f(e, t) {
                if (t.has(e)) throw TypeError('Cannot initialize the same private elements twice on an object');
            }
            function d(e, t, r) {
                (f(e, t), t.set(e, r));
            }
            function p(e, t) {
                (f(e, t), t.add(e));
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
                    var r = o(t, 2),
                        n = r[0],
                        i = r[1],
                        a = e.lastIndexOf(n);
                    ~a && e.splice(a, 1, i);
                });
            })(h);
            var g = new WeakMap(),
                b = new WeakMap(),
                m = new WeakSet(),
                v = new WeakSet();
            function y() {
                u(this, b, RegExp(s(this, g).join('|'), 'i'));
            }
            function w(e) {
                return s(this, g).indexOf(e.toLowerCase());
            }
            new ((function () {
                var e;
                function t(e) {
                    var r = this;
                    if (!(this instanceof t)) throw TypeError('Cannot call a class as a function');
                    return (
                        p(this, v),
                        p(this, m),
                        d(this, g, { writable: !0, value: void 0 }),
                        d(this, b, { writable: !0, value: void 0 }),
                        u(this, g, e || h.slice()),
                        c(this, m, y).call(this),
                        Object.defineProperties(
                            function (e) {
                                return r.test(e);
                            },
                            Object.entries(Object.getOwnPropertyDescriptors(t.prototype)).reduce(function (e, t) {
                                var i = o(t, 2),
                                    a = i[0],
                                    s = i[1];
                                return (
                                    'function' == typeof s.value && Object.assign(e, n({}, a, { value: r[a].bind(r) })),
                                    'function' == typeof s.get &&
                                        Object.assign(
                                            e,
                                            n({}, a, {
                                                get: function () {
                                                    return r[a];
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
                                return new RegExp(s(this, b));
                            },
                        },
                        {
                            key: 'test',
                            value: function (e) {
                                return !!e && s(this, b).test(e);
                            },
                        },
                        {
                            key: 'find',
                            value: function () {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '',
                                    t = e.match(s(this, b));
                                return t && t[0];
                            },
                        },
                        {
                            key: 'matches',
                            value: function () {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '';
                                return s(this, g).filter(function (t) {
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
                                    s(this, g),
                                    t
                                        .filter(function (t) {
                                            return -1 === c(e, v, w).call(e, t);
                                        })
                                        .map(function (e) {
                                            return e.toLowerCase();
                                        }),
                                ),
                                    c(this, m, y).call(this));
                            },
                        },
                        {
                            key: 'exclude',
                            value: function () {
                                for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], t = e.length; t--;) {
                                    var r = c(this, v, w).call(this, e[t]);
                                    r > -1 && s(this, g).splice(r, 1);
                                }
                                c(this, m, y).call(this);
                            },
                        },
                        {
                            key: 'spawn',
                            value: function (e) {
                                return new t(e || s(this, g));
                            },
                        },
                    ]),
                    (function (e, t) {
                        for (var r = 0; r < t.length; r++) {
                            var n = t[r];
                            ((n.enumerable = n.enumerable || !1), (n.configurable = !0), 'value' in n && (n.writable = !0), Object.defineProperty(e, a(n.key), n));
                        }
                    })(t.prototype, e),
                    Object.defineProperty(t, 'prototype', { writable: !1 }),
                    t
                );
            })())();
            let E = 'funtech-lang';
        },
        44084: (e, t, r) => {
            'use strict';
            r.d(t, { r: () => i });
            var n = r(23877),
                o = r(74021);
            class i extends o.q {
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
        49784: (e, t, r) => {
            'use strict';
            r.d(t, { W: () => u });
            var n = r(53548),
                o = r(63582),
                i = r(89846),
                a = r(245),
                s = r(22681);
            let u = (0, o.n)({ event: 'LandingBlock.Loaded', kind: 'hook', requiredScopes: ['screen', 'block'] }, ({ enabled: e = !0 } = {}) => {
                let t = (0, n.useRef)(!1),
                    r = (0, a.N)(),
                    { hash: o } = (0, i.g)(),
                    u = (0, s.w)(),
                    l = (0, n.useMemo)(() => (u ? r.createBlockReporter(u.snapshot) : null), [r, u]);
                (0, n.useEffect)(() => {
                    e && u && l && !t.current && l.loaded({ objectsCount: u.snapshot.block.objectsCount, viewUuid: u.block.loadedSession.start() }) && (t.current = !0);
                }, [e, o, l, u]);
            });
        },
        54020: (e, t, r) => {
            'use strict';
            let n;
            r.d(t, { A: () => s });
            let o = { randomUUID: 'undefined' != typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto) },
                i = new Uint8Array(16),
                a = [];
            for (let e = 0; e < 256; ++e) a.push((e + 256).toString(16).slice(1));
            let s = function (e, t, r) {
                if (o.randomUUID && !t && !e) return o.randomUUID();
                let s =
                    (e = e || {}).random ||
                    (
                        e.rng ||
                        function () {
                            if (!n && !(n = 'undefined' != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)))
                                throw Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
                            return n(i);
                        }
                    )();
                if (((s[6] = (15 & s[6]) | 64), (s[8] = (63 & s[8]) | 128), t)) {
                    r = r || 0;
                    for (let e = 0; e < 16; ++e) t[r + e] = s[e];
                    return t;
                }
                return (function (e, t = 0) {
                    return (
                        a[e[t + 0]] +
                        a[e[t + 1]] +
                        a[e[t + 2]] +
                        a[e[t + 3]] +
                        '-' +
                        a[e[t + 4]] +
                        a[e[t + 5]] +
                        '-' +
                        a[e[t + 6]] +
                        a[e[t + 7]] +
                        '-' +
                        a[e[t + 8]] +
                        a[e[t + 9]] +
                        '-' +
                        a[e[t + 10]] +
                        a[e[t + 11]] +
                        a[e[t + 12]] +
                        a[e[t + 13]] +
                        a[e[t + 14]] +
                        a[e[t + 15]]
                    );
                })(s);
            };
        },
        56374: (e, t, r) => {
            'use strict';
            r.d(t, { c: () => o });
            var n = r(53548);
            function o(e) {
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
            function o(e) {
                let t = new URLSearchParams();
                for (let [r, o] of Object.entries(e))
                    if (Array.isArray(o)) for (let e of o) t.append(r, n(e));
                    else t.set(r, n(o));
                return t;
            }
            function i(e) {
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
                        return i;
                    },
                    searchParamsToUrlQuery: function () {
                        return r;
                    },
                    urlQueryToSearchParams: function () {
                        return o;
                    },
                }));
        },
        62414: (e, t, r) => {
            'use strict';
            r.d(t, { D: () => u });
            var n = r(53548),
                o = r(63582),
                i = r(245),
                a = r(22681),
                s = r(56374);
            let u = (0, o.n)({ event: 'LandingBlock.Showed/Hidden', kind: 'hook', requiredScopes: ['screen', 'block', 'object'] }, (e = {}) => {
                let { createObserver: t, delayMs: r = 1e3, enabled: o = !0, onVisibilityChange: u, threshold: l = 0.8 } = e,
                    c = (0, i.N)(),
                    f = (0, a.w)(),
                    d = f?.object,
                    p = f?.block.claimLoadedSession,
                    h = (0, n.useMemo)(() => (f ? c.createBlockReporter(f.snapshot) : null), [c, f]),
                    g = (0, n.useRef)(t),
                    b = (0, n.useRef)(u),
                    [m, v] = (0, n.useState)(null),
                    y = (0, s.c)((e) => v(e));
                ((g.current = t), (b.current = u));
                let w = !!t;
                return (
                    (0, n.useEffect)(() => {
                        if (!o || !m || !d || 'string' != typeof d.scope.objectId || !p || !h || (!w && !m.ownerDocument.defaultView?.IntersectionObserver)) return;
                        let e = !1,
                            t = null,
                            n = null,
                            i = () => {
                                n && (clearTimeout(n), (n = null));
                                let e = t?.hide();
                                (d.activeViewSession === t && (d.activeViewSession = null), (t = null), e && (h.hidden({ viewUuid: e }), b.current?.(!1)));
                            },
                            a = (
                                g.current ??
                                ((e, t, r) => {
                                    let n = r.ownerDocument.defaultView?.IntersectionObserver;
                                    if (!n) throw Error('IntersectionObserver is not available');
                                    return new n(e, t);
                                })
                            )(
                                (o) => {
                                    e ||
                                        o.forEach((e) => {
                                            if (!(e.isIntersecting && e.intersectionRatio >= l)) return void i();
                                            n ||
                                                t?.isVisible ||
                                                (n = setTimeout(() => {
                                                    ((n = null), (t ??= p() ?? d.viewSession), (d.activeViewSession = t));
                                                    let e = t.show();
                                                    e && (h.showed({ viewUuid: e }), b.current?.(!0));
                                                }, r));
                                        });
                                },
                                { threshold: l },
                                m,
                            );
                        return (
                            a.observe(m),
                            () => {
                                ((e = !0), i(), a.unobserve(m), a.disconnect());
                            }
                        );
                    }, [m, p, d, r, o, w, l, h]),
                    y
                );
            });
        },
        74021: (e, t, r) => {
            'use strict';
            r.d(t, { q: () => u });
            var n = r(14567),
                o = r(243),
                i = r(62151),
                a = r(33396);
            let s = () => 'SECRET';
            class u {
                maxLogLevel;
                secureFields;
                additionalData;
                constructor({ additionalData: e, maxLogLevel: t, secureFields: r }) {
                    ((this.maxLogLevel = t), (this.secureFields = r), (this.additionalData = e));
                }
                formatMessage(e, t, r = {}, o) {
                    let i,
                        s = String(t instanceof Error && t.stack ? t.stack : t),
                        u = (0, a.A)({ ...this.additionalData, ...r });
                    return (Object.keys(u).length && (i = this.obfuscateData(u)), o) ? `${s} ${n(i)}` : [s, i];
                }
                obfuscateData(e) {
                    if (this.secureFields?.length) for (let t of this.secureFields) void 0 !== (0, o.A)(e, t) && (0, i.A)(e, t, s());
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
                        return i;
                    },
                    formatWithValidation: function () {
                        return s;
                    },
                    urlObjectKeys: function () {
                        return a;
                    },
                }));
            let n = r(28854)._(r(56804)),
                o = /https?|ftp|gopher|file/;
            function i(e) {
                let { auth: t, hostname: r } = e,
                    i = e.protocol || '',
                    a = e.pathname || '',
                    s = e.hash || '',
                    u = e.query || '',
                    l = !1;
                ((t = t ? encodeURIComponent(t).replace(/%3A/i, ':') + '@' : ''),
                    e.host ? (l = t + e.host) : r && ((l = t + (~r.indexOf(':') ? '[' + r + ']' : r)), e.port && (l += ':' + e.port)),
                    u && 'object' == typeof u && (u = String(n.urlQueryToSearchParams(u))));
                let c = e.search || (u && '?' + u) || '';
                return (
                    i && !i.endsWith(':') && (i += ':'),
                    e.slashes || ((!i || o.test(i)) && !1 !== l) ? ((l = '//' + (l || '')), a && '/' !== a[0] && (a = '/' + a)) : l || (l = ''),
                    s && '#' !== s[0] && (s = '#' + s),
                    c && '?' !== c[0] && (c = '?' + c),
                    '' + i + l + (a = a.replace(/[?#]/g, encodeURIComponent)) + (c = c.replace('#', '%23')) + s
                );
            }
            let a = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
            function s(e) {
                return i(e);
            }
        },
        77451: (e, t, r) => {
            'use strict';
            r.d(t, { Jt: () => i, TF: () => s, hZ: () => a });
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
            function i(e) {
                return (function (e) {
                    for (var t = {}, r = e ? e.split('; ') : [], n = 0; n < r.length; n++) {
                        var o = r[n].split('='),
                            i = o.slice(1).join('=');
                        '"' === i[0] && (i = i.slice(1, -1));
                        try {
                            t[decodeURIComponent(o[0])] = i.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
                        } catch (e) {}
                    }
                    return t;
                })(document.cookie)[e];
            }
            function a(e, t, r) {
                var i;
                document.cookie =
                    ((i = n({ path: '/' }, r)),
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
                        })(i));
            }
            function s(e, t) {
                a(e, '', n(n({}, t), { expires: -1 }));
            }
        },
        80643: (e, t, r) => {
            'use strict';
            r.d(t, { S: () => u });
            var n = r(53548),
                o = r(63582),
                i = r(245),
                a = r(22681),
                s = r(56374);
            let u = (0, o.n)({ event: 'LandingBlock.Navigated', kind: 'hook', requiredScopes: ['screen', 'block', 'object'] }, () => {
                let e = (0, i.N)(),
                    t = (0, a.w)(),
                    r = (0, n.useMemo)(() => (t ? e.createBlockReporter(t.snapshot) : null), [e, t]);
                return (0, s.c)((e) => {
                    t?.object &&
                        r &&
                        r.navigated({ ...e, from: e.from ?? t.snapshot.screen.pageId, viewUuid: (t.object.activeViewSession ?? t.object.viewSession).start() });
                });
            });
        },
        87013: (e, t, r) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'isLocalURL', {
                    enumerable: !0,
                    get: function () {
                        return i;
                    },
                }));
            let n = r(20498),
                o = r(42411);
            function i(e) {
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
                        var o = e.map(function (e) {
                                var t = e.split('-'),
                                    r = 3 === t.length;
                                return { code: t[0], script: r ? t[1] : null, region: r ? t[2] : t[1] };
                            }),
                            i = 0;
                        i < t.length;
                        i++
                    )
                        for (
                            var a = t[i],
                                s = a.code.toLowerCase(),
                                u = a.region ? a.region.toLowerCase() : a.region,
                                l = a.script ? a.script.toLowerCase() : a.script,
                                c = 0;
                            c < o.length;
                            c++
                        ) {
                            var f = o[c].code.toLowerCase(),
                                d = o[c].script ? o[c].script.toLowerCase() : o[c].script,
                                p = o[c].region ? o[c].region.toLowerCase() : o[c].region;
                            if (s === f && (n.loose || !l || l === d) && (n.loose || !u || u === p)) return e[c];
                        }
                    return null;
                }));
        },
    },
]);
