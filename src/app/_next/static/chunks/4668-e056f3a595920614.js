(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4668],
    {
        1770: (e, t, r) => {
            'use strict';
            r.d(t, { x: () => l });
            var n = r(55178),
                a = r(27246),
                o = r(27150);
            let i = { page: a.l.NO_VALUE, places: void 0, shouldFetchOffers: !0, isContextDefined: !1, widgetServiceName: o.z.MUSIC },
                l = (0, n.createContext)(i);
        },
        5701: (e, t, r) => {
            'use strict';
            r.d(t, { q: () => f });
            var n = r(32732),
                a = r(55178),
                o = r(65650),
                i = r(70204),
                l = r(34186),
                s = r(61945),
                u = r(57594),
                d = r(47197);
            let c = null,
                f = function () {
                    var e;
                    let t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                        r = (0, l.N)(),
                        { payment: f } = r.get(i.tw),
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
        12894: (e, t, r) => {
            'use strict';
            r.d(t, { L: () => v });
            var n = r(32290),
                a = r(63618),
                o = r(96103),
                i = r(55178),
                l = r(60900),
                s = r(21732),
                u = r(91027),
                d = r(63423),
                c = r(82586),
                f = r(21935),
                p = r(78842),
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
                    C = (0, u.c)((e) => {
                        e.stopPropagation(), E();
                    }),
                    y = (0, u.c)((e) => {
                        e.stopPropagation(), O();
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
                                    onClick: C,
                                    'data-test-id': s.Kq.navigation.NAVIGATION_BACKWARD_BUTTON,
                                }),
                            r &&
                                (0, n.jsx)(d.$, {
                                    'aria-label': m({ id: 'navigation.go-forward' }),
                                    radius: 'round',
                                    disabled: !S,
                                    size: _,
                                    icon: (0, n.jsx)(c.I, { size: 'xxs', variant: 'arrowRight' }),
                                    onClick: y,
                                    'data-test-id': s.Kq.navigation.NAVIGATION_FORWARD_BUTTON,
                                }),
                        ],
                    })
                );
            });
        },
        13598: (e, t, r) => {
            'use strict';
            r.d(t, { V: () => n });
            var n = (function (e) {
                return (e.WINDOWS = 'Windows'), (e.MACOS = 'MacOS'), (e.LINUX = 'Linux'), e;
            })({});
        },
        15509: (e, t, r) => {
            'use strict';
            r.d(t, { b: () => d });
            var n = r(32290),
                a = r(55178),
                o = r(91027),
                i = r(63423),
                l = r(79856),
                s = r(71926);
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
                            e.stopPropagation(), e.preventDefault(), null == d || d();
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
        19379: (e, t, r) => {
            'use strict';
            r.d(t, { c: () => a });
            var n = r(99029),
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
                        (e.ForceNextWeb = 'force_next_web'),
                        (e.PreventNextWeb = 'prevent_next_web'),
                        (e.DownloadMobileApp = 'downloadMobileApp'),
                        (e.HideDeeplinkAndOnelink = 'hideDeeplinkAndOnelink'),
                        (e.YnisonDeviceId = 'ynisonDeviceId'),
                        (e.CrossFadeMode = 'crossFadeMode'),
                        (e.CustomPlayerThumbConfig = 'CustomPlayerThumbConfig'),
                        (e.BuySubscriptionParams = 'buySubscriptionParams'),
                        (e.MocksConfiguration = 'mocksConfiguration'),
                        (e.EnableCrossfadeDebugMode = 'EnableCrossfadeDebugMode'),
                        (e.EnableBurstDebounceDebugMode = 'EnableBurstDebounceDebugMode'),
                        (e.ConcertLocation = 'concertLocation'),
                        e
                    );
                })({});
        },
        21935: (e, t, r) => {
            'use strict';
            r.d(t, { J: () => i });
            var n = r(62060),
                a = r(55178),
                o = r(83808);
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
        24116: (e, t, r) => {
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
        27150: (e, t, r) => {
            'use strict';
            r.d(t, { z: () => n });
            var n = (function (e) {
                return (e.MUSIC = 'music'), e;
            })({});
        },
        27246: (e, t, r) => {
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
        28598: (e, t, r) => {
            'use strict';
            r.d(t, { N: () => n });
            var n = (function (e) {
                return (e.IntroPlan = 'IntroPlan'), (e.IntroUntilPlan = 'IntroUntilPlan'), (e.TrialPlan = 'TrialPlan'), (e.TrialUntilPlan = 'TrialUntilPlan'), e;
            })({});
        },
        47197: (e, t, r) => {
            'use strict';
            r.d(t, { Y: () => n });
            let n = { PLATFORM: 'web', MODE: 'iframe', AUTH_METHOD: 'default', OAUTH_TOKEN: null, SERVICE: 'music', SERVICE_CHANNEL: 'music_web' };
        },
        48322: (e, t, r) => {
            'use strict';
            r.d(t, { D: () => o });
            var n = r(21916),
                a = r(55178);
            let o = () => {
                let e = (0, n.usePathname)(),
                    t = (0, n.useSearchParams)();
                return (0, a.useMemo)(() => {
                    let r = t.size > 0 ? '?'.concat(t) : '';
                    return ''.concat(e).concat(r);
                }, [e, t]);
            };
        },
        49399: (e, t, r) => {
            'use strict';
            r.d(t, { G: () => n });
            var n = (function (e) {
                return (e.IDLE = 'IDLE'), (e.PENDING = 'PENDING'), (e.RESOLVE = 'RESOLVE'), (e.REJECT = 'REJECT'), e;
            })({});
        },
        54862: (e, t, r) => {
            'use strict';
            r.d(t, { d: () => s });
            var n,
                a = r(55178),
                o = {
                    810: (e) => {
                        e.exports = n || (n = r.t(a, 2));
                    },
                },
                i = {},
                l = {};
            (() => {
                Object.defineProperty(l, '__esModule', { value: !0 }), (l.useForceUpdateRef = void 0);
                let e = (function e(t) {
                    var r = i[t];
                    if (void 0 !== r) return r.exports;
                    var n = (i[t] = { exports: {} });
                    return o[t](n, n.exports, e), n.exports;
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
                l.__esModule;
            var s = l.useForceUpdateRef;
        },
        61945: (e, t, r) => {
            'use strict';
            r.d(t, { h: () => i });
            var n = r(55178),
                a = r(70204),
                o = r(34186);
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
        65650: (e, t, r) => {
            'use strict';
            r.d(t, { j: () => i });
            var n = r(55178),
                a = r(1770),
                o = r(27246);
            function i() {
                let e = (0, n.useContext)(a.x);
                return (0, n.useMemo)(() => ({ ...e, isContextDefined: e.page !== o.l.NO_VALUE }), [e]);
            }
        },
        71768: (e, t, r) => {
            'use strict';
            r.d(t, { r: () => s });
            var n = r(32290),
                a = r(96103),
                o = r(55178),
                i = r(1770),
                l = r(27150);
            let s = (0, a.PA)((e) => {
                let { page: t, places: r, shouldFetchOffers: a = !0, widgetServiceName: s = l.z.MUSIC, children: u } = e,
                    d = (0, o.useRef)(r),
                    c = (0, o.useMemo)(() => ({ page: t, places: d.current, shouldFetchOffers: a, widgetServiceName: s }), [t, a, s]);
                return (0, n.jsx)(i.x.Provider, { value: c, children: u });
            });
        },
        77322: (e, t, r) => {
            'use strict';
            r.d(t, { D: () => o });
            var n = r(70204),
                a = r(34186);
            let o = () => (0, a.N)().get(n.SX);
        },
        78842: (e) => {
            e.exports = { root: 'NavigationControls_root__V2A3_' };
        },
        79856: (e, t, r) => {
            'use strict';
            r.d(t, { W: () => l });
            var n = {
                    5881: (e, t, r) => {
                        function n() {
                            for (var e, t, r = 0, n = ''; r < arguments.length; )
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
                        r.r(t), r.d(t, { clsx: () => n, default: () => a });
                        let a = n;
                    },
                    631: (e, t, r) => {
                        r.r(t), r.d(t, { default: () => n });
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
                        (t.Fragment = Symbol.for('react.fragment')), (t.jsx = n), (t.jsxs = n);
                    },
                    4377: (e, t, r) => {
                        e.exports = r(9097);
                    },
                    3186: function (e, t, r) {
                        var n =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Shimmer = void 0);
                        let a = r(4377),
                            o = r(5881),
                            i = n(r(631));
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
                return n[e].call(r.exports, r, r.exports, o), r.exports;
            }
            (o.d = (e, t) => {
                for (var r in t) o.o(t, r) && !o.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
            }),
                (o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (o.r = (e) => {
                    'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 });
                });
            var i = {};
            (() => {
                Object.defineProperty(i, 'X', { value: !0 }), (i.q = void 0);
                var e = o(3186);
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
        87748: (e, t, r) => {
            'use strict';
            r.d(t, { t: () => a });
            var n = r(13598);
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
        95415: (e, t, r) => {
            'use strict';
            function n() {
                return window.PLATFORM;
            }
            r.d(t, { u: () => n });
        },
        98588: (e, t, r) => {
            'use strict';
            r.d(t, { R: () => l });
            var n = r(95415),
                a = r(87748),
                o = r(13598);
            let i = { WINDOWS: '95673843', MACOS: '95673848', LINUX: '98548790', WEB: '95673834' },
                l = () => {
                    switch ((0, a.t)((0, n.u)())) {
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
        98740: (e, t, r) => {
            'use strict';
            r.d(t, { D: () => N });
            var n = r(21916),
                a = r(55178),
                o = r(65650),
                i = r(70204),
                l = r(34186),
                s = r(28598),
                u = r(57594),
                d = r(19379),
                c = r(98588),
                f = r(77322),
                p = r(79406),
                g = r(48322),
                v = r(47197),
                _ = r(5701);
            let m = 'NO_VALUE',
                b = (e, t) => (t ? e : ''.concat(e, '_test')),
                S = function () {
                    var e;
                    let t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                        { experiments: r } = (0, u.g)(),
                        { pwTools: n } = (0, _.q)(t),
                        o = (0, g.D)(),
                        i = 'production' === (0, f.D)(),
                        l = (null == (e = r.getExperiment(p.z.ABTestIds)) ? void 0 : e.group) || '',
                        s = (0, a.useCallback)(
                            (e) => {
                                let { serviceSessionId: t } = e,
                                    { SERVICE: r, SERVICE_CHANNEL: a } = v.Y;
                                null == n ||
                                    n.plusPaymentEvents.frontSessionStart(
                                        { session_id: t, service: r, service_channel: a, external_test_ids: l, external_triggered_test_ids: '' },
                                        (0, c.R)(),
                                    );
                            },
                            [n, l],
                        ),
                        d = (0, a.useCallback)(
                            (e) => {
                                let { serviceSessionId: t, target: r, offersBatchId: a, offersPositionIds: o } = e;
                                null == n || n.plusPaymentEvents.loadOffersResulted({ session_id: t, target: r, offers_batch_id: a, resulted_offer_position_ids: o });
                            },
                            [n],
                        );
                    return {
                        frontSessionStart: s,
                        loadOffersResulted: d,
                        offersShown: (0, a.useCallback)(
                            (e) => {
                                let { serviceSessionId: t, offersBatchId: r, offersPositionId: a, position: l, page: s, place: u } = e;
                                (null == t ? void 0 : t.length) !== 0 &&
                                    (null == n ||
                                        n.plusPaymentEvents.offerShow({
                                            session_id: t,
                                            offers_batch_id: r,
                                            offers_position_id: a,
                                            position: l,
                                            page: b(s || m, i),
                                            place: u || m,
                                            from: m,
                                            url: o,
                                        }));
                            },
                            [n, o, i],
                        ),
                        offersClicked: (0, a.useCallback)(
                            (e) => {
                                let { serviceSessionId: t, offersBatchId: r, offersPositionId: a, page: l, place: s, offerPosition: u } = e;
                                (null == t ? void 0 : t.length) !== 0 &&
                                    (null == n ||
                                        n.plusPaymentEvents.offerClick({
                                            session_id: t,
                                            offers_batch_id: r,
                                            offers_position_id: a,
                                            position: u,
                                            page: b(l || m, i),
                                            place: s || m,
                                            from: m,
                                            url: o,
                                        }));
                            },
                            [n, o, i],
                        ),
                    };
                };
            var E = r(49399),
                O = r(27246);
            let h = function (e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        { frontSessionStart: r, loadOffersResulted: n } = S(t),
                        i = (0, o.j)(),
                        l = e.getLoadingState(i.page);
                    (0, a.useEffect)(() => {
                        l === E.G.RESOLVE && !e.isFrontSessionStartSent && t && (r({ serviceSessionId: e.serviceSessionId }), e.toggleIsFrontSessionStartSentTrue());
                    }, [e, l, e.isFrontSessionStartSent, r, i.page, t]),
                        (0, a.useEffect)(() => {
                            l === E.G.RESOLVE &&
                                !e.getIsLoadOffersResultSent(i.page) &&
                                t &&
                                (n(
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
                        }, [e, l, e.getIsLoadOffersResultSent, n, i, t]);
                },
                C = function (e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        r = arguments.length > 2 ? arguments[2] : void 0,
                        n = arguments.length > 3 ? arguments[3] : void 0,
                        s = arguments.length > 4 ? arguments[4] : void 0,
                        { offers: c } = (0, u.g)(),
                        f = c[e],
                        p = (0, o.j)(),
                        g = (null == f ? void 0 : f.getIsNeededToLoad(p.page)) && p.shouldFetchOffers,
                        v = (0, l.N)();
                    return (
                        (0, a.useEffect)(() => {
                            if (t && g) {
                                var e, a;
                                let t = v.get(i.vH).get(d.c.BuySubscriptionParams);
                                f.getData({
                                    communicationId: null != (e = null != r ? r : null == t ? void 0 : t.communicationId) ? e : void 0,
                                    campaignId: null != (a = null != n ? n : null == t ? void 0 : t.campaignId) ? a : void 0,
                                    page: p.page,
                                    places: p.places,
                                    widgetServiceName: p.widgetServiceName,
                                });
                            }
                        }, [t, f, r, n, s, f.isNeededToLoad, g, p, v]),
                        h(f, t),
                        f
                    );
                };
            var y = r(91027),
                x = r(42406);
            let N = (e) => {
                let { storeName: t, place: r, communicationId: c, campaignId: f, customTarget: p, offerElement: g, isEnabled: v = !0 } = e,
                    _ = (0, n.useRouter)(),
                    m = (0, l.N)(),
                    b = (0, o.j)().page,
                    { getIsShimmerVisible: E, getIsShimmerActive: O, getOffer: h, getTarget: N, serviceSessionId: A } = C(t, v, c, f, p),
                    P = N(b, r),
                    {
                        mainText: M,
                        mainTextA11y: I,
                        additionText: L,
                        tariffOffer: T,
                        offerPosition: w = 0,
                        offersBatchId: R = '',
                        offersPositionId: D = '',
                        place: k,
                        oneClickAvailable: U = !1,
                        oneClickDisclaimerText: B,
                        oneClickDisclaimerTextA11y: W,
                        subscriptionName: V,
                        offerText: j,
                        buttonText: z,
                    } = h(b, r) || {},
                    G = E(b),
                    Y = O(b),
                    { open: F, isOpened: H } = ((e) => {
                        let {
                                target: t,
                                tariffOfferName: r,
                                offersBatchId: n = '',
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
                            open: (0, a.useCallback)(() => {
                                l && (c(t), g(s), p(i), v(n), _(o), r && f(r), d.open());
                            }, [f, c, g, p, v, _, s, t, r, n, o, i, d, l]),
                            isOpened: d.isOpened,
                        };
                    })({
                        target: P,
                        serviceSessionId: A,
                        tariffOfferName: null == T ? void 0 : T.name,
                        offersBatchId: R,
                        offersPositionIds: D,
                        isEnabled: v,
                        isOneClick: U,
                    }),
                    { offersShown: q, offersClicked: K } = S(v),
                    X = (0, a.useCallback)(() => {
                        v && R && q({ serviceSessionId: A, offersBatchId: R, offersPositionId: D, position: w, page: b, place: k });
                    }, [v, q, A, R, D, w, b, k]),
                    J = (0, a.useCallback)(() => {
                        v && R && K({ serviceSessionId: A, offersBatchId: R, offersPositionId: D, page: b, place: k, offerPosition: w });
                    }, [v, K, A, R, D, b, k, w]),
                    Z = (0, a.useRef)(!1),
                    $ = (0, a.useRef)(!1),
                    Q = (0, a.useCallback)(() => {
                        ($.current = !0), (Z.current = !1), R && (X(), (Z.current = !0));
                    }, [R, X]);
                (0, a.useEffect)(() => {
                    $.current && R && !Z.current && (X(), (Z.current = !0));
                }, [R, X]),
                    ((e) => {
                        var t;
                        let { onShow: r, offerElement: n, isEnabled: o = !0 } = e,
                            i = (0, a.useRef)(null),
                            l = (0, a.useRef)(!1),
                            s = (0, a.useRef)(null),
                            u = (0, a.useRef)(!1),
                            d = (0, a.useRef)(null == n ? void 0 : n.isVisible),
                            { element: c, intersectionPropertyId: f, isVisible: p, requireTransition: g } = n || {},
                            v = (0, y.c)(r),
                            _ = (0, a.useMemo)(() => (c ? ((i.current = c), [i]) : []), [c]),
                            { isIntersecting: m } = null != (t = (0, x.BL)(_, { preflightCheck: !1 }, !c || !o)[null != f ? f : '']) ? t : {};
                        (0, a.useEffect)(() => {
                            g ? (!0 !== d.current && !0 === p && (u.current = !0), (d.current = p)) : (u.current = !0);
                        }, [p, g, f]),
                            (0, a.useEffect)(() => {
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
                            (0, a.useEffect)(() => {
                                if ((f && s.current !== f && ((l.current = !1), (s.current = f)), !f)) return;
                                let e = m && (void 0 === p || p) && !l.current && u.current,
                                    t = !1 === m || (void 0 !== p && !1 === p);
                                e ? (v(), (l.current = !0)) : t && l.current && (l.current = !1);
                            }, [m, p, v, f]);
                    })({ offerElement: g, isEnabled: v, onShow: Q }),
                    ((e) => {
                        let { onClick: t, offerElement: r, isEnabled: n } = e,
                            { element: o } = r || {};
                        (0, a.useEffect)(() => {
                            if (o && n) return o.addEventListener('click', t), () => o.removeEventListener('click', t);
                        }, [o, t, n]);
                    })({ offerElement: g, isEnabled: v, onClick: J });
                let ee = (0, a.useCallback)(() => {
                        let e = m.get(i.QG),
                            t = m.get(i.vH);
                        e.authorizationUrl &&
                            (t.set(d.c.Offer, {
                                target: P,
                                serviceSessionId: A,
                                offersBatchId: R,
                                isSilent: !1,
                                offersPositionIds: D,
                                tariffOfferName: null == T ? void 0 : T.name,
                            }),
                            _.push(e.authorizationUrl));
                    }, [m, _, P, A, T, R, D]),
                    et = (0, a.useMemo)(() => {
                        var e, t, r, n;
                        if ((null == T || null == (t = T.plans) || null == (e = t[0]) ? void 0 : e.typename) === s.N.TrialPlan)
                            return null == T || null == (n = T.plans) || null == (r = n[0]) ? void 0 : r.period;
                    }, [T]);
                return (0, a.useMemo)(
                    () => ({
                        mainText: M,
                        mainTextA11y: I,
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
                        oneClickDisclaimerTextA11y: W,
                        subscriptionName: V,
                        offerText: j,
                        buttonText: z,
                    }),
                    [L, H, Y, G, M, I, J, X, U, B, W, F, ee, et, V, j, z],
                );
            };
        },
    },
]);
