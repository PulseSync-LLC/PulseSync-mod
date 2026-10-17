'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9138],
    {
        19138: (e, t, r) => {
            (r.r(t), r.d(t, { createDesktopContainer: () => e8 }));
            var o = r(1817),
                i = r(93588),
                n = r(73650),
                s = r(13486),
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
                R = r(68510),
                V = r(94638),
                P = r(91736),
                C = r(15545),
                U = r(96208),
                b = r(81102),
                L = r(74128),
                A = r(33031),
                D = r(58123),
                O = r(25678),
                S = r(3030),
                E = r(90496),
                z = r(2794),
                x = r(28596),
                T = r(77448),
                _ = r(32141),
                M = r(80389),
                q = r(2242),
                B = r(89646),
                Z = r(76597),
                H = r(59815),
                F = r(80188),
                I = r(80250),
                N = r(79250),
                $ = r(60070),
                Q = r(3374),
                X = r(59158),
                Y = r(36064),
                W = r(12482),
                K = r(9902),
                j = r(42132),
                J = r(83894),
                ee = r(65844),
                et = r(61279),
                er = r(38125),
                eo = r(25630),
                ei = r(15178),
                en = r(33314),
                es = r(79078),
                ea = r(58174),
                eu = r(74906),
                el = r(2952),
                eg = r(44342),
                ec = r(71062),
                ed = r(72233),
                eh = r(19616),
                ep = r(67311),
                em = r(78321),
                eG = r(2209),
                ef = r(59628),
                ev = r(58025),
                ew = r(95067),
                ek = r(87758),
                ey = r(53712),
                eR = r(57024),
                eV = r(87452);
            let eP = (e) => (void 0 === e ? 'missing' : e ? 'present' : 'empty');
            class eC extends eV.P {
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
                            passportLogin: eP(e),
                            tokenOwnerLogin: eP(r),
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
                    e.charAt(0) === ey.Z.main.href && (e = e.substring(1));
                    let t = new URLSearchParams({ redirectUri: e, language: this.language });
                    return ''.concat(origin, '/oauth?').concat(t.toString());
                }
                get oauthUrl() {
                    let {
                            oauthCredentials: { host: e, clientId: t },
                        } = this.config,
                        r = (0, p.r)(e, ek.r.RU, m.B),
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
                    let e = this.getPassportHostWithTld(ek.r.RU, m.B);
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
                    this.storage.set(ew.c.Oauth, e.token, { expires: Math.floor(e.expiresIn / 86400) });
                    let o = !!this.storage.get(ew.c.Oauth),
                        i = o ? 'stored' : 'readback-missing';
                    return ((0, eR.uV)({ stage: 'token-storage', state: 'match', write: 'attempted', readback: o ? 'present' : 'missing', ttl: t, result: i }), i);
                }
                get token() {
                    if (this.passportLogin) return this.storage.get(ew.c.Oauth) || void 0;
                }
                removeToken() {
                    this.storage.remove(ew.c.Oauth);
                }
                updateOauthState() {
                    let e = Math.round(1e11 * Math.random()).toString(16);
                    this.storage.set(ew.c.OauthState, e, { expires: 1 });
                }
                get oauthState() {
                    return this.storage.get(ew.c.OauthState) || '';
                }
                reportAuthorizationDecision(e, t) {
                    let r = JSON.stringify(e);
                    this.reportedAuthorizationDecisions.has(r) ||
                        (this.reportedAuthorizationDecisions.add(r), t && (0, eR.uV)({ stage: 'attempt-start', trigger: t }), (0, eR.uV)(e));
                }
                constructor(e, t, r) {
                    (super(e, t),
                        (0, ev._)(this, 'language', void 0),
                        (0, ev._)(this, 'dataIsLoaded', void 0),
                        (0, ev._)(this, 'tokenOwnerLogin', void 0),
                        (0, ev._)(this, 'reportedAuthorizationDecisions', void 0),
                        (this.language = r),
                        (this.dataIsLoaded = !1),
                        (this.reportedAuthorizationDecisions = new Set()),
                        this.oauthState || this.updateOauthState(),
                        this.check());
                }
            }
            class eU extends eC {
                get token() {
                    return this.storage.get(ew.c.Oauth) || void 0;
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
                    (super(e, t, r), (0, ev._)(this, 'passportLoginFromElectron', void 0), (0, ev._)(this, 'yadexUidFromElectron', void 0), this.loadDataFromElectron());
                }
            }
            var eb = r(75749),
                eL = r(41871),
                eA = r(62631),
                eD = r(94564);
            class eO {
                onChangeLanguage() {
                    window.location.reload();
                }
            }
            var eS = r(28869),
                eE = r(41),
                ez = r(767),
                ex = r(79645),
                eT = r(92231),
                e_ = r(38889),
                eM = r(67154),
                eq = r(36484),
                eB = r(35591),
                eZ = r(23285),
                eH = r(32817),
                eF = r(18370),
                eI = r(47742),
                eN = r(48068),
                e$ = r(27558);
            let eQ = (e) => {
                let { authorization: t, cacheController: r, httpClient: o, i18nStorage: i, prefixUrl: n, publicConfig: s } = e,
                    a = i.getLanguage(),
                    u = s.resources.musicExternalApi,
                    l = {
                        prefixUrl: n,
                        retryPolicyConfig: u.retryPolicyConfig,
                        timeouts: u.timeouts.accountResource,
                        params: { common: { oauth: t.token, client: (0, eN._)(), device: (0, e$.h)(), language: a } },
                    };
                return r ? new eh.wV(o, l, { cacheController: r }) : new eI.Q(o, l);
            };
            var eX = r(18420),
                eY = r(91162);
            function eW(e) {
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
                        params: { common: { oauth: t.token, client: (0, eN._)(), device: (0, e$.h)(), language: c } },
                    },
                    p = a.repositoryContainer.fileStorage,
                    m = a.repositoryContainer.tracksRepository,
                    G = a.repositoryContainer.usersTracksRepository;
                return p && m && G
                    ? new (l ? eh.mK : eh.d7)(g, h, {
                          fileStorage: p,
                          tracksRepository: m,
                          usersTracksRepository: G,
                          hooks: a.hooks,
                          variables: {
                              get uid() {
                                  return u.get(ew.c.YmUid);
                              },
                              secretKey: i,
                          },
                      })
                    : new (l ? eX.K : eY.v)(g, h);
            }
            let eK = (e) => {
                let { resource: t, resourceName: r, slam: o } = e,
                    i = o.cacheController;
                return i ? (0, eh._2)({ resource: t, cacheController: i, config: { common: { resourceName: r }, enabled: !0, priority: eh.OU.HIGH, ttl: 6048e5 } }) : t;
            };
            var ej = r(75637),
                eJ = r(59342),
                e0 = r(90208);
            let e4 = (e, t) => {
                let r = e.get(eq.oo),
                    o = e.get(eq.U2),
                    i = e.get(eq.Zf),
                    n = o.get(ew.c.YnisonDeviceId);
                n || ((n = (0, eJ.A)()), o.set(ew.c.YnisonDeviceId, n));
                let s = {
                        info: { app_name: 'Desktop', app_version: (0, e0.B)() || '', title: 'Music Desktop App', device_id: n, type: ej.bq.WEB_DESKTOP },
                        volumeGranularity: 20,
                        get defaultVolume() {
                            var a;
                            return null != (a = r.get(ew.c.YmPlayerVolume)) ? a : void 0;
                        },
                    },
                    u = e.get(eq.WA).getPassportUid(),
                    l = e.get(eq.QG),
                    g = e.get(eq.V4),
                    c = e.get(eq.UB),
                    d = e.get(eq.Tq),
                    h = [new ej.zT(c)];
                return (
                    d && h.push(new ej.qP(d)),
                    new ej.Jd({
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
                                return e.get(eq.WA).getPassportUid();
                            },
                            // for PulseSync: END resolve the local playback account without connecting to Ynison
                        },
                    })
                );
            };
            var e1 = r(18752);
            async function e8(e) {
                let { tld: t, env: ev, publicConfig: ek, customApiPrefixUrl: ey } = e,
                    eR = (0, eT.u)(),
                    eV = (0, i.u0)(ek, t, ey),
                    eP = (0, i.Ef)(ek, eR),
                    eC = await (0, eA.B)(ev),
                    eI = {},
                    eX = new s.Dt()
                        .registerMany({
                            [eq.SX]: (0, s.Gr)(() => ev),
                            [eq.V4]: (0, s.Gr)(() => ek),
                            [eq.xF]: (0, s.Gr)(() => null),
                            [eq.qt]: (0, s.Gr)(() => eV),
                            [eq.P0]: (0, s.Gr)(() => new n.q(eC)),
                            [eq.Zi]: (0, s.Gr)(() => new eD.Y(eI)),
                        })
                        .register(
                            eq.WA,
                            (0, s.Gr)((e) => {
                                let t = e.get(eq.Zi);
                                return new eM.V(t);
                            }),
                        )
                        .registerMany({
                            [eq.Zf]: (0, s.Gr)((e) => {
                                let t = e.get(eq.P0).get(eL.qV);
                                return new c.r({
                                    maxLogLevel: g.cm.DEBUG,
                                    secureFields: eg.x,
                                    disableLogToConsole: !t,
                                    additionalData: {
                                        get puid() {
                                            return e.get(eq.WA).getPassportUid();
                                        },
                                    },
                                });
                            }),
                            [eq.RG]: (0, s.Gr)(async (e) => {
                                let {
                                    mocks: { enabled: o, mocksProviderUrl: i, urlCapturePattern: n },
                                } = e.get(eq.V4);
                                if (!o) return () => Promise.resolve(null);
                                let { initMocks: s } = await Promise.all([r.e(6089), r.e(9662)]).then(r.bind(r, 39662)),
                                    a = e.get(eq.U2),
                                    u = e.get(eq.Zf),
                                    l = 'production' === e.get(eq.SX) ? '/rsc-cache-worker.js' : '',
                                    g = () => {
                                        var e;
                                        return null != (e = a.get(h.L, !1)) ? e : null;
                                    },
                                    c = n || ''.concat(eV, '/*');
                                return () =>
                                    s({
                                        getMocksConfiguration: g,
                                        log: (e, t) => u.debug('[Mocks] | desktop: '.concat(e), t),
                                        mocksProviderUrl: i,
                                        serviceWorkerUrl: l,
                                        urlCapturePattern: (0, p.r)(c, t, m.B),
                                    }).catch((e) => u.debug('[Mocks] | desktop: initialization failed. '.concat(e)));
                            }),
                            [eq.TK]: (0, s.Gr)(
                                (e) =>
                                    new ((0, eE.b)(c.r))({
                                        maxLogLevel: g.cm.DEBUG,
                                        secureFields: eg.x,
                                        disableLogToConsole: 'development' !== e.get(eq.SX),
                                        additionalData: {
                                            get puid() {
                                                return e.get(eq.WA).getPassportUid();
                                            },
                                        },
                                    }),
                            ),
                            [eq.oo]: (0, s.Gr)(() => new ep.si()),
                            [eq.DP]: (0, s.Gr)(() => new ep.MJ('client desktop', 'cookie')),
                            [eq.U2]: (0, s.Gr)(() => new ep.si()),
                            [eq.vH]: (0, s.Gr)(() => new ep.fW()),
                            [eq.Xc]: (0, s.Gr)((e) => {
                                let t = e.get(eq.oo),
                                    r = e.get(eq.Zf);
                                return new eS.E({
                                    isBuildTypeDesktop: !0,
                                    logger: r,
                                    changeLanguageHandler: new eO(),
                                    storage: {
                                        get: () => t.get(ew.c.SavedUserLanguage),
                                        set(e) {
                                            t.set(ew.c.SavedUserLanguage, e);
                                        },
                                    },
                                });
                            }),
                        })
                        .registerMany({
                            [eq.y$]: (0, s.Gr)((e) => {
                                let t = e.get(eq.Zf),
                                    r = e.get(eq.oo),
                                    o = new eh.Mz({
                                        config: { useEntitiesStorage: !0, useFileStorage: !0, useResponseCacheStorage: !0 },
                                        plugins: [new eh.wK({ logger: t })],
                                    });
                                return (
                                    o.createCacheController({
                                        repositoryContainer: o.repositoryContainer,
                                        variables: {
                                            get uid() {
                                                return r.get(ew.c.YmUid);
                                            },
                                            get isOffline() {
                                                return !!o.network.status.isOffline;
                                            },
                                        },
                                    }),
                                    o
                                );
                            }),
                            [eq.Hm]: (0, s.P9)(
                                () =>
                                    function () {
                                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                        return new u.Q(e);
                                    },
                            ),
                            [eq.gu]: (0, s.P9)(
                                () =>
                                    function () {
                                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                        return new a.S(e);
                                    },
                            ),
                        })
                        .registerMany({
                            [eq.QG]: (0, s.Gr)((e) => new eU(e.get(eq.oo), e.get(eq.V4), e.get(eq.Xc).getLanguage())),
                            [eq.OP]: (0, s.P9)(
                                (e) =>
                                    function () {
                                        var t, r, o, i, n;
                                        let s = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                            a = arguments.length > 1 ? arguments[1] : void 0,
                                            u = e.get(eq.Zf),
                                            l = e.get(eq.U2),
                                            g = new ec.N(u),
                                            {
                                                resources: { musicExternalApi: c },
                                            } = e.get(eq.V4);
                                        ((s.timeout = c.defaultTimeout),
                                            (s.hooks = {
                                                afterResponse: [...((null == s || null == (t = s.hooks) ? void 0 : t.afterResponse) || [])],
                                                beforeError: [g.beforeErrorHook, ...((null == s || null == (r = s.hooks) ? void 0 : r.beforeError) || [])],
                                                beforeRequest: [el.xW, ...((null == s || null == (o = s.hooks) ? void 0 : o.beforeRequest) || [])],
                                                afterTimeout: [g.beforeErrorHook, ...((null == s || null == (i = s.hooks) ? void 0 : i.afterTimeout) || [])],
                                                beforeRetry: [el.ie, g.beforeRetryHook, ...((null == s || null == (n = s.hooks) ? void 0 : n.beforeRetry) || [])],
                                            }));
                                        let d = a(s);
                                        return (0, eh.sY)(d, {
                                            get isOffline() {
                                                var h;
                                                return null != (h = (0, e_.Q)(e.get(eq.y$))) ? h : (0, ex.g)(l);
                                            },
                                        });
                                    },
                            ),
                        })
                        .registerMany({
                            [eq.A4]: (0, s.P9)(
                                (e) =>
                                    function () {
                                        var t;
                                        let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                            o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e.get(eq.OP),
                                            i = e.get(eq.QG),
                                            n = e.get(eq.Hm),
                                            s = e.get(eq.Xc),
                                            a = e.get(eq.V4),
                                            u = eQ({ authorization: i, cacheController: null, httpClient: o({}, n), i18nStorage: s, prefixUrl: eV, publicConfig: a });
                                        return (
                                            (r.hooks = { beforeError: [(0, eb.o)(i, u), ...((null == r || null == (t = r.hooks) ? void 0 : t.beforeError) || [])] }),
                                            o(r, n)
                                        );
                                    },
                            ),
                        })
                        .register(
                            eq.CR,
                            (0, s.P9)(
                                (e) =>
                                    function () {
                                        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                        return e.get(eq.A4)(t, e.get(eq.gu));
                                    },
                            ),
                        )
                        .register(
                            eq.GV,
                            (0, s.P9)((e) => {
                                let t = e.get(eq.QG),
                                    r = e.get(eq.qt),
                                    o = e.get(eq.Xc);
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
                                                        client: (0, eN._)(),
                                                        ...((null == a ? void 0 : a.device) === null
                                                            ? {}
                                                            : { device: null != (g = null == a ? void 0 : a.device) ? g : (0, e$.h)() }),
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
                            [eq.$I]: (0, s.Gr)((e) => {
                                let t = e.get(eq.QG),
                                    r = e.get(eq.A4),
                                    o = e.get(eq.Xc),
                                    i = e.get(eq.qt),
                                    n = e.get(eq.V4);
                                return eQ({
                                    authorization: t,
                                    cacheController: e.get(eq.y$).cacheController,
                                    httpClient: r(),
                                    i18nStorage: o,
                                    prefixUrl: i,
                                    publicConfig: n,
                                });
                            }),
                            [eq._1]: (0, s.Gr)((e) => e.get(eq.GV)(G.d, 'usersResource')),
                            [eq.V3]: (0, s.Gr)((e) => {
                                let t = e.get(eq.QG),
                                    r = e.get(eq.A4),
                                    o = e.get(eq.Xc),
                                    i = e.get(eq.qt);
                                return ((e) => {
                                    let { authorization: t, httpClientFactory: r, i18nStorage: o, prefixUrl: i, publicConfig: n, slam: s } = e,
                                        a = r(),
                                        u = o.getLanguage(),
                                        l = n.resources.musicExternalApi,
                                        g = {
                                            prefixUrl: i,
                                            retryPolicyConfig: l.retryPolicyConfig,
                                            timeouts: l.timeouts.landingResource,
                                            params: { common: { oauth: t.token, client: (0, eN._)(), device: (0, e$.h)(), language: u } },
                                        };
                                    return new eh.o7(a, g, {
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
                                })({ authorization: t, httpClientFactory: r, i18nStorage: o, prefixUrl: i, publicConfig: e.get(eq.V4), slam: e.get(eq.y$) });
                            }),
                            [eq.Lb]: (0, s.Gr)((e) => e.get(eq.GV)(f.H, 'landing3Resource')),
                            [eq.tz]: (0, s.Gr)((e) => e.get(eq.GV)(v.B, 'albumsResource')),
                            [eq.$8]: (0, s.Gr)((e) => e.get(eq.GV)(w.w, 'libraryResource')),
                            [eq.Oo]: (0, s.Gr)((e) => e.get(eq.GV)(k.L, 'tracksResource')),
                            [eq.$5]: (0, s.Gr)((e) => e.get(eq.GV)(y._, 'availabilityResource')),
                            [eq.qT]: (0, s.Gr)((e) => {
                                let t = e.get(eq.QG),
                                    r = e.get(eq.A4),
                                    o = e.get(eq.Xc),
                                    i = e.get(eq.qt),
                                    n = e.get(eq.V4);
                                return eW({
                                    authorization: t,
                                    httpClientFactory: r,
                                    i18nStorage: o,
                                    platformSecret: eP,
                                    prefixUrl: i,
                                    publicConfig: n,
                                    slam: e.get(eq.y$),
                                    storage: e.get(eq.oo),
                                });
                            }),
                            [eq.DV]: (0, s.Gr)((e) =>
                                eW({
                                    authorization: e.get(eq.QG),
                                    httpClientFactory: e.get(eq.A4),
                                    i18nStorage: e.get(eq.Xc),
                                    platformSecret: eP,
                                    prefixUrl: e.get(eq.qt),
                                    publicConfig: e.get(eq.V4),
                                    slam: e.get(eq.y$),
                                    storage: e.get(eq.oo),
                                    useResourcesFileInfo: !0,
                                }),
                            ),
                            [eq.X4]: (0, s.Gr)((e) => e.get(eq.GV)(R.a, 'topResource')),
                            [eq.O9]: (0, s.Gr)((e) => e.get(eq.GV)(V.b, 'artistsResource')),
                            [eq.E]: (0, s.Gr)((e) => e.get(eq.GV)(P.V, 'slidesResource')),
                            [eq.wH]: (0, s.Gr)((e) => e.get(eq.GV)(C.c, 'redAlertResource')),
                            [eq.ok]: (0, s.Gr)((e) => e.get(eq.GV)(U.Z, 'rotorResource')),
                            [eq.X8]: (0, s.Gr)((e) => e.get(eq.GV)(b.w, 'waveResource')),
                            [eq.yq]: (0, s.Gr)((e) => e.get(eq.GV)(L.p, 'searchResource')),
                            [eq.NN]: (0, s.Gr)((e) => e.get(eq.GV)(A.v, 'searchResource')),
                            [eq.qN]: (0, s.Gr)((e) => e.get(eq.GV)(D.T, 'playlistResource')),
                            [eq.ro]: (0, s.Gr)((e) => e.get(eq.GV)(O.e, 'playlistsResource')),
                            [eq.nM]: (0, s.Gr)((e) => e.get(eq.GV)(S.o, 'pinResource')),
                            [eq.Ut]: (0, s.Gr)((e) => e.get(eq.GV)(E.$, 'metatagsResource')),
                            [eq.K1]: (0, s.Gr)((e) => e.get(eq.GV)(z.p, 'tagResource')),
                            [eq.eu]: (0, s.Gr)((e) => e.get(eq.GV)(x.D, 'feedResource')),
                            [eq.aE]: (0, s.Gr)((e) => {
                                let t = e.get(eq.GV),
                                    r = e.get(eq.y$);
                                return eK({ resource: t(T.l, 'pinsResource'), resourceName: T.l.constructor.name, slam: r });
                            }),
                            [eq.ki]: (0, s.Gr)((e) => e.get(eq.GV)(_.I, 'musicHistoryResource')),
                            [eq.c9]: (0, s.Gr)((e) => e.get(eq.GV)(M.s, 'dynamicPagesResource')),
                            [eq.en]: (0, s.Gr)((e) => e.get(eq.GV)(q.B, 'chartResource')),
                            [eq.jQ]: (0, s.Gr)((e) => e.get(eq.GV)(B._, 'clipsResource')),
                            [eq.cZ]: (0, s.Gr)((e) => e.get(eq.GV)(Z.c, 'lyricViewsResource')),
                            [eq.Zl]: (0, s.Gr)((e) => e.get(eq.GV)(H.D, 'nonMusicResource')),
                            [eq.CN]: (0, s.Gr)((e) => e.get(eq.GV)(F.N, 'donationResource')),
                            [eq.JM]: (0, s.Gr)((e) => e.get(eq.GV)(I.c, 'streamsResource')),
                            [eq.P1]: (0, s.Gr)((e) => e.get(eq.GV)(N.S, 'loaderResource')),
                            [eq.re]: (0, s.Gr)((e) => {
                                let t = e.get(eq.GV),
                                    r = e.get(eq.A4)({ credentials: 'omit' });
                                return t($.s, 'prefixlessResource', { httpClient: r, oauth: null, prefixUrl: '' });
                            }),
                            [eq.Lk]: (0, s.Gr)((e) => e.get(eq.GV)(Q.g, 'filtersResource')),
                            [eq.uM]: (0, s.Gr)((e) => {
                                var t;
                                let { acqOffers: r } = e.get(eq.V4),
                                    { rumSettings: n } = (0, i.$5)(),
                                    { brand: s, service: a, environment: u, appVersion: l } = r,
                                    { platform: g, page: c } = n,
                                    d = e.get(eq.QG),
                                    h = e.get(eq.Xc).getLanguage(),
                                    p = e.get(eq.A4),
                                    m = d.token || null,
                                    G = p({ credentials: 'omit' }),
                                    f = e.get(eq.Zf),
                                    { request_id: v, puid: w } = null != (t = e.get(eq.Zi).getStore()) ? t : {};
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
                                    requester: (0, e1.n)(G, f),
                                    puid: (null == w ? void 0 : w.toString()) || null,
                                    rumOptions: { platform: g, page: c, requestId: v },
                                });
                            }),
                            [eq.$$]: (0, s.Gr)((e) => e.get(eq.GV)(X.E, 'ugcResource', { device: null })),
                            [eq.sv]: (0, s.Gr)((e) => e.get(eq.GV)(Y.L, 'collectionResource')),
                            [eq.gd]: (0, s.Gr)((e) => e.get(eq.GV)(W.z, 'adsResource')),
                            [eq.EN]: (0, s.Gr)((e) => e.get(eq.GV)(K._, 'afterTrackResource')),
                            [eq.Ez]: (0, s.Gr)((e) => e.get(eq.GV)(j.l, 'personalResource')),
                            [eq.N1]: (0, s.Gr)((e) => {
                                let t = e.get(eq.GV),
                                    r = e.get(eq.y$);
                                return eK({ resource: t(J.H, 'disclaimersResource'), resourceName: J.H.constructor.name, slam: r });
                            }),
                            [eq.u2]: (0, s.Gr)((e) => e.get(eq.GV)(ee.J, 'familyResource')),
                            [eq.TD]: (0, s.Gr)((e) => e.get(eq.GV)(et.L, 'childrenLandingResource')),
                            [eq.wK]: (0, s.Gr)((e) => e.get(eq.GV)(er.u, 'landingBlocksResource')),
                            [eq.dh]: (0, s.Gr)((e) => e.get(eq.GV)(eo.q, 'promoResource')),
                            [eq.LC]: (0, s.Gr)((e) => {
                                let t = e.get(eq.CR),
                                    r = e.get(eq.V4),
                                    o = t({ credentials: 'include' }),
                                    i = r.resources.musicExternalApi;
                                return (0, eF._)({ httpClient: o, musicExternalApi: i, publicConfig: r });
                            }),
                            [eq.W5]: (0, s.Gr)((e) => {
                                let t = e.get(eq.CR),
                                    r = e.get(eq.V4),
                                    o = t({ credentials: 'include' });
                                return (0, eH.Z)({ httpClient: o, publicConfig: r });
                            }),
                            [eq.PL]: (0, s.Gr)((e) => e.get(eq.GV)(ei.w, 'labelsResource')),
                            [eq.DT]: (0, s.Gr)((e) => e.get(eq.GV)(en.O, 'concertsResource')),
                            [eq.dA]: (0, s.Gr)((e) => e.get(eq.GV)(es.Q, 'wordsResource')),
                            [eq.$Y]: (0, s.Gr)((e) => e.get(eq.GV)(ea.C, 'wheelResource')),
                            [eq.VR]: (0, s.P9)((e) => () => {
                                let t = e.get(eq.A4),
                                    r = e.get(eq.V4),
                                    o = (0, eZ.i)({ httpClientFactory: t, publicConfig: r });
                                return (0, ez.P)({ probe: (e) => o.ping({ signal: e }) });
                            }),
                            [eq.zj]: (0, s.Gr)((e) => e.get(eq.GV)(eu.U, 'lumenResource')),
                            [eq.vg]: (0, s.Gr)(() => (0, em.a)()),
                        })
                        .register(
                            eq.ff,
                            (0, s.Gr)((e) => {
                                let t = e.get(eq.N1);
                                return (0, eB.Y)(t);
                            }),
                        )
                        .registerMany({
                            [eq.UB]: (0, s.Gr)((e) => {
                                let t = e.get(eq.vg);
                                return new d.B(t);
                            }),
                            [eq.Tq]: (0, s.Gr)((e) => {
                                var t;
                                let r = e.get(eq.W5);
                                return (null == (t = window.Ya) ? void 0 : t.Rum) ? new d.G((0, ef.y)(), r, window.Ya.Rum) : null;
                            }),
                        });
                return eX
                    .register(
                        eq.by,
                        (0, s.Gr)(() => e4(eX, !1)),
                    )
                    .register(
                        eq.s_,
                        (0, s.Gr)(() => e4(eX, !0)),
                    )
                    .register(
                        eq.ni,
                        (0, s.Gr)((e) => {
                            let t = e.get(eq.Zf);
                            return new l.SU({
                                skeletonFactory: new eG.F6({
                                    landingResource: e.get(eq.V3),
                                    artistsResource: e.get(eq.O9),
                                    tabIdQueryParamController: new eG.ET(),
                                    config: { nodesConfig: { tabConfig: { addLoadAndShowBlocks: !1 } } },
                                }),
                                visibilityControllerParams: {
                                    visibilityConfig: { type: 'listVisibility', virtualizedMetadataLoader: new ed.yq({ resizeObserverAdapter: new ed.u2() }) },
                                },
                                plugins: [new eG.X({ logger: t })],
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
