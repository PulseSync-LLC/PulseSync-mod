(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1782],
    {
        4653: (e, t, r) => {
            'use strict';
            r.d(t, { U: () => i });
            var n = r(95982),
                o = Object.defineProperty,
                a = (e, t, r) => (
                    ((e, t, r) => (t in e ? o(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r)))(e, 'symbol' != typeof t ? t + '' : t, r),
                    r
                );
            class i {
                constructor({ brandConfig: e, enableWideLanguageSelectWithBrandLangs: t }) {
                    (a(this, 'brandLangs'),
                        a(this, 'brandDefaultLang'),
                        a(this, 'regionLangs'),
                        a(this, 'enableWideLanguageSelectWithBrandLangs'),
                        (this.brandLangs = e.langs),
                        (this.brandDefaultLang = e.defaultLang),
                        (this.regionLangs = e.regionLangs),
                        (this.enableWideLanguageSelectWithBrandLangs = t));
                }
                static parseAcceptLanguage(e) {
                    return n.parse(e).map(({ code: e }) => e);
                }
                getLang({ regionIsoName: e, urlLang: t, cookieLang: r, acceptLangs: n }) {
                    var o, a, i;
                    let s = e ? (null == (o = this.regionLangs) ? void 0 : o[e]) : void 0,
                        c = this.enableWideLanguageSelectWithBrandLangs ? this.brandLangs : null != (a = null == s ? void 0 : s.langs) ? a : this.brandLangs,
                        l = null != (i = null == s ? void 0 : s.defaultLang) ? i : this.brandDefaultLang;
                    return this.selectLang({ supportedLangs: c, defaultLang: l, urlLang: t, cookieLang: r, acceptLangs: n });
                }
                intersect(e, t) {
                    let r = new Set(t);
                    return e.filter((e) => r.has(e));
                }
                selectLang({ supportedLangs: e, defaultLang: t, urlLang: r, cookieLang: n, acceptLangs: o }) {
                    if ('string' == typeof r && e.includes(r)) return r;
                    let a = null != o ? o : [],
                        i = n ? [n, ...a] : a,
                        s = this.intersect(i, e)[0];
                    return void 0 !== s ? s : t;
                }
            }
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
                    function (o, a) {
                        if (r.length > 0) {
                            var i = r.indexOf(this);
                            (~i ? r.splice(i + 1) : r.push(this), ~i ? n.splice(i, 1 / 0, o) : n.push(o), ~r.indexOf(a) && (a = t.call(this, o, a)));
                        } else r.push(a);
                        return null == e ? a : e.call(this, o, a);
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
        42824: (e, t, r) => {
            'use strict';
            (r.d(t, { s: () => O }), r(4653));
            function n(e, t, r) {
                return ((t = i(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e);
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
                                a,
                                i,
                                s = [],
                                c = !0,
                                l = !1;
                            try {
                                if (((a = (r = r.call(e)).next), 0 === t)) {
                                    if (Object(r) !== r) return;
                                    c = !1;
                                } else for (; !(c = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); c = !0);
                            } catch (e) {
                                ((l = !0), (o = e));
                            } finally {
                                try {
                                    if (!c && null != r.return && ((i = r.return()), Object(i) !== i)) return;
                                } finally {
                                    if (l) throw o;
                                }
                            }
                            return s;
                        }
                    })(e, t) ||
                    (function (e, t) {
                        if (e) {
                            if ('string' == typeof e) return a(e, t);
                            var r = Object.prototype.toString.call(e).slice(8, -1);
                            if (('Object' === r && e.constructor && (r = e.constructor.name), 'Map' === r || 'Set' === r)) return Array.from(e);
                            if ('Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return a(e, t);
                        }
                    })(e, t) ||
                    (function () {
                        throw TypeError(
                            'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                        );
                    })()
                );
            }
            function a(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
                return n;
            }
            function i(e) {
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
            function c(e, t, r) {
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
            function u(e, t, r) {
                if (!t.has(e)) throw TypeError('attempted to get private field on non-instance');
                return r;
            }
            function p(e, t) {
                if (t.has(e)) throw TypeError('Cannot initialize the same private elements twice on an object');
            }
            function d(e, t, r) {
                (p(e, t), t.set(e, r));
            }
            function h(e, t) {
                (p(e, t), t.add(e));
            }
            var f = [
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
                        a = r[1],
                        i = e.lastIndexOf(n);
                    ~i && e.splice(i, 1, a);
                });
            })(f);
            var g = new WeakMap(),
                v = new WeakMap(),
                b = new WeakSet(),
                m = new WeakSet();
            function E() {
                c(this, v, RegExp(s(this, g).join('|'), 'i'));
            }
            function y(e) {
                return s(this, g).indexOf(e.toLowerCase());
            }
            new ((function () {
                var e;
                function t(e) {
                    var r = this;
                    if (!(this instanceof t)) throw TypeError('Cannot call a class as a function');
                    return (
                        h(this, m),
                        h(this, b),
                        d(this, g, { writable: !0, value: void 0 }),
                        d(this, v, { writable: !0, value: void 0 }),
                        c(this, g, e || f.slice()),
                        u(this, b, E).call(this),
                        Object.defineProperties(
                            function (e) {
                                return r.test(e);
                            },
                            Object.entries(Object.getOwnPropertyDescriptors(t.prototype)).reduce(function (e, t) {
                                var a = o(t, 2),
                                    i = a[0],
                                    s = a[1];
                                return (
                                    'function' == typeof s.value && Object.assign(e, n({}, i, { value: r[i].bind(r) })),
                                    'function' == typeof s.get &&
                                        Object.assign(
                                            e,
                                            n({}, i, {
                                                get: function () {
                                                    return r[i];
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
                                return new RegExp(s(this, v));
                            },
                        },
                        {
                            key: 'test',
                            value: function (e) {
                                return !!e && s(this, v).test(e);
                            },
                        },
                        {
                            key: 'find',
                            value: function () {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '',
                                    t = e.match(s(this, v));
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
                                            return -1 === u(e, m, y).call(e, t);
                                        })
                                        .map(function (e) {
                                            return e.toLowerCase();
                                        }),
                                ),
                                    u(this, b, E).call(this));
                            },
                        },
                        {
                            key: 'exclude',
                            value: function () {
                                for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], t = e.length; t--;) {
                                    var r = u(this, m, y).call(this, e[t]);
                                    r > -1 && s(this, g).splice(r, 1);
                                }
                                u(this, b, E).call(this);
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
                            ((n.enumerable = n.enumerable || !1), (n.configurable = !0), 'value' in n && (n.writable = !0), Object.defineProperty(e, i(n.key), n));
                        }
                    })(t.prototype, e),
                    Object.defineProperty(t, 'prototype', { writable: !1 }),
                    t
                );
            })())();
            let O = 'funtech-lang';
        },
        44084: (e, t, r) => {
            'use strict';
            r.d(t, { r: () => a });
            var n = r(23877),
                o = r(74021);
            class a extends o.q {
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
        74021: (e, t, r) => {
            'use strict';
            r.d(t, { q: () => c });
            var n = r(14567),
                o = r(243),
                a = r(62151),
                i = r(33396);
            let s = () => 'SECRET';
            class c {
                maxLogLevel;
                secureFields;
                additionalData;
                constructor({ additionalData: e, maxLogLevel: t, secureFields: r }) {
                    ((this.maxLogLevel = t), (this.secureFields = r), (this.additionalData = e));
                }
                formatMessage(e, t, r = {}, o) {
                    let a,
                        s = String(t instanceof Error && t.stack ? t.stack : t),
                        c = (0, i.A)({ ...this.additionalData, ...r });
                    return (Object.keys(c).length && (a = this.obfuscateData(c)), o) ? `${s} ${n(a)}` : [s, a];
                }
                obfuscateData(e) {
                    if (this.secureFields?.length) for (let t of this.secureFields) void 0 !== (0, o.A)(e, t) && (0, a.A)(e, t, s());
                    return e;
                }
            }
        },
        77451: (e, t, r) => {
            'use strict';
            r.d(t, { Jt: () => a, TF: () => s, hZ: () => i });
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
            function a(e) {
                return (function (e) {
                    for (var t = {}, r = e ? e.split('; ') : [], n = 0; n < r.length; n++) {
                        var o = r[n].split('='),
                            a = o.slice(1).join('=');
                        '"' === a[0] && (a = a.slice(1, -1));
                        try {
                            t[decodeURIComponent(o[0])] = a.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
                        } catch (e) {}
                    }
                    return t;
                })(document.cookie)[e];
            }
            function i(e, t, r) {
                var a;
                document.cookie =
                    ((a = n({ path: '/' }, r)),
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
                        })(a));
            }
            function s(e, t) {
                i(e, '', n(n({}, t), { expires: -1 }));
            }
        },
        89916: (e, t, r) => {
            'use strict';
            r.d(t, { GX: () => a.G, X1: () => n.X, m5: () => o.m });
            var n = r(46606),
                o = r(91136),
                a = r(19840);
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
                    let { code: r = 'E_INTERNAL', data: o = {}, ...a } = t,
                        i = e || 'Internal error';
                    (super(i, a), (this.message = i), (this.code = r), (this.data = o), (this.stack = Error(i).stack), Object.setPrototypeOf(this, n.prototype));
                }
            }
            class o extends n {
                name = 'HttpException';
                constructor(e = 'Http Client error', { code: t = 'E_HTTP_CLIENT', ...r } = {}) {
                    (super(e, { code: t, ...r }), Object.setPrototypeOf(this, o.prototype));
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
                            a = 0;
                        a < t.length;
                        a++
                    )
                        for (
                            var i = t[a],
                                s = i.code.toLowerCase(),
                                c = i.region ? i.region.toLowerCase() : i.region,
                                l = i.script ? i.script.toLowerCase() : i.script,
                                u = 0;
                            u < o.length;
                            u++
                        ) {
                            var p = o[u].code.toLowerCase(),
                                d = o[u].script ? o[u].script.toLowerCase() : o[u].script,
                                h = o[u].region ? o[u].region.toLowerCase() : o[u].region;
                            if (s === p && (n.loose || !l || l === d) && (n.loose || !c || c === h)) return e[u];
                        }
                    return null;
                }));
        },
    },
]);
