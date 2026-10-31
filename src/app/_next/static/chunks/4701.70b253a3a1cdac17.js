'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4701],
    {
        32808: (e, t, r) => {
            var o;
            (r.d(t, { r: () => o }),
                (function (e) {
                    ((e.RU = 'ru'), (e.COM = 'com'), (e.KZ = 'kz'), (e.BY = 'by'), (e.UZ = 'uz'));
                })(o || (o = {})));
        },
        44701: (e, t, r) => {
            (r.r(t), r.d(t, { createDesktopContainer: () => e5 }));
            var o = r(98283),
                i = r(30282),
                n = r(77348),
                s = r(40441),
                a = r(8819),
                u = r(32813),
                l = r(54264),
                g = r(53613),
                c = r(44084),
                d = r(52028),
                h = r(27253),
                p = r(10285),
                m = r(42668),
                G = r(77584),
                f = r(33850),
                v = r(86057),
                w = r(82740),
                k = r(32030),
                y = r(44928),
                R = r(7527),
                V = r(30868),
                P = r(25454),
                C = r(94899),
                U = r(46414),
                b = r(29636),
                L = r(27822),
                A = r(7809),
                D = r(64966),
                S = r(54300),
                O = r(82556),
                E = r(24041),
                z = r(66880),
                x = r(80690),
                T = r(97860),
                _ = r(96614),
                M = r(51751),
                q = r(63111),
                B = r(61624),
                Z = r(93452),
                F = r(87671),
                H = r(85281),
                I = r(2410),
                N = r(28800),
                Y = r(60520),
                $ = r(39964),
                Q = r(80500),
                W = r(83692),
                X = r(35486),
                K = r(63744),
                j = r(95212),
                J = r(27114),
                ee = r(7588),
                et = r(48018),
                er = r(5993),
                eo = r(11551),
                ei = r(8868),
                en = r(9176),
                es = r(92360),
                ea = r(78572),
                eu = r(91991),
                el = r(22e3),
                eg = r(20049),
                ec = r(68900),
                ed = r(65140),
                eh = r(70030),
                ep = r(96820),
                em = r(53647),
                eG = r(70844),
                ef = r(31556),
                ev = r(8438),
                ew = r(9519),
                ek = r(15253),
                ey = r(32808),
                eR = r(4370),
                eV = r(99890),
                eP = r(44698);
            let eC = (e) => (void 0 === e ? 'missing' : e ? 'present' : 'empty');
            class eU extends eP.P {
                check() {
                    if (!this.dataIsLoaded) return;
                    let e = this.passportLogin,
                        t = this.token,
                        r = this.tokenOwnerLogin,
                        o = this.isOAuthPage ? 'oauth' : 'product',
                        i = e && r ? (e === r ? 'match' : 'mismatch') : 'unavailable',
                        n = (n) => ({
                            stage: 'authorization-decision',
                            page: o,
                            token: t ? 'present' : 'missing',
                            passportLogin: eC(e),
                            tokenOwnerLogin: eC(r),
                            loginComparison: i,
                            decision: n,
                        });
                    if (!e && t) {
                        (this.reportAuthorizationDecision(n('remove-token-reload'), 'passport-login-missing'), this.removeToken(), this.reloadPage());
                        return;
                    }
                    if (!t && e && !this.isOAuthPage) {
                        (this.reportAuthorizationDecision(n('redirect-authorization'), 'missing-token'), this.redirectToAuthorizationUrl());
                        return;
                    }
                    if ('string' == typeof e && 'string' == typeof r && e && r && e !== r) {
                        (this.reportAuthorizationDecision(n('redirect-oauth'), 'login-mismatch'), this.redirectToOAuthUrl());
                        return;
                    }
                    this.reportAuthorizationDecision(n('continue'));
                }
                get isOAuthPage() {
                    return window.location.pathname.endsWith('/oauth');
                }
                getRedirectUri() {
                    let e = ''.concat(this.pathname).concat(this.searchParams ? '?'.concat(this.searchParams) : '');
                    e.charAt(0) === eR.Z.main.href && (e = e.substring(1));
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
                    let t = (0, eV.C8)(e.expiresIn),
                        r = this.oauthState;
                    if (!e.state || !r)
                        return (
                            (0, eV.uV)({ stage: 'token-storage', state: 'missing', write: 'skipped', readback: 'not-attempted', ttl: t, result: 'state-missing' }),
                            'state-missing'
                        );
                    if (e.state !== r)
                        return (
                            (0, eV.uV)({ stage: 'token-storage', state: 'mismatch', write: 'skipped', readback: 'not-attempted', ttl: t, result: 'state-mismatch' }),
                            'state-mismatch'
                        );
                    this.storage.set(ek.c.Oauth, e.token, { expires: Math.floor(e.expiresIn / 86400) });
                    let o = !!this.storage.get(ek.c.Oauth),
                        i = o ? 'stored' : 'readback-missing';
                    return ((0, eV.uV)({ stage: 'token-storage', state: 'match', write: 'attempted', readback: o ? 'present' : 'missing', ttl: t, result: i }), i);
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
                        (this.reportedAuthorizationDecisions.add(r), t && (0, eV.uV)({ stage: 'attempt-start', trigger: t }), (0, eV.uV)(e));
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
            var eL = r(55267),
                eA = r(3629),
                eD = r(23405),
                eS = r(72694);
            class eO {
                onChangeLanguage() {
                    window.location.reload();
                }
            }
            var eE = r(83602),
                ez = r(66059),
                ex = r(42953),
                eT = r(70787),
                e_ = r(12149),
                eM = r(83210),
                eq = r(223),
                eB = r(8193),
                eZ = r(43540),
                eF = r(4086),
                eH = r(71575),
                eI = r(3744),
                eN = r(80643),
                eY = r(87123),
                e$ = r(64965),
                eQ = r(74527),
                eW = r(83620),
                eX = r(85230),
                eK = r(47720);
            let ej = (e) => {
                let { authorization: t, cacheController: r, httpClient: o, i18nStorage: i, prefixUrl: n, publicConfig: s } = e,
                    a = i.getLanguage(),
                    u = s.resources.musicExternalApi,
                    l = {
                        prefixUrl: n,
                        retryPolicyConfig: u.retryPolicyConfig,
                        timeouts: u.timeouts.accountResource,
                        params: { common: { oauth: t.token, client: (0, eX._)(), device: (0, eK.h)(), language: a } },
                    };
                return r ? new ep.wV(o, l, { cacheController: r }) : new eW.Q(o, l);
            };
            var eJ = r(72882),
                e0 = r(39968);
            function e4(e) {
                let {
                        authorization: t,
                        httpClientFactory: r,
                        i18nStorage: o,
                        platformSecret: i,
                        prefixUrl: n,
                        publicConfig: s,
                        slam: a,
                        storage: u,
                        useResourcesFileInfo: l = !1,
                    } = e,
                    g = r(),
                    c = o.getLanguage(),
                    d = s.resources.musicExternalApi,
                    h = {
                        prefixUrl: n,
                        retryPolicyConfig: d.retryPolicyConfig,
                        timeouts: d.timeouts[l ? 'resourcesResource' : 'getFileInfoResource'],
                        params: { common: { oauth: t.token, client: (0, eX._)(), device: (0, eK.h)(), language: c } },
                    },
                    p = a.repositoryContainer.fileStorage,
                    m = a.repositoryContainer.tracksRepository,
                    G = a.repositoryContainer.usersTracksRepository;
                return p && m && G
                    ? new (l ? ep.mK : ep.d7)(g, h, {
                          fileStorage: p,
                          tracksRepository: m,
                          usersTracksRepository: G,
                          hooks: a.hooks,
                          variables: {
                              get uid() {
                                  return u.get(ek.c.YmUid);
                              },
                              secretKey: i,
                          },
                      })
                    : new (l ? eJ.K : e0.v)(g, h);
            }
            let e2 = (e) => {
                let { resource: t, resourceName: r, slam: o } = e,
                    i = o.cacheController;
                return i ? (0, ep._2)({ resource: t, cacheController: i, config: { common: { resourceName: r }, enabled: !0, priority: ep.OU.HIGH, ttl: 6048e5 } }) : t;
            };
            var e8 = r(71625),
                e1 = r(54020);
            let e3 = (e, t) => {
                let r = e.get(eF.oo),
                    o = e.get(eF.U2),
                    i = e.get(eF.Zf),
                    n = o.get(ek.c.YnisonDeviceId);
                n || ((n = (0, e1.A)()), o.set(ek.c.YnisonDeviceId, n));
                let s = {
                        info: { app_name: 'Desktop', app_version: (0, eM.B)() || '', title: 'Music Desktop App', device_id: n, type: e8.bq.WEB_DESKTOP },
                        volumeGranularity: 20,
                        get defaultVolume() {
                            var a;
                            return null != (a = r.get(ek.c.YmPlayerVolume)) ? a : void 0;
                        },
                    },
                    u = e.get(eF.WA).getPassportUid(),
                    l = e.get(eF.QG),
                    g = e.get(eF.V4),
                    c = e.get(eF.UB),
                    d = e.get(eF.Tq),
                    h = [new e8.zT(c)];
                return (
                    d && h.push(new e8.qP(d)),
                    new e8.Jd({
                        logger: i,
                        deviceConfig: s,
                        multiAuthUserId: u,
                        oauth: l.token,
                        ynisonConnectionConfig: g.ynisonConnectionConfig,
                        metricsTransport: h,
                        variables: { newConnector: t, isShadow: !0 },
                    })
                );
            };
            var e6 = r(10466);
            async function e5(e) {
                let { tld: t, env: ew, publicConfig: ey, customApiPrefixUrl: eR } = e,
                    eV = (0, e_.u)(),
                    eP = (0, i.u0)(ey, t, eR),
                    eC = (0, i.Ef)(ey, eV),
                    eU = await (0, eD.B)(ew),
                    eW = {},
                    eJ = new s.Dt()
                        .registerMany({
                            [eF.SX]: (0, s.Gr)(() => ew),
                            [eF.S1]: (0, s.Gr)(() => (0, eN.k)()),
                            [eF.V4]: (0, s.Gr)(() => ey),
                            [eF.xF]: (0, s.Gr)(() => null),
                            [eF.qt]: (0, s.Gr)(() => eP),
                            [eF.P0]: (0, s.Gr)(() => new n.q(eU)),
                            [eF.Zi]: (0, s.Gr)(() => new eS.Y(eW)),
                        })
                        .register(
                            eF.WA,
                            (0, s.Gr)((e) => {
                                let t = e.get(eF.Zi);
                                return new eZ.V(t);
                            }),
                        )
                        .registerMany({
                            [eF.Zf]: (0, s.Gr)((e) => {
                                let t = e.get(eF.P0).get(eA.qV);
                                return new c.r({
                                    maxLogLevel: g.cm.DEBUG,
                                    secureFields: ec.x,
                                    disableLogToConsole: !t,
                                    additionalData: {
                                        get puid() {
                                            return e.get(eF.WA).getPassportUid();
                                        },
                                    },
                                });
                            }),
                            [eF.RG]: (0, s.Gr)(async (e) => {
                                let {
                                    mocks: { enabled: o, mocksProviderUrl: i, urlCapturePattern: n },
                                } = e.get(eF.V4);
                                if (!o) return () => Promise.resolve(null);
                                let { initMocks: s } = await Promise.all([r.e(2407), r.e(3037)]).then(r.bind(r, 33037)),
                                    a = e.get(eF.U2),
                                    u = e.get(eF.Zf),
                                    l = 'production' === e.get(eF.SX) ? '/rsc-cache-worker.js' : '',
                                    g = () => {
                                        var e;
                                        return null != (e = a.get(h.L, !1)) ? e : null;
                                    },
                                    c = n || ''.concat(eP, '/*');
                                return () =>
                                    s({
                                        getMocksConfiguration: g,
                                        log: (e, t) => u.debug('[Mocks] | desktop: '.concat(e), t),
                                        mocksProviderUrl: i,
                                        serviceWorkerUrl: l,
                                        urlCapturePattern: (0, p.r)(c, t, m.B),
                                    }).catch((e) => u.debug('[Mocks] | desktop: initialization failed. '.concat(e)));
                            }),
                            [eF.TK]: (0, s.Gr)((e) =>
                                (0, ez.b)(
                                    new c.r({
                                        maxLogLevel: g.cm.DEBUG,
                                        secureFields: ec.x,
                                        disableLogToConsole: 'development' !== e.get(eF.SX),
                                        additionalData: {
                                            get puid() {
                                                return e.get(eF.WA).getPassportUid();
                                            },
                                        },
                                    }),
                                ),
                            ),
                            [eF.oo]: (0, s.Gr)(() => new em.si()),
                            [eF.DP]: (0, s.Gr)(() => new em.MJ('client desktop', 'cookie')),
                            [eF.U2]: (0, s.Gr)(() => new em.si()),
                            [eF.vH]: (0, s.Gr)(() => new em.fW()),
                            [eF.Xc]: (0, s.Gr)((e) => {
                                let t = e.get(eF.oo),
                                    r = e.get(eF.Zf);
                                return new eE.E({
                                    isBuildTypeDesktop: !0,
                                    logger: r,
                                    changeLanguageHandler: new eO(),
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
                            [eF.y$]: (0, s.Gr)((e) => {
                                let t = e.get(eF.Zf),
                                    r = e.get(eF.oo),
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
                            [eF.Hm]: (0, s.P9)(
                                () =>
                                    function () {
                                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                        return new u.Q(e);
                                    },
                            ),
                            [eF.gu]: (0, s.P9)(
                                () =>
                                    function () {
                                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                        return new a.S(e);
                                    },
                            ),
                        })
                        .registerMany({
                            [eF.QG]: (0, s.Gr)((e) => new eb(e.get(eF.oo), e.get(eF.V4), e.get(eF.Xc).getLanguage())),
                            [eF.OP]: (0, s.P9)(
                                (e) =>
                                    function () {
                                        var t, r, o, i, n;
                                        let s = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                            a = arguments.length > 1 ? arguments[1] : void 0,
                                            u = e.get(eF.Zf),
                                            l = e.get(eF.U2),
                                            g = new ed.N(u),
                                            {
                                                resources: { musicExternalApi: c },
                                            } = e.get(eF.V4);
                                        ((s.timeout = c.defaultTimeout),
                                            (s.hooks = {
                                                afterResponse: [...((null == s || null == (t = s.hooks) ? void 0 : t.afterResponse) || [])],
                                                beforeError: [g.beforeErrorHook, ...((null == s || null == (r = s.hooks) ? void 0 : r.beforeError) || [])],
                                                beforeRequest: [eg.xW, ...((null == s || null == (o = s.hooks) ? void 0 : o.beforeRequest) || [])],
                                                afterTimeout: [g.beforeErrorHook, ...((null == s || null == (i = s.hooks) ? void 0 : i.afterTimeout) || [])],
                                                beforeRetry: [eg.ie, g.beforeRetryHook, ...((null == s || null == (n = s.hooks) ? void 0 : n.beforeRetry) || [])],
                                            }));
                                        let d = a(s);
                                        return (0, ep.sY)(d, {
                                            get isOffline() {
                                                var h;
                                                return null != (h = (0, eq.Q)(e.get(eF.y$))) ? h : (0, eT.g)(l);
                                            },
                                        });
                                    },
                            ),
                        })
                        .registerMany({
                            [eF.A4]: (0, s.P9)(
                                (e) =>
                                    function () {
                                        var t;
                                        let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                            o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e.get(eF.OP),
                                            i = e.get(eF.QG),
                                            n = e.get(eF.Hm),
                                            s = e.get(eF.Xc),
                                            a = e.get(eF.V4),
                                            u = ej({ authorization: i, cacheController: null, httpClient: o({}, n), i18nStorage: s, prefixUrl: eP, publicConfig: a });
                                        return (
                                            (r.hooks = { beforeError: [(0, eL.o)(i, u), ...((null == r || null == (t = r.hooks) ? void 0 : t.beforeError) || [])] }),
                                            o(r, n)
                                        );
                                    },
                            ),
                        })
                        .register(
                            eF.CR,
                            (0, s.P9)(
                                (e) =>
                                    function () {
                                        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                        return e.get(eF.A4)(t, e.get(eF.gu));
                                    },
                            ),
                        )
                        .register(
                            eF.GV,
                            (0, s.P9)((e) => {
                                let t = e.get(eF.QG),
                                    r = e.get(eF.qt),
                                    o = e.get(eF.Xc);
                                return ((e) => {
                                    let { authorization: t, createDefaultHttpClient: r, defaultPrefixUrl: o, i18nStorage: i, publicConfig: n } = e;
                                    return (e, s, a) => {
                                        var u, l, g;
                                        let c = n.resources.musicExternalApi,
                                            d = null != (u = null == a ? void 0 : a.prefixUrl) ? u : o,
                                            h = i.getLanguage(),
                                            p = null == a ? void 0 : a.httpClient;
                                        return (
                                            void 0 === p && (p = r()),
                                            new e(p, {
                                                prefixUrl: d,
                                                retryPolicyConfig: c.retryPolicyConfig,
                                                timeouts: c.timeouts[s],
                                                params: {
                                                    common: {
                                                        ...((null == a ? void 0 : a.oauth) === null
                                                            ? {}
                                                            : { oauth: null != (l = null == a ? void 0 : a.oauth) ? l : t.token }),
                                                        client: (0, eX._)(),
                                                        ...((null == a ? void 0 : a.device) === null
                                                            ? {}
                                                            : { device: null != (g = null == a ? void 0 : a.device) ? g : (0, eK.h)() }),
                                                        language: h,
                                                    },
                                                },
                                            })
                                        );
                                    };
                                })({ authorization: t, createDefaultHttpClient: () => e.get(eF.A4)(), defaultPrefixUrl: r, i18nStorage: o, publicConfig: e.get(eF.V4) });
                            }),
                        )
                        .registerMany({
                            [eF.$I]: (0, s.Gr)((e) => {
                                let t = e.get(eF.QG),
                                    r = e.get(eF.A4),
                                    o = e.get(eF.Xc),
                                    i = e.get(eF.qt),
                                    n = e.get(eF.V4);
                                return ej({
                                    authorization: t,
                                    cacheController: e.get(eF.y$).cacheController,
                                    httpClient: r(),
                                    i18nStorage: o,
                                    prefixUrl: i,
                                    publicConfig: n,
                                });
                            }),
                            [eF._1]: (0, s.Gr)((e) => e.get(eF.GV)(G.d, 'usersResource')),
                            [eF.V3]: (0, s.Gr)((e) => {
                                let t = e.get(eF.QG),
                                    r = e.get(eF.A4),
                                    o = e.get(eF.Xc),
                                    i = e.get(eF.qt);
                                return ((e) => {
                                    let { authorization: t, httpClientFactory: r, i18nStorage: o, prefixUrl: i, publicConfig: n, slam: s } = e,
                                        a = r(),
                                        u = o.getLanguage(),
                                        l = n.resources.musicExternalApi,
                                        g = {
                                            prefixUrl: i,
                                            retryPolicyConfig: l.retryPolicyConfig,
                                            timeouts: l.timeouts.landingResource,
                                            params: { common: { oauth: t.token, client: (0, eX._)(), device: (0, eK.h)(), language: u } },
                                        };
                                    return new ep.o7(a, g, {
                                        hooks: s.hooks,
                                        variables: {
                                            get tracksController() {
                                                return s.tracksController;
                                            },
                                            get cacheController() {
                                                var c;
                                                return null != (c = s.cacheController) ? c : null;
                                            },
                                        },
                                    });
                                })({ authorization: t, httpClientFactory: r, i18nStorage: o, prefixUrl: i, publicConfig: e.get(eF.V4), slam: e.get(eF.y$) });
                            }),
                            [eF.Lb]: (0, s.Gr)((e) => e.get(eF.GV)(f.H, 'landing3Resource')),
                            [eF.tz]: (0, s.Gr)((e) => e.get(eF.GV)(v.B, 'albumsResource')),
                            [eF.$8]: (0, s.Gr)((e) => e.get(eF.GV)(w.w, 'libraryResource')),
                            [eF.Oo]: (0, s.Gr)((e) => e.get(eF.GV)(k.L, 'tracksResource')),
                            [eF.$5]: (0, s.Gr)((e) => e.get(eF.GV)(y._, 'availabilityResource')),
                            [eF.qT]: (0, s.Gr)((e) => {
                                let t = e.get(eF.QG),
                                    r = e.get(eF.A4),
                                    o = e.get(eF.Xc),
                                    i = e.get(eF.qt),
                                    n = e.get(eF.V4);
                                return e4({
                                    authorization: t,
                                    httpClientFactory: r,
                                    i18nStorage: o,
                                    platformSecret: eC,
                                    prefixUrl: i,
                                    publicConfig: n,
                                    slam: e.get(eF.y$),
                                    storage: e.get(eF.oo),
                                });
                            }),
                            [eF.DV]: (0, s.Gr)((e) =>
                                e4({
                                    authorization: e.get(eF.QG),
                                    httpClientFactory: e.get(eF.A4),
                                    i18nStorage: e.get(eF.Xc),
                                    platformSecret: eC,
                                    prefixUrl: e.get(eF.qt),
                                    publicConfig: e.get(eF.V4),
                                    slam: e.get(eF.y$),
                                    storage: e.get(eF.oo),
                                    useResourcesFileInfo: !0,
                                }),
                            ),
                            [eF.X4]: (0, s.Gr)((e) => e.get(eF.GV)(R.a, 'topResource')),
                            [eF.O9]: (0, s.Gr)((e) => e.get(eF.GV)(V.b, 'artistsResource')),
                            [eF.E]: (0, s.Gr)((e) => e.get(eF.GV)(P.V, 'slidesResource')),
                            [eF.wH]: (0, s.Gr)((e) => e.get(eF.GV)(C.c, 'redAlertResource')),
                            [eF.ok]: (0, s.Gr)((e) => e.get(eF.GV)(U.Z, 'rotorResource')),
                            [eF.X8]: (0, s.Gr)((e) => e.get(eF.GV)(b.w, 'waveResource')),
                            [eF.yq]: (0, s.Gr)((e) => e.get(eF.GV)(L.p, 'searchResource')),
                            [eF.NN]: (0, s.Gr)((e) => e.get(eF.GV)(A.v, 'searchResource')),
                            [eF.qN]: (0, s.Gr)((e) => e.get(eF.GV)(D.T, 'playlistResource')),
                            [eF.ro]: (0, s.Gr)((e) => e.get(eF.GV)(S.e, 'playlistsResource')),
                            [eF.nM]: (0, s.Gr)((e) => e.get(eF.GV)(O.o, 'pinResource')),
                            [eF.Ut]: (0, s.Gr)((e) => e.get(eF.GV)(E.$, 'metatagsResource')),
                            [eF.K1]: (0, s.Gr)((e) => e.get(eF.GV)(z.p, 'tagResource')),
                            [eF.eu]: (0, s.Gr)((e) => e.get(eF.GV)(x.D, 'feedResource')),
                            [eF.SD]: (0, s.Gr)((e) => e.get(eF.GV)(T.F, 'wizard3Resource')),
                            [eF.aE]: (0, s.Gr)((e) => {
                                let t = e.get(eF.GV),
                                    r = e.get(eF.y$);
                                return e2({ resource: t(_.l, 'pinsResource'), resourceName: _.l.constructor.name, slam: r });
                            }),
                            [eF.ki]: (0, s.Gr)((e) => e.get(eF.GV)(M.I, 'musicHistoryResource')),
                            [eF.c9]: (0, s.Gr)((e) => e.get(eF.GV)(q.s, 'dynamicPagesResource')),
                            [eF.en]: (0, s.Gr)((e) => e.get(eF.GV)(B.B, 'chartResource')),
                            [eF.jQ]: (0, s.Gr)((e) => e.get(eF.GV)(Z._, 'clipsResource')),
                            [eF.cZ]: (0, s.Gr)((e) => e.get(eF.GV)(F.c, 'lyricViewsResource')),
                            [eF.Zl]: (0, s.Gr)((e) => e.get(eF.GV)(H.D, 'nonMusicResource')),
                            [eF.CN]: (0, s.Gr)((e) => e.get(eF.GV)(I.N, 'donationResource')),
                            [eF.JM]: (0, s.Gr)((e) => e.get(eF.GV)(N.c, 'streamsResource')),
                            [eF.P1]: (0, s.Gr)((e) => e.get(eF.GV)(Y.S, 'loaderResource')),
                            [eF.re]: (0, s.Gr)((e) => {
                                let t = e.get(eF.GV),
                                    r = e.get(eF.A4)({ credentials: 'omit' });
                                return t($.s, 'prefixlessResource', { httpClient: r, oauth: null, prefixUrl: '' });
                            }),
                            [eF.Lk]: (0, s.Gr)((e) => e.get(eF.GV)(Q.g, 'filtersResource')),
                            [eF.uM]: (0, s.Gr)((e) => {
                                var t;
                                let { acqOffers: r } = e.get(eF.V4),
                                    { rumSettings: n } = (0, i.$5)(),
                                    { brand: s, service: a, environment: u, appVersion: l } = r,
                                    { platform: g, page: c } = n,
                                    d = e.get(eF.QG),
                                    h = e.get(eF.Xc).getLanguage(),
                                    p = e.get(eF.A4),
                                    m = d.token || null,
                                    G = p({ credentials: 'omit' }),
                                    f = e.get(eF.Zf),
                                    { request_id: v, puid: w } = null != (t = e.get(eF.Zi).getStore()) ? t : {};
                                return new o.mZ({
                                    brand: s,
                                    service: a,
                                    environment: u,
                                    appVersion: l,
                                    etld: 'yandex.net',
                                    platform: 'Desktop',
                                    lang: h,
                                    oAuthToken: m,
                                    authMethod: 'oauth',
                                    requester: (0, e6.n)(G, f),
                                    puid: (null == w ? void 0 : w.toString()) || null,
                                    rumOptions: { platform: g, page: c, requestId: v },
                                });
                            }),
                            [eF.$$]: (0, s.Gr)((e) => e.get(eF.GV)(W.E, 'ugcResource', { device: null })),
                            [eF.sv]: (0, s.Gr)((e) => e.get(eF.GV)(X.L, 'collectionResource')),
                            [eF.gd]: (0, s.Gr)((e) => e.get(eF.GV)(K.z, 'adsResource')),
                            [eF.EN]: (0, s.Gr)((e) => e.get(eF.GV)(j._, 'afterTrackResource')),
                            [eF.Ez]: (0, s.Gr)((e) => e.get(eF.GV)(J.l, 'personalResource')),
                            [eF.N1]: (0, s.Gr)((e) => {
                                let t = e.get(eF.GV),
                                    r = e.get(eF.y$);
                                return e2({ resource: t(ee.H, 'disclaimersResource'), resourceName: ee.H.constructor.name, slam: r });
                            }),
                            [eF.u2]: (0, s.Gr)((e) => e.get(eF.GV)(et.J, 'familyResource')),
                            [eF.TD]: (0, s.Gr)((e) => e.get(eF.GV)(er.L, 'childrenLandingResource')),
                            [eF.wK]: (0, s.Gr)((e) => e.get(eF.GV)(eo.u, 'landingBlocksResource')),
                            [eF.dh]: (0, s.Gr)((e) => e.get(eF.GV)(ei.q, 'promoResource')),
                            [eF.LC]: (0, s.Gr)((e) => {
                                let t = e.get(eF.CR),
                                    r = e.get(eF.V4),
                                    o = t({ credentials: 'include' }),
                                    i = r.resources.musicExternalApi;
                                return (0, eQ._)({ httpClient: o, musicExternalApi: i, publicConfig: r });
                            }),
                            [eF.W5]: (0, s.Gr)((e) => {
                                let t = e.get(eF.CR),
                                    r = e.get(eF.V4),
                                    o = t({ credentials: 'include' });
                                return (0, e$.Z)({ httpClient: o, publicConfig: r });
                            }),
                            [eF.PL]: (0, s.Gr)((e) => e.get(eF.GV)(en.w, 'labelsResource')),
                            [eF.DT]: (0, s.Gr)((e) => e.get(eF.GV)(es.O, 'concertsResource')),
                            [eF.dA]: (0, s.Gr)((e) => e.get(eF.GV)(ea.Q, 'wordsResource')),
                            [eF.$Y]: (0, s.Gr)((e) => e.get(eF.GV)(eu.C, 'wheelResource')),
                            [eF.VR]: (0, s.P9)((e) => () => {
                                let t = e.get(eF.A4),
                                    r = e.get(eF.V4),
                                    o = (0, eY.i)({ httpClientFactory: t, publicConfig: r });
                                return (0, ex.P)({ probe: (e) => o.ping({ signal: e }) });
                            }),
                            [eF.zj]: (0, s.Gr)((e) => e.get(eF.GV)(el.U, 'lumenResource')),
                            [eF.RD]: (0, s.Gr)((e) => (0, eB.L)(e.get(eF.Zf))),
                            [eF.vg]: (0, s.Gr)(() => (0, eG.a)()),
                        })
                        .register(
                            eF.ff,
                            (0, s.Gr)((e) => {
                                let t = e.get(eF.N1);
                                return (0, eI.Y)(t);
                            }),
                        )
                        .registerMany({
                            [eF.mD]: (0, s.Gr)((e) => (0, eH.s)({ environment: ew, appVersion: (0, eM.B)(), rumResource: e.get(eF.W5) })),
                            [eF.UB]: (0, s.Gr)((e) => {
                                let t = e.get(eF.vg);
                                return new d.BP(t);
                            }),
                            [eF.Tq]: (0, s.Gr)((e) => {
                                var t;
                                let r = e.get(eF.W5);
                                return (null == (t = window.Ya) ? void 0 : t.Rum) ? new d.GY((0, ev.y)(), r, window.Ya.Rum) : null;
                            }),
                        });
                return eJ
                    .register(
                        eF.by,
                        (0, s.Gr)(() => e3(eJ, !1)),
                    )
                    .register(
                        eF.s_,
                        (0, s.Gr)(() => e3(eJ, !0)),
                    )
                    .register(
                        eF.ni,
                        (0, s.Gr)((e) => {
                            let t = e.get(eF.Zf);
                            return new l.SU({
                                skeletonFactory: new ef.F6({
                                    landingResource: e.get(eF.V3),
                                    artistsResource: e.get(eF.O9),
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
        47720: (e, t, r) => {
            r.d(t, { h: () => i });
            var o = r(30282);
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
        70787: (e, t, r) => {
            r.d(t, { g: () => i });
            var o = r(15253);
            let i = (e) => {
                let t = e.get(o.c.OfflineMode);
                return 'boolean' == typeof t && t;
            };
        },
    },
]);
