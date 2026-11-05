(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [900],
    {
        4685: (e, t, r) => {
            'use strict';
            (r.d(t, { R: () => s }), r(30282));
            var n = r(12149),
                i = r(44702),
                o = r(55956);
            let a = { WINDOWS: '95673843', MACOS: '95673848', LINUX: '98548790', WEB: '95673834' },
                s = () => {
                    switch ((0, i.$)((0, n.u)())) {
                        case o.V.WINDOWS:
                            return a.WINDOWS;
                        case o.V.MACOS:
                            return a.MACOS;
                        case o.V.LINUX:
                            return a.LINUX;
                    }
                    return a.WEB;
                };
        },
        8840: (e, t, r) => {
            'use strict';
            r.d(t, { BL: () => d, Gv: () => l, L5: () => u });
            var n,
                i = r(53548),
                o = {
                    597: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.useIntersectionObserver = t.createIntersectionObserver = t.getElementNameByDataAttribute = t.isInViewportNow = t.defaultOptions = void 0));
                        let n = r(810),
                            { innerWidth: i = 0, innerHeight: o = 0 } = window;
                        function a(e) {
                            let { top: t, right: r, bottom: n, left: a } = e.getBoundingClientRect();
                            return ((t >= 0 && t <= o) || (n >= 0 && n <= o)) && ((a >= 0 && a <= i) || (r >= 0 && r <= i));
                        }
                        function s(e) {
                            var t, r;
                            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'data-intersection-property-id';
                            return null != (r = null == e || null == (t = e.getAttribute) ? void 0 : t.call(e, n)) ? r : e.attributes[0];
                        }
                        function l(e, t) {
                            let r = new IntersectionObserver((t) => {
                                t.forEach((t) => {
                                    e(t, r);
                                });
                            }, t);
                            return r;
                        }
                        ((t.defaultOptions = { threshold: 0, preflightCheck: !0 }),
                            (t.isInViewportNow = a),
                            (t.getElementNameByDataAttribute = s),
                            (t.createIntersectionObserver = l),
                            (t.useIntersectionObserver = function (e, r, i) {
                                let [{ freezeOnceVisible: o, preflightCheck: u, ...d }, c = !1] =
                                        'boolean' == typeof r || void 0 === r ? [t.defaultOptions, r] : [{ ...t.defaultOptions, ...r }, i],
                                    [f, p] = (0, n.useState)({}),
                                    v = (0, n.useRef)(new Set()),
                                    g = (0, n.useMemo)(
                                        () =>
                                            c
                                                ? null
                                                : l((e) => {
                                                      let t = s(e.target);
                                                      if (t && g) {
                                                          if (v.current.has(t)) return;
                                                          (p((r) => ({ ...r, [t]: { isIntersecting: e.isIntersecting } })),
                                                              o && e.isIntersecting && (v.current.add(t), g.unobserve(e.target)));
                                                      }
                                                  }, d),
                                        [c],
                                    );
                                return (
                                    (0, n.useLayoutEffect)(
                                        () => (
                                            g &&
                                                !c &&
                                                e.forEach((e) => {
                                                    if (e.current) {
                                                        let t = !1;
                                                        if (u && (t = a(e.current))) {
                                                            let t = s(e.current);
                                                            p((e) => ({ ...e, [t]: { isIntersecting: !0 } }));
                                                        }
                                                        t || g.observe(e.current);
                                                    }
                                                }),
                                            () => {
                                                g && g.disconnect();
                                            }
                                        ),
                                        [c, g, e.length],
                                    ),
                                    f
                                );
                            }));
                    },
                    810: (e) => {
                        e.exports = n || (n = r.t(i, 2));
                    },
                },
                a = {},
                s = (function e(t) {
                    var r = a[t];
                    if (void 0 !== r) return r.exports;
                    var n = (a[t] = { exports: {} });
                    return (o[t](n, n.exports, e), n.exports);
                })(597);
            s.__esModule;
            var l = s.createIntersectionObserver;
            s.defaultOptions;
            var u = s.getElementNameByDataAttribute;
            s.isInViewportNow;
            var d = s.useIntersectionObserver;
        },
        12149: (e, t, r) => {
            'use strict';
            function n() {
                var e;
                return null == (e = window.musicDesktop) ? void 0 : e.runtime.platform;
            }
            r.d(t, { u: () => n });
        },
        15253: (e, t, r) => {
            'use strict';
            r.d(t, { c: () => i });
            var n = r(42824),
                i = (function (e) {
                    return (
                        (e.Theme = 'theme'),
                        (e.AllowAnalyticsLogs = 'AllowAnalyticsLogs'),
                        (e.NavbarCollapsed = 'navbarCollapsed'),
                        (e.SessionHistoryState = 'sessionHistoryState'),
                        (e.SessionId = 'Session_id'),
                        (e.YmPlayerRepeatMode = 'ymPlayerRepeatMode'),
                        (e.YmPlayerVolume = 'ymPlayerVolume'),
                        (e.YmPlayerPrevVolume = 'ymPlayerPrevVolume'),
                        (e.YmPlayerShuffle = 'ymPlayerShuffle'),
                        (e.YmPlayerQuality = 'ymPlayerQuality'),
                        (e.YmUid = 'ymUid'),
                        (e.YandexLogin = 'yandex_login'),
                        (e.YandexUid = 'yandexuid'),
                        (e.Oauth = 'oauth'),
                        (e.OauthState = 'oauthState'),
                        (e.ForcedLoginAttempt = 'forcedLoginAttempt'),
                        (e.ArtistDonationButtonOnbordingShowed = 'ArtistDonationButtonOnbordingShowed'),
                        (e.TrailerButtonOnbordingShowed = 'TrailerButtonOnbordingShowed'),
                        (e.ConcertsTabOnboardingShowed = 'ConcertsTabOnboardingShowed'),
                        (e[(e.SavedUserLanguage = n.s)] = 'SavedUserLanguage'),
                        (e.ExEx = 'ExEx'),
                        (e.EqualizerConfig = 'EqualizerConfig'),
                        (e.EnableMetricsPluginDebugMode = 'EnableMetricsPluginDebugMode'),
                        (e.EnableYnisonMetricsDebugMode = 'EnableYnisonMetricsDebugMode'),
                        (e.OverwrittenExperiments = 'overwrittenExperiments'),
                        (e.Offer = 'offer'),
                        (e.OfflineMode = 'offlineMode'),
                        (e.NavbarDownloadBarIsHidden = 'navbarDownloadBarIsHidden'),
                        (e.OfflineDegradation = 'offlineDegradation'),
                        (e.DesktopPaywall = 'desktopPaywall'),
                        (e.LiteVersionMode = 'liteVersionMode'),
                        (e.DownloadMobileApp = 'downloadMobileApp'),
                        (e.MainPageEntryPointPlayedAnimations = 'mainPageEntryPointPlayedAnimations'),
                        (e.HideDeeplinkAndOnelink = 'hideDeeplinkAndOnelink'),
                        (e.YnisonDeviceId = 'ynisonDeviceId'),
                        (e.CrossFadeMode = 'crossFadeMode'),
                        (e.CustomPlayerThumbConfig = 'CustomPlayerThumbConfig'),
                        (e.BuySubscriptionParams = 'buySubscriptionParams'),
                        (e.EnableCrossfadeDebugMode = 'EnableCrossfadeDebugMode'),
                        (e.EnableBurstDebounceDebugMode = 'EnableBurstDebounceDebugMode'),
                        (e.ConcertLocation = 'concertLocation'),
                        e
                    );
                })({});
        },
        19994: (e, t, r) => {
            'use strict';
            r.d(t, { W: () => s });
            var n = {
                    5881: (e, t, r) => {
                        function n() {
                            for (var e, t, r = 0, n = ''; r < arguments.length;)
                                (e = arguments[r++]) &&
                                    (t = (function e(t) {
                                        var r,
                                            n,
                                            i = '';
                                        if ('string' == typeof t || 'number' == typeof t) i += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (r = 0; r < t.length; r++) t[r] && (n = e(t[r])) && (i && (i += ' '), (i += n));
                                            else for (r in t) t[r] && (i && (i += ' '), (i += r));
                                        return i;
                                    })(e)) &&
                                    (n && (n += ' '), (n += t));
                            return n;
                        }
                        (r.r(t), r.d(t, { clsx: () => n, default: () => i }));
                        let i = n;
                    },
                    7998: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => n }));
                        let n = {
                            root: 'JD1RZC0EtdwegdYvGm6W',
                            root_active: 'K4G7ASZk9TWzXzAWMZKF',
                            'gradient-horizontal': 'GTZfWL5aq48rDurR2xQI',
                            root_radius_xs: 'PyJ4CgcZYC2CpTwW_q0e',
                            root_radius_s: 'Ig8cmdGxncIa4g0mjlzw',
                            root_radius_m: 'lJbeO5iovzBwUTpu7hFA',
                            root_radius_l: 'Gc3Wyk8uCohdTadkf7NR',
                            root_radius_xl: 'iKi9AOB1TOi3ZWzmbCkq',
                            root_radius_xxl: 'nYTL841hItMUZhvJq_ob',
                            root_radius_xxxl: 'LXGqiB6_V45plhG242mA',
                            root_radius_round: 'psTzstoF82tSOz1JHMB3',
                        };
                    },
                    9097: (e, t) => {
                        var r = Symbol.for('react.transitional.element');
                        function n(e, t, n) {
                            var i = null;
                            if ((void 0 !== n && (i = '' + n), void 0 !== t.key && (i = '' + t.key), 'key' in t))
                                for (var o in ((n = {}), t)) 'key' !== o && (n[o] = t[o]);
                            else n = t;
                            return { $$typeof: r, type: e, key: i, ref: void 0 !== (t = n.ref) ? t : null, props: n };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = n), (t.jsxs = n));
                    },
                    4377: (e, t, r) => {
                        e.exports = r(9097);
                    },
                    7141: function (e, t, r) {
                        var n =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Shimmer = void 0));
                        let i = r(4377),
                            o = r(5881),
                            a = n(r(7998));
                        t.Shimmer = function (e) {
                            let { isActive: t, className: r, radius: n = 'm', width: s, height: l, children: u, ...d } = e,
                                c = {};
                            return (
                                void 0 !== s && (c.width = 'string' == typeof s ? s : ''.concat(s, 'px')),
                                void 0 !== l && (c.height = 'string' == typeof l ? l : ''.concat(l, 'px')),
                                (0, i.jsx)('div', {
                                    className: (0, o.clsx)(a.default.root, a.default['root_radius_'.concat(n)], { [a.default.root_active]: t }, r),
                                    'aria-live': t ? 'polite' : 'off',
                                    'aria-busy': t,
                                    ...d,
                                    style: c,
                                    children: u,
                                })
                            );
                        };
                    },
                },
                i = {};
            function o(e) {
                var t = i[e];
                if (void 0 !== t) return t.exports;
                var r = (i[e] = { exports: {} });
                return (n[e].call(r.exports, r, r.exports, o), r.exports);
            }
            ((o.d = (e, t) => {
                for (var r in t) o.o(t, r) && !o.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
            }),
                (o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (o.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var a = {};
            (() => {
                (Object.defineProperty(a, 'X', { value: !0 }), (a.q = void 0));
                var e = o(7141);
                Object.defineProperty(a, 'q', {
                    enumerable: !0,
                    get: function () {
                        return e.Shimmer;
                    },
                });
            })();
            var s = a.q;
            a.X;
        },
        23703: (e, t, r) => {
            'use strict';
            r.d(t, { q: () => f });
            var n = r(98283),
                i = r(53548),
                o = r(30688),
                a = r(4086),
                s = r(41928),
                l = r(51611),
                u = r(72288),
                d = r(55399);
            let c = null,
                f = function () {
                    var e;
                    let t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                        r = (0, s.N)(),
                        { payment: f } = r.get(a.V4),
                        { environment: p } = f,
                        { user: v, location: g } = (0, u.g)(),
                        { language: _ } = (0, l.h)(),
                        { widgetServiceName: m } = (0, o.j)(),
                        { request_id: b } = null != (e = r.get(a.Zi).getStore()) ? e : {},
                        { geoRegionIso: O, userSessionRegionIso: S } = v.account.data;
                    return {
                        pwTools: (0, i.useMemo)(() => {
                            if (!t || 'undefined' == typeof document) return null;
                            if (c) return c;
                            let { PLATFORM: e, MODE: r, AUTH_METHOD: i } = d.Y,
                                o = void 0 !== v.puid ? String(v.puid) : null;
                            return (c = n.pp.from({
                                platform: e,
                                widgetServiceName: m,
                                mode: r,
                                authMethod: i,
                                lang: _,
                                environment: p,
                                puid: o,
                                serviceSessionId: null,
                                etld: 'yandex.'.concat(g.tld),
                                preloadManager: !0,
                                rumOptions: { requestId: b, additional: { geoRegionIso: O, userSessionRegionIso: S } },
                            }));
                        }, [_, p, v.puid, g.tld, t, b, O, S, m]),
                    };
                };
        },
        26e3: (e, t, r) => {
            'use strict';
            r.d(t, { l: () => n });
            var n = (function (e) {
                return (
                    (e.MUSIC_PAYWALL_SCREEN = 'music_paywall_screen'),
                    (e.MUSIC_LANDING_SCREEN_PAY = 'music_landing_screen_pay'),
                    (e.HOME_SCREEN = 'home_screen'),
                    (e.SIDEBAR = 'sidebar'),
                    (e.CRACKDOWN_SCREEN = 'crackdown_screen'),
                    (e.MOBILE_POPUP = 'mobile_popup'),
                    (e.NO_VALUE = 'NO_VALUE'),
                    (e.MUSIC_CPA_ALBUM = 'music_cpa_album'),
                    (e.HEADER = 'music_header'),
                    (e.MUSIC_DEEPLINK_SCREEN = 'music_deeplink_screen'),
                    (e.ARTIST_PAGE = 'artist_page'),
                    (e.ALBUM_PAGE = 'album_page'),
                    (e.PLAYLIST_PAGE = 'playlist_page'),
                    (e.LABEL_PAGE = 'label_page'),
                    (e.TRACK_PAGE = 'track_page'),
                    (e.ENTITY_HEADER = 'entity_header'),
                    e
                );
            })({});
        },
        28416: (e, t, r) => {
            'use strict';
            r.d(t, { x: () => s });
            var n = r(53548),
                i = r(26e3),
                o = r(93020);
            let a = { page: i.l.NO_VALUE, places: void 0, shouldFetchOffers: !0, isContextDefined: !1, widgetServiceName: o.z.MUSIC },
                s = (0, n.createContext)(a);
        },
        30688: (e, t, r) => {
            'use strict';
            r.d(t, { j: () => a });
            var n = r(53548),
                i = r(28416),
                o = r(26e3);
            function a() {
                let e = (0, n.useContext)(i.x);
                return (0, n.useMemo)(() => ({ ...e, isContextDefined: e.page !== o.l.NO_VALUE }), [e]);
            }
        },
        31320: (e, t, r) => {
            'use strict';
            r.d(t, { N: () => n });
            var n = (function (e) {
                return ((e.IntroPlan = 'IntroPlan'), (e.IntroUntilPlan = 'IntroUntilPlan'), (e.TrialPlan = 'TrialPlan'), (e.TrialUntilPlan = 'TrialUntilPlan'), e);
            })({});
        },
        40210: (e, t, r) => {
            'use strict';
            r.d(t, { R: () => n });
            var n = (function (e) {
                return (
                    (e.MY_WAVE = 'my_wave'),
                    (e.BLOCK_1 = 'block_1'),
                    (e.BLOCK_2 = 'block_2'),
                    (e.TOP_BUTTON = 'top_button'),
                    (e.BOTTOM_BUTTON = 'bottom_button'),
                    (e.SIDEBAR_BANNER = 'sidebar_banner'),
                    (e.BANNER_BUTTON = 'banner_button'),
                    (e.BUTTON = 'button'),
                    e
                );
            })({});
        },
        44450: (e, t, r) => {
            'use strict';
            r.d(t, { r: () => l });
            var n = r(88800),
                i = r(84961),
                o = r(53548),
                a = r(28416),
                s = r(93020);
            let l = (0, i.PA)((e) => {
                let { page: t, places: r, shouldFetchOffers: i = !0, widgetServiceName: l = s.z.MUSIC, children: u } = e,
                    d = (0, o.useRef)(r),
                    c = (0, o.useMemo)(() => ({ page: t, places: d.current, shouldFetchOffers: i, widgetServiceName: l }), [t, i, l]);
                return (0, n.jsx)(a.x.Provider, { value: c, children: u });
            });
        },
        44702: (e, t, r) => {
            'use strict';
            r.d(t, { $: () => i });
            var n = r(55956);
            let i = (e) => {
                switch (e) {
                    case 'win32':
                        return n.V.WINDOWS;
                    case 'darwin':
                        return n.V.MACOS;
                    case 'linux':
                        return n.V.LINUX;
                }
                return null;
            };
        },
        46777: (e, t, r) => {
            'use strict';
            r.d(t, { J: () => a });
            var n = r(55482),
                i = r(53548),
                o = r(46422);
            let a = (e) => {
                let t = (0, o.W)(),
                    r = (0, i.useMemo)(
                        () =>
                            (0, n.A)(() => {
                                if (e && !t.canBack) return void t.replaceState({ href: e });
                                null == t || t.back();
                            }, 200),
                        [t, e],
                    ),
                    a = (0, i.useMemo)(
                        () =>
                            (0, n.A)(() => {
                                null == t || t.forward();
                            }, 200),
                        [t],
                    );
                return { canBack: !!e || t.canBack, canForward: t.canForward, moveBack: r, moveForward: a };
            };
        },
        50320: (e) => {
            e.exports = { root: 'NavigationControls_root__V2A3_' };
        },
        50408: (e, t, r) => {
            'use strict';
            r.d(t, { d: () => l });
            var n,
                i = r(53548),
                o = {
                    810: (e) => {
                        e.exports = n || (n = r.t(i, 2));
                    },
                },
                a = {},
                s = {};
            ((() => {
                (Object.defineProperty(s, '__esModule', { value: !0 }), (s.useForceUpdateRef = void 0));
                let e = (function e(t) {
                    var r = a[t];
                    if (void 0 !== r) return r.exports;
                    var n = (a[t] = { exports: {} });
                    return (o[t](n, n.exports, e), n.exports);
                })(810);
                s.useForceUpdateRef = () => {
                    let [t, r] = (0, e.useState)(null);
                    return [
                        t,
                        (0, e.useCallback)((e) => {
                            r((t) => (t !== e ? e : t));
                        }, []),
                    ];
                };
            })(),
                s.__esModule);
            var l = s.useForceUpdateRef;
        },
        51611: (e, t, r) => {
            'use strict';
            r.d(t, { h: () => a });
            var n = r(53548),
                i = r(4086),
                o = r(41928);
            let a = () => {
                let e = (0, o.N)().get(i.Xc),
                    t = e.getLanguage(),
                    r = e.getDefaultLanguage(),
                    a = e.getDictionary(),
                    s = e.getAvailableLanguages(),
                    l = (0, n.useCallback)(
                        (t) => {
                            e.setLanguage(t);
                        },
                        [t],
                    );
                return (0, n.useMemo)(() => ({ dictionary: a, language: t, defaultLanguage: r, availableLanguages: s, setLanguage: l }), [t, l]);
            };
        },
        55399: (e, t, r) => {
            'use strict';
            r.d(t, { Y: () => n });
            let n = { PLATFORM: 'web', MODE: 'iframe', AUTH_METHOD: 'default', OAUTH_TOKEN: null, SERVICE: 'music', SERVICE_CHANNEL: 'music_web' };
        },
        55956: (e, t, r) => {
            'use strict';
            r.d(t, { V: () => n });
            var n = (function (e) {
                return ((e.WINDOWS = 'Windows'), (e.MACOS = 'MacOS'), (e.LINUX = 'Linux'), e);
            })({});
        },
        56248: (e, t, r) => {
            'use strict';
            r.d(t, { L: () => g });
            var n = r(88800),
                i = r(65724),
                o = r(84961),
                a = r(53548),
                s = r(2058),
                l = r(17392),
                u = r(29993),
                d = r(96817),
                c = r(52300),
                f = r(46777),
                p = r(50320),
                v = r.n(p);
            let g = (0, o.PA)((e) => {
                let {
                        withBackwardControl: t = !0,
                        withForwardControl: r = !0,
                        shouldFocusOnMount: o = !0,
                        className: p,
                        withBackwardFallback: g,
                        buttonSize: _ = 'xxs',
                        onBackwardClick: m,
                    } = e,
                    { formatMessage: b } = (0, s.A)(),
                    { canBack: O, canForward: S, moveBack: h, moveForward: E } = (0, f.J)(g),
                    y = (0, a.useRef)(null),
                    A = (0, u.c)((e) => {
                        if ((e.stopPropagation(), m)) return void m();
                        h();
                    }),
                    x = (0, u.c)((e) => {
                        (e.stopPropagation(), E());
                    });
                return (
                    (0, a.useEffect)(() => {
                        o && y.current && O && y.current.focus();
                    }, [O]),
                    (0, n.jsxs)('div', {
                        className: (0, i.$)(v().root, p),
                        'data-test-id': l.Kq.navigation.NAVIGATION_CONTROLS,
                        children: [
                            t &&
                                (0, n.jsx)(d.$, {
                                    ref: y,
                                    'aria-label': b({ id: 'navigation.go-back' }),
                                    radius: 'round',
                                    disabled: !O,
                                    size: _,
                                    icon: (0, n.jsx)(c.I, { size: 'xxs', variant: 'arrowLeft' }),
                                    onClick: A,
                                    'data-test-id': l.Kq.navigation.NAVIGATION_BACKWARD_BUTTON,
                                }),
                            r &&
                                (0, n.jsx)(d.$, {
                                    'aria-label': b({ id: 'navigation.go-forward' }),
                                    radius: 'round',
                                    disabled: !S,
                                    size: _,
                                    icon: (0, n.jsx)(c.I, { size: 'xxs', variant: 'arrowRight' }),
                                    onClick: x,
                                    'data-test-id': l.Kq.navigation.NAVIGATION_FORWARD_BUTTON,
                                }),
                        ],
                    })
                );
            });
        },
        60208: (e, t, r) => {
            'use strict';
            r.d(t, { D: () => o });
            var n = r(4086),
                i = r(41928);
            let o = () => (0, i.N)().get(n.SX);
        },
        86462: (e, t, r) => {
            'use strict';
            r.d(t, { D: () => C });
            var n = r(53548),
                i = r(58390),
                o = r(30688),
                a = r(4086),
                s = r(41928),
                l = r(31320),
                u = r(72288),
                d = r(15253),
                c = r(4685),
                f = r(60208),
                p = r(97956),
                v = r(92192),
                g = r(55399),
                _ = r(23703);
            let m = 'NO_VALUE',
                b = (e, t) => (t ? e : ''.concat(e, '_test')),
                O = function () {
                    var e;
                    let t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                        { experiments: r } = (0, u.g)(),
                        { pwTools: i } = (0, _.q)(t),
                        o = (0, v.D)(),
                        a = 'production' === (0, f.D)(),
                        s = (null == (e = r.getExperiment(p.z.ABTestIds)) ? void 0 : e.group) || '',
                        l = (0, n.useCallback)(
                            (e) => {
                                let { serviceSessionId: t } = e,
                                    { SERVICE: r, SERVICE_CHANNEL: n } = g.Y;
                                null == i ||
                                    i.plusPaymentEvents.frontSessionStart(
                                        { session_id: t, service: r, service_channel: n, external_test_ids: s, external_triggered_test_ids: '' },
                                        (0, c.R)(),
                                    );
                            },
                            [i, s],
                        ),
                        d = (0, n.useCallback)(
                            (e) => {
                                let { serviceSessionId: t, target: r, offersBatchId: n, offersPositionIds: o } = e;
                                null == i || i.plusPaymentEvents.loadOffersResulted({ session_id: t, target: r, offers_batch_id: n, resulted_offer_position_ids: o });
                            },
                            [i],
                        );
                    return {
                        frontSessionStart: l,
                        loadOffersResulted: d,
                        offersShown: (0, n.useCallback)(
                            (e) => {
                                let { serviceSessionId: t, offersBatchId: r, offersPositionId: n, position: s, page: l, place: u } = e;
                                (null == t ? void 0 : t.length) !== 0 &&
                                    (null == i ||
                                        i.plusPaymentEvents.offerShow({
                                            session_id: t,
                                            offers_batch_id: r,
                                            offers_position_id: n,
                                            position: s,
                                            page: b(l || m, a),
                                            place: u || m,
                                            from: m,
                                            url: o,
                                        }));
                            },
                            [i, o, a],
                        ),
                        offersClicked: (0, n.useCallback)(
                            (e) => {
                                let { serviceSessionId: t, offersBatchId: r, offersPositionId: n, page: s, place: l, offerPosition: u } = e;
                                (null == t ? void 0 : t.length) !== 0 &&
                                    (null == i ||
                                        i.plusPaymentEvents.offerClick({
                                            session_id: t,
                                            offers_batch_id: r,
                                            offers_position_id: n,
                                            position: u,
                                            page: b(s || m, a),
                                            place: l || m,
                                            from: m,
                                            url: o,
                                        }));
                            },
                            [i, o, a],
                        ),
                    };
                };
            var S = r(74773),
                h = r(26e3);
            let E = function (e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        { frontSessionStart: r, loadOffersResulted: i } = O(t),
                        a = (0, o.j)(),
                        s = e.getLoadingState(a.page);
                    ((0, n.useEffect)(() => {
                        s === S.G.RESOLVE && !e.isFrontSessionStartSent && t && (r({ serviceSessionId: e.serviceSessionId }), e.toggleIsFrontSessionStartSentTrue());
                    }, [e, s, e.isFrontSessionStartSent, r, a.page, t]),
                        (0, n.useEffect)(() => {
                            s === S.G.RESOLVE &&
                                !e.getIsLoadOffersResultSent(a.page) &&
                                t &&
                                (i(
                                    ((e, t) => {
                                        var r;
                                        let n = t.page || h.l.NO_VALUE,
                                            { serviceSessionId: i, getOffersPositionIds: o, getOffer: a } = e,
                                            s = o(n),
                                            { target: l = 'music', offersBatchId: u = '' } = a(n, null == (r = t.places) ? void 0 : r[0]) || {};
                                        return { serviceSessionId: i, target: l, offersBatchId: u, offersPositionIds: s };
                                    })(e, a),
                                ),
                                e.toggleIsLoadOffersResultSentTrue(a.page));
                        }, [e, s, e.getIsLoadOffersResultSent, i, a, t]));
                },
                y = function (e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        r = arguments.length > 2 ? arguments[2] : void 0,
                        i = arguments.length > 3 ? arguments[3] : void 0,
                        l = arguments.length > 4 ? arguments[4] : void 0,
                        { offers: c } = (0, u.g)(),
                        f = c[e],
                        p = (0, o.j)(),
                        v = (null == f ? void 0 : f.getIsNeededToLoad(p.page)) && p.shouldFetchOffers,
                        g = (0, s.N)();
                    return (
                        (0, n.useEffect)(() => {
                            if (t && v) {
                                var e, n;
                                let t = g.get(a.vH).get(d.c.BuySubscriptionParams);
                                f.getData({
                                    communicationId: null != (e = null != r ? r : null == t ? void 0 : t.communicationId) ? e : void 0,
                                    campaignId: null != (n = null != i ? i : null == t ? void 0 : t.campaignId) ? n : void 0,
                                    page: p.page,
                                    places: p.places,
                                    widgetServiceName: p.widgetServiceName,
                                });
                            }
                        }, [t, f, r, i, l, f.isNeededToLoad, v, p, g]),
                        E(f, t),
                        f
                    );
                };
            var A = r(29993),
                x = r(8840);
            let C = (e) => {
                let { storeName: t, place: r, communicationId: c, campaignId: f, customTarget: p, offerElement: v, isEnabled: g = !0 } = e,
                    _ = (0, i.useRouter)(),
                    m = (0, s.N)(),
                    b = (0, o.j)().page,
                    { getIsShimmerVisible: S, getIsShimmerActive: h, getOffer: E, getTarget: C, serviceSessionId: N } = y(t, g, c, f, p),
                    I = C(b, r),
                    {
                        mainText: P,
                        mainTextA11y: M,
                        additionText: w,
                        tariffOffer: L,
                        offerPosition: T = 0,
                        offersBatchId: D = '',
                        offersPositionId: R = '',
                        place: k,
                        oneClickAvailable: B = !1,
                        oneClickDisclaimerText: U,
                        oneClickDisclaimerTextA11y: V,
                        disclaimerText: W,
                        disclaimerTextA11y: j,
                        buttonText: z,
                    } = E(b, r) || {},
                    Y = S(b),
                    G = h(b),
                    { open: F, isOpened: H } = ((e) => {
                        let {
                                target: t,
                                tariffOfferName: r,
                                offersBatchId: i = '',
                                offersPositionIds: o = '',
                                serviceSessionId: a = '',
                                isEnabled: s = !0,
                                isOneClick: l = !1,
                            } = e,
                            {
                                paymentWidgetModal: {
                                    modal: d,
                                    setTarget: c,
                                    setTariffOfferName: f,
                                    setServiceSessionId: p,
                                    setIsSilent: v,
                                    setOffersBatchId: g,
                                    setOffersPositionIds: _,
                                },
                            } = (0, u.g)();
                        return {
                            open: (0, n.useCallback)(() => {
                                s && (c(t), v(l), p(a), g(i), _(o), r && f(r), d.open());
                            }, [f, c, v, p, g, _, l, t, r, i, o, a, d, s]),
                            isOpened: d.isOpened,
                        };
                    })({
                        target: I,
                        serviceSessionId: N,
                        tariffOfferName: null == L ? void 0 : L.name,
                        offersBatchId: D,
                        offersPositionIds: R,
                        isEnabled: g,
                        isOneClick: B,
                    }),
                    { offersShown: q, offersClicked: K } = O(g),
                    X = (0, n.useCallback)(() => {
                        g && D && q({ serviceSessionId: N, offersBatchId: D, offersPositionId: R, position: T, page: b, place: k });
                    }, [g, q, N, D, R, T, b, k]),
                    Z = (0, n.useCallback)(() => {
                        g && D && K({ serviceSessionId: N, offersBatchId: D, offersPositionId: R, page: b, place: k, offerPosition: T });
                    }, [g, K, N, D, R, b, k, T]),
                    $ = (0, n.useRef)(!1),
                    J = (0, n.useRef)(!1),
                    Q = (0, n.useCallback)(() => {
                        ((J.current = !0), ($.current = !1), D && (X(), ($.current = !0)));
                    }, [D, X]);
                ((0, n.useEffect)(() => {
                    J.current && D && !$.current && (X(), ($.current = !0));
                }, [D, X]),
                    ((e) => {
                        var t;
                        let { onShow: r, offerElement: i, isEnabled: o = !0 } = e,
                            a = (0, n.useRef)(null),
                            s = (0, n.useRef)(!1),
                            l = (0, n.useRef)(null),
                            u = (0, n.useRef)(!1),
                            d = (0, n.useRef)(null == i ? void 0 : i.isVisible),
                            { element: c, intersectionPropertyId: f, isVisible: p, requireTransition: v } = i || {},
                            g = (0, A.c)(r),
                            _ = (0, n.useMemo)(() => (c ? ((a.current = c), [a]) : []), [c]),
                            { isIntersecting: m } = null != (t = (0, x.BL)(_, { preflightCheck: !1 }, !c || !o)[null != f ? f : '']) ? t : {};
                        ((0, n.useEffect)(() => {
                            v ? (!0 !== d.current && !0 === p && (u.current = !0), (d.current = p)) : (u.current = !0);
                        }, [p, v, f]),
                            (0, n.useEffect)(() => {
                                if (!v && c && void 0 === m) {
                                    let e = c.getBoundingClientRect();
                                    e.top < window.innerHeight &&
                                        e.bottom > 0 &&
                                        e.left < window.innerWidth &&
                                        e.right > 0 &&
                                        !s.current &&
                                        u.current &&
                                        (g(), (s.current = !0));
                                }
                            }, [c, v, m, f, g]),
                            (0, n.useEffect)(() => {
                                if ((f && l.current !== f && ((s.current = !1), (l.current = f)), !f)) return;
                                let e = m && (void 0 === p || p) && !s.current && u.current,
                                    t = !1 === m || (void 0 !== p && !1 === p);
                                e ? (g(), (s.current = !0)) : t && s.current && (s.current = !1);
                            }, [m, p, g, f]));
                    })({ offerElement: v, isEnabled: g, onShow: Q }),
                    ((e) => {
                        let { onClick: t, offerElement: r, isEnabled: i } = e,
                            { element: o } = r || {};
                        (0, n.useEffect)(() => {
                            if (o && i) return (o.addEventListener('click', t), () => o.removeEventListener('click', t));
                        }, [o, t, i]);
                    })({ offerElement: v, isEnabled: g, onClick: Z }));
                let ee = (0, n.useCallback)(() => {
                        let e = m.get(a.QG),
                            t = m.get(a.vH);
                        e.authorizationUrl &&
                            (t.set(d.c.Offer, {
                                target: I,
                                serviceSessionId: N,
                                offersBatchId: D,
                                isSilent: !1,
                                offersPositionIds: R,
                                tariffOfferName: null == L ? void 0 : L.name,
                            }),
                            _.push(e.authorizationUrl));
                    }, [m, _, I, N, L, D, R]),
                    et = (0, n.useMemo)(() => {
                        var e, t, r, n;
                        if ((null == L || null == (t = L.plans) || null == (e = t[0]) ? void 0 : e.typename) === l.N.TrialPlan)
                            return null == L || null == (n = L.plans) || null == (r = n[0]) ? void 0 : r.period;
                    }, [L]);
                return (0, n.useMemo)(
                    () => ({
                        mainText: P,
                        mainTextA11y: M,
                        additionText: w,
                        isShimmerVisible: Y,
                        isShimmerActive: G,
                        trialPlanPeriod: et,
                        openPaymentWidgetModal: F,
                        offersShown: X,
                        offersClicked: Z,
                        saveOfferAndAuthorize: ee,
                        isPaymentWidgetModalOpened: H,
                        oneClickAvailable: B,
                        oneClickDisclaimerText: U,
                        oneClickDisclaimerTextA11y: V,
                        disclaimerText: W,
                        disclaimerTextA11y: j,
                        buttonText: z,
                    }),
                    [w, H, G, Y, P, M, Z, X, B, U, V, W, j, F, ee, et, z],
                );
            };
        },
        91051: (e, t, r) => {
            'use strict';
            r.d(t, { b: () => d });
            var n = r(88800),
                i = r(53548),
                o = r(29993),
                a = r(96817),
                s = r(19994),
                l = r(29504);
            let u = (e) => {
                    let {
                            className: t,
                            mainTextFontSize: r = 'l',
                            mainTextClassName: i,
                            additionTextClassName: u,
                            onClick: d,
                            isShimmerActive: c,
                            isShimmerVisible: f,
                            mainText: p,
                            ariaLabel: v,
                            additionText: g,
                            color: _ = 'plus',
                            forwardRef: m,
                            ...b
                        } = e,
                        O = (0, o.c)((e) => {
                            (e.stopPropagation(), e.preventDefault(), null == d || d());
                        });
                    return f
                        ? (0, n.jsx)(s.W, { className: t, isActive: c, radius: 'xxxl' })
                        : (0, n.jsxs)(a.$, {
                              ref: m,
                              className: t,
                              isBlock: !0,
                              color: _,
                              variant: 'default',
                              size: 'l',
                              radius: 'xxxl',
                              onClick: O,
                              'aria-label': v,
                              ...b,
                              children: [
                                  (0, n.jsx)(l.HL, { className: i, variant: 'div', size: r, lineClamp: 1, children: p }),
                                  (0, n.jsx)(l.HL, { className: u, variant: 'div', size: 'xs', lineClamp: 1, children: g }),
                              ],
                          });
                },
                d = (0, i.forwardRef)((e, t) => (0, n.jsx)(u, { forwardRef: t, ...e }));
        },
        92192: (e, t, r) => {
            'use strict';
            r.d(t, { D: () => o });
            var n = r(53548),
                i = r(58390);
            let o = () => {
                let e = (0, i.usePathname)(),
                    t = (0, i.useSearchParams)();
                return (0, n.useMemo)(() => {
                    let r = t.size > 0 ? '?'.concat(t) : '';
                    return ''.concat(e).concat(r);
                }, [e, t]);
            };
        },
        93020: (e, t, r) => {
            'use strict';
            r.d(t, { z: () => n });
            var n = (function (e) {
                return ((e.MUSIC = 'music'), e);
            })({});
        },
    },
]);
