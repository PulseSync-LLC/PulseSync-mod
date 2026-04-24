'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6208],
    {
        26208: (e, t, r) => {
            r.d(t, { createDesktopContainer: () => eP });
            var o = r(83466),
                n = r(76345),
                g = r(33782),
                i = r(33878),
                a = r(96166),
                l = r(67864),
                c = r(14174),
                u = r(83768),
                s = r(65526),
                m = r(60895),
                p = r(63887),
                d = r(35691),
                w = r(81178),
                G = r(18598),
                A = r(87776),
                x = r(68644),
                f = r(1082),
                h = r(94583),
                v = r(57702),
                k = r(63974),
                U = r(29274),
                E = r(11114),
                L = r(39524),
                H = r(72357),
                R = r(24050),
                T = r(91292),
                _ = r(48099),
                B = r(7892),
                Q = r(90666),
                V = r(94754),
                X = r(70524),
                y = r(78294),
                C = r(23968),
                b = r(38468),
                P = r(8889),
                D = r(80913),
                M = r(38622),
                S = r(36970),
                q = r(10737),
                N = r(77027),
                Z = r(83112),
                $ = r(9462),
                O = r(28878),
                Y = r(4722),
                W = r(81738),
                z = r(76098),
                I = r(69900),
                K = r(25070),
                J = r(46378),
                F = r(91424),
                j = r(74274),
                ee = r(61648),
                et = r(10363),
                er = r(58649),
                eo = r(66682),
                en = r(94042),
                eg = r(83182),
                ei = r(35798),
                ea = r(45950),
                el = r(33426),
                ec = r(78701),
                eu = r(14622),
                es = r(32980),
                em = r(75611),
                ep = r(46852),
                ed = r(33515),
                ew = r(55451),
                eG = r(93705),
                eA = r(36931),
                ex = r(45011),
                ef = r(7310),
                eh = r(23842),
                ev = r(31424);
            class ek {
                onChangeLanguage() {
                    window.location.reload();
                }
            }
            var eU = r(86720),
                eE = r(36693),
                eL = r(2929),
                eH = r(38889),
                eR = r(88996),
                eT = r(61810),
                e_ = r(17599),
                eB = r(47521),
                eQ = r(43342),
                eV = r(80528),
                eX = r(90484),
                ey = r(98868),
                eC = r(50911),
                eb = r(34290);
            async function eP(e) {
                let { tld: t, env: eP } = e,
                    eD = (0, eb.J)(await (0, ef.z)(eP)),
                    eM = await (0, ex.B)(eP),
                    eS = {};
                return new l.Dt()
                    .registerMany({
                        [eV.SX]: (0, l.Gr)(() => eP),
                        [eV.tw]: (0, l.Gr)(() => eD),
                        [eV.P0]: (0, l.Gr)(() => new a.q(eM)),
                        [eV.Zi]: (0, l.Gr)(() => new ev.Y(eS)),
                    })
                    .register(
                        eV.WA,
                        (0, l.Gr)((e) => {
                            let t = e.get(eV.Zi);
                            return new eQ.V(t);
                        }),
                    )
                    .registerMany({
                        [eV.Zf]: (0, l.Gr)((e) => {
                            let t = e.get(eV.P0).get(eA.qV);
                            return new p.r({
                                maxLogLevel: m.cm.DEBUG,
                                secureFields: eL.x,
                                disableLogToConsole: !t,
                                additionalData: {
                                    get puid() {
                                        return e.get(eV.WA).getPassportUid();
                                    },
                                },
                            });
                        }),
                        [eV.RG]: (0, l.Gr)(async (e) => {
                            let {
                                mocks: { enabled: o, mocksProviderUrl: n, urlCapturePattern: g },
                            } = e.get(eV.tw);
                            if (!o) return () => Promise.resolve(null);
                            let { initMocks: a } = await Promise.all([r.e(819), r.e(3144)]).then(r.bind(r, 83144)),
                                l = e.get(eV.U2),
                                c = e.get(eV.Zf),
                                u = 'production' === e.get(eV.SX) ? '/rsc-cache-worker.js' : '',
                                s = () => {
                                    var e;
                                    return null != (e = l.get(e_.c.MocksConfiguration, !1)) ? e : null;
                                };
                            return () =>
                                a({
                                    getMocksConfiguration: s,
                                    log: (e, t) => c.debug('[Mocks] | desktop: '.concat(e), t),
                                    mocksProviderUrl: n,
                                    serviceWorkerUrl: u,
                                    urlCapturePattern: (0, i.getTldHost)(g, t, eB.B),
                                }).catch((e) => c.debug('[Mocks] | desktop: initialization failed. '.concat(e)));
                        }),
                        [eV.TK]: (0, l.Gr)(
                            (e) =>
                                new ((0, eE.b)(p.r))({
                                    maxLogLevel: m.cm.DEBUG,
                                    secureFields: eL.x,
                                    disableLogToConsole: 'development' !== e.get(eV.SX),
                                    additionalData: {
                                        get puid() {
                                            return e.get(eV.WA).getPassportUid();
                                        },
                                    },
                                }),
                        ),
                        [eV.oo]: (0, l.Gr)(() => new es.si()),
                        [eV.DP]: (0, l.Gr)(() => new es.MJ('client '.concat('desktop'), 'cookie')),
                        [eV.U2]: (0, l.Gr)(() => new es.si()),
                        [eV.vH]: (0, l.Gr)(() => new es.fW()),
                        [eV.Xc]: (0, l.Gr)((e) => {
                            let t = e.get(eV.oo),
                                r = e.get(eV.Zf);
                            return new eU.E({
                                isBuildTypeDesktop: !0,
                                logger: r,
                                changeLanguageHandler: new ek(),
                                storage: {
                                    get: () => t.get(e_.c.SavedUserLanguage),
                                    set(e) {
                                        t.set(e_.c.SavedUserLanguage, e);
                                    },
                                },
                            });
                        }),
                    })
                    .registerMany({
                        [eV.y$]: (0, l.Gr)((e) => {
                            let t = e.get(eV.Zf),
                                r = e.get(eV.oo),
                                o = new eu.Mz({
                                    config: { useEntitiesStorage: !0, useFileStorage: !0, useResponseCacheStorage: !0 },
                                    plugins: [new eu.wK({ logger: t })],
                                });
                            return (
                                o.createCacheController({
                                    repositoryContainer: o.repositoryContainer,
                                    variables: {
                                        get uid() {
                                            return r.get(e_.c.YmUid);
                                        },
                                        get isOffline() {
                                            return !!o.network.status.isOffline;
                                        },
                                    },
                                }),
                                o
                            );
                        }),
                        [eV.Hm]: (0, l.P9)(
                            () =>
                                function () {
                                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                    return new s.Q(e);
                                },
                        ),
                        [eV.gu]: (0, l.P9)(
                            () =>
                                function () {
                                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                    return new u.S(e);
                                },
                        ),
                    })
                    .registerMany({
                        [eV.QG]: (0, l.Gr)((e) => new ew.G(e.get(eV.oo), e.get(eV.tw), e.get(eV.Xc).getLanguage())),
                        [eV.OP]: (0, l.P9)(
                            (e) =>
                                function () {
                                    var t, r, o, n, g;
                                    let i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                        a = arguments.length > 1 ? arguments[1] : void 0,
                                        l = e.get(eV.Zf),
                                        c = e.get(eV.U2),
                                        u = new eL.N(l),
                                        {
                                            resources: { musicExternalApi: s },
                                        } = e.get(eV.tw);
                                    (i.timeout = s.defaultTimeout),
                                        (i.hooks = {
                                            afterResponse: [...((null == i || null == (t = i.hooks) ? void 0 : t.afterResponse) || [])],
                                            beforeError: [u.beforeErrorHook, ...((null == i || null == (r = i.hooks) ? void 0 : r.beforeError) || [])],
                                            beforeRequest: [ey.x, ...((null == i || null == (o = i.hooks) ? void 0 : o.beforeRequest) || [])],
                                            afterTimeout: [u.beforeErrorHook, ...((null == i || null == (n = i.hooks) ? void 0 : n.afterTimeout) || [])],
                                            beforeRetry: [eC.i, u.beforeRetryHook, ...((null == i || null == (g = i.hooks) ? void 0 : g.beforeRetry) || [])],
                                        });
                                    let m = a(i);
                                    return (0, eu.sY)(m, {
                                        get isOffline() {
                                            return (0, eH.g)(c);
                                        },
                                    });
                                },
                        ),
                    })
                    .registerMany({
                        [eV.A4]: (0, l.P9)(
                            (e) =>
                                function () {
                                    var r;
                                    let o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e.get(eV.OP),
                                        g = e.get(eV.QG),
                                        { resources: a } = e.get(eV.tw),
                                        l = n({}, e.get(eV.Hm)),
                                        { prefixUrl: c, timeouts: u, retryPolicyConfig: s } = a.musicExternalApi,
                                        m = e.get(eV.Xc).getLanguage(),
                                        p = new w.Q(l, {
                                            prefixUrl: (0, i.getTldHost)(c, t, eB.B),
                                            retryPolicyConfig: s,
                                            timeouts: u.accountResource,
                                            params: { common: { oauth: g.token, client: (0, ed._)(), device: (0, eT.V)(), language: m } },
                                        });
                                    return (
                                        (o.hooks = { beforeError: [(0, eG.o)(g, p), ...((null == o || null == (r = o.hooks) ? void 0 : r.beforeError) || [])] }),
                                        n(o, e.get(eV.Hm))
                                    );
                                },
                        ),
                    })
                    .register(
                        eV.CR,
                        (0, l.P9)(
                            (e) =>
                                function () {
                                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                    return e.get(eV.A4)(t, e.get(eV.gu));
                                },
                        ),
                    )
                    .registerMany({
                        [eV.$I]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eV.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(eV.Xc).getLanguage(),
                                l = e.get(eV.A4),
                                c = e.get(eV.y$),
                                u = l(),
                                s = e.get(eV.QG),
                                m = {
                                    prefixUrl: (0, i.getTldHost)(o, t, eB.B),
                                    retryPolicyConfig: g,
                                    timeouts: n.accountResource,
                                    params: { common: { oauth: s.token, client: (0, ed._)(), device: (0, eT.V)(), language: a } },
                                };
                            return c.cacheController ? new eu.wV(u, m, { cacheController: c.cacheController }) : new w.Q(u, m);
                        }),
                        [eV._1]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eV.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(eV.Xc).getLanguage(),
                                l = e.get(eV.A4)(),
                                c = e.get(eV.QG);
                            return new G.d(l, {
                                prefixUrl: (0, i.getTldHost)(o, t, eB.B),
                                retryPolicyConfig: g,
                                timeouts: n.usersResource,
                                params: { common: { oauth: c.token, client: (0, ed._)(), device: (0, eT.V)(), language: a } },
                            });
                        }),
                        [eV.V3]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eV.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(eV.Xc).getLanguage(),
                                l = e.get(eV.A4)(),
                                c = e.get(eV.QG),
                                u = e.get(eV.y$),
                                s = {
                                    prefixUrl: (0, i.getTldHost)(o, t, eB.B),
                                    retryPolicyConfig: g,
                                    timeouts: n.landingResource,
                                    params: { common: { oauth: c.token, client: (0, ed._)(), device: (0, eT.V)(), language: a } },
                                };
                            return new eu.o7(l, s, {
                                hooks: u.hooks,
                                variables: {
                                    get tracksController() {
                                        return u.tracksController;
                                    },
                                    get cacheController() {
                                        var m;
                                        return null != (m = u.cacheController) ? m : null;
                                    },
                                },
                            });
                        }),
                        [eV.Lb]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eV.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(eV.Xc).getLanguage(),
                                l = e.get(eV.A4)(),
                                c = e.get(eV.QG);
                            return new A.H(l, {
                                prefixUrl: (0, i.getTldHost)(o, t, eB.B),
                                retryPolicyConfig: g,
                                timeouts: n.landing3Resource,
                                params: { common: { oauth: c.token, client: (0, ed._)(), device: (0, eT.V)(), language: a } },
                            });
                        }),
                        [eV.tz]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eV.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(eV.Xc).getLanguage(),
                                l = e.get(eV.A4)(),
                                c = e.get(eV.QG);
                            return new x.B(l, {
                                prefixUrl: (0, i.getTldHost)(o, t, eB.B),
                                retryPolicyConfig: g,
                                timeouts: n.albumsResource,
                                params: { common: { oauth: c.token, client: (0, ed._)(), device: (0, eT.V)(), language: a } },
                            });
                        }),
                        [eV.$8]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eV.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(eV.Xc).getLanguage(),
                                l = e.get(eV.A4)(),
                                c = e.get(eV.QG);
                            return new f.w(l, {
                                prefixUrl: (0, i.getTldHost)(o, t, eB.B),
                                retryPolicyConfig: g,
                                timeouts: n.libraryResource,
                                params: { common: { oauth: c.token, client: (0, ed._)(), device: (0, eT.V)(), language: a } },
                            });
                        }),
                        [eV.Oo]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eV.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(eV.Xc).getLanguage(),
                                l = e.get(eV.A4)(),
                                c = e.get(eV.QG);
                            return new h.L(l, {
                                prefixUrl: (0, i.getTldHost)(o, t, eB.B),
                                retryPolicyConfig: g,
                                timeouts: n.tracksResource,
                                params: { common: { oauth: c.token, client: (0, ed._)(), device: (0, eT.V)(), language: a } },
                            });
                        }),
                        [eV.$5]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eV.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(eV.Xc).getLanguage(),
                                l = e.get(eV.A4)(),
                                c = e.get(eV.QG);
                            return new v._(l, {
                                prefixUrl: (0, i.getTldHost)(o, t, eB.B),
                                retryPolicyConfig: g,
                                timeouts: n.availabilityResource,
                                params: { common: { oauth: c.token, client: (0, ed._)(), device: (0, eT.V)(), language: a } },
                            });
                        }),
                        [eV.qT]: (0, l.Gr)((e) => {
                            let { resources: r, player: o } = e.get(eV.tw),
                                { prefixUrl: n, timeouts: g, retryPolicyConfig: a } = r.musicExternalApi,
                                l = e.get(eV.Xc).getLanguage(),
                                c = e.get(eV.A4)(),
                                u = e.get(eV.QG),
                                s = e.get(eV.y$),
                                m = e.get(eV.oo),
                                p = {
                                    prefixUrl: (0, i.getTldHost)(n, t, eB.B),
                                    retryPolicyConfig: a,
                                    timeouts: g.getFileInfoResource,
                                    params: { common: { oauth: u.token, client: (0, ed._)(), device: (0, eT.V)(), language: l } },
                                },
                                d = s.repositoryContainer.fileStorage,
                                w = s.repositoryContainer.tracksRepository,
                                G = s.repositoryContainer.usersTracksRepository;
                            return d && w && G
                                ? new eu.d7(c, p, {
                                      fileStorage: d,
                                      tracksRepository: w,
                                      usersTracksRepository: G,
                                      hooks: s.hooks,
                                      variables: {
                                          get uid() {
                                              return m.get(e_.c.YmUid);
                                          },
                                          secretKey: o.secretKey,
                                      },
                                  })
                                : new k.v(c, p);
                        }),
                        [eV.X4]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eV.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(eV.Xc).getLanguage(),
                                l = e.get(eV.A4)(),
                                c = e.get(eV.QG);
                            return new U.a(l, {
                                prefixUrl: (0, i.getTldHost)(o, t, eB.B),
                                retryPolicyConfig: g,
                                timeouts: n.topResource,
                                params: { common: { oauth: c.token, client: (0, ed._)(), device: (0, eT.V)(), language: a } },
                            });
                        }),
                        [eV.O9]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eV.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(eV.Xc).getLanguage(),
                                l = e.get(eV.A4)(),
                                c = e.get(eV.QG);
                            return new E.b(l, {
                                prefixUrl: (0, i.getTldHost)(o, t, eB.B),
                                retryPolicyConfig: g,
                                timeouts: n.artistsResource,
                                params: { common: { oauth: c.token, client: (0, ed._)(), device: (0, eT.V)(), language: a } },
                            });
                        }),
                        [eV.E]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eV.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(eV.Xc).getLanguage(),
                                l = e.get(eV.A4)(),
                                c = e.get(eV.QG);
                            return new L.V(l, {
                                prefixUrl: (0, i.getTldHost)(o, t, eB.B),
                                retryPolicyConfig: g,
                                timeouts: n.slidesResource,
                                params: { common: { oauth: c.token, client: (0, ed._)(), device: (0, eT.V)(), language: a } },
                            });
                        }),
                        [eV.wH]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eV.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(eV.Xc).getLanguage(),
                                l = e.get(eV.A4),
                                c = e.get(eV.QG),
                                u = l();
                            return new H.c(u, {
                                prefixUrl: (0, i.getTldHost)(o, t, eB.B),
                                retryPolicyConfig: g,
                                timeouts: n.redAlertResource,
                                params: { common: { oauth: c.token, client: (0, ed._)(), device: (0, eT.V)(), language: a } },
                            });
                        }),
                        [eV.ok]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eV.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(eV.Xc).getLanguage(),
                                l = e.get(eV.A4)(),
                                c = e.get(eV.QG);
                            return new R.Z(l, {
                                prefixUrl: (0, i.getTldHost)(o, t, eB.B),
                                retryPolicyConfig: g,
                                timeouts: n.rotorResource,
                                params: { common: { oauth: c.token, client: (0, ed._)(), device: (0, eT.V)(), language: a } },
                            });
                        }),
                        [eV.yq]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eV.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(eV.Xc).getLanguage(),
                                l = e.get(eV.A4)(),
                                c = e.get(eV.QG);
                            return new T.p(l, {
                                prefixUrl: (0, i.getTldHost)(o, t, eB.B),
                                retryPolicyConfig: g,
                                timeouts: n.searchResource,
                                params: { common: { oauth: c.token, client: (0, ed._)(), device: (0, eT.V)(), language: a } },
                            });
                        }),
                        [eV.NN]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eV.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(eV.Xc).getLanguage(),
                                l = e.get(eV.A4)(),
                                c = e.get(eV.QG);
                            return new _.v(l, {
                                prefixUrl: (0, i.getTldHost)(o, t, eB.B),
                                retryPolicyConfig: g,
                                timeouts: n.searchResource,
                                params: { common: { oauth: c.token, client: (0, ed._)(), device: (0, eT.V)(), language: a } },
                            });
                        }),
                        [eV.qN]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eV.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(eV.Xc).getLanguage(),
                                l = e.get(eV.A4)(),
                                c = e.get(eV.QG);
                            return new B.T(l, {
                                prefixUrl: (0, i.getTldHost)(o, t, eB.B),
                                retryPolicyConfig: g,
                                timeouts: n.playlistResource,
                                params: { common: { oauth: c.token, client: (0, ed._)(), device: (0, eT.V)(), language: a } },
                            });
                        }),
                        [eV.ro]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eV.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(eV.Xc).getLanguage(),
                                l = e.get(eV.A4)(),
                                c = e.get(eV.QG);
                            return new Q.e(l, {
                                prefixUrl: (0, i.getTldHost)(o, t, eB.B),
                                retryPolicyConfig: g,
                                timeouts: n.playlistsResource,
                                params: { common: { oauth: c.token, client: (0, ed._)(), device: (0, eT.V)(), language: a } },
                            });
                        }),
                        [eV.nM]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eV.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(eV.Xc).getLanguage(),
                                l = e.get(eV.A4)(),
                                c = e.get(eV.QG);
                            return new V.o(l, {
                                prefixUrl: (0, i.getTldHost)(o, t, eB.B),
                                retryPolicyConfig: g,
                                timeouts: n.pinResource,
                                params: { common: { oauth: c.token, client: (0, ed._)(), device: (0, eT.V)(), language: a } },
                            });
                        }),
                        [eV.Ut]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eV.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(eV.Xc).getLanguage(),
                                l = e.get(eV.A4)(),
                                c = e.get(eV.QG);
                            return new X.$(l, {
                                prefixUrl: (0, i.getTldHost)(o, t, eB.B),
                                retryPolicyConfig: g,
                                timeouts: n.metatagsResource,
                                params: { common: { oauth: c.token, client: (0, ed._)(), device: (0, eT.V)(), language: a } },
                            });
                        }),
                        [eV.K1]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eV.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(eV.Xc).getLanguage(),
                                l = e.get(eV.A4)(),
                                c = e.get(eV.QG);
                            return new y.p(l, {
                                prefixUrl: (0, i.getTldHost)(o, t, eB.B),
                                retryPolicyConfig: g,
                                timeouts: n.tagResource,
                                params: { common: { oauth: c.token, client: (0, ed._)(), device: (0, eT.V)(), language: a } },
                            });
                        }),
                        [eV.eu]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eV.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(eV.Xc).getLanguage(),
                                l = e.get(eV.A4)(),
                                c = e.get(eV.QG);
                            return new C.D(l, {
                                prefixUrl: (0, i.getTldHost)(o, t, eB.B),
                                retryPolicyConfig: g,
                                timeouts: n.feedResource,
                                params: { common: { oauth: c.token, client: (0, ed._)(), device: (0, eT.V)(), language: a } },
                            });
                        }),
                        [eV.aE]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eV.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(eV.Xc).getLanguage(),
                                l = e.get(eV.A4)(),
                                c = e.get(eV.QG),
                                u = e.get(eV.y$),
                                s = new b.l(l, {
                                    prefixUrl: (0, i.getTldHost)(o, t, eB.B),
                                    retryPolicyConfig: g,
                                    timeouts: n.pinsResource,
                                    params: { common: { oauth: c.token, client: (0, ed._)(), device: (0, eT.V)(), language: a } },
                                });
                            return u.cacheController
                                ? (0, eu._2)({
                                      resource: s,
                                      cacheController: u.cacheController,
                                      config: { common: { resourceName: b.l.constructor.name }, enabled: !0, priority: eu.OU.HIGH, ttl: 6048e5 },
                                  })
                                : s;
                        }),
                        [eV.ki]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eV.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(eV.Xc).getLanguage(),
                                l = e.get(eV.A4)(),
                                c = e.get(eV.QG);
                            return new P.I(l, {
                                prefixUrl: (0, i.getTldHost)(o, t, eB.B),
                                retryPolicyConfig: g,
                                timeouts: n.musicHistoryResource,
                                params: { common: { oauth: c.token, client: (0, ed._)(), device: (0, eT.V)(), language: a } },
                            });
                        }),
                        [eV.c9]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eV.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(eV.Xc).getLanguage(),
                                l = e.get(eV.A4)(),
                                c = e.get(eV.QG);
                            return new D.s(l, {
                                prefixUrl: (0, i.getTldHost)(o, t, eB.B),
                                retryPolicyConfig: g,
                                timeouts: n.dynamicPagesResource,
                                params: { common: { oauth: c.token, client: (0, ed._)(), device: (0, eT.V)(), language: a } },
                            });
                        }),
                        [eV.en]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eV.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(eV.Xc).getLanguage(),
                                l = e.get(eV.A4)(),
                                c = e.get(eV.QG);
                            return new M.B(l, {
                                prefixUrl: (0, i.getTldHost)(o, t, eB.B),
                                retryPolicyConfig: g,
                                timeouts: n.chartResource,
                                params: { common: { oauth: c.token, client: (0, ed._)(), device: (0, eT.V)(), language: a } },
                            });
                        }),
                        [eV.jQ]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eV.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(eV.Xc).getLanguage(),
                                l = e.get(eV.A4)(),
                                c = e.get(eV.QG);
                            return new S._(l, {
                                prefixUrl: (0, i.getTldHost)(o, t, eB.B),
                                retryPolicyConfig: g,
                                timeouts: n.clipsResource,
                                params: { common: { oauth: c.token, client: (0, ed._)(), device: (0, eT.V)(), language: a } },
                            });
                        }),
                        [eV.cZ]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eV.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(eV.Xc).getLanguage(),
                                l = e.get(eV.A4)(),
                                c = e.get(eV.QG);
                            return new q.c(l, {
                                prefixUrl: (0, i.getTldHost)(o, t, eB.B),
                                retryPolicyConfig: g,
                                timeouts: n.lyricViewsResource,
                                params: { common: { oauth: c.token, client: (0, ed._)(), device: (0, eT.V)(), language: a } },
                            });
                        }),
                        [eV.Zl]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eV.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(eV.Xc).getLanguage(),
                                l = e.get(eV.A4)(),
                                c = e.get(eV.QG);
                            return new N.D(l, {
                                prefixUrl: (0, i.getTldHost)(o, t, eB.B),
                                retryPolicyConfig: g,
                                timeouts: n.nonMusicResource,
                                params: { common: { oauth: c.token, client: (0, ed._)(), device: (0, eT.V)(), language: a } },
                            });
                        }),
                        [eV.CN]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eV.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(eV.Xc).getLanguage(),
                                l = e.get(eV.A4)(),
                                c = e.get(eV.QG);
                            return new Z.N(l, {
                                prefixUrl: (0, i.getTldHost)(o, t, eB.B),
                                retryPolicyConfig: g,
                                timeouts: n.donationResource,
                                params: { common: { oauth: c.token, client: (0, ed._)(), device: (0, eT.V)(), language: a } },
                            });
                        }),
                        [eV.JM]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eV.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(eV.Xc).getLanguage(),
                                l = e.get(eV.A4)(),
                                c = e.get(eV.QG);
                            return new $.c(l, {
                                prefixUrl: (0, i.getTldHost)(o, t, eB.B),
                                retryPolicyConfig: g,
                                timeouts: n.streamsResource,
                                params: { common: { oauth: c.token, client: (0, ed._)(), device: (0, eT.V)(), language: a } },
                            });
                        }),
                        [eV.P1]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eV.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(eV.Xc).getLanguage(),
                                l = e.get(eV.A4)(),
                                c = e.get(eV.QG);
                            return new O.S(l, {
                                prefixUrl: (0, i.getTldHost)(o, t, eB.B),
                                retryPolicyConfig: g,
                                timeouts: n.loaderResource,
                                params: { common: { oauth: c.token, client: (0, ed._)(), device: (0, eT.V)(), language: a } },
                            });
                        }),
                        [eV.re]: (0, l.Gr)((e) => {
                            let { resources: t } = e.get(eV.tw),
                                { timeouts: r, retryPolicyConfig: o } = t.musicExternalApi,
                                n = e.get(eV.Xc).getLanguage(),
                                g = e.get(eV.A4)({ credentials: 'omit' });
                            return new Y.s(g, {
                                prefixUrl: '',
                                retryPolicyConfig: o,
                                timeouts: r.prefixlessResource,
                                params: { common: { client: (0, ed._)(), device: (0, eT.V)(), language: n } },
                            });
                        }),
                        [eV.Lk]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eV.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(eV.Xc).getLanguage(),
                                l = e.get(eV.A4)(),
                                c = e.get(eV.QG);
                            return new W.g(l, {
                                prefixUrl: (0, i.getTldHost)(o, t, eB.B),
                                retryPolicyConfig: g,
                                timeouts: n.filtersResource,
                                params: { common: { oauth: c.token, client: (0, ed._)(), device: (0, eT.V)(), language: a } },
                            });
                        }),
                        [eV.uM]: (0, l.Gr)((e) => {
                            var t;
                            let { acqOffers: r, rumSettings: n } = e.get(eV.tw),
                                { brand: g, service: i, environment: a, appVersion: l } = r,
                                { platform: c, page: u } = n,
                                s = e.get(eV.QG),
                                m = e.get(eV.Xc).getLanguage(),
                                p = e.get(eV.A4),
                                d = s.token || null,
                                w = p({ credentials: 'omit' }),
                                { request_id: G, puid: A } = null != (t = e.get(eV.Zi).getStore()) ? t : {};
                            return new o.mZ({
                                brand: g,
                                service: i,
                                environment: a,
                                appVersion: l,
                                etld: 'yandex.net',
                                platform: 'Desktop',
                                lang: m,
                                oAuthToken: d,
                                authMethod: 'oauth',
                                requester: (0, eX.n)(w),
                                puid: (null == A ? void 0 : A.toString()) || null,
                                rumOptions: { platform: c, page: u, requestId: G },
                            });
                        }),
                        [eV.$$]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eV.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(eV.Xc).getLanguage(),
                                l = e.get(eV.A4)(),
                                c = e.get(eV.QG);
                            return new z.E(l, {
                                prefixUrl: (0, i.getTldHost)(o, t, eB.B),
                                retryPolicyConfig: g,
                                timeouts: n.ugcResource,
                                params: { common: { oauth: c.token, client: (0, ed._)(), language: a } },
                            });
                        }),
                        [eV.sv]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eV.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(eV.Xc).getLanguage(),
                                l = e.get(eV.A4)(),
                                c = e.get(eV.QG);
                            return new I.L(l, {
                                prefixUrl: (0, i.getTldHost)(o, t, eB.B),
                                retryPolicyConfig: g,
                                timeouts: n.collectionResource,
                                params: { common: { oauth: c.token, client: (0, ed._)(), device: (0, eT.V)(), language: a } },
                            });
                        }),
                        [eV.gd]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eV.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(eV.Xc).getLanguage(),
                                l = e.get(eV.A4)(),
                                c = e.get(eV.QG);
                            return new K.z(l, {
                                prefixUrl: (0, i.getTldHost)(o, t, eB.B),
                                retryPolicyConfig: g,
                                timeouts: n.adsResource,
                                params: { common: { oauth: c.token, client: (0, ed._)(), device: (0, eT.V)(), language: a } },
                            });
                        }),
                        [eV.EN]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eV.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(eV.Xc).getLanguage(),
                                l = e.get(eV.A4)(),
                                c = e.get(eV.QG);
                            return new J._(l, {
                                prefixUrl: (0, i.getTldHost)(o, t, eB.B),
                                retryPolicyConfig: g,
                                timeouts: n.afterTrackResource,
                                params: { common: { oauth: c.token, client: (0, ed._)(), device: (0, eT.V)(), language: a } },
                            });
                        }),
                        [eV.Ez]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eV.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(eV.Xc).getLanguage(),
                                l = e.get(eV.A4)(),
                                c = e.get(eV.QG);
                            return new F.l(l, {
                                prefixUrl: (0, i.getTldHost)(o, t, eB.B),
                                retryPolicyConfig: g,
                                timeouts: n.personalResource,
                                params: { common: { oauth: c.token, client: (0, ed._)(), device: (0, eT.V)(), language: a } },
                            });
                        }),
                        [eV.N1]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eV.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(eV.Xc).getLanguage(),
                                l = e.get(eV.A4)(),
                                c = e.get(eV.QG),
                                u = e.get(eV.y$),
                                s = new j.H(l, {
                                    prefixUrl: (0, i.getTldHost)(o, t, eB.B),
                                    retryPolicyConfig: g,
                                    timeouts: n.disclaimersResource,
                                    params: { common: { oauth: c.token, client: (0, ed._)(), device: (0, eT.V)(), language: a } },
                                });
                            return u.cacheController
                                ? (0, eu._2)({
                                      resource: s,
                                      cacheController: u.cacheController,
                                      config: { common: { resourceName: j.H.constructor.name }, enabled: !0, priority: eu.OU.HIGH, ttl: 6048e5 },
                                  })
                                : s;
                        }),
                        [eV.u2]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eV.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(eV.Xc).getLanguage(),
                                l = e.get(eV.A4)(),
                                c = e.get(eV.QG);
                            return new ee.J(l, {
                                prefixUrl: (0, i.getTldHost)(o, t, eB.B),
                                retryPolicyConfig: g,
                                timeouts: n.familyResource,
                                params: { common: { oauth: c.token, client: (0, ed._)(), device: (0, eT.V)(), language: a } },
                            });
                        }),
                        [eV.TD]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eV.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(eV.Xc).getLanguage(),
                                l = e.get(eV.A4)(),
                                c = e.get(eV.QG);
                            return new et.L(l, {
                                prefixUrl: (0, i.getTldHost)(o, t, eB.B),
                                retryPolicyConfig: g,
                                timeouts: n.childrenLandingResource,
                                params: { common: { oauth: c.token, client: (0, ed._)(), device: (0, eT.V)(), language: a } },
                            });
                        }),
                        [eV.wK]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eV.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(eV.Xc).getLanguage(),
                                l = e.get(eV.A4)(),
                                c = e.get(eV.QG);
                            return new er.u(l, {
                                prefixUrl: (0, i.getTldHost)(o, t, eB.B),
                                retryPolicyConfig: g,
                                timeouts: n.landingBlocksResource,
                                params: { common: { oauth: c.token, client: (0, ed._)(), device: (0, eT.V)(), language: a } },
                            });
                        }),
                        [eV.dh]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eV.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(eV.Xc).getLanguage(),
                                l = e.get(eV.A4)(),
                                c = e.get(eV.QG);
                            return new eo.q(l, {
                                prefixUrl: (0, i.getTldHost)(o, t, eB.B),
                                retryPolicyConfig: g,
                                timeouts: n.promoResource,
                                params: { common: { oauth: c.token, client: (0, ed._)(), device: (0, eT.V)(), language: a } },
                            });
                        }),
                        [eV.LC]: (0, l.Gr)((e) => {
                            let { resources: t, player: r } = e.get(eV.tw),
                                { timeouts: o, retryPolicyConfig: n } = t.musicExternalApi,
                                g = e.get(eV.CR)({ credentials: 'include' });
                            return new en.g(g, {
                                prefixUrl: r.telemetry.telemetryUrl,
                                retryPolicyConfig: n,
                                timeouts: o.telemetryResouce,
                                params: { common: { client: (0, ed._)() } },
                            });
                        }),
                        [eV.W5]: (0, l.Gr)((e) => {
                            let { resources: t, player: r } = e.get(eV.tw),
                                { retryPolicyConfig: o } = t.musicExternalApi,
                                n = e.get(eV.CR)({ credentials: 'include' });
                            return new eg.N(n, { prefixUrl: r.telemetry.rumUrl, retryPolicyConfig: o, params: { common: { client: (0, ed._)() } } });
                        }),
                        [eV.PL]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eV.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(eV.Xc).getLanguage(),
                                l = e.get(eV.A4)(),
                                c = e.get(eV.QG);
                            return new ei.w(l, {
                                prefixUrl: (0, i.getTldHost)(o, t, eB.B),
                                retryPolicyConfig: g,
                                timeouts: n.labelsResource,
                                params: { common: { oauth: c.token, client: (0, ed._)(), device: (0, eT.V)(), language: a } },
                            });
                        }),
                        [eV.DT]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eV.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(eV.Xc).getLanguage(),
                                l = e.get(eV.A4)(),
                                c = e.get(eV.QG);
                            return new ea.O(l, {
                                prefixUrl: (0, i.getTldHost)(o, t, eB.B),
                                retryPolicyConfig: g,
                                timeouts: n.concertsResource,
                                params: { common: { oauth: c.token, client: (0, ed._)(), device: (0, eT.V)(), language: a } },
                            });
                        }),
                        [eV.dA]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eV.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(eV.Xc).getLanguage(),
                                l = e.get(eV.A4)(),
                                c = e.get(eV.QG);
                            return new el.Q(l, {
                                prefixUrl: (0, i.getTldHost)(o, t, eB.B),
                                retryPolicyConfig: g,
                                timeouts: n.wordsResource,
                                params: { common: { oauth: c.token, client: (0, ed._)(), device: (0, eT.V)(), language: a } },
                            });
                        }),
                        [eV.$Y]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eV.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(eV.Xc).getLanguage(),
                                l = e.get(eV.A4)(),
                                c = e.get(eV.QG);
                            return new ec.C(l, {
                                prefixUrl: (0, i.getTldHost)(o, t, eB.B),
                                retryPolicyConfig: g,
                                timeouts: n.wheelResource,
                                params: { common: { oauth: c.token, client: (0, ed._)(), device: (0, eT.V)(), language: a } },
                            });
                        }),
                        [eV.vg]: (0, l.Gr)(() => (0, em.a)()),
                    })
                    .register(
                        eV.ff,
                        (0, l.Gr)((e) => {
                            let t = e.get(eV.N1);
                            return new c.AS({ dataSource: new eh.C(t) });
                        }),
                    )
                    .registerMany({
                        [eV.UB]: (0, l.Gr)((e) => {
                            let t = e.get(eV.vg);
                            return new d.B(t);
                        }),
                        [eV.Tq]: (0, l.Gr)((e) => {
                            var t;
                            let r = e.get(eV.W5);
                            return (null == (t = window.Ya) ? void 0 : t.Rum) ? new d.G((0, ep.y)(), r, window.Ya.Rum) : null;
                        }),
                    })
                    .register(
                        eV.by,
                        (0, l.Gr)((e) => {
                            let t = e.get(eV.oo),
                                r = e.get(eV.U2),
                                o = e.get(eV.Zf),
                                i = r.get(e_.c.YnisonDeviceId);
                            i || ((i = (0, g.A)()), r.set(e_.c.YnisonDeviceId, i));
                            let a = {
                                    info: { app_name: 'Desktop', app_version: (0, eR.H)() || '', title: 'Music Desktop App', device_id: i, type: n.bq.WEB_DESKTOP },
                                    volumeGranularity: 20,
                                    get defaultVolume() {
                                        var l;
                                        return null != (l = t.get(e_.c.YmPlayerVolume)) ? l : void 0;
                                    },
                                },
                                c = e.get(eV.WA).getPassportUid(),
                                u = e.get(eV.QG),
                                s = e.get(eV.UB),
                                m = e.get(eV.Tq),
                                p = [new n.zT(s)];
                            return (
                                m && p.push(new n.qP(m)),
                                new n.Jd({
                                    logger: o,
                                    deviceConfig: a,
                                    multiAuthUserId: c,
                                    oauth: u.token,
                                    ynisonConnectionConfig: eD.ynisonConnectionConfig,
                                    metricsTransport: p,
                                    variables: { isShadow: !0 },
                                })
                            );
                        }),
                    );
            }
        },
    },
]);
