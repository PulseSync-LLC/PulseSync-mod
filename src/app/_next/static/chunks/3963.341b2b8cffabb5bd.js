'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3963],
    {
        53963: (e, t, r) => {
            (r.r(t), r.d(t, { createClientContainer: () => eJ }));
            var o = r(98283),
                n = r(30282),
                s = r(77348),
                i = r(40441),
                a = r(8819),
                l = r(32813),
                c = r(54264),
                u = r(53613),
                g = r(44084),
                d = r(52028),
                h = r(27253),
                G = r(10285),
                p = r(42668),
                f = r(83620),
                R = r(77584),
                v = r(35264),
                b = r(33850),
                m = r(86057),
                w = r(82740),
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
                Q = r(2410),
                $ = r(28800),
                j = r(60520),
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
                eR = r(70030),
                ev = r(96820),
                eb = r(53647),
                em = r(70844),
                ew = r(31556),
                eV = r(8438),
                ek = r(9519),
                eP = r(54020),
                eC = r(15253),
                ey = r(44698);
            class eL extends ey.P {
                getRedirectUri() {
                    let e = ''.concat(this.pathname).concat(this.searchParams ? '?'.concat(this.searchParams) : '');
                    return 'https://'.concat(this.host).concat(e);
                }
                getPassportPushUrl(e) {
                    let {
                            passportCredentials: { host: t },
                        } = this.config,
                        r = (0, G.r)(t, this.tld, p.B),
                        o = new URLSearchParams({ retpath: e, uuid: (0, eP.A)() });
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
                    return this.storage.get(eC.c.YandexUid, !1) || void 0;
                }
                constructor(e, t, r) {
                    (super(e, t), (0, ek._)(this, 'language', void 0), (this.language = r));
                }
            }
            class eU extends eL {
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
                    return this.storage.get(eC.c.YandexLogin, !1) || void 0;
                }
                async check() {}
                changeUser() {
                    var e;
                    if (void 0 === this.userId.getPassportUid()) return;
                    let t = 'auth-iframe-'.concat((0, eP.A)()),
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
                    let s = null != (e = this.storage.get(eC.c.YandexUid, !1)) ? e : '';
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
                        (0, ek._)(this, 'userId', void 0),
                        (0, ek._)(this, 'passportLoginCached', void 0),
                        (0, ek._)(this, 'intervalId', void 0),
                        (0, ek._)(this, 'observerCallback', void 0),
                        (this.userId = o),
                        (this.passportLoginCached = this.passportLogin));
                }
            }
            var eA = r(55267),
                eE = r(3629),
                eq = r(23405),
                eS = r(72694);
            class eD {
                onChangeLanguage(e) {
                    if ('string' == typeof this.token && this.token.length > 0) {
                        let t = 'https://yandex.'.concat(this.tld, '/portal/set/lang/'),
                            r = encodeURIComponent(window.location.href),
                            o = ''.concat(t, '?intl=').concat(e, '&retpath=').concat(r, '&sk=').concat(this.token);
                        window.location.assign(o);
                    } else window.location.reload();
                }
                constructor(e, t) {
                    ((0, ek._)(this, 'tld', void 0), (0, ek._)(this, 'token', void 0), (this.tld = e), (this.token = t));
                }
            }
            var eH = r(83602),
                eW = r(66059),
                eT = r(42953),
                e_ = r(8193),
                ex = r(43540),
                eB = r(4086),
                eM = r(71575),
                eI = r(3744),
                eZ = r(80643),
                ez = r(85230);
            let eX = (e) => {
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
                                    client: (0, ez._)(),
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
            var eN = r(87123),
                eO = r(64965),
                eY = r(74527);
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
                    ((0, ek._)(this, 'logger', void 0), (this.logger = e));
                }
            }
            var ej = r(71625);
            let eF = (e, t) => {
                let { browserName: r, browserVersion: o, newConnector: n } = t,
                    s = e.get(eB.oo),
                    i = e.get(eB.Zf),
                    a = (0, eP.A)(),
                    l = {
                        info: { app_name: r || 'Browser', app_version: o || '', title: 'Browser '.concat(r), device_id: a, type: ej.bq.WEB },
                        volumeGranularity: 20,
                        get defaultVolume() {
                            var c;
                            return null != (c = s.get(eC.c.YmPlayerVolume)) ? c : void 0;
                        },
                    },
                    u = e.get(eB.WA).getPassportUid(),
                    g = e.get(eB.QG),
                    d = e.get(eB.V4),
                    h = e.get(eB.UB),
                    G = e.get(eB.Tq),
                    p = [new ej.zT(h)];
                return (
                    G && p.push(new ej.qP(G)),
                    new ej.Jd({
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
                                return e.get(eB.WA).getPassportUid();
                            },
                        },
                    })
                );
            };
            var eK = r(10466);
            async function eJ(e) {
                let {
                        tld: t,
                        env: ek,
                        publicConfig: eP,
                        serverDetectedLocale: ey,
                        changeLanguageToken: eL,
                        browserName: ez,
                        browserVersion: eQ,
                        executionContextStore: ej,
                        customApiPrefixUrl: eJ,
                        customApiToken: e0,
                    } = e,
                    e4 = (0, n.u0)(eP, t, eJ),
                    e8 = await (0, eq.B)(ek),
                    e2 = 'production' !== ek ? eG.PW : void 0,
                    e1 = new i.Dt()
                        .registerMany({
                            [eB.SX]: (0, i.Gr)(() => ek),
                            [eB.S1]: (0, i.Gr)(() => (0, eZ.k)()),
                            [eB.V4]: (0, i.Gr)(() => eP),
                            [eB.xF]: (0, i.Gr)(() => null),
                            [eB.qt]: (0, i.Gr)(() => e4),
                            [eB.P0]: (0, i.Gr)(() => new s.q(e8)),
                            [eB.Zi]: (0, i.Gr)(() => new eS.Y(ej)),
                        })
                        .register(
                            eB.WA,
                            (0, i.Gr)((e) => {
                                let t = e.get(eB.Zi);
                                return new ex.V(t);
                            }),
                        )
                        .registerMany({
                            [eB.Zf]: (0, i.Gr)((e) => {
                                let t = e.get(eB.P0).get(eE.qV);
                                return new g.r({
                                    maxLogLevel: u.cm.DEBUG,
                                    secureFields: ep.x,
                                    disableLogToConsole: !t,
                                    additionalData: {
                                        get puid() {
                                            return e.get(eB.WA).getPassportUid();
                                        },
                                    },
                                });
                            }),
                            [eB.TK]: (0, i.Gr)((e) =>
                                (0, eW.b)(
                                    new g.r({
                                        maxLogLevel: u.cm.DEBUG,
                                        secureFields: ep.x,
                                        disableLogToConsole: 'development' !== e.get(eB.SX),
                                        additionalData: {
                                            get puid() {
                                                return e.get(eB.WA).getPassportUid();
                                            },
                                        },
                                    }),
                                ),
                            ),
                            [eB.oo]: (0, i.Gr)(() => new eb.V8()),
                            [eB.DP]: (0, i.Gr)(() => new eb.V8()),
                            [eB.RG]: (0, i.Gr)(async (e) => {
                                let {
                                    mocks: { enabled: o, mocksProviderUrl: n, urlCapturePattern: s },
                                    rsc: { useCache: i },
                                } = e.get(eB.V4);
                                if (!o) return () => Promise.resolve(null);
                                let { initMocks: a } = await Promise.all([r.e(2407), r.e(3037)]).then(r.bind(r, 33037)),
                                    l = e.get(eB.DP),
                                    c = e.get(eB.Zf),
                                    u = '/mockServiceWorker.js';
                                i && (u = '/rsc-cache-worker.js');
                                let g = () => {
                                        var e;
                                        return null != (e = l.get(h.L, !1)) ? e : null;
                                    },
                                    d = s || ''.concat(e4, '/*');
                                return () =>
                                    a({
                                        getMocksConfiguration: g,
                                        log: (e, t) => c.debug('[Mocks] | client: '.concat(e), t),
                                        mocksProviderUrl: n,
                                        serviceWorkerUrl: u,
                                        urlCapturePattern: (0, G.r)(d, t, p.B),
                                    }).catch((e) => c.debug('[Mocks] | client: initialization failed. '.concat(e)));
                            }),
                            [eB.U2]: (0, i.Gr)(() => new eb.si()),
                            [eB.vH]: (0, i.Gr)(() => new eb.fW()),
                            [eB.y$]: (0, i.Gr)(() => new ev.Mz({ config: { useEntitiesStorage: !1, useFileStorage: !1, useResponseCacheStorage: !1 } })),
                            [eB.Xc]: (0, i.Gr)((e) => {
                                let r = e.get(eB.oo),
                                    o = e.get(eB.Zf),
                                    { i18n: n } = e.get(eB.V4),
                                    s = new Date(Date.now() + 24 * n.cookieExpirationDays * 36e5);
                                return new eH.E({
                                    serverDetectedLocale: ey,
                                    logger: o,
                                    changeLanguageHandler: new eD(t, eL),
                                    storage: {
                                        get: () => r.get(eC.c.SavedUserLanguage, !1),
                                        set(e) {
                                            r.set(eC.c.SavedUserLanguage, e, { path: '/', domain: window.location.hostname, expires: s, secure: !0 }, !1);
                                        },
                                    },
                                });
                            }),
                            [eB.Hm]: (0, i.P9)(
                                () =>
                                    function () {
                                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                        return new l.Q(e);
                                    },
                            ),
                            [eB.gu]: (0, i.P9)(
                                () =>
                                    function () {
                                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                        return new a.S(e);
                                    },
                            ),
                        })
                        .registerMany({
                            [eB.QG]: (0, i.Gr)((e) => new eU(e.get(eB.DP), e.get(eB.V4), e.get(eB.Xc).getLanguage(), e.get(eB.WA))),
                            [eB.OP]: (0, i.P9)(
                                (e) =>
                                    function () {
                                        var t, r, o, n, s, i;
                                        let a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                            l = arguments.length > 1 ? arguments[1] : void 0,
                                            c = e.get(eB.Zf),
                                            {
                                                resources: { musicExternalApi: u },
                                            } = e.get(eB.V4),
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
                                                    (0, eG.uY)(e0),
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
                            [eB.A4]: (0, i.P9)(
                                (e) =>
                                    function () {
                                        var t;
                                        let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                            o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e.get(eB.OP),
                                            n = e.get(eB.QG),
                                            s = e.get(eB.Hm),
                                            i = e.get(eB.Xc),
                                            a = e.get(eB.V4),
                                            l = e.get(eB.WA),
                                            c = o({ credentials: 'include' }, s),
                                            u = eX({ createDefaultHttpClient: () => c, defaultPrefixUrl: e4, i18nStorage: i, publicConfig: a, userId: l })(
                                                f.Q,
                                                'accountResource',
                                            );
                                        return (
                                            (r.hooks = { beforeError: [(0, eA.o)(n, u), ...((null == r || null == (t = r.hooks) ? void 0 : t.beforeError) || [])] }),
                                            o(r, s)
                                        );
                                    },
                            ),
                            [eB.mr]: (0, i.P9)(
                                (e) =>
                                    function () {
                                        var t, r, o, n, s, i;
                                        let a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                            l = e.get(eB.Hm),
                                            c = e.get(eB.Zf),
                                            {
                                                resources: { musicExternalApi: u },
                                            } = e.get(eB.V4),
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
                            eB.CR,
                            (0, i.P9)(
                                (e) =>
                                    function () {
                                        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                        return e.get(eB.A4)(t, e.get(eB.gu));
                                    },
                            ),
                        )
                        .register(
                            eB.GV,
                            (0, i.P9)((e) => {
                                let t = e.get(eB.qt),
                                    r = e.get(eB.Xc),
                                    o = e.get(eB.V4);
                                return eX({
                                    createDefaultHttpClient: () => e.get(eB.A4)({ credentials: 'include' }),
                                    defaultPrefixUrl: t,
                                    i18nStorage: r,
                                    publicConfig: o,
                                    userId: e.get(eB.WA),
                                });
                            }),
                        )
                        .registerMany({
                            [eB.$I]: (0, i.Gr)((e) => e.get(eB.GV)(f.Q, 'accountResource')),
                            [eB._1]: (0, i.Gr)((e) => e.get(eB.GV)(R.d, 'usersResource')),
                            [eB.V3]: (0, i.Gr)((e) => e.get(eB.GV)(v.G, 'landingResource')),
                            [eB.Lb]: (0, i.Gr)((e) => e.get(eB.GV)(b.H, 'landing3Resource')),
                            [eB.tz]: (0, i.Gr)((e) => e.get(eB.GV)(m.B, 'landingResource')),
                            [eB.$8]: (0, i.Gr)((e) => e.get(eB.GV)(w.w, 'libraryResource')),
                            [eB.Oo]: (0, i.Gr)((e) => e.get(eB.GV)(V.L, 'tracksResource')),
                            [eB.$5]: (0, i.Gr)((e) => e.get(eB.GV)(k._, 'availabilityResource')),
                            [eB.qT]: (0, i.Gr)((e) => e.get(eB.GV)(P.v, 'getFileInfoResource')),
                            [eB.DV]: (0, i.Gr)((e) => e.get(eB.GV)(C.K, 'resourcesResource')),
                            [eB.X4]: (0, i.Gr)((e) => e.get(eB.GV)(y.a, 'topResource')),
                            [eB.O9]: (0, i.Gr)((e) => e.get(eB.GV)(L.b, 'artistsResource')),
                            [eB.E]: (0, i.Gr)((e) => e.get(eB.GV)(U.V, 'slidesResource')),
                            [eB.wH]: (0, i.Gr)((e) => e.get(eB.GV)(A.c, 'redAlertResource')),
                            [eB.ok]: (0, i.Gr)((e) => e.get(eB.GV)(E.Z, 'rotorResource')),
                            [eB.X8]: (0, i.Gr)((e) => e.get(eB.GV)(q.w, 'waveResource')),
                            [eB.yq]: (0, i.Gr)((e) => e.get(eB.GV)(S.p, 'searchResource')),
                            [eB.NN]: (0, i.Gr)((e) => e.get(eB.GV)(D.v, 'searchResource')),
                            [eB.qN]: (0, i.Gr)((e) => e.get(eB.GV)(H.T, 'playlistResource')),
                            [eB.ro]: (0, i.Gr)((e) => e.get(eB.GV)(W.e, 'playlistsResource')),
                            [eB.nM]: (0, i.Gr)((e) => e.get(eB.GV)(T.o, 'pinResource')),
                            [eB.Ut]: (0, i.Gr)((e) => e.get(eB.GV)(_.$, 'metatagsResource')),
                            [eB.K1]: (0, i.Gr)((e) => e.get(eB.GV)(x.p, 'tagResource')),
                            [eB.eu]: (0, i.Gr)((e) => e.get(eB.GV)(B.D, 'feedResource')),
                            [eB.SD]: (0, i.Gr)((e) => e.get(eB.GV)(M.F, 'wizard3Resource')),
                            [eB.aE]: (0, i.Gr)((e) => e.get(eB.GV)(I.l, 'pinsResource')),
                            [eB.ki]: (0, i.Gr)((e) => e.get(eB.GV)(Z.I, 'musicHistoryResource')),
                            [eB.c9]: (0, i.Gr)((e) => e.get(eB.GV)(z.s, 'dynamicPagesResource')),
                            [eB.en]: (0, i.Gr)((e) => e.get(eB.GV)(X.B, 'chartResource')),
                            [eB.jQ]: (0, i.Gr)((e) => e.get(eB.GV)(N._, 'clipsResource')),
                            [eB.cZ]: (0, i.Gr)((e) => e.get(eB.GV)(O.c, 'lyricViewsResource')),
                            [eB.Zl]: (0, i.Gr)((e) => e.get(eB.GV)(Y.D, 'nonMusicResource')),
                            [eB.CN]: (0, i.Gr)((e) => e.get(eB.GV)(Q.N, 'donationResource')),
                            [eB.JM]: (0, i.Gr)((e) => e.get(eB.GV)($.c, 'streamsResource')),
                            [eB.P1]: (0, i.Gr)((e) => e.get(eB.GV)(j.S, 'loaderResource')),
                            [eB.re]: (0, i.Gr)((e) => {
                                let t = e.get(eB.GV),
                                    r = e.get(eB.mr)({ credentials: 'omit' });
                                return t(F.s, 'prefixlessResource', { httpClient: r, prefixUrl: '' });
                            }),
                            [eB.Lk]: (0, i.Gr)((e) => e.get(eB.GV)(K.g, 'filtersResource')),
                            [eB.uM]: (0, i.Gr)((e) => {
                                var r;
                                let { acqOffers: s } = e.get(eB.V4),
                                    { rumSettings: i } = (0, n.$5)(),
                                    { brand: a, service: l, environment: c, appVersion: u } = s,
                                    { platform: g, page: d } = i,
                                    h = e.get(eB.QG),
                                    G = e.get(eB.Xc).getLanguage(),
                                    p = e.get(eB.A4),
                                    f = h.token || null,
                                    R = p({ credentials: f ? 'omit' : 'include' }),
                                    v = e.get(eB.Zf),
                                    { request_id: b, puid: m } = null != (r = e.get(eB.Zi).getStore()) ? r : {};
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
                                    requester: (0, eK.n)(R, v),
                                    puid: (null == m ? void 0 : m.toString()) || null,
                                    rumOptions: { platform: g, page: d, requestId: b },
                                });
                            }),
                            [eB.$$]: (0, i.Gr)((e) => e.get(eB.GV)(J.E, 'ugcResource')),
                            [eB.sv]: (0, i.Gr)((e) => e.get(eB.GV)(ee.L, 'collectionResource')),
                            [eB.gd]: (0, i.Gr)((e) => e.get(eB.GV)(et.z, 'adsResource')),
                            [eB.Ez]: (0, i.Gr)((e) => e.get(eB.GV)(er.l, 'personalResource')),
                            [eB.N1]: (0, i.Gr)((e) => e.get(eB.GV)(eo.H, 'disclaimersResource')),
                            [eB.u2]: (0, i.Gr)((e) => e.get(eB.GV)(en.J, 'familyResource')),
                            [eB.TD]: (0, i.Gr)((e) => e.get(eB.GV)(es.L, 'childrenLandingResource')),
                            [eB.wK]: (0, i.Gr)((e) => e.get(eB.GV)(ei.u, 'landingBlocksResource')),
                            [eB.dh]: (0, i.Gr)((e) => e.get(eB.GV)(ea.q, 'promoResource')),
                            [eB.LC]: (0, i.Gr)((e) => {
                                let t = e.get(eB.CR),
                                    r = e.get(eB.V4),
                                    o = t({ credentials: 'include' }),
                                    n = r.resources.musicExternalApi;
                                return (0, eY._)({ httpClient: o, musicExternalApi: n, publicConfig: r });
                            }),
                            [eB.W5]: (0, i.Gr)((e) => {
                                let t = e.get(eB.CR),
                                    r = e.get(eB.V4),
                                    o = t({ credentials: 'include' });
                                return (0, eO.Z)({ httpClient: o, publicConfig: r });
                            }),
                            [eB.EN]: (0, i.Gr)((e) => e.get(eB.GV)(el._, 'afterTrackResource')),
                            [eB.PL]: (0, i.Gr)((e) => e.get(eB.GV)(ec.w, 'labelsResource')),
                            [eB.DT]: (0, i.Gr)((e) => e.get(eB.GV)(eu.O, 'concertsResource')),
                            [eB.dA]: (0, i.Gr)((e) => e.get(eB.GV)(eg.Q, 'wordsResource')),
                            [eB.$Y]: (0, i.Gr)((e) => e.get(eB.GV)(ed.C, 'wheelResource')),
                            [eB.VR]: (0, i.P9)((e) => () => {
                                let t = e.get(eB.A4),
                                    r = e.get(eB.V4),
                                    o = (0, eN.i)({ httpClientFactory: t, publicConfig: r });
                                return (0, eT.P)({ probe: (e) => o.ping({ signal: e }) });
                            }),
                            [eB.zj]: (0, i.Gr)((e) => e.get(eB.GV)(eh.U, 'lumenResource')),
                            [eB.RD]: (0, i.Gr)((e) => (0, e_.L)(e.get(eB.Zf))),
                            [eB.vg]: (0, i.Gr)(() => (0, em.a)()),
                        })
                        .register(
                            eB.ff,
                            (0, i.Gr)((e) => {
                                let t = e.get(eB.N1);
                                return (0, eI.Y)(t);
                            }),
                        )
                        .registerMany({
                            [eB.UB]: (0, i.Gr)((e) => {
                                let t = e.get(eB.vg);
                                return new d.BP(t);
                            }),
                            [eB.Tq]: (0, i.Gr)((e) => {
                                var t;
                                let r = e.get(eB.W5);
                                return (null == (t = window.Ya) ? void 0 : t.Rum) ? new d.GY((0, eV.y)(), r, window.Ya.Rum) : null;
                            }),
                            [eB.mD]: (0, i.Gr)((e) => (0, eM.s)({ environment: ek, rumResource: e.get(eB.W5) })),
                        });
                return e1
                    .register(
                        eB.by,
                        (0, i.Gr)(() => eF(e1, { browserName: ez, browserVersion: eQ, newConnector: !1 })),
                    )
                    .register(
                        eB.s_,
                        (0, i.Gr)(() => eF(e1, { browserName: ez, browserVersion: eQ, newConnector: !0 })),
                    )
                    .register(
                        eB.ni,
                        (0, i.Gr)((e) => {
                            let t = e.get(eB.Zf);
                            return new c.SU({
                                skeletonFactory: new ew.F6({
                                    landingResource: e.get(eB.V3),
                                    artistsResource: e.get(eB.O9),
                                    tabIdQueryParamController: new ew.ET(),
                                    config: { nodesConfig: { tabConfig: { addLoadAndShowBlocks: !1 } } },
                                }),
                                visibilityControllerParams: {
                                    visibilityConfig: { type: 'listVisibility', virtualizedMetadataLoader: new eR.yq({ resizeObserverAdapter: new eR.u2() }) },
                                },
                                plugins: [new ew.X({ logger: t })],
                            });
                        }),
                    );
            }
        },
    },
]);
