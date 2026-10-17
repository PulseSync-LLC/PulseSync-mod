(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2975],
    {
        8254: (e) => {
            e.exports = {
                icon: 'MainSuspenseLoader_icon__MceTD',
                'animate-pop': 'MainSuspenseLoader_animate-pop__vkpff',
                heartbeat: 'MainSuspenseLoader_heartbeat__6RDpM',
            };
        },
        16714: (e, t, n) => {
            'use strict';
            n.d(t, { MainSuspenseLoader: () => s });
            var a = n(25839),
                r = n(66738),
                o = n(8254),
                i = n.n(o);
            let s = (e) => {
                let { style: t } = e,
                    n = {
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
                return (0, a.jsx)('div', {
                    style: n,
                    children: (0, a.jsx)(r.I, {
                        variant: 'musicLogo',
                        style: { width: '100%', maxWidth: '100px', color: 'var(--ym-logo-color-primary-variant)' },
                        className: i().icon,
                    }),
                });
            };
        },
        57024: (e, t, n) => {
            'use strict';
            n.d(t, { C8: () => o, UC: () => i, dM: () => s, uV: () => l });
            var a = n(93690),
                r = n(58848);
            let o = (e) => {
                    if (void 0 === e || '' === e) return 'missing';
                    let t = Number(e);
                    return !Number.isFinite(t) || t < 0 ? 'invalid' : t < 86400 ? 'lt-1d' : t <= 2592e3 ? '1-30d' : 'gt-30d';
                },
                i = (e) => (e.uid ? 'authorized' : 'no-uid'),
                s = (e) => {
                    if (!(e instanceof a.m5) || !(0, r.N)(e.cause)) return 'unexpected';
                    let t = ((e) => {
                        if (!(0, r.N)(e.cause)) return;
                        let t = e.cause.response;
                        if ('object' == typeof t && null !== t) {
                            if ('statusCode' in t && 'number' == typeof t.statusCode) return t.statusCode;
                            if ('status' in t && 'number' == typeof t.status) return t.status;
                        }
                    })(e);
                    return void 0 === t ? 'transport' : 401 === t ? '401' : t >= 400 && t < 500 ? '4xx' : t >= 500 && t < 600 ? '5xx' : 'unexpected';
                },
                l = (e) => {
                    try {
                        var t;
                        null == (t = window.musicDesktop) || t.authorization.reportDiagnostic(e);
                    } catch (e) {}
                };
        },
        57875: (e, t, n) => {
            Promise.resolve().then(n.bind(n, 64664));
        },
        58848: (e, t, n) => {
            'use strict';
            n.d(t, { N: () => a });
            let a = (e) => 'object' == typeof e && null !== e && 'request' in e && null !== e.request;
        },
        64664: (e, t, n) => {
            'use strict';
            n.d(t, { OAuthPage: () => h });
            var a = n(25839),
                r = n(88204),
                o = n(84059),
                i = n(57246),
                s = n(74631);
            n(93588);
            var l = n(89288),
                u = n(36432),
                d = n(57024),
                c = n(36484),
                b = n(62562),
                g = n(27954),
                m = n(95067),
                p = n(16714);
            let f = (e) => (
                    e.startsWith('#') && (e = e.slice(1)),
                    e.split('&').reduce((e, t) => {
                        let [n = '', a = ''] = t.split('=');
                        return ((e[n] = a), e);
                    }, {})
                ),
                h = (0, r.PA)(() => {
                    let e = (0, b.N)(),
                        t = e.get(c.QG),
                        n = e.get(c.Zf),
                        r = e.get(c.oo),
                        h = (0, o.useSearchParams)(),
                        { location: y } = (0, g.g)(),
                        v = h.get('redirectUri') || '',
                        x = ''.concat(y.origin, '/').concat(v),
                        M = (0, i.A)(x);
                    return (
                        (0, s.useEffect)(() => {
                            r.remove(m.c.YmUid);
                            let e = window.location.hash;
                            ((0, d.uV)(
                                ((e) => {
                                    if (!e) return { stage: 'oauth-callback', result: 'missing', state: 'missing', ttl: 'missing' };
                                    try {
                                        let t = f(e),
                                            n = t.state ? 'present' : 'missing',
                                            a = (0, d.C8)(t.expires_in);
                                        if (t.error) return { stage: 'oauth-callback', result: 'error', state: n, ttl: a };
                                        if (t.expires_in && t.access_token && t.state) return { stage: 'oauth-callback', result: 'token', state: n, ttl: a };
                                        return { stage: 'oauth-callback', result: 'malformed', state: n, ttl: a };
                                    } catch (e) {
                                        return { stage: 'oauth-callback', result: 'malformed', state: 'missing', ttl: 'missing' };
                                    }
                                })(e),
                            ),
                                (window.location.hash = ''));
                            try {
                                if (e.length) {
                                    let n = f(e);
                                    if (n.expires_in && n.access_token && n.state) {
                                        var a;
                                        null == (a = t.setToken) || a.call(t, { expiresIn: parseInt(n.expires_in, 10), token: n.access_token, state: n.state });
                                    } else throw new u.t('No OAuth-token in URL returned by OAuth-service', { code: 'E_OAUTH_PAGE_NO_TOKEN' });
                                }
                            } catch (t) {
                                let e = new u.t('Error on OAuth page', { code: 'E_OAUTH_PAGE', cause: (0, l.y0)(t) });
                                n.error(e);
                            }
                            (0, o.redirect)(M);
                        }, [M, t, n, e, r]),
                        (0, a.jsx)(p.MainSuspenseLoader, {})
                    );
                });
        },
        95067: (e, t, n) => {
            'use strict';
            n.d(t, { c: () => r });
            var a = n(61943),
                r = (function (e) {
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
                        (e[(e.SavedUserLanguage = a.s)] = 'SavedUserLanguage'),
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
    },
    (e) => {
        (e.O(0, [2767, 6706, 8398, 4508, 2038, 4475, 5056, 7358], () => e((e.s = 57875))), (_N_E = e.O()));
    },
]);
