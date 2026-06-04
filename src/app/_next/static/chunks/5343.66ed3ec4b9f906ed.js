'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5343],
    {
        24770: (e, t, r) => {
            r.d(t, { I: () => o, M: () => g, a: () => s, b: () => u, c: () => n, d: () => i, g: () => a });
            let n = 'i18n-geo-widget-device-id',
                i = 'i18n-geo-widget-replacements',
                o = 'i18n-enabled-replacement',
                s = 'i18n-jwt-token',
                u = 'i18n-geo-widget-replacement-cleared',
                g = 3,
                l = {
                    yandex: {
                        testing: 'https://plus-i18n-token.tst.plus.yandex-team.ru',
                        prestable: 'https://plus-i18n-token.prestable.plus.yandex-team.ru',
                        production: 'https://plus-i18n-token.plus.yandex-team.ru',
                    },
                    yango: {
                        testing: 'https://plus-i18n-token.plus.yango.com',
                        prestable: 'https://plus-i18n-token.plus.yango.com',
                        production: 'https://plus-i18n-token.plus.yango.com',
                    },
                },
                a = (e, t) => l[t][e];
        },
        55343: (e, t, r) => {
            r.d(t, { createClientContainer: () => ez });
            var n = r(32732),
                i = r(63283),
                o = r(27576),
                s = r(82736),
                u = r(73202),
                g = r(7333),
                l = r(26252),
                a = r(5924),
                c = r(19731),
                d = r(47755),
                m = r(31958),
                p = r(52231),
                A = r(34097),
                w = r(97290),
                U = r(77175),
                f = r(35268),
                h = r(15912),
                x = r(42750),
                R = r(38979),
                G = r(57466),
                E = r(36090),
                P = r(31038),
                v = r(46510),
                L = r(50808),
                H = r(70233),
                T = r(37558),
                _ = r(8368),
                B = r(74503),
                k = r(41816),
                b = r(67982),
                y = r(66838),
                W = r(16128),
                I = r(99146),
                X = r(78484),
                C = r(51432),
                q = r(82669),
                D = r(58693),
                M = r(40482),
                S = r(10894),
                j = r(50581),
                N = r(71943),
                Z = r(24956),
                z = r(51770),
                O = r(12690),
                V = r(90662),
                Q = r(90926),
                $ = r(85750),
                F = r(72864),
                Y = r(84706),
                J = r(67700),
                K = r(30742),
                ee = r(83092),
                et = r(90591),
                er = r(59757),
                en = r(4990),
                ei = r(33534),
                eo = r(64642),
                es = r(68846),
                eu = r(65866),
                eg = r(96002),
                el = r(76198),
                ea = r(37694),
                ec = r(14031),
                ed = r(54874),
                em = r(44547),
                ep = r(54280),
                eA = r(19964),
                ew = r(25500),
                eU = r(32629),
                ef = r(98806),
                eh = r(51053),
                ex = r(12583),
                eR = r(75887),
                eG = r(61933),
                eE = r(80950),
                eP = r(95564),
                ev = r(91945);
            class eL {
                onChangeLanguage(e) {
                    if ('string' == typeof this.token && this.token.length > 0) {
                        let t = 'https://yandex.'.concat(this.tld, '/portal/set/lang/'),
                            r = encodeURIComponent(window.location.href),
                            n = ''.concat(t, '?intl=').concat(e, '&retpath=').concat(r, '&sk=').concat(this.token);
                        window.location.assign(n);
                    } else window.location.reload();
                }
                constructor(e, t) {
                    (0, ev._)(this, 'tld', void 0), (0, ev._)(this, 'token', void 0), (this.tld = e), (this.token = t);
                }
            }
            var eH = r(73422),
                eT = r(48193),
                e_ = r(70253),
                eB = r(92023),
                ek = r(19379),
                eb = r(19053),
                ey = r(10410),
                eW = r(70204);
            let eI = /^application\/json(;\s?charset=\S+)?$/;
            class eX {
                async afterResponse(e) {
                    try {
                        if (!e.headers['content-range'] && e.headers['content-type'] && eI.test(e.headers['content-type'])) {
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
                    (0, ev._)(this, 'logger', void 0), (this.logger = e);
                }
            }
            var eC = r(7736);
            function eq(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r) e[n] = r[n];
                }
                return e;
            }
            r(24770);
            var eD = (function e(t, r) {
                function n(e, n, i) {
                    if ('undefined' != typeof document) {
                        'number' == typeof (i = eq({}, r, i)).expires && (i.expires = new Date(Date.now() + 864e5 * i.expires)),
                            i.expires && (i.expires = i.expires.toUTCString()),
                            (e = encodeURIComponent(e)
                                .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
                                .replace(/[()]/g, escape));
                        var o = '';
                        for (var s in i) i[s] && ((o += '; ' + s), !0 !== i[s] && (o += '=' + i[s].split(';')[0]));
                        return (document.cookie = e + '=' + t.write(n, e) + o);
                    }
                }
                return Object.create(
                    {
                        set: n,
                        get: function (e) {
                            if ('undefined' != typeof document && (!arguments.length || e)) {
                                for (var r = document.cookie ? document.cookie.split('; ') : [], n = {}, i = 0; i < r.length; i++) {
                                    var o = r[i].split('='),
                                        s = o.slice(1).join('=');
                                    try {
                                        var u = decodeURIComponent(o[0]);
                                        if (((n[u] = t.read(s, u)), e === u)) break;
                                    } catch (e) {}
                                }
                                return e ? n[e] : n;
                            }
                        },
                        remove: function (e, t) {
                            n(e, '', eq({}, t, { expires: -1 }));
                        },
                        withAttributes: function (t) {
                            return e(this.converter, eq({}, this.attributes, t));
                        },
                        withConverter: function (t) {
                            return e(eq({}, this.converter, t), this.attributes);
                        },
                    },
                    { attributes: { value: Object.freeze(r) }, converter: { value: Object.freeze(t) } },
                );
            })(
                {
                    read: function (e) {
                        return '"' === e[0] && (e = e.slice(1, -1)), e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
                    },
                    write: function (e) {
                        return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent);
                    },
                },
                { path: '/' },
            );
            let eM = (e) => {
                    if (!(typeof window > 'u')) return eD.get(e);
                },
                eS = (e) => {
                    let t = (function (e) {
                        let t = e('i18n-jwt-token', void 0);
                        return t ? { 'X-Authorization': t } : {};
                    })(eM);
                    for (let [r, n] of Object.entries(t)) e.headers.set(r, n);
                };
            var ej = r(61048),
                eN = r(9340),
                eZ = r(51486);
            async function ez(e) {
                let {
                        tld: t,
                        env: ev,
                        serverDetectedLocale: eI,
                        changeLanguageToken: eq,
                        browserName: eD,
                        browserVersion: eM,
                        executionContextStore: ez,
                        customApiPrefixUrl: eO,
                        customApiToken: eV,
                    } = e,
                    eQ = (0, eZ.J)(await (0, eG.z)(ev, eO)),
                    e$ = await (0, eR.B)(ev),
                    eF = 'production' !== ev ? eS : void 0;
                return new g.Dt()
                    .registerMany({
                        [eW.SX]: (0, g.Gr)(() => ev),
                        [eW.tw]: (0, g.Gr)(() => eQ),
                        [eW.P0]: (0, g.Gr)(() => new u.q(e$)),
                        [eW.Zi]: (0, g.Gr)(() => new eP.Y(ez)),
                    })
                    .register(
                        eW.WA,
                        (0, g.Gr)((e) => {
                            let t = e.get(eW.Zi);
                            return new ey.V(t);
                        }),
                    )
                    .registerMany({
                        [eW.Zf]: (0, g.Gr)((e) => {
                            let t = e.get(eW.P0).get(ex.qV);
                            return new m.r({
                                maxLogLevel: d.cm.DEBUG,
                                secureFields: e_.x,
                                disableLogToConsole: !t,
                                additionalData: {
                                    get puid() {
                                        return e.get(eW.WA).getPassportUid();
                                    },
                                },
                            });
                        }),
                        [eW.TK]: (0, g.Gr)(
                            (e) =>
                                new ((0, eT.b)(m.r))({
                                    maxLogLevel: d.cm.DEBUG,
                                    secureFields: e_.x,
                                    disableLogToConsole: 'development' !== e.get(eW.SX),
                                    additionalData: {
                                        get puid() {
                                            return e.get(eW.WA).getPassportUid();
                                        },
                                    },
                                }),
                        ),
                        [eW.oo]: (0, g.Gr)(() => new ep.V8()),
                        [eW.DP]: (0, g.Gr)(() => new ep.V8()),
                        [eW.RG]: (0, g.Gr)(async (e) => {
                            let {
                                mocks: { enabled: n, mocksProviderUrl: i, urlCapturePattern: o },
                            } = e.get(eW.tw);
                            if (!n) return () => Promise.resolve(null);
                            let { initMocks: u } = await Promise.all([r.e(1307), r.e(3627)]).then(r.bind(r, 23627)),
                                g = e.get(eW.DP),
                                l = e.get(eW.Zf),
                                a = 'production' === e.get(eW.SX) ? '/rsc-cache-worker.js' : '',
                                c = () => {
                                    var e;
                                    return null != (e = g.get(ek.c.MocksConfiguration, !1)) ? e : null;
                                };
                            return () =>
                                u({
                                    getMocksConfiguration: c,
                                    log: (e, t) => l.debug('[Mocks] | client: '.concat(e), t),
                                    mocksProviderUrl: i,
                                    serviceWorkerUrl: a,
                                    urlCapturePattern: (0, s.getTldHost)(o, t, eb.B),
                                }).catch((e) => l.debug('[Mocks] | client: initialization failed. '.concat(e)));
                        }),
                        [eW.U2]: (0, g.Gr)(() => new ep.si()),
                        [eW.vH]: (0, g.Gr)(() => new ep.fW()),
                        [eW.y$]: (0, g.Gr)(() => new em.Mz({ config: { useEntitiesStorage: !1, useFileStorage: !1, useResponseCacheStorage: !1 } })),
                        [eW.Xc]: (0, g.Gr)((e) => {
                            let r = e.get(eW.oo),
                                n = e.get(eW.Zf),
                                { i18n: i } = e.get(eW.tw),
                                o = new Date(Date.now() + 24 * i.cookieExpirationDays * 36e5);
                            return new eH.E({
                                serverDetectedLocale: eI,
                                logger: n,
                                changeLanguageHandler: new eL(t, eq),
                                storage: {
                                    get: () => r.get(ek.c.SavedUserLanguage, !1),
                                    set(e) {
                                        r.set(ek.c.SavedUserLanguage, e, { path: '/', domain: window.location.hostname, expires: o, secure: !0 }, !1);
                                    },
                                },
                            });
                        }),
                        [eW.Hm]: (0, g.P9)(
                            () =>
                                function () {
                                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                    return new c.Q(e);
                                },
                        ),
                        [eW.gu]: (0, g.P9)(
                            () =>
                                function () {
                                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                    return new a.S(e);
                                },
                        ),
                    })
                    .registerMany({
                        [eW.QG]: (0, g.Gr)((e) => new ef.b(e.get(eW.DP), e.get(eW.tw), e.get(eW.Xc).getLanguage(), e.get(eW.WA))),
                        [eW.OP]: (0, g.P9)(
                            (e) =>
                                function () {
                                    var t, r, n, i, o, s;
                                    let u = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                        g = arguments.length > 1 ? arguments[1] : void 0,
                                        l = e.get(eW.Zf),
                                        {
                                            resources: { musicExternalApi: a },
                                        } = e.get(eW.tw),
                                        c = new e_.N(l),
                                        d = new eX(l);
                                    return (
                                        (u.timeout = a.defaultTimeout),
                                        (u.hooks = {
                                            afterResponse: [d.afterResponseHook, ...((null == u || null == (t = u.hooks) ? void 0 : t.afterResponse) || [])],
                                            afterTimeout: [c.beforeErrorHook, ...((null == u || null == (r = u.hooks) ? void 0 : r.afterTimeout) || [])],
                                            beforeError: [c.beforeErrorHook, ...((null == u || null == (n = u.hooks) ? void 0 : n.beforeError) || [])],
                                            beforeRequest: [
                                                ej.x,
                                                (0, ej.u)(eV),
                                                ...(eF ? [eF] : []),
                                                d.beforeRequestHook,
                                                ...((null == u || null == (i = u.hooks) ? void 0 : i.beforeRequest) || []),
                                            ],
                                            beforeRetry: [eN.i, c.beforeRetryHook, ...((null == u || null == (o = u.hooks) ? void 0 : o.beforeRetry) || [])],
                                            onRequestDone: [...((null == u || null == (s = u.hooks) ? void 0 : s.onRequestDone) || [])],
                                        }),
                                        g(u)
                                    );
                                },
                        ),
                    })
                    .registerMany({
                        [eW.A4]: (0, g.P9)(
                            (e) =>
                                function () {
                                    var r;
                                    let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                        i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e.get(eW.OP),
                                        o = e.get(eW.QG),
                                        { resources: u } = e.get(eW.tw),
                                        g = i({ credentials: 'include' }, e.get(eW.Hm)),
                                        { prefixUrl: l, timeouts: a, retryPolicyConfig: c } = u.musicExternalApi,
                                        d = e.get(eW.Xc).getLanguage(),
                                        m = new A.Q(g, {
                                            prefixUrl: (0, s.getTldHost)(l, t, eb.B),
                                            retryPolicyConfig: c,
                                            timeouts: a.accountResource,
                                            params: {
                                                common: {
                                                    client: (0, eU._)(),
                                                    language: d,
                                                    get multiAuthUserId() {
                                                        return e.get(eW.WA).getPassportUid();
                                                    },
                                                },
                                            },
                                        });
                                    return (
                                        (n.hooks = { beforeError: [(0, eh.o)(o, m), ...((null == n || null == (r = n.hooks) ? void 0 : r.beforeError) || [])] }),
                                        i(n, e.get(eW.Hm))
                                    );
                                },
                        ),
                        [eW.mr]: (0, g.P9)(
                            (e) =>
                                function () {
                                    var t, r, n, i, o, s;
                                    let u = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                        g = e.get(eW.Hm),
                                        l = e.get(eW.Zf),
                                        {
                                            resources: { musicExternalApi: a },
                                        } = e.get(eW.tw),
                                        c = new e_.N(l);
                                    return (
                                        (u.timeout = a.defaultTimeout),
                                        (u.hooks = {
                                            afterResponse: [...((null == u || null == (t = u.hooks) ? void 0 : t.afterResponse) || [])],
                                            afterTimeout: [c.beforeErrorHook, ...((null == u || null == (r = u.hooks) ? void 0 : r.afterTimeout) || [])],
                                            beforeError: [c.beforeErrorHook, ...((null == u || null == (n = u.hooks) ? void 0 : n.beforeError) || [])],
                                            beforeRequest: [ej.x, ...((null == u || null == (i = u.hooks) ? void 0 : i.beforeRequest) || [])],
                                            beforeRetry: [eN.i, c.beforeRetryHook, ...((null == u || null == (o = u.hooks) ? void 0 : o.beforeRetry) || [])],
                                            onRequestDone: [...((null == u || null == (s = u.hooks) ? void 0 : s.onRequestDone) || [])],
                                        }),
                                        g(u)
                                    );
                                },
                        ),
                    })
                    .register(
                        eW.CR,
                        (0, g.P9)(
                            (e) =>
                                function () {
                                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                    return e.get(eW.A4)(t, e.get(eW.gu));
                                },
                        ),
                    )
                    .registerMany({
                        [eW.$I]: (0, g.Gr)((e) => {
                            let { resources: r } = e.get(eW.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: o } = r.musicExternalApi,
                                u = e.get(eW.Xc).getLanguage(),
                                g = e.get(eW.A4)({ credentials: 'include' });
                            return new A.Q(g, {
                                prefixUrl: (0, s.getTldHost)(n, t, eb.B),
                                retryPolicyConfig: o,
                                timeouts: i.accountResource,
                                params: {
                                    common: {
                                        client: (0, eU._)(),
                                        language: u,
                                        get multiAuthUserId() {
                                            return e.get(eW.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eW._1]: (0, g.Gr)((e) => {
                            let { resources: r } = e.get(eW.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: o } = r.musicExternalApi,
                                u = e.get(eW.Xc).getLanguage(),
                                g = e.get(eW.A4)({ credentials: 'include' });
                            return new w.d(g, {
                                prefixUrl: (0, s.getTldHost)(n, t, eb.B),
                                retryPolicyConfig: o,
                                timeouts: i.usersResource,
                                params: {
                                    common: {
                                        client: (0, eU._)(),
                                        language: u,
                                        get multiAuthUserId() {
                                            return e.get(eW.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eW.V3]: (0, g.Gr)((e) => {
                            let { resources: r } = e.get(eW.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: o } = r.musicExternalApi,
                                u = e.get(eW.Xc).getLanguage(),
                                g = e.get(eW.A4)({ credentials: 'include' });
                            return new U.G(g, {
                                prefixUrl: (0, s.getTldHost)(n, t, eb.B),
                                retryPolicyConfig: o,
                                timeouts: i.landingResource,
                                params: {
                                    common: {
                                        client: (0, eU._)(),
                                        language: u,
                                        get multiAuthUserId() {
                                            return e.get(eW.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eW.Lb]: (0, g.Gr)((e) => {
                            let { resources: r } = e.get(eW.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: o } = r.musicExternalApi,
                                u = e.get(eW.Xc).getLanguage(),
                                g = e.get(eW.A4)({ credentials: 'include' });
                            return new f.H(g, {
                                prefixUrl: (0, s.getTldHost)(n, t, eb.B),
                                retryPolicyConfig: o,
                                timeouts: i.landing3Resource,
                                params: {
                                    common: {
                                        client: (0, eU._)(),
                                        language: u,
                                        get multiAuthUserId() {
                                            return e.get(eW.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eW.tz]: (0, g.Gr)((e) => {
                            let { resources: r } = e.get(eW.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: o } = r.musicExternalApi,
                                u = e.get(eW.Xc).getLanguage(),
                                g = e.get(eW.A4)({ credentials: 'include' });
                            return new h.B(g, {
                                prefixUrl: (0, s.getTldHost)(n, t, eb.B),
                                retryPolicyConfig: o,
                                timeouts: i.landingResource,
                                params: {
                                    common: {
                                        client: (0, eU._)(),
                                        language: u,
                                        get multiAuthUserId() {
                                            return e.get(eW.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eW.$8]: (0, g.Gr)((e) => {
                            let { resources: r } = e.get(eW.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: o } = r.musicExternalApi,
                                u = e.get(eW.Xc).getLanguage(),
                                g = e.get(eW.A4)({ credentials: 'include' });
                            return new x.w(g, {
                                prefixUrl: (0, s.getTldHost)(n, t, eb.B),
                                retryPolicyConfig: o,
                                timeouts: i.libraryResource,
                                params: {
                                    common: {
                                        client: (0, eU._)(),
                                        language: u,
                                        get multiAuthUserId() {
                                            return e.get(eW.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eW.Oo]: (0, g.Gr)((e) => {
                            let { resources: r } = e.get(eW.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: o } = r.musicExternalApi,
                                u = e.get(eW.Xc).getLanguage(),
                                g = e.get(eW.A4)({ credentials: 'include' });
                            return new R.L(g, {
                                prefixUrl: (0, s.getTldHost)(n, t, eb.B),
                                retryPolicyConfig: o,
                                timeouts: i.tracksResource,
                                params: {
                                    common: {
                                        client: (0, eU._)(),
                                        language: u,
                                        get multiAuthUserId() {
                                            return e.get(eW.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eW.$5]: (0, g.Gr)((e) => {
                            let { resources: r } = e.get(eW.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: o } = r.musicExternalApi,
                                u = e.get(eW.Xc).getLanguage(),
                                g = e.get(eW.A4)({ credentials: 'include' });
                            return new G._(g, {
                                prefixUrl: (0, s.getTldHost)(n, t, eb.B),
                                retryPolicyConfig: o,
                                timeouts: i.availabilityResource,
                                params: {
                                    common: {
                                        client: (0, eU._)(),
                                        language: u,
                                        get multiAuthUserId() {
                                            return e.get(eW.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eW.qT]: (0, g.Gr)((e) => {
                            let { resources: r } = e.get(eW.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: o } = r.musicExternalApi,
                                u = e.get(eW.Xc).getLanguage(),
                                g = e.get(eW.A4)({ credentials: 'include' });
                            return new E.v(g, {
                                prefixUrl: (0, s.getTldHost)(n, t, eb.B),
                                retryPolicyConfig: o,
                                timeouts: i.getFileInfoResource,
                                params: {
                                    common: {
                                        client: (0, eU._)(),
                                        language: u,
                                        get multiAuthUserId() {
                                            return e.get(eW.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eW.X4]: (0, g.Gr)((e) => {
                            let { resources: r } = e.get(eW.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: o } = r.musicExternalApi,
                                u = e.get(eW.Xc).getLanguage(),
                                g = e.get(eW.A4)({ credentials: 'include' });
                            return new P.a(g, {
                                prefixUrl: (0, s.getTldHost)(n, t, eb.B),
                                retryPolicyConfig: o,
                                timeouts: i.topResource,
                                params: {
                                    common: {
                                        client: (0, eU._)(),
                                        language: u,
                                        get multiAuthUserId() {
                                            return e.get(eW.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eW.O9]: (0, g.Gr)((e) => {
                            let { resources: r } = e.get(eW.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: o } = r.musicExternalApi,
                                u = e.get(eW.Xc).getLanguage(),
                                g = e.get(eW.A4)({ credentials: 'include' });
                            return new v.b(g, {
                                prefixUrl: (0, s.getTldHost)(n, t, eb.B),
                                retryPolicyConfig: o,
                                timeouts: i.artistsResource,
                                params: {
                                    common: {
                                        client: (0, eU._)(),
                                        language: u,
                                        get multiAuthUserId() {
                                            return e.get(eW.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eW.E]: (0, g.Gr)((e) => {
                            let { resources: r } = e.get(eW.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: o } = r.musicExternalApi,
                                u = e.get(eW.Xc).getLanguage(),
                                g = e.get(eW.A4)({ credentials: 'include' });
                            return new L.V(g, {
                                prefixUrl: (0, s.getTldHost)(n, t, eb.B),
                                retryPolicyConfig: o,
                                timeouts: i.slidesResource,
                                params: {
                                    common: {
                                        client: (0, eU._)(),
                                        language: u,
                                        get multiAuthUserId() {
                                            return e.get(eW.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eW.wH]: (0, g.Gr)((e) => {
                            let { resources: r } = e.get(eW.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: o } = r.musicExternalApi,
                                u = e.get(eW.Xc).getLanguage(),
                                g = e.get(eW.A4)({ credentials: 'include' });
                            return new H.c(g, {
                                prefixUrl: (0, s.getTldHost)(n, t, eb.B),
                                retryPolicyConfig: o,
                                timeouts: i.redAlertResource,
                                params: {
                                    common: {
                                        client: (0, eU._)(),
                                        language: u,
                                        get multiAuthUserId() {
                                            return e.get(eW.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eW.ok]: (0, g.Gr)((e) => {
                            let { resources: r } = e.get(eW.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: o } = r.musicExternalApi,
                                u = e.get(eW.Xc).getLanguage(),
                                g = e.get(eW.A4)({ credentials: 'include' });
                            return new T.Z(g, {
                                prefixUrl: (0, s.getTldHost)(n, t, eb.B),
                                retryPolicyConfig: o,
                                timeouts: i.rotorResource,
                                params: {
                                    common: {
                                        client: (0, eU._)(),
                                        language: u,
                                        get multiAuthUserId() {
                                            return e.get(eW.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eW.yq]: (0, g.Gr)((e) => {
                            let { resources: r } = e.get(eW.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: o } = r.musicExternalApi,
                                u = e.get(eW.Xc).getLanguage(),
                                g = e.get(eW.A4)({ credentials: 'include' });
                            return new _.p(g, {
                                prefixUrl: (0, s.getTldHost)(n, t, eb.B),
                                retryPolicyConfig: o,
                                timeouts: i.searchResource,
                                params: {
                                    common: {
                                        client: (0, eU._)(),
                                        language: u,
                                        get multiAuthUserId() {
                                            return e.get(eW.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eW.NN]: (0, g.Gr)((e) => {
                            let { resources: r } = e.get(eW.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: o } = r.musicExternalApi,
                                u = e.get(eW.Xc).getLanguage(),
                                g = e.get(eW.A4)({ credentials: 'include' });
                            return new B.v(g, {
                                prefixUrl: (0, s.getTldHost)(n, t, eb.B),
                                retryPolicyConfig: o,
                                timeouts: i.searchResource,
                                params: {
                                    common: {
                                        client: (0, eU._)(),
                                        language: u,
                                        get multiAuthUserId() {
                                            return e.get(eW.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eW.qN]: (0, g.Gr)((e) => {
                            let { resources: r } = e.get(eW.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: o } = r.musicExternalApi,
                                u = e.get(eW.Xc).getLanguage(),
                                g = e.get(eW.A4)({ credentials: 'include' });
                            return new k.T(g, {
                                prefixUrl: (0, s.getTldHost)(n, t, eb.B),
                                retryPolicyConfig: o,
                                timeouts: i.playlistResource,
                                params: {
                                    common: {
                                        client: (0, eU._)(),
                                        language: u,
                                        get multiAuthUserId() {
                                            return e.get(eW.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eW.ro]: (0, g.Gr)((e) => {
                            let { resources: r } = e.get(eW.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: o } = r.musicExternalApi,
                                u = e.get(eW.Xc).getLanguage(),
                                g = e.get(eW.A4)({ credentials: 'include' });
                            return new b.e(g, {
                                prefixUrl: (0, s.getTldHost)(n, t, eb.B),
                                retryPolicyConfig: o,
                                timeouts: i.playlistsResource,
                                params: {
                                    common: {
                                        client: (0, eU._)(),
                                        language: u,
                                        get multiAuthUserId() {
                                            return e.get(eW.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eW.nM]: (0, g.Gr)((e) => {
                            let { resources: r } = e.get(eW.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: o } = r.musicExternalApi,
                                u = e.get(eW.Xc).getLanguage(),
                                g = e.get(eW.A4)({ credentials: 'include' });
                            return new y.o(g, {
                                prefixUrl: (0, s.getTldHost)(n, t, eb.B),
                                retryPolicyConfig: o,
                                timeouts: i.pinResource,
                                params: {
                                    common: {
                                        client: (0, eU._)(),
                                        language: u,
                                        get multiAuthUserId() {
                                            return e.get(eW.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eW.Ut]: (0, g.Gr)((e) => {
                            let { resources: r } = e.get(eW.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: o } = r.musicExternalApi,
                                u = e.get(eW.Xc).getLanguage(),
                                g = e.get(eW.A4)({ credentials: 'include' });
                            return new W.$(g, {
                                prefixUrl: (0, s.getTldHost)(n, t, eb.B),
                                retryPolicyConfig: o,
                                timeouts: i.metatagsResource,
                                params: {
                                    common: {
                                        client: (0, eU._)(),
                                        language: u,
                                        get multiAuthUserId() {
                                            return e.get(eW.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eW.K1]: (0, g.Gr)((e) => {
                            let { resources: r } = e.get(eW.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: o } = r.musicExternalApi,
                                u = e.get(eW.Xc).getLanguage(),
                                g = e.get(eW.A4)({ credentials: 'include' });
                            return new I.p(g, {
                                prefixUrl: (0, s.getTldHost)(n, t, eb.B),
                                retryPolicyConfig: o,
                                timeouts: i.tagResource,
                                params: {
                                    common: {
                                        client: (0, eU._)(),
                                        language: u,
                                        get multiAuthUserId() {
                                            return e.get(eW.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eW.eu]: (0, g.Gr)((e) => {
                            let { resources: r } = e.get(eW.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: o } = r.musicExternalApi,
                                u = e.get(eW.Xc).getLanguage(),
                                g = e.get(eW.A4)({ credentials: 'include' });
                            return new X.D(g, {
                                prefixUrl: (0, s.getTldHost)(n, t, eb.B),
                                retryPolicyConfig: o,
                                timeouts: i.feedResource,
                                params: {
                                    common: {
                                        client: (0, eU._)(),
                                        language: u,
                                        get multiAuthUserId() {
                                            return e.get(eW.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eW.aE]: (0, g.Gr)((e) => {
                            let { resources: r } = e.get(eW.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: o } = r.musicExternalApi,
                                u = e.get(eW.Xc).getLanguage(),
                                g = e.get(eW.A4)({ credentials: 'include' });
                            return new C.l(g, {
                                prefixUrl: (0, s.getTldHost)(n, t, eb.B),
                                retryPolicyConfig: o,
                                timeouts: i.pinsResource,
                                params: {
                                    common: {
                                        client: (0, eU._)(),
                                        language: u,
                                        get multiAuthUserId() {
                                            return e.get(eW.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eW.ki]: (0, g.Gr)((e) => {
                            let { resources: r } = e.get(eW.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: o } = r.musicExternalApi,
                                u = e.get(eW.Xc).getLanguage(),
                                g = e.get(eW.A4)({ credentials: 'include' });
                            return new q.I(g, {
                                prefixUrl: (0, s.getTldHost)(n, t, eb.B),
                                retryPolicyConfig: o,
                                timeouts: i.musicHistoryResource,
                                params: {
                                    common: {
                                        client: (0, eU._)(),
                                        language: u,
                                        get multiAuthUserId() {
                                            return e.get(eW.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eW.c9]: (0, g.Gr)((e) => {
                            let { resources: r } = e.get(eW.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: o } = r.musicExternalApi,
                                u = e.get(eW.Xc).getLanguage(),
                                g = e.get(eW.A4)({ credentials: 'include' });
                            return new D.s(g, {
                                prefixUrl: (0, s.getTldHost)(n, t, eb.B),
                                retryPolicyConfig: o,
                                timeouts: i.dynamicPagesResource,
                                params: {
                                    common: {
                                        client: (0, eU._)(),
                                        language: u,
                                        get multiAuthUserId() {
                                            return e.get(eW.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eW.en]: (0, g.Gr)((e) => {
                            let { resources: r } = e.get(eW.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: o } = r.musicExternalApi,
                                u = e.get(eW.Xc).getLanguage(),
                                g = e.get(eW.A4)({ credentials: 'include' });
                            return new M.B(g, {
                                prefixUrl: (0, s.getTldHost)(n, t, eb.B),
                                retryPolicyConfig: o,
                                timeouts: i.chartResource,
                                params: {
                                    common: {
                                        client: (0, eU._)(),
                                        language: u,
                                        get multiAuthUserId() {
                                            return e.get(eW.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eW.jQ]: (0, g.Gr)((e) => {
                            let { resources: r } = e.get(eW.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: o } = r.musicExternalApi,
                                u = e.get(eW.Xc).getLanguage(),
                                g = e.get(eW.A4)({ credentials: 'include' });
                            return new S._(g, {
                                prefixUrl: (0, s.getTldHost)(n, t, eb.B),
                                retryPolicyConfig: o,
                                timeouts: i.clipsResource,
                                params: {
                                    common: {
                                        client: (0, eU._)(),
                                        language: u,
                                        get multiAuthUserId() {
                                            return e.get(eW.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eW.cZ]: (0, g.Gr)((e) => {
                            let { resources: r } = e.get(eW.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: o } = r.musicExternalApi,
                                u = e.get(eW.Xc).getLanguage(),
                                g = e.get(eW.A4)({ credentials: 'include' });
                            return new j.c(g, {
                                prefixUrl: (0, s.getTldHost)(n, t, eb.B),
                                retryPolicyConfig: o,
                                timeouts: i.lyricViewsResource,
                                params: {
                                    common: {
                                        client: (0, eU._)(),
                                        language: u,
                                        get multiAuthUserId() {
                                            return e.get(eW.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eW.Zl]: (0, g.Gr)((e) => {
                            let { resources: r } = e.get(eW.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: o } = r.musicExternalApi,
                                u = e.get(eW.Xc).getLanguage(),
                                g = e.get(eW.A4)({ credentials: 'include' });
                            return new N.D(g, {
                                prefixUrl: (0, s.getTldHost)(n, t, eb.B),
                                retryPolicyConfig: o,
                                timeouts: i.nonMusicResource,
                                params: {
                                    common: {
                                        client: (0, eU._)(),
                                        language: u,
                                        get multiAuthUserId() {
                                            return e.get(eW.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eW.CN]: (0, g.Gr)((e) => {
                            let { resources: r } = e.get(eW.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: o } = r.musicExternalApi,
                                u = e.get(eW.Xc).getLanguage(),
                                g = e.get(eW.A4)({ credentials: 'include' });
                            return new Z.N(g, {
                                prefixUrl: (0, s.getTldHost)(n, t, eb.B),
                                retryPolicyConfig: o,
                                timeouts: i.donationResource,
                                params: {
                                    common: {
                                        client: (0, eU._)(),
                                        language: u,
                                        get multiAuthUserId() {
                                            return e.get(eW.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eW.JM]: (0, g.Gr)((e) => {
                            let { resources: r } = e.get(eW.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: o } = r.musicExternalApi,
                                u = e.get(eW.Xc).getLanguage(),
                                g = e.get(eW.A4)({ credentials: 'include' });
                            return new z.c(g, {
                                prefixUrl: (0, s.getTldHost)(n, t, eb.B),
                                retryPolicyConfig: o,
                                timeouts: i.streamsResource,
                                params: {
                                    common: {
                                        client: (0, eU._)(),
                                        language: u,
                                        get multiAuthUserId() {
                                            return e.get(eW.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eW.P1]: (0, g.Gr)((e) => {
                            let { resources: r } = e.get(eW.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: o } = r.musicExternalApi,
                                u = e.get(eW.Xc).getLanguage(),
                                g = e.get(eW.A4)({ credentials: 'include' });
                            return new O.S(g, {
                                prefixUrl: (0, s.getTldHost)(n, t, eb.B),
                                retryPolicyConfig: o,
                                timeouts: i.loaderResource,
                                params: {
                                    common: {
                                        client: (0, eU._)(),
                                        language: u,
                                        get multiAuthUserId() {
                                            return e.get(eW.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eW.re]: (0, g.Gr)((e) => {
                            let { resources: t } = e.get(eW.tw),
                                { timeouts: r, retryPolicyConfig: n } = t.musicExternalApi,
                                i = e.get(eW.Xc).getLanguage(),
                                o = e.get(eW.mr)({ credentials: 'omit' });
                            return new V.s(o, {
                                prefixUrl: '',
                                retryPolicyConfig: n,
                                timeouts: r.prefixlessResource,
                                params: {
                                    common: {
                                        client: (0, eU._)(),
                                        language: i,
                                        get multiAuthUserId() {
                                            return e.get(eW.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eW.Lk]: (0, g.Gr)((e) => {
                            let { resources: r } = e.get(eW.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: o } = r.musicExternalApi,
                                u = e.get(eW.Xc).getLanguage(),
                                g = e.get(eW.A4)({ credentials: 'include' });
                            return new Q.g(g, {
                                prefixUrl: (0, s.getTldHost)(n, t, eb.B),
                                retryPolicyConfig: o,
                                timeouts: i.filtersResource,
                                params: {
                                    common: {
                                        client: (0, eU._)(),
                                        language: u,
                                        get multiAuthUserId() {
                                            return e.get(eW.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eW.uM]: (0, g.Gr)((e) => {
                            var r;
                            let { acqOffers: i, rumSettings: o } = e.get(eW.tw),
                                { brand: s, service: u, environment: g, appVersion: l } = i,
                                { platform: a, page: c } = o,
                                d = e.get(eW.QG),
                                m = e.get(eW.Xc).getLanguage(),
                                p = e.get(eW.A4),
                                A = d.token || null,
                                w = p({ credentials: A ? 'omit' : 'include' }),
                                { request_id: U, puid: f } = null != (r = e.get(eW.Zi).getStore()) ? r : {};
                            return new n.mZ({
                                brand: s,
                                service: u,
                                environment: g,
                                appVersion: l,
                                etld: 'yandex.'.concat(t),
                                platform: 'Web',
                                lang: m,
                                oAuthToken: A,
                                authMethod: A ? 'oauth' : 'default',
                                requester: (0, eC.n)(w),
                                puid: (null == f ? void 0 : f.toString()) || null,
                                rumOptions: { platform: a, page: c, requestId: U },
                            });
                        }),
                        [eW.$$]: (0, g.Gr)((e) => {
                            let { resources: r } = e.get(eW.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: o } = r.musicExternalApi,
                                u = e.get(eW.Xc).getLanguage(),
                                g = e.get(eW.A4)({ credentials: 'include' });
                            return new $.E(g, {
                                prefixUrl: (0, s.getTldHost)(n, t, eb.B),
                                retryPolicyConfig: o,
                                timeouts: i.ugcResource,
                                params: {
                                    common: {
                                        client: (0, eU._)(),
                                        language: u,
                                        get multiAuthUserId() {
                                            return e.get(eW.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eW.sv]: (0, g.Gr)((e) => {
                            let { resources: r } = e.get(eW.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: o } = r.musicExternalApi,
                                u = e.get(eW.Xc).getLanguage(),
                                g = e.get(eW.A4)({ credentials: 'include' });
                            return new F.L(g, {
                                prefixUrl: (0, s.getTldHost)(n, t, eb.B),
                                retryPolicyConfig: o,
                                timeouts: i.collectionResource,
                                params: {
                                    common: {
                                        client: (0, eU._)(),
                                        language: u,
                                        get multiAuthUserId() {
                                            return e.get(eW.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eW.gd]: (0, g.Gr)((e) => {
                            let { resources: r } = e.get(eW.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: o } = r.musicExternalApi,
                                u = e.get(eW.Xc).getLanguage(),
                                g = e.get(eW.A4)({ credentials: 'include' });
                            return new Y.z(g, {
                                prefixUrl: (0, s.getTldHost)(n, t, eb.B),
                                retryPolicyConfig: o,
                                timeouts: i.adsResource,
                                params: {
                                    common: {
                                        client: (0, eU._)(),
                                        language: u,
                                        get multiAuthUserId() {
                                            return e.get(eW.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eW.Ez]: (0, g.Gr)((e) => {
                            let { resources: r } = e.get(eW.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: o } = r.musicExternalApi,
                                u = e.get(eW.Xc).getLanguage(),
                                g = e.get(eW.A4)({ credentials: 'include' });
                            return new J.l(g, {
                                prefixUrl: (0, s.getTldHost)(n, t, eb.B),
                                retryPolicyConfig: o,
                                timeouts: i.personalResource,
                                params: {
                                    common: {
                                        client: (0, eU._)(),
                                        language: u,
                                        get multiAuthUserId() {
                                            return e.get(eW.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eW.N1]: (0, g.Gr)((e) => {
                            let { resources: r } = e.get(eW.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: o } = r.musicExternalApi,
                                u = e.get(eW.Xc).getLanguage(),
                                g = e.get(eW.A4)({ credentials: 'include' });
                            return new K.H(g, {
                                prefixUrl: (0, s.getTldHost)(n, t, eb.B),
                                retryPolicyConfig: o,
                                timeouts: i.disclaimersResource,
                                params: {
                                    common: {
                                        client: (0, eU._)(),
                                        language: u,
                                        get multiAuthUserId() {
                                            return e.get(eW.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eW.u2]: (0, g.Gr)((e) => {
                            let { resources: r } = e.get(eW.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: o } = r.musicExternalApi,
                                u = e.get(eW.Xc).getLanguage(),
                                g = e.get(eW.A4)({ credentials: 'include' });
                            return new ee.J(g, {
                                prefixUrl: (0, s.getTldHost)(n, t, eb.B),
                                retryPolicyConfig: o,
                                timeouts: i.familyResource,
                                params: {
                                    common: {
                                        client: (0, eU._)(),
                                        language: u,
                                        get multiAuthUserId() {
                                            return e.get(eW.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eW.TD]: (0, g.Gr)((e) => {
                            let { resources: r } = e.get(eW.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: o } = r.musicExternalApi,
                                u = e.get(eW.Xc).getLanguage(),
                                g = e.get(eW.A4)({ credentials: 'include' });
                            return new et.L(g, {
                                prefixUrl: (0, s.getTldHost)(n, t, eb.B),
                                retryPolicyConfig: o,
                                timeouts: i.childrenLandingResource,
                                params: {
                                    common: {
                                        client: (0, eU._)(),
                                        language: u,
                                        get multiAuthUserId() {
                                            return e.get(eW.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eW.wK]: (0, g.Gr)((e) => {
                            let { resources: r } = e.get(eW.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: o } = r.musicExternalApi,
                                u = e.get(eW.Xc).getLanguage(),
                                g = e.get(eW.A4)({ credentials: 'include' });
                            return new er.u(g, {
                                prefixUrl: (0, s.getTldHost)(n, t, eb.B),
                                retryPolicyConfig: o,
                                timeouts: i.landingBlocksResource,
                                params: {
                                    common: {
                                        client: (0, eU._)(),
                                        language: u,
                                        get multiAuthUserId() {
                                            return e.get(eW.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eW.dh]: (0, g.Gr)((e) => {
                            let { resources: r } = e.get(eW.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: o } = r.musicExternalApi,
                                u = e.get(eW.Xc).getLanguage(),
                                g = e.get(eW.A4)({ credentials: 'include' });
                            return new en.q(g, {
                                prefixUrl: (0, s.getTldHost)(n, t, eb.B),
                                retryPolicyConfig: o,
                                timeouts: i.promoResource,
                                params: {
                                    common: {
                                        client: (0, eU._)(),
                                        language: u,
                                        get multiAuthUserId() {
                                            return e.get(eW.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eW.LC]: (0, g.Gr)((e) => {
                            let { resources: t, player: r } = e.get(eW.tw),
                                { timeouts: n, retryPolicyConfig: i } = t.musicExternalApi,
                                o = e.get(eW.CR)({ credentials: 'include' });
                            return new ei.g(o, {
                                prefixUrl: r.telemetry.telemetryUrl,
                                retryPolicyConfig: i,
                                timeouts: n.telemetryResouce,
                                params: { common: { client: (0, eU._)() } },
                            });
                        }),
                        [eW.W5]: (0, g.Gr)((e) => {
                            let { resources: t, player: r } = e.get(eW.tw),
                                { retryPolicyConfig: n } = t.musicExternalApi,
                                i = e.get(eW.CR)({ credentials: 'include' });
                            return new eo.N(i, { prefixUrl: r.telemetry.rumUrl, retryPolicyConfig: n, params: { common: { client: (0, eU._)() } } });
                        }),
                        [eW.EN]: (0, g.Gr)((e) => {
                            let { resources: r } = e.get(eW.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: o } = r.musicExternalApi,
                                u = e.get(eW.Xc).getLanguage(),
                                g = e.get(eW.A4)({ credentials: 'include' });
                            return new es._(g, {
                                prefixUrl: (0, s.getTldHost)(n, t, eb.B),
                                retryPolicyConfig: o,
                                timeouts: i.afterTrackResource,
                                params: {
                                    common: {
                                        client: (0, eU._)(),
                                        language: u,
                                        get multiAuthUserId() {
                                            return e.get(eW.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eW.PL]: (0, g.Gr)((e) => {
                            let { resources: r } = e.get(eW.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: o } = r.musicExternalApi,
                                u = e.get(eW.Xc).getLanguage(),
                                g = e.get(eW.A4)({ credentials: 'include' });
                            return new eu.w(g, {
                                prefixUrl: (0, s.getTldHost)(n, t, eb.B),
                                retryPolicyConfig: o,
                                timeouts: i.labelsResource,
                                params: {
                                    common: {
                                        client: (0, eU._)(),
                                        language: u,
                                        get multiAuthUserId() {
                                            return e.get(eW.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eW.DT]: (0, g.Gr)((e) => {
                            let { resources: r } = e.get(eW.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: o } = r.musicExternalApi,
                                u = e.get(eW.Xc).getLanguage(),
                                g = e.get(eW.A4)({ credentials: 'include' });
                            return new eg.O(g, {
                                prefixUrl: (0, s.getTldHost)(n, t, eb.B),
                                retryPolicyConfig: o,
                                timeouts: i.concertsResource,
                                params: {
                                    common: {
                                        client: (0, eU._)(),
                                        language: u,
                                        get multiAuthUserId() {
                                            return e.get(eW.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eW.dA]: (0, g.Gr)((e) => {
                            let { resources: r } = e.get(eW.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: o } = r.musicExternalApi,
                                u = e.get(eW.Xc).getLanguage(),
                                g = e.get(eW.A4)({ credentials: 'include' });
                            return new el.Q(g, {
                                prefixUrl: (0, s.getTldHost)(n, t, eb.B),
                                retryPolicyConfig: o,
                                timeouts: i.wordsResource,
                                params: {
                                    common: {
                                        client: (0, eU._)(),
                                        language: u,
                                        get multiAuthUserId() {
                                            return e.get(eW.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eW.$Y]: (0, g.Gr)((e) => {
                            let { resources: r } = e.get(eW.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: o } = r.musicExternalApi,
                                u = e.get(eW.Xc).getLanguage(),
                                g = e.get(eW.A4)({ credentials: 'include' });
                            return new ea.C(g, {
                                prefixUrl: (0, s.getTldHost)(n, t, eb.B),
                                retryPolicyConfig: o,
                                timeouts: i.wheelResource,
                                params: {
                                    common: {
                                        client: (0, eU._)(),
                                        language: u,
                                        get multiAuthUserId() {
                                            return e.get(eW.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eW.VR]: (0, g.P9)((e) => () => {
                            let { resources: t } = e.get(eW.tw),
                                r = e.get(eW.A4)({ credentials: 'omit' }),
                                n = new ec.o(r, t.networkReachability.url);
                            return (0, eB.P)({ probe: (e) => n.ping({ signal: e }) });
                        }),
                        [eW.zj]: (0, g.Gr)((e) => {
                            let { resources: r } = e.get(eW.tw),
                                { prefixUrl: n, timeouts: i, retryPolicyConfig: o } = r.musicExternalApi,
                                u = e.get(eW.Xc).getLanguage(),
                                g = e.get(eW.A4)({ credentials: 'include' });
                            return new ed.U(g, {
                                prefixUrl: (0, s.getTldHost)(n, t, eb.B),
                                retryPolicyConfig: o,
                                timeouts: i.lumenResource,
                                params: {
                                    common: {
                                        client: (0, eU._)(),
                                        language: u,
                                        get multiAuthUserId() {
                                            return e.get(eW.WA).getPassportUid();
                                        },
                                    },
                                },
                            });
                        }),
                        [eW.vg]: (0, g.Gr)(() => (0, eA.a)()),
                    })
                    .register(
                        eW.ff,
                        (0, g.Gr)((e) => {
                            let t = e.get(eW.N1);
                            return new l.AS({ dataSource: new eE.C(t) });
                        }),
                    )
                    .registerMany({
                        [eW.UB]: (0, g.Gr)((e) => {
                            let t = e.get(eW.vg);
                            return new p.B(t);
                        }),
                        [eW.Tq]: (0, g.Gr)((e) => {
                            var t;
                            let r = e.get(eW.W5);
                            return (null == (t = window.Ya) ? void 0 : t.Rum) ? new p.G((0, ew.y)(), r, window.Ya.Rum) : null;
                        }),
                    })
                    .register(
                        eW.by,
                        (0, g.Gr)((e) => {
                            let t = e.get(eW.oo),
                                r = e.get(eW.Zf),
                                n = (0, o.A)(),
                                s = {
                                    info: { app_name: eD || 'Browser', app_version: eM || '', title: 'Browser '.concat(eD), device_id: n, type: i.bq.WEB },
                                    volumeGranularity: 20,
                                    get defaultVolume() {
                                        var u;
                                        return null != (u = t.get(ek.c.YmPlayerVolume)) ? u : void 0;
                                    },
                                },
                                g = e.get(eW.WA).getPassportUid(),
                                l = e.get(eW.QG),
                                a = e.get(eW.UB),
                                c = e.get(eW.Tq),
                                d = [new i.zT(a)];
                            return (
                                c && d.push(new i.qP(c)),
                                new i.Jd({
                                    logger: r,
                                    deviceConfig: s,
                                    multiAuthUserId: g,
                                    oauth: l.token,
                                    ynisonConnectionConfig: eQ.ynisonConnectionConfig,
                                    metricsTransport: d,
                                    variables: {
                                        isShadow: !0,
                                        get puid() {
                                            return e.get(eW.WA).getPassportUid();
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
