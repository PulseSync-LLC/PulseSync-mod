'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3963],
    {
        53963: (e, t, r) => {
            (r.r(t), r.d(t, { createClientContainer: () => e0 }));
            var o = r(98283),
                n = r(30282),
                s = r(77348),
                i = r(40441),
                a = r(8819),
                l = r(32813),
                c = r(54264),
                u = r(75994),
                g = r(44084),
                d = r(52028),
                h = r(27253),
                G = r(10285),
                p = r(42668),
                f = r(83620),
                R = r(77584),
                v = r(35264),
                w = r(33850),
                b = r(86057),
                m = r(82740),
                V = r(32030),
                k = r(44928),
                P = r(39968),
                C = r(72882),
                y = r(7527),
                L = r(30868),
                U = r(25454),
                A = r(94899),
                E = r(46414),
                q = r(29636),
                S = r(27822),
                D = r(7809),
                H = r(64966),
                W = r(54300),
                T = r(82556),
                _ = r(24041),
                x = r(66880),
                B = r(80690),
                M = r(97860),
                I = r(96614),
                Z = r(51751),
                z = r(63111),
                X = r(61624),
                N = r(93452),
                O = r(87671),
                Y = r(85281),
                j = r(2410),
                Q = r(28800),
                $ = r(60520),
                F = r(39964),
                K = r(80500),
                J = r(83692),
                ee = r(35486),
                et = r(63744),
                er = r(27114),
                eo = r(7588),
                en = r(48018),
                es = r(5993),
                ei = r(11551),
                ea = r(8868),
                el = r(95212),
                ec = r(9176),
                eu = r(92360),
                eg = r(78572),
                ed = r(91991),
                eh = r(22e3),
                eG = r(20049),
                ep = r(68900),
                ef = r(65140),
                eR = r(31015),
                ev = r(70030),
                ew = r(96820),
                eb = r(53647),
                em = r(70844),
                eV = r(31556),
                ek = r(8438),
                eP = r(9519),
                eC = r(54020),
                ey = r(15253),
                eL = r(44698);
            class eU extends eL.P {
                getRedirectUri() {
                    let e = ''.concat(this.pathname).concat(this.searchParams ? '?'.concat(this.searchParams) : '');
                    return 'https://'.concat(this.host).concat(e);
                }
                getPassportPushUrl(e) {
                    let {
                            passportCredentials: { host: t },
                        } = this.config,
                        r = (0, G.r)(t, this.tld, p.B),
                        o = new URLSearchParams({ retpath: e, uuid: (0, eC.A)() });
                    return ''.concat(r, '/push?').concat(o.toString());
                }
                get authorizationUrl() {
                    let e = this.getPassportHostWithTld(this.tld, p.B);
                    if (!e) return;
                    let t = new URLSearchParams({ origin: this.passportOrigin, retpath: this.getRedirectUri(), language: this.language });
                    return ''.concat(e, '/auth?').concat(t.toString());
                }
                get childPageUrl() {
                    let e = this.getPassportHostWithTld(this.tld, p.B);
                    if (!e) return;
                    let t = new URLSearchParams({ origin: this.passportOrigin, retpath: this.getRedirectUri(), language: this.language });
                    return ''.concat(e, '/auth/child/restrict?').concat(t.toString());
                }
                getAuthorizationUrlWithParams(e) {
                    let t = this.getPassportHostWithTld(this.tld, p.B);
                    if (t) return ''.concat(t, '/auth?').concat(e.toString());
                }
                get token() {}
                get yandexUid() {
                    return this.storage.get(ey.c.YandexUid, !1) || void 0;
                }
                constructor(e, t, r) {
                    (super(e, t), (0, eP._)(this, 'language', void 0), (this.language = r));
                }
            }
            class eA extends eU {
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
                    return this.storage.get(ey.c.YandexLogin, !1) || void 0;
                }
                async check() {}
                changeUser() {
                    var e;
                    if (void 0 === this.userId.getPassportUid()) return;
                    let t = 'auth-iframe-'.concat((0, eC.A)()),
                        r = (0, G.r)(this.config.passportCredentials.host, this.tld, p.B),
                        o = document.createElement('iframe'),
                        n = document.createElement('form');
                    (n.setAttribute('method', 'POST'),
                        n.setAttribute('action', ''.concat(r, '/passport?mode=embeddedauth')),
                        n.setAttribute('target', t),
                        n.setAttribute('class', 'hidden'),
                        o.setAttribute('name', t),
                        o.setAttribute('src', 'about:blank'),
                        o.setAttribute('class', 'hidden'));
                    let s = null != (e = this.storage.get(ey.c.YandexUid, !1)) ? e : '';
                    (Object.entries({
                        action: 'change_default',
                        uid: String(this.userId.getPassportUid()),
                        retpath: ''.concat(window.location.origin, '/login-status'),
                        yu: s,
                    }).forEach((e) => {
                        let [t, r] = e,
                            o = document.createElement('input');
                        (o.setAttribute('type', 'hidden'), o.setAttribute('name', t), o.setAttribute('value', r), n.appendChild(o));
                    }),
                        document.body.appendChild(n),
                        document.body.appendChild(o),
                        n.submit());
                }
                observe(e) {
                    if (e) {
                        ((this.observerCallback = this.checkPassportLoginCookieChangeWithMultiAuth.bind(this)), window.addEventListener('focus', this.observerCallback));
                        return;
                    }
                    this.intervalId = setInterval(this.checkPassportLoginCookieChange.bind(this), 5e3);
                }
                disconnect() {
                    (this.observerCallback && window.removeEventListener('focus', this.observerCallback), clearInterval(this.intervalId));
                }
                constructor(e, t, r, o) {
                    (super(e, t, r),
                        (0, eP._)(this, 'userId', void 0),
                        (0, eP._)(this, 'passportLoginCached', void 0),
                        (0, eP._)(this, 'intervalId', void 0),
                        (0, eP._)(this, 'observerCallback', void 0),
                        (this.userId = o),
                        (this.passportLoginCached = this.passportLogin));
                }
            }
            var eE = r(55267),
                eq = r(3629),
                eS = r(23405),
                eD = r(72694);
            class eH {
                onChangeLanguage(e) {
                    if ('string' == typeof this.token && this.token.length > 0) {
                        let t = 'https://yandex.'.concat(this.tld, '/portal/set/lang/'),
                            r = encodeURIComponent(window.location.href),
                            o = ''.concat(t, '?intl=').concat(e, '&retpath=').concat(r, '&sk=').concat(this.token);
                        window.location.assign(o);
                    } else window.location.reload();
                }
                constructor(e, t) {
                    ((0, eP._)(this, 'tld', void 0), (0, eP._)(this, 'token', void 0), (this.tld = e), (this.token = t));
                }
            }
            var eW = r(83602),
                eT = r(66059),
                e_ = r(42953),
                ex = r(8193),
                eB = r(43540),
                eM = r(4086),
                eI = r(71575),
                eZ = r(3744),
                ez = r(3024),
                eX = r(85230);
            let eN = (e) => {
                let { createDefaultHttpClient: t, defaultPrefixUrl: r, i18nStorage: o, publicConfig: n, userId: s } = e;
                return (e, i, a) => {
                    var l;
                    let c = n.resources.musicExternalApi,
                        u = null != (l = null == a ? void 0 : a.prefixUrl) ? l : r,
                        g = o.getLanguage(),
                        d = null == a ? void 0 : a.httpClient;
                    return (
                        void 0 === d && (d = t()),
                        new e(d, {
                            prefixUrl: u,
                            retryPolicyConfig: c.retryPolicyConfig,
                            timeouts: c.timeouts[i],
                            params: {
                                common: {
                                    client: (0, eX._)(),
                                    language: g,
                                    get multiAuthUserId() {
                                        return s.getPassportUid();
                                    },
                                },
                            },
                        })
                    );
                };
            };
            var eO = r(87123),
                eY = r(64965),
                ej = r(74527);
            let eQ = /^application\/json(;\s?charset=\S+)?$/;
            class e$ {
                async afterResponse(e) {
                    try {
                        if (!e.headers['content-range'] && e.headers['content-type'] && eQ.test(e.headers['content-type'])) {
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
                    ((0, eP._)(this, 'logger', void 0), (this.logger = e));
                }
            }
            var eF = r(71625);
            let eK = (e, t) => {
                let { browserName: r, browserVersion: o, newConnector: n } = t,
                    s = e.get(eM.oo),
                    i = e.get(eM.Zf),
                    a = (0, eC.A)(),
                    l = {
                        info: { app_name: r || 'Browser', app_version: o || '', title: 'Browser '.concat(r), device_id: a, type: eF.bq.WEB },
                        volumeGranularity: 20,
                        get defaultVolume() {
                            var c;
                            return null != (c = s.get(ey.c.YmPlayerVolume)) ? c : void 0;
                        },
                    },
                    u = e.get(eM.WA).getPassportUid(),
                    g = e.get(eM.QG),
                    d = e.get(eM.V4),
                    h = e.get(eM.UB),
                    G = e.get(eM.Tq),
                    p = [new eF.zT(h)];
                return (
                    G && p.push(new eF.qP(G)),
                    new eF.Jd({
                        logger: i,
                        deviceConfig: l,
                        multiAuthUserId: u,
                        oauth: g.token,
                        ynisonConnectionConfig: d.ynisonConnectionConfig,
                        metricsTransport: p,
                        variables: {
                            newConnector: n,
                            isShadow: !0,
                            get puid() {
                                return e.get(eM.WA).getPassportUid();
                            },
                        },
                    })
                );
            };
            var eJ = r(10466);
            async function e0(e) {
                let {
                        tld: t,
                        env: eP,
                        publicConfig: eC,
                        serverDetectedLocale: eL,
                        changeLanguageToken: eU,
                        browserName: eX,
                        browserVersion: eQ,
                        executionContextStore: eF,
                        customApiPrefixUrl: e0,
                        customApiToken: e4,
                    } = e,
                    e1 = (0, n.u0)(eC, t, e0),
                    e8 = await (0, eS.B)(eP),
                    e2 = 'production' !== eP ? eG.PW : void 0,
                    e5 = new i.Dt()
                        .registerMany({
                            [eM.SX]: (0, i.Gr)(() => eP),
                            [eM.S1]: (0, i.Gr)(() => (0, ez.k)()),
                            [eM.V4]: (0, i.Gr)(() => eC),
                            [eM.xF]: (0, i.Gr)(() => null),
                            [eM.qt]: (0, i.Gr)(() => e1),
                            [eM.P0]: (0, i.Gr)(() => new s.q(e8)),
                            [eM.Zi]: (0, i.Gr)(() => new eD.Y(eF)),
                        })
                        .register(
                            eM.WA,
                            (0, i.Gr)((e) => {
                                let t = e.get(eM.Zi);
                                return new eB.V(t);
                            }),
                        )
                        .registerMany({
                            [eM.Zf]: (0, i.Gr)((e) => {
                                let t = e.get(eM.P0).get(eq.qV);
                                return new g.r({
                                    maxLogLevel: u.cm.DEBUG,
                                    secureFields: ep.x,
                                    disableLogToConsole: !t,
                                    additionalData: {
                                        get puid() {
                                            return e.get(eM.WA).getPassportUid();
                                        },
                                    },
                                });
                            }),
                            [eM.TK]: (0, i.Gr)((e) =>
                                (0, eT.b)(
                                    new g.r({
                                        maxLogLevel: u.cm.DEBUG,
                                        secureFields: ep.x,
                                        disableLogToConsole: 'development' !== e.get(eM.SX),
                                        additionalData: {
                                            get puid() {
                                                return e.get(eM.WA).getPassportUid();
                                            },
                                        },
                                    }),
                                ),
                            ),
                            [eM.oo]: (0, i.Gr)(() => new eb.V8()),
                            [eM.DP]: (0, i.Gr)(() => new eb.V8()),
                            [eM.iP]: (0, i.Gr)((e) => {
                                let {
                                        rsc: { useCache: t },
                                    } = e.get(eM.V4),
                                    r = '/service-worker-cache.js';
                                t && (r = '/rsc-cache-worker.js');
                                let o = (0, eR.wS)(r);
                                return (o.initialize(), o);
                            }),
                            [eM.RG]: (0, i.Gr)(async (e) => {
                                let {
                                    mocks: { enabled: o, mocksProviderUrl: n, urlCapturePattern: s },
                                    rsc: { useCache: i },
                                } = e.get(eM.V4);
                                if (!o) return () => Promise.resolve(null);
                                let { initMocks: a } = await Promise.all([r.e(8019), r.e(3037)]).then(r.bind(r, 33037)),
                                    l = e.get(eM.DP),
                                    c = e.get(eM.Zf),
                                    u = '/mockServiceWorker.js';
                                i && (u = '/rsc-cache-worker.js');
                                let g = () => {
                                        var e;
                                        return null != (e = l.get(h.L, !1)) ? e : null;
                                    },
                                    d = s || ''.concat(e1, '/*');
                                return () =>
                                    a({
                                        getMocksConfiguration: g,
                                        log: (e, t) => c.debug('[Mocks] | client: '.concat(e), t),
                                        mocksProviderUrl: n,
                                        serviceWorkerUrl: u,
                                        urlCapturePattern: (0, G.r)(d, t, p.B),
                                    }).catch((e) => c.debug('[Mocks] | client: initialization failed. '.concat(e)));
                            }),
                            [eM.U2]: (0, i.Gr)(() => new eb.si()),
                            [eM.vH]: (0, i.Gr)(() => new eb.fW()),
                            [eM.y$]: (0, i.Gr)(() => new ew.Mz({ config: { useEntitiesStorage: !1, useFileStorage: !1, useResponseCacheStorage: !1 } })),
                            [eM.Xc]: (0, i.Gr)((e) => {
                                let r = e.get(eM.oo),
                                    o = e.get(eM.Zf),
                                    { i18n: n } = e.get(eM.V4),
                                    s = new Date(Date.now() + 24 * n.cookieExpirationDays * 36e5);
                                return new eW.E({
                                    serverDetectedLocale: eL,
                                    logger: o,
                                    changeLanguageHandler: new eH(t, eU),
                                    storage: {
                                        get: () => r.get(ey.c.SavedUserLanguage, !1),
                                        set(e) {
                                            r.set(ey.c.SavedUserLanguage, e, { path: '/', domain: window.location.hostname, expires: s, secure: !0 }, !1);
                                        },
                                    },
                                });
                            }),
                            [eM.Hm]: (0, i.P9)(
                                () =>
                                    function () {
                                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                        return new l.Q(e);
                                    },
                            ),
                            [eM.gu]: (0, i.P9)(
                                () =>
                                    function () {
                                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                        return new a.S(e);
                                    },
                            ),
                        })
                        .registerMany({
                            [eM.QG]: (0, i.Gr)((e) => new eA(e.get(eM.DP), e.get(eM.V4), e.get(eM.Xc).getLanguage(), e.get(eM.WA))),
                            [eM.OP]: (0, i.P9)(
                                (e) =>
                                    function () {
                                        var t, r, o, n, s, i;
                                        let a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                            l = arguments.length > 1 ? arguments[1] : void 0,
                                            c = e.get(eM.Zf),
                                            {
                                                resources: { musicExternalApi: u },
                                            } = e.get(eM.V4),
                                            g = new ef.N(c),
                                            d = new e$(c);
                                        return (
                                            (a.timeout = u.defaultTimeout),
                                            (a.hooks = {
                                                afterResponse: [d.afterResponseHook, ...((null == a || null == (t = a.hooks) ? void 0 : t.afterResponse) || [])],
                                                afterTimeout: [g.beforeErrorHook, ...((null == a || null == (r = a.hooks) ? void 0 : r.afterTimeout) || [])],
                                                beforeError: [g.beforeErrorHook, ...((null == a || null == (o = a.hooks) ? void 0 : o.beforeError) || [])],
                                                beforeRequest: [
                                                    eG.xW,
                                                    (0, eG.uY)(e4),
                                                    ...(e2 ? [e2] : []),
                                                    d.beforeRequestHook,
                                                    ...((null == a || null == (n = a.hooks) ? void 0 : n.beforeRequest) || []),
                                                ],
                                                beforeRetry: [eG.ie, g.beforeRetryHook, ...((null == a || null == (s = a.hooks) ? void 0 : s.beforeRetry) || [])],
                                                onRequestDone: [...((null == a || null == (i = a.hooks) ? void 0 : i.onRequestDone) || [])],
                                            }),
                                            l(a)
                                        );
                                    },
                            ),
                        })
                        .registerMany({
                            [eM.A4]: (0, i.P9)(
                                (e) =>
                                    function () {
                                        var t;
                                        let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                            o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e.get(eM.OP),
                                            n = e.get(eM.QG),
                                            s = e.get(eM.Hm),
                                            i = e.get(eM.Xc),
                                            a = e.get(eM.V4),
                                            l = e.get(eM.WA),
                                            c = o({ credentials: 'include' }, s),
                                            u = eN({ createDefaultHttpClient: () => c, defaultPrefixUrl: e1, i18nStorage: i, publicConfig: a, userId: l })(
                                                f.Q,
                                                'accountResource',
                                            );
                                        return (
                                            (r.hooks = { beforeError: [(0, eE.o)(n, u), ...((null == r || null == (t = r.hooks) ? void 0 : t.beforeError) || [])] }),
                                            o(r, s)
                                        );
                                    },
                            ),
                            [eM.mr]: (0, i.P9)(
                                (e) =>
                                    function () {
                                        var t, r, o, n, s, i;
                                        let a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                            l = e.get(eM.Hm),
                                            c = e.get(eM.Zf),
                                            {
                                                resources: { musicExternalApi: u },
                                            } = e.get(eM.V4),
                                            g = new ef.N(c);
                                        return (
                                            (a.timeout = u.defaultTimeout),
                                            (a.hooks = {
                                                afterResponse: [...((null == a || null == (t = a.hooks) ? void 0 : t.afterResponse) || [])],
                                                afterTimeout: [g.beforeErrorHook, ...((null == a || null == (r = a.hooks) ? void 0 : r.afterTimeout) || [])],
                                                beforeError: [g.beforeErrorHook, ...((null == a || null == (o = a.hooks) ? void 0 : o.beforeError) || [])],
                                                beforeRequest: [eG.xW, ...((null == a || null == (n = a.hooks) ? void 0 : n.beforeRequest) || [])],
                                                beforeRetry: [eG.ie, g.beforeRetryHook, ...((null == a || null == (s = a.hooks) ? void 0 : s.beforeRetry) || [])],
                                                onRequestDone: [...((null == a || null == (i = a.hooks) ? void 0 : i.onRequestDone) || [])],
                                            }),
                                            l(a)
                                        );
                                    },
                            ),
                        })
                        .register(
                            eM.CR,
                            (0, i.P9)(
                                (e) =>
                                    function () {
                                        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                        return e.get(eM.A4)(t, e.get(eM.gu));
                                    },
                            ),
                        )
                        .register(
                            eM.GV,
                            (0, i.P9)((e) => {
                                let t = e.get(eM.qt),
                                    r = e.get(eM.Xc),
                                    o = e.get(eM.V4);
                                return eN({
                                    createDefaultHttpClient: () => e.get(eM.A4)({ credentials: 'include' }),
                                    defaultPrefixUrl: t,
                                    i18nStorage: r,
                                    publicConfig: o,
                                    userId: e.get(eM.WA),
                                });
                            }),
                        )
                        .registerMany({
                            [eM.$I]: (0, i.Gr)((e) => e.get(eM.GV)(f.Q, 'accountResource')),
                            [eM._1]: (0, i.Gr)((e) => e.get(eM.GV)(R.d, 'usersResource')),
                            [eM.V3]: (0, i.Gr)((e) => e.get(eM.GV)(v.G, 'landingResource')),
                            [eM.Lb]: (0, i.Gr)((e) => e.get(eM.GV)(w.H, 'landing3Resource')),
                            [eM.tz]: (0, i.Gr)((e) => e.get(eM.GV)(b.B, 'landingResource')),
                            [eM.$8]: (0, i.Gr)((e) => e.get(eM.GV)(m.w, 'libraryResource')),
                            [eM.Oo]: (0, i.Gr)((e) => e.get(eM.GV)(V.L, 'tracksResource')),
                            [eM.$5]: (0, i.Gr)((e) => e.get(eM.GV)(k._, 'availabilityResource')),
                            [eM.qT]: (0, i.Gr)((e) => e.get(eM.GV)(P.v, 'getFileInfoResource')),
                            [eM.DV]: (0, i.Gr)((e) => e.get(eM.GV)(C.K, 'resourcesResource')),
                            [eM.X4]: (0, i.Gr)((e) => e.get(eM.GV)(y.a, 'topResource')),
                            [eM.O9]: (0, i.Gr)((e) => e.get(eM.GV)(L.b, 'artistsResource')),
                            [eM.E]: (0, i.Gr)((e) => e.get(eM.GV)(U.V, 'slidesResource')),
                            [eM.wH]: (0, i.Gr)((e) => e.get(eM.GV)(A.c, 'redAlertResource')),
                            [eM.ok]: (0, i.Gr)((e) => e.get(eM.GV)(E.Z, 'rotorResource')),
                            [eM.X8]: (0, i.Gr)((e) => e.get(eM.GV)(q.w, 'waveResource')),
                            [eM.yq]: (0, i.Gr)((e) => e.get(eM.GV)(S.p, 'searchResource')),
                            [eM.NN]: (0, i.Gr)((e) => e.get(eM.GV)(D.v, 'searchResource')),
                            [eM.qN]: (0, i.Gr)((e) => e.get(eM.GV)(H.T, 'playlistResource')),
                            [eM.ro]: (0, i.Gr)((e) => e.get(eM.GV)(W.e, 'playlistsResource')),
                            [eM.nM]: (0, i.Gr)((e) => e.get(eM.GV)(T.o, 'pinResource')),
                            [eM.Ut]: (0, i.Gr)((e) => e.get(eM.GV)(_.$, 'metatagsResource')),
                            [eM.K1]: (0, i.Gr)((e) => e.get(eM.GV)(x.p, 'tagResource')),
                            [eM.eu]: (0, i.Gr)((e) => e.get(eM.GV)(B.D, 'feedResource')),
                            [eM.SD]: (0, i.Gr)((e) => e.get(eM.GV)(M.F, 'wizard3Resource')),
                            [eM.aE]: (0, i.Gr)((e) => e.get(eM.GV)(I.l, 'pinsResource')),
                            [eM.ki]: (0, i.Gr)((e) => e.get(eM.GV)(Z.I, 'musicHistoryResource')),
                            [eM.c9]: (0, i.Gr)((e) => e.get(eM.GV)(z.s, 'dynamicPagesResource')),
                            [eM.en]: (0, i.Gr)((e) => e.get(eM.GV)(X.B, 'chartResource')),
                            [eM.jQ]: (0, i.Gr)((e) => e.get(eM.GV)(N._, 'clipsResource')),
                            [eM.cZ]: (0, i.Gr)((e) => e.get(eM.GV)(O.c, 'lyricViewsResource')),
                            [eM.Zl]: (0, i.Gr)((e) => e.get(eM.GV)(Y.D, 'nonMusicResource')),
                            [eM.CN]: (0, i.Gr)((e) => e.get(eM.GV)(j.N, 'donationResource')),
                            [eM.JM]: (0, i.Gr)((e) => e.get(eM.GV)(Q.c, 'streamsResource')),
                            [eM.P1]: (0, i.Gr)((e) => e.get(eM.GV)($.S, 'loaderResource')),
                            [eM.re]: (0, i.Gr)((e) => {
                                let t = e.get(eM.GV),
                                    r = e.get(eM.mr)({ credentials: 'omit' });
                                return t(F.s, 'prefixlessResource', { httpClient: r, prefixUrl: '' });
                            }),
                            [eM.Lk]: (0, i.Gr)((e) => e.get(eM.GV)(K.g, 'filtersResource')),
                            [eM.uM]: (0, i.Gr)((e) => {
                                var r;
                                let { acqOffers: s } = e.get(eM.V4),
                                    { rumSettings: i } = (0, n.$5)(),
                                    { brand: a, service: l, environment: c, appVersion: u } = s,
                                    { platform: g, page: d } = i,
                                    h = e.get(eM.QG),
                                    G = e.get(eM.Xc).getLanguage(),
                                    p = e.get(eM.A4),
                                    f = h.token || null,
                                    R = p({ credentials: f ? 'omit' : 'include' }),
                                    v = e.get(eM.Zf),
                                    { request_id: w, puid: b } = null != (r = e.get(eM.Zi).getStore()) ? r : {};
                                return new o.mZ({
                                    brand: a,
                                    service: l,
                                    environment: c,
                                    appVersion: u,
                                    etld: 'yandex.'.concat(t),
                                    platform: 'Web',
                                    lang: G,
                                    oAuthToken: f,
                                    authMethod: f ? 'oauth' : 'default',
                                    requester: (0, eJ.n)(R, v),
                                    puid: (null == b ? void 0 : b.toString()) || null,
                                    rumOptions: { platform: g, page: d, requestId: w },
                                });
                            }),
                            [eM.$$]: (0, i.Gr)((e) => e.get(eM.GV)(J.E, 'ugcResource')),
                            [eM.sv]: (0, i.Gr)((e) => e.get(eM.GV)(ee.L, 'collectionResource')),
                            [eM.gd]: (0, i.Gr)((e) => e.get(eM.GV)(et.z, 'adsResource')),
                            [eM.Ez]: (0, i.Gr)((e) => e.get(eM.GV)(er.l, 'personalResource')),
                            [eM.N1]: (0, i.Gr)((e) => e.get(eM.GV)(eo.H, 'disclaimersResource')),
                            [eM.u2]: (0, i.Gr)((e) => e.get(eM.GV)(en.J, 'familyResource')),
                            [eM.TD]: (0, i.Gr)((e) => e.get(eM.GV)(es.L, 'childrenLandingResource')),
                            [eM.wK]: (0, i.Gr)((e) => e.get(eM.GV)(ei.u, 'landingBlocksResource')),
                            [eM.dh]: (0, i.Gr)((e) => e.get(eM.GV)(ea.q, 'promoResource')),
                            [eM.LC]: (0, i.Gr)((e) => {
                                let t = e.get(eM.CR),
                                    r = e.get(eM.V4),
                                    o = t({ credentials: 'include' }),
                                    n = r.resources.musicExternalApi;
                                return (0, ej._)({ httpClient: o, musicExternalApi: n, publicConfig: r });
                            }),
                            [eM.W5]: (0, i.Gr)((e) => {
                                let t = e.get(eM.CR),
                                    r = e.get(eM.V4),
                                    o = t({ credentials: 'include' });
                                return (0, eY.Z)({ httpClient: o, publicConfig: r });
                            }),
                            [eM.EN]: (0, i.Gr)((e) => e.get(eM.GV)(el._, 'afterTrackResource')),
                            [eM.PL]: (0, i.Gr)((e) => e.get(eM.GV)(ec.w, 'labelsResource')),
                            [eM.DT]: (0, i.Gr)((e) => e.get(eM.GV)(eu.O, 'concertsResource')),
                            [eM.dA]: (0, i.Gr)((e) => e.get(eM.GV)(eg.Q, 'wordsResource')),
                            [eM.$Y]: (0, i.Gr)((e) => e.get(eM.GV)(ed.C, 'wheelResource')),
                            [eM.VR]: (0, i.P9)((e) => () => {
                                let t = e.get(eM.A4),
                                    r = e.get(eM.V4),
                                    o = (0, eO.i)({ httpClientFactory: t, publicConfig: r });
                                return (0, e_.P)({ probe: (e) => o.ping({ signal: e }) });
                            }),
                            [eM.zj]: (0, i.Gr)((e) => e.get(eM.GV)(eh.U, 'lumenResource')),
                            [eM.RD]: (0, i.Gr)((e) => (0, ex.L)(e.get(eM.Zf))),
                            [eM.vg]: (0, i.Gr)(() => (0, em.a)()),
                        })
                        .register(
                            eM.ff,
                            (0, i.Gr)((e) => {
                                let t = e.get(eM.N1);
                                return (0, eZ.Y)(t);
                            }),
                        )
                        .registerMany({
                            [eM.UB]: (0, i.Gr)((e) => {
                                let t = e.get(eM.vg);
                                return new d.BP(t);
                            }),
                            [eM.Tq]: (0, i.Gr)((e) => {
                                var t;
                                let r = e.get(eM.W5);
                                return (null == (t = window.Ya) ? void 0 : t.Rum) ? new d.GY((0, ek.y)(), r, window.Ya.Rum) : null;
                            }),
                            [eM.mD]: (0, i.Gr)((e) => (0, eI.s)({ environment: eP, rumResource: e.get(eM.W5) })),
                        });
                return e5
                    .register(
                        eM.by,
                        (0, i.Gr)(() => eK(e5, { browserName: eX, browserVersion: eQ, newConnector: !1 })),
                    )
                    .register(
                        eM.s_,
                        (0, i.Gr)(() => eK(e5, { browserName: eX, browserVersion: eQ, newConnector: !0 })),
                    )
                    .register(
                        eM.ni,
                        (0, i.Gr)((e) => {
                            let t = e.get(eM.Zf);
                            return new c.SU({
                                skeletonFactory: new eV.F6({
                                    landingResource: e.get(eM.V3),
                                    artistsResource: e.get(eM.O9),
                                    tabIdQueryParamController: new eV.ET(),
                                    config: { nodesConfig: { tabConfig: { addLoadAndShowBlocks: !1 } } },
                                }),
                                visibilityControllerParams: {
                                    visibilityConfig: { type: 'listVisibility', virtualizedMetadataLoader: new ev.yq({ resizeObserverAdapter: new ev.u2() }) },
                                },
                                plugins: [new eV.X({ logger: t })],
                            });
                        }),
                    );
            }
        },
    },
]);
