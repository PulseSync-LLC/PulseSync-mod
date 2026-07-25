'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5121],
    {
        11541: (e, t, r) => {
            r.d(t, { g: () => n });
            var o = r(19379);
            let n = (e) => {
                let t = e.get(o.c.OfflineMode);
                return 'boolean' == typeof t && t;
            };
        },
        15808: (e, t, r) => {
            r.d(t, { E: () => o });
            var o = (function (e) {
                return (
                    (e.WINDOW_MINIMIZE = 'WINDOW_MINIMIZE'),
                    (e.WINDOW_MAXIMIZE = 'WINDOW_MAXIMIZE'),
                    (e.WINDOW_CLOSE = 'WINDOW_CLOSE'),
                    (e.INSTALL_UPDATE = 'INSTALL_UPDATE'),
                    (e.UPDATE_AVAILABLE = 'UPDATE_AVAILABLE'),
                    (e.APPLICATION_READY = 'APPLICATION_READY'),
                    (e.GET_PASSPORT_LOGIN = 'GET_PASSPORT_LOGIN'),
                    (e.GET_YANDEX_UID = 'GET_YANDEX_UID'),
                    (e.REFRESH_APPLICATION_DATA = 'REFRESH_APPLICATION_DATA'),
                    (e.PLAYER_STATE = 'PLAYER_STATE'),
                    (e.PLAYER_ACTION = 'PLAYER_ACTION'),
                    (e.OPEN_DEEPLINK = 'OPEN_DEEPLINK'),
                    (e.FIRST_LAUNCH = 'FIRST_LAUNCH'),
                    (e.APPLICATION_THEME = 'APPLICATION_THEME'),
                    (e.PROBABILITY_BUCKET = 'PROBABILITY_BUCKET'),
                    (e.LOAD_RELEASE_NOTES = 'LOAD_RELEASE_NOTES'),
                    (e.REFRESH_TRACKS_AVAILABILITY = 'REFRESH_TRACKS_AVAILABILITY'),
                    (e.REFRESH_REPOSITORY_META = 'REFRESH_REPOSITORY_META'),
                    (e.TRACKS_AVAILABILITY_UPDATED = 'TRACKS_AVAILABILITY_UPDATED'),
                    (e.REPOSITORY_META_UPDATED = 'REPOSITORY_META_UPDATED'),
                    (e.SAVE_FILE_TO_LOCAL_DISK = 'SAVE_FILE_TO_LOCAL_DISK'),
                    (e.TOGGLE_MINIPLAYER = 'TOGGLE_MINIPLAYER'),
                    (e.PULSESYNC_API = 'PULSESYNC_API'),
                    (e.GET_CURRENT_TRACK = 'GET_CURRENT_TRACK'),
                    (e.DOWNLOAD_CURRENT_TRACK = 'DOWNLOAD_CURRENT_TRACK'),
                    (e.DOWNLOAD_TRACK = 'DOWNLOAD_TRACK'),
                    (e.DOWNLOAD_TRACKS = 'DOWNLOAD_TRACKS'),
                    (e.DOWNLOAD_INFO = 'DOWNLOAD_INFO'),
                    (e.GPU_STALL = 'GPU_STALL'),
                    (e.APP_STALL = 'APP_STALL'),
                    (e.APP_STALL_CANCEL_RESTART = 'APP_STALL_CANCEL_RESTART'),
                    (e.MOD_UPDATE_AVAILABLE = 'MOD_UPDATE_AVAILABLE'),
                    (e.DOWNLOAD_MOD_UPDATE = 'DOWNLOAD_MOD_UPDATE'),
                    (e.INSTALL_MOD_UPDATE = 'INSTALL_MOD_UPDATE'),
                    (e.PROGRESS_BAR_CHANGE = 'PROGRESS_BAR_CHANGE'),
                    (e.APPLICATION_RESTART = 'APPLICATION_RESTART'),
                    (e.YNISON_STATE = 'YNISON_STATE'),
                    (e.BASIC_TOAST_CREATE = 'BASIC_TOAST_CREATE'),
                    (e.BASIC_TOAST_DISMISS = 'BASIC_TOAST_DISMISS'),
                    e
                );
            })({});
        },
        26518: (e, t, r) => {
            r.d(t, { V: () => o });
            let o = () => {
                if (void 0 === window.DEVICE_INFO) return;
                let e = Object.entries(window.DEVICE_INFO);
                if (0 !== e.length)
                    return e
                        .map((e) => {
                            let [t, r] = e;
                            return ''.concat(t, '=').concat(r);
                        })
                        .join('; ');
            };
        },
        38126: (e, t, r) => {
            var o;
            r.d(t, { r: () => o }),
                (function (e) {
                    (e.RU = 'ru'), (e.COM = 'com'), (e.KZ = 'kz'), (e.BY = 'by'), (e.UZ = 'uz');
                })(o || (o = {}));
        },
        47502: (e, t, r) => {
            r.d(t, { createDesktopContainer: () => eq });
            var o = r(32732),
                n = r(46966),
                a = r(27576),
                i = r(80451),
                s = r(73202),
                g = r(7333),
                l = r(26252),
                c = r(5924),
                u = r(19731),
                m = r(4628),
                d = r(47755),
                p = r(31958),
                h = r(52231),
                A = r(34097),
                w = r(97290),
                E = r(35268),
                L = r(15912),
                _ = r(42750),
                G = r(38979),
                T = r(57466),
                f = r(36090),
                v = r(31038),
                x = r(46510),
                U = r(50808),
                k = r(70233),
                R = r(37558),
                P = r(83310),
                I = r(8368),
                H = r(74503),
                B = r(41816),
                O = r(67982),
                S = r(66838),
                V = r(16128),
                C = r(99146),
                y = r(78484),
                X = r(51432),
                D = r(82669),
                Q = r(58693),
                N = r(40482),
                b = r(10894),
                M = r(50581),
                Y = r(71943),
                F = r(24956),
                W = r(51770),
                Z = r(12690),
                K = r(90662),
                z = r(90926),
                q = r(85750),
                $ = r(72864),
                j = r(84706),
                J = r(68846),
                ee = r(67700),
                et = r(30742),
                er = r(83092),
                eo = r(90591),
                en = r(59757),
                ea = r(4990),
                ei = r(33534),
                es = r(64642),
                eg = r(65866),
                el = r(96002),
                ec = r(76198),
                eu = r(37694),
                em = r(14031),
                ed = r(54874),
                ep = r(41670),
                eh = r(44547),
                eA = r(54280),
                ew = r(19964),
                eE = r(72288),
                eL = r(25500),
                e_ = r(32629),
                eG = r(91945),
                eT = r(15808),
                ef = r(19379),
                ev = r(38126),
                ex = r(20472),
                eU = r(19053),
                ek = r(42068);
            class eR extends ek.P {
                check() {
                    if (this.dataIsLoaded) {
                        if (!this.passportLogin && this.token) {
                            this.removeToken(), this.reloadPage();
                            return;
                        }
                        if (!this.token && this.passportLogin && !this.isOAuthPage) return void this.redirectToAuthorizationUrl();
                        if (
                            'string' == typeof this.passportLogin &&
                            'string' == typeof this.tokenOwnerLogin &&
                            this.passportLogin &&
                            this.tokenOwnerLogin &&
                            this.passportLogin !== this.tokenOwnerLogin
                        )
                            return void this.redirectToOAuthUrl();
                    }
                }
                get isOAuthPage() {
                    return window.location.pathname.endsWith('/oauth');
                }
                getRedirectUri() {
                    let e = ''.concat(this.pathname).concat(this.searchParams ? '?'.concat(this.searchParams) : '');
                    e.charAt(0) === ex.Z.main.href && (e = e.substring(1));
                    let t = new URLSearchParams({ redirectUri: e, language: this.language });
                    return ''.concat(origin, '/oauth?').concat(t.toString());
                }
                get oauthUrl() {
                    let {
                            oauthCredentials: { host: e, clientId: t },
                            passportCredentials: { origin: r },
                        } = this.config,
                        o = (0, i.getTldHost)(e, ev.r.RU, eU.B),
                        n = new URL(''.concat(o, '/authorize')),
                        a = this.getRedirectUri();
                    return (
                        n.searchParams.append('response_type', 'token'),
                        n.searchParams.append('display', 'popup'),
                        n.searchParams.append('scope', 'music:content'),
                        n.searchParams.append('scope', 'music:read'),
                        n.searchParams.append('scope', 'music:write'),
                        n.searchParams.append('client_id', t),
                        n.searchParams.append('redirect_uri', a),
                        n.searchParams.append('state', this.oauthState),
                        n.searchParams.append('origin', r),
                        n.searchParams.append('language', this.language),
                        n.toString()
                    );
                }
                get authorizationUrl() {
                    let {
                            passportCredentials: { origin: e },
                        } = this.config,
                        t = this.getPassportHostWithTld(ev.r.RU, eU.B);
                    if (!t) return;
                    let r = new URL(''.concat(t, '/auth'));
                    return (
                        r.searchParams.append('noreturn', '1'),
                        r.searchParams.append('origin', e),
                        r.searchParams.append('language', this.language),
                        r.searchParams.append('retpath', this.oauthUrl),
                        r.toString()
                    );
                }
                getAuthorizationUrlWithParams(e) {
                    let t = this.getPassportHostWithTld(this.tld, eU.B);
                    if (t) return ''.concat(t, '/auth?').concat(e.toString());
                }
                get childPageUrl() {
                    let e = this.getPassportHostWithTld(this.tld, eU.B);
                    if (!e) return;
                    let {
                            passportCredentials: { origin: t },
                        } = this.config,
                        r = new URLSearchParams({ origin: t, retpath: this.oauthUrl, language: this.language });
                    return ''.concat(e, '/auth/child/restrict?').concat(r.toString());
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
                    e.state === this.oauthState && this.storage.set(ef.c.Oauth, e.token, { expires: Math.floor(e.expiresIn / 86400) });
                }
                get token() {
                    if (this.passportLogin) return this.storage.get(ef.c.Oauth) || void 0;
                }
                removeToken() {
                    this.storage.remove(ef.c.Oauth);
                }
                updateOauthState() {
                    let e = Math.round(1e11 * Math.random()).toString(16);
                    this.storage.set(ef.c.OauthState, e, { expires: 1 });
                }
                get oauthState() {
                    return this.storage.get(ef.c.OauthState) || '';
                }
                constructor(e, t, r) {
                    super(e, t),
                        (0, eG._)(this, 'language', void 0),
                        (0, eG._)(this, 'dataIsLoaded', void 0),
                        (0, eG._)(this, 'tokenOwnerLogin', void 0),
                        (this.language = r),
                        (this.dataIsLoaded = !1),
                        this.oauthState || this.updateOauthState(),
                        this.check();
                }
            }
            class eP extends eR {
                get token() {
                    return this.storage.get(ef.c.Oauth) || void 0;
                }
                loadDataFromElectron() {
                    Promise.allSettled([this.loadPassportLogin(), this.loadYandexUid()]).then(() => {
                        this.setDataIsLoaded(), this.check();
                    });
                }
                async loadPassportLogin() {
                    if (window.desktopEvents) {
                        var e;
                        return null == (e = window.desktopEvents)
                            ? void 0
                            : e.invoke(eT.E.GET_PASSPORT_LOGIN).then((e) => {
                                  this.passportLoginFromElectron = e;
                              });
                    }
                    return Promise.resolve(void 0);
                }
                async loadYandexUid() {
                    if (window.desktopEvents) {
                        var e;
                        return null == (e = window.desktopEvents)
                            ? void 0
                            : e.invoke(eT.E.GET_YANDEX_UID).then((e) => {
                                  this.yadexUidFromElectron = e;
                              });
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
                    super(e, t, r), (0, eG._)(this, 'passportLoginFromElectron', void 0), (0, eG._)(this, 'yadexUidFromElectron', void 0), this.loadDataFromElectron();
                }
            }
            var eI = r(51053),
                eH = r(12583),
                eB = r(75887),
                eO = r(61933),
                eS = r(80950),
                eV = r(95564);
            class eC {
                onChangeLanguage() {
                    window.location.reload();
                }
            }
            var ey = r(73422),
                eX = r(48193),
                eD = r(70253),
                eQ = r(92023),
                eN = r(11541),
                eb = r(39472),
                eM = r(26518),
                eY = r(10410),
                eF = r(70204),
                eW = r(7736),
                eZ = r(61048),
                eK = r(9340),
                ez = r(51486);
            async function eq(e) {
                let { tld: t, env: eG } = e,
                    eT = (0, ez.J)(await (0, eO.z)(eG)),
                    ev = await (0, eB.B)(eG),
                    ex = {};
                return new g.Dt()
                    .registerMany({
                        [eF.SX]: (0, g.Gr)(() => eG),
                        [eF.tw]: (0, g.Gr)(() => eT),
                        [eF.P0]: (0, g.Gr)(() => new s.q(ev)),
                        [eF.Zi]: (0, g.Gr)(() => new eV.Y(ex)),
                    })
                    .register(
                        eF.WA,
                        (0, g.Gr)((e) => {
                            let t = e.get(eF.Zi);
                            return new eY.V(t);
                        }),
                    )
                    .registerMany({
                        [eF.Zf]: (0, g.Gr)((e) => {
                            let t = e.get(eF.P0).get(eH.qV);
                            return new p.r({
                                maxLogLevel: d.cm.DEBUG,
                                secureFields: eD.x,
                                disableLogToConsole: !t,
                                additionalData: {
                                    get puid() {
                                        return e.get(eF.WA).getPassportUid();
                                    },
                                },
                            });
                        }),
                        [eF.RG]: (0, g.Gr)(async (e) => {
                            let {
                                mocks: { enabled: o, mocksProviderUrl: n, urlCapturePattern: a },
                            } = e.get(eF.tw);
                            if (!o) return () => Promise.resolve(null);
                            let { initMocks: s } = await Promise.all([r.e(8387), r.e(9829)]).then(r.bind(r, 69829)),
                                g = e.get(eF.U2),
                                l = e.get(eF.Zf),
                                c = 'production' === e.get(eF.SX) ? '/rsc-cache-worker.js' : '',
                                u = () => {
                                    var e;
                                    return null != (e = g.get(ef.c.MocksConfiguration, !1)) ? e : null;
                                };
                            return () =>
                                s({
                                    getMocksConfiguration: u,
                                    log: (e, t) => l.debug('[Mocks] | desktop: '.concat(e), t),
                                    mocksProviderUrl: n,
                                    serviceWorkerUrl: c,
                                    urlCapturePattern: (0, i.getTldHost)(a, t, eU.B),
                                }).catch((e) => l.debug('[Mocks] | desktop: initialization failed. '.concat(e)));
                        }),
                        [eF.TK]: (0, g.Gr)(
                            (e) =>
                                new ((0, eX.b)(p.r))({
                                    maxLogLevel: d.cm.DEBUG,
                                    secureFields: eD.x,
                                    disableLogToConsole: 'development' !== e.get(eF.SX),
                                    additionalData: {
                                        get puid() {
                                            return e.get(eF.WA).getPassportUid();
                                        },
                                    },
                                }),
                        ),
                        [eF.oo]: (0, g.Gr)(() => new eA.si()),
                        [eF.DP]: (0, g.Gr)(() => new eA.MJ('client '.concat('desktop'), 'cookie')),
                        [eF.U2]: (0, g.Gr)(() => new eA.si()),
                        [eF.vH]: (0, g.Gr)(() => new eA.fW()),
                        [eF.Xc]: (0, g.Gr)((e) => {
                            let t = e.get(eF.oo),
                                r = e.get(eF.Zf);
                            return new ey.E({
                                isBuildTypeDesktop: !0,
                                logger: r,
                                changeLanguageHandler: new eC(),
                                storage: {
                                    get: () => t.get(ef.c.SavedUserLanguage),
                                    set(e) {
                                        t.set(ef.c.SavedUserLanguage, e);
                                    },
                                },
                            });
                        }),
                    })
                    .registerMany({
                        [eF.y$]: (0, g.Gr)((e) => {
                            let t = e.get(eF.Zf),
                                r = e.get(eF.oo),
                                o = new eh.Mz({
                                    config: { useEntitiesStorage: !0, useFileStorage: !0, useResponseCacheStorage: !0 },
                                    plugins: [new eh.wK({ logger: t })],
                                });
                            return (
                                o.createCacheController({
                                    repositoryContainer: o.repositoryContainer,
                                    variables: {
                                        get uid() {
                                            return r.get(ef.c.YmUid);
                                        },
                                        get isOffline() {
                                            return !!o.network.status.isOffline;
                                        },
                                    },
                                }),
                                o
                            );
                        }),
                        [eF.Hm]: (0, g.P9)(
                            () =>
                                function () {
                                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                    return new u.Q(e);
                                },
                        ),
                        [eF.gu]: (0, g.P9)(
                            () =>
                                function () {
                                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                    return new c.S(e);
                                },
                        ),
                    })
                    .registerMany({
                        [eF.QG]: (0, g.Gr)((e) => new eP(e.get(eF.oo), e.get(eF.tw), e.get(eF.Xc).getLanguage())),
                        [eF.OP]: (0, g.P9)(
                            (e) =>
                                function () {
                                    var t, r, o, n, a;
                                    let i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                        s = arguments.length > 1 ? arguments[1] : void 0,
                                        g = e.get(eF.Zf),
                                        l = e.get(eF.U2),
                                        c = new eD.N(g),
                                        {
                                            resources: { musicExternalApi: u },
                                        } = e.get(eF.tw);
                                    (i.timeout = u.defaultTimeout),
                                        (i.hooks = {
                                            afterResponse: [...((null == i || null == (t = i.hooks) ? void 0 : t.afterResponse) || [])],
                                            beforeError: [c.beforeErrorHook, ...((null == i || null == (r = i.hooks) ? void 0 : r.beforeError) || [])],
                                            beforeRequest: [eZ.x, ...((null == i || null == (o = i.hooks) ? void 0 : o.beforeRequest) || [])],
                                            afterTimeout: [c.beforeErrorHook, ...((null == i || null == (n = i.hooks) ? void 0 : n.afterTimeout) || [])],
                                            beforeRetry: [eK.i, c.beforeRetryHook, ...((null == i || null == (a = i.hooks) ? void 0 : a.beforeRetry) || [])],
                                        });
                                    let m = s(i);
                                    return (0, eh.sY)(m, {
                                        get isOffline() {
                                            return (0, eN.g)(l);
                                        },
                                    });
                                },
                        ),
                    })
                    .registerMany({
                        [eF.A4]: (0, g.P9)(
                            (e) =>
                                function () {
                                    var r;
                                    let o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e.get(eF.OP),
                                        a = e.get(eF.QG),
                                        { resources: s } = e.get(eF.tw),
                                        g = n({}, e.get(eF.Hm)),
                                        { prefixUrl: l, timeouts: c, retryPolicyConfig: u } = s.musicExternalApi,
                                        m = e.get(eF.Xc).getLanguage(),
                                        d = new A.Q(g, {
                                            prefixUrl: (0, i.getTldHost)(l, t, eU.B),
                                            retryPolicyConfig: u,
                                            timeouts: c.accountResource,
                                            params: { common: { oauth: a.token, client: (0, e_._)(), device: (0, eM.V)(), language: m } },
                                        });
                                    return (
                                        (o.hooks = { beforeError: [(0, eI.o)(a, d), ...((null == o || null == (r = o.hooks) ? void 0 : r.beforeError) || [])] }),
                                        n(o, e.get(eF.Hm))
                                    );
                                },
                        ),
                    })
                    .register(
                        eF.CR,
                        (0, g.P9)(
                            (e) =>
                                function () {
                                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                    return e.get(eF.A4)(t, e.get(eF.gu));
                                },
                        ),
                    )
                    .registerMany({
                        [eF.$I]: (0, g.Gr)((e) => {
                            let { resources: r } = e.get(eF.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: a } = r.musicExternalApi,
                                s = e.get(eF.Xc).getLanguage(),
                                g = e.get(eF.A4),
                                l = e.get(eF.y$),
                                c = g(),
                                u = e.get(eF.QG),
                                m = {
                                    prefixUrl: (0, i.getTldHost)(o, t, eU.B),
                                    retryPolicyConfig: a,
                                    timeouts: n.accountResource,
                                    params: { common: { oauth: u.token, client: (0, e_._)(), device: (0, eM.V)(), language: s } },
                                };
                            return l.cacheController ? new eh.wV(c, m, { cacheController: l.cacheController }) : new A.Q(c, m);
                        }),
                        [eF._1]: (0, g.Gr)((e) => {
                            let { resources: r } = e.get(eF.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: a } = r.musicExternalApi,
                                s = e.get(eF.Xc).getLanguage(),
                                g = e.get(eF.A4)(),
                                l = e.get(eF.QG);
                            return new w.d(g, {
                                prefixUrl: (0, i.getTldHost)(o, t, eU.B),
                                retryPolicyConfig: a,
                                timeouts: n.usersResource,
                                params: { common: { oauth: l.token, client: (0, e_._)(), device: (0, eM.V)(), language: s } },
                            });
                        }),
                        [eF.V3]: (0, g.Gr)((e) => {
                            let { resources: r } = e.get(eF.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: a } = r.musicExternalApi,
                                s = e.get(eF.Xc).getLanguage(),
                                g = e.get(eF.A4)(),
                                l = e.get(eF.QG),
                                c = e.get(eF.y$),
                                u = {
                                    prefixUrl: (0, i.getTldHost)(o, t, eU.B),
                                    retryPolicyConfig: a,
                                    timeouts: n.landingResource,
                                    params: { common: { oauth: l.token, client: (0, e_._)(), device: (0, eM.V)(), language: s } },
                                };
                            return new eh.o7(g, u, {
                                hooks: c.hooks,
                                variables: {
                                    get tracksController() {
                                        return c.tracksController;
                                    },
                                    get cacheController() {
                                        var m;
                                        return null != (m = c.cacheController) ? m : null;
                                    },
                                },
                            });
                        }),
                        [eF.Lb]: (0, g.Gr)((e) => {
                            let { resources: r } = e.get(eF.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: a } = r.musicExternalApi,
                                s = e.get(eF.Xc).getLanguage(),
                                g = e.get(eF.A4)(),
                                l = e.get(eF.QG);
                            return new E.H(g, {
                                prefixUrl: (0, i.getTldHost)(o, t, eU.B),
                                retryPolicyConfig: a,
                                timeouts: n.landing3Resource,
                                params: { common: { oauth: l.token, client: (0, e_._)(), device: (0, eM.V)(), language: s } },
                            });
                        }),
                        [eF.tz]: (0, g.Gr)((e) => {
                            let { resources: r } = e.get(eF.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: a } = r.musicExternalApi,
                                s = e.get(eF.Xc).getLanguage(),
                                g = e.get(eF.A4)(),
                                l = e.get(eF.QG);
                            return new L.B(g, {
                                prefixUrl: (0, i.getTldHost)(o, t, eU.B),
                                retryPolicyConfig: a,
                                timeouts: n.albumsResource,
                                params: { common: { oauth: l.token, client: (0, e_._)(), device: (0, eM.V)(), language: s } },
                            });
                        }),
                        [eF.$8]: (0, g.Gr)((e) => {
                            let { resources: r } = e.get(eF.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: a } = r.musicExternalApi,
                                s = e.get(eF.Xc).getLanguage(),
                                g = e.get(eF.A4)(),
                                l = e.get(eF.QG);
                            return new _.w(g, {
                                prefixUrl: (0, i.getTldHost)(o, t, eU.B),
                                retryPolicyConfig: a,
                                timeouts: n.libraryResource,
                                params: { common: { oauth: l.token, client: (0, e_._)(), device: (0, eM.V)(), language: s } },
                            });
                        }),
                        [eF.Oo]: (0, g.Gr)((e) => {
                            let { resources: r } = e.get(eF.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: a } = r.musicExternalApi,
                                s = e.get(eF.Xc).getLanguage(),
                                g = e.get(eF.A4)(),
                                l = e.get(eF.QG);
                            return new G.L(g, {
                                prefixUrl: (0, i.getTldHost)(o, t, eU.B),
                                retryPolicyConfig: a,
                                timeouts: n.tracksResource,
                                params: { common: { oauth: l.token, client: (0, e_._)(), device: (0, eM.V)(), language: s } },
                            });
                        }),
                        [eF.$5]: (0, g.Gr)((e) => {
                            let { resources: r } = e.get(eF.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: a } = r.musicExternalApi,
                                s = e.get(eF.Xc).getLanguage(),
                                g = e.get(eF.A4)(),
                                l = e.get(eF.QG);
                            return new T._(g, {
                                prefixUrl: (0, i.getTldHost)(o, t, eU.B),
                                retryPolicyConfig: a,
                                timeouts: n.availabilityResource,
                                params: { common: { oauth: l.token, client: (0, e_._)(), device: (0, eM.V)(), language: s } },
                            });
                        }),
                        [eF.qT]: (0, g.Gr)((e) => {
                            let { resources: r, player: o } = e.get(eF.tw),
                                { prefixUrl: n, timeouts: a, retryPolicyConfig: s } = r.musicExternalApi,
                                g = e.get(eF.Xc).getLanguage(),
                                l = e.get(eF.A4)(),
                                c = e.get(eF.QG),
                                u = e.get(eF.y$),
                                m = e.get(eF.oo),
                                d = {
                                    prefixUrl: (0, i.getTldHost)(n, t, eU.B),
                                    retryPolicyConfig: s,
                                    timeouts: a.getFileInfoResource,
                                    params: { common: { oauth: c.token, client: (0, e_._)(), device: (0, eM.V)(), language: g } },
                                },
                                p = u.repositoryContainer.fileStorage,
                                h = u.repositoryContainer.tracksRepository,
                                A = u.repositoryContainer.usersTracksRepository;
                            return p && h && A
                                ? new eh.d7(l, d, {
                                      fileStorage: p,
                                      tracksRepository: h,
                                      usersTracksRepository: A,
                                      hooks: u.hooks,
                                      variables: {
                                          get uid() {
                                              return m.get(ef.c.YmUid);
                                          },
                                          secretKey: o.secretKey,
                                      },
                                  })
                                : new f.v(l, d);
                        }),
                        [eF.X4]: (0, g.Gr)((e) => {
                            let { resources: r } = e.get(eF.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: a } = r.musicExternalApi,
                                s = e.get(eF.Xc).getLanguage(),
                                g = e.get(eF.A4)(),
                                l = e.get(eF.QG);
                            return new v.a(g, {
                                prefixUrl: (0, i.getTldHost)(o, t, eU.B),
                                retryPolicyConfig: a,
                                timeouts: n.topResource,
                                params: { common: { oauth: l.token, client: (0, e_._)(), device: (0, eM.V)(), language: s } },
                            });
                        }),
                        [eF.O9]: (0, g.Gr)((e) => {
                            let { resources: r } = e.get(eF.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: a } = r.musicExternalApi,
                                s = e.get(eF.Xc).getLanguage(),
                                g = e.get(eF.A4)(),
                                l = e.get(eF.QG);
                            return new x.b(g, {
                                prefixUrl: (0, i.getTldHost)(o, t, eU.B),
                                retryPolicyConfig: a,
                                timeouts: n.artistsResource,
                                params: { common: { oauth: l.token, client: (0, e_._)(), device: (0, eM.V)(), language: s } },
                            });
                        }),
                        [eF.E]: (0, g.Gr)((e) => {
                            let { resources: r } = e.get(eF.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: a } = r.musicExternalApi,
                                s = e.get(eF.Xc).getLanguage(),
                                g = e.get(eF.A4)(),
                                l = e.get(eF.QG);
                            return new U.V(g, {
                                prefixUrl: (0, i.getTldHost)(o, t, eU.B),
                                retryPolicyConfig: a,
                                timeouts: n.slidesResource,
                                params: { common: { oauth: l.token, client: (0, e_._)(), device: (0, eM.V)(), language: s } },
                            });
                        }),
                        [eF.wH]: (0, g.Gr)((e) => {
                            let { resources: r } = e.get(eF.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: a } = r.musicExternalApi,
                                s = e.get(eF.Xc).getLanguage(),
                                g = e.get(eF.A4),
                                l = e.get(eF.QG),
                                c = g();
                            return new k.c(c, {
                                prefixUrl: (0, i.getTldHost)(o, t, eU.B),
                                retryPolicyConfig: a,
                                timeouts: n.redAlertResource,
                                params: { common: { oauth: l.token, client: (0, e_._)(), device: (0, eM.V)(), language: s } },
                            });
                        }),
                        [eF.ok]: (0, g.Gr)((e) => {
                            let { resources: r } = e.get(eF.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: a } = r.musicExternalApi,
                                s = e.get(eF.Xc).getLanguage(),
                                g = e.get(eF.A4)(),
                                l = e.get(eF.QG);
                            return new R.Z(g, {
                                prefixUrl: (0, i.getTldHost)(o, t, eU.B),
                                retryPolicyConfig: a,
                                timeouts: n.rotorResource,
                                params: { common: { oauth: l.token, client: (0, e_._)(), device: (0, eM.V)(), language: s } },
                            });
                        }),
                        [eF.X8]: (0, g.Gr)((e) => {
                            let { resources: r } = e.get(eF.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: a } = r.musicExternalApi,
                                s = e.get(eF.Xc).getLanguage(),
                                g = e.get(eF.A4)(),
                                l = e.get(eF.QG);
                            return new P.w(g, {
                                prefixUrl: (0, i.getTldHost)(o, t, eU.B),
                                retryPolicyConfig: a,
                                timeouts: n.waveResource,
                                params: { common: { oauth: l.token, client: (0, e_._)(), device: (0, eM.V)(), language: s } },
                            });
                        }),
                        [eF.yq]: (0, g.Gr)((e) => {
                            let { resources: r } = e.get(eF.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: a } = r.musicExternalApi,
                                s = e.get(eF.Xc).getLanguage(),
                                g = e.get(eF.A4)(),
                                l = e.get(eF.QG);
                            return new I.p(g, {
                                prefixUrl: (0, i.getTldHost)(o, t, eU.B),
                                retryPolicyConfig: a,
                                timeouts: n.searchResource,
                                params: { common: { oauth: l.token, client: (0, e_._)(), device: (0, eM.V)(), language: s } },
                            });
                        }),
                        [eF.NN]: (0, g.Gr)((e) => {
                            let { resources: r } = e.get(eF.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: a } = r.musicExternalApi,
                                s = e.get(eF.Xc).getLanguage(),
                                g = e.get(eF.A4)(),
                                l = e.get(eF.QG);
                            return new H.v(g, {
                                prefixUrl: (0, i.getTldHost)(o, t, eU.B),
                                retryPolicyConfig: a,
                                timeouts: n.searchResource,
                                params: { common: { oauth: l.token, client: (0, e_._)(), device: (0, eM.V)(), language: s } },
                            });
                        }),
                        [eF.qN]: (0, g.Gr)((e) => {
                            let { resources: r } = e.get(eF.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: a } = r.musicExternalApi,
                                s = e.get(eF.Xc).getLanguage(),
                                g = e.get(eF.A4)(),
                                l = e.get(eF.QG);
                            return new B.T(g, {
                                prefixUrl: (0, i.getTldHost)(o, t, eU.B),
                                retryPolicyConfig: a,
                                timeouts: n.playlistResource,
                                params: { common: { oauth: l.token, client: (0, e_._)(), device: (0, eM.V)(), language: s } },
                            });
                        }),
                        [eF.ro]: (0, g.Gr)((e) => {
                            let { resources: r } = e.get(eF.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: a } = r.musicExternalApi,
                                s = e.get(eF.Xc).getLanguage(),
                                g = e.get(eF.A4)(),
                                l = e.get(eF.QG);
                            return new O.e(g, {
                                prefixUrl: (0, i.getTldHost)(o, t, eU.B),
                                retryPolicyConfig: a,
                                timeouts: n.playlistsResource,
                                params: { common: { oauth: l.token, client: (0, e_._)(), device: (0, eM.V)(), language: s } },
                            });
                        }),
                        [eF.nM]: (0, g.Gr)((e) => {
                            let { resources: r } = e.get(eF.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: a } = r.musicExternalApi,
                                s = e.get(eF.Xc).getLanguage(),
                                g = e.get(eF.A4)(),
                                l = e.get(eF.QG);
                            return new S.o(g, {
                                prefixUrl: (0, i.getTldHost)(o, t, eU.B),
                                retryPolicyConfig: a,
                                timeouts: n.pinResource,
                                params: { common: { oauth: l.token, client: (0, e_._)(), device: (0, eM.V)(), language: s } },
                            });
                        }),
                        [eF.Ut]: (0, g.Gr)((e) => {
                            let { resources: r } = e.get(eF.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: a } = r.musicExternalApi,
                                s = e.get(eF.Xc).getLanguage(),
                                g = e.get(eF.A4)(),
                                l = e.get(eF.QG);
                            return new V.$(g, {
                                prefixUrl: (0, i.getTldHost)(o, t, eU.B),
                                retryPolicyConfig: a,
                                timeouts: n.metatagsResource,
                                params: { common: { oauth: l.token, client: (0, e_._)(), device: (0, eM.V)(), language: s } },
                            });
                        }),
                        [eF.K1]: (0, g.Gr)((e) => {
                            let { resources: r } = e.get(eF.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: a } = r.musicExternalApi,
                                s = e.get(eF.Xc).getLanguage(),
                                g = e.get(eF.A4)(),
                                l = e.get(eF.QG);
                            return new C.p(g, {
                                prefixUrl: (0, i.getTldHost)(o, t, eU.B),
                                retryPolicyConfig: a,
                                timeouts: n.tagResource,
                                params: { common: { oauth: l.token, client: (0, e_._)(), device: (0, eM.V)(), language: s } },
                            });
                        }),
                        [eF.eu]: (0, g.Gr)((e) => {
                            let { resources: r } = e.get(eF.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: a } = r.musicExternalApi,
                                s = e.get(eF.Xc).getLanguage(),
                                g = e.get(eF.A4)(),
                                l = e.get(eF.QG);
                            return new y.D(g, {
                                prefixUrl: (0, i.getTldHost)(o, t, eU.B),
                                retryPolicyConfig: a,
                                timeouts: n.feedResource,
                                params: { common: { oauth: l.token, client: (0, e_._)(), device: (0, eM.V)(), language: s } },
                            });
                        }),
                        [eF.aE]: (0, g.Gr)((e) => {
                            let { resources: r } = e.get(eF.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: a } = r.musicExternalApi,
                                s = e.get(eF.Xc).getLanguage(),
                                g = e.get(eF.A4)(),
                                l = e.get(eF.QG),
                                c = e.get(eF.y$),
                                u = new X.l(g, {
                                    prefixUrl: (0, i.getTldHost)(o, t, eU.B),
                                    retryPolicyConfig: a,
                                    timeouts: n.pinsResource,
                                    params: { common: { oauth: l.token, client: (0, e_._)(), device: (0, eM.V)(), language: s } },
                                });
                            return c.cacheController
                                ? (0, eh._2)({
                                      resource: u,
                                      cacheController: c.cacheController,
                                      config: { common: { resourceName: X.l.constructor.name }, enabled: !0, priority: eh.OU.HIGH, ttl: 6048e5 },
                                  })
                                : u;
                        }),
                        [eF.ki]: (0, g.Gr)((e) => {
                            let { resources: r } = e.get(eF.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: a } = r.musicExternalApi,
                                s = e.get(eF.Xc).getLanguage(),
                                g = e.get(eF.A4)(),
                                l = e.get(eF.QG);
                            return new D.I(g, {
                                prefixUrl: (0, i.getTldHost)(o, t, eU.B),
                                retryPolicyConfig: a,
                                timeouts: n.musicHistoryResource,
                                params: { common: { oauth: l.token, client: (0, e_._)(), device: (0, eM.V)(), language: s } },
                            });
                        }),
                        [eF.c9]: (0, g.Gr)((e) => {
                            let { resources: r } = e.get(eF.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: a } = r.musicExternalApi,
                                s = e.get(eF.Xc).getLanguage(),
                                g = e.get(eF.A4)(),
                                l = e.get(eF.QG);
                            return new Q.s(g, {
                                prefixUrl: (0, i.getTldHost)(o, t, eU.B),
                                retryPolicyConfig: a,
                                timeouts: n.dynamicPagesResource,
                                params: { common: { oauth: l.token, client: (0, e_._)(), device: (0, eM.V)(), language: s } },
                            });
                        }),
                        [eF.en]: (0, g.Gr)((e) => {
                            let { resources: r } = e.get(eF.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: a } = r.musicExternalApi,
                                s = e.get(eF.Xc).getLanguage(),
                                g = e.get(eF.A4)(),
                                l = e.get(eF.QG);
                            return new N.B(g, {
                                prefixUrl: (0, i.getTldHost)(o, t, eU.B),
                                retryPolicyConfig: a,
                                timeouts: n.chartResource,
                                params: { common: { oauth: l.token, client: (0, e_._)(), device: (0, eM.V)(), language: s } },
                            });
                        }),
                        [eF.jQ]: (0, g.Gr)((e) => {
                            let { resources: r } = e.get(eF.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: a } = r.musicExternalApi,
                                s = e.get(eF.Xc).getLanguage(),
                                g = e.get(eF.A4)(),
                                l = e.get(eF.QG);
                            return new b._(g, {
                                prefixUrl: (0, i.getTldHost)(o, t, eU.B),
                                retryPolicyConfig: a,
                                timeouts: n.clipsResource,
                                params: { common: { oauth: l.token, client: (0, e_._)(), device: (0, eM.V)(), language: s } },
                            });
                        }),
                        [eF.cZ]: (0, g.Gr)((e) => {
                            let { resources: r } = e.get(eF.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: a } = r.musicExternalApi,
                                s = e.get(eF.Xc).getLanguage(),
                                g = e.get(eF.A4)(),
                                l = e.get(eF.QG);
                            return new M.c(g, {
                                prefixUrl: (0, i.getTldHost)(o, t, eU.B),
                                retryPolicyConfig: a,
                                timeouts: n.lyricViewsResource,
                                params: { common: { oauth: l.token, client: (0, e_._)(), device: (0, eM.V)(), language: s } },
                            });
                        }),
                        [eF.Zl]: (0, g.Gr)((e) => {
                            let { resources: r } = e.get(eF.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: a } = r.musicExternalApi,
                                s = e.get(eF.Xc).getLanguage(),
                                g = e.get(eF.A4)(),
                                l = e.get(eF.QG);
                            return new Y.D(g, {
                                prefixUrl: (0, i.getTldHost)(o, t, eU.B),
                                retryPolicyConfig: a,
                                timeouts: n.nonMusicResource,
                                params: { common: { oauth: l.token, client: (0, e_._)(), device: (0, eM.V)(), language: s } },
                            });
                        }),
                        [eF.CN]: (0, g.Gr)((e) => {
                            let { resources: r } = e.get(eF.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: a } = r.musicExternalApi,
                                s = e.get(eF.Xc).getLanguage(),
                                g = e.get(eF.A4)(),
                                l = e.get(eF.QG);
                            return new F.N(g, {
                                prefixUrl: (0, i.getTldHost)(o, t, eU.B),
                                retryPolicyConfig: a,
                                timeouts: n.donationResource,
                                params: { common: { oauth: l.token, client: (0, e_._)(), device: (0, eM.V)(), language: s } },
                            });
                        }),
                        [eF.JM]: (0, g.Gr)((e) => {
                            let { resources: r } = e.get(eF.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: a } = r.musicExternalApi,
                                s = e.get(eF.Xc).getLanguage(),
                                g = e.get(eF.A4)(),
                                l = e.get(eF.QG);
                            return new W.c(g, {
                                prefixUrl: (0, i.getTldHost)(o, t, eU.B),
                                retryPolicyConfig: a,
                                timeouts: n.streamsResource,
                                params: { common: { oauth: l.token, client: (0, e_._)(), device: (0, eM.V)(), language: s } },
                            });
                        }),
                        [eF.P1]: (0, g.Gr)((e) => {
                            let { resources: r } = e.get(eF.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: a } = r.musicExternalApi,
                                s = e.get(eF.Xc).getLanguage(),
                                g = e.get(eF.A4)(),
                                l = e.get(eF.QG);
                            return new Z.S(g, {
                                prefixUrl: (0, i.getTldHost)(o, t, eU.B),
                                retryPolicyConfig: a,
                                timeouts: n.loaderResource,
                                params: { common: { oauth: l.token, client: (0, e_._)(), device: (0, eM.V)(), language: s } },
                            });
                        }),
                        [eF.re]: (0, g.Gr)((e) => {
                            let { resources: t } = e.get(eF.tw),
                                { timeouts: r, retryPolicyConfig: o } = t.musicExternalApi,
                                n = e.get(eF.Xc).getLanguage(),
                                a = e.get(eF.A4)({ credentials: 'omit' });
                            return new K.s(a, {
                                prefixUrl: '',
                                retryPolicyConfig: o,
                                timeouts: r.prefixlessResource,
                                params: { common: { client: (0, e_._)(), device: (0, eM.V)(), language: n } },
                            });
                        }),
                        [eF.Lk]: (0, g.Gr)((e) => {
                            let { resources: r } = e.get(eF.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: a } = r.musicExternalApi,
                                s = e.get(eF.Xc).getLanguage(),
                                g = e.get(eF.A4)(),
                                l = e.get(eF.QG);
                            return new z.g(g, {
                                prefixUrl: (0, i.getTldHost)(o, t, eU.B),
                                retryPolicyConfig: a,
                                timeouts: n.filtersResource,
                                params: { common: { oauth: l.token, client: (0, e_._)(), device: (0, eM.V)(), language: s } },
                            });
                        }),
                        [eF.uM]: (0, g.Gr)((e) => {
                            var t;
                            let { acqOffers: r, rumSettings: n } = e.get(eF.tw),
                                { brand: a, service: i, environment: s, appVersion: g } = r,
                                { platform: l, page: c } = n,
                                u = e.get(eF.QG),
                                m = e.get(eF.Xc).getLanguage(),
                                d = e.get(eF.A4),
                                p = u.token || null,
                                h = d({ credentials: 'omit' }),
                                { request_id: A, puid: w } = null != (t = e.get(eF.Zi).getStore()) ? t : {};
                            return new o.mZ({
                                brand: a,
                                service: i,
                                environment: s,
                                appVersion: g,
                                etld: 'yandex.net',
                                platform: 'Desktop',
                                lang: m,
                                oAuthToken: p,
                                authMethod: 'oauth',
                                requester: (0, eW.n)(h),
                                puid: (null == w ? void 0 : w.toString()) || null,
                                rumOptions: { platform: l, page: c, requestId: A },
                            });
                        }),
                        [eF.$$]: (0, g.Gr)((e) => {
                            let { resources: r } = e.get(eF.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: a } = r.musicExternalApi,
                                s = e.get(eF.Xc).getLanguage(),
                                g = e.get(eF.A4)(),
                                l = e.get(eF.QG);
                            return new q.E(g, {
                                prefixUrl: (0, i.getTldHost)(o, t, eU.B),
                                retryPolicyConfig: a,
                                timeouts: n.ugcResource,
                                params: { common: { oauth: l.token, client: (0, e_._)(), language: s } },
                            });
                        }),
                        [eF.sv]: (0, g.Gr)((e) => {
                            let { resources: r } = e.get(eF.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: a } = r.musicExternalApi,
                                s = e.get(eF.Xc).getLanguage(),
                                g = e.get(eF.A4)(),
                                l = e.get(eF.QG);
                            return new $.L(g, {
                                prefixUrl: (0, i.getTldHost)(o, t, eU.B),
                                retryPolicyConfig: a,
                                timeouts: n.collectionResource,
                                params: { common: { oauth: l.token, client: (0, e_._)(), device: (0, eM.V)(), language: s } },
                            });
                        }),
                        [eF.gd]: (0, g.Gr)((e) => {
                            let { resources: r } = e.get(eF.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: a } = r.musicExternalApi,
                                s = e.get(eF.Xc).getLanguage(),
                                g = e.get(eF.A4)(),
                                l = e.get(eF.QG);
                            return new j.z(g, {
                                prefixUrl: (0, i.getTldHost)(o, t, eU.B),
                                retryPolicyConfig: a,
                                timeouts: n.adsResource,
                                params: { common: { oauth: l.token, client: (0, e_._)(), device: (0, eM.V)(), language: s } },
                            });
                        }),
                        [eF.EN]: (0, g.Gr)((e) => {
                            let { resources: r } = e.get(eF.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: a } = r.musicExternalApi,
                                s = e.get(eF.Xc).getLanguage(),
                                g = e.get(eF.A4)(),
                                l = e.get(eF.QG);
                            return new J._(g, {
                                prefixUrl: (0, i.getTldHost)(o, t, eU.B),
                                retryPolicyConfig: a,
                                timeouts: n.afterTrackResource,
                                params: { common: { oauth: l.token, client: (0, e_._)(), device: (0, eM.V)(), language: s } },
                            });
                        }),
                        [eF.Ez]: (0, g.Gr)((e) => {
                            let { resources: r } = e.get(eF.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: a } = r.musicExternalApi,
                                s = e.get(eF.Xc).getLanguage(),
                                g = e.get(eF.A4)(),
                                l = e.get(eF.QG);
                            return new ee.l(g, {
                                prefixUrl: (0, i.getTldHost)(o, t, eU.B),
                                retryPolicyConfig: a,
                                timeouts: n.personalResource,
                                params: { common: { oauth: l.token, client: (0, e_._)(), device: (0, eM.V)(), language: s } },
                            });
                        }),
                        [eF.N1]: (0, g.Gr)((e) => {
                            let { resources: r } = e.get(eF.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: a } = r.musicExternalApi,
                                s = e.get(eF.Xc).getLanguage(),
                                g = e.get(eF.A4)(),
                                l = e.get(eF.QG),
                                c = e.get(eF.y$),
                                u = new et.H(g, {
                                    prefixUrl: (0, i.getTldHost)(o, t, eU.B),
                                    retryPolicyConfig: a,
                                    timeouts: n.disclaimersResource,
                                    params: { common: { oauth: l.token, client: (0, e_._)(), device: (0, eM.V)(), language: s } },
                                });
                            return c.cacheController
                                ? (0, eh._2)({
                                      resource: u,
                                      cacheController: c.cacheController,
                                      config: { common: { resourceName: et.H.constructor.name }, enabled: !0, priority: eh.OU.HIGH, ttl: 6048e5 },
                                  })
                                : u;
                        }),
                        [eF.u2]: (0, g.Gr)((e) => {
                            let { resources: r } = e.get(eF.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: a } = r.musicExternalApi,
                                s = e.get(eF.Xc).getLanguage(),
                                g = e.get(eF.A4)(),
                                l = e.get(eF.QG);
                            return new er.J(g, {
                                prefixUrl: (0, i.getTldHost)(o, t, eU.B),
                                retryPolicyConfig: a,
                                timeouts: n.familyResource,
                                params: { common: { oauth: l.token, client: (0, e_._)(), device: (0, eM.V)(), language: s } },
                            });
                        }),
                        [eF.TD]: (0, g.Gr)((e) => {
                            let { resources: r } = e.get(eF.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: a } = r.musicExternalApi,
                                s = e.get(eF.Xc).getLanguage(),
                                g = e.get(eF.A4)(),
                                l = e.get(eF.QG);
                            return new eo.L(g, {
                                prefixUrl: (0, i.getTldHost)(o, t, eU.B),
                                retryPolicyConfig: a,
                                timeouts: n.childrenLandingResource,
                                params: { common: { oauth: l.token, client: (0, e_._)(), device: (0, eM.V)(), language: s } },
                            });
                        }),
                        [eF.wK]: (0, g.Gr)((e) => {
                            let { resources: r } = e.get(eF.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: a } = r.musicExternalApi,
                                s = e.get(eF.Xc).getLanguage(),
                                g = e.get(eF.A4)(),
                                l = e.get(eF.QG);
                            return new en.u(g, {
                                prefixUrl: (0, i.getTldHost)(o, t, eU.B),
                                retryPolicyConfig: a,
                                timeouts: n.landingBlocksResource,
                                params: { common: { oauth: l.token, client: (0, e_._)(), device: (0, eM.V)(), language: s } },
                            });
                        }),
                        [eF.dh]: (0, g.Gr)((e) => {
                            let { resources: r } = e.get(eF.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: a } = r.musicExternalApi,
                                s = e.get(eF.Xc).getLanguage(),
                                g = e.get(eF.A4)(),
                                l = e.get(eF.QG);
                            return new ea.q(g, {
                                prefixUrl: (0, i.getTldHost)(o, t, eU.B),
                                retryPolicyConfig: a,
                                timeouts: n.promoResource,
                                params: { common: { oauth: l.token, client: (0, e_._)(), device: (0, eM.V)(), language: s } },
                            });
                        }),
                        [eF.LC]: (0, g.Gr)((e) => {
                            let { resources: t, player: r } = e.get(eF.tw),
                                { timeouts: o, retryPolicyConfig: n } = t.musicExternalApi,
                                a = e.get(eF.CR)({ credentials: 'include' });
                            return new ei.g(a, {
                                prefixUrl: r.telemetry.telemetryUrl,
                                retryPolicyConfig: n,
                                timeouts: o.telemetryResouce,
                                params: { common: { client: (0, e_._)() } },
                            });
                        }),
                        [eF.W5]: (0, g.Gr)((e) => {
                            let { resources: t, player: r } = e.get(eF.tw),
                                { retryPolicyConfig: o } = t.musicExternalApi,
                                n = e.get(eF.CR)({ credentials: 'include' });
                            return new es.N(n, { prefixUrl: r.telemetry.rumUrl, retryPolicyConfig: o, params: { common: { client: (0, e_._)() } } });
                        }),
                        [eF.PL]: (0, g.Gr)((e) => {
                            let { resources: r } = e.get(eF.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: a } = r.musicExternalApi,
                                s = e.get(eF.Xc).getLanguage(),
                                g = e.get(eF.A4)(),
                                l = e.get(eF.QG);
                            return new eg.w(g, {
                                prefixUrl: (0, i.getTldHost)(o, t, eU.B),
                                retryPolicyConfig: a,
                                timeouts: n.labelsResource,
                                params: { common: { oauth: l.token, client: (0, e_._)(), device: (0, eM.V)(), language: s } },
                            });
                        }),
                        [eF.DT]: (0, g.Gr)((e) => {
                            let { resources: r } = e.get(eF.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: a } = r.musicExternalApi,
                                s = e.get(eF.Xc).getLanguage(),
                                g = e.get(eF.A4)(),
                                l = e.get(eF.QG);
                            return new el.O(g, {
                                prefixUrl: (0, i.getTldHost)(o, t, eU.B),
                                retryPolicyConfig: a,
                                timeouts: n.concertsResource,
                                params: { common: { oauth: l.token, client: (0, e_._)(), device: (0, eM.V)(), language: s } },
                            });
                        }),
                        [eF.dA]: (0, g.Gr)((e) => {
                            let { resources: r } = e.get(eF.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: a } = r.musicExternalApi,
                                s = e.get(eF.Xc).getLanguage(),
                                g = e.get(eF.A4)(),
                                l = e.get(eF.QG);
                            return new ec.Q(g, {
                                prefixUrl: (0, i.getTldHost)(o, t, eU.B),
                                retryPolicyConfig: a,
                                timeouts: n.wordsResource,
                                params: { common: { oauth: l.token, client: (0, e_._)(), device: (0, eM.V)(), language: s } },
                            });
                        }),
                        [eF.$Y]: (0, g.Gr)((e) => {
                            let { resources: r } = e.get(eF.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: a } = r.musicExternalApi,
                                s = e.get(eF.Xc).getLanguage(),
                                g = e.get(eF.A4)(),
                                l = e.get(eF.QG);
                            return new eu.C(g, {
                                prefixUrl: (0, i.getTldHost)(o, t, eU.B),
                                retryPolicyConfig: a,
                                timeouts: n.wheelResource,
                                params: { common: { oauth: l.token, client: (0, e_._)(), device: (0, eM.V)(), language: s } },
                            });
                        }),
                        [eF.VR]: (0, g.P9)((e) => () => {
                            let { resources: t } = e.get(eF.tw),
                                r = e.get(eF.A4)({ credentials: 'omit' }),
                                o = new em.o(r, t.networkReachability.url);
                            return (0, eQ.P)({ probe: (e) => o.ping({ signal: e }) });
                        }),
                        [eF.zj]: (0, g.Gr)((e) => {
                            let { resources: r } = e.get(eF.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: a } = r.musicExternalApi,
                                s = e.get(eF.Xc).getLanguage(),
                                g = e.get(eF.A4)(),
                                l = e.get(eF.QG);
                            return new ed.U(g, {
                                prefixUrl: (0, i.getTldHost)(o, t, eU.B),
                                retryPolicyConfig: a,
                                timeouts: n.lumenResource,
                                params: { common: { oauth: l.token, client: (0, e_._)(), device: (0, eM.V)(), language: s } },
                            });
                        }),
                        [eF.vg]: (0, g.Gr)(() => (0, ew.a)()),
                    })
                    .register(
                        eF.ff,
                        (0, g.Gr)((e) => {
                            let t = e.get(eF.N1);
                            return new l.AS({ dataSource: new eS.C(t) });
                        }),
                    )
                    .registerMany({
                        [eF.UB]: (0, g.Gr)((e) => {
                            let t = e.get(eF.vg);
                            return new h.B(t);
                        }),
                        [eF.Tq]: (0, g.Gr)((e) => {
                            var t;
                            let r = e.get(eF.W5);
                            return (null == (t = window.Ya) ? void 0 : t.Rum) ? new h.G((0, eL.y)(), r, window.Ya.Rum) : null;
                        }),
                    })
                    .register(
                        eF.by,
                        (0, g.Gr)((e) => {
                            let t = e.get(eF.oo),
                                r = e.get(eF.U2),
                                o = e.get(eF.Zf),
                                i = r.get(ef.c.YnisonDeviceId);
                            i || ((i = (0, a.A)()), r.set(ef.c.YnisonDeviceId, i));
                            let s = {
                                    info: { app_name: 'Desktop', app_version: (0, eb.H)() || '', title: 'Music Desktop App', device_id: i, type: n.bq.WEB_DESKTOP },
                                    volumeGranularity: 20,
                                    get defaultVolume() {
                                        var g;
                                        return null != (g = t.get(ef.c.YmPlayerVolume)) ? g : void 0;
                                    },
                                },
                                l = e.get(eF.WA).getPassportUid(),
                                c = e.get(eF.QG),
                                u = e.get(eF.UB),
                                m = e.get(eF.Tq),
                                d = [new n.zT(u)];
                            return (
                                m && d.push(new n.qP(m)),
                                new n.Jd({
                                    logger: o,
                                    deviceConfig: s,
                                    multiAuthUserId: l,
                                    oauth: c.token,
                                    ynisonConnectionConfig: eT.ynisonConnectionConfig,
                                    metricsTransport: d,
                                    variables: { isShadow: !0 },
                                })
                            );
                        }),
                    )
                    .register(
                        eF.ni,
                        (0, g.Gr)((e) => {
                            let t = e.get(eF.Zf);
                            return new m.SU({
                                skeletonFactory: new eE.F6({ landingResource: e.get(eF.V3), artistsResource: e.get(eF.O9), tabIdQueryParamController: new eE.ET() }),
                                visibilityDetectorFactory: new ep.O9(),
                                plugins: [new eE.X({ logger: t })],
                            });
                        }),
                    );
            }
        },
    },
]);
