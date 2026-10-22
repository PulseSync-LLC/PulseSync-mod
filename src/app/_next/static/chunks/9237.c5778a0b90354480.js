'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9237],
    {
        69237: (e, t, r) => {
            (r.r(t), r.d(t, { createClientContainer: () => eK }));
            var o = r(1817),
                n = r(93588),
                s = r(73650),
                i = r(13486),
                a = r(59353),
                l = r(73829),
                c = r(79157),
                u = r(9248),
                g = r(4401),
                d = r(28210),
                h = r(69935),
                G = r(90887),
                p = r(52830),
                f = r(47742),
                R = r(48106),
                v = r(26007),
                b = r(27940),
                m = r(10696),
                w = r(50302),
                V = r(16249),
                k = r(27354),
                P = r(91162),
                C = r(18420),
                y = r(68510),
                L = r(94638),
                U = r(91736),
                A = r(15545),
                E = r(96208),
                q = r(81102),
                H = r(74128),
                S = r(33031),
                W = r(58123),
                D = r(25678),
                T = r(3030),
                _ = r(90496),
                x = r(2794),
                B = r(28596),
                M = r(44166),
                I = r(77448),
                Z = r(32141),
                z = r(80389),
                X = r(2242),
                N = r(89646),
                O = r(76597),
                Y = r(59815),
                Q = r(80188),
                $ = r(80250),
                j = r(79250),
                F = r(60070),
                K = r(3374),
                J = r(59158),
                ee = r(36064),
                et = r(12482),
                er = r(42132),
                eo = r(83894),
                en = r(65844),
                es = r(61279),
                ei = r(38125),
                ea = r(25630),
                el = r(9902),
                ec = r(15178),
                eu = r(33314),
                eg = r(79078),
                ed = r(58174),
                eh = r(74906),
                eG = r(2952),
                ep = r(44342),
                ef = r(71062),
                eR = r(72233),
                ev = r(19616),
                eb = r(67311),
                em = r(78321),
                ew = r(2209),
                eV = r(59628),
                ek = r(58025),
                eP = r(59342),
                eC = r(95067),
                ey = r(87452);
            class eL extends ey.P {
                getRedirectUri() {
                    let e = ''.concat(this.pathname).concat(this.searchParams ? '?'.concat(this.searchParams) : '');
                    return 'https://'.concat(this.host).concat(e);
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
            var eA = r(75749),
                eE = r(41871),
                eq = r(62631),
                eH = r(94564);
            class eS {
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
            var eW = r(28869),
                eD = r(41),
                eT = r(767),
                e_ = r(67154),
                ex = r(36484),
                eB = r(81689),
                eM = r(35591),
                eI = r(75805),
                eZ = r(48068);
            let ez = (e) => {
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
                                    client: (0, eZ._)(),
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
            var eX = r(23285),
                eN = r(32817),
                eO = r(18370);
            let eY = /^application\/json(;\s?charset=\S+)?$/;
            class eQ {
                async afterResponse(e) {
                    try {
                        if (!e.headers['content-range'] && e.headers['content-type'] && eY.test(e.headers['content-type'])) {
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
            var e$ = r(75637);
            let ej = (e, t) => {
                let { browserName: r, browserVersion: o, newConnector: n } = t,
                    s = e.get(ex.oo),
                    i = e.get(ex.Zf),
                    a = (0, eP.A)(),
                    l = {
                        info: { app_name: r || 'Browser', app_version: o || '', title: 'Browser '.concat(r), device_id: a, type: e$.bq.WEB },
                        volumeGranularity: 20,
                        get defaultVolume() {
                            var c;
                            return null != (c = s.get(eC.c.YmPlayerVolume)) ? c : void 0;
                        },
                    },
                    u = e.get(ex.WA).getPassportUid(),
                    g = e.get(ex.QG),
                    d = e.get(ex.V4),
                    h = e.get(ex.UB),
                    G = e.get(ex.Tq),
                    p = [new e$.zT(h)];
                return (
                    G && p.push(new e$.qP(G)),
                    new e$.Jd({
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
                                return e.get(ex.WA).getPassportUid();
                            },
                        },
                    })
                );
            };
            var eF = r(18752);
            async function eK(e) {
                let {
                        tld: t,
                        env: ek,
                        publicConfig: eP,
                        serverDetectedLocale: ey,
                        changeLanguageToken: eL,
                        browserName: eZ,
                        browserVersion: eY,
                        executionContextStore: e$,
                        customApiPrefixUrl: eK,
                        customApiToken: eJ,
                    } = e,
                    e0 = (0, n.u0)(eP, t, eK),
                    e1 = await (0, eq.B)(ek),
                    e4 = 'production' !== ek ? eG.PW : void 0,
                    e2 = new i.Dt()
                        .registerMany({
                            [ex.SX]: (0, i.Gr)(() => ek),
                            [ex.S1]: (0, i.Gr)(() => (0, eI.k)()),
                            [ex.V4]: (0, i.Gr)(() => eP),
                            [ex.xF]: (0, i.Gr)(() => null),
                            [ex.qt]: (0, i.Gr)(() => e0),
                            [ex.P0]: (0, i.Gr)(() => new s.q(e1)),
                            [ex.Zi]: (0, i.Gr)(() => new eH.Y(e$)),
                        })
                        .register(
                            ex.WA,
                            (0, i.Gr)((e) => {
                                let t = e.get(ex.Zi);
                                return new e_.V(t);
                            }),
                        )
                        .registerMany({
                            [ex.Zf]: (0, i.Gr)((e) => {
                                let t = e.get(ex.P0).get(eE.qV);
                                return new g.r({
                                    maxLogLevel: u.cm.DEBUG,
                                    secureFields: ep.x,
                                    disableLogToConsole: !t,
                                    additionalData: {
                                        get puid() {
                                            return e.get(ex.WA).getPassportUid();
                                        },
                                    },
                                });
                            }),
                            [ex.TK]: (0, i.Gr)(
                                (e) =>
                                    new ((0, eD.b)(g.r))({
                                        maxLogLevel: u.cm.DEBUG,
                                        secureFields: ep.x,
                                        disableLogToConsole: 'development' !== e.get(ex.SX),
                                        additionalData: {
                                            get puid() {
                                                return e.get(ex.WA).getPassportUid();
                                            },
                                        },
                                    }),
                            ),
                            [ex.oo]: (0, i.Gr)(() => new eb.V8()),
                            [ex.DP]: (0, i.Gr)(() => new eb.V8()),
                            [ex.RG]: (0, i.Gr)(async (e) => {
                                let {
                                    mocks: { enabled: o, mocksProviderUrl: n, urlCapturePattern: s },
                                    rsc: { useCache: i },
                                } = e.get(ex.V4);
                                if (!o) return () => Promise.resolve(null);
                                let { initMocks: a } = await Promise.all([r.e(6089), r.e(9662)]).then(r.bind(r, 39662)),
                                    l = e.get(ex.DP),
                                    c = e.get(ex.Zf),
                                    u = '/mockServiceWorker.js';
                                i && (u = '/rsc-cache-worker.js');
                                let g = () => {
                                        var e;
                                        return null != (e = l.get(h.L, !1)) ? e : null;
                                    },
                                    d = s || ''.concat(e0, '/*');
                                return () =>
                                    a({
                                        getMocksConfiguration: g,
                                        log: (e, t) => c.debug('[Mocks] | client: '.concat(e), t),
                                        mocksProviderUrl: n,
                                        serviceWorkerUrl: u,
                                        urlCapturePattern: (0, G.r)(d, t, p.B),
                                    }).catch((e) => c.debug('[Mocks] | client: initialization failed. '.concat(e)));
                            }),
                            [ex.U2]: (0, i.Gr)(() => new eb.si()),
                            [ex.vH]: (0, i.Gr)(() => new eb.fW()),
                            [ex.y$]: (0, i.Gr)(() => new ev.Mz({ config: { useEntitiesStorage: !1, useFileStorage: !1, useResponseCacheStorage: !1 } })),
                            [ex.Xc]: (0, i.Gr)((e) => {
                                let r = e.get(ex.oo),
                                    o = e.get(ex.Zf),
                                    { i18n: n } = e.get(ex.V4),
                                    s = new Date(Date.now() + 24 * n.cookieExpirationDays * 36e5);
                                return new eW.E({
                                    serverDetectedLocale: ey,
                                    logger: o,
                                    changeLanguageHandler: new eS(t, eL),
                                    storage: {
                                        get: () => r.get(eC.c.SavedUserLanguage, !1),
                                        set(e) {
                                            r.set(eC.c.SavedUserLanguage, e, { path: '/', domain: window.location.hostname, expires: s, secure: !0 }, !1);
                                        },
                                    },
                                });
                            }),
                            [ex.Hm]: (0, i.P9)(
                                () =>
                                    function () {
                                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                        return new l.Q(e);
                                    },
                            ),
                            [ex.gu]: (0, i.P9)(
                                () =>
                                    function () {
                                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                        return new a.S(e);
                                    },
                            ),
                        })
                        .registerMany({
                            [ex.QG]: (0, i.Gr)((e) => new eU(e.get(ex.DP), e.get(ex.V4), e.get(ex.Xc).getLanguage(), e.get(ex.WA))),
                            [ex.OP]: (0, i.P9)(
                                (e) =>
                                    function () {
                                        var t, r, o, n, s, i;
                                        let a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                            l = arguments.length > 1 ? arguments[1] : void 0,
                                            c = e.get(ex.Zf),
                                            {
                                                resources: { musicExternalApi: u },
                                            } = e.get(ex.V4),
                                            g = new ef.N(c),
                                            d = new eQ(c);
                                        return (
                                            (a.timeout = u.defaultTimeout),
                                            (a.hooks = {
                                                afterResponse: [d.afterResponseHook, ...((null == a || null == (t = a.hooks) ? void 0 : t.afterResponse) || [])],
                                                afterTimeout: [g.beforeErrorHook, ...((null == a || null == (r = a.hooks) ? void 0 : r.afterTimeout) || [])],
                                                beforeError: [g.beforeErrorHook, ...((null == a || null == (o = a.hooks) ? void 0 : o.beforeError) || [])],
                                                beforeRequest: [
                                                    eG.xW,
                                                    (0, eG.uY)(eJ),
                                                    ...(e4 ? [e4] : []),
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
                            [ex.A4]: (0, i.P9)(
                                (e) =>
                                    function () {
                                        var t;
                                        let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                            o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e.get(ex.OP),
                                            n = e.get(ex.QG),
                                            s = e.get(ex.Hm),
                                            i = e.get(ex.Xc),
                                            a = e.get(ex.V4),
                                            l = e.get(ex.WA),
                                            c = o({ credentials: 'include' }, s),
                                            u = ez({ createDefaultHttpClient: () => c, defaultPrefixUrl: e0, i18nStorage: i, publicConfig: a, userId: l })(
                                                f.Q,
                                                'accountResource',
                                            );
                                        return (
                                            (r.hooks = { beforeError: [(0, eA.o)(n, u), ...((null == r || null == (t = r.hooks) ? void 0 : t.beforeError) || [])] }),
                                            o(r, s)
                                        );
                                    },
                            ),
                            [ex.mr]: (0, i.P9)(
                                (e) =>
                                    function () {
                                        var t, r, o, n, s, i;
                                        let a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                            l = e.get(ex.Hm),
                                            c = e.get(ex.Zf),
                                            {
                                                resources: { musicExternalApi: u },
                                            } = e.get(ex.V4),
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
                            ex.CR,
                            (0, i.P9)(
                                (e) =>
                                    function () {
                                        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                        return e.get(ex.A4)(t, e.get(ex.gu));
                                    },
                            ),
                        )
                        .register(
                            ex.GV,
                            (0, i.P9)((e) => {
                                let t = e.get(ex.qt),
                                    r = e.get(ex.Xc),
                                    o = e.get(ex.V4);
                                return ez({
                                    createDefaultHttpClient: () => e.get(ex.A4)({ credentials: 'include' }),
                                    defaultPrefixUrl: t,
                                    i18nStorage: r,
                                    publicConfig: o,
                                    userId: e.get(ex.WA),
                                });
                            }),
                        )
                        .registerMany({
                            [ex.$I]: (0, i.Gr)((e) => e.get(ex.GV)(f.Q, 'accountResource')),
                            [ex._1]: (0, i.Gr)((e) => e.get(ex.GV)(R.d, 'usersResource')),
                            [ex.V3]: (0, i.Gr)((e) => e.get(ex.GV)(v.G, 'landingResource')),
                            [ex.Lb]: (0, i.Gr)((e) => e.get(ex.GV)(b.H, 'landing3Resource')),
                            [ex.tz]: (0, i.Gr)((e) => e.get(ex.GV)(m.B, 'landingResource')),
                            [ex.$8]: (0, i.Gr)((e) => e.get(ex.GV)(w.w, 'libraryResource')),
                            [ex.Oo]: (0, i.Gr)((e) => e.get(ex.GV)(V.L, 'tracksResource')),
                            [ex.$5]: (0, i.Gr)((e) => e.get(ex.GV)(k._, 'availabilityResource')),
                            [ex.qT]: (0, i.Gr)((e) => e.get(ex.GV)(P.v, 'getFileInfoResource')),
                            [ex.DV]: (0, i.Gr)((e) => e.get(ex.GV)(C.K, 'resourcesResource')),
                            [ex.X4]: (0, i.Gr)((e) => e.get(ex.GV)(y.a, 'topResource')),
                            [ex.O9]: (0, i.Gr)((e) => e.get(ex.GV)(L.b, 'artistsResource')),
                            [ex.E]: (0, i.Gr)((e) => e.get(ex.GV)(U.V, 'slidesResource')),
                            [ex.wH]: (0, i.Gr)((e) => e.get(ex.GV)(A.c, 'redAlertResource')),
                            [ex.ok]: (0, i.Gr)((e) => e.get(ex.GV)(E.Z, 'rotorResource')),
                            [ex.X8]: (0, i.Gr)((e) => e.get(ex.GV)(q.w, 'waveResource')),
                            [ex.yq]: (0, i.Gr)((e) => e.get(ex.GV)(H.p, 'searchResource')),
                            [ex.NN]: (0, i.Gr)((e) => e.get(ex.GV)(S.v, 'searchResource')),
                            [ex.qN]: (0, i.Gr)((e) => e.get(ex.GV)(W.T, 'playlistResource')),
                            [ex.ro]: (0, i.Gr)((e) => e.get(ex.GV)(D.e, 'playlistsResource')),
                            [ex.nM]: (0, i.Gr)((e) => e.get(ex.GV)(T.o, 'pinResource')),
                            [ex.Ut]: (0, i.Gr)((e) => e.get(ex.GV)(_.$, 'metatagsResource')),
                            [ex.K1]: (0, i.Gr)((e) => e.get(ex.GV)(x.p, 'tagResource')),
                            [ex.eu]: (0, i.Gr)((e) => e.get(ex.GV)(B.D, 'feedResource')),
                            [ex.SD]: (0, i.Gr)((e) => e.get(ex.GV)(M.F, 'wizard3Resource')),
                            [ex.aE]: (0, i.Gr)((e) => e.get(ex.GV)(I.l, 'pinsResource')),
                            [ex.ki]: (0, i.Gr)((e) => e.get(ex.GV)(Z.I, 'musicHistoryResource')),
                            [ex.c9]: (0, i.Gr)((e) => e.get(ex.GV)(z.s, 'dynamicPagesResource')),
                            [ex.en]: (0, i.Gr)((e) => e.get(ex.GV)(X.B, 'chartResource')),
                            [ex.jQ]: (0, i.Gr)((e) => e.get(ex.GV)(N._, 'clipsResource')),
                            [ex.cZ]: (0, i.Gr)((e) => e.get(ex.GV)(O.c, 'lyricViewsResource')),
                            [ex.Zl]: (0, i.Gr)((e) => e.get(ex.GV)(Y.D, 'nonMusicResource')),
                            [ex.CN]: (0, i.Gr)((e) => e.get(ex.GV)(Q.N, 'donationResource')),
                            [ex.JM]: (0, i.Gr)((e) => e.get(ex.GV)($.c, 'streamsResource')),
                            [ex.P1]: (0, i.Gr)((e) => e.get(ex.GV)(j.S, 'loaderResource')),
                            [ex.re]: (0, i.Gr)((e) => {
                                let t = e.get(ex.GV),
                                    r = e.get(ex.mr)({ credentials: 'omit' });
                                return t(F.s, 'prefixlessResource', { httpClient: r, prefixUrl: '' });
                            }),
                            [ex.Lk]: (0, i.Gr)((e) => e.get(ex.GV)(K.g, 'filtersResource')),
                            [ex.uM]: (0, i.Gr)((e) => {
                                var r;
                                let { acqOffers: s } = e.get(ex.V4),
                                    { rumSettings: i } = (0, n.$5)(),
                                    { brand: a, service: l, environment: c, appVersion: u } = s,
                                    { platform: g, page: d } = i,
                                    h = e.get(ex.QG),
                                    G = e.get(ex.Xc).getLanguage(),
                                    p = e.get(ex.A4),
                                    f = h.token || null,
                                    R = p({ credentials: f ? 'omit' : 'include' }),
                                    v = e.get(ex.Zf),
                                    { request_id: b, puid: m } = null != (r = e.get(ex.Zi).getStore()) ? r : {};
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
                                    requester: (0, eF.n)(R, v),
                                    puid: (null == m ? void 0 : m.toString()) || null,
                                    rumOptions: { platform: g, page: d, requestId: b },
                                });
                            }),
                            [ex.$$]: (0, i.Gr)((e) => e.get(ex.GV)(J.E, 'ugcResource')),
                            [ex.sv]: (0, i.Gr)((e) => e.get(ex.GV)(ee.L, 'collectionResource')),
                            [ex.gd]: (0, i.Gr)((e) => e.get(ex.GV)(et.z, 'adsResource')),
                            [ex.Ez]: (0, i.Gr)((e) => e.get(ex.GV)(er.l, 'personalResource')),
                            [ex.N1]: (0, i.Gr)((e) => e.get(ex.GV)(eo.H, 'disclaimersResource')),
                            [ex.u2]: (0, i.Gr)((e) => e.get(ex.GV)(en.J, 'familyResource')),
                            [ex.TD]: (0, i.Gr)((e) => e.get(ex.GV)(es.L, 'childrenLandingResource')),
                            [ex.wK]: (0, i.Gr)((e) => e.get(ex.GV)(ei.u, 'landingBlocksResource')),
                            [ex.dh]: (0, i.Gr)((e) => e.get(ex.GV)(ea.q, 'promoResource')),
                            [ex.LC]: (0, i.Gr)((e) => {
                                let t = e.get(ex.CR),
                                    r = e.get(ex.V4),
                                    o = t({ credentials: 'include' }),
                                    n = r.resources.musicExternalApi;
                                return (0, eO._)({ httpClient: o, musicExternalApi: n, publicConfig: r });
                            }),
                            [ex.W5]: (0, i.Gr)((e) => {
                                let t = e.get(ex.CR),
                                    r = e.get(ex.V4),
                                    o = t({ credentials: 'include' });
                                return (0, eN.Z)({ httpClient: o, publicConfig: r });
                            }),
                            [ex.EN]: (0, i.Gr)((e) => e.get(ex.GV)(el._, 'afterTrackResource')),
                            [ex.PL]: (0, i.Gr)((e) => e.get(ex.GV)(ec.w, 'labelsResource')),
                            [ex.DT]: (0, i.Gr)((e) => e.get(ex.GV)(eu.O, 'concertsResource')),
                            [ex.dA]: (0, i.Gr)((e) => e.get(ex.GV)(eg.Q, 'wordsResource')),
                            [ex.$Y]: (0, i.Gr)((e) => e.get(ex.GV)(ed.C, 'wheelResource')),
                            [ex.VR]: (0, i.P9)((e) => () => {
                                let t = e.get(ex.A4),
                                    r = e.get(ex.V4),
                                    o = (0, eX.i)({ httpClientFactory: t, publicConfig: r });
                                return (0, eT.P)({ probe: (e) => o.ping({ signal: e }) });
                            }),
                            [ex.zj]: (0, i.Gr)((e) => e.get(ex.GV)(eh.U, 'lumenResource')),
                            [ex.vg]: (0, i.Gr)(() => (0, em.a)()),
                        })
                        .register(
                            ex.ff,
                            (0, i.Gr)((e) => {
                                let t = e.get(ex.N1);
                                return (0, eM.Y)(t);
                            }),
                        )
                        .registerMany({
                            [ex.UB]: (0, i.Gr)((e) => {
                                let t = e.get(ex.vg);
                                return new d.BP(t);
                            }),
                            [ex.Tq]: (0, i.Gr)((e) => {
                                var t;
                                let r = e.get(ex.W5);
                                return (null == (t = window.Ya) ? void 0 : t.Rum) ? new d.GY((0, eV.y)(), r, window.Ya.Rum) : null;
                            }),
                            [ex.mD]: (0, i.Gr)((e) => (0, eB.s)({ environment: ek, rumResource: e.get(ex.W5) })),
                        });
                return e2
                    .register(
                        ex.by,
                        (0, i.Gr)(() => ej(e2, { browserName: eZ, browserVersion: eY, newConnector: !1 })),
                    )
                    .register(
                        ex.s_,
                        (0, i.Gr)(() => ej(e2, { browserName: eZ, browserVersion: eY, newConnector: !0 })),
                    )
                    .register(
                        ex.ni,
                        (0, i.Gr)((e) => {
                            let t = e.get(ex.Zf);
                            return new c.SU({
                                skeletonFactory: new ew.F6({
                                    landingResource: e.get(ex.V3),
                                    artistsResource: e.get(ex.O9),
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
