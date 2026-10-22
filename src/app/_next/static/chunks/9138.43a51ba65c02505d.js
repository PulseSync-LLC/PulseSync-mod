'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9138],
    {
        19138: (e, t, r) => {
            (r.r(t), r.d(t, { createDesktopContainer: () => e5 }));
            var o = r(1817),
                i = r(93588),
                n = r(73650),
                s = r(13486),
                a = r(59353),
                u = r(73829),
                l = r(79157),
                g = r(9248),
                c = r(4401),
                d = r(28210),
                h = r(69935),
                p = r(90887),
                m = r(52830),
                G = r(48106),
                f = r(27940),
                v = r(10696),
                w = r(50302),
                k = r(16249),
                y = r(27354),
                R = r(68510),
                V = r(94638),
                P = r(91736),
                C = r(15545),
                U = r(96208),
                b = r(81102),
                L = r(74128),
                A = r(33031),
                D = r(58123),
                S = r(25678),
                O = r(3030),
                E = r(90496),
                z = r(2794),
                x = r(28596),
                T = r(44166),
                _ = r(77448),
                M = r(32141),
                q = r(80389),
                B = r(2242),
                Z = r(89646),
                F = r(76597),
                H = r(59815),
                I = r(80188),
                N = r(80250),
                Y = r(79250),
                $ = r(60070),
                Q = r(3374),
                W = r(59158),
                X = r(36064),
                K = r(12482),
                j = r(9902),
                J = r(42132),
                ee = r(83894),
                et = r(65844),
                er = r(61279),
                eo = r(38125),
                ei = r(25630),
                en = r(15178),
                es = r(33314),
                ea = r(79078),
                eu = r(58174),
                el = r(74906),
                eg = r(2952),
                ec = r(44342),
                ed = r(71062),
                eh = r(72233),
                ep = r(19616),
                em = r(67311),
                eG = r(78321),
                ef = r(2209),
                ev = r(59628),
                ew = r(58025),
                ek = r(95067),
                ey = r(87758),
                eR = r(53712),
                eV = r(57024),
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
            var eL = r(75749),
                eA = r(41871),
                eD = r(62631),
                eS = r(94564);
            class eO {
                onChangeLanguage() {
                    window.location.reload();
                }
            }
            var eE = r(28869),
                ez = r(41),
                ex = r(767),
                eT = r(79645),
                e_ = r(92231),
                eM = r(90208),
                eq = r(38889),
                eB = r(67154),
                eZ = r(36484),
                eF = r(81689),
                eH = r(35591),
                eI = r(75805),
                eN = r(23285),
                eY = r(32817),
                e$ = r(18370),
                eQ = r(47742),
                eW = r(48068),
                eX = r(27558);
            let eK = (e) => {
                let { authorization: t, cacheController: r, httpClient: o, i18nStorage: i, prefixUrl: n, publicConfig: s } = e,
                    a = i.getLanguage(),
                    u = s.resources.musicExternalApi,
                    l = {
                        prefixUrl: n,
                        retryPolicyConfig: u.retryPolicyConfig,
                        timeouts: u.timeouts.accountResource,
                        params: { common: { oauth: t.token, client: (0, eW._)(), device: (0, eX.h)(), language: a } },
                    };
                return r ? new ep.wV(o, l, { cacheController: r }) : new eQ.Q(o, l);
            };
            var ej = r(18420),
                eJ = r(91162);
            function e0(e) {
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
                        params: { common: { oauth: t.token, client: (0, eW._)(), device: (0, eX.h)(), language: c } },
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
                    : new (l ? ej.K : eJ.v)(g, h);
            }
            let e1 = (e) => {
                let { resource: t, resourceName: r, slam: o } = e,
                    i = o.cacheController;
                return i ? (0, ep._2)({ resource: t, cacheController: i, config: { common: { resourceName: r }, enabled: !0, priority: ep.OU.HIGH, ttl: 6048e5 } }) : t;
            };
            var e4 = r(75637),
                e8 = r(59342);
            let e2 = (e, t) => {
                let r = e.get(eZ.oo),
                    o = e.get(eZ.U2),
                    i = e.get(eZ.Zf),
                    n = o.get(ek.c.YnisonDeviceId);
                n || ((n = (0, e8.A)()), o.set(ek.c.YnisonDeviceId, n));
                let s = {
                        info: { app_name: 'Desktop', app_version: (0, eM.B)() || '', title: 'Music Desktop App', device_id: n, type: e4.bq.WEB_DESKTOP },
                        volumeGranularity: 20,
                        get defaultVolume() {
                            var a;
                            return null != (a = r.get(ek.c.YmPlayerVolume)) ? a : void 0;
                        },
                    },
                    u = e.get(eZ.WA).getPassportUid(),
                    l = e.get(eZ.QG),
                    g = e.get(eZ.V4),
                    c = e.get(eZ.UB),
                    d = e.get(eZ.Tq),
                    h = [new e4.zT(c)];
                return (
                    d && h.push(new e4.qP(d)),
                    new e4.Jd({
                        logger: i,
                        deviceConfig: s,
                        multiAuthUserId: u,
                        oauth: l.token,
                        ynisonConnectionConfig: g.ynisonConnectionConfig,
                        metricsTransport: h,
                        variables: {
                            newConnector: t,
                            isShadow: !0,
                            // for PulseSync: BEGIN resolve the local playback account without connecting to Ynison
                            get puid() {
                                return e.get(eZ.WA).getPassportUid();
                            },
                            // for PulseSync: END resolve the local playback account without connecting to Ynison
                        },
                    })
                );
            };
            var e9 = r(18752);
            async function e5(e) {
                let { tld: t, env: ew, publicConfig: ey, customApiPrefixUrl: eR } = e,
                    eV = (0, e_.u)(),
                    eP = (0, i.u0)(ey, t, eR),
                    eC = (0, i.Ef)(ey, eV),
                    eU = await (0, eD.B)(ew),
                    eQ = {},
                    ej = new s.Dt()
                        .registerMany({
                            [eZ.SX]: (0, s.Gr)(() => ew),
                            [eZ.S1]: (0, s.Gr)(() => (0, eI.k)()),
                            [eZ.V4]: (0, s.Gr)(() => ey),
                            [eZ.xF]: (0, s.Gr)(() => null),
                            [eZ.qt]: (0, s.Gr)(() => eP),
                            [eZ.P0]: (0, s.Gr)(() => new n.q(eU)),
                            [eZ.Zi]: (0, s.Gr)(() => new eS.Y(eQ)),
                        })
                        .register(
                            eZ.WA,
                            (0, s.Gr)((e) => {
                                let t = e.get(eZ.Zi);
                                return new eB.V(t);
                            }),
                        )
                        .registerMany({
                            [eZ.Zf]: (0, s.Gr)((e) => {
                                let t = e.get(eZ.P0).get(eA.qV);
                                return new c.r({
                                    maxLogLevel: g.cm.DEBUG,
                                    secureFields: ec.x,
                                    disableLogToConsole: !t,
                                    additionalData: {
                                        get puid() {
                                            return e.get(eZ.WA).getPassportUid();
                                        },
                                    },
                                });
                            }),
                            [eZ.RG]: (0, s.Gr)(async (e) => {
                                let {
                                    mocks: { enabled: o, mocksProviderUrl: i, urlCapturePattern: n },
                                } = e.get(eZ.V4);
                                if (!o) return () => Promise.resolve(null);
                                let { initMocks: s } = await Promise.all([r.e(6089), r.e(9662)]).then(r.bind(r, 39662)),
                                    a = e.get(eZ.U2),
                                    u = e.get(eZ.Zf),
                                    l = 'production' === e.get(eZ.SX) ? '/rsc-cache-worker.js' : '',
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
                            [eZ.TK]: (0, s.Gr)(
                                (e) =>
                                    new ((0, ez.b)(c.r))({
                                        maxLogLevel: g.cm.DEBUG,
                                        secureFields: ec.x,
                                        disableLogToConsole: 'development' !== e.get(eZ.SX),
                                        additionalData: {
                                            get puid() {
                                                return e.get(eZ.WA).getPassportUid();
                                            },
                                        },
                                    }),
                            ),
                            [eZ.oo]: (0, s.Gr)(() => new em.si()),
                            [eZ.DP]: (0, s.Gr)(() => new em.MJ('client desktop', 'cookie')),
                            [eZ.U2]: (0, s.Gr)(() => new em.si()),
                            [eZ.vH]: (0, s.Gr)(() => new em.fW()),
                            [eZ.Xc]: (0, s.Gr)((e) => {
                                let t = e.get(eZ.oo),
                                    r = e.get(eZ.Zf);
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
                            [eZ.y$]: (0, s.Gr)((e) => {
                                let t = e.get(eZ.Zf),
                                    r = e.get(eZ.oo),
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
                            [eZ.Hm]: (0, s.P9)(
                                () =>
                                    function () {
                                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                        return new u.Q(e);
                                    },
                            ),
                            [eZ.gu]: (0, s.P9)(
                                () =>
                                    function () {
                                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                        return new a.S(e);
                                    },
                            ),
                        })
                        .registerMany({
                            [eZ.QG]: (0, s.Gr)((e) => new eb(e.get(eZ.oo), e.get(eZ.V4), e.get(eZ.Xc).getLanguage())),
                            [eZ.OP]: (0, s.P9)(
                                (e) =>
                                    function () {
                                        var t, r, o, i, n;
                                        let s = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                            a = arguments.length > 1 ? arguments[1] : void 0,
                                            u = e.get(eZ.Zf),
                                            l = e.get(eZ.U2),
                                            g = new ed.N(u),
                                            {
                                                resources: { musicExternalApi: c },
                                            } = e.get(eZ.V4);
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
                                                return null != (h = (0, eq.Q)(e.get(eZ.y$))) ? h : (0, eT.g)(l);
                                            },
                                        });
                                    },
                            ),
                        })
                        .registerMany({
                            [eZ.A4]: (0, s.P9)(
                                (e) =>
                                    function () {
                                        var t;
                                        let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                            o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e.get(eZ.OP),
                                            i = e.get(eZ.QG),
                                            n = e.get(eZ.Hm),
                                            s = e.get(eZ.Xc),
                                            a = e.get(eZ.V4),
                                            u = eK({ authorization: i, cacheController: null, httpClient: o({}, n), i18nStorage: s, prefixUrl: eP, publicConfig: a });
                                        return (
                                            (r.hooks = { beforeError: [(0, eL.o)(i, u), ...((null == r || null == (t = r.hooks) ? void 0 : t.beforeError) || [])] }),
                                            o(r, n)
                                        );
                                    },
                            ),
                        })
                        .register(
                            eZ.CR,
                            (0, s.P9)(
                                (e) =>
                                    function () {
                                        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                        return e.get(eZ.A4)(t, e.get(eZ.gu));
                                    },
                            ),
                        )
                        .register(
                            eZ.GV,
                            (0, s.P9)((e) => {
                                let t = e.get(eZ.QG),
                                    r = e.get(eZ.qt),
                                    o = e.get(eZ.Xc);
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
                                                        client: (0, eW._)(),
                                                        ...((null == a ? void 0 : a.device) === null
                                                            ? {}
                                                            : { device: null != (g = null == a ? void 0 : a.device) ? g : (0, eX.h)() }),
                                                        language: h,
                                                    },
                                                },
                                            })
                                        );
                                    };
                                })({ authorization: t, createDefaultHttpClient: () => e.get(eZ.A4)(), defaultPrefixUrl: r, i18nStorage: o, publicConfig: e.get(eZ.V4) });
                            }),
                        )
                        .registerMany({
                            [eZ.$I]: (0, s.Gr)((e) => {
                                let t = e.get(eZ.QG),
                                    r = e.get(eZ.A4),
                                    o = e.get(eZ.Xc),
                                    i = e.get(eZ.qt),
                                    n = e.get(eZ.V4);
                                return eK({
                                    authorization: t,
                                    cacheController: e.get(eZ.y$).cacheController,
                                    httpClient: r(),
                                    i18nStorage: o,
                                    prefixUrl: i,
                                    publicConfig: n,
                                });
                            }),
                            [eZ._1]: (0, s.Gr)((e) => e.get(eZ.GV)(G.d, 'usersResource')),
                            [eZ.V3]: (0, s.Gr)((e) => {
                                let t = e.get(eZ.QG),
                                    r = e.get(eZ.A4),
                                    o = e.get(eZ.Xc),
                                    i = e.get(eZ.qt);
                                return ((e) => {
                                    let { authorization: t, httpClientFactory: r, i18nStorage: o, prefixUrl: i, publicConfig: n, slam: s } = e,
                                        a = r(),
                                        u = o.getLanguage(),
                                        l = n.resources.musicExternalApi,
                                        g = {
                                            prefixUrl: i,
                                            retryPolicyConfig: l.retryPolicyConfig,
                                            timeouts: l.timeouts.landingResource,
                                            params: { common: { oauth: t.token, client: (0, eW._)(), device: (0, eX.h)(), language: u } },
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
                                })({ authorization: t, httpClientFactory: r, i18nStorage: o, prefixUrl: i, publicConfig: e.get(eZ.V4), slam: e.get(eZ.y$) });
                            }),
                            [eZ.Lb]: (0, s.Gr)((e) => e.get(eZ.GV)(f.H, 'landing3Resource')),
                            [eZ.tz]: (0, s.Gr)((e) => e.get(eZ.GV)(v.B, 'albumsResource')),
                            [eZ.$8]: (0, s.Gr)((e) => e.get(eZ.GV)(w.w, 'libraryResource')),
                            [eZ.Oo]: (0, s.Gr)((e) => e.get(eZ.GV)(k.L, 'tracksResource')),
                            [eZ.$5]: (0, s.Gr)((e) => e.get(eZ.GV)(y._, 'availabilityResource')),
                            [eZ.qT]: (0, s.Gr)((e) => {
                                let t = e.get(eZ.QG),
                                    r = e.get(eZ.A4),
                                    o = e.get(eZ.Xc),
                                    i = e.get(eZ.qt),
                                    n = e.get(eZ.V4);
                                return e0({
                                    authorization: t,
                                    httpClientFactory: r,
                                    i18nStorage: o,
                                    platformSecret: eC,
                                    prefixUrl: i,
                                    publicConfig: n,
                                    slam: e.get(eZ.y$),
                                    storage: e.get(eZ.oo),
                                });
                            }),
                            [eZ.DV]: (0, s.Gr)((e) =>
                                e0({
                                    authorization: e.get(eZ.QG),
                                    httpClientFactory: e.get(eZ.A4),
                                    i18nStorage: e.get(eZ.Xc),
                                    platformSecret: eC,
                                    prefixUrl: e.get(eZ.qt),
                                    publicConfig: e.get(eZ.V4),
                                    slam: e.get(eZ.y$),
                                    storage: e.get(eZ.oo),
                                    useResourcesFileInfo: !0,
                                }),
                            ),
                            [eZ.X4]: (0, s.Gr)((e) => e.get(eZ.GV)(R.a, 'topResource')),
                            [eZ.O9]: (0, s.Gr)((e) => e.get(eZ.GV)(V.b, 'artistsResource')),
                            [eZ.E]: (0, s.Gr)((e) => e.get(eZ.GV)(P.V, 'slidesResource')),
                            [eZ.wH]: (0, s.Gr)((e) => e.get(eZ.GV)(C.c, 'redAlertResource')),
                            [eZ.ok]: (0, s.Gr)((e) => e.get(eZ.GV)(U.Z, 'rotorResource')),
                            [eZ.X8]: (0, s.Gr)((e) => e.get(eZ.GV)(b.w, 'waveResource')),
                            [eZ.yq]: (0, s.Gr)((e) => e.get(eZ.GV)(L.p, 'searchResource')),
                            [eZ.NN]: (0, s.Gr)((e) => e.get(eZ.GV)(A.v, 'searchResource')),
                            [eZ.qN]: (0, s.Gr)((e) => e.get(eZ.GV)(D.T, 'playlistResource')),
                            [eZ.ro]: (0, s.Gr)((e) => e.get(eZ.GV)(S.e, 'playlistsResource')),
                            [eZ.nM]: (0, s.Gr)((e) => e.get(eZ.GV)(O.o, 'pinResource')),
                            [eZ.Ut]: (0, s.Gr)((e) => e.get(eZ.GV)(E.$, 'metatagsResource')),
                            [eZ.K1]: (0, s.Gr)((e) => e.get(eZ.GV)(z.p, 'tagResource')),
                            [eZ.eu]: (0, s.Gr)((e) => e.get(eZ.GV)(x.D, 'feedResource')),
                            [eZ.SD]: (0, s.Gr)((e) => e.get(eZ.GV)(T.F, 'wizard3Resource')),
                            [eZ.aE]: (0, s.Gr)((e) => {
                                let t = e.get(eZ.GV),
                                    r = e.get(eZ.y$);
                                return e1({ resource: t(_.l, 'pinsResource'), resourceName: _.l.constructor.name, slam: r });
                            }),
                            [eZ.ki]: (0, s.Gr)((e) => e.get(eZ.GV)(M.I, 'musicHistoryResource')),
                            [eZ.c9]: (0, s.Gr)((e) => e.get(eZ.GV)(q.s, 'dynamicPagesResource')),
                            [eZ.en]: (0, s.Gr)((e) => e.get(eZ.GV)(B.B, 'chartResource')),
                            [eZ.jQ]: (0, s.Gr)((e) => e.get(eZ.GV)(Z._, 'clipsResource')),
                            [eZ.cZ]: (0, s.Gr)((e) => e.get(eZ.GV)(F.c, 'lyricViewsResource')),
                            [eZ.Zl]: (0, s.Gr)((e) => e.get(eZ.GV)(H.D, 'nonMusicResource')),
                            [eZ.CN]: (0, s.Gr)((e) => e.get(eZ.GV)(I.N, 'donationResource')),
                            [eZ.JM]: (0, s.Gr)((e) => e.get(eZ.GV)(N.c, 'streamsResource')),
                            [eZ.P1]: (0, s.Gr)((e) => e.get(eZ.GV)(Y.S, 'loaderResource')),
                            [eZ.re]: (0, s.Gr)((e) => {
                                let t = e.get(eZ.GV),
                                    r = e.get(eZ.A4)({ credentials: 'omit' });
                                return t($.s, 'prefixlessResource', { httpClient: r, oauth: null, prefixUrl: '' });
                            }),
                            [eZ.Lk]: (0, s.Gr)((e) => e.get(eZ.GV)(Q.g, 'filtersResource')),
                            [eZ.uM]: (0, s.Gr)((e) => {
                                var t;
                                let { acqOffers: r } = e.get(eZ.V4),
                                    { rumSettings: n } = (0, i.$5)(),
                                    { brand: s, service: a, environment: u, appVersion: l } = r,
                                    { platform: g, page: c } = n,
                                    d = e.get(eZ.QG),
                                    h = e.get(eZ.Xc).getLanguage(),
                                    p = e.get(eZ.A4),
                                    m = d.token || null,
                                    G = p({ credentials: 'omit' }),
                                    f = e.get(eZ.Zf),
                                    { request_id: v, puid: w } = null != (t = e.get(eZ.Zi).getStore()) ? t : {};
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
                                    requester: (0, e9.n)(G, f),
                                    puid: (null == w ? void 0 : w.toString()) || null,
                                    rumOptions: { platform: g, page: c, requestId: v },
                                });
                            }),
                            [eZ.$$]: (0, s.Gr)((e) => e.get(eZ.GV)(W.E, 'ugcResource', { device: null })),
                            [eZ.sv]: (0, s.Gr)((e) => e.get(eZ.GV)(X.L, 'collectionResource')),
                            [eZ.gd]: (0, s.Gr)((e) => e.get(eZ.GV)(K.z, 'adsResource')),
                            [eZ.EN]: (0, s.Gr)((e) => e.get(eZ.GV)(j._, 'afterTrackResource')),
                            [eZ.Ez]: (0, s.Gr)((e) => e.get(eZ.GV)(J.l, 'personalResource')),
                            [eZ.N1]: (0, s.Gr)((e) => {
                                let t = e.get(eZ.GV),
                                    r = e.get(eZ.y$);
                                return e1({ resource: t(ee.H, 'disclaimersResource'), resourceName: ee.H.constructor.name, slam: r });
                            }),
                            [eZ.u2]: (0, s.Gr)((e) => e.get(eZ.GV)(et.J, 'familyResource')),
                            [eZ.TD]: (0, s.Gr)((e) => e.get(eZ.GV)(er.L, 'childrenLandingResource')),
                            [eZ.wK]: (0, s.Gr)((e) => e.get(eZ.GV)(eo.u, 'landingBlocksResource')),
                            [eZ.dh]: (0, s.Gr)((e) => e.get(eZ.GV)(ei.q, 'promoResource')),
                            [eZ.LC]: (0, s.Gr)((e) => {
                                let t = e.get(eZ.CR),
                                    r = e.get(eZ.V4),
                                    o = t({ credentials: 'include' }),
                                    i = r.resources.musicExternalApi;
                                return (0, e$._)({ httpClient: o, musicExternalApi: i, publicConfig: r });
                            }),
                            [eZ.W5]: (0, s.Gr)((e) => {
                                let t = e.get(eZ.CR),
                                    r = e.get(eZ.V4),
                                    o = t({ credentials: 'include' });
                                return (0, eY.Z)({ httpClient: o, publicConfig: r });
                            }),
                            [eZ.PL]: (0, s.Gr)((e) => e.get(eZ.GV)(en.w, 'labelsResource')),
                            [eZ.DT]: (0, s.Gr)((e) => e.get(eZ.GV)(es.O, 'concertsResource')),
                            [eZ.dA]: (0, s.Gr)((e) => e.get(eZ.GV)(ea.Q, 'wordsResource')),
                            [eZ.$Y]: (0, s.Gr)((e) => e.get(eZ.GV)(eu.C, 'wheelResource')),
                            [eZ.VR]: (0, s.P9)((e) => () => {
                                let t = e.get(eZ.A4),
                                    r = e.get(eZ.V4),
                                    o = (0, eN.i)({ httpClientFactory: t, publicConfig: r });
                                return (0, ex.P)({ probe: (e) => o.ping({ signal: e }) });
                            }),
                            [eZ.zj]: (0, s.Gr)((e) => e.get(eZ.GV)(el.U, 'lumenResource')),
                            [eZ.vg]: (0, s.Gr)(() => (0, eG.a)()),
                        })
                        .register(
                            eZ.ff,
                            (0, s.Gr)((e) => {
                                let t = e.get(eZ.N1);
                                return (0, eH.Y)(t);
                            }),
                        )
                        .registerMany({
                            [eZ.mD]: (0, s.Gr)((e) => (0, eF.s)({ environment: ew, appVersion: (0, eM.B)(), rumResource: e.get(eZ.W5) })),
                            [eZ.UB]: (0, s.Gr)((e) => {
                                let t = e.get(eZ.vg);
                                return new d.BP(t);
                            }),
                            [eZ.Tq]: (0, s.Gr)((e) => {
                                var t;
                                let r = e.get(eZ.W5);
                                return (null == (t = window.Ya) ? void 0 : t.Rum) ? new d.GY((0, ev.y)(), r, window.Ya.Rum) : null;
                            }),
                        });
                return ej
                    .register(
                        eZ.by,
                        (0, s.Gr)(() => e2(ej, !1)),
                    )
                    .register(
                        eZ.s_,
                        (0, s.Gr)(() => e2(ej, !0)),
                    )
                    .register(
                        eZ.ni,
                        (0, s.Gr)((e) => {
                            let t = e.get(eZ.Zf);
                            return new l.SU({
                                skeletonFactory: new ef.F6({
                                    landingResource: e.get(eZ.V3),
                                    artistsResource: e.get(eZ.O9),
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
