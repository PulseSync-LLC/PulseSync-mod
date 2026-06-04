'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9417],
    {
        19417: (e, t, r) => {
            r.d(t, { createDesktopContainer: () => eS });
            var o = r(32732),
                n = r(63283),
                g = r(27576),
                i = r(82736),
                a = r(73202),
                l = r(7333),
                c = r(26252),
                u = r(5924),
                s = r(19731),
                m = r(47755),
                p = r(31958),
                d = r(52231),
                w = r(34097),
                G = r(97290),
                A = r(35268),
                x = r(15912),
                f = r(42750),
                h = r(38979),
                k = r(57466),
                v = r(36090),
                U = r(31038),
                E = r(46510),
                L = r(50808),
                R = r(70233),
                H = r(37558),
                T = r(8368),
                _ = r(74503),
                B = r(41816),
                V = r(67982),
                Q = r(66838),
                X = r(16128),
                y = r(99146),
                C = r(78484),
                b = r(51432),
                P = r(82669),
                D = r(58693),
                M = r(40482),
                S = r(10894),
                q = r(50581),
                N = r(71943),
                Z = r(24956),
                $ = r(51770),
                O = r(12690),
                Y = r(90662),
                z = r(90926),
                W = r(85750),
                I = r(72864),
                K = r(84706),
                J = r(68846),
                F = r(67700),
                j = r(30742),
                ee = r(83092),
                et = r(90591),
                er = r(59757),
                eo = r(4990),
                en = r(33534),
                eg = r(64642),
                ei = r(65866),
                ea = r(96002),
                el = r(76198),
                ec = r(37694),
                eu = r(14031),
                es = r(54874),
                em = r(44547),
                ep = r(54280),
                ed = r(19964),
                ew = r(25500),
                eG = r(32629),
                eA = r(91407),
                ex = r(51053),
                ef = r(12583),
                eh = r(75887),
                ek = r(61933),
                ev = r(80950),
                eU = r(95564);
            class eE {
                onChangeLanguage() {
                    window.location.reload();
                }
            }
            var eL = r(73422),
                eR = r(48193),
                eH = r(70253),
                eT = r(92023),
                e_ = r(11541),
                eB = r(39472),
                eV = r(26518),
                eQ = r(19379),
                eX = r(19053),
                ey = r(10410),
                eC = r(70204),
                eb = r(7736),
                eP = r(61048),
                eD = r(9340),
                eM = r(51486);
            async function eS(e) {
                let { tld: t, env: eS } = e,
                    eq = (0, eM.J)(await (0, ek.z)(eS)),
                    eN = await (0, eh.B)(eS),
                    eZ = {};
                return new l.Dt()
                    .registerMany({
                        [eC.SX]: (0, l.Gr)(() => eS),
                        [eC.tw]: (0, l.Gr)(() => eq),
                        [eC.P0]: (0, l.Gr)(() => new a.q(eN)),
                        [eC.Zi]: (0, l.Gr)(() => new eU.Y(eZ)),
                    })
                    .register(
                        eC.WA,
                        (0, l.Gr)((e) => {
                            let t = e.get(eC.Zi);
                            return new ey.V(t);
                        }),
                    )
                    .registerMany({
                        [eC.Zf]: (0, l.Gr)((e) => {
                            let t = e.get(eC.P0).get(ef.qV);
                            return new p.r({
                                maxLogLevel: m.cm.DEBUG,
                                secureFields: eH.x,
                                disableLogToConsole: !t,
                                additionalData: {
                                    get puid() {
                                        return e.get(eC.WA).getPassportUid();
                                    },
                                },
                            });
                        }),
                        [eC.RG]: (0, l.Gr)(async (e) => {
                            let {
                                mocks: { enabled: o, mocksProviderUrl: n, urlCapturePattern: g },
                            } = e.get(eC.tw);
                            if (!o) return () => Promise.resolve(null);
                            let { initMocks: a } = await Promise.all([r.e(1307), r.e(3627)]).then(r.bind(r, 23627)),
                                l = e.get(eC.U2),
                                c = e.get(eC.Zf),
                                u = 'production' === e.get(eC.SX) ? '/rsc-cache-worker.js' : '',
                                s = () => {
                                    var e;
                                    return null != (e = l.get(eQ.c.MocksConfiguration, !1)) ? e : null;
                                };
                            return () =>
                                a({
                                    getMocksConfiguration: s,
                                    log: (e, t) => c.debug('[Mocks] | desktop: '.concat(e), t),
                                    mocksProviderUrl: n,
                                    serviceWorkerUrl: u,
                                    urlCapturePattern: (0, i.getTldHost)(g, t, eX.B),
                                }).catch((e) => c.debug('[Mocks] | desktop: initialization failed. '.concat(e)));
                        }),
                        [eC.TK]: (0, l.Gr)(
                            (e) =>
                                new ((0, eR.b)(p.r))({
                                    maxLogLevel: m.cm.DEBUG,
                                    secureFields: eH.x,
                                    disableLogToConsole: 'development' !== e.get(eC.SX),
                                    additionalData: {
                                        get puid() {
                                            return e.get(eC.WA).getPassportUid();
                                        },
                                    },
                                }),
                        ),
                        [eC.oo]: (0, l.Gr)(() => new ep.si()),
                        [eC.DP]: (0, l.Gr)(() => new ep.MJ('client '.concat('desktop'), 'cookie')),
                        [eC.U2]: (0, l.Gr)(() => new ep.si()),
                        [eC.vH]: (0, l.Gr)(() => new ep.fW()),
                        [eC.Xc]: (0, l.Gr)((e) => {
                            let t = e.get(eC.oo),
                                r = e.get(eC.Zf);
                            return new eL.E({
                                isBuildTypeDesktop: !0,
                                logger: r,
                                changeLanguageHandler: new eE(),
                                storage: {
                                    get: () => t.get(eQ.c.SavedUserLanguage),
                                    set(e) {
                                        t.set(eQ.c.SavedUserLanguage, e);
                                    },
                                },
                            });
                        }),
                    })
                    .registerMany({
                        [eC.y$]: (0, l.Gr)((e) => {
                            let t = e.get(eC.Zf),
                                r = e.get(eC.oo),
                                o = new em.Mz({
                                    config: { useEntitiesStorage: !0, useFileStorage: !0, useResponseCacheStorage: !0 },
                                    plugins: [new em.wK({ logger: t })],
                                });
                            return (
                                o.createCacheController({
                                    repositoryContainer: o.repositoryContainer,
                                    variables: {
                                        get uid() {
                                            return r.get(eQ.c.YmUid);
                                        },
                                        get isOffline() {
                                            return !!o.network.status.isOffline;
                                        },
                                    },
                                }),
                                o
                            );
                        }),
                        [eC.Hm]: (0, l.P9)(
                            () =>
                                function () {
                                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                    return new s.Q(e);
                                },
                        ),
                        [eC.gu]: (0, l.P9)(
                            () =>
                                function () {
                                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                    return new u.S(e);
                                },
                        ),
                    })
                    .registerMany({
                        [eC.QG]: (0, l.Gr)((e) => new eA.G(e.get(eC.oo), e.get(eC.tw), e.get(eC.Xc).getLanguage())),
                        [eC.OP]: (0, l.P9)(
                            (e) =>
                                function () {
                                    var t, r, o, n, g;
                                    let i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                        a = arguments.length > 1 ? arguments[1] : void 0,
                                        l = e.get(eC.Zf),
                                        c = e.get(eC.U2),
                                        u = new eH.N(l),
                                        {
                                            resources: { musicExternalApi: s },
                                        } = e.get(eC.tw);
                                    (i.timeout = s.defaultTimeout),
                                        (i.hooks = {
                                            afterResponse: [...((null == i || null == (t = i.hooks) ? void 0 : t.afterResponse) || [])],
                                            beforeError: [u.beforeErrorHook, ...((null == i || null == (r = i.hooks) ? void 0 : r.beforeError) || [])],
                                            beforeRequest: [eP.x, ...((null == i || null == (o = i.hooks) ? void 0 : o.beforeRequest) || [])],
                                            afterTimeout: [u.beforeErrorHook, ...((null == i || null == (n = i.hooks) ? void 0 : n.afterTimeout) || [])],
                                            beforeRetry: [eD.i, u.beforeRetryHook, ...((null == i || null == (g = i.hooks) ? void 0 : g.beforeRetry) || [])],
                                        });
                                    let m = a(i);
                                    return (0, em.sY)(m, {
                                        get isOffline() {
                                            return (0, e_.g)(c);
                                        },
                                    });
                                },
                        ),
                    })
                    .registerMany({
                        [eC.A4]: (0, l.P9)(
                            (e) =>
                                function () {
                                    var r;
                                    let o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e.get(eC.OP),
                                        g = e.get(eC.QG),
                                        { resources: a } = e.get(eC.tw),
                                        l = n({}, e.get(eC.Hm)),
                                        { prefixUrl: c, timeouts: u, retryPolicyConfig: s } = a.musicExternalApi,
                                        m = e.get(eC.Xc).getLanguage(),
                                        p = new w.Q(l, {
                                            prefixUrl: (0, i.getTldHost)(c, t, eX.B),
                                            retryPolicyConfig: s,
                                            timeouts: u.accountResource,
                                            params: { common: { oauth: g.token, client: (0, eG._)(), device: (0, eV.V)(), language: m } },
                                        });
                                    return (
                                        (o.hooks = { beforeError: [(0, ex.o)(g, p), ...((null == o || null == (r = o.hooks) ? void 0 : r.beforeError) || [])] }),
                                        n(o, e.get(eC.Hm))
                                    );
                                },
                        ),
                    })
                    .register(
                        eC.CR,
                        (0, l.P9)(
                            (e) =>
                                function () {
                                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                    return e.get(eC.A4)(t, e.get(eC.gu));
                                },
                        ),
                    )
                    .registerMany({
                        [eC.$I]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eC.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(eC.Xc).getLanguage(),
                                l = e.get(eC.A4),
                                c = e.get(eC.y$),
                                u = l(),
                                s = e.get(eC.QG),
                                m = {
                                    prefixUrl: (0, i.getTldHost)(o, t, eX.B),
                                    retryPolicyConfig: g,
                                    timeouts: n.accountResource,
                                    params: { common: { oauth: s.token, client: (0, eG._)(), device: (0, eV.V)(), language: a } },
                                };
                            return c.cacheController ? new em.wV(u, m, { cacheController: c.cacheController }) : new w.Q(u, m);
                        }),
                        [eC._1]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eC.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(eC.Xc).getLanguage(),
                                l = e.get(eC.A4)(),
                                c = e.get(eC.QG);
                            return new G.d(l, {
                                prefixUrl: (0, i.getTldHost)(o, t, eX.B),
                                retryPolicyConfig: g,
                                timeouts: n.usersResource,
                                params: { common: { oauth: c.token, client: (0, eG._)(), device: (0, eV.V)(), language: a } },
                            });
                        }),
                        [eC.V3]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eC.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(eC.Xc).getLanguage(),
                                l = e.get(eC.A4)(),
                                c = e.get(eC.QG),
                                u = e.get(eC.y$),
                                s = {
                                    prefixUrl: (0, i.getTldHost)(o, t, eX.B),
                                    retryPolicyConfig: g,
                                    timeouts: n.landingResource,
                                    params: { common: { oauth: c.token, client: (0, eG._)(), device: (0, eV.V)(), language: a } },
                                };
                            return new em.o7(l, s, {
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
                        [eC.Lb]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eC.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(eC.Xc).getLanguage(),
                                l = e.get(eC.A4)(),
                                c = e.get(eC.QG);
                            return new A.H(l, {
                                prefixUrl: (0, i.getTldHost)(o, t, eX.B),
                                retryPolicyConfig: g,
                                timeouts: n.landing3Resource,
                                params: { common: { oauth: c.token, client: (0, eG._)(), device: (0, eV.V)(), language: a } },
                            });
                        }),
                        [eC.tz]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eC.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(eC.Xc).getLanguage(),
                                l = e.get(eC.A4)(),
                                c = e.get(eC.QG);
                            return new x.B(l, {
                                prefixUrl: (0, i.getTldHost)(o, t, eX.B),
                                retryPolicyConfig: g,
                                timeouts: n.albumsResource,
                                params: { common: { oauth: c.token, client: (0, eG._)(), device: (0, eV.V)(), language: a } },
                            });
                        }),
                        [eC.$8]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eC.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(eC.Xc).getLanguage(),
                                l = e.get(eC.A4)(),
                                c = e.get(eC.QG);
                            return new f.w(l, {
                                prefixUrl: (0, i.getTldHost)(o, t, eX.B),
                                retryPolicyConfig: g,
                                timeouts: n.libraryResource,
                                params: { common: { oauth: c.token, client: (0, eG._)(), device: (0, eV.V)(), language: a } },
                            });
                        }),
                        [eC.Oo]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eC.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(eC.Xc).getLanguage(),
                                l = e.get(eC.A4)(),
                                c = e.get(eC.QG);
                            return new h.L(l, {
                                prefixUrl: (0, i.getTldHost)(o, t, eX.B),
                                retryPolicyConfig: g,
                                timeouts: n.tracksResource,
                                params: { common: { oauth: c.token, client: (0, eG._)(), device: (0, eV.V)(), language: a } },
                            });
                        }),
                        [eC.$5]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eC.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(eC.Xc).getLanguage(),
                                l = e.get(eC.A4)(),
                                c = e.get(eC.QG);
                            return new k._(l, {
                                prefixUrl: (0, i.getTldHost)(o, t, eX.B),
                                retryPolicyConfig: g,
                                timeouts: n.availabilityResource,
                                params: { common: { oauth: c.token, client: (0, eG._)(), device: (0, eV.V)(), language: a } },
                            });
                        }),
                        [eC.qT]: (0, l.Gr)((e) => {
                            let { resources: r, player: o } = e.get(eC.tw),
                                { prefixUrl: n, timeouts: g, retryPolicyConfig: a } = r.musicExternalApi,
                                l = e.get(eC.Xc).getLanguage(),
                                c = e.get(eC.A4)(),
                                u = e.get(eC.QG),
                                s = e.get(eC.y$),
                                m = e.get(eC.oo),
                                p = {
                                    prefixUrl: (0, i.getTldHost)(n, t, eX.B),
                                    retryPolicyConfig: a,
                                    timeouts: g.getFileInfoResource,
                                    params: { common: { oauth: u.token, client: (0, eG._)(), device: (0, eV.V)(), language: l } },
                                },
                                d = s.repositoryContainer.fileStorage,
                                w = s.repositoryContainer.tracksRepository,
                                G = s.repositoryContainer.usersTracksRepository;
                            return d && w && G
                                ? new em.d7(c, p, {
                                      fileStorage: d,
                                      tracksRepository: w,
                                      usersTracksRepository: G,
                                      hooks: s.hooks,
                                      variables: {
                                          get uid() {
                                              return m.get(eQ.c.YmUid);
                                          },
                                          secretKey: o.secretKey,
                                      },
                                  })
                                : new v.v(c, p);
                        }),
                        [eC.X4]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eC.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(eC.Xc).getLanguage(),
                                l = e.get(eC.A4)(),
                                c = e.get(eC.QG);
                            return new U.a(l, {
                                prefixUrl: (0, i.getTldHost)(o, t, eX.B),
                                retryPolicyConfig: g,
                                timeouts: n.topResource,
                                params: { common: { oauth: c.token, client: (0, eG._)(), device: (0, eV.V)(), language: a } },
                            });
                        }),
                        [eC.O9]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eC.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(eC.Xc).getLanguage(),
                                l = e.get(eC.A4)(),
                                c = e.get(eC.QG);
                            return new E.b(l, {
                                prefixUrl: (0, i.getTldHost)(o, t, eX.B),
                                retryPolicyConfig: g,
                                timeouts: n.artistsResource,
                                params: { common: { oauth: c.token, client: (0, eG._)(), device: (0, eV.V)(), language: a } },
                            });
                        }),
                        [eC.E]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eC.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(eC.Xc).getLanguage(),
                                l = e.get(eC.A4)(),
                                c = e.get(eC.QG);
                            return new L.V(l, {
                                prefixUrl: (0, i.getTldHost)(o, t, eX.B),
                                retryPolicyConfig: g,
                                timeouts: n.slidesResource,
                                params: { common: { oauth: c.token, client: (0, eG._)(), device: (0, eV.V)(), language: a } },
                            });
                        }),
                        [eC.wH]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eC.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(eC.Xc).getLanguage(),
                                l = e.get(eC.A4),
                                c = e.get(eC.QG),
                                u = l();
                            return new R.c(u, {
                                prefixUrl: (0, i.getTldHost)(o, t, eX.B),
                                retryPolicyConfig: g,
                                timeouts: n.redAlertResource,
                                params: { common: { oauth: c.token, client: (0, eG._)(), device: (0, eV.V)(), language: a } },
                            });
                        }),
                        [eC.ok]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eC.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(eC.Xc).getLanguage(),
                                l = e.get(eC.A4)(),
                                c = e.get(eC.QG);
                            return new H.Z(l, {
                                prefixUrl: (0, i.getTldHost)(o, t, eX.B),
                                retryPolicyConfig: g,
                                timeouts: n.rotorResource,
                                params: { common: { oauth: c.token, client: (0, eG._)(), device: (0, eV.V)(), language: a } },
                            });
                        }),
                        [eC.yq]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eC.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(eC.Xc).getLanguage(),
                                l = e.get(eC.A4)(),
                                c = e.get(eC.QG);
                            return new T.p(l, {
                                prefixUrl: (0, i.getTldHost)(o, t, eX.B),
                                retryPolicyConfig: g,
                                timeouts: n.searchResource,
                                params: { common: { oauth: c.token, client: (0, eG._)(), device: (0, eV.V)(), language: a } },
                            });
                        }),
                        [eC.NN]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eC.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(eC.Xc).getLanguage(),
                                l = e.get(eC.A4)(),
                                c = e.get(eC.QG);
                            return new _.v(l, {
                                prefixUrl: (0, i.getTldHost)(o, t, eX.B),
                                retryPolicyConfig: g,
                                timeouts: n.searchResource,
                                params: { common: { oauth: c.token, client: (0, eG._)(), device: (0, eV.V)(), language: a } },
                            });
                        }),
                        [eC.qN]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eC.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(eC.Xc).getLanguage(),
                                l = e.get(eC.A4)(),
                                c = e.get(eC.QG);
                            return new B.T(l, {
                                prefixUrl: (0, i.getTldHost)(o, t, eX.B),
                                retryPolicyConfig: g,
                                timeouts: n.playlistResource,
                                params: { common: { oauth: c.token, client: (0, eG._)(), device: (0, eV.V)(), language: a } },
                            });
                        }),
                        [eC.ro]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eC.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(eC.Xc).getLanguage(),
                                l = e.get(eC.A4)(),
                                c = e.get(eC.QG);
                            return new V.e(l, {
                                prefixUrl: (0, i.getTldHost)(o, t, eX.B),
                                retryPolicyConfig: g,
                                timeouts: n.playlistsResource,
                                params: { common: { oauth: c.token, client: (0, eG._)(), device: (0, eV.V)(), language: a } },
                            });
                        }),
                        [eC.nM]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eC.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(eC.Xc).getLanguage(),
                                l = e.get(eC.A4)(),
                                c = e.get(eC.QG);
                            return new Q.o(l, {
                                prefixUrl: (0, i.getTldHost)(o, t, eX.B),
                                retryPolicyConfig: g,
                                timeouts: n.pinResource,
                                params: { common: { oauth: c.token, client: (0, eG._)(), device: (0, eV.V)(), language: a } },
                            });
                        }),
                        [eC.Ut]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eC.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(eC.Xc).getLanguage(),
                                l = e.get(eC.A4)(),
                                c = e.get(eC.QG);
                            return new X.$(l, {
                                prefixUrl: (0, i.getTldHost)(o, t, eX.B),
                                retryPolicyConfig: g,
                                timeouts: n.metatagsResource,
                                params: { common: { oauth: c.token, client: (0, eG._)(), device: (0, eV.V)(), language: a } },
                            });
                        }),
                        [eC.K1]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eC.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(eC.Xc).getLanguage(),
                                l = e.get(eC.A4)(),
                                c = e.get(eC.QG);
                            return new y.p(l, {
                                prefixUrl: (0, i.getTldHost)(o, t, eX.B),
                                retryPolicyConfig: g,
                                timeouts: n.tagResource,
                                params: { common: { oauth: c.token, client: (0, eG._)(), device: (0, eV.V)(), language: a } },
                            });
                        }),
                        [eC.eu]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eC.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(eC.Xc).getLanguage(),
                                l = e.get(eC.A4)(),
                                c = e.get(eC.QG);
                            return new C.D(l, {
                                prefixUrl: (0, i.getTldHost)(o, t, eX.B),
                                retryPolicyConfig: g,
                                timeouts: n.feedResource,
                                params: { common: { oauth: c.token, client: (0, eG._)(), device: (0, eV.V)(), language: a } },
                            });
                        }),
                        [eC.aE]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eC.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(eC.Xc).getLanguage(),
                                l = e.get(eC.A4)(),
                                c = e.get(eC.QG),
                                u = e.get(eC.y$),
                                s = new b.l(l, {
                                    prefixUrl: (0, i.getTldHost)(o, t, eX.B),
                                    retryPolicyConfig: g,
                                    timeouts: n.pinsResource,
                                    params: { common: { oauth: c.token, client: (0, eG._)(), device: (0, eV.V)(), language: a } },
                                });
                            return u.cacheController
                                ? (0, em._2)({
                                      resource: s,
                                      cacheController: u.cacheController,
                                      config: { common: { resourceName: b.l.constructor.name }, enabled: !0, priority: em.OU.HIGH, ttl: 6048e5 },
                                  })
                                : s;
                        }),
                        [eC.ki]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eC.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(eC.Xc).getLanguage(),
                                l = e.get(eC.A4)(),
                                c = e.get(eC.QG);
                            return new P.I(l, {
                                prefixUrl: (0, i.getTldHost)(o, t, eX.B),
                                retryPolicyConfig: g,
                                timeouts: n.musicHistoryResource,
                                params: { common: { oauth: c.token, client: (0, eG._)(), device: (0, eV.V)(), language: a } },
                            });
                        }),
                        [eC.c9]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eC.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(eC.Xc).getLanguage(),
                                l = e.get(eC.A4)(),
                                c = e.get(eC.QG);
                            return new D.s(l, {
                                prefixUrl: (0, i.getTldHost)(o, t, eX.B),
                                retryPolicyConfig: g,
                                timeouts: n.dynamicPagesResource,
                                params: { common: { oauth: c.token, client: (0, eG._)(), device: (0, eV.V)(), language: a } },
                            });
                        }),
                        [eC.en]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eC.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(eC.Xc).getLanguage(),
                                l = e.get(eC.A4)(),
                                c = e.get(eC.QG);
                            return new M.B(l, {
                                prefixUrl: (0, i.getTldHost)(o, t, eX.B),
                                retryPolicyConfig: g,
                                timeouts: n.chartResource,
                                params: { common: { oauth: c.token, client: (0, eG._)(), device: (0, eV.V)(), language: a } },
                            });
                        }),
                        [eC.jQ]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eC.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(eC.Xc).getLanguage(),
                                l = e.get(eC.A4)(),
                                c = e.get(eC.QG);
                            return new S._(l, {
                                prefixUrl: (0, i.getTldHost)(o, t, eX.B),
                                retryPolicyConfig: g,
                                timeouts: n.clipsResource,
                                params: { common: { oauth: c.token, client: (0, eG._)(), device: (0, eV.V)(), language: a } },
                            });
                        }),
                        [eC.cZ]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eC.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(eC.Xc).getLanguage(),
                                l = e.get(eC.A4)(),
                                c = e.get(eC.QG);
                            return new q.c(l, {
                                prefixUrl: (0, i.getTldHost)(o, t, eX.B),
                                retryPolicyConfig: g,
                                timeouts: n.lyricViewsResource,
                                params: { common: { oauth: c.token, client: (0, eG._)(), device: (0, eV.V)(), language: a } },
                            });
                        }),
                        [eC.Zl]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eC.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(eC.Xc).getLanguage(),
                                l = e.get(eC.A4)(),
                                c = e.get(eC.QG);
                            return new N.D(l, {
                                prefixUrl: (0, i.getTldHost)(o, t, eX.B),
                                retryPolicyConfig: g,
                                timeouts: n.nonMusicResource,
                                params: { common: { oauth: c.token, client: (0, eG._)(), device: (0, eV.V)(), language: a } },
                            });
                        }),
                        [eC.CN]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eC.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(eC.Xc).getLanguage(),
                                l = e.get(eC.A4)(),
                                c = e.get(eC.QG);
                            return new Z.N(l, {
                                prefixUrl: (0, i.getTldHost)(o, t, eX.B),
                                retryPolicyConfig: g,
                                timeouts: n.donationResource,
                                params: { common: { oauth: c.token, client: (0, eG._)(), device: (0, eV.V)(), language: a } },
                            });
                        }),
                        [eC.JM]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eC.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(eC.Xc).getLanguage(),
                                l = e.get(eC.A4)(),
                                c = e.get(eC.QG);
                            return new $.c(l, {
                                prefixUrl: (0, i.getTldHost)(o, t, eX.B),
                                retryPolicyConfig: g,
                                timeouts: n.streamsResource,
                                params: { common: { oauth: c.token, client: (0, eG._)(), device: (0, eV.V)(), language: a } },
                            });
                        }),
                        [eC.P1]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eC.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(eC.Xc).getLanguage(),
                                l = e.get(eC.A4)(),
                                c = e.get(eC.QG);
                            return new O.S(l, {
                                prefixUrl: (0, i.getTldHost)(o, t, eX.B),
                                retryPolicyConfig: g,
                                timeouts: n.loaderResource,
                                params: { common: { oauth: c.token, client: (0, eG._)(), device: (0, eV.V)(), language: a } },
                            });
                        }),
                        [eC.re]: (0, l.Gr)((e) => {
                            let { resources: t } = e.get(eC.tw),
                                { timeouts: r, retryPolicyConfig: o } = t.musicExternalApi,
                                n = e.get(eC.Xc).getLanguage(),
                                g = e.get(eC.A4)({ credentials: 'omit' });
                            return new Y.s(g, {
                                prefixUrl: '',
                                retryPolicyConfig: o,
                                timeouts: r.prefixlessResource,
                                params: { common: { client: (0, eG._)(), device: (0, eV.V)(), language: n } },
                            });
                        }),
                        [eC.Lk]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eC.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(eC.Xc).getLanguage(),
                                l = e.get(eC.A4)(),
                                c = e.get(eC.QG);
                            return new z.g(l, {
                                prefixUrl: (0, i.getTldHost)(o, t, eX.B),
                                retryPolicyConfig: g,
                                timeouts: n.filtersResource,
                                params: { common: { oauth: c.token, client: (0, eG._)(), device: (0, eV.V)(), language: a } },
                            });
                        }),
                        [eC.uM]: (0, l.Gr)((e) => {
                            var t;
                            let { acqOffers: r, rumSettings: n } = e.get(eC.tw),
                                { brand: g, service: i, environment: a, appVersion: l } = r,
                                { platform: c, page: u } = n,
                                s = e.get(eC.QG),
                                m = e.get(eC.Xc).getLanguage(),
                                p = e.get(eC.A4),
                                d = s.token || null,
                                w = p({ credentials: 'omit' }),
                                { request_id: G, puid: A } = null != (t = e.get(eC.Zi).getStore()) ? t : {};
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
                                requester: (0, eb.n)(w),
                                puid: (null == A ? void 0 : A.toString()) || null,
                                rumOptions: { platform: c, page: u, requestId: G },
                            });
                        }),
                        [eC.$$]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eC.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(eC.Xc).getLanguage(),
                                l = e.get(eC.A4)(),
                                c = e.get(eC.QG);
                            return new W.E(l, {
                                prefixUrl: (0, i.getTldHost)(o, t, eX.B),
                                retryPolicyConfig: g,
                                timeouts: n.ugcResource,
                                params: { common: { oauth: c.token, client: (0, eG._)(), language: a } },
                            });
                        }),
                        [eC.sv]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eC.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(eC.Xc).getLanguage(),
                                l = e.get(eC.A4)(),
                                c = e.get(eC.QG);
                            return new I.L(l, {
                                prefixUrl: (0, i.getTldHost)(o, t, eX.B),
                                retryPolicyConfig: g,
                                timeouts: n.collectionResource,
                                params: { common: { oauth: c.token, client: (0, eG._)(), device: (0, eV.V)(), language: a } },
                            });
                        }),
                        [eC.gd]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eC.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(eC.Xc).getLanguage(),
                                l = e.get(eC.A4)(),
                                c = e.get(eC.QG);
                            return new K.z(l, {
                                prefixUrl: (0, i.getTldHost)(o, t, eX.B),
                                retryPolicyConfig: g,
                                timeouts: n.adsResource,
                                params: { common: { oauth: c.token, client: (0, eG._)(), device: (0, eV.V)(), language: a } },
                            });
                        }),
                        [eC.EN]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eC.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(eC.Xc).getLanguage(),
                                l = e.get(eC.A4)(),
                                c = e.get(eC.QG);
                            return new J._(l, {
                                prefixUrl: (0, i.getTldHost)(o, t, eX.B),
                                retryPolicyConfig: g,
                                timeouts: n.afterTrackResource,
                                params: { common: { oauth: c.token, client: (0, eG._)(), device: (0, eV.V)(), language: a } },
                            });
                        }),
                        [eC.Ez]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eC.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(eC.Xc).getLanguage(),
                                l = e.get(eC.A4)(),
                                c = e.get(eC.QG);
                            return new F.l(l, {
                                prefixUrl: (0, i.getTldHost)(o, t, eX.B),
                                retryPolicyConfig: g,
                                timeouts: n.personalResource,
                                params: { common: { oauth: c.token, client: (0, eG._)(), device: (0, eV.V)(), language: a } },
                            });
                        }),
                        [eC.N1]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eC.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(eC.Xc).getLanguage(),
                                l = e.get(eC.A4)(),
                                c = e.get(eC.QG),
                                u = e.get(eC.y$),
                                s = new j.H(l, {
                                    prefixUrl: (0, i.getTldHost)(o, t, eX.B),
                                    retryPolicyConfig: g,
                                    timeouts: n.disclaimersResource,
                                    params: { common: { oauth: c.token, client: (0, eG._)(), device: (0, eV.V)(), language: a } },
                                });
                            return u.cacheController
                                ? (0, em._2)({
                                      resource: s,
                                      cacheController: u.cacheController,
                                      config: { common: { resourceName: j.H.constructor.name }, enabled: !0, priority: em.OU.HIGH, ttl: 6048e5 },
                                  })
                                : s;
                        }),
                        [eC.u2]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eC.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(eC.Xc).getLanguage(),
                                l = e.get(eC.A4)(),
                                c = e.get(eC.QG);
                            return new ee.J(l, {
                                prefixUrl: (0, i.getTldHost)(o, t, eX.B),
                                retryPolicyConfig: g,
                                timeouts: n.familyResource,
                                params: { common: { oauth: c.token, client: (0, eG._)(), device: (0, eV.V)(), language: a } },
                            });
                        }),
                        [eC.TD]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eC.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(eC.Xc).getLanguage(),
                                l = e.get(eC.A4)(),
                                c = e.get(eC.QG);
                            return new et.L(l, {
                                prefixUrl: (0, i.getTldHost)(o, t, eX.B),
                                retryPolicyConfig: g,
                                timeouts: n.childrenLandingResource,
                                params: { common: { oauth: c.token, client: (0, eG._)(), device: (0, eV.V)(), language: a } },
                            });
                        }),
                        [eC.wK]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eC.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(eC.Xc).getLanguage(),
                                l = e.get(eC.A4)(),
                                c = e.get(eC.QG);
                            return new er.u(l, {
                                prefixUrl: (0, i.getTldHost)(o, t, eX.B),
                                retryPolicyConfig: g,
                                timeouts: n.landingBlocksResource,
                                params: { common: { oauth: c.token, client: (0, eG._)(), device: (0, eV.V)(), language: a } },
                            });
                        }),
                        [eC.dh]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eC.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(eC.Xc).getLanguage(),
                                l = e.get(eC.A4)(),
                                c = e.get(eC.QG);
                            return new eo.q(l, {
                                prefixUrl: (0, i.getTldHost)(o, t, eX.B),
                                retryPolicyConfig: g,
                                timeouts: n.promoResource,
                                params: { common: { oauth: c.token, client: (0, eG._)(), device: (0, eV.V)(), language: a } },
                            });
                        }),
                        [eC.LC]: (0, l.Gr)((e) => {
                            let { resources: t, player: r } = e.get(eC.tw),
                                { timeouts: o, retryPolicyConfig: n } = t.musicExternalApi,
                                g = e.get(eC.CR)({ credentials: 'include' });
                            return new en.g(g, {
                                prefixUrl: r.telemetry.telemetryUrl,
                                retryPolicyConfig: n,
                                timeouts: o.telemetryResouce,
                                params: { common: { client: (0, eG._)() } },
                            });
                        }),
                        [eC.W5]: (0, l.Gr)((e) => {
                            let { resources: t, player: r } = e.get(eC.tw),
                                { retryPolicyConfig: o } = t.musicExternalApi,
                                n = e.get(eC.CR)({ credentials: 'include' });
                            return new eg.N(n, { prefixUrl: r.telemetry.rumUrl, retryPolicyConfig: o, params: { common: { client: (0, eG._)() } } });
                        }),
                        [eC.PL]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eC.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(eC.Xc).getLanguage(),
                                l = e.get(eC.A4)(),
                                c = e.get(eC.QG);
                            return new ei.w(l, {
                                prefixUrl: (0, i.getTldHost)(o, t, eX.B),
                                retryPolicyConfig: g,
                                timeouts: n.labelsResource,
                                params: { common: { oauth: c.token, client: (0, eG._)(), device: (0, eV.V)(), language: a } },
                            });
                        }),
                        [eC.DT]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eC.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(eC.Xc).getLanguage(),
                                l = e.get(eC.A4)(),
                                c = e.get(eC.QG);
                            return new ea.O(l, {
                                prefixUrl: (0, i.getTldHost)(o, t, eX.B),
                                retryPolicyConfig: g,
                                timeouts: n.concertsResource,
                                params: { common: { oauth: c.token, client: (0, eG._)(), device: (0, eV.V)(), language: a } },
                            });
                        }),
                        [eC.dA]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eC.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(eC.Xc).getLanguage(),
                                l = e.get(eC.A4)(),
                                c = e.get(eC.QG);
                            return new el.Q(l, {
                                prefixUrl: (0, i.getTldHost)(o, t, eX.B),
                                retryPolicyConfig: g,
                                timeouts: n.wordsResource,
                                params: { common: { oauth: c.token, client: (0, eG._)(), device: (0, eV.V)(), language: a } },
                            });
                        }),
                        [eC.$Y]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eC.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(eC.Xc).getLanguage(),
                                l = e.get(eC.A4)(),
                                c = e.get(eC.QG);
                            return new ec.C(l, {
                                prefixUrl: (0, i.getTldHost)(o, t, eX.B),
                                retryPolicyConfig: g,
                                timeouts: n.wheelResource,
                                params: { common: { oauth: c.token, client: (0, eG._)(), device: (0, eV.V)(), language: a } },
                            });
                        }),
                        [eC.VR]: (0, l.P9)((e) => () => {
                            let { resources: t } = e.get(eC.tw),
                                r = e.get(eC.A4)({ credentials: 'omit' }),
                                o = new eu.o(r, t.networkReachability.url);
                            return (0, eT.P)({ probe: (e) => o.ping({ signal: e }) });
                        }),
                        [eC.zj]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eC.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(eC.Xc).getLanguage(),
                                l = e.get(eC.A4)(),
                                c = e.get(eC.QG);
                            return new es.U(l, {
                                prefixUrl: (0, i.getTldHost)(o, t, eX.B),
                                retryPolicyConfig: g,
                                timeouts: n.lumenResource,
                                params: { common: { oauth: c.token, client: (0, eG._)(), device: (0, eV.V)(), language: a } },
                            });
                        }),
                        [eC.vg]: (0, l.Gr)(() => (0, ed.a)()),
                    })
                    .register(
                        eC.ff,
                        (0, l.Gr)((e) => {
                            let t = e.get(eC.N1);
                            return new c.AS({ dataSource: new ev.C(t) });
                        }),
                    )
                    .registerMany({
                        [eC.UB]: (0, l.Gr)((e) => {
                            let t = e.get(eC.vg);
                            return new d.B(t);
                        }),
                        [eC.Tq]: (0, l.Gr)((e) => {
                            var t;
                            let r = e.get(eC.W5);
                            return (null == (t = window.Ya) ? void 0 : t.Rum) ? new d.G((0, ew.y)(), r, window.Ya.Rum) : null;
                        }),
                    })
                    .register(
                        eC.by,
                        (0, l.Gr)((e) => {
                            let t = e.get(eC.oo),
                                r = e.get(eC.U2),
                                o = e.get(eC.Zf),
                                i = r.get(eQ.c.YnisonDeviceId);
                            i || ((i = (0, g.A)()), r.set(eQ.c.YnisonDeviceId, i));
                            let a = {
                                    info: { app_name: 'Desktop', app_version: (0, eB.H)() || '', title: 'Music Desktop App', device_id: i, type: n.bq.WEB_DESKTOP },
                                    volumeGranularity: 20,
                                    get defaultVolume() {
                                        var l;
                                        return null != (l = t.get(eQ.c.YmPlayerVolume)) ? l : void 0;
                                    },
                                },
                                c = e.get(eC.WA).getPassportUid(),
                                u = e.get(eC.QG),
                                s = e.get(eC.UB),
                                m = e.get(eC.Tq),
                                p = [new n.zT(s)];
                            return (
                                m && p.push(new n.qP(m)),
                                new n.Jd({
                                    logger: o,
                                    deviceConfig: a,
                                    multiAuthUserId: c,
                                    oauth: u.token,
                                    ynisonConnectionConfig: eq.ynisonConnectionConfig,
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
