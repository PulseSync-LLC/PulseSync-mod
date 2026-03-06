'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2580, 3273, 8357, 9399],
    {
        342: (e, t, r) => {
            r.d(t, { A: () => a });
            var n = r(3210),
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
        1630: (e, t, r) => {
            r.d(t, { A: () => n });
            let n = (0, r(92938).A)();
        },
        3210: (e, t, r) => {
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
        9710: (e, t, r) => {
            r.d(t, { A: () => s });
            var n = r(83745),
                o = r(7812),
                a = r(27115),
                i = o.A
                    ? function (e, t) {
                          return (0, o.A)(e, 'toString', { configurable: !0, enumerable: !1, value: (0, n.A)(t), writable: !0 });
                      }
                    : a.A;
            let s = (0, r(38928).A)(i);
        },
        11260: (e, t, r) => {
            r.d(t, { A: () => u });
            var n = r(11828),
                o = r(55796),
                a = r(21793),
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
        22711: (e, t, r) => {
            r.d(t, { A: () => o });
            var n = r(77480);
            let o = (0, r(28736).A)(function (e, t, r) {
                (0, n.A)(e, t, r);
            });
        },
        27115: (e, t, r) => {
            r.d(t, { A: () => n });
            let n = function (e) {
                return e;
            };
        },
        28736: (e, t, r) => {
            r.d(t, { A: () => a });
            var n = r(36021),
                o = r(40675);
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
        36021: (e, t, r) => {
            r.d(t, { A: () => i });
            var n = r(27115),
                o = r(342),
                a = r(9710);
            let i = function (e, t) {
                return (0, a.A)((0, o.A)(e, t, n.A), e + '');
            };
        },
        38928: (e, t, r) => {
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
        39399: (e, t, r) => {
            r.d(t, { t: () => s });
            var n = r(6493),
                o = r(71942),
                a = r(13132);
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
        40675: (e, t, r) => {
            r.d(t, { A: () => s });
            var n = r(6575),
                o = r(43713),
                a = r(59994),
                i = r(71270);
            let s = function (e, t, r) {
                if (!(0, i.A)(r)) return !1;
                var s = typeof t;
                return ('number' == s ? !!((0, o.A)(r) && (0, a.A)(t, r.length)) : 'string' == s && t in r) && (0, n.A)(r[t], e);
            };
        },
        52580: (e, t, r) => {},
        77480: (e, t, r) => {
            r.d(t, { A: () => P });
            var n = r(75856),
                o = r(9959),
                a = r(6575);
            let i = function (e, t, r) {
                ((void 0 === r || (0, a.A)(e[t], r)) && (void 0 !== r || t in e)) || (0, o.A)(e, t, r);
            };
            var s = r(1630),
                c = r(12841),
                l = r(53222),
                u = r(84296),
                d = r(67450),
                p = r(63339),
                f = r(24422),
                A = r(89326),
                v = r(88947),
                m = r(15993),
                y = r(71270),
                h = r(11260),
                b = r(6808);
            let E = function (e, t) {
                if (('constructor' !== t || 'function' != typeof e[t]) && '__proto__' != t) return e[t];
            };
            var _ = r(98799);
            let g = function (e, t, r, n, o, a, s) {
                var g = E(e, r),
                    S = E(t, r),
                    P = s.get(S);
                if (P) return void i(e, r, P);
                var x = a ? a(g, S, r + '', e, t, s) : void 0,
                    C = void 0 === x;
                if (C) {
                    var U = (0, f.A)(S),
                        k = !U && (0, v.A)(S),
                        L = !U && !k && (0, b.A)(S);
                    (x = S),
                        U || k || L
                            ? (0, f.A)(g)
                                ? (x = g)
                                : (0, A.A)(g)
                                  ? (x = (0, u.A)(g))
                                  : k
                                    ? ((C = !1), (x = (0, c.A)(S, !0)))
                                    : L
                                      ? ((C = !1), (x = (0, l.A)(S, !0)))
                                      : (x = [])
                            : (0, h.A)(S) || (0, p.A)(S)
                              ? ((x = g), (0, p.A)(g) ? (x = (0, _.A)(g)) : (!(0, y.A)(g) || (0, m.A)(g)) && (x = (0, d.A)(S)))
                              : (C = !1);
                }
                C && (s.set(S, x), o(x, S, n, a, s), s.delete(S)), i(e, r, x);
            };
            var S = r(47931);
            let P = function e(t, r, o, a, c) {
                t !== r &&
                    (0, s.A)(
                        r,
                        function (s, l) {
                            if ((c || (c = new n.A()), (0, y.A)(s))) g(t, r, l, o, e, a, c);
                            else {
                                var u = a ? a(E(t, l), s, l + '', t, r, c) : void 0;
                                void 0 === u && (u = s), i(t, l, u);
                            }
                        },
                        S.A,
                    );
            };
        },
        80738: (e, t, r) => {
            r.d(t, { config: () => c });
            var n = r(49544),
                o = r(8171),
                a = r(78171),
                i = r(49775);
            r(52580);
            var s = r(49124);
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
                    redirects: { KZ: { fromTLD: [n.r.RU], toTLD: n.r.KZ }, UZ: { fromTLD: [n.r.RU], toTLD: n.r.UZ } },
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
        83273: (e, t, r) => {
            r.d(t, { config: () => u });
            var n = r(22711),
                o = r(15209),
                a = r(22001),
                i = r(78171),
                s = r(80738),
                c = r(39399),
                l = r(49124);
            let u = () => {
                let e = 'https://api.music.qa.yandex.'.concat(i.B);
                return (
                    (0, o.toBoolean)(!1) && !(0, o.toBoolean)(l.env.LOCAL_PROD_BUILD) && (e = 'http://music-backend-music-api-gateway.envoy.localhost:9080'),
                    (0, n.A)((0, s.config)(), {
                        resources: { musicExternalApi: { prefixUrl: e } },
                        player: { overembed: !1, secretKey: (0, a.E)(), externalDomain: 'localhost.music.yandex.ru', prefixUrl: e },
                        passportCredentials: { host: 'https://passport.yandex.'.concat(i.B), origin: 'music' },
                        blackbox: {
                            ...((0, o.toBoolean)(l.env.LOCAL_PROD_BUILD) ? { host: 'http://local-music-dev.vla.yp-c.yandex.net/bbm/blackbox' } : {}),
                            enabled: !0,
                        },
                        tvm: { enabled: (0, o.toBoolean)(l.env.LOCAL_PROD_BUILD) },
                        oldWebHost: 'music.qa.yandex.'.concat(i.B),
                        afisha: { clientId: (0, c.t)(), host: 'https://widget.afisha.yandex.ru' },
                        iframe: { entityBaseUrl: 'https://music.qa.yandex.'.concat(i.B) },
                        mocks: { enabled: !1 },
                    })
                );
            };
        },
        83745: (e, t, r) => {
            r.d(t, { A: () => n });
            let n = function (e) {
                return function () {
                    return e;
                };
            };
        },
        89326: (e, t, r) => {
            r.d(t, { A: () => a });
            var n = r(43713),
                o = r(21793);
            let a = function (e) {
                return (0, o.A)(e) && (0, n.A)(e);
            };
        },
        92938: (e, t, r) => {
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
        98799: (e, t, r) => {
            r.d(t, { A: () => a });
            var n = r(41620),
                o = r(47931);
            let a = function (e) {
                return (0, n.A)(e, (0, o.A)(e));
            };
        },
    },
]);
