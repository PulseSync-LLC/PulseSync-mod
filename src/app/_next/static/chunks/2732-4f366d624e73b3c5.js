(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2732],
    {
        32732: (e, t, r) => {
            'use strict';
            r.d(t, { mZ: () => eT, pp: () => eu });
            class n {
                transport;
                constructor(e) {
                    (this.transport = e), (this.transport = e);
                }
                trackEvent(e, t) {
                    this.transport.send({ event: e, parameters: t });
                }
            }
            var o,
                i,
                s,
                a,
                c,
                u,
                l = r(27576);
            class f {
                schemeName = 'plus_payment_analytic';
                puid = 'NO_VALUE';
                constructor(e) {
                    e && (this.puid = e);
                }
                getGlobalParams() {
                    return { scheme_name: this.schemeName, event_id: (0, l.A)(), timestamp: Date.now(), puid: this.puid };
                }
                updatePuid(e) {
                    this.puid = e || 'NO_VALUE';
                }
            }
            function d(e, t = {}) {
                return { event: { version: e }, interfaces: t };
            }
            class p {
                trackEvent;
                constructor(e, t, r) {
                    let { trackEvent: n } = {
                        trackEvent: (n, o) => {
                            let i = { ...o, ...t.getGlobalParams(), ...r.getPlatformParams() };
                            e.trackEvent(n, i);
                        },
                    };
                    this.trackEvent = n;
                }
            }
            class h {
                yandexUid;
                userAgent;
                screenWidth;
                screenHeight;
                integration = 'Widget';
                constructor(e, t, r, n) {
                    (this.yandexUid = e),
                        (this.userAgent = t),
                        (this.screenWidth = r),
                        (this.screenHeight = n),
                        (this.userAgent = t),
                        (this.yandexUid = e),
                        (this.screenHeight = n),
                        (this.screenWidth = r);
                }
                getPlatformParams() {
                    return {
                        screen_height: this.screenHeight || 'NO_VALUE',
                        screen_width: this.screenWidth || 'NO_VALUE',
                        integration: this.integration,
                        user_agent: this.userAgent || 'NO_VALUE',
                        yandex_uid: this.yandexUid || 'NO_VALUE',
                    };
                }
            }
            var y = 'undefined' != typeof document,
                b = 'undefined' != typeof window,
                m = 'undefined' != typeof navigator,
                g = 'undefined' != typeof screen;
            function O() {
                return b && window.location ? window.location.href : '';
            }
            function v(e, t) {
                return (e || '').slice(0, t);
            }
            function w() {
                return Math.floor(0x40000000 * Math.random());
            }
            function P(e, t, r) {
                (r || 0 === r) && e.push(t + ':' + (!0 === r ? '1' : r));
            }
            var j = /bot|crawl|http|lighthouse|scan|search|spider/i,
                E = r(78398),
                S = r.n(E);
            function T() {
                return 'undefined' != typeof document ? document.location.hostname : '';
            }
            function _(e) {
                let t = e.split('.');
                if (t.length < 2) throw Error(`AcqToolkit: Bad etld or hostname "${e}". Can not get TLD`);
                return t.slice(-1).toString();
            }
            function x(e) {
                let t = e.split('.');
                if (t.length < 2) throw Error(`AcqToolkit: Bad etld or hostname "${e}". Can not get SLD`);
                return t.slice(-2, -1).toString();
            }
            var D = 'pw-host',
                k = 'pm-host',
                A = 'pw-tools-debug',
                I = /_pw_tools_debug=([01]?)/;
            function R(e) {
                return '1' === e || 'true' === e;
            }
            function U(e, t, r) {
                return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e;
            }
            var B = class {
                setPMHost(e) {
                    this.enabled && this.storage.setItem(k, e);
                }
                setPWHost(e) {
                    this.enabled && this.storage.setItem(D, e);
                }
                isEnabled() {
                    return this.enabled;
                }
                getPMHost() {
                    return this.enabled ? this.storage.getItem(k) : null;
                }
                getPWHost() {
                    return this.enabled ? this.storage.getItem(D) : null;
                }
                constructor(e, t) {
                    if (
                        (U(this, 'storage', void 0),
                        U(this, 'enabled', void 0),
                        (this.storage = t),
                        (this.enabled = !1),
                        (this.enabled = (function (e, t) {
                            let r,
                                n = (r = e.match(I)) && r[1] ? r[1] : null,
                                o = R(n);
                            return n ? (t.setItem(A, `${o}`), o) : R(t.getItem(A));
                        })(e, t)),
                        (this.storage = t),
                        !this.enabled)
                    )
                        return;
                    window.__pwToolsDebug = this;
                }
            };
            function L(e) {
                return 'production' === e ? '' : '.tst';
            }
            function N(e, t, r) {
                return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e;
            }
            var q = class {
                    getUrl(e) {
                        let t = e;
                        if (!e) {
                            let e = L(this.environment),
                                r = (function (e) {
                                    switch (e) {
                                        case 'web':
                                            return 'payment-widget';
                                        case 'smarttv':
                                            return 'payment-widget-smarttv';
                                        default:
                                            throw Error(`Unknown platform ${e}. Cant find host for this platform`);
                                    }
                                })(this.platform);
                            t = `${r}.plus${e}.${this.eTLD}`;
                        }
                        return `https://${t}/payment-manager.js`;
                    }
                    load({ isForceLoad: e } = {}) {
                        return (
                            (!this.scriptLoadPromise || e || this.isError) &&
                                (this.scriptLoadPromise = this.appendScript(this.url)
                                    .then(() => ((this.isError = !1), this))
                                    .catch((e) => {
                                        throw ((this.isError = !0), e);
                                    })),
                            this.scriptLoadPromise
                        );
                    }
                    send(e) {
                        this.manager.push(e);
                    }
                    constructor(e, t, r, n, o, i, s) {
                        N(this, 'environment', void 0),
                            N(this, 'platform', void 0),
                            N(this, 'eTLD', void 0),
                            N(this, 'appendScript', void 0),
                            N(this, 'manager', void 0),
                            N(this, 'url', void 0),
                            N(this, 'isError', void 0),
                            N(this, 'scriptLoadPromise', void 0),
                            (this.environment = e),
                            (this.platform = t),
                            (this.eTLD = r),
                            (this.appendScript = i),
                            (this.manager = s),
                            (this.url = ''),
                            (this.isError = !1),
                            (this.scriptLoadPromise = null),
                            (this.environment = e),
                            (this.platform = t),
                            (this.eTLD = r),
                            (this.manager = s),
                            (this.appendScript = i),
                            (this.url = this.getUrl(o.getPMHost())),
                            n && this.load();
                    }
                },
                M = { subscription: 'plusPaymentSession', gift: 'plusGiftPaymentSession' };
            function C(e, t, r) {
                var n, o, i, s;
                (n = e.replace(/\D/g, '')),
                    (o = M[r]),
                    o ? ((i = O()), (s = 'goal://' + (b && window.location ? window.location.hostname : '') + '/' + o)) : ((i = y ? document.referrer : ''), (s = O())),
                    (function (e) {
                        var t,
                            r,
                            n,
                            o,
                            i = e.browserInfo,
                            s = e.counterId,
                            a = e.pageParams,
                            c = e.params,
                            u = {
                                'browser-info':
                                    ((t = a.title),
                                    (r = []),
                                    i &&
                                        Object.keys(i).forEach(function (e) {
                                            return P(r, e, i[e]);
                                        }),
                                    P(r, 'rn', w()),
                                    P(r, 'c', !!m && navigator.cookieEnabled),
                                    P(r, 's', g ? [screen.width, screen.height, screen.colorDepth].join('x') : ''),
                                    P(r, 'w', b ? [window.innerWidth, window.innerHeight].join('x') : ''),
                                    P(r, 'en', y && 'string' == typeof document.charset ? document.charset.toLowerCase() : ''),
                                    P(r, 'et', (n = Math.round(Date.now() / 1e3))),
                                    P(r, 'st', n),
                                    P(r, 't', v(t, 512)),
                                    r.join(':')),
                                rn: w(),
                                ut: a.ut,
                            };
                        a.url && (u['page-url'] = v(a.url, 1024)),
                            a.referrer && (u['page-ref'] = v(a.referrer, 1024)),
                            c && (u['site-info'] = JSON.stringify(c)),
                            (o =
                                'https://mc.yandex.ru/watch/' +
                                s +
                                '?' +
                                Object.keys(u)
                                    .filter(function (e) {
                                        return u[e] || 0 === u[e];
                                    })
                                    .map(function (e) {
                                        return encodeURIComponent(e) + '=' + encodeURIComponent(u[e]);
                                    })
                                    .join('&')),
                            ('undefined' != typeof navigator && navigator.sendBeacon && navigator.sendBeacon(o, ' ')) ||
                                ('undefined' != typeof fetch
                                    ? fetch(o, { credentials: 'include' }).catch(function () {})
                                    : 'undefined' != typeof Image && (new Image().src = o));
                    })({ browserInfo: { ar: !0 }, counterId: n, pageParams: { referrer: i, url: s }, params: { plusPaymentSessionId: t } });
            }
            function F() {
                return 'undefined' == typeof navigator ? '' : navigator.userAgent;
            }
            function G(e, t, r) {
                return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e;
            }
            function $(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (n = n.concat(
                            Object.getOwnPropertySymbols(r).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(r, e).enumerable;
                            }),
                        )),
                        n.forEach(function (t) {
                            G(e, t, r[t]);
                        });
                }
                return e;
            }
            function H(e, t) {
                return (
                    (t = null != t ? t : {}),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                        : (function (e, t) {
                              var r = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var n = Object.getOwnPropertySymbols(e);
                                  r.push.apply(r, n);
                              }
                              return r;
                          })(Object(t)).forEach(function (r) {
                              Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
                          }),
                    e
                );
            }
            var W = class {
                    frontSessionStart(e, t) {
                        this.frontSessionStartImpl(e, t, 'subscription');
                    }
                    frontGiftSessionStart(e, t) {
                        this.frontSessionStartImpl(e, t, 'gift');
                    }
                    frontSessionStartImpl(e, t, r) {
                        let n = e.session_id;
                        this.bindPlusPaymentSession(t, n, r),
                            (function (e, t) {
                                let r = d(1),
                                    n = { ...t, _meta: r };
                                e.trackEvent('PlusPayment.FrontSessionStart', n);
                            })(
                                this.logger,
                                H($({}, e), {
                                    external_id: this.externalId || 'NO_VALUE',
                                    custom_parameters: H($({}, this.customParameters), { metrikaCounterId: t }),
                                    test_ids: 'NO_VALUE',
                                    triggered_test_ids: 'NO_VALUE',
                                }),
                            );
                    }
                    loadOffersResulted(e) {
                        var t = this.logger;
                        let r = d(1),
                            n = { ...e, _meta: r };
                        t.trackEvent('PlusPayment.LoadOffers.Resulted', n);
                    }
                    offerShow(e) {
                        !(function (e, t) {
                            let r = d(1),
                                n = { ...t, _meta: r };
                            e.trackEvent('PlusPayment.Offer.Show', n);
                        })(this.logger, H($({}, e), { custom_parameters: this.customParameters }));
                    }
                    offerClick(e) {
                        !(function (e, t) {
                            let r = d(1),
                                n = { ...t, _meta: r };
                            e.trackEvent('PlusPayment.Offer.Click', n);
                        })(this.logger, H($({}, e), { custom_parameters: this.customParameters }));
                    }
                    updateCustomParameters(e) {
                        this.customParameters = $({}, this.customParameters, e);
                    }
                    generateGiftSessionId() {
                        return Math.floor(9e9 * Math.random());
                    }
                    constructor(e, t, r, n) {
                        G(this, 'logger', void 0),
                            G(this, 'bindPlusPaymentSession', void 0),
                            G(this, 'customParameters', void 0),
                            G(this, 'externalId', void 0),
                            (this.logger = e),
                            (this.bindPlusPaymentSession = t),
                            (this.externalId = null);
                        let i = (function (e) {
                            return (
                                !!e &&
                                (function () {
                                    if (o instanceof RegExp) return o;
                                    try {
                                        o = RegExp(
                                            ' daum[ /]| deusu/|(?:^|[^g])news(?!sapphire)|(?<! (?:channel/|google/))google(?!(app|/google| pixel))|(?<! cu)bots?(?:\\b|_)|(?<!(?:lib))http|(?<![hg]m)score|(?<!cam)scan|24x7|@[a-z][\\w-]+\\.|\\(\\)|\\.com\\b|\\btime/|\\||^<|^[\\w \\.\\-\\(?:\\):%]+(?:/v?\\d+(?:\\.\\d+)?(?:\\.\\d{1,10})*?)?(?:,|$)|^[^ ]{50,}$|^\\d+\\b|^\\w*search\\b|^\\w+/[\\w\\(\\)]*$|^active|^ad muncher|^amaya|^avsdevicesdk/|^azure|^biglotron|^bot|^bw/|^clamav[ /]|^client/|^cobweb/|^custom|^ddg[_-]android|^discourse|^dispatch/\\d|^downcast/|^duckduckgo|^email|^facebook|^getright/|^gozilla/|^hobbit|^hotzonu|^hwcdn/|^igetter/|^jeode/|^jetty/|^jigsaw|^microsoft bits|^movabletype|^mozilla/\\d\\.\\d\\s[\\w\\.-]+$|^mozilla/\\d\\.\\d\\s\\(compatible;?(?:\\s\\w+\\/\\d+\\.\\d+)?\\)$|^navermailapp|^netsurf|^offline|^openai/|^owler|^php|^postman|^python|^rank|^read|^reed|^rest|^rss|^snapchat|^space bison|^svn|^swcd |^taringa|^thumbor/|^track|^w3c|^webbandit/|^webcopier|^wget|^whatsapp|^wordpress|^xenu link sleuth|^yahoo|^yandex|^zdm/\\d|^zoom marketplace/|agent|analyzer|archive|ask jeeves/teoma|audit|bit\\.ly/|bluecoat drtr|browsex|burpcollaborator|capture|catch|check\\b|checker|chrome-lighthouse|chromeframe|classifier|cloudflare|convertify|crawl|cypress/|dareboost|datanyze|dejaclick|detect|dmbrowser|download|evc-batch/|exaleadcloudview|feed|fetcher|firephp|functionize|grab|headless|httrack|hubspot marketing grader|hydra|ibisbrowser|infrawatch|insight|inspect|iplabel|java(?!;)|library|linkcheck|mail\\.ru/|manager|measure|neustar wpm|node|nutch|offbyone|onetrust|optimize|pageburst|pagespeed|parser|perl|phantomjs|pingdom|powermarks|preview|proxy|ptst[ /]\\d|retriever|rexx;|rigor|rss\\b|scrape|server|sogou|sparkler/|speedcurve|spider|splash|statuscake|supercleaner|synapse|synthetic|tools|torrent|transcoder|url|validator|virtuoso|wappalyzer|webglance|webkit2png|whatcms/|xtate/',
                                            'i',
                                        );
                                    } catch (e) {
                                        o = j;
                                    }
                                    return o;
                                })().test(e)
                            );
                        })(F());
                        (this.logger = e),
                            (this.externalId = r.externalId),
                            (this.customParameters = $({}, i ? { bot_flg: !0 } : {}, n)),
                            (this.bindPlusPaymentSession = t);
                    }
                },
                z = class {
                    send(e) {
                        this.manager.send({ type: 'send-dwh-event', options: e });
                    }
                    constructor(e) {
                        var t, r;
                        (r = void 0),
                            (t = 'manager') in this ? Object.defineProperty(this, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (this[t] = r),
                            (this.manager = e),
                            (this.manager = e);
                    }
                },
                V = class {
                    static getItem(e) {
                        try {
                            return window.sessionStorage && 'function' == typeof window.sessionStorage.getItem ? window.sessionStorage.getItem(e) : null;
                        } catch (e) {
                            return null;
                        }
                    }
                    static setItem(e, t) {
                        try {
                            return window.sessionStorage && 'function' == typeof window.sessionStorage.setItem ? window.sessionStorage.setItem(e, t) : void 0;
                        } catch (e) {}
                    }
                };
            function Y(e) {
                return new Promise((t, r) => {
                    let n = document.createElement('script');
                    (n.type = 'text/javascript'),
                        (n.src = e),
                        (n.crossOrigin = 'anonymous'),
                        (n.onload = t),
                        (n.onerror = r),
                        (n.async = !0),
                        document.head.appendChild(n);
                });
            }
            var X = () => {
                    let { yandexuid: e = '' } = (function () {
                        try {
                            if ('undefined' == typeof document) return '';
                            return document.cookie;
                        } catch (e) {
                            return console.warn(e), '';
                        }
                    })()
                        .split(';')
                        .reduce((e, t) => {
                            let [r, n] = t.split('=');
                            return r && n && (e[r.trim()] = n), e;
                        }, {});
                    return e;
                },
                J = '0.10.12',
                K = 'color: white; background-color: tomato;',
                Z = { EVENTS: '690.32', ERRORS: '690.2354' };
            function Q(e, t, r, n, o, i, s) {
                try {
                    var a = e[i](s),
                        c = a.value;
                } catch (e) {
                    r(e);
                    return;
                }
                a.done ? t(c) : Promise.resolve(c).then(n, o);
            }
            function ee(e) {
                return function () {
                    var t = this,
                        r = arguments;
                    return new Promise(function (n, o) {
                        var i = e.apply(t, r);
                        function s(e) {
                            Q(i, n, o, s, a, 'next', e);
                        }
                        function a(e) {
                            Q(i, n, o, s, a, 'throw', e);
                        }
                        s(void 0);
                    });
                };
            }
            function et(e, t, r) {
                return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e;
            }
            function er(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (n = n.concat(
                            Object.getOwnPropertySymbols(r).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(r, e).enumerable;
                            }),
                        )),
                        n.forEach(function (t) {
                            et(e, t, r[t]);
                        });
                }
                return e;
            }
            var en = class e {
                request(e) {
                    var t, r, n, o, i, s;
                    let a;
                    if (null == (t = this.opts) ? void 0 : t._forceIgnore)
                        return 'production' !== this.env && console.warn(`%c AcqToolkit (ver. ${J})`, K, '_forceIgnore'), Promise.resolve();
                    let c = ['yango', 'yangosaft'].includes(x(null != (a = this.etld) ? a : T()))
                        ? 'https://services.play.yango.com/clck/click'
                        : 'https://yandex.ru/clck/click';
                    return (
                        (n = (null == (r = this.opts) ? void 0 : r.url) || c),
                        (o = { body: e }),
                        'undefined' != typeof navigator && navigator.sendBeacon
                            ? navigator.sendBeacon(n, null == o ? void 0 : o.body)
                            : S()(
                                  n,
                                  ((i = (function (e) {
                                      for (var t = 1; t < arguments.length; t++) {
                                          var r = null != arguments[t] ? arguments[t] : {},
                                              n = Object.keys(r);
                                          'function' == typeof Object.getOwnPropertySymbols &&
                                              (n = n.concat(
                                                  Object.getOwnPropertySymbols(r).filter(function (e) {
                                                      return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                                  }),
                                              )),
                                              n.forEach(function (t) {
                                                  var n;
                                                  (n = r[t]),
                                                      t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n);
                                              });
                                      }
                                      return e;
                                  })({}, o)),
                                  (s = s = { method: 'POST', keepalive: !0 }),
                                  Object.getOwnPropertyDescriptors
                                      ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(s))
                                      : (function (e, t) {
                                            var r = Object.keys(e);
                                            if (Object.getOwnPropertySymbols) {
                                                var n = Object.getOwnPropertySymbols(e);
                                                r.push.apply(r, n);
                                            }
                                            return r;
                                        })(Object(s)).forEach(function (e) {
                                            Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(s, e));
                                        }),
                                  i),
                              )
                    );
                }
                buildRequestData(t, r, n) {
                    var o, i, s, a, c, u;
                    let l = +new Date();
                    return (
                        '/reqid=' +
                        this.reqId +
                        (n ? '/' + n.join('/') : '') +
                        '/path=' +
                        t +
                        (r
                            ? '/vars=' +
                              (function (e) {
                                  let t = [];
                                  for (let r in e)
                                      Object.prototype.hasOwnProperty.call(e, r) &&
                                          (e[r] || 0 === e[r]) &&
                                          t.push(`-${r}=${encodeURIComponent(e[r]).replace(/\*/g, '%2A')}`);
                                  return t.join(',');
                              })(
                                  ((c = er(
                                      {
                                          project: e.projectName,
                                          version: J,
                                          env: this.env,
                                          ts: l,
                                          platform: null == (o = this.opts) ? void 0 : o.platform,
                                          region: null == (i = this.opts) ? void 0 : i.region,
                                          yandexuid: (null == (s = this.opts) ? void 0 : s.yandexuid) || X(),
                                          ua: 'undefined' != typeof navigator && navigator.userAgent,
                                      },
                                      r,
                                  )),
                                  (u = u = { additional: JSON.stringify(er({}, null == (a = this.opts) ? void 0 : a.additional, r.additional)) }),
                                  Object.getOwnPropertyDescriptors
                                      ? Object.defineProperties(c, Object.getOwnPropertyDescriptors(u))
                                      : (function (e, t) {
                                            var r = Object.keys(e);
                                            if (Object.getOwnPropertySymbols) {
                                                var n = Object.getOwnPropertySymbols(e);
                                                r.push.apply(r, n);
                                            }
                                            return r;
                                        })(Object(u)).forEach(function (e) {
                                            Object.defineProperty(c, e, Object.getOwnPropertyDescriptor(u, e));
                                        }),
                                  c),
                              )
                            : '') +
                        '/cts=' +
                        l +
                        '/*'
                    );
                }
                logError(e, t = {}) {
                    var r = this;
                    return ee(function* () {
                        'production' !== r.env && console.log(`%c AcqToolkit (ver. ${J})`, K, null == e ? void 0 : e.message, t),
                            yield r.request(
                                r.buildRequestData(Z.ERRORS, er({ msg: (null == e ? void 0 : e.message) || t.message, stack: null == e ? void 0 : e.stack }, t)),
                            );
                    })();
                }
                logEvent(e, t, r) {
                    var n = this;
                    return ee(function* () {
                        'production' !== n.env && console.log(`%c AcqToolkit (ver. ${J})`, K, e, t, r),
                            yield n.request(n.buildRequestData(Z.EVENTS, { type: 'string', name: e, value: t, additional: r }, ['table=rum_events']));
                    })();
                }
                constructor(e, t, r) {
                    et(this, 'env', void 0),
                        et(this, 'opts', void 0),
                        et(this, 'etld', void 0),
                        et(this, 'reqId', void 0),
                        (this.env = e),
                        (this.opts = t),
                        (this.etld = r),
                        (this.reqId = (null == t ? void 0 : t.requestId) || `${Date.now()}.${Math.random()}`);
                }
            };
            et(en, 'projectName', 'plus_acquisition-toolkit');
            var eo = (((i = {}).INITED = 'OFFERS_INITED'), (i.FETCH = 'OFFERS_FETCH'), (i.GET = 'OFFERS_GET'), (i.GET_URL = 'OFFERS_GET_URL'), i),
                ei =
                    (((s = {}).INITED = 'PW_TOOLS_INITED'),
                    (s.DOUBLE_INIT = 'PW_TOOLS_DOUBLE_INIT'),
                    (s.LOAD_MANAGER = 'PW_TOOLS_LOAD_MANAGER'),
                    (s.DESTROY = 'PW_TOOLS_DESTROY'),
                    s);
            function es(e, t, r) {
                return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e;
            }
            function ea(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (n = n.concat(
                            Object.getOwnPropertySymbols(r).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(r, e).enumerable;
                            }),
                        )),
                        n.forEach(function (t) {
                            es(e, t, r[t]);
                        });
                }
                return e;
            }
            function ec(e, t) {
                return (
                    (t = null != t ? t : {}),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                        : (function (e, t) {
                              var r = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var n = Object.getOwnPropertySymbols(e);
                                  r.push.apply(r, n);
                              }
                              return r;
                          })(Object(t)).forEach(function (r) {
                              Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
                          }),
                    e
                );
            }
            ((a = {}).INITED = 'TOOLKIT_INITED'),
                (a.GET_PW_TOOLS = 'TOOLKIT_GET_PW_TOOLS'),
                (a.GET_OFFERS = 'TOOLKIT_GET_OFFERS'),
                ((c = {}).INITED = 'DCB_ASSIGN_INITED'),
                (c.ASSIGN = 'DCB_ASSIGN'),
                (c.FETCH = 'DCB_ASSIGN_FETCH'),
                (c.GET_URL = 'DCB_ASSIGN_GET_URL');
            var eu = class e extends en {
                getCustomParams() {
                    return 'smarttv' === this.options.platform ? { device_id: this.options.deviceId } : {};
                }
                static from(t) {
                    return e.instance || ((e.inProcess = !0), (e.instance = new e(t)), (e.inProcess = !1)), e.instance;
                }
                loadManager(e) {
                    this.logEvent('start', ei.LOAD_MANAGER, e);
                    try {
                        return this.manager.load(e);
                    } catch (t) {
                        throw (this.logError(t, { method: 'loadManager', additional: { eventName: ei.LOAD_MANAGER, managerLoadOpitions: e } }), t);
                    }
                }
                destroy() {
                    this.logEvent('executed', ei.DESTROY), (e.instance = null);
                }
                constructor(t) {
                    var r,
                        { rumOptions: o, yandexuid: i } = t,
                        s = (function (e, t) {
                            if (null == e) return {};
                            var r,
                                n,
                                o = (function (e, t) {
                                    if (null == e) return {};
                                    var r,
                                        n,
                                        o = {},
                                        i = Object.keys(e);
                                    for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
                                    return o;
                                })(e, t);
                            if (Object.getOwnPropertySymbols) {
                                var i = Object.getOwnPropertySymbols(e);
                                for (n = 0; n < i.length; n++) (r = i[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
                            }
                            return o;
                        })(t, ['rumOptions', 'yandexuid']);
                    if (
                        (super(
                            s.environment || 'production',
                            ec(ea({}, o), { additional: ec(ea({}, null == o ? void 0 : o.additional), { widgetServiceName: s.widgetServiceName, puid: s.puid }) }),
                            s.etld,
                        ),
                        es(this, 'manager', void 0),
                        es(this, 'plusPaymentEvents', void 0),
                        es(this, 'options', void 0),
                        (this.options = s),
                        !e.inProcess)
                    ) {
                        let e = Error('Unexpected use of PWTools constructor. Use PWTools.from for initialization');
                        throw (this.logError(e, { method: 'constructor' }), e);
                    }
                    let a = new B('undefined' != typeof window ? window.location.href : '', V),
                        c =
                            null != (r = s.etld)
                                ? r
                                : (function (e) {
                                      let t = e.split('.');
                                      if (t.length < 2) throw Error(`AcqToolkit: Bad hostname "${e}". Can not get eTLD`);
                                      return t.slice(-2).join('.');
                                  })(T()),
                        u = ((window.YaMBPaymentManager = window.YaMBPaymentManager || []), window.YaMBPaymentManager);
                    this.manager = new q(s.environment, s.platform, c, s.preloadManager || !1, a, Y, u);
                    let l = new n(new z(this.manager)),
                        d = new f(s.puid),
                        y = F(),
                        { width: b, height: m } =
                            'undefined' != typeof window ? { width: `${window.screen.width}`, height: `${window.screen.height}` } : { width: '', height: '' },
                        g = new p(l, d, new h(i || X(), y, b, m));
                    (this.plusPaymentEvents = new W(g, C, { service: s.widgetServiceName, externalId: s.serviceSessionId }, this.getCustomParams())),
                        this.logEvent('success', ei.INITED, s);
                }
            };
            es(eu, 'instance', void 0), es(eu, 'inProcess', !1);
            var el = (e) => {
                var t, r;
                let { offers: n = [] } = e;
                return (
                    (t = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {},
                                n = Object.keys(r);
                            'function' == typeof Object.getOwnPropertySymbols &&
                                (n = n.concat(
                                    Object.getOwnPropertySymbols(r).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                    }),
                                )),
                                n.forEach(function (t) {
                                    var n;
                                    (n = r[t]), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n);
                                });
                        }
                        return e;
                    })(
                        {},
                        (function (e, t) {
                            if (null == e) return {};
                            var r,
                                n,
                                o = (function (e, t) {
                                    if (null == e) return {};
                                    var r,
                                        n,
                                        o = {},
                                        i = Object.keys(e);
                                    for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
                                    return o;
                                })(e, t);
                            if (Object.getOwnPropertySymbols) {
                                var i = Object.getOwnPropertySymbols(e);
                                for (n = 0; n < i.length; n++) (r = i[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
                            }
                            return o;
                        })(e, ['offers']),
                    )),
                    (r = r = { result: n }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                        : (function (e, t) {
                              var r = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var n = Object.getOwnPropertySymbols(e);
                                  r.push.apply(r, n);
                              }
                              return r;
                          })(Object(r)).forEach(function (e) {
                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                          }),
                    t
                );
            };
            function ef(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (n = n.concat(
                            Object.getOwnPropertySymbols(r).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(r, e).enumerable;
                            }),
                        )),
                        n.forEach(function (t) {
                            var n;
                            (n = r[t]), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n);
                        });
                }
                return e;
            }
            var ed = (e, t) => {
                    let { offers: r = [] } = e,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var r,
                                n,
                                o = (function (e, t) {
                                    if (null == e) return {};
                                    var r,
                                        n,
                                        o = {},
                                        i = Object.keys(e);
                                    for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
                                    return o;
                                })(e, t);
                            if (Object.getOwnPropertySymbols) {
                                var i = Object.getOwnPropertySymbols(e);
                                for (n = 0; n < i.length; n++) (r = i[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
                            }
                            return o;
                        })(e, ['offers']);
                    if (t.context.targetToFeatures && t.context.targetToFeatures.length > 0) {
                        let e = new Map();
                        return (
                            t.context.targetToFeatures.forEach((t) => {
                                let n = r.filter((e) => {
                                    var r, n;
                                    return (
                                        e.target === t.target &&
                                        e.requestedFeatures &&
                                        (null == (r = e.requestedFeatures) ? void 0 : r.length) > 0 &&
                                        (null == (n = e.requestedFeatures) ? void 0 : n.every((e) => t.features.includes(e)))
                                    );
                                });
                                e.set(t, n.length > 0 ? n.reduce((e, t) => (t.position < e.position ? t : e)) : null);
                            }),
                            ef({ result: e }, n)
                        );
                    }
                    return ef(
                        {
                            result: (t.context.places || []).reduce((e, t) => {
                                let n = r.filter((e) => (null == e ? void 0 : e.place) === t);
                                return (e[t] = n.length > 0 ? n.reduce((e, t) => (t.position < e.position ? t : e)) : null), e;
                            }, {}),
                        },
                        n,
                    );
                },
                ep = (e, t) => {
                    let { offers: r = [] } = e,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var r,
                                n,
                                o = (function (e, t) {
                                    if (null == e) return {};
                                    var r,
                                        n,
                                        o = {},
                                        i = Object.keys(e);
                                    for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
                                    return o;
                                })(e, t);
                            if (Object.getOwnPropertySymbols) {
                                var i = Object.getOwnPropertySymbols(e);
                                for (n = 0; n < i.length; n++) (r = i[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
                            }
                            return o;
                        })(e, ['offers']);
                    return (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {},
                                n = Object.keys(r);
                            'function' == typeof Object.getOwnPropertySymbols &&
                                (n = n.concat(
                                    Object.getOwnPropertySymbols(r).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                    }),
                                )),
                                n.forEach(function (t) {
                                    var n;
                                    (n = r[t]), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n);
                                });
                        }
                        return e;
                    })(
                        {
                            result: (t.context.places || []).reduce((e, t) => {
                                let n = r.filter((e) => (null == e ? void 0 : e.place) === t);
                                return (e[t] = n.sort((e, t) => e.position - t.position)), e;
                            }, {}),
                        },
                        n,
                    );
                };
            function eh(e) {
                var { url: t } = e;
                return (0, E.fetch)(
                    t,
                    (function (e, t) {
                        if (null == e) return {};
                        var r,
                            n,
                            o = (function (e, t) {
                                if (null == e) return {};
                                var r,
                                    n,
                                    o = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
                                return o;
                            })(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var i = Object.getOwnPropertySymbols(e);
                            for (n = 0; n < i.length; n++) (r = i[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
                        }
                        return o;
                    })(e, ['url']),
                ).then((e) => e.json());
            }
            var ey = {
                YANGO: {
                    baseUrlTemplate: 'https://egw.acquisition.play{env}.{sld}.{tld}/api/{version}/offers{composite}',
                    oauthDomain: { sld: 'yangosaft', tld: 'net' },
                },
                YANDEX: {
                    baseUrlTemplate: 'https://api.acquisition-gwe.plus{env}.{sld}.{tld}/api/{version}/offers{composite}',
                    oauthDomain: { sld: 'yandex', tld: 'net' },
                },
            };
            function eb(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (n = n.concat(
                            Object.getOwnPropertySymbols(r).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(r, e).enumerable;
                            }),
                        )),
                        n.forEach(function (t) {
                            var n;
                            (n = r[t]), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n);
                        });
                }
                return e;
            }
            function em(e, t) {
                return (
                    (t = null != t ? t : {}),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                        : (function (e, t) {
                              var r = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var n = Object.getOwnPropertySymbols(e);
                                  r.push.apply(r, n);
                              }
                              return r;
                          })(Object(t)).forEach(function (r) {
                              Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
                          }),
                    e
                );
            }
            function eg(e, t) {
                if (null == e) return {};
                var r,
                    n,
                    o = (function (e, t) {
                        if (null == e) return {};
                        var r,
                            n,
                            o = {},
                            i = Object.keys(e);
                        for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
                        return o;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) (r = i[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
                }
                return o;
            }
            var eO = (e, t) => {
                let { options: r, requestParams: n } = t,
                    o = eg(t, ['options', 'requestParams']),
                    { requester: i } = r,
                    s = eg(r, ['requester']);
                return em(eb({}, o), { eventName: e, requestParams: n, options: em(eb({}, s), { withCustomRequester: !!i }) });
            };
            function ev(e, t, r, n, o, i, s) {
                try {
                    var a = e[i](s),
                        c = a.value;
                } catch (e) {
                    r(e);
                    return;
                }
                a.done ? t(c) : Promise.resolve(c).then(n, o);
            }
            function ew(e) {
                return function () {
                    var t = this,
                        r = arguments;
                    return new Promise(function (n, o) {
                        var i = e.apply(t, r);
                        function s(e) {
                            ev(i, n, o, s, a, 'next', e);
                        }
                        function a(e) {
                            ev(i, n, o, s, a, 'throw', e);
                        }
                        s(void 0);
                    });
                };
            }
            function eP(e, t, r) {
                return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e;
            }
            function ej(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (n = n.concat(
                            Object.getOwnPropertySymbols(r).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(r, e).enumerable;
                            }),
                        )),
                        n.forEach(function (t) {
                            eP(e, t, r[t]);
                        });
                }
                return e;
            }
            function eE(e, t) {
                return (
                    (t = null != t ? t : {}),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                        : (function (e, t) {
                              var r = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var n = Object.getOwnPropertySymbols(e);
                                  r.push.apply(r, n);
                              }
                              return r;
                          })(Object(t)).forEach(function (r) {
                              Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
                          }),
                    e
                );
            }
            function eS(e, t) {
                if (null == e) return {};
                var r,
                    n,
                    o = (function (e, t) {
                        if (null == e) return {};
                        var r,
                            n,
                            o = {},
                            i = Object.keys(e);
                        for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
                        return o;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) (r = i[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
                }
                return o;
            }
            var eT = class extends en {
                get(e, t) {
                    return this.makeRequest('v1', e, t);
                }
                getOffers(e, t, r) {
                    return this.makeMappedRequester(el)(
                        { context: ej({ page: e, places: t }, r) },
                        { signal: null == r ? void 0 : r.signal, timeout: null == r ? void 0 : r.timeout },
                    );
                }
                getBestOffers(e, t, r) {
                    let n,
                        o = this.makeMappedRequester(ed),
                        i = {};
                    return (
                        Array.isArray(e)
                            ? ((n = ej({ targetToFeatures: e }, t)), (i = { signal: null == t ? void 0 : t.signal, timeout: null == t ? void 0 : t.timeout }))
                            : ((n = ej({ page: e, places: t }, r)), (i = { signal: null == r ? void 0 : r.signal, timeout: null == r ? void 0 : r.timeout })),
                        o({ context: n }, i)
                    );
                }
                getCarouselOffers(e, t, r) {
                    return this.makeMappedRequester(ep)(
                        { context: ej({ page: e, places: t }, r) },
                        { signal: null == r ? void 0 : r.signal, timeout: null == r ? void 0 : r.timeout },
                    );
                }
                makeRequest(e, t, r) {
                    var n = this;
                    return ew(function* () {
                        var o;
                        let i,
                            s = n.options,
                            { requester: a = eh, widgetServiceName: c } = s,
                            u = eS(s, ['requester', 'widgetServiceName']),
                            l = '';
                        if (Array.isArray((o = t.context)) || 'contextId' in o) {
                            let e;
                            i = { contexts: Array.isArray((e = t.context)) ? e : [e] };
                        } else {
                            let e = t.context,
                                { oneClickSupported: r, eventSessionId: n } = e,
                                o = eS(e, ['oneClickSupported', 'eventSessionId']);
                            (l = new URLSearchParams(ej({}, r ? { oneClickSupported: r ? 'true' : 'false' } : null, n ? { eventSessionId: n } : null)).toString()),
                                (i = { context: ej({ widgetServiceName: c }, o) });
                        }
                        let f = n.getUrl(e),
                            d = ej({ geoInfo: null == t ? void 0 : t.geoInfo }, i),
                            p = performance.now();
                        n.logEvent('start', eo.FETCH, { params: t, url: f, queryParamsForV2: l, isOptionsDefined: r && Object.keys(r).length > 0 });
                        try {
                            let t = yield a({
                                    url: `${f}${l && 'v2' === e ? `?${l}` : ''}`,
                                    method: 'POST',
                                    mode: 'cors',
                                    body: JSON.stringify(d),
                                    headers: (function ({
                                        lang: e,
                                        platform: t,
                                        service: r,
                                        brand: n,
                                        device: o,
                                        appVersion: i,
                                        oAuthToken: s,
                                        forwardedFor: a,
                                        customHeaders: c,
                                    }) {
                                        return (function (e) {
                                            for (var t = 1; t < arguments.length; t++) {
                                                var r = null != arguments[t] ? arguments[t] : {},
                                                    n = Object.keys(r);
                                                'function' == typeof Object.getOwnPropertySymbols &&
                                                    (n = n.concat(
                                                        Object.getOwnPropertySymbols(r).filter(function (e) {
                                                            return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                                        }),
                                                    )),
                                                    n.forEach(function (t) {
                                                        var n;
                                                        (n = r[t]),
                                                            t in e
                                                                ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
                                                                : (e[t] = n);
                                                    });
                                            }
                                            return e;
                                        })(
                                            {
                                                'Content-Type': 'application/json',
                                                'X-Preferred-Language': e,
                                                'X-Yandex-Plus-Platform': t,
                                                'X-Yandex-Plus-Service': r,
                                                'X-Yandex-Plus-Brand': n,
                                                'X-Yandex-Plus-SdkVersion': J,
                                            },
                                            o ? { 'X-Yandex-Plus-Device': o } : null,
                                            s ? { authorization: `OAuth ${s}` } : null,
                                            i ? { 'X-Yandex-Plus-HostAppVersion': i } : null,
                                            a ? { 'X-Forwarded-For': a } : null,
                                            c || {},
                                        );
                                    })(eE(ej({}, u), { oAuthToken: n.oAuthToken })),
                                    signal: (function (e) {
                                        if (null == e ? void 0 : e.signal) return e.signal;
                                        if (null == e ? void 0 : e.timeout) {
                                            let t = new AbortController();
                                            return (
                                                setTimeout(() => {
                                                    t.abort();
                                                }, e.timeout),
                                                t.signal
                                            );
                                        }
                                    })(r),
                                    credentials: n.oAuthToken ? 'omit' : 'include',
                                }),
                                o = performance.now();
                            return n.logEvent('success', eo.GET, { latency: Math.trunc(o - p) }), t;
                        } catch (t) {
                            let e = performance.now();
                            throw (
                                (n.logError(t, {
                                    service: n.options.service,
                                    additional: eO(eo.GET, { options: n.options, requestParams: d, latency: Math.trunc(e - p) }),
                                }),
                                t)
                            );
                        }
                    })();
                }
                makeMappedRequester(e) {
                    var t,
                        r = this;
                    return (
                        (t = ew(function* (t, n) {
                            return e(yield r.makeRequest('v2', t, n), t);
                        })),
                        function (e, r) {
                            return t.apply(this, arguments);
                        }
                    );
                }
                getUrl(e) {
                    let t;
                    if (this.urls[e]) return this.urls[e];
                    let { etld: r, service: n, brand: o, environment: i = 'production', authMethod: s = this.oAuthToken ? 'oauth' : 'default' } = this.options,
                        a = T();
                    try {
                        t = (function (e) {
                            let { brand: t, environment: r, version: n } = e,
                                o = ey[t];
                            if (!o) throw Error(`Unknown brand: ${t}`);
                            let { sld: i, tld: s } = (function (e) {
                                    let { etld: t, hostname: r, authMethod: n, config: o } = e;
                                    if (t) return { sld: x(t), tld: _(t) };
                                    if ('default' === n) {
                                        if (!r) throw Error('AcqToolkit: No etld provided and no hostname available for getting offers backend URL');
                                        return { sld: x(r), tld: _(r) };
                                    }
                                    return o.oauthDomain;
                                })(
                                    (function (e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var r = null != arguments[t] ? arguments[t] : {},
                                                n = Object.keys(r);
                                            'function' == typeof Object.getOwnPropertySymbols &&
                                                (n = n.concat(
                                                    Object.getOwnPropertySymbols(r).filter(function (e) {
                                                        return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                                    }),
                                                )),
                                                n.forEach(function (t) {
                                                    var n;
                                                    (n = r[t]),
                                                        t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n);
                                                });
                                        }
                                        return e;
                                    })({ config: o }, e),
                                ),
                                a = L(r);
                            return o.baseUrlTemplate
                                .replace('{env}', a)
                                .replace('{sld}', i)
                                .replace('{tld}', s)
                                .replace('{version}', n)
                                .replace('{composite}', 'v1' === n ? '/composite' : '');
                        })({ brand: o, etld: r, hostname: a, authMethod: s, environment: i, version: e });
                    } catch (e) {
                        throw (this.logError(e || Error('Unknow prepareApiUrl error'), { service: n, additional: eO(eo.GET_URL, { options: this.options }) }), e);
                    }
                    return (this.urls[e] = t), t;
                }
                constructor(e) {
                    var { oAuthToken: t, rumOptions: r, yandexuid: n } = e,
                        o = eS(e, ['oAuthToken', 'rumOptions', 'yandexuid']);
                    super(
                        o.environment || 'production',
                        eE(ej({}, r), {
                            yandexuid: n,
                            service: (null == r ? void 0 : r.service) || (null == o ? void 0 : o.service),
                            platform: (null == r ? void 0 : r.platform) || (null == o ? void 0 : o.platform),
                            additional: ej({ puid: o.puid }, null == r ? void 0 : r.additional),
                        }),
                        o.etld,
                    ),
                        eP(this, 'urls', { v1: '', v2: '' }),
                        eP(this, 'options', void 0),
                        eP(this, 'oAuthToken', void 0),
                        (this.options = o),
                        (this.oAuthToken = t),
                        this.logEvent('success', eo.INITED, o);
                }
            };
            ((u = {}).PWTools = 'PWTools'), (u.Offers = 'Offers');
        },
        78398: (e, t, r) => {
            var n = ('undefined' != typeof globalThis && globalThis) || ('undefined' != typeof self && self) || (void 0 !== r.g && r.g),
                o = (function () {
                    function e() {
                        (this.fetch = !1), (this.DOMException = n.DOMException);
                    }
                    return (e.prototype = n), new e();
                })();
            !(function (e) {
                !(function (t) {
                    var r = (void 0 !== e && e) || ('undefined' != typeof self && self) || (void 0 !== r && r),
                        n = {
                            searchParams: 'URLSearchParams' in r,
                            iterable: 'Symbol' in r && 'iterator' in Symbol,
                            blob:
                                'FileReader' in r &&
                                'Blob' in r &&
                                (function () {
                                    try {
                                        return new Blob(), !0;
                                    } catch (e) {
                                        return !1;
                                    }
                                })(),
                            formData: 'FormData' in r,
                            arrayBuffer: 'ArrayBuffer' in r,
                        };
                    if (n.arrayBuffer)
                        var o = [
                                '[object Int8Array]',
                                '[object Uint8Array]',
                                '[object Uint8ClampedArray]',
                                '[object Int16Array]',
                                '[object Uint16Array]',
                                '[object Int32Array]',
                                '[object Uint32Array]',
                                '[object Float32Array]',
                                '[object Float64Array]',
                            ],
                            i =
                                ArrayBuffer.isView ||
                                function (e) {
                                    return e && o.indexOf(Object.prototype.toString.call(e)) > -1;
                                };
                    function s(e) {
                        if (('string' != typeof e && (e = String(e)), /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(e) || '' === e))
                            throw TypeError('Invalid character in header field name: "' + e + '"');
                        return e.toLowerCase();
                    }
                    function a(e) {
                        return 'string' != typeof e && (e = String(e)), e;
                    }
                    function c(e) {
                        var t = {
                            next: function () {
                                var t = e.shift();
                                return { done: void 0 === t, value: t };
                            },
                        };
                        return (
                            n.iterable &&
                                (t[Symbol.iterator] = function () {
                                    return t;
                                }),
                            t
                        );
                    }
                    function u(e) {
                        (this.map = {}),
                            e instanceof u
                                ? e.forEach(function (e, t) {
                                      this.append(t, e);
                                  }, this)
                                : Array.isArray(e)
                                  ? e.forEach(function (e) {
                                        this.append(e[0], e[1]);
                                    }, this)
                                  : e &&
                                    Object.getOwnPropertyNames(e).forEach(function (t) {
                                        this.append(t, e[t]);
                                    }, this);
                    }
                    function l(e) {
                        if (e.bodyUsed) return Promise.reject(TypeError('Already read'));
                        e.bodyUsed = !0;
                    }
                    function f(e) {
                        return new Promise(function (t, r) {
                            (e.onload = function () {
                                t(e.result);
                            }),
                                (e.onerror = function () {
                                    r(e.error);
                                });
                        });
                    }
                    function d(e) {
                        var t = new FileReader(),
                            r = f(t);
                        return t.readAsArrayBuffer(e), r;
                    }
                    function p(e) {
                        if (e.slice) return e.slice(0);
                        var t = new Uint8Array(e.byteLength);
                        return t.set(new Uint8Array(e)), t.buffer;
                    }
                    function h() {
                        return (
                            (this.bodyUsed = !1),
                            (this._initBody = function (e) {
                                if (((this.bodyUsed = this.bodyUsed), (this._bodyInit = e), e))
                                    if ('string' == typeof e) this._bodyText = e;
                                    else if (n.blob && Blob.prototype.isPrototypeOf(e)) this._bodyBlob = e;
                                    else if (n.formData && FormData.prototype.isPrototypeOf(e)) this._bodyFormData = e;
                                    else if (n.searchParams && URLSearchParams.prototype.isPrototypeOf(e)) this._bodyText = e.toString();
                                    else {
                                        var t;
                                        n.arrayBuffer && n.blob && (t = e) && DataView.prototype.isPrototypeOf(t)
                                            ? ((this._bodyArrayBuffer = p(e.buffer)), (this._bodyInit = new Blob([this._bodyArrayBuffer])))
                                            : n.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(e) || i(e))
                                              ? (this._bodyArrayBuffer = p(e))
                                              : (this._bodyText = e = Object.prototype.toString.call(e));
                                    }
                                else this._bodyText = '';
                                !this.headers.get('content-type') &&
                                    ('string' == typeof e
                                        ? this.headers.set('content-type', 'text/plain;charset=UTF-8')
                                        : this._bodyBlob && this._bodyBlob.type
                                          ? this.headers.set('content-type', this._bodyBlob.type)
                                          : n.searchParams &&
                                            URLSearchParams.prototype.isPrototypeOf(e) &&
                                            this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8'));
                            }),
                            n.blob &&
                                ((this.blob = function () {
                                    var e = l(this);
                                    if (e) return e;
                                    if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                                    if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                                    if (!this._bodyFormData) return Promise.resolve(new Blob([this._bodyText]));
                                    throw Error('could not read FormData body as blob');
                                }),
                                (this.arrayBuffer = function () {
                                    if (!this._bodyArrayBuffer) return this.blob().then(d);
                                    var e = l(this);
                                    return (
                                        e ||
                                        (ArrayBuffer.isView(this._bodyArrayBuffer)
                                            ? Promise.resolve(
                                                  this._bodyArrayBuffer.buffer.slice(
                                                      this._bodyArrayBuffer.byteOffset,
                                                      this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength,
                                                  ),
                                              )
                                            : Promise.resolve(this._bodyArrayBuffer))
                                    );
                                })),
                            (this.text = function () {
                                var e,
                                    t,
                                    r,
                                    n = l(this);
                                if (n) return n;
                                if (this._bodyBlob) return (e = this._bodyBlob), (r = f((t = new FileReader()))), t.readAsText(e), r;
                                if (this._bodyArrayBuffer)
                                    return Promise.resolve(
                                        (function (e) {
                                            for (var t = new Uint8Array(e), r = Array(t.length), n = 0; n < t.length; n++) r[n] = String.fromCharCode(t[n]);
                                            return r.join('');
                                        })(this._bodyArrayBuffer),
                                    );
                                if (!this._bodyFormData) return Promise.resolve(this._bodyText);
                                throw Error('could not read FormData body as text');
                            }),
                            n.formData &&
                                (this.formData = function () {
                                    return this.text().then(m);
                                }),
                            (this.json = function () {
                                return this.text().then(JSON.parse);
                            }),
                            this
                        );
                    }
                    (u.prototype.append = function (e, t) {
                        (e = s(e)), (t = a(t));
                        var r = this.map[e];
                        this.map[e] = r ? r + ', ' + t : t;
                    }),
                        (u.prototype.delete = function (e) {
                            delete this.map[s(e)];
                        }),
                        (u.prototype.get = function (e) {
                            return (e = s(e)), this.has(e) ? this.map[e] : null;
                        }),
                        (u.prototype.has = function (e) {
                            return this.map.hasOwnProperty(s(e));
                        }),
                        (u.prototype.set = function (e, t) {
                            this.map[s(e)] = a(t);
                        }),
                        (u.prototype.forEach = function (e, t) {
                            for (var r in this.map) this.map.hasOwnProperty(r) && e.call(t, this.map[r], r, this);
                        }),
                        (u.prototype.keys = function () {
                            var e = [];
                            return (
                                this.forEach(function (t, r) {
                                    e.push(r);
                                }),
                                c(e)
                            );
                        }),
                        (u.prototype.values = function () {
                            var e = [];
                            return (
                                this.forEach(function (t) {
                                    e.push(t);
                                }),
                                c(e)
                            );
                        }),
                        (u.prototype.entries = function () {
                            var e = [];
                            return (
                                this.forEach(function (t, r) {
                                    e.push([r, t]);
                                }),
                                c(e)
                            );
                        }),
                        n.iterable && (u.prototype[Symbol.iterator] = u.prototype.entries);
                    var y = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];
                    function b(e, t) {
                        if (!(this instanceof b)) throw TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
                        var r,
                            n,
                            o = (t = t || {}).body;
                        if (e instanceof b) {
                            if (e.bodyUsed) throw TypeError('Already read');
                            (this.url = e.url),
                                (this.credentials = e.credentials),
                                t.headers || (this.headers = new u(e.headers)),
                                (this.method = e.method),
                                (this.mode = e.mode),
                                (this.signal = e.signal),
                                o || null == e._bodyInit || ((o = e._bodyInit), (e.bodyUsed = !0));
                        } else this.url = String(e);
                        if (
                            ((this.credentials = t.credentials || this.credentials || 'same-origin'),
                            (t.headers || !this.headers) && (this.headers = new u(t.headers)),
                            (this.method = ((n = (r = t.method || this.method || 'GET').toUpperCase()), y.indexOf(n) > -1 ? n : r)),
                            (this.mode = t.mode || this.mode || null),
                            (this.signal = t.signal || this.signal),
                            (this.referrer = null),
                            ('GET' === this.method || 'HEAD' === this.method) && o)
                        )
                            throw TypeError('Body not allowed for GET or HEAD requests');
                        if ((this._initBody(o), ('GET' === this.method || 'HEAD' === this.method) && ('no-store' === t.cache || 'no-cache' === t.cache))) {
                            var i = /([?&])_=[^&]*/;
                            i.test(this.url)
                                ? (this.url = this.url.replace(i, '$1_=' + new Date().getTime()))
                                : (this.url += (/\?/.test(this.url) ? '&' : '?') + '_=' + new Date().getTime());
                        }
                    }
                    function m(e) {
                        var t = new FormData();
                        return (
                            e
                                .trim()
                                .split('&')
                                .forEach(function (e) {
                                    if (e) {
                                        var r = e.split('='),
                                            n = r.shift().replace(/\+/g, ' '),
                                            o = r.join('=').replace(/\+/g, ' ');
                                        t.append(decodeURIComponent(n), decodeURIComponent(o));
                                    }
                                }),
                            t
                        );
                    }
                    function g(e, t) {
                        if (!(this instanceof g)) throw TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
                        t || (t = {}),
                            (this.type = 'default'),
                            (this.status = void 0 === t.status ? 200 : t.status),
                            (this.ok = this.status >= 200 && this.status < 300),
                            (this.statusText = void 0 === t.statusText ? '' : '' + t.statusText),
                            (this.headers = new u(t.headers)),
                            (this.url = t.url || ''),
                            this._initBody(e);
                    }
                    (b.prototype.clone = function () {
                        return new b(this, { body: this._bodyInit });
                    }),
                        h.call(b.prototype),
                        h.call(g.prototype),
                        (g.prototype.clone = function () {
                            return new g(this._bodyInit, { status: this.status, statusText: this.statusText, headers: new u(this.headers), url: this.url });
                        }),
                        (g.error = function () {
                            var e = new g(null, { status: 0, statusText: '' });
                            return (e.type = 'error'), e;
                        });
                    var O = [301, 302, 303, 307, 308];
                    (g.redirect = function (e, t) {
                        if (-1 === O.indexOf(t)) throw RangeError('Invalid status code');
                        return new g(null, { status: t, headers: { location: e } });
                    }),
                        (t.DOMException = r.DOMException);
                    try {
                        new t.DOMException();
                    } catch (e) {
                        (t.DOMException = function (e, t) {
                            (this.message = e), (this.name = t);
                            var r = Error(e);
                            this.stack = r.stack;
                        }),
                            (t.DOMException.prototype = Object.create(Error.prototype)),
                            (t.DOMException.prototype.constructor = t.DOMException);
                    }
                    function v(e, o) {
                        return new Promise(function (i, s) {
                            var c = new b(e, o);
                            if (c.signal && c.signal.aborted) return s(new t.DOMException('Aborted', 'AbortError'));
                            var l = new XMLHttpRequest();
                            function f() {
                                l.abort();
                            }
                            (l.onload = function () {
                                var e,
                                    t,
                                    r = {
                                        status: l.status,
                                        statusText: l.statusText,
                                        headers:
                                            ((e = l.getAllResponseHeaders() || ''),
                                            (t = new u()),
                                            e
                                                .replace(/\r?\n[\t ]+/g, ' ')
                                                .split('\r')
                                                .map(function (e) {
                                                    return 0 === e.indexOf('\n') ? e.substr(1, e.length) : e;
                                                })
                                                .forEach(function (e) {
                                                    var r = e.split(':'),
                                                        n = r.shift().trim();
                                                    if (n) {
                                                        var o = r.join(':').trim();
                                                        t.append(n, o);
                                                    }
                                                }),
                                            t),
                                    };
                                r.url = 'responseURL' in l ? l.responseURL : r.headers.get('X-Request-URL');
                                var n = 'response' in l ? l.response : l.responseText;
                                setTimeout(function () {
                                    i(new g(n, r));
                                }, 0);
                            }),
                                (l.onerror = function () {
                                    setTimeout(function () {
                                        s(TypeError('Network request failed'));
                                    }, 0);
                                }),
                                (l.ontimeout = function () {
                                    setTimeout(function () {
                                        s(TypeError('Network request failed'));
                                    }, 0);
                                }),
                                (l.onabort = function () {
                                    setTimeout(function () {
                                        s(new t.DOMException('Aborted', 'AbortError'));
                                    }, 0);
                                }),
                                l.open(
                                    c.method,
                                    (function (e) {
                                        try {
                                            return '' === e && r.location.href ? r.location.href : e;
                                        } catch (t) {
                                            return e;
                                        }
                                    })(c.url),
                                    !0,
                                ),
                                'include' === c.credentials ? (l.withCredentials = !0) : 'omit' === c.credentials && (l.withCredentials = !1),
                                'responseType' in l &&
                                    (n.blob
                                        ? (l.responseType = 'blob')
                                        : n.arrayBuffer &&
                                          c.headers.get('Content-Type') &&
                                          -1 !== c.headers.get('Content-Type').indexOf('application/octet-stream') &&
                                          (l.responseType = 'arraybuffer')),
                                !o || 'object' != typeof o.headers || o.headers instanceof u
                                    ? c.headers.forEach(function (e, t) {
                                          l.setRequestHeader(t, e);
                                      })
                                    : Object.getOwnPropertyNames(o.headers).forEach(function (e) {
                                          l.setRequestHeader(e, a(o.headers[e]));
                                      }),
                                c.signal &&
                                    (c.signal.addEventListener('abort', f),
                                    (l.onreadystatechange = function () {
                                        4 === l.readyState && c.signal.removeEventListener('abort', f);
                                    })),
                                l.send(void 0 === c._bodyInit ? null : c._bodyInit);
                        });
                    }
                    (v.polyfill = !0),
                        r.fetch || ((r.fetch = v), (r.Headers = u), (r.Request = b), (r.Response = g)),
                        (t.Headers = u),
                        (t.Request = b),
                        (t.Response = g),
                        (t.fetch = v);
                })({});
            })(o),
                (o.fetch.ponyfill = !0),
                delete o.fetch.polyfill;
            var i = n.fetch ? n : o;
            ((t = i.fetch).default = i.fetch), (t.fetch = i.fetch), (t.Headers = i.Headers), (t.Request = i.Request), (t.Response = i.Response), (e.exports = t);
        },
    },
]);
