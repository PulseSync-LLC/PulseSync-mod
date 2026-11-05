(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1617, 2824],
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
                    let l = e ? (null == (i = this.regionLangs) ? void 0 : i[e]) : void 0,
                        a = this.enableWideLanguageSelectWithBrandLangs ? this.brandLangs : null != (o = null == l ? void 0 : l.langs) ? o : this.brandLangs,
                        u = null != (s = null == l ? void 0 : l.defaultLang) ? s : this.brandDefaultLang;
                    return this.selectLang({ supportedLangs: a, defaultLang: u, urlLang: t, cookieLang: n, acceptLangs: r });
                }
                intersect(e, t) {
                    let n = new Set(t);
                    return e.filter((e) => n.has(e));
                }
                selectLang({ supportedLangs: e, defaultLang: t, urlLang: n, cookieLang: r, acceptLangs: i }) {
                    if ('string' == typeof n && e.includes(n)) return n;
                    let o = null != i ? i : [],
                        s = r ? [r, ...o] : o,
                        l = this.intersect(s, e)[0];
                    return void 0 !== l ? l : t;
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
        12389: (e, t, n) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                !(function (e, t) {
                    for (var n in t) Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
                })(t, {
                    default: function () {
                        return m;
                    },
                    useLinkStatus: function () {
                        return v;
                    },
                }));
            let r = n(28854),
                i = n(88800),
                o = r._(n(53548)),
                s = n(74428),
                l = n(92746),
                a = n(7733),
                u = n(13985),
                c = n(20498),
                h = n(13872);
            n(4115);
            let d = n(53437),
                f = n(87013),
                p = n(48985);
            function g(e) {
                return 'string' == typeof e ? e : (0, s.formatUrl)(e);
            }
            function m(e) {
                let t,
                    n,
                    r,
                    [s, m] = (0, o.useOptimistic)(d.IDLE_LINK_STATUS),
                    v = (0, o.useRef)(null),
                    {
                        href: y,
                        as: w,
                        children: E,
                        prefetch: x = null,
                        passHref: S,
                        replace: O,
                        shallow: C,
                        scroll: I,
                        onClick: R,
                        onMouseEnter: T,
                        onTouchStart: k,
                        legacyBehavior: M = !1,
                        onNavigate: L,
                        ref: j,
                        unstable_dynamicOnHover: z,
                        ...A
                    } = e;
                ((t = E), M && ('string' == typeof t || 'number' == typeof t) && (t = (0, i.jsx)('a', { children: t })));
                let P = o.default.useContext(l.AppRouterContext),
                    D = !1 !== x,
                    N = null === x || 'auto' === x ? a.PrefetchKind.AUTO : a.PrefetchKind.FULL,
                    { href: _, as: U } = o.default.useMemo(() => {
                        let e = g(y);
                        return { href: e, as: w ? g(w) : e };
                    }, [y, w]);
                M && (n = o.default.Children.only(t));
                let F = M ? n && 'object' == typeof n && n.ref : j,
                    W = o.default.useCallback(
                        (e) => (
                            null !== P && (v.current = (0, d.mountLinkInstance)(e, _, P, N, D, m)),
                            () => {
                                (v.current && ((0, d.unmountLinkForCurrentNavigation)(v.current), (v.current = null)), (0, d.unmountPrefetchableInstance)(e));
                            }
                        ),
                        [D, _, P, N, m],
                    ),
                    B = {
                        ref: (0, u.useMergedRef)(W, F),
                        onClick(e) {
                            (M || 'function' != typeof R || R(e),
                                M && n.props && 'function' == typeof n.props.onClick && n.props.onClick(e),
                                P &&
                                    (e.defaultPrevented ||
                                        (function (e, t, n, r, i, s, l) {
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
                                                if (!(0, f.isLocalURL)(t)) {
                                                    i && (e.preventDefault(), location.replace(t));
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
                                                o.default.startTransition(() => {
                                                    (0, p.dispatchNavigateAction)(n || t, i ? 'replace' : 'push', null == s || s, r.current);
                                                });
                                            }
                                        })(e, _, U, v, O, I, L)));
                        },
                        onMouseEnter(e) {
                            (M || 'function' != typeof T || T(e),
                                M && n.props && 'function' == typeof n.props.onMouseEnter && n.props.onMouseEnter(e),
                                P && D && (0, d.onNavigationIntent)(e.currentTarget, !0 === z));
                        },
                        onTouchStart: function (e) {
                            (M || 'function' != typeof k || k(e),
                                M && n.props && 'function' == typeof n.props.onTouchStart && n.props.onTouchStart(e),
                                P && D && (0, d.onNavigationIntent)(e.currentTarget, !0 === z));
                        },
                    };
                return (
                    (0, c.isAbsoluteUrl)(U) ? (B.href = U) : (M && !S && ('a' !== n.type || 'href' in n.props)) || (B.href = (0, h.addBasePath)(U)),
                    (r = M ? o.default.cloneElement(n, B) : (0, i.jsx)('a', { ...A, ...B, children: t })),
                    (0, i.jsx)(b.Provider, { value: s, children: r })
                );
            }
            n(36155);
            let b = (0, o.createContext)(d.IDLE_LINK_STATUS),
                v = () => (0, o.useContext)(b);
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
        20498: (e, t) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                !(function (e, t) {
                    for (var n in t) Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
                })(t, {
                    DecodeError: function () {
                        return p;
                    },
                    MiddlewareNotFoundError: function () {
                        return v;
                    },
                    MissingStaticPage: function () {
                        return b;
                    },
                    NormalizeError: function () {
                        return g;
                    },
                    PageNotFoundError: function () {
                        return m;
                    },
                    SP: function () {
                        return d;
                    },
                    ST: function () {
                        return f;
                    },
                    WEB_VITALS: function () {
                        return n;
                    },
                    execOnce: function () {
                        return r;
                    },
                    getDisplayName: function () {
                        return a;
                    },
                    getLocationOrigin: function () {
                        return s;
                    },
                    getURL: function () {
                        return l;
                    },
                    isAbsoluteUrl: function () {
                        return o;
                    },
                    isResSent: function () {
                        return u;
                    },
                    loadGetInitialProps: function () {
                        return h;
                    },
                    normalizeRepeatedSlashes: function () {
                        return c;
                    },
                    stringifyError: function () {
                        return y;
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
            function l() {
                let { href: e } = window.location,
                    t = s();
                return e.substring(t.length);
            }
            function a(e) {
                return 'string' == typeof e ? e : e.displayName || e.name || 'Unknown';
            }
            function u(e) {
                return e.finished || e.headersSent;
            }
            function c(e) {
                let t = e.split('?');
                return t[0].replace(/\\/g, '/').replace(/\/\/+/g, '/') + (t[1] ? '?' + t.slice(1).join('?') : '');
            }
            async function h(e, t) {
                let n = t.res || (t.ctx && t.ctx.res);
                if (!e.getInitialProps) return t.ctx && t.Component ? { pageProps: await h(t.Component, t.ctx) } : {};
                let r = await e.getInitialProps(t);
                if (n && u(n)) return r;
                if (!r)
                    throw Object.defineProperty(
                        Error('"' + a(e) + '.getInitialProps()" should resolve to an object. But found "' + r + '" instead.'),
                        '__NEXT_ERROR_CODE',
                        { value: 'E394', enumerable: !1, configurable: !0 },
                    );
                return r;
            }
            let d = 'undefined' != typeof performance,
                f = d && ['mark', 'measure', 'getEntriesByName'].every((e) => 'function' == typeof performance[e]);
            class p extends Error {}
            class g extends Error {}
            class m extends Error {
                constructor(e) {
                    (super(), (this.code = 'ENOENT'), (this.name = 'PageNotFoundError'), (this.message = 'Cannot find module for page: ' + e));
                }
            }
            class b extends Error {
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
        22681: (e, t, n) => {
            'use strict';
            n.d(t, { w: () => c });
            var r = n(53548),
                i = n(99875),
                o = n(36236),
                s = n(66109),
                l = n(53534),
                a = n(79045),
                u = n(7695);
            let c = () => {
                let e = (0, r.useContext)(l.k),
                    t = e?.isReady ? e.scope : null,
                    n = (0, r.useContext)(a.F) ?? u.Ve,
                    c = (0, r.useContext)(o.S),
                    h = (0, r.useContext)(i.p),
                    d = (0, r.useContext)(s.l),
                    f = (0, r.useMemo)(() => (t && h ? { block: h.scope, filter: c, object: d?.scope ?? null, screen: t, tab: n } : null), [h, c, d, t, n]);
                return (0, r.useMemo)(() => (h && f ? { block: h, object: d, snapshot: f } : null), [h, d, f]);
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
        42824: (e, t, n) => {
            'use strict';
            (n.d(t, { s: () => E }), n(4653));
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
                                l = [],
                                a = !0,
                                u = !1;
                            try {
                                if (((o = (n = n.call(e)).next), 0 === t)) {
                                    if (Object(n) !== n) return;
                                    a = !1;
                                } else for (; !(a = (r = o.call(n)).done) && (l.push(r.value), l.length !== t); a = !0);
                            } catch (e) {
                                ((u = !0), (i = e));
                            } finally {
                                try {
                                    if (!a && null != n.return && ((s = n.return()), Object(s) !== s)) return;
                                } finally {
                                    if (u) throw i;
                                }
                            }
                            return l;
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
            function l(e, t) {
                var n,
                    r,
                    i = u(e, t, 'get');
                return ((n = e), (r = i).get ? r.get.call(n) : r.value);
            }
            function a(e, t, n) {
                var r = u(e, t, 'set');
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
            function u(e, t, n) {
                if (!t.has(e)) throw TypeError('attempted to ' + n + ' private field on non-instance');
                return t.get(e);
            }
            function c(e, t, n) {
                if (!t.has(e)) throw TypeError('attempted to get private field on non-instance');
                return n;
            }
            function h(e, t) {
                if (t.has(e)) throw TypeError('Cannot initialize the same private elements twice on an object');
            }
            function d(e, t, n) {
                (h(e, t), t.set(e, n));
            }
            function f(e, t) {
                (h(e, t), t.add(e));
            }
            var p = [
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
            })(p);
            var g = new WeakMap(),
                m = new WeakMap(),
                b = new WeakSet(),
                v = new WeakSet();
            function y() {
                a(this, m, RegExp(l(this, g).join('|'), 'i'));
            }
            function w(e) {
                return l(this, g).indexOf(e.toLowerCase());
            }
            new ((function () {
                var e;
                function t(e) {
                    var n = this;
                    if (!(this instanceof t)) throw TypeError('Cannot call a class as a function');
                    return (
                        f(this, v),
                        f(this, b),
                        d(this, g, { writable: !0, value: void 0 }),
                        d(this, m, { writable: !0, value: void 0 }),
                        a(this, g, e || p.slice()),
                        c(this, b, y).call(this),
                        Object.defineProperties(
                            function (e) {
                                return n.test(e);
                            },
                            Object.entries(Object.getOwnPropertyDescriptors(t.prototype)).reduce(function (e, t) {
                                var o = i(t, 2),
                                    s = o[0],
                                    l = o[1];
                                return (
                                    'function' == typeof l.value && Object.assign(e, r({}, s, { value: n[s].bind(n) })),
                                    'function' == typeof l.get &&
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
                                return new RegExp(l(this, m));
                            },
                        },
                        {
                            key: 'test',
                            value: function (e) {
                                return !!e && l(this, m).test(e);
                            },
                        },
                        {
                            key: 'find',
                            value: function () {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '',
                                    t = e.match(l(this, m));
                                return t && t[0];
                            },
                        },
                        {
                            key: 'matches',
                            value: function () {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '';
                                return l(this, g).filter(function (t) {
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
                                    l(this, g),
                                    t
                                        .filter(function (t) {
                                            return -1 === c(e, v, w).call(e, t);
                                        })
                                        .map(function (e) {
                                            return e.toLowerCase();
                                        }),
                                ),
                                    c(this, b, y).call(this));
                            },
                        },
                        {
                            key: 'exclude',
                            value: function () {
                                for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], t = e.length; t--;) {
                                    var n = c(this, v, w).call(this, e[t]);
                                    n > -1 && l(this, g).splice(n, 1);
                                }
                                c(this, b, y).call(this);
                            },
                        },
                        {
                            key: 'spawn',
                            value: function (e) {
                                return new t(e || l(this, g));
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
            let E = 'funtech-lang';
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
        49784: (e, t, n) => {
            'use strict';
            n.d(t, { W: () => a });
            var r = n(53548),
                i = n(63582),
                o = n(89846),
                s = n(245),
                l = n(22681);
            let a = (0, i.n)({ event: 'LandingBlock.Loaded', kind: 'hook', requiredScopes: ['screen', 'block'] }, ({ enabled: e = !0 } = {}) => {
                let t = (0, r.useRef)(!1),
                    n = (0, s.N)(),
                    { hash: i } = (0, o.g)(),
                    a = (0, l.w)(),
                    u = (0, r.useMemo)(() => (a ? n.createBlockReporter(a.snapshot) : null), [n, a]);
                (0, r.useEffect)(() => {
                    e && a && u && !t.current && u.loaded({ objectsCount: a.snapshot.block.objectsCount, viewUuid: a.block.loadedSession.start() }) && (t.current = !0);
                }, [e, i, u, a]);
            });
        },
        54020: (e, t, n) => {
            'use strict';
            let r;
            n.d(t, { A: () => l });
            let i = { randomUUID: 'undefined' != typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto) },
                o = new Uint8Array(16),
                s = [];
            for (let e = 0; e < 256; ++e) s.push((e + 256).toString(16).slice(1));
            let l = function (e, t, n) {
                if (i.randomUUID && !t && !e) return i.randomUUID();
                let l =
                    (e = e || {}).random ||
                    (
                        e.rng ||
                        function () {
                            if (!r && !(r = 'undefined' != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)))
                                throw Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
                            return r(o);
                        }
                    )();
                if (((l[6] = (15 & l[6]) | 64), (l[8] = (63 & l[8]) | 128), t)) {
                    n = n || 0;
                    for (let e = 0; e < 16; ++e) t[n + e] = l[e];
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
                })(l);
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
        56949: (e, t, n) => {
            'use strict';
            n.d(t, { Te: () => S, XW: () => O });
            var r = n(53548),
                i = n(53405);
            function o(e, t, n) {
                let r,
                    i = n.initialDeps ?? [];
                function o() {
                    var o, s, l, a;
                    let u, c;
                    n.key && (null == (o = n.debug) ? void 0 : o.call(n)) && (u = Date.now());
                    let h = e();
                    if (!(h.length !== i.length || h.some((e, t) => i[t] !== e))) return r;
                    if (
                        ((i = h),
                        n.key && (null == (s = n.debug) ? void 0 : s.call(n)) && (c = Date.now()),
                        (r = t(...h)),
                        n.key && (null == (l = n.debug) ? void 0 : l.call(n)))
                    ) {
                        let e = Math.round((Date.now() - u) * 100) / 100,
                            t = Math.round((Date.now() - c) * 100) / 100,
                            r = t / 16,
                            i = (e, t) => {
                                for (e = String(e); e.length < t;) e = ' ' + e;
                                return e;
                            };
                        console.info(
                            `%c⏱ ${i(t, 5)} /${i(e, 5)} ms`,
                            `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * r, 120))}deg 100% 31%);`,
                            null == n ? void 0 : n.key,
                        );
                    }
                    return (null == (a = null == n ? void 0 : n.onChange) || a.call(n, r), r);
                }
                return (
                    (o.updateDeps = (e) => {
                        i = e;
                    }),
                    o
                );
            }
            function s(e, t) {
                if (void 0 !== e) return e;
                throw Error(`Unexpected undefined${t ? `: ${t}` : ''}`);
            }
            let l = (e, t, n) => {
                    let r;
                    return function (...i) {
                        (e.clearTimeout(r), (r = e.setTimeout(() => t.apply(this, i), n)));
                    };
                },
                a = (e) => e,
                u = (e) => {
                    let t = Math.max(e.startIndex - e.overscan, 0),
                        n = Math.min(e.endIndex + e.overscan, e.count - 1),
                        r = [];
                    for (let e = t; e <= n; e++) r.push(e);
                    return r;
                },
                c = (e, t) => {
                    let n = e.scrollElement;
                    if (!n) return;
                    let r = e.targetWindow;
                    if (!r) return;
                    let i = (e) => {
                        let { width: n, height: r } = e;
                        t({ width: Math.round(n), height: Math.round(r) });
                    };
                    if ((i(n.getBoundingClientRect()), !r.ResizeObserver)) return () => {};
                    let o = new r.ResizeObserver((t) => {
                        let r = () => {
                            let e = t[0];
                            if (null == e ? void 0 : e.borderBoxSize) {
                                let t = e.borderBoxSize[0];
                                if (t) return void i({ width: t.inlineSize, height: t.blockSize });
                            }
                            i(n.getBoundingClientRect());
                        };
                        e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(r) : r();
                    });
                    return (
                        o.observe(n, { box: 'border-box' }),
                        () => {
                            o.unobserve(n);
                        }
                    );
                },
                h = { passive: !0 },
                d = (e, t) => {
                    let n = e.scrollElement;
                    if (!n) return;
                    let r = () => {
                        t({ width: n.innerWidth, height: n.innerHeight });
                    };
                    return (
                        r(),
                        n.addEventListener('resize', r, h),
                        () => {
                            n.removeEventListener('resize', r);
                        }
                    );
                },
                f = 'undefined' == typeof window || 'onscrollend' in window,
                p = (e, t) => {
                    let n = e.scrollElement;
                    if (!n) return;
                    let r = e.targetWindow;
                    if (!r) return;
                    let i = 0,
                        o =
                            e.options.useScrollendEvent && f
                                ? () => void 0
                                : l(
                                      r,
                                      () => {
                                          t(i, !1);
                                      },
                                      e.options.isScrollingResetDelay,
                                  ),
                        s = (r) => () => {
                            let { horizontal: s, isRtl: l } = e.options;
                            ((i = s ? n.scrollLeft * ((l && -1) || 1) : n.scrollTop), o(), t(i, r));
                        },
                        a = s(!0),
                        u = s(!1);
                    (u(), n.addEventListener('scroll', a, h));
                    let c = e.options.useScrollendEvent && f;
                    return (
                        c && n.addEventListener('scrollend', u, h),
                        () => {
                            (n.removeEventListener('scroll', a), c && n.removeEventListener('scrollend', u));
                        }
                    );
                },
                g = (e, t) => {
                    let n = e.scrollElement;
                    if (!n) return;
                    let r = e.targetWindow;
                    if (!r) return;
                    let i = 0,
                        o =
                            e.options.useScrollendEvent && f
                                ? () => void 0
                                : l(
                                      r,
                                      () => {
                                          t(i, !1);
                                      },
                                      e.options.isScrollingResetDelay,
                                  ),
                        s = (r) => () => {
                            ((i = n[e.options.horizontal ? 'scrollX' : 'scrollY']), o(), t(i, r));
                        },
                        a = s(!0),
                        u = s(!1);
                    (u(), n.addEventListener('scroll', a, h));
                    let c = e.options.useScrollendEvent && f;
                    return (
                        c && n.addEventListener('scrollend', u, h),
                        () => {
                            (n.removeEventListener('scroll', a), c && n.removeEventListener('scrollend', u));
                        }
                    );
                },
                m = (e, t, n) => {
                    if (null == t ? void 0 : t.borderBoxSize) {
                        let e = t.borderBoxSize[0];
                        if (e) return Math.round(e[n.options.horizontal ? 'inlineSize' : 'blockSize']);
                    }
                    return Math.round(e.getBoundingClientRect()[n.options.horizontal ? 'width' : 'height']);
                },
                b = (e, { adjustments: t = 0, behavior: n }, r) => {
                    var i, o;
                    null == (o = null == (i = r.scrollElement) ? void 0 : i.scrollTo) || o.call(i, { [r.options.horizontal ? 'left' : 'top']: e + t, behavior: n });
                },
                v = (e, { adjustments: t = 0, behavior: n }, r) => {
                    var i, o;
                    null == (o = null == (i = r.scrollElement) ? void 0 : i.scrollTo) || o.call(i, { [r.options.horizontal ? 'left' : 'top']: e + t, behavior: n });
                };
            class y {
                constructor(e) {
                    ((this.unsubs = []),
                        (this.scrollElement = null),
                        (this.targetWindow = null),
                        (this.isScrolling = !1),
                        (this.scrollToIndexTimeoutId = null),
                        (this.measurementsCache = []),
                        (this.itemSizeCache = new Map()),
                        (this.pendingMeasuredCacheIndexes = []),
                        (this.scrollRect = null),
                        (this.scrollOffset = null),
                        (this.scrollDirection = null),
                        (this.scrollAdjustments = 0),
                        (this.elementsCache = new Map()),
                        (this.observer = (() => {
                            let e = null,
                                t = () =>
                                    e ||
                                    (this.targetWindow && this.targetWindow.ResizeObserver
                                        ? (e = new this.targetWindow.ResizeObserver((e) => {
                                              e.forEach((e) => {
                                                  let t = () => {
                                                      this._measureElement(e.target, e);
                                                  };
                                                  this.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(t) : t();
                                              });
                                          }))
                                        : null);
                            return {
                                disconnect: () => {
                                    var n;
                                    (null == (n = t()) || n.disconnect(), (e = null));
                                },
                                observe: (e) => {
                                    var n;
                                    return null == (n = t()) ? void 0 : n.observe(e, { box: 'border-box' });
                                },
                                unobserve: (e) => {
                                    var n;
                                    return null == (n = t()) ? void 0 : n.unobserve(e);
                                },
                            };
                        })()),
                        (this.range = null),
                        (this.setOptions = (e) => {
                            (Object.entries(e).forEach(([t, n]) => {
                                void 0 === n && delete e[t];
                            }),
                                (this.options = {
                                    debug: !1,
                                    initialOffset: 0,
                                    overscan: 1,
                                    paddingStart: 0,
                                    paddingEnd: 0,
                                    scrollPaddingStart: 0,
                                    scrollPaddingEnd: 0,
                                    horizontal: !1,
                                    getItemKey: a,
                                    rangeExtractor: u,
                                    onChange: () => {},
                                    measureElement: m,
                                    initialRect: { width: 0, height: 0 },
                                    scrollMargin: 0,
                                    gap: 0,
                                    indexAttribute: 'data-index',
                                    initialMeasurementsCache: [],
                                    lanes: 1,
                                    isScrollingResetDelay: 150,
                                    enabled: !0,
                                    isRtl: !1,
                                    useScrollendEvent: !1,
                                    useAnimationFrameWithResizeObserver: !1,
                                    ...e,
                                }));
                        }),
                        (this.notify = (e) => {
                            var t, n;
                            null == (n = (t = this.options).onChange) || n.call(t, this, e);
                        }),
                        (this.maybeNotify = o(
                            () => (this.calculateRange(), [this.isScrolling, this.range ? this.range.startIndex : null, this.range ? this.range.endIndex : null]),
                            (e) => {
                                this.notify(e);
                            },
                            {
                                key: !1,
                                debug: () => this.options.debug,
                                initialDeps: [this.isScrolling, this.range ? this.range.startIndex : null, this.range ? this.range.endIndex : null],
                            },
                        )),
                        (this.cleanup = () => {
                            (this.unsubs.filter(Boolean).forEach((e) => e()),
                                (this.unsubs = []),
                                this.observer.disconnect(),
                                (this.scrollElement = null),
                                (this.targetWindow = null));
                        }),
                        (this._didMount = () => () => {
                            this.cleanup();
                        }),
                        (this._willUpdate = () => {
                            var e;
                            let t = this.options.enabled ? this.options.getScrollElement() : null;
                            if (this.scrollElement !== t) {
                                if ((this.cleanup(), !t)) return void this.maybeNotify();
                                ((this.scrollElement = t),
                                    this.scrollElement && 'ownerDocument' in this.scrollElement
                                        ? (this.targetWindow = this.scrollElement.ownerDocument.defaultView)
                                        : (this.targetWindow = (null == (e = this.scrollElement) ? void 0 : e.window) ?? null),
                                    this.elementsCache.forEach((e) => {
                                        this.observer.observe(e);
                                    }),
                                    this._scrollToOffset(this.getScrollOffset(), { adjustments: void 0, behavior: void 0 }),
                                    this.unsubs.push(
                                        this.options.observeElementRect(this, (e) => {
                                            ((this.scrollRect = e), this.maybeNotify());
                                        }),
                                    ),
                                    this.unsubs.push(
                                        this.options.observeElementOffset(this, (e, t) => {
                                            ((this.scrollAdjustments = 0),
                                                (this.scrollDirection = t ? (this.getScrollOffset() < e ? 'forward' : 'backward') : null),
                                                (this.scrollOffset = e),
                                                (this.isScrolling = t),
                                                this.maybeNotify());
                                        }),
                                    ));
                            }
                        }),
                        (this.getSize = () =>
                            this.options.enabled
                                ? ((this.scrollRect = this.scrollRect ?? this.options.initialRect), this.scrollRect[this.options.horizontal ? 'width' : 'height'])
                                : ((this.scrollRect = null), 0)),
                        (this.getScrollOffset = () =>
                            this.options.enabled
                                ? ((this.scrollOffset =
                                      this.scrollOffset ?? ('function' == typeof this.options.initialOffset ? this.options.initialOffset() : this.options.initialOffset)),
                                  this.scrollOffset)
                                : ((this.scrollOffset = null), 0)),
                        (this.getFurthestMeasurement = (e, t) => {
                            let n = new Map(),
                                r = new Map();
                            for (let i = t - 1; i >= 0; i--) {
                                let t = e[i];
                                if (n.has(t.lane)) continue;
                                let o = r.get(t.lane);
                                if ((null == o || t.end > o.end ? r.set(t.lane, t) : t.end < o.end && n.set(t.lane, !0), n.size === this.options.lanes)) break;
                            }
                            return r.size === this.options.lanes
                                ? Array.from(r.values()).sort((e, t) => (e.end === t.end ? e.index - t.index : e.end - t.end))[0]
                                : void 0;
                        }),
                        (this.getMeasurementOptions = o(
                            () => [this.options.count, this.options.paddingStart, this.options.scrollMargin, this.options.getItemKey, this.options.enabled],
                            (e, t, n, r, i) => ((this.pendingMeasuredCacheIndexes = []), { count: e, paddingStart: t, scrollMargin: n, getItemKey: r, enabled: i }),
                            { key: !1 },
                        )),
                        (this.getMeasurements = o(
                            () => [this.getMeasurementOptions(), this.itemSizeCache],
                            ({ count: e, paddingStart: t, scrollMargin: n, getItemKey: r, enabled: i }, o) => {
                                if (!i) return ((this.measurementsCache = []), this.itemSizeCache.clear(), []);
                                0 === this.measurementsCache.length &&
                                    ((this.measurementsCache = this.options.initialMeasurementsCache),
                                    this.measurementsCache.forEach((e) => {
                                        this.itemSizeCache.set(e.key, e.size);
                                    }));
                                let s = this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
                                this.pendingMeasuredCacheIndexes = [];
                                let l = this.measurementsCache.slice(0, s);
                                for (let i = s; i < e; i++) {
                                    let e = r(i),
                                        s = 1 === this.options.lanes ? l[i - 1] : this.getFurthestMeasurement(l, i),
                                        a = s ? s.end + this.options.gap : t + n,
                                        u = o.get(e),
                                        c = 'number' == typeof u ? u : this.options.estimateSize(i),
                                        h = a + c,
                                        d = s ? s.lane : i % this.options.lanes;
                                    l[i] = { index: i, start: a, size: c, end: h, key: e, lane: d };
                                }
                                return ((this.measurementsCache = l), l);
                            },
                            { key: !1, debug: () => this.options.debug },
                        )),
                        (this.calculateRange = o(
                            () => [this.getMeasurements(), this.getSize(), this.getScrollOffset(), this.options.lanes],
                            (e, t, n, r) =>
                                (this.range =
                                    e.length > 0 && t > 0
                                        ? (function ({ measurements: e, outerSize: t, scrollOffset: n, lanes: r }) {
                                              let i = e.length - 1,
                                                  o = w(0, i, (t) => e[t].start, n),
                                                  s = o;
                                              if (1 === r) for (; s < i && e[s].end < n + t;) s++;
                                              else if (r > 1) {
                                                  let l = Array(r).fill(0);
                                                  for (; s < i && l.some((e) => e < n + t);) {
                                                      let t = e[s];
                                                      ((l[t.lane] = t.end), s++);
                                                  }
                                                  let a = Array(r).fill(n + t);
                                                  for (; o > 0 && a.some((e) => e >= n);) {
                                                      let t = e[o];
                                                      ((a[t.lane] = t.start), o--);
                                                  }
                                                  ((o = Math.max(0, o - (o % r))), (s = Math.min(i, s + (r - 1 - (s % r)))));
                                              }
                                              return { startIndex: o, endIndex: s };
                                          })({ measurements: e, outerSize: t, scrollOffset: n, lanes: r })
                                        : null),
                            { key: !1, debug: () => this.options.debug },
                        )),
                        (this.getVirtualIndexes = o(
                            () => {
                                let e = null,
                                    t = null,
                                    n = this.calculateRange();
                                return (
                                    n && ((e = n.startIndex), (t = n.endIndex)),
                                    this.maybeNotify.updateDeps([this.isScrolling, e, t]),
                                    [this.options.rangeExtractor, this.options.overscan, this.options.count, e, t]
                                );
                            },
                            (e, t, n, r, i) => (null === r || null === i ? [] : e({ startIndex: r, endIndex: i, overscan: t, count: n })),
                            { key: !1, debug: () => this.options.debug },
                        )),
                        (this.indexFromElement = (e) => {
                            let t = this.options.indexAttribute,
                                n = e.getAttribute(t);
                            return n ? parseInt(n, 10) : (console.warn(`Missing attribute name '${t}={index}' on measured element.`), -1);
                        }),
                        (this._measureElement = (e, t) => {
                            let n = this.indexFromElement(e),
                                r = this.measurementsCache[n];
                            if (!r) return;
                            let i = r.key,
                                o = this.elementsCache.get(i);
                            (o !== e && (o && this.observer.unobserve(o), this.observer.observe(e), this.elementsCache.set(i, e)),
                                e.isConnected && this.resizeItem(n, this.options.measureElement(e, t, this)));
                        }),
                        (this.resizeItem = (e, t) => {
                            let n = this.measurementsCache[e];
                            if (!n) return;
                            let r = t - (this.itemSizeCache.get(n.key) ?? n.size);
                            0 !== r &&
                                ((void 0 !== this.shouldAdjustScrollPositionOnItemSizeChange
                                    ? this.shouldAdjustScrollPositionOnItemSizeChange(n, r, this)
                                    : n.start < this.getScrollOffset() + this.scrollAdjustments) &&
                                    this._scrollToOffset(this.getScrollOffset(), { adjustments: (this.scrollAdjustments += r), behavior: void 0 }),
                                this.pendingMeasuredCacheIndexes.push(n.index),
                                (this.itemSizeCache = new Map(this.itemSizeCache.set(n.key, t))),
                                this.notify(!1));
                        }),
                        (this.measureElement = (e) => {
                            if (!e)
                                return void this.elementsCache.forEach((e, t) => {
                                    e.isConnected || (this.observer.unobserve(e), this.elementsCache.delete(t));
                                });
                            this._measureElement(e, void 0);
                        }),
                        (this.getVirtualItems = o(
                            () => [this.getVirtualIndexes(), this.getMeasurements()],
                            (e, t) => {
                                let n = [];
                                for (let r = 0, i = e.length; r < i; r++) {
                                    let i = t[e[r]];
                                    n.push(i);
                                }
                                return n;
                            },
                            { key: !1, debug: () => this.options.debug },
                        )),
                        (this.getVirtualItemForOffset = (e) => {
                            let t = this.getMeasurements();
                            if (0 !== t.length) return s(t[w(0, t.length - 1, (e) => s(t[e]).start, e)]);
                        }),
                        (this.getOffsetForAlignment = (e, t, n = 0) => {
                            let r = this.getSize(),
                                i = this.getScrollOffset();
                            ('auto' === t && (t = e >= i + r ? 'end' : 'start'), 'center' === t ? (e += (n - r) / 2) : 'end' === t && (e -= r));
                            let o = this.options.horizontal ? 'scrollWidth' : 'scrollHeight';
                            return Math.max(
                                Math.min(
                                    (this.scrollElement
                                        ? 'document' in this.scrollElement
                                            ? this.scrollElement.document.documentElement[o]
                                            : this.scrollElement[o]
                                        : 0) - r,
                                    e,
                                ),
                                0,
                            );
                        }),
                        (this.getOffsetForIndex = (e, t = 'auto') => {
                            e = Math.max(0, Math.min(e, this.options.count - 1));
                            let n = this.measurementsCache[e];
                            if (!n) return;
                            let r = this.getSize(),
                                i = this.getScrollOffset();
                            if ('auto' === t)
                                if (n.end >= i + r - this.options.scrollPaddingEnd) t = 'end';
                                else {
                                    if (!(n.start <= i + this.options.scrollPaddingStart)) return [i, t];
                                    t = 'start';
                                }
                            let o = 'end' === t ? n.end + this.options.scrollPaddingEnd : n.start - this.options.scrollPaddingStart;
                            return [this.getOffsetForAlignment(o, t, n.size), t];
                        }),
                        (this.isDynamicMode = () => this.elementsCache.size > 0),
                        (this.cancelScrollToIndex = () => {
                            null !== this.scrollToIndexTimeoutId &&
                                this.targetWindow &&
                                (this.targetWindow.clearTimeout(this.scrollToIndexTimeoutId), (this.scrollToIndexTimeoutId = null));
                        }),
                        (this.scrollToOffset = (e, { align: t = 'start', behavior: n } = {}) => {
                            (this.cancelScrollToIndex(),
                                'smooth' === n && this.isDynamicMode() && console.warn('The `smooth` scroll behavior is not fully supported with dynamic size.'),
                                this._scrollToOffset(this.getOffsetForAlignment(e, t), { adjustments: void 0, behavior: n }));
                        }),
                        (this.scrollToIndex = (e, { align: t = 'auto', behavior: n } = {}) => {
                            ((e = Math.max(0, Math.min(e, this.options.count - 1))),
                                this.cancelScrollToIndex(),
                                'smooth' === n && this.isDynamicMode() && console.warn('The `smooth` scroll behavior is not fully supported with dynamic size.'));
                            let r = this.getOffsetForIndex(e, t);
                            if (!r) return;
                            let [i, o] = r;
                            (this._scrollToOffset(i, { adjustments: void 0, behavior: n }),
                                'smooth' !== n &&
                                    this.isDynamicMode() &&
                                    this.targetWindow &&
                                    (this.scrollToIndexTimeoutId = this.targetWindow.setTimeout(() => {
                                        if (((this.scrollToIndexTimeoutId = null), this.elementsCache.has(this.options.getItemKey(e)))) {
                                            let [t] = s(this.getOffsetForIndex(e, o));
                                            1 > Math.abs(t - this.getScrollOffset()) || this.scrollToIndex(e, { align: o, behavior: n });
                                        } else this.scrollToIndex(e, { align: o, behavior: n });
                                    })));
                        }),
                        (this.scrollBy = (e, { behavior: t } = {}) => {
                            (this.cancelScrollToIndex(),
                                'smooth' === t && this.isDynamicMode() && console.warn('The `smooth` scroll behavior is not fully supported with dynamic size.'),
                                this._scrollToOffset(this.getScrollOffset() + e, { adjustments: void 0, behavior: t }));
                        }),
                        (this.getTotalSize = () => {
                            var e;
                            let t,
                                n = this.getMeasurements();
                            if (0 === n.length) t = this.options.paddingStart;
                            else if (1 === this.options.lanes) t = (null == (e = n[n.length - 1]) ? void 0 : e.end) ?? 0;
                            else {
                                let e = Array(this.options.lanes).fill(null),
                                    r = n.length - 1;
                                for (; r > 0 && e.some((e) => null === e);) {
                                    let t = n[r];
                                    (null === e[t.lane] && (e[t.lane] = t.end), r--);
                                }
                                t = Math.max(...e.filter((e) => null !== e));
                            }
                            return Math.max(t - this.options.scrollMargin + this.options.paddingEnd, 0);
                        }),
                        (this._scrollToOffset = (e, { adjustments: t, behavior: n }) => {
                            this.options.scrollToFn(e, { behavior: n, adjustments: t }, this);
                        }),
                        (this.measure = () => {
                            ((this.itemSizeCache = new Map()), this.notify(!1));
                        }),
                        this.setOptions(e));
                }
            }
            let w = (e, t, n, r) => {
                    for (; e <= t;) {
                        let i = ((e + t) / 2) | 0,
                            o = n(i);
                        if (o < r) e = i + 1;
                        else {
                            if (!(o > r)) return i;
                            t = i - 1;
                        }
                    }
                    return e > 0 ? e - 1 : 0;
                },
                E = 'undefined' != typeof document ? r.useLayoutEffect : r.useEffect;
            function x(e) {
                let t = r.useReducer(() => ({}), {})[1],
                    n = {
                        ...e,
                        onChange: (n, r) => {
                            var o;
                            (r ? (0, i.flushSync)(t) : t(), null == (o = e.onChange) || o.call(e, n, r));
                        },
                    },
                    [o] = r.useState(() => new y(n));
                return (o.setOptions(n), E(() => o._didMount(), []), E(() => o._willUpdate()), o);
            }
            function S(e) {
                return x({ observeElementRect: c, observeElementOffset: p, scrollToFn: v, ...e });
            }
            function O(e) {
                return x({
                    getScrollElement: () => ('undefined' != typeof document ? window : null),
                    observeElementRect: d,
                    observeElementOffset: g,
                    scrollToFn: b,
                    initialOffset: () => ('undefined' != typeof document ? window.scrollY : 0),
                    ...e,
                });
            }
        },
        62414: (e, t, n) => {
            'use strict';
            n.d(t, { D: () => a });
            var r = n(53548),
                i = n(63582),
                o = n(245),
                s = n(22681),
                l = n(56374);
            let a = (0, i.n)({ event: 'LandingBlock.Showed/Hidden', kind: 'hook', requiredScopes: ['screen', 'block', 'object'] }, (e = {}) => {
                let { createObserver: t, delayMs: n = 1e3, enabled: i = !0, onVisibilityChange: a, threshold: u = 0.8 } = e,
                    c = (0, o.N)(),
                    h = (0, s.w)(),
                    d = h?.object,
                    f = h?.block.claimLoadedSession,
                    p = (0, r.useMemo)(() => (h ? c.createBlockReporter(h.snapshot) : null), [c, h]),
                    g = (0, r.useRef)(t),
                    m = (0, r.useRef)(a),
                    [b, v] = (0, r.useState)(null),
                    y = (0, l.c)((e) => v(e));
                ((g.current = t), (m.current = a));
                let w = !!t;
                return (
                    (0, r.useEffect)(() => {
                        if (!i || !b || !d || 'string' != typeof d.scope.objectId || !f || !p || (!w && !b.ownerDocument.defaultView?.IntersectionObserver)) return;
                        let e = !1,
                            t = null,
                            r = null,
                            o = () => {
                                r && (clearTimeout(r), (r = null));
                                let e = t?.hide();
                                (d.activeViewSession === t && (d.activeViewSession = null), (t = null), e && (p.hidden({ viewUuid: e }), m.current?.(!1)));
                            },
                            s = (
                                g.current ??
                                ((e, t, n) => {
                                    let r = n.ownerDocument.defaultView?.IntersectionObserver;
                                    if (!r) throw Error('IntersectionObserver is not available');
                                    return new r(e, t);
                                })
                            )(
                                (i) => {
                                    e ||
                                        i.forEach((e) => {
                                            if (!(e.isIntersecting && e.intersectionRatio >= u)) return void o();
                                            r ||
                                                t?.isVisible ||
                                                (r = setTimeout(() => {
                                                    ((r = null), (t ??= f() ?? d.viewSession), (d.activeViewSession = t));
                                                    let e = t.show();
                                                    e && (p.showed({ viewUuid: e }), m.current?.(!0));
                                                }, n));
                                        });
                                },
                                { threshold: u },
                                b,
                            );
                        return (
                            s.observe(b),
                            () => {
                                ((e = !0), o(), s.unobserve(b), s.disconnect());
                            }
                        );
                    }, [b, f, d, n, i, w, u, p]),
                    y
                );
            });
        },
        74021: (e, t, n) => {
            'use strict';
            n.d(t, { q: () => a });
            var r = n(14567),
                i = n(243),
                o = n(62151),
                s = n(33396);
            let l = () => 'SECRET';
            class a {
                maxLogLevel;
                secureFields;
                additionalData;
                constructor({ additionalData: e, maxLogLevel: t, secureFields: n }) {
                    ((this.maxLogLevel = t), (this.secureFields = n), (this.additionalData = e));
                }
                formatMessage(e, t, n = {}, i) {
                    let o,
                        l = String(t instanceof Error && t.stack ? t.stack : t),
                        a = (0, s.A)({ ...this.additionalData, ...n });
                    return (Object.keys(a).length && (o = this.obfuscateData(a)), i) ? `${l} ${r(o)}` : [l, o];
                }
                obfuscateData(e) {
                    if (this.secureFields?.length) for (let t of this.secureFields) void 0 !== (0, i.A)(e, t) && (0, o.A)(e, t, l());
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
                        return l;
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
                    l = e.hash || '',
                    a = e.query || '',
                    u = !1;
                ((t = t ? encodeURIComponent(t).replace(/%3A/i, ':') + '@' : ''),
                    e.host ? (u = t + e.host) : n && ((u = t + (~n.indexOf(':') ? '[' + n + ']' : n)), e.port && (u += ':' + e.port)),
                    a && 'object' == typeof a && (a = String(r.urlQueryToSearchParams(a))));
                let c = e.search || (a && '?' + a) || '';
                return (
                    o && !o.endsWith(':') && (o += ':'),
                    e.slashes || ((!o || i.test(o)) && !1 !== u) ? ((u = '//' + (u || '')), s && '/' !== s[0] && (s = '/' + s)) : u || (u = ''),
                    l && '#' !== l[0] && (l = '#' + l),
                    c && '?' !== c[0] && (c = '?' + c),
                    '' + o + u + (s = s.replace(/[?#]/g, encodeURIComponent)) + (c = c.replace('#', '%23')) + l
                );
            }
            let s = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
            function l(e) {
                return o(e);
            }
        },
        77451: (e, t, n) => {
            'use strict';
            n.d(t, { Jt: () => o, TF: () => l, hZ: () => s });
            var r = function () {
                return (r =
                    Object.assign ||
                    function (e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var i in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                        return e;
                    }).apply(this, arguments);
            };
            function i(e, t) {
                if (!t) return '';
                var n = '; ' + e;
                return !0 === t ? n : n + '=' + t;
            }
            function o(e) {
                return (function (e) {
                    for (var t = {}, n = e ? e.split('; ') : [], r = 0; r < n.length; r++) {
                        var i = n[r].split('='),
                            o = i.slice(1).join('=');
                        '"' === o[0] && (o = o.slice(1, -1));
                        try {
                            t[decodeURIComponent(i[0])] = o.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
                        } catch (e) {}
                    }
                    return t;
                })(document.cookie)[e];
            }
            function s(e, t, n) {
                var o;
                document.cookie =
                    ((o = r({ path: '/' }, n)),
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
                        })(o));
            }
            function l(e, t) {
                s(e, '', r(r({}, t), { expires: -1 }));
            }
        },
        80643: (e, t, n) => {
            'use strict';
            n.d(t, { S: () => a });
            var r = n(53548),
                i = n(63582),
                o = n(245),
                s = n(22681),
                l = n(56374);
            let a = (0, i.n)({ event: 'LandingBlock.Navigated', kind: 'hook', requiredScopes: ['screen', 'block', 'object'] }, () => {
                let e = (0, o.N)(),
                    t = (0, s.w)(),
                    n = (0, r.useMemo)(() => (t ? e.createBlockReporter(t.snapshot) : null), [e, t]);
                return (0, l.c)((e) => {
                    t?.object &&
                        n &&
                        n.navigated({ ...e, from: e.from ?? t.snapshot.screen.pageId, viewUuid: (t.object.activeViewSession ?? t.object.viewSession).start() });
                });
            });
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
                                l = s.code.toLowerCase(),
                                a = s.region ? s.region.toLowerCase() : s.region,
                                u = s.script ? s.script.toLowerCase() : s.script,
                                c = 0;
                            c < i.length;
                            c++
                        ) {
                            var h = i[c].code.toLowerCase(),
                                d = i[c].script ? i[c].script.toLowerCase() : i[c].script,
                                f = i[c].region ? i[c].region.toLowerCase() : i[c].region;
                            if (l === h && (r.loose || !u || u === d) && (r.loose || !a || a === f)) return e[c];
                        }
                    return null;
                }));
        },
    },
]);
