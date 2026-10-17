(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1943, 2027, 3367, 4324, 7181],
    {
        22413: (e, t, n) => {
            'use strict';
            n.d(t, { Jt: () => i, TF: () => c, hZ: () => o });
            var r = function () {
                return (r =
                    Object.assign ||
                    function (e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var a in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                        return e;
                    }).apply(this, arguments);
            };
            function a(e, t) {
                if (!t) return '';
                var n = '; ' + e;
                return !0 === t ? n : n + '=' + t;
            }
            function i(e) {
                return (function (e) {
                    for (var t = {}, n = e ? e.split('; ') : [], r = 0; r < n.length; r++) {
                        var a = n[r].split('='),
                            i = a.slice(1).join('=');
                        '"' === i[0] && (i = i.slice(1, -1));
                        try {
                            t[decodeURIComponent(a[0])] = i.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
                        } catch (e) {}
                    }
                    return t;
                })(document.cookie)[e];
            }
            function o(e, t, n) {
                var i;
                document.cookie =
                    ((i = r({ path: '/' }, n)),
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
                                a('Expires', e.expires ? e.expires.toUTCString() : '') +
                                a('Domain', e.domain) +
                                a('Path', e.path) +
                                a('Secure', e.secure) +
                                a('SameSite', e.sameSite)
                            );
                        })(i));
            }
            function c(e, t) {
                o(e, '', r(r({}, t), { expires: -1 }));
            }
        },
        36808: (e) => {
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
                        var a = e.map(function (e) {
                                var t = e.split('-'),
                                    n = 3 === t.length;
                                return { code: t[0], script: n ? t[1] : null, region: n ? t[2] : t[1] };
                            }),
                            i = 0;
                        i < t.length;
                        i++
                    )
                        for (
                            var o = t[i],
                                c = o.code.toLowerCase(),
                                l = o.region ? o.region.toLowerCase() : o.region,
                                s = o.script ? o.script.toLowerCase() : o.script,
                                u = 0;
                            u < a.length;
                            u++
                        ) {
                            var p = a[u].code.toLowerCase(),
                                f = a[u].script ? a[u].script.toLowerCase() : a[u].script,
                                d = a[u].region ? a[u].region.toLowerCase() : a[u].region;
                            if (c === p && (r.loose || !s || s === f) && (r.loose || !l || l === d)) return e[u];
                        }
                    return null;
                }));
        },
        56107: (e, t, n) => {
            'use strict';
            n.d(t, { U: () => o });
            var r = n(36808),
                a = Object.defineProperty,
                i = (e, t, n) => (
                    ((e, t, n) => (t in e ? a(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n)))(e, 'symbol' != typeof t ? t + '' : t, n),
                    n
                );
            class o {
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
                    return r.parse(e).map(({ code: e }) => e);
                }
                getLang({ regionIsoName: e, urlLang: t, cookieLang: n, acceptLangs: r }) {
                    var a, i, o;
                    let c = e ? (null == (a = this.regionLangs) ? void 0 : a[e]) : void 0,
                        l = this.enableWideLanguageSelectWithBrandLangs ? this.brandLangs : null != (i = null == c ? void 0 : c.langs) ? i : this.brandLangs,
                        s = null != (o = null == c ? void 0 : c.defaultLang) ? o : this.brandDefaultLang;
                    return this.selectLang({ supportedLangs: l, defaultLang: s, urlLang: t, cookieLang: n, acceptLangs: r });
                }
                intersect(e, t) {
                    let n = new Set(t);
                    return e.filter((e) => n.has(e));
                }
                selectLang({ supportedLangs: e, defaultLang: t, urlLang: n, cookieLang: r, acceptLangs: a }) {
                    if ('string' == typeof n && e.includes(n)) return n;
                    let i = null != a ? a : [],
                        o = r ? [r, ...i] : i,
                        c = this.intersect(o, e)[0];
                    return void 0 !== c ? c : t;
                }
            }
        },
        61943: (e, t, n) => {
            'use strict';
            (n.d(t, { s: () => k }), n(56107));
            function r(e, t, n) {
                return ((t = o(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e);
            }
            function a(e, t) {
                return (
                    (function (e) {
                        if (Array.isArray(e)) return e;
                    })(e) ||
                    (function (e, t) {
                        var n = null == e ? null : ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                        if (null != n) {
                            var r,
                                a,
                                i,
                                o,
                                c = [],
                                l = !0,
                                s = !1;
                            try {
                                if (((i = (n = n.call(e)).next), 0 === t)) {
                                    if (Object(n) !== n) return;
                                    l = !1;
                                } else for (; !(l = (r = i.call(n)).done) && (c.push(r.value), c.length !== t); l = !0);
                            } catch (e) {
                                ((s = !0), (a = e));
                            } finally {
                                try {
                                    if (!l && null != n.return && ((o = n.return()), Object(o) !== o)) return;
                                } finally {
                                    if (s) throw a;
                                }
                            }
                            return c;
                        }
                    })(e, t) ||
                    (function (e, t) {
                        if (e) {
                            if ('string' == typeof e) return i(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            if (('Object' === n && e.constructor && (n = e.constructor.name), 'Map' === n || 'Set' === n)) return Array.from(e);
                            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return i(e, t);
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
                for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                return r;
            }
            function o(e) {
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
            function c(e, t) {
                var n,
                    r,
                    a = s(e, t, 'get');
                return ((n = e), (r = a).get ? r.get.call(n) : r.value);
            }
            function l(e, t, n) {
                var r = s(e, t, 'set');
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
            function s(e, t, n) {
                if (!t.has(e)) throw TypeError('attempted to ' + n + ' private field on non-instance');
                return t.get(e);
            }
            function u(e, t, n) {
                if (!t.has(e)) throw TypeError('attempted to get private field on non-instance');
                return n;
            }
            function p(e, t) {
                if (t.has(e)) throw TypeError('Cannot initialize the same private elements twice on an object');
            }
            function f(e, t, n) {
                (p(e, t), t.set(e, n));
            }
            function d(e, t) {
                (p(e, t), t.add(e));
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
                    var n = a(t, 2),
                        r = n[0],
                        i = n[1],
                        o = e.lastIndexOf(r);
                    ~o && e.splice(o, 1, i);
                });
            })(g);
            var h = new WeakMap(),
                m = new WeakMap(),
                b = new WeakSet(),
                v = new WeakSet();
            function y() {
                l(this, m, RegExp(c(this, h).join('|'), 'i'));
            }
            function w(e) {
                return c(this, h).indexOf(e.toLowerCase());
            }
            new ((function () {
                var e;
                function t(e) {
                    var n = this;
                    if (!(this instanceof t)) throw TypeError('Cannot call a class as a function');
                    return (
                        d(this, v),
                        d(this, b),
                        f(this, h, { writable: !0, value: void 0 }),
                        f(this, m, { writable: !0, value: void 0 }),
                        l(this, h, e || g.slice()),
                        u(this, b, y).call(this),
                        Object.defineProperties(
                            function (e) {
                                return n.test(e);
                            },
                            Object.entries(Object.getOwnPropertyDescriptors(t.prototype)).reduce(function (e, t) {
                                var i = a(t, 2),
                                    o = i[0],
                                    c = i[1];
                                return (
                                    'function' == typeof c.value && Object.assign(e, r({}, o, { value: n[o].bind(n) })),
                                    'function' == typeof c.get &&
                                        Object.assign(
                                            e,
                                            r({}, o, {
                                                get: function () {
                                                    return n[o];
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
                                return new RegExp(c(this, m));
                            },
                        },
                        {
                            key: 'test',
                            value: function (e) {
                                return !!e && c(this, m).test(e);
                            },
                        },
                        {
                            key: 'find',
                            value: function () {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '',
                                    t = e.match(c(this, m));
                                return t && t[0];
                            },
                        },
                        {
                            key: 'matches',
                            value: function () {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '';
                                return c(this, h).filter(function (t) {
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
                                    c(this, h),
                                    t
                                        .filter(function (t) {
                                            return -1 === u(e, v, w).call(e, t);
                                        })
                                        .map(function (e) {
                                            return e.toLowerCase();
                                        }),
                                ),
                                    u(this, b, y).call(this));
                            },
                        },
                        {
                            key: 'exclude',
                            value: function () {
                                for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], t = e.length; t--;) {
                                    var n = u(this, v, w).call(this, e[t]);
                                    n > -1 && c(this, h).splice(n, 1);
                                }
                                u(this, b, y).call(this);
                            },
                        },
                        {
                            key: 'spawn',
                            value: function (e) {
                                return new t(e || c(this, h));
                            },
                        },
                    ]),
                    (function (e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            ((r.enumerable = r.enumerable || !1), (r.configurable = !0), 'value' in r && (r.writable = !0), Object.defineProperty(e, o(r.key), r));
                        }
                    })(t.prototype, e),
                    Object.defineProperty(t, 'prototype', { writable: !1 }),
                    t
                );
            })())();
            let k = 'funtech-lang';
        },
        87277: (e, t, n) => {
            'use strict';
            ((t.w5 = function (e, t) {
                let {
                        skeletonId: n = '',
                        mainObjectType: i = a.DomainObjectType.NonApplicable,
                        mainObjectId: o = '',
                        tabId: c = '',
                        tabPos: l = 0,
                        isTabSelectedByDefault: s = !1,
                        viewUuid: u = '',
                    } = t,
                    p = (0, r.makeMetaParams)(1),
                    f = { ...t, skeletonId: n, mainObjectType: i, mainObjectId: o, tabId: c, tabPos: l, isTabSelectedByDefault: s, viewUuid: u, _meta: p };
                e.trackEvent('Screen.Opened', f);
            }),
                (t.Fn = function (e, t) {
                    let {
                            pageStyle: n = a.PageStyles.Fullscreen,
                            pagePlacement: i = a.PagePlacements.Fullscreen,
                            skeletonId: o = '',
                            mainObjectType: c = a.DomainObjectType.NonApplicable,
                            mainObjectId: l = '',
                            tabId: s = '',
                            tabPos: u = 0,
                            isTabSelectedByDefault: p = !1,
                            viewUuid: f = '',
                        } = t,
                        d = (0, r.makeMetaParams)(3),
                        g = {
                            ...t,
                            pageStyle: n,
                            pagePlacement: i,
                            skeletonId: o,
                            mainObjectType: c,
                            mainObjectId: l,
                            tabId: s,
                            tabPos: u,
                            isTabSelectedByDefault: p,
                            viewUuid: f,
                            _meta: d,
                        };
                    e.trackEvent('Screen.Opened', g);
                }),
                (t.XB = function (e, t) {
                    let {
                            skeletonId: n = '',
                            mainObjectType: i = a.DomainObjectType.NonApplicable,
                            mainObjectId: o = '',
                            tabId: c = '',
                            tabPos: l = 0,
                            isTabSelectedByDefault: s = !1,
                        } = t,
                        u = (0, r.makeMetaParams)(1),
                        p = { ...t, skeletonId: n, mainObjectType: i, mainObjectId: o, tabId: c, tabPos: l, isTabSelectedByDefault: s, _meta: u };
                    e.trackEvent('Screen.Closed', p);
                }),
                (t.Ig = function (e, t) {
                    let {
                            pageStyle: n = a.PageStyles.Fullscreen,
                            pagePlacement: i = a.PagePlacements.Fullscreen,
                            skeletonId: o = '',
                            mainObjectType: c = a.DomainObjectType.NonApplicable,
                            mainObjectId: l = '',
                            tabId: s = '',
                            tabPos: u = 0,
                            isTabSelectedByDefault: p = !1,
                        } = t,
                        f = (0, r.makeMetaParams)(3),
                        d = {
                            ...t,
                            pageStyle: n,
                            pagePlacement: i,
                            skeletonId: o,
                            mainObjectType: c,
                            mainObjectId: l,
                            tabId: s,
                            tabPos: u,
                            isTabSelectedByDefault: p,
                            _meta: f,
                        };
                    e.trackEvent('Screen.Closed', d);
                }),
                (t.PO = function (e, t) {
                    let {
                            pageStyle: n = a.PageStyles.Fullscreen,
                            pagePlacement: i = a.PagePlacements.Fullscreen,
                            skeletonId: o = '',
                            mainObjectType: c = a.DomainObjectType.NonApplicable,
                            mainObjectId: l = '',
                            tabId: s = '',
                            tabPos: u = 0,
                            isTabSelectedByDefault: p = !1,
                            viewUuid: f = '',
                        } = t,
                        d = (0, r.makeMetaParams)(4),
                        g = {
                            ...t,
                            pageStyle: n,
                            pagePlacement: i,
                            skeletonId: o,
                            mainObjectType: c,
                            mainObjectId: l,
                            tabId: s,
                            tabPos: u,
                            isTabSelectedByDefault: p,
                            viewUuid: f,
                            _meta: d,
                        };
                    e.trackEvent('Screen.Closed', g);
                }),
                (t.e7 = function (e, t) {
                    let {
                            skeletonId: n = '',
                            mainObjectType: i = a.DomainObjectType.NonApplicable,
                            mainObjectId: o = '',
                            tabId: c = '',
                            tabPos: l = 0,
                            isTabSelectedByDefault: s = !1,
                        } = t,
                        u = (0, r.makeMetaParams)(1),
                        p = { ...t, skeletonId: n, mainObjectType: i, mainObjectId: o, tabId: c, tabPos: l, isTabSelectedByDefault: s, _meta: u };
                    e.trackEvent('Screen.Started', p);
                }),
                (t.Mu = function (e, t) {
                    let {
                            skeletonId: n = '',
                            mainObjectType: i = a.DomainObjectType.NonApplicable,
                            mainObjectId: o = '',
                            tabId: c = '',
                            tabPos: l = 0,
                            isTabSelectedByDefault: s = !1,
                        } = t,
                        u = (0, r.makeMetaParams)(1),
                        p = { ...t, skeletonId: n, mainObjectType: i, mainObjectId: o, tabId: c, tabPos: l, isTabSelectedByDefault: s, _meta: u };
                    e.trackEvent('Screen.Navigated', p);
                }),
                (t.ID = function (e, t) {
                    let {
                            pageStyle: n = a.PageStyles.Fullscreen,
                            pagePlacement: i = a.PagePlacements.Fullscreen,
                            skeletonId: o = '',
                            mainObjectType: c = a.DomainObjectType.NonApplicable,
                            mainObjectId: l = '',
                            tabId: s = '',
                            tabPos: u = 0,
                            isTabSelectedByDefault: p = !1,
                            deepLink: f = '',
                        } = t,
                        d = (0, r.makeMetaParams)(4),
                        g = {
                            ...t,
                            pageStyle: n,
                            pagePlacement: i,
                            skeletonId: o,
                            mainObjectType: c,
                            mainObjectId: l,
                            tabId: s,
                            tabPos: u,
                            isTabSelectedByDefault: p,
                            deepLink: f,
                            _meta: d,
                        };
                    e.trackEvent('Screen.Navigated', g);
                }),
                (t.bv = function (e, t) {
                    let {
                            skeletonId: n = '',
                            mainObjectType: i = a.DomainObjectType.NonApplicable,
                            mainObjectId: o = '',
                            tabId: c = '',
                            tabPos: l = 0,
                            isTabSelectedByDefault: s = !1,
                        } = t,
                        u = (0, r.makeMetaParams)(1),
                        p = { ...t, skeletonId: n, mainObjectType: i, mainObjectId: o, tabId: c, tabPos: l, isTabSelectedByDefault: s, _meta: u };
                    e.trackEvent('Screen.ActionPerformed', p);
                }),
                (t.z5 = function (e, t) {
                    let {
                            pageStyle: n = a.PageStyles.Fullscreen,
                            pagePlacement: i = a.PagePlacements.Fullscreen,
                            skeletonId: o = '',
                            mainObjectType: c = a.DomainObjectType.NonApplicable,
                            mainObjectId: l = '',
                        } = t,
                        s = (0, r.makeMetaParams)(1),
                        u = { ...t, pageStyle: n, pagePlacement: i, skeletonId: o, mainObjectType: c, mainObjectId: l, _meta: s };
                    e.trackEvent('Screen.ErrorRaised', u);
                }));
            let r = n(96195),
                a = n(44031);
        },
    },
]);
