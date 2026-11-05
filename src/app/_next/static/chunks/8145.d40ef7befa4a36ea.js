'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8145],
    {
        8145: (e, t, r) => {
            (r.r(t), r.d(t, { createDesktopContainer: () => te }));
            var o = r(98283),
                i = r(30282),
                s = r(77348),
                n = r(40441),
                a = r(8819),
                u = r(32813),
                l = r(54264),
                g = r(75994),
                c = r(44084),
                d = r(52028),
                h = r(27253),
                p = r(10285),
                m = r(42668),
                G = r(9519),
                f = r(55532);
            class v extends f.X {
                async getOutageNotice(e) {
                    return (
                        await this.httpClient.get(
                            'v1/apps/music/properties/outage-notice',
                            this.createHttpOptions({ timeoutKey: 'getOutageNotice', signal: null == e ? void 0 : e.signal }, { withoutHeaders: !0 }),
                        )
                    ).json();
                }
                constructor(e, t) {
                    (super(e, t), (0, G._)(this, 'httpClient', void 0), (0, G._)(this, 'config', void 0), (this.httpClient = e), (this.config = t));
                }
            }
            var w = r(77584),
                k = r(33850),
                y = r(86057),
                R = r(82740),
                V = r(32030),
                P = r(44928),
                C = r(7527),
                U = r(30868),
                b = r(25454),
                L = r(94899),
                A = r(46414),
                D = r(29636),
                O = r(27822),
                S = r(7809),
                z = r(64966),
                E = r(54300),
                x = r(82556),
                _ = r(24041),
                T = r(66880),
                M = r(80690),
                q = r(97860),
                B = r(96614),
                H = r(51751),
                N = r(63111),
                Z = r(61624),
                F = r(93452),
                I = r(87671),
                X = r(85281),
                Y = r(2410),
                $ = r(28800),
                Q = r(60520),
                W = r(39964),
                K = r(80500),
                j = r(83692),
                J = r(35486),
                ee = r(63744),
                et = r(95212),
                er = r(27114),
                eo = r(7588),
                ei = r(48018),
                es = r(5993),
                en = r(11551),
                ea = r(8868),
                eu = r(9176),
                el = r(92360),
                eg = r(78572),
                ec = r(91991),
                ed = r(22e3),
                eh = r(20049),
                ep = r(68900),
                em = r(65140),
                eG = r(31015),
                ef = r(70030),
                ev = r(96820),
                ew = r(53647),
                ek = r(70844),
                ey = r(31556),
                eR = r(8438),
                eV = r(15253),
                eP = r(32808),
                eC = r(4370),
                eU = r(99890),
                eb = r(44698);
            let eL = (e) => (void 0 === e ? 'missing' : e ? 'present' : 'empty');
            class eA extends eb.P {
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
                            passportLogin: eL(e),
                            tokenOwnerLogin: eL(r),
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
                    e.charAt(0) === eC.Z.main.href && (e = e.substring(1));
                    let t = new URLSearchParams({ redirectUri: e, language: this.language });
                    return ''.concat(origin, '/oauth?').concat(t.toString());
                }
                get oauthUrl() {
                    let {
                            oauthCredentials: { host: e, clientId: t },
                        } = this.config,
                        r = (0, p.r)(e, eP.r.RU, m.B),
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
                    let e = this.getPassportHostWithTld(eP.r.RU, m.B);
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
                    let t = (0, eU.C8)(e.expiresIn),
                        r = this.oauthState;
                    if (!e.state || !r)
                        return (
                            (0, eU.uV)({ stage: 'token-storage', state: 'missing', write: 'skipped', readback: 'not-attempted', ttl: t, result: 'state-missing' }),
                            'state-missing'
                        );
                    if (e.state !== r)
                        return (
                            (0, eU.uV)({ stage: 'token-storage', state: 'mismatch', write: 'skipped', readback: 'not-attempted', ttl: t, result: 'state-mismatch' }),
                            'state-mismatch'
                        );
                    this.storage.set(eV.c.Oauth, e.token, { expires: Math.floor(e.expiresIn / 86400) });
                    let o = !!this.storage.get(eV.c.Oauth),
                        i = o ? 'stored' : 'readback-missing';
                    return ((0, eU.uV)({ stage: 'token-storage', state: 'match', write: 'attempted', readback: o ? 'present' : 'missing', ttl: t, result: i }), i);
                }
                get token() {
                    if (this.passportLogin) return this.storage.get(eV.c.Oauth) || void 0;
                }
                removeToken() {
                    this.storage.remove(eV.c.Oauth);
                }
                updateOauthState() {
                    let e = Math.round(1e11 * Math.random()).toString(16);
                    this.storage.set(eV.c.OauthState, e, { expires: 1 });
                }
                get oauthState() {
                    return this.storage.get(eV.c.OauthState) || '';
                }
                reportAuthorizationDecision(e, t) {
                    let r = JSON.stringify(e);
                    this.reportedAuthorizationDecisions.has(r) ||
                        (this.reportedAuthorizationDecisions.add(r), t && (0, eU.uV)({ stage: 'attempt-start', trigger: t }), (0, eU.uV)(e));
                }
                constructor(e, t, r) {
                    (super(e, t),
                        (0, G._)(this, 'language', void 0),
                        (0, G._)(this, 'dataIsLoaded', void 0),
                        (0, G._)(this, 'tokenOwnerLogin', void 0),
                        (0, G._)(this, 'reportedAuthorizationDecisions', void 0),
                        (this.language = r),
                        (this.dataIsLoaded = !1),
                        (this.reportedAuthorizationDecisions = new Set()),
                        this.oauthState || this.updateOauthState(),
                        this.check());
                }
            }
            class eD extends eA {
                get token() {
                    return this.storage.get(eV.c.Oauth) || void 0;
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
                    (super(e, t, r), (0, G._)(this, 'passportLoginFromElectron', void 0), (0, G._)(this, 'yadexUidFromElectron', void 0), this.loadDataFromElectron());
                }
            }
            var eO = r(55267),
                eS = r(3629),
                ez = r(23405),
                eE = r(72694);
            class ex {
                onChangeLanguage() {
                    window.location.reload();
                }
            }
            var e_ = r(83602),
                eT = r(66059),
                eM = r(42953),
                eq = r(70787),
                eB = r(12149),
                eH = r(27972),
                eN = r(223),
                eZ = r(8193),
                eF = r(43540),
                eI = r(4086),
                eX = r(71575),
                eY = r(3744),
                e$ = r(3024),
                eQ = r(87123),
                eW = r(64965),
                eK = r(74527),
                ej = r(83620),
                eJ = r(85230),
                e0 = r(47720);
            let e4 = (e) => {
                let { authorization: t, cacheController: r, httpClient: o, i18nStorage: i, prefixUrl: s, publicConfig: n } = e,
                    a = i.getLanguage(),
                    u = n.resources.musicExternalApi,
                    l = {
                        prefixUrl: s,
                        retryPolicyConfig: u.retryPolicyConfig,
                        timeouts: u.timeouts.accountResource,
                        params: { common: { oauth: t.token, client: (0, eJ._)(), device: (0, e0.h)(), language: a } },
                    };
                return r ? new ev.wV(o, l, { cacheController: r }) : new ej.Q(o, l);
            };
            var e2 = r(72882),
                e8 = r(39968);
            function e1(e) {
                let {
                        authorization: t,
                        httpClientFactory: r,
                        i18nStorage: o,
                        platformSecret: i,
                        prefixUrl: s,
                        publicConfig: n,
                        slam: a,
                        storage: u,
                        useResourcesFileInfo: l = !1,
                    } = e,
                    g = r(),
                    c = o.getLanguage(),
                    d = n.resources.musicExternalApi,
                    h = {
                        prefixUrl: s,
                        retryPolicyConfig: d.retryPolicyConfig,
                        timeouts: d.timeouts[l ? 'resourcesResource' : 'getFileInfoResource'],
                        params: { common: { oauth: t.token, client: (0, eJ._)(), device: (0, e0.h)(), language: c } },
                    },
                    p = a.repositoryContainer.fileStorage,
                    m = a.repositoryContainer.tracksRepository,
                    G = a.repositoryContainer.usersTracksRepository;
                return p && m && G
                    ? new (l ? ev.mK : ev.d7)(g, h, {
                          fileStorage: p,
                          tracksRepository: m,
                          usersTracksRepository: G,
                          hooks: a.hooks,
                          variables: {
                              get uid() {
                                  return u.get(eV.c.YmUid);
                              },
                              secretKey: i,
                          },
                      })
                    : new (l ? e2.K : e8.v)(g, h);
            }
            let e5 = (e) => {
                let { resource: t, resourceName: r, slam: o } = e,
                    i = o.cacheController;
                return i ? (0, ev._2)({ resource: t, cacheController: i, config: { common: { resourceName: r }, enabled: !0, priority: ev.OU.HIGH, ttl: 6048e5 } }) : t;
            };
            var e3 = r(71625),
                e9 = r(54020);
            let e6 = (e, t) => {
                let r = e.get(eI.oo),
                    o = e.get(eI.U2),
                    i = e.get(eI.Zf),
                    s = o.get(eV.c.YnisonDeviceId);
                s || ((s = (0, e9.A)()), o.set(eV.c.YnisonDeviceId, s));
                let n = {
                        info: { app_name: 'Desktop', app_version: (0, eH.B)() || '', title: 'Music Desktop App', device_id: s, type: e3.bq.WEB_DESKTOP },
                        volumeGranularity: 20,
                        get defaultVolume() {
                            var a;
                            return null != (a = r.get(eV.c.YmPlayerVolume)) ? a : void 0;
                        },
                    },
                    u = e.get(eI.WA).getPassportUid(),
                    l = e.get(eI.QG),
                    g = e.get(eI.V4),
                    c = e.get(eI.UB),
                    d = e.get(eI.Tq),
                    h = [new e3.zT(c)];
                return (
                    d && h.push(new e3.qP(d)),
                    new e3.Jd({
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
            var e7 = r(10466);
            async function te(e) {
                let { tld: t, env: G, publicConfig: f, customApiPrefixUrl: eP } = e,
                    eC = (0, eB.u)(),
                    eU = (0, i.u0)(f, t, eP),
                    eb = (0, i.Ef)(f, eC),
                    eL = await (0, ez.B)(G),
                    eA = {},
                    ej = new n.Dt()
                        .registerMany({
                            [eI.SX]: (0, n.Gr)(() => G),
                            [eI.S1]: (0, n.Gr)(() => (0, e$.k)()),
                            [eI.V4]: (0, n.Gr)(() => f),
                            [eI.xF]: (0, n.Gr)(() => null),
                            [eI.qt]: (0, n.Gr)(() => eU),
                            [eI.P0]: (0, n.Gr)(() => new s.q(eL)),
                            [eI.Zi]: (0, n.Gr)(() => new eE.Y(eA)),
                        })
                        .register(
                            eI.WA,
                            (0, n.Gr)((e) => {
                                let t = e.get(eI.Zi);
                                return new eF.V(t);
                            }),
                        )
                        .registerMany({
                            [eI.Zf]: (0, n.Gr)((e) => {
                                let t = e.get(eI.P0).get(eS.qV);
                                return new c.r({
                                    maxLogLevel: g.cm.DEBUG,
                                    secureFields: ep.x,
                                    disableLogToConsole: !t,
                                    additionalData: {
                                        get puid() {
                                            return e.get(eI.WA).getPassportUid();
                                        },
                                    },
                                });
                            }),
                            [eI.iP]: (0, n.Gr)(() => {
                                let e = (0, eG.wS)('/service-worker-cache.js');
                                return (e.initialize(), e);
                            }),
                            [eI.RG]: (0, n.Gr)(async (e) => {
                                let {
                                    mocks: { enabled: o, mocksProviderUrl: i, urlCapturePattern: s },
                                } = e.get(eI.V4);
                                if (!o) return () => Promise.resolve(null);
                                let { initMocks: n } = await Promise.all([r.e(8019), r.e(3037)]).then(r.bind(r, 33037)),
                                    a = e.get(eI.U2),
                                    u = e.get(eI.Zf),
                                    l = 'production' === e.get(eI.SX) ? '/rsc-cache-worker.js' : '',
                                    g = () => {
                                        var e;
                                        return null != (e = a.get(h.L, !1)) ? e : null;
                                    },
                                    c = s || ''.concat(eU, '/*');
                                return () =>
                                    n({
                                        getMocksConfiguration: g,
                                        log: (e, t) => u.debug('[Mocks] | desktop: '.concat(e), t),
                                        mocksProviderUrl: i,
                                        serviceWorkerUrl: l,
                                        urlCapturePattern: (0, p.r)(c, t, m.B),
                                    }).catch((e) => u.debug('[Mocks] | desktop: initialization failed. '.concat(e)));
                            }),
                            [eI.TK]: (0, n.Gr)((e) =>
                                (0, eT.b)(
                                    new c.r({
                                        maxLogLevel: g.cm.DEBUG,
                                        secureFields: ep.x,
                                        disableLogToConsole: 'development' !== e.get(eI.SX),
                                        additionalData: {
                                            get puid() {
                                                return e.get(eI.WA).getPassportUid();
                                            },
                                        },
                                    }),
                                ),
                            ),
                            [eI.oo]: (0, n.Gr)(() => new ew.si()),
                            [eI.DP]: (0, n.Gr)(() => new ew.MJ('client desktop', 'cookie')),
                            [eI.U2]: (0, n.Gr)(() => new ew.si()),
                            [eI.vH]: (0, n.Gr)(() => new ew.fW()),
                            [eI.Xc]: (0, n.Gr)((e) => {
                                let t = e.get(eI.oo),
                                    r = e.get(eI.Zf);
                                return new e_.E({
                                    isBuildTypeDesktop: !0,
                                    logger: r,
                                    changeLanguageHandler: new ex(),
                                    storage: {
                                        get: () => t.get(eV.c.SavedUserLanguage),
                                        set(e) {
                                            t.set(eV.c.SavedUserLanguage, e);
                                        },
                                    },
                                });
                            }),
                        })
                        .registerMany({
                            [eI.y$]: (0, n.Gr)((e) => {
                                let t = e.get(eI.Zf),
                                    r = e.get(eI.oo),
                                    o = new ev.Mz({
                                        config: { useEntitiesStorage: !0, useFileStorage: !0, useResponseCacheStorage: !0 },
                                        plugins: [new ev.wK({ logger: t })],
                                    });
                                return (
                                    o.createCacheController({
                                        repositoryContainer: o.repositoryContainer,
                                        variables: {
                                            get uid() {
                                                return r.get(eV.c.YmUid);
                                            },
                                            get isOffline() {
                                                return !!o.network.status.isOffline;
                                            },
                                        },
                                    }),
                                    o
                                );
                            }),
                            [eI.Hm]: (0, n.P9)(
                                () =>
                                    function () {
                                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                        return new u.Q(e);
                                    },
                            ),
                            [eI.gu]: (0, n.P9)(
                                () =>
                                    function () {
                                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                        return new a.S(e);
                                    },
                            ),
                        })
                        .registerMany({
                            [eI.QG]: (0, n.Gr)((e) => new eD(e.get(eI.oo), e.get(eI.V4), e.get(eI.Xc).getLanguage())),
                            [eI.OP]: (0, n.P9)(
                                (e) =>
                                    function () {
                                        var t, r, o, i, s;
                                        let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                            a = arguments.length > 1 ? arguments[1] : void 0,
                                            u = e.get(eI.Zf),
                                            l = e.get(eI.U2),
                                            g = new em.N(u),
                                            {
                                                resources: { musicExternalApi: c },
                                            } = e.get(eI.V4);
                                        ((n.timeout = c.defaultTimeout),
                                            (n.hooks = {
                                                afterResponse: [...((null == n || null == (t = n.hooks) ? void 0 : t.afterResponse) || [])],
                                                beforeError: [g.beforeErrorHook, ...((null == n || null == (r = n.hooks) ? void 0 : r.beforeError) || [])],
                                                beforeRequest: [eh.xW, ...((null == n || null == (o = n.hooks) ? void 0 : o.beforeRequest) || [])],
                                                afterTimeout: [g.beforeErrorHook, ...((null == n || null == (i = n.hooks) ? void 0 : i.afterTimeout) || [])],
                                                beforeRetry: [eh.ie, g.beforeRetryHook, ...((null == n || null == (s = n.hooks) ? void 0 : s.beforeRetry) || [])],
                                            }));
                                        let d = a(n);
                                        return (0, ev.sY)(d, {
                                            get isOffline() {
                                                var h;
                                                return null != (h = (0, eN.Q)(e.get(eI.y$))) ? h : (0, eq.g)(l);
                                            },
                                        });
                                    },
                            ),
                        })
                        .registerMany({
                            [eI.A4]: (0, n.P9)(
                                (e) =>
                                    function () {
                                        var t;
                                        let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                            o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e.get(eI.OP),
                                            i = e.get(eI.QG),
                                            s = e.get(eI.Hm),
                                            n = e.get(eI.Xc),
                                            a = e.get(eI.V4),
                                            u = e4({ authorization: i, cacheController: null, httpClient: o({}, s), i18nStorage: n, prefixUrl: eU, publicConfig: a });
                                        return (
                                            (r.hooks = { beforeError: [(0, eO.o)(i, u), ...((null == r || null == (t = r.hooks) ? void 0 : t.beforeError) || [])] }),
                                            o(r, s)
                                        );
                                    },
                            ),
                        })
                        .register(
                            eI.CR,
                            (0, n.P9)(
                                (e) =>
                                    function () {
                                        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                        return e.get(eI.A4)(t, e.get(eI.gu));
                                    },
                            ),
                        )
                        .register(
                            eI.GV,
                            (0, n.P9)((e) => {
                                let t = e.get(eI.QG),
                                    r = e.get(eI.qt),
                                    o = e.get(eI.Xc);
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
                                                        client: (0, eJ._)(),
                                                        ...((null == a ? void 0 : a.device) === null
                                                            ? {}
                                                            : { device: null != (g = null == a ? void 0 : a.device) ? g : (0, e0.h)() }),
                                                        language: h,
                                                    },
                                                },
                                            })
                                        );
                                    };
                                })({ authorization: t, createDefaultHttpClient: () => e.get(eI.A4)(), defaultPrefixUrl: r, i18nStorage: o, publicConfig: e.get(eI.V4) });
                            }),
                        )
                        .registerMany({
                            [eI.GB]: (0, n.Gr)((e) => {
                                let t = e.get(eI.GV),
                                    r = e.get(eI.Hm),
                                    o = e.get(eI.V4),
                                    i = r({ credentials: 'omit' });
                                return t(v, 'outageNoticeResource', { prefixUrl: o.resources.outageNotice.prefixUrl, httpClient: i, oauth: null, device: null });
                            }),
                            [eI.$I]: (0, n.Gr)((e) => {
                                let t = e.get(eI.QG),
                                    r = e.get(eI.A4),
                                    o = e.get(eI.Xc),
                                    i = e.get(eI.qt),
                                    s = e.get(eI.V4);
                                return e4({
                                    authorization: t,
                                    cacheController: e.get(eI.y$).cacheController,
                                    httpClient: r(),
                                    i18nStorage: o,
                                    prefixUrl: i,
                                    publicConfig: s,
                                });
                            }),
                            [eI._1]: (0, n.Gr)((e) => e.get(eI.GV)(w.d, 'usersResource')),
                            [eI.V3]: (0, n.Gr)((e) => {
                                let t = e.get(eI.QG),
                                    r = e.get(eI.A4),
                                    o = e.get(eI.Xc),
                                    i = e.get(eI.qt);
                                return ((e) => {
                                    let { authorization: t, httpClientFactory: r, i18nStorage: o, prefixUrl: i, publicConfig: s, slam: n } = e,
                                        a = r(),
                                        u = o.getLanguage(),
                                        l = s.resources.musicExternalApi,
                                        g = {
                                            prefixUrl: i,
                                            retryPolicyConfig: l.retryPolicyConfig,
                                            timeouts: l.timeouts.landingResource,
                                            params: { common: { oauth: t.token, client: (0, eJ._)(), device: (0, e0.h)(), language: u } },
                                        };
                                    return new ev.o7(a, g, {
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
                                })({ authorization: t, httpClientFactory: r, i18nStorage: o, prefixUrl: i, publicConfig: e.get(eI.V4), slam: e.get(eI.y$) });
                            }),
                            [eI.Lb]: (0, n.Gr)((e) => e.get(eI.GV)(k.H, 'landing3Resource')),
                            [eI.tz]: (0, n.Gr)((e) => e.get(eI.GV)(y.B, 'albumsResource')),
                            [eI.$8]: (0, n.Gr)((e) => e.get(eI.GV)(R.w, 'libraryResource')),
                            [eI.Oo]: (0, n.Gr)((e) => e.get(eI.GV)(V.L, 'tracksResource')),
                            [eI.$5]: (0, n.Gr)((e) => e.get(eI.GV)(P._, 'availabilityResource')),
                            [eI.qT]: (0, n.Gr)((e) => {
                                let t = e.get(eI.QG),
                                    r = e.get(eI.A4),
                                    o = e.get(eI.Xc),
                                    i = e.get(eI.qt),
                                    s = e.get(eI.V4);
                                return e1({
                                    authorization: t,
                                    httpClientFactory: r,
                                    i18nStorage: o,
                                    platformSecret: eb,
                                    prefixUrl: i,
                                    publicConfig: s,
                                    slam: e.get(eI.y$),
                                    storage: e.get(eI.oo),
                                });
                            }),
                            [eI.DV]: (0, n.Gr)((e) =>
                                e1({
                                    authorization: e.get(eI.QG),
                                    httpClientFactory: e.get(eI.A4),
                                    i18nStorage: e.get(eI.Xc),
                                    platformSecret: eb,
                                    prefixUrl: e.get(eI.qt),
                                    publicConfig: e.get(eI.V4),
                                    slam: e.get(eI.y$),
                                    storage: e.get(eI.oo),
                                    useResourcesFileInfo: !0,
                                }),
                            ),
                            [eI.X4]: (0, n.Gr)((e) => e.get(eI.GV)(C.a, 'topResource')),
                            [eI.O9]: (0, n.Gr)((e) => e.get(eI.GV)(U.b, 'artistsResource')),
                            [eI.E]: (0, n.Gr)((e) => e.get(eI.GV)(b.V, 'slidesResource')),
                            [eI.wH]: (0, n.Gr)((e) => e.get(eI.GV)(L.c, 'redAlertResource')),
                            [eI.ok]: (0, n.Gr)((e) => e.get(eI.GV)(A.Z, 'rotorResource')),
                            [eI.X8]: (0, n.Gr)((e) => e.get(eI.GV)(D.w, 'waveResource')),
                            [eI.yq]: (0, n.Gr)((e) => e.get(eI.GV)(O.p, 'searchResource')),
                            [eI.NN]: (0, n.Gr)((e) => e.get(eI.GV)(S.v, 'searchResource')),
                            [eI.qN]: (0, n.Gr)((e) => e.get(eI.GV)(z.T, 'playlistResource')),
                            [eI.ro]: (0, n.Gr)((e) => e.get(eI.GV)(E.e, 'playlistsResource')),
                            [eI.nM]: (0, n.Gr)((e) => e.get(eI.GV)(x.o, 'pinResource')),
                            [eI.Ut]: (0, n.Gr)((e) => e.get(eI.GV)(_.$, 'metatagsResource')),
                            [eI.K1]: (0, n.Gr)((e) => e.get(eI.GV)(T.p, 'tagResource')),
                            [eI.eu]: (0, n.Gr)((e) => e.get(eI.GV)(M.D, 'feedResource')),
                            [eI.SD]: (0, n.Gr)((e) => e.get(eI.GV)(q.F, 'wizard3Resource')),
                            [eI.aE]: (0, n.Gr)((e) => {
                                let t = e.get(eI.GV),
                                    r = e.get(eI.y$);
                                return e5({ resource: t(B.l, 'pinsResource'), resourceName: B.l.constructor.name, slam: r });
                            }),
                            [eI.ki]: (0, n.Gr)((e) => e.get(eI.GV)(H.I, 'musicHistoryResource')),
                            [eI.c9]: (0, n.Gr)((e) => e.get(eI.GV)(N.s, 'dynamicPagesResource')),
                            [eI.en]: (0, n.Gr)((e) => e.get(eI.GV)(Z.B, 'chartResource')),
                            [eI.jQ]: (0, n.Gr)((e) => e.get(eI.GV)(F._, 'clipsResource')),
                            [eI.cZ]: (0, n.Gr)((e) => e.get(eI.GV)(I.c, 'lyricViewsResource')),
                            [eI.Zl]: (0, n.Gr)((e) => e.get(eI.GV)(X.D, 'nonMusicResource')),
                            [eI.CN]: (0, n.Gr)((e) => e.get(eI.GV)(Y.N, 'donationResource')),
                            [eI.JM]: (0, n.Gr)((e) => e.get(eI.GV)($.c, 'streamsResource')),
                            [eI.P1]: (0, n.Gr)((e) => e.get(eI.GV)(Q.S, 'loaderResource')),
                            [eI.re]: (0, n.Gr)((e) => {
                                let t = e.get(eI.GV),
                                    r = e.get(eI.A4)({ credentials: 'omit' });
                                return t(W.s, 'prefixlessResource', { httpClient: r, oauth: null, prefixUrl: '' });
                            }),
                            [eI.Lk]: (0, n.Gr)((e) => e.get(eI.GV)(K.g, 'filtersResource')),
                            [eI.uM]: (0, n.Gr)((e) => {
                                var t;
                                let { acqOffers: r } = e.get(eI.V4),
                                    { rumSettings: s } = (0, i.$5)(),
                                    { brand: n, service: a, environment: u, appVersion: l } = r,
                                    { platform: g, page: c } = s,
                                    d = e.get(eI.QG),
                                    h = e.get(eI.Xc).getLanguage(),
                                    p = e.get(eI.A4),
                                    m = d.token || null,
                                    G = p({ credentials: 'omit' }),
                                    f = e.get(eI.Zf),
                                    { request_id: v, puid: w } = null != (t = e.get(eI.Zi).getStore()) ? t : {};
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
                                    requester: (0, e7.n)(G, f),
                                    puid: (null == w ? void 0 : w.toString()) || null,
                                    rumOptions: { platform: g, page: c, requestId: v },
                                });
                            }),
                            [eI.$$]: (0, n.Gr)((e) => e.get(eI.GV)(j.E, 'ugcResource', { device: null })),
                            [eI.sv]: (0, n.Gr)((e) => e.get(eI.GV)(J.L, 'collectionResource')),
                            [eI.gd]: (0, n.Gr)((e) => e.get(eI.GV)(ee.z, 'adsResource')),
                            [eI.EN]: (0, n.Gr)((e) => e.get(eI.GV)(et._, 'afterTrackResource')),
                            [eI.Ez]: (0, n.Gr)((e) => e.get(eI.GV)(er.l, 'personalResource')),
                            [eI.N1]: (0, n.Gr)((e) => {
                                let t = e.get(eI.GV),
                                    r = e.get(eI.y$);
                                return e5({ resource: t(eo.H, 'disclaimersResource'), resourceName: eo.H.constructor.name, slam: r });
                            }),
                            [eI.u2]: (0, n.Gr)((e) => e.get(eI.GV)(ei.J, 'familyResource')),
                            [eI.TD]: (0, n.Gr)((e) => e.get(eI.GV)(es.L, 'childrenLandingResource')),
                            [eI.wK]: (0, n.Gr)((e) => e.get(eI.GV)(en.u, 'landingBlocksResource')),
                            [eI.dh]: (0, n.Gr)((e) => e.get(eI.GV)(ea.q, 'promoResource')),
                            [eI.LC]: (0, n.Gr)((e) => {
                                let t = e.get(eI.CR),
                                    r = e.get(eI.V4),
                                    o = t({ credentials: 'include' }),
                                    i = r.resources.musicExternalApi;
                                return (0, eK._)({ httpClient: o, musicExternalApi: i, publicConfig: r });
                            }),
                            [eI.W5]: (0, n.Gr)((e) => {
                                let t = e.get(eI.CR),
                                    r = e.get(eI.V4),
                                    o = t({ credentials: 'include' });
                                return (0, eW.Z)({ httpClient: o, publicConfig: r });
                            }),
                            [eI.PL]: (0, n.Gr)((e) => e.get(eI.GV)(eu.w, 'labelsResource')),
                            [eI.DT]: (0, n.Gr)((e) => e.get(eI.GV)(el.O, 'concertsResource')),
                            [eI.dA]: (0, n.Gr)((e) => e.get(eI.GV)(eg.Q, 'wordsResource')),
                            [eI.$Y]: (0, n.Gr)((e) => e.get(eI.GV)(ec.C, 'wheelResource')),
                            [eI.VR]: (0, n.P9)((e) => () => {
                                let t = e.get(eI.A4),
                                    r = e.get(eI.V4),
                                    o = (0, eQ.i)({ httpClientFactory: t, publicConfig: r });
                                return (0, eM.P)({ probe: (e) => o.ping({ signal: e }) });
                            }),
                            [eI.zj]: (0, n.Gr)((e) => e.get(eI.GV)(ed.U, 'lumenResource')),
                            [eI.RD]: (0, n.Gr)((e) => (0, eZ.L)(e.get(eI.Zf))),
                            [eI.vg]: (0, n.Gr)(() => (0, ek.a)()),
                        })
                        .register(
                            eI.ff,
                            (0, n.Gr)((e) => {
                                let t = e.get(eI.N1);
                                return (0, eY.Y)(t);
                            }),
                        )
                        .registerMany({
                            [eI.mD]: (0, n.Gr)((e) => (0, eX.s)({ environment: G, appVersion: (0, eH.B)(), rumResource: e.get(eI.W5) })),
                            [eI.UB]: (0, n.Gr)((e) => {
                                let t = e.get(eI.vg);
                                return new d.BP(t);
                            }),
                            [eI.Tq]: (0, n.Gr)((e) => {
                                var t;
                                let r = e.get(eI.W5);
                                return (null == (t = window.Ya) ? void 0 : t.Rum) ? new d.GY((0, eR.y)(), r, window.Ya.Rum) : null;
                            }),
                        });
                return ej
                    .register(
                        eI.by,
                        (0, n.Gr)(() => e6(ej, !1)),
                    )
                    .register(
                        eI.s_,
                        (0, n.Gr)(() => e6(ej, !0)),
                    )
                    .register(
                        eI.ni,
                        (0, n.Gr)((e) => {
                            let t = e.get(eI.Zf);
                            return new l.SU({
                                skeletonFactory: new ey.F6({
                                    landingResource: e.get(eI.V3),
                                    artistsResource: e.get(eI.O9),
                                    tabIdQueryParamController: new ey.ET(),
                                    config: { nodesConfig: { tabConfig: { addLoadAndShowBlocks: !1 } } },
                                }),
                                visibilityControllerParams: {
                                    visibilityConfig: { type: 'listVisibility', virtualizedMetadataLoader: new ef.yq({ resizeObserverAdapter: new ef.u2() }) },
                                },
                                plugins: [new ey.X({ logger: t })],
                            });
                        }),
                    );
            }
        },
        32808: (e, t, r) => {
            var o;
            (r.d(t, { r: () => o }),
                (function (e) {
                    ((e.RU = 'ru'), (e.COM = 'com'), (e.KZ = 'kz'), (e.BY = 'by'), (e.UZ = 'uz'));
                })(o || (o = {})));
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
