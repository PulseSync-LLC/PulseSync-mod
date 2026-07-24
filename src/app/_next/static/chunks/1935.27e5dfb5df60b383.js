'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1935, 3789, 3970, 6293, 9635],
    {
        2312: (e, t, o) => {
            o.d(t, { A: () => r });
            let r = (0, o(97660).A)();
        },
        6170: (e, t, o) => {
            o.d(t, { w: () => a });
            var r = o(80451),
                n = o(49124);
            let a = (e, t) =>
                (0, r.toBoolean)(!1) && !1 === (0, r.toBoolean)(n.env.LOCAL_PROD_BUILD)
                    ? 'http://music-backend-music-api-gateway.envoy.localhost:9080'
                    : 'string' == typeof t && t.length > 0
                      ? t
                      : e;
        },
        18557: (e, t, o) => {
            o.d(t, { A: () => a });
            var r = o(76270),
                n = o(73184);
            let a = function (e) {
                return (0, r.A)(e, (0, n.A)(e));
            };
        },
        22389: (e, t, o) => {
            o.d(t, { A: () => g });
            var r = o(8994),
                n = o(25249),
                a = o(48289);
            let i = function (e, t, o) {
                ((void 0 === o || (0, a.A)(e[t], o)) && (void 0 !== o || t in e)) || (0, n.A)(e, t, o);
            };
            var s = o(2312),
                c = o(58531),
                l = o(91368),
                d = o(69326),
                u = o(35560),
                p = o(97268),
                f = o(47256),
                m = o(90780),
                v = o(49593),
                y = o(23435),
                A = o(83556),
                b = o(43234),
                h = o(81942);
            let E = function (e, t) {
                if (('constructor' !== t || 'function' != typeof e[t]) && '__proto__' != t) return e[t];
            };
            var _ = o(18557);
            let S = function (e, t, o, r, n, a, s) {
                var S = E(e, o),
                    U = E(t, o),
                    g = s.get(U);
                if (g) return void i(e, o, g);
                var P = a ? a(S, U, o + '', e, t, s) : void 0,
                    T = void 0 === P;
                if (T) {
                    var x = (0, f.A)(U),
                        R = !x && (0, v.A)(U),
                        k = !x && !R && (0, h.A)(U);
                    (P = U),
                        x || R || k
                            ? (0, f.A)(S)
                                ? (P = S)
                                : (0, m.A)(S)
                                  ? (P = (0, d.A)(S))
                                  : R
                                    ? ((T = !1), (P = (0, c.A)(U, !0)))
                                    : k
                                      ? ((T = !1), (P = (0, l.A)(U, !0)))
                                      : (P = [])
                            : (0, b.A)(U) || (0, p.A)(U)
                              ? ((P = S), (0, p.A)(S) ? (P = (0, _.A)(S)) : (!(0, A.A)(S) || (0, y.A)(S)) && (P = (0, u.A)(U)))
                              : (T = !1);
                }
                T && (s.set(U, P), n(P, U, r, a, s), s.delete(U)), i(e, o, P);
            };
            var U = o(73184);
            let g = function e(t, o, n, a, c) {
                t !== o &&
                    (0, s.A)(
                        o,
                        function (s, l) {
                            if ((c || (c = new r.A()), (0, A.A)(s))) S(t, o, l, n, e, a, c);
                            else {
                                var d = a ? a(E(t, l), s, l + '', t, o, c) : void 0;
                                void 0 === d && (d = s), i(t, l, d);
                            }
                        },
                        U.A,
                    );
            };
        },
        36293: (e, t, o) => {
            o.d(t, { t: () => s });
            var r = o(95415),
                n = o(87748),
                a = o(13598);
            let i = {
                    WINDOWS: '0d8ab1a6-1667-42cb-a98f-2fe7eff4b137',
                    MACOS: '05c45ae8-b869-4ec1-848c-4b314fbadc17',
                    LINUX: 'd2bcdb71-90ac-493b-b68f-024321954a5d',
                    WEB: 'b200fd55-5a52-4fa2-b5db-d163e986a61d',
                },
                s = () => {
                    switch ((0, n.t)((0, r.u)())) {
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
        38126: (e, t, o) => {
            var r;
            o.d(t, { r: () => r }),
                (function (e) {
                    (e.RU = 'ru'), (e.COM = 'com'), (e.KZ = 'kz'), (e.BY = 'by'), (e.UZ = 'uz');
                })(r || (r = {}));
        },
        42157: (e, t, o) => {
            o.d(t, { A: () => n });
            var r = o(22389);
            let n = (0, o(47302).A)(function (e, t, o) {
                (0, r.A)(e, t, o);
            });
        },
        43234: (e, t, o) => {
            o.d(t, { A: () => d });
            var r = o(60058),
                n = o(56126),
                a = o(83107),
                i = Object.prototype,
                s = Function.prototype.toString,
                c = i.hasOwnProperty,
                l = s.call(Object);
            let d = function (e) {
                if (!(0, a.A)(e) || '[object Object]' != (0, r.A)(e)) return !1;
                var t = (0, n.A)(e);
                if (null === t) return !0;
                var o = c.call(t, 'constructor') && t.constructor;
                return 'function' == typeof o && o instanceof o && s.call(o) == l;
            };
        },
        47302: (e, t, o) => {
            o.d(t, { A: () => a });
            var r = o(44895),
                n = o(55129);
            let a = function (e) {
                return (0, r.A)(function (t, o) {
                    var r = -1,
                        a = o.length,
                        i = a > 1 ? o[a - 1] : void 0,
                        s = a > 2 ? o[2] : void 0;
                    for (
                        i = e.length > 3 && 'function' == typeof i ? (a--, i) : void 0,
                            s && (0, n.A)(o[0], o[1], s) && ((i = a < 3 ? void 0 : i), (a = 1)),
                            t = Object(t);
                        ++r < a;

                    ) {
                        var c = o[r];
                        c && e(t, c, r, i);
                    }
                    return t;
                });
            };
        },
        55129: (e, t, o) => {
            o.d(t, { A: () => s });
            var r = o(48289),
                n = o(93223),
                a = o(15640),
                i = o(83556);
            let s = function (e, t, o) {
                if (!(0, i.A)(o)) return !1;
                var s = typeof t;
                return ('number' == s ? !!((0, n.A)(o) && (0, a.A)(t, o.length)) : 'string' == s && t in o) && (0, r.A)(o[t], e);
            };
        },
        62016: (e, t, o) => {
            o.d(t, { config: () => c });
            var r = o(38126),
                n = o(64461),
                a = o(19053),
                i = o(62885);
            o(63970);
            var s = o(49124);
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
                        musicExternalApi: { retryPolicyConfig: i.t, defaultTimeout: n.Aj, timeouts: n.LE },
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
                    redirects: { KZ: { fromTLD: [r.r.RU], toTLD: r.r.KZ }, UZ: { fromTLD: [r.r.RU], toTLD: r.r.UZ } },
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
        63970: (e, t, o) => {},
        81935: (e, t, o) => {
            o.d(t, { config: () => u });
            var r = o(42157),
                n = o(80451),
                a = o(25079),
                i = o(19053),
                s = o(62016),
                c = o(36293),
                l = o(6170),
                d = o(49124);
            let u = (e) => {
                let t = (0, l.w)('https://api.music.qa.yandex.'.concat(i.B), e);
                return (0, r.A)((0, s.config)(), {
                    resources: { musicExternalApi: { prefixUrl: t } },
                    player: { overembed: !1, secretKey: (0, a.E)(), externalDomain: 'localhost.music.yandex.ru', prefixUrl: t },
                    passportCredentials: { host: 'https://passport.yandex.'.concat(i.B), origin: 'music' },
                    blackbox: { ...((0, n.toBoolean)(d.env.LOCAL_PROD_BUILD) ? { host: 'http://local-music-dev.vla.yp-c.yandex.net/bbm/blackbox' } : {}), enabled: !0 },
                    tvm: { enabled: (0, n.toBoolean)(d.env.LOCAL_PROD_BUILD) },
                    oldWebHost: 'music.qa.yandex.'.concat(i.B),
                    afisha: { clientId: (0, c.t)(), host: 'https://widget.afisha.yandex.ru' },
                    iframe: { entityBaseUrl: 'https://music.qa.yandex.'.concat(i.B) },
                    mocks: { enabled: !1 },
                });
            };
        },
        97660: (e, t, o) => {
            o.d(t, { A: () => r });
            let r = function (e) {
                return function (t, o, r) {
                    for (var n = -1, a = Object(t), i = r(t), s = i.length; s--; ) {
                        var c = i[e ? s : ++n];
                        if (!1 === o(a[c], c, a)) break;
                    }
                    return t;
                };
            };
        },
    },
]);
