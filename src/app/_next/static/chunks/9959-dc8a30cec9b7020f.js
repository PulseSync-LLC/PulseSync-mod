(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9959],
    {
        4653: (e, t, n) => {
            'use strict';
            n.d(t, { U: () => i });
            var r = n(95982),
                s = Object.defineProperty,
                o = (e, t, n) => (
                    ((e, t, n) => (t in e ? s(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n)))(e, 'symbol' != typeof t ? t + '' : t, n),
                    n
                );
            class i {
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
                    var s, o, i;
                    let a = e ? (null == (s = this.regionLangs) ? void 0 : s[e]) : void 0,
                        l = this.enableWideLanguageSelectWithBrandLangs ? this.brandLangs : null != (o = null == a ? void 0 : a.langs) ? o : this.brandLangs,
                        c = null != (i = null == a ? void 0 : a.defaultLang) ? i : this.brandDefaultLang;
                    return this.selectLang({ supportedLangs: l, defaultLang: c, urlLang: t, cookieLang: n, acceptLangs: r });
                }
                intersect(e, t) {
                    let n = new Set(t);
                    return e.filter((e) => n.has(e));
                }
                selectLang({ supportedLangs: e, defaultLang: t, urlLang: n, cookieLang: r, acceptLangs: s }) {
                    if ('string' == typeof n && e.includes(n)) return n;
                    let o = null != s ? s : [],
                        i = r ? [r, ...o] : o,
                        a = this.intersect(i, e)[0];
                    return void 0 !== a ? a : t;
                }
            }
        },
        7833: (e, t, n) => {
            'use strict';
            n.d(t, { B: () => c });
            var r = n(88800),
                s = n(53548),
                o = n(63582),
                i = n(99875),
                a = n(66109),
                l = n(245);
            let c = (0, o.B)(
                { kind: 'provider', requiredProps: ['objectType', 'objectId', 'objectPosX', 'objectPosY'], pendingProps: ['objectId'], scope: 'object' },
                ({ children: e, objectId: t, objectPosX: n, objectPosY: o, objectType: c }) => {
                    let u = (0, l.N)(),
                        d = (0, s.useContext)(i.p)?.loadedSession,
                        p = [c, t, n, o].join(':'),
                        [h, g] = (0, s.useState)(() => ({ client: u, identity: p, blockSession: d, viewSession: u.createBlockViewSession() }));
                    (h.client !== u || h.identity !== p || h.blockSession !== d) &&
                        g({ client: u, identity: p, blockSession: d, viewSession: u.createBlockViewSession() });
                    let f = (0, s.useMemo)(
                        () => ({ activeViewSession: null, scope: { objectId: t, objectPosX: n, objectPosY: o, objectType: c }, viewSession: h.viewSession }),
                        [t, n, o, c, h.viewSession],
                    );
                    return (0, r.jsx)(a.l, { value: f, children: e });
                },
            );
        },
        14567: (e, t) => {
            (e.exports = function (e, t, r, s) {
                return JSON.stringify(e, n(t, s), r);
            }).getSerialize = n;
            function n(e, t) {
                var n = [],
                    r = [];
                return (
                    null == t &&
                        (t = function (e, t) {
                            return n[0] === t ? '[Circular ~]' : '[Circular ~.' + r.slice(0, n.indexOf(t)).join('.') + ']';
                        }),
                    function (s, o) {
                        if (n.length > 0) {
                            var i = n.indexOf(this);
                            (~i ? n.splice(i + 1) : n.push(this), ~i ? r.splice(i, 1 / 0, s) : r.push(s), ~n.indexOf(o) && (o = t.call(this, s, o)));
                        } else n.push(o);
                        return null == e ? o : e.call(this, s, o);
                    }
                );
            }
        },
        17017: (e, t, n) => {
            'use strict';
            var r;
            (n.d(t, { Z: () => r }),
                (function (e) {
                    ((e.METHOD_NOT_SUPPORTED = 'E_BEACON_METHOD_NOT_SUPPORTED'),
                        (e.NOT_AVAILABLE = 'E_BEACON_NOT_AVAILABLE'),
                        (e.QUEUE_FAILED = 'E_BEACON_QUEUE_FAILED'),
                        (e.NO_RESPONSE_DATA = 'E_BEACON_NO_RESPONSE_DATA'),
                        (e.RETRY_EXHAUSTED = 'E_BEACON_RETRY_EXHAUSTED'));
                })(r || (r = {})));
        },
        19840: (e, t, n) => {
            'use strict';
            (n.d(t, { G: () => s }), n(46606));
            var r = n(91136);
            class s extends r.m {
                name = 'HttpErrorException';
                statusCode;
                constructor(e, t) {
                    (super(e, { code: 'E_HTTP_CLIENT_NON_2XX_3XX_RESPONSE', cause: t.cause }),
                        (this.statusCode = t.statusCode),
                        Object.setPrototypeOf(this, s.prototype));
                }
            }
        },
        22681: (e, t, n) => {
            'use strict';
            n.d(t, { w: () => u });
            var r = n(53548),
                s = n(99875),
                o = n(36236),
                i = n(66109),
                a = n(53534),
                l = n(79045),
                c = n(7695);
            let u = () => {
                let e = (0, r.useContext)(a.k),
                    t = e?.isReady ? e.scope : null,
                    n = (0, r.useContext)(l.F) ?? c.Ve,
                    u = (0, r.useContext)(o.S),
                    d = (0, r.useContext)(s.p),
                    p = (0, r.useContext)(i.l),
                    h = (0, r.useMemo)(() => (t && d ? { block: d.scope, filter: u, object: p?.scope ?? null, screen: t, tab: n } : null), [d, u, p, t, n]);
                return (0, r.useMemo)(() => (d && h ? { block: d, object: p, snapshot: h } : null), [d, p, h]);
            };
        },
        23877: (e, t, n) => {
            'use strict';
            var r;
            (n.d(t, { Q: () => s, c: () => r }),
                (function (e) {
                    ((e[(e.ERROR = 10)] = 'ERROR'),
                        (e[(e.WARNING = 20)] = 'WARNING'),
                        (e[(e.INFO = 30)] = 'INFO'),
                        (e[(e.DEBUG = 40)] = 'DEBUG'),
                        (e[(e.TRACE = 50)] = 'TRACE'));
                })(r || (r = {})));
            let s = { [r.ERROR]: 'error', [r.WARNING]: 'warn', [r.INFO]: 'info', [r.DEBUG]: 'debug', [r.TRACE]: 'trace' };
        },
        33979: (e, t, n) => {
            'use strict';
            n.d(t, { g: () => l });
            var r = n(53548),
                s = n(63582),
                o = n(245),
                i = n(22681),
                a = n(56374);
            let l = (0, s.n)({ event: 'LandingBlock.Started', kind: 'hook', requiredScopes: ['screen', 'block', 'object'] }, () => {
                let e = (0, o.N)(),
                    t = (0, i.w)(),
                    n = (0, r.useMemo)(() => (t ? e.createBlockReporter(t.snapshot) : null), [e, t]);
                return (0, a.c)(() => {
                    n?.started();
                });
            });
        },
        37523: (e, t, n) => {
            'use strict';
            n.d(t, { F: () => u });
            var r = n(88800),
                s = n(53548),
                o = n(63582),
                i = n(53534),
                a = n(99875),
                l = n(245);
            let c = (e, t, n) => {
                    let r = e.createBlockViewSession(),
                        s = !1;
                    return { claimLoadedSession: () => (s ? null : ((s = !0), r)), client: e, identity: t, loadedSession: r, screenSession: n };
                },
                u = (0, o.B)(
                    { kind: 'provider', requiredProps: ['blockId', 'blockType', 'blockPosX', 'blockPosY', 'objectsCount'], scope: 'block' },
                    ({ blockId: e, blockIdForFrom: t, blockPosX: n, blockPosY: o, blockType: u, children: d, objectsCount: p }) => {
                        let h = (0, l.N)(),
                            g = (0, s.useContext)(i.k)?.session,
                            f = [e, u, n, o].join(':'),
                            [b, v] = (0, s.useState)(() => c(h, f, g));
                        (b.client !== h || b.identity !== f || b.screenSession !== g) && v(c(h, f, g));
                        let m = (0, s.useMemo)(
                            () => ({
                                claimLoadedSession: b.claimLoadedSession,
                                loadedSession: b.loadedSession,
                                scope: { blockId: e, blockIdForFrom: t, blockPosX: n, blockPosY: o, blockType: u, objectsCount: p },
                            }),
                            [e, t, n, o, u, p, b.claimLoadedSession, b.loadedSession],
                        );
                        return (0, r.jsx)(a.p, { value: m, children: d });
                    },
                );
        },
        42824: (e, t, n) => {
            'use strict';
            (n.d(t, { s: () => E }), n(4653));
            function r(e, t, n) {
                return ((t = i(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e);
            }
            function s(e, t) {
                return (
                    (function (e) {
                        if (Array.isArray(e)) return e;
                    })(e) ||
                    (function (e, t) {
                        var n = null == e ? null : ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                        if (null != n) {
                            var r,
                                s,
                                o,
                                i,
                                a = [],
                                l = !0,
                                c = !1;
                            try {
                                if (((o = (n = n.call(e)).next), 0 === t)) {
                                    if (Object(n) !== n) return;
                                    l = !1;
                                } else for (; !(l = (r = o.call(n)).done) && (a.push(r.value), a.length !== t); l = !0);
                            } catch (e) {
                                ((c = !0), (s = e));
                            } finally {
                                try {
                                    if (!l && null != n.return && ((i = n.return()), Object(i) !== i)) return;
                                } finally {
                                    if (c) throw s;
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
            function i(e) {
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
                    s = c(e, t, 'get');
                return ((n = e), (r = s).get ? r.get.call(n) : r.value);
            }
            function l(e, t, n) {
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
            function u(e, t, n) {
                if (!t.has(e)) throw TypeError('attempted to get private field on non-instance');
                return n;
            }
            function d(e, t) {
                if (t.has(e)) throw TypeError('Cannot initialize the same private elements twice on an object');
            }
            function p(e, t, n) {
                (d(e, t), t.set(e, n));
            }
            function h(e, t) {
                (d(e, t), t.add(e));
            }
            var g = [
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
                    var n = s(t, 2),
                        r = n[0],
                        o = n[1],
                        i = e.lastIndexOf(r);
                    ~i && e.splice(i, 1, o);
                });
            })(g);
            var f = new WeakMap(),
                b = new WeakMap(),
                v = new WeakSet(),
                m = new WeakSet();
            function w() {
                l(this, b, RegExp(a(this, f).join('|'), 'i'));
            }
            function y(e) {
                return a(this, f).indexOf(e.toLowerCase());
            }
            new ((function () {
                var e;
                function t(e) {
                    var n = this;
                    if (!(this instanceof t)) throw TypeError('Cannot call a class as a function');
                    return (
                        h(this, m),
                        h(this, v),
                        p(this, f, { writable: !0, value: void 0 }),
                        p(this, b, { writable: !0, value: void 0 }),
                        l(this, f, e || g.slice()),
                        u(this, v, w).call(this),
                        Object.defineProperties(
                            function (e) {
                                return n.test(e);
                            },
                            Object.entries(Object.getOwnPropertyDescriptors(t.prototype)).reduce(function (e, t) {
                                var o = s(t, 2),
                                    i = o[0],
                                    a = o[1];
                                return (
                                    'function' == typeof a.value && Object.assign(e, r({}, i, { value: n[i].bind(n) })),
                                    'function' == typeof a.get &&
                                        Object.assign(
                                            e,
                                            r({}, i, {
                                                get: function () {
                                                    return n[i];
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
                                return new RegExp(a(this, b));
                            },
                        },
                        {
                            key: 'test',
                            value: function (e) {
                                return !!e && a(this, b).test(e);
                            },
                        },
                        {
                            key: 'find',
                            value: function () {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '',
                                    t = e.match(a(this, b));
                                return t && t[0];
                            },
                        },
                        {
                            key: 'matches',
                            value: function () {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '';
                                return a(this, f).filter(function (t) {
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
                                    a(this, f),
                                    t
                                        .filter(function (t) {
                                            return -1 === u(e, m, y).call(e, t);
                                        })
                                        .map(function (e) {
                                            return e.toLowerCase();
                                        }),
                                ),
                                    u(this, v, w).call(this));
                            },
                        },
                        {
                            key: 'exclude',
                            value: function () {
                                for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], t = e.length; t--;) {
                                    var n = u(this, m, y).call(this, e[t]);
                                    n > -1 && a(this, f).splice(n, 1);
                                }
                                u(this, v, w).call(this);
                            },
                        },
                        {
                            key: 'spawn',
                            value: function (e) {
                                return new t(e || a(this, f));
                            },
                        },
                    ]),
                    (function (e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            ((r.enumerable = r.enumerable || !1), (r.configurable = !0), 'value' in r && (r.writable = !0), Object.defineProperty(e, i(r.key), r));
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
                s = n(74021);
            class o extends s.q {
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
                    let s = r.Q[e];
                    console[s](...this.formatMessage(e, t, n));
                }
                sendToErrorBooster(e, t, n) {
                    window.Ya.Rum.logError({ message: t, level: e, additional: { data: n ? this.obfuscateData({ ...this.additionalData, ...n }) : {} } });
                }
            }
        },
        46606: (e, t, n) => {
            'use strict';
            var r;
            (n.d(t, { X: () => r }),
                (function (e) {
                    ((e[(e.NOT_MODIFIED = 304)] = 'NOT_MODIFIED'),
                        (e[(e.NOT_FOUND = 404)] = 'NOT_FOUND'),
                        (e[(e.BAD_REQUEST = 400)] = 'BAD_REQUEST'),
                        (e[(e.REQUEST_TIMEOUT = 408)] = 'REQUEST_TIMEOUT'),
                        (e[(e.PRECONDITION_FAILED = 412)] = 'PRECONDITION_FAILED'),
                        (e[(e.TEAPOT = 418)] = 'TEAPOT'));
                })(r || (r = {})));
        },
        54721: (e, t, n) => {
            'use strict';
            n.d(t, { u: () => p });
            var r = n(53548),
                s = n(47149),
                o = n(63582),
                i = n(59791),
                a = n(7695),
                l = n(53534),
                c = n(89846),
                u = n(64543),
                d = n(56374);
            let p = (0, o.n)({ event: 'Screen.Opened/Closed', kind: 'hook', requiredScopes: ['screen'] }, () => {
                let e = (0, r.useContext)(i.I),
                    { hash: t } = (0, c.g)(),
                    { screen: n, tab: o } = (0, u.j)(),
                    p = (0, r.useContext)(l.k)?.session,
                    { current: h } = (0, r.useRef)(Symbol()),
                    g = !!n,
                    f = (r) => {
                        if (!e || !p || !n?.pageId || void 0 === t || !g) return !1;
                        let i = {
                            hash: t,
                            pageId: n.pageId,
                            pageStyle: n.pageStyle,
                            pagePlacement: n.pagePlacement,
                            mainObjectType: n.mainObjectType,
                            mainObjectId: n.mainObjectId,
                            skeletonId: n.skeletonId,
                            viewUuid: n.screenViewUuid,
                            ...(o ?? a.Ve),
                        };
                        return (r ? p.open(h, () => (0, s.Fn)(e, i)) : p.close(h, () => (0, s.PO)(e, i)), !0);
                    },
                    [b, v] = (0, r.useState)(() => ({ session: p, send: f, opened: !1 })),
                    m = b;
                (b.session !== p && v((m = { session: p, send: f, opened: !1 })),
                    (0, r.useInsertionEffect)(() => {
                        g && void 0 !== t && (m.send = f);
                    }, [m, t, g, f]));
                let w = (0, d.c)((e, t) => {
                    e.send(t) && (e.opened = t);
                });
                ((0, r.useEffect)(
                    () => (
                        w(m, !0),
                        () => {
                            (m.opened && w(m, !1), m.session?.release(h));
                        }
                    ),
                    [h, m, w],
                ),
                    (0, r.useEffect)(() => {
                        w(m, !0);
                    }, [m, t, g, w]));
            });
        },
        62414: (e, t, n) => {
            'use strict';
            n.d(t, { D: () => l });
            var r = n(53548),
                s = n(63582),
                o = n(245),
                i = n(22681),
                a = n(56374);
            let l = (0, s.n)({ event: 'LandingBlock.Showed/Hidden', kind: 'hook', requiredScopes: ['screen', 'block', 'object'] }, (e = {}) => {
                let { createObserver: t, delayMs: n = 1e3, enabled: s = !0, onVisibilityChange: l, threshold: c = 0.8 } = e,
                    u = (0, o.N)(),
                    d = (0, i.w)(),
                    p = d?.object,
                    h = d?.block.claimLoadedSession,
                    g = (0, r.useMemo)(() => (d ? u.createBlockReporter(d.snapshot) : null), [u, d]),
                    f = (0, r.useRef)(t),
                    b = (0, r.useRef)(l),
                    [v, m] = (0, r.useState)(null),
                    w = (0, a.c)((e) => m(e));
                ((f.current = t), (b.current = l));
                let y = !!t;
                return (
                    (0, r.useEffect)(() => {
                        if (!s || !v || !p || 'string' != typeof p.scope.objectId || !h || !g || (!y && !v.ownerDocument.defaultView?.IntersectionObserver)) return;
                        let e = !1,
                            t = null,
                            r = null,
                            o = () => {
                                r && (clearTimeout(r), (r = null));
                                let e = t?.hide();
                                (p.activeViewSession === t && (p.activeViewSession = null), (t = null), e && (g.hidden({ viewUuid: e }), b.current?.(!1)));
                            },
                            i = (
                                f.current ??
                                ((e, t, n) => {
                                    let r = n.ownerDocument.defaultView?.IntersectionObserver;
                                    if (!r) throw Error('IntersectionObserver is not available');
                                    return new r(e, t);
                                })
                            )(
                                (s) => {
                                    e ||
                                        s.forEach((e) => {
                                            if (!(e.isIntersecting && e.intersectionRatio >= c)) return void o();
                                            r ||
                                                t?.isVisible ||
                                                (r = setTimeout(() => {
                                                    ((r = null), (t ??= h() ?? p.viewSession), (p.activeViewSession = t));
                                                    let e = t.show();
                                                    e && (g.showed({ viewUuid: e }), b.current?.(!0));
                                                }, n));
                                        });
                                },
                                { threshold: c },
                                v,
                            );
                        return (
                            i.observe(v),
                            () => {
                                ((e = !0), o(), i.unobserve(v), i.disconnect());
                            }
                        );
                    }, [v, h, p, n, s, y, c, g]),
                    w
                );
            });
        },
        70621: (e, t, n) => {
            'use strict';
            n.d(t, { D: () => l });
            var r = n(53548),
                s = n(63582),
                o = n(245),
                i = n(22681),
                a = n(56374);
            let l = (0, s.n)({ event: 'LandingBlock.ActionPerformed', kind: 'hook', requiredScopes: ['screen', 'block', 'object'] }, () => {
                let e = (0, o.N)(),
                    t = (0, i.w)(),
                    n = (0, r.useMemo)(() => (t ? e.createBlockReporter(t.snapshot) : null), [e, t]);
                return (0, a.c)((e) => {
                    t?.object && n && n.actionPerformed({ ...e, viewUuid: (t.object.activeViewSession ?? t.object.viewSession).start() });
                });
            });
        },
        74021: (e, t, n) => {
            'use strict';
            n.d(t, { q: () => l });
            var r = n(14567),
                s = n(243),
                o = n(62151),
                i = n(33396);
            let a = () => 'SECRET';
            class l {
                maxLogLevel;
                secureFields;
                additionalData;
                constructor({ additionalData: e, maxLogLevel: t, secureFields: n }) {
                    ((this.maxLogLevel = t), (this.secureFields = n), (this.additionalData = e));
                }
                formatMessage(e, t, n = {}, s) {
                    let o,
                        a = String(t instanceof Error && t.stack ? t.stack : t),
                        l = (0, i.A)({ ...this.additionalData, ...n });
                    return (Object.keys(l).length && (o = this.obfuscateData(l)), s) ? `${a} ${r(o)}` : [a, o];
                }
                obfuscateData(e) {
                    if (this.secureFields?.length) for (let t of this.secureFields) void 0 !== (0, s.A)(e, t) && (0, o.A)(e, t, a());
                    return e;
                }
            }
        },
        76903: (e, t, n) => {
            'use strict';
            n.d(t, { a: () => d });
            var r = n(88800),
                s = n(53548),
                o = n(53534),
                i = n(63582),
                a = n(245);
            let l = new WeakMap();
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
                        l.get(t) ??
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
                    (l.set(t, n), (this.queue = n));
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
            let d = (0, i.B)(
                { kind: 'provider', requiredProps: ['pageId'], pendingProps: ['mainObjectType', 'mainObjectId'], scope: 'screen' },
                ({ children: e, ...t }) => {
                    let n = (0, a.N)(),
                        i = ((e) =>
                            (!Object.hasOwn(e, 'mainObjectType') || void 0 !== e.mainObjectType) &&
                            ('string' == typeof e.mainObjectId ||
                                (!Object.hasOwn(e, 'mainObjectId') && (!Object.hasOwn(e, 'mainObjectType') || e.mainObjectType === u.DomainObjectType.NonApplicable))))(
                            t,
                        ),
                        [l, d] = (0, s.useState)(() => {
                            let e = new c(n.createScreenSession().screenViewUuid, n);
                            return { client: n, input: t, isReady: i, scope: i ? n.createScreenScope(t, e) : null, session: e };
                        });
                    if (
                        l.client !== n ||
                        l.input.pageId !== t.pageId ||
                        l.input.skeletonId !== t.skeletonId ||
                        l.input.mainObjectType !== t.mainObjectType ||
                        l.input.mainObjectId !== t.mainObjectId
                    ) {
                        let s = new c(n.createScreenSession().screenViewUuid, n),
                            a = { client: n, input: t, isReady: i, scope: i ? n.createScreenScope(t, s) : null, session: s };
                        return (d(a), (0, r.jsx)(o.k, { value: a, children: e }));
                    }
                    if (
                        l.isReady !== i ||
                        l.input.displayReasonId !== t.displayReasonId ||
                        l.input.pageIdForFrom !== t.pageIdForFrom ||
                        l.input.pagePlacement !== t.pagePlacement ||
                        l.input.pageStyle !== t.pageStyle
                    ) {
                        let s = { ...l, input: t, isReady: i, scope: i ? n.createScreenScope(t, l.session) : null };
                        return (d(s), (0, r.jsx)(o.k, { value: s, children: e }));
                    }
                    return (0, r.jsx)(o.k, { value: l, children: e });
                },
            );
        },
        80643: (e, t, n) => {
            'use strict';
            n.d(t, { S: () => l });
            var r = n(53548),
                s = n(63582),
                o = n(245),
                i = n(22681),
                a = n(56374);
            let l = (0, s.n)({ event: 'LandingBlock.Navigated', kind: 'hook', requiredScopes: ['screen', 'block', 'object'] }, () => {
                let e = (0, o.N)(),
                    t = (0, i.w)(),
                    n = (0, r.useMemo)(() => (t ? e.createBlockReporter(t.snapshot) : null), [e, t]);
                return (0, a.c)((e) => {
                    t?.object &&
                        n &&
                        n.navigated({ ...e, from: e.from ?? t.snapshot.screen.pageId, viewUuid: (t.object.activeViewSession ?? t.object.viewSession).start() });
                });
            });
        },
        89916: (e, t, n) => {
            'use strict';
            n.d(t, { GX: () => o.G, X1: () => r.X, m5: () => s.m });
            var r = n(46606),
                s = n(91136),
                o = n(19840);
            n(17017);
        },
        91136: (e, t, n) => {
            'use strict';
            n.d(t, { m: () => s });
            class r extends Error {
                name = 'BaseException';
                message;
                code;
                data;
                stack;
                constructor(e, t = {}) {
                    let { code: n = 'E_INTERNAL', data: s = {}, ...o } = t,
                        i = e || 'Internal error';
                    (super(i, o), (this.message = i), (this.code = n), (this.data = s), (this.stack = Error(i).stack), Object.setPrototypeOf(this, r.prototype));
                }
            }
            class s extends r {
                name = 'HttpException';
                constructor(e = 'Http Client error', { code: t = 'E_HTTP_CLIENT', ...n } = {}) {
                    (super(e, { code: t, ...n }), Object.setPrototypeOf(this, s.prototype));
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
                        var s = e.map(function (e) {
                                var t = e.split('-'),
                                    n = 3 === t.length;
                                return { code: t[0], script: n ? t[1] : null, region: n ? t[2] : t[1] };
                            }),
                            o = 0;
                        o < t.length;
                        o++
                    )
                        for (
                            var i = t[o],
                                a = i.code.toLowerCase(),
                                l = i.region ? i.region.toLowerCase() : i.region,
                                c = i.script ? i.script.toLowerCase() : i.script,
                                u = 0;
                            u < s.length;
                            u++
                        ) {
                            var d = s[u].code.toLowerCase(),
                                p = s[u].script ? s[u].script.toLowerCase() : s[u].script,
                                h = s[u].region ? s[u].region.toLowerCase() : s[u].region;
                            if (a === d && (r.loose || !c || c === p) && (r.loose || !l || l === h)) return e[u];
                        }
                    return null;
                }));
        },
    },
]);
