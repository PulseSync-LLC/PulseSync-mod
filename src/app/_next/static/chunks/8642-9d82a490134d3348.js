'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8642],
    {
        223: (e, t, a) => {
            a.d(t, { Q: () => l, d: () => r });
            let i = new WeakMap(),
                r = (e, t) => {
                    i.set(e, t);
                },
                l = (e) => {
                    var t;
                    return null == (t = i.get(e)) ? void 0 : t();
                };
        },
        554: (e, t, a) => {
            a.d(t, { m: () => i });
            let i = (e) => {
                let { uid: t, kind: a } = e;
                return ''.concat(t, ':').concat(a);
            };
        },
        2215: (e, t, a) => {
            a.d(t, { a: () => i });
            var i = (function (e) {
                return ((e[(e.CREATED = 0)] = 'CREATED'), (e[(e.LIKED = 1)] = 'LIKED'), e);
            })({});
        },
        2258: (e, t, a) => {
            var i;
            (a.d(t, { v: () => i }),
                (function (e) {
                    ((e.ON_START_BAR_BELOW = 'music-web-on-start-bar-bellow'), (e.ON_START_FULLSCREEN = 'music-web-on-start-fullscreen'));
                })(i || (i = {})));
        },
        3409: (e, t, a) => {
            var i;
            (a.d(t, { b: () => i }),
                (function (e) {
                    ((e.ALBUM = 'ALBUM'),
                        (e.ARTIST = 'ARTIST'),
                        (e.PLAYLIST = 'PLAYLIST'),
                        (e.WAVE = 'WAVE'),
                        (e.CLIP = 'CLIP'),
                        (e.GENERATIVE = 'GENERATIVE'),
                        (e.EMPTY = 'EMPTY'),
                        (e.OTHER = 'OTHER'));
                })(i || (i = {})));
        },
        3474: (e, t, a) => {
            a.d(t, { _: () => s });
            var i,
                r = a(5120);
            !(function (e) {
                ((e.PRIMARY = 'primary'), (e.SECONDARY = 'secondary'), (e.PLUS = 'plus'));
            })(i || (i = {}));
            var l = a(7802);
            let n = r.gK.model('CommunicationButtonAction', {
                    id: r.gK.maybeNull(r.gK.string),
                    type: r.gK.maybeNull(r.gK.enumeration(Object.values(l.T))),
                    value: r.gK.maybeNull(r.gK.string),
                    communicationId: r.gK.maybeNull(r.gK.string),
                }),
                s = r.gK.model('CommunicationButton', {
                    text: r.gK.maybeNull(r.gK.string),
                    color: r.gK.maybeNull(r.gK.enumeration(Object.values(i))),
                    action: r.gK.maybeNull(n),
                    textColor: r.gK.maybeNull(r.gK.string),
                });
        },
        3629: (e, t, a) => {
            a.d(t, { W4: () => l, qV: () => i, yc: () => r });
            let i = Symbol(),
                r = Symbol(),
                l = Symbol();
        },
        5503: (e, t, a) => {
            a.d(t, { w: () => i });
            var i = (function (e) {
                return ((e.DISABLED = 'DISABLED'), (e.ENABLED = 'ENABLED'), e);
            })({});
        },
        6648: (e, t, a) => {
            a.d(t, { q: () => i });
            let i = (e) => Array.from(new Set(e)).sort();
        },
        7227: (e, t, a) => {
            a.d(t, { l: () => l });
            var i = a(5120),
                r = a(93512);
            let l = (e, t) => {
                var a;
                return (0, i.wg)({ title: e.name, seeds: e.seeds, description: e.description, type: null != (a = e.type) ? a : void 0, agent: (0, r.K)(t) });
            };
        },
        7364: (e, t, a) => {
            a.d(t, { w: () => n });
            var i = a(5120),
                r = a(63565),
                l = a(15656);
            let n = i.gK
                .model('Sort', { sortBy: i.gK.maybe(i.gK.enumeration(Object.values(r.g))), sortOrder: i.gK.maybe(i.gK.enumeration(Object.values(l.x))) })
                .actions((e) => ({
                    setSortBy(t) {
                        e.sortBy = t;
                    },
                    setSortOrder(t) {
                        e.sortOrder = t;
                    },
                }));
        },
        7802: (e, t, a) => {
            var i;
            (a.d(t, { T: () => i }),
                (function (e) {
                    ((e.CLOSE = 'close'), (e.LINK = 'link'), (e.PAYWALL = 'paywall'));
                })(i || (i = {})));
        },
        10363: (e, t, a) => {
            a.d(t, { H: () => r });
            var i = a(19207);
            let r = (e) => (0, i.h)(e.data.concert, e.data.minPrice);
        },
        11028: (e, t, a) => {
            a.d(t, { C: () => i });
            var i = (function (e) {
                return (
                    (e.SUBSCRIPTION_IS_NOT_AVAILABLE = 'SUBSCRIPTION_IS_NOT_AVAILABLE'), (e.INVITATION_IS_INVALID = 'INVITATION_IS_INVALID'), (e.UNKNOWN = 'UNKNOWN'), e
                );
            })({});
        },
        11899: (e, t, a) => {
            a.d(t, { DQ: () => l, em: () => i, l8: () => r });
            let i = 'WCvtCKnr84oYEPnRuvUo',
                r = 'PAYMENT_COMPLETED',
                l = 500;
        },
        12622: (e, t, a) => {
            a.d(t, { e: () => l });
            var i = a(5120),
                r = a(93512);
            let l = (e) => {
                var t, a, l, n;
                return (0, i.wg)({
                    title: e.title,
                    description: e.header,
                    seeds: e.seeds,
                    animationUrl: e.animationUrl,
                    backgroundImageUrl: e.backgroundImageUrl,
                    imageUrl: e.imageUrl,
                    colors: {
                        average: null != (l = null == (t = e.colors) ? void 0 : t.average) ? l : '',
                        waveText: null != (n = null == (a = e.colors) ? void 0 : a.waveText) ? n : '',
                    },
                    agent: (0, r.K)(e.agent),
                    type: e.type,
                });
            };
        },
        12739: (e, t, a) => {
            a.d(t, { Q: () => l });
            var i = a(82212);
            let r = [i.t.ARTIST_POPULAR_TRACKS_AND_RELEASES, i.t.FAMILIAR_YOU_AND_ARTIST_PICK],
                l = (e) => r.includes(e.type);
        },
        12906: (e, t, a) => {
            a.d(t, { m: () => l });
            var i = a(5120),
                r = a(57285);
            let l = (e) => {
                let t = (0, r.n)(e);
                return (0, i.wg)(t);
            };
        },
        12946: (e, t, a) => {
            var i;
            (a.d(t, { l: () => i }),
                (function (e) {
                    ((e.PLAYLIST_LIKED_TAB = 'liked_playlist_tab'), (e.PLAYLIST_CREATED_TAB = 'created_playlist_tab'));
                })(i || (i = {})));
        },
        13607: (e, t, a) => {
            var i;
            (a.d(t, { _: () => i }),
                (function (e) {
                    ((e.UP = 'up'), (e.DOWN = 'down'), (e.SAME = 'same'), (e.NEW = 'new'));
                })(i || (i = {})));
        },
        14283: (e, t, a) => {
            a.d(t, { a: () => s });
            var i = a(5120),
                r = a(51724),
                l = a(12906),
                n = a(53399);
            let s = (e) => {
                var t, a;
                let { artist: s, trailer: o, isComposer: d, likesCount: g } = e,
                    u = (0, n.m)(s.decomposed),
                    { available: c, disclaimers: m } = (0, r.f)(s);
                return (0, i.wg)({
                    id: String(s.id),
                    name: s.name,
                    coverUri: null == (t = s.cover) ? void 0 : t.uri,
                    various: s.various,
                    decomposed: u,
                    isAvailable: c,
                    disclaimers: m,
                    isComposer: d,
                    averageColor: null == (a = s.cover) ? void 0 : a.color,
                    trailer: (0, l.m)(o),
                    likesCount: g,
                });
            };
        },
        14661: (e, t, a) => {
            var i;
            (a.d(t, { n: () => i }),
                (function (e) {
                    ((e.ALL = 'all'),
                        (e.TRACK = 'track'),
                        (e.ALBUM = 'album'),
                        (e.ARTIST = 'artist'),
                        (e.PLAYLIST = 'playlist'),
                        (e.WAVE = 'wave'),
                        (e.GENRE = 'genre'),
                        (e.USER = 'user'),
                        (e.UGC_TRACK = 'ugc_track'),
                        (e.PODCAST = 'podcast'),
                        (e.PODCAST_EPISODE = 'podcast_episode'),
                        (e.VIDEO = 'video'),
                        (e.LYRICS = 'lyrics'),
                        (e.CLIP = 'clip'),
                        (e.BOOK = 'book'),
                        (e.CONCERT = 'concert'));
                })(i || (i = {})));
        },
        14841: (e, t, a) => {
            a.d(t, { q: () => i });
            let i = (e) => ''.concat(e.wheelId, '-').concat(e.eventType, '-').concat(e.item.id);
        },
        15253: (e, t, a) => {
            a.d(t, { c: () => r });
            var i = a(42824),
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
                        (e.ForcedLoginAttempt = 'forcedLoginAttempt'),
                        (e.ArtistDonationButtonOnbordingShowed = 'ArtistDonationButtonOnbordingShowed'),
                        (e.TrailerButtonOnbordingShowed = 'TrailerButtonOnbordingShowed'),
                        (e.ConcertsTabOnboardingShowed = 'ConcertsTabOnboardingShowed'),
                        (e[(e.SavedUserLanguage = i.s)] = 'SavedUserLanguage'),
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
        15656: (e, t, a) => {
            var i;
            (a.d(t, { x: () => i }),
                (function (e) {
                    ((e.ASC = 'asc'), (e.DESC = 'desc'));
                })(i || (i = {})));
        },
        17342: (e, t, a) => {
            a.d(t, { v: () => i });
            let i = (e) => !!(e && 'object' == typeof e && 'source' in e);
        },
        18143: (e, t, a) => {
            var i;
            (a.d(t, { T: () => i }),
                (function (e) {
                    ((e.OK = 'ok'), (e.ERROR = 'error'));
                })(i || (i = {})));
        },
        18243: (e, t, a) => {
            a.d(t, { f: () => r });
            var i = a(42078);
            let r = (e) => {
                let { uid: t, kind: a } = e;
                return ''.concat(i._.PLAYLIST_ITEM).concat(t, '_').concat(a);
            };
        },
        18344: (e, t, a) => {
            var i;
            (a.d(t, { R: () => i }),
                (function (e) {
                    ((e.RADIAL = 'RADIAL'), (e.STACK = 'STACK'));
                })(i || (i = {})));
        },
        19207: (e, t, a) => {
            a.d(t, { h: () => s });
            var i = a(5120),
                r = a(19815),
                l = a(58400),
                n = a(47255);
            let s = (e, t) => {
                var a, s, o, d;
                let { uri: g, color: u } = e.cover || {};
                return (0, i.wg)({
                    id: e.id,
                    title: e.concertTitle,
                    city: e.city,
                    place: e.place,
                    datetime: e.datetime && (0, l.A)(e.datetime),
                    contentRating: e.contentRating,
                    dataSessionId: e.dataSessionId,
                    cover: { uri: g, color: u },
                    rank: e.rank,
                    cashbackTitle: null == (a = e.cashback) ? void 0 : a.title,
                    cashbackValuePercent: null == (s = e.cashback) ? void 0 : s.valuePercent,
                    price: (0, n.J)(t),
                    eventKind: null != (d = null == (o = e.eventInfo) ? void 0 : o.type) ? d : r.Z.UNSPECIFIED,
                });
            };
        },
        19815: (e, t, a) => {
            var i;
            (a.d(t, { Z: () => i }),
                (function (e) {
                    ((e.CONCERT = 'concert'), (e.FESTIVAL = 'festival'), (e.TRIBUTE = 'tribute'), (e.MUSICAL = 'musical'), (e.UNSPECIFIED = 'unspecified'));
                })(i || (i = {})));
        },
        20012: (e, t, a) => {
            a.d(t, { r: () => i });
            var i = (function (e) {
                return ((e.TRACK = 'track'), (e.TEXT = 'text'), e);
            })({});
        },
        21127: (e, t, a) => {
            a.d(t, { f: () => l });
            var i = a(5120),
                r = a(18344);
            let l = i.gK.model('MixItem', {
                id: i.gK.string,
                title: i.gK.string,
                weblink: i.gK.string,
                covers: i.gK.maybe(i.gK.array(i.gK.string)),
                imagesLayoutType: i.gK.enumeration(Object.values(r.R)),
            });
        },
        21944: (e, t, a) => {
            a.d(t, { IR: () => r, JQ: () => i, bL: () => n, ew: () => l });
            let i = 220,
                r = 88,
                l = 'px',
                n = '{lang}';
        },
        22786: (e, t, a) => {
            var i;
            (a.d(t, { y: () => i }),
                (function (e) {
                    ((e.DEFAULT = 'DEFAULT'), (e.CONTROL = 'CONTROL'), (e.CONTROL_ACCENT = 'CONTROL_ACCENT'), (e.MULTIVIBE = 'MULTIVIBE'), (e.PROMO = 'PROMO'));
                })(i || (i = {})));
        },
        22983: (e, t, a) => {
            var i;
            (a.d(t, { y: () => i }),
                (function (e) {
                    ((e.MIX = 'MIX'), (e.Q2V = 'Q2V'));
                })(i || (i = {})));
        },
        23341: (e, t, a) => {
            a.d(t, { j: () => r });
            var i = a(5120);
            let r = i.gK.model('Pager', { page: i.gK.number, perPage: i.gK.number, total: i.gK.number, lastPage: i.gK.maybe(i.gK.boolean) });
        },
        26e3: (e, t, a) => {
            a.d(t, { l: () => i });
            var i = (function (e) {
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
        26208: (e, t, a) => {
            a.d(t, { f: () => i });
            var i = (function (e) {
                return (
                    (e.AUDIO = 'AUDIO'),
                    (e.TOP_BANNER = 'TOP_BANNER'),
                    (e.SIDE_BANNER = 'SIDE_BANNER'),
                    (e.TOUCH_BANNER = 'TOUCH_BANNER'),
                    (e.PLAYLIST_BRANDING = 'PLAYLIST_BRANDING'),
                    (e.AXE_ENTITY_BRANDING = 'AXE_ENTITY_BRANDING'),
                    (e.PLAYER_BRANDING = 'PLAYER_BRANDING'),
                    e
                );
            })({});
        },
        27395: (e, t, a) => {
            a.d(t, { Rk: () => s, VN: () => l, nd: () => n, vY: () => r });
            var i = a(70025);
            let r = 10,
                l = 1,
                n = [i.O.ABOUT, i.O.TRACKS],
                s = 5;
        },
        27506: (e, t, a) => {
            a.d(t, { F: () => i });
            var i = (function (e) {
                return ((e.OK = 'ok'), (e.ERROR = 'error'), e);
            })({});
        },
        27984: (e, t, a) => {
            a.d(t, { H: () => i });
            var i = (function (e) {
                return ((e.ALBUM = 'album'), (e.ARTIST = 'artist'), (e.PLAYLIST = 'playlist'), (e.TRACK = 'track'), e);
            })({});
        },
        28870: (e, t, a) => {
            a.d(t, { K: () => r });
            var i = a(5120);
            let r = i.gK.model('CustomPlayerThumb', { href: i.gK.string, width: i.gK.number, height: i.gK.number });
        },
        30064: (e, t, a) => {
            a.d(t, { a: () => o });
            var i = a(5120),
                r = a(50633),
                l = a(97956),
                n = a(63425);
            let s = i.gK.model('Price', { value: i.gK.number, currency: i.gK.string }),
                o = i.gK
                    .model('Concert', {
                        id: i.gK.string,
                        dataSessionId: i.gK.maybe(i.gK.string),
                        datetime: i.gK.maybe(i.gK.string),
                        city: i.gK.maybe(i.gK.string),
                        place: i.gK.maybe(i.gK.string),
                        contentRating: i.gK.maybe(i.gK.string),
                        price: i.gK.maybe(s),
                        cashbackTitle: i.gK.maybe(i.gK.string),
                        cashbackValuePercent: i.gK.maybe(i.gK.number),
                        title: i.gK.maybe(i.gK.string),
                        cover: i.gK.maybe(n.$),
                        rank: i.gK.maybe(i.gK.number),
                        eventKind: i.gK.maybe(i.gK.string),
                    })
                    .views((e) => ({
                        get isCashbackExperimentEnabled() {
                            let { experiments: t } = (0, r.M)(e);
                            return t.checkExperiment(l.z.WebNextConcertsCashback, 'on');
                        },
                        get isIdentityExperimentEnabled() {
                            let { experiments: t } = (0, r.M)(e);
                            return t.checkExperiment(l.z.WebNextConcertsIdentityEventType, 'on');
                        },
                    }))
                    .actions((e) => ({ getKey: (t) => ''.concat(t, '_').concat(e.id) }));
        },
        30210: (e, t, a) => {
            a.d(t, { G: () => i });
            let i = (e) => 'object' == typeof e && null !== e && !Array.isArray(e);
        },
        30283: (e, t, a) => {
            a.d(t, { t: () => o });
            var i = a(5120),
                r = a(2258),
                l = a(3474);
            let n = i.gK.model('BarBelowContent', {
                    bgUrl: i.gK.maybeNull(i.gK.string),
                    bgColor: i.gK.maybeNull(i.gK.string),
                    imageUrl: i.gK.maybeNull(i.gK.string),
                    title: i.gK.maybeNull(i.gK.string),
                    titleColor: i.gK.maybeNull(i.gK.string),
                    text: i.gK.maybeNull(i.gK.string),
                    textColor: i.gK.maybeNull(i.gK.string),
                    buttons: i.gK.array(l._),
                    advDisclaimer: i.gK.maybeNull(i.gK.string),
                }),
                s = i.gK.model('BarBelow', {
                    anchorId: i.gK.enumeration(Object.values(r.v)),
                    screenId: i.gK.string,
                    content: n,
                    feedbackToken: i.gK.maybeNull(i.gK.string),
                }),
                o = i.gK
                    .model('BarBelowMain', {
                        anchorId: i.gK.maybe(i.gK.string),
                        isVisible: i.gK.maybe(i.gK.boolean),
                        hasAnimationAlreadyBeenShown: i.gK.maybe(i.gK.boolean),
                        hasAnimationAlreadyBeenHidden: i.gK.maybe(i.gK.boolean),
                        hasAnimationAlreadyBeenStarted: i.gK.maybe(i.gK.boolean),
                        list: i.gK.array(s),
                    })
                    .volatile(() => ({ wasShown: !1 }))
                    .views((e) => ({
                        get barBelowItem() {
                            return e.list.find((t) => t.anchorId === e.anchorId);
                        },
                        get showWithAnimation() {
                            return !e.hasAnimationAlreadyBeenShown && e.isVisible;
                        },
                        get hideWithAnimation() {
                            return e.hasAnimationAlreadyBeenShown && !e.hasAnimationAlreadyBeenHidden && !e.isVisible;
                        },
                    }))
                    .actions((e) => ({
                        setAnchorId(t) {
                            e.anchorId = t;
                        },
                        show() {
                            ((e.isVisible = !0), (e.wasShown = !0));
                        },
                        hide() {
                            e.isVisible = !1;
                        },
                        setAnimationAlreadyBeenShown() {
                            e.hasAnimationAlreadyBeenShown = !0;
                        },
                        setAnimationAlreadyBeenHidden() {
                            e.hasAnimationAlreadyBeenHidden = !0;
                        },
                        setAnimationAlreadyBeenStarted() {
                            e.hasAnimationAlreadyBeenStarted = !0;
                        },
                    }));
        },
        31320: (e, t, a) => {
            a.d(t, { N: () => i });
            var i = (function (e) {
                return ((e.IntroPlan = 'IntroPlan'), (e.IntroUntilPlan = 'IntroUntilPlan'), (e.TrialPlan = 'TrialPlan'), (e.TrialUntilPlan = 'TrialUntilPlan'), e);
            })({});
        },
        31510: (e, t, a) => {
            a.d(t, { e: () => i });
            let i = (e) => ({ uri: e.uri, color: e.color });
        },
        31661: (e, t, a) => {
            a.d(t, { W: () => r });
            var i = a(63565);
            let r = (e) => !!e && (e === i.g.RATING || e === i.g.YEAR);
        },
        31893: (e, t, a) => {
            var i;
            (a.d(t, { z: () => i }),
                (function (e) {
                    ((e.NONE = 'none'), (e.DEFAULT = 'default'), (e.CUSTOM = 'custom'));
                })(i || (i = {})));
        },
        31946: (e, t, a) => {
            a.d(t, { r: () => r });
            var i = a(67174);
            let r = (e) => (0, i.u)('/label/:labelId', { params: { labelId: e } });
        },
        32298: (e, t, a) => {
            a.d(t, { q: () => r });
            var i = a(5120);
            let r = i.gK
                .model('BaseModal', { isOpened: i.gK.optional(i.gK.boolean, !1) })
                .volatile((e) => ({ wasOpened: e.isOpened }))
                .views((e) => ({
                    get wasClosed() {
                        return e.wasOpened && !e.isOpened;
                    },
                }))
                .actions((e) => {
                    let t = {
                        onOpenChange(t) {
                            ((e.isOpened = t), t && (e.wasOpened = !0));
                        },
                        open() {
                            t.onOpenChange(!0);
                        },
                        close() {
                            t.onOpenChange(!1);
                        },
                    };
                    return t;
                });
        },
        32353: (e, t, a) => {
            a.d(t, { P: () => i, u: () => r });
            var i = (function (e) {
                    return ((e[(e.Mobile = 768)] = 'Mobile'), (e[(e.Desktop = 1440)] = 'Desktop'), e);
                })({}),
                r = (function (e) {
                    return ((e.Mobile = 'Mobile'), (e.Desktop = 'Desktop'), e);
                })({});
        },
        32932: (e, t, a) => {
            a.d(t, { p: () => i });
            var i = (function (e) {
                return (
                    (e.IDLE = 'IDLE'),
                    (e.PREPARE = 'PREPARE'),
                    (e.UPLOADING = 'UPLOADING'),
                    (e.PROCESSING = 'PROCESSING'),
                    (e.RESOLVE = 'RESOLVE'),
                    (e.REJECT = 'REJECT'),
                    (e.CANCELLED = 'CANCELLED'),
                    e
                );
            })({});
        },
        34407: (e, t, a) => {
            a.d(t, { k: () => i });
            let i = 100;
        },
        35367: (e, t, a) => {
            var i;
            (a.d(t, { A: () => i }),
                (function (e) {
                    ((e.ALL = 'ALL_WAVES_TAB'), (e.LIKED = 'LIKED_WAVES_TAB'), (e.ROOMS = 'WAVE_ROOMS_TAB'));
                })(i || (i = {})));
        },
        35994: (e, t, a) => {
            a.d(t, { R: () => r });
            var i = a(67174);
            let r = (e) => (0, i.u)('/artist/:artistId', { params: { artistId: e } });
        },
        37862: (e, t, a) => {
            a.d(t, { Q: () => i });
            var i = (function (e) {
                return ((e.ALL = 'all'), e);
            })({});
        },
        38147: (e, t, a) => {
            a.d(t, { h: () => i });
            var i = (function (e) {
                return ((e.EMPTY = 'empty'), (e.DIRECT = 'direct'), (e.CREATIVE = 'creative'), (e.BRANDING = 'branding'), e);
            })({});
        },
        38514: (e, t, a) => {
            a.d(t, { L: () => r });
            var i = a(67174);
            let r = (e) => (0, i.u)('/album/:albumId', { params: { albumId: e } });
        },
        39339: (e, t, a) => {
            a.d(t, { $: () => b });
            var i = a(5120),
                r = a(89916),
                l = a(60385),
                n = a(79390),
                s = a(50633),
                o = a(27506),
                d = a(67174),
                g = a(23744),
                u = a(97335),
                c = a(67318),
                m = a(34407),
                y = a(554),
                p = a(18243),
                E = a(99007);
            let b = i.gK
                .compose(
                    i.gK.model({
                        uuid: i.gK.string,
                        isAvailable: i.gK.boolean,
                        revision: i.gK.maybe(i.gK.number),
                        uid: i.gK.number,
                        kind: i.gK.number,
                        title: i.gK.maybe(i.gK.string),
                        coverUri: i.gK.maybe(i.gK.string),
                        tracksCount: i.gK.maybe(i.gK.number),
                        averageColor: i.gK.maybe(i.gK.string),
                        generatedPlaylistType: i.gK.maybe(i.gK.string),
                        personalColor: i.gK.maybeNull(i.gK.number),
                        visibility: i.gK.maybe(i.gK.string),
                        trailer: i.gK.maybe(g.a),
                    }),
                    u.t,
                )
                .views((e) => ({
                    get key() {
                        return ''.concat(e.uuid, '_').concat(e.uid, '_').concat(e.kind);
                    },
                    get url() {
                        let { href: t } = (0, d.u)('/playlists/:playlistUuid', { params: { playlistUuid: e.uuid } });
                        return t;
                    },
                    get isLikesCountHidden() {
                        return e.kind === E.j.LIKE || e.kind === E.j.CHART || e.generatedPlaylistType;
                    },
                    get isFavouritePlaylist() {
                        return e.kind === E.j.LIKE;
                    },
                    get isPublic() {
                        return e.visibility === l.L.PUBLIC;
                    },
                    get isLiked() {
                        if (!(0, i._n)(e)) return !1;
                        let { library: t } = (0, s.M)(e);
                        return t.isPlaylistLiked((0, y.m)(e));
                    },
                    get pinId() {
                        return (0, p.f)(e);
                    },
                    get id() {
                        return (0, y.m)(e);
                    },
                    get isPinned() {
                        if (!(0, i._n)(e)) return !1;
                        let { pinsCollection: t } = (0, s.M)(e);
                        return t.isPinned(this.pinId);
                    },
                    get isOwnPlaylist() {
                        let { user: t } = (0, s.M)(e);
                        return !!(t.isAuthorized && e.uid && t.account.data.uid && e.uid === t.account.data.uid);
                    },
                    get canUserChange() {
                        if (!(0, i._n)(e)) return !1;
                        return this.isOwnPlaylist && !this.isFavouritePlaylist;
                    },
                    get isOwnFavouritePlaylist() {
                        if (!(0, i._n)(e)) return !1;
                        return this.isFavouritePlaylist && this.isOwnPlaylist;
                    },
                }))
                .actions((e) => ({
                    toggleLike: (0, i.L3)(function* () {
                        if (!(0, i._n)(e)) return;
                        let { library: t, user: a } = (0, s.M)(e);
                        if (a.isAuthorized) {
                            let r = yield t.togglePlaylistLike({ userId: a.account.data.uid, entityId: e.id, ownerId: e.uid, kindId: e.kind });
                            return ((0, i._n)(e) && r === n.f.OK && (e.isLiked ? e.likePending() : e.unlikePending()), r);
                        }
                    }),
                    togglePin: (0, i.L3)(function* () {
                        if (!(0, i._n)(e)) return;
                        let { pinsCollection: t, user: a } = (0, s.M)(e);
                        if (a.isAuthorized) return yield t.togglePlaylistPin({ uid: e.uid, kind: e.kind }, e.pinId);
                    }),
                    changePlaylist: (0, i.L3)(function* (t) {
                        if (!(0, i._n)(e)) return c.Y.ERROR;
                        let { usersResource: a, modelActionsLogger: l } = (0, i._$)(e);
                        try {
                            var n, s;
                            let i = yield a.changePlaylistRelative({ userId: e.uid, diff: t, revision: null != (n = e.revision) ? n : 0, playlistKind: e.kind });
                            return ((e.revision = i.revision), (e.isAvailable = null == (s = i.available) || s), c.Y.OK);
                        } catch (e) {
                            if ((l.error(e), e && 'object' == typeof e && 'statusCode' in e && e.statusCode === r.X1.PRECONDITION_FAILED)) return c.Y.RELOAD;
                            return c.Y.ERROR;
                        }
                    }),
                    changeTitle: (0, i.L3)(function* (t) {
                        if (!(0, i._n)(e)) return o.F.ERROR;
                        if (e.title === t) return o.F.OK;
                        let { usersResource: a, modelActionsLogger: r } = (0, i._$)(e);
                        if (e.canUserChange) {
                            if (t.length < 1 || t.length > m.k) return o.F.ERROR;
                            let i = e.title;
                            e.title = t;
                            try {
                                let r = yield a.changePlaylistTitle({ title: t, userId: e.uid, playlistKind: e.kind });
                                if (!(null == r ? void 0 : r.title)) return ((e.title = i), o.F.ERROR);
                                return ((e.title = r.title), o.F.OK);
                            } catch (t) {
                                ((e.title = i), r.error(t));
                            }
                        }
                        return o.F.ERROR;
                    }),
                    deletePlaylist: (0, i.L3)(function* () {
                        if (!(0, i._n)(e) || !e.canUserChange) return o.F.ERROR;
                        let { pinsCollection: t } = (0, s.M)(e),
                            { usersResource: a, modelActionsLogger: r } = (0, i._$)(e);
                        try {
                            return (yield a.deletePlaylist({ userId: e.uid, playlistKind: e.kind }), t.isPinned(e.pinId) && t.deletePin(e.pinId), o.F.OK);
                        } catch (e) {
                            r.error(e);
                        }
                        return o.F.ERROR;
                    }),
                    toggleVisibility: (0, i.L3)(function* (t) {
                        if (!(0, i._n)(e) || (!e.canUserChange && !e.isOwnFavouritePlaylist)) return o.F.ERROR;
                        let { usersResource: a, modelActionsLogger: r } = (0, i._$)(e),
                            { user: n } = (0, s.M)(e),
                            d = e.visibility,
                            g = e.isPublic ? l.L.PRIVATE : l.L.PUBLIC;
                        t && (g = t);
                        try {
                            return (
                                (e.visibility = g),
                                e.isOwnFavouritePlaylist
                                    ? yield n.setSettings({ userMusicVisibility: g })
                                    : yield a.togglePlaylistVisibility({ visibility: g, userId: e.uid, playlistKind: e.kind }),
                                o.F.OK
                            );
                        } catch (e) {
                            r.error(e);
                        }
                        return ((e.visibility = d), o.F.ERROR);
                    }),
                    getKey: (t) => ''.concat(t, '_').concat(e.id),
                }));
        },
        40512: (e, t, a) => {
            a.d(t, { $: () => r });
            var i = a(7123);
            let r = (e) => ({ type: i.z4.Unloaded, meta: { id: e.entityId } });
        },
        41427: (e, t, a) => {
            var i;
            (a.d(t, { $: () => i }),
                (function (e) {
                    ((e.TOP = 'top'),
                        (e.TRACK = 'track'),
                        (e.CLIP = 'clip'),
                        (e.ALBUM = 'album'),
                        (e.ARTIST = 'artist'),
                        (e.PLAYLIST = 'playlist'),
                        (e.KIDS_MUSIC = 'kids-music'),
                        (e.KIDS_PLAYLIST = 'kids-playlist'),
                        (e.SPOKEN_PLAYLIST = 'spoken-playlist'),
                        (e.PODCAST = 'podcast'),
                        (e.BOOK = 'book'),
                        (e.KIDS_PODCAST = 'kids-podcast'),
                        (e.KIDS_BOOK = 'kids-book'),
                        (e.WAVES = 'waves'),
                        (e.CONCERT = 'concert'));
                })(i || (i = {})));
        },
        41814: (e, t, a) => {
            a.d(t, { G: () => u });
            var i = a(5120),
                r = a(80989),
                l = a(22983),
                n = a(50633),
                s = a(97956),
                o = a(90420),
                d = a(63425);
            let g = i.gK.model('VibeAgent', { animationUri: i.gK.string, cover: d.$, entityType: i.gK.maybe(i.gK.string) }),
                u = i.gK
                    .model('Vibe', {
                        title: i.gK.optional(i.gK.string, ''),
                        description: i.gK.maybe(i.gK.string),
                        seeds: i.gK.array(i.gK.string),
                        imageUrl: i.gK.maybe(i.gK.string),
                        animationUrl: i.gK.maybe(i.gK.string),
                        backgroundImageUrl: i.gK.maybe(i.gK.string),
                        backgroundColor: i.gK.maybe(i.gK.string),
                        type: i.gK.maybe(i.gK.string),
                        colors: i.gK.maybe(i.gK.model({ average: i.gK.maybe(i.gK.string), waveText: i.gK.maybe(i.gK.string) })),
                        agent: i.gK.maybe(g),
                    })
                    .views((e) => {
                        let t = {
                            get stationId() {
                                var a;
                                return null != (a = e.seeds[0]) ? a : '';
                            },
                            get seedsId() {
                                return e.seeds.join(',');
                            },
                            get context() {
                                if (e.seeds) {
                                    if (t.stationId !== o.M1) return e.title;
                                    else if (e.seeds.length > 1) return e.title;
                                }
                                return null;
                            },
                            get pinId() {
                                return (0, r.f)(e.seeds);
                            },
                            get isPinned() {
                                if (!(0, i._n)(e)) return !1;
                                let { pinsCollection: t } = (0, n.M)(e);
                                return t.isPinned(this.pinId);
                            },
                            get isLikeEnabled() {
                                return e.seeds.length > 0 && e.seeds.every((e) => e !== o.M1 && e !== o.yx && !e.startsWith('playlist:'));
                            },
                            get isShareEnabled() {
                                return t.isLikeEnabled && t.stationType !== o.q7 && t.stationType !== o.N7;
                            },
                            get isLiked() {
                                if (!(0, i._n)(e)) return !1;
                                let { library: t } = (0, n.M)(e);
                                return t.isVibeLiked(e.seeds);
                            },
                            get stationType() {
                                var d, g;
                                return null != (g = null == (d = t.stationId) ? void 0 : d.split(':')[0]) ? g : '';
                            },
                            get isMix() {
                                return e.type === l.y.MIX;
                            },
                            get isQ2V() {
                                return e.type === l.y.Q2V;
                            },
                            get shouldShowAgent() {
                                if (!(0, i._n)(e)) return !1;
                                let { experiments: t } = (0, n.M)(e);
                                return t.checkExperiment(s.z.WebNextWaveAgentExperiment, 'on');
                            },
                            get cover() {
                                return (0, i.wg)({ uri: e.imageUrl, color: e.backgroundColor });
                            },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        getKey: (t) => ''.concat(t, '_').concat(e.seeds[0]),
                        togglePin: (0, i.L3)(function* () {
                            if (!(0, i._n)(e)) return;
                            let { pinsCollection: t, user: a } = (0, n.M)(e);
                            if (a.isAuthorized) return yield t.toggleVibePin({ seeds: e.seeds }, e.pinId);
                        }),
                        toggleLike: (0, i.L3)(function* () {
                            if (!(0, i._n)(e) || !e.isLikeEnabled) return;
                            let { library: t, user: a } = (0, n.M)(e);
                            if (a.isAuthorized) return yield t.toggleVibeLike({ seeds: [...e.seeds] });
                        }),
                        getDescription() {
                            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '';
                            if (!(0, i._n)(e)) return t;
                            let { experiments: a } = (0, n.M)(e);
                            return a.checkExperiment(s.z.WebNextVibeDescription, 'on') && void 0 !== (null == e ? void 0 : e.description) ? e.description : t;
                        },
                    }));
        },
        42078: (e, t, a) => {
            var i;
            (a.d(t, { _: () => i }),
                (function (e) {
                    ((e.ALBUM_ITEM = 'album_item'),
                        (e.ARTIST_ITEM = 'artist_item'),
                        (e.PLAYLIST_ITEM = 'playlist_item'),
                        (e.TRACK_ITEM = 'track_item'),
                        (e.LIKED_PLAYLIST_ITEM = 'liked_playlist_item'),
                        (e.PERSONAL_PLAYLIST_ITEM = 'personal_playlist_item'),
                        (e.WAVE_ITEM = 'wave_item'),
                        (e.WAVE_AGENT_ITEM = 'wave_agent_item'),
                        (e.MIX = 'mix'),
                        (e.MIX_CARD_ITEM = 'mix_card_item'),
                        (e.LIKED_ALBUM_ITEM = 'liked_album_item'),
                        (e.PRESAVED_ALBUM_ITEM = 'presaved_album_item'),
                        (e.CHART_ALBUM_ITEM = 'chart_album_item'),
                        (e.NON_MUSIC_ALBUM_ITEM = 'non_music_album_item'),
                        (e.MENU_ITEM = 'menu_item'),
                        (e.DONATION_ITEM = 'donation_item'),
                        (e.CLIP = 'clip'),
                        (e.CLIP_ITEM = 'clip_item'),
                        (e.CONCERT_ITEM = 'concert_item'),
                        (e.QUERY_TO_VIBE_ITEM = 'q2v_item'));
                })(i || (i = {})));
        },
        42205: (e, t, a) => {
            a.d(t, { z: () => i });
            let i = (e, t) => {
                let a = Number(t);
                return !Number.isNaN(a) && a > 0 && a < e.length ? a : 0;
            };
        },
        45923: (e, t, a) => {
            var i;
            (a.d(t, { r: () => i }),
                (function (e) {
                    ((e.TRACK = 'best_result_track'),
                        (e.ARTIST = 'best_result_artist'),
                        (e.CONCERT = 'best_result_concert'),
                        (e.RECENT_RELEASE = 'best_result_recent_release'),
                        (e.ALBUM = 'best_result_album'),
                        (e.WAVE = 'best_result_wave'),
                        (e.ARTISTS_RELATED = 'best_result_artists_related'),
                        (e.OVERVIEW = 'best_result_overview'),
                        (e.PODCAST = 'best_result_podcast'),
                        (e.PODCAST_EPISODE = 'best_result_podcast_episode'),
                        (e.NON_MUSIC = 'best_result_non_music'),
                        (e.CLIP = 'best_result_clip'),
                        (e.UPCOMING = 'best_result_upcoming'),
                        (e.PLAYLIST = 'best_result_playlist'),
                        (e.BOOK_CHAPTER = 'best_result_book_chapter'));
                })(i || (i = {})));
        },
        47255: (e, t, a) => {
            a.d(t, { J: () => i });
            let i = (e) => {
                if (e) return { value: e.value, currency: e.currency };
            };
        },
        47580: (e, t, a) => {
            a.d(t, { j: () => i });
            let i = (e) => e.map((e) => e.name).join(', ');
        },
        48404: (e, t, a) => {
            var i;
            (a.d(t, { a: () => i }),
                (function (e) {
                    ((e.LIKE = 'like'), (e.DISLIKE = 'dislike'), (e.NEUTRAL = 'neutral'));
                })(i || (i = {})));
        },
        50672: (e, t, a) => {
            a.d(t, { Z: () => l });
            var i = a(5120),
                r = a(99211);
            let l = (e) =>
                (0, i.wg)({
                    ...(0, r.j)(e),
                    owner: e.owner ? ((e) => ({ uid: e.uid, login: e.login, name: e.name, sex: e.sex, verified: e.verified }))(e.owner) : void 0,
                    description: e.description,
                    tags: e.tags,
                    modified: e.modified,
                    madeForUser: e.madeForUser
                        ? ((e) =>
                              (0, i.wg)({
                                  caseForms: e.caseForms
                                      ? ((e) =>
                                            (0, i.wg)({
                                                nominative: e.nominative,
                                                genitive: e.genitive,
                                                dative: e.dative,
                                                accusative: e.accusative,
                                                instrumental: e.instrumental,
                                                prepositional: e.prepositional,
                                            }))(e.caseForms)
                                      : null,
                              }))(e.madeForUser)
                        : null,
                });
        },
        51231: (e, t, a) => {
            a.d(t, { p: () => l });
            var i = a(5120),
                r = a(31510);
            let l = (e) => {
                let t = (0, r.e)(e);
                return (0, i.wg)(t);
            };
        },
        51611: (e, t, a) => {
            a.d(t, { h: () => n });
            var i = a(53548),
                r = a(4086),
                l = a(41928);
            let n = () => {
                let e = (0, l.N)().get(r.Xc),
                    t = e.getLanguage(),
                    a = e.getDefaultLanguage(),
                    n = e.getDictionary(),
                    s = e.getAvailableLanguages(),
                    o = (0, i.useCallback)(
                        (t) => {
                            e.setLanguage(t);
                        },
                        [t],
                    );
                return (0, i.useMemo)(() => ({ dictionary: n, language: t, defaultLanguage: a, availableLanguages: s, setLanguage: o }), [t, o]);
            };
        },
        51724: (e, t, a) => {
            a.d(t, { f: () => i });
            let i = (e) => {
                var t, a, i, r, l, n;
                let s = null == (t = e.available) || t,
                    o = null != (a = e.disclaimers) ? a : [];
                return (
                    e.contentRestrictions &&
                        ((s = null == (l = null == (i = e.contentRestrictions) ? void 0 : i.available) || l),
                        (o = null != (n = null == (r = e.contentRestrictions) ? void 0 : r.disclaimers) ? n : [])),
                    { available: s, disclaimers: o }
                );
            };
        },
        52440: (e, t, a) => {
            a.d(t, { I: () => d });
            var i = a(5120),
                r = a(27506),
                l = a(74773),
                n = a(66911),
                s = a(67311),
                o = a(23341);
            function d(e, t) {
                let { useAppendMode: a = !1 } = null != t ? t : {};
                return i.gK
                    .compose(
                        i.gK.model('PageLoader', {
                            items: i.gK.maybeNull(i.gK.array(i.gK.maybeNull(e))),
                            requestsCount: i.gK.optional(i.gK.number, 0),
                            initialRequestLoadingState: i.gK.optional(i.gK.enumeration(Object.values(l.G)), l.G.IDLE),
                            lastRejectedPagesList: i.gK.optional(i.gK.array(i.gK.number), []),
                            pager: i.gK.maybeNull(o.j),
                            pageStates: i.gK.maybeNull(i.gK.array(i.gK.enumeration(Object.values(l.G)))),
                        }),
                        s.p,
                    )
                    .views((e) => {
                        let t = {
                            isPageNeedToLoad: (t) => {
                                var a;
                                return null == (a = e.pageStates) || !a[t] || e.pageStates[t] === l.G.IDLE;
                            },
                            get isSomePageResolved() {
                                var i;
                                return !!((null == (i = e.pageStates) ? void 0 : i.length) && e.pageStates.some((e) => e === l.G.RESOLVE));
                            },
                            get isEmpty() {
                                var r;
                                return t.isSomePageResolved && !(null == (r = e.items) ? void 0 : r.length);
                            },
                            get isNeedToMakeInitialRequest() {
                                return e.initialRequestLoadingState === l.G.IDLE;
                            },
                            get isInitialRequestRejected() {
                                return e.initialRequestLoadingState === l.G.REJECT;
                            },
                            get hasMorePages() {
                                var n;
                                return !!a && !(null == (n = e.pager) ? void 0 : n.lastPage);
                            },
                            get rejectedPagesCount() {
                                var s;
                                if (t.isInitialRequestRejected || !(null == (s = e.pageStates) ? void 0 : s.length)) return 0;
                                return e.pageStates.filter((e) => e === l.G.REJECT).length;
                            },
                        };
                        return t;
                    })
                    .actions((e) => {
                        let t = {
                            setPageState: (i, r) => {
                                let n;
                                if (([l.G.IDLE, l.G.PENDING].includes(e.initialRequestLoadingState) && (e.initialRequestLoadingState = r), a)) n = i + 1;
                                else {
                                    var s, o, d, g;
                                    n = Math.ceil(
                                        (null != (d = null == (s = e.pager) ? void 0 : s.total) ? d : 0) /
                                            (null != (g = null == (o = e.pager) ? void 0 : o.perPage) ? g : 1),
                                    );
                                }
                                let u = Math.max(i + 1, n);
                                (t.ensurePageStatesInitialized(u), e.pageStates && (e.pageStates[i] = r), r === l.G.REJECT && t.addLastRejectedPageToList(i));
                            },
                            setItems: (s, o) => {
                                var d;
                                let { page: g, pager: u, responseStatus: c } = o;
                                if (((e.requestsCount = (null != (d = e.requestsCount) ? d : 0) + 1), c === r.F.ERROR || !s || !u))
                                    return void t.setPageState(g, l.G.REJECT);
                                (e.pager
                                    ? a && ((e.pager.lastPage = u.lastPage), (e.pager.perPage = u.perPage))
                                    : (e.pager = { page: u.page, perPage: u.perPage, total: u.total, lastPage: u.lastPage }),
                                    t.setPageState(g, l.G.RESOLVE),
                                    (e.pager.page = g),
                                    a
                                        ? (e.items || (e.items = (0, i.wg)([])), e.items && e.items.push(...s))
                                        : (e.items || (e.items = (0, i.wg)(Array.from({ length: e.pager.total }, () => null))),
                                          e.items && (0, n.I)({ items: e.items, mappedRawItems: s, page: g, pageSize: e.pager.perPage })));
                            },
                            resetRejectedPagesState() {
                                var t, a, i;
                                for (let r = 0; r < (null != (a = null == (t = e.pageStates) ? void 0 : t.length) ? a : 0); r++)
                                    (null == (i = e.pageStates) ? void 0 : i[r]) === l.G.REJECT && (e.pageStates[r] = l.G.IDLE);
                            },
                            addLastRejectedPageToList(t) {
                                var a, i, r;
                                for (e.lastRejectedPagesList.push(t); (null != (i = null == (a = e.lastRejectedPagesList) ? void 0 : a.length) ? i : 0) > 5;)
                                    null == (r = e.lastRejectedPagesList) || r.shift();
                            },
                            ensurePageStatesInitialized(t) {
                                if (t <= 0) return;
                                if (!e.pageStates) {
                                    let a = Array.from({ length: t }, () => l.G.IDLE);
                                    e.pageStates = (0, i.wg)(a);
                                    return;
                                }
                                let a = e.pageStates.length;
                                if (t > a) {
                                    let i = Array.from({ length: t - a }, () => l.G.IDLE);
                                    e.pageStates.push(...i);
                                }
                            },
                            reset() {
                                ((e.initialRequestLoadingState = l.G.IDLE),
                                    (e.requestsCount = 0),
                                    (e.lastRejectedPagesList = (0, i.wg)([])),
                                    e.destroyItems([e.items, e.pager, e.pageStates]));
                            },
                        };
                        return t;
                    });
            }
        },
        52643: (e, t, a) => {
            a.d(t, { s: () => s });
            var i = a(5120),
                r = a(14283),
                l = a(51724),
                n = a(12906);
            let s = (e) => {
                var t, a;
                let { album: s, artists: o, bookmateOptionRequired: d, chart: g, likesCount: u, trailer: c, releaseYear: m, releaseDate: y } = e,
                    { available: p, disclaimers: E } = (0, l.f)(s);
                return (0, i.wg)({
                    id: s.id,
                    title: s.title,
                    coverUri: null == (t = s.cover) ? void 0 : t.uri,
                    type: s.albumType,
                    disclaimers: E,
                    artists: null == o ? void 0 : o.map((e) => (0, r.a)({ artist: e })),
                    averageColor: null == (a = s.cover) ? void 0 : a.color,
                    isAvailable: p,
                    likesCount: u,
                    bookmateOptionRequired: d,
                    chart: g,
                    trailer: (0, n.m)(c),
                    year: m ? Number(m) : void 0,
                    releaseDate: y,
                });
            };
        },
        54667: (e, t, a) => {
            var i;
            (a.d(t, { S: () => i }),
                (function (e) {
                    ((e.TRACK = 'track'),
                        (e.MUSIC = 'music'),
                        (e.NOISE = 'noise'),
                        (e.PODCAST = 'podcast-episode'),
                        (e.COMMENT = 'comment'),
                        (e.ARTICLE = 'article'),
                        (e.ASMR = 'asmr'),
                        (e.RADIO = 'radio'),
                        (e.SHOW = 'show'),
                        (e.LECTURE = 'lecture'),
                        (e.FAIRY_TALE = 'fairy-tale'),
                        (e.AUDIOBOOK = 'audiobook'),
                        (e.POETRY = 'poetry'));
                })(i || (i = {})));
        },
        55025: (e, t, a) => {
            a.d(t, { b: () => d });
            var i = a(5120),
                r = a(44349),
                l = a(76626),
                n = a(96826),
                s = a(74773),
                o = a(59497);
            let d = i.gK
                .compose(i.gK.model('DownloadedTracks', { items: i.gK.maybeNull(i.gK.array(n.v)), tracks: i.gK.maybeNull(i.gK.frozen()) }), o.X)
                .views((e) => ({
                    get tracksDurationInMinutes() {
                        var t, a;
                        return (null != (a = null == (t = e.tracks) ? void 0 : t.reduce((e, t) => (t.durationMs ? e + t.durationMs : e), 0)) ? a : 0) / 1e3 / 60;
                    },
                    get entitiesData() {
                        if (!e.tracks) return [];
                        return e.tracks.map((e) => ({ type: r.R.DownloadedMusic, meta: e }));
                    },
                    get isEmpty() {
                        var i;
                        return e.isResolved && (null == (i = e.items) ? void 0 : i.length) === 0;
                    },
                }))
                .actions((e) => ({
                    getData: (0, i.L3)(function* (t, a) {
                        let { modelActionsLogger: r } = (0, i._$)(e);
                        if (e.loadingState !== s.G.PENDING)
                            try {
                                e.loadingState = s.G.PENDING;
                                let r = yield t.getTracks(a);
                                ((e.tracks = r), (e.items = (0, i.wg)(r.map((e) => (0, l.v)(e)))), e.loadingState !== s.G.IDLE && (e.loadingState = s.G.RESOLVE));
                            } catch (t) {
                                (r.error(t), e.loadingState !== s.G.IDLE && (e.loadingState = s.G.REJECT));
                            }
                    }),
                    reset() {
                        ((e.items = null), (e.tracks = null), (e.loadingState = s.G.IDLE));
                    },
                }));
        },
        56146: (e, t, a) => {
            a.d(t, { w: () => r });
            var i = a(5120);
            let r = (e) => (0, i.wg)({ position: e.position, progress: e.progress });
        },
        56846: (e, t, a) => {
            var i;
            (a.d(t, { E: () => i }),
                (function (e) {
                    ((e.SHOW_AND_LOAD = 'SHOW_AND_LOAD'), (e.LOAD_AND_SHOW = 'LOAD_AND_SHOW'));
                })(i || (i = {})));
        },
        58400: (e, t, a) => {
            a.d(t, { A: () => r });
            let i = /[+-]\d{2}:?\d{2}/,
                r = (e) => (null == e ? void 0 : e.replace(i, ''));
        },
        58870: (e, t, a) => {
            a.d(t, { b: () => n });
            var i = a(5120),
                r = a(56146),
                l = a(76626);
            let n = (e, t) => (0, i.wg)({ ...(0, l.v)(e), chart: t && (0, r.w)(t) });
        },
        60385: (e, t, a) => {
            var i;
            (a.d(t, { L: () => i }),
                (function (e) {
                    ((e.PUBLIC = 'public'), (e.PRIVATE = 'private'));
                })(i || (i = {})));
        },
        61691: (e, t, a) => {
            var i;
            (a.d(t, { _: () => i }),
                (function (e) {
                    ((e.UNKNOWN = 'unknown'),
                        (e.ALBUM = 'album'),
                        (e.SINGLE = 'single'),
                        (e.COMPILATION = 'compilation'),
                        (e.PODCAST = 'podcast'),
                        (e.FAIRY_TALE = 'fairy-tale'),
                        (e.AUDIOBOOK = 'audiobook'),
                        (e.VIDEO_SINGLE = 'video-single'),
                        (e.VIDEO_ALBUM = 'video-album'),
                        (e.RADIO = 'radio'),
                        (e.ASMR = 'asmr'),
                        (e.NOISE = 'noise'));
                })(i || (i = {})));
        },
        62115: (e, t, a) => {
            a.d(t, { i: () => i });
            let i = 1e3;
        },
        63500: (e, t, a) => {
            var i;
            (a.d(t, { n: () => i }),
                (function (e) {
                    ((e.ALBUM = 'album_tab'), (e.PRESAVED_ALBUM = 'presaved_album_tab'));
                })(i || (i = {})));
        },
        63565: (e, t, a) => {
            var i;
            (a.d(t, { g: () => i }),
                (function (e) {
                    ((e.RATING = 'rating'), (e.YEAR = 'year'));
                })(i || (i = {})));
        },
        63698: (e, t, a) => {
            a.d(t, { l: () => r });
            var i = a(67174);
            let r = (e, t, a) =>
                (0, i.u)(t ? '/album/:albumId/track/:trackId' : '/track/:trackId', { params: t ? { albumId: t, trackId: e } : { trackId: e }, query: a });
        },
        64184: (e, t, a) => {
            a.d(t, { _: () => i });
            var i = (function (e) {
                return ((e.INFO = 'INFO'), (e.SUCCESS = 'SUCCESS'), e);
            })({});
        },
        65208: (e, t, a) => {
            a.d(t, { Y: () => g });
            var i = a(5120),
                r = a(89916),
                l = a(82212),
                n = a(21127),
                s = a(74773),
                o = a(59497),
                d = a(99159);
            let g = i.gK
                .compose(i.gK.model('Mixes', { items: i.gK.array(n.f), errorStatusCode: i.gK.maybeNull(i.gK.number) }), o.X)
                .views((e) => ({
                    get isLoading() {
                        return e.isNeededToLoad || e.loadingState === s.G.PENDING;
                    },
                    get isNotFound() {
                        let t = e.isResolved && 0 === e.items.length;
                        return e.errorStatusCode === r.X1.NOT_FOUND || t;
                    },
                }))
                .actions((e) => ({
                    getMixes: (0, i.L3)(function* (t) {
                        let { landingResource: a, modelActionsLogger: n } = (0, i._$)(e);
                        if (e.loadingState !== s.G.PENDING)
                            try {
                                e.loadingState = s.G.PENDING;
                                let r = yield a.getBlock({ source: { uri: '/landing/block/mixes', fullList: t }, type: l.t.MIXES });
                                ((e.items = { items: (0, i.wg)(r.items.map((e) => (0, d.J)(e.data))) }.items), (e.loadingState = s.G.RESOLVE));
                            } catch (t) {
                                (n.error(t),
                                    t instanceof r.GX && (t.statusCode === r.X1.NOT_FOUND || t.statusCode === r.X1.BAD_REQUEST) && (e.errorStatusCode = r.X1.NOT_FOUND),
                                    e.loadingState !== s.G.IDLE && (e.loadingState = s.G.REJECT));
                            }
                    }),
                }));
        },
        66564: (e, t, a) => {
            a.d(t, { k: () => i });
            let i = 36;
        },
        66911: (e, t, a) => {
            a.d(t, { I: () => i });
            function i(e) {
                let { items: t, mappedRawItems: a, page: i, pageSize: r } = e,
                    l = i * r,
                    n = 0;
                for (let e = l; e < l + r; e++) (a[n] && (t[e] = a[n]), n++);
            }
        },
        67311: (e, t, a) => {
            a.d(t, { p: () => r });
            var i = a(5120);
            let r = i.gK.model('ModelDestroyManager').actions(() => ({
                destroyItems(e) {
                    (e.forEach((e) => {
                        e && (0, i.Yo)(e);
                    }),
                        queueMicrotask(() => {
                            e.forEach((e) => {
                                e && (0, i.zr)(e);
                            });
                        }));
                },
            }));
        },
        67318: (e, t, a) => {
            a.d(t, { Y: () => i });
            var i = (function (e) {
                return ((e.OK = 'ok'), (e.ERROR = 'error'), (e.RELOAD = 'reload'), e);
            })({});
        },
        67780: (e, t, a) => {
            var i;
            (a.d(t, { H: () => i }),
                (function (e) {
                    ((e.LIKED_WAVE = 'liked_wave_item'), (e.WAVE_ROOM = 'wave_room_item'));
                })(i || (i = {})));
        },
        67879: (e, t, a) => {
            var i;
            (a.d(t, { z: () => i }),
                (function (e) {
                    ((e.NOT_FOUND = 'NOT_FOUND'),
                        (e.INVALID_SEEDS = 'INVALID_SEEDS'),
                        (e.ROOM_DUPLICATION = 'ROOM_DUPLICATION'),
                        (e.ROOM_NOT_FOUND = 'ROOM_NOT_FOUND'),
                        (e.ROOM_LIMIT_EXCEEDED = 'ROOM_LIMIT_EXCEEDED'));
                })(i || (i = {})));
        },
        70025: (e, t, a) => {
            a.d(t, { O: () => i });
            let i = { ABOUT: 'about', TRACKS: 'track-list' };
        },
        70030: (e, t, a) => {
            a.d(t, { u2: () => d, rl: () => i, mz: () => o, yq: () => u, zE: () => r });
            var i,
                r,
                l = a(9519),
                n = a(39499);
            (!(function (e) {
                ((e.IDLE = 'IDLE'), (e.PENDING = 'PENDING'), (e.RESOLVE = 'RESOLVE'), (e.REJECT = 'REJECT'));
            })(i || (i = {})),
                (function (e) {
                    ((e.HIDDEN = 'HIDDEN'), (e.VISIBLE = 'VISIBLE'));
                })(r || (r = {})));
            class s {
                attachSkeleton(e) {
                    (this.disconnect(), (this.skeleton = e));
                }
                observe(e) {
                    let { element: t, id: a } = e;
                    t && this.detector && (this.targetsToIdMap.set(t, a), this.detector.observe(t));
                }
                unobserve(e) {
                    let { element: t } = e;
                    t && this.detector && (this.targetsToIdMap.delete(t), this.detector.unobserve(t));
                }
                observeList(e) {
                    return this.virtualizedMetadataLoader
                        ? (this.stopObservingList(),
                          (this.listItems = e.items),
                          (this.potentialBlocksIndexes = this.calculatePotentialBlocksIndexes()),
                          this.virtualizedMetadataLoader.observeList({ ...e, items: this.getPotentialItems(), onVisibilityChange: this.onListVisibilityChange }),
                          this.subscribeToBlocksLoadingStatus(),
                          () => this.stopObservingList())
                        : () => void 0;
                }
                disconnect() {
                    var e;
                    (this.stopObservingList(), null == (e = this.detector) || e.disconnect(), this.targetsToIdMap.clear(), (this.skeleton = void 0));
                }
                calculatePotentialBlocksIndexes() {
                    let e = [];
                    return (
                        this.listItems.forEach((t, a) => {
                            var r;
                            let l = null == (r = this.skeleton) ? void 0 : r.getNodeById(t.id);
                            l && l.state.loadingStatus.value !== i.REJECT && e.push(a);
                        }),
                        e
                    );
                }
                getPotentialItems() {
                    let e = [];
                    return (
                        this.potentialBlocksIndexes.forEach((t) => {
                            let a = this.listItems[t];
                            a && e.push(a);
                        }),
                        e
                    );
                }
                subscribeToBlocksLoadingStatus() {
                    this.listItems.forEach((e) => {
                        var t;
                        let a = null == (t = this.skeleton) ? void 0 : t.getNodeById(e.id);
                        if (!a) return;
                        let r = a.state.loadingStatus.value === i.REJECT,
                            l = a.state.loadingStatus.onChange(() => {
                                let e = a.state.loadingStatus.value === i.REJECT;
                                e !== r && ((r = e), this.updatePotentialBlocksIndexes());
                            });
                        this.blocksLoadingStatusUnsubs.push(l);
                    });
                }
                stopObservingList() {
                    var e;
                    (this.blocksLoadingStatusUnsubs.forEach((e) => e()),
                        (this.blocksLoadingStatusUnsubs = []),
                        null == (e = this.virtualizedMetadataLoader) || e.unobserveList(),
                        (this.listItems = []),
                        (this.potentialBlocksIndexes = []));
                }
                constructor({ visibilityConfig: e }) {
                    if (
                        ((0, l._)(this, 'detector', void 0),
                        (0, l._)(this, 'virtualizedMetadataLoader', void 0),
                        (0, l._)(this, 'skeleton', void 0),
                        (0, l._)(this, 'targetsToIdMap', new Map()),
                        (0, l._)(this, 'listItems', []),
                        (0, l._)(this, 'potentialBlocksIndexes', []),
                        (0, l._)(this, 'blocksLoadingStatusUnsubs', []),
                        (0, l._)(this, 'updatePotentialBlocksIndexes', () => {
                            var e;
                            let t = this.potentialBlocksIndexes,
                                a = this.calculatePotentialBlocksIndexes();
                            ((this.potentialBlocksIndexes = a),
                                (t.length === a.length && t.every((e, t) => e === a[t])) ||
                                    null == (e = this.virtualizedMetadataLoader) ||
                                    e.updateItems(this.getPotentialItems()));
                        }),
                        (0, l._)(this, 'setNodeVisibility', (e, t) => {
                            var a;
                            let i = null == (a = this.skeleton) ? void 0 : a.getNodeById(e);
                            if (!i) return;
                            let l = t ? r.VISIBLE : r.HIDDEN;
                            i.state.visibilityStatus.value !== l && (i.state.visibilityStatus.value = l);
                        }),
                        (0, l._)(this, 'onListVisibilityChange', (e) => {
                            e.forEach((e) => {
                                this.setNodeVisibility(e.id, e.isVisible);
                            });
                        }),
                        (0, l._)(this, 'onElementsVisibilityChange', (e) => {
                            for (let t of e) {
                                let e = this.targetsToIdMap.get(t.target);
                                e && this.setNodeVisibility(e, t.isIntersecting);
                            }
                        }),
                        'listVisibility' === e.type)
                    ) {
                        this.virtualizedMetadataLoader = e.virtualizedMetadataLoader;
                        return;
                    }
                    this.detector = e.detectorFactory.create({ onVisibilityChange: this.onElementsVisibilityChange });
                }
            }
            class o {
                async loadAndCreateSkeleton(e) {
                    let { data: t, preloadedBlocksMeta: a } = e,
                        i = this.skeletonFactory.create({ data: t });
                    (this.visibilityController && this.visibilityController.attachSkeleton(i),
                        await i.loadSkeletonMeta(),
                        i.createSkeletonTree(a),
                        i.onNodesVisibilityChange(),
                        (this.skeleton = i));
                }
                createSkeleton(e) {
                    let { data: t, preloadedBlocksMeta: a } = e,
                        i = this.skeletonFactory.create({ data: t });
                    (this.visibilityController && this.visibilityController.attachSkeleton(i), i.createSkeletonTree(a), i.onNodesVisibilityChange(), (this.skeleton = i));
                }
                async loadNodes(e) {
                    if (!this.skeleton) return;
                    let t = [];
                    for (let a of e) {
                        let e = this.skeleton.getNodeById(a);
                        e && t.push(e.load());
                    }
                    await Promise.allSettled(t);
                }
                createVisibilityController(e) {
                    this.hasVisibilityController ||
                        ((this.visibilityController = new s(e)),
                        this.skeleton && this.visibilityController.attachSkeleton(this.skeleton),
                        (this.hasVisibilityController = !0));
                }
                observe(e) {
                    let { target: t, loadIfNoElement: a = !1 } = e,
                        { element: i, id: r } = t;
                    if (!i && a) {
                        var l;
                        let e = null == (l = this.skeleton) ? void 0 : l.getNodeById(r);
                        null == e || e.load();
                        return;
                    }
                    if (!this.visibilityController) throw new n.t('VisibilityController has not been created');
                    this.visibilityController.observe(t);
                }
                unobserve(e) {
                    if (!this.visibilityController) throw new n.t('VisibilityController has not been created');
                    this.visibilityController.unobserve(e);
                }
                observeList(e) {
                    if (!this.visibilityController) throw new n.t('VisibilityController has not been created');
                    return this.visibilityController.observeList(e);
                }
                destroy() {
                    var e, t;
                    (null == (e = this.visibilityController) || e.disconnect(), null == (t = this.skeleton) || t.destroy(), (this.skeleton = void 0));
                }
                constructor({ skeletonFactory: e }) {
                    ((0, l._)(this, 'skeletonFactory', void 0),
                        (0, l._)(this, 'visibilityController', void 0),
                        (0, l._)(this, 'hasVisibilityController', !1),
                        (0, l._)(this, 'skeleton', void 0),
                        (this.skeletonFactory = e));
                }
            }
            class d {
                observe(e, t) {
                    let a = new ResizeObserver(() => t());
                    return (a.observe(e, { box: 'border-box' }), () => a.disconnect());
                }
            }
            let g = (e) => 'window' in e && e.window === e;
            class u {
                observeList(e) {
                    let { container: t, scrollElement: a, items: i, gap: r, overscan: l = 2, onVisibilityChange: n } = e;
                    if (
                        (this.unobserveList(),
                        (this.container = t),
                        (this.scrollElement = a),
                        (this.items = i),
                        (this.gap = r),
                        (this.overscan = Number.isFinite(l) ? Math.max(0, l) : 2),
                        (this.onVisibilityChange = n),
                        (this.abortController = new AbortController()),
                        this.rebuildLayout(),
                        this.scrollElement.addEventListener('scroll', this.scheduleRefresh, { passive: !0, signal: this.abortController.signal }),
                        !g(a))
                    ) {
                        var s;
                        this.stopObservingResize = null == (s = this.resizeObserverAdapter) ? void 0 : s.observe(a, this.scheduleRefresh);
                    }
                    this.refresh();
                }
                updateItems(e) {
                    ((this.items = e), this.rebuildLayout(), this.refresh());
                }
                refresh() {
                    if ((this.cancelScheduledRefresh(), !this.container || !this.scrollElement || !this.onVisibilityChange)) return;
                    if (!this.container.isConnected || 0 === this.layout.totalSize) return void this.updateVisibility([]);
                    let e = this.container.getBoundingClientRect(),
                        t = g(this.scrollElement) ? { top: 0, bottom: this.scrollElement.innerHeight } : this.scrollElement.getBoundingClientRect(),
                        a = Math.max(0, t.top - e.top),
                        i = Math.min(this.layout.totalSize, t.bottom - e.top);
                    if (i <= a) return void this.updateVisibility([]);
                    let r = ((e) => {
                        let { items: t, viewportStart: a, viewportEnd: i, overscan: r } = e;
                        if (0 === t.length) return [];
                        let l = ((e, t) => {
                                let a = 0,
                                    i = e.length - 1,
                                    r = -1;
                                for (; a <= i;) {
                                    let l = Math.floor((a + i) / 2),
                                        n = e[l];
                                    if (!n) break;
                                    n.end >= t ? ((r = l), (i = l - 1)) : (a = l + 1);
                                }
                                return r;
                            })(t, a),
                            n = ((e, t) => {
                                let a = 0,
                                    i = e.length - 1,
                                    r = -1;
                                for (; a <= i;) {
                                    let l = Math.floor((a + i) / 2),
                                        n = e[l];
                                    if (!n) break;
                                    n.start <= t ? ((r = l), (a = l + 1)) : (i = l - 1);
                                }
                                return r;
                            })(t, i);
                        if (-1 === l || -1 === n || l > n) return [];
                        let s = Math.max(0, l - r),
                            o = Math.min(t.length - 1, n + r);
                        return t.slice(s, o + 1);
                    })({ items: this.layout.items, viewportStart: a, viewportEnd: i, overscan: this.overscan });
                    this.updateVisibility(r);
                }
                unobserveList() {
                    var e, t;
                    (null == (e = this.stopObservingResize) || e.call(this),
                        (this.stopObservingResize = void 0),
                        null == (t = this.abortController) || t.abort(),
                        (this.abortController = void 0),
                        this.cancelScheduledRefresh(),
                        this.updateVisibility([]),
                        (this.animationFrameId = void 0),
                        (this.container = void 0),
                        (this.scrollElement = void 0),
                        (this.items = []),
                        (this.layout = { items: [], totalSize: 0 }),
                        (this.gap = 0),
                        (this.overscan = 2),
                        (this.onVisibilityChange = void 0));
                }
                updateVisibility(e) {
                    let t = new Set(e.map((e) => e.id)),
                        a = [];
                    if (
                        (t.forEach((e) => {
                            this.visibleItemIds.has(e) || a.push({ id: e, isVisible: !0 });
                        }),
                        this.visibleItemIds.forEach((e) => {
                            t.has(e) || a.push({ id: e, isVisible: !1 });
                        }),
                        (this.visibleItemIds = t),
                        a.length > 0)
                    ) {
                        var i;
                        null == (i = this.onVisibilityChange) || i.call(this, a);
                    }
                }
                constructor({ resizeObserverAdapter: e } = {}) {
                    ((0, l._)(this, 'resizeObserverAdapter', void 0),
                        (0, l._)(this, 'container', void 0),
                        (0, l._)(this, 'scrollElement', void 0),
                        (0, l._)(this, 'gap', 0),
                        (0, l._)(this, 'overscan', 2),
                        (0, l._)(this, 'onVisibilityChange', void 0),
                        (0, l._)(this, 'abortController', void 0),
                        (0, l._)(this, 'items', []),
                        (0, l._)(this, 'layout', { items: [], totalSize: 0 }),
                        (0, l._)(this, 'visibleItemIds', new Set()),
                        (0, l._)(this, 'animationFrameId', void 0),
                        (0, l._)(this, 'stopObservingResize', void 0),
                        (0, l._)(this, 'rebuildLayout', () => {
                            this.layout = ((e) => {
                                let { items: t, gap: a } = e,
                                    i = [],
                                    r = 0,
                                    l = !1;
                                return (
                                    t.forEach((e, t) => {
                                        if (e.estimatedSize <= 0) return;
                                        let n = e.estimatedSize + a;
                                        (i.push({ id: e.id, index: t, start: r, end: r + n, size: n }), (r += n), (l = !0));
                                    }),
                                    { items: i, totalSize: l ? Math.max(0, r - a) : 0 }
                                );
                            })({ items: this.items, gap: this.gap });
                        }),
                        (0, l._)(this, 'cancelScheduledRefresh', () => {
                            var e;
                            if (void 0 === this.animationFrameId) return;
                            let t = null == (e = this.container) ? void 0 : e.ownerDocument.defaultView;
                            (null == t || t.cancelAnimationFrame(this.animationFrameId), (this.animationFrameId = void 0));
                        }),
                        (0, l._)(this, 'scheduleRefresh', () => {
                            if (!this.container || void 0 !== this.animationFrameId) return;
                            let e = this.container.ownerDocument.defaultView;
                            if (!e) return void this.refresh();
                            this.animationFrameId = e.requestAnimationFrame(() => {
                                ((this.animationFrameId = void 0), this.refresh());
                            });
                        }),
                        (this.resizeObserverAdapter = e));
                }
            }
        },
        70047: (e, t, a) => {
            a.d(t, { ContainerProvider: () => m });
            var i = a(88800),
                r = a(53548),
                l = a(30282),
                n = a(4086),
                s = a(41928);
            let o = (0, r.cache)(async (e, t, i, r, n, s, o, d, g, u, c, m, y, p, E, b) => {
                    let v = (0, l.IU)(t);
                    {
                        let [{ env: t, publicConfig: i }, { createDesktopContainer: r }] = await Promise.all([
                            v,
                            Promise.all([a.e(8283), a.e(7419), a.e(1625), a.e(1556), a.e(5753), a.e(8145)]).then(a.bind(a, 8145)),
                        ]);
                        return r({ tld: e, env: t, publicConfig: i, customApiPrefixUrl: p });
                    }
                }),
                d = null;
            a(51611);
            var g = a(73596);
            let u = async (e) => {
                    var t;
                    let { baseSetup: a } = e,
                        i = await (null != d ||
                            (d = o(
                                ...(function (e) {
                                    let {
                                            backendHostTld: t,
                                            env: a,
                                            forwardedForY: i,
                                            tracestate: r,
                                            traceparent: l,
                                            icookie: n,
                                            serverDetectedLocale: s,
                                            changeLanguageToken: o,
                                            userAgent: d,
                                            incomingRequestId: g,
                                            browserInfo: u,
                                            customApiPrefixUrl: c,
                                            customApiToken: m,
                                            requestUrl: y,
                                        } = e,
                                        { rawCookieString: p } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                    return [t, a, i, r, l, n, s, o, d, g, p, u.name, u.version, c, m, y];
                                })(a),
                            )),
                        d);
                    return (await i.get(n.Xc).loadDictionary(), await (null == (t = await i.get(n.RG)) ? void 0 : t()), i);
                },
                c = (e) => {
                    let { children: t, containerLoader: a } = e,
                        l = (0, r.use)(a);
                    return (0, i.jsxs)(s.B.Provider, { value: l, children: [!1, t] });
                },
                m = (e) => {
                    let { children: t, baseSetup: a } = e,
                        l = u({ baseSetup: a });
                    return (0, i.jsx)(r.Suspense, { fallback: (0, i.jsx)(g.AppSuspenseLoader, {}), children: (0, i.jsx)(c, { containerLoader: l, children: t }) });
                };
        },
        70565: (e, t, a) => {
            a.d(t, { I: () => r });
            var i = a(76794);
            let r = (e) => {
                let t = e === i.J.UGC,
                    a = e === i.J.OWN,
                    r = e === i.J.OWN_REPLACED_TO_UGC;
                return { isUGC: t, isOwn: a, isOwnReplacedToUGC: r, isNonUserGenerated: !t && !r };
            };
        },
        71104: (e, t, a) => {
            a.d(t, { c: () => i });
            let i = 20;
        },
        71594: (e, t, a) => {
            a.d(t, { s: () => i });
            let i = RegExp('(px|%)$');
        },
        71774: (e, t, a) => {
            a.d(t, { T: () => i });
            var i = (function (e) {
                return ((e.BRANDED = 'branded'), (e.DEFAULT = 'default'), (e.DUCK = 'duck'), (e.CAR = 'car'), e);
            })({});
        },
        73245: (e, t, a) => {
            a.d(t, { b: () => l });
            var i = a(5120),
                r = a(12906);
            let l = (e) => {
                var t, a;
                let { playlist: l, generatedPlaylistType: n, likesCount: s, trailer: o, tracksCount: d } = e;
                return (0, i.wg)({
                    isAvailable: null == (a = l.available) || a,
                    uuid: l.playlistUuid,
                    title: l.title,
                    uid: l.uid,
                    kind: l.kind,
                    coverUri: null == (t = l.cover) ? void 0 : t.uri,
                    generatedPlaylistType: n,
                    likesCount: s,
                    tracksCount: d,
                    trailer: (0, r.m)(o),
                });
            };
        },
        73596: (e, t, a) => {
            a.d(t, { AppSuspenseLoader: () => s });
            var i = a(88800),
                r = a(53548),
                l = a(87396);
            let n = (0, r.createContext)(null),
                s = () => {
                    let e = (0, r.useContext)(n);
                    return ((0, r.useLayoutEffect)(() => (null == e ? void 0 : e()), [e]), e ? null : (0, i.jsx)(l.MainSuspenseLoader, {}));
                };
        },
        74591: (e, t, a) => {
            a.d(t, { c: () => i });
            var i = (function (e) {
                return ((e.IDLE = 'idle'), (e.SUCCESS = 'success'), (e.ERROR = 'error'), e);
            })({});
        },
        75177: (e, t, a) => {
            var i;
            (a.d(t, { D: () => i }),
                (function (e) {
                    ((e.ALBUM = 'ALBUM'), (e.WAVE = 'WAVE'), (e.PROMO_LINK = 'PROMO_LINK'), (e.SETTING = 'SETTING'), (e.NON_MUSIC = 'NON_MUSIC'));
                })(i || (i = {})));
        },
        76009: (e, t, a) => {
            a.d(t, { StoreProvider: () => cV });
            var i,
                r,
                l,
                n,
                s,
                o,
                d,
                g,
                u,
                c,
                m,
                y,
                p,
                E,
                b,
                v,
                S,
                K = a(88800),
                I = a(84961),
                L = a(58390),
                T = a(30282),
                h = a(35412),
                N = a(4086),
                A = a(41928),
                f = a(223),
                C = a(89108),
                R = a(70003),
                k = a(72288),
                P = a(16818),
                _ = a(5120),
                D = a(50633),
                O = a(97956),
                w = a(67311);
            let G = _.gK.model('Cpa', { clid: _.gK.string, artistId: _.gK.number }),
                M = _.gK
                    .compose(_.gK.model('AlbumCpa', { albumId: _.gK.maybeNull(_.gK.number), cpa: _.gK.maybeNull(G) }), w.p)
                    .views((e) => ({
                        isPlusCPAEnabled(t) {
                            let { pageAlbumId: a, albumId: i, isNonMusic: r } = t,
                                {
                                    experiments: l,
                                    user: { isAuthorized: n },
                                } = (0, D.M)(e);
                            return !1;
                        },
                        isPlusCPAPlayerBarEnabled(t, a) {
                            let {
                                    experiments: i,
                                    user: { hasPlus: r },
                                } = (0, D.M)(e),
                                l = i.checkExperiment(O.z.WebNextPlusCPA, 'on');
                            return ((e) => {
                                let {
                                    isCpaFeatureEnabled: t,
                                    isDesktop: a,
                                    hasPlus: i,
                                    albumId: r,
                                    isNonMusic: l,
                                    cpaAlbumId: n,
                                    hasCpa: s,
                                    isPlusCPAExperimentEnabled: o,
                                } = e;
                                return !!t && !a && !i && !!r && !l && (!!o || (r === n && s));
                            })({
                                isCpaFeatureEnabled: !1,
                                isDesktop: T.NN,
                                hasPlus: r,
                                albumId: t,
                                isNonMusic: a,
                                cpaAlbumId: e.albumId,
                                hasCpa: !!e.cpa,
                                isPlusCPAExperimentEnabled: l,
                            });
                        },
                        isPlusCPABannerEnabled(t) {
                            var a;
                            let { pageAlbumId: i, albumId: r, isNonMusic: l } = t,
                                {
                                    experiments: n,
                                    settings: s,
                                    user: { hasPlus: o },
                                } = (0, D.M)(e);
                            return (null == (a = s.browserInfo) || a.isTouch, !1);
                        },
                        isHidePlusModalEnabled(t, a) {
                            var i;
                            let {
                                settings: r,
                                user: { hasPlus: l },
                            } = (0, D.M)(e);
                            return (null == (i = r.browserInfo) || i.isTouch, !1);
                        },
                    }))
                    .actions((e) => ({
                        getCpa: (0, _.L3)(function* (t) {
                            let { albumId: a, preloadedCpa: i } = t,
                                { experiments: r, user: l } = (0, D.M)(e);
                        }),
                        reset() {
                            ((e.albumId = null), e.destroyItems([e.cpa]));
                        },
                    }));
            var U = a(89916),
                B = a(18143);
            (((i || (i = {})).RECENT_ALBUMS = 'recent-albums'),
                (function (e) {
                    ((e[(e.DAY = 1)] = 'DAY'), (e[(e.WEEK = 7)] = 'WEEK'), (e[(e.MONTH = 30)] = 'MONTH'));
                })(r || (r = {})));
            var V = a(96820),
                F = a(74773);
            let x = (e, t, a) => {
                let i = e.get(t);
                if (i) return void i.push(a);
                e.set(t, [a]);
            };
            var j = a(27395),
                W = a(20012);
            let X = (e) => ({ type: W.r.TEXT, data: null != e ? e : null, loadingState: F.G.RESOLVE });
            var $ = a(54667);
            let Y = (e) => {
                    var t;
                    let { data: a, ...i } = e;
                    return { type: null != (t = null == a ? void 0 : a.type) ? t : $.S.TRACK, data: null != a ? a : null, ...i };
                },
                J = (e) => ''.concat(e, '-text'),
                q = (e) => String(e),
                H = (e) => e.filter((e) => e.type !== W.r.TEXT);
            var z = a(50914);
            let Q = (e) => !!(e && 'positionInContext' in e);
            var Z = a(96826),
                ee = a(59497);
            let et = _.gK
                    .compose(
                        _.gK.model('VolumeItemTrack', {
                            type: _.gK.maybe(_.gK.enumeration(Object.values($.S))),
                            id: _.gK.union(_.gK.string, _.gK.number),
                            data: _.gK.maybeNull(Z.v),
                            position: _.gK.maybe(_.gK.number),
                            positionInContext: _.gK.number,
                            isBest: _.gK.maybe(_.gK.boolean),
                            hasEverFinished: _.gK.maybe(_.gK.boolean),
                        }),
                        ee.X,
                    )
                    .actions((e) => ({
                        updateEverFinished: (t) => {
                            e.hasEverFinished = t;
                        },
                    }))
                    .named('VolumeItemTrack'),
                ea = _.gK.compose(_.gK.model('VolumeItemText', { type: _.gK.literal(W.r.TEXT), data: _.gK.maybeNull(_.gK.number) }), ee.X),
                ei = _.gK.union(ea, et),
                er = (e, t) => {
                    var a, i;
                    if (!e.checkExperiment(t, 'on')) return;
                    let r = null == (i = e.getExperiment(t)) || null == (a = i.value) ? void 0 : a.imp_id;
                    if ('string' != typeof r || !r.trim()) return;
                    let l = Number(r);
                    if (Number.isFinite(l)) return l;
                };
            var el = a(42078),
                en = a(52643);
            let es = (e, t, a, i) => ({ type: el._.ALBUM_ITEM, data: (0, en.s)({ album: e, artists: t, trailer: a, releaseDate: i }) });
            var eo = a(14283);
            let ed = (e, t) => ({ type: el._.ARTIST_ITEM, data: (0, eo.a)({ artist: e, trailer: t }) });
            var eg = a(73245);
            let eu = (e) => {
                    let { playlist: t, likesCount: a, trailer: i, tracksCount: r } = e;
                    return { type: el._.LIKED_PLAYLIST_ITEM, data: (0, eg.b)({ playlist: t, likesCount: a, trailer: i, tracksCount: r }) };
                },
                ec = (e, t) => ({ type: el._.PLAYLIST_ITEM, data: (0, eg.b)({ playlist: e, trailer: t }) });
            var em = a(7227);
            let ey = (e) => (0, _.wg)({ type: el._.WAVE_AGENT_ITEM, data: (0, em.l)(e.data.wave, e.data.agent) }),
                ep = (e) => {
                    var t;
                    let a =
                        null == (t = (e || {}).items)
                            ? void 0
                            : t.map((e) => {
                                  switch (e.type) {
                                      case el._.LIKED_PLAYLIST_ITEM:
                                          return eu({ playlist: e.data.playlist, likesCount: e.data.likesCount, trailer: e.data.trailer });
                                      case el._.ALBUM_ITEM:
                                          return es(e.data.album, e.data.artists, e.data.trailer, e.data.releaseDate);
                                      case el._.ARTIST_ITEM:
                                          return ed(e.data.artist, e.data.trailer);
                                      case el._.WAVE_AGENT_ITEM:
                                          return ey(e);
                                      case el._.PLAYLIST_ITEM:
                                          return ec(e.data.playlist, e.data.trailer);
                                  }
                              });
                    return (0, _.wg)({ items: a });
                };
            var eE = (function (e) {
                    return ((e.IDLE = 'IDLE'), (e.PENDING = 'PENDING'), (e.RESOLVE = 'RESOLVE'), (e.REJECT = 'REJECT'), (e.OUTDATED = 'OUTDATED'), e);
                })({}),
                eb = a(82212),
                ev = a(56846);
            function eS(e) {
                return {
                    id: e,
                    type: eb.t.ARTIST_RECOMMENDATIONS_PROMO,
                    loadingState: eE.IDLE,
                    isNotFound: !1,
                    hasSentAnalyticsOnLoaded: !1,
                    meta: { showPolicy: ev.E.LOAD_AND_SHOW },
                };
            }
            let eK = (e) =>
                    (0, _.wg)({
                        album: (0, en.s)({ album: e.album, artists: e.artists }),
                        artists: e.artists.map((e) => (0, eo.a)({ artist: e })),
                        cover: e.cover,
                        coverContentMode: e.coverContentMode,
                        clickUrl: e.reporting.clickUrl,
                        yclid: e.playbackParams.yclid,
                        utm: e.playbackParams.utm,
                    }),
                eI = (e) => ({ url: e.url, timeMs: e.timeMs }),
                eL = (e) => {
                    if (e) return { adImpressions: eI(e.adImpressions), blockImpression: eI(e.blockImpression), blockRender: eI(e.blockRender) };
                },
                eT = (e) => {
                    let t = eL(e.reporting),
                        a = e.albumBanners.map((e) => ({ ...eK(e), adImpressions: e.adImpressions }));
                    return (0, _.wg)({ reporting: t, items: a });
                },
                eh = (e) => {
                    let { showPolicy: t, isNeededToLoad: a, isLoading: i, isLoaded: r, isRejected: l, isNotEmpty: n, isOutdated: s, isNeededToHide: o } = e;
                    if (o) return !1;
                    switch (t) {
                        case ev.E.SHOW_AND_LOAD:
                            if (i || l || a) return !0;
                            return n;
                        case ev.E.LOAD_AND_SHOW:
                            return (r && n) || !!s;
                        default:
                            return !0;
                    }
                },
                eN = _.gK
                    .model('LandingBaseBlock', {
                        loadingState: _.gK.enumeration(Object.values(eE)),
                        id: _.gK.string,
                        isNotFound: _.gK.boolean,
                        hasSentAnalyticsOnLoaded: _.gK.boolean,
                        meta: _.gK.maybe(_.gK.frozen()),
                    })
                    .views((e) => ({
                        get isNeededToLoad() {
                            return e.loadingState === eE.IDLE;
                        },
                        get isLoading() {
                            return e.loadingState === eE.PENDING;
                        },
                        get isLoaded() {
                            return e.loadingState === eE.RESOLVE;
                        },
                        get isRejected() {
                            return e.loadingState === eE.REJECT;
                        },
                        get isOutdated() {
                            return e.loadingState === eE.OUTDATED;
                        },
                        get isShimmerVisible() {
                            return this.isNeededToLoad || this.isLoading || this.isRejected;
                        },
                        get isShimmerActive() {
                            return this.isLoading;
                        },
                    }))
                    .actions((e) => ({
                        setHasSentAnalyticsOnLoaded(t) {
                            e.hasSentAnalyticsOnLoaded = t;
                        },
                        setOutdated() {
                            e.loadingState = eE.OUTDATED;
                        },
                        setIsNeededToLoad() {
                            e.loadingState = eE.IDLE;
                        },
                    })),
                eA = _.gK.model('LandingBlockFetchableMetaSource', { uri: _.gK.string, countWeb: _.gK.maybe(_.gK.number), count: _.gK.maybe(_.gK.number) }),
                ef = _.gK.model('LandingBlockFetchableMeta', {
                    title: _.gK.maybe(_.gK.string),
                    description: _.gK.maybe(_.gK.string),
                    viewAllActionLink: _.gK.maybeNull(_.gK.string),
                    source: _.gK.maybe(eA),
                    showPolicy: _.gK.maybe(_.gK.string),
                    coverStyle: _.gK.maybe(_.gK.string),
                });
            var eC = a(49573),
                eR = a(90544),
                ek = a(67174),
                eP = a(63425);
            let e_ = _.gK
                    .model('PromoDataItem', {
                        album: eC.J,
                        artists: _.gK.array(eR.P),
                        cover: eP.$,
                        coverContentMode: _.gK.maybe(_.gK.string),
                        clickUrl: _.gK.string,
                        yclid: _.gK.string,
                        utm: _.gK.frozen(),
                        hasClicked: _.gK.optional(_.gK.boolean, !1),
                    })
                    .views((e) => {
                        let t = {
                            get reportingProperties() {
                                return { ...e.utm, yclid: e.yclid };
                            },
                            get albumUrl() {
                                let { href: a } = (0, ek.u)(e.album.url, { query: t.reportingProperties });
                                return a;
                            },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        setClicked: (0, _.L3)(function* () {
                            if (!(0, _._n)(e) || e.hasClicked) return;
                            let { prefixlessResource: t, modelActionsLogger: a } = (0, _._$)(e);
                            try {
                                ((e.hasClicked = !0), yield t.reportForPromo(e.clickUrl));
                            } catch (e) {
                                a.error(e);
                            }
                        }),
                    })),
                eD = _.gK.model('PromoDataReportingOptions', { url: _.gK.string, timeMs: _.gK.number }),
                eO = _.gK.model('PromoDataReporting', { blockRender: eD, blockImpression: eD, adImpressions: eD }),
                ew = _.gK.model('Promo', { reporting: _.gK.maybe(eO), items: _.gK.array(e_) }).actions((e) => ({
                    report: (0, _.L3)(function* (t) {
                        if (!(0, _._n)(e)) return;
                        let { prefixlessResource: a, modelActionsLogger: i } = (0, _._$)(e);
                        try {
                            yield a.reportForPromo(t);
                        } catch (e) {
                            i.error(e);
                        }
                    }),
                })),
                eG = e_
                    .props({ adImpressions: eD })
                    .named('ArtistRecommendationsPromoDataItem')
                    .views((e) => ({
                        get avatarArtists() {
                            return e.artists.slice(0, 3);
                        },
                        get averageColor() {
                            return e.album.averageColor;
                        },
                    }))
                    .actions((e) => ({
                        reportImpression: (0, _.L3)(function* () {
                            if (!(0, _._n)(e)) return;
                            let { prefixlessResource: t, modelActionsLogger: a } = (0, _._$)(e);
                            try {
                                yield t.reportForPromo(e.adImpressions.url);
                            } catch (e) {
                                a.error(e);
                            }
                        }),
                    })),
                eM = ew.props({ items: _.gK.array(eG) }).named('ArtistRecommendationsPromoData'),
                eU = eN
                    .props({
                        type: _.gK.union(_.gK.literal(eb.t.ARTIST_RECOMMENDATIONS_PROMO), _.gK.literal(eb.t.SIMPLE_ARTIST_RECOMMENDATIONS_PROMO)),
                        data: _.gK.maybe(eM),
                        meta: ef,
                    })
                    .named('ArtistRecommendationsPromo')
                    .views((e) => ({
                        get isVisible() {
                            var t;
                            return eh({
                                showPolicy: e.meta.showPolicy,
                                isNeededToLoad: e.isNeededToLoad,
                                isLoading: e.isLoading,
                                isLoaded: e.isLoaded,
                                isRejected: e.isRejected,
                                isNotEmpty: !!(null == (t = e.data) ? void 0 : t.items.length),
                                isOutdated: e.isOutdated,
                            });
                        },
                        get objectsCount() {
                            var a, i;
                            return null != (i = null == (a = e.data) ? void 0 : a.items.length) ? i : 0;
                        },
                    })),
                eB = _.gK.compose(_.gK.model('ArtistRecommendationsPromoPage', { artistRecommendationsPromo: _.gK.maybe(eU) }), w.p).actions((e) => ({
                    getArtistRecommendationsPromo: (0, _.L3)(function* (t) {
                        let { promoResource: a, modelActionsLogger: i } = (0, _._$)(e),
                            r = e.artistRecommendationsPromo;
                        if (r && !r.isLoading)
                            try {
                                r.loadingState = eE.PENDING;
                                let e = yield a.getBlockBanners(t);
                                if (!(0, _._n)(r)) return;
                                ((r.data = eT(e)), (r.loadingState = eE.RESOLVE));
                            } catch (e) {
                                if ((i.error(e), !(0, _._n)(r))) return;
                                r.loadingState = eE.REJECT;
                            }
                    }),
                    resetArtistRecommendationsPromo() {
                        let t = e.artistRecommendationsPromo;
                        if (!t) return;
                        let { id: a } = t;
                        (e.destroyItems([t]), (e.artistRecommendationsPromo = (0, _.wg)(eS(a))));
                    },
                })),
                eV = _.gK.model('LandingAlbumItem', { type: _.gK.literal(el._.ALBUM_ITEM), data: eC.J }),
                eF = _.gK.model('LandingArtistItem', { type: _.gK.literal(el._.ARTIST_ITEM), data: eR.P });
            var ex = a(78460);
            let ej = _.gK.model('LandingLikedPlaylistItem', { type: _.gK.literal(el._.LIKED_PLAYLIST_ITEM), data: ex.I }),
                eW = _.gK.model('LandingPlaylistItem', { type: _.gK.literal(el._.PLAYLIST_ITEM), data: ex.I });
            var eX = a(41814);
            let e$ = _.gK.model('LandingVibeAgentItem', { type: _.gK.union(_.gK.literal(el._.WAVE_AGENT_ITEM), _.gK.literal(el._.QUERY_TO_VIBE_ITEM)), data: eX.G }),
                eY = _.gK.union(ej, eV, eF, e$, eW),
                eJ = _.gK.model('EntitiesCarouselData', { items: _.gK.array(eY) }),
                eq = eN
                    .props({
                        type: _.gK.union(
                            _.gK.literal(eb.t.NEW_PLAYLISTS),
                            _.gK.literal(eb.t.EDITORIAL_COMPILATION),
                            _.gK.literal(eb.t.RECOMMENDED_PLAYLISTS),
                            _.gK.literal(eb.t.META_TAG_POPULAR_PLAYLISTS),
                            _.gK.literal(eb.t.META_TAG_NEW_ALBUMS),
                            _.gK.literal(eb.t.META_TAG_PLAYLISTS),
                            _.gK.literal(eb.t.MICRO_GENRE_ALBUMS),
                            _.gK.literal(eb.t.META_TAG_ALBUMS),
                            _.gK.literal(eb.t.ARTIST_PLAYLISTS),
                            _.gK.literal(eb.t.ARTIST_ALBUMS),
                            _.gK.literal(eb.t.ARTIST_COMPILATIONS),
                            _.gK.literal(eb.t.ARTIST_STUDIO_ALBUMS),
                            _.gK.literal(eb.t.ARTIST_SIMILAR_ENTITIES),
                            _.gK.literal(eb.t.COLLECTION_SIMILAR_ENTITIES),
                        ),
                        data: _.gK.maybe(eJ),
                        meta: ef,
                    })
                    .named('EntitiesCarousel')
                    .views((e) => ({
                        get isVisible() {
                            var t;
                            return eh({
                                showPolicy: e.meta.showPolicy,
                                isNeededToLoad: e.isNeededToLoad,
                                isLoading: e.isLoading,
                                isLoaded: e.isLoaded,
                                isRejected: e.isRejected,
                                isNotEmpty: (null == (t = e.data) ? void 0 : t.items.length) !== 0,
                            });
                        },
                        get objectsCount() {
                            var a, i;
                            return null != (i = null == (a = e.data) ? void 0 : a.items.length) ? i : 0;
                        },
                    })),
                eH = (e) => {
                    let { url: t, artist: a, goal: i } = e;
                    return (0, _.wg)({ url: t, goal: i, artist: (0, eo.a)({ artist: a }) });
                };
            var ez = a(82457),
                eQ = a(83890),
                eZ = a(31946),
                e0 = a(77560),
                e1 = a(62697);
            let e3 = (e) => (0, _.wg)({ id: e.id, type: e.type, title: e.title, albums: e.albums.map(eQ.p) }),
                e2 = _.gK.model('Donation', { url: _.gK.string, artist: eR.P, goal: _.gK.maybe(_.gK.string) }),
                e5 = _.gK.compose(_.gK.model('AlbumDonations', { items: _.gK.maybeNull(_.gK.array(e2)) }), w.p, ee.X).actions((e) => ({
                    reset() {
                        ((e.loadingState = F.G.IDLE), e.destroyItems([e.items]));
                    },
                })),
                e6 = _.gK.model('LabelItem', { id: _.gK.number, name: _.gK.string }),
                e8 = _.gK.compose(_.gK.model('RelatedAlbumsPage', { items: _.gK.array(eC.J) }), w.p, ee.X).actions((e) => ({
                    reset() {
                        ((e.loadingState = F.G.IDLE), e.destroyItems([e.items]));
                    },
                })),
                e4 = _.gK.model('RelatedContentItem', { id: _.gK.string, type: _.gK.string, title: _.gK.string, albums: _.gK.array(eC.J) }),
                e7 = _.gK.compose(_.gK.model('RelatedContent', { items: _.gK.maybeNull(_.gK.array(e4)) }), w.p, ee.X).actions((e) => ({
                    reset() {
                        ((e.loadingState = F.G.IDLE), e.destroyItems([e.items]));
                    },
                })),
                e9 = _.gK
                    .compose(
                        _.gK.model('AlbumPage', {
                            id: _.gK.maybeNull(_.gK.number),
                            meta: _.gK.maybeNull(eC.J),
                            items: _.gK.array(ei),
                            errorStatusCode: _.gK.maybeNull(_.gK.number),
                            deprecationTargetAlbumId: _.gK.maybeNull(_.gK.number),
                            latestGenreAlbums: _.gK.maybe(e8),
                            otherArtistAlbums: _.gK.maybe(e8),
                            otherAlbumVersions: _.gK.maybe(_.gK.array(eC.J)),
                            labels: _.gK.maybeNull(_.gK.array(e6)),
                            description: _.gK.maybe(_.gK.string),
                            donations: _.gK.maybe(e5),
                            relatedContent: _.gK.maybe(e7),
                            allTracksUnfinished: _.gK.boolean,
                            similarEntities: eq,
                        }),
                        eB,
                        e1.E,
                        ee.X,
                    )
                    .volatile(() => ({ indexItems: new Map() }))
                    .views((e) => {
                        let t = {
                            get isOtherArtistAlbumsAvailable() {
                                var a, i, r, l, n;
                                return !!(
                                    !(null == (a = e.meta) ? void 0 : a.isNonMusic) &&
                                    (null == (r = e.meta) || null == (i = r.artists) ? void 0 : i.length) === 1 &&
                                    !(null == (n = e.meta) || null == (l = n.artists[0]) ? void 0 : l.various)
                                );
                            },
                            get isLatestGenreAlbumsAvailable() {
                                var s, o;
                                let { experiments: t } = (0, D.M)(e);
                                return !!(
                                    !t.checkExperiment(O.z.WebNextLatestGenreAlbumsDegradation, 'on') &&
                                    !(null == (s = e.meta) ? void 0 : s.isNonMusic) &&
                                    (null == (o = e.meta) ? void 0 : o.genre)
                                );
                            },
                            get isNotFound() {
                                return e.isRejected && (e.errorStatusCode === U.X1.NOT_FOUND || e.errorStatusCode === U.X1.BAD_REQUEST);
                            },
                            get artistRecommendationsPromoImpId() {
                                let { experiments: t } = (0, D.M)(e);
                                return er(t, O.z.WebNextAlbumImpulseBanner);
                            },
                            get isSimilarEntitiesEnabled() {
                                let { experiments: t } = (0, D.M)(e);
                                return t.checkExperiment(O.z.WebNextWaveAgentExperiment, 'on');
                            },
                            get isCacheNotFound() {
                                return e.isRejected && e.errorStatusCode === V.FX;
                            },
                            get hasDonations() {
                                var d;
                                return !!((null == (d = e.donations) ? void 0 : d.isResolved) && e.donations && e.donations.items && e.donations.items.length > 0);
                            },
                            get isArtistRecommendationsPromoAllowed() {
                                return e.isResolved && void 0 !== t.artistRecommendationsPromoImpId;
                            },
                            get hasSimilarEntities() {
                                var g;
                                return !!(
                                    t.isSimilarEntitiesEnabled &&
                                    e.similarEntities.isLoaded &&
                                    (null == (g = e.similarEntities.data) ? void 0 : g.items) &&
                                    e.similarEntities.data.items.length > 0
                                );
                            },
                            get hasOtherAlbumVersions() {
                                return !!(e.isNeededToLoad || e.loadingState === F.G.PENDING || (e.otherAlbumVersions && e.otherAlbumVersions.length > 0));
                            },
                            get hasLatestGenreAlbums() {
                                var u, c;
                                let a = e.latestGenreAlbums && e.latestGenreAlbums.items && e.latestGenreAlbums.items.length > 0;
                                return !!(
                                    t.isLatestGenreAlbumsAvailable &&
                                    ((null == (u = e.latestGenreAlbums) ? void 0 : u.isNeededToLoad) || (null == (c = e.latestGenreAlbums) ? void 0 : c.isLoading) || a)
                                );
                            },
                            get hasOtherArtistAlbums() {
                                var m, y;
                                let a = e.otherArtistAlbums && e.otherArtistAlbums.items && e.otherArtistAlbums.items.length > 0;
                                return !!(
                                    t.isOtherArtistAlbumsAvailable &&
                                    ((null == (m = e.otherArtistAlbums) ? void 0 : m.isNeededToLoad) || (null == (y = e.otherArtistAlbums) ? void 0 : y.isLoading) || a)
                                );
                            },
                            get isLoading() {
                                return e.isNeededToLoad || e.loadingState === F.G.PENDING;
                            },
                            get isLatestGenreAlbumsLoading() {
                                var p, E;
                                return !!((null == (p = e.latestGenreAlbums) ? void 0 : p.isNeededToLoad) || (null == (E = e.latestGenreAlbums) ? void 0 : E.isLoading));
                            },
                            get isOtherArtistAlbumsLoading() {
                                var b, v;
                                return !!((null == (b = e.otherArtistAlbums) ? void 0 : b.isNeededToLoad) || (null == (v = e.otherArtistAlbums) ? void 0 : v.isLoading));
                            },
                            get isRelatedContentLoading() {
                                var S, K;
                                return !!((null == (S = e.relatedContent) ? void 0 : S.isNeededToLoad) || (null == (K = e.relatedContent) ? void 0 : K.isLoading));
                            },
                            get contextMeta() {
                                var I, L, T, h, N, A, f, C, R;
                                return {
                                    id: e.meta.id,
                                    title: null == (I = e.meta) ? void 0 : I.title,
                                    coverUri: null == (L = e.meta) ? void 0 : L.coverUri,
                                    type: null == (T = e.meta) ? void 0 : T.type,
                                    year: null == (h = e.meta) ? void 0 : h.year,
                                    version: null == (N = e.meta) ? void 0 : N.version,
                                    genre: null == (A = e.meta) ? void 0 : A.genre,
                                    likesCount: null == (f = e.meta) ? void 0 : f.likesCount,
                                    averageColor: null == (C = e.meta) ? void 0 : C.averageColor,
                                    available: null == (R = e.meta) ? void 0 : R.isAvailable,
                                };
                            },
                            get tracks() {
                                return H(e.items);
                            },
                            get lastEpisodes() {
                                return H(e.items).slice(0, j.Rk);
                            },
                            get lastEpisodesTrackIds() {
                                return t.lastEpisodes.map((e) => e.id);
                            },
                            get hasLabel() {
                                var k;
                                let { hasLabels: t } = (0, e0.p)({ labels: e.labels, type: null == (k = e.meta) ? void 0 : k.type });
                                return t;
                            },
                            labelUrl(e) {
                                let { href: t } = (0, eZ.r)(e);
                                return t;
                            },
                        };
                        return t;
                    })
                    .actions((e) => {
                        let t = () => {
                                !e.indexItems.size &&
                                    e.items.length &&
                                    (e.indexItems = ((e) => {
                                        let t = new Map();
                                        for (let a = 0; a < e.length; a++) {
                                            let i = e[a];
                                            if (i) {
                                                if (Q(i)) {
                                                    x(t, q(i.id), a);
                                                    continue;
                                                }
                                                if (i.type === W.r.TEXT)
                                                    for (let i = a + 1; i < e.length; i++) {
                                                        let r = e[i];
                                                        if (r) {
                                                            if (Q(r)) {
                                                                x(t, J(r.id), a);
                                                                break;
                                                            }
                                                            if (r.type === W.r.TEXT) break;
                                                        }
                                                    }
                                            }
                                        }
                                        return t;
                                    })(e.items));
                            },
                            a = {
                                makeFlatVolumeItems: (t) => {
                                    let a = ((e) => {
                                        let { volumes: t } = e,
                                            a = t.length,
                                            i = [],
                                            r = new Map(),
                                            l = [],
                                            n = [],
                                            s = 0;
                                        for (let e of t)
                                            for (let t of (a > j.VN && e[0] && (i.push(X()), r.set(J(e[0].id), [i.length - 1])), e))
                                                (n.push(t.id),
                                                    i.push(Y({ id: t.id, loadingState: F.G.IDLE, positionInContext: s })),
                                                    i.length <= j.vY && l.push(String(t.id)),
                                                    x(r, q(t.id), i.length - 1),
                                                    s++);
                                        return { items: i, indexItems: r, initialTrackIds: l, trackIds: n };
                                    })({ volumes: t.volumes });
                                    return ((e.items = (0, _.wg)(a.items)), (e.indexItems = a.indexItems), a);
                                },
                                updateVolumeItemsState: (a, i) => {
                                    (t(),
                                        ((e) => {
                                            let { items: t, indexItems: a, trackIds: i, loadingState: r } = e;
                                            for (let e of i) {
                                                let i = a.get(String(e));
                                                if (i)
                                                    for (let a of i) {
                                                        let i = t[a];
                                                        Q(i) &&
                                                            ((i.id = e),
                                                            (i.type = $.S.TRACK),
                                                            (i.data = null),
                                                            (i.position = void 0),
                                                            (i.isBest = void 0),
                                                            (i.loadingState = r));
                                                    }
                                            }
                                        })({ items: e.items, indexItems: e.indexItems, trackIds: a, loadingState: i }));
                                },
                                insertDataToVolumeItems: (a) => {
                                    var i;
                                    return (
                                        t(),
                                        ((e) => {
                                            let { items: t, indexItems: a, data: i, bestAlbumTracks: r } = e,
                                                l = t[0],
                                                n = Q(l) ? l.id : null,
                                                s = r ? new Set(r.map(Number)) : void 0,
                                                o = [];
                                            for (let e = 0; e < i.length; e++) {
                                                var d, g, u, c, m, y, p, E;
                                                let r = i[e];
                                                if (!r) continue;
                                                let l = a.get(q(r.id)),
                                                    b = !1;
                                                if (l)
                                                    for (let a of l) {
                                                        let i = t[a],
                                                            l = t[a - 1];
                                                        if (!Q(i)) continue;
                                                        let m =
                                                                n === i.id
                                                                    ? 1
                                                                    : null == (u = r.albums) || null == (g = u[0]) || null == (d = g.trackPosition)
                                                                      ? void 0
                                                                      : d.index,
                                                            y = null == i ? void 0 : i.positionInContext,
                                                            p = Q(l) && (null == l ? void 0 : l.position) ? l.position + 1 : m,
                                                            E = (0, z.K)(r, { hasEverFinished: null == i ? void 0 : i.hasEverFinished });
                                                        if (E.isRemoved) {
                                                            ((i.id = r.id),
                                                                (i.type = $.S.TRACK),
                                                                (i.data = null),
                                                                (i.isBest = void 0),
                                                                (i.hasEverFinished = void 0),
                                                                (i.loadingState = F.G.REJECT),
                                                                (i.positionInContext = y),
                                                                (i.position = Q(l) ? l.position : e));
                                                            continue;
                                                        }
                                                        ((i.id = r.id),
                                                            (i.type = null != (c = E.type) ? c : $.S.TRACK),
                                                            (i.data = E),
                                                            (i.position = (null == l ? void 0 : l.type) === W.r.TEXT ? 1 : p),
                                                            (i.positionInContext = y),
                                                            (i.isBest = null == s ? void 0 : s.has(Number(r.id))),
                                                            (i.loadingState = F.G.RESOLVE),
                                                            b || (o.push(a), (b = !0)));
                                                    }
                                                let v = a.get(J(r.id));
                                                if (v)
                                                    for (let e of v) {
                                                        let a = t[e];
                                                        (null == a ? void 0 : a.type) === W.r.TEXT &&
                                                            (a.data =
                                                                null !=
                                                                (E = null == (p = r.albums) || null == (y = p[0]) || null == (m = y.trackPosition) ? void 0 : m.volume)
                                                                    ? E
                                                                    : null);
                                                    }
                                            }
                                            return o;
                                        })({ items: e.items, indexItems: e.indexItems, data: a, bestAlbumTracks: null == (i = e.meta) ? void 0 : i.bestAlbumTracks })
                                    );
                                },
                                setAlbumUnfinished: () => {
                                    var t;
                                    (a.markUnfinished({ albumId: e.id || 0 }), null == (t = e.meta) || t.updateFinished(!1));
                                },
                                setAllTracksUnfinished: (t) => {
                                    e.allTracksUnfinished = t;
                                },
                                checkAllAlbumTrackFinished: () => {
                                    var t, i;
                                    e.items
                                        .filter((e) => {
                                            let { type: t, data: a } = e;
                                            return a && t !== W.r.TEXT;
                                        })
                                        .every((e) => {
                                            var t;
                                            let { data: a } = e;
                                            return null == a || null == (t = a.streamProgress) ? void 0 : t.hasEverFinished;
                                        }) &&
                                        ((null == (t = e.meta) ? void 0 : t.listeningFinished) ||
                                            (a.markFinished({ albumId: Number(e.id) }), null == (i = e.meta) || i.updateFinished(!0)));
                                },
                                markTracksFinished: (t) => {
                                    let { withoutTracks: a = [] } = t;
                                    e.items.forEach((e) => {
                                        if (e.type === W.r.TEXT) return;
                                        let { data: t } = e;
                                        if (!(t && a.includes(t.id)))
                                            if (t) {
                                                var i;
                                                null == (i = t.streamProgress) || i.updateEverFinished(!0);
                                            } else e.updateEverFinished(!0);
                                    });
                                },
                                markFinished: (0, _.L3)(function* (t) {
                                    let { streamsResource: a, modelActionsLogger: i } = (0, _._$)(e);
                                    try {
                                        return yield a.markAlbumFinished(t);
                                    } catch (e) {
                                        return (i.error(e), B.T.ERROR);
                                    }
                                }),
                                markUnfinished: (0, _.L3)(function* (t) {
                                    let { streamsResource: a, modelActionsLogger: i } = (0, _._$)(e);
                                    try {
                                        return yield a.markAlbumUnfinished(t);
                                    } catch (e) {
                                        return (i.error(e), B.T.ERROR);
                                    }
                                }),
                                setListeningFinishedStatus: (0, _.L3)(function* () {
                                    var t;
                                    return (null == (t = e.meta) ? void 0 : t.listeningFinished)
                                        ? (a.setAllTracksUnfinished(!0), yield a.markUnfinished({ albumId: Number(e.id) }))
                                        : yield a.markFinished({ albumId: Number(e.id) });
                                }),
                                getLatestGenreAlbums: (0, _.L3)(function* (t) {
                                    let { topResource: a, modelActionsLogger: i } = (0, _._$)(e);
                                    if (e.latestGenreAlbums && !e.latestGenreAlbums.isLoading)
                                        try {
                                            e.latestGenreAlbums.loadingState = F.G.PENDING;
                                            let i = yield a.getTopByGenre(t);
                                            ((e.latestGenreAlbums.items = (0, _.wg)(i.albums.map(eQ.p))), (e.latestGenreAlbums.loadingState = F.G.RESOLVE));
                                        } catch (t) {
                                            (i.error(t), (e.latestGenreAlbums.loadingState = F.G.REJECT));
                                        }
                                }),
                                getSimilarEntities: (0, _.L3)(function* (t) {
                                    let { albumResource: a, modelActionsLogger: i } = (0, _._$)(e);
                                    if (!e.similarEntities.isLoading)
                                        try {
                                            e.similarEntities.loadingState = eE.PENDING;
                                            let i = yield a.getSimilarEntities(t);
                                            ((e.similarEntities.data = ep(i)), (e.similarEntities.loadingState = eE.RESOLVE));
                                        } catch (t) {
                                            (i.error(t), (e.similarEntities.loadingState = eE.REJECT));
                                        }
                                }),
                                getOtherArtistAlbums: (0, _.L3)(function* (t, a) {
                                    let { artistsResource: i, modelActionsLogger: r } = (0, _._$)(e);
                                    if (e.otherArtistAlbums && !e.otherArtistAlbums.isLoading)
                                        try {
                                            if (!t.artistId) {
                                                e.otherArtistAlbums.loadingState = F.G.REJECT;
                                                return;
                                            }
                                            e.otherArtistAlbums.loadingState = F.G.PENDING;
                                            let r = yield i.getSafeDirectAlbums({ ...t, artistId: t.artistId });
                                            ((e.otherArtistAlbums.items = (0, _.wg)(r.albums.filter((e) => String(e.id) !== String(a)).map(eQ.p))),
                                                (e.otherArtistAlbums.loadingState = F.G.RESOLVE));
                                        } catch (t) {
                                            (r.error(t), (e.otherArtistAlbums.loadingState = F.G.REJECT));
                                        }
                                }),
                                getTracks: (0, _.L3)(function* (t) {
                                    let { trackIds: i } = t,
                                        { tracksResource: r, modelActionsLogger: l } = (0, _._$)(e);
                                    try {
                                        var n, s;
                                        if (!(null == (n = e.meta) ? void 0 : n.id)) return;
                                        a.updateVolumeItemsState(i, F.G.PENDING);
                                        let t = yield ((e) => {
                                            let { albumId: t, trackIds: a, getTracksMeta: i } = e;
                                            return i({ trackIds: a.map((e) => ''.concat(e, ':').concat(t)), withProgress: !0 });
                                        })({ albumId: e.meta.id, trackIds: i, getTracksMeta: (e) => r.getTracksMeta(e) });
                                        for (let i of a.insertDataToVolumeItems(t)) {
                                            let t = e.items[i];
                                            Q(t) && (null == (s = t.data) ? void 0 : s.resolveAllDisclaimers) && t.data.resolveAllDisclaimers();
                                        }
                                    } catch (e) {
                                        (l.error(e), a.updateVolumeItemsState(i, F.G.REJECT));
                                    }
                                }),
                                getDonations: (0, _.L3)(function* (t) {
                                    let { albumId: a } = t,
                                        { experiments: i } = (0, D.M)(e),
                                        { donationResource: r, modelActionsLogger: l } = (0, _._$)(e);
                                    if (i.checkExperiment(O.z.WebNextAlbumDonationButton, 'on') && e.donations && !e.donations.isLoading)
                                        try {
                                            e.donations.loadingState = F.G.PENDING;
                                            let { donations: t } = yield r.getAlbumDonations({ albumId: a });
                                            (t &&
                                                (e.donations.items = (0, _.wg)(
                                                    t.map((e) => {
                                                        var t;
                                                        let { data: a } = e;
                                                        return eH({ url: a.tipUrl, goal: null == (t = a.goal) ? void 0 : t.title, artist: a.artist });
                                                    }),
                                                )),
                                                (e.donations.loadingState = F.G.RESOLVE));
                                        } catch (t) {
                                            (l.error(t), (e.donations.loadingState = F.G.REJECT));
                                        }
                                }),
                                getData: (0, _.L3)(function* (t) {
                                    let {
                                            albumId: l,
                                            resumeStream: n,
                                            preloadedAlbum: s,
                                            withLatestGenreAlbumsRequest: o = !0,
                                            withOtherArtistAlbumsRequest: d = !0,
                                            sonataState: g,
                                        } = t,
                                        { albumResource: u, modelActionsLogger: c } = (0, _._$)(e);
                                    if (((e.id = l), e.loadingState !== F.G.PENDING))
                                        try {
                                            var m, y, p, E, b, v;
                                            let t, c;
                                            e.loadingState = F.G.PENDING;
                                            let S = s;
                                            S || (S = yield u.getAlbumWithTracksIds({ albumId: l, resumeStream: n }));
                                            let K =
                                                ((b = S),
                                                'not-found' === b.error
                                                    ? { status: 'not-found' }
                                                    : (null == (v = b.deprecation) ? void 0 : v.targetAlbumId)
                                                      ? { status: 'deprecated', targetAlbumId: b.deprecation.targetAlbumId }
                                                      : { status: 'loaded' });
                                            if ('not-found' === K.status) {
                                                ((e.errorStatusCode = U.X1.NOT_FOUND),
                                                    (e.loadingState = F.G.REJECT),
                                                    e.otherArtistAlbums && (e.otherArtistAlbums.loadingState = F.G.REJECT),
                                                    e.latestGenreAlbums && (e.latestGenreAlbums.loadingState = F.G.REJECT));
                                                return;
                                            }
                                            if ('deprecated' === K.status) {
                                                ((e.deprecationTargetAlbumId = K.targetAlbumId), (e.loadingState = F.G.RESOLVE));
                                                return;
                                            }
                                            ((e.meta = (0, eQ.p)(S)),
                                                (e.labels = (0, _.wg)(S.labels)),
                                                (e.contentWarning = (0, _.wg)(S.contentWarning)),
                                                (e.description = (0, _.wg)(S.description)),
                                                S.duplicates &&
                                                    S.duplicates.length > 0 &&
                                                    (e.otherAlbumVersions = (0, _.wg)(null == (p = S.duplicates) ? void 0 : p.map(eQ.p))));
                                            let { initialTrackIds: I, trackIds: L } = a.makeFlatVolumeItems(S),
                                                T = L.map((e) => (0, ez.l)(e));
                                            g.setUnloadedEntitiesData(T);
                                            let h = null == (y = e.meta) || null == (m = y.resolveAllDisclaimers) ? void 0 : m.call(y),
                                                N = a.getTracks({ trackIds: I });
                                            (e.isLatestGenreAlbumsAvailable &&
                                                o &&
                                                (t = a.getLatestGenreAlbums({ category: i.RECENT_ALBUMS, period: r.WEEK, pageSize: 8, genre: S.genre })),
                                                e.isOtherArtistAlbumsAvailable &&
                                                    d &&
                                                    (c = a.getOtherArtistAlbums({ artistId: String(null == (E = S.artists[0]) ? void 0 : E.id), limit: 8 }, l)),
                                                yield Promise.allSettled([h, N, t, c]),
                                                e.loadingState !== F.G.IDLE && (e.loadingState = F.G.RESOLVE));
                                        } catch (t) {
                                            (c.error(t),
                                                t instanceof U.GX && (e.errorStatusCode = t.statusCode),
                                                e.loadingState !== F.G.IDLE &&
                                                    ((e.loadingState = F.G.REJECT),
                                                    e.otherArtistAlbums && (e.otherArtistAlbums.loadingState = F.G.REJECT),
                                                    e.latestGenreAlbums && (e.latestGenreAlbums.loadingState = F.G.REJECT)));
                                        }
                                }),
                                loadLastEpisodes() {
                                    a.getTracks({ trackIds: e.lastEpisodesTrackIds });
                                },
                                getRelatedContent: (0, _.L3)(function* () {
                                    let { albumResource: t, modelActionsLogger: a } = (0, _._$)(e);
                                    if (e.relatedContent && !e.relatedContent.isLoading)
                                        try {
                                            var i, r;
                                            if (!(null == (i = e.meta) ? void 0 : i.id)) return;
                                            e.relatedContent.loadingState = F.G.PENDING;
                                            let a = yield t.getRelatedContent({ albumId: e.meta.id });
                                            ((e.relatedContent.items = (0, _.wg)(null == (r = a.blocks) ? void 0 : r.map(e3))),
                                                (e.relatedContent.loadingState = F.G.RESOLVE));
                                        } catch (t) {
                                            (a.error(t), (e.relatedContent.loadingState = F.G.REJECT));
                                        }
                                }),
                                reset(t) {
                                    var a, i, r, l;
                                    let { albumCPA: n } = (0, D.M)(e);
                                    (n.reset(),
                                        t.resetUnloadedEntitiesData(),
                                        (e.id = null),
                                        (e.errorStatusCode = null),
                                        (e.deprecationTargetAlbumId = null),
                                        e.indexItems.clear(),
                                        (e.loadingState = F.G.IDLE),
                                        (e.description = ''),
                                        (e.allTracksUnfinished = !1),
                                        null == (a = e.latestGenreAlbums) || a.reset(),
                                        null == (i = e.otherArtistAlbums) || i.reset(),
                                        null == (r = e.relatedContent) || r.reset(),
                                        null == (l = e.donations) || l.reset(),
                                        (e.similarEntities.data = void 0),
                                        (e.similarEntities.loadingState = eE.IDLE),
                                        e.resetArtistRecommendationsPromo(),
                                        e.destroyItems([e.meta, e.items, e.otherAlbumVersions, e.labels]));
                                },
                            };
                        return a;
                    }),
                te = [eb.t.COLLECTION_FAVOURITE_PLAYLIST],
                tt = (e) => te.includes(e);
            var ta = a(12739);
            let ti = [eb.t.COLLECTION_DOWNLOADED_TRACKS];
            var tr = a(19207),
                tl = a(76626),
                tn = a(51724),
                ts = a(58870);
            let to = (e) => {
                    var t, a;
                    let i =
                        null == (a = (e || {}).chart) || null == (t = a.tracks)
                            ? void 0
                            : t.map((e) => {
                                  let { track: t, chart: a } = e;
                                  return { type: el._.TRACK_ITEM, data: (0, ts.b)(t, a) };
                              });
                    return (0, _.wg)({ items: i, playlist: (0, eg.b)({ playlist: null == e ? void 0 : e.chart }) });
                },
                td = (e) => {
                    var t, a;
                    let { clip: i, artists: r } = e,
                        { available: l, disclaimers: n } = (0, tn.f)(i);
                    return (0, _.wg)({
                        clipId: i.id,
                        title: i.title,
                        thumbnail: null == (t = i.cover) ? void 0 : t.uri,
                        previewUrl: null == (a = i.cover) ? void 0 : a.videoUrl,
                        duration: i.duration,
                        artists: null == r ? void 0 : r.map((e) => (0, eo.a)({ artist: e })),
                        isAvailable: l,
                        disclaimers: n,
                    });
                },
                tg = (e) => ({ type: e.type, data: td({ clip: e.data.clip, artists: e.data.artists }) }),
                tu = (e) => {
                    var t;
                    let a = null == (t = e.artists) ? void 0 : t.map((e) => (0, eo.a)({ artist: e }));
                    return (0, _.wg)({
                        ...((e) => {
                            let t = !1;
                            e.presaveDate ? (t = !0) : e.presaved && (t = e.presaved);
                            let { disclaimers: a } = (0, tn.f)(e);
                            return (0, _.wg)({ id: e.id, disclaimers: a, isPresave: t, title: e.title, type: e.type, coverUri: e.coverUri, releaseDate: e.releaseDate });
                        })(e),
                        artists: a,
                    });
                },
                tc = (e) => {
                    switch (e.type) {
                        case el._.ALBUM_ITEM:
                            return es(e.data.album, e.data.artists, e.data.trailer);
                        case el._.PRESAVED_ALBUM_ITEM:
                            return ((e) => {
                                var t;
                                let { album: a, artists: i, releaseDate: r, millisecondsUntilRelease: l, presaveDate: n } = e.data || {};
                                return {
                                    type: el._.PRESAVED_ALBUM_ITEM,
                                    data: tu({
                                        ...a,
                                        artists: i,
                                        releaseDate: r,
                                        millisecondsUntilRelease: l,
                                        presaveDate: n,
                                        coverUri: null == (t = a.cover) ? void 0 : t.uri,
                                    }),
                                };
                            })(e);
                    }
                };
            var tm = a(51231);
            let ty = (e) =>
                    (0, _.wg)({
                        type: el._.MENU_ITEM,
                        data: { title: e.data.title, viewAllActionLink: e.data.viewAllAction.weblink, cover: e.data.cover ? (0, tm.p)(e.data.cover) : void 0 },
                    }),
                tp = (e) => {
                    let { album: t, artists: a, likesCount: i, bookmateOptionRequired: r } = e;
                    return { type: el._.NON_MUSIC_ALBUM_ITEM, data: (0, en.s)({ album: t, likesCount: i, bookmateOptionRequired: r, artists: a }) };
                },
                tE = (e) => ({ type: el._.TRACK_ITEM, data: (0, tl.v)(e.data.track) });
            var tb = a(99211);
            let tv = (e) => {
                var t, a, i;
                let r = e || {};
                return (0, _.wg)({
                    items: null != (i = null == (t = r.tracks) ? void 0 : t.map((e) => (0, tl.v)(e))) ? i : [],
                    playlist: (0, tb.j)(r.playlist),
                    totalItemsCount: null == (a = r.summary) ? void 0 : a.count,
                    canShowEmptyBlock: !0,
                });
            };
            var tS = a(56146),
                tK = a(67780);
            let tI = (e) => (0, _.wg)({ uid: e.uid, name: e.name, cover: (0, tm.p)(e.cover), status: e.status }),
                tL = (e) =>
                    (0, _.wg)({
                        id: e.id,
                        name: e.name,
                        owner: tI(e.owner),
                        members: e.members.filter((t) => t.uid !== e.owner.uid).map(tI),
                        wave: e.wave ? (0, em.l)(e.wave) : void 0,
                        status: e.status,
                    }),
                tT = (e) => 'object' == typeof e && null !== e && 'type' in e && e.type === eb.t.TABS,
                th = (e) => Object.values(eb.t).includes(e),
                tN = _.gK.model('ArtistPopularTracksData', { items: _.gK.array(Z.v) }),
                tA = eN
                    .props({ type: _.gK.literal(eb.t.ARTIST_POPULAR_TRACKS), data: _.gK.maybe(tN), meta: ef })
                    .named('ArtistPopularTracks')
                    .views((e) => ({
                        get isVisible() {
                            var t;
                            return eh({
                                showPolicy: e.meta.showPolicy,
                                isNeededToLoad: e.isNeededToLoad,
                                isLoading: e.isLoading,
                                isLoaded: e.isLoaded,
                                isRejected: e.isRejected,
                                isNotEmpty: (null == (t = e.data) ? void 0 : t.items.length) !== 0,
                            });
                        },
                        get objectsCount() {
                            var a, i;
                            return null != (i = null == (a = e.data) ? void 0 : a.items.length) ? i : 0;
                        },
                    })),
                tf = _.gK.model('ArtistReleaseData', { album: eC.J, releaseDate: _.gK.maybe(_.gK.string) }),
                tC = eN
                    .props({ type: _.gK.literal(eb.t.ARTIST_RELEASE), data: _.gK.maybe(tf), meta: ef })
                    .named('ArtistRelease')
                    .views((e) => ({
                        get isVisible() {
                            return eh({
                                showPolicy: e.meta.showPolicy,
                                isNeededToLoad: e.isNeededToLoad,
                                isLoading: e.isLoading,
                                isLoaded: e.isLoaded,
                                isRejected: e.isRejected,
                                isNotEmpty: !!e.data,
                            });
                        },
                        get objectsCount() {
                            return +!!e.data;
                        },
                    }));
            var tR = a(61691),
                tk = a(97804);
            let tP = _.gK
                    .compose(
                        _.gK.model('BaseUpcomingAlbum', {
                            id: _.gK.number,
                            isPresave: _.gK.boolean,
                            title: _.gK.maybe(_.gK.string),
                            type: _.gK.maybe(_.gK.enumeration(Object.values(tR._))),
                            coverUri: _.gK.maybe(_.gK.string),
                            releaseDate: _.gK.maybe(_.gK.string),
                        }),
                        e1.E,
                    )
                    .actions((e) => {
                        let t = {
                            presaveAlbum: (0, _.L3)(function* (t) {
                                let { usersResource: a, modelActionsLogger: i } = (0, _._$)(e);
                                try {
                                    e.isPresave = !0;
                                    let i = yield a.presaveAlbum(t);
                                    return (i === tk.J.ERROR && (e.isPresave = !1), i);
                                } catch (t) {
                                    return ((e.isPresave = !1), i.error(t), tk.J.ERROR);
                                }
                            }),
                            removePresaveAlbum: (0, _.L3)(function* (t) {
                                let { usersResource: a, modelActionsLogger: i } = (0, _._$)(e);
                                try {
                                    e.isPresave = !1;
                                    let i = yield a.removePresaveAlbum(t);
                                    return (i === tk.J.ERROR && (e.isPresave = !0), i);
                                } catch (t) {
                                    return ((e.isPresave = !0), i.error(t), tk.J.ERROR);
                                }
                            }),
                            toggleLike: (0, _.L3)(function* () {
                                let a;
                                if (!(0, _._n)(e)) return;
                                let { user: i } = (0, D.M)(e);
                                if (i.account.data.uid)
                                    return (
                                        (a = e.isPresave
                                            ? yield t.removePresaveAlbum({ albumId: e.id, userId: i.account.data.uid })
                                            : yield t.presaveAlbum({ albumId: e.id, userId: i.account.data.uid, likeAfterRelease: !0 })),
                                        !(0, _._n)(e),
                                        a
                                    );
                            }),
                            getKey: (t) => ''.concat(t, '_').concat(e.id),
                        };
                        return t;
                    })
                    .props({ artists: _.gK.maybe(_.gK.array(eR.P)) })
                    .views((e) => ({
                        get artistNames() {
                            var t;
                            return null == (t = e.artists) ? void 0 : t.map((e) => e.name).join(', ');
                        },
                    })),
                t_ = _.gK.model('ArtistUpcomingReleaseData', { album: tP }),
                tD = eN
                    .props({ type: _.gK.literal(eb.t.ARTIST_UPCOMING_RELEASE), data: _.gK.maybe(t_), meta: ef })
                    .named('ArtistUpcomingRelease')
                    .views((e) => ({
                        get isVisible() {
                            return eh({
                                showPolicy: e.meta.showPolicy,
                                isNeededToLoad: e.isNeededToLoad,
                                isLoading: e.isLoading,
                                isLoaded: e.isLoaded,
                                isRejected: e.isRejected,
                                isNotEmpty: !!e.data,
                            });
                        },
                        get objectsCount() {
                            return +!!e.data;
                        },
                    }));
            var tO = a(17342);
            let tw = (e) => (0, _.wg)(e),
                tG = (e) => ({
                    loadingState: eE.IDLE,
                    id: e.id,
                    type: e.type,
                    meta: ((e) =>
                        (0, tO.v)(e)
                            ? ((e) => {
                                  var t;
                                  return (0, _.wg)({
                                      title: e.title,
                                      description: e.description,
                                      source: e.source,
                                      viewAllActionLink: null == (t = e.viewAllAction) ? void 0 : t.weblink,
                                      showPolicy: e.showPolicy,
                                      coverStyle: e.coverStyle,
                                  });
                              })(e)
                            : ((e) => !!(e && 'object' == typeof e && 'cover' in e && !('source' in e)))(e)
                              ? ((e) => {
                                    var t;
                                    return (0, _.wg)({ ...e, coverUri: null == (t = e.cover) ? void 0 : t.uri });
                                })(e)
                              : ((e) => !!(e && 'object' == typeof e && ('message' in e || 'title' in e || 'expandable' in e || 'visibleLines' in e)))(e)
                                ? ((e) => {
                                      var t;
                                      return (0, _.wg)({ ...tw(e), showPolicy: e.showPolicy, viewAllActionLink: null == (t = e.viewAllAction) ? void 0 : t.weblink });
                                  })(e)
                                : void 0)(e.data),
                    data: void 0,
                    isNeededToLoad: !0,
                    isLoading: !0,
                    isLoaded: !1,
                    isRejected: !1,
                    isVisible: !0,
                    isNotFound: !1,
                    hasSentAnalyticsOnLoaded: !1,
                    objectsCount: 0,
                    setHasSentAnalyticsOnLoaded: () => {},
                });
            var tM = a(39339);
            let tU = _.gK.model('ArtistPickData', { playlist: tM.$, artists: _.gK.array(eR.P) }),
                tB = eN
                    .props({ type: _.gK.literal(eb.t.ARTIST_PICK), data: _.gK.maybe(tU), meta: ef })
                    .named('ArtistPick')
                    .views((e) => ({
                        get isVisible() {
                            if (e.isRejected || (e.isLoaded && !e.data)) return !1;
                            return !0;
                        },
                        get objectsCount() {
                            return +!!e.data;
                        },
                    }));
            var tV = a(78180);
            let tF = _.gK
                    .model('FamiliarYouData', {
                        vibeTrackCount: _.gK.optional(_.gK.number, 0),
                        collectionTrackCount: _.gK.optional(_.gK.number, 0),
                        collectionAlbumCount: _.gK.optional(_.gK.number, 0),
                    })
                    .views((e) => {
                        let t = {
                            get hasTracks() {
                                return e.collectionTrackCount > 0 || e.vibeTrackCount > 0;
                            },
                            get hasFamiliarInfo() {
                                return t.hasTracks || e.collectionAlbumCount > 0;
                            },
                            get tracksCount() {
                                return e.collectionTrackCount + e.vibeTrackCount;
                            },
                            get hasCollectionEntities() {
                                return e.collectionTrackCount > 0 || e.collectionAlbumCount > 0;
                            },
                            get hasVibeEntities() {
                                return e.vibeTrackCount > 0;
                            },
                            href(e) {
                                if (!e) return '';
                                if (t.hasCollectionEntities) {
                                    let { href: t } = (0, ek.u)('/artist/:artistId/familiar', { params: { artistId: e }, query: { tab: tV.J.COLLECTION } });
                                    return t;
                                }
                                if (t.hasVibeEntities) {
                                    let { href: t } = (0, ek.u)('/artist/:artistId/familiar', { params: { artistId: e }, query: { tab: tV.J.VIBE } });
                                    return t;
                                }
                                let { href: a } = (0, ek.u)('/artist/:artistId/familiar', { params: { artistId: e } });
                                return a;
                            },
                        };
                        return t;
                    }),
                tx = eN
                    .props({ type: _.gK.literal(eb.t.FAMILIAR_YOU), data: _.gK.maybe(tF), meta: ef })
                    .named('FamiliarYou')
                    .views((e) => ({
                        get isVisible() {
                            var t;
                            if (e.isRejected || (e.isLoaded && !(null == (t = e.data) ? void 0 : t.hasFamiliarInfo))) return !1;
                            return !0;
                        },
                        get objectsCount() {
                            return +!!e.data;
                        },
                    })),
                tj = (e) => {
                    let t = tG(e);
                    if ((0, ta.Q)(t) && ((e) => !!(e && 'object' == typeof e && 'blocks' in e))(e.data))
                        switch (t.type) {
                            case eb.t.ARTIST_POPULAR_TRACKS_AND_RELEASES:
                                t.data = ((e) => {
                                    var t;
                                    let a =
                                        null == (t = e.blocks)
                                            ? void 0
                                            : t.reduce((e, t) => {
                                                  let a = tG(t);
                                                  return ((tA.is(a) || tC.is(a) || tD.is(a)) && e.push(a), e);
                                              }, []);
                                    return (0, _.wg)({ blocks: a });
                                })(e.data);
                                break;
                            case eb.t.FAMILIAR_YOU_AND_ARTIST_PICK:
                                t.data = ((e) => {
                                    var t;
                                    let a =
                                        null == (t = e.blocks)
                                            ? void 0
                                            : t.reduce((e, t) => {
                                                  let a = tG(t);
                                                  return ((tx.is(a) || tB.is(a)) && e.push(a), e);
                                              }, []);
                                    return (0, _.wg)({ blocks: a });
                                })(e.data);
                        }
                    return t;
                },
                tW = (e) => (0, _.wg)({ meta: { id: e.id, title: e.title }, shouldReloadNotification: !1, blocks: e.blocks.filter((e) => th(e.type)).map(tj) }),
                tX = (e) => {
                    let t = [],
                        a = null;
                    for (let i of e) tT(i) ? (a = i) : t.push(i);
                    return ((e) => {
                        let { tabData: t, upperBlocks: a } = e,
                            i = { loadingState: F.G.IDLE, isLoading: !0 };
                        return (
                            t && ((i.meta = { selectedTabIndex: t.selectedTabIndex, source: t.source }), (i.tabs = { loadingState: F.G.IDLE, data: t.tabs.map(tW) })),
                            a && (i.upperBlocks = a.filter((e) => th(e.type)).map(tj)),
                            (0, _.wg)(i)
                        );
                    })({ tabData: null == a ? void 0 : a.data, upperBlocks: t });
                },
                t$ = (e) => ({ title: e.title, lineColor: e['line-color'] }),
                tY = (e) => {
                    var t;
                    let a = null == (t = (e || {}).concerts) ? void 0 : t.map((e) => (0, tr.h)(e));
                    return (0, _.wg)({ items: a });
                },
                tJ = (e) => ({ uri: e.uri, color: e.color }),
                tq = (e) => {
                    var t;
                    let { data: a } = e;
                    return (0, _.wg)({ type: el._.DONATION_ITEM, data: eH({ url: a.tipUrl, artist: a.artist, goal: null == (t = a.goal) ? void 0 : t.title }) });
                },
                tH = (e) => {
                    var t;
                    let a = null == (t = (e || {}).donations) ? void 0 : t.map(tq);
                    return (0, _.wg)({ items: a });
                },
                tz = (e) => {
                    var t;
                    let a = null == (t = (e || {}).items) ? void 0 : t.map((e) => (0, eo.a)({ artist: e.data.artist, trailer: e.data.trailer }));
                    return (0, _.wg)({ items: a });
                },
                tQ = (e) => {
                    var t;
                    let a = null == (t = (e || {}).items) ? void 0 : t.map((e) => (0, em.l)(e.wave, e.agent));
                    return (0, _.wg)({ items: a });
                };
            var tZ = a(12622);
            let t0 = (e) => {
                    var t;
                    let a = null == (t = (e || {}).items) ? void 0 : t.map(tZ.e);
                    return (0, _.wg)({ items: a });
                },
                t1 = (e) => {
                    var t;
                    let a =
                        null == (t = (e || {}).inStyleTabs)
                            ? void 0
                            : t.map((e, t) => {
                                  var a;
                                  let i =
                                          null == e
                                              ? void 0
                                              : e.items.map((e) => {
                                                    let { album: t, artists: a, trailer: i } = e;
                                                    return (0, en.s)({ album: t, artists: a, trailer: i });
                                                }),
                                      r = ((null == e || null == (a = e.cover) ? void 0 : a.uri) && [null == e ? void 0 : e.cover.uri]) || [];
                                  return { tab: { id: t, title: e.title, covers: (0, _.wg)(r) }, data: (0, _.wg)(i) };
                              });
                    return (0, _.wg)({ items: a });
                },
                t3 = (e) => {
                    var t;
                    let a = null == (t = (e || {}).items) ? void 0 : t.map(ty);
                    return (0, _.wg)({ items: a });
                },
                t2 = (e) => {
                    let { favorites: t, history: a } = e,
                        i = (0, tm.p)(t.cover),
                        r = t.trackCovers.map(tm.p),
                        l = (0, _.wg)({ title: t.title, cover: i, playlistUuid: t.playlistUuid || void 0, count: t.count, trackCovers: r }),
                        n = a.trackCovers.map(tm.p),
                        s = (0, _.wg)({ title: a.title, trackCovers: n, artists: a.subtitleElements });
                    return (0, _.wg)({ favorites: l, history: s });
                },
                t5 = (e) => (0, _.wg)({ id: e.id, title: e.title, weblink: e.action.weblink, covers: e.covers.map(tm.p) }),
                t6 = (e) => ({ items: (0, _.wg)(e.items.map((e) => t5(e.data))) });
            var t8 = a(99159);
            let t4 = (e) =>
                    (0, _.wg)({
                        items: e.items.map((e) =>
                            ((e) => {
                                var t, a;
                                return (0, _.wg)({
                                    title: e.title,
                                    stationId: e.stationId,
                                    imageUrl: e.imageUrl,
                                    style: {
                                        backgroundColor: null == (t = e.style) ? void 0 : t.backgroundColor,
                                        titleColor: null == (a = e.style) ? void 0 : a.titleColor,
                                    },
                                });
                            })(e),
                        ),
                    }),
                t7 = (e) => {
                    var t;
                    let a =
                        null == (t = (e || {}).newReleases)
                            ? void 0
                            : t.map((e) => {
                                  let { album: t, artists: a, releaseDate: i, cover: r, trailer: l } = e;
                                  return {
                                      album: (0, en.s)({ album: t, artists: a, trailer: l }),
                                      releaseDate: i,
                                      coverUri: null == r ? void 0 : r.uri,
                                      coverColor: null == r ? void 0 : r.color,
                                  };
                              });
                    return (0, _.wg)({ items: a });
                },
                t9 = (e) => {
                    let t = e.items.map((e) =>
                        e.type === el._.NON_MUSIC_ALBUM_ITEM
                            ? tp({ album: e.data.album, artists: e.data.artists, likesCount: e.data.likesCount, bookmateOptionRequired: e.data.bookmateOptionRequired })
                            : eu({ playlist: e.data.playlist, likesCount: e.data.likesCount, trailer: e.data.trailer }),
                    );
                    return (0, _.wg)({ items: t });
                },
                ae = (e, t) => {
                    var a;
                    return (0, _.wg)({
                        items: e.tracks.map((e) => (0, tl.v)(e)),
                        playlist: (0, tb.j)(e.playlist),
                        coverUri: null == (a = e.cover) ? void 0 : a.uri,
                        withRewindTrailerButton: 'rewind2024' === t,
                    });
                },
                at = (e) => ({
                    type: el._.PERSONAL_PLAYLIST_ITEM,
                    data: {
                        playlist: (0, eg.b)({ playlist: e.data.playlist, trailer: e.data.trailer }),
                        playlistType: e.data.playlistType,
                        description: e.data.description,
                    },
                }),
                aa = (e) => {
                    if (!e || !Array.isArray(e.items)) return (0, _.wg)({});
                    let t = e.items.map(at);
                    return (0, _.wg)({ items: t });
                },
                ai = (e) => (0, _.wg)({ reporting: eL(e.reporting), items: e.albumBanners.map((e) => eK(e)) }),
                ar = (e) => (0, _.wg)({ suggestionsRequestId: e.suggestionsRequestId, items: e.items.map((e) => ({ query: e.query })) }),
                al = (e) =>
                    (0, _.wg)({
                        buttonColor: null == e ? void 0 : e.buttonColor,
                        textColor: null == e ? void 0 : e.textColor,
                        bgImageUrl: null == e ? void 0 : e.bgImageUrl,
                        imageUrl: null == e ? void 0 : e.imageUrl,
                        buttonTextColor: null == e ? void 0 : e.buttonTextColor,
                    }),
                an = (e) => {
                    var t, a;
                    return (0, _.wg)({
                        title: null == e ? void 0 : e.title,
                        subtitle: null == e ? void 0 : e.subtitle,
                        buttonTitle: null == e ? void 0 : e.buttonTitle,
                        imageUrl: null == e ? void 0 : e.imageUrl,
                        align: null == e ? void 0 : e.align,
                        weblink: null == e || null == (t = e.action) ? void 0 : t.weblink,
                        lightTheme: al(null == e ? void 0 : e.lightTheme),
                        darkTheme: al(null == e ? void 0 : e.darkTheme),
                        advDisclaimer: null != (a = null == e ? void 0 : e.advDisclaimer) ? a : null,
                    });
                },
                as = (e) => {
                    var t;
                    return null == (t = (e || {}).tabs) ? void 0 : t.map((e) => (0, _.wg)({ id: e.id, title: e.title, subtitle: e.subtitle, covers: e.covers }));
                },
                ao = (e) => {
                    var t;
                    let a =
                        null == (t = (e || {}).waves)
                            ? void 0
                            : t.map((e, t) => {
                                  var a;
                                  return {
                                      tab: { id: t, title: null == e ? void 0 : e.title },
                                      data:
                                          (null == e || null == (a = e.items)
                                              ? void 0
                                              : a.map((e) => {
                                                    let { wave: t, agent: a } = e;
                                                    return (0, em.l)(t, a);
                                                })) || [],
                                  };
                              });
                    return (0, _.wg)({ items: a });
                },
                ad = (e) => {
                    var t;
                    let a =
                        null == (t = (e || {}).waves)
                            ? void 0
                            : t.map((e, t) => ({ tab: { id: t, title: null == e ? void 0 : e.title }, data: null == e ? void 0 : e.items.map(tZ.e) }));
                    return (0, _.wg)({ items: a });
                },
                ag = (e) => {
                    var t;
                    let a = null == (t = (null == e ? void 0 : e.artists) || []) ? void 0 : t.map((e) => (0, eo.a)({ artist: e }));
                    return (0, _.wg)({ title: e.title, description: e.description, artists: a });
                },
                au = new Set([eb.t.CONCERTS_PERSONAL, eb.t.ARTIST_CONCERTS, eb.t.VIEWED_CONCERTS]);
            var ac = a(35367),
                am = a(30210);
            let ay = ew.named('AlbumPromoData'),
                ap = eN
                    .props({ type: _.gK.union(_.gK.literal(eb.t.ALBUM_PROMO), _.gK.literal(eb.t.SIMPLE_ALBUM_PROMO)), data: _.gK.maybe(ay), meta: ef })
                    .named('AlbumPromo')
                    .views((e) => ({
                        get isVisible() {
                            var t;
                            return eh({
                                showPolicy: e.meta.showPolicy,
                                isNeededToLoad: e.isNeededToLoad,
                                isLoading: e.isLoading,
                                isLoaded: e.isLoaded,
                                isRejected: e.isRejected,
                                isNotEmpty: !!((null == (t = e.data) ? void 0 : t.items) && e.data.items.length > 0),
                                isOutdated: e.isOutdated,
                            });
                        },
                        get objectsCount() {
                            var a, i;
                            return null != (i = null == (a = e.data) ? void 0 : a.items.length) ? i : 0;
                        },
                    }));
            var aE = a(30064);
            let ab = _.gK.model('ArtistConcertsData', { items: _.gK.array(aE.a) }),
                av = eN
                    .props({ type: _.gK.union(_.gK.literal(eb.t.ARTIST_CONCERTS)), data: _.gK.maybe(ab), meta: ef })
                    .named('ArtistConcerts')
                    .views((e) => ({
                        get isVisible() {
                            var t;
                            return eh({
                                showPolicy: e.meta.showPolicy,
                                isNeededToLoad: e.isNeededToLoad,
                                isLoading: e.isLoading,
                                isLoaded: e.isLoaded,
                                isRejected: e.isRejected,
                                isNotEmpty: (null == (t = e.data) ? void 0 : t.items.length) !== 0,
                            });
                        },
                        get objectsCount() {
                            var a, i;
                            return null != (i = null == (a = e.data) ? void 0 : a.items.length) ? i : 0;
                        },
                    })),
                aS = _.gK.model('ArtistPopularTracksAndReleasesData', { blocks: _.gK.array(_.gK.union(tA, tC, tD)) }).views((e) => ({
                    get popularTracks() {
                        return e.blocks.find((e) => tA.is(e));
                    },
                    get upcomingRelese() {
                        return e.blocks.find((e) => tD.is(e));
                    },
                    get release() {
                        return e.blocks.find((e) => tC.is(e));
                    },
                })),
                aK = eN
                    .props({ type: _.gK.literal(eb.t.ARTIST_POPULAR_TRACKS_AND_RELEASES), data: _.gK.maybe(aS) })
                    .named('ArtistPopularTracksAndReleases')
                    .views((e) => ({
                        get isVisible() {
                            return !0;
                        },
                        get objectsCount() {
                            var t, a;
                            return null != (a = null == (t = e.data) ? void 0 : t.blocks.length) ? a : 0;
                        },
                    })),
                aI = _.gK.model('ChartTracksItem', { type: _.gK.literal(el._.TRACK_ITEM), data: Z.v }),
                aL = _.gK.model('ChartTracksData', { items: _.gK.array(aI), playlist: tM.$ }),
                aT = eN
                    .props({ type: _.gK.literal(eb.t.CHART_TRACKS), data: _.gK.maybe(aL), meta: ef })
                    .named('ChartTracks')
                    .views((e) => ({
                        get isVisible() {
                            var t, a;
                            if (e.isLoading || e.isRejected || e.isNeededToLoad) return !0;
                            return (null == (a = e.data) || null == (t = a.items) ? void 0 : t.length) !== 0;
                        },
                        get objectsCount() {
                            var i, r;
                            let t = null != (r = null == (i = e.data) ? void 0 : i.items.length) ? r : 0;
                            return t < 8 ? t : 8;
                        },
                    }));
            var ah = a(4370),
                aN = a(85587);
            let aA = _.gK
                    .compose(
                        _.gK.model('BaseClip', {
                            clipId: _.gK.number,
                            title: _.gK.maybe(_.gK.string),
                            thumbnail: _.gK.maybe(_.gK.string),
                            previewUrl: _.gK.maybe(_.gK.string),
                            duration: _.gK.maybe(_.gK.number),
                            isAvailable: _.gK.boolean,
                            version: _.gK.maybe(_.gK.string),
                        }),
                        e1.E,
                    )
                    .views((e) => ({
                        get url() {
                            let { href: t } = (0, ek.u)(ah.Z.video.href, { query: { ids: String(e.clipId) } });
                            return t;
                        },
                        get isLiked() {
                            if (!(0, _._n)(e)) return !1;
                            let { library: t } = (0, D.M)(e);
                            return t.isClipLiked(e.clipId);
                        },
                        get isLegalRejected() {
                            return e.getIsLegalRejected(e.isAvailable);
                        },
                        get isUnsafeLegal() {
                            return e.getIsUnsafeLegal(e.isAvailable);
                        },
                        getDisclaimerEntityRef: (t) => ({ entityType: null != t ? t : aN.n.CLIP, entityId: e.clipId }),
                    }))
                    .actions((e) => ({
                        getKey: (t) => ''.concat(t, '_').concat(e.clipId),
                        toggleLike() {
                            if (!(0, _._n)(e)) return;
                            let { library: t, user: a } = (0, D.M)(e);
                            if (a.isAuthorized) return t.toggleClipLike({ entityId: e.clipId, userId: a.account.data.uid });
                        },
                    })),
                af = aA.props({ artists: _.gK.array(eR.P) }).views((e) => ({
                    get hasArtists() {
                        return e.artists.length > 0;
                    },
                })),
                aC = _.gK.model('LandingClipItem', { type: _.gK.union(_.gK.literal(el._.CLIP), _.gK.literal(el._.CLIP_ITEM)), data: af }),
                aR = _.gK.model('ClipsData', { items: _.gK.array(aC), canShowEmptyBlock: _.gK.optional(_.gK.boolean, !1) }).views((e) => ({
                    get isEmptyBlock() {
                        return e.canShowEmptyBlock && 0 === e.items.length;
                    },
                })),
                ak = eN
                    .props({
                        type: _.gK.union(_.gK.literal(eb.t.CLIPS), _.gK.literal(eb.t.ARTIST_CLIPS), _.gK.literal(eb.t.COLLECTION_CLIPS)),
                        data: _.gK.maybe(aR),
                        meta: ef,
                    })
                    .named('Clips')
                    .views((e) => ({
                        get isVisible() {
                            var t, a;
                            let { settings: i } = (0, D.M)(e);
                            if (null == (t = e.data) ? void 0 : t.canShowEmptyBlock) return !0;
                            return eh({
                                showPolicy: e.meta.showPolicy,
                                isNeededToLoad: e.isNeededToLoad,
                                isLoading: e.isLoading,
                                isLoaded: e.isLoaded,
                                isRejected: e.isRejected,
                                isNotEmpty: (null == (a = e.data) ? void 0 : a.items.length) !== 0,
                                isNeededToHide: i.isMobile,
                            });
                        },
                        get objectsCount() {
                            var i, r;
                            return null != (r = null == (i = e.data) ? void 0 : i.items.length) ? r : 0;
                        },
                    })),
                aP = _.gK.model('CollectionAlbumsData', { items: _.gK.array(eC.J), canShowEmptyBlock: _.gK.optional(_.gK.boolean, !1) }).views((e) => ({
                    get isEmptyBlock() {
                        return e.canShowEmptyBlock && 0 === e.items.length;
                    },
                })),
                a_ = eN
                    .props({ type: _.gK.literal(eb.t.COLLECTION_ALBUMS), data: _.gK.maybe(aP), meta: ef })
                    .named('CollectionAlbums')
                    .views((e) => ({
                        get isVisible() {
                            var t, a, i;
                            if ((null == (t = e.data) ? void 0 : t.canShowEmptyBlock) || e.isLoading || e.isRejected || e.isNeededToLoad) return !0;
                            return (null == (i = e.data) || null == (a = i.items) ? void 0 : a.length) !== 0;
                        },
                        get objectsCount() {
                            var r, l;
                            return null != (l = null == (r = e.data) ? void 0 : r.items.length) ? l : 0;
                        },
                    }));
            var aD = a(63500);
            let aO = _.gK.model('LandingUpcomingAlbumItem', { type: _.gK.literal(el._.PRESAVED_ALBUM_ITEM), data: tP }),
                aw = _.gK.union(eV, aO),
                aG = _.gK
                    .model('CollectionAlbumsPresavesTab', {
                        id: _.gK.string,
                        title: _.gK.string,
                        type: _.gK.enumeration(Object.values(aD.n)),
                        items: _.gK.array(aw),
                        canShowEmptyBlock: _.gK.optional(_.gK.boolean, !1),
                    })
                    .views((e) => ({
                        get isEmptyTab() {
                            return !!(e.canShowEmptyBlock && 0 === e.items.length);
                        },
                    })),
                aM = _.gK.model('CollectionAlbumsPresavesTabs', { tabs: _.gK.array(aG) }).views((e) => ({
                    get isFirstTabEmpty() {
                        var t;
                        return (null == (t = e.tabs[0]) ? void 0 : t.items.length) === 0;
                    },
                    get isSecondTabEmpty() {
                        var a;
                        return (null == (a = e.tabs[1]) ? void 0 : a.items.length) === 0;
                    },
                    get areBothTabsEmpty() {
                        return this.isFirstTabEmpty && this.isSecondTabEmpty;
                    },
                    get activeIndexTab() {
                        if (this.isFirstTabEmpty && !this.isSecondTabEmpty) return 1;
                        return 0;
                    },
                })),
                aU = eN
                    .props({ type: _.gK.literal(eb.t.COLLECTION_ALBUMS_PRESAVES), data: _.gK.maybe(aM), meta: ef })
                    .named('CollectionAlbumsPresaves')
                    .views((e) => ({
                        get isVisible() {
                            return !0;
                        },
                        get objectsCount() {
                            if (e.data) return e.data.tabs.reduce((e, t) => e + t.items.length, 0);
                            return 0;
                        },
                    })),
                aB = _.gK
                    .model('LandingMenuItem', {
                        type: _.gK.literal(el._.MENU_ITEM),
                        data: _.gK.model({ title: _.gK.string, viewAllActionLink: _.gK.maybe(_.gK.maybeNull(_.gK.string)), cover: _.gK.maybe(eP.$) }),
                    })
                    .views((e) => ({
                        get key() {
                            return ''.concat(e.data.title, '_').concat(e.data.viewAllActionLink);
                        },
                    })),
                aV = _.gK.union(aB, e$),
                aF = _.gK.model('CollectionArtistsAndTopWithItemsArtist', { artist: eR.P, items: _.gK.array(aV) }),
                ax = _.gK.model('CollectionArtistsAndTopWithItemsData', { artists: _.gK.array(aF) }),
                aj = eN
                    .props({ type: _.gK.literal(eb.t.COLLECTION_ARTISTS_AND_TOP_WITH_ITEMS), data: _.gK.maybe(ax), meta: ef })
                    .named('CollectionArtistsAndTopWithItems')
                    .views((e) => ({
                        get isVisible() {
                            var t;
                            return eh({
                                showPolicy: e.meta.showPolicy,
                                isNeededToLoad: e.isNeededToLoad,
                                isLoading: e.isLoading,
                                isLoaded: e.isLoaded,
                                isRejected: e.isRejected,
                                isNotEmpty: !!(null == (t = e.data) ? void 0 : t.artists.length),
                            });
                        },
                        get objectsCount() {
                            var a, i;
                            return null != (i = null == (a = e.data) ? void 0 : a.artists.length) ? i : 0;
                        },
                    })),
                aW = _.gK.model('CollectionArtistData', { items: _.gK.array(eR.P), canShowEmptyBlock: _.gK.optional(_.gK.boolean, !1) }).views((e) => ({
                    get isEmptyBlock() {
                        return e.canShowEmptyBlock && 0 === e.items.length;
                    },
                })),
                aX = eN
                    .props({
                        type: _.gK.union(
                            _.gK.literal(eb.t.COLLECTION_ARTISTS),
                            _.gK.literal(eb.t.COLLECTION_ARTISTS_AND_TOP),
                            _.gK.literal(eb.t.PERSONAL_ARTISTS),
                            _.gK.literal(eb.t.NEW_STARS_ARTISTS),
                            _.gK.literal(eb.t.EDITORIAL_ARTISTS),
                            _.gK.literal(eb.t.META_TAG_POPULAR_ARTISTS),
                            _.gK.literal(eb.t.MICRO_GENRE_TOP_ARTISTS),
                            _.gK.literal(eb.t.MICRO_GENRE_ARTISTS),
                            _.gK.literal(eb.t.META_TAG_ARTISTS),
                            _.gK.literal(eb.t.SIMILAR_ARTISTS),
                        ),
                        data: _.gK.maybe(aW),
                        meta: ef,
                    })
                    .named('CollectionArtist')
                    .views((e) => ({
                        get isVisible() {
                            var t, a;
                            if (null == (t = e.data) ? void 0 : t.canShowEmptyBlock) return !0;
                            return eh({
                                showPolicy: e.meta.showPolicy,
                                isNeededToLoad: e.isNeededToLoad,
                                isLoading: e.isLoading,
                                isLoaded: e.isLoaded,
                                isRejected: e.isRejected,
                                isNotEmpty: (null == (a = e.data) ? void 0 : a.items.length) !== 0,
                            });
                        },
                        get objectsCount() {
                            var i, r;
                            return null != (r = null == (i = e.data) ? void 0 : i.items.length) ? r : 0;
                        },
                    })),
                a$ = _.gK.model('CollectionPlaylistsData', { items: _.gK.array(ex.I) }),
                aY = eN
                    .props({ type: _.gK.literal(eb.t.COLLECTION_PLAYLISTS_CREATED), data: _.gK.maybe(a$), meta: ef })
                    .named('CollectionCreatedPlaylists')
                    .views((e) => ({
                        get isVisible() {
                            var t, a;
                            if (e.isLoading || e.isRejected || e.isNeededToLoad) return !0;
                            return (null == (a = e.data) || null == (t = a.items) ? void 0 : t.length) !== 0;
                        },
                        get objectsCount() {
                            var i, r;
                            return null != (r = null == (i = e.data) ? void 0 : i.items.length) ? r : 0;
                        },
                    }));
            var aJ = a(44349);
            let aq = _.gK.model('CollectionDownloadedTracksData', { items: _.gK.array(Z.v), rawTracks: _.gK.frozen() }).views((e) => ({
                    get entitiesData() {
                        return e.rawTracks.map((e) => ({ type: aJ.R.DownloadedMusic, meta: e }));
                    },
                })),
                aH = eN
                    .props({ type: _.gK.literal(eb.t.COLLECTION_DOWNLOADED_TRACKS), data: _.gK.maybe(aq), meta: ef })
                    .named('CollectionDownloadedTracks')
                    .views((e) => ({
                        get isVisible() {
                            var t;
                            return eh({
                                showPolicy: e.meta.showPolicy,
                                isNeededToLoad: e.isNeededToLoad,
                                isLoading: e.isLoading,
                                isLoaded: e.isLoaded,
                                isRejected: e.isRejected,
                                isNotEmpty: (null == (t = e.data) ? void 0 : t.items.length) !== 0,
                            });
                        },
                        get objectsCount() {
                            var a, i;
                            return null != (i = null == (a = e.data) ? void 0 : a.items.length) ? i : 0;
                        },
                    })),
                az = _.gK.model('LandingNonMusicAlbumItem', { type: _.gK.literal(el._.NON_MUSIC_ALBUM_ITEM), data: eC.J }),
                aQ = _.gK.model('LandingTrackItem', { type: _.gK.literal(el._.TRACK_ITEM), data: Z.v }),
                aZ = _.gK.union(ej, az, aQ),
                a0 = _.gK.model('CollectionKidsData', { items: _.gK.array(aZ) }),
                a1 = eN
                    .props({ type: _.gK.literal(eb.t.COLLECTION_KIDS), data: _.gK.maybe(a0), meta: ef })
                    .named('CollectionKids')
                    .views((e) => ({
                        get isVisible() {
                            var t;
                            return eh({
                                showPolicy: e.meta.showPolicy,
                                isNeededToLoad: e.isNeededToLoad,
                                isLoading: e.isLoading,
                                isLoaded: e.isLoaded,
                                isRejected: e.isRejected,
                                isNotEmpty: (null == (t = e.data) ? void 0 : t.items.length) !== 0,
                            });
                        },
                        get objectsCount() {
                            var a, i;
                            return null != (i = null == (a = e.data) ? void 0 : a.items.length) ? i : 0;
                        },
                    })),
                a3 = _.gK.model('CollectionLikedPlaylistsData', { items: _.gK.array(ex.I) }),
                a2 = eN
                    .props({ type: _.gK.literal(eb.t.COLLECTION_PLAYLISTS_LIKED), data: _.gK.maybe(a3), meta: ef })
                    .named('CollectionLikedPlaylists')
                    .views((e) => ({
                        get isVisible() {
                            var t, a;
                            if (e.isLoading || e.isRejected || e.isNeededToLoad) return !0;
                            return (null == (a = e.data) || null == (t = a.items) ? void 0 : t.length) !== 0;
                        },
                        get objectsCount() {
                            var i, r;
                            return null != (r = null == (i = e.data) ? void 0 : i.items.length) ? r : 0;
                        },
                    }));
            var a5 = a(12946);
            let a6 = _.gK
                    .model('CollectionPlaylistsTab', {
                        id: _.gK.string,
                        title: _.gK.string,
                        type: _.gK.enumeration(Object.values(a5.l)),
                        items: _.gK.array(ex.I),
                        canShowEmptyBlock: _.gK.optional(_.gK.boolean, !1),
                    })
                    .views((e) => ({
                        get isEmptyTab() {
                            return !!(e.canShowEmptyBlock && 0 === e.items.length);
                        },
                    })),
                a8 = _.gK.model('CollectionPlaylistsTabs', { tabs: _.gK.array(a6) }).views((e) => ({
                    get isFirstTabEmpty() {
                        var t;
                        return (null == (t = e.tabs[0]) ? void 0 : t.items.length) === 0;
                    },
                    get isSecondTabEmpty() {
                        var a;
                        return (null == (a = e.tabs[1]) ? void 0 : a.items.length) === 0;
                    },
                    get areBothTabsEmpty() {
                        return this.isFirstTabEmpty && this.isSecondTabEmpty;
                    },
                    get activeIndexTab() {
                        if (this.isFirstTabEmpty && !this.isSecondTabEmpty) return 1;
                        return 0;
                    },
                })),
                a4 = eN
                    .props({ type: _.gK.literal(eb.t.COLLECTION_PLAYLISTS_LIKED_AND_CREATED), data: _.gK.maybe(a8), meta: ef })
                    .named('CollectionPlaylists')
                    .views((e) => ({
                        get isVisible() {
                            return !0;
                        },
                        get objectsCount() {
                            if (e.data) return e.data.tabs.reduce((e, t) => e + t.items.length, 0);
                            return 0;
                        },
                    }));
            var a7 = a(62390);
            let a9 = _.gK
                    .model('ArtistTop', { artist: eR.P, listenTimeSeconds: _.gK.number, top: _.gK.maybe(a7.I) })
                    .views((e) => ({
                        get isAvailableForPlaying() {
                            if (void 0 === e.artist.counts) return !0;
                            return e.artist.counts.tracks > 0;
                        },
                    }))
                    .actions((e) => ({ getKey: (t) => ''.concat(t, '_').concat(e.artist.id) })),
                ie = _.gK.model('CollectionTopArtistsData', { items: _.gK.array(a9) }),
                it = eN
                    .props({ type: _.gK.literal(eb.t.COLLECTION_TOP_ARTISTS), data: _.gK.maybe(ie), meta: ef })
                    .named('CollectionTopArtists')
                    .views((e) => ({
                        get isVisible() {
                            var t;
                            return eh({
                                showPolicy: e.meta.showPolicy,
                                isNeededToLoad: e.isNeededToLoad,
                                isLoading: e.isLoading,
                                isLoaded: e.isLoaded,
                                isRejected: e.isRejected,
                                isNotEmpty: (null == (t = e.data) ? void 0 : t.items.length) !== 0,
                            });
                        },
                        get objectsCount() {
                            var a, i;
                            return null != (i = null == (a = e.data) ? void 0 : a.items.length) ? i : 0;
                        },
                    })),
                ia = _.gK.model('CollectionVibeAgentDataModel', { vibe: eX.G }),
                ii = eN
                    .props({ type: _.gK.literal(eb.t.COLLECTION_WAVE_AGENT), data: _.gK.maybe(ia), meta: ef })
                    .named('CollectionVibeAgent')
                    .views((e) => ({
                        get isVisible() {
                            var t;
                            if (e.isLoading || e.isRejected || e.isNeededToLoad) return !0;
                            return null == (t = e.data) ? void 0 : t.vibe;
                        },
                        get objectsCount() {
                            var a;
                            return +(null != (a = e.data) && !!a.vibe);
                        },
                    }));
            !(function (e) {
                ((e.ENABLED = 'ENABLED'), (e.DISABLED = 'DISABLED'), (e.DRAFT = 'DRAFT'));
            })(l || (l = {}));
            var ir = a(27506);
            !(function (e) {
                ((e.ACTIVE = 'ACTIVE'), (e.INACTIVE_EXIT = 'INACTIVE_EXIT'), (e.INACTIVE_SUBSCRIPTION = 'INACTIVE_SUBSCRIPTION'));
            })(n || (n = {}));
            let il = _.gK.model('VibeRoomMember', { uid: _.gK.maybe(_.gK.number), name: _.gK.string, cover: eP.$, status: _.gK.maybe(_.gK.string) }).views((e) => ({
                    get isActive() {
                        return e.status === n.ACTIVE;
                    },
                })),
                is = _.gK
                    .model('VibeRoom', {
                        id: _.gK.string,
                        name: _.gK.maybe(_.gK.string),
                        owner: il,
                        members: _.gK.array(il),
                        wave: _.gK.maybe(eX.G),
                        status: _.gK.maybe(_.gK.string),
                    })
                    .views((e) => ({
                        get isDisabled() {
                            return e.status === l.DISABLED;
                        },
                        get isDraft() {
                            return e.status === l.DRAFT;
                        },
                        get isEnabled() {
                            return e.status === l.ENABLED;
                        },
                    }))
                    .actions((e) => ({
                        getKey: (t) => ''.concat(t, '_').concat(e.id),
                        editRoom: (0, _.L3)(function* (t) {
                            var a;
                            let { roomId: i, name: r } = t,
                                l = r.trim();
                            if ((null == (a = e.name) ? void 0 : a.trim()) === l) return ir.F.OK;
                            let { waveResource: n, modelActionsLogger: s } = (0, _._$)(e);
                            try {
                                return (yield n.editRoom({ roomId: i, name: l }), (e.name = l), ir.F.OK);
                            } catch (e) {
                                return (s.error(e), ir.F.ERROR);
                            }
                        }),
                        exitRoom: (0, _.L3)(function* (t) {
                            let { roomId: a } = t,
                                { waveResource: i, modelActionsLogger: r } = (0, _._$)(e);
                            try {
                                return (yield i.exitRoom({ roomId: a }), ir.F.OK);
                            } catch (e) {
                                return (r.error(e), ir.F.ERROR);
                            }
                        }),
                    })),
                io = _.gK.model('CollectionVibeRoomsData', { items: _.gK.array(is) }),
                id = eN
                    .props({ type: _.gK.literal(eb.t.COLLECTION_WAVE_ROOMS), data: _.gK.maybe(io), meta: ef })
                    .named('CollectionVibeRooms')
                    .views((e) => ({
                        get isVisible() {
                            let {
                                collection: { vibeRooms: t },
                            } = (0, D.M)(e);
                            if (!t.isEnabled) return !1;
                            return !0;
                        },
                        get objectsCount() {
                            var t, a;
                            return null != (a = null == (t = e.data) ? void 0 : t.items.length) ? a : 0;
                        },
                    })),
                ig = _.gK.union(
                    _.gK.model('CollectionVibesLikedItem', { type: _.gK.literal(tK.H.LIKED_WAVE), vibe: eX.G }),
                    _.gK.model('CollectionVibesRoomItem', { type: _.gK.literal(tK.H.WAVE_ROOM), roomId: _.gK.string }),
                ),
                iu = _.gK.model('CollectionVibesTab', { id: _.gK.string, title: _.gK.string, type: _.gK.enumeration(Object.values(ac.A)), items: _.gK.array(ig) }),
                ic = _.gK
                    .model('CollectionVibesData', { tabs: _.gK.array(iu), rooms: _.gK.map(is), exitedRoomIds: _.gK.array(_.gK.string) })
                    .views((e) => {
                        let t = {
                            getTabItems(t) {
                                var a;
                                let i = e.tabs.find((e) => e.id === t);
                                return null !=
                                    (a =
                                        null == i
                                            ? void 0
                                            : i.items.flatMap((t) => {
                                                  if (t.type === tK.H.WAVE_ROOM) {
                                                      let a = e.rooms.get(t.roomId);
                                                      return !a || e.exitedRoomIds.includes(t.roomId) ? [] : [{ type: t.type, room: a }];
                                                  }
                                                  return [t];
                                              }))
                                    ? a
                                    : [];
                            },
                            get isEmpty() {
                                return e.tabs.every((e) => 0 === t.getTabItems(e.id).length);
                            },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        removeRoom(t) {
                            e.exitedRoomIds.includes(t) || e.exitedRoomIds.push(t);
                        },
                    })),
                im = eN
                    .props({ type: _.gK.literal(eb.t.COLLECTION_WAVES), data: _.gK.maybe(ic), meta: ef })
                    .named('CollectionVibes')
                    .views((e) => ({
                        get isVisible() {
                            var t;
                            return eh({
                                showPolicy: e.meta.showPolicy,
                                isNeededToLoad: e.isNeededToLoad,
                                isLoading: e.isLoading,
                                isLoaded: e.isLoaded,
                                isRejected: e.isRejected,
                                isNotEmpty: !!(null == (t = e.data) ? void 0 : t.tabs.length),
                            });
                        },
                        get objectsCount() {
                            var a, i, r;
                            return null != (r = null == (i = e.data) || null == (a = i.tabs[0]) ? void 0 : a.items.length) ? r : 0;
                        },
                    })),
                iy = _.gK.model('MapUrl', { imageUrl: _.gK.string, url: _.gK.string }),
                ip = _.gK.model('MetroStation', { title: _.gK.string, lineColor: _.gK.string }),
                iE = _.gK
                    .model('BaseMap', {
                        place: _.gK.string,
                        city: _.gK.string,
                        address: _.gK.string,
                        metroStations: _.gK.maybeNull(_.gK.array(ip)),
                        map: _.gK.maybeNull(iy),
                    })
                    .views((e) => ({
                        get groupedMetroStations() {
                            if (!e.metroStations) return [];
                            let t = new Map();
                            return (
                                e.metroStations.forEach((e) => {
                                    let a = t.get(e.title);
                                    (a || ((a = new Set()), t.set(e.title, a)), a.add(e.lineColor));
                                }),
                                Array.from(t.entries()).map((e) => {
                                    let [t, a] = e;
                                    return { title: t, colors: Array.from(a) };
                                })
                            );
                        },
                    })),
                ib = eN
                    .props({ type: _.gK.literal(eb.t.CONCERT_PLACE), data: _.gK.maybe(iE), meta: ef })
                    .named('ConcertPlace')
                    .views((e) => ({
                        get isVisible() {
                            return eh({
                                showPolicy: e.meta.showPolicy,
                                isNeededToLoad: e.isNeededToLoad,
                                isLoading: e.isLoading,
                                isLoaded: e.isLoaded,
                                isRejected: e.isRejected,
                                isNotEmpty: void 0 !== e.data,
                            });
                        },
                        get objectsCount() {
                            return +(null !== e.data);
                        },
                    })),
                iv = _.gK.model('ConcertsData', { items: _.gK.array(aE.a) }),
                iS = eN
                    .props({
                        type: _.gK.union(
                            _.gK.literal(eb.t.CONCERTS_TOP),
                            _.gK.literal(eb.t.CONCERTS_PERSONAL),
                            _.gK.literal(eb.t.EDITORIAL_CONCERTS),
                            _.gK.literal(eb.t.VIEWED_CONCERTS),
                        ),
                        data: _.gK.maybe(iv),
                        meta: ef,
                    })
                    .named('Concerts')
                    .views((e) => ({
                        get isVisible() {
                            var t;
                            return eh({
                                showPolicy: e.meta.showPolicy,
                                isNeededToLoad: e.isNeededToLoad,
                                isLoading: e.isLoading,
                                isLoaded: e.isLoaded,
                                isRejected: e.isRejected,
                                isNotEmpty: (null == (t = e.data) ? void 0 : t.items.length) !== 0,
                            });
                        },
                        get objectsCount() {
                            var a, i;
                            return null != (i = null == (a = e.data) ? void 0 : a.items.length) ? i : 0;
                        },
                    }));
            var iK = a(51888);
            let iI = _.gK
                    .model('ContinueListenTrackData', {
                        album: _.gK.maybe(eC.J),
                        playlist: _.gK.maybe(tM.$),
                        track: Z.v,
                        trackLoadingState: _.gK.optional(_.gK.enumeration(Object.values(F.G)), F.G.IDLE),
                        playlistLoadingState: _.gK.optional(_.gK.enumeration(Object.values(F.G)), F.G.IDLE),
                        albumDuration: _.gK.maybe(_.gK.number),
                        albumDurationLeft: _.gK.maybe(_.gK.number),
                    })
                    .views((e) => ({
                        get isNeededToLoad() {
                            return e.trackLoadingState === F.G.IDLE;
                        },
                        get isLoading() {
                            return e.trackLoadingState === F.G.PENDING || e.playlistLoadingState === F.G.PENDING;
                        },
                        get isRejected() {
                            return e.trackLoadingState === F.G.REJECT || e.playlistLoadingState === F.G.REJECT;
                        },
                    }))
                    .actions((e) => ({
                        getTrackMeta: (0, _.L3)(function* () {
                            let { tracksResource: t, modelActionsLogger: a } = (0, _._$)(e),
                                { continueListen: i } = (0, D.M)(e);
                            if (i.track && 'number' == typeof i.track.durationMs) {
                                e.trackLoadingState = F.G.RESOLVE;
                                return;
                            }
                            e.trackLoadingState = F.G.PENDING;
                            try {
                                var r;
                                let a = (0, iK.V)(e.track.id, null == (r = e.album) ? void 0 : r.id),
                                    [i] = yield t.getTracksMeta({ trackIds: [a], withProgress: !0 });
                                if (((e.trackLoadingState = F.G.RESOLVE), i)) return (0, tl.v)(i);
                            } catch (t) {
                                (a.error(t), (e.trackLoadingState = F.G.REJECT));
                            }
                        }),
                        getPlaylistMeta: (0, _.L3)(function* () {
                            let { usersResource: t, modelActionsLogger: a } = (0, _._$)(e),
                                { continueListen: i } = (0, D.M)(e);
                            if ((i.track && 'number' == typeof i.trackIndex) || !e.playlist) {
                                e.playlistLoadingState = F.G.RESOLVE;
                                return;
                            }
                            e.playlistLoadingState = F.G.PENDING;
                            try {
                                let { tracks: a } = yield t.getPlaylistWithTracksIds({ userId: String(e.playlist.uid), playlistKind: e.playlist.kind, resumeStream: !1 }),
                                    i = a.findIndex((t) => String(t.id) === e.track.id);
                                if (((e.playlistLoadingState = F.G.RESOLVE), e.track.durationMs && -1 !== i)) return i;
                            } catch (t) {
                                (a.error(t), (e.playlistLoadingState = F.G.REJECT));
                            }
                        }),
                    })),
                iL = _.gK.model('ContinueListenTrack', { type: _.gK.string, data: iI }),
                iT = _.gK.model('ContinueListenBaseItem', { uri: _.gK.string, color: _.gK.maybe(_.gK.string) }),
                ih = _.gK.model('ContinueListenBaseItem', {
                    title: _.gK.string,
                    covers: _.gK.array(iT),
                    bookCount: _.gK.maybe(_.gK.number),
                    podcastCount: _.gK.maybe(_.gK.number),
                    trackCount: _.gK.maybe(_.gK.number),
                }),
                iN = _.gK.model('ContinueListenData', { lastPlayed: _.gK.maybe(iL), bookshelf: ih, newEpisodes: ih }),
                iA = eN
                    .props({ type: _.gK.literal(eb.t.CONTINUE_LISTEN), data: _.gK.maybe(iN), meta: ef })
                    .named('ContinueListen')
                    .views((e) => ({
                        get isVisible() {
                            return eh({
                                showPolicy: e.meta.showPolicy,
                                isNeededToLoad: e.isNeededToLoad,
                                isLoading: e.isLoading,
                                isLoaded: e.isLoaded,
                                isRejected: e.isRejected,
                                isNotEmpty: !!e.data,
                            });
                        },
                        get objectsCount() {
                            return Object.keys(e.data || {}).length;
                        },
                    })),
                iC = _.gK.model('BaseOverview', {
                    title: _.gK.maybe(_.gK.string),
                    message: _.gK.maybe(_.gK.string),
                    isExpandable: _.gK.optional(_.gK.boolean, !0),
                    visibleLinesCount: _.gK.optional(_.gK.number, 3),
                }),
                iR = iC.named('LandingBlockOverviewMeta').props({ showPolicy: _.gK.maybe(_.gK.string), viewAllActionLink: _.gK.maybeNull(_.gK.string) }),
                ik = eN
                    .props({ type: _.gK.literal(eb.t.DISLIKES), data: _.gK.undefined, meta: iR })
                    .named('Dislikes')
                    .views(() => ({
                        get isVisible() {
                            return !0;
                        },
                        get objectsCount() {
                            return 0;
                        },
                    })),
                iP = _.gK.model('LandingDonationItem', { type: _.gK.literal(el._.DONATION_ITEM), data: e2 }),
                i_ = _.gK.model('DonationsData', { items: _.gK.array(iP) }),
                iD = eN
                    .props({ type: _.gK.literal(eb.t.DONATIONS), data: _.gK.maybe(i_), meta: ef })
                    .named('Donations')
                    .views((e) => ({
                        get isVisible() {
                            var t;
                            return eh({
                                showPolicy: e.meta.showPolicy,
                                isNeededToLoad: e.isNeededToLoad,
                                isLoading: e.isLoading,
                                isLoaded: e.isLoaded,
                                isRejected: e.isRejected,
                                isNotEmpty: (null == (t = e.data) ? void 0 : t.items.length) !== 0,
                            });
                        },
                        get objectsCount() {
                            var a, i;
                            return null != (i = null == (a = e.data) ? void 0 : a.items.length) ? i : 0;
                        },
                    })),
                iO = _.gK.model('EditorialVibesDataModel', { items: _.gK.array(eX.G) }),
                iw = eN
                    .props({
                        type: _.gK.union(
                            _.gK.literal(eb.t.EDITORIAL_WAVES),
                            _.gK.literal(eb.t.META_TAG_WAVE),
                            _.gK.literal(eb.t.MICRO_GENRE_WAVE),
                            _.gK.literal(eb.t.MICRO_GENRE_SIMILAR_WAVE),
                            _.gK.literal(eb.t.META_TAG_SIMILAR_WAVE),
                            _.gK.literal(eb.t.EDITORIAL_WAVES_AGENT),
                            _.gK.literal(eb.t.META_TAG_WAVE_AGENT),
                            _.gK.literal(eb.t.MICRO_GENRE_WAVE_AGENT),
                            _.gK.literal(eb.t.MICRO_GENRE_SIMILAR_WAVE_AGENT),
                            _.gK.literal(eb.t.META_TAG_SIMILAR_WAVE_AGENT),
                        ),
                        data: _.gK.maybe(iO),
                        meta: ef,
                    })
                    .named('EditorialVibes')
                    .views((e) => ({
                        get isVisible() {
                            var t, a;
                            if (e.isLoading || e.isRejected || e.isNeededToLoad) return !0;
                            return (null == (a = e.data) || null == (t = a.items) ? void 0 : t.length) !== 0;
                        },
                        get objectsCount() {
                            var i, r;
                            return null != (r = null == (i = e.data) ? void 0 : i.items.length) ? r : 0;
                        },
                    })),
                iG = _.gK.model('FamiliarYouAndArtistPickData', { blocks: _.gK.array(_.gK.union(tx, tB)) }).views((e) => ({
                    get familiarYou() {
                        return e.blocks.find((e) => tx.is(e));
                    },
                    get artistPick() {
                        return e.blocks.find((e) => tB.is(e));
                    },
                })),
                iM = eN
                    .props({ type: _.gK.literal(eb.t.FAMILIAR_YOU_AND_ARTIST_PICK), data: _.gK.maybe(iG) })
                    .named('FamiliarYouAndArtistPick')
                    .views((e) => ({
                        get isVisible() {
                            var t, a, i, r, l, n;
                            if ((null == (t = e.data) ? void 0 : t.familiarYou) || (null == (a = e.data) ? void 0 : a.artistPick))
                                return !!(
                                    (null == (r = e.data) || null == (i = r.familiarYou) ? void 0 : i.isVisible) ||
                                    (null == (n = e.data) || null == (l = n.artistPick) ? void 0 : l.isVisible)
                                );
                            return !1;
                        },
                        get objectsCount() {
                            var s, o;
                            return null != (o = null == (s = e.data) ? void 0 : s.blocks.length) ? o : 0;
                        },
                    })),
                iU = _.gK.model('InStyleDataItemTab', { id: _.gK.number, title: _.gK.string, covers: _.gK.array(_.gK.string) }),
                iB = _.gK.model('InStyleDataItem', { tab: iU, data: _.gK.array(eC.J) }),
                iV = _.gK.model('InStyleData', { items: _.gK.array(iB) }),
                iF = eN
                    .props({ type: _.gK.literal(eb.t.IN_STYLE), data: _.gK.maybe(iV), meta: ef })
                    .named('InStyle')
                    .views((e) => ({
                        get isVisible() {
                            var t, a, i;
                            let r = (null == (t = e.data) ? void 0 : t.items.length) === 0,
                                l = null == (i = e.data) || null == (a = i.items) ? void 0 : a.every((e) => !(null == e ? void 0 : e.data));
                            return eh({
                                showPolicy: e.meta.showPolicy,
                                isNeededToLoad: e.isNeededToLoad,
                                isLoading: e.isLoading,
                                isLoaded: e.isLoaded,
                                isRejected: e.isRejected,
                                isNotEmpty: !r || !l,
                            });
                        },
                        get objectsCount() {
                            var r, l;
                            return null != (l = null == (r = e.data) ? void 0 : r.items.length) ? l : 0;
                        },
                    })),
                ix = _.gK.model('ItemListData', { items: _.gK.array(aB) }),
                ij = eN
                    .props({ type: _.gK.literal(eb.t.ITEM_LIST), data: _.gK.maybe(ix), meta: ef })
                    .named('ItemList')
                    .views((e) => ({
                        get isVisible() {
                            var t, a;
                            if (e.isLoading || e.isRejected || e.isNeededToLoad) return !0;
                            return (null == (a = e.data) || null == (t = a.items) ? void 0 : t.length) !== 0;
                        },
                        get objectsCount() {
                            var i, r;
                            return null != (r = null == (i = e.data) ? void 0 : i.items.length) ? r : 0;
                        },
                    })),
                iW = _.gK
                    .model('LikesData', { title: _.gK.string, cover: eP.$, playlistUuid: _.gK.maybe(_.gK.string), trackCovers: _.gK.array(eP.$), count: _.gK.number })
                    .views((e) => ({
                        get id() {
                            return e.playlistUuid;
                        },
                        get url() {
                            let { href: t } = (0, ek.u)('/playlists/:playlistUuid', { params: { playlistUuid: e.playlistUuid } });
                            return t;
                        },
                    })),
                iX = _.gK.model('HistoryData', { title: _.gK.string, trackCovers: _.gK.array(eP.$), artists: _.gK.array(_.gK.string) }).views(() => ({
                    get id() {
                        return 'music-history';
                    },
                    get url() {
                        let { href: e } = (0, ek.u)('/music-history');
                        return e;
                    },
                })),
                i$ = _.gK.model('LikesAndHistoryData', { favorites: iW, history: iX }),
                iY = eN
                    .props({ type: _.gK.literal(eb.t.LIKES_AND_HISTORY), data: _.gK.maybe(i$), meta: ef })
                    .named('LikesAndCount')
                    .views((e) => ({
                        get isVisible() {
                            var t, a;
                            if (e.isLoading || e.isRejected || e.isNeededToLoad) return !0;
                            return !!((null == (t = e.data) ? void 0 : t.favorites) && (null == (a = e.data) ? void 0 : a.history));
                        },
                        get objectsCount() {
                            return 2;
                        },
                    })),
                iJ = _.gK.model('MixesGridMixCardItem', {
                    id: _.gK.string,
                    title: _.gK.string,
                    weblink: _.gK.maybeNull(_.gK.string),
                    covers: _.gK.maybeNull(_.gK.array(eP.$)),
                }),
                iq = _.gK.model('MixesGridData', { items: _.gK.array(iJ) }),
                iH = eN
                    .props({ type: _.gK.union(_.gK.literal(eb.t.MIXES_GRID), _.gK.literal(eb.t.MIXES_MUSIC)), data: _.gK.maybe(iq), meta: ef })
                    .named('MixesGrid')
                    .views((e) => ({
                        get isVisible() {
                            var t, a;
                            return eh({
                                showPolicy: e.meta.showPolicy,
                                isNotEmpty: (null == (a = e.data) || null == (t = a.items) ? void 0 : t.length) !== 0,
                                isLoaded: e.isLoaded,
                                isLoading: e.isLoading,
                                isRejected: e.isRejected,
                                isNeededToLoad: e.isNeededToLoad,
                            });
                        },
                        get objectsCount() {
                            var i, r;
                            return null != (r = null == (i = e.data) ? void 0 : i.items.length) ? r : 0;
                        },
                    }));
            var iz = a(21127);
            let iQ = _.gK.model('MixesData', { items: _.gK.array(iz.f) }),
                iZ = eN
                    .props({ type: _.gK.literal(eb.t.MIXES), data: _.gK.maybe(iQ), meta: ef })
                    .named('Mixes')
                    .views((e) => ({
                        get isVisible() {
                            var t, a;
                            if (e.isLoading || e.isRejected || e.isNeededToLoad) return !0;
                            return (null == (a = e.data) || null == (t = a.items) ? void 0 : t.length) !== 0;
                        },
                        get objectsCount() {
                            var i, r;
                            return null != (r = null == (i = e.data) ? void 0 : i.items.length) ? r : 0;
                        },
                    })),
                i0 = _.gK.model('NeuromusicItem', {
                    title: _.gK.string,
                    stationId: _.gK.string,
                    imageUrl: _.gK.maybe(_.gK.string),
                    style: _.gK.maybe(_.gK.model({ backgroundColor: _.gK.maybe(_.gK.string), titleColor: _.gK.maybe(_.gK.string) })),
                }),
                i1 = _.gK.model('NeuromusicData', { items: _.gK.array(i0) }),
                i3 = eN
                    .props({ type: _.gK.literal(eb.t.NEUROMUSIC), data: _.gK.maybe(i1), meta: ef })
                    .named('Neuromusic')
                    .views((e) => ({
                        get isVisible() {
                            var t, a;
                            if (e.isLoading || e.isRejected || e.isNeededToLoad) return !0;
                            return (null == (a = e.data) || null == (t = a.items) ? void 0 : t.length) !== 0;
                        },
                        get objectsCount() {
                            var i, r;
                            return null != (r = null == (i = e.data) ? void 0 : i.items.length) ? r : 0;
                        },
                    }));
            var i2 = a(8655);
            let i5 = [
                    'avatars.mds.yandex.net/get-music-misc/30221/img.68678806f4c3467d82bab43b/%%',
                    'avatars.mds.yandex.net/get-music-misc/34161/img.68678811e40cd01bff989e50/%%',
                    'avatars.mds.yandex.net/get-music-misc/30221/img.6867881aea3b324d5df9692f/%%',
                ],
                i6 = [
                    'avatars.mds.yandex.net/get-music-misc/2419084/img.686688add03ee35062c02822/%%',
                    'avatars.mds.yandex.net/get-music-misc/28592/img.6867878964ece217d515ffda/%%',
                    'avatars.mds.yandex.net/get-music-misc/30221/img.686787926dccf85a8a06c771/%%',
                ],
                i8 = _.gK
                    .model('NewReleasesDataItem', {
                        album: eC.J,
                        releaseDate: _.gK.maybe(_.gK.string),
                        coverUri: _.gK.maybe(_.gK.string),
                        coverColor: _.gK.maybe(_.gK.string),
                    })
                    .views((e) => ({
                        coverUriWithPlaceholder: (t) =>
                            (function (e) {
                                let { coverUri: t, artistId: a, theme: i } = e;
                                if (!(null == t ? void 0 : t.includes('2419084/img.6568f242071da73cabc5846c'))) return t;
                                let r = (Number(a) || 0) % 3;
                                return i === i2.S.Light ? i5[r] : i6[r];
                            })({ coverUri: e.coverUri, artistId: e.album.artistId, theme: t }),
                    })),
                i4 = _.gK.model('NewReleasesData', { items: _.gK.array(i8) }),
                i7 = eN
                    .props({ type: _.gK.union(_.gK.literal(eb.t.NEW_RELEASES), _.gK.literal(eb.t.EDITORIAL_NEW_RELEASES)), data: _.gK.maybe(i4), meta: ef })
                    .named('NewReleases')
                    .views((e) => ({
                        get isVisible() {
                            var t;
                            return eh({
                                showPolicy: e.meta.showPolicy,
                                isNeededToLoad: e.isNeededToLoad,
                                isLoading: e.isLoading,
                                isLoaded: e.isLoaded,
                                isRejected: e.isRejected,
                                isNotEmpty: (null == (t = e.data) ? void 0 : t.items.length) !== 0,
                            });
                        },
                        get objectsCount() {
                            var a, i;
                            return null != (i = null == (a = e.data) ? void 0 : a.items.length) ? i : 0;
                        },
                    })),
                i9 = _.gK.model('NonMusicChartAlbumData', { items: _.gK.array(eC.J) }),
                re = eN
                    .props({ type: _.gK.union(_.gK.literal(eb.t.CHART_ALBUMS), _.gK.literal(eb.t.PODCASTS_CHART_ALBUMS)), data: _.gK.maybe(i9), meta: ef })
                    .named('NonMusicChartAlbum')
                    .views((e) => ({
                        get isVisible() {
                            var t, a;
                            if (e.isLoading || e.isRejected || e.isNeededToLoad) return !0;
                            return (null == (a = e.data) || null == (t = a.items) ? void 0 : t.length) !== 0;
                        },
                        get objectsCount() {
                            var i, r;
                            return null != (r = null == (i = e.data) ? void 0 : i.items.length) ? r : 0;
                        },
                    })),
                rt = _.gK.model('NonMusicEditorialCompilationData', { items: _.gK.array(_.gK.union(az, ej)) }),
                ra = eN
                    .props({
                        type: _.gK.union(_.gK.literal(eb.t.NON_MUSIC_EDITORIAL_COMPILATION), _.gK.literal(eb.t.NON_MUSIC_CATEGORY)),
                        data: _.gK.maybe(rt),
                        meta: ef,
                    })
                    .named('NonMusicEditorialCompilation')
                    .views((e) => ({
                        get isVisible() {
                            var t, a;
                            if (e.isLoading || e.isRejected || e.isNeededToLoad) return !0;
                            return (null == (a = e.data) || null == (t = a.items) ? void 0 : t.length) !== 0;
                        },
                        get objectsCount() {
                            var i, r;
                            return null != (r = null == (i = e.data) ? void 0 : i.items.length) ? r : 0;
                        },
                    })),
                ri = eN
                    .props({ type: _.gK.literal(eb.t.OVERVIEW), data: _.gK.undefined, meta: iR })
                    .named('Overview')
                    .views((e) => ({
                        get isVisible() {
                            return !!e.meta.message;
                        },
                        get objectsCount() {
                            return 1;
                        },
                    })),
                rr = _.gK.model('LandingPersonalPlaylistItem', { playlist: ex.I, playlistType: _.gK.string, description: _.gK.maybe(_.gK.string) }),
                rl = _.gK.model('LandingPersonalPlaylistItem', { type: _.gK.literal(el._.PERSONAL_PLAYLIST_ITEM), data: rr }),
                rn = _.gK.model('PersonalPlaylistsData', { items: _.gK.array(rl) }),
                rs = eN
                    .props({ type: _.gK.union(_.gK.literal(eb.t.PERSONAL_PLAYLISTS), _.gK.literal(eb.t.REWIND_PLAYLISTS)), data: _.gK.maybe(rn), meta: ef })
                    .named('PersonalPlaylists')
                    .views((e) => ({
                        get isVisible() {
                            var t, a;
                            if (e.isLoading || e.isRejected || e.isNeededToLoad) return !0;
                            return (null == (a = e.data) || null == (t = a.items) ? void 0 : t.length) !== 0;
                        },
                        get objectsCount() {
                            var i, r;
                            return null != (r = null == (i = e.data) ? void 0 : i.items.length) ? r : 0;
                        },
                    }));
            var ro = a(37862),
                rd = a(99007);
            let rg = (e) => {
                    var t;
                    let a = (null == (t = e.tracks) ? void 0 : t.length) ? e.tracks.map((e) => ({ id: e })) : [];
                    return { id: e.id, name: e.name, tracks: (0, _.wg)(a) };
                },
                ru = _.gK.model('PlaylistFiltersTrack', { id: _.gK.union(_.gK.string, _.gK.number) }),
                rc = _.gK.model('PlaylistFiltersItem', { id: _.gK.string, name: _.gK.string, tracks: _.gK.array(ru) }),
                rm = _.gK.model('LandingBlockClientMeta', {
                    title: _.gK.maybe(_.gK.string),
                    description: _.gK.maybe(_.gK.string),
                    viewAllActionLink: _.gK.maybeNull(_.gK.string),
                    showPolicy: _.gK.maybe(_.gK.string),
                    coverUri: _.gK.maybe(_.gK.string),
                });
            var ry = a(31893);
            let rp = _.gK
                    .model('PlaylistWithTracksDataBase', {
                        totalItemsCount: _.gK.maybe(_.gK.number),
                        items: _.gK.array(Z.v),
                        playlist: tM.$,
                        coverUri: _.gK.maybe(_.gK.string),
                        canShowEmptyBlock: _.gK.maybe(_.gK.boolean),
                        withRewindTrailerButton: _.gK.maybe(_.gK.boolean),
                    })
                    .views((e) => ({
                        getCoverUri(t) {
                            switch (t) {
                                case ry.z.DEFAULT:
                                    return e.playlist.coverUri;
                                case ry.z.CUSTOM:
                                    return e.coverUri;
                                default:
                                    var a;
                                    return null != (a = e.coverUri) ? a : e.playlist.coverUri;
                            }
                        },
                    })),
                rE = _.gK
                    .compose(
                        _.gK.model('PlaylistWithTracksAndFiltersFilters', { items: _.gK.maybeNull(_.gK.array(rc)), activeFilter: _.gK.maybe(_.gK.string) }),
                        ee.X,
                        w.p,
                    )
                    .views((e) => ({
                        get isShimmerVisible() {
                            return e.isRejected || e.isLoading;
                        },
                        get activeFilterIndex() {
                            var t;
                            let a = null == (t = e.items) ? void 0 : t.findIndex((t) => t.id === e.activeFilter);
                            return void 0 !== a && a > -1 ? a : 0;
                        },
                    }))
                    .actions((e) => ({
                        setActiveFilter(t) {
                            t !== ro.Q.ALL ? (e.activeFilter = t) : (e.activeFilter = void 0);
                        },
                    })),
                rb = _.gK
                    .compose(
                        rp.props({
                            likedTrackIds: _.gK.optional(_.gK.array(_.gK.string), () => []),
                            trackDetailsMap: _.gK.optional(_.gK.map(Z.v), {}),
                            tracksLoading: _.gK.optional(ee.X, () => ({ loadingState: F.G.IDLE })),
                            playlistLoading: _.gK.optional(ee.X, () => ({ loadingState: F.G.IDLE })),
                            filters: _.gK.optional(rE, () => ({ loadingState: F.G.IDLE })),
                        }),
                        w.p,
                    )
                    .named('PlaylistWithTracksAndFiltersData')
                    .views((e) => ({
                        get shouldShowEmptyPlaylist() {
                            return 0 === e.items.length && !e.tracksLoading.isLoading && !!e.canShowEmptyBlock;
                        },
                        get shouldLoadTracksMeta() {
                            return e.likedTrackIds.length > 0 && e.tracksLoading.isNeededToLoad;
                        },
                        get shouldLoadFilters() {
                            return e.likedTrackIds.length > 0 && e.filters.isNeededToLoad;
                        },
                        get visibleTrackIds() {
                            if (e.filters.activeFilter) {
                                var t;
                                let a = null == (t = e.filters.items) ? void 0 : t.find((t) => t.id === e.filters.activeFilter);
                                if (a) return a.tracks.slice(0, 8).map((e) => String(e.id));
                            }
                            return e.likedTrackIds.slice(0, 8);
                        },
                        get isLoading() {
                            return e.playlistLoading.isLoading || e.tracksLoading.isLoading;
                        },
                        get isRejected() {
                            return e.playlistLoading.isRejected || e.tracksLoading.isRejected;
                        },
                    }))
                    .actions((e) => {
                        let t = {
                            getPlaylist: (0, _.L3)(function* () {
                                let { modelActionsLogger: a, usersResource: i, playlistResource: r } = (0, _._$)(e),
                                    { user: l } = (0, D.M)(e),
                                    n = l.account.data.uid;
                                if ((0, _._n)(e) && n) {
                                    e.playlistLoading.loadingState = F.G.PENDING;
                                    try {
                                        let a = yield i.getPlaylistWithTracksIds({
                                                userId: String(n),
                                                playlistKind: rd.j.LIKE,
                                                resumeStream: !1,
                                                trackMetaType: 'music',
                                            }),
                                            l = yield r.getPlaylist({ playlistUuid: a.playlistUuid, resumeStream: !1, richTracks: !1 });
                                        ((e.likedTrackIds = (0, _.wg)(l.tracks.map((e) => String(e.id)))),
                                            (e.totalItemsCount = e.likedTrackIds.length),
                                            0 === e.totalItemsCount && (e.canShowEmptyBlock = !0),
                                            (e.playlist = (0, tb.j)(l)),
                                            (e.playlistLoading.loadingState = F.G.RESOLVE),
                                            yield Promise.allSettled([t.getTracksMeta(), t.getFilters()]));
                                    } catch (t) {
                                        (a.error(t), (e.playlistLoading.loadingState = F.G.REJECT));
                                    }
                                }
                            }),
                            updateItemsFromCache() {
                                let a = [];
                                (e.visibleTrackIds.forEach((t) => {
                                    let i = e.trackDetailsMap.get(t);
                                    i && a.push(i);
                                }),
                                    t.setItems(a));
                            },
                            getTracksMeta: (0, _.L3)(function* () {
                                if (!(0, _._n)(e)) return;
                                let { tracksResource: a, modelActionsLogger: i } = (0, _._$)(e);
                                e.tracksLoading.loadingState = F.G.PENDING;
                                let r = e.visibleTrackIds.filter((t) => !e.trackDetailsMap.has(t));
                                if (!r.length) {
                                    (t.updateItemsFromCache(), (e.tracksLoading.loadingState = F.G.RESOLVE));
                                    return;
                                }
                                try {
                                    ((yield a.getTracksMeta({ trackIds: r })).forEach((t) => {
                                        let a = (0, tl.v)(t);
                                        e.trackDetailsMap.set(String(t.id), a);
                                    }),
                                        t.updateItemsFromCache(),
                                        (e.tracksLoading.loadingState = F.G.RESOLVE));
                                } catch (t) {
                                    (i.error(t), (e.tracksLoading.loadingState = F.G.REJECT));
                                }
                            }),
                            getFilters: (0, _.L3)(function* () {
                                if (!(0, _._n)(e)) return;
                                let { filtersResource: t, modelActionsLogger: a } = (0, _._$)(e);
                                try {
                                    e.filters.loadingState = F.G.PENDING;
                                    let a = yield t.getTracksFilters({ trackIds: e.likedTrackIds }),
                                        i = ((e) => {
                                            let t = e.filters.map(rg);
                                            if (t.length < 3) return [];
                                            let a = t.find((e) => e.id === ro.Q.ALL);
                                            if (!a) return [];
                                            let i = t.filter((e) => e.tracks.length >= 8);
                                            return i.length < 2 ? [] : [a, ...i.slice(0, 7)];
                                        })(a);
                                    ((e.filters.items = (0, _.wg)(i)), (e.filters.loadingState = F.G.RESOLVE));
                                } catch (t) {
                                    (a.error(t), (e.filters.loadingState = F.G.REJECT));
                                }
                            }),
                            setItems(t) {
                                e.items.forEach((e) => {
                                    (0, _.Yo)(e);
                                });
                                let a = t.map((e) => (0, _.dV)(e));
                                e.items.replace(a);
                            },
                            handleFilterClick: (0, _.L3)(function* (a) {
                                (e.filters.setActiveFilter(a.id), yield t.getTracksMeta());
                            }),
                        };
                        return t;
                    }),
                rv = eN
                    .props({
                        type: _.gK.literal(eb.t.COLLECTION_FAVOURITE_PLAYLIST),
                        data: _.gK.optional(rb, () => ({
                            items: [],
                            playlist: { uuid: '', isAvailable: !0, uid: 0, kind: rd.j.LIKE, likesCount: 0, pendingLikesCount: 0 },
                        })),
                        meta: rm,
                    })
                    .named('PlaylistWithTracksAndFilters')
                    .views((e) => ({
                        get isVisible() {
                            var t, a, i, r, l, n, s, o, d, g, u;
                            if ((e.isLoaded && 0 === e.data.items.length) || (null == (t = e.data) ? void 0 : t.canShowEmptyBlock)) return !0;
                            return eh({
                                showPolicy: e.meta.showPolicy,
                                isNeededToLoad: !!(
                                    e.isNeededToLoad ||
                                    (null == (a = e.data) ? void 0 : a.playlistLoading.isNeededToLoad) ||
                                    (null == (i = e.data) ? void 0 : i.tracksLoading.isNeededToLoad)
                                ),
                                isLoading: !!(
                                    e.isLoading ||
                                    (null == (r = e.data) ? void 0 : r.playlistLoading.isLoading) ||
                                    (null == (l = e.data) ? void 0 : l.tracksLoading.isLoading)
                                ),
                                isLoaded: !!(
                                    e.isLoaded &&
                                    (null == (n = e.data) ? void 0 : n.playlistLoading.isResolved) &&
                                    (null == (s = e.data) ? void 0 : s.tracksLoading.isResolved)
                                ),
                                isRejected: !!(
                                    e.isRejected ||
                                    (null == (o = e.data) ? void 0 : o.playlistLoading.isRejected) ||
                                    (null == (d = e.data) ? void 0 : d.tracksLoading.isRejected)
                                ),
                                isNotEmpty: !!((null == (g = e.data) ? void 0 : g.items.length) || (null == (u = e.data) ? void 0 : u.canShowEmptyBlock)),
                            });
                        },
                        get objectsCount() {
                            var c, m;
                            let t = null != (m = null == (c = e.data) ? void 0 : c.items.length) ? m : 0;
                            return t < 8 ? t : 8;
                        },
                    })),
                rS = rp.named('PlaylistWithTracksData'),
                rK = eN
                    .props({
                        type: _.gK.union(
                            _.gK.literal(eb.t.OPEN_PLAYLIST),
                            _.gK.literal(eb.t.SMART_OPEN_PLAYLIST),
                            _.gK.literal(eb.t.NON_MUSIC_OPEN_PLAYLIST),
                            _.gK.literal(eb.t.COLLECTION_PLAYLIST_WITH_LIKES),
                        ),
                        data: _.gK.maybe(rS),
                        meta: ef,
                    })
                    .named('PlaylistWithTracks')
                    .views((e) => ({
                        get isVisible() {
                            var t, a;
                            if (null == (t = e.data) ? void 0 : t.canShowEmptyBlock) return !0;
                            return eh({
                                showPolicy: e.meta.showPolicy,
                                isNeededToLoad: e.isNeededToLoad,
                                isLoading: e.isLoading,
                                isLoaded: e.isLoaded,
                                isRejected: e.isRejected,
                                isNotEmpty: (null == (a = e.data) ? void 0 : a.items.length) !== 0,
                            });
                        },
                        get objectsCount() {
                            var i, r;
                            let t = null != (r = null == (i = e.data) ? void 0 : i.items.length) ? r : 0;
                            return t < 8 ? t : 8;
                        },
                    })),
                rI = _.gK.model('PromotionsDataItem', {
                    featureId: _.gK.string,
                    title: _.gK.string,
                    subtitle: _.gK.string,
                    weblink: _.gK.string,
                    imageUrl: _.gK.string,
                    advDisclaimer: _.gK.maybeNull(_.gK.string),
                }),
                rL = _.gK.model('PromotionsData', { items: _.gK.array(rI) }),
                rT = eN
                    .props({
                        type: _.gK.union(_.gK.literal(eb.t.PROMOTIONS), _.gK.literal(eb.t.EDITORIAL_PROMOTIONS), _.gK.literal(eb.t.NON_MUSIC_PROMOTIONS)),
                        data: _.gK.maybe(rL),
                        meta: ef,
                    })
                    .named('Promotions')
                    .views((e) => ({
                        get isVisible() {
                            var t, a;
                            if (e.isLoading || e.isRejected || e.isNeededToLoad) return !0;
                            return (null == (a = e.data) || null == (t = a.items) ? void 0 : t.length) !== 0;
                        },
                        get objectsCount() {
                            var i, r;
                            return null != (r = null == (i = e.data) ? void 0 : i.items.length) ? r : 0;
                        },
                    })),
                rh = _.gK.model('Q2vSuggestion', { query: _.gK.string }),
                rN = _.gK.model('Q2vSuggestionsData', { suggestionsRequestId: _.gK.string, items: _.gK.array(rh) }),
                rA = eN
                    .props({ type: _.gK.literal(eb.t.Q2V_SUGGESTIONS), data: _.gK.maybe(rN), meta: ef })
                    .named('Q2vSuggestions')
                    .views((e) => ({
                        get isVisible() {
                            var t;
                            let {
                                    experiments: a,
                                    user: { hasPlus: i, isLumenAvailable: r },
                                } = (0, D.M)(e),
                                l = !!(null == (t = e.data) ? void 0 : t.items.length),
                                n = a.checkExperiment(O.z.WebNextQueryToVibeLumenOptionCheck, 'on');
                            if (!i || !a.checkExperiment(O.z.WebNextQueryToVibe, 'on') || (n && !r)) return !1;
                            if (l && (e.isNeededToLoad || e.isLoading)) return !0;
                            return eh({
                                showPolicy: e.meta.showPolicy,
                                isNeededToLoad: e.isNeededToLoad,
                                isLoading: e.isLoading,
                                isLoaded: e.isLoaded,
                                isRejected: e.isRejected,
                                isNotEmpty: l,
                            });
                        },
                        get objectsCount() {
                            var a, i;
                            return null != (i = null == (a = e.data) ? void 0 : a.items.length) ? i : 0;
                        },
                    })),
                rf = _.gK.union(eV, eW, eF),
                rC = _.gK.model('RecentlyPlayedData', { items: _.gK.array(rf) }),
                rR = eN
                    .props({ type: _.gK.literal(eb.t.RECENTLY_PLAYED), data: _.gK.maybe(rC), meta: ef })
                    .named('RecentlyPlayed')
                    .views((e) => ({
                        get isVisible() {
                            var t, a;
                            if (e.isLoading || e.isRejected || e.isNeededToLoad) return !0;
                            return (null == (a = e.data) || null == (t = a.items) ? void 0 : t.length) !== 0;
                        },
                        get objectsCount() {
                            var i, r;
                            return null != (r = null == (i = e.data) ? void 0 : i.items.length) ? r : 0;
                        },
                    })),
                rk = _.gK.model('LandingVibeItemData', { vibe: eX.G, cover: _.gK.maybeNull(eP.$) }),
                rP = _.gK.model('LandingVibeItem', { type: _.gK.literal(el._.WAVE_ITEM), data: rk }),
                r_ = _.gK.union(eF, ej, eV, az, aQ, rP, e$, aC),
                rD = _.gK.model('SearchHistoryData', { items: _.gK.array(r_) }),
                rO = eN
                    .props({ type: _.gK.union(_.gK.literal(eb.t.HISTORY), _.gK.literal(eb.t.SEARCH_HISTORY)), data: _.gK.maybe(rD), meta: ef })
                    .named('SearchHistory')
                    .views((e) => ({
                        get isVisible() {
                            return eh({
                                showPolicy: e.meta.showPolicy,
                                isNeededToLoad: e.isNeededToLoad,
                                isLoading: e.isLoading,
                                isLoaded: e.isLoaded,
                                isRejected: e.isRejected,
                                isNotEmpty: !0,
                            });
                        },
                        get objectsCount() {
                            var t, a;
                            return null != (a = null == (t = e.data) ? void 0 : t.items.length) ? a : 0;
                        },
                    })),
                rw = _.gK.model('SpecialThemeSettings', {
                    buttonColor: _.gK.maybeNull(_.gK.string),
                    textColor: _.gK.maybeNull(_.gK.string),
                    bgImageUrl: _.gK.maybeNull(_.gK.string),
                    imageUrl: _.gK.maybeNull(_.gK.string),
                    buttonTextColor: _.gK.maybeNull(_.gK.string),
                }),
                rG = _.gK.model('SpecialData', {
                    title: _.gK.maybe(_.gK.string),
                    subtitle: _.gK.maybe(_.gK.string),
                    buttonTitle: _.gK.maybe(_.gK.string),
                    imageUrl: _.gK.maybe(_.gK.string),
                    align: _.gK.maybeNull(_.gK.string),
                    weblink: _.gK.maybeNull(_.gK.string),
                    lightTheme: _.gK.maybeNull(rw),
                    darkTheme: _.gK.maybeNull(rw),
                    advDisclaimer: _.gK.maybeNull(_.gK.string),
                }),
                rM = eN
                    .props({ type: _.gK.literal(eb.t.SPECIAL), data: _.gK.maybe(rG), meta: ef })
                    .named('Special')
                    .views((e) => ({
                        get isVisible() {
                            if (e.isLoading || e.isRejected || e.isNeededToLoad) return !0;
                            return !!e.data;
                        },
                        get objectsCount() {
                            return 0;
                        },
                    })),
                rU = _.gK.model('VibesDataItemTab', { id: _.gK.number, title: _.gK.string }),
                rB = _.gK.model('VibesDataItem', { tab: rU, data: _.gK.array(eX.G) }),
                rV = _.gK.model('VibesData', { items: _.gK.array(rB) }),
                rF = eN
                    .props({
                        type: _.gK.union(
                            _.gK.literal(eb.t.WAVES),
                            _.gK.literal(eb.t.SETS_BY_WAVES),
                            _.gK.literal(eb.t.WAVES_AGENT),
                            _.gK.literal(eb.t.SETS_BY_WAVES_AGENT),
                        ),
                        data: _.gK.maybe(rV),
                        meta: ef,
                    })
                    .named('Vibes')
                    .views((e) => ({
                        get isVisible() {
                            var t, a, i;
                            let r = (null == (t = e.data) ? void 0 : t.items.length) === 0,
                                l = null == (i = e.data) || null == (a = i.items) ? void 0 : a.every((e) => !(null == e ? void 0 : e.data));
                            return eh({
                                showPolicy: e.meta.showPolicy,
                                isNeededToLoad: e.isNeededToLoad,
                                isLoading: e.isLoading,
                                isLoaded: e.isLoaded,
                                isRejected: e.isRejected,
                                isNotEmpty: !r || !l,
                            });
                        },
                        get objectsCount() {
                            var r, l, n;
                            return null != (n = null == (l = e.data) || null == (r = l.items[0]) ? void 0 : r.data.length) ? n : 0;
                        },
                    })),
                rx = _.gK.model('WizardData', { title: _.gK.string, description: _.gK.maybe(_.gK.string), artists: _.gK.array(eR.P) }),
                rj = eN
                    .props({ type: _.gK.literal(eb.t.WIZARD), data: _.gK.maybe(rx), meta: ef })
                    .named('Wizard')
                    .views(() => ({
                        get isVisible() {
                            return !0;
                        },
                        get objectsCount() {
                            return 0;
                        },
                    })),
                rW = _.gK.union(
                    aT,
                    a_,
                    aX,
                    it,
                    a2,
                    aY,
                    rK,
                    rv,
                    i7,
                    eq,
                    rT,
                    rA,
                    rR,
                    iF,
                    rs,
                    rM,
                    rj,
                    rF,
                    iZ,
                    i3,
                    iY,
                    ra,
                    re,
                    aU,
                    iS,
                    a4,
                    iw,
                    ij,
                    ri,
                    aH,
                    iD,
                    ak,
                    ap,
                    eU,
                    iA,
                    ik,
                    rO,
                    iH,
                    a1,
                    id,
                    im,
                    av,
                    tA,
                    tC,
                    tx,
                    tB,
                    tD,
                    aK,
                    iM,
                    ib,
                    ii,
                    aj,
                ),
                rX = _.gK.model('TabData', { id: _.gK.string, title: _.gK.string, subtitle: _.gK.maybe(_.gK.string), covers: _.gK.maybe(_.gK.array(_.gK.string)) }),
                r$ = _.gK
                    .model('Tab', {
                        meta: _.gK.model({ id: _.gK.string, title: _.gK.string }),
                        data: _.gK.maybe(rX),
                        blocks: _.gK.array(rW),
                        shouldReloadNotification: _.gK.boolean,
                    })
                    .views((e) => ({
                        get hasErrorBlocks() {
                            return e.blocks.some((e) => e.isRejected && e.isVisible);
                        },
                    }))
                    .actions((e) => ({
                        setShouldReloadNotification(t) {
                            e.shouldReloadNotification = t;
                        },
                    })),
                rY = _.gK.compose(_.gK.model('TabsData', { data: _.gK.maybeNull(_.gK.array(r$)) }), w.p, ee.X).actions((e) => ({
                    reset() {
                        ((e.loadingState = F.G.IDLE), e.destroyItems([e.data]));
                    },
                })),
                rJ = _.gK
                    .compose(
                        _.gK.model('Tabs', {
                            meta: _.gK.maybeNull(_.gK.model({ selectedTabIndex: _.gK.number, source: _.gK.maybe(eA) })),
                            upperBlocks: _.gK.maybeNull(_.gK.array(rW)),
                            tabs: rY,
                        }),
                        ee.X,
                    )
                    .views((e) => {
                        let t = {
                            get isEmpty() {
                                var a, i;
                                return !(null == (a = e.tabs.data) ? void 0 : a.length) && !(null == (i = e.upperBlocks) ? void 0 : i.length);
                            },
                            get isLoadedAndEmpty() {
                                return [F.G.RESOLVE, F.G.REJECT].includes(e.loadingState) && t.isEmpty;
                            },
                            get hasUpperBlocks() {
                                var r;
                                return !!(null == (r = e.upperBlocks) ? void 0 : r.some((e) => e.isVisible));
                            },
                        };
                        return t;
                    }),
                rq = rJ
                    .props({ id: _.gK.optional(_.gK.string, ''), title: _.gK.optional(_.gK.string, '') })
                    .views((e) => ({
                        get isLoaded() {
                            return e.loadingState === F.G.RESOLVE || e.loadingState === F.G.REJECT;
                        },
                    }))
                    .actions((e) => {
                        let t = {
                            getBlock: (0, _.L3)(function* (a) {
                                var i, r, l, n, s, o, d;
                                let g;
                                if (!a || (!('source' in a.meta) && ((g = a.type), !ti.includes(g)) && !tt(a.type))) return;
                                if ((0, ta.Q)(a)) {
                                    null == (i = a.data) || i.blocks.forEach(t.getBlock);
                                    return;
                                }
                                let { landingResource: u, modelActionsLogger: c } = (0, _._$)(e);
                                try {
                                    if (((a.loadingState = eE.PENDING), tt(a.type))) {
                                        a.loadingState = eE.RESOLVE;
                                        return;
                                    }
                                    let { concerts: t } = (0, D.M)(e),
                                        i = yield u.getBlock({
                                            source:
                                                ((r = 'source' in a.meta ? a.meta.source : void 0),
                                                (l = a.type),
                                                (n = t.concertsLocationForRequest),
                                                r && au.has(l) && (null == n ? void 0 : n.length) ? { ...r, locations: n } : r),
                                            type: a.type,
                                        });
                                    if (!(0, _._n)(a)) return;
                                    switch (((a.loadingState = eE.REJECT), a.type)) {
                                        case eb.t.CLIPS:
                                        case eb.t.ARTIST_CLIPS:
                                        case eb.t.COLLECTION_CLIPS:
                                            let g, c;
                                            'object' == typeof i &&
                                                null !== i &&
                                                'items' in i &&
                                                Array.isArray(i.items) &&
                                                (!i.items.length ||
                                                    ((g = i.items[0]),
                                                    'object' == typeof g && null !== g && 'type' in g && (g.type === el._.CLIP || g.type === el._.CLIP_ITEM))) &&
                                                ((c = a.type), (a.data = (0, _.wg)({ items: i.items.map(tg), canShowEmptyBlock: c === eb.t.COLLECTION_CLIPS })));
                                            break;
                                        case eb.t.WIZARD:
                                            'object' == typeof i && null !== i && 'title' in i && (a.data = ag(i));
                                            break;
                                        case eb.t.CHART_TRACKS:
                                            'chart' in i && (a.data = to(i));
                                            break;
                                        case eb.t.NON_MUSIC_EDITORIAL_COMPILATION:
                                        case eb.t.NON_MUSIC_CATEGORY:
                                            'object' == typeof i && null !== i && 'items' in i && (a.data = t9(i));
                                            break;
                                        case eb.t.CHART_ALBUMS:
                                        case eb.t.PODCASTS_CHART_ALBUMS:
                                            ((e) => {
                                                let t,
                                                    a = e.items;
                                                return !a.length || !!((t = a[0]) && 'object' == typeof t && 'type' in t && t.type === el._.CHART_ALBUM_ITEM);
                                            })(i) &&
                                                (a.data = ((e) => {
                                                    let t = e.items.map((e) =>
                                                        ((e) => {
                                                            let { album: t, artists: a, likesCount: i, chart: r } = e;
                                                            return (0, _.wg)({ ...(0, en.s)({ album: t, artists: a, likesCount: i }), chart: r && (0, tS.w)(r) });
                                                        })({ album: e.data.album, likesCount: e.data.likesCount, chart: e.data.chart }),
                                                    );
                                                    return (0, _.wg)({ items: t });
                                                })(i));
                                            break;
                                        case eb.t.COLLECTION_ALBUMS:
                                            'likedAlbums' in i &&
                                                (a.data = ((e) => {
                                                    var t;
                                                    let a =
                                                        null == (t = (e || {}).likedAlbums)
                                                            ? void 0
                                                            : t.map((e) => (0, en.s)({ album: e.data.album, artists: e.data.artists, trailer: e.data.trailer }));
                                                    return (0, _.wg)({ items: a, canShowEmptyBlock: !0 });
                                                })(i));
                                            break;
                                        case eb.t.COLLECTION_ARTISTS:
                                            'likedArtists' in i &&
                                                (a.data = ((e) => {
                                                    var t;
                                                    let a =
                                                        null == (t = (e || {}).likedArtists)
                                                            ? void 0
                                                            : t.map((e) => (0, eo.a)({ artist: e.data.artist, trailer: e.data.trailer }));
                                                    return (0, _.wg)({ items: a, canShowEmptyBlock: !0 });
                                                })(i));
                                            break;
                                        case eb.t.COLLECTION_ARTISTS_AND_TOP:
                                            i &&
                                                'object' == typeof i &&
                                                'items' in i &&
                                                (a.data = ((e) => {
                                                    let t = e.items.map((e) => (0, eo.a)({ artist: e.data.artist, trailer: e.data.trailer }));
                                                    return (0, _.wg)({ items: t, canShowEmptyBlock: !0 });
                                                })(i));
                                            break;
                                        case eb.t.COLLECTION_TOP_ARTISTS:
                                            i &&
                                                'object' == typeof i &&
                                                'artists' in i &&
                                                Array.isArray(i.artists) &&
                                                (a.data = (0, _.wg)(
                                                    ((e) => {
                                                        let t = ((null == e ? void 0 : e.artists) || []).map((e) => ({
                                                            artist: (0, eo.a)({ artist: e.artist }),
                                                            listenTimeSeconds: e.listenTimeSeconds,
                                                            top: (0, tS.w)({ position: e.top.position, progress: e.top.progress }),
                                                        }));
                                                        return (0, _.wg)({ items: t });
                                                    })(i),
                                                ));
                                            break;
                                        case eb.t.PERSONAL_ARTISTS:
                                        case eb.t.NEW_STARS_ARTISTS:
                                        case eb.t.EDITORIAL_ARTISTS:
                                        case eb.t.META_TAG_POPULAR_ARTISTS:
                                        case eb.t.MICRO_GENRE_ARTISTS:
                                        case eb.t.MICRO_GENRE_TOP_ARTISTS:
                                        case eb.t.META_TAG_ARTISTS:
                                        case eb.t.SIMILAR_ARTISTS:
                                            'items' in i && (a.data = tz(i));
                                            break;
                                        case eb.t.COLLECTION_PLAYLISTS_CREATED:
                                            'createdPlaylists' in i &&
                                                (a.data = ((e) => {
                                                    var t;
                                                    let a =
                                                        null == (t = (e || {}).createdPlaylists)
                                                            ? void 0
                                                            : t.map((e) =>
                                                                  (0, eg.b)({ playlist: e.data.playlist, likesCount: e.data.likesCount, trailer: e.data.trailer }),
                                                              );
                                                    return (0, _.wg)({ items: a });
                                                })(i));
                                            break;
                                        case eb.t.COLLECTION_PLAYLISTS_LIKED:
                                            'likedPlaylists' in i &&
                                                (a.data = ((e) => {
                                                    var t;
                                                    let a =
                                                        null == (t = (e || {}).likedPlaylists)
                                                            ? void 0
                                                            : t.map((e) =>
                                                                  (0, eg.b)({
                                                                      playlist: e.data.playlist,
                                                                      generatedPlaylistType: e.data.generatedPlaylistType,
                                                                      likesCount: e.data.likesCount,
                                                                      trailer: e.data.trailer,
                                                                  }),
                                                              );
                                                    return (0, _.wg)({ items: a });
                                                })(i));
                                            break;
                                        case eb.t.OPEN_PLAYLIST:
                                        case eb.t.SMART_OPEN_PLAYLIST:
                                        case eb.t.NON_MUSIC_OPEN_PLAYLIST:
                                            'playlist' in i && (a.data = ae(i, a.id));
                                            break;
                                        case eb.t.COLLECTION_PLAYLIST_WITH_LIKES:
                                            'playlist' in i && (a.data = tv(i));
                                            break;
                                        case eb.t.NEW_RELEASES:
                                        case eb.t.EDITORIAL_NEW_RELEASES:
                                            'newReleases' in i && (a.data = t7(i));
                                            break;
                                        case eb.t.NEW_PLAYLISTS:
                                        case eb.t.EDITORIAL_COMPILATION:
                                        case eb.t.RECOMMENDED_PLAYLISTS:
                                        case eb.t.META_TAG_POPULAR_PLAYLISTS:
                                        case eb.t.META_TAG_NEW_ALBUMS:
                                        case eb.t.META_TAG_PLAYLISTS:
                                        case eb.t.MICRO_GENRE_ALBUMS:
                                        case eb.t.META_TAG_ALBUMS:
                                        case eb.t.ARTIST_PLAYLISTS:
                                        case eb.t.ARTIST_COMPILATIONS:
                                        case eb.t.ARTIST_ALBUMS:
                                        case eb.t.ARTIST_STUDIO_ALBUMS:
                                        case eb.t.ARTIST_SIMILAR_ENTITIES:
                                        case eb.t.COLLECTION_SIMILAR_ENTITIES:
                                            'items' in i && (a.data = ep(i));
                                            break;
                                        case eb.t.RECENTLY_PLAYED:
                                            'items' in i &&
                                                (a.data = ((e) => {
                                                    var t;
                                                    let a =
                                                        null == (t = (e || {}).items)
                                                            ? void 0
                                                            : t.map((e) => {
                                                                  switch (e.type) {
                                                                      case el._.PLAYLIST_ITEM:
                                                                          return ec(e.data.playlist, e.data.trailer);
                                                                      case el._.ALBUM_ITEM:
                                                                          return es(e.data.album, e.data.artists, e.data.trailer);
                                                                      case el._.ARTIST_ITEM:
                                                                          return ed(e.data.artist, e.data.trailer);
                                                                  }
                                                              });
                                                    return (0, _.wg)({ items: a });
                                                })(i));
                                            break;
                                        case eb.t.IN_STYLE:
                                            'inStyleTabs' in i && (a.data = t1(i));
                                            break;
                                        case eb.t.PROMOTIONS:
                                        case eb.t.EDITORIAL_PROMOTIONS:
                                        case eb.t.NON_MUSIC_PROMOTIONS:
                                            'promotions' in i &&
                                                (a.data = ((e) => {
                                                    if (!Array.isArray(null == e ? void 0 : e.promotions)) return (0, _.wg)({});
                                                    let t =
                                                        null == e
                                                            ? void 0
                                                            : e.promotions.map((e) => {
                                                                  var t, a, i;
                                                                  return {
                                                                      featureId: (e = e || {}).featureId,
                                                                      title: e.title,
                                                                      subtitle: e.subtitle,
                                                                      weblink: null != (a = null == (t = e.action) ? void 0 : t.weblink) ? a : '',
                                                                      imageUrl: e.imageUrl,
                                                                      advDisclaimer: null != (i = e.advDisclaimer) ? i : null,
                                                                  };
                                                              });
                                                    return (0, _.wg)({ items: t });
                                                })(i));
                                            break;
                                        case eb.t.REWIND_PLAYLISTS:
                                        case eb.t.PERSONAL_PLAYLISTS:
                                            'items' in i && (a.data = aa(i));
                                            break;
                                        case eb.t.SPECIAL:
                                            'title' in i && (a.data = an(i));
                                            break;
                                        case eb.t.COLLECTION_ALBUMS_PRESAVES:
                                            void 0 !== i.tabs &&
                                                (a.data = ((e) => {
                                                    var t;
                                                    let a =
                                                        null == (t = (e || {}).tabs)
                                                            ? void 0
                                                            : t.map((e) => {
                                                                  let t = null == e ? void 0 : e.items.map(tc);
                                                                  return (0, _.wg)({ id: e.id, title: e.title, type: e.type, items: t, canShowEmptyBlock: !0 });
                                                              });
                                                    return (0, _.wg)({ tabs: a });
                                                })(i));
                                            break;
                                        case eb.t.WAVES:
                                        case eb.t.SETS_BY_WAVES:
                                            'waves' in i && (a.data = ad(i));
                                            break;
                                        case eb.t.WAVES_AGENT:
                                        case eb.t.SETS_BY_WAVES_AGENT:
                                            i && 'object' == typeof i && 'waves' in i && (a.data = ao(i));
                                            break;
                                        case eb.t.MIXES_GRID:
                                        case eb.t.MIXES_MUSIC:
                                            'object' == typeof i && null !== i && 'items' in i && (a.data = t6(i));
                                            break;
                                        case eb.t.MIXES:
                                            'items' in i && (a.data = { items: (0, _.wg)(i.items.map((e) => (0, t8.J)(e.data))) });
                                            break;
                                        case eb.t.NEUROMUSIC:
                                            'items' in i && (a.data = t4(i));
                                            break;
                                        case eb.t.LIKES_AND_HISTORY:
                                            'favorites' in i && (a.data = t2(i));
                                            break;
                                        case eb.t.CONCERTS_TOP:
                                        case eb.t.CONCERTS_PERSONAL:
                                        case eb.t.EDITORIAL_CONCERTS:
                                        case eb.t.VIEWED_CONCERTS:
                                            void 0 !== i.concerts && (a.data = tY(i));
                                            break;
                                        case eb.t.COLLECTION_PLAYLISTS_LIKED_AND_CREATED:
                                            'tabs' in i &&
                                                (a.data = ((e) => {
                                                    var t;
                                                    let a =
                                                        null == (t = (e || {}).tabs)
                                                            ? void 0
                                                            : t.map((e) => {
                                                                  let t =
                                                                      null == e
                                                                          ? void 0
                                                                          : e.items.map((e) =>
                                                                                (0, eg.b)({
                                                                                    playlist: e.data.playlist,
                                                                                    generatedPlaylistType: e.data.generatedPlaylistType,
                                                                                    likesCount: e.data.likesCount,
                                                                                    trailer: e.data.trailer,
                                                                                }),
                                                                            );
                                                                  return (0, _.wg)({ id: e.id, title: e.title, type: e.type, items: t, canShowEmptyBlock: !0 });
                                                              });
                                                    return (0, _.wg)({ tabs: a });
                                                })(i));
                                            break;
                                        case eb.t.EDITORIAL_WAVES:
                                        case eb.t.META_TAG_WAVE:
                                        case eb.t.MICRO_GENRE_WAVE:
                                        case eb.t.MICRO_GENRE_SIMILAR_WAVE:
                                        case eb.t.META_TAG_SIMILAR_WAVE:
                                            'items' in i && (a.data = t0(i));
                                            break;
                                        case eb.t.EDITORIAL_WAVES_AGENT:
                                        case eb.t.META_TAG_WAVE_AGENT:
                                        case eb.t.MICRO_GENRE_WAVE_AGENT:
                                        case eb.t.MICRO_GENRE_SIMILAR_WAVE_AGENT:
                                        case eb.t.META_TAG_SIMILAR_WAVE_AGENT:
                                            i && 'object' == typeof i && 'items' in i && (a.data = tQ(i));
                                            break;
                                        case eb.t.ITEM_LIST:
                                            'items' in i && (a.data = t3(i));
                                            break;
                                        case eb.t.DONATIONS:
                                            void 0 !== i.donations && (a.data = tH(i));
                                            break;
                                        case eb.t.CONTINUE_LISTEN:
                                            'object' == typeof i &&
                                                null !== i &&
                                                'bookshelf' in i &&
                                                (a.data = ((e) => {
                                                    let { bookshelf: t, newEpisodes: a, lastPlayed: i } = e;
                                                    return (0, _.wg)({
                                                        bookshelf: {
                                                            title: t.title,
                                                            covers: (t.covers || []).map(tJ),
                                                            bookCount: t.bookCount,
                                                            podcastCount: t.podcastCount,
                                                        },
                                                        newEpisodes: { title: a.title, covers: (a.covers || []).map(tJ), trackCount: a.trackCount },
                                                        lastPlayed:
                                                            i &&
                                                            ((e) => {
                                                                let {
                                                                    type: t,
                                                                    data: { track: a, album: i, playlist: r, durationTotal: l, durationLeft: n },
                                                                } = e;
                                                                return (0, _.wg)({
                                                                    type: t,
                                                                    data: {
                                                                        album: t === tR._.ALBUM && i ? (0, en.s)({ album: i }) : void 0,
                                                                        playlist: t !== tR._.ALBUM && r ? (0, eg.b)({ playlist: r }) : void 0,
                                                                        track: (0, tl.v)(a),
                                                                        albumDuration: l,
                                                                        albumDurationLeft: n,
                                                                    },
                                                                });
                                                            })(i),
                                                    });
                                                })(i));
                                            break;
                                        case eb.t.SIMPLE_ALBUM_PROMO:
                                        case eb.t.ALBUM_PROMO:
                                            i && 'object' == typeof i && 'albumBanners' in i && (a.data = ai(i));
                                            break;
                                        case eb.t.ARTIST_RECOMMENDATIONS_PROMO:
                                        case eb.t.SIMPLE_ARTIST_RECOMMENDATIONS_PROMO:
                                            i && 'object' == typeof i && 'albumBanners' in i && (a.data = eT(i));
                                            break;
                                        case eb.t.COLLECTION_DOWNLOADED_TRACKS:
                                            i &&
                                                'object' == typeof i &&
                                                'tracks' in i &&
                                                (a.data = ((e) => {
                                                    let t = (null == e ? void 0 : e.tracks) || [],
                                                        a = t.slice(0, 8).map((e) => (0, tl.v)(e));
                                                    return (0, _.wg)({ items: a, rawTracks: t });
                                                })(i));
                                            break;
                                        case eb.t.HISTORY:
                                        case eb.t.SEARCH_HISTORY:
                                            i &&
                                                'object' == typeof i &&
                                                'items' in i &&
                                                Array.isArray(i.items) &&
                                                (a.data = ((e) => {
                                                    let t = e.items
                                                        .map((e) => {
                                                            switch (e.type) {
                                                                case el._.ALBUM_ITEM:
                                                                    return es(e.data.album, e.data.artists, e.data.trailer);
                                                                case el._.ARTIST_ITEM:
                                                                    return ed(e.data.artist, e.data.trailer);
                                                                case el._.TRACK_ITEM:
                                                                    return tE(e);
                                                                case el._.LIKED_PLAYLIST_ITEM:
                                                                    return eu({
                                                                        playlist: e.data.playlist,
                                                                        likesCount: e.data.likesCount,
                                                                        trailer: e.data.trailer,
                                                                        tracksCount: e.data.trackCount,
                                                                    });
                                                                case el._.WAVE_ITEM:
                                                                    let t;
                                                                    return (
                                                                        (t = e),
                                                                        (0, _.wg)({
                                                                            type: el._.WAVE_ITEM,
                                                                            data: {
                                                                                cover: t.data.cover ? (0, tm.p)(t.data.cover) : void 0,
                                                                                vibe: (0, tZ.e)(t.data.wave),
                                                                            },
                                                                        })
                                                                    );
                                                                case el._.WAVE_AGENT_ITEM:
                                                                    return ey(e);
                                                                case el._.NON_MUSIC_ALBUM_ITEM:
                                                                    return tp({
                                                                        album: e.data.album,
                                                                        likesCount: e.data.likesCount,
                                                                        bookmateOptionRequired: e.data.bookmateOptionRequired,
                                                                    });
                                                                case el._.CLIP_ITEM:
                                                                case el._.CLIP:
                                                                    return { type: e.type, data: td({ clip: e.data.clip, artists: e.data.artists }) };
                                                                case el._.QUERY_TO_VIBE_ITEM:
                                                                    let a;
                                                                    return (
                                                                        (a = e), (0, _.wg)({ type: el._.QUERY_TO_VIBE_ITEM, data: (0, em.l)(a.data.wave, a.data.agent) })
                                                                    );
                                                                default:
                                                                    return;
                                                            }
                                                        })
                                                        .filter((e) => e);
                                                    return (0, _.wg)({ items: t });
                                                })(i));
                                            break;
                                        case eb.t.Q2V_SUGGESTIONS:
                                            i &&
                                                'object' == typeof i &&
                                                'suggestionsRequestId' in i &&
                                                'string' == typeof i.suggestionsRequestId &&
                                                'items' in i &&
                                                Array.isArray(i.items) &&
                                                i.items.every((e) => !!(e && 'object' == typeof e && 'query' in e && 'string' == typeof e.query)) &&
                                                (a.data = ar(i));
                                            break;
                                        case eb.t.COLLECTION_KIDS:
                                            i &&
                                                'object' == typeof i &&
                                                'items' in i &&
                                                Array.isArray(i.items) &&
                                                (a.data = ((e) => {
                                                    let t = e.items.map((e) => {
                                                        switch (e.type) {
                                                            case el._.TRACK_ITEM:
                                                                return tE(e);
                                                            case el._.LIKED_PLAYLIST_ITEM:
                                                                return eu({
                                                                    playlist: e.data.playlist,
                                                                    likesCount: e.data.likesCount,
                                                                    trailer: e.data.trailer,
                                                                    tracksCount: e.data.trackCount,
                                                                });
                                                            case el._.NON_MUSIC_ALBUM_ITEM:
                                                                return tp({
                                                                    album: e.data.album,
                                                                    likesCount: e.data.likesCount,
                                                                    bookmateOptionRequired: e.data.bookmateOptionRequired,
                                                                });
                                                        }
                                                    });
                                                    return (0, _.wg)({ items: t });
                                                })(i));
                                            break;
                                        case eb.t.ARTIST_CONCERTS:
                                            i &&
                                                'object' == typeof i &&
                                                'concerts' in i &&
                                                (a.data = ((e) => {
                                                    var t;
                                                    let a =
                                                        null == (t = e.concerts)
                                                            ? void 0
                                                            : t.map((e) => {
                                                                  let { concert: t, minPrice: a } = e;
                                                                  return { ...(0, tr.h)(t, a) };
                                                              });
                                                    return (0, _.wg)({ items: a });
                                                })(i));
                                            break;
                                        case eb.t.ARTIST_POPULAR_TRACKS:
                                            i && 'object' == typeof i && 'tracks' in i && i.tracks && (a.data = (0, _.wg)({ items: i.tracks.map((e) => (0, tl.v)(e)) }));
                                            break;
                                        case eb.t.ARTIST_RELEASE:
                                            i &&
                                                'object' == typeof i &&
                                                'release' in i &&
                                                i.release &&
                                                (a.data = ((e) => {
                                                    let { album: t, artists: a, releaseDate: i, trailer: r } = e.release;
                                                    return { album: (0, en.s)({ album: t, artists: a, trailer: r, releaseDate: i }), releaseDate: i };
                                                })(i));
                                            break;
                                        case eb.t.FAMILIAR_YOU:
                                            i &&
                                                'object' == typeof i &&
                                                (a.data = (0, _.wg)({
                                                    vibeTrackCount: null == (s = i.wave) ? void 0 : s.trackCount,
                                                    collectionTrackCount: null == (o = i.collection) ? void 0 : o.trackCount,
                                                    collectionAlbumCount: null == (d = i.collection) ? void 0 : d.albumCount,
                                                }));
                                            break;
                                        case eb.t.ARTIST_PICK:
                                            i &&
                                                'object' == typeof i &&
                                                'artists' in i &&
                                                i.artists &&
                                                'playlist' in i &&
                                                i.playlist &&
                                                (a.data = ((e) => {
                                                    let t = e.artists.map((e) => (0, eo.a)({ artist: e }));
                                                    return (0, _.wg)({ playlist: (0, eg.b)({ playlist: e.playlist }), artists: t });
                                                })(i));
                                            break;
                                        case eb.t.ARTIST_UPCOMING_RELEASE:
                                            i &&
                                                'object' == typeof i &&
                                                'release' in i &&
                                                i.release &&
                                                'presaved' in i &&
                                                (a.data = ((e) => {
                                                    let { album: t, artists: a, releaseDate: i } = e.release;
                                                    return {
                                                        album: ((e) => {
                                                            var t;
                                                            let { album: a, artists: i, releaseDate: r, isPresave: l } = e,
                                                                { disclaimers: n } = (0, tn.f)(a);
                                                            return (0, _.wg)({
                                                                id: a.id,
                                                                title: a.title,
                                                                type: a.albumType,
                                                                coverUri: null == (t = a.cover) ? void 0 : t.uri,
                                                                isPresave: l,
                                                                releaseDate: r,
                                                                disclaimers: n,
                                                                artists: null == i ? void 0 : i.map((e) => (0, eo.a)({ artist: e })),
                                                            });
                                                        })({ album: t, artists: a, releaseDate: i, isPresave: e.presaved }),
                                                    };
                                                })(i));
                                            break;
                                        case eb.t.CONCERT_PLACE:
                                            'object' == typeof i &&
                                                null !== i &&
                                                'map' in i &&
                                                (a.data = ((e) => {
                                                    let t = e.metroStations ? e.metroStations.map(t$) : null;
                                                    return (0, _.wg)({ place: e.place, city: e.city, address: e.address, metroStations: t, map: e.map });
                                                })(i));
                                            break;
                                        case eb.t.COLLECTION_WAVE_AGENT:
                                            i && 'object' == typeof i && 'wave' in i && 'agent' in i && (a.data = (0, _.wg)({ vibe: (0, em.l)(i.wave, i.agent) }));
                                            break;
                                        case eb.t.COLLECTION_WAVE_ROOMS:
                                            i && Array.isArray(i) && (a.data = (0, _.wg)({ items: i.map(tL) }));
                                            break;
                                        case eb.t.COLLECTION_WAVES:
                                            (0, am.G)(i) &&
                                                Array.isArray(i.tabs) &&
                                                i.tabs.every(
                                                    (e) =>
                                                        !!(0, am.G)(e) &&
                                                        'string' == typeof e.id &&
                                                        'string' == typeof e.title &&
                                                        (e.type === ac.A.ALL || e.type === ac.A.LIKED || e.type === ac.A.ROOMS) &&
                                                        Array.isArray(e.items),
                                                ) &&
                                                (a.data = ((e) => {
                                                    let t = {},
                                                        a = (e) => {
                                                            if (e.type === tK.H.WAVE_ROOM) {
                                                                let a = e.data.room;
                                                                return (t[a.id] || (t[a.id] = tL(a)), { type: e.type, roomId: a.id });
                                                            }
                                                            return { type: e.type, vibe: (0, em.l)(e.data.wave, e.data.agent) };
                                                        },
                                                        i = e.tabs.map((e) => ({ id: e.id, title: e.title, type: e.type, items: e.items.map(a) }));
                                                    return (0, _.wg)({ tabs: i, rooms: t });
                                                })(i));
                                            break;
                                        case eb.t.COLLECTION_ARTISTS_AND_TOP_WITH_ITEMS:
                                            i &&
                                                'object' == typeof i &&
                                                'artists' in i &&
                                                (a.data = ((e) => {
                                                    let t = e.artists.map((e) => {
                                                        let t = e.items
                                                            .map((e) => {
                                                                switch (e.type) {
                                                                    case el._.MENU_ITEM:
                                                                        return ty(e);
                                                                    case el._.WAVE_AGENT_ITEM:
                                                                        return ey(e);
                                                                    default:
                                                                        return;
                                                                }
                                                            })
                                                            .filter((e) => void 0 !== e);
                                                        return { artist: (0, eo.a)({ artist: e.artist }), items: t };
                                                    });
                                                    return (0, _.wg)({ artists: t });
                                                })(i));
                                    }
                                    a.loadingState = eE.RESOLVE;
                                } catch (e) {
                                    (c.error(e),
                                        (0, _._n)(a) &&
                                            ((a.loadingState = eE.REJECT),
                                            e instanceof U.GX && (e.statusCode === U.X1.NOT_FOUND || e.statusCode === U.X1.BAD_REQUEST) && (a.isNotFound = !0)));
                                }
                            }),
                            getTabData: (0, _.L3)(function* (t) {
                                let { landingResource: a, modelActionsLogger: i } = (0, _._$)(e);
                                try {
                                    var r;
                                    e.tabs.loadingState = F.G.PENDING;
                                    let i = yield a.getBlock({ source: t }),
                                        l = as(i) || [];
                                    (null == (r = e.tabs.data) ||
                                        r.forEach((e, t) => {
                                            let a = l.find((t) => t.title === e.meta.title);
                                            e.data = a || l[t];
                                        }),
                                        (e.tabs.loadingState = F.G.RESOLVE));
                                } catch (t) {
                                    (i.error(t), (e.loadingState = F.G.REJECT));
                                }
                            }),
                            async prefetchBlocks(a) {
                                var i, r, l;
                                let n = null != a ? a : 0,
                                    s = [];
                                ((null == (i = e.meta) ? void 0 : i.source) && s.push(t.getTabData(e.meta.source)),
                                    null == (r = e.upperBlocks) ||
                                        r.forEach((e) => {
                                            n > 0 && ((0, tO.v)(e.meta) || tt(e.type)) && (n--, s.push(t.getBlock(e)));
                                        }),
                                    null == (l = e.tabs.data) ||
                                        l.forEach((e) => {
                                            e.blocks.slice(0, n).forEach((e) => {
                                                ((0, tO.v)(e.meta) || tt(e.type)) && s.push(t.getBlock(e));
                                            });
                                        }),
                                    s.length > 0 && (await Promise.allSettled(s)));
                            },
                            getSkeleton: (0, _.L3)(function* (a, i) {
                                let { landingResource: r, modelActionsLogger: l } = (0, _._$)(e);
                                if (e.loadingState !== F.G.PENDING)
                                    try {
                                        e.loadingState = F.G.PENDING;
                                        let l = yield r.getSkeleton(a),
                                            n = tX(null == l ? void 0 : l.blocks);
                                        (n &&
                                            ((e.id = l.id),
                                            (e.title = l.title),
                                            (e.meta = (0, _.wg)(n.meta)),
                                            (e.upperBlocks = (0, _.wg)(n.upperBlocks)),
                                            (e.tabs.data = (0, _.wg)(n.tabs.data)),
                                            yield t.prefetchBlocks(null == i ? void 0 : i.preloadBlocksCount)),
                                            e.loadingState !== F.G.IDLE && (e.loadingState = F.G.RESOLVE));
                                    } catch (t) {
                                        (l.error(t), e.loadingState !== F.G.IDLE && (e.loadingState = F.G.REJECT));
                                    }
                            }),
                            getArtistSkeleton: (0, _.L3)(function* (a, i) {
                                let { artistsResource: r, modelActionsLogger: l } = (0, _._$)(e);
                                if (e.loadingState !== F.G.PENDING)
                                    try {
                                        e.loadingState = F.G.PENDING;
                                        let l = yield r.getSkeleton(a),
                                            n = tX(null == l ? void 0 : l.blocks);
                                        (n &&
                                            ((e.id = l.id),
                                            (e.title = l.title),
                                            (e.meta = (0, _.wg)(n.meta)),
                                            (e.upperBlocks = (0, _.wg)(n.upperBlocks)),
                                            void 0 !== n.tabs && (e.tabs.data = (0, _.wg)(n.tabs.data)),
                                            yield t.prefetchBlocks(null == i ? void 0 : i.preloadBlocksCount)),
                                            e.loadingState !== F.G.IDLE && (e.loadingState = F.G.RESOLVE));
                                    } catch (t) {
                                        (l.error(t), e.loadingState !== F.G.IDLE && (e.loadingState = F.G.REJECT));
                                    }
                            }),
                            getConcertSkeleton: (0, _.L3)(function* (a, i) {
                                let { concertsResource: r, modelActionsLogger: l } = (0, _._$)(e);
                                if (e.loadingState !== F.G.PENDING)
                                    try {
                                        e.loadingState = F.G.PENDING;
                                        let l = yield r.getSkeleton(a),
                                            n = tX(null == l ? void 0 : l.blocks);
                                        (n &&
                                            ((e.id = l.id),
                                            (e.title = l.title),
                                            (e.meta = (0, _.wg)(n.meta)),
                                            (e.upperBlocks = (0, _.wg)(n.upperBlocks)),
                                            void 0 !== n.tabs && (e.tabs.data = (0, _.wg)(n.tabs.data)),
                                            yield t.prefetchBlocks(null == i ? void 0 : i.preloadBlocksCount)),
                                            e.loadingState !== F.G.IDLE && (e.loadingState = F.G.RESOLVE));
                                    } catch (t) {
                                        (l.error(t), e.loadingState !== F.G.IDLE && (e.loadingState = F.G.REJECT));
                                    }
                            }),
                            reset() {
                                ((e.loadingState = F.G.IDLE), (e.meta = null), e.tabs.reset(), (e.upperBlocks = null));
                            },
                        };
                        return t;
                    }),
                rH = _.gK.model('ArtistBrandedButton', { title: _.gK.maybeNull(_.gK.string), url: _.gK.maybeNull(_.gK.string) }),
                rz = _.gK
                    .model('ArtistMeta', {
                        artist: eR.P,
                        donationUrl: _.gK.maybe(_.gK.string),
                        lastMonthListeners: _.gK.maybe(_.gK.number),
                        brandedButton: _.gK.maybe(rH),
                        covers: _.gK.maybeNull(_.gK.array(_.gK.string)),
                    })
                    .views((e) => ({
                        get hasCovers() {
                            var t;
                            return !!(null == (t = e.covers) ? void 0 : t.length);
                        },
                    }));
            var rQ = a(84403);
            let rZ = /^https:\/\/tips\.yandex\.ru\//,
                r0 = (e) => rZ.test(null != e ? e : '');
            var r1 = a(52440),
                r3 = a(87128);
            let r2 = _.gK
                    .compose(
                        _.gK.model('ArtistAlbumsPage', {
                            pagesLoader: (0, r1.I)(eC.J),
                            variant: _.gK.maybeNull(_.gK.enumeration(Object.values(r3.h))),
                            errorStatusCode: _.gK.maybeNull(_.gK.number),
                        }),
                        w.p,
                    )
                    .views((e) => ({
                        get isNotFound() {
                            var t, a;
                            let i = e.pagesLoader.isSomePageResolved && (null != (a = null == (t = e.pagesLoader.items) ? void 0 : t.length) ? a : 0) === 0,
                                r = e.errorStatusCode === U.X1.NOT_FOUND || e.errorStatusCode === U.X1.BAD_REQUEST;
                            return (e.pagesLoader.isInitialRequestRejected && r) || i;
                        },
                        get isShimmerVisible() {
                            return !e.pagesLoader.isSomePageResolved;
                        },
                        get isNeededToLoad() {
                            return e.pagesLoader.isNeedToMakeInitialRequest;
                        },
                        get isRejected() {
                            return e.pagesLoader.isInitialRequestRejected;
                        },
                        get isResolved() {
                            return e.pagesLoader.isSomePageResolved;
                        },
                        get requestsCount() {
                            return e.pagesLoader.requestsCount;
                        },
                        get items() {
                            var i;
                            return null != (i = e.pagesLoader.items) ? i : [];
                        },
                    }))
                    .actions((e) => ({
                        setVariant: (t) => {
                            e.variant = t;
                        },
                        getData: (0, _.L3)(function* (t) {
                            let { artistId: a, page: i = 0, pageSize: r = 20, sort: l, preloadedAlbums: n } = t,
                                { artistsResource: s, modelActionsLogger: o } = (0, _._$)(e);
                            if (e.pagesLoader.isPageNeedToLoad(i))
                                try {
                                    e.pagesLoader.setPageState(i, F.G.PENDING);
                                    let t = { artistId: a, page: i, pageSize: r, sort: { sortBy: null == l ? void 0 : l.sortBy } },
                                        o = n;
                                    if (!o)
                                        switch (e.variant) {
                                            case r3.h.COMPILATIONS:
                                                o = yield s.getAlsoAlbums(t);
                                                break;
                                            case r3.h.DISCOGRAPHY:
                                                o = yield s.getDiscographyAlbums(t);
                                                break;
                                            default:
                                                o = yield s.getDirectAlbums(t);
                                        }
                                    let d = o.albums.map(eQ.p);
                                    e.pagesLoader.setItems(d, { page: i, pager: { page: i, perPage: r, total: o.pager.total } });
                                } catch (t) {
                                    (o.error(t),
                                        t instanceof U.GX &&
                                            (t.statusCode === U.X1.NOT_FOUND || t.statusCode === U.X1.BAD_REQUEST) &&
                                            (e.errorStatusCode = U.X1.NOT_FOUND),
                                        e.pagesLoader.setItems(null, { responseStatus: ir.F.ERROR, page: i }));
                                }
                        }),
                        reset() {
                            ((e.variant = null), (e.errorStatusCode = null), e.pagesLoader.reset());
                        },
                    })),
                r5 = _.gK
                    .model('ArtistClipsPage', { pagesLoader: (0, r1.I)(af), errorStatusCode: _.gK.maybeNull(_.gK.number) })
                    .views((e) => ({
                        get isShimmerVisible() {
                            return !e.pagesLoader.isSomePageResolved;
                        },
                        get isNeededToLoad() {
                            return e.pagesLoader.isNeedToMakeInitialRequest;
                        },
                        get isRejected() {
                            return e.pagesLoader.isInitialRequestRejected;
                        },
                        get isEmpty() {
                            return e.pagesLoader.isEmpty;
                        },
                        get isResolved() {
                            return e.pagesLoader.isSomePageResolved;
                        },
                        get requestsCount() {
                            return e.pagesLoader.requestsCount;
                        },
                        get items() {
                            var t;
                            return null != (t = e.pagesLoader.items) ? t : [];
                        },
                        get isNotFound() {
                            return this.isRejected && e.errorStatusCode === U.X1.NOT_FOUND;
                        },
                    }))
                    .actions((e) => ({
                        getData: (0, _.L3)(function* (t) {
                            let { artistId: a, page: i = 0, pageSize: r = 20, preloadedClips: l } = t,
                                { artistsResource: n, modelActionsLogger: s } = (0, _._$)(e);
                            if (e.pagesLoader.isPageNeedToLoad(i))
                                try {
                                    e.pagesLoader.setPageState(i, F.G.PENDING);
                                    let t = l;
                                    t || (t = yield n.getClips({ artistId: a, page: i, pageSize: r }));
                                    let s = t.items.map((e) => td({ clip: e.data.clip, artists: e.data.artists }));
                                    e.pagesLoader.setItems(s, { page: i, pager: t.pager });
                                } catch (t) {
                                    (s.error(t),
                                        e.pagesLoader.setItems(null, { responseStatus: ir.F.ERROR, page: i }),
                                        t instanceof U.GX &&
                                            (t.statusCode === U.X1.NOT_FOUND || t.statusCode === U.X1.BAD_REQUEST) &&
                                            (e.errorStatusCode = U.X1.NOT_FOUND));
                                }
                        }),
                        reset() {
                            (e.pagesLoader.reset(), (e.errorStatusCode = null));
                        },
                    }));
            var r6 = a(19815),
                r8 = a(58400),
                r4 = a(47255);
            let r7 = (e) => {
                    var t, a, i, r, l;
                    return (0, _.wg)({
                        id: e.id,
                        dataSessionId: null != (r = e['data-session-id']) ? r : '',
                        datetime: e.datetime && (0, r8.A)(e.datetime),
                        city: e.city,
                        place: e.place,
                        contentRating: e.contentRating,
                        price: (0, r4.J)(e.minPrice),
                        cashbackTitle: null == (t = e.cashback) ? void 0 : t.title,
                        cashbackValuePercent: null == (a = e.cashback) ? void 0 : a.valuePercent,
                        title: e.concertTitle,
                        eventKind: null != (l = null == (i = e.eventInfo) ? void 0 : i.type) ? l : r6.Z.UNSPECIFIED,
                    });
                },
                r9 = _.gK
                    .compose(
                        _.gK.model('ArtistConcertsPage', {
                            errorStatusCode: _.gK.maybeNull(_.gK.number),
                            concerts: _.gK.maybeNull(_.gK.array(aE.a)),
                            artistTitle: _.gK.maybeNull(_.gK.string),
                        }),
                        w.p,
                        ee.X,
                    )
                    .views((e) => ({
                        get isLoading() {
                            return e.isNeededToLoad || e.loadingState === F.G.PENDING;
                        },
                        get isNotFound() {
                            var t;
                            let a = e.isResolved && (null == (t = e.concerts) ? void 0 : t.length) === 0,
                                i = e.errorStatusCode === U.X1.NOT_FOUND || e.errorStatusCode === U.X1.BAD_REQUEST;
                            return (e.isRejected && i) || a;
                        },
                    }))
                    .actions((e) => ({
                        getData: (0, _.L3)(function* (t) {
                            let { artistId: a, preloadedConcerts: i } = t,
                                { artistsResource: r, modelActionsLogger: l } = (0, _._$)(e);
                            if (e.loadingState !== F.G.PENDING)
                                try {
                                    e.loadingState = F.G.PENDING;
                                    let t = null == i ? void 0 : i.concerts,
                                        l = null == i ? void 0 : i.artistTitle;
                                    if (!t) {
                                        let i = (0, D.M)(e).concerts.concertsLocationForRequest,
                                            n = yield r.getConcerts({ artistId: a, locations: i });
                                        ((t = n.concerts), (l = n.artistTitle));
                                    }
                                    ((e.concerts = (0, _.wg)(t.map(r7))), (e.artistTitle = null != l ? l : null), (e.loadingState = F.G.RESOLVE));
                                } catch (t) {
                                    (l.error(t),
                                        t instanceof U.GX &&
                                            (t.statusCode === U.X1.NOT_FOUND || t.statusCode === U.X1.BAD_REQUEST) &&
                                            (e.errorStatusCode = U.X1.NOT_FOUND),
                                        e.loadingState !== F.G.IDLE && (e.loadingState = F.G.REJECT));
                                }
                        }),
                        reset() {
                            ((e.loadingState = F.G.IDLE), (e.errorStatusCode = null), (e.artistTitle = null), e.destroyItems([e.concerts]));
                        },
                    }));
            var le = a(40512);
            let lt = (e) => (0, _.wg)({ ...(0, en.s)({ album: e, artists: e.artists }), version: e.version }),
                la = _.gK
                    .compose(
                        _.gK.model('ArtistFamiliarPage', {
                            errorStatusCode: _.gK.maybeNull(_.gK.number),
                            vibeTracks: _.gK.maybeNull(_.gK.array(Z.v)),
                            collectionTracks: _.gK.maybeNull(_.gK.array(Z.v)),
                            collectionAlbums: _.gK.maybeNull(_.gK.array(eC.J)),
                        }),
                        w.p,
                        ee.X,
                    )
                    .views((e) => {
                        let t = {
                            get isLoading() {
                                return e.isNeededToLoad || e.loadingState === F.G.PENDING;
                            },
                            get isNotFound() {
                                let t = e.errorStatusCode === U.X1.NOT_FOUND || e.errorStatusCode === U.X1.BAD_REQUEST;
                                return e.isRejected && t;
                            },
                            get hasCollectionEntities() {
                                var a, i;
                                return (
                                    (e.isResolved && Number(null == (a = e.collectionTracks) ? void 0 : a.length) > 0) ||
                                    Number(null == (i = e.collectionAlbums) ? void 0 : i.length) > 0
                                );
                            },
                            get shouldShowTitleBlocks() {
                                var r, l;
                                if (t.isLoading) return !0;
                                return (
                                    Number(null == (r = e.collectionTracks) ? void 0 : r.length) > 0 && Number(null == (l = e.collectionAlbums) ? void 0 : l.length) > 0
                                );
                            },
                            get hasVibeTracks() {
                                var n;
                                return Number(null == (n = e.vibeTracks) ? void 0 : n.length) > 0;
                            },
                            get collectionEntitiesData() {
                                var s, o;
                                return null != (o = null == (s = e.collectionTracks) ? void 0 : s.map(le.$)) ? o : [];
                            },
                            get vibeEntitiesData() {
                                var d, g;
                                return null != (g = null == (d = e.vibeTracks) ? void 0 : d.map(le.$)) ? g : [];
                            },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        getData: (0, _.L3)(function* (t) {
                            let { artistId: a, preloadedFamiliar: i } = t,
                                { artistsResource: r, modelActionsLogger: l } = (0, _._$)(e);
                            if (e.loadingState !== F.G.PENDING)
                                try {
                                    var n, s, o, d, g, u;
                                    e.loadingState = F.G.PENDING;
                                    let t = i;
                                    (t || (t = yield r.getFamiliarYou({ artistId: a, waveTracksLimit: 100, collectionTracksLimit: 100, collectionAlbumsLimit: 20 })),
                                        (e.vibeTracks = (0, _.wg)(null == (s = t.wave) || null == (n = s.tracks) ? void 0 : n.map((e) => (0, tl.v)(e)))),
                                        (e.collectionTracks = (0, _.wg)(null == (d = t.collection) || null == (o = d.tracks) ? void 0 : o.map((e) => (0, tl.v)(e)))),
                                        (e.collectionAlbums = (0, _.wg)(null == (u = t.collection) || null == (g = u.albums) ? void 0 : g.map(lt))),
                                        (e.loadingState = F.G.RESOLVE));
                                } catch (t) {
                                    (l.error(t),
                                        t instanceof U.GX &&
                                            (t.statusCode === U.X1.NOT_FOUND || t.statusCode === U.X1.BAD_REQUEST) &&
                                            (e.errorStatusCode = U.X1.NOT_FOUND),
                                        e.loadingState !== F.G.IDLE && (e.loadingState = F.G.REJECT));
                                }
                        }),
                        reset() {
                            ((e.loadingState = F.G.IDLE), (e.errorStatusCode = null), e.destroyItems([e.vibeTracks, e.collectionTracks]));
                        },
                    }));
            var li = a(98138);
            let lr = _.gK
                    .compose(
                        _.gK.model('ArtistSimilarArtistsPage', { errorStatusCode: _.gK.maybeNull(_.gK.number), similarArtists: _.gK.maybeNull(_.gK.array(eR.P)) }),
                        w.p,
                        ee.X,
                    )
                    .views((e) => ({
                        get isLoading() {
                            return e.isNeededToLoad || e.loadingState === F.G.PENDING;
                        },
                        get isNotFound() {
                            var t;
                            let a = e.isResolved && (null == (t = e.similarArtists) ? void 0 : t.length) === 0,
                                i = e.errorStatusCode === U.X1.NOT_FOUND || e.errorStatusCode === U.X1.BAD_REQUEST;
                            return (e.isRejected && i) || a;
                        },
                    }))
                    .actions((e) => ({
                        getData: (0, _.L3)(function* (t) {
                            let { artistId: a, preloadedSimilarArtists: i } = t,
                                { artistsResource: r, modelActionsLogger: l } = (0, _._$)(e);
                            try {
                                e.loadingState = F.G.PENDING;
                                let t = i;
                                (t || (t = yield r.getSimilarArtists({ artistId: a })),
                                    (e.similarArtists = (0, _.wg)(t.similarArtists.map(li.d))),
                                    e.loadingState !== F.G.IDLE && (e.loadingState = F.G.RESOLVE));
                            } catch (t) {
                                (l.error(t),
                                    t instanceof U.GX && (t.statusCode === U.X1.NOT_FOUND || t.statusCode === U.X1.BAD_REQUEST) && (e.errorStatusCode = U.X1.NOT_FOUND),
                                    e.loadingState !== F.G.IDLE && (e.loadingState = F.G.REJECT));
                            }
                        }),
                        reset() {
                            ((e.loadingState = F.G.IDLE), (e.errorStatusCode = null), e.destroyItems([e.similarArtists]));
                        },
                    })),
                ll = _.gK.model('CommonSubPage', { artistName: _.gK.maybeNull(_.gK.string) }),
                ln = _.gK
                    .compose(
                        _.gK.model('FullTracksList', {
                            errorStatusCode: _.gK.maybeNull(_.gK.number),
                            ids: _.gK.maybeNull(_.gK.array(_.gK.string)),
                            tracks: _.gK.optional(_.gK.map(Z.v), {}),
                        }),
                        w.p,
                        ee.X,
                    )
                    .views((e) => ({
                        getTrackByIndex(t) {
                            if (!e.ids || !e.ids.length) return null;
                            let a = e.ids[t];
                            return (a && e.tracks.get(a)) || null;
                        },
                        get isNotFound() {
                            var t;
                            let a = e.isResolved && (null == (t = e.ids) ? void 0 : t.length) === 0,
                                i = e.errorStatusCode === U.X1.NOT_FOUND || e.errorStatusCode === U.X1.BAD_REQUEST;
                            return (e.isRejected && i) || a;
                        },
                    }))
                    .actions((e) => ({
                        getTracksIds: (0, _.L3)(function* (t) {
                            let { artistId: a } = t,
                                { artistsResource: i, modelActionsLogger: r } = (0, _._$)(e);
                            try {
                                e.loadingState = F.G.PENDING;
                                let t = yield i.getArtistTrackIds({ artistId: a }),
                                    { sonataState: r } = (0, D.M)(e);
                                (r.setUnloadedEntitiesData(t.map((e) => (0, ez.l)(e))),
                                    (e.ids = (0, _.wg)(t)),
                                    e.loadingState !== F.G.IDLE && (e.loadingState = F.G.RESOLVE));
                            } catch (t) {
                                (r.error(t),
                                    t instanceof U.GX && (t.statusCode === U.X1.NOT_FOUND || t.statusCode === U.X1.BAD_REQUEST) && (e.errorStatusCode = U.X1.NOT_FOUND),
                                    e.loadingState !== F.G.IDLE && (e.loadingState = F.G.REJECT));
                            }
                        }),
                        getTracks: (0, _.L3)(function* (t) {
                            let { trackIds: a } = t,
                                { tracksResource: i, modelActionsLogger: r } = (0, _._$)(e);
                            try {
                                let t = yield i.getTracksMeta({ trackIds: a, withProgress: !0 });
                                e.tracks.merge(t.reduce((e, t) => ((e[t.id] = (0, tl.v)(t)), e), {}));
                            } catch (e) {
                                r.error(e);
                            }
                        }),
                        reset() {
                            let { sonataState: t } = (0, D.M)(e);
                            (t.resetUnloadedEntitiesData(), (e.loadingState = F.G.IDLE), e.destroyItems([e.tracks, e.ids]));
                        },
                    }));
            var ls = a(55025);
            let lo = _.gK.compose(_.gK.model('OfflineArtistTrackIds', { ids: _.gK.maybeNull(_.gK.array(_.gK.string)) }), ee.X, w.p).actions((e) => ({
                    getIds: (0, _.L3)(function* (t, a) {
                        let { modelActionsLogger: i } = (0, _._$)(e);
                        if (e.loadingState !== F.G.PENDING)
                            try {
                                e.loadingState = F.G.PENDING;
                                let i = yield a.getArtistTrackIdsByUser(t);
                                ((e.ids = (0, _.wg)(i)), e.loadingState !== F.G.IDLE && (e.loadingState = F.G.RESOLVE));
                            } catch (t) {
                                (i.error(t), e.loadingState !== F.G.IDLE && (e.loadingState = F.G.REJECT));
                            }
                    }),
                    reset() {
                        ((e.loadingState = F.G.IDLE), e.destroyItems([e.ids]));
                    },
                })),
                ld = _.gK
                    .compose(_.gK.model('OfflineArtist', { id: _.gK.maybeNull(_.gK.string), meta: _.gK.maybeNull(rz), trackIds: lo, downloadedTracks: ls.b }), ee.X, w.p)
                    .views((e) => ({
                        get isNotFound() {
                            return e.isResolved && !e.meta;
                        },
                    }))
                    .actions((e) => ({
                        setTracksCount: (t) => {
                            var a;
                            (null == (a = e.meta) ? void 0 : a.artist.counts) && (e.meta.artist.counts.tracks = t);
                        },
                        getArtist: (0, _.L3)(function* (t, a) {
                            let { modelActionsLogger: i } = (0, _._$)(e);
                            if (e.loadingState !== F.G.PENDING) {
                                e.id = t;
                                try {
                                    e.loadingState = F.G.PENDING;
                                    let i = yield a.getArtist(t);
                                    (i && (e.meta = (0, _.wg)({ artist: (0, li.d)(i) })), e.loadingState !== F.G.IDLE && (e.loadingState = F.G.RESOLVE));
                                } catch (t) {
                                    (i.error(t), e.loadingState !== F.G.IDLE && (e.loadingState = F.G.REJECT));
                                }
                            }
                        }),
                        reset() {
                            ((e.id = null), (e.loadingState = F.G.IDLE), e.trackIds.reset(), e.downloadedTracks.reset(), e.destroyItems([e.meta]));
                        },
                    })),
                lg = _.gK
                    .compose(
                        _.gK.model('ArtistPage', {
                            id: _.gK.maybeNull(_.gK.string),
                            meta: _.gK.maybeNull(rz),
                            landing: rq,
                            deprecationTargetArtistId: _.gK.maybeNull(_.gK.number),
                            albumsSubpage: r2,
                            fullTracksListSubpage: ln,
                            concertsSubpage: r9,
                            similarArtistsSubPage: lr,
                            clipsSubpage: r5,
                            familiarSubpage: la,
                            commonSubPage: ll,
                            offlineArtist: ld,
                            infoLoadingState: ee.X,
                            infoErrorStatusCode: _.gK.maybeNull(_.gK.number),
                        }),
                        w.p,
                    )
                    .views((e) => {
                        let t = {
                            get isInfoNotFound() {
                                return e.infoLoadingState.isRejected && (e.infoErrorStatusCode === U.X1.NOT_FOUND || e.infoErrorStatusCode === U.X1.BAD_REQUEST);
                            },
                            get isInfoSomethingWentWrong() {
                                return e.infoLoadingState.isRejected && !t.isInfoNotFound;
                            },
                            get selfLink() {
                                if (!e.id) return '';
                                let { href: t } = (0, ek.u)('/artist/:artistId', { params: { artistId: e.id } });
                                return t;
                            },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        getInfo: (0, _.L3)(function* (t) {
                            let { artistId: a, preloadedArtist: i } = t,
                                { artistsResource: r, modelActionsLogger: l } = (0, _._$)(e);
                            if (((e.id = a), e.infoLoadingState.loadingState !== F.G.PENDING))
                                try {
                                    var n, s, o, d, g, u, c;
                                    let t;
                                    e.infoLoadingState.loadingState = F.G.PENDING;
                                    let l = i;
                                    l || (l = yield r.getInfo({ artistId: a }));
                                    let { artist: m, deprecation: y } = l;
                                    if (null == y ? void 0 : y.targetArtistId) {
                                        e.deprecationTargetArtistId = y.targetArtistId;
                                        return;
                                    }
                                    ((e.commonSubPage.artistName = m.name),
                                        (e.meta = (0, _.wg)(
                                            ((o = l),
                                            (0, _.wg)({
                                                artist: (0, eo.a)({ artist: o.artist, trailer: o.trailer, isComposer: o.artistType === rQ.o.COMPOSER }),
                                                donationUrl: r0(null == (d = o.donation) ? void 0 : d.tipUrl) ? (null == (g = o.donation) ? void 0 : g.tipUrl) : void 0,
                                                lastMonthListeners: null == (u = o.stats) ? void 0 : u.lastMonthListeners,
                                                brandedButton: o.brandedButton ? ((t = o.brandedButton), (0, _.wg)({ title: t.title, url: t.action.weblink })) : void 0,
                                                covers:
                                                    null == (c = o.covers)
                                                        ? void 0
                                                        : c.map((e) => {
                                                              var t;
                                                              return null != (t = e.uri) ? t : '';
                                                          }),
                                            })),
                                        )),
                                        (null == (s = e.meta) || null == (n = s.artist) ? void 0 : n.resolveAllDisclaimers) &&
                                            (yield e.meta.artist.resolveAllDisclaimers()),
                                        e.infoLoadingState.loadingState !== F.G.IDLE && (e.infoLoadingState.loadingState = F.G.RESOLVE));
                                } catch (t) {
                                    (l.error(t),
                                        t instanceof U.GX && (e.infoErrorStatusCode = t.statusCode),
                                        e.infoLoadingState.loadingState !== F.G.IDLE && (e.infoLoadingState.loadingState = F.G.REJECT));
                                }
                        }),
                        reset() {
                            ((e.infoLoadingState.loadingState = F.G.IDLE),
                                e.landing.reset(),
                                (e.id = null),
                                (e.deprecationTargetArtistId = null),
                                e.destroyItems([e.meta]));
                        },
                    }));
            var lu = a(31661),
                lc = a(15656);
            let lm = (e) => !!e && (e === lc.x.ASC || e === lc.x.DESC);
            var ly = a(7364);
            let lp = _.gK.compose(_.gK.model('UpcomingAlbums', { items: _.gK.maybeNull(_.gK.array(tP)) }), w.p, ee.X).actions((e) => ({
                    reset() {
                        ((e.loadingState = F.G.IDLE), e.destroyItems([e.items]));
                    },
                })),
                lE = _.gK
                    .compose(_.gK.model('CollectionAlbumsPage', { sort: _.gK.maybeNull(ly.w), pagesLoader: (0, r1.I)(eC.J), upcomingAlbums: lp }), w.p)
                    .views((e) => {
                        let t = {
                            get isAlbumsLoading() {
                                return !e.pagesLoader.isSomePageResolved;
                            },
                            get isLoading() {
                                return t.isAlbumsLoading || e.upcomingAlbums.isNeededToLoad || e.upcomingAlbums.isLoading;
                            },
                            get isUpcomingAlbumsLoading() {
                                return e.upcomingAlbums.isNeededToLoad || e.upcomingAlbums.isLoading;
                            },
                            get isUpcomingAlbumsEmpty() {
                                return !t.isUpcomingAlbumsLoading && (!e.upcomingAlbums.items || 0 === e.upcomingAlbums.items.length);
                            },
                            get isAlbumsEmpty() {
                                return e.pagesLoader.isEmpty;
                            },
                            get isNeededToLoad() {
                                return e.pagesLoader.isNeedToMakeInitialRequest;
                            },
                            get isResolved() {
                                return e.pagesLoader.isSomePageResolved;
                            },
                            get items() {
                                var a;
                                return null != (a = e.pagesLoader.items) ? a : [];
                            },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        getData: (0, _.L3)(function* (t) {
                            let { userId: a, page: i = 0, pageSize: r = 20, sortBy: l, sortOrder: n, metaType: s } = t,
                                { usersResource: o, modelActionsLogger: d } = (0, _._$)(e);
                            if (e.pagesLoader.isPageNeedToLoad(i)) {
                                ((e.sort = null), (0, lu.W)(l) && lm(n) && (e.sort = (0, _.wg)({ sortBy: l, sortOrder: n })));
                                try {
                                    var g, u;
                                    e.pagesLoader.setPageState(i, F.G.PENDING);
                                    let t = yield o.getLikedAlbums({ userId: a, page: i, pageSize: r, sortBy: l, sortOrder: n, metaType: s }),
                                        d =
                                            null !=
                                            (u =
                                                null == (g = t.albums)
                                                    ? void 0
                                                    : g.map((e) => {
                                                          let { album: t } = e;
                                                          return (0, eQ.p)(t);
                                                      }))
                                                ? u
                                                : [];
                                    e.pagesLoader.setItems(d, { page: i, pager: { page: i, perPage: r, total: t.pager.total } });
                                } catch (t) {
                                    (d.error(t), e.pagesLoader.setItems(null, { responseStatus: ir.F.ERROR, page: i }));
                                }
                            }
                        }),
                        getPresaves: (0, _.L3)(function* (t) {
                            let { userId: a } = t,
                                { usersResource: i, modelActionsLogger: r } = (0, _._$)(e);
                            if (!e.upcomingAlbums.isLoading)
                                try {
                                    var l;
                                    e.upcomingAlbums.loadingState = F.G.PENDING;
                                    let t = yield i.getPresaves({ userId: a, includeReleased: !1, includeUpcoming: !0 });
                                    ((e.upcomingAlbums.items = (0, _.wg)(null == (l = t.upcomingAlbums) ? void 0 : l.map(tu))),
                                        e.upcomingAlbumsLoadingState !== F.G.IDLE && (e.upcomingAlbums.loadingState = F.G.RESOLVE));
                                } catch (t) {
                                    (r.error(t), e.upcomingAlbums.isNeededToLoad || (e.upcomingAlbums.loadingState = F.G.REJECT));
                                }
                        }),
                        reset() {
                            (e.pagesLoader.reset(), e.upcomingAlbums.reset(), e.destroyItems([e.sort]));
                        },
                    })),
                lb = _.gK.compose(_.gK.model('TopArtists', { items: _.gK.array(a9) }), w.p, ee.X).actions((e) => ({
                    reset() {
                        ((e.loadingState = F.G.IDLE), e.destroyItems([e.items]));
                    },
                })),
                lv = _.gK
                    .compose(_.gK.model('CollectionArtistsPage', { sort: _.gK.maybeNull(ly.w), pagesLoader: (0, r1.I)(eR.P), topArtists: lb }), w.p)
                    .views((e) => ({
                        get isLoadingTopArtists() {
                            return e.topArtists.isNeededToLoad || e.topArtists.isLoading;
                        },
                        get isShimmerVisible() {
                            return !e.pagesLoader.isSomePageResolved;
                        },
                        get isNeededToLoad() {
                            return e.pagesLoader.isNeedToMakeInitialRequest;
                        },
                        get isRejected() {
                            return e.pagesLoader.isInitialRequestRejected;
                        },
                        get isResolved() {
                            return e.pagesLoader.isSomePageResolved;
                        },
                        get requestsCount() {
                            return e.pagesLoader.requestsCount;
                        },
                        get items() {
                            var t;
                            return null != (t = e.pagesLoader.items) ? t : [];
                        },
                    }))
                    .actions((e) => ({
                        getDataTopArtists: (0, _.L3)(function* () {
                            let { personalResource: t, modelActionsLogger: a } = (0, _._$)(e);
                            try {
                                var i, r;
                                e.topArtists.loadingState = F.G.PENDING;
                                let a = yield t.getTopArtists();
                                ((e.topArtists.items = (0, _.wg)(
                                    null !=
                                        (r =
                                            null == (i = a.artists)
                                                ? void 0
                                                : i.map((e) =>
                                                      ((e) => {
                                                          let t = (0, eo.a)({ artist: e.artist }),
                                                              a = (0, tS.w)(e.top);
                                                          return (0, _.wg)({ artist: t, listenTimeSeconds: e.listenTimeSeconds, top: a });
                                                      })(e),
                                                  ))
                                        ? r
                                        : [],
                                )),
                                    (e.topArtists.loadingState = F.G.RESOLVE));
                            } catch (t) {
                                (a.error(t), (e.topArtists.loadingState = F.G.REJECT));
                            }
                        }),
                        getData: (0, _.L3)(function* (t) {
                            let { userId: a, page: i = 0, pageSize: r = 20, sortBy: l, sortOrder: n } = t,
                                { usersResource: s, modelActionsLogger: o } = (0, _._$)(e);
                            if (e.pagesLoader.isPageNeedToLoad(i)) {
                                ((e.sort = null), (0, lu.W)(l) && lm(n) && (e.sort = (0, _.wg)({ sortBy: l, sortOrder: n })));
                                try {
                                    var d, g;
                                    e.pagesLoader.setPageState(i, F.G.PENDING);
                                    let t = yield s.getLikedArtists({ userId: a, page: i, pageSize: r, sortBy: l, sortOrder: n }),
                                        o = null != (g = null == (d = t.artists) ? void 0 : d.map(li.d)) ? g : [];
                                    e.pagesLoader.setItems(o, { page: i, pager: { page: i, perPage: r, total: t.pager.total } });
                                } catch (t) {
                                    (o.error(t), e.pagesLoader.setItems(null, { responseStatus: ir.F.ERROR, page: i }));
                                }
                            }
                        }),
                        reset() {
                            (e.topArtists.reset(), e.pagesLoader.reset(), (e.sort = null));
                        },
                    })),
                lS = (e) => {
                    var t;
                    let a = null == (t = e.artists) ? void 0 : t.map((e) => (0, eo.a)({ artist: e }));
                    return (0, _.wg)({
                        ...((e) => {
                            let { available: t, disclaimers: a } = (0, tn.f)(e);
                            return (0, _.wg)({
                                clipId: e.clipId,
                                title: e.title,
                                thumbnail: e.thumbnail,
                                duration: e.duration,
                                previewUrl: e.previewUrl,
                                isAvailable: t,
                                version: e.version,
                                disclaimers: a,
                            });
                        })(e),
                        artists: a,
                    });
                };
            var lK = a(66911),
                lI = a(23341);
            let lL = _.gK
                    .compose(_.gK.model('CollectionClipsPageWillLike', { clips: _.gK.maybeNull(_.gK.array(af)) }), ee.X, w.p)
                    .views((e) => ({
                        get isShimmerVisible() {
                            return e.isLoading || e.isRejected;
                        },
                        get isEmpty() {
                            var t;
                            return e.isResolved && (!e.clips || (null == (t = e.clips) ? void 0 : t.length) === 0);
                        },
                    }))
                    .actions((e) => ({
                        getData: (0, _.L3)(function* () {
                            let { clipsResource: t, modelActionsLogger: a } = (0, _._$)(e);
                            try {
                                e.loadingState = F.G.PENDING;
                                let a = yield t.getClipsWillLike({ page: 0, pageSize: 50 });
                                (a.clips && (e.clips = (0, _.wg)(a.clips.map(lS))), e.loadingState !== F.G.IDLE && (e.loadingState = F.G.RESOLVE));
                            } catch (t) {
                                (a.error(t), e.loadingState !== F.G.IDLE && (e.loadingState = F.G.REJECT));
                            }
                        }),
                        reset() {
                            ((e.loadingState = F.G.IDLE), e.destroyItems([e.clips]));
                        },
                    })),
                lT = _.gK
                    .compose(
                        _.gK.model('CollectionClipsPage', {
                            items: _.gK.array(_.gK.maybeNull(af)),
                            pager: _.gK.maybeNull(lI.j),
                            alreadyRequestedPages: _.gK.map(_.gK.number),
                            pendingPages: _.gK.map(_.gK.number),
                            clipsWillLike: lL,
                        }),
                        ee.X,
                        w.p,
                    )
                    .views((e) => ({
                        get isEmpty() {
                            return e.isResolved && (!e.pager || 0 === e.pager.total);
                        },
                        get isLoaded() {
                            return e.isResolved || e.isRejected;
                        },
                    }))
                    .actions((e) => ({
                        setInitialShimmer() {
                            e.items = (0, _.wg)(Array.from({ length: 20 }, () => null));
                        },
                        getData: (0, _.L3)(function* (t) {
                            var a;
                            let { userId: i, page: r = 0, pageSize: l = 20 } = t,
                                { usersResource: n, modelActionsLogger: s } = (0, _._$)(e);
                            if (
                                !(
                                    (e.pager && e.items.length >= (null == (a = e.pager) ? void 0 : a.total)) ||
                                    (e.loadingState === F.G.PENDING && e.pendingPages.has(r.toString()))
                                ) &&
                                !e.alreadyRequestedPages.has(r.toString())
                            ) {
                                'number' == typeof r && e.alreadyRequestedPages.set(r.toString(), r);
                                try {
                                    ((e.loadingState = F.G.PENDING), e.pendingPages.set(r.toString(), r));
                                    let t = yield n.getLikedClips({ userId: i, page: r, pageSize: l }),
                                        a = { page: r, perPage: l, total: t.pager.total };
                                    if (t.clips) {
                                        let i = t.clips.map(lS);
                                        ((0, lK.I)({ items: e.items, mappedRawItems: i, page: r, pageSize: l }), (e.items = (0, _.wg)(e.items.slice(0, a.total))));
                                    }
                                    ((e.pager = (0, _.wg)(a)), (e.loadingState = F.G.RESOLVE));
                                } catch (t) {
                                    (s.error(t), (e.loadingState = F.G.REJECT));
                                } finally {
                                    e.pendingPages.delete(r.toString());
                                }
                            }
                        }),
                        reset() {
                            ((e.loadingState = F.G.IDLE),
                                (e.pager = null),
                                e.alreadyRequestedPages.clear(),
                                e.pendingPages.clear(),
                                e.destroyItems([e.items]),
                                e.clipsWillLike.reset());
                        },
                    })),
                lh = _.gK
                    .compose(
                        _.gK.model('CollectionNonMusicPage', {
                            items: _.gK.array(_.gK.maybeNull(eC.J)),
                            pager: _.gK.maybeNull(lI.j),
                            alreadyRequestedPages: _.gK.map(_.gK.number),
                            pendingPages: _.gK.map(_.gK.number),
                            requestsCount: _.gK.maybeNull(_.gK.number),
                        }),
                        ee.X,
                    )
                    .views((e) => ({
                        get isLoading() {
                            return e.isNeededToLoad || (e.loadingState === F.G.PENDING && 0 === e.items.length);
                        },
                        get isEmptyItems() {
                            var t;
                            return !!(!(null == (t = e.items) ? void 0 : t.length) && e.requestsCount);
                        },
                    }))
                    .actions((e) => ({
                        getData: (0, _.L3)(function* (t) {
                            let { userId: a, page: i = 0, pageSize: r = 20, metaType: l } = t,
                                { usersResource: n, modelActionsLogger: s } = (0, _._$)(e);
                            if (!(e.loadingState === F.G.PENDING && e.pendingPages.has(''.concat(i))) && !e.alreadyRequestedPages.has(''.concat(i))) {
                                'number' == typeof i && e.alreadyRequestedPages.set(''.concat(i), i);
                                try {
                                    var o, d, g;
                                    ((e.loadingState = F.G.PENDING), e.pendingPages.set(''.concat(i), i));
                                    let t = yield n.getLikedAlbums({ userId: a, page: i, pageSize: r, metaType: l }),
                                        s = { page: i, perPage: r, total: t.pager.total };
                                    0 === e.items.length && (e.items = (0, _.wg)(Array.from({ length: s.total }, () => null)));
                                    let u =
                                        null !=
                                        (d =
                                            null == (o = t.albums)
                                                ? void 0
                                                : o.map((e) => {
                                                      let { album: t } = e;
                                                      return (0, eQ.p)(t);
                                                  }))
                                            ? d
                                            : [];
                                    ((0, lK.I)({ items: e.items, mappedRawItems: u, page: i, pageSize: r }),
                                        (e.pager = (0, _.wg)(s)),
                                        (e.requestsCount = (null != (g = e.requestsCount) ? g : 0) + 1),
                                        e.loadingState !== F.G.IDLE && (e.loadingState = F.G.RESOLVE));
                                } catch (t) {
                                    (s.error(t), (e.loadingState = F.G.REJECT));
                                } finally {
                                    e.pendingPages.delete(''.concat(i));
                                }
                            }
                        }),
                        reset() {
                            ((e.loadingState = F.G.IDLE),
                                (e.items = (0, _.wg)([])),
                                e.pendingPages.clear(),
                                (e.pager = null),
                                e.alreadyRequestedPages.clear(),
                                (e.requestsCount = 0));
                        },
                    }));
            var lN = a(2215);
            let lA = (e) => ({ id: e.id, albumId: e.albumId, timestamp: e.timestamp }),
                lf = (e) => {
                    var t, a;
                    return (0, _.wg)({ ...(0, tb.j)(e), tracks: null != (a = null == e || null == (t = e.tracks) ? void 0 : t.map(lA)) ? a : [] });
                };
            var lC = a(83176),
                lR = a(81423);
            let lk = (e, t, a, i) => {
                    if (a === i) return;
                    let r = e.findIndex((e) => (null == e ? void 0 : e.key) === a),
                        l = e.findIndex((e) => (null == e ? void 0 : e.key) === i);
                    if (r < 0 || l < 0 || r >= t.length || l >= t.length) return;
                    let n = e[r],
                        s = e[l];
                    if (n && s && !n.isFavouritePlaylist && !s.isFavouritePlaylist && !n.generatedPlaylistType && !s.generatedPlaylistType) return { from: r, to: l };
                },
                lP = (e, t) => e.length === t.length && e.every((e, a) => e === t[a]),
                l_ = _.gK
                    .model('CollectionPlaylistsCreatedPage', {
                        sort: _.gK.maybeNull(ly.w),
                        pagesLoader: (0, r1.I)(lC.Z),
                        kinds: _.gK.array(_.gK.number),
                        isPlaylistMovePending: _.gK.optional(_.gK.boolean, !1),
                    })
                    .volatile(() => ({ loadGeneration: 0, pageRequests: new Map() }))
                    .views((e) => ({
                        get isShimmerVisible() {
                            return !e.pagesLoader.isSomePageResolved;
                        },
                        get isNeededToLoad() {
                            return !e.isPlaylistMovePending && e.pagesLoader.isNeedToMakeInitialRequest;
                        },
                        get isRejected() {
                            return e.pagesLoader.isInitialRequestRejected;
                        },
                        get isResolved() {
                            return e.pagesLoader.isSomePageResolved;
                        },
                        get requestsCount() {
                            return e.pagesLoader.requestsCount;
                        },
                        get isEmpty() {
                            return e.pagesLoader.isEmpty;
                        },
                        get isDragAndDropEnabled() {
                            let { experiments: t } = (0, D.M)(e);
                            return t.checkExperiment(O.z.WebNextCollectionPlaylistsDnD, 'on');
                        },
                        get items() {
                            var t;
                            return null != (t = e.pagesLoader.items) ? t : [];
                        },
                    }))
                    .actions((e) => {
                        let t = (0, _.L3)(function* (t, a) {
                                let { userId: i, page: r = 0, pageSize: l = lR.d, withLikesCount: n } = t,
                                    { usersResource: s, modelActionsLogger: o } = (0, _._$)(e);
                                try {
                                    if ((e.pagesLoader.setPageState(r, F.G.PENDING), 0 === e.kinds.length)) {
                                        let t = yield* (0, _.HN)(s.getPlaylistsKinds({ userId: i, addPlaylistWithLikes: !0 }));
                                        if (a !== e.loadGeneration) return;
                                        e.kinds = (0, _.wg)(t);
                                    }
                                    let t = r * l,
                                        o = e.kinds.slice(t, t + l),
                                        d = yield* (0, _.HN)(s.getPlaylistsByKinds({ userId: i, kinds: o, withLikesCount: n, withTracks: !0 }));
                                    if (a !== e.loadGeneration) return;
                                    let g = d.map(lf);
                                    e.pagesLoader.setItems(g, { page: r, pager: { page: r, perPage: l, total: e.kinds.length } });
                                } catch (t) {
                                    if (a !== e.loadGeneration) return;
                                    (o.error(t), e.pagesLoader.setItems(null, { responseStatus: ir.F.ERROR, page: r }));
                                }
                            }),
                            a = (a) => {
                                let { page: i = 0, pageSize: r = lR.d, ...l } = a,
                                    n = e.pageRequests.get(i);
                                if (n) return n;
                                if (!e.pagesLoader.isPageNeedToLoad(i) || (e.isPlaylistMovePending && 0 === e.kinds.length)) return Promise.resolve();
                                let s = t({ ...l, page: i, pageSize: r }, e.loadGeneration);
                                e.pageRequests.set(i, s);
                                let o = () => {
                                    e.pageRequests.get(i) === s && e.pageRequests.delete(i);
                                };
                                return (s.then(o, o), s);
                            },
                            i = (t, a) => {
                                if (!e.pagesLoader.items) return [];
                                let i = new Set(),
                                    r = Math.min(t, a),
                                    l = Math.max(t, a);
                                for (let t = r; t <= l; t++) e.pagesLoader.items[t] || i.add(Math.floor(t / lR.d));
                                return Array.from(i);
                            },
                            r = (0, _.L3)(function* (t, i, r) {
                                for (let n = 0; n < i.length; n += 2) {
                                    let s = i.slice(n, n + 2);
                                    for (let t of s) {
                                        var l;
                                        (null == (l = e.pagesLoader.pageStates) ? void 0 : l[t]) === F.G.REJECT && e.pagesLoader.setPageState(t, F.G.IDLE);
                                    }
                                    if ((yield Promise.all(s.map((e) => a({ userId: t, page: e, pageSize: lR.d }))), r !== e.loadGeneration || !e.isDragAndDropEnabled))
                                        return;
                                }
                                return !0;
                            }),
                            l = () => {
                                ((e.loadGeneration += 1), e.pageRequests.clear(), (e.sort = null), e.pagesLoader.reset(), (e.kinds = (0, _.wg)([])));
                            },
                            n = (0, _.L3)(function* (t, a, i, r, n, s) {
                                let { usersResource: o, modelActionsLogger: d } = (0, _._$)(e);
                                try {
                                    let d = yield* (0, _.HN)(o.getPlaylistsKinds({ userId: t, addPlaylistWithLikes: !0 }));
                                    if (s !== e.loadGeneration) return;
                                    if (!e.isDragAndDropEnabled) return void l();
                                    let g = ((e) => {
                                        let { currentKinds: t, optimisticKinds: a, originalKinds: i, serverKinds: r } = e,
                                            l = lP(t, a);
                                        return l && lP(r, a) ? 'keep-optimistic' : l && lP(r, i) ? 'rollback' : 'reset';
                                    })({ currentKinds: e.kinds, optimisticKinds: n, originalKinds: r, serverKinds: d });
                                    if ('keep-optimistic' === g) return ir.F.OK;
                                    if (
                                        'rollback' === g &&
                                        ((t, a, i) => {
                                            if (!e.pagesLoader.items) return !1;
                                            let r = e.pagesLoader.items.findIndex((e) => (null == e ? void 0 : e.key) === t),
                                                l = e.pagesLoader.items[r],
                                                n = e.kinds[r];
                                            if (r < 0 || !l || 'number' != typeof n || i[a] !== n) return !1;
                                            let s = (0, _.Yo)(l);
                                            return (
                                                e.pagesLoader.items.splice(a, 0, s),
                                                e.kinds.splice(r, 1),
                                                e.kinds.splice(a, 0, n),
                                                e.kinds.length === i.length && e.kinds.every((e, t) => e === i[t])
                                            );
                                        })(a, i, r)
                                    )
                                        return ir.F.ERROR;
                                } catch (t) {
                                    if (s !== e.loadGeneration) return;
                                    d.error(t);
                                }
                                return (l(), ir.F.ERROR);
                            }),
                            s = (0, _.L3)(function* (t, a) {
                                if (!e.isDragAndDropEnabled || e.isPlaylistMovePending || !e.pagesLoader.items) return;
                                let s = lk(e.pagesLoader.items, e.kinds, t, a);
                                if (!s) return;
                                let o = e.pagesLoader.items[s.from];
                                if (!o) return;
                                e.isPlaylistMovePending = !0;
                                let { usersResource: d, modelActionsLogger: g } = (0, _._$)(e),
                                    u = e.loadGeneration;
                                try {
                                    let c = i(s.from, s.to);
                                    if (c.length > 0) {
                                        let t;
                                        try {
                                            t = yield* (0, _.HN)(r(o.uid, c, u));
                                        } catch (t) {
                                            if (u !== e.loadGeneration) return;
                                            return (g.error(t), ir.F.ERROR);
                                        }
                                        if (void 0 === t) return;
                                    }
                                    if (u !== e.loadGeneration || !e.isDragAndDropEnabled) return;
                                    let m = e.pagesLoader.items.findIndex((e) => (null == e ? void 0 : e.key) === a),
                                        y = e.pagesLoader.items[m],
                                        p = y
                                            ? ((e, t, a, i) => {
                                                  let r = lk(e, t, a, i);
                                                  if (!r) return;
                                                  let { from: l, to: n } = r,
                                                      s = Math.min(l, n),
                                                      o = Math.max(l, n);
                                                  if (e.slice(s, o + 1).every((e) => !!e && !e.isFavouritePlaylist && !e.generatedPlaylistType))
                                                      return { from: l, to: n };
                                              })(e.pagesLoader.items, e.kinds, t, y.key)
                                            : void 0;
                                    if (!p) return i(s.from, s.to).length > 0 ? ir.F.ERROR : void 0;
                                    let { from: E, to: b } = p,
                                        v = e.pagesLoader.items[E],
                                        S = e.kinds[E];
                                    if (!v || 'number' != typeof S) return;
                                    let K = v.uid,
                                        I = e.kinds.slice(),
                                        L = (0, _.Yo)(v);
                                    (e.pagesLoader.items.splice(b, 0, L), e.kinds.splice(E, 1), e.kinds.splice(b, 0, S));
                                    let T = e.kinds.slice();
                                    if (!e.isDragAndDropEnabled) return void l();
                                    try {
                                        let e = yield* (0, _.HN)(d.changePlaylistPosition({ userId: K, playlistKind: S, from: E, to: b }));
                                        if ('ok' !== e) throw Error('Не удалось изменить позицию плейлиста');
                                        return ir.F.OK;
                                    } catch (a) {
                                        if ((g.error(a), u !== e.loadGeneration)) return;
                                        if (!e.isDragAndDropEnabled) return void l();
                                        return yield* (0, _.HN)(n(K, t, E, I, T, u));
                                    }
                                } catch (e) {
                                    return (g.error(e), l(), ir.F.ERROR);
                                } finally {
                                    e.isPlaylistMovePending = !1;
                                }
                            });
                        return { getData: a, movePlaylist: s, reset: l };
                    }),
                lD = _.gK
                    .model('CollectionPlaylistsLikedPage', { sort: _.gK.maybeNull(ly.w), pagesLoader: (0, r1.I)(tM.$) })
                    .views((e) => ({
                        get isShimmerVisible() {
                            return !e.pagesLoader.isSomePageResolved;
                        },
                        get isNeededToLoad() {
                            return e.pagesLoader.isNeedToMakeInitialRequest;
                        },
                        get isRejected() {
                            return e.pagesLoader.isInitialRequestRejected;
                        },
                        get isResolved() {
                            return e.pagesLoader.isSomePageResolved;
                        },
                        get requestsCount() {
                            return e.pagesLoader.requestsCount;
                        },
                        get isEmpty() {
                            return e.pagesLoader.isEmpty;
                        },
                        get items() {
                            var t;
                            return null != (t = e.pagesLoader.items) ? t : [];
                        },
                    }))
                    .actions((e) => ({
                        getData: (0, _.L3)(function* (t) {
                            let { userId: a, page: i = 0, pageSize: r = 20, sortBy: l, sortOrder: n, playlistMetaType: s, withTracks: o } = t;
                            if (!e.pagesLoader.isPageNeedToLoad(i)) return;
                            let { usersResource: d, modelActionsLogger: g } = (0, _._$)(e);
                            ((e.sort = null), (0, lu.W)(l) && lm(n) && (e.sort = (0, _.wg)({ sortBy: l, sortOrder: n })));
                            try {
                                e.pagesLoader.setPageState(i, F.G.PENDING);
                                let { likedPlaylists: t, pager: g } = yield d.getLikedPlaylists({
                                        userId: a,
                                        page: i,
                                        pageSize: r,
                                        sortBy: l,
                                        sortOrder: n,
                                        playlistMetaType: s,
                                        withTracks: o,
                                    }),
                                    u = t.map((e) => {
                                        let { playlist: t } = e;
                                        return (0, tb.j)(t);
                                    });
                                e.pagesLoader.setItems(u, { page: i, pager: g });
                            } catch (t) {
                                (g.error(t), e.pagesLoader.setItems(null, { responseStatus: ir.F.ERROR, page: i }));
                            }
                        }),
                        reset() {
                            ((e.sort = null), e.pagesLoader.reset());
                        },
                    })),
                lO = _.gK
                    .model('CollectionPlaylists', {
                        playlistsLiked: lD,
                        playlistsCreated: l_,
                        activeTabIndex: _.gK.number,
                        tabs: _.gK.array(_.gK.number),
                        tabIndexElement: _.gK.maybe(_.gK.string),
                    })
                    .views((e) => ({
                        get isLikedTabActive() {
                            return e.activeTabIndex === lN.a.LIKED;
                        },
                        get isCreatedTabActive() {
                            return e.activeTabIndex === lN.a.CREATED;
                        },
                        get activePlaylistsModel() {
                            switch (e.activeTabIndex) {
                                case lN.a.CREATED:
                                    return e.playlistsCreated;
                                case lN.a.LIKED:
                                    return e.playlistsLiked;
                                default:
                                    return e.playlistsCreated;
                            }
                        },
                        get isEmptyLikedTab() {
                            return 0 === e.playlistsLiked.items.length;
                        },
                    }))
                    .actions((e) => ({
                        setActiveTabIndex(t) {
                            e.activeTabIndex = t;
                        },
                        setTabIndexElement(t) {
                            e.tabIndexElement = t;
                        },
                        reset() {
                            (e.playlistsLiked.reset(), e.playlistsCreated.reset(), (e.activeTabIndex = lN.a.CREATED));
                        },
                    })),
                lw = (e) => (0, _.wg)({ type: e.type, track: (0, tl.v)(e.track), album: e.album && (0, eQ.p)(e.album) }),
                lG = _.gK.model('ShelfLikedItem', { type: _.gK.string, track: Z.v, album: _.gK.maybe(eC.J) }),
                lM = _.gK
                    .compose(
                        _.gK.model('CollectionShelfLiked', {
                            title: _.gK.maybeNull(_.gK.string),
                            typeForFrom: _.gK.maybeNull(_.gK.string),
                            entities: _.gK.maybeNull(_.gK.array(lG)),
                            pager: _.gK.maybeNull(lI.j),
                        }),
                        ee.X,
                    )
                    .views((e) => ({
                        get isLoading() {
                            return e.isNeededToLoad || e.loadingState === F.G.PENDING;
                        },
                        get isEmpty() {
                            var t;
                            return e.isResolved && (null == (t = e.entities) ? void 0 : t.length) === 0;
                        },
                    }))
                    .actions((e) => ({
                        getData: (0, _.L3)(function* () {
                            let { nonMusicResource: t, modelActionsLogger: a } = (0, _._$)(e);
                            if (e.loadingState !== F.G.PENDING)
                                try {
                                    var i;
                                    e.loadingState = F.G.PENDING;
                                    let a = yield t.getShelfLiked();
                                    ((e.title = a.title),
                                        (e.typeForFrom = null != (i = a.typeForFrom) ? i : null),
                                        (e.pager = (0, _.wg)(a.pager)),
                                        (e.entities = (0, _.wg)(a.entities ? a.entities.map(lw) : [])),
                                        (e.loadingState = F.G.RESOLVE));
                                } catch (t) {
                                    (a.error(t), (e.loadingState = F.G.REJECT));
                                }
                        }),
                        reset() {
                            ((e.entities = null), (e.title = null), (e.typeForFrom = null), (e.pager = null), (e.loadingState = F.G.IDLE));
                        },
                    }));
            var lU = a(50672),
                lB = a(62115);
            let lV = _.gK.model('CaseForms', {
                    nominative: _.gK.optional(_.gK.string, ''),
                    genitive: _.gK.optional(_.gK.string, ''),
                    dative: _.gK.optional(_.gK.string, ''),
                    accusative: _.gK.optional(_.gK.string, ''),
                    instrumental: _.gK.optional(_.gK.string, ''),
                    prepositional: _.gK.optional(_.gK.string, ''),
                }),
                lF = _.gK.model('PlaylistMadeForUser', { caseForms: _.gK.maybeNull(lV) });
            var lx = a(79993);
            let lj = _.gK.model('PlaylistOwner', {
                    uid: _.gK.number,
                    login: _.gK.string,
                    name: _.gK.string,
                    sex: _.gK.enumeration(Object.values(lx.U)),
                    verified: _.gK.boolean,
                }),
                lW = _.gK.model('PlaylistTag', { id: _.gK.string, value: _.gK.string }),
                lX = tM.$.props({
                    owner: _.gK.maybe(lj),
                    modified: _.gK.string,
                    description: _.gK.maybe(_.gK.string),
                    tags: _.gK.maybeNull(_.gK.array(lW)),
                    madeForUser: _.gK.maybeNull(lF),
                })
                    .views((e) => ({
                        get seeds() {
                            var t;
                            return ['playlist:'.concat(null == (t = e.owner) ? void 0 : t.login, '_').concat(e.kind)];
                        },
                        get tagsString() {
                            let { experiments: t } = (0, D.M)(e);
                            if (!t.checkExperiment(O.z.WebEditorsFeatures, 'on') || !Array.isArray(e.tags) || !e.tags.length) return null;
                            return e.tags.map((e) => e.value).join(', ');
                        },
                    }))
                    .actions((e) => ({
                        changeDescription: (0, _.L3)(function* (t) {
                            if (!(0, _._n)(e)) return ir.F.ERROR;
                            if (e.description === t) return ir.F.OK;
                            if (t.length > lB.i) return ir.F.ERROR;
                            let { usersResource: a, modelActionsLogger: i } = (0, _._$)(e);
                            if (e.canUserChange) {
                                let r = e.description;
                                e.description = t;
                                try {
                                    let i = yield a.changePlaylistDescription({ description: t, userId: e.uid, playlistKind: e.kind });
                                    return ((e.description = i.description), ir.F.OK);
                                } catch (t) {
                                    ((e.description = r), i.error(t));
                                }
                            }
                            return ir.F.ERROR;
                        }),
                        changePlaylistCover: (0, _.L3)(function* (t) {
                            if (!(0, _._n)(e)) return ir.F.ERROR;
                            let { usersResource: a, modelActionsLogger: i } = (0, _._$)(e);
                            try {
                                let i = yield a.uploadPlaylistCover({ userId: e.uid, formData: t, playlistKind: e.kind });
                                return ((e.coverUri = i.cover.uri), ir.F.OK);
                            } catch (e) {
                                i.error(e);
                            }
                            return ir.F.ERROR;
                        }),
                    }))
                    .named('PlaylistMeta'),
                l$ = _.gK
                    .compose(
                        _.gK.model('CollectionShelfNewEpisodes', {
                            title: _.gK.maybeNull(_.gK.string),
                            typeForFrom: _.gK.maybeNull(_.gK.string),
                            playlist: _.gK.maybeNull(lX),
                            tracks: _.gK.maybeNull(_.gK.array(Z.v)),
                        }),
                        ee.X,
                    )
                    .views((e) => ({
                        get withPlaylist() {
                            return !!(e.playlist && e.playlist.kind && e.playlist.isAvailable && e.playlist.uuid);
                        },
                        get isLoading() {
                            return e.isNeededToLoad || e.loadingState === F.G.PENDING;
                        },
                        get isEmpty() {
                            return e.isResolved && (!e.tracks || 0 === e.tracks.length);
                        },
                    }))
                    .actions((e) => ({
                        getData: (0, _.L3)(function* () {
                            let { nonMusicResource: t, modelActionsLogger: a } = (0, _._$)(e);
                            if (e.loadingState !== F.G.PENDING)
                                try {
                                    var i;
                                    e.loadingState = F.G.PENDING;
                                    let a = yield t.getNewEpisodes();
                                    e.title = a.title;
                                    let r = a.blocks[0];
                                    ((null == r ? void 0 : r.typeForFrom) && (e.typeForFrom = r.typeForFrom),
                                        (null == r || null == (i = r.entities[0]) ? void 0 : i.playlist) && (e.playlist = (0, lU.Z)(r.entities[0].playlist)),
                                        (null == r ? void 0 : r.entities) && (e.tracks = (0, _.wg)(r.entities.filter((e) => e.track).map((e) => (0, tl.v)(e.track)))),
                                        (e.loadingState = F.G.RESOLVE));
                                } catch (t) {
                                    (a.error(t), (e.loadingState = F.G.REJECT));
                                }
                        }),
                        reset() {
                            ((e.title = null), (e.playlist = null), (e.typeForFrom = null), (e.tracks = null), (e.loadingState = F.G.IDLE));
                        },
                    })),
                lY = (e) => (0, _.wg)({ type: e.type, album: e.album && (0, eQ.p)(e.album), playlist: e.playlist && (0, lU.Z)(e.playlist), track: (0, tl.v)(e.track) }),
                lJ = _.gK.model('ShelfRecentlyPlayedItem', { type: _.gK.string, album: _.gK.maybe(eC.J), playlist: _.gK.maybe(ex.I), track: Z.v }),
                lq = _.gK
                    .compose(
                        _.gK.model('CollectionShelfRecentlyPlayed', {
                            title: _.gK.maybeNull(_.gK.string),
                            typeForFrom: _.gK.maybeNull(_.gK.string),
                            entities: _.gK.maybeNull(_.gK.array(lJ)),
                            pager: _.gK.maybeNull(lI.j),
                        }),
                        ee.X,
                    )
                    .views((e) => ({
                        get isLoading() {
                            return e.isNeededToLoad || e.loadingState === F.G.PENDING;
                        },
                        get isEmpty() {
                            return !!(e.isResolved && e.entities && 0 === e.entities.length);
                        },
                    }))
                    .actions((e) => ({
                        getData: (0, _.L3)(function* () {
                            let { nonMusicResource: t, modelActionsLogger: a } = (0, _._$)(e);
                            if (e.loadingState !== F.G.PENDING)
                                try {
                                    var i;
                                    e.loadingState = F.G.PENDING;
                                    let a = yield t.getShelfRecentlyPlayed();
                                    ((e.title = a.title),
                                        (e.typeForFrom = null != (i = a.typeForFrom) ? i : null),
                                        (e.pager = (0, _.wg)(a.pager)),
                                        (e.entities = (0, _.wg)(a.entities.map(lY))),
                                        (e.loadingState = F.G.RESOLVE));
                                } catch (t) {
                                    (a.error(t), (e.loadingState = F.G.REJECT));
                                }
                        }),
                        reset() {
                            ((e.entities = null), (e.title = null), (e.typeForFrom = null), (e.pager = null), (e.loadingState = F.G.IDLE));
                        },
                    })),
                lH = _.gK
                    .model('CollectionShelfPage', { recentlyPlayed: lq, newEpisodes: l$, liked: lM })
                    .views((e) => ({
                        get isLoading() {
                            return e.recentlyPlayed.isLoading && e.liked.isLoading;
                        },
                        get isRejected() {
                            return e.recentlyPlayed.isRejected && e.liked.isRejected;
                        },
                        get isResolved() {
                            return e.recentlyPlayed.isResolved && e.liked.isResolved;
                        },
                        get isIdle() {
                            return e.recentlyPlayed.loadingState === F.G.IDLE && e.liked.loadingState === F.G.IDLE;
                        },
                        get hasRecentlyPlayed() {
                            var t;
                            return e.recentlyPlayed.isLoading || ((null == (t = e.recentlyPlayed.entities) ? void 0 : t.length) || 0) > 0;
                        },
                        get hasLiked() {
                            var a;
                            return e.liked.isLoading || ((null == (a = e.liked.entities) ? void 0 : a.length) || 0) > 0;
                        },
                    }))
                    .actions((e) => ({
                        reset() {
                            (e.recentlyPlayed.reset(), e.liked.reset());
                        },
                    })),
                lz = _.gK
                    .compose(_.gK.model('CollectionVibeRoomsPage', { items: _.gK.array(_.gK.maybeNull(is)) }), ee.X, w.p)
                    .views((e) => ({
                        get isEnabled() {
                            let { experiments: t } = (0, D.M)(e);
                            return t.checkExperiment(O.z.WebNextWaveForTwo, 'on');
                        },
                        get isLoading() {
                            return e.isNeededToLoad || (e.loadingState === F.G.PENDING && 0 === e.items.length);
                        },
                        get isEmptyItems() {
                            var t;
                            return !(null == (t = e.items) ? void 0 : t.length);
                        },
                    }))
                    .actions((e) => ({
                        getData: (0, _.L3)(function* () {
                            let { modelActionsLogger: t, waveResource: a } = (0, _._$)(e);
                            if (e.loadingState !== F.G.PENDING)
                                try {
                                    e.loadingState = F.G.PENDING;
                                    let t = yield a.getRooms();
                                    ((e.items = (0, _.wg)(t.map(tL))), (e.loadingState = F.G.RESOLVE));
                                } catch (a) {
                                    (t.error(a), (e.loadingState = F.G.REJECT));
                                }
                        }),
                        deleteRoomFromItems(t) {
                            var a;
                            e.items = (0, _.wg)(null == (a = e.items) ? void 0 : a.filter((e) => (null == e ? void 0 : e.id) !== t));
                        },
                        reset() {
                            ((e.loadingState = F.G.IDLE), e.destroyItems([e.items]));
                        },
                    })),
                lQ = _.gK
                    .compose(_.gK.model('CollectionDislikesPageArtists', { items: _.gK.maybeNull(_.gK.array(eR.P)) }), ee.X)
                    .views((e) => {
                        let t = {
                            get isLoading() {
                                return e.isNeededToLoad || e.loadingState === F.G.PENDING;
                            },
                            get isEmpty() {
                                var a;
                                return !t.isLoading && (null == (a = e.items) ? void 0 : a.length) === 0;
                            },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        getData: (0, _.L3)(function* () {
                            let { usersResource: t, modelActionsLogger: a } = (0, _._$)(e);
                            if (!(0, _._n)(e)) return null;
                            let { user: i } = (0, D.M)(e);
                            if (e.loadingState === F.G.PENDING) return null;
                            if (((e.loadingState = F.G.PENDING), i.account.data.uid))
                                try {
                                    let a = yield t.getDislikedArtists({ userId: i.account.data.uid });
                                    return ((e.items = (0, _.wg)((a || []).map(li.d))), e.loadingState !== F.G.IDLE && (e.loadingState = F.G.RESOLVE), a);
                                } catch (t) {
                                    (a.error(t), e.loadingState !== F.G.IDLE && (e.loadingState = F.G.REJECT));
                                }
                            return ((e.loadingState = F.G.REJECT), null);
                        }),
                        reset() {
                            ((e.loadingState = F.G.IDLE), (e.items = null));
                        },
                    })),
                lZ = _.gK.model('CollectionDislikesPageTracksItem', { id: _.gK.string, loadingState: _.gK.enumeration(Object.values(F.G)), data: _.gK.maybeNull(Z.v) }),
                l0 = _.gK
                    .compose(_.gK.model('CollectionDislikesPageTracks', { items: _.gK.maybeNull(_.gK.array(lZ)) }), ee.X)
                    .views((e) => {
                        let t = {
                            get isLoading() {
                                return e.isNeededToLoad || e.loadingState === F.G.PENDING;
                            },
                            get isEmpty() {
                                var a;
                                return !t.isLoading && (null == (a = e.items) ? void 0 : a.length) === 0;
                            },
                            get sonataEntitiesData() {
                                var i, r;
                                return null != (r = null == (i = e.items) ? void 0 : i.map((e) => (0, ez.l)(e.id))) ? r : [];
                            },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        getData: (0, _.L3)(function* () {
                            let { usersResource: t, modelActionsLogger: a } = (0, _._$)(e),
                                { user: i } = (0, D.M)(e);
                            if (i.account.data.uid && e.loadingState !== F.G.PENDING) {
                                e.loadingState = F.G.PENDING;
                                try {
                                    let {
                                            library: { tracks: a },
                                        } = yield t.getDislikedTracks({ userId: i.account.data.uid }),
                                        r = a.map((e) => {
                                            let { id: t, albumId: a } = e;
                                            return { id: String((0, iK.V)(t, a)), loadingState: F.G.IDLE };
                                        });
                                    ((e.items = (0, _.wg)(r)), (e.loadingState = F.G.RESOLVE));
                                } catch (t) {
                                    (a.error(t), e.loadingState !== F.G.IDLE && (e.loadingState = F.G.REJECT));
                                }
                            }
                        }),
                        getTracksByRange: (0, _.L3)(function* (t, a) {
                            var i;
                            let { tracksResource: r, modelActionsLogger: l } = (0, _._$)(e);
                            if (!(null == (i = e.items) ? void 0 : i.length)) return null;
                            ((t = Math.max(0, t)), (a = Math.min(a, e.items.length)));
                            let n = ((e, t, a) => {
                                let i = [];
                                for (let n = t; n <= a; n++) {
                                    var r, l;
                                    ((null == (r = e[n]) ? void 0 : r.loadingState) === F.G.IDLE || (null == (l = e[n]) ? void 0 : l.loadingState) === F.G.REJECT) &&
                                        i.push(n);
                                }
                                return i;
                            })(e.items, t, a);
                            try {
                                let t,
                                    a =
                                        ((t = e.items),
                                        n.map((e) => {
                                            let a = t[e];
                                            return String(null == a ? void 0 : a.id);
                                        }));
                                if (!a.length) return null;
                                n.forEach((t) => {
                                    var a;
                                    let i = null == (a = e.items) ? void 0 : a[t];
                                    i && (i.loadingState = F.G.PENDING);
                                });
                                let i = yield r.getTracksMeta({ trackIds: a, withProgress: !0 });
                                n.forEach((t, a) => {
                                    var r;
                                    let l = null == i ? void 0 : i[a];
                                    (null == (r = e.items) ? void 0 : r[t]) && l && (e.items[t] = { id: String(l.id), data: (0, tl.v)(l), loadingState: F.G.RESOLVE });
                                });
                            } catch (t) {
                                (l.error(t),
                                    n.forEach((t) => {
                                        var a;
                                        let i = null == (a = e.items) ? void 0 : a[t];
                                        i && (i.loadingState = F.G.REJECT);
                                    }));
                            }
                            return null;
                        }),
                        reset() {
                            ((e.loadingState = F.G.IDLE), (e.items = null));
                        },
                    })),
                l1 = _.gK
                    .model('CollectionDislikesPage', { artists: lQ, tracks: l0 })
                    .views((e) => ({
                        get isNeededToLoad() {
                            return e.tracks.isNeededToLoad && e.artists.isNeededToLoad;
                        },
                        get isLoading() {
                            return e.tracks.isLoading && e.artists.isLoading;
                        },
                        get isResolved() {
                            return e.tracks.isResolved && e.artists.isResolved;
                        },
                    }))
                    .actions((e) => ({
                        reset() {
                            (e.artists.reset(), e.tracks.reset());
                        },
                    }));
            var l3 = a(71104);
            let l2 = _.gK
                    .model('CollectionKidsAlbumsPage', { pagesLoader: (0, r1.I)(eC.J) })
                    .views((e) => {
                        let t = {
                            get isShimmerVisible() {
                                return !e.pagesLoader.isSomePageResolved;
                            },
                            get isNeededToLoad() {
                                return e.pagesLoader.isNeedToMakeInitialRequest;
                            },
                            get isRejected() {
                                return e.pagesLoader.isInitialRequestRejected;
                            },
                            get isEmpty() {
                                return e.pagesLoader.isEmpty;
                            },
                            get isResolved() {
                                return e.pagesLoader.isSomePageResolved;
                            },
                            get requestsCount() {
                                return e.pagesLoader.requestsCount;
                            },
                            get items() {
                                var a;
                                return null != (a = e.pagesLoader.items) ? a : [];
                            },
                            get shouldShowContent() {
                                return t.isShimmerVisible || t.items.length > 0;
                            },
                            get loadedItems() {
                                var i, r;
                                return null != (r = null == (i = e.pagesLoader.items) ? void 0 : i.filter((e) => null !== e)) ? r : [];
                            },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        getData: (0, _.L3)(function* (t) {
                            let { pageSize: a = l3.c, page: i = 0 } = t,
                                { landingBlocksResource: r, modelActionsLogger: l } = (0, _._$)(e);
                            if (e.pagesLoader.isPageNeedToLoad(i))
                                try {
                                    e.pagesLoader.setPageState(i, F.G.PENDING);
                                    let t = yield r.getCollectionKidsAlbumsLiked({ page: i, pageSize: a }),
                                        l = t.items.map((e) => tp(e.data).data);
                                    e.pagesLoader.setItems(l, { page: i, pager: t.pager });
                                } catch (t) {
                                    (l.error(t), e.pagesLoader.setItems(null, { responseStatus: ir.F.ERROR, page: i }));
                                }
                        }),
                        reset() {
                            e.pagesLoader.reset();
                        },
                    })),
                l5 = _.gK
                    .model('CollectionKidsPlaylistsPage', { pagesLoader: (0, r1.I)(ex.I) })
                    .views((e) => {
                        let t = {
                            get isShimmerVisible() {
                                return !e.pagesLoader.isSomePageResolved;
                            },
                            get isNeededToLoad() {
                                return e.pagesLoader.isNeedToMakeInitialRequest;
                            },
                            get isRejected() {
                                return e.pagesLoader.isInitialRequestRejected;
                            },
                            get isEmpty() {
                                return e.pagesLoader.isEmpty;
                            },
                            get isResolved() {
                                return e.pagesLoader.isSomePageResolved;
                            },
                            get requestsCount() {
                                return e.pagesLoader.requestsCount;
                            },
                            get items() {
                                var a;
                                return null != (a = e.pagesLoader.items) ? a : [];
                            },
                            get shouldShowContent() {
                                return t.isShimmerVisible || t.items.length > 0;
                            },
                            get loadedItems() {
                                var i, r;
                                return null != (r = null == (i = e.pagesLoader.items) ? void 0 : i.filter((e) => null !== e)) ? r : [];
                            },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        getData: (0, _.L3)(function* (t) {
                            let { pageSize: a = l3.c, page: i = 0 } = t,
                                { landingBlocksResource: r, modelActionsLogger: l } = (0, _._$)(e);
                            if (e.pagesLoader.isPageNeedToLoad(i))
                                try {
                                    e.pagesLoader.setPageState(i, F.G.PENDING);
                                    let t = yield r.getCollectionKidsPlaylistsLiked({ page: i, pageSize: a }),
                                        l = t.items.map((e) => eu(e.data).data);
                                    e.pagesLoader.setItems(l, { page: i, pager: t.pager });
                                } catch (t) {
                                    (l.error(t), e.pagesLoader.setItems(null, { responseStatus: ir.F.ERROR, page: i }));
                                }
                        }),
                        reset() {
                            e.pagesLoader.reset();
                        },
                    })),
                l6 = _.gK
                    .model('CollectionKidsTracksPage', { pagesLoader: (0, r1.I)(Z.v) })
                    .views((e) => {
                        let t = {
                            get isShimmerVisible() {
                                return !e.pagesLoader.isSomePageResolved;
                            },
                            get isNeededToLoad() {
                                return e.pagesLoader.isNeedToMakeInitialRequest;
                            },
                            get isRejected() {
                                return e.pagesLoader.isInitialRequestRejected;
                            },
                            get isEmpty() {
                                return e.pagesLoader.isEmpty;
                            },
                            get isResolved() {
                                return e.pagesLoader.isSomePageResolved;
                            },
                            get requestsCount() {
                                return e.pagesLoader.requestsCount;
                            },
                            get items() {
                                var a;
                                return null != (a = e.pagesLoader.items) ? a : [];
                            },
                            get shouldShowContent() {
                                return t.isShimmerVisible || t.items.length > 0;
                            },
                            get loadedItems() {
                                var i, r;
                                return null != (r = null == (i = e.pagesLoader.items) ? void 0 : i.filter((e) => null !== e)) ? r : [];
                            },
                            get sonataEntitiesData() {
                                return t.loadedItems.map(le.$);
                            },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        getData: (0, _.L3)(function* (t) {
                            let { pageSize: a = l3.c, page: i = 0 } = t,
                                { landingBlocksResource: r, modelActionsLogger: l } = (0, _._$)(e);
                            if (e.pagesLoader.isPageNeedToLoad(i))
                                try {
                                    e.pagesLoader.setPageState(i, F.G.PENDING);
                                    let t = yield r.getCollectionKidsTracksLiked({ page: i, pageSize: a }),
                                        l = t.items.map(tE).map((e) => e.data);
                                    e.pagesLoader.setItems(l, { page: i, pager: t.pager });
                                } catch (t) {
                                    (l.error(t), e.pagesLoader.setItems(null, { responseStatus: ir.F.ERROR, page: i }));
                                }
                        }),
                        reset() {
                            e.pagesLoader.reset();
                        },
                    })),
                l8 = _.gK
                    .model('CollectionKidsPage', { albums: l2, playlists: l5, tracks: l6 })
                    .views((e) => ({
                        get isNeededToLoad() {
                            return e.albums.isNeededToLoad && e.playlists.isNeededToLoad && e.tracks.isNeededToLoad;
                        },
                        get isRejected() {
                            return e.albums.isRejected && e.playlists.isRejected && e.tracks.isRejected;
                        },
                        get isResolved() {
                            return e.albums.isResolved && e.playlists.isResolved && e.tracks.isResolved;
                        },
                        get shouldShowContent() {
                            return e.albums.shouldShowContent || e.playlists.shouldShowContent || e.tracks.shouldShowContent;
                        },
                    }))
                    .actions((e) => ({
                        reset() {
                            (e.albums.reset(), e.playlists.reset(), e.tracks.reset());
                        },
                    })),
                l4 = _.gK
                    .compose(_.gK.model('CollectionShelfLikedPage', { pagesLoader: (0, r1.I)(lG), typeForFrom: _.gK.maybeNull(_.gK.string) }), w.p)
                    .views((e) => ({
                        get isShimmerVisible() {
                            return !e.pagesLoader.isSomePageResolved;
                        },
                        get isNeededToLoad() {
                            return e.pagesLoader.isNeedToMakeInitialRequest;
                        },
                        get isRejected() {
                            return e.pagesLoader.isInitialRequestRejected;
                        },
                        get isEmpty() {
                            return e.pagesLoader.isEmpty;
                        },
                        get isResolved() {
                            return e.pagesLoader.isSomePageResolved;
                        },
                        get requestsCount() {
                            return e.pagesLoader.requestsCount;
                        },
                        get items() {
                            return e.pagesLoader.items || [];
                        },
                    }))
                    .actions((e) => ({
                        getData: (0, _.L3)(function* (t) {
                            let { pageSize: a = l3.c, page: i = 0 } = t,
                                { nonMusicResource: r, modelActionsLogger: l } = (0, _._$)(e);
                            if (e.pagesLoader.isPageNeedToLoad(i))
                                try {
                                    var n, s;
                                    e.pagesLoader.setPageState(i, F.G.PENDING);
                                    let t = yield r.getShelfLiked({ page: i, pageSize: a }),
                                        l = (null == (n = t.entities) ? void 0 : n.map(lw)) || [];
                                    (e.pagesLoader.setItems(l, { page: i, pager: t.pager }), (e.typeForFrom = null != (s = t.typeForFrom) ? s : null));
                                } catch (t) {
                                    (l.error(t), e.pagesLoader.setItems(null, { responseStatus: ir.F.ERROR, page: i }));
                                }
                        }),
                        reset() {
                            e.pagesLoader.reset();
                        },
                    })),
                l7 = _.gK
                    .model('CollectionShelfRecentlyPlayedPage', { pagesLoader: (0, r1.I)(lJ), typeForFrom: _.gK.maybeNull(_.gK.string) })
                    .views((e) => ({
                        get isShimmerVisible() {
                            return !e.pagesLoader.isSomePageResolved;
                        },
                        get isNeededToLoad() {
                            return e.pagesLoader.isNeedToMakeInitialRequest;
                        },
                        get isRejected() {
                            return e.pagesLoader.isInitialRequestRejected;
                        },
                        get isEmpty() {
                            return e.pagesLoader.isEmpty;
                        },
                        get isResolved() {
                            return e.pagesLoader.isSomePageResolved;
                        },
                        get requestsCount() {
                            return e.pagesLoader.requestsCount;
                        },
                        get items() {
                            return e.pagesLoader.items || [];
                        },
                    }))
                    .actions((e) => ({
                        getData: (0, _.L3)(function* (t) {
                            let { pageSize: a = l3.c, page: i = 0 } = t,
                                { nonMusicResource: r, modelActionsLogger: l } = (0, _._$)(e);
                            if (e.pagesLoader.isPageNeedToLoad(i))
                                try {
                                    var n, s;
                                    e.pagesLoader.setPageState(i, F.G.PENDING);
                                    let t = yield r.getShelfRecentlyPlayed({ page: i, pageSize: a }),
                                        l = (null == (n = t.entities) ? void 0 : n.map(lY)) || [];
                                    (e.pagesLoader.setItems(l, { page: i, pager: t.pager }), (e.typeForFrom = null != (s = t.typeForFrom) ? s : null));
                                } catch (t) {
                                    (l.error(t), e.pagesLoader.setItems(null, { responseStatus: ir.F.ERROR, page: i }));
                                }
                        }),
                        reset() {
                            (e.pagesLoader.reset(), (e.typeForFrom = null));
                        },
                    })),
                l9 = _.gK.model('CollectionPage', {
                    landing: rq,
                    albums: lE,
                    playlists: lO,
                    artists: lv,
                    shelf: lH,
                    shelfRecentlyPlayed: l7,
                    shelfLiked: l4,
                    nonMusicLiked: lh,
                    dislikes: l1,
                    kids: l8,
                    clips: lT,
                    vibeRooms: lz,
                }),
                ne = _.gK.model('ConcertDescription', { text: _.gK.string, genre: _.gK.maybe(_.gK.string), source: _.gK.maybe(_.gK.string) }),
                nt = _.gK
                    .compose(
                        _.gK.model('ConcertPage', {
                            meta: _.gK.maybeNull(aE.a),
                            covers: _.gK.maybeNull(_.gK.array(eP.$)),
                            description: _.gK.maybeNull(ne),
                            leadArtistId: _.gK.maybeNull(_.gK.union(_.gK.string, _.gK.number)),
                            artists: _.gK.maybeNull(_.gK.array(eR.P)),
                            errorStatusCode: _.gK.maybeNull(_.gK.number),
                            landing: rq,
                        }),
                        ee.X,
                        w.p,
                    )
                    .views((e) => ({
                        get isShimmerVisible() {
                            return e.isNeededToLoad || e.isLoading || e.isRejected;
                        },
                        get isShimmerActive() {
                            return e.isLoading;
                        },
                        get isNotFound() {
                            return e.isRejected && (e.errorStatusCode === U.X1.NOT_FOUND || e.errorStatusCode === U.X1.BAD_REQUEST);
                        },
                        get coversUri() {
                            var t, a;
                            return null != (a = null == (t = e.covers) ? void 0 : t.map((e) => e.uri).filter((e) => !!e)) ? a : [];
                        },
                    }))
                    .actions((e) => ({
                        getInfo: (0, _.L3)(function* (t) {
                            let { concertId: a } = t,
                                { concertsResource: i, modelActionsLogger: r } = (0, _._$)(e);
                            if (!e.isLoading)
                                try {
                                    e.loadingState = F.G.PENDING;
                                    let { concert: t, minPrice: r, covers: l, description: n, leadArtistId: s, artists: o } = yield i.getInfo({ concertId: a });
                                    ((e.meta = (0, tr.h)(t, r)),
                                        (e.covers = (0, _.wg)(null == l ? void 0 : l.map((e) => (0, tm.p)(e)))),
                                        (e.description = n ? (0, _.wg)(n) : null),
                                        (e.leadArtistId = s ? (0, _.wg)(s) : null),
                                        (e.artists = (0, _.wg)(null == o ? void 0 : o.map((e) => (0, li.d)(e)))),
                                        (e.loadingState = F.G.RESOLVE));
                                } catch (t) {
                                    (r.error(t),
                                        t instanceof U.GX &&
                                            (t.statusCode === U.X1.NOT_FOUND || t.statusCode === U.X1.BAD_REQUEST) &&
                                            (e.errorStatusCode = U.X1.NOT_FOUND),
                                        (e.loadingState = F.G.REJECT));
                                }
                        }),
                        reset() {
                            ((e.loadingState = F.G.IDLE), e.landing.reset(), (e.leadArtistId = null), e.destroyItems([e.covers, e.description, e.artists]));
                        },
                    }));
            var na = a(10363),
                ni = a(15253);
            let nr = (e, t, a) => (-1 === a ? e.slice(t) : e.slice(t, t + a)),
                nl = (e) => (0, _.wg)({ id: e.id, name: e.name }),
                nn = _.gK.model('ConcertLocation', { id: _.gK.number, name: _.gK.string });
            var ns = a(32298);
            let no = _.gK
                    .compose(
                        _.gK.model({
                            selectedLocationId: _.gK.maybeNull(_.gK.number),
                            locations: _.gK.maybeNull(_.gK.array(nn)),
                            isInitialized: _.gK.optional(_.gK.boolean, !1),
                            modal: ns.q,
                            searchText: _.gK.optional(_.gK.string, ''),
                        }),
                        ee.X,
                    )
                    .named('ConcertLocation')
                    .views((e) => ({
                        get isAutoDetect() {
                            return null === e.selectedLocationId;
                        },
                        get selectedLocationName() {
                            var t;
                            if (null === e.selectedLocationId || !e.locations) return null;
                            let a = e.locations.find((t) => t.id === e.selectedLocationId);
                            return null != (t = null == a ? void 0 : a.name) ? t : null;
                        },
                        get hasLocations() {
                            return null !== e.locations && e.locations.length > 0;
                        },
                        get shouldShowShimmer() {
                            return !e.isInitialized || (null !== e.selectedLocationId && e.isLoading && !e.isRejected);
                        },
                        get filteredLocations() {
                            if (!e.locations) return [];
                            let t = e.searchText.trim();
                            if (!t) return e.locations;
                            let a = t.toLowerCase();
                            return e.locations
                                .map((e) => {
                                    let t = e.name.toLowerCase(),
                                        i = null;
                                    return (
                                        t.startsWith(a) ? (i = 0) : t.split(/[\s-]+/).some((e) => e.startsWith(a)) ? (i = 1) : t.includes(a) && (i = 2),
                                        null === i ? null : { location: e, rank: i }
                                    );
                                })
                                .filter((e) => null !== e)
                                .sort((e, t) => (e.rank !== t.rank ? e.rank - t.rank : e.location.name.localeCompare(t.location.name)))
                                .map((e) => e.location);
                        },
                    }))
                    .actions((e) => ({
                        init() {
                            let { containerStorage: t } = (0, _._$)(e),
                                a = t.get(ni.c.ConcertLocation);
                            ('number' == typeof a && (e.selectedLocationId = a), (e.isInitialized = !0));
                        },
                        getLocations: (0, _.L3)(function* () {
                            let { concertsResource: t, modelActionsLogger: a } = (0, _._$)(e);
                            if (!e.isLoading)
                                try {
                                    e.loadingState = F.G.PENDING;
                                    let a = yield t.getLocations({});
                                    ((e.locations = (0, _.wg)(a.locations.map(nl))), (e.loadingState = F.G.RESOLVE));
                                } catch (t) {
                                    (a.error(t), (e.loadingState = F.G.REJECT));
                                }
                        }),
                        setSelectedLocation(t) {
                            let { containerStorage: a } = (0, _._$)(e);
                            ((e.selectedLocationId = t),
                                null === t ? a.remove(ni.c.ConcertLocation) : a.set(ni.c.ConcertLocation, t, { expires: 365 }),
                                (0, D.M)(e).concerts.reloadData());
                        },
                        setSearchText(t) {
                            e.searchText = t;
                        },
                        resetSearchText() {
                            e.searchText = '';
                        },
                        reset() {
                            ((e.selectedLocationId = null),
                                (e.locations = null),
                                (e.loadingState = F.G.IDLE),
                                (e.isInitialized = !1),
                                (e.searchText = ''),
                                e.modal.close());
                        },
                    })),
                nd = _.gK
                    .compose(
                        _.gK.model('ConcertsPageConfig', {
                            topOffset: _.gK.optional(_.gK.number, 0),
                            topLimit: _.gK.optional(_.gK.number, 3),
                            feedOffset: _.gK.optional(_.gK.number, 3),
                            feedLimit: _.gK.optional(_.gK.number, -1),
                        }),
                        ee.X,
                    )
                    .actions((e) => ({
                        getData: (0, _.L3)(function* () {
                            let { concertsResource: t, modelActionsLogger: a } = (0, _._$)(e);
                            if (!e.isLoading)
                                try {
                                    e.loadingState = F.G.PENDING;
                                    let {
                                        config: { feed: a, top: i },
                                    } = yield t.getTabConfig({});
                                    ((e.feedLimit = a.limit),
                                        (e.feedOffset = a.offset),
                                        (e.topLimit = i.limit),
                                        (e.topOffset = i.offset),
                                        (e.loadingState = F.G.RESOLVE));
                                } catch (t) {
                                    (a.error(t), (e.loadingState = F.G.REJECT));
                                }
                        }),
                        reset() {
                            ((e.loadingState = F.G.IDLE), (e.feedLimit = -1), (e.feedOffset = 3), (e.topLimit = 3), (e.topOffset = 0));
                        },
                    })),
                ng = _.gK
                    .compose(
                        _.gK.model('ConcertsPage', {
                            config: nd,
                            landing: rq,
                            locationSelection: no,
                            topConcerts: _.gK.maybeNull(_.gK.array(aE.a)),
                            feedConcerts: _.gK.maybeNull(_.gK.array(aE.a)),
                        }),
                        ee.X,
                        w.p,
                    )
                    .views((e) => {
                        let t = () => {
                            var t;
                            let { containerStorage: a } = (0, _._$)(e),
                                i = a.get(ni.c.ConcertLocation);
                            return null != (t = e.locationSelection.selectedLocationId) ? t : 'number' == typeof i ? i : null;
                        };
                        return {
                            get isShimmerVisible() {
                                return e.isNeededToLoad || e.isLoading || e.isRejected;
                            },
                            get isShimmerActive() {
                                return e.isLoading;
                            },
                            get isLocationSelectionExperimentEnabled() {
                                let { experiments: t } = (0, D.M)(e);
                                return t.checkExperiment(O.z.WebNextConcertsLocation, 'on');
                            },
                            get concertsLocationForRequest() {
                                let { experiments: a } = (0, D.M)(e),
                                    i = a.checkExperiment(O.z.WebNextConcertsLocationAll, 'on'),
                                    r = t();
                                if (i && null !== r) return [r];
                                return;
                            },
                            get concertsLocationForFeedRequest() {
                                let { experiments: a } = (0, D.M)(e),
                                    i = a.checkExperiment(O.z.WebNextConcertsLocation, 'on'),
                                    r = t();
                                if (i && null !== r) return [r];
                                return;
                            },
                        };
                    })
                    .actions((e) => {
                        let t = (0, _.L3)(function* () {
                                let { concertsResource: t } = (0, _._$)(e),
                                    a = {},
                                    i = e.concertsLocationForFeedRequest;
                                (null == i ? void 0 : i.length) && (a.locations = i);
                                let { items: r } = yield t.getFeed(a),
                                    { feedConcerts: l, topConcerts: n } = ((e, t) => {
                                        let { topLimit: a, topOffset: i, feedLimit: r, feedOffset: l } = e;
                                        return { topConcerts: nr(t, i, a), feedConcerts: nr(t, l, r) };
                                    })(
                                        e.config,
                                        r.map((e) => (0, na.H)(e)),
                                    );
                                ((e.feedConcerts = (0, _.wg)(l)), (e.topConcerts = (0, _.wg)(n)));
                            }),
                            a = {
                                resetPageData() {
                                    (e.config.reset(), e.landing.reset(), (e.loadingState = F.G.IDLE), e.destroyItems([e.topConcerts, e.feedConcerts]));
                                },
                                getData: (0, _.L3)(function* () {
                                    let { modelActionsLogger: a } = (0, _._$)(e);
                                    if (!e.config.isLoading && !e.isLoading)
                                        try {
                                            ((e.loadingState = F.G.PENDING),
                                                e.isLocationSelectionExperimentEnabled && e.locationSelection.init(),
                                                yield e.config.getData(),
                                                yield t(),
                                                (e.loadingState = F.G.RESOLVE));
                                        } catch (t) {
                                            (a.error(t), (e.loadingState = F.G.REJECT));
                                        }
                                }),
                                reloadData: (0, _.L3)(function* () {
                                    let { modelActionsLogger: a } = (0, _._$)(e);
                                    try {
                                        ((e.loadingState = F.G.PENDING), yield t(), (e.loadingState = F.G.RESOLVE));
                                    } catch (t) {
                                        (a.error(t), (e.loadingState = F.G.REJECT));
                                    }
                                }),
                                reset() {
                                    (a.resetPageData(), e.locationSelection.reset());
                                },
                            };
                        return a;
                    }),
                nu = _.gK
                    .compose(
                        _.gK.model('KidsEditorialAlbumPage', {
                            errorStatusCode: _.gK.maybeNull(_.gK.number),
                            title: _.gK.maybeNull(_.gK.string),
                            albumsData: _.gK.array(_.gK.model({ id: _.gK.number })),
                            pagesLoader: (0, r1.I)(eC.J),
                        }),
                        ee.X,
                    )
                    .views((e) => {
                        let t = {
                            get isLoading() {
                                return e.isNeededToLoad || e.loadingState === F.G.PENDING;
                            },
                            get isNotFound() {
                                let t = e.errorStatusCode === U.X1.NOT_FOUND || e.errorStatusCode === U.X1.BAD_REQUEST,
                                    a = e.pagesLoader.isEmpty;
                                return (e.isRejected && t) || a;
                            },
                            get isSomethingWrong() {
                                return e.isRejected && !t.isNotFound;
                            },
                            get albums() {
                                var a;
                                return null != (a = e.pagesLoader.items) ? a : [];
                            },
                        };
                        return t;
                    })
                    .actions((e) => {
                        let t = {
                            getAlbums: (0, _.L3)(function* (t) {
                                let { page: a = 0, pageSize: i = 20 } = t,
                                    { albumResource: r, modelActionsLogger: l } = (0, _._$)(e);
                                if (e.loadingState === F.G.RESOLVE && e.pagesLoader.isPageNeedToLoad(a)) {
                                    e.pagesLoader.setPageState(a, F.G.PENDING);
                                    try {
                                        let t = a * i,
                                            l = e.albumsData.slice(t, t + i).map((e) => e.id),
                                            n = yield r.getAlbums({ albumIds: l }),
                                            s = { page: a, perPage: i, total: e.albumsData.length },
                                            o = n.map(eQ.p);
                                        e.pagesLoader.setItems(o, { page: a, pager: s });
                                    } catch (t) {
                                        (l.error(t),
                                            e.pagesLoader.setItems(null, { responseStatus: ir.F.ERROR, page: a }),
                                            t instanceof U.GX &&
                                                (t.statusCode === U.X1.NOT_FOUND || t.statusCode === U.X1.BAD_REQUEST) &&
                                                (e.errorStatusCode = U.X1.NOT_FOUND),
                                            e.loadingState !== F.G.IDLE && (e.loadingState = F.G.REJECT));
                                    }
                                }
                            }),
                            getData: (0, _.L3)(function* (a) {
                                let { id: i, page: r = 0, pageSize: l = 20 } = a,
                                    { childrenLandingResource: n, modelActionsLogger: s } = (0, _._$)(e);
                                if (e.loadingState !== F.G.PENDING)
                                    try {
                                        var o;
                                        e.loadingState = F.G.PENDING;
                                        let a = yield n.getEditorialAlbum({ id: i });
                                        ((e.title = a.title),
                                            (e.albumsData = (0, _.wg)((null != (o = a.entities) ? o : []).map((e) => ({ id: e })))),
                                            e.loadingState !== F.G.IDLE && (e.loadingState = F.G.RESOLVE),
                                            yield t.getAlbums({ page: r, pageSize: l }));
                                    } catch (t) {
                                        (s.error(t),
                                            t instanceof U.GX &&
                                                (t.statusCode === U.X1.NOT_FOUND || t.statusCode === U.X1.BAD_REQUEST) &&
                                                (e.errorStatusCode = U.X1.NOT_FOUND),
                                            e.loadingState !== F.G.IDLE && (e.loadingState = F.G.REJECT));
                                    }
                            }),
                            reset() {
                                ((e.loadingState = F.G.IDLE), (e.title = null), e.pagesLoader.reset(), (e.albumsData = (0, _.wg)([])), (e.errorStatusCode = null));
                            },
                        };
                        return t;
                    }),
                nc = _.gK
                    .compose(
                        _.gK.model('KidsEditorialPlaylistPage', {
                            errorStatusCode: _.gK.maybeNull(_.gK.number),
                            title: _.gK.maybeNull(_.gK.string),
                            playlistsData: _.gK.array(_.gK.model({ uid: _.gK.number, kind: _.gK.number })),
                            pagesLoader: (0, r1.I)(tM.$),
                        }),
                        ee.X,
                    )
                    .views((e) => {
                        let t = {
                            get isLoading() {
                                return e.isNeededToLoad || e.loadingState === F.G.PENDING;
                            },
                            get isNotFound() {
                                let t = e.errorStatusCode === U.X1.NOT_FOUND || e.errorStatusCode === U.X1.BAD_REQUEST,
                                    a = e.pagesLoader.isEmpty;
                                return (e.isRejected && t) || a;
                            },
                            get isSomethingWrong() {
                                return e.isRejected && !t.isNotFound;
                            },
                            get playlists() {
                                var a;
                                return null != (a = e.pagesLoader.items) ? a : [];
                            },
                        };
                        return t;
                    })
                    .actions((e) => {
                        let t = {
                            getPlaylists: (0, _.L3)(function* (t) {
                                let { page: a = 0, pageSize: i = 20 } = t,
                                    { playlistsResource: r, modelActionsLogger: l } = (0, _._$)(e);
                                if (e.loadingState === F.G.RESOLVE && e.pagesLoader.isPageNeedToLoad(a)) {
                                    e.pagesLoader.setPageState(a, F.G.PENDING);
                                    try {
                                        let t = a * i,
                                            l = e.playlistsData.slice(t, t + i),
                                            n = yield r.getPlaylists({ playlistIds: l.map((e) => ''.concat(e.uid, ':').concat(e.kind)), resumeStream: !1 }),
                                            s = { page: a, perPage: i, total: e.playlistsData.length },
                                            o = n.playlists.map(tb.j);
                                        e.pagesLoader.setItems(o, { page: a, pager: s });
                                    } catch (t) {
                                        (l.error(t),
                                            e.pagesLoader.setItems(null, { responseStatus: ir.F.ERROR, page: a }),
                                            t instanceof U.GX &&
                                                (t.statusCode === U.X1.NOT_FOUND || t.statusCode === U.X1.BAD_REQUEST) &&
                                                (e.errorStatusCode = U.X1.NOT_FOUND),
                                            e.loadingState !== F.G.IDLE && (e.loadingState = F.G.REJECT));
                                    }
                                }
                            }),
                            getData: (0, _.L3)(function* (a) {
                                let { id: i, page: r = 0, pageSize: l = 20 } = a,
                                    { childrenLandingResource: n, modelActionsLogger: s } = (0, _._$)(e);
                                if (e.loadingState !== F.G.PENDING)
                                    try {
                                        var o;
                                        e.loadingState = F.G.PENDING;
                                        let a = yield n.getEditorialPlaylist({ id: i });
                                        ((e.title = a.title),
                                            (e.playlistsData = (0, _.wg)((null != (o = a.entities) ? o : []).map((e) => ({ uid: e.uid, kind: e.kind })))),
                                            e.loadingState !== F.G.IDLE && (e.loadingState = F.G.RESOLVE),
                                            yield t.getPlaylists({ page: r, pageSize: l }));
                                    } catch (t) {
                                        (s.error(t),
                                            t instanceof U.GX &&
                                                (t.statusCode === U.X1.NOT_FOUND || t.statusCode === U.X1.BAD_REQUEST) &&
                                                (e.errorStatusCode = U.X1.NOT_FOUND),
                                            e.loadingState !== F.G.IDLE && (e.loadingState = F.G.REJECT));
                                    }
                            }),
                            reset() {
                                ((e.loadingState = F.G.IDLE), (e.title = null), e.pagesLoader.reset(), (e.playlistsData = (0, _.wg)([])), (e.errorStatusCode = null));
                            },
                        };
                        return t;
                    }),
                nm = _.gK.model('KidsPage', { landing: rq, kidsEditorialPlaylistSubpage: nc, kidsEditorialAlbumSubpage: nu }),
                ny = _.gK
                    .model('MainPageEntryPoint', { loadingState: _.gK.enumeration(Object.values(F.G)), content: _.gK.maybeNull(_.gK.frozen()) })
                    .views((e) => ({
                        get isNeededToLoad() {
                            return e.loadingState === F.G.IDLE;
                        },
                        get isEnabled() {
                            let { experiments: t } = (0, D.M)(e);
                            return t.checkExperiment(O.z.WebNextNewWaveEntryPoint, 'on');
                        },
                        get withEntryPointContent() {
                            var t, a, i;
                            let r = e.content;
                            return (
                                this.isEnabled &&
                                !!((null == r || null == (a = r.cover) || null == (t = a.image) ? void 0 : t.url) && (null == (i = r.action) ? void 0 : i.weblink))
                            );
                        },
                    }))
                    .actions((e) => {
                        let t = 0;
                        return {
                            checkIsAnimationPlayed(t) {
                                var a, i;
                                let { sessionStorage: r } = (0, _._$)(e);
                                return null != (i = null == (a = r.get(ni.c.MainPageEntryPointPlayedAnimations)) ? void 0 : a.includes(t)) && i;
                            },
                            markAnimationPlayed(t) {
                                var a;
                                let { sessionStorage: i } = (0, _._$)(e),
                                    r = null != (a = i.get(ni.c.MainPageEntryPointPlayedAnimations)) ? a : [];
                                r.includes(t) || i.set(ni.c.MainPageEntryPointPlayedAnimations, [...r, t]);
                            },
                            getData: (0, _.L3)(function* () {
                                if (e.loadingState === F.G.PENDING) return;
                                let a = ++t,
                                    { dynamicPagesResource: i, modelActionsLogger: r } = (0, _._$)(e);
                                ((e.content = null), (e.loadingState = F.G.PENDING));
                                try {
                                    let r = yield i.getMainPageCommunication();
                                    if (a !== t) return;
                                    ((e.content = r), (e.loadingState = F.G.RESOLVE));
                                } catch (i) {
                                    if (a !== t) return;
                                    (r.error(i), (e.loadingState = F.G.REJECT));
                                }
                            }),
                            reset() {
                                (t++, (e.content = null), (e.loadingState = F.G.IDLE));
                            },
                        };
                    }),
                np = _.gK.model('SpecialHeaderThemeOptions', { backgroundColor: _.gK.maybe(_.gK.string), textColor: _.gK.maybe(_.gK.string) }),
                nE = _.gK.model('SpecialHeader', { title: _.gK.string, url: _.gK.string, lightTheme: np, darkTheme: np }),
                nb = _.gK
                    .model('MainPage', { landing: rq, entryPoint: ny, specialHeaderLoadingState: _.gK.enumeration(Object.values(F.G)), specialHeader: _.gK.maybe(nE) })
                    .views((e) => ({
                        get isNewWaveTabEnabled() {
                            let { experiments: t } = (0, D.M)(e);
                            return t.checkExperiment(O.z.WebNextNewWaveTab, 'on') || t.checkExperiment(O.z.WebNextNewWaveTab, 'on1');
                        },
                        get withEntryPointButton() {
                            let { experiments: t } = (0, D.M)(e);
                            return e.entryPoint.withEntryPointContent || (!e.entryPoint.isEnabled && t.checkExperiment(O.z.WebNextNewWaveTabFeedbackForm, 'on'));
                        },
                    }))
                    .actions((e) => ({
                        getSpecialHeader: (0, _.L3)(function* () {
                            let { landingResource: t, modelActionsLogger: a } = (0, _._$)(e);
                            if (e.specialHeaderLoadingState !== F.G.PENDING)
                                try {
                                    e.specialHeaderLoadingState = F.G.PENDING;
                                    let a = yield t.getSpecialHeader();
                                    ((e.specialHeader = (0, _.wg)(
                                        ((e) => {
                                            var t, a, i, r, l, n;
                                            if ((null == (t = e.button) ? void 0 : t.title) && (null == (a = e.button.action) ? void 0 : a.weblink))
                                                return {
                                                    title: e.button.title,
                                                    url: e.button.action.weblink,
                                                    lightTheme: {
                                                        backgroundColor: null == (i = e.lightTheme) ? void 0 : i.buttonColor,
                                                        textColor: null == (r = e.lightTheme) ? void 0 : r.buttonTitleColor,
                                                    },
                                                    darkTheme: {
                                                        backgroundColor: null == (l = e.darkTheme) ? void 0 : l.buttonColor,
                                                        textColor: null == (n = e.darkTheme) ? void 0 : n.buttonTitleColor,
                                                    },
                                                };
                                        })(a),
                                    )),
                                        (e.specialHeaderLoadingState = F.G.RESOLVE));
                                } catch (t) {
                                    (a.error(t), (e.specialHeaderLoadingState = F.G.REJECT));
                                }
                        }),
                        reset() {
                            (e.entryPoint.reset(), (e.specialHeaderLoadingState = F.G.IDLE), (e.specialHeader = void 0));
                        },
                    })),
                nv = _.gK.model('NonMusicAlbumsPageItem', { id: _.gK.number, data: _.gK.maybeNull(eC.J) }),
                nS = _.gK
                    .compose(
                        _.gK.model('NonMusicAlbumsPage', {
                            errorStatusCode: _.gK.maybe(_.gK.number),
                            title: _.gK.maybeNull(_.gK.string),
                            albums: _.gK.maybeNull(_.gK.array(nv)),
                            requestsCount: _.gK.maybe(_.gK.number),
                        }),
                        ee.X,
                    )
                    .views((e) => {
                        let t = {
                            get isLoading() {
                                return e.isNeededToLoad || e.loadingState === F.G.PENDING;
                            },
                            get isNotFound() {
                                let t = e.errorStatusCode === U.X1.NOT_FOUND || e.errorStatusCode === U.X1.BAD_REQUEST;
                                return e.loadingState === F.G.REJECT && t;
                            },
                            get isSomethingWrong() {
                                return e.isRejected && !t.isNotFound;
                            },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        getEditorialAlbums: (0, _.L3)(function* (t) {
                            let { id: a } = t,
                                { nonMusicResource: i, modelActionsLogger: r } = (0, _._$)(e);
                            if (e.loadingState !== F.G.PENDING)
                                try {
                                    var l;
                                    e.loadingState = F.G.PENDING;
                                    let t = yield i.getEditorialAlbums({ id: a });
                                    ((e.title = t.title),
                                        (null == (l = t.entities) ? void 0 : l.length) && (e.albums = (0, _.wg)(t.entities.map((e) => ({ id: e })))),
                                        e.loadingState !== F.G.IDLE && (e.loadingState = F.G.RESOLVE));
                                } catch (t) {
                                    (r.error(t),
                                        t instanceof U.GX &&
                                            (t.statusCode === U.X1.NOT_FOUND || t.statusCode === U.X1.BAD_REQUEST) &&
                                            (e.errorStatusCode = U.X1.NOT_FOUND),
                                        e.loadingState !== F.G.IDLE && (e.loadingState = F.G.REJECT));
                                }
                        }),
                        getCategoryAlbums: (0, _.L3)(function* (t) {
                            let { id: a } = t,
                                { nonMusicResource: i, modelActionsLogger: r } = (0, _._$)(e);
                            if (e.loadingState !== F.G.PENDING)
                                try {
                                    var l;
                                    e.loadingState = F.G.PENDING;
                                    let t = yield i.getCategoryAlbums({ id: a });
                                    ((e.title = t.title),
                                        (null == (l = t.albums) ? void 0 : l.length) && (e.albums = (0, _.wg)(t.albums.map((e) => ({ id: e })))),
                                        e.loadingState !== F.G.IDLE && (e.loadingState = F.G.RESOLVE));
                                } catch (t) {
                                    (r.error(t),
                                        t instanceof U.GX &&
                                            (t.statusCode === U.X1.NOT_FOUND || t.statusCode === U.X1.BAD_REQUEST) &&
                                            (e.errorStatusCode = U.X1.NOT_FOUND),
                                        e.loadingState !== F.G.IDLE && (e.loadingState = F.G.REJECT));
                                }
                        }),
                        getAlbumsByRange: (0, _.L3)(function* (t, a) {
                            var i, r, l;
                            let { albumResource: n, modelActionsLogger: s } = (0, _._$)(e);
                            if (!(null == (i = e.albums) ? void 0 : i.length)) return null;
                            ((t = Math.max(0, t)), (a = Math.min(a, e.albums.length)));
                            let o = [];
                            for (let i = t; i <= a; i++)
                                (null == (r = e.albums[i]) ? void 0 : r.id) && !(null == (l = e.albums[i]) ? void 0 : l.data) && o.push(e.albums[i].id);
                            if (!o.length) return null;
                            try {
                                let t = yield n.getAlbums({ albumIds: o });
                                (null == t ||
                                    t.forEach((t) => {
                                        var a;
                                        null == (a = e.albums) ||
                                            a.forEach((a, i) => {
                                                var r;
                                                a.id === t.id && (null == (r = e.albums) ? void 0 : r[i]) && (e.albums[i].data = (0, eQ.p)(t));
                                            });
                                    }),
                                    e.requestsCount ? (e.requestsCount = e.requestsCount + 1) : (e.requestsCount = 1));
                            } catch (e) {
                                s.error(e);
                            }
                            return null;
                        }),
                        reset() {
                            ((e.loadingState = F.G.IDLE), (e.title = null), (e.albums = null), (e.requestsCount = 0));
                        },
                    })),
                nK = _.gK
                    .compose(
                        _.gK.model('NonMusicCategoryPlaylistsPage', {
                            errorStatusCode: _.gK.maybeNull(_.gK.number),
                            title: _.gK.maybeNull(_.gK.string),
                            playlistsData: _.gK.array(_.gK.model({ uid: _.gK.number, kind: _.gK.number })),
                            pagesLoader: (0, r1.I)(tM.$),
                        }),
                        ee.X,
                    )
                    .views((e) => {
                        let t = {
                            get isLoading() {
                                return e.isNeededToLoad || e.loadingState === F.G.PENDING;
                            },
                            get isNotFound() {
                                let t = e.errorStatusCode === U.X1.NOT_FOUND || e.errorStatusCode === U.X1.BAD_REQUEST,
                                    a = e.pagesLoader.isEmpty;
                                return (e.isRejected && t) || a;
                            },
                            get isSomethingWrong() {
                                return e.isRejected && !t.isNotFound;
                            },
                            get playlists() {
                                var a;
                                return null != (a = e.pagesLoader.items) ? a : [];
                            },
                        };
                        return t;
                    })
                    .actions((e) => {
                        let t = {
                            getPlaylists: (0, _.L3)(function* (t) {
                                let { page: a = 0, pageSize: i = 20 } = t,
                                    { playlistsResource: r, modelActionsLogger: l } = (0, _._$)(e);
                                if (e.loadingState === F.G.RESOLVE && e.pagesLoader.isPageNeedToLoad(a)) {
                                    e.pagesLoader.setPageState(a, F.G.PENDING);
                                    try {
                                        let t = a * i,
                                            l = e.playlistsData.slice(t, t + i),
                                            n = yield r.getPlaylists({ playlistIds: l.map((e) => ''.concat(e.uid, ':').concat(e.kind)), resumeStream: !1 }),
                                            s = { page: a, perPage: i, total: e.playlistsData.length },
                                            o = n.playlists.map(tb.j);
                                        e.pagesLoader.setItems(o, { page: a, pager: s });
                                    } catch (t) {
                                        (l.error(t),
                                            e.pagesLoader.setItems(null, { responseStatus: ir.F.ERROR, page: a }),
                                            t instanceof U.GX &&
                                                (t.statusCode === U.X1.NOT_FOUND || t.statusCode === U.X1.BAD_REQUEST) &&
                                                (e.errorStatusCode = U.X1.NOT_FOUND),
                                            e.loadingState !== F.G.IDLE && (e.loadingState = F.G.REJECT));
                                    }
                                }
                            }),
                            getData: (0, _.L3)(function* (a) {
                                let { categoryId: i, page: r = 0, pageSize: l = 20 } = a,
                                    { nonMusicResource: n, modelActionsLogger: s } = (0, _._$)(e);
                                if (e.loadingState !== F.G.PENDING)
                                    try {
                                        var o;
                                        e.loadingState = F.G.PENDING;
                                        let a = yield n.getPlaylists({ categoryId: i });
                                        ((e.title = a.title),
                                            (e.playlistsData = (0, _.wg)((null != (o = a.entities) ? o : []).map((e) => ({ uid: e.uid, kind: e.kind })))),
                                            e.loadingState !== F.G.IDLE && (e.loadingState = F.G.RESOLVE),
                                            yield t.getPlaylists({ page: r, pageSize: l }));
                                    } catch (t) {
                                        (s.error(t),
                                            t instanceof U.GX &&
                                                (t.statusCode === U.X1.NOT_FOUND || t.statusCode === U.X1.BAD_REQUEST) &&
                                                (e.errorStatusCode = U.X1.NOT_FOUND),
                                            e.loadingState !== F.G.IDLE && (e.loadingState = F.G.REJECT));
                                    }
                            }),
                            reset() {
                                (e.pagesLoader.reset(), (e.loadingState = F.G.IDLE), (e.title = null), (e.playlistsData = (0, _.wg)([])), (e.errorStatusCode = null));
                            },
                        };
                        return t;
                    }),
                nI = _.gK.model('NonMusicPage', { landing: rq, albums: nS, categoryPlaylistsSubpage: nK });
            var nL = a(96706);
            let nT = (e) => {
                    var t, a;
                    return (0, _.wg)({ ...(0, tb.j)(e), artists: null != (a = null == e || null == (t = e.artists) ? void 0 : t.map(li.d)) ? a : [] });
                },
                nh = (e) => e.map((e) => (0, ez.l)(e.id, e.albumId || void 0));
            var nN = (function (e) {
                    return (
                        (e.MAJOR = 'Major'),
                        (e.NAME = 'Название'),
                        (e.ARTISCS = 'Исполнители'),
                        (e.LINK = 'Ссылка'),
                        (e.ALBUM_ID = 'albumId'),
                        (e.TRACK_ID = 'trackId'),
                        e
                    );
                })({}),
                nA = (function (e) {
                    return ((e.MAJOR = 'major'), (e.NAME = 'name'), (e.ARTISCS = 'artists'), (e.LINK = 'link'), (e.ALBUM_ID = 'albumId'), (e.TRACK_ID = 'trackId'), e);
                })({});
            let nf = _.gK
                    .model('EditorFeature', {
                        shouldShowMajor: _.gK.boolean,
                        shouldShowGenre: _.gK.boolean,
                        shouldShowDuplicate: _.gK.boolean,
                        colorMajorMap: _.gK.map(_.gK.string),
                        duplicate: _.gK.map(_.gK.number),
                    })
                    .views((e) => {
                        let t = {
                            getNumberGroupTrackDuplicated(t) {
                                let { experiments: a } = (0, D.M)(e);
                                if (t && a.checkExperiment(O.z.WebEditorsFeatures, 'on')) return e.duplicate.get(String(t.id));
                            },
                            shouldHighlightDublicatedTrack: (a) => !!(e.shouldShowDuplicate && t.getNumberGroupTrackDuplicated(a)),
                            get sheetDataPlaylist() {
                                var a, i;
                                let { location: t, playlist: r } = (0, D.M)(e),
                                    l = 'https://'.concat(t.host, '.').concat(t.tld),
                                    n = {
                                        sheet: 'Playlist',
                                        columns: [
                                            { label: nN.MAJOR, value: nA.MAJOR },
                                            { label: nN.NAME, value: nA.NAME },
                                            { label: nN.ARTISCS, value: nA.ARTISCS },
                                            { label: nN.LINK, value: nA.LINK },
                                            { label: nN.ALBUM_ID, value: nA.ALBUM_ID },
                                            { label: nN.TRACK_ID, value: nA.TRACK_ID },
                                        ],
                                        content: r.items
                                            .filter((e) => e.data)
                                            .map((e) => {
                                                var t, a, i, r, n, s, o, d, g, u, c, m, y;
                                                let { href: p } = (0, h.no)(null != (d = null == (t = e.data) ? void 0 : t.url) ? d : '', { options: { host: l } }),
                                                    E = (null == (a = e.data) ? void 0 : a.url) ? p : '';
                                                return {
                                                    major: null != (g = null == (r = e.data) || null == (i = r.major) ? void 0 : i.name) ? g : '',
                                                    name: null != (u = null == (n = e.data) ? void 0 : n.title) ? u : '',
                                                    artists: null != (c = null == (s = e.data) ? void 0 : s.artists.map((e) => e.name).join(', ')) ? c : '',
                                                    link: E,
                                                    albumId: null != (m = e.albumId) ? m : '',
                                                    trackId: null != (y = null == (o = e.data) ? void 0 : o.id) ? y : '',
                                                };
                                            }),
                                    };
                                return {
                                    data: n,
                                    settings: {
                                        fileName:
                                            (null == (a = r.meta) ? void 0 : a.uid) && (null == (i = r.meta) ? void 0 : i.kind)
                                                ? '%'.concat(r.meta.uid, '%_%').concat(r.meta.kind, '%_to_text')
                                                : 'to_text',
                                    },
                                };
                            },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        exportToExcel: (0, _.L3)(function* () {
                            let { modelActionsLogger: t } = (0, _._$)(e);
                            try {
                                let t = yield Promise.all([a.e(714), a.e(8473), a.e(7748)]).then(a.t.bind(a, 37032, 23)),
                                    { data: i, settings: r } = e.sheetDataPlaylist;
                                if (0 === i.content.length) return ir.F.ERROR;
                                return (
                                    yield new Promise((e) => {
                                        t.default([i], r, () => e());
                                    }),
                                    ir.F.OK
                                );
                            } catch (e) {
                                return (t.error(e), ir.F.ERROR);
                            }
                        }),
                        getAllPlaylistItems: (0, _.L3)(function* (t) {
                            let { batchSize: a } = t,
                                { playlist: i } = (0, D.M)(e),
                                r = i.items.length - 1;
                            for (let e = 0; e < r; e += a) yield i.getTracksByRange({ startIndex: e, endIndex: Math.min(e + a, r) });
                        }),
                        getColorForMajor(t) {
                            let a = e.colorMajorMap.get(t);
                            if (a) return a;
                            let i = (function (e) {
                                    let t = 0;
                                    for (let a = 0; a < e.length; a++) t = e.charCodeAt(a) + ((t << 2) - t);
                                    return Math.abs(t % 360);
                                })(t),
                                r = 'hsl('.concat(i, ', 50%, 50%)');
                            return (e.colorMajorMap.set(t, r), r);
                        },
                        getDuplicates(t) {
                            let a = new Map();
                            t.forEach((e) => {
                                let t = a.get(e.id) || 0;
                                a.set(e.id, t + 1);
                            });
                            let i = 1;
                            a.forEach((t, a) => {
                                t > 1 && (e.duplicate.set(String(a), i), i++);
                            });
                        },
                        toggleShouldShowMajor() {
                            e.shouldShowMajor = !e.shouldShowMajor;
                        },
                        toggleShouldShowGenre() {
                            e.shouldShowGenre = !e.shouldShowGenre;
                        },
                        toggleShouldShowDuplicate() {
                            e.shouldShowDuplicate = !e.shouldShowDuplicate;
                        },
                        reset() {
                            ((e.shouldShowDuplicate = !1),
                                (e.shouldShowGenre = !1),
                                (e.shouldShowMajor = !1),
                                (e.colorMajorMap = (0, _.wg)({})),
                                (e.duplicate = (0, _.wg)({})));
                        },
                    })),
                nC = _.gK.model('PlaylistItem', {
                    id: _.gK.union(_.gK.string, _.gK.number),
                    albumId: _.gK.maybeNull(_.gK.union(_.gK.string, _.gK.number)),
                    key: _.gK.string,
                    data: _.gK.maybeNull(Z.v),
                    loadingState: _.gK.enumeration(Object.values(F.G)),
                }),
                nR = (e) => {
                    var t, a;
                    let i = (null == (t = e.tracks) ? void 0 : t.length)
                        ? null == (a = e.tracks)
                            ? void 0
                            : a.map((e, t) =>
                                  ((e, t) => {
                                      let [a, i] = e.split(':');
                                      return (0, _.wg)({ id: a || '', albumId: i || '', key: ''.concat(a, '-').concat(t), data: null, loadingState: F.G.IDLE });
                                  })(e, t),
                              )
                        : [];
                    return { id: e.id, name: e.name, tracks: (0, _.wg)(i) };
                },
                nk = _.gK.model('PlaylistFiltersItem', { id: _.gK.string, name: _.gK.string, tracks: _.gK.array(nC) }),
                nP = _.gK
                    .compose(
                        _.gK.model('PlaylistPageFilters', {
                            items: _.gK.maybeNull(_.gK.array(nk)),
                            activeFilter: _.gK.maybe(_.gK.string),
                            activeFilterName: _.gK.maybeNull(_.gK.string),
                        }),
                        ee.X,
                        w.p,
                    )
                    .views((e) => {
                        let t = {
                            get isShimmerVisible() {
                                return e.isRejected || e.isLoading;
                            },
                            get activeFilterIndex() {
                                var a;
                                let t = null == (a = e.items) ? void 0 : a.findIndex((t) => t.id === e.activeFilter);
                                return t && t > -1 ? t : 0;
                            },
                            get analyticsParamsActiveFilterIndex() {
                                return t.activeFilterIndex + 1;
                            },
                        };
                        return t;
                    })
                    .actions((e) => {
                        let t = {
                            getFilters: (0, _.L3)(function* () {
                                var a, i;
                                let { filtersResource: r, modelActionsLogger: l } = (0, _._$)(e),
                                    { sonataState: n, playlist: s } = (0, D.M)(e);
                                if (e.isLoading || !(null == (a = s.items) ? void 0 : a.length) || !s.isFiltersAvailable) return;
                                let o = s.items.map((e) => String((0, iK.V)(e.id, e.albumId))) || [];
                                try {
                                    e.loadingState = F.G.PENDING;
                                    let a = yield r.getTracksFilters({ trackIds: o });
                                    ((e.items = (0, _.wg)(
                                        ((e) => {
                                            let t = e.filters.map(nR);
                                            if (t.length < 3) return [];
                                            let a = t.find((e) => e.id === ro.Q.ALL);
                                            if (!a) return [];
                                            let i = t.filter((e) => e.tracks.length >= 8);
                                            return i.length < 2 ? [] : [a].concat(i.slice(0, 7));
                                        })(a),
                                    )),
                                        t.setActiveFilter(n.playlistFilter),
                                        t.getFilterName(n.playlistFilter || ro.Q.ALL));
                                    let l = null == (i = e.items) ? void 0 : i.find((t) => t.id === e.activeFilter);
                                    (l && (s.setItems(l.tracks), n.setUnloadedEntitiesData(nh(s.items))), (e.loadingState = F.G.RESOLVE));
                                } catch (t) {
                                    (l.error(t), (e.loadingState = F.G.REJECT));
                                }
                            }),
                            getFilterName: (0, _.L3)(function* (t) {
                                let { filtersResource: a, modelActionsLogger: i } = (0, _._$)(e),
                                    { playlist: r } = (0, D.M)(e);
                                if (r.isFiltersAvailable)
                                    try {
                                        e.activeFilterName = (yield a.getFilterName({ filterId: t })).name;
                                    } catch (e) {
                                        i.error(e);
                                    }
                            }),
                            handleFilterClick(a) {
                                if (!(0, _._n)(e)) return;
                                let { sonataState: i, playlist: r } = (0, D.M)(e);
                                (t.setActiveFilter(a.id),
                                    t.getFilterName(a.id),
                                    r.setItems(e.activeFilter ? a.tracks : r.initialItems),
                                    i.setUnloadedEntitiesData(nh(r.items)));
                            },
                            setActiveFilter(t) {
                                t !== ro.Q.ALL ? (e.activeFilter = t) : (e.activeFilter = void 0);
                            },
                            resetFilter() {
                                let { sonataState: a, playlist: i } = (0, D.M)(e);
                                (e.activeFilter && (i.setItems(i.initialItems), a.setUnloadedEntitiesData(nh(i.items))), t.reset());
                            },
                            reset() {
                                (e.destroyItems([e.items]), (e.loadingState = F.G.IDLE), (e.activeFilter = void 0), (e.activeFilterName = null));
                            },
                        };
                        return t;
                    }),
                n_ = _.gK
                    .compose(
                        _.gK.model('PlaylistPageSearch', {
                            errorStatusCode: _.gK.maybeNull(_.gK.number),
                            text: _.gK.string,
                            playlistTrackIds: _.gK.maybeNull(_.gK.array(_.gK.string)),
                            suggestedTrackIds: _.gK.maybeNull(_.gK.array(_.gK.string)),
                            additionTrackInProggress: _.gK.maybeNull(_.gK.string),
                            tracks: _.gK.maybeNull(_.gK.array(Z.v)),
                            isFocused: _.gK.optional(_.gK.boolean, !1),
                        }),
                        ee.X,
                    )
                    .views((e) => ({
                        get isLoading() {
                            return e.isNeededToLoad || e.loadingState === F.G.PENDING;
                        },
                        get hasText() {
                            return !!e.text.length;
                        },
                        get suggestedTracks() {
                            var t;
                            return null == (t = e.suggestedTrackIds)
                                ? void 0
                                : t.map((t) => {
                                      var a;
                                      return (null == (a = e.tracks) ? void 0 : a.find((e) => e.id === t)) || null;
                                  });
                        },
                        get playlistTracks() {
                            let t = [...(e.playlistTrackIds || [])];
                            return (
                                e.additionTrackInProggress && t.unshift(e.additionTrackInProggress),
                                null == t
                                    ? void 0
                                    : t.map((t) => {
                                          var a;
                                          return (
                                              (null == (a = e.tracks)
                                                  ? void 0
                                                  : a.find((e) => {
                                                        var a;
                                                        return (
                                                            ((null == (a = e.mainAlbum) ? void 0 : a.id) && t.includes(':')
                                                                ? ''.concat(e.id, ':').concat(e.mainAlbum.id)
                                                                : e.id) === t
                                                        );
                                                    })) || null
                                          );
                                      })
                            );
                        },
                    }))
                    .actions((e) => {
                        let t = {
                            getTracksMeta: (0, _.L3)(function* () {
                                let { tracksResource: t, modelActionsLogger: a } = (0, _._$)(e),
                                    i = [...(e.playlistTrackIds || [])].concat(e.suggestedTrackIds || []);
                                try {
                                    let a = yield t.getTracksMeta({ trackIds: i, removeDuplicates: !0, withProgress: !0 });
                                    ((e.tracks = (0, _.wg)(null == a ? void 0 : a.map((e) => (0, tl.v)(e)))),
                                        e.loadingState !== F.G.IDLE && (e.loadingState = F.G.RESOLVE));
                                } catch (e) {
                                    a.error(e);
                                }
                                return null;
                            }),
                            getTracks: (0, _.L3)(function* (a) {
                                let { uid: i, kind: r } = a,
                                    { searchPlaylistResource: l, modelActionsLogger: n } = (0, _._$)(e);
                                if (e.loadingState === F.G.PENDING || !e.hasText || !(0, _._n)(e)) return;
                                let { playlist: s } = (0, D.M)(e);
                                try {
                                    var o, d;
                                    let a;
                                    e.loadingState = F.G.PENDING;
                                    let { playlistTrackIds: n = [], suggestedTrackIds: g = [] } = yield l.getTrackIds({ uid: i, kind: r, part: e.text }),
                                        u =
                                            ((a = s.items),
                                            n.map((e) => {
                                                let t = a.find((t) => String(t.id) === e);
                                                return (null == t ? void 0 : t.albumId) ? ''.concat(e, ':').concat(t.albumId) : e;
                                            }));
                                    ((e.playlistTrackIds = (0, _.wg)(u)),
                                        (e.suggestedTrackIds = (0, _.wg)(g)),
                                        ((null == (o = e.playlistTrackIds) ? void 0 : o.length) || 0) + ((null == (d = e.suggestedTrackIds) ? void 0 : d.length) || 0) > 0
                                            ? t.getTracksMeta()
                                            : (e.loadingState = F.G.RESOLVE));
                                } catch (t) {
                                    (n.error(t),
                                        t instanceof U.GX &&
                                            (t.statusCode === U.X1.NOT_FOUND || t.statusCode === U.X1.BAD_REQUEST) &&
                                            (e.errorStatusCode = U.X1.NOT_FOUND),
                                        e.loadingState !== F.G.IDLE && (e.loadingState = F.G.REJECT));
                                }
                            }),
                            setText(t) {
                                e.text = t;
                            },
                            setIdleState() {
                                e.loadingState = F.G.IDLE;
                            },
                            setAdditionTrackAnimation(t) {
                                e.additionTrackInProggress = t;
                            },
                            setFocus() {
                                e.isFocused = !0;
                            },
                            removeFocus() {
                                e.isFocused = !1;
                            },
                            replaceAdditionTrackInProggress() {
                                if (e.additionTrackInProggress) {
                                    var t, a;
                                    (null == (t = e.playlistTrackIds) || t.unshift(e.additionTrackInProggress),
                                        (e.suggestedTrackIds = (0, _.wg)(null == (a = e.suggestedTrackIds) ? void 0 : a.filter((t) => t !== e.additionTrackInProggress))),
                                        (e.additionTrackInProggress = null));
                                }
                            },
                            resetAdditionTrackAnimation() {
                                e.additionTrackInProggress = null;
                            },
                            reset() {
                                ((e.playlistTrackIds = null),
                                    (e.suggestedTrackIds = null),
                                    (e.additionTrackInProggress = null),
                                    (e.tracks = null),
                                    (e.loadingState = F.G.IDLE),
                                    (e.isFocused = !1));
                            },
                        };
                        return t;
                    }),
                nD = _.gK
                    .compose(
                        _.gK.model('PlaylistPage', {
                            uuid: _.gK.maybeNull(_.gK.string),
                            meta: _.gK.maybeNull(lX),
                            items: _.gK.array(nC),
                            errorStatusCode: _.gK.maybeNull(_.gK.number),
                            similarPlaylists: _.gK.array(ex.I),
                            initialItems: _.gK.array(nC),
                            shouldShowTrailerOnboarding: _.gK.maybeNull(_.gK.boolean),
                            editorFeature: nf,
                            search: n_,
                            filters: nP,
                            similarEntities: eq,
                        }),
                        eB,
                        ee.X,
                    )
                    .views((e) => {
                        let t = {
                            getUrl(t) {
                                if (!e.uuid) return '';
                                let { href: a } = (0, ek.u)('/playlists/:playlistUuid', { params: { playlistUuid: e.uuid }, query: t });
                                return a;
                            },
                            get isLoading() {
                                return e.isNeededToLoad || e.loadingState === F.G.PENDING;
                            },
                            get isDisabled() {
                                var a;
                                return e.isResolved && (0 === e.items.length || !(null == (a = e.meta) ? void 0 : a.isAvailable));
                            },
                            get isNotFound() {
                                return e.isRejected && e.errorStatusCode === U.X1.NOT_FOUND;
                            },
                            get hasSimilarPlaylists() {
                                return t.isLoading || e.similarPlaylists.length > 0;
                            },
                            get isEmptyPlaylist() {
                                return e.isResolved && 0 === e.items.length;
                            },
                            get playbackEntitiesData() {
                                return nh(e.items);
                            },
                            get artistRecommendationsPromoImpId() {
                                let { experiments: t } = (0, D.M)(e);
                                return er(t, O.z.WebNextPlaylistImpulseBanner);
                            },
                            get isSimilarEntitiesEnabled() {
                                let { experiments: t } = (0, D.M)(e);
                                return t.checkExperiment(O.z.WebNextWaveAgentExperiment, 'on');
                            },
                            get isArtistRecommendationsPromoAllowed() {
                                var i;
                                return !!(e.isResolved && !(null == (i = e.meta) ? void 0 : i.isOwnPlaylist) && void 0 !== t.artistRecommendationsPromoImpId);
                            },
                            get hasSimilarEntities() {
                                var r;
                                return !!(
                                    t.isSimilarEntitiesEnabled &&
                                    e.similarEntities.isLoaded &&
                                    (null == (r = e.similarEntities.data) ? void 0 : r.items) &&
                                    e.similarEntities.data.items.length > 0
                                );
                            },
                            get contextMeta() {
                                var l, n, s, o, d, g, u, c, m, y;
                                return {
                                    isAvailable: null == (l = e.meta) ? void 0 : l.isAvailable,
                                    id: e.meta.id,
                                    uid: null == (n = e.meta) ? void 0 : n.uid,
                                    uuid: e.meta.uuid,
                                    kind: null == (s = e.meta) ? void 0 : s.kind,
                                    title: null == (o = e.meta) ? void 0 : o.title,
                                    coverUri: null == (d = e.meta) ? void 0 : d.coverUri,
                                    likesCount: null == (g = e.meta) ? void 0 : g.likesCount,
                                    averageColor: null == (u = e.meta) ? void 0 : u.averageColor,
                                    owner: null == (c = e.meta) ? void 0 : c.owner,
                                    description: null == (m = e.meta) ? void 0 : m.description,
                                    modified: null == (y = e.meta) ? void 0 : y.modified,
                                };
                            },
                            get isDragAndDropEnabled() {
                                var p;
                                if (!(0, _._n)(e)) return !1;
                                let { ugcUploadCenter: t } = (0, D.M)(e);
                                return !!(
                                    (null == (p = e.meta) ? void 0 : p.canUserChange) &&
                                    (e.items.length > 1 || t.getUploadingTracksByPlaylistKind(e.meta.kind).length > 0)
                                );
                            },
                            get itemsKeys() {
                                return e.items.map((e) => e.key);
                            },
                            get isFavouritePlaylist() {
                                var E;
                                return (null == (E = e.meta) ? void 0 : E.kind) === rd.j.LIKE;
                            },
                            get enableVariousAutoFlow() {
                                return !!e.filters.activeFilter;
                            },
                            get trackIds() {
                                return e.initialItems.map((e) => String((0, iK.V)(e.id, e.albumId)));
                            },
                            get isRewind2024Playlist() {
                                var b;
                                return (null == (b = e.meta) ? void 0 : b.generatedPlaylistType) === 'rewind2024';
                            },
                            get areAllTracksUploaded() {
                                return e.items.every((e) => e.loadingState === F.G.RESOLVE);
                            },
                            get shouldShowEmptyBlock() {
                                var v, S;
                                if (!(0, _._n)(e)) return !1;
                                let { ugcUploadCenter: a } = (0, D.M)(e),
                                    i = !!(null == (v = e.meta) ? void 0 : v.isOwnPlaylist),
                                    r = !!((null == (S = e.meta) ? void 0 : S.kind) && a.getUploadingTracksByPlaylistKind(e.meta.kind).length),
                                    l = !!e.search.hasText;
                                return t.isEmptyPlaylist && i && !r && !l;
                            },
                            get virtualListItemsCount() {
                                var K, I;
                                if (e.search.hasText) return 0;
                                return null != (I = null == (K = e.items) ? void 0 : K.length) ? I : 0;
                            },
                            get isFiltersAvailable() {
                                var L;
                                let { experiments: a } = (0, D.M)(e);
                                return !!(
                                    t.isFavouritePlaylist &&
                                    (null == (L = e.meta) ? void 0 : L.isOwnPlaylist) &&
                                    !a.checkExperiment(O.z.WebNextPlaylistFiltersDegradation, 'on')
                                );
                            },
                            get itemsForCopy() {
                                var T;
                                return null == (T = e.items) ? void 0 : T.map((e) => ({ id: String(e.id), albumId: e.albumId ? Number(e.albumId) : void 0 }));
                            },
                        };
                        return t;
                    })
                    .actions((e) => {
                        let t = {
                            afterAttach() {
                                (0, _.LF)(
                                    e,
                                    (0, nL.mJ)(
                                        () => e.isFiltersAvailable,
                                        (t) => {
                                            t || e.filters.resetFilter();
                                        },
                                    ),
                                );
                            },
                            getTracksByRange: (0, _.L3)(function* (t) {
                                var a, i;
                                let { startIndex: r, endIndex: l } = t,
                                    { tracksResource: n, modelActionsLogger: s } = (0, _._$)(e);
                                if (!(null == (a = e.meta) ? void 0 : a.uid) || !(null == (i = e.meta) ? void 0 : i.kind)) return null;
                                ((r = Math.max(0, r)), (l = Math.min(l, e.items.length)));
                                let o = ((e, t) => {
                                    let { startIndex: a, endIndex: i } = t,
                                        r = [];
                                    for (let t = a; t <= i; t++) {
                                        var l, n;
                                        ((null == (l = e[t]) ? void 0 : l.loadingState) === F.G.IDLE || (null == (n = e[t]) ? void 0 : n.loadingState) === F.G.REJECT) &&
                                            r.push(t);
                                    }
                                    return r;
                                })(e.items, { startIndex: r, endIndex: l });
                                try {
                                    let t,
                                        a =
                                            ((t = e.items),
                                            o.map((e) => {
                                                let a = t[e];
                                                return (null == a ? void 0 : a.albumId) ? ''.concat(a.id, ':').concat(a.albumId) : String(null == a ? void 0 : a.id);
                                            }));
                                    if (!a.length) return null;
                                    o.forEach((t) => {
                                        let a = e.items[t];
                                        a && (a.loadingState = F.G.PENDING);
                                    });
                                    let i = yield n.getTracksMeta({ trackIds: a, withProgress: !0 });
                                    o.forEach((t, a) => {
                                        let r = null == i ? void 0 : i[a];
                                        if (e.items[t] && r) {
                                            var l, n;
                                            e.items[t] = {
                                                id: r.id,
                                                albumId: (null == (n = r.albums) || null == (l = n[0]) ? void 0 : l.id) || null,
                                                key: ''.concat(r.id, '-').concat(t),
                                                data: (0, tl.v)(r),
                                                loadingState: F.G.RESOLVE,
                                            };
                                        }
                                    });
                                } catch (t) {
                                    (s.error(t),
                                        o.forEach((t) => {
                                            let a = e.items[t];
                                            a && (a.loadingState = F.G.REJECT);
                                        }));
                                }
                                return null;
                            }),
                            updateData: (0, _.L3)(function* (a) {
                                var i, r;
                                if ((null == a ? void 0 : a.error) === 'not-found') return ((e.errorStatusCode = U.X1.NOT_FOUND), (e.loadingState = F.G.REJECT), null);
                                let { sonataState: l, playlist: n, experiments: s, user: o } = (0, D.M)(e);
                                return (
                                    (e.similarPlaylists = (0, _.wg)(null == (i = a.similarPlaylists) ? void 0 : i.map(nT))),
                                    (e.meta = (0, lU.Z)(a)),
                                    (null == (r = e.meta) ? void 0 : r.isOwnFavouritePlaylist) && (e.meta.visibility = o.settings.userMusicVisibility),
                                    (e.items = (0, _.wg)(
                                        a.tracks.map((e, t) => ({
                                            id: String(e.id),
                                            albumId: e.albumId || null,
                                            key: ''.concat(e.id, '-').concat(t),
                                            loadingState: F.G.IDLE,
                                        })),
                                    )),
                                    (e.initialItems = (0, nL.HO)(e.items)),
                                    l.setUnloadedEntitiesData(nh(e.items)),
                                    (null == s ? void 0 : s.checkExperiment(O.z.WebEditorsFeatures, 'on')) && n.editorFeature.getDuplicates(e.items),
                                    yield t.getTracksByRange({ startIndex: 0, endIndex: 10 })
                                );
                            }),
                            getPlaylistByUserIdAndKind: (0, _.L3)(function* (a) {
                                let { userId: i, playlistKind: r, resumeStream: l = !1, trackMetaType: n, preloadedPlaylist: s } = a,
                                    { usersResource: o, modelActionsLogger: d } = (0, _._$)(e);
                                if (e.loadingState !== F.G.PENDING)
                                    try {
                                        e.loadingState = F.G.PENDING;
                                        let a = s;
                                        if (
                                            (a || (a = yield o.getPlaylistWithTracksIds({ userId: i, playlistKind: r, resumeStream: l, trackMetaType: n })),
                                            (e.uuid = null == a ? void 0 : a.playlistUuid),
                                            'string' != typeof a.playlistUuid)
                                        ) {
                                            ((e.errorStatusCode = U.X1.NOT_FOUND), (e.loadingState = F.G.REJECT));
                                            return;
                                        }
                                        (yield t.updateData(a), (e.loadingState = F.G.RESOLVE));
                                    } catch (t) {
                                        (d.error(t),
                                            t instanceof U.GX &&
                                                (t.statusCode === U.X1.NOT_FOUND || t.statusCode === U.X1.BAD_REQUEST) &&
                                                (e.errorStatusCode = U.X1.NOT_FOUND),
                                            (e.loadingState = F.G.REJECT));
                                    }
                            }),
                            getPlaylistByUuid: (0, _.L3)(function* (a) {
                                let { playlistUuid: i, richTracks: r = !1, resumeStream: l = !1, preloadedPlaylist: n } = a,
                                    { playlistResource: s, modelActionsLogger: o } = (0, _._$)(e);
                                if (((e.uuid = i), e.loadingState !== F.G.PENDING))
                                    try {
                                        e.loadingState = F.G.PENDING;
                                        let a = n;
                                        (a || (a = yield s.getPlaylist({ playlistUuid: i, resumeStream: l, richTracks: r })),
                                            yield t.updateData(a),
                                            e.loadingState !== F.G.IDLE && (e.loadingState = F.G.RESOLVE));
                                    } catch (t) {
                                        (o.error(t),
                                            t instanceof U.GX &&
                                                (t.statusCode === U.X1.NOT_FOUND || t.statusCode === U.X1.BAD_REQUEST) &&
                                                (e.errorStatusCode = U.X1.NOT_FOUND),
                                            e.loadingState !== F.G.IDLE && (e.loadingState = F.G.REJECT));
                                    }
                            }),
                            getSimilarEntities: (0, _.L3)(function* (t) {
                                let { playlistResource: a, modelActionsLogger: i } = (0, _._$)(e);
                                if (!e.similarEntities.isLoading)
                                    try {
                                        e.similarEntities.loadingState = eE.PENDING;
                                        let i = yield a.getSimilarEntities(t);
                                        ((e.similarEntities.data = ep(i)), (e.similarEntities.loadingState = eE.RESOLVE));
                                    } catch (t) {
                                        (i.error(t), (e.similarEntities.loadingState = eE.REJECT));
                                    }
                            }),
                            updatePlaylistTrackByUuid: (0, _.L3)(function* (a) {
                                let { playlistUuid: i, richTracks: r = !1, resumeStream: l = !1 } = a,
                                    { playlistResource: n, modelActionsLogger: s } = (0, _._$)(e);
                                e.uuid = i;
                                try {
                                    let a = yield n.getPlaylist({ playlistUuid: i, resumeStream: l, richTracks: r }),
                                        s = [];
                                    if (
                                        ((e.items = (0, _.wg)(
                                            a.tracks.map((t, a) => {
                                                var i, r;
                                                let l = String(t.id),
                                                    n = t.albumId || null;
                                                return l === (null == (i = e.items[a]) ? void 0 : i.id) && n === (null == (r = e.items[a]) ? void 0 : r.albumId)
                                                    ? e.items[a]
                                                    : (s.push(a),
                                                      { id: String(t.id), albumId: t.albumId || null, key: ''.concat(t.id, '-').concat(a), loadingState: F.G.IDLE });
                                            }),
                                        )),
                                        e.meta && ((e.meta.modified = a.modified), (e.meta.revision = a.revision), s.length))
                                    ) {
                                        let e = Math.min(...s),
                                            a = Math.max(...s);
                                        t.getTracksByRange({ startIndex: e, endIndex: a });
                                    }
                                    if ((e.loadingState !== F.G.IDLE && (e.loadingState = F.G.RESOLVE), (0, _._n)(e))) {
                                        let { sonataState: t } = (0, D.M)(e);
                                        t.setUnloadedEntitiesData(nh(e.items));
                                    }
                                } catch (t) {
                                    (s.error(t),
                                        t instanceof U.GX &&
                                            (t.statusCode === U.X1.NOT_FOUND || t.statusCode === U.X1.BAD_REQUEST) &&
                                            (e.errorStatusCode = U.X1.NOT_FOUND),
                                        e.loadingState !== F.G.IDLE && (e.loadingState = F.G.REJECT));
                                }
                            }),
                            moveTrack(t, a) {
                                let i = (0, nL.HO)(e.items[t]);
                                if (
                                    !(t < 0) &&
                                    !(a < 0) &&
                                    !(t >= e.items.length) &&
                                    !(a >= e.items.length) &&
                                    i &&
                                    (e.items.splice(t, 1), e.items.splice(a, 0, i), (0, _._n)(e))
                                ) {
                                    let { sonataState: t } = (0, D.M)(e);
                                    t.setUnloadedEntitiesData(nh(e.items));
                                }
                            },
                            removeTracksFromItems(t, a) {
                                if ((e.items.splice(t, a), (0, _._n)(e))) {
                                    let { sonataState: t } = (0, D.M)(e);
                                    t.setUnloadedEntitiesData(nh(e.items));
                                }
                            },
                            setItems(t) {
                                e.items = (0, _.wg)((0, nL.HO)(t));
                            },
                            setShouldShowTrailerOnboarding(t) {
                                e.shouldShowTrailerOnboarding = t;
                            },
                            reset() {
                                let { sonataState: t } = (0, D.M)(e);
                                (t.resetUnloadedEntitiesData(),
                                    (e.uuid = null),
                                    (e.loadingState = F.G.IDLE),
                                    (e.errorStatusCode = null),
                                    (e.shouldShowTrailerOnboarding = null),
                                    (e.similarEntities.data = void 0),
                                    (e.similarEntities.loadingState = eE.IDLE),
                                    e.resetArtistRecommendationsPromo(),
                                    e.search.setText(''),
                                    e.search.reset(),
                                    e.filters.reset(),
                                    e.destroyItems([e.meta, e.items, e.initialItems, e.similarPlaylists]));
                            },
                            refresh() {
                                var a, i;
                                (null == (a = e.meta) ? void 0 : a.uuid) &&
                                    t.getPlaylistByUuid({ playlistUuid: null == (i = e.meta) ? void 0 : i.uuid, resumeStream: !1 });
                            },
                            refreshTracks() {
                                var a, i;
                                (null == (a = e.meta) ? void 0 : a.uuid) &&
                                    t.updatePlaylistTrackByUuid({ playlistUuid: null == (i = e.meta) ? void 0 : i.uuid, resumeStream: !1 });
                            },
                        };
                        return t;
                    });
            var nO = a(41427),
                nw = a(65208),
                nG = a(66564);
            let nM = _.gK.model('SearchFilter', { id: _.gK.string, displayName: _.gK.string });
            var nU = a(14661),
                nB = a(45923);
            let nV = _.gK.model('Ugc'),
                nF = _.gK.compose(Z.v, nV).named('UgcTrack'),
                nx = _.gK.model('SearchAlbum', { type: _.gK.literal(nU.n.ALBUM), data: eC.J }),
                nj = _.gK.model('SearchPlaylist', { type: _.gK.literal(nU.n.PLAYLIST), data: ex.I }),
                nW = _.gK.model('SearchArtist', { type: _.gK.literal(nU.n.ARTIST), data: eR.P }),
                nX = _.gK.model('SearchUgcTrack', { type: _.gK.literal(nU.n.UGC_TRACK), data: nF }),
                n$ = _.gK.model('SearchTrack', { type: _.gK.literal(nU.n.TRACK), data: Z.v }),
                nY = _.gK.model('SearchVibe', { type: _.gK.literal(nU.n.WAVE), data: eX.G }),
                nJ = _.gK.model('SearchPodcast', { type: _.gK.literal(nU.n.PODCAST), data: eC.J }),
                nq = _.gK.model('SearchPodcastEpisode', { type: _.gK.literal(nU.n.PODCAST_EPISODE), data: Z.v }),
                nH = _.gK.model('SearchClip', { type: _.gK.literal(nU.n.CLIP), data: af }),
                nz = _.gK.model('SearchConcert', { type: _.gK.literal(nU.n.CONCERT), data: aE.a }),
                nQ = _.gK.union(nx, nj, nW, n$, nX, nY, nJ, nq, nH, nz),
                nZ = _.gK.model('SearchBestVibe', { type: _.gK.literal(nB.r.WAVE), data: eX.G }),
                n0 = _.gK.model('SearchBestPlaylist', { type: _.gK.literal(nB.r.PLAYLIST), data: ex.I }),
                n1 = _.gK.model('SearchBestArtist', { type: _.gK.literal(nB.r.ARTIST), data: eR.P }),
                n3 = _.gK.model('SearchBestPresave', { type: _.gK.literal(nB.r.UPCOMING), data: tP }),
                n2 = _.gK.model('SearchBestAlbum', { type: _.gK.literal(nB.r.ALBUM), data: eC.J }),
                n5 = _.gK.model('SearchBestRecentRelease', { type: _.gK.literal(nB.r.RECENT_RELEASE), data: eC.J }),
                n6 = _.gK.model('SearchBestConcert', { type: _.gK.literal(nB.r.CONCERT), data: aE.a }),
                n8 = _.gK.model('SearchBestTrack', { type: _.gK.literal(nB.r.TRACK), data: Z.v }),
                n4 = _.gK.model('SearchBestPodcast', { type: _.gK.literal(nB.r.PODCAST), data: eC.J }),
                n7 = _.gK.model('SearchBestPodcastEpisode', { type: _.gK.literal(nB.r.PODCAST_EPISODE), data: Z.v }),
                n9 = _.gK.model('SearchBestOverview', { type: _.gK.literal(nB.r.OVERVIEW), data: iC }),
                se = _.gK.model('SearchBestNonMusic', { type: _.gK.literal(nB.r.NON_MUSIC), data: eC.J }),
                st = _.gK.model('SearchBestClip', { type: _.gK.literal(nB.r.CLIP), data: af }),
                sa = _.gK.model('SearchBestBookChapter', { type: _.gK.literal(nB.r.BOOK_CHAPTER), data: Z.v }),
                si = _.gK.union(n2, n5, nZ, n1, n6, n8, n4, n7, n9, se, n3, n0, st, sa),
                sr = [nU.n.ARTIST, nU.n.ALBUM, nU.n.TRACK, nU.n.PLAYLIST, nU.n.WAVE, nU.n.PODCAST, nU.n.PODCAST_EPISODE],
                sl = [nU.n.ALBUM, nU.n.ARTIST, nU.n.PLAYLIST, nU.n.TRACK, nU.n.UGC_TRACK, nU.n.WAVE, nU.n.PODCAST, nU.n.PODCAST_EPISODE, nU.n.CLIP, nU.n.CONCERT],
                sn = (e) => {
                    var t, a;
                    return (0, _.wg)({ ...(0, tl.v)(e), artists: null != (a = null == e || null == (t = e.artists) ? void 0 : t.map(li.d)) ? a : [] });
                };
            var ss = a(93512);
            let so = (e) => {
                    var t;
                    let { wave: a } = e;
                    return (0, _.wg)({
                        title: a.title,
                        description: a.subTitle,
                        seeds: null != (t = a.seeds) ? t : [''.concat(a.id.type, ':').concat(a.id.tag)],
                        backgroundColor: a.color,
                        imageUrl: a.image,
                        agent: (0, ss.K)(a.agent),
                    });
                },
                sd = (e) => {
                    let { type: t } = e;
                    switch (t) {
                        case nU.n.UGC_TRACK:
                            return { type: t, data: sn(e.track) };
                        case nU.n.TRACK:
                            return { type: t, data: (0, tl.v)(e.track) };
                        case nU.n.ARTIST:
                            return { type: t, data: (0, li.d)(e.artist) };
                        case nU.n.PLAYLIST:
                            return { type: t, data: nT({ ...e.playlist, artists: [] }) };
                        case nU.n.ALBUM:
                            return { type: t, data: (0, eQ.p)(e.album) };
                        case nU.n.WAVE:
                            return { type: t, data: so(e) };
                        case nU.n.PODCAST:
                            return { type: t, data: (0, eQ.p)(e.podcast) };
                        case nU.n.PODCAST_EPISODE:
                            return { type: t, data: (0, tl.v)(e.podcast_episode) };
                        default:
                            return null;
                    }
                };
            (s || (s = {})).QUERY_TO_VIBE = 'q2v_wave';
            let sg = _.gK.compose(_.gK.model('SearchHistoryPage', { items: _.gK.array(nQ) }), w.p, ee.X).actions((e) => ({
                    reset() {
                        e.destroyItems([e.items]);
                    },
                })),
                su = _.gK
                    .model('SearchHistory', { loadingState: _.gK.enumeration(Object.values(F.G)), shouldUpdateHistory: _.gK.optional(_.gK.boolean, !1) })
                    .views((e) => ({
                        get hasCleared() {
                            return e.loadingState === F.G.RESOLVE;
                        },
                    }))
                    .actions((e) => ({
                        setShouldUpdateHistory(t) {
                            e.shouldUpdateHistory = t;
                        },
                        clear: (0, _.L3)(function* () {
                            if (!(0, _._n)(e)) return;
                            let { user: t } = (0, D.M)(e),
                                { usersResource: a, modelActionsLogger: i } = (0, _._$)(e);
                            if (e.loadingState !== F.G.PENDING && t.account.data.uid)
                                try {
                                    ((e.loadingState = F.G.PENDING), yield a.clearSearchHistory({ userId: t.account.data.uid }), (e.loadingState = F.G.RESOLVE));
                                } catch (t) {
                                    (i.error(t), (e.loadingState = F.G.REJECT));
                                }
                        }),
                        reset() {
                            e.loadingState = F.G.IDLE;
                        },
                    })),
                sc = _.gK
                    .compose(
                        _.gK.model('SearchPage', {
                            searchCorrectedText: _.gK.maybeNull(_.gK.string),
                            searchRequestId: _.gK.optional(_.gK.string, ''),
                            bestResults: _.gK.array(si),
                            historyPage: sg,
                            mixes: nw.Y,
                            landing: rq,
                            history: su,
                            filters: _.gK.maybeNull(_.gK.array(nM)),
                            pagesLoader: (0, r1.I)(nQ, { useAppendMode: !0 }),
                            q2vResults: _.gK.array(eX.G),
                        }),
                        w.p,
                        ee.X,
                    )
                    .views((e) => ({
                        get isHistoryShimmerVisible() {
                            return e.historyPage.isLoading || e.historyPage.isRejected;
                        },
                        get isHistoryLoading() {
                            return e.historyPage.isLoading;
                        },
                        get isHistoryReady() {
                            return e.historyPage.isNeededToLoad;
                        },
                        get isEmptyHistory() {
                            return !e.historyPage.items.length && e.historyPage.isResolved;
                        },
                        get isShimmerVisible() {
                            return e.isLoading || e.isRejected;
                        },
                        get isEmpty() {
                            return e.pagesLoader.isSomePageResolved && e.pagesLoader.isEmpty && 0 === e.bestResults.length && 0 === e.q2vResults.length;
                        },
                        filterPosition(t) {
                            var a, i;
                            return (null != (i = null == (a = e.filters) ? void 0 : a.findIndex((e) => e.id === t)) ? i : 0) + 1;
                        },
                    }))
                    .actions((e) => {
                        let t = new Map(),
                            a = new Set(),
                            i = (e, i) => {
                                e.forEach((e) => {
                                    let { feedback: r, key: l } = e;
                                    (a.delete(l), i && t.get(l) === r && t.delete(l));
                                });
                            };
                        return {
                            getSearchResults: (0, _.L3)(function* (t) {
                                let { text: a, filter: i, page: r = 0 } = t;
                                if (r > 0 && !e.pagesLoader.isPageNeedToLoad(r)) return;
                                let { searchResource: l } = (0, _._$)(e),
                                    {
                                        settings: { isMobile: n },
                                        experiments: o,
                                        concerts: d,
                                    } = (0, D.M)(e),
                                    g = !o.checkExperiment(O.z.WebNextProductWithoutRecommendation, 'on'),
                                    u = o.checkExperiment(O.z.WebNextSearchConcerts, 'on'),
                                    c = i === nO.$.TOP,
                                    m = d.concertsLocationForRequest;
                                try {
                                    var y, p;
                                    ((e.loadingState = F.G.PENDING), e.pagesLoader.setPageState(r, F.G.PENDING));
                                    let t = yield l.getInstantMixedSearch({
                                        text: a,
                                        type: ((e, t) => {
                                            let { withClips: a, withConcerts: i, withWaves: r } = t,
                                                l = [...sl];
                                            return (
                                                e === nO.$.TOP && (l = l.filter((e) => e !== nU.n.UGC_TRACK)),
                                                a || (l = l.filter((e) => e !== nU.n.CLIP)),
                                                i || (l = l.filter((e) => e !== nU.n.CONCERT)),
                                                r || (l = l.filter((e) => e !== nU.n.WAVE)),
                                                l
                                            );
                                        })(i, { withClips: !n, withConcerts: u, withWaves: g }),
                                        filter: c ? void 0 : i,
                                        withLikesCount: !0,
                                        page: r,
                                        pageSize: nG.k,
                                        withBestResults: c,
                                        locations: m,
                                    });
                                    t.misspellResult && (e.searchCorrectedText = t.misspellResult);
                                    let o = [];
                                    (t.results &&
                                        t.results.length > 0 &&
                                        (o = t.results.map((e) => {
                                            switch (e.type) {
                                                case nU.n.ALBUM:
                                                    return { type: nU.n.ALBUM, data: (0, eQ.p)(e.album) };
                                                case nU.n.ARTIST:
                                                    return { type: nU.n.ARTIST, data: (0, li.d)(e.artist) };
                                                case nU.n.PLAYLIST:
                                                    return { type: nU.n.PLAYLIST, data: nT({ ...e.playlist, artists: [] }) };
                                                case nU.n.UGC_TRACK:
                                                    return { type: nU.n.UGC_TRACK, data: sn(e.track) };
                                                case nU.n.TRACK:
                                                    return { type: nU.n.TRACK, data: (0, tl.v)(e.track) };
                                                case nU.n.WAVE:
                                                    return { type: nU.n.WAVE, data: so(e) };
                                                case nU.n.PODCAST:
                                                    return { type: nU.n.PODCAST, data: (0, eQ.p)(e.podcast) };
                                                case nU.n.CLIP:
                                                    return { type: nU.n.CLIP, data: lS(e.clip) };
                                                case nU.n.PODCAST_EPISODE:
                                                    return { type: nU.n.PODCAST_EPISODE, data: (0, tl.v)(e.podcast_episode) };
                                                case nU.n.CONCERT:
                                                    return { type: nU.n.CONCERT, data: (0, tr.h)(e.concert.concert, e.concert.minPrice) };
                                            }
                                        })),
                                        (e.searchRequestId = t.searchRequestId),
                                        t.bestResults &&
                                            t.bestResults.length > 0 &&
                                            (e.bestResults = (0, _.wg)(
                                                t.bestResults
                                                    .map((e) => {
                                                        switch (e.type) {
                                                            case nB.r.ALBUM:
                                                                return {
                                                                    type: nB.r.ALBUM,
                                                                    data: (0, en.s)({
                                                                        album: e.best_result_album.album,
                                                                        artists: e.best_result_album.artists,
                                                                        trailer: e.best_result_album.trailer,
                                                                    }),
                                                                };
                                                            case nB.r.PLAYLIST:
                                                                return {
                                                                    type: nB.r.PLAYLIST,
                                                                    data: (0, eg.b)({
                                                                        playlist: e.best_result_playlist.playlist,
                                                                        likesCount: e.best_result_playlist.likesCount,
                                                                        tracksCount: e.best_result_playlist.trackCount,
                                                                        trailer: e.best_result_playlist.trailer,
                                                                    }),
                                                                };
                                                            case nB.r.RECENT_RELEASE:
                                                                return {
                                                                    type: nB.r.RECENT_RELEASE,
                                                                    data: (0, en.s)({
                                                                        album: e.best_result_recent_release.album,
                                                                        artists: e.best_result_recent_release.artists,
                                                                        trailer: e.best_result_recent_release.trailer,
                                                                    }),
                                                                };
                                                            case nB.r.WAVE:
                                                                return { type: nB.r.WAVE, data: (0, tZ.e)(e.best_result_wave) };
                                                            case nB.r.ARTIST:
                                                                return {
                                                                    type: nB.r.ARTIST,
                                                                    data: (0, eo.a)({
                                                                        artist: e.best_result_artist.artist,
                                                                        trailer: e.best_result_artist.trailer,
                                                                        likesCount: e.best_result_artist.likesCount,
                                                                    }),
                                                                };
                                                            case nB.r.UPCOMING:
                                                                return { type: nB.r.UPCOMING, data: tu(e.best_result_upcoming) };
                                                            case nB.r.CONCERT:
                                                                return { type: nB.r.CONCERT, data: r7(e.best_result_concert) };
                                                            case nB.r.PODCAST:
                                                                return {
                                                                    type: nB.r.PODCAST,
                                                                    data: (0, en.s)({ album: e.best_result_podcast.album, likesCount: e.best_result_podcast.likesCount }),
                                                                };
                                                            case nB.r.PODCAST_EPISODE:
                                                                return { type: nB.r.PODCAST_EPISODE, data: (0, tl.v)(e.best_result_podcast_episode) };
                                                            case nB.r.OVERVIEW:
                                                                return { type: nB.r.OVERVIEW, data: tw(e.best_result_overview) };
                                                            case nB.r.NON_MUSIC:
                                                                return {
                                                                    type: nB.r.NON_MUSIC,
                                                                    data: (0, en.s)({
                                                                        album: e.best_result_non_music.album,
                                                                        artists: e.best_result_non_music.artists,
                                                                        releaseYear: e.best_result_non_music.releaseYear,
                                                                    }),
                                                                };
                                                            case nB.r.TRACK:
                                                                return { type: nB.r.TRACK, data: (0, tl.v)(e.best_result_track) };
                                                            case nB.r.CLIP:
                                                                return { type: nB.r.CLIP, data: lS(e.best_result_clip) };
                                                            case nB.r.BOOK_CHAPTER:
                                                                return { type: nB.r.BOOK_CHAPTER, data: (0, tl.v)(e.best_result_book_chapter) };
                                                        }
                                                    })
                                                    .filter((e) => e),
                                            )),
                                        (e.q2vResults = (0, _.wg)(
                                            (null != (y = t.q2vResults) ? y : []).map((e) => {
                                                let { wave: t, agent: a } = e[s.QUERY_TO_VIBE];
                                                return (0, em.l)(t, a);
                                            }),
                                        )),
                                        t.filters && t.filters.length > 0 && (e.filters = (0, _.wg)(t.filters)),
                                        e.pagesLoader.setItems(o, {
                                            page: r,
                                            pager: { page: r, perPage: null != (p = t.perPage) ? p : nG.k, total: 0, lastPage: !!c || t.lastPage },
                                        }),
                                        (e.loadingState = F.G.RESOLVE));
                                } catch (t) {
                                    ((e.loadingState = F.G.REJECT), e.pagesLoader.setItems(null, { responseStatus: ir.F.ERROR, page: r }));
                                }
                            }),
                            getHistory: (0, _.L3)(function* (t) {
                                let { userId: a } = t;
                                if (e.historyPage.loadingState === F.G.PENDING) return;
                                let { usersResource: i, modelActionsLogger: r } = (0, _._$)(e);
                                try {
                                    e.historyPage.loadingState = F.G.PENDING;
                                    let t = yield i.getSearchHistory({ userId: a, supportedTypes: sr });
                                    ((e.historyPage.items = (0, _.wg)(t.map(sd).filter((e) => e))), (e.historyPage.loadingState = F.G.RESOLVE));
                                } catch (t) {
                                    (r.error(t), (e.historyPage.loadingState = F.G.REJECT));
                                }
                            }),
                            clearHistory: (0, _.L3)(function* (t) {
                                let { userId: a } = t,
                                    { usersResource: i, modelActionsLogger: r } = (0, _._$)(e);
                                if (e.loadingState !== F.G.PENDING)
                                    try {
                                        ((e.loadingState = F.G.PENDING), yield i.clearSearchHistory({ userId: a }), (e.loadingState = F.G.RESOLVE));
                                    } catch (t) {
                                        (r.error(t), (e.loadingState = F.G.REJECT));
                                    }
                            }),
                            resetHistoryItems() {
                                e.historyPage.reset();
                            },
                            resetHistoryStateRequest() {
                                ((e.historyPage.loadingState = F.G.IDLE), e.historyPage.reset());
                            },
                            resetResults() {
                                ((e.searchRequestId = ''), e.destroyItems([e.bestResults, e.q2vResults]), e.pagesLoader.reset());
                            },
                            resetSearchCorrectedText() {
                                e.searchCorrectedText = null;
                            },
                            reset() {
                                ((e.searchRequestId = ''),
                                    (e.searchCorrectedText = null),
                                    (e.loadingState = F.G.IDLE),
                                    (e.filters = null),
                                    e.destroyItems([e.bestResults, e.q2vResults]),
                                    e.pagesLoader.reset());
                            },
                            sendFeedback: (0, _.L3)(function* (t) {
                                let { searchResource: a, modelActionsLogger: i } = (0, _._$)(e);
                                try {
                                    yield a.sendFeedback(t);
                                } catch (e) {
                                    i.error(e);
                                }
                            }),
                            addQ2vSuggestionFeedback(e) {
                                let a = ((e) => {
                                    let { query: t, suggestionsRequestId: a, type: i, position: r } = e;
                                    return ''.concat(t, ':').concat(a, ':').concat(i, ':').concat(r);
                                })(e);
                                t.has(a) || t.set(a, { ...e, timestamp: new Date().toISOString() });
                            },
                            hasQ2vSuggestionFeedbacks: () => t.size > a.size,
                            sendQ2vSuggestionFeedbacks: (0, _.L3)(function* () {
                                let r = (() => {
                                    let e = [];
                                    return (
                                        t.forEach((t, i) => {
                                            a.has(i) || (a.add(i), e.push({ feedback: t, key: i }));
                                        }),
                                        e
                                    );
                                })();
                                if (0 === r.length) return;
                                let { searchResource: l, modelActionsLogger: n } = (0, _._$)(e);
                                try {
                                    (yield l.sendQ2vSuggestionsFeedback({
                                        events: r.map((e) => {
                                            let { feedback: t } = e;
                                            return t;
                                        }),
                                    }),
                                        i(r, !0));
                                } catch (e) {
                                    (i(r, !1), n.error('[Search] Q2V suggestions feedback send error', { error: e }));
                                }
                            }),
                        };
                    }),
                sm = _.gK
                    .compose(
                        _.gK.model({
                            meta: _.gK.maybeNull(Z.v),
                            similarTracks: _.gK.maybeNull(_.gK.array(Z.v)),
                            prevEntityId: _.gK.maybeNull(_.gK.union(_.gK.string, _.gK.number)),
                            trackId: _.gK.maybeNull(_.gK.union(_.gK.string, _.gK.number)),
                            albumId: _.gK.maybeNull(_.gK.number),
                            isTrackPage: _.gK.optional(_.gK.boolean, !1),
                            withAnimation: _.gK.boolean,
                            shouldSendEventOnPlusButtonShowed: _.gK.boolean,
                        }),
                        ns.q,
                        ee.X,
                    )
                    .volatile(() => ({ lastTrackInfoTrack: void 0, lastTrackInfoSimilarTracks: void 0 }))
                    .views((e) => ({
                        get shouldReloadMeta() {
                            var t;
                            let a = e.trackId && e.albumId && (0, iK.V)(e.trackId, e.albumId);
                            return a === (null == (t = e.meta) ? void 0 : t.entityId) || a === e.prevEntityId;
                        },
                        get isShimmerVisible() {
                            return e.isLoading || e.isRejected;
                        },
                        get seeds() {
                            var a;
                            return ['track:'.concat(null == (a = e.meta) ? void 0 : a.id)];
                        },
                    }))
                    .actions((e) => {
                        let t = {
                            setShouldSendEventOnPlusButtonShowed(t) {
                                e.shouldSendEventOnPlusButtonShowed = t;
                            },
                            setTrackInfo(t) {
                                var a;
                                (0, _._n)(e) &&
                                    ((e.lastTrackInfoTrack === t.track && e.lastTrackInfoSimilarTracks === t.similarTracks && e.isResolved) ||
                                        ((e.meta = (0, tl.v)(t.track)),
                                        (e.similarTracks = (0, _.wg)(null == (a = t.similarTracks) ? void 0 : a.map((e) => (0, tl.v)(e)))),
                                        (e.loadingState = F.G.RESOLVE),
                                        (e.lastTrackInfoTrack = t.track),
                                        (e.lastTrackInfoSimilarTracks = t.similarTracks)));
                            },
                            setIsTrackPage(t) {
                                e.isTrackPage = !!t;
                            },
                            setAnimationState(t) {
                                e.withAnimation = t;
                            },
                            getData: (0, _.L3)(function* () {
                                let { tracksResource: a, modelActionsLogger: i } = (0, _._$)(e);
                                if (!e.trackId || e.loadingState === F.G.PENDING || e.shouldReloadMeta) return null;
                                try {
                                    var r;
                                    ((e.loadingState = F.G.PENDING), (e.meta = null));
                                    let i = yield a.getFullInfoTrack({ trackId: e.trackId, albumId: e.albumId });
                                    if (!i) return ((e.loadingState = F.G.REJECT), null);
                                    ((e.meta = (0, tl.v)(i.track)),
                                        (e.similarTracks = (0, _.wg)(i.similarTracks.map((e) => (0, tl.v)(e)))),
                                        (e.prevEntityId = i.track.id),
                                        t.setShouldSendEventOnPlusButtonShowed(!0),
                                        (null == (r = e.meta) ? void 0 : r.resolveAllDisclaimers) && (yield e.meta.resolveAllDisclaimers()),
                                        (e.loadingState = F.G.RESOLVE));
                                } catch (t) {
                                    (i.error(t), (e.loadingState = F.G.REJECT));
                                }
                                return null;
                            }),
                            open(t) {
                                let { trackId: a, albumId: i } = t;
                                a && i && ((e.trackId === a && e.albumId === i && e.isOpened) || ((e.trackId = a), (e.albumId = i), (e.isOpened = !0)));
                            },
                            reset() {
                                ((e.loadingState = F.G.IDLE), (e.shouldSendEventOnPlusButtonShowed = !0));
                            },
                        };
                        return t;
                    })
                    .named('TrackPage');
            var sy = a(38147),
                sp = a(26208);
            let sE = _.gK
                    .model('BaseAdvertBanner', { type: _.gK.enumeration(Object.values(sy.h)), noAds: _.gK.boolean, hasError: _.gK.boolean, isShowBanner: _.gK.boolean })
                    .views((e) => ({
                        get isBaseVisible() {
                            if (e.noAds || e.hasError || !e.isShowBanner) return !1;
                            let { advertBanners: t } = (0, D.M)(e);
                            if (t.hasBranding) return !1;
                            return t.isVisible(e.type);
                        },
                    }))
                    .actions((e) => ({
                        setType(t) {
                            e.type = t;
                        },
                        toggleNoAdsTrue() {
                            e.noAds = !0;
                        },
                        setIsShowBanner(t) {
                            e.isShowBanner = t;
                        },
                        toggleHasErrorTrue() {
                            e.hasError = !0;
                        },
                        reset() {
                            ((e.type = sy.h.EMPTY), (e.noAds = !1), (e.isShowBanner = !0), (e.hasError = !1));
                        },
                    })),
                sb = sE
                    .extend((e) => ({
                        views: {
                            get isVisible() {
                                let { advert: t, experiments: a } = (0, D.M)(e);
                                if (
                                    !a.checkExperiment(O.z.WebNextBrandedPlaylistsAxe, 'on') ||
                                    T.NN ||
                                    e.noAds ||
                                    e.hasError ||
                                    !e.isShowBanner ||
                                    (e.type !== sy.h.EMPTY && e.type !== sy.h.BRANDING) ||
                                    t.isAdvertDisabled(sp.f.AXE_ENTITY_BRANDING)
                                )
                                    return !1;
                                return !0;
                            },
                        },
                    }))
                    .named('BrandedEntityAxeBanner'),
                sv = sE
                    .extend((e) => ({
                        views: {
                            get isVisible() {
                                let { advert: t, settings: a, user: i } = (0, D.M)(e);
                                if (!e.noAds && !e.hasError && e.type === sy.h.BRANDING) return !a.isMobile;
                                if (e.noAds || e.hasError || e.type !== sy.h.BRANDING || t.isAdvertDisabled(sp.f.PLAYLIST_BRANDING)) return !1;
                                return !i.hasPlus && !a.isMobile;
                            },
                        },
                    }))
                    .named('BrandedPlaylistBanner');
            var sS = a(28870);
            let sK = _.gK.model('BrandedPlayerDisclaimer', { advertiser: _.gK.string, token: _.gK.string }),
                sI = _.gK.model('BrandedPlayerModal', {
                    imageUri: _.gK.maybeNull(_.gK.string),
                    content: _.gK.string,
                    primaryHref: _.gK.string,
                    shouldShowSecondaryButton: _.gK.boolean,
                    secondaryText: _.gK.maybeNull(_.gK.string),
                });
            var sL = a(71774);
            let sT = _.gK
                    .compose(
                        _.gK.model('BrandedPlayerBanner', {
                            payload: _.gK.maybeNull(_.gK.model({ thumb: sS.K, modal: _.gK.maybeNull(sI), disclaimer: _.gK.maybeNull(sK) })),
                            modal: ns.q,
                        }),
                        sE,
                    )
                    .views((e) => ({
                        get isVisible() {
                            let { advert: t, settings: a, user: i } = (0, D.M)(e);
                            if (e.noAds || e.hasError || t.isAdvertDisabled(sp.f.PLAYER_BRANDING)) return !1;
                            return !i.hasPlus && !a.isMobile;
                        },
                    }))
                    .actions((e) => ({
                        setPayload: (t) => {
                            let { settings: a } = (0, D.M)(e);
                            (a.setCustomPlayerThumb(sL.T.BRANDED), (e.payload = (0, _.wg)(t)));
                        },
                    })),
                sh = sE
                    .views((e) => ({
                        get isVisible() {
                            if (!e.isBaseVisible) return !1;
                            let {
                                    advert: t,
                                    advertBanners: {
                                        banners: { brandedPlaylistBanner: a, brandedEntityAxeBanner: i },
                                    },
                                } = (0, D.M)(e),
                                r = t.isAdvertDisabled(sp.f.SIDE_BANNER);
                            return !a.isVisible && !i.isVisible && !r;
                        },
                    }))
                    .named('SideAdvertBanner'),
                sN = sE
                    .views((e) => {
                        let t = {
                            get isTouchTopAdvertEnabled() {
                                let { advert: t, settings: a } = (0, D.M)(e),
                                    i = t.isAdvertDisabled(sp.f.TOUCH_BANNER);
                                return a.isMobile && !i;
                            },
                            get isVisible() {
                                var a;
                                if (!e.isBaseVisible) return !1;
                                let {
                                        advert: i,
                                        settings: r,
                                        advertBanners: {
                                            banners: { brandedPlaylistBanner: l, brandedEntityAxeBanner: n },
                                        },
                                    } = (0, D.M)(e),
                                    s = i.isAdvertDisabled(sp.f.TOP_BANNER),
                                    o = l.isVisible || n.isVisible;
                                return !(null == (a = r.browserInfo) ? void 0 : a.isTouch) && !t.isTouchTopAdvertEnabled && !o && !s;
                            },
                        };
                        return t;
                    })
                    .named('TopAdvertBanner'),
                sA = _.gK
                    .model('AdvertBanners', {
                        banners: _.gK.model({
                            topAdvertBanner: sN,
                            sideAdvertBanner: sh,
                            brandedPlaylistBanner: sv,
                            brandedPlayerBanner: sT,
                            brandedEntityAxeBanner: sb,
                        }),
                    })
                    .views((e) => {
                        let t = {
                            get values() {
                                return [e.banners.topAdvertBanner, e.banners.sideAdvertBanner, e.banners.brandedPlaylistBanner, e.banners.brandedEntityAxeBanner];
                            },
                            get hasBranding() {
                                return t.values.some((e) => e.type === sy.h.BRANDING);
                            },
                            isVisible(e) {
                                if (e === sy.h.EMPTY) return !0;
                                let a = t.values.filter((e) => e.type !== sy.h.EMPTY);
                                return e === sy.h.DIRECT ? a.every((e) => e.type === sy.h.DIRECT) : e !== sy.h.CREATIVE || a.every((e) => e.type !== sy.h.BRANDING);
                            },
                        };
                        return t;
                    });
            var sf = a(2258);
            !(function (e) {
                ((e.BAR_BELOW = 'barBellow'), (e.FULLSCREEN = 'fullscreen'));
            })(o || (o = {}));
            let sC = (e) => {
                    let { text: t, textColor: a, color: i, action: r } = e;
                    return (0, _.wg)({
                        text: t || null,
                        textColor: a || null,
                        color: i || null,
                        action:
                            r &&
                            ((e) => {
                                let { id: t, type: a, value: i, communicationId: r } = e;
                                return (0, _.wg)({ id: t || null, type: a || null, value: i || null, communicationId: r || null });
                            })(r),
                    });
                },
                sR = (e) => {
                    let { bgUrl: t, bgColor: a, title: i, text: r, titleColor: l, textColor: n, imageUrl: s, buttons: o, advDisclaimer: d } = e;
                    return (0, _.wg)({
                        bgUrl: t || null,
                        bgColor: a || null,
                        title: i || null,
                        text: r || null,
                        titleColor: l || null,
                        textColor: n || null,
                        imageUrl: s || null,
                        buttons: o.filter((e) => e.text).map(sC),
                        advDisclaimer: d || null,
                    });
                },
                sk = (e) => {
                    let {
                        isModal: t,
                        withShadow: a,
                        closeActionId: i,
                        bgUrl: r,
                        bgUrlLarge: l,
                        bgColor: n,
                        logoUrl: s,
                        title: o,
                        text: d,
                        titleColor: g,
                        textColor: u,
                        buttons: c,
                        disclaimer: m,
                        disclaimerColor: y,
                        advDisclaimer: p,
                    } = e;
                    return (0, _.wg)({
                        isModal: (0, h.G4)(t),
                        withShadow: (0, h.G4)(a),
                        closeActionId: i || null,
                        bgUrl: r || null,
                        bgUrlLarge: l || null,
                        bgColor: n || null,
                        logoUrl: s || null,
                        title: o || null,
                        text: d || null,
                        titleColor: g || null,
                        textColor: u || null,
                        buttons: c.filter((e) => e.text).map(sC),
                        disclaimer: m || null,
                        disclaimerColor: y || null,
                        advDisclaimer: p || null,
                    });
                };
            var sP = a(30283),
                s_ = a(3474);
            let sD = _.gK.model('CommunicationModalContentModel', {
                    isModal: _.gK.boolean,
                    withShadow: _.gK.boolean,
                    closeActionId: _.gK.maybeNull(_.gK.string),
                    bgUrl: _.gK.maybeNull(_.gK.string),
                    bgUrlLarge: _.gK.maybeNull(_.gK.string),
                    bgColor: _.gK.maybeNull(_.gK.string),
                    logoUrl: _.gK.maybeNull(_.gK.string),
                    title: _.gK.maybeNull(_.gK.string),
                    titleColor: _.gK.maybeNull(_.gK.string),
                    text: _.gK.maybeNull(_.gK.string),
                    textColor: _.gK.maybeNull(_.gK.string),
                    buttons: _.gK.array(s_._),
                    disclaimer: _.gK.maybeNull(_.gK.string),
                    disclaimerColor: _.gK.maybeNull(_.gK.string),
                    advDisclaimer: _.gK.maybeNull(_.gK.string),
                }),
                sO = _.gK.model('CommunicationModal', {
                    anchorId: _.gK.enumeration(Object.values(sf.v)),
                    screenId: _.gK.string,
                    content: sD,
                    feedbackToken: _.gK.maybeNull(_.gK.string),
                }),
                sw = ns.q
                    .props({ anchorId: _.gK.maybe(_.gK.enumeration(Object.values(sf.v))), list: _.gK.array(sO) })
                    .views((e) => ({
                        get modalItem() {
                            return e.list.find((t) => t.anchorId === e.anchorId);
                        },
                    }))
                    .actions((e) => ({
                        setAnchorId(t) {
                            e.anchorId = t;
                        },
                    })),
                sG = _.gK.model('CommunicationList', { barBelow: sP.t, modal: sw }),
                sM = _.gK
                    .model('Communication', { loadingState: _.gK.enumeration(Object.values(F.G)), list: _.gK.maybe(sG), errorStatusCode: _.gK.maybeNull(_.gK.number) })
                    .volatile(() => ({ isRecommendationsNotificationDismissed: !1 }))
                    .views((e) => ({
                        get isReadyToShowModal() {
                            var t;
                            let { paywall: a } = (0, D.M)(e),
                                i = null == (t = e.list) ? void 0 : t.modal;
                            return !!((null == i ? void 0 : i.modalItem) && !i.wasOpened && a.isPassed);
                        },
                        get isReadyToShowBarBelow() {
                            var a;
                            let { paywall: t } = (0, D.M)(e),
                                i = null == (a = e.list) ? void 0 : a.barBelow;
                            return !!((null == i ? void 0 : i.barBelowItem) && !i.wasShown && t.isPassed);
                        },
                    }))
                    .actions((e) => {
                        let t = {
                            dismissRecommendationsNotification() {
                                e.isRecommendationsNotificationDismissed = !0;
                            },
                            getData: (0, _.L3)(function* () {
                                let { dynamicPagesResource: t, modelActionsLogger: a } = (0, _._$)(e);
                                if (e.loadingState !== F.G.PENDING && e.loadingState !== F.G.RESOLVE)
                                    try {
                                        e.loadingState = F.G.PENDING;
                                        let a = yield t.getTriggersV2({ anchorIds: Object.values(sf.v) });
                                        if (
                                            (a &&
                                                a.triggers &&
                                                Array.isArray(a.triggers) &&
                                                a.triggers.every(
                                                    (e) =>
                                                        !!(
                                                            e &&
                                                            'object' == typeof e &&
                                                            'anchorId' in e &&
                                                            'triggers' in e &&
                                                            Array.isArray(e.triggers) &&
                                                            e.triggers.every(
                                                                (e) =>
                                                                    !!(
                                                                        e &&
                                                                        'object' == typeof e &&
                                                                        'screenId' in e &&
                                                                        'feedbackToken' in e &&
                                                                        'data' in e &&
                                                                        'meta' in e
                                                                    ),
                                                            )
                                                        ),
                                                ) &&
                                                (e.list = ((e) => {
                                                    let t = [],
                                                        a = [];
                                                    return (
                                                        e.triggers.forEach((e) => {
                                                            var i;
                                                            switch (null == (i = e.triggers[0]) ? void 0 : i.meta.notificationId) {
                                                                case o.BAR_BELOW:
                                                                    return void e.triggers.forEach((e) => {
                                                                        t.push(
                                                                            ((e) => {
                                                                                let t = 'data' in e ? sR(e.data) : sR(e.div),
                                                                                    a = 'feedbackToken' in e ? e.feedbackToken : null,
                                                                                    i = 'anchorId' in e ? e.anchorId : sf.v.ON_START_BAR_BELOW;
                                                                                return (0, _.wg)({ anchorId: i, screenId: e.screenId, content: t, feedbackToken: a });
                                                                            })(e),
                                                                        );
                                                                    });
                                                                case o.FULLSCREEN:
                                                                    return void e.triggers.forEach((e) => {
                                                                        a.push(
                                                                            ((e) => {
                                                                                let t = 'data' in e ? sk(e.data) : sk(e.div),
                                                                                    a = 'feedbackToken' in e ? e.feedbackToken : null,
                                                                                    i = 'anchorId' in e ? e.anchorId : sf.v.ON_START_FULLSCREEN;
                                                                                return (0, _.wg)({ anchorId: i, screenId: e.screenId, content: t, feedbackToken: a });
                                                                            })(e),
                                                                        );
                                                                    });
                                                            }
                                                        }),
                                                        (0, _.wg)({ barBelow: { list: t }, modal: { list: a } })
                                                    );
                                                })(a)),
                                            e.loadingState !== F.G.IDLE && (e.loadingState = F.G.RESOLVE),
                                            !e.list)
                                        )
                                            return;
                                        let { barBelow: i, modal: r } = e.list;
                                        (i.setAnchorId(sf.v.ON_START_BAR_BELOW), r.setAnchorId(sf.v.ON_START_FULLSCREEN));
                                    } catch (t) {
                                        (a.error(t),
                                            t instanceof U.GX &&
                                                (t.statusCode === U.X1.NOT_FOUND || t.statusCode === U.X1.BAD_REQUEST) &&
                                                (e.errorStatusCode = U.X1.NOT_FOUND),
                                            e.loadingState !== F.G.IDLE && (e.loadingState = F.G.REJECT));
                                    }
                            }),
                            showModal() {
                                var a;
                                if (!e.isReadyToShowModal) return;
                                let i = null == (a = e.list) ? void 0 : a.modal,
                                    r = null == i ? void 0 : i.modalItem;
                                i && r && (i.open(), t.shown(r.anchorId, r.screenId, r.feedbackToken));
                            },
                            showBarBelow() {
                                var a;
                                if (!e.isReadyToShowBarBelow) return;
                                let i = null == (a = e.list) ? void 0 : a.barBelow,
                                    r = null == i ? void 0 : i.barBelowItem;
                                i && r && (i.show(), t.shown(r.anchorId, r.screenId, r.feedbackToken));
                            },
                            shown: (0, _.L3)(function* (t, a, i) {
                                let { dynamicPagesResource: r, modelActionsLogger: l } = (0, _._$)(e);
                                try {
                                    i && (yield r.shownV2({ anchorIds: [t], feedbackToken: i }));
                                } catch (e) {
                                    l.error(e);
                                }
                            }),
                            action: (0, _.L3)(function* (t, a, i, r) {
                                let { dynamicPagesResource: l, modelActionsLogger: n } = (0, _._$)(e);
                                try {
                                    r && (yield l.actionV2({ anchorIds: [t], actionId: i, feedbackToken: r }));
                                } catch (e) {
                                    n.error(e);
                                }
                            }),
                        };
                        return t;
                    });
            var sU = a(18593),
                sB = a(25918);
            let sV = _.gK
                    .model('ContinueListen', {
                        track: _.gK.maybe(Z.v),
                        trackIndex: _.gK.maybe(_.gK.number),
                        contextType: _.gK.maybeNull(_.gK.enumeration(Object.values(sU.K))),
                        contextId: _.gK.maybeNull(_.gK.union(_.gK.string, _.gK.number)),
                        albumDuration: _.gK.maybe(_.gK.number),
                        albumStreamProgress: _.gK.optional(sB.B, { endPositionSec: 0 }),
                        trackTempStreamProgress: _.gK.optional(sB.B, { endPositionSec: 0 }),
                    })
                    .actions((e) => ({
                        saveTrack: (t) => {
                            let { contextType: a, contextId: i, track: r, isDefaultTrack: l } = t;
                            (l && e.track) || ((e.contextType = a), (e.contextId = i), (e.track = (0, _.wg)((0, nL.HO)(r))));
                        },
                        saveTrackIndex: (t) => {
                            e.trackIndex = t;
                        },
                        saveAlbumDuration: (t) => {
                            e.albumDuration = t;
                        },
                    })),
                sF = _.gK
                    .model({ modal: ns.q })
                    .views((e) => ({
                        shouldShow() {
                            var t;
                            let { user: a, settings: i } = (0, D.M)(e),
                                { sessionStorage: r } = (0, _._$)(e);
                            if (!a.hasPlus || !(null == (t = i.browserInfo) ? void 0 : t.isMobile)) return !1;
                            let l = r.get(ni.c.DownloadMobileApp);
                            return null == l || !l.shown;
                        },
                    }))
                    .actions((e) => ({
                        openModal() {
                            var t;
                            let { localStorage: a, sessionStorage: i } = (0, _._$)(e);
                            if (!(null == (t = a.get(ni.c.DownloadMobileApp)) ? void 0 : t.shown)) {
                                (e.modal.open(), a.set(ni.c.DownloadMobileApp, { shown: !0 }), i.set(ni.c.DownloadMobileApp, { shown: !0 }));
                                return;
                            }
                            (setTimeout(() => {
                                e.modal.open();
                            }, 5e3),
                                i.set(ni.c.DownloadMobileApp, { shown: !0 }));
                        },
                    }));
            var sx = a(11028),
                sj = a(64184);
            let sW = _.gK.model('FamilyInviteInfoModel', { name: _.gK.string, avatarUrl: _.gK.string }),
                sX = _.gK
                    .model('FamilyInviteModel', {
                        info: _.gK.model({ loadingState: _.gK.enumeration(Object.values(F.G)), data: _.gK.maybeNull(sW) }),
                        acceptanceLoadingState: _.gK.enumeration(Object.values(F.G)),
                        isSuccess: _.gK.maybe(_.gK.boolean),
                        modal: ns.q,
                        step: _.gK.enumeration('Step', Object.values(sj._)),
                        inviteId: _.gK.maybeNull(_.gK.string),
                        error: _.gK.maybeNull(_.gK.enumeration(Object.values(sx.C))),
                    })
                    .views((e) => ({
                        get hasError() {
                            return !!e.error;
                        },
                        get isInfoShimmerVisible() {
                            return e.info.loadingState === F.G.IDLE || e.info.loadingState === F.G.PENDING;
                        },
                        get isInfoShimmerActive() {
                            return e.info.loadingState === F.G.PENDING;
                        },
                        get isAcceptanceActive() {
                            return e.acceptanceLoadingState === F.G.PENDING;
                        },
                    }))
                    .actions((e) => {
                        let t = {
                            start(a) {
                                (t.setInviteId(a), e.modal.open(), t.getInviteInfo());
                            },
                            retry: (0, _.L3)(function* () {
                                (t.setError(null), t.toggleStepInfo(), e.info.loadingState !== F.G.RESOLVE && (yield t.getInviteInfo()));
                            }),
                            getInviteInfo: (0, _.L3)(function* () {
                                let { familyResource: a, modelActionsLogger: i } = (0, _._$)(e);
                                if (e.inviteId && e.info.loadingState !== F.G.PENDING)
                                    try {
                                        e.info.loadingState = F.G.PENDING;
                                        let i = { inviteId: e.inviteId },
                                            r = yield a.getInviteInfo(i);
                                        if (!r.hasPlus) {
                                            (t.setError(sx.C.SUBSCRIPTION_IS_NOT_AVAILABLE), (e.info.loadingState = F.G.RESOLVE));
                                            return;
                                        }
                                        ((e.info.data = ((e) => {
                                            let { name: t, avatarUrl: a } = e;
                                            return (0, _.wg)({ name: t, avatarUrl: a });
                                        })(r)),
                                            (e.info.loadingState = F.G.RESOLVE));
                                    } catch (a) {
                                        if (((e.info.loadingState = F.G.REJECT), i.error(a), a instanceof U.GX && a.statusCode === U.X1.BAD_REQUEST))
                                            return void t.setError(sx.C.INVITATION_IS_INVALID);
                                        t.setError(sx.C.UNKNOWN);
                                    }
                            }),
                            acceptInvite: (0, _.L3)(function* () {
                                let { familyResource: a, modelActionsLogger: i } = (0, _._$)(e);
                                if (e.inviteId && e.acceptanceLoadingState !== F.G.PENDING)
                                    try {
                                        e.acceptanceLoadingState = F.G.PENDING;
                                        let i = { inviteId: e.inviteId };
                                        (yield a.acceptInvite(i), (e.acceptanceLoadingState = F.G.RESOLVE), t.toggleStateSuccessTrue());
                                    } catch (a) {
                                        if (((e.acceptanceLoadingState = F.G.REJECT), i.error(a), a instanceof U.GX && a.statusCode === U.X1.BAD_REQUEST))
                                            return void t.setError(sx.C.INVITATION_IS_INVALID);
                                        t.setError(sx.C.UNKNOWN);
                                    }
                            }),
                            toggleStepInfo() {
                                e.step = sj._.INFO;
                            },
                            toggleStepSuccess() {
                                e.step = sj._.SUCCESS;
                            },
                            setError(t) {
                                e.error = t;
                            },
                            setInviteId(t) {
                                e.inviteId = t;
                            },
                            toggleStateSuccessTrue() {
                                (t.toggleStepSuccess(), (e.isSuccess = !0));
                            },
                            reset() {
                                ((e.acceptanceLoadingState = F.G.IDLE),
                                    (e.error = null),
                                    (e.info.loadingState = F.G.IDLE),
                                    (e.info.data = null),
                                    (e.inviteId = null),
                                    (e.step = sj._.INFO),
                                    (e.isSuccess = !1));
                            },
                        };
                        return t;
                    }),
                s$ = (e) => {
                    switch (e.type) {
                        case el._.MIX_CARD_ITEM:
                            return (0, _.wg)({ type: el._.MIX_CARD_ITEM, data: t5(e.data) });
                        case el._.NON_MUSIC_ALBUM_ITEM:
                            return tp({ album: e.data.album, likesCount: e.data.likesCount, bookmateOptionRequired: e.data.bookmateOptionRequired });
                        case el._.ALBUM_ITEM:
                            return es(e.data.album, e.data.artists, e.data.trailer);
                        case el._.CHART_ALBUM_ITEM:
                            let t, a, i, r;
                            return (
                                (t = e.data.album),
                                (a = e.data.chart),
                                (i = e.data.likesCount),
                                (r = e.data.trailer),
                                { type: el._.CHART_ALBUM_ITEM, data: (0, en.s)({ album: t, chart: a, likesCount: i, trailer: r }) }
                            );
                        case el._.ARTIST_ITEM:
                            return ed(e.data.artist, e.data.trailer);
                        case el._.PLAYLIST_ITEM:
                            return ec(e.data.playlist, e.data.trailer);
                        case el._.PERSONAL_PLAYLIST_ITEM:
                            return at(e);
                        case el._.LIKED_PLAYLIST_ITEM:
                            return eu({ playlist: e.data.playlist, likesCount: e.data.likesCount, trailer: e.data.trailer });
                    }
                },
                sY = _.gK.model('LandingChartAlbumItem', { type: _.gK.literal(el._.CHART_ALBUM_ITEM), data: eC.J }),
                sJ = _.gK.model('LandingMixCardItemModel', { type: _.gK.literal(el._.MIX_CARD_ITEM), data: iJ }),
                sq = _.gK.union(eV, eF, eW, rl, ej, sY, az, sJ),
                sH = _.gK
                    .compose(_.gK.model('LandingBlockEntities', { title: _.gK.maybeNull(_.gK.string), items: _.gK.array(sq) }), ee.X)
                    .views((e) => ({
                        get isLoading() {
                            return e.isNeededToLoad || e.loadingState === F.G.PENDING;
                        },
                        get isNotFound() {
                            return e.isRejected;
                        },
                    }))
                    .actions((e) => ({
                        getData: (0, _.L3)(function* (t) {
                            let { blockId: a } = t,
                                { landingResource: i, modelActionsLogger: r } = (0, _._$)(e);
                            if (e.loadingState !== F.G.PENDING)
                                try {
                                    e.loadingState = F.G.PENDING;
                                    let t = yield i.getBlockEntities({ blockId: a, page: 0, pageSize: 100 });
                                    ((e.title = t.title), (e.items = (0, _.wg)(t.items.map(s$))), e.loadingState !== F.G.IDLE && (e.loadingState = F.G.RESOLVE));
                                } catch (t) {
                                    (r.error(t), e.loadingState !== F.G.IDLE && (e.loadingState = F.G.REJECT));
                                }
                        }),
                        reset() {
                            ((e.loadingState = F.G.IDLE), (e.items = (0, _.wg)([])), (e.title = null));
                        },
                    }));
            var sz = a(70030);
            let sQ = rJ
                    .props({
                        id: _.gK.optional(_.gK.string, ''),
                        title: _.gK.optional(_.gK.string, ''),
                        skeletonMeta: _.gK.maybe(_.gK.frozen()),
                        preloadedBlocksMeta: _.gK.maybe(_.gK.frozen()),
                    })
                    .views((e) => {
                        let t = {
                            get isLoaded() {
                                return e.loadingState === F.G.RESOLVE || e.loadingState === F.G.REJECT;
                            },
                            get isSkeletonCreated() {
                                let { landingSdk: t } = (0, _._$)(e);
                                return !!t.skeleton;
                            },
                            get isNeededToInit() {
                                let { loadingState: a } = e;
                                return a === F.G.IDLE || (a === F.G.RESOLVE && !!e.skeletonMeta && !t.isSkeletonCreated);
                            },
                        };
                        return t;
                    })
                    .actions((e) => {
                        let { landingSdk: t, modelActionsLogger: a } = (0, _._$)(e),
                            i = {
                                loadAndCreateSkeleton: (0, _.L3)(function* (i) {
                                    let { preloadBlocksCount: r, skeletonData: l } = i;
                                    if (e.loadingState !== F.G.PENDING) {
                                        e.loadingState = F.G.PENDING;
                                        try {
                                            var n;
                                            if ((yield t.loadAndCreateSkeleton({ data: l }), null == (n = t.skeleton) ? void 0 : n.data.meta)) {
                                                let { blocks: a, id: i, title: r } = t.skeleton.data.meta,
                                                    l = tX(a);
                                                ((e.id = i),
                                                    (e.title = r),
                                                    (e.meta = (0, _.wg)(l.meta)),
                                                    (e.upperBlocks = (0, _.wg)(l.upperBlocks)),
                                                    (e.tabs.data = (0, _.wg)(l.tabs.data)),
                                                    (e.skeletonMeta = t.skeleton.data.meta));
                                            }
                                            (t.skeleton, e.loadingState !== F.G.IDLE && (e.loadingState = F.G.RESOLVE));
                                        } catch (t) {
                                            (a.error(t), e.loadingState !== F.G.IDLE && (e.loadingState = F.G.REJECT));
                                        }
                                    }
                                }),
                                createSkeleton(i) {
                                    let { skeletonData: r } = i;
                                    if (e.loadingState !== F.G.PENDING && e.skeletonMeta) {
                                        e.loadingState = F.G.PENDING;
                                        try {
                                            (t.createSkeleton({ data: { ...r, meta: e.skeletonMeta }, preloadedBlocksMeta: e.preloadedBlocksMeta }),
                                                (e.loadingState = F.G.RESOLVE));
                                        } catch (t) {
                                            (a.error(t), (e.loadingState = F.G.REJECT));
                                        }
                                    }
                                },
                                syncLoadedSdkBlocks() {
                                    var a, r, l, n;
                                    let s = (e) => {
                                        var a, r;
                                        if ((0, ta.Q)(e)) {
                                            null == (r = e.data) || r.blocks.forEach(s);
                                            return;
                                        }
                                        let l = null == (a = t.skeleton) ? void 0 : a.getNodeById(e.id);
                                        l && i.handleSdkBlockUpdate(e, l, l.state.loadingStatus.value);
                                    };
                                    (null == (a = e.upperBlocks) || a.forEach(s), null == (r = e.tabs.data) || r.forEach((e) => e.blocks.forEach(s)));
                                    let o = null == (n = t.skeleton) || null == (l = n.root) ? void 0 : l.getTabsBlock();
                                    o && i.handleSdkTabsBlockUpdate(o, o.state.loadingStatus.value);
                                },
                                handleSdkBlockUpdate(e, t, a) {
                                    switch (a) {
                                        case sz.rl.IDLE:
                                            e.loadingState = eE.IDLE;
                                            break;
                                        case sz.rl.PENDING:
                                            e.loadingState = eE.PENDING;
                                            break;
                                        case sz.rl.REJECT:
                                            e.loadingState = eE.REJECT;
                                            break;
                                        case sz.rl.RESOLVE:
                                            ((e.loadingState = eE.RESOLVE),
                                                (e.data = ((e, t) => {
                                                    if (t.data.meta)
                                                        switch (t.data.type) {
                                                            case eb.t.LIKES_AND_HISTORY:
                                                                return t2(t.data.meta);
                                                            case eb.t.CHART_TRACKS:
                                                                return to(t.data.meta);
                                                            case eb.t.NEW_RELEASES:
                                                            case eb.t.EDITORIAL_NEW_RELEASES:
                                                                return t7(t.data.meta);
                                                            case eb.t.NEW_PLAYLISTS:
                                                            case eb.t.EDITORIAL_COMPILATION:
                                                            case eb.t.RECOMMENDED_PLAYLISTS:
                                                            case eb.t.META_TAG_POPULAR_PLAYLISTS:
                                                            case eb.t.META_TAG_NEW_ALBUMS:
                                                            case eb.t.META_TAG_PLAYLISTS:
                                                            case eb.t.MICRO_GENRE_ALBUMS:
                                                            case eb.t.META_TAG_ALBUMS:
                                                            case eb.t.ARTIST_PLAYLISTS:
                                                            case eb.t.ARTIST_ALBUMS:
                                                            case eb.t.ARTIST_COMPILATIONS:
                                                            case eb.t.ARTIST_STUDIO_ALBUMS:
                                                            case eb.t.ARTIST_SIMILAR_ENTITIES:
                                                            case eb.t.COLLECTION_SIMILAR_ENTITIES:
                                                                return ep(t.data.meta);
                                                            case eb.t.WAVES:
                                                            case eb.t.SETS_BY_WAVES:
                                                                return ad(t.data.meta);
                                                            case eb.t.WAVES_AGENT:
                                                            case eb.t.SETS_BY_WAVES_AGENT:
                                                                return ao(t.data.meta);
                                                            case eb.t.EDITORIAL_WAVES:
                                                            case eb.t.META_TAG_WAVE:
                                                            case eb.t.MICRO_GENRE_WAVE:
                                                            case eb.t.MICRO_GENRE_SIMILAR_WAVE:
                                                            case eb.t.META_TAG_SIMILAR_WAVE:
                                                                return t0(t.data.meta);
                                                            case eb.t.EDITORIAL_WAVES_AGENT:
                                                            case eb.t.META_TAG_WAVE_AGENT:
                                                            case eb.t.MICRO_GENRE_WAVE_AGENT:
                                                            case eb.t.MICRO_GENRE_SIMILAR_WAVE_AGENT:
                                                            case eb.t.META_TAG_SIMILAR_WAVE_AGENT:
                                                                return tQ(t.data.meta);
                                                            case eb.t.ITEM_LIST:
                                                                return t3(t.data.meta);
                                                            case eb.t.MIXES_GRID:
                                                            case eb.t.MIXES_MUSIC:
                                                                return t6(t.data.meta);
                                                            case eb.t.NEUROMUSIC:
                                                                return t4(t.data.meta);
                                                            case eb.t.CONCERTS_TOP:
                                                            case eb.t.CONCERTS_PERSONAL:
                                                            case eb.t.EDITORIAL_CONCERTS:
                                                            case eb.t.VIEWED_CONCERTS:
                                                                return tY(t.data.meta);
                                                            case eb.t.OPEN_PLAYLIST:
                                                            case eb.t.SMART_OPEN_PLAYLIST:
                                                            case eb.t.NON_MUSIC_OPEN_PLAYLIST:
                                                                return ae(t.data.meta, e.id);
                                                            case eb.t.COLLECTION_PLAYLIST_WITH_LIKES:
                                                                return tv(t.data.meta);
                                                            case eb.t.DONATIONS:
                                                                return tH(t.data.meta);
                                                            case eb.t.PERSONAL_PLAYLISTS:
                                                            case eb.t.REWIND_PLAYLISTS:
                                                                return aa(t.data.meta);
                                                            case eb.t.Q2V_SUGGESTIONS:
                                                                return ar(t.data.meta);
                                                            case eb.t.PERSONAL_ARTISTS:
                                                            case eb.t.NEW_STARS_ARTISTS:
                                                            case eb.t.EDITORIAL_ARTISTS:
                                                            case eb.t.META_TAG_POPULAR_ARTISTS:
                                                            case eb.t.MICRO_GENRE_ARTISTS:
                                                            case eb.t.MICRO_GENRE_TOP_ARTISTS:
                                                            case eb.t.META_TAG_ARTISTS:
                                                            case eb.t.SIMILAR_ARTISTS:
                                                                return tz(t.data.meta);
                                                            case eb.t.IN_STYLE:
                                                                return t1(t.data.meta);
                                                            case eb.t.WIZARD:
                                                                return ag(t.data.meta);
                                                            case eb.t.NON_MUSIC_EDITORIAL_COMPILATION:
                                                            case eb.t.NON_MUSIC_CATEGORY:
                                                                return t9(t.data.meta);
                                                            case eb.t.SPECIAL:
                                                                return an(t.data.meta);
                                                            case eb.t.ALBUM_PROMO:
                                                            case eb.t.SIMPLE_ALBUM_PROMO:
                                                                return ai(t.data.meta);
                                                            case eb.t.ARTIST_RECOMMENDATIONS_PROMO:
                                                            case eb.t.SIMPLE_ARTIST_RECOMMENDATIONS_PROMO:
                                                                return eT(t.data.meta);
                                                            default:
                                                                return;
                                                        }
                                                })(e, t)));
                                    }
                                },
                                handleSdkTabsBlockUpdate(t, a) {
                                    switch (a) {
                                        case sz.rl.IDLE:
                                            e.tabs.loadingState = F.G.IDLE;
                                            break;
                                        case sz.rl.PENDING:
                                            e.tabs.loadingState = F.G.PENDING;
                                            break;
                                        case sz.rl.REJECT:
                                            e.tabs.loadingState = F.G.REJECT;
                                            break;
                                        case sz.rl.RESOLVE: {
                                            var i;
                                            if (!t.data.meta) break;
                                            let a = as(t.data.meta) || [];
                                            (null == (i = e.tabs.data) ||
                                                i.forEach((e, t) => {
                                                    let i = a.find((t) => {
                                                        var a;
                                                        return t.id === (null == (a = e.data) ? void 0 : a.id);
                                                    });
                                                    e.data = i || a[t];
                                                }),
                                                (e.tabs.loadingState = F.G.RESOLVE));
                                        }
                                    }
                                },
                                reset() {
                                    ((e.loadingState = F.G.IDLE),
                                        (e.meta = null),
                                        (e.skeletonMeta = void 0),
                                        (e.preloadedBlocksMeta = void 0),
                                        e.tabs.reset(),
                                        (e.upperBlocks = null),
                                        t.destroy());
                                },
                            };
                        return i;
                    }),
                sZ = (e) => ({ imgUrl: e.imgUrl, title: e.title, url: e.url }),
                s0 = _.gK.model('ArtistLink', { imgUrl: _.gK.maybeNull(_.gK.string), title: _.gK.maybeNull(_.gK.string), url: _.gK.maybeNull(_.gK.string) }),
                s1 = _.gK
                    .compose(
                        _.gK.model('ArtistAboutModal', {
                            modal: ns.q,
                            artist: _.gK.maybeNull(eR.P),
                            artistType: _.gK.maybeNull(_.gK.enumeration(Object.values(rQ.o))),
                            description: _.gK.maybeNull(_.gK.string),
                            lastMonthListeners: _.gK.maybeNull(_.gK.number),
                            lastMonthListenersDelta: _.gK.optional(_.gK.number, 0),
                            covers: _.gK.maybeNull(_.gK.array(_.gK.string)),
                            links: _.gK.maybeNull(_.gK.array(s0)),
                        }),
                        ee.X,
                        w.p,
                    )
                    .views((e) => ({
                        get isArtistStatsAvailable() {
                            return Number.isFinite(e.lastMonthListeners);
                        },
                    }))
                    .actions((e) => {
                        let t = {
                            open(a) {
                                a && (t.getData(a), e.modal.open());
                            },
                            getData: (0, _.L3)(function* (t) {
                                let { artistsResource: a, modelActionsLogger: i } = (0, _._$)(e);
                                if (!e.isLoading)
                                    try {
                                        var r, l, n, s, o;
                                        e.loadingState = F.G.PENDING;
                                        let i = yield a.getAboutArtist({ artistId: t });
                                        ((e.artist = (0, eo.a)({ artist: i.artist })),
                                            (e.description = null != (o = i.description) ? o : null),
                                            (e.artistType = i.artistType === rQ.o.COMPOSER ? rQ.o.COMPOSER : rQ.o.ARTIST),
                                            i.stats &&
                                                Number.isFinite(null == (r = i.stats) ? void 0 : r.lastMonthListeners) &&
                                                (e.lastMonthListeners = i.stats.lastMonthListeners),
                                            i.stats &&
                                                Number.isFinite(null == (l = i.stats) ? void 0 : l.lastMonthListenersDelta) &&
                                                (e.lastMonthListenersDelta = i.stats.lastMonthListenersDelta));
                                        let d = null == (n = i.covers) ? void 0 : n.map((e) => e.uri).filter((e) => !!e);
                                        (d && (e.covers = (0, _.wg)(d)),
                                            (e.links = (0, _.wg)(null == (s = i.links) ? void 0 : s.map(sZ))),
                                            e.loadingState !== F.G.IDLE && (e.loadingState = F.G.RESOLVE));
                                    } catch (t) {
                                        (i.error(t), e.loadingState !== F.G.IDLE && (e.loadingState = F.G.REJECT));
                                    }
                            }),
                            close() {
                                (e.modal.close(), t.reset());
                            },
                            onOpenChange(a) {
                                (e.modal.onOpenChange(a), a || t.reset());
                            },
                            reset() {
                                ((e.loadingState = F.G.IDLE),
                                    (e.description = null),
                                    (e.lastMonthListeners = null),
                                    (e.lastMonthListenersDelta = 0),
                                    (e.artistType = null),
                                    e.destroyItems([e.artist, e.covers, e.links]));
                            },
                        };
                        return t;
                    }),
                s3 = _.gK
                    .model('ImageSliderModal', {
                        modal: ns.q,
                        images: _.gK.maybeNull(_.gK.array(_.gK.string)),
                        initialSlideIndex: _.gK.optional(_.gK.number, 0),
                        loadedImages: _.gK.maybeNull(_.gK.array(_.gK.string)),
                        sizeImage: _.gK.optional(_.gK.number, 1e3),
                        withAspectRatio: _.gK.optional(_.gK.boolean, !0),
                    })
                    .views((e) => ({ isImageLoaded: (t) => !!t && !!e.loadedImages && e.loadedImages.includes(t) }))
                    .actions((e) => ({
                        openImages(t) {
                            let { images: a, initialSlideIndex: i, sizeImage: r, withAspectRatio: l } = t;
                            ((e.images = (0, _.wg)((0, nL.HO)(a))),
                                (e.sizeImage = null != r ? r : 1e3),
                                (e.withAspectRatio = null == l || l),
                                i && (e.initialSlideIndex = i),
                                e.modal.open());
                        },
                        setImageIsLoaded(t) {
                            var a, i;
                            (e.loadedImages || (e.loadedImages = (0, _.wg)([])),
                                !t || (null == (a = e.loadedImages) ? void 0 : a.includes(t)) || null == (i = e.loadedImages) || i.push(t));
                        },
                        close() {
                            ((e.images = null), (e.initialSlideIndex = 0), (e.loadedImages = null), e.modal.close());
                        },
                    })),
                s2 = _.gK
                    .model('UgcTrackEditModal', { modal: ns.q })
                    .volatile(() => ({ track: null }))
                    .views((e) => ({
                        get trackTitle() {
                            if (!e.track) return '';
                            return e.track.title;
                        },
                        get trackArtist() {
                            if (!e.track) return '';
                            return e.track.artists.map((e) => e.name).join(', ');
                        },
                    }))
                    .actions((e) => {
                        let t = {
                            open(t) {
                                ((e.track = t), e.modal.open());
                            },
                            close() {
                                (e.modal.close(), t.reset());
                            },
                            reset() {
                                e.track = null;
                            },
                        };
                        return t;
                    }),
                s5 = _.gK.model('ModalsModel', {
                    disclaimerModal: ns.q,
                    shortcutsModal: ns.q,
                    aboutAppModal: ns.q,
                    overviewModal: ns.q,
                    ugcTrackEditModal: s2,
                    crackdownModal: ns.q,
                    overwrittenExperimentsModal: ns.q,
                    overwrittenMocksModal: ns.q,
                    buySubscriptionModal: ns.q,
                    clearMemoryModal: ns.q,
                    imageSliderModal: s3,
                    promoLandingBuySubscriptionModal: ns.q,
                    artistAboutModal: s1,
                    bestRecommedationModal: ns.q,
                }),
                s6 = (e) => 'object' == typeof e && e && 'type' in e,
                s8 = (e) => {
                    switch (e.type) {
                        case el._.WAVE_ITEM:
                            return (0, _.wg)({ type: el._.WAVE_ITEM, data: (0, tZ.e)(e.data) });
                        case el._.PLAYLIST_ITEM:
                            return (0, _.wg)({ type: el._.PLAYLIST_ITEM, data: (0, eg.b)({ playlist: e.data }) });
                        case el._.ARTIST_ITEM:
                            return (0, _.wg)({ type: el._.ARTIST_ITEM, data: (0, eo.a)({ artist: e.data }) });
                        case el._.ALBUM_ITEM:
                            return (0, _.wg)({ type: el._.ALBUM_ITEM, data: (0, en.s)({ album: e.data }) });
                    }
                },
                s4 = _.gK.model('PinAlbumItemModel', { type: _.gK.literal(el._.ALBUM_ITEM), data: eC.J }),
                s7 = _.gK.model('PinArtistItemModel', { type: _.gK.literal(el._.ARTIST_ITEM), data: eR.P }),
                s9 = _.gK.model('PinPlaylistItemModel', { type: _.gK.literal(el._.PLAYLIST_ITEM), data: tM.$ }),
                oe = _.gK.model('PinVibeItemModel', { type: _.gK.literal(el._.WAVE_ITEM), data: eX.G }),
                ot = _.gK.union(s4, s7, s9, oe),
                oa = _.gK
                    .model('Pins', { loadingState: _.gK.enumeration(Object.values(F.G)), items: _.gK.maybeNull(_.gK.array(ot)), index: _.gK.map(_.gK.boolean) })
                    .views((e) => ({
                        get filteredItems() {
                            let { experiments: t } = (0, D.M)(e),
                                a = t.checkExperiment(O.z.WebNextProductWithoutRecommendation, 'on');
                            if (!e.items) return null;
                            if (a) return e.items.filter((e) => e.type !== el._.WAVE_ITEM);
                            return e.items;
                        },
                        isPinned: (t) => !!e.index.get(t),
                        get(t) {
                            var a;
                            return null == (a = e.items) ? void 0 : a.find((e) => e.data.pinId === t);
                        },
                    }))
                    .actions((e) => {
                        let t = {
                            deletePin(t) {
                                var a;
                                ((e.items = (0, _.wg)(null == (a = e.items) ? void 0 : a.filter((e) => e.data.pinId !== t))), e.index.delete(t));
                            },
                            addPin(t) {
                                var a, i, r, l;
                                if ((null == (a = e.items) ? void 0 : a.length) === 30) {
                                    let t = null == (l = e.items) ? void 0 : l.pop();
                                    void 0 !== t && e.index.delete(t.data.pinId);
                                }
                                null == (i = e.items) || i.unshift(s8(t));
                                let n = null == (r = e.items) ? void 0 : r.at(0);
                                n && e.index.set(n.data.pinId, !0);
                            },
                            getData: (0, _.L3)(function* () {
                                let { pinsResource: t, modelActionsLogger: a } = (0, _._$)(e);
                                if (e.loadingState !== F.G.PENDING)
                                    try {
                                        var i;
                                        e.loadingState = F.G.PENDING;
                                        let a = yield t.getPins();
                                        ((e.items = (0, _.wg)(a.pins.map(s8))),
                                            null == (i = e.items) ||
                                                i.forEach((t) => {
                                                    e.index.set(t.data.pinId, !0);
                                                }),
                                            (e.loadingState = F.G.RESOLVE));
                                    } catch (t) {
                                        ((e.loadingState = F.G.REJECT), a.error(t));
                                    }
                            }),
                            toggleAlbumPin: (0, _.L3)(function* (a, i) {
                                let { pinResource: r, modelActionsLogger: l } = (0, _._$)(e);
                                if (e.loadingState !== F.G.PENDING)
                                    try {
                                        let l;
                                        if (e.isPinned(i)) return ((l = yield r.unpinAlbum(a)), t.deletePin(i), l);
                                        return ((l = yield r.pinAlbum(a)), s6(l) && t.addPin(l), l);
                                    } catch (e) {
                                        l.error(e);
                                        return;
                                    }
                            }),
                            toggleArtistPin: (0, _.L3)(function* (a, i) {
                                let { pinResource: r, modelActionsLogger: l } = (0, _._$)(e);
                                if (e.loadingState !== F.G.PENDING)
                                    try {
                                        let l;
                                        if (e.isPinned(i)) return ((l = yield r.unpinArtist(a)), t.deletePin(i), l);
                                        return ((l = yield r.pinArtist(a)), s6(l) && t.addPin(l), l);
                                    } catch (e) {
                                        l.error(e);
                                        return;
                                    }
                            }),
                            togglePlaylistPin: (0, _.L3)(function* (a, i) {
                                let { pinResource: r, modelActionsLogger: l } = (0, _._$)(e);
                                if (e.loadingState !== F.G.PENDING)
                                    try {
                                        let l;
                                        if (e.isPinned(i)) return ((l = yield r.unpinPlaylist(a)), t.deletePin(i), l);
                                        return ((l = yield r.pinPlaylist(a)), s6(l) && t.addPin(l), l);
                                    } catch (e) {
                                        l.error(e);
                                        return;
                                    }
                            }),
                            toggleVibePin: (0, _.L3)(function* (a, i) {
                                let { pinResource: r, modelActionsLogger: l } = (0, _._$)(e);
                                if (e.loadingState !== F.G.PENDING)
                                    try {
                                        let l;
                                        if (e.isPinned(i)) return ((l = yield r.unpinWave(a)), t.deletePin(i), l);
                                        return ((l = yield r.pinWave(a)), s6(l) && t.addPin(l), l);
                                    } catch (e) {
                                        l.error(e);
                                        return;
                                    }
                            }),
                        };
                        return t;
                    }),
                oi = _.gK
                    .model({ modal: ns.q, freemiumCollectionBarrier: _.gK.optional(_.gK.boolean, !1) })
                    .views((e) => {
                        let t = {
                            get shouldShowMobilePaywall() {
                                var a;
                                let { settings: t, user: i, freeAccess: r } = (0, D.M)(e);
                                return !!((null == (a = t.browserInfo) ? void 0 : a.isTouch) && (!i.isAuthorized || r.isFreeWebUser));
                            },
                            get isPassed() {
                                let { desktopPaywall: a } = (0, D.M)(e);
                                return !t.shouldShowMobilePaywall && a.isPassed;
                            },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        openModal() {
                            e.modal.open();
                        },
                        openFreemiumCollectionPaywall() {
                            ((e.freemiumCollectionBarrier = !0), e.modal.open());
                        },
                        clearFreemiumCollectionBarrier() {
                            e.freemiumCollectionBarrier && ((e.freemiumCollectionBarrier = !1), e.modal.close());
                        },
                        closeModal() {
                            if (e.freemiumCollectionBarrier) return;
                            let { desktopPaywall: t } = (0, D.M)(e);
                            (t.startCrackdownTimeout(), e.modal.close());
                        },
                        onOpenChange(t) {
                            if (t || !e.freemiumCollectionBarrier) {
                                if (!t) {
                                    let { desktopPaywall: t } = (0, D.M)(e);
                                    t.startCrackdownTimeout();
                                }
                                e.modal.onOpenChange(t);
                            }
                        },
                    })),
                or = _.gK.model('AdContainer', {
                    adTitle: _.gK.maybe(_.gK.string),
                    iconSrc: _.gK.maybe(_.gK.string),
                    clickThroughUrl: _.gK.maybe(_.gK.string),
                    src: _.gK.maybe(_.gK.string),
                    clientLegalInfo: _.gK.maybe(_.gK.string),
                    advertiserInfoUrl: _.gK.maybe(_.gK.string),
                }),
                ol = _.gK
                    .model('Advert', {
                        data: _.gK.maybeNull(or),
                        isAdvertShown: _.gK.maybe(_.gK.boolean),
                        isAdvertPlaying: _.gK.maybe(_.gK.boolean),
                        isAdvertPlaybackCreated: _.gK.boolean,
                    })
                    .actions((e) => ({
                        setData: (t) => {
                            e.data = (0, _.wg)({
                                adTitle: null == t ? void 0 : t.adTitle,
                                iconSrc: null == t ? void 0 : t.iconSrc,
                                clickThroughUrl: null == t ? void 0 : t.clickThroughUrl,
                                clientLegalInfo: null == t ? void 0 : t.clientLegalInfo,
                                advertiserInfoUrl: null == t ? void 0 : t.advertiserInfoUrl,
                            });
                        },
                        setAdvertShown: (t) => {
                            e.isAdvertShown = t;
                        },
                        setAdvertPlaying: (t) => {
                            e.isAdvertPlaying = t;
                        },
                        setIsAdvertPlaybackCreated(t) {
                            e.isAdvertPlaybackCreated = t;
                        },
                        isAdvertDisabled(t) {
                            var a, i;
                            let { experiments: r } = (0, D.M)(e),
                                l = null == (i = r.getExperiment(O.z.WebNextDisableAds)) || null == (a = i.value) ? void 0 : a.values;
                            return Array.isArray(l) && l.includes(t);
                        },
                        reset: () => {
                            ((e.data = null), (e.isAdvertPlaying = !0), (e.isAdvertShown = !1));
                        },
                    }));
            var on = a(12670),
                os = a(37173);
            let oo = _.gK
                .model('FreePlayerAccess', { restrictionModal: _.gK.maybe(_.gK.frozen()) })
                .views((e) => ({
                    get shownRestrictionModal() {
                        var t;
                        return null != (t = e.restrictionModal) ? t : null;
                    },
                }))
                .actions((e) => ({
                    showRestrictionModal(t) {
                        let { user: a, freeAccess: i, fullscreenPlayer: r, sonataState: l } = (0, D.M)(e);
                        if (t === os.W.Playing && l.isGenerativeContext) {
                            e.restrictionModal = void 0;
                            return;
                        }
                        if (!a.isAuthorized) {
                            e.restrictionModal = r.modal.isOpened ? on.h.FullscreenUnauthorized : on.h.PlayerAuthorization;
                            return;
                        }
                        if (!(t === os.W.Playing ? i.isFreeDesktopUser || i.limitedFreePlayback : i.isFreeWebUser)) {
                            e.restrictionModal = void 0;
                            return;
                        }
                        e.restrictionModal = r.modal.isOpened ? on.h.FullscreenSubscription : on.h.PlayerSubscription;
                    },
                    hideRestrictionModal() {
                        e.restrictionModal = void 0;
                    },
                }));
            var od = a(85585),
                og = a(7123),
                ou = a(48109);
            let oc = (e) => {
                    switch (e.data.type) {
                        case aJ.R.Generative: {
                            var t;
                            let a = e.data.meta,
                                i = (0, ou.Q)(null == a ? void 0 : a.derivedColors);
                            return (0, _.wg)({
                                id: String(a.id),
                                coverUri: a.imageUrl,
                                title: null != (t = a.title) ? t : '',
                                isAvailable: !0,
                                isRemoved: !1,
                                averageColor: i,
                            });
                        }
                        case aJ.R.Clip:
                        case og.z4.Unloaded:
                        case aJ.R.Radio:
                            return null;
                        default: {
                            let t = e.data.meta;
                            return (0, _.wg)({ ...(0, z.K)(t), isHiddenFromSonataQueue: e.hidden });
                        }
                    }
                },
                om = Z.v.props({ isHiddenFromSonataQueue: _.gK.maybe(_.gK.boolean) }).views((e) => ({
                    get idWithContext() {
                        return e.albumId ? ''.concat(e.id, ':').concat(e.albumId) : e.id;
                    },
                    get mainArtist() {
                        var t, a;
                        return null != (a = null == (t = e.artists) ? void 0 : t[0]) ? a : null;
                    },
                    get isPodcast() {
                        var i;
                        return e.isTrackPodcast || (null == (i = e.mainAlbum) ? void 0 : i.isPodcast);
                    },
                    get isAudiobook() {
                        return e.type === $.S.AUDIOBOOK;
                    },
                    get isFairyTale() {
                        return e.type === $.S.FAIRY_TALE;
                    },
                    get isNonMusic() {
                        return this.isPodcast || this.isAudiobook || this.isFairyTale;
                    },
                })),
                oy = _.gK
                    .compose(
                        _.gK.model('PlayQueue', {
                            isVisible: _.gK.optional(_.gK.boolean, !1),
                            beforeTracksIds: _.gK.maybeNull(_.gK.array(_.gK.number)),
                            afterTracksIds: _.gK.optional(_.gK.frozen(), []),
                            hiddenTrackIds: _.gK.array(_.gK.number),
                            currentIndex: _.gK.optional(_.gK.number, 0),
                            trackMap: _.gK.optional(_.gK.map(om), {}),
                        }),
                        w.p,
                    )
                    .views((e) => ({
                        get isVibeBlockShowed() {
                            let {
                                experiments: t,
                                slam: a,
                                sonataState: { isVibeContext: i, isContextRepeatMode: r },
                            } = (0, D.M)(e);
                            return (
                                !t.checkExperiment(O.z.WebNextProductWithoutRecommendation, 'on') && !a.isOfflineModeEnabled && !i && !r && 0 === e.afterTracksIds.length
                            );
                        },
                        get itemsKeys() {
                            var t, a;
                            return null != (a = null == (t = e.beforeTracksIds) ? void 0 : t.concat(e.afterTracksIds).map(String)) ? a : [];
                        },
                        get isDragAndDropEnabled() {
                            let {
                                experiments: t,
                                sonataState: { isVibeContext: a },
                            } = (0, D.M)(e);
                            return t.checkExperiment(O.z.WebNextPlayQueueDnD, 'on') && !a;
                        },
                    }))
                    .actions((e) => {
                        let t = (t, a) => {
                                let i = t[a];
                                if (!i || (0, og.Re)(i)) return null;
                                let { entity: r } = i,
                                    l = oc(r);
                                return !l || l.isHiddenFromSonataQueue ? null : (e.trackMap.has(l.id) || e.trackMap.set(l.id, (0, _.wg)(l)), a);
                            },
                            a = {
                                setVisible() {
                                    e.isVisible = !0;
                                },
                                setInvisible() {
                                    e.isVisible = !1;
                                },
                                updateTracks(e, t, i, r) {
                                    (a.setCurrentTrackId(e, t), a.setBeforeTracksIds(e, i), a.setAfterTracksIds(e, i, r), a.setHiddenTrackIds(e));
                                },
                                setCurrentTrackId(a, i) {
                                    ((e.currentIndex = i), t(a, i));
                                },
                                setBeforeTracksIds(a, i) {
                                    let r = Math.max(0, e.currentIndex - 125) - 1,
                                        l = [];
                                    for (let n = e.currentIndex - 1; n > r; n--) {
                                        let e = i[n];
                                        if ('number' != typeof e) break;
                                        let r = t(a, e);
                                        null !== r && l.unshift(r);
                                    }
                                    e.beforeTracksIds = (0, _.wg)(l);
                                },
                                setAfterTracksIds(a, i, r) {
                                    let l = r === sU.K.Vibe ? 1 : 125,
                                        n = [];
                                    for (let r = e.currentIndex + 1; r < i.length && n.length < l; r++) {
                                        let e = i[r];
                                        if ('number' != typeof e) break;
                                        let l = t(a, e);
                                        null !== l && n.push(l);
                                    }
                                    e.afterTracksIds = n;
                                },
                                setHiddenTrackIds(t) {
                                    let a = [];
                                    for (let e = 0; e < t.length; e++) {
                                        let i = t[e];
                                        i && i.entity.hidden && a.push(e);
                                    }
                                    e.hiddenTrackIds = (0, _.wg)(a);
                                },
                                reset() {
                                    (e.destroyItems([e.beforeTracksIds, e.hiddenTrackIds]), (e.afterTracksIds = []), e.trackMap.clear());
                                },
                            };
                        return a;
                    });
            var op = a(54020);
            !(function (e) {
                ((e.TEXT = 'TEXT'), (e.LRC = 'LRC'), (e.RICH_JSON = 'RICH_JSON'));
            })(d || (d = {}));
            var oE = a(14984),
                ob = a(12149);
            let ov = (e, t, a) => {
                    let i = Math.floor(Date.now() / 1e3),
                        r = ''.concat(t).concat(i);
                    return {
                        sign: (0, oE.createHmac)('sha256', (0, T.Ef)(e, (0, ob.u)()))
                            .update(r)
                            .digest('base64'),
                        timeStamp: i,
                        trackId: t,
                        format: a,
                    };
                },
                oS = (e) => (0, _.wg)({ id: e.id, name: e.name, prettyName: e.prettyName }),
                oK = _.gK.model('MajorModel', { id: _.gK.number, name: _.gK.string, prettyName: _.gK.maybeNull(_.gK.string) }),
                oI = (e) => {
                    if (!e) return;
                    let t = e.split(':'),
                        a = parseInt(t[0] || '0', 10),
                        i = parseFloat(t[1] || '0');
                    return a > 0 ? parseFloat((60 * a + i).toFixed(2)) : i;
                },
                oL = _.gK.model('SyncLyricsLine', { text: _.gK.string, fromSec: _.gK.number, toSec: _.gK.maybe(_.gK.number) }).views((e) => ({
                    get key() {
                        return ''.concat(e.fromSec, ':').concat(e.toSec);
                    },
                })),
                oT = _.gK
                    .compose(
                        _.gK.model('SyncLyrics', {
                            isVisible: _.gK.optional(_.gK.boolean, !1),
                            lines: _.gK.maybeNull(_.gK.array(oL)),
                            major: _.gK.maybeNull(oK),
                            writers: _.gK.maybeNull(_.gK.array(_.gK.string)),
                            lyricId: _.gK.maybeNull(_.gK.number),
                            externalLyricId: _.gK.maybeNull(_.gK.string),
                            currentTrackId: _.gK.maybeNull(_.gK.union(_.gK.string, _.gK.number)),
                            hasLyricsViewed: _.gK.optional(_.gK.boolean, !1),
                        }),
                        ee.X,
                    )
                    .views((e) => ({
                        get startSec() {
                            var t;
                            let a = null == (t = e.lines) ? void 0 : t.at(0);
                            return null == a ? void 0 : a.fromSec;
                        },
                        get endSec() {
                            var a;
                            let t = null == (a = e.lines) ? void 0 : a.at(-1);
                            return null == t ? void 0 : t.toSec;
                        },
                        get hasWriters() {
                            var i;
                            return !!(e.writers && (null == (i = e.writers) ? void 0 : i.length) > 0);
                        },
                        get hasInvalidLyrics() {
                            var r;
                            return !!(e.isResolved && (null == (r = e.lines) ? void 0 : r.length) === 0);
                        },
                    }))
                    .actions((e) => {
                        let t = {
                            setVisible() {
                                e.isVisible = !0;
                            },
                            setInvisible() {
                                e.isVisible = !1;
                            },
                            getActiveLineIndex: (t) => {
                                if ((e.startSec && t < e.startSec) || (e.endSec && t > e.endSec)) return null;
                                let a = (e.lines || []).findIndex((e) => (void 0 === e.toSec ? t >= e.fromSec : !!(t >= e.fromSec) && !!(e.toSec >= t)));
                                return a >= 0 ? a : null;
                            },
                            getData: (0, _.L3)(function* (a) {
                                let { config: i, tracksResource: r, modelActionsLogger: l } = (0, _._$)(e);
                                if (a)
                                    try {
                                        e.loadingState = F.G.PENDING;
                                        let { downloadUrl: l, major: n, externalLyricId: s, lyricId: o, writers: g } = yield r.getLyrics(ov(i, a, d.LRC));
                                        ((e.major = oS(n)),
                                            (e.externalLyricId = s),
                                            (e.lyricId = o),
                                            (e.writers = (0, _.wg)(g)),
                                            (e.currentTrackId = a),
                                            (e.hasLyricsViewed = !1),
                                            yield t.downloadSyncLyrics(l),
                                            (e.loadingState = F.G.RESOLVE));
                                    } catch (t) {
                                        ((e.loadingState = F.G.REJECT), l.error(t));
                                    }
                            }),
                            downloadSyncLyrics: (0, _.L3)(function* (t) {
                                let { prefixlessResource: a } = (0, _._$)(e),
                                    i = yield a.getLyricsText(t);
                                e.lines = (0, _.wg)(
                                    ((e) => {
                                        try {
                                            return (
                                                ((e) => {
                                                    if ('string' != typeof e) throw TypeError('expect first argument to be a string');
                                                    let t = e.split('\n'),
                                                        a = /\[(\d*:\d*\.?\d*)\]/,
                                                        i = new RegExp(a.source + /(.+)/.source),
                                                        r = [],
                                                        l = [],
                                                        n = { scripts: [] };
                                                    for (let e = 0; e < t.length; e++) {
                                                        let a = t[e];
                                                        if (a && !1 === i.test(a)) r.push(a);
                                                        else break;
                                                    }
                                                    (r.reduce((e, t) => {
                                                        let a = t.trim().slice(1, -1).split(': '),
                                                            i = a[0],
                                                            r = a[1];
                                                        return (void 0 !== i && (e[i] = r), e);
                                                    }, n),
                                                        t.splice(0, r.length));
                                                    let s = new RegExp(''.concat(i.source, '|').concat(a.source));
                                                    t = t.filter((e) => e && s.test(e));
                                                    for (let e = 0, r = t.length; e < r; e++) {
                                                        let n = t[e],
                                                            s = e + 1 < r ? t[e + 1] : null;
                                                        if (n) {
                                                            let e = i.exec(n),
                                                                t = s ? a.exec(s) : null;
                                                            if (e) {
                                                                let [, a, i] = e,
                                                                    r = null == t ? void 0 : t[1];
                                                                a && l.push({ start: oI(a), text: i || '', end: oI(r) });
                                                            }
                                                        }
                                                    }
                                                    return ((n.scripts = l), n);
                                                })(e).scripts || []
                                            ).map((e) => {
                                                let { start: t, end: a, text: i } = e;
                                                return (0, _.wg)({ text: i.trim(), fromSec: t, toSec: a });
                                            });
                                        } catch (e) {
                                            return [];
                                        }
                                    })(i),
                                );
                            }),
                            sendViews: (0, _.L3)(function* (t) {
                                let { contextId: a, contextType: i } = t,
                                    { lyricViewsResource: r, modelActionsLogger: l } = (0, _._$)(e);
                                if (e.loadingState === F.G.RESOLVE)
                                    try {
                                        if (!e.major || !e.lyricId || !e.externalLyricId || !e.currentTrackId) return;
                                        (yield r.sendViews({
                                            lyricViews: [
                                                {
                                                    id: (0, op.A)(),
                                                    trackId: e.currentTrackId,
                                                    majorId: e.major.id,
                                                    lyricId: e.lyricId,
                                                    externalLyricId: e.externalLyricId,
                                                    lyricFormat: d.LRC,
                                                    albumId: i === sU.K.Album && a ? a : void 0,
                                                    playlistId: i === sU.K.Playlist && a ? a : void 0,
                                                },
                                            ],
                                        }),
                                            (e.hasLyricsViewed = !0));
                                    } catch (e) {
                                        l.error(e);
                                    }
                            }),
                        };
                        return t;
                    }),
                oh = _.gK
                    .model('FullscreenPlayer', { mode: _.gK.maybeNull(_.gK.enumeration(Object.values(od.u))), syncLyrics: oT, playQueue: oy, modal: ns.q })
                    .views((e) => ({
                        get isSplitMode() {
                            return this.isPlayQueueMode || this.isSyncLyricsMode;
                        },
                        get isSyncLyricsMode() {
                            var t;
                            let { sonataState: a } = (0, D.M)(e);
                            return e.mode === od.u.SYNC_LYRICS && !!(null == a || null == (t = a.entityMeta) ? void 0 : t.isSyncLyricsAvailable);
                        },
                        get isPlayQueueMode() {
                            return e.mode === od.u.PLAY_QUEUE;
                        },
                    }))
                    .actions((e) => ({
                        setMode(t) {
                            e.mode = t;
                        },
                        showFullscreenPlayerModal() {
                            (e.syncLyrics.setInvisible(), e.modal.open());
                        },
                        showSyncLyrics() {
                            ((e.mode = od.u.SYNC_LYRICS), e.syncLyrics.setVisible(), e.modal.isOpened || e.modal.open());
                        },
                        hideSyncLyrics() {
                            ((e.mode = null), e.syncLyrics.setInvisible());
                        },
                        showPlayQueue() {
                            ((e.mode = od.u.PLAY_QUEUE), e.playQueue.setVisible(), e.modal.isOpened || e.modal.open());
                        },
                        hidePlayQueue() {
                            ((e.mode = null), e.playQueue.setInvisible());
                        },
                        isModeActive: (t) => e.mode === t,
                        reset() {
                            e.mode = null;
                        },
                    })),
                oN = _.gK.model('QualitySettings', { modal: ns.q });
            var oA = a(67960);
            let of = _.gK.model('UtmLink', {
                    utmSource: _.gK.maybe(_.gK.string),
                    utmCampaign: _.gK.maybe(_.gK.string),
                    utmMedium: _.gK.maybe(_.gK.string),
                    utmTerm: _.gK.maybe(_.gK.string),
                    yclid: _.gK.maybe(_.gK.string),
                }),
                oC = (e, t) => {
                    let a = (0, tl.v)(e, t);
                    if (null == t ? void 0 : t.albumId) {
                        var i, r;
                        let e = a.albums.find((e) => String(e.id) === String(t.albumId));
                        return {
                            ...a,
                            isBest: null == e || null == (i = e.bestAlbumTracks) ? void 0 : i.includes(Number(a.id)),
                            positionInAlbum: null == e || null == (r = e.trackPosition) ? void 0 : r.index,
                        };
                    }
                    return (0, _.wg)({ ...a });
                };
            var oR = a(27984);
            let ok = _.gK
                    .model('TrailerMeta', {
                        id: _.gK.string,
                        url: _.gK.string,
                        title: _.gK.maybe(_.gK.string),
                        uuid: _.gK.maybe(_.gK.string),
                        coverUri: _.gK.maybe(_.gK.string),
                        averageColor: _.gK.maybe(_.gK.string),
                        albumArtists: _.gK.maybe(_.gK.array(eR.P)),
                        albumType: _.gK.maybe(_.gK.string),
                    })
                    .views((e) => ({
                        getSharingProps(t) {
                            switch (t) {
                                case oR.H.ALBUM:
                                    return { pattern: '/album/:albumId', params: { albumId: e.id } };
                                case oR.H.ARTIST:
                                    return { pattern: '/artist/:artistId', params: { artistId: e.id } };
                                case oR.H.PLAYLIST:
                                    return { pattern: '/playlists/:playlistUuid', params: { playlistUuid: e.uuid } };
                                case oR.H.TRACK:
                                    return { pattern: '/track/:trackId', params: { trackId: e.id } };
                                default:
                                    return { pattern: ah.Z.main.href, params: {} };
                            }
                        },
                    })),
                oP = _.gK
                    .model('TrailerState', {
                        contextType: _.gK.maybeNull(_.gK.enumeration(Object.values(sU.K))),
                        contextId: _.gK.maybeNull(_.gK.string),
                        entityMeta: _.gK.maybeNull(om),
                        status: _.gK.enumeration(Object.values(og.MT)),
                    })
                    .actions((e) => ({
                        setContextId: (t) => {
                            e.contextId = String(t);
                        },
                        setContextType: (t) => {
                            e.contextType = t;
                        },
                        setEntityMeta: (t) => {
                            t && t.data.meta && (e.entityMeta = oc(t));
                        },
                        setStatus: (t) => {
                            e.status = t;
                        },
                    })),
                o_ = Z.v.props({ isBest: _.gK.maybe(_.gK.boolean), positionInAlbum: _.gK.maybe(_.gK.number) }).named('TrailerTrack'),
                oD = _.gK
                    .compose(
                        _.gK.model('Trailer', {
                            id: _.gK.maybeNull(_.gK.string),
                            errorStatusCode: _.gK.maybeNull(_.gK.number),
                            modal: ns.q,
                            variant: _.gK.maybeNull(_.gK.enumeration(Object.values(oR.H))),
                            tracks: _.gK.maybeNull(_.gK.array(o_)),
                            meta: _.gK.maybeNull(ok),
                            state: oP,
                            withAnimation: _.gK.boolean,
                            shouldAutoStartPlaying: _.gK.boolean,
                            sonataStatusBeforeTrailerStart: _.gK.enumeration(Object.values(og.MT)),
                            isManuallyPaused: _.gK.boolean,
                            utmLinkModel: _.gK.maybe(of),
                            title: _.gK.maybeNull(_.gK.string),
                            shareable: _.gK.maybeNull(_.gK.boolean),
                            personalColor: _.gK.maybeNull(_.gK.number),
                        }),
                        ee.X,
                    )
                    .views((e) => ({
                        get isLoading() {
                            return e.isNeededToLoad || e.loadingState === F.G.PENDING;
                        },
                        get isNotFound() {
                            var t;
                            let a = e.loadingState === F.G.RESOLVE && (null == (t = e.tracks) ? void 0 : t.length) === 0,
                                i = e.errorStatusCode === U.X1.NOT_FOUND;
                            return a || i;
                        },
                        get objectId() {
                            return ''.concat(e.variant, ':').concat(e.id);
                        },
                        get utmLink() {
                            return e.utmLinkModel && (0, nL.HO)(e.utmLinkModel);
                        },
                    }))
                    .actions((e) => {
                        let t = {
                            setUtmLink(t) {
                                t && (e.utmLinkModel = (0, _.wg)(t));
                            },
                            resetUtmLink() {
                                e.utmLinkModel = void 0;
                            },
                            setAnimationState(t) {
                                e.withAnimation = t;
                            },
                            setShouldAutoStartPlaying(t) {
                                e.shouldAutoStartPlaying = t;
                            },
                            setIsManuallyPaused(t) {
                                e.isManuallyPaused = t;
                            },
                            isTrailerActive: (t, a) => !!e.modal.isOpened && e.variant === t && e.id === a,
                            openArtistTrailer(a) {
                                let { sonataState: i } = (0, D.M)(e);
                                t.isTrailerActive(oR.H.ARTIST, a) ||
                                    (t.reset(),
                                    (e.variant = oR.H.ARTIST),
                                    (e.id = a),
                                    (e.sonataStatusBeforeTrailerStart = i.status),
                                    e.modal.open(),
                                    t.getArtistTrailer(a));
                            },
                            openAlbumTrailer(a) {
                                let { sonataState: i } = (0, D.M)(e);
                                t.isTrailerActive(oR.H.ALBUM, String(a)) ||
                                    (t.reset(),
                                    (e.variant = oR.H.ALBUM),
                                    (e.id = String(a)),
                                    (e.sonataStatusBeforeTrailerStart = i.status),
                                    e.modal.open(),
                                    t.getAlbumTrailer(a));
                            },
                            openPlaylistTrailer(a) {
                                let { sonataState: i } = (0, D.M)(e);
                                t.isTrailerActive(oR.H.PLAYLIST, a) ||
                                    (t.reset(),
                                    (e.variant = oR.H.PLAYLIST),
                                    (e.id = a),
                                    (e.sonataStatusBeforeTrailerStart = i.status),
                                    e.modal.open(),
                                    t.getPlaylistTrailer(a));
                            },
                            openTrackTrailer(a) {
                                let { sonataState: i } = (0, D.M)(e);
                                t.isTrailerActive(oR.H.TRACK, a) ||
                                    (t.reset(),
                                    (e.variant = oR.H.TRACK),
                                    (e.id = a),
                                    (e.sonataStatusBeforeTrailerStart = i.status),
                                    e.modal.open(),
                                    t.getTrackTrailer(a));
                            },
                            getArtistTrailer: (0, _.L3)(function* (a) {
                                let { artistsResource: i } = (0, _._$)(e);
                                if (e.loadingState !== F.G.PENDING)
                                    try {
                                        e.loadingState = F.G.PENDING;
                                        let { artist: t, trailer: r } = yield i.getTrailer({ artistId: a });
                                        (r.tracks && (e.tracks = (0, _.wg)(r.tracks.map((e) => oC(e, { isSmartPreview: !0 })))),
                                            r.title && (e.title = r.title),
                                            t &&
                                                (e.meta = ((e) => {
                                                    var t, a;
                                                    let { href: i } = (0, ek.u)('/artist/:artistId', { params: { artistId: e.id } });
                                                    return (0, _.wg)({
                                                        id: String(e.id),
                                                        url: i,
                                                        title: e.name,
                                                        coverUri: null == (t = e.cover) ? void 0 : t.uri,
                                                        averageColor: null == (a = e.cover) ? void 0 : a.color,
                                                    });
                                                })(t)),
                                            (e.loadingState = F.G.RESOLVE));
                                    } catch (e) {
                                        t.handleError(e);
                                    }
                            }),
                            getAlbumTrailer: (0, _.L3)(function* (a) {
                                let { albumResource: i } = (0, _._$)(e);
                                if (e.loadingState !== F.G.PENDING)
                                    try {
                                        e.loadingState = F.G.PENDING;
                                        let { album: t, artists: r, trailer: l } = yield i.getTrailer({ albumId: a });
                                        (l.tracks && (e.tracks = (0, _.wg)(l.tracks.map((e) => oC(e, { isSmartPreview: !0, albumId: t.id })))),
                                            l.title && (e.title = l.title),
                                            t &&
                                                (e.meta = ((e, t) => {
                                                    var a, i;
                                                    let r = null == t ? void 0 : t.map((e) => (0, eo.a)({ artist: e })),
                                                        { href: l } = (0, ek.u)('/album/:albumId', { params: { albumId: e.id } });
                                                    return (0, _.wg)({
                                                        id: String(e.id),
                                                        url: l,
                                                        title: e.title,
                                                        coverUri: null == (a = e.cover) ? void 0 : a.uri,
                                                        averageColor: null == (i = e.cover) ? void 0 : i.color,
                                                        albumArtists: r,
                                                        albumType: e.albumType,
                                                    });
                                                })(t, r)),
                                            (e.loadingState = F.G.RESOLVE));
                                    } catch (e) {
                                        t.handleError(e);
                                    }
                            }),
                            getPlaylistTrailer: (0, _.L3)(function* (a) {
                                let { usersResource: i } = (0, _._$)(e);
                                if (e.loadingState !== F.G.PENDING)
                                    try {
                                        e.loadingState = F.G.PENDING;
                                        let { uid: t, kind: r } = (0, oA.I)(a);
                                        if (!t || !r) {
                                            e.loadingState = F.G.REJECT;
                                            return;
                                        }
                                        let {
                                            playlist: l,
                                            trailer: n,
                                            shareable: s,
                                            personalColor: o,
                                        } = yield i.getPlaylistTrailer({ userId: t, playlistKind: Number(r) });
                                        (n.tracks && (e.tracks = (0, _.wg)(n.tracks.map((e) => oC(e, { isSmartPreview: !0 })))),
                                            n.title && (e.title = n.title),
                                            s && (e.shareable = s),
                                            o && (e.personalColor = o),
                                            l &&
                                                (e.meta = ((e) => {
                                                    var t, a;
                                                    let { href: i } = (0, ek.u)('/playlists/:playlistUuid', { params: { playlistUuid: e.playlistUuid } });
                                                    return (0, _.wg)({
                                                        id: ''.concat(e.uid, ':').concat(e.kind),
                                                        url: i,
                                                        uuid: e.playlistUuid,
                                                        title: e.title,
                                                        coverUri: null == (t = e.cover) ? void 0 : t.uri,
                                                        averageColor: null == (a = e.cover) ? void 0 : a.color,
                                                    });
                                                })(l)),
                                            (e.loadingState = F.G.RESOLVE));
                                    } catch (e) {
                                        t.handleError(e);
                                    }
                            }),
                            getTrackTrailer: (0, _.L3)(function* (a) {
                                let { tracksResource: i } = (0, _._$)(e);
                                if (e.loadingState !== F.G.PENDING)
                                    try {
                                        e.loadingState = F.G.PENDING;
                                        let { track: t, title: s } = yield i.getTrailer({ trackId: a });
                                        if ((s && (e.title = s), t)) {
                                            var r, l, n;
                                            ((e.tracks = (0, _.wg)([oC(t, { isSmartPreview: !0 })])),
                                                (e.meta = (0, _.wg)({
                                                    id: String(t.id),
                                                    url: ((e, t) => {
                                                        if (!t) {
                                                            let { href: t } = (0, ek.u)('/track/:trackId', { params: { trackId: e } });
                                                            return t;
                                                        }
                                                        let { href: a } = (0, ek.u)('/album/:albumId/track/:trackId', { params: { albumId: t, trackId: e } });
                                                        return a;
                                                    })(t.id, null == (l = t.albums) || null == (r = l[0]) ? void 0 : r.id),
                                                    title: t.title,
                                                    coverUri: t.coverUri,
                                                    averageColor: null == (n = t.derivedColors) ? void 0 : n.average,
                                                })));
                                        }
                                        e.loadingState = F.G.RESOLVE;
                                    } catch (e) {
                                        t.handleError(e);
                                    }
                            }),
                            handleError(t) {
                                let { modelActionsLogger: a } = (0, _._$)(e);
                                (a.error(t),
                                    t instanceof U.GX && (t.statusCode === U.X1.NOT_FOUND || t.statusCode === U.X1.BAD_REQUEST) && (e.errorStatusCode = U.X1.NOT_FOUND),
                                    e.loadingState !== F.G.IDLE && (e.loadingState = F.G.REJECT));
                            },
                            reset() {
                                ((e.loadingState = F.G.IDLE),
                                    (e.errorStatusCode = null),
                                    (e.variant = null),
                                    (e.id = null),
                                    (e.tracks = null),
                                    (e.meta = null),
                                    (e.withAnimation = !0),
                                    (e.shouldAutoStartPlaying = !0),
                                    (e.sonataStatusBeforeTrailerStart = og.MT.IDLE),
                                    (e.isManuallyPaused = !0),
                                    (e.title = null),
                                    (e.shareable = null),
                                    (e.personalColor = null));
                            },
                        };
                        return t;
                    });
            (g || (g = {})).OK = 'ok';
            var oO = a(90420);
            let ow = _.gK
                .compose(
                    _.gK.model('VibeActions', {
                        meta: _.gK.maybeNull(eX.G),
                        applyingSetting: _.gK.maybeNull(_.gK.string),
                        isApplying: _.gK.boolean,
                        vibeResetLoadingState: _.gK.enumeration(Object.values(F.G)),
                    }),
                    ee.X,
                )
                .views((e) => ({
                    get isMyVibe() {
                        return e.meta && 1 === e.meta.seeds.length && e.meta.seeds[0] === oO.M1;
                    },
                    get isShuffleVibe() {
                        var t;
                        return e.meta && 1 === e.meta.seeds.length && (null == (t = e.meta.seeds[0]) ? void 0 : t.includes(oO.yx));
                    },
                }))
                .actions((e) => ({
                    getLastVibe: (0, _.L3)(function* () {
                        let { rotorResource: t, modelActionsLogger: a } = (0, _._$)(e);
                        if (e.loadingState !== F.G.PENDING)
                            try {
                                e.loadingState = F.G.PENDING;
                                let a = yield t.waveLast();
                                ((e.meta = (0, em.l)(a)), (e.loadingState = F.G.RESOLVE));
                            } catch (t) {
                                (a.error(t), (e.loadingState = F.G.REJECT));
                            }
                    }),
                    vibeReset: (0, _.L3)(function* () {
                        let { rotorResource: t, modelActionsLogger: a } = (0, _._$)(e);
                        if (e.vibeResetLoadingState !== F.G.PENDING)
                            try {
                                ((e.vibeResetLoadingState = F.G.PENDING),
                                    (yield t.waveLastReset()) === g.OK && (e.meta = (0, em.l)({ name: '', seeds: [oO.M1] })),
                                    (e.vibeResetLoadingState = F.G.RESOLVE));
                            } catch (t) {
                                (a.error(t), (e.vibeResetLoadingState = F.G.REJECT));
                            }
                    }),
                    setApplyingSetting(t) {
                        t ? (e.applyingSetting = (0, _.wg)(t)) : (e.applyingSetting = null);
                    },
                    setIsApplying(t) {
                        e.isApplying = t;
                    },
                    setVibe(t) {
                        e.meta = (0, em.l)(t);
                    },
                    reset() {
                        ((e.meta = null), (e.vibeResetLoadingState = F.G.IDLE), (e.loadingState = F.G.IDLE));
                    },
                }));
            var oG = a(42205);
            let oM = aA.props({ artists: _.gK.array(eR.P), isHiddenFromSonataQueue: _.gK.maybe(_.gK.boolean) }).views((e) => ({
                    get idWithContext() {
                        return String(e.clipId);
                    },
                })),
                oU = _.gK
                    .model('VideoPlayerState', {
                        contextType: _.gK.maybeNull(_.gK.enumeration(Object.values(sU.K))),
                        contextId: _.gK.maybeNull(_.gK.string),
                        entityMeta: _.gK.maybeNull(oM),
                        status: _.gK.enumeration(Object.values(og.MT)),
                        canMoveForward: _.gK.boolean,
                        canMoveBackward: _.gK.boolean,
                    })
                    .actions((e) => ({
                        setContextId: (t) => {
                            e.contextId = String(t);
                        },
                        setContextType: (t) => {
                            e.contextType = t;
                        },
                        setEntityMeta: (t) => {
                            (null == t ? void 0 : t.data.meta) &&
                                (e.entityMeta = ((e) => {
                                    if (e.data.type !== aJ.R.Clip) return null;
                                    {
                                        var t;
                                        let a = e.data.meta;
                                        if (!a.clipId) return null;
                                        let i = null == (t = a.artists) ? void 0 : t.map((e) => (0, eo.a)({ artist: e })),
                                            { available: r, disclaimers: l } = (0, tn.f)(a);
                                        return (0, _.wg)({
                                            clipId: a.clipId,
                                            title: a.title,
                                            thumbnail: a.thumbnail,
                                            duration: a.duration,
                                            previewUrl: a.previewUrl,
                                            isAvailable: r,
                                            disclaimers: l,
                                            artists: i,
                                            isHiddenFromSonataQueue: e.hidden,
                                        });
                                    }
                                })(t));
                        },
                        setStatus: (t) => {
                            e.status = t;
                        },
                        setCanMoveForward: (t) => {
                            e.canMoveForward = t;
                        },
                        setCanMoveBackward: (t) => {
                            e.canMoveBackward = t;
                        },
                    })),
                oB = _.gK
                    .compose(
                        _.gK.model('FullscreenVideoPlayer', {
                            modal: ns.q,
                            ids: _.gK.array(_.gK.number),
                            activeIndex: _.gK.maybeNull(_.gK.number),
                            clips: _.gK.array(af),
                            errorStatusCode: _.gK.maybeNull(_.gK.number),
                            state: oU,
                            sonataStatusBeforeClipStart: _.gK.enumeration(Object.values(og.MT)),
                            isOpenedFromMain: _.gK.maybeNull(_.gK.boolean),
                            withAnimation: _.gK.boolean,
                        }),
                        ee.X,
                        w.p,
                    )
                    .views((e) => {
                        let t = {
                            get clipActiveIndex() {
                                return e.activeIndex || 0;
                            },
                            get clipActive() {
                                return e.clips[t.clipActiveIndex];
                            },
                            get isLoading() {
                                return e.isNeededToLoad || e.loadingState === F.G.PENDING;
                            },
                            get isNotFound() {
                                let t = e.isResolved && 0 === e.clips.length;
                                return e.errorStatusCode === U.X1.NOT_FOUND || t;
                            },
                            get isSomethingWrong() {
                                return e.isRejected && !t.isNotFound;
                            },
                            get entitiesData() {
                                return e.ids.map((e) => ({ type: aJ.R.Clip, meta: { id: e }, loadEntityMeta: !0 }));
                            },
                            get isPlayingSonataStatusBeforeClipStart() {
                                return e.sonataStatusBeforeClipStart === og.MT.PLAYING;
                            },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        setIds(t) {
                            e.ids = (0, _.wg)(t);
                        },
                        setClipIndex() {
                            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                            e.activeIndex = t;
                        },
                        setOpenedFromMain() {
                            ((e.isOpenedFromMain = !0), (e.withAnimation = !1));
                        },
                        setAnimationState(t) {
                            e.withAnimation = t;
                        },
                        setSonataStatusBeforeClipStart() {
                            let { sonataState: t } = (0, D.M)(e);
                            e.sonataStatusBeforeClipStart = t.status;
                        },
                        getClips: (0, _.L3)(function* () {
                            let { clipsResource: t, modelActionsLogger: a } = (0, _._$)(e);
                            if (e.loadingState !== F.G.PENDING)
                                try {
                                    e.loadingState = F.G.PENDING;
                                    let a = yield t.getClip({ clipIds: e.ids });
                                    ((e.ids = (0, _.wg)(a.map((e) => e.clipId))),
                                        (e.clips = (0, _.wg)(a.map(lS))),
                                        (e.activeIndex = (0, oG.z)(e.ids, e.activeIndex)),
                                        e.loadingState !== F.G.IDLE && (e.loadingState = F.G.RESOLVE));
                                } catch (t) {
                                    (a.error(t), t instanceof U.GX && (e.errorStatusCode = t.statusCode), e.loadingState !== F.G.IDLE && (e.loadingState = F.G.REJECT));
                                }
                        }),
                        reset() {
                            ((e.loadingState = F.G.IDLE),
                                (e.activeIndex = null),
                                (e.errorStatusCode = null),
                                (e.isOpenedFromMain = null),
                                (e.withAnimation = !0),
                                (e.sonataStatusBeforeClipStart = og.MT.IDLE),
                                e.destroyItems([e.ids, e.clips]));
                        },
                    }));
            var oV = a(3409),
                oF = a(75177),
                ox = a(14841),
                oj = a(22786);
            !(function (e) {
                ((e.CLICK = 'CLICK'), (e.VIEW = 'VIEW'));
            })(u || (u = {}));
            let oW = _.gK
                    .model('BaseWheelItem', {
                        id: _.gK.string,
                        index: _.gK.number,
                        type: _.gK.enumeration(Object.values(oF.D)),
                        style: _.gK.maybe(_.gK.string),
                        description: _.gK.maybe(_.gK.string),
                    })
                    .views((e) => ({
                        get isDisabled() {
                            let { experiments: t } = (0, D.M)(e);
                            return [oF.D.WAVE, oF.D.SETTING].includes(e.type) && t.checkExperiment(O.z.WebNextProductWithoutRecommendation, 'on');
                        },
                        get isPlayable() {
                            if (!(0, _._n)(e)) return !1;
                            switch (e.type) {
                                case oF.D.WAVE:
                                case oF.D.ALBUM:
                                case oF.D.NON_MUSIC:
                                    return !0;
                                case oF.D.PROMO_LINK:
                                case oF.D.SETTING:
                                    return !1;
                            }
                        },
                    }))
                    .actions((e) => ({
                        handleFeedbackView() {
                            if (!(0, _._n)(e)) return;
                            let { wheel: t } = (0, D.M)(e);
                            t && t.addFeedback(u.VIEW, e.type, e.id, e.index);
                        },
                        handleFeedbackClick() {
                            if (!(0, _._n)(e)) return;
                            let { wheel: t } = (0, D.M)(e);
                            if (!t) return;
                            let a = t.addFeedback(u.CLICK, e.type, e.id, e.index);
                            e.isPlayable ||
                                a.then(() => {
                                    (0, _._n)(t) && t.sendFeedbacks();
                                });
                        },
                    })),
                oX = oW.props({ type: _.gK.literal(oF.D.ALBUM), data: eC.J }),
                o$ = _.gK
                    .model('NonMusic', { album: eC.J, resumeFrom: _.gK.model({ trackId: _.gK.string, startPositionSec: _.gK.number }) })
                    .actions((e) => ({ getKey: (t) => e.album.getKey(t) })),
                oY = oW.props({ type: _.gK.literal(oF.D.NON_MUSIC), data: o$ }),
                oJ = _.gK
                    .model('PromoLink', {
                        id: _.gK.string,
                        title: _.gK.string,
                        description: _.gK.maybe(_.gK.string),
                        url: _.gK.maybeNull(_.gK.string),
                        cover: eP.$,
                        color: _.gK.string,
                    })
                    .actions((e) => ({ getKey: (t) => ''.concat(t, '_').concat(e.id) })),
                oq = oW.props({ type: _.gK.literal(oF.D.PROMO_LINK), data: oJ }),
                oH = _.gK.model('Setting', { title: _.gK.string, cover: eP.$ }).actions((e) => ({ getKey: (t) => ''.concat(t, '_').concat(e.title) })),
                oz = oW.props({ type: _.gK.literal(oF.D.SETTING), data: oH }),
                oQ = oW.props({ type: _.gK.literal(oF.D.WAVE), data: eX.G }),
                oZ = (e, t) =>
                    e.items
                        .map((e, a) => {
                            try {
                                var i, r, l, n, s;
                                switch (e.type) {
                                    case oF.D.WAVE:
                                        return oQ.create({
                                            id: e.id,
                                            index: a,
                                            type: oF.D.WAVE,
                                            style: null != (i = e.style) ? i : oj.y.DEFAULT,
                                            description: e.description,
                                            data: (0, em.l)(e.data.wave, e.data.agent),
                                        });
                                    case oF.D.ALBUM:
                                        return oX.create({
                                            id: e.id,
                                            index: a,
                                            type: oF.D.ALBUM,
                                            style: null != (r = e.style) ? r : oj.y.DEFAULT,
                                            description: e.description,
                                            data: (0, en.s)({ album: e.data.album, artists: e.data.artists }),
                                        });
                                    case oF.D.NON_MUSIC:
                                        return oY.create({
                                            id: e.id,
                                            index: a,
                                            type: oF.D.NON_MUSIC,
                                            style: null != (l = e.style) ? l : oj.y.DEFAULT,
                                            description: e.description,
                                            data: { album: (0, en.s)({ album: e.data.album }), resumeFrom: e.data.resumeFrom },
                                        });
                                    case oF.D.PROMO_LINK:
                                        return oq.create({
                                            id: e.id,
                                            index: a,
                                            type: oF.D.PROMO_LINK,
                                            style: null != (n = e.style) ? n : oj.y.DEFAULT,
                                            description: e.description,
                                            data: ((e) =>
                                                (0, _.wg)({
                                                    id: e.id,
                                                    title: e.title,
                                                    description: e.description,
                                                    url: e.action.weblink,
                                                    cover: e.cover,
                                                    color: e.color,
                                                }))(e.data),
                                        });
                                    case oF.D.SETTING:
                                        return oz.create({
                                            id: e.id,
                                            index: a,
                                            type: oF.D.SETTING,
                                            style: null != (s = e.style) ? s : oj.y.DEFAULT,
                                            description: e.description,
                                            data: { title: e.data.title, cover: e.data.cover },
                                        });
                                    default:
                                        return null;
                                }
                            } catch (a) {
                                return (null == t || t.error('[Wheel] Item parse error', { error: a, item: e }), null);
                            }
                        })
                        .filter((e) => null !== e),
                o0 = _.gK.union(oQ, oX, oY, oq, oz),
                o1 = _.gK
                    .compose(
                        _.gK.model('Wheel', {
                            wheelId: _.gK.optional(_.gK.string, ''),
                            items: _.gK.array(o0),
                            activeIndex: _.gK.optional(_.gK.number, 1),
                            lastRequestId: _.gK.optional(_.gK.string, ''),
                        }),
                        ee.X,
                        w.p,
                    )
                    .volatile(() => ({ feedbacksStore: void 0 }))
                    .views((e) => ({
                        get isShimmerVisible() {
                            return e.isNeededToLoad || e.isLoading;
                        },
                        get isEmpty() {
                            return 0 === e.items.length;
                        },
                        get isPersistentFeedbacksAvailable() {
                            var t;
                            return !!(null == (t = e.feedbacksStore) ? void 0 : t.isAvailable());
                        },
                    }))
                    .actions((e) => {
                        let t = new Map(),
                            a = Promise.resolve(),
                            i = async () => {
                                if ((await a, !e.feedbacksStore)) return { feedbacks: [], persistentFeedbackKeys: [] };
                                let t = await e.feedbacksStore.getFeedbacks();
                                return { feedbacks: t.map((e) => e.feedback), persistentFeedbackKeys: t.map((e) => e.feedbackKey) };
                            },
                            r = async () =>
                                e.isPersistentFeedbacksAvailable ? i() : { feedbacks: 0 === t.size ? [] : Array.from(t.values()), persistentFeedbackKeys: [] },
                            l = (a) => {
                                if ((t.clear(), a.persistentFeedbackKeys.length > 0)) {
                                    var i;
                                    null == (i = e.feedbacksStore) || i.clearSentFeedbacks(a.persistentFeedbackKeys);
                                }
                            };
                        return {
                            setFeedbacksStore(t) {
                                e.feedbacksStore = t;
                            },
                            setActiveIndex(t) {
                                e.activeIndex = t;
                            },
                            async addFeedback(i, r, l, n) {
                                let s = { wheelId: e.wheelId, timestamp: Date.now(), eventType: i, item: { type: r, id: l }, position: n };
                                if (e.isPersistentFeedbacksAvailable)
                                    return e.feedbacksStore
                                        ? (a = a
                                              .then(() => {
                                                  let t = e.feedbacksStore;
                                                  return t ? t.addFeedback(s) : Promise.resolve();
                                              })
                                              .catch(() => void 0))
                                        : Promise.resolve();
                                let o = (0, ox.q)(s);
                                t.has(o) || t.set(o, s);
                            },
                            sendFeedbacks: (0, _.L3)(function* () {
                                let { wheelResource: t, modelActionsLogger: a } = (0, _._$)(e),
                                    i = yield r();
                                if (0 !== i.feedbacks.length)
                                    try {
                                        (yield t.feedbacks({ feedbacks: i.feedbacks }), l(i));
                                    } catch (e) {
                                        a.error('[Wheel] Feedbacks send error', { error: e });
                                    }
                            }),
                            getData: (0, _.L3)(function* (t, a) {
                                let { context: i, forceFetch: n } = t,
                                    s = ((e) => {
                                        switch (e.type) {
                                            case oV.b.ALBUM:
                                            case oV.b.ARTIST:
                                                return ''.concat(e.type, ':').concat(e.data.id);
                                            case oV.b.PLAYLIST:
                                                return ''.concat(e.type, ':').concat(e.data.playlistUuid);
                                            case oV.b.WAVE:
                                                return ''.concat(e.type, ':').concat(e.data.seeds.join(','));
                                            case oV.b.EMPTY:
                                            case oV.b.GENERATIVE:
                                            case oV.b.CLIP:
                                                return e.type;
                                            case oV.b.OTHER:
                                                var t, a;
                                                return ''.concat(e.type, ':').concat(null != (a = null == (t = e.data) ? void 0 : t.id) ? a : '');
                                        }
                                    })(i);
                                if (!n && s === e.lastRequestId) return;
                                let { wheelResource: o, modelActionsLogger: d } = (0, _._$)(e);
                                e.loadingState = F.G.PENDING;
                                let g = yield r();
                                try {
                                    let t = yield o.wheelNew({ context: i, feedbacks: g.feedbacks });
                                    if (
                                        (l(g), (e.wheelId = t.wheelId), (e.items = (0, _.wg)(oZ(t, d))), (e.activeIndex = 1), (e.lastRequestId = s), 0 === e.items.length)
                                    )
                                        throw Error('Empty response');
                                    e.loadingState = F.G.RESOLVE;
                                } catch (t) {
                                    if (e.isEmpty && a) {
                                        d.error('[Wheel] Pumpkin', { error: t });
                                        let i = ((e) => {
                                            let t = e({ id: 'vibe-wheel.activity-description' }),
                                                a = e({ id: 'vibe-wheel.mood-description' });
                                            return {
                                                wheelId: 'PUMPKIN',
                                                items: [
                                                    {
                                                        id: 'activity:wake-up',
                                                        type: oF.D.WAVE,
                                                        data: {
                                                            wave: { name: e({ id: 'vibe-wheel.activity-wake-up' }), description: t, seeds: ['activity:wake-up'] },
                                                            agent: {
                                                                animationUri: 'https://music-custom-wave-media.music.yandex.net/JVsyUlrs9Y',
                                                                cover: {
                                                                    uri: 'https://avatars.mds.yandex.net/get-music-misc/28592/rotor-activity-wake-up-agent-cover-RSUMc/%%',
                                                                    color: '#FFFFD6',
                                                                },
                                                            },
                                                        },
                                                    },
                                                    {
                                                        id: 'activity:road-trip',
                                                        type: oF.D.WAVE,
                                                        data: {
                                                            wave: { name: e({ id: 'vibe-wheel.activity-road-trip' }), description: t, seeds: ['activity:road-trip'] },
                                                            agent: {
                                                                animationUri: 'https://music-custom-wave-media.music.yandex.net/Foah9sRLsS',
                                                                cover: {
                                                                    uri: 'https://avatars.mds.yandex.net/get-music-misc/70683/rotor-activity-road-trip-agent-cover-S1vPp/%%',
                                                                    color: '#FFFFDF',
                                                                },
                                                            },
                                                        },
                                                    },
                                                    {
                                                        id: 'activity:work-background',
                                                        type: oF.D.WAVE,
                                                        data: {
                                                            wave: {
                                                                name: e({ id: 'vibe-wheel.activity-work-background' }),
                                                                description: t,
                                                                seeds: ['activity:work-background'],
                                                            },
                                                            agent: {
                                                                animationUri: 'https://music-custom-wave-media.music.yandex.net/tsXpFHIBjM',
                                                                cover: {
                                                                    uri: 'https://avatars.mds.yandex.net/get-music-misc/2413828/rotor-activity-work-background-agent-cover-5t6qb/%%',
                                                                    color: '#FFFFFF',
                                                                },
                                                            },
                                                        },
                                                    },
                                                    {
                                                        id: 'activity:workout',
                                                        type: oF.D.WAVE,
                                                        data: {
                                                            wave: { name: e({ id: 'vibe-wheel.activity-workout' }), description: t, seeds: ['activity:workout'] },
                                                            agent: {
                                                                animationUri: 'https://music-custom-wave-media.music.yandex.net/PexWCCcEc9',
                                                                cover: {
                                                                    uri: 'https://avatars.mds.yandex.net/get-music-misc/2413828/rotor-activity-workout-agent-cover-Wcrjo/%%',
                                                                    color: '#EBFFFE',
                                                                },
                                                            },
                                                        },
                                                    },
                                                    {
                                                        id: 'activity:fall-asleep',
                                                        type: oF.D.WAVE,
                                                        data: {
                                                            wave: { name: e({ id: 'vibe-wheel.activity-fall-asleep' }), description: t, seeds: ['activity:fall-asleep'] },
                                                            agent: {
                                                                animationUri: 'https://music-custom-wave-media.music.yandex.net/J9QAoYnnPe',
                                                                cover: {
                                                                    uri: 'https://avatars.mds.yandex.net/get-music-misc/28592/rotor-activity-fall-asleep-agent-cover-XaOnj/%%',
                                                                    color: '#FAFFFF',
                                                                },
                                                            },
                                                        },
                                                    },
                                                    {
                                                        id: 'mood:energetic',
                                                        type: oF.D.WAVE,
                                                        data: {
                                                            wave: { name: e({ id: 'vibe-wheel.mood-energetic' }), description: a, seeds: ['mood:energetic'] },
                                                            agent: {
                                                                animationUri: 'https://music-custom-wave-media.music.yandex.net/e6Ptlara08',
                                                                cover: {
                                                                    uri: 'https://avatars.mds.yandex.net/get-music-misc/70683/rotor-mood-energetic-agent-cover-NrJtV/%%',
                                                                    color: '#FDFAFF',
                                                                },
                                                            },
                                                        },
                                                    },
                                                    {
                                                        id: 'mood:happy',
                                                        type: oF.D.WAVE,
                                                        data: {
                                                            wave: { name: e({ id: 'vibe-wheel.mood-happy' }), description: a, seeds: ['mood:happy'] },
                                                            agent: {
                                                                animationUri: 'https://music-custom-wave-media.music.yandex.net/EzOBeQmIXi',
                                                                cover: {
                                                                    uri: 'https://avatars.mds.yandex.net/get-music-misc/70683/rotor-mood-happy-agent-cover-JWFjr/%%',
                                                                    color: '#FFFFE8',
                                                                },
                                                            },
                                                        },
                                                    },
                                                    {
                                                        id: 'mood:sad',
                                                        type: oF.D.WAVE,
                                                        data: {
                                                            wave: { name: e({ id: 'vibe-wheel.mood-sad' }), description: a, seeds: ['mood:sad'] },
                                                            agent: {
                                                                animationUri: 'https://music-custom-wave-media.music.yandex.net/rrF2I4tUvZ',
                                                                cover: {
                                                                    uri: 'https://avatars.mds.yandex.net/get-music-misc/30221/rotor-mood-sad-agent-cover-IN0O6/%%',
                                                                    color: '#EAFFFF',
                                                                },
                                                            },
                                                        },
                                                    },
                                                ],
                                            };
                                        })(a);
                                        ((e.wheelId = i.wheelId), (e.items = (0, _.wg)(oZ(i, d))), (e.activeIndex = 1));
                                    } else d.error('[Wheel] Load error', { error: t });
                                    e.loadingState = F.G.REJECT;
                                }
                            }),
                        };
                    }),
                o3 = (e) => e.map((e) => ({ id: e.id, title: e.title })),
                o2 = _.gK.model('WizardGenre', { id: _.gK.string, title: _.gK.string }),
                o5 = _.gK
                    .model('Wizard2Session', {
                        loadingState: _.gK.enumeration(Object.values(F.G)),
                        genres: _.gK.array(o2),
                        artistsByGenres: _.gK.maybe(_.gK.frozen()),
                        savedLikedArtists: _.gK.array(_.gK.string),
                        likedArtists: _.gK.array(_.gK.string),
                        unlikedArtists: _.gK.array(_.gK.string),
                        filter: _.gK.maybe(_.gK.string),
                    })
                    .views((e) => ({
                        get genreItem() {
                            var t;
                            return null == (t = e.artistsByGenres) ? void 0 : t.get(e.filter);
                        },
                        get artistsByGenre() {
                            var a;
                            return (null == (a = this.genreItem) ? void 0 : a.artists) || [];
                        },
                        get selectedArtistsCounter() {
                            return e.likedArtists.length + e.savedLikedArtists.length - e.unlikedArtists.length;
                        },
                        get remainingLikesToFinish() {
                            return Math.max(0, 3 - this.selectedArtistsCounter);
                        },
                        get canFinish() {
                            return 0 === this.remainingLikesToFinish;
                        },
                        isArtistLiked: (t) => !e.unlikedArtists.includes(t) && (e.likedArtists.includes(t) || e.savedLikedArtists.includes(t)),
                    }))
                    .actions((e) => {
                        let t = {
                            toggleArtistLike: (t) => {
                                let { likedArtists: a, unlikedArtists: i, savedLikedArtists: r } = e,
                                    l = ((e) => {
                                        let { id: t, likedArtists: a, unlikedArtists: i, savedLikedArtists: r } = e,
                                            l = {};
                                        if (a.includes(t)) return ((l.likedArtists = a.filter((e) => e !== t)), l);
                                        let n = r.includes(t),
                                            s = i.includes(t);
                                        return (((l.unlikedArtists = i.filter((e) => e !== t)), n && !s) ? l.unlikedArtists.push(t) : (l.likedArtists = [...a, t]), l);
                                    })({ id: t, likedArtists: a, unlikedArtists: i, savedLikedArtists: r });
                                (l.likedArtists && (e.likedArtists = (0, _.wg)(l.likedArtists)), l.unlikedArtists && (e.unlikedArtists = (0, _.wg)(l.unlikedArtists)));
                            },
                            setFilter: (t) => {
                                e.filter = t;
                            },
                            loadGenres: (0, _.L3)(function* () {
                                let { feedResource: t, modelActionsLogger: a } = (0, _._$)(e);
                                if (e.loadingState !== F.G.PENDING && e.loadingState !== F.G.RESOLVE)
                                    try {
                                        var i;
                                        e.loadingState = F.G.PENDING;
                                        let { genres: a } = yield t.getWizardGenres();
                                        if (((e.genres = (0, _.wg)(o3(a))), !a.length)) throw Error("The wizard's genre array is empty");
                                        ((e.filter = null == (i = a[0]) ? void 0 : i.id),
                                            (e.artistsByGenres = (0, _.wg)(
                                                ((e) => {
                                                    let t = new Map();
                                                    return (
                                                        e.map((e) => {
                                                            t.set(e.id, { loadingState: F.G.IDLE, artists: [], showedArtists: [] });
                                                        }),
                                                        nL.sH.map(t)
                                                    );
                                                })(a),
                                            )),
                                            e.loadingState !== F.G.IDLE && (e.loadingState = F.G.RESOLVE));
                                    } catch (t) {
                                        (a.error(t), e.loadingState !== F.G.IDLE && (e.loadingState = F.G.REJECT));
                                    }
                            }),
                            loadArtists: (0, _.L3)(function* (t) {
                                let { feedResource: a, modelActionsLogger: i } = (0, _._$)(e);
                                if (e.loadingState !== F.G.RESOLVE || !e.filter) return;
                                let r = e.artistsByGenres.get(e.filter);
                                if (r.loadingState !== F.G.PENDING)
                                    try {
                                        r.loadingState = F.G.PENDING;
                                        let { artists: i = [], likedArtists: l = [] } = yield a.getWizardArtistsByGenre({
                                                genre: e.filter,
                                                showedArtists: r.showedArtists,
                                                likedArtists: e.likedArtists,
                                                unlikedArtists: e.unlikedArtists,
                                                countOfNewArtists: t,
                                            }),
                                            n = i.map((e) => (0, eo.a)({ artist: e })),
                                            s = i.map((e) => e.id);
                                        (e.artistsByGenres.set(e.filter, {
                                            artists: [...r.artists, ...n],
                                            showedArtists: [...r.showedArtists, ...s],
                                            loadingState: F.G.RESOLVE,
                                        }),
                                            (e.savedLikedArtists = (0, _.wg)(l.map((e) => String(e)))),
                                            (e.likedArtists = (0, _.wg)([])),
                                            (e.unlikedArtists = (0, _.wg)([])));
                                    } catch (e) {
                                        (i.error(e), (r.loadingState = F.G.REJECT));
                                    }
                            }),
                            finish: (0, _.L3)(function* () {
                                let { feedResource: a, modelActionsLogger: i } = (0, _._$)(e);
                                if (!e.canFinish) return (t.loadArtists(), ir.F.ERROR);
                                if (!e.filter) return ir.F.ERROR;
                                try {
                                    return (yield a.finishWizard({ genre: e.filter, likedArtists: e.likedArtists, unlikedArtists: e.unlikedArtists }), ir.F.OK);
                                } catch (e) {
                                    return (i.error(e), ir.F.ERROR);
                                }
                            }),
                        };
                        return t;
                    });
            !(function (e) {
                ((e.VERTICAL = 'VERTICAL'), (e.BOTH_DIMENSIONS = 'BOTH_DIMENSIONS'));
            })(c || (c = {}));
            let o6 = (e) =>
                    e.map((e) => {
                        var t;
                        return { id: e.id, name: e.name, coverUri: null == (t = e.cover) ? void 0 : t.uri, coordinate: e.coordinate };
                    }),
                o8 = _.gK.model('Wizard3Artist', {
                    id: _.gK.string,
                    name: _.gK.string,
                    coverUri: _.gK.maybe(_.gK.string),
                    coordinate: _.gK.model('Wizard3Coordinate', { x: _.gK.number, y: _.gK.number }),
                }),
                o4 = _.gK.model('Wizard3GenreArtists', {
                    loadingState: _.gK.optional(_.gK.enumeration(Object.values(F.G)), F.G.IDLE),
                    hasMoreArtists: _.gK.optional(_.gK.boolean, !0),
                    artists: _.gK.array(o8),
                });
            !(function (e) {
                ((e.COUNTER = 'COUNTER'), (e.ARTISTS = 'ARTISTS'));
            })(m || (m = {}));
            let o7 = _.gK.model('Wizard3Progress', {
                    text: _.gK.string,
                    minArtistsForPassedWizard: _.gK.number,
                    countOfLikedArtists: _.gK.number,
                    upperBoundOfLikes: _.gK.number,
                    passBoundOfLikes: _.gK.number,
                    wizardFinished: _.gK.boolean,
                    type: _.gK.enumeration(Object.values(m)),
                }),
                o9 = _.gK
                    .model('Wizard3Session', {
                        loadingState: _.gK.optional(_.gK.enumeration(Object.values(F.G)), F.G.IDLE),
                        genres: _.gK.array(o2),
                        artistsByGenres: _.gK.map(o4),
                        likedArtists: _.gK.array(_.gK.string),
                        progress: _.gK.maybe(o7),
                        filter: _.gK.maybe(_.gK.string),
                    })
                    .volatile(() => ({ likesRevision: 0, isLikeRequestPending: !1, isFinishing: !1 }))
                    .views((e) => ({
                        get artistsByGenre() {
                            var t, a;
                            return e.filter && null != (a = null == (t = e.artistsByGenres.get(e.filter)) ? void 0 : t.artists.slice()) ? a : [];
                        },
                        get selectedArtistsCounter() {
                            return e.likedArtists.length;
                        },
                        get remainingLikesToFinish() {
                            if (!e.progress) return;
                            return Math.max(0, e.progress.minArtistsForPassedWizard - e.progress.countOfLikedArtists);
                        },
                        get canFinish() {
                            return 0 === this.remainingLikesToFinish;
                        },
                        isArtistLiked: (t) => e.likedArtists.includes(t),
                    }))
                    .actions((e) => {
                        let t = (0, _.L3)(function* (t) {
                                let { wizard3Resource: a } = (0, _._$)(e),
                                    i = e.likesRevision,
                                    r = !e.isLikeRequestPending;
                                e.artistsByGenres.set(t, { loadingState: F.G.PENDING });
                                let {
                                    artists: l = [],
                                    likedArtists: n = [],
                                    progress: s,
                                } = yield a.getInitialArtists({ genre: t, matrixHeight: 9, matrixWidth: 9, wizardType: c.VERTICAL });
                                (e.artistsByGenres.set(t, { loadingState: F.G.RESOLVE, hasMoreArtists: l.length > 0, artists: o6(l) }),
                                    r && i === e.likesRevision && ((e.likedArtists = (0, _.wg)(n.map(String))), (e.progress = (0, _.wg)(s))));
                            }),
                            a = (0, _.L3)(function* (t, a, i) {
                                let { wizard3Resource: r } = (0, _._$)(e),
                                    l = e.likesRevision,
                                    n = !e.isLikeRequestPending;
                                a.loadingState = F.G.PENDING;
                                let { artists: s = [], likedArtists: o = [] } = yield r.getSimilarArtists({
                                    genre: t,
                                    currentArtists: ((e, t) => {
                                        let a = e.reduce((e, t) => Math.max(e, 9 * t.coordinate.y + t.coordinate.x), -1) + 1,
                                            i = e.map((e) => ({ id: e.id, coordinate: { x: e.coordinate.x, y: e.coordinate.y } }));
                                        for (let e = 0; e < t; e++) {
                                            let t = a + e;
                                            i.push({ id: '-1', coordinate: { x: t % 9, y: Math.floor(t / 9) } });
                                        }
                                        return i;
                                    })(a.artists.slice(), i),
                                    wizardType: c.VERTICAL,
                                });
                                (a.artists.push(...o6(s)),
                                    (a.hasMoreArtists = s.length > 0),
                                    n && l === e.likesRevision && (e.likedArtists = (0, _.wg)(o.map(String))),
                                    (a.loadingState = F.G.RESOLVE));
                            });
                        return {
                            setFilter: (t) => {
                                e.filter = t;
                            },
                            toggleArtistLike: (0, _.L3)(function* (t) {
                                if (e.loadingState !== F.G.RESOLVE) return;
                                let { wizard3Resource: a, modelActionsLogger: i } = (0, _._$)(e),
                                    r = e.isArtistLiked(t),
                                    l = ++e.likesRevision;
                                ((e.isLikeRequestPending = !0), r ? e.likedArtists.remove(t) : e.likedArtists.push(t));
                                try {
                                    let i = { selectedArtist: Number(t) },
                                        { likedArtists: n = [], progress: s } = yield r ? a.unlikeArtist(i) : a.likeArtist(i);
                                    l === e.likesRevision && ((e.likedArtists = (0, _.wg)(n.map(String))), (e.progress = (0, _.wg)(s)));
                                } catch (e) {
                                    i.error(e);
                                } finally {
                                    l === e.likesRevision && (e.isLikeRequestPending = !1);
                                }
                            }),
                            finish: (0, _.L3)(function* () {
                                if (e.isFinishing) return ir.F.ERROR;
                                let { wizard3Resource: t, modelActionsLogger: a } = (0, _._$)(e);
                                e.isFinishing = !0;
                                try {
                                    if (!e.canFinish) return (yield t.close(), ir.F.ERROR);
                                    return (yield t.finish(), ir.F.OK);
                                } catch (e) {
                                    return (a.error(e), ir.F.ERROR);
                                } finally {
                                    e.isFinishing = !1;
                                }
                            }),
                            loadGenres: (0, _.L3)(function* () {
                                if (e.loadingState === F.G.PENDING || e.loadingState === F.G.RESOLVE) return;
                                let { wizard3Resource: t, modelActionsLogger: a } = (0, _._$)(e);
                                try {
                                    var i, r;
                                    e.loadingState = F.G.PENDING;
                                    let {
                                        genres: a = [],
                                        artists: l = [],
                                        likedArtists: n = [],
                                        progress: s,
                                    } = yield t.getInitialArtists({ genre: 'all', matrixHeight: 9, matrixWidth: 9, wizardType: c.VERTICAL });
                                    ((e.genres = (0, _.wg)(o3(a))),
                                        (e.filter = null != (r = null == (i = a[0]) ? void 0 : i.id) ? r : 'all'),
                                        e.artistsByGenres.set('all', { loadingState: F.G.RESOLVE, hasMoreArtists: l.length > 0, artists: o6(l) }),
                                        (e.likedArtists = (0, _.wg)(n.map(String))),
                                        (e.progress = (0, _.wg)(s)),
                                        (e.loadingState = F.G.RESOLVE));
                                } catch (t) {
                                    (a.error(t), (e.loadingState = F.G.REJECT));
                                }
                            }),
                            loadArtists: (0, _.L3)(function* () {
                                let i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                                    r = e.filter;
                                if (e.loadingState !== F.G.RESOLVE || !r || i <= 0) return;
                                let l = e.artistsByGenres.get(r);
                                if ((null == l ? void 0 : l.loadingState) === F.G.PENDING || (null == l ? void 0 : l.hasMoreArtists) === !1) return;
                                let { modelActionsLogger: n } = (0, _._$)(e);
                                try {
                                    (null == l ? void 0 : l.artists.length) ? yield a(r, l, i) : yield t(r);
                                } catch (t) {
                                    if ((n.error(t), null == l ? void 0 : l.artists.length)) {
                                        l.loadingState = F.G.REJECT;
                                        return;
                                    }
                                    e.artistsByGenres.set(r, { loadingState: F.G.REJECT });
                                }
                            }),
                        };
                    }),
                de = _.gK
                    .model('Wizard', { modal: ns.q, introModal: ns.q, sessionV2: o5, sessionV3: o9 })
                    .views((e) => {
                        let t = {
                            get isAvailable() {
                                let { experiments: t } = (0, D.M)(e);
                                return !t.isExperimentActive(O.z.WebNextProductWithoutRecommendation);
                            },
                            get activeSession() {
                                let { experiments: t } = (0, D.M)(e);
                                return t.checkExperiment(O.z.WebNextWizard3, 'on') ? e.sessionV3 : e.sessionV2;
                            },
                            get loadingState() {
                                return t.activeSession.loadingState;
                            },
                            get genres() {
                                return t.activeSession.genres;
                            },
                            get filter() {
                                return t.activeSession.filter;
                            },
                            get artistsByGenre() {
                                return t.activeSession.artistsByGenre;
                            },
                            get selectedArtistsQuantity() {
                                return t.activeSession.selectedArtistsCounter;
                            },
                            get canFinish() {
                                return t.activeSession.canFinish;
                            },
                            get remainingLikesToFinish() {
                                return t.activeSession.remainingLikesToFinish;
                            },
                            isArtistLiked: (e) => t.activeSession.isArtistLiked(e),
                        };
                        return t;
                    })
                    .actions((e) => ({
                        async loadGenres() {
                            await e.activeSession.loadGenres();
                        },
                        async loadArtists(t) {
                            await e.activeSession.loadArtists(t);
                        },
                        setFilter(t) {
                            e.activeSession.setFilter(t);
                        },
                        toggleArtistLike(t) {
                            e.activeSession.toggleArtistLike(t);
                        },
                        finish: (0, _.L3)(function* () {
                            let t = yield e.activeSession.finish();
                            if (t !== ir.F.OK) return t;
                            let { experiments: a } = (0, D.M)(e);
                            if (a.isExperimentActive(O.z.WebNextTagSandbox)) {
                                let { tagSandbox: t } = (0, _._$)(e);
                                t.send('preferences_wizard_finished', {});
                            }
                            return t;
                        }),
                    })),
                dt = _.gK.model('Credit', { title: _.gK.string, value: _.gK.string }),
                da = _.gK
                    .model('CurrentClipInfo', {
                        id: _.gK.maybeNull(_.gK.number),
                        clip: _.gK.maybeNull(af),
                        clipLoadingState: _.gK.enumeration(Object.values(F.G)),
                        creditsLoadingState: _.gK.enumeration(Object.values(F.G)),
                        credits: _.gK.maybeNull(_.gK.array(dt)),
                        modal: ns.q,
                    })
                    .views((e) => ({
                        get isClipIdle() {
                            return e.clipLoadingState === F.G.IDLE;
                        },
                        get isClipLoading() {
                            return e.clipLoadingState === F.G.PENDING;
                        },
                        get isClipRejected() {
                            return e.clipLoadingState === F.G.REJECT;
                        },
                        get isCreditsIdle() {
                            return e.creditsLoadingState === F.G.IDLE;
                        },
                        get isCreditsLoading() {
                            return e.creditsLoadingState === F.G.PENDING;
                        },
                        get isCreditsRejected() {
                            return e.creditsLoadingState === F.G.REJECT;
                        },
                        get isRejected() {
                            return e.creditsLoadingState === F.G.REJECT && e.clipLoadingState === F.G.REJECT;
                        },
                    }))
                    .actions((e) => ({
                        setClipId(t) {
                            e.id = t;
                        },
                        getClip: (0, _.L3)(function* () {
                            let { clipsResource: t, modelActionsLogger: a } = (0, _._$)(e);
                            if (e.id && e.clipLoadingState !== F.G.PENDING)
                                try {
                                    e.clipLoadingState = F.G.PENDING;
                                    let [a] = yield t.getClip({ clipIds: [e.id] });
                                    if (!a) return;
                                    ((e.clip = lS(a)), (e.clipLoadingState = F.G.RESOLVE));
                                } catch (t) {
                                    (a.error(t), (e.clipLoadingState = F.G.REJECT));
                                }
                        }),
                        getCreditsInfo: (0, _.L3)(function* () {
                            let { clipsResource: t, modelActionsLogger: a } = (0, _._$)(e);
                            if (!e.id || e.creditsLoadingState === F.G.PENDING) return null;
                            try {
                                e.creditsLoadingState = F.G.PENDING;
                                let a = yield t.getCredits({ clipId: e.id });
                                ((e.credits = (0, _.wg)(null == a ? void 0 : a.credits)), (e.creditsLoadingState = F.G.RESOLVE));
                            } catch (t) {
                                (a.error(t), (e.creditsLoadingState = F.G.REJECT));
                            }
                            return null;
                        }),
                        reset() {
                            ((e.id = null), (e.clip = null), (e.clipLoadingState = F.G.IDLE), (e.creditsLoadingState = F.G.IDLE), (e.credits = null));
                        },
                    })),
                di = _.gK.model('TranslationsModel', { data: _.gK.frozen() }),
                dr = _.gK
                    .model('ReleaseNotes', { modal: ns.q, translations: _.gK.maybeNull(di), sortedDescReleaseNotesKeys: _.gK.maybeNull(_.gK.array(_.gK.string)) })
                    .views((e) => ({
                        get isReady() {
                            var t;
                            return !!(
                                (null == (t = e.translations) ? void 0 : t.data) &&
                                'object' == typeof e.translations.data &&
                                Object.keys(e.translations.data).length > 0
                            );
                        },
                    }))
                    .actions((e) => ({
                        setSortedDescReleaseNotesKeys: (t) => {
                            e.sortedDescReleaseNotesKeys = (0, _.wg)(t);
                        },
                        setTranslationsReleaseNotes: (t) => {
                            t && (e.translations = di.create({ data: t }));
                        },
                    })),
                dl = _.gK
                    .model('ForcedLogin')
                    .views((e) => ({
                        get isEligible() {
                            return !1;
                        },
                    }))
                    .volatile(() => ({ hasAttempted: !1 }))
                    .actions((e) => ({
                        tryLogin() {
                            if (!e.isEligible || e.hasAttempted) return;
                            let { authorization: t, containerStorage: a } = (0, _._$)(e);
                            null === a.get(ni.c.ForcedLoginAttempt, !1) &&
                                t.authorizationUrl &&
                                (a.set(ni.c.ForcedLoginAttempt, '1', { expires: 1, path: '/' }),
                                '1' === a.get(ni.c.ForcedLoginAttempt) && ((e.hasAttempted = !0), t.redirectToAuthorizationUrl()));
                        },
                    }));
            var dn = a(67879);
            let ds = (e) => 'object' == typeof e && null !== e && 'id' in e && 'owner' in e && 'members' in e && 'status' in e;
            var dd = a(67990);
            let dg = (e) => 'object' == typeof e && null !== e && 'errorName' in e,
                du = async (e) => {
                    if (!(e instanceof U.GX) || e.statusCode !== U.X1.BAD_REQUEST || !(0, dd.N)(e.cause) || !e.cause.response) return null;
                    try {
                        let t = await e.cause.response.json();
                        if (!(0, h.u4)(t)) return null;
                        let a = {};
                        'string' == typeof t.name && (a.errorName = t.name);
                        let i = t.details;
                        return ((0, h.u4)(i) && 'string' == typeof i.correctRoomId && (a.correctRoomId = i.correctRoomId), a);
                    } catch (e) {
                        return null;
                    }
                },
                dc = _.gK
                    .compose(
                        _.gK.model('Multivibe', {
                            invitationRoom: _.gK.maybeNull(is),
                            createdRoomId: _.gK.maybeNull(_.gK.string),
                            duplicateRoomId: _.gK.maybeNull(_.gK.string),
                            promoModal: ns.q,
                            inviteModal: ns.q,
                            disabledRoomInfoModal: ns.q,
                            disabledRoomId: _.gK.maybeNull(_.gK.string),
                            errorName: _.gK.maybeNull(_.gK.string),
                        }),
                        ee.X,
                        w.p,
                    )
                    .views((e) => ({
                        get isEnabled() {
                            let { experiments: t } = (0, D.M)(e);
                            return t.checkExperiment(O.z.WebNextWaveForTwo, 'on');
                        },
                        get isOnboardingEnabled() {
                            let { experiments: t } = (0, D.M)(e);
                            return t.checkExperiment(O.z.WebNextWaveForTwoOnboarding, 'on') && t.checkExperiment(O.z.WebNextSlidesPage, 'on');
                        },
                        get isGetRoomByIdLoading() {
                            return e.isNeededToLoad || e.loadingState === F.G.PENDING;
                        },
                        get isGetRoomByIdRejected() {
                            return e.loadingState === F.G.REJECT;
                        },
                    }))
                    .actions((e) => ({
                        getRoomById: (0, _.L3)(function* (t) {
                            let { roomId: a } = t;
                            if (e.loadingState === F.G.PENDING) return;
                            let { waveResource: i, modelActionsLogger: r } = (0, _._$)(e);
                            ((e.invitationRoom = null), (e.errorName = null));
                            try {
                                e.loadingState = F.G.PENDING;
                                let t = yield i.getRoomById({ roomId: a });
                                ((e.invitationRoom = (0, _.wg)(tL(t))), e.loadingState !== F.G.IDLE && (e.loadingState = F.G.RESOLVE));
                            } catch (t) {
                                (r.error(t),
                                    t instanceof U.GX && t.statusCode === U.X1.NOT_FOUND && (e.errorName = dn.z.ROOM_NOT_FOUND),
                                    e.loadingState !== F.G.IDLE && (e.loadingState = F.G.REJECT));
                            }
                        }),
                        createRoom: (0, _.L3)(function* () {
                            let { waveResource: t, modelActionsLogger: a } = (0, _._$)(e);
                            e.errorName = null;
                            try {
                                let a = yield t.createRoom();
                                if (!ds(a)) return ir.F.ERROR;
                                let i = tL(a);
                                return ((e.createdRoomId = null == i ? void 0 : i.id), ir.F.OK);
                            } catch (i) {
                                a.error(i);
                                let t = yield du(i);
                                return (dg(t) && t.errorName === dn.z.ROOM_LIMIT_EXCEEDED && (e.errorName = dn.z.ROOM_LIMIT_EXCEEDED), ir.F.ERROR);
                            }
                        }),
                        enterRoom: (0, _.L3)(function* (t) {
                            let { waveResource: a, modelActionsLogger: i } = (0, _._$)(e);
                            ((e.errorName = null), (e.duplicateRoomId = null));
                            try {
                                let i = yield a.enterRoom(t);
                                if (!ds(i)) return ir.F.ERROR;
                                return ((e.invitationRoom = (0, _.wg)(tL(i))), ir.F.OK);
                            } catch (a) {
                                i.error(a);
                                let t = yield du(a);
                                return (
                                    dg(t) &&
                                        t.errorName === dn.z.ROOM_DUPLICATION &&
                                        t.correctRoomId &&
                                        ((e.errorName = dn.z.ROOM_DUPLICATION), (e.duplicateRoomId = t.correctRoomId)),
                                    ir.F.ERROR
                                );
                            }
                        }),
                        setDisabledRoomId(t) {
                            e.disabledRoomId = t;
                        },
                        resetDisabledRoomId() {
                            e.disabledRoomId = null;
                        },
                        resetDuplicateRoomId() {
                            e.duplicateRoomId = null;
                        },
                        resetErrorName() {
                            e.errorName = null;
                        },
                        reset() {
                            ((e.loadingState = F.G.IDLE),
                                (e.duplicateRoomId = null),
                                (e.disabledRoomId = null),
                                (e.errorName = null),
                                e.destroyItems([e.invitationRoom]));
                        },
                    })),
                dm = _.gK
                    .model('ContextMenuAddTracksToPlaylist', { playlistsWithoutTracks: _.gK.array(tM.$), playlistsLoadingState: ee.X, tracksLoadingState: ee.X })
                    .views((e) => ({
                        get isPlaylistsLoading() {
                            return e.playlistsLoadingState.isNeededToLoad || e.playlistsLoadingState.isLoading;
                        },
                        get isTracksLoading() {
                            return e.tracksLoadingState.isLoading;
                        },
                        getFilteredPlaylists(t, a) {
                            let i = t.trim().toLowerCase();
                            return e.playlistsWithoutTracks.filter((e) => {
                                var t;
                                return e.uuid !== a && (!i || (null != (t = e.title) ? t : '').toLowerCase().includes(i));
                            });
                        },
                    }))
                    .actions((e) => ({
                        loadPlaylistsWithoutTracks: (0, _.L3)(function* () {
                            let { modelActionsLogger: t, usersResource: a } = (0, _._$)(e),
                                { user: i } = (0, D.M)(e),
                                r = i.account.data.uid;
                            if (r && !e.playlistsLoadingState.isLoading)
                                try {
                                    ((e.playlistsWithoutTracks = (0, _.wg)([])), (e.playlistsLoadingState.loadingState = F.G.PENDING));
                                    let t = yield a.getCreatedPlaylists({ userId: r, page: 0, pageSize: 1500 });
                                    ((e.playlistsWithoutTracks = (0, _.wg)(t.map(tb.j))), (e.playlistsLoadingState.loadingState = F.G.RESOLVE));
                                } catch (a) {
                                    ((e.playlistsLoadingState.loadingState = F.G.REJECT), t.error(a));
                                }
                        }),
                        fetchPlaylistTrackIds: (0, _.L3)(function* (t) {
                            let { user: a } = (0, D.M)(e),
                                i = a.account.data.uid;
                            if (!i || e.tracksLoadingState.isLoading) return null;
                            let { usersResource: r, modelActionsLogger: l } = (0, _._$)(e);
                            try {
                                e.tracksLoadingState.loadingState = F.G.PENDING;
                                let [a] = yield r.getPlaylistsByKinds({ userId: i, kinds: [t], withTracks: !0 });
                                if (((e.tracksLoadingState.loadingState = F.G.RESOLVE), !a)) return [];
                                return a.tracks.map((e) => {
                                    let { id: t } = e;
                                    return String(t);
                                });
                            } catch (t) {
                                return ((e.tracksLoadingState.loadingState = F.G.REJECT), l.error(t), null);
                            }
                        }),
                    }));
            var dy = a(39499),
                dp = a(98953);
            let dE = { width: '614', height: '556' },
                db = { width: '100%', height: '240' },
                dv = (e) => ({ width: e ? db.width : dE.width, height: e ? db.height : dE.height }),
                dS = { width: '614', height: '244' },
                dK = { width: '100%', height: '240' };
            var dI = a(10285),
                dL = a(42668),
                dT = a(21944),
                dh = a(71594);
            let dN = (e) => e.replace(dT.ew, ''),
                dA = (e) => (dh.s.test(e) ? e : ''.concat(e).concat(dT.ew)),
                df = (e) => {
                    let { width: t, height: a, iframeUri: i, listenMessage: r } = e,
                        l = dN(t),
                        n = dN(a),
                        s = dA(t),
                        o = dA(a);
                    return '<iframe frameborder="0" allow="clipboard-write" style="border:none;width:'
                        .concat(s, ';height:')
                        .concat(o, ';" width="')
                        .concat(l, '" height="')
                        .concat(n, '" src="')
                        .concat(i, '">')
                        .concat(r, '</iframe>');
                },
                dC = _.gK.model({ width: _.gK.string, height: _.gK.string }),
                dR = dC
                    .props({
                        id: _.gK.number,
                        type: _.gK.literal(dp.Y.ALBUM),
                        title: _.gK.string,
                        path: _.gK.string,
                        artistName: _.gK.maybeNull(_.gK.string),
                        artistId: _.gK.maybeNull(_.gK.string),
                        listenMessage: _.gK.maybeNull(_.gK.string),
                    })
                    .views((e) => {
                        let t = {
                            get iframeUri() {
                                let { location: t } = (0, D.M)(e);
                                return ((e) => {
                                    let { tld: t, id: a } = e;
                                    return 'https://music.yandex.'.concat(t, '/iframe/album/').concat(a);
                                })({ tld: t.tld, id: e.id });
                            },
                            get entityUri() {
                                let { location: t } = (0, D.M)(e),
                                    { config: a } = (0, _._$)(e);
                                return ''.concat((0, dI.r)(a.iframe.entityBaseUrl, t.tld, dL.B)).concat(e.path);
                            },
                            get artistUri() {
                                if (null === e.artistId) return null;
                                let { location: t } = (0, D.M)(e),
                                    { config: a } = (0, _._$)(e);
                                return ''.concat((0, dI.r)(a.iframe.entityBaseUrl, t.tld, dL.B), '/artist/').concat(e.artistId);
                            },
                            get iframeCode() {
                                var a;
                                return df({ width: e.width, height: e.height, iframeUri: t.iframeUri, listenMessage: null != (a = e.listenMessage) ? a : '' });
                            },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        setWidth(t) {
                            e.width = t;
                        },
                        setHeight(t) {
                            e.height = t;
                        },
                        setListenMessage(t) {
                            var a, i, r, l;
                            e.listenMessage = t(
                                ((a = e.entityUri),
                                (i = e.title),
                                (r = e.artistUri),
                                null === (l = e.artistName)
                                    ? '<a href="'.concat(a, '">').concat(i, '</a>')
                                    : null === r
                                      ? '<a href="'.concat(a, '">').concat(i, '</a> — ').concat(l)
                                      : '<a href="'.concat(a, '">').concat(i, '</a> — <a href="').concat(r, '">').concat(l, '</a>')),
                            );
                        },
                    })),
                dk = dC
                    .props({
                        id: _.gK.string,
                        type: _.gK.literal(dp.Y.PLAYLIST),
                        title: _.gK.maybeNull(_.gK.string),
                        path: _.gK.string,
                        ownerLogin: _.gK.maybeNull(_.gK.string),
                        ownerName: _.gK.maybeNull(_.gK.string),
                        listenMessage: _.gK.maybeNull(_.gK.string),
                    })
                    .views((e) => {
                        let t = {
                            get iframeUri() {
                                var a;
                                let { location: t } = (0, D.M)(e);
                                return ((e) => {
                                    let { tld: t, ownerLogin: a, id: i } = e;
                                    return 'https://music.yandex.'.concat(t, '/iframe/playlist/').concat(a, '/').concat(i);
                                })({ tld: t.tld, ownerLogin: null != (a = e.ownerLogin) ? a : '', id: e.id });
                            },
                            get entityUri() {
                                let { location: t } = (0, D.M)(e),
                                    { config: a } = (0, _._$)(e);
                                return ''.concat((0, dI.r)(a.iframe.entityBaseUrl, t.tld, dL.B)).concat(e.path);
                            },
                            get iframeCode() {
                                var i;
                                return df({ width: e.width, height: e.height, iframeUri: t.iframeUri, listenMessage: null != (i = e.listenMessage) ? i : '' });
                            },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        setWidth(t) {
                            e.width = t;
                        },
                        setHeight(t) {
                            e.height = t;
                        },
                        setListenMessage(t) {
                            let a, i, r, l, n, s;
                            if (null === e.title || null === e.ownerName || null === e.ownerLogin) {
                                e.listenMessage = t('');
                                return;
                            }
                            let { location: o } = (0, D.M)(e);
                            e.listenMessage = t(
                                ((r = e.entityUri),
                                (l = e.title),
                                (n = e.ownerName),
                                (a = o.tld),
                                (i = e.ownerLogin),
                                (s = 'https://music.yandex.'.concat(a, '/users/').concat(i)),
                                '<a href="'.concat(r, '">').concat(l, '</a> — <a href="').concat(s, '">').concat(n, '</a>')),
                            );
                        },
                    })),
                dP = dC
                    .props({
                        id: _.gK.string,
                        albumId: _.gK.maybeNull(_.gK.number),
                        type: _.gK.literal(dp.Y.TRACK),
                        title: _.gK.string,
                        path: _.gK.string,
                        artistName: _.gK.maybeNull(_.gK.string),
                        artistId: _.gK.maybeNull(_.gK.string),
                        listenMessage: _.gK.maybeNull(_.gK.string),
                    })
                    .views((e) => {
                        let t = {
                            get iframeUri() {
                                var a;
                                let { location: t } = (0, D.M)(e);
                                return ((e) => {
                                    let { tld: t, id: a, albumId: i } = e;
                                    return void 0 !== i
                                        ? 'https://music.yandex.'.concat(t, '/iframe/album/').concat(i, '/track/').concat(a)
                                        : 'https://music.yandex.'.concat(t, '/iframe/track/').concat(a);
                                })({ tld: t.tld, id: e.id, albumId: null != (a = e.albumId) ? a : void 0 });
                            },
                            get entityUri() {
                                let { location: t } = (0, D.M)(e),
                                    { config: a } = (0, _._$)(e);
                                return ''.concat((0, dI.r)(a.iframe.entityBaseUrl, t.tld, dL.B)).concat(e.path);
                            },
                            get artistUri() {
                                if (null === e.artistId) return null;
                                let { location: t } = (0, D.M)(e),
                                    { config: a } = (0, _._$)(e);
                                return ''.concat((0, dI.r)(a.iframe.entityBaseUrl, t.tld, dL.B), '/artist/').concat(e.artistId);
                            },
                            get iframeCode() {
                                var i;
                                return df({ width: e.width, height: e.height, iframeUri: t.iframeUri, listenMessage: null != (i = e.listenMessage) ? i : '' });
                            },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        setWidth(t) {
                            e.width = t;
                        },
                        setHeight(t) {
                            e.height = t;
                        },
                        setListenMessage(t) {
                            var a, i, r, l;
                            e.listenMessage = t(
                                ((a = e.entityUri),
                                (i = e.title),
                                (r = e.artistUri),
                                null === (l = e.artistName)
                                    ? '<a href="'.concat(a, '">').concat(i, '</a>')
                                    : null === r
                                      ? '<a href="'.concat(a, '">').concat(i, '</a> — ').concat(l)
                                      : '<a href="'.concat(a, '">').concat(i, '</a> — <a href="').concat(r, '">').concat(l, '</a>')),
                            );
                        },
                    })),
                d_ = _.gK.union(dP, dR, dk),
                dD = _.gK.model({ entity: _.gK.maybeNull(d_), modal: ns.q }).actions((e) => ({
                    openModal(t) {
                        let { settings: a } = (0, D.M)(e);
                        ((e.entity = ((e, t) => {
                            if (e.variant === dp.Y.TRACK)
                                return ((e) => {
                                    let t,
                                        { variant: a, id: i, title: r, path: l, trackArtistName: n, trackArtistId: s, trackAlbumId: o, isMobile: d } = e;
                                    return (0, _.wg)({
                                        id: i,
                                        type: a,
                                        albumId: o,
                                        title: r,
                                        path: l,
                                        artistName: null != n ? n : null,
                                        artistId: null != s ? s : null,
                                        ...{ width: (t = d) ? dK.width : dS.width, height: t ? dK.height : dS.height },
                                    });
                                })({ ...e, isMobile: t });
                            if (e.variant === dp.Y.ALBUM) {
                                let a = e.id;
                                if (void 0 === a) throw new dy.t('Missing album ID');
                                return ((e) => {
                                    let { variant: t, id: a, title: i, path: r, albumArtistName: l, albumArtistId: n, isMobile: s } = e;
                                    return (0, _.wg)({ id: a, type: t, title: i, path: r, artistName: null != l ? l : null, artistId: null != n ? n : null, ...dv(s) });
                                })({ ...e, id: a, isMobile: t });
                            }
                            if (e.variant === dp.Y.PLAYLIST)
                                return ((e) => {
                                    let { variant: t, id: a, title: i, path: r, playlistOwnerName: l, playlistOwnerLogin: n, isMobile: s } = e;
                                    return (0, _.wg)({
                                        id: String(a),
                                        type: t,
                                        title: null != i ? i : null,
                                        path: null != r ? r : null,
                                        ownerName: l,
                                        ownerLogin: n,
                                        ...dv(s),
                                    });
                                })({ ...e, isMobile: t });
                            throw new dy.t('Unknown variant');
                        })({ ...t, title: (0, h.ky)(t.title || '', { whiteList: {} }) }, a.isMobile)),
                            e.modal.open());
                    },
                    closeModal() {
                        (e.modal.close(), (e.entity = null));
                    },
                })),
                dO = _.gK
                    .compose(
                        _.gK.model('SharedVibe', {
                            shareId: _.gK.maybeNull(_.gK.string),
                            vibe: _.gK.maybeNull(eX.G),
                            modal: _.gK.optional(ns.q, {}),
                            unavailableModal: _.gK.optional(ns.q, {}),
                        }),
                        ee.X,
                        w.p,
                    )
                    .actions((e) => {
                        let t = {
                            getData: (0, _.L3)(function* (a, i) {
                                if (e.isLoading) return;
                                let { waveResource: r, modelActionsLogger: l } = (0, _._$)(e);
                                (t.reset(), (e.shareId = a));
                                try {
                                    e.loadingState = F.G.PENDING;
                                    let t = i;
                                    if ((t || (t = (yield r.getShare({ shareId: a })).data), e.shareId !== a || e.isNeededToLoad || e.isResolved)) return;
                                    ((e.vibe = (0, _.wg)((0, em.l)(t.wave, t.agent))), (e.loadingState = F.G.RESOLVE));
                                } catch (t) {
                                    (l.error(t), e.shareId === a && e.isLoading && (e.loadingState = F.G.REJECT));
                                }
                            }),
                            reset() {
                                ((e.loadingState = F.G.IDLE), (e.shareId = null), e.modal.close(), e.unavailableModal.close(), e.destroyItems([e.vibe]));
                            },
                        };
                        return t;
                    }),
                dw = _.gK.model('Network', { isOffline: _.gK.optional(_.gK.boolean, !1) }),
                dG = _.gK.model('Entity', { progress: _.gK.maybe(_.gK.number), loadingState: _.gK.enumeration(Object.values(V.DT)) }),
                dM = _.gK
                    .model('Slam', { networkStatus: dw, offlineMode: _.gK.maybe(_.gK.boolean), tracks: _.gK.map(dG) })
                    .views((e) => {
                        let t = {
                            get hasDownloadedTracks() {
                                for (let a of e.tracks.keys()) if (t.isTrackDownloaded(a)) return !0;
                                return !1;
                            },
                            isTrackDownloaded: (t) => {
                                var a;
                                return (null == (a = e.tracks.get(t)) ? void 0 : a.loadingState) === V.DT.DOWNLOADED;
                            },
                            isTrackDownloading: (t) => {
                                var a;
                                return (null == (a = e.tracks.get(t)) ? void 0 : a.loadingState) === V.DT.DOWNLOADING;
                            },
                            getTrackDownloadingProgress: (t) => {
                                var a, i;
                                return null != (i = null == (a = e.tracks.get(t)) ? void 0 : a.progress) ? i : 0;
                            },
                            isPlaylistDownloaded: (e) =>
                                e.every((e) => {
                                    let [a] = (0, iK.d)(e);
                                    return !!a && t.isTrackDownloaded(a);
                                }),
                            isPlaylistDownloading: (e) =>
                                e.some((e) => {
                                    let [a] = (0, iK.d)(e);
                                    return !!a && t.isTrackDownloading(a);
                                }),
                            getPlaylistDownloadingProgress: (e) =>
                                Math.floor(
                                    (e.reduce((e, a) => {
                                        let [i] = (0, iK.d)(a);
                                        return i && t.isTrackDownloaded(i) ? e + 1 : e;
                                    }, 0) /
                                        e.length) *
                                        100,
                                ),
                            get isOfflineModeEnabled() {
                                if (!(0, _._n)(e)) return !1;
                                return e.offlineMode;
                            },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        setNetworkStatus: (t) => {
                            e.networkStatus = t;
                        },
                        setTrack: (t, a) => {
                            e.tracks.set(t, a);
                        },
                        setTracks: (t) => {
                            e.tracks = (0, _.wg)(t);
                        },
                        setOfflineMode: function (t) {
                            let a = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                                { localStorage: i } = (0, _._$)(e);
                            ((e.offlineMode = t), a && i.set(ni.c.OfflineMode, t));
                        },
                    }));
            var dU = a(33396),
                dB = a(16473),
                dV = a(28692);
            let dF = [og.MT.PLAYING, og.MT.LOADING_MEDIA_SOURCE, og.MT.BUFFERING],
                dx = _.gK.model('UnloadedEntityMeta', { id: _.gK.union(_.gK.number, _.gK.string), albumId: _.gK.maybe(_.gK.union(_.gK.number, _.gK.string)) }),
                dj = _.gK.model('UnloadedEntityData', { meta: dx, type: _.gK.literal(og.z4.Unloaded) }),
                dW = _.gK
                    .model('BaseSonataState', {
                        contextType: _.gK.maybeNull(_.gK.enumeration(Object.values(sU.K))),
                        contextId: _.gK.maybeNull(_.gK.string),
                        entityMeta: _.gK.maybeNull(om),
                        status: _.gK.enumeration(Object.values(og.MT)),
                        canMoveForward: _.gK.boolean,
                        canMoveBackward: _.gK.boolean,
                        canSpeed: _.gK.boolean,
                        repeatMode: _.gK.enumeration(Object.values(dV.pM)),
                        canChangeRepeatMode: _.gK.boolean,
                        volume: _.gK.maybe(_.gK.number),
                        speed: _.gK.maybe(_.gK.number),
                        position: _.gK.maybeNull(_.gK.number),
                        duration: _.gK.maybeNull(_.gK.number),
                        canShuffle: _.gK.boolean,
                        shuffle: _.gK.boolean,
                        quality: _.gK.enumeration(Object.values(dB.e)),
                        unloadedEntitiesData: _.gK.maybe(_.gK.array(dj)),
                    })
                    .volatile(() => ({ volatileUnloadedEntitiesData: void 0 }))
                    .views((e) => ({
                        get unloadedEntitiesDataFromModels() {
                            var t;
                            return null != (t = e.volatileUnloadedEntitiesData) ? t : (0, nL.HO)(e.unloadedEntitiesData);
                        },
                        get isVibeContext() {
                            return e.contextType === sU.K.Vibe;
                        },
                        get isGenerativeContext() {
                            return e.contextType === sU.K.Generative;
                        },
                        get isPaused() {
                            return e.status === og.MT.PAUSED;
                        },
                        get isPlaying() {
                            return dF.includes(e.status);
                        },
                        get isContextRepeatMode() {
                            return e.repeatMode === dV.pM.CONTEXT;
                        },
                        get isOneRepeatMode() {
                            return e.repeatMode === dV.pM.ONE;
                        },
                    }))
                    .actions((e) => ({
                        setContextId: (t) => {
                            e.contextId = String(t);
                        },
                        setContextType: (t) => {
                            e.contextType = t;
                        },
                        setEntityMeta: (t) => {
                            t && t.data.meta && (e.entityMeta && (0, _.Yo)(e.entityMeta), (e.entityMeta = oc(t)));
                        },
                        setUnloadedEntitiesData: (t) => {
                            t && ((e.volatileUnloadedEntitiesData = (0, dU.A)(t)), (e.unloadedEntitiesData = (0, _.wg)(t)));
                        },
                        resetUnloadedEntitiesData: () => {
                            ((e.volatileUnloadedEntitiesData = void 0), (e.unloadedEntitiesData = void 0));
                        },
                        setStatus: (t) => {
                            e.status = t;
                        },
                        setCanMoveForward: (t) => {
                            e.canMoveForward = t;
                        },
                        setCanMoveBackward: (t) => {
                            e.canMoveBackward = t;
                        },
                        setVolume: (t) => {
                            e.volume = t;
                        },
                        setCanSpeed: (t) => {
                            e.canSpeed = t;
                        },
                        setSpeed: (t) => {
                            e.speed = t;
                        },
                        setRepeatMode: (t) => {
                            e.repeatMode = t;
                        },
                        setCanChangeRepeatMode: (t) => {
                            e.canChangeRepeatMode = t;
                        },
                        setCanShuffle: (t) => {
                            e.canShuffle = t;
                        },
                        setShuffle: (t) => {
                            e.shuffle = t;
                        },
                        setQuality: (t) => {
                            e.quality = t;
                        },
                        setPosition: (t) => {
                            e.position = t;
                        },
                        setDuration: (t) => {
                            e.duration = t;
                        },
                    }))
                    .props({
                        playlistFilter: _.gK.maybe(_.gK.string),
                        areCoresRegistered: _.gK.boolean,
                        isVHCoreRegistered: _.gK.boolean,
                        shouldApplyYnisonState: _.gK.optional(_.gK.boolean, !0),
                        isCrossFadeEnabled: _.gK.boolean,
                    })
                    .actions((e) => ({
                        setIsVHCoreRegistered(t) {
                            e.isVHCoreRegistered = t;
                        },
                        setPlaylistFilter: (t) => {
                            e.playlistFilter = t;
                        },
                        setCoresAsRegistered: (t) => {
                            e.areCoresRegistered = t;
                        },
                        setShouldApplyYnisonState: (t) => {
                            e.shouldApplyYnisonState = t;
                        },
                        setCrossFadeMode: (t) => {
                            let { containerStorage: a } = (0, _._$)(e);
                            (a.set(ni.c.CrossFadeMode, t, { expires: 365 }), (e.isCrossFadeEnabled = t));
                        },
                    }))
                    .named('SonataState'),
                dX = lC.Z.props({ tracksLoadingState: _.gK.optional(ee.X, { loadingState: F.G.IDLE }) }),
                d$ = _.gK
                    .model('ContextMenuTrackPlaylists', { playlists: _.gK.array(dX), playlistsLoadingState: _.gK.optional(ee.X, { loadingState: F.G.IDLE }) })
                    .views((e) => ({
                        get isPlaylistsLoading() {
                            return e.playlistsLoadingState.isNeededToLoad || e.playlistsLoadingState.isLoading;
                        },
                        getFilteredPlaylists(t) {
                            let a = t.trim().toLowerCase();
                            return e.playlists.filter((e) => {
                                var t;
                                return e.isAvailable && (null != (t = e.title) ? t : '').toLowerCase().includes(a);
                            });
                        },
                    }))
                    .actions((e) => ({
                        reset() {
                            (0, _.Nh)(e, {});
                        },
                        loadPlaylistsWithoutTracks: (0, _.L3)(function* () {
                            let t = (0, D.M)(e).user.account.data.uid;
                            if (!t || !e.playlistsLoadingState.isNeededToLoad) return;
                            let { usersResource: a, modelActionsLogger: i } = (0, _._$)(e);
                            e.playlistsLoadingState.loadingState = F.G.PENDING;
                            try {
                                let i = yield a.getCreatedPlaylists({ userId: t });
                                ((e.playlists = (0, _.wg)(i.map(tb.j))), (e.playlistsLoadingState.loadingState = F.G.RESOLVE));
                            } catch (t) {
                                ((e.playlistsLoadingState.loadingState = F.G.REJECT), i.error(t));
                            }
                        }),
                        fetchPlaylistTracks: (0, _.L3)(function* (t, a) {
                            let i = e
                                    .getFilteredPlaylists(a)
                                    .slice(t, t + 20)
                                    .filter((e) => e.tracksLoadingState.isNeededToLoad),
                                r = (0, D.M)(e).user.account.data.uid;
                            if (!r || !i.length) return ir.F.OK;
                            let { usersResource: l, modelActionsLogger: n } = (0, _._$)(e);
                            i.forEach((e) => {
                                e.tracksLoadingState.loadingState = F.G.PENDING;
                            });
                            try {
                                let e = yield l.getPlaylistsByKinds({ userId: r, kinds: i.map((e) => e.kind), withTracks: !0 });
                                for (let t of i.filter(_._n)) {
                                    let a = e.find((e) => e.kind === t.kind);
                                    (a ? ((t.tracks = (0, _.wg)(a.tracks.map(lA))), (t.revision = a.revision)) : (t.isAvailable = !1),
                                        (t.tracksLoadingState.loadingState = F.G.RESOLVE));
                                }
                                return ir.F.OK;
                            } catch (e) {
                                return (
                                    i.filter(_._n).forEach((e) => {
                                        e.tracksLoadingState.loadingState = F.G.REJECT;
                                    }),
                                    n.error(e),
                                    ir.F.ERROR
                                );
                            }
                        }),
                    })),
                dY = _.gK.model('Credit', { title: _.gK.string, value: _.gK.string }),
                dJ = _.gK
                    .model('CurrentTrackInfo', {
                        id: _.gK.maybeNull(_.gK.union(_.gK.string, _.gK.number)),
                        albumId: _.gK.maybeNull(_.gK.number),
                        isUGC: _.gK.maybeNull(_.gK.boolean),
                        trackLoadingState: _.gK.enumeration(Object.values(F.G)),
                        fullTrack: _.gK.maybeNull(Z.v),
                        creditsLoadingState: _.gK.enumeration(Object.values(F.G)),
                        credits: _.gK.maybeNull(_.gK.array(dY)),
                        modal: ns.q,
                        fullDescription: _.gK.maybeNull(_.gK.string),
                        descriptionLoadingState: _.gK.enumeration(Object.values(F.G)),
                    })
                    .views((e) => ({
                        get isTrackIdle() {
                            return e.trackLoadingState === F.G.IDLE;
                        },
                        get isCreditsIdle() {
                            return e.creditsLoadingState === F.G.IDLE;
                        },
                        get isTrackLoading() {
                            return e.trackLoadingState === F.G.PENDING || e.trackLoadingState === F.G.IDLE;
                        },
                        get isTrackRejected() {
                            return e.trackLoadingState === F.G.REJECT;
                        },
                        get isCreditsLoading() {
                            return e.creditsLoadingState === F.G.PENDING || e.creditsLoadingState === F.G.IDLE;
                        },
                        get isCreditsRejected() {
                            return e.creditsLoadingState === F.G.REJECT;
                        },
                        get isRejected() {
                            return e.creditsLoadingState === F.G.REJECT && e.trackLoadingState === F.G.REJECT;
                        },
                    }))
                    .actions((e) => ({
                        setTrack(t) {
                            let { id: a, albumId: i, isUGC: r } = t;
                            ((e.id = a), (e.albumId = i), (e.isUGC = r));
                        },
                        getFullTrack: (0, _.L3)(function* () {
                            let { tracksResource: t, modelActionsLogger: a } = (0, _._$)(e);
                            if (!e.id || e.trackLoadingState === F.G.PENDING) return null;
                            try {
                                e.trackLoadingState = F.G.PENDING;
                                let a = yield t.getFullInfoTrack({ trackId: e.id, albumId: e.albumId });
                                if (!a) return null;
                                ((e.fullTrack = (0, _.wg)((0, tl.v)(a.track))), (e.trackLoadingState = F.G.RESOLVE));
                            } catch (t) {
                                (a.error(t), (e.trackLoadingState = F.G.REJECT));
                            }
                            return null;
                        }),
                        getFullDescription: (0, _.L3)(function* () {
                            let { tracksResource: t, modelActionsLogger: a } = (0, _._$)(e);
                            if (!e.id || e.descriptionLoadingState === F.G.PENDING) return null;
                            try {
                                e.descriptionLoadingState = F.G.PENDING;
                                let a = yield t.getFullDescriptionTrack({ trackId: e.id });
                                if (!a) return null;
                                ((e.fullDescription = a.description), (e.descriptionLoadingState = F.G.RESOLVE));
                            } catch (t) {
                                (a.error(t), (e.descriptionLoadingState = F.G.REJECT));
                            }
                            return null;
                        }),
                        getTrackMeta: (0, _.L3)(function* () {
                            let { tracksResource: t, modelActionsLogger: a } = (0, _._$)(e);
                            if (!e.id || e.trackLoadingState === F.G.PENDING) return null;
                            try {
                                e.trackLoadingState = F.G.PENDING;
                                let a = yield t.getTracksMeta({ trackIds: [e.id], removeDuplicates: !0 });
                                if (!a || !a.length) return null;
                                a[0] && ((e.fullTrack = (0, _.wg)((0, tl.v)(a[0]))), (e.trackLoadingState = F.G.RESOLVE));
                            } catch (t) {
                                (a.error(t), (e.trackLoadingState = F.G.REJECT));
                            }
                            return null;
                        }),
                        getCreditsInfo: (0, _.L3)(function* () {
                            let { tracksResource: t, modelActionsLogger: a } = (0, _._$)(e);
                            if (!e.id || e.creditsLoadingState === F.G.PENDING) return null;
                            try {
                                e.creditsLoadingState = F.G.PENDING;
                                let a = yield t.getCredits({ trackId: e.id });
                                ((e.credits = (0, _.wg)(null == a ? void 0 : a.credits)), (e.creditsLoadingState = F.G.RESOLVE));
                            } catch (t) {
                                (a.error(t), (e.creditsLoadingState = F.G.REJECT));
                            }
                            return null;
                        }),
                        reset() {
                            ((e.id = null),
                                (e.albumId = null),
                                (e.isUGC = null),
                                (e.trackLoadingState = F.G.IDLE),
                                (e.descriptionLoadingState = F.G.IDLE),
                                (e.creditsLoadingState = F.G.IDLE),
                                (e.fullTrack = null),
                                (e.credits = null));
                        },
                    })),
                dq = _.gK.model('TrackComplaint', { trackId: _.gK.maybeNull(_.gK.string), modal: ns.q }).actions((e) => ({
                    setTrackId(t) {
                        e.trackId = t;
                    },
                    reset() {
                        e.trackId = null;
                    },
                })),
                dH = _.gK
                    .compose(
                        _.gK.model('TrackLyrics', {
                            lyrics: _.gK.maybeNull(_.gK.string),
                            major: _.gK.maybeNull(oK),
                            lyricId: _.gK.maybeNull(_.gK.number),
                            writers: _.gK.array(_.gK.string),
                            externalLyricId: _.gK.maybeNull(_.gK.string),
                            modal: ns.q,
                            track: _.gK.maybeNull(Z.v),
                            trackId: _.gK.maybeNull(_.gK.union(_.gK.string, _.gK.number)),
                            currentTrackId: _.gK.maybeNull(_.gK.union(_.gK.string, _.gK.number)),
                            hasError: _.gK.optional(_.gK.boolean, !1),
                        }),
                        ee.X,
                    )
                    .views((e) => ({
                        get writersNames() {
                            return e.writers.join(', ');
                        },
                        get hasWriters() {
                            return 0 !== e.writers.length;
                        },
                        get isShimmerVisible() {
                            return e.isLoading || e.isRejected;
                        },
                        get shouldShowErrorNotification() {
                            return e.isRejected && e.hasError;
                        },
                    }))
                    .actions((e) => {
                        let t = {
                            setTrack(t) {
                                e.track = (0, _.wg)({ ...(0, nL.HO)(t) });
                            },
                            resetShouldShowError() {
                                e.hasError = !1;
                            },
                            getLyrics: (0, _.L3)(function* (a) {
                                let { config: i, tracksResource: r, modelActionsLogger: l } = (0, _._$)(e);
                                if (e.loadingState !== F.G.PENDING && e.currentTrackId !== a)
                                    try {
                                        ((e.loadingState = F.G.PENDING), (e.currentTrackId = a));
                                        let { downloadUrl: l, major: n, externalLyricId: s, lyricId: o, writers: g } = yield r.getLyrics(ov(i, a, d.TEXT));
                                        ((e.major = oS(n)),
                                            (e.externalLyricId = s),
                                            (e.lyricId = o),
                                            (e.writers = (0, _.wg)(g || [])),
                                            yield t.downloadLyrics(l),
                                            (e.loadingState = F.G.RESOLVE));
                                    } catch (t) {
                                        ((e.loadingState = F.G.REJECT), (e.currentTrackId = null), (e.hasError = !0), e.modal.isOpened && e.modal.close(), l.error(t));
                                    }
                            }),
                            downloadLyrics: (0, _.L3)(function* (t) {
                                let { prefixlessResource: a } = (0, _._$)(e);
                                e.lyrics = yield a.getLyricsText(t);
                            }),
                            sendViews: (0, _.L3)(function* (t) {
                                let { trackId: a, albumId: i } = t,
                                    { lyricViewsResource: r, modelActionsLogger: l } = (0, _._$)(e);
                                if (e.loadingState === F.G.RESOLVE)
                                    try {
                                        if (!e.major || !e.lyricId || !e.externalLyricId || !e.currentTrackId) return;
                                        yield r.sendViews({
                                            lyricViews: [
                                                {
                                                    id: (0, op.A)(),
                                                    trackId: a,
                                                    majorId: e.major.id,
                                                    lyricId: e.lyricId,
                                                    externalLyricId: e.externalLyricId,
                                                    lyricFormat: d.TEXT,
                                                    albumId: void 0 !== i ? String(i) : void 0,
                                                },
                                            ],
                                        });
                                    } catch (e) {
                                        l.error(e);
                                    }
                            }),
                        };
                        return t;
                    });
            var dz = a(68376),
                dQ = a(51235);
            !(function (e) {
                ((e.PROCESSING = 'processing'), (e.PLAYABLE = 'playable'));
            })(y || (y = {}));
            var dZ = (function (e) {
                    return ((e.TOO_MANY_FILES = 'TOO_MANY_FILES'), (e.UNKNOWN_ERROR = 'UNKNOWN_ERROR'), e);
                })({}),
                d0 = a(32932);
            (p || (p = {})).TOO_MANY_FILES = 'TOO_MANY_FILES';
            let d1 = _.gK
                .model('TrackUgcUploadModel', {
                    loadingState: _.gK.enumeration(Object.values(d0.p)),
                    errorReason: _.gK.maybeNull(_.gK.enumeration(Object.values(dZ))),
                    playlistKind: _.gK.number,
                    trackId: _.gK.maybeNull(_.gK.string),
                    uploadUrl: _.gK.maybeNull(_.gK.string),
                })
                .volatile(() => ({ file: null, abortController: null }))
                .actions((e) => {
                    let t = {
                        setFile(t) {
                            e.file = t;
                        },
                        getUploadUrl: (0, _.L3)(function* () {
                            if (!(0, _._n)(e)) return;
                            let { loaderResource: t, modelActionsLogger: a } = (0, _._$)(e),
                                { user: i } = (0, D.M)(e);
                            if (![d0.p.IDLE, d0.p.REJECT].includes(e.loadingState)) return;
                            e.loadingState = d0.p.PREPARE;
                            let r = i.account.data.uid;
                            if (r)
                                try {
                                    var l;
                                    let a = null == (l = e.file) ? void 0 : l.name,
                                        i = yield t.getUploadUrl({ playlistId: ''.concat(r, ':').concat(e.playlistKind), uid: r, path: a });
                                    if (i && 'result' in i && i.result === p.TOO_MANY_FILES) {
                                        ((e.loadingState = d0.p.REJECT), (e.errorReason = dZ.TOO_MANY_FILES));
                                        return;
                                    }
                                    if (i && 'post-target' in i && 'ugc-track-id' in i) {
                                        ((e.uploadUrl = i['post-target']), (e.trackId = i['ugc-track-id']));
                                        return;
                                    }
                                    ((e.errorReason = dZ.UNKNOWN_ERROR), (e.loadingState = d0.p.REJECT));
                                    return;
                                } catch (t) {
                                    ((e.loadingState = d0.p.REJECT), a.error(t));
                                    return;
                                }
                        }),
                        uploadFile: (0, _.L3)(function* () {
                            if (!(0, _._n)(e)) return;
                            let { prefixlessResource: t, modelActionsLogger: a } = (0, _._$)(e);
                            if (e.loadingState === d0.p.PREPARE && e.uploadUrl && e.file) {
                                e.loadingState = d0.p.UPLOADING;
                                try {
                                    let a = new FormData();
                                    a.append('file', e.file);
                                    let i = new AbortController(),
                                        r = i.signal;
                                    ((e.abortController = i), yield t.uploadFile({ url: e.uploadUrl, formData: a }, { signal: r }), (e.loadingState = d0.p.PROCESSING));
                                    return;
                                } catch (t) {
                                    ((e.loadingState = d0.p.REJECT), a.error(t));
                                    return;
                                }
                            }
                        }),
                        runUpload: (0, _.L3)(function* () {
                            (0, _._n)(e) && (yield t.getUploadUrl(), e.loadingState !== d0.p.REJECT && (yield t.uploadFile()));
                        }),
                        retryUpload() {
                            if ((this.reset(), !(0, _._n)(e))) return;
                            let { ugcUploadCenter: t } = (0, D.M)(e);
                            t.runUploadTracksQueue();
                        },
                        abortUpload() {
                            var t;
                            if (((e.loadingState = d0.p.CANCELLED), null == (t = e.abortController) || t.abort(), !(0, _._n)(e))) return;
                            let { ugcUploadCenter: a } = (0, D.M)(e);
                            a.clearCancelledUploads();
                        },
                        reset() {
                            ((e.loadingState = d0.p.IDLE), (e.trackId = null), (e.uploadUrl = null), (e.abortController = null));
                        },
                    };
                    return t;
                });
            var d3 = a(84985);
            let d2 = _.gK.model('UgcUploadCenterNotificationsPairModel', { playlist: tM.$, type: _.gK.enumeration(Object.values(d3.u)) }),
                d5 = _.gK
                    .model('UgcUploadCenterNotificationsModel', { pairs: _.gK.array(d2) })
                    .views((e) => ({ isNotificationExists: (t, a) => e.pairs.some((e) => e.playlist.kind === t && e.type === a) }))
                    .actions((e) => {
                        let t = {
                            addNotification(t, a) {
                                e.pairs.push({ playlist: (0, nL.HO)(t), type: a });
                            },
                            addNonexistentNotification(a, i) {
                                e.isNotificationExists(a.kind, i) || t.addNotification(a, i);
                            },
                            showAllNotifications() {
                                let t = (0, nL.HO)(e.pairs);
                                return ((e.pairs = (0, _.wg)([])), t);
                            },
                        };
                        return t;
                    }),
                d6 = _.gK.model('UgcUploadCenterTrackPlaylistPair', { playlist: tM.$, file: d1 }),
                d8 = _.gK
                    .model('UgcUploadCenterModel', { tracks: _.gK.array(d6), notifications: d5, checkProcessingTracksAttempts: _.gK.number })
                    .views((e) => ({
                        get isAvailable() {
                            let { experiments: t } = (0, D.M)(e);
                            return !t.checkExperiment(O.z.WebNextUgcUploadDegradation, 'on');
                        },
                        getUploadingTracksByPlaylistKind: (t) => (t ? e.tracks.filter((e) => e.playlist.kind === t).map((e) => e.file) : []),
                        getTracksByLoadingState: (t) => e.tracks.filter((e) => e.file.loadingState === t).map((e) => e.file),
                        get idleTracks() {
                            return this.getTracksByLoadingState(d0.p.IDLE);
                        },
                        get preparingTracks() {
                            return this.getTracksByLoadingState(d0.p.PREPARE);
                        },
                        get uploadingTracks() {
                            return this.getTracksByLoadingState(d0.p.UPLOADING);
                        },
                        get processingTracks() {
                            return this.getTracksByLoadingState(d0.p.PROCESSING);
                        },
                        get hasTracksInUploadingState() {
                            return this.preparingTracks.length + this.uploadingTracks.length > 0;
                        },
                        get shouldCheckProcessingTracks() {
                            return e.checkProcessingTracksAttempts < 25 && this.processingTracks.length > 0;
                        },
                        getPlaylistByKind(t) {
                            var a;
                            return null == (a = e.tracks.find((e) => e.playlist.kind === t)) ? void 0 : a.playlist;
                        },
                    }))
                    .actions((e) => {
                        let t = {
                            appendFiles(t, a) {
                                if (
                                    !e.isAvailable ||
                                    (t.forEach((t) => {
                                        if (t.size > 0x19000000) return void e.notifications.addNonexistentNotification(a, d3.u.FILE_TOO_LARGE);
                                        let i = d1.create({ loadingState: d0.p.IDLE, playlistKind: a.kind });
                                        i.setFile(t);
                                        let r = d6.create({ file: i, playlist: (0, nL.HO)(a) });
                                        e.tracks.unshift(r);
                                    }),
                                    !(0, _._n)(e))
                                )
                                    return;
                                let { playlist: i } = (0, D.M)(e);
                                (i.search.setText(''), i.search.reset(), this.runUploadTracksQueue());
                            },
                            async runUploadTracksQueue() {
                                let a = e.idleTracks;
                                if (a.length && !e.hasTracksInUploadingState) {
                                    let i = a[a.length - 1];
                                    (i &&
                                        (await i.runUpload(),
                                        i.loadingState === d0.p.REJECT &&
                                            i.errorReason === dZ.TOO_MANY_FILES &&
                                            ((e.tracks = (0, _.wg)([])), t.addNotificationForPlaylistKind(i.playlistKind, d3.u.TOO_MANY_FILES)),
                                        t.checkNotifications()),
                                        t.setCheckProcessingTracksAttempts(0),
                                        t.runUploadTracksQueue());
                                }
                            },
                            checkProcessingTracks: (0, _.L3)(function* () {
                                let { tracksResource: a, modelActionsLogger: i } = (0, _._$)(e),
                                    r = [];
                                if (e.checkProcessingTracksAttempts >= 25) return null;
                                t.setCheckProcessingTracksAttempts(e.checkProcessingTracksAttempts + 1);
                                try {
                                    let t = e.processingTracks.map((e) => e.trackId).filter((e) => !!e);
                                    if (!t.length) return null;
                                    let i = yield a.getTracksMeta({ trackIds: t, withProgress: !0 });
                                    null == i ||
                                        i.forEach((t) => {
                                            let a = e.tracks.find((e) => e.file.trackId === t.id && t.state === y.PLAYABLE);
                                            a && ((a.file.loadingState = d0.p.RESOLVE), a.file.trackId && r.push(a.file.trackId));
                                        });
                                } catch (e) {
                                    i.error(e);
                                }
                                return (t.checkNotifications(r), t.moveTracksFromUploadCenterToPlaylist(), null);
                            }),
                            moveTracksFromUploadCenterToPlaylist() {
                                var t;
                                if (!(0, _._n)(e)) return;
                                let { playlist: a } = (0, D.M)(e);
                                ((null == (t = a.meta) ? void 0 : t.kind) &&
                                    e.tracks.find((e) => {
                                        var t;
                                        return e.file.loadingState === d0.p.RESOLVE && e.playlist.kind === (null == (t = a.meta) ? void 0 : t.kind);
                                    }) &&
                                    a.refreshTracks(),
                                    (e.tracks = (0, _.wg)(e.tracks.filter((e) => e.file.loadingState !== d0.p.RESOLVE))));
                            },
                            setCheckProcessingTracksAttempts(t) {
                                e.checkProcessingTracksAttempts = t;
                            },
                            clearCancelledUploads() {
                                e.tracks = (0, _.wg)(e.tracks.filter((e) => e.file.loadingState !== d0.p.CANCELLED));
                            },
                            checkNotifications(a) {
                                let i = new Set();
                                (e.tracks.forEach((e) => i.add(e.playlist.kind)),
                                    i.forEach((i) => {
                                        let r = e.getUploadingTracksByPlaylistKind(i);
                                        if (!(!r.length || r.some((e) => e.loadingState !== d0.p.RESOLVE && e.loadingState !== d0.p.REJECT)))
                                            if (r.some((e) => e.loadingState === d0.p.REJECT)) {
                                                let l = !0;
                                                if (a && a.length) {
                                                    let t = r.map((e) => e.trackId).filter((e) => e),
                                                        i = (0, dz.A)(t, a, dQ.A);
                                                    i.length &&
                                                        (l = i
                                                            .map((t) => e.tracks.find((e) => e.file.trackId === t))
                                                            .some((e) => (null == e ? void 0 : e.file.loadingState) === d0.p.REJECT));
                                                }
                                                l && t.addNotificationForPlaylistKind(i, d3.u.UNKNOWN_ERROR);
                                            } else t.addNotificationForPlaylistKind(i, d3.u.SUCCESS);
                                    }));
                            },
                            addNotificationForPlaylistKind(t, a) {
                                let i = e.getPlaylistByKind(t);
                                i && e.notifications.addNonexistentNotification(i, a);
                            },
                        };
                        return t;
                    }),
                d4 = (e) => {
                    let { type: t, tag: a } = e.id;
                    return { title: e.name, seed: ''.concat(t, ':').concat(a), specialContext: e.specialContext, specialContextImage: e.specialContextImage };
                },
                d7 = (e, t) => {
                    let a = [];
                    return (
                        t.possibleValues.forEach((e) => {
                            e.unspecified || a.push(((e) => ({ value: e.value, title: e.name, seed: e.serializedSeed, imageUrl: e.imageUrl }))(e));
                        }),
                        { type: e, title: t.name, values: (0, _.wg)(a) }
                    );
                };
            var d9 = a(80693);
            let ge = _.gK.model('ContextItem', {
                    title: _.gK.string,
                    seed: _.gK.string,
                    specialContext: _.gK.boolean,
                    specialContextImage: _.gK.optional(_.gK.string, ''),
                }),
                gt = _.gK.model('RestrictonValue', { value: _.gK.string, title: _.gK.string, seed: _.gK.string, imageUrl: _.gK.maybe(_.gK.string) }),
                ga = _.gK.model('Restricton', { type: _.gK.enumeration(Object.values(d9.s)), title: _.gK.string, values: _.gK.array(gt) }),
                gi = _.gK
                    .compose(
                        _.gK.model('VibeSettings', {
                            contextItems: _.gK.array(ge),
                            diversity: _.gK.maybeNull(ga),
                            moodEnergy: _.gK.maybeNull(ga),
                            language: _.gK.maybeNull(ga),
                            modal: ns.q,
                        }),
                        ee.X,
                    )
                    .actions((e) => ({
                        getData: (0, _.L3)(function* (t) {
                            let { rotorResource: a, modelActionsLogger: i } = (0, _._$)(e);
                            if (e.loadingState !== F.G.PENDING)
                                try {
                                    var r, l, n, s;
                                    e.loadingState = F.G.PENDING;
                                    let i = yield a.waveSettings(t);
                                    ((null == i || null == (r = i.settingRestrictions) ? void 0 : r.diversity) &&
                                        (e.diversity = d7(d9.s.DIVERSITY, i.settingRestrictions.diversity)),
                                        (null == i || null == (l = i.settingRestrictions) ? void 0 : l.moodEnergy) &&
                                            (e.moodEnergy = d7(d9.s.MOOD_ENERGY, i.settingRestrictions.moodEnergy)),
                                        (null == i || null == (n = i.settingRestrictions) ? void 0 : n.language) &&
                                            (e.language = d7(d9.s.LANGUAGE, i.settingRestrictions.language)));
                                    let o =
                                        Array.isArray(null == i ? void 0 : i.blocks) &&
                                        (null == i || null == (s = i.blocks) ? void 0 : s.find((e) => (null == e ? void 0 : e.type) === 'contexts'));
                                    (o && Array.isArray(o.items) && (e.contextItems = (0, _.wg)(o.items.map(d4))),
                                        e.loadingState !== F.G.IDLE && (e.loadingState = F.G.RESOLVE));
                                } catch (t) {
                                    (i.error(t), e.loadingState !== F.G.IDLE && (e.loadingState = F.G.REJECT));
                                }
                        }),
                        reset() {
                            ((e.loadingState = F.G.IDLE),
                                (e.contextItems = (0, _.wg)([])),
                                (e.diversity = null),
                                (e.moodEnergy = null),
                                (e.language = null),
                                e.modal.close());
                        },
                    }));
            (!(function (e) {
                ((e.ALICE = 'alice'), (e.LUMEN = 'lumen'));
            })(E || (E = {})),
                (function (e) {
                    ((e.DONATION = 'DONATION'), (e.CONCERT = 'CONCERT'), (e.FACT = 'FACT'), (e.LUMEN = 'LUMEN'), (e.PERSONAL = 'PERSONAL'));
                })(b || (b = {})));
            let gr = (e) => {
                var t;
                return { title: e.title, url: e.url, faviconUrl: null != (t = e.faviconUrl) ? t : null };
            };
            var gl = a(87999),
                gn = a(48404);
            let gs = _.gK
                    .model('WordsBigCardPanel', {
                        isOpened: _.gK.optional(_.gK.boolean, !1),
                        trackId: _.gK.maybe(_.gK.string),
                        cardId: _.gK.maybe(_.gK.string),
                        submittedFeedback: _.gK.maybeNull(_.gK.enumeration(Object.values(gn.a))),
                        isFeedbackMessageVisible: _.gK.optional(_.gK.boolean, !1),
                    })
                    .views((e) => {
                        let t = {
                            get card() {
                                return (0, D.M)(e).words.getCardForTrack(e.trackId);
                            },
                            get bigCard() {
                                var a;
                                let { activeBigCard: i } = (0, D.M)(e).words;
                                return (null == i ? void 0 : i.id) === (null == (a = t.card) ? void 0 : a.bigCardId) ? i : void 0;
                            },
                            get text() {
                                var i, r, l;
                                return null != (l = null == (i = t.bigCard) ? void 0 : i.text) ? l : null == (r = t.card) ? void 0 : r.text;
                            },
                            get mainObjectType() {
                                var n;
                                return (null == (n = t.card) ? void 0 : n.isPersonal) ? gl.DomainObjectType.PersonalFact : gl.DomainObjectType.Fact;
                            },
                            get objectType() {
                                var s, o, d;
                                if (t.bigCard) return (null == (o = t.card) ? void 0 : o.isPersonal) ? gl.DomainObjectType.PersonalBigFact : gl.DomainObjectType.BigFact;
                                return null != (d = null == (s = t.card) ? void 0 : s.domainObjectType) ? d : t.mainObjectType;
                            },
                            get sourceItems() {
                                var g, u, c;
                                let e = t.bigCard;
                                if (null == e || null == (g = e.actions) ? void 0 : g.length) return e.actions;
                                return null != (c = null == (u = t.card) ? void 0 : u.actions) ? c : [];
                            },
                            get isFeedbackDisabled() {
                                return !e.isOpened || !t.card || (t.card.isFeedbackPending && !e.isFeedbackMessageVisible);
                            },
                            get isContentReady() {
                                let { words: a } = (0, D.M)(e),
                                    i = t.card;
                                return void 0 !== i && (!i.hasBigCard || void 0 !== t.bigCard || a.bigCardLoadingState.isRejected);
                            },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        open(t) {
                            let { words: a } = (0, D.M)(e),
                                i = a.getCardForTrack(t);
                            !e.trackId &&
                                i &&
                                ((e.trackId = t),
                                (e.cardId = i.id),
                                (e.isOpened = !0),
                                (e.submittedFeedback = null),
                                (e.isFeedbackMessageVisible = !1),
                                i.bigCardId && a.loadBigCard(i.bigCardId, t, i.id));
                        },
                        close() {
                            e.isOpened = !1;
                        },
                        reset() {
                            ((e.isOpened = !1), (e.trackId = void 0), (e.cardId = void 0), (e.submittedFeedback = null), (e.isFeedbackMessageVisible = !1));
                        },
                        showFeedbackMessage(t) {
                            ((e.submittedFeedback = t), (e.isFeedbackMessageVisible = !0));
                        },
                        hideFeedbackMessage() {
                            e.isFeedbackMessageVisible = !1;
                        },
                    })),
                go = new Set(Object.values(gl.DomainObjectType)),
                gd = _.gK.model('WordsCardAction', { title: _.gK.string, url: _.gK.string }),
                gg = _.gK.model('WordsCardSource', { title: _.gK.string, url: _.gK.string, faviconUrl: _.gK.maybeNull(_.gK.string) }),
                gu = _.gK
                    .model('WordsCard', {
                        id: _.gK.string,
                        text: _.gK.string,
                        tags: _.gK.maybe(_.gK.array(_.gK.string)),
                        action: _.gK.maybe(gd),
                        actions: _.gK.maybe(_.gK.array(gg)),
                        bigCardIds: _.gK.maybe(_.gK.array(_.gK.string)),
                        feedbackState: _.gK.maybe(_.gK.string),
                        feedbackLoadingState: _.gK.enumeration(Object.values(F.G)),
                        analyticObjectType: _.gK.maybe(_.gK.string),
                        analyticObjectId: _.gK.maybe(_.gK.string),
                    })
                    .views((e) => {
                        let t = {
                            get isFact() {
                                var a;
                                if (!(0, _._n)(e)) return !1;
                                return null == (a = e.tags) ? void 0 : a.includes(b.FACT);
                            },
                            get isLumen() {
                                var i;
                                if (!(0, _._n)(e)) return !1;
                                return !!(t.isFact || (null == (i = e.tags) ? void 0 : i.includes(b.LUMEN)));
                            },
                            get isPersonal() {
                                var r;
                                if (!(0, _._n)(e)) return !1;
                                return t.withBigCardPanel && (null == (r = e.tags) ? void 0 : r.includes(b.PERSONAL));
                            },
                            get isInformer() {
                                var l, n;
                                if (!(0, _._n)(e)) return !1;
                                return !(null == (l = e.tags) ? void 0 : l.includes(b.FACT)) && !!(null == (n = e.action) ? void 0 : n.url);
                            },
                            get bigCardId() {
                                var s;
                                return null == (s = e.bigCardIds) ? void 0 : s[0];
                            },
                            get hasBigCard() {
                                var o;
                                return !!(null == (o = e.bigCardIds) ? void 0 : o[0]);
                            },
                            get isLiked() {
                                return e.feedbackState === gn.a.LIKE;
                            },
                            get isDisliked() {
                                return e.feedbackState === gn.a.DISLIKE;
                            },
                            get isFeedbackPending() {
                                return e.feedbackLoadingState === F.G.PENDING;
                            },
                            get withDirectLinkNavigation() {
                                if (!(0, _._n)(e)) return !1;
                                let { experiments: a } = (0, D.M)(e);
                                return a.checkExperiment(O.z.WebNextWaveScreenWordsInWaveDirectLinks, 'on') && !!t.isInformer;
                            },
                            get withBigCardPanel() {
                                if (!(0, _._n)(e)) return !1;
                                let { words: t } = (0, D.M)(e);
                                return t.isBigCardPanelEnabled;
                            },
                            get isBigCardFullscreenEnabled() {
                                if (!(0, _._n)(e)) return !1;
                                let { experiments: a } = (0, D.M)(e);
                                return !t.withBigCardPanel && t.hasBigCard && a.checkExperiment(O.z.WebNextWaveScreenWordsInWaveBigReplica, 'on');
                            },
                            get domainObjectType() {
                                return ((e) => 'string' == typeof e && go.has(e))(e.analyticObjectType) ? e.analyticObjectType : void 0;
                            },
                            get isLumenFaceAvatarEnabled() {
                                return !!(t.withBigCardPanel && t.isLumen && e.text);
                            },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        sendFeedback: (0, _.L3)(function* (t) {
                            let a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                            if (!(0, _._n)(e) || e.isFeedbackPending) return;
                            let { wordsResource: i } = (0, _._$)(e),
                                r = e.feedbackState;
                            ((e.feedbackLoadingState = F.G.PENDING), a && (e.feedbackState = t));
                            try {
                                (yield i.cardsFeedback({ feedback: [{ id: e.id, feedbackState: t }] }),
                                    (0, _._n)(e) && ((e.feedbackState = t), (e.feedbackLoadingState = F.G.RESOLVE)));
                            } catch (t) {
                                throw ((0, _._n)(e) && (a && (e.feedbackState = r), (e.feedbackLoadingState = F.G.REJECT)), t);
                            }
                        }),
                    })),
                gc = _.gK
                    .model('Words', {
                        cards: _.gK.map(gu),
                        activeBigCard: _.gK.maybe(_.gK.frozen()),
                        loadingState: _.gK.enumeration(Object.values(F.G)),
                        bigCardLoadingState: ee.X,
                        loadingTrackIds: _.gK.map(_.gK.boolean),
                        bigCardFullscreen: ns.q,
                        bigCardPanel: _.gK.optional(gs, {}),
                    })
                    .volatile(() => ({
                        requestedTrackIds: new Set(),
                        viewedCardIds: new Set(),
                        viewedBigCardIdsByCardId: new Map(),
                        viewedStore: void 0,
                        resolvedEmptyTrackIds: new Set(),
                        activeBigCardId: void 0,
                    }))
                    .views((e) => ({
                        get withSparkles() {
                            let { experiments: t } = (0, D.M)(e);
                            return t.checkExperiment(O.z.WebNextWaveScreenWordsInWave, 'on');
                        },
                        get isBigCardPanelEnabled() {
                            let { experiments: t, lumen: a, user: i } = (0, D.M)(e),
                                r = t.checkExperiment(O.z.WebNextReplicsLumenOption, 'on');
                            return i.hasPlus && a.isEnabled && t.checkExperiment(O.z.WebNextReplicsLumenUI, 'on') && (!r || !!i.isLumenAvailable);
                        },
                        getCardForTrack(t) {
                            if (t) return e.cards.get(String(t));
                        },
                        isTrackRequested: (t) => e.requestedTrackIds.has(t),
                        isTrackResolvedWithoutCard: (t) => e.resolvedEmptyTrackIds.has(t),
                        isLoading: (t) => e.loadingTrackIds.has(t),
                        get isShimmerVisible() {
                            return e.bigCardLoadingState.isNeededToLoad || e.bigCardLoadingState.isLoading;
                        },
                        get isShimmerActive() {
                            return e.bigCardLoadingState.isLoading;
                        },
                    }))
                    .actions((e) => ({
                        setWordsViewedStore(t) {
                            e.viewedStore = t;
                        },
                        markCardViewed(t) {
                            var a;
                            (e.viewedCardIds.add(t), null == (a = e.viewedStore) || a.addViewedIds([t]));
                        },
                        markBigCardViewed(t, a) {
                            var i, r;
                            let l = null != (r = e.viewedBigCardIdsByCardId.get(t)) ? r : new Set();
                            (l.add(a), e.viewedBigCardIdsByCardId.set(t, l), null == (i = e.viewedStore) || i.addViewedBigCards([{ cardId: t, bigCardIds: [a] }]));
                        },
                        evict(t) {
                            Array.from(e.cards.keys()).forEach((a) => {
                                if (!t.has(a)) {
                                    e.bigCardPanel.isOpened && e.bigCardPanel.trackId === a && e.bigCardPanel.close();
                                    let t = e.cards.get(a);
                                    (t && e.viewedBigCardIdsByCardId.delete(t.id),
                                        e.cards.delete(a),
                                        e.requestedTrackIds.delete(a),
                                        e.loadingTrackIds.delete(a),
                                        e.resolvedEmptyTrackIds.delete(a));
                                }
                            });
                        },
                        loadCards: (0, _.L3)(function* (t) {
                            let { wordsResource: a, modelActionsLogger: i } = (0, _._$)(e),
                                r = t.filter((t) => !e.requestedTrackIds.has(t));
                            if (0 !== r.length) {
                                r.forEach((t) => {
                                    (e.requestedTrackIds.add(t), e.loadingTrackIds.set(t, !0));
                                });
                                try {
                                    var l, n, s, o, d, g;
                                    e.loadingState = F.G.PENDING;
                                    let t = yield null != (s = null == (l = e.viewedStore) ? void 0 : l.getViewedIds()) ? s : Promise.resolve([]),
                                        i = Array.from(new Set([...e.viewedCardIds, ...t])),
                                        u = yield null != (o = null == (n = e.viewedStore) ? void 0 : n.getViewedBigCards()) ? o : Promise.resolve([]),
                                        c = new Map();
                                    (u.forEach((e) => {
                                        c.set(e.cardId, new Set(e.bigCardIds));
                                    }),
                                        e.viewedBigCardIdsByCardId.forEach((e, t) => {
                                            var a;
                                            let i = null != (a = c.get(t)) ? a : new Set();
                                            (e.forEach((e) => i.add(e)), c.set(t, i));
                                        }));
                                    let m = Array.from(c.entries()).map((e) => {
                                            let [t, a] = e;
                                            return { cardId: t, bigCardIds: Array.from(a) };
                                        }),
                                        { concerts: y } = (0, D.M)(e),
                                        p = y.concertsLocationForRequest,
                                        v = yield a.cards({
                                            trackIds: r,
                                            viewedCards: i,
                                            viewedBigCards: m,
                                            locations: p,
                                            actionProvider: e.isBigCardPanelEnabled ? E.LUMEN : E.ALICE,
                                        });
                                    (e.viewedCardIds.clear(),
                                        e.viewedBigCardIdsByCardId.clear(),
                                        i.length > 0 && (null == (d = e.viewedStore) || d.clearSentIds(i)),
                                        m.length > 0 && (null == (g = e.viewedStore) || g.clearSentBigCards(m)),
                                        v.forEach((t) => {
                                            let a = t.cards[0];
                                            a &&
                                                e.cards.set(
                                                    t.id,
                                                    ((e) => {
                                                        var t, a, i, r, l, n;
                                                        let { card: s, feedbackState: o } = e,
                                                            d = s.action
                                                                ? ((r = s.action),
                                                                  (null == (t = s.tags) ? void 0 : t.includes(b.DONATION))
                                                                      ? r0(r.link)
                                                                          ? { title: r.title, url: r.link }
                                                                          : void 0
                                                                      : { title: r.title, url: null != (n = null != (l = r.weblink) ? l : r.link) ? n : '' })
                                                                : void 0,
                                                            g = Array.isArray(s.tags) ? s.tags.filter((e) => 'string' == typeof e) : void 0,
                                                            u = Array.isArray(s.actions) ? s.actions.map(gr) : void 0,
                                                            c = Array.isArray(s.bigCardIds) ? s.bigCardIds.filter((e) => 'string' == typeof e) : void 0,
                                                            m = null == (a = s.analyticPayload) ? void 0 : a.objectType,
                                                            y = null == (i = s.analyticPayload) ? void 0 : i.objectId;
                                                        return (0, _.wg)({
                                                            id: s.id,
                                                            text: s.text,
                                                            tags: g,
                                                            action: d,
                                                            actions: u,
                                                            bigCardIds: c,
                                                            feedbackState: o,
                                                            feedbackLoadingState: F.G.IDLE,
                                                            analyticObjectId: y,
                                                            analyticObjectType: m,
                                                        });
                                                    })(a),
                                                );
                                        }),
                                        r.forEach((t) => {
                                            e.cards.has(t) ? e.resolvedEmptyTrackIds.delete(t) : e.resolvedEmptyTrackIds.add(t);
                                        }),
                                        r.forEach((t) => e.loadingTrackIds.delete(t)),
                                        (e.loadingState = F.G.RESOLVE));
                                } catch (t) {
                                    ((e.loadingState = F.G.REJECT),
                                        r.forEach((t) => {
                                            (e.requestedTrackIds.delete(t), e.loadingTrackIds.delete(t), e.resolvedEmptyTrackIds.delete(t));
                                        }),
                                        i.error(t));
                                }
                            }
                        }),
                        loadBigCard: (0, _.L3)(function* (t, a, i) {
                            var r;
                            let { wordsResource: l, modelActionsLogger: n } = (0, _._$)(e),
                                s = e.activeBigCardId === t;
                            if (((e.activeBigCardId = t), (null == (r = e.activeBigCard) ? void 0 : r.id) === t)) {
                                e.bigCardLoadingState.loadingState = F.G.RESOLVE;
                                return;
                            }
                            if (!s || !e.bigCardLoadingState.isLoading) {
                                ((e.activeBigCard = void 0), (e.bigCardLoadingState.loadingState = F.G.PENDING));
                                try {
                                    let r = yield l.bigCards({
                                        bigCardIds: [t],
                                        bigCardContexts: [{ bigCardId: t, trackId: a, cardId: i }],
                                        actionProvider: e.isBigCardPanelEnabled ? E.LUMEN : E.ALICE,
                                    });
                                    if (e.activeBigCardId !== t) return;
                                    let n = r.find((e) => e.id === t);
                                    if (n) {
                                        ((e.activeBigCard = n), (e.bigCardLoadingState.loadingState = F.G.RESOLVE));
                                        return;
                                    }
                                    e.bigCardLoadingState.loadingState = F.G.REJECT;
                                } catch (a) {
                                    (e.activeBigCardId === t && ((e.activeBigCard = void 0), (e.bigCardLoadingState.loadingState = F.G.REJECT)), n.error(a));
                                }
                            }
                        }),
                    })),
                gm = _.gK.model('FreeAccess').views((e) => {
                    let t = {
                        get isFreeDesktopUser() {
                            let { user: t } = (0, D.M)(e);
                            return !t.hasPlus && T.NN;
                        },
                        get isFreeWebUser() {
                            let { user: t } = (0, D.M)(e);
                            return !t.hasPlus && T.$3;
                        },
                        get isFreeUser() {
                            return t.isFreeDesktopUser || t.isFreeWebUser;
                        },
                        get isFreePlaybackDisabled() {
                            var a, i, r;
                            let { user: t, settings: l, experiments: n } = (0, D.M)(e);
                            return (
                                !t.hasPlus &&
                                (null == (i = n.getExperiment(O.z.WebNextDesktopWebFreemium)) || null == (a = i.value) ? void 0 : a.closeListening) === 'on' &&
                                !(null == (r = l.browserInfo) ? void 0 : r.isTouch) &&
                                t.isAuthorized
                            );
                        },
                        get limitedFreePlayback() {
                            var l, n, s;
                            let { user: t, settings: a, experiments: i } = (0, D.M)(e);
                            return (
                                !t.hasPlus &&
                                (null == (n = i.getExperiment(O.z.WebNextDesktopWebFreemium)) || null == (l = n.value) ? void 0 : l.limitListening) === 'on' &&
                                !(null == (s = a.browserInfo) ? void 0 : s.isTouch) &&
                                t.isAuthorized
                            );
                        },
                        get isVibeStartRestricted() {
                            return t.isFreeWebUser || t.isFreePlaybackDisabled;
                        },
                        get isSearchVibeStartRestricted() {
                            return t.isFreePlaybackDisabled;
                        },
                    };
                    return t;
                });
            !(function (e) {
                ((e.AWAKENED = 'awakened'), (e.UNAWAKENED = 'unawakened'));
            })(v || (v = {}));
            let gy = [
                    {
                        [i2.S.Dark]: 'avatars.mds.yandex.net/get-music-misc/28592/img.69dcb1ef3dacc851cba63a44/%%',
                        [i2.S.Light]: 'avatars.mds.yandex.net/get-music-misc/34161/img.69daa855b357516550b967b1/%%',
                    },
                    {
                        [i2.S.Dark]: 'avatars.mds.yandex.net/get-music-misc/34161/img.69dcb1f03dacc851cba63a45/%%',
                        [i2.S.Light]: 'avatars.mds.yandex.net/get-music-misc/34161/img.69daa856b357516550b967b2/%%',
                    },
                    {
                        [i2.S.Dark]: 'avatars.mds.yandex.net/get-music-misc/28592/img.69dcb1ee3dacc851cba63a43/%%',
                        [i2.S.Light]: 'avatars.mds.yandex.net/get-music-misc/34161/img.69daa854b357516550b967b0/%%',
                    },
                ],
                gp = (e) => {
                    let t = 0;
                    for (let a = 0; a < e.length; a++) t = (Math.imul(t, 31) + e.charCodeAt(a)) >>> 0;
                    return t;
                },
                gE = (e) =>
                    (0, _.wg)({
                        cover: (0, tm.p)(e.cover),
                        fullCover: e.fullCover ? (0, tm.p)(e.fullCover) : void 0,
                        faceCover: e.faceCover ? (0, tm.p)(e.faceCover) : void 0,
                        solidColor: e.solidColor,
                    }),
                gb = _.gK.model('LumenTheme', { cover: eP.$, fullCover: _.gK.maybe(eP.$), faceCover: _.gK.maybe(eP.$), solidColor: _.gK.maybe(_.gK.string) }),
                gv = _.gK.model('LumenThemes', { light: gb, dark: gb }),
                gS = _.gK
                    .compose(_.gK.model('Lumen', { status: _.gK.maybeNull(_.gK.enumeration(Object.values(v))), themes: _.gK.maybeNull(gv) }), ee.X)
                    .views((e) => ({
                        get isAwakened() {
                            return e.status === v.AWAKENED;
                        },
                        get isEnabled() {
                            let { experiments: t } = (0, D.M)(e);
                            return t.checkExperiment(O.z.WebNextQueryToVibeXLumen, 'on');
                        },
                        get isTriedToLoadData() {
                            return !e.isNeededToLoad && !e.isLoading;
                        },
                        get playButtonShowDelay() {
                            var t;
                            let { experiments: a } = (0, D.M)(e),
                                i = null == (t = a.getExperiment(O.z.WebNextQueryToVibeXLumen)) ? void 0 : t.value.playButtonShowDelay;
                            return 'number' != typeof i || Number.isNaN(i) ? 0 : Number(i);
                        },
                    }))
                    .actions((e) => ({
                        getData: (0, _.L3)(function* (t) {
                            let { lumenResource: a, modelActionsLogger: i } = (0, _._$)(e),
                                { user: r } = (0, D.M)(e);
                            if (e.loadingState !== F.G.PENDING)
                                try {
                                    e.loadingState = F.G.PENDING;
                                    let i = gp(String(r.puid)),
                                        { status: l, themes: n } = yield a.getLumen({ hash: i }, { cacheControl: t ? 'no-cache' : void 0 });
                                    ((e.status = l), (e.themes = { light: gE(n.light), dark: gE(n.dark) }), (e.loadingState = F.G.RESOLVE));
                                } catch (t) {
                                    (i.error(t), (e.loadingState = F.G.REJECT));
                                }
                        }),
                        getFallbackImage: function () {
                            var e;
                            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '';
                            return null != (e = gy[gp(t) % gy.length]) ? e : gy[0];
                        },
                    }));
            var gK = a(11899),
                gI = a(74591);
            let gL = _.gK
                    .model({
                        modal: ns.q,
                        target: _.gK.string,
                        isSilent: _.gK.boolean,
                        tariffOfferName: _.gK.string,
                        offersBatchId: _.gK.string,
                        offersPositionIds: _.gK.string,
                        serviceSessionId: _.gK.string,
                        status: _.gK.enumeration(Object.values(gI.c)),
                    })
                    .views((e) => ({
                        get isSuccess() {
                            return e.status === gI.c.SUCCESS;
                        },
                        get isError() {
                            return e.status === gI.c.ERROR;
                        },
                    }))
                    .actions((e) => ({
                        setTarget(t) {
                            e.target = t;
                        },
                        setIsSilent(t) {
                            e.isSilent = t;
                        },
                        setTariffOfferName(t) {
                            e.tariffOfferName = t;
                        },
                        setOffersBatchId(t) {
                            e.offersBatchId = t;
                        },
                        setOffersPositionIds(t) {
                            e.offersPositionIds = t;
                        },
                        setServiceSessionId(t) {
                            e.serviceSessionId = t;
                        },
                        setStatus(t) {
                            if (((e.status = t), t !== gI.c.SUCCESS)) return;
                            let { experiments: a } = (0, D.M)(e);
                            if (a.isExperimentActive(O.z.WebNextTagSandbox)) {
                                let { tagSandbox: t } = (0, _._$)(e);
                                t.send('plus_subscription_purchased', {});
                            }
                        },
                        reset() {
                            ((e.target = ''),
                                (e.tariffOfferName = ''),
                                (e.offersBatchId = ''),
                                (e.offersPositionIds = ''),
                                (e.serviceSessionId = ''),
                                (e.status = gI.c.IDLE));
                        },
                        onModalOpenChange(t) {
                            (e.modal.onOpenChange(t),
                                !t &&
                                    e.isSuccess &&
                                    window.setTimeout(() => {
                                        window.location.reload();
                                    }, gK.DQ));
                        },
                    })),
                gT = _.gK
                    .model('DesktopPaywallModel')
                    .volatile(() => ({ crackdownTimeoutId: null }))
                    .views((e) => {
                        let t = {
                            get shouldUserHavePaywall() {
                                let { freeAccess: t, settings: a, user: i } = (0, D.M)(e);
                                return !a.isMobile && T.$3 && 0;
                            },
                            get isPaywallOpen() {
                                let { paywall: t } = (0, D.M)(e);
                                return t.modal.isOpened;
                            },
                            get isPassed() {
                                let { paywall: a, user: i } = (0, D.M)(e);
                                if (!i.account.isResolved || a.modal.isOpened) return !1;
                                return !t.shouldUserHavePaywall || !t.shouldShowOnEnter || a.modal.wasClosed;
                            },
                            get intervalMsOnEnter() {
                                var a;
                                let { experiments: t } = (0, D.M)(e),
                                    i = null == (a = t.getExperiment(O.z.WebNextDesktopPaywallInterval)) ? void 0 : a.value.interval;
                                if ('number' != typeof i || Number.isNaN(i)) return 2592e5;
                                return i;
                            },
                            get intervalMsCrackdown() {
                                var i;
                                let { experiments: t } = (0, D.M)(e),
                                    a = null == (i = t.getExperiment(O.z.WebNextPaywallCrackdownInterval)) ? void 0 : i.value.interval;
                                if ('number' != typeof a || Number.isNaN(a)) return 9e5;
                                return a;
                            },
                            get shouldShowOnEnter() {
                                var r, l;
                                let { settings: a } = (0, D.M)(e);
                                if (null == (r = a.browserInfo) ? void 0 : r.isMobile) return !1;
                                let { localStorage: i } = (0, _._$)(e),
                                    n = null == (l = i.get(ni.c.DesktopPaywall)) ? void 0 : l.lastOnLoadShowDate;
                                if (void 0 === n) return !0;
                                return new Date(n).getTime() < Date.now() - t.intervalMsOnEnter;
                            },
                            get isReadyToShowCrackdown() {
                                if (this.isPaywallOpen) return !1;
                                let {
                                    paymentWidgetModal: t,
                                    modals: { crackdownModal: a },
                                } = (0, D.M)(e);
                                if (t.modal.isOpened || a.isOpened) return !1;
                                return !0;
                            },
                        };
                        return t;
                    })
                    .actions((e) => {
                        let t = {
                            showPaywall() {
                                if (!e.shouldUserHavePaywall) return;
                                let { paywall: t } = (0, D.M)(e),
                                    { localStorage: a } = (0, _._$)(e);
                                (t.openModal(), a.set(ni.c.DesktopPaywall, { lastOnLoadShowDate: new Date() }));
                            },
                            clearCrackdownTimeout() {
                                null !== e.crackdownTimeoutId && (clearTimeout(e.crackdownTimeoutId), (e.crackdownTimeoutId = null));
                            },
                            startCrackdownTimeout() {
                                let { paywall: a, settings: i, experiments: r } = (0, D.M)(e);
                                i.isMobile ||
                                    T.NN ||
                                    r.checkExperiment(O.z.WebNextPaywallCrackdownInterval, 'default') ||
                                    (null !== e.crackdownTimeoutId && t.clearCrackdownTimeout(),
                                    (e.crackdownTimeoutId = setTimeout(() => {
                                        if (!e.isReadyToShowCrackdown) return void t.startCrackdownTimeout();
                                        a.openModal();
                                    }, e.intervalMsCrackdown)));
                            },
                        };
                        return t;
                    }),
                gh = _.gK.model('CreatePlaylist', { meta: _.gK.maybeNull(tM.$) }).actions((e) => ({
                    create: (0, _.L3)(function* (t) {
                        if (!(0, _._n)(e)) return null;
                        let { usersResource: a, modelActionsLogger: i } = (0, _._$)(e),
                            { user: r } = (0, D.M)(e);
                        if (!r.isAuthorized) return null;
                        let l = r.account.data.uid;
                        try {
                            let i = yield a.createPlaylist({ userId: String(l), ...t });
                            return ((e.meta = (0, tb.j)(i)), e.meta.uuid);
                        } catch (e) {
                            return (i.error(e), null);
                        }
                    }),
                    reset() {
                        e.meta = null;
                    },
                }));
            var gN = a(32353);
            let gA = _.gK.model({ text: _.gK.string, buttonText: _.gK.string, href: _.gK.string }),
                gf = _.gK
                    .compose(_.gK.model('RedAlert', { data: _.gK.maybeNull(gA) }), ee.X)
                    .views((e) => ({
                        get isVisible() {
                            let { settings: t } = (0, D.M)(e);
                            return t.layout !== gN.u.Mobile && !!e.data;
                        },
                        get text() {
                            if (null === e.data) throw Error('Missing data');
                            return e.data.text;
                        },
                        get buttonText() {
                            if (null === e.data) throw Error('Missing data');
                            return e.data.buttonText;
                        },
                        get href() {
                            if (null === e.data) throw Error('Missing data');
                            return e.data.href;
                        },
                    }))
                    .actions((e) => ({
                        getData: (0, _.L3)(function* () {
                            if (e.loadingState === F.G.PENDING) return;
                            let { user: t } = (0, D.M)(e),
                                { redAlertResource: a, modelActionsLogger: i } = (0, _._$)(e);
                            if (!t.isAuthorized) {
                                e.loadingState = F.G.IDLE;
                                return;
                            }
                            e.loadingState = F.G.PENDING;
                            try {
                                let t = yield a.getRedAlerts({ service: 'music', client: 'music-web', platform: 'web' });
                                ((e.data = ((e) => {
                                    let t = e.alerts.find((e) => {
                                        let { id: t } = e;
                                        return 'music-grace' === t;
                                    });
                                    return void 0 === t ? null : (0, _.wg)({ text: t.texts['bar-text'], buttonText: t.texts['bar-button-text'], href: t.clickUrl });
                                })(t)),
                                    (e.loadingState = F.G.RESOLVE));
                            } catch (t) {
                                (i.error(t), (e.loadingState = F.G.REJECT));
                            }
                        }),
                    }));
            var gC = a(64150),
                gR = a(75914),
                gk = a(89988);
            let gP = (e) => (0, _.wg)({ uri: null == e ? void 0 : e.uri, color: null == e ? void 0 : e.color, videoUrl: null == e ? void 0 : e.videoUrl }),
                g_ = (e) => (0, _.wg)({ value: e.value, title: e.title, titleType: e.titleType, subtitle: e.subtitle, cover: e.cover, coverType: e.coverType });
            var gD = a(86165);
            let gO = (e) => {
                    let t = ((e) =>
                        (0, _.wg)({
                            contentBackground: e.contentBackground ? gP(e.contentBackground) : void 0,
                            shareBackground: e.shareBackground ? gP(e.shareBackground) : void 0,
                            slideBackground: e.slideBackground ? gP(e.slideBackground) : void 0,
                            contentLogo: e.contentLogo ? gP(e.contentLogo) : void 0,
                            metaLabel: e.metaLabel,
                            metaLabelTextColor: e.metaLabelTextColor,
                            artists: e.artists,
                            artistTextColor: e.artistTextColor,
                            contentDescription: e.contentDescription,
                        }))(e.data);
                    switch (e.type) {
                        case gD.y.LINEUP:
                            return (0, _.wg)({
                                type: e.type,
                                data: { ...t, eventTagLabel: e.data.eventTagLabel, eventTagLabelTextColor: e.data.eventTagLabelTextColor },
                            });
                        case gD.y.LINEUP_WITH_FESTIVAL:
                            return (0, _.wg)({ type: e.type, data: { ...t, contentImage: gP(e.data.contentImage) } });
                        case gD.y.LINEUP_WITH_FESTIVAL_IMAGE:
                            return (0, _.wg)({
                                type: e.type,
                                data: { ...t, contentImage: gP(e.data.contentImage), festivalTitle: e.data.festivalTitle, festivalTextColor: e.data.festivalTextColor },
                            });
                    }
                },
                gw = (e) => (0, _.wg)({ value: e.value, valueDescription: e.valueDescription, valueSuffix: e.valueSuffix, footer: e.footer, align: e.align }),
                gG = (e) => {
                    var t, a, i, r, l, n, s;
                    return {
                        label: null != (i = e.label) ? i : null,
                        description: null != (r = e.description) ? r : null,
                        track: {
                            title: null != (l = e.track.title) ? l : null,
                            coverUri: null != (n = null == (t = e.track.cover) ? void 0 : t.uri) ? n : null,
                            artistsName: null != (s = null == (a = e.track.artists) ? void 0 : a.map((e) => e.name).join(', ')) ? s : null,
                        },
                    };
                },
                gM = (e, t) => {
                    var a, i, r, l, n, s, o, d, g, u, c, m, y, p, E, b;
                    let v, S, K;
                    if (null == (a = e.button) ? void 0 : a.type)
                        switch (e.button.type) {
                            case gR.m.ACTION:
                                v = ((e) => {
                                    var t;
                                    return (0, _.wg)({
                                        type: gR.m.ACTION,
                                        data: { title: e.data.title, imageUrl: e.data.imageUrl, url: null == (t = e.data.action) ? void 0 : t.weblink },
                                    });
                                })(e.button);
                                break;
                            case gR.m.SIMPLE:
                                v = ((e) =>
                                    (0, _.wg)({
                                        type: gR.m.SIMPLE,
                                        data: { title: e.data.title, buttonColor: e.data.buttonColor, textColor: e.data.textColor, url: e.data.action.weblink },
                                    }))(e.button);
                                break;
                            case gR.m.SHARE:
                                v = ((e) => {
                                    let { data: t } = e;
                                    return (0, _.wg)({ type: gR.m.SHARE, data: { title: t.title, buttonColor: t.bgColor, textColor: t.titleColor } });
                                })(e.button);
                                break;
                            case gR.m.LIKE:
                                v = ((e) => {
                                    var t, a, i, r;
                                    let { data: l } = e;
                                    return (0, _.wg)({
                                        type: gR.m.LIKE,
                                        data: {
                                            entityId: l.entityId,
                                            entityType: l.entityType,
                                            unliked: {
                                                title: l.unliked.title,
                                                buttonColor: null != (t = l.unliked.buttonColor) ? t : null,
                                                textColor: null != (a = l.unliked.textColor) ? a : null,
                                                enabled: l.unliked.enabled,
                                            },
                                            liked: {
                                                title: l.liked.title,
                                                buttonColor: null != (i = l.liked.buttonColor) ? i : null,
                                                textColor: null != (r = l.liked.textColor) ? r : null,
                                                enabled: l.liked.enabled,
                                            },
                                        },
                                    });
                                })(e.button);
                        }
                    let I = null != (s = e.background.videoUrl) ? s : '';
                    if (null == (i = e.content) ? void 0 : i.type)
                        switch (null == (o = e.content) ? void 0 : o.type) {
                            case gC.x.CHART:
                                S = ((e) =>
                                    (0, _.wg)({
                                        type: e.type,
                                        data: { description: e.data.description, isOrderVisible: !!e.data.isOrderVisible, items: e.data.items.map(g_) },
                                    }))(e.content);
                                break;
                            case gC.x.CHART_FAVORITES:
                                S = ((e) =>
                                    (0, _.wg)({
                                        type: e.type,
                                        data: {
                                            value: e.data.value,
                                            valueDescription: e.data.valueDescription,
                                            valueSuffix: e.data.valueSuffix,
                                            footer: e.data.footer,
                                            description: e.data.description,
                                            isOrderVisible: !!e.data.isOrderVisible,
                                            items: e.data.items.map(g_),
                                        },
                                    }))(e.content);
                                break;
                            case gC.x.SINGLE_ENTITY:
                                S = ((e) =>
                                    (0, _.wg)({
                                        type: e.type,
                                        data: {
                                            title: e.data.title,
                                            subtitle: e.data.subtitle,
                                            description: e.data.description,
                                            entityType: e.data.entityType,
                                            cover: gP(e.data.cover),
                                            align: e.data.align,
                                            smallRoundCover: e.data.smallRoundCover ? gP(e.data.smallRoundCover) : void 0,
                                            ...((e) => {
                                                let { coverMask: t, coverBackground: a } = e;
                                                return ((t && a) || ((t = gk.g2), (a = gk.wO)), { coverMask: t, coverBackground: a });
                                            })(e.data),
                                        },
                                    }))(e.content);
                                break;
                            case gC.x.STATS:
                                S = ((e) => {
                                    var t;
                                    return (0, _.wg)({
                                        type: e.type,
                                        data: {
                                            header: e.data.header,
                                            footer: null != (t = e.data.footer) ? t : void 0,
                                            align: e.data.align,
                                            stats: e.data.stats.map(gw),
                                        },
                                    });
                                })(e.content);
                                break;
                            case gC.x.TEXT:
                                S = ((e) =>
                                    (0, _.wg)({
                                        type: e.type,
                                        data: { title: e.data.title, subtitle: e.data.subtitle, align: e.data.align, titleSize: e.data.titleSize },
                                        disclaimer: null == e ? void 0 : e.disclaimer,
                                    }))(e.content);
                                break;
                            case gC.x.TEXT_FACT:
                                S = ((e) => {
                                    var t, a, i;
                                    return (0, _.wg)({
                                        type: e.type,
                                        data: {
                                            ...gw(e.data),
                                            coverType: null != (t = e.data.coverType) ? t : null,
                                            coverTitle: null != (a = e.data.coverTitle) ? a : null,
                                            smallCover: null != (i = e.data.smallCover) ? i : null,
                                        },
                                    });
                                })(e.content);
                                break;
                            case gC.x.CHART_ARTIST:
                                S = ((e) => {
                                    let t = e.data.cover ? gP(e.data.cover) : null;
                                    return (0, _.wg)({ type: e.type, data: { title: e.data.title, cover: t, items: e.data.items.map(g_) } });
                                })(e.content);
                                break;
                            case gC.x.ARTISTS:
                                S = ((e) => {
                                    let t = e.data.covers ? e.data.covers.slice(0, 3).map(gP) : [];
                                    return (0, _.wg)({
                                        type: e.type,
                                        data: {
                                            value: e.data.value,
                                            valueDescription: e.data.valueDescription,
                                            valueSuffix: e.data.valueSuffix,
                                            footer: e.data.footer,
                                            covers: t,
                                        },
                                    });
                                })(e.content);
                                break;
                            case gC.x.TEXT_EXTENDED:
                                S = ((e) => {
                                    var t, a, i;
                                    return {
                                        type: e.type,
                                        data: {
                                            title: null != (t = e.data.title) ? t : null,
                                            subtitle: null != (a = e.data.subtitle) ? a : null,
                                            description: null != (i = e.data.description) ? i : null,
                                        },
                                    };
                                })(e.content);
                                break;
                            case gC.x.THEN_NOW_COMPARISON:
                                S = ((e) => {
                                    var t, a;
                                    return {
                                        type: e.type,
                                        data: {
                                            title: null != (t = e.data.title) ? t : null,
                                            subtitle: null != (a = e.data.subtitle) ? a : null,
                                            firstItem: e.data.firstItem ? gG(e.data.firstItem) : null,
                                            secondItem: e.data.secondItem ? gG(e.data.secondItem) : null,
                                        },
                                    };
                                })(e.content);
                                break;
                            case gC.x.PAY_CARD:
                                S = ((e) => {
                                    var t, a, i;
                                    return {
                                        type: e.type,
                                        data: {
                                            title: null != (t = e.data.title) ? t : null,
                                            description: null != (a = e.data.description) ? a : null,
                                            artwork: null != (i = e.data.artwork) ? i : null,
                                        },
                                    };
                                })(e.content);
                                break;
                            case gC.x.CAROUSEL:
                                ((S = ((e) => {
                                    let t = e.data.items.map((e) => ({
                                        data: {
                                            title: e.data.title,
                                            subtitle: e.data.subtitle,
                                            description: e.data.description,
                                            cover: gP(e.data.cover),
                                            coverPlaceholder: e.data.coverPlaceholder,
                                            coverMask: e.data.coverMask,
                                            coverBackground: e.data.coverBackground,
                                        },
                                    }));
                                    return (0, _.wg)({ type: e.type, data: { savedChoiceKey: e.data.savedChoiceKey, items: t } });
                                })(e.content)),
                                    (K = null == (g = e.content) || null == (d = g.data) ? void 0 : d.savedChoiceKey));
                                break;
                            case gC.x.COLLAGE:
                                ((S = ((e) => {
                                    let {
                                            data: { items: t },
                                            type: a,
                                        } = e,
                                        i = t.map((e) => ({
                                            contentBackground: { uri: e.contentBackground.uri },
                                            bottomBlock: {
                                                type: e.bottomBlock.type,
                                                data: {
                                                    items: e.bottomBlock.data.items.map((e) => {
                                                        let { type: t, data: a } = e;
                                                        return { type: t, data: { key: a.key, title: a.title, subtitle: a.subtitle } };
                                                    }),
                                                },
                                            },
                                            topBlock: {
                                                type: e.topBlock.type,
                                                data: {
                                                    background: { uri: e.topBlock.data.background.uri },
                                                    items: e.topBlock.data.items.map((e) => {
                                                        let { type: t, data: a } = e;
                                                        return {
                                                            type: t,
                                                            data: {
                                                                key: a.key,
                                                                uri: a.uri,
                                                                rectangle: {
                                                                    x: a.rectangle.x,
                                                                    y: a.rectangle.y,
                                                                    z: a.rectangle.z,
                                                                    width: a.rectangle.width,
                                                                    height: a.rectangle.height,
                                                                },
                                                            },
                                                        };
                                                    }),
                                                },
                                            },
                                        }));
                                    return (0, _.wg)({ type: a, data: { items: i } });
                                })(e.content)),
                                    (I = ''));
                                break;
                            case gC.x.LINEUP:
                                ((S = ((e) => {
                                    let t = e.data.items.map(gO);
                                    return (0, _.wg)({ type: e.type, data: { items: t } });
                                })(e.content)),
                                    (I = ''));
                                break;
                            case gC.x.LUMEN:
                                S = ((e) => {
                                    var t, a, i, r;
                                    return (0, _.wg)({
                                        type: e.type,
                                        data: {
                                            query: e.data.query
                                                ? {
                                                      image: e.data.query.image ? gP(e.data.query.image) : null,
                                                      text: null != (t = e.data.query.text) ? t : null,
                                                      textColor: null != (a = e.data.query.textColor) ? a : null,
                                                  }
                                                : null,
                                            unawakenedLumenImage: e.data.unawakenedLumenImage ? gP(e.data.unawakenedLumenImage) : null,
                                            title: null != (i = e.data.title) ? i : null,
                                            subtitle: null != (r = e.data.subtitle) ? r : null,
                                        },
                                    });
                                })(e.content);
                        }
                    let L = null != (u = null == (r = e.trailer) ? void 0 : r.tracks) ? u : [],
                        T = null != (c = null == (l = e.meta) ? void 0 : l.animationDelay) ? c : gk.fZ;
                    return (0, _.wg)({
                        id: e.id,
                        background: {
                            animationDelay: T,
                            bgImageUrl: null != (m = e.background.bgImageUrl) ? m : '',
                            videoUrl: I,
                            withSound: !!e.background.withSound,
                            firstFrameVideoUrl: null != (y = e.background.firstFrameVideoUrl) ? y : '',
                            lastFrameVideoUrl: null != (p = e.background.lastFrameVideoUrl) ? p : '',
                            withPersonalColor: !!e.background.withPersonalColor,
                            videoLoopEnabled: !!e.background.videoLoopEnabled,
                        },
                        slideColor: null == (n = e.meta) ? void 0 : n.color,
                        button: v,
                        content: S,
                        trailerRawTracks: L,
                        logo: null != (E = null == t ? void 0 : t.logo) ? E : null,
                        promoLogo: null != (b = e.promoLogo) ? b : null,
                        savedChoiceKey: K,
                    });
                },
                gU = _.gK.model('SlideButtonActionData', { title: _.gK.maybeNull(_.gK.string), imageUrl: _.gK.maybeNull(_.gK.string), url: _.gK.maybeNull(_.gK.string) }),
                gB = _.gK.model('SlideButtonAction', { type: _.gK.literal(gR.m.ACTION), data: gU }),
                gV = _.gK.model('SlideButtonLikeState', {
                    title: _.gK.string,
                    buttonColor: _.gK.maybeNull(_.gK.string),
                    textColor: _.gK.maybeNull(_.gK.string),
                    enabled: _.gK.boolean,
                }),
                gF = _.gK.model('SlideButtonLikeData', { entityId: _.gK.string, entityType: _.gK.string, unliked: gV, liked: gV }),
                gx = _.gK.model('SlideButtonLike', { type: _.gK.literal(gR.m.LIKE), data: gF }),
                gj = _.gK.model('SlideButtonSimpleData', {
                    title: _.gK.maybeNull(_.gK.string),
                    buttonColor: _.gK.maybeNull(_.gK.string),
                    textColor: _.gK.maybeNull(_.gK.string),
                }),
                gW = _.gK.model('SlideButtonShare', { type: _.gK.literal(gR.m.SHARE), data: gj }),
                gX = _.gK.model('SlideButtonSimpleData', {
                    title: _.gK.maybeNull(_.gK.string),
                    buttonColor: _.gK.maybeNull(_.gK.string),
                    textColor: _.gK.maybeNull(_.gK.string),
                    url: _.gK.maybeNull(_.gK.string),
                }),
                g$ = _.gK.model('SlideButtonSimple', { type: _.gK.literal(gR.m.SIMPLE), data: gX }),
                gY = _.gK.model('SlideContentCover', { uri: _.gK.maybeNull(_.gK.string), color: _.gK.maybeNull(_.gK.string), videoUrl: _.gK.maybeNull(_.gK.string) }),
                gJ = _.gK.model('SlideContentStat', {
                    value: _.gK.maybeNull(_.gK.number),
                    valueDescription: _.gK.maybeNull(_.gK.string),
                    valueSuffix: _.gK.maybeNull(_.gK.string),
                    footer: _.gK.maybeNull(_.gK.string),
                    align: _.gK.maybeNull(_.gK.string),
                }),
                gq = _.gK.compose(_.gK.model('SlideContentArtistsModelData', { covers: _.gK.array(gY) }), gJ),
                gH = _.gK.model('SlideContentArtistsModel', { type: _.gK.literal(gC.x.ARTISTS), data: _.gK.maybe(gq) }),
                gz = _.gK.model('SlideContentCarouselItemData', {
                    title: _.gK.maybe(_.gK.string),
                    subtitle: _.gK.maybe(_.gK.string),
                    description: _.gK.maybe(_.gK.string),
                    cover: gY,
                    coverMask: _.gK.maybe(_.gK.string),
                    coverBackground: _.gK.maybe(_.gK.string),
                    coverPlaceholder: _.gK.maybe(_.gK.string),
                }),
                gQ = _.gK.model('SlideContentCarouselItem', { data: gz }),
                gZ = _.gK.model('SlideContentCarouselData', { savedChoiceKey: _.gK.maybe(_.gK.string), items: _.gK.array(gQ) }),
                g0 = _.gK.model('SlideContentCarousel', { type: _.gK.literal(gC.x.CAROUSEL), data: _.gK.maybe(gZ) }),
                g1 = _.gK.model('SlideContentItem', {
                    value: _.gK.maybeNull(_.gK.number),
                    title: _.gK.maybeNull(_.gK.string),
                    titleType: _.gK.maybeNull(_.gK.string),
                    subtitle: _.gK.maybeNull(_.gK.string),
                    cover: _.gK.maybeNull(gY),
                    coverType: _.gK.maybeNull(_.gK.string),
                }),
                g3 = _.gK.model('SlideContentChartArtistData', { title: _.gK.maybeNull(_.gK.string), cover: _.gK.maybeNull(gY), items: _.gK.array(g1) }),
                g2 = _.gK.model('SlideContentChartArtist', { type: _.gK.literal(gC.x.CHART_ARTIST), data: _.gK.maybe(g3) }),
                g5 = _.gK.compose(
                    _.gK.model('SlideContentChartFavoritesData', { description: _.gK.maybeNull(_.gK.string), isOrderVisible: _.gK.boolean, items: _.gK.array(g1) }),
                    gJ,
                ),
                g6 = _.gK.model('SlideContentChartFavorites', { type: _.gK.literal(gC.x.CHART_FAVORITES), data: _.gK.maybe(g5) }),
                g8 = _.gK.model('SlideContentChartData', { description: _.gK.maybeNull(_.gK.string), isOrderVisible: _.gK.boolean, items: _.gK.array(g1) }),
                g4 = _.gK.model('SlideContentChart', { type: _.gK.literal(gC.x.CHART), data: _.gK.maybe(g8) }),
                g7 = _.gK.model('SlideContentCollageRectangle', { x: _.gK.number, y: _.gK.number, z: _.gK.number, width: _.gK.number, height: _.gK.number }),
                g9 = _.gK.model('SlideContentCollageBottomBlockItemData', {
                    key: _.gK.maybe(_.gK.string),
                    title: _.gK.maybe(_.gK.string),
                    subtitle: _.gK.maybe(_.gK.string),
                }),
                ue = _.gK.model('SlideContentCollageBottomBlockItem', { type: _.gK.string, data: g9 }),
                ut = _.gK.model('SlideContentCollageBottomBlockData', { items: _.gK.array(ue) }),
                ua = _.gK.model('SlideContentCollageTopBlockItemData', { key: _.gK.maybe(_.gK.string), uri: _.gK.maybe(_.gK.string), rectangle: g7 }),
                ui = _.gK.model('SlideContentCollageTopBlockItem', { type: _.gK.string, data: ua }),
                ur = _.gK.model('SlideContentCollageTopBlockData', {
                    background: _.gK.model('SlideContentCollageTopBlockBackground', { uri: _.gK.maybe(_.gK.string) }),
                    items: _.gK.array(ui),
                }),
                ul = _.gK.model('SlideContentCollageItem', {
                    contentBackground: _.gK.model('SlideContentCollageContentBackground', { uri: _.gK.maybe(_.gK.string) }),
                    bottomBlock: _.gK.model('SlideContentCollageBottomBlock', { type: _.gK.string, data: ut }),
                    topBlock: _.gK.model('SlideContentCollageTopBlock', { type: _.gK.string, data: ur }),
                }),
                un = _.gK.model('SlideContentCollageData', { items: _.gK.array(ul) }),
                us = _.gK.model('SlideContentCollage', { type: _.gK.literal(gC.x.COLLAGE), data: un }),
                uo = _.gK.model('SlideContentLineupItemData', {
                    contentBackground: _.gK.maybe(gY),
                    shareBackground: _.gK.maybe(gY),
                    slideBackground: _.gK.maybe(gY),
                    contentLogo: _.gK.maybe(gY),
                    metaLabel: _.gK.maybe(_.gK.string),
                    metaLabelTextColor: _.gK.maybe(_.gK.string),
                    artists: _.gK.array(_.gK.string),
                    artistTextColor: _.gK.maybe(_.gK.string),
                    contentDescription: _.gK.maybe(_.gK.string),
                    eventTagLabel: _.gK.maybe(_.gK.string),
                    eventTagLabelTextColor: _.gK.maybe(_.gK.string),
                    contentImage: _.gK.maybe(gY),
                    festivalTitle: _.gK.maybe(_.gK.string),
                    festivalTextColor: _.gK.maybe(_.gK.string),
                }),
                ud = _.gK.model('SlideContentLineupItem', { type: _.gK.string, data: uo }),
                ug = _.gK.model('SlideContentLineupData', { items: _.gK.array(ud) }),
                uu = _.gK.model('SlideContentLineup', { type: _.gK.literal(gC.x.LINEUP), data: ug }),
                uc = _.gK.model('SlideContentLumenQuery', { image: _.gK.maybeNull(gY), text: _.gK.maybeNull(_.gK.string), textColor: _.gK.maybeNull(_.gK.string) }),
                um = _.gK.model('SlideContentLumenData', {
                    query: _.gK.maybeNull(uc),
                    unawakenedLumenImage: _.gK.maybeNull(gY),
                    title: _.gK.maybeNull(_.gK.string),
                    subtitle: _.gK.maybeNull(_.gK.string),
                }),
                uy = _.gK.model('SlideContentLumen', { type: _.gK.literal(gC.x.LUMEN), data: um }),
                up = _.gK.model('SlideContentPayCardData', {
                    title: _.gK.maybeNull(_.gK.string),
                    description: _.gK.maybeNull(_.gK.string),
                    artwork: _.gK.maybeNull(_.gK.string),
                }),
                uE = _.gK.model('SlideContentPayCard', { type: _.gK.literal(gC.x.PAY_CARD), data: _.gK.maybe(up) }),
                ub = _.gK.model('SlideContentSingleEntityData', {
                    title: _.gK.maybeNull(_.gK.string),
                    subtitle: _.gK.maybeNull(_.gK.string),
                    description: _.gK.maybeNull(_.gK.string),
                    entityType: _.gK.maybeNull(_.gK.string),
                    cover: gY,
                    coverMask: _.gK.string,
                    coverBackground: _.gK.string,
                    align: _.gK.maybe(_.gK.string),
                    smallRoundCover: _.gK.maybeNull(gY),
                }),
                uv = _.gK.model('SlideContentSingleEntity', { type: _.gK.literal(gC.x.SINGLE_ENTITY), data: _.gK.maybe(ub) }),
                uS = _.gK.model('SlideContentStatsData', {
                    header: _.gK.maybeNull(_.gK.string),
                    footer: _.gK.maybeNull(_.gK.string),
                    align: _.gK.maybeNull(_.gK.string),
                    stats: _.gK.array(gJ),
                }),
                uK = _.gK.model('SlideContentStats', { type: _.gK.literal(gC.x.STATS), data: _.gK.maybe(uS) }),
                uI = _.gK.model('SlideContentTextExtendedData', {
                    title: _.gK.maybeNull(_.gK.string),
                    subtitle: _.gK.maybeNull(_.gK.string),
                    description: _.gK.maybeNull(_.gK.string),
                }),
                uL = _.gK.model('SlideContentTextExtended', { type: _.gK.literal(gC.x.TEXT_EXTENDED), data: _.gK.maybe(uI) }),
                uT = _.gK.compose(
                    _.gK.model('SlideContentTextFactDataModel', {
                        coverType: _.gK.maybeNull(_.gK.string),
                        coverTitle: _.gK.maybeNull(_.gK.string),
                        smallCover: _.gK.maybeNull(_.gK.string),
                    }),
                    gJ,
                ),
                uh = _.gK.model('SlideContentTextFact', { type: _.gK.literal(gC.x.TEXT_FACT), data: _.gK.maybe(uT) }),
                uN = _.gK.model('SlideContentTextData', {
                    title: _.gK.maybeNull(_.gK.string),
                    subtitle: _.gK.maybeNull(_.gK.string),
                    align: _.gK.maybeNull(_.gK.string),
                    titleSize: _.gK.maybeNull(_.gK.string),
                }),
                uA = _.gK.model('SlideContentTextDisclaimer', { text: _.gK.maybeNull(_.gK.string), textColor: _.gK.maybeNull(_.gK.string) }),
                uf = _.gK.model('SlideContentText', { type: _.gK.literal(gC.x.TEXT), data: _.gK.maybe(uN), disclaimer: _.gK.maybe(uA) }),
                uC = _.gK.model('SlideContentThenNowComparisonItemTrack', {
                    title: _.gK.maybeNull(_.gK.string),
                    coverUri: _.gK.maybeNull(_.gK.string),
                    artistsName: _.gK.maybeNull(_.gK.string),
                }),
                uR = _.gK.model('SlideContentThenNowComparisonItem', {
                    label: _.gK.maybeNull(_.gK.string),
                    description: _.gK.maybeNull(_.gK.string),
                    track: _.gK.maybeNull(uC),
                }),
                uk = _.gK.model('SlideContentThenNowComparisonData', {
                    title: _.gK.maybeNull(_.gK.string),
                    subtitle: _.gK.maybeNull(_.gK.string),
                    firstItem: _.gK.maybeNull(uR),
                    secondItem: _.gK.maybeNull(uR),
                }),
                uP = _.gK.model('SlideContentThenNowComparison', { type: _.gK.literal(gC.x.THEN_NOW_COMPARISON), data: _.gK.maybe(uk) }),
                u_ = _.gK.model('SlideBackground', {
                    animationDelay: _.gK.number,
                    bgImageUrl: _.gK.string,
                    videoUrl: _.gK.string,
                    withSound: _.gK.boolean,
                    firstFrameVideoUrl: _.gK.string,
                    lastFrameVideoUrl: _.gK.string,
                    withPersonalColor: _.gK.boolean,
                    videoLoopEnabled: _.gK.boolean,
                }),
                uD = _.gK
                    .model('Slide', {
                        id: _.gK.string,
                        background: u_,
                        button: _.gK.maybe(_.gK.union(gB, gW, g$, gx)),
                        slideColor: _.gK.maybeNull(_.gK.string),
                        content: _.gK.maybe(_.gK.union(g4, g6, uv, uf, uK, uh, g2, gH, uL, uP, uE, g0, us, uu, uy)),
                        trailerRawTracks: _.gK.maybeNull(_.gK.frozen()),
                        logo: _.gK.maybeNull(_.gK.string),
                        promoLogo: _.gK.maybeNull(_.gK.string),
                        savedChoiceKey: _.gK.maybe(_.gK.string),
                        carouselIndex: _.gK.maybe(_.gK.number),
                    })
                    .views((e) => ({
                        get hasTrailer() {
                            var t;
                            return !!(null == (t = e.trailerRawTracks) ? void 0 : t.length);
                        },
                        get entitiesData() {
                            if (!e.trailerRawTracks) return [];
                            return e.trailerRawTracks.map((e) => ({ type: aJ.R.SmartPreview, meta: e }));
                        },
                    }))
                    .actions((e) => ({
                        setCarouselIndex(t) {
                            e.carouselIndex = t;
                        },
                    }));
            var uO = a(50355);
            let uw = _.gK.model('SavedChoiceData', {
                    text: _.gK.maybe(_.gK.string),
                    uri: _.gK.maybe(_.gK.string),
                    coverMask: _.gK.maybe(_.gK.string),
                    coverBackground: _.gK.maybe(_.gK.string),
                }),
                uG = _.gK.model('SavedChoice', { index: _.gK.number, isSaved: _.gK.boolean, data: uw }),
                uM = _.gK
                    .model('Slides', {
                        userSlidesLoadingState: _.gK.enumeration(Object.values(F.G)),
                        artistSlidesLoadingState: _.gK.enumeration(Object.values(F.G)),
                        podcastSlidesLoadingState: _.gK.enumeration(Object.values(F.G)),
                        specialSlidesLoadingState: _.gK.enumeration(Object.values(F.G)),
                        kidsSlidesLoadingState: _.gK.enumeration(Object.values(F.G)),
                        consumer: _.gK.maybe(_.gK.enumeration(Object.values(uO.z))),
                        artistId: _.gK.maybe(_.gK.string),
                        podcastId: _.gK.maybe(_.gK.number),
                        campaignId: _.gK.maybe(_.gK.string),
                        activeSlide: _.gK.optional(_.gK.number, 0),
                        userItems: _.gK.array(uD),
                        artistItems: _.gK.array(uD),
                        podcastItems: _.gK.array(uD),
                        specialItems: _.gK.array(uD),
                        kidsItems: _.gK.array(uD),
                        isMuted: _.gK.boolean,
                        savedChoices: _.gK.map(uG),
                        mainObjectId: _.gK.optional(_.gK.string, ''),
                    })
                    .views((e) => ({
                        get isLoaded() {
                            return (
                                e.userSlidesLoadingState === F.G.RESOLVE ||
                                e.artistSlidesLoadingState === F.G.RESOLVE ||
                                e.podcastSlidesLoadingState === F.G.RESOLVE ||
                                e.specialSlidesLoadingState === F.G.RESOLVE ||
                                e.kidsSlidesLoadingState === F.G.RESOLVE
                            );
                        },
                        get savedChoice() {
                            var t, a;
                            if (e.consumer !== uO.z.USER) return;
                            return e.savedChoices.get(null != (a = null == (t = e.userItems[e.activeSlide]) ? void 0 : t.savedChoiceKey) ? a : '');
                        },
                    }))
                    .actions((e) => {
                        let t = {
                            setIsMuted: (t) => {
                                e.isMuted = t;
                            },
                            toggleMute: () => {
                                e.isMuted = !e.isMuted;
                            },
                            getUserSlides: (0, _.L3)(function* () {
                                let { slidesResource: a, modelActionsLogger: i } = (0, _._$)(e);
                                if (e.userSlidesLoadingState !== F.G.PENDING)
                                    try {
                                        e.userSlidesLoadingState = F.G.PENDING;
                                        let i = yield a.getUserSlides();
                                        (e.userSlidesLoadingState !== F.G.IDLE && (e.userSlidesLoadingState = F.G.RESOLVE),
                                            i.slides && ((e.consumer = uO.z.USER), (e.mainObjectId = e.consumer), (e.userItems = (0, _.wg)(t.processSlidesResponse(i)))),
                                            (e.userSlidesLoadingState = F.G.RESOLVE));
                                    } catch (t) {
                                        (i.error(t), e.userSlidesLoadingState !== F.G.IDLE && ((e.userSlidesLoadingState = F.G.REJECT), (e.userItems = (0, _.wg)([]))));
                                    }
                            }),
                            getArtistSlides: (0, _.L3)(function* (a) {
                                let { slidesResource: i, modelActionsLogger: r } = (0, _._$)(e);
                                if (e.artistSlidesLoadingState !== F.G.PENDING) {
                                    e.artistId = a.artistId;
                                    try {
                                        e.artistSlidesLoadingState = F.G.PENDING;
                                        let r = yield i.getArtistSlides(a);
                                        (e.artistSlidesLoadingState !== F.G.IDLE && (e.artistSlidesLoadingState = F.G.RESOLVE),
                                            r.slides &&
                                                ((e.consumer = uO.z.ARTIST),
                                                (e.mainObjectId = ''.concat(e.consumer, ':').concat(e.artistId)),
                                                (e.artistItems = (0, _.wg)(t.processSlidesResponse(r)))),
                                            (e.artistSlidesLoadingState = F.G.RESOLVE));
                                    } catch (t) {
                                        (r.error(t),
                                            e.artistSlidesLoadingState !== F.G.IDLE && ((e.artistSlidesLoadingState = F.G.REJECT), (e.artistItems = (0, _.wg)([]))));
                                    }
                                }
                            }),
                            getPodcastSlides: (0, _.L3)(function* (a) {
                                let { slidesResource: i, modelActionsLogger: r } = (0, _._$)(e);
                                if (e.podcastSlidesLoadingState !== F.G.PENDING) {
                                    e.podcastId = a.podcastId;
                                    try {
                                        e.podcastSlidesLoadingState = F.G.PENDING;
                                        let r = yield i.getPodcastSlides(a);
                                        (e.podcastSlidesLoadingState !== F.G.IDLE && (e.podcastSlidesLoadingState = F.G.RESOLVE),
                                            r.slides &&
                                                ((e.consumer = uO.z.PODCAST),
                                                (e.mainObjectId = ''.concat(e.consumer, ':').concat(e.podcastId)),
                                                (e.podcastItems = (0, _.wg)(t.processSlidesResponse(r)))),
                                            (e.podcastSlidesLoadingState = F.G.RESOLVE));
                                    } catch (t) {
                                        (r.error(t),
                                            e.podcastSlidesLoadingState !== F.G.IDLE && ((e.podcastSlidesLoadingState = F.G.REJECT), (e.podcastItems = (0, _.wg)([]))));
                                    }
                                }
                            }),
                            getSpecialSlides: (0, _.L3)(function* (a) {
                                let { slidesResource: i, modelActionsLogger: r } = (0, _._$)(e);
                                if (e.specialSlidesLoadingState !== F.G.PENDING) {
                                    e.campaignId = a.campaignId;
                                    try {
                                        e.specialSlidesLoadingState = F.G.PENDING;
                                        let r = yield i.getSpecialSlides(a);
                                        (e.specialSlidesLoadingState !== F.G.IDLE && (e.specialSlidesLoadingState = F.G.RESOLVE),
                                            r.slides &&
                                                ((e.consumer = uO.z.SPECIAL),
                                                (e.mainObjectId = ''.concat(e.consumer, ':').concat(e.campaignId)),
                                                (e.specialItems = (0, _.wg)(t.processSlidesResponse(r)))),
                                            (e.specialSlidesLoadingState = F.G.RESOLVE));
                                    } catch (t) {
                                        (r.error(t),
                                            e.specialSlidesLoadingState !== F.G.IDLE && ((e.specialSlidesLoadingState = F.G.REJECT), (e.specialItems = (0, _.wg)([]))));
                                    }
                                }
                            }),
                            getKidsSlides: (0, _.L3)(function* () {
                                let { slidesResource: a, modelActionsLogger: i } = (0, _._$)(e);
                                if (e.kidsSlidesLoadingState !== F.G.PENDING)
                                    try {
                                        e.kidsSlidesLoadingState = F.G.PENDING;
                                        let i = yield a.getKidsSlides();
                                        (e.kidsSlidesLoadingState !== F.G.IDLE && (e.kidsSlidesLoadingState = F.G.RESOLVE),
                                            i.slides && ((e.consumer = uO.z.KIDS), (e.mainObjectId = e.consumer), (e.kidsItems = (0, _.wg)(t.processSlidesResponse(i)))),
                                            (e.kidsSlidesLoadingState = F.G.RESOLVE));
                                    } catch (t) {
                                        (i.error(t), e.kidsSlidesLoadingState !== F.G.IDLE && ((e.kidsSlidesLoadingState = F.G.REJECT), (e.kidsItems = (0, _.wg)([]))));
                                    }
                            }),
                            setActiveSlide(t) {
                                e.activeSlide = t;
                            },
                            resetUser() {
                                ((e.userSlidesLoadingState = F.G.IDLE), (e.userItems = (0, _.wg)([])));
                            },
                            resetArtist() {
                                ((e.artistSlidesLoadingState = F.G.IDLE), (e.artistItems = (0, _.wg)([])));
                            },
                            resetPodcast() {
                                ((e.podcastSlidesLoadingState = F.G.IDLE), (e.podcastItems = (0, _.wg)([])));
                            },
                            resetKids() {
                                ((e.kidsSlidesLoadingState = F.G.IDLE), (e.kidsItems = (0, _.wg)([])));
                            },
                            resetSpecial() {
                                ((e.specialSlidesLoadingState = F.G.IDLE), (e.specialItems = (0, _.wg)([])));
                            },
                            saveChoice(t, a) {
                                e.savedChoices.set(t, a);
                            },
                            processSlidesResponse(e) {
                                let a = [];
                                for (let d of e.slides) {
                                    var i, r, l, n, s, o;
                                    let g = gM(d, { logo: e.logo });
                                    if ((a.push(g), g.savedChoiceKey && (null == (i = g.content) ? void 0 : i.type) === gC.x.CAROUSEL)) {
                                        let e = null == (n = g.content) || null == (l = n.data) || null == (r = l.items[0]) ? void 0 : r.data;
                                        if (!e) continue;
                                        t.saveChoice(g.savedChoiceKey, {
                                            index: 0,
                                            isSaved: !1,
                                            data: {
                                                coverBackground: e.coverBackground,
                                                coverMask: e.coverMask,
                                                text: e.title,
                                                uri: null != (o = null == (s = e.cover) ? void 0 : s.uri) ? o : void 0,
                                            },
                                        });
                                    }
                                }
                                return a;
                            },
                        };
                        return t;
                    });
            !(function (e) {
                ((e.ALICE_PRO = 'alice-pro'), (e.KIDS = 'kids'), (e.BOOKMATE = 'bookmate'), (e.LUMEN = 'lumen'));
            })(S || (S = {}));
            var uU = (function (e) {
                    return ((e[(e.PLUS = 1)] = 'PLUS'), (e[(e.NON_PLUS = 0)] = 'NON_PLUS'), (e[(e.UNAUTHORIZED = 2)] = 'UNAUTHORIZED'), e);
                })({}),
                uB = a(99890),
                uV = a(60385);
            let uF = _.gK.model({
                    uid: _.gK.maybe(_.gK.number),
                    hasPlus: _.gK.maybe(_.gK.boolean),
                    login: _.gK.maybe(_.gK.string),
                    avatarId: _.gK.maybe(_.gK.string),
                    isChild: _.gK.maybe(_.gK.boolean),
                    publicId: _.gK.maybe(_.gK.string),
                    publicName: _.gK.maybe(_.gK.string),
                    userSessionRegionIso: _.gK.maybe(_.gK.string),
                    geoRegionIso: _.gK.maybe(_.gK.string),
                    serviceAvailable: _.gK.maybe(_.gK.boolean),
                    options: _.gK.maybe(_.gK.array(_.gK.string)),
                }),
                ux = _.gK.compose(_.gK.model('Account', { data: uF }), ee.X),
                uj = _.gK.compose(
                    _.gK.model('Settings', {
                        showWizard: _.gK.optional(_.gK.boolean, !0),
                        userCollectionHue: _.gK.maybe(_.gK.number),
                        isChildModeEnabled: _.gK.optional(_.gK.boolean, !1),
                        userMusicVisibility: _.gK.optional(_.gK.string, uV.L.PUBLIC),
                        aiContentReductionEnabled: _.gK.optional(_.gK.boolean, !1),
                    }),
                    ee.X,
                ),
                uW = _.gK
                    .model('User', { account: ux, settings: uj, userCollectionHue: _.gK.maybe(_.gK.number) })
                    .views((e) => ({
                        get isAuthorized() {
                            return !!e.account.data.uid;
                        },
                        get hasPlus() {
                            return !!e.account.data.hasPlus;
                        },
                        get isChild() {
                            return !!e.account.data.isChild;
                        },
                        get puid() {
                            return e.account.data.uid;
                        },
                        get collectionHue() {
                            return e.userCollectionHue || e.settings.userCollectionHue;
                        },
                        get isServiceAvailable() {
                            var t;
                            return null == (t = e.account.data.serviceAvailable) || t;
                        },
                        get isAliceProAvailable() {
                            var a;
                            return null == (a = e.account.data.options) ? void 0 : a.includes(S.ALICE_PRO);
                        },
                        get isLumenAvailable() {
                            var i;
                            return null == (i = e.account.data.options) ? void 0 : i.includes(S.LUMEN);
                        },
                        get advertRole() {
                            if (!this.isAuthorized) return uU.UNAUTHORIZED;
                            if (this.hasPlus) return uU.PLUS;
                            return uU.NON_PLUS;
                        },
                    }))
                    .actions((e) => {
                        let t = (t) => {
                            let { wizard: a } = (0, D.M)(e);
                            ((e.settings = ((e) => {
                                var t, a;
                                return (0, _.wg)({
                                    loadingState: F.G.RESOLVE,
                                    showWizard: !e.wizardIsPassed,
                                    userCollectionHue: e.userCollectionHue,
                                    isChildModeEnabled: !!e.childModEnabled,
                                    userMusicVisibility: null != (a = null == (t = e.userMusicVisibility) ? void 0 : t.toLowerCase()) ? a : uV.L.PUBLIC,
                                    aiContentReductionEnabled: !!e.aiContentReductionEnabled,
                                });
                            })(t)),
                                a.isAvailable || (e.settings.showWizard = !1));
                        };
                        return {
                            getAbout: (0, _.L3)(function* (t) {
                                let { accountResource: a, modelActionsLogger: i, containerStorage: r } = (0, _._$)(e);
                                if (!e.account.isLoading)
                                    try {
                                        e.account.loadingState = F.G.PENDING;
                                        let i = t;
                                        (i || (i = yield a.about()),
                                            r.set(ni.c.YmUid, i.uid),
                                            (e.account.data = ((e) => {
                                                let t = e.options ? e.options.filter((e) => 'string' == typeof e) : void 0;
                                                return (0, _.wg)({
                                                    uid: e.uid,
                                                    login: e.login,
                                                    avatarId: e.avatarId,
                                                    hasPlus: e.hasPlus,
                                                    publicId: e.publicId,
                                                    publicName: e.publicName,
                                                    isChild: e.isChild,
                                                    userSessionRegionIso: e.userSessionRegionIso,
                                                    geoRegionIso: e.geoRegionIso,
                                                    serviceAvailable: e.serviceAvailable,
                                                    options: t,
                                                });
                                            })(i)),
                                            (e.account.loadingState = F.G.RESOLVE),
                                            (0, uB.uV)({ stage: 'account-about', result: (0, uB.UC)(i) }));
                                    } catch (t) {
                                        ((0, uB.uV)({ stage: 'account-about', result: (0, uB.dM)(t) }), i.error(t), (e.account.loadingState = F.G.REJECT));
                                    }
                            }),
                            getSettings: (0, _.L3)(function* () {
                                let { accountResource: a, modelActionsLogger: i } = (0, _._$)(e);
                                if (e.settings.loadingState !== F.G.PENDING)
                                    try {
                                        e.settings.loadingState = F.G.PENDING;
                                        let i = yield a.settings();
                                        t(i);
                                    } catch (t) {
                                        (i.error(t), (e.settings.showWizard = !1), (e.settings.loadingState = F.G.REJECT));
                                    }
                            }),
                            setSettings: (0, _.L3)(function* (a) {
                                let { isChildModeEnabled: i, userMusicVisibility: r, aiContentReductionEnabled: l } = a,
                                    { accountResource: n, modelActionsLogger: s } = (0, _._$)(e),
                                    o = e.settings.aiContentReductionEnabled;
                                try {
                                    let a = {};
                                    ('boolean' == typeof i && ((a.childModEnabled = i), (e.settings.isChildModeEnabled = i)),
                                        r && ((a.userMusicVisibility = r), (e.settings.userMusicVisibility = r)),
                                        'boolean' == typeof l && ((a.aiContentReductionEnabled = l), (e.settings.aiContentReductionEnabled = l)));
                                    let s = yield n.settings(a);
                                    if ((t(s), ('boolean' == typeof i && s.childModEnabled !== i) || ('boolean' == typeof l && s.aiContentReductionEnabled !== l)))
                                        return ir.F.ERROR;
                                    return ir.F.OK;
                                } catch (t) {
                                    return ('boolean' == typeof l && (e.settings.aiContentReductionEnabled = o), s.error(t), ir.F.ERROR);
                                }
                            }),
                            setUnauthorized: () => {
                                e.account.loadingState = F.G.RESOLVE;
                            },
                            setAboutRejected: () => {
                                e.account.loadingState = F.G.REJECT;
                            },
                            setUserCollectionHue: (t) => {
                                e.userCollectionHue = t;
                            },
                        };
                    }),
                uX = _.gK.model('EntityRef', { entityType: _.gK.enumeration(Object.values(aN.n)), entityId: _.gK.union(_.gK.string, _.gK.number) }),
                u$ = _.gK
                    .compose(
                        _.gK.model('DisclaimerModalState', {
                            currentEntityRef: _.gK.maybeNull(uX),
                            type: _.gK.maybeNull(_.gK.enumeration(Object.values(aN.Z))),
                            id: _.gK.maybeNull(_.gK.string),
                            isUnsafeDisclaimerConfirmed: _.gK.optional(_.gK.boolean, !1),
                            shouldHistoryBack: _.gK.optional(_.gK.boolean, !1),
                            shouldCloseModalOnOutsidePress: _.gK.optional(_.gK.boolean, !0),
                            shouldCloseModalOnEscape: _.gK.optional(_.gK.boolean, !0),
                            entityKey: _.gK.maybeNull(_.gK.string),
                            modalData: _.gK.maybeNull(_.gK.frozen()),
                        }),
                        ee.X,
                    )
                    .volatile(() => ({ onDisclaimerConfirmHandler: null, onDisclaimerRejectHandler: null }))
                    .views((e) => ({
                        get entityType() {
                            var t, a;
                            return null != (a = null == (t = e.currentEntityRef) ? void 0 : t.entityType) ? a : null;
                        },
                        get entityId() {
                            var i, r;
                            return null != (r = null == (i = e.currentEntityRef) ? void 0 : i.entityId) ? r : null;
                        },
                        get isNeededToLoad() {
                            return e.loadingState === F.G.IDLE;
                        },
                    }))
                    .actions((e) => ({
                        setCurrentEntityRef(t, a) {
                            e.currentEntityRef = { entityType: t, entityId: a };
                        },
                        setId(t) {
                            e.id = t;
                        },
                        setType(t) {
                            e.type = t;
                        },
                        setConfirmUnsafeDisclaimer(t) {
                            e.isUnsafeDisclaimerConfirmed = t;
                        },
                        setShouldHistoryBack(t) {
                            e.shouldHistoryBack = t;
                        },
                        setShouldCloseModalOnOutsidePress(t) {
                            e.shouldCloseModalOnOutsidePress = t;
                        },
                        setShouldCloseModalOnEscape(t) {
                            e.shouldCloseModalOnEscape = t;
                        },
                        setEntityKey(t) {
                            e.entityKey = t;
                        },
                        setDisclaimerConfirmHandler(t) {
                            e.onDisclaimerConfirmHandler = t;
                        },
                        setDisclaimerRejectHandler(t) {
                            e.onDisclaimerRejectHandler = t;
                        },
                        setModalData(t) {
                            e.modalData = t;
                        },
                        reset() {
                            ((e.currentEntityRef = null),
                                (e.id = null),
                                (e.type = null),
                                (e.isUnsafeDisclaimerConfirmed = !1),
                                (e.shouldHistoryBack = !1),
                                (e.shouldCloseModalOnOutsidePress = !0),
                                (e.shouldCloseModalOnEscape = !0),
                                (e.loadingState = F.G.IDLE),
                                (e.entityKey = null),
                                (e.modalData = null),
                                (e.onDisclaimerConfirmHandler = null),
                                (e.onDisclaimerRejectHandler = null));
                        },
                    })),
                uY = ee.X.named('DisclaimersDictionary').actions((e) => {
                    let t,
                        a,
                        i,
                        { disclaimerDictionary: r, modelActionsLogger: l } = (0, _._$)(e),
                        n = {
                            syncLoadingState() {
                                if (r.isLoading.value) {
                                    e.loadingState = F.G.PENDING;
                                    return;
                                }
                                if (r.error.value) {
                                    e.loadingState = F.G.REJECT;
                                    return;
                                }
                                if (r.items.value) {
                                    e.loadingState = F.G.RESOLVE;
                                    return;
                                }
                                e.loadingState = F.G.IDLE;
                            },
                            afterCreate() {
                                ((t = r.items.onChange(() => {
                                    n.syncLoadingState();
                                })),
                                    (a = r.isLoading.onChange(() => {
                                        n.syncLoadingState();
                                    })),
                                    (i = r.error.onChange(() => {
                                        n.syncLoadingState();
                                    })));
                            },
                            beforeDestroy() {
                                (null == t || t(), null == a || a(), null == i || i());
                            },
                            getDisclaimers: (0, _.L3)(function* () {
                                try {
                                    yield r.load();
                                } catch (e) {
                                    l.error(e);
                                }
                            }),
                            getDisclaimerById: (0, _.L3)(function* (e) {
                                try {
                                    return yield r.getById(e);
                                } catch (e) {
                                    l.error(e);
                                    return;
                                }
                            }),
                        };
                    return n;
                });
            var uJ = a(36219),
                uq = a(3629);
            let uH = (e, t) => (t ? e.get(ni.c.OverwrittenExperiments) : null),
                uz = new Set(Object.values(O.z)),
                uQ = _.gK
                    .model('Experiments', {
                        loadingState: _.gK.enumeration(Object.values(F.G)),
                        experiments: _.gK.optional(_.gK.frozen(), {}),
                        overwrittenExperiments: _.gK.optional(_.gK.frozen(), {}),
                    })
                    .views((e) => {
                        let t = {
                            getOverwrittenExperiments() {
                                let { containerStorage: t, clientSafeConfig: a } = (0, _._$)(e);
                                return uH(t, a.get(uq.yc));
                            },
                            getExperiment(a) {
                                var i;
                                let r = e.experiments[a],
                                    l = t.getOverwrittenExperiments();
                                return l && null != (i = l[a]) ? i : r;
                            },
                            isExperimentActive(e) {
                                var a, i;
                                let r = t.getExperiment(e),
                                    l = null != (i = null == r ? void 0 : r.group) ? i : null == r || null == (a = r.value) ? void 0 : a.title;
                                return !!l && 'default' !== l;
                            },
                            isExperimentEnabled(e) {
                                let a = t.getExperiment(e);
                                return (0, uJ.A)(null == a ? void 0 : a.value.enabled)
                                    ? null == a
                                        ? void 0
                                        : a.value.enabled
                                    : t.checkExperiment(e, null == a ? void 0 : a.value.value);
                            },
                            getEnabledFlags() {
                                let a = [];
                                for (let i of new Set([...Object.keys(e.overwrittenExperiments), ...Object.keys(e.experiments)]).keys())
                                    t.isExperimentEnabled(i) && a.push(i);
                                return a;
                            },
                            checkExperiment(t, a) {
                                let i = e.experiments,
                                    { containerStorage: r, clientSafeConfig: l } = (0, _._$)(e);
                                return ((e, t) => {
                                    let { containerStorage: a, experiments: i } = e;
                                    return (e, r) => {
                                        var l;
                                        let n = null == i ? void 0 : i[e],
                                            s = uH(a, t);
                                        if (!s) return (null == n ? void 0 : n.group) === r;
                                        let o = null == (l = s[e]) ? void 0 : l.group;
                                        return o ? o === r : (null == n ? void 0 : n.group) === r;
                                    };
                                })({ containerStorage: r, experiments: i }, l.get(uq.yc))(t, a);
                            },
                            isRejected: () => e.loadingState === F.G.REJECT,
                        };
                        return t;
                    })
                    .actions((e) => {
                        let t = () => {
                            var t;
                            let a = null != (t = e.getOverwrittenExperiments()) ? t : {};
                            e.overwrittenExperiments = { ...e.overwrittenExperiments, ...a };
                        };
                        return {
                            getData: (0, _.L3)(function* (a) {
                                let { accountResource: i, modelActionsLogger: r } = (0, _._$)(e);
                                if (e.loadingState !== F.G.PENDING)
                                    try {
                                        let t;
                                        e.loadingState = F.G.PENDING;
                                        let r = a;
                                        (r || (r = yield i.experimentsDetails()),
                                            (t = r),
                                            (e.experiments = Object.fromEntries(
                                                Object.entries(t).filter((e) => {
                                                    let [t] = e;
                                                    return uz.has(t);
                                                }),
                                            )),
                                            (e.loadingState = F.G.RESOLVE));
                                    } catch (t) {
                                        (r.error(t), (e.loadingState = F.G.REJECT));
                                    } finally {
                                        t();
                                    }
                            }),
                            setRejected() {
                                ((e.loadingState = F.G.REJECT), t());
                            },
                            updateOverwrittenExperiments(t, a) {
                                let { clientSafeConfig: i } = (0, _._$)(e);
                                i.get(uq.yc) && (e.overwrittenExperiments = { ...e.overwrittenExperiments, [t]: a });
                            },
                            deleteOverwrittenExperiments(t) {
                                let { clientSafeConfig: a } = (0, _._$)(e);
                                if (!a.get(uq.yc)) return;
                                let { [t]: i, ...r } = e.overwrittenExperiments;
                                e.overwrittenExperiments = r;
                            },
                        };
                    });
            var uZ = a(79390);
            let u0 = (e) => (e ? { revision: e } : { allValuesRequired: !0 });
            var u1 = (function (e) {
                    return (
                        (e.LIKED_ALBUMS = 'LIKED_ALBUMS'),
                        (e.LIKED_ARTISTS = 'LIKED_ARTISTS'),
                        (e.LIKED_TRACKS = 'LIKED_TRACKS'),
                        (e.LIKED_PLAYLISTS = 'LIKED_PLAYLISTS'),
                        (e.LIKED_CLIPS = 'LIKED_CLIPS'),
                        (e.LIKED_VIBES = 'LIKED_VIBES'),
                        e
                    );
                })({}),
                u3 = a(4765),
                u2 = a(6648);
            let u5 = [u1.LIKED_ALBUMS, u1.LIKED_ARTISTS, u1.LIKED_PLAYLISTS, u1.LIKED_TRACKS, u1.LIKED_CLIPS, u1.LIKED_VIBES],
                u6 = _.gK.optional(_.gK.map(_.gK.enumeration(Object.values(u3.O))), {}),
                u8 = _.gK.model('LibraryRecord', { revision: _.gK.maybeNull(_.gK.number), items: u6 }),
                u4 = _.gK.model('LibraryVibe', { seeds: _.gK.array(_.gK.string), timestamp: _.gK.string }),
                u7 = _.gK.model('LibraryVibesRecord', { revision: _.gK.maybeNull(_.gK.number), items: _.gK.optional(_.gK.map(u4), {}) }),
                u9 = _.gK
                    .compose(_.gK.model('Library', { tracks: u8, albums: u8, artists: u8, playlists: u8, clips: u8, vibes: _.gK.optional(u7, {}) }), ee.X)
                    .views((e) => ({
                        isTrackLiked: (t) => e.tracks.items.get(String(t)) === u3.O.LIKED,
                        isTrackDisliked: (t) => e.tracks.items.get(String(t)) === u3.O.DISLIKED,
                        isArtistLiked: (t) => e.artists.items.get(String(t)) === u3.O.LIKED,
                        isArtistDisliked: (t) => e.artists.items.get(String(t)) === u3.O.DISLIKED,
                        isAlbumLiked: (t) => e.albums.items.get(String(t)) === u3.O.LIKED,
                        isPlaylistLiked: (t) => e.playlists.items.get(String(t)) === u3.O.LIKED,
                        isClipLiked: (t) => e.clips.items.get(String(t)) === u3.O.LIKED,
                        isVibeLiked: (t) => e.vibes.items.has((0, u2.q)(t).join()),
                        get likedVibes() {
                            return Array.from(e.vibes.items.values()).sort((e, t) => Date.parse(t.timestamp) - Date.parse(e.timestamp));
                        },
                    }))
                    .actions((e) => {
                        let t = !1,
                            a = {
                                getData: (0, _.L3)(function* () {
                                    let i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u5,
                                        { modelActionsLogger: r, collectionResource: l } = (0, _._$)(e);
                                    if (e.loadingState !== F.G.PENDING)
                                        try {
                                            e.loadingState = F.G.PENDING;
                                            let t = {};
                                            (i.includes(u1.LIKED_ALBUMS) && (t.likedAlbums = u0(e.albums.revision)),
                                                i.includes(u1.LIKED_ARTISTS) && (t.likedArtists = u0(e.artists.revision)),
                                                i.includes(u1.LIKED_TRACKS) && (t.likedTracks = u0(e.tracks.revision)),
                                                i.includes(u1.LIKED_CLIPS) && (t.likedClips = u0(e.clips.revision)),
                                                i.includes(u1.LIKED_VIBES) && (t.likedWaves = u0(e.vibes.revision)),
                                                i.includes(u1.LIKED_PLAYLISTS) && (t.likedPlaylists = {}));
                                            let r = yield l.sync(t);
                                            (a.setAlbums(r.values.likedAlbums),
                                                a.setArtists(r.values.likedArtists),
                                                a.setPlaylists(r.values.likedPlaylists),
                                                a.setTracks(r.values.likedTracks),
                                                a.setClips(r.values.likedClips),
                                                a.setVibes(r.values.likedWaves),
                                                (e.loadingState = F.G.RESOLVE));
                                        } catch (t) {
                                            (r.error(t), (e.loadingState = F.G.REJECT));
                                        } finally {
                                            if (t) {
                                                let r = e.loadingState === F.G.REJECT && i.some((e) => e !== u1.LIKED_VIBES);
                                                ((t = !1), yield a.getData([u1.LIKED_VIBES]), r && (e.loadingState = F.G.REJECT));
                                            }
                                        }
                                }),
                                setArtists: (t) => {
                                    (null == t ? void 0 : t.values) &&
                                        e.artists.revision !== t.info.revision &&
                                        (a.clearArtists(),
                                        (e.artists.revision = t.info.revision),
                                        t.values.liked.map((t) => {
                                            e.artists.items.set(t.artistId.toString(), u3.O.LIKED);
                                        }),
                                        t.values.disliked.map((t) => {
                                            e.artists.items.set(t.artistId.toString(), u3.O.DISLIKED);
                                        }));
                                },
                                setAlbums: (t) => {
                                    (null == t ? void 0 : t.values) &&
                                        e.albums.revision !== t.info.revision &&
                                        (a.clearAlbums(),
                                        (e.albums.revision = t.info.revision),
                                        t.values.liked.map((t) => {
                                            e.albums.items.set(t.albumId.toString(), u3.O.LIKED);
                                        }));
                                },
                                setPlaylists: (t) => {
                                    (null == t ? void 0 : t.values) &&
                                        (a.clearPlaylists(),
                                        t.values.liked.map((t) => {
                                            e.playlists.items.set(''.concat(t.compositeData.uid, ':').concat(t.compositeData.kind), u3.O.LIKED);
                                        }));
                                },
                                setTracks: (t) => {
                                    (null == t ? void 0 : t.values) &&
                                        e.tracks.revision !== t.info.revision &&
                                        (a.clearTracks(),
                                        (e.tracks.revision = t.info.revision),
                                        t.values.liked.map((t) => {
                                            e.tracks.items.set(t.trackId, u3.O.LIKED);
                                        }),
                                        t.values.disliked.map((t) => {
                                            e.tracks.items.set(t.trackId, u3.O.DISLIKED);
                                        }));
                                },
                                setClips: (t) => {
                                    (null == t ? void 0 : t.values) &&
                                        e.clips.revision !== t.info.revision &&
                                        (a.clearClips(),
                                        (e.clips.revision = t.info.revision),
                                        t.values.liked.map((t) => {
                                            e.clips.items.set(t.clipId.toString(), u3.O.LIKED);
                                        }));
                                },
                                setVibes: (t) => {
                                    var i;
                                    (null == t || null == (i = t.values) ? void 0 : i.liked) &&
                                        e.vibes.revision !== t.info.revision &&
                                        (a.clearVibes(),
                                        (e.vibes.revision = t.info.revision),
                                        t.values.liked.forEach((t) => {
                                            let a = (0, u2.q)(t.seeds);
                                            e.vibes.items.set(a.join(), { seeds: a, timestamp: t.timestamp });
                                        }));
                                },
                                clearArtists: () => {
                                    ((e.artists.revision = null), e.artists.items.clear());
                                },
                                clearAlbums: () => {
                                    ((e.albums.revision = null), e.albums.items.clear());
                                },
                                clearPlaylists: () => {
                                    ((e.playlists.revision = null), e.playlists.items.clear());
                                },
                                clearTracks: () => {
                                    ((e.tracks.revision = null), e.tracks.items.clear());
                                },
                                clearClips: () => {
                                    ((e.clips.revision = null), e.clips.items.clear());
                                },
                                clearVibes: () => {
                                    ((e.vibes.revision = null), e.vibes.items.clear());
                                },
                                toggleTrackLike: (0, _.L3)(function* (t) {
                                    let { usersResource: i, modelActionsLogger: r } = (0, _._$)(e),
                                        l = String(t.entityId),
                                        n = e.tracks.items.get(l);
                                    try {
                                        let r,
                                            n = { entityId: t.albumId ? ''.concat(t.entityId, ':').concat(t.albumId) : t.entityId, userId: t.userId };
                                        return (
                                            e.tracks.items.get(l) === u3.O.LIKED
                                                ? (e.tracks.items.delete(l), (r = yield i.unlikeTrack(n)))
                                                : (e.tracks.items.set(l, u3.O.LIKED), (r = yield i.likeTrack(n))),
                                            a.getData([u1.LIKED_TRACKS]),
                                            r
                                        );
                                    } catch (t) {
                                        return (n ? e.tracks.items.set(l, n) : e.tracks.items.delete(l), r.error(t), uZ.f.ERROR);
                                    }
                                }),
                                toggleTrackDislike: (0, _.L3)(function* (t) {
                                    let { usersResource: i, modelActionsLogger: r } = (0, _._$)(e),
                                        l = String(t.entityId),
                                        n = e.tracks.items.get(l);
                                    try {
                                        let r,
                                            n = { entityId: t.albumId ? ''.concat(t.entityId, ':').concat(t.albumId) : t.entityId, userId: t.userId };
                                        return (
                                            e.tracks.items.get(l) === u3.O.DISLIKED
                                                ? (e.tracks.items.delete(l), (r = yield i.undislikeTrack(n)))
                                                : (e.tracks.items.set(l, u3.O.DISLIKED), (r = yield i.dislikeTrack(n))),
                                            a.getData([u1.LIKED_TRACKS]),
                                            r
                                        );
                                    } catch (t) {
                                        return (n ? e.tracks.items.set(l, n) : e.tracks.items.delete(l), r.error(t), uZ.f.ERROR);
                                    }
                                }),
                                toggleArtistLike: (0, _.L3)(function* (t) {
                                    let { usersResource: i, modelActionsLogger: r } = (0, _._$)(e),
                                        l = String(t.entityId),
                                        n = e.artists.items.get(l);
                                    try {
                                        let r;
                                        return (
                                            e.artists.items.get(l) === u3.O.LIKED
                                                ? (e.artists.items.delete(l), (r = yield i.unlikeArtist(t)))
                                                : (e.artists.items.set(l, u3.O.LIKED), (r = yield i.likeArtist(t))),
                                            a.getData([u1.LIKED_ARTISTS]),
                                            r
                                        );
                                    } catch (t) {
                                        return (n ? e.artists.items.set(l, n) : e.artists.items.delete(l), r.error(t), uZ.f.ERROR);
                                    }
                                }),
                                toggleArtistDislike: (0, _.L3)(function* (t) {
                                    let { usersResource: i, modelActionsLogger: r } = (0, _._$)(e),
                                        l = String(t.entityId),
                                        n = e.artists.items.get(l);
                                    try {
                                        let r;
                                        return (
                                            e.artists.items.get(l) === u3.O.DISLIKED
                                                ? (e.artists.items.delete(l), (r = yield i.undislikeArtist(t)))
                                                : (e.artists.items.set(l, u3.O.DISLIKED), (r = yield i.dislikeArtist(t))),
                                            a.getData([u1.LIKED_ARTISTS]),
                                            r
                                        );
                                    } catch (t) {
                                        return (n ? e.artists.items.set(l, n) : e.artists.items.delete(l), r.error(t), uZ.f.ERROR);
                                    }
                                }),
                                toggleAlbumLike: (0, _.L3)(function* (t) {
                                    let { usersResource: i, modelActionsLogger: r } = (0, _._$)(e),
                                        l = String(t.entityId),
                                        n = e.albums.items.get(l);
                                    try {
                                        let r;
                                        return (
                                            e.albums.items.get(l) === u3.O.LIKED
                                                ? (e.albums.items.delete(l), (r = yield i.unlikeAlbum(t)))
                                                : (e.albums.items.set(l, u3.O.LIKED), (r = yield i.likeAlbum(t))),
                                            a.getData([u1.LIKED_ALBUMS]),
                                            r
                                        );
                                    } catch (t) {
                                        return (n ? e.albums.items.set(l, n) : e.albums.items.delete(l), r.error(t), uZ.f.ERROR);
                                    }
                                }),
                                togglePlaylistLike: (0, _.L3)(function* (t) {
                                    let { usersResource: i, modelActionsLogger: r } = (0, _._$)(e),
                                        l = String(t.entityId),
                                        n = e.playlists.items.get(l);
                                    try {
                                        let r;
                                        return (
                                            e.playlists.items.get(l) === u3.O.LIKED
                                                ? (e.playlists.items.delete(l), (r = yield i.unlikePlaylist(t)))
                                                : (e.playlists.items.set(l, u3.O.LIKED), (r = yield i.likePlaylist(t))),
                                            a.getData([u1.LIKED_PLAYLISTS]),
                                            r
                                        );
                                    } catch (t) {
                                        return (n ? e.playlists.items.set(l, n) : e.playlists.items.delete(l), r.error(t), uZ.f.ERROR);
                                    }
                                }),
                                toggleClipLike: (0, _.L3)(function* (t) {
                                    let { usersResource: i, modelActionsLogger: r } = (0, _._$)(e),
                                        l = String(t.entityId),
                                        n = e.clips.items.get(l);
                                    try {
                                        return (
                                            e.clips.items.get(l) === u3.O.LIKED
                                                ? (e.clips.items.delete(l), yield i.unlikeClip(t))
                                                : (e.clips.items.set(l, u3.O.LIKED), yield i.likeClip(t)),
                                            a.getData([u1.LIKED_CLIPS]),
                                            uZ.f.OK
                                        );
                                    } catch (t) {
                                        return (n ? e.clips.items.set(l, n) : e.clips.items.delete(l), r.error(t), uZ.f.ERROR);
                                    }
                                }),
                                toggleVibeLike: (0, _.L3)(function* (i) {
                                    let { collectionResource: r, modelActionsLogger: l } = (0, _._$)(e),
                                        n = (0, u2.q)(i.seeds),
                                        s = n.join(),
                                        o = e.vibes.items.get(s),
                                        d = o ? (0, _.dV)(o) : void 0,
                                        g = { waves: [{ seeds: n }] };
                                    try {
                                        return (
                                            d
                                                ? (e.vibes.items.delete(s), yield r.unlikeWaves(g))
                                                : (e.vibes.items.set(s, { seeds: n, timestamp: new Date().toISOString() }), yield r.likeWaves(g)),
                                            e.loadingState === F.G.PENDING ? (t = !0) : a.getData([u1.LIKED_VIBES]),
                                            uZ.f.OK
                                        );
                                    } catch (t) {
                                        return (d ? e.vibes.items.set(s, d) : e.vibes.items.delete(s), l.error(t), uZ.f.ERROR);
                                    }
                                }),
                            };
                        return a;
                    }),
                ce = _.gK
                    .model('Location', {
                        pathname: _.gK.optional(_.gK.string, ''),
                        searchParams: _.gK.optional(_.gK.string, ''),
                        host: _.gK.optional(_.gK.string, ''),
                        tld: _.gK.optional(_.gK.string, ''),
                        origin: _.gK.optional(_.gK.string, ''),
                        href: _.gK.optional(_.gK.string, ''),
                        isNotFound: _.gK.optional(_.gK.boolean, !1),
                    })
                    .actions((e) => ({
                        setPathname(t) {
                            e.pathname = t;
                        },
                        setSearchParams(t) {
                            e.searchParams = t;
                        },
                        setHost(t) {
                            e.host = t;
                        },
                        setTld(t) {
                            e.tld = t;
                        },
                        setOrigin(t) {
                            e.origin = t;
                        },
                        setHref(t) {
                            e.href = t;
                        },
                        setNotFound(t) {
                            e.isNotFound = t;
                        },
                    }));
            var ct = a(26e3),
                ca = a(31320);
            let ci = { INTRO_PLAN: ca.N.IntroPlan, INTRO_UNTIL_PLAN: ca.N.IntroUntilPlan, TRIAL_PLAN: ca.N.TrialPlan, TRIAL_UNTIL_PLAN: ca.N.TrialUntilPlan },
                cr = (e) => {
                    let { repetitionCount: t, typename: a, ...i } = e;
                    return { ...(Number.isFinite(t) ? { repeatCount: t } : {}), ...i, typename: ci[a] || a };
                };
            var cl = a(82057);
            let cn = (e) => (0, _.wg)(e),
                cs = (e) => {
                    let { plans: t, ...a } = e;
                    return (0, _.wg)({ ...a, plans: t.map(cn) });
                },
                co = (e) => {
                    let { option: t, ...a } = e;
                    return (0, _.wg)({ ...cs(a), option: t });
                },
                cd = (e) =>
                    (0, _.wg)({
                        acqOffer: ((e) => {
                            let {
                                analyticData: t,
                                catalogCompositeOffer: a,
                                offerTexts: i,
                                target: r,
                                requestedFeatures: l,
                                position: n,
                                oneClickAvailable: s,
                                place: o,
                                purchaseToken: d,
                            } = e;
                            return (0, _.wg)({
                                analyticData: t,
                                catalogCompositeOffer: ((e) => {
                                    let { positionId: t, silentInvoiceAvailable: a, structureType: i, tariffOffer: r, optionOffers: l } = e;
                                    return (0, _.wg)({
                                        positionId: t,
                                        silentInvoiceAvailable: a,
                                        structureType: i,
                                        tariffOffer: ((e) => {
                                            if (!e) return null;
                                            let { tariff: t, ...a } = e;
                                            return (0, _.wg)({ ...cs(a), tariff: t });
                                        })(r),
                                        optionsOffers: l.map(co),
                                    });
                                })(
                                    ((e) => {
                                        var t;
                                        let { tariffOffer: a, optionOffers: i } = e;
                                        return {
                                            ...e,
                                            silentInvoiceAvailable: !!e.silentInvoiceAvailable,
                                            structureType: e.structureType,
                                            tariffOffer: a ? { ...a, offerVendorType: a.offerVendorType, plans: null == (t = a.plans) ? void 0 : t.map(cr) } : void 0,
                                            optionOffers: null == i ? void 0 : i.map((e) => ({ ...e, plans: (e.plans || []).map(cr) })),
                                        };
                                    })(a),
                                ),
                                offerTexts: ((e) => {
                                    let { customTexts: t = {}, ...a } = e;
                                    return {
                                        ...a,
                                        customTexts: Object.entries(t).reduce((e, t) => {
                                            let [a, i] = t;
                                            return ((e[(0, cl.A)(a)] = i), e);
                                        }, {}),
                                    };
                                })(i),
                                target: r,
                                requestedFeatures: l,
                                position: n,
                                oneClickAvailable: s,
                                place: o,
                                purchaseToken: d,
                            });
                        })(e),
                    }),
                cg = _.gK.model({ batchId: _.gK.string, positionId: _.gK.string, placeId: _.gK.maybe(_.gK.string) }),
                cu = _.gK.model({
                    buttonText: _.gK.maybe(_.gK.string),
                    buttonAdditionalText: _.gK.maybe(_.gK.string),
                    buttonTextA11y: _.gK.maybe(_.gK.string),
                    disclaimerText: _.gK.maybe(_.gK.string),
                    disclaimerTextA11y: _.gK.maybe(_.gK.string),
                    oneClickDisclaimerText: _.gK.maybe(_.gK.string),
                    oneClickDisclaimerTextA11y: _.gK.maybe(_.gK.string),
                }),
                cc = _.gK.model({
                    subscriptionName: _.gK.string,
                    buttonText: _.gK.string,
                    buttonTextWithDetails: _.gK.string,
                    combinedIntroductoryText: _.gK.string,
                    combinedPriceText: _.gK.string,
                    combinedFullOfferText: _.gK.string,
                    priceInMonth: _.gK.string,
                    customTexts: cu,
                });
            var cm = (function (e) {
                return ((e.COMPOSITE = 'COMPOSITE'), (e.OPTION = 'OPTION'), (e.TARIFF = 'TARIFF'), e);
            })({});
            let cy = _.gK.model({ amount: _.gK.number, currency: _.gK.string }),
                cp = _.gK.model({ typename: _.gK.literal(ca.N.IntroPlan), period: _.gK.string, price: cy, repeatCount: _.gK.maybe(_.gK.number) }),
                cE = _.gK.model({ typename: _.gK.literal(ca.N.IntroUntilPlan), price: cy, until: _.gK.string }),
                cb = _.gK.model({ typename: _.gK.literal(ca.N.TrialPlan), period: _.gK.string }),
                cv = _.gK.model({ typename: _.gK.literal(ca.N.TrialUntilPlan), until: _.gK.string }),
                cS = _.gK.union(cp, cE, cb, cv),
                cK = _.gK.model({ name: _.gK.string }),
                cI = _.gK.model({
                    additionText: _.gK.string,
                    description: _.gK.string,
                    name: _.gK.string,
                    text: _.gK.string,
                    title: _.gK.string,
                    plans: _.gK.array(cS),
                    commonPeriod: _.gK.string,
                    commonPrice: cy,
                }),
                cL = cI.props({ option: cK }),
                cT = cI.props({ tariff: cK }),
                ch = _.gK.model({
                    positionId: _.gK.string,
                    silentInvoiceAvailable: _.gK.boolean,
                    structureType: _.gK.enumeration(Object.values(cm)),
                    tariffOffer: _.gK.maybeNull(cT),
                    optionsOffers: _.gK.array(cL),
                }),
                cN = _.gK.model({
                    analyticData: cg,
                    catalogCompositeOffer: ch,
                    offerTexts: cc,
                    target: _.gK.string,
                    requestedFeatures: _.gK.maybe(_.gK.array(_.gK.string)),
                    position: _.gK.number,
                    oneClickAvailable: _.gK.maybe(_.gK.boolean),
                    place: _.gK.maybe(_.gK.string),
                    purchaseToken: _.gK.maybe(_.gK.string),
                }),
                cA = _.gK.model({ offer: _.gK.maybeNull(ch), acqOffer: _.gK.maybeNull(cN) }).views((e) => {
                    let t = {
                        get target() {
                            var a;
                            return (null == (a = e.acqOffer) ? void 0 : a.target) || 'music';
                        },
                        get offerPosition() {
                            var i, r;
                            return null != (r = null == (i = e.acqOffer) ? void 0 : i.position) ? r : 0;
                        },
                        get place() {
                            var l;
                            return null == (l = e.acqOffer) ? void 0 : l.place;
                        },
                        get catalogCompositeOffer() {
                            var n;
                            return (null == (n = e.acqOffer) ? void 0 : n.catalogCompositeOffer) || e.offer;
                        },
                        get offersPositionId() {
                            var s, o;
                            return (
                                (null == (s = e.acqOffer) ? void 0 : s.analyticData.positionId) || (null == (o = t.catalogCompositeOffer) ? void 0 : o.positionId) || ''
                            );
                        },
                        get tariffOffer() {
                            var d;
                            return null == (d = t.catalogCompositeOffer) ? void 0 : d.tariffOffer;
                        },
                        get customTexts() {
                            var g, u;
                            return null == (u = e.acqOffer) || null == (g = u.offerTexts) ? void 0 : g.customTexts;
                        },
                        get oneClickAvailable() {
                            var c, m;
                            return !!((null == (c = e.acqOffer) ? void 0 : c.oneClickAvailable) && (null == (m = t.oneClickDisclaimerText) ? void 0 : m.trim()));
                        },
                        get oneClickDisclaimerText() {
                            var y;
                            return null == (y = t.customTexts) ? void 0 : y.oneClickDisclaimerText;
                        },
                        get oneClickDisclaimerTextA11y() {
                            var p;
                            return null == (p = t.customTexts) ? void 0 : p.oneClickDisclaimerTextA11y;
                        },
                        get disclaimerText() {
                            var E;
                            if (t.oneClickAvailable) return t.oneClickDisclaimerText;
                            let { experiments: a } = (0, D.M)(e);
                            return a.checkExperiment(O.z.WebNextPaywallDisclaimer, 'regular') ? (null == (E = t.customTexts) ? void 0 : E.disclaimerText) : void 0;
                        },
                        get disclaimerTextA11y() {
                            var b;
                            if (t.oneClickAvailable) return t.oneClickDisclaimerTextA11y;
                            let { experiments: a } = (0, D.M)(e);
                            return a.checkExperiment(O.z.WebNextPaywallDisclaimer, 'regular') ? (null == (b = t.customTexts) ? void 0 : b.disclaimerTextA11y) : void 0;
                        },
                        get mainText() {
                            var v, S;
                            return (null == (v = t.customTexts) ? void 0 : v.buttonText) || (null == (S = t.tariffOffer) ? void 0 : S.text);
                        },
                        get mainTextA11y() {
                            var K;
                            return null == (K = t.customTexts) ? void 0 : K.buttonTextA11y;
                        },
                        get additionText() {
                            var I, L;
                            return (null == (I = t.customTexts) ? void 0 : I.buttonAdditionalText) || (null == (L = t.tariffOffer) ? void 0 : L.additionText);
                        },
                        get offersBatchId() {
                            var T, h;
                            return (null == (T = e.acqOffer) ? void 0 : T.analyticData.batchId) || (null == (h = e.offer) ? void 0 : h.positionId) || '';
                        },
                        get buttonText() {
                            var N, A;
                            return null == (A = e.acqOffer) || null == (N = A.offerTexts) ? void 0 : N.buttonText;
                        },
                    };
                    return t;
                }),
                cf = _.gK.model({
                    sessionId: _.gK.maybeNull(_.gK.string),
                    page: _.gK.maybeNull(_.gK.string),
                    offers: _.gK.array(cA),
                    mlRequestId: _.gK.maybeNull(_.gK.string),
                    offerConfigId: _.gK.maybeNull(_.gK.number),
                    language: _.gK.maybeNull(_.gK.string),
                }),
                cC = _.gK.compose(cf, ee.X, _.gK.model({ isLoadOffersResultSent: _.gK.boolean })),
                cR = _.gK
                    .compose(_.gK.model({ isLoadOffersResultSent: _.gK.maybe(_.gK.boolean), acqData: _.gK.map(cC) }), ee.X)
                    .volatile(() => ({ sessionId: (0, op.A)(), isFrontSessionStartSent: !1 }))
                    .views((e) => {
                        let t = {
                            getIsShimmerVisible(t) {
                                let a = t && e.acqData.get(t);
                                return a ? a.isNeededToLoad || a.isLoading || a.isRejected : e.isNeededToLoad || e.isLoading || e.isRejected;
                            },
                            getIsShimmerActive(t) {
                                let a = t && e.acqData.get(t);
                                return a ? a.isLoading : e.isLoading;
                            },
                            getIsNeededToLoad(t) {
                                let a = t && e.acqData.get(t);
                                return a ? a.isNeededToLoad : e.isNeededToLoad;
                            },
                            getIsLoadOffersResultSent(t) {
                                let a = t && e.acqData.get(t);
                                return a ? a.isLoadOffersResultSent : e.isLoadOffersResultSent;
                            },
                            getLoadingState(t) {
                                let a = t && e.acqData.get(t);
                                return a ? a.loadingState : e.loadingState;
                            },
                            get serviceSessionId() {
                                return e.sessionId;
                            },
                            getOffersPositionIds(t) {
                                var a, i, r;
                                return (
                                    (t && (null == (r = e.acqData) || null == (i = r.get(t)) || null == (a = i.offers) ? void 0 : a.map((e) => e.offersPositionId))) || []
                                );
                            },
                            getOffer(t, a) {
                                var i;
                                let r = null == (i = e.acqData) ? void 0 : i.get(t);
                                if (r) return a ? r.offers.find((e) => e.place === a) : r.offers[0];
                            },
                            getTarget(e, a) {
                                var i;
                                return (null == (i = t.getOffer(e, a)) ? void 0 : i.target) || 'music';
                            },
                        };
                        return t;
                    })
                    .actions((e) => {
                        let t = {
                            toggleIsFrontSessionStartSentTrue() {
                                e.isFrontSessionStartSent = !0;
                            },
                            toggleIsLoadOffersResultSentTrue() {
                                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ct.l.NO_VALUE;
                                t.setAcqData(e, { isLoadOffersResultSent: !0 });
                            },
                            setLoadingState(a) {
                                let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ct.l.NO_VALUE;
                                t.setAcqData(i, { ...e.acqData.get(i), loadingState: a });
                            },
                            setAcqData(t, a) {
                                var i;
                                e.acqData.set(t, { loadingState: F.G.IDLE, isLoadOffersResultSent: !1, ...(null != (i = e.acqData.get(t)) ? i : {}), ...a });
                            },
                            getData: (0, _.L3)(function* (a) {
                                let { page: i, places: r, communicationId: l, campaignId: n, widgetServiceName: s } = a,
                                    { acqOffers: o, modelActionsLogger: d } = (0, _._$)(e),
                                    { experiments: g } = (0, D.M)(e),
                                    u = g.getEnabledFlags(),
                                    c = i || ct.l.NO_VALUE;
                                if (e.getLoadingState(i) !== F.G.PENDING) {
                                    e.isLoadOffersResultSent = !1;
                                    try {
                                        t.setLoadingState(F.G.PENDING, c);
                                        let a = {};
                                        (l && (a.communication_id = l), n && (a.campaign_id = n));
                                        let i = yield o.getOffers(c, r, { expFlags: u, eventSessionId: e.sessionId, customProperties: a, widgetServiceName: s });
                                        (t.setAcqData(c, {
                                            ...((e) => {
                                                let { sessionId: t, result: a, offerConfigId: i, mlRequestId: r, page: l, language: n } = e;
                                                return (0, _.wg)({ sessionId: t, page: l, offers: a.map(cd), mlRequestId: r, offerConfigId: i, language: n });
                                            })(i),
                                            loadingState: F.G.RESOLVE,
                                            isLoadOffersResultSent: !1,
                                        }),
                                            t.setLoadingState(F.G.RESOLVE, c));
                                    } catch (e) {
                                        (t.setLoadingState(F.G.REJECT, c), d.error(e));
                                    }
                                }
                            }),
                        };
                        return t;
                    })
                    .named('MusicOffers'),
                ck = _.gK.model('Offers', { music: cR });
            var cP = a(5503),
                c_ = a(93887);
            let cD = _.gK
                    .model('BrowserInfo', {
                        hasHuaweiAppGallery: _.gK.boolean,
                        inAppBrowser: _.gK.boolean,
                        isBrowser: _.gK.boolean,
                        isCrawler: _.gK.maybeNull(_.gK.boolean),
                        isMobile: _.gK.boolean,
                        isTablet: _.gK.boolean,
                        isTouch: _.gK.boolean,
                        name: _.gK.maybe(_.gK.string),
                        version: _.gK.maybe(_.gK.string),
                        OSFamily: _.gK.maybe(_.gK.string),
                    })
                    .views((e) => ({
                        get isSafari() {
                            var t;
                            return null == (t = e.name) ? void 0 : t.toLowerCase().includes('safari');
                        },
                    })),
                cO = _.gK
                    .model('Settings', {
                        layout: _.gK.maybeNull(_.gK.enumeration(Object.keys(gN.u))),
                        isLandscape: _.gK.boolean,
                        isMobileLandscapeHeight: _.gK.boolean,
                        platform: _.gK.maybe(_.gK.enumeration(Object.values(c_.O))),
                        browserInfo: cD,
                        liteVersionMode: _.gK.maybe(_.gK.enumeration(Object.values(cP.w))),
                        selectedThumbId: _.gK.enumeration(Object.values(sL.T)),
                    })
                    .views((e) => {
                        let t = {
                            get isMobile() {
                                return e.layout === gN.u.Mobile;
                            },
                            get isWindowsApplication() {
                                return e.platform === c_.O.WINDOWS;
                            },
                            get isMacOSApplication() {
                                return e.platform === c_.O.MACOS;
                            },
                            get isLinuxApplication() {
                                return e.platform === c_.O.LINUX;
                            },
                            get isLiteVersionModeEnabled() {
                                return e.liteVersionMode === cP.w.ENABLED;
                            },
                            get isLiteVersionModeDisabled() {
                                return e.liteVersionMode === cP.w.DISABLED;
                            },
                            get isLiteVersionModeAvailableForToggle() {
                                return t.isLiteVersionModeDisabled || t.isLiteVersionModeEnabled;
                            },
                        };
                        return t;
                    })
                    .actions((e) => {
                        let t = {
                            setLayout(t) {
                                e.layout = t;
                            },
                            setPlatform(t) {
                                e.platform = t;
                            },
                            setIsLandscape(t) {
                                e.isLandscape = t;
                            },
                            setIsMobileLandscapeHeight(t) {
                                e.isMobileLandscapeHeight = t;
                            },
                            setBrowserInfo(t) {
                                let a = void 0 !== t.version ? String(t.version) : void 0;
                                e.browserInfo = (0, _.wg)({ ...t, version: a });
                            },
                            initializeLiteVersionMode() {
                                if (!(0, _._n)(e)) return;
                                let { containerStorage: a } = (0, _._$)(e),
                                    i = a.get(ni.c.LiteVersionMode);
                                if (i) {
                                    if ('2' !== i.version) return void a.remove(ni.c.LiteVersionMode);
                                    t.setLiteVersionMode(i.mode, !1);
                                }
                            },
                            setLiteVersionMode(t, a) {
                                let { containerStorage: i } = (0, _._$)(e);
                                ((e.liteVersionMode = t), a && i.set(ni.c.LiteVersionMode, { version: '2', mode: t }));
                            },
                            setCustomPlayerThumb(t) {
                                let { localStorage: a } = (0, _._$)(e),
                                    i = t;
                                (Object.values(sL.T).includes(t) || (i = sL.T.DEFAULT), (e.selectedThumbId = i));
                                let r = a.get(ni.c.CustomPlayerThumbConfig);
                                a.set(ni.c.CustomPlayerThumbConfig, { ...r, selectedThumbId: i, version: '1' });
                            },
                            initializeCustomPlayerThumb() {
                                if (!(0, _._n)(e)) return;
                                let { user: a } = (0, D.M)(e),
                                    { localStorage: i } = (0, _._$)(e),
                                    r = i.get(ni.c.CustomPlayerThumbConfig);
                                if (r) {
                                    if ('1' !== r.version || !a.hasPlus) {
                                        ((e.selectedThumbId = sL.T.DEFAULT), i.remove(ni.c.CustomPlayerThumbConfig));
                                        return;
                                    }
                                    if (r.selectedThumbId === sL.T.BRANDED && a.hasPlus) return void t.setCustomPlayerThumb(sL.T.DEFAULT);
                                    t.setCustomPlayerThumb(r.selectedThumbId);
                                }
                            },
                        };
                        return t;
                    }),
                cw = _.gK.model('Root', {
                    isRootModel: _.gK.optional(_.gK.literal(!0), !0),
                    experiments: uQ,
                    user: uW,
                    forcedLogin: dl,
                    freeAccess: gm,
                    wizard: de,
                    collection: l9,
                    disclaimersDictionary: uY,
                    main: nb,
                    settings: cO,
                    currentClipInfo: da,
                    currentTrackInfo: dJ,
                    album: e9,
                    artist: lg,
                    library: u9,
                    sonataState: dW,
                    playlist: nD,
                    albumCPA: M,
                    slides: uM,
                    vibe: ow,
                    multivibe: dc,
                    sharedVibe: dO,
                    search: sc,
                    vibeSettings: gi,
                    pinsCollection: oa,
                    landingBlockEntities: sH,
                    contextMenuTrackPlaylists: d$,
                    contextMenuAddTracksToPlaylist: dm,
                    createPlaylist: gh,
                    location: ce,
                    nonMusic: nI,
                    disclaimerModalState: u$,
                    communication: sM,
                    trailer: oD,
                    modals: s5,
                    landing: rq,
                    landingSdkModel: sQ,
                    fullscreenPlayer: oh,
                    freePlayerAccess: oo,
                    fullscreenVideoPlayer: oB,
                    releaseNotes: dr,
                    trackComplaint: dq,
                    trackLyrics: dH,
                    ugcUploadCenter: d8,
                    paymentWidgetModal: gL,
                    offers: ck,
                    quality: oN,
                    kids: nm,
                    slam: dM,
                    advert: ol,
                    track: sm,
                    continueListen: sV,
                    familyInvite: sX,
                    redAlert: gf,
                    shareIframe: dD,
                    paywall: oi,
                    downloadMobileApp: sF,
                    advertBanners: sA,
                    desktopPaywall: gT,
                    concerts: ng,
                    concert: nt,
                    wheel: o1,
                    words: gc,
                    lumen: gS,
                }),
                cG = {
                    experiments: { loadingState: F.G.IDLE, experiments: {}, overwrittenExperiments: {} },
                    disclaimersDictionary: { loadingState: F.G.IDLE },
                    user: { account: { loadingState: F.G.IDLE, data: {} }, settings: { loadingState: F.G.IDLE } },
                    freeAccess: {},
                    forcedLogin: {},
                    wizard: {
                        modal: {},
                        introModal: {},
                        sessionV2: { loadingState: F.G.IDLE, savedLikedArtists: [], likedArtists: [], unlikedArtists: [] },
                        sessionV3: { loadingState: F.G.IDLE },
                    },
                    collection: {
                        albums: { pagesLoader: {}, upcomingAlbums: { loadingState: F.G.IDLE } },
                        playlists: {
                            playlistsLiked: { pagesLoader: {} },
                            playlistsCreated: { pagesLoader: {} },
                            activeTabIndex: lN.a.CREATED,
                            tabs: [lN.a.CREATED, lN.a.LIKED],
                        },
                        artists: { pagesLoader: {}, topArtists: { loadingState: F.G.IDLE, items: [] } },
                        landing: { loadingState: F.G.IDLE, tabs: { loadingState: F.G.IDLE } },
                        shelf: { recentlyPlayed: { loadingState: F.G.IDLE }, newEpisodes: { loadingState: F.G.IDLE }, liked: { loadingState: F.G.IDLE } },
                        nonMusicLiked: { loadingState: F.G.IDLE, items: [] },
                        dislikes: { artists: { loadingState: F.G.IDLE }, tracks: { loadingState: F.G.IDLE } },
                        kids: { albums: { pagesLoader: {} }, playlists: { pagesLoader: {} }, tracks: { pagesLoader: {} } },
                        shelfRecentlyPlayed: { pagesLoader: {} },
                        shelfLiked: { pagesLoader: {} },
                        clips: { loadingState: F.G.IDLE, clipsWillLike: { loadingState: F.G.IDLE } },
                        vibeRooms: { loadingState: F.G.IDLE },
                    },
                    main: {
                        entryPoint: { loadingState: F.G.IDLE },
                        specialHeaderLoadingState: F.G.IDLE,
                        landing: { loadingState: F.G.IDLE, tabs: { loadingState: F.G.IDLE } },
                    },
                    nonMusic: {
                        landing: { loadingState: F.G.IDLE, tabs: { loadingState: F.G.IDLE } },
                        albums: { loadingState: F.G.IDLE },
                        categoryPlaylistsSubpage: { loadingState: F.G.IDLE, pagesLoader: {} },
                    },
                    kids: {
                        landing: { loadingState: F.G.IDLE, tabs: { loadingState: F.G.IDLE } },
                        kidsEditorialPlaylistSubpage: { loadingState: F.G.IDLE, pagesLoader: {} },
                        kidsEditorialAlbumSubpage: { loadingState: F.G.IDLE, pagesLoader: {} },
                    },
                    settings: {
                        layout: null,
                        isLandscape: !1,
                        isMobileLandscapeHeight: !1,
                        browserInfo: {
                            name: void 0,
                            version: void 0,
                            OSFamily: void 0,
                            isMobile: !1,
                            isTablet: !1,
                            isTouch: !1,
                            isBrowser: !1,
                            isCrawler: null,
                            inAppBrowser: !1,
                            hasHuaweiAppGallery: !1,
                        },
                        selectedThumbId: sL.T.DEFAULT,
                    },
                    currentClipInfo: { clipLoadingState: F.G.IDLE, creditsLoadingState: F.G.IDLE, id: null, clip: null, credits: null, modal: {} },
                    currentTrackInfo: {
                        trackLoadingState: F.G.IDLE,
                        creditsLoadingState: F.G.IDLE,
                        descriptionLoadingState: F.G.IDLE,
                        id: null,
                        albumId: null,
                        isUGC: null,
                        fullTrack: null,
                        credits: null,
                        modal: {},
                    },
                    trackComplaint: { trackId: null, modal: {} },
                    trackLyrics: { loadingState: F.G.IDLE, lyrics: null, lyricId: null, externalLyricId: null, track: null, modal: {} },
                    album: {
                        loadingState: F.G.IDLE,
                        items: [],
                        meta: null,
                        otherAlbumVersions: [],
                        allTracksUnfinished: !1,
                        donations: { loadingState: F.G.IDLE, items: [] },
                        latestGenreAlbums: { loadingState: F.G.IDLE, items: [] },
                        otherArtistAlbums: { loadingState: F.G.IDLE, items: [] },
                        relatedContent: { loadingState: F.G.IDLE, items: [] },
                        similarEntities: {
                            id: 'similar-entities',
                            type: eb.t.COLLECTION_SIMILAR_ENTITIES,
                            loadingState: eE.IDLE,
                            isNotFound: !1,
                            hasSentAnalyticsOnLoaded: !1,
                            meta: {},
                        },
                        artistRecommendationsPromo: eS('artist_recommendations_promo'),
                    },
                    albumCPA: {},
                    artist: {
                        meta: null,
                        landing: { loadingState: F.G.IDLE, tabs: { loadingState: F.G.IDLE } },
                        fullTracksListSubpage: { loadingState: F.G.IDLE },
                        albumsSubpage: { pagesLoader: {} },
                        concertsSubpage: { loadingState: F.G.IDLE },
                        similarArtistsSubPage: { loadingState: F.G.IDLE },
                        familiarSubpage: { loadingState: F.G.IDLE },
                        clipsSubpage: { pagesLoader: {} },
                        commonSubPage: {},
                        offlineArtist: { loadingState: F.G.IDLE, trackIds: { loadingState: F.G.IDLE }, downloadedTracks: { loadingState: F.G.IDLE } },
                        infoLoadingState: { loadingState: F.G.IDLE },
                    },
                    library: { loadingState: F.G.IDLE, tracks: {}, artists: {}, playlists: {}, albums: {}, clips: {}, vibes: {} },
                    sonataState: {
                        contextId: null,
                        contextType: null,
                        entityMeta: null,
                        status: og.MT.IDLE,
                        canMoveBackward: !1,
                        canMoveForward: !1,
                        canSpeed: !1,
                        canChangeRepeatMode: !0,
                        repeatMode: dV.pM.NONE,
                        quality: dB.e.BALANCED,
                        canShuffle: !0,
                        shuffle: !1,
                        areCoresRegistered: !1,
                        isVHCoreRegistered: !1,
                        isCrossFadeEnabled: !0,
                    },
                    playlist: {
                        loadingState: F.G.IDLE,
                        meta: null,
                        items: [],
                        initialItems: [],
                        similarPlaylists: [],
                        filters: { loadingState: F.G.IDLE },
                        editorFeature: { shouldShowDuplicate: !1, shouldShowGenre: !1, shouldShowMajor: !1, colorMajorMap: {}, duplicate: {} },
                        search: { loadingState: F.G.IDLE, text: '' },
                        similarEntities: {
                            id: 'similar-entities',
                            type: eb.t.COLLECTION_SIMILAR_ENTITIES,
                            loadingState: eE.IDLE,
                            isNotFound: !1,
                            hasSentAnalyticsOnLoaded: !1,
                            meta: {},
                        },
                        artistRecommendationsPromo: eS('artist_recommendations_promo'),
                    },
                    slides: {
                        userSlidesLoadingState: F.G.IDLE,
                        artistSlidesLoadingState: F.G.IDLE,
                        podcastSlidesLoadingState: F.G.IDLE,
                        specialSlidesLoadingState: F.G.IDLE,
                        kidsSlidesLoadingState: F.G.IDLE,
                        userItems: [],
                        artistItems: [],
                        podcastItems: [],
                        specialItems: [],
                        kidsItems: [],
                        isMuted: !1,
                    },
                    vibe: { loadingState: F.G.IDLE, vibeResetLoadingState: F.G.IDLE, isApplying: !1 },
                    multivibe: {
                        invitationRoom: null,
                        duplicateRoomId: null,
                        createdRoomId: null,
                        errorName: null,
                        promoModal: {},
                        inviteModal: {},
                        disabledRoomInfoModal: {},
                        disabledRoomId: null,
                        loadingState: F.G.IDLE,
                    },
                    sharedVibe: { loadingState: F.G.IDLE },
                    search: {
                        searchCorrectedText: null,
                        loadingState: F.G.IDLE,
                        historyPage: { loadingState: F.G.IDLE, items: [] },
                        mixes: { loadingState: F.G.IDLE, items: [] },
                        landing: { loadingState: F.G.IDLE, tabs: { loadingState: F.G.IDLE } },
                        history: { loadingState: F.G.IDLE },
                        pagesLoader: {},
                    },
                    vibeSettings: { loadingState: F.G.IDLE, modal: {} },
                    pinsCollection: { loadingState: F.G.IDLE, index: {} },
                    landingBlockEntities: { loadingState: F.G.IDLE },
                    contextMenuTrackPlaylists: {},
                    contextMenuAddTracksToPlaylist: { playlistsLoadingState: { loadingState: F.G.IDLE }, tracksLoadingState: { loadingState: F.G.IDLE } },
                    createPlaylist: {},
                    location: {},
                    disclaimerModalState: { loadingState: F.G.IDLE },
                    trailer: {
                        loadingState: F.G.IDLE,
                        withAnimation: !0,
                        shouldAutoStartPlaying: !0,
                        modal: {},
                        sonataStatusBeforeTrailerStart: og.MT.IDLE,
                        isManuallyPaused: !0,
                        state: { contextId: null, contextType: null, entityMeta: null, status: og.MT.IDLE },
                    },
                    communication: { loadingState: F.G.IDLE },
                    modals: {
                        disclaimerModal: {},
                        shortcutsModal: {},
                        aboutAppModal: {},
                        overviewModal: {},
                        ugcTrackEditModal: { modal: {} },
                        crackdownModal: {},
                        overwrittenExperimentsModal: {},
                        overwrittenMocksModal: {},
                        buySubscriptionModal: { isOpened: !0 },
                        promoLandingBuySubscriptionModal: {},
                        clearMemoryModal: {},
                        imageSliderModal: { modal: {} },
                        artistAboutModal: { loadingState: F.G.IDLE, modal: {} },
                        bestRecommedationModal: {},
                    },
                    landing: { loadingState: F.G.IDLE, tabs: { loadingState: F.G.IDLE } },
                    landingSdkModel: { loadingState: F.G.IDLE, tabs: { loadingState: F.G.IDLE } },
                    fullscreenPlayer: { modal: {}, syncLyrics: { loadingState: F.G.IDLE }, playQueue: {} },
                    freePlayerAccess: {},
                    fullscreenVideoPlayer: {
                        modal: {},
                        ids: [],
                        loadingState: F.G.IDLE,
                        sonataStatusBeforeClipStart: og.MT.IDLE,
                        withAnimation: !0,
                        state: { contextId: null, contextType: null, entityMeta: null, status: og.MT.IDLE, canMoveBackward: !1, canMoveForward: !1 },
                    },
                    advert: { data: null, isAdvertPlaying: !0, isAdvertShown: !1, isAdvertPlaybackCreated: !1 },
                    ugcUploadCenter: { checkProcessingTracksAttempts: 0, notifications: {} },
                    paymentWidgetModal: {
                        modal: {},
                        target: '',
                        serviceSessionId: '',
                        tariffOfferName: '',
                        offersBatchId: '',
                        offersPositionIds: '',
                        isSilent: !1,
                        status: gI.c.IDLE,
                    },
                    offers: { music: { loadingState: F.G.IDLE } },
                    quality: { modal: {} },
                    releaseNotes: { modal: {} },
                    slam: { networkStatus: {} },
                    track: { loadingState: F.G.IDLE, withAnimation: !0, shouldSendEventOnPlusButtonShowed: !0 },
                    familyInvite: { info: { loadingState: F.G.IDLE }, acceptanceLoadingState: F.G.IDLE, modal: {}, step: sj._.INFO },
                    continueListen: {},
                    redAlert: { loadingState: F.G.IDLE },
                    shareIframe: { modal: {} },
                    paywall: { modal: {}, freemiumCollectionBarrier: !1 },
                    downloadMobileApp: { modal: {} },
                    advertBanners: {
                        banners: {
                            topAdvertBanner: { type: sy.h.EMPTY, noAds: !1, hasError: !1, isShowBanner: !0 },
                            sideAdvertBanner: { type: sy.h.EMPTY, noAds: !1, hasError: !1, isShowBanner: !0 },
                            brandedPlaylistBanner: { type: sy.h.EMPTY, noAds: !1, hasError: !1, isShowBanner: !0 },
                            brandedPlayerBanner: { type: sy.h.EMPTY, noAds: !1, hasError: !1, isShowBanner: !0, modal: {} },
                            brandedEntityAxeBanner: { type: sy.h.EMPTY, noAds: !1, hasError: !1, isShowBanner: !0 },
                        },
                    },
                    desktopPaywall: {},
                    concerts: {
                        loadingState: F.G.IDLE,
                        config: { loadingState: F.G.IDLE },
                        landing: { loadingState: F.G.IDLE, tabs: { loadingState: F.G.IDLE } },
                        locationSelection: { loadingState: F.G.IDLE, modal: {} },
                    },
                    concert: { loadingState: F.G.IDLE, landing: { loadingState: F.G.IDLE, tabs: { loadingState: F.G.IDLE } } },
                    wheel: { loadingState: F.G.IDLE, items: [] },
                    words: { loadingState: F.G.IDLE, bigCardLoadingState: { loadingState: F.G.IDLE }, bigCardFullscreen: {} },
                    lumen: { loadingState: F.G.IDLE, status: null, themes: null },
                },
                cM = new Set([
                    'settings',
                    'lumen',
                    'sonataState',
                    'offers',
                    'modals',
                    'shareIframe',
                    'paywall',
                    'downloadMobileApp',
                    'disclaimerModalState',
                    'fullscreenPlayer',
                    'fullscreenVideoPlayer',
                    'advertBanners',
                    'redAlert',
                    'communication',
                    'desktopPaywall',
                ]);
            (0, I.eO)(!1);
            let cU = (e) => {
                    let { nonce: t, patchesRef: a } = e;
                    return (
                        (0, L.useServerInsertedHTML)(() => {
                            if (!(null == a ? void 0 : a.current)) return null;
                            let e = a.current.filter(
                                (e) =>
                                    !((e) => {
                                        if (!e.startsWith('/')) return !1;
                                        let t = e.indexOf('/', 1),
                                            a = e.slice(1, -1 === t ? void 0 : t);
                                        return cM.has(a);
                                    })(e.path),
                            );
                            return ((a.current = []), 0 === e.length)
                                ? null
                                : (0, K.jsx)('script', {
                                      dangerouslySetInnerHTML: {
                                          __html: '(window.__STATE_PATCHES__ = window.__STATE_PATCHES__ || []).push('
                                              .concat((0, h.Gr)(e), "); window.dispatchEvent(new Event('")
                                              .concat(C.s, "'));"),
                                      },
                                      nonce: null != t ? t : void 0,
                                  });
                        }),
                        null
                    );
                },
                cB = () => {
                    var e;
                    let t = null != (e = window.__STATE_PATCHES__) ? e : [];
                    return (delete window.__STATE_PATCHES__, t);
                },
                cV = (e) => {
                    let { children: t, nonce: a } = e,
                        i = (0, P.Y)(),
                        r = (0, A.N)(),
                        { store: l, patchesRef: n } = (0, R.m)({ createStore: () => cw.create(cG, i), getPendingPatchBatches: cB, patchesUpdatedEventName: C.s });
                    return (
                        (0, f.d)(r.get(N.y$), () => l.slam.offlineMode),
                        (0, K.jsxs)(K.Fragment, { children: [(0, K.jsx)(cU, { nonce: a, patchesRef: n }), (0, K.jsx)(k.P.Provider, { value: l, children: t })] })
                    );
                };
        },
        76794: (e, t, a) => {
            var i;
            (a.d(t, { J: () => i }),
                (function (e) {
                    ((e.OWN = 'OWN'), (e.UGC = 'UGC'), (e.OWN_REPLACED_TO_UGC = 'OWN_REPLACED_TO_UGC'), (e.EXTERNAL = 'EXTERNAL'));
                })(i || (i = {})));
        },
        77560: (e, t, a) => {
            a.d(t, { p: () => l });
            var i = a(61691),
                r = a(31946);
            let l = (e) => {
                let { labels: t, type: a } = e;
                return {
                    items: null == t ? void 0 : t.map((e) => ({ ...e, link: (0, r.r)(e.id) })),
                    count: null == t ? void 0 : t.length,
                    hasLabels: !!(null == t ? void 0 : t.length),
                    isPublisher: a === i._.PODCAST,
                    names: null == t ? void 0 : t.map((e) => e.name).join(', '),
                };
            };
        },
        78180: (e, t, a) => {
            a.d(t, { J: () => i });
            var i = (function (e) {
                return ((e.COLLECTION = 'collection'), (e.VIBE = 'vibe'), e);
            })({});
        },
        78460: (e, t, a) => {
            a.d(t, { I: () => l });
            var i = a(5120),
                r = a(90544);
            let l = a(83176).Z.props({ artists: i.gK.maybe(i.gK.array(r.P)) });
        },
        78686: (e, t, a) => {
            a.d(t, { t: () => r });
            var i = a(70565);
            let r = (e, t) => {
                let { isMobile: a, isOfflineModeEnabled: r } = t,
                    { isNonUserGenerated: l } = (0, i.I)(e.trackSource);
                return e.isAvailable && l && !a && !r;
            };
        },
        79993: (e, t, a) => {
            var i;
            (a.d(t, { U: () => i }),
                (function (e) {
                    ((e.UNKNOWN = 'unknown'), (e.MALE = 'male'), (e.FEMALE = 'female'));
                })(i || (i = {})));
        },
        80989: (e, t, a) => {
            a.d(t, { f: () => i });
            let i = (e) => String([...e].sort());
        },
        81423: (e, t, a) => {
            a.d(t, { B: () => r, d: () => i });
            let i = 20,
                r = 1;
        },
        82457: (e, t, a) => {
            a.d(t, { l: () => r });
            var i = a(7123);
            let r = (e, t) => ({ type: i.z4.Unloaded, meta: { id: e, albumId: t } });
        },
        83176: (e, t, a) => {
            a.d(t, { Z: () => l });
            var i = a(5120);
            let r = i.gK.model('TrackIdModel', { id: i.gK.union(i.gK.string, i.gK.number), albumId: i.gK.maybe(i.gK.number), timestamp: i.gK.maybe(i.gK.string) }),
                l = a(39339)
                    .$.props({ tracks: i.gK.maybe(i.gK.array(r)) })
                    .actions((e) => ({ getKey: (t) => ''.concat(t, '_').concat(e.id) }));
        },
        83890: (e, t, a) => {
            a.d(t, { p: () => l });
            var i = a(5120),
                r = a(41917);
            let l = (e) => {
                let t = (0, r.m)(e);
                return (0, i.wg)(t);
            };
        },
        84403: (e, t, a) => {
            var i;
            (a.d(t, { o: () => i }),
                (function (e) {
                    ((e.ARTIST = 'artist'), (e.COMPOSER = 'composer'));
                })(i || (i = {})));
        },
        84985: (e, t, a) => {
            a.d(t, { u: () => i });
            var i = (function (e) {
                return ((e.FILE_TOO_LARGE = 'FILE_TOO_LARGE'), (e.TOO_MANY_FILES = 'TOO_MANY_FILES'), (e.UNKNOWN_ERROR = 'UNKNOWN_ERROR'), (e.SUCCESS = 'SUCCESS'), e);
            })({});
        },
        85585: (e, t, a) => {
            a.d(t, { u: () => i });
            var i = (function (e) {
                return ((e.SYNC_LYRICS = 'syncLyrics'), (e.PLAY_QUEUE = 'playQueue'), e);
            })({});
        },
        85587: (e, t, a) => {
            a.d(t, { Z: () => i, n: () => r });
            var i = (function (e) {
                    return ((e.REJECT = 'REJECT'), (e.UNSAFE = 'UNSAFE'), e);
                })({}),
                r = (function (e) {
                    return ((e.ALBUM = 'album'), (e.PODCAST = 'podcast'), (e.AUDIOBOOK = 'audiobook'), (e.ARTIST = 'artist'), (e.TRACK = 'track'), (e.CLIP = 'clip'), e);
                })({});
        },
        87128: (e, t, a) => {
            a.d(t, { h: () => i });
            var i = (function (e) {
                return ((e.DISCOGRAPHY = 'discography'), (e.ALBUMS = 'albums'), (e.COMPILATIONS = 'compilations'), e);
            })({});
        },
        90420: (e, t, a) => {
            a.d(t, { M1: () => i, N7: () => s, UM: () => r, q7: () => n, yx: () => l });
            let i = 'user:onyourwave',
                r = ['activity'],
                l = 'diversity:reshuffle',
                n = 'multivibe',
                s = 'user';
        },
        93512: (e, t, a) => {
            a.d(t, { K: () => r });
            var i = a(51231);
            let r = (e) => {
                var t;
                if (e) return { animationUri: e.animationUri, cover: (0, i.p)(e.cover), entityType: null == (t = e.entity) ? void 0 : t.type };
            };
        },
        97804: (e, t, a) => {
            var i;
            (a.d(t, { J: () => i }),
                (function (e) {
                    ((e.OK = 'ok'), (e.ERROR = 'error'));
                })(i || (i = {})));
        },
        98138: (e, t, a) => {
            a.d(t, { d: () => l });
            var i = a(5120),
                r = a(89625);
            let l = (e) => {
                let t = (0, r.G)(e);
                return (0, i.wg)(t);
            };
        },
        98953: (e, t, a) => {
            a.d(t, { Y: () => i });
            var i = (function (e) {
                return (
                    (e.ALBUM = 'album'),
                    (e.ARTIST = 'artist'),
                    (e.PLAYLIST = 'playlist'),
                    (e.TRACK = 'track'),
                    (e.CLIP = 'clip'),
                    (e.LABEL = 'label'),
                    (e.CONCERT = 'concert'),
                    e
                );
            })({});
        },
        99007: (e, t, a) => {
            a.d(t, { j: () => i });
            var i = (function (e) {
                return ((e[(e.LIKE = 3)] = 'LIKE'), (e[(e.CHART = 1076)] = 'CHART'), e);
            })({});
        },
        99159: (e, t, a) => {
            a.d(t, { J: () => r });
            var i = a(5120);
            let r = (e) => {
                var t;
                return {
                    id: e.id,
                    title: e.title,
                    weblink: null != (t = e.action.weblink) ? t : '',
                    covers: (0, i.wg)(e.covers || []),
                    imagesLayoutType: e.style.imagesLayoutType,
                };
            };
        },
        99211: (e, t, a) => {
            a.d(t, { j: () => n });
            var i = a(5120),
                r = a(48109),
                l = a(12906);
            let n = (e) => {
                var t, a, n, s, o;
                e = e || {};
                let d = (0, l.m)(e.trailer);
                return (0, i.wg)({
                    isAvailable: null == (s = e.available) || s,
                    uid: e.uid,
                    uuid: null != (o = e.playlistUuid) ? o : '',
                    kind: e.kind,
                    title: e.title,
                    coverUri: (null == e || null == (t = e.cover) ? void 0 : t.uri) || (null == e || null == (n = e.cover) || null == (a = n.itemsUri) ? void 0 : a[0]),
                    tracksCount: e.trackCount,
                    likesCount: e.likesCount,
                    averageColor: (0, r.Q)(null == e ? void 0 : e.derivedColors),
                    revision: e.revision,
                    generatedPlaylistType: e.generatedPlaylistType,
                    personalColor: e.personalColor,
                    visibility: e.visibility,
                    trailer: d,
                });
            };
        },
    },
]);
