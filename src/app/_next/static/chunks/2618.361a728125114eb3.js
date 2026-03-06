'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2618],
    {
        2618: (e, t, r) => {
            r.d(t, { createDesktopContainer: () => ey });
            var o = r(89885),
                n = r(18542),
                g = r(9348),
                i = r(15209),
                a = r(21220),
                l = r(58900),
                c = r(79850),
                u = r(84690),
                s = r(34965),
                m = r(18258),
                p = r(36211),
                d = r(5892),
                w = r(40080),
                G = r(81658),
                f = r(79817),
                x = r(88660),
                A = r(52962),
                h = r(96992),
                v = r(48448),
                k = r(93076),
                E = r(36788),
                U = r(35566),
                L = r(64659),
                H = r(63988),
                R = r(37934),
                T = r(79329),
                _ = r(12774),
                B = r(24252),
                V = r(29372),
                X = r(10582),
                Q = r(13696),
                y = r(78226),
                C = r(94150),
                b = r(92103),
                P = r(3463),
                D = r(24120),
                M = r(55948),
                S = r(80535),
                q = r(38689),
                N = r(50218),
                Z = r(34720),
                O = r(54280),
                $ = r(99676),
                Y = r(86420),
                K = r(33716),
                W = r(30508),
                z = r(95198),
                I = r(10560),
                J = r(54924),
                F = r(74922),
                j = r(16068),
                ee = r(41778),
                et = r(29449),
                er = r(3327),
                eo = r(87716),
                en = r(42132),
                eg = r(81760),
                ei = r(2936),
                ea = r(40168),
                el = r(12460),
                ec = r(78420),
                eu = r(25289),
                es = r(24269),
                em = r(65630),
                ep = r(7029),
                ed = r(74875),
                ew = r(62901),
                eG = r(27493),
                ef = r(12979),
                ex = r(558);
            class eA {
                onChangeLanguage() {
                    window.location.reload();
                }
            }
            var eh = r(59433),
                ev = r(90579),
                ek = r(37343),
                eE = r(47339),
                eU = r(37538),
                eL = r(5808),
                eH = r(90461),
                eR = r(78171),
                eT = r(45628),
                e_ = r(67454),
                eB = r(65098),
                eV = r(88246),
                eX = r(13871),
                eQ = r(6556);
            async function ey(e) {
                let { tld: t, env: ey } = e,
                    eC = (0, eQ.J)(await (0, ef.z)(ey)),
                    eb = await (0, eG.B)(ey),
                    eP = {};
                return new l.Dt()
                    .registerMany({
                        [e_.SX]: (0, l.Gr)(() => ey),
                        [e_.tw]: (0, l.Gr)(() => eC),
                        [e_.P0]: (0, l.Gr)(() => new a.q(eb)),
                        [e_.Zi]: (0, l.Gr)(() => new ex.Y(eP)),
                    })
                    .register(
                        e_.WA,
                        (0, l.Gr)((e) => {
                            let t = e.get(e_.Zi);
                            return new eT.V(t);
                        }),
                    )
                    .registerMany({
                        [e_.Zf]: (0, l.Gr)((e) => {
                            let t = e.get(e_.P0).get(ew.qV);
                            return new m.r({
                                maxLogLevel: s.cm.DEBUG,
                                secureFields: ek.x,
                                disableLogToConsole: !t,
                                additionalData: {
                                    get puid() {
                                        return e.get(e_.WA).getPassportUid();
                                    },
                                },
                            });
                        }),
                        [e_.RG]: (0, l.Gr)(async (e) => {
                            let {
                                mocks: { enabled: o, mocksProviderUrl: n, urlCapturePattern: g },
                            } = e.get(e_.tw);
                            if (!o) return () => Promise.resolve(null);
                            let { initMocks: a } = await Promise.all([r.e(2650), r.e(2357)]).then(r.bind(r, 22357)),
                                l = e.get(e_.U2),
                                c = e.get(e_.Zf),
                                u = 'production' === e.get(e_.SX) ? '/rsc-cache-worker.js' : '',
                                s = () => {
                                    var e;
                                    return null != (e = l.get(eH.c.MocksConfiguration, !1)) ? e : null;
                                };
                            return () =>
                                a({
                                    getMocksConfiguration: s,
                                    mocksProviderUrl: n,
                                    onError: (e) => c.error('[Mocks]: '.concat(e)),
                                    serviceWorkerUrl: u,
                                    urlCapturePattern: (0, i.getTldHost)(g, t, eR.B),
                                }).catch((e) => c.error('Mocks desktop initialization failed: '.concat(e)));
                        }),
                        [e_.TK]: (0, l.Gr)(
                            (e) =>
                                new ((0, ev.b)(m.r))({
                                    maxLogLevel: s.cm.DEBUG,
                                    secureFields: ek.x,
                                    disableLogToConsole: 'development' !== e.get(e_.SX),
                                    additionalData: {
                                        get puid() {
                                            return e.get(e_.WA).getPassportUid();
                                        },
                                    },
                                }),
                        ),
                        [e_.oo]: (0, l.Gr)(() => new ec.si()),
                        [e_.DP]: (0, l.Gr)(() => new ec.MJ('client '.concat('desktop'), 'cookie')),
                        [e_.U2]: (0, l.Gr)(() => new ec.si()),
                        [e_.vH]: (0, l.Gr)(() => new ec.fW()),
                        [e_.Xc]: (0, l.Gr)((e) => {
                            let t = e.get(e_.oo),
                                r = e.get(e_.Zf);
                            return new eh.E({
                                isBuildTypeDesktop: !0,
                                logger: r,
                                changeLanguageHandler: new eA(),
                                storage: {
                                    get: () => t.get(eH.c.SavedUserLanguage),
                                    set(e) {
                                        t.set(eH.c.SavedUserLanguage, e);
                                    },
                                },
                            });
                        }),
                    })
                    .registerMany({
                        [e_.y$]: (0, l.Gr)((e) => {
                            let t = e.get(e_.Zf),
                                r = e.get(e_.oo),
                                o = new el.Mz({
                                    config: { useEntitiesStorage: !0, useFileStorage: !0, useResponseCacheStorage: !0 },
                                    plugins: [new el.wK({ logger: t })],
                                });
                            return (
                                o.createCacheController({
                                    repositoryContainer: o.repositoryContainer,
                                    variables: {
                                        get uid() {
                                            return r.get(eH.c.YmUid);
                                        },
                                        get isOffline() {
                                            return !!o.network.status.isOffline;
                                        },
                                    },
                                }),
                                o
                            );
                        }),
                        [e_.Hm]: (0, l.P9)(
                            () =>
                                function () {
                                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                    return new u.Q(e);
                                },
                        ),
                        [e_.gu]: (0, l.P9)(
                            () =>
                                function () {
                                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                    return new c.S(e);
                                },
                        ),
                    })
                    .registerMany({
                        [e_.QG]: (0, l.Gr)((e) => new ep.G(e.get(e_.oo), e.get(e_.tw), e.get(e_.Xc).getLanguage())),
                        [e_.OP]: (0, l.P9)(
                            (e) =>
                                function () {
                                    var t, r, o, n, g;
                                    let i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                        a = arguments.length > 1 ? arguments[1] : void 0,
                                        l = e.get(e_.Zf),
                                        c = e.get(e_.U2),
                                        u = new ek.N(l),
                                        {
                                            resources: { musicExternalApi: s },
                                        } = e.get(e_.tw);
                                    (i.timeout = s.defaultTimeout),
                                        (i.hooks = {
                                            afterResponse: [...((null == i || null == (t = i.hooks) ? void 0 : t.afterResponse) || [])],
                                            beforeError: [u.beforeErrorHook, ...((null == i || null == (r = i.hooks) ? void 0 : r.beforeError) || [])],
                                            beforeRequest: [eV.x, ...((null == i || null == (o = i.hooks) ? void 0 : o.beforeRequest) || [])],
                                            afterTimeout: [u.beforeErrorHook, ...((null == i || null == (n = i.hooks) ? void 0 : n.afterTimeout) || [])],
                                            beforeRetry: [eX.i, u.beforeRetryHook, ...((null == i || null == (g = i.hooks) ? void 0 : g.beforeRetry) || [])],
                                        });
                                    let m = a(i);
                                    return (0, el.sY)(m, {
                                        get isOffline() {
                                            return (0, eE.g)(c);
                                        },
                                    });
                                },
                        ),
                    })
                    .registerMany({
                        [e_.A4]: (0, l.P9)(
                            (e) =>
                                function () {
                                    var r;
                                    let o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e.get(e_.OP),
                                        g = e.get(e_.QG),
                                        { resources: a } = e.get(e_.tw),
                                        l = n({}, e.get(e_.Hm)),
                                        { prefixUrl: c, timeouts: u, retryPolicyConfig: s } = a.musicExternalApi,
                                        m = e.get(e_.Xc).getLanguage(),
                                        p = new d.Q(l, {
                                            prefixUrl: (0, i.getTldHost)(c, t, eR.B),
                                            retryPolicyConfig: s,
                                            timeouts: u.accountResource,
                                            params: { common: { oauth: g.token, client: (0, em._)(), device: (0, eL.V)(), language: m } },
                                        });
                                    return (
                                        (o.hooks = { beforeError: [(0, ed.o)(g, p), ...((null == o || null == (r = o.hooks) ? void 0 : r.beforeError) || [])] }),
                                        n(o, e.get(e_.Hm))
                                    );
                                },
                        ),
                    })
                    .register(
                        e_.CR,
                        (0, l.P9)(
                            (e) =>
                                function () {
                                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                    return e.get(e_.A4)(t, e.get(e_.gu));
                                },
                        ),
                    )
                    .registerMany({
                        [e_.$I]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(e_.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(e_.Xc).getLanguage(),
                                l = e.get(e_.A4),
                                c = e.get(e_.y$),
                                u = l(),
                                s = e.get(e_.QG),
                                m = {
                                    prefixUrl: (0, i.getTldHost)(o, t, eR.B),
                                    retryPolicyConfig: g,
                                    timeouts: n.accountResource,
                                    params: { common: { oauth: s.token, client: (0, em._)(), device: (0, eL.V)(), language: a } },
                                };
                            return c.cacheController ? new el.wV(u, m, { cacheController: c.cacheController }) : new d.Q(u, m);
                        }),
                        [e_._1]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(e_.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(e_.Xc).getLanguage(),
                                l = e.get(e_.A4)(),
                                c = e.get(e_.QG);
                            return new w.d(l, {
                                prefixUrl: (0, i.getTldHost)(o, t, eR.B),
                                retryPolicyConfig: g,
                                timeouts: n.usersResource,
                                params: { common: { oauth: c.token, client: (0, em._)(), device: (0, eL.V)(), language: a } },
                            });
                        }),
                        [e_.V3]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(e_.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(e_.Xc).getLanguage(),
                                l = e.get(e_.A4)(),
                                c = e.get(e_.QG),
                                u = e.get(e_.y$),
                                s = {
                                    prefixUrl: (0, i.getTldHost)(o, t, eR.B),
                                    retryPolicyConfig: g,
                                    timeouts: n.landingResource,
                                    params: { common: { oauth: c.token, client: (0, em._)(), device: (0, eL.V)(), language: a } },
                                };
                            return new el.o7(l, s, {
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
                        [e_.Lb]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(e_.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(e_.Xc).getLanguage(),
                                l = e.get(e_.A4)(),
                                c = e.get(e_.QG);
                            return new G.H(l, {
                                prefixUrl: (0, i.getTldHost)(o, t, eR.B),
                                retryPolicyConfig: g,
                                timeouts: n.landing3Resource,
                                params: { common: { oauth: c.token, client: (0, em._)(), device: (0, eL.V)(), language: a } },
                            });
                        }),
                        [e_.tz]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(e_.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(e_.Xc).getLanguage(),
                                l = e.get(e_.A4)(),
                                c = e.get(e_.QG);
                            return new f.B(l, {
                                prefixUrl: (0, i.getTldHost)(o, t, eR.B),
                                retryPolicyConfig: g,
                                timeouts: n.albumsResource,
                                params: { common: { oauth: c.token, client: (0, em._)(), device: (0, eL.V)(), language: a } },
                            });
                        }),
                        [e_.$8]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(e_.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(e_.Xc).getLanguage(),
                                l = e.get(e_.A4)(),
                                c = e.get(e_.QG);
                            return new x.w(l, {
                                prefixUrl: (0, i.getTldHost)(o, t, eR.B),
                                retryPolicyConfig: g,
                                timeouts: n.libraryResource,
                                params: { common: { oauth: c.token, client: (0, em._)(), device: (0, eL.V)(), language: a } },
                            });
                        }),
                        [e_.Oo]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(e_.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(e_.Xc).getLanguage(),
                                l = e.get(e_.A4)(),
                                c = e.get(e_.QG);
                            return new A.L(l, {
                                prefixUrl: (0, i.getTldHost)(o, t, eR.B),
                                retryPolicyConfig: g,
                                timeouts: n.tracksResource,
                                params: { common: { oauth: c.token, client: (0, em._)(), device: (0, eL.V)(), language: a } },
                            });
                        }),
                        [e_.$5]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(e_.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(e_.Xc).getLanguage(),
                                l = e.get(e_.A4)(),
                                c = e.get(e_.QG);
                            return new h._(l, {
                                prefixUrl: (0, i.getTldHost)(o, t, eR.B),
                                retryPolicyConfig: g,
                                timeouts: n.availabilityResource,
                                params: { common: { oauth: c.token, client: (0, em._)(), device: (0, eL.V)(), language: a } },
                            });
                        }),
                        [e_.qT]: (0, l.Gr)((e) => {
                            let { resources: r, player: o } = e.get(e_.tw),
                                { prefixUrl: n, timeouts: g, retryPolicyConfig: a } = r.musicExternalApi,
                                l = e.get(e_.Xc).getLanguage(),
                                c = e.get(e_.A4)(),
                                u = e.get(e_.QG),
                                s = e.get(e_.y$),
                                m = e.get(e_.oo),
                                p = {
                                    prefixUrl: (0, i.getTldHost)(n, t, eR.B),
                                    retryPolicyConfig: a,
                                    timeouts: g.getFileInfoResource,
                                    params: { common: { oauth: u.token, client: (0, em._)(), device: (0, eL.V)(), language: l } },
                                },
                                d = s.repositoryContainer.fileStorage,
                                w = s.repositoryContainer.tracksRepository,
                                G = s.repositoryContainer.usersTracksRepository;
                            return d && w && G
                                ? new el.d7(c, p, {
                                      fileStorage: d,
                                      tracksRepository: w,
                                      usersTracksRepository: G,
                                      hooks: s.hooks,
                                      variables: {
                                          get uid() {
                                              return m.get(eH.c.YmUid);
                                          },
                                          secretKey: o.secretKey,
                                      },
                                  })
                                : new v.v(c, p);
                        }),
                        [e_.X4]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(e_.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(e_.Xc).getLanguage(),
                                l = e.get(e_.A4)(),
                                c = e.get(e_.QG);
                            return new k.a(l, {
                                prefixUrl: (0, i.getTldHost)(o, t, eR.B),
                                retryPolicyConfig: g,
                                timeouts: n.topResource,
                                params: { common: { oauth: c.token, client: (0, em._)(), device: (0, eL.V)(), language: a } },
                            });
                        }),
                        [e_.O9]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(e_.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(e_.Xc).getLanguage(),
                                l = e.get(e_.A4)(),
                                c = e.get(e_.QG);
                            return new E.b(l, {
                                prefixUrl: (0, i.getTldHost)(o, t, eR.B),
                                retryPolicyConfig: g,
                                timeouts: n.artistsResource,
                                params: { common: { oauth: c.token, client: (0, em._)(), device: (0, eL.V)(), language: a } },
                            });
                        }),
                        [e_.E]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(e_.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(e_.Xc).getLanguage(),
                                l = e.get(e_.A4)(),
                                c = e.get(e_.QG);
                            return new U.V(l, {
                                prefixUrl: (0, i.getTldHost)(o, t, eR.B),
                                retryPolicyConfig: g,
                                timeouts: n.slidesResource,
                                params: { common: { oauth: c.token, client: (0, em._)(), device: (0, eL.V)(), language: a } },
                            });
                        }),
                        [e_.wH]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(e_.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(e_.Xc).getLanguage(),
                                l = e.get(e_.A4),
                                c = e.get(e_.QG),
                                u = l();
                            return new L.c(u, {
                                prefixUrl: (0, i.getTldHost)(o, t, eR.B),
                                retryPolicyConfig: g,
                                timeouts: n.redAlertResource,
                                params: { common: { oauth: c.token, client: (0, em._)(), device: (0, eL.V)(), language: a } },
                            });
                        }),
                        [e_.ok]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(e_.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(e_.Xc).getLanguage(),
                                l = e.get(e_.A4)(),
                                c = e.get(e_.QG);
                            return new H.Z(l, {
                                prefixUrl: (0, i.getTldHost)(o, t, eR.B),
                                retryPolicyConfig: g,
                                timeouts: n.rotorResource,
                                params: { common: { oauth: c.token, client: (0, em._)(), device: (0, eL.V)(), language: a } },
                            });
                        }),
                        [e_.yq]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(e_.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(e_.Xc).getLanguage(),
                                l = e.get(e_.A4)(),
                                c = e.get(e_.QG);
                            return new R.p(l, {
                                prefixUrl: (0, i.getTldHost)(o, t, eR.B),
                                retryPolicyConfig: g,
                                timeouts: n.searchResource,
                                params: { common: { oauth: c.token, client: (0, em._)(), device: (0, eL.V)(), language: a } },
                            });
                        }),
                        [e_.NN]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(e_.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(e_.Xc).getLanguage(),
                                l = e.get(e_.A4)(),
                                c = e.get(e_.QG);
                            return new T.v(l, {
                                prefixUrl: (0, i.getTldHost)(o, t, eR.B),
                                retryPolicyConfig: g,
                                timeouts: n.searchResource,
                                params: { common: { oauth: c.token, client: (0, em._)(), device: (0, eL.V)(), language: a } },
                            });
                        }),
                        [e_.qN]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(e_.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(e_.Xc).getLanguage(),
                                l = e.get(e_.A4)(),
                                c = e.get(e_.QG);
                            return new _.T(l, {
                                prefixUrl: (0, i.getTldHost)(o, t, eR.B),
                                retryPolicyConfig: g,
                                timeouts: n.playlistResource,
                                params: { common: { oauth: c.token, client: (0, em._)(), device: (0, eL.V)(), language: a } },
                            });
                        }),
                        [e_.ro]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(e_.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(e_.Xc).getLanguage(),
                                l = e.get(e_.A4)(),
                                c = e.get(e_.QG);
                            return new B.e(l, {
                                prefixUrl: (0, i.getTldHost)(o, t, eR.B),
                                retryPolicyConfig: g,
                                timeouts: n.playlistsResource,
                                params: { common: { oauth: c.token, client: (0, em._)(), device: (0, eL.V)(), language: a } },
                            });
                        }),
                        [e_.nM]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(e_.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(e_.Xc).getLanguage(),
                                l = e.get(e_.A4)(),
                                c = e.get(e_.QG);
                            return new V.o(l, {
                                prefixUrl: (0, i.getTldHost)(o, t, eR.B),
                                retryPolicyConfig: g,
                                timeouts: n.pinResource,
                                params: { common: { oauth: c.token, client: (0, em._)(), device: (0, eL.V)(), language: a } },
                            });
                        }),
                        [e_.Ut]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(e_.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(e_.Xc).getLanguage(),
                                l = e.get(e_.A4)(),
                                c = e.get(e_.QG);
                            return new X.$(l, {
                                prefixUrl: (0, i.getTldHost)(o, t, eR.B),
                                retryPolicyConfig: g,
                                timeouts: n.metatagsResource,
                                params: { common: { oauth: c.token, client: (0, em._)(), device: (0, eL.V)(), language: a } },
                            });
                        }),
                        [e_.K1]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(e_.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(e_.Xc).getLanguage(),
                                l = e.get(e_.A4)(),
                                c = e.get(e_.QG);
                            return new Q.p(l, {
                                prefixUrl: (0, i.getTldHost)(o, t, eR.B),
                                retryPolicyConfig: g,
                                timeouts: n.tagResource,
                                params: { common: { oauth: c.token, client: (0, em._)(), device: (0, eL.V)(), language: a } },
                            });
                        }),
                        [e_.eu]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(e_.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(e_.Xc).getLanguage(),
                                l = e.get(e_.A4)(),
                                c = e.get(e_.QG);
                            return new y.D(l, {
                                prefixUrl: (0, i.getTldHost)(o, t, eR.B),
                                retryPolicyConfig: g,
                                timeouts: n.feedResource,
                                params: { common: { oauth: c.token, client: (0, em._)(), device: (0, eL.V)(), language: a } },
                            });
                        }),
                        [e_.aE]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(e_.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(e_.Xc).getLanguage(),
                                l = e.get(e_.A4)(),
                                c = e.get(e_.QG),
                                u = e.get(e_.y$),
                                s = new C.l(l, {
                                    prefixUrl: (0, i.getTldHost)(o, t, eR.B),
                                    retryPolicyConfig: g,
                                    timeouts: n.pinsResource,
                                    params: { common: { oauth: c.token, client: (0, em._)(), device: (0, eL.V)(), language: a } },
                                });
                            return u.cacheController
                                ? (0, el._2)({
                                      resource: s,
                                      cacheController: u.cacheController,
                                      config: { common: { resourceName: C.l.constructor.name }, enabled: !0, priority: el.OU.HIGH, ttl: 6048e5 },
                                  })
                                : s;
                        }),
                        [e_.ki]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(e_.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(e_.Xc).getLanguage(),
                                l = e.get(e_.A4)(),
                                c = e.get(e_.QG);
                            return new b.I(l, {
                                prefixUrl: (0, i.getTldHost)(o, t, eR.B),
                                retryPolicyConfig: g,
                                timeouts: n.musicHistoryResource,
                                params: { common: { oauth: c.token, client: (0, em._)(), device: (0, eL.V)(), language: a } },
                            });
                        }),
                        [e_.c9]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(e_.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(e_.Xc).getLanguage(),
                                l = e.get(e_.A4)(),
                                c = e.get(e_.QG);
                            return new P.s(l, {
                                prefixUrl: (0, i.getTldHost)(o, t, eR.B),
                                retryPolicyConfig: g,
                                timeouts: n.dynamicPagesResource,
                                params: { common: { oauth: c.token, client: (0, em._)(), device: (0, eL.V)(), language: a } },
                            });
                        }),
                        [e_.en]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(e_.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(e_.Xc).getLanguage(),
                                l = e.get(e_.A4)(),
                                c = e.get(e_.QG);
                            return new D.B(l, {
                                prefixUrl: (0, i.getTldHost)(o, t, eR.B),
                                retryPolicyConfig: g,
                                timeouts: n.chartResource,
                                params: { common: { oauth: c.token, client: (0, em._)(), device: (0, eL.V)(), language: a } },
                            });
                        }),
                        [e_.jQ]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(e_.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(e_.Xc).getLanguage(),
                                l = e.get(e_.A4)(),
                                c = e.get(e_.QG);
                            return new M._(l, {
                                prefixUrl: (0, i.getTldHost)(o, t, eR.B),
                                retryPolicyConfig: g,
                                timeouts: n.clipsResource,
                                params: { common: { oauth: c.token, client: (0, em._)(), device: (0, eL.V)(), language: a } },
                            });
                        }),
                        [e_.cZ]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(e_.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(e_.Xc).getLanguage(),
                                l = e.get(e_.A4)(),
                                c = e.get(e_.QG);
                            return new S.c(l, {
                                prefixUrl: (0, i.getTldHost)(o, t, eR.B),
                                retryPolicyConfig: g,
                                timeouts: n.lyricViewsResource,
                                params: { common: { oauth: c.token, client: (0, em._)(), device: (0, eL.V)(), language: a } },
                            });
                        }),
                        [e_.Zl]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(e_.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(e_.Xc).getLanguage(),
                                l = e.get(e_.A4)(),
                                c = e.get(e_.QG);
                            return new q.D(l, {
                                prefixUrl: (0, i.getTldHost)(o, t, eR.B),
                                retryPolicyConfig: g,
                                timeouts: n.nonMusicResource,
                                params: { common: { oauth: c.token, client: (0, em._)(), device: (0, eL.V)(), language: a } },
                            });
                        }),
                        [e_.CN]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(e_.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(e_.Xc).getLanguage(),
                                l = e.get(e_.A4)(),
                                c = e.get(e_.QG);
                            return new N.N(l, {
                                prefixUrl: (0, i.getTldHost)(o, t, eR.B),
                                retryPolicyConfig: g,
                                timeouts: n.donationResource,
                                params: { common: { oauth: c.token, client: (0, em._)(), device: (0, eL.V)(), language: a } },
                            });
                        }),
                        [e_.JM]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(e_.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(e_.Xc).getLanguage(),
                                l = e.get(e_.A4)(),
                                c = e.get(e_.QG);
                            return new Z.c(l, {
                                prefixUrl: (0, i.getTldHost)(o, t, eR.B),
                                retryPolicyConfig: g,
                                timeouts: n.streamsResource,
                                params: { common: { oauth: c.token, client: (0, em._)(), device: (0, eL.V)(), language: a } },
                            });
                        }),
                        [e_.P1]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(e_.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(e_.Xc).getLanguage(),
                                l = e.get(e_.A4)(),
                                c = e.get(e_.QG);
                            return new O.S(l, {
                                prefixUrl: (0, i.getTldHost)(o, t, eR.B),
                                retryPolicyConfig: g,
                                timeouts: n.loaderResource,
                                params: { common: { oauth: c.token, client: (0, em._)(), device: (0, eL.V)(), language: a } },
                            });
                        }),
                        [e_.re]: (0, l.Gr)((e) => {
                            let { resources: t } = e.get(e_.tw),
                                { timeouts: r, retryPolicyConfig: o } = t.musicExternalApi,
                                n = e.get(e_.Xc).getLanguage(),
                                g = e.get(e_.A4)({ credentials: 'omit' });
                            return new $.s(g, {
                                prefixUrl: '',
                                retryPolicyConfig: o,
                                timeouts: r.prefixlessResource,
                                params: { common: { client: (0, em._)(), device: (0, eL.V)(), language: n } },
                            });
                        }),
                        [e_.Lk]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(e_.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(e_.Xc).getLanguage(),
                                l = e.get(e_.A4)(),
                                c = e.get(e_.QG);
                            return new Y.g(l, {
                                prefixUrl: (0, i.getTldHost)(o, t, eR.B),
                                retryPolicyConfig: g,
                                timeouts: n.filtersResource,
                                params: { common: { oauth: c.token, client: (0, em._)(), device: (0, eL.V)(), language: a } },
                            });
                        }),
                        [e_.he]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(e_.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(e_.Xc).getLanguage(),
                                l = e.get(e_.A4)();
                            return new K.K(l, {
                                prefixUrl: (0, i.getTldHost)(o, t, eR.B),
                                retryPolicyConfig: g,
                                timeouts: n.offersResource,
                                params: { common: { client: (0, em._)(), device: (0, eL.V)(), language: a } },
                            });
                        }),
                        [e_.uM]: (0, l.Gr)((e) => {
                            var t;
                            let { acqOffers: r, rumSettings: n } = e.get(e_.tw),
                                { brand: g, service: i, environment: a, appVersion: l } = r,
                                { platform: c, page: u } = n,
                                s = e.get(e_.QG),
                                m = e.get(e_.Xc).getLanguage(),
                                p = e.get(e_.A4),
                                d = s.token || null,
                                w = p({ credentials: 'omit' }),
                                { request_id: G, puid: f } = null != (t = e.get(e_.Zi).getStore()) ? t : {};
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
                                requester: (0, eB.n)(w),
                                puid: (null == f ? void 0 : f.toString()) || null,
                                rumOptions: { platform: c, page: u, requestId: G },
                            });
                        }),
                        [e_.$$]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(e_.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(e_.Xc).getLanguage(),
                                l = e.get(e_.A4)(),
                                c = e.get(e_.QG);
                            return new W.E(l, {
                                prefixUrl: (0, i.getTldHost)(o, t, eR.B),
                                retryPolicyConfig: g,
                                timeouts: n.ugcResource,
                                params: { common: { oauth: c.token, client: (0, em._)(), language: a } },
                            });
                        }),
                        [e_.sv]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(e_.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(e_.Xc).getLanguage(),
                                l = e.get(e_.A4)(),
                                c = e.get(e_.QG);
                            return new z.L(l, {
                                prefixUrl: (0, i.getTldHost)(o, t, eR.B),
                                retryPolicyConfig: g,
                                timeouts: n.collectionResource,
                                params: { common: { oauth: c.token, client: (0, em._)(), device: (0, eL.V)(), language: a } },
                            });
                        }),
                        [e_.gd]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(e_.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(e_.Xc).getLanguage(),
                                l = e.get(e_.A4)(),
                                c = e.get(e_.QG);
                            return new I.z(l, {
                                prefixUrl: (0, i.getTldHost)(o, t, eR.B),
                                retryPolicyConfig: g,
                                timeouts: n.adsResource,
                                params: { common: { oauth: c.token, client: (0, em._)(), device: (0, eL.V)(), language: a } },
                            });
                        }),
                        [e_.EN]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(e_.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(e_.Xc).getLanguage(),
                                l = e.get(e_.A4)(),
                                c = e.get(e_.QG);
                            return new J._(l, {
                                prefixUrl: (0, i.getTldHost)(o, t, eR.B),
                                retryPolicyConfig: g,
                                timeouts: n.afterTrackResource,
                                params: { common: { oauth: c.token, client: (0, em._)(), device: (0, eL.V)(), language: a } },
                            });
                        }),
                        [e_.Ez]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(e_.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(e_.Xc).getLanguage(),
                                l = e.get(e_.A4)(),
                                c = e.get(e_.QG);
                            return new F.l(l, {
                                prefixUrl: (0, i.getTldHost)(o, t, eR.B),
                                retryPolicyConfig: g,
                                timeouts: n.personalResource,
                                params: { common: { oauth: c.token, client: (0, em._)(), device: (0, eL.V)(), language: a } },
                            });
                        }),
                        [e_.N1]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(e_.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(e_.Xc).getLanguage(),
                                l = e.get(e_.A4)(),
                                c = e.get(e_.QG),
                                u = e.get(e_.y$),
                                s = new j.H(l, {
                                    prefixUrl: (0, i.getTldHost)(o, t, eR.B),
                                    retryPolicyConfig: g,
                                    timeouts: n.disclaimersResource,
                                    params: { common: { oauth: c.token, client: (0, em._)(), device: (0, eL.V)(), language: a } },
                                });
                            return u.cacheController
                                ? (0, el._2)({
                                      resource: s,
                                      cacheController: u.cacheController,
                                      config: { common: { resourceName: j.H.constructor.name }, enabled: !0, priority: el.OU.HIGH, ttl: 6048e5 },
                                  })
                                : s;
                        }),
                        [e_.u2]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(e_.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(e_.Xc).getLanguage(),
                                l = e.get(e_.A4)(),
                                c = e.get(e_.QG);
                            return new ee.J(l, {
                                prefixUrl: (0, i.getTldHost)(o, t, eR.B),
                                retryPolicyConfig: g,
                                timeouts: n.familyResource,
                                params: { common: { oauth: c.token, client: (0, em._)(), device: (0, eL.V)(), language: a } },
                            });
                        }),
                        [e_.TD]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(e_.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(e_.Xc).getLanguage(),
                                l = e.get(e_.A4)(),
                                c = e.get(e_.QG);
                            return new et.L(l, {
                                prefixUrl: (0, i.getTldHost)(o, t, eR.B),
                                retryPolicyConfig: g,
                                timeouts: n.childrenLandingResource,
                                params: { common: { oauth: c.token, client: (0, em._)(), device: (0, eL.V)(), language: a } },
                            });
                        }),
                        [e_.wK]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(e_.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(e_.Xc).getLanguage(),
                                l = e.get(e_.A4)(),
                                c = e.get(e_.QG);
                            return new er.u(l, {
                                prefixUrl: (0, i.getTldHost)(o, t, eR.B),
                                retryPolicyConfig: g,
                                timeouts: n.landingBlocksResource,
                                params: { common: { oauth: c.token, client: (0, em._)(), device: (0, eL.V)(), language: a } },
                            });
                        }),
                        [e_.dh]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(e_.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(e_.Xc).getLanguage(),
                                l = e.get(e_.A4)(),
                                c = e.get(e_.QG);
                            return new eo.q(l, {
                                prefixUrl: (0, i.getTldHost)(o, t, eR.B),
                                retryPolicyConfig: g,
                                timeouts: n.promoResource,
                                params: { common: { oauth: c.token, client: (0, em._)(), device: (0, eL.V)(), language: a } },
                            });
                        }),
                        [e_.LC]: (0, l.Gr)((e) => {
                            let { resources: t, player: r } = e.get(e_.tw),
                                { timeouts: o, retryPolicyConfig: n } = t.musicExternalApi,
                                g = e.get(e_.CR)({ credentials: 'include' });
                            return new en.g(g, {
                                prefixUrl: r.telemetry.telemetryUrl,
                                retryPolicyConfig: n,
                                timeouts: o.telemetryResouce,
                                params: { common: { client: (0, em._)() } },
                            });
                        }),
                        [e_.W5]: (0, l.Gr)((e) => {
                            let { resources: t, player: r } = e.get(e_.tw),
                                { retryPolicyConfig: o } = t.musicExternalApi,
                                n = e.get(e_.CR)({ credentials: 'include' });
                            return new eg.N(n, { prefixUrl: r.telemetry.rumUrl, retryPolicyConfig: o, params: { common: { client: (0, em._)() } } });
                        }),
                        [e_.PL]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(e_.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(e_.Xc).getLanguage(),
                                l = e.get(e_.A4)(),
                                c = e.get(e_.QG);
                            return new ei.w(l, {
                                prefixUrl: (0, i.getTldHost)(o, t, eR.B),
                                retryPolicyConfig: g,
                                timeouts: n.labelsResource,
                                params: { common: { oauth: c.token, client: (0, em._)(), device: (0, eL.V)(), language: a } },
                            });
                        }),
                        [e_.DT]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(e_.tw),
                                { prefixUrl: o, timeouts: n, retryPolicyConfig: g } = r.musicExternalApi,
                                a = e.get(e_.Xc).getLanguage(),
                                l = e.get(e_.A4)(),
                                c = e.get(e_.QG);
                            return new ea.O(l, {
                                prefixUrl: (0, i.getTldHost)(o, t, eR.B),
                                retryPolicyConfig: g,
                                timeouts: n.concertsResource,
                                params: { common: { oauth: c.token, client: (0, em._)(), device: (0, eL.V)(), language: a } },
                            });
                        }),
                        [e_.vg]: (0, l.Gr)(() => (0, eu.a)()),
                    })
                    .registerMany({
                        [e_.UB]: (0, l.Gr)((e) => {
                            let t = e.get(e_.vg);
                            return new p.B(t);
                        }),
                        [e_.Tq]: (0, l.Gr)((e) => {
                            var t;
                            let r = e.get(e_.W5);
                            return (null == (t = window.Ya) ? void 0 : t.Rum) ? new p.G((0, es.y)(), r, window.Ya.Rum) : null;
                        }),
                    })
                    .register(
                        e_.by,
                        (0, l.Gr)((e) => {
                            let t = e.get(e_.oo),
                                r = e.get(e_.U2),
                                o = e.get(e_.Zf),
                                i = r.get(eH.c.YnisonDeviceId);
                            i || ((i = (0, g.A)()), r.set(eH.c.YnisonDeviceId, i));
                            let a = {
                                    info: { app_name: 'Desktop', app_version: (0, eU.H)() || '', title: 'Music Desktop App', device_id: i, type: n.bq.WEB_DESKTOP },
                                    volumeGranularity: 20,
                                    get defaultVolume() {
                                        var l;
                                        return null != (l = t.get(eH.c.YmPlayerVolume)) ? l : void 0;
                                    },
                                },
                                c = e.get(e_.WA).getPassportUid(),
                                u = e.get(e_.QG),
                                s = e.get(e_.UB),
                                m = e.get(e_.Tq),
                                p = [new n.zT(s)];
                            return (
                                m && p.push(new n.qP(m)),
                                new n.Jd({
                                    logger: o,
                                    deviceConfig: a,
                                    multiAuthUserId: c,
                                    oauth: u.token,
                                    ynisonConnectionConfig: eC.ynisonConnectionConfig,
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
