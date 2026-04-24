'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1678, 1945, 3932, 6900, 9086],
    {
        1424: (e, t, r) => {
            r.d(t, { A: () => a });
            var n = r(39412),
                o = Math.max;
            let a = function (e, t, r) {
                return (
                    (t = o(void 0 === t ? e.length - 1 : t, 0)),
                    function () {
                        for (var a = arguments, i = -1, s = o(a.length - t, 0), c = Array(s); ++i < s; ) c[i] = a[t + i];
                        i = -1;
                        for (var l = Array(t + 1); ++i < t; ) l[i] = a[i];
                        return (l[t] = r(c)), (0, n.A)(e, this, l);
                    }
                );
            };
        },
        11011: (e, t, r) => {
            r.d(t, { A: () => i });
            var n = r(40525),
                o = r(1424),
                a = r(93479);
            let i = function (e, t) {
                return (0, a.A)((0, o.A)(e, t, n.A), e + '');
            };
        },
        23932: (e, t, r) => {
            r.d(t, { config: () => c });
            var n = r(60146),
                o = r(75151),
                a = r(47521),
                i = r(81497);
            r(89086);
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
        31678: (e, t, r) => {
            r.d(t, { w: () => a });
            var n = r(33878),
                o = r(49124);
            let a = (e, t) =>
                (0, n.toBoolean)(!1) && !1 === (0, n.toBoolean)(o.env.LOCAL_PROD_BUILD)
                    ? 'http://music-backend-music-api-gateway.envoy.localhost:9080'
                    : 'string' == typeof t && t.length > 0
                      ? t
                      : e;
        },
        38272: (e, t, r) => {
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
        39412: (e, t, r) => {
            r.d(t, { A: () => n });
            let n = function (e, t, r) {
                switch (r.length) {
                    case 0:
                        return e.call(t);
                    case 1:
                        return e.call(t, r[0]);
                    case 2:
                        return e.call(t, r[0], r[1]);
                    case 3:
                        return e.call(t, r[0], r[1], r[2]);
                }
                return e.apply(t, r);
            };
        },
        40525: (e, t, r) => {
            r.d(t, { A: () => n });
            let n = function (e) {
                return e;
            };
        },
        49137: (e, t, r) => {
            r.d(t, { A: () => o });
            var n = r(81381);
            let o = (0, r(60226).A)(function (e, t, r) {
                (0, n.A)(e, t, r);
            });
        },
        50329: (e, t, r) => {
            r.d(t, { A: () => a });
            var n = r(2778),
                o = r(10166);
            let a = function (e) {
                return (0, n.A)(e, (0, o.A)(e));
            };
        },
        51704: (e, t, r) => {
            r.d(t, { A: () => a });
            var n = r(75659),
                o = r(65895);
            let a = function (e) {
                return (0, o.A)(e) && (0, n.A)(e);
            };
        },
        57517: (e, t, r) => {
            r.d(t, { A: () => s });
            var n = r(89701),
                o = r(75659),
                a = r(36180),
                i = r(78136);
            let s = function (e, t, r) {
                if (!(0, i.A)(r)) return !1;
                var s = typeof t;
                return ('number' == s ? !!((0, o.A)(r) && (0, a.A)(t, r.length)) : 'string' == s && t in r) && (0, n.A)(r[t], e);
            };
        },
        60226: (e, t, r) => {
            r.d(t, { A: () => a });
            var n = r(11011),
                o = r(57517);
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
        65726: (e, t, r) => {
            r.d(t, { A: () => o });
            var n = Date.now;
            let o = function (e) {
                var t = 0,
                    r = 0;
                return function () {
                    var o = n(),
                        a = 16 - (o - r);
                    if (((r = o), a > 0)) {
                        if (++t >= 800) return arguments[0];
                    } else t = 0;
                    return e.apply(void 0, arguments);
                };
            };
        },
        65924: (e, t, r) => {
            r.d(t, { A: () => n });
            let n = (0, r(38272).A)();
        },
        66900: (e, t, r) => {
            r.d(t, { config: () => d });
            var n = r(49137),
                o = r(33878),
                a = r(75299),
                i = r(47521),
                s = r(23932),
                c = r(71945),
                l = r(31678),
                u = r(49124);
            let d = (e) => {
                let t = (0, l.w)('https://api.music.yandex.'.concat(i.B), e);
                return (0, n.A)((0, s.config)(), {
                    resources: { musicExternalApi: { prefixUrl: t } },
                    player: { overembed: !1, secretKey: (0, a.E)(), externalDomain: 'next.music.yandex.ru', prefixUrl: t },
                    blackbox: { ...((0, o.toBoolean)(u.env.LOCAL_PROD_BUILD) ? { host: 'http://local-music-dev.vla.yp-c.yandex.net/bbm/blackbox' } : {}), enabled: !0 },
                    tvm: { enabled: (0, o.toBoolean)(u.env.LOCAL_PROD_BUILD) },
                    oldWebHost: 'music.yandex.'.concat(i.B),
                    afisha: { clientId: (0, c.t)(), host: 'https://widget.afisha.yandex.ru' },
                    payment: { environment: 'production' },
                    mocks: { enabled: !1 },
                });
            };
        },
        66910: (e, t, r) => {
            r.d(t, { A: () => u });
            var n = r(53781),
                o = r(97946),
                a = r(65895),
                i = Object.prototype,
                s = Function.prototype.toString,
                c = i.hasOwnProperty,
                l = s.call(Object);
            let u = function (e) {
                if (!(0, a.A)(e) || '[object Object]' != (0, n.A)(e)) return !1;
                var t = (0, o.A)(e);
                if (null === t) return !0;
                var r = c.call(t, 'constructor') && t.constructor;
                return 'function' == typeof r && r instanceof r && s.call(r) == l;
            };
        },
        71945: (e, t, r) => {
            r.d(t, { t: () => s });
            var n = r(84603),
                o = r(55520),
                a = r(1322);
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
        79411: (e, t, r) => {
            r.d(t, { A: () => n });
            let n = function (e) {
                return function () {
                    return e;
                };
            };
        },
        81381: (e, t, r) => {
            r.d(t, { A: () => P });
            var n = r(79095),
                o = r(92429),
                a = r(89701);
            let i = function (e, t, r) {
                ((void 0 === r || (0, a.A)(e[t], r)) && (void 0 !== r || t in e)) || (0, o.A)(e, t, r);
            };
            var s = r(65924),
                c = r(183),
                l = r(79172),
                u = r(10842),
                d = r(45540),
                f = r(60336),
                p = r(74044),
                v = r(51704),
                A = r(23365),
                m = r(98519),
                y = r(78136),
                b = r(66910),
                h = r(74932);
            let E = function (e, t) {
                if (('constructor' !== t || 'function' != typeof e[t]) && '__proto__' != t) return e[t];
            };
            var _ = r(50329);
            let S = function (e, t, r, n, o, a, s) {
                var S = E(e, r),
                    g = E(t, r),
                    P = s.get(g);
                if (P) return void i(e, r, P);
                var T = a ? a(S, g, r + '', e, t, s) : void 0,
                    U = void 0 === T;
                if (U) {
                    var x = (0, p.A)(g),
                        R = !x && (0, A.A)(g),
                        O = !x && !R && (0, h.A)(g);
                    (T = g),
                        x || R || O
                            ? (0, p.A)(S)
                                ? (T = S)
                                : (0, v.A)(S)
                                  ? (T = (0, u.A)(S))
                                  : R
                                    ? ((U = !1), (T = (0, c.A)(g, !0)))
                                    : O
                                      ? ((U = !1), (T = (0, l.A)(g, !0)))
                                      : (T = [])
                            : (0, b.A)(g) || (0, f.A)(g)
                              ? ((T = S), (0, f.A)(S) ? (T = (0, _.A)(S)) : (!(0, y.A)(S) || (0, m.A)(S)) && (T = (0, d.A)(g)))
                              : (U = !1);
                }
                U && (s.set(g, T), o(T, g, n, a, s), s.delete(g)), i(e, r, T);
            };
            var g = r(10166);
            let P = function e(t, r, o, a, c) {
                t !== r &&
                    (0, s.A)(
                        r,
                        function (s, l) {
                            if ((c || (c = new n.A()), (0, y.A)(s))) S(t, r, l, o, e, a, c);
                            else {
                                var u = a ? a(E(t, l), s, l + '', t, r, c) : void 0;
                                void 0 === u && (u = s), i(t, l, u);
                            }
                        },
                        g.A,
                    );
            };
        },
        89086: (e, t, r) => {},
        93479: (e, t, r) => {
            r.d(t, { A: () => s });
            var n = r(79411),
                o = r(5478),
                a = r(40525),
                i = o.A
                    ? function (e, t) {
                          return (0, o.A)(e, 'toString', { configurable: !0, enumerable: !1, value: (0, n.A)(t), writable: !0 });
                      }
                    : a.A;
            let s = (0, r(65726).A)(i);
        },
    },
]);
