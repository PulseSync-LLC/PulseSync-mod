(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8836],
    {
        5180: (e, t, r) => {
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
        14797: (e, t, r) => {
            'use strict';
            r.d(t, { b: () => d });
            var n = r(25839),
                a = r(74631),
                o = r(71035),
                i = r(4071),
                l = r(23976),
                s = r(4254);
            let u = (e) => {
                    let {
                            className: t,
                            mainTextFontSize: r = 'l',
                            mainTextClassName: a,
                            additionTextClassName: u,
                            onClick: d,
                            isShimmerActive: c,
                            isShimmerVisible: f,
                            mainText: p,
                            ariaLabel: g,
                            additionText: v,
                            color: _ = 'plus',
                            forwardRef: m,
                            ...b
                        } = e,
                        S = (0, o.c)((e) => {
                            (e.stopPropagation(), e.preventDefault(), null == d || d());
                        });
                    return f
                        ? (0, n.jsx)(l.W, { className: t, isActive: c, radius: 'xxxl' })
                        : (0, n.jsxs)(i.$, {
                              ref: m,
                              className: t,
                              isBlock: !0,
                              color: _,
                              variant: 'default',
                              size: 'l',
                              radius: 'xxxl',
                              onClick: S,
                              'aria-label': g,
                              ...b,
                              children: [
                                  (0, n.jsx)(s.HL, { className: a, variant: 'div', size: r, lineClamp: 1, children: p }),
                                  (0, n.jsx)(s.HL, { className: u, variant: 'div', size: 'xs', lineClamp: 1, children: v }),
                              ],
                          });
                },
                d = (0, a.forwardRef)((e, t) => (0, n.jsx)(u, { forwardRef: t, ...e }));
        },
        15270: (e, t, r) => {
            'use strict';
            r.d(t, { L: () => v });
            var n = r(25839),
                a = r(82298),
                o = r(88204),
                i = r(74631),
                l = r(39004),
                s = r(61493),
                u = r(71035),
                d = r(4071),
                c = r(66738),
                f = r(20583),
                p = r(65610),
                g = r.n(p);
            let v = (0, o.PA)((e) => {
                let {
                        withBackwardControl: t = !0,
                        withForwardControl: r = !0,
                        shouldFocusOnMount: o = !0,
                        className: p,
                        withBackwardFallback: v,
                        buttonSize: _ = 'xxs',
                    } = e,
                    { formatMessage: m } = (0, l.A)(),
                    { canBack: b, canForward: S, moveBack: E, moveForward: O } = (0, f.J)(v),
                    h = (0, i.useRef)(null),
                    y = (0, u.c)((e) => {
                        (e.stopPropagation(), E());
                    }),
                    C = (0, u.c)((e) => {
                        (e.stopPropagation(), O());
                    });
                return (
                    (0, i.useEffect)(() => {
                        o && h.current && b && h.current.focus();
                    }, [b]),
                    (0, n.jsxs)('div', {
                        className: (0, a.$)(g().root, p),
                        'data-test-id': s.Kq.navigation.NAVIGATION_CONTROLS,
                        children: [
                            t &&
                                (0, n.jsx)(d.$, {
                                    ref: h,
                                    'aria-label': m({ id: 'navigation.go-back' }),
                                    radius: 'round',
                                    disabled: !b,
                                    size: _,
                                    icon: (0, n.jsx)(c.I, { size: 'xxs', variant: 'arrowLeft' }),
                                    onClick: y,
                                    'data-test-id': s.Kq.navigation.NAVIGATION_BACKWARD_BUTTON,
                                }),
                            r &&
                                (0, n.jsx)(d.$, {
                                    'aria-label': m({ id: 'navigation.go-forward' }),
                                    radius: 'round',
                                    disabled: !S,
                                    size: _,
                                    icon: (0, n.jsx)(c.I, { size: 'xxs', variant: 'arrowRight' }),
                                    onClick: C,
                                    'data-test-id': s.Kq.navigation.NAVIGATION_FORWARD_BUTTON,
                                }),
                        ],
                    })
                );
            });
        },
        16837: (e, t, r) => {
            'use strict';
            r.d(t, { Y: () => n });
            let n = { PLATFORM: 'web', MODE: 'iframe', AUTH_METHOD: 'default', OAUTH_TOKEN: null, SERVICE: 'music', SERVICE_CHANNEL: 'music_web' };
        },
        18858: (e, t, r) => {
            'use strict';
            r.d(t, { j: () => i });
            var n = r(74631),
                a = r(79890),
                o = r(68406);
            function i() {
                let e = (0, n.useContext)(a.x);
                return (0, n.useMemo)(() => ({ ...e, isContextDefined: e.page !== o.l.NO_VALUE }), [e]);
            }
        },
        20583: (e, t, r) => {
            'use strict';
            r.d(t, { J: () => i });
            var n = r(10508),
                a = r(74631),
                o = r(21784);
            let i = (e) => {
                let t = (0, o.W)(),
                    r = (0, a.useMemo)(
                        () =>
                            (0, n.A)(() => {
                                if (e && !t.canBack) return void t.replaceState({ href: e });
                                null == t || t.back();
                            }, 200),
                        [t, e],
                    ),
                    i = (0, a.useMemo)(
                        () =>
                            (0, n.A)(() => {
                                null == t || t.forward();
                            }, 200),
                        [t],
                    );
                return { canBack: !!e || t.canBack, canForward: t.canForward, moveBack: r, moveForward: i };
            };
        },
        22582: (e, t, r) => {
            'use strict';
            r.d(t, { V: () => n });
            var n = (function (e) {
                return ((e.WINDOWS = 'Windows'), (e.MACOS = 'MacOS'), (e.LINUX = 'Linux'), e);
            })({});
        },
        23976: (e, t, r) => {
            'use strict';
            r.d(t, { W: () => l });
            var n = {
                    5881: (e, t, r) => {
                        function n() {
                            for (var e, t, r = 0, n = ''; r < arguments.length;)
                                (e = arguments[r++]) &&
                                    (t = (function e(t) {
                                        var r,
                                            n,
                                            a = '';
                                        if ('string' == typeof t || 'number' == typeof t) a += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (r = 0; r < t.length; r++) t[r] && (n = e(t[r])) && (a && (a += ' '), (a += n));
                                            else for (r in t) t[r] && (a && (a += ' '), (a += r));
                                        return a;
                                    })(e)) &&
                                    (n && (n += ' '), (n += t));
                            return n;
                        }
                        (r.r(t), r.d(t, { clsx: () => n, default: () => a }));
                        let a = n;
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
                            var a = null;
                            if ((void 0 !== n && (a = '' + n), void 0 !== t.key && (a = '' + t.key), 'key' in t))
                                for (var o in ((n = {}), t)) 'key' !== o && (n[o] = t[o]);
                            else n = t;
                            return { $$typeof: r, type: e, key: a, ref: void 0 !== (t = n.ref) ? t : null, props: n };
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
                        let a = r(4377),
                            o = r(5881),
                            i = n(r(7998));
                        t.Shimmer = function (e) {
                            let { isActive: t, className: r, radius: n = 'm', width: l, height: s, children: u, ...d } = e,
                                c = {};
                            return (
                                void 0 !== l && (c.width = 'string' == typeof l ? l : ''.concat(l, 'px')),
                                void 0 !== s && (c.height = 'string' == typeof s ? s : ''.concat(s, 'px')),
                                (0, a.jsx)('div', {
                                    className: (0, o.clsx)(i.default.root, i.default['root_radius_'.concat(n)], { [i.default.root_active]: t }, r),
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
                a = {};
            function o(e) {
                var t = a[e];
                if (void 0 !== t) return t.exports;
                var r = (a[e] = { exports: {} });
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
            var i = {};
            (() => {
                (Object.defineProperty(i, 'X', { value: !0 }), (i.q = void 0));
                var e = o(7141);
                Object.defineProperty(i, 'q', {
                    enumerable: !0,
                    get: function () {
                        return e.Shimmer;
                    },
                });
            })();
            var l = i.q;
            i.X;
        },
        25943: (e, t, r) => {
            'use strict';
            (r.d(t, { R: () => l }), r(93588));
            var n = r(92231),
                a = r(90932),
                o = r(22582);
            let i = { WINDOWS: '95673843', MACOS: '95673848', LINUX: '98548790', WEB: '95673834' },
                l = () => {
                    switch ((0, a.$)((0, n.u)())) {
                        case o.V.WINDOWS:
                            return i.WINDOWS;
                        case o.V.MACOS:
                            return i.MACOS;
                        case o.V.LINUX:
                            return i.LINUX;
                    }
                    return i.WEB;
                };
        },
        26909: (e, t, r) => {
            'use strict';
            r.d(t, { q: () => f });
            var n = r(1817),
                a = r(74631),
                o = r(18858),
                i = r(36484),
                l = r(62562),
                s = r(96433),
                u = r(27954),
                d = r(16837);
            let c = null,
                f = function () {
                    var e;
                    let t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                        r = (0, l.N)(),
                        { payment: f } = r.get(i.V4),
                        { environment: p } = f,
                        { user: g, location: v } = (0, u.g)(),
                        { language: _ } = (0, s.h)(),
                        { widgetServiceName: m } = (0, o.j)(),
                        { request_id: b } = null != (e = r.get(i.Zi).getStore()) ? e : {},
                        { geoRegionIso: S, userSessionRegionIso: E } = g.account.data;
                    return {
                        pwTools: (0, a.useMemo)(() => {
                            if (!t || 'undefined' == typeof document) return null;
                            if (c) return c;
                            let { PLATFORM: e, MODE: r, AUTH_METHOD: a } = d.Y,
                                o = void 0 !== g.puid ? String(g.puid) : null;
                            return (c = n.pp.from({
                                platform: e,
                                widgetServiceName: m,
                                mode: r,
                                authMethod: a,
                                lang: _,
                                environment: p,
                                puid: o,
                                serviceSessionId: null,
                                etld: 'yandex.'.concat(v.tld),
                                preloadManager: !0,
                                rumOptions: { requestId: b, additional: { geoRegionIso: S, userSessionRegionIso: E } },
                            }));
                        }, [_, p, g.puid, v.tld, t, b, S, E, m]),
                    };
                };
        },
        27862: (e, t, r) => {
            'use strict';
            r.d(t, { z: () => n });
            var n = (function (e) {
                return ((e.MUSIC = 'music'), e);
            })({});
        },
        29282: (e, t, r) => {
            'use strict';
            r.d(t, { D: () => o });
            var n = r(36484),
                a = r(62562);
            let o = () => (0, a.N)().get(n.SX);
        },
        30746: (e, t, r) => {
            'use strict';
            r.d(t, { D: () => o });
            var n = r(74631),
                a = r(84059);
            let o = () => {
                let e = (0, a.usePathname)(),
                    t = (0, a.useSearchParams)();
                return (0, n.useMemo)(() => {
                    let r = t.size > 0 ? '?'.concat(t) : '';
                    return ''.concat(e).concat(r);
                }, [e, t]);
            };
        },
        36159: (e, t, r) => {
            'use strict';
            r.d(t, { G: () => n });
            var n = (function (e) {
                return ((e.IDLE = 'IDLE'), (e.PENDING = 'PENDING'), (e.RESOLVE = 'RESOLVE'), (e.REJECT = 'REJECT'), e);
            })({});
        },
        37982: (e, t, r) => {
            'use strict';
            r.d(t, { N: () => n });
            var n = (function (e) {
                return ((e.IntroPlan = 'IntroPlan'), (e.IntroUntilPlan = 'IntroUntilPlan'), (e.TrialPlan = 'TrialPlan'), (e.TrialUntilPlan = 'TrialUntilPlan'), e);
            })({});
        },
        38656: (e, t, r) => {
            'use strict';
            r.d(t, { r: () => s });
            var n = r(25839),
                a = r(88204),
                o = r(74631),
                i = r(79890),
                l = r(27862);
            let s = (0, a.PA)((e) => {
                let { page: t, places: r, shouldFetchOffers: a = !0, widgetServiceName: s = l.z.MUSIC, children: u } = e,
                    d = (0, o.useRef)(r),
                    c = (0, o.useMemo)(() => ({ page: t, places: d.current, shouldFetchOffers: a, widgetServiceName: s }), [t, a, s]);
                return (0, n.jsx)(i.x.Provider, { value: c, children: u });
            });
        },
        65610: (e) => {
            e.exports = { root: 'NavigationControls_root__V2A3_' };
        },
        68406: (e, t, r) => {
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
        68934: (e, t, r) => {
            'use strict';
            r.d(t, { d: () => s });
            var n,
                a = r(74631),
                o = {
                    810: (e) => {
                        e.exports = n || (n = r.t(a, 2));
                    },
                },
                i = {},
                l = {};
            ((() => {
                (Object.defineProperty(l, '__esModule', { value: !0 }), (l.useForceUpdateRef = void 0));
                let e = (function e(t) {
                    var r = i[t];
                    if (void 0 !== r) return r.exports;
                    var n = (i[t] = { exports: {} });
                    return (o[t](n, n.exports, e), n.exports);
                })(810);
                l.useForceUpdateRef = () => {
                    let [t, r] = (0, e.useState)(null);
                    return [
                        t,
                        (0, e.useCallback)((e) => {
                            r((t) => (t !== e ? e : t));
                        }, []),
                    ];
                };
            })(),
                l.__esModule);
            var s = l.useForceUpdateRef;
        },
        79890: (e, t, r) => {
            'use strict';
            r.d(t, { x: () => l });
            var n = r(74631),
                a = r(68406),
                o = r(27862);
            let i = { page: a.l.NO_VALUE, places: void 0, shouldFetchOffers: !0, isContextDefined: !1, widgetServiceName: o.z.MUSIC },
                l = (0, n.createContext)(i);
        },
        90932: (e, t, r) => {
            'use strict';
            r.d(t, { $: () => a });
            var n = r(22582);
            let a = (e) => {
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
        92231: (e, t, r) => {
            'use strict';
            function n() {
                var e;
                return null == (e = window.musicDesktop) ? void 0 : e.runtime.platform;
            }
            r.d(t, { u: () => n });
        },
        95067: (e, t, r) => {
            'use strict';
            r.d(t, { c: () => a });
            var n = r(61943),
                a = (function (e) {
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
        96433: (e, t, r) => {
            'use strict';
            r.d(t, { h: () => i });
            var n = r(74631),
                a = r(36484),
                o = r(62562);
            let i = () => {
                let e = (0, o.N)().get(a.Xc),
                    t = e.getLanguage(),
                    r = e.getDefaultLanguage(),
                    i = e.getDictionary(),
                    l = e.getAvailableLanguages(),
                    s = (0, n.useCallback)(
                        (t) => {
                            e.setLanguage(t);
                        },
                        [t],
                    );
                return (0, n.useMemo)(() => ({ dictionary: i, language: t, defaultLanguage: r, availableLanguages: l, setLanguage: s }), [t, s]);
            };
        },
        97828: (e, t, r) => {
            'use strict';
            r.d(t, { D: () => N });
            var n = r(74631),
                a = r(84059),
                o = r(18858),
                i = r(36484),
                l = r(62562),
                s = r(37982),
                u = r(27954),
                d = r(95067),
                c = r(25943),
                f = r(29282),
                p = r(44806),
                g = r(30746),
                v = r(16837),
                _ = r(26909);
            let m = 'NO_VALUE',
                b = (e, t) => (t ? e : ''.concat(e, '_test')),
                S = function () {
                    var e;
                    let t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                        { experiments: r } = (0, u.g)(),
                        { pwTools: a } = (0, _.q)(t),
                        o = (0, g.D)(),
                        i = 'production' === (0, f.D)(),
                        l = (null == (e = r.getExperiment(p.z.ABTestIds)) ? void 0 : e.group) || '',
                        s = (0, n.useCallback)(
                            (e) => {
                                let { serviceSessionId: t } = e,
                                    { SERVICE: r, SERVICE_CHANNEL: n } = v.Y;
                                null == a ||
                                    a.plusPaymentEvents.frontSessionStart(
                                        { session_id: t, service: r, service_channel: n, external_test_ids: l, external_triggered_test_ids: '' },
                                        (0, c.R)(),
                                    );
                            },
                            [a, l],
                        ),
                        d = (0, n.useCallback)(
                            (e) => {
                                let { serviceSessionId: t, target: r, offersBatchId: n, offersPositionIds: o } = e;
                                null == a || a.plusPaymentEvents.loadOffersResulted({ session_id: t, target: r, offers_batch_id: n, resulted_offer_position_ids: o });
                            },
                            [a],
                        );
                    return {
                        frontSessionStart: s,
                        loadOffersResulted: d,
                        offersShown: (0, n.useCallback)(
                            (e) => {
                                let { serviceSessionId: t, offersBatchId: r, offersPositionId: n, position: l, page: s, place: u } = e;
                                (null == t ? void 0 : t.length) !== 0 &&
                                    (null == a ||
                                        a.plusPaymentEvents.offerShow({
                                            session_id: t,
                                            offers_batch_id: r,
                                            offers_position_id: n,
                                            position: l,
                                            page: b(s || m, i),
                                            place: u || m,
                                            from: m,
                                            url: o,
                                        }));
                            },
                            [a, o, i],
                        ),
                        offersClicked: (0, n.useCallback)(
                            (e) => {
                                let { serviceSessionId: t, offersBatchId: r, offersPositionId: n, page: l, place: s, offerPosition: u } = e;
                                (null == t ? void 0 : t.length) !== 0 &&
                                    (null == a ||
                                        a.plusPaymentEvents.offerClick({
                                            session_id: t,
                                            offers_batch_id: r,
                                            offers_position_id: n,
                                            position: u,
                                            page: b(l || m, i),
                                            place: s || m,
                                            from: m,
                                            url: o,
                                        }));
                            },
                            [a, o, i],
                        ),
                    };
                };
            var E = r(36159),
                O = r(68406);
            let h = function (e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        { frontSessionStart: r, loadOffersResulted: a } = S(t),
                        i = (0, o.j)(),
                        l = e.getLoadingState(i.page);
                    ((0, n.useEffect)(() => {
                        l === E.G.RESOLVE && !e.isFrontSessionStartSent && t && (r({ serviceSessionId: e.serviceSessionId }), e.toggleIsFrontSessionStartSentTrue());
                    }, [e, l, e.isFrontSessionStartSent, r, i.page, t]),
                        (0, n.useEffect)(() => {
                            l === E.G.RESOLVE &&
                                !e.getIsLoadOffersResultSent(i.page) &&
                                t &&
                                (a(
                                    ((e, t) => {
                                        var r;
                                        let n = t.page || O.l.NO_VALUE,
                                            { serviceSessionId: a, getOffersPositionIds: o, getOffer: i } = e,
                                            l = o(n),
                                            { target: s = 'music', offersBatchId: u = '' } = i(n, null == (r = t.places) ? void 0 : r[0]) || {};
                                        return { serviceSessionId: a, target: s, offersBatchId: u, offersPositionIds: l };
                                    })(e, i),
                                ),
                                e.toggleIsLoadOffersResultSentTrue(i.page));
                        }, [e, l, e.getIsLoadOffersResultSent, a, i, t]));
                },
                y = function (e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        r = arguments.length > 2 ? arguments[2] : void 0,
                        a = arguments.length > 3 ? arguments[3] : void 0,
                        s = arguments.length > 4 ? arguments[4] : void 0,
                        { offers: c } = (0, u.g)(),
                        f = c[e],
                        p = (0, o.j)(),
                        g = (null == f ? void 0 : f.getIsNeededToLoad(p.page)) && p.shouldFetchOffers,
                        v = (0, l.N)();
                    return (
                        (0, n.useEffect)(() => {
                            if (t && g) {
                                var e, n;
                                let t = v.get(i.vH).get(d.c.BuySubscriptionParams);
                                f.getData({
                                    communicationId: null != (e = null != r ? r : null == t ? void 0 : t.communicationId) ? e : void 0,
                                    campaignId: null != (n = null != a ? a : null == t ? void 0 : t.campaignId) ? n : void 0,
                                    page: p.page,
                                    places: p.places,
                                    widgetServiceName: p.widgetServiceName,
                                });
                            }
                        }, [t, f, r, a, s, f.isNeededToLoad, g, p, v]),
                        h(f, t),
                        f
                    );
                };
            var C = r(71035),
                A = r(91886);
            let N = (e) => {
                let { storeName: t, place: r, communicationId: c, campaignId: f, customTarget: p, offerElement: g, isEnabled: v = !0 } = e,
                    _ = (0, a.useRouter)(),
                    m = (0, l.N)(),
                    b = (0, o.j)().page,
                    { getIsShimmerVisible: E, getIsShimmerActive: O, getOffer: h, getTarget: N, serviceSessionId: x } = y(t, v, c, f, p),
                    P = N(b, r),
                    {
                        mainText: I,
                        mainTextA11y: M,
                        additionText: L,
                        tariffOffer: T,
                        offerPosition: w = 0,
                        offersBatchId: D = '',
                        offersPositionId: R = '',
                        place: k,
                        oneClickAvailable: U = !1,
                        oneClickDisclaimerText: B,
                        oneClickDisclaimerTextA11y: V,
                        disclaimerText: W,
                        disclaimerTextA11y: j,
                        buttonText: z,
                    } = h(b, r) || {},
                    G = E(b),
                    Y = O(b),
                    { open: F, isOpened: H } = ((e) => {
                        let {
                                target: t,
                                tariffOfferName: r,
                                offersBatchId: a = '',
                                offersPositionIds: o = '',
                                serviceSessionId: i = '',
                                isEnabled: l = !0,
                                isOneClick: s = !1,
                            } = e,
                            {
                                paymentWidgetModal: {
                                    modal: d,
                                    setTarget: c,
                                    setTariffOfferName: f,
                                    setServiceSessionId: p,
                                    setIsSilent: g,
                                    setOffersBatchId: v,
                                    setOffersPositionIds: _,
                                },
                            } = (0, u.g)();
                        return {
                            open: (0, n.useCallback)(() => {
                                l && (c(t), g(s), p(i), v(a), _(o), r && f(r), d.open());
                            }, [f, c, g, p, v, _, s, t, r, a, o, i, d, l]),
                            isOpened: d.isOpened,
                        };
                    })({
                        target: P,
                        serviceSessionId: x,
                        tariffOfferName: null == T ? void 0 : T.name,
                        offersBatchId: D,
                        offersPositionIds: R,
                        isEnabled: v,
                        isOneClick: U,
                    }),
                    { offersShown: q, offersClicked: K } = S(v),
                    X = (0, n.useCallback)(() => {
                        v && D && q({ serviceSessionId: x, offersBatchId: D, offersPositionId: R, position: w, page: b, place: k });
                    }, [v, q, x, D, R, w, b, k]),
                    J = (0, n.useCallback)(() => {
                        v && D && K({ serviceSessionId: x, offersBatchId: D, offersPositionId: R, page: b, place: k, offerPosition: w });
                    }, [v, K, x, D, R, b, k, w]),
                    Z = (0, n.useRef)(!1),
                    $ = (0, n.useRef)(!1),
                    Q = (0, n.useCallback)(() => {
                        (($.current = !0), (Z.current = !1), D && (X(), (Z.current = !0)));
                    }, [D, X]);
                ((0, n.useEffect)(() => {
                    $.current && D && !Z.current && (X(), (Z.current = !0));
                }, [D, X]),
                    ((e) => {
                        var t;
                        let { onShow: r, offerElement: a, isEnabled: o = !0 } = e,
                            i = (0, n.useRef)(null),
                            l = (0, n.useRef)(!1),
                            s = (0, n.useRef)(null),
                            u = (0, n.useRef)(!1),
                            d = (0, n.useRef)(null == a ? void 0 : a.isVisible),
                            { element: c, intersectionPropertyId: f, isVisible: p, requireTransition: g } = a || {},
                            v = (0, C.c)(r),
                            _ = (0, n.useMemo)(() => (c ? ((i.current = c), [i]) : []), [c]),
                            { isIntersecting: m } = null != (t = (0, A.BL)(_, { preflightCheck: !1 }, !c || !o)[null != f ? f : '']) ? t : {};
                        ((0, n.useEffect)(() => {
                            g ? (!0 !== d.current && !0 === p && (u.current = !0), (d.current = p)) : (u.current = !0);
                        }, [p, g, f]),
                            (0, n.useEffect)(() => {
                                if (!g && c && void 0 === m) {
                                    let e = c.getBoundingClientRect();
                                    e.top < window.innerHeight &&
                                        e.bottom > 0 &&
                                        e.left < window.innerWidth &&
                                        e.right > 0 &&
                                        !l.current &&
                                        u.current &&
                                        (v(), (l.current = !0));
                                }
                            }, [c, g, m, f, v]),
                            (0, n.useEffect)(() => {
                                if ((f && s.current !== f && ((l.current = !1), (s.current = f)), !f)) return;
                                let e = m && (void 0 === p || p) && !l.current && u.current,
                                    t = !1 === m || (void 0 !== p && !1 === p);
                                e ? (v(), (l.current = !0)) : t && l.current && (l.current = !1);
                            }, [m, p, v, f]));
                    })({ offerElement: g, isEnabled: v, onShow: Q }),
                    ((e) => {
                        let { onClick: t, offerElement: r, isEnabled: a } = e,
                            { element: o } = r || {};
                        (0, n.useEffect)(() => {
                            if (o && a) return (o.addEventListener('click', t), () => o.removeEventListener('click', t));
                        }, [o, t, a]);
                    })({ offerElement: g, isEnabled: v, onClick: J }));
                let ee = (0, n.useCallback)(() => {
                        let e = m.get(i.QG),
                            t = m.get(i.vH);
                        e.authorizationUrl &&
                            (t.set(d.c.Offer, {
                                target: P,
                                serviceSessionId: x,
                                offersBatchId: D,
                                isSilent: !1,
                                offersPositionIds: R,
                                tariffOfferName: null == T ? void 0 : T.name,
                            }),
                            _.push(e.authorizationUrl));
                    }, [m, _, P, x, T, D, R]),
                    et = (0, n.useMemo)(() => {
                        var e, t, r, n;
                        if ((null == T || null == (t = T.plans) || null == (e = t[0]) ? void 0 : e.typename) === s.N.TrialPlan)
                            return null == T || null == (n = T.plans) || null == (r = n[0]) ? void 0 : r.period;
                    }, [T]);
                return (0, n.useMemo)(
                    () => ({
                        mainText: I,
                        mainTextA11y: M,
                        additionText: L,
                        isShimmerVisible: G,
                        isShimmerActive: Y,
                        trialPlanPeriod: et,
                        openPaymentWidgetModal: F,
                        offersShown: X,
                        offersClicked: J,
                        saveOfferAndAuthorize: ee,
                        isPaymentWidgetModalOpened: H,
                        oneClickAvailable: U,
                        oneClickDisclaimerText: B,
                        oneClickDisclaimerTextA11y: V,
                        disclaimerText: W,
                        disclaimerTextA11y: j,
                        buttonText: z,
                    }),
                    [L, H, Y, G, I, M, J, X, U, B, V, W, j, F, ee, et, z],
                );
            };
        },
    },
]);
