'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3068],
    {
        3068: (e, t, r) => {
            r.d(t, { createClientContainer: () => eC });
            var n = r(83466),
                i = r(76345),
                s = r(33782),
                g = r(33878),
                o = r(96166),
                l = r(67864),
                u = r(14174),
                a = r(83768),
                c = r(65526),
                d = r(60895),
                m = r(63887),
                p = r(35691),
                A = r(81178),
                w = r(18598),
                U = r(6587),
                f = r(87776),
                h = r(68644),
                x = r(1082),
                R = r(94583),
                G = r(57702),
                E = r(63974),
                P = r(29274),
                L = r(11114),
                H = r(39524),
                T = r(72357),
                _ = r(24050),
                B = r(91292),
                W = r(48099),
                X = r(7892),
                v = r(90666),
                I = r(94754),
                k = r(70524),
                y = r(78294),
                b = r(23968),
                q = r(38468),
                C = r(8889),
                D = r(80913),
                M = r(38622),
                S = r(36970),
                N = r(10737),
                Z = r(77027),
                Q = r(83112),
                V = r(9462),
                $ = r(28878),
                z = r(4722),
                j = r(81738),
                O = r(76098),
                Y = r(69900),
                F = r(25070),
                J = r(91424),
                K = r(74274),
                ee = r(61648),
                et = r(10363),
                er = r(58649),
                en = r(66682),
                ei = r(94042),
                es = r(83182),
                eg = r(46378),
                eo = r(35798),
                el = r(45950),
                eu = r(33426),
                ea = r(78701),
                ec = r(14622),
                ed = r(32980),
                em = r(75611),
                ep = r(46852),
                eA = r(33515),
                ew = r(70826),
                eU = r(93705),
                ef = r(36931),
                eh = r(45011),
                ex = r(7310),
                eR = r(23842),
                eG = r(31424),
                eE = r(30141);
            class eP {
                onChangeLanguage(e) {
                    if ('string' == typeof this.token && this.token.length > 0) {
                        let t = 'https://yandex.'.concat(this.tld, '/portal/set/lang/'),
                            r = encodeURIComponent(window.location.href),
                            n = ''.concat(t, '?intl=').concat(e, '&retpath=').concat(r, '&sk=').concat(this.token);
                        window.location.assign(n);
                    } else window.location.reload();
                }
                constructor(e, t) {
                    (0, eE._)(this, 'tld', void 0), (0, eE._)(this, 'token', void 0), (this.tld = e), (this.token = t);
                }
            }
            var eL = r(86720),
                eH = r(36693),
                eT = r(2929),
                e_ = r(17599),
                eB = r(47521),
                eW = r(43342),
                eX = r(80528);
            let ev = /^application\/json(;\s?charset=\S+)?$/;
            class eI {
                async afterResponse(e) {
                    try {
                        if (!e.headers['content-range'] && e.headers['content-type'] && ev.test(e.headers['content-type'])) {
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
                    (0, eE._)(this, 'logger', void 0), (this.logger = e);
                }
            }
            var ek = r(90484),
                ey = r(98868),
                eb = r(50911),
                eq = r(34290);
            async function eC(e) {
                let {
                        tld: t,
                        env: eE,
                        serverDetectedLocale: ev,
                        changeLanguageToken: eC,
                        browserName: eD,
                        browserVersion: eM,
                        executionContextStore: eS,
                        customApiPrefixUrl: eN,
                        customApiToken: eZ,
                    } = e,
                    eQ = (0, eq.J)(await (0, ex.z)(eE, eN)),
                    eV = await (0, eh.B)(eE);
                return new l.Dt()
                    .registerMany({
                        [eX.SX]: (0, l.Gr)(() => eE),
                        [eX.tw]: (0, l.Gr)(() => eQ),
                        [eX.P0]: (0, l.Gr)(() => new o.q(eV)),
                        [eX.Zi]: (0, l.Gr)(() => new eG.Y(eS)),
                    })
                    .register(
                        eX.WA,
                        (0, l.Gr)((e) => {
                            let t = e.get(eX.Zi);
                            return new eW.V(t);
                        }),
                    )
                    .registerMany({
                        [eX.Zf]: (0, l.Gr)((e) => {
                            let t = e.get(eX.P0).get(ef.qV);
                            return new m.r({
                                maxLogLevel: d.cm.DEBUG,
                                secureFields: eT.x,
                                disableLogToConsole: !t,
                                additionalData: {
                                    get puid() {
                                        return e.get(eX.WA).getPassportUid();
                                    },
                                },
                            });
                        }),
                        [eX.TK]: (0, l.Gr)(
                            (e) =>
                                new ((0, eH.b)(m.r))({
                                    maxLogLevel: d.cm.DEBUG,
                                    secureFields: eT.x,
                                    disableLogToConsole: 'development' !== e.get(eX.SX),
                                    additionalData: {
                                        get puid() {
                                            return e.get(eX.WA).getPassportUid();
                                        },
                                    },
                                }),
                        ),
                        [eX.oo]: (0, l.Gr)(() => new ed.V8()),
                        [eX.DP]: (0, l.Gr)(() => new ed.V8()),
                        [eX.RG]: (0, l.Gr)(async (e) => {
                            let {
                                mocks: { enabled: n, mocksProviderUrl: i, urlCapturePattern: s },
                            } = e.get(eX.tw);
                            if (!n) return () => Promise.resolve(null);
                            let { initMocks: o } = await Promise.all([r.e(819), r.e(3144)]).then(r.bind(r, 83144)),
                                l = e.get(eX.DP),
                                u = e.get(eX.Zf),
                                a = 'production' === e.get(eX.SX) ? '/rsc-cache-worker.js' : '',
                                c = () => {
                                    var e;
                                    return null != (e = l.get(e_.c.MocksConfiguration, !1)) ? e : null;
                                };
                            return () =>
                                o({
                                    getMocksConfiguration: c,
                                    log: (e, t) => u.debug('[Mocks] | client: '.concat(e), t),
                                    mocksProviderUrl: i,
                                    serviceWorkerUrl: a,
                                    urlCapturePattern: (0, g.getTldHost)(s, t, eB.B),
                                }).catch((e) => u.debug('[Mocks] | client: initialization failed. '.concat(e)));
                        }),
                        [eX.U2]: (0, l.Gr)(() => new ed.si()),
                        [eX.vH]: (0, l.Gr)(() => new ed.fW()),
                        [eX.y$]: (0, l.Gr)(() => new ec.Mz({ config: { useEntitiesStorage: !1, useFileStorage: !1, useResponseCacheStorage: !1 } })),
                        [eX.Xc]: (0, l.Gr)((e) => {
                            let r = e.get(eX.oo),
                                n = e.get(eX.Zf),
                                { i18n: i } = e.get(eX.tw),
                                s = new Date(Date.now() + 24 * i.cookieExpirationDays * 36e5);
                            return new eL.E({
                                serverDetectedLocale: ev,
                                logger: n,
                                changeLanguageHandler: new eP(t, eC),
                                storage: {
                                    get: () => r.get(e_.c.SavedUserLanguage, !1),
                                    set(e) {
                                        r.set(e_.c.SavedUserLanguage, e, { path: '/', domain: window.location.hostname, expires: s, secure: !0 }, !1);
                                    },
                                },
                            });
                        }),
                        [eX.Hm]: (0, l.P9)(
                            () =>
                                function () {
                                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                    return new c.Q(e);
                                },
                        ),
                        [eX.gu]: (0, l.P9)(
                            () =>
                                function () {
                                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                    return new a.S(e);
                                },
                        ),
                    })
                    .registerMany({
                        [eX.QG]: (0, l.Gr)((e) => new ew.b(e.get(eX.DP), e.get(eX.tw), e.get(eX.Xc).getLanguage(), e.get(eX.WA))),
                        [eX.OP]: (0, l.P9)(
                            (e) =>
                                function () {
                                    var t, r, n, i, s, g;
                                    let o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                        l = arguments.length > 1 ? arguments[1] : void 0,
                                        u = e.get(eX.Zf),
                                        {
                                            resources: { musicExternalApi: a },
                                        } = e.get(eX.tw),
                                        c = new eT.N(u),
                                        d = new eI(u);
                                    return (
                                        (o.timeout = a.defaultTimeout),
                                        (o.hooks = {
                                            afterResponse: [d.afterResponseHook, ...((null == o || null == (t = o.hooks) ? void 0 : t.afterResponse) || [])],
                                            afterTimeout: [c.beforeErrorHook, ...((null == o || null == (r = o.hooks) ? void 0 : r.afterTimeout) || [])],
                                            beforeError: [c.beforeErrorHook, ...((null == o || null == (n = o.hooks) ? void 0 : n.beforeError) || [])],
                                            beforeRequest: [
                                                ey.x,
                                                (0, ey.u)(eZ),
                                                d.beforeRequestHook,
                                                ...((null == o || null == (i = o.hooks) ? void 0 : i.beforeRequest) || []),
                                            ],
                                            beforeRetry: [eb.i, c.beforeRetryHook, ...((null == o || null == (s = o.hooks) ? void 0 : s.beforeRetry) || [])],
                                            onRequestDone: [...((null == o || null == (g = o.hooks) ? void 0 : g.onRequestDone) || [])],
                                        }),
                                        l(o)
                                    );
                                },
                        ),
                    })
                    .registerMany({
                        [eX.A4]: (0, l.P9)(
                            (e) =>
                                function () {
                                    var r;
                                    let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                        i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e.get(eX.OP),
                                        s = e.get(eX.QG),
                                        { resources: o } = e.get(eX.tw),
                                        l = i({ credentials: 'include' }, e.get(eX.Hm)),
                                        { prefixUrl: u, timeouts: a, retryPolicyConfig: c } = o.musicExternalApi,
                                        d = e.get(eX.Xc).getLanguage(),
                                        m = new A.Q(l, {
                                            prefixUrl: (0, g.getTldHost)(u, t, eB.B),
                                            retryPolicyConfig: c,
                                            timeouts: a.accountResource,
                                            params: {
                                                common: {
                                                    client: (0, eA._)(),
                                                    language: d,
                                                    get multiAuthUserId() {
                                                        return e.get(eX.WA).getPassportUid();
                                                    },
                                                },
                                            },
                                        });
                                    return (
                                        (n.hooks = { beforeError: [(0, eU.o)(s, m), ...((null == n || null == (r = n.hooks) ? void 0 : r.beforeError) || [])] }),
                                        i(n, e.get(eX.Hm))
                                    );
                                },
                        ),
                        [eX.mr]: (0, l.P9)(
                            (e) =>
                                function () {
                                    var t, r, n, i, s, g;
                                    let o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                        l = e.get(eX.Hm),
                                        u = e.get(eX.Zf),
                                        {
                                            resources: { musicExternalApi: a },
                                        } = e.get(eX.tw),
                                        c = new eT.N(u);
                                    return (
                                        (o.timeout = a.defaultTimeout),
                                        (o.hooks = {
                                            afterResponse: [...((null == o || null == (t = o.hooks) ? void 0 : t.afterResponse) || [])],
                                            afterTimeout: [c.beforeErrorHook, ...((null == o || null == (r = o.hooks) ? void 0 : r.afterTimeout) || [])],
                                            beforeError: [c.beforeErrorHook, ...((null == o || null == (n = o.hooks) ? void 0 : n.beforeError) || [])],
                                            beforeRequest: [ey.x, ...((null == o || null == (i = o.hooks) ? void 0 : i.beforeRequest) || [])],
                                            beforeRetry: [eb.i, c.beforeRetryHook, ...((null == o || null == (s = o.hooks) ? void 0 : s.beforeRetry) || [])],
                                            onRequestDone: [...((null == o || null == (g = o.hooks) ? void 0 : g.onRequestDone) || [])],
                                        }),
                                        l(o)
                                    );
                                },
                        ),
                    })
                    .register(
                        eX.CR,
                        (0, l.P9)(
                            (e) =>
                                function () {
                                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                    return e.get(eX.A4)(t, e.get(eX.gu));
                                },
                        ),
                    )
                    .registerMany({
                        [eX.$I]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eX.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                o = e.get(eX.Xc).getLanguage(),
                                l = e.get(eX.A4)({ credentials: 'include' });
                            return new A.Q(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eB.B),
                                retryPolicyConfig: s,
                                timeouts: i.accountResource,
                                params: {
                                    common: {
                                        client: (0, eA._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e.get(eX.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eX._1]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eX.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                o = e.get(eX.Xc).getLanguage(),
                                l = e.get(eX.A4)({ credentials: 'include' });
                            return new w.d(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eB.B),
                                retryPolicyConfig: s,
                                timeouts: i.usersResource,
                                params: {
                                    common: {
                                        client: (0, eA._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e.get(eX.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eX.V3]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eX.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                o = e.get(eX.Xc).getLanguage(),
                                l = e.get(eX.A4)({ credentials: 'include' });
                            return new U.G(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eB.B),
                                retryPolicyConfig: s,
                                timeouts: i.landingResource,
                                params: {
                                    common: {
                                        client: (0, eA._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e.get(eX.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eX.Lb]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eX.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                o = e.get(eX.Xc).getLanguage(),
                                l = e.get(eX.A4)({ credentials: 'include' });
                            return new f.H(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eB.B),
                                retryPolicyConfig: s,
                                timeouts: i.landing3Resource,
                                params: {
                                    common: {
                                        client: (0, eA._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e.get(eX.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eX.tz]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eX.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                o = e.get(eX.Xc).getLanguage(),
                                l = e.get(eX.A4)({ credentials: 'include' });
                            return new h.B(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eB.B),
                                retryPolicyConfig: s,
                                timeouts: i.landingResource,
                                params: {
                                    common: {
                                        client: (0, eA._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e.get(eX.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eX.$8]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eX.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                o = e.get(eX.Xc).getLanguage(),
                                l = e.get(eX.A4)({ credentials: 'include' });
                            return new x.w(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eB.B),
                                retryPolicyConfig: s,
                                timeouts: i.libraryResource,
                                params: {
                                    common: {
                                        client: (0, eA._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e.get(eX.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eX.Oo]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eX.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                o = e.get(eX.Xc).getLanguage(),
                                l = e.get(eX.A4)({ credentials: 'include' });
                            return new R.L(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eB.B),
                                retryPolicyConfig: s,
                                timeouts: i.tracksResource,
                                params: {
                                    common: {
                                        client: (0, eA._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e.get(eX.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eX.$5]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eX.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                o = e.get(eX.Xc).getLanguage(),
                                l = e.get(eX.A4)({ credentials: 'include' });
                            return new G._(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eB.B),
                                retryPolicyConfig: s,
                                timeouts: i.availabilityResource,
                                params: {
                                    common: {
                                        client: (0, eA._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e.get(eX.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eX.qT]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eX.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                o = e.get(eX.Xc).getLanguage(),
                                l = e.get(eX.A4)({ credentials: 'include' });
                            return new E.v(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eB.B),
                                retryPolicyConfig: s,
                                timeouts: i.getFileInfoResource,
                                params: {
                                    common: {
                                        client: (0, eA._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e.get(eX.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eX.X4]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eX.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                o = e.get(eX.Xc).getLanguage(),
                                l = e.get(eX.A4)({ credentials: 'include' });
                            return new P.a(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eB.B),
                                retryPolicyConfig: s,
                                timeouts: i.topResource,
                                params: {
                                    common: {
                                        client: (0, eA._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e.get(eX.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eX.O9]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eX.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                o = e.get(eX.Xc).getLanguage(),
                                l = e.get(eX.A4)({ credentials: 'include' });
                            return new L.b(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eB.B),
                                retryPolicyConfig: s,
                                timeouts: i.artistsResource,
                                params: {
                                    common: {
                                        client: (0, eA._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e.get(eX.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eX.E]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eX.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                o = e.get(eX.Xc).getLanguage(),
                                l = e.get(eX.A4)({ credentials: 'include' });
                            return new H.V(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eB.B),
                                retryPolicyConfig: s,
                                timeouts: i.slidesResource,
                                params: {
                                    common: {
                                        client: (0, eA._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e.get(eX.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eX.wH]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eX.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                o = e.get(eX.Xc).getLanguage(),
                                l = e.get(eX.A4)({ credentials: 'include' });
                            return new T.c(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eB.B),
                                retryPolicyConfig: s,
                                timeouts: i.redAlertResource,
                                params: {
                                    common: {
                                        client: (0, eA._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e.get(eX.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eX.ok]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eX.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                o = e.get(eX.Xc).getLanguage(),
                                l = e.get(eX.A4)({ credentials: 'include' });
                            return new _.Z(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eB.B),
                                retryPolicyConfig: s,
                                timeouts: i.rotorResource,
                                params: {
                                    common: {
                                        client: (0, eA._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e.get(eX.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eX.yq]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eX.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                o = e.get(eX.Xc).getLanguage(),
                                l = e.get(eX.A4)({ credentials: 'include' });
                            return new B.p(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eB.B),
                                retryPolicyConfig: s,
                                timeouts: i.searchResource,
                                params: {
                                    common: {
                                        client: (0, eA._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e.get(eX.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eX.NN]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eX.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                o = e.get(eX.Xc).getLanguage(),
                                l = e.get(eX.A4)({ credentials: 'include' });
                            return new W.v(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eB.B),
                                retryPolicyConfig: s,
                                timeouts: i.searchResource,
                                params: {
                                    common: {
                                        client: (0, eA._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e.get(eX.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eX.qN]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eX.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                o = e.get(eX.Xc).getLanguage(),
                                l = e.get(eX.A4)({ credentials: 'include' });
                            return new X.T(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eB.B),
                                retryPolicyConfig: s,
                                timeouts: i.playlistResource,
                                params: {
                                    common: {
                                        client: (0, eA._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e.get(eX.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eX.ro]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eX.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                o = e.get(eX.Xc).getLanguage(),
                                l = e.get(eX.A4)({ credentials: 'include' });
                            return new v.e(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eB.B),
                                retryPolicyConfig: s,
                                timeouts: i.playlistsResource,
                                params: {
                                    common: {
                                        client: (0, eA._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e.get(eX.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eX.nM]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eX.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                o = e.get(eX.Xc).getLanguage(),
                                l = e.get(eX.A4)({ credentials: 'include' });
                            return new I.o(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eB.B),
                                retryPolicyConfig: s,
                                timeouts: i.pinResource,
                                params: {
                                    common: {
                                        client: (0, eA._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e.get(eX.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eX.Ut]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eX.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                o = e.get(eX.Xc).getLanguage(),
                                l = e.get(eX.A4)({ credentials: 'include' });
                            return new k.$(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eB.B),
                                retryPolicyConfig: s,
                                timeouts: i.metatagsResource,
                                params: {
                                    common: {
                                        client: (0, eA._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e.get(eX.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eX.K1]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eX.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                o = e.get(eX.Xc).getLanguage(),
                                l = e.get(eX.A4)({ credentials: 'include' });
                            return new y.p(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eB.B),
                                retryPolicyConfig: s,
                                timeouts: i.tagResource,
                                params: {
                                    common: {
                                        client: (0, eA._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e.get(eX.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eX.eu]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eX.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                o = e.get(eX.Xc).getLanguage(),
                                l = e.get(eX.A4)({ credentials: 'include' });
                            return new b.D(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eB.B),
                                retryPolicyConfig: s,
                                timeouts: i.feedResource,
                                params: {
                                    common: {
                                        client: (0, eA._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e.get(eX.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eX.aE]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eX.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                o = e.get(eX.Xc).getLanguage(),
                                l = e.get(eX.A4)({ credentials: 'include' });
                            return new q.l(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eB.B),
                                retryPolicyConfig: s,
                                timeouts: i.pinsResource,
                                params: {
                                    common: {
                                        client: (0, eA._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e.get(eX.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eX.ki]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eX.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                o = e.get(eX.Xc).getLanguage(),
                                l = e.get(eX.A4)({ credentials: 'include' });
                            return new C.I(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eB.B),
                                retryPolicyConfig: s,
                                timeouts: i.musicHistoryResource,
                                params: {
                                    common: {
                                        client: (0, eA._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e.get(eX.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eX.c9]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eX.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                o = e.get(eX.Xc).getLanguage(),
                                l = e.get(eX.A4)({ credentials: 'include' });
                            return new D.s(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eB.B),
                                retryPolicyConfig: s,
                                timeouts: i.dynamicPagesResource,
                                params: {
                                    common: {
                                        client: (0, eA._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e.get(eX.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eX.en]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eX.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                o = e.get(eX.Xc).getLanguage(),
                                l = e.get(eX.A4)({ credentials: 'include' });
                            return new M.B(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eB.B),
                                retryPolicyConfig: s,
                                timeouts: i.chartResource,
                                params: {
                                    common: {
                                        client: (0, eA._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e.get(eX.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eX.jQ]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eX.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                o = e.get(eX.Xc).getLanguage(),
                                l = e.get(eX.A4)({ credentials: 'include' });
                            return new S._(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eB.B),
                                retryPolicyConfig: s,
                                timeouts: i.clipsResource,
                                params: {
                                    common: {
                                        client: (0, eA._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e.get(eX.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eX.cZ]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eX.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                o = e.get(eX.Xc).getLanguage(),
                                l = e.get(eX.A4)({ credentials: 'include' });
                            return new N.c(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eB.B),
                                retryPolicyConfig: s,
                                timeouts: i.lyricViewsResource,
                                params: {
                                    common: {
                                        client: (0, eA._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e.get(eX.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eX.Zl]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eX.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                o = e.get(eX.Xc).getLanguage(),
                                l = e.get(eX.A4)({ credentials: 'include' });
                            return new Z.D(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eB.B),
                                retryPolicyConfig: s,
                                timeouts: i.nonMusicResource,
                                params: {
                                    common: {
                                        client: (0, eA._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e.get(eX.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eX.CN]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eX.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                o = e.get(eX.Xc).getLanguage(),
                                l = e.get(eX.A4)({ credentials: 'include' });
                            return new Q.N(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eB.B),
                                retryPolicyConfig: s,
                                timeouts: i.donationResource,
                                params: {
                                    common: {
                                        client: (0, eA._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e.get(eX.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eX.JM]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eX.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                o = e.get(eX.Xc).getLanguage(),
                                l = e.get(eX.A4)({ credentials: 'include' });
                            return new V.c(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eB.B),
                                retryPolicyConfig: s,
                                timeouts: i.streamsResource,
                                params: {
                                    common: {
                                        client: (0, eA._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e.get(eX.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eX.P1]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eX.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                o = e.get(eX.Xc).getLanguage(),
                                l = e.get(eX.A4)({ credentials: 'include' });
                            return new $.S(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eB.B),
                                retryPolicyConfig: s,
                                timeouts: i.loaderResource,
                                params: {
                                    common: {
                                        client: (0, eA._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e.get(eX.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eX.re]: (0, l.Gr)((e) => {
                            let { resources: t } = e.get(eX.tw),
                                { timeouts: r, retryPolicyConfig: n } = t.musicExternalApi,
                                i = e.get(eX.Xc).getLanguage(),
                                s = e.get(eX.mr)({ credentials: 'omit' });
                            return new z.s(s, {
                                prefixUrl: '',
                                retryPolicyConfig: n,
                                timeouts: r.prefixlessResource,
                                params: {
                                    common: {
                                        client: (0, eA._)(),
                                        language: i,
                                        get multiAuthUserId() {
                                            return e.get(eX.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eX.Lk]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eX.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                o = e.get(eX.Xc).getLanguage(),
                                l = e.get(eX.A4)({ credentials: 'include' });
                            return new j.g(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eB.B),
                                retryPolicyConfig: s,
                                timeouts: i.filtersResource,
                                params: {
                                    common: {
                                        client: (0, eA._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e.get(eX.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eX.uM]: (0, l.Gr)((e) => {
                            var r;
                            let { acqOffers: i, rumSettings: s } = e.get(eX.tw),
                                { brand: g, service: o, environment: l, appVersion: u } = i,
                                { platform: a, page: c } = s,
                                d = e.get(eX.QG),
                                m = e.get(eX.Xc).getLanguage(),
                                p = e.get(eX.A4),
                                A = d.token || null,
                                w = p({ credentials: A ? 'omit' : 'include' }),
                                { request_id: U, puid: f } = null != (r = e.get(eX.Zi).getStore()) ? r : {};
                            return new n.mZ({
                                brand: g,
                                service: o,
                                environment: l,
                                appVersion: u,
                                etld: 'yandex.'.concat(t),
                                platform: 'Web',
                                lang: m,
                                oAuthToken: A,
                                authMethod: A ? 'oauth' : 'default',
                                requester: (0, ek.n)(w),
                                puid: (null == f ? void 0 : f.toString()) || null,
                                rumOptions: { platform: a, page: c, requestId: U },
                            });
                        }),
                        [eX.$$]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eX.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                o = e.get(eX.Xc).getLanguage(),
                                l = e.get(eX.A4)({ credentials: 'include' });
                            return new O.E(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eB.B),
                                retryPolicyConfig: s,
                                timeouts: i.ugcResource,
                                params: {
                                    common: {
                                        client: (0, eA._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e.get(eX.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eX.sv]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eX.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                o = e.get(eX.Xc).getLanguage(),
                                l = e.get(eX.A4)({ credentials: 'include' });
                            return new Y.L(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eB.B),
                                retryPolicyConfig: s,
                                timeouts: i.collectionResource,
                                params: {
                                    common: {
                                        client: (0, eA._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e.get(eX.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eX.gd]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eX.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                o = e.get(eX.Xc).getLanguage(),
                                l = e.get(eX.A4)({ credentials: 'include' });
                            return new F.z(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eB.B),
                                retryPolicyConfig: s,
                                timeouts: i.adsResource,
                                params: {
                                    common: {
                                        client: (0, eA._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e.get(eX.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eX.Ez]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eX.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                o = e.get(eX.Xc).getLanguage(),
                                l = e.get(eX.A4)({ credentials: 'include' });
                            return new J.l(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eB.B),
                                retryPolicyConfig: s,
                                timeouts: i.personalResource,
                                params: {
                                    common: {
                                        client: (0, eA._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e.get(eX.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eX.N1]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eX.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                o = e.get(eX.Xc).getLanguage(),
                                l = e.get(eX.A4)({ credentials: 'include' });
                            return new K.H(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eB.B),
                                retryPolicyConfig: s,
                                timeouts: i.disclaimersResource,
                                params: {
                                    common: {
                                        client: (0, eA._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e.get(eX.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eX.u2]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eX.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                o = e.get(eX.Xc).getLanguage(),
                                l = e.get(eX.A4)({ credentials: 'include' });
                            return new ee.J(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eB.B),
                                retryPolicyConfig: s,
                                timeouts: i.familyResource,
                                params: {
                                    common: {
                                        client: (0, eA._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e.get(eX.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eX.TD]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eX.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                o = e.get(eX.Xc).getLanguage(),
                                l = e.get(eX.A4)({ credentials: 'include' });
                            return new et.L(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eB.B),
                                retryPolicyConfig: s,
                                timeouts: i.childrenLandingResource,
                                params: {
                                    common: {
                                        client: (0, eA._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e.get(eX.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eX.wK]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eX.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                o = e.get(eX.Xc).getLanguage(),
                                l = e.get(eX.A4)({ credentials: 'include' });
                            return new er.u(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eB.B),
                                retryPolicyConfig: s,
                                timeouts: i.landingBlocksResource,
                                params: {
                                    common: {
                                        client: (0, eA._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e.get(eX.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eX.dh]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eX.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                o = e.get(eX.Xc).getLanguage(),
                                l = e.get(eX.A4)({ credentials: 'include' });
                            return new en.q(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eB.B),
                                retryPolicyConfig: s,
                                timeouts: i.promoResource,
                                params: {
                                    common: {
                                        client: (0, eA._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e.get(eX.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eX.LC]: (0, l.Gr)((e) => {
                            let { resources: t, player: r } = e.get(eX.tw),
                                { timeouts: n, retryPolicyConfig: i } = t.musicExternalApi,
                                s = e.get(eX.CR)({ credentials: 'include' });
                            return new ei.g(s, {
                                prefixUrl: r.telemetry.telemetryUrl,
                                retryPolicyConfig: i,
                                timeouts: n.telemetryResouce,
                                params: { common: { client: (0, eA._)() } },
                            });
                        }),
                        [eX.W5]: (0, l.Gr)((e) => {
                            let { resources: t, player: r } = e.get(eX.tw),
                                { retryPolicyConfig: n } = t.musicExternalApi,
                                i = e.get(eX.CR)({ credentials: 'include' });
                            return new es.N(i, { prefixUrl: r.telemetry.rumUrl, retryPolicyConfig: n, params: { common: { client: (0, eA._)() } } });
                        }),
                        [eX.EN]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eX.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                o = e.get(eX.Xc).getLanguage(),
                                l = e.get(eX.A4)({ credentials: 'include' });
                            return new eg._(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eB.B),
                                retryPolicyConfig: s,
                                timeouts: i.afterTrackResource,
                                params: {
                                    common: {
                                        client: (0, eA._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e.get(eX.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eX.PL]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eX.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                o = e.get(eX.Xc).getLanguage(),
                                l = e.get(eX.A4)({ credentials: 'include' });
                            return new eo.w(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eB.B),
                                retryPolicyConfig: s,
                                timeouts: i.labelsResource,
                                params: {
                                    common: {
                                        client: (0, eA._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e.get(eX.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eX.DT]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eX.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                o = e.get(eX.Xc).getLanguage(),
                                l = e.get(eX.A4)({ credentials: 'include' });
                            return new el.O(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eB.B),
                                retryPolicyConfig: s,
                                timeouts: i.concertsResource,
                                params: {
                                    common: {
                                        client: (0, eA._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e.get(eX.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eX.dA]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eX.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                o = e.get(eX.Xc).getLanguage(),
                                l = e.get(eX.A4)({ credentials: 'include' });
                            return new eu.Q(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eB.B),
                                retryPolicyConfig: s,
                                timeouts: i.wordsResource,
                                params: {
                                    common: {
                                        client: (0, eA._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e.get(eX.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eX.$Y]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(eX.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                o = e.get(eX.Xc).getLanguage(),
                                l = e.get(eX.A4)({ credentials: 'include' });
                            return new ea.C(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eB.B),
                                retryPolicyConfig: s,
                                timeouts: i.wheelResource,
                                params: {
                                    common: {
                                        client: (0, eA._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e.get(eX.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eX.vg]: (0, l.Gr)(() => (0, em.a)()),
                    })
                    .register(
                        eX.ff,
                        (0, l.Gr)((e) => {
                            let t = e.get(eX.N1);
                            return new u.AS({ dataSource: new eR.C(t) });
                        }),
                    )
                    .registerMany({
                        [eX.UB]: (0, l.Gr)((e) => {
                            let t = e.get(eX.vg);
                            return new p.B(t);
                        }),
                        [eX.Tq]: (0, l.Gr)((e) => {
                            var t;
                            let r = e.get(eX.W5);
                            return (null == (t = window.Ya) ? void 0 : t.Rum) ? new p.G((0, ep.y)(), r, window.Ya.Rum) : null;
                        }),
                    })
                    .register(
                        eX.by,
                        (0, l.Gr)((e) => {
                            let t = e.get(eX.oo),
                                r = e.get(eX.Zf),
                                n = (0, s.A)(),
                                g = {
                                    info: { app_name: eD || 'Browser', app_version: eM || '', title: 'Browser '.concat(eD), device_id: n, type: i.bq.WEB },
                                    volumeGranularity: 20,
                                    get defaultVolume() {
                                        var o;
                                        return null != (o = t.get(e_.c.YmPlayerVolume)) ? o : void 0;
                                    },
                                },
                                l = e.get(eX.WA).getPassportUid(),
                                u = e.get(eX.QG),
                                a = e.get(eX.UB),
                                c = e.get(eX.Tq),
                                d = [new i.zT(a)];
                            return (
                                c && d.push(new i.qP(c)),
                                new i.Jd({
                                    logger: r,
                                    deviceConfig: g,
                                    multiAuthUserId: l,
                                    oauth: u.token,
                                    ynisonConnectionConfig: eQ.ynisonConnectionConfig,
                                    metricsTransport: d,
                                    variables: {
                                        isShadow: !0,
                                        get puid() {
                                            return e.get(eX.WA).getPassportUid();
                                        },
                                    },
                                })
                            );
                        }),
                    );
            }
        },
    },
]);
