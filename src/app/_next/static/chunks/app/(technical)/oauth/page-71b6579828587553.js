(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2975],
    {
        4086: (e, t, r) => {
            'use strict';
            r.d(t, {
                $$: () => ec,
                $5: () => eR,
                $8: () => D,
                $I: () => p,
                $Y: () => eO,
                A4: () => R,
                CN: () => es,
                CR: () => m,
                DP: () => A,
                DT: () => e_,
                DV: () => ep,
                E: () => S,
                EN: () => o,
                Ez: () => eg,
                GV: () => k,
                Hm: () => u,
                JM: () => ea,
                K1: () => G,
                LC: () => eC,
                Lb: () => h,
                Lk: () => eu,
                N1: () => ef,
                NN: () => V,
                O9: () => T,
                OP: () => g,
                Oo: () => L,
                P0: () => P,
                P1: () => en,
                PL: () => ex,
                QG: () => I,
                RD: () => eB,
                RG: () => eT,
                S1: () => n,
                SD: () => $,
                SX: () => eS,
                TD: () => eh,
                TK: () => a,
                Tq: () => ew,
                U2: () => _,
                UB: () => eL,
                Ut: () => j,
                V3: () => b,
                V4: () => E,
                VR: () => eI,
                W5: () => ek,
                WA: () => K,
                X4: () => O,
                X8: () => Y,
                Xc: () => et,
                Zf: () => s,
                Zi: () => eA,
                Zl: () => eo,
                _1: () => f,
                aE: () => Q,
                by: () => ev,
                c9: () => ee,
                cZ: () => er,
                dA: () => eN,
                dh: () => eM,
                en: () => Z,
                eu: () => W,
                ff: () => eb,
                gd: () => ed,
                gu: () => c,
                jQ: () => J,
                ki: () => X,
                mD: () => i,
                mr: () => d,
                nM: () => q,
                ni: () => eU,
                ok: () => B,
                oo: () => x,
                qN: () => z,
                qT: () => em,
                qt: () => M,
                re: () => ei,
                ro: () => F,
                s_: () => eP,
                sv: () => el,
                tz: () => C,
                u2: () => ey,
                uM: () => eE,
                vH: () => N,
                vg: () => eD,
                wH: () => U,
                wK: () => y,
                xF: () => v,
                y$: () => l,
                yq: () => H,
                zj: () => w,
            });
            let o = 'AfterTrackResource',
                s = 'Logger',
                n = 'TechMetricsLogger',
                i = 'OtelSdk',
                a = 'ModelActionsLogger',
                u = 'HttpClient',
                c = 'HttpBeaconClient',
                l = 'Slam',
                d = 'UgcUploadHttpClient',
                g = 'BaseResourceHttpClient',
                R = 'ResourceHttpClient',
                m = 'ResourceBeaconClient',
                p = 'AccountResource',
                f = 'UsersResource',
                b = 'LandingResource',
                y = 'LandingBlocksResource',
                h = 'Landing3Resource',
                C = 'AlbumResource',
                S = 'SlidesResource',
                M = 'MusicExternalApiPrefixUrl',
                k = 'MusicResourceFactory',
                E = 'PublicConfig',
                v = 'ServerConfig',
                P = 'TokenConfig',
                x = 'Storage',
                A = 'CookieStorage',
                _ = 'LocalStorage',
                D = 'LibraryResource',
                w = 'LumenResource',
                L = 'TracksResource',
                N = 'SessionStorage',
                O = 'TopResource',
                T = 'ArtistsResource',
                I = 'Authorization',
                U = 'RedAlertResource',
                B = 'RotorResource',
                Y = 'WaveResource',
                H = 'SearchResource',
                V = 'SearchPlaylistResource',
                z = 'PlaylistResource',
                F = 'PlaylistsResource',
                q = 'PinResource',
                j = 'MetatagsResource',
                G = 'TagResource',
                W = 'FeedResource',
                $ = 'Wizard3Resource',
                K = 'CONTAINER_USER_ID_TOKEN',
                Q = 'PinsResource',
                X = 'MusicHistoryResource',
                Z = 'ChartResource',
                J = 'ClipsResource',
                ee = 'DynamicPagesResource',
                et = 'CONTAINER_I18N_STORAGE',
                er = 'LyricViewsResource',
                eo = 'NonMusicResource',
                es = 'DonationResource',
                en = 'LoaderResource',
                ei = 'PrefixlessResource',
                ea = 'StreamsResource',
                eu = 'FiltersResource',
                ec = 'UgcResource',
                el = 'CollectionResource',
                ed = 'AdsResource',
                eg = 'PersonalResource',
                eR = 'AvailabilityResource',
                em = 'GetFileInfoResource',
                ep = 'ResourcesFileInfoResource',
                ef = 'DisclaimersResource',
                eb = 'DisclaimerDictionary',
                ey = 'FamilyResource',
                eh = 'ChildrenLandingResource',
                eC = 'TelemetryResource',
                eS = 'Env',
                eM = 'PromoResource',
                ek = 'RumResource',
                eE = 'AcqOffers',
                ev = 'Ynison',
                eP = 'YnisonNewConnector',
                ex = 'LabelsResource',
                eA = 'RequestExecutionContext',
                e_ = 'ConcertsResource',
                eD = 'YaMetrikaController',
                ew = 'RumTransport',
                eL = 'YaMetrikaTransport',
                eN = 'WordsResource',
                eO = 'WheelResource',
                eT = 'MocksInitializer',
                eI = 'NetworkMonitorFactory',
                eU = 'SkeletonSdk',
                eB = 'TagSandbox';
        },
        15253: (e, t, r) => {
            'use strict';
            r.d(t, { c: () => s });
            var o = r(42824),
                s = (function (e) {
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
        41928: (e, t, r) => {
            'use strict';
            r.d(t, { B: () => n, N: () => i });
            var o = r(53548),
                s = r(39499);
            let n = (0, o.createContext)(null);
            function i() {
                let e = (0, o.useContext)(n);
                if (null === e) throw new s.t('Container cannot be null, please add a context provider', { code: 'E_CONTEXT_CONTAINER_NULL' });
                return e;
            }
        },
        42118: (e, t, r) => {
            Promise.resolve().then(r.bind(r, 68306));
        },
        60932: (e) => {
            e.exports = {
                icon: 'MainSuspenseLoader_icon__MceTD',
                'animate-pop': 'MainSuspenseLoader_animate-pop__vkpff',
                heartbeat: 'MainSuspenseLoader_heartbeat__6RDpM',
            };
        },
        67990: (e, t, r) => {
            'use strict';
            r.d(t, { N: () => o });
            let o = (e) => 'object' == typeof e && null !== e && 'request' in e && null !== e.request;
        },
        68306: (e, t, r) => {
            'use strict';
            r.d(t, { OAuthPage: () => b });
            var o = r(88800),
                s = r(84961),
                n = r(86072),
                i = r(53548);
            r(30282);
            var a = r(58390),
                u = r(35412),
                c = r(39499),
                l = r(99890),
                d = r(4086),
                g = r(41928),
                R = r(72288),
                m = r(15253),
                p = r(87396);
            let f = (e) => (
                    e.startsWith('#') && (e = e.slice(1)),
                    e.split('&').reduce((e, t) => {
                        let [r = '', o = ''] = t.split('=');
                        return ((e[r] = o), e);
                    }, {})
                ),
                b = (0, s.PA)(() => {
                    let e = (0, g.N)(),
                        t = e.get(d.QG),
                        r = e.get(d.Zf),
                        s = e.get(d.oo),
                        b = (0, a.useSearchParams)(),
                        { location: y } = (0, R.g)(),
                        h = b.get('redirectUri') || '',
                        C = ''.concat(y.origin, '/').concat(h),
                        S = (0, n.A)(C);
                    return (
                        (0, i.useEffect)(() => {
                            s.remove(m.c.YmUid);
                            let e = window.location.hash;
                            ((0, l.uV)(
                                ((e) => {
                                    if (!e) return { stage: 'oauth-callback', result: 'missing', state: 'missing', ttl: 'missing' };
                                    try {
                                        let t = f(e),
                                            r = t.state ? 'present' : 'missing',
                                            o = (0, l.C8)(t.expires_in);
                                        if (t.error) return { stage: 'oauth-callback', result: 'error', state: r, ttl: o };
                                        if (t.expires_in && t.access_token && t.state) return { stage: 'oauth-callback', result: 'token', state: r, ttl: o };
                                        return { stage: 'oauth-callback', result: 'malformed', state: r, ttl: o };
                                    } catch (e) {
                                        return { stage: 'oauth-callback', result: 'malformed', state: 'missing', ttl: 'missing' };
                                    }
                                })(e),
                            ),
                                (window.location.hash = ''));
                            try {
                                if (e.length) {
                                    let r = f(e);
                                    if (r.expires_in && r.access_token && r.state) {
                                        var o;
                                        null == (o = t.setToken) || o.call(t, { expiresIn: parseInt(r.expires_in, 10), token: r.access_token, state: r.state });
                                    } else throw new c.t('No OAuth-token in URL returned by OAuth-service', { code: 'E_OAUTH_PAGE_NO_TOKEN' });
                                }
                            } catch (t) {
                                let e = new c.t('Error on OAuth page', { code: 'E_OAUTH_PAGE', cause: (0, u.y0)(t) });
                                r.error(e);
                            }
                            (0, a.redirect)(S);
                        }, [S, t, r, e, s]),
                        (0, o.jsx)(p.MainSuspenseLoader, {})
                    );
                });
        },
        87396: (e, t, r) => {
            'use strict';
            r.d(t, { MainSuspenseLoader: () => a });
            var o = r(88800),
                s = r(52300),
                n = r(60932),
                i = r.n(n);
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
                    children: (0, o.jsx)(s.I, {
                        variant: 'musicLogo',
                        style: { width: '100%', maxWidth: '100px', color: 'var(--ym-logo-color-primary-variant)' },
                        className: i().icon,
                    }),
                });
            };
        },
        99890: (e, t, r) => {
            'use strict';
            r.d(t, { C8: () => n, UC: () => i, dM: () => a, uV: () => u });
            var o = r(89916),
                s = r(67990);
            let n = (e) => {
                    if (void 0 === e || '' === e) return 'missing';
                    let t = Number(e);
                    return !Number.isFinite(t) || t < 0 ? 'invalid' : t < 86400 ? 'lt-1d' : t <= 2592e3 ? '1-30d' : 'gt-30d';
                },
                i = (e) => (e.uid ? 'authorized' : 'no-uid'),
                a = (e) => {
                    if (!(e instanceof o.m5) || !(0, s.N)(e.cause)) return 'unexpected';
                    let t = ((e) => {
                        if (!(0, s.N)(e.cause)) return;
                        let t = e.cause.response;
                        if ('object' == typeof t && null !== t) {
                            if ('statusCode' in t && 'number' == typeof t.statusCode) return t.statusCode;
                            if ('status' in t && 'number' == typeof t.status) return t.status;
                        }
                    })(e);
                    return void 0 === t ? 'transport' : 401 === t ? '401' : t >= 400 && t < 500 ? '4xx' : t >= 500 && t < 600 ? '5xx' : 'unexpected';
                },
                u = (e) => {
                    try {
                        var t;
                        null == (t = window.musicDesktop) || t.authorization.reportDiagnostic(e);
                    } catch (e) {}
                };
        },
    },
    (e) => {
        (e.O(0, [7435, 6706, 8832, 2824, 1047, 4732, 763, 2670, 7358], () => e((e.s = 42118))), (_N_E = e.O()));
    },
]);
