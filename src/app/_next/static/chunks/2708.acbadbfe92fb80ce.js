'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2708, 3970, 6293, 9635],
    {
        2312: (e, t, r) => {
            r.d(t, { A: () => n });
            let n = (0, r(97660).A)();
        },
        18557: (e, t, r) => {
            r.d(t, { A: () => a });
            var n = r(76270),
                o = r(73184);
            let a = function (e) {
                return (0, n.A)(e, (0, o.A)(e));
            };
        },
        22389: (e, t, r) => {
            r.d(t, { A: () => S });
            var n = r(8994),
                o = r(25249),
                a = r(48289);
            let i = function (e, t, r) {
                ((void 0 === r || (0, a.A)(e[t], r)) && (void 0 !== r || t in e)) || (0, o.A)(e, t, r);
            };
            var s = r(2312),
                c = r(58531),
                u = r(91368),
                d = r(69326),
                l = r(35560),
                p = r(97268),
                m = r(47256),
                f = r(90780),
                v = r(49593),
                y = r(23435),
                A = r(83556),
                b = r(43234),
                h = r(81942);
            let E = function (e, t) {
                if (('constructor' !== t || 'function' != typeof e[t]) && '__proto__' != t) return e[t];
            };
            var _ = r(18557);
            let T = function (e, t, r, n, o, a, s) {
                var T = E(e, r),
                    U = E(t, r),
                    S = s.get(U);
                if (S) return void i(e, r, S);
                var C = a ? a(T, U, r + '', e, t, s) : void 0,
                    P = void 0 === C;
                if (P) {
                    var x = (0, m.A)(U),
                        R = !x && (0, v.A)(U),
                        g = !x && !R && (0, h.A)(U);
                    (C = U),
                        x || R || g
                            ? (0, m.A)(T)
                                ? (C = T)
                                : (0, f.A)(T)
                                  ? (C = (0, d.A)(T))
                                  : R
                                    ? ((P = !1), (C = (0, c.A)(U, !0)))
                                    : g
                                      ? ((P = !1), (C = (0, u.A)(U, !0)))
                                      : (C = [])
                            : (0, b.A)(U) || (0, p.A)(U)
                              ? ((C = T), (0, p.A)(T) ? (C = (0, _.A)(T)) : (!(0, A.A)(T) || (0, y.A)(T)) && (C = (0, l.A)(U)))
                              : (P = !1);
                }
                P && (s.set(U, C), o(C, U, n, a, s), s.delete(U)), i(e, r, C);
            };
            var U = r(73184);
            let S = function e(t, r, o, a, c) {
                t !== r &&
                    (0, s.A)(
                        r,
                        function (s, u) {
                            if ((c || (c = new n.A()), (0, A.A)(s))) T(t, r, u, o, e, a, c);
                            else {
                                var d = a ? a(E(t, u), s, u + '', t, r, c) : void 0;
                                void 0 === d && (d = s), i(t, u, d);
                            }
                        },
                        U.A,
                    );
            };
        },
        36293: (e, t, r) => {
            r.d(t, { t: () => s });
            var n = r(95415),
                o = r(87748),
                a = r(13598);
            let i = {
                    WINDOWS: '0d8ab1a6-1667-42cb-a98f-2fe7eff4b137',
                    MACOS: '05c45ae8-b869-4ec1-848c-4b314fbadc17',
                    LINUX: 'd2bcdb71-90ac-493b-b68f-024321954a5d',
                    WEB: 'b200fd55-5a52-4fa2-b5db-d163e986a61d',
                },
                s = () => {
                    switch ((0, o.t)((0, n.u)())) {
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
        38126: (e, t, r) => {
            var n;
            r.d(t, { r: () => n }),
                (function (e) {
                    (e.RU = 'ru'), (e.COM = 'com'), (e.KZ = 'kz'), (e.BY = 'by'), (e.UZ = 'uz');
                })(n || (n = {}));
        },
        42157: (e, t, r) => {
            r.d(t, { A: () => o });
            var n = r(22389);
            let o = (0, r(47302).A)(function (e, t, r) {
                (0, n.A)(e, t, r);
            });
        },
        43234: (e, t, r) => {
            r.d(t, { A: () => d });
            var n = r(60058),
                o = r(56126),
                a = r(83107),
                i = Object.prototype,
                s = Function.prototype.toString,
                c = i.hasOwnProperty,
                u = s.call(Object);
            let d = function (e) {
                if (!(0, a.A)(e) || '[object Object]' != (0, n.A)(e)) return !1;
                var t = (0, o.A)(e);
                if (null === t) return !0;
                var r = c.call(t, 'constructor') && t.constructor;
                return 'function' == typeof r && r instanceof r && s.call(r) == u;
            };
        },
        47302: (e, t, r) => {
            r.d(t, { A: () => a });
            var n = r(44895),
                o = r(55129);
            let a = function (e) {
                return (0, n.A)(function (t, r) {
                    var n = -1,
                        a = r.length,
                        i = a > 1 ? r[a - 1] : void 0,
                        s = a > 2 ? r[2] : void 0;
                    for (
                        i = e.length > 3 && 'function' == typeof i ? (a--, i) : void 0,
                            s && (0, o.A)(r[0], r[1], s) && ((i = a < 3 ? void 0 : i), (a = 1)),
                            t = Object(t);
                        ++n < a;

                    ) {
                        var c = r[n];
                        c && e(t, c, n, i);
                    }
                    return t;
                });
            };
        },
        52708: (e, t, r) => {
            r.d(t, { config: () => d });
            var n = r(42157),
                o = r(80451),
                a = r(25079),
                i = r(19053),
                s = r(62016),
                c = r(36293),
                u = r(49124);
            let d = () => {
                let e = u.env.NEXT_PUBLIC_USE_PRODUCTION_BACKEND ? 'https://api.music.yandex.'.concat(i.B) : 'https://api.music.qa.yandex.'.concat(i.B);
                return (0, n.A)((0, s.config)(), {
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
                    mocks: { enabled: 'true' === u.env.NEXT_PUBLIC_MOCKS_ENABLED, urlCapturePattern: u.env.NEXT_PUBLIC_MOCK_URL_CAPTURE_PATTERN || ''.concat(e, '/*') },
                });
            };
        },
        55129: (e, t, r) => {
            r.d(t, { A: () => s });
            var n = r(48289),
                o = r(93223),
                a = r(15640),
                i = r(83556);
            let s = function (e, t, r) {
                if (!(0, i.A)(r)) return !1;
                var s = typeof t;
                return ('number' == s ? !!((0, o.A)(r) && (0, a.A)(t, r.length)) : 'string' == s && t in r) && (0, n.A)(r[t], e);
            };
        },
        62016: (e, t, r) => {
            r.d(t, { config: () => c });
            var n = r(38126),
                o = r(64461),
                a = r(19053),
                i = r(62885);
            r(63970);
            var s = r(49124);
            let c = () => {
                var e;
                return {
                    server: { requestTimeout: s.env.SERVER_REQUEST_TIMEOUT ? Number(s.env.SERVER_REQUEST_TIMEOUT) : 1e4 },
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
                    resources: {
                        musicExternalApi: { retryPolicyConfig: i.t, defaultTimeout: o.Aj, timeouts: o.LE },
                        networkReachability: { url: 'https://api.browser.yandex.ru/generate_204' },
                    },
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
                        yaspExpName: 'WebNextYaspVersion13766',
                        yaspCandidateVersion: '13766',
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
                    redirects: { KZ: { fromTLD: [n.r.RU], toTLD: n.r.KZ }, UZ: { fromTLD: [n.r.RU], toTLD: n.r.UZ } },
                    acqOffers: { environment: 'production', brand: 'YANDEX', service: 'music', appVersion: s.env.APP_VERSION },
                    rsc: { useCache: !0 },
                    mocks: {
                        enabled: !1,
                        mocksProviderUrl: s.env.NEXT_PUBLIC_MOCKS_PROVIDER_URL || 'https://s3.mds.yandex.net/mocks-storage/',
                        urlCapturePattern: s.env.NEXT_PUBLIC_MOCK_URL_CAPTURE_PATTERN || ''.concat('https://api.music.yandex.'.concat(a.B, '/*')),
                    },
                };
            };
        },
        63970: (e, t, r) => {},
        97660: (e, t, r) => {
            r.d(t, { A: () => n });
            let n = function (e) {
                return function (t, r, n) {
                    for (var o = -1, a = Object(t), i = n(t), s = i.length; s--; ) {
                        var c = i[e ? s : ++o];
                        if (!1 === r(a[c], c, a)) break;
                    }
                    return t;
                };
            };
        },
    },
]);
