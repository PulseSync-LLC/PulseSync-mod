'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2580, 8357, 8814, 9399],
    {
        342: (e, t, n) => {
            n.d(t, { A: () => a });
            var r = n(3210),
                o = Math.max;
            let a = function (e, t, n) {
                return (
                    (t = o(void 0 === t ? e.length - 1 : t, 0)),
                    function () {
                        for (var a = arguments, i = -1, s = o(a.length - t, 0), c = Array(s); ++i < s; ) c[i] = a[t + i];
                        i = -1;
                        for (var u = Array(t + 1); ++i < t; ) u[i] = a[i];
                        return (u[t] = n(c)), (0, r.A)(e, this, u);
                    }
                );
            };
        },
        1630: (e, t, n) => {
            n.d(t, { A: () => r });
            let r = (0, n(92938).A)();
        },
        3210: (e, t, n) => {
            n.d(t, { A: () => r });
            let r = function (e, t, n) {
                switch (n.length) {
                    case 0:
                        return e.call(t);
                    case 1:
                        return e.call(t, n[0]);
                    case 2:
                        return e.call(t, n[0], n[1]);
                    case 3:
                        return e.call(t, n[0], n[1], n[2]);
                }
                return e.apply(t, n);
            };
        },
        9710: (e, t, n) => {
            n.d(t, { A: () => s });
            var r = n(83745),
                o = n(7812),
                a = n(27115),
                i = o.A
                    ? function (e, t) {
                          return (0, o.A)(e, 'toString', { configurable: !0, enumerable: !1, value: (0, r.A)(t), writable: !0 });
                      }
                    : a.A;
            let s = (0, n(38928).A)(i);
        },
        11260: (e, t, n) => {
            n.d(t, { A: () => l });
            var r = n(11828),
                o = n(55796),
                a = n(21793),
                i = Object.prototype,
                s = Function.prototype.toString,
                c = i.hasOwnProperty,
                u = s.call(Object);
            let l = function (e) {
                if (!(0, a.A)(e) || '[object Object]' != (0, r.A)(e)) return !1;
                var t = (0, o.A)(e);
                if (null === t) return !0;
                var n = c.call(t, 'constructor') && t.constructor;
                return 'function' == typeof n && n instanceof n && s.call(n) == u;
            };
        },
        22711: (e, t, n) => {
            n.d(t, { A: () => o });
            var r = n(77480);
            let o = (0, n(28736).A)(function (e, t, n) {
                (0, r.A)(e, t, n);
            });
        },
        27115: (e, t, n) => {
            n.d(t, { A: () => r });
            let r = function (e) {
                return e;
            };
        },
        28736: (e, t, n) => {
            n.d(t, { A: () => a });
            var r = n(36021),
                o = n(40675);
            let a = function (e) {
                return (0, r.A)(function (t, n) {
                    var r = -1,
                        a = n.length,
                        i = a > 1 ? n[a - 1] : void 0,
                        s = a > 2 ? n[2] : void 0;
                    for (
                        i = e.length > 3 && 'function' == typeof i ? (a--, i) : void 0,
                            s && (0, o.A)(n[0], n[1], s) && ((i = a < 3 ? void 0 : i), (a = 1)),
                            t = Object(t);
                        ++r < a;

                    ) {
                        var c = n[r];
                        c && e(t, c, r, i);
                    }
                    return t;
                });
            };
        },
        36021: (e, t, n) => {
            n.d(t, { A: () => i });
            var r = n(27115),
                o = n(342),
                a = n(9710);
            let i = function (e, t) {
                return (0, a.A)((0, o.A)(e, t, r.A), e + '');
            };
        },
        38928: (e, t, n) => {
            n.d(t, { A: () => o });
            var r = Date.now;
            let o = function (e) {
                var t = 0,
                    n = 0;
                return function () {
                    var o = r(),
                        a = 16 - (o - n);
                    if (((n = o), a > 0)) {
                        if (++t >= 800) return arguments[0];
                    } else t = 0;
                    return e.apply(void 0, arguments);
                };
            };
        },
        39399: (e, t, n) => {
            n.d(t, { t: () => s });
            var r = n(6493),
                o = n(71942),
                a = n(13132);
            let i = {
                    WINDOWS: '0d8ab1a6-1667-42cb-a98f-2fe7eff4b137',
                    MACOS: '05c45ae8-b869-4ec1-848c-4b314fbadc17',
                    LINUX: 'd2bcdb71-90ac-493b-b68f-024321954a5d',
                    WEB: 'b200fd55-5a52-4fa2-b5db-d163e986a61d',
                },
                s = () => {
                    switch ((0, o.t)((0, r.u)())) {
                        case a.V.WINDOWS:
                            return i.WINDOWS;
                        case a.V.MACOS:
                            return i.MACOS;
                        case a.V.LINUX:
                            return i.LINUX;
                    }
                    return i.WEB;
                };
        },
        40675: (e, t, n) => {
            n.d(t, { A: () => s });
            var r = n(6575),
                o = n(43713),
                a = n(59994),
                i = n(71270);
            let s = function (e, t, n) {
                if (!(0, i.A)(n)) return !1;
                var s = typeof t;
                return ('number' == s ? !!((0, o.A)(n) && (0, a.A)(t, n.length)) : 'string' == s && t in n) && (0, r.A)(n[t], e);
            };
        },
        52580: (e, t, n) => {},
        58814: (e, t, n) => {
            n.d(t, { config: () => l });
            var r = n(22711),
                o = n(15209),
                a = n(22001),
                i = n(78171),
                s = n(80738),
                c = n(39399),
                u = n(49124);
            let l = () => {
                let e = u.env.NEXT_PUBLIC_USE_PRODUCTION_BACKEND ? 'https://api.music.yandex.'.concat(i.B) : 'https://api.music.qa.yandex.'.concat(i.B);
                return (0, r.A)((0, s.config)(), {
                    resources: { musicExternalApi: { prefixUrl: e } },
                    player: { prefixUrl: e, overembed: !1, secretKey: (0, a.E)(), externalDomain: 'localhost.music.yandex.ru' },
                    tvm: {
                        enabled: !0,
                        destinations: ['blackbox'],
                        ...((0, o.toBoolean)(u.env.USE_QYP_TVM) ? { host: 'http://local-music-dev-sas.sas.yp-c.yandex.net/tvm' } : {}),
                    },
                    passportCredentials: { host: 'https://passport.yandex.'.concat(i.B), origin: 'music_desktop' },
                    blackbox: { host: 'http://local-music-dev-sas.sas.yp-c.yandex.net/bbm/blackbox', enabled: !0 },
                    oldWebHost: u.env.NEXT_PUBLIC_USE_PRODUCTION_BACKEND ? 'music.yandex.'.concat(i.B) : 'music.qa.yandex.'.concat(i.B),
                    afisha: { clientId: (0, c.t)(), host: 'https://widget.afisha.yandex.ru' },
                    iframe: { entityBaseUrl: 'https://music.qa.yandex.'.concat(i.B) },
                    rsc: { useCache: !1 },
                    mocks: { enabled: !1, urlCapturePattern: u.env.NEXT_PUBLIC_MOCK_URL_CAPTURE_PATTERN || ''.concat(e, '/*') },
                });
            };
        },
        77480: (e, t, n) => {
            n.d(t, { A: () => S });
            var r = n(75856),
                o = n(9959),
                a = n(6575);
            let i = function (e, t, n) {
                ((void 0 === n || (0, a.A)(e[t], n)) && (void 0 !== n || t in e)) || (0, o.A)(e, t, n);
            };
            var s = n(1630),
                c = n(12841),
                u = n(53222),
                l = n(84296),
                d = n(67450),
                p = n(63339),
                f = n(24422),
                A = n(89326),
                v = n(88947),
                m = n(15993),
                y = n(71270),
                h = n(11260),
                b = n(6808);
            let E = function (e, t) {
                if (('constructor' !== t || 'function' != typeof e[t]) && '__proto__' != t) return e[t];
            };
            var _ = n(98799);
            let P = function (e, t, n, r, o, a, s) {
                var P = E(e, n),
                    C = E(t, n),
                    S = s.get(C);
                if (S) return void i(e, n, S);
                var U = a ? a(P, C, n + '', e, t, s) : void 0,
                    x = void 0 === U;
                if (x) {
                    var T = (0, f.A)(C),
                        g = !T && (0, v.A)(C),
                        k = !T && !g && (0, b.A)(C);
                    (U = C),
                        T || g || k
                            ? (0, f.A)(P)
                                ? (U = P)
                                : (0, A.A)(P)
                                  ? (U = (0, l.A)(P))
                                  : g
                                    ? ((x = !1), (U = (0, c.A)(C, !0)))
                                    : k
                                      ? ((x = !1), (U = (0, u.A)(C, !0)))
                                      : (U = [])
                            : (0, h.A)(C) || (0, p.A)(C)
                              ? ((U = P), (0, p.A)(P) ? (U = (0, _.A)(P)) : (!(0, y.A)(P) || (0, m.A)(P)) && (U = (0, d.A)(C)))
                              : (x = !1);
                }
                x && (s.set(C, U), o(U, C, r, a, s), s.delete(C)), i(e, n, U);
            };
            var C = n(47931);
            let S = function e(t, n, o, a, c) {
                t !== n &&
                    (0, s.A)(
                        n,
                        function (s, u) {
                            if ((c || (c = new r.A()), (0, y.A)(s))) P(t, n, u, o, e, a, c);
                            else {
                                var l = a ? a(E(t, u), s, u + '', t, n, c) : void 0;
                                void 0 === l && (l = s), i(t, u, l);
                            }
                        },
                        C.A,
                    );
            };
        },
        80738: (e, t, n) => {
            n.d(t, { config: () => c });
            var r = n(49544),
                o = n(8171),
                a = n(78171),
                i = n(49775);
            n(52580);
            var s = n(49124);
            let c = () => {
                var e;
                return {
                    logger: {
                        uaDisabled: !!s.env.SERVER_UNIFIED_AGENT_DISABLED,
                        uaServerAddress: null != (e = s.env.SERVER_UNIFIED_AGENT_ADDRESS) ? e : 'http://localhost:12344',
                        uaProtoPath: s.env.UA_PROTO_PATH || '../../packages/unified-agent/build/proto/unified_agent.proto',
                        errorBooster: {
                            ...{ project: 'music.frontend.desktop', platform: 'desktop' },
                            page: 'window.location.pathname',
                            version: s.env.APP_VERSION || '',
                            environment: 'production',
                            unhandledRejection: !0,
                            uncaughtException: !0,
                            resourceFails: !0,
                        },
                    },
                    oauthCredentials: { host: 'https://oauth.yandex.'.concat(a.B), clientId: '97fe03033fa34407ac9bcf91d5afed5b' },
                    tvm: { tvmtoolAuthToken: s.env.TVMTOOL_LOCAL_AUTHTOKEN, self: 'music_test', destinations: ['blackbox'], host: 'http://localhost:8001', enabled: !1 },
                    rumSettings: {
                        ...{ rumId: 'ru.music.frontend.desktop', project: 'music.frontend.desktop', service: 'frontend-desktop', platform: 'desktop' },
                        page: 'window.location.pathname',
                        heroElement: 'body',
                        version: s.env.APP_VERSION || '',
                        environment: 'production',
                    },
                    passportCredentials: { host: 'https://passport.yandex.'.concat(a.B), origin: 'music_desktop' },
                    blackbox: { host: 'http://blackbox.envoy.localhost:9080', enabled: !1 },
                    resources: { musicExternalApi: { retryPolicyConfig: i.t, defaultTimeout: o.Aj, timeouts: o.LE } },
                    payment: { environment: 'testing' },
                    i18n: { cookieExpirationDays: 365 },
                    ynisonConnectionConfig: {
                        ynisonHost: 'ynison.music.yandex.ru',
                        redirectorPath: '/redirector.YnisonRedirectService/GetRedirectToYnison',
                        hubConnectioPath: '/ynison_state.YnisonStateService/PutYnisonState',
                        reconnectTimeout: 2e3,
                        reconnectAttempts: 2,
                        historyLimit: 100,
                    },
                    player: {
                        configVariablesMainPlayback: {
                            entitiesToPreloadStrmUrlsCount: 1,
                            entitiesToPreloadSourceCount: 1,
                            preloadedSourcesMaxCount: 1,
                            strmUrlsTtlMs: 36e5,
                            mediaElementErrorReloadCount: 2,
                            windowSize: 30,
                            setupQueueWindowSize: 80,
                            bufferGoal: 5,
                        },
                        configVariablesPromoLandingPlayback: {
                            entitiesToPreloadStrmUrlsCount: 1,
                            entitiesToPreloadSourceCount: 1,
                            preloadedSourcesMaxCount: 1,
                            strmUrlsTtlMs: 36e5,
                            mediaElementErrorReloadCount: 2,
                            windowSize: 30,
                            setupQueueWindowSize: 80,
                            bufferGoal: 5,
                        },
                        configVariablesTrailerPlayback: { mediaElementErrorReloadCount: 2, windowSize: 30, setupQueueWindowSize: 80, storePlaysProgressIntervalMs: 5e3 },
                        hlsErrorRetryLimit: 2,
                        yaspVersionStable: '12946',
                        yaspSourceLimit: 3,
                        yaspLoadRetryDelayMs: 1e3,
                        yaspExpName: void 0,
                        yaspCandidateVersion: void 0,
                        vhMediaProvider: { service: 'ya-music', from: 'ya-music', vhUrl: 'https://frontend.vh.yandex.ru/player/' },
                        vhPlayerSdkVersion: '12569',
                        telemetry: {
                            telemetryUrl: 'https://log.strm.yandex.ru',
                            testTelemetryUrl: 'https://log-test.strm.yandex.net',
                            service: 'WebMusic',
                            from: 'ya-music',
                            playerTypeForVsid: 'MWE',
                            rumUrl: 'https://yandex.ru/clck/click',
                            perfLogUrl: 'https://strm.yandex.ru/perf',
                        },
                    },
                    downloadDesktop: { url: 'https://music.yandex.'.concat(a.B, '/download/?autodownload=1') },
                    iframe: { entityBaseUrl: 'https://music.yandex.'.concat(a.B) },
                    redirects: { KZ: { fromTLD: [r.r.RU], toTLD: r.r.KZ }, UZ: { fromTLD: [r.r.RU], toTLD: r.r.UZ } },
                    acqOffers: { environment: 'production', brand: 'YANDEX', service: 'music', appVersion: s.env.APP_VERSION },
                    rsc: { useCache: !0 },
                    mocks: {
                        enabled: !1,
                        mocksProviderUrl: s.env.NEXT_PUBLIC_MOCKS_PROVIDER_URL || 'https://s3.mds.yandex.net/music-frontend-mocks/',
                        urlCapturePattern: s.env.NEXT_PUBLIC_MOCK_URL_CAPTURE_PATTERN || ''.concat('https://api.music.yandex.'.concat(a.B, '/*')),
                    },
                };
            };
        },
        83745: (e, t, n) => {
            n.d(t, { A: () => r });
            let r = function (e) {
                return function () {
                    return e;
                };
            };
        },
        89326: (e, t, n) => {
            n.d(t, { A: () => a });
            var r = n(43713),
                o = n(21793);
            let a = function (e) {
                return (0, o.A)(e) && (0, r.A)(e);
            };
        },
        92938: (e, t, n) => {
            n.d(t, { A: () => r });
            let r = function (e) {
                return function (t, n, r) {
                    for (var o = -1, a = Object(t), i = r(t), s = i.length; s--; ) {
                        var c = i[e ? s : ++o];
                        if (!1 === n(a[c], c, a)) break;
                    }
                    return t;
                };
            };
        },
        98799: (e, t, n) => {
            n.d(t, { A: () => a });
            var r = n(41620),
                o = n(47931);
            let a = function (e) {
                return (0, r.A)(e, (0, o.A)(e));
            };
        },
    },
]);
