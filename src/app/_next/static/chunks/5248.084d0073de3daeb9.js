'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5248],
    {
        24770: (e, t, r) => {
            r.d(t, { I: () => s, M: () => l, a: () => o, b: () => a, c: () => n, d: () => i, g: () => u });
            let n = 'i18n-geo-widget-device-id',
                i = 'i18n-geo-widget-replacements',
                s = 'i18n-enabled-replacement',
                o = 'i18n-jwt-token',
                a = 'i18n-geo-widget-replacement-cleared',
                l = 3,
                g = {
                    yandex: {
                        testing: 'https://plus-i18n-token.tst.plus.yandex-team.ru',
                        prestable: 'https://plus-i18n-token.prestable.plus.yandex-team.ru',
                        production: 'https://plus-i18n-token.plus.yandex-team.ru',
                    },
                    yango: {
                        testing: 'https://plus-i18n-token.plus.yango.com',
                        prestable: 'https://plus-i18n-token.plus.yango.com',
                        production: 'https://plus-i18n-token.plus.yango.com',
                    },
                },
                u = (e, t) => g[t][e];
        },
        25248: (e, t, r) => {
            r.d(t, { createClientContainer: () => e$ });
            var n = r(32732),
                i = r(46966),
                s = r(27576),
                o = r(80451),
                a = r(73202),
                l = r(7333),
                g = r(26252),
                u = r(5924),
                c = r(19731),
                d = r(4628),
                m = r(47755),
                p = r(31958),
                h = r(52231),
                A = r(34097),
                w = r(97290),
                U = r(77175),
                f = r(35268),
                x = r(15912),
                P = r(42750),
                R = r(38979),
                v = r(57466),
                b = r(36090),
                L = r(31038),
                E = r(46510),
                G = r(50808),
                k = r(70233),
                T = r(37558),
                H = r(83310),
                _ = r(8368),
                I = r(74503),
                y = r(41816),
                B = r(67982),
                W = r(66838),
                X = r(16128),
                C = r(99146),
                q = r(78484),
                S = r(51432),
                D = r(82669),
                M = r(58693),
                z = r(40482),
                j = r(10894),
                O = r(50581),
                Z = r(71943),
                N = r(24956),
                V = r(51770),
                F = r(12690),
                Q = r(90662),
                Y = r(90926),
                $ = r(85750),
                J = r(72864),
                K = r(84706),
                ee = r(67700),
                et = r(30742),
                er = r(83092),
                en = r(90591),
                ei = r(59757),
                es = r(4990),
                eo = r(33534),
                ea = r(64642),
                el = r(68846),
                eg = r(65866),
                eu = r(96002),
                ec = r(76198),
                ed = r(37694),
                em = r(14031),
                ep = r(54874),
                eh = r(41670),
                eA = r(44547),
                ew = r(54280),
                eU = r(19964),
                ef = r(72288),
                ex = r(25500),
                eP = r(32629),
                eR = r(91945),
                ev = r(19379),
                eb = r(19053),
                eL = r(42068);
            class eE extends eL.P {
                getRedirectUri() {
                    let e = ''.concat(this.pathname).concat(this.searchParams ? '?'.concat(this.searchParams) : '');
                    return 'https://'.concat(this.host).concat(e);
                }
                get authorizationUrl() {
                    let e = this.getPassportHostWithTld(this.tld, eb.B);
                    if (!e) return;
                    let {
                            passportCredentials: { origin: t },
                        } = this.config,
                        r = new URLSearchParams({ origin: t, retpath: this.getRedirectUri(), language: this.language });
                    return ''.concat(e, '/auth?').concat(r.toString());
                }
                get childPageUrl() {
                    let e = this.getPassportHostWithTld(this.tld, eb.B);
                    if (!e) return;
                    let {
                            passportCredentials: { origin: t },
                        } = this.config,
                        r = new URLSearchParams({ origin: t, retpath: this.getRedirectUri(), language: this.language });
                    return ''.concat(e, '/auth/child/restrict?').concat(r.toString());
                }
                getAuthorizationUrlWithParams(e) {
                    let t = this.getPassportHostWithTld(this.tld, eb.B);
                    if (t) return ''.concat(t, '/auth?').concat(e.toString());
                }
                get token() {}
                get yandexUid() {
                    return this.storage.get(ev.c.YandexUid, !1) || void 0;
                }
                constructor(e, t, r) {
                    super(e, t), (0, eR._)(this, 'language', void 0), (this.language = r);
                }
            }
            class eG extends eE {
                get isPassportLoginChanged() {
                    return this.passportLogin !== this.passportLoginCached;
                }
                checkPassportLoginCookieChange() {
                    this.isPassportLoginChanged && this.reloadPage();
                }
                checkPassportLoginCookieChangeWithMultiAuth() {
                    this.isPassportLoginChanged && this.changeUser();
                }
                reloadPage() {
                    window.location.reload();
                }
                setUid(e) {
                    this.userId.setPassportUid(e);
                }
                redirectToAuthorizationUrl() {
                    this.authorizationUrl && this.redirect(this.authorizationUrl);
                }
                redirectToChildPageUrl() {
                    this.childPageUrl && this.redirect(this.childPageUrl);
                }
                get passportLogin() {
                    return this.storage.get(ev.c.YandexLogin, !1) || void 0;
                }
                async check() {}
                changeUser() {
                    var e;
                    if (void 0 === this.userId.getPassportUid()) return;
                    let t = 'auth-iframe-'.concat((0, s.A)()),
                        r = (0, o.getTldHost)(this.config.passportCredentials.host, this.tld, eb.B),
                        n = document.createElement('iframe'),
                        i = document.createElement('form');
                    i.setAttribute('method', 'POST'),
                        i.setAttribute('action', ''.concat(r, '/passport?mode=embeddedauth')),
                        i.setAttribute('target', t),
                        i.setAttribute('class', 'hidden'),
                        n.setAttribute('name', t),
                        n.setAttribute('src', 'about:blank'),
                        n.setAttribute('class', 'hidden');
                    let a = null != (e = this.storage.get(ev.c.YandexUid, !1)) ? e : '';
                    Object.entries({
                        action: 'change_default',
                        uid: String(this.userId.getPassportUid()),
                        retpath: ''.concat(window.location.origin, '/login-status'),
                        yu: a,
                    }).forEach((e) => {
                        let [t, r] = e,
                            n = document.createElement('input');
                        n.setAttribute('type', 'hidden'), n.setAttribute('name', t), n.setAttribute('value', r), i.appendChild(n);
                    }),
                        document.body.appendChild(i),
                        document.body.appendChild(n),
                        i.submit();
                }
                observe(e) {
                    if (e) {
                        (this.observerCallback = this.checkPassportLoginCookieChangeWithMultiAuth.bind(this)), window.addEventListener('focus', this.observerCallback);
                        return;
                    }
                    this.intervalId = setInterval(this.checkPassportLoginCookieChange.bind(this), 5e3);
                }
                disconnect() {
                    this.observerCallback && window.removeEventListener('focus', this.observerCallback), clearInterval(this.intervalId);
                }
                constructor(e, t, r, n) {
                    super(e, t, r),
                        (0, eR._)(this, 'userId', void 0),
                        (0, eR._)(this, 'passportLoginCached', void 0),
                        (0, eR._)(this, 'intervalId', void 0),
                        (0, eR._)(this, 'observerCallback', void 0),
                        (this.userId = n),
                        (this.passportLoginCached = this.passportLogin);
                }
            }
            var ek = r(51053),
                eT = r(12583),
                eH = r(75887),
                e_ = r(61933),
                eI = r(80950),
                ey = r(95564);
            class eB {
                onChangeLanguage(e) {
                    if ('string' == typeof this.token && this.token.length > 0) {
                        let t = 'https://yandex.'.concat(this.tld, '/portal/set/lang/'),
                            r = encodeURIComponent(window.location.href),
                            n = ''.concat(t, '?intl=').concat(e, '&retpath=').concat(r, '&sk=').concat(this.token);
                        window.location.assign(n);
                    } else window.location.reload();
                }
                constructor(e, t) {
                    (0, eR._)(this, 'tld', void 0), (0, eR._)(this, 'token', void 0), (this.tld = e), (this.token = t);
                }
            }
            var eW = r(73422),
                eX = r(48193),
                eC = r(70253),
                eq = r(92023),
                eS = r(10410),
                eD = r(70204);
            let eM = /^application\/json(;\s?charset=\S+)?$/;
            class ez {
                async afterResponse(e) {
                    try {
                        if (!e.headers['content-range'] && e.headers['content-type'] && eM.test(e.headers['content-type'])) {
                            let t = await e.clone().json();
                            if (
                                ((e) => {
                                    if (e && 'object' == typeof e && 'type' in e && 'captcha' === e.type) {
                                        let { captcha: t } = e;
                                        if (t && t['captcha-page']) return !0;
                                    }
                                    return !1;
                                })(t)
                            ) {
                                let { captcha: e } = t;
                                window.location.replace(e['captcha-page']);
                            }
                        }
                    } catch (e) {
                        e instanceof Error && this.logger.error(e);
                    }
                    return e;
                }
                beforeRequest(e) {
                    let t = window.location.href;
                    ((e) => {
                        let t;
                        try {
                            let r = e.map((e) => {
                                let t = new URL(e);
                                return ''.concat(t.protocol).concat(t.hostname.split('.').slice(-2).join('.'));
                            });
                            t = r.every((e) => e === r[0]);
                        } catch (e) {
                            t = !1;
                        }
                        return t;
                    })([t, e.url]) && (e.headers.set('X-Requested-With', 'XMLHttpRequest'), e.headers.set('X-Retpath-Y', t));
                }
                get afterResponseHook() {
                    return this.afterResponse.bind(this);
                }
                get beforeRequestHook() {
                    return this.beforeRequest.bind(this);
                }
                constructor(e) {
                    (0, eR._)(this, 'logger', void 0), (this.logger = e);
                }
            }
            var ej = r(7736);
            function eO(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r) e[n] = r[n];
                }
                return e;
            }
            r(24770);
            var eZ = (function e(t, r) {
                function n(e, n, i) {
                    if ('undefined' != typeof document) {
                        'number' == typeof (i = eO({}, r, i)).expires && (i.expires = new Date(Date.now() + 864e5 * i.expires)),
                            i.expires && (i.expires = i.expires.toUTCString()),
                            (e = encodeURIComponent(e)
                                .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
                                .replace(/[()]/g, escape));
                        var s = '';
                        for (var o in i) i[o] && ((s += '; ' + o), !0 !== i[o] && (s += '=' + i[o].split(';')[0]));
                        return (document.cookie = e + '=' + t.write(n, e) + s);
                    }
                }
                return Object.create(
                    {
                        set: n,
                        get: function (e) {
                            if ('undefined' != typeof document && (!arguments.length || e)) {
                                for (var r = document.cookie ? document.cookie.split('; ') : [], n = {}, i = 0; i < r.length; i++) {
                                    var s = r[i].split('='),
                                        o = s.slice(1).join('=');
                                    try {
                                        var a = decodeURIComponent(s[0]);
                                        if (((n[a] = t.read(o, a)), e === a)) break;
                                    } catch (e) {}
                                }
                                return e ? n[e] : n;
                            }
                        },
                        remove: function (e, t) {
                            n(e, '', eO({}, t, { expires: -1 }));
                        },
                        withAttributes: function (t) {
                            return e(this.converter, eO({}, this.attributes, t));
                        },
                        withConverter: function (t) {
                            return e(eO({}, this.converter, t), this.attributes);
                        },
                    },
                    { attributes: { value: Object.freeze(r) }, converter: { value: Object.freeze(t) } },
                );
            })(
                {
                    read: function (e) {
                        return '"' === e[0] && (e = e.slice(1, -1)), e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
                    },
                    write: function (e) {
                        return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent);
                    },
                },
                { path: '/' },
            );
            let eN = (e) => {
                    if (!(typeof window > 'u')) return eZ.get(e);
                },
                eV = (e) => {
                    let t = (function (e) {
                        let t = e('i18n-jwt-token', void 0);
                        return t ? { 'X-Authorization': t } : {};
                    })(eN);
                    for (let [r, n] of Object.entries(t)) e.headers.set(r, n);
                };
            var eF = r(61048),
                eQ = r(9340),
                eY = r(51486);
            async function e$(e) {
                let {
                        tld: t,
                        env: eR,
                        serverDetectedLocale: eL,
                        changeLanguageToken: eE,
                        browserName: eM,
                        browserVersion: eO,
                        executionContextStore: eZ,
                        customApiPrefixUrl: eN,
                        customApiToken: e$,
                    } = e,
                    eJ = (0, eY.J)(await (0, e_.z)(eR, eN)),
                    eK = await (0, eH.B)(eR),
                    e0 = 'production' !== eR ? eV : void 0;
                return new l.Dt()
                    .registerMany({
                        [eD.SX]: (0, l.Gr)(() => eR),
                        [eD.tw]: (0, l.Gr)(() => eJ),
                        [eD.P0]: (0, l.Gr)(() => new a.q(eK)),
                        [eD.Zi]: (0, l.Gr)(() => new ey.Y(eZ)),
                    })
                    .register(
                        eD.WA,
                        (0, l.Gr)((e) => {
                            let t = e.get(eD.Zi);
                            return new eS.V(t);
                        }),
                    )
                    .registerMany({
                        [eD.Zf]: (0, l.Gr)((e) => {
                            let t = e.get(eD.P0).get(eT.qV);
                            return new p.r({
                                maxLogLevel: m.cm.DEBUG,
                                secureFields: eC.x,
                                disableLogToConsole: !t,
                                additionalData: {
                                    get puid() {
                                        return e.get(eD.WA).getPassportUid();
                                    },
                                },
                            });
                        }),
                        [eD.TK]: (0, l.Gr)(
                            (e) =>
                                new ((0, eX.b)(p.r))({
                                    maxLogLevel: m.cm.DEBUG,
                                    secureFields: eC.x,
                                    disableLogToConsole: 'development' !== e.get(eD.SX),
                                    additionalData: {
                                        get puid() {
                                            return e.get(eD.WA).getPassportUid();
                                        },
                                    },
                                }),
                        ),
                        [eD.oo]: (0, l.Gr)(() => new ew.V8()),
                        [eD.DP]: (0, l.Gr)(() => new ew.V8()),
                        [eD.RG]: (0, l.Gr)(async (e) => {
                            let {
                                mocks: { enabled: n, mocksProviderUrl: i, urlCapturePattern: s },
                            } = e.get(eD.tw);
                            if (!n) return () => Promise.resolve(null);
                            let { initMocks: a } = await Promise.all([r.e(8387), r.e(9829)]).then(r.bind(r, 69829)),
                                l = e.get(eD.DP),
                                g = e.get(eD.Zf),
                                u = 'production' === e.get(eD.SX) ? '/rsc-cache-worker.js' : '',
                                c = () => {
                                    var e;
                                    return null != (e = l.get(ev.c.MocksConfiguration, !1)) ? e : null;
                                };
                            return () =>
                                a({
                                    getMocksConfiguration: c,
                                    log: (e, t) => g.debug('[Mocks] | client: '.concat(e), t),
                                    mocksProviderUrl: i,
                                    serviceWorkerUrl: u,
                                    urlCapturePattern: (0, o.getTldHost)(s, t, eb.B),
                                }).catch((e) => g.debug('[Mocks] | client: initialization failed. '.concat(e)));
                        }),
                        [eD.U2]: (0, l.Gr)(() => new ew.si()),
                        [eD.vH]: (0, l.Gr)(() => new ew.fW()),
                        [eD.y$]: (0, l.Gr)(() => new eA.Mz({ config: { useEntitiesStorage: !1, useFileStorage: !1, useResponseCacheStorage: !1 } })),
                        [eD.Xc]: (0, l.Gr)((e) => {
                            let r = e.get(eD.oo),
                                n = e.get(eD.Zf),
                                { i18n: i } = e.get(eD.tw),
                                s = new Date(Date.now() + 24 * i.cookieExpirationDays * 36e5);
                            return new eW.E({
                                serverDetectedLocale: eL,
                                logger: n,
                                changeLanguageHandler: new eB(t, eE),
                                storage: {
                                    get: () => r.get(ev.c.SavedUserLanguage, !1),
                                    set(e) {
                                        r.set(ev.c.SavedUserLanguage, e, { path: '/', domain: window.location.hostname, expires: s, secure: !0 }, !1);
                                    },
                                },
                            });
                        }),
                        [eD.Hm]: (0, l.P9)(
                            () =>
                                function () {
                                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                    return new c.Q(e);
                                },
                        ),
                        [eD.gu]: (0, l.P9)(
                            () =>
                                function () {
                                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                    return new u.S(e);
                                },
                        ),
                    })
                    .registerMany({
                        [eD.QG]: (0, l.Gr)((e) => new eG(e.get(eD.DP), e.get(eD.tw), e.get(eD.Xc).getLanguage(), e.get(eD.WA))),
                        [eD.OP]: (0, l.P9)(
                            (e) =>
                                function () {
                                    var t, r, n, i, s, o;
                                    let a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                        l = arguments.length > 1 ? arguments[1] : void 0,
                                        g = e.get(eD.Zf),
                                        {
                                            resources: { musicExternalApi: u },
                                        } = e.get(eD.tw),
                                        c = new eC.N(g),
                                        d = new ez(g);
                                    return (
                                        (a.timeout = u.defaultTimeout),
                                        (a.hooks = {
                                            afterResponse: [d.afterResponseHook, ...((null == a || null == (t = a.hooks) ? void 0 : t.afterResponse) || [])],
                                            afterTimeout: [c.beforeErrorHook, ...((null == a || null == (r = a.hooks) ? void 0 : r.afterTimeout) || [])],
                                            beforeError: [c.beforeErrorHook, ...((null == a || null == (n = a.hooks) ? void 0 : n.beforeError) || [])],
                                            beforeRequest: [
                                                eF.x,
                                                (0, eF.u)(e$),
                                                ...(e0 ? [e0] : []),
                                                d.beforeRequestHook,
                                                ...((null == a || null == (i = a.hooks) ? void 0 : i.beforeRequest) || []),
                                            ],
                                            beforeRetry: [eQ.i, c.beforeRetryHook, ...((null == a || null == (s = a.hooks) ? void 0 : s.beforeRetry) || [])],
                                            onRequestDone: [...((null == a || null == (o = a.hooks) ? void 0 : o.onRequestDone) || [])],
                                        }),
                                        l(a)
                                    );
                                },
                        ),
                    })
                    .registerMany({
                        [eD.A4]: (0, l.P9)(
                            (e) =>
                                function () {
                                    var r;
                                    let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                        i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e.get(eD.OP),
                                        s = e.get(eD.QG),
                                        { resources: a } = e.get(eD.tw),
                                        l = i({ credentials: 'include' }, e.get(eD.Hm)),
                                        { prefixUrl: g, timeouts: u, retryPolicyConfig: c } = a.musicExternalApi,
                                        d = e.get(eD.Xc).getLanguage(),
                                        m = new A.Q(l, {
                                            prefixUrl: (0, o.getTldHost)(g, t, eb.B),
                                            retryPolicyConfig: c,
                                            timeouts: u.accountResource,
                                            params: {
                                                common: {
                                                    client: (0, eP._)(),
                                                    language: d,
                                                    get multiAuthUserId() {
                                                        return e.get(eD.WA).getPassportUid();
                                                    },
                                                },
                                            },
                                        });
                                    return (
                                        (n.hooks = { beforeError: [(0, ek.o)(s, m), ...((null == n || null == (r = n.hooks) ? void 0 : r.beforeError) || [])] }),
                                        i(n, e.get(eD.Hm))
                                    );
                                },
                        ),
                        [eD.mr]: (0, l.P9)(
                            (e) =>
                                function () {
                                    var t, r, n, i, s, o;
                                    let a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                        l = e.get(eD.Hm),
                                        g = e.get(eD.Zf),
                                        {
                                            resources: { musicExternalApi: u },
                                        } = e.get(eD.tw),
                                        c = new eC.N(g);
                                    return (
                                        (a.timeout = u.defaultTimeout),
                                        (a.hooks = {
                                            afterResponse: [...((null == a || null == (t = a.hooks) ? void 0 : t.afterResponse) || [])],
                                            afterTimeout: [c.beforeErrorHook, ...((null == a || null == (r = a.hooks) ? void 0 : r.afterTimeout) || [])],
                                            beforeError: [c.beforeErrorHook, ...((null == a || null == (n = a.hooks) ? void 0 : n.beforeError) || [])],
                                            beforeRequest: [eF.x, ...((null == a || null == (i = a.hooks) ? void 0 : i.beforeRequest) || [])],
                                            beforeRetry: [eQ.i, c.beforeRetryHook, ...((null == a || null == (s = a.hooks) ? void 0 : s.beforeRetry) || [])],
                                            onRequestDone: [...((null == a || null == (o = a.hooks) ? void 0 : o.onRequestDone) || [])],
                                        }),
                                        l(a)
                                    );
                                },
                        ),
                    })
                    .register(
                        eD.CR,
                        (0, l.P9)(
                            (e) =>
                                function () {
                                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                    return e.get(eD.A4)(t, e.get(eD.gu));
                                },
                        ),
                    )
                    .registerMany({
                        [eD.$I]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eD.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                a = e.get(eD.Xc).getLanguage(),
                                l = e.get(eD.A4)({ credentials: 'include' });
                            return new A.Q(l, {
                                prefixUrl: (0, o.getTldHost)(n, t, eb.B),
                                retryPolicyConfig: s,
                                timeouts: i.accountResource,
                                params: {
                                    common: {
                                        client: (0, eP._)(),
                                        language: a,
                                        get multiAuthUserId() {
                                            return e.get(eD.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eD._1]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eD.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                a = e.get(eD.Xc).getLanguage(),
                                l = e.get(eD.A4)({ credentials: 'include' });
                            return new w.d(l, {
                                prefixUrl: (0, o.getTldHost)(n, t, eb.B),
                                retryPolicyConfig: s,
                                timeouts: i.usersResource,
                                params: {
                                    common: {
                                        client: (0, eP._)(),
                                        language: a,
                                        get multiAuthUserId() {
                                            return e.get(eD.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eD.V3]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eD.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                a = e.get(eD.Xc).getLanguage(),
                                l = e.get(eD.A4)({ credentials: 'include' });
                            return new U.G(l, {
                                prefixUrl: (0, o.getTldHost)(n, t, eb.B),
                                retryPolicyConfig: s,
                                timeouts: i.landingResource,
                                params: {
                                    common: {
                                        client: (0, eP._)(),
                                        language: a,
                                        get multiAuthUserId() {
                                            return e.get(eD.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eD.Lb]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eD.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                a = e.get(eD.Xc).getLanguage(),
                                l = e.get(eD.A4)({ credentials: 'include' });
                            return new f.H(l, {
                                prefixUrl: (0, o.getTldHost)(n, t, eb.B),
                                retryPolicyConfig: s,
                                timeouts: i.landing3Resource,
                                params: {
                                    common: {
                                        client: (0, eP._)(),
                                        language: a,
                                        get multiAuthUserId() {
                                            return e.get(eD.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eD.tz]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eD.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                a = e.get(eD.Xc).getLanguage(),
                                l = e.get(eD.A4)({ credentials: 'include' });
                            return new x.B(l, {
                                prefixUrl: (0, o.getTldHost)(n, t, eb.B),
                                retryPolicyConfig: s,
                                timeouts: i.landingResource,
                                params: {
                                    common: {
                                        client: (0, eP._)(),
                                        language: a,
                                        get multiAuthUserId() {
                                            return e.get(eD.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eD.$8]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eD.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                a = e.get(eD.Xc).getLanguage(),
                                l = e.get(eD.A4)({ credentials: 'include' });
                            return new P.w(l, {
                                prefixUrl: (0, o.getTldHost)(n, t, eb.B),
                                retryPolicyConfig: s,
                                timeouts: i.libraryResource,
                                params: {
                                    common: {
                                        client: (0, eP._)(),
                                        language: a,
                                        get multiAuthUserId() {
                                            return e.get(eD.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eD.Oo]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eD.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                a = e.get(eD.Xc).getLanguage(),
                                l = e.get(eD.A4)({ credentials: 'include' });
                            return new R.L(l, {
                                prefixUrl: (0, o.getTldHost)(n, t, eb.B),
                                retryPolicyConfig: s,
                                timeouts: i.tracksResource,
                                params: {
                                    common: {
                                        client: (0, eP._)(),
                                        language: a,
                                        get multiAuthUserId() {
                                            return e.get(eD.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eD.$5]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eD.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                a = e.get(eD.Xc).getLanguage(),
                                l = e.get(eD.A4)({ credentials: 'include' });
                            return new v._(l, {
                                prefixUrl: (0, o.getTldHost)(n, t, eb.B),
                                retryPolicyConfig: s,
                                timeouts: i.availabilityResource,
                                params: {
                                    common: {
                                        client: (0, eP._)(),
                                        language: a,
                                        get multiAuthUserId() {
                                            return e.get(eD.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eD.qT]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eD.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                a = e.get(eD.Xc).getLanguage(),
                                l = e.get(eD.A4)({ credentials: 'include' });
                            return new b.v(l, {
                                prefixUrl: (0, o.getTldHost)(n, t, eb.B),
                                retryPolicyConfig: s,
                                timeouts: i.getFileInfoResource,
                                params: {
                                    common: {
                                        client: (0, eP._)(),
                                        language: a,
                                        get multiAuthUserId() {
                                            return e.get(eD.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eD.X4]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eD.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                a = e.get(eD.Xc).getLanguage(),
                                l = e.get(eD.A4)({ credentials: 'include' });
                            return new L.a(l, {
                                prefixUrl: (0, o.getTldHost)(n, t, eb.B),
                                retryPolicyConfig: s,
                                timeouts: i.topResource,
                                params: {
                                    common: {
                                        client: (0, eP._)(),
                                        language: a,
                                        get multiAuthUserId() {
                                            return e.get(eD.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eD.O9]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eD.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                a = e.get(eD.Xc).getLanguage(),
                                l = e.get(eD.A4)({ credentials: 'include' });
                            return new E.b(l, {
                                prefixUrl: (0, o.getTldHost)(n, t, eb.B),
                                retryPolicyConfig: s,
                                timeouts: i.artistsResource,
                                params: {
                                    common: {
                                        client: (0, eP._)(),
                                        language: a,
                                        get multiAuthUserId() {
                                            return e.get(eD.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eD.E]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eD.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                a = e.get(eD.Xc).getLanguage(),
                                l = e.get(eD.A4)({ credentials: 'include' });
                            return new G.V(l, {
                                prefixUrl: (0, o.getTldHost)(n, t, eb.B),
                                retryPolicyConfig: s,
                                timeouts: i.slidesResource,
                                params: {
                                    common: {
                                        client: (0, eP._)(),
                                        language: a,
                                        get multiAuthUserId() {
                                            return e.get(eD.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eD.wH]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eD.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                a = e.get(eD.Xc).getLanguage(),
                                l = e.get(eD.A4)({ credentials: 'include' });
                            return new k.c(l, {
                                prefixUrl: (0, o.getTldHost)(n, t, eb.B),
                                retryPolicyConfig: s,
                                timeouts: i.redAlertResource,
                                params: {
                                    common: {
                                        client: (0, eP._)(),
                                        language: a,
                                        get multiAuthUserId() {
                                            return e.get(eD.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eD.ok]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eD.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                a = e.get(eD.Xc).getLanguage(),
                                l = e.get(eD.A4)({ credentials: 'include' });
                            return new T.Z(l, {
                                prefixUrl: (0, o.getTldHost)(n, t, eb.B),
                                retryPolicyConfig: s,
                                timeouts: i.rotorResource,
                                params: {
                                    common: {
                                        client: (0, eP._)(),
                                        language: a,
                                        get multiAuthUserId() {
                                            return e.get(eD.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eD.X8]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eD.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                a = e.get(eD.Xc).getLanguage(),
                                l = e.get(eD.A4)({ credentials: 'include' });
                            return new H.w(l, {
                                prefixUrl: (0, o.getTldHost)(n, t, eb.B),
                                retryPolicyConfig: s,
                                timeouts: i.waveResource,
                                params: {
                                    common: {
                                        client: (0, eP._)(),
                                        language: a,
                                        get multiAuthUserId() {
                                            return e.get(eD.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eD.yq]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eD.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                a = e.get(eD.Xc).getLanguage(),
                                l = e.get(eD.A4)({ credentials: 'include' });
                            return new _.p(l, {
                                prefixUrl: (0, o.getTldHost)(n, t, eb.B),
                                retryPolicyConfig: s,
                                timeouts: i.searchResource,
                                params: {
                                    common: {
                                        client: (0, eP._)(),
                                        language: a,
                                        get multiAuthUserId() {
                                            return e.get(eD.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eD.NN]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eD.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                a = e.get(eD.Xc).getLanguage(),
                                l = e.get(eD.A4)({ credentials: 'include' });
                            return new I.v(l, {
                                prefixUrl: (0, o.getTldHost)(n, t, eb.B),
                                retryPolicyConfig: s,
                                timeouts: i.searchResource,
                                params: {
                                    common: {
                                        client: (0, eP._)(),
                                        language: a,
                                        get multiAuthUserId() {
                                            return e.get(eD.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eD.qN]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eD.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                a = e.get(eD.Xc).getLanguage(),
                                l = e.get(eD.A4)({ credentials: 'include' });
                            return new y.T(l, {
                                prefixUrl: (0, o.getTldHost)(n, t, eb.B),
                                retryPolicyConfig: s,
                                timeouts: i.playlistResource,
                                params: {
                                    common: {
                                        client: (0, eP._)(),
                                        language: a,
                                        get multiAuthUserId() {
                                            return e.get(eD.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eD.ro]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eD.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                a = e.get(eD.Xc).getLanguage(),
                                l = e.get(eD.A4)({ credentials: 'include' });
                            return new B.e(l, {
                                prefixUrl: (0, o.getTldHost)(n, t, eb.B),
                                retryPolicyConfig: s,
                                timeouts: i.playlistsResource,
                                params: {
                                    common: {
                                        client: (0, eP._)(),
                                        language: a,
                                        get multiAuthUserId() {
                                            return e.get(eD.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eD.nM]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eD.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                a = e.get(eD.Xc).getLanguage(),
                                l = e.get(eD.A4)({ credentials: 'include' });
                            return new W.o(l, {
                                prefixUrl: (0, o.getTldHost)(n, t, eb.B),
                                retryPolicyConfig: s,
                                timeouts: i.pinResource,
                                params: {
                                    common: {
                                        client: (0, eP._)(),
                                        language: a,
                                        get multiAuthUserId() {
                                            return e.get(eD.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eD.Ut]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eD.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                a = e.get(eD.Xc).getLanguage(),
                                l = e.get(eD.A4)({ credentials: 'include' });
                            return new X.$(l, {
                                prefixUrl: (0, o.getTldHost)(n, t, eb.B),
                                retryPolicyConfig: s,
                                timeouts: i.metatagsResource,
                                params: {
                                    common: {
                                        client: (0, eP._)(),
                                        language: a,
                                        get multiAuthUserId() {
                                            return e.get(eD.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eD.K1]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eD.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                a = e.get(eD.Xc).getLanguage(),
                                l = e.get(eD.A4)({ credentials: 'include' });
                            return new C.p(l, {
                                prefixUrl: (0, o.getTldHost)(n, t, eb.B),
                                retryPolicyConfig: s,
                                timeouts: i.tagResource,
                                params: {
                                    common: {
                                        client: (0, eP._)(),
                                        language: a,
                                        get multiAuthUserId() {
                                            return e.get(eD.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eD.eu]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eD.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                a = e.get(eD.Xc).getLanguage(),
                                l = e.get(eD.A4)({ credentials: 'include' });
                            return new q.D(l, {
                                prefixUrl: (0, o.getTldHost)(n, t, eb.B),
                                retryPolicyConfig: s,
                                timeouts: i.feedResource,
                                params: {
                                    common: {
                                        client: (0, eP._)(),
                                        language: a,
                                        get multiAuthUserId() {
                                            return e.get(eD.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eD.aE]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eD.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                a = e.get(eD.Xc).getLanguage(),
                                l = e.get(eD.A4)({ credentials: 'include' });
                            return new S.l(l, {
                                prefixUrl: (0, o.getTldHost)(n, t, eb.B),
                                retryPolicyConfig: s,
                                timeouts: i.pinsResource,
                                params: {
                                    common: {
                                        client: (0, eP._)(),
                                        language: a,
                                        get multiAuthUserId() {
                                            return e.get(eD.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eD.ki]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eD.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                a = e.get(eD.Xc).getLanguage(),
                                l = e.get(eD.A4)({ credentials: 'include' });
                            return new D.I(l, {
                                prefixUrl: (0, o.getTldHost)(n, t, eb.B),
                                retryPolicyConfig: s,
                                timeouts: i.musicHistoryResource,
                                params: {
                                    common: {
                                        client: (0, eP._)(),
                                        language: a,
                                        get multiAuthUserId() {
                                            return e.get(eD.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eD.c9]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eD.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                a = e.get(eD.Xc).getLanguage(),
                                l = e.get(eD.A4)({ credentials: 'include' });
                            return new M.s(l, {
                                prefixUrl: (0, o.getTldHost)(n, t, eb.B),
                                retryPolicyConfig: s,
                                timeouts: i.dynamicPagesResource,
                                params: {
                                    common: {
                                        client: (0, eP._)(),
                                        language: a,
                                        get multiAuthUserId() {
                                            return e.get(eD.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eD.en]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eD.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                a = e.get(eD.Xc).getLanguage(),
                                l = e.get(eD.A4)({ credentials: 'include' });
                            return new z.B(l, {
                                prefixUrl: (0, o.getTldHost)(n, t, eb.B),
                                retryPolicyConfig: s,
                                timeouts: i.chartResource,
                                params: {
                                    common: {
                                        client: (0, eP._)(),
                                        language: a,
                                        get multiAuthUserId() {
                                            return e.get(eD.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eD.jQ]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eD.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                a = e.get(eD.Xc).getLanguage(),
                                l = e.get(eD.A4)({ credentials: 'include' });
                            return new j._(l, {
                                prefixUrl: (0, o.getTldHost)(n, t, eb.B),
                                retryPolicyConfig: s,
                                timeouts: i.clipsResource,
                                params: {
                                    common: {
                                        client: (0, eP._)(),
                                        language: a,
                                        get multiAuthUserId() {
                                            return e.get(eD.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eD.cZ]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eD.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                a = e.get(eD.Xc).getLanguage(),
                                l = e.get(eD.A4)({ credentials: 'include' });
                            return new O.c(l, {
                                prefixUrl: (0, o.getTldHost)(n, t, eb.B),
                                retryPolicyConfig: s,
                                timeouts: i.lyricViewsResource,
                                params: {
                                    common: {
                                        client: (0, eP._)(),
                                        language: a,
                                        get multiAuthUserId() {
                                            return e.get(eD.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eD.Zl]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eD.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                a = e.get(eD.Xc).getLanguage(),
                                l = e.get(eD.A4)({ credentials: 'include' });
                            return new Z.D(l, {
                                prefixUrl: (0, o.getTldHost)(n, t, eb.B),
                                retryPolicyConfig: s,
                                timeouts: i.nonMusicResource,
                                params: {
                                    common: {
                                        client: (0, eP._)(),
                                        language: a,
                                        get multiAuthUserId() {
                                            return e.get(eD.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eD.CN]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eD.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                a = e.get(eD.Xc).getLanguage(),
                                l = e.get(eD.A4)({ credentials: 'include' });
                            return new N.N(l, {
                                prefixUrl: (0, o.getTldHost)(n, t, eb.B),
                                retryPolicyConfig: s,
                                timeouts: i.donationResource,
                                params: {
                                    common: {
                                        client: (0, eP._)(),
                                        language: a,
                                        get multiAuthUserId() {
                                            return e.get(eD.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eD.JM]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eD.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                a = e.get(eD.Xc).getLanguage(),
                                l = e.get(eD.A4)({ credentials: 'include' });
                            return new V.c(l, {
                                prefixUrl: (0, o.getTldHost)(n, t, eb.B),
                                retryPolicyConfig: s,
                                timeouts: i.streamsResource,
                                params: {
                                    common: {
                                        client: (0, eP._)(),
                                        language: a,
                                        get multiAuthUserId() {
                                            return e.get(eD.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eD.P1]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eD.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                a = e.get(eD.Xc).getLanguage(),
                                l = e.get(eD.A4)({ credentials: 'include' });
                            return new F.S(l, {
                                prefixUrl: (0, o.getTldHost)(n, t, eb.B),
                                retryPolicyConfig: s,
                                timeouts: i.loaderResource,
                                params: {
                                    common: {
                                        client: (0, eP._)(),
                                        language: a,
                                        get multiAuthUserId() {
                                            return e.get(eD.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eD.re]: (0, l.Gr)((e) => {
                            let { resources: t } = e.get(eD.tw),
                                { timeouts: r, retryPolicyConfig: n } = t.musicExternalApi,
                                i = e.get(eD.Xc).getLanguage(),
                                s = e.get(eD.mr)({ credentials: 'omit' });
                            return new Q.s(s, {
                                prefixUrl: '',
                                retryPolicyConfig: n,
                                timeouts: r.prefixlessResource,
                                params: {
                                    common: {
                                        client: (0, eP._)(),
                                        language: i,
                                        get multiAuthUserId() {
                                            return e.get(eD.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eD.Lk]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eD.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                a = e.get(eD.Xc).getLanguage(),
                                l = e.get(eD.A4)({ credentials: 'include' });
                            return new Y.g(l, {
                                prefixUrl: (0, o.getTldHost)(n, t, eb.B),
                                retryPolicyConfig: s,
                                timeouts: i.filtersResource,
                                params: {
                                    common: {
                                        client: (0, eP._)(),
                                        language: a,
                                        get multiAuthUserId() {
                                            return e.get(eD.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eD.uM]: (0, l.Gr)((e) => {
                            var r;
                            let { acqOffers: i, rumSettings: s } = e.get(eD.tw),
                                { brand: o, service: a, environment: l, appVersion: g } = i,
                                { platform: u, page: c } = s,
                                d = e.get(eD.QG),
                                m = e.get(eD.Xc).getLanguage(),
                                p = e.get(eD.A4),
                                h = d.token || null,
                                A = p({ credentials: h ? 'omit' : 'include' }),
                                { request_id: w, puid: U } = null != (r = e.get(eD.Zi).getStore()) ? r : {};
                            return new n.mZ({
                                brand: o,
                                service: a,
                                environment: l,
                                appVersion: g,
                                etld: 'yandex.'.concat(t),
                                platform: 'Web',
                                lang: m,
                                oAuthToken: h,
                                authMethod: h ? 'oauth' : 'default',
                                requester: (0, ej.n)(A),
                                puid: (null == U ? void 0 : U.toString()) || null,
                                rumOptions: { platform: u, page: c, requestId: w },
                            });
                        }),
                        [eD.$$]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eD.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                a = e.get(eD.Xc).getLanguage(),
                                l = e.get(eD.A4)({ credentials: 'include' });
                            return new $.E(l, {
                                prefixUrl: (0, o.getTldHost)(n, t, eb.B),
                                retryPolicyConfig: s,
                                timeouts: i.ugcResource,
                                params: {
                                    common: {
                                        client: (0, eP._)(),
                                        language: a,
                                        get multiAuthUserId() {
                                            return e.get(eD.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eD.sv]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eD.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                a = e.get(eD.Xc).getLanguage(),
                                l = e.get(eD.A4)({ credentials: 'include' });
                            return new J.L(l, {
                                prefixUrl: (0, o.getTldHost)(n, t, eb.B),
                                retryPolicyConfig: s,
                                timeouts: i.collectionResource,
                                params: {
                                    common: {
                                        client: (0, eP._)(),
                                        language: a,
                                        get multiAuthUserId() {
                                            return e.get(eD.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eD.gd]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eD.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                a = e.get(eD.Xc).getLanguage(),
                                l = e.get(eD.A4)({ credentials: 'include' });
                            return new K.z(l, {
                                prefixUrl: (0, o.getTldHost)(n, t, eb.B),
                                retryPolicyConfig: s,
                                timeouts: i.adsResource,
                                params: {
                                    common: {
                                        client: (0, eP._)(),
                                        language: a,
                                        get multiAuthUserId() {
                                            return e.get(eD.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eD.Ez]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eD.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                a = e.get(eD.Xc).getLanguage(),
                                l = e.get(eD.A4)({ credentials: 'include' });
                            return new ee.l(l, {
                                prefixUrl: (0, o.getTldHost)(n, t, eb.B),
                                retryPolicyConfig: s,
                                timeouts: i.personalResource,
                                params: {
                                    common: {
                                        client: (0, eP._)(),
                                        language: a,
                                        get multiAuthUserId() {
                                            return e.get(eD.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eD.N1]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eD.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                a = e.get(eD.Xc).getLanguage(),
                                l = e.get(eD.A4)({ credentials: 'include' });
                            return new et.H(l, {
                                prefixUrl: (0, o.getTldHost)(n, t, eb.B),
                                retryPolicyConfig: s,
                                timeouts: i.disclaimersResource,
                                params: {
                                    common: {
                                        client: (0, eP._)(),
                                        language: a,
                                        get multiAuthUserId() {
                                            return e.get(eD.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eD.u2]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eD.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                a = e.get(eD.Xc).getLanguage(),
                                l = e.get(eD.A4)({ credentials: 'include' });
                            return new er.J(l, {
                                prefixUrl: (0, o.getTldHost)(n, t, eb.B),
                                retryPolicyConfig: s,
                                timeouts: i.familyResource,
                                params: {
                                    common: {
                                        client: (0, eP._)(),
                                        language: a,
                                        get multiAuthUserId() {
                                            return e.get(eD.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eD.TD]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eD.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                a = e.get(eD.Xc).getLanguage(),
                                l = e.get(eD.A4)({ credentials: 'include' });
                            return new en.L(l, {
                                prefixUrl: (0, o.getTldHost)(n, t, eb.B),
                                retryPolicyConfig: s,
                                timeouts: i.childrenLandingResource,
                                params: {
                                    common: {
                                        client: (0, eP._)(),
                                        language: a,
                                        get multiAuthUserId() {
                                            return e.get(eD.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eD.wK]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eD.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                a = e.get(eD.Xc).getLanguage(),
                                l = e.get(eD.A4)({ credentials: 'include' });
                            return new ei.u(l, {
                                prefixUrl: (0, o.getTldHost)(n, t, eb.B),
                                retryPolicyConfig: s,
                                timeouts: i.landingBlocksResource,
                                params: {
                                    common: {
                                        client: (0, eP._)(),
                                        language: a,
                                        get multiAuthUserId() {
                                            return e.get(eD.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eD.dh]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eD.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                a = e.get(eD.Xc).getLanguage(),
                                l = e.get(eD.A4)({ credentials: 'include' });
                            return new es.q(l, {
                                prefixUrl: (0, o.getTldHost)(n, t, eb.B),
                                retryPolicyConfig: s,
                                timeouts: i.promoResource,
                                params: {
                                    common: {
                                        client: (0, eP._)(),
                                        language: a,
                                        get multiAuthUserId() {
                                            return e.get(eD.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eD.LC]: (0, l.Gr)((e) => {
                            let { resources: t, player: r } = e.get(eD.tw),
                                { timeouts: n, retryPolicyConfig: i } = t.musicExternalApi,
                                s = e.get(eD.CR)({ credentials: 'include' });
                            return new eo.g(s, {
                                prefixUrl: r.telemetry.telemetryUrl,
                                retryPolicyConfig: i,
                                timeouts: n.telemetryResouce,
                                params: { common: { client: (0, eP._)() } },
                            });
                        }),
                        [eD.W5]: (0, l.Gr)((e) => {
                            let { resources: t, player: r } = e.get(eD.tw),
                                { retryPolicyConfig: n } = t.musicExternalApi,
                                i = e.get(eD.CR)({ credentials: 'include' });
                            return new ea.N(i, { prefixUrl: r.telemetry.rumUrl, retryPolicyConfig: n, params: { common: { client: (0, eP._)() } } });
                        }),
                        [eD.EN]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eD.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                a = e.get(eD.Xc).getLanguage(),
                                l = e.get(eD.A4)({ credentials: 'include' });
                            return new el._(l, {
                                prefixUrl: (0, o.getTldHost)(n, t, eb.B),
                                retryPolicyConfig: s,
                                timeouts: i.afterTrackResource,
                                params: {
                                    common: {
                                        client: (0, eP._)(),
                                        language: a,
                                        get multiAuthUserId() {
                                            return e.get(eD.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eD.PL]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eD.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                a = e.get(eD.Xc).getLanguage(),
                                l = e.get(eD.A4)({ credentials: 'include' });
                            return new eg.w(l, {
                                prefixUrl: (0, o.getTldHost)(n, t, eb.B),
                                retryPolicyConfig: s,
                                timeouts: i.labelsResource,
                                params: {
                                    common: {
                                        client: (0, eP._)(),
                                        language: a,
                                        get multiAuthUserId() {
                                            return e.get(eD.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eD.DT]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eD.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                a = e.get(eD.Xc).getLanguage(),
                                l = e.get(eD.A4)({ credentials: 'include' });
                            return new eu.O(l, {
                                prefixUrl: (0, o.getTldHost)(n, t, eb.B),
                                retryPolicyConfig: s,
                                timeouts: i.concertsResource,
                                params: {
                                    common: {
                                        client: (0, eP._)(),
                                        language: a,
                                        get multiAuthUserId() {
                                            return e.get(eD.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eD.dA]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eD.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                a = e.get(eD.Xc).getLanguage(),
                                l = e.get(eD.A4)({ credentials: 'include' });
                            return new ec.Q(l, {
                                prefixUrl: (0, o.getTldHost)(n, t, eb.B),
                                retryPolicyConfig: s,
                                timeouts: i.wordsResource,
                                params: {
                                    common: {
                                        client: (0, eP._)(),
                                        language: a,
                                        get multiAuthUserId() {
                                            return e.get(eD.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eD.$Y]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eD.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                a = e.get(eD.Xc).getLanguage(),
                                l = e.get(eD.A4)({ credentials: 'include' });
                            return new ed.C(l, {
                                prefixUrl: (0, o.getTldHost)(n, t, eb.B),
                                retryPolicyConfig: s,
                                timeouts: i.wheelResource,
                                params: {
                                    common: {
                                        client: (0, eP._)(),
                                        language: a,
                                        get multiAuthUserId() {
                                            return e.get(eD.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eD.VR]: (0, l.P9)((e) => () => {
                            let { resources: t } = e.get(eD.tw),
                                r = e.get(eD.A4)({ credentials: 'omit' }),
                                n = new em.o(r, t.networkReachability.url);
                            return (0, eq.P)({ probe: (e) => n.ping({ signal: e }) });
                        }),
                        [eD.zj]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eD.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                a = e.get(eD.Xc).getLanguage(),
                                l = e.get(eD.A4)({ credentials: 'include' });
                            return new ep.U(l, {
                                prefixUrl: (0, o.getTldHost)(n, t, eb.B),
                                retryPolicyConfig: s,
                                timeouts: i.lumenResource,
                                params: {
                                    common: {
                                        client: (0, eP._)(),
                                        language: a,
                                        get multiAuthUserId() {
                                            return e.get(eD.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eD.vg]: (0, l.Gr)(() => (0, eU.a)()),
                    })
                    .register(
                        eD.ff,
                        (0, l.Gr)((e) => {
                            let t = e.get(eD.N1);
                            return new g.AS({ dataSource: new eI.C(t) });
                        }),
                    )
                    .registerMany({
                        [eD.UB]: (0, l.Gr)((e) => {
                            let t = e.get(eD.vg);
                            return new h.B(t);
                        }),
                        [eD.Tq]: (0, l.Gr)((e) => {
                            var t;
                            let r = e.get(eD.W5);
                            return (null == (t = window.Ya) ? void 0 : t.Rum) ? new h.G((0, ex.y)(), r, window.Ya.Rum) : null;
                        }),
                    })
                    .register(
                        eD.by,
                        (0, l.Gr)((e) => {
                            let t = e.get(eD.oo),
                                r = e.get(eD.Zf),
                                n = (0, s.A)(),
                                o = {
                                    info: { app_name: eM || 'Browser', app_version: eO || '', title: 'Browser '.concat(eM), device_id: n, type: i.bq.WEB },
                                    volumeGranularity: 20,
                                    get defaultVolume() {
                                        var a;
                                        return null != (a = t.get(ev.c.YmPlayerVolume)) ? a : void 0;
                                    },
                                },
                                l = e.get(eD.WA).getPassportUid(),
                                g = e.get(eD.QG),
                                u = e.get(eD.UB),
                                c = e.get(eD.Tq),
                                d = [new i.zT(u)];
                            return (
                                c && d.push(new i.qP(c)),
                                new i.Jd({
                                    logger: r,
                                    deviceConfig: o,
                                    multiAuthUserId: l,
                                    oauth: g.token,
                                    ynisonConnectionConfig: eJ.ynisonConnectionConfig,
                                    metricsTransport: d,
                                    variables: {
                                        isShadow: !0,
                                        get puid() {
                                            return e.get(eD.WA).getPassportUid();
                                        },
                                    },
                                })
                            );
                        }),
                    )
                    .register(
                        eD.ni,
                        (0, l.Gr)((e) => {
                            let t = e.get(eD.Zf);
                            return new d.SU({
                                skeletonFactory: new ef.F6({ landingResource: e.get(eD.V3), artistsResource: e.get(eD.O9), tabIdQueryParamController: new ef.ET() }),
                                visibilityDetectorFactory: new eh.O9(),
                                plugins: [new ef.X({ logger: t })],
                            });
                        }),
                    );
            }
        },
    },
]);
