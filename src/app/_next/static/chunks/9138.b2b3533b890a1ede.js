'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9138],
    {
        19138: (e, t, r) => {
            (r.r(t), r.d(t, { createDesktopContainer: () => e4 }));
            var o = r(1817),
                i = r(93588),
                s = r(73650),
                n = r(13486),
                a = r(59353),
                u = r(73829),
                l = r(79157),
                g = r(9248),
                c = r(4401),
                d = r(99950),
                h = r(69935),
                p = r(90887),
                m = r(52830),
                G = r(48106),
                f = r(27940),
                v = r(10696),
                w = r(50302),
                k = r(16249),
                y = r(27354),
                V = r(18420),
                R = r(68510),
                P = r(94638),
                C = r(91736),
                U = r(15545),
                b = r(96208),
                L = r(81102),
                A = r(74128),
                D = r(33031),
                O = r(58123),
                S = r(25678),
                E = r(3030),
                z = r(90496),
                T = r(2794),
                x = r(28596),
                _ = r(77448),
                M = r(32141),
                q = r(80389),
                B = r(2242),
                Z = r(89646),
                H = r(76597),
                I = r(59815),
                N = r(80188),
                F = r(80250),
                Y = r(79250),
                W = r(60070),
                X = r(3374),
                $ = r(59158),
                Q = r(36064),
                K = r(12482),
                j = r(9902),
                J = r(42132),
                ee = r(83894),
                et = r(65844),
                er = r(61279),
                eo = r(38125),
                ei = r(25630),
                es = r(15178),
                en = r(33314),
                ea = r(79078),
                eu = r(58174),
                el = r(74906),
                eg = r(2952),
                ec = r(44342),
                ed = r(71062),
                eh = r(72233),
                ep = r(8187),
                em = r(67311),
                eG = r(78321),
                ef = r(2209),
                ev = r(59628),
                ew = r(58025),
                ek = r(95067),
                ey = r(87758),
                eV = r(53712),
                eR = r(57024),
                eP = r(87452);
            let eC = (e) => (void 0 === e ? 'missing' : e ? 'present' : 'empty');
            class eU extends eP.P {
                check() {
                    if (!this.dataIsLoaded) return;
                    let e = this.passportLogin,
                        t = this.token,
                        r = this.tokenOwnerLogin,
                        o = this.isOAuthPage ? 'oauth' : 'product',
                        i = e && r ? (e === r ? 'match' : 'mismatch') : 'unavailable',
                        s = (s) => ({
                            stage: 'authorization-decision',
                            page: o,
                            token: t ? 'present' : 'missing',
                            passportLogin: eC(e),
                            tokenOwnerLogin: eC(r),
                            loginComparison: i,
                            decision: s,
                        });
                    if (!e && t) {
                        (this.reportAuthorizationDecision(s('remove-token-reload'), 'passport-login-missing'), this.removeToken(), this.reloadPage());
                        return;
                    }
                    if (!t && e && !this.isOAuthPage) {
                        (this.reportAuthorizationDecision(s('redirect-authorization'), 'missing-token'), this.redirectToAuthorizationUrl());
                        return;
                    }
                    if ('string' == typeof e && 'string' == typeof r && e && r && e !== r) {
                        (this.reportAuthorizationDecision(s('redirect-oauth'), 'login-mismatch'), this.redirectToOAuthUrl());
                        return;
                    }
                    this.reportAuthorizationDecision(s('continue'));
                }
                get isOAuthPage() {
                    return window.location.pathname.endsWith('/oauth');
                }
                getRedirectUri() {
                    let e = ''.concat(this.pathname).concat(this.searchParams ? '?'.concat(this.searchParams) : '');
                    e.charAt(0) === eV.Z.main.href && (e = e.substring(1));
                    let t = new URLSearchParams({ redirectUri: e, language: this.language });
                    return ''.concat(origin, '/oauth?').concat(t.toString());
                }
                get oauthUrl() {
                    let {
                            oauthCredentials: { host: e, clientId: t },
                        } = this.config,
                        r = (0, p.r)(e, ey.r.RU, m.B),
                        o = new URL(''.concat(r, '/authorize')),
                        i = this.getRedirectUri();
                    return (
                        o.searchParams.append('response_type', 'token'),
                        o.searchParams.append('display', 'popup'),
                        o.searchParams.append('scope', 'music:content'),
                        o.searchParams.append('scope', 'music:read'),
                        o.searchParams.append('scope', 'music:write'),
                        o.searchParams.append('client_id', t),
                        o.searchParams.append('redirect_uri', i),
                        o.searchParams.append('state', this.oauthState),
                        o.searchParams.append('origin', this.passportOrigin),
                        o.searchParams.append('language', this.language),
                        o.toString()
                    );
                }
                get authorizationUrl() {
                    let e = this.getPassportHostWithTld(ey.r.RU, m.B);
                    if (!e) return;
                    let t = new URL(''.concat(e, '/auth'));
                    return (
                        t.searchParams.append('noreturn', '1'),
                        t.searchParams.append('origin', this.passportOrigin),
                        t.searchParams.append('language', this.language),
                        t.searchParams.append('retpath', this.oauthUrl),
                        t.toString()
                    );
                }
                getAuthorizationUrlWithParams(e) {
                    let t = this.getPassportHostWithTld(this.tld, m.B);
                    if (t) return ''.concat(t, '/auth?').concat(e.toString());
                }
                get childPageUrl() {
                    let e = this.getPassportHostWithTld(this.tld, m.B);
                    if (!e) return;
                    let t = new URLSearchParams({ origin: this.passportOrigin, retpath: this.oauthUrl, language: this.language });
                    return ''.concat(e, '/auth/child/restrict?').concat(t.toString());
                }
                reloadPage() {
                    window.location.reload();
                }
                redirectToOAuthUrl() {
                    this.oauthUrl && this.redirect(this.oauthUrl);
                }
                redirectToAuthorizationUrl() {
                    this.authorizationUrl && this.redirect(this.authorizationUrl);
                }
                redirectToChildPageUrl() {
                    this.childPageUrl && this.redirect(this.childPageUrl);
                }
                setTokenOwnerLogin(e) {
                    this.tokenOwnerLogin = e;
                }
                setDataIsLoaded() {
                    this.dataIsLoaded = !0;
                }
                setToken(e) {
                    let t = (0, eR.C8)(e.expiresIn),
                        r = this.oauthState;
                    if (!e.state || !r)
                        return (
                            (0, eR.uV)({ stage: 'token-storage', state: 'missing', write: 'skipped', readback: 'not-attempted', ttl: t, result: 'state-missing' }),
                            'state-missing'
                        );
                    if (e.state !== r)
                        return (
                            (0, eR.uV)({ stage: 'token-storage', state: 'mismatch', write: 'skipped', readback: 'not-attempted', ttl: t, result: 'state-mismatch' }),
                            'state-mismatch'
                        );
                    this.storage.set(ek.c.Oauth, e.token, { expires: Math.floor(e.expiresIn / 86400) });
                    let o = !!this.storage.get(ek.c.Oauth),
                        i = o ? 'stored' : 'readback-missing';
                    return ((0, eR.uV)({ stage: 'token-storage', state: 'match', write: 'attempted', readback: o ? 'present' : 'missing', ttl: t, result: i }), i);
                }
                get token() {
                    if (this.passportLogin) return this.storage.get(ek.c.Oauth) || void 0;
                }
                removeToken() {
                    this.storage.remove(ek.c.Oauth);
                }
                updateOauthState() {
                    let e = Math.round(1e11 * Math.random()).toString(16);
                    this.storage.set(ek.c.OauthState, e, { expires: 1 });
                }
                get oauthState() {
                    return this.storage.get(ek.c.OauthState) || '';
                }
                reportAuthorizationDecision(e, t) {
                    let r = JSON.stringify(e);
                    this.reportedAuthorizationDecisions.has(r) ||
                        (this.reportedAuthorizationDecisions.add(r), t && (0, eR.uV)({ stage: 'attempt-start', trigger: t }), (0, eR.uV)(e));
                }
                constructor(e, t, r) {
                    (super(e, t),
                        (0, ew._)(this, 'language', void 0),
                        (0, ew._)(this, 'dataIsLoaded', void 0),
                        (0, ew._)(this, 'tokenOwnerLogin', void 0),
                        (0, ew._)(this, 'reportedAuthorizationDecisions', void 0),
                        (this.language = r),
                        (this.dataIsLoaded = !1),
                        (this.reportedAuthorizationDecisions = new Set()),
                        this.oauthState || this.updateOauthState(),
                        this.check());
                }
            }
            class eb extends eU {
                get token() {
                    return this.storage.get(ek.c.Oauth) || void 0;
                }
                loadDataFromElectron() {
                    Promise.allSettled([this.loadPassportLogin(), this.loadYandexUid()]).then(() => {
                        (this.setDataIsLoaded(), this.check());
                    });
                }
                async loadPassportLogin() {
                    if (window.musicDesktop) {
                        let e = await window.musicDesktop.authorization.getPassportLogin();
                        return ((this.passportLoginFromElectron = e), e);
                    }
                    return Promise.resolve(void 0);
                }
                async loadYandexUid() {
                    if (window.musicDesktop) {
                        let e = await window.musicDesktop.authorization.getYandexUid();
                        return ((this.yadexUidFromElectron = e), e);
                    }
                    return Promise.resolve(void 0);
                }
                get passportLogin() {
                    return this.passportLoginFromElectron;
                }
                get yandexUid() {
                    return this.yadexUidFromElectron;
                }
                constructor(e, t, r) {
                    (super(e, t, r), (0, ew._)(this, 'passportLoginFromElectron', void 0), (0, ew._)(this, 'yadexUidFromElectron', void 0), this.loadDataFromElectron());
                }
            }
            var eL = r(75749),
                eA = r(41871),
                eD = r(62631),
                eO = r(94564);
            class eS {
                onChangeLanguage() {
                    window.location.reload();
                }
            }
            var eE = r(28869),
                ez = r(41),
                eT = r(767),
                ex = r(79645),
                e_ = r(92231),
                eM = r(67154),
                eq = r(36484),
                eB = r(35591),
                eZ = r(23285),
                eH = r(32817),
                eI = r(18370),
                eN = r(47742),
                eF = r(48068),
                eY = r(27558);
            let eW = (e) => {
                let { authorization: t, cacheController: r, httpClient: o, i18nStorage: i, prefixUrl: s, publicConfig: n } = e,
                    a = i.getLanguage(),
                    u = n.resources.musicExternalApi,
                    l = {
                        prefixUrl: s,
                        retryPolicyConfig: u.retryPolicyConfig,
                        timeouts: u.timeouts.accountResource,
                        params: { common: { oauth: t.token, client: (0, eF._)(), device: (0, eY.h)(), language: a } },
                    };
                return r ? new ep.wV(o, l, { cacheController: r }) : new eN.Q(o, l);
            };
            var eX = r(91162);
            let e$ = (e) => {
                let { resource: t, resourceName: r, slam: o } = e,
                    i = o.cacheController;
                return i ? (0, ep._2)({ resource: t, cacheController: i, config: { common: { resourceName: r }, enabled: !0, priority: ep.OU.HIGH, ttl: 6048e5 } }) : t;
            };
            var eQ = r(75637),
                eK = r(59342),
                ej = r(90208);
            let eJ = (e, t) => {
                let r = e.get(eq.oo),
                    o = e.get(eq.U2),
                    i = e.get(eq.Zf),
                    s = o.get(ek.c.YnisonDeviceId);
                s || ((s = (0, eK.A)()), o.set(ek.c.YnisonDeviceId, s));
                let n = {
                        info: { app_name: 'Desktop', app_version: (0, ej.B)() || '', title: 'Music Desktop App', device_id: s, type: eQ.bq.WEB_DESKTOP },
                        volumeGranularity: 20,
                        get defaultVolume() {
                            var a;
                            return null != (a = r.get(ek.c.YmPlayerVolume)) ? a : void 0;
                        },
                    },
                    u = e.get(eq.WA).getPassportUid(),
                    l = e.get(eq.QG),
                    g = e.get(eq.V4),
                    c = e.get(eq.UB),
                    d = e.get(eq.Tq),
                    h = [new eQ.zT(c)];
                return (
                    d && h.push(new eQ.qP(d)),
                    new eQ.Jd({
                        logger: i,
                        deviceConfig: n,
                        multiAuthUserId: u,
                        oauth: l.token,
                        ynisonConnectionConfig: g.ynisonConnectionConfig,
                        metricsTransport: h,
                        variables: { newConnector: t, isShadow: !0 },
                    })
                );
            };
            var e0 = r(18752);
            async function e4(e) {
                let { tld: t, env: ew, publicConfig: ey, customApiPrefixUrl: eV } = e,
                    eR = (0, e_.u)(),
                    eP = (0, i.u0)(ey, t, eV),
                    eC = (0, i.Ef)(ey, eR),
                    eU = await (0, eD.B)(ew),
                    eN = {},
                    eQ = new n.Dt()
                        .registerMany({
                            [eq.SX]: (0, n.Gr)(() => ew),
                            [eq.V4]: (0, n.Gr)(() => ey),
                            [eq.xF]: (0, n.Gr)(() => null),
                            [eq.qt]: (0, n.Gr)(() => eP),
                            [eq.P0]: (0, n.Gr)(() => new s.q(eU)),
                            [eq.Zi]: (0, n.Gr)(() => new eO.Y(eN)),
                        })
                        .register(
                            eq.WA,
                            (0, n.Gr)((e) => {
                                let t = e.get(eq.Zi);
                                return new eM.V(t);
                            }),
                        )
                        .registerMany({
                            [eq.Zf]: (0, n.Gr)((e) => {
                                let t = e.get(eq.P0).get(eA.qV);
                                return new c.r({
                                    maxLogLevel: g.cm.DEBUG,
                                    secureFields: ec.x,
                                    disableLogToConsole: !t,
                                    additionalData: {
                                        get puid() {
                                            return e.get(eq.WA).getPassportUid();
                                        },
                                    },
                                });
                            }),
                            [eq.RG]: (0, n.Gr)(async (e) => {
                                let {
                                    mocks: { enabled: o, mocksProviderUrl: i, urlCapturePattern: s },
                                } = e.get(eq.V4);
                                if (!o) return () => Promise.resolve(null);
                                let { initMocks: n } = await Promise.all([r.e(6089), r.e(9662)]).then(r.bind(r, 39662)),
                                    a = e.get(eq.U2),
                                    u = e.get(eq.Zf),
                                    l = 'production' === e.get(eq.SX) ? '/rsc-cache-worker.js' : '',
                                    g = () => {
                                        var e;
                                        return null != (e = a.get(h.L, !1)) ? e : null;
                                    },
                                    c = s || ''.concat(eP, '/*');
                                return () =>
                                    n({
                                        getMocksConfiguration: g,
                                        log: (e, t) => u.debug('[Mocks] | desktop: '.concat(e), t),
                                        mocksProviderUrl: i,
                                        serviceWorkerUrl: l,
                                        urlCapturePattern: (0, p.r)(c, t, m.B),
                                    }).catch((e) => u.debug('[Mocks] | desktop: initialization failed. '.concat(e)));
                            }),
                            [eq.TK]: (0, n.Gr)(
                                (e) =>
                                    new ((0, ez.b)(c.r))({
                                        maxLogLevel: g.cm.DEBUG,
                                        secureFields: ec.x,
                                        disableLogToConsole: 'development' !== e.get(eq.SX),
                                        additionalData: {
                                            get puid() {
                                                return e.get(eq.WA).getPassportUid();
                                            },
                                        },
                                    }),
                            ),
                            [eq.oo]: (0, n.Gr)(() => new em.si()),
                            [eq.DP]: (0, n.Gr)(() => new em.MJ('client desktop', 'cookie')),
                            [eq.U2]: (0, n.Gr)(() => new em.si()),
                            [eq.vH]: (0, n.Gr)(() => new em.fW()),
                            [eq.Xc]: (0, n.Gr)((e) => {
                                let t = e.get(eq.oo),
                                    r = e.get(eq.Zf);
                                return new eE.E({
                                    isBuildTypeDesktop: !0,
                                    logger: r,
                                    changeLanguageHandler: new eS(),
                                    storage: {
                                        get: () => t.get(ek.c.SavedUserLanguage),
                                        set(e) {
                                            t.set(ek.c.SavedUserLanguage, e);
                                        },
                                    },
                                });
                            }),
                        })
                        .registerMany({
                            [eq.y$]: (0, n.Gr)((e) => {
                                let t = e.get(eq.Zf),
                                    r = e.get(eq.oo),
                                    o = new ep.Mz({
                                        config: { useEntitiesStorage: !0, useFileStorage: !0, useResponseCacheStorage: !0 },
                                        plugins: [new ep.wK({ logger: t })],
                                    });
                                return (
                                    o.createCacheController({
                                        repositoryContainer: o.repositoryContainer,
                                        variables: {
                                            get uid() {
                                                return r.get(ek.c.YmUid);
                                            },
                                            get isOffline() {
                                                return !!o.network.status.isOffline;
                                            },
                                        },
                                    }),
                                    o
                                );
                            }),
                            [eq.Hm]: (0, n.P9)(
                                () =>
                                    function () {
                                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                        return new u.Q(e);
                                    },
                            ),
                            [eq.gu]: (0, n.P9)(
                                () =>
                                    function () {
                                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                        return new a.S(e);
                                    },
                            ),
                        })
                        .registerMany({
                            [eq.QG]: (0, n.Gr)((e) => new eb(e.get(eq.oo), e.get(eq.V4), e.get(eq.Xc).getLanguage())),
                            [eq.OP]: (0, n.P9)(
                                (e) =>
                                    function () {
                                        var t, r, o, i, s;
                                        let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                            a = arguments.length > 1 ? arguments[1] : void 0,
                                            u = e.get(eq.Zf),
                                            l = e.get(eq.U2),
                                            g = new ed.N(u),
                                            {
                                                resources: { musicExternalApi: c },
                                            } = e.get(eq.V4);
                                        ((n.timeout = c.defaultTimeout),
                                            (n.hooks = {
                                                afterResponse: [...((null == n || null == (t = n.hooks) ? void 0 : t.afterResponse) || [])],
                                                beforeError: [g.beforeErrorHook, ...((null == n || null == (r = n.hooks) ? void 0 : r.beforeError) || [])],
                                                beforeRequest: [eg.xW, ...((null == n || null == (o = n.hooks) ? void 0 : o.beforeRequest) || [])],
                                                afterTimeout: [g.beforeErrorHook, ...((null == n || null == (i = n.hooks) ? void 0 : i.afterTimeout) || [])],
                                                beforeRetry: [eg.ie, g.beforeRetryHook, ...((null == n || null == (s = n.hooks) ? void 0 : s.beforeRetry) || [])],
                                            }));
                                        let d = a(n);
                                        return (0, ep.sY)(d, {
                                            get isOffline() {
                                                return (0, ex.g)(l);
                                            },
                                        });
                                    },
                            ),
                        })
                        .registerMany({
                            [eq.A4]: (0, n.P9)(
                                (e) =>
                                    function () {
                                        var t;
                                        let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                            o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e.get(eq.OP),
                                            i = e.get(eq.QG),
                                            s = e.get(eq.Hm),
                                            n = e.get(eq.Xc),
                                            a = e.get(eq.V4),
                                            u = eW({ authorization: i, cacheController: null, httpClient: o({}, s), i18nStorage: n, prefixUrl: eP, publicConfig: a });
                                        return (
                                            (r.hooks = { beforeError: [(0, eL.o)(i, u), ...((null == r || null == (t = r.hooks) ? void 0 : t.beforeError) || [])] }),
                                            o(r, s)
                                        );
                                    },
                            ),
                        })
                        .register(
                            eq.CR,
                            (0, n.P9)(
                                (e) =>
                                    function () {
                                        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                        return e.get(eq.A4)(t, e.get(eq.gu));
                                    },
                            ),
                        )
                        .register(
                            eq.GV,
                            (0, n.P9)((e) => {
                                let t = e.get(eq.QG),
                                    r = e.get(eq.qt),
                                    o = e.get(eq.Xc);
                                return ((e) => {
                                    let { authorization: t, createDefaultHttpClient: r, defaultPrefixUrl: o, i18nStorage: i, publicConfig: s } = e;
                                    return (e, n, a) => {
                                        var u, l, g;
                                        let c = s.resources.musicExternalApi,
                                            d = null != (u = null == a ? void 0 : a.prefixUrl) ? u : o,
                                            h = i.getLanguage(),
                                            p = null == a ? void 0 : a.httpClient;
                                        return (
                                            void 0 === p && (p = r()),
                                            new e(p, {
                                                prefixUrl: d,
                                                retryPolicyConfig: c.retryPolicyConfig,
                                                timeouts: c.timeouts[n],
                                                params: {
                                                    common: {
                                                        ...((null == a ? void 0 : a.oauth) === null
                                                            ? {}
                                                            : { oauth: null != (l = null == a ? void 0 : a.oauth) ? l : t.token }),
                                                        client: (0, eF._)(),
                                                        ...((null == a ? void 0 : a.device) === null
                                                            ? {}
                                                            : { device: null != (g = null == a ? void 0 : a.device) ? g : (0, eY.h)() }),
                                                        language: h,
                                                    },
                                                },
                                            })
                                        );
                                    };
                                })({ authorization: t, createDefaultHttpClient: () => e.get(eq.A4)(), defaultPrefixUrl: r, i18nStorage: o, publicConfig: e.get(eq.V4) });
                            }),
                        )
                        .registerMany({
                            [eq.$I]: (0, n.Gr)((e) => {
                                let t = e.get(eq.QG),
                                    r = e.get(eq.A4),
                                    o = e.get(eq.Xc),
                                    i = e.get(eq.qt),
                                    s = e.get(eq.V4);
                                return eW({
                                    authorization: t,
                                    cacheController: e.get(eq.y$).cacheController,
                                    httpClient: r(),
                                    i18nStorage: o,
                                    prefixUrl: i,
                                    publicConfig: s,
                                });
                            }),
                            [eq._1]: (0, n.Gr)((e) => e.get(eq.GV)(G.d, 'usersResource')),
                            [eq.V3]: (0, n.Gr)((e) => {
                                let t = e.get(eq.QG),
                                    r = e.get(eq.A4),
                                    o = e.get(eq.Xc),
                                    i = e.get(eq.qt);
                                return ((e) => {
                                    let { authorization: t, httpClientFactory: r, i18nStorage: o, prefixUrl: i, publicConfig: s, slam: n } = e,
                                        a = r(),
                                        u = o.getLanguage(),
                                        l = s.resources.musicExternalApi,
                                        g = {
                                            prefixUrl: i,
                                            retryPolicyConfig: l.retryPolicyConfig,
                                            timeouts: l.timeouts.landingResource,
                                            params: { common: { oauth: t.token, client: (0, eF._)(), device: (0, eY.h)(), language: u } },
                                        };
                                    return new ep.o7(a, g, {
                                        hooks: n.hooks,
                                        variables: {
                                            get tracksController() {
                                                return n.tracksController;
                                            },
                                            get cacheController() {
                                                var c;
                                                return null != (c = n.cacheController) ? c : null;
                                            },
                                        },
                                    });
                                })({ authorization: t, httpClientFactory: r, i18nStorage: o, prefixUrl: i, publicConfig: e.get(eq.V4), slam: e.get(eq.y$) });
                            }),
                            [eq.Lb]: (0, n.Gr)((e) => e.get(eq.GV)(f.H, 'landing3Resource')),
                            [eq.tz]: (0, n.Gr)((e) => e.get(eq.GV)(v.B, 'albumsResource')),
                            [eq.$8]: (0, n.Gr)((e) => e.get(eq.GV)(w.w, 'libraryResource')),
                            [eq.Oo]: (0, n.Gr)((e) => e.get(eq.GV)(k.L, 'tracksResource')),
                            [eq.$5]: (0, n.Gr)((e) => e.get(eq.GV)(y._, 'availabilityResource')),
                            [eq.qT]: (0, n.Gr)((e) => {
                                let t = e.get(eq.QG),
                                    r = e.get(eq.A4),
                                    o = e.get(eq.Xc),
                                    i = e.get(eq.qt),
                                    s = e.get(eq.V4);
                                return ((e) => {
                                    let {
                                            authorization: t,
                                            httpClientFactory: r,
                                            i18nStorage: o,
                                            platformSecret: i,
                                            prefixUrl: s,
                                            publicConfig: n,
                                            slam: a,
                                            storage: u,
                                        } = e,
                                        l = r(),
                                        g = o.getLanguage(),
                                        c = n.resources.musicExternalApi,
                                        d = {
                                            prefixUrl: s,
                                            retryPolicyConfig: c.retryPolicyConfig,
                                            timeouts: c.timeouts.getFileInfoResource,
                                            params: { common: { oauth: t.token, client: (0, eF._)(), device: (0, eY.h)(), language: g } },
                                        },
                                        h = a.repositoryContainer.fileStorage,
                                        p = a.repositoryContainer.tracksRepository,
                                        m = a.repositoryContainer.usersTracksRepository;
                                    return h && p && m
                                        ? new ep.d7(l, d, {
                                              fileStorage: h,
                                              tracksRepository: p,
                                              usersTracksRepository: m,
                                              hooks: a.hooks,
                                              variables: {
                                                  get uid() {
                                                      return u.get(ek.c.YmUid);
                                                  },
                                                  secretKey: i,
                                              },
                                          })
                                        : new eX.v(l, d);
                                })({
                                    authorization: t,
                                    httpClientFactory: r,
                                    i18nStorage: o,
                                    platformSecret: eC,
                                    prefixUrl: i,
                                    publicConfig: s,
                                    slam: e.get(eq.y$),
                                    storage: e.get(eq.oo),
                                });
                            }),
                            [eq.DV]: (0, n.Gr)((e) => e.get(eq.GV)(V.K, 'resourcesResource')),
                            [eq.X4]: (0, n.Gr)((e) => e.get(eq.GV)(R.a, 'topResource')),
                            [eq.O9]: (0, n.Gr)((e) => e.get(eq.GV)(P.b, 'artistsResource')),
                            [eq.E]: (0, n.Gr)((e) => e.get(eq.GV)(C.V, 'slidesResource')),
                            [eq.wH]: (0, n.Gr)((e) => e.get(eq.GV)(U.c, 'redAlertResource')),
                            [eq.ok]: (0, n.Gr)((e) => e.get(eq.GV)(b.Z, 'rotorResource')),
                            [eq.X8]: (0, n.Gr)((e) => e.get(eq.GV)(L.w, 'waveResource')),
                            [eq.yq]: (0, n.Gr)((e) => e.get(eq.GV)(A.p, 'searchResource')),
                            [eq.NN]: (0, n.Gr)((e) => e.get(eq.GV)(D.v, 'searchResource')),
                            [eq.qN]: (0, n.Gr)((e) => e.get(eq.GV)(O.T, 'playlistResource')),
                            [eq.ro]: (0, n.Gr)((e) => e.get(eq.GV)(S.e, 'playlistsResource')),
                            [eq.nM]: (0, n.Gr)((e) => e.get(eq.GV)(E.o, 'pinResource')),
                            [eq.Ut]: (0, n.Gr)((e) => e.get(eq.GV)(z.$, 'metatagsResource')),
                            [eq.K1]: (0, n.Gr)((e) => e.get(eq.GV)(T.p, 'tagResource')),
                            [eq.eu]: (0, n.Gr)((e) => e.get(eq.GV)(x.D, 'feedResource')),
                            [eq.aE]: (0, n.Gr)((e) => {
                                let t = e.get(eq.GV),
                                    r = e.get(eq.y$);
                                return e$({ resource: t(_.l, 'pinsResource'), resourceName: _.l.constructor.name, slam: r });
                            }),
                            [eq.ki]: (0, n.Gr)((e) => e.get(eq.GV)(M.I, 'musicHistoryResource')),
                            [eq.c9]: (0, n.Gr)((e) => e.get(eq.GV)(q.s, 'dynamicPagesResource')),
                            [eq.en]: (0, n.Gr)((e) => e.get(eq.GV)(B.B, 'chartResource')),
                            [eq.jQ]: (0, n.Gr)((e) => e.get(eq.GV)(Z._, 'clipsResource')),
                            [eq.cZ]: (0, n.Gr)((e) => e.get(eq.GV)(H.c, 'lyricViewsResource')),
                            [eq.Zl]: (0, n.Gr)((e) => e.get(eq.GV)(I.D, 'nonMusicResource')),
                            [eq.CN]: (0, n.Gr)((e) => e.get(eq.GV)(N.N, 'donationResource')),
                            [eq.JM]: (0, n.Gr)((e) => e.get(eq.GV)(F.c, 'streamsResource')),
                            [eq.P1]: (0, n.Gr)((e) => e.get(eq.GV)(Y.S, 'loaderResource')),
                            [eq.re]: (0, n.Gr)((e) => {
                                let t = e.get(eq.GV),
                                    r = e.get(eq.A4)({ credentials: 'omit' });
                                return t(W.s, 'prefixlessResource', { httpClient: r, oauth: null, prefixUrl: '' });
                            }),
                            [eq.Lk]: (0, n.Gr)((e) => e.get(eq.GV)(X.g, 'filtersResource')),
                            [eq.uM]: (0, n.Gr)((e) => {
                                var t;
                                let { acqOffers: r } = e.get(eq.V4),
                                    { rumSettings: s } = (0, i.$5)(),
                                    { brand: n, service: a, environment: u, appVersion: l } = r,
                                    { platform: g, page: c } = s,
                                    d = e.get(eq.QG),
                                    h = e.get(eq.Xc).getLanguage(),
                                    p = e.get(eq.A4),
                                    m = d.token || null,
                                    G = p({ credentials: 'omit' }),
                                    f = e.get(eq.Zf),
                                    { request_id: v, puid: w } = null != (t = e.get(eq.Zi).getStore()) ? t : {};
                                return new o.mZ({
                                    brand: n,
                                    service: a,
                                    environment: u,
                                    appVersion: l,
                                    etld: 'yandex.net',
                                    platform: 'Desktop',
                                    lang: h,
                                    oAuthToken: m,
                                    authMethod: 'oauth',
                                    requester: (0, e0.n)(G, f),
                                    puid: (null == w ? void 0 : w.toString()) || null,
                                    rumOptions: { platform: g, page: c, requestId: v },
                                });
                            }),
                            [eq.$$]: (0, n.Gr)((e) => e.get(eq.GV)($.E, 'ugcResource', { device: null })),
                            [eq.sv]: (0, n.Gr)((e) => e.get(eq.GV)(Q.L, 'collectionResource')),
                            [eq.gd]: (0, n.Gr)((e) => e.get(eq.GV)(K.z, 'adsResource')),
                            [eq.EN]: (0, n.Gr)((e) => e.get(eq.GV)(j._, 'afterTrackResource')),
                            [eq.Ez]: (0, n.Gr)((e) => e.get(eq.GV)(J.l, 'personalResource')),
                            [eq.N1]: (0, n.Gr)((e) => {
                                let t = e.get(eq.GV),
                                    r = e.get(eq.y$);
                                return e$({ resource: t(ee.H, 'disclaimersResource'), resourceName: ee.H.constructor.name, slam: r });
                            }),
                            [eq.u2]: (0, n.Gr)((e) => e.get(eq.GV)(et.J, 'familyResource')),
                            [eq.TD]: (0, n.Gr)((e) => e.get(eq.GV)(er.L, 'childrenLandingResource')),
                            [eq.wK]: (0, n.Gr)((e) => e.get(eq.GV)(eo.u, 'landingBlocksResource')),
                            [eq.dh]: (0, n.Gr)((e) => e.get(eq.GV)(ei.q, 'promoResource')),
                            [eq.LC]: (0, n.Gr)((e) => {
                                let t = e.get(eq.CR),
                                    r = e.get(eq.V4),
                                    o = t({ credentials: 'include' }),
                                    i = r.resources.musicExternalApi;
                                return (0, eI._)({ httpClient: o, musicExternalApi: i, publicConfig: r });
                            }),
                            [eq.W5]: (0, n.Gr)((e) => {
                                let t = e.get(eq.CR),
                                    r = e.get(eq.V4),
                                    o = t({ credentials: 'include' });
                                return (0, eH.Z)({ httpClient: o, publicConfig: r });
                            }),
                            [eq.PL]: (0, n.Gr)((e) => e.get(eq.GV)(es.w, 'labelsResource')),
                            [eq.DT]: (0, n.Gr)((e) => e.get(eq.GV)(en.O, 'concertsResource')),
                            [eq.dA]: (0, n.Gr)((e) => e.get(eq.GV)(ea.Q, 'wordsResource')),
                            [eq.$Y]: (0, n.Gr)((e) => e.get(eq.GV)(eu.C, 'wheelResource')),
                            [eq.VR]: (0, n.P9)((e) => () => {
                                let t = e.get(eq.A4),
                                    r = e.get(eq.V4),
                                    o = (0, eZ.i)({ httpClientFactory: t, publicConfig: r });
                                return (0, eT.P)({ probe: (e) => o.ping({ signal: e }) });
                            }),
                            [eq.zj]: (0, n.Gr)((e) => e.get(eq.GV)(el.U, 'lumenResource')),
                            [eq.vg]: (0, n.Gr)(() => (0, eG.a)()),
                        })
                        .register(
                            eq.ff,
                            (0, n.Gr)((e) => {
                                let t = e.get(eq.N1);
                                return (0, eB.Y)(t);
                            }),
                        )
                        .registerMany({
                            [eq.UB]: (0, n.Gr)((e) => {
                                let t = e.get(eq.vg);
                                return new d.B(t);
                            }),
                            [eq.Tq]: (0, n.Gr)((e) => {
                                var t;
                                let r = e.get(eq.W5);
                                return (null == (t = window.Ya) ? void 0 : t.Rum) ? new d.G((0, ev.y)(), r, window.Ya.Rum) : null;
                            }),
                        });
                return eQ
                    .register(
                        eq.by,
                        (0, n.Gr)(() => eJ(eQ, !1)),
                    )
                    .register(
                        eq.s_,
                        (0, n.Gr)(() => eJ(eQ, !0)),
                    )
                    .register(
                        eq.ni,
                        (0, n.Gr)((e) => {
                            let t = e.get(eq.Zf);
                            return new l.SU({
                                skeletonFactory: new ef.F6({
                                    landingResource: e.get(eq.V3),
                                    artistsResource: e.get(eq.O9),
                                    tabIdQueryParamController: new ef.ET(),
                                    config: { nodesConfig: { tabConfig: { addLoadAndShowBlocks: !1 } } },
                                }),
                                visibilityControllerParams: {
                                    visibilityConfig: { type: 'listVisibility', virtualizedMetadataLoader: new eh.yq({ resizeObserverAdapter: new eh.u2() }) },
                                },
                                plugins: [new ef.X({ logger: t })],
                            });
                        }),
                    );
            }
        },
        27558: (e, t, r) => {
            r.d(t, { h: () => i });
            var o = r(93588);
            let i = () => {
                if (void 0 === window.musicDesktop || !o.NN) return;
                let e = Object.entries(window.musicDesktop.runtime.deviceInfo);
                if (0 !== e.length)
                    return e
                        .map((e) => {
                            let [t, r] = e;
                            return ''.concat(t, '=').concat(String(r));
                        })
                        .join('; ');
            };
        },
        79645: (e, t, r) => {
            r.d(t, { g: () => i });
            var o = r(95067);
            let i = (e) => {
                let t = e.get(o.c.OfflineMode);
                return 'boolean' == typeof t && t;
            };
        },
        87758: (e, t, r) => {
            var o;
            (r.d(t, { r: () => o }),
                (function (e) {
                    ((e.RU = 'ru'), (e.COM = 'com'), (e.KZ = 'kz'), (e.BY = 'by'), (e.UZ = 'uz'));
                })(o || (o = {})));
        },
    },
]);
