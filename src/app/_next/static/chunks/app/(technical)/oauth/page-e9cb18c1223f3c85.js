(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2975],
    {
        9634: (e, t, r) => {
            'use strict';
            r.d(t, { MainSuspenseLoader: () => a });
            var o = r(32290),
                n = r(82586),
                s = r(82542),
                i = r.n(s);
            let a = (e) => {
                let { style: t } = e,
                    r = {
                        display: 'flex',
                        position: 'fixed',
                        insetBlockStart: 0,
                        insetInlineEnd: 0,
                        insetBlockEnd: 0,
                        insetInlineStart: 0,
                        zIndex: 'var(--ym-z-index-loader)',
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'hidden',
                        background: 'var(--ym-background-color-primary-enabled-basic)',
                        ...t,
                    };
                return (0, o.jsx)('div', {
                    style: r,
                    children: (0, o.jsx)(n.I, {
                        variant: 'musicLogo',
                        style: { width: '100%', maxWidth: '100px', color: 'var(--ym-logo-color-primary-variant)' },
                        className: i().icon,
                    }),
                });
            };
        },
        19379: (e, t, r) => {
            'use strict';
            r.d(t, { c: () => n });
            var o = r(99029),
                n = (function (e) {
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
                        (e[(e.SavedUserLanguage = o.s)] = 'SavedUserLanguage'),
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
        21650: (e, t, r) => {
            Promise.resolve().then(r.bind(r, 83469));
        },
        29222: (e, t, r) => {
            'use strict';
            r.d(t, { t: () => s });
            var o = (function () {
                    var e = function (t, r) {
                        return (e =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function (e, t) {
                                for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                            })(t, r);
                    };
                    return function (t, r) {
                        if ('function' != typeof r && null !== r) throw TypeError('Class extends value ' + String(r) + ' is not a constructor or null');
                        function o() {
                            this.constructor = t;
                        }
                        e(t, r), (t.prototype = null === r ? Object.create(r) : ((o.prototype = r.prototype), new o()));
                    };
                })(),
                n = function (e, t) {
                    var r = {};
                    for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && 0 > t.indexOf(o) && (r[o] = e[o]);
                    if (null != e && 'function' == typeof Object.getOwnPropertySymbols)
                        for (var n = 0, o = Object.getOwnPropertySymbols(e); n < o.length; n++)
                            0 > t.indexOf(o[n]) && Object.prototype.propertyIsEnumerable.call(e, o[n]) && (r[o[n]] = e[o[n]]);
                    return r;
                },
                s = (function (e) {
                    function t(r, o) {
                        void 0 === o && (o = {});
                        var s = this,
                            i = o.code,
                            a = o.data,
                            c = n(o, ['code', 'data']),
                            l = r || 'Internal error';
                        return (
                            Object.defineProperty((s = e.call(this, l, c) || this), 'name', { enumerable: !0, configurable: !0, writable: !0, value: 'BaseException' }),
                            Object.defineProperty(s, 'message', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                            Object.defineProperty(s, 'code', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                            Object.defineProperty(s, 'data', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                            Object.defineProperty(s, 'stack', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                            (s.message = l),
                            (s.code = void 0 === i ? 'E_INTERNAL' : i),
                            (s.data = void 0 === a ? {} : a),
                            (s.stack = Error(l).stack),
                            Object.setPrototypeOf(s, t.prototype),
                            s
                        );
                    }
                    return o(t, e), t;
                })(Error);
        },
        34186: (e, t, r) => {
            'use strict';
            r.d(t, { B: () => s, N: () => i });
            var o = r(29222),
                n = r(55178);
            let s = (0, n.createContext)(null);
            function i() {
                let e = (0, n.useContext)(s);
                if (null === e) throw new o.t('Container cannot be null, please add a context provider', { code: 'E_CONTEXT_CONTAINER_NULL' });
                return e;
            }
        },
        57594: (e, t, r) => {
            'use strict';
            r.d(t, { P: () => s, g: () => i });
            var o = r(29222),
                n = r(55178);
            let s = (0, n.createContext)(null);
            function i() {
                let e = (0, n.useContext)(s);
                if (null === e) throw new o.t('Store cannot be null, please add a context provider', { code: 'E_CONTEXT_STORE_NULL' });
                return e;
            }
        },
        70204: (e, t, r) => {
            'use strict';
            r.d(t, {
                $$: () => eo,
                $5: () => ea,
                $8: () => E,
                $I: () => h,
                $Y: () => eP,
                A4: () => d,
                CN: () => Q,
                CR: () => g,
                DP: () => k,
                DT: () => eS,
                E: () => v,
                EN: () => o,
                Ez: () => ei,
                Hm: () => i,
                JM: () => et,
                K1: () => Y,
                LC: () => eh,
                Lb: () => m,
                Lk: () => er,
                N1: () => el,
                NN: () => I,
                O9: () => A,
                OP: () => u,
                Oo: () => _,
                P0: () => S,
                P1: () => J,
                PL: () => ev,
                QG: () => T,
                RG: () => e_,
                SX: () => eb,
                TD: () => eg,
                TK: () => s,
                Tq: () => ek,
                U2: () => w,
                UB: () => ew,
                Ut: () => H,
                V3: () => p,
                VR: () => eC,
                W5: () => ef,
                WA: () => W,
                X4: () => M,
                X8: () => D,
                Xc: () => Z,
                Zf: () => n,
                Zi: () => eR,
                Zl: () => K,
                _1: () => b,
                aE: () => V,
                by: () => ey,
                c9: () => $,
                cZ: () => X,
                dA: () => eE,
                dh: () => ep,
                en: () => G,
                eu: () => F,
                ff: () => eu,
                gd: () => es,
                gu: () => a,
                jQ: () => q,
                ki: () => z,
                mr: () => l,
                nM: () => U,
                ni: () => eM,
                ok: () => L,
                oo: () => O,
                qN: () => B,
                qT: () => ec,
                re: () => ee,
                ro: () => j,
                sv: () => en,
                tw: () => R,
                tz: () => y,
                u2: () => ed,
                uM: () => em,
                vH: () => C,
                vg: () => eO,
                wH: () => x,
                wK: () => f,
                y$: () => c,
                yq: () => N,
                zj: () => P,
            });
            let o = 'AfterTrackResource',
                n = 'Logger',
                s = 'ModelActionsLogger',
                i = 'HttpClient',
                a = 'HttpBeaconClient',
                c = 'Slam',
                l = 'UgcUploadHttpClient',
                u = 'BaseResourceHttpClient',
                d = 'ResourceHttpClient',
                g = 'ResourceBeaconClient',
                h = 'AccountResource',
                b = 'UsersResource',
                p = 'LandingResource',
                f = 'LandingBlocksResource',
                m = 'Landing3Resource',
                y = 'AlbumResource',
                v = 'SlidesResource',
                R = 'Config',
                S = 'TokenConfig',
                O = 'Storage',
                k = 'CookieStorage',
                w = 'LocalStorage',
                E = 'LibraryResource',
                P = 'LumenResource',
                _ = 'TracksResource',
                C = 'SessionStorage',
                M = 'TopResource',
                A = 'ArtistsResource',
                T = 'Authorization',
                x = 'RedAlertResource',
                L = 'RotorResource',
                D = 'WaveResource',
                N = 'SearchResource',
                I = 'SearchPlaylistResource',
                B = 'PlaylistResource',
                j = 'PlaylistsResource',
                U = 'PinResource',
                H = 'MetatagsResource',
                Y = 'TagResource',
                F = 'FeedResource',
                W = 'CONTAINER_USER_ID_TOKEN',
                V = 'PinsResource',
                z = 'MusicHistoryResource',
                G = 'ChartResource',
                q = 'ClipsResource',
                $ = 'DynamicPagesResource',
                Z = 'CONTAINER_I18N_STORAGE',
                X = 'LyricViewsResource',
                K = 'NonMusicResource',
                Q = 'DonationResource',
                J = 'LoaderResource',
                ee = 'PrefixlessResource',
                et = 'StreamsResource',
                er = 'FiltersResource',
                eo = 'UgcResource',
                en = 'CollectionResource',
                es = 'AdsResource',
                ei = 'PersonalResource',
                ea = 'AvailabilityResource',
                ec = 'GetFileInfoResource',
                el = 'DisclaimersResource',
                eu = 'DisclaimerDictionary',
                ed = 'FamilyResource',
                eg = 'ChildrenLandingResource',
                eh = 'TelemetryResource',
                eb = 'Env',
                ep = 'PromoResource',
                ef = 'RumResource',
                em = 'AcqOffers',
                ey = 'Ynison',
                ev = 'LabelsResource',
                eR = 'RequestExecutionContext',
                eS = 'ConcertsResource',
                eO = 'YaMetrikaController',
                ek = 'RumTransport',
                ew = 'YaMetrikaTransport',
                eE = 'WordsResource',
                eP = 'WheelResource',
                e_ = 'MocksInitializer',
                eC = 'NetworkMonitorFactory',
                eM = 'SkeletonSdk';
        },
        80451: (e, t, r) => {
            'use strict';
            r.r(t),
                r.d(t, {
                    AVATAR_DEFAULT_SIZE: () => g,
                    BurstDebounce: () => T,
                    createAvatarUrl: () => b,
                    createAvatarVideoUrl: () => y,
                    createBurstDebounceDebugLogger: () => A,
                    createObjectFromError: () =>
                        function e(t) {
                            let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new WeakSet();
                            try {
                                if ('object' == typeof t && null !== t) {
                                    if (r.has(t)) return { '[Circular]': !0 };
                                    r.add(t);
                                    let o = R.reduce((o, n) => {
                                        let s = t[n];
                                        return (
                                            void 0 === s || (('cause' === n || 'error' === n) && 'object' == typeof s && null !== s ? (o[n] = e(s, r)) : (o[n] = s)), o
                                        );
                                    }, {});
                                    return (o.ownProperties = Object.getOwnPropertyNames(t).reduce((e, r) => (R.includes(r) || (e[r] = t[r]), e), {})), o;
                                }
                                return { error: t };
                            } catch (r) {
                                let e = { name: '', message: '' };
                                return r instanceof Error && ((e.name = r.name), (e.message = r.message)), { error: t, serializationError: e };
                            }
                        },
                    createVsid: () => v,
                    getDataAttrFromProps: () => E,
                    getLinkAttributesBase: () => S,
                    getTldHost: () => i,
                    hexToHsl: () => L,
                    hexToRgb: () => x,
                    httpsReplacer: () => d,
                    mergeTestIds: () => k,
                    parseJSONSafely: () => O,
                    sanitizeDOM: () => u,
                    stringifyJSONSafely: () => c,
                    toBoolean: () => s,
                });
            var o = r(31534);
            let n = ['1', 'true', 'on', 'yes'];
            function s(e) {
                return !!(!0 === e || 1 === e || ((0, o.A)(e) && n.includes(e.trim().toLowerCase())));
            }
            let i = (e, t, r) => e.replace(r, t);
            var a = r(78944);
            function c(e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                return a(e, { isJSON: t });
            }
            var l = r(15107);
            function u(e) {
                let t =
                    arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : { whiteList: { a: ['href', 'target', 'rel'], br: [], strong: [], em: [], sup: [], sub: [], p: [], span: ['class'], div: ['class'] } };
                return l(e, t);
            }
            let d = (e) => 'https://'.concat(e.replace(/^(https*:\/\/)/, '')),
                g = 100,
                h = [30, 50, 80, 100, 200, 300, 400, 600, 800, 1e3],
                b = (e, t, r) => {
                    let o;
                    if ('orig' === t) o = 'orig';
                    else {
                        let e = t ? ((e) => [...h].sort((t, r) => Math.abs(e - t) - Math.abs(e - r))[0] || g)(t) : g;
                        o = r ? 'm'.concat(e, 'x').concat(e) : ''.concat(e, 'x').concat(e);
                    }
                    return d(e.replace('%%', o));
                },
                p = [
                    { width: 400, height: 300 },
                    { width: 1280, height: 720 },
                    { width: 1920, height: 1080 },
                ],
                f = p[0],
                m = (e) => ''.concat(e.width, 'x').concat(e.height),
                y = (e, t) => {
                    let r;
                    return (
                        (r = 'orig' === t ? 'orig' : t ? ((e) => m([...p].sort((t, r) => Math.abs(e - t.height) - Math.abs(e - r.height))[0] || f))(t) : m(f)),
                        d(e.replace('%%', r))
                    );
                };
            function v(e, t) {
                let r = '';
                for (; r.length < 44; ) r += (Math.random() + 1).toString(36).substring(3);
                r = r.slice(0, 44);
                let o = e.toString().slice(0, 10);
                return ''.concat(r, 'x').concat(t, 'x0001x').concat(o);
            }
            let R = ['name', 'message', 'stack', 'cause', 'colno', 'lineno', 'filename', 'error', 'data', 'code', 'type', 'detail'],
                S = (e, t) => {
                    let r,
                        { params: o = {}, query: n = {}, options: s = {} } = null != t ? t : {},
                        { isExternalLink: i, host: a, linkType: c, lang: l } = s;
                    if (
                        ((r = Object.entries(o).reduce((e, t) => {
                            let [r, o] = t;
                            return e.replace(':'.concat(r), encodeURIComponent(String(o)));
                        }, e)),
                        Object.keys(n).length && !c)
                    ) {
                        let [e, ...t] = r.split('#'),
                            o = t.length > 0 ? '#'.concat(t.join('#')) : '',
                            s = ((e, t) => {
                                let r = {};
                                for (let [t, o] of Object.entries(e)) r[t] = String(o);
                                let o = new URLSearchParams(r).toString();
                                return o ? (t ? '&'.concat(o) : '?'.concat(o)) : '';
                            })(n, null == e ? void 0 : e.includes('?'));
                        r = ''.concat(e).concat(s).concat(o);
                    }
                    let u = !a;
                    u || (a.endsWith('/') && (r = r.startsWith('/') ? r.substring(1) : r), (r = ''.concat(a).concat(r)));
                    let d = null != i ? i : !u,
                        g = {
                            href: r,
                            target: ((e, t) => {
                                if (!e) return t ? '_blank' : '_self';
                            })(c, d),
                            rel: ((e, t) => e || (t ? 'noreferrer noopener' : ''))(c, d),
                        };
                    return 'alternate' === c && l && (g.hrefLang = l), g;
                };
            function O(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : console;
                if (!e) return null;
                try {
                    return JSON.parse(e);
                } catch (e) {
                    return (e instanceof Error || 'string' == typeof e) && t.error(e), null;
                }
            }
            function k(e, t) {
                return [
                    ...(e || []),
                    ...(t || '')
                        .split(';')
                        .map((e) => {
                            let t = e.trim();
                            if (!t) return;
                            let r = t.split(/[,:]/)[0];
                            if (!r) return;
                            let o = Number(r);
                            return Number.isNaN(o) ? void 0 : o;
                        })
                        .filter((e) => void 0 !== e),
                ];
            }
            let w = /^data-[a-zA-Z0-9-_]+$/,
                E = (e) =>
                    Object.entries(e).reduce((e, t) => {
                        let [r, o] = t;
                        return w.test(r) && 'string' == typeof o && (e[r] = o), e;
                    }, {});
            var P = r(91945),
                _ = r(62060);
            let C = '[BurstDebounce]',
                M = { event: 'color: #0891B2; font-weight: 700', state: 'color: #7C3AED; font-weight: 600', lifecycle: 'color: #D97706; font-weight: 700' };
            function A() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return {
                    logGroup: function (t, r, o) {
                        var n, s;
                        if (!e) return;
                        let i = M[null != (n = null == o ? void 0 : o.type) ? n : 'state'];
                        null != (s = null == o ? void 0 : o.collapsed) && s
                            ? console.groupCollapsed('%c'.concat(C, ' ').concat(t), i)
                            : console.group('%c'.concat(C, ' ').concat(t), i),
                            r && (Object.values(r).some((e) => null !== e && 'object' == typeof e) ? console.log('%c'.concat(C), 'color: #6B7280', r) : console.table(r)),
                            console.groupEnd();
                    },
                };
            }
            class T {
                invoke() {
                    let e = Date.now();
                    if ((this.refreshBurstIdle(e), this.registerAndCheckBurst(e), this.isBurstMode)) {
                        (this.isPendingState = !0), this.logEvent('invoke -> schedule debounced callback'), this.debouncedCallback();
                        return;
                    }
                    this.logEvent('invoke -> execute callback immediately'), this.callback();
                }
                cancel() {
                    (this.isPendingState = !1), this.debouncedCallback.cancel(), this.logLifecycle('cancel pending callback');
                }
                get isPending() {
                    return this.isPendingState;
                }
                dispose() {
                    (this.isPendingState = !1),
                        this.debouncedCallback.cancel(),
                        (this.recentTimestamps = []),
                        (this.isBurstMode = !1),
                        (this.lastInvokeAt = 0),
                        this.logLifecycle('dispose instance state');
                }
                refreshBurstIdle(e) {
                    this.isBurstMode &&
                        e - this.lastInvokeAt > this.config.burstExitIdleMs &&
                        ((this.isBurstMode = !1), (this.recentTimestamps = []), this.logState('burst mode reset by idle timeout'));
                }
                logEvent(e) {
                    this.debugLogger.logGroup('event: '.concat(e), this.getDebugSnapshot(), { type: 'event' });
                }
                logState(e) {
                    this.debugLogger.logGroup('state: '.concat(e), this.getDebugSnapshot(), { type: 'state' });
                }
                logLifecycle(e, t) {
                    this.debugLogger.logGroup('lifecycle: '.concat(e), null != t ? t : this.getDebugSnapshot(), { type: 'lifecycle' });
                }
                getDebugSnapshot() {
                    let e = Date.now();
                    return {
                        isBurstMode: this.isBurstMode,
                        pending: this.isPendingState,
                        recentTimestampsLength: this.recentTimestamps.length,
                        msSinceLastInvoke: 0 === this.lastInvokeAt ? null : e - this.lastInvokeAt,
                    };
                }
                registerAndCheckBurst(e) {
                    let t = this.config.burstThreshold;
                    for (this.recentTimestamps.push(e); this.recentTimestamps.length > t; ) this.recentTimestamps.shift();
                    if (this.recentTimestamps.length === t) {
                        let t = this.recentTimestamps[0];
                        void 0 !== t && e - t <= this.config.burstWindowMs && (this.isBurstMode = !0);
                    }
                    this.lastInvokeAt = e;
                }
                constructor({ callback: e, config: t, enableDebugLogging: r = !1 }) {
                    if (
                        ((0, P._)(this, 'callback', void 0),
                        (0, P._)(this, 'config', void 0),
                        (0, P._)(this, 'recentTimestamps', []),
                        (0, P._)(this, 'isBurstMode', !1),
                        (0, P._)(this, 'lastInvokeAt', 0),
                        (0, P._)(this, 'debouncedCallback', void 0),
                        (0, P._)(this, 'isPendingState', !1),
                        (0, P._)(this, 'debugLogger', void 0),
                        !Number.isInteger(t.burstThreshold) || t.burstThreshold < 1)
                    )
                        throw RangeError('BurstDebounce config.burstThreshold must be a positive integer, got '.concat(t.burstThreshold));
                    (this.callback = e),
                        (this.config = t),
                        (this.debugLogger = A(r)),
                        this.logLifecycle('created', { ...this.config }),
                        (this.debouncedCallback = (0, _.A)(() => {
                            (this.isPendingState = !1), this.logEvent('debounced callback execute'), this.callback();
                        }, t.delay));
                }
            }
            let x = (e) => ({ r: parseInt(e.slice(1, 3), 16), g: parseInt(e.slice(3, 5), 16), b: parseInt(e.slice(5, 7), 16) }),
                L = (e) => {
                    let { r: t, g: r, b: o } = x(e),
                        n = Math.min((t /= 255), (r /= 255), (o /= 255)),
                        s = Math.max(t, r, o),
                        i = s - n,
                        a = 0,
                        c = 0,
                        l = (n + s) / 2;
                    return (
                        (a = Math.round(60 * (a = 0 === i ? 0 : s === t ? ((r - o) / i) % 6 : s === r ? (o - t) / i + 2 : (t - r) / i + 4))) < 0 && (a += 360),
                        0 !== i && (c = i / (1 - Math.abs(2 * l - 1))),
                        { h: a, s: Number((100 * c).toFixed(1)), l: Number((100 * l).toFixed(1)) }
                    );
                };
        },
        82542: (e) => {
            e.exports = {
                icon: 'MainSuspenseLoader_icon__MceTD',
                'animate-pop': 'MainSuspenseLoader_animate-pop__vkpff',
                heartbeat: 'MainSuspenseLoader_heartbeat__6RDpM',
            };
        },
        83469: (e, t, r) => {
            'use strict';
            r.d(t, { OAuthPage: () => p });
            var o = r(32290),
                n = r(29222),
                s = r(96103),
                i = r(21916),
                a = r(33265),
                c = r(55178),
                l = r(80451),
                u = r(70204),
                d = r(34186),
                g = r(57594),
                h = r(19379),
                b = r(9634);
            let p = (0, s.PA)(() => {
                let e = (0, d.N)(),
                    t = e.get(u.QG),
                    r = e.get(u.Zf),
                    s = e.get(u.oo),
                    p = (0, i.useSearchParams)(),
                    { location: f } = (0, g.g)(),
                    m = p.get('redirectUri') || '',
                    y = ''.concat(f.origin, '/').concat(m),
                    v = (0, a.A)(y);
                return (
                    (0, c.useEffect)(() => {
                        s.remove(h.c.YmUid);
                        let e = window.location.hash;
                        window.location.hash = '';
                        try {
                            if (e.length) {
                                let r = ((e) => (
                                    e.startsWith('#') && (e = e.slice(1)),
                                    e.split('&').reduce((e, t) => {
                                        let [r = '', o = ''] = t.split('=');
                                        return (e[r] = o), e;
                                    }, {})
                                ))(e);
                                if (r.expires_in && r.access_token && r.state) {
                                    var o;
                                    null == (o = t.setToken) || o.call(t, { expiresIn: parseInt(r.expires_in, 10), token: r.access_token, state: r.state });
                                } else throw new n.t('No OAuth-token in URL returned by OAuth-service', { code: 'E_OAUTH_PAGE_NO_TOKEN' });
                            }
                        } catch (t) {
                            let e = new n.t('Error on OAuth page', { code: 'E_OAUTH_PAGE', cause: (0, l.createObjectFromError)(t) });
                            r.error(e);
                        }
                        (0, i.redirect)(v);
                    }, [v, t, r, e, s]),
                    (0, o.jsx)(b.MainSuspenseLoader, {})
                );
            });
        },
    },
    (e) => {
        e.O(0, [6639, 6706, 8892, 1410, 8219, 2586, 4220, 9562, 7358], () => e((e.s = 21650))), (_N_E = e.O());
    },
]);
