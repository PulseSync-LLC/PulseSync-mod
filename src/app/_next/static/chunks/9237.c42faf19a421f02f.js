'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9237],
    {
        69237: (e, t, r) => {
            (r.r(t), r.d(t, { createClientContainer: () => e$ }));
            var o = r(1817),
                n = r(93588),
                s = r(73650),
                i = r(13486),
                a = r(59353),
                l = r(73829),
                c = r(79157),
                u = r(9248),
                g = r(4401),
                d = r(99950),
                h = r(69935),
                G = r(90887),
                p = r(52830),
                f = r(47742),
                R = r(48106),
                v = r(26007),
                b = r(27940),
                w = r(10696),
                m = r(50302),
                V = r(16249),
                k = r(27354),
                C = r(91162),
                P = r(18420),
                y = r(68510),
                L = r(94638),
                U = r(91736),
                A = r(15545),
                E = r(96208),
                q = r(81102),
                H = r(74128),
                T = r(33031),
                _ = r(58123),
                S = r(25678),
                W = r(3030),
                x = r(90496),
                D = r(2794),
                B = r(28596),
                M = r(77448),
                I = r(32141),
                Z = r(80389),
                z = r(2242),
                X = r(89646),
                N = r(76597),
                O = r(59815),
                Y = r(80188),
                Q = r(80250),
                $ = r(79250),
                j = r(60070),
                F = r(3374),
                K = r(59158),
                J = r(36064),
                ee = r(12482),
                et = r(42132),
                er = r(83894),
                eo = r(65844),
                en = r(61279),
                es = r(38125),
                ei = r(25630),
                ea = r(9902),
                el = r(15178),
                ec = r(33314),
                eu = r(79078),
                eg = r(58174),
                ed = r(74906),
                eh = r(2952),
                eG = r(44342),
                ep = r(71062),
                ef = r(72233),
                eR = r(8187),
                ev = r(67311),
                eb = r(78321),
                ew = r(2209),
                em = r(59628),
                eV = r(58025),
                ek = r(59342),
                eC = r(95067),
                eP = r(87452);
            class ey extends eP.P {
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
                    (super(e, t), (0, eV._)(this, 'language', void 0), (this.language = r));
                }
            }
            class eL extends ey {
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
                    let t = 'auth-iframe-'.concat((0, ek.A)()),
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
                        (0, eV._)(this, 'userId', void 0),
                        (0, eV._)(this, 'passportLoginCached', void 0),
                        (0, eV._)(this, 'intervalId', void 0),
                        (0, eV._)(this, 'observerCallback', void 0),
                        (this.userId = o),
                        (this.passportLoginCached = this.passportLogin));
                }
            }
            var eU = r(75749),
                eA = r(41871),
                eE = r(62631),
                eq = r(94564);
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
                    ((0, eV._)(this, 'tld', void 0), (0, eV._)(this, 'token', void 0), (this.tld = e), (this.token = t));
                }
            }
            var eT = r(28869),
                e_ = r(41),
                eS = r(767),
                eW = r(67154),
                ex = r(36484),
                eD = r(35591),
                eB = r(48068);
            let eM = (e) => {
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
                                    client: (0, eB._)(),
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
            var eI = r(23285),
                eZ = r(32817),
                ez = r(18370);
            let eX = /^application\/json(;\s?charset=\S+)?$/;
            class eN {
                async afterResponse(e) {
                    try {
                        if (!e.headers['content-range'] && e.headers['content-type'] && eX.test(e.headers['content-type'])) {
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
                    ((0, eV._)(this, 'logger', void 0), (this.logger = e));
                }
            }
            var eO = r(75637);
            let eY = (e, t) => {
                let { browserName: r, browserVersion: o, newConnector: n } = t,
                    s = e.get(ex.oo),
                    i = e.get(ex.Zf),
                    a = (0, ek.A)(),
                    l = {
                        info: { app_name: r || 'Browser', app_version: o || '', title: 'Browser '.concat(r), device_id: a, type: eO.bq.WEB },
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
                    p = [new eO.zT(h)];
                return (
                    G && p.push(new eO.qP(G)),
                    new eO.Jd({
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
            var eQ = r(18752);
            async function e$(e) {
                let {
                        tld: t,
                        env: eV,
                        publicConfig: ek,
                        serverDetectedLocale: eP,
                        changeLanguageToken: ey,
                        browserName: eB,
                        browserVersion: eX,
                        executionContextStore: eO,
                        customApiPrefixUrl: e$,
                        customApiToken: ej,
                    } = e,
                    eF = (0, n.u0)(ek, t, e$),
                    eK = await (0, eE.B)(eV),
                    eJ = 'production' !== eV ? eh.PW : void 0,
                    e0 = new i.Dt()
                        .registerMany({
                            [ex.SX]: (0, i.Gr)(() => eV),
                            [ex.V4]: (0, i.Gr)(() => ek),
                            [ex.xF]: (0, i.Gr)(() => null),
                            [ex.qt]: (0, i.Gr)(() => eF),
                            [ex.P0]: (0, i.Gr)(() => new s.q(eK)),
                            [ex.Zi]: (0, i.Gr)(() => new eq.Y(eO)),
                        })
                        .register(
                            ex.WA,
                            (0, i.Gr)((e) => {
                                let t = e.get(ex.Zi);
                                return new eW.V(t);
                            }),
                        )
                        .registerMany({
                            [ex.Zf]: (0, i.Gr)((e) => {
                                let t = e.get(ex.P0).get(eA.qV);
                                return new g.r({
                                    maxLogLevel: u.cm.DEBUG,
                                    secureFields: eG.x,
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
                                    new ((0, e_.b)(g.r))({
                                        maxLogLevel: u.cm.DEBUG,
                                        secureFields: eG.x,
                                        disableLogToConsole: 'development' !== e.get(ex.SX),
                                        additionalData: {
                                            get puid() {
                                                return e.get(ex.WA).getPassportUid();
                                            },
                                        },
                                    }),
                            ),
                            [ex.oo]: (0, i.Gr)(() => new ev.V8()),
                            [ex.DP]: (0, i.Gr)(() => new ev.V8()),
                            [ex.RG]: (0, i.Gr)(async (e) => {
                                let {
                                    mocks: { enabled: o, mocksProviderUrl: s, urlCapturePattern: i },
                                } = e.get(ex.V4);
                                if (!o) return () => Promise.resolve(null);
                                let { initMocks: a } = await Promise.all([r.e(6089), r.e(9662)]).then(r.bind(r, 39662)),
                                    l = e.get(ex.DP),
                                    c = e.get(ex.Zf),
                                    u = 'production' !== e.get(ex.SX) || n.R8 ? '' : '/rsc-cache-worker.js',
                                    g = () => {
                                        var e;
                                        return null != (e = l.get(h.L, !1)) ? e : null;
                                    },
                                    d = i || ''.concat(eF, '/*');
                                return () =>
                                    a({
                                        getMocksConfiguration: g,
                                        log: (e, t) => c.debug('[Mocks] | client: '.concat(e), t),
                                        mocksProviderUrl: s,
                                        serviceWorkerUrl: u,
                                        urlCapturePattern: (0, G.r)(d, t, p.B),
                                    }).catch((e) => c.debug('[Mocks] | client: initialization failed. '.concat(e)));
                            }),
                            [ex.U2]: (0, i.Gr)(() => new ev.si()),
                            [ex.vH]: (0, i.Gr)(() => new ev.fW()),
                            [ex.y$]: (0, i.Gr)(() => new eR.Mz({ config: { useEntitiesStorage: !1, useFileStorage: !1, useResponseCacheStorage: !1 } })),
                            [ex.Xc]: (0, i.Gr)((e) => {
                                let r = e.get(ex.oo),
                                    o = e.get(ex.Zf),
                                    { i18n: n } = e.get(ex.V4),
                                    s = new Date(Date.now() + 24 * n.cookieExpirationDays * 36e5);
                                return new eT.E({
                                    serverDetectedLocale: eP,
                                    logger: o,
                                    changeLanguageHandler: new eH(t, ey),
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
                            [ex.QG]: (0, i.Gr)((e) => new eL(e.get(ex.DP), e.get(ex.V4), e.get(ex.Xc).getLanguage(), e.get(ex.WA))),
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
                                            g = new ep.N(c),
                                            d = new eN(c);
                                        return (
                                            (a.timeout = u.defaultTimeout),
                                            (a.hooks = {
                                                afterResponse: [d.afterResponseHook, ...((null == a || null == (t = a.hooks) ? void 0 : t.afterResponse) || [])],
                                                afterTimeout: [g.beforeErrorHook, ...((null == a || null == (r = a.hooks) ? void 0 : r.afterTimeout) || [])],
                                                beforeError: [g.beforeErrorHook, ...((null == a || null == (o = a.hooks) ? void 0 : o.beforeError) || [])],
                                                beforeRequest: [
                                                    eh.xW,
                                                    (0, eh.uY)(ej),
                                                    ...(eJ ? [eJ] : []),
                                                    d.beforeRequestHook,
                                                    ...((null == a || null == (n = a.hooks) ? void 0 : n.beforeRequest) || []),
                                                ],
                                                beforeRetry: [eh.ie, g.beforeRetryHook, ...((null == a || null == (s = a.hooks) ? void 0 : s.beforeRetry) || [])],
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
                                            u = eM({ createDefaultHttpClient: () => c, defaultPrefixUrl: eF, i18nStorage: i, publicConfig: a, userId: l })(
                                                f.Q,
                                                'accountResource',
                                            );
                                        return (
                                            (r.hooks = { beforeError: [(0, eU.o)(n, u), ...((null == r || null == (t = r.hooks) ? void 0 : t.beforeError) || [])] }),
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
                                            g = new ep.N(c);
                                        return (
                                            (a.timeout = u.defaultTimeout),
                                            (a.hooks = {
                                                afterResponse: [...((null == a || null == (t = a.hooks) ? void 0 : t.afterResponse) || [])],
                                                afterTimeout: [g.beforeErrorHook, ...((null == a || null == (r = a.hooks) ? void 0 : r.afterTimeout) || [])],
                                                beforeError: [g.beforeErrorHook, ...((null == a || null == (o = a.hooks) ? void 0 : o.beforeError) || [])],
                                                beforeRequest: [eh.xW, ...((null == a || null == (n = a.hooks) ? void 0 : n.beforeRequest) || [])],
                                                beforeRetry: [eh.ie, g.beforeRetryHook, ...((null == a || null == (s = a.hooks) ? void 0 : s.beforeRetry) || [])],
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
                                return eM({
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
                            [ex.tz]: (0, i.Gr)((e) => e.get(ex.GV)(w.B, 'landingResource')),
                            [ex.$8]: (0, i.Gr)((e) => e.get(ex.GV)(m.w, 'libraryResource')),
                            [ex.Oo]: (0, i.Gr)((e) => e.get(ex.GV)(V.L, 'tracksResource')),
                            [ex.$5]: (0, i.Gr)((e) => e.get(ex.GV)(k._, 'availabilityResource')),
                            [ex.qT]: (0, i.Gr)((e) => e.get(ex.GV)(C.v, 'getFileInfoResource')),
                            [ex.DV]: (0, i.Gr)((e) => e.get(ex.GV)(P.K, 'resourcesResource')),
                            [ex.X4]: (0, i.Gr)((e) => e.get(ex.GV)(y.a, 'topResource')),
                            [ex.O9]: (0, i.Gr)((e) => e.get(ex.GV)(L.b, 'artistsResource')),
                            [ex.E]: (0, i.Gr)((e) => e.get(ex.GV)(U.V, 'slidesResource')),
                            [ex.wH]: (0, i.Gr)((e) => e.get(ex.GV)(A.c, 'redAlertResource')),
                            [ex.ok]: (0, i.Gr)((e) => e.get(ex.GV)(E.Z, 'rotorResource')),
                            [ex.X8]: (0, i.Gr)((e) => e.get(ex.GV)(q.w, 'waveResource')),
                            [ex.yq]: (0, i.Gr)((e) => e.get(ex.GV)(H.p, 'searchResource')),
                            [ex.NN]: (0, i.Gr)((e) => e.get(ex.GV)(T.v, 'searchResource')),
                            [ex.qN]: (0, i.Gr)((e) => e.get(ex.GV)(_.T, 'playlistResource')),
                            [ex.ro]: (0, i.Gr)((e) => e.get(ex.GV)(S.e, 'playlistsResource')),
                            [ex.nM]: (0, i.Gr)((e) => e.get(ex.GV)(W.o, 'pinResource')),
                            [ex.Ut]: (0, i.Gr)((e) => e.get(ex.GV)(x.$, 'metatagsResource')),
                            [ex.K1]: (0, i.Gr)((e) => e.get(ex.GV)(D.p, 'tagResource')),
                            [ex.eu]: (0, i.Gr)((e) => e.get(ex.GV)(B.D, 'feedResource')),
                            [ex.aE]: (0, i.Gr)((e) => e.get(ex.GV)(M.l, 'pinsResource')),
                            [ex.ki]: (0, i.Gr)((e) => e.get(ex.GV)(I.I, 'musicHistoryResource')),
                            [ex.c9]: (0, i.Gr)((e) => e.get(ex.GV)(Z.s, 'dynamicPagesResource')),
                            [ex.en]: (0, i.Gr)((e) => e.get(ex.GV)(z.B, 'chartResource')),
                            [ex.jQ]: (0, i.Gr)((e) => e.get(ex.GV)(X._, 'clipsResource')),
                            [ex.cZ]: (0, i.Gr)((e) => e.get(ex.GV)(N.c, 'lyricViewsResource')),
                            [ex.Zl]: (0, i.Gr)((e) => e.get(ex.GV)(O.D, 'nonMusicResource')),
                            [ex.CN]: (0, i.Gr)((e) => e.get(ex.GV)(Y.N, 'donationResource')),
                            [ex.JM]: (0, i.Gr)((e) => e.get(ex.GV)(Q.c, 'streamsResource')),
                            [ex.P1]: (0, i.Gr)((e) => e.get(ex.GV)($.S, 'loaderResource')),
                            [ex.re]: (0, i.Gr)((e) => {
                                let t = e.get(ex.GV),
                                    r = e.get(ex.mr)({ credentials: 'omit' });
                                return t(j.s, 'prefixlessResource', { httpClient: r, prefixUrl: '' });
                            }),
                            [ex.Lk]: (0, i.Gr)((e) => e.get(ex.GV)(F.g, 'filtersResource')),
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
                                    { request_id: b, puid: w } = null != (r = e.get(ex.Zi).getStore()) ? r : {};
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
                                    requester: (0, eQ.n)(R, v),
                                    puid: (null == w ? void 0 : w.toString()) || null,
                                    rumOptions: { platform: g, page: d, requestId: b },
                                });
                            }),
                            [ex.$$]: (0, i.Gr)((e) => e.get(ex.GV)(K.E, 'ugcResource')),
                            [ex.sv]: (0, i.Gr)((e) => e.get(ex.GV)(J.L, 'collectionResource')),
                            [ex.gd]: (0, i.Gr)((e) => e.get(ex.GV)(ee.z, 'adsResource')),
                            [ex.Ez]: (0, i.Gr)((e) => e.get(ex.GV)(et.l, 'personalResource')),
                            [ex.N1]: (0, i.Gr)((e) => e.get(ex.GV)(er.H, 'disclaimersResource')),
                            [ex.u2]: (0, i.Gr)((e) => e.get(ex.GV)(eo.J, 'familyResource')),
                            [ex.TD]: (0, i.Gr)((e) => e.get(ex.GV)(en.L, 'childrenLandingResource')),
                            [ex.wK]: (0, i.Gr)((e) => e.get(ex.GV)(es.u, 'landingBlocksResource')),
                            [ex.dh]: (0, i.Gr)((e) => e.get(ex.GV)(ei.q, 'promoResource')),
                            [ex.LC]: (0, i.Gr)((e) => {
                                let t = e.get(ex.CR),
                                    r = e.get(ex.V4),
                                    o = t({ credentials: 'include' }),
                                    n = r.resources.musicExternalApi;
                                return (0, ez._)({ httpClient: o, musicExternalApi: n, publicConfig: r });
                            }),
                            [ex.W5]: (0, i.Gr)((e) => {
                                let t = e.get(ex.CR),
                                    r = e.get(ex.V4),
                                    o = t({ credentials: 'include' });
                                return (0, eZ.Z)({ httpClient: o, publicConfig: r });
                            }),
                            [ex.EN]: (0, i.Gr)((e) => e.get(ex.GV)(ea._, 'afterTrackResource')),
                            [ex.PL]: (0, i.Gr)((e) => e.get(ex.GV)(el.w, 'labelsResource')),
                            [ex.DT]: (0, i.Gr)((e) => e.get(ex.GV)(ec.O, 'concertsResource')),
                            [ex.dA]: (0, i.Gr)((e) => e.get(ex.GV)(eu.Q, 'wordsResource')),
                            [ex.$Y]: (0, i.Gr)((e) => e.get(ex.GV)(eg.C, 'wheelResource')),
                            [ex.VR]: (0, i.P9)((e) => () => {
                                let t = e.get(ex.A4),
                                    r = e.get(ex.V4),
                                    o = (0, eI.i)({ httpClientFactory: t, publicConfig: r });
                                return (0, eS.P)({ probe: (e) => o.ping({ signal: e }) });
                            }),
                            [ex.zj]: (0, i.Gr)((e) => e.get(ex.GV)(ed.U, 'lumenResource')),
                            [ex.vg]: (0, i.Gr)(() => (0, eb.a)()),
                        })
                        .register(
                            ex.ff,
                            (0, i.Gr)((e) => {
                                let t = e.get(ex.N1);
                                return (0, eD.Y)(t);
                            }),
                        )
                        .registerMany({
                            [ex.UB]: (0, i.Gr)((e) => {
                                let t = e.get(ex.vg);
                                return new d.B(t);
                            }),
                            [ex.Tq]: (0, i.Gr)((e) => {
                                var t;
                                let r = e.get(ex.W5);
                                return (null == (t = window.Ya) ? void 0 : t.Rum) ? new d.G((0, em.y)(), r, window.Ya.Rum) : null;
                            }),
                        });
                return e0
                    .register(
                        ex.by,
                        (0, i.Gr)(() => eY(e0, { browserName: eB, browserVersion: eX, newConnector: !1 })),
                    )
                    .register(
                        ex.s_,
                        (0, i.Gr)(() => eY(e0, { browserName: eB, browserVersion: eX, newConnector: !0 })),
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
                                    visibilityConfig: { type: 'listVisibility', virtualizedMetadataLoader: new ef.yq({ resizeObserverAdapter: new ef.u2() }) },
                                },
                                plugins: [new ew.X({ logger: t })],
                            });
                        }),
                    );
            }
        },
    },
]);
