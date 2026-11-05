(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2824, 4311],
    {
        4653: (e, t, n) => {
            'use strict';
            n.d(t, { U: () => r });
            var s = n(95982),
                i = Object.defineProperty,
                o = (e, t, n) => (
                    ((e, t, n) => (t in e ? i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n)))(e, 'symbol' != typeof t ? t + '' : t, n),
                    n
                );
            class r {
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
                    return s.parse(e).map(({ code: e }) => e);
                }
                getLang({ regionIsoName: e, urlLang: t, cookieLang: n, acceptLangs: s }) {
                    var i, o, r;
                    let l = e ? (null == (i = this.regionLangs) ? void 0 : i[e]) : void 0,
                        a = this.enableWideLanguageSelectWithBrandLangs ? this.brandLangs : null != (o = null == l ? void 0 : l.langs) ? o : this.brandLangs,
                        c = null != (r = null == l ? void 0 : l.defaultLang) ? r : this.brandDefaultLang;
                    return this.selectLang({ supportedLangs: a, defaultLang: c, urlLang: t, cookieLang: n, acceptLangs: s });
                }
                intersect(e, t) {
                    let n = new Set(t);
                    return e.filter((e) => n.has(e));
                }
                selectLang({ supportedLangs: e, defaultLang: t, urlLang: n, cookieLang: s, acceptLangs: i }) {
                    if ('string' == typeof n && e.includes(n)) return n;
                    let o = null != i ? i : [],
                        r = s ? [s, ...o] : o,
                        l = this.intersect(r, e)[0];
                    return void 0 !== l ? l : t;
                }
            }
        },
        7833: (e, t, n) => {
            'use strict';
            n.d(t, { B: () => c });
            var s = n(88800),
                i = n(53548),
                o = n(63582),
                r = n(99875),
                l = n(66109),
                a = n(245);
            let c = (0, o.B)(
                { kind: 'provider', requiredProps: ['objectType', 'objectId', 'objectPosX', 'objectPosY'], pendingProps: ['objectId'], scope: 'object' },
                ({ children: e, objectId: t, objectPosX: n, objectPosY: o, objectType: c }) => {
                    let u = (0, a.N)(),
                        h = (0, i.useContext)(r.p)?.loadedSession,
                        d = [c, t, n, o].join(':'),
                        [p, f] = (0, i.useState)(() => ({ client: u, identity: d, blockSession: h, viewSession: u.createBlockViewSession() }));
                    (p.client !== u || p.identity !== d || p.blockSession !== h) &&
                        f({ client: u, identity: d, blockSession: h, viewSession: u.createBlockViewSession() });
                    let g = (0, i.useMemo)(
                        () => ({ activeViewSession: null, scope: { objectId: t, objectPosX: n, objectPosY: o, objectType: c }, viewSession: p.viewSession }),
                        [t, n, o, c, p.viewSession],
                    );
                    return (0, s.jsx)(l.l, { value: g, children: e });
                },
            );
        },
        14567: (e, t) => {
            (e.exports = function (e, t, s, i) {
                return JSON.stringify(e, n(t, i), s);
            }).getSerialize = n;
            function n(e, t) {
                var n = [],
                    s = [];
                return (
                    null == t &&
                        (t = function (e, t) {
                            return n[0] === t ? '[Circular ~]' : '[Circular ~.' + s.slice(0, n.indexOf(t)).join('.') + ']';
                        }),
                    function (i, o) {
                        if (n.length > 0) {
                            var r = n.indexOf(this);
                            (~r ? n.splice(r + 1) : n.push(this), ~r ? s.splice(r, 1 / 0, i) : s.push(i), ~n.indexOf(o) && (o = t.call(this, i, o)));
                        } else n.push(o);
                        return null == e ? o : e.call(this, i, o);
                    }
                );
            }
        },
        17017: (e, t, n) => {
            'use strict';
            var s;
            (n.d(t, { Z: () => s }),
                (function (e) {
                    ((e.METHOD_NOT_SUPPORTED = 'E_BEACON_METHOD_NOT_SUPPORTED'),
                        (e.NOT_AVAILABLE = 'E_BEACON_NOT_AVAILABLE'),
                        (e.QUEUE_FAILED = 'E_BEACON_QUEUE_FAILED'),
                        (e.NO_RESPONSE_DATA = 'E_BEACON_NO_RESPONSE_DATA'),
                        (e.RETRY_EXHAUSTED = 'E_BEACON_RETRY_EXHAUSTED'));
                })(s || (s = {})));
        },
        19840: (e, t, n) => {
            'use strict';
            (n.d(t, { G: () => i }), n(46606));
            var s = n(91136);
            class i extends s.m {
                name = 'HttpErrorException';
                statusCode;
                constructor(e, t) {
                    (super(e, { code: 'E_HTTP_CLIENT_NON_2XX_3XX_RESPONSE', cause: t.cause }),
                        (this.statusCode = t.statusCode),
                        Object.setPrototypeOf(this, i.prototype));
                }
            }
        },
        22681: (e, t, n) => {
            'use strict';
            n.d(t, { w: () => u });
            var s = n(53548),
                i = n(99875),
                o = n(36236),
                r = n(66109),
                l = n(53534),
                a = n(79045),
                c = n(7695);
            let u = () => {
                let e = (0, s.useContext)(l.k),
                    t = e?.isReady ? e.scope : null,
                    n = (0, s.useContext)(a.F) ?? c.Ve,
                    u = (0, s.useContext)(o.S),
                    h = (0, s.useContext)(i.p),
                    d = (0, s.useContext)(r.l),
                    p = (0, s.useMemo)(() => (t && h ? { block: h.scope, filter: u, object: d?.scope ?? null, screen: t, tab: n } : null), [h, u, d, t, n]);
                return (0, s.useMemo)(() => (h && p ? { block: h, object: d, snapshot: p } : null), [h, d, p]);
            };
        },
        23877: (e, t, n) => {
            'use strict';
            var s;
            (n.d(t, { Q: () => i, c: () => s }),
                (function (e) {
                    ((e[(e.ERROR = 10)] = 'ERROR'),
                        (e[(e.WARNING = 20)] = 'WARNING'),
                        (e[(e.INFO = 30)] = 'INFO'),
                        (e[(e.DEBUG = 40)] = 'DEBUG'),
                        (e[(e.TRACE = 50)] = 'TRACE'));
                })(s || (s = {})));
            let i = { [s.ERROR]: 'error', [s.WARNING]: 'warn', [s.INFO]: 'info', [s.DEBUG]: 'debug', [s.TRACE]: 'trace' };
        },
        33979: (e, t, n) => {
            'use strict';
            n.d(t, { g: () => a });
            var s = n(53548),
                i = n(63582),
                o = n(245),
                r = n(22681),
                l = n(56374);
            let a = (0, i.n)({ event: 'LandingBlock.Started', kind: 'hook', requiredScopes: ['screen', 'block', 'object'] }, () => {
                let e = (0, o.N)(),
                    t = (0, r.w)(),
                    n = (0, s.useMemo)(() => (t ? e.createBlockReporter(t.snapshot) : null), [e, t]);
                return (0, l.c)(() => {
                    n?.started();
                });
            });
        },
        37523: (e, t, n) => {
            'use strict';
            n.d(t, { F: () => u });
            var s = n(88800),
                i = n(53548),
                o = n(63582),
                r = n(53534),
                l = n(99875),
                a = n(245);
            let c = (e, t, n) => {
                    let s = e.createBlockViewSession(),
                        i = !1;
                    return { claimLoadedSession: () => (i ? null : ((i = !0), s)), client: e, identity: t, loadedSession: s, screenSession: n };
                },
                u = (0, o.B)(
                    { kind: 'provider', requiredProps: ['blockId', 'blockType', 'blockPosX', 'blockPosY', 'objectsCount'], scope: 'block' },
                    ({ blockId: e, blockIdForFrom: t, blockPosX: n, blockPosY: o, blockType: u, children: h, objectsCount: d }) => {
                        let p = (0, a.N)(),
                            f = (0, i.useContext)(r.k)?.session,
                            g = [e, u, n, o].join(':'),
                            [m, b] = (0, i.useState)(() => c(p, g, f));
                        (m.client !== p || m.identity !== g || m.screenSession !== f) && b(c(p, g, f));
                        let v = (0, i.useMemo)(
                            () => ({
                                claimLoadedSession: m.claimLoadedSession,
                                loadedSession: m.loadedSession,
                                scope: { blockId: e, blockIdForFrom: t, blockPosX: n, blockPosY: o, blockType: u, objectsCount: d },
                            }),
                            [e, t, n, o, u, d, m.claimLoadedSession, m.loadedSession],
                        );
                        return (0, s.jsx)(l.p, { value: v, children: h });
                    },
                );
        },
        42824: (e, t, n) => {
            'use strict';
            (n.d(t, { s: () => E }), n(4653));
            function s(e, t, n) {
                return ((t = r(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e);
            }
            function i(e, t) {
                return (
                    (function (e) {
                        if (Array.isArray(e)) return e;
                    })(e) ||
                    (function (e, t) {
                        var n = null == e ? null : ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                        if (null != n) {
                            var s,
                                i,
                                o,
                                r,
                                l = [],
                                a = !0,
                                c = !1;
                            try {
                                if (((o = (n = n.call(e)).next), 0 === t)) {
                                    if (Object(n) !== n) return;
                                    a = !1;
                                } else for (; !(a = (s = o.call(n)).done) && (l.push(s.value), l.length !== t); a = !0);
                            } catch (e) {
                                ((c = !0), (i = e));
                            } finally {
                                try {
                                    if (!a && null != n.return && ((r = n.return()), Object(r) !== r)) return;
                                } finally {
                                    if (c) throw i;
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
                for (var n = 0, s = Array(t); n < t; n++) s[n] = e[n];
                return s;
            }
            function r(e) {
                var t = (function (e, t) {
                    if ('object' != typeof e || null === e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var s = n.call(e, t || 'default');
                        if ('object' != typeof s) return s;
                        throw TypeError('@@toPrimitive must return a primitive value.');
                    }
                    return ('string' === t ? String : Number)(e);
                })(e, 'string');
                return 'symbol' == typeof t ? t : String(t);
            }
            function l(e, t) {
                var n,
                    s,
                    i = c(e, t, 'get');
                return ((n = e), (s = i).get ? s.get.call(n) : s.value);
            }
            function a(e, t, n) {
                var s = c(e, t, 'set');
                return (
                    (function (e, t, n) {
                        if (t.set) t.set.call(e, n);
                        else {
                            if (!t.writable) throw TypeError('attempted to set read only private field');
                            t.value = n;
                        }
                    })(e, s, n),
                    n
                );
            }
            function c(e, t, n) {
                if (!t.has(e)) throw TypeError('attempted to ' + n + ' private field on non-instance');
                return t.get(e);
            }
            function u(e, t, n) {
                if (!t.has(e)) throw TypeError('attempted to get private field on non-instance');
                return n;
            }
            function h(e, t) {
                if (t.has(e)) throw TypeError('Cannot initialize the same private elements twice on an object');
            }
            function d(e, t, n) {
                (h(e, t), t.set(e, n));
            }
            function p(e, t) {
                (h(e, t), t.add(e));
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
                    var n = i(t, 2),
                        s = n[0],
                        o = n[1],
                        r = e.lastIndexOf(s);
                    ~r && e.splice(r, 1, o);
                });
            })(f);
            var g = new WeakMap(),
                m = new WeakMap(),
                b = new WeakSet(),
                v = new WeakSet();
            function w() {
                a(this, m, RegExp(l(this, g).join('|'), 'i'));
            }
            function y(e) {
                return l(this, g).indexOf(e.toLowerCase());
            }
            new ((function () {
                var e;
                function t(e) {
                    var n = this;
                    if (!(this instanceof t)) throw TypeError('Cannot call a class as a function');
                    return (
                        p(this, v),
                        p(this, b),
                        d(this, g, { writable: !0, value: void 0 }),
                        d(this, m, { writable: !0, value: void 0 }),
                        a(this, g, e || f.slice()),
                        u(this, b, w).call(this),
                        Object.defineProperties(
                            function (e) {
                                return n.test(e);
                            },
                            Object.entries(Object.getOwnPropertyDescriptors(t.prototype)).reduce(function (e, t) {
                                var o = i(t, 2),
                                    r = o[0],
                                    l = o[1];
                                return (
                                    'function' == typeof l.value && Object.assign(e, s({}, r, { value: n[r].bind(n) })),
                                    'function' == typeof l.get &&
                                        Object.assign(
                                            e,
                                            s({}, r, {
                                                get: function () {
                                                    return n[r];
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
                                            return -1 === u(e, v, y).call(e, t);
                                        })
                                        .map(function (e) {
                                            return e.toLowerCase();
                                        }),
                                ),
                                    u(this, b, w).call(this));
                            },
                        },
                        {
                            key: 'exclude',
                            value: function () {
                                for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], t = e.length; t--;) {
                                    var n = u(this, v, y).call(this, e[t]);
                                    n > -1 && l(this, g).splice(n, 1);
                                }
                                u(this, b, w).call(this);
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
                            var s = t[n];
                            ((s.enumerable = s.enumerable || !1), (s.configurable = !0), 'value' in s && (s.writable = !0), Object.defineProperty(e, r(s.key), s));
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
            var s = n(23877),
                i = n(74021);
            class o extends i.q {
                disableLogToConsole;
                constructor(e) {
                    (super(e), (this.disableLogToConsole = e.disableLogToConsole));
                }
                info(e, t) {
                    this.maxLogLevel >= s.c.INFO && this.logToConsole(s.c.INFO, e, t);
                }
                debug(e, t) {
                    this.maxLogLevel >= s.c.DEBUG && this.logToConsole(s.c.DEBUG, e, t);
                }
                trace(e, t) {
                    this.maxLogLevel >= s.c.TRACE && this.logToConsole(s.c.TRACE, e, t);
                }
                warn(e, t) {
                    (this.maxLogLevel >= s.c.WARNING && this.logToConsole(s.c.WARNING, e, t), this.sendToErrorBooster(s.c.WARNING, e, t));
                }
                error(e, t) {
                    (this.maxLogLevel >= s.c.ERROR && this.logToConsole(s.c.ERROR, e, t), this.sendToErrorBooster(s.c.ERROR, e, t));
                }
                log(e, t) {
                    this.logToConsole(s.c.INFO, e, t);
                }
                logToConsole(e, t, n) {
                    if (this.disableLogToConsole) return;
                    let i = s.Q[e];
                    console[i](...this.formatMessage(e, t, n));
                }
                sendToErrorBooster(e, t, n) {
                    window.Ya.Rum.logError({ message: t, level: e, additional: { data: n ? this.obfuscateData({ ...this.additionalData, ...n }) : {} } });
                }
            }
        },
        46606: (e, t, n) => {
            'use strict';
            var s;
            (n.d(t, { X: () => s }),
                (function (e) {
                    ((e[(e.NOT_MODIFIED = 304)] = 'NOT_MODIFIED'),
                        (e[(e.NOT_FOUND = 404)] = 'NOT_FOUND'),
                        (e[(e.BAD_REQUEST = 400)] = 'BAD_REQUEST'),
                        (e[(e.REQUEST_TIMEOUT = 408)] = 'REQUEST_TIMEOUT'),
                        (e[(e.PRECONDITION_FAILED = 412)] = 'PRECONDITION_FAILED'),
                        (e[(e.TEAPOT = 418)] = 'TEAPOT'));
                })(s || (s = {})));
        },
        54721: (e, t, n) => {
            'use strict';
            n.d(t, { u: () => d });
            var s = n(53548),
                i = n(47149),
                o = n(63582),
                r = n(59791),
                l = n(7695),
                a = n(53534),
                c = n(89846),
                u = n(64543),
                h = n(56374);
            let d = (0, o.n)({ event: 'Screen.Opened/Closed', kind: 'hook', requiredScopes: ['screen'] }, () => {
                let e = (0, s.useContext)(r.I),
                    { hash: t } = (0, c.g)(),
                    { screen: n, tab: o } = (0, u.j)(),
                    d = (0, s.useContext)(a.k)?.session,
                    { current: p } = (0, s.useRef)(Symbol()),
                    f = !!n,
                    g = (s) => {
                        if (!e || !d || !n?.pageId || void 0 === t || !f) return !1;
                        let r = {
                            hash: t,
                            pageId: n.pageId,
                            pageStyle: n.pageStyle,
                            pagePlacement: n.pagePlacement,
                            mainObjectType: n.mainObjectType,
                            mainObjectId: n.mainObjectId,
                            skeletonId: n.skeletonId,
                            viewUuid: n.screenViewUuid,
                            ...(o ?? l.Ve),
                        };
                        return (s ? d.open(p, () => (0, i.Fn)(e, r)) : d.close(p, () => (0, i.PO)(e, r)), !0);
                    },
                    [m, b] = (0, s.useState)(() => ({ session: d, send: g, opened: !1 })),
                    v = m;
                (m.session !== d && b((v = { session: d, send: g, opened: !1 })),
                    (0, s.useInsertionEffect)(() => {
                        f && void 0 !== t && (v.send = g);
                    }, [v, t, f, g]));
                let w = (0, h.c)((e, t) => {
                    e.send(t) && (e.opened = t);
                });
                ((0, s.useEffect)(
                    () => (
                        w(v, !0),
                        () => {
                            (v.opened && w(v, !1), v.session?.release(p));
                        }
                    ),
                    [p, v, w],
                ),
                    (0, s.useEffect)(() => {
                        w(v, !0);
                    }, [v, t, f, w]));
            });
        },
        56949: (e, t, n) => {
            'use strict';
            n.d(t, { Te: () => S, XW: () => T });
            var s = n(53548),
                i = n(53405);
            function o(e, t, n) {
                let s,
                    i = n.initialDeps ?? [];
                function o() {
                    var o, r, l, a;
                    let c, u;
                    n.key && (null == (o = n.debug) ? void 0 : o.call(n)) && (c = Date.now());
                    let h = e();
                    if (!(h.length !== i.length || h.some((e, t) => i[t] !== e))) return s;
                    if (
                        ((i = h),
                        n.key && (null == (r = n.debug) ? void 0 : r.call(n)) && (u = Date.now()),
                        (s = t(...h)),
                        n.key && (null == (l = n.debug) ? void 0 : l.call(n)))
                    ) {
                        let e = Math.round((Date.now() - c) * 100) / 100,
                            t = Math.round((Date.now() - u) * 100) / 100,
                            s = t / 16,
                            i = (e, t) => {
                                for (e = String(e); e.length < t;) e = ' ' + e;
                                return e;
                            };
                        console.info(
                            `%c⏱ ${i(t, 5)} /${i(e, 5)} ms`,
                            `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * s, 120))}deg 100% 31%);`,
                            null == n ? void 0 : n.key,
                        );
                    }
                    return (null == (a = null == n ? void 0 : n.onChange) || a.call(n, s), s);
                }
                return (
                    (o.updateDeps = (e) => {
                        i = e;
                    }),
                    o
                );
            }
            function r(e, t) {
                if (void 0 !== e) return e;
                throw Error(`Unexpected undefined${t ? `: ${t}` : ''}`);
            }
            let l = (e, t, n) => {
                    let s;
                    return function (...i) {
                        (e.clearTimeout(s), (s = e.setTimeout(() => t.apply(this, i), n)));
                    };
                },
                a = (e) => e,
                c = (e) => {
                    let t = Math.max(e.startIndex - e.overscan, 0),
                        n = Math.min(e.endIndex + e.overscan, e.count - 1),
                        s = [];
                    for (let e = t; e <= n; e++) s.push(e);
                    return s;
                },
                u = (e, t) => {
                    let n = e.scrollElement;
                    if (!n) return;
                    let s = e.targetWindow;
                    if (!s) return;
                    let i = (e) => {
                        let { width: n, height: s } = e;
                        t({ width: Math.round(n), height: Math.round(s) });
                    };
                    if ((i(n.getBoundingClientRect()), !s.ResizeObserver)) return () => {};
                    let o = new s.ResizeObserver((t) => {
                        let s = () => {
                            let e = t[0];
                            if (null == e ? void 0 : e.borderBoxSize) {
                                let t = e.borderBoxSize[0];
                                if (t) return void i({ width: t.inlineSize, height: t.blockSize });
                            }
                            i(n.getBoundingClientRect());
                        };
                        e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(s) : s();
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
                    let s = () => {
                        t({ width: n.innerWidth, height: n.innerHeight });
                    };
                    return (
                        s(),
                        n.addEventListener('resize', s, h),
                        () => {
                            n.removeEventListener('resize', s);
                        }
                    );
                },
                p = 'undefined' == typeof window || 'onscrollend' in window,
                f = (e, t) => {
                    let n = e.scrollElement;
                    if (!n) return;
                    let s = e.targetWindow;
                    if (!s) return;
                    let i = 0,
                        o =
                            e.options.useScrollendEvent && p
                                ? () => void 0
                                : l(
                                      s,
                                      () => {
                                          t(i, !1);
                                      },
                                      e.options.isScrollingResetDelay,
                                  ),
                        r = (s) => () => {
                            let { horizontal: r, isRtl: l } = e.options;
                            ((i = r ? n.scrollLeft * ((l && -1) || 1) : n.scrollTop), o(), t(i, s));
                        },
                        a = r(!0),
                        c = r(!1);
                    (c(), n.addEventListener('scroll', a, h));
                    let u = e.options.useScrollendEvent && p;
                    return (
                        u && n.addEventListener('scrollend', c, h),
                        () => {
                            (n.removeEventListener('scroll', a), u && n.removeEventListener('scrollend', c));
                        }
                    );
                },
                g = (e, t) => {
                    let n = e.scrollElement;
                    if (!n) return;
                    let s = e.targetWindow;
                    if (!s) return;
                    let i = 0,
                        o =
                            e.options.useScrollendEvent && p
                                ? () => void 0
                                : l(
                                      s,
                                      () => {
                                          t(i, !1);
                                      },
                                      e.options.isScrollingResetDelay,
                                  ),
                        r = (s) => () => {
                            ((i = n[e.options.horizontal ? 'scrollX' : 'scrollY']), o(), t(i, s));
                        },
                        a = r(!0),
                        c = r(!1);
                    (c(), n.addEventListener('scroll', a, h));
                    let u = e.options.useScrollendEvent && p;
                    return (
                        u && n.addEventListener('scrollend', c, h),
                        () => {
                            (n.removeEventListener('scroll', a), u && n.removeEventListener('scrollend', c));
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
                b = (e, { adjustments: t = 0, behavior: n }, s) => {
                    var i, o;
                    null == (o = null == (i = s.scrollElement) ? void 0 : i.scrollTo) || o.call(i, { [s.options.horizontal ? 'left' : 'top']: e + t, behavior: n });
                },
                v = (e, { adjustments: t = 0, behavior: n }, s) => {
                    var i, o;
                    null == (o = null == (i = s.scrollElement) ? void 0 : i.scrollTo) || o.call(i, { [s.options.horizontal ? 'left' : 'top']: e + t, behavior: n });
                };
            class w {
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
                                    rangeExtractor: c,
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
                                s = new Map();
                            for (let i = t - 1; i >= 0; i--) {
                                let t = e[i];
                                if (n.has(t.lane)) continue;
                                let o = s.get(t.lane);
                                if ((null == o || t.end > o.end ? s.set(t.lane, t) : t.end < o.end && n.set(t.lane, !0), n.size === this.options.lanes)) break;
                            }
                            return s.size === this.options.lanes
                                ? Array.from(s.values()).sort((e, t) => (e.end === t.end ? e.index - t.index : e.end - t.end))[0]
                                : void 0;
                        }),
                        (this.getMeasurementOptions = o(
                            () => [this.options.count, this.options.paddingStart, this.options.scrollMargin, this.options.getItemKey, this.options.enabled],
                            (e, t, n, s, i) => ((this.pendingMeasuredCacheIndexes = []), { count: e, paddingStart: t, scrollMargin: n, getItemKey: s, enabled: i }),
                            { key: !1 },
                        )),
                        (this.getMeasurements = o(
                            () => [this.getMeasurementOptions(), this.itemSizeCache],
                            ({ count: e, paddingStart: t, scrollMargin: n, getItemKey: s, enabled: i }, o) => {
                                if (!i) return ((this.measurementsCache = []), this.itemSizeCache.clear(), []);
                                0 === this.measurementsCache.length &&
                                    ((this.measurementsCache = this.options.initialMeasurementsCache),
                                    this.measurementsCache.forEach((e) => {
                                        this.itemSizeCache.set(e.key, e.size);
                                    }));
                                let r = this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
                                this.pendingMeasuredCacheIndexes = [];
                                let l = this.measurementsCache.slice(0, r);
                                for (let i = r; i < e; i++) {
                                    let e = s(i),
                                        r = 1 === this.options.lanes ? l[i - 1] : this.getFurthestMeasurement(l, i),
                                        a = r ? r.end + this.options.gap : t + n,
                                        c = o.get(e),
                                        u = 'number' == typeof c ? c : this.options.estimateSize(i),
                                        h = a + u,
                                        d = r ? r.lane : i % this.options.lanes;
                                    l[i] = { index: i, start: a, size: u, end: h, key: e, lane: d };
                                }
                                return ((this.measurementsCache = l), l);
                            },
                            { key: !1, debug: () => this.options.debug },
                        )),
                        (this.calculateRange = o(
                            () => [this.getMeasurements(), this.getSize(), this.getScrollOffset(), this.options.lanes],
                            (e, t, n, s) =>
                                (this.range =
                                    e.length > 0 && t > 0
                                        ? (function ({ measurements: e, outerSize: t, scrollOffset: n, lanes: s }) {
                                              let i = e.length - 1,
                                                  o = y(0, i, (t) => e[t].start, n),
                                                  r = o;
                                              if (1 === s) for (; r < i && e[r].end < n + t;) r++;
                                              else if (s > 1) {
                                                  let l = Array(s).fill(0);
                                                  for (; r < i && l.some((e) => e < n + t);) {
                                                      let t = e[r];
                                                      ((l[t.lane] = t.end), r++);
                                                  }
                                                  let a = Array(s).fill(n + t);
                                                  for (; o > 0 && a.some((e) => e >= n);) {
                                                      let t = e[o];
                                                      ((a[t.lane] = t.start), o--);
                                                  }
                                                  ((o = Math.max(0, o - (o % s))), (r = Math.min(i, r + (s - 1 - (r % s)))));
                                              }
                                              return { startIndex: o, endIndex: r };
                                          })({ measurements: e, outerSize: t, scrollOffset: n, lanes: s })
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
                            (e, t, n, s, i) => (null === s || null === i ? [] : e({ startIndex: s, endIndex: i, overscan: t, count: n })),
                            { key: !1, debug: () => this.options.debug },
                        )),
                        (this.indexFromElement = (e) => {
                            let t = this.options.indexAttribute,
                                n = e.getAttribute(t);
                            return n ? parseInt(n, 10) : (console.warn(`Missing attribute name '${t}={index}' on measured element.`), -1);
                        }),
                        (this._measureElement = (e, t) => {
                            let n = this.indexFromElement(e),
                                s = this.measurementsCache[n];
                            if (!s) return;
                            let i = s.key,
                                o = this.elementsCache.get(i);
                            (o !== e && (o && this.observer.unobserve(o), this.observer.observe(e), this.elementsCache.set(i, e)),
                                e.isConnected && this.resizeItem(n, this.options.measureElement(e, t, this)));
                        }),
                        (this.resizeItem = (e, t) => {
                            let n = this.measurementsCache[e];
                            if (!n) return;
                            let s = t - (this.itemSizeCache.get(n.key) ?? n.size);
                            0 !== s &&
                                ((void 0 !== this.shouldAdjustScrollPositionOnItemSizeChange
                                    ? this.shouldAdjustScrollPositionOnItemSizeChange(n, s, this)
                                    : n.start < this.getScrollOffset() + this.scrollAdjustments) &&
                                    this._scrollToOffset(this.getScrollOffset(), { adjustments: (this.scrollAdjustments += s), behavior: void 0 }),
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
                                for (let s = 0, i = e.length; s < i; s++) {
                                    let i = t[e[s]];
                                    n.push(i);
                                }
                                return n;
                            },
                            { key: !1, debug: () => this.options.debug },
                        )),
                        (this.getVirtualItemForOffset = (e) => {
                            let t = this.getMeasurements();
                            if (0 !== t.length) return r(t[y(0, t.length - 1, (e) => r(t[e]).start, e)]);
                        }),
                        (this.getOffsetForAlignment = (e, t, n = 0) => {
                            let s = this.getSize(),
                                i = this.getScrollOffset();
                            ('auto' === t && (t = e >= i + s ? 'end' : 'start'), 'center' === t ? (e += (n - s) / 2) : 'end' === t && (e -= s));
                            let o = this.options.horizontal ? 'scrollWidth' : 'scrollHeight';
                            return Math.max(
                                Math.min(
                                    (this.scrollElement
                                        ? 'document' in this.scrollElement
                                            ? this.scrollElement.document.documentElement[o]
                                            : this.scrollElement[o]
                                        : 0) - s,
                                    e,
                                ),
                                0,
                            );
                        }),
                        (this.getOffsetForIndex = (e, t = 'auto') => {
                            e = Math.max(0, Math.min(e, this.options.count - 1));
                            let n = this.measurementsCache[e];
                            if (!n) return;
                            let s = this.getSize(),
                                i = this.getScrollOffset();
                            if ('auto' === t)
                                if (n.end >= i + s - this.options.scrollPaddingEnd) t = 'end';
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
                            let s = this.getOffsetForIndex(e, t);
                            if (!s) return;
                            let [i, o] = s;
                            (this._scrollToOffset(i, { adjustments: void 0, behavior: n }),
                                'smooth' !== n &&
                                    this.isDynamicMode() &&
                                    this.targetWindow &&
                                    (this.scrollToIndexTimeoutId = this.targetWindow.setTimeout(() => {
                                        if (((this.scrollToIndexTimeoutId = null), this.elementsCache.has(this.options.getItemKey(e)))) {
                                            let [t] = r(this.getOffsetForIndex(e, o));
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
                                    s = n.length - 1;
                                for (; s > 0 && e.some((e) => null === e);) {
                                    let t = n[s];
                                    (null === e[t.lane] && (e[t.lane] = t.end), s--);
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
            let y = (e, t, n, s) => {
                    for (; e <= t;) {
                        let i = ((e + t) / 2) | 0,
                            o = n(i);
                        if (o < s) e = i + 1;
                        else {
                            if (!(o > s)) return i;
                            t = i - 1;
                        }
                    }
                    return e > 0 ? e - 1 : 0;
                },
                E = 'undefined' != typeof document ? s.useLayoutEffect : s.useEffect;
            function O(e) {
                let t = s.useReducer(() => ({}), {})[1],
                    n = {
                        ...e,
                        onChange: (n, s) => {
                            var o;
                            (s ? (0, i.flushSync)(t) : t(), null == (o = e.onChange) || o.call(e, n, s));
                        },
                    },
                    [o] = s.useState(() => new w(n));
                return (o.setOptions(n), E(() => o._didMount(), []), E(() => o._willUpdate()), o);
            }
            function S(e) {
                return O({ observeElementRect: u, observeElementOffset: f, scrollToFn: v, ...e });
            }
            function T(e) {
                return O({
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
            var s = n(53548),
                i = n(63582),
                o = n(245),
                r = n(22681),
                l = n(56374);
            let a = (0, i.n)({ event: 'LandingBlock.Showed/Hidden', kind: 'hook', requiredScopes: ['screen', 'block', 'object'] }, (e = {}) => {
                let { createObserver: t, delayMs: n = 1e3, enabled: i = !0, onVisibilityChange: a, threshold: c = 0.8 } = e,
                    u = (0, o.N)(),
                    h = (0, r.w)(),
                    d = h?.object,
                    p = h?.block.claimLoadedSession,
                    f = (0, s.useMemo)(() => (h ? u.createBlockReporter(h.snapshot) : null), [u, h]),
                    g = (0, s.useRef)(t),
                    m = (0, s.useRef)(a),
                    [b, v] = (0, s.useState)(null),
                    w = (0, l.c)((e) => v(e));
                ((g.current = t), (m.current = a));
                let y = !!t;
                return (
                    (0, s.useEffect)(() => {
                        if (!i || !b || !d || 'string' != typeof d.scope.objectId || !p || !f || (!y && !b.ownerDocument.defaultView?.IntersectionObserver)) return;
                        let e = !1,
                            t = null,
                            s = null,
                            o = () => {
                                s && (clearTimeout(s), (s = null));
                                let e = t?.hide();
                                (d.activeViewSession === t && (d.activeViewSession = null), (t = null), e && (f.hidden({ viewUuid: e }), m.current?.(!1)));
                            },
                            r = (
                                g.current ??
                                ((e, t, n) => {
                                    let s = n.ownerDocument.defaultView?.IntersectionObserver;
                                    if (!s) throw Error('IntersectionObserver is not available');
                                    return new s(e, t);
                                })
                            )(
                                (i) => {
                                    e ||
                                        i.forEach((e) => {
                                            if (!(e.isIntersecting && e.intersectionRatio >= c)) return void o();
                                            s ||
                                                t?.isVisible ||
                                                (s = setTimeout(() => {
                                                    ((s = null), (t ??= p() ?? d.viewSession), (d.activeViewSession = t));
                                                    let e = t.show();
                                                    e && (f.showed({ viewUuid: e }), m.current?.(!0));
                                                }, n));
                                        });
                                },
                                { threshold: c },
                                b,
                            );
                        return (
                            r.observe(b),
                            () => {
                                ((e = !0), o(), r.unobserve(b), r.disconnect());
                            }
                        );
                    }, [b, p, d, n, i, y, c, f]),
                    w
                );
            });
        },
        70621: (e, t, n) => {
            'use strict';
            n.d(t, { D: () => a });
            var s = n(53548),
                i = n(63582),
                o = n(245),
                r = n(22681),
                l = n(56374);
            let a = (0, i.n)({ event: 'LandingBlock.ActionPerformed', kind: 'hook', requiredScopes: ['screen', 'block', 'object'] }, () => {
                let e = (0, o.N)(),
                    t = (0, r.w)(),
                    n = (0, s.useMemo)(() => (t ? e.createBlockReporter(t.snapshot) : null), [e, t]);
                return (0, l.c)((e) => {
                    t?.object && n && n.actionPerformed({ ...e, viewUuid: (t.object.activeViewSession ?? t.object.viewSession).start() });
                });
            });
        },
        74021: (e, t, n) => {
            'use strict';
            n.d(t, { q: () => a });
            var s = n(14567),
                i = n(243),
                o = n(62151),
                r = n(33396);
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
                        a = (0, r.A)({ ...this.additionalData, ...n });
                    return (Object.keys(a).length && (o = this.obfuscateData(a)), i) ? `${l} ${s(o)}` : [l, o];
                }
                obfuscateData(e) {
                    if (this.secureFields?.length) for (let t of this.secureFields) void 0 !== (0, i.A)(e, t) && (0, o.A)(e, t, l());
                    return e;
                }
            }
        },
        76903: (e, t, n) => {
            'use strict';
            n.d(t, { a: () => h });
            var s = n(88800),
                i = n(53548),
                o = n(53534),
                r = n(63582),
                l = n(245);
            let a = new WeakMap();
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
                        a.get(t) ??
                        (() => {
                            let e = [],
                                t = !1,
                                n = () => {
                                    for (; e.length > 0;) e.shift()?.();
                                },
                                s = () => {
                                    t ||
                                        ((t = !0),
                                        queueMicrotask(() => {
                                            try {
                                                n();
                                            } finally {
                                                ((t = !1), e.length > 0 && s());
                                            }
                                        }));
                                };
                            return {
                                open: (e) => {
                                    (n(), e());
                                },
                                defer: (t) => {
                                    (e.push(t), s());
                                },
                            };
                        })();
                    (a.set(t, n), (this.queue = n));
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
            var u = n(87999);
            let h = (0, r.B)(
                { kind: 'provider', requiredProps: ['pageId'], pendingProps: ['mainObjectType', 'mainObjectId'], scope: 'screen' },
                ({ children: e, ...t }) => {
                    let n = (0, l.N)(),
                        r = ((e) =>
                            (!Object.hasOwn(e, 'mainObjectType') || void 0 !== e.mainObjectType) &&
                            ('string' == typeof e.mainObjectId ||
                                (!Object.hasOwn(e, 'mainObjectId') && (!Object.hasOwn(e, 'mainObjectType') || e.mainObjectType === u.DomainObjectType.NonApplicable))))(
                            t,
                        ),
                        [a, h] = (0, i.useState)(() => {
                            let e = new c(n.createScreenSession().screenViewUuid, n);
                            return { client: n, input: t, isReady: r, scope: r ? n.createScreenScope(t, e) : null, session: e };
                        });
                    if (
                        a.client !== n ||
                        a.input.pageId !== t.pageId ||
                        a.input.skeletonId !== t.skeletonId ||
                        a.input.mainObjectType !== t.mainObjectType ||
                        a.input.mainObjectId !== t.mainObjectId
                    ) {
                        let i = new c(n.createScreenSession().screenViewUuid, n),
                            l = { client: n, input: t, isReady: r, scope: r ? n.createScreenScope(t, i) : null, session: i };
                        return (h(l), (0, s.jsx)(o.k, { value: l, children: e }));
                    }
                    if (
                        a.isReady !== r ||
                        a.input.displayReasonId !== t.displayReasonId ||
                        a.input.pageIdForFrom !== t.pageIdForFrom ||
                        a.input.pagePlacement !== t.pagePlacement ||
                        a.input.pageStyle !== t.pageStyle
                    ) {
                        let i = { ...a, input: t, isReady: r, scope: r ? n.createScreenScope(t, a.session) : null };
                        return (h(i), (0, s.jsx)(o.k, { value: i, children: e }));
                    }
                    return (0, s.jsx)(o.k, { value: a, children: e });
                },
            );
        },
        80643: (e, t, n) => {
            'use strict';
            n.d(t, { S: () => a });
            var s = n(53548),
                i = n(63582),
                o = n(245),
                r = n(22681),
                l = n(56374);
            let a = (0, i.n)({ event: 'LandingBlock.Navigated', kind: 'hook', requiredScopes: ['screen', 'block', 'object'] }, () => {
                let e = (0, o.N)(),
                    t = (0, r.w)(),
                    n = (0, s.useMemo)(() => (t ? e.createBlockReporter(t.snapshot) : null), [e, t]);
                return (0, l.c)((e) => {
                    t?.object &&
                        n &&
                        n.navigated({ ...e, from: e.from ?? t.snapshot.screen.pageId, viewUuid: (t.object.activeViewSession ?? t.object.viewSession).start() });
                });
            });
        },
        89916: (e, t, n) => {
            'use strict';
            n.d(t, { GX: () => o.G, X1: () => s.X, m5: () => i.m });
            var s = n(46606),
                i = n(91136),
                o = n(19840);
            n(17017);
        },
        91136: (e, t, n) => {
            'use strict';
            n.d(t, { m: () => i });
            class s extends Error {
                name = 'BaseException';
                message;
                code;
                data;
                stack;
                constructor(e, t = {}) {
                    let { code: n = 'E_INTERNAL', data: i = {}, ...o } = t,
                        r = e || 'Internal error';
                    (super(r, o), (this.message = r), (this.code = n), (this.data = i), (this.stack = Error(r).stack), Object.setPrototypeOf(this, s.prototype));
                }
            }
            class i extends s {
                name = 'HttpException';
                constructor(e = 'Http Client error', { code: t = 'E_HTTP_CLIENT', ...n } = {}) {
                    (super(e, { code: t, ...n }), Object.setPrototypeOf(this, i.prototype));
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
                                s = 3 === n.length;
                            return { code: n[0], script: s ? n[1] : null, region: s ? n[2] : n[1], quality: t[1] ? parseFloat(t[1].split('=')[1]) : 1 };
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
                (e.exports.pick = function (e, t, s) {
                    if (((s = s || {}), !e || !e.length || !t)) return null;
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
                            var r = t[o],
                                l = r.code.toLowerCase(),
                                a = r.region ? r.region.toLowerCase() : r.region,
                                c = r.script ? r.script.toLowerCase() : r.script,
                                u = 0;
                            u < i.length;
                            u++
                        ) {
                            var h = i[u].code.toLowerCase(),
                                d = i[u].script ? i[u].script.toLowerCase() : i[u].script,
                                p = i[u].region ? i[u].region.toLowerCase() : i[u].region;
                            if (l === h && (s.loose || !c || c === d) && (s.loose || !a || a === p)) return e[u];
                        }
                    return null;
                }));
        },
    },
]);
