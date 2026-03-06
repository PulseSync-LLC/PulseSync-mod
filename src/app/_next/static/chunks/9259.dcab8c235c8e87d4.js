'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2580, 8357, 9259, 9399],
    {
        342: (e, t, n) => {
            n.d(t, { A: () => a });
            var r = n(3210),
                o = Math.max;
            let a = function (e, t, n) {
                return (
                    (t = o(void 0 === t ? e.length - 1 : t, 0)),
                    function () {
                        for (var a = arguments, i = -1, c = o(a.length - t, 0), s = Array(c); ++i < c; ) s[i] = a[t + i];
                        i = -1;
                        for (var l = Array(t + 1); ++i < t; ) l[i] = a[i];
                        return (l[t] = n(s)), (0, r.A)(e, this, l);
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
        9259: (e, t, n) => {
            n.d(t, { config: () => u });
            var r = n(22711),
                o = n(15209),
                a = n(22001),
                i = n(78171),
                c = n(80738),
                s = n(39399),
                l = n(49124);
            let u = () => {
                let e = 'https://api.music.qa.yandex.'.concat(i.B);
                return (
                    (0, o.toBoolean)(!1) && !(0, o.toBoolean)(l.env.LOCAL_PROD_BUILD) && (e = 'http://music-backend-music-api-gateway.envoy.localhost:9080'),
                    (0, r.A)((0, c.config)(), {
                        resources: { musicExternalApi: { prefixUrl: e } },
                        player: { overembed: !1, secretKey: (0, a.E)(), externalDomain: 'next.qa.music.yandex.ru', prefixUrl: e },
                        blackbox: {
                            ...((0, o.toBoolean)(l.env.LOCAL_PROD_BUILD) ? { host: 'http://local-music-dev.vla.yp-c.yandex.net/bbm/blackbox' } : {}),
                            enabled: !0,
                        },
                        tvm: { enabled: (0, o.toBoolean)(l.env.LOCAL_PROD_BUILD) },
                        oldWebHost: 'music.qa.yandex.'.concat(i.B),
                        afisha: { clientId: (0, s.t)(), host: 'https://widget.afisha.tst.yandex.ru' },
                        iframe: { entityBaseUrl: 'https://music.qa.yandex.'.concat(i.B) },
                        mocks: { enabled: !1, urlCapturePattern: l.env.NEXT_PUBLIC_MOCK_URL_CAPTURE_PATTERN || ''.concat(e, '/*') },
                    })
                );
            };
        },
        9710: (e, t, n) => {
            n.d(t, { A: () => c });
            var r = n(83745),
                o = n(7812),
                a = n(27115),
                i = o.A
                    ? function (e, t) {
                          return (0, o.A)(e, 'toString', { configurable: !0, enumerable: !1, value: (0, r.A)(t), writable: !0 });
                      }
                    : a.A;
            let c = (0, n(38928).A)(i);
        },
        11260: (e, t, n) => {
            n.d(t, { A: () => u });
            var r = n(11828),
                o = n(55796),
                a = n(21793),
                i = Object.prototype,
                c = Function.prototype.toString,
                s = i.hasOwnProperty,
                l = c.call(Object);
            let u = function (e) {
                if (!(0, a.A)(e) || '[object Object]' != (0, r.A)(e)) return !1;
                var t = (0, o.A)(e);
                if (null === t) return !0;
                var n = s.call(t, 'constructor') && t.constructor;
                return 'function' == typeof n && n instanceof n && c.call(n) == l;
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
                        c = a > 2 ? n[2] : void 0;
                    for (
                        i = e.length > 3 && 'function' == typeof i ? (a--, i) : void 0,
                            c && (0, o.A)(n[0], n[1], c) && ((i = a < 3 ? void 0 : i), (a = 1)),
                            t = Object(t);
                        ++r < a;

                    ) {
                        var s = n[r];
                        s && e(t, s, r, i);
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
            n.d(t, { t: () => c });
            var r = n(6493),
                o = n(71942),
                a = n(13132);
            let i = {
                    WINDOWS: '0d8ab1a6-1667-42cb-a98f-2fe7eff4b137',
                    MACOS: '05c45ae8-b869-4ec1-848c-4b314fbadc17',
                    LINUX: 'd2bcdb71-90ac-493b-b68f-024321954a5d',
                    WEB: 'b200fd55-5a52-4fa2-b5db-d163e986a61d',
                },
                c = () => {
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
            n.d(t, { A: () => c });
            var r = n(6575),
                o = n(43713),
                a = n(59994),
                i = n(71270);
            let c = function (e, t, n) {
                if (!(0, i.A)(n)) return !1;
                var c = typeof t;
                return ('number' == c ? !!((0, o.A)(n) && (0, a.A)(t, n.length)) : 'string' == c && t in n) && (0, r.A)(n[t], e);
            };
        },
        52580: (e, t, n) => {},
        77480: (e, t, n) => {
            n.d(t, { A: () => S });
            var r = n(75856),
                o = n(9959),
                a = n(6575);
            let i = function (e, t, n) {
                ((void 0 === n || (0, a.A)(e[t], n)) && (void 0 !== n || t in e)) || (0, o.A)(e, t, n);
            };
            var c = n(1630),
                s = n(12841),
                l = n(53222),
                u = n(84296),
                d = n(67450),
                f = n(63339),
                p = n(24422),
                A = n(89326),
                v = n(88947),
                m = n(15993),
                y = n(71270),
                h = n(11260),
                b = n(6808);
            let _ = function (e, t) {
                if (('constructor' !== t || 'function' != typeof e[t]) && '__proto__' != t) return e[t];
            };
            var E = n(98799);
            let P = function (e, t, n, r, o, a, c) {
                var P = _(e, n),
                    g = _(t, n),
                    S = c.get(g);
                if (S) return void i(e, n, S);
                var C = a ? a(P, g, n + '', e, t, c) : void 0,
                    U = void 0 === C;
                if (U) {
                    var x = (0, p.A)(g),
                        T = !x && (0, v.A)(g),
                        L = !x && !T && (0, b.A)(g);
                    (C = g),
                        x || T || L
                            ? (0, p.A)(P)
                                ? (C = P)
                                : (0, A.A)(P)
                                  ? (C = (0, u.A)(P))
                                  : T
                                    ? ((U = !1), (C = (0, s.A)(g, !0)))
                                    : L
                                      ? ((U = !1), (C = (0, l.A)(g, !0)))
                                      : (C = [])
                            : (0, h.A)(g) || (0, f.A)(g)
                              ? ((C = P), (0, f.A)(P) ? (C = (0, E.A)(P)) : (!(0, y.A)(P) || (0, m.A)(P)) && (C = (0, d.A)(g)))
                              : (U = !1);
                }
                U && (c.set(g, C), o(C, g, r, a, c), c.delete(g)), i(e, n, C);
            };
            var g = n(47931);
            let S = function e(t, n, o, a, s) {
                t !== n &&
                    (0, c.A)(
                        n,
                        function (c, l) {
                            if ((s || (s = new r.A()), (0, y.A)(c))) P(t, n, l, o, e, a, s);
                            else {
                                var u = a ? a(_(t, l), c, l + '', t, n, s) : void 0;
                                void 0 === u && (u = c), i(t, l, u);
                            }
                        },
                        g.A,
                    );
            };
        },
        80738: (e, t, n) => {
            n.d(t, { config: () => s });
            var r = n(49544),
                o = n(8171),
                a = n(78171),
                i = n(49775);
            n(52580);
            var c = n(49124);
            let s = () => {
                var e;
                return {
                    logger: {
                        uaDisabled: !!c.env.SERVER_UNIFIED_AGENT_DISABLED,
                        uaServerAddress: null != (e = c.env.SERVER_UNIFIED_AGENT_ADDRESS) ? e : 'http://localhost:12344',
                        uaProtoPath: c.env.UA_PROTO_PATH || '../../packages/unified-agent/build/proto/unified_agent.proto',
                        errorBooster: {
                            ...{ project: 'music.frontend.desktop', platform: 'desktop' },
                            page: 'window.location.pathname',
                            version: c.env.APP_VERSION || '',
                            environment: 'production',
                            unhandledRejection: !0,
                            uncaughtException: !0,
                            resourceFails: !0,
                        },
                    },
                    oauthCredentials: { host: 'https://oauth.yandex.'.concat(a.B), clientId: '97fe03033fa34407ac9bcf91d5afed5b' },
                    tvm: { tvmtoolAuthToken: c.env.TVMTOOL_LOCAL_AUTHTOKEN, self: 'music_test', destinations: ['blackbox'], host: 'http://localhost:8001', enabled: !1 },
                    rumSettings: {
                        ...{ rumId: 'ru.music.frontend.desktop', project: 'music.frontend.desktop', service: 'frontend-desktop', platform: 'desktop' },
                        page: 'window.location.pathname',
                        heroElement: 'body',
                        version: c.env.APP_VERSION || '',
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
                    acqOffers: { environment: 'production', brand: 'YANDEX', service: 'music', appVersion: c.env.APP_VERSION },
                    rsc: { useCache: !0 },
                    mocks: {
                        enabled: !1,
                        mocksProviderUrl: c.env.NEXT_PUBLIC_MOCKS_PROVIDER_URL || 'https://s3.mds.yandex.net/music-frontend-mocks/',
                        urlCapturePattern: c.env.NEXT_PUBLIC_MOCK_URL_CAPTURE_PATTERN || ''.concat('https://api.music.yandex.'.concat(a.B, '/*')),
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
                    for (var o = -1, a = Object(t), i = r(t), c = i.length; c--; ) {
                        var s = i[e ? c : ++o];
                        if (!1 === n(a[s], s, a)) break;
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
