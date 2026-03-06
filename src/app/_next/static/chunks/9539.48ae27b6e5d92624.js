'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9539],
    {
        9539: (e, t, r) => {
            r.d(t, { createClientContainer: () => ey });
            var n = r(89885),
                i = r(18542),
                s = r(9348),
                g = r(15209),
                o = r(21220),
                l = r(58900),
                u = r(79850),
                a = r(84690),
                c = r(34965),
                d = r(18258),
                m = r(36211),
                p = r(5892),
                A = r(40080),
                w = r(65099),
                U = r(81658),
                f = r(79817),
                h = r(88660),
                x = r(52962),
                R = r(96992),
                G = r(48448),
                E = r(93076),
                P = r(36788),
                H = r(35566),
                L = r(64659),
                T = r(63988),
                _ = r(37934),
                B = r(79329),
                W = r(12774),
                X = r(24252),
                v = r(29372),
                I = r(10582),
                k = r(13696),
                y = r(78226),
                b = r(94150),
                q = r(92103),
                C = r(3463),
                D = r(24120),
                M = r(55948),
                S = r(80535),
                Z = r(38689),
                N = r(50218),
                V = r(34720),
                Q = r(54280),
                $ = r(99676),
                z = r(86420),
                j = r(33716),
                K = r(30508),
                O = r(95198),
                Y = r(10560),
                F = r(74922),
                J = r(16068),
                ee = r(41778),
                et = r(29449),
                er = r(3327),
                en = r(87716),
                ei = r(42132),
                es = r(81760),
                eg = r(54924),
                eo = r(2936),
                el = r(40168),
                eu = r(12460),
                ea = r(78420),
                ec = r(25289),
                ed = r(24269),
                em = r(65630),
                ep = r(77508),
                eA = r(74875),
                ew = r(62901),
                eU = r(27493),
                ef = r(12979),
                eh = r(558),
                ex = r(96559);
            class eR {
                onChangeLanguage(e) {
                    if ('string' == typeof this.token && this.token.length > 0) {
                        let t = 'https://yandex.'.concat(this.tld, '/portal/set/lang/'),
                            r = encodeURIComponent(window.location.href),
                            n = ''.concat(t, '?intl=').concat(e, '&retpath=').concat(r, '&sk=').concat(this.token);
                        window.location.assign(n);
                    } else window.location.reload();
                }
                constructor(e, t) {
                    (0, ex._)(this, 'tld', void 0), (0, ex._)(this, 'token', void 0), (this.tld = e), (this.token = t);
                }
            }
            var eG = r(59433),
                eE = r(90579),
                eP = r(37343),
                eH = r(90461),
                eL = r(78171),
                eT = r(45628),
                e_ = r(67454);
            let eB = /^application\/json(;\s?charset=\S+)?$/;
            class eW {
                async afterResponse(e) {
                    try {
                        if (!e.headers['content-range'] && e.headers['content-type'] && eB.test(e.headers['content-type'])) {
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
                    (0, ex._)(this, 'logger', void 0), (this.logger = e);
                }
            }
            var eX = r(65098),
                ev = r(88246),
                eI = r(13871),
                ek = r(6556);
            async function ey(e) {
                let { tld: t, env: ex, serverDetectedLocale: eB, changeLanguageToken: ey, browserName: eb, browserVersion: eq, executionContextStore: eC } = e,
                    eD = (0, ek.J)(await (0, ef.z)(ex)),
                    eM = await (0, eU.B)(ex);
                return new l.Dt()
                    .registerMany({
                        [e_.SX]: (0, l.Gr)(() => ex),
                        [e_.tw]: (0, l.Gr)(() => eD),
                        [e_.P0]: (0, l.Gr)(() => new o.q(eM)),
                        [e_.Zi]: (0, l.Gr)(() => new eh.Y(eC)),
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
                            return new d.r({
                                maxLogLevel: c.cm.DEBUG,
                                secureFields: eP.x,
                                disableLogToConsole: !t,
                                additionalData: {
                                    get puid() {
                                        return e.get(e_.WA).getPassportUid();
                                    },
                                },
                            });
                        }),
                        [e_.TK]: (0, l.Gr)(
                            (e) =>
                                new ((0, eE.b)(d.r))({
                                    maxLogLevel: c.cm.DEBUG,
                                    secureFields: eP.x,
                                    disableLogToConsole: 'development' !== e.get(e_.SX),
                                    additionalData: {
                                        get puid() {
                                            return e.get(e_.WA).getPassportUid();
                                        },
                                    },
                                }),
                        ),
                        [e_.oo]: (0, l.Gr)(() => new ea.V8()),
                        [e_.DP]: (0, l.Gr)(() => new ea.V8()),
                        [e_.RG]: (0, l.Gr)(async (e) => {
                            let {
                                mocks: { enabled: n, mocksProviderUrl: i, urlCapturePattern: s },
                            } = e.get(e_.tw);
                            if (!n) return () => Promise.resolve(null);
                            let { initMocks: o } = await Promise.all([r.e(2650), r.e(2357)]).then(r.bind(r, 22357)),
                                l = e.get(e_.DP),
                                u = e.get(e_.Zf),
                                a = 'production' === e.get(e_.SX) ? '/rsc-cache-worker.js' : '',
                                c = () => {
                                    var e;
                                    return null != (e = l.get(eH.c.MocksConfiguration, !1)) ? e : null;
                                };
                            return () =>
                                o({
                                    getMocksConfiguration: c,
                                    mocksProviderUrl: i,
                                    onError: (e) => u.error('[Mocks]: '.concat(e)),
                                    serviceWorkerUrl: a,
                                    urlCapturePattern: (0, g.getTldHost)(s, t, eL.B),
                                }).catch((e) => u.error('Mocks client initialization failed: '.concat(e)));
                        }),
                        [e_.U2]: (0, l.Gr)(() => new ea.si()),
                        [e_.vH]: (0, l.Gr)(() => new ea.fW()),
                        [e_.y$]: (0, l.Gr)(() => new eu.Mz({ config: { useEntitiesStorage: !1, useFileStorage: !1, useResponseCacheStorage: !1 } })),
                        [e_.Xc]: (0, l.Gr)((e) => {
                            let r = e.get(e_.oo),
                                n = e.get(e_.Zf),
                                { i18n: i } = e.get(e_.tw),
                                s = new Date(Date.now() + 24 * i.cookieExpirationDays * 36e5);
                            return new eG.E({
                                serverDetectedLocale: eB,
                                logger: n,
                                changeLanguageHandler: new eR(t, ey),
                                storage: {
                                    get: () => r.get(eH.c.SavedUserLanguage, !1),
                                    set(e) {
                                        r.set(eH.c.SavedUserLanguage, e, { path: '/', domain: window.location.hostname, expires: s, secure: !0 }, !1);
                                    },
                                },
                            });
                        }),
                        [e_.Hm]: (0, l.P9)(
                            () =>
                                function () {
                                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                    return new a.Q(e);
                                },
                        ),
                        [e_.gu]: (0, l.P9)(
                            () =>
                                function () {
                                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                    return new u.S(e);
                                },
                        ),
                    })
                    .registerMany({
                        [e_.QG]: (0, l.Gr)((e) => new ep.b(e.get(e_.DP), e.get(e_.tw), e.get(e_.Xc).getLanguage(), e.get(e_.WA))),
                        [e_.OP]: (0, l.P9)(
                            (e) =>
                                function () {
                                    var t, r, n, i, s, g;
                                    let o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                        l = arguments.length > 1 ? arguments[1] : void 0,
                                        u = e.get(e_.Zf),
                                        {
                                            resources: { musicExternalApi: a },
                                        } = e.get(e_.tw),
                                        c = new eP.N(u),
                                        d = new eW(u);
                                    return (
                                        (o.timeout = a.defaultTimeout),
                                        (o.hooks = {
                                            afterResponse: [d.afterResponseHook, ...((null == o || null == (t = o.hooks) ? void 0 : t.afterResponse) || [])],
                                            afterTimeout: [c.beforeErrorHook, ...((null == o || null == (r = o.hooks) ? void 0 : r.afterTimeout) || [])],
                                            beforeError: [c.beforeErrorHook, ...((null == o || null == (n = o.hooks) ? void 0 : n.beforeError) || [])],
                                            beforeRequest: [ev.x, d.beforeRequestHook, ...((null == o || null == (i = o.hooks) ? void 0 : i.beforeRequest) || [])],
                                            beforeRetry: [eI.i, c.beforeRetryHook, ...((null == o || null == (s = o.hooks) ? void 0 : s.beforeRetry) || [])],
                                            onRequestDone: [...((null == o || null == (g = o.hooks) ? void 0 : g.onRequestDone) || [])],
                                        }),
                                        l(o)
                                    );
                                },
                        ),
                    })
                    .registerMany({
                        [e_.A4]: (0, l.P9)(
                            (e) =>
                                function () {
                                    var r;
                                    let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                        i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e.get(e_.OP),
                                        s = e.get(e_.QG),
                                        { resources: o } = e.get(e_.tw),
                                        l = i({ credentials: 'include' }, e.get(e_.Hm)),
                                        { prefixUrl: u, timeouts: a, retryPolicyConfig: c } = o.musicExternalApi,
                                        d = e.get(e_.Xc).getLanguage(),
                                        m = new p.Q(l, {
                                            prefixUrl: (0, g.getTldHost)(u, t, eL.B),
                                            retryPolicyConfig: c,
                                            timeouts: a.accountResource,
                                            params: {
                                                common: {
                                                    client: (0, em._)(),
                                                    language: d,
                                                    get multiAuthUserId() {
                                                        return e.get(e_.WA).getPassportUid();
                                                    },
                                                },
                                            },
                                        });
                                    return (
                                        (n.hooks = { beforeError: [(0, eA.o)(s, m), ...((null == n || null == (r = n.hooks) ? void 0 : r.beforeError) || [])] }),
                                        i(n, e.get(e_.Hm))
                                    );
                                },
                        ),
                        [e_.KH]: (0, l.P9)(
                            (e) =>
                                function () {
                                    var t, r, n, i, s, g;
                                    let o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                        l = e.get(e_.Hm),
                                        u = e.get(e_.Zf),
                                        {
                                            resources: { musicExternalApi: a },
                                        } = e.get(e_.tw),
                                        c = new eP.N(u);
                                    return (
                                        (o.timeout = a.defaultTimeout),
                                        (o.hooks = {
                                            afterResponse: [...((null == o || null == (t = o.hooks) ? void 0 : t.afterResponse) || [])],
                                            afterTimeout: [c.beforeErrorHook, ...((null == o || null == (r = o.hooks) ? void 0 : r.afterTimeout) || [])],
                                            beforeError: [c.beforeErrorHook, ...((null == o || null == (n = o.hooks) ? void 0 : n.beforeError) || [])],
                                            beforeRequest: [ev.x, ...((null == o || null == (i = o.hooks) ? void 0 : i.beforeRequest) || [])],
                                            beforeRetry: [eI.i, c.beforeRetryHook, ...((null == o || null == (s = o.hooks) ? void 0 : s.beforeRetry) || [])],
                                            onRequestDone: [...((null == o || null == (g = o.hooks) ? void 0 : g.onRequestDone) || [])],
                                        }),
                                        l(o)
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
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                o = e.get(e_.Xc).getLanguage(),
                                l = e.get(e_.A4)({ credentials: 'include' });
                            return new p.Q(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eL.B),
                                retryPolicyConfig: s,
                                timeouts: i.accountResource,
                                params: {
                                    common: {
                                        client: (0, em._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e.get(e_.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [e_._1]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(e_.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                o = e.get(e_.Xc).getLanguage(),
                                l = e.get(e_.A4)({ credentials: 'include' });
                            return new A.d(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eL.B),
                                retryPolicyConfig: s,
                                timeouts: i.usersResource,
                                params: {
                                    common: {
                                        client: (0, em._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e.get(e_.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [e_.V3]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(e_.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                o = e.get(e_.Xc).getLanguage(),
                                l = e.get(e_.A4)({ credentials: 'include' });
                            return new w.G(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eL.B),
                                retryPolicyConfig: s,
                                timeouts: i.landingResource,
                                params: {
                                    common: {
                                        client: (0, em._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e.get(e_.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [e_.Lb]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(e_.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                o = e.get(e_.Xc).getLanguage(),
                                l = e.get(e_.A4)({ credentials: 'include' });
                            return new U.H(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eL.B),
                                retryPolicyConfig: s,
                                timeouts: i.landing3Resource,
                                params: {
                                    common: {
                                        client: (0, em._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e.get(e_.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [e_.tz]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(e_.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                o = e.get(e_.Xc).getLanguage(),
                                l = e.get(e_.A4)({ credentials: 'include' });
                            return new f.B(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eL.B),
                                retryPolicyConfig: s,
                                timeouts: i.landingResource,
                                params: {
                                    common: {
                                        client: (0, em._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e.get(e_.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [e_.$8]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(e_.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                o = e.get(e_.Xc).getLanguage(),
                                l = e.get(e_.A4)({ credentials: 'include' });
                            return new h.w(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eL.B),
                                retryPolicyConfig: s,
                                timeouts: i.libraryResource,
                                params: {
                                    common: {
                                        client: (0, em._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e.get(e_.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [e_.Oo]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(e_.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                o = e.get(e_.Xc).getLanguage(),
                                l = e.get(e_.A4)({ credentials: 'include' });
                            return new x.L(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eL.B),
                                retryPolicyConfig: s,
                                timeouts: i.tracksResource,
                                params: {
                                    common: {
                                        client: (0, em._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e.get(e_.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [e_.$5]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(e_.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                o = e.get(e_.Xc).getLanguage(),
                                l = e.get(e_.A4)({ credentials: 'include' });
                            return new R._(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eL.B),
                                retryPolicyConfig: s,
                                timeouts: i.availabilityResource,
                                params: {
                                    common: {
                                        client: (0, em._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e.get(e_.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [e_.qT]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(e_.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                o = e.get(e_.Xc).getLanguage(),
                                l = e.get(e_.A4)({ credentials: 'include' });
                            return new G.v(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eL.B),
                                retryPolicyConfig: s,
                                timeouts: i.getFileInfoResource,
                                params: {
                                    common: {
                                        client: (0, em._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e.get(e_.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [e_.X4]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(e_.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                o = e.get(e_.Xc).getLanguage(),
                                l = e.get(e_.A4)({ credentials: 'include' });
                            return new E.a(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eL.B),
                                retryPolicyConfig: s,
                                timeouts: i.topResource,
                                params: {
                                    common: {
                                        client: (0, em._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e.get(e_.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [e_.O9]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(e_.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                o = e.get(e_.Xc).getLanguage(),
                                l = e.get(e_.A4)({ credentials: 'include' });
                            return new P.b(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eL.B),
                                retryPolicyConfig: s,
                                timeouts: i.artistsResource,
                                params: {
                                    common: {
                                        client: (0, em._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e.get(e_.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [e_.E]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(e_.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                o = e.get(e_.Xc).getLanguage(),
                                l = e.get(e_.A4)({ credentials: 'include' });
                            return new H.V(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eL.B),
                                retryPolicyConfig: s,
                                timeouts: i.slidesResource,
                                params: {
                                    common: {
                                        client: (0, em._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e.get(e_.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [e_.wH]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(e_.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                o = e.get(e_.Xc).getLanguage(),
                                l = e.get(e_.A4)({ credentials: 'include' });
                            return new L.c(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eL.B),
                                retryPolicyConfig: s,
                                timeouts: i.redAlertResource,
                                params: {
                                    common: {
                                        client: (0, em._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e.get(e_.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [e_.ok]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(e_.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                o = e.get(e_.Xc).getLanguage(),
                                l = e.get(e_.A4)({ credentials: 'include' });
                            return new T.Z(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eL.B),
                                retryPolicyConfig: s,
                                timeouts: i.rotorResource,
                                params: {
                                    common: {
                                        client: (0, em._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e.get(e_.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [e_.yq]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(e_.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                o = e.get(e_.Xc).getLanguage(),
                                l = e.get(e_.A4)({ credentials: 'include' });
                            return new _.p(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eL.B),
                                retryPolicyConfig: s,
                                timeouts: i.searchResource,
                                params: {
                                    common: {
                                        client: (0, em._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e.get(e_.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [e_.NN]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(e_.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                o = e.get(e_.Xc).getLanguage(),
                                l = e.get(e_.A4)({ credentials: 'include' });
                            return new B.v(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eL.B),
                                retryPolicyConfig: s,
                                timeouts: i.searchResource,
                                params: {
                                    common: {
                                        client: (0, em._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e.get(e_.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [e_.qN]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(e_.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                o = e.get(e_.Xc).getLanguage(),
                                l = e.get(e_.A4)({ credentials: 'include' });
                            return new W.T(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eL.B),
                                retryPolicyConfig: s,
                                timeouts: i.playlistResource,
                                params: {
                                    common: {
                                        client: (0, em._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e.get(e_.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [e_.ro]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(e_.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                o = e.get(e_.Xc).getLanguage(),
                                l = e.get(e_.A4)({ credentials: 'include' });
                            return new X.e(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eL.B),
                                retryPolicyConfig: s,
                                timeouts: i.playlistsResource,
                                params: {
                                    common: {
                                        client: (0, em._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e.get(e_.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [e_.nM]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(e_.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                o = e.get(e_.Xc).getLanguage(),
                                l = e.get(e_.A4)({ credentials: 'include' });
                            return new v.o(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eL.B),
                                retryPolicyConfig: s,
                                timeouts: i.pinResource,
                                params: {
                                    common: {
                                        client: (0, em._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e.get(e_.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [e_.Ut]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(e_.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                o = e.get(e_.Xc).getLanguage(),
                                l = e.get(e_.A4)({ credentials: 'include' });
                            return new I.$(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eL.B),
                                retryPolicyConfig: s,
                                timeouts: i.metatagsResource,
                                params: {
                                    common: {
                                        client: (0, em._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e.get(e_.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [e_.K1]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(e_.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                o = e.get(e_.Xc).getLanguage(),
                                l = e.get(e_.A4)({ credentials: 'include' });
                            return new k.p(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eL.B),
                                retryPolicyConfig: s,
                                timeouts: i.tagResource,
                                params: {
                                    common: {
                                        client: (0, em._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e.get(e_.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [e_.eu]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(e_.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                o = e.get(e_.Xc).getLanguage(),
                                l = e.get(e_.A4)({ credentials: 'include' });
                            return new y.D(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eL.B),
                                retryPolicyConfig: s,
                                timeouts: i.feedResource,
                                params: {
                                    common: {
                                        client: (0, em._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e.get(e_.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [e_.aE]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(e_.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                o = e.get(e_.Xc).getLanguage(),
                                l = e.get(e_.A4)({ credentials: 'include' });
                            return new b.l(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eL.B),
                                retryPolicyConfig: s,
                                timeouts: i.pinsResource,
                                params: {
                                    common: {
                                        client: (0, em._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e.get(e_.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [e_.ki]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(e_.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                o = e.get(e_.Xc).getLanguage(),
                                l = e.get(e_.A4)({ credentials: 'include' });
                            return new q.I(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eL.B),
                                retryPolicyConfig: s,
                                timeouts: i.musicHistoryResource,
                                params: {
                                    common: {
                                        client: (0, em._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e.get(e_.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [e_.c9]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(e_.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                o = e.get(e_.Xc).getLanguage(),
                                l = e.get(e_.A4)({ credentials: 'include' });
                            return new C.s(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eL.B),
                                retryPolicyConfig: s,
                                timeouts: i.dynamicPagesResource,
                                params: {
                                    common: {
                                        client: (0, em._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e.get(e_.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [e_.en]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(e_.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                o = e.get(e_.Xc).getLanguage(),
                                l = e.get(e_.A4)({ credentials: 'include' });
                            return new D.B(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eL.B),
                                retryPolicyConfig: s,
                                timeouts: i.chartResource,
                                params: {
                                    common: {
                                        client: (0, em._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e.get(e_.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [e_.jQ]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(e_.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                o = e.get(e_.Xc).getLanguage(),
                                l = e.get(e_.A4)({ credentials: 'include' });
                            return new M._(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eL.B),
                                retryPolicyConfig: s,
                                timeouts: i.clipsResource,
                                params: {
                                    common: {
                                        client: (0, em._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e.get(e_.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [e_.cZ]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(e_.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                o = e.get(e_.Xc).getLanguage(),
                                l = e.get(e_.A4)({ credentials: 'include' });
                            return new S.c(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eL.B),
                                retryPolicyConfig: s,
                                timeouts: i.lyricViewsResource,
                                params: {
                                    common: {
                                        client: (0, em._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e.get(e_.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [e_.Zl]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(e_.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                o = e.get(e_.Xc).getLanguage(),
                                l = e.get(e_.A4)({ credentials: 'include' });
                            return new Z.D(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eL.B),
                                retryPolicyConfig: s,
                                timeouts: i.nonMusicResource,
                                params: {
                                    common: {
                                        client: (0, em._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e.get(e_.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [e_.CN]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(e_.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                o = e.get(e_.Xc).getLanguage(),
                                l = e.get(e_.A4)({ credentials: 'include' });
                            return new N.N(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eL.B),
                                retryPolicyConfig: s,
                                timeouts: i.donationResource,
                                params: {
                                    common: {
                                        client: (0, em._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e.get(e_.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [e_.JM]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(e_.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                o = e.get(e_.Xc).getLanguage(),
                                l = e.get(e_.A4)({ credentials: 'include' });
                            return new V.c(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eL.B),
                                retryPolicyConfig: s,
                                timeouts: i.streamsResource,
                                params: {
                                    common: {
                                        client: (0, em._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e.get(e_.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [e_.P1]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(e_.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                o = e.get(e_.Xc).getLanguage(),
                                l = e.get(e_.A4)({ credentials: 'include' });
                            return new Q.S(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eL.B),
                                retryPolicyConfig: s,
                                timeouts: i.loaderResource,
                                params: {
                                    common: {
                                        client: (0, em._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e.get(e_.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [e_.re]: (0, l.Gr)((e) => {
                            let { resources: t } = e.get(e_.tw),
                                { timeouts: r, retryPolicyConfig: n } = t.musicExternalApi,
                                i = e.get(e_.Xc).getLanguage(),
                                s = e.get(e_.KH)({ credentials: 'omit' });
                            return new $.s(s, {
                                prefixUrl: '',
                                retryPolicyConfig: n,
                                timeouts: r.prefixlessResource,
                                params: {
                                    common: {
                                        client: (0, em._)(),
                                        language: i,
                                        get multiAuthUserId() {
                                            return e.get(e_.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [e_.Lk]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(e_.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                o = e.get(e_.Xc).getLanguage(),
                                l = e.get(e_.A4)({ credentials: 'include' });
                            return new z.g(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eL.B),
                                retryPolicyConfig: s,
                                timeouts: i.filtersResource,
                                params: {
                                    common: {
                                        client: (0, em._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e.get(e_.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [e_.he]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(e_.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                o = e.get(e_.Xc).getLanguage(),
                                l = e.get(e_.A4)({ credentials: 'omit' });
                            return new j.K(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eL.B),
                                retryPolicyConfig: s,
                                timeouts: i.offersResource,
                                params: {
                                    common: {
                                        client: (0, em._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e.get(e_.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [e_.uM]: (0, l.Gr)((e) => {
                            var r;
                            let { acqOffers: i, rumSettings: s } = e.get(e_.tw),
                                { brand: g, service: o, environment: l, appVersion: u } = i,
                                { platform: a, page: c } = s,
                                d = e.get(e_.QG),
                                m = e.get(e_.Xc).getLanguage(),
                                p = e.get(e_.A4),
                                A = d.token || null,
                                w = p({ credentials: A ? 'omit' : 'include' }),
                                { request_id: U, puid: f } = null != (r = e.get(e_.Zi).getStore()) ? r : {};
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
                                requester: (0, eX.n)(w),
                                puid: (null == f ? void 0 : f.toString()) || null,
                                rumOptions: { platform: a, page: c, requestId: U },
                            });
                        }),
                        [e_.$$]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(e_.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                o = e.get(e_.Xc).getLanguage(),
                                l = e.get(e_.A4)({ credentials: 'include' });
                            return new K.E(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eL.B),
                                retryPolicyConfig: s,
                                timeouts: i.offersResource,
                                params: {
                                    common: {
                                        client: (0, em._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e.get(e_.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [e_.sv]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(e_.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                o = e.get(e_.Xc).getLanguage(),
                                l = e.get(e_.A4)({ credentials: 'include' });
                            return new O.L(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eL.B),
                                retryPolicyConfig: s,
                                timeouts: i.collectionResource,
                                params: {
                                    common: {
                                        client: (0, em._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e.get(e_.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [e_.gd]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(e_.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                o = e.get(e_.Xc).getLanguage(),
                                l = e.get(e_.A4)({ credentials: 'include' });
                            return new Y.z(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eL.B),
                                retryPolicyConfig: s,
                                timeouts: i.adsResource,
                                params: {
                                    common: {
                                        client: (0, em._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e.get(e_.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [e_.Ez]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(e_.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                o = e.get(e_.Xc).getLanguage(),
                                l = e.get(e_.A4)({ credentials: 'include' });
                            return new F.l(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eL.B),
                                retryPolicyConfig: s,
                                timeouts: i.personalResource,
                                params: {
                                    common: {
                                        client: (0, em._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e.get(e_.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [e_.N1]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(e_.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                o = e.get(e_.Xc).getLanguage(),
                                l = e.get(e_.A4)({ credentials: 'include' });
                            return new J.H(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eL.B),
                                retryPolicyConfig: s,
                                timeouts: i.disclaimersResource,
                                params: {
                                    common: {
                                        client: (0, em._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e.get(e_.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [e_.u2]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(e_.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                o = e.get(e_.Xc).getLanguage(),
                                l = e.get(e_.A4)({ credentials: 'include' });
                            return new ee.J(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eL.B),
                                retryPolicyConfig: s,
                                timeouts: i.familyResource,
                                params: {
                                    common: {
                                        client: (0, em._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e.get(e_.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [e_.TD]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(e_.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                o = e.get(e_.Xc).getLanguage(),
                                l = e.get(e_.A4)({ credentials: 'include' });
                            return new et.L(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eL.B),
                                retryPolicyConfig: s,
                                timeouts: i.childrenLandingResource,
                                params: {
                                    common: {
                                        client: (0, em._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e.get(e_.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [e_.wK]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(e_.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                o = e.get(e_.Xc).getLanguage(),
                                l = e.get(e_.A4)({ credentials: 'include' });
                            return new er.u(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eL.B),
                                retryPolicyConfig: s,
                                timeouts: i.landingBlocksResource,
                                params: {
                                    common: {
                                        client: (0, em._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e.get(e_.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [e_.dh]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(e_.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                o = e.get(e_.Xc).getLanguage(),
                                l = e.get(e_.A4)({ credentials: 'include' });
                            return new en.q(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eL.B),
                                retryPolicyConfig: s,
                                timeouts: i.promoResource,
                                params: {
                                    common: {
                                        client: (0, em._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e.get(e_.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [e_.LC]: (0, l.Gr)((e) => {
                            let { resources: t, player: r } = e.get(e_.tw),
                                { timeouts: n, retryPolicyConfig: i } = t.musicExternalApi,
                                s = e.get(e_.CR)({ credentials: 'include' });
                            return new ei.g(s, {
                                prefixUrl: r.telemetry.telemetryUrl,
                                retryPolicyConfig: i,
                                timeouts: n.telemetryResouce,
                                params: { common: { client: (0, em._)() } },
                            });
                        }),
                        [e_.W5]: (0, l.Gr)((e) => {
                            let { resources: t, player: r } = e.get(e_.tw),
                                { retryPolicyConfig: n } = t.musicExternalApi,
                                i = e.get(e_.CR)({ credentials: 'include' });
                            return new es.N(i, { prefixUrl: r.telemetry.rumUrl, retryPolicyConfig: n, params: { common: { client: (0, em._)() } } });
                        }),
                        [e_.EN]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(e_.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                o = e.get(e_.Xc).getLanguage(),
                                l = e.get(e_.A4)({ credentials: 'include' });
                            return new eg._(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eL.B),
                                retryPolicyConfig: s,
                                timeouts: i.afterTrackResource,
                                params: {
                                    common: {
                                        client: (0, em._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e.get(e_.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [e_.PL]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(e_.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                o = e.get(e_.Xc).getLanguage(),
                                l = e.get(e_.A4)({ credentials: 'include' });
                            return new eo.w(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eL.B),
                                retryPolicyConfig: s,
                                timeouts: i.labelsResource,
                                params: {
                                    common: {
                                        client: (0, em._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e.get(e_.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [e_.DT]: (0, l.Gr)((e) => {
                            let { resources: r } = e.get(e_.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: s } = r.musicExternalApi,
                                o = e.get(e_.Xc).getLanguage(),
                                l = e.get(e_.A4)({ credentials: 'include' });
                            return new el.O(l, {
                                prefixUrl: (0, g.getTldHost)(n, t, eL.B),
                                retryPolicyConfig: s,
                                timeouts: i.concertsResource,
                                params: {
                                    common: {
                                        client: (0, em._)(),
                                        language: o,
                                        get multiAuthUserId() {
                                            return e.get(e_.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [e_.vg]: (0, l.Gr)(() => (0, ec.a)()),
                    })
                    .registerMany({
                        [e_.UB]: (0, l.Gr)((e) => {
                            let t = e.get(e_.vg);
                            return new m.B(t);
                        }),
                        [e_.Tq]: (0, l.Gr)((e) => {
                            var t;
                            let r = e.get(e_.W5);
                            return (null == (t = window.Ya) ? void 0 : t.Rum) ? new m.G((0, ed.y)(), r, window.Ya.Rum) : null;
                        }),
                    })
                    .register(
                        e_.by,
                        (0, l.Gr)((e) => {
                            let t = e.get(e_.oo),
                                r = e.get(e_.Zf),
                                n = (0, s.A)(),
                                g = {
                                    info: { app_name: eb || 'Browser', app_version: eq || '', title: 'Browser '.concat(eb), device_id: n, type: i.bq.WEB },
                                    volumeGranularity: 20,
                                    get defaultVolume() {
                                        var o;
                                        return null != (o = t.get(eH.c.YmPlayerVolume)) ? o : void 0;
                                    },
                                },
                                l = e.get(e_.WA).getPassportUid(),
                                u = e.get(e_.QG),
                                a = e.get(e_.UB),
                                c = e.get(e_.Tq),
                                d = [new i.zT(a)];
                            return (
                                c && d.push(new i.qP(c)),
                                new i.Jd({
                                    logger: r,
                                    deviceConfig: g,
                                    multiAuthUserId: l,
                                    oauth: u.token,
                                    ynisonConnectionConfig: eD.ynisonConnectionConfig,
                                    metricsTransport: d,
                                    variables: {
                                        isShadow: !0,
                                        get puid() {
                                            return e.get(e_.WA).getPassportUid();
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
